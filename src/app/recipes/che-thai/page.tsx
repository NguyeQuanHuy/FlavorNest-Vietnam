'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-thai',
    title: 'Thai-Style Fruit Dessert',
    subtitle:
        'It tastes like a Saigon summer afternoon feels — sweet, abundant, a little chaotic, completely wonderful.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage:
        '/images/recipes/che-thai.jpg',
    intro:
        'Despite the name, chè Thái is entirely Vietnamese in spirit — a Southern invention that borrowed Thai ingredients (jackfruit, palm seeds) and made them its own. It is the most maximalist dessert in the Vietnamese repertoire: seven or eight components piled into a bowl, united only by sweetened coconut milk and crushed ice. Every stall has its own version. Every family argues about which components are essential. This recipe settles nothing and includes everything.',
    ingredientSections: [
        {
            title: 'Fruits & toppings',
            items: [
                { amount: 150, unit: 'g', name: 'canned jackfruit', note: 'drained, cut into strips' },
                { amount: 150, unit: 'g', name: 'lychees', note: 'canned or fresh, halved' },
                { amount: 100, unit: 'g', name: 'toddy palm seeds (hạt thốt nốt)', note: 'canned, drained' },
                { amount: 100, unit: 'g', name: 'grass jelly (thạch đen)', note: 'cut into cubes' },
                { amount: 100, unit: 'g', name: 'water chestnuts', note: 'sliced' },
                { amount: 80, unit: 'g', name: 'tapioca pearls', note: 'cooked until translucent' },
                { amount: 80, unit: 'g', name: 'red rubies (taro in food colouring)', note: 'see tip' },
            ],
        },
        {
            title: 'Coconut milk base',
            items: [
                { amount: 400, unit: 'ml', name: 'coconut milk', note: 'full-fat' },
                { amount: 200, unit: 'ml', name: 'coconut cream' },
                { amount: 3, unit: 'tbsp', name: 'caster sugar' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 400, unit: 'g', name: 'crushed ice' },
                { amount: 2, unit: 'tbsp', name: 'sweetened condensed milk', note: 'optional drizzle' },
            ],
        },
    ],
    steps: [
        {
            title: 'Cook the tapioca pearls',
            description:
                'Bring a large pot of water to a rolling boil. Add tapioca pearls and cook for 12–15 minutes, stirring occasionally, until they turn completely translucent with no white centres. Drain and rinse under cold water to stop cooking. Toss with a little sugar to prevent sticking.',
            tip: 'Small pearls cook faster than large ones. Check at 10 minutes — overcooked tapioca turns mushy and loses its satisfying chew.',
        },
        {
            title: 'Make the red rubies (optional but worth it)',
            description:
                'Peel and dice taro or water chestnuts into small cubes. Toss in red food colouring until coated. Roll lightly in tapioca starch, then drop into boiling water for 2–3 minutes until the coating turns translucent and jewel-like. Drain and cool.',
            tip: 'This step is purely visual — the red rubies add almost nothing in flavour but make the bowl look spectacular. Skip if short on time.',
        },
        {
            title: 'Sweeten the coconut milk',
            description:
                'Combine coconut milk, coconut cream, sugar, and salt in a saucepan over low heat. Stir until sugar fully dissolves — about 3 minutes. Do not boil. Taste and adjust sweetness. Cool to room temperature, then refrigerate until cold.',
        },
        {
            title: 'Prepare all components',
            description:
                'Drain all canned fruits. Cut jackfruit into thin strips, halve lychees, cube grass jelly. Arrange all components in separate bowls — this makes assembly fast and gives each guest the power to adjust their own ratios.',
        },
        {
            title: 'Assemble and serve',
            description:
                'Fill bowls or glasses with crushed ice. Layer on the components — grass jelly at the base, then jackfruit, lychee, palm seeds, water chestnuts, tapioca pearls, and red rubies. Pour cold sweetened coconut milk generously over everything. Finish with a drizzle of condensed milk if desired.',
            tip: 'Chè Thái is a textural experience — the point is contrast. Soft lychee against chewy tapioca against crunchy water chestnut. Do not let any single ingredient dominate.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
