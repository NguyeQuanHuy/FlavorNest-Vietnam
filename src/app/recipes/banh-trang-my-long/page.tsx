'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-trang-my-long',
    title: `Mỹ Lồng Coconut Rice Paper`,
    subtitle: `Bánh Tráng Mỹ Lồng — Bến Tre's most famous rice cracker, made with coconut milk and toasted over charcoal until fragrant and blistered.`,
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 20,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Mỹ Lồng is a small village in Giồng Trôm district, Bến Tre province — a place that produces what most Vietnamese food writers consider the finest rice paper crackers in the country. The village has been making bánh tráng since the early twentieth century, and the craft is passed down through families who maintain the same production method: rice flour ground from specific Bến Tre lowland rice varieties, mixed with fresh coconut milk from the province's abundant coconut palms, poured onto cloth-stretched steaming frames, sun-dried on bamboo racks in the Mekong Delta heat, and finally toasted over charcoal to order.\n\nWhat makes Mỹ Lồng bánh tráng distinct from rice papers made elsewhere in Vietnam is the coconut milk — not a small amount added for flavour, but a substantial portion of the liquid content, producing a cracker that is simultaneously crispier (the coconut fat accelerates browning during toasting), more fragrant, and slightly sweet in a way that plain rice paper is not. The toasting over charcoal — rather than the gas flame or electric element used by modern producers — adds a specific smoke note from the coconut shell charcoal traditionally used in Bến Tre that completes the flavour profile.\n\nBánh tráng Mỹ Lồng is made in several varieties: mặn (savoury, with sesame and shrimp), ngọt (sweet, with coconut sugar), and đặc biệt (special, with egg). All are eaten as snacks, used as wrapping paper for spring rolls and grilled meats, or broken into pieces and eaten with toppings like the bánh tráng nướng of Đà Lạt. This recipe documents the mặn (savoury sesame shrimp) variety — the most exported and most widely eaten version.`,
    ingredientSections: [
        {
            title: `Rice paper batter`,
            items: [
                { amount: 300, unit: 'g', name: `rice flour (bot gao te)`, note: `fine-milled — the Bến Tre lowland rice variety produces the thinnest sheets` },
                { amount: 50, unit: 'g', name: `tapioca starch (bot nang)`, note: `adds translucence and crispness` },
                { amount: 300, unit: 'ml', name: `full-fat coconut milk (nuoc cot dua)`, note: `the Mỹ Lồng distinction — generous ratio` },
                { amount: 200, unit: 'ml', name: `water` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `sugar` },
            ],
        },
        {
            title: `Mặn toppings (savoury sesame shrimp)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `white sesame seeds (me trang)`, note: `scattered on each sheet before drying` },
                { amount: 50, unit: 'g', name: `dried shrimp powder (tom kho xay)`, note: `finely ground dried shrimp — scattered sparingly` },
                { amount: 0.5, unit: 'tsp', name: `salt`, note: `light dusting over each sheet` },
            ],
        },
        {
            title: `For toasting`,
            items: [
                { amount: 1, name: `charcoal grill or gas burner with wire rack`, note: `coconut shell charcoal is the Mỹ Lồng standard — adds a specific smoke note` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 1, name: `bowl nuoc cham or sweet chili sauce` },
                { amount: 1, name: `bunch rau ram or fresh herbs` },
                { amount: 1, name: `small bowl muoi ot (chili salt)` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the coconut batter`,
            description: `Combine rice flour, tapioca starch, salt, and sugar in a large bowl. Whisk together. Add coconut milk gradually while whisking — add slowly to prevent lumps forming. Add water and whisk until completely smooth. The batter should be very thin — thinner than crepe batter, similar to slightly thickened water. Strain through a fine sieve into a clean bowl. Rest 30 minutes — the starch hydrates fully and the coconut fat distributes evenly through the batter. The rested batter will have a faint coconut fragrance and a slight yellow-white colour from the coconut fat.`,
            tip: `The coconut milk ratio in Mỹ Lồng bánh tráng (300ml coconut milk per 300g rice flour) is significantly higher than in standard bánh cuốn or bánh xèo batter. This high ratio is what produces the characteristic richness, fragrance, and accelerated browning during toasting. Do not reduce the coconut milk — it is not flavouring but a structural ingredient that changes the physical properties of the dried sheet.`,
        },
        {
            title: `Steam the sheets on cloth`,
            description: `Stretch thin muslin cloth tightly over a wide pot of vigorously boiling water — taut like a drum. Brush the cloth surface very lightly with coconut oil. Pour approximately 60ml of batter onto the cloth centre in a smooth circular motion, spreading into a round 22-24cm wide. Scatter a pinch of sesame seeds and a light dusting of dried shrimp powder immediately over the wet batter surface. Cover with a dome lid for 60 seconds. Peel off onto a bamboo drying mat or lightly oiled surface.`,
            tip: `The sesame seeds must be scattered while the batter is still wet — they embed into the surface as it sets during steaming and become permanently fixed to the sheet. Seeds scattered after steaming sit on top and fall off during drying and toasting. Press them very lightly with a clean finger immediately after scattering to ensure contact with the wet batter surface.`,
        },
        {
            title: `Sun-dry — 4 to 6 hours`,
            description: `Transfer steamed sheets carefully to bamboo drying mats or wire racks. Lay flat in full sun. In Mỹ Lồng, the Mekong Delta sun (32-35°C, low humidity) dries the sheets completely in 4-6 hours. In Germany in summer: a south-facing balcony in direct sun works well — allow 6-8 hours. In winter or overcast weather: a food dehydrator at 50°C for 3-4 hours produces equivalent results. The sheet is fully dry when it is completely rigid, slightly translucent, and lifts cleanly from the mat without bending. Partially dried sheets will crack during toasting rather than puffing.`,
            tip: `The drying step is where Mỹ Lồng production quality diverges from industrial production. Mỹ Lồng sheets are sun-dried slowly — the gradual moisture removal allows the coconut fat to redistribute evenly through the sheet rather than pooling at the surface as happens in rapid oven or machine drying. This even fat distribution is what produces the uniform golden colour during toasting rather than the patchy browning of industrial sheets.`,
        },
        {
            title: `Toast over charcoal`,
            description: `Prepare charcoal — coconut shell charcoal if available, standard charcoal otherwise. Allow coals to develop a grey ash covering with no orange flame. Place a wire rack 15-20cm above the coals. Place a dried bánh tráng sheet on the rack. Toast 60-90 seconds per side, moving the sheet constantly with tongs in small circular motions to ensure even heat distribution — the coconut fat in the sheet will cause it to brown quickly and unevenly if left stationary. The sheet should puff slightly, develop golden blisters across the surface, and smell of toasted coconut and sesame. The edges will be slightly darker than the centre.`,
            tip: `The constant movement during toasting is the technique that distinguishes Mỹ Lồng vendors from home cooks. Professional vendors hold the sheet with two pairs of tongs and rotate it continuously in a figure-8 pattern over the coals — the motion ensures every point of the sheet receives equal heat exposure. At home, use one pair of long tongs and rotate the sheet every 10-15 seconds. A stationary sheet produces burnt edges and a pale centre.`,
        },
        {
            title: `Store and serve`,
            description: `Toasted bánh tráng Mỹ Lồng is eaten immediately after toasting — the coconut fat continues to redistribute during the 2-3 minutes after removal from heat, and the sheet reaches its maximum fragrance about 90 seconds after leaving the coals. Break into pieces by pressing firmly with both thumbs from the centre — the sheet should shatter cleanly along natural stress lines, producing irregular but roughly equal pieces. Serve with nuoc cham for dipping, or eat plain. Untoasted dried sheets keep in an airtight container for 3-4 weeks. Once toasted, eat within 30 minutes before the coconut fat reabsorbs ambient moisture and softens the sheet.`,
        },
        {
            title: `The Bến Tre eating tradition`,
            description: `In Mỹ Lồng village, bánh tráng is eaten in three ways: as a standalone snack broken into pieces and dipped in nuoc cham; as a wrap for grilled meats and fresh herbs (the whole unbroken toasted sheet used as a wrapper, filled and rolled like a burrito); and crumbled into coarse shards over rice porridge as a textural garnish. The village vendors who produce bánh tráng for export pack each sheet individually in banana leaf before placing in cardboard boxes — the banana leaf absorbs any residual moisture during transport and prevents the sheets from sticking together. In Germany, store between sheets of parchment paper in an airtight tin.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}