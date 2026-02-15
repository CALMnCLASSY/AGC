"use client";

import { motion } from "framer-motion";
import { QuoteForm } from "@/components/landing/QuoteForm";

export function LeadCapture() {
    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-charcoal-900 via-charcoal-800 to-charcoal-900 border-t border-gold-500/10 relative overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-[120px]" />
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto px-4 relative z-10"
            >
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        Request Your <span className="gold-gradient-text">Quote</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Get the best gold prices in the market. Personalized quotes for all purchase types.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass-panel border border-gold-500/30 rounded-lg p-8 md:p-12 shadow-2xl shadow-gold-500/20 relative overflow-hidden"
                >
                    {/* Decorative corner elements */}
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-gold-500/10 rounded-full blur-xl" />
                    <div className="absolute -bottom-2 -left-2 w-32 h-32 bg-gold-500/5 rounded-full blur-2xl" />
                    <div className="relative z-10">
                        <QuoteForm />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}
