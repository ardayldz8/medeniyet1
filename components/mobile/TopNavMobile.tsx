"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Brand } from "@/components/Brand";

const nav = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Menü", href: "/menu" },
    { label: "Galeri", href: "/galeri" },
    { label: "İletişim", href: "/iletisim" },
    { label: "Hakkımızda", href: "/hakkimizda" },
];

export function TopNavMobile({ scrolled }: { scrolled: boolean }) {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-black/90 shadow-lg backdrop-blur-md"
                    : "bg-gradient-to-b from-black/60 to-transparent"
                }`}
        >
            {/* Main navbar container - full width */}
            <div className="flex h-16 items-center justify-between">
                {/* Logo - extends to edge */}
                <Link href="/" aria-label="Ana sayfa" className="pl-3">
                    <Brand className="h-14 w-56" />
                </Link>

                {/* Hamburger button - 48px touch target */}
                <button
                    type="button"
                    className="mr-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm active:scale-95 transition-transform"
                    aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    <div className="relative flex h-5 w-6 flex-col justify-between">
                        <motion.span
                            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                            className="h-0.5 w-full rounded-full bg-white"
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            className="h-0.5 w-full rounded-full bg-white"
                            transition={{ duration: 0.15 }}
                        />
                        <motion.span
                            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                            className="h-0.5 w-full rounded-full bg-white"
                            transition={{ duration: 0.2 }}
                        />
                    </div>
                </button>
            </div>

            {/* Fullscreen Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-16 z-50 bg-black/95 backdrop-blur-lg"
                    >
                        {/* Menu content */}
                        <nav className="flex flex-col p-6" aria-label="Mobil menü">
                            {nav.map((item, index) => {
                                const active = pathname === item.href;
                                return (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.2 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className={`block py-4 text-xl font-medium border-b border-white/10 transition-colors ${active
                                                    ? "text-[rgb(var(--brandWine))]"
                                                    : "text-white/90"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>

                        {/* Bottom CTA */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 pb-10">
                            <Link
                                href="/rezervasyon"
                                onClick={() => setOpen(false)}
                                className="flex h-14 w-full items-center justify-center rounded-xl bg-[rgb(var(--brandWine))] text-lg font-bold text-white shadow-lg"
                            >
                                Rezervasyon Yap
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
