import type { MenuItem, MenuCategoryInfo } from "@/types/menu";

export const categories: MenuCategoryInfo[] = [
    { slug: "corbalar", label: "Çorbalar", icon: "", image: "/menu/categories/corbalar.jpeg" },
    { slug: "dana-porsiyonlar", label: "Dana Porsiyonlar", icon: "", image: "/menu/categories/dana-porsiyonlar.jpg" },
    { slug: "kuzu-porsiyonlar", label: "Kuzu Porsiyonlar", icon: "", image: "/menu/categories/kuzu-porsiyonlar.jpg" },
    { slug: "tavuk-porsiyonlar", label: "Tavuk Porsiyonlar", icon: "", image: "/menu/categories/tavuk-porsiyonlar.webp" },
    { slug: "hamburger", label: "Hamburger", icon: "", image: "/menu/categories/hamburger.jpg" },
    { slug: "kebap-cesitleri", label: "Kebap Çeşitleri", icon: "", image: "/menu/categories/kebap-cesitleri.jpeg" },
    { slug: "izgara-kofte-porsiyon", label: "Izgara Köfte", icon: "", image: "/menu/categories/izgara-kofte-porsiyon.jpg" },
    { slug: "sucuk-porsiyonlar", label: "Sucuk", icon: "", image: "/menu/categories/sucuk-porsiyonlar.webp" },
    { slug: "pilic-cevirme", label: "Piliç Çevirme", icon: "", image: "/menu/categories/pilic-cevirme.jpg" },
    { slug: "kirmizi-et-kg", label: "Kırmızı Et (KG)", icon: "", image: "/menu/categories/kirmizi-et-kg.webp" },
    { slug: "izgara-kofte-kg", label: "Köfte (KG)", icon: "", image: "/menu/categories/izgara-kofte-kg.jpeg" },
    { slug: "tavuk-kg", label: "Tavuk (KG)", icon: "", image: "/menu/categories/tavuk-kg.png" },
    { slug: "mantar", label: "Mantar Çeşitleri", icon: "", image: "/menu/categories/mantar.jpg" },
    { slug: "meze-cesitleri", label: "Mezeler", icon: "", image: "/menu/categories/meze-cesitleri.webp" },
    { slug: "salatalar", label: "Salatalar", icon: "", image: "/menu/categories/salatalar.jpg" },
    { slug: "icecekler", label: "İçecekler", icon: "", image: "/menu/categories/icecekler.png" },
    { slug: "tatli", label: "Tatlı", icon: "", image: "/menu/categories/tatli.png" },
    { slug: "lavas-ekmek", label: "Lavaş / Ekmek", icon: "", image: "/menu/categories/lavas-ekmek.jpg" },
];




