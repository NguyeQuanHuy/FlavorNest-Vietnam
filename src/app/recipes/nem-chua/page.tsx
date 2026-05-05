'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nem-chua',
    title: 'Nem Chua (Vietnamese Fermented Pork)',
    subtitle: 'Tangy, garlicky, and lightly sweet — cured pork bites wrapped and naturally fermented.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '48 hours',
    rating: 4.9,
    baseServings: 6,
    heroImage: '/images/recipes/nem-chua.jpg',

    intro: `:contentReference[oaicite:1]{index=1} is one of Vietnam’s most distinctive delicacies — a naturally fermented pork snack with a signature balance of sour, savory, and slightly sweet flavors.

Fresh pork is finely ground, seasoned with garlic, fish sauce, and sugar, then mixed with toasted rice powder and wrapped tightly in banana leaves. Over 1–2 days, natural fermentation transforms the meat, developing a gentle tang and a firm, slightly springy texture.

Often enjoyed as a snack or with drinks, nem chua delivers a bold combination of aroma and taste: garlicky, tangy, and deeply satisfying.`,

    ingredientSections: [
        {
            title: 'Pork mixture',
            items: [
                { amount: 500, unit: 'g', name: 'fresh lean pork', note: 'very finely ground' },
                { amount: 100, unit: 'g', name: 'pork skin', note: 'boiled, thinly sliced' },
                { amount: 3, name: 'garlic cloves', note: 'sliced' },
                { amount: 2, name: 'red chilies', note: 'sliced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 2, unit: 'tbsp', name: 'roasted rice powder' },
            ],
        },
        {
            title: 'Wrapping',
            items: [
                { amount: 10, name: 'banana leaves', note: 'cleaned and cut into squares' },
                { amount: 10, name: 'plastic wrap', note: 'to seal tightly' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare the mixture',
            description: 'In a large bowl, combine ground pork, pork skin, fish sauce, sugar, salt, and roasted rice powder. Mix thoroughly until the texture becomes sticky and cohesive.',
            tip: 'The mixture must be well mixed to activate proteins and create a firm texture after fermentation.',
        },
        {
            title: 'Add aromatics',
            description: 'Fold in sliced garlic and chilies, distributing them evenly throughout the mixture.',
        },
        {
            title: 'Shape and wrap',
            description: 'Divide the mixture into small portions. Wrap tightly in plastic wrap first, forming compact logs or squares, then wrap again with banana leaves.',
            tip: 'Tight wrapping is crucial — it creates the anaerobic environment needed for fermentation.',
        },
        {
            title: 'Ferment',
            description: 'Leave the wrapped nem at room temperature for 24–48 hours until slightly firm and tangy. Warmer temperatures speed up fermentation.',
        },
        {
            title: 'Serve',
            description: 'Unwrap and serve as is. Best enjoyed slightly chilled, with fresh herbs or as a snack with drinks.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
