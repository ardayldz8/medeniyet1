import Image from "next/image";
import { SOCIAL_LINKS } from "@/data/site-links";

function toQrSrc(url: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(url)}`;
}

const socialQrItems = [
  {
    key: "instagram",
    title: "Instagram",
    description: "Güncel paylaşımlar ve hikayeler için Instagram hesabımızı takip edin.",
    href: SOCIAL_LINKS.instagram,
  },
  {
    key: "tiktok",
    title: "TikTok",
    description: "Mutfaktan kısa videolar ve içerikler için TikTok hesabımıza göz atın.",
    href: SOCIAL_LINKS.tiktok,
  },
];

export function SocialQrSection() {
  return (
    <section className="py-14 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="rounded-3xl border border-white/[0.08] bg-[rgb(var(--panel)/0.65)] p-6 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--brandWine))]">
            Sosyal Medya QR
          </p>
          <h2 className="mt-2 font-[var(--font-heading)] text-2xl font-semibold text-white md:text-3xl">
            Instagram ve TikTok&apos;a tek taramada erişin
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {socialQrItems.map((item) => (
              <article
                key={item.key}
                className="grid gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold text-white underline-offset-4 transition-colors hover:text-[rgb(var(--brandWine))] hover:underline"
                  >
                    {item.title}
                  </a>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex h-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {item.title} Aç
                  </a>
                </div>

                <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.title} profilini aç`}>
                  <Image
                    src={toQrSrc(item.href)}
                    alt={`${item.title} QR kod`}
                    width={140}
                    height={140}
                    className="h-[140px] w-[140px] rounded-xl border border-white/20 bg-white p-2 transition-transform duration-200 hover:scale-[1.03]"
                  />
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
