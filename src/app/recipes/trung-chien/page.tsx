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
    heroImage: '/images/recipes/trung-chien.jpg',
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
            description: 'In a bowl, combine the eggs with a splash of fish sauce, a pinch of sugar, and ground white pepper. Whisk the mixture vigorously for at least 30 seconds until it is light, pale, and covered in a thick layer of foam.',
            tip: 'Under-beaten eggs result in a dense, heavy omelette. You want to incorporate as much air as possible so the omelette puffs up beautifully when it hits the hot oil.',
        },
        {
            title: 'Fold in the add-ins',
            description: 'Gently stir in a handful of chopped spring onions and any optional extras like rehydrated wood ear mushrooms or finely minced pork that has been pre-cooked to ensure everything is evenly distributed.',
        },
        {
            title: 'Heat oil until it shimmers',
            description: 'Heat a tablespoon of oil in a non-stick pan over medium-high heat. The oil is ready when it shimmers and moves like water across the surface; it must be hot enough to instantly sizzle the eggs.',
            tip: 'A cool pan gives you flat, greasy scrambled eggs rather than a light omelette. Wait for that shimmering heat to achieve the signature crispy, "lacy" edges.',
        },
        {
            title: 'Pour in one motion',
            description: 'Pour the egg mixture into the center of the pan in one steady motion. Immediately tilt the pan in a circular movement to spread the eggs to the edges; you should see the egg mixture bubble and rise instantly.',
        },
        {
            title: 'Flip when edges are lace',
            description: 'Cook for about 1-2 minutes until the underside is a deep golden-brown with crispy, lacy edges. Carefully flip the omelette over with a spatula and cook the second side for only 30 seconds to set the remaining egg.',
        },
        {
            title: 'Serve with rice and soy',
            description: 'Slide the omelette onto a plate while it is still hot. Serve immediately with a bowl of steaming jasmine rice and a small side dish of soy sauce or fish sauce with freshly sliced bird\'s eye chilies.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
