'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-beo-phu-yen',
    title: 'Phu Yen Steamed Rice Cakes (Bánh Bèo Phú Yên)',
    subtitle:
        'Bánh Bèo Phú Yên — dainty, warm steamed rice cakes served in individual ceramic saucers, topped with savory shrimp flakes, crispy bread, and fragrant chive oil.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-beo-phu-yen.jpg',
    intro:
        'While Bánh Bèo is famous across Vietnam, the version from the coastal province of Phú Yên has a soulful, rustic charm. Unlike the cold, firm versions elsewhere, Bánh Bèo Phú Yên is best enjoyed steaming hot. Each tiny saucer holds a silky, melt-in-your-mouth rice cake topped with "chà bông" (pork floss) or toasted shrimp flakes, but the defining feature is the generous drizzle of hẹ (chive) oil instead of the usual scallion oil. It’s a delicate balance of earthy rice, savory toppings, and a light, spicy-sweet dipping sauce.',
    ingredientSections: [
        {
            title: 'Rice Cake Batter',
            items: [
                { amount: 200, unit: 'g', name: 'rice flour' },
                { amount: 20, unit: 'g', name: 'tapioca starch', note: 'for a slight chewiness' },
                { amount: 300, unit: 'ml', name: 'room temperature water' },
                { amount: 300, unit: 'ml', name: 'boiling water' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 100, unit: 'g', name: 'dried shrimp', note: 'soaked and finely pulsed' },
                { amount: 50, unit: 'g', name: 'pork floss (chà bông)' },
                { amount: 1, unit: 'cup', name: 'fresh chives', note: 'finely chopped' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil' },
                { amount: 1, unit: 'slice', name: 'bread', note: 'diced and fried into croutons' },
            ],
        },
        {
            title: 'Sweet Fish Sauce',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 10, unit: 'tbsp', name: 'warm water' },
                { amount: 1, unit: 'tsp', name: 'minced chili and garlic' },
            ],
        },
    ],
    steps: [
        {
            title: 'Mix the batter',
            description: 'Combine rice flour, tapioca starch, and salt with room temperature water. Stir well, then slowly whisk in the boiling water. Let the batter rest for at least 30 minutes.',
            tip: 'Letting the batter rest allows the flour to fully hydrate, resulting in a smoother, silkier cake texture.',
        },
        {
            title: 'Prepare the toppings',
            description: 'Sauté the pulsed dried shrimp in a pan until dry and fluffy. For the chive oil, heat oil until shimmering and pour it over the freshly chopped chives.',
        },
        {
            title: 'Steam the cakes',
            description: 'Place empty ceramic saucers in a steamer for 2 minutes to get them hot. Stir the batter and pour a thin layer into each saucer. Steam on high heat for 6–8 minutes.',
            tip: 'A hot saucer ensures the cake doesn’t stick and creates a slight "dimple" in the center to hold the sauce.',
        },
        {
            title: 'Make the dipping sauce',
            description: 'Dissolve sugar in warm water, add fish sauce and lime juice. The sauce for Bánh Bèo Phú Yên should be light and dilute, not overly salty.',
        },
        {
            title: 'Assemble',
            description: 'While the cakes are still hot in their saucers, add a drizzle of chive oil, a sprinkle of shrimp flakes, pork floss, and a few crispy bread croutons.',
        },
        {
            title: 'Serve',
            description: 'Serve the saucers on a large tray. Use a small bamboo paddle or spoon to loosen the cake, drizzle a little fish sauce over the top, and eat in one bite.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
