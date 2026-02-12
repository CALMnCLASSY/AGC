"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, MapPin } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-charcoal-900">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1610375461246-83df859d849d?q=80&w=2670&auto=format&fit=crop')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/95" />

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
                    <MapPin className="h-4 w-4 text-gold-500" />
                    <span className="text-gold-500/90 text-sm uppercase tracking-wider font-medium">Geita Region, Tanzania</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight tracking-tight"
                >
                    From Earth to <span className="gold-gradient-text">Excellence</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                    Licensed extraction, ethical refinement, and conflict-free exports. African Gold Company delivers institutional-grade gold to verified global partners.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button size="lg" className="w-full sm:w-auto text-lg px-10 py-6 shadow-2xl shadow-gold-500/40 hover:shadow-gold-500/60 transition-all">
                        Book a Site Visit
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto text-lg px-10 py-6 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-charcoal-900 shadow-lg shadow-gold-500/20">
                        View Operations
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ opacity: { delay: 1 }, y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
            >
                <div className="flex flex-col items-center gap-2 text-gold-500/70 hover:text-gold-500 transition-colors cursor-pointer">
                    <span className="text-xs uppercase tracking-widest font-medium">Discover More</span>
                    <ChevronDown className="h-6 w-6" />
                </div>
            </motion.div>
        </section>
    );
}
