'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-phe-muoi',
    title: 'Salted Coffee',
    subtitle: 'A Hue specialty — bitter coffee beneath a cloud of salted cream. Once you try it, regular coffee feels incomplete.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '10 min',
    rating: 4.8,
    baseServings: 2,
    heroImage: '/images/recipes/ca-phe-muoi.jpg',
    intro: 'Ca phe muoi comes from Hue, Vietnam\'s former imperial capital — a city known for its refined, complex food culture. The concept is simple: strong coffee topped with a lightly salted whipped cream foam. The salt does something remarkable to the sweetness of the cream and the bitterness of the coffee, creating a harmony that is greater than the sum of its parts. It has become one of Vietnam\'s most-photographed drinks and for good reason.',
    ingredientSections: [
        {
            title: 'Coffee base',
            items: [
                { amount: 2, unit: 'tbsp', name: 'Vietnamese robusta coffee grounds' },
                { amount: 160, unit: 'ml', name: 'hot water' },
                { amount: 2, unit: 'tsp', name: 'sweetened condensed milk', note: 'optional, for sweetness' },
            ],
        },
        {
            title: 'Salted cream foam',
            items: [
                { amount: 120, unit: 'ml', name: 'heavy whipping cream', note: 'cold' },
                { amount: 1, unit: 'tbsp', name: 'sweetened condensed milk' },
                { amount: 1, name: 'pinch of sea salt', note: 'fine, not flaky' },
            ],
        },
    ],
    steps: [
        {
            title: 'Brew the coffee',
            description: 'Brew strong coffee via phin filter or French press. Pour into two small glasses or cups, adding condensed milk to the base if desired. Keep hot.',
        },
        {
            title: 'Make the salted cream',
            description: 'Combine cold heavy cream, condensed milk, and sea salt in a bowl. Whisk or use a hand mixer on medium speed for 2 to 3 minutes until the cream thickens to a pourable, slightly fluffy consistency. It should flow slowly off a spoon — not stiff peaks, not liquid.',
            tip: 'Cold cream whips faster and more stably. Do not over-whip into stiff peaks — the cream should pour gently over the coffee, not sit like a meringue.',
        },
        {
            title: 'Assemble and serve',
            description: 'Pour salted cream gently over the back of a spoon onto the hot coffee so it floats on top. Do not stir. Drink through the cream layer so each sip passes through salt, sweet cream, and bitter coffee simultaneously.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
