export type MenuCategory =
    | "corbalar"
    | "dana-porsiyonlar"
    | "kuzu-porsiyonlar"
    | "tavuk-porsiyonlar"
    | "hamburger"
    | "kebap-cesitleri"
    | "izgara-kofte-porsiyon"
    | "sucuk-porsiyonlar"
    | "pilic-cevirme"
    | "kirmizi-et-kg"
    | "izgara-kofte-kg"
    | "izgara-sucuk-kg"
    | "tavuk-kg"
    | "mantar"
    | "meze-cesitleri"
    | "salatalar"
    | "icecekler"
    | "tatli"
    | "lavas-ekmek";

export interface MenuItem {
    id: string;
    name: string;
    description?: string;
    price: number;
    category: MenuCategory;
    isPopular?: boolean;
    isNew?: boolean;
    weight?: string;
    image?: string;
}

export interface MenuCategoryInfo {
    slug: MenuCategory;
    label: string;
    icon: string;
    image?: string;
}
