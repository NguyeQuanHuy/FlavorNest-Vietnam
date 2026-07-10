'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-trung-kien-cao-bang',
    title: `Cao Bằng Black Ant Egg Cake`,
    subtitle: `Bánh Trứng Kiến — Glutinous rice cakes filled with black ant eggs and forest herbs — the rarest spring delicacy of the Tày-Nùng highlands.`,
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 12,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh trứng kiến is the most seasonally constrained dish in the entire Cao Bằng culinary tradition — a steamed glutinous rice cake filled with the eggs and larvae of the black wood ant (kiến đen, Polyrhachis dives or related species), available only in the brief window between late March and early May when the black ant colonies of the Cao Bằng limestone forest rebuild their nests after winter and the egg chambers are at maximum capacity. Outside this 6-8 week window, the dish does not exist. No frozen ant eggs, no preserved substitute — the season ends and bánh trứng kiến disappears until the following spring.\n\nThe black ant eggs (trứng kiến đen) used in this preparation are the larvae and pupae of the Polyrhachis wood ant — larger, creamier, and more delicately flavoured than the weaver ant eggs (kiến vàng) used in the Central Highlands muối kiến vàng preparation. The Polyrhachis larvae are white, slightly translucent, about 3-4mm long, with a mild, slightly nutty flavour and a creamy texture when cooked — they do not taste of insect in any expected way but of something faintly oceanic and rich, often compared by first-time eaters to the flavour of the finest sea urchin roe or a very fresh crustacean egg.\n\nThe Tày and Nùng communities of Cao Bằng have eaten trứng kiến since before recorded history — the ant eggs appear in Tày folk songs and agricultural calendars as a marker of spring's arrival. The cakes are made by grandmother figures in highland families and shared among the extended family network during the brief season. Selling them commercially is considered slightly inappropriate — bánh trứng kiến is a gift food, not a market food, even when it appears at Cao Bằng's morning market.`,
    ingredientSections: [
        {
            title: `Glutinous rice dough`,
            items: [
                { amount: 300, unit: 'g', name: `glutinous rice flour (bot nep)`, note: `mixed with boiling water — the heat-gelatinisation method` },
                { amount: 180, unit: 'ml', name: `boiling water`, note: `poured directly over flour` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Black ant egg filling`,
            items: [
                { amount: 150, unit: 'g', name: `fresh black ant eggs and larvae (trung kien den)`, note: `Polyrhachis species — collected fresh from forest nests; available only March-May in Cao Bằng markets; substitute: see step 1` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
                { amount: 2, name: `spring onions, sliced thin` },
                { amount: 1, name: `bunch la gung (young ginger leaf)`, note: `minced fine — the Tày aromatic for ant egg dishes; substitute: young perilla leaf` },
            ],
        },
        {
            title: `Wrapping`,
            items: [
                { amount: 12, name: `fresh dong leaves (Phrynium placentarium) or banana leaf sections`, note: `wiped clean — the Cao Bằng wrapping leaf` },
                { amount: 1, name: `roll kitchen twine` },
            ],
        },
        {
            title: `Dipping sauce`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `hat doi seeds, toasted and crushed`, note: `the Cao Bằng spice thread` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `The ant egg question — sourcing and substitutes`,
            description: `Fresh Polyrhachis black ant eggs are available only in Cao Bằng, Lạng Sơn, and Bắc Kạn markets during the March-May window. They are not exported, not frozen commercially, and not available outside the region. In Germany, the dish cannot be made with authentic trứng kiến đen. The closest available substitute that captures the dish's structural and flavour logic: a combination of 100g fresh sea urchin roe (Seeigel-Rogen, available at German Japanese restaurants and fish markets) + 50g sustainable fish roe (Lachsrogen or Forellen-Rogen) mixed with 1 tsp toasted sesame and a pinch of salt. This substitute replicates the creamy-oceanic flavour of ant eggs with approximately 70% accuracy and makes the cake worth preparing even outside the actual season.`,
            tip: `Polyrhachis ant larvae (trứng kiến đen) belong to a completely different flavour category than the weaver ant adults (kiến vàng) used in the Central Highlands. Adult ants are sour from formic acid and nutty from roasting; Polyrhachis larvae are creamy, mildly sweet, and faintly oceanic — the flavour comes from the amino acid profile of the larval body fat, which is high in glutamic acid (umami) and glycine (sweetness). This is why first-time eaters describe the flavour as "like sea urchin" — both are rich in the same amino acids that create the perception of oceanic richness.`,
        },
        {
            title: `Make the glutinous rice dough`,
            description: `Place glutinous rice flour and salt in a bowl. Pour boiling water over in a steady stream while stirring with a wooden spoon — the starch gelatinises on contact, producing a pliable, slightly translucent dough. Add oil and knead gently until smooth and no longer sticky. The dough should be soft and pliable — it stretches without tearing and holds a pressed shape. If too sticky, add 1 tsp additional flour; if cracking, add 1 tsp warm water. Rest covered 10 minutes. The glutinous rice dough for bánh trứng kiến is thicker and more substantial than the rice flour sheets of bánh cuốn — it provides structural protection for the delicate ant egg filling during steaming.`,
        },
        {
            title: `Prepare the ant egg filling`,
            description: `If using fresh ant eggs: inspect carefully and remove any ant bodies, pine needles, or nest material. Do not wash — the eggs are extremely fragile and water dissolves their thin membrane. Heat oil in a pan over medium heat. Sauté shallots and garlic until softened but not browned — 2 minutes. Add fresh ant eggs and stir very gently for 60-90 seconds — just until the larvae turn from translucent white to opaque cream. They cook almost instantly. Add fish sauce, pepper, sugar, spring onion, and minced ginger leaf. Toss once. Remove from heat immediately — overcooked ant eggs become rubbery and lose their characteristic creaminess. Cool completely.`,
            tip: `The 60-90 second cooking window for ant eggs is the most critical timing in the recipe. Fresh Polyrhachis larvae contain a high proportion of delicate proteins that denature rapidly at heat — at 60 seconds they are just set, creamy, and at their most flavourful; at 3 minutes they are rubbery and their flavour has largely been cooked out. Experienced Tày cooks add the eggs to the pan, count to 60, and remove. The residual heat of the filling finishes the cooking during the final 30 seconds in the pan and the first minutes of steaming.`,
        },
        {
            title: `Shape the bánh trứng kiến`,
            description: `Divide the rested dough into 12 equal portions of approximately 40g each. Roll each portion between palms into a ball, then flatten into a disc about 8cm in diameter. Place 1.5 tablespoons of cooled ant egg filling in the centre of the disc. Fold the dough up and around the filling, pressing the edges together firmly to seal — the shape should be a slightly flattened oval, like a small leaf-wrapped dumpling. The seal must be complete — any gap allows the ant egg filling to leak into the wrapping leaf during steaming.`,
        },
        {
            title: `Wrap in lá dong and steam`,
            description: `Place each shaped cake on a dong leaf section. Fold the leaf around the cake, tucking the ends under — the cake should be completely enclosed. Tie with kitchen twine or a strip of banana leaf. The dong leaf provides both its characteristic green fragrance to the glutinous exterior and a natural non-stick surface that prevents the cooked cake from adhering to the steamer. Steam over vigorously boiling water for 20-22 minutes. The cakes are done when the glutinous rice exterior has set firmly and the dong leaf has darkened. Rest 5 minutes before unwrapping — the dough tears if unwrapped immediately after steaming.`,
        },
        {
            title: `Serve as a spring gift food`,
            description: `Unwrap at the table — the dong leaf fragrance released as each parcel is opened is part of the eating experience. The exterior should be smooth, slightly translucent, and pearlescent from the glutinous rice. Cut each cake in half to reveal the ant egg filling — the filling should be cream-coloured with visible egg pieces, moist, and fragrant with ginger leaf. Dip in the hạt dổi fish sauce before eating. In Cao Bằng, bánh trứng kiến is brought to elderly relatives and important guests during the spring ant egg season — arriving at a door with a basket of freshly made bánh trứng kiến is an expression of respect and care that the recipient understands immediately. The gift carries the labour of collection, the knowledge of timing, and the generosity of sharing the season's rarest ingredient.`,
            tip: `The cultural weight of bánh trứng kiến as a gift food rather than a market food is the element that cannot be documented in a recipe but must be understood to cook the dish with the correct intention. The Tày grandmother who makes these cakes for her grandchildren's families does not weigh ingredients or follow steps — she knows the season by the quality of morning light, the ant eggs by touch and smell, and the dough by the feel of it between her palms. The recipe here is a translation of that knowledge into a format that can cross the distance between a Cao Bằng limestone hillside and a German kitchen, but the original knowledge is embodied, not written.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}