import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SocialFloat } from "@/components/ui/SocialFloat";
import { ModalProvider } from "@/context/ModalContext";
import { QuoteModal } from "@/components/ui/QuoteModal";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

// ── Global / default metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL("https://pureafricagold.com"),
  title: {
    default: "African Gold Company | Buy Gold in Tanzania – 99.9% Pure",
    template: "%s | African Gold Company",
  },
  description:
    "Tanzania's premier licensed gold dealer. Buy 99.9% pure gold bars, nuggets and investment gold direct from Geita mines. Competitive market prices, full export documentation.",
  keywords: [
    "buy gold Tanzania",
    "gold bars Tanzania",
    "African gold dealer",
    "gold supplier Tanzania",
    "Geita gold mine",
    "Tanzania gold export",
    "investment gold Africa",
    "gold bullion Tanzania",
    "pure gold bars for sale",
    "Africa gold price",
    "gold mine Tanzania",
    "99.9 pure gold",
    "gold trading Tanzania",
    "Tanzania mineral exporter",
    "African Gold Company",
    "bulk gold purchase",
    "gold kilo bar Tanzania",
    "licensed gold dealer Africa",
    "pureafricagold",
  ],
  authors: [{ name: "African Gold Company", url: "https://pureafricagold.com" }],
  creator: "African Gold Company",
  publisher: "African Gold Company",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pureafricagold.com",
    siteName: "African Gold Company",
    title: "African Gold Company | Buy 99.9% Pure Gold in Tanzania",
    description:
      "Licensed gold dealer in Tanzania. Source 99.9% pure gold bars and nuggets directly from Geita mines. Competitive prices, full export documentation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "African Gold Company – Tanzania Gold Dealer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AfricanGoldCo",
    creator: "@AfricanGoldCo",
    title: "African Gold Company | Buy 99.9% Pure Gold in Tanzania",
    description:
      "Licensed gold dealer in Tanzania. Geita mine gold bars & nuggets at best market prices.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-placeholder",  // Replace with actual token from Google Search Console
  },
  category: "finance",
};

// ── JSON-LD Structured Data ────────────────────────────────────────────────
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://pureafricagold.com/#organization",
      name: "African Gold Company",
      url: "https://pureafricagold.com",
      logo: {
        "@type": "ImageObject",
        url: "https://pureafricagold.com/logo.png",
      },
      description:
        "Tanzania's premier licensed gold dealer offering 99.9% pure gold bars and nuggets from Geita mines.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mwanza",
        addressRegion: "Mwanza Region",
        addressCountry: "TZ",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+255-761-929-850",
        email: "sales@pureafricagold.com",
        contactType: "sales",
        availableLanguage: ["English"],
      },
      sameAs: [
        "https://www.facebook.com/profile.php?id=61588598324204",
        "http://www.linkedin.com/in/puregoldafrica",
        "https://t.me/pureafricagold",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://pureafricagold.com/#website",
      url: "https://pureafricagold.com",
      name: "African Gold Company",
      publisher: { "@id": "https://pureafricagold.com/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://pureafricagold.com/news?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* Geo tags for local SEO */}
        <meta name="geo.region" content="TZ-02" />
        <meta name="geo.placename" content="Mwanza, Tanzania" />
        <meta name="geo.position" content="-2.5167;32.9000" />
        <meta name="ICBM" content="-2.5167, 32.9000" />
      </head>
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
