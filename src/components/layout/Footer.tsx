import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Send, MessageCircle } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-charcoal-900 via-charcoal-900 to-charcoal-800/80 border-t border-gold-500/20 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-4 group">
                        <h3 className="text-white font-heading text-lg font-bold tracking-widest uppercase group-hover:text-gold-400 transition-colors">
                            African Gold Co.
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Tanzania's premier gold dealer. We offer the best market prices for 99.9% pure gold,
                            direct from our licensed mines to global buyers.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 hover:scale-110 transition-all duration-300">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="https://t.me/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 hover:scale-110 transition-all duration-300">
                                <Send className="h-5 w-5" />
                            </Link>
                            <Link href="https://wa.me/255761929850?text=I%20want%20to%20buy%20gold" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 hover:scale-110 transition-all duration-300">
                                <MessageCircle className="h-5 w-5" />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gold-500 hover:scale-110 transition-all duration-300">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-gold-500 font-heading text-sm font-bold tracking-widest uppercase hover:text-gold-400 transition-colors">
                            Operations
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/operations/exploration" className="hover:text-gold-500 hover:translate-x-1 transition-all duration-200 inline-flex items-center">→ Exploration Data</Link></li>
                            <li><Link href="/operations/refinement" className="hover:text-gold-500 hover:translate-x-1 transition-all duration-200 inline-flex items-center">→ Refinement Process</Link></li>
                            <li><Link href="/operations/export-licensing" className="hover:text-gold-500 hover:translate-x-1 transition-all duration-200 inline-flex items-center">→ Export Licensing</Link></li>
                            <li><Link href="/operations/sustainability" className="hover:text-gold-500 hover:translate-x-1 transition-all duration-200 inline-flex items-center">→ Sustainability (ESG)</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="space-y-4">
                        <h4 className="text-gold-500 font-heading text-sm font-bold tracking-widest uppercase hover:text-gold-400 transition-colors">
                            Our Gold
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="/products/gold-bars" className="hover:text-gold-500 hover:translate-x-1 transition-all duration-200 inline-flex items-center">→ Gold Bars</Link></li>
                            <li><Link href="/products/bulk-orders" className="hover:text-gold-500 hover:translate-x-1 transition-all duration-200 inline-flex items-center">→ Bulk Orders</Link></li>
                            <li><Link href="/products/investment-gold" className="hover:text-gold-500 hover:translate-x-1 transition-all duration-200 inline-flex items-center">→ Investment Gold</Link></li>
                            <li><Link href="/products/current-prices" className="hover:text-gold-500 hover:translate-x-1 transition-all duration-200 inline-flex items-center">→ Current Prices</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-gold-500 font-heading text-sm font-bold tracking-widest uppercase hover:text-gold-400 transition-colors">
                            Contact
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li className="flex items-start gap-3 hover:text-white transition-colors group">
                                <MapPin className="h-5 w-5 text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <span>Mwanza Region, Lake Victoria Goldfields, Tanzania</span>
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors group">
                                <Phone className="h-5 w-5 text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="tel:+255761929850" className="hover:text-gold-500 transition-colors">+255 761 929 850</a>
                            </li>
                            <li className="flex items-center gap-3 hover:text-white transition-colors group">
                                <Mail className="h-5 w-5 text-gold-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                <a href="mailto:pureafricagold@gmail.com" className="hover:text-gold-500 transition-colors">pureafricagold@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-charcoal-700 text-center text-xs text-gray-500 uppercase tracking-wider space-y-4">
                    <p>&copy; {new Date().getFullYear()} African Gold Company. All rights reserved.</p>
                    <div className="flex justify-center gap-6">
                        <Link href="/legal/privacy-policy" className="hover:text-gold-500 transition-colors">Privacy Policy</Link>
                        <Link href="/legal/terms" className="hover:text-gold-500 transition-colors">Terms &amp; Conditions</Link>
                        <Link href="/legal/compliance" className="hover:text-gold-500 transition-colors">Compliance</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

