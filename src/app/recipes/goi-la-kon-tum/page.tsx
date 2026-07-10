'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-la-kon-tum',
    title: `Kon Tum Forest Leaf Salad`,
    subtitle: `Gỏi Lá Kon Tum — 40+ foraged highland leaves wrapped around pork, shrimp, and herbs — the most botanically complex dish in Vietnamese cuisine.`,
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Gỏi lá Kon Tum is the most botanically extraordinary dish in Vietnamese cuisine — a communal meal built around a plate of 40 to 60 different foraged leaves, shoots, and edible plant parts collected from the forests and gardens surrounding Kon Tum city, each with a distinct flavour profile, each contributing a specific note to the overall experience. The diners wrap small amounts of boiled pork, shrimp, and condiments in whatever combination of leaves they choose, creating a personalised bite that is different every time. No two wraps taste the same.\n\nThe dish emerged from the highland tradition of eating with forest leaves — a practice common to the Bahnar, Jrai, and Xơ Đăng communities of Kon Tum, where the surrounding forest provides an abundant and varied vegetable source throughout the year. The Vietnamese lowlander community that settled in Kon Tum city from the colonial period onward absorbed and elaborated this tradition, turning the informal forest-leaf eating of the highland communities into a structured restaurant dish with a fixed set of core leaves, specific protein pairings, and a signature dipping sauce (mắm nêm pha me — fermented anchovy paste thinned with tamarind).\n\nThe leaves range from the familiar — lá lốt (Piper sarmentosum), rau răm (Vietnamese coriander), perilla — to the entirely specific to Kon Tum: lá sung (fig leaf), lá bứa (Garcinia leaf), lá đinh lăng (Polyscias fruticosa — the medicinal "ginseng tree"), lá me đất (Oxalis, wood sorrel), lá cải trời (Blumea balsamifera), and many others that grow only in the highland climate. This recipe documents the 20 most accessible leaves of the full 40+ set, with substitution guidance for the European kitchen.`,
    ingredientSections: [
        {
            title: `Core protein`,
            items: [
                { amount: 300, unit: 'g', name: `pork shoulder (thit heo nac vai)`, note: `boiled whole 25 min, cooled, sliced thin` },
                { amount: 200, unit: 'g', name: `fresh shrimp (tom)`, note: `boiled 2 min, peeled` },
                { amount: 100, unit: 'g', name: `pork skin (bi heo)`, note: `boiled, fat scraped, cut thin` },
                { amount: 2, name: `hard-boiled eggs, sliced` },
            ],
        },
        {
            title: `The 20 core leaves (la goi)`,
            items: [
                { amount: 1, name: `bunch la lot (Piper sarmentosum)`, note: `peppery-anise; mandatory` },
                { amount: 1, name: `bunch rau ram (Vietnamese coriander)`, note: `lemony-peppery; mandatory` },
                { amount: 1, name: `bunch tia to (perilla)`, note: `anise-mint; mandatory` },
                { amount: 1, name: `bunch hung lui (mint)` },
                { amount: 1, name: `bunch ngo gai (sawtooth coriander)` },
                { amount: 1, name: `bunch la sung (fresh fig leaves)`, note: `tannic; use young leaves only` },
                { amount: 1, name: `bunch la cach (Premna serratifolia)`, note: `resinous-citrus; the Kon Tum signature` },
                { amount: 1, name: `bunch la dinh lang (Polyscias fruticosa)`, note: `slightly bitter medicinal herb` },
                { amount: 1, name: `bunch la me dat (Oxalis / wood sorrel)`, note: `intensely sour; small amounts only` },
                { amount: 1, name: `bunch la bua (Garcinia cowa leaf)`, note: `tart, faintly astringent` },
                { amount: 1, name: `bunch la mang cau (soursop leaf)`, note: `mild, slightly medicinal` },
                { amount: 1, name: `bunch la com (Callicarpa leaf)`, note: `slightly minty` },
                { amount: 1, name: `bunch rau muong (water spinach)`, note: `blanched 30 sec` },
                { amount: 1, name: `bunch la voi (Cleistocalyx operculatus)`, note: `eucalyptus-clove note; small amounts` },
                { amount: 1, name: `bunch la sau dau (Melia azedarach young leaf)`, note: `mildly bitter; day 3-5 growth` },
                { amount: 1, name: `head butter lettuce`, note: `the neutral base leaf` },
                { amount: 1, name: `bunch rau den (amaranth leaves)` },
                { amount: 1, name: `cucumber, sliced thin` },
                { amount: 100, unit: 'g', name: `green banana, sliced thin`, note: `astringency reset` },
                { amount: 100, unit: 'g', name: `bean sprouts (gia do)`, note: `raw` },
            ],
        },
        {
            title: `Mắm nêm pha me dipping sauce (the mandatory Kon Tum sauce)`,
            items: [
                { amount: 4, unit: 'tbsp', name: `mam nem (fermented anchovy paste)` },
                { amount: 20, unit: 'g', name: `tamarind block`, note: `dissolved in 50ml warm water, strained` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 2, name: `lemongrass stalks, inner white only, minced fine` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 3, name: `bird's eye chili, minced` },
                { amount: 3, unit: 'tbsp', name: `warm water` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `heated and poured over sauce — blooms aroma` },
            ],
        },
        {
            title: `Condiments on the table`,
            items: [
                { amount: 3, unit: 'tbsp', name: `roasted peanuts, crushed` },
                { amount: 3, unit: 'tbsp', name: `toasted sesame seeds` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 10, name: `sheets rice paper (banh trang)`, note: `optional — for larger wraps` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Source the leaves — the core challenge`,
            description: `Gỏi lá Kon Tum's complexity is entirely in the leaf sourcing. In Kon Tum, the market vendors who specialise in this dish collect leaves from home gardens and the surrounding forest daily — the selection changes by season and availability. In Germany, the 20-leaf version is achievable through a combination of Vietnamese grocers, Turkish markets, garden centres, and online herb suppliers. Mandatory leaves available in Germany: lá lốt (Vietnamese/Chinese grocers), rau răm (Vietnamese grocers), tía tô (Vietnamese grocers), mint, sawtooth coriander (Vietnamese grocers). Seasonally available: fresh fig leaves (Turkish grocers, April-October), wood sorrel/Oxalis (grows wild in German gardens and parks). Harder to find: lá cách, lá đinh lăng — order online from specialty Vietnamese herb suppliers or grow from seed.`,
            tip: `The minimum viable gỏi lá for this recipe requires at least 10 distinct leaf types to capture the spirit of the dish — fewer than 8 produces a standard herb plate rather than the layered complexity that defines gỏi lá. The leaves that contribute the most distinctive flavours are: lá lốt (peppery-anise), lá me đất/wood sorrel (intense sourness), lá sung/fig leaf (tannin), and lá cách (resinous-citrus). These four, combined with the basic herbs, produce 80% of the gỏi lá experience with 20% of the sourcing effort.`,
        },
        {
            title: `Prepare all leaves`,
            description: `Wash every leaf individually and dry gently with a cloth — wet leaves dilute the dipping sauce in the wrap and produce a soggy result. Sort by size: large leaves (butter lettuce, fig leaf, lá lốt) become the outer wrappers; small leaves (rau răm, mint, wood sorrel) go inside. Arrange on a large communal plate grouped by flavour character: bitter leaves together, sour leaves together, aromatic leaves together, neutral leaves together. The grouping allows diners to navigate the plate intentionally rather than randomly. In Kon Tum restaurants, the leaf plate is arranged in concentric circles by flavour intensity — mildest at the outside, most intense at the centre.`,
        },
        {
            title: `Prepare the proteins`,
            description: `Boil pork shoulder whole in lightly salted water 25 minutes. Cool completely before slicing thin across the grain — 3mm slices. Boil shrimp in salted water 2 minutes until pink. Peel. Prepare pork skin: boil 15 minutes, scrape fat, cut thin. Hard-boil eggs 8 minutes, cool, peel, slice. Arrange all proteins on a separate serving plate. In Kon Tum, the protein plate and the leaf plate arrive simultaneously at the table — the eating begins immediately and continues until everything is gone, which takes 45-60 minutes for 4 people.`,
        },
        {
            title: `Make the mắm nêm pha me`,
            description: `Dissolve tamarind block in warm water, strain. Combine mắm nêm paste with warm water and stir until smooth. Add tamarind liquid, lime juice, sugar, minced lemongrass, garlic, and chili. Stir until sugar dissolves. Heat 1 tbsp neutral oil until shimmering and pour over the sauce — blooms the mắm nêm aroma. Stir once. The sauce should be pungent, sweet-sour with the tamarind's complexity, and fragrant with lemongrass. The tamarind addition distinguishes Kon Tum mắm nêm from the Đà Nẵng or Quảng Ngãi versions — it adds a fruity depth that connects the sauce to the more tannic, complex leaf flavours of the highland selection.`,
            tip: `The mắm nêm pha me is the sauce that ties together 40 different leaf flavours — it must be assertive enough to be tasted through the most intense leaves (lá cách, lá vôi) while not overwhelming the most delicate (butter lettuce, mint). The lemongrass provides a continuous aromatic thread that appears in the sauce and connects to the lá lốt in the leaf selection. The tamarind's sourness echoes the lá me đất's sourness, creating a flavour continuity between sauce and leaf.`,
        },
        {
            title: `The wrapping technique — gỏi lá philosophy`,
            description: `There is no single correct way to wrap gỏi lá — this is fundamental to the dish's identity. Each diner creates their own combination. The only guidelines: start with a large leaf as the base (butter lettuce or lá lốt), add one piece of protein, choose 3-5 smaller leaves from different flavour categories (sour, bitter, aromatic, neutral), add a small amount of peanuts and sesame, fold and dip in mắm nêm. The first wrap should be conservative — familiar leaves — to establish a baseline. Each subsequent wrap pushes further into the more intense leaves.`,
            tip: `Kon Tum gỏi lá veterans eat in a specific progression: start with butter lettuce + pork + rau răm (the most accessible combination); move toward lá lốt + shrimp + fig leaf (medium complexity); end with combinations using lá cách, lá me đất, and lá vôi (maximum intensity). This progression from mild to intense is not a rule — it is the logic of training the palate across the meal so that each new leaf combination is experienced at its most vivid. Eating the intense leaves first would numb the palate to the subtle ones.`,
        },
        {
            title: `The communal eating ritual`,
            description: `Gỏi lá is explicitly a slow, communal, conversational meal. The wrapping is done by hand, at the table, continuously throughout the meal. There is no serving — everyone reaches across to the leaf plate and the protein plate simultaneously, building their own wraps. In Kon Tum, it is considered normal for a gỏi lá meal to last 90 minutes or more. The conversation at the table is as important as the food — the leaf selection and the wrap construction are subjects of discussion, comparison, and gentle argument throughout. Eating gỏi lá alone would miss the point of the dish entirely.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}