"use client";

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';

// Dynamically import Leaflet components to avoid SSR issues
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import('react-leaflet').then(mod => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import('react-leaflet').then(mod => mod.Marker), { ssr: false });
const Popup = dynamic(() => import('react-leaflet').then(mod => mod.Popup), { ssr: false });

import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';

export function LocationModule() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        // Fix for default marker icon
        if (typeof window !== 'undefined') {
            const L = require('leaflet');
            delete (L.Icon.Default.prototype as any)._getIconUrl;
            L.Icon.Default.mergeOptions({
                iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
                iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            });
        }
    }, []);

    // Tanzania - Geita Region coordinates
    const position: [number, number] = [-2.8713, 32.2309];

    if (!isClient) {
        return (
            <section className="py-24 bg-charcoal-900 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                            Our <span className="gold-gradient-text">Location</span>
                        </h2>
                        <p className="text-gray-400 text-lg">Lake Victoria Goldfields, Geita Region, Tanzania</p>
                    </div>
                    <div className="w-full h-96 glass-panel rounded-lg flex items-center justify-center border border-gold-500/20">
                        <div className="text-center">
                            <div className="h-8 w-8 border-4 border-gold-500/30 border-t-gold-500 rounded-full animate-spin mx-auto mb-4"></div>
                            <p className="text-gray-400">Loading map...</p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-24 bg-charcoal-900 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-gold-500 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6 border border-gold-500/30">
                        <MapPin className="h-4 w-4 text-gold-500" />
                        <span className="text-gold-500/90 text-sm uppercase tracking-wider font-medium">Find Us</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        Our <span className="gold-gradient-text">Location</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Located in the heart of the Lake Victoria Goldfields, Geita Region, Tanzania - one of Africa's richest gold mining areas.
                    </p>
                </div>

                <div className="glass-panel rounded-lg overflow-hidden shadow-2xl border border-gold-500/20">
                    <MapContainer
                        center={position}
                        zoom={10}
                        style={{ height: '500px', width: '100%' }}
                        scrollWheelZoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                <div className="text-center p-2">
                                    <strong className="text-gold-600 font-bold">African Gold Company</strong>
                                    <p className="text-sm mt-1">Geita Region, Tanzania</p>
                                    <p className="text-xs text-gray-600 mt-1">Lake Victoria Goldfields</p>
                                </div>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>

                {/* Contact Info Below Map */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-6 rounded-lg border border-gold-500/20 text-center hover:border-gold-500/40 transition-all duration-300 hover:scale-105"
                    >
                        <MapPin className="h-8 w-8 text-gold-500 mx-auto mb-3" />
                        <h3 className="text-white font-bold mb-2 font-heading tracking-wide">Address</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">Mwanza Region, Lake Victoria Goldfields, Tanzania</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass-panel p-6 rounded-lg border border-gold-500/20 text-center hover:border-gold-500/40 transition-all duration-300 hover:scale-105"
                    >
                        <Phone className="h-8 w-8 text-gold-500 mx-auto mb-3" />
                        <h3 className="text-white font-bold mb-2 font-heading tracking-wide">Phone</h3>
                        <p className="text-gray-400 text-sm"><a href="tel:+255761929850" className="hover:text-gold-500 transition-colors">+255 761 929 850</a></p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass-panel p-6 rounded-lg border border-gold-500/20 text-center hover:border-gold-500/40 transition-all duration-300 hover:scale-105"
                    >
                        <Mail className="h-8 w-8 text-gold-500 mx-auto mb-3" />
                        <h3 className="text-white font-bold mb-2 font-heading tracking-wide">Email</h3>
                        <p className="text-gray-400 text-sm"><a href="mailto:corporate@africangold.co.tz" className="hover:text-gold-500 transition-colors">corporate@africangold.co.tz</a></p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
