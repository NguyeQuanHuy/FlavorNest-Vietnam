'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-ba-mau',
    title: 'Three-Colour Dessert',
    subtitle:
        'Saigon in a glass — three jewel-toned layers of mung bean, pandan jelly, and red jelly, crowned with coconut cream over crushed ice.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '50 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/che-ba-mau.jpg',
    intro:
        'Chè ba màu is Saigon\'s most photogenic street dessert — three distinct layers built in a glass like a sunset seen through sweetened condensed milk. The green comes from pandan jelly, the red from kidney bean or agar jelly, and the yellow from steamed split mung bean. Everything sits on a mound of crushed ice and is finished with a generous pour of coconut cream. It is not a complicated dessert. It is an honest one.',
    ingredientSections: [
        {
            title: 'Mung bean layer (đậu xanh)',
            items: [
                { amount: 150, unit: 'g', name: 'split mung beans', note: 'soaked 2 hrs' },
                { amount: 2, unit: 'tbsp', name: 'caster sugar' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
        {
            title: 'Pandan jelly layer (thạch lá dứa)',
            items: [
                { amount: 500, unit: 'ml', name: 'water' },
                { amount: 5, unit: 'g', name: 'agar-agar powder' },
                { amount: 3, unit: 'tbsp', name: 'caster sugar' },
                { amount: 1, unit: 'tsp', name: 'pandan extract', note: 'or 4 fresh pandan leaves, blended' },
            ],
        },
        {
            title: 'Red jelly layer (thạch đỏ)',
            items: [
                { amount: 500, unit: 'ml', name: 'water' },
                { amount: 5, unit: 'g', name: 'agar-agar powder' },
                { amount: 3, unit: 'tbsp', name: 'caster sugar' },
                { amount: 1, unit: 'tsp', name: 'red food colouring', note: 'or grenadine for natural colour' },
            ],
        },
        {
            title: 'Coconut cream topping',
            items: [
                { amount: 200, unit: 'ml', name: 'coconut cream', note: 'full-fat' },
                { amount: 1, unit: 'tbsp', name: 'caster sugar' },
                { amount: 1, name: 'pinch of salt', note: 'the salt is essential — do not skip' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 400, unit: 'g', name: 'crushed ice' },
                { amount: 2, unit: 'tbsp', name: 'sweetened condensed milk', note: 'optional, drizzle on top' },
            ],
        },
    ],
    steps: [
        {
            title: 'Cook the mung beans',
            description:
                'Drain the soaked mung beans and steam or boil them for 20–25 minutes until completely soft and mashable. Season with sugar and a pinch of salt while still warm. The texture should be smooth and slightly sticky — like a thick paste, not dry crumbles. Set aside to cool.',
            tip: 'Do not overcook into soup. You want individual beans that are soft but still hold their shape when you press one between your fingers.',
        },
        {
            title: 'Make the pandan jelly',
            description:
                'Combine water, agar-agar, and sugar in a saucepan. Stir in pandan extract or strain in juice from blended pandan leaves. Bring to a full boil over medium heat, stirring constantly, until the agar-agar fully dissolves — about 5 minutes. Pour into a shallow tray to a depth of 1.5 cm. Leave at room temperature to set (about 20 minutes), then refrigerate until firm. Cut into small cubes or strips.',
            tip: 'Agar-agar sets at room temperature, unlike gelatin. Don\'t rush it into the fridge — condensation will cloud the jelly.',
        },
        {
            title: 'Make the red jelly',
            description:
                'Repeat exactly as for the pandan jelly, swapping pandan extract for red colouring or grenadine. Pour into a separate tray and allow to set fully before cutting.',
        },
        {
            title: 'Warm the coconut cream',
            description:
                'Gently heat coconut cream in a small saucepan with sugar and salt over low heat, stirring until sugar dissolves. Do not boil — just warm enough to dissolve. Remove from heat and let cool to room temperature. The salt-sugar balance is what makes this topping addictive rather than cloying.',
        },
        {
            title: 'Assemble the glasses',
            description:
                'Fill each glass with a generous layer of crushed ice. Spoon in the mung bean paste first (yellow layer), then add cubes of red jelly, then pandan jelly. The layering order is traditional — yellow at base, red in middle, green on top — but feel free to reverse for visual drama. Finish with a generous pour of coconut cream over everything.',
            tip: 'Serve immediately. Chè ba màu waits for no one — the ice melts fast and the layers begin to bleed into each other beautifully after a few minutes.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
