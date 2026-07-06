'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'kem-chuoi',
    title: 'Vietnamese Banana Ice Cream',
    subtitle: 'Saigon street food frozen on a stick — banana, coconut milk, and roasted peanuts.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '15 min + 6h freeze',
    rating: 4.8,
    baseServings: 8,
    heroImage: '/images/recipes/kem-chuoi.jpg',
    intro:
        'Kem chuối is the ice cream of Saigon\'s alleyways — sold from styrofoam boxes by vendors who have been making the same recipe for decades. There is no churning, no special equipment, no eggs. Just ripe bananas blended with sweetened coconut milk, poured into moulds, and frozen. The magic is in the toppings: crushed roasted peanuts and toasted shredded coconut pressed into the surface before the final freeze. Each bite is cold, creamy, sweet, and faintly salty from the peanuts.',
    ingredientSections: [
        {
            title: 'Ice cream base',
            items: [
                { amount: 4, name: 'ripe bananas (chuối sứ preferred)', note: 'the riper the sweeter' },
                { amount: 400, unit: 'ml', name: 'coconut milk', note: 'full-fat' },
                { amount: 3, unit: 'tbsp', name: 'sweetened condensed milk' },
                { amount: 1, name: 'pinch of salt' },
                { amount: 1, unit: 'tsp', name: 'vanilla extract' },
            ],
        },
        {
            title: 'Coating',
            items: [
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 30, unit: 'g', name: 'shredded coconut', note: 'toasted until golden' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blend the base',
            description:
                'Peel and break bananas into chunks. Blend with coconut milk, condensed milk, salt, and vanilla until completely smooth. Taste — it should be sweet with a clean banana flavour. Adjust condensed milk if needed.',
            tip: 'Freeze bananas beforehand for an even creamier texture and faster freezing time.',
        },
        {
            title: 'Pour into moulds',
            description:
                'Pour mixture into ice cream moulds or small paper cups filled two-thirds full. Insert wooden sticks. Freeze for 2 hours until semi-solid.',
        },
        {
            title: 'Add the coating',
            description:
                'Mix crushed peanuts and toasted coconut in a shallow bowl. Remove semi-frozen kem chuối from moulds briefly and roll the surface in the peanut-coconut mixture, pressing gently so it adheres. Return to moulds or lay on a lined tray.',
            tip: 'If using paper cups, tear the cup away at this stage, coat, then re-wrap loosely in cling film before the final freeze.',
        },
        {
            title: 'Final freeze',
            description:
                'Return to freezer for at least 4 more hours, ideally overnight. Serve straight from the freezer — kem chuối melts quickly in warm weather.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
