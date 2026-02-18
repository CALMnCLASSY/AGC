import Link from "next/link";
import { Shield, FileText, Globe, ChevronRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Export Licensing | African Gold Company",
    description: "Fully licensed gold exporter operating under Tanzanian Mining Commission regulations with complete export documentation for global buyers.",
};

const licences = [
    {
        title: "Mining Licence",
        issuer: "Tanzania Mining Commission (TMC)",
        description: "Primary mining licence authorising extraction operations in the Geita Region, Lake Victoria Goldfields.",
        icon: FileText,
    },
    {
        title: "Gold Dealer Licence",
        issuer: "Tanzania Mining Commission",
        description: "Authorises purchase, sale, and export of gold and precious minerals within and from Tanzania.",
        icon: Shield,
    },
    {
        title: "Export Permit",
        issuer: "Tanzania Revenue Authority (TRA)",
        description: "Enables legal export of refined gold to international buyers with full customs clearance documentation.",
        icon: Globe,
    },
    {
        title: "Bank of Tanzania Compliance",
        issuer: "Bank of Tanzania (BoT)",
        description: "Registered with the Bank of Tanzania for foreign exchange transactions related to gold exports.",
        icon: FileText,
    },
];

const documents = [
    "Certificate of Origin",
    "Assay Certificate (purity verification)",
    "Export Permit from TMC",
    "Customs Declaration Form",
    "Commercial Invoice",
    "Packing List",
    "Insurance Certificate",
    "Bank Transfer Confirmation",
];

const destinations = [
    "United Arab Emirates (Dubai)",
    "India",
    "China",
    "Switzerland",
    "South Africa",
    "United Kingdom",
    "United States",
    "Singapore",
];

export default function ExportLicensingPage() {
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
                            <Globe className="h-7 w-7 text-gold-500" />
                        </div>
                        <div>
                            <p className="text-gold-500 text-sm uppercase tracking-widest font-medium">Compliance</p>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold">Export Licensing</h1>
                        </div>
                    </div>
                    <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
                        African Gold Company holds all required licences and permits to legally mine, process, and export gold from Tanzania. Every shipment is accompanied by a complete documentation package for seamless customs clearance worldwide.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
                {/* Licences */}
                <div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-8">Our Licences & Permits</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {licences.map((l) => (
                            <div key={l.title} className="p-6 rounded-lg border border-gold-500/20 bg-charcoal-800/50 hover:border-gold-500/40 transition-colors">
                                <div className="flex items-center gap-3 mb-3">
                                    <l.icon className="h-5 w-5 text-gold-500 flex-shrink-0" />
                                    <div>
                                        <h3 className="text-white font-bold text-sm">{l.title}</h3>
                                        <p className="text-gold-500/70 text-xs">{l.issuer}</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">{l.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Export Documents */}
                <div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-8">Export Documentation Package</h2>
                    <p className="text-gray-400 mb-6">Every gold shipment from African Gold Company includes the following documents:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {documents.map((doc) => (
                            <div key={doc} className="flex items-center gap-3 p-4 rounded-lg border border-gold-500/20 bg-charcoal-800/50">
                                <CheckCircle2 className="h-4 w-4 text-gold-500 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{doc}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Destinations */}
                <div>
                    <h2 className="text-2xl font-heading font-bold text-white mb-8">Export Destinations</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {destinations.map((d) => (
                            <div key={d} className="p-4 rounded-lg border border-gold-500/20 bg-charcoal-800/50 text-center">
                                <Globe className="h-5 w-5 text-gold-500 mx-auto mb-2" />
                                <p className="text-gray-300 text-sm">{d}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-charcoal-900 font-bold rounded-lg hover:bg-gold-400 transition-colors">
                        Request Export Documentation <ChevronRight className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
