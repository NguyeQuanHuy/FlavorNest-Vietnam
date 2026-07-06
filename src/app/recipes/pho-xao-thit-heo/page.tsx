'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-pho-xao-thit-heo',
    title: 'Stir-fried Rice Noodles with Pork (Banh Pho Xao Thit Heo)',
    subtitle: 'Soft rice noodles stir-fried with pork, garlic, and soy-based sauce — smoky, savory, and comforting.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '25 min',
    rating: 4.8,
    baseServings: 2,
    heroImage: '/images/recipes/banh-pho-xao-thit-heo.jpg',

    intro: `Bánh phở xào thịt heo is a simple Vietnamese stir-fried noodle dish made with flat rice noodles, pork, and a savory sauce.

The dish is known for its smoky wok aroma, soft noodles, and juicy pork slices coated in a rich, slightly sweet-savory sauce.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 250, unit: 'g', name: 'flat rice noodles (bánh phở)' },
                { amount: 200, unit: 'g', name: 'pork shoulder or loin', note: 'thinly sliced' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'onion', note: 'sliced' },
                { amount: 100, unit: 'g', name: 'vegetables', note: 'bok choy or cabbage' },
            ],
        },
        {
            title: 'Sauce',
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
            tip: 'Let noodles dry slightly to prevent sticking when stir-frying.',
        },
        {
            title: 'Marinate pork',
            description: 'Mix pork with soy sauce, oyster sauce, fish sauce, and sugar. Let rest 10 minutes.',
        },
        {
            title: 'Heat wok',
            description: 'Heat oil in a wok until very hot for proper stir-fry aroma.',
        },
        {
            title: 'Cook pork',
            description: 'Stir-fry pork on high heat until just cooked and slightly caramelized.',
        },
        {
            title: 'Add aromatics',
            description: 'Add garlic and onion, stir until fragrant.',
        },
        {
            title: 'Stir-fry noodles',
            description: 'Add noodles and toss with sauce until evenly coated.',
            tip: 'High heat creates the signature smoky “wok aroma”.',
        },
        {
            title: 'Finish',
            description: 'Add vegetables, toss quickly, and serve hot.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
