"use client";

import { motion } from "framer-motion";
import { MapPin, ShieldAlert, Lock, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LocationModule() {
    // Real coordinates for Geita, Tanzania (Gold Mining Region)
    const geitaCoords = { lat: -2.8717, lng: 32.2303 };

    return (
        <section id="location" className="py-24 bg-gradient-to-b from-charcoal-900 via-charcoal-800 to-charcoal-900 border-t border-gold-500/20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Map Section */}
                    <div className="h-[500px] glass-card rounded-lg overflow-hidden relative">
                        <div
                            className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2674&auto=format&fit=crop')" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-charcoal-900/50" />

                        {/* Location Pin */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="relative group cursor-pointer">
                                <div className="h-6 w-6 bg-gold-500 rounded-full animate-ping absolute inset-0 opacity-75" />
                                <div className="h-6 w-6 bg-gold-500 rounded-full relative z-10 border-4 border-charcoal-900 shadow-lg shadow-gold-500/50" />
                                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 glass-panel text-gold-500 text-xs px-4 py-2 rounded-full border border-gold-500/30 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-3 h-3" />
                                        <span className="font-bold">Geita Gold Refinery</span>
                                    </div>
                                    <div className="text-[10px] text-gray-400 text-center mt-1">
                                        {geitaCoords.lat.toFixed(4)}°, {geitaCoords.lng.toFixed(4)}°
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 glass-panel p-6 border-t border-gold-500/30">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <div className="text-gray-400 text-xs mb-1">Region</div>
                                    <div className="text-white font-bold">Geita, Tanzania</div>
                                </div>
                                <div>
                                    <div className="text-gray-400 text-xs mb-1">Distance</div>
                                    <div className="text-white font-bold">45km from Mwanza</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Security Protocols */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                                Visit <span className="gold-gradient-text">Protocol</span>
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                To ensure total security for our clients and operations, all site visits are subject to our 4-stage clearance process.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                {
                                    icon: Fingerprint,
                                    title: "Identity Verification",
                                    desc: "Passport and Proof of Funds validation 48h prior to arrival."
                                },
                                {
                                    icon: Lock,
                                    title: "Secure Transport",
                                    desc: "Armored escort from Mwanza Airport to the mining facility."
                                },
                                {
                                    icon: ShieldAlert,
                                    title: "On-Site Clearance",
                                    desc: "Biometric check-in and PPE issuance upon refinery entry."
                                }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="glass-card p-5 rounded-lg border-gold-500/20 hover:border-gold-500/40 group flex gap-4"
                                >
                                    <div className="flex-shrink-0 bg-gradient-to-br from-gold-500/20 to-gold-500/5 p-4 rounded-lg text-gold-500 group-hover:scale-110 transition-transform">
                                        <item.icon className="h-6 w-6" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-white font-bold mb-1 text-sm uppercase tracking-wider">{item.title}</h3>
                                        <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="pt-4">
                            <Button variant="outline" className="w-full h-12 border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-charcoal-900 font-bold uppercase tracking-wider shadow-lg shadow-gold-500/10 hover:shadow-gold-500/30 transition-all">
                                Download Security Briefing
                            </Button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
