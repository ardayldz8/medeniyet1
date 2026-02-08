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
                ? "bg-black/95 backdrop-blur-md"
                : "bg-gradient-to-b from-black/70 via-black/30 to-transparent"
                }`}
        >
            {/* Navbar - 72px height with proper padding */}
            <div className="flex h-[72px] items-center justify-between px-5">
                {/* Logo - properly sized and vertically centered */}
                <Link href="/" aria-label="Ana sayfa">
                    <Brand className="h-20 w-auto" />
                </Link>

                {/* Premium hamburger - thin lines, no background */}
                <button
                    type="button"
                    className="flex h-11 w-11 items-center justify-center"
                    aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    <div className="relative flex h-4 w-6 flex-col justify-between">
                        <motion.span
                            animate={open ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                            className="h-[1.5px] w-full bg-white origin-center"
                            transition={{ duration: 0.25 }}
                        />
                        <motion.span
                            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            className="h-[1.5px] w-full bg-white"
                            transition={{ duration: 0.15 }}
                        />
                        <motion.span
                            animate={open ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                            className="h-[1.5px] w-full bg-white origin-center"
                            transition={{ duration: 0.25 }}
                        />
                    </div>
                </button>
            </div>

            {/* Fullscreen overlay menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-[72px] z-50 bg-black/98"
                    >
                        <nav className="flex flex-col px-8 pt-8" aria-label="Mobil menü">
                            {nav.map((item, index) => {
                                const active = pathname === item.href;
                                return (
                                    <motion.div
                                        key={item.href}
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.06, duration: 0.3 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className={`block py-5 text-2xl font-light tracking-wide border-b border-white/10 ${active
                                                ? "text-[rgb(var(--brandWine))]"
                                                : "text-white"
                                                }`}
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </nav>

                        {/* CTA at bottom */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.3 }}
                            className="absolute bottom-0 left-0 right-0 p-8 pb-12"
                        >
                            <Link
                                href="/rezervasyon"
                                onClick={() => setOpen(false)}
                                className="flex h-14 w-full items-center justify-center rounded-lg bg-[rgb(var(--brandWine))] text-base font-semibold text-white"
                            >
                                Rezervasyon Yap
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
