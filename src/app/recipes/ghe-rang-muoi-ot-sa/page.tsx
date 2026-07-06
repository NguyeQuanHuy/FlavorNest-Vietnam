'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ghe-rang-muoi-ot-sa',
    title: 'Gh? Rang Mu?i ?t S? (Phú Yên Salt and Pepper Flower Crab)',
    subtitle: 'Flower crabs deep-fried until their naturally thin shells become crispy and partially edible, then tossed in a smoking wok with the four-stalk lemongrass paste and chili-salt that defines Phú Yên seafood seasoning. Eaten whole — the shell shatters, the flesh is sweet, and the lemongrass fragrance fills the kitchen.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ghe-rang-muoi-ot-sa.jpg',
    intro: `Gh? rang mu?i ?t s? is the Phú Yên version of salt and pepper crab — specific to the province because it uses gh? (flower crab, Portunus pelagicus) rather than mud crab, and because the seasoning paste uses four lemongrass stalks in the proportion established throughout Phú Yên seafood cooking. The flower crab is the ideal crab for rang mu?i precisely because of its shell: thinner and lighter than mud crab, the flower crab shell can be fried to a genuine crunch in 3-4 minutes at 180°C, producing a shell that — in the thin sections covering the legs and the body edges — shatters between the teeth like a very thin cracker and contributes the caramelized salt-lemongrass paste flavor directly to the eating experience. The thicker sections of the shell (the main carapace) do not become fully edible but develop a fragrant char from the deep-frying and the subsequent wok toss that perfumes the flesh beneath. The rang mu?i technique applied to flower crab is faster than for mud crab — the thinner shell reaches crunchy in less time, the smaller pieces cook through faster, and the entire dish from wok to plate takes under 10 minutes once the frying is done. This speed is part of what makes gh? rang mu?i ?t s? a practical restaurant and home dish — it can be ordered, prepared, and on the table while the first drinks are still cold. The eating is manual, fragrant, and slightly messy in the way that the best Vietnamese beer food always is.`,
    ingredientSections: [
        {
            title: 'Flower crabs',
            items: [
                { amount: 1.2, unit: 'kg', name: 'live flower crabs (gh? / blue swimmer crabs)', note: '3-4 crabs at 300-400g each. Live for best flavor and texture. The thinner shell of flower crab is what makes this preparation work — do not substitute mud crab, which has shells too thick to crisp in this timeframe.' },
                { amount: 60, unit: 'g', name: 'cornstarch', note: 'for dusting before frying' },
                { amount: 600, unit: 'ml', name: 'neutral oil', note: 'for deep frying' },
            ],
        },
        {
            title: 'Phú Yên rang mu?i paste',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk only, minced to a paste — 4 stalks is the Phú Yên quantity used throughout the province\'s seafood cooking' },
                { amount: 6, name: 'garlic cloves', note: 'thinly sliced' },
                { amount: 4, name: 'shallots', note: 'thinly sliced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'minced — for volume and color' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper', note: 'coarsely ground' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives the characteristic golden tint' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'for the rang mu?i wok step' },
            ],
        },
        {
            title: 'Mu?i lá é dipping salt',
            items: [
                { amount: 15, unit: 'g', name: 'fresh lá é leaves', note: 'the Phú Yên finishing element — served alongside rather than integrated into the wok seasoning' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, name: 'kaffir lime leaves, finely shredded' },
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 1, name: 'bunch rau ram' },
                { amount: 2, name: 'extra limes' },
                { amount: 1, name: 'bowl warm water with lime', note: 'finger bowl' },
            ],
        },
    ],
    steps: [
        {
            title: 'Dispatch, clean, and portion',
            description: 'Place live crabs in the freezer for 15 minutes. Rinse under cold water. Remove the top carapace and discard the gills. Rinse the body cavity. Reserve any roe found inside. With a cleaver, split each crab body in half. Separate the claws from the body. Crack each claw lightly with the back of the cleaver — one firm tap at the joint to create a small opening without completely splitting. Pat all pieces completely dry.',
            tip: 'Flower crab carapaces are thinner and lighter than mud crab. Remove them before frying — the main carapace is too large to fry evenly and the legs and body halves are the pieces that crisp best. The carapace can be added back during the wok step for fragrance if desired.',
        },
        {
            title: 'Dust and fry until shells crisp',
            description: 'Dust the crab pieces lightly in cornstarch — shake off excess firmly. Heat oil to 180°C. Fry in batches: body halves and claws for 3-4 minutes until the shell turns bright orange-red and the thin leg sections feel rigid and slightly papery. The flower crab shell should be noticeably crispier than it looks — tap with a spoon, it should sound hollow in the thin sections. Drain on paper towels.',
            tip: 'Flower crab shells crisp faster than mud crab at the same temperature. Watch the first batch carefully — at 180°C, flower crab can go from perfectly crispy to slightly overdone in about 30 seconds. The visual marker: bright uniform orange with no grey patches.',
        },
        {
            title: 'Make the mu?i lá é',
            description: 'Pound lá é leaves with salt, pepper, and sugar in a mortar until the salt turns green and the leaf is completely broken down. The fragrance should be immediately detectable — citrus, pepper, wild green. Transfer to individual dipping plates. This is made before the rang mu?i step so it is ready the moment the crab comes out of the wok.',
            tip: 'The mu?i lá é for gh? rang mu?i should be slightly coarser than for chicken — the texture of the salt crystals against the crispy shell is part of the experience. Do not over-pound.',
        },
        {
            title: 'The rang mu?i — Phú Yên style, maximum heat',
            description: 'Heat a clean wok over maximum heat until smoking. Add oil. Add the lemongrass paste, sliced garlic, and shallots. Fry for 45 seconds — the lemongrass must become golden and deeply fragrant in the hot oil before anything else goes in. Add the salt, pepper, sugar, and turmeric — toss 15 seconds until the mixture toasts slightly. Add all the fried crab pieces at once. Toss vigorously and continuously for 90 seconds. Add minced chilies and shredded kaffir lime leaves in the final 20 seconds. The four-stalk lemongrass creates a more aromatic wok environment than any other rang mu?i preparation.',
            tip: 'The four-stalk lemongrass paste fills the wok with a cloud of aromatic oil the moment it hits the hot surface. This is the Phú Yên characteristic — an intensity of lemongrass fragrance that coats the kitchen and the crab simultaneously. This is what four stalks produces versus two.',
        },
        {
            title: 'Plate in a single layer — serve immediately',
            description: 'Transfer to a large flat plate in a single layer — never pile, which softens the crispy shells with trapped steam. Scatter spring onion, rau ram, and extra shredded kaffir lime leaf. Serve with the mu?i lá é on individual plates, lime wedges, and cold beer. Eat immediately — the flower crab shell begins softening from the moisture of the flesh within 8-10 minutes of plating.',
            tip: 'Gh? rang mu?i ?t s? is one of the dishes that most demands immediate eating — the thin flower crab shell that was the dish\'s great advantage (it crisps easily) is also its great vulnerability (it softens easily). Plate and eat within 8 minutes. No exceptions.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
