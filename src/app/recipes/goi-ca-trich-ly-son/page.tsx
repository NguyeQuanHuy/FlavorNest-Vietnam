'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-ca-nam-o',
    title: `Nam Ô Raw Fish Salad`,
    subtitle: `Gỏi Cá Nam Ô — Đà Nẵng's ancient fishing village acid-cured anchovy salad with lá giang and roasted peanuts — Vietnam's most complexly flavoured raw fish preparation.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Gỏi cá Nam Ô is the raw fish salad of Nam Ô village — now a ward within Đà Nẵng city but historically a fishing community at the mouth of the Cu Đê River where it meets the South China Sea, whose fishermen have been catching Engraulis japonicus (Japanese anchovy, cá cơm) and making gỏi cá for as long as the village has existed. The preparation is the village's most intimate cultural expression: thin-sliced fresh anchovy cured briefly in lá giang (Aganonerion polymorphum — the sour leaf vine) juice, then dressed with toasted peanuts, sesame, fried shallots, fresh herbs, and the specific combination of flavours that has been refined over generations of fishing family kitchens.\n\nLá giang is the souring agent that makes gỏi cá Nam Ô specifically different from every other Vietnamese raw fish salad. Unlike the lime juice used in most Vietnamese gỏi cá preparations — which provides clean, citrus acidity — lá giang juice (extracted by bruising the leaves and squeezing out the liquid) provides a more complex, slightly floral-sour flavour with a lower acidity than lime but a broader range of organic acids that work on the fish proteins differently. The lá giang cure produces fish that is opaque and textured but not as "cooked" in character as lime-cured preparations — the proteins are denatured but the texture remains more delicate, and the flavour of the fish itself is more present through the acid.\n\nThe anchovy used in gỏi cá Nam Ô is very fresh — ideally caught and prepared within hours, as the Japanese anchovy's delicate, oily flesh deteriorates rapidly. The fish are cleaned, filleted into the thinnest possible slices, and mixed with the lá giang juice for exactly the right amount of time — too short and the fish is too raw in texture; too long and the acid over-denatures the proteins, producing a firm, almost cooked texture and a sour flavour that overwhelms the fish\'s natural sweetness.`,
    ingredientSections: [
        {
            title: `Fish`,
            items: [
                { amount: 300, unit: 'g', name: `fresh anchovy (ca com / Engraulis japonicus)`, note: `extremely fresh — filleted into thin slices; substitute: very fresh sardines, mackerel, or sea bass sliced paper-thin` },
            ],
        },
        {
            title: `Lá giang curing acid`,
            items: [
                { amount: 50, unit: 'g', name: `la giang leaves (Aganonerion polymorphum)`, note: `bruised and squeezed for juice — approximately 3-4 tbsp juice; substitute: 2 tbsp lime juice + 1 tbsp young tamarind water + 0.5 tsp rice vinegar for a partial approximation` },
                { amount: 0.5, unit: 'tsp', name: `salt`, note: `added to the lá giang juice` },
            ],
        },
        {
            title: `Dressing`,
            items: [
                { amount: 3, unit: 'tbsp', name: `roasted peanuts, crushed coarse` },
                { amount: 2, unit: 'tbsp', name: `toasted sesame seeds (me rang)` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 2, name: `garlic cloves, minced and briefly fried in oil` },
                { amount: 1, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `chili oil or sa te` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `carries the dressing flavours` },
            ],
        },
        {
            title: `Fresh herbs and accompaniments`,
            items: [
                { amount: 1, name: `bunch rau ram (Vietnamese coriander)`, note: `the essential gỏi cá herb` },
                { amount: 1, name: `bunch kinh gioi (Vietnamese lemon balm)` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 2, name: `bird's eye chili, sliced thin` },
                { amount: 2, name: `limes, wedged` },
                { amount: 4, unit: 'tbsp', name: `mam nem (fermented anchovy sauce)`, note: `for dipping` },
                { amount: 20, name: `sheets banh trang nuong (toasted sesame rice crackers)`, note: `for scooping — the Nam Ô serving method` },
            ],
        },
    ],
    steps: [
        {
            title: `Source and fillet the fish — freshness is the dish`,
            description: `Gỏi cá Nam Ô requires fish so fresh it can be eaten raw — the Japanese anchovy (cá cơm) or its substitute must smell of the sea, not of fish. Signs of acceptable freshness for raw consumption: clear, bright eyes; firm flesh that springs back when pressed; bright red-pink gills; no fishiness (only sea smell). In Germany, sushi-grade fish from Japanese restaurants or specialist fishmongers (Fischgeschäft) that supply sushi restaurants is the safest route. Alternatively, very fresh sardines or mackerel from a trusted fishmonger can be used — fillet, remove all pin bones, and slice paper-thin (1-2mm) against the grain on a chilled cutting board.`,
            tip: `The food safety consideration for gỏi cá is the most important element of this recipe. Acid curing (lá giang juice or lime) denatures fish proteins and makes the flesh appear "cooked" visually, but does not kill all pathogens — particularly parasites such as Anisakis simplex, which requires either heat (above 60°C) or freezing (below -20°C for 24 hours) for elimination. The safest home preparation: freeze the fish at -20°C for 24 hours before use, then thaw and prepare. This eliminates parasite risk while preserving the texture and flavour characteristics of fresh fish. Sushi-grade fish from reputable suppliers has already been frozen to this standard.`,
        },
        {
            title: `Extract the lá giang juice`,
            description: `Take fresh lá giang leaves and bruise them firmly between the palms — pressing until the leaves are crushed and juice begins to run. The lá giang vine's leaves contain a high concentration of oxalic acid, malic acid, and citric acid — a broader organic acid profile than lime juice alone. Squeeze the bruised leaves firmly into a bowl, extracting every drop of the pale yellow-green juice. Add salt. The juice should taste clearly sour, slightly grassy, and have a faint floral note absent from lime. Strain out any leaf fragments. Measure 3-4 tablespoons of juice for 300g of fish.`,
            tip: `Lá giang (Aganonerion polymorphum) is occasionally available fresh at Vietnamese grocers in Germany, and more commonly frozen. The plant can also be grown from cuttings — it is a tropical vine that survives in warm indoor conditions in Germany with a south-facing window. For the Germany-only substitute: the combination of lime juice (primary acid), young tamarind dissolved in water (secondary acid with the malic acid dimension), and a small amount of rice vinegar (acetic acid for the floral-sour note) approximates the lá giang's multi-acid profile at approximately 65% of the original's complexity. The single most important element is not over-substituting with straight lime — the lá giang's lower pH and broader acid profile is what produces the delicate, non-aggressive cure.`,
        },
        {
            title: `Cure the fish — timing is everything`,
            description: `Place the thinly sliced fish in a wide, shallow bowl. Pour the lá giang juice and salt over the fish. Toss gently to coat all surfaces. The curing begins immediately — the organic acids in the lá giang juice begin denaturing the myosin proteins in the fish flesh on contact. Watch the colour change: the fish transitions from translucent to opaque from the surface inward. For gỏi cá Nam Ô, the correct curing time is 8-12 minutes — the exterior is fully opaque, the very centre is still slightly translucent. This partial cure preserves the fish's delicate texture and natural sweetness while providing sufficient protein denaturation for the dish to be textured and pleasant to eat.`,
            tip: `The 8-12 minute curing window is the most critical timing in gỏi cá Nam Ô — and the most variable based on the fish's thickness and the acid's concentration. The cure progresses from the fish surface inward at approximately 0.5mm per minute in standard lá giang juice. A 2mm thick slice is fully cured in approximately 4 minutes; a 3mm slice in 6 minutes. The visual indicator is the reliable guide: remove the fish from the acid when the translucent centre has shrunk to approximately 20-30% of the slice's width — just visible as a slightly different colour in the centre when a slice is held to light.`,
        },
        {
            title: `Drain and dress`,
            description: `Drain the cured fish thoroughly — gently squeeze out excess lá giang juice. Excess acid left on the fish will continue curing after the dressing is added and produce an overly sour result. Transfer to a clean bowl. Add fish sauce, sugar, chili oil, and neutral oil. Toss gently — the cured fish is fragile and tears easily. Add fried shallots, fried garlic, roughly two-thirds of the peanuts and sesame. Toss once more. Taste — the dish should be simultaneously: the fish's natural sweetness (front), the lá giang's gentle sourness (middle), the fish sauce's umami (throughout), and the peanut-sesame nuttiness (finish).`,
        },
        {
            title: `Add fresh herbs and serve`,
            description: `Add rau răm, kinh giới, and fresh chili directly to the dressed fish. Toss gently. Transfer to a serving plate. Scatter remaining peanuts, sesame, and fried shallots over the top. Serve immediately — the herbs wilt within minutes of contact with the acid-dressed fish and the peanuts lose their crunch within 10 minutes of moisture contact. In Nam Ô, gỏi cá is scooped directly onto toasted sesame rice crackers (bánh tráng nướng) — the cracker is the spoon, the vehicle, and the textural contrast all in one. Each cracker loaded with a small amount of gỏi cá and dipped briefly in mắm nêm is the complete Nam Ô eating unit. The mắm nêm — the same fermented anchovy product that defines the village's food identity — here completes a circle: the village's anchovy catch becomes both the gỏi cá and the mắm nêm that seasons it.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}