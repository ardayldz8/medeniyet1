"use client";

import RotatingText from "@/components/RotatingText";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover object-[70%_center] md:object-center brightness-[0.72] contrast-[1.08] saturate-[0.9]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Wolfgang-like: left-weighted dark overlay + gentle vignette */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.82),rgba(0,0,0,0.12)_56%,rgba(0,0,0,0.56)),linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.88))]" />

      {/* Use a responsive gutter so the hero copy can sit closer to the left edge on wide screens. */}
      <div className="relative z-10 w-full px-[clamp(1rem,6vw,8rem)]">
        <div className="flex min-h-screen items-center md:items-start pt-24 pb-16 md:pt-48 md:pb-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-[46rem] px-2 md:px-0 md:ml-14 lg:ml-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 sm:gap-3"
            >
              <div className="text-[14px] font-semibold uppercase tracking-[0.34em] text-white/70 md:text-[15px]">
                Medeniyet Kasap &amp; Izgara
              </div>
              <div className="h-px w-14 bg-white/22" />
              <div className="text-[14px] font-medium uppercase tracking-[0.30em] text-white/50 md:text-[15px]">
                Eyüpsultan, Çırçır
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-7 font-[var(--font-heading)] text-[2.5rem] font-semibold leading-[0.98] tracking-[-0.02em] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.60)] sm:text-6xl md:text-8xl lg:text-9xl"
              aria-label="Ustalığın İzi, Izgaranın Klasikleri, Ateşi, Lezzeti, Geleneği."
            >
              Ustalığın İzi
              <br />
              <span className="inline-flex flex-wrap items-baseline">
                <span>Izgaranın&nbsp;</span>
                <RotatingText
                  texts={["Klasikleri", "Ateşi", "Lezzeti", "Geleneği"]}
                  // ReactBits-like smoothness: per-character stagger + heavily damped spring (no bounce).
                  transition={{
                    type: "spring",
                    stiffness: 320,
                    damping: 42,
                    mass: 0.85,
                    bounce: 0
                  }}
                  // "Falling" feel: start slightly above and settle onto the baseline.
                  initial={{ opacity: 0, y: "-140%" }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: "140%" }}
                  // Hold longer on the settled word for a calmer premium rhythm.
                  rotationInterval={5200}
                  splitBy="characters"
                  // More pronounced sequential "drop", still not typewriter-like.
                  staggerDuration={0.032}
                  staggerFrom="first"
                  // Mask at the word level to avoid clipping descenders like "ş/ğ/g".
                  mainClassName="inline-flex flex-nowrap whitespace-nowrap align-baseline min-w-[8ch] sm:min-w-[10ch] overflow-hidden pb-[0.22em] -mb-[0.22em]"
                  elementLevelClassName="italic text-[rgb(var(--brandWine))] [text-shadow:0_12px_28px_rgba(0,0,0,0.55)]"
                  splitLevelClassName=""
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg md:text-xl"
            >
              Günlük taze et seçimi, kontrollü pişirim ve sıcak servis. Menüyü inceleyin,
              masanızı ayırtın.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <a
                href="/rezervasyon"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[rgb(var(--brandWine))] px-9 text-lg font-semibold text-white shadow-[0_10px_34px_rgba(0,0,0,0.62)] ring-1 ring-white/10 hover:bg-[rgb(var(--brandWine)/0.92)]"
              >
                Rezervasyon
              </a>
              <a
                href="/menu"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/15 bg-black/10 px-9 text-lg font-semibold text-white/85 backdrop-blur hover:bg-white/10"
              >
                Menüyü Gör
              </a>
            </motion.div>

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
