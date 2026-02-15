import Link from "next/link";
import { Brand } from "@/components/Brand";

const quickLinks = [
    { label: "Ana Sayfa", href: "/" },
    { label: "Menü", href: "/menu" },
    { label: "Galeri", href: "/galeri" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "İletişim", href: "/iletisim" },
    { label: "Rezervasyon", href: "/rezervasyon" },
];

export function Footer() {
    return (
        <footer className="relative border-t border-white/[0.06] bg-[rgb(var(--panel)/0.5)]">
            <div className="mx-auto max-w-screen-xl px-4 py-12 md:px-8 md:py-16">
                <div className="grid gap-10 md:grid-cols-3">
                    {/* Column 1: Brand + Slogan */}
                    <div>
                        <Link href="/" aria-label="Ana sayfa">
                            <Brand className="h-20" />
                        </Link>
                        <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
                            Günlük taze et seçimi, ustalıkla hazırlanan ızgaralar ve
                            geleneksel lezzetler. Eyüpsultan Çırçır&apos;da sizleri
                            ağırlıyoruz.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
                            Hızlı Linkler
                        </h3>
                        <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer menü">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-white/50 transition-colors duration-200 hover:text-[rgb(var(--brandWine))]"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-white/70">
                            İletişim
                        </h3>
                        <div className="mt-4 space-y-3 text-sm text-white/50">
                            <div className="flex items-start gap-3">
                                <svg
                                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-[rgb(var(--brandWine))]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <span>
                                    Güngören Cad. No:3, Çırçır Mah.,
                                    <br />
                                    Eyüpsultan, İstanbul
                                </span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg
                                    className="h-4 w-4 flex-shrink-0 text-[rgb(var(--brandWine))]"
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
                                <a
                                    href="tel:+905369243213"
                                    className="transition-colors hover:text-white"
                                >
                                    0536 924 32 13
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg
                                    className="h-4 w-4 flex-shrink-0 text-[rgb(var(--brandWine))]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>Her gün 08:00 - 00:00</span>
                            </div>
                        </div>

                        {/* WhatsApp Link */}
                        <a
                            href="https://wa.me/905369243213"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[rgb(var(--brandWine))] px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[rgb(var(--brandWine)/0.85)] hover:shadow-lg"
                        >
                            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp
                        </a>
                    </div>
                </div>

                {/* Divider + Copyright */}
                <div className="mt-12 border-t border-white/[0.06] pt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
                    <p className="text-xs text-white/30">
                        © {new Date().getFullYear()} Medeniyet Kasap &amp; Izgara. Tüm hakları
                        saklıdır.
                    </p>
                    <Link
                        href="/gizlilik"
                        className="text-xs text-white/30 transition-colors hover:text-white/50"
                    >
                        Gizlilik Politikası
                    </Link>
                </div>
            </div>
        </footer>
    );
}
