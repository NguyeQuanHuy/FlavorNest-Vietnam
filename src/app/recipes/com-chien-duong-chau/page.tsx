'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-chien-duong-chau',
    title: 'Yangzhou Fried Rice',
    subtitle:
        'Cơm Chiên Dương Châu — a vibrant, colorful medley of fluffy golden rice, savory lap cheong, and tender shrimp, flash-fried for that perfect smoky wok-hei.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/com-chien-duong-chau.jpg',
    intro:
        'Yangzhou Fried Rice is perhaps the most famous fried rice in the world, and for good reason. It is a masterclass in balance—the sweetness of Chinese sausage, the snap of fresh shrimp, and the earthy pop of green peas, all held together by individual grains of rice coated in egg. While it originated in China, it has become a beloved staple in Vietnamese cuisine, often served as the centerpiece of family gatherings and festive banquets.',
    ingredientSections: [
        {
            title: 'The Rice and Protein',
            items: [
                { amount: 600, unit: 'g', name: 'cooked jasmine rice', note: 'leftover, cold rice works best' },
                { amount: 150, unit: 'g', name: 'shrimp', note: 'peeled, deveined, and diced' },
                { amount: 2, unit: 'links', name: 'Chinese sausage (lap cheong)', note: 'diced' },
                { amount: 100, unit: 'g', name: 'char siu (BBQ pork)', note: 'diced' },
                { amount: 3, unit: 'large', name: 'eggs', note: 'lightly beaten' },
            ],
        },
        {
            title: 'Vegetables and Aromatics',
            items: [
                { amount: 100, unit: 'g', name: 'frozen peas and carrots', note: 'thawed' },
                { amount: 2, unit: 'tbsp', name: 'minced garlic' },
                { amount: 2, unit: 'stalks', name: 'scallions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tsp', name: 'oyster sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'sesame oil' },
                { amount: 0.25, unit: 'tsp', name: 'white pepper' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for frying' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the rice',
            description: 'Gently break up any clumps in the cold rice using a fork or your hands to ensure every grain fries evenly.',
            tip: 'Using day-old rice is crucial; the lower moisture content prevents the dish from becoming mushy.',
        },
        {
            title: 'Sear the proteins',
            description: 'Heat 1 tbsp of oil in a wok. Sear the Chinese sausage, BBQ pork, and shrimp until the shrimp turn pink and the sausage fat renders.',
        },
        {
            title: 'Cook the eggs',
            description: 'Push the proteins to one side of the wok. Pour in the beaten eggs, scramble quickly until just set, then mix with the proteins and remove everything from the wok.',
            tip: 'Keep the eggs slightly soft; they will finish cooking when tossed with the rice later.',
        },
        {
            title: 'Fry the aromatics and rice',
            description: 'Add the remaining oil to the hot wok. Sauté the garlic and the white parts of the scallions until fragrant. Add the rice and toss vigorously over high heat.',
        },
        {
            title: 'Season and combine',
            description: 'Add the peas, carrots, and the cooked protein mixture back into the wok. Pour in the soy sauce, oyster sauce, sugar, white pepper, and sesame oil.',
            tip: 'Use a high flame and keep the rice moving to develop "wok hei"—the signature smoky charred flavor.',
        },
        {
            title: 'Final garnish',
            description: 'Toss in the remaining green scallions, give it a final quick stir, and serve hot.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
