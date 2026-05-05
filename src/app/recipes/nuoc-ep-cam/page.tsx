'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nuoc-ep-cam',
    title: 'Freshly Squeezed Orange Juice (Nước Cam Ép)',
    subtitle:
        'Freshly Squeezed Orange Juice — a refreshing, vitamin-packed glass of pure sunshine, balanced with a hint of sweetness and a pinch of salt.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '5 min',
    rating: 4.8,
    baseServings: 2,
    heroImage: '/images/recipes/nuoc-ep-cam.jpg',
    intro:
        'In Vietnam, "Orange Juice" is more than just a breakfast drink; it is the ultimate pick-me-up served at every street-side cafe. Traditionally made with the local "Cam Sành" (King Orange)—known for its dark, bumpy green skin and deep orange interior—this juice is prized for its bold acidity and intense aroma. Whether you enjoy it pure or over a tall glass of ice, it is the perfect antidote to a humid afternoon.',
    ingredientSections: [
        {
            title: 'Main Ingredients',
            items: [
                { amount: 4, unit: 'large', name: 'fresh oranges', note: 'preferably King Oranges (Cam Sành) or Valencia' },
                { amount: 1, unit: 'tbsp', name: 'granulated sugar', note: 'or honey, adjust to taste' },
                { amount: 1, unit: 'pinch', name: 'sea salt', note: 'to enhance the natural citrus flavor' },
            ],
        },
        {
            title: 'Serving',
            items: [
                { amount: 1, unit: 'cup', name: 'crushed ice' },
                { amount: 2, unit: 'slices', name: 'fresh orange', note: 'for garnish' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the oranges',
            description: 'Roll the oranges firmly against the counter with your palm to loosen the juice sacs. Cut them in half horizontally.',
            tip: 'Rolling the fruit makes it much easier to extract every last drop of juice.',
        },
        {
            title: 'Extract the juice',
            description: 'Using a manual citrus press or an electric juicer, squeeze the halves to collect the juice in a pitcher. Strain if you prefer a smooth juice, or keep the pulp for texture.',
        },
        {
            title: 'Season the juice',
            description: 'Stir in the sugar (or honey) and a tiny pinch of salt until completely dissolved.',
            tip: 'A tiny pinch of salt is the secret "local" trick to neutralizing excessive bitterness and making the sweetness pop.',
        },
        {
            title: 'Chill and serve',
            description: 'Fill two tall glasses with ice. Pour the fresh juice over the top, garnish with an orange slice, and enjoy immediately while the vitamin C is at its peak.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
