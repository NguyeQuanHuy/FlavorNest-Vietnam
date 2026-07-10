'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-xeo-nhan-dua',
    title: `Bến Tre Coconut-Filled Sizzling Pancake`,
    subtitle: `Bánh Xèo Nhân Dừa — Bến Tre's coconut-stuffed rice pancake with shrimp, served with tamarind fish sauce — the coconut land's sizzling specialty.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh xèo nhân dừa is Bến Tre's interpretation of the sizzling rice pancake found throughout southern and central Vietnam — and the element that makes it specific to the province is the filling: freshly grated coconut (dừa nạo) cooked with palm sugar and shrimp into a sweet-savoury mixture that is packed inside the crispy rice batter alongside fresh shrimp, bean sprouts, and mung bean. No other province in Vietnam uses coconut as a primary filling ingredient in bánh xèo — it is a Bến Tre innovation born from the province's overwhelming coconut abundance.\n\nThe batter follows the standard southern Vietnamese formula of rice flour, turmeric, and coconut milk — but in Bến Tre, the coconut milk ratio is higher than elsewhere, producing a pancake whose base is noticeably crispier and more fragrant than the versions made in Hồ Chí Minh City or the Mekong Delta provinces without dedicated coconut cultivation. The coconut fat in the batter accelerates browning, and the result is a pancake that is golden at the base and golden at the edges within 3 minutes of pouring — faster than any other regional version.\n\nThe dipping sauce is nước mắm me — fish sauce with tamarind, a combination specific to the Mekong Delta provinces where tamarind trees grow abundantly. The tamarind's sourness against the coconut filling's sweetness and the pancake's savoury batter produces the four-flavour balance (chua, ngọt, mặn, béo — sour, sweet, salty, rich) that defines the best Mekong Delta food.`,
    ingredientSections: [
        {
            title: `Coconut-enriched bánh xèo batter`,
            items: [
                { amount: 200, unit: 'g', name: `rice flour (bot gao te)` },
                { amount: 30, unit: 'g', name: `tapioca starch (bot nang)` },
                { amount: 250, unit: 'ml', name: `full-fat coconut milk (nuoc cot dua)`, note: `higher ratio than standard — the Bến Tre distinction` },
                { amount: 100, unit: 'ml', name: `cold sparkling water`, note: `carbonation creates lacy edge` },
                { amount: 1, unit: 'tsp', name: `ground turmeric` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 2, name: `spring onions, sliced thin`, note: `stirred into batter` },
            ],
        },
        {
            title: `Coconut filling (nhan dua — the Bến Tre distinction)`,
            items: [
                { amount: 150, unit: 'g', name: `freshly grated coconut (dua nao tuoi)`, note: `from a mature coconut — not desiccated; frozen grated coconut works` },
                { amount: 2, unit: 'tbsp', name: `palm sugar (duong thot not)`, note: `dissolved — sweetens the coconut slightly` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Pancake fillings`,
            items: [
                { amount: 300, unit: 'g', name: `fresh medium shrimp (tom)`, note: `peeled and deveined — added raw to each pancake` },
                { amount: 150, unit: 'g', name: `bean sprouts (gia do)`, note: `raw` },
                { amount: 80, unit: 'g', name: `cooked mung beans (dau xanh chin)`, note: `soaked and boiled until tender — the traditional Bến Tre bánh xèo addition` },
                { amount: 4, unit: 'tbsp', name: `neutral oil`, note: `minimum 1 tbsp per pancake` },
            ],
        },
        {
            title: `Nước mắm me dipping sauce (tamarind fish sauce)`,
            items: [
                { amount: 30, unit: 'g', name: `tamarind block (me chua)`, note: `dissolved in 80ml warm water, strained` },
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 1.5, unit: 'tbsp', name: `palm sugar` },
                { amount: 1, unit: 'tbsp', name: `warm water` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `Herb wrap plate`,
            items: [
                { amount: 1, name: `head butter lettuce` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 1, name: `bunch perilla (tia to)` },
                { amount: 1, name: `cucumber, sliced into batons` },
                { amount: 100, unit: 'g', name: `green banana, sliced thin`, note: `soaked in lime water` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the coconut filling`,
            description: `Heat neutral oil in a pan over medium heat. Add freshly grated coconut and stir constantly for 3-4 minutes until lightly golden and fragrant — the coconut should smell of toasted coconut rather than raw. Add dissolved palm sugar, fish sauce, and black pepper. Stir 2 more minutes until the coconut is evenly coated and slightly sticky. Remove from heat and cool completely. The coconut filling should be slightly sweet, savoury, and have a pleasant toasted coconut aroma. This filling is what makes bánh xèo Bến Tre immediately recognisable — the sweet coconut against the savoury batter is the dish's defining contrast.`,
            tip: `Freshly grated coconut (dừa nạo tươi) is critical — desiccated coconut from a packet produces a dry, powdery filling that has none of the moisture and fresh coconut flavour that the dish requires. Frozen grated coconut (available at Vietnamese and Asian grocery stores in Germany) is the correct substitute — thaw at room temperature, squeeze out a small amount of excess moisture before using. Do not use sweetened coconut flakes, which would make the filling cloying.`,
        },
        {
            title: `Make the nước mắm me`,
            description: `Break tamarind block into pieces, dissolve in 80ml warm water by pressing and kneading for 3-4 minutes. Strain through a fine sieve — discard solids. Combine tamarind liquid with fish sauce, palm sugar, and 1 tbsp warm water. Stir until sugar dissolves. Add minced garlic and sliced chili. Taste: the sauce should be sour-forward from the tamarind, then sweet from palm sugar, then savoury from fish sauce. The tamarind sourness is what makes this sauce different from the standard Vietnamese nuoc cham — it has more body, more complexity, and cuts through the coconut filling's richness more effectively than lime juice alone.`,
        },
        {
            title: `Make the batter`,
            description: `Whisk rice flour, tapioca starch, turmeric, salt, and sugar. Add coconut milk gradually, whisking smooth. Add cold sparkling water just before cooking — stir gently to preserve carbonation. Fold in sliced spring onions. Rest 15 minutes then add sparkling water. The batter should be thin, golden-yellow from turmeric, and smell of coconut. The high coconut milk ratio means this batter browns faster than standard bánh xèo batter — reduce heat slightly if the edges brown before the centre is set.`,
        },
        {
            title: `Cook each pancake — the coconut-filling method`,
            description: `Heat a 22-24cm non-stick or well-seasoned pan over high heat. Add 1 tbsp oil — it should shimmer immediately. Add 3-4 shrimp and cook 30 seconds on one side. Pour 80ml batter over and around the shrimp in a thin, even layer — it should sizzle dramatically on contact. Immediately scatter 2 tbsp coconut filling across one half of the pancake. Add a small handful of bean sprouts and a spoonful of cooked mung beans on the same half. Cover with a lid for 2 minutes.`,
            tip: `The coconut filling goes on one half only — the half that will be folded over at the end. If scattered across the entire pancake, the folding action presses the filling to the edges rather than concentrating it in the centre of each bite. The filling on one half, covered by the fold, produces a pancake where every bite has a layer of crispy batter, a layer of coconut filling, and another layer of crispy batter — the correct architecture.`,
        },
        {
            title: `Finish and fold`,
            description: `After 2 minutes covered, remove lid. The batter surface should be set and dry. Drizzle a small amount of additional oil around the edge of the pancake. Cook uncovered 90 more seconds until the base is deeply golden and audibly crispy. Fold the unfilled half over the coconut-filled half using a wide spatula. Slide onto a plate. The pancake should hold its folded shape — the crispy shell is structural.`,
        },
        {
            title: `Serve and eat`,
            description: `Serve immediately with the nước mắm me dipping sauce, herb plate, and sliced green banana. Tear pieces of the folded pancake directly by hand — the crispy shell will shatter. Wrap each piece in a lettuce leaf with rau răm, mint, perilla, and a sliver of green banana. Dip the entire wrap into the tamarind fish sauce and eat in one large bite. The flavour sequence: first the tamarind sourness and fish sauce salt, then the crispy coconut-milk batter, then the sweet toasted coconut filling, then the shrimp sweetness, then the herb freshness at the finish. Five distinct flavour moments in a single bite — the complete Bến Tre experience in one mouthful.`,
            tip: `The green banana is the textural and flavour reset between bites — its astringency clears the palate of the coconut filling's richness and the tamarind sauce's acid simultaneously, preparing for the next wrap. In Bến Tre, the banana slice is placed inside every wrap, never eaten separately. Without it, the richness of the coconut filling accumulates across bites and becomes heavy by the third wrap. With it, each bite tastes as fresh as the first.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}