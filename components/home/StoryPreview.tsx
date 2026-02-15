"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export function StoryPreview() {
    return (
        <section className="relative py-20 md:py-28">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                            <Image
                                src="/gallery/gallery-5.jpg"
                                alt="Medeniyet Kasap & Izgara mekanı"
                                fill
                                className="object-cover"
                                sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                        </div>

                        {/* Floating stat card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="absolute -bottom-6 -right-4 rounded-2xl border border-white/10 bg-[rgb(var(--panel)/0.9)] p-5 shadow-2xl backdrop-blur-xl md:-right-8"
                        >
                            <div className="text-3xl font-bold text-[rgb(var(--brandWine))]">
                                120+
                            </div>
                            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-white/50">
                                Çeşit Lezzet
                            </div>
                        </motion.div>

                        {/* Decorative glow */}
                        <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-[rgb(var(--brandWine)/0.12)] blur-3xl" />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <span className="text-sm font-medium uppercase tracking-wider text-[rgb(var(--brandWine))]">
                            Hikayemiz
                        </span>
                        <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                            Lezzet Tutkusu
                        </h2>
                        <div className="mt-5 h-1 w-16 rounded-full bg-[rgb(var(--brandWine))]" />

                        <div className="mt-6 space-y-4 text-white/60 leading-relaxed">
                            <p>
                                Medeniyet Kasap & Izgara olarak, her gün taze ve kaliteli etleri
                                özenle seçiyor, geleneksel tarifleri ustalıkla hazırlıyoruz.
                            </p>
                            <p>
                                İstanbul&apos;un kalbinde Eyüpsultan Çırçır&apos;da, geleneksel
                                Türk mutfağının en lezzetli örneklerini sizlerle buluşturuyoruz.
                                Her porsiyonu sevgiyle hazırlıyor, her misafirimizi ailemizin
                                bir parçası olarak görüyoruz.
                            </p>
                        </div>

                        {/* Value pills */}
                        <div className="mt-8 flex flex-wrap gap-3">
                            {["Günlük Taze Et", "Ustalıkla Pişirim", "Sıcak Servis"].map(
                                (tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/70"
                                    >
                                        {tag}
                                    </span>
                                )
                            )}
                        </div>

                        {/* CTA */}
                        <Link
                            href="/hakkimizda"
                            className="group mt-8 inline-flex items-center gap-2 text-[rgb(var(--brandWine))] font-medium transition-all duration-300 hover:gap-3"
                        >
                            Hikayemizi Okuyun
                            <svg
                                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
            </div>
        </section>
    );
}
