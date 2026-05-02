'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-do-den',
    title: 'Black Bean Sweet Soup',
    subtitle: 'Che do den — soft black beans in a dark jasmine-scented syrup, the quintessential summer treat of Northern Vietnam.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/che-do-den.jpg',
    intro: 'Che do den is the dessert that defines a Hanoi summer. The black beans are simmered slowly until they collapse at the touch of a spoon, suspended in a dark jasmine-perfumed syrup that tastes faintly of caramelised sugar. Served over a mountain of crushed ice with a generous pour of coconut cream, it is what every Hanoi grandmother makes when the temperature climbs past 35 and the children come home from school complaining of the heat. Cooling, simple, and impossibly satisfying.',
    ingredientSections: [
        {
            title: 'Beans',
            items: [
                { amount: 250, unit: 'g', name: 'black turtle beans', note: 'soaked overnight' },
                { amount: 1.2, unit: 'L', name: 'water' },
                { amount: 1, name: 'pinch of sea salt' },
            ],
        },
        {
            title: 'Syrup',
            items: [
                { amount: 150, unit: 'g', name: 'palm sugar', note: 'or rock sugar' },
                { amount: 4, name: 'fresh pandan leaves', note: 'tied in a knot' },
                { amount: 1, unit: 'tsp', name: 'jasmine essence', note: 'optional, for floral aroma' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 200, unit: 'ml', name: 'coconut cream' },
                { amount: 1, unit: 'tbsp', name: 'tapioca starch', note: 'for thickening coconut cream' },
                { amount: 1, name: 'pinch of salt' },
                { amount: 80, unit: 'g', name: 'shredded fresh coconut', note: 'optional' },
                { amount: 4, unit: 'cups', name: 'crushed ice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Soak and rinse the beans',
            description: 'Cover beans with cold water by 5cm and soak overnight. Drain and rinse thoroughly. Discard any beans that float — they are old and will not soften properly.',
            tip: 'Under-soaked beans will never fully soften. Minimum 8 hours, longer is fine.',
        },
        {
            title: 'Boil and refresh',
            description: 'Place soaked beans in a pot with 1.2L fresh water and a pinch of salt. Bring to a hard boil for 10 minutes, then drain. Return beans to a clean pot with fresh water. This refreshing step removes the bitter compounds that give black beans their occasional gassy edge.',
            tip: 'Skipping this step gives a darker but less clean-tasting syrup.',
        },
        {
            title: 'Simmer until tender',
            description: 'Add 1.2L fresh water and pandan leaves. Bring to a gentle simmer and cook 45 minutes until the beans are completely soft and crush easily between two fingers. Top up with hot water if the level drops too low.',
            tip: 'Never boil hard. Hard boiling breaks the bean skins and clouds the syrup.',
        },
        {
            title: 'Sweeten the syrup',
            description: 'Add palm sugar to the pot and stir until fully dissolved. Continue simmering uncovered for 10 minutes — the syrup will reduce slightly and turn a deep glossy brown. Off heat, stir in jasmine essence if using. Remove pandan leaves. Cool to room temperature, then refrigerate at least 2 hours.',
        },
        {
            title: 'Make the coconut cream topping',
            description: 'Whisk tapioca starch with 2 tbsp cold water until smooth. In a small saucepan, warm coconut cream with salt over low heat. Stir in tapioca slurry and cook 2 minutes until thickened to a pourable cream. Cool.',
            tip: 'Boiling the coconut cream curdles it. Keep heat low and stir constantly.',
        },
        {
            title: 'Assemble and serve',
            description: 'Spoon a generous pile of crushed ice into 4 tall glasses. Ladle cold black bean soup over the ice. Top each with a heavy drizzle of thickened coconut cream and a scattering of shredded fresh coconut. Serve immediately with a long spoon.',
            tip: 'Best on day two. The flavours deepen overnight in the fridge.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}