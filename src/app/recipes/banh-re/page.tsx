'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-re',
    title: `Crispy Sweet Potato Root Wafer`,
    subtitle: `Bánh R? — Phan Thi?t's shredded sweet potato and cassava fried into a lacy, brittle disc sweetened with palm sugar and sesame.`,
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 6,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh r? is the street snack that Phan Thi?t is most quietly proud of — a thin, lacy disc of shredded sweet potato and cassava, bound with palm sugar syrup and scattered with sesame seeds, fried in a shallow pool of oil until it sets into a brittle, caramelised wafer. The name r? comes from the Vietnamese word for root (r?) — this is a cake made from roots, by the people of a coastal city that has always grown its food in sandy, salt-touched soil where root vegetables thrive and leafy crops struggle.\n\nThe technique is simpler than it looks and more precise than it seems: the shredded sweet potato and cassava are squeezed completely dry, tossed with dissolved palm sugar and sesame seeds, then dropped by the spoonful into moderately hot oil and pressed flat with the back of a spoon into a lacy round about 12 centimetres in diameter. As the oil heats, the palm sugar caramelises around the individual shreds of root, binding them into a self-supporting disc that can be lifted from the oil in one piece. Timing is everything: too early and the disc breaks; too late and the sugar burns from amber to bitter.\n\nBánh r? is sold at the Phan Thi?t market and along the beachfront at Mui Né in the early morning and late afternoon. Vendors carry them in stacked towers wrapped in newspaper, still warm. They cost almost nothing. They are one of those foods where the simplicity of the ingredients — sweet potato, cassava, palm sugar, sesame, oil — produces a result that seems more complex than the sum of its parts: sweet, slightly saline from the cassava, nutty from the sesame, with the faint caramel depth of palm sugar and the structural satisfaction of something that shatters when bitten.`,
    ingredientSections: [
        {
            title: `The batter`,
            items: [
                { amount: 250, unit: 'g', name: `orange sweet potato (khoai lang)`, note: `peeled and shredded on a box grater — medium holes` },
                { amount: 150, unit: 'g', name: `fresh cassava (san tuoi)`, note: `peeled, shredded — substitute: 100g tapioca starch if fresh cassava unavailable` },
                { amount: 80, unit: 'g', name: `palm sugar (duong thot not or duong the)`, note: `grated or broken and dissolved in 2 tbsp warm water` },
                { amount: 2, unit: 'tbsp', name: `white sesame seeds (me trang)` },
                { amount: 1, unit: 'tbsp', name: `black sesame seeds (me den)`, note: `optional — for contrast` },
                { amount: 0.5, unit: 'tsp', name: `salt`, note: `balances the sweetness of the palm sugar` },
                { amount: 1, unit: 'tbsp', name: `tapioca starch (bot nang)`, note: `binds the shreds during frying — skip if using cassava, which provides its own starch` },
            ],
        },
        {
            title: `For frying`,
            items: [
                { amount: 300, unit: 'ml', name: `neutral oil`, note: `enough for 1 cm depth in a wide pan — not deep frying` },
            ],
        },
        {
            title: `Optional finish`,
            items: [
                { amount: 1, unit: 'tbsp', name: `grated fresh coconut (dua bao)`, note: `scattered on top in the last 30 seconds of frying — the Phan Thiet coastal addition` },
                { amount: 0.5, unit: 'tsp', name: `vanilla extract`, note: `added to the palm sugar syrup — some vendors include it` },
            ],
        },
    ],
    steps: [
        {
            title: `Shred and dry the roots`,
            description: `Peel and shred sweet potato and fresh cassava on the medium holes of a box grater into a large bowl. Working in small handfuls, squeeze the shredded roots as firmly as possible to remove moisture — fresh cassava and sweet potato hold significant water that will cause the palm sugar syrup to dilute and prevent caramelisation during frying. After squeezing, spread the shreds on a clean cloth for 5 minutes to air-dry further. The shreds should feel almost dry to the touch before the next step. Measure the squeezed weight — you should have approximately 350g combined after moisture removal.`,
            tip: `Fresh cassava contains natural cyanogenic glycosides that are harmless when the cassava is cooked but require thorough squeezing and rinsing before use. The squeezing step in this recipe serves double duty: it removes both the moisture that prevents caramelisation and the surface compounds that make raw cassava mildly bitter. If using tapioca starch as a substitute, skip this step and add the starch directly to the palm sugar mixture.`,
        },
        {
            title: `Make the palm sugar syrup`,
            description: `Grate or break palm sugar into a small saucepan with 2 tbsp warm water. Heat over low flame, stirring, until completely dissolved — do not boil, just warm enough to dissolve. The syrup should be the consistency of thick honey and smell of caramel with a faint smokiness. Add vanilla extract if using. Cool to room temperature before adding to the shredded roots — hot syrup partially cooks the cassava starch and makes the mixture too sticky to spread in the pan.`,
            tip: `Palm sugar quality varies significantly between brands available in Germany. The best result comes from block palm sugar (duong thot not or duong the), which has a complex caramel and slight floral note. Avoid liquid palm sugar in bottles, which is often diluted with cane sugar syrup and produces a flat sweetness without the characteristic depth. At Vietnamese grocers in Germany, look for the round brown cakes wrapped in plastic — Trà Vinh or An Giang origin is preferable.`,
        },
        {
            title: `Mix the batter`,
            description: `Combine squeezed-dry shredded sweet potato and cassava with cooled palm sugar syrup, both sesame seeds, salt, and tapioca starch if using. Mix thoroughly with your hands until every shred is coated with syrup and the sesame seeds are evenly distributed. The mixture should clump when pressed but not be wet — it should hold a shape when you pack a small handful, then slowly crumble apart when released. If it feels wet, squeeze one more time and discard the liquid.`,
        },
        {
            title: `Fry the wafers — the critical temperature window`,
            description: `Pour neutral oil to 1 cm depth in a wide, flat-bottomed pan. Heat over medium heat until the oil reaches 160-170C — test by dropping a single shred of sweet potato: it should sizzle gently and float to the surface within 3 seconds. If it sinks and sits without sizzling, the oil is too cool. If it browns within 5 seconds, too hot. Working in batches of 3-4, place a heaped tablespoon of the root mixture into the oil and immediately press flat with the back of a wet spoon into a round approximately 10-12 cm in diameter and 3-4mm thick. Press firmly to compact the shreds into contact with each other — this is what allows the palm sugar to bind them into a disc.`,
            tip: `The pressing step must happen within 10 seconds of the batter hitting the oil, before the palm sugar begins to set around the individual shreds. After 15 seconds the mixture is too rigid to reshape. The wet spoon back is critical — a dry spoon sticks to the caramelising sugar and tears the forming disc. Keep a small bowl of water beside the pan and wet the spoon back between each press.`,
        },
        {
            title: `Time the caramelisation`,
            description: `After pressing, do not touch the wafer for 2 minutes. The base is caramelising and setting — any movement will break the disc before it has structural integrity. At 2 minutes, the edges will have turned golden and the surface will look matte and set. Gently slide a thin spatula under the edge to check: the base should be amber-golden and the disc should slide freely. If it sticks, wait 30 more seconds. Flip carefully with a wide spatula — the second side takes only 60-90 seconds. If adding grated coconut, scatter it on the cooked first side immediately after flipping and press gently so it adheres before the syrup sets.`,
            tip: `The correct colour for bánh r? is deep amber on the base and pale gold on the top — not uniformly brown on both sides. Flipping too early produces a pale, fragile wafer with no caramel structure. Flipping too late (beyond amber to dark brown) produces a bitter wafer where the palm sugar has carbonised. The visual cue is the edge colour: pale gold edge means the base is amber. Dark brown edge means the base is beginning to burn.`,
        },
        {
            title: `Drain and cool to crispness`,
            description: `Remove finished wafers with a wide spatula and drain on a wire rack — not paper towels, which trap steam and soften the base. The wafer will still be slightly pliable when hot. Do not attempt to eat or stack immediately. As the wafer cools over 3-5 minutes, the caramelised palm sugar sets hard and the disc becomes brittle and self-supporting. The final texture should shatter cleanly when broken — not bend, not crumble gradually, but snap with a clean fracture that reveals the individual shreds of sweet potato and cassava bound in amber sugar.`,
        },
        {
            title: `Serve and store`,
            description: `Bánh r? is served at room temperature, stacked in a tower on a plate or wrapped individually in paper. In Phan Thi?t, vendors wrap each disc in a small square of newspaper, which absorbs any residual oil and keeps the wafer isolated from humidity. Eat within 2 hours of frying — beyond that, atmospheric moisture begins to soften the caramelised sugar and the wafer loses its snap. Do not refrigerate — cold and condensation destroy the texture within minutes. If making in advance, store in an airtight tin at room temperature for up to 24 hours with a sheet of silica gel if available.`,
            tip: `The newspaper wrapping method used by Phan Thi?t vendors is functional, not nostalgic. The slight ink-and-paper smell that transfers to the wafer surface is considered part of the street food experience by locals. At home, greaseproof paper achieves the same oil-absorption without the ink. The wrapping is only for transport — bánh r? eaten unwrapped, directly from the pan, is always better than the wrapped version.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
