'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-ga-hoi-an-da-nang',
    title: `Hội An Chicken Rice`,
    subtitle: `Cơm Gà Hội An — Free-range chicken poached in aromatics, served over turmeric-yellow rice cooked in chicken fat — central Vietnam's most beloved rice dish.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cơm gà Hội An is the chicken rice preparation that the ancient trading port of Hội An developed over centuries of Chinese merchant influence and central Vietnamese culinary evolution — a dish whose simplicity belies its technical precision and whose reputation has spread far beyond Quảng Nam province to become one of the most recognised dishes of central Vietnamese cooking. A whole free-range chicken is poached in an aromatic broth until just cooked through, then the chicken is pulled apart into rough pieces with the hands (never cut with a knife in the traditional preparation) while the poaching broth is used to cook the rice — absorbing the chicken's fat and collagen into the grains, which are seasoned with turmeric and rendered chicken fat, producing a rice that is simultaneously golden, slightly oily, and intensely flavoured.\n\nThe Hội An preparation differs from Singapore's Hainanese chicken rice (its most famous cousin) in several specific ways. The Hội An chicken is served warm rather than cold; the rice is cooked with turmeric (producing a golden-yellow colour absent from Hainanese preparations); the chicken is dressed with a specific combination of rau răm, fried shallots, and sesame rather than the plain spring onion-ginger oil of Hainanese preparations; and the accompanying sauce is the central Vietnamese mắm nêm rather than the Hainanese trio of chili sauce, ginger paste, and dark soy. These differences are not superficial variations but the accumulated adjustments of a preparation that crossed the South China Sea with the Fujian and Cantonese merchants and was remade by the central Vietnamese kitchen over generations.\n\nThe Đà Nẵng versions of cơm gà Hội An — available throughout the city in restaurants and market stalls — tend to be slightly more generously portioned than the Hội An originals, and often include a small bowl of the poaching broth alongside as a sipping soup, which is less common in Hội An where the broth is used entirely in the rice.`,
    ingredientSections: [
        {
            title: `Chicken`,
            items: [
                { amount: 1.3, unit: 'kg', name: `whole free-range chicken (ga ta)`, note: `gà ta essential — commercial broiler lacks the fat and flavour for this preparation` },
                { amount: 1, unit: 'tbsp', name: `rice wine (ruou gao)`, note: `cleaning rub` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `cleaning rub` },
            ],
        },
        {
            title: `Poaching broth`,
            items: [
                { amount: 2, unit: 'L', name: `cold water` },
                { amount: 4, name: `shallots, halved and charred` },
                { amount: 4, name: `slices fresh ginger, charred` },
                { amount: 2, name: `lemongrass stalks, bruised` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 20, unit: 'g', name: `rock sugar (duong phen)` },
            ],
        },
        {
            title: `Turmeric chicken fat rice`,
            items: [
                { amount: 400, unit: 'g', name: `jasmine rice (gao te)`, note: `rinsed until water runs clear` },
                { amount: 500, unit: 'ml', name: `reserved chicken poaching broth` },
                { amount: 3, unit: 'tbsp', name: `rendered chicken fat (mo ga)`, note: `skimmed from the poaching broth surface` },
                { amount: 1, unit: 'tsp', name: `ground turmeric`, note: `the Hội An golden colour` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Chicken dressing`,
            items: [
                { amount: 1, name: `large bunch rau ram (Vietnamese coriander)`, note: `the essential cơm gà herb — not substitutable` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 2, unit: 'tbsp', name: `toasted sesame seeds` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, unit: 'tbsp', name: `sesame oil` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `sugar` },
            ],
        },
        {
            title: `Mắm nêm dipping sauce`,
            items: [
                { amount: 4, unit: 'tbsp', name: `mam nem` },
                { amount: 3, unit: 'tbsp', name: `fresh pineapple juice` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `Green papaya salad (gỏi đu đủ — the Hội An accompaniment)`,
            items: [
                { amount: 300, unit: 'g', name: `green papaya (du du xanh)`, note: `peeled, julienned fine` },
                { amount: 2, unit: 'tbsp', name: `fish sauce` },
                { amount: 1.5, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 2, name: `bird's eye chili, minced` },
                { amount: 2, unit: 'tbsp', name: `roasted peanuts, crushed` },
                { amount: 1, name: `bunch rau ram` },
            ],
        },
    ],
    steps: [
        {
            title: `Poach the chicken — the Hội An gentle method`,
            description: `Rub the chicken with salt and rice wine. Rest 10 minutes. Rinse. Bring 2L water to a boil with charred shallots, charred ginger, and lemongrass. Add fish sauce, salt, and rock sugar. Lower the whole chicken into the boiling broth breast-side down. Return to a boil — skim foam 5 minutes. Reduce to the gentlest possible simmer: the surface should barely tremble, with occasional small bubbles rising. Simmer 30-35 minutes for a 1.3kg gà ta. Remove from broth and immediately submerge in ice water for 5 minutes. The cold shock stops the cooking and tightens the skin, producing the characteristic slightly taut, glistening skin of correctly made cơm gà.`,
            tip: `The ice water shock after poaching is the technique that produces the cơm gà Hội An skin texture — smooth, slightly firm, glistening — that distinguishes it from the dull, soft skin of a chicken that was simply lifted from the broth and left to cool at room temperature. The cold water causes rapid contraction of the gelatin-rich skin proteins, producing a taut, slightly translucent surface that reflects light. This taut skin is also more receptive to the sesame oil dressing applied later — the contracted surface absorbs the oil evenly rather than allowing it to pool in the loose folds of a relaxed skin.`,
        },
        {
            title: `Skim and render the chicken fat`,
            description: `After removing the chicken, allow the poaching broth to rest 10 minutes — the fat will rise to the surface. Skim the golden chicken fat carefully from the surface using a ladle — collect minimum 3-4 tablespoons. This rendered chicken fat is the primary flavouring agent for the rice and the element that most clearly distinguishes cơm gà from plain rice cooked in broth. The fat carries fat-soluble flavour compounds from the gà ta's diet and body composition — compounds that water-soluble broth cannot. Rice cooked in chicken fat has a richness and a specific poultry aroma that rice cooked in plain broth, however well-seasoned, cannot replicate.`,
        },
        {
            title: `Cook the turmeric chicken fat rice`,
            description: `Heat the rendered chicken fat in a wide pot over medium heat. Add minced shallots and garlic — sauté until golden in the chicken fat, 2-3 minutes. Add ground turmeric and stir 30 seconds — the turmeric blooms in the hot fat, developing a deeper colour and more complex flavour. Add rinsed jasmine rice and stir to coat every grain in the turmeric-chicken fat mixture — fry 2 minutes. Add 500ml of the reserved poaching broth and salt. Bring to a boil, reduce to the lowest simmer, cover tightly, and cook 15 minutes. Rest covered 10 minutes. Each grain should be separate, golden-yellow, slightly glistening from the chicken fat, and deeply fragrant.`,
            tip: `The frying of the rice in chicken fat before adding the broth is the technique borrowed from Hainanese chicken rice preparation that produces the specific texture of cơm gà rice. Raw rice fried briefly in fat before the cooking liquid is added undergoes partial gelatinisation of the outer starch layer — this creates a slight barrier that slows water absorption and produces individual, slightly firm grains rather than the soft, sticky grains of rice cooked without the fat-frying step. The resulting texture — separate grains that are yielding but not mushy, each coated in a microscopic film of chicken fat — is the textural signature of correctly made cơm gà rice.`,
        },
        {
            title: `Pull the chicken by hand`,
            description: `After the ice water cooling, remove the chicken and pat the skin dry. The traditional Hội An technique: pull the chicken apart by hand rather than cutting with a knife. Start by separating the legs at the hip joint, then the wings at the shoulder, then pull the breast meat off the bones in large pieces — the grain of the gà ta's firm flesh separates naturally along its muscle fibres when pulled rather than cut. The hand-pulled pieces are irregular, with natural fibre texture visible on the pulled surfaces — this textured surface absorbs the sesame oil dressing more completely than knife-cut smooth surfaces. Arrange on a plate.`,
        },
        {
            title: `Dress the chicken`,
            description: `Combine sesame oil, fish sauce, and sugar. Drizzle over the pulled chicken pieces. Scatter rau răm leaves generously over the chicken — enough that every piece has rau răm alongside. Add fried shallots, toasted sesame seeds, and coarse black pepper. The rau răm is not a garnish but an integral flavour element — its lemony-peppery character is specifically calibrated to complement the poached chicken's clean sweetness and the sesame oil's nuttiness. Cơm gà without rau răm is considered incomplete in Hội An.`,
        },
        {
            title: `Assemble and serve`,
            description: `Serve the golden turmeric rice in individual bowls or mounded on plates alongside the dressed pulled chicken. Add the green papaya salad. Serve mắm nêm in individual dipping bowls — dip each piece of chicken before eating. If serving the Đà Nẵng version: ladle a small bowl of the remaining poaching broth (seasoned with additional fish sauce and salt, with spring onion and pepper scattered over) alongside. In Hội An, cơm gà is eaten at lunch — the most important meal — at the market stalls that have been operating since before dawn, the chicken cooked fresh each morning and sold out by noon. The broth used to cook the rice is the broth that poached the chicken that sits on the plate — the entire preparation is a closed loop, every element feeding back into every other.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}