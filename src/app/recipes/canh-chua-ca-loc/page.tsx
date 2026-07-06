'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-chua-ca-loc',
    title: 'Sour Snakehead Fish Soup (Canh Chua Ca Loc)',
    subtitle: 'Authentic Mekong Delta sour soup with snakehead fish, tamarind, pineapple, and fresh herbs.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/canh-chua-ca-loc.jpg',

    intro: `:contentReference[oaicite:1]{index=1} is a signature dish of Southern Vietnam, especially the Mekong Delta.

Made with snakehead fish (cá lóc), tamarind, pineapple, and fresh herbs, this soup delivers a perfect balance of sour, sweet, and savory flavors. It is light, refreshing, and deeply comforting.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 600, unit: 'g', name: 'snakehead fish (cá lóc)', note: 'cut into chunks' },
                { amount: 1, name: 'pineapple', note: 'sliced' },
                { amount: 2, name: 'tomatoes', note: 'wedged' },
                { amount: 100, unit: 'g', name: 'bean sprouts' },
                { amount: 100, unit: 'g', name: 'okra' },
                { amount: 1, name: 'taro stem or water spinach' },
            ],
        },
        {
            title: 'Broth & seasoning',
            items: [
                { amount: 1, unit: 'tbsp', name: 'tamarind paste' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1.2, unit: 'liter', name: 'water' },
            ],
        },
        {
            title: 'Herbs & finish',
            items: [
                { amount: 1, name: 'rice paddy herb (ngò om)' },
                { amount: 1, name: 'culantro (ngò gai)' },
                { amount: 2, name: 'chilies', note: 'sliced' },
                { amount: 1, unit: 'tbsp', name: 'fried garlic' },
            ],
        },
    ],

    steps: [
        {
            title: 'Make sour broth',
            description: 'Bring water to a boil, add tamarind paste and dissolve completely.',
        },
        {
            title: 'Cook base vegetables',
            description: 'Add pineapple and tomatoes first to build sweetness and acidity.',
        },
        {
            title: 'Add fish',
            description: 'Gently add snakehead fish and simmer until just cooked.',
            tip: 'Do not stir too much to keep fish intact and broth clear.',
        },
        {
            title: 'Add vegetables',
            description: 'Add okra, bean sprouts, and taro stem or water spinach.',
        },
        {
            title: 'Season',
            description: 'Add fish sauce, sugar, and salt. Adjust balance between sour and sweet.',
        },
        {
            title: 'Finish',
            description: 'Add herbs, chili, and fried garlic before turning off heat.',
        },
        {
            title: 'Serve',
            description: 'Serve hot with steamed rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
