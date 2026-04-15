// ─────────────────────────────────────────────────────────────────────────────
//  data/recipes.ts
//  FlavorNest Vietnam — Master recipe catalogue
//
//  EASY TO SCALE:
//    - Add new recipes by appending to RECIPES array
//    - Add new categories to CATEGORIES array
//    - The recipes page reads directly from here (no API needed)
//    - In production: replace this file with a CMS/DB fetch
// ─────────────────────────────────────────────────────────────────────────────

// ── Types ─────────────────────────────────────────────────────────────────
export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export type Category =
    | 'All'
    | 'Soup'
    | 'Noodles'
    | 'Street Food'
    | 'Rice'
    | 'Grilled'
    | 'Rolls'
    | 'Dessert'
    | 'Vegetarian'

export interface Recipe {
    slug: string
    title: string
    subtitle: string        // Vietnamese name
    shortDescription: string
    image: string        // Unsplash URL
    imageAlt: string
    prepTime: string
    cookTime: string
    totalTime: string
    servings: number
    difficulty: Difficulty
    category: Exclude<Category, 'All'>
    rating: number        // 1–5
    ratingCount: number
    tags: string[]
    isFeatured?: boolean
    isNew?: boolean
    calories?: number
}

// ── Categories (for filter chips) ────────────────────────────────────────
export const CATEGORIES: Category[] = [
    'All', 'Soup', 'Noodles', 'Street Food',
    'Rice', 'Grilled', 'Rolls', 'Dessert', 'Vegetarian',
]

