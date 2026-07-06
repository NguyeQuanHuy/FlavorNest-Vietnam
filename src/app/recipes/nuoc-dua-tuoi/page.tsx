'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nuoc-dua-tuoi',
    title: 'Fresh Coconut Water (Nước Dừa Tươi)',
    subtitle:
        'Fresh Coconut Water — nature’s ultimate electrolyte drink, served chilled straight from the shell for a sweet, nutty, and incredibly hydrating experience.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '5 min',
    rating: 4.9,
    baseServings: 1,
    heroImage: '/images/recipes/nuoc-dua-tuoi.jpg',
    intro:
        'In the tropical heat of Vietnam, "Nước Dừa" is the gold standard of refreshments. Unlike bottled versions, fresh coconut water is alive with a delicate sweetness and a complex mineral profile that shifts depending on the variety of the coconut. From the tiny, super-sweet "Dừa Xiêm" to the larger, refreshing types found on every street corner, this drink is a testament to the simplicity of natural perfection—often enjoyed with a spoon to scoop out the tender, translucent flesh.',
    ingredientSections: [
        {
            title: 'The Fruit',
            items: [
                { amount: 1, unit: 'whole', name: 'young green coconut', note: 'look for "Dừa Xiêm" for the best sweetness' },
            ],
        },
        {
            title: 'Optional Enhancements',
            items: [
                { amount: 1, unit: 'pinch', name: 'sea salt', note: 'optional, to balance the natural sugars' },
                { amount: 1, unit: 'slice', name: 'kumquat or lime', note: 'optional, for a citrusy zing' },
                { amount: 1, unit: 'cup', name: 'ice cubes', note: 'if not serving inside the shell' },
            ],
        },
    ],
    steps: [
        {
            title: 'Select the coconut',
            description: 'Choose a young green coconut that feels heavy for its size. Shake it gently; you should hear the water splashing inside.',
            tip: 'Avoid coconuts with brown, dry husks unless you are looking for mature coconut milk rather than fresh water.',
        },
        {
            title: 'Open the shell',
            description: 'Carefully shave the top of the coconut with a heavy knife until the "eye" or the soft inner shell is exposed. Pierce the top to create an opening.',
            tip: 'Safety first: If you are not comfortable with a cleaver, many stores now sell "easy-open" coconuts with pre-scored lids.',
        },
        {
            title: 'Season and chill',
            description: 'Insert a straw directly into the coconut. If you prefer it in a glass, pour the water out and add a tiny pinch of salt and a squeeze of kumquat.',
            tip: 'The pinch of salt is a traditional Vietnamese secret to make the coconut water taste even sweeter and more refreshing.',
        },
        {
            title: 'Enjoy the flesh',
            description: 'Once the water is finished, split the coconut in half. Use a sturdy spoon to scrape out the soft, jelly-like coconut meat.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
