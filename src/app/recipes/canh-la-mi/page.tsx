'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-la-mi',
    title: `Bahnar Cassava Leaf Soup`,
    subtitle: `Canh Lá Mì — Kon Tum's Bahnar cassava leaf soup with dried shrimp and pork — the most misunderstood vegetable in the Central Highlands kitchen.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.8,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Canh lá mì is the soup that most directly reflects the Central Highlands' dependence on the cassava plant — a crop introduced to Vietnam by Portuguese traders in the seventeenth century that became the survival staple of the highland communities during famines, wars, and the lean months between harvests. The Bahnar, Jrai, and Xơ Đăng peoples of Kon Tum eat every part of the cassava plant: the root, the young shoots, and most importantly the young leaves (lá mì, also called lá sắn), which are cooked as a vegetable throughout the highlands.\n\nThe young leaves of cassava (Manihot esculenta) contain hydrogen cyanide precursors — specifically linamarin and lotaustralin — that are toxic when the leaves are consumed raw. This is the fact that makes most lowland Vietnamese reluctant to eat lá mì, and the fact that highland communities have navigated for centuries through two techniques: wilting the leaves before cooking to break down the cell walls and release the cyanogenic glycosides as volatile HCN gas, and cooking in open vessels that allow the gas to escape. Properly prepared lá mì is completely safe; the residual cyanide content after correct cooking is negligible.\n\nThe soup itself is simple: wilted young cassava leaves simmered with dried shrimp, a small amount of pork or pork bones, shallots, and fish sauce into a light, slightly bitter, mineral-tasting broth. The bitterness of the lá mì is not a flaw — it is the point. In Bahnar cooking, canh lá mì is a cooling food (đồ ăn mát) eaten specifically in the hot season to reduce body heat, and its pleasant bitterness is as valued as the bitterness of gỏi sầu đâu in An Giang or lẩu lá khổ qua rừng in the Mekong Delta.`,
    ingredientSections: [
        {
            title: `Cassava leaves`,
            items: [
                { amount: 300, unit: 'g', name: `young cassava leaves (la mi / la san non)`, note: `young tips only — the top 3-4 leaves of each shoot, pale green; older leaves are tougher and more bitter; available at Vietnamese grocers in Germany as frozen lá sắn` },
            ],
        },
        {
            title: `Soup base`,
            items: [
                { amount: 200, unit: 'g', name: `pork ribs or pork bones (suon/xuong heo)`, note: `blanched and rinsed` },
                { amount: 60, unit: 'g', name: `dried shrimp (tom kho)`, note: `soaked 15 min — the primary umami base` },
                { amount: 3, name: `shallots, halved` },
                { amount: 2, name: `garlic cloves, smashed` },
                { amount: 1, unit: 'L', name: `water` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 1, name: `bunch rau ram`, note: `the essential Bahnar accompaniment for lá mì` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice or cơm lam` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, name: `small bowl muối lá é`, note: `for dipping the pork ribs` },
            ],
        },
    ],
    steps: [
        {
            title: `Understand the safety preparation — non-negotiable`,
            description: `Young cassava leaves contain linamarin — a cyanogenic glycoside that releases hydrogen cyanide (HCN) when the leaf cells are damaged by chewing or cutting. The amount in young leaves is significantly lower than in mature leaves or the root cortex, but requires correct preparation. The two-step process used by highland communities for centuries: first, wilt the leaves to break down cell walls and allow HCN to begin volatilising; second, cook in an uncovered or partially covered pot that allows the gas to escape. Do not cook lá mì in a sealed pressure cooker — this traps the HCN gas. The final cooked product is safe: the residual cyanide after correct preparation is approximately 10-20 ppm, well below the 30 ppm safety threshold for food.`,
            tip: `This safety note is not alarmist — it is the knowledge that Bahnar and highland Vietnamese cooks apply automatically from childhood. The visual cue that preparation is correct: the wilted leaves should smell faintly of bitter almonds (the characteristic HCN odour) during wilting and early cooking; this smell should disappear completely by the time the soup is finished. If you smell bitter almonds in the finished soup, cook uncovered for an additional 5-10 minutes. Frozen lá sắn from Vietnamese grocers in Germany has been blanched before freezing — the blanching has already reduced the cyanide content significantly, making it safer and faster to prepare than fresh leaves.`,
        },
        {
            title: `Wilt the cassava leaves`,
            description: `Place young cassava leaves in a large bowl. Pour boiling water over them — enough to submerge. Leave for 3-4 minutes. The leaves will turn from bright green to deep olive-green and wilt completely. Drain and squeeze out the water — press firmly, almost as you would squeeze a wet cloth. The squeezed-out liquid contains dissolved linamarin and should be discarded. Rinse the squeezed leaves briefly under cold water. Squeeze again. The leaves are now safe to cook and have lost most of their raw bitterness, retaining a pleasant, mild bitter note. Roughly chop the wilted leaves.`,
        },
        {
            title: `Build the pork and shrimp broth`,
            description: `Blanch pork ribs in boiling water 5 minutes, drain and rinse. Heat neutral oil in a pot over medium heat. Sauté halved shallots cut-side down until golden. Add smashed garlic and soaked dried shrimp — stir 60 seconds. Add blanched pork ribs. Pour in 1 L cold water. Bring to a boil, skim foam for 5 minutes, reduce to a steady simmer. Cook 25 minutes until ribs are tender and the broth is flavoured with pork and dried shrimp. Season with fish sauce, salt, and sugar.`,
        },
        {
            title: `Add the wilted cassava leaves`,
            description: `Add roughly chopped wilted cassava leaves to the simmering broth. Cook uncovered — the open pot allows any remaining volatile compounds to escape. Simmer 15 minutes. The leaves will darken further and soften into the broth. The soup's colour will turn pale green-brown from the leaves. Taste the broth — it should be savoury from the dried shrimp and pork, faintly bitter from the leaves, and clean. The bitterness should be pleasant and mild — similar to cooked bitter greens, not harsh or metallic. If the bitterness seems sharp, simmer 5 more minutes uncovered.`,
            tip: `The dried shrimp is the essential umami backbone of canh lá mì — the pairing of bitter leaf with intense seafood umami is a combination found across the highland ethnic groups' cooking traditions. The shrimp's glutamate content suppresses bitter receptor sensitivity, making the lá mì's bitterness more pleasant and less assertive. This is the same principle as pairing bitter greens with anchovies in Italian cooking — the umami reduces perceived bitterness without masking the flavour.`,
        },
        {
            title: `Finish and serve`,
            description: `Ladle hot soup into bowls — include pork ribs, cassava leaves, and generous broth. Scatter spring onion and coarse black pepper over each bowl. Serve with rau răm alongside — the rau răm's lemony-peppery character is the herb counterpoint to the cassava leaves' earthy bitterness. Bring steamed rice or cơm lam alongside. In Bahnar households, canh lá mì is a daily soup eaten with rice — the pork ribs are removed from the soup and dipped in muối lá é, the broth is drunk from the bowl between bites, and the cassava leaves are eaten with rice. The soup is eaten hot in cool weather and warm in hot weather — the cooling property of the lá mì is considered most effective when eaten slightly below boiling temperature.`,
            tip: `Canh lá mì is considered medicinal throughout the Central Highlands — a cooling food for fever, a digestive aid after heavy eating, and a liver tonic in traditional highland medicine. Modern research has found that cassava leaves contain significant levels of protein (25-38% dry weight — higher than most vegetables), vitamin C, and anti-inflammatory compounds. The highland communities' instinct to eat lá mì as a health food is supported by the nutritional science, even if the traditional explanations are different from the biochemical ones.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}