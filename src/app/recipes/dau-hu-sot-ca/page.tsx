'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'dau-hu-sot-ca',
    title: 'Tofu in Tomato Sauce',
    subtitle:
        'Đậu Hũ Sốt Cà — golden-fried tofu simmered in a sweet-savoury tomato and spring onion sauce.',
    category: 'VEGETARIAN',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/dau-hu-sot-ca.jpg',
    intro:
        'Đậu sốt cà is the dish that converts tofu sceptics. The secret is treating it like meat — fried hard first so the outside turns custardy-crisp, then simmered just long enough to drink in the tomato sauce without going soggy. In Northern families it is on the table at least once a week, often without anyone planning it.',
    ingredientSections: [
        {
            title: 'Tofu',
            items: [
                { amount: 500, unit: 'g', name: 'firm tofu', note: 'cut in 3cm cubes, patted dry' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'for frying' },
                { amount: 0.5, unit: 'tsp', name: 'sea salt' },
            ],
        },
        {
            title: 'Tomato sauce',
            items: [
                { amount: 5, name: 'ripe tomatoes', note: 'cut in wedges' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce', note: 'or fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 100, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tsp', name: 'tomato paste' },
            ],
        },
        {
            title: 'Finish',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 0.5, unit: 'tsp', name: 'cracked black pepper' },
            ],
        },
    ],
     steps: [
            {
                title: 'Press and dry the tofu',
                description: 'Cut the tofu into bite-sized cubes and sandwich them between layers of paper towels or a clean kitchen cloth. Place a heavy plate on top for about 15 minutes to squeeze out the excess moisture.',
                tip: 'Wet tofu never crisps. Removing the internal water not only helps it brown better but also creates a "sponge" effect so the tofu can soak up more tomato sauce later.',
            },
            {
                title: 'Fry to golden crust',
                description: 'Heat oil in a pan over medium-high heat. Carefully add the tofu cubes and fry for about 2-3 minutes per side until each face has a light golden-brown, crispy crust. Drain the cubes on paper towels to remove excess grease.',
                tip: 'Don’t crowd the pan; if the temperature drops too much, the tofu will boil in the oil rather than fry, resulting in a soggy texture.',
            },
            {
                title: 'Soften the shallots',
                description: 'Wipe the pan or leave a tablespoon of oil. Add the finely minced shallots and garlic, sautéing them over medium heat until they become translucent, soft, and highly fragrant.',
                tip: 'Low and slow is key here; you want to extract the sweetness of the shallots without burning the garlic.',
            },
            {
                title: 'Collapse the tomatoes',
                description: 'Add the tomato wedges, a teaspoon of tomato paste for color, soy sauce, and a pinch of sugar. Stir frequently and cook for about 7 minutes, mashing some of the tomatoes with your spatula until they collapse into a rich, pulpy sauce.',
                tip: 'Add a small splash of water if the pan looks too dry to help the tomatoes break down into a smooth consistency.',
            },
            {
                title: 'Return the tofu',
                description: 'Gently fold the fried tofu cubes back into the pan, ensuring each piece is well-coated. Simmer for 3 minutes over low heat so the tofu "drinks" the flavor of the sauce while retaining its structure.',
                tip: 'Keep an eye on the clock: simmer for no longer than 5 minutes, or the crispy crust will dissolve and the tofu will become mushy.',
            },
            {
                title: 'Scatter and serve',
                description: 'Turn off the heat and scatter a handful of chopped spring onions and a generous crack of black pepper over the top. Serve immediately in a shallow bowl alongside steaming hot jasmine rice.',
                tip: 'For an extra touch of freshness, you can also add a few sprigs of cilantro (coriander) right before serving.',
            },
        ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
