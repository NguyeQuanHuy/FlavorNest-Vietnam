'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-chien-hai-san',
    title: 'Vietnamese Seafood Fried Rice (Com Chien Hai San)',
    subtitle: 'Wok-tossed fried rice with seafood, egg, and aromatic garlic — smoky, fluffy, and full of umami.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 3,
    heroImage: '/images/recipes/com-chien-hai-san.jpg',

    intro: `Cơm chiên hải sản is a classic Vietnamese wok dish combining fluffy fried rice with fresh seafood, eggs, and aromatic garlic.
The secret lies in high heat and fast tossing — each grain of rice is coated in oil, slightly toasted, and infused with seafood umami. Shrimp, squid, and scallions bring freshness, while soy sauce and fish sauce add depth.
It’s quick, simple, but when done right — it tastes like a street-side wok exploding with flavor.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 2, unit: 'cups', name: 'cooked rice', note: 'preferably cold overnight rice' },
                { amount: 150, unit: 'g', name: 'shrimp', note: 'peeled and deveined' },
                { amount: 150, unit: 'g', name: 'squid', note: 'cleaned and sliced' },
                { amount: 2, name: 'eggs' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'spring onions', note: 'chopped' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 1.5, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'pinch', name: 'black pepper' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare ingredients',
            description: 'Ensure rice is cold and separated. Season shrimp and squid lightly with a pinch of salt.',
            tip: 'Cold rice prevents clumping and creates that signature wok-fried texture.',
        },
        {
            title: 'Cook seafood',
            description: 'Heat oil in a wok over high heat. Stir-fry shrimp and squid quickly until just cooked, then remove and set aside.',
        },
        {
            title: 'Scramble eggs',
            description: 'In the same wok, add a bit more oil and scramble the eggs until just set. Break into pieces.',
        },
        {
            title: 'Fry the rice',
            description: 'Add garlic and sauté until fragrant. Add rice and stir-fry over high heat until grains are separated and slightly toasted.',
            tip: 'High heat is essential — it creates the smoky “wok hei” flavor.',
        },
        {
            title: 'Season and combine',
            description: 'Add soy sauce, fish sauce, sugar, and pepper. Return seafood and eggs to the wok. Toss everything together quickly.',
        },
        {
            title: 'Finish',
            description: 'Add spring onions, toss once more, and serve immediately while hot.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
