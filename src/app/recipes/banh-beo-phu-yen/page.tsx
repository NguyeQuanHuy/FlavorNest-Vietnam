'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-beo',
    title: 'Sweet Leaf Soup with Minced Pork',
    subtitle:
        'Canh Rau Ngót Thịt Băm — a clear jade-green broth with bruised sweet leaves and tender flecks of minced pork, ready in twenty minutes.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/banh-beo-phu-yen.jpg',
    intro:
        'Rau ngót is one of those vegetables that never made it out of Vietnam, which is a shame — the leaves carry a mild, almost nutty sweetness that turns a plain pork broth into something quietly special. This is the Northern soup that appears on the table at least twice a week, not because it is celebrated, but because it is dependable: cooling in summer, nourishing in winter, and done in the time it takes to cook rice.',
    ingredientSections: [
        {
            title: 'Broth and pork',
            items: [
                { amount: 1.2, unit: 'L', name: 'water or light pork stock' },
                { amount: 200, unit: 'g', name: 'minced pork', note: '20% fat' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sea salt' },
                { amount: 0.25, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Sweet leaves',
            items: [
                { amount: 300, unit: 'g', name: 'sweet leaf (rau ngót)', note: 'stripped from stems, bruised by hand' },
            ],
        },
        {
            title: 'Finish',
            items: [
                { amount: 1, unit: 'tsp', name: 'neutral oil' },
                { amount: 0.25, unit: 'tsp', name: 'freshly cracked black pepper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the Batter',
            description: 'In a large bowl, mix the rice flour, tapioca starch, and salt. Slowly pour in the water while stirring constantly until the mixture is smooth and there are no lumps. Let the batter rest for at least 30 minutes to ensure the cakes are soft and chewy.',
            tip: 'The Specific Move: You must get the ceramic bowls searing hot before pouring the batter. This "heat shock" forces the batter to cook from the edges inward, creating that perfect indentation to hold your sauce.',
        },
        {
            title: 'Prep the Toppings',
            description: 'While the batter rests, sauté minced scallions in hot oil to make mỡ hành. For the signature Phu Yen crunch, toast small cubes of dried bread in a pan with a little oil until golden brown and crispy',
        },
        {
            title: 'Heat the Bowls',
            description: 'Place small ceramic bowls (chén bèo) into a steamer. Cover and steam the empty bowls for about 3-5 minutes. Pro tip: Heating the bowls first prevents the batter from sticking and helps the cakes cook evenly.',
            tip: 'The Specific Move: Before heating the bowls, use a brush to apply a very thin layer of cooking oil to the inside of each bowl. This ensures the cakes slide out easily when you eat.',
        },
        {
            title: 'Steam the Cakes',
            description: 'Stir the batter again. Open the steamer and quickly pour the batter into each hot bowl (fill about 1/3 of the bowl). Cover and steam over high heat for 5–8 minutes until the cakes turn opaque and firm.',
        },
        {
            title: 'Make the Sweet & Spicy Sauce',
            description: 'Combine fish sauce, warm water, and sugar in a ratio of 1:2:1. Stir until the sugar dissolves, then add lime juice, minced garlic, and bird&apos;s eye chili. The sauce should be light, savory, and slightly sweet.',
        },
        {
            title: 'Garnish and Serve',
            description: 'Let the bowls cool slightly (they firm up as they cool). Add the scallion oil, a pinch of dried shrimp, and the crispy breadcrumbs. Serve with the spicy fish sauce on the side.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
