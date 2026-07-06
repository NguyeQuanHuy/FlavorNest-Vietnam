'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cua-da-nuong-muoi-ot',
    title: 'Cua Ðá Nu?ng Mu?i ?t (Phú Yên Rock Crab Grilled with Chili Salt)',
    subtitle: 'Wild rock crabs harvested from the basalt columns of Gành Ðá Ðia and the rocky outcrops along the Phú Yên coast, coated in chili-salt paste and grilled directly on the coals until the shell chars and the intense, mineral-sweet rock crab flesh inside caramelizes at the edges.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/cua-da-nuong-muoi-ot.jpg',
    intro: `Cua dá — rock crab — is the crab that Phú Yên fishermen harvest by hand from the basalt columns of Gành Ðá Ðia, the hexagonal rock formation that is the province's most photographed natural landmark, and from the rocky shorelines between Mui Ði?n (the easternmost point of Vietnam) and Vung Rô bay to the south. Rock crabs live in the crevices and tide pools of exposed rocky coastline — a completely different habitat from the sandy-bottom mud crabs and the open-water flower crabs that constitute most of Vietnamese coastal crab eating. Their habitat produces their flavor: a more mineral, more intensely savory flesh than any farmed or sandy-bottom crab, with a density that comes from the constant physical activity of navigating the surge and the rocks, and a specific sweetness that reflects the clean, oxygenated water of the exposed coast. Cua dá are smaller than mud crabs — rarely exceeding 200g individually — and have harder, more compact shells that conduct heat differently on the grill. The correct cooking method is direct coals: the crab placed shell-side down directly on glowing hardwood charcoal so that the heat is applied from the maximum-temperature source rather than mediated by a grill grate. The shell chars and transfers heat directly to the flesh while the chili-salt paste on the exterior caramelizes into the crevices of the shell and through the leg joints into the meat. The result is a rock crab that tastes simultaneously of its own mineral-sweet intensity, the specific char of hardwood coal, and the lemongrass-chili paste — a combination that is inseparable from the rocky, wind-exposed coastline where these crabs lived.`,
    ingredientSections: [
        {
            title: 'Rock crabs',
            items: [
                { amount: 1.2, unit: 'kg', name: 'fresh rock crabs (cua dá)', note: 'live, 100-200g each — 6-8 crabs. Available along the central Vietnamese coast. Substitute: small mud crabs or stone crabs — the flavor differs but the technique is identical.' },
            ],
        },
        {
            title: 'Mu?i ?t paste',
            items: [
                { amount: 2, unit: 'tsp', name: 'coarse sea salt', note: 'slightly more than for other crabs — rock crab\'s dense flesh needs stronger seasoning' },
                { amount: 4, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'minced' },
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, minced to paste — four stalks, the Phú Yên proportion' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Mu?i lá é — the Phú Yên coastal dipping salt',
            items: [
                { amount: 20, unit: 'g', name: 'fresh lá é leaves (litsea cubeba)' },
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper', note: 'slightly coarser grind than usual — rock crab needs texture in the salt' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 3, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'Charcoal fire',
            items: [
                { amount: 1.5, unit: 'kg', name: 'hardwood charcoal', note: 'more charcoal than usual — direct coal cooking requires a deep, sustained fire' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch rau ram' },
                { amount: 1, name: 'bunch fresh lá é leaves, extra', note: 'for eating raw alongside' },
                { amount: 2, name: 'extra limes' },
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 1, name: 'bowl warm water with lime', note: 'finger bowl' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the rock crabs',
            description: 'Place live rock crabs in the freezer for 20 minutes — their smaller size means they sedate faster than large crabs, but they are more aggressive weight-for-weight and need full sedation. Rinse under cold water, scrubbing the shells. Rock crabs can be grilled whole — the small size means the whole crab cooks through from the direct coal heat. Remove the apron and lift the top shell only if the crabs are on the larger end (over 150g). Leave small crabs completely intact — the whole shell acts as a cooking vessel for the flesh.',
            tip: 'Leaving small rock crabs whole for direct coal grilling is the correct technique — the sealed shell creates a mini pressure environment that steams the flesh from within while the exterior chars. Opening the crab before grilling loses this internal steam and produces drier flesh.',
        },
        {
            title: 'Apply the chili-salt paste aggressively',
            description: 'Make the mu?i ?t paste by combining all paste ingredients. Apply to the rock crabs more aggressively than to larger crabs — push the paste into every leg joint, into the apron crevice, over every surface of the shell. Rock crab shells have more surface texture than flower crab or mud crab and hold the paste in the natural ridges and indentations. Press firmly. The paste should be visible on every surface. Leave for 15 minutes.',
            tip: 'Rock crab shells are rougher than other crab shells — this is an advantage for paste adhesion. Push the paste into the natural ridges and texture of the shell surface so it stays in place during the direct coal grilling rather than falling into the fire.',
        },
        {
            title: 'Build the direct coal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over — 30 minutes minimum. Rake the coals into an even layer approximately 5cm deep. The surface of the coals should be consistently glowing orange-white with no black patches. For direct coal cooking of rock crab, the depth of the coal bed matters more than for grate cooking — the crabs sit directly in the coals and the heat surrounds them rather than coming from one direction.',
            tip: 'The direct coal method — crabs placed shell-side down directly on the glowing coals rather than on a grate above them — produces a more intense, more even heat application than any grate cooking. The coal heat reaches the shell from direct contact and transfers into the flesh faster. This is the original Phú Yên coastal method, used when grilling on the beach.',
        },
        {
            title: 'Grill directly on the coals',
            description: 'Place the coated rock crabs shell-side down directly on the glowing charcoal surface. They will sizzle immediately and the paste will begin caramelizing on contact. Grill for 5-6 minutes without moving — the paste chars onto the shell and the shell chars onto the coals in a way that produces the specific black-and-caramel exterior of cua dá nu?ng. Using tongs, flip the crabs for 3-4 more minutes flesh-side down directly on the coals. The crabs are done when the shell is deeply charred throughout and one leg pulled away cleanly from a large crab.',
            tip: 'The black char from direct coal contact is the desired result — not accidental burning. The bottom of the rock crab shell will be genuinely blackened from the coal contact, which concentrates the caramelized paste and transfers the hardwood fragrance directly into the flesh. This char is what makes cua dá nu?ng taste unlike any other grilled crab preparation.',
        },
        {
            title: 'Make the mu?i lá é and rest briefly',
            description: 'While the crabs are in their final minutes on the coals, pound the lá é leaves with salt, pepper, and sugar in a mortar until the salt turns green and intensely fragrant. The lime is squeezed at the table. Rest the crabs on a board for 2 minutes after removing from the coals — the internal temperature continues rising for the first minute off the heat.',
            tip: 'The mu?i lá é for cua dá specifically is the connection to the landscape — the litsea leaf that grows on the rocky hillsides above the coast where the crabs are found, pounded with the sea salt from the same coast. This is the Phú Yên terroir argument made edible.',
        },
        {
            title: 'Serve from the coal with nothing added',
            description: 'Transfer the charred rock crabs directly to a wooden board or plate — do not add garnish that would obscure the visual of the coal-blackened shell. Scatter only rau ram and fresh lá é leaves. Serve the mu?i lá é with lime wedges alongside. To eat: crack the coal-blackened shell with a spoon or fingers — it comes apart more easily than the raw shell due to the charring. The flesh inside should be completely white, slightly caramelized at the edges where it was in contact with the shell during cooking, and mineral-sweet throughout. Dip in the lime-squeezed mu?i lá é. Eat with a raw lá é leaf.',
            tip: 'The visual presentation of cua dá nu?ng mu?i ?t is intentionally stark — blackened shells on a plain wooden board. Do not add color or decoration. The charred crab and the green lá é leaves are the complete visual. Anything more is a distraction from what the dish is.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
