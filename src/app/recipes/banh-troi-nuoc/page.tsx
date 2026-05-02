'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-troi-nuoc',
    title: 'Floating Glutinous Rice Balls',
    subtitle: 'Banh troi nuoc — chewy rice balls filled with mung bean paste, served in a warm ginger-syrup with toasted sesame.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/banh-troi-nuoc.jpg',
    intro: 'Banh troi nuoc is the dessert that arrives at the Cold Foods Festival in early March (Tet Han Thuc) — round white rice balls filled with sweet mung bean paste, floating in a warm syrup perfumed with ginger. The dish has 4,000 years of Chinese-Vietnamese ancestry and a quiet philosophical weight: the round shape symbolises completeness, the white colour symbolises purity, and the floating in syrup symbolises the human passage through life. None of which prevents it from being delicious. The chewy outer shell and warm sweet centre is one of those textures you cannot describe but never forget.',
    ingredientSections: [
        {
            title: 'Mung bean filling',
            items: [
                { amount: 100, unit: 'g', name: 'split peeled mung beans', note: 'soaked 2 hours' },
                { amount: 60, unit: 'g', name: 'caster sugar' },
                { amount: 60, unit: 'ml', name: 'coconut milk' },
                { amount: 1, name: 'pinch of sea salt' },
                { amount: 1, unit: 'tsp', name: 'pomelo flower water', note: 'optional, traditional' },
            ],
        },
        {
            title: 'Rice ball wrapper',
            items: [
                { amount: 250, unit: 'g', name: 'glutinous rice flour' },
                { amount: 180, unit: 'ml', name: 'warm water', note: 'roughly, adjust as needed' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
        {
            title: 'Ginger syrup',
            items: [
                { amount: 100, unit: 'g', name: 'palm sugar' },
                { amount: 600, unit: 'ml', name: 'water' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'sliced thin' },
                { amount: 2, name: 'fresh pandan leaves', note: 'tied in a knot' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, unit: 'tbsp', name: 'roasted sesame seeds' },
                { amount: 60, unit: 'ml', name: 'coconut cream', note: 'optional drizzle' },
                { amount: 30, unit: 'g', name: 'shredded fresh coconut', note: 'optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Cook and mash the mung beans',
            description: 'Drain the soaked mung beans. Steam over simmering water for 25 minutes until completely soft. While still hot, transfer to a heavy pan with sugar, coconut milk and salt. Cook over low heat, stirring constantly, for 8 minutes until the mixture pulls away from the pan and forms a smooth dry paste. Off heat, stir in pomelo flower water if using. Cool completely.',
            tip: 'The filling must be dry enough to hold a shape. If it sticks to your fingers, cook longer.',
        },
        {
            title: 'Form the filling balls',
            description: 'Divide the cooled mung bean paste into 16 small balls about the size of a hazelnut. Roll each between your palms until smooth and round. Set on a plate.',
        },
        {
            title: 'Make the rice flour dough',
            description: 'In a bowl, combine glutinous rice flour and salt. Slowly add warm water while mixing until a soft pliable dough forms — it should be smooth and not sticky. Knead for 3 minutes. Cover with a damp cloth and rest 10 minutes.',
            tip: 'Add water a tablespoon at a time at the end. Too wet and the dough sticks; too dry and it cracks.',
        },
        {
            title: 'Wrap each ball',
            description: 'Divide rice flour dough into 16 portions. Flatten each into a small disc. Place a mung bean ball in the centre and pull the edges of the disc up around it, pinching to seal. Roll between your palms until smooth and round. The finished ball should be about 3cm across.',
            tip: 'Wet your hands lightly before rolling. It stops the dough from cracking and gives a glossy surface.',
        },
        {
            title: 'Make the ginger syrup',
            description: 'In a wide saucepan, combine palm sugar, water, sliced ginger and pandan leaves. Bring to a gentle simmer for 8 minutes until the sugar dissolves and the syrup turns faintly amber and aromatic with ginger.',
        },
        {
            title: 'Boil the rice balls',
            description: 'Lower the rice balls gently into the simmering ginger syrup. Cook for 5 minutes. The balls are ready when they all float to the surface and the dough turns translucent. Remove pandan leaves.',
            tip: 'The balls sinking and floating is the visual cue. They are not done until every one floats.',
        },
        {
            title: 'Serve warm',
            description: 'Ladle 4 balls and a generous amount of ginger syrup into each small bowl. Drizzle with coconut cream and shower with toasted sesame seeds and shredded coconut. Eat immediately while warm — the ginger fragrance and the chewy-soft contrast of shell and filling is at its peak in the first 5 minutes.',
            tip: 'Banh troi nuoc does not keep. Eat the same day; reheating turns the rice balls gummy.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}