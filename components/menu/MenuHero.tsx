"use client";

import Image from "next/image";
import { motion } from "motion/react";

const stats = [
    { value: "120+", label: "Çeşit Ürün" },
    { value: "15", label: "Kategori" },
    { value: "Günlük", label: "Taze Et" },
];

export function MenuHero() {
    return (
        <section className="relative overflow-hidden pt-[80px] md:pt-[104px]">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/menu/categories/dana-porsiyonlar.jpg"
                    alt="Menü"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[rgb(var(--bg))]" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative mx-auto max-w-screen-2xl px-4 py-20 md:px-8 md:py-28">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    {/* Main title */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="font-[var(--font-heading)] text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
                    >
                        Menümüz
                    </motion.h1>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="mt-5 h-1 w-20 origin-left rounded-full bg-[rgb(var(--brandWine))]"
                    />

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-5 max-w-lg text-base leading-relaxed text-white/70 md:text-lg"
                    >
                        Günlük taze et seçimi, ustalıkla hazırlanmış ızgaralar ve geleneksel lezzetler.
                        <span className="text-white/90"> Her porsiyon özenle hazırlanır.</span>
                    </motion.p>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="mt-8 flex gap-8 md:gap-10"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                            >
                                <div className="text-2xl font-bold text-white md:text-3xl">
                                    {stat.value}
                                </div>
                                <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/50">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
