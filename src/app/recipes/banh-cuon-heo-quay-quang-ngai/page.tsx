'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-cuon-heo-quay-quang-ngai',
    title: `Quảng Ngãi Roast Pork Rice Roll`,
    subtitle: `Bánh Cuốn Thịt Heo Quay Quảng Ngãi — Steamed rice sheets filled with crispy roast pork and wood ear mushroom, dipped in mắm nêm with pineapple.`,
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh cuốn Quảng Ngãi is one of the most distinctive regional variations of the steamed rice roll found throughout Vietnam — and the element that makes it categorically different from every other version is the filling: crispy roast pork (heo quay) with crackled skin, shredded and mixed with wood ear mushroom, shallots, and a small amount of pork liver pâté. Where Hà Nội bánh cuốn uses minced pork and mushroom in a soft filling, and Hải Phòng bánh cuốn is eaten without any filling at all, the Quảng Ngãi version wraps around chunks of heo quay whose skin has been lacquered and crisped separately — producing a roll where the outer rice sheet is silky and delicate and the interior has the crunch and richness of roast pork crackling.\n\nThe dipping sauce is the second major distinction: not the standard nước chấm of northern bánh cuốn, but mắm nêm — the pungent fermented anchovy sauce of central Vietnam, thinned with fresh pineapple juice and seasoned with lemongrass and chili. The combination of delicate rice sheet, rich roast pork, and intensely savoury mắm nêm is characteristically central Vietnamese in its willingness to layer bold flavours without restraint.\n\nThe rice sheet itself is made from a batter of rice flour and tapioca starch, poured in thin rounds onto a cloth stretched over a pot of boiling water, covered for 60 seconds, then peeled off with a flat wooden stick. This technique requires practice — the sheet tears easily when too thin or sticks to the cloth when the batter ratio is wrong. The 80:20 rice flour to tapioca ratio produces a sheet that is translucent, slightly elastic, and strong enough to wrap a filling without tearing.`,
    ingredientSections: [
        {
            title: `Rice sheet batter (vo banh cuon)`,
            items: [
                { amount: 200, unit: 'g', name: `rice flour (bot gao te)`, note: `fine-milled — 80% of total` },
                { amount: 50, unit: 'g', name: `tapioca starch (bot nang)`, note: `20% of total — gives elasticity` },
                { amount: 500, unit: 'ml', name: `water`, note: `room temperature` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `prevents sheets from sticking together` },
            ],
        },
        {
            title: `Roast pork filling (nhan heo quay)`,
            items: [
                { amount: 400, unit: 'g', name: `Vietnamese-style roast pork (heo quay)`, note: `with crispy crackling — buy from Chinese BBQ shop or Vietnamese deli; or roast pork belly at home (see tip)` },
                { amount: 30, unit: 'g', name: `dried wood ear mushroom (nam meo)`, note: `soaked 20 min, drained, sliced thin` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Mắm nêm dipping sauce (Quảng Ngãi style)`,
            items: [
                { amount: 4, unit: 'tbsp', name: `mam nem (fermented anchovy paste)`, note: `Viet Huong or Pantai brand from Asian grocer` },
                { amount: 3, unit: 'tbsp', name: `fresh pineapple juice`, note: `blended from ¼ ripe pineapple and strained` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 2, name: `lemongrass stalks, inner white only, minced fine` },
                { amount: 3, name: `bird's eye chili, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 3, unit: 'tbsp', name: `warm water` },
            ],
        },
        {
            title: `Garnish and accompaniments`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 1, name: `cucumber, sliced thin` },
                { amount: 150, unit: 'g', name: `bean sprouts (gia do)`, note: `briefly blanched 20 seconds` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the batter — rest 30 minutes`,
            description: `Combine rice flour, tapioca starch, and salt in a bowl. Add water gradually while whisking to prevent lumps — add the first 200ml slowly, then the remaining 300ml more quickly once the batter is smooth. Add neutral oil and whisk to combine. The finished batter should be very thin — thinner than crepe batter, with a consistency similar to whole milk. Strain through a fine sieve to remove any lumps. Rest 30 minutes at room temperature — the starch particles hydrate fully during resting, producing a more even, translucent sheet than batter used immediately.`,
            tip: `The 80:20 rice to tapioca ratio is the Quảng Ngãi balance. More tapioca (above 25%) makes the sheet too elastic and rubbery; less tapioca (below 15%) makes it fragile and prone to tearing when lifted from the cloth. This ratio produces a sheet that is strong enough to wrap chunky heo quay filling while remaining delicate in texture. Do not substitute all-purpose flour for any portion of the rice flour — the wheat gluten would make the sheet tough.`,
        },
        {
            title: `Prepare the roast pork filling`,
            description: `Cut heo quay into small pieces 1-2cm — the crackling skin should be kept attached to the meat in each piece, not separated. Heat neutral oil in a pan over medium heat. Sauté minced shallots and garlic until fragrant, 90 seconds. Add sliced wood ear mushroom and stir 2 minutes. Add the heo quay pieces and toss to warm through — 2 minutes only, do not overcook or the crackling will soften. Season with fish sauce, sugar, and black pepper. The filling should be savoury, fragrant, and have visible pieces of crispy skin throughout. Remove from heat and cool slightly before filling the rice sheets.`,
            tip: `Heo quay (Chinese-style roast pork) is available at Chinese BBQ shops (Peking-Ente shops) in most German cities — Berlin, Frankfurt, Hamburg, Cologne all have them. Ask specifically for the roast pork belly with crackling skin (Spanferkel-Bauch in German shops). Buy it the same day as making the bánh cuốn — day-old heo quay skin loses its crispness and the filling becomes soggy inside the rice sheet.`,
        },
        {
            title: `Set up the steaming cloth`,
            description: `Stretch a piece of thin muslin cloth tightly over the opening of a wide pot of boiling water — the cloth should be taut like a drum, with no sags. Secure with rubber bands or string tied around the pot rim. The cloth surface should be 5-8cm above the water — close enough for steam to penetrate quickly but not so close that boiling water splashes onto the cloth. Brush the cloth surface very lightly with neutral oil before the first sheet — just enough to prevent sticking without making the surface greasy. Keep the water at a vigorous boil throughout cooking.`,
            tip: `The cloth tension is the most critical variable in bánh cuốn making. A slack cloth produces uneven sheets that are thick in the centre and thin at the edges. A cloth that is too tight tears the sheet when you try to remove it. The correct tension is firm — when you press the centre of the cloth lightly with one finger, it should give no more than 5mm before resisting. Re-tension the cloth between every 5-6 sheets as the steam loosens it.`,
        },
        {
            title: `Pour and steam the rice sheets`,
            description: `Using a ladle, pour approximately 60ml of batter onto the centre of the steaming cloth in one smooth circular motion — tilt the ladle as you pour and move it in a small circle to spread the batter into a round about 20cm in diameter. The batter should spread to a thin, even layer immediately on contact with the hot cloth. Cover with a dome lid for exactly 60 seconds. The sheet is done when the surface appears set and slightly opaque with no wet spots remaining. Uncover and immediately slide a thin flat wooden stick or offset spatula under the sheet to loosen the edges, then lift the entire sheet off the cloth in one motion.`,
            tip: `The 60-second steam time is correct for a 2mm thick sheet at full rolling boil. Longer than 75 seconds and the sheet becomes too firm and loses its delicate texture; less than 50 seconds and the centre remains wet and tears during removal. Set a timer for the first 10 sheets until the timing becomes instinctive. The steam dome must seal completely during the 60 seconds — any gap allows heat to escape and produces uneven cooking.`,
        },
        {
            title: `Fill and roll`,
            description: `Transfer each hot sheet to a lightly oiled flat surface or banana leaf. Working quickly before the sheet cools and loses pliability: place 2-3 tablespoons of the heo quay filling in a line across the lower third of the sheet. Fold the bottom edge up over the filling. Fold the left and right sides in toward the centre. Roll forward into a cylinder — not too tight, which crushes the filling, and not too loose, which causes the roll to fall apart. The finished roll should be about 10cm long and 3cm in diameter. Arrange on a serving plate and scatter fried shallots over immediately.`,
        },
        {
            title: `Make the mắm nêm sauce`,
            description: `Blend ¼ ripe pineapple smooth and strain through a fine sieve — you need 3 tbsp clear juice. Combine mắm nêm paste with warm water and stir until smooth. Add pineapple juice, lime juice, and sugar. Stir until dissolved. Add minced lemongrass, garlic, and chili. The sauce should be pungent, sweet-sour, and intensely aromatic. Let sit 10 minutes before serving — the lemongrass flavour develops and the pineapple enzyme begins to soften the anchovy paste slightly, producing a rounder flavour than freshly mixed sauce.`,
        },
        {
            title: `Serve immediately`,
            description: `Arrange bánh cuốn rolls on a plate with fried shallots scattered over. Serve the mắm nêm sauce in individual dipping bowls. Place the herb plate of rau răm, mint, cucumber, and bean sprouts alongside. Dip each roll in the mắm nêm, then eat with herbs. The contrast between the silky rice sheet, crunchy pork crackling, funky mắm nêm, and fresh herbs is the flavour architecture of the dish. Bánh cuốn must be eaten immediately after rolling — within 10 minutes the rice sheet begins to harden and the crackling softens from the filling's moisture.`,
            tip: `The 10-minute eating window is the hardest constraint of bánh cuốn service. Roll and eat in small batches rather than rolling everything at once. In Quảng Ngãi market stalls, the vendor rolls each order to order — 4-5 rolls at a time — and the customer begins eating the first rolls while the vendor finishes the last. This rolling-while-eating rhythm is the correct pace of the dish.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}