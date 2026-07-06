'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-canh-gio-heo',
    title: 'Bánh Canh Giò Heo (Pork Hock Thick Noodle Soup)',
    subtitle: 'The thick, silky noodle soup of central Vietnam — a pork hock so tender it falls from the bone, in a broth so clear and rich it is almost impossible to stop eating.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-canh-gio-heo.jpg',
    intro: `Bánh canh is the thick noodle soup that most international visitors to Vietnam have never heard of — and every Vietnamese person considers one of the great comfort foods. The noodles are thick, round, and made from tapioca or rice flour, with a silky, slightly chewy texture that is entirely unlike thin rice vermicelli. The soup base is pork — specifically giò heo (pork hock), simmered until the collagen dissolves into the broth and the meat falls away from the bone with minimal encouragement. The result is a broth with extraordinary body and richness, completely clear despite its depth of flavor. Bánh canh giò heo is the version most associated with central Vietnam, particularly Huế, where it is eaten for breakfast and late-night supper with equal enthusiasm.`,
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 1.5, unit: 'kg', name: 'pork hock (giò heo)', note: 'ask butcher to cut into 4-5cm sections through the bone' },
                { amount: 500, unit: 'g', name: 'pork ribs', note: 'for additional body — optional but recommended' },
                { amount: 2.5, unit: 'L', name: 'water' },
                { amount: 3, name: 'shallots', note: 'halved and charred over flame until blackened' },
                { amount: 4, name: 'garlic cloves', note: 'lightly crushed' },
                { amount: 2, name: 'lemongrass stalks', note: 'bruised, tied in knot' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Noodles and toppings',
            items: [
                { amount: 600, unit: 'g', name: 'fresh bánh canh noodles', note: 'thick tapioca noodles — Asian grocery stores. Dried udon is an acceptable substitute.' },
                { amount: 4, name: 'spring onions, thinly sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 1, name: 'fresh red chili, sliced', note: 'for serving' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the bones',
            description: 'Place pork hock and ribs in a pot, cover with cold water, bring to a boil and blanch hard for 10 minutes. Drain, rinse every piece under cold running water to remove impurities. Wash the pot. This step is non-negotiable — it is what keeps the broth crystal clear.',
            tip: 'The blanching water will turn grey with foam and blood. This is exactly what you want out of the broth. Rinse thoroughly.',
        },
        {
            title: 'Char the aromatics',
            description: 'Halve the shallots and hold cut-side directly over a gas flame with tongs until the cut surface is deeply blackened — about 5 minutes. The char adds sweetness and smokiness to the broth.',
            tip: 'No gas stove? Place shallots cut-side up under the broiler on highest setting, 5-8 minutes until blackened.',
        },
        {
            title: 'Build and simmer the broth',
            description: 'Return cleaned bones to the washed pot. Add 2.5L cold water, charred shallots, garlic, and lemongrass. Bring to a gentle boil, immediately reduce to the lowest possible simmer — barely moving, with only 2-3 bubbles breaking the surface every few seconds. Skim the foam that rises in the first 20 minutes. Simmer uncovered for 1.5-2 hours. The pork hock is done when the meat is completely tender and beginning to pull away from the bone.',
            tip: 'Never let the broth boil during the long simmer — boiling emulsifies the fat and clouds the broth permanently. The lazy simmer is what produces the clear, golden result.',
        },
        {
            title: 'Season the broth',
            description: 'Remove the pork hock pieces and ribs. Strain the broth through a fine-mesh sieve, discarding the aromatics. Return the clear broth to the pot. Season with fish sauce, sugar, and salt — taste and adjust. The broth should be intensely savory and slightly sweet. Return the pork hock pieces to the strained broth.',
            tip: 'Taste cold — salt perception changes with temperature. Season for room temperature; the hot version will taste correct at the table.',
        },
        {
            title: 'Make scallion oil',
            description: 'Heat 2 tablespoons of neutral oil in a small pan until just beginning to smoke. Remove from heat and immediately pour over sliced spring onion in a small bowl. The sizzle cooks the onion slightly and releases the aromatic oils. This is the finishing drizzle over each bowl.',
            tip: 'The oil must be hot enough to sizzle on contact. If it does not sizzle, the onion does not bloom properly.',
        },
        {
            title: 'Cook noodles and assemble',
            description: 'Blanch bánh canh noodles in boiling water according to package — fresh noodles need only 1-2 minutes. Drain and divide among bowls. Ladle boiling hot broth over the noodles. Add pork hock pieces. Top with spring onion oil, cilantro, fried shallots, and sliced chili. Serve with lime wedges.',
            tip: 'The broth must be at a full boil when ladled — this finishes the noodles in the bowl. Serve immediately.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