// ── Recipe data ────────────────────────────────────────────────────────────
export const RECIPES: Recipe[] = [

    // ── 1. Hanoi Beef Pho ───────────────────────────────────────────────────
    {
        slug: 'hanoi-beef-pho',
        title: 'Hanoi Beef Pho',
        subtitle: 'Phở Bò Hà Nội',
        shortDescription: 'A crystal-clear bone broth simmered for hours with charred ginger and star anise — the soul of Vietnamese cuisine in one perfect bowl.',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Steaming bowl of Hanoi beef pho with fresh herbs',
        prepTime: '20 min',
        cookTime: '3 hrs',
        totalTime: '3 hrs 20 min',
        servings: 4,
        difficulty: 'Medium',
        category: 'Soup',
        rating: 4.9,
        ratingCount: 324,
        tags: ['Hanoi Classic', 'Gluten Free'],
        isFeatured: true,
        calories: 420,
    },

    // ── 2. Bun Cha Hanoi ────────────────────────────────────────────────────
    {
        slug: 'bun-cha-hanoi',
        title: 'Hanoi Grilled Pork Vermicelli',
        subtitle: 'Bún Chả Hà Nội',
        shortDescription: 'Smoky chargrilled pork patties in a tangy warm broth, paired with cool rice vermicelli and a mountain of fresh herbs.',
        image: 'https://images.unsplash.com/photo-1742893368398-128bded9c656?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Bun Cha Hanoi with grilled pork and herbs',
        prepTime: '20 min',
        cookTime: '25 min',
        totalTime: '45 min',
        servings: 4,
        difficulty: 'Easy',
        category: 'Noodles',
        rating: 4.8,
        ratingCount: 218,
        tags: ['Trending', 'Hanoi Classic'],
        isFeatured: true,
        calories: 510,
    },

    // ── 3. Vietnamese Banh Mi ───────────────────────────────────────────────
    {
        slug: 'banh-mi',
        title: 'Bánh Mì',
        subtitle: 'Bánh Mì Thịt Nướng',
        shortDescription: 'A shatteringly crispy baguette loaded with lemongrass-grilled pork, silky pâté, pickled daikon, jalapeño and Maggi mayo.',
        image: 'https://images.unsplash.com/photo-1677354469642-3e4fc5dbbb4a?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Vietnamese banh mi sandwich cut in half',
        prepTime: '25 min',
        cookTime: '15 min',
        totalTime: '40 min',
        servings: 4,
        difficulty: 'Easy',
        category: 'Street Food',
        rating: 4.9,
        ratingCount: 412,
        tags: ['Street Food', 'Quick & Easy'],
        isFeatured: true,
        calories: 580,
    },

    // ── 4. Fresh Spring Rolls ───────────────────────────────────────────────
    {
        slug: 'fresh-spring-rolls',
        title: 'Fresh Shrimp & Pork Spring Rolls',
        subtitle: 'Gỏi Cuốn Tôm Thịt',
        shortDescription: 'Translucent rice paper filled with poached shrimp, pork belly, vermicelli and garden herbs — served with creamy peanut dipping sauce.',
        image: 'https://images.unsplash.com/photo-1602375850899-c389c4a0fc70?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Fresh Vietnamese spring rolls on a plate',
        prepTime: '30 min',
        cookTime: '15 min',
        totalTime: '45 min',
        servings: 4,
        difficulty: 'Easy',
        category: 'Rolls',
        rating: 4.7,
        ratingCount: 189,
        tags: ['Healthy', 'No-Cook Option'],
        calories: 290,
    },

    // ── 5. Crispy Banh Xeo ──────────────────────────────────────────────────
    {
        slug: 'banh-xeo',
        title: 'Crispy Vietnamese Sizzling Pancake',
        subtitle: 'Bánh Xèo',
        shortDescription: 'A golden turmeric crêpe sizzling with shrimp, pork and bean sprouts — wrapped in lettuce with fresh herbs and dipped in nước chấm.',
        image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Crispy golden Banh Xeo Vietnamese pancake',
        prepTime: '20 min',
        cookTime: '20 min',
        totalTime: '40 min',
        servings: 4,
        difficulty: 'Easy',
        category: 'Street Food',
        rating: 4.8,
        ratingCount: 156,
        tags: ['Central Vietnam', 'Gluten Free'],
        isNew: true,
        calories: 390,
    },

    // ── 6. Vietnamese Chicken Pho ───────────────────────────────────────────
    {
        slug: 'vietnamese-chicken-pho',
        title: 'Vietnamese Chicken Pho',
        subtitle: 'Phở Gà',
        shortDescription: 'A silky golden broth perfumed with ginger and star anise, topped with tender shredded chicken and silky rice noodles.',
        image: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Bowl of Vietnamese chicken pho with clear broth and herbs',
        prepTime: '15 min',
        cookTime: '2 hrs',
        totalTime: '2 hrs 15 min',
        servings: 4,
        difficulty: 'Easy',
        category: 'Soup',
        rating: 4.9,
        ratingCount: 267,
        tags: ['Lighter Option', 'Gluten Free'],
        isNew: true,
        calories: 380,
    },

    // ── 7. Bun Rieu ─────────────────────────────────────────────────────────
    {
        slug: 'bun-rieu',
        title: 'Crab & Tomato Vermicelli Soup',
        subtitle: 'Bún Riêu Cua',
        shortDescription: 'A vibrant scarlet broth of fried tomatoes and fluffy crab-and-pork dumplings, loaded with tofu and a wild herb plate.',
        image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Bun Rieu crab tomato soup',
        prepTime: '30 min',
        cookTime: '50 min',
        totalTime: '1 hr 20 min',
        servings: 4,
        difficulty: 'Medium',
        category: 'Soup',
        rating: 4.8,
        ratingCount: 143,
        tags: ['Bold Flavour', 'Southern Favourite'],
        calories: 450,
    },

    // ── 8. Com Tam ──────────────────────────────────────────────────────────
    {
        slug: 'com-tam',
        title: 'Saigon Broken Rice Plate',
        subtitle: 'Cơm Tấm Sài Gòn',
        shortDescription: 'Nutty broken jasmine rice topped with a lacquered grilled pork chop, runny fried egg, pickled veg and fragrant spring-onion oil.',
        image: 'https://images.unsplash.com/photo-1558030137-a56c1b004fa3?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Saigon broken rice plate with pork chop',
        prepTime: '15 min',
        cookTime: '20 min',
        totalTime: '35 min',
        servings: 4,
        difficulty: 'Easy',
        category: 'Rice',
        rating: 4.9,
        ratingCount: 381,
        tags: ['Saigon Classic', 'All Day'],
        isFeatured: true,
        calories: 620,
    },

    // ── 9. Lemongrass Pork Chops ────────────────────────────────────────────
    {
        slug: 'grilled-lemongrass-pork',
        title: 'Grilled Lemongrass Pork Chops',
        subtitle: 'Sườn Nướng Sả',
        shortDescription: 'Pork chops marinated overnight in lemongrass, fish sauce and five-spice — grilled until deeply caramelised and served over broken rice.',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Grilled lemongrass pork chops on a plate',
        prepTime: '15 min',
        cookTime: '12 min',
        totalTime: '30 min (+ overnight marinade)',
        servings: 4,
        difficulty: 'Easy',
        category: 'Grilled',
        rating: 4.9,
        ratingCount: 295,
        tags: ['Weekend Favourite', 'Smoky'],
        calories: 520,
    },

    // ── 10. Vietnamese Coffee Tiramisu ──────────────────────────────────────
    {
        slug: 'vietnamese-coffee-tiramisu',
        title: 'Vietnamese Coffee Tiramisu',
        subtitle: 'Tiramisù Cà Phê Sữa Đá',
        shortDescription: 'Cà phê sữa đá meets Italian tiramisu — condensed-milk mascarpone, robusta-soaked ladyfingers and a pinch of sea salt.',
        image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Vietnamese coffee tiramisu in a glass',
        prepTime: '20 min',
        cookTime: '0 min',
        totalTime: '20 min (+ 4 hrs chill)',
        servings: 6,
        difficulty: 'Medium',
        category: 'Dessert',
        rating: 4.9,
        ratingCount: 203,
        tags: ['Fusion', 'No-Bake', 'Coffee'],
        isNew: true,
        calories: 480,
    },

    // ── 11. Mango Sticky Rice ────────────────────────────────────────────────
    {
        slug: 'mango-sticky-rice',
        title: 'Sweet Mango Sticky Rice',
        subtitle: 'Xôi Xoài',
        shortDescription: 'Glutinous rice cooked in fragrant coconut milk, topped with ripe Ataulfo mango slices and a silky salted coconut cream.',
        image: 'https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Mango sticky rice with coconut cream',
        prepTime: '10 min',
        cookTime: '30 min',
        totalTime: '40 min (+ 1 hr soak)',
        servings: 4,
        difficulty: 'Easy',
        category: 'Dessert',
        rating: 4.8,
        ratingCount: 174,
        tags: ['Tropical', 'Naturally Vegan'],
        calories: 420,
    },

    // ── 12. Vegetarian Pho ───────────────────────────────────────────────────
    {
        slug: 'vegetarian-pho',
        title: 'Mushroom & Tofu Vegetarian Pho',
        subtitle: 'Phở Chay',
        shortDescription: 'A deeply savoury mushroom-kombu broth perfumed with the classic pho spices — every bit as aromatic as the original, entirely plant-based.',
        image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&w=800&q=80',
        imageAlt: 'Vegetarian pho with tofu and mushrooms',
        prepTime: '20 min',
        cookTime: '1 hr',
        totalTime: '1 hr 20 min',
        servings: 4,
        difficulty: 'Easy',
        category: 'Vegetarian',
        rating: 4.7,
        ratingCount: 132,
        tags: ['Vegan', 'Plant-Based', 'Gluten Free'],
        calories: 310,
    },
]

