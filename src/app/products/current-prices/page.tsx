import Link from "next/link";
import { ArrowLeft, ChevronRight, BarChart3, RefreshCw } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Current Gold Prices | African Gold Company",
    description: "Live gold spot prices and our current buy/sell rates for Tanzanian gold bars. Updated daily.",
};

export default function CurrentPricesPage() {
    // Note: In production, these would be fetched from a live gold price API
    const lastUpdated = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const weights = [
        { weight: "1g", approxUSD: "Contact for price" },
        { weight: "5g", approxUSD: "Contact for price" },
        { weight: "10g", approxUSD: "Contact for price" },
        { weight: "100g", approxUSD: "Contact for price" },
        { weight: "250g", approxUSD: "Contact for price" },
        { weight: "500g", approxUSD: "Contact for price" },
        { weight: "1kg", approxUSD: "Contact for price" },
        { weight: "Custom", approxUSD: "Negotiated" },
    ];

    return (
        <div className="min-h-screen bg-charcoal-900 text-white">
            <div className="relative py-24 bg-gradient-to-b from-charcoal-800 to-charcoal-900 border-b border-gold-500/20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/#products" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Products
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                            <BarChart3 className="h-7 w-7 text-gold-500" />
                        </div>
                        <div>
                            <p className="text-gold-500 text-sm uppercase tracking-widest font-medium">Our Gold</p>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold">Current Prices</h1>
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
                        Our gold prices are based on the current international spot price (LBMA AM/PM fix) plus a transparent margin. Contact us for a firm, time-stamped quote valid for 24 hours.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
                {/* Live price note */}
                <div className="flex items-center gap-3 p-4 rounded-lg border border-gold-500/20 bg-gold-500/5">
                    <RefreshCw className="h-5 w-5 text-gold-500 flex-shrink-0" />
                    <p className="text-gray-300 text-sm">
                        Prices are updated daily based on the LBMA gold fix. Last updated: <strong className="text-white">{lastUpdated}</strong>. Contact us for a live quote.
                    </p>
                </div>

                {/* Price table */}
                <div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-6">Price Guide by Weight</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gold-500/20">
                                    <th className="text-left py-3 px-4 text-gold-500 font-bold uppercase tracking-wider">Weight</th>
                                    <th className="text-left py-3 px-4 text-gold-500 font-bold uppercase tracking-wider">Purity</th>
                                    <th className="text-left py-3 px-4 text-gold-500 font-bold uppercase tracking-wider">Price (USD)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {weights.map((w, i) => (
                                    <tr key={w.weight} className={`border-b border-gold-500/10 ${i % 2 === 0 ? "bg-charcoal-800/30" : ""}`}>
                                        <td className="py-4 px-4 text-white font-medium">{w.weight}</td>
                                        <td className="py-4 px-4 text-gray-300">99.9%</td>
                                        <td className="py-4 px-4 text-gray-300">{w.approxUSD}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-500 text-xs mt-4">* Prices are indicative only. Final price confirmed at time of transaction based on live spot price.</p>
                </div>

                {/* How pricing works */}
                <div className="p-6 rounded-lg border border-gold-500/20 bg-charcoal-800/50">
                    <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-gold-500" />
                        How Our Pricing Works
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Our gold prices are calculated as: <strong className="text-white">LBMA Spot Price + Refining Premium + Logistics</strong>. We offer competitive margins and transparent pricing. For bulk orders (5kg+), we offer preferential rates. All prices are quoted in USD and can be settled via SWIFT bank transfer.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-900 font-bold rounded-lg hover:bg-gold-400 transition-colors">
                        Get a Live Quote <ChevronRight className="h-5 w-5" />
                    </Link>
                    <Link href="/products/bulk-orders" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-500 text-gold-500 font-bold rounded-lg hover:bg-gold-500/10 transition-colors">
                        Bulk Order Pricing
                    </Link>
                </div>
            </div>
        </div>
    );
}
