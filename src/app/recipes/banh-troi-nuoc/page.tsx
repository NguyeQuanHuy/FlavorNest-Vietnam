'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-troi-nuoc',
    title: 'Floating Rice Dumplings',
    subtitle: 'Small, white, and perfectly round — glutinous rice dumplings filled with palm sugar, boiled until they float.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 20,
    heroImage: 'https://images.unsplash.com/photo-1607301406259-dfb186e15de8?auto=format&fit=crop&w=1600&q=85',
    intro: 'Banh troi nuoc is one of Vietnam\'s oldest desserts, eaten on the Cold Food Festival on the third day of the third lunar month. The name means floating cake — the dumplings are done when they rise to the surface of boiling water. Inside each smooth white ball is a small cube of raw palm sugar that melts during cooking into a dark, caramel pool. They are served in a ginger-scented syrup and finished with toasted sesame seeds and shredded coconut.',
    ingredientSections: [
        {
            title: 'Dough',
            items: [
                { amount: 250, unit: 'g', name: 'glutinous rice flour' },
                { amount: 160, unit: 'ml', name: 'warm water', note: 'adjust gradually' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
        {
            title: 'Filling',
            items: [
                { amount: 80, unit: 'g', name: 'palm sugar', note: 'cut into 20 small cubes' },
            ],
        },
        {
            title: 'Ginger syrup',
            items: [
                { amount: 500, unit: 'ml', name: 'water' },
                { amount: 80, unit: 'g', name: 'caster sugar' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'peeled, thinly sliced' },
            ],
        },
        {
            title: 'Topping',
            items: [
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
                { amount: 2, unit: 'tbsp', name: 'shredded coconut', note: 'toasted until golden' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the ginger syrup',
            description: 'Combine water, sugar, and ginger slices in a small saucepan. Bring to a boil, stir to dissolve sugar, then simmer for 10 minutes until lightly fragrant. Remove from heat and set aside.',
        },
        {
            title: 'Make the dough',
            description: 'Combine glutinous rice flour and salt in a bowl. Add warm water gradually, mixing with your hands until a smooth, pliable dough forms. Cover with a damp cloth and rest for 10 minutes.',
            tip: 'The dough should not crack when you roll it into a ball. If it does, it needs a little more water.',
        },
        {
            title: 'Wrap the dumplings',
            description: 'Divide dough into 20 equal portions. Flatten each into a disc. Place one palm sugar cube in the centre, gather edges, and pinch firmly to seal with no cracks. Roll between palms into a smooth, round ball.',
            tip: 'Keep finished dumplings covered with a damp cloth while you work. Exposed dough dries out and cracks when boiled.',
        },
        {
            title: 'Boil until they float',
            description: 'Bring a large pot of water to a rolling boil. Drop dumplings in batches of 8 to 10, stirring gently to prevent sticking. Cook until they float to the surface, then continue for 2 more minutes. Remove with a slotted spoon and transfer into the ginger syrup.',
            tip: 'The floating is the signal, not the timer. Trust the float.',
        },
        {
            title: 'Serve',
            description: 'Arrange 4 to 5 dumplings in each bowl with a ladleful of warm ginger syrup. Scatter toasted sesame seeds and shredded coconut generously over the top. Serve warm — the palm sugar centre should still be molten when you break the dumpling open.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
