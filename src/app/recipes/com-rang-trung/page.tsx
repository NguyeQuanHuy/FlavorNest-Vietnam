'use client';

import RecipeLayout, { RecipeData } from '@/app/recipes/_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-rang-trung',
    title: 'Vietnamese Egg Fried Rice',
    subtitle: 'Cơm Rang Trứng — golden, crispy rice grains coated in rich egg yolks, a simple yet soulful home staple.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.6,
    baseServings: 2,
    heroImage: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=1600&q=80',
    intro: 'Egg fried rice is the ultimate test of a home cook’s patience with a wok. In Vietnam, it’s often made with leftover rice from the night before, which has dried out just enough to achieve that perfect, bouncy texture. The secret lies in high heat and seasoned fish sauce that caramelizes against the grains.',
    ingredientSections: [
        {
            title: 'Rice and Eggs',
            items: [
                { amount: 2, unit: 'bowls', name: 'cold cooked rice', note: 'overnight rice is ideal' },
                { amount: 3, name: 'large eggs', note: 'whisked' },
                { amount: 2, unit: 'stalks', name: 'scallions', note: 'finely chopped' },
            ],
        },
        {
            title: 'Pantry Staples',
            items: [
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 0.25, unit: 'tsp', name: 'white pepper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Separate the grains',
            description: 'Use your hands or a spoon to break up any large clumps of cold rice. Every grain should be separate before hitting the pan.',
        },
        {
            title: 'Sauté the aromatics',
            description: 'Heat oil in a wok until shimmering. Fry the white parts of the scallions until fragrant but not brown.',
        },
        {
            title: 'Toast the rice',
            description: 'Add rice to the wok. Increase heat to high and stir-fry for 3-5 minutes until the grains start to "jump" and smell toasted.',
        },
        {
            title: 'Incorporate the eggs',
            description: 'Push rice to the sides to create a well. Pour in the eggs, let them set for 10 seconds, then toss vigorously to coat the rice.',
            tip: 'The goal is for the egg to wrap around each grain of rice, turning it golden.',
        },
        {
            title: 'Season and serve',
            description: 'Drizzle fish sauce around the edges of the wok. Add sugar, pepper, and the remaining green scallions. Toss one last time and serve.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
