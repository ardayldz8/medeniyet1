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
            className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled
                ? "bg-[rgb(var(--bg))/0.95] shadow-[0_4px_30px_rgba(0,0,0,0.45)] backdrop-blur-lg"
                : "bg-transparent"
                }`}
        >
            <div className="flex h-[60px] items-center justify-between px-4">
                {/* Logo */}
                <Link href="/" aria-label="Ana sayfa" className="-ml-2">
                    <Brand className="h-[40px] w-[160px]" />
                </Link>

                {/* Menu button */}
                <button
                    type="button"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-black/30 text-white/90 backdrop-blur"
                    aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                >
                    <div className="relative w-5 h-4 flex flex-col justify-between">
                        <motion.span
                            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                            className="block h-[2px] w-full bg-current origin-center"
                            transition={{ duration: 0.2 }}
                        />
                        <motion.span
                            animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                            className="block h-[2px] w-full bg-current"
                            transition={{ duration: 0.15 }}
                        />
                        <motion.span
                            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                            className="block h-[2px] w-full bg-current origin-center"
                            transition={{ duration: 0.2 }}
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="fixed inset-0 top-[60px] bg-black/70 backdrop-blur-sm"
                            aria-hidden="true"
                            onClick={() => setOpen(false)}
                        />

                        {/* Drawer Panel */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ type: "spring", damping: 28, stiffness: 300 }}
                            className="fixed inset-x-4 top-[70px] z-[60] overflow-hidden rounded-xl border border-white/10 bg-[rgb(var(--bg))] shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
                        >
                            {/* Drawer Links */}
                            <nav className="p-3" aria-label="Mobil menü">
                                {nav.map((item, index) => {
                                    const active = pathname === item.href;
                                    return (
                                        <motion.div
                                            key={item.href}
                                            initial={{ opacity: 0, x: 15 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.04, duration: 0.2 }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${active
                                                    ? "bg-[rgb(var(--brandWine))/0.15] text-white"
                                                    : "text-white/80 hover:bg-white/5"
                                                    }`}
                                            >
                                                {item.label}
                                            </Link>
                                        </motion.div>
                                    );
                                })}
                            </nav>

                            {/* Drawer CTA */}
                            <div className="border-t border-white/8 p-3">
                                <Link
                                    href="/rezervasyon"
                                    onClick={() => setOpen(false)}
                                    className="flex h-11 w-full items-center justify-center rounded-lg bg-[rgb(var(--brandWine))] text-sm font-bold text-white"
                                >
                                    Rezervasyon Yap
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}
