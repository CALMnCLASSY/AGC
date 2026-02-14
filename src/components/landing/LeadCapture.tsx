"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ChevronRight, Upload } from "lucide-react";

export function LeadCapture() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        inquiryType: "",
        name: "",
        email: "",
        company: "",
        proofOfFunds: null as File | null,
    });

    const handleNext = () => {
        setStep(step + 1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Submitted", formData);
        alert("Inquiry Received. Our compliance team will review your documents.");
    };

    return (
        <section className="py-24 bg-gradient-to-b from-charcoal-900 via-charcoal-800 to-charcoal-900 border-t border-gold-500/10 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-1/3 w-96 h-96 bg-gold-500 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">
                        Request Your <span className="gold-gradient-text">Quote</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Get the best gold prices in the market. Personalized quotes for all purchase types.
                    </p>
                </div>

                <div className="glass-panel border border-gold-500/20 rounded-lg p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    {/* Progress Bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-charcoal-700">
                        <motion.div
                            className="h-full bg-gradient-to-r from-gold-500 to-gold-600 shadowlg shadow-gold-500/50"
                            initial={{ width: "33%" }}
                            animate={{ width: `${step * 33.33}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </div>

                    <form onSubmit={handleSubmit}>
                        <AnimatePresence mode="wait">

                            {/* Step 1: Inquiry Type */}
                            {step === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-xl text-white font-bold mb-6 uppercase tracking-wider">01. Select Purchase Type</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {["Buy Gold Bars", "Bulk Purchase", "Investment Gold"].map((type) => (
                                            <div
                                                key={type}
                                                onClick={() => setFormData({ ...formData, inquiryType: type })}
                                                className={`cursor-pointer p-6 rounded-lg border transition-all text-center flex flex-col items-center justify-center gap-4 h-32
                          ${formData.inquiryType === type
                                                        ? "border-gold-500 glass-panel bg-gold-500/10 text-white shadow-lg shadow-gold-500/20"
                                                        : "border-charcoal-600 bg-charcoal-900/50 text-gray-400 hover:border-gray-500 hover:bg-charcoal-900/70"
                                                    }`}
                                            >
                                                <span className="font-bold text-sm">{type}</span>
                                                {formData.inquiryType === type && <CheckCircle2 className="text-gold-500 h-5 w-5" />}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex justify-end pt-6">
                                        <Button
                                            type="button"
                                            onClick={handleNext}
                                            disabled={!formData.inquiryType}
                                            className="w-full md:w-auto shadow-lg shadow-gold-500/20"
                                        >
                                            Next Step <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 2: Details */}
                            {step === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-xl text-white font-bold mb-6 uppercase tracking-wider">02. Your Details</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input
                                                id="name"
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="glass-panel"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Official Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john@company.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="glass-panel"
                                            />
                                        </div>
                                        <div className="space-y-2 md:col-span-2">
                                            <Label htmlFor="company">Company / Legal Entity</Label>
                                            <Input
                                                id="company"
                                                placeholder="Organization Name"
                                                value={formData.company}
                                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                                className="glass-panel"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex justify-between pt-6">
                                        <Button type="button" variant="ghost" onClick={() => setStep(1)} className="text-gray-400 hover:text-white">Back</Button>
                                        <Button
                                            type="button"
                                            onClick={handleNext}
                                            disabled={!formData.name || !formData.email}
                                            className="shadow-lg shadow-gold-500/20"
                                        >
                                            Next Step <ChevronRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                            {/* Step 3: Proof of Funds */}
                            {step === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="space-y-6"
                                >
                                    <h3 className="text-xl text-white font-bold mb-6 uppercase tracking-wider">03. Purchase Verification</h3>

                                    <div className="glass-panel border border-dashed border-gold-500/30 rounded-lg p-8 text-center hover:border-gold-500/50 transition-colors">
                                        <Upload className="h-10 w-10 text-gray-500 mx-auto mb-4" />
                                        <Label htmlFor="pof" className="block text-lg text-white mb-2 cursor-pointer hover:text-gold-500 transition-colors">
                                            Upload Proof of Funds (Optional)
                                        </Label>
                                        <Input
                                            id="pof"
                                            type="file"
                                            className="hidden"
                                            onChange={(e) => setFormData({ ...formData, proofOfFunds: e.target.files?.[0] || null })}
                                        />
                                        <p className="text-sm text-gray-500">PDF, JPG up to 10MB</p>
                                        {formData.proofOfFunds && (
                                            <p className="text-gold-500 mt-4 font-bold">{formData.proofOfFunds.name}</p>
                                        )}
                                    </div>

                                    <div className="flex justify-between pt-6">
                                        <Button type="button" variant="ghost" onClick={() => setStep(2)} className="text-gray-400 hover:text-white">Back</Button>
                                        <Button type="submit" className="w-full md:w-auto bg-gold-500 text-charcoal-900 hover:bg-gold-400 shadow-lg shadow-gold-500/30">
                                            Get My Quote
                                        </Button>
                                    </div>
                                </motion.div>
                            )}

                        </AnimatePresence>
                    </form>
                </div>
            </div>
        </section>
    );
}
