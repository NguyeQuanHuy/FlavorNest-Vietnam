// ─────────────────────────────────────────────────────────────────────────
//  src/app/categories/_data/categoryMap.ts
//  Maps URL slug → Recipe category filter + page metadata
// ─────────────────────────────────────────────────────────────────────────
import type { Category } from '@/data/recipes'

export interface CategoryConfig {
    slug: string
    category: Exclude<Category, 'All'>
    tagFilter?: string[]
    title: string
    subtitle: string
    description: string
    heroImage: string
}

export const CATEGORY_MAP: Record<string, CategoryConfig> = {
    pho: {
        slug: 'pho',
        category: 'Soup',
        tagFilter: ['pho'],
        title: 'Pho',
        subtitle: 'Phở',
        description: "Vietnam's most iconic dish — a fragrant beef or chicken broth simmered for hours, ladled over silky rice noodles.",
        heroImage: '/images/recipes/pho-bo-ha-noi.jpg',
    },
    bun: {
        slug: 'bun',
        category: 'Noodles',
        title: 'Rice Noodles',
        subtitle: 'Bún',
        description: 'Thin round rice noodles served in soup, with grilled meat, or fresh herbs — the everyday workhorse of Vietnamese cuisine.',
        heroImage: '/images/recipes/bun-bo-hue.webp',
    },
    banhmi: {
        slug: 'banhmi',
        category: 'Street Food',
        tagFilter: ['banh mi', 'baguette'],
        title: 'Banh Mi',
        subtitle: 'Bánh mì',
        description: 'The Vietnamese baguette — a colonial inheritance transformed into one of the world\'s great sandwiches.',
        heroImage: '/images/recipes/banh-mi.png',
    },
    rolls: {
        slug: 'rolls',
        category: 'Rolls',
        title: 'Fresh Rolls',
        subtitle: 'Gỏi cuốn',
        description: 'Translucent rice paper wrapped around herbs, vermicelli, and protein — fresh, light, and endlessly customizable.',
        heroImage: '/images/recipes/goi-cuon.jpg',
    },
    com: {
        slug: 'com',
        category: 'Rice',
        title: 'Broken Rice',
        subtitle: 'Cơm tấm',
        description: 'Saigon\'s beloved comfort food — fragmented rice grains topped with grilled pork, egg, and pickled vegetables.',
        heroImage: '/images/recipes/com-tam.jpg',
    },
    street: {
        slug: 'street',
        category: 'Street Food',
        title: 'Street Food',
        subtitle: 'Đồ ăn đường phố',
        description: 'From sidewalk grills to tiny plastic stools — the food that defines daily life across Vietnam.',
        heroImage: '/images/recipes/banh-xeo-mien-nam.jpg',
    },
    dessert: {
        slug: 'dessert',
        category: 'Dessert',
        title: 'Sweet Soup',
        subtitle: 'Chè',
        description: 'Vietnamese sweet soups served warm or cold — coconut milk, mung beans, lotus seeds, and tropical fruits.',
        heroImage: '/images/recipes/che-buoi-mien-nam.jpg',
    },
    grilled: {
        slug: 'grilled',
        category: 'Grilled',
        title: 'Grilled',
        subtitle: 'Nướng',
        description: 'Charcoal smoke, lemongrass marinades, and caramelized edges — the soul of Vietnamese street cooking.',
        heroImage: '/images/recipes/bun-thit-nuong.jpg',
    },
}

export const CATEGORY_SLUGS = Object.keys(CATEGORY_MAP)