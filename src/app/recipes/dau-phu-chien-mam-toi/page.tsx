'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'dau-phu-chien-mam-toi',
    title: 'Crispy Tofu with Garlic Fish Sauce',
    subtitle: 'Đậu phụ chiên mắm tỏi — vàng giòn, thấm mắm, đơn giản mà nghiện.',
    category: 'VEGETARIAN',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1600&q=85',
    intro: `Dau phu chien mam toi is the dish that converts tofu skeptics. Not because it disguises what tofu is, but because it reveals what tofu can be when treated with heat and confidence — a golden, shatteringly crisp exterior giving way to a soft, silken interior, every surface lacquered in a glaze of caramelised garlic and fish sauce that clings and perfumes without overpowering.

This is weeknight Vietnamese cooking at its most honest. Five ingredients, one pan, twenty minutes. The technique is simple but the details matter: tofu must be pressed genuinely dry or it will steam and stick rather than crisp; the oil must be properly hot before the tofu goes in; and the glaze must be added off the highest heat so the garlic finishes golden rather than burnt. Get those three things right and the result is a plate that disappears faster than anything more complicated. Eaten over white rice with sliced cucumber and a bowl of clear broth, it is the kind of meal that feels complete without effort.`,
    ingredientSections: [
        {
            title: 'Đậu phụ',
            items: [
                { amount: 400, unit: 'g', name: 'firm tofu (đậu phụ cứng)', note: 'not silken — needs to hold its shape during frying' },
                { amount: 0.5, unit: 'tsp', name: 'salt', note: 'for pressing' },
                { amount: 3, unit: 'tbsp', name: 'cornstarch', note: 'dusted on all surfaces before frying — the key to shattering crunch' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'enough to shallow-fry; more oil = more even crust' },
            ],
        },
        {
            title: 'Mắm tỏi glaze',
            items: [
                { amount: 5, name: 'garlic cloves', note: '3 minced fine, 2 sliced thin' },
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce', note: 'Phu Quoc or Chin-su preferred' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 1.5, unit: 'tbsp', name: 'water' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
                { amount: 1, name: 'red bird\'s eye chilli', note: 'sliced, optional' },
            ],
        },
        {
            title: 'To finish',
            items: [
                { amount: 3, name: 'stalks spring onion', note: 'green parts sliced fine' },
                { amount: 1, unit: 'tbsp', name: 'toasted sesame seeds' },
                { amount: 1, name: 'fresh red chilli', note: 'sliced thin, for garnish' },
            ],
        },
    ],
    steps: [
        {
            title: 'Press the tofu',
            description: 'Remove tofu from packaging and place on a clean kitchen towel or several layers of paper towels. Fold the towel over the top and place a heavy pan or chopping board on top. Press for at least 20 minutes — 30 is better. The goal is to remove as much surface and internal moisture as possible. Cut the pressed tofu into cubes roughly 3x3cm, or into rectangular slabs 1.5cm thick.',
            tip: 'Skipping the press is the single most common tofu mistake. Wet tofu hitting hot oil spatters dangerously, steams instead of fries, and produces a soft grey surface instead of a golden crust. Press properly and the difference is immediate.',
        },
        {
            title: 'Dust with cornstarch',
            description: 'Season the tofu pieces lightly with salt. Spread cornstarch on a flat plate and roll each piece to coat all surfaces evenly, shaking off any excess. The layer should be thin and even — a thick uneven coat will turn gummy rather than crisp.',
        },
        {
            title: 'Fry the tofu',
            description: 'Heat oil in a non-stick or cast iron pan over medium-high heat until shimmering and a small piece of tofu dropped in sizzles immediately. Add tofu pieces in a single layer without touching. Fry undisturbed for 3–4 minutes until the underside is deep golden. Turn each piece and fry the remaining sides, 2 minutes per side, until all surfaces are evenly golden and crisp. Remove and drain on a wire rack.',
            tip: 'Do not move the tofu for the first 3 minutes. It will stick initially then release naturally once the crust forms. Forcing it off early tears the crust. If it resists, wait.',
        },
        {
            title: 'Make the mắm tỏi glaze',
            description: 'In a small saucepan over medium heat, add 1 tbsp oil. Fry the sliced garlic until golden and just starting to crisp at the edges, about 90 seconds. Add the minced garlic and stir for 30 seconds until fragrant. Pour in fish sauce, sugar, and water. Stir until sugar dissolves completely and the sauce bubbles and reduces slightly, about 2 minutes. Add chilli if using. The glaze is ready when it coats a spoon lightly.',
            tip: 'Watch the sliced garlic closely — the window between golden and burnt is about 20 seconds. Pull the pan off the heat if it is colouring too fast.',
        },
        {
            title: 'Glaze and serve',
            description: 'Transfer the hot crispy tofu to a serving plate or back into the pan off the heat. Pour the warm glaze over immediately and toss gently to coat every surface. The cornstarch crust will absorb just enough glaze to become sticky and lacquered without going soft. Scatter spring onion, sesame seeds, and fresh chilli over the top. Serve within 3 minutes — the crust is at its peak right now.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
