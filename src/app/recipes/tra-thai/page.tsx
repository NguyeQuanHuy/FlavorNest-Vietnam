'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tra-thai',
    title: 'Thai-Style Milk Tea',
    subtitle: 'Bright orange, rich with condensed milk, addictive from the first sip.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '10 min',
    rating: 4.7,
    baseServings: 2,
    heroImage: '/images/recipes/tra-thai.jpg',
    intro: 'Tra sua Thai arrived in Vietnamese milk tea shops in the 2010s and never left. The signature orange colour comes from Ceylon or Assam tea blended with spices like star anise and tamarind seed, brewed strong and sweetened with condensed milk over ice. It is richer and more perfumed than standard milk tea — floral, slightly spiced, and deeply satisfying. Add tapioca pearls for the full boba experience.',
    ingredientSections: [
        {
            title: 'Tea base',
            items: [
                { amount: 3, unit: 'tbsp', name: 'Thai tea mix', note: 'or strong Ceylon/Assam tea with 1/4 tsp each of star anise powder and vanilla' },
                { amount: 400, unit: 'ml', name: 'hot water', note: 'boiling' },
            ],
        },
        {
            title: 'Assembly',
            items: [
                { amount: 4, unit: 'tbsp', name: 'sweetened condensed milk' },
                { amount: 4, unit: 'tbsp', name: 'evaporated milk or whole milk' },
                { amount: 2, unit: 'cups', name: 'ice cubes' },
                { amount: 100, unit: 'g', name: 'cooked tapioca pearls', note: 'optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Brew the tea',
            description: 'Add Thai tea mix to a heatproof jug. Pour boiling water over and steep for 5 minutes. Strain through a fine mesh strainer or cheesecloth, pressing to extract all liquid. The tea should be a deep, opaque orange.',
            tip: 'Thai tea mix is available at any Asian supermarket. The orange colour is partly from food colouring in the blend — this is traditional and expected.',
        },
        {
            title: 'Sweeten while hot',
            description: 'Stir condensed milk into the hot strained tea until fully dissolved. Allow to cool to room temperature.',
        },
        {
            title: 'Assemble over ice',
            description: 'If using tapioca pearls, place them at the bottom of each glass first. Fill glasses with ice. Pour the sweetened tea over the ice, filling three-quarters of the glass. Pour evaporated milk or whole milk over the top without stirring for the layered effect. Serve with a wide straw.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
