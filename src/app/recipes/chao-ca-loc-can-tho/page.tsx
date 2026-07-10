'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-ca-loc-can-tho',
    title: `Cần Thơ Snakehead Fish Congee`,
    subtitle: `Cháo Cá Lóc Cần Thơ — Freshwater snakehead fish congee with ginger, rau ôm, and crispy shallots — the Mekong Delta's most comforting breakfast bowl.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cháo cá lóc Cần Thơ is the morning bowl that the Mekong Delta wakes up to — a silky, slow-cooked rice congee in which whole pieces of fresh snakehead fish (cá lóc, Channa striata) are poached directly in the congee during the final minutes of cooking, their flesh breaking into large, clean-tasting flakes that settle into the thick rice base. The congee is finished with a generous drizzle of hot mỡ hành (spring onion oil), a scattering of crispy fried shallots, fresh ginger julienne, and the mandatory rau ôm — the rice paddy herb whose lemony-cumin fragrance is inseparable from any cá lóc preparation in the Mekong Delta.\n\nCá lóc is the fish that the Mekong Delta identifies with most deeply — abundant in rice paddies, irrigation channels, and river margins, it is the everyday protein of delta households and the fish most often cited by Mekong Delta people when asked what they miss most when living abroad. Its flesh is white, firm, and distinctly sweet — a sweetness that comes from the fish's diet of small aquatic animals and its constant muscular activity in fast-moving water. When poached in a well-seasoned congee, the flesh breaks into natural flakes along its muscle grain, each flake still firm and never mushy if the timing is correct.\n\nThe Cần Thơ version is distinguished by its congee texture — looser and more broth-forward than the thick northern cháo, closer to the Cantonese jook in consistency, with individual rice grains still identifiable but surrounded by a silky, starchy liquid that has absorbed the fish's collagen and the ginger's warmth. The congee is cooked from broken rice (gạo tẻ thường) rather than glutinous rice, producing the specific soupy texture that Cần Thơ locals call cháo hoa — "flower congee," named for the way the broken rice grains bloom open like flowers as they cook.`,
    ingredientSections: [
        {
            title: `Congee base`,
            items: [
                { amount: 200, unit: 'g', name: `white rice (gao te)`, note: `rinsed — broken rice preferred for cháo hoa texture` },
                { amount: 1.8, unit: 'L', name: `light pork or chicken stock`, note: `or water — the fish provides the primary flavour` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Snakehead fish`,
            items: [
                { amount: 600, unit: 'g', name: `fresh snakehead fish (ca loc)`, note: `cleaned, cut into 4cm sections bone-in; substitute: fresh catfish or barramundi steaks` },
                { amount: 30, unit: 'g', name: `fresh ginger (gung tuoi)`, note: `half sliced for poaching, half julienned fine for serving` },
                { amount: 2, name: `spring onions, white parts bruised`, note: `for poaching` },
                { amount: 1, unit: 'tsp', name: `ground turmeric`, note: `rubbed on fish before poaching — golden colour, earthy warmth` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
            ],
        },
        {
            title: `Mỡ hành (spring onion oil — essential)`,
            items: [
                { amount: 4, name: `spring onions, sliced thin` },
                { amount: 5, unit: 'tbsp', name: `neutral oil` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 1, name: `bunch rau om (rice paddy herb / Limnophila aromatica)`, note: `the mandatory Mekong herb — added raw at serving only` },
                { amount: 1, name: `bunch ngo gai (sawtooth coriander)` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird\'s eye chili, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Cook the cháo hoa congee`,
            description: `Rinse rice thoroughly until water runs clear. Combine with stock or water in a heavy-bottomed pot. Bring to a boil over medium-high heat, stirring occasionally to prevent settling. Once boiling, reduce to the lowest possible simmer. Cook uncovered for 45-55 minutes, stirring every 10 minutes, until the rice grains have bloomed open and the congee is thick, silky, and pourable. The cháo hoa texture is the target: grains visibly open and soft, surrounded by a starchy opaque liquid — not a smooth paste and not a thin broth. Add additional hot stock or water if it thickens too much before the grains have fully bloomed.`,
            tip: `The cháo hoa (flower congee) texture — where the rice grain blooms open like a flower rather than dissolving into a smooth paste — is achieved by starting with cold water and cooking at the lowest possible simmer for the full time. High heat produces rapid starch release and a gluey, uniform paste. Low, slow cooking allows the individual rice grains to absorb water gradually and bloom at their own pace, producing the characteristic texture where some grains are more open than others, creating a natural variation that a smooth congee lacks.`,
        },
        {
            title: `Season and prepare the fish`,
            description: `Rub fish sections with ground turmeric, fish sauce, and black pepper. Rest 10 minutes. The turmeric colours the fish golden before poaching and adds an earthy warmth that is the visual and flavour signature of Mekong Delta cá lóc preparations. The fish sauce begins a brief surface cure that firms the exterior slightly, preventing the sections from falling apart when they enter the hot congee.`,
        },
        {
            title: `Poach fish directly in the congee`,
            description: `When the congee has reached its correct texture, bring it back to a gentle simmer. Add sliced ginger and bruised spring onion whites to the congee. Lower fish sections gently into the simmering congee — they should be partially submerged. Cover and poach at the gentlest possible simmer for 8-10 minutes until the flesh is just opaque throughout and flakes when pressed with a chopstick. Remove ginger slices and spring onion. Do not stir vigorously after adding the fish — the sections will break apart into clean flakes naturally from the gentle heat, but aggressive stirring produces shredded fish rather than flakes.`,
            tip: `Poaching the cá lóc directly in the congee rather than separately is the technique that produces the most flavourful bowl — the fish releases its collagen and natural sweetness into the surrounding congee during the 8-10 minute poach, enriching the rice base. Separately poached fish placed on top of congee contributes its flavour only where the broth touches the flesh; directly poached fish infuses the entire congee around it. The congee will taste measurably different after the fish has poached in it for 10 minutes.`,
        },
        {
            title: `Make the mỡ hành`,
            description: `Place sliced spring onions and salt in a heatproof bowl. Heat neutral oil in a small pan until just shimmering — approximately 180°C. Pour immediately over the spring onions in a single motion. The oil should sizzle vigorously and the spring onions turn vivid green instantly. Stir once. The mỡ hành must be made immediately before serving — the volatile aromatic compounds in the spring onion begin dissipating within 10 minutes of the hot oil contact. A bowl of cháo cá lóc without mỡ hành poured at serving is considered incomplete in every Mekong Delta household.`,
        },
        {
            title: `Assemble and serve`,
            description: `Ladle hot congee into deep bowls, ensuring each bowl contains 2-3 fish sections. Spoon generous mỡ hành over the surface — the oil should pool slightly on the congee and the spring onions should sit bright green on top. Scatter fried shallots. Add julienned fresh ginger threads. Place a small pile of raw rau ôm and ngò gai directly on the congee surface — not on the side. Coarse black pepper. Serve with lime and chili. In Cần Thơ, cháo cá lóc is eaten at market stalls from 5:30am — the congee has been simmering since 3am and the fish are added to order for each customer.`,
            tip: `Rau ôm (Limnophila aromatica — rice paddy herb) is the single non-negotiable herb in cháo cá lóc. Its lemony-cumin aroma is the flavour that completes the dish — without it the congee is simply fish congee; with it, it is unmistakably Mekong Delta. Add rau ôm only at serving and never cook it — it wilts and releases its oils into the hot congee within 30 seconds of contact with the heat, which is the correct way. Pre-added or cooked rau ôm loses its volatile oils and contributes only bitterness. In Germany, rau ôm is occasionally available fresh at Vietnamese grocers; frozen works well. If unavailable, dill fronds (for the lemony note) + a pinch of ground cumin (for the deeper note) approximates 60% of the rau ôm character.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}