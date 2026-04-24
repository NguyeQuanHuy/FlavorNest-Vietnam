'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'sinh-to-bo',
    title: 'Avocado Smoothie',
    subtitle: 'In Vietnam, avocado is a dessert. This smoothie is the proof.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '10 min',
    rating: 4.8,
    baseServings: 2,
    heroImage: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&w=1600&q=85',
    intro: 'In Vietnam, avocado is never put in salads or on toast. It is a fruit — sweet, fatty, and best blended with condensed milk and ice into the thickest, creamiest smoothie you have ever had. Sinh to bo is sold at juice stalls across Saigon from early afternoon, served in a tall glass so thick the straw stands upright. The colour is a deep, matte green. The flavour is pure richness.',
    ingredientSections: [
        {
            title: 'Ingredients',
            items: [
                { amount: 2, name: 'ripe Hass avocados', note: 'flesh only' },
                { amount: 200, unit: 'ml', name: 'fresh whole milk', note: 'cold' },
                { amount: 3, unit: 'tbsp', name: 'sweetened condensed milk', note: 'adjust to taste' },
                { amount: 1, unit: 'cup', name: 'crushed ice' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
    ],
    steps: [
        {
            title: 'Check avocado ripeness',
            description: 'The avocado must be fully ripe — soft when pressed, dark-skinned, no brown spots inside. An underripe avocado produces a chalky, bitter smoothie with no creaminess.',
            tip: 'If avocados are not yet ripe, place them in a paper bag with a banana overnight. The ethylene gas speeds up ripening.',
        },
        {
            title: 'Blend everything',
            description: 'Scoop avocado flesh into a blender. Add cold milk, condensed milk, crushed ice, and a pinch of salt. Blend on high for 60 seconds until completely smooth and thick. Taste and add more condensed milk if needed.',
        },
        {
            title: 'Serve immediately',
            description: 'Pour into tall glasses. The smoothie should be thick enough that a straw stands upright. Serve immediately — avocado oxidises quickly and will begin to brown within 20 minutes.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
