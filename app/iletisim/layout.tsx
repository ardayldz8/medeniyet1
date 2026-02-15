import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "İletişim",
    description:
        "Medeniyet Kasap & Izgara iletişim bilgileri. Adres, telefon, WhatsApp ve çalışma saatleri. Eyüpsultan Çırçır, İstanbul.",
};

export default function IletisimLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
