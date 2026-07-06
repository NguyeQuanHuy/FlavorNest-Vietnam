'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-nuc-kho-thom',
    title: 'Cá Nục Kho Thơm (Braised Mackerel Scad with Pineapple)',
    subtitle: 'Whole mackerel scad braised in a clay pot with caramelized fish sauce and fresh pineapple until the sauce reduces to a glossy sweet-sour glaze and the fish is firm, deeply seasoned, and better on day two — the central Vietnamese rice dish that defines kho cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-nuc-kho-thom.jpg',
    intro: `Cá nục kho thơm is the fish kho of the central Vietnamese coast — the everyday braise that appears on family tables from Đà Nẵng to Phú Yên wherever cá nục (mackerel scad) is landed, which is everywhere and constantly, because cá nục is one of the most abundant and affordable fish in the Vietnamese ocean. The pairing with thơm (pineapple — the southern and central word for what northerners call dứa) is not decorative: the pineapple's acidity and enzymes work on the oily, firm-fleshed mackerel during the braise, cutting the richness while its sugars melt into the caramelized fish sauce to produce a glaze that is simultaneously sweet, sour, salty, and deep. The technique is classic kho: a caramel (nước màu) made first, fish arranged in a single layer in a clay pot, pineapple and aromatics layered over, then a patient braise during which the liquid reduces by more than half and the flavor drives into the fish. Like all kho, cá nục kho thơm follows the rule that Vietnamese cooks state as fact: it is better the next day, after a night in the refrigerator lets the glaze set into the flesh completely. A pot made on Sunday feeds a family with rice through Tuesday, the fish firming and deepening with each reheat. This is the dish to learn if you want to understand why Vietnamese home cooking is built around kho.`,
    ingredientSections: [
        {
            title: 'Fish',
            items: [
                { amount: 700, unit: 'g', name: 'fresh mackerel scad (cá nục)', note: '5-6 whole fish, cleaned and gutted, heads on or off. Substitute: small mackerel, sardines, or horse mackerel — any small oily fish.' },
                { amount: 1, unit: 'tbsp', name: 'salt', note: 'for cleaning the fish' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for the pre-braise marinade' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Pineapple and aromatics',
            items: [
                { amount: 300, unit: 'g', name: 'fresh pineapple (thơm)', note: 'about half a pineapple — cut into wedges 1.5cm thick. Fresh only; canned pineapple is too sweet and collapses in the braise.' },
                { amount: 4, name: 'shallots', note: 'thinly sliced' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'one minced for the braise, one sliced for garnish' },
                { amount: 3, name: 'spring onions', note: 'whites for the braise, greens sliced for garnish' },
            ],
        },
        {
            title: 'Kho braising sauce',
            items: [
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'for the caramel (nước màu)' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
                { amount: 250, unit: 'ml', name: 'water or coconut water', note: 'coconut water (nước dừa) is the central-southern touch — adds gentle sweetness and gloss' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'plus more for finishing' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean and firm the fish',
            description: 'Rub the cleaned fish inside and out with salt, rinse under cold water, and pat completely dry. This salt rub removes surface slime and the residual blood that creates fishiness in a braise. Cut each fish crosswise into halves if large, or leave whole. Marinate with fish sauce and black pepper for 15 minutes while you prepare everything else.',
            tip: 'For an even firmer result, some central Vietnamese cooks briefly sear or sun-dry the fish for 30 minutes before braising — the slightly dried surface holds together better through the long kho. Optional, but it is the difference between fish that stays whole and fish that flakes apart.',
        },
        {
            title: 'Make the caramel (nước màu)',
            description: 'In the clay pot or a heavy saucepan, heat oil and sugar over medium heat without stirring. Swirl the pot as the sugar melts and darkens. Take it to deep amber — the color of strong tea — then immediately add 2 tablespoons of water to stop the cooking. It will spit aggressively; stand back. Swirl until smooth. This caramel is the color and the backbone of every kho.',
            tip: 'Deep amber, not light gold, not black. Pale caramel gives a flat, merely sweet kho; burnt caramel is irreversibly bitter. The 10 seconds between perfect and burnt is real — pull it early rather than late.',
        },
        {
            title: 'Layer the pot',
            description: 'Off the heat, scatter half the sliced shallots, garlic, and the spring onion whites over the caramel. Arrange the fish in a single layer on top. Tuck the pineapple wedges between and over the fish. Scatter the remaining shallots, garlic, and minced chili over everything. Pour the fish sauce and water (or coconut water) down the side of the pot — the liquid should come about two-thirds up the fish, never covering it.',
            tip: 'A single layer of fish is the rule of kho. Stacked fish steam unevenly, stick together, and break when separated. Use a wider pot rather than stacking. The pineapple on top bastes the fish as it collapses slightly during the braise.',
        },
        {
            title: 'Braise low and slow — first stage',
            description: 'Bring the pot to a boil over medium heat, then immediately reduce to a low simmer. Do not stir — kho is never stirred; the fish would break. Instead, tilt the pot occasionally and spoon the braising liquid over the exposed fish. Simmer uncovered or partially covered for 25-30 minutes. The liquid will reduce steadily and the pineapple will soften and release its juice into the sauce.',
            tip: 'Never stir, only baste. If the pot needs rearranging, shake it gently by the handles. The fish must not be touched with utensils until serving — this is the discipline that keeps every fish whole.',
        },
        {
            title: 'Reduce to a glaze — second stage',
            description: 'After 30 minutes, taste the braising liquid and adjust: more fish sauce if flat, a pinch of sugar if too sharp from the pineapple. Continue simmering for another 15-20 minutes until the liquid has reduced to a thick, glossy glaze that pools rather than flows — about one-third of the original volume. The fish should be a deep mahogany-amber, the pineapple translucent at the edges and collapsed into the sauce.',
            tip: 'The correct endpoint: when you tilt the pot, the sauce moves slowly like warm honey and coats the fish in a visible glossy layer. Watery kho is unfinished kho — patience in the last 15 minutes is what produces the glaze.',
        },
        {
            title: 'Finish with pepper and serve — ideally tomorrow',
            description: 'Remove from heat. Grind fresh black pepper generously over the pot — pepper added at the end stays aromatic instead of cooking out. Scatter sliced spring onion greens and fresh chili. Serve directly from the clay pot with plenty of steamed jasmine rice — the glaze spooned over rice is the point of the entire dish. Or, for the superior experience: cool, refrigerate overnight, and reheat gently tomorrow. Day-two cá nục kho thơm is the version Vietnamese people actually mean when they name the dish.',
            tip: 'Reheat over low heat with a tablespoon of water to loosen the set glaze. The fish will be firmer, the flavor fully driven into the flesh, and the pineapple completely melted into the sauce. Kho improves for two to three days refrigerated — it was engineered by generations of cooks to do exactly this.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}