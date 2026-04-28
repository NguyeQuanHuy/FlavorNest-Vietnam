'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-thap-cam',
    title: 'Pomelo Sweet Soup',
    subtitle: 'Translucent pomelo pith pearls in fragrant pandan coconut milk — delicate, floral, and unlike anything else.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.7,
    baseServings: 6,
    heroImage: 'https://images.unsplash.com/photo-1621955964441-c173e01c135b?auto=format&fit=crop&w=1600&q=85',
    intro: 'Che buoi is the most labour-intensive dessert in this collection and the most rewarding. The white pith of a pomelo is soaked, squeezed, and coated in tapioca starch until each piece becomes a translucent, chewy pearl with a faintly bitter edge that cuts through the sweetness of pandan-scented coconut milk. It takes patience. The result is unlike any other Vietnamese dessert: subtle, textural, and quietly extraordinary.',
    ingredientSections: [
        {
            title: 'Pomelo pith pearls',
            items: [
                { amount: 1, name: 'large pomelo', note: 'white pith only, no fruit flesh' },
                { amount: 100, unit: 'g', name: 'tapioca starch', note: 'for coating' },
                { amount: 3, unit: 'tbsp', name: 'caster sugar' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
        {
            title: 'Pandan coconut broth',
            items: [
                { amount: 600, unit: 'ml', name: 'water' },
                { amount: 4, name: 'pandan leaves', note: 'tied in a knot' },
                { amount: 100, unit: 'g', name: 'caster sugar' },
                { amount: 200, unit: 'ml', name: 'coconut milk', note: 'full-fat' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
        {
            title: 'Topping',
            items: [
                { amount: 60, unit: 'ml', name: 'coconut cream' },
                { amount: 1, unit: 'tbsp', name: 'toasted sesame seeds' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the pomelo pith',
            description: 'Peel the pomelo and remove all yellow skin. Tear the white pith into small pieces roughly 1 to 2 cm. Soak in cold water for 30 minutes, then squeeze out all water firmly. Repeat soaking and squeezing 3 times to remove bitterness.',
            tip: 'Do not skip the repeated soaking. One soak leaves the pith too bitter; three soaks brings it to the right balance.',
        },
        {
            title: 'Coat with tapioca starch',
            description: 'Squeeze the pith completely dry one final time. Toss with sugar and salt, then coat thoroughly in tapioca starch until every piece is well covered. Shake off any excess.',
        },
        {
            title: 'Blanch the pearls',
            description: 'Bring a large pot of water to a rolling boil. Drop in the coated pith pieces and cook for 3 to 4 minutes until the tapioca coating turns completely translucent. Remove with a slotted spoon and transfer immediately to cold water to stop cooking.',
            tip: 'The pearls are ready when they look translucent on the outside with the white pith still faintly visible inside.',
        },
        {
            title: 'Make the pandan broth',
            description: 'Combine water and pandan leaves in a saucepan. Bring to a boil and simmer for 10 minutes until fragrant and pale green. Remove pandan leaves. Add sugar and salt, stir to dissolve. Reduce heat to low and stir in coconut milk. Do not boil after adding coconut milk.',
        },
        {
            title: 'Assemble and serve',
            description: 'Drain the pomelo pearls and divide among bowls. Ladle warm pandan coconut broth over the top. Finish with a spoonful of coconut cream and a scatter of toasted sesame seeds. Serve warm or at room temperature.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
