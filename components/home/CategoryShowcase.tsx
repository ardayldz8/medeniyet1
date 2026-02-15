"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { categories } from "@/data/menu-items";

// Only categories that have images
const showcaseCategories = categories.filter((c) => c.image);

export function CategoryShowcase() {
    return (
        <section className="relative py-16 md:py-24">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(var(--panel)/0.3)] to-transparent" />

            <div className="relative mx-auto max-w-screen-2xl px-4 md:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-10 flex items-end justify-between"
                >
                    <div>
                        <span className="text-sm font-medium uppercase tracking-wider text-[rgb(var(--brandWine))]">
                            Keşfedin
                        </span>
                        <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-bold text-white md:text-4xl">
                            Kategoriler
                        </h2>
                    </div>
                    <Link
                        href="/menu"
                        className="hidden items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white sm:flex"
                    >
                        Tümünü Gör
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </motion.div>

                {/* Horizontal Scroll Container */}
                <div className="scrollbar-hide -mx-4 flex gap-4 overflow-x-auto px-4 pb-4 md:-mx-8 md:px-8">
                    {showcaseCategories.map((category, index) => (
                        <motion.div
                            key={category.slug}
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.06 }}
                            className="flex-shrink-0"
                        >
                            <Link
                                href="/menu"
                                className="group relative block aspect-[3/4] w-[180px] overflow-hidden rounded-2xl border border-white/[0.06] transition-all duration-300 hover:border-[rgb(var(--brandWine)/0.5)] hover:shadow-xl hover:shadow-[rgb(var(--brandWine)/0.1)] md:w-[210px]"
                            >
                                {/* Background Image */}
                                <Image
                                    src={category.image!}
                                    alt={category.label}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="210px"
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 transition-all duration-300 group-hover:from-black/70" />

                                {/* Hover glow */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--brandWine)/0.2)] to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

                                {/* Label */}
                                <div className="absolute inset-x-0 bottom-0 p-4">
                                    <h3 className="text-base font-semibold text-white drop-shadow-lg">
                                        {category.label}
                                    </h3>
                                    <div className="mt-1 h-0.5 w-8 rounded-full bg-[rgb(var(--brandWine))] transition-all duration-300 group-hover:w-full" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Mobile CTA */}
                <div className="mt-6 text-center sm:hidden">
                    <Link
                        href="/menu"
                        className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
                    >
                        Tüm Kategorileri Gör
                        <svg
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
