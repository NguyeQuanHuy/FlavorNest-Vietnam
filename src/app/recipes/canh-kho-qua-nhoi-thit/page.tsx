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
            description: 'Cut each bitter melon into 3 or 4 even rings. Use the handle of a teaspoon to carefully scoop out the seeds and the spongy white pith from the center of each segment.',
            tip: 'The whiter you scrape, the less bitter the final dish. That inner white lining holds the majority of the melon’s intense bitterness, so a clean scrape ensures a milder, more balanced flavor.',
        },
        {
            title: 'Tame the bitterness',
            description: 'Rub the hollowed rings thoroughly with salt and let them rest for 15 minutes to draw out the bitter juices, then rinse under cold water. For an even milder taste, blanch the rings in boiling water for 1 minute before stuffing.',
        },
        {
            title: 'Mix the filling',
            description: 'In a mixing bowl, combine ground pork with rehydrated wood ear mushrooms, chopped glass noodles, minced shallots, an egg, fish sauce, and a pinch of sugar. Knead the mixture by hand for about 2 minutes until it becomes tacky and sticky.',
        },
        {
            title: 'Stuff the rings',
            description: 'Carefully press the pork filling into the hollowed centers of each ring. Use your thumb to pack it tightly so there are no air pockets, mounding the filling slightly above the rim for a professional, rounded look.',
        },
        {
            title: 'Simmer in pork stock',
            description: 'Gently lower the stuffed rings into a pot of simmering pork or chicken stock. Cook over medium-low heat for about 30 minutes, frequently skimming the foam off the surface to keep the broth crystal clear.',
            tip: 'Do not let the soup boil hard; a rolling boil can cause the meat to expand too quickly and leak out of the rings. Keep it at a gentle simmer to ensure the melon softens without falling apart.',
        },
        {
            title: 'Season and serve',
            description: 'Taste the broth and adjust the seasoning with a splash of fish sauce and a pinch of salt. Scatter a handful of chopped spring onions, cilantro, and freshly cracked black pepper over the top before serving hot with steamed jasmine rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
