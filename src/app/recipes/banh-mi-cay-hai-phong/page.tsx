'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-mi-cay-hai-phong',
    title: `Hải Phòng Spicy Bánh Mì`,
    subtitle: `Bánh Mì Cay Hải Phòng — The northern port city's fiery bánh mì with pâté, chả lụa, and a house-made chili sauce that no southern version replicates.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh mì cay Hải Phòng is the northern port city's fiercely independent answer to the bánh mì tradition — a sandwich that looks similar to its Sài Gòn counterpart from a distance but diverges at every detail: a denser, crustier baguette baked in the city's specific maritime humidity, a darker and more intensely seasoned pâté that reflects the north's preference for liver-forward flavour, a chả lụa (steamed pork sausage) that is firmer and less fatty than the southern version, and most importantly, a house-made chili sauce (tương ớt cay) that is the defining element — not the sweet-tangy sriracha-style sauce of the south but a raw, sharp, deeply aromatic chili paste that provides immediate, uncompromising heat.\n\nHải Phòng's bánh mì culture developed independently from Sài Gòn's because the city's French colonial culinary legacy — the port was a major French administrative and commercial centre — produced its own bread-baking tradition adapted to northern Vietnamese palates, which favour saltier, less sweet, and more aggressively spiced food than the southern Vietnamese baseline. The Hải Phòng baguette is baked slightly longer and at higher temperature than the Sài Gòn version, producing a thicker crust that audibly shatters when pressed and a denser crumb that absorbs the pâté and sauces without collapsing.\n\nThe chili sauce is the signature. Every bánh mì cay vendor in Hải Phòng makes their own — ground fresh red chili, garlic, shallot, a small amount of rice vinegar, fish sauce, and sometimes a small amount of fermented shrimp paste (mắm tôm) that adds the northern Vietnam umami depth characteristic of Hải Phòng cooking. No two vendors' sauces are identical, and regular customers choose their vendor specifically for the sauce.`,
    ingredientSections: [
        {
            title: `The bread`,
            items: [
                { amount: 300, unit: 'g', name: `strong bread flour (bot mi manh)`, note: `high gluten — produces the crispy crust` },
                { amount: 180, unit: 'ml', name: `cold water` },
                { amount: 5, unit: 'g', name: `instant yeast (men no)` },
                { amount: 6, unit: 'g', name: `salt` },
                { amount: 5, unit: 'g', name: `sugar` },
                { amount: 10, unit: 'g', name: `neutral oil` },
            ],
        },
        {
            title: `Northern pâté (pa-te mien Bac)`,
            items: [
                { amount: 200, unit: 'g', name: `chicken or pork liver`, note: `cleaned, soaked in milk 30 min` },
                { amount: 150, unit: 'g', name: `pork belly (ba chi heo)`, note: `minced` },
                { amount: 3, name: `shallots, minced` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 2, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tbsp', name: `oyster sauce` },
                { amount: 1, unit: 'tsp', name: `five-spice powder (ngu vi huong)` },
                { amount: 1, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 2, unit: 'tbsp', name: `unsalted butter` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Chả lụa (steamed pork sausage)`,
            items: [
                { amount: 300, unit: 'g', name: `lean pork shoulder (thit heo nac)`, note: `very cold — ground fine` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tsp', name: `baking powder`, note: `produces the bouncy texture` },
                { amount: 2, unit: 'tbsp', name: `tapioca starch (bot nang)` },
                { amount: 1, name: `banana leaf`, note: `for wrapping before steaming` },
            ],
        },
        {
            title: `Hải Phòng chili sauce (tuong ot cay — the signature)`,
            items: [
                { amount: 100, unit: 'g', name: `fresh red chili (ot do tuoi)`, note: `seeds included for full heat` },
                { amount: 6, name: `garlic cloves` },
                { amount: 3, name: `shallots` },
                { amount: 1, unit: 'tbsp', name: `rice vinegar` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `mam tom (fermented shrimp paste)`, note: `the northern umami depth — optional but authentic` },
                { amount: 2, unit: 'tbsp', name: `neutral oil`, note: `heated until smoking and poured over` },
            ],
        },
        {
            title: `Assembly`,
            items: [
                { amount: 4, name: `Hải Phòng-style baguettes (see above)` },
                { amount: 1, name: `cucumber, sliced thin lengthwise` },
                { amount: 50, unit: 'g', name: `do chua (pickled daikon and carrot)` },
                { amount: 1, name: `bunch cilantro (rau mui)` },
                { amount: 2, unit: 'tbsp', name: `mayonnaise (optional — southern influence, some HP vendors use)` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the Hải Phòng baguette — denser and crustier`,
            description: `Combine flour, yeast, salt, sugar, and oil. Add cold water gradually and mix until a shaggy dough forms. Knead 10-12 minutes until smooth and elastic — the dough should pass the windowpane test (stretch thin without tearing). The cold water slows fermentation slightly, producing a tighter gluten network and the denser crumb specific to Hải Phòng bread. Shape into a ball, cover, and prove at room temperature 60-75 minutes until doubled. Divide into 4 portions, shape into 20cm baguettes. Prove 30 more minutes. Score with a razor blade 3 times diagonally. Bake at 230°C with steam (place a tray of boiling water in the oven) for 18-22 minutes until deep golden and hollow-sounding when tapped.`,
            tip: `The steam injection during the first 10 minutes of baking is what produces the Hải Phòng baguette's characteristic thick, shattering crust — steam keeps the surface soft and extensible during initial oven spring, then as the steam dissipates the surface dries and hardens into the audible crust. A baguette baked without steam produces a soft, pale crust that does not shatter. The difference between Hải Phòng and Sài Gòn baguettes is real and audible — press the Hải Phòng version and it cracks loudly.`,
        },
        {
            title: `Make the northern pâté`,
            description: `Soak liver in milk 30 minutes — removes bitterness. Drain and pat dry. Heat butter and oil in a pan over medium-high heat. Sauté shallots and garlic until golden. Add pork belly mince and cook through. Add liver and cook 3-4 minutes until just cooked — still slightly pink inside. Add fish sauce, oyster sauce, five-spice, pepper, and sugar. Cool completely. Blend in a food processor until smooth. Pass through a fine sieve for a silky texture. Transfer to a container and refrigerate until firm. The northern pâté is darker, less creamy, and more aggressively seasoned than the southern version — the five-spice is the key northern marker.`,
        },
        {
            title: `Make the chả lụa`,
            description: `Keep pork absolutely cold — partially freeze for 20 minutes if needed. Grind very fine in a food processor — process 3-4 minutes until the mixture becomes sticky and paste-like. Add fish sauce, sugar, pepper, baking powder, and tapioca starch. Process 2 more minutes until the paste is completely smooth and stretchy. The baking powder creates the characteristic bouncy, slightly springy texture of chả lụa — without it the sausage is dense and rubbery. Wrap tightly in banana leaf into a cylinder 15cm long and 5cm diameter. Steam 35-40 minutes. Cool completely before slicing.`,
        },
        {
            title: `Make the Hải Phòng chili sauce`,
            description: `Blend fresh red chilies, garlic, shallots, rice vinegar, fish sauce, sugar, and mắm tôm (if using) to a coarse paste. Do not blend completely smooth — some texture should remain. Heat neutral oil in a small pan until smoking. Pour over the chili paste in one motion — it will sizzle and splatter. Stir immediately. The hot oil blooms the chili's capsaicin and the garlic's volatile oils simultaneously, producing the characteristic cooked-raw aroma that is sharper and more immediate than any commercial chili sauce. Cool before using. This sauce keeps refrigerated for 2 weeks — it intensifies over the first 3 days as the flavours meld.`,
            tip: `The mắm tôm in the Hải Phòng chili sauce is the northern fingerprint — no Sài Gòn bánh mì vendor uses fermented shrimp paste in their chili sauce. The mắm tôm adds a deeply savoury, slightly funky note that makes the Hải Phòng sauce simultaneously hotter-tasting and more complex than a plain chili-garlic sauce. At 0.5 tsp per 100g chili, it is not detectable as a separate flavour but as an intensity multiplier. The same principle as anchovy in Caesar dressing — its role is amplification, not identification.`,
        },
        {
            title: `Assemble the Hải Phòng bánh mì`,
            description: `Split the baguette lengthwise — not all the way through. Spread pâté generously on both inner surfaces. Slice chả lụa into 5mm rounds and layer on the bottom half. Add cucumber slices and pickled daikon-carrot. Lay cilantro sprigs over the filling. Spoon chili sauce generously over the top half — more than seems appropriate, as the dense Hải Phòng bread absorbs sauce rather than letting it drip. Close firmly and press down slightly to compress the filling. The correct Hải Phòng bánh mì is denser, less airy, and significantly hotter than the Sài Gòn version. Eat immediately — the thick crust softens within 10 minutes of assembly.`,
        },
        {
            title: `The Hải Phòng eating culture`,
            description: `Bánh mì cay Hải Phòng is eaten standing at the vendor's cart, usually before 8am, as breakfast before work or school. The vendor wraps each finished sandwich in a small sheet of newspaper or paper bag. The eating is fast — 3-4 large bites, each one delivering the shattering crust, the dark pâté, the springy chả lụa, and the sharp chili sauce simultaneously. In Hải Phòng's street food culture, the morning bánh mì is a ritual act of local identity — the city considers its version superior to Sài Gòn's and will argue the point at length with anyone who disagrees.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}