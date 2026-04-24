'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-phe-sua-da',
    title: 'Vietnamese Iced Coffee',
    subtitle: 'The drink that powers an entire nation from 6am.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '10 min',
    rating: 4.9,
    baseServings: 1,
    heroImage: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=1600&q=85',
    intro: 'Ca phe sua da is Vietnam distilled into a glass. Strong robusta coffee drips slowly through a phin filter onto a thick layer of sweetened condensed milk, then poured over ice. The ritual is part of the experience — the slow drip, the anticipation, then the stir and the first sip of something bitter, sweet, and cold all at once. It is the most ordered drink in the country and has been for decades.',
    ingredientSections: [
        {
            title: 'Per serving',
            items: [
                { amount: 2, unit: 'tbsp', name: 'Vietnamese robusta coffee grounds' },
                { amount: 120, unit: 'ml', name: 'hot water', note: 'just off the boil' },
                { amount: 2, unit: 'tbsp', name: 'sweetened condensed milk' },
                { amount: 1, unit: 'cup', name: 'ice cubes' },
            ],
        },
    ],
    steps: [
        {
            title: 'Add condensed milk to glass',
            description: 'Spoon condensed milk into the bottom of a tall glass. Do not stir yet.',
        },
        {
            title: 'Brew coffee via phin',
            description: 'Place the phin filter on top of the glass. Add coffee grounds and press the filter plate down lightly. Pour a small amount of hot water to bloom the grounds for 30 seconds, then fill the phin to the top. Allow to drip completely — about 4 to 5 minutes.',
            tip: 'Do not rush the drip. A faster pour means weaker coffee. The slow drip is where the flavour develops.',
        },
        {
            title: 'Stir and pour over ice',
            description: 'Once all the coffee has dripped through, stir the hot coffee and condensed milk together vigorously until fully combined. Fill a separate glass with ice and pour the coffee mixture over it. Serve immediately.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
