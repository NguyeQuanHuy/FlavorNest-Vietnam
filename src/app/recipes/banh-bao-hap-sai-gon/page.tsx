'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-bao-hap-sai-gon',
    title: `Saigon Steamed Pork Bun`,
    subtitle: `Bánh Bao Hấp Sài Gòn — Fluffy steamed buns filled with seasoned pork, salted egg yolk, and Chinese sausage — Vietnam's Teochew-Cantonese bun tradition made southern.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 8,
    heroImage: `https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh bao hấp Sài Gòn is the steamed bun that the Hoa (ethnic Chinese) communities of Chợ Lớn brought to southern Vietnam and that the Vietnamese kitchen absorbed and made its own — a pillowy, milk-white steamed dough enclosing a filling of seasoned pork mince, sliced xá xíu (char siu roast pork), half a salted duck egg yolk, wood ear mushroom, and glass noodles, all enclosed in a dough so soft it tears at the gentlest pressure and releases a cloud of steam when opened at the table.\n\nThe bánh bao of Sài Gòn differs from the Hong Kong dim sum baozi (包子) and the Cantonese char siu bao in its dough composition and its filling philosophy. The Sài Gòn dough uses a combination of all-purpose flour and a small amount of rice flour, producing a bun that is slightly denser and chewier than the pure wheat-flour Cantonese version while remaining light and pillowy. The filling is more generous and more varied than the pure char siu filling of Cantonese bao — the salted egg yolk in the centre is the Vietnamese addition that has no Cantonese precedent, providing a rich, slightly sandy burst of cured egg fat that is the most prized element of the Sài Gòn bánh bao.\n\nThe steaming technique is what produces bánh bao's characteristic smooth, pure-white exterior — the dough must be steamed over vigorously boiling water with a cloth-lined lid that absorbs condensation and prevents water droplets from falling onto the bun surface. A single water droplet on the surface of an uncooked bun produces a dark spot that does not expand during steaming, permanently marking an otherwise perfect white surface. The pursuit of the unblemished white exterior is the obsession that separates serious bánh bao makers from casual ones.',`,
    ingredientSections: [
        {
            title: `Steamed bun dough`,
            items: [
                { amount: 350, unit: 'g', name: `all-purpose flour (bot mi da dung)`, note: `sifted` },
                { amount: 50, unit: 'g', name: `rice flour (bot gao)`, note: `the Sài Gòn addition — slight density and chew` },
                { amount: 7, unit: 'g', name: `instant yeast (men no)` },
                { amount: 50, unit: 'g', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `baking powder`, note: `added after first prove — extra lift for white colour` },
                { amount: 180, unit: 'ml', name: `warm whole milk (sua tuoi)`, note: `38°C — activates yeast and produces white colour` },
                { amount: 20, unit: 'g', name: `neutral oil or lard (mo lon)` },
                { amount: 0.5, unit: 'tsp', name: `white vinegar`, note: `whitens the dough by adjusting pH` },
            ],
        },
        {
            title: `Saigon bánh bao filling`,
            items: [
                { amount: 200, unit: 'g', name: `pork mince (thit heo xay)`, note: `70% lean, 30% fat` },
                { amount: 100, unit: 'g', name: `xa xiu (char siu roast pork)`, note: `store-bought or homemade — diced 1cm` },
                { amount: 4, name: `salted duck egg yolks (long do trung muoi)`, note: `halved — 1 half per bun; the defining Sài Gòn element` },
                { amount: 30, unit: 'g', name: `dried wood ear mushroom (nam meo kho)`, note: `soaked 20 min, minced fine` },
                { amount: 30, unit: 'g', name: `dried glass noodles (mien)`, note: `soaked 10 min, cut 2cm lengths` },
                { amount: 2, name: `shallots, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 1.5, unit: 'tbsp', name: `oyster sauce` },
                { amount: 1, unit: 'tbsp', name: `soy sauce` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `sesame oil` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `For steaming`,
            items: [
                { amount: 8, name: `squares parchment paper (8x8cm)`, note: `one under each bun to prevent sticking` },
                { amount: 1, name: `clean cotton cloth or cheesecloth`, note: `lined inside steamer lid — absorbs condensation` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the dough — first prove`,
            description: `Combine warm milk (38°C), sugar, and yeast in a bowl. Stir and rest 5-10 minutes until foamy — confirming yeast is active. Sift together all-purpose flour and rice flour. Add the yeast mixture, oil, and white vinegar. Mix until a shaggy dough forms. Knead 10-12 minutes until smooth, elastic, and slightly tacky — it should pass the windowpane test. The milk produces a softer, whiter dough than water; the vinegar's acidity slightly inhibits yeast browning during steaming, contributing to the pure-white exterior. Shape into a ball, cover with damp cloth, and prove at room temperature 60-75 minutes until doubled.`,
            tip: `The white vinegar addition (0.5 tsp per 400g flour) is the technique used by professional bánh bao makers throughout Chợ Lớn to achieve the bright-white steamed exterior. The acetic acid inhibits the Maillard browning reactions that would otherwise give the bun a slightly yellow tinge at steaming temperatures. This is the same principle as adding cream of tartar to meringue — a small amount of acid produces a measurably whiter result without affecting the flavour.`,
        },
        {
            title: `Cook the filling`,
            description: `Heat oil in a pan over medium-high heat. Sauté shallots and garlic until golden. Add pork mince and cook, breaking up, until no pink remains — 4-5 minutes. Add diced char siu, minced wood ear mushroom, and glass noodle pieces. Toss together. Season with oyster sauce, soy sauce, fish sauce, sugar, sesame oil, and pepper. Cook 2 more minutes until fragrant and any excess moisture has evaporated — the filling must be dry, not wet, or it will make the dough soggy during steaming. Cool completely. Divide into 8 equal portions.`,
        },
        {
            title: `Add baking powder — second knead`,
            description: `After the first prove, punch down the dough. Add baking powder and knead for 3-4 minutes until completely incorporated. The baking powder is added after the first prove rather than at the start because it provides additional lift during steaming that is independent of yeast activity — adding it at the start would react with the acidic vinegar and lose effectiveness before the steaming step. This double leavening (yeast + baking powder) produces the characteristically light, fluffy texture of Sài Gòn bánh bao.`,
        },
        {
            title: `Shape the buns`,
            description: `Divide the dough into 8 equal portions of approximately 75g each. Roll each portion into a smooth ball. Using a rolling pin, flatten into a disc 12-13cm in diameter — thinner at the edges than the centre. Place one portion of filling in the centre of the disc. Place one salted egg yolk half directly on top of the filling — yolk facing up. Gather the dough edges upward around the filling, pleating as you go with the thumb and index finger in a pinching motion. Twist the gathered top to seal firmly. Place sealed-side down on a parchment square.`,
            tip: `The salted egg yolk placement — sitting on top of the filling, yolk facing up — determines the eating experience. When the finished bun is bitten from the top (as is traditional), the first encounter is the soft dough, then the seasoned pork filling, then the rich salted yolk at the centre. The yolk's slightly sandy, intensely rich flavour is the crescendo of each bun. If the yolk is placed incorrectly (yolk facing down, or buried in the filling), this progressive flavour experience is lost.`,
        },
        {
            title: `Second prove — 20 minutes`,
            description: `Place shaped buns (on their parchment squares) in the steamer basket, spacing at least 3cm apart — they will expand significantly during steaming. Cover with a damp cloth and leave to prove 20 minutes at room temperature. The buns should look slightly puffed and feel light and airy before steaming. Do not over-prove — more than 30 minutes produces a bun that collapses during steaming. Do not under-prove — less than 15 minutes produces a dense, poorly risen bun.`,
        },
        {
            title: `Steam — 15 minutes with the cloth lid technique`,
            description: `Bring water in the steamer base to a full, vigorous boil. Line the inside of the steamer lid with a clean cotton cloth — drape it over the lid and secure at the handle. This cloth absorbs condensation that would otherwise drip onto the bun surfaces, causing dark spots. Place the steamer basket over the boiling water. Cover with the cloth-lined lid. Steam at full boil for exactly 15 minutes. Do not open the lid during steaming — the temperature drop causes the buns to collapse and wrinkle. After 15 minutes, turn off heat and leave the lid on for 2 more minutes before opening — the gradual temperature reduction prevents surface wrinkling.`,
            tip: `The cloth-lined lid is the single most important technique for achieving the perfect white, smooth bánh bao surface. Steam condensation that drips from an unlined metal lid falls directly onto the bun surface — each drop leaves a permanent dark, sunken spot on the otherwise white exterior. Professional bánh bao steamer lids in Chợ Lớn are permanently lined with thick cotton. At home, drape a clean kitchen towel or cheesecloth over the lid before placing it on the steamer. Check that no part of the cloth hangs low enough to touch the buns.`,
        },
        {
            title: `Serve immediately`,
            description: `Remove buns from steamer and serve immediately — bánh bao is at its peak within 5 minutes of leaving the steamer, when the exterior is smooth and white, the dough is pillowy and hot, and the filling inside is steaming. To eat: hold the bun from the bottom and bite from the top — the sealed top is the softest, thinnest part of the dough and provides the best entry into the filling. The salted egg yolk should be reached at the second or third bite, its rich, sandy interior contrasting with the sweet pork filling around it. Reheat leftover buns by re-steaming for 3-4 minutes — never microwave, which makes the dough rubbery and the surface wet.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}