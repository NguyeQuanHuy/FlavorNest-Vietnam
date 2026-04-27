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
            description: 'Blanch the pork knuckles in boiling water for 5 minutes, then refresh under cold water. Simmer them again in fresh water for about 45 minutes with a charred onion and dried shrimp until the broth is naturally sweet and the meat is tender.',
            tip: 'Skim the surface aggressively in the first 10 minutes of simmering to remove all impurities. This ensures the base of your broth remains clean and ready to absorb the seafood flavors.',
        },
        {
            title: 'Steam the crab',
            description: 'Steam whole crabs or crab pieces for about 10 minutes. Once cooled, carefully extract the meat, keeping the leg segments intact, and reserve the shells to further flavor the stock. Be sure to scrape out and save the creamy crab fat (roe) separately.',
        },
        {
            title: 'Bloom the crab fat',
            description: 'Warm a tablespoon of annatto oil in a small pan over low heat, then gently stir in the reserved crab fat. Sauté for a minute until the oil becomes fragrant and takes on a deep, vibrant orange hue.',
            tip: 'Low temperature is crucial here; do not fry the crab fat at high heat or the delicate oils will scorch and turn bitter, ruining the richness of the soup.',
        },
        {
            title: 'Build and thicken',
            description: 'Strain the pork broth into a clean pot and stir in the bloomed crab fat and fish sauce. Slowly whisk in a tapioca starch slurry while simmering until the broth transforms from a thin liquid into a glossy, thick, and silky consistency.',
        },
        {
            title: 'Cook the noodles and meatballs',
            description: 'Blanch the thick tapioca noodles (bánh canh) for 2 minutes until translucent. Meanwhile, drop shrimp or pork meatballs into the bubbling broth, poaching them until they float to the surface, signaling they are cooked through.',
        },
        {
            title: 'Assemble',
            description: 'Arrange the noodles in bowls and top with generous portions of crab meat, meatballs, and peeled quail eggs. Ladle the thick, orange-tinted broth over the top and garnish with chopped scallions, cilantro, and a heavy dust of white pepper.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
