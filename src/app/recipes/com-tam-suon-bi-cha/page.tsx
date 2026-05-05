'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-tam-suon-bi-cha',
    title: 'Sweet Leaf Soup with Minced Pork',
    subtitle:
        'Vietnamese broken rice topped with grilled pork, shredded skin, and egg meatloaf.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/com-tam-suon-bi-cha.jpg',
    intro:
        'Cơm Tấm Sườn Bì Chả is a iconic Saigon dish featuring fragrant broken rice served with a smoky grilled pork chop, shredded pork skin, and a savory steamed egg meatloaf.',
ingredientSections: [
    {
        title: 'Broken Rice',
        items: [
            { amount: 500, unit: 'g', name: 'broken rice (gạo tấm)' },
            { amount: 600, unit: 'ml', name: 'water' },
            { amount: 0.5, unit: 'tsp', name: 'salt' },
            { amount: 1, unit: 'tsp', name: 'cooking oil' },
        ],
    },
    {
        title: 'Grilled Pork Chops (Sườn Nướng)',
        items: [
            { amount: 4, unit: 'pieces', name: 'pork chops', note: 'about 600-700g, slightly pounded' },
            { amount: 2, unit: 'tbsp', name: 'minced lemongrass' },
            { amount: 1, unit: 'tbsp', name: 'minced garlic' },
            { amount: 1, unit: 'tbsp', name: 'minced shallots' },
            { amount: 2, unit: 'tbsp', name: 'honey or condensed milk' },
            { amount: 2, unit: 'tbsp', name: 'fish sauce' },
            { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
            { amount: 1, unit: 'tbsp', name: 'oil' },
            { amount: 0.5, unit: 'tsp', name: 'dark soy sauce', note: 'for color' },
        ],
    },
    {
        title: 'Steamed Egg Meatloaf (Chả Trứng)',
        items: [
            { amount: 200, unit: 'g', name: 'minced pork' },
            { amount: 4, unit: 'large', name: 'eggs', note: 'keep 2 yolks aside for topping' },
            { amount: 20, unit: 'g', name: 'dried glass noodles', note: 'soaked and chopped' },
            { amount: 15, unit: 'g', name: 'dried wood ear mushrooms', note: 'soaked and minced' },
            { amount: 1, unit: 'tbsp', name: 'minced shallots' },
            { amount: 1, unit: 'tsp', name: 'fish sauce' },
            { amount: 0.5, unit: 'tsp', name: 'sugar' },
            { amount: 0.5, unit: 'tsp', name: 'pepper' },
        ],
    },
    {
        title: 'Shredded Pork Skin (Bì)',
        items: [
            { amount: 150, unit: 'g', name: 'pork skin', note: 'boiled and thinly sliced' },
            { amount: 100, unit: 'g', name: 'pork loin', note: 'boiled and shredded' },
            { amount: 30, unit: 'g', name: 'roasted rice powder (thính)' },
            { amount: 1, unit: 'tsp', name: 'minced garlic' },
            { amount: 0.25, unit: 'tsp', name: 'salt and sugar' },
        ],
    },
    {
        title: 'Garnish and Sauce',
        items: [
            { amount: 100, unit: 'g', name: 'scallions', note: 'chopped for scallion oil' },
            { amount: 3, unit: 'tbsp', name: 'neutral oil' },
            { amount: 1, unit: 'cup', name: 'pickled daikon and carrots' },
            { amount: 1, unit: 'large', name: 'cucumber', note: 'sliced' },
            { amount: 0.5, unit: 'cup', name: 'prepared sweet fish sauce', note: 'fish sauce, sugar, lime, chili, garlic' },
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
