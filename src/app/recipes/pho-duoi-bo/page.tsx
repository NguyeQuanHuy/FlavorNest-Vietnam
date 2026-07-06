'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'pho-duoi-bo',
    title: 'Oxtail Pho (Pho Duoi Bo)',
    subtitle: 'Rich, slow-simmered beef oxtail pho with deep broth, tender meat, and aromatic spices.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '240 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/pho-duoi-bo.jpg',

    intro: `Phở đuôi bò is a rich and deeply flavorful variation of traditional Vietnamese pho, made using beef oxtail.

The long simmering process extracts collagen and marrow from the bones, resulting in a thick, silky, and intensely aromatic broth. The dish is hearty, comforting, and highly prized for its depth of flavor.`,

    ingredientSections: [
        {
            title: 'Broth base',
            items: [
                { amount: 1.2, unit: 'kg', name: 'beef oxtail' },
                { amount: 1, name: 'beef bones', note: 'optional for extra depth' },
                { amount: 2, name: 'onions', note: 'charred' },
                { amount: 1, name: 'ginger knob', note: 'charred and smashed' },
            ],
        },
        {
            title: 'Spices',
            items: [
                { amount: 2, name: 'star anise' },
                { amount: 1, name: 'cinnamon stick' },
                { amount: 4, name: 'cloves' },
                { amount: 1, name: 'cardamom pod' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 400, unit: 'g', name: 'pho noodles' },
                { amount: 1, name: 'bean sprouts' },
                { amount: 1, name: 'Thai basil & cilantro' },
                { amount: 2, name: 'lime' },
                { amount: 2, name: 'chilies' },
            ],
        },
    ],

    steps: [
        {
            title: 'Blanch oxtail',
            description: 'Boil oxtail briefly to remove impurities, then rinse clean.',
        },
        {
            title: 'Char aromatics',
            description: 'Grill onion and ginger until slightly blackened for deeper broth flavor.',
        },
        {
            title: 'Simmer broth',
            description: 'Simmer oxtail, bones, aromatics, and spices for 3–4 hours.',
            tip: 'Low heat is essential to keep broth clear and rich.',
        },
        {
            title: 'Season broth',
            description: 'Add fish sauce, salt, and sugar. Adjust to taste.',
        },
        {
            title: 'Prepare noodles',
            description: 'Blanch rice noodles until soft and drain.',
        },
        {
            title: 'Assemble bowl',
            description: 'Place noodles in bowl, add oxtail meat, then pour hot broth over.',
        },
        {
            title: 'Serve',
            description: 'Serve with herbs, lime, and chili for freshness.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
