'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'dau-hu-sot-ca',
    title: 'Tofu in Tomato Sauce',
    subtitle:
        'Đậu Hũ Sốt Cà — golden-fried tofu simmered in a sweet-savoury tomato and spring onion sauce.',
    category: 'VEGETARIAN',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.7,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1600&q=80',
    intro:
        'Đậu sốt cà is the dish that converts tofu sceptics. The secret is treating it like meat — fried hard first so the outside turns custardy-crisp, then simmered just long enough to drink in the tomato sauce without going soggy. In Northern families it is on the table at least once a week, often without anyone planning it.',
    ingredientSections: [
        {
            title: 'Tofu',
            items: [
                { amount: 500, unit: 'g', name: 'firm tofu', note: 'cut in 3cm cubes, patted dry' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'for frying' },
                { amount: 0.5, unit: 'tsp', name: 'sea salt' },
            ],
        },
        {
            title: 'Tomato sauce',
            items: [
                { amount: 5, name: 'ripe tomatoes', note: 'cut in wedges' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce', note: 'or fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 100, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tsp', name: 'tomato paste' },
            ],
        },
        {
            title: 'Finish',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 0.5, unit: 'tsp', name: 'cracked black pepper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Press and dry the tofu',
            description: 'TODO — sandwich tofu between towels under a plate for 15 minutes.',
            tip: 'TODO — wet tofu never crisps.',
        },
        {
            title: 'Fry to golden crust',
            description: 'TODO — fry cubes in hot oil 2 minutes per side; drain on paper.',
        },
        {
            title: 'Soften the shallots',
            description: 'TODO — in the same pan, fry shallots and garlic until fragrant.',
        },
        {
            title: 'Collapse the tomatoes',
            description: 'TODO — add tomato wedges, paste, soy, sugar; cook until saucy, ~7 minutes.',
        },
        {
            title: 'Return the tofu',
            description: 'TODO — fold tofu into sauce; simmer 3 minutes so it drinks the flavour.',
            tip: 'TODO — longer than 5 minutes and the crust dissolves.',
        },
        {
            title: 'Scatter and serve',
            description: 'TODO — spring onion, black pepper, serve over rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
