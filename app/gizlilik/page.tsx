import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gizlilik Politikası",
    description:
        "Medeniyet Kasap & Izgara gizlilik politikası ve kişisel verilerin korunması hakkında bilgilendirme.",
};

export default function GizlilikPage() {
    return (
        <main className="mx-auto max-w-screen-md px-4 pb-20 pt-32 md:px-8">
            <h1 className="font-[var(--font-heading)] text-3xl font-bold text-white md:text-4xl">
                Gizlilik Politikası
            </h1>
            <div className="mt-2 h-1 w-16 rounded-full bg-[rgb(var(--brandWine))]" />

            <div className="mt-10 space-y-8 text-sm leading-relaxed text-white/60">
                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        1. Veri Sorumlusu
                    </h2>
                    <p>
                        Bu web sitesi, Medeniyet Kasap & Izgara (&ldquo;İşletme&rdquo;)
                        tarafından işletilmektedir. Adres: Güngören Cad. No:3, Çırçır Mah.,
                        Eyüpsultan, İstanbul.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        2. Toplanan Veriler
                    </h2>
                    <p>
                        Web sitemiz üzerinden doğrudan kişisel veri toplanmamaktadır.
                        Sitemizde kullanıcı kaydı, form doldurma veya çevrimiçi sipariş
                        sistemi bulunmamaktadır.
                    </p>
                    <p className="mt-2">
                        WhatsApp ve telefon bağlantılarına tıkladığınızda ilgili
                        uygulamalara yönlendirilirsiniz; bu iletişim kanalları üzerinden
                        paylaştığınız bilgiler ilgili platformların gizlilik politikalarına
                        tabidir.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        3. Çerezler (Cookies)
                    </h2>
                    <p>
                        Sitemiz, temel işlevsellik için gerekli teknik çerezler
                        kullanmaktadır. Ayrıca, konum haritası hizmeti için Google Maps
                        entegrasyonu bulunmakta olup Google tarafından üçüncü taraf çerezler
                        yerleştirilebilmektedir.
                    </p>
                    <p className="mt-2">
                        Google&apos;ın gizlilik politikası hakkında detaylı bilgi için:{" "}
                        <a
                            href="https://policies.google.com/privacy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[rgb(var(--brandWine))] underline"
                        >
                            policies.google.com/privacy
                        </a>
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        4. Kişisel Verilerin Korunması (KVKK)
                    </h2>
                    <p>
                        6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında, kişisel
                        verilerinizin işlenmesine ilişkin haklarınız saklıdır. Veri
                        sorumlusu olarak İşletme, kişisel verilerinizin güvenliğini sağlamak
                        için gerekli teknik ve idari tedbirleri almaktadır.
                    </p>
                    <p className="mt-2">
                        KVKK kapsamındaki haklarınızı kullanmak için bizimle iletişime
                        geçebilirsiniz: 0536 924 32 13
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        5. Üçüncü Taraf Hizmetler
                    </h2>
                    <ul className="list-disc space-y-1 pl-5">
                        <li>Google Maps — Konum bilgisi ve harita görüntüleme</li>
                        <li>Google Fonts — Yazı tipi sunumu</li>
                    </ul>
                    <p className="mt-2">
                        Bu hizmetler kendi gizlilik politikalarına tabidir ve kullanıcı
                        verilerini kendi kurallarına göre işleyebilir.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">
                        6. Değişiklikler
                    </h2>
                    <p>
                        Bu gizlilik politikası en son 15 Şubat 2026 tarihinde
                        güncellenmiştir. İşletme, politikayı önceden bildirimde bulunmaksızın
                        güncelleme hakkını saklı tutar.
                    </p>
                </section>

                <section>
                    <h2 className="mb-3 text-lg font-semibold text-white">7. İletişim</h2>
                    <p>
                        Gizlilik politikası hakkında sorularınız için bizimle iletişime
                        geçebilirsiniz:
                    </p>
                    <p className="mt-2">
                        Telefon: 0536 924 32 13
                        <br />
                        Adres: Güngören Cad. No:3, Çırçır Mah., Eyüpsultan, İstanbul
                    </p>
                </section>
            </div>
        </main>
    );
}
