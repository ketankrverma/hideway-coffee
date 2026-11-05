import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const serifFont = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Hideaway Coffee House – Soho, London",
    default: "Hideaway Coffee House | Specialty Coffee in Soho, London",
  },
  description:
    "A peaceful sanctuary in the heart of London's Soho. Specialty single-origin coffee, handcrafted espresso, fresh pastries, and mindful hospitality at 7 Farrier's Passage.",
  keywords: [
    "Hideaway Coffee House",
    "Specialty Coffee London",
    "Soho Cafe",
    "Farriers Passage London",
    "London Coffee Shop",
    "Single Origin Espresso",
    "Best Coffee in Soho",
    "Independent Cafe London",
  ],
  authors: [{ name: "Hideaway Coffee House" }],
  creator: "Hideaway Coffee House",
  metadataBase: new URL("https://hideawaycoffeehouse.co.uk"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://hideawaycoffeehouse.co.uk",
    title: "Hideaway Coffee House | A Little Hideaway in the Heart of Soho",
    description:
      "Specialty coffee, thoughtful moments and a welcoming space tucked away in Farrier's Passage, Soho, London.",
    siteName: "Hideaway Coffee House",
    images: [
      {
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Hideaway Coffee House Soho London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hideaway Coffee House | Soho, London",
    description:
      "Specialty coffee, thoughtful moments and a welcoming space in Soho, London.",
    images: [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Hideaway Coffee House",
    "image": [
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7 Farrier's Passage",
      "addressLocality": "London",
      "postalCode": "W1D 7DP",
      "addressRegion": "Greater London",
      "addressCountry": "GB",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5132,
      "longitude": -0.1332,
    },
    "url": "https://hideawaycoffeehouse.co.uk",
    "servesCuisine": "Specialty Coffee, Artisanal Pastries",
    "priceRange": "££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:30",
        "closes": "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:30",
        "closes": "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "17:30",
      },
    ],
  };

  return (
    <html
      lang="en-GB"
      className={`${serifFont.variable} ${sansFont.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream-50 text-espresso-900 selection:bg-espresso-900 selection:text-cream-50 font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
