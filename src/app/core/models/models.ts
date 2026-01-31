export interface Category {
    id: string;
    name: string;
    slug: string;
    icon: string; // URL or icon class
    adCount?: number;
}

export interface Listing {
    id: string;
    title: string;
    price: number;
    currency: string;
    location: string;
    imageUrl: string;
    postedTime: Date; // or string
    isFavorite: boolean;
    category: string;
}
