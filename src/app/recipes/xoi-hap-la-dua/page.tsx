'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'xoi-hap-la-dua',
    title: `Pandan Sticky Rice`,
    subtitle: `Xôi Hấp Lá Dứa — Glutinous rice steamed wrapped in fresh pandan leaves — naturally green, intensely fragrant, the most aromatic sticky rice in Vietnamese cooking.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 6,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Xôi hấp lá dứa is the sticky rice preparation that demonstrates how a single aromatic ingredient — lá dứa (Pandanus amaryllifolius, pandan leaf) — can transform the most neutral of bases into something entirely specific and memorable. Glutinous rice, soaked overnight and steamed in a bamboo steamer lined with fresh pandan leaves, absorbs the leaves' volatile aromatic compounds — primarily 2-acetyl-1-pyrroline (2-AP), the same compound responsible for the aroma of jasmine rice and fresh bread — and emerges from the steamer a soft green colour with a fragrance that is simultaneously of vanilla, fresh grass, and something uniquely tropical that has no Western equivalent.\n\nThe technique has two versions practiced throughout Vietnam and Southeast Asia: the first uses a pandan leaf extract (leaves blended with water and strained) to soak and colour the rice before steaming; the second — and the version this recipe documents — wraps the unsoaked rice directly in fresh pandan leaves and steams it in the leaf-wrapping, producing a more subtle colour (pale green rather than vivid) and a more integrated fragrance that comes from the steam permeating through the leaf structure rather than from surface staining. The wrapped version is the older, more traditional preparation; the extract version is the restaurant and commercial version optimised for visual impact.\n\nXôi hấp lá dứa is eaten throughout the day in Vietnam — as a breakfast with muối vừng (sesame salt), as an afternoon snack with coconut cream, as a side dish with savoury preparations, or as a dessert with palm sugar syrup. Its versatility comes from the pandan's neutral-aromatic character: like vanilla in Western cooking, pandan enhances rather than dominates, making the sticky rice it perfumes equally compatible with sweet and savoury accompaniments.`,
    ingredientSections: [
        {
            title: `Sticky rice`,
            items: [
                { amount: 400, unit: 'g', name: `glutinous rice (gao nep)`, note: `washed until water runs clear — soaked 6-8 hours or overnight in cold water` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `tossed with drained rice before steaming` },
            ],
        },
        {
            title: `Pandan wrapping and lining`,
            items: [
                { amount: 20, name: `fresh pandan leaves (la dua / Pandanus amaryllifolius)`, note: `long, fresh — washed and dried; available frozen at Vietnamese/Asian grocers in Germany; some garden centres sell the plant (Schraubenpalme)` },
            ],
        },
        {
            title: `Pandan extract (for deeper colour — optional)`,
            items: [
                { amount: 8, name: `fresh pandan leaves, roughly chopped` },
                { amount: 100, unit: 'ml', name: `cold water` },
                { amount: 0.25, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Muối vừng (sesame salt — the classic accompaniment)`,
            items: [
                { amount: 4, unit: 'tbsp', name: `white sesame seeds (me trang)`, note: `dry-toasted golden` },
                { amount: 1.5, unit: 'tsp', name: `coarse salt` },
                { amount: 1, unit: 'tsp', name: `sugar` },
            ],
        },
        {
            title: `Coconut cream finish (optional)`,
            items: [
                { amount: 150, unit: 'ml', name: `coconut cream (kem dua)`, note: `thick, unsweetened` },
                { amount: 0.25, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `sugar` },
            ],
        },
    ],
    steps: [
        {
            title: `The pandan chemistry — understanding 2-AP`,
            description: `Pandan's signature aroma comes primarily from 2-acetyl-1-pyrroline (2-AP) — a volatile aromatic compound that is formed during the enzymatic degradation of the amino acid proline in the pandan leaf. The same compound is responsible for the fragrance of jasmine rice, basmati rice, and freshly baked bread — it is one of the most recognisable and widely appreciated aromatic compounds in food. In pandan, the 2-AP concentration is approximately 10-20 times higher than in jasmine rice, which is why a single pandan leaf dropped into rice cooking produces such a clearly perceptible fragrance. The compound is heat-labile — it is released rapidly when the leaf is heated and will evaporate if the cooking vessel is left uncovered for extended periods.`,
            tip: `The covered steamer is essential for pandan xôi — the 2-AP released from the heated leaves must be trapped within the steam environment to infuse the rice rather than escaping into the kitchen. A steamer that loses steam through a poorly fitting lid also loses the aromatic compounds. The fragrance you smell in your kitchen while steaming is the aroma leaving the rice — minimize it by keeping the lid well-sealed and only lifting it at the final doneness check.`,
        },
        {
            title: `Prepare the pandan leaves`,
            description: `Wash fresh pandan leaves thoroughly and shake dry — water droplets on the leaves dilute the aromatic compounds. Tie each leaf into a loose knot — this increases the leaf surface area in contact with the rice and also releases some of the leaf's volatile compounds as the tissue is bent and partially broken. Line the bamboo steamer basket completely with pandan leaves — a layer on the bottom, leaves coming up the sides, and additional leaves to lay over the top of the rice once it is loaded. The rice should be completely enclosed by leaves on all surfaces.`,
            tip: `Frozen pandan leaves (available at Vietnamese grocers in Germany) produce approximately 80% of the aromatic intensity of fresh leaves — the freezing process partially ruptures the leaf cells, releasing some volatile compounds during freezing/thawing. To maximise the fragrance from frozen leaves: thaw completely, then bruise gently by rolling with a rolling pin before lining the steamer. The cell rupture from rolling releases additional 2-AP that would otherwise only be released during steaming.`,
        },
        {
            title: `Optional: make pandan extract for colour`,
            description: `For a more vivid green colour: blend 8 chopped pandan leaves with 100ml cold water for 2 minutes. Strain through cheesecloth, pressing firmly — the strained liquid will be vivid green. Add 0.25 tsp salt. Pour this extract over the soaked, drained rice and toss to coat. The chlorophyll and 2-AP in the extract will colour and pre-perfume the rice before steaming. Allow 20 minutes for the extract to absorb. The extract method produces a more vivid green; the leaf-wrapping-only method produces a subtler, more uniform pale green.`,
        },
        {
            title: `Steam — 30 to 35 minutes`,
            description: `Drain the soaked rice completely. Toss with 1 tsp salt. Load into the pandan-lined steamer basket. Cover the rice surface with additional pandan leaves — the rice should be completely surrounded. Cover with the steamer lid. Steam over vigorously boiling water for 30-35 minutes, lifting the lid once at 20 minutes to sprinkle 2 tbsp cold water over the surface — this prevents the top layer of rice from drying out. The rice is done when all grains are fully translucent, sticky, and fragrant with pandan. The leaves directly in contact with the rice will be slightly yellowed from the heat.`,
        },
        {
            title: `Make the muối vừng`,
            description: `Toast white sesame seeds in a dry pan over medium heat, stirring constantly, 3-4 minutes until evenly golden and fragrant. Cool completely. Combine with coarse salt and sugar in a mortar. Pound lightly — the seeds should be cracked but not fully ground. The muối vừng should have visible sesame pieces, taste simultaneously nutty-salty-sweet, and smell of toasted grain. This is the definitive accompaniment for xôi hấp lá dứa throughout Vietnam — the sesame's nuttiness and the salt's contrast amplify the pandan's fragrance rather than masking it.`,
        },
        {
            title: `Serve warm with accompaniments`,
            description: `Remove the top layer of pandan leaves. Scoop the fragrant green-tinged sticky rice into a wide bowl or onto a banana leaf-lined plate. The rice should be glossy, slightly sticky, and uniformly pale green. Serve with muối vừng in a small bowl for dipping. If serving with coconut cream: heat coconut cream gently with salt and sugar until the sugar dissolves — pour warm coconut cream over the rice just before serving. In Vietnam, xôi hấp lá dứa is sold at morning market stalls in small banana leaf-wrapped portions — each package unwrapped releasing a concentrated burst of pandan fragrance. The eating is immediate: the fragrance fades as the rice cools, and the first bite of a warm, freshly steamed portion is the peak experience.`,
            tip: `Xôi hấp lá dứa cools and hardens within 20-30 minutes of leaving the steamer — glutinous rice retrogrades (the starch recrystallises) rapidly at room temperature, producing a firm, less sticky texture. Reheat by re-steaming for 5 minutes — never microwave, which heats unevenly and produces hard and soft patches throughout the rice. Vietnamese vendors keep xôi warm in insulated wooden boxes lined with banana leaf throughout the morning service, replenishing with freshly steamed portions as needed.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}