'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'de-hap-muoi-hoa-tieu',
    title: 'Dê Hấp Muối Hoa Tiêu (Goat Steamed with Sichuan Pepper Salt)',
    subtitle: 'Young goat pieces salted with coarse sea salt and Sichuan peppercorns then steamed over lemongrass and ginger until the flesh is silky and juicy — served with the mắm nhĩ and microplane-grated ginger dipping sauce that the coastal Phú Yên fishing families use for every premium steamed protein.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/de-hap-muoi-hoa-tieu.jpg',
    intro: `Dê hấp muối hoa tiêu is the steamed goat preparation of Phú Yên — a dish that applies the same philosophy as gà hấp muối kiểu Hoa (Chinese-style salt-steamed chicken) but with specific adaptations for goat and for the ingredients available on the central Vietnamese coast. The preparation is one of the most restrained in the entire Vietnamese goat repertoire: the only seasoning applied externally is a mixture of coarse sea salt and Sichuan peppercorns (hoa tiêu) that is rubbed over and into every surface of the goat pieces, which are then steamed over a fragrant bath of lemongrass, ginger, and beer until the flesh is completely cooked but retains its juice. The Sichuan peppercorn is the ingredient that distinguishes this preparation from plain salt-steamed goat: its specific numbing-citrus character (different from the heat of bird's eye chili or the warmth of black pepper) provides an aromatic counterpoint to the goat's mineral depth without competing with it. The numbing quality of hoa tiêu mellows significantly during steaming — what remains is the citrus-aromatic note and a faint tingle rather than the aggressive numbing of the raw peppercorn. The dipping sauce is the mắm nhĩ-ginger preparation used throughout Phú Yên's premium steamed seafood — the first-press fish sauce thinned with lime juice and microplane-grated ginger — transferred here to goat, where it works equally well as it does with the flower crab and slipper lobster preparations that more commonly accompany it. Dê hấp muối hoa tiêu is the Phú Yên preparation that best demonstrates the province's willingness to apply coastal seafood techniques to mountain ingredients — a culinary cross-fertilization specific to a province where the sea and the highlands are never more than 50km apart.`,
    ingredientSections: [
        {
            title: 'Goat',
            items: [
                { amount: 900, unit: 'g', name: 'bone-in goat pieces (dê chặt miếng)', note: 'young goat — ribs, shoulder, and neck pieces 4-5cm. Fresh, not frozen.' },
            ],
        },
        {
            title: 'Muối hoa tiêu (Sichuan pepper salt)',
            items: [
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1.5, unit: 'tsp', name: 'Sichuan peppercorns (hoa tiêu)', note: 'toasted in a dry pan until fragrant, then roughly ground — not powdered, but cracked. The numbing-citrus character is the defining seasoning.' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'mixed with the Sichuan pepper for background heat' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'small amount — helps the salt penetrate the meat' },
            ],
        },
        {
            title: 'Steaming bath',
            items: [
                { amount: 330, unit: 'ml', name: 'Vietnamese beer (Saigon or 333)', note: 'one can — carries aromatic compounds more effectively than water' },
                { amount: 300, unit: 'ml', name: 'water' },
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and cut into pieces' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 4, name: 'kaffir lime leaves', note: 'torn' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Mắm nhĩ ginger dipping sauce',
            items: [
                { amount: 4, unit: 'tbsp', name: 'mắm nhĩ (Phú Yên first-press fish sauce)' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'microplane-grated to almost a liquid paste' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'warm water' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced — optional' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch Vietnamese balm (rau kinh giới)', note: 'the essential goat herb' },
                { amount: 4, name: 'kaffir lime leaves, extra', note: 'finely shredded — scattered over the finished goat' },
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 2, name: 'limes, extra wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Toast and grind the Sichuan peppercorns',
            description: 'Place the Sichuan peppercorns in a dry pan over medium heat. Toast for 2-3 minutes, shaking constantly, until the peppercorns are fragrant and beginning to smoke slightly — the citrus-numbing aroma should be clearly detectable. Cool for 2 minutes then grind roughly in a mortar or spice grinder — not to a powder but to coarse cracked pieces. Some whole peppercorns remaining is correct. Combine with coarse salt, white pepper, and sugar.',
            tip: 'Toasting the Sichuan peppercorns before grinding is the step that develops their specific aromatic character. Raw Sichuan peppercorns are intensely numbing and harsh; toasted Sichuan peppercorns are aromatic, citrus-forward, and the numbing quality mellows. For dê hấp, the toasted character is what you want — the numbing should be a background note, not a dominant sensation.',
        },
        {
            title: 'Salt the goat — minimum 1 hour',
            description: 'Pat the goat pieces completely dry. Rub the muối hoa tiêu mixture firmly over every surface — into the bone-flesh joints, between ribs, over the fat. The salt should be pressed into the meat rather than sitting on the surface. Place on a rack at room temperature for 1 hour, or uncovered in the refrigerator for up to 8 hours. The salt draws moisture, then reabsorbs — seasoning the meat from within rather than merely coating the exterior.',
            tip: 'The salting period for dê hấp is longer than for chicken or seafood because goat is denser and the salt penetrates more slowly. One hour is the minimum — the Sichuan peppercorn aroma needs this time to begin penetrating the surface of the meat as well. An 8-hour refrigerator salt is significantly better than a 1-hour room temperature rest.',
        },
        {
            title: 'Build the aromatic beer steaming bath',
            description: 'Combine beer, water, bruised lemongrass, smashed ginger, torn kaffir lime leaves, and salt in the steamer base. Bring to a full, vigorous boil — the steam must be rolling and intensely aromatic before the goat goes in. The lemongrass and ginger steam will perfume the goat flesh throughout cooking — the steaming bath is as important as the salt rub.',
            tip: 'The beer and lemongrass steaming bath for goat is the technique borrowed from coastal Phú Yên seafood cooking and applied here to the mountain ingredient. The cross-fertilization is deliberate — the same steaming environment that works for flower crab and mantis shrimp produces an equally fragrant result with young goat.',
        },
        {
            title: 'Steam to doneness — 35-40 minutes',
            description: 'Place the salted goat pieces on the steaming rack. Cover tightly. Steam over maximum heat for 35-40 minutes for pieces under 150g, 40-45 minutes for larger pieces. Do not open the lid. The goat is done when a chopstick passes through the thickest piece without resistance and the juices at the bone run clear. Unlike seafood, goat must be fully cooked — no translucency at the center.',
            tip: 'Goat steams for significantly longer than seafood or chicken at equivalent weights — the density of the muscle fibers requires more time for the steam to penetrate completely. Check at 35 minutes: if the chopstick meets any resistance in the thickest piece, steam for 5 more minutes and check again.',
        },
        {
            title: 'Make the mắm nhĩ ginger sauce',
            description: 'Grate the fresh ginger on the finest available grater — a microplane produces the almost-liquid paste that distributes through the sauce completely. Combine with mắm nhĩ, fresh lime juice, sugar, and warm water. Add minced chili if using. The sauce should arrive in sequence on the palate: mắm nhĩ depth first, then lime brightness, then ginger heat that builds slightly. This is the same sauce used for ghẹ hấp sả mắm nhĩ — the Phú Yên steamed protein sauce applied equally to crab and goat.',
            tip: 'Applying the same mắm nhĩ ginger sauce to both steamed crab and steamed goat is the deliberate cross-cuisine move of Phú Yên coastal-mountain cooking. The province uses its finest condiment for its finest ingredients regardless of whether those ingredients come from the sea or the hillside.',
        },
        {
            title: 'Plate and serve',
            description: 'Transfer the steamed goat to a serving plate. Scatter shredded kaffir lime leaves, rau răm, Vietnamese balm, and spring onion over the surface. The Vietnamese balm (rau kinh giới) specifically — its menthol-lemon character is the herb that makes steamed goat sing in a way that cilantro or mint alone does not. Serve the mắm nhĩ ginger sauce in individual small bowls. Steamed rice alongside. To eat: dip each piece in the mắm nhĩ sauce, eat with Vietnamese balm between bites.',
            tip: 'The reserved steaming liquid below the goat rack — now a fragrant broth of beer, lemongrass, ginger, and goat drippings — should be strained and seasoned as a small soup to serve alongside. The goat fat that has rendered into the steaming liquid and the aromatic compounds from the lemongrass combine into a broth that is worth serving. Nothing from dê hấp should be discarded.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
