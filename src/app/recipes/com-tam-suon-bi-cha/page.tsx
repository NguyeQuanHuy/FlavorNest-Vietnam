'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-tam-suon-bi-cha',
    title: 'Sweet Leaf Soup with Minced Pork',
    subtitle:
        'Canh Rau Ngót Thịt Băm — a clear jade-green broth with bruised sweet leaves and tender flecks of minced pork, ready in twenty minutes.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/com-tam-suon-bi-cha.jpg',
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
            title: 'Prepare the Broken Rice (Cơm Tấm)',
            description: 'Rinse the broken rice grains until the water runs clear. Soak for 20–30 minutes to ensure even cooking.',
            tip: 'Use a steamer instead of a rice cooker if you want that perfect, fluffy, non-sticky street-food texture.',
        },
        {
            title: 'Marinate the Pork Chops (Sườn Nướng)',
            description: 'Let the meat marinate for at least 4 hours (or overnight) so the flavors penetrate deep into the bone.',
        },
        {
            title: 'Steam the Egg Meatloaf (Chả Trứng)',
            description: 'Towards the end, brush a layer of egg yolk mixed with annatto oil on top to get that iconic vibrant yellow crust.',
        },
        {
            title: 'Prepare the Shredded Pork Skin (Bì)',
            description: 'Boil pork skin until tender, slice it into thin strips (or buy pre-sliced), and mix with cooked shredded pork. Toss thoroughly with thính (toasted rice powder).',
        },
        {
            title: 'Pour hot oil over chopped green onions with a pinch of salt.',
            description: 'Mix fish sauce, sugar, water, and lime juice. Add minced garlic and chili.',
        },
        {
            title: 'Grill and Assemble',
            description: 'Grill the pork chops over charcoal (preferred) or in an air fryer until golden brown. Scoop rice onto a plate, add the pork, a slice of egg meatloaf, a heap of bì, and some pickled vegetables.',
            tip: 'Drizzle a generous amount of scallion oil over the rice and the meatloaf right before serving.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
