'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-nuong-la-lot',
    title: 'Beef in Betel Leaf',
    subtitle:
        'Bò Nướng Lá Lốt — seasoned ground beef wrapped in glossy betel leaves, grilled until the leaves blister and release their peppery aroma.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&q=80',
    intro:
        'Lá lốt is not the same plant as betel leaf (though everyone calls it that in English) — it is a wild piper relative with a distinct, peppery-woody perfume that only wakes up over direct flame. This is a party dish: made in batches, eaten with your hands, wrapped in rice paper with so many herbs and pickles you forget about the plate altogether.',
    ingredientSections: [
        {
            title: 'Filling',
            items: [
                { amount: 500, unit: 'g', name: 'ground beef', note: '20% fat' },
                { amount: 3, name: 'lemongrass stalks', note: 'white part, finely minced' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'five-spice powder' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Wrapping',
            items: [
                { amount: 30, name: 'lá lốt (wild betel) leaves', note: 'washed, stems trimmed' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for brushing' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'pack rice paper wrappers' },
                { amount: 300, unit: 'g', name: 'vermicelli noodles', note: 'cooked' },
                { amount: 1, name: 'platter of herbs', note: 'mint, perilla, lettuce, cucumber' },
                { amount: 1, name: 'bowl nước chấm or peanut-hoisin sauce' },
            ],
        },
    ],
    steps: [
        {
            title: 'Season and knead the filling',
            description: 'TODO — combine all filling ingredients; knead 2 minutes until sticky. Rest 15 minutes.',
            tip: 'TODO — kneading develops the bind so rolls hold together on the grill.',
        },
        {
            title: 'Prepare the leaves',
            description: 'TODO — lay leaves vein-side up, shiny side down.',
        },
        {
            title: 'Roll the parcels',
            description: 'TODO — 1 tablespoon filling near stem; roll tight, tuck sides, pierce with skewer in pairs.',
        },
        {
            title: 'Brush with oil and grill',
            description: 'TODO — oil keeps the leaves from burning. Grill over medium-hot coals 3 minutes per side.',
            tip: 'TODO — the leaf should blister and darken, not turn to ash.',
        },
        {
            title: 'Rest briefly',
            description: 'TODO — 2 minutes on a plate so the juices redistribute.',
        },
        {
            title: 'Build the table',
            description: 'TODO — serve rolls alongside rice paper, vermicelli, herbs and dip; everyone wraps their own.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
