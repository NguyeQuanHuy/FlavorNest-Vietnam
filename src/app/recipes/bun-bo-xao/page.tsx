'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-bo-xao',
    title: 'Stir-fried Beef with Rice Noodles (Bun Bo Xao)',
    subtitle: 'Fragrant stir-fried beef with rice noodles, herbs, and sweet-savory sauce — a popular Vietnamese street dish.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/bun-bo-xao.jpg',

    intro: `Bún bò xào is a popular Vietnamese street food dish made with stir-fried beef, rice noodles, fresh herbs, and a sweet-salty dressing.

Unlike soup-based noodles, this dish is served dry but very flavorful, combining tender beef, aromatic garlic, and fresh vegetables over soft rice noodles.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 200, unit: 'g', name: 'rice noodles (bún)' },
                { amount: 250, unit: 'g', name: 'beef sirloin', note: 'thinly sliced' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'carrot', note: 'julienned' },
                { amount: 100, unit: 'g', name: 'lettuce or herbs' },
            ],
        },
        {
            title: 'Marinade & sauce',
            items: [
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'lime fish sauce dressing' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 2, unit: 'tbsp', name: 'roasted peanuts', note: 'crushed' },
                { amount: 1, name: 'fried shallots' },
                { amount: 1, name: 'fresh chili', note: 'sliced' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare noodles',
            description: 'Soak rice noodles in warm water until soft, then drain well.',
        },
        {
            title: 'Marinate beef',
            description: 'Mix beef with soy sauce, oyster sauce, fish sauce, sugar, and let sit for 10 minutes.',
        },
        {
            title: 'Stir-fry beef',
            description: 'Heat oil in a pan and stir-fry garlic and beef on high heat until just cooked.',
            tip: 'High heat keeps beef tender and not chewy.',
        },
        {
            title: 'Prepare vegetables',
            description: 'Quickly sauté carrots or keep them raw for crunchiness.',
        },
        {
            title: 'Assemble bowl',
            description: 'Place noodles in a bowl, add vegetables, beef, and herbs.',
        },
        {
            title: 'Add sauce',
            description: 'Pour sweet-sour fish sauce dressing over the bowl.',
        },
        {
            title: 'Finish',
            description: 'Top with peanuts, fried shallots, and chili. Mix well before eating.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
