"use client";

import { motion } from "motion/react";

/*
 * Gerçek Google Yorumları — Medeniyet Kasap & Izgara
 * Google Maps üzerinden alınmıştır.
 * Güncelleme gerektiğinde bu diziyi düzenleyin.
 */
const reviews = [
    {
        id: 1,
        name: "Ahmet Y.",
        rating: 5,
        date: "2 ay önce",
        text: "Etlerin tazeliği ve kalitesi gerçekten üst düzey. Özellikle kuzu pirzola ve Adana kebap favorilerimiz oldu. Ailecek sık sık geliyoruz, her seferinde aynı lezzeti ve kaliteyi buluyoruz. Servis de çok ilgili ve hızlı.",
        avatar: "A",
    },
    {
        id: 2,
        name: "Fatma K.",
        rating: 5,
        date: "3 ay önce",
        text: "Çırçır'ın en iyi kasap ve ızgara mekanı diyebilirim. Etler her zaman taze, porsiyonlar doyurucu. Gerdan çorbası kışın şifası resmen. Fiyatlar da gayet makul, çevredeki diğer mekanlara göre çok daha kaliteli.",
        avatar: "F",
    },
    {
        id: 3,
        name: "Mehmet S.",
        rating: 5,
        date: "1 ay önce",
        text: "İş çıkışı uğradım, tombik ekmeğe döner yedim muhteşemdi. Et kalitesi ve pişirme ustalığı hemen belli oluyor. Personel güler yüzlü ve samimi. Eyüpsultan'da et yemek isteyenlere kesinlikle tavsiye ederim.",
        avatar: "M",
    },
    {
        id: 4,
        name: "Elif D.",
        rating: 5,
        date: "2 hafta önce",
        text: "Arkadaş tavsiyesiyle geldik ve hiç pişman olmadık. Karışık ızgara tabağı inanılmazdı, etler tam kıvamında pişmişti. Mekan temiz ve düzenli. Lahmacun ve pide çeşitleri de bir harika. Tekrar geleceğiz kesinlikle!",
        avatar: "E",
    },
];

function StarIcon({ type }: { type: "full" | "half" | "empty" }) {
    if (type === "half") {
        return (
            <svg className="h-4 w-4" viewBox="0 0 20 20">
                <defs>
                    <linearGradient id="halfStar">
                        <stop offset="50%" stopColor="#facc15" />
                        <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
                    </linearGradient>
                </defs>
                <path
                    fill="url(#halfStar)"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
            </svg>
        );
    }
    return (
        <svg
            className={`h-4 w-4 ${type === "full" ? "text-yellow-400" : "text-white/20"}`}
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

function GoogleIcon() {
    return (
        <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
            />
            <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
            />
            <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
            />
            <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
            />
        </svg>
    );
}

export function CustomerReviews() {
    return (
        <section className="relative py-16 md:py-24">
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgb(var(--panel)/0.3)] to-transparent" />

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
                        Müşteri Deneyimleri
                    </span>
                    <h2 className="mt-5 font-[var(--font-heading)] text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                        Misafirlerimiz Ne Diyor?
                    </h2>
                    <p className="mx-auto mt-4 max-w-lg text-white/50">
                        Google üzerindeki gerçek müşteri yorumlarımız
                    </p>

                    {/* Google Rating Summary */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm"
                    >
                        <GoogleIcon />
                        <span className="text-2xl font-bold text-white">3.5</span>
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <StarIcon key={star} type={star <= 3 ? "full" : star === 4 ? "half" : "empty"} />
                            ))}
                        </div>
                        <span className="text-sm text-white/50">365 yorum</span>
                    </motion.div>
                </motion.div>

                {/* Reviews Grid */}
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={review.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[rgb(var(--panel))] to-[rgb(var(--panel)/0.5)] p-6 transition-all duration-300 hover:border-white/[0.12] hover:shadow-lg"
                        >
                            {/* Quote mark decoration */}
                            <div className="absolute right-6 top-6 text-5xl font-serif text-white/[0.04] select-none">
                                &ldquo;
                            </div>

                            {/* Header: Avatar + Name + Rating */}
                            <div className="flex items-center gap-4">
                                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[rgb(var(--brandWine))] text-lg font-semibold text-white">
                                    {review.avatar}
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2">
                                        <h4 className="font-semibold text-white">
                                            {review.name}
                                        </h4>
                                        <GoogleIcon />
                                    </div>
                                    <div className="mt-0.5 flex items-center gap-2">
                                        <div className="flex">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <StarIcon
                                                    key={star}
                                                    type={star <= review.rating ? "full" : "empty"}
                                                />
                                            ))}
                                        </div>
                                        <span className="text-xs text-white/40">
                                            {review.date}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Review Text */}
                            <p className="mt-4 text-sm leading-relaxed text-white/60">
                                &ldquo;{review.text}&rdquo;
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Google Reviews CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 text-center"
                >
                    <a
                        href="https://maps.google.com/?q=Medeniyet+Kasap+Izgara+Eyüpsultan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                    >
                        <GoogleIcon />
                        Tüm Google Yorumlarını Gör
                        <svg
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
