'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muoi-la-e-tay-nguyen',
    title: `Central Highlands Holy Basil Salt`,
    subtitle: `Muối Lá É Tây Nguyên — Kon Tum's forest holy basil toasted with salt, chili, and sesame — the universal condiment of the Central Highlands table.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 8,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Muối lá é is the condiment that appears on every table in the Central Highlands — from the Bahnar longhouses of Kon Tum to the Ê Đê buôn of Đắk Lắk to the K'Ho villages of Lâm Đồng — regardless of ethnic group, regardless of occasion, regardless of what else is being served. It is the universal seasoning of the Tây Nguyên: a coarse salt mixture in which dried lá é (Ocimum tenuiflorum — holy basil, the Southeast Asian variety) is toasted together with chili, sesame, and sometimes mắc khén, then ground to a fragrant powder that is simultaneously salty, herbal, spicy, and nutty in a single pinch.\n\nLá é (holy basil) grows wild throughout the Central Highlands — in garden plots, along forest edges, in the cracks of longhouse foundations. It is not cultivated so much as tolerated and harvested: the plant seeds itself aggressively, grows prolifically in the highland climate, and provides an abundant, year-round source of aromatic leaf that the highland communities have incorporated into every aspect of their cooking. When dried and toasted, lá é's volatile clove-anise oils concentrate dramatically and develop additional roasted aromatic compounds that the fresh leaf does not have — the dried-toasted form is a fundamentally different ingredient from fresh lá é, not a preservation compromise.\n\nThe preparation is the simplest in this collection: leaves, salt, chili, sesame, heat, and a mortar. But the result — a pale green-grey, intensely fragrant salt that makes any simply cooked protein or plain rice immediately complete — is one of the most useful condiments in the entire Vietnamese repertoire. Highland communities carry it when they travel, gift it at celebrations, and use it as the reference point for all other salt preparations. Muối lá é is what salt should taste like.`,
    ingredientSections: [
        {
            title: `Core ingredients`,
            items: [
                { amount: 30, unit: 'g', name: `fresh la e leaves (holy basil / Ocimum tenuiflorum)`, note: `leaves only, stems discarded — about 2 large bunches; substitute: Thai basil leaves (similar clove-anise profile)` },
                { amount: 3, unit: 'tbsp', name: `coarse sea salt (muoi hat)`, note: `non-iodised` },
                { amount: 4, name: `dried bird's eye chili (ot hiem kho)`, note: `toasted briefly` },
                { amount: 2, unit: 'tbsp', name: `white sesame seeds (me trang)`, note: `dry-toasted until golden` },
                { amount: 0.5, unit: 'tsp', name: `sugar`, note: `balances the clove bitterness of lá é` },
            ],
        },
        {
            title: `Optional additions (by ethnic group)`,
            items: [
                { amount: 1, unit: 'tsp', name: `mac khen berries, lightly toasted and crushed`, note: `the Bahnar and Jrai addition — numbing citrus note` },
                { amount: 0.5, unit: 'tsp', name: `black sesame seeds (me den)`, note: `for visual contrast` },
                { amount: 3, name: `fresh garlic cloves, minced and dried`, note: `the Ê Đê addition — dried garlic not raw` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 1, name: `any grilled meat or fish` },
                { amount: 4, name: `portions com lam or sticky rice` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Dry the lá é leaves`,
            description: `Wash lá é leaves and pat completely dry with a clean cloth. Spread in a single layer on a baking sheet. Dry in an oven at 50°C with the door slightly ajar for 2-3 hours, or in a food dehydrator at 45°C for 1-2 hours, until the leaves are completely crisp and crumble between fingers with no resistance. Alternatively, spread on a tray in direct sun for 6-8 hours — the traditional highland method. The dried leaves should be deep green, completely brittle, and smell intensely of concentrated clove-anise with a slightly camphor undertone. Do not microwave — it destroys the volatile oils rather than concentrating them.`,
            tip: `The drying step is where the flavour transformation from fresh to dried lá é occurs. Fresh holy basil is aromatic; dried and toasted holy basil is transcendent. The drying removes the water that dilutes the essential oils in the fresh leaf, concentrating the eugenol (clove compound) and linalool (floral-spice compound) to 5-8 times their fresh concentration. This is why muối lá é cannot be made with fresh leaves — the moisture prevents proper toasting and produces a wet, muddy paste rather than a dry, fragrant salt.`,
        },
        {
            title: `Toast the dried leaves`,
            description: `Place completely dried lá é leaves in a dry pan over medium-low heat. Stir constantly with a wooden spoon for 2-3 minutes until the leaves turn slightly darker — from deep green to olive-green — and the kitchen fills with an intense roasted-clove fragrance. Remove immediately to a plate. The toasting window is narrow: under-toasted leaves lack the roasted depth; over-toasted leaves (beyond 3 minutes at medium heat) turn brown and bitter. The colour target is olive-green, not brown. Cool completely before grinding.`,
        },
        {
            title: `Toast remaining ingredients separately`,
            description: `Toast dried chilies in the same dry pan for 60 seconds until fragrant and slightly darker. Remove. Toast sesame seeds 3-4 minutes until golden and fragrant — they will pop slightly when ready. If using mắc khén: toast 90 seconds. Allow all toasted ingredients to cool completely and separately — combining while warm causes the volatile oils to exchange and the individual flavour characters to blur. Each ingredient should smell distinctly of itself before combining.`,
        },
        {
            title: `Grind to muối lá é`,
            description: `Combine cooled toasted lá é, toasted chilies, toasted sesame seeds, coarse salt, and sugar in a stone mortar. Pound with firm, rhythmic strokes for 3-4 minutes until a coarse, fragrant powder forms. Some sesame seeds should remain cracked rather than fully ground; some lá é should remain as recognisable leaf fragments rather than pure powder. This textural variation is intentional — the partial grinding produces different flavour release rates: fine powder seasons immediately, leaf fragments release slowly as chewed. If using mắc khén or black sesame: add after the initial grinding and pound lightly to incorporate.`,
            tip: `The mortar-and-pestle method is non-negotiable for muối lá é. A blender or spice grinder produces a uniform fine powder that loses the textural variation essential to the condiment's character. The stone mortar's friction also generates slight heat during grinding that helps release the essential oils from the toasted leaf fragments — a gentler heat than toasting but enough to open the aromatic compounds further. The resulting salt should smell so intensely of toasted holy basil that it is detectable from across the room.`,
        },
        {
            title: `Store and use`,
            description: `Transfer muối lá é to a clean, dry glass jar with a tight-fitting lid. Store at room temperature away from direct sunlight. The salt keeps for 2-3 months without significant quality loss — the low moisture content and the antimicrobial properties of the eugenol in lá é prevent spoilage. The flavour peaks at day 3-5 after making, when the toasted oils have fully distributed through the salt and the initial sharpness of the freshly toasted chili has mellowed slightly. After 3 months, the volatile aromatics begin to fade and a new batch is recommended.`,
            tip: `Muối lá é in Bahnar villages is made in bulk quantities before planting and harvest seasons — the times of greatest communal activity — and stored in bamboo tubes sealed with banana leaf rather than glass jars. The bamboo tube is the traditional storage vessel and contributes a faint resinous note to the salt over the weeks of storage. At home in Germany, a glass jar produces a cleaner result; a small bamboo section (if available) produces the authentic one.`,
        },
        {
            title: `The complete use guide`,
            description: `Muối lá é is the most versatile condiment in the Central Highlands kitchen. Use as: a dipping salt for any grilled meat or fish (the primary use — dip and eat); a seasoning scattered over plain sticky rice or cơm lam in place of any other condiment; a finishing salt for soups (pinch over the surface of any highland broth immediately before serving); a rub ingredient mixed with oil for grilling (combine 1 tbsp muối lá é + 2 tbsp neutral oil = instant highland marinade); a table seasoning used in place of salt and pepper. In every use, the same principle applies: the clove-anise of the lá é elevates the primary ingredient without obscuring it, the chili provides heat that arrives after the herb note, and the sesame provides a nutty finish that rounds both. It is a complete seasoning in one pinch.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}