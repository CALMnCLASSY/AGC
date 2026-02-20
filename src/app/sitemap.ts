import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const base = 'https://pureafricagold.com';
    const now = new Date();

    return [
        { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${base}/news`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
        { url: `${base}/products/gold-bars`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
        { url: `${base}/products/bulk-orders`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${base}/products/investment-gold`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${base}/operations/exploration`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${base}/operations/refinement`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${base}/operations/export-licensing`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${base}/operations/sustainability`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${base}/legal/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${base}/legal/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${base}/legal/compliance`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    ];
}
