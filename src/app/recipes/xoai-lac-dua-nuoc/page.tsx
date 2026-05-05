'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'xoai-lac-dua-nuoc',
    title: 'Shaken Mango with Toddy Palm (Xoai Lac Dua Nuoc)',
    subtitle: 'Sweet, sour, spicy mango shaken with chili salt and chewy toddy palm — a refreshing Vietnamese street snack.',
    category: 'SNACK',
    difficulty: 'Easy',
    totalTime: '10 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/xoai-lac-dua-nuoc.jpg',

    intro: `Xoài lắc dừa nước is a modern Vietnamese street snack combining green mango, chili salt seasoning, and sweet toddy palm (dừa nước).

The dish is “shaken” in a container so the mango absorbs the spicy-sweet-sour seasoning evenly. The addition of chewy toddy palm jelly creates a unique texture contrast — crunchy mango vs. soft jelly — making it addictive and refreshing.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 2, name: 'green mango', note: 'julienned or cubed' },
                { amount: 100, unit: 'g', name: 'toddy palm (dừa nước)', note: 'cut into cubes' },
                { amount: 1, unit: 'tbsp', name: 'chili salt' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'chili powder' },
                { amount: 1, unit: 'tbsp', name: 'lime juice' },
            ],
        },
        {
            title: 'Optional',
            items: [
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for deeper umami flavor' },
                { amount: 1, name: 'ice cubes', note: 'for extra freshness' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare ingredients',
            description: 'Peel and cut green mango into bite-size strips. Cut toddy palm jelly into small cubes.',
        },
        {
            title: 'Make seasoning mix',
            description: 'Mix chili salt, sugar, chili powder, and lime juice until slightly wet and aromatic.',
            tip: 'Balance is key: sweet, salty, sour, and spicy should be in harmony.',
        },
        {
            title: 'Combine',
            description: 'Place mango and toddy palm into a container or bowl.',
        },
        {
            title: 'Shake',
            description: 'Add seasoning and shake well until mango is fully coated.',
            tip: 'Shaking helps the seasoning cling evenly to every piece.',
        },
        {
            title: 'Serve',
            description: 'Serve immediately, optionally with ice for extra freshness.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
