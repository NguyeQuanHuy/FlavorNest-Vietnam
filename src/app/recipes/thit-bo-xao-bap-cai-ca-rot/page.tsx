'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'thit-bo-xao-bap-cai-ca-rot',
    title: 'Beef Stir-fry with Cabbage and Carrots (Bo Xao Bap Cai Ca Rot)',
    subtitle: 'Quick, colorful stir-fry with tender beef, crunchy cabbage, and sweet carrots — simple Vietnamese home cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.8,
    baseServings: 3,
    heroImage: '/images/recipes/bo-xao-bap-cai.jpg',

    intro: `Thịt bò xào bắp cải cà rốt is a simple and nutritious Vietnamese home dish.

Tender beef is quickly stir-fried with crunchy cabbage and sweet carrots, creating a balanced dish that is both flavorful and healthy. It is commonly served with steamed rice as a quick weekday meal.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 300, unit: 'g', name: 'beef sirloin', note: 'thinly sliced' },
                { amount: 200, unit: 'g', name: 'cabbage', note: 'shredded' },
                { amount: 1, name: 'carrot', note: 'julienned' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
            ],
        },
        {
            title: 'Marinade',
            items: [
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'cornstarch' },
                { amount: 1, unit: 'tsp', name: 'oil' },
            ],
        },
    ],

    steps: [
        {
            title: 'Marinate beef',
            description: 'Mix sliced beef with soy sauce, oyster sauce, fish sauce, cornstarch, and oil. Let rest for 10 minutes.',
            tip: 'Cornstarch helps keep the beef tender and juicy.',
        },
        {
            title: 'Prepare vegetables',
            description: 'Shred cabbage and julienne carrots for quick cooking.',
        },
        {
            title: 'Stir-fry garlic',
            description: 'Heat oil in a pan and sauté garlic until fragrant.',
        },
        {
            title: 'Cook beef',
            description: 'Stir-fry beef quickly on high heat until just browned. Remove and set aside.',
        },
        {
            title: 'Cook vegetables',
            description: 'Add carrots and cabbage, stir-fry for 2–3 minutes until slightly tender but still crunchy.',
        },
        {
            title: 'Combine',
            description: 'Return beef to the pan, mix everything well and adjust seasoning if needed.',
        },
        {
            title: 'Serve',
            description: 'Serve hot with steamed rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
