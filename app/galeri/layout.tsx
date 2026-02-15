import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Galeri",
    description:
        "Medeniyet Kasap & Izgara mekanından kareler. Restoranımızın atmosferini ve lezzetlerimizi keşfedin.",
};

export default function GaleriLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
