import Link from "next/link";
import { Gem, Thermometer, FlaskConical, ChevronRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Refinement Process | African Gold Company",
    description: "On-site gold refinement to 99.9% purity using state-of-the-art processing technology in the Geita Region, Tanzania.",
};

const steps = [
    {
        step: "01",
        title: "Ore Crushing & Milling",
        description: "Raw ore is crushed and milled to a fine powder, liberating gold particles from host rock for efficient extraction.",
        icon: Thermometer,
    },
    {
        step: "02",
        title: "Gravity Concentration",
        description: "Gravity separation equipment recovers coarse free gold before leaching, maximising overall gold recovery rates.",
        icon: FlaskConical,
    },
    {
        step: "03",
        title: "Carbon-in-Leach (CIL)",
        description: "Cyanide leaching dissolves fine gold, which is then adsorbed onto activated carbon for efficient recovery.",
        icon: Gem,
    },
    {
        step: "04",
        title: "Elution & Electrowinning",
        description: "Gold is stripped from carbon and recovered via electrowinning, producing a high-grade gold sludge.",
        icon: Thermometer,
    },
    {
        step: "05",
        title: "Smelting & Doré Production",
        description: "Gold sludge is smelted in a furnace to produce doré bars — an alloy of gold and silver ready for final refining.",
        icon: FlaskConical,
    },
    {
        step: "06",
        title: "Final Refining to 99.9%",
        description: "Doré is refined using the Miller chlorination process or electrolytic refining to achieve 99.9% (999 fine) gold purity.",
        icon: Gem,
    },
];

const certifications = [
    "LBMA Good Delivery Standards",
    "ISO 9001:2015 Quality Management",
    "Tanzania Mining Commission Certified",
    "Independent Third-Party Assay",
    "Chain of Custody Documentation",
    "Environmental Compliance Certified",
];

export default function RefinementPage() {
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
                            <Gem className="h-7 w-7 text-gold-500" />
                        </div>
                        <div>
                            <p className="text-gold-500 text-sm uppercase tracking-widest font-medium">Operations</p>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold">Refinement Process</h1>
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
                        Our on-site processing facility transforms raw ore into 99.9% pure gold using a multi-stage refinement process. Every step is monitored for quality, safety, and environmental compliance.
                    </p>
                </div>
            </div>

            {/* Process Steps */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-2xl font-heading font-bold text-white mb-10">Six-Stage Refinement Process</h2>
                <div className="space-y-4">
                    {steps.map((s, i) => (
                        <div key={s.step} className="flex gap-6 p-6 rounded-lg border border-gold-500/20 bg-charcoal-800/50 hover:border-gold-500/40 transition-colors">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                                <span className="text-gold-500 font-bold text-sm">{s.step}</span>
                            </div>
                            <div>
                                <h3 className="text-white font-bold mb-2">{s.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{s.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Certifications */}
                <div className="mt-16">
                    <h2 className="text-2xl font-heading font-bold text-white mb-8">Quality Certifications</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {certifications.map((cert) => (
                            <div key={cert} className="flex items-center gap-3 p-4 rounded-lg border border-gold-500/20 bg-charcoal-800/50">
                                <CheckCircle2 className="h-5 w-5 text-gold-500 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 flex flex-col sm:flex-row gap-4">
                    <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-900 font-bold rounded-lg hover:bg-gold-400 transition-colors">
                        Request a Quote <ChevronRight className="h-5 w-5" />
                    </Link>
                    <Link href="/operations/export-licensing" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-500 text-gold-500 font-bold rounded-lg hover:bg-gold-500/10 transition-colors">
                        View Export Licensing
                    </Link>
                </div>
            </div>
        </div>
    );
}
