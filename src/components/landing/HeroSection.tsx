"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck, ChevronDown } from "lucide-react";
import { useModal } from "@/context/ModalContext";

export function HeroSection() {
    const { openQuote } = useModal();

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-charcoal-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-slow-zoom"
                    style={{
                        backgroundImage: "url('/gallery/operations/lvgoldfield.jpeg')",
                        backgroundAttachment: "fixed"
                    }}
                    role="img"
                    aria-label="Gold mining operations background"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/85 via-charcoal-900/60 to-charcoal-900/95" />

                {/* Glow Effects */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-[150px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-[150px]" />
                </div>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-5xl mx-auto px-4 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="glass-panel px-4 py-2 rounded-full inline-flex items-center gap-2 mb-8 border border-gold-500/30"
                >
                    <ShieldCheck className="h-4 w-4 text-gold-500" />
                    <span className="text-gold-500/90 text-sm uppercase tracking-wider font-medium">Geita Region, Tanzania</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight tracking-tight"
                >
                    Premium Gold at <span className="gold-gradient-text">Unbeatable Prices</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                    Direct from our mines to you. We offer the best gold prices in the market with highest purity, ethical sourcing, and full export licensing. Get your personalized quote today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button
                        size="lg"
                        onClick={openQuote}
                        className="bg-gold-500 text-charcoal-900 hover:bg-gold-400 font-bold px-8 py-6 text-lg shadow-lg shadow-gold-500/30 transition-all hover:scale-105"
                    >
                        Get a Quote <ChevronRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        onClick={() => {
                            const productsSection = document.getElementById('products');
                            productsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="w-full sm:w-auto text-lg px-10 py-6 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-charcoal-900 shadow-lg shadow-gold-500/20"
                    >
                        View Our Gold
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                onClick={() => {
                    const nextSection = document.getElementById('operations');
                    nextSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
            >
                <div className="flex flex-col items-center gap-2 text-gold-500/70 hover:text-gold-500 transition-colors cursor-pointer">
                    <span className="text-xs uppercase tracking-widest font-medium">Discover More</span>
                    <ChevronDown className="h-6 w-6" />
                </div>
            </motion.div>
        </section>
    );
}
