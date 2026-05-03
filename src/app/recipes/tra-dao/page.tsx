'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tra-dao',
    title: 'Fresh Sugarcane Juice',
    subtitle: 'Pressed in front of you, drunk in seconds. The happiest drink in Vietnam.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '5 min',
    rating: 4.8,
    baseServings: 2,
    heroImage: '/images/recipes/tra-dao.jpg',
    intro: 'Nuoc mia exists at the intersection of simple and perfect. Sugarcane stalks fed through steel rollers, the pale green juice collected in a cup over ice, finished with a squeeze of kumquat or calamansi. It costs almost nothing and tastes like a Vietnamese summer afternoon. Without a commercial sugarcane press, you can extract juice at home using a knife and patience — the result is the same.',
    ingredientSections: [
        {
            title: 'Ingredients',
            items: [
                { amount: 500, unit: 'g', name: 'fresh sugarcane stalks', note: 'peeled, available at Asian supermarkets' },
                { amount: 1, unit: 'cup', name: 'ice cubes' },
                { amount: 2, name: 'calamansi or kumquats', note: 'halved, for squeezing' },
                { amount: 1, name: 'pinch of salt', note: 'optional, brightens flavour' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the sugarcane',
            description: 'If not already peeled, use a heavy knife to remove the hard outer skin. Cut the pale inner cane into small sections roughly 5cm long.',
        },
        {
            title: 'Extract the juice',
            description: 'For a juicer: feed pieces through a masticating juicer. Without a juicer: place pieces in a blender with 100ml water and blend on high, then strain through a fine mesh cloth, squeezing out all liquid. Discard the fibrous pulp.',
            tip: 'Fresh sugarcane juice oxidises and loses sweetness within 30 minutes. Make just before serving.',
        },
        {
            title: 'Serve',
            description: 'Fill glasses with ice. Pour sugarcane juice over. Squeeze half a calamansi or kumquat into each glass and add a pinch of salt if desired. Stir once and serve immediately.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
