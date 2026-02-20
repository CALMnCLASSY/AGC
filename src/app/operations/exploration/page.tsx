import Link from "next/link";
import { Pickaxe, MapPin, BarChart3, ChevronRight, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gold Exploration Data | Geita Mines | African Gold Company",
    description:
        "Advanced geological surveys across 250+ sites in Tanzania's Lake Victoria Goldfields. 15+ years of exploration data covering 1,200 sq km of prospective ground.",
    keywords: [
        "gold exploration Tanzania", "Lake Victoria Goldfields", "Geita gold exploration",
        "Tanzania gold mine data", "geological survey Tanzania", "African gold deposit",
        "Tanzania mineral exploration", "gold mining Tanzania", "Tanzanian goldfields",
    ],
    alternates: { canonical: "/operations/exploration" },
    openGraph: {
        title: "Gold Exploration Data – Lake Victoria Goldfields | African Gold Company",
        description: "250+ mapped sites, 15+ years of data across 1,200 sq km. Geita Region, Tanzania.",
        url: "https://pureafricagold.com/operations/exploration",
        type: "website",
    },
};


const stats = [
    { label: "Sites Mapped", value: "250+" },
    { label: "Years of Data", value: "15+" },
    { label: "Sq. Km Surveyed", value: "1,200" },
    { label: "Active Drill Sites", value: "18" },
];

const methods = [
    {
        title: "Geological Mapping",
        description: "Systematic surface mapping of rock formations, fault lines, and mineralization zones across the Lake Victoria Goldfields using modern GIS technology.",
    },
    {
        title: "Geochemical Sampling",
        description: "Soil and rock chip sampling programs to identify anomalous gold concentrations, guiding targeted drilling campaigns.",
    },
    {
        title: "Geophysical Surveys",
        description: "Airborne and ground-based geophysical surveys including magnetic, gravity, and induced polarization methods to detect subsurface gold deposits.",
    },
    {
        title: "Diamond Drilling",
        description: "Precision core drilling programs to confirm resource estimates and define ore body geometry at depth, with full assay reporting.",
    },
];

export default function ExplorationPage() {
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
                            <Pickaxe className="h-7 w-7 text-gold-500" />
                        </div>
                        <div>
                            <p className="text-gold-500 text-sm uppercase tracking-widest font-medium">Operations</p>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold">Exploration Data</h1>
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
                        Advanced geological surveys and mapping across the Lake Victoria Goldfields. Our exploration division maintains one of Tanzania's most comprehensive geological databases, covering over 1,200 square kilometres of prospective ground.
                    </p>
                </div>
            </div>

            {/* Stats */}
            <div className="border-b border-gold-500/10">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center">
                                <p className="text-4xl font-heading font-bold text-gold-500">{s.value}</p>
                                <p className="text-gray-400 text-sm mt-1">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Methods */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-2xl font-heading font-bold text-white mb-10">Our Exploration Methods</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {methods.map((m) => (
                        <div key={m.title} className="p-6 rounded-lg border border-gold-500/20 bg-charcoal-800/50 hover:border-gold-500/40 transition-colors">
                            <div className="flex items-center gap-3 mb-3">
                                <BarChart3 className="h-5 w-5 text-gold-500 flex-shrink-0" />
                                <h3 className="text-white font-bold">{m.title}</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">{m.description}</p>
                        </div>
                    ))}
                </div>

                {/* Location */}
                <div className="mt-12 p-6 rounded-lg border border-gold-500/20 bg-charcoal-800/50">
                    <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0 mt-1" />
                        <div>
                            <h3 className="text-white font-bold mb-2">Primary Exploration Zone</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Geita Region, Lake Victoria Goldfields, Tanzania. Our exploration licences cover ground within the Archaean Tanzanian Craton, one of Africa's most prolific gold-bearing geological terranes, host to world-class deposits including the Geita Gold Mine.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                    <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-900 font-bold rounded-lg hover:bg-gold-400 transition-colors">
                        Request Exploration Report <ChevronRight className="h-5 w-5" />
                    </Link>
                    <Link href="/#operations" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-500 text-gold-500 font-bold rounded-lg hover:bg-gold-500/10 transition-colors">
                        View All Operations
                    </Link>
                </div>
            </div>
        </div>
    );
}
