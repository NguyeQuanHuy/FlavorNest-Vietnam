'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-rau-ngot-thit-bam',
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
            title: 'Bruise the sweet leaves',
            description: 'Strip the green leaves from the tough woody stems and wash them thoroughly. Take handfuls of the leaves and rub them firmly between your palms until they are slightly crushed and turn a darker, bruised green.',
            tip: 'Bruising is what makes the leaves cook evenly and release their natural sweetness into the broth. If left whole and unbruised, the leaves can remain tough and chewy even after boiling. Do not skip this step.',
        },
        {
            title: 'Marinate the pork',
            description: 'In a small bowl, mix the minced pork with finely chopped shallots, a splash of fish sauce, a pinch of salt, and a dash of white pepper. Let the meat rest for 10 minutes to allow the aromatics to season the protein.',
        },
        {
            title: 'Render the pork into the broth',
            description: 'Bring a pot of water to a gentle simmer. Instead of dropping the meat in all at once, add the pork in small, loose pinches while stirring the water constantly. This technique allows the pork to poach into tender, separate flecks throughout the soup.',
            tip: 'Dumping the pork in one large clump gives you a single, dense meatball rather than a delicate, flecked broth that distributes the savory flavor in every spoonful.',
        },
        {
            title: 'Skim and season',
            description: 'As the water comes back to a boil, skim off any gray foam that rises to the surface for about 2 minutes to ensure a clear broth. Taste and adjust the seasoning with a little more fish sauce or salt to your preference.',
        },
        {
            title: 'Add the sweet leaves',
            description: 'Stir in the bruised rau ngót leaves and bring the heat up slightly. Simmer for only 3 minutes until the leaves are a vibrant deep green and just tender enough to eat.',
        },
        {
            title: 'Finish and serve',
            description: 'Turn off the heat and finish with a tiny drizzle of cooking oil for a glossy look and a fresh crack of black pepper. Serve hot as a cooling balance alongside steamed rice and a salty main dish like caramelized pork or fish.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
