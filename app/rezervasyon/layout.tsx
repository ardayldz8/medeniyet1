import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rezervasyon",
    description:
        "Medeniyet Kasap & Izgara'da masa rezervasyonu yapın. WhatsApp veya telefon ile hızlı rezervasyon.",
};

export default function RezervasyonLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
