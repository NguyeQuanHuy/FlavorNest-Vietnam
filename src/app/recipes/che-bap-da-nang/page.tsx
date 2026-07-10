'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-bap-da-nang',
    title: `Đà Nẵng Sweet Corn Pudding`,
    subtitle: `Chè Bắp Đà Nẵng — Young corn kernels simmered in coconut milk with glutinous rice — the central coast's most beloved summer dessert, eaten warm or cold at the riverside.`,
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 6,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Chè bắp is the sweet corn dessert soup that Đà Nẵng and Hội An share as their most beloved summer dessert — a preparation of extreme simplicity that depends entirely on the quality of its primary ingredient: bắp non (young sweet corn, harvested before full starch maturity) whose kernels are still tender, milky, and naturally sweet rather than the starchy, tough kernels of mature corn. The young corn is stripped from the cob, simmered gently in water with a small amount of glutinous rice until the glutinous rice has dissolved and thickened the surrounding liquid, then finished with coconut milk and sugar to produce a dessert that is simultaneously soup-like and pudding-like — thin enough to drink from a bowl but thick enough to have body and presence on the tongue.\n\nThe specific corn used in chè bắp Đà Nẵng is the nếp bắp variety (glutinous corn, also called waxy corn) — a variety of Zea mays whose endosperm contains almost entirely amylopectin (the branched starch fraction) rather than the usual 75:25 amylopectin:amylose ratio of standard sweet corn. This high amylopectin content produces kernels that are stickier, chewier, and have a more glutinous mouthfeel when cooked — similar to the difference between glutinous rice and regular rice. When nếp bắp is simmered, its kernels release amylopectin into the surrounding liquid, thickening the chè naturally without the need for additional starch — the corn is simultaneously the main ingredient and the thickening agent.\n\nThe Đà Nẵng and Hội An versions of chè bắp are considered the gold standard among Vietnamese food writers — the young corn available from the farms of the Quảng Nam coastal plain in the summer months, combined with the specific coconut milk of the central Vietnamese preparation (less sweet than the southern version, with the salt playing a more prominent role in the flavour balance), produces a dessert of quiet, specific perfection that the same preparation made with mature corn or canned coconut milk cannot approach.`,
    ingredientSections: [
        {
            title: `Sweet corn`,
            items: [
                { amount: 4, name: `ears young sweet corn (bap non)`, note: `nếp bắp (glutinous/waxy corn) preferred; substitute: the youngest, freshest sweet corn available — supermarket corn in Germany works if purchased the same day` },
                { amount: 1, unit: 'L', name: `water` },
            ],
        },
        {
            title: `Glutinous rice`,
            items: [
                { amount: 50, unit: 'g', name: `glutinous rice (gao nep)`, note: `soaked 30 minutes — provides additional body and chewiness` },
            ],
        },
        {
            title: `Coconut milk finish`,
            items: [
                { amount: 300, unit: 'ml', name: `full-fat coconut milk (nuoc cot dua)` },
                { amount: 0.5, unit: 'tsp', name: `salt`, note: `the central Vietnamese balance — more salt than the southern version` },
                { amount: 80, unit: 'g', name: `sugar`, note: `adjust to the corn's natural sweetness` },
                { amount: 2, name: `pandan leaves (la dua)`, note: `tied in a knot — fragrance` },
            ],
        },
        {
            title: `Cold coconut cream topping`,
            items: [
                { amount: 150, unit: 'ml', name: `coconut cream (kem dua)`, note: `thick, unsweetened — kept cold` },
                { amount: 0.25, unit: 'tsp', name: `salt`, note: `stirred into the cold cream` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 2, unit: 'tbsp', name: `toasted sesame seeds (me rang)` },
                { amount: 6, name: `ice cubes`, note: `for the cold version` },
            ],
        },
    ],
    steps: [
        {
            title: `Select and prepare the corn — freshness determines everything`,
            description: `Young corn (bắp non) for chè bắp should be harvested or purchased at the milk stage — when the kernels are fully formed but still contain the milky, starchy liquid that gives them their specific texture and sweetness. Test: press a fingernail into a kernel — a drop of milky liquid should emerge. If no liquid emerges, the corn is too mature. In Germany, corn sold as "Mais" at supermarkets in summer (July-September) is usually mature sweet corn — purchase the youngest, smallest ears available and use them the same day of purchase. Strip kernels from the cobs using a sharp knife — cut downward along the cob to remove the kernels as close to the base as possible. Reserve the stripped cobs — they will be simmered separately to extract the corn's flavour compounds into the cooking water.`,
            tip: `The stripped corn cobs contain more flavour compounds per gram than the kernels themselves — the cob's fibrous pith is rich in the same volatile aromatics (primarily 2-acetyl pyrroline and dimethyl sulphide compounds) that give fresh corn its characteristic sweet-grain aroma. Simmering the cobs in the cooking water before adding the kernels extracts these compounds into the liquid, producing a corn-flavoured cooking water that intensifies the finished chè beyond what cooking the kernels in plain water produces. This cob-simmering step is the technique most consistently omitted in home chè bắp recipes and the one that most clearly distinguishes restaurant-quality from home-quality results.`,
        },
        {
            title: `Simmer the cobs first`,
            description: `Place the stripped cobs in a pot with 1L cold water. Bring to a boil. Simmer uncovered 20 minutes — the water will turn a faint golden colour and smell intensely of fresh corn. Remove and discard the cobs. Add the soaked glutinous rice to the corn-flavoured water. Simmer 15 minutes, stirring occasionally, until the glutinous rice has partially dissolved and the liquid has thickened slightly from the released amylopectin. The liquid should be opaque-white and slightly viscous — not watery.`,
        },
        {
            title: `Add the corn kernels`,
            description: `Add the fresh corn kernels to the simmering glutinous rice liquid. Stir to distribute. Simmer uncovered 10-12 minutes until the kernels are tender throughout but still slightly firm — they should yield when pressed between the fingers but not be mushy. The high amylopectin content of nếp bắp kernels (or the younger kernels of fresh sweet corn) will continue thickening the liquid as they cook, releasing their starch into the surrounding liquid. The chè will progress from thin to a porridge-like consistency during this phase — if it thickens too much, add 100ml water.`,
            tip: `The correct texture of chè bắp at the end of kernel cooking is the key calibration point of the recipe. The liquid should be thick enough to coat a spoon but thin enough to flow when the spoon is tilted — approximately the consistency of a light cream soup. If too thick (the spoon stands up): add hot water in 50ml increments. If too thin (the spoon drains immediately): simmer uncovered 5 more minutes. The glutinous rice starch and the corn's amylopectin together provide the natural thickening — no additional starch is needed if the corn is sufficiently young and the glutinous rice is correctly soaked.`,
        },
        {
            title: `Add coconut milk and season`,
            description: `Add pandan leaves and full-fat coconut milk to the simmering corn and rice mixture. Stir gently. Add sugar and salt. The salt is the central Vietnamese balance point — more prominent than in the southern chè tradition, where sweetness dominates. In the central version, the salt amplifies the corn's natural sweetness and the coconut milk's richness simultaneously, producing a dessert that tastes more complex and less one-dimensionally sweet than a comparable southern preparation. Taste: the chè should be sweet, fragrant with pandan and coconut, with the corn's sweetness clearly present, and have a subtle salt note that you notice only when it is absent. Simmer 5 more minutes. Remove pandan leaves.`,
        },
        {
            title: `Prepare the cold coconut cream`,
            description: `Stir salt into cold coconut cream until dissolved. Keep refrigerated until serving. The salted cold coconut cream poured over the warm chè at serving creates the temperature contrast that is the eating experience of chè bắp — warm, sweet, fragrant corn pudding beneath cool, slightly salty coconut cream. This hot-cold contrast is present in many Vietnamese chè preparations but reaches its most pleasurable expression in chè bắp, where the temperatures are not extreme (the chè is warm rather than hot, the cream is cool rather than icy) and the transition between them is gradual rather than sharp.`,
        },
        {
            title: `Serve warm or cold — two different experiences`,
            description: `Warm version: ladle the just-made chè bắp into bowls. Spoon cold salted coconut cream over the surface. Scatter toasted sesame seeds. Serve immediately — the temperature contrast is at its peak in the first 5 minutes. Cold version (the Hội An riverside stall tradition): cool the chè completely, refrigerate for minimum 2 hours until fully chilled. The chilled chè thickens further as the amylopectin retrogrades — it will be significantly thicker cold than warm. Ladle into bowls with ice cubes, pour cold coconut cream over, scatter sesame. In Hội An and Đà Nẵng, chè bắp is eaten at riverside stalls on hot afternoons — the cold version eaten slowly in the shade, the thick, sweet corn pudding and the coconut cream melting together around the ice cubes, the sesame providing the only textural contrast in an otherwise uniformly soft, yielding dessert. It is a dessert designed for heat, for stillness, and for the specific pleasure of something cold and sweet on a central Vietnamese summer afternoon.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}