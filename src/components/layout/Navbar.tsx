"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ShieldCheck, TrendingUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GoldPriceTicker } from "@/components/ui/GoldPriceTicker";
import { useModal } from "@/context/ModalContext";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { openQuote } = useModal();

    const navLinks = [
        { name: "Operations", href: "#operations" },
        { name: "Products", href: "#products" },
        { name: "Compliance", href: "#compliance" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-charcoal-900/80 border-b border-gold-500/20 shadow-2xl shadow-gold-500/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo & Company Name - Prominent and Visible */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            {/* Golden A Logo with enhanced styling */}
                            <div className="w-12 h-12 bg-charcoal-900 border-2 border-gold-500 rounded-lg flex items-center justify-center shadow-lg shadow-gold-500/40 group-hover:shadow-gold-500/70 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                                <span className="text-2xl font-bold text-gold-500">A</span>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-heading font-bold text-white tracking-wide">
                                African <span className="text-gold-500">Gold</span> Co.
                            </span>
                            <span className="text-xs text-gray-400 tracking-wider uppercase">Premium Gold Trading</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation - Modern & Spacious */}
                    <div className="hidden lg:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="group relative px-4 py-2 text-gray-300 hover:text-white transition-all duration-300"
                            >
                                <span className="relative z-10 text-sm font-medium tracking-wide">
                                    {link.name}
                                </span>
                                {/* Hover background effect */}
                                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-gold-500/0 via-gold-500/10 to-gold-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                {/* Bottom border on hover */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent group-hover:w-full transition-all duration-300" />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA Section */}
                    <div className="hidden lg:flex items-center gap-4">
                        <GoldPriceTicker />

                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-800/50 border border-gold-500/20">
                            <ShieldCheck className="w-4 h-4 text-gold-500" />
                            <span className="text-xs text-gold-400 font-medium tracking-wide">Licensed</span>
                        </div>

                        <Button
                            onClick={openQuote}
                            className="bg-gradient-to-r from-gold-500 via-gold-500 to-gold-600 hover:from-gold-600 hover:via-gold-600 hover:to-gold-700 text-charcoal-900 font-bold px-6 py-2.5 shadow-lg shadow-gold-500/40 hover:shadow-gold-500/60 transition-all duration-300 hover:scale-110 uppercase tracking-wider"
                        >
                            <TrendingUp className="w-4 h-4 mr-2" />
                            Get Quote
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-3 rounded-lg text-gold-500 hover:bg-charcoal-800/50 transition-colors border border-gold-500/20"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Slides in from top */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="lg:hidden border-t border-gold-500/20 bg-charcoal-900/95 backdrop-blur-xl"
                    >
                        <div className="px-4 py-6 space-y-3">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-charcoal-800/50 rounded-lg transition-all duration-200 font-medium border border-transparent hover:border-gold-500/20"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            <div className="pt-4 space-y-3 border-t border-gold-500/20">
                                <GoldPriceTicker />

                                <Button
                                    onClick={() => {
                                        setIsOpen(false);
                                        openQuote();
                                    }}
                                    className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-900 font-bold py-3 shadow-lg"
                                >
                                    <TrendingUp className="w-4 h-4 mr-2" />
                                    Get Quote
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
