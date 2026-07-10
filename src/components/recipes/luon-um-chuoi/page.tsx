'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'luon-um-chuoi',
    title: `Eel Braised with Unripe Banana`,
    subtitle: `Lươn Um Chuối — Bến Tre's river eel slow-braised with green banana, coconut milk, and lemongrass until the banana absorbs all the eel fat.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Lươn um chuối is one of the most distinctively Mekong Delta dishes in Bến Tre's home cooking tradition — a slow braise in which freshwater eel (lươn đồng, Monopterus albus) and thick sections of unripe chuối sứ (Musa paradisiaca — the Siamese banana, also called the silk banana) are cooked together in coconut milk, lemongrass, and galangal until the banana pieces have completely absorbed the eel's rendered fat and the coconut milk has reduced to a thick, aromatic sauce.\n\nThe pairing of eel and unripe banana is one of the most clever flavour combinations in the Mekong Delta kitchen. The eel's fat — rich, slightly gamey, intensely savoury — needs a starchy, astringent counterpart to balance it. The unripe banana provides exactly this: dense, slightly tannic, with a starchy quality that softens during the braise into something silky and almost creamy, having absorbed the eel fat throughout its structure. By the end of cooking, the banana and eel are so thoroughly flavour-exchanged that neither tastes as it would alone.\n\nChuối sứ (the silk banana) is the variety grown throughout Bến Tre's coconut islands — smaller than the Cavendish bananas of European supermarkets, with a denser, starchier flesh and a thicker, more astringent skin. The unripe fruit is used specifically because its tannins and starches interact with the eel's proteins and fat during braising in ways that ripe banana flesh cannot — ripe banana dissolves into a sweet mush rather than maintaining the firm, absorbent structure that makes this dish work.`,
    ingredientSections: [
        {
            title: `Eel`,
            items: [
                { amount: 500, unit: 'g', name: `fresh freshwater eel (luon dong)`, note: `Monopterus albus — cleaned, salt-vinegar scrubbed, cut into 5cm sections; substitute: conger eel or large catfish steaks` },
                { amount: 2, unit: 'tbsp', name: `coarse salt`, note: `for cleaning` },
                { amount: 1, unit: 'tbsp', name: `rice vinegar`, note: `second cleaning step` },
            ],
        },
        {
            title: `Unripe banana`,
            items: [
                { amount: 4, name: `unripe chuoi su bananas (green, firm)`, note: `peeled and cut into 4cm sections — drop immediately into acidulated water (water + 1 tbsp lime juice) to prevent browning; substitute: 3 green plantains` },
                { amount: 1, unit: 'L', name: `cold water + 1 tbsp lime juice`, note: `for soaking banana` },
            ],
        },
        {
            title: `Braising liquid`,
            items: [
                { amount: 300, unit: 'ml', name: `full-fat coconut milk (nuoc cot dua)`, note: `the Bến Tre base — not water` },
                { amount: 200, unit: 'ml', name: `fresh coconut water (nuoc dua tuoi)` },
                { amount: 3, name: `lemongrass stalks, bruised and knotted` },
                { amount: 25, unit: 'g', name: `fresh galangal, sliced` },
                { amount: 4, name: `shallots, halved` },
                { amount: 3, name: `garlic cloves, smashed` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `ground turmeric` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 2, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, name: `fresh red chili, sliced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Clean the eel`,
            description: `Rub eel sections vigorously with coarse salt for 2-3 minutes to remove the mucus coating. Rinse under cold water. Repeat with rice vinegar — rub, 2 minutes, rinse. Pat completely dry. The double cleaning is essential for lươn um chuối specifically because the eel renders significant fat during the long braise — any residual mucus mixed with this fat produces an unpleasant slippery texture in the finished sauce. The eel sections should feel slightly rough and completely clean after the two-step process.`,
        },
        {
            title: `Prepare the unripe banana`,
            description: `Peel unripe bananas — wear gloves if available, as unripe banana skin contains a sticky latex that stains skin and clothing black and is difficult to remove. Cut each banana into 4cm sections. Drop immediately into the acidulated soaking water — unripe banana oxidises extremely rapidly and turns dark brown within 60 seconds of peeling without acid protection. Soak 15 minutes. The lime juice penetrates the cut surfaces and slows enzymatic browning throughout the braise. Drain and pat dry before using.`,
            tip: `The latex in unripe chuối sứ skin is the same compound (tannic acid derivatives) that gives the banana its astringency — and the astringency is exactly what makes it the correct counterpart to eel fat in this braise. Do not substitute ripe banana — the latex and tannins decrease as the banana ripens, and by the fully ripe stage there is almost none left, producing a sweet mushy braise rather than the firm, fat-absorbing texture the dish requires. Green plantain (Kochbanane) available at German Turkish and Asian grocery stores is the closest substitute for chuối sứ in ripeness and tannin content.`,
        },
        {
            title: `Brown the eel`,
            description: `Heat neutral oil in a wide, heavy-bottomed pot over high heat. Pat eel sections absolutely dry one final time. Sear in batches without crowding — 2-3 minutes per side until golden on the exterior. The eel will release some fat during searing; do not drain this fat — it is the flavour foundation of the braise. Remove seared eel to a plate. In the same pot with the eel fat, sauté halved shallots cut-side down until golden, 2-3 minutes. Add smashed garlic, lemongrass, and galangal. Stir 60 seconds.`,
        },
        {
            title: `Layer and braise — 45 minutes`,
            description: `Add drained banana sections to the pot with the aromatics. Toss to coat in the eel fat and aromatic oil. Pour in coconut milk and coconut water. Add fish sauce, sugar, turmeric, and black pepper. Return browned eel sections to the pot — nestle them between the banana pieces so both are partially submerged in the braising liquid. Bring to a gentle simmer. Cover and braise on the lowest possible heat for 35-40 minutes. The banana will soften and absorb the coconut-eel braising liquid; the eel will render more fat into the surrounding sauce.`,
            tip: `The layering of eel between banana sections — not on top and not below — is the technique that produces the maximum flavour exchange. Each eel section is in direct contact with two banana surfaces; each banana section is in contact with eel on at least one side. As the eel fat renders and the banana absorbs the surrounding liquid, the fat moves directly from eel surface to banana flesh through the contact surface. Eel placed on top of the banana only transfers fat through the sauce, not directly — a slower and less complete exchange.`,
        },
        {
            title: `Uncover and reduce`,
            description: `Remove the lid for the final 10-15 minutes. Increase heat to medium-low. The coconut milk will reduce from a thin braising liquid to a thick, glossy sauce that coats the banana and eel. The banana sections should now be deep golden-brown at the edges where they have caramelised in the coconut milk, and completely soft throughout — press with a chopstick, they should yield without resistance. The eel should be firm, golden-brown on the exterior, and coated in the reduced coconut sauce.`,
            tip: `The banana colour change during the final reduction is the visual doneness indicator for lươn um chuối. At the start of braising: pale cream. At 30 minutes: beginning to yellow. At 45 minutes with the lid on: deep yellow. After 10 minutes uncovered reduction: golden-amber at the edges with caramelised spots. This progressive darkening reflects the Maillard reactions occurring between the banana's reducing sugars and the coconut milk's amino acids — the same chemistry as caramelised onion, producing a complex sweetness that raw or briefly cooked banana never has.`,
        },
        {
            title: `Finish and serve`,
            description: `Remove lemongrass and galangal. Transfer to a serving bowl — eel and banana sections together in the thick coconut sauce. Scatter spring onion, fried shallots, rau răm, and coarse black pepper over the top. Add sliced fresh chili for colour. Serve alongside steamed white rice and lime wedges. In Bến Tre, the banana sections are eaten before the eel — they have absorbed the most concentrated expression of the eel fat and coconut milk during the braise and are considered the most flavourful element. The eel is eaten second, its fat having transferred to the banana, leaving it with a clean, lean flavour that is the counterpoint to the rich banana.`,
            tip: `The reversal of the expected flavour hierarchy — banana richer than eel after braising — is the most surprising element of lươn um chuối for first-time eaters. The banana goes into the pot bland and starchy; it comes out rich, fatty, and intensely savoury with the eel's character. The eel goes in fatty and gamey; it comes out clean and direct. This flavour exchange is the philosophical core of the dish and the reason the banana and eel are considered inseparable — neither is complete without what the other gives it.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}