'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-luc-lac',
    title: 'Shaking Beef',
    subtitle:
        'Bò Lúc Lắc — cubes of tender beef wok-tossed in butter, garlic and oyster sauce, served on peppery watercress with a lime-salt-pepper dip.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1544025162-d76694265947?w=1600&q=80',
    intro:
        'A Saigon steakhouse classic carried over from the French colonial kitchen, bò lúc lắc literally means "shaking beef" — a reference to the violent tossing motion that caramelises every face of the cube in seconds. The watercress underneath wilts in the beef\'s juices; the lime-pepper-salt dip ties everything together.',
    ingredientSections: [
        {
            title: 'Beef and marinade',
            items: [
                { amount: 500, unit: 'g', name: 'beef tenderloin or ribeye', note: 'cut in 3cm cubes' },
                { amount: 2, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'freshly cracked black pepper' },
            ],
        },
        {
            title: 'Wok',
            items: [
                { amount: 30, unit: 'g', name: 'unsalted butter' },
                { amount: 6, name: 'garlic cloves', note: 'smashed' },
                { amount: 1, name: 'red onion', note: 'cut in wedges' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Plate and dip',
            items: [
                { amount: 1, name: 'bunch watercress', note: 'washed and dried' },
                { amount: 2, name: 'tomatoes', note: 'sliced' },
                { amount: 2, name: 'limes', note: 'halved' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the beef',
            description: 'TODO — toss beef cubes with oyster sauce, soy, sugar, pepper; rest 15 minutes.',
            tip: 'TODO — do not marinate longer than 30 minutes or the beef turns mushy.',
        },
        {
            title: 'Dress the watercress bed',
            description: 'TODO — arrange watercress and tomato on a wide platter.',
        },
        {
            title: 'Heat the wok until smoking',
            description: 'TODO — the wok must be screaming hot before the beef goes in.',
            tip: 'TODO — a cold wok = grey, steamed beef. This is the one step that matters.',
        },
        {
            title: 'Shake the beef',
            description: 'TODO — oil in, beef in single layer, let it crust, then shake the pan continuously for 90 seconds.',
        },
        {
            title: 'Finish with butter and garlic',
            description: 'TODO — add butter, garlic and onion; toss 30 seconds more.',
        },
        {
            title: 'Plate and serve with dip',
            description: 'TODO — tip beef over watercress; serve with lime-salt-pepper in small bowls.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
