'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-ga-hai-nam',
    title: 'Hainanese Chicken Rice (Com Ga Hai Nam)',
    subtitle: 'Poached chicken with fragrant rice cooked in chicken broth, served with ginger-chili sauce.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '90 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/com-ga-hai-nam.jpg',

    intro: `Cơm gà Hải Nam is a famous dish originating from Hainan (China) and widely popular in Southeast Asia, especially Vietnam, Singapore, and Malaysia.

The dish features tender poached chicken served with fragrant rice cooked in chicken fat and broth. It is accompanied by a trio of dipping sauces that elevate its clean yet deeply savory flavor.`,

    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 1.2, unit: 'kg', name: 'whole chicken' },
                { amount: 1, name: 'ginger knob', note: 'smashed' },
                { amount: 2, name: 'spring onions' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Fragrant rice',
            items: [
                { amount: 2, unit: 'cups', name: 'jasmine rice' },
                { amount: 2, unit: 'tbsp', name: 'chicken fat' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'ginger slice', note: 'minced' },
            ],
        },
        {
            title: 'Dipping sauces',
            items: [
                { amount: 3, unit: 'tbsp', name: 'ginger sauce' },
                { amount: 2, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'chili sauce' },
                { amount: 1, unit: 'tbsp', name: 'lime juice' },
            ],
        },
    ],

    steps: [
        {
            title: 'Poach chicken',
            description: 'Simmer whole chicken with ginger, spring onions, and salt until fully cooked and tender.',
            tip: 'Keep water at gentle simmer to ensure juicy chicken.',
        },
        {
            title: 'Prepare rice',
            description: 'Sauté garlic and ginger in chicken fat, then add rice and stir before cooking in chicken broth.',
        },
        {
            title: 'Cook rice',
            description: 'Cook rice until fluffy and fragrant, absorbing all chicken flavors.',
        },
        {
            title: 'Prepare sauces',
            description: 'Mix ginger sauce, soy sauce, and chili sauce separately for dipping.',
        },
        {
            title: 'Slice chicken',
            description: 'Cut poached chicken into bite-sized pieces with skin intact.',
        },
        {
            title: 'Serve',
            description: 'Plate rice with chicken and serve with dipping sauces and cucumber slices.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
