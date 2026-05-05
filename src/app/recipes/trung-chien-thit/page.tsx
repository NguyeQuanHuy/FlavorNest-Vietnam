'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'trung-chien-thit',
    title: 'Vietnamese Pork Omelet (Trung Chien Thit)',
    subtitle: 'Fluffy eggs mixed with savory minced pork — simple, hearty, and perfect with steamed rice.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.8,
    baseServings: 2,
    heroImage: '/images/recipes/trung-chien-thit.jpg',

    intro: `:contentReference[oaicite:1]{index=1} is a classic Vietnamese home-style dish made from beaten eggs mixed with seasoned minced pork, then pan-fried until golden and fluffy.

It is one of the simplest yet most comforting dishes in Vietnamese cuisine. The eggs are soft and airy, while the pork adds a savory, umami-rich depth. Often served with steamed rice and soy or fish sauce, it is a staple in everyday family meals.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 3, name: 'eggs' },
                { amount: 150, unit: 'g', name: 'minced pork' },
                { amount: 2, name: 'spring onions', note: 'finely chopped' },
                { amount: 1, name: 'garlic clove', note: 'minced' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare the pork',
            description: 'Mix minced pork with garlic, fish sauce, sugar, salt, and pepper. Let it rest for 10 minutes.',
        },
        {
            title: 'Beat the eggs',
            description: 'Crack eggs into a bowl and beat until smooth. Add chopped spring onions.',
            tip: 'Beating well helps create a fluffier texture when cooked.',
        },
        {
            title: 'Combine mixture',
            description: 'Mix seasoned pork into the egg mixture evenly.',
        },
        {
            title: 'Pan-fry',
            description: 'Heat oil in a pan over medium heat. Pour in the mixture and spread evenly. Cook until the bottom is golden.',
        },
        {
            title: 'Flip and finish',
            description: 'Flip carefully and cook the other side until fully set and lightly golden.',
        },
        {
            title: 'Serve',
            description: 'Slice and serve hot with steamed rice and dipping fish sauce or soy sauce.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
