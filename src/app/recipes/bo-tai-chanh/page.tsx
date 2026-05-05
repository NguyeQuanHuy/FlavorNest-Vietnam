'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-tai-chanh',
    title: 'Lime Rare Beef Salad (Bo Tai Chanh)',
    subtitle: 'Thinly sliced beef “cooked” in lime juice, mixed with herbs, onions, and peanuts — fresh, tangy, and aromatic.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 3,
    heroImage: '/images/recipes/bo-tai-chanh.jpg',

    intro: `Bò tái chanh is a traditional Vietnamese dish made from thinly sliced raw beef that is “cooked” using lime juice.

The acidity of lime changes the texture of the beef, creating a tender, slightly tangy flavor. Combined with herbs, onions, and peanuts, the dish is refreshing, aromatic, and often served as an appetizer or drinking snack.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 300, unit: 'g', name: 'beef sirloin', note: 'very thinly sliced' },
                { amount: 3, name: 'lemons or limes', note: 'juiced' },
                { amount: 1, name: 'red onion', note: 'thinly sliced' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
            ],
        },
        {
            title: 'Herbs & toppings',
            items: [
                { amount: 1, name: 'mint leaves' },
                { amount: 1, name: 'cilantro' },
                { amount: 2, unit: 'tbsp', name: 'roasted peanuts', note: 'crushed' },
                { amount: 1, name: 'chili', note: 'sliced' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'pinch', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare beef',
            description: 'Slice beef as thinly as possible for quick “cooking” in lime juice.',
            tip: 'Chill beef slightly for easier slicing.',
        },
        {
            title: 'Marinate with lime',
            description: 'Pour lime juice over beef and mix well until it changes color slightly.',
        },
        {
            title: 'Prepare onions',
            description: 'Soak sliced onions in ice water to reduce sharpness.',
        },
        {
            title: 'Mix ingredients',
            description: 'Combine beef, onions, garlic, herbs, fish sauce, sugar, salt, and pepper.',
        },
        {
            title: 'Add herbs',
            description: 'Toss in mint and cilantro for freshness.',
        },
        {
            title: 'Finish',
            description: 'Top with crushed peanuts and chili before serving.',
        },
        {
            title: 'Serve',
            description: 'Serve immediately as an appetizer or with rice crackers.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
