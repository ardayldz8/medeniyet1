"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [open]);

    return (
        <>
            {/* Fixed header */}
            <header
                className={`fixed inset-x-0 top-0 z-[100] transition-all duration-300 ${scrolled || open
                        ? "bg-black"
                        : "bg-gradient-to-b from-black/80 to-transparent"
                    }`}
            >
                <div className="flex h-[90px] items-center justify-between px-4">
                    {/* Logo */}
                    <Link href="/" aria-label="Ana sayfa" onClick={() => setOpen(false)}>
                        <Brand className="h-16 w-auto" />
                    </Link>

                    {/* Hamburger button */}
                    <button
                        type="button"
                        className="relative z-[110] flex h-12 w-12 items-center justify-center"
                        aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
                        aria-expanded={open}
                        onClick={() => setOpen((v) => !v)}
                    >
                        <div className="flex h-5 w-7 flex-col justify-between">
                            <motion.span
                                animate={open ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                                className="h-[2px] w-full rounded-full bg-white origin-center"
                                transition={{ duration: 0.2 }}
                            />
                            <motion.span
                                animate={open ? { opacity: 0 } : { opacity: 1 }}
                                className="h-[2px] w-full rounded-full bg-white"
                                transition={{ duration: 0.1 }}
                            />
                            <motion.span
                                animate={open ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                                className="h-[2px] w-full rounded-full bg-white origin-center"
                                transition={{ duration: 0.2 }}
                            />
                        </div>
                    </button>
                </div>
            </header>

            {/* Fullscreen menu overlay - completely separate from header */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-[99] bg-black pt-[90px]"
                    >
                        {/* Menu links */}
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
                                            className={`block py-4 text-xl font-medium border-b border-white/10 ${active
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

                        {/* CTA button at bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 pb-10">
                            <Link
                                href="/rezervasyon"
                                onClick={() => setOpen(false)}
                                className="flex h-14 w-full items-center justify-center rounded-xl bg-[rgb(var(--brandWine))] text-lg font-semibold text-white"
                            >
                                Rezervasyon Yap
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
