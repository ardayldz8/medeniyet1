"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Brand } from "@/components/Brand";

const nav = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Menü", href: "/menu" },
    { label: "Galeri", href: "/galeri" },
    { label: "İletişim", href: "/iletisim" },
    { label: "Hakkımızda", href: "/hakkimizda" },
];

export function TopNavDesktop({ scrolled }: { scrolled: boolean }) {
    const pathname = usePathname();

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled
                ? "bg-black/95 shadow-[0_4px_30px_rgba(0,0,0,0.45)] backdrop-blur-lg"
                : "bg-transparent"
                }`}
        >
            <div className="grid w-full -translate-y-8 grid-cols-[1fr_auto_1fr] items-center px-4 pt-0 pb-2 lg:px-8">
                {/* Logo - Left */}
                <Link
                    href="/"
                    aria-label="Ana sayfa"
                    className="justify-self-start flex-shrink-0 transition-all duration-300 hover:scale-[1.02]"
                >
                    <Brand className="h-40" />
                </Link>

                {/* Navigation - Center */}
                <nav className="justify-self-center flex items-center gap-8" aria-label="Üst menü">
                    {nav.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`relative py-2 text-sm font-semibold uppercase tracking-[0.18em] leading-none transition-colors duration-300 group ${active ? "text-white" : "text-white/70 hover:text-white"
                                    }`}
                            >
                                {item.label}
                                {active ? (
                                    <motion.span
                                        layoutId="nav-active-indicator"
                                        className="absolute inset-x-0 -bottom-1 h-[2px] bg-[rgb(var(--brandWine))]"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                ) : (
                                    <span className="absolute inset-x-0 -bottom-1 h-[2px] scale-x-0 bg-white/60 transition-transform duration-300 group-hover:scale-x-100" />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA Button - Right */}
                <Link
                    href="/rezervasyon"
                    className="justify-self-end flex-shrink-0 inline-flex h-14 items-center justify-center gap-2 rounded-lg bg-[rgb(var(--brandWine))] px-8 text-lg font-semibold text-white shadow-[0_10px_30px_rgba(0,0,0,0.50)] ring-1 ring-white/10 transition-all duration-300 hover:bg-[rgb(var(--brandWine)/0.9)]"
                >
                    Rezervasyon
                </Link>
            </div>
        </header>
    );
}
