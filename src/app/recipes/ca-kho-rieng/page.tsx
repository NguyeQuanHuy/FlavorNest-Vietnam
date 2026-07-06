'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-kho-rieng',
    title: 'Cá Kho Riềng (Fish Braised with Galangal)',
    subtitle: 'Freshwater fish sections caramelized in dark sugar then braised with a generous amount of fresh galangal — more galangal than ginger, more galangal than the southern kho tradition ever uses — until the sauce reduces to a thick, aromatic glaze that is warm and piney-citrus in a way that ginger-forward kho never achieves. The northern Vietnamese kho where galangal is not an accessory but the point.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-kho-rieng.jpg',
    intro: `Cá kho riềng is the galangal-braised fish of northern Vietnam — a kho preparation that is as specifically northern as cá trắm kho cần and that demonstrates the fundamental aromatic difference between northern and southern Vietnamese kho cooking. In the south, ginger (gừng) is the dominant kho aromatic — appearing in cá trê kho tộ, vịt kho gừng, and the fish kho preparations of the Mekong Delta in the starring role. In the north, galangal (riềng) holds this position — a rhizome that is related to ginger but produces a significantly different aromatic character: warmer, more complex, with a specific piney-citrus note that ginger does not have and that pairs with freshwater fish in a way that makes cá kho riềng taste both more intensely spiced and more specifically northern than any southern kho preparation. Riềng — fresh galangal, Alpinia galanga — has been used in northern Vietnamese cooking for centuries, appearing in the five-spice mixture of the north (which differs from the southern version in its galangal content), in the marinades for northern grilled meats, and most prominently in the kho preparations of the Red River Delta. The quantity used in cá kho riềng is the quantity that marks the cook as northern: 80-100g of fresh galangal for 700-800g of fish, sliced thicker than for southern preparations so that each piece remains identifiable in the finished kho rather than dissolving into the sauce. The galangal in the finished dish is eaten as a food in itself rather than discarded — the long braising time softens it to a yielding, intensely flavored piece that is the most prized element of the bowl for those who grew up eating cá kho riềng.`,
    ingredientSections: [
        {
            title: 'Fish',
            items: [
                { amount: 700, unit: 'g', name: 'freshwater fish sections', note: 'cá trắm, cá chép, or cá rô phi — bone-in sections 5-6cm. Score each section once.' },
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce', note: 'for pre-marinating' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Northern kho base — galangal-starring',
            items: [
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'for the dark caramel' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 90, unit: 'g', name: 'fresh galangal (riềng tươi)', note: 'peeled and sliced 3-4mm thick — thick enough to remain identifiable in the finished kho. This is the starring ingredient.' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: 'thinly sliced — secondary, supporting role only' },
                { amount: 5, name: 'garlic cloves', note: 'smashed' },
                { amount: 4, name: 'shallots', note: 'halved' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'whole — heat without sharpness' },
                { amount: 1, unit: 'tsp', name: 'fermented shrimp paste (mắm tôm)', note: 'small amount — the northern umami addition that southern kho does not use' },
            ],
        },
        {
            title: 'Braising liquid',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'dark soy sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 200, unit: 'ml', name: 'water' },
            ],
        },
        {
            title: 'Garnish and to serve',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced — added at the end' },
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the fish with turmeric',
            description: 'Combine fish sections with fish sauce, turmeric, and black pepper. Toss to coat. Marinate 20 minutes. The turmeric in cá kho riềng provides a golden base that works visually and aromatically with the galangal — both have warm, slightly earthy characters that reinforce each other. The turmeric gold beneath the dark caramel produces the specific appearance of northern fish kho that is different from the uniform dark brown of southern versions.',
            tip: 'The combination of turmeric in the marinade and galangal in the kho base produces two layers of warm aromatic character in the finished dish — the turmeric providing earthy warmth throughout the flesh and the galangal providing the piney-citrus warmth in the sauce. These two aromatics from different rhizome species are specifically compatible in the way that they do not compete but accumulate.',
        },
        {
            title: 'Build the dark caramel and fry the galangal',
            description: 'Make a dark caramel with oil and sugar. When the caramel is deep amber, add the thick galangal slices immediately. The galangal will sizzle in the hot caramel. Fry for 3 minutes until the galangal edges caramelize and the piney-citrus aroma begins to release into the room — this specific aroma is the moment that confirms the galangal is cooking correctly. Add ginger slices, garlic, shallots, and chilies. Add the small amount of mắm tôm and stir into the caramel.',
            tip: 'The 3-minute frying of the galangal slices in the hot caramel before anything else is the technique that develops the galangal\'s best character. Raw galangal is harsh and medicinal; caramelized galangal in dark sugar is warm, complex, and specifically piney-citrus in a way that is the defining aromatic of cá kho riềng. The mắm tôm adds the northern umami depth that fermented shrimp paste contributes throughout northern Vietnamese cooking.',
        },
        {
            title: 'Sear fish and add braising liquid',
            description: 'Add the marinated fish sections to the galangal caramel. Sear 2 minutes skin-side down. Flip and sear 1 minute. Add fish sauce, dark soy, sugar, pepper, and water around the fish. The water should come about halfway up the fish sections — not enough to submerge. Bring to a boil then reduce to the lowest possible simmer.',
            tip: 'The galangal slices visible in the pot alongside the fish sections as the braising begins are one of the most appealing visual elements of cá kho riềng preparation — the thick golden-caramelized rounds of galangal among the dark caramel and the turmeric-golden fish is the specific visual of this northern dish before the braising reduces everything to the final glaze.',
        },
        {
            title: 'Braise uncovered — 30-35 minutes',
            description: 'Braise uncovered at the lowest simmer for 30-35 minutes. Turn the fish once at 18 minutes. The galangal slices during the braise will soften from firm to yielding — by 30 minutes they should be completely tender and have absorbed the surrounding sauce completely, becoming intensely flavored pieces that are the most concentrated expression of the galangal-caramel combination in the dish. The sauce should reduce to a thick, dark glaze by 30-35 minutes.',
            tip: 'The galangal pieces in the finished cá kho riềng — soft, dark with absorbed caramel, intensely flavored throughout — are eaten and prized rather than discarded. This is the northern understanding of galangal in kho: not an aromatic to be removed but a vegetable-condiment to be consumed. In the south, galangal matchsticks in kho are often thinner and more fully dissolved; in the north, the thick slices remain identifiable and are the most anticipated pieces in the pot.',
        },
        {
            title: 'Finish and serve',
            description: 'Add shredded kaffir lime leaves, sliced spring onion, and freshly ground black pepper. The finished cá kho riềng: dark, thick sauce coating the fish and the galangal pieces equally, the piney-citrus fragrance of the galangal still present through the caramel depth. Serve from the clay pot with plain hot rice. The galangal pieces should be distributed to each bowl alongside the fish — they are not garnish but an equal component of the dish.',
            tip: 'Serving the galangal pieces equally with the fish sections is the northern table manner for cá kho riềng that most clearly expresses the dish\'s philosophy. The galangal is not extracted before service; it is an equal component. A bowl of cá kho riềng that contains only fish and no galangal is an incomplete bowl.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
