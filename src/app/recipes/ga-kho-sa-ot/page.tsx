'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-kho-sa-ot',
    title: 'Lemongrass Chilli Chicken',
    subtitle:
        'Gà Kho Sả Ớt — chicken thighs braised with a small mountain of minced lemongrass and bird\'s eye chilli until the sauce clings like glaze.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=1600&q=80',
    intro:
        'Central Vietnamese cooking has its own devoted following, and this is one of the dishes that explains why. Where the Northern gà kho gừng leans on ginger and restraint, the Central version turns up every dial: more lemongrass, more chilli, more fish sauce, cooked down until the sauce is almost a paste. The kitchen ends up smelling like a Hue market at sunrise.',
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 800, unit: 'g', name: 'bone-in chicken thighs', note: 'cut in 4cm pieces' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'palm sugar' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder', note: 'optional, for colour' },
            ],
        },
        {
            title: 'Aromatics',
            items: [
                { amount: 6, name: 'lemongrass stalks', note: 'white part, finely minced' },
                { amount: 6, name: 'bird\'s eye chillies', note: 'minced, adjust to taste' },
                { amount: 5, name: 'shallots', note: 'minced' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Finish',
            items: [
                { amount: 2, name: 'spring onions', note: 'sliced' },
                { amount: 1, unit: 'tsp', name: 'freshly cracked black pepper' },
                { amount: 600, unit: 'g', name: 'steamed jasmine rice', note: 'to serve' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the chicken',
            description: 'TODO — combine chicken with fish sauce, palm sugar, turmeric, pepper and half the lemongrass; rest 30 minutes.',
        },
        {
            title: 'Bloom the aromatics',
            description: 'TODO — oil in a heavy pot, add shallots, garlic, remaining lemongrass and chilli; fry 2 minutes until kitchen smells loud.',
            tip: 'TODO — this is where you decide the heat of the final dish. Taste a strand of lemongrass now.',
        },
        {
            title: 'Sear the chicken',
            description: 'TODO — add marinated chicken skin-down; let it catch deep colour before stirring, 3 minutes.',
        },
        {
            title: 'Reduce slowly',
            description: 'TODO — add 200ml water, cover loosely, simmer 20 minutes turning once.',
        },
        {
            title: 'Reduce to glaze',
            description: 'TODO — uncover, raise heat, reduce another 5 minutes until sauce is syrupy and coats every piece.',
            tip: 'TODO — stop the moment the sauce clings. Any longer and it turns to paste.',
        },
        {
            title: 'Finish and serve',
            description: 'TODO — crack pepper, scatter spring onion, serve over hot rice with a simple clear soup on the side.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
