'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-thit-bam',
    title: 'Clear Soup with Minced Pork',
    subtitle:
        'Canh Thịt Băm — a gentle clear broth with minced pork poached into tender flecks, often brightened with winter melon or young mustard greens.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.5,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=1600&q=80',
    intro:
        'Canh thịt băm is the soup Vietnamese mothers make when they want something easy, comforting, and respectful of a small budget. It rarely makes it into cookbooks, and yet it probably appears on more Vietnamese dinner tables than any celebrated pho or bún. Unshowy, deeply home-cooking, and proof that the quietest dishes are often the ones that define a cuisine.',
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
            title: 'Vegetable (pick one)',
            items: [
                { amount: 400, unit: 'g', name: 'winter melon', note: 'peeled, cut in 2cm cubes' },
                { amount: 300, unit: 'g', name: 'young mustard greens', note: 'chopped — alternative' },
                { amount: 300, unit: 'g', name: 'bottle gourd', note: 'peeled, sliced — alternative' },
            ],
        },
        {
            title: 'Finish',
            items: [
                { amount: 2, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'small bunch cilantro', note: 'chopped' },
                { amount: 0.25, unit: 'tsp', name: 'freshly cracked black pepper' },
            ],
        },
    ],
    steps: [
    {
        title: 'Marinate the pork',
        description: 'In a small bowl, combine the minced pork with finely chopped shallots, fish sauce, a pinch of salt, and white pepper. Mix well and let the meat rest for 10 minutes to ensure the savory aromatics are fully absorbed into the protein.',
    },
    {
        title: 'Prep the vegetable',
        description: 'While the pork is marinating, peel the winter melon, remove the seeds, and cut it into bite-sized cubes. If you are using other vegetables like chayote or carrots, slice them into thin, even pieces to ensure they cook at the same rate.',
    },
    {
        title: 'Poach the pork into flecks',
        description: 'Bring a pot of water to a gentle simmer. Instead of adding the pork all at once, drop it in small, loose pinches while stirring the water constantly. This technique allows the meat to separate into tender, flavorful flecks that light up the broth.',
        tip: 'Dumping the pork in one large clump will cause it to bind together into a single, dense meatball. For a traditional "flecked" broth, the stirring motion is essential.',
    },
    {
        title: 'Skim carefully',
        description: 'As the water comes back to a boil, a layer of gray foam will rise to the top. Use a fine mesh spoon to skim this foam off for about 2 minutes until the broth runs perfectly clear and looks appetizing.',
    },
    {
        title: 'Simmer with the vegetable',
        description: 'Add the winter melon cubes to the pot and increase the heat slightly. Simmer for about 8 minutes—just long enough for the melon to become translucent and tender, but not so long that it loses its shape or collapses into a mush.',
    },
    {
        title: 'Season and serve',
        description: 'Taste the soup and add a splash more fish sauce if needed. Turn off the heat and scatter a handful of chopped spring onions, cilantro, and a dash of black pepper over the top. Serve hot as a refreshing balance to a salty main dish and rice.',
    },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
