"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function StoryPreview() {
    return (
        <section className="relative py-20 md:py-28">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="rounded-3xl border border-white/[0.08] bg-[rgb(var(--panel)/0.65)] p-6 md:p-10"
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
                                Medeniyet Kasap & Izgara olarak, her gün taze ve kaliteli etleri özenle
                                seçiyor, geleneksel tarifleri ustalıkla hazırlıyoruz.
                            </p>
                            <p>
                                Dana porsiyonlarımızdan kuzu çeşitlerimize, hamburgerlerimizden kebap
                                seçeneklerimize kadar geniş menümüzle her damak zevkine hitap ediyoruz.
                            </p>
                            <p>
                                Şimdi ise yeni konseptimizle birlikte lezzet anlayışımızı bir adım daha
                                ileri taşıyoruz. Premium kahvaltı sunumlarımız ve özenle hazırlanan
                                mezelerimizle sadece bir restoran değil, ayrıcalıklı bir gastronomi deneyimi
                                sunmayı hedefliyoruz.
                            </p>
                            <p>
                                Müşterilerimize sadece yemek değil; kalite, özen ve unutulmaz bir deneyim
                                sunuyor, sıcak atmosferimizle sizleri ağırlamaktan mutluluk duyuyoruz.
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
        </section>
    );
}
