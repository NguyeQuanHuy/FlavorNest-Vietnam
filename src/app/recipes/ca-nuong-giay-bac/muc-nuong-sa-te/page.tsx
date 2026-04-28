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
            title: 'Bruise the sweet leaves',
            description: 'TODO — strip leaves from stems; rub between palms until the leaves darken slightly.',
            tip: 'TODO — bruising is what makes the leaves cook evenly and release flavour. Do not skip.',
        },
        {
            title: 'Marinate the pork',
            description: 'TODO — mix pork with shallots, fish sauce, salt and white pepper; rest 10 minutes.',
        },
        {
            title: 'Render the pork into the broth',
            description: 'TODO — bring water to a simmer, drop pork in small pinches while stirring so it poaches into tender flecks.',
            tip: 'TODO — dumping the pork in one clump gives you a meatball, not a flecked broth.',
        },
        {
            title: 'Skim and season',
            description: 'TODO — skim foam for 2 minutes; taste and adjust fish sauce.',
        },
        {
            title: 'Add the sweet leaves',
            description: 'TODO — stir in rau ngót, simmer 3 minutes only until leaves are deep green and just tender.',
        },
        {
            title: 'Finish and serve',
            description: 'TODO — off heat, drizzle oil and crack pepper; serve alongside rice and a salty dish.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
