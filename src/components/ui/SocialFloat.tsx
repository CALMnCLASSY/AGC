"use client";

import Link from 'next/link';
import { Facebook, Send, Linkedin, MessageCircle } from 'lucide-react';

export function SocialFloat() {
    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
            <Link
                href="https://facebook.com/africangoldcompany"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-gray-400 hover:text-blue-500 transition-all hover:scale-110 shadow-lg group"
                aria-label="Facebook"
            >
                <Facebook className="w-5 h-5 group-hover:animate-pulse" />
            </Link>

            <Link
                href="https://t.me/africangoldofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-gray-400 hover:text-blue-400 transition-all hover:scale-110 shadow-lg group"
                aria-label="Telegram"
            >
                <Send className="w-5 h-5 group-hover:animate-pulse" />
            </Link>

            <Link
                href="https://linkedin.com/company/african-gold-co"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-gray-400 hover:text-blue-600 transition-all hover:scale-110 shadow-lg group"
                aria-label="LinkedIn"
            >
                <Linkedin className="w-5 h-5 group-hover:animate-pulse" />
            </Link>

            <Link
                href="https://wa.me/255761929850?text=I%20want%20to%20buy%20gold"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-gray-400 hover:text-green-500 transition-all hover:scale-110 shadow-lg group"
                aria-label="WhatsApp"
            >
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
            </Link>
        </div>
    );
}
