import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter } from "lucide-react";

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
                            Ethical mining, direct sourcing, and operational transparency.
                            Connecting global investors with Tanzania's primary gold production.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <Link href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gold-500 transition-colors">
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

                    {/* Support */}
                    <div className="space-y-4">
                        <h4 className="text-gold-500 font-heading text-sm font-bold tracking-widest uppercase">
                            Client Visit
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li><Link href="#" className="hover:text-white transition-colors">Book a Site Tour</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Security Protocols</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Partner Hotels</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Visa & Travel</Link></li>
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
                                <span>+255 123 456 789</span>
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
