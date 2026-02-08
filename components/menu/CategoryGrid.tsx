"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { MenuCategoryInfo, MenuItem } from "@/types/menu";

interface CategoryGridProps {
    categories: MenuCategoryInfo[];
    items: MenuItem[];
    onCategorySelect: (slug: string) => void;
}

export function CategoryGrid({ categories, items, onCategorySelect }: CategoryGridProps) {
    // Count items per category
    const getItemCount = (slug: string) => items.filter(item => item.category === slug).length;

    // Filter out empty categories
    const nonEmptyCategories = categories.filter(cat => getItemCount(cat.slug) > 0);

    return (
        <div className="mx-auto max-w-screen-2xl px-4 py-8 md:px-8 md:py-12">
            {/* Search bar placeholder */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-8"
            >
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Menüde ara..."
                        className="w-full rounded-xl border border-white/10 bg-[rgb(var(--panel))] px-5 py-4 text-white placeholder-white/40 outline-none transition-all focus:border-[rgb(var(--brandWine)/0.5)] focus:ring-2 focus:ring-[rgb(var(--brandWine)/0.2)]"
                    />
                    <span className="absolute right-5 top-1/2 -translate-y-1/2 text-white/40">
                        🔍
                    </span>
                </div>
            </motion.div>

            {/* Category Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {nonEmptyCategories.map((category, index) => (
                    <motion.button
                        key={category.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        onClick={() => onCategorySelect(category.slug)}
                        className="group relative aspect-[16/9] overflow-hidden rounded-2xl text-left transition-all duration-300 hover:ring-2 hover:ring-[rgb(var(--brandWine))] hover:ring-offset-2 hover:ring-offset-[rgb(var(--bg))]"
                    >
                        {/* Background Image */}
                        {category.image && (
                            <Image
                                src={category.image}
                                alt={category.label}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            />
                        )}

                        {/* Dark overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-all duration-300 group-hover:from-black/70 group-hover:via-black/30" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-5">
                            <h3 className="text-xl font-bold text-white drop-shadow-lg md:text-2xl">
                                {category.label}
                            </h3>
                            <p className="mt-1 text-sm text-white/70">
                                {getItemCount(category.slug)} ürün
                            </p>
                        </div>

                        {/* Hover arrow indicator */}
                        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                            →
                        </div>
                    </motion.button>
                ))}
            </div>
        </div>
    );
}
