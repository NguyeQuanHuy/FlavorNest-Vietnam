'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-ham-tieu-phu-tan',
    title: `Phú Tân Pepper-Braised Chicken`,
    subtitle: `Gà Hầm Tiêu Phú Tân — Free-range chicken slow-braised with Phú Tân black peppercorns, lemongrass, and coconut water from An Giang's pepper-growing heartland.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Phú Tân district in An Giang province is one of the largest black pepper growing areas in the Mekong Delta — a fact that surprises most Vietnamese food writers who associate pepper cultivation with the highlands of Phú Quốc, Đắk Lắk, or Bình Phước. The Phú Tân pepper is a lowland variety grown on trellises along the riverbanks of the Hậu Giang tributary, harvested twice a year, and prized by local cooks for its heat profile: sharp and immediate rather than the slow-building warmth of highland pepper, with a clean finish and minimal lingering aftertaste.\n\nGà hầm tiêu Phú Tân is the dish that Phú Tân households make when they want to showcase their pepper — a slow braise in which free-range chicken (gà ta) is cooked with a quantity of freshly cracked black peppercorns that would seem aggressive in any other context but is balanced here by coconut water, fish sauce, and a small amount of caramel that rounds the pepper's sharpness into a deep, integrated heat. The pepper is added in two stages: coarsely cracked at the beginning of the braise (which mellows over 90 minutes into a deep background warmth) and whole freshly cracked at the end (which provides immediate sharp heat on each bite).\n\nThe broth that accumulates during the long braise is the secondary reward of this dish — thick with chicken collagen, golden from turmeric, deeply savoury, and layered with the two-stage pepper heat. In Phú Tân, this broth is drunk from small cups between bites of chicken and rice, never wasted.`,
    ingredientSections: [
        {
            title: `Chicken`,
            items: [
                { amount: 1.2, unit: 'kg', name: `free-range chicken (ga ta)`, note: `cut into bone-in pieces — thighs and drumsticks preferred; breast dries during long braise` },
                { amount: 1, unit: 'tbsp', name: `rice wine`, note: `rubbed on chicken 10 min then rinsed` },
                { amount: 1, unit: 'tsp', name: `ground turmeric`, note: `rubbed on chicken before browning` },
            ],
        },
        {
            title: `Phú Tân two-stage pepper`,
            items: [
                { amount: 2, unit: 'tbsp', name: `black peppercorns, coarsely cracked (stage 1)`, note: `added at the beginning — mellows over 90 min braise` },
                { amount: 1, unit: 'tbsp', name: `black peppercorns, freshly cracked (stage 2)`, note: `added in final 5 minutes — sharp immediate heat` },
                { amount: 1, unit: 'tsp', name: `white pepper, finely ground`, note: `added with stage 1 — different heat profile from black` },
            ],
        },
        {
            title: `Braising liquid`,
            items: [
                { amount: 400, unit: 'ml', name: `fresh coconut water (nuoc dua tuoi)`, note: `not coconut milk — the clear liquid; natural sweetness rounds pepper heat` },
                { amount: 100, unit: 'ml', name: `water` },
                { amount: 2.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tbsp', name: `dark caramel (nuoc mau)`, note: `2 tbsp sugar cooked to deep amber then 3 tbsp water added` },
                { amount: 1, unit: 'tsp', name: `sugar` },
            ],
        },
        {
            title: `Aromatics`,
            items: [
                { amount: 3, name: `lemongrass stalks, bruised and knotted` },
                { amount: 5, name: `garlic cloves, smashed` },
                { amount: 4, name: `shallots, halved` },
                { amount: 3, name: `slices fresh galangal` },
                { amount: 3, name: `kaffir lime leaves, torn` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, name: `cucumber, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the dark caramel`,
            description: `Place 2 tbsp sugar in a small saucepan over medium heat. Do not stir — swirl the pan gently as the sugar melts and darkens. Cook until deep amber, just as smoke begins to rise. Remove immediately and add 3 tbsp cold water — it will spit and solidify briefly. Return to low heat and stir until smooth. Cool slightly. This nước màu gives the braise its dark, glossy colour and adds a slight bitterness that balances the coconut water's sweetness and rounds the pepper's sharp edge.`,
        },
        {
            title: `Brown the chicken`,
            description: `Pat chicken pieces completely dry after rinsing and rub with turmeric. Heat neutral oil in a heavy-bottomed pot or Dutch oven over high heat. Brown chicken pieces in batches — do not crowd — skin-side down for 4-5 minutes until deep golden. Flip and brown 2 minutes on the flesh side. Remove to a plate. Pour off excess rendered fat, leaving about 1 tbsp in the pot. The deep browning creates Maillard compounds that give the finished braise depth and colour beyond what the caramel alone provides.`,
        },
        {
            title: `Sauté aromatics and bloom the stage-1 pepper`,
            description: `In the same pot over medium heat, sauté shallots cut-side down until golden, 3 minutes. Add smashed garlic, galangal, lemongrass, and kaffir lime leaves. Stir 60 seconds until fragrant. Add the stage-1 coarsely cracked black peppercorns and white pepper — stir them into the aromatic oil for 30 seconds. The heat blooms the peppercorns' volatile oils before any liquid is added, intensifying their flavour contribution to the braise. Add dark caramel and sugar, stir 20 seconds.`,
            tip: `The dry-blooming of stage-1 peppercorns in the aromatic oil before adding liquid is the Phú Tân technique that produces deeper, more integrated pepper warmth in the finished braise. Peppercorns added directly to liquid release their heat compounds more slowly and less completely than peppercorns bloomed in hot oil first. This 30-second step produces a measurably more pepper-forward braise.`,
        },
        {
            title: `Braise low and slow — 90 minutes`,
            description: `Return browned chicken to the pot. Pour in coconut water, water, and fish sauce. The liquid should come halfway up the chicken pieces — not covering them. Bring to a boil, then reduce to the lowest possible simmer. Cover with lid slightly ajar. Braise for 90 minutes, turning chicken pieces gently every 30 minutes. The coconut water will reduce and concentrate, the collagen from the chicken bones will dissolve into the braising liquid, and the stage-1 pepper will mellow from sharp to a deep, integrated warmth throughout the braise.`,
            tip: `The 90-minute braise at very low heat is what softens the chicken bones to the point where the collagen melts into the braising liquid — producing the thick, gelatinous broth that Phú Tân gà hầm tiêu is known for. At higher heat or shorter time, the broth remains thin. The collagen release begins significantly after 45 minutes and accelerates in the final 30 minutes — do not shorten the braise.`,
        },
        {
            title: `Reduce and add stage-2 pepper`,
            description: `Remove the lid for the final 15 minutes and increase heat slightly to medium-low. The braising liquid will reduce to a thick, glossy sauce that coats the chicken. When the sauce coats the back of a spoon and only a small amount pools at the base of the pot, add the stage-2 freshly cracked black peppercorns. Toss to distribute. Remove from heat immediately. The stage-2 pepper remains sharp and vivid — it has not been cooked and delivers immediate heat with each bite, sitting on top of the mellowed stage-1 warmth that has built throughout the braise.`,
        },
        {
            title: `Serve in the braising pot`,
            description: `Bring the pot directly to the table — the chicken is served in the braising vessel with the thick coconut-pepper sauce pooled around it. Remove lemongrass, galangal, and kaffir lime leaves before serving. Each person takes pieces of chicken over their rice bowl and spoons a generous amount of the braising sauce over the rice — the sauce is intensely flavoured and should be used in small amounts per spoonful of rice. Serve with rau răm, cucumber, and lime. The braising broth is drunk from small cups throughout the meal in Phú Tân — it is the most concentrated expression of the two-stage pepper.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}