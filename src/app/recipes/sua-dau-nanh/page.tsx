'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'sua-dau-nanh',
    title: 'Vietnamese Soy Milk',
    subtitle: 'Sua dau nanh — fresh soy milk infused with pandan, sold warm before sunrise.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=1600&q=85',
    intro: 'In Hanoi, the bicycle vendor with the glass bottles of soy milk arrives at your alley before dawn. The bottles are warm to the touch, the pandan leaves visible inside, and the lid is sealed with a twist of newspaper. By 9am she is sold out. Vietnamese soy milk is creamier than the supermarket version, faintly grassy from pandan, sweetened just enough to make it a drink rather than an ingredient. Drunk hot in winter and iced in summer, paired with a still-warm patongo (Vietnamese fried dough stick) for the full breakfast experience.',
    ingredientSections: [
        {
            title: 'Soy base',
            items: [
                { amount: 200, unit: 'g', name: 'dried soybeans', note: 'soaked overnight' },
                { amount: 2, unit: 'L', name: 'filtered water' },
                { amount: 6, name: 'fresh pandan leaves', note: 'tied in a knot' },
            ],
        },
        {
            title: 'Sweeten to taste',
            items: [
                { amount: 80, unit: 'g', name: 'rock sugar', note: 'or palm sugar, adjust to taste' },
                { amount: 1, name: 'pinch of sea salt', note: 'lifts the flavour' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, unit: 'cup', name: 'ice cubes', note: 'for iced version' },
                { amount: 4, name: 'patongo (Vietnamese fried dough sticks)', note: 'optional, traditional pairing' },
            ],
        },
    ],
    steps: [
        {
            title: 'Soak the soybeans overnight',
            description: 'Rinse soybeans and cover with cold water by 5cm. Soak overnight at room temperature. The beans should double in size and the skins should slip off easily when pressed.',
            tip: 'Under-soaked beans give a chalky, gritty milk. Minimum 8 hours, longer is fine.',
        },
        {
            title: 'Peel and rinse',
            description: 'Drain the soaked beans. Massage them between your hands under running water — the loose skins will float to the surface and rinse away. Discard the skins; this step gives the milk its smooth texture.',
        },
        {
            title: 'Blend with water',
            description: 'In a high-power blender, blend the peeled beans with 1.5L of fresh water in batches until completely smooth, about 90 seconds per batch. The mixture should look like thick white liquid with no visible chunks.',
        },
        {
            title: 'Strain through muslin',
            description: 'Pour the blended mixture through a fine muslin or nut milk bag set over a heavy pot. Squeeze hard to extract every drop of milk. Discard the pulp (or save for soybean okara recipes).',
            tip: 'Squeezing hard is the difference between rich and watery. Wear rubber gloves — the okara is hot when fresh.',
        },
        {
            title: 'Cook with pandan',
            description: 'Add the remaining 500ml water and the pandan leaves to the strained milk. Bring to a gentle simmer over medium heat, stirring constantly to prevent scorching. Simmer 15 minutes — the raw bean smell disappears and the kitchen fills with grassy pandan perfume.',
            tip: 'Never let it boil hard. Soy milk foams up dramatically and overflows in seconds.',
        },
        {
            title: 'Sweeten and serve',
            description: 'Remove pandan leaves. Add rock sugar and salt; stir until dissolved. Taste and adjust. Serve hot in a glass for the morning Hanoi version, or pour over ice for the iced summer version. Best within 2 days, refrigerated.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
