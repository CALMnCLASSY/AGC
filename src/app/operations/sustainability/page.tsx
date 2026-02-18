import Link from "next/link";
import { Leaf, Users, Droplets, Sun, ChevronRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Sustainability (ESG) | African Gold Company",
    description: "Our commitment to environmental stewardship, social responsibility, and ethical governance in gold mining across Tanzania.",
};

const pillars = [
    {
        icon: Leaf,
        title: "Environmental",
        color: "text-green-400",
        border: "border-green-400/20",
        bg: "bg-green-400/5",
        items: [
            "Progressive land rehabilitation after extraction",
            "Cyanide management per ICMC standards",
            "Water recycling — 85% process water reused",
            "Zero-discharge tailings management",
            "Carbon footprint monitoring and reduction",
            "Biodiversity impact assessments",
        ],
    },
    {
        icon: Users,
        title: "Social",
        color: "text-blue-400",
        border: "border-blue-400/20",
        bg: "bg-blue-400/5",
        items: [
            "90%+ local workforce employment",
            "Community development fund (2% of revenue)",
            "Free health clinic for surrounding villages",
            "Scholarship programme for local students",
            "Artisanal miner formalisation support",
            "Women in mining initiatives",
        ],
    },
    {
        icon: Sun,
        title: "Governance",
        color: "text-gold-400",
        border: "border-gold-400/20",
        bg: "bg-gold-400/5",
        items: [
            "Full EITI (Extractive Industries Transparency Initiative) compliance",
            "Anti-bribery and corruption policy",
            "Conflict-free gold certification",
            "Annual independent ESG audit",
            "Whistleblower protection programme",
            "Board-level ESG oversight committee",
        ],
    },
];

export default function SustainabilityPage() {
    return (
        <div className="min-h-screen bg-charcoal-900 text-white">
            {/* Hero */}
            <div className="relative py-24 bg-gradient-to-b from-charcoal-800 to-charcoal-900 border-b border-gold-500/20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/#operations" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Operations
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                            <Leaf className="h-7 w-7 text-gold-500" />
                        </div>
                        <div>
                            <p className="text-gold-500 text-sm uppercase tracking-widest font-medium">Operations</p>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold">Sustainability (ESG)</h1>
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
                        Responsible mining is not optional — it is the foundation of our business. We are committed to environmental stewardship, community development, and transparent governance across all our operations.
                    </p>
                </div>
            </div>

            {/* ESG Pillars */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {pillars.map((p) => (
                        <div key={p.title} className={`p-6 rounded-lg border ${p.border} ${p.bg}`}>
                            <div className="flex items-center gap-3 mb-6">
                                <p.icon className={`h-6 w-6 ${p.color}`} />
                                <h2 className={`text-lg font-heading font-bold ${p.color}`}>{p.title}</h2>
                            </div>
                            <ul className="space-y-3">
                                {p.items.map((item) => (
                                    <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 ${p.color.replace("text-", "bg-")}`} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Water stat callout */}
                <div className="p-8 rounded-lg border border-gold-500/20 bg-charcoal-800/50 flex flex-col md:flex-row items-center gap-6">
                    <Droplets className="h-12 w-12 text-blue-400 flex-shrink-0" />
                    <div>
                        <h3 className="text-white font-bold text-lg mb-2">Water Stewardship</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We operate a closed-loop water management system that recycles 85% of all process water. Our operations are located in a water-stressed region, and we take our responsibility to protect local water resources extremely seriously. All effluent is treated to WHO drinking water standards before any discharge.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                    <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-900 font-bold rounded-lg hover:bg-gold-400 transition-colors">
                        Request ESG Report <ChevronRight className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
