'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-ga-nuong-hoi-an',
    title: 'Bún Gà Nướng Hội An (Hội An Grilled Chicken Noodle Bowl)',
    subtitle: 'Cold rice vermicelli topped with lemongrass-grilled chicken, pickled daikon and carrot, sliced cucumber, roasted peanuts, crispy shallots, and fresh herbs — dressed with the bright nước chấm that makes every element cohere. The Hội An bowl that is eaten at every meal and never gets old.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/bun-ga-nuong-hoi-an.jpg',
    intro: `Bún gà nướng Hội An is the noodle bowl that the ancient town of Hội An has made its own — a cold vermicelli bowl with grilled lemongrass chicken that appears in the restaurants along Trần Phú Street and the village kitchens of Cẩm Châu with the confidence of a dish that has been refined over generations. It belongs to the bún category of Vietnamese noodle bowls — cold noodles dressed with sauce and toppings rather than served in hot broth — and it shares its DNA with bún thịt nướng (the southern version with pork) but is distinctly central Vietnamese in its seasoning and assembly. The chicken is the centerpiece: marinated in lemongrass, garlic, fish sauce, and a trace of annatto oil for the characteristic orange color, then grilled hot and fast until charred at the edges and juicy within. The noodles are cold, which is the counterintuitive element that makes the bowl work — cold noodles against hot grilled chicken, the contrast of temperature as deliberate as the contrast of textures. The pickled vegetables (đồ chua) provide acidity that cuts through the chicken fat. The roasted peanuts and crispy shallots add richness and crunch. The nước chấm — poured over or served alongside — ties every element into a coherent whole. This is a bowl that requires no cooking skill beyond the chicken marinade and the grilling, and produces results that are disproportionately good.`,
    ingredientSections: [
        {
            title: 'Grilled chicken',
            items: [
                { amount: 600, unit: 'g', name: 'chicken thighs or breast, boneless skinless', note: 'thighs preferred — more forgiving on the grill and more flavorful' },
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk only, very finely minced' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'annatto oil (dầu điều) or turmeric powder', note: 'gives the characteristic orange-gold color of Hội An grilled chicken' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Pickled vegetables (đồ chua)',
            items: [
                { amount: 1, name: 'medium carrot', note: 'julienned' },
                { amount: 150, unit: 'g', name: 'daikon radish (củ cải trắng)', note: 'julienned' },
                { amount: 100, unit: 'ml', name: 'rice vinegar' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 50, unit: 'ml', name: 'warm water' },
            ],
        },
        {
            title: 'Bowl components',
            items: [
                { amount: 400, unit: 'g', name: 'dried rice vermicelli (bún)', note: 'cooked according to package, rinsed under cold water, drained — served cold' },
                { amount: 1, name: 'cucumber', note: 'halved lengthwise, seeds removed, sliced thin on the diagonal' },
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 3, unit: 'tbsp', name: 'shallot-infused oil' },
            ],
        },
        {
            title: 'Fresh herbs',
            items: [
                { amount: 1, name: 'bunch lettuce', note: 'shredded — placed under the noodles' },
                { amount: 1, name: 'bunch mint (húng lủi)' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch bean sprouts', note: 'briefly blanched or raw' },
                { amount: 3, name: 'spring onions', note: 'sliced' },
            ],
        },
        {
            title: 'Nước chấm Hội An',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 4, unit: 'tbsp', name: 'fresh lime juice', note: 'about 3 limes' },
                { amount: 3, unit: 'tbsp', name: 'sugar' },
                { amount: 6, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'rice vinegar', note: 'the Hội An addition — a touch brighter than standard nước chấm' },
            ],
        },
    ],
    steps: [
        {
            title: 'Pickle the vegetables — make first',
            description: 'Combine rice vinegar, sugar, salt, and warm water — stir until dissolved. Add julienned carrot and daikon. Toss to coat. Leave at room temperature for minimum 30 minutes — the vegetables should taste bright, sweet-sour, and have softened slightly while retaining crunch. Refrigerate until needed. Đồ chua keeps for 2 weeks refrigerated and improves over the first 2 days.',
            tip: 'Making the đồ chua first is the correct workflow — it needs time to pickle while everything else is prepared. Same-day đồ chua is good; two-day đồ chua is better. Make a large batch and keep in the refrigerator.',
        },
        {
            title: 'Marinate the chicken',
            description: 'Combine the minced lemongrass, garlic, shallots, fish sauce, sugar, oyster sauce, annatto oil or turmeric, black pepper, and neutral oil. Pound the lemongrass in a mortar first if possible — it releases the oils more completely than mincing alone. Score the chicken thighs shallowly on both sides. Coat completely in the marinade and leave for minimum 30 minutes at room temperature, or up to overnight refrigerated.',
            tip: 'Annatto oil (dầu điều) is what gives Hội An grilled chicken its characteristic deep orange-gold color that is different from the pale yellow of turmeric. It is made by heating annatto seeds in oil until the oil turns deep red-orange. Buy it ready-made at Vietnamese grocery stores or substitute turmeric for color without the flavor difference.',
        },
        {
            title: 'Cook the noodles and prepare components',
            description: 'Cook the rice vermicelli according to package instructions. Drain and rinse thoroughly under cold running water until the noodles are completely cold — they should feel cool to the touch. Drain well and set aside. Shred the lettuce. Slice the cucumber. Prepare all the herbs. Make the nước chấm: combine all ingredients, stir until sugar dissolves, taste and adjust.',
            tip: 'Rinsing the noodles under cold water is the step that stops the cooking and prevents the noodles from clumping together. Lukewarm noodles become a stuck mass within minutes. Cold noodles stay separate and are the correct temperature for a cold noodle bowl.',
        },
        {
            title: 'Grill the chicken hot and fast',
            description: 'Heat a grill pan or wok over maximum heat until smoking, or cook over charcoal. Shake excess marinade from the chicken — too much on the surface burns before the meat cooks. Grill thighs for 5-6 minutes per side until charred at the edges and cooked through (internal temperature 75°C). Breast needs 3-4 minutes per side. Rest 5 minutes before slicing across the grain into strips.',
            tip: 'High heat and patience — do not move the chicken for the first 3 minutes so the crust can form and caramelize. The lemongrass in the marinade burns faster than plain marinades; maximum heat caramelizes it before it crosses into bitter territory.',
        },
        {
            title: 'Assemble each bowl',
            description: 'Place a layer of shredded lettuce at the bottom of each bowl. Add a generous portion of cold rice vermicelli. Arrange the sliced grilled chicken over the noodles. Add a small mound of pickled daikon and carrot. Place cucumber slices alongside. Add a handful each of mint, rau răm, and bean sprouts. Drizzle shallot oil generously over everything. Top with crushed peanuts and crispy fried shallots.',
            tip: 'The bowl should look abundant — this is not a sparse, architectural dish. Pile the toppings generously. The visual of a full, colorful bowl with visible chicken, herbs, and peanuts is part of the Hội An eating experience.',
        },
        {
            title: 'Dress and eat',
            description: 'Pour 4-5 tablespoons of nước chấm over each bowl — or serve in a small bowl alongside for dipping. Mix the bowl from the bottom before eating — the dressing pools at the base and the noodles at the top are under-seasoned until mixed. The correct eating experience: every spoonful should carry cold noodle, warm chicken, crunchy peanut, soft herb, and tangy pickled vegetable simultaneously.',
            tip: 'The mixing instruction is worth repeating to first-time bún bowl eaters. The instinct is to eat from the top — the correct way is to stir from the bottom up, redistributing the nước chấm through every layer. Do it before the first bite.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}