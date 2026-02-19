"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, ExternalLink, Rss } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { RssItem } from "@/app/api/gold-news/route";

// Fallback to static data while live feed loads
import staticUpdates from "@/data/updates.json";

function formatDate(dateStr: string): string {
    try {
        return new Date(dateStr).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
        });
    } catch {
        return dateStr;
    }
}

export function NewsUpdates() {
    const [items, setItems] = useState<RssItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [isLive, setIsLive] = useState(false);

    useEffect(() => {
        fetch("/api/gold-news")
            .then((r) => r.json())
            .then((data) => {
                if (data.items?.length > 0) {
                    setItems(data.items.slice(0, 3));
                    setIsLive(!data.fallback);
                }
            })
            .catch(() => {
                // silently fall back to static data
            })
            .finally(() => setLoading(false));
    }, []);

    // Show static data while loading live feed
    const displayItems: Array<{ id: string | number; title: string; date?: string; pubDate?: string; category: string; image: string | null; description: string; link?: string }> =
        loading || items.length === 0
            ? staticUpdates.map((u) => ({ ...u, image: u.image }))
            : items;

    return (
        <section id="news" className="py-24 bg-gradient-to-b from-charcoal-800 via-charcoal-900 to-charcoal-800 border-t border-gold-500/10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Rss className="h-4 w-4 text-gold-500" />
                            {isLive ? (
                                <span className="flex items-center gap-1.5 text-xs text-green-500 font-medium">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                    Live from Mining.com
                                </span>
                            ) : (
                                <span className="text-xs text-gray-500">Gold Market News</span>
                            )}
                        </div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                            Latest <span className="gold-gradient-text">Updates</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl text-lg">
                            Real-time gold market insights and industry news.
                        </p>
                    </div>
                    <Link href="/news">
                        <Button variant="outline" className="text-gold-500 border-gold-500 hover:bg-gold-500 hover:text-charcoal-900 hidden md:flex shadow-lg shadow-gold-500/10">
                            View All News <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {displayItems.map((item, i) => {
                        const dateStr = (item as RssItem).pubDate || (item as typeof staticUpdates[0]).date || "";
                        const isExternal = !!(item as RssItem).link;
                        const href = (item as RssItem).link || "#";

                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group glass-card rounded-lg overflow-hidden hover:border-gold-500/50 transition-all hover:scale-105 cursor-pointer"
                            >
                                <div className="relative h-48 overflow-hidden bg-charcoal-800">
                                    {item.image ? (
                                        <div
                                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                            role="img"
                                            aria-label={item.title}
                                        />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-br from-charcoal-800 to-charcoal-700 flex items-center justify-center">
                                            <Rss className="h-10 w-10 text-gold-500/20" />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-transparent" />
                                    <div className="absolute top-4 left-4 bg-gold-500 text-charcoal-900 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full shadow-lg shadow-gold-500/30">
                                        {item.category}
                                    </div>
                                </div>

                                <div className="p-6 glass-panel border-t border-gold-500/10 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                                        <Calendar className="h-3 w-3" />
                                        <span>{formatDate(dateStr)}</span>
                                    </div>

                                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-gold-400 transition-colors line-clamp-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                                        {item.description}
                                    </p>

                                    {isExternal ? (
                                        <Link
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center text-gold-500 text-sm hover:text-gold-400 hover:underline underline-offset-4 font-medium transition-colors"
                                        >
                                            Read on Mining.com <ExternalLink className="ml-1 h-3 w-3" />
                                        </Link>
                                    ) : (
                                        <Link href="/news" className="inline-flex items-center text-gold-500 text-sm hover:text-gold-400 hover:underline underline-offset-4 font-medium transition-colors">
                                            Read Full Report <ArrowRight className="ml-1 h-3 w-3" />
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Link href="/news">
                        <Button variant="outline" className="w-full text-gold-500 border-gold-500 hover:bg-gold-500 hover:text-charcoal-900">
                            View All News
                        </Button>
                    </Link>
                </div>

            </div>
        </section>
    );
}
