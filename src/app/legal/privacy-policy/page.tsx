import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | African Gold Company",
    description: "How African Gold Company collects, uses, and protects your personal information.",
};

const sections = [
    {
        title: "1. Information We Collect",
        content: `We collect information you provide directly to us, such as when you submit a quote request or contact form. This includes:
        
• Name and contact details (email address, phone number)
• Company or organisation name
• Inquiry type and purchase details
• Any documents you voluntarily upload (e.g., proof of funds)
• Communications you send to us

We also automatically collect certain technical information when you visit our website, including IP address, browser type, pages visited, and time spent on the site.`,
    },
    {
        title: "2. How We Use Your Information",
        content: `We use the information we collect to:

• Respond to your quote requests and inquiries
• Provide you with information about our gold products and services
• Communicate with you about transactions and business matters
• Comply with legal obligations, including anti-money laundering (AML) and know-your-customer (KYC) requirements
• Improve our website and services
• Send you relevant market updates (only with your consent)`,
    },
    {
        title: "3. Information Sharing",
        content: `We do not sell, trade, or rent your personal information to third parties. We may share your information with:

• Regulatory authorities as required by Tanzanian law and international regulations
• Professional advisors (lawyers, accountants) bound by confidentiality obligations
• Service providers who assist us in operating our website and business (under strict data processing agreements)
• Law enforcement when required by law or to protect our rights`,
    },
    {
        title: "4. Data Security",
        content: `We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These include:

• SSL/TLS encryption for all data transmitted to and from our website
• Secure server infrastructure
• Access controls limiting who can view your data
• Regular security reviews

However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
    },
    {
        title: "5. Data Retention",
        content: `We retain your personal information for as long as necessary to fulfil the purposes outlined in this policy, or as required by law. For business inquiries and transactions, we typically retain records for 7 years in accordance with Tanzanian financial regulations.`,
    },
    {
        title: "6. Your Rights",
        content: `Depending on your jurisdiction, you may have the right to:

• Access the personal information we hold about you
• Request correction of inaccurate data
• Request deletion of your data (subject to legal retention requirements)
• Object to or restrict processing of your data
• Data portability

To exercise these rights, contact us at pureafricagold@gmail.com.`,
    },
    {
        title: "7. Cookies",
        content: `Our website uses essential cookies to ensure basic functionality. We do not use tracking or advertising cookies. You can control cookie settings through your browser preferences.`,
    },
    {
        title: "8. Changes to This Policy",
        content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. Your continued use of our website after changes constitutes acceptance of the updated policy.`,
    },
    {
        title: "9. Contact Us",
        content: `If you have questions about this Privacy Policy or how we handle your data, please contact us:

Email: pureafricagold@gmail.com
Phone: +255 761 929 850
Address: Mwanza Region, Lake Victoria Goldfields, Tanzania`,
    },
];

export default function PrivacyPolicyPage() {
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
                            <Shield className="h-7 w-7 text-gold-500" />
                        </div>
                        <div>
                            <p className="text-gold-500 text-sm uppercase tracking-widest font-medium">Legal</p>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold">Privacy Policy</h1>
                        </div>
                    </div>
                    <p className="text-gray-400">Last updated: February 2026</p>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
                <p className="text-gray-300 leading-relaxed">
                    African Gold Company ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
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
