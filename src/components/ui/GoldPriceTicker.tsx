"use client";

import { useState, useEffect, useCallback } from 'react';
import { TrendingUp, TrendingDown, RefreshCw } from 'lucide-react';

interface PriceData {
    price: number;
    change: number;
    changePercent: number;
    timestamp: string;
    source: string;
}

export function GoldPriceTicker() {
    const [data, setData] = useState<PriceData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const fetchPrice = useCallback(async () => {
        try {
            const res = await fetch('/api/gold-price', { cache: 'no-store' });
            if (!res.ok) throw new Error('API error');

            const json = await res.json();
            if (json.price && typeof json.price === 'number') {
                setData({
                    price: json.price,
                    change: json.change ?? 0,
                    changePercent: json.changePercent ?? 0,
                    timestamp: json.timestamp,
                    source: json.source,
                });
                setError(false);
            } else {
                throw new Error('No price data');
            }
        } catch {
            console.error('Failed to fetch gold price');
            setError(true);
            // Keep old data if we have it
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPrice();
        // Refresh every 5 minutes to match server-side cache
        const interval = setInterval(fetchPrice, 300_000);
        return () => clearInterval(interval);
    }, [fetchPrice]);

    // Loading skeleton
    if (loading && !data) {
        return (
            <div className="glass-panel px-4 py-2 rounded-full border border-gold-500/20 animate-pulse">
                <div className="flex items-center gap-3">
                    <div className="h-3 w-12 bg-gold-500/20 rounded" />
                    <div className="h-4 w-20 bg-gold-500/20 rounded" />
                    <div className="h-3 w-16 bg-gold-500/20 rounded" />
                </div>
            </div>
        );
    }

    // Error state with no previous data
    if (error && !data) {
        return (
            <button
                onClick={fetchPrice}
                className="glass-panel px-4 py-2 rounded-full border border-gold-500/20 flex items-center gap-2 hover:border-gold-500/40 transition-colors cursor-pointer"
            >
                <RefreshCw className="h-3 w-3 text-gold-500/70" />
                <span className="text-gray-400 text-xs">Price unavailable</span>
            </button>
        );
    }

    if (!data) return null;

    const isPositive = data.change >= 0;

    return (
        <div
            className="glass-panel px-4 py-2 rounded-full border border-gold-500/30 flex items-center gap-3"
            title={`Source: ${data.source} • Updated: ${new Date(data.timestamp).toLocaleTimeString()}`}
        >
            <div className="flex items-center gap-2">
                <span className="text-gold-500/90 text-xs uppercase tracking-wider font-medium">Gold/oz</span>
                <span className="text-white font-bold text-sm">${data.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
            </div>

            <div className={`flex items-center gap-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                <span className="text-xs font-medium">
                    {isPositive ? '+' : ''}{data.change.toFixed(2)}
                </span>
                <span className="text-xs font-medium opacity-70">
                    ({isPositive ? '+' : ''}{data.changePercent.toFixed(2)}%)
                </span>
            </div>

            {/* Live indicator dot */}
            <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </div>
        </div>
    );
}
