"use client";

import RotatingText from "@/components/RotatingText";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export function HeroDesktop() {
    const [videoReady, setVideoReady] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        // Force eager load & play
        video.load();
        video.play().catch(() => { });
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden">
            <Image
                src="/hero-poster.jpg"
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover object-center brightness-[0.72] contrast-[1.08] saturate-[0.9]"
            />
            <video
                ref={videoRef}
                className={`absolute inset-0 h-full w-full object-cover object-center brightness-[0.72] contrast-[1.08] saturate-[0.9] transition-opacity duration-500 ${videoReady ? "opacity-100" : "opacity-0"}`}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onLoadedData={() => setVideoReady(true)}
                onPlaying={() => setVideoReady(true)}
            >
                <source src="/hero-desktop.webm" type="video/webm" />
                <source src="/hero-desktop.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay - left-weighted gradient */}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.12)_56%,rgba(0,0,0,0.56)),linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.88))]" />

            <div className="relative z-10 w-full px-[clamp(2rem,6vw,8rem)]">
                <div className="flex min-h-screen items-start pt-48 pb-24">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-[46rem] ml-14 lg:ml-16"
                    >
                        {/* Subtitle bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex flex-wrap items-center gap-3"
                        >
                            <div className="text-[15px] font-semibold uppercase tracking-[0.34em] text-white/70">
                                Medeniyet Kasap &amp; Izgara
                            </div>
                            <div className="h-px w-14 bg-white/22" />
                            <div className="text-[15px] font-medium uppercase tracking-[0.30em] text-white/50">
                                Eyüpsultan, Çırçır
                            </div>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="mt-7 font-[var(--font-heading)] text-6xl font-semibold leading-[0.98] tracking-[-0.02em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.60)] lg:text-7xl"
                            aria-label="Ustalığın İzi, Izgaranın Klasikleri, Ateşi, Lezzeti, Geleneği."
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
                                    initial={{ opacity: 0, y: "-140%" }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: "140%" }}
                                    rotationInterval={5200}
                                    splitBy="characters"
                                    staggerDuration={0.032}
                                    staggerFrom="first"
                                    mainClassName="inline-flex flex-nowrap whitespace-nowrap align-baseline min-w-[10ch] overflow-hidden pb-[0.22em] -mb-[0.22em]"
                                    elementLevelClassName="italic text-[rgb(var(--brandWine))] [text-shadow:0_12px_28px_rgba(0,0,0,0.55)]"
                                    splitLevelClassName=""
                                />
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="mt-6 max-w-2xl text-xl leading-relaxed text-white/72"
                        >
                            Günlük taze et seçimi, kontrollü pişirim ve sıcak servis. Menüyü inceleyin,
                            masanızı ayırtın.
                        </motion.p>

                        {/* CTA buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="mt-10 flex flex-wrap items-center gap-3"
                        >
                            <a
                                href="https://wa.me/905369243213"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-12 items-center justify-center rounded-xl bg-[rgb(var(--brandWine))] px-9 text-lg font-semibold text-white shadow-[0_10px_34px_rgba(0,0,0,0.62)] ring-1 ring-white/10 hover:bg-[rgb(var(--brandWine)/0.92)]"
                            >
                                WhatsApp ile Rezervasyon
                            </a>
                            <a
                                href="tel:+905369243213"
                                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-black/10 px-9 text-lg font-semibold text-white/85 backdrop-blur hover:bg-white/10"
                            >
                                Telefon ile Rezervasyon
                            </a>
                            <Link
                                href="/menu"
                                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-black/10 px-9 text-lg font-semibold text-white/85 backdrop-blur hover:bg-white/10"
                            >
                                Menüyü Gör
                            </Link>
                            <a
                                href="https://maps.google.com/?q=Medeniyet+Kasap+Izgara+Eyupsultan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-black/10 px-9 text-lg font-semibold text-white/85 backdrop-blur hover:bg-white/10"
                            >
                                Google Maps
                            </a>
                        </motion.div>

                        {/* Tags */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-base font-medium uppercase tracking-[0.20em] text-white/55"
                        >
                            <span>Kasap</span>
                            <span>Izgara</span>
                            <span>Gel-al</span>
                            <span>Teslimat</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
