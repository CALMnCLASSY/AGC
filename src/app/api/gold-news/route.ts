import { NextResponse } from 'next/server';

export interface RssItem {
    id: string;
    title: string;
    link: string;
    description: string;
    pubDate: string;
    category: string;
    image: string | null;
}

// Fallback gold-related image from Unsplash (used when no image in feed)
const FALLBACK_IMAGES = [
    'https://images.unsplash.com/photo-1610375461490-67981315250d?q=80&w=2670&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599707367072-cd6ad6cb3d2e?q=80&w=2600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1624365168968-f283d506c6b6?q=80&w=2670&auto=format&fit=crop',
];

function extractImage(item: Element): string | null {
    // Try <media:content> or <media:thumbnail>
    const media =
        item.getElementsByTagName('media:content')[0] ||
        item.getElementsByTagName('media:thumbnail')[0];
    if (media) return media.getAttribute('url');

    // Try <enclosure>
    const enclosure = item.getElementsByTagName('enclosure')[0];
    if (enclosure) return enclosure.getAttribute('url');

    // Try to extract from description HTML
    const desc = item.getElementsByTagName('description')[0]?.textContent || '';
    const imgMatch = desc.match(/<img[^>]+src="([^"]+)"/);
    if (imgMatch) return imgMatch[1];

    return null;
}

function stripHtml(html: string): string {
    return html
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .trim();
}

// Require 'gold', 'bullion', or 'precious metal' in the title/description to avoid tangential finance articles
function isGoldRelated(text: string): boolean {
    const lower = text.toLowerCase();
    return lower.includes('gold') || lower.includes('bullion') || lower.includes('precious metal');
}

function parseRss(xml: string): RssItem[] {
    // Simple regex-based parser (no DOM available in edge runtime)
    const items: RssItem[] = [];
    const itemMatches = xml.matchAll(/<item>([\s\S]*?)<\/item>/g);

    let index = 0;
    for (const match of itemMatches) {
        const itemXml = match[1];

        const title = stripHtml(itemXml.match(/<title>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/)?.[1] || '');
        const link = itemXml.match(/<link>([\s\S]*?)<\/link>/)?.[1]?.trim() ||
            itemXml.match(/<guid[^>]*>([\s\S]*?)<\/guid>/)?.[1]?.trim() || '';
        const rawDesc = itemXml.match(/<description>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/)?.[1] || '';
        const description = stripHtml(rawDesc).slice(0, 220).trim();
        const pubDate = itemXml.match(/<pubDate>([\s\S]*?)<\/pubDate>/)?.[1]?.trim() || '';
        const category = stripHtml(itemXml.match(/<category>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/category>/)?.[1] || 'Gold');

        // Skip non-gold articles when using main feed
        if (!isGoldRelated(title + ' ' + description + ' ' + category)) continue;

        // Prefer post-thumbnail (mining.com custom tag), then media tags, then description img
        const image =
            itemXml.match(/<post-thumbnail>[\s\S]*?<url>([\s\S]*?)<\/url>/)?.[1]?.trim() ||
            itemXml.match(/<media:content[^>]+url="([^"]+)"/)?.[1] ||
            itemXml.match(/<media:thumbnail[^>]+url="([^"]+)"/)?.[1] ||
            itemXml.match(/<enclosure[^>]+url="([^"]+)"/)?.[1] ||
            rawDesc.match(/<img[^>]+src="([^"]+)"/)?.[1] ||
            FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];

        if (title && link) {
            items.push({
                id: `rss-${index}`,
                title,
                link,
                description,
                pubDate,
                category: category || 'Gold',
                image,
            });
            index++;
        }

        if (index >= 12) break; // Limit to 12 items
    }

    return items;
}

// Cache this route for 1 hour at the edge
export const revalidate = 3600;

export async function GET() {
    try {
        // GLD ETF news = pure gold price & market articles. Yahoo topic feed as fallback.
        // (mining.com blocks Node.js fetch with 403; Yahoo Finance allows it)
        const RSS_URLS = [
            'https://feeds.finance.yahoo.com/rss/2.0/headline?s=GLD&region=US&lang=en-US',
            'https://finance.yahoo.com/rss/topic/gold-news',
        ];


        // 15-second timeout so the route never hangs indefinitely
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 15000);

        let xml = '';
        let response: Response | null = null;

        try {
            for (const url of RSS_URLS) {
                try {
                    response = await fetch(url, {
                        headers: {
                            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
                            'Accept': 'application/rss+xml, application/xml, text/xml, */*',
                            'Accept-Language': 'en-US,en;q=0.9',
                        },
                        signal: controller.signal,
                    });
                    if (response.ok) {
                        xml = await response.text();
                        if (xml.includes('<item>')) break; // Got a valid feed
                    }
                } catch {
                    // Try next URL
                }
            }
        } finally {
            clearTimeout(timeoutId);
        }

        if (!xml || !xml.includes('<item>')) {
            throw new Error('No valid RSS feed available');
        }

        const items = parseRss(xml);

        if (items.length === 0) {
            throw new Error('No items parsed from RSS feed');
        }

        return NextResponse.json({ items, fetchedAt: new Date().toISOString() });

    } catch (error) {
        console.error('RSS feed error:', error);

        // Return fallback static data if RSS fails
        const fallback: RssItem[] = [
            {
                id: 'fallback-1',
                title: 'Gold Prices Reach New Heights Amid Global Uncertainty',
                link: 'https://mining.com/gold/',
                description: 'Gold prices continue to climb as investors seek safe-haven assets amid ongoing geopolitical tensions and economic uncertainty.',
                pubDate: new Date().toISOString(),
                category: 'Markets',
                image: FALLBACK_IMAGES[0],
            },
            {
                id: 'fallback-2',
                title: 'Tanzania Gold Production Hits Record Levels',
                link: 'https://mining.com/gold/',
                description: "Tanzania's gold mining sector reports record production figures, cementing the country's position as East Africa's leading gold producer.",
                pubDate: new Date(Date.now() - 86400000).toISOString(),
                category: 'Production',
                image: FALLBACK_IMAGES[1],
            },
            {
                id: 'fallback-3',
                title: 'Central Banks Continue Gold Accumulation Strategy',
                link: 'https://mining.com/gold/',
                description: 'Global central banks maintain their gold buying trend, with emerging market banks leading purchases as dollar diversification continues.',
                pubDate: new Date(Date.now() - 172800000).toISOString(),
                category: 'Investment',
                image: FALLBACK_IMAGES[2],
            },
        ];

        return NextResponse.json(
            { items: fallback, fetchedAt: new Date().toISOString(), fallback: true },
            { status: 200 }
        );
    }
}

