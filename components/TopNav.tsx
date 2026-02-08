"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Brand } from "@/components/Brand";

function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

const nav = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/menu", label: "Menü" },
  { href: "/galeri", label: "Galeri" },
  { href: "/iletisim", label: "İletişim" },
  { href: "/hakkimizda", label: "Hakkımızda" }
] as const;

export function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detection for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll(); // Initial check
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile drawer: Escape key + scroll lock
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
        scrolled
          ? "bg-black/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      )}
    >
      <div className="relative h-[104px]">
        {/* Logo - pinned left with hover effect */}
        <Link
          href="/"
          aria-label="Ana sayfa"
          className={cn(
            "absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-12 md:-translate-x-16",
            "transition-all duration-300 hover:scale-[1.02]",
            "drop-shadow-[0_10px_28px_rgba(0,0,0,0.70)]"
          )}
        >
          <Brand className="h-[84px] w-[430px] md:h-[96px] md:w-[560px]" />
        </Link>

        {/* Desktop Navigation */}
        <div className="mx-auto flex h-[104px] w-full max-w-screen-2xl items-center px-3 md:px-6 lg:px-8 md:pl-[620px] md:pr-[220px]">
          <nav
            className="hidden flex-1 items-center justify-center gap-8 md:flex"
            aria-label="Üst menü"
          >
            {nav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative py-2 text-sm font-semibold uppercase tracking-[0.18em]",
                    "transition-colors duration-300",
                    active ? "text-white" : "text-white/70 hover:text-white",
                    "group"
                  )}
                >
                  {item.label}

                  {/* Animated underline indicator */}
                  {active ? (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute inset-x-0 -bottom-1 h-[2px] bg-[rgb(var(--brandWine))]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  ) : (
                    <span className="absolute inset-x-0 -bottom-1 h-[2px] w-0 bg-white/50 transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right-side CTA + Mobile Toggle */}
        <div className="absolute right-3 top-1/2 z-10 flex -translate-y-1/2 items-center gap-3 md:right-6 lg:right-8">
          {/* Desktop CTA with shine effect */}
          <Link
            href="/rezervasyon"
            className={cn(
              "hidden md:inline-flex h-11 items-center justify-center rounded-xl px-6",
              "text-sm font-semibold uppercase tracking-[0.16em] text-white",
              "bg-[rgb(var(--brandWine))] ring-1 ring-white/10",
              "shadow-[0_8px_24px_rgba(188,21,33,0.35)]",
              "transition-all duration-300",
              "hover:shadow-[0_12px_32px_rgba(188,21,33,0.5)] hover:scale-[1.02]",
              "relative overflow-hidden group"
            )}
          >
            <span className="relative z-10">Rezervasyon</span>
            {/* Shine sweep effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 ease-out" />
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className={cn(
              "md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl",
              "border border-white/20 bg-white/5 backdrop-blur-sm",
              "text-white/90 transition-all duration-300",
              "hover:bg-white/10 hover:border-white/30",
              "active:scale-95"
            )}
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
      </div>

      {/* Mobile Drawer with AnimatePresence */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[55] bg-black/80 backdrop-blur-md md:hidden"
              aria-hidden="true"
              onClick={() => setOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ opacity: 0, x: 100, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.98 }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className={cn(
                "fixed right-4 top-[120px] z-[60] w-[min(90vw,340px)] md:hidden",
                "overflow-hidden rounded-2xl",
                "border border-white/10 bg-[rgb(var(--bg))]",
                "shadow-[0_24px_80px_rgba(0,0,0,0.7)]",
                "backdrop-blur-xl"
              )}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-white/8 px-5 py-4">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/60">
                  Menü
                </span>
                <button
                  type="button"
                  className={cn(
                    "rounded-lg px-3 py-2",
                    "text-xs font-semibold uppercase tracking-[0.15em] text-white/70",
                    "border border-white/12 bg-white/5",
                    "transition-all hover:bg-white/10 hover:text-white",
                    "active:scale-95"
                  )}
                  onClick={() => setOpen(false)}
                >
                  Kapat
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="px-3 py-3" aria-label="Mobil menü">
                {nav.map((item, index) => {
                  const active = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3.5",
                          "transition-all duration-200",
                          active
                            ? "bg-[rgb(var(--brandWine))/0.15] text-white"
                            : "text-white/80 hover:bg-white/5 hover:text-white"
                        )}
                      >
                        <span className="font-medium">{item.label}</span>
                        {active ? (
                          <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[rgb(var(--brandWine))]">
                            <span className="h-1.5 w-1.5 rounded-full bg-current" />
                            Aktif
                          </span>
                        ) : (
                          <span className="text-white/30 transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer CTA */}
              <div className="border-t border-white/8 p-4">
                <Link
                  href="/rezervasyon"
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex h-12 w-full items-center justify-center rounded-xl",
                    "bg-[rgb(var(--brandWine))] text-sm font-bold text-white",
                    "shadow-[0_8px_24px_rgba(188,21,33,0.3)]",
                    "transition-all duration-300",
                    "hover:shadow-[0_12px_32px_rgba(188,21,33,0.45)]",
                    "active:scale-[0.98]"
                  )}
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
