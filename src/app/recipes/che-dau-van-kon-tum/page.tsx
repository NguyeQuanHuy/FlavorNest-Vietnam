'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-dau-van-kon-tum',
    title: `Kon Tum Hyacinth Bean Sweet Soup`,
    subtitle: `Chè Đậu Ván Kon Tum — Flat white hyacinth beans simmered in coconut milk with pandan and palm sugar — Kon Tum's night market closing dessert.`,
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 6,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Chè đậu ván is the evening dessert that closes the Kon Tum night market — the sweet soup sold at the last stalls open as the market empties, eaten by vendors counting their earnings and by the last few customers who linger after the main meal. Đậu ván (hyacinth beans, Lablab purpureus — the flat white bean also called field bean or bonavist bean) is a legume grown throughout the highland villages of Kon Tum, Gia Lai, and Đắk Lắk, thriving in the well-drained volcanic soil of the Central Highlands at elevations where standard Vietnamese vegetables struggle.\n\nThe bean is flat, kidney-shaped, and pure white when dried — unlike the purple-podded varieties grown in lower elevations, the highland đậu ván is consistently white-seeded, producing a chè that is pale and clean in appearance. When simmered correctly, the beans soften without dissolving, retaining a firm, slightly grainy texture at the centre that provides a satisfying bite against the silky coconut milk broth. The skin of the bean, which in lowland versions sometimes becomes papery and unpleasant, dissolves almost completely during the highland preparation's longer simmering time, leaving each bean smooth and intact.\n\nThe preparation is the same three-element structure found in Bến Tre's chè thưng and Quảng Ngãi's chè bắp: warm beans in coconut broth, cold salted coconut cream poured over at serving, pandan as the aromatic bridge. But the đậu ván's flavour — slightly earthy, faintly sweet, with a mineral quality from the highland soil — makes this a more grounded, less overtly sweet dessert than its coastal equivalents. It is the correct ending to a Kon Tum meal heavy with smoked meat, grilled fish, and highland herbs.`,
    ingredientSections: [
        {
            title: `Beans`,
            items: [
                { amount: 250, unit: 'g', name: `dried white hyacinth beans (dau van trang)`, note: `flat, kidney-shaped white beans — soaked overnight 8 hours minimum; available at Vietnamese and Indian grocery stores in Germany as "field bean" or "Lablab"` },
            ],
        },
        {
            title: `Coconut broth`,
            items: [
                { amount: 400, unit: 'ml', name: `full-fat coconut milk (nuoc cot dua)` },
                { amount: 500, unit: 'ml', name: `water` },
                { amount: 3, name: `pandan leaves (la dua)`, note: `tied in a knot` },
                { amount: 80, unit: 'g', name: `palm sugar (duong thot not)`, note: `grated — the highland standard` },
                { amount: 0.25, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Cold coconut cream finish`,
            items: [
                { amount: 150, unit: 'ml', name: `coconut cream (kem dua)`, note: `thick, unsweetened — kept cold` },
                { amount: 0.25, unit: 'tsp', name: `salt`, note: `stirred into cold cream — amplifies coconut` },
            ],
        },
        {
            title: `Optional garnish`,
            items: [
                { amount: 1, unit: 'tbsp', name: `toasted white sesame seeds` },
                { amount: 6, name: `ice cubes`, note: `for cold version` },
            ],
        },
    ],
    steps: [
        {
            title: `Soak and pre-cook the beans`,
            description: `Soak dried hyacinth beans overnight in cold water — minimum 8 hours, 12 for older dried beans. Drain and rinse. Important: hyacinth beans contain phytohaemagglutinin (the same lectin as kidney beans) that causes nausea if the beans are inadequately cooked. Boil in fresh unsalted water at a full rolling boil for 15 minutes — this destroys the lectins. Skim any foam. Drain and discard the boiling water. The beans are now safe and pre-softened for the final coconut simmering.`,
            tip: `The 15-minute rolling boil for lectin destruction is the food safety step most home chè recipes skip. Raw or inadequately cooked hyacinth beans cause digestive upset within 1-3 hours of eating — the same reaction as undercooked kidney beans. The full rolling boil (not a simmer) is required: lectin proteins are heat-labile but require temperatures above 95°C for at least 10 minutes to fully denature. A gentle simmer at 80-85°C is insufficient. After the safety boil, the beans can be finished at any temperature in the coconut broth.`,
        },
        {
            title: `Simmer in coconut broth`,
            description: `Combine coconut milk, water, and pandan leaves in a wide pot. Bring to a gentle simmer over medium-low heat. Add the pre-boiled beans. Simmer uncovered for 40-50 minutes, stirring gently every 10 minutes, until the beans are completely tender — a bean pressed between two fingers should flatten without resistance, and the skin should feel smooth rather than papery. Add palm sugar and salt in the final 10 minutes — adding sugar earlier slows bean softening. Stir until dissolved. Remove pandan leaves.`,
            tip: `The beans must be fully tender before the sugar is added — this is the rule that most chè đậu ván recipes correctly follow but rarely explain. Sugar raises the osmotic pressure of the cooking liquid and slows water absorption into the bean cells, effectively stopping the softening process. A bean that is 80% soft when sugar is added will be 80% soft when served. Always taste for tenderness before adding sweetener and return to simmering if needed.`,
        },
        {
            title: `Prepare the cold coconut cream`,
            description: `Stir salt into cold coconut cream. Keep refrigerated. The salted coconut cream served cold over warm chè đậu ván creates the temperature and flavour contrast that is the Mekong-highland dessert tradition: warm-sweet below, cold-rich above, salt suppressing bitterness and amplifying coconut fragrance. The same technique used in chè bắp Quảng Ngãi, chè thưng Bến Tre — it is the structural signature of southern and highland Vietnamese sweet soup service.`,
        },
        {
            title: `Taste and calibrate`,
            description: `Taste the finished chè before serving. The flavour balance for chè đậu ván is different from coastal chè: less sweet (the beans' earthy flavour does not require as much sweetening as the neutral mung bean or corn of lowland versions), more coconut-forward, and with the pandan fragrance as the primary aromatic. If the broth tastes flat, add 1 tbsp more palm sugar. If too sweet, add a squeeze of lime juice — the acid brightens and balances without changing the character. The bean texture should be firm-tender with no raw crunch remaining.`,
            tip: `The earthy, mineral flavour of highland đậu ván is what distinguishes this chè from any lowland bean equivalent. This earthiness comes from the volcanic basalt soil of the Kon Tum highland — the same geological source that gives the Ngọc Linh ginseng and the highland coffee their distinctive terroir. In Germany, hyacinth beans grown in standard soil will produce a cleaner, blander bean — increase the palm sugar slightly and add an extra pandan leaf to compensate for the reduced mineral depth.`,
        },
        {
            title: `Serve the Kon Tum night market way`,
            description: `Ladle warm chè into small bowls — generous with beans, generous with broth. Pour 2-3 tablespoons of cold salted coconut cream directly over the surface. Scatter toasted sesame seeds. Serve immediately. In Kon Tum's night market, chè đậu ván is eaten standing at the stall counter, small spoon in hand, the bowl warming both palms in the cool highland evening air. The vendor ladles from a wide clay pot that has been simmering since 4pm, and the cream is kept in a small bowl of ice water beside the pot. Eat slowly — this is not rushed food. The gradual mixing of cold cream into warm bean soup as you eat is the rhythm the dish is designed around.`,
            tip: `Chè đậu ván is the closing note of a full Kon Tum food day that might have included cơm lam Ba Na at breakfast, gỏi lá at lunch, bò một nắng at dinner, and bánh ướt lòng gà at the morning market. Against this backdrop of intensely flavoured, often smoky and spiced food, the chè's mild sweetness, gentle bean earthiness, and cool coconut cream is not a simple dessert — it is the palate's reset, the meal's completion, the day's full stop. In Kon Tum, you eat the chè last not because it is the least important but because it is the most considered: the flavour that you carry home.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}