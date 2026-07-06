'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-xao-lan',
    title: 'Gà Xào Lăn (Huế Spiced Chicken Stir-Fry)',
    subtitle: 'Chicken pieces marinated in lemongrass and spices, dusted in rice flour, then wok-fried until the coating crisps and caramelizes — finished with shrimp paste, fresh lemongrass, and toasted sesame. The Huế nhậu dish with the most aromatic crust in Vietnamese chicken cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ga-xao-lan.jpg',
    intro: `Gà xào lăn is the Huế chicken stir-fry that belongs to the nhậu tradition — the Vietnamese culture of eating with beer, of shared plates at the center of the table, of dishes designed to be picked up with chopsticks and eaten standing up or leaning forward. Xào means stir-fry; lăn means to roll or coat — in this context, the chicken pieces are lăn through a seasoned rice flour mixture before hitting the hot wok. The coating is thin and dry, not a batter, and it crisps in the oil in the first minute of wok contact, creating a shell that caramelizes when the lemongrass and spices are added. The defining finish is mắm tôm — fermented shrimp paste — added in small amounts to the wok at the end, where it caramelizes in the residual heat and coats the chicken with an intensely savory, pungent, purple-tinged glaze that is simultaneously confrontational in smell and completely addictive in taste. Gà xào lăn is not for the timid about fermented ingredients. It is for the people who understand that mắm tôm is the most concentrated savory ingredient in Vietnamese cooking and that a dish built around it is, by definition, extraordinary. In Huế restaurants it arrives at the table still sizzling, with cold beer and the expectation that everything else is secondary.`,
    ingredientSections: [
        {
            title: 'Chicken and marinade',
            items: [
                { amount: 1, unit: 'kg', name: 'chicken pieces, bone-in', note: 'thighs and drumsticks — chopped through the bone into 4-5cm pieces. The smaller pieces allow the coating to crisp evenly.' },
                { amount: 2, name: 'lemongrass stalks', note: 'inner stalk, finely minced' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'five-spice powder (ngũ vị hương)', note: 'the Huế note — used in small amounts throughout central Vietnamese cooking' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Coating',
            items: [
                { amount: 80, unit: 'g', name: 'rice flour (bột gạo)', note: 'produces a crispier result than cornstarch or wheat flour' },
                { amount: 20, unit: 'g', name: 'cornstarch', note: 'combined with rice flour — the duo produces maximum crispiness' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'colors the coating golden' },
                { amount: 300, unit: 'ml', name: 'neutral oil', note: 'for shallow-frying the coated chicken' },
            ],
        },
        {
            title: 'Xào lăn finishing',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fermented shrimp paste (mắm tôm Huế)', note: 'the defining ingredient — Huế-style mắm tôm is specifically purple and more pungent than southern varieties. Thinned with 1 tsp lime juice before using.' },
                { amount: 2, name: 'lemongrass stalks', note: 'inner stalk, finely sliced into thin rings — added fresh to the final wok' },
                { amount: 4, name: 'garlic cloves', note: 'thinly sliced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'sliced — gà xào lăn should be noticeably spicy' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds', note: 'scattered in the last 30 seconds' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
                { amount: 1, unit: 'tsp', name: 'sugar', note: 'balances the mắm tôm' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 1, name: 'fresh red chili', note: 'sliced — extra' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'drizzled at the end' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the chicken — minimum 1 hour',
            description: 'Combine the chicken pieces with minced lemongrass, garlic, fish sauce, sugar, turmeric, five-spice, and black pepper. Mix until every piece is thoroughly coated. Marinate for minimum 1 hour at room temperature — the lemongrass and spices need time to penetrate the bone-in pieces. Overnight refrigerated is significantly better. Pat the pieces dry with paper towels before coating — surface moisture causes the flour to clump unevenly.',
            tip: 'The five-spice in the marinade is used very sparingly — half a teaspoon for a kilogram of chicken. The goal is a background note that is Huế-specific, not a dominant flavor. More than a teaspoon and the dish becomes heavy.',
        },
        {
            title: 'Coat and fry until crispy',
            description: 'Combine rice flour, cornstarch, salt, and turmeric in a wide shallow bowl. Dredge each chicken piece in the flour mixture — shake off excess firmly. The coating should be thin and even. Heat oil to 175°C in a wok. Fry the coated chicken in batches for 8-10 minutes until deeply golden and cooked through. The coating should be uniformly crispy with no pale patches. Drain on paper towels. The chicken can be fried up to 30 minutes ahead — it will be reheated in the wok.',
            tip: 'Frying in batches is essential — crowded chicken drops the oil temperature and the coating becomes pale and greasy rather than golden and crisp. Maintain 175°C between batches by allowing the oil to reheat.',
        },
        {
            title: 'Prepare the mắm tôm',
            description: 'Place 2 tablespoons of mắm tôm in a small bowl. Add 1 teaspoon of fresh lime juice and stir — the acid slightly dilutes the intensity and makes it pourable. The mắm tôm should be thick enough to cling to a spoon but flow when the bowl is tilted. Smell it: intensely fermented, slightly sour, deeply oceanic. This smell will mellow significantly when it hits the hot wok — the heat caramelizes the fermented proteins and transforms the raw pungency into something savory and complex.',
            tip: 'The smell of raw mắm tôm intimidates people who have not cooked with it. Trust the process — its transformation in a hot wok from pungent paste to caramelized savory glaze is one of the most dramatic flavor changes in Vietnamese cooking.',
        },
        {
            title: 'The xào lăn finishing — fast and hot',
            description: 'Heat a clean wok over maximum heat until smoking. Add oil. Fry the sliced garlic and fresh lemongrass rings for 30 seconds until fragrant and just beginning to color. Add the fried chicken pieces. Toss vigorously for 1 minute until the chicken is hot and the lemongrass is coating the crust. Add the mắm tôm and sugar — it will immediately sizzle and smoke. Toss rapidly for 45-60 seconds until the mắm tôm caramelizes onto every piece and the wok smells intensely of caramelized shrimp paste.',
            tip: 'The mắm tôm stage requires commitment — 45-60 seconds of continuous, vigorous tossing at maximum heat. The smoke and smell will be intense. This is correct. The moment the mắm tôm caramelizes fully, it stops smelling of raw fermentation and smells instead of something deeply savory and complex. That is the signal to add the chili and sesame.',
        },
        {
            title: 'Add chilies and sesame — final 30 seconds',
            description: 'Add the sliced bird\'s eye chilies and toasted sesame seeds to the wok. Toss for 30 seconds — just enough to bloom the chili heat into the dish without cooking the chilies soft. Remove from heat immediately.',
            tip: 'The chilies in gà xào lăn should retain some of their fresh heat — added in the last 30 seconds they remain slightly crisp and provide a sharp heat that is different from chilies cooked for longer. Fresh chili bite against the caramelized mắm tôm crust is the textural point.',
        },
        {
            title: 'Plate and serve immediately',
            description: 'Transfer to a serving plate in a single layer — do not pile, which traps steam and softens the crust. Drizzle sesame oil over the top. Scatter spring onion, cilantro, and extra sliced chili. Serve immediately with lime wedges. Gà xào lăn is a dish that must be eaten within 10 minutes — the mắm tôm crust softens as it cools and the textural contrast between the crispy coating and the caramelized paste is lost. Eat fast, with cold beer.',
            tip: 'The lime served alongside is squeezed directly onto the chicken pieces at the table — the acid brightens the caramelized mắm tôm and cuts through the richness. It is the last seasoning element the dish needs and the one that makes it complete.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
