'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'dong-nuong',
    title: `Grilled Sand Digger`,
    subtitle: `Dông Nướng — Ninh Thuận's sand-dwelling lizard grilled over charcoal with lemongrass and salt, eaten whole with green mango salad.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.8,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Dông (Leiolepis belliana — the butterfly agama, also called the sand digger or banded gliding lizard) is a herbivorous lizard that lives in burrows in the dry sandy coastal plains of Ninh Thuận and Bình Thuận provinces — the driest, most arid region of Vietnam, where the red sand dunes run to the sea and rainfall averages less than 700mm per year. The dông is the signature wild food of this landscape: it feeds on wild herbs and flowers that grow in the sandy soil, its flesh is consequently aromatic and faintly herbal, and its fat — accumulated during the dry season when food is abundant — renders during grilling into a pale, fragrant oil that bastes the meat from within.\n\nDông nướng is the simplest and most traditional preparation: the cleaned lizard is stuffed with bruised lemongrass, rubbed with salt and turmeric, and grilled whole over charcoal until the skin is crisp and mahogany-coloured and the fat has rendered completely. It is eaten entire — skin, small bones, and all — torn apart with the hands at the table and dipped in muối ớt xanh (green chili salt) or a simple fish sauce and lime dipping sauce. The eating is tactile and unhurried.\n\nNinh Thuận's Cham and Raglai communities have hunted dông for centuries. The lizard is caught at dawn when it emerges from its burrow to warm itself — a long wire hook inserted into the burrow entrance is the traditional method. Today, dông is also farmed in Ninh Thuận and Bình Thuận on small family operations, and the farmed dông is available in markets in Phan Rang year-round. Outside Vietnam, this ingredient is undocumented in any English culinary source.`,
    ingredientSections: [
        {
            title: `The lizard`,
            items: [
                { amount: 4, name: `whole dông lizard (Leiolepis belliana)`, note: `cleaned and gutted — farmed preferred; wild-caught available seasonally October to March in Ninh Thuan` },
                { amount: 1, unit: 'tsp', name: `coarse salt`, note: `rubbed into skin and cavity` },
                { amount: 1, unit: 'tsp', name: `ground turmeric (bot nghe)`, note: `rubbed over skin — colours and protects during grilling` },
                { amount: 1, unit: 'tsp', name: `neutral oil`, note: `rubbed over skin after salt and turmeric` },
            ],
        },
        {
            title: `Stuffing (inside the cavity)`,
            items: [
                { amount: 3, name: `lemongrass stalks, bruised and cut to fit the cavity` },
                { amount: 4, name: `kaffir lime leaves (la chanh), torn` },
                { amount: 3, name: `garlic cloves, crushed` },
                { amount: 2, name: `slices fresh galangal (rieng tuoi)` },
            ],
        },
        {
            title: `Green chili salt dipping (muoi ot xanh — the Ninh Thuan standard)`,
            items: [
                { amount: 2, unit: 'tsp', name: `coarse salt` },
                { amount: 4, name: `fresh green chili (ot xanh), minced to paste` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 2, name: `kaffir lime leaves, central rib removed, sliced paper-thin` },
            ],
        },
        {
            title: `Green mango salad (mandatory accompaniment)`,
            items: [
                { amount: 200, unit: 'g', name: `green mango, shredded` },
                { amount: 1, name: `carrot, shredded` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 2, name: `bird's eye chili, sliced` },
                { amount: 2, unit: 'tbsp', name: `roasted peanuts, crushed` },
                { amount: 1, name: `bunch rau ram, leaves only` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 10, name: `sheets grilled sesame rice cracker (banh trang nuong me)` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `head butter lettuce` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare and marinate the lizard`,
            description: `If purchasing whole ungutted dông: make a shallow incision along the belly from the base of the neck to the vent. Remove intestines and discard. Rinse the cavity under cold running water. Pat the entire lizard completely dry inside and out with paper towels. Rub the cavity with a pinch of coarse salt. Rub the outside skin with coarse salt, ground turmeric, and neutral oil — work the seasoning into the joints where the legs meet the body and along the tail, which takes longest to cook. Stuff the cavity loosely with bruised lemongrass, torn kaffir lime leaves, crushed garlic, and galangal slices. Tie the legs loosely against the body with kitchen twine if desired to maintain shape during grilling. Rest 20 minutes at room temperature before grilling.`,
            tip: `The turmeric rub on the skin serves two purposes: colour (the finished lizard should be deep amber-orange) and protection (turmeric's curcumin compounds create a mild barrier that slows the skin from burning before the interior is cooked through). Do not skip the oil — without it the turmeric scorches rather than cooks. The galangal inside the cavity is the Ninh Thuan detail that distinguishes this preparation from coastal versions further south that use only lemongrass.`,
        },
        {
            title: `Make the green chili salt`,
            description: `Pound fresh green chili with coarse salt in a mortar until a rough paste forms — do not blend smooth; texture is important. Add sugar and lime juice and pound briefly to combine. Add paper-thin slices of kaffir lime leaf and stir through. The muoi ot xanh should be sharp, herbaceous, and intensely aromatic — the kaffir lime leaf is the element that connects the dipping sauce to the aromatics stuffed inside the lizard. Taste: it should be saltier and sharper than you expect. The fat of the grilled lizard skin is what it is calibrated against. Set aside at room temperature; do not refrigerate as the lime leaf aroma dissipates quickly when cold.`,
            tip: `Muoi ot xanh with kaffir lime leaf is specific to Ninh Thuan and Binh Thuan dông preparations. Further north in Khanh Hoa, dông is eaten with a plain fish sauce and lime dipping sauce. The kaffir lime leaf in the salt is the local distinction — it echoes the leaf stuffed inside the cavity and creates a continuous aromatic thread through the whole dish.`,
        },
        {
            title: `Make the green mango salad`,
            description: `Shred green mango and carrot into thin strips. Toss mango with a pinch of salt, rest 5 minutes, squeeze dry. Combine fish sauce, sugar, and lime juice, stir until dissolved. Add mango, carrot, and chili and toss to coat. Rest 10 minutes. Add rau ram leaves and crushed peanuts just before serving. This salad is not a side dish — it is eaten with every bite of dông, the sharp sourness cutting through the rich rendered lizard fat.`,
        },
        {
            title: `Grill over charcoal — low and slow, then high`,
            description: `Prepare a two-zone charcoal fire: hot coals on one side, no coals on the other. Begin grilling the lizard on the cooler side, away from direct coals, lid down (or covered with a metal bowl) — 15 minutes on the first side. The indirect heat cooks the interior and renders the fat without burning the turmeric-coated skin. After 15 minutes, move to the hot side directly over coals. Grill 4-5 minutes per side, turning once, until the skin is deeply charred in places and the fat has rendered visibly — small pools of pale oil will appear on the surface of the skin. The tail will cook fastest; the thickest part of the body slowest. Total grill time: 25-30 minutes.`,
            tip: `Dông fat is the most prized element of the dish in Ninh Thuan — the rendered lizard fat that drips onto the coals creates a smoke that bastes the exterior with a flavour that no marinade replicates. Position the lizard so the fat drips toward the coals during the final high-heat phase. The smoke is the seasoning. This is why dông is never cooked indoors on a flat pan — the interaction between rendered fat, charcoal, and smoke is structurally part of the dish.`,
        },
        {
            title: `Rest and serve whole`,
            description: `Remove from the grill and rest on a wooden board for 5 minutes. Do not cover — the skin crisps further as steam escapes during resting. Bring to the table whole on the board or a large plate lined with banana leaf. Remove the kitchen twine if used. In Ninh Thuan, dông nướng is served whole and torn apart communally at the table — there is no pre-portioning. Each person tears a section: leg, tail, body — skin and small bones eaten together. The crispy turmeric skin is the first thing taken.`,
        },
        {
            title: `The correct eating sequence`,
            description: `Tear a piece of lizard — skin and meat together. Dip briefly in muoi ot xanh. Place on a torn piece of grilled rice cracker with a small amount of green mango salad and a leaf of rau ram. Fold and eat in one or two bites. The sequence of flavours: first the salt and green chili heat, then the aromatic lizard fat and smoky skin, then the sour mango and herb at the finish. Squeeze lime over the remaining meat on the board halfway through eating. The rice cracker absorbs the rendered fat that pools on the board — this fat-soaked cracker is the last thing eaten.`,
            tip: `In Phan Rang night market, dông nướng vendors serve the lizard on a sheet of banana leaf with the dipping sauce in a small clay cup and the green mango salad in a separate bowl. The rice crackers are pre-grilled over the same charcoal as the lizard and still warm when they arrive at the table. The fat-soaked cracker at the end is not an afterthought — vendors in Phan Rang serve an extra cracker specifically for mopping the board. Ask for it if not provided.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
