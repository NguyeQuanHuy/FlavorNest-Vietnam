'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'vegetarian-pho',
    title: 'Mushroom and Tofu Vegetarian Pho',
    subtitle: 'Every bit as aromatic as the original — entirely plant-based.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 20 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/vegetarian-pho.jpg',
    intro: `The pho spice bundle — star anise, cinnamon, cloves, cardamom, charred ginger — is what makes pho taste like pho, not the beef. This version builds its broth on mushroom and kombu dashi, adds miso for depth, and delivers a bowl that is genuinely extraordinary on its own terms. Not a compromise. An alternative.`,
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 20, unit: 'g', name: 'dried shiitake mushrooms' },
                { amount: 10, unit: 'g', name: 'kombu seaweed' },
                { amount: 2, unit: 'l', name: 'water' },
                { amount: 1, name: 'onion', note: 'halved, charred' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'charred' },
                { amount: 3, name: 'star anise' },
                { amount: 1, name: 'cinnamon stick' },
                { amount: 3, name: 'cloves' },
                { amount: 1, name: 'black cardamom pod' },
                { amount: 2, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'white miso' },
                { amount: 1, unit: 'tsp', name: 'rock sugar' },
            ],
        },
        {
            title: 'Per bowl',
            items: [
                { amount: 80, unit: 'g', name: 'dried pho noodles' },
                { amount: 150, unit: 'g', name: 'firm tofu', note: 'sliced and pan-fried golden' },
                { amount: 60, unit: 'g', name: 'fresh shiitake or enoki mushrooms' },
                { amount: 2, name: 'spring onions', note: 'sliced' },
                { amount: 1, unit: 'tbsp', name: 'crispy fried shallots' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the dashi base',
            description: 'Soak dried shiitake and kombu in cold water for 30 minutes. Bring to a gentle simmer for 20 minutes. Remove kombu before boiling. Strain and reserve the mushrooms.',
        },
        {
            title: 'Build the spiced broth',
            description: 'Add charred onion and ginger, star anise, cinnamon, cloves, and cardamom to the dashi. Simmer 20 minutes. Strain through fine mesh sieve.',
        },
        {
            title: 'Season',
            description: 'Stir in soy sauce, miso, and rock sugar. Taste carefully and adjust. The broth should be deeply savoury with a clean, aromatic finish.',
            tip: 'Dissolve miso in a small amount of warm broth before adding to avoid lumps.',
        },
        {
            title: 'Assemble',
            description: 'Cook noodles and divide into bowls. Top with pan-fried tofu, fresh mushrooms, and spring onions. Pour boiling broth over at the table. Add fried shallots and serve with bean sprouts and lime.',
        },
    ],
};
export default function Page() { return <RecipeLayout recipe={recipe} />; } 
