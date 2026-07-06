'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-com',
    title: 'Hanoi Green Sticky Rice Cake',
    subtitle: 'Banh com — pale jade squares of young glutinous rice wrapped around sweet mung bean, perfumed with pomelo flower water.',
    category: 'DESSERT',
    difficulty: 'Hard',
    totalTime: '2 hrs',
    rating: 4.8,
    baseServings: 12,
    heroImage: '/images/recipes/banh-com.jpg',
    intro: 'Banh com is a Hanoi autumn ritual. When the new harvest of com — young glutinous rice grains, beaten flat in mortars, dyed pale green from a wild jungle leaf — arrives from Vong village in the suburbs, the city celebrates with banh com. Each one is the size of a matchbox: a delicate green wrapper of fresh com pressed around a sweet mung bean filling perfumed with pomelo flower water, then bound in banana leaves the colour of a deeper green. Traditionally given as wedding gifts and offered at engagement ceremonies, banh com is more memory than dessert.',
    ingredientSections: [
        {
            title: 'Com wrapper',
            items: [
                { amount: 400, unit: 'g', name: 'fresh com (young pounded glutinous rice)', note: 'or rehydrated dried com' },
                { amount: 80, unit: 'ml', name: 'coconut milk', note: 'for softening' },
                { amount: 60, unit: 'g', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'pandan extract', note: 'for green colour if needed' },
            ],
        },
        {
            title: 'Mung bean filling',
            items: [
                { amount: 200, unit: 'g', name: 'split mung beans', note: 'soaked overnight' },
                { amount: 100, unit: 'g', name: 'sugar' },
                { amount: 60, unit: 'ml', name: 'coconut milk' },
                { amount: 1, unit: 'tsp', name: 'pomelo flower water (nuoc hoa buoi)', note: 'or jasmine extract' },
                { amount: 30, unit: 'g', name: 'shredded coconut', note: 'optional' },
                { amount: 1, name: 'pinch of sea salt' },
            ],
        },
        {
            title: 'Wrapping',
            items: [
                { amount: 24, name: 'banana leaves', note: 'cut in 12cm squares, rinsed and softened over flame' },
                { amount: 1, name: 'roll of cotton string', note: 'for tying' },
            ],
        },
    ],
    steps: [
        {
            title: 'Cook the mung bean filling',
            description: 'Drain soaked mung beans. Steam over simmering water for 25 minutes until soft enough to mash. While still hot, transfer to a heavy pan with sugar, coconut milk and salt. Cook over low heat, stirring constantly, for 10 minutes until the mixture pulls away from the pan and forms a smooth paste. Off heat, stir in pomelo flower water and shredded coconut. Cool completely.',
            tip: 'The filling must be dry enough to hold a shape. If it sticks to your finger, cook longer.',
        },
        {
            title: 'Form the filling balls',
            description: 'Divide the cooled mung bean paste into 12 portions. Roll each into a small flat oval about 5cm long. Set on a plate.',
        },
        {
            title: 'Soften the com',
            description: 'In a heavy bowl, combine fresh com with coconut milk and sugar. Knead gently with your hands for 5 minutes — the rice should soften and bind into a slightly sticky dough that holds together but does not stick aggressively to your fingers. If using dried com, soak in coconut milk for 30 minutes first.',
            tip: 'Add coconut milk a tablespoon at a time. Too wet and the wrappers will fall apart.',
        },
        {
            title: 'Form each banh com',
            description: 'Place a banana leaf square on the work surface, shiny side up. Take 3 tbsp of com mixture and press it into a flat 7cm square on the leaf. Lay a mung bean oval in the centre. Top with another 3 tbsp com and press to fully enclose the filling. The cake should be a flat square about 1.5cm thick.',
            tip: 'Wet your hands before pressing the com. It stops the rice from sticking to your palms.',
        },
        {
            title: 'Wrap in banana leaves',
            description: 'Place a second banana leaf square underneath each cake at a 45-degree angle. Fold the leaves over to fully enclose the cake — first the top and bottom corners, then left and right. Tie crosswise with cotton string. The finished parcel should be a neat square showing two shades of green leaf.',
        },
        {
            title: 'Rest and serve',
            description: 'Banh com does not need cooking — the com is already cooked. Rest the parcels at room temperature for 1 hour to let the flavours marry. Serve at room temperature, untied at the table so each guest can unwrap their own. Eat within 24 hours; the com hardens by day two.',
            tip: 'Banh com is traditionally given in pairs as engagement gifts. The pair symbolises a couple.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
