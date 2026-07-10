'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'xoi-tram-cao-bang',
    title: `Cao Bằng Black Olive Sticky Rice`,
    subtitle: `Xôi Trám — Glutinous rice steamed with wild black canarium olives — Cao Bằng's most seasonal dish, available only in autumn when the trám forest olives ripen.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Xôi trám is the autumn dish of the Tày highlands — a sticky rice preparation in which the glutinous rice is steamed together with trám đen (black canarium olives, Canarium tramdenum), a wild forest fruit that grows on tall trees throughout the limestone hills of Cao Bằng, Lạng Sơn, and Bắc Kạn. The trám olive is harvested in September and October when it ripens from green to deep purple-black, and its brief season means xôi trám is available for only 4-6 weeks per year — a dish whose rarity is inseparable from its meaning.\n\nCanarium tramdenum is not related to Mediterranean olives (Olea europaea) despite sharing the common name. It is a tropical resinous fruit tree in the Burseraceae family — the same family as frankincense and myrrh — producing oval fruits about 3-4cm long with a thin, astringent purple-black skin, a layer of oily, slightly bitter flesh, and a hard woody pit. When the flesh is cooked with glutinous rice, it releases a dark purple oil that stains the rice grains, producing the characteristic dark-speckled appearance of xôi trám. The flavour contribution is resinous, slightly bitter, and intensely aromatic in a way that is simultaneously of fruit and of forest — nothing else tastes like it.\n\nThe Tày and Nùng communities of Cao Bằng eat xôi trám in the morning during the autumn harvest season — the sticky rice provides sustained energy for the harvest work, and the trám's bitterness is considered invigorating in the cool autumn air. When the trám season ends, the dish disappears entirely from markets and tables until the following October. This absolute seasonality — no frozen trám, no preserved trám capable of replicating the fresh fruit's flavour in rice — makes xôi trám one of the most genuinely irreplaceable seasonal dishes in Vietnamese cooking.`,
    ingredientSections: [
        {
            title: `Main ingredients`,
            items: [
                { amount: 400, unit: 'g', name: `glutinous rice (gao nep)`, note: `soaked overnight 8 hours — washed until water runs clear` },
                { amount: 200, unit: 'g', name: `tram den (black canarium olives, Canarium tramdenum)`, note: `fresh, ripe — deep purple-black; pit removed by cracking gently with a knife handle; substitute: see tip below` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `tossed with the rice before steaming` },
            ],
        },
        {
            title: `Seasoning and fat`,
            items: [
                { amount: 2, unit: 'tbsp', name: `pork lard (mo lon) or neutral oil`, note: `tossed with rice after steaming — carries the trám oil through the grains` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `final seasoning after steaming` },
                { amount: 0.5, unit: 'tsp', name: `sugar`, note: `balances the trám bitterness` },
            ],
        },
        {
            title: `Toppings (traditional Tày accompaniments)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `toasted sesame seeds (me rang)` },
                { amount: 2, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 50, unit: 'g', name: `roasted peanuts, crushed` },
                { amount: 1, unit: 'tsp', name: `coarse salt`, note: `the Tày simple condiment — salt + sesame` },
            ],
        },
        {
            title: `Accompaniments`,
            items: [
                { amount: 200, unit: 'g', name: `pork floss (ruoc heo) or grilled pork (thit nuong)` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Understand the trám — and find a substitute`,
            description: `Canarium tramdenum grows only in the limestone highland forests of northeastern Vietnam and adjacent Guangxi — it is not exported fresh and is not available outside the region in its fresh form. Dried trám is occasionally available at Vietnamese specialty food suppliers and can produce a pale version of the dish with reduced colour and aroma. In Germany, the closest available fruit in flavour profile is a combination of dried black olives (not brined — oil-cured Moroccan-style olives) and a small amount of pine resin extract or mastic (Mastix, available at Greek and Middle Eastern grocery stores in Germany) to approximate the Burseraceae resinous note. This substitute produces a recognisable xôi trám at approximately 60% of the original's flavour complexity.`,
            tip: `The Burseraceae family connection between trám đen and frankincense/myrrh is not incidental to the flavour — the resinous, slightly camphor-adjacent aromatic quality of the trám fruit comes from the same terpenoid compounds (particularly α-pinene and limonene derivatives) that give frankincense its characteristic scent. A very small amount of food-grade mastic or pine resin extract in the substitute mixture adds this specific dimension. German pharmacies and health food stores (Reformhaus) stock mastic as a digestive supplement — use 0.25 tsp dissolved in 1 tbsp warm oil, mixed with the oil-cured olives.`,
        },
        {
            title: `Prepare the trám — remove pits carefully`,
            description: `Fresh trám are difficult to pit because the flesh clings tightly to the hard woody pit. Use a small, sharp knife: make two lengthwise cuts around the pit (as you would a mango or avocado) and prise the flesh away in two halves. Discard pits. The flesh is dark purple and slightly oily — it will stain hands and surfaces immediately. The raw flesh tastes astringent and quite bitter — this bitterness mellows considerably during steaming with the rice but remains as a pleasant background note. Do not soak or blanch the trám before use — the water would wash away the surface oils that colour the rice.`,
        },
        {
            title: `Combine rice and trám for steaming`,
            description: `Drain the overnight-soaked glutinous rice. Toss with 1 tsp salt. Add the pitted trám halves and toss gently to distribute throughout the rice — every handful of rice should have 2-3 trám pieces. The trám will begin releasing their purple-black oil immediately on contact with the wet rice grains, starting the colour staining before cooking. Transfer to a bamboo steamer lined with muslin or banana leaf. The trám pieces sit among the rice rather than being separated — they cook simultaneously, the trám's flesh softening and integrating into the rice while the oil spreads throughout.`,
        },
        {
            title: `Steam — 35 to 40 minutes`,
            description: `Steam over vigorously boiling water for 35-40 minutes. After 20 minutes, lift the steamer lid and quickly sprinkle 2 tbsp cold water over the rice surface to prevent the top layer from drying out — re-cover immediately. The rice is done when all grains are fully translucent, sticky, and the trám pieces have softened into the rice, releasing their oil and colouring the surrounding grains dark purple. The finished rice will be an irregular speckled dark purple-grey — not uniformly coloured, as some grains near the trám pieces will be very dark while others remain white-purple.`,
            tip: `The irregular colouring of xôi trám is the visual signature of authenticity — the purple staining radiates outward from each trám piece like a gradient, producing a speckled, non-uniform appearance. Uniformly coloured purple xôi trám would indicate that the trám was blended or juiced before adding to the rice — a shortcut that destroys the textural element of the trám pieces in the finished dish and produces a flat, uniform colour rather than the organic speckled pattern of the traditional preparation.`,
        },
        {
            title: `Season with lard and finish`,
            description: `Transfer the hot steamed rice to a wide bowl. Drizzle pork lard or neutral oil over the surface — toss gently with chopsticks or a spatula to distribute the fat through the rice without breaking the grains. The fat carries the residual trám oil through the entire rice mass, evening out the flavour distribution. Season with salt and a small amount of sugar — the sugar specifically targets the trám's bitterness, not to eliminate it but to make it more pleasant. Taste: the rice should be sticky and fragrant, with the trám's resinous-bitter note present throughout, slightly sweet from the sugar, and richly coated from the lard.`,
        },
        {
            title: `Serve the Tày autumn way`,
            description: `Pack the seasoned xôi trám into a small bowl and invert onto a plate — it should hold its shape briefly before relaxing into a mound. Scatter toasted sesame seeds, fried shallots, and crushed roasted peanuts over the surface. Serve with a small dish of coarse salt-sesame mix for dipping and pork floss or grilled pork alongside. In Cao Bằng, xôi trám is eaten in the morning of the harvest season — carried in banana leaf parcels to the fields where it is eaten cold at mid-morning, the sticky rice having firmed from its hot state to a dense, satisfying block. The cold version, where the trám's oil has fully set into the rice and the flavours have integrated overnight, is considered by Tày highland communities to be the superior eating experience — better than the hot version served at market stalls.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}