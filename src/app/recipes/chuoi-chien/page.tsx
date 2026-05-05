'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chuoi-chien',
    title: 'Vietnamese Fried Banana (Chuoi Chien)',
    subtitle: 'Crispy golden banana fritters with a soft, sweet center — a popular street snack in Vietnam.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/chuoi-chien.jpg',

    intro: `Chuối chiên is a beloved Vietnamese street snack made by coating ripe bananas in batter and deep-frying until golden and crispy.

The contrast between the crunchy outer layer and soft, sweet banana inside makes it an irresistible treat often sold at street stalls.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 6, name: 'ripe bananas', note: 'preferably Thai or lady finger bananas' },
                { amount: 150, unit: 'g', name: 'rice flour' },
                { amount: 50, unit: 'g', name: 'tapioca starch' },
                { amount: 200, unit: 'ml', name: 'coconut milk' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'pinch', name: 'salt' },
            ],
        },
        {
            title: 'For frying',
            items: [
                { amount: 500, unit: 'ml', name: 'cooking oil' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare bananas',
            description: 'Peel bananas and press them gently flat if desired.',
        },
        {
            title: 'Make batter',
            description: 'Mix rice flour, tapioca starch, coconut milk, sugar, and salt into a smooth batter.',
            tip: 'Batter should be slightly thick but still coat the banana evenly.',
        },
        {
            title: 'Heat oil',
            description: 'Heat oil to medium temperature for even frying.',
        },
        {
            title: 'Coat bananas',
            description: 'Dip bananas into batter, ensuring full coverage.',
        },
        {
            title: 'Fry',
            description: 'Fry until golden brown and crispy on both sides.',
            tip: 'Do not overcrowd the pan for best crispiness.',
        },
        {
            title: 'Drain oil',
            description: 'Remove and drain on paper towels to remove excess oil.',
        },
        {
            title: 'Serve',
            description: 'Serve hot and crispy, optionally with honey or condensed milk.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