// ── Helper utilities ───────────────────────────────────────────────────────

/** All recipes sorted: featured first, then by rating desc */
export const SORTED_RECIPES = [...RECIPES].sort((a, b) => {
    if (a.isFeatured && !b.isFeatured) return -1
    if (!a.isFeatured && b.isFeatured) return 1
    return b.rating - a.rating
})

/** Filter by category */
export function filterByCategory(recipes: Recipe[], cat: Category): Recipe[] {
    if (cat === 'All') return recipes
    return recipes.filter(r => r.category === cat)
}

/** Filter by search query (title, subtitle, description, tags) */
export function filterByQuery(recipes: Recipe[], q: string): Recipe[] {
    if (!q.trim()) return recipes
    const lower = q.toLowerCase()
    return recipes.filter(r =>
        r.title.toLowerCase().includes(lower) ||
        r.subtitle.toLowerCase().includes(lower) ||
        r.shortDescription.toLowerCase().includes(lower) ||
        r.tags.some(t => t.toLowerCase().includes(lower))
    )
}

/** Get a single recipe by slug (for detail page) */
export function getRecipeBySlug(slug: string): Recipe | undefined {
    return RECIPES.find(r => r.slug === slug)
}

/** Difficulty badge colour mapping (Tailwind-safe full strings) */
export const DIFF_COLORS: Record<Difficulty, string> = {
    Easy: 'bg-[#166534]/10 text-[#166534]',
    Medium: 'bg-[#D97706]/12 text-[#D97706]',
    Hard: 'bg-red-100 text-red-600',
}
export const recipes = RECIPES;
