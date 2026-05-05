'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'pho-xao-bo',
    title: 'Stir-fried Beef Pho (Pho Xao Bo)',
    subtitle: 'Soft rice noodles stir-fried with tender beef, garlic, and soy sauce — smoky, savory, and addictive.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/pho-xao-bo.jpg',

    intro: `Phở xào bò is a popular Vietnamese street-style dish made by stir-frying flat rice noodles with beef and vegetables.

Unlike traditional pho soup, this version is dry and smoky, with noodles coated in a savory sauce and wok aroma. It is quick, filling, and full of umami flavor.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 200, unit: 'g', name: 'flat rice noodles (pho noodles)' },
                { amount: 250, unit: 'g', name: 'beef sirloin', note: 'thinly sliced' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'onion', note: 'sliced' },
                { amount: 100, unit: 'g', name: 'bok choy or leafy greens' },
            ],
        },
        {
            title: 'Marinade & sauce',
            items: [
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'oil' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare noodles',
            description: 'Soak or blanch rice noodles until soft, then drain well.',
            tip: 'Dry noodles slightly before stir-frying to avoid sticking.',
        },
        {
            title: 'Marinate beef',
            description: 'Mix beef with soy sauce, oyster sauce, fish sauce, sugar, and oil. Rest for 10 minutes.',
        },
        {
            title: 'Stir-fry aromatics',
            description: 'Heat oil in a wok and sauté garlic and onion until fragrant.',
        },
        {
            title: 'Cook beef',
            description: 'Stir-fry beef quickly on high heat until just browned. Remove and set aside.',
        },
        {
            title: 'Stir-fry noodles',
            description: 'Add noodles to the wok and toss with sauce until evenly coated.',
            tip: 'High heat creates the signature smoky wok flavor.',
        },
        {
            title: 'Combine',
            description: 'Add beef and vegetables back into the wok and stir-fry for 1–2 minutes.',
        },
        {
            title: 'Serve',
            description: 'Serve hot immediately for best texture and aroma.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
