'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-ba-ba-can-tho',
    title: `Cần Thơ Sweet Potato and Cassava Coconut Soup`,
    subtitle: `Chè Bà Ba Cần Thơ — The Mekong Delta's most beloved sweet soup: sweet potato, cassava, taro, and tapioca pearls in coconut milk — eaten warm at the riverside night market.`,
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 6,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Chè bà ba is the sweet soup that the Mekong Delta claims as its most representative dessert — not because it is the most elaborate or the most technically demanding, but because it contains within a single bowl the Delta's three most essential starchy crops: khoai lang (sweet potato), khoai mì (cassava), and khoai môn (taro), all grown in the alluvial soil of the river islands, all simmered together in a rich coconut milk broth sweetened with palm sugar and perfumed with pandan. The name bà ba refers to the three root vegetables — bà means three in an archaic southern Vietnamese usage, and ba means the old term for these root crops in Mekong Delta agricultural tradition.\n\nCần Thơ's chè bà ba is considered the standard against which all other versions are measured — the city's night markets along the Ninh Kiều riverfront serve it from wooden carts that have occupied the same spots for generations, the vendors ladling from wide clay pots into small ceramic bowls with practised efficiency as the Hậu Giang River reflects the lights of the city behind them. The experience of eating chè bà ba by the Ninh Kiều waterfront on a warm Mekong evening — the river visible, the city lit, the sweet coconut fragrance rising from the bowl — is one of the most complete sensory experiences in Vietnamese street food culture.\n\nWhat makes chè bà ba technically interesting is the cooking sequence: the three root vegetables have different starch compositions and cook at different rates, and they must be cooked separately or in precise sequence to ensure each arrives at the correct texture simultaneously in the finished bowl. The sweet potato softens fastest, the cassava takes longer and must be managed carefully to prevent it from dissolving completely, and the taro longest of all. The tapioca pearls are cooked last, in the coconut broth itself, absorbing the pandan-palm sugar flavour throughout their structure.`,
    ingredientSections: [
        {
            title: `The three root vegetables`,
            items: [
                { amount: 200, unit: 'g', name: `orange sweet potato (khoai lang)`, note: `peeled, cut into 2cm cubes` },
                { amount: 200, unit: 'g', name: `cassava (khoai mi / san)`, note: `peeled, cut into 2cm cubes — remove the fibrous central cord; fresh or frozen` },
                { amount: 150, unit: 'g', name: `taro (khoai mon)`, note: `peeled and cut into 2cm cubes — wear gloves; raw taro causes skin irritation` },
            ],
        },
        {
            title: `Tapioca and broth`,
            items: [
                { amount: 60, unit: 'g', name: `small tapioca pearls (bot bang nho)`, note: `soaked 15 min in cold water` },
                { amount: 500, unit: 'ml', name: `full-fat coconut milk (nuoc cot dua)` },
                { amount: 500, unit: 'ml', name: `water` },
                { amount: 3, name: `pandan leaves (la dua)`, note: `tied in a knot` },
                { amount: 80, unit: 'g', name: `palm sugar (duong thot not)`, note: `grated — the Cần Thơ essential` },
                { amount: 0.25, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Cold coconut cream finish`,
            items: [
                { amount: 150, unit: 'ml', name: `coconut cream (kem dua)`, note: `thick, unsweetened — kept cold` },
                { amount: 0.25, unit: 'tsp', name: `salt`, note: `stirred into cold cream` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 1, unit: 'tbsp', name: `toasted white sesame seeds (me rang)` },
                { amount: 6, name: `ice cubes`, note: `for the cold version` },
            ],
        },
    ],
    steps: [
        {
            title: `Understand cassava safety`,
            description: `Fresh cassava (khoai mì) contains cyanogenic glycosides — primarily linamarin — concentrated in the outer bark and the fibrous central cord. Always peel deeply, removing not just the outer brown skin but the pinkish-white layer beneath it. After peeling, cut each piece and remove the fibrous cord running through the centre by making a V-cut along the length of the piece. Boil in fresh water (discarded after boiling) at a full rolling boil for 10 minutes before adding to the sweet soup — this destroys the cyanide precursors. Frozen cassava from Vietnamese and tropical grocery stores in Germany has already been processed to reduce cyanide content and is safer and more convenient than fresh.`,
            tip: `The cassava safety note is the information gap most responsible for the hesitance of non-Southeast Asian cooks to work with this ingredient. At the quantities used in chè bà ba (200g per 6 portions) and with the standard boiling preparation, the cyanide content of the finished dessert is negligible — the same level of concern as eating bitter almonds or apple seeds. The practical rule: always peel deeply, always remove the central cord, always boil in water that is then discarded. After these steps, cassava is as safe as potato.`,
        },
        {
            title: `Cook each root vegetable separately`,
            description: `Cook the three vegetables in separate pots of lightly salted boiling water, removing each at its individual correct texture. Taro: 12-15 minutes until a chopstick inserts cleanly but the cube holds shape. Cassava: after the initial safety boil in discarded water, simmer in fresh water 8-10 minutes until just tender but not dissolving — cassava goes from undercooked to completely dissolved very quickly, so check every 2 minutes after 8 minutes. Sweet potato: 8-10 minutes until tender throughout. All three should be slightly firmer than the desired final texture — they continue cooking in the coconut broth.`,
            tip: `The separate cooking is the technique that most home chè bà ba recipes skip — they add all three vegetables to the coconut broth simultaneously and accept the uneven results. Sweet potato cooked in coconut milk becomes waterlogged and loses its orange colour; cassava cooked from raw in coconut milk dissolves into the broth and thickens it unpleasantly; taro releases too much starch if cooked from raw in the broth. Pre-cooking each vegetable to 80% doneness and then combining for the final simmer produces the correct individual textures and a clean, unclouded broth.`,
        },
        {
            title: `Soak the tapioca pearls`,
            description: `Soak small tapioca pearls in cold water 15 minutes — they will swell slightly and become gelatinous on the outside while remaining firm in the centre. Drain before use. Do not over-soak — pearls soaked longer than 30 minutes begin to dissolve partially and lose their discrete, round shape in the finished soup.`,
        },
        {
            title: `Make the coconut pandan broth`,
            description: `Combine coconut milk, water, and pandan leaves in a wide pot. Bring to a gentle simmer over medium-low heat — never a full boil, which separates the coconut milk into oil and water. Add grated palm sugar and salt, stirring until completely dissolved. Add soaked tapioca pearls. Simmer gently 8-10 minutes, stirring occasionally, until the pearls are fully translucent with no white centre remaining. The broth should be pale cream, fragrant with pandan, and sweet from the palm sugar.`,
        },
        {
            title: `Combine and finish`,
            description: `Add the pre-cooked taro, cassava, and sweet potato to the simmering coconut broth. Stir gently — the vegetables are fragile at this stage. Simmer together 5-8 minutes until each vegetable has absorbed the coconut-pandan broth and is completely tender throughout. Remove pandan leaves. Taste: adjust palm sugar if needed. The broth should be slightly thickened from the vegetables' residual starch, pale golden-cream in colour, and smell intensely of pandan and coconut. Each vegetable should be distinct in texture: sweet potato soft, cassava slightly firmer, taro silky.`,
            tip: `The three vegetables produce a natural flavour gradient in the finished chè bà ba: sweet potato contributes sweetness and orange colour to the surrounding broth; cassava contributes a clean, starchy neutrality that rounds the coconut richness; taro contributes a subtle earthiness and releases additional starch that gives the broth body. Together, their combined starch contributions produce the characteristic slightly thick, silky broth that distinguishes chè bà ba from a simple coconut milk soup. No added thickener is needed if all three vegetables are correctly included.`,
        },
        {
            title: `Prepare the cold coconut cream and serve`,
            description: `Stir salt into cold coconut cream until dissolved. Ladle warm chè bà ba into bowls — generous with all three vegetables and plenty of tapioca pearls. Pour 2-3 tablespoons of cold salted coconut cream directly over the surface. Scatter toasted sesame seeds. Serve immediately. At Cần Thơ's Ninh Kiều night market, chè bà ba is eaten sitting on low plastic stools at the riverside, the bowl cradled in both hands, the cold coconut cream stirred slowly into the warm chè as the river passes in the darkness. This is the correct setting. Approximate it as closely as possible.`,
        },
        {
            title: `The closing bowl of a Cần Thơ food day`,
            description: `Chè bà ba is the dessert that ends a Cần Thơ food day that might have begun with cháo cá lóc at 5:30am, continued with bánh xèo at lunch, lẩu cá kèo in the afternoon, bún mắm for dinner, and now closes at the Ninh Kiều waterfront with this bowl of warm coconut and root vegetables as the city quiets and the river reflects the lights. The three root crops in the bowl represent the Mekong Delta's agricultural heart — the same crops that feed the region, feed the people, and in this final sweet bowl, feed the memory of a place that is, for the Vietnamese diaspora in Germany and around the world, both entirely present in a bowl of chè and entirely unreachable except through cooking it themselves.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}