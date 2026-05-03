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
    heroImage: '/images/recipes/bo-nuong-la-lot.jpg',
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
            description: 'In a large bowl, combine ground beef with minced lemongrass, garlic, shallots, soy sauce, and a touch of five-spice powder. Knead the mixture vigorously for about 2 minutes until it becomes tacky and sticky. Let it rest for 15 minutes to allow the spices to meld.',
            tip: 'Kneading develops the protein bind, acting like a natural glue so the rolls hold their shape and stay juicy on the grill instead of crumbling.',
        },
        {
            title: 'Prepare the leaves',
            description: 'Wash the Piper sarmentosum (Lá Lốt) leaves carefully and pat them dry. Lay each leaf flat on your workspace with the matte, textured vein-side facing up and the vibrant, shiny side facing down.',
            tip: 'If the leaves are too stiff to roll, blanch them in hot water for 2 seconds or leave them out to wilt slightly so they become more pliable.',
        },
        {
            title: 'Roll the parcels',
            description: 'Place about one tablespoon of the beef filling near the stem end of the leaf. Roll it tightly toward the tip, tucking the sides in as you go. Secure the roll by piercing it through the center with a bamboo skewer, grouping them in pairs to make flipping easier.',
            tip: 'Keep the rolls uniform in size to ensure they all cook through at the same rate on the grill.',
        },
        {
            title: 'Brush with oil and grill',
            description: 'Lightly brush each parcel with neutral oil to keep the leaves from burning. Place the skewers over medium-hot coals or a grill pan, cooking for about 3 minutes per side until the beef is firm and the leaves are fragrant.',
            tip: 'The goal is for the leaf to blister and darken into a deep forest green, releasing its signature peppery aroma, without letting it turn to ash.',
        },
        {
            title: 'Rest briefly',
            description: 'Remove the skewers from the heat and let the rolls rest on a warm plate for about 2 minutes. This allows the internal juices to redistribute, ensuring every bite is moist.',
            tip: 'During this time, the residual heat finishes cooking the very center of the beef without drying out the exterior.',
        },
        {
            title: 'Build the table',
            description: 'Arrange the hot rolls on a platter alongside rice paper, thin vermicelli noodles (bánh hỏi), a variety of fresh herbs, and a bowl of Mắm Nêm (fermented pineapple anchovy dip) so everyone can wrap their own rolls at the table.',
            tip: 'For the best experience, include starfruit or green banana slices in your herb platter to provide a sour and astringent contrast to the savory beef.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
