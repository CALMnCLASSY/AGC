import Link from "next/link";
import { ArrowLeft, ChevronRight, TrendingUp, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Investment Gold from Tanzania | Buy Physical Gold | African Gold Company",
    description:
        "Invest in physical gold certified 99.9% pure from Tanzania. Hedge against inflation, diversify your portfolio with real gold bars. Contact us for investment pricing.",
    keywords: [
        "investment gold Tanzania", "buy physical gold Africa", "gold investment",
        "gold portfolio diversification", "physical gold inflation hedge",
        "tangible gold investment", "gold bullion investment", "safe haven gold Africa",
        "Tanzania gold for investors",
    ],
    alternates: { canonical: "/products/investment-gold" },
    openGraph: {
        title: "Investment Gold – Certified 99.9% Pure | African Gold Company Tanzania",
        description: "Physical gold for individuals, family offices, and institutions. Trusted Tanzanian source.",
        url: "https://pureafricagold.com/products/investment-gold",
        type: "website",
    },
};


const benefits = [
    { title: "Inflation Hedge", desc: "Gold historically maintains purchasing power over time, protecting wealth against inflation." },
    { title: "Portfolio Diversification", desc: "Low correlation with equities and bonds makes gold an effective portfolio diversifier." },
    { title: "Safe Haven Asset", desc: "Gold tends to perform well during periods of economic uncertainty and market volatility." },
    { title: "Tangible Asset", desc: "Physical gold is a real, tangible asset with intrinsic value — unlike paper or digital assets." },
    { title: "Global Liquidity", desc: "Gold is universally recognised and can be sold in any major financial centre worldwide." },
    { title: "No Counterparty Risk", desc: "Physical gold held in your possession carries no counterparty risk, unlike financial instruments." },
];

const options = [
    { name: "Personal Investment", min: "100g", desc: "Ideal for individual investors looking to start building a physical gold position." },
    { name: "Family Office", min: "1kg+", desc: "Structured investment programmes for family offices and private wealth managers." },
    { name: "Institutional", min: "10kg+", desc: "Bulk allocation for pension funds, endowments, and institutional portfolios." },
];

export default function InvestmentGoldPage() {
    return (
        <div className="min-h-screen bg-charcoal-900 text-white">
            <div className="relative py-24 bg-gradient-to-b from-charcoal-800 to-charcoal-900 border-b border-gold-500/20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/#products" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Products
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                            <TrendingUp className="h-7 w-7 text-gold-500" />
                        </div>
                        <div>
                            <p className="text-gold-500 text-sm uppercase tracking-widest font-medium">Our Gold</p>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold">Investment Gold</h1>
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
                        Physical gold remains one of the world's most trusted stores of value. Our investment-grade gold bars offer a direct, transparent route to owning certified Tanzanian gold.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
                {/* Why Gold */}
                <div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-8">Why Invest in Physical Gold?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {benefits.map((b) => (
                            <div key={b.title} className="p-5 rounded-lg border border-gold-500/20 bg-charcoal-800/50 hover:border-gold-500/40 transition-colors">
                                <CheckCircle2 className="h-5 w-5 text-gold-500 mb-3" />
                                <h3 className="text-white font-bold text-sm mb-2">{b.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Investment Options */}
                <div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-8">Investment Options</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {options.map((o) => (
                            <div key={o.name} className="p-6 rounded-lg border border-gold-500/30 bg-charcoal-800/50 text-center">
                                <h3 className="text-gold-500 font-heading font-bold text-lg mb-2">{o.name}</h3>
                                <p className="text-white text-sm font-medium mb-3">From {o.min}</p>
                                <p className="text-gray-400 text-sm">{o.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="p-6 rounded-lg border border-gold-500/10 bg-charcoal-800/30">
                    <p className="text-gray-500 text-xs leading-relaxed">
                        <strong className="text-gray-400">Important:</strong> Gold investment carries risk. The value of gold can go down as well as up. Past performance is not indicative of future results. This page is for informational purposes only and does not constitute financial advice. Please consult a qualified financial adviser before making investment decisions.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-900 font-bold rounded-lg hover:bg-gold-400 transition-colors">
                        Get Investment Quote <ChevronRight className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
