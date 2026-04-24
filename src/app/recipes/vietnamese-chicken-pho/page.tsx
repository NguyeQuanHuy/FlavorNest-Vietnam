'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'vietnamese-chicken-pho',
    title: 'Vietnamese Chicken Pho',
    subtitle: 'Everything pho bo promises — lighter, faster, equally soul-warming.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '2 hrs 15 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?auto=format&fit=crop&w=1600&q=85',
    intro: `Pho ga became widely popular in Hanoi during periods of meat scarcity in the twentieth century, when beef was expensive and chicken was what the home cook had. What began as a pragmatic substitution became a dish beloved on its own terms. The broth is golden, the spice profile softer than beef pho, and the whole thing comes together in a fraction of the time.`,
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 1, name: 'whole chicken', note: 'about 1.5kg' },
                { amount: 2, unit: 'l', name: 'cold water' },
                { amount: 1, name: 'onion', note: 'halved, charred' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: 'halved, charred' },
                { amount: 3, name: 'star anise' },
                { amount: 1, name: 'cinnamon stick' },
                { amount: 3, name: 'cloves' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'rock sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Per bowl',
            items: [
                { amount: 80, unit: 'g', name: 'dried pho noodles', note: 'or 150g fresh' },
                { amount: 2, name: 'spring onions', note: 'sliced' },
                { amount: 1, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 1, name: 'bunch coriander' },
            ],
        },
    ],
    steps: [
        {
            title: 'Char aromatics and toast spices',
            description: 'Char onion and ginger directly over flame until blackened. Toast star anise, cinnamon, and cloves in a dry pan 2 minutes until fragrant.',
        },
        {
            title: 'Simmer the broth',
            description: 'Place whole chicken in a pot with cold water. Bring to a boil, skim foam, add charred aromatics and spices. Reduce to a gentle simmer for 1.5 hours. Remove chicken when cooked through.',
            tip: 'Never let the broth boil vigorously — it will turn cloudy. A gentle simmer keeps it golden and clear.',
        },
        {
            title: 'Shred the chicken',
            description: 'When cool enough to handle, shred the breast and thigh meat into thin pieces by hand.',
        },
        {
            title: 'Season and assemble',
            description: 'Strain broth and season with fish sauce, rock sugar, and salt. Cook noodles and divide into bowls. Top with shredded chicken, spring onions, shallots, and coriander. Pour boiling broth over at the table.',
        },
    ],
};
export default function Page() { return <RecipeLayout recipe={recipe} />; } 
