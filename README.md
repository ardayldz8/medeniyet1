# Medeniyet Kasap & Izgara (Web)

Bu repo, **Medeniyet Kasap & Izgara** için koyu/sinematik, premium (steakhouse) hissiyatında bir web arayüzü çalışmasıdır.

Son güncelleme: **2026-02-06**

## Hedef Stil
- Koyu, sinematik, premium steakhouse tonu (Wolfgang benzeri; abartisiz, “luxury”).
- Türkçe içerik.
- Hero’da video arkaplan + okunabilir, editorial tipografi + premium text motion.

## Teknoloji
- **Next.js 15 (App Router)** + **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Motion** (`motion/react`) RotatingText animasyonu icin
- **next/font**:
  - Heading: `EB_Garamond` (serif/editorial)
  - Body: `Inter`

## Kurulum / Çalıştırma
```bash
npm install
npm run dev
```
- Tarayıcı: `http://localhost:3000`

## Scriptler
- `npm run dev`: geliştirme (Turbo)
- `npm run build`: production build
- `npm run start`: production server
- `npm run lint`: eslint

## Proje Yapısı (Önemli Dosyalar)
- `app/layout.tsx`
  - Fontlar (`EB_Garamond` + `Inter`), `lang="tr"`, metadata.
- `app/globals.css`
  - CSS değişkenleri (renkler), grain katmanı, `:focus-visible` outline.
- `app/page.tsx`
  - Home: `TopNav` + `Hero`.
- `app/menu/page.tsx`, `app/galeri/page.tsx`, `app/iletisim/page.tsx`, `app/hakkimizda/page.tsx`, `app/rezervasyon/page.tsx`
  - Şu an placeholder sayfalar.
- `components/TopNav.tsx`
  - Overlay navbar (logo solda pinned, menu ortada, rezervasyon sagda).
- `components/Hero.tsx`
  - Video hero, başlık kopyası, CTA’lar, RotatingText ayarları.
- `components/RotatingText.tsx`
  - ReactBits “RotatingText” implementasyonu (Motion ile).
- `components/Brand.tsx`
  - Navbar logosu (`/public/brand-2.svg`).

## Tasarım Tokenları (Renkler)
`app/globals.css` icinde:
- `--brand`: `62 10 18` (deep burgundy)
- `--brandWine`: `188 21 33` (**#bc1521**) (vurgulu kirmizi)
- `--bg`, `--panel`, `--text`, `--muted`: arkaplan ve tipografi tonları

Tailwind renk map’i: `tailwind.config.ts` (bg/panel/text/muted/brand/brandWine).

## Hero (Mevcut Durum)
Dosya: `components/Hero.tsx`

### İçerik
- Baslik (satir 1): `Ustalığın İzi`
- Baslik (satir 2): `Izgaranın ` + dönen kelime grubu
- Dönen kelimeler (sırayla):
  1. `Klasikleri`
  2. `Ateşi`
  3. `Lezzeti`
  4. `Geleneği`
- CTA:
  - Primary: **Rezervasyon** (`--brandWine` arkaplan)
  - Secondary: **Menüyü Gör**

### Arka plan Video
- Kaynak: `public/hero.mp4`
- Hero `<video>` ayarları: `autoPlay muted loop playsInline preload="metadata"`

Video değiştirmek için:
1. Yeni mp4’yi `public/hero.mp4` olarak koy (ayni isimle uzerine yazmak en kolayi).
2. Gerekirse `components/Hero.tsx` içindeki `<source src="/hero.mp4" ... />` yolunu güncelle.

### RotatingText (Premium Motion)
RotatingText component’i: `components/RotatingText.tsx` (ReactBits).

Hero’daki konfigurasyon (dosya: `components/Hero.tsx`) şu prensiplerle ayarlı:
- **Harfler sırayla “düşüyor”** hissi (per-character split + stagger).
- **Bounce yok** (daha premium): `bounce: 0`.
- Kelime oturduktan sonra daha uzun bekleme: `rotationInterval={5200}`.
- Descender’lar kesilmesin diye (g/ş/ğ gibi): `overflow-hidden` + `pb/-mb` “mask” hilesi kullaniliyor.

Bu ayarları değiştirmek istersen:
- Hızı: `rotationInterval`
- Harf düşüş belirginliği: `staggerDuration`, `initial/exit y`
- Hissiyat: `transition` (spring daha dogal; tween daha “sabit”)

## Navbar (Mevcut Durum)
Dosya: `components/TopNav.tsx`

- Navbar **overlay** (scroll’da sabit / değişmiyor).
- **Logo solda pinned**:
  - Logo `absolute` + negatif `translate-x` ile sola taşınıyor.
  - Logo asset: `public/brand-2.svg`
  - Not: `brand-2.svg` iç padding’e sahip; görünen işareti büyütmek için `Brand` içinde `object-cover object-left` + explicit `w/h` kullanılıyor.
- Menu (desktop): ortada, `md:flex`.
- Rezervasyon CTA: sag ustte pinned (`absolute right-*`).
- Mobil: hamburger + drawer menu.

## Placeholder Sayfalar
Şu route’lar var ama şu an “içerik placeholder”:
- `/menu`
- `/galeri`
- `/iletisim`
- `/hakkimizda`
- `/rezervasyon`

Not: Bu sayfalara ileride `TopNav` eklemek icin en temiz yol; route-group layout (ornegin `app/(site)/layout.tsx`) veya `app/layout.tsx` icinde global shell kurmak.

## Asset Notlari
`public/` içinde:
- `hero.mp4`: aktif hero video
- `brand-2.svg`: aktif logo
- Diğer logo denemeleri:
  - `brand.svg`, `brand-extracted.png`, `brand-clean.png`, `brand-2-*.png`
  - Su an aktif degil; gerekirse ileride crop/temiz versiyona gecilebilir.

## Sonraki Adımlar (Öncelik Sırası)
1. **Site Shell**
   - TopNav’u tum sayfalara tasima (layout).
2. **Rezervasyon Akışı**
   - Form mu, WhatsApp/telefon hizli akisi mi? (UI + tracking).
3. **Menü Sayfası**
   - Kategori/urun kartlari, fiyat, filtre, detay sayfasi.
4. **Galeri**
   - Video kareleri / placeholder gorseller ile grid + lightbox.
5. **İletişim**
   - Harita paneli, WhatsApp CTA, saatler.
6. **Performans**
   - Hero video poster, mobilde daha hafif video/tek kare, preload stratejisi.
7. **SEO**
   - OpenGraph, favicon seti, sitemap/robots, yapisal veri (Restaurant).
