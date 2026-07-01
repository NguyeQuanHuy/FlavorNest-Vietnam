'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-tam-long-xuyen',
    title: `Long Xuyên Broken Rice`,
    subtitle: `Cơm Tấm Long Xuyên — An Giang's answer to Saigon broken rice, with grilled pork chop, mỡ hành, and a broth that doubles as dipping sauce.`,
    category: 'RICE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Long Xuyên is the capital of An Giang province — a river city at the edge of the Mekong floodplain where Cambodia, Vietnam, and the Cham Muslim community overlap on the same street corner. Its cơm tấm is not famous the way Saigon's is, but among An Giang locals it is a point of quiet pride: the pork chop marinade runs deeper (more fish sauce, more garlic, longer time), the broken rice is steamed then rested until each grain separates cleanly, and the nước mắm dipping sauce is made with warm pork bone broth instead of plain warm water — a small distinction that changes everything.\n\nThe dish is eaten from 5am at Long Xuyên market, where vendors have the pork chops already marinated and the charcoal lit before sunrise. The grilled smoke mixes with river fog. The mỡ hành (spring onion oil) is made fresh every two hours. Regulars do not need to order — the vendor knows their plate.\n\nThis recipe documents the An Giang preparation with the broth-based dipping sauce and the double-rest rice method. It is not faster than Saigon cơm tấm. It is better.`,
    ingredientSections: [
        {
            title: `Broken rice (cơm tấm)`,
            items: [
                { amount: 400, unit: 'g', name: `broken rice (gạo tấm)`, note: `rinse 3 times until water runs clear` },
                { amount: 480, unit: 'ml', name: `water`, note: `ratio 1:1.2 for broken rice — less than regular rice` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Long Xuyên grilled pork chop (sườn nướng An Giang)`,
            items: [
                { amount: 4, name: `bone-in pork rib chops (sườn heo)`, note: `about 200 g each, pounded thin at thickest part` },
                { amount: 3, unit: 'tbsp', name: `fish sauce (nước mắm)`, note: `40°N preferred — An Giang uses more than Saigon` },
                { amount: 2, unit: 'tbsp', name: `oyster sauce` },
                { amount: 1.5, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `honey`, note: `for caramelisation on the grill` },
                { amount: 6, name: `garlic cloves, minced` },
                { amount: 3, name: `shallots, minced` },
                { amount: 1, unit: 'tsp', name: `black pepper, freshly ground` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Mỡ hành (spring onion oil — non-negotiable)`,
            items: [
                { amount: 6, name: `spring onions, sliced thin` },
                { amount: 4, unit: 'tbsp', name: `neutral oil` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Long Xuyên broth-based dipping sauce (nước mắm nước lèo)`,
            items: [
                { amount: 200, unit: 'ml', name: `pork bone broth (or chicken stock)`, note: `warm — this replaces plain water; the An Giang distinction` },
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili (ớt hiểm), sliced` },
                { amount: 1, unit: 'tbsp', name: `rice vinegar` },
            ],
        },
        {
            title: `Standard plate accompaniments`,
            items: [
                { amount: 2, name: `eggs, fried sunny-side up (trứng ốp la)` },
                { amount: 200, unit: 'g', name: `pork skin with lard (bì heo)`, note: `shredded — buy ready-made from Vietnamese grocer` },
                { amount: 150, unit: 'g', name: `steamed egg meatloaf (chả trứng)`, note: `optional but traditional` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 2, name: `tomatoes, quartered` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hành phi)` },
            ],
        },
    ],
    steps: [
        {
            title: `Marinate the pork chops — minimum 4 hours`,
            description: `Combine fish sauce, oyster sauce, sugar, honey, minced garlic, shallots, black pepper, sesame oil, and neutral oil in a bowl. Whisk until sugar dissolves. Score the pork chops with shallow diagonal cuts on both sides — this prevents curling on the grill and helps the marinade penetrate. Coat chops thoroughly, massage marinade into the scores. Cover and refrigerate at least 4 hours. Overnight is standard in Long Xuyên.`,
            tip: `The higher fish sauce ratio (3 tbsp vs Saigon's typical 2 tbsp) is intentional — An Giang pork chops are meant to taste deeply savoury before the sweetness of the grill caramelisation arrives. Do not reduce it.`,
        },
        {
            title: `Cook the broken rice — two-rest method`,
            description: `Rinse broken rice three times in cold water until water runs nearly clear. Combine with 480 ml water and salt in a heavy-bottomed pot. Bring to a boil uncovered, then reduce heat to the lowest setting, cover tightly, and cook 12 minutes. Remove from heat — do not lift the lid — and rest 10 minutes. Then spread rice onto a wide tray or baking sheet in a thin layer. Fan or leave uncovered for 5 minutes. This double-rest separates the grains completely and prevents clumping. Return to pot to keep warm.`,
            tip: `The tray-spreading step is what An Giang vendors do that most home cooks skip. Broken rice starch is different from whole grain — it needs air to release steam or it becomes paste.`,
        },
        {
            title: `Make the mỡ hành`,
            description: `Place sliced spring onions in a heatproof bowl with salt. Heat neutral oil in a small saucepan until it just begins to shimmer — about 180°C. Pour hot oil directly over the spring onions in one motion. It will sizzle and spit — this is correct. Stir once. The onions will soften and turn bright green. Use immediately or within 2 hours. Do not reheat.`,
        },
        {
            title: `Make the Long Xuyên dipping sauce`,
            description: `Warm pork bone broth in a small saucepan — it should be hot but not simmering. Combine with fish sauce, sugar, lime juice, rice vinegar, minced garlic, and chili. Stir until sugar dissolves. Taste — it should be savoury-sweet with acid and heat in balance. The broth base gives it a roundness and body that water-based nước chấm cannot match. Serve warm in individual bowls.`,
        },
        {
            title: `Grill the pork chops`,
            description: `Remove chops from fridge 20 minutes before cooking. If using charcoal (traditional): grill over medium-hot coals 4–5 minutes per side, pressing gently with tongs to ensure contact. Baste with any remaining marinade in the last 2 minutes. If using a grill pan: heat until very hot, lightly oil, cook 4 minutes per side over high heat without moving. The surface should char in places — the caramelised honey and sugar creates a dark crust that is expected, not burnt.`,
        },
        {
            title: `Fry the eggs`,
            description: `Fry eggs sunny-side up in neutral oil over medium heat until whites are set but yolks remain runny. The yolk will break over the rice when eating — this is part of the dish's texture, not a mistake.`,
        },
        {
            title: `Plate the Long Xuyên way`,
            description: `Mound broken rice on one side of the plate — it should be loose and separate, never packed. Place grilled pork chop leaning against the rice. Add fried egg, bì heo (pork skin), and chả trứng alongside. Lay cucumber and tomato at the edge. Spoon mỡ hành generously over the rice and the pork chop surface. Scatter fried shallots. Serve with warm dipping sauce in a separate bowl. Everything on the plate should be hot.`,
            tip: `The mỡ hành goes on last, right before serving. It wilts quickly. Nước chấm is never poured over the rice — it is always in a bowl on the side for dipping the pork chop bite by bite.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
