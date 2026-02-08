"use client";

import { useCallback, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { MenuCategoryInfo } from "@/types/menu";

function cn(...classes: (string | undefined | null | boolean)[]): string {
    return classes.filter(Boolean).join(" ");
}

interface CategoryFilterProps {
    categories: MenuCategoryInfo[];
    activeCategory: string | null;
    onCategoryChange: (slug: string | null) => void;
}

export function CategoryFilter({
    categories,
    activeCategory,
    onCategoryChange,
}: CategoryFilterProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(false);

    // Check scroll position for arrow visibility
    useEffect(() => {
        const checkScroll = () => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                setShowLeftArrow(scrollLeft > 10);
                setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
            }
        };

        checkScroll();
        const el = scrollRef.current;
        el?.addEventListener("scroll", checkScroll);
        window.addEventListener("resize", checkScroll);

        return () => {
            el?.removeEventListener("scroll", checkScroll);
            window.removeEventListener("resize", checkScroll);
        };
    }, []);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 200;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const handleClick = useCallback(
        (slug: string | null) => {
            onCategoryChange(slug);

            if (slug) {
                const element = document.getElementById(`category-${slug}`);
                if (element) {
                    const yOffset = -180;
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                }
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        },
        [onCategoryChange]
    );

    return (
        <div className="relative border-b border-white/[0.06] bg-[rgb(var(--bg)/0.85)] backdrop-blur-xl">
            {/* Left scroll arrow */}
            <AnimatePresence>
                {showLeftArrow && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-0 z-20 hidden h-full w-16 items-center justify-start bg-gradient-to-r from-[rgb(var(--bg))] to-transparent pl-2 md:flex"
                        aria-label="Sola kaydır"
                    >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20">
                            ◀
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Right scroll arrow */}
            <AnimatePresence>
                {showRightArrow && (
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-0 z-20 hidden h-full w-16 items-center justify-end bg-gradient-to-l from-[rgb(var(--bg))] to-transparent pr-2 md:flex"
                        aria-label="Sağa kaydır"
                    >
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/20">
                            ▶
                        </span>
                    </motion.button>
                )}
            </AnimatePresence>

            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <nav
                    ref={scrollRef}
                    className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-hide md:gap-3"
                    aria-label="Menü kategorileri"
                >
                    {/* "Tümü" button */}
                    <button
                        onClick={() => handleClick(null)}
                        className={cn(
                            "relative shrink-0 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300",
                            activeCategory === null
                                ? "text-white"
                                : "text-white/50 hover:text-white/80 hover:bg-white/[0.04]"
                        )}
                    >
                        {activeCategory === null && (
                            <motion.span
                                layoutId="category-pill"
                                className="absolute inset-0 rounded-xl bg-gradient-to-r from-[rgb(var(--brandWine))] to-[rgb(var(--brand))] shadow-lg shadow-[rgb(var(--brandWine)/0.2)]"
                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            <span className="text-base">✨</span>
                            <span>Tümü</span>
                        </span>
                    </button>

                    {/* Category buttons */}
                    {categories.map((category) => (
                        <button
                            key={category.slug}
                            onClick={() => handleClick(category.slug)}
                            className={cn(
                                "relative shrink-0 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300",
                                activeCategory === category.slug
                                    ? "text-white"
                                    : "text-white/50 hover:text-white/80 hover:bg-white/[0.04]"
                            )}
                        >
                            {activeCategory === category.slug && (
                                <motion.span
                                    layoutId="category-pill"
                                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-[rgb(var(--brandWine))] to-[rgb(var(--brand))] shadow-lg shadow-[rgb(var(--brandWine)/0.2)]"
                                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10 flex items-center gap-2">
                                <span className="text-base">{category.icon}</span>
                                <span className="hidden sm:inline">{category.label}</span>
                            </span>
                        </button>
                    ))}
                </nav>
            </div>
        </div>
    );
}
