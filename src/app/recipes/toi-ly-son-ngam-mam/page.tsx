'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'toi-ly-son-ngam-mam',
    title: `Lý Sơn Garlic Pickled in Fish Sauce`,
    subtitle: `Tỏi Lý Sơn Ngâm Mắm — Volcanic island garlic cured whole in fish sauce, sugar, and rice vinegar until translucent, sweet, and intensely aromatic.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '336 hrs',
    rating: 4.9,
    baseServings: 8,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Tỏi Lý Sơn ngâm mắm is one of the most specific condiments in Vietnamese cuisine — a preparation that only works with one ingredient from one place. Lý Sơn garlic (tỏi Lý Sơn) is grown in the volcanic basalt soil of Lý Sơn island, Quảng Ngãi, where centuries of accumulated coral and basalt mineral deposits have created a growing medium unlike any other in Vietnam. The resulting bulbs are smaller than mainland garlic, with a characteristic purplish-white skin, and a flavour profile that combines intense sharpness with a pronounced sweetness at the finish — a sweetness so distinctive that it is the primary reason the garlic commands a price five to ten times higher than mainland varieties at Hà Nội and Hồ Chí Minh City markets.\n\nWhen this garlic is submerged whole in a pickling brine of fish sauce, rice vinegar, and sugar for 14 days, something remarkable happens: the allicin compounds that produce raw garlic's harsh bite are partially converted by the acetic acid environment into more complex sulphur compounds with a rounder, deeper flavour. The cloves turn from opaque white to a pale amber translucence. The texture moves from crisp and dense to slightly yielding — still firm, but with a give that raw garlic never has. The flavour becomes simultaneously more complex and more gentle: the sharpness is present but integrated, the sweetness amplified, and a new umami depth from the fish sauce has penetrated to the centre of each clove.\n\nThe finished pickled garlic is eaten as a condiment alongside rice porridge, grilled meats, and noodle dishes throughout Quảng Ngãi province, and is exported in small jars to Vietnamese communities in Japan, the United States, and increasingly Europe. It is the condiment that Lý Sơn islanders always carry when they travel — a jar of tỏi ngâm mắm is the edible equivalent of a passport stamp from the island.`,
    ingredientSections: [
        {
            title: `Garlic`,
            items: [
                { amount: 300, unit: 'g', name: `Lý Sơn garlic bulbs (toi Ly Son)`, note: `whole heads — separate into individual cloves but leave the papery skin on each clove; substitute: Korean or Spanish purple garlic, which is closest in size and intensity` },
                { amount: 1, unit: 'tbsp', name: `coarse salt`, note: `for blanching — briefly blanched cloves absorb brine faster` },
            ],
        },
        {
            title: `Pickling brine`,
            items: [
                { amount: 150, unit: 'ml', name: `fish sauce (nuoc mam 40N)`, note: `Phan Thiết or Phú Quốc — the brine base` },
                { amount: 100, unit: 'ml', name: `rice vinegar (giam gao)`, note: `unseasoned, 4-5% acidity` },
                { amount: 80, unit: 'g', name: `sugar`, note: `dissolved in the warm brine` },
                { amount: 100, unit: 'ml', name: `warm water`, note: `to dissolve sugar and dilute brine to correct salinity` },
                { amount: 2, name: `bird's eye chili, whole`, note: `optional — adds very mild background heat over 14 days` },
                { amount: 1, name: `small piece fresh ginger, sliced`, note: `optional — the Lý Sơn market addition` },
            ],
        },
        {
            title: `Equipment`,
            items: [
                { amount: 1, name: `500ml glass jar with tight-fitting lid`, note: `sterilised — boiled 10 min and dried completely` },
                { amount: 1, name: `small weight or zip-lock bag filled with brine`, note: `keeps garlic submerged below the brine surface` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions rice porridge (chao trang) or steamed rice` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the garlic cloves`,
            description: `Separate garlic heads into individual cloves. Leave the papery skin on each clove — the skin protects the clove during the early pickling phase and is removed by the eater before consuming. Trim the root end of each clove flat with a small knife — this creates an entry point for the brine to penetrate the clove faster. Bring a small pot of water to a boil with 1 tbsp coarse salt. Blanch the cloves for exactly 30 seconds — this softens the outermost cell layer and dramatically accelerates brine absorption without cooking the garlic. Drain immediately and spread on a clean cloth to dry completely. Do not rinse after blanching.`,
            tip: `The 30-second blanch is the Lý Sơn island technique that mainland Vietnamese recipes for pickled garlic consistently omit. Without it, whole garlic cloves with skin require 21-28 days to reach the same depth of brine penetration that blanched cloves achieve in 14 days. The blanch breaks the waxy surface layer of the clove's outer cells, creating micro-pathways for the brine. Do not over-blanch — 45 seconds produces a partially cooked clove that becomes mushy rather than yielding during pickling.`,
        },
        {
            title: `Make the pickling brine`,
            description: `Combine fish sauce, rice vinegar, sugar, and warm water in a small saucepan. Heat over low flame, stirring until sugar is completely dissolved. Do not boil — boiling drives off the volatile acids in the rice vinegar that are responsible for the pickling action. Remove from heat and cool to room temperature before using — hot brine poured over garlic partially cooks the cloves and produces a soft texture rather than the firm-yielding result of cold brine pickling. Taste the cooled brine: it should be distinctly salty-sweet with a clear vinegar sharpness and the deep umami of the fish sauce underneath.`,
            tip: `The fish sauce to rice vinegar ratio (150ml : 100ml) is the Lý Sơn standard — more fish sauce forward than standard Vietnamese pickled garlic, which typically uses a more acidic brine. The higher fish sauce proportion means the garlic absorbs more umami and develops deeper savouriness over the 14-day pickling period. A more acidic brine (more vinegar) produces brighter, sharper pickled garlic; the Lý Sơn ratio produces a rounder, more complex result.`,
        },
        {
            title: `Pack the jar`,
            description: `Place blanched dry garlic cloves in the sterilised glass jar, packing fairly tightly but without crushing. Add whole chili and ginger slice if using — nestle them between the cloves. Pour the cooled brine over the garlic until all cloves are fully submerged. Press a small weight or weighted zip-lock bag filled with extra brine on top to keep every clove below the brine surface — any clove exposed to air above the brine line will oxidise and become discoloured. Seal the jar tightly. Label with the date.`,
        },
        {
            title: `Pickle at room temperature — 14 days`,
            description: `Leave the sealed jar at room temperature (20-25°C) for the first 3 days — the initial fermentation phase. During this time, the blanched cloves begin absorbing brine rapidly and the sugar begins converting. After 3 days, move to the refrigerator for the remaining 11 days. The cool temperature slows the process and allows the flavours to develop more gradually, producing a more complex result than room-temperature pickling throughout. Do not open the jar during the 14-day period. After 14 days, the cloves should be pale amber in colour, slightly translucent, and smell intensely of the combined fish sauce, vinegar, and garlic.`,
            tip: `The 3-day room temperature / 11-day refrigerator method is the two-phase approach used by Lý Sơn's commercial producers. The warm initial phase activates the enzymatic conversion of allicin and encourages rapid brine absorption; the cold finishing phase builds flavour complexity without over-softening the cloves. All-room-temperature pickling produces softer cloves that lose structural integrity by day 14; all-refrigerator pickling produces firm cloves that are not fully penetrated by day 14.`,
        },
        {
            title: `Test and assess at day 14`,
            description: `Open the jar at day 14. Remove one clove and peel the skin — it should slide off easily. The clove should be pale amber to gold in colour throughout, slightly translucent when held up to light, and yield slightly when pressed between two fingers without being mushy. Taste: the raw garlic sharpness should be present but softened, the sweetness more prominent than in raw garlic, and the fish sauce umami perceptible throughout the clove — not just on the surface. If the centre of the clove still tastes raw and sharp, reseal and continue for 3-5 more days.`,
        },
        {
            title: `Storage and serving`,
            description: `Once ready, the pickled garlic keeps in the refrigerator in its brine for up to 3 months. The flavour continues to develop and mellow over this period — day 14 is the minimum, day 30 is the flavour peak, day 90 is the most mellow. The pickling brine itself becomes a complex condiment after the garlic is finished — use it as a dipping sauce base for grilled meats or as a salad dressing component. Serve pickled garlic alongside rice porridge, grilled pork, or noodle soups. In Lý Sơn households, a jar of tỏi ngâm mắm is always on the table — one or two cloves eaten with each bowl of plain rice as a side condiment. The cloves are eaten whole in one bite.`,
            tip: `The brine remaining after the garlic is eaten is more valuable than the brine of standard rice vinegar pickles because of the fish sauce umami it has absorbed from both the original brine and the garlic's own juices over months. Lý Sơn islanders use the spent brine as a seasoning sauce for stir-fries and as a dipping sauce for fresh vegetables. Never discard it — pour it into a separate small jar and refrigerate. It keeps for weeks and seasons food in a way that no single-ingredient sauce can replicate.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}