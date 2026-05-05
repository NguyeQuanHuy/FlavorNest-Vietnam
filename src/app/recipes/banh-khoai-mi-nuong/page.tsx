'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-khoai-mi-nuong',
    title: 'Baked Cassava Cake (Banh Khoai Mi Nuong)',
    subtitle: 'Chewy Vietnamese cassava cake baked with coconut milk — golden, fragrant, and naturally sweet.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '60 min',
    rating: 4.9,
    baseServings: 6,
    heroImage: '/images/recipes/banh-khoai-mi-nuong.jpg',

    intro: `Bánh khoai mì nướng is a traditional Vietnamese dessert made from grated cassava, coconut milk, and sugar, baked until golden.

The cake has a chewy, slightly sticky texture with a rich coconut aroma and a lightly caramelized surface. It is commonly enjoyed as a street snack or family dessert.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 1, unit: 'kg', name: 'cassava (khoai mì)', note: 'grated and squeezed' },
                { amount: 200, unit: 'ml', name: 'coconut milk' },
                { amount: 150, unit: 'g', name: 'sugar' },
                { amount: 2, name: 'eggs' },
                { amount: 50, unit: 'g', name: 'melted butter' },
                { amount: 1, unit: 'tsp', name: 'vanilla extract' },
            ],
        },
        {
            title: 'Optional topping',
            items: [
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare cassava',
            description: 'Peel, grate cassava, then squeeze out excess water.',
            tip: 'Removing water helps the cake become chewy, not soggy.',
        },
        {
            title: 'Mix batter',
            description: 'Combine cassava, coconut milk, sugar, eggs, butter, and vanilla until smooth.',
        },
        {
            title: 'Preheat oven',
            description: 'Preheat oven to 180°C.',
        },
        {
            title: 'Bake',
            description: 'Pour mixture into a baking tray and bake for 45–50 minutes until golden brown.',
        },
        {
            title: 'Check texture',
            description: 'Cake should be firm outside and chewy inside.',
        },
        {
            title: 'Finish',
            description: 'Let cool slightly, sprinkle sesame seeds if desired, and slice to serve.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
