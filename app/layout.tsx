import type { Metadata } from "next";
import { EB_Garamond, Inter } from "next/font/google";
import { TopNav } from "@/components/TopNav";
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
  description: "Medeniyet Kasap & Izgara resmi web sitesi."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr" className={`${heading.variable} ${body.variable}`}>
      <body className="min-h-screen font-[var(--font-body)]">
        <TopNav />
        {children}
      </body>
    </html>
  );
}
