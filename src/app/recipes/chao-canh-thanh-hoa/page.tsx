'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-canh-thanh-hoa',
    title: `Thanh Hóa Fresh Dough Soup`,
    subtitle: `Cháo Canh Thanh Hóa — Rice flour dough dropped fresh into pork broth, cooked to order in the bowl, eaten at dawn in Thanh Hóa markets.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cháo canh is Thanh Hóa's most unusual noodle preparation — a soup in which the starch element is not a pre-made noodle or dried cracker but a fresh rice flour dough that is pinched and dropped directly into simmering pork broth to order, cooking in the bowl in under two minutes. The name means literally "porridge soup" (cháo = porridge, canh = soup), but it is neither — it is its own category: a light pork broth containing irregular fresh dough pieces that are chewy, slightly opaque, and carry no flavour of their own, functioning purely as a textural vehicle for the broth.\n\nThe dough is made fresh each morning by Thanh Hóa market vendors from rice flour and a small amount of tapioca starch, mixed with just enough hot water to form a pliable, non-sticky mass. It is kept at room temperature and used within hours. When an order is placed, the vendor pinches off small pieces — each roughly the size of a thumbnail — and drops them one by one into a ladle of boiling broth. They cook in 90 seconds, swelling slightly and turning from white to translucent at the edges. The finished bowl contains irregular, handmade dough pieces floating in clear pork broth with sliced pork, spring onion, and fried shallots.\n\nWhat makes cháo canh distinctly Thanh Hóa is the irregularity of the dough pieces — no two are the same size or shape, because they are pinched by hand rather than extruded or cut. This handmade texture is considered a quality marker: machine-made versions (which do exist in Vinh and Hà Nội) are dismissed by Thanh Hóa locals as missing the point entirely. The soup is about the gesture of making it as much as the eating of it.`,
    ingredientSections: [
        {
            title: `Fresh rice dough (bot canh)`,
            items: [
                { amount: 250, unit: 'g', name: `rice flour (bot gao te)`, note: `fine-milled, not glutinous rice flour` },
                { amount: 50, unit: 'g', name: `tapioca starch (bot nang)`, note: `20% of total — gives the dough its chewy, slightly springy texture` },
                { amount: 160, unit: 'ml', name: `boiling water`, note: `must be at full boil — partially gelatinises the starch for pliability` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `neutral oil`, note: `prevents dough from sticking to hands during pinching` },
            ],
        },
        {
            title: `Clear pork broth`,
            items: [
                { amount: 500, unit: 'g', name: `pork bones (xuong heo)`, note: `blanched and rinsed` },
                { amount: 200, unit: 'g', name: `pork shoulder (thit nac vai)`, note: `simmered whole 25 min, sliced thin for topping` },
                { amount: 2, name: `shallots, halved and charred` },
                { amount: 20, unit: 'g', name: `fresh ginger, sliced` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 2, unit: 'L', name: `water` },
            ],
        },
        {
            title: `Toppings`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)`, note: `generous — the primary flavour accent` },
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, unit: 'tbsp', name: `pork lard or neutral oil`, note: `drizzled into each bowl before ladling broth` },
                { amount: 0.5, unit: 'tsp', name: `black pepper, coarsely ground` },
            ],
        },
        {
            title: `Condiments`,
            items: [
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
                { amount: 2, unit: 'tsp', name: `shrimp paste (mam tom)`, note: `optional — some vendors serve alongside, some do not` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the rice dough`,
            description: `Combine rice flour, tapioca starch, and salt in a heatproof bowl. Bring 160ml water to a full rolling boil. Pour boiling water over the flour mixture all at once and stir immediately and vigorously with a wooden spoon — the mixture will clump and partially gelatinise within seconds. Add neutral oil and knead in the bowl until a smooth, pliable dough forms, about 3-4 minutes. The dough should be soft but not sticky, slightly warm to the touch, and smooth on the surface. It should hold its shape when pinched but yield easily to pressure. Cover with a damp cloth and rest 15 minutes at room temperature.`,
            tip: `The boiling water gelatinisation is what gives cháo canh dough its distinctive texture — partially cooked starch is more pliable and produces a chewier, more resilient piece when dropped into hot broth than raw starch dough would. The dough should not be refrigerated before use — cold dough pinches into pieces that are too firm and do not cook evenly in the broth. Use within 3 hours of making.`,
        },
        {
            title: `Build the pork broth`,
            description: `Blanch pork bones in boiling water 5 minutes, drain and rinse each bone clean. Char shallot halves cut-side down over gas flame until blackened on the flat surface. Combine bones, charred shallots, ginger slices, and 2 L cold water in a stockpot. Bring to a boil, skim foam for 10 minutes, reduce to the lowest possible simmer. Cook uncovered 1 hour. Add whole pork shoulder in the last 25 minutes — simmer until just cooked through, remove and cool before slicing thin. Strain broth through a fine sieve. Season with fish sauce, salt, and sugar. The broth should be pale gold, clear, and clean-tasting with a gentle pork sweetness.`,
        },
        {
            title: `Test the dough consistency`,
            description: `Pinch off a small piece of dough — about 5g — and drop it into a small pot of simmering water. It should sink, then float to the surface within 60-90 seconds, puffed slightly and translucent at the edges while remaining white at the centre. If it disintegrates, the dough needs more kneading — work for 2 more minutes. If it remains completely white after 90 seconds, the water is not hot enough. If the piece is too sticky to pinch cleanly, dust hands very lightly with rice flour. This test piece is the quality check before serving.`,
            tip: `The test drop is the most important step that home recipes for cháo canh consistently omit. Thanh Hóa market vendors test their morning dough batch before opening — a dough that fails the test (disintegrates, sticks, or does not cook through) is reworked or discarded. The 60-90 second float-to-surface timing is the correct cook time. Set this as your reference for the serving step.`,
        },
        {
            title: `Bring broth to a rolling boil for service`,
            description: `Transfer strained broth to a pot and bring to a vigorous boil — not a simmer. Cháo canh dough pieces require actively boiling liquid to cook evenly. A simmering broth produces pieces that are cooked on the outside but still doughy in the centre. Keep the broth at a rolling boil throughout the serving process. If the boil drops during cooking, wait for it to return before dropping more pieces.`,
        },
        {
            title: `Pinch and drop to order`,
            description: `This is the defining technique of cháo canh. Working directly over the boiling broth: pinch off irregular pieces of dough between thumb and forefinger — each piece roughly 3-4g, the size of a large chickpea. Drop directly into the boiling broth. Pinch and drop continuously until 8-10 pieces are in the pot. Cook 90 seconds — the pieces will float and the edges will turn translucent. Do not stir; agitation causes the dough pieces to stick together. Scoop into a serving bowl with a slotted spoon.`,
            tip: `The irregular shape of hand-pinched dough is the quality marker of authentic cháo canh. Each piece should be slightly different — some thicker in the centre, some thinner, some with a small tail from the pinch. This irregularity creates variation in texture within a single bowl: thicker pieces are chewier, thinner pieces are more delicate. Cutting the dough into uniform pieces (some home recipes suggest this) misses the point of the dish entirely.`,
        },
        {
            title: `Assemble and serve`,
            description: `Place a small amount of pork lard or oil in the bottom of each serving bowl. Add the freshly cooked dough pieces. Arrange sliced pork shoulder on top. Ladle boiling broth over everything — the broth should nearly fill the bowl. Scatter spring onion, fried shallots, and a pinch of coarse black pepper. Serve immediately with lime and chili on the side. In Thanh Hóa markets, cháo canh is eaten standing at the stall counter, bowl in both hands, alternating between spoonfuls of broth and bites of dough piece and pork. The bowl is finished in under 5 minutes. It is a breakfast food, not a meal.`,
            tip: `Cháo canh is best understood as the opposite of slow food — it is made to order in 2 minutes, eaten in 5, and the entire experience from order to empty bowl takes less than 8 minutes. The irregular handmade dough, the clear broth, the fried shallot — everything is designed for speed and satisfaction at dawn. Making it slowly and carefully at home produces a better bowl than the market version but loses the context that gives the dish its energy.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}