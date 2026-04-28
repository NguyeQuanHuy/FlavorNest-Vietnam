'use client';

import RecipeLayout, { RecipeData } from '@/app/recipes/_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-nuong-sa-te',
    title: 'Sweet Leaf Soup with Minced Pork',
    subtitle:
        'Canh Rau Ngót Thịt Băm — a clear jade-green broth with bruised sweet leaves and tender flecks of minced pork, ready in twenty minutes.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.7,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1600&q=80',
    intro:
        'Rau ngót is one of those vegetables that never made it out of Vietnam, which is a shame — the leaves carry a mild, almost nutty sweetness that turns a plain pork broth into something quietly special. This is the Northern soup that appears on the table at least twice a week, not because it is celebrated, but because it is dependable: cooling in summer, nourishing in winter, and done in the time it takes to cook rice.',
    ingredientSections: [
        {
            title: 'Broth and pork',
            items: [
                { amount: 1.2, unit: 'L', name: 'water or light pork stock' },
                { amount: 200, unit: 'g', name: 'minced pork', note: '20% fat' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sea salt' },
                { amount: 0.25, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Sweet leaves',
            items: [
                { amount: 300, unit: 'g', name: 'sweet leaf (rau ngót)', note: 'stripped from stems, bruised by hand' },
            ],
        },
        {
            title: 'Finish',
            items: [
                { amount: 1, unit: 'tsp', name: 'neutral oil' },
                { amount: 0.25, unit: 'tsp', name: 'freshly cracked black pepper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean the squid',
            description: 'Rinse the squid thoroughly under cold water. Remove the innards, quill, and skin if desired. Pat dry with paper towels. Score the body lightly with diagonal cuts to help the marinade absorb better.',
            tip: 'TODO — bruising is what makes the leaves cook evenly and release flavour. Do not skip.',
        },
        {
            title: 'Prepare the satay marinade',
            description: 'In a bowl, mix:2 tbsp chili satay sauce, 1 tbsp soy sauce, 1 tbsp oyster sauce, 1 tsp garlic (minced), 1 tsp lemongrass (finely chopped), 1 tsp sugar, 1 tbsp lime juice, 1 tbsp vegetable oil. Stir until smooth and fragrant.',
        },
        {
            title: 'Marinate the squid',
            description: 'Place the squid into the marinade and coat evenly. Cover and let it rest for 30–60 minutes in the fridge. Don’t over-marinate, or the texture may become rubbery.',
            tip: 'TODO — dumping the pork in one clump gives you a meatball, not a flecked broth.',
        },
        {
            title: 'Preheat the grill',
            description: 'Heat your grill or grill pan to medium-high. Lightly oil the surface to prevent sticking and help create those beautiful char marks.',
        },
        {
            title: 'Grill the squid',
            description: 'Place squid on the hot grill. Cook for 2–3 minutes per side until it turns opaque and slightly charred. Avoid overcooking — squid becomes tough quickly if left too long.',
        },
        {
            title: 'Serve and finish',
            description: 'Remove from heat, slice into rings, and drizzle a little extra satay sauce or lime juice on top. Serve immediately with fresh herbs or cucumber for balance 🥒✨',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
