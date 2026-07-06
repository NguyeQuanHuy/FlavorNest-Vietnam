'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-xuong-ham-mang-kho',
    title: 'Canh Xuong H?m Mang Khô (Pork Bone Soup with Dried Bamboo Shoots)',
    subtitle: 'Pork neck bones simmered for two hours with dried bamboo shoots that have been reconstituted and braised until tender — a deeply savory, slightly earthy soup that Vietnamese families make on cold days and for T?t celebrations.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr 30 min',
    rating: 4.8,
    baseServings: 6,
    heroImage: '/images/recipes/canh-xuong-ham-mang-kho.jpg',
    intro: `Canh xuong h?m mang khô is the soup that tastes of time. There is no shortcut for the two-hour simmer that extracts the collagen from pork neck bones and the complex, smoky-earthy flavor from dried bamboo shoots that have been reconstituted over 24 hours. The dried bamboo shoots — mang khô — are not the same ingredient as fresh or canned bamboo. Dried bamboo has been fermented slightly during the drying process, developing a depth of flavor — smoky, earthy, slightly funky — that fresh bamboo does not carry. When simmered with pork bones, the bamboo absorbs the richness of the pork while the pork absorbs the earthiness of the bamboo. The result is a broth of extraordinary complexity — one of the most satisfying winter soups in Vietnamese cooking. Canh xuong h?m mang khô is a T?t dish in many northern families and an everyday cold-weather soup in homes throughout the country. The preparation time is long; the active cooking time is short; the result is disproportionately good.`,
    ingredientSections: [
        {
            title: 'Bones and pork',
            items: [
                { amount: 1, unit: 'kg', name: 'pork neck bones (xuong c? heo)', note: 'ask butcher to cut through the bone — chopped into 6-8cm sections. Or use spare ribs.' },
                { amount: 300, unit: 'g', name: 'pork belly (ba ch?)', note: 'optional — adds richness and something to eat beyond the bones' },
                { amount: 2, unit: 'L', name: 'water' },
            ],
        },
        {
            title: 'Dried bamboo shoots',
            items: [
                { amount: 150, unit: 'g', name: 'dried bamboo shoots (mang khô)', note: 'the yellow-brown dried strips — NOT fresh or canned bamboo. Soak 24 hours before cooking (see step 1).' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 3, name: 'shallots', note: 'sliced' },
                { amount: 3, name: 'garlic cloves', note: 'sliced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for braising the bamboo' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Aromatics and seasoning',
            items: [
                { amount: 3, name: 'shallots', note: 'halved and charred — for the broth' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '4 slices, smashed' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 4, name: 'spring onions, sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'freshly ground — for finishing each bowl' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Reconstitute the dried bamboo — 24 hours ahead',
            description: 'Place the dried bamboo shoots in a large bowl. Cover generously with cold water — they expand to 3-4 times their dry volume. Soak at room temperature for 24 hours, changing the water 2-3 times. After soaking, the bamboo strips should be pliable and have lost most of their dry, compressed form. Drain and rinse. Tear or cut into pieces 5-6cm long and 1-2cm wide. The reconstituted bamboo should smell earthy and slightly fermented — this is correct.',
            tip: 'The 24-hour soak with multiple water changes is not optional. Under-soaked bamboo remains tough and has an overpowering fermented smell that dominates the soup. Fully reconstituted bamboo has a pleasant earthiness.',
        },
        {
            title: 'Blanch the pork bones',
            description: 'Place pork neck bones and pork belly in a pot. Cover with cold water. Bring to a vigorous boil and blanch for 10 minutes. The water will turn grey with foam. Drain completely. Rinse every piece under cold running water, scrubbing off any dark residue. Wash the pot. This step is essential for a clear, clean-flavored broth.',
            tip: 'Thorough rinsing after blanching — not just a quick rinse — is what produces the clear amber broth. Any residue left on the bones will cloud the soup.',
        },
        {
            title: 'Braise the bamboo shoots',
            description: 'Heat oil in a wok or pan over medium-high heat. Fry sliced shallots and garlic until golden. Add the reconstituted bamboo strips and stir-fry for 3-4 minutes until heated through. Add fish sauce and sugar. Toss to coat and cook for another 2 minutes until the bamboo is slightly caramelized and well-seasoned. This braising step deepens the flavor of the bamboo before it goes into the soup.',
            tip: 'Braising the bamboo separately before adding to the soup is the step that most home recipes skip and that makes the biggest difference in final flavor. Raw bamboo added to the soup produces a flat, one-dimensional result.',
        },
        {
            title: 'Build and simmer the broth',
            description: 'Return cleaned bones to the pot. Add 2L cold water, charred shallots, and ginger. Bring to a boil, immediately reduce to the lowest possible simmer. Skim foam during the first 20 minutes. After 30 minutes, add the braised bamboo strips to the broth. Continue simmering uncovered for 1.5-2 hours total. The broth deepens in color and body as it simmers.',
            tip: 'The lazy simmer — barely moving — is essential. Vigorous boiling clouds the broth and emulsifies the fat. The finished broth should be clear amber-gold.',
        },
        {
            title: 'Season and taste',
            description: 'After 2 hours, taste the broth. It should be deeply savory with the earthiness of the bamboo prominent but integrated — not raw or overpowering. Season with fish sauce, sugar, salt, and white pepper. The bamboo should be completely tender — a chopstick should pass through without resistance. The pork belly, if used, should be completely soft.',
            tip: 'The bamboo flavor should be noticeable but not dominant. If it tastes too strongly of the fermented bamboo, simmer for another 30 minutes — the continued cooking mellows the sharpness.',
        },
        {
            title: 'Serve in deep bowls',
            description: 'Ladle the broth, bamboo, and bone pieces into deep bowls. If using pork belly, slice and add a few pieces per bowl. Top with sliced spring onion, cilantro, and freshly ground white pepper. Serve with steamed rice alongside and lime wedges for squeezing. The white pepper is the essential finishing seasoning — add it at the table, not during cooking.',
            tip: 'The correct way to eat this soup: a spoonful of broth first to taste its full depth, then the bamboo (which should be completely tender and carrying the pork flavor), then the meat from the bones gnawed directly — canh xuong is never eaten with cutlery.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
