"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Operations", href: "#operations" },
        { name: "Compliance", href: "#compliance" },
        { name: "Investors", href: "#investors" },
        { name: "News", href: "#news" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-gold-500/30 shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-sm flex items-center justify-center shadow-lg shadow-gold-500/30">
                            <span className="text-charcoal-900 font-bold text-xl">A</span>
                        </div>
                        <span className="text-white font-heading text-lg tracking-widest uppercase font-bold">
                            African <span className="gold-gradient-text">Gold</span> Co.
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-300 hover:text-gold-400 transition-colors px-3 py-2 text-sm font-medium uppercase tracking-wide relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* CTA & Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex items-center gap-2 glass-panel px-3 py-1.5 rounded-full border border-gold-500/20">
                            <ShieldCheck className="w-4 h-4 text-gold-500" />
                            <span className="text-gold-500/90 text-xs uppercase tracking-wider font-medium">Licensed Exporter</span>
                        </div>
                        <Button variant="default" className="shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50 transition-shadow">
                            Book a Site Visit
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gold-500 hover:text-white hover:bg-charcoal-800/50 focus:outline-none transition-colors"
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-panel border-t border-gold-500/20 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-gold-400 hover:bg-charcoal-800/50 block px-3 py-2 rounded-md text-base font-medium uppercase transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 pb-2">
                                <Button className="w-full shadow-lg shadow-gold-500/20">Book a Site Visit</Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
