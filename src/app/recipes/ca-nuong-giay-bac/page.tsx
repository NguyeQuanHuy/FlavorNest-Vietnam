'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-nuong-giay-bac',
    title: 'Foil-Baked Fish (Ca Nuong Giay Bac)',
    subtitle: 'Juicy, aromatic fish baked in foil with herbs, garlic, and a savory marinade.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 3,
    heroImage: '/images/recipes/ca-nuong-giay-bac.jpg',

    intro: `Cá nướng giấy bạc is a popular Vietnamese home-style and restaurant dish where whole fish is wrapped in foil with herbs, garlic, and seasoning, then baked or grilled until tender and juicy.

The foil locks in moisture and aroma, allowing the fish to steam in its own juices while absorbing the flavors of lemongrass, onion, and fish sauce. The result is soft, fragrant fish that flakes easily and is full of savory depth.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 1, name: 'whole fish', note: 'tilapia, seabass, or carp' },
                { amount: 3, name: 'lemongrass stalks', note: 'crushed and cut' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'sliced' },
                { amount: 1, name: 'tomato', note: 'sliced' },
                { amount: 1, name: 'onion', note: 'sliced' },
            ],
        },
        {
            title: 'Marinade',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'oil' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 1, name: 'lime', note: 'juice' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare the fish',
            description: 'Clean the fish thoroughly and make a few diagonal cuts on both sides to help absorb marinade.',
        },
        {
            title: 'Make marinade',
            description: 'Mix fish sauce, soy sauce, sugar, oil, black pepper, and lime juice.',
        },
        {
            title: 'Marinate',
            description: 'Coat the fish evenly with marinade. Stuff lemongrass, garlic, shallots, tomato, and onion inside the fish and let rest for 20–30 minutes.',
        },
        {
            title: 'Wrap in foil',
            description: 'Wrap the fish tightly in aluminum foil to lock in moisture and flavor.',
            tip: 'Seal the foil well to keep steam inside — this is what makes the fish juicy.',
        },
        {
            title: 'Bake or grill',
            description: 'Bake at 200°C for 25–30 minutes or grill over medium heat until fully cooked.',
        },
        {
            title: 'Serve',
            description: 'Carefully open the foil and serve hot with rice, herbs, or dipping sauce.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
