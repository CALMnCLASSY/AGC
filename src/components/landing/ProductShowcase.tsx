"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Shield, Sparkles } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { ProductDetailsModal } from "@/components/ui/ProductDetailsModal";

const products = [
    {
        id: 1,
        name: "1 Kilogram Gold Bar",
        purity: "99.9%",
        image: "/gallery/products/goldbarkilo.jpeg",
        description: "Premium gold bar for serious investors",
        fullDescription: "Our 1kg gold bars represent the pinnacle of investment-grade precious metals. Each bar is meticulously refined to 99.9% purity and comes with full certification from independent assayers. Perfect for institutional investors and high-net-worth individuals looking to diversify their portfolio with tangible assets.",
        specifications: {
            purity: "99.9% (999 Fine Gold)",
            weight: "1000 grams (32.15 troy oz)",
            dimensions: "115mm x 52mm x 8mm",
            certification: "LBMA Good Delivery"
        },
        features: [
            "Independently assayed and certified",
            "Serial numbered for traceability",
            "Vacuum sealed in protective packaging",
            "Full export documentation included",
            "Insured shipping available worldwide",
            "Direct from Tanzanian mines"
        ]
    },
    {
        id: 2,
        name: "Gold Bars Collection",
        purity: "99.9%",
        image: "/gallery/products/goldbarseg2.jpeg",
        description: "Various sizes available",
        fullDescription: "Our versatile gold bar collection offers multiple weight options to suit different investment needs. From 100g starter bars to 1kg investment pieces, each bar maintains our signature 99.9% purity standard. Ideal for both new investors and seasoned collectors building their holdings.",
        specifications: {
            purity: "99.9% (999 Fine Gold)",
            weight: "100g, 250g, 500g, 1000g options",
            dimensions: "Varies by weight class",
            certification: "Independent Assay Certificate"
        },
        features: [
            "Multiple weight denominations available",
            "Competitive bulk pricing",
            "Stackable design for secure storage",
            "Tamper-evident packaging",
            "Complete chain of custody documentation",
            "Flexible quantities to match your budget"
        ]
    },
    {
        id: 3,
        name: "Refined Gold",
        purity: "99.9%",
        image: "/gallery/products/goldbareg1.jpeg",
        description: "Certified pure gold ready for export",
        fullDescription: "Our refined gold undergoes rigorous quality control to ensure it meets international standards for purity and quality. Processed using state-of-the-art refinement technology, each piece is export-ready with complete compliance documentation. Perfect for international buyers requiring certified materials.",
        specifications: {
            purity: "99.9% minimum (999+ Fine)",
            weight: "Custom quantities available",
            dimensions: "Standard industry formats",
            certification: "Full export licensing & certification"
        },
        features: [
            "Exceeds international purity standards",
            "Complete export documentation",
            "Customs-cleared for global shipping",
            "Suitable for further processing",
            "Verified ethical sourcing",
            "Competitive wholesale pricing"
        ]
    },
    {
        id: 4,
        name: "Tanzanian Gold",
        purity: "99.9%",
        image: "/gallery/products/goldtz.jpeg",
        description: "Direct from Tanzanian mines",
        fullDescription: "Sourced directly from our licensed operations in the Lake Victoria Goldfields, our Tanzanian gold represents the finest quality precious metals from East Africa. Each piece carries the heritage of responsible mining practices and comes with complete provenance documentation. Supporting local communities while delivering world-class investment products.",
        specifications: {
            purity: "99.9% (999 Fine Gold)",
            weight: "Flexible quantities from 100g",
            dimensions: "Various formats available",
            certification: "Tanzanian Mining Commission Certified"
        },
        features: [
            "Direct mine-to-market sourcing",
            "Supports local Tanzanian communities",
            "Fully licensed and regulated",
            "Environmental sustainability certified",
            "Transparent supply chain",
            "Premium quality from African sources"
        ]
    },
];

export function ProductShowcase() {
    const { openQuote } = useModal();
    const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

    const handleProductClick = (product: typeof products[0]) => {
        setSelectedProduct(product);
        setIsDetailsModalOpen(true);
    };

    const handleCloseDetailsModal = () => {
        setIsDetailsModalOpen(false);
        setTimeout(() => setSelectedProduct(null), 300);
    };

    return (
        <section id="products" className="py-24 bg-gradient-to-b from-charcoal-800 via-charcoal-900 to-charcoal-800 relative overflow-hidden">
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
                            onClick={() => handleProductClick(product)}
                            className="group glass-card rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer flex flex-col h-full"
                        >
                            <div className="relative h-64 w-full flex-shrink-0 bg-charcoal-800">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    priority={index < 2}
                                    placeholder="empty"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />

                                {/* Purity Badge */}
                                <div className="absolute top-4 right-4 glass-panel px-3 py-1 rounded-full border border-gold-500/30">
                                    <span className="text-gold-500 font-bold text-xs">{product.purity}</span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-white font-heading font-bold text-lg mb-2 group-hover:text-gold-400 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-400 text-sm flex-grow">{product.description}</p>
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

            {/* Product Details Modal */}
            <ProductDetailsModal
                product={selectedProduct}
                isOpen={isDetailsModalOpen}
                onClose={handleCloseDetailsModal}
                onGetQuote={openQuote}
            />
        </section>
    );
}
