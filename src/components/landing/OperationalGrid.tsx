"use client";

import { motion } from "framer-motion";
import { Pickaxe, Factory, Gem, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const operations = [
    {
        id: "exploration",
        title: "Exploration",
        description: "Advanced geological surveys and mapping in the Lake Victoria Goldfields.",
        icon: Pickaxe,
        stats: "250+ Sites Mapped",
        image: "/gallery/operations/goldmineworkers.jpeg",
    },
    {
        id: "extraction",
        title: "Extraction",
        description: "Primary production using ethical, high-efficiency mining techniques.",
        icon: Factory,
        stats: "1.2T Processed/Year",
        image: "/gallery/operations/goldprocessing.jpeg",
    },
    {
        id: "refinement",
        title: "Refinement",
        description: "On-site processing to 99.9% purity standards for direct export.",
        icon: Gem,
        stats: "99.9% Purity",
        image: "/gallery/operations/goldrefine3.jpeg",
    },
];

export function OperationalGrid() {
    return (
        <section id="operations" className="py-24 bg-gradient-to-b from-charcoal-800 via-charcoal-900 to-charcoal-800 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
                    >
                        Operational <span className="gold-gradient-text">Transparency</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        We maintain complete oversight of the supply chain, from the first geological survey to the final gold pour.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {operations.map((op, index) => (
                        <motion.div
                            key={op.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative h-96 rounded-lg overflow-hidden glass-card"
                        >
                            {/* Image Background */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${op.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/80 to-transparent group-hover:from-charcoal-900/95 transition-colors duration-500" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="mb-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="glass-panel inline-block p-3 rounded-lg">
                                        <op.icon className="h-8 w-8 text-gold-500" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">
                                    {op.title}
                                </h3>
                                <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 leading-relaxed">
                                    {op.description}
                                </p>

                                <div className="border-t border-gold-500/30 pt-4 flex items-center justify-between">
                                    <span className="text-gold-500 font-mono text-sm uppercase tracking-wider font-bold">
                                        {op.stats}
                                    </span>
                                    <div className="w-10 h-10 rounded-full glass-panel flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                        <ArrowUpRight className="h-5 w-5 text-gold-500" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
