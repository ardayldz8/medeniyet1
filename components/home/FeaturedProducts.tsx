"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { menuItems } from "@/data/menu-items";

// Pick 6 popular items that have images
const featured = menuItems
    .filter((i) => i.isPopular && i.image)
    .slice(0, 6);

export function FeaturedProducts() {
    return (
        <section className="relative py-20 md:py-28">
            {/* Subtle top gradient transition from hero */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />

            <div className="relative mx-auto max-w-screen-xl px-4 md:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <span className="inline-block rounded-full bg-[rgb(var(--brandWine)/0.1)] px-4 py-1.5 text-sm font-medium uppercase tracking-wider text-[rgb(var(--brandWine))]">
                        Favori Seçimler
                    </span>
                    <h2 className="mt-5 font-[var(--font-heading)] text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Öne Çıkan Lezzetler
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-white/50">
                        Misafirlerimizin en çok tercih ettiği, ustalıkla hazırlanan seçkin
                        lezzetlerimiz
                    </p>
                </motion.div>

                {/* Product Grid */}
                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {featured.map((item, index) => (
                        <motion.article
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[rgb(var(--panel))] to-[rgb(var(--panel)/0.5)] transition-all duration-500 hover:-translate-y-2 hover:border-[rgb(var(--brandWine)/0.4)] hover:shadow-[0_25px_60px_-15px_rgba(188,21,33,0.25)]"
                        >
                            {/* Hover inner glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[rgb(var(--brandWine)/0.08)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            {/* Image */}
                            <div className="relative aspect-[4/3] w-full overflow-hidden">
                                <Image
                                    src={item.image!}
                                    alt={item.name}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--panel))] via-transparent to-transparent opacity-80" />
                                <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(0,0,0,0.4)]" />

                                {/* Popular badge */}
                                <div className="absolute left-4 top-4 rounded-full bg-[rgb(var(--brandWine))] px-3 py-1 text-xs font-semibold text-white shadow-lg">
                                    ★ Popüler
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative flex flex-1 flex-col p-5">
                                <h3 className="text-lg font-semibold text-white transition-colors duration-300 group-hover:text-[rgb(var(--brandWine))]">
                                    {item.name}
                                </h3>
                                {item.description && (
                                    <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50 line-clamp-2">
                                        {item.description}
                                    </p>
                                )}
                                <div className="mt-4 border-t border-white/[0.06] pt-4">
                                    {item.weight && (
                                        <span className="text-xs font-medium uppercase tracking-wider text-white/40">
                                            {item.weight}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Hover corner accent */}
                            <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-[rgb(var(--brandWine)/0.2)] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                        </motion.article>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 text-center"
                >
                    <Link
                        href="/menu"
                        className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[rgb(var(--brandWine)/0.5)] hover:bg-white/10 hover:shadow-lg"
                    >
                        Tüm Menüyü Gör
                        <svg
                            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
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
            </div>
        </section>
    );
}
