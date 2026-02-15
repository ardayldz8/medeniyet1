"use client";

import Image from "next/image";
import { motion } from "motion/react";

export function ContactCTA() {
    return (
        <section className="mx-auto max-w-screen-xl px-4 pb-20 md:px-8 md:pb-28">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-[2rem] md:rounded-[2.5rem]"
            >
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/gallery/gallery-4.jpg"
                        alt="Medeniyet Kasap & Izgara"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brandWine)/0.95)] via-[rgb(var(--brandWine)/0.85)] to-[rgb(var(--brand)/0.9)]" />
                </div>

                {/* Content */}
                <div className="relative px-6 py-14 text-center md:px-16 md:py-20">
                    {/* Quote */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto mb-8 max-w-2xl"
                    >
                        <svg
                            className="mx-auto mb-4 h-10 w-10 text-white/30"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-xl font-medium italic text-white md:text-2xl">
                            &ldquo;Lezzet, sevgiyle hazırlanan her lokmada gizlidir.&rdquo;
                        </p>
                    </motion.div>

                    <h2 className="font-[var(--font-heading)] text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Sizi Ağırlamak İstiyoruz
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
                        Taze ızgaralarımızın tadına bakmak için bizi ziyaret edin veya
                        WhatsApp üzerinden hemen iletişime geçin.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <a
                            href="https://wa.me/905369243213"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-[rgb(var(--brandWine))] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <svg
                                className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp ile Ulaşın
                        </a>
                        <a
                            href="tel:+905369243213"
                            className="flex items-center gap-3 rounded-full border-2 border-white/40 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
                        >
                            <svg
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                            0536 924 32 13
                        </a>
                    </div>

                    {/* Info row */}
                    <div className="mt-12 flex flex-wrap justify-center gap-8 border-t border-white/20 pt-8">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">08:00 - 00:00</div>
                            <div className="text-xs text-white/60">Her Gün Açık</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">Eyüpsultan</div>
                            <div className="text-xs text-white/60">Çırçır, İstanbul</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">%100</div>
                            <div className="text-xs text-white/60">Taze Et</div>
                        </div>
                    </div>
                </div>

                {/* Floating decorative elements */}
                <div className="absolute -right-20 top-20 h-40 w-40 animate-pulse rounded-full bg-white/10 blur-3xl" />
                <div
                    className="absolute -left-20 bottom-20 h-40 w-40 animate-pulse rounded-full bg-black/20 blur-3xl"
                    style={{ animationDelay: "1s" }}
                />
            </motion.div>
        </section>
    );
}
