"use client";

import { useMemo } from "react";
import { motion } from "motion/react";
import type { MenuItem, MenuCategoryInfo } from "@/types/menu";
import { MenuCard } from "./MenuCard";

interface MenuGridProps {
    items: MenuItem[];
    categories: MenuCategoryInfo[];
    activeCategory: string | null;
}

// Category descriptions for richer content
const categoryDescriptions: Record<string, string> = {
    "corbalar": "Sıcacık, şifa dolu çorbalarımız",
    "dana-porsiyonlar": "En kaliteli dana etlerimiz, özenle hazırlanır",
    "kuzu-porsiyonlar": "Geleneksel lezzetler, kuzu etin en güzeli",
    "tavuk-porsiyonlar": "Hafif ve lezzetli tavuk seçenekleri",
    "hamburger": "Gurme burger deneyimi",
    "kebap-cesitleri": "Ustalıkla hazırlanan kebaplar",
    "izgara-kofte-porsiyon": "El yapımı, geleneksel köfteler",
    "sucuk-porsiyonlar": "Özel baharatlı sucuklarımız",
    "pilic-cevirme": "Mis gibi piliç çevirme",
    "kirmizi-et-kg": "Kilogram et seçenekleri",
    "mantar": "Lezzetli mantar çeşitleri",
    "meze-cesitleri": "Sofranıza eşlik eden mezeler",
    "salatalar": "Taze ve sağlıklı salatalar",
    "icecekler": "Serinleten içecekler",
    "tatli": "Tatlı bir son",
    "lavas-ekmek": "Sıcak ekmek çeşitleri",
};

export function MenuGrid({ items, categories, activeCategory }: MenuGridProps) {
    // Filter items if a category is selected
    const filteredItems = useMemo(() => {
        if (!activeCategory) return items;
        return items.filter((item) => item.category === activeCategory);
    }, [items, activeCategory]);

    // Group items by category
    const groupedItems = useMemo(() => {
        const groups = new Map<string, MenuItem[]>();

        for (const category of categories) {
            const categoryItems = filteredItems.filter(
                (item) => item.category === category.slug
            );
            if (categoryItems.length > 0) {
                groups.set(category.slug, categoryItems);
            }
        }

        return groups;
    }, [filteredItems, categories]);

    // Get category info by slug
    const getCategoryInfo = (slug: string) =>
        categories.find((c) => c.slug === slug);

    if (filteredItems.length === 0) {
        return (
            <div className="mx-auto max-w-screen-2xl px-4 py-24 text-center md:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center gap-4"
                >
                    <span className="text-6xl">🔍</span>
                    <p className="text-xl font-medium text-white/60">
                        Bu kategoride ürün bulunamadı.
                    </p>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="relative mx-auto max-w-screen-2xl px-4 py-8 md:px-8 md:py-12">
            {Array.from(groupedItems.entries()).map(([categorySlug, categoryItems], groupIndex) => {
                const category = getCategoryInfo(categorySlug);
                if (!category) return null;

                const description = categoryDescriptions[categorySlug];

                return (
                    <section
                        key={categorySlug}
                        id={`category-${categorySlug}`}
                        className="mb-16 last:mb-0"
                    >
                        {/* Category Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                            className="mb-8"
                        >
                            {/* Decorative top line */}
                            <div className="mb-6 flex items-center gap-4">
                                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            </div>

                            {/* Category info */}
                            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                                <div className="flex items-center gap-4">
                                    {/* Icon with glow */}
                                    <div className="relative">
                                        <span className="relative z-10 text-3xl md:text-4xl">
                                            {category.icon}
                                        </span>
                                        <div className="absolute inset-0 -z-10 scale-150 blur-xl opacity-30 text-3xl">
                                            {category.icon}
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className="font-[var(--font-heading)] text-2xl font-bold text-white md:text-3xl">
                                            {category.label}
                                        </h2>
                                        {description && (
                                            <p className="mt-1 text-sm text-white/40">
                                                {description}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Item count badge */}
                                <div className="flex items-center gap-2 text-sm text-white/40">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[rgb(var(--brandWine))]" />
                                    <span>{categoryItems.length} ürün</span>
                                </div>
                            </div>

                            {/* Decorative bottom line */}
                            <div className="mt-6 flex items-center gap-4">
                                <div className="h-px w-16 bg-gradient-to-r from-[rgb(var(--brandWine))] to-transparent" />
                                <div className="h-px flex-1 bg-white/[0.06]" />
                            </div>
                        </motion.div>

                        {/* Items Grid */}
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {categoryItems.map((item, index) => (
                                <MenuCard key={item.id} item={item} index={index} />
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}
