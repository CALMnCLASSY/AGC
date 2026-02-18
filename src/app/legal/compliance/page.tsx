import Link from "next/link";
import { Shield, CheckCircle2, ArrowLeft, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Compliance | African Gold Company",
    description: "African Gold Company's commitment to regulatory compliance, anti-money laundering, and ethical gold trading standards.",
};

const frameworks = [
    {
        title: "Tanzania Mining Commission (TMC)",
        description: "Fully licensed under the Mining Act 2010 and subsequent amendments. All operations are conducted under valid mining and dealer licences issued by the TMC.",
    },
    {
        title: "Anti-Money Laundering (AML)",
        description: "Compliant with Tanzania's Anti-Money Laundering Act 2006 and the Financial Action Task Force (FATF) recommendations for precious metals dealers.",
    },
    {
        title: "Know Your Customer (KYC)",
        description: "Rigorous KYC procedures for all clients, including identity verification, source of funds documentation, and ongoing transaction monitoring.",
    },
    {
        title: "EITI — Extractive Industries Transparency Initiative",
        description: "Committed to the EITI standard for transparent reporting of revenues, taxes, and royalties paid to the Tanzanian government.",
    },
    {
        title: "Conflict-Free Gold Standard",
        description: "All gold is sourced exclusively from our licensed operations. We do not purchase gold from artisanal miners without verified provenance documentation.",
    },
    {
        title: "LBMA Responsible Gold Guidance",
        description: "Operations aligned with the London Bullion Market Association's Responsible Gold Guidance, covering supply chain due diligence.",
    },
];

const kycDocs = [
    "Government-issued photo ID (passport or national ID)",
    "Proof of address (utility bill or bank statement, less than 3 months old)",
    "Company registration certificate (for corporate buyers)",
    "Source of funds declaration",
    "Bank reference letter",
    "Proof of funds (bank statement or letter of credit)",
];

export default function CompliancePage() {
    return (
        <div className="min-h-screen bg-charcoal-900 text-white">
            {/* Hero */}
            <div className="relative py-24 bg-gradient-to-b from-charcoal-800 to-charcoal-900 border-b border-gold-500/20">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/#compliance" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Compliance
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                            <Shield className="h-7 w-7 text-gold-500" />
                        </div>
                        <div>
                            <p className="text-gold-500 text-sm uppercase tracking-widest font-medium">Legal</p>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold">Compliance</h1>
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
                        Compliance is not a box-ticking exercise — it is the foundation of trust in the gold industry. We adhere to the highest regulatory standards to protect our clients, our business, and the integrity of the global gold market.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
                {/* Regulatory Frameworks */}
                <div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-8">Regulatory Frameworks</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {frameworks.map((f) => (
                            <div key={f.title} className="p-6 rounded-lg border border-gold-500/20 bg-charcoal-800/50 hover:border-gold-500/40 transition-colors">
                                <div className="flex items-start gap-3 mb-3">
                                    <CheckCircle2 className="h-5 w-5 text-gold-500 flex-shrink-0 mt-0.5" />
                                    <h3 className="text-white font-bold text-sm">{f.title}</h3>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed pl-8">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* KYC Requirements */}
                <div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-4">KYC Requirements for Buyers</h2>
                    <p className="text-gray-400 mb-8">
                        To comply with anti-money laundering regulations, all buyers must provide the following documentation before any transaction can be processed:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {kycDocs.map((doc) => (
                            <div key={doc} className="flex items-start gap-3 p-4 rounded-lg border border-gold-500/20 bg-charcoal-800/50">
                                <CheckCircle2 className="h-4 w-4 text-gold-500 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm">{doc}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Reporting */}
                <div className="p-8 rounded-lg border border-gold-500/20 bg-charcoal-800/50">
                    <h2 className="text-xl font-heading font-bold text-white mb-4">Suspicious Activity Reporting</h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        African Gold Company is legally required to report suspicious transactions to the Financial Intelligence Unit (FIU) of Tanzania. We take this obligation seriously and have robust internal controls to detect and report any activity that may indicate money laundering, terrorist financing, or other financial crimes.
                    </p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-900 font-bold rounded-lg hover:bg-gold-400 transition-colors">
                        Contact Compliance Team <ChevronRight className="h-5 w-5" />
                    </Link>
                    <Link href="/operations/export-licensing" className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold-500 text-gold-500 font-bold rounded-lg hover:bg-gold-500/10 transition-colors">
                        View Export Licensing
                    </Link>
                </div>
            </div>
        </div>
    );
}
