'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tra-da',
    title: 'Vietnamese Iced Green Tea',
    subtitle: 'Free at every table. Worth making at home.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '5 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=1600&q=85',
    intro: 'Tra da is the hospitality of Vietnam in a glass. Walk into any pho shop, bun bo place, or com binh dan restaurant and a large glass of pale iced green tea appears before you say a word. It costs nothing. It is unsweetened, lightly bitter, and exactly right. The tea is usually a cheap loose-leaf green tea brewed strong then diluted and poured over ice — humble ingredients, perfect result.',
    ingredientSections: [
        {
            title: 'Ingredients',
            items: [
                { amount: 1, unit: 'tbsp', name: 'loose-leaf green tea', note: 'Vietnamese tra xanh preferred' },
                { amount: 1, unit: 'l', name: 'hot water', note: '80C, not boiling' },
                { amount: 1, unit: 'cup', name: 'ice cubes per glass' },
            ],
        },
    ],
    steps: [
        {
            title: 'Brew the tea',
            description: 'Add tea leaves to a teapot or heatproof jug. Pour hot water at around 80C over the leaves. Steep for 3 minutes. Do not over-steep or the tea will turn bitter and dark.',
            tip: 'Vietnamese green tea is often earthier and less grassy than Japanese green tea. If using Japanese tea, halve the steep time.',
        },
        {
            title: 'Strain and cool',
            description: 'Strain the tea into a pitcher. Allow to cool to room temperature, or speed it up by placing the pitcher in a bowl of cold water.',
        },
        {
            title: 'Serve over ice',
            description: 'Fill tall glasses with ice and pour the green tea over. Serve immediately without sugar. Tra da is meant to be unsweetened — it is a palate cleanser and thirst quencher, not a dessert drink.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
