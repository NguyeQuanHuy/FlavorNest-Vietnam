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
    heroImage: '/images/recipes/thit-rang-chay-canh.jpg',
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
            description: 'Blanch the pork belly cubes in salted boiling water for about 8 minutes. This firms up the meat and removes impurities. Drain the pork and use paper towels to pat each piece completely dry before frying.',
            tip: 'Wet pork will not crisp; it will steam instead. Dry the meat twice—once right after draining and again just before it hits the wok—to ensure a golden, crunchy exterior.',
        },
        {
            title: 'Render the fat',
            description: 'Place a dry wok over medium heat and add the pork cubes, placing them fat-side down. Let them sit undisturbed for about 10 minutes to allow the natural pork fat to render out and pool in the bottom of the pan.',
        },
        {
            title: 'Slow-fry to crisp',
            description: 'Once enough fat has pooled, increase the heat slightly and fry the pork for another 12 minutes. Toss the pieces continuously until the edges begin to blacken, blister, and develop a deep, crackling texture.',
            tip: 'Keep the cubes moving constantly. If they sit too long on one side, they will char and become bitter before the other sides have a chance to develop a proper crust.',
        },
        {
            title: 'Drain excess fat',
            description: 'Once the pork is crispy and golden, tilt the wok to one side. Use a spoon to carefully remove the majority of the rendered lard, leaving only about 2 tablespoons in the pan to serve as the base for your glaze.',
        },
        {
            title: 'Build the glaze',
            description: 'Add palm sugar directly into the remaining fat. Once it melts into a dark amber syrup, toss in the minced shallots, garlic, and sliced chilies. Pour in the fish sauce, letting it bubble and thicken into a fragrant, savory glaze.',
        },
        {
            title: 'Toss and serve',
            description: 'Toss the crispy pork back into the bubbling glaze for 60 seconds until every cube is perfectly lacquered. Finish with a generous crack of black pepper and chopped spring onions, then serve immediately over a bowl of hot jasmine rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
