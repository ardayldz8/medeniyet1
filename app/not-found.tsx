import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <div className="text-8xl font-bold text-[rgb(var(--brandWine))]">404</div>
            <h1 className="mt-4 font-[var(--font-heading)] text-2xl font-bold text-white md:text-3xl">
                Sayfa Bulunamadı
            </h1>
            <p className="mt-3 max-w-md text-white/50">
                Aradığınız sayfa mevcut değil veya taşınmış olabilir.
            </p>
            <Link
                href="/"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--brandWine))] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[rgb(var(--brandWine)/0.85)] hover:shadow-lg"
            >
                Ana Sayfaya Dön
            </Link>
        </main>
    );
}
