'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-dau-xanh',
    title: 'Vietnamese Caramel Flan',
    subtitle:
        'The French left behind their language and their flan. Vietnam kept the flan and improved it.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '3 hrs',
    rating: 4.7,
    baseServings: 6,
    heroImage: '/images/recipes/che-dau-xanh.jpg',
    intro:
        'Bánh flan arrived in Vietnam with the French in the 19th century and never left. What Vietnam did with it is quietly brilliant — the custard became silkier, the caramel deeper, and somewhere along the way someone decided to serve it over crushed ice with a splash of cà phê đen. That last addition is not official. It is, however, correct. This recipe produces six trembling, dark-topped flans with a bittersweet caramel that pools at the bottom of each ramekin when you invert them.',
    ingredientSections: [
        {
            title: 'Caramel',
            items: [
                { amount: 120, unit: 'g', name: 'caster sugar' },
                { amount: 40, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tsp', name: 'fresh lemon juice', note: 'prevents crystallisation' },
            ],
        },
        {
            title: 'Custard',
            items: [
                { amount: 4, name: 'large eggs' },
                { amount: 2, name: 'egg yolks' },
                { amount: 400, unit: 'ml', name: 'whole milk' },
                { amount: 200, unit: 'ml', name: 'sweetened condensed milk' },
                { amount: 1, unit: 'tsp', name: 'vanilla extract' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
        {
            title: 'Optional serving',
            items: [
                { amount: 200, unit: 'g', name: 'crushed ice', note: 'for serving Saigon-style' },
                { amount: 60, unit: 'ml', name: 'strong black coffee', note: 'drizzle over the top' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the caramel',
            description:
                'Combine sugar, water, and lemon juice in a heavy-bottomed saucepan over medium heat. Do not stir — swirl the pan gently if needed. Cook until the caramel turns a deep amber colour (about 8–10 minutes). Immediately pour into 6 ramekins, tilting each to coat the base evenly. Work fast — caramel sets within seconds.',
            tip: 'Aim for a dark amber, almost burnt-looking caramel. Pale caramel tastes of sugar; dark caramel tastes of complexity.',
        },
        {
            title: 'Make the custard',
            description:
                'Warm milk and condensed milk together in a saucepan over low heat until just steaming — do not boil. In a separate bowl, whisk eggs and yolks gently with vanilla and salt. Pour the warm milk mixture slowly into the egg mixture, whisking constantly. Strain through a fine mesh sieve to remove any cooked egg strands.',
            tip: 'Whisking vigorously creates bubbles that leave craters in the finished flan. Stir gently — you want a smooth, flat custard surface.',
        },
        {
            title: 'Fill and prepare bain-marie',
            description:
                'Ladle the custard into the caramel-lined ramekins, filling each about 90%. Place ramekins in a deep baking tray. Pour hot water into the tray until it reaches halfway up the sides of the ramekins. Cover the entire tray loosely with foil.',
        },
        {
            title: 'Bake low and slow',
            description:
                'Bake in a preheated oven at 150°C (300°F) for 45–55 minutes. The flan is ready when the edges are set but the centre has a gentle wobble — like firm jelly. Remove from the water bath and cool to room temperature, then refrigerate for at least 2 hours, ideally overnight.',
            tip: 'If bubbles appear on the surface during baking, your oven is too hot. Drop to 140°C and add more water to the bain-marie.',
        },
        {
            title: 'Unmould and serve',
            description:
                'Run a thin knife around the edge of each ramekin. Place a plate firmly on top, then invert in one confident motion. The caramel will pool around the flan like a dark moat. Serve cold, on crushed ice if you like, with a small drizzle of black coffee over the top.',
            tip: 'If the flan sticks, place the base of the ramekin in warm water for 30 seconds to loosen the caramel.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
