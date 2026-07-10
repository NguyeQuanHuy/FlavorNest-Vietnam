'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-it-tran-hap',
    title: `Central Vietnamese Naked Sticky Rice Dumpling`,
    subtitle: `Bánh Ít Trần Hấp — Unwrapped glutinous rice dumplings filled with shrimp and pork, steamed white and translucent — the most honest dumpling in Vietnamese cooking.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh ít trần is the central Vietnamese dumpling that has dispensed with wrapping entirely — "trần" means naked or bare, and the name describes the dumpling's most distinctive feature: it is steamed without any leaf wrapping, its glutinous rice exterior exposed directly to the steam, producing a smooth, slightly translucent white surface that reveals the dark filling within as a shadow visible through the cooked dough. This visual quality — the silhouette of the filling seen through the translucent glutinous rice shell — is the aesthetic signature of bánh ít trần and the technical achievement that skilled dumpling makers in Bình Định, Quảng Ngãi, and the surrounding central provinces pride themselves on.\n\nBánh ít (with leaf wrapping) is the broader category — a pyramid-shaped glutinous rice dumpling eaten throughout central Vietnam, wrapped in banana or dong leaf and steamed. The trần version removes the leaf and changes the shape to a flattened dome, requiring the dough to be significantly more precisely calibrated: too wet and the dumpling spreads during steaming into a flat disc; too dry and it cracks, admitting steam into the filling and destroying the sealed interior that is the point of the preparation. The correct dough is made with boiling water — the heat-gelatinisation technique that produces a pliable, non-cracking dough immediately workable — and must be used warm, within 20 minutes of making.\n\nThe filling is seasoned minced shrimp and pork — the standard central Vietnamese bánh filling combination — with wood ear mushroom and shallot, cooked until fragrant and dry. The filling must be formed into individual balls before the dough is shaped, because pressing filling into a raw dough disc tears the delicate glutinous surface. This pre-shaping is the professional technique that produces the clean filling-to-dough ratio visible in the finished dumpling's cross-section.`,
    ingredientSections: [
        {
            title: `Glutinous rice dough`,
            items: [
                { amount: 250, unit: 'g', name: `glutinous rice flour (bot nep)`, note: `not regular rice flour — must be glutinous` },
                { amount: 170, unit: 'ml', name: `boiling water`, note: `poured directly over flour — heat-gelatinisation produces pliable non-cracking dough` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `added after initial mixing — prevents sticking` },
            ],
        },
        {
            title: `Shrimp and pork filling`,
            items: [
                { amount: 150, unit: 'g', name: `fresh shrimp (tom)`, note: `peeled, deveined, minced coarse` },
                { amount: 100, unit: 'g', name: `pork mince (thit heo xay)`, note: `30% fat` },
                { amount: 30, unit: 'g', name: `dried wood ear mushroom (nam meo kho)`, note: `soaked 20 min, minced fine` },
                { amount: 2, name: `shallots, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Mỡ hành (spring onion oil — essential finish)`,
            items: [
                { amount: 4, name: `spring onions, sliced thin` },
                { amount: 4, unit: 'tbsp', name: `neutral oil` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Dipping sauce`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 3, unit: 'tbsp', name: `warm water` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `For steaming`,
            items: [
                { amount: 1, name: `neutral oil`, note: `for lightly oiling steamer surface and hands` },
                { amount: 8, name: `small squares parchment paper (6x6cm)`, note: `one under each dumpling` },
            ],
        },
    ],
    steps: [
        {
            title: `Cook and cool the filling`,
            description: `Heat oil in a pan over medium-high heat. Sauté shallots and garlic until golden. Add pork mince and cook through, breaking up — 3-4 minutes. Add minced shrimp and stir 2 minutes until pink and cooked. Add wood ear mushroom. Season with fish sauce, sugar, pepper, and sesame oil. Cook until completely dry — no residual moisture. The filling must be dry: any moisture makes the dough soggy during shaping and produces a dumpling that tears when lifted. Cool completely. Divide into 8 equal portions and roll each into a compact ball — the pre-shaped ball is what allows precise, even filling distribution in the finished dumpling.`,
            tip: `Pre-rolling the filling into balls before assembling the dumplings is the professional bánh ít trần technique that home recipes almost never document. When a flat disc of dough is filled with a spoonful of loose filling and then gathered, the filling distributes unevenly — more filling at the bottom, less at the sides. A pre-shaped ball of filling placed in the centre of the dough disc and enclosed produces perfectly centred filling that shows as a symmetrical shadow through the translucent cooked dough.`,
        },
        {
            title: `Make the heat-gelatinised dough`,
            description: `Place glutinous rice flour and salt in a bowl. Pour boiling water over in a steady stream while stirring rapidly with a wooden spoon — the starch gelatinises on contact with the boiling water, producing a dough that is simultaneously soft, pliable, and non-sticky. Add oil and knead briefly until smooth. The dough should feel like warm Play-Doh — soft and yielding, stretching without breaking, and slightly shiny from the oil. Work quickly — the dough is most pliable when warm. Divide into 8 equal portions of approximately 50g each. Keep covered with a damp cloth between shaping to prevent drying.`,
            tip: `The boiling water gelatinisation (bột chín — cooked dough) is the technique that makes bánh ít trần dough workable without cracking. Cold-water glutinous rice dough is crumbly and cracks when shaped, admitting steam into the filling during cooking and collapsing the sealed interior. The boiling water partially gelatinises the starch, converting the crystalline starch granules into an amorphous gel that is both pliable and crack-resistant. The dough must be used warm — below 40°C it stiffens and becomes difficult to shape without cracking.`,
        },
        {
            title: `Shape the bánh ít trần`,
            description: `Oil hands lightly. Take one dough portion and flatten into a disc approximately 8cm diameter — thinner at the edges than the centre. Place one pre-shaped filling ball in the centre. Gather the dough edges upward, pleating carefully around the filling. Pinch firmly to seal the top — no gaps. Turn the sealed dumpling over and place sealed-side down on a parchment square. Gently press the top to create the characteristic flattened dome shape — not a ball, not flat, but a low dome approximately 2.5cm high and 5cm wide. The flattened dome shape is specific to bánh ít trần and maximises the translucent surface area through which the filling is visible.`,
        },
        {
            title: `Steam — 12 to 15 minutes`,
            description: `Bring water in the steamer to a vigorous boil. Arrange dumplings on their parchment squares in the steamer basket with 2cm spacing. Cover and steam 12-15 minutes. The dumplings are done when the exterior has turned from opaque white to slightly translucent — you should be able to see the shadow of the filling through the dough when held up to light. The surface should be smooth and slightly shiny, with no cracks or dry patches. Remove from steamer and rest on the parchment squares for 2 minutes — the dough continues to set slightly from residual heat and releases cleanly from the parchment after resting.`,
            tip: `The translucency test is the bánh ít trần quality standard: a correctly made dumpling held up to a light source shows the dark filling as a clear shadow through the white glutinous dough. This requires both correct dough calibration (not too thick, not too thin) and correct steaming time (not undercooked = opaque white throughout, not overcooked = translucent but beginning to collapse). The translucency develops progressively during steaming — the dumplings go from opaque at 8 minutes to slightly translucent at 12 minutes to clearly translucent at 15 minutes.`,
        },
        {
            title: `Make the mỡ hành`,
            description: `Place sliced spring onions and salt in a heatproof bowl. Heat oil until shimmering at 180°C. Pour over spring onions immediately. Stir once. The mỡ hành must be made immediately before serving and applied hot — it is the finishing element that gives the white dumplings their glistening appearance and the spring onion fragrance that completes the bánh ít trần sensory experience. A bowl of bánh ít trần without mỡ hành is incomplete in central Vietnamese food culture.`,
        },
        {
            title: `Serve and eat`,
            description: `Arrange steamed dumplings on a plate. Spoon hot mỡ hành generously over each — the oil should pool around the base of each dumpling and the spring onion should drape over the top. The white dumplings with green spring onion and the golden fried shallots is the correct visual presentation of bánh ít trần. Serve with nuoc cham alongside. To eat: pick up a whole dumpling with chopsticks, dip briefly in the nuoc cham, eat in one or two bites. The dough should be soft, slightly chewy, and glistening from the mỡ hành; the filling should be fragrant, well-seasoned, and distinctly visible as the dumpling is bitten through. In central Vietnam, bánh ít trần is the market breakfast eaten standing at the stall counter before 8am, the vendor scooping from a steamer that has been running since 5am.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}