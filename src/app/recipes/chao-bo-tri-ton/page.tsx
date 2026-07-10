'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-bo-tri-ton',
    title: `Tri Tôn Khmer Beef Congee`,
    subtitle: `Cháo Bò Tri Tôn — An Giang's Khmer-style beef congee with turmeric, lá cách, and lemongrass from the foot of the Seven Mountains.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Tri Tôn is the most distinctly Khmer district of An Giang province — a dry, hilly landscape at the base of the Thất Sơn (Seven Mountains) range near the Cambodian border, where the majority of the population is Khmer and the food culture reflects centuries of Khmer-Vietnamese-Cham overlap at the edge of two civilisations. Cháo bò Tri Tôn is the beef congee that feeds this community from before dawn — sold at roadside stalls along the highway between Tri Tôn town and the Tịnh Biên border crossing from 5am until the congee runs out.\n\nThe defining ingredient is lá cách (Premna serratifolia) — a highland leaf with a sharp, slightly resinous, and intensely aromatic flavour that is used throughout Khmer cooking in the Mekong Delta and southern Cambodia. Lá cách has no direct equivalent in Vietnamese lowland cooking and is one of the clearest markers of Khmer culinary identity in the An Giang kitchen. It is added to the finished congee in the final minutes — not cooked into the broth, but dropped over the hot bowl so the residual heat releases the volatile oils without cooking away the fragrance.\n\nThe beef broth is built on roasted bones and lemongrass, coloured golden with fresh turmeric, and the congee itself is cooked from whole jasmine rice rather than broken rice — giving it a looser, more broth-forward texture than the thick porridge-style congee of the north. The beef is thinly sliced and added raw to each bowl, cooking in the hot broth at the table — a technique borrowed from the Vietnamese phở tradition but applied to Khmer congee.`,
    ingredientSections: [
        {
            title: `Beef broth`,
            items: [
                { amount: 600, unit: 'g', name: `beef bones (xuong bo)`, note: `roasted at 220°C 20 min — deep brown for maximum Maillard flavour` },
                { amount: 200, unit: 'g', name: `beef brisket (uc bo)`, note: `simmered whole in broth 45 min, sliced thin for topping` },
                { amount: 3, name: `lemongrass stalks, bruised` },
                { amount: 30, unit: 'g', name: `fresh turmeric, sliced (or 2 tsp dried)` },
                { amount: 3, name: `shallots, charred` },
                { amount: 20, unit: 'g', name: `fresh galangal, sliced` },
                { amount: 2, unit: 'tbsp', name: `fish sauce` },
                { amount: 20, unit: 'g', name: `rock sugar` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 2.5, unit: 'L', name: `water` },
            ],
        },
        {
            title: `Congee rice`,
            items: [
                { amount: 200, unit: 'g', name: `jasmine rice (gao jasmine)`, note: `whole grain — rinsed 3 times; Khmer congee uses whole grain, not broken` },
                { amount: 1.2, unit: 'L', name: `beef broth (from above)` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Raw beef topping`,
            items: [
                { amount: 300, unit: 'g', name: `beef sirloin or eye fillet (bo phi le)`, note: `sliced 2mm thin across the grain — kept ice-cold until serving` },
                { amount: 0.5, unit: 'tsp', name: `ground turmeric`, note: `tossed with raw beef slices` },
                { amount: 0.5, unit: 'tsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
            ],
        },
        {
            title: `The Khmer garnish`,
            items: [
                { amount: 1, name: `bunch la cach (Premna serratifolia)`, note: `young leaves only — dropped over hot bowl at serving, never cooked; substitute: a combination of fresh basil + lime leaf chiffonade approximates the resinous note` },
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 2, unit: 'tbsp', name: `roasted peanuts, crushed` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Roast bones and build the broth`,
            description: `Preheat oven to 220°C. Roast beef bones in a single layer for 20-25 minutes until deeply browned. Transfer to a stockpot with charred shallots, bruised lemongrass, fresh turmeric slices, galangal, and 2.5 L cold water. Bring to a boil, skim foam thoroughly for 10 minutes. Add whole brisket. Reduce to a low simmer uncovered for 1 hour 15 minutes. Remove brisket — cool and slice thin. Strain broth through a fine sieve. Season with fish sauce, rock sugar, and salt. The broth should be golden-orange from the turmeric, clear, and richly savoury with lemongrass fragrance.`,
        },
        {
            title: `Cook the whole-grain congee`,
            description: `Combine rinsed jasmine rice with 1.2 L strained beef broth in a heavy pot. Bring to a boil stirring occasionally, then reduce to a gentle simmer. Cook uncovered 45-55 minutes, stirring every 10 minutes, until the rice grains have bloomed and softened but remain identifiable — not dissolved into a smooth paste. The Tri Tôn congee should be looser than northern cháo: each grain visible, floating in a golden broth rather than collapsed into a thick porridge. Add additional hot broth if it thickens too much. Keep warm on the lowest heat.`,
            tip: `The whole-grain loose congee texture is the Khmer Tri Tôn signature. Northern Vietnamese cháo (especially cháo lươn) uses broken rice that completely dissolves; Tri Tôn cháo bò uses whole jasmine rice that blooms but holds its shape. The distinction is deliberate — the looser congee allows the raw beef slices dropped into the bowl to cook evenly in the surrounding hot liquid rather than sinking into a thick paste that insulates them from the heat.`,
        },
        {
            title: `Prepare the raw beef`,
            description: `Partially freeze beef sirloin for 15-20 minutes until very firm but not frozen. Slice across the grain at 2mm thickness. Toss slices with ground turmeric, fish sauce, and black pepper — the turmeric colours the raw beef golden and, along with the fish sauce, begins a very brief surface cure that firms the exterior slightly. Keep on a cold plate in the refrigerator until serving. The raw beef is never cooked before going into the bowl — it cooks from the heat of the congee and broth ladled over it at the table.`,
            tip: `The turmeric toss on the raw beef is the Tri Tôn Khmer addition that distinguishes this from Vietnamese phở-style raw beef congee. The turmeric connects visually and aromatically to the golden turmeric broth — when the hot congee is ladled over the turmeric-dusted beef, both turn the same golden colour and the turmeric fragrance is released simultaneously from above (the broth) and below (the beef surface).`,
        },
        {
            title: `Prepare the lá cách`,
            description: `Pick young lá cách leaves from the stems — use only the tender young growth, not older, tougher leaves which are too resinous. Wash and dry gently. Do not tear or chiffonade — lá cách is placed whole or roughly torn as large pieces over each bowl. The leaves should be at room temperature, never cold — a cold leaf on a hot bowl creates condensation that dilutes the volatile oils rather than releasing them. In Tri Tôn, vendors keep lá cách in a small basket at room temperature throughout service.`,
            tip: `Lá cách (Premna serratifolia) is available at some Vietnamese grocers in Germany as a dried herb or occasionally fresh in Vietnamese community markets. If unavailable, the closest approximation is a combination of 3 fresh basil leaves (for the floral-anise note) + 1 kaffir lime leaf sliced paper-thin (for the citrus-resinous note) per bowl. This substitute captures approximately 60% of lá cách's character — enough to understand the role it plays without replicating it exactly.`,
        },
        {
            title: `Assemble the bowl at the table`,
            description: `Ladle hot congee into deep bowls — the congee should be loose enough to pour easily. Arrange raw beef slices over the congee surface — they will begin cooking immediately from the congee's heat. Lay 2-3 slices of cooked brisket alongside. Ladle an additional spoonful of hot broth directly over the raw beef — this finishes the cooking and ensures even heat penetration. The beef should be just cooked through — barely pink at the centre of each slice — within 60-90 seconds of the hot liquid contact.`,
        },
        {
            title: `Finish with the Khmer garnish`,
            description: `Scatter spring onion, fried shallots, and crushed roasted peanuts over the bowl. Place 3-4 whole young lá cách leaves directly on the hot surface — press them lightly with the back of a spoon so they make full contact with the hot congee. The heat will release their volatile oils in a burst of fragrance within 10 seconds of contact. Add rau răm leaves and a pinch of coarse black pepper. Serve with lime wedge and sliced chili. In Tri Tôn, the entire assembly happens in 20 seconds at the stall — the vendor moves with a practiced rhythm that produces a finished bowl faster than most kitchens can slice garnishes.`,
        },
        {
            title: `Eat immediately`,
            description: `Stir the bowl gently once to distribute the lá cách oils through the congee. Squeeze lime. The lá cách aroma fades within 5 minutes of adding to the bowl — eat immediately for the full Khmer aromatic experience. The correct eating sequence: first a spoonful of congee alone to taste the turmeric-lemongrass broth; then a piece of raw-cooked beef with lá cách; then peanuts and fried shallot with the congee; then rau răm and lime for brightness. The sequence moves from deep and savoury toward bright and herbal — the flavour arc of Khmer cooking at the foot of the Seven Mountains.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}