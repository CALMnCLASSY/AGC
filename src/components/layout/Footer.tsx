import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Send, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-charcoal-900 border-t border-gold-500/20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-white font-heading text-lg font-bold tracking-widest uppercase">
                            African Gold Co.
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Tanzania's premier gold dealer. We offer the best market prices for 99.9% pure gold,
                            direct from our licensed mines to global buyers.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="https://t.me/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors">
                                <Send className="h-5 w-5" />
                            </Link>
                            <Link href="https://wa.me/255123456789?text=I%20want%20to%20buy%20gold" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors">
                                <MessageCircle className="h-5 w-5" />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-gold-500 font-heading text-sm font-bold tracking-widest uppercase">
                            Operations
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Exploration Data</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Refinement Process</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Export Licensing</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Sustainability (ESG)</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="space-y-4">
                        <h4 className="text-gold-500 font-heading text-sm font-bold tracking-widest uppercase">
                            Our Gold
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Gold Bars</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Bulk Orders</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Investment Gold</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Current Prices</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-gold-500 font-heading text-sm font-bold tracking-widest uppercase">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0" />
                                <span>Mwanza Region, Lake Victoria Goldfields, Tanzania</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-gold-500 flex-shrink-0" />
                                <span>+255 619 29850</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-gold-500 flex-shrink-0" />
                                <span>corporate@africangold.co.tz</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-charcoal-800 text-center text-xs text-gray-500 uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} African Gold Company. All rights reserved. | <Link href="#" className="hover:text-gold-500">Privacy Policy</Link></p>
                </div>
            </div>
        </footer>
    );
}
