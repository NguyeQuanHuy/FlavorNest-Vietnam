'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-buoi-mien-nam',
    title: 'Southern Pomelo Sweet Soup (Che Buoi)',
    subtitle: 'Crispy pomelo rind, soft mung beans, and creamy coconut sauce — a refreshing Vietnamese dessert.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '60 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/che-buoi.jpg',

    intro: `Chè bưởi miền Nam is a famous Southern Vietnamese dessert made from pomelo rind, mung beans, and coconut sauce.

What makes it special is the texture contrast: crunchy yet tender pomelo rind, soft mung beans, and rich, fragrant coconut milk. When served cold with ice, it becomes a perfect tropical dessert for hot weather.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 1, name: 'large pomelo', note: 'peel only the rind' },
                { amount: 150, unit: 'g', name: 'split mung beans' },
                { amount: 200, unit: 'g', name: 'tapioca starch' },
                { amount: 800, unit: 'ml', name: 'coconut milk' },
                { amount: 150, unit: 'g', name: 'sugar' },
                { amount: 1, unit: 'pinch', name: 'salt' },
            ],
        },
        {
            title: 'For coating pomelo rind',
            items: [
                { amount: 1, unit: 'tbsp', name: 'salt' },
                { amount: 1, unit: 'l', name: 'water', note: 'for soaking' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare pomelo rind',
            description: 'Peel the green skin and take only the white pith. Cut into small cubes.',
            tip: 'Soak in salted water for 30 minutes to remove bitterness.',
        },
        {
            title: 'Prepare mung beans',
            description: 'Soak mung beans for 2–3 hours, then steam until soft but not mushy.',
        },
        {
            title: 'Coat pomelo rind',
            description: 'Rinse and squeeze pomelo rind dry. Toss with tapioca starch until evenly coated.',
            tip: 'This gives the signature chewy-crunchy texture.',
        },
        {
            title: 'Cook pomelo rind',
            description: 'Boil coated pomelo rind until it becomes translucent and floats. Remove and cool in cold water.',
        },
        {
            title: 'Make coconut sauce',
            description: 'Heat coconut milk with sugar and salt until just warm. Do not boil too hard.',
        },
        {
            title: 'Assemble dessert',
            description: 'Place mung beans and pomelo rind in a bowl, pour coconut sauce over, and serve chilled with ice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
