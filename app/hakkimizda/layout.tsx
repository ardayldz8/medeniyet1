import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hakkımızda",
    description:
        "Medeniyet Kasap & Izgara'nın hikayesi. Eyüpsultan Çırçır'da geleneksel Türk mutfağının en lezzetli örneklerini sunuyoruz.",
};

export default function HakkimizdaLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