export const menuItems: MenuItem[] = [
    // ═══════════════════════════════════════════════════════════════════════════
    // ÇORBALAR
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "gerdan-corbasi",
        name: "Gerdan Çorbası",
        description: "Kemiksiz gerdan eti içeriğiyle, kışın şifası.",
        price: 300,
        category: "corbalar",
        isPopular: true,
        image: "/menu/gerdan-orbas.jpg",
    },
    {
        id: "gunun-corbasi",
        name: "Günün Çorbası",
        description: "Sizler için günlük özel çıkarılmaktadır, lütfen garsonunuza danışınız.",
        price: 150,
        category: "corbalar",
        image: "/menu/gnn-orbas.jpeg",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // DANA PORSİYONLAR
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "dana-lokum-porsiyon",
        name: "Dana Lokum Porsiyon",
        description: "1 porsiyon dana lokum, közlenmiş biber ve domates eşliğinde.",
        price: 730,
        category: "dana-porsiyonlar",
        isPopular: true,
        image: "/menu/dana-lokum-porsiyon.webp",
    },
    {
        id: "dana-saslik-porsiyon",
        name: "Dana Şaşlık Porsiyon",
        description: "1 porsiyon dana şaşlık, közlenmiş domates ve biber eşliğinde.",
        price: 540,
        category: "dana-porsiyonlar",
        image: "/menu/dana-alk-porsiyon.jpg",
    },
    {
        id: "dana-tbone-porsiyon",
        name: "Dana T-Bone Porsiyon",
        description: "1 porsiyon dana T-Bone, közlenmiş domates ve biber eşliğinde.",
        price: 1300,
        category: "dana-porsiyonlar",
        isPopular: true,
        image: "/menu/dana-t-bone-porsiyon.jpg",
    },
    {
        id: "dana-dallas-porsiyon",
        name: "Dana Dallas Porsiyon",
        description: "1 porsiyon dana dallas, közlenmiş domates ve biber eşliğinde.",
        price: 1300,
        category: "dana-porsiyonlar",
        image: "/menu/dana-dallas-porsiyon.jpg",
    },
    {
        id: "dana-antrikot-sis-porsiyon",
        name: "Dana Antrikot Şiş Porsiyon",
        description: "1 porsiyon dana antrikot şiş, közlenmiş domates ve biber eşliğinde.",
        price: 440,
        category: "dana-porsiyonlar",
        image: "/menu/dana-antrikot-i-porsiyon.png",
    },
    {
        id: "dana-cirali-antrikot-porsiyon",
        name: "Dana Çıralı Antrikot Porsiyon",
        description: "1 porsiyon dana çıralı antrikot, közlenmiş domates ve biber eşliğinde.",
        price: 700,
        category: "dana-porsiyonlar",
        image: "/menu/dana-ral-antrikot-porsiyon.png",
    },
    {
        id: "dana-ribay-porsiyon",
        name: "Dana Ribay Porsiyon",
        description: "1 porsiyon dana ribay, közlenmiş domates ve biber eşliğinde.",
        price: 1300,
        category: "dana-porsiyonlar",
        image: "/menu/dana-ribay-porsiyon.jpg",
    },
    {
        id: "dana-cop-sis-durum",
        name: "Dana Çöp Şiş Dürüm",
        price: 280,
        category: "dana-porsiyonlar",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KUZU PORSİYONLAR
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "kuzu-sis-porsiyon",
        name: "Kuzu Şiş Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 700,
        category: "kuzu-porsiyonlar",
    },
    {
        id: "kuzu-pirzola-porsiyon",
        name: "Kuzu Pirzola Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 750,
        category: "kuzu-porsiyonlar",
        isPopular: true,
        image: "/menu/kuzu-pirzola-porsiyon.webp",
    },
    {
        id: "kuzu-ciger-porsiyon",
        name: "Kuzu Ciğer Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 500,
        category: "kuzu-porsiyonlar",
        image: "/menu/kuzu-cier-porsiyon.webp",
    },
    {
        id: "kuzu-kaburga-porsiyon",
        name: "Kuzu Kaburga Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 600,
        category: "kuzu-porsiyonlar",
        image: "/menu/kuzu-kaburga-porsiyon.jpg",
    },
    {
        id: "kuzu-beyti-porsiyon",
        name: "Kuzu Beyti Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 740,
        category: "kuzu-porsiyonlar",
        isNew: true,
        image: "/menu/kuzu-beyti-porsiyon.jpg",
    },
    {
        id: "kuzu-kulbasti-porsiyon",
        name: "Kuzu Külbastı Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 640,
        category: "kuzu-porsiyonlar",
        image: "/menu/kuzu-klbast-porsiyon.png",
    },
    {
        id: "kuzu-lokum-porsiyon",
        name: "Kuzu Lokum Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 750,
        category: "kuzu-porsiyonlar",
        image: "/menu/kuzu-lokum-porsiyon.jpg",
    },
    {
        id: "kuzu-kusleme-porsiyon",
        name: "Kuzu Küşleme Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 700,
        category: "kuzu-porsiyonlar",
        image: "/menu/kuzu-kleme-porsiyon.webp",
    },
    {
        id: "kuzu-atom-kokorec",
        name: "Kuzu Atom Kokoreç",
        description: "Zırhta çekilmiş kuzu bonfile ve yağı, yeşil biber, tereyağı, çeşitli baharatlar ve kızarmış ekmek eşliğinde masada dökümle servis edilmektedir.",
        price: 720,
        category: "kuzu-porsiyonlar",
        isNew: true,
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // TAVUK PORSİYONLAR
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "tavuk-sis-porsiyon",
        name: "Tavuk Şiş Porsiyon",
        description: "Közlenmiş biber, domates, soğan bulgur pilavı ve lavaş eşliğinde.",
        price: 420,
        category: "tavuk-porsiyonlar",
    },
    {
        id: "tavuk-pirzola-porsiyon",
        name: "Tavuk Pirzola Porsiyon",
        description: "Közlenmiş domates biber, bulgur pilavı ve lavaş eşliğinde.",
        price: 420,
        category: "tavuk-porsiyonlar",
    },
    {
        id: "yaprak-kanat-porsiyon",
        name: "Yaprak Kanat Porsiyon",
        description: "Közlenmiş domates biber bulgur pilavı ve lavaş eşliğinde.",
        price: 470,
        category: "tavuk-porsiyonlar",
        isPopular: true,
    },
    {
        id: "tavuk-kanat-porsiyon",
        name: "Tavuk Kanat Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 420,
        category: "tavuk-porsiyonlar",
    },
    {
        id: "tavuk-sis-durum",
        name: "Tavuk Şiş Dürüm",
        price: 230,
        category: "tavuk-porsiyonlar",
    },
    {
        id: "ekmek-arasi-tavuk",
        name: "Ekmek Arası Tavuk",
        price: 220,
        category: "tavuk-porsiyonlar",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // HAMBURGER
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "hamburger-porsiyon",
        name: "Hamburger Porsiyon",
        description: "Patates kızartması ketçap ve mayonez eşliğinde.",
        price: 420,
        category: "hamburger",
    },
    {
        id: "cheeseburger-porsiyon",
        name: "Cheeseburger Porsiyon",
        description: "Patates kızartması ketçap ve mayonez eşliğinde.",
        price: 460,
        category: "hamburger",
        image: "/menu/chesseburger-porsiyon.jpg",
    },
    {
        id: "double-hamburger-porsiyon",
        name: "Double Hamburger Porsiyon",
        description: "Çift hamburger eti, patates kızartması ketçap ve mayonez eşliğinde.",
        price: 650,
        category: "hamburger",
        isPopular: true,
    },
    {
        id: "chicken-burger-porsiyon",
        name: "Chicken Burger Porsiyon",
        description: "Tavuk burger, patates kızartması ketçap ve mayonez eşliğinde.",
        price: 390,
        category: "hamburger",
    },
    {
        id: "bonfile-lokum-burger-porsiyon",
        name: "Bonfile Lokum Burger Porsiyon",
        description: "Patates kızartması ketçap ve mayonez eşliğinde.",
        price: 600,
        category: "hamburger",
    },
    {
        id: "medeniyet-asado-burger",
        name: "Medeniyet Asado Burger",
        description: "Özel fırınlarda 4 saat buharda pişirilmiş ve tiftiklenmiş asado eti içeriğiyle asado burger. Patates kızartması eşliğinde.",
        price: 600,
        category: "hamburger",
        isNew: true,
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KEBAP ÇEŞİTLERİ
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "adana-kebap-porsiyon",
        name: "Adana Kebap Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 425,
        category: "kebap-cesitleri",
        isPopular: true,
        image: "/menu/urfa-kebap-porsiyon.jpg",
    },
    {
        id: "urfa-kebap-porsiyon",
        name: "Urfa Kebap Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 425,
        category: "kebap-cesitleri",
        image: "/menu/urfa-kebap-porsiyon.jpg",
    },
    {
        id: "patlican-kebap-porsiyon",
        name: "Patlıcan Kebap Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 480,
        category: "kebap-cesitleri",
        image: "/menu/patlcan-kebap-porsiyon.jpg",
    },
    {
        id: "adana-durum",
        name: "Adana Dürüm",
        price: 250,
        category: "kebap-cesitleri",
    },
    {
        id: "urfa-durum",
        name: "Urfa Dürüm",
        price: 250,
        category: "kebap-cesitleri",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // IZGARA KÖFTE PORSİYONLAR
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "kasap-kofte-porsiyon",
        name: "Kasap Köfte Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 400,
        category: "izgara-kofte-porsiyon",
        isPopular: true,
    },
    {
        id: "maydanozlu-kofte-porsiyon",
        name: "Maydanozlu Köfte Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 400,
        category: "izgara-kofte-porsiyon",
        image: "/menu/maydanozlu-kfte-porsiyon.jpg",
    },
    {
        id: "kasarli-kofte-porsiyon",
        name: "Kaşarlı Köfte Porsiyon",
        description: "Bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 450,
        category: "izgara-kofte-porsiyon",
        image: "/menu/kaarl-kfte-porsiyon.jpg",
    },
    {
        id: "ekmek-arasi-kofte",
        name: "Ekmek Arası Köfte",
        price: 250,
        category: "izgara-kofte-porsiyon",
        image: "/menu/ekmek-aras-kfte.jpeg",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SUCUK PORSİYONLAR
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "izgara-sucuk-porsiyon",
        name: "Izgara Sucuk Porsiyon",
        description: "1 porsiyon ızgara sucuk, bulgur pilavı, közlenmiş domates biber soğan ve lavaş eşliğinde.",
        price: 420,
        category: "sucuk-porsiyonlar",
        image: "/menu/zgara-sucuk-porsiyon.jpeg",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // PİLİÇ ÇEVİRME
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "pilic-cevirme-butun",
        name: "Piliç Çevirme Bütün Tavuk",
        description: "1 adet piliç çevirme pişmiş bütün tavuk.",
        price: 275,
        category: "pilic-cevirme",
        isPopular: true,
    },
    {
        id: "pilic-cevirme-yarim",
        name: "Piliç Çevirme Yarım Tavuk",
        description: "Piliç çevirme yarım tavuk.",
        price: 150,
        category: "pilic-cevirme",
    },
    {
        id: "pilic-cevirme-baget",
        name: "Piliç Çevirme Baget Adet",
        description: "1 adet piliç çevirme baget.",
        price: 30,
        category: "pilic-cevirme",
    },
    {
        id: "pilic-cevirme-kanat",
        name: "Piliç Çevirme Kanat Adet",
        description: "1 adet piliç çevirme kanat.",
        price: 30,
        category: "pilic-cevirme",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // KIRMIZI ET KİLOGRAM
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "pismis-adana-kebap-kg",
        name: "Pişmiş Adana Kebap KG",
        description: "1 Kilo ızgarada pişirilmiş Adana Kebap. Közlenmiş biber ve lavaş eşliğinde.",
        price: 1050,
        category: "kirmizi-et-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-urfa-kebap-kg",
        name: "Pişmiş Urfa Kebap KG",
        description: "1 Kilo ızgarada pişirilmiş Urfa Kebap. Közlenmiş biber ve lavaş eşliğinde.",
        price: 1050,
        category: "kirmizi-et-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-kuzu-pirzola-kg",
        name: "Pişmiş Kuzu Pirzola KG",
        description: "1 Kilo ızgarada pişirilmiş Kuzu Pirzola. Közlenmiş biber ve lavaş eşliğinde.",
        price: 2800,
        category: "kirmizi-et-kg",
        weight: "1 kg",
        isPopular: true,
    },
    {
        id: "pismis-kuzu-kaburga-kg",
        name: "Pişmiş Kuzu Kaburga KG",
        description: "1 Kilo ızgarada pişirilmiş Kuzu Kaburga. Közlenmiş biber ve lavaş eşliğinde.",
        price: 1650,
        category: "kirmizi-et-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-kuzu-kulbasti-kg",
        name: "Pişmiş Kuzu Külbastı KG",
        description: "1 Kilo ızgarada pişirilmiş Kuzu Külbastı. Közlenmiş biber ve lavaş eşliğinde.",
        price: 1940,
        category: "kirmizi-et-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-kuzu-lokum-kg",
        name: "Pişmiş Kuzu Lokum KG",
        description: "1 Kilo ızgarada pişirilmiş Kuzu Lokum. Közlenmiş biber ve lavaş eşliğinde.",
        price: 2200,
        category: "kirmizi-et-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-kuzu-bobrek-kg",
        name: "Pişmiş Kuzu Böbrek KG",
        description: "1 Kilo ızgarada pişirilmiş Kuzu Böbrek. Közlenmiş biber ve lavaş eşliğinde.",
        price: 1295,
        category: "kirmizi-et-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-kuzu-kusleme-kg",
        name: "Pişmiş Kuzu Küşleme KG",
        description: "1 Kilo ızgarada pişirilmiş Kuzu Küşleme. Közlenmiş biber ve lavaş eşliğinde.",
        price: 2250,
        category: "kirmizi-et-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-dana-lokum-kg",
        name: "Pişmiş Dana Lokum KG",
        description: "1 Kilo ızgarada pişirilmiş Dana Lokum. Közlenmiş biber ve lavaş eşliğinde.",
        price: 2100,
        category: "kirmizi-et-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-dana-saslik-kg",
        name: "Pişmiş Dana Şaşlık KG",
        description: "1 Kilo ızgarada pişirilmiş Dana Şaşlık. Közlenmiş biber ve lavaş eşliğinde.",
        price: 1990,
        category: "kirmizi-et-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-dana-dallas-kg",
        name: "Pişmiş Dana Dallas KG",
        description: "1 Kilo ızgarada pişirilmiş Dana Dallas. Közlenmiş biber ve lavaş eşliğinde.",
        price: 2050,
        category: "kirmizi-et-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-dana-tbone-kg",
        name: "Pişmiş Dana T-Bone KG",
        description: "1 Kilo ızgarada pişirilmiş Dana T-Bone. Közlenmiş biber ve lavaş eşliğinde.",
        price: 2050,
        category: "kirmizi-et-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-dana-antrikot-sis-kg",
        name: "Pişmiş Dana Antrikot Şiş KG",
        description: "1 kilo pişirilmiş dana antrikot şiş.",
        price: 1850,
        category: "kirmizi-et-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-dana-cirali-antrikot-kg",
        name: "Pişmiş Dana Çıralı Antrikot KG",
        description: "1 Kilo pişirilmiş dana çıralı antrikot.",
        price: 1990,
        category: "kirmizi-et-kg",
        weight: "1 kg",
    },
    {
        id: "medeniyet-kuzu-gerdan-kg",
        name: "Medeniyet Kuzu Gerdan KG",
        description: "Özel buharlı fırınlarda 4 saatten fazla buharla pişirilmiş özel kuzu gerdan eti.",
        price: 2115,
        category: "kirmizi-et-kg",
        weight: "1 kg",
        isNew: true,
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // IZGARA KÖFTE KİLOGRAM
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "pismis-kasap-kofte-kg",
        name: "Pişmiş Kasap Köfte KG",
        description: "1 kilo pişirilmiş kasap köfte.",
        price: 950,
        category: "izgara-kofte-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-maydanozlu-kofte-kg",
        name: "Pişmiş Maydanozlu Köfte KG",
        description: "1 Kilo pişirilmiş maydanozlu köfte.",
        price: 850,
        category: "izgara-kofte-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-kasarli-kofte-kg",
        name: "Pişmiş Kaşarlı Köfte KG",
        description: "1 kilo pişirilmiş kaşarlı köfte.",
        price: 980,
        category: "izgara-kofte-kg",
        weight: "1 kg",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SUCUK KİLOGRAM
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "pismis-izgara-sucuk-kg",
        name: "Pişmiş Izgara Sucuk KG",
        description: "1 kilo pişirilmiş ızgara sucuk.",
        price: 1299,
        category: "izgara-sucuk-kg",
        weight: "1 kg",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // TAVUK KİLOGRAM
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "pismis-tavuk-kanat-kg",
        name: "Pişmiş Tavuk Kanat KG",
        description: "1 kilo pişirilmiş tavuk kanat, lavaş ve biber eşliğinde.",
        price: 450,
        category: "tavuk-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-tavuk-sis-kg",
        name: "Pişmiş Tavuk Şiş KG",
        description: "1 kilo pişirilmiş tavuk şiş, lavaş ve biber eşliğinde.",
        price: 455,
        category: "tavuk-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-soslu-tavuk-pirzola-kg",
        name: "Pişmiş Soslu Tavuk Pirzola KG",
        description: "1 kilo pişirilmiş tavuk pirzola, lavaş ve biber eşliğinde.",
        price: 505,
        category: "tavuk-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-citir-pirzola-kg",
        name: "Pişmiş Çıtır Pirzola KG",
        description: "1 kilo pişirilmiş çıtır pirzola, lavaş ve közlenmiş biber eşliğinde.",
        price: 455,
        category: "tavuk-kg",
        weight: "1 kg",
    },
    {
        id: "pismis-yaprak-kanat-kg",
        name: "Pişmiş Yaprak Kanat KG",
        description: "1 kilo yaprak kanat, lavaş ve közlenmiş biber eşliğinde.",
        price: 690,
        category: "tavuk-kg",
        weight: "1 kg",
        isPopular: true,
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MANTAR ÇEŞİTLERİ
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "kucuk-sade-kasarli-mantar",
        name: "Küçük Boy Sade Kaşarlı Mantar",
        description: "1 adet küçük boy sade kaşarlı mantar.",
        price: 70,
        category: "mantar",
    },
    {
        id: "kucuk-dereotlu-mantar",
        name: "Küçük Boy Dereotlu Mantar",
        description: "1 adet küçük boy dereotlu mantar.",
        price: 70,
        category: "mantar",
    },
    {
        id: "kucuk-kapya-biberli-mantar",
        name: "Küçük Boy Kapya Biberli Mantar",
        description: "1 adet küçük boy kapya biberli mantar.",
        price: 70,
        category: "mantar",
    },
    {
        id: "buyuk-kasarli-mantar",
        name: "Büyük Boy Kaşarlı Mantar",
        description: "1 adet büyük boy kaşarlı mantar.",
        price: 90,
        category: "mantar",
        isPopular: true,
    },
    {
        id: "buyuk-dereotlu-kasarli-mantar",
        name: "Büyük Boy Dereotlu Kaşarlı Mantar",
        description: "1 adet büyük boy dereotlu kaşarlı mantar.",
        price: 90,
        category: "mantar",
    },
    {
        id: "buyuk-kapya-biberli-kasarli-mantar",
        name: "Büyük Boy Kapya Biberli Kaşarlı Mantar",
        description: "1 adet büyük boy kapya biberli ve kaşarlı mantar.",
        price: 90,
        category: "mantar",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MEZE ÇEŞİTLERİ
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "acili-ezme",
        name: "Acılı Ezme",
        description: "1 porsiyon acılı ezme.",
        price: 120,
        category: "meze-cesitleri",
        isPopular: true,
        image: "/menu/patlcan-ezme.jpg",
    },
    {
        id: "patlican-ezme",
        name: "Patlıcan Ezme",
        description: "1 porsiyon patlıcan ezme.",
        price: 120,
        category: "meze-cesitleri",
        image: "/menu/patlcan-ezme.jpg",
    },
    {
        id: "alinazik",
        name: "Alinazik",
        description: "1 porsiyon alinazik.",
        price: 120,
        category: "meze-cesitleri",
        image: "/menu/alinazik.jpg",
    },
    {
        id: "zeytinyagli-humus",
        name: "Zeytinyağlı Humus",
        description: "1 porsiyon zeytinyağlı humus.",
        price: 120,
        category: "meze-cesitleri",
        image: "/menu/zeytinyal-humus.jpg",
    },
    {
        id: "atom",
        name: "Atom",
        description: "1 porsiyon atom.",
        price: 120,
        category: "meze-cesitleri",
        image: "/menu/atom.jpg",
    },
    {
        id: "guvec-yogurt",
        name: "Güveç Yoğurt",
        description: "1 kase güveçte yoğurt.",
        price: 80,
        category: "meze-cesitleri",
        image: "/menu/gve-yourt.jpg",
    },
    {
        id: "haydari",
        name: "Haydari",
        description: "1 porsiyon haydari.",
        price: 120,
        category: "meze-cesitleri",
        image: "/menu/haydari.jpg",
    },
    {
        id: "patates-kizartmasi",
        name: "Patates Kızartması",
        description: "1 porsiyon patates kızartması.",
        price: 150,
        category: "meze-cesitleri",
        image: "/menu/patates-kzartmas.webp",
    },
    {
        id: "jalapone-biber",
        name: "Jalapeno Biber",
        price: 130,
        category: "meze-cesitleri",
    },
    {
        id: "kirmizi-pancar-tursusu",
        name: "Kırmızı Pancar Turşusu",
        price: 150,
        category: "meze-cesitleri",
    },
    {
        id: "sarimsakli-arpacik-sogan",
        name: "Sarımsak Arpacık Soğan",
        price: 150,
        category: "meze-cesitleri",
    },
    {
        id: "pembe-sultan",
        name: "Pembe Sultan",
        description: "Mor lahana, süzme yoğurt içeriğiyle.",
        price: 120,
        category: "meze-cesitleri",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // SALATALAR
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "coban-salata",
        name: "Çoban Salata",
        description: "Domates, salatalık, biber, soğan eşliğinde zeytinyağ, limon ve nar ekşisi sosu ile servis edilmektedir.",
        price: 200,
        category: "salatalar",
        isPopular: true,
    },
    {
        id: "mor-lahana-salata",
        name: "Mor Lahana Salata",
        description: "1 porsiyon mor lahana salatası.",
        price: 120,
        category: "salatalar",
        image: "/menu/mor-lahana-salata.jpg",
    },
    {
        id: "tulum-peynirli-salata",
        name: "Tulum Peynirli Salata",
        description: "Akdeniz yeşillikleri, mısır, kuru üzüm, ceviz, nar, çeri domates ve tulum peynirli salata. Zeytinyağ, limon ve nar ekşisi sosu ile servis edilmektedir.",
        price: 350,
        category: "salatalar",
        isNew: true,
        image: "/menu/tulum-peynirli-salata.jpeg",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // İÇECEKLER
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "coca-cola-kutu",
        name: "Coca Cola Kutu",
        price: 60,
        category: "icecekler",
        image: "/menu/coca-cola-kutu.jpeg",
    },
    {
        id: "fanta-kutu",
        name: "Fanta Kutu",
        price: 60,
        category: "icecekler",
        image: "/menu/fanta-kutu.jpeg",
    },
    {
        id: "sprite-kutu",
        name: "Sprite Kutu",
        price: 60,
        category: "icecekler",
        image: "/menu/sprite-kutu.jpeg",
    },
    {
        id: "maden-suyu",
        name: "Maden Suyu",
        price: 35,
        category: "icecekler",
        image: "/menu/maden-suyu.jpeg",
    },
    {
        id: "limonlu-soda",
        name: "Limonlu Soda",
        price: 45,
        category: "icecekler",
        image: "/menu/limonlu-soda.jpeg",
    },
    {
        id: "cappy-cesitleri",
        name: "Cappy Çeşitleri",
        description: "Şeftali, Karışık, Portakal, Vişne",
        price: 60,
        category: "icecekler",
        image: "/menu/cappy-eitleri.jpeg",
    },
    {
        id: "fuse-tea",
        name: "Fuse Tea",
        description: "Şeftali, Karpuz, Limon, Mango",
        price: 60,
        category: "icecekler",
        image: "/menu/fuse-tea.jpeg",
    },
    {
        id: "coca-cola-1-litre",
        name: "Coca Cola 1 Litre",
        price: 180,
        category: "icecekler",
        image: "/menu/coca-cola-1-litre.jpeg",
    },
    {
        id: "fanta-1-litre",
        name: "Fanta 1 Litre",
        price: 180,
        category: "icecekler",
        image: "/menu/fanta-1-litre.png",
    },
    {
        id: "salgam",
        name: "Şalgam (Acılı / Acısız)",
        price: 120,
        category: "icecekler",
    },
    {
        id: "salgam-1-litre",
        name: "Şalgam 1 Litre",
        price: 120,
        category: "icecekler",
    },
    {
        id: "sirma-su",
        name: "Sırma Su 0.5L",
        price: 25,
        category: "icecekler",
    },
    {
        id: "cay",
        name: "Çay",
        price: 30,
        category: "icecekler",
    },
    {
        id: "ozerhisar-ayran",
        name: "Özerhisar Cam Şişe Ayran",
        description: "Geleneksel kara maya türk ayranı.",
        price: 55,
        category: "icecekler",
        isPopular: true,
        image: "/menu/zerhisar-cam-ie-ayran.jpg",
    },
    {
        id: "ozerhisar-ayran-1-litre",
        name: "Özerhisar Cam Şişe Ayran 1 Litre",
        description: "Özel kara maya türk ayranı.",
        price: 150,
        category: "icecekler",
        image: "/menu/zerhisar-cam-ie-ayran-1-litre.jpg",
    },
    {
        id: "yayik-ayran",
        name: "Yayık Ayran",
        description: "Ekşimsi tadıyla Susurluk yayık ayranı.",
        price: 70,
        category: "icecekler",
        image: "/menu/yayk-ayran.jpg",
    },
    {
        id: "pancarli-yayik-ayran",
        name: "Pancarlı Yayık Ayran",
        description: "Ekşimsi tadıyla pancar içerikli Susurluk yayık ayranı.",
        price: 120,
        category: "icecekler",
        isNew: true,
        image: "/menu/pancarl-yayk-ayran.jpg",
    },
    {
        id: "acili-yayik-ayran",
        name: "Acılı Yayık Ayran",
        description: "Acı ve Ekşimsi tadıyla Susurluk yayık ayranı.",
        price: 120,
        category: "icecekler",
        image: "/menu/acl-yayk-ayran.jpg",
    },
    {
        id: "fresh-limonata",
        name: "Fresh Limonata",
        description: "Özel ve kendi yapımımız olan yaz aylarının ferahlatıcısı limonata.",
        price: 75,
        category: "icecekler",
    },
    {
        id: "damla-su-cam",
        name: "Damla Su Cam 0.33ml",
        price: 40,
        category: "icecekler",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // TATLI
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "havuc-dilim-baklava",
        name: "Havuç Dilim Baklava",
        description: "1 adet havuç dilim baklava.",
        price: 230,
        category: "tatli",
        isPopular: true,
    },
    {
        id: "ankara-baklavasi",
        name: "Ankara Baklavası",
        description: "Özel antep fıstıklı baklava.",
        price: 230,
        category: "tatli",
        image: "/menu/ankara-baklavas.jpg",
    },
    {
        id: "dondurmali-katmer",
        name: "Dondurmalı Katmer",
        price: 450,
        category: "tatli",
        isNew: true,
        image: "/menu/dondurmal-katmer.jpeg",
    },
    {
        id: "top-dondurma",
        name: "Top Dondurma",
        description: "1 top dondurma.",
        price: 60,
        category: "tatli",
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // LAVAŞ / EKMEK
    // ═══════════════════════════════════════════════════════════════════════════
    {
        id: "soslu-lavas",
        name: "Soslu Lavaş Adet",
        description: "Tereyağı ve salça içeriğiyle soslandırılmış lavaş.",
        price: 30,
        category: "lavas-ekmek",
    },
    {
        id: "lavas",
        name: "Lavaş Adet",
        price: 16,
        category: "lavas-ekmek",
    },
];
