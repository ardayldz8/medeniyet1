import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Menü",
    description:
        "Medeniyet Kasap & Izgara menüsü - Et çeşitleri, ızgara, köfte, salatalar ve daha fazlası. Günlük taze et seçimi.",
};

export default function MenuLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
