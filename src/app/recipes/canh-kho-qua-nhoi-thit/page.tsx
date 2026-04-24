'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-kho-qua-nhoi-thit',
    title: 'Stuffed Bitter Melon Soup',
    subtitle:
        'Canh Khổ Qua Nhồi Thịt — whole bitter melons stuffed with seasoned pork and wood ear, simmered in clear pork broth until the skin turns jade-green and tender.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.6,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1547592180-85f173990554?w=1600&q=80',
    intro:
        'The name khổ qua literally means "bitterness passes." This is why it lands on the Southern Tết table every year — an edible prayer that the hardships of the previous twelve months leave with the old year. The bitterness is real, but it softens in the broth, and the pork filling brings sweetness that balances the whole bowl. A dish that tastes like symbolism and comfort in equal parts.',
    ingredientSections: [
        {
            title: 'Bitter melons',
            items: [
                { amount: 4, name: 'medium bitter melons', note: 'about 200g each' },
                { amount: 1, unit: 'tbsp', name: 'sea salt', note: 'for rubbing' },
            ],
        },
        {
            title: 'Pork filling',
            items: [
                { amount: 400, unit: 'g', name: 'ground pork', note: '20% fat' },
                { amount: 15, unit: 'g', name: 'dried wood ear mushrooms', note: 'soaked and minced' },
                { amount: 30, unit: 'g', name: 'glass noodles', note: 'soaked and cut short' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 1, name: 'egg', note: 'lightly beaten' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Broth',
            items: [
                { amount: 1.5, unit: 'L', name: 'pork bone stock', note: 'or water + bones' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, name: 'spring onions', note: 'sliced, for garnish' },
                { amount: 1, name: 'small bunch cilantro', note: 'chopped' },
                { amount: 0.5, unit: 'tsp', name: 'freshly cracked black pepper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Hollow the bitter melons',
            description: 'TODO — cut each melon in 3 rings; scoop seeds and white pith with a teaspoon.',
            tip: 'TODO — the whiter you scrape, the less bitter the final dish.',
        },
        {
            title: 'Tame the bitterness',
            description: 'TODO — rub hollowed rings with salt, rest 15 minutes, rinse. Optional: blanch 1 minute in boiling water.',
        },
        {
            title: 'Mix the filling',
            description: 'TODO — combine pork with wood ear, glass noodles, shallots, egg, fish sauce and seasonings. Knead 2 minutes until sticky.',
        },
        {
            title: 'Stuff the rings',
            description: 'TODO — press filling into each ring, mounding slightly above the rim.',
        },
        {
            title: 'Simmer in pork stock',
            description: 'TODO — lower stuffed rings into simmering stock; cook 30 minutes, skimming foam.',
            tip: 'TODO — do not let it boil hard or the filling will leak out.',
        },
        {
            title: 'Season and serve',
            description: 'TODO — adjust with fish sauce, scatter spring onion, cilantro and pepper; serve with steamed rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
