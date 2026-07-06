'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-sen',
    title: 'Lotus Seed Sweet Soup',
    subtitle: 'Che sen — pure steamed lotus seeds in a crystal-clear rock-sugar syrup, the most zen-like of Vietnamese desserts.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.7,
    baseServings: 2,
    heroImage: '/images/recipes/che-sen.jpg',
    intro: 'Che sen is what every Vietnamese mother turns to when she wants to slow the day down. Lotus seeds — the symbol of purity and the seed of the national flower — are simmered gently in clear rock-sugar syrup until they turn powdery and melt on the tongue. The dessert is meant to be eaten quietly, alone if possible, in small porcelain bowls. It cools the body, calms the nerves, and according to traditional medicine, brings peaceful sleep. There is no flourish here. The lotus seed alone is the point.',
    ingredientSections: [
        {
            title: 'Lotus seeds',
            items: [
                { amount: 200, unit: 'g', name: 'fresh or dried lotus seeds', note: 'cores removed' },
                { amount: 800, unit: 'ml', name: 'water' },
            ],
        },
        {
            title: 'Syrup',
            items: [
                { amount: 80, unit: 'g', name: 'rock sugar' },
                { amount: 2, name: 'fresh pandan leaves', note: 'tied in a knot, optional' },
                { amount: 1, name: 'pinch of sea salt' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, unit: 'tbsp', name: 'dried osmanthus flowers', note: 'optional, for fragrance' },
                { amount: 2, name: 'small porcelain bowls' },
            ],
        },
    ],
    steps: [
        {
            title: 'Remove the bitter cores',
            description: 'If using fresh lotus seeds, push out the green bitter core in the centre of each seed with a thin chopstick. If using dried, soak in warm water for 1 hour first to soften, then check each seed and remove cores. Skipping this step makes the entire dessert undrinkably bitter.',
            tip: 'A core remaining in even one seed will turn the syrup faintly bitter. Inspect every single one.',
        },
        {
            title: 'Boil and refresh',
            description: 'Place lotus seeds in a pot with cold water, bring to a hard boil for 5 minutes, then drain. Return to a clean pot. This refreshing removes any residual bitterness and ensures a clear syrup.',
        },
        {
            title: 'Simmer until powdery-tender',
            description: 'Add 800ml fresh water and the pinch of salt. Bring to a gentle simmer and cook 35 minutes until the seeds are tender enough to crush between two fingers but still hold their shape. Top up with hot water if the level drops.',
            tip: 'Never boil hard. The seeds break apart and the syrup turns cloudy.',
        },
        {
            title: 'Add the rock sugar',
            description: 'Stir in rock sugar and pandan leaves if using. Continue simmering for 15 minutes until the sugar fully dissolves and the syrup turns faintly amber. The syrup should remain perfectly clear.',
        },
        {
            title: 'Rest and steep',
            description: 'Off heat, remove pandan leaves. If using dried osmanthus, scatter into the hot syrup and let steep 5 minutes for fragrance. Cover the pot and let the lotus seeds rest in the warm syrup for 20 minutes — they will continue to drink the sweetness.',
        },
        {
            title: 'Serve warm or chilled',
            description: 'Ladle into small porcelain bowls — half a cup per serving. Eat warm in winter, chilled in summer. Sit. Drink slowly. The dessert is best appreciated without distraction.',
            tip: 'Keeps 4 days refrigerated. The flavour deepens on day two.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}