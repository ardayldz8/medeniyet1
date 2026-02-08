"use client";

import Image from "next/image";
import { motion } from "motion/react";

const stats = [
  { value: "120+", label: "Çeşit Ürün" },
  { value: "1000+", label: "Mutlu Müşteri" },
  { value: "Günlük", label: "Taze Et" },
  { value: "7/7", label: "Hizmet" },
];

const values = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Kalite",
    description: "En taze ve kaliteli etleri özenle seçiyor, sizlere sunuyoruz.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    title: "Ustalık",
    description: "Geleneksel Türk mutfağının inceliklerini modern tekniklerle birleştiriyoruz.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Sevgi",
    description: "Her porsiyonu özenle, sevgiyle hazırlıyor ve servis ediyoruz.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Güvenilirlik",
    description: "Her gün aynı lezzet, aynı kalite. Size hep en iyisini sunuyoruz.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-[80px] md:pt-[104px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/gallery/gallery-5.jpg"
            alt="Medeniyet Kasap & Izgara"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-[rgb(var(--bg))]" />
        </div>

        <div className="relative mx-auto max-w-screen-2xl px-4 py-24 md:px-8 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-medium uppercase tracking-wider text-[rgb(var(--brandWine))]"
            >
              Hikayemiz
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4 font-[var(--font-heading)] text-3xl font-bold leading-[1.1] text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Medeniyet Kasap & Izgara
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 h-1 w-24 origin-left rounded-full bg-[rgb(var(--brandWine))]"
            />
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl"
            >
              İstanbul&apos;un kalbinde, Eyüpsultan Çırçır&apos;da geleneksel Türk mutfağının
              en lezzetli örneklerini sizlerle buluşturuyoruz.
              Taze et seçimimiz, ustalıkla hazırlanan ızgaralarımız ve sıcak misafirperverliğimizle
              her ziyaretinizi unutulmaz bir lezzet deneyimine dönüştürüyoruz.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-white/[0.06] bg-[rgb(var(--panel))]">
        <div className="mx-auto max-w-screen-xl px-4 py-12 md:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-[rgb(var(--brandWine))] md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm font-medium uppercase tracking-wider text-white/50">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="mx-auto max-w-screen-xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src="/gallery/gallery-3.jpg"
              alt="Mekanımız"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium uppercase tracking-wider text-[rgb(var(--brandWine))]">
              Felsefemiz
            </span>
            <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-bold text-white md:text-4xl">
              Lezzet Tutkusu
            </h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-[rgb(var(--brandWine))]" />
            <div className="mt-6 space-y-4 text-white/60">
              <p>
                Medeniyet Kasap & Izgara olarak, her gün taze ve kaliteli etleri özenle seçiyor,
                geleneksel tarifleri ustalıkla hazırlıyoruz.
              </p>
              <p>
                Dana porsiyonlarımızdan kuzu çeşitlerimize, hamburgerlerimizden kebap
                çeşitlerimize kadar geniş menümüzle her damak zevkine hitap ediyoruz.
              </p>
              <p>
                Müşterilerimize sadece yemek değil, bir lezzet deneyimi sunmayı
                amaçlıyoruz. Sıcak atmosferimiz ve güler yüzlü hizmetimizle
                sizi ağırlamaktan mutluluk duyuyoruz.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section - Enhanced */}
      <section className="relative py-20 md:py-28">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgb(var(--bg))] via-[rgb(var(--panel)/0.8)] to-[rgb(var(--bg))]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

        <div className="relative mx-auto max-w-screen-xl px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="inline-block rounded-full bg-[rgb(var(--brandWine)/0.1)] px-4 py-1.5 text-sm font-medium uppercase tracking-wider text-[rgb(var(--brandWine))]">
              Değerlerimiz
            </span>
            <h2 className="mt-6 font-[var(--font-heading)] text-4xl font-bold text-white md:text-5xl">
              Bizi Farklı Kılan
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/50">
              Her detayda mükemmelliği arıyoruz
            </p>
          </motion.div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-[rgb(var(--panel))] to-[rgb(var(--bg))] p-8 transition-all duration-500 hover:border-[rgb(var(--brandWine)/0.5)] hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(188,21,33,0.3)]"
              >
                {/* Number Badge */}
                <div className="absolute -right-4 -top-4 text-[100px] font-bold leading-none text-white/[0.03] transition-all duration-500 group-hover:text-[rgb(var(--brandWine)/0.1)]">
                  0{index + 1}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[rgb(var(--brandWine)/0.15)] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Icon */}
                <div className="relative mb-6 inline-flex rounded-2xl bg-gradient-to-br from-[rgb(var(--brandWine))] to-[rgb(var(--brand))] p-5 text-white shadow-lg shadow-[rgb(var(--brandWine)/0.3)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-[rgb(var(--brandWine)/0.5)]">
                  {value.icon}
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-white">{value.title}</h3>
                <p className="relative mt-3 text-sm leading-relaxed text-white/50">{value.description}</p>

                {/* Decorative Line */}
                <div className="mt-6 h-0.5 w-12 rounded-full bg-gradient-to-r from-[rgb(var(--brandWine))] to-transparent transition-all duration-500 group-hover:w-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="mx-auto max-w-screen-xl px-4 pb-20 md:px-8 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.5rem]"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/gallery/gallery-4.jpg"
              alt="Medeniyet Kasap & Izgara"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--brandWine)/0.95)] via-[rgb(var(--brandWine)/0.85)] to-[rgb(var(--brand)/0.9)]" />
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 text-center md:px-16 md:py-20">
            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mx-auto mb-8 max-w-2xl"
            >
              <svg className="mx-auto mb-4 h-12 w-12 text-white/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-xl font-medium italic text-white md:text-2xl">
                &ldquo;Lezzet, sevgiyle hazırlanan her lokmada gizlidir.&rdquo;
              </p>
              <p className="mt-4 text-sm text-white/60">— Medeniyet Kasap & Izgara</p>
            </motion.div>

            <h2 className="font-[var(--font-heading)] text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Sizi Ağırlamak İstiyoruz
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-white/80">
              Taze ızgaralarımızın tadına bakmak için bizi ziyaret edin veya
              WhatsApp üzerinden hemen rezervasyon yapın.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/905369243213"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-[rgb(var(--brandWine))] transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <svg className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp ile Ulaşın
              </a>
              <a
                href="/menu"
                className="rounded-full border-2 border-white/40 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white"
              >
                Menüyü İncele
              </a>
            </div>

            {/* Stats mini */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 border-t border-white/20 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">4.8★</div>
                <div className="text-xs text-white/60">Müşteri Puanı</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">11:00-00:00</div>
                <div className="text-xs text-white/60">Her Gün Açık</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">%100</div>
                <div className="text-xs text-white/60">Taze Et</div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -right-20 top-20 h-40 w-40 animate-pulse rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -left-20 bottom-20 h-40 w-40 animate-pulse rounded-full bg-black/20 blur-3xl" style={{ animationDelay: '1s' }} />
        </motion.div>
      </section>
    </main>
  );
}
