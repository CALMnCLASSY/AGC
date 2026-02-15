import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Import fonts
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SocialFloat } from "@/components/ui/SocialFloat";
import { ModalProvider } from "@/context/ModalContext";
import { QuoteModal } from "@/components/ui/QuoteModal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "African Gold Company - Best Gold Prices in Tanzania",
  description: "Premier gold dealer in Tanzania. We sell 99.9% pure gold bars and nuggets directly from Geita mines. Get competitive market prices.",
  keywords: ["buy gold tanzania", "gold bars for sale", "african gold price", "geita gold miners", "gold investment tanzania"],
  openGraph: {
    title: "African Gold Company - Buy Gold in Tanzania",
    description: "Secure, fully licensed gold dealer. 99.9% purity certified.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "African Gold Co. - Premium Gold Sales",
    description: "Direct source for Tanzanian gold. Best prices guaranteed.",
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
        <ModalProvider>
          <QuoteModal />
          <SocialFloat />
          <Navbar />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ModalProvider>
      </body>
    </html>
  );
}
