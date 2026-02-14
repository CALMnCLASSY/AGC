import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Import fonts
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "African Gold Company - Best Gold Prices in Tanzania",
  description: "Buy premium 99.9% pure gold direct from Tanzania's licensed mines. We offer the best gold prices in the market with ethical sourcing and full export licensing. Get your quote today.",
  keywords: ["buy gold Tanzania", "gold prices", "gold dealer", "investment gold", "gold bars Tanzania", "African Gold Company", "99.9% pure gold"],
  openGraph: {
    title: "African Gold Company - Best Gold Prices in Tanzania",
    description: "Buy premium 99.9% pure gold direct from our licensed mines. Unbeatable prices, ethical sourcing, full licensing.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "African Gold Company",
    description: "Best gold prices in Tanzania - 99.9% pure gold direct from the source",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-background text-foreground antialiased selection:bg-gold-500 selection:text-charcoal-900 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
