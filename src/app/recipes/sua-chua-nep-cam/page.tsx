'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'sua-chua-nep-cam',
    title: 'Black Glutinous Rice Yoghurt',
    subtitle: 'Tangy yoghurt layered with purple sticky rice — the dessert that looks like a painting and tastes like calm.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '8 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage:
        '/images/recipes/sua-chua-nep-cam.jpg',
    intro:
        'Sữa chua nếp cẩm is Hanoi\'s most elegant street dessert — a small glass of homemade yoghurt topped with warm, wine-dark sticky rice cooked in coconut milk. The contrast between cold tangy yoghurt and warm fragrant rice is one of those combinations that feels inevitable once you taste it. The black glutinous rice (nếp cẩm) turns a deep burgundy-purple when cooked, bleeding beautifully into the white yoghurt beneath. It is slow food — the yoghurt needs hours to set — but almost entirely hands-off.',
    ingredientSections: [
        {
            title: 'Homemade yoghurt (sữa chua)',
            items: [
                { amount: 1, unit: 'l', name: 'whole milk' },
                { amount: 400, unit: 'ml', name: 'sweetened condensed milk' },
                { amount: 200, unit: 'ml', name: 'boiling water' },
                { amount: 2, unit: 'tbsp', name: 'plain yoghurt', note: 'as starter culture, room temp' },
            ],
        },
        {
            title: 'Black sticky rice (nếp cẩm)',
            items: [
                { amount: 150, unit: 'g', name: 'black glutinous rice', note: 'soaked overnight' },
                { amount: 400, unit: 'ml', name: 'water' },
                { amount: 200, unit: 'ml', name: 'coconut milk' },
                { amount: 3, unit: 'tbsp', name: 'caster sugar' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the yoghurt base',
            description:
                'Mix boiling water with condensed milk until combined. Add whole milk and stir well — the mixture should be warm (around 40°C), not hot. If it\'s too hot it will kill the culture. Stir in the yoghurt starter gently until fully incorporated.',
            tip: 'Test the temperature on your wrist — it should feel comfortably warm, like bathwater. Too cool and the yoghurt won\'t set; too hot and you\'ll kill the bacteria.',
        },
        {
            title: 'Ferment the yoghurt',
            description:
                'Pour into small glasses or jars, filling each about two-thirds full. Place jars in a warm environment — inside a turned-off oven with just the light on works perfectly. Leave undisturbed for 6–8 hours until set. The yoghurt is ready when it holds its shape and has a clean, tangy smell. Refrigerate until cold.',
        },
        {
            title: 'Cook the black sticky rice',
            description:
                'Drain soaked rice and combine with 400ml water in a saucepan. Bring to a boil, then reduce to a low simmer, cover, and cook for 25–30 minutes until the rice is tender and the water absorbed. The rice will turn a deep purple-black.',
        },
        {
            title: 'Finish with coconut milk',
            description:
                'Stir coconut milk, sugar, and salt into the cooked rice over low heat. Cook uncovered for a further 5 minutes, stirring, until the mixture thickens slightly and the rice is glossy and fragrant. Remove from heat.',
            tip: 'The rice should be sticky and saucy, not dry. It will thicken further as it cools — add a splash more coconut milk if needed when reheating.',
        },
        {
            title: 'Assemble and serve',
            description:
                'Spoon warm black sticky rice generously over the cold set yoghurt in each glass. Serve immediately — the contrast between warm rice and cold yoghurt is the entire point. The purple will bleed into the white yoghurt at the edges like watercolour.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
