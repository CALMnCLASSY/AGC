import { NextResponse } from 'next/server';

interface GoldPriceResponse {
    price: number;
    change: number;
    changePercent: number;
    previousClose: number;
    dayHigh: number;
    dayLow: number;
    timestamp: string;
    source: string;
}

// Cache for 5 minutes at the edge to stay within free tier limits
export const revalidate = 300;

const HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    'Accept': 'application/json',
};

/**
 * Fetch the spot price from gold-api.com (free, no key).
 * Returns just the current price — no change data on the free tier.
 */
async function fetchGoldApi(signal: AbortSignal): Promise<number | null> {
    try {
        const res = await fetch('https://api.gold-api.com/price/XAU', {
            headers: HEADERS,
            signal,
        });
        if (res.ok) {
            const data = await res.json();
            if (data.price && typeof data.price === 'number') {
                return data.price;
            }
        }
    } catch {
        // gold-api.com failed
    }
    return null;
}

/**
 * Fetch gold futures data from Yahoo Finance (GC=F).
 * Returns price, previous close, day high/low — everything we need for change calc.
 */
async function fetchYahooFinance(signal: AbortSignal): Promise<{
    price: number;
    previousClose: number;
    dayHigh: number;
    dayLow: number;
} | null> {
    try {
        const res = await fetch(
            'https://query1.finance.yahoo.com/v8/finance/chart/GC=F?interval=1d&range=2d',
            { headers: HEADERS, signal }
        );
        if (res.ok) {
            const data = await res.json();
            const meta = data.chart?.result?.[0]?.meta;
            if (meta?.regularMarketPrice) {
                return {
                    price: meta.regularMarketPrice,
                    previousClose: meta.chartPreviousClose ?? meta.previousClose ?? meta.regularMarketPrice,
                    dayHigh: meta.regularMarketDayHigh ?? meta.regularMarketPrice,
                    dayLow: meta.regularMarketDayLow ?? meta.regularMarketPrice,
                };
            }
        }
    } catch {
        // Yahoo failed
    }
    return null;
}

export async function GET() {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 12000);

    try {
        // Fetch both sources in parallel for speed
        const [goldApiPrice, yahooData] = await Promise.all([
            fetchGoldApi(controller.signal),
            fetchYahooFinance(controller.signal),
        ]);

        // Best case: we have both — use gold-api spot price + yahoo change data
        if (goldApiPrice && yahooData) {
            const change = goldApiPrice - yahooData.previousClose;
            const changePercent = yahooData.previousClose
                ? (change / yahooData.previousClose) * 100
                : 0;

            const result: GoldPriceResponse = {
                price: goldApiPrice,
                change: parseFloat(change.toFixed(2)),
                changePercent: parseFloat(changePercent.toFixed(2)),
                previousClose: yahooData.previousClose,
                dayHigh: yahooData.dayHigh,
                dayLow: yahooData.dayLow,
                timestamp: new Date().toISOString(),
                source: 'gold-api.com + yahoo-finance',
            };
            return NextResponse.json(result);
        }

        // Yahoo only — still great, has all the data we need
        if (yahooData) {
            const change = yahooData.price - yahooData.previousClose;
            const changePercent = yahooData.previousClose
                ? (change / yahooData.previousClose) * 100
                : 0;

            const result: GoldPriceResponse = {
                price: yahooData.price,
                change: parseFloat(change.toFixed(2)),
                changePercent: parseFloat(changePercent.toFixed(2)),
                previousClose: yahooData.previousClose,
                dayHigh: yahooData.dayHigh,
                dayLow: yahooData.dayLow,
                timestamp: new Date().toISOString(),
                source: 'yahoo-finance',
            };
            return NextResponse.json(result);
        }

        // Gold-api only — we have the price but no change reference
        if (goldApiPrice) {
            const result: GoldPriceResponse = {
                price: goldApiPrice,
                change: 0,
                changePercent: 0,
                previousClose: 0,
                dayHigh: goldApiPrice,
                dayLow: goldApiPrice,
                timestamp: new Date().toISOString(),
                source: 'gold-api.com',
            };
            return NextResponse.json(result);
        }

        // All sources failed
        return NextResponse.json(
            {
                price: null,
                change: null,
                changePercent: null,
                timestamp: new Date().toISOString(),
                source: 'unavailable',
                error: 'All gold price sources are currently unavailable',
            },
            { status: 503 }
        );
    } finally {
        clearTimeout(timeoutId);
    }
}
