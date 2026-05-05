'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-chien-nuoc-mam',
    title: 'Fish Sauce Fried Chicken (Ga Chien Nuoc Mam)',
    subtitle: 'Crispy fried chicken coated in a glossy, savory-sweet fish sauce glaze — bold, addictive, and deeply flavorful.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 3,
    heroImage: '/images/recipes/ga-chien-nuoc-mam.jpg',

    intro: `Gà chiên nước mắm is one of Vietnam’s most popular street and home-style dishes.

Crispy fried chicken pieces are tossed in a caramelized fish sauce glaze made from garlic, sugar, and fish sauce. The result is a perfect balance of sweet, salty, and umami with a sticky, glossy coating that clings to every bite.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 500, unit: 'g', name: 'chicken wings or thighs' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'red chili', note: 'sliced' },
            ],
        },
        {
            title: 'Frying batter',
            items: [
                { amount: 50, unit: 'g', name: 'cornstarch' },
                { amount: 50, unit: 'g', name: 'all-purpose flour' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, name: 'egg' },
                { amount: 100, unit: 'ml', name: 'cold water' },
            ],
        },
        {
            title: 'Fish sauce glaze',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'water' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare chicken',
            description: 'Clean chicken pieces and pat dry. This helps the coating stick better.',
        },
        {
            title: 'Make batter',
            description: 'Mix flour, cornstarch, egg, salt, and cold water into a smooth batter.',
            tip: 'Cold water helps create a crispier fried coating.',
        },
        {
            title: 'Fry chicken',
            description: 'Coat chicken in batter and deep fry until golden and crispy. Remove and drain oil.',
        },
        {
            title: 'Make glaze',
            description: 'In a pan, heat fish sauce, sugar, water, garlic, and chili until it thickens slightly and becomes glossy.',
        },
        {
            title: 'Coat chicken',
            description: 'Toss fried chicken in the fish sauce glaze until evenly coated and sticky.',
            tip: 'Work quickly so the coating stays crisp under the glaze.',
        },
        {
            title: 'Serve',
            description: 'Serve immediately with steamed rice or as a snack with chili mayo.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
