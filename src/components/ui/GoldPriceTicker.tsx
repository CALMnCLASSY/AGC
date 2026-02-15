"use client";

import { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function GoldPriceTicker() {
    const [price, setPrice] = useState<number | null>(null);
    const [change, setChange] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Using a free gold price API (GoldAPI.io free tier or metals-api.com)
        // For demo, we'll use a simulated price that updates
        const fetchPrice = async () => {
            try {
                // Simulated price for demo - replace with real API
                const basePrice = 2045.50;
                const randomChange = (Math.random() - 0.5) * 10;
                setPrice(basePrice + randomChange);
                setChange(randomChange);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch gold price:', error);
                setLoading(false);
            }
        };

        fetchPrice();
        const interval = setInterval(fetchPrice, 60000); // Update every minute

        return () => clearInterval(interval);
    }, []);

    if (loading) {
        return (
            <div className="glass-panel px-4 py-2 rounded-full border border-gold-500/20">
                <span className="text-gray-400 text-sm">Loading...</span>
            </div>
        );
    }

    const isPositive = change >= 0;

    return (
        <div className="glass-panel px-4 py-2 rounded-full border border-gold-500/30 flex items-center gap-3">
            <div className="flex items-center gap-2">
                <span className="text-gold-500/90 text-xs uppercase tracking-wider font-medium">Gold/oz</span>
                <span className="text-white font-bold text-sm">${price?.toFixed(2)}</span>
            </div>

            <div className={`flex items-center gap-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                {isPositive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                <span className="text-xs font-medium">{isPositive ? '+' : ''}{change.toFixed(2)}</span>
            </div>
        </div>
    );
}
