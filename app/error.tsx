"use client";

export default function Error({
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <main className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
            <div className="text-6xl">⚠️</div>
            <h1 className="mt-4 font-[var(--font-heading)] text-2xl font-bold text-white md:text-3xl">
                Bir Hata Oluştu
            </h1>
            <p className="mt-3 max-w-md text-white/50">
                Beklenmeyen bir sorun oluştu. Lütfen tekrar deneyin.
            </p>
            <button
                onClick={reset}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[rgb(var(--brandWine))] px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-[rgb(var(--brandWine)/0.85)] hover:shadow-lg"
            >
                Tekrar Dene
            </button>
        </main>
    );
}
