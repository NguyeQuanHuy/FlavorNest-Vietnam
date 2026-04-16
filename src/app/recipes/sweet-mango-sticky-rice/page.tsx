'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'sweet-mango-sticky-rice',
    title: 'Sweet Mango Sticky Rice',
    subtitle:
        'Southern Vietnam on a plate — golden Cát Hòa Lộc mango beside warm coconut-soaked sticky rice.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '30 min + overnight soak',
    rating: 4.8,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1600&q=80',
    intro:
        'The Vietnamese version of mango sticky rice is lighter and less sugary than its Thai cousin, often finished with a scatter of steamed mung bean and toasted sesame. The magic is in the contrast — cold ripe mango against warm, just-cooked rice soaked in salted coconut cream.',
    ingredientSections: [
        {
            title: 'Sticky rice',
            items: [
                { amount: 300, unit: 'g', name: 'glutinous rice (nếp cái hoa vàng)' },
                { amount: 4, name: 'pandan leaves', note: 'tied in a knot' },
            ],
        },
        {
            title: 'Coconut sauce',
            items: [
                { amount: 300, unit: 'ml', name: 'full-fat coconut milk', note: 'for soaking rice' },
                { amount: 100, unit: 'ml', name: 'coconut milk', note: 'reserved for topping' },
                { amount: 80, unit: 'g', name: 'palm sugar', note: 'or light brown sugar' },
                { amount: 0.5, unit: ' tsp', name: 'sea salt' },
                { amount: 1, unit: ' tsp', name: 'tapioca starch' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 2, name: 'ripe Cát Hòa Lộc mangoes', note: 'or Ataulfo, Honey mango' },
                { amount: 2, unit: ' tbsp', name: 'toasted white sesame seeds' },
                { amount: 50, unit: 'g', name: 'steamed mung beans', note: 'optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Soak the rice overnight',
            description:
                'Rinse the glutinous rice 3–4 times until the water runs clear. Cover with cold water by 2 inches and let soak at least 6 hours, preferably overnight. This is the single most important step for tender, evenly-cooked rice.',
            tip: 'Under-soaked rice will have hard centers no matter how long you steam it. Do not skip or rush this.',
        },
        {
            title: 'Steam with pandan',
            description:
                'Drain the rice. Line a steamer basket with pandan leaves, spread the rice evenly on top, and cover with the remaining leaves. Steam over medium heat for 30–35 minutes, fluffing once halfway through so the grains cook evenly.',
        },
        {
            title: 'Warm the coconut sauce',
            description:
                'While the rice steams, combine 300ml coconut milk, palm sugar, and salt in a small saucepan. Warm over low heat, stirring until the sugar dissolves and the liquid just begins to shimmer. Do not let it boil — boiling breaks the fat and the sauce turns oily.',
        },
        {
            title: 'Marry rice and coconut',
            description:
                'Tip the just-steamed rice into a large bowl. Pour over two-thirds of the warm coconut mixture and fold gently with a rubber spatula. Cover with a damp cloth and let rest 10–15 minutes — the grains will swell and drink up the sauce.',
            tip: 'The rice should look glossy but not soupy. If it seems dry, add a splash more coconut milk.',
        },
        {
            title: 'Thicken the topping sauce',
            description:
                'In a small pan, whisk the reserved 100ml coconut milk with tapioca starch (dissolved in 1 tbsp cold water). Heat gently, stirring, until it thickens into a pourable cream. This is drizzled over the rice at the end.',
        },
        {
            title: 'Plate and serve warm',
            description:
                'Slice the mango into thick cheeks. On each plate, mound a portion of sticky rice beside the mango. Drizzle the thickened coconut sauce over the rice, scatter sesame seeds and mung beans on top. Serve immediately — the temperature contrast between cold fruit and warm rice is the whole point.',
            tip: 'The rice stiffens as it cools. Assemble and serve within 30 minutes of cooking.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}