"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

const previewImages = [
    { id: 5, src: "/gallery/gallery-5.jpg", alt: "Medeniyet Kasap & Izgara - Ozel Salon" },
    { id: 4, src: "/gallery/gallery-4.jpg", alt: "Medeniyet Kasap & Izgara - Kasap Reyonu" },
    { id: 6, src: "/gallery/gallery-6.jpg", alt: "Medeniyet Kasap & Izgara - Restoran" },
];

export function GalleryPreview() {
    return (
        <section className="relative py-20 md:py-28">
            {/* Background subtle accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(var(--panel)/0.4)] to-transparent" />

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
                        Galeri
                    </span>
                    <h2 className="mt-5 font-[var(--font-heading)] text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Mekanımızdan Kareler
                    </h2>
                    <p className="mx-auto mt-4 max-w-lg text-white/50">
                        Atmosferimizi ve lezzetlerimizi keşfedin
                    </p>
                </motion.div>

                {/* Image Grid */}
                <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
                    {previewImages.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: index * 0.08 }}
                        >
                            <div className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/[0.06] transition-all duration-300 hover:border-[rgb(var(--brandWine)/0.4)] hover:shadow-xl hover:shadow-[rgb(var(--brandWine)/0.1)]">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                                />
                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-[rgb(var(--brandWine)/0.15)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-10 text-center"
                >
                    <Link
                        href="/galeri"
                        className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-lg font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-[rgb(var(--brandWine)/0.5)] hover:bg-white/10"
                    >
                        Daha Fazla Görsel
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
