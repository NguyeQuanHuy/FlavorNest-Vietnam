'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-chuoi-nuong',
    title: 'Baked Banana Coconut Cake',
    subtitle: 'Crispy at the edges, custardy in the middle — banana and coconut baked until caramelised and deeply fragrant.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '55 min',
    rating: 4.7,
    baseServings: 8,
    heroImage:
        'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=1600&q=85',
    intro:
        'Bánh chuối nướng is the dessert that smells like home. Overripe bananas — the ones too soft and sweet to eat fresh — are folded into a coconut milk batter, poured into a tray, and baked until the top turns golden and the edges caramelise into something between cake and custard. It is simple food made extraordinary by patience and the right bananas. Use the ones with black-spotted skins. The blacker, the better.',
    ingredientSections: [
        {
            title: 'Batter',
            items: [
                { amount: 5, name: 'overripe bananas (chuối sứ or chuối xiêm)', note: 'roughly mashed' },
                { amount: 200, unit: 'ml', name: 'coconut milk', note: 'full-fat' },
                { amount: 100, unit: 'ml', name: 'coconut cream' },
                { amount: 80, unit: 'g', name: 'tapioca starch' },
                { amount: 40, unit: 'g', name: 'rice flour' },
                { amount: 80, unit: 'g', name: 'caster sugar' },
                { amount: 1, name: 'pinch of salt' },
                { amount: 1, unit: 'tsp', name: 'vanilla extract' },
            ],
        },
        {
            title: 'Topping',
            items: [
                { amount: 60, unit: 'ml', name: 'coconut cream' },
                { amount: 1, unit: 'tbsp', name: 'caster sugar' },
                { amount: 1, name: 'pinch of salt' },
                { amount: 30, unit: 'g', name: 'toasted sesame seeds' },
            ],
        },
    ],
    steps: [
        {
            title: 'Preheat and prep',
            description:
                'Preheat oven to 180°C (350°F). Grease a 20×25 cm baking tray with a little coconut oil or butter and line with parchment paper.',
        },
        {
            title: 'Make the batter',
            description:
                'Mash bananas thoroughly in a large bowl — some small lumps are fine and add texture. Add coconut milk, coconut cream, tapioca starch, rice flour, sugar, salt, and vanilla. Mix until smooth and no dry flour remains. The batter will be thick and pourable.',
            tip: 'Apple bananas (Chuối sứ) are traditional and have a firmer texture. Standard Cavendish bananas work well too — just make sure they are very ripe.',
        },
        {
            title: 'Bake first layer',
            description:
                'Pour batter into the prepared tray. Bake for 30 minutes until the surface is set and starting to turn golden at the edges.',
        },
        {
            title: 'Add coconut topping',
            description:
                'Mix coconut cream with sugar and salt. Pour evenly over the partially baked cake. Scatter toasted sesame seeds across the surface. Return to oven for a further 15–20 minutes until the top is deeply golden and the coconut cream has set into a glossy, slightly caramelised layer.',
            tip: 'For extra caramelisation, switch to grill/broil mode for the final 3 minutes — watch carefully.',
        },
        {
            title: 'Cool and slice',
            description:
                'Allow to cool in the tray for at least 20 minutes before slicing. Bánh chuối nướng is best served warm or at room temperature. It firms up overnight and is equally good eaten cold the next day — if it lasts that long.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
