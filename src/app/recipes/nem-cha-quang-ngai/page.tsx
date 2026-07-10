'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nem-cha-quang-ngai',
    title: `Quảng Ngãi Fermented Pork Roll`,
    subtitle: `Nem Chả Quảng Ngãi — Spiced fermented pork wrapped in young banana leaf, cured 3 days — distinct from Bình Định's nem by the banana leaf and a coarser pork texture.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '96 hrs',
    rating: 4.8,
    baseServings: 16,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Nem chả Quảng Ngãi sits in the same family as nem chua and tré Bình Định but occupies its own distinct position — a fermented pork roll that is neither as finely textured as nem chua nor as heavily spiced as tré, but something between: pork shoulder and pork skin mixed with toasted rice powder, garlic, and black pepper, wrapped in young banana leaf (lá chuối non) rather than the dried lá sung (fig leaf) of Bình Định, and cured at room temperature for 72 to 96 hours.\n\nThe young banana leaf wrapping is the most visible distinction between Quảng Ngãi nem and neighbouring versions. Young banana leaves — the innermost, palest green leaves of the banana plant, not yet unfurled — are softer and more pliable than mature leaves, and they impart a faint green, almost grassy fragrance to the outer layer of the pork mixture during curing. In Bình Định, lá sung provides tannin; in Quảng Ngãi, young banana leaf provides chlorophyll and a clean vegetal note that is more subtle and less assertive.\n\nThe pork texture is the second distinction: Quảng Ngãi nem chả uses a coarser mince than nem chua — the pork is chopped rather than pounded or processed, producing a mixture with visible meat fibres rather than a smooth paste. This coarser texture means the fermentation produces a slightly different lactic acid profile — the bacteria have more surface area to work on but also more anaerobic space within the coarser structure, producing a sourness that is clean and direct rather than the more complex sourness of finely pounded nem.`,
    ingredientSections: [
        {
            title: `Pork mixture`,
            items: [
                { amount: 400, unit: 'g', name: `pork shoulder (thit heo nac vai)`, note: `hand-chopped fine — not minced through a grinder; visible fibre structure essential` },
                { amount: 150, unit: 'g', name: `pork skin (bi heo)`, note: `boiled 15 min, fat scraped completely, cut into 3cm thin strips` },
                { amount: 2, unit: 'tbsp', name: `toasted rice powder (thinh gao)`, note: `dry-toasted until golden, ground coarse` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 6, name: `garlic cloves, minced to paste` },
                { amount: 2, name: `shallots, minced fine` },
            ],
        },
        {
            title: `Surface seasoning (pressed against meat)`,
            items: [
                { amount: 6, name: `garlic cloves, sliced thin` },
                { amount: 3, name: `fresh red chili, sliced thin` },
                { amount: 1, unit: 'tsp', name: `black pepper, whole` },
            ],
        },
        {
            title: `Wrapping — the Quảng Ngãi distinction`,
            items: [
                { amount: 32, name: `young banana leaves (la chuoi non)`, note: `the innermost pale green leaves — pliable, not fully opened; 2 per roll inner, 2 per roll outer` },
                { amount: 1, name: `roll kitchen twine` },
            ],
        },
        {
            title: `Dipping sauce`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `bunch perilla (tia to)` },
                { amount: 10, name: `sheets sesame rice cracker (banh trang me)` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Hand-chop the pork`,
            description: `Cut pork shoulder into small cubes, then chop with a heavy cleaver using a rocking motion until a coarse mince forms — pieces should be 3-4mm, with visible meat fibres. Do not use a meat grinder or food processor, which produces a paste rather than a chop. The coarser texture is what distinguishes Quảng Ngãi nem chả from nem chua. Keep the pork very cold throughout — refrigerate between chopping batches if it begins to warm. Warm fat smears during chopping and produces a greasy rather than clean-textured mixture.`,
            tip: `The hand-chopping technique requires a sharp, heavy cleaver and a solid wooden chopping board. Work in a single layer — pile the pork in a mound, chop across it once, gather back into a mound, rotate 90 degrees, chop again. Repeat 4-5 times until the desired coarseness. Professional nem chả makers in Quảng Ngãi chop by hand in this way even for large batches — it takes 15 minutes per 500g but the texture is non-replicable by machine.`,
        },
        {
            title: `Prepare the pork skin`,
            description: `Boil pork skin in unsalted water for 15 minutes. Remove immediately and scrape all fat from the inner surface with a spoon while hot — cold fat adheres firmly and is difficult to remove cleanly. Cut into strips 3cm long and 2mm wide. The strips should be thin enough to become translucent in the finished nem but retain some chew. Set aside at room temperature — do not refrigerate, which firms the skin and makes it resistant to the fermentation process.`,
        },
        {
            title: `Toast the rice powder`,
            description: `Place 3 tbsp raw white rice in a dry pan over medium heat. Stir constantly 8-10 minutes until golden and fragrant. Grind in a mortar to a coarse powder — some texture should remain. Cool completely before adding to the pork mixture. The toasted rice powder (thính) is the fermentation substrate in Quảng Ngãi nem chả, providing starch for the lactic acid bacteria to consume during curing. It also adds a faint nutty note to the finished nem that complements the pork skin's gelatinous texture.`,
        },
        {
            title: `Mix the pork`,
            description: `Combine hand-chopped pork, pork skin strips, toasted rice powder, fish sauce, sugar, salt, black pepper, minced garlic, and minced shallots in a bowl. Mix firmly with clean hands for 3-4 minutes — throwing the mixture against the bowl repeatedly to develop some cohesion. The mixture should be slightly tacky and hold its shape when pressed but remain clearly textured rather than smooth. Taste a small pinch: savoury, lightly sweet, peppery. The sourness develops only during fermentation. Refrigerate 20 minutes before shaping.`,
        },
        {
            title: `Wrap in young banana leaf`,
            description: `Wipe young banana leaves with a clean damp cloth. They should be pale green-white, soft, and pliable without tearing. For each nem: lay two young banana leaves flat, slightly overlapping. Place approximately 40g of pork mixture in the centre. Press 2-3 garlic slices, 2-3 chili slices, and 3-4 whole peppercorns directly against the surface of the meat. Fold the inner leaves snugly around the meat. Wrap two outer banana leaves around in the opposite direction for a double seal. Tie firmly with kitchen twine at each end and in the middle — completely airtight.`,
            tip: `Young banana leaves (lá chuối non) are the innermost leaves of the banana plant that have not yet unfurled. They are paler, softer, and more fragrant than mature banana leaves. In Germany, Vietnamese and Southeast Asian grocery stores occasionally stock fresh banana leaves — the young inner leaves are rolled tightly in the centre of the bunch. If only mature leaves are available, use two layers of mature leaf and add a small piece of fresh banana peel (the inner white surface facing the meat) to approximate the young leaf's chlorophyll contribution.`,
        },
        {
            title: `Ferment 72 to 96 hours`,
            description: `Place wrapped nem on a tray at room temperature — 24-28°C ideal. In a German kitchen in summer, 72 hours is sufficient. In winter at 18-20°C, allow 96 hours. Do not refrigerate during fermentation. After 48 hours the banana leaf will darken and the rolls will feel firmer. At 72 hours, unwrap one nem to check: the meat should be pale pink-grey (from deep red), smell of clean lactic sourness, and taste pleasantly tart with residual sweetness. Refrigerate immediately once sourness is achieved.`,
            tip: `The banana leaf darkens from pale green to olive-brown during fermentation — this colour change is the visible fermentation indicator. A nem whose leaf is still pale green at 48 hours is fermenting too slowly (environment too cool). A nem whose leaf has turned almost black at 48 hours is fermenting too fast (environment too warm) and risks over-souring. Olive-green at 48 hours is the correct pace.`,
        },
        {
            title: `Serve and eat`,
            description: `Remove from refrigerator 20 minutes before serving. Peel back banana leaves at the table — the young leaf releases a faint green fragrance as it is removed. The nem surface will show the imprinted garlic and chili pattern from the inner leaf contact. Eat whole in one or two bites, or wrap in perilla and rau răm with a piece of broken sesame cracker. Dip in nuoc cham. In Quảng Ngãi, nem chả is served alongside bánh tráng mè and raw vegetables as the opening plate of a meal or eaten with afternoon beer.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}