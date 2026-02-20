"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, ExternalLink, ArrowLeft, RefreshCw, Rss, AlertCircle } from "lucide-react";
import type { RssItem } from "@/app/api/gold-news/route";

const CATEGORIES = ["All", "Markets", "Production", "Investment", "Sustainability", "Technology"];

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

function NewsCard({ item, index }: { item: RssItem; index: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group glass-card rounded-xl overflow-hidden hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1 flex flex-col"
        >
            {/* Image */}
            <div className="relative h-52 overflow-hidden bg-charcoal-800 flex-shrink-0">
                {item.image ? (
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${item.image})` }}
                        role="img"
                        aria-label={item.title}
                    />
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal-800 to-charcoal-700 flex items-center justify-center">
                        <Rss className="h-12 w-12 text-gold-500/30" />
                    </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gold-500 text-charcoal-900 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg shadow-gold-500/30">
                        {item.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                    <Calendar className="h-3 w-3" />
                    <span>{formatDate(item.pubDate)}</span>
                </div>

                <h3 className="text-white font-heading font-bold text-base mb-3 group-hover:text-gold-400 transition-colors line-clamp-2 leading-snug flex-grow">
                    {item.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">
                    {item.description}
                </p>

                <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold-500 text-sm hover:text-gold-400 font-medium transition-colors mt-auto"
                >
                    Read full article <ExternalLink className="h-3 w-3" />
                </Link>
            </div>
        </motion.article>
    );
}

export default function NewsPage() {
    const [items, setItems] = useState<RssItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [isFallback, setIsFallback] = useState(false);
    const [fetchedAt, setFetchedAt] = useState<string | null>(null);
    const [activeCategory, setActiveCategory] = useState("All");
    const [refreshing, setRefreshing] = useState(false);

    async function fetchNews() {
        try {
            setRefreshing(true);
            const res = await fetch("/api/gold-news", { cache: "no-store" });
            const data = await res.json();
            setItems(data.items || []);
            setIsFallback(data.fallback || false);
            setFetchedAt(data.fetchedAt || null);
            setError(false);
        } catch {
            setError(true);
        } finally {
            setLoading(false);
            setRefreshing(false);
        }
    }

    useEffect(() => {
        fetchNews();
    }, []);

    const filtered = activeCategory === "All"
        ? items
        : items.filter((i) => i.category.toLowerCase().includes(activeCategory.toLowerCase()));

    return (
        <div className="min-h-screen bg-charcoal-900 text-white">
            {/* Hero */}
            <div className="relative py-24 bg-gradient-to-b from-charcoal-800 to-charcoal-900 border-b border-gold-500/20 overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500 rounded-full blur-[120px]" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link href="/#news" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Home
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                                    <Rss className="h-6 w-6 text-gold-500" />
                                </div>
                                <p className="text-gold-500 text-sm uppercase tracking-widest font-medium">Live Feed</p>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                                Gold <span className="gold-gradient-text">Market News</span>
                            </h1>
                            <p className="text-gray-400 text-lg max-w-2xl">
                                Live gold industry news powered by{" "}
                                <Link href="https://mining.com/gold/" target="_blank" rel="noopener noreferrer" className="text-gold-500 hover:underline">
                                    Mining.com
                                </Link>
                                . Updated hourly.
                            </p>
                        </div>

                        <button
                            onClick={fetchNews}
                            disabled={refreshing}
                            className="inline-flex items-center gap-2 px-5 py-3 border border-gold-500/40 text-gold-500 rounded-lg hover:bg-gold-500/10 transition-colors text-sm font-medium disabled:opacity-50"
                        >
                            <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
                            {refreshing ? "Refreshing..." : "Refresh Feed"}
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Status bar */}
                {fetchedAt && (
                    <div className="flex items-center justify-between mb-8 text-xs text-gray-500">
                        <span>
                            {isFallback ? (
                                <span className="flex items-center gap-1.5 text-amber-500">
                                    <AlertCircle className="h-3.5 w-3.5" />
                                    Showing cached data — live feed temporarily unavailable
                                </span>
                            ) : (
                                <span className="flex items-center gap-1.5 text-green-500">
                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                    Live feed active
                                </span>
                            )}
                        </span>
                        <span>Last updated: {formatDate(fetchedAt)}</span>
                    </div>
                )}

                {/* Category filter */}
                <div className="flex flex-wrap gap-2 mb-10">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                                ? "bg-gold-500 text-charcoal-900"
                                : "border border-gold-500/30 text-gray-400 hover:border-gold-500/60 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Loading */}
                {loading && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="rounded-xl border border-gold-500/10 bg-charcoal-800/50 overflow-hidden animate-pulse">
                                <div className="h-52 bg-charcoal-700" />
                                <div className="p-5 space-y-3">
                                    <div className="h-3 bg-charcoal-700 rounded w-1/3" />
                                    <div className="h-4 bg-charcoal-700 rounded w-full" />
                                    <div className="h-4 bg-charcoal-700 rounded w-4/5" />
                                    <div className="h-3 bg-charcoal-700 rounded w-full" />
                                    <div className="h-3 bg-charcoal-700 rounded w-2/3" />
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Error */}
                {error && !loading && (
                    <div className="text-center py-20">
                        <AlertCircle className="h-12 w-12 text-gold-500/50 mx-auto mb-4" />
                        <p className="text-gray-400 mb-4">Unable to load news feed.</p>
                        <button onClick={fetchNews} className="px-6 py-3 bg-gold-500 text-charcoal-900 font-bold rounded-lg hover:bg-gold-400 transition-colors">
                            Try Again
                        </button>
                    </div>
                )}

                {/* News grid */}
                {!loading && !error && (
                    <>
                        {filtered.length === 0 ? (
                            <div className="text-center py-20 text-gray-500">
                                No articles found for "{activeCategory}". Try a different category.
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {filtered.map((item, i) => (
                                    <NewsCard key={item.id} item={item} index={i} />
                                ))}
                            </div>
                        )}

                        <div className="mt-12 text-center">
                            <Link
                                href="https://mining.com/gold/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-8 py-4 border border-gold-500 text-gold-500 font-bold rounded-lg hover:bg-gold-500/10 transition-colors"
                            >
                                View All on Mining.com <ExternalLink className="h-4 w-4" />
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
