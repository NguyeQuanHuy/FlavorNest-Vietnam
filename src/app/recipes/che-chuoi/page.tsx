'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-chuoi',
    title: 'Banana with Sago Pearls',
    subtitle: 'Che chuoi — sliced bananas simmered in coconut milk with chewy sago pearls and crushed peanuts.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.6,
    baseServings: 4,
    heroImage: '/images/recipes/che-chuoi.jpg',
    intro: 'Che chuoi is one of those rustic desserts that exists in every Vietnamese family but is never quite the same twice. The bananas — preferably the small fragrant chuoi xiem variety — are simmered just long enough in coconut milk to soften and release their perfume. The sago pearls turn translucent, the broth thickens to a velvet, and a final shower of crushed roasted peanuts adds the texture that ties everything together. Served warm in winter, chilled in summer, both versions equally correct.',
    ingredientSections: [
        {
            title: 'Sago pearls',
            items: [
                { amount: 60, unit: 'g', name: 'small tapioca pearls (sago)', note: 'soaked 30 minutes' },
                { amount: 600, unit: 'ml', name: 'water', note: 'for cooking sago' },
            ],
        },
        {
            title: 'Coconut soup',
            items: [
                { amount: 6, name: 'ripe bananas', note: 'preferably chuoi xiem, sliced 2cm thick' },
                { amount: 400, unit: 'ml', name: 'coconut milk' },
                { amount: 200, unit: 'ml', name: 'coconut cream' },
                { amount: 80, unit: 'g', name: 'palm sugar' },
                { amount: 2, name: 'fresh pandan leaves', note: 'tied in a knot' },
                { amount: 1, name: 'pinch of sea salt' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'crushed' },
                { amount: 2, unit: 'tbsp', name: 'roasted sesame seeds' },
                { amount: 2, unit: 'tbsp', name: 'shredded fresh coconut', note: 'optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Cook the sago pearls',
            description: 'Drain soaked sago. Bring 600ml water to a boil and pour in the sago. Cook for 12 minutes, stirring occasionally to prevent sticking. The pearls are ready when they turn fully translucent with no white centres. Drain and rinse under cold water to stop cooking.',
            tip: 'Undercooked sago has a chalky white centre. Cook until completely glassy.',
        },
        {
            title: 'Slice the bananas',
            description: 'Peel bananas and slice into 2cm rounds on the diagonal. Use bananas that are fully ripe but still firm — overripe bananas will fall apart in the soup.',
        },
        {
            title: 'Build the coconut soup',
            description: 'In a heavy pot, combine coconut milk, coconut cream, palm sugar, pandan leaves and salt. Bring to a gentle simmer over medium-low heat, stirring until the sugar dissolves. Do not boil hard — coconut milk separates and turns oily.',
        },
        {
            title: 'Simmer the bananas',
            description: 'Add the sliced bananas to the simmering coconut soup. Cook gently for 6 minutes until the bananas are tender and just starting to release their fragrance. The soup should smell of caramelised banana and pandan.',
            tip: 'Any longer than 8 minutes and the bananas turn to mush. Pull them when a fork slides through with light resistance.',
        },
        {
            title: 'Combine sago and finish',
            description: 'Stir in the cooked sago pearls and warm through for 2 minutes. Remove pandan leaves. Taste and adjust sugar.',
        },
        {
            title: 'Serve warm or chilled',
            description: 'Ladle into bowls. Top with crushed peanuts, sesame seeds and shredded coconut. Eat immediately while warm, or refrigerate 2 hours and serve chilled in summer with a few cubes of ice on the side.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}