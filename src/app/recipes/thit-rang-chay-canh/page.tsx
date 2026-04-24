'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'thit-rang-chay-canh',
    title: 'Caramelised Crispy Pork',
    subtitle:
        'Thịt Rang Cháy Cạnh — pork belly cubes slow-fried in their own fat until the edges turn mahogany-black and shatter-crisp, glazed in fish sauce caramel.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.8,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1625398407937-2993c7d2b33b?w=1600&q=80',
    intro:
        'Cháy cạnh means "burnt edges," and the burnt edges are the whole reason this dish exists. Pork belly is simmered briefly, then slow-fried in its own rendered fat until the cubes shrink, crack, and develop a mahogany-black crust that shatters under a chopstick. Served with white rice and a bowl of hot clear soup — no vegetable needed, no apology offered.',
    ingredientSections: [
        {
            title: 'Pork',
            items: [
                { amount: 600, unit: 'g', name: 'pork belly', note: 'skin on, cut in 2cm cubes' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Caramel glaze',
            items: [
                { amount: 40, unit: 'g', name: 'palm sugar' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'bird\'s eye chillies', note: 'optional, sliced' },
            ],
        },
        {
            title: 'Finish',
            items: [
                { amount: 1, unit: 'tsp', name: 'freshly cracked black pepper' },
                { amount: 2, name: 'spring onions', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Par-boil the pork',
            description: 'TODO — blanch pork cubes in salted boiling water 8 minutes, drain, pat completely dry.',
            tip: 'TODO — wet pork will not crisp. Dry it twice.',
        },
        {
            title: 'Render the fat',
            description: 'TODO — dry wok over medium heat, add pork cubes fat-side down; let them release oil for 10 minutes.',
        },
        {
            title: 'Slow-fry to crisp',
            description: 'TODO — once fat pools, increase heat and fry pork 12 minutes, tossing, until edges blacken and crackle.',
            tip: 'TODO — keep moving the cubes or one side will char before the others develop.',
        },
        {
            title: 'Drain excess fat',
            description: 'TODO — tilt wok and spoon out all but 2 tablespoons of fat.',
        },
        {
            title: 'Build the glaze',
            description: 'TODO — add palm sugar to remaining fat; when it melts to dark amber, add shallots, garlic, chilli and fish sauce.',
        },
        {
            title: 'Toss and serve',
            description: 'TODO — toss pork in the bubbling glaze 60 seconds until each cube is lacquered; finish with pepper and spring onion; serve over hot rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
