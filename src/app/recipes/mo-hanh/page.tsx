'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'mo-hanh',
    title: 'Scallion Oil (Mo Hanh)',
    subtitle: 'Fragrant green scallion oil used as a Vietnamese topping to elevate grilled, steamed, and noodle dishes.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '10 min',
    rating: 4.9,
    baseServings: 1,
    heroImage: '/images/recipes/mo-hanh.jpg',

    intro: `Mỡ hành is a simple but essential Vietnamese condiment made from chopped scallions and hot oil.

It is widely used as a topping for grilled meats, steamed dishes, rice cakes, and noodles. The hot oil gently cooks the scallions, releasing a fragrant aroma while keeping their vibrant green color.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 5, name: 'spring onions', note: 'finely chopped' },
                { amount: 4, unit: 'tbsp', name: 'oil', note: 'hot neutral oil' },
                { amount: 1, unit: 'pinch', name: 'salt' },
                { amount: 1, unit: 'pinch', name: 'sugar', note: 'optional' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare scallions',
            description: 'Wash and finely chop spring onions, separating green parts for best color.',
        },
        {
            title: 'Heat oil',
            description: 'Heat oil until very hot but not smoking.',
            tip: 'Oil must be hot enough to gently cook scallions instantly.',
        },
        {
            title: 'Combine',
            description: 'Pour hot oil over chopped scallions. Add a pinch of salt and stir.',
        },
        {
            title: 'Finish',
            description: 'Mix well until scallions turn glossy green and fragrant.',
        },
        {
            title: 'Use immediately',
            description: 'Drizzle over grilled meats, rice, noodles, or bánh mì.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
