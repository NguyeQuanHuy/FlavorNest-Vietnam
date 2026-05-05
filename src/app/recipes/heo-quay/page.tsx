'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'heo-quay',
    title: 'Crispy Roasted Pork Belly',
subtitle: 
    'Crispy Roasted Pork Belly (Heo Quay) — a masterclass in textures featuring a gold-dusted, shatteringly crisp crackling atop succulent, five-spice infused pork belly.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '5 hours',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/heo-quay.jpg',
intro:
    'Crispy Roasted Pork Belly (Heo Quay) is the undisputed crown jewel of Vietnamese roasted meats, a dish where texture is just as important as taste. The magic lies in the contrast: a top layer of skin that shattered like glass upon the first bite, giving way to succulent, five-spice scented meat underneath. While it’s a staple of celebratory feasts and bustling street-side stalls, achieving that perfect, bubbly crackle at home is a rewarding ritual that transforms a simple slab of pork belly into an extraordinary centerpiece.',
ingredientSections: [
    {
        title: 'Main Meat',
        items: [
            { amount: 1, unit: 'kg', name: 'pork belly', note: 'choose a flat piece with even layers of fat and meat' },
            { amount: 1, unit: 'tbsp', name: 'white vinegar', note: 'to brush on the skin' },
            { amount: 1, unit: 'tsp', name: 'sea salt', note: 'for the skin crust' },
        ],
    },
    {
        title: 'Dry Rub Marinate',
        items: [
            { amount: 1, unit: 'tsp', name: 'five-spice powder' },
            { amount: 1, unit: 'tsp', name: 'garlic powder' },
            { amount: 0.5, unit: 'tsp', name: 'sugar' },
            { amount: 0.5, unit: 'tsp', name: 'ground white pepper' },
            { amount: 1, unit: 'tsp', name: 'salt' },
        ],
    },
    {
        title: 'Aromatics and Sauces',
        items: [
            { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
            { amount: 1, unit: 'tsp', name: 'shaoxing wine', note: 'optional, for aroma' },
            { amount: 2, name: 'fermented red bean curd', note: 'optional, for authentic flavor' },
        ],
    },
],
  steps: [
        {
            title: 'Prep and parboil the skin',
            description: 'Clean the pork belly thoroughly; place it skin-side down in a shallow pan of simmering water for 5 minutes until the skin softens and turns opaque.',
            tip: 'Only parboil the skin layer; keeping the meat raw at this stage ensures it remains juicy after the long roasting process.',
        },
        {
            title: 'Score and dry the skin',
            description: 'Use a meat tenderizer or a bundle of skewers to prick the skin surface intensely. Use a paper towel to wipe away any rendered fat or moisture that leaks out.',
            tip: 'The more densely you prick the skin, the better it will crackle. Avoid piercing too deep into the meat, as escaping juices will make the skin chewy.',
        },
        {
            title: 'Marinate the meat',
            description: 'Flip the pork and score the meat in parallel lines. Rub a blend of five-spice powder, salt, garlic powder, and oyster sauce into the flesh, ensuring no marinade touches the skin.',
        },
        {
            title: 'Treat the skin with vinegar',
            description: 'Brush a mixture of white vinegar and salt onto the skin. Leave the pork uncovered in the refrigerator for at least 4 hours (or overnight) to allow the skin to air-dry completely.',
            tip: 'A bone-dry, chilled skin is the absolute secret to achieving that iconic, bubbly "shatter-crisp" texture.',
        },
        {
            title: 'First roast: Cook through',
            description: 'Wrap the bottom and sides of the pork in aluminum foil to create a tray, leaving only the skin exposed. Roast at 180°C (350°F) for 30–40 minutes.',
        },
        {
            title: 'Second roast: The crackling',
            description: 'Increase the temperature to 220°C (430°F). Roast for another 15–20 minutes until the skin puffed up and turns a deep golden brown.',
            tip: 'Watch the oven closely during this stage; the transition from perfectly golden to burnt happens very quickly.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
