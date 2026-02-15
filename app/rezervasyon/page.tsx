"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function ReservationPage() {
  return (
    <main className="relative">
      {/* ─── HERO ─── */}
      <section className="relative flex min-h-[65vh] items-end overflow-hidden pb-24 pt-32 md:min-h-[60vh] md:pb-32 md:pt-40">
        <div className="absolute inset-0">
          <Image
            src="/gallery/gallery-3.jpg"
            alt="Medeniyet Kasap & Izgara"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--bg))] via-[rgb(var(--bg)/0.85)] to-[rgb(var(--bg)/0.4)]" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-screen-xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px w-8 bg-[rgb(var(--brandWine))]" />
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[rgb(var(--brandWine))]">
                Rezervasyon
              </span>
            </div>
            <h1 className="max-w-lg font-[var(--font-heading)] text-5xl font-bold leading-[1.08] text-white md:text-7xl">
              Masanızı
              <br />
              <span className="text-[rgb(var(--brandWine))]">Ayıralım</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ─── MAIN 2-COL LAYOUT ─── */}
      <section className="relative mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — CTA + Steps (7 cols) */}
          <div className="lg:col-span-7 -mt-12 relative z-20">
            {/* Intro text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 max-w-md text-base leading-relaxed text-white/50"
            >
              WhatsApp veya telefon ile kolayca rezervasyon yapabilirsiniz.
              Size en uygun masayı hazırlayalım.
            </motion.p>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/905369243213?text=Merhaba%2C%20rezervasyon%20yapmak%20istiyorum."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[rgb(var(--panel))] to-[rgb(var(--panel)/0.4)] p-6 transition-all duration-500 hover:border-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/5 md:p-7"
            >
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-emerald-500/[0.04] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20 transition-all duration-500 group-hover:bg-emerald-500/15 group-hover:shadow-lg group-hover:shadow-emerald-500/10">
                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </div>

              <div className="relative flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white">WhatsApp ile Rezervasyon</h3>
                <p className="mt-0.5 text-sm text-white/40">Mesaj gönderin, anında dönüş yapalım</p>
              </div>

              <div className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.06] text-white/25 transition-all duration-500 group-hover:border-emerald-500/30 group-hover:text-emerald-400">
                <svg className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.a>

            {/* Phone CTA */}
            <motion.a
              href="tel:+905369243213"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="group relative mt-4 flex items-center gap-5 overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[rgb(var(--panel))] to-[rgb(var(--panel)/0.4)] p-6 transition-all duration-500 hover:border-[rgb(var(--brandWine)/0.2)] hover:shadow-2xl hover:shadow-[rgb(var(--brandWine)/0.04)] md:p-7"
            >
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[rgb(var(--brandWine)/0.06)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--brandWine)/0.08)] text-[rgb(var(--brandWine))] ring-1 ring-[rgb(var(--brandWine)/0.15)] transition-all duration-500 group-hover:bg-[rgb(var(--brandWine)/0.12)] group-hover:shadow-lg group-hover:shadow-[rgb(var(--brandWine)/0.08)]">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>

              <div className="relative flex-1 min-w-0">
                <h3 className="text-lg font-bold text-white">Telefonla Ara</h3>
                <p className="mt-0.5 text-sm text-white/40">
                  Hemen arayın: <span className="font-medium text-white/65">0536 924 32 13</span>
                </p>
              </div>

              <div className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-white/[0.06] text-white/25 transition-all duration-500 group-hover:border-[rgb(var(--brandWine)/0.3)] group-hover:text-[rgb(var(--brandWine))]">
                <svg className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.a>

            {/* Steps — horizontal compact */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-12 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[rgb(var(--panel))] to-[rgb(var(--panel)/0.3)] p-7 md:p-8"
            >
              <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                Nasıl Çalışır
              </h3>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                {[
                  {
                    num: "01",
                    title: "Tarih & Saat",
                    desc: "Gelmek istediğiniz zamanı belirleyin",
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                      </svg>
                    ),
                  },
                  {
                    num: "02",
                    title: "Kişi Sayısı",
                    desc: "Kaç kişilik masa gerektiğini belirtin",
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    ),
                  },
                  {
                    num: "03",
                    title: "Bize Ulaşın",
                    desc: "WhatsApp ya da telefonla arayın",
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                      </svg>
                    ),
                  },
                  {
                    num: "04",
                    title: "Onay",
                    desc: "Masanız hazır, sizi bekliyoruz!",
                    icon: (
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                ].map((step) => (
                  <div key={step.num} className="flex flex-col">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgb(var(--brandWine)/0.08)] text-[rgb(var(--brandWine))]">
                        {step.icon}
                      </div>
                      <span className="text-[11px] font-bold text-white/20">{step.num}</span>
                    </div>
                    <h4 className="mt-3 text-sm font-semibold text-white">{step.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-white/35">{step.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-[11px] text-white/25"
            >
              * Rezervasyonlar en az 1 saat önceden yapılmalıdır.
            </motion.p>
          </div>

          {/* RIGHT — Sidebar (5 cols) */}
          <motion.aside
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Info card */}
            <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[rgb(var(--panel))] to-[rgb(var(--panel)/0.3)] p-7">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
                Bilgiler
              </h3>

              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--brandWine)/0.08)] text-[rgb(var(--brandWine))]">
                    <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Çalışma Saatleri</p>
                    <p className="mt-0.5 text-[13px] text-white/40">Her gün 08:00 – 00:00</p>
                  </div>
                </div>

                <div className="h-px bg-white/[0.04]" />

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--brandWine)/0.08)] text-[rgb(var(--brandWine))]">
                    <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Adres</p>
                    <p className="mt-0.5 text-[13px] text-white/40">
                      Güngören Cad. No:3, Çırçır Mah.
                      <br />
                      Eyüpsultan, İstanbul
                    </p>
                  </div>
                </div>

                <div className="h-px bg-white/[0.04]" />

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[rgb(var(--brandWine)/0.08)] text-[rgb(var(--brandWine))]">
                    <svg className="h-[18px] w-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Kapasite</p>
                    <p className="mt-0.5 text-[13px] text-white/40">50+ kişilik mekan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Restaurant image */}
            <div className="relative h-56 overflow-hidden rounded-2xl border border-white/[0.06]">
              <Image
                src="/gallery/gallery-1.jpg"
                alt="Medeniyet Kasap & Izgara mekan"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5">
                <a
                  href="https://maps.google.com/?q=Medeniyet+Kasap+Izgara+Eyüpsultan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  Google Maps&apos;te Aç
                </a>
              </div>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* ─── BOTTOM QUOTE CTA ─── */}
      <section className="relative mt-20 overflow-hidden border-t border-white/[0.04] md:mt-28">
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--panel)/0.3)] to-transparent" />

        <div className="relative mx-auto max-w-screen-md px-4 py-20 text-center md:px-8 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-8 h-px w-12 bg-gradient-to-r from-transparent via-[rgb(var(--brandWine)/0.6)] to-transparent" />

            <blockquote className="font-[var(--font-heading)] text-2xl font-medium italic leading-relaxed text-white/60 md:text-3xl">
              &ldquo;İyi et, iyi ateş, iyi sofra
              <br className="hidden sm:inline" />
              — gerisini bize bırakın.&rdquo;
            </blockquote>

            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <a
                href="https://wa.me/905369243213?text=Merhaba%2C%20rezervasyon%20yapmak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:bg-emerald-500 hover:shadow-xl hover:shadow-emerald-500/25"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp&apos;tan Yaz
              </a>
              <a
                href="tel:+905369243213"
                className="inline-flex items-center gap-2.5 rounded-full border border-white/10 px-7 py-3.5 text-sm font-semibold text-white/70 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03] hover:text-white"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                0536 924 32 13
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
