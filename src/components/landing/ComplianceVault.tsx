"use client";

import { motion } from "framer-motion";
import { Award, ShieldCheck, Leaf, Globe2 } from "lucide-react";

const compliance = [
    {
        icon: Award,
        title: "TRA Mining License",
        description: "Fully authorized by the Tanzania Revenue Authority for mineral extraction and export operations.",
        color: "text-gold-500"
    },
    {
        icon: ShieldCheck,
        title: "Export Certification",
        description: "EAC and Dubai Gold Exchange approved supplier with active trading status.",
        color: "text-gold-500"
    },
    {
        icon: Leaf,
        title: "ESG Compliance",
        description: "Committed to UN SDG 12 & ISO 14001 environmental management standards.",
        color: "text-green-400"
    }
];

export function ComplianceVault() {
    return (
        <section id="compliance" className="py-24 bg-gradient-to-b from-charcoal-900 via-charcoal-800 to-charcoal-900 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gold-500 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                            Regulatory <span className="gold-gradient-text">Compliance Vault</span>
                        </h2>
                        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                            Every ounce of gold we produce is traceable, ethically sourced, and fully certified by international regulatory bodies.
                        </p>

                        <div className="space-y-6">
                            {compliance.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="glass-card p-6 rounded-lg hover:border-gold-500/40 transition-all group"
                                >
                                    <div className="flex gap-4 items-start">
                                        <div className="flex-shrink-0 glass-panel p-4 rounded-lg group-hover:scale-110 transition-transform">
                                            <item.icon className={`h-7 w-7 ${item.color}`} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-white font-bold text-lg mb-2 uppercase tracking-wide">{item.title}</h3>
                                            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Trust Indicators */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] w-full glass-panel rounded-lg overflow-hidden p-8 flex flex-col items-center justify-center border border-gold-500/20"
                    >
                        {/* Central Badge */}
                        <div className="relative z-10">
                            <div className="w-64 h-64 rounded-full glass-panel border-4 border-gold-500/30 flex flex-col items-center justify-center shadow-2xl shadow-gold-500/20">
                                <ShieldCheck className="h-24 w-24 text-gold-500 mb-4" />
                                <div className="text-center">
                                    <div className="text-5xl font-bold gold-gradient-text mb-2">100%</div>
                                    <div className="text-white text-sm uppercase tracking-widest font-bold">Conflict-Free</div>
                                    <div className="text-gray-400 text-xs mt-1">Sourcing</div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Icons */}
                        <motion.div
                            className="absolute top-20 left-12 glass-panel p-4 rounded-lg border border-gold-500/20"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Award className="h-8 w-8 text-gold-500" />
                        </motion.div>

                        <motion.div
                            className="absolute bottom-20 right-12 glass-panel p-4 rounded-lg border border-gold-500/20"
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        >
                            <Globe2 className="h-8 w-8 text-gold-500" />
                        </motion.div>

                        <motion.div
                            className="absolute top-1/2 right-8 glass-panel p-4 rounded-lg border border-gold-500/20"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        >
                            <Leaf className="h-8 w-8 text-green-400" />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
