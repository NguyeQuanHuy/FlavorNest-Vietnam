'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-cuon-cao-bang',
    title: `Cao Bằng Steamed Rice Roll`,
    subtitle: `Bánh Cuốn Cao Bằng — Northern highland rice rolls filled with roast duck and wood ear mushroom, served with a hạt dổi fish sauce unique to the Tày-Nùng kitchen.`,
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '2 hrs 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh cuốn Cao Bằng is the northern highland interpretation of Vietnam's most technically demanding steamed rice roll — a dish that appears in Hà Nội, Thanh Hóa, and Quảng Ngãi but takes on a completely different character in Cao Bằng province, where the Tày and Nùng ethnic communities have developed a version using roast duck (vịt quay mắc mật) as the primary filling rather than the minced pork of lowland versions, and a dipping sauce built around hạt dổi — the wild aromatic seed of the Cao Bằng highland forests that has no equivalent in the lowland Vietnamese spice pantry.\n\nCao Bằng sits on the Chinese border at the northeastern edge of Vietnam, a province of steep limestone karst peaks, cold rivers, and dense forest that produces an agriculture and food culture heavily influenced by the Tày-Nùng communities who have inhabited the region for over a thousand years. The province's most celebrated ingredient is vịt quay mắc mật — duck roasted with the leaves of the mắc mật tree (Clausena indica) — and it is this roast duck, shredded and mixed with wood ear mushroom and shallot, that fills the Cao Bằng bánh cuốn.\n\nHạt dổi (Michelia tonkinensis seeds — the Tonkin magnolia) is the spice that most clearly marks the Cao Bằng and northwestern highland dipping sauce as specific to this latitude. The seeds are brown, resinous, and intensely aromatic — simultaneously of pepper, anise, and something camphoric and piney that no lowland spice replicates. Toasted and crushed, hạt dổi transforms a standard fish sauce dipping sauce into something specifically northern highland in character, the same way mắc khén marks the Central Highlands.`,
    ingredientSections: [
        {
            title: `Rice sheet batter`,
            items: [
                { amount: 250, unit: 'g', name: `rice flour (bot gao te)`, note: `fine-milled` },
                { amount: 50, unit: 'g', name: `tapioca starch (bot nang)` },
                { amount: 550, unit: 'ml', name: `water` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Roast duck and mushroom filling`,
            items: [
                { amount: 300, unit: 'g', name: `vit quay mac mat (roast duck meat)`, note: `shredded from bone — see vịt quay mắc mật recipe; substitute: Chinese char siu duck from Asian restaurant, or roast duck breast` },
                { amount: 40, unit: 'g', name: `dried wood ear mushroom (nam meo kho)`, note: `soaked 20 min, stems removed, sliced thin` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Hạt dổi dipping sauce (the Cao Bằng signature)`,
            items: [
                { amount: 1, unit: 'tsp', name: `hat doi seeds (Michelia tonkinensis)`, note: `lightly toasted, crushed to coarse powder — the northern highland signature spice; substitute: 0.5 tsp Sichuan pepper + 0.25 tsp star anise powder + pinch camphor-like spice` },
                { amount: 3, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 3, unit: 'tbsp', name: `warm water` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `heated and poured over to bloom hạt dổi aroma` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 4, unit: 'tbsp', name: `neutral oil`, note: `for mỡ hành` },
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Make and rest the batter`,
            description: `Whisk rice flour, tapioca starch, and salt together. Add water gradually, whisking to prevent lumps. Add oil and whisk smooth. Strain through a fine sieve. Rest 30 minutes — the starch hydrates fully and the batter settles to a consistent viscosity. The batter should be thin and pourable, slightly thicker than water. The higher tapioca ratio (50g per 250g rice flour — 17%) compared to standard bánh cuốn batter (10%) produces a slightly more elastic sheet that handles the heavier duck filling without tearing.`,
            tip: `The elevated tapioca starch ratio is the Cao Bằng adaptation for the heavier, chunkier duck-and-mushroom filling. Standard pork-filled bánh cuốn batter uses less tapioca because the minced pork filling is fine and light. The shredded duck with wood ear mushroom creates uneven pressure on the sheet when rolled — the extra tapioca provides the elasticity that prevents small tears at the filling's edges.`,
        },
        {
            title: `Prepare the duck filling`,
            description: `If making vịt quay mắc mật from scratch, shred the breast and thigh meat into 2-3cm pieces after the duck has cooled. Heat oil in a pan over medium-high heat. Sauté shallots and garlic until golden. Add soaked wood ear mushroom slices, stir 2 minutes. Add shredded roast duck, toss together. Season with fish sauce, sugar, and black pepper. Cook 2-3 minutes until fragrant and the moisture from the mushrooms has evaporated. The filling should be slightly sticky, fragrant with the mắc mật from the duck skin, and hold together when pressed. Cool before filling the sheets.`,
        },
        {
            title: `Toast and prepare the hạt dổi`,
            description: `Place hạt dổi seeds in a dry pan over low heat. Toast gently for 60-90 seconds, stirring — they should darken slightly and release a complex resinous-camphoric fragrance. Remove immediately and crush in a mortar to a coarse powder. Hạt dổi burns and turns bitter very quickly — it requires lower heat and shorter time than mắc khén. The toasted powder should smell simultaneously of black pepper, star anise, and something piney-camphor that is distinctly northern highland highland. Make the dipping sauce: combine all sauce ingredients except oil. Heat oil until shimmering and pour over the mixture — the hot oil blooms the hạt dổi's volatile oils. Stir once. Rest 5 minutes before serving.`,
            tip: `Hạt dổi (Michelia tonkinensis) is available from Vietnamese online suppliers in Germany and from specialty spice importers who source northern Vietnamese highland spices. Search "hạt dổi" on Vietnamese food websites (Viet-Foods.de) or Vietnamese community groups in Germany. It is the single most important ingredient in Cao Bằng cooking and cannot be replaced by any common spice — the Sichuan pepper substitute approximates the numbing-citrus dimension but misses the camphoric-piney note entirely.`,
        },
        {
            title: `Steam the rice sheets`,
            description: `Set up a steaming cloth over a pot of vigorously boiling water — muslin stretched taut and brushed lightly with oil. Pour 60-70ml of batter per sheet in a thin, even circular layer about 22cm wide. Cover with a dome lid for 65 seconds — slightly longer than standard bánh cuốn due to the higher tapioca content which requires more heat to set fully. Peel off with a flat wooden spatula onto a lightly oiled surface. Work continuously — the sheets must remain warm and pliable for rolling.`,
        },
        {
            title: `Fill, roll, and garnish`,
            description: `Place a warm sheet on an oiled surface. Spread 2-3 tablespoons of duck filling across the lower third. Roll forward firmly — the Cao Bằng roll is tighter than the standard version to contain the chunkier filling. Place seam-side down on the serving plate. Repeat. Make mỡ hành: place spring onions in a bowl, pour hot oil over, stir. Drizzle mỡ hành over all rolls. Scatter fried shallots generously. Serve immediately with the hạt dổi dipping sauce alongside.`,
        },
        {
            title: `Eat the Cao Bằng way`,
            description: `Bánh cuốn Cao Bằng is eaten at market stalls from 6am — the rolls are made continuously to order, the filling kept warm, the hạt dổi sauce made fresh each morning. Each roll is eaten whole in 2-3 bites, dipped fully in the sauce before each bite. The hạt dổi's camphoric-pepper note should arrive 3-4 seconds after the first dip and linger through the roast duck's rich smokiness. The mắc mật from the duck filling — a faint, resinous citrus note from the Clausena leaf — echoes in the hạt dổi's own resinous quality, creating the aromatic continuity that makes Cao Bằng bánh cuốn a unified dish rather than a roll with a sauce beside it.`,
            tip: `The mắc mật in the duck filling and the hạt dổi in the dipping sauce are both resinous, aromatic compounds from the same highland plant family — both are from the Rutaceae (citrus) family's highland representatives. This botanical connection produces an aromatic continuity across the dish that is not accidental: Cao Bằng cooks have combined these two ingredients for generations because they belong together in the same flavour world. This is the food knowledge that cannot be written in a recipe — it can only be understood by eating.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}