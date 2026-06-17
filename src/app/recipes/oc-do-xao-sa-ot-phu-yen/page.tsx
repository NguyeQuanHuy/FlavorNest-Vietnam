'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'oc-do-xao-sa-ot-phu-yen',
    title: 'Ốc Đỏ Xào Sả Ớt Phú Yên (Phú Yên Red Snails Stir-Fried with Lemongrass and Chili)',
    subtitle: 'The vivid red snails of Phú Yên\'s rocky intertidal zones stir-fried in a wok with the four-stalk lemongrass paste and chili-salt that defines the province\'s seafood seasoning — a preparation where the shell\'s natural red pigment deepens further in the wok heat and every snail becomes a small coal of lemongrass-chili flavor.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/oc-do-xao-sa-ot-phu-yen.jpg',
    intro: `Ốc đỏ — red snails, specifically Nerita species with their characteristic vivid red-orange shells — are the intertidal snails found on rocky shorelines throughout the central Vietnamese coast, clinging to the basalt columns of Gành Đá Đĩa and the wave-cut platforms between Tuy Hòa and Sông Cầu in densities that make them among the most visible and most collected of all coastal mollusks. The shell color is unmistakable: a deep terracotta red-orange that stands out against the grey basalt and the white foam of the waves, and that deepens further to a richer, darker red when exposed to the heat of the wok. Ốc đỏ are smaller than most of the snails in this Phú Yên series — rarely exceeding 3cm across — but their density on the rocks means they are collected in large quantities and their flavor, though smaller per snail than ốc giác or ốc hương, is more intensely mineral and more specifically characteristic of the intertidal rocky zone they inhabit. The xào sả ớt preparation is the dominant cooking method for ốc đỏ throughout Phú Yên: the small size means steaming is less effective (the flesh volume in each shell is too small to justify the gentler approach), and charcoal grilling loses the sauce element that makes small snails most satisfying. Stir-frying in a hot wok with the four-stalk lemongrass paste caramelizes the paste onto each small shell in the 3-4 minute wok time and produces a dish where the sauce-to-snail ratio is higher than in any other preparation — each tiny snail delivering its small piece of intensely mineral flesh along with the concentrated lemongrass-chili-salt caramelized onto and pooled inside the shell. The muối lá é served alongside completes the Phú Yên series of snail preparations, making this the eleventh and final appearance of the province's signature salt in the FlavorNest collection.`,
    ingredientSections: [
        {
            title: 'Red snails',
            items: [
                { amount: 1.2, unit: 'kg', name: 'live ốc đỏ (red snails / Nerita spp.)', note: 'alive — vivid red-orange shells, 2-3cm across. Collected from rocky intertidal zones. Available at coastal Vietnamese markets. Substitute: any small live marine snails with thin shells — small periwinkles or winkles.' },
                { amount: 1, unit: 'tbsp', name: 'salt', note: 'for the purging water' },
            ],
        },
        {
            title: 'Phú Yên four-stalk lemongrass paste',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, minced to paste — four stalks, the consistent Phú Yên proportion across every seafood preparation in this series' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced — added at the end for color' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'amplifies the red color of the shells' },
                { amount: 1, unit: 'tbsp', name: 'mắm nhĩ', note: 'the Phú Yên fish sauce that appears in every significant preparation in this province' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
                { amount: 3, unit: 'tbsp', name: 'water', note: 'added during wok cooking to create steam' },
            ],
        },
        {
            title: 'Muối lá é — the eleventh and final appearance',
            items: [
                { amount: 20, unit: 'g', name: 'fresh lá é leaves (litsea cubeba)' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, name: 'bird\'s eye chili' },
                { amount: 2, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'Finishing and to serve',
            items: [
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 1, name: 'bunch fresh lá é leaves' },
                { amount: 1, name: 'bunch rau răm' },
                { amount: 2, name: 'extra limes' },
                { amount: 8, name: 'toothpicks' },
                { amount: 1, name: 'bowl warm water with lime' },
            ],
        },
    ],
    steps: [
        {
            title: 'Purge the red snails — 30-45 minutes',
            description: 'Place ốc đỏ in salted water for 30-45 minutes — shorter than freshwater snails because they come from clean intertidal zones. The small size means they purge quickly. Rinse under cold running water, scrubbing the shells with a brush. The red-orange color of the shells should be vivid and uniform — any shell that has turned brown or grey was not live. The small size and smooth red shells make scrubbing quick. Pat dry before cooking — surface moisture prevents the wok from reaching maximum temperature.',
            tip: 'The vivid red of ốc đỏ shells is a natural iron-oxide pigment in the shell material. When the shells enter the hot wok and the turmeric in the paste is applied, this red deepens further — the finished dish should be noticeably more intensely colored than the raw snails. The color is one of the most visually distinctive elements of ốc đỏ xào.',
        },
        {
            title: 'Build the lemongrass paste',
            description: 'Combine four-stalk lemongrass paste, garlic, shallots, minced chili, salt, sugar, turmeric, and mắm nhĩ. The paste for ốc đỏ xào is the same as for every Phú Yên seafood stir-fry in this series — four stalks, mắm nhĩ, four-stalk proportion. The consistency of the paste across all Phú Yên stir-fried preparations is deliberate: the province has found the proportion that works and applies it universally, varying only the protein rather than the aromatic foundation.',
            tip: 'The mắm nhĩ in the stir-fry paste for ốc đỏ provides the umami depth that helps caramelize the paste onto the small shells in the short wok time. Because ốc đỏ are so small, the wok time is brief — the mắm nhĩ accelerates the caramelization that would take longer with plain fish sauce.',
        },
        {
            title: 'Maximum heat stir-fry — fast and decisive',
            description: 'Heat wok to maximum until smoking. Add oil. Add the lemongrass paste and fry vigorously for 60 seconds — it must be golden and intensely fragrant before the snails go in. Add all the ốc đỏ at once — the temperature will drop. Toss continuously and aggressively for 2-3 minutes until every shell is coated in the paste and the shells have deepened in color. Add the water around the wok edge — it creates a burst of steam that enters the shells.',
            tip: 'The continuous tossing motion for ốc đỏ in the wok must be more vigorous than for larger snails — because they are so small, they must each make repeated contact with the hot wok surface to receive even coating. Gentle stirring leaves some snails under-coated; vigorous tossing produces uniform coverage on every shell.',
        },
        {
            title: 'Cover and steam briefly — 2 minutes',
            description: 'After 2-3 minutes of open tossing, add mắm nhĩ and sugar. Cover the wok for 2 minutes over high heat. The trapped steam cooks the snail flesh completely through and drives the lemongrass-chili paste into each small shell from both the open end and the broken tip direction. After 2 minutes, remove the lid — every snail should be coated in caramelized paste, the shells a deeper, richer red than when they went in.',
            tip: 'The 2-minute covered steam phase is more important for ốc đỏ than for larger snails because the small flesh volume would dry out from extended open wok cooking. The brief covered steam cooks the flesh gently while the caramelized paste remains on the exterior rather than burning from continued direct wok contact.',
        },
        {
            title: 'Finish and pound the muối lá é',
            description: 'Add sliced spring onion, shredded kaffir lime leaves, and sesame oil. Toss once and remove from heat immediately. While the snails rest, pound lá é leaves with salt, pepper, sugar, and chili for 2 minutes until intensely green and fragrant. Transfer to small plates. This is the eleventh and final application of muối lá é in the Phú Yên series — from the first appearance alongside gà nướng mọi to this last appearance alongside ốc đỏ. The condiment is unchanged. Only the protein has varied.',
            tip: 'The consistency of muối lá é from the first recipe in the Phú Yên series to this last one is the editorial statement of the entire collection: Phú Yên has one condiment that works universally with everything the province produces, from the highlands to the reef. The lá é salt does not vary because it does not need to.',
        },
        {
            title: 'Plate and complete the Phú Yên snail series',
            description: 'Transfer ốc đỏ to a serving plate. The finished dish: vivid dark red-orange shells uniformly coated in caramelized lemongrass paste, each snail glistening, the shredded kaffir lime leaves and spring onion visible throughout. Serve with muối lá é, sesame crackers, fresh lá é leaves, rau răm, toothpicks, and lime. The eating: toothpick extraction from the small shells (or suction for those with the technique), dip in lime-squeezed muối lá é, place on a sesame cracker with a raw lá é leaf. Every snail in the Phú Yên series, from the largest ốc dừa to these smallest ốc đỏ, ends at the same table: crackers, lá é leaves, muối lá é, lime. The province is consistent.',
            tip: 'Having now completed all eleven muối lá é preparations in the Phú Yên series — and all snail preparations from ốc nhảy to ốc đỏ — the reader understands something about this province that cannot be stated directly: Phú Yên does not have many different condiments for different occasions. It has one excellent condiment and applies it with complete confidence to everything. This is a philosophy, not a limitation.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
