"use client";

import updates from "@/data/updates.json";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function NewsUpdates() {
    return (
        <section id="news" className="py-24 bg-gradient-to-b from-charcoal-800 via-charcoal-900 to-charcoal-800 border-t border-gold-500/10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                            Latest <span className="gold-gradient-text">Updates</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl text-lg">
                            Real-time insights from our extraction sites and corporate headquarters.
                        </p>
                    </div>
                    <Button variant="outline" className="text-gold-500 border-gold-500 hover:bg-gold-500 hover:text-charcoal-900 hidden md:flex shadow-lg shadow-gold-500/10">
                        View All News <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {updates.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group glass-card rounded-lg overflow-hidden hover:border-gold-500/50 transition-all hover:scale-105 cursor-pointer"
                        >
                            <div className="relative h-48 overflow-hidden bg-charcoal-800">
                                <div
                                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                                    style={{ 
                                        backgroundImage: `url(${item.image})`,
                                        backgroundAttachment: "fixed"
                                    }}
                                    role="img"
                                    aria-label={item.title}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-transparent" />
                                <div className="absolute top-4 left-4 bg-gold-500 text-charcoal-900 text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-full shadow-lg shadow-gold-500/30">
                                    {item.category}
                                </div>
                            </div>

                            <div className="p-6 glass-panel border-t border-gold-500/10 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-gray-500 text-xs mb-3">
                                    <Calendar className="h-3 w-3" />
                                    <span>{new Date(item.date).toLocaleDateString()}</span>
                                </div>

                                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-gold-400 transition-colors line-clamp-2">
                                    {item.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                                    {item.description}
                                </p>

                                <Link href="#" className="inline-flex items-center text-gold-500 text-sm hover:text-gold-400 hover:underline underline-offset-4 font-medium transition-colors">
                                    Read Full Report <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 text-center md:hidden">
                    <Button variant="outline" className="w-full text-gold-500 border-gold-500 hover:bg-gold-500 hover:text-charcoal-900">
                        View All News
                    </Button>
                </div>

            </div>
        </section>
    );
}
