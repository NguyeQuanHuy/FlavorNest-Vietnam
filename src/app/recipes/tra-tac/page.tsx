'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tra-tac',
    title: 'Kumquat Iced Tea',
    subtitle: 'Tra tac — strong jasmine tea over crushed kumquat and ice. The drink Saigonese argue over after work.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '10 min',
    rating: 4.7,
    baseServings: 1,
    heroImage: '/images/recipes/tra-tac.jpg',
    intro: 'Tra tac is the drink that proves Saigonese street culture is alive. At sidewalk cafes from 4pm onwards, vendors pile small kumquats — peel and all — into a glass, crush them with a wooden pestle, drown them in cold strong jasmine tea, and top the whole thing with crushed ice. The bitter pith of the kumquat balances the sugar; the citrus oils float on the surface in tiny gold droplets. It is the drink of long arguments about football and slow Saturday afternoons.',
    ingredientSections: [
        {
            title: 'Tea base',
            items: [
                { amount: 2, unit: 'tbsp', name: 'jasmine green tea leaves' },
                { amount: 300, unit: 'ml', name: 'just-boiled water' },
            ],
        },
        {
            title: 'Per serving',
            items: [
                { amount: 4, name: 'small kumquats (tac)', note: 'or 1 large mandarin' },
                { amount: 2, unit: 'tbsp', name: 'sugar syrup', note: 'or 1.5 tbsp white sugar' },
                { amount: 1, unit: 'cup', name: 'crushed ice' },
                { amount: 1, name: 'small kumquat', note: 'sliced for garnish' },
            ],
        },
    ],
    steps: [
        {
            title: 'Brew the tea strong',
            description: 'Steep jasmine tea leaves in just-boiled water for 4 minutes — strong enough to taste slightly bitter. Strain and let cool to room temperature, then refrigerate. The tea must be cold before assembling, or it will melt the ice immediately.',
            tip: 'Make extra. Cold tra tac base keeps in the fridge for 3 days and improves on day two.',
        },
        {
            title: 'Crush the kumquats',
            description: 'Cut the kumquats in halves. In the bottom of a tall glass, press them firmly with a wooden pestle or the back of a spoon — squeeze out the juice and bruise the peel until the citrus oil releases. Do not strain — keep the peel and pulp in the glass.',
            tip: 'The peel is the secret. Strain it out and you get plain citrus tea; leave it in and you get tra tac.',
        },
        {
            title: 'Build the drink',
            description: 'Add sugar syrup over the crushed kumquat and stir to dissolve. Pack the glass with crushed ice. Pour the cold jasmine tea over the top until the glass is full. Stir vigorously for 5 seconds. Garnish with a kumquat slice on the rim. Serve with a long spoon for stirring and chasing the kumquat pieces.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
