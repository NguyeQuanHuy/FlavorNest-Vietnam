'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-canh-quang-binh',
    title: `Quảng Bình Fresh Dough Drop Soup`,
    subtitle: `Cháo Canh Quảng Bình — Hand-pinched fresh rice dough dropped into simmering broth — Quảng Bình's most distinctive noodle-soup that is neither noodle nor congee.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cháo canh Quảng Bình is the dish that most surprises visitors who know Vietnamese food well — a soup in which fresh rice flour dough is pinched by hand into irregular flat pieces directly over a simmering broth, producing a bowl of soft, slightly chewy rice dough pieces in a savoury broth that is neither cháo (congee) nor canh (clear soup) nor bún (noodle soup) but something entirely its own. The name combines both words because neither alone describes it — it is dough-in-soup, a preparation with no direct equivalent elsewhere in Vietnamese cooking.\n\nThe technique is specific: a stiff rice flour dough is made with boiling water (the same heat-gelatinisation method as bánh lá răng bừa), then the cook sits beside the simmering pot and uses two fingers to pinch off small, flat, irregular pieces of dough — each 3-5cm, each slightly different from the last — dropping them directly into the broth where they cook in 3-4 minutes. The irregular shape means each piece has a different surface area and cooks to a slightly different texture, producing a bowl where no two bites are identical.\n\nThe broth is built on shrimp paste (mắm ruốc) dissolved and simmered with pork bones, lemongrass, and shallots — the same mắm ruốc that is Quảng Bình's defining condiment, here used as a cooking base rather than a table sauce. The dough pieces absorb the mắm ruốc broth during cooking, becoming flavoured throughout rather than just on the surface.`,
    ingredientSections: [
        {
            title: `Fresh rice dough`,
            items: [
                { amount: 250, unit: 'g', name: `rice flour (bot gao te)` },
                { amount: 50, unit: 'g', name: `tapioca starch (bot nang)` },
                { amount: 300, unit: 'ml', name: `boiling water`, note: `poured over flour — heat-gelatinisation` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Mắm ruốc broth`,
            items: [
                { amount: 300, unit: 'g', name: `pork spare ribs or bones (suon/xuong heo)`, note: `blanched and rinsed` },
                { amount: 2, unit: 'tbsp', name: `mam ruoc Quang Binh`, note: `dissolved in 100ml warm water, strained — the broth's soul` },
                { amount: 3, name: `lemongrass stalks, bruised` },
                { amount: 3, name: `shallots, charred` },
                { amount: 1.5, unit: 'L', name: `water` },
                { amount: 1, unit: 'tbsp', name: `fish sauce`, note: `additional seasoning` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 20, unit: 'g', name: `rock sugar` },
            ],
        },
        {
            title: `Toppings`,
            items: [
                { amount: 200, unit: 'g', name: `fresh shrimp (tom)`, note: `peeled, poached in broth 2 min` },
                { amount: 150, unit: 'g', name: `pork belly slices, thin` },
                { amount: 3, name: `spring onions, sliced` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, unit: 'tsp', name: `black pepper` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the rice dough`,
            description: `Combine rice flour, tapioca starch, and salt. Pour boiling water over and mix immediately with a wooden spoon — the starch gelatinises on contact. Add oil. Knead briefly to a smooth, warm, pliable dough. It should be firm enough to hold a shape when pinched but soft enough to stretch without cracking. Rest covered 15 minutes. The dough must be made fresh and used immediately — rested dough that cools fully becomes too stiff to pinch smoothly.`,
        },
        {
            title: `Build the mắm ruốc broth`,
            description: `Blanch pork ribs, rinse. Dissolve mắm ruốc in warm water, strain through cheesecloth. Combine strained mắm ruốc liquid, pork ribs, charred shallots, lemongrass, and 1.5L water in a pot. Bring to a boil, skim foam 10 minutes. Reduce to a steady simmer for 40 minutes. Season with fish sauce, salt, and rock sugar. The broth should be golden-amber, faintly pungent from the mắm ruốc (mellowed from the simmering), lemongrass-fragrant, and deeply savoury.`,
            tip: `The mắm ruốc dissolves into the broth and transforms during the 40-minute simmer — the raw pungency mellows into a complex, deeply savoury base that is the specific flavour of cháo canh Quảng Bình. No other noodle soup in Vietnam uses mắm ruốc as a broth base rather than a condiment. This reversal — cooking the condiment into the broth — is the defining innovation of the dish.`,
        },
        {
            title: `The pinching technique — dropping dough into simmering broth`,
            description: `Keep the broth at a moderate simmer — not a rolling boil, which tears the dough pieces before they set. Hold the rice dough in one hand. Using the thumb and index finger of the other hand, pinch off an irregular flat piece approximately 3-5cm across and drop directly into the simmering broth. Repeat continuously, working around the pot, until all dough is used. The pieces will sink, cook for 3-4 minutes, then rise to the surface when done — a floating piece is cooked through. Do not stir vigorously during cooking as the pieces stick to each other when raw.`,
            tip: `The irregular shape of hand-pinched cháo canh dough pieces is not imprecision — it is the design. Each irregular shape has a different surface-to-volume ratio, producing a range of textures from thinner pieces (soft throughout) to thicker pieces (slightly chewy centre). This texture variation across a single bowl is the eating experience — uniform machine-cut dough pieces would produce a monotonous bowl. The more irregular the pinching, the better the bowl.`,
        },
        {
            title: `Finish and assemble`,
            description: `Once all dough pieces have risen to the surface (all cooked), add shrimp and pork belly. Poach shrimp 2 minutes. Ladle into deep bowls — ensure each bowl has a mix of dough pieces of different sizes. Scatter spring onion, fried shallots, and black pepper. Add rau răm. Serve with lime. In Đồng Hới, cháo canh is eaten for breakfast at market stalls where the cook sits by the pot continuously pinching dough into the simmering broth — each bowl made to order, each slightly different from the last.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}