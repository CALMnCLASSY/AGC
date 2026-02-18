import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions | African Gold Company",
    description: "Terms and conditions governing the use of African Gold Company's website and services.",
};

const sections = [
    {
        title: "1. Acceptance of Terms",
        content: `By accessing and using the African Gold Company website (africangold.co.tz) and our services, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our website or services.`,
    },
    {
        title: "2. Services",
        content: `African Gold Company provides gold trading, export, and investment services. Our services include:

• Sale of 99.9% pure gold bars in various weights
• Bulk gold purchase arrangements
• Investment gold products
• Export documentation and logistics support
• Market pricing information

All transactions are subject to separate commercial agreements and applicable Tanzanian law.`,
    },
    {
        title: "3. Eligibility",
        content: `Our services are available to:

• Registered businesses and legal entities
• Individuals aged 18 years or older
• Buyers who can demonstrate legitimate source of funds
• Parties not subject to international sanctions

We reserve the right to refuse service to any party at our sole discretion.`,
    },
    {
        title: "4. Pricing and Payment",
        content: `Gold prices are quoted based on current international spot prices and are subject to change without notice. All prices are quoted in USD unless otherwise agreed. Payment terms are specified in individual commercial agreements. We accept bank transfers (SWIFT/SEPA) and other methods agreed in writing.`,
    },
    {
        title: "5. Anti-Money Laundering (AML) Compliance",
        content: `In compliance with Tanzanian law and international standards, we are required to:

• Verify the identity of all customers (KYC — Know Your Customer)
• Verify the source of funds for all transactions
• Report suspicious transactions to relevant authorities
• Maintain records of all transactions for a minimum of 7 years

By engaging our services, you agree to provide all documentation required for AML compliance.`,
    },
    {
        title: "6. Intellectual Property",
        content: `All content on this website, including text, images, logos, and design, is the property of African Gold Company and is protected by copyright law. You may not reproduce, distribute, or use our content without prior written permission.`,
    },
    {
        title: "7. Disclaimer of Warranties",
        content: `Our website and information are provided "as is" without warranty of any kind. Gold prices and market information are for reference only and do not constitute financial advice. We do not guarantee the accuracy, completeness, or timeliness of any information on this website.`,
    },
    {
        title: "8. Limitation of Liability",
        content: `To the maximum extent permitted by law, African Gold Company shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or services. Our total liability for any claim shall not exceed the value of the specific transaction giving rise to the claim.`,
    },
    {
        title: "9. Governing Law",
        content: `These Terms and Conditions are governed by the laws of the United Republic of Tanzania. Any disputes shall be resolved in the courts of Tanzania, or through arbitration as agreed by the parties.`,
    },
    {
        title: "10. Changes to Terms",
        content: `We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this website. Your continued use of our services after changes constitutes acceptance of the updated terms.`,
    },
    {
        title: "11. Contact",
        content: `For questions about these Terms and Conditions:

Email: pureafricagold@gmail.com
Phone: +255 761 929 850
Address: Mwanza Region, Lake Victoria Goldfields, Tanzania`,
    },
];

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-charcoal-900 text-white">
            {/* Hero */}
            <div className="relative py-24 bg-gradient-to-b from-charcoal-800 to-charcoal-900 border-b border-gold-500/20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/" className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm mb-8 transition-colors">
                        <ArrowLeft className="h-4 w-4" /> Back to Home
                    </Link>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-lg bg-gold-500/10 border border-gold-500/30 flex items-center justify-center">
                            <FileText className="h-7 w-7 text-gold-500" />
                        </div>
                        <div>
                            <p className="text-gold-500 text-sm uppercase tracking-widest font-medium">Legal</p>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold">Terms & Conditions</h1>
                        </div>
                    </div>
                    <p className="text-gray-400">Last updated: February 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
                <p className="text-gray-300 leading-relaxed">
                    Please read these Terms and Conditions carefully before using the African Gold Company website or engaging our services. These terms constitute a legally binding agreement between you and African Gold Company.
                </p>

                {sections.map((s) => (
                    <div key={s.title} className="border-t border-gold-500/10 pt-8">
                        <h2 className="text-xl font-heading font-bold text-white mb-4">{s.title}</h2>
                        <p className="text-gray-400 text-sm leading-relaxed whitespace-pre-line">{s.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
