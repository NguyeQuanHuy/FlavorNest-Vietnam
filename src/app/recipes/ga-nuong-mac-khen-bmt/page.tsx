'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-nuong-mac-khen-bmt',
    title: `Tây Bắc Mắc Khén Grilled Chicken`,
    subtitle: `Gà Nướng Mắc Khén — Free-range chicken marinated with Zanthoxylum rhetsa berries, hạt dổi, and lemongrass, grilled over charcoal — the highland spice combination found nowhere else on earth.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Gà nướng mắc khén is the grilled chicken of the Thái, H'Mông, and Mường communities of the Tây Bắc (Northwestern) highlands — a preparation defined entirely by its spice combination, which has no equivalent anywhere else in Vietnamese cooking or, arguably, in world cuisine. Mắc khén (Zanthoxylum rhetsa — the Indian prickly ash berry) provides a numbing-citrus sensation; hạt dổi (Michelia tonkinensis seeds) provides a resinous-camphor warmth; lemongrass provides brightness; and fresh ginger provides heat. Together, these four aromatics produce a marinade whose flavour profile sits at a specific intersection of numbing, warm, citrusy, resinous, and sharp that is entirely specific to the Tây Bắc highland kitchen.\n\nMắc khén belongs to the same genus as Sichuan pepper (Zanthoxylum bungeanum) and produces the same hydroxy-alpha-sanshool compound responsible for the characteristic tingling-numbing sensation (paresthesia) on the lips and tongue. The numbing effect is not heat in the capsaicin sense but a direct stimulation of tactile receptors — the TRPV1 and TRPA1 channels — that produces a fizzing, electric sensation distinct from any other spice experience. In the Tây Bắc, this sensation is valued not as a party trick but as a genuine flavour dimension that amplifies the perception of other spices in the same preparation.\n\nThe chicken used is gà đen (black-feathered free-range chicken) in the traditional preparation — a smaller, leaner highland breed with intensely flavoured dark flesh that withstands the aggressive spice marinade without being overwhelmed. At home, any free-range chicken works. The grilling is done slowly over moderate charcoal — not high-heat quick grilling but low-and-slow charcoal cooking that renders the chicken's fat gradually, produces deep colour without charring the spice marinade, and allows the mắc khén's volatile compounds to infuse the flesh rather than simply coating the surface.`,
    ingredientSections: [
        {
            title: `Chicken`,
            items: [
                { amount: 1.2, unit: 'kg', name: `whole free-range chicken (ga ta or ga den)`, note: `butterflied (backbone removed, flattened) — or cut into large pieces` },
                { amount: 1, unit: 'tbsp', name: `rice wine (ruou gao)`, note: `cleaning rub` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `cleaning rub` },
            ],
        },
        {
            title: `Tây Bắc spice marinade`,
            items: [
                { amount: 2, unit: 'tsp', name: `mac khen berries (Zanthoxylum rhetsa)`, note: `lightly toasted, ground coarse — the numbing-citrus element; substitute: Sichuan peppercorns + 0.5 tsp lime zest` },
                { amount: 1.5, unit: 'tsp', name: `hat doi seeds (Michelia tonkinensis)`, note: `lightly toasted, ground fine — the resinous-camphor element` },
                { amount: 3, name: `lemongrass stalks, inner white only, minced to paste` },
                { amount: 30, unit: 'g', name: `fresh ginger, minced fine` },
                { amount: 5, name: `garlic cloves, minced to paste` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tbsp', name: `soy sauce` },
                { amount: 1, unit: 'tbsp', name: `honey` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Mắc khén dipping salt`,
            items: [
                { amount: 1, unit: 'tsp', name: `mac khen berries, toasted and ground coarse` },
                { amount: 0.5, unit: 'tsp', name: `hat doi seeds, toasted and ground` },
                { amount: 2, unit: 'tsp', name: `coarse salt` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1.5, unit: 'tbsp', name: `lime juice` },
                { amount: 2, name: `bird's eye chili, minced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions sticky rice (xoi nep) or steamed white rice` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, name: `bunch fresh herbs (mint, perilla)` },
            ],
        },
    ],
    steps: [
        {
            title: `Toast and prepare the highland spices`,
            description: `Toast mắc khén berries in a dry pan over low heat for 90 seconds — they release a citrusy, slightly medicinal fragrance and darken slightly. Remove immediately. Toast hạt dổi seeds separately for 60 seconds over low heat — they burn very quickly and must be watched constantly. Cool both completely. Grind mắc khén coarsely in a mortar — some texture should remain. Grind hạt dổi finely. The two spices must be toasted and ground separately: their different oil compositions mean they volatilise at different rates, and combined toasting produces uneven results where one is perfectly toasted and the other is under or overdone.`,
            tip: `The hydroxy-alpha-sanshool in mắc khén that produces the numbing sensation is most concentrated in the outer pericarp (the berry skin) and degrades rapidly with heat — over-toasting destroys the numbing compounds and leaves only the citrus flavour. Low heat, short time, immediate removal is the correct approach. The numbing intensity of the finished dish is directly proportional to how carefully the mắc khén was toasted. A heavily toasted batch produces a chicken that is citrusy but lacks the characteristic electric-tingling that distinguishes genuine Tây Bắc gà nướng from imitations.`,
        },
        {
            title: `Make the marinade and apply`,
            description: `Combine ground mắc khén, ground hạt dổi, lemongrass paste, minced ginger, garlic paste, shallots, fish sauce, soy sauce, honey, sugar, salt, and oil. Mix thoroughly into a fragrant, slightly grainy paste. Butterfly the chicken by cutting along both sides of the backbone and removing it — press the chicken flat. Or cut into thighs, drumsticks, and breast sections. Rub the marinade over every surface — under the skin of the breast and thighs, into any cut surfaces, over the skin. The under-skin application is essential: the mắc khén's volatile compounds must reach the flesh directly to produce the characteristic numbing sensation when the chicken is eaten.`,
        },
        {
            title: `Marinate — minimum 2 hours, ideally overnight`,
            description: `Cover the marinated chicken and refrigerate for minimum 2 hours, ideally overnight. The honey in the marinade begins caramelising on the chicken surface during refrigeration, forming a thin, slightly sticky layer that will produce deep colour during grilling. The lemongrass's volatile oils penetrate the skin during the marination period. The fish sauce's enzymes begin a slight surface cure that firms the exterior and improves the skin's crisping capacity during grilling. These three processes require time — a 30-minute marinade produces a noticeably inferior result.`,
        },
        {
            title: `Set up the charcoal grill`,
            description: `Prepare charcoal with moderate heat — not maximum. Hold your hand 15cm above the grill: you should be able to keep it there for 4-5 seconds before pulling away (medium heat). High heat chars the honey-containing marinade before the chicken is cooked through; moderate heat allows the marinade to caramelise gradually, producing deep colour without burning. Push the coals to one side of the grill to create a two-zone fire — direct heat on one side, indirect on the other. The chicken will be started on direct heat for colour and finished on indirect heat to cook through without additional charring.`,
            tip: `The two-zone charcoal setup is the most important grilling technique for honey-marinated preparations. Honey's fructose content burns at a lower temperature than sucrose — honey marinades char on direct high heat before the protein beneath is cooked. The two-zone setup allows controlled browning: direct heat develops the colour quickly, then indirect heat completes the cooking at a temperature too low to burn the marinade further. This produces the deep mahogany surface that characterises well-made gà nướng mắc khén without the bitter charred notes of a marinaded chicken grilled entirely over direct high heat.`,
        },
        {
            title: `Grill — 35 to 45 minutes total`,
            description: `Place the butterflied chicken skin-side down on the direct-heat zone. Grill 8-10 minutes until skin is deep golden and beginning to char at the edges. Flip to direct heat for 5 more minutes on the flesh side. Move to indirect heat zone. Cover the grill and continue cooking 20-25 more minutes, turning once at halfway, until the thickest part of the thigh reaches 74°C internally. Baste with any remaining marinade during the indirect heat phase — it caramelises on the surface during the gentle heat. Rest 5-8 minutes before carving.`,
        },
        {
            title: `Make the mắc khén dipping salt and serve`,
            description: `Combine toasted ground mắc khén, ground hạt dổi, coarse salt, sugar, lime juice, and minced chili. Stir until salt and sugar dissolve. The dipping salt should be intensely aromatic, slightly numbing on the fingertip when touched, sour from the lime, and have the resinous depth of the hạt dổi beneath the mắc khén's citrus-tingle. Carve the rested chicken and arrange on a plate with rau răm, cucumber, and herb plate alongside. Serve with sticky rice — gà nướng mắc khén is always eaten with xôi nếp in Tây Bắc tradition. Each bite: chicken piece dipped in mắc khén salt, wrapped loosely in rau răm, eaten with sticky rice. The numbing-citrus of the mắc khén, the resinous warmth of the hạt dổi, the brightness of the lime, and the fat-smoke of the charcoal-grilled chicken arriving simultaneously is the Tây Bắc highland eating experience.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}