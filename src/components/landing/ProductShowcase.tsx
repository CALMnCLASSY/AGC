"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Shield, Sparkles } from "lucide-react";

const products = [
    {
        id: 1,
        name: "1 Kilogram Gold Bar",
        purity: "99.9%",
        image: "/gallery/products/goldbarkilo.jpeg",
        description: "Premium gold bar for serious investors"
    },
    {
        id: 2,
        name: "Gold Bars Collection",
        purity: "99.9%",
        image: "/gallery/products/goldbarseg2.jpeg",
        description: "Various sizes available"
    },
    {
        id: 3,
        name: "Refined Gold",
        purity: "99.9%",
        image: "/gallery/products/goldbareg1.jpeg",
        description: "Certified pure gold ready for export"
    },
    {
        id: 4,
        name: "Tanzanian Gold",
        purity: "99.9%",
        image: "/gallery/products/goldtz.jpeg",
        description: "Direct from Tanzanian mines"
    },
];

export function ProductShowcase() {
    return (
        <section className="py-24 bg-gradient-to-b from-charcoal-800 via-charcoal-900 to-charcoal-800 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gold-500 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6 border border-gold-500/30"
                    >
                        <Sparkles className="h-4 w-4 text-gold-500" />
                        <span className="text-gold-500/90 text-sm uppercase tracking-wider font-medium">Premium Quality</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-heading font-bold text-white mb-4"
                    >
                        Our <span className="gold-gradient-text">Gold Products</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        99.9% pure gold from our licensed Tanzanian mines. Competitive prices, full certification, global shipping.
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative glass-card rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />

                                {/* Purity Badge */}
                                <div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full border border-gold-500/30">
                                    <span className="text-gold-500 font-bold text-xs">{product.purity}</span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-white font-heading font-bold text-lg mb-2 group-hover:text-gold-400 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-400 text-sm">{product.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-6 rounded-lg border border-gold-500/20 flex items-start gap-4"
                    >
                        <div className="glass-panel p-3 rounded-lg">
                            <Award className="h-6 w-6 text-gold-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-2">Certified Purity</h4>
                            <p className="text-gray-400 text-sm">Every bar certified 99.9% pure by independent assayers</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-panel p-6 rounded-lg border border-gold-500/20 flex items-start gap-4"
                    >
                        <div className="glass-panel p-3 rounded-lg">
                            <Shield className="h-6 w-6 text-gold-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-2">Fully Licensed</h4>
                            <p className="text-gray-400 text-sm">Licensed exporter with complete export documentation</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-6 rounded-lg border border-gold-500/20 flex items-start gap-4"
                    >
                        <div className="glass-panel p-3 rounded-lg">
                            <Sparkles className="h-6 w-6 text-gold-500" />
                        </div>
                        <div>
                            <h4 className="text-white font-bold mb-2">Best Prices</h4>
                            <p className="text-gray-400 text-sm">Competitive market rates with direct-from-mine savings</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
