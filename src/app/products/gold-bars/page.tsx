import Link from "next/link";
import { ArrowLeft, ChevronRight, Award, Shield, Truck, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gold Bars | African Gold Company",
    description: "99.9% pure gold bars direct from Tanzanian mines. Available in 100g, 250g, 500g, and 1kg. Certified, insured, and shipped worldwide.",
};

const products = [
    { weight: "100g", dimensions: "50mm x 28mm x 4mm", price: "Contact for price" },
    { weight: "250g", dimensions: "80mm x 40mm x 6mm", price: "Contact for price" },
    { weight: "500g", dimensions: "100mm x 46mm x 7mm", price: "Contact for price" },
    { weight: "1000g (1kg)", dimensions: "115mm x 52mm x 8mm", price: "Contact for price" },
];

const features = [
    "99.9% (999 fine) gold purity",
    "Independently assayed and certified",
    "Serial numbered for traceability",
    "LBMA Good Delivery standards",
    "Vacuum sealed in protective packaging",
    "Full export documentation included",
    "Insured shipping available worldwide",
    "Direct from Tanzanian mines",
];

export default function GoldBarsPage() {
    return (
        <div className="min-h-screen bg-charcoal-900 text-white">
            <div className="relative py-24 bg-gradient-to-b from-charcoal-800 to-charcoal-900 border-b border-gold-500/20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/#products" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Products
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                            <Award className="h-7 w-7 text-gold-500" />
                        </div>
                        <div>
                            <p className="text-gold-500 text-sm uppercase tracking-widest font-medium">Our Gold</p>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold">Gold Bars</h1>
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
                        Investment-grade gold bars refined to 99.9% purity, direct from our licensed operations in the Lake Victoria Goldfields. Available in multiple weights to suit individual and institutional investors.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
                {/* Product Image */}
                <div className="relative h-80 w-full rounded-xl overflow-hidden bg-charcoal-800">
                    <Image src="/gallery/products/goldbarkilo.jpeg" alt="Gold Bars" fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 to-transparent" />
                    <div className="absolute bottom-6 left-6">
                        <span className="px-4 py-2 bg-gold-500 text-charcoal-900 font-bold rounded-full text-sm">99.9% Pure Gold</span>
                    </div>
                </div>

                {/* Weight Options */}
                <div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-8">Available Weights</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {products.map((p) => (
                            <div key={p.weight} className="p-6 rounded-lg border border-gold-500/20 bg-charcoal-800/50 text-center hover:border-gold-500/50 transition-colors">
                                <p className="text-2xl font-heading font-bold text-gold-500 mb-2">{p.weight}</p>
                                <p className="text-gray-400 text-xs mb-4">{p.dimensions}</p>
                                <p className="text-gray-300 text-sm font-medium">{p.price}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features */}
                <div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-8">Product Features</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {features.map((f) => (
                            <div key={f} className="flex items-center gap-3 p-4 rounded-lg border border-gold-500/20 bg-charcoal-800/50">
                                <CheckCircle2 className="h-4 w-4 text-gold-500 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{f}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trust badges */}
                <div className="grid grid-cols-3 gap-6">
                    {[
                        { icon: Award, label: "Certified" },
                        { icon: Shield, label: "Insured" },
                        { icon: Truck, label: "Global Shipping" },
                    ].map(({ icon: Icon, label }) => (
                        <div key={label} className="p-6 rounded-lg border border-gold-500/20 bg-charcoal-800/50 text-center">
                            <Icon className="h-8 w-8 text-gold-500 mx-auto mb-3" />
                            <p className="text-gray-300 font-medium">{label}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-900 font-bold rounded-lg hover:bg-gold-400 transition-colors">
                        Get a Quote <ChevronRight className="h-5 w-5" />
                    </Link>
                    <Link href="/products/bulk-orders" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-500 text-gold-500 font-bold rounded-lg hover:bg-gold-500/10 transition-colors">
                        View Bulk Orders
                    </Link>
                </div>
            </div>
        </div>
    );
}
