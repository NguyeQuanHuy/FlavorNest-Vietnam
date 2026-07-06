'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-quai-vac',
    title: `Crescent Dumpling`,
    subtitle: `Banh Quai Vac — Hoi An's translucent steamed dumpling filled with pork and shrimp, shaped like a hoe blade and served with crispy shallots.`,
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Banh quai vac is one of Hoi An's most visually striking dumplings — a thin, translucent crescent of tapioca-wheat dough wrapped around a filling of minced pork and shrimp, pinched into a half-moon shape that resembles the curved blade of a hoe (quai vac in the Quang Nam dialect). Steamed until the skin turns from white to a ghostly pale translucence, it is finished with a drizzle of pork lard and a scatter of golden fried shallots, then served with a nuoc cham dipping sauce on the side.\n\nThe dumpling is part of Hoi An's extraordinary concentration of small-plate dishes — banh bao vac (white rose dumpling), banh beo, banh nam — all made from variations of the same tapioca-rice dough, each shaped differently, each with a slightly different filling ratio and cooking method. Banh quai vac is distinguished by its crescent shape, which requires a specific pleating technique at the curved edge: seven to nine folds pressed together to create a ribbed border that holds the filling firmly during steaming and gives the dumpling its architectural quality.\n\nThe dough is the technical challenge. Tapioca starch produces translucence; wheat starch provides structure. The ratio — 70% tapioca to 30% wheat starch — is the Hoi An standard. Deviating toward more wheat starch makes the skin opaque and dense. Deviating toward more tapioca makes the skin too fragile to pleat without tearing. This recipe is written for the 70/30 ratio with the boiling water method that activates the starches before shaping.`,
    ingredientSections: [
        {
            title: `Translucent dumpling skin`,
            items: [
                { amount: 140, unit: 'g', name: `tapioca starch (bot nang)`, note: `70% of total — produces translucence` },
                { amount: 60, unit: 'g', name: `wheat starch (bot loc, bot mieng)`, note: `30% of total — provides structure for pleating` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 180, unit: 'ml', name: `boiling water`, note: `must be at a rolling boil when added — activates the starches` },
                { amount: 1, unit: 'tbsp', name: `lard or neutral oil`, note: `added after initial mixing — improves pliability` },
            ],
        },
        {
            title: `Pork and shrimp filling`,
            items: [
                { amount: 200, unit: 'g', name: `pork shoulder (thit heo nac vai)`, note: `minced fine — not ground to paste` },
                { amount: 150, unit: 'g', name: `fresh shrimp (tom)`, note: `peeled, deveined, minced coarse — some texture should remain` },
                { amount: 3, name: `shallots, minced` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `for sauteing the filling` },
            ],
        },
        {
            title: `Finish and serve`,
            items: [
                { amount: 2, unit: 'tbsp', name: `pork lard or neutral oil`, note: `drizzled over finished dumplings immediately after steaming` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)`, note: `scattered generously` },
                { amount: 2, name: `spring onions, sliced thin` },
            ],
        },
        {
            title: `Dipping sauce (nuoc cham Hoi An)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 3, unit: 'tbsp', name: `warm water` },
                { amount: 2, unit: 'tbsp', name: `sugar` },
                { amount: 1.5, unit: 'tbsp', name: `lime juice` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Cook and season the filling`,
            description: `Heat neutral oil in a pan over medium heat. Saute minced shallots and garlic until fragrant and translucent, about 2 minutes. Add minced pork and cook, breaking up, until no pink remains — about 3 minutes. Add minced shrimp and cook 1 minute more until just pink. Season with fish sauce, sugar, black pepper, and sesame oil. Stir to combine. The filling should be moist but not wet — excess liquid will make the dough soggy during steaming. Spread on a plate to cool completely. Do not use warm filling; it melts the dough during shaping.`,
            tip: `The filling is cooked before wrapping — unlike Chinese xiao long bao where raw filling steams inside. Pre-cooked filling means the steaming time only needs to cook the dough, not the filling, allowing a shorter steam that preserves the translucency of the skin. Undercooked filling cannot be corrected once the dumpling is sealed.`,
        },
        {
            title: `Make the dough — boiling water method`,
            description: `Combine tapioca starch, wheat starch, and salt in a heatproof bowl. Bring 180ml water to a full rolling boil. Pour boiling water over the starch mixture all at once and stir immediately and vigorously with a wooden spoon or spatula — the mixture will seize and clump into a rough, translucent mass within 10 seconds. Add lard or oil and knead directly in the bowl until a smooth, pliable dough forms, about 3 minutes. The dough will be hot — work carefully. It should be smooth, slightly sticky, and translucent when held up to light. Wrap in cling film and rest 10 minutes.`,
            tip: `The boiling water must be at a full rolling boil — not just hot. Below 95C the starches do not gelatinise properly and the dough will be grainy and tear during pleating. Boil the water in a kettle and use immediately. Speed of mixing after adding the water is critical: stir within 2 seconds of pouring or the starch cooks unevenly in patches.`,
        },
        {
            title: `Portion and press the wrappers`,
            description: `Divide rested dough into portions of approximately 15g each — this recipe makes about 24 dumplings. Keep unworked dough covered with cling film at all times; tapioca dough dries and cracks within 2 minutes of exposure to air. Roll each portion between two sheets of lightly oiled plastic wrap or parchment into a thin round about 8cm in diameter and 1.5mm thick. The round should be thin enough to show your hand through it when held to light. Use a round cutter or glass to trim to a perfect circle. Work one wrapper at a time; do not pre-roll all wrappers.`,
        },
        {
            title: `Fill and pleat into the crescent shape`,
            description: `Place a wrapper on your palm. Add 1 heaped teaspoon of cooled filling slightly off-centre toward the lower half of the circle. Fold the upper half down over the filling to form a half-moon, pressing the edges firmly together to seal at the top of the arc. Now pleat the sealed edge: starting at one end of the curved seam, pinch a small fold of dough between thumb and forefinger and press forward to create a pleat. Repeat 7 to 9 times along the full curve, each pleat overlapping the last slightly. The pleated edge should form a raised, ribbed border along the entire curved seam. Press the final pleat firmly to seal.`,
            tip: `The pleating is the technique that gives banh quai vac its identity and its name — the ribbed crescent shape is what distinguishes it from banh bao vac (which is gathered at the top) and banh nam (which is flat). Seven pleats is the minimum for structural integrity during steaming. Nine pleats is the vendor standard. Practice on a few dumplings before judging your technique — the motion becomes rhythmic after the third or fourth attempt.`,
        },
        {
            title: `Steam for 6 minutes`,
            description: `Line a steamer basket with lightly oiled parchment or banana leaf cut to fit. Arrange dumplings with at least 2cm between each — they expand slightly during steaming and stick together if touching. Wrap the steamer lid with a clean dry cloth tied firmly to catch condensation. Bring steamer water to a rolling boil. Steam dumplings on high heat for exactly 6 minutes. Do not open the lid during steaming. At 6 minutes the skin will have turned from white to a pale translucent grey-white and will feel slightly firm when pressed gently. Remove immediately.`,
            tip: `Over-steaming collapses the translucency — the skin turns white-opaque again and loses its delicate appearance. Six minutes at vigorous steam is the correct time for 1.5mm thick wrappers. If your wrappers are slightly thicker, add 1 minute maximum. The cloth-wrapped lid is non-negotiable: water drips onto the thin tapioca skin cause permanent pitting and tearing.`,
        },
        {
            title: `Finish and serve`,
            description: `Transfer dumplings to a serving plate immediately — they stick to the steamer liner within 30 seconds of cooling. Drizzle warm pork lard or neutral oil over the dumplings while still hot — the oil coats the skin and prevents sticking between dumplings as well as adding fragrance. Scatter fried shallots generously and add spring onion slices. Make the dipping sauce by combining all ingredients and stirring until sugar dissolves. Serve immediately. Banh quai vac is eaten hot, within 5 minutes of steaming — the skin firms and becomes chewy as it cools.`,
            tip: `In Hoi An, banh quai vac is served on a ceramic plate lined with a banana leaf, with the dipping sauce in a small saucer alongside. The lard drizzle is done tableside by the vendor. The fried shallots go on last, so they remain crispy against the soft skin. This visual and textural contrast — translucent soft skin, golden crispy shallot, clear dipping sauce — is the aesthetic the dish is designed around.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
