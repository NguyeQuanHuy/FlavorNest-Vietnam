'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'vietnamese-coffee-tiramisu',
    title: 'Vietnamese Coffee Tiramisu',
    subtitle:
        'A dialogue between Italian tradition and Saigon street coffee — mascarpone meets cà phê sữa đá.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '45 min + 6h chill',
    rating: 4.9,
    baseServings: 8,
    heroImage: '/images/recipes/vietnamese-coffee-tiramisu.jpg',
    intro:
        'The Italian classic reimagined through a Vietnamese lens. Dark Robusta coffee pulled through a phin filter, sweetened with condensed milk, soaks the ladyfingers — while silky mascarpone cream carries the rest of the tiramisu DNA. The result feels familiar yet distinctly Saigon.',
    ingredientSections: [
        {
            title: 'Coffee soak',
            items: [
                { amount: 200, unit: 'ml', name: 'strong Vietnamese phin coffee', note: 'cooled' },
                { amount: 80, unit: 'ml', name: 'sweetened condensed milk' },
                { amount: 30, unit: 'ml', name: 'Kahlúa or dark rum', note: 'optional' },
            ],
        },
        {
            title: 'Mascarpone cream',
            items: [
                { amount: 500, unit: 'g', name: 'mascarpone cheese', note: 'room temp' },
                { amount: 4, name: 'egg yolks', note: 'large' },
                { amount: 100, unit: 'g', name: 'caster sugar' },
                { amount: 1, name: 'pinch of sea salt' },
            ],
        },
        {
            title: 'Assembly',
            items: [
                { amount: 24, name: 'ladyfinger biscuits (savoiardi)' },
                { amount: 30, unit: 'g', name: 'unsweetened cocoa powder', note: 'for dusting' },
            ],
        },
    ],
    steps: [
        {
            title: 'Brew the phin coffee',
            description:
                'Brew 200ml of strong Vietnamese coffee using a phin filter (or substitute with a very concentrated French press). Let it cool completely. Stir in the condensed milk until fully dissolved, then add the Kahlúa if using. This is the soul of the dish — no shortcuts with instant coffee.',
            tip: 'Trung Nguyên or Highlands Robusta gives the deepest, most bittersweet flavor. Arabica is too mild here.',
        },
        {
            title: 'Whip the mascarpone cream',
            description:
                'Set a heatproof bowl over a pan of barely simmering water (bain-marie). Whisk the egg yolks with sugar until pale, thick, and warm to the touch — about 5 minutes. Remove from heat and continue whisking until cooled. Fold in the mascarpone gently with a spatula until smooth and silky.',
            tip: 'If the mascarpone is cold, it will split. Let it sit out for 30 minutes before mixing.',
        },
        {
            title: 'Dip the ladyfingers',
            description:
                'Working one at a time, dip each ladyfinger briefly into the coffee mixture — count to one on each side. Any longer and they will disintegrate. Lay them flat in a 20×25 cm dish, creating the first layer.',
        },
        {
            title: 'Layer the tiramisu',
            description:
                'Spread half of the mascarpone cream evenly over the soaked ladyfingers. Add a second layer of dipped ladyfingers on top, then cover with the remaining mascarpone. Smooth the surface with a spatula or the back of a spoon.',
        },
        {
            title: 'Chill overnight',
            description:
                'Cover tightly with plastic wrap and refrigerate for at least 6 hours — ideally overnight. This resting time is non-negotiable: the coffee needs to fully marry the cream, and the ladyfingers need to soften into that signature pillowy texture.',
            tip: 'Made 24 hours ahead, the flavor deepens noticeably. This dessert rewards patience.',
        },
        {
            title: 'Dust and serve',
            description:
                'Just before serving, sift a generous layer of cocoa powder over the top. Cut into squares with a warm knife (wipe between cuts for clean edges) and serve immediately — dust any sooner and the cocoa will turn damp and lose its bloom.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}