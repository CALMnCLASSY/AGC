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
  title: "African Gold Company - From Earth to Excellence",
  description: "Licensed extraction, ethical refinement, and conflict-free gold exports from Tanzania. Institutional-grade gold for verified global partners.",
  keywords: ["gold mining", "Tanzania gold", "ethical gold sourcing", "gold exports", "African Gold Company", "Geita gold"],
  openGraph: {
    title: "African Gold Company - From Earth to Excellence",
    description: "Licensed extraction, ethical refinement, and conflict-free gold exports from Tanzania.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "African Gold Company",
    description: "Institutional-grade gold from Tanzania",
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
