'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bi-heo-chien-mam-toi',
    title: 'Crispy Pork Skin with Garlic Fish Sauce',
    subtitle: 'Bì heo chiên mắm tỏi — giòn tan, thấm mắm, ăn không biết dừng.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '50 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/bi-heo-chien-mam-toi.jpg',
    intro: `Bi heo chien mam toi is the kind of dish that commands silence at the table — not because it is delicate or refined, but because it is so aggressively good that conversation simply stops. Pork skin with a thin layer of attached fat, double-fried until each piece puffs and blisters into something between a crackling and a chip, then tossed while still smoking hot in a glaze of caramelised garlic and fish sauce that seizes onto every crevice.

The two-fry method is non-negotiable. The first fry cooks the skin through at moderate heat; the second, in hotter oil, forces the surface to blister and shatter. What emerges is a texture the Vietnamese call gion tan — crisp that dissolves on contact — which no single fry can produce. The mam toi glaze is five ingredients and two minutes, but it transforms a street-food snack into something worth making on a Sunday afternoon and eating standing over the pan before it even reaches the plate.`,
    ingredientSections: [
        {
            title: 'Bì heo',
            items: [
                { amount: 500, unit: 'g', name: 'pork skin with thin fat layer', note: '3–5mm fat attached is ideal; too thick stays chewy, too thin loses flavour' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tbsp', name: 'white vinegar', note: 'rubbed on skin before boiling to reduce odour' },
                { amount: 1, unit: 'tsp', name: 'white pepper' },
                { amount: 3, unit: 'tbsp', name: 'cornstarch', note: 'dusted on before second fry for extra crunch' },
                { amount: 600, unit: 'ml', name: 'neutral oil', note: 'for deep frying' },
            ],
        },
        {
            title: 'Mắm tỏi glaze',
            items: [
                { amount: 6, name: 'garlic cloves', note: '3 cloves minced fine, 3 cloves sliced thin' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce', note: 'Phu Quoc or Chin-su preferred' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'water' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
                { amount: 1, name: 'red bird\'s eye chilli', note: 'sliced thin, optional' },
            ],
        },
        {
            title: 'To finish',
            items: [
                { amount: 3, name: 'stalks spring onion', note: 'green parts sliced fine' },
                { amount: 1, unit: 'tbsp', name: 'toasted sesame seeds' },
                { amount: 1, name: 'fresh red chilli', note: 'sliced, for garnish' },
            ],
        },
    ],
    steps: [
        {
            title: 'Boil and dry the skin',
            description: 'Rub pork skin all over with white vinegar and salt. Place in a pot of cold water, bring to a boil, and simmer for 20 minutes until the skin is just tender but not falling apart. Drain and rinse under cold water. Pat completely dry with paper towels. Place on a wire rack uncovered in the refrigerator for at least 2 hours, or overnight — the drier the surface, the harder the crunch.',
            tip: 'This drying step is the most skipped and the most important. Moisture in the skin steam-fries instead of crisping. Overnight drying produces dramatically better results.',
        },
        {
            title: 'Score and season',
            description: 'Cut the dried skin into 4x5cm pieces. Use a sharp knife to score the fat side in a crosshatch pattern, cutting just into the fat without piercing through to the skin. Season lightly with white pepper. Dust all surfaces with a thin even coat of cornstarch and shake off the excess.',
        },
        {
            title: 'First fry — cook through',
            description: 'Heat oil to 160°C in a deep pan or wok. Fry the skin pieces in batches, fat side down first, for 6–8 minutes until cooked through and lightly golden. Do not crowd the pan. Remove with a slotted spoon and drain on a wire rack, not paper towels. Allow to cool completely — at least 15 minutes.',
            tip: 'Resting between fries allows steam to escape from inside the skin. If you rush to the second fry, the skin will be tough, not blistered.',
        },
        {
            title: 'Second fry — blister and crunch',
            description: 'Raise oil temperature to 190°C. Return the cooled skin pieces in small batches — no more than 5–6 pieces at a time. Fry for 2–3 minutes, turning once, until the surface bubbles aggressively and turns deep golden. The skin should visibly puff and blister. Remove immediately and drain on a wire rack. Work fast — they go from perfect to overdone in under 30 seconds.',
        },
        {
            title: 'Make the mắm tỏi glaze',
            description: 'In a small saucepan over medium heat, add 1 tbsp oil. Fry the sliced garlic until golden and just beginning to crisp, about 90 seconds. Add the minced garlic and stir for 30 seconds. Pour in fish sauce, sugar, and water. Stir until sugar dissolves and the sauce bubbles and thickens slightly, about 2 minutes. Add chilli. Remove from heat — the glaze will continue to thicken as it cools.',
            tip: 'The glaze should coat the back of a spoon. Too thin and it runs off the crispy skin; too thick and it clumps. Pull it off the heat just before it looks ready.',
        },
        {
            title: 'Toss and serve',
            description: 'Transfer the hot fried skin immediately into a large bowl. Pour the warm glaze over and toss quickly with tongs to coat every piece. The heat from the skin will help the glaze adhere. Transfer to a serving plate, scatter spring onion, sesame seeds, and fresh chilli over the top. Serve within 5 minutes — crispiness is at its peak right now.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
