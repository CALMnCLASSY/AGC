import Link from "next/link";
import { ArrowLeft, ChevronRight, Package, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bulk Gold Orders | Wholesale Gold Tanzania | African Gold Company",
    description:
        "Competitive bulk gold pricing for institutional buyers, refineries, jewellers, and banks. Minimum 5kg. Full assay certification, export documentation, insured shipping worldwide.",
    keywords: [
        "bulk gold Tanzania", "wholesale gold Africa", "buy gold in bulk",
        "gold supplier institutional", "gold refinery supply Tanzania",
        "gold wholesale price Africa", "large gold order Tanzania",
        "gold dealer Africa", "Tanzania gold export wholesale",
    ],
    alternates: { canonical: "/products/bulk-orders" },
    openGraph: {
        title: "Bulk Gold Orders – Wholesale Pricing | African Gold Company",
        description: "Institutional gold at competitive pricing. 5kg–100kg+ with dedicated account management.",
        url: "https://pureafricagold.com/products/bulk-orders",
        type: "website",
    },
};


const tiers = [
    { range: "5kg – 20kg", discount: "Standard pricing", notes: "Full documentation, insured shipping" },
    { range: "20kg – 50kg", discount: "Preferential pricing", notes: "Dedicated account manager" },
    { range: "50kg – 100kg", discount: "Wholesale pricing", notes: "Priority processing, flexible payment" },
    { range: "100kg+", discount: "Negotiated pricing", notes: "Custom terms, direct mine supply" },
];

const process = [
    { step: "01", title: "Submit Inquiry", desc: "Contact us with your required quantity, preferred weight denomination, and delivery timeline." },
    { step: "02", title: "KYC Verification", desc: "Complete our KYC process by providing required identity and source of funds documentation." },
    { step: "03", title: "Price Agreement", desc: "Receive a firm price quote based on current spot price plus our margin. Valid for 24 hours." },
    { step: "04", title: "Payment & Confirmation", desc: "Secure payment via SWIFT bank transfer. Shipment confirmed upon funds clearance." },
    { step: "05", title: "Assay & Packaging", desc: "Gold is assayed, certified, and packaged with full documentation before dispatch." },
    { step: "06", title: "Delivery", desc: "Insured delivery via secure logistics to your specified destination worldwide." },
];

export default function BulkOrdersPage() {
    return (
        <div className="min-h-screen bg-charcoal-900 text-white">
            <div className="relative py-24 bg-gradient-to-b from-charcoal-800 to-charcoal-900 border-b border-gold-500/20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/#products" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Products
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                            <Package className="h-7 w-7 text-gold-500" />
                        </div>
                        <div>
                            <p className="text-gold-500 text-sm uppercase tracking-widest font-medium">Our Gold</p>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold">Bulk Orders</h1>
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
                        Competitive bulk pricing for refineries, jewellers, banks, and institutional investors. Minimum order 5kg. All bulk orders include full assay certification, export documentation, and insured logistics.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
                {/* Pricing Tiers */}
                <div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-8">Pricing Tiers</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b border-gold-500/20">
                                    <th className="text-left py-3 px-4 text-gold-500 font-bold uppercase tracking-wider">Order Size</th>
                                    <th className="text-left py-3 px-4 text-gold-500 font-bold uppercase tracking-wider">Pricing</th>
                                    <th className="text-left py-3 px-4 text-gold-500 font-bold uppercase tracking-wider">Includes</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tiers.map((t, i) => (
                                    <tr key={t.range} className={`border-b border-gold-500/10 ${i % 2 === 0 ? "bg-charcoal-800/30" : ""}`}>
                                        <td className="py-4 px-4 text-white font-medium">{t.range}</td>
                                        <td className="py-4 px-4 text-gray-300">{t.discount}</td>
                                        <td className="py-4 px-4 text-gray-400">{t.notes}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-500 text-xs mt-4">* All prices based on current LBMA gold spot price. Contact us for a firm quote.</p>
                </div>

                {/* Process */}
                <div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-8">Order Process</h2>
                    <div className="space-y-4">
                        {process.map((p) => (
                            <div key={p.step} className="flex gap-6 p-5 rounded-lg border border-gold-500/20 bg-charcoal-800/50">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                                    <span className="text-gold-500 font-bold text-xs">{p.step}</span>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold mb-1">{p.title}</h3>
                                    <p className="text-gray-400 text-sm">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-900 font-bold rounded-lg hover:bg-gold-400 transition-colors">
                        Request Bulk Quote <ChevronRight className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
