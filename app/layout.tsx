import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";
import "./globals.css";

const heading = EB_Garamond({
  // Turkish glyphs: latin-ext is important for proper diacritics.
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap"
});

const body = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Medeniyet Kasap & Izgara",
    template: "%s | Medeniyet"
  },
  description: "Medeniyet Kasap & Izgara — Eyüpsultan Çırçır'da günlük taze et, ustalıkla hazırlanan ızgaralar ve geleneksel lezzetler.",
  keywords: ["kasap", "ızgara", "et", "restoran", "Eyüpsultan", "Çırçır", "İstanbul", "kebap", "döner", "lahmacun"],
  openGraph: {
    title: "Medeniyet Kasap & Izgara",
    description: "Eyüpsultan Çırçır'da günlük taze et, ustalıkla hazırlanan ızgaralar ve geleneksel lezzetler.",
    type: "website",
    locale: "tr_TR",
    siteName: "Medeniyet Kasap & Izgara",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen font-[var(--font-body)]">
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
