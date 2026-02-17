"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MenuHero } from "@/components/menu/MenuHero";
import { CategoryGrid } from "@/components/menu/CategoryGrid";
import { MenuCard } from "@/components/menu/MenuCard";
import { MenuQrSection } from "@/components/common/MenuQrSection";
import { categories, menuItems } from "@/data/menu-items";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Get selected category info
  const categoryInfo = useMemo(() => {
    if (!selectedCategory) return null;
    return categories.find(c => c.slug === selectedCategory);
  }, [selectedCategory]);

  // Get items for selected category
  const categoryItems = useMemo(() => {
    if (!selectedCategory) return [];
    return menuItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="min-h-screen">
      {!selectedCategory && <MenuHero />}
      <MenuQrSection compact />

      <AnimatePresence mode="wait">
        {!selectedCategory ? (
          // Category Grid View
          <motion.div
            key="categories"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CategoryGrid
              categories={categories}
              items={menuItems}
              onCategorySelect={setSelectedCategory}
            />
          </motion.div>
        ) : (
          // Category Items View
          <motion.div
            key="items"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="pt-[80px]"
          >
            {/* Back button and category header */}
            <div className="sticky top-[80px] z-40 border-b border-white/[0.06] bg-[rgb(var(--bg)/0.9)] backdrop-blur-xl">
              <div className="mx-auto max-w-screen-2xl px-4 py-4 md:px-8">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="flex items-center gap-2 rounded-full bg-[rgb(var(--brandWine))] px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[rgb(var(--brandWine)/0.8)] hover:shadow-lg"
                  >
                    ← Kategoriler
                  </button>
                  <div>
                    <h2 className="text-xl font-bold text-white">
                      {categoryInfo?.label}
                    </h2>
                    <p className="text-sm text-white/50">
                      {categoryItems.length} ürün
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Items Grid */}
            <div className="mx-auto max-w-screen-2xl px-4 py-8 md:px-8 md:py-12">
              <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categoryItems.map((item, index) => (
                  <MenuCard key={item.id} item={item} index={index} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
