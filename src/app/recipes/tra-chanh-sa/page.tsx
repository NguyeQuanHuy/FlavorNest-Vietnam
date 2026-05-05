'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tra-chanh-sa',
    title: 'Lemongrass Lime Tea (Tra Chanh Sa)',
    subtitle: 'Refreshing, citrusy, and herbal — a street-style Vietnamese iced drink with lemongrass and lime.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/tra-chanh-sa.jpg',

    intro: `Trà chanh sả is a popular Vietnamese street drink known for its refreshing balance of citrus, herbal aroma, and light sweetness.

Fresh lemongrass is gently boiled to release its fragrance, then combined with black tea, lime juice, and sugar. The result is a bright, aromatic iced drink that cools the body and wakes up the senses — perfect for hot days or casual gatherings.`,

    ingredientSections: [
        {
            title: 'Tea base',
            items: [
                { amount: 1, unit: 'L', name: 'water' },
                { amount: 3, name: 'lemongrass stalks', note: 'crushed and cut into pieces' },
                { amount: 3, name: 'black tea bags' },
            ],
        },
        {
            title: 'Flavoring',
            items: [
                { amount: 3, unit: 'tbsp', name: 'sugar' },
                { amount: 3, name: 'limes', note: 'juiced' },
                { amount: 1, name: 'lime', note: 'sliced for garnish' },
                { amount: 1, name: 'ice cubes' },
            ],
        },
    ],

    steps: [
        {
            title: 'Boil lemongrass',
            description: 'Bring water to a boil and add crushed lemongrass. Simmer for 10 minutes to release aroma and essential oils.',
            tip: 'Crushing lemongrass before boiling helps extract maximum fragrance.',
        },
        {
            title: 'Steep tea',
            description: 'Turn off heat, add black tea bags, and steep for 5 minutes. Remove tea bags afterward.',
        },
        {
            title: 'Sweeten and cool',
            description: 'Add sugar while tea is still warm. Stir until fully dissolved, then let it cool to room temperature.',
        },
        {
            title: 'Add citrus',
            description: 'Stir in fresh lime juice once the tea has cooled to preserve brightness and acidity.',
        },
        {
            title: 'Serve iced',
            description: 'Fill glasses with ice, pour the tea over, and garnish with lime slices and lemongrass.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
