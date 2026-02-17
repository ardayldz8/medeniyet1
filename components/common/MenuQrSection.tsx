"use client";

import Link from "next/link";
import { MENU_QR_URL } from "@/data/site-links";

function toQrSrc(url: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(url)}`;
}

interface MenuQrSectionProps {
  compact?: boolean;
}

export function MenuQrSection({ compact = false }: MenuQrSectionProps) {
  return (
    <section className={compact ? "py-8" : "py-14 md:py-16"}>
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-6 rounded-3xl border border-white/[0.08] bg-[rgb(var(--panel)/0.65)] p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--brandWine))]">
              QR Menü
            </p>
            <h2 className="mt-2 font-[var(--font-heading)] text-2xl font-semibold text-white md:text-3xl">
              Menüye QR ile hızlı erişim
            </h2>
            <p className="mt-3 max-w-2xl text-white/65">
              Fiyat ve ürün güncellemeleri için QR kodu okutun. Kod direkt online menü sayfasını açar.
            </p>
            <div className="mt-5">
              <Link
                href="/menu"
                className="inline-flex h-11 items-center justify-center rounded-xl bg-[rgb(var(--brandWine))] px-5 text-sm font-semibold text-white transition-colors hover:bg-[rgb(var(--brandWine)/0.9)]"
              >
                Menüyü Aç
              </Link>
            </div>
          </div>
          <img
            src={toQrSrc(MENU_QR_URL)}
            alt="Online menu icin QR kod"
            width={170}
            height={170}
            loading="lazy"
            className="h-[170px] w-[170px] rounded-2xl border border-white/20 bg-white p-2"
          />
        </div>
      </div>
    </section>
  );
}
