'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-nuong-sa-te-phan-thiet',
    title: `Phan Thiết Sa Tế Grilled Squid`,
    subtitle: `Mực Nướng Sa Tế Phan Thiết — Whole fresh squid grilled over charcoal with lemongrass chili paste — the Bình Thuận coast's most celebrated seafood preparation.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Mực nướng sa tế is the grilled squid preparation that defines Phan Thiết's seafood identity — a whole fresh squid (mực ống, Loligo chinensis or Uroteuthis chinensis — the Chinese squid) marinated in sa tế paste and grilled over charcoal until the exterior is charred and aromatic, the flesh inside is tender and sweet, and the tentacles have crisped to a crackling texture that is the most flavourful element of the entire preparation. Phan Thiết, on the southern coast of Bình Thuận province, is surrounded by waters of the South China Sea that produce squid of exceptional freshness and flavour — caught at night by the same lamplight fishing boats whose lights are visible from the coast in the hours before dawn.\n\nThe Chinese squid (Loligo chinensis / Uroteuthis chinensis) of the Phan Thiết coast is a medium-sized squid — 15-25cm mantle length, 150-300g whole — with firm, sweet flesh and a thin skin that chars rapidly over charcoal, producing the characteristic slightly bitter, aromatic shell that contrasts with the sweet flesh inside. The tentacles, which contain more concentrated protein per gram than the mantle, Maillard-brown more rapidly and more completely during grilling, becoming deeply flavoured and slightly crispy — the most intensely flavoured part of the grilled squid.\n\nThe sa tế paste (lemongrass, chili, garlic, shallot, fried in oil) is applied both inside the squid mantle and outside — the internal application is the technique specific to whole-squid grilling that most recipes omit, producing a squid that is flavoured from inside and outside simultaneously during the short grilling time. The heat inside the squid mantle during grilling creates a steam environment — the sa tế inside the cavity perfumes this steam, which then permeates the flesh from within while the exterior chars and caramelises.`,
    ingredientSections: [
        {
            title: `Squid`,
            items: [
                { amount: 800, unit: 'g', name: `fresh whole squid (muc ong)`, note: `4-6 squid of 150-200g each — cleaned but kept whole with tentacles attached; substitute: fresh cuttlefish or large squid from German fishmongers` },
            ],
        },
        {
            title: `Sa tế paste (fried — not raw)`,
            items: [
                { amount: 4, name: `lemongrass stalks, inner white only, minced very fine` },
                { amount: 5, name: `red bird's eye chili, minced` },
                { amount: 2, name: `red long chili, minced`, note: `for colour and moderate heat` },
                { amount: 5, name: `garlic cloves, minced to paste` },
                { amount: 3, name: `shallots, minced` },
                { amount: 3, unit: 'tbsp', name: `neutral oil` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
            ],
        },
        {
            title: `Grilling marinade`,
            items: [
                { amount: 4, unit: 'tbsp', name: `sa te paste (fried and cooled)` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tbsp', name: `honey`, note: `caramelisation agent` },
                { amount: 0.5, unit: 'tsp', name: `sesame oil` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
            ],
        },
        {
            title: `Basting butter`,
            items: [
                { amount: 40, unit: 'g', name: `unsalted butter` },
                { amount: 2, name: `lemongrass stalks, bruised` },
                { amount: 2, name: `garlic cloves, smashed` },
                { amount: 1, unit: 'tbsp', name: `sa te paste` },
                { amount: 0.5, unit: 'tsp', name: `fish sauce` },
            ],
        },
        {
            title: `Muối tiêu chanh dipping`,
            items: [
                { amount: 1.5, unit: 'tsp', name: `coarse salt` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, name: `green chili, minced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 4, name: `portions steamed white rice or bánh mì` },
            ],
        },
    ],
    steps: [
        {
            title: `Clean the squid — keeping it whole`,
            description: `Hold the mantle (body tube) in one hand and the head-tentacle section in the other. Pull firmly and steadily — the head separates from the mantle, bringing the innards with it. Do not discard the tentacles — cut them from the head just below the eyes, keeping the ring of tentacles intact as one piece. Squeeze the cut end of the tentacle cluster to pop out the hard beak — discard. Reach inside the mantle and pull out the transparent quill (the internal shell). Rinse the mantle inside and out under cold water. The cleaned squid should be: mantle intact and empty, tentacle cluster intact. Do not score the mantle — scoring causes it to curl severely during grilling and produces uneven cooking.`,
            tip: `The no-scoring instruction is counter to most Western squid grilling recipes, which score the mantle in a crosshatch pattern to prevent curling. For mực nướng sa tế, the whole-mantle technique is correct for two reasons. First: the sa tế paste inside the mantle creates an internal steam environment during grilling that cooks the flesh from within — a scored mantle allows this internal steam to escape, eliminating the inside-out cooking mechanism. Second: the intact mantle's natural curl during grilling (it will curl slightly) creates varying distances from the heat across its surface, producing areas of intense char alongside areas of gentle caramelisation — a textural variety that a flat, scored mantle cannot achieve.`,
        },
        {
            title: `Fry the sa tế paste`,
            description: `Heat oil in a pan over medium heat. Add lemongrass and stir-fry 3 minutes until softened and fragrant — the harsh raw terpenes cook off, leaving the clean citral aroma. Add garlic and shallots, continue 2-3 minutes until golden. Add chilies and stir 2 minutes until the oil turns deep orange-red from the chili pigments. Add salt, sugar, and fish sauce. Remove from heat and cool completely. The fried sa tế is the flavour foundation of the marinade — raw lemongrass-chili paste applied to squid produces a harsh, undeveloped flavour; fried sa tế produces depth and complexity that only the Maillard reaction in the frying step can generate.`,
        },
        {
            title: `Apply marinade inside and outside`,
            description: `Combine fried sa tế paste with fish sauce, honey, sesame oil, and black pepper. Mix thoroughly. Using a small spoon or your finger, apply 1 tablespoon of marinade inside each squid mantle — push it to the closed end of the tube and distribute along the interior surface. Apply remaining marinade liberally to the exterior of each mantle and all surfaces of the tentacle clusters. The inside application is the technique that produces flavoured flesh throughout the thickness of the mantle — without it, the marinade only seasons the exterior 1-2mm of flesh. Rest 20-30 minutes.`,
        },
        {
            title: `Make the lemongrass basting butter`,
            description: `Melt butter in a small saucepan over medium-low heat. Add bruised lemongrass stalks and smashed garlic. Cook gently 4-5 minutes until butter is fragrant with lemongrass — do not brown. Add sa tế paste and fish sauce. Keep warm over very low heat. The basting butter will be applied during the final minute of grilling — the butter fat carries the lemongrass citral and sa tế compounds across the charred squid surface simultaneously, producing a glistening, aromatic finish that water-based marinades cannot replicate.`,
        },
        {
            title: `Grill — 5 to 7 minutes total`,
            description: `Prepare charcoal at medium-high heat. Place squid mantles directly on the grill grate. Grill 2-3 minutes without moving — the mantle will begin to curl slightly as the proteins contract and the interior steam builds. The skin will char and blister, turning from white to golden to charred in a natural gradient. Flip once and grill 2 minutes on the second side. Add tentacle clusters for the final 2 minutes — they require less time than the thicker mantle and will crisp beautifully. In the final 60 seconds, brush everything generously with lemongrass basting butter. Total time: 5-7 minutes. Remove the moment the mantle is opaque throughout when pressed with a finger.`,
            tip: `The 5-7 minute total window for squid is the most critical timing in any grilled seafood preparation. At 5 minutes: tender, sweet, slightly yielding. At 8 minutes: the collagen in the squid's mantle has fully contracted and the flesh has toughened to a rubber-band texture. At 10 minutes: inedible. Squid has almost no fat to buffer the heat-induced toughening — it goes from perfect to overcooked faster than any other seafood. The correct endpoint for mực nướng sa tế is when the mantle feels firm but yields to pressure — like a firm marshmallow, not like a rubber eraser.`,
        },
        {
            title: `Cut and serve immediately`,
            description: `Slice each grilled squid mantle into 2cm rings at the table using kitchen scissors — faster and cleaner than a knife on the slightly chewy mantle. The cross-sections reveal the interior that was cooked by the sa tế steam — golden-tinged from the turmeric in the paste, fragrant with lemongrass, and distinctly different from the plain interior of an externally-only-marinated squid. Arrange with the tentacle clusters alongside — the tentacles, which grilled to a deep amber-brown with slightly crispy tips, are the most intensely flavoured element and should be eaten first while hottest. Serve with muối tiêu chanh, rau răm, mint, lime, and rice. In Phan Thiết, mực nướng sa tế is eaten at beachside restaurants in the evening, the charcoal smoke mixing with the sea air, the squid arriving within minutes of leaving the grill, the tentacles crackling between the teeth.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}