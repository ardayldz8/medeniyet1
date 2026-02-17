"use client";

import { motion } from "motion/react";
import { ONLINE_ORDER_LINKS } from "@/data/site-links";

export function OnlineOrderLinks() {
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-16 md:px-8 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-white/[0.08] bg-[rgb(var(--panel)/0.65)] p-6 md:p-8"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--brandWine))]">
          Gel-al / Online Sipariş
        </p>
        <h2 className="mt-3 font-[var(--font-heading)] text-3xl font-semibold text-white md:text-4xl">
          Sipariş Platformları
        </h2>
        <p className="mt-3 max-w-2xl text-white/65">
          Aşağıdaki linkleri aktif ettiğimizde Trendyol, Getir, Migros Yemek ve
          Yemeksepeti üzerinden sipariş verebilirsiniz.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {ONLINE_ORDER_LINKS.map((platform, index) => (
            <motion.a
              key={platform.key}
              href={platform.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 text-center text-sm font-semibold text-white transition-colors hover:border-[rgb(var(--brandWine)/0.5)] hover:bg-white/10"
            >
              {platform.label}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
