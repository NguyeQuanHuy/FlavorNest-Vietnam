'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'kem-bo-sai-gon',
    title: 'Saigon Avocado Ice Cream',
    subtitle: 'Kem bo — buttery avocado mash topped with coconut ice cream and crispy dried coconut. The Saigon street dessert that went viral.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.8,
    baseServings: 1,
    heroImage: '/images/recipes/kem-bo-sai-gon.jpg',
    intro: 'In Vietnam, avocado is a dessert fruit. This came as a surprise to the rest of the world only recently, when Saigon street vendors started serving kem bo on Instagram and the food world realised that ripe avocado, condensed milk and coconut ice cream were always meant to meet. The base is buttery, the ice cream is rich, the coconut flakes crackle. Cheap, fast, completely satisfying. The dish that proves Saigon will always invent the next thing.',
    ingredientSections: [
        {
            title: 'Avocado base',
            items: [
                { amount: 2, name: 'large ripe Hass avocados', note: 'flesh only' },
                { amount: 60, unit: 'ml', name: 'sweetened condensed milk' },
                { amount: 60, unit: 'ml', name: 'fresh whole milk' },
                { amount: 1, unit: 'tbsp', name: 'caster sugar' },
                { amount: 1, name: 'pinch of sea salt' },
            ],
        },
        {
            title: 'Coconut ice cream layer',
            items: [
                { amount: 4, unit: 'scoops', name: 'good-quality coconut ice cream', note: 'or vanilla' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 4, unit: 'tbsp', name: 'crispy toasted coconut flakes' },
                { amount: 2, unit: 'tbsp', name: 'crushed roasted peanuts', note: 'optional' },
                { amount: 4, unit: 'tsp', name: 'sweetened condensed milk', note: 'for drizzling' },
                { amount: 0.5, unit: 'tsp', name: 'sea salt flakes', note: 'optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Choose ripe avocados',
            description: 'The avocado is the entire dish. Choose Hass avocados that yield to gentle pressure but are not mushy. Cut, remove the stone, and scoop the flesh into a bowl.',
            tip: 'Under-ripe avocados taste of grass. Over-ripe taste of fermentation. The middle is everything.',
        },
        {
            title: 'Mash the avocado base',
            description: 'Add condensed milk, fresh milk, sugar and salt to the avocado. Mash with a fork until mostly smooth but still with some chunks for texture. Do not blend smooth — kem bo should have body, not be a puree.',
            tip: 'A blender turns this into a smoothie. The Saigon way is hand-mashed and chunky.',
        },
        {
            title: 'Toast the coconut flakes',
            description: 'In a dry pan over medium heat, toast unsweetened coconut flakes for 3 minutes, stirring constantly, until pale gold and intensely fragrant. Watch carefully — coconut goes from gold to burnt in 30 seconds.',
        },
        {
            title: 'Build the bowl',
            description: 'Spoon a generous mound of avocado mash into the bottom of a small bowl or glass. Top with 2 small scoops of coconut ice cream, side by side. The contrast of green base and white ice cream is half the visual point.',
        },
        {
            title: 'Top and drizzle',
            description: 'Scatter toasted coconut flakes generously over the ice cream. Add crushed peanuts if using. Drizzle a stream of condensed milk in a slow zigzag over the top. Finish with a tiny pinch of flaky sea salt on the ice cream.',
            tip: 'The salt is the secret. It heightens the avocado and balances the sweetness.',
        },
        {
            title: 'Eat immediately',
            description: 'Kem bo waits for no one. Within 4 minutes the ice cream begins to melt into the avocado, creating a thicker creamier dessert. Eat fast at first, slow at the end. A long iced spoon helps.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}