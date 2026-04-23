// src/lib/nav-data.ts

export type NavItem = {
    name: string;
    description: string;
    href: string;
    image: string;
};

export const RECIPE_CATEGORIES: NavItem[] = [
    {
        name: "Breakfast",
        description: "Light & energizing start",
        href: "/recipes/category/breakfast",
        image:
            "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=200&q=80",
    },
    {
        name: "Main Dishes",
        description: "Balanced everyday meals",
        href: "/recipes/category/main-dishes",
        image:
            "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=200&q=80",
    },
    {
        name: "Desserts",
        description: "Sweet finishing treats",
        href: "/recipes/category/desserts",
        image:
            "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=200&q=80",
    },
    {
        name: "Specialty Drinks",
        description: "Creative refreshing drinks",
        href: "/recipes/category/drinks",
        image:
            "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=200&q=80",
    },
];

export const RECIPE_REGIONS: NavItem[] = [
    {
        name: "Northern Cuisine",
        description: "Balanced, subtle flavors",
        href: "/recipes/region/northern",
        image:
            "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=200&q=80",
    },
    {
        name: "Central Cuisine",
        description: "Bold & spicy dishes",
        href: "/recipes/region/central",
        image:
            "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=200&q=80",
    },
    {
        name: "Southern Cuisine",
        description: "Sweet tropical richness",
        href: "/recipes/region/southern",
        image:
            "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=200&q=80",
    },
    {
        name: "Street Food",
        description: "Quick street bites",
        href: "/recipes/region/street-food",
        image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=200&q=80",
    },
];

export const NAV_LINKS = [
    { label: "Home", href: "/" },
    { label: "Recipes", href: "/recipes", hasDropdown: true },
    { label: "Stories", href: "/stories", hasDropdown: true },
    { label: "About", href: "/about" },
];