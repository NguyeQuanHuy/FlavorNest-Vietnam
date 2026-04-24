'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-kho-to',
    title: 'Clay Pot Caramelised Fish',
    subtitle:
        'Cá Kho Tộ — thick catfish fillets lacquered in a near-black caramel of fish sauce, ginger and cracked pepper, braised in the earthenware pot that gives the dish its name.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=1600&q=80',
    intro:
        'Cá kho tộ is the Mekong Delta on a plate — a dish born from preservation, perfected by patience. The clay pot (tộ) retains heat long after the stove is off, letting the fish continue to drink the caramel right up to the moment it hits the table. It arrives still bubbling; the smell alone stops conversation.',
    ingredientSections: [
        {
            title: 'Fish and aromatics',
            items: [
                { amount: 600, unit: 'g', name: 'catfish or basa fillets', note: 'cut in 3cm chunks, bone-in if possible' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 20, unit: 'g', name: 'young ginger', note: 'julienned' },
                { amount: 2, name: 'bird\'s eye chillies', note: 'sliced' },
            ],
        },
        {
            title: 'Braising liquid',
            items: [
                { amount: 60, unit: 'g', name: 'palm sugar' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'pork fat or neutral oil' },
                { amount: 200, unit: 'ml', name: 'coconut water' },
                { amount: 1, unit: 'tsp', name: 'freshly cracked black pepper' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 600, unit: 'g', name: 'steamed jasmine rice' },
                { amount: 2, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the fish',
            description: 'TODO — marinate fish with half the shallots, garlic, fish sauce, pepper; rest 20 minutes.',
            tip: 'TODO',
        },
        {
            title: 'Build the caramel',
            description: 'TODO — melt palm sugar in the clay pot until dark amber.',
        },
        {
            title: 'Bloom the aromatics',
            description: 'TODO — add pork fat, remaining shallots, garlic, ginger and chilli; fry until fragrant.',
        },
        {
            title: 'Sear the fish',
            description: 'TODO — lay fish in a single layer, sear one side.',
            tip: 'TODO — do not flip more than once or the fillets will break.',
        },
        {
            title: 'Braise low and slow',
            description: 'TODO — add coconut water to halfway; simmer covered 25 minutes.',
        },
        {
            title: 'Reduce and serve bubbling',
            description: 'TODO — uncover, reduce until sauce clings like varnish; scatter spring onion; bring to table still sizzling.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
