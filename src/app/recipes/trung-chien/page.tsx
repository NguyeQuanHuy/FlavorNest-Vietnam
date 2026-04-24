'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'trung-chien',
    title: 'Vietnamese Fried Egg Omelette',
    subtitle:
        'Trứng Chiên — eggs beaten with fish sauce and spring onion, fried in generous oil until the edges go lace-crisp and the centre stays just set.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '10 min',
    rating: 4.6,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=1600&q=80',
    intro:
        'Every Vietnamese student learns to make trứng chiên the week they leave home. It is the dish you fall back on when the rice is cooked and the fridge is almost empty — eggs, fish sauce, spring onion, sometimes a tablespoon of minced pork if you feel fancy. The secret, if there is one, is more oil than you think is right.',
    ingredientSections: [
        {
            title: 'Eggs',
            items: [
                { amount: 4, name: 'large eggs' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.25, unit: 'tsp', name: 'white pepper' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Optional add-ins',
            items: [
                { amount: 80, unit: 'g', name: 'minced pork', note: 'pre-cooked and cooled' },
                { amount: 1, name: 'shallot', note: 'finely minced' },
                { amount: 10, unit: 'g', name: 'dried wood ear mushrooms', note: 'soaked and chopped' },
            ],
        },
        {
            title: 'Fry',
            items: [
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'more than you think' },
            ],
        },
    ],
    steps: [
        {
            title: 'Beat the eggs properly',
            description: 'TODO — whisk eggs with fish sauce, sugar and white pepper for a full 30 seconds until light and foamy.',
            tip: 'TODO — under-beaten eggs give a dense omelette. You want air in there.',
        },
        {
            title: 'Fold in the add-ins',
            description: 'TODO — stir in spring onion and any pre-cooked pork or wood ear.',
        },
        {
            title: 'Heat oil until it shimmers',
            description: 'TODO — pan must be hot enough to puff the eggs the moment they hit.',
            tip: 'TODO — a cool pan gives you scrambled eggs, not an omelette.',
        },
        {
            title: 'Pour in one motion',
            description: 'TODO — tilt pan, pour eggs, swirl once to spread; edges should bubble immediately.',
        },
        {
            title: 'Flip when edges are lace',
            description: 'TODO — when underside is golden-brown with crispy edges, flip once; cook the second side 30 seconds.',
        },
        {
            title: 'Serve with rice and soy',
            description: 'TODO — slide onto plate; serve with hot rice and a small dish of soy sauce or fish sauce with chilli.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
