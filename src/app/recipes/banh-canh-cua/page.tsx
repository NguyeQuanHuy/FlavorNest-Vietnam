'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-canh-cua',
    title: 'Thick Tapioca Noodles with Crab',
    subtitle:
        'Bánh Canh Cua — fat chewy tapioca noodles suspended in a velvety orange crab broth, topped with mud crab, quail eggs and pork knuckle.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.7,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?w=1600&q=80',
    intro:
        'Bánh canh cua is the noodle dish Saigon reaches for when the rain comes down sideways. The broth is thickened to a near-gravy with tapioca slurry and stained orange with crab fat; the noodles themselves are slippery, chewy logs that refuse to stay on chopsticks. Every mouthful is rich, briny and unapologetically filling.',
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 500, unit: 'g', name: 'pork knuckle or trotter', note: 'cut in chunks' },
                { amount: 2, unit: 'L', name: 'water' },
                { amount: 1, name: 'yellow onion', note: 'halved' },
                { amount: 1, unit: 'tbsp', name: 'rock sugar' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
            ],
        },
        {
            title: 'Crab and thickener',
            items: [
                { amount: 2, name: 'whole mud crabs', note: 'cleaned, cut in quarters' },
                { amount: 3, unit: 'tbsp', name: 'crab fat (gạch cua)', note: 'or crab paste' },
                { amount: 2, unit: 'tbsp', name: 'annatto oil' },
                { amount: 4, unit: 'tbsp', name: 'tapioca starch', note: 'mixed with 100ml water' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 600, unit: 'g', name: 'bánh canh noodles', note: 'thick tapioca-rice noodles' },
                { amount: 12, name: 'boiled quail eggs', note: 'peeled' },
                { amount: 200, unit: 'g', name: 'minced pork and shrimp meatballs' },
                { amount: 1, name: 'bunch cilantro', note: 'chopped' },
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 1, unit: 'tsp', name: 'freshly cracked black pepper' },
                { amount: 2, name: 'limes', note: 'cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Simmer the pork stock',
            description: 'TODO — blanch pork knuckle, refresh, then simmer 45 minutes with onion until broth is sweet.',
            tip: 'TODO — skim aggressively in the first 10 minutes for a clean broth.',
        },
        {
            title: 'Steam the crab',
            description: 'TODO — steam crab pieces 10 minutes; reserve shells and fat separately.',
        },
        {
            title: 'Bloom the crab fat',
            description: 'TODO — warm annatto oil gently, stir in crab fat until fragrant and deep orange.',
            tip: 'TODO — do not fry hot or the fat turns bitter.',
        },
        {
            title: 'Build and thicken',
            description: 'TODO — strain pork broth, add crab oil and fish sauce; whisk in tapioca slurry until glossy.',
        },
        {
            title: 'Cook the noodles and meatballs',
            description: 'TODO — blanch bánh canh 2 minutes; poach meatballs in broth until they float.',
        },
        {
            title: 'Assemble',
            description: 'TODO — noodles in bowls, crab and meatballs over, ladle broth, top with quail eggs, herbs and pepper.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
