"use client";

import { X, ChevronRight, Award, Shield, Truck } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface ProductDetails {
    id: number;
    name: string;
    purity: string;
    image: string;
    description: string;
    fullDescription: string;
    specifications: {
        purity: string;
        weight: string;
        dimensions: string;
        certification: string;
    };
    features: string[];
}

interface ProductDetailsModalProps {
    product: ProductDetails | null;
    isOpen: boolean;
    onClose: () => void;
    onGetQuote: () => void;
}

export function ProductDetailsModal({ product, isOpen, onClose, onGetQuote }: ProductDetailsModalProps) {
    if (!product) return null;

    const handleGetQuote = () => {
        onClose();
        onGetQuote();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="relative w-full max-w-4xl glass-card rounded-2xl shadow-2xl shadow-gold-500/20 border border-gold-500/30 my-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white hover:bg-gold-500/20 transition-all"
                                aria-label="Close"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                                {/* Left Column - Image */}
                                <div className="space-y-4">
                                    <div className="relative h-96 w-full rounded-lg overflow-hidden bg-charcoal-800">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute top-4 right-4 glass-panel px-4 py-2 rounded-full border border-gold-500/30">
                                            <span className="text-gold-500 font-bold text-sm">{product.purity} Pure</span>
                                        </div>
                                    </div>

                                    {/* Trust Badges */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="glass-panel p-3 rounded-lg text-center">
                                            <Award className="h-5 w-5 text-gold-500 mx-auto mb-1" />
                                            <p className="text-xs text-gray-400">Certified</p>
                                        </div>
                                        <div className="glass-panel p-3 rounded-lg text-center">
                                            <Shield className="h-5 w-5 text-gold-500 mx-auto mb-1" />
                                            <p className="text-xs text-gray-400">Insured</p>
                                        </div>
                                        <div className="glass-panel p-3 rounded-lg text-center">
                                            <Truck className="h-5 w-5 text-gold-500 mx-auto mb-1" />
                                            <p className="text-xs text-gray-400">Shipping</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Details */}
                                <div className="flex flex-col">
                                    <div className="flex-grow space-y-6">
                                        <div>
                                            <h2 className="text-3xl font-heading font-bold text-white mb-2">
                                                {product.name}
                                            </h2>
                                            <p className="text-gray-400 text-sm mb-4">{product.description}</p>
                                            <p className="text-gray-300 leading-relaxed">
                                                {product.fullDescription}
                                            </p>
                                        </div>

                                        {/* Specifications */}
                                        <div className="glass-panel p-4 rounded-lg border border-gold-500/20">
                                            <h3 className="text-gold-500 font-heading font-bold text-sm uppercase tracking-wider mb-3">
                                                Specifications
                                            </h3>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span className="text-gray-400">Purity:</span>
                                                    <span className="text-white font-semibold">{product.specifications.purity}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-400">Weight:</span>
                                                    <span className="text-white font-semibold">{product.specifications.weight}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-400">Dimensions:</span>
                                                    <span className="text-white font-semibold">{product.specifications.dimensions}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span className="text-gray-400">Certification:</span>
                                                    <span className="text-white font-semibold">{product.specifications.certification}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div>
                                            <h3 className="text-gold-500 font-heading font-bold text-sm uppercase tracking-wider mb-3">
                                                Key Features
                                            </h3>
                                            <ul className="space-y-2">
                                                {product.features.map((feature, index) => (
                                                    <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
                                                        <ChevronRight className="h-4 w-4 text-gold-500 flex-shrink-0 mt-0.5" />
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-3 mt-6 pt-6 border-t border-gold-500/20">
                                        <Button
                                            onClick={handleGetQuote}
                                            className="flex-1 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-charcoal-900 font-bold py-6 shadow-lg shadow-gold-500/40 transition-all hover:scale-105"
                                        >
                                            Get a Quote
                                            <ChevronRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    );
}
