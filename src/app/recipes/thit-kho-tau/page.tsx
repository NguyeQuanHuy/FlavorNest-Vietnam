'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'thit-kho-tau',
    title: 'Caramelised Pork and Eggs',
    subtitle: 'The dish that defines comfort food in Southern Vietnam.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=1600&q=85',
    intro: `Thit kho tau is the dish every Vietnamese family makes for Tet and every other time the house needs to feel like home. Pork belly and hard-boiled eggs slow-braised in coconut water with fish sauce and caramel until the sauce reduces to a dark, glossy coating and the pork fat turns translucent and trembling. The eggs absorb the colour of the broth and take on a faint sweetness. It is eaten over steamed rice with a side of pickled mustard greens to cut the richness. No other dish in the Southern repertoire says family quite as loudly.`,
    ingredientSections: [
        {
            title: 'Main',
            items: [
                { amount: 700, unit: 'g', name: 'pork belly', note: 'skin on, cut into 4cm pieces' },
                { amount: 6, name: 'eggs', note: 'hard-boiled and peeled' },
                { amount: 400, unit: 'ml', name: 'young coconut water', note: 'fresh or canned, not coconut milk' },
                { amount: 200, unit: 'ml', name: 'water' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'for caramel' },
                { amount: 1, unit: 'tbsp', name: 'sugar', note: 'for seasoning' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'pinch of pepper' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch spring onions', note: 'sliced' },
                { amount: 200, unit: 'g', name: 'pickled mustard greens (dua cai)', note: 'served alongside' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the pork',
            description: 'Place pork belly in a pot of cold water. Bring to a boil and cook 5 minutes. Drain and rinse under cold water. Pat dry. This removes impurities and firms the skin.',
        },
        {
            title: 'Make the caramel',
            description: 'Heat a heavy pot or clay pot over medium heat. Add 2 tablespoons sugar and cook without stirring until it melts and turns deep amber. Swirl the pot gently if needed. The caramel should be the colour of dark honey — not pale, not burnt.',
            tip: 'The caramel is the foundation of the dish. Pale caramel gives no depth; burnt caramel makes the whole pot bitter. Watch it closely.',
        },
        {
            title: 'Brown the pork',
            description: 'Add shallots and garlic to the caramel and stir quickly for 30 seconds. Add pork belly and toss to coat in the caramel. Sear over medium-high heat for 3 to 4 minutes until the pork is golden on all sides.',
        },
        {
            title: 'Braise in coconut water',
            description: 'Pour in coconut water, water, fish sauce, and remaining sugar. Bring to a boil, skim foam, then reduce to a low simmer. Add peeled boiled eggs. Cover and cook for 45 minutes, turning eggs occasionally so they colour evenly.',
            tip: 'Young coconut water is essential. It adds a natural sweetness and keeps the broth light. Do not substitute with coconut milk.',
        },
        {
            title: 'Reduce the sauce',
            description: 'Remove lid and increase heat to medium. Cook uncovered for 15 to 20 minutes until the sauce reduces by half and becomes glossy and coating. Taste and adjust fish sauce. The sauce should cling to the pork and eggs like lacquer.',
        },
        {
            title: 'Serve',
            description: 'Scatter spring onions over the top. Serve hot over steamed jasmine rice with pickled mustard greens on the side. Thit kho tau is even better the next day as the flavours deepen overnight.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
