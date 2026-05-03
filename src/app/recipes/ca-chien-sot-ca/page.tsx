'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-chien-sot-ca',
    title: 'Crispy Fish in Tomato Sauce',
    subtitle:
        'Cá Chiên Sốt Cà — a whole pan-fried fish with shattering-crisp skin, bathed in a bright tomato-scallion-dill sauce.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.6,
    baseServings: 4,
    heroImage: '/images/recipes/ca-chien-sot-ca.jpg',
    intro:
        'Cá sốt cà is the quiet hero of the Northern home kitchen — the kind of dish you never see in restaurants because every grandmother already makes it on a Tuesday. The contrast is everything: shattering-crisp skin against the bright, almost Italian-feeling tomato sauce, both cooled by a final shower of fresh dill.',
    ingredientSections: [
        {
            title: 'Fish',
            items: [
                { amount: 1, name: 'whole pomfret or sea bass, ~700g', note: 'scored on both sides' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'for frying' },
            ],
        },
        {
            title: 'Tomato sauce',
            items: [
                { amount: 5, name: 'ripe tomatoes', note: 'chopped' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 100, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tbsp', name: 'tomato paste', note: 'optional, for depth' },
            ],
        },
        {
            title: 'Finish',
            items: [
                { amount: 3, name: 'spring onions', note: 'cut in 4cm batons' },
                { amount: 1, name: 'small bunch of dill', note: 'chopped' },
                { amount: 0.5, unit: 'tsp', name: 'freshly cracked black pepper' },
            ],
        },
    ],
     steps: [
            {
                title: 'Dry and season the fish',
                description: 'Use paper towels to pat the fish completely dry on both sides and inside the cavity. Score the flesh in a criss-cross pattern and rub a mixture of salt and turmeric powder into the marks to enhance flavor and achieve a vibrant color.',
                tip: 'Wet fish + hot oil = a steam explosion. Dry the fish twice—once when you bring it home and once more right before it hits the pan to ensure maximum crispiness.',
            },
            {
                title: 'Fry to golden',
                description: 'Heat oil in a wok or large pan until it shimmers. Carefully slide the fish in and fry for about 5 to 7 minutes per side over medium-high heat until the skin is shattering-crisp and the meat is cooked through. Remove the fish and let it rest on a wire rack to prevent the bottom from getting soggy.',
                tip: 'Do not flip the fish too early. Wait until the edges look golden and the fish releases easily from the pan surface.',
            },
            {
                title: 'Build the sauce base',
                description: 'Drain most of the frying oil, leaving about two tablespoons in the pan. Toss in finely minced shallots and garlic, sautéing them over medium heat until they turn a pale golden brown and fill the kitchen with their aroma.',
                tip: 'Using the same oil used for frying the fish adds an extra layer of savory seafood depth to your tomato sauce.',
            },
            {
                title: 'Break down the tomatoes',
                description: 'Add chopped tomatoes to the pan along with fish sauce, a pinch of sugar, and a splash of water. Cover and simmer for about 10 minutes, mashing the tomatoes occasionally with your spatula until they collapse into a thick, jammy sauce.',
                tip: 'If the tomatoes aren’t juicy enough, add a tablespoon of tomato paste to boost the color and provide a richer "umami" base.',
            },
            {
                title: 'Return the fish to the sauce',
                description: 'Gently nestle the fried fish back into the pan. Use a spoon to pour the bubbling tomato sauce over the fish, ensuring it seeps into the score marks. Simmer for 3 minutes to allow the flavors to marry without losing the skin\'s crunch.',
                tip: 'Keep the heat low during this stage so the sauce thickens slightly rather than burning off.',
            },
            {
                title: 'Shower with dill and scallion',
                description: 'Turn off the heat and immediately scatter a generous handful of chopped spring onions and fresh dill over the fish. Finish with a final crack of black pepper and serve immediately alongside a bowl of hot jasmine rice.',
                tip: 'Dill is the "secret ingredient" for Vietnamese fish dishes; its citrusy notes cut through the richness of the fried fish perfectly.',
            },
        ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
