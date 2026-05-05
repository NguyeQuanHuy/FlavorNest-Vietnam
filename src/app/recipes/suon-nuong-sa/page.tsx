'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'suon-nuong-sa',
    title: 'Lemongrass Grilled Pork Ribs (Suon Nuong Sa)',
    subtitle: 'Smoky, aromatic ribs marinated with lemongrass, grilled until caramelized and slightly charred.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '60 min',
    rating: 4.9,
    baseServings: 3,
    heroImage: '/images/recipes/suon-nuong-sa.jpg',

    intro: `Sườn nướng sả is a popular Vietnamese grilled dish known for its bold aroma and deep, smoky flavor.

Pork ribs are marinated with crushed lemongrass, garlic, fish sauce, and a touch of sweetness, then grilled over charcoal until the edges are caramelized and slightly charred.

The result is tender meat infused with citrusy lemongrass fragrance and smoky depth — perfect with rice, vermicelli, or eaten straight off the grill.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 600, unit: 'g', name: 'pork ribs', note: 'cut into bite-size pieces' },
                { amount: 4, name: 'lemongrass stalks', note: 'finely chopped and crushed' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'finely chopped' },
                { amount: 2, name: 'red chilies', note: 'optional' },
            ],
        },
        {
            title: 'Marinade',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tbsp', name: 'oil' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare the ribs',
            description: 'Clean pork ribs and cut into small pieces. Pat dry to help absorb marinade better.',
        },
        {
            title: 'Make marinade',
            description: 'Mix lemongrass, garlic, shallots, fish sauce, sugar, soy sauce, oyster sauce, oil, and black pepper.',
            tip: 'Crushed lemongrass releases essential oils that define the dish’s aroma.',
        },
        {
            title: 'Marinate',
            description: 'Coat ribs thoroughly with marinade. Let rest for at least 30 minutes (or longer for deeper flavor).',
        },
        {
            title: 'Grill the ribs',
            description: 'Grill over medium-hot charcoal, turning frequently until ribs are cooked through and slightly charred on the edges.',
            tip: 'Charcoal grilling gives the signature smoky Vietnamese flavor.',
        },
        {
            title: 'Finish and serve',
            description: 'Remove from grill and serve hot with rice, pickled vegetables, or fresh herbs.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
