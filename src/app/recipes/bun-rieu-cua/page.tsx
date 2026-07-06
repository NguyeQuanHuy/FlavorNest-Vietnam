'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-rieu-cua',
    title: 'Crab and Tomato Vermicelli Soup',
    subtitle: `Vietnam's most vibrant soup — tangy tomatoes, fluffy crab cakes, and a mountain of herbs.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 20 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/bun-rieu-cua.jpg',
    intro: `If pho is the meditative monk of Vietnamese soups — patient, restrained — then bun rieu cua is its loud, joyful, market-day cousin. Vivid scarlet from fresh tomatoes and annatto oil, built on a pork and crab broth, with fluffy crab-and-pork dumplings that bloom in the simmering liquid. A mountain of herbs, tofu, and shrimp paste on the side. It announces itself before you see it.`,
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 500, unit: 'g', name: 'pork ribs or neck bones' },
                { amount: 1.5, unit: 'l', name: 'water' },
                { amount: 2, unit: 'tbsp', name: 'annatto oil', note: 'or 1 tsp turmeric in vegetable oil' },
                { amount: 4, name: 'tomatoes', note: 'cut into wedges' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Crab dumplings',
            items: [
                { amount: 200, unit: 'g', name: 'crab paste (gach cua)', note: 'canned or fresh' },
                { amount: 150, unit: 'g', name: 'ground pork' },
                { amount: 2, name: 'eggs' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, name: 'pinch of pepper' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 400, unit: 'g', name: 'rice vermicelli', note: 'cooked' },
                { amount: 200, unit: 'g', name: 'firm tofu', note: 'fried golden' },
                { amount: 1, name: 'bunch bean sprouts, perilla, and mint' },
                { amount: 1, unit: 'tbsp', name: 'mam tom (shrimp paste)', note: 'optional, served on side' },
                { amount: 2, name: 'limes', note: 'cut into wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the broth',
            description: 'Simmer pork bones in water for 45 minutes, skimming foam. Season with fish sauce and sugar. Keep hot.',
        },
        {
            title: 'Fry the tomatoes',
            description: 'Heat annatto oil in a pan. Add tomato wedges and fry over high heat for 3 to 4 minutes until softened and slightly caramelised. Add to the broth.',
        },
        {
            title: 'Make the crab dumplings',
            description: 'Mix crab paste, ground pork, eggs, fish sauce, and pepper until combined. The mixture will be loose — that is correct.',
        },
        {
            title: 'Cook the dumplings',
            description: 'Bring broth to a gentle simmer. Drop crab mixture by the spoonful into the broth. The dumplings will rise and set into soft, fluffy cakes — about 5 minutes.',
            tip: 'Do not stir after adding the crab mixture — let the dumplings set undisturbed.',
        },
        {
            title: 'Assemble',
            description: 'Divide vermicelli into bowls. Add crab dumplings and fried tofu. Ladle hot broth and tomatoes over. Serve with herbs, bean sprouts, lime, and mam tom on the side.',
        },
    ],
};
export default function Page() { return <RecipeLayout recipe={recipe} />; } 
