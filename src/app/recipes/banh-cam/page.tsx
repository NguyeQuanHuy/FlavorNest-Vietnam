'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-cam',
    title: 'Vietnamese Sesame Balls',
    subtitle: 'Crispy, chewy, golden — fried glutinous rice balls filled with sweet mung bean paste and rolled in sesame seeds.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '1 hr 15 min',
    rating: 4.8,
    baseServings: 16,
    heroImage: '/images/recipes/banh-cam.jpg',
    intro: 'Banh cam is the street food dessert that announces itself — the sizzle of sesame seeds hitting hot oil, the hollow thud when you tap the golden shell. The dough is glutinous rice flour mixed with boiled potato for extra chewiness; the filling is sweetened mung bean paste, dense and fragrant with pandan. When fried correctly the shell puffs up around the filling, creating an air pocket that makes each bite simultaneously crispy, chewy, and soft. They are best eaten within minutes of leaving the oil.',
    ingredientSections: [
        {
            title: 'Dough',
            items: [
                { amount: 250, unit: 'g', name: 'glutinous rice flour' },
                { amount: 100, unit: 'g', name: 'potato', note: 'boiled and mashed while hot' },
                { amount: 80, unit: 'g', name: 'caster sugar' },
                { amount: 120, unit: 'ml', name: 'warm water', note: 'adjust as needed' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
        {
            title: 'Mung bean filling',
            items: [
                { amount: 150, unit: 'g', name: 'split mung beans', note: 'soaked 2 hrs, steamed until soft' },
                { amount: 50, unit: 'g', name: 'caster sugar' },
                { amount: 1, unit: 'tbsp', name: 'coconut oil or butter' },
                { amount: 1, unit: 'tsp', name: 'pandan extract' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
        {
            title: 'Coating and frying',
            items: [
                { amount: 100, unit: 'g', name: 'white sesame seeds' },
                { amount: 1, unit: 'l', name: 'neutral oil', note: 'for deep frying' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the mung bean filling',
            description: 'While mung beans are still hot, mash thoroughly with sugar, coconut oil, pandan extract, and salt until a smooth, firm paste forms. Cook in a non-stick pan over low heat, stirring constantly, for 5 minutes until the paste pulls away from the sides and holds its shape. Cool completely, then roll into 16 equal balls. Refrigerate until firm.',
            tip: 'The filling must be completely cool and firm before wrapping. Warm filling makes the dough sticky and hard to seal.',
        },
        {
            title: 'Make the dough',
            description: 'Combine glutinous rice flour, mashed potato, sugar, and salt. Add warm water gradually, mixing until a soft, smooth, non-sticky dough forms. It should be pliable like playdough. Add water or flour a teaspoon at a time to adjust. Divide into 16 equal portions.',
        },
        {
            title: 'Wrap and shape',
            description: 'Flatten each dough portion into a disc. Place a mung bean ball in the centre, gather the edges, and pinch firmly to seal. Roll between palms into a smooth ball. Make sure there are no cracks.',
            tip: 'Wet hands slightly to prevent sticking when sealing.',
        },
        {
            title: 'Coat in sesame seeds',
            description: 'Pour sesame seeds into a shallow bowl. Lightly dampen each ball with water, then roll in sesame seeds, pressing gently so they adhere evenly all over.',
        },
        {
            title: 'Fry low and slow',
            description: 'Heat oil to 160C in a deep pan. Fry balls in batches of 4 to 5, turning continuously with a spoon, for 8 to 10 minutes. Start on low heat to cook through, then raise to 180C for the final 2 minutes to crisp and puff the shell. The balls are ready when deep golden and feel hollow when tapped.',
            tip: 'Constant turning ensures even puffing and prevents flat spots. The balls should be rolling gently in the oil the entire time.',
        },
        {
            title: 'Drain and serve',
            description: 'Remove with a spider strainer and drain on a wire rack, not paper towels. Paper traps steam and softens the shell. Serve within 15 minutes while the shell is still crispy.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
