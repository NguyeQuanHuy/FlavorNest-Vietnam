'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-phe-trung',
    title: 'Vietnamese Egg Coffee',
    subtitle: 'Invented in Hanoi in 1946 — part drink, part dessert, entirely unforgettable.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '15 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1600&q=85',
    intro: 'In 1946, fresh milk was rationed in Hanoi. Nguyen Van Giang, a bartender at the Sofitel Metropole, replaced it with whipped egg yolks beaten with condensed milk into a silky, custard-like foam. He spooned it over strong robusta coffee. Eighty years later, his son still runs the same recipe at Giang Cafe on Hang Gai street. The drink is extraordinary — the foam sits warm and weightless on the coffee like a cloud, sweet and rich, while the dark robusta cuts through from beneath. You drink it slowly, with a small spoon.',
    ingredientSections: [
        {
            title: 'Coffee base',
            items: [
                { amount: 2, unit: 'tbsp', name: 'Vietnamese robusta coffee grounds', note: 'coarsely ground, Trung Nguyen or equivalent' },
                { amount: 160, unit: 'ml', name: 'hot water', note: 'just off the boil, 94C' },
            ],
        },
        {
            title: 'Egg foam',
            items: [
                { amount: 2, name: 'egg yolks', note: 'very fresh, room temperature' },
                { amount: 3, unit: 'tbsp', name: 'sweetened condensed milk' },
                { amount: 1, unit: 'tsp', name: 'vanilla extract', note: 'optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Brew the coffee',
            description: 'Brew strong Vietnamese phin coffee or use a very concentrated French press. You need 80ml of dark, strong coffee per serving. Keep it hot in the cups while you prepare the foam. The cups should be pre-warmed in hot water.',
            tip: 'Robusta is non-negotiable here. Arabica is too mild and the foam will overpower it. Trung Nguyen, Highlands, or any Vietnamese robusta blend works well.',
        },
        {
            title: 'Whip the egg foam',
            description: 'Place egg yolks and condensed milk in a deep bowl. Using a hand mixer or whisk, beat vigorously for 3 to 5 minutes until the mixture triples in volume, turns pale yellow, and holds a soft ribbon when you lift the whisk. It should be the texture of very thick whipped cream.',
            tip: 'The longer you whip, the more stable the foam. Under-whipped foam sinks into the coffee immediately. You want it to sit proud on top for at least 5 minutes.',
        },
        {
            title: 'Assemble and serve',
            description: 'Pour hot coffee into pre-warmed small glasses or ceramic cups, filling two-thirds. Spoon the egg foam gently over the coffee to fill the cup. Do not stir. Serve immediately with a small spoon.',
            tip: 'Traditional ca phe trung is served in a small glass sitting inside a bowl of hot water to keep it warm as you drink. A simple but effective touch.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
