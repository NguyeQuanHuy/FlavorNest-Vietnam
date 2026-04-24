'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-chua-ca',
    title: 'Southern Sour Fish Soup',
    subtitle:
        'Canh Chua Cá — a bright Mekong broth soured with tamarind, sweetened with pineapple, and finished with rice paddy herb and fried garlic.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.8,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?w=1600&q=80',
    intro:
        'Canh chua is the Mekong Delta\'s signature — a soup built on paradox. Sour and sweet at once, hot and cooling, humble ingredients made fragrant by a single herb no one outside Vietnam seems to know: rau om, rice paddy herb. It is the soup that turns an ordinary weekday dinner into a proper meal.',
    ingredientSections: [
        {
            title: 'Broth base',
            items: [
                { amount: 1.5, unit: 'L', name: 'water or light fish stock' },
                { amount: 60, unit: 'g', name: 'tamarind pulp', note: 'soaked in 200ml hot water, strained' },
                { amount: 200, unit: 'g', name: 'pineapple', note: 'cut in wedges' },
                { amount: 3, name: 'tomatoes', note: 'cut in wedges' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
            ],
        },
        {
            title: 'Fish and vegetables',
            items: [
                { amount: 500, unit: 'g', name: 'catfish or snakehead fillets', note: 'cut in 3cm chunks' },
                { amount: 150, unit: 'g', name: 'bean sprouts' },
                { amount: 6, name: 'okra pods', note: 'sliced' },
                { amount: 100, unit: 'g', name: 'elephant ear stems (bạc hà)', note: 'peeled, sliced' },
            ],
        },
        {
            title: 'Finish',
            items: [
                { amount: 1, name: 'bunch rice paddy herb (rau om)', note: 'chopped' },
                { amount: 1, name: 'bunch sawtooth herb', note: 'chopped' },
                { amount: 4, name: 'garlic cloves', note: 'sliced and fried golden' },
                { amount: 2, name: 'bird\'s eye chillies', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the tamarind',
            description: 'TODO — soak tamarind in hot water 10 minutes, mash, strain through sieve. Discard seeds and fibre.',
        },
        {
            title: 'Build the sour broth',
            description: 'TODO — bring water to simmer, add tamarind liquid, pineapple, fish sauce and sugar. Simmer 10 minutes.',
            tip: 'TODO — taste now. The broth should taste noticeably sour; the fish will mellow it.',
        },
        {
            title: 'Add the hardier vegetables',
            description: 'TODO — add tomato wedges and elephant ear stems; simmer 3 minutes.',
        },
        {
            title: 'Poach the fish',
            description: 'TODO — slide fish into simmering broth; cook 4 minutes until just opaque. Do not boil.',
            tip: 'TODO — a hard boil breaks the fillets. Keep it at a lazy bubble.',
        },
        {
            title: 'Add okra and bean sprouts',
            description: 'TODO — off heat, add okra and bean sprouts; residual heat cooks them to just-tender.',
        },
        {
            title: 'Finish with herbs and fried garlic',
            description: 'TODO — shower rice paddy herb, sawtooth herb, fried garlic and chilli; serve with steamed rice on the side.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
