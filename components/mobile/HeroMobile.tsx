"use client";

import RotatingText from "@/components/RotatingText";
import { motion } from "motion/react";

export function HeroMobile() {
    return (
        <section className="relative h-[100svh] overflow-hidden">
            <video
                className="absolute inset-0 h-full w-full object-cover object-[65%_center] brightness-[0.65] contrast-[1.08] saturate-[0.9]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/hero-poster.jpg"
            >
                <source src="/hero.mp4" type="video/mp4" />
            </video>

            {/* Simple vertical gradient for mobile */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

            {/* Content positioned at bottom with safe area */}
            <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Main heading - compact for mobile */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-[var(--font-heading)] text-[2rem] font-semibold leading-[1.1] tracking-[-0.01em] text-white"
                    >
                        Ustalığın İzi
                        <br />
                        <span className="inline-flex items-baseline">
                            <span>Izgaranın&nbsp;</span>
                            <RotatingText
                                texts={["Klasikleri", "Ateşi", "Lezzeti", "Geleneği"]}
                                transition={{
                                    type: "spring",
                                    stiffness: 320,
                                    damping: 42,
                                    mass: 0.85,
                                    bounce: 0
                                }}
                                initial={{ opacity: 0, y: "-100%" }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: "100%" }}
                                rotationInterval={5200}
                                splitBy="characters"
                                staggerDuration={0.025}
                                staggerFrom="first"
                                mainClassName="inline-flex flex-nowrap whitespace-nowrap align-baseline min-w-[7ch] overflow-hidden pb-[0.15em] -mb-[0.15em]"
                                elementLevelClassName="italic text-[rgb(var(--brandWine))]"
                                splitLevelClassName=""
                            />
                        </span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="mt-3 max-w-[280px] text-sm leading-relaxed text-white/70"
                    >
                        Günlük taze et seçimi, kontrollü pişirim ve sıcak servis.
                    </motion.p>

                    {/* CTA buttons - inline for mobile */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mt-5 flex gap-3"
                    >
                        <a
                            href="/rezervasyon"
                            className="inline-flex h-10 items-center justify-center rounded-lg bg-[rgb(var(--brandWine))] px-5 text-sm font-semibold text-white"
                        >
                            Rezervasyon
                        </a>
                        <a
                            href="/menu"
                            className="inline-flex h-10 items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 text-sm font-medium text-white/90"
                        >
                            Menüyü Gör
                        </a>
                    </motion.div>

                    {/* Tags */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.65 }}
                        className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs font-medium uppercase tracking-[0.15em] text-white/50"
                    >
                        <span>Kasap</span>
                        <span>Izgara</span>
                        <span>Gel-al</span>
                        <span>Teslimat</span>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
