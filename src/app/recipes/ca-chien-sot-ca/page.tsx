'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-chien-sot-ca',
    title: 'Crispy Fish in Tomato Sauce',
    subtitle:
        'Cá Chiên Sốt Cà — a whole pan-fried fish with shattering-crisp skin, bathed in a bright tomato-scallion-dill sauce.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.6,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=1600&q=80',
    intro:
        'Cá sốt cà is the quiet hero of the Northern home kitchen — the kind of dish you never see in restaurants because every grandmother already makes it on a Tuesday. The contrast is everything: shattering-crisp skin against the bright, almost Italian-feeling tomato sauce, both cooled by a final shower of fresh dill.',
    ingredientSections: [
        {
            title: 'Fish',
            items: [
                { amount: 1, name: 'whole pomfret or sea bass, ~700g', note: 'scored on both sides' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'for frying' },
            ],
        },
        {
            title: 'Tomato sauce',
            items: [
                { amount: 5, name: 'ripe tomatoes', note: 'chopped' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 100, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tbsp', name: 'tomato paste', note: 'optional, for depth' },
            ],
        },
        {
            title: 'Finish',
            items: [
                { amount: 3, name: 'spring onions', note: 'cut in 4cm batons' },
                { amount: 1, name: 'small bunch of dill', note: 'chopped' },
                { amount: 0.5, unit: 'tsp', name: 'freshly cracked black pepper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Dry and season the fish',
            description: 'TODO — pat fish completely dry; rub salt and turmeric inside the score marks.',
            tip: 'TODO — wet fish + hot oil = a steam explosion. Dry the fish twice.',
        },
        {
            title: 'Fry to golden',
            description: 'TODO — fry in hot oil 5 minutes per side until skin is shattering-crisp. Remove and rest on rack.',
        },
        {
            title: 'Build the sauce base',
            description: 'TODO — in the same pan, fry shallots and garlic in remaining oil.',
        },
        {
            title: 'Break down the tomatoes',
            description: 'TODO — add tomatoes, fish sauce, sugar; simmer until they collapse into a sauce, ~10 minutes.',
        },
        {
            title: 'Return the fish to the sauce',
            description: 'TODO — nestle fish in, spoon sauce over; simmer 3 minutes to marry.',
        },
        {
            title: 'Shower with dill and scallion',
            description: 'TODO — off heat, scatter spring onion and dill; crack pepper over the top; serve with rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
