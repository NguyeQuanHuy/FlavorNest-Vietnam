'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-la-rang-bua',
    title: `Quảng Bình Plow-Tooth Leaf Cake`,
    subtitle: `Bánh Lá Răng Bừa — Steamed dong leaf parcels shaped like plow teeth, filled with fatty pork and spring onion — Quảng Bình's most architecturally named cake.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.8,
    baseServings: 12,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh lá răng bừa takes its name from its shape — răng bừa means "plow teeth," and the cake's distinctive elongated triangular form, when a batch of them is arranged on a plate, resembles the teeth of a traditional Vietnamese wooden harrow (bừa) used in rice paddy cultivation. The name is agricultural and specific to Quảng Bình — a province where rice farming on the narrow coastal plain between the Trường Sơn mountains and the sea has defined daily life for centuries.\n\nThe cake is a steamed rice flour parcel wrapped in lá dong (Phrynium placentarium — the Vietnamese leaf used throughout the country for wrapping bánh chưng and bánh tét), filled with a mixture of fatty pork belly, mung bean, wood ear mushroom, and spring onion seasoned with fish sauce and black pepper. The lá dong imparts a faint green, slightly resinous fragrance to the rice flour exterior during steaming — the same function it serves in bánh chưng, and the same fragrance that makes the steamed parcel smell distinctively of Vietnamese celebration cooking.\n\nWhat distinguishes bánh lá răng bừa from the bánh nậm of Huế (which it resembles) is the thickness of the rice flour layer — răng bừa has a thicker outer layer, giving each piece more structural presence, and the filling is coarser and more generously fatted than the refined Huế version. This is Quảng Bình practicality — a working province's version of an elegant form.`,
    ingredientSections: [
        {
            title: `Rice flour dough`,
            items: [
                { amount: 300, unit: 'g', name: `rice flour (bot gao te)`, note: `fine-milled` },
                { amount: 50, unit: 'g', name: `tapioca starch (bot nang)` },
                { amount: 400, unit: 'ml', name: `boiling water`, note: `poured directly over flour — heat-gelatinises the starch` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Pork and mung bean filling`,
            items: [
                { amount: 200, unit: 'g', name: `pork belly (ba chi heo)`, note: `minced coarse — fat content retained` },
                { amount: 80, unit: 'g', name: `split mung beans (dau xanh co vo)`, note: `soaked 2 hours, steamed 15 min until soft` },
                { amount: 30, unit: 'g', name: `dried wood ear mushroom (nam meo)`, note: `soaked 20 min, minced` },
                { amount: 4, name: `spring onions, sliced thin` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Wrapping`,
            items: [
                { amount: 12, name: `fresh or frozen la dong leaves (Phrynium placentarium)`, note: `wiped clean, central rib removed; substitute: banana leaf sections` },
                { amount: 1, name: `roll kitchen twine or banana leaf strips` },
            ],
        },
        {
            title: `Dipping sauce`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the heat-gelatinised dough`,
            description: `Combine rice flour, tapioca starch, salt in a bowl. Pour boiling water over directly — stir immediately with a wooden spoon. The starch will partially gelatinise on contact with the boiling water, producing a dough that is simultaneously firm enough to handle and pliable enough to shape without cracking. Add oil and knead briefly until smooth. The dough should be warm, slightly sticky, and translucent-looking. Rest covered 15 minutes. This hot-water gelatinisation technique produces a rice dough that does not crack when folded into the răng bừa tooth shape — cold-water rice dough would fracture.`,
            tip: `The boiling-water dough method (gọi là bột chín — cooked dough) is used throughout central Vietnamese cake-making for exactly this reason: the partial gelatinisation of the starch creates a pliable, crack-resistant dough that can be shaped into the thin, elongated forms required for bánh lá preparations. The same technique produces the dough for bánh nậm and bánh bèo. The ratio of boiling water to flour (approximately 400ml per 300g) must be exact — too little water produces cracking; too much produces a dough too sticky to shape.`,
        },
        {
            title: `Cook the filling`,
            description: `Heat oil in a pan over medium-high heat. Add minced pork belly and cook, breaking up, until no pink remains — 4-5 minutes. Add minced wood ear mushroom, stir 2 minutes. Add steamed mung beans and spring onion. Season with fish sauce, sugar, and black pepper. Cook 2 more minutes until fragrant and dry — the filling should hold together when pressed but not be wet. Cool completely before filling the cakes.`,
        },
        {
            title: `Shape the răng bừa`,
            description: `Take a lá dong leaf and place a portion of dough (about 40g) on the lower third. Flatten to an oval about 10cm long and 5cm wide. Place 2 tablespoons of filling along the centre. Fold the dough around the filling and press the edges together to seal — the shape should be an elongated oval, tapered at both ends: this is the tooth shape (răng bừa). Wrap the filled dough in the lá dong leaf, folding the sides in and rolling forward. Tie with kitchen twine or banana leaf strip. Repeat for all 12 cakes.`,
        },
        {
            title: `Steam 30 minutes`,
            description: `Arrange wrapped cakes in a steamer. Steam over vigorously boiling water for 30 minutes. The lá dong will darken and the cakes inside will firm up as the outer rice layer fully gelatinises and the filling cooks through. Remove and allow to cool 5 minutes before unwrapping — hot rice dough tears easily; cooled dough peels cleanly from the leaf.`,
        },
        {
            title: `Unwrap and serve`,
            description: `Unwrap at the table — the lá dong fragrance released as each parcel is opened is part of the eating experience. The outer rice layer should be smooth, slightly translucent, and faintly green from the leaf contact. Slice each cake crosswise to reveal the filling inside. Dip in nuoc cham before eating. In Quảng Bình, bánh lá răng bừa is eaten at breakfast and as a market snack — never as a formal meal course. Arrange 6 sliced cakes on a plate with a bowl of dipping sauce alongside.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}