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
  title: "African Gold Company (AGC) | Ethical Gold Sourcing & Visits",
  description: "Direct access to primary gold production in Tanzania. Book a site visit to our extraction and refinement facilities.",
  keywords: ["Tanzania Gold", "Direct Gold Sourcing", "Gold Refinery Visit", "Ethical Mining Investment"],
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
