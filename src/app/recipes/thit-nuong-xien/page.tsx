'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'thit-nuong-xien',
    title: 'Vietnamese Grilled Meat Skewers (Thit Nuong Xien)',
    subtitle: 'Smoky, juicy skewers glazed with garlic, lemongrass, and a touch of sweetness.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/thit-nuong-xien.jpg',

    intro: `Thịt nướng xiên is a popular Vietnamese street food made from marinated pork or beef skewered and grilled over charcoal.

The meat is infused with garlic, lemongrass, fish sauce, and a touch of sugar, then grilled until slightly caramelized and smoky. The result is juicy, aromatic skewers with a perfect balance of savory, sweet, and smoky flavors.

Often served with rice paper, fresh herbs, and dipping sauce, it is a staple at street stalls and backyard BBQs across Vietnam.`,

    ingredientSections: [
        {
            title: 'Main ingredients',
            items: [
                { amount: 500, unit: 'g', name: 'pork shoulder', note: 'thinly sliced' },
                { amount: 3, name: 'lemongrass stalks', note: 'finely chopped' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'finely chopped' },
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
        {
            title: 'To serve',
            items: [
                { amount: 12, name: 'bamboo skewers', note: 'soaked in water' },
                { amount: 1, name: 'rice paper sheets' },
                { amount: 1, name: 'bunch fresh herbs', note: 'mint, basil, perilla' },
                { amount: 1, name: 'cucumber', note: 'sliced' },
                { amount: 120, unit: 'ml', name: 'dipping sauce' },
            ],
        },
    ],

    steps: [
        {
            title: 'Prepare the meat',
            description: 'Slice pork shoulder thinly so it cooks quickly and absorbs marinade better.',
        },
        {
            title: 'Make marinade',
            description: 'Mix lemongrass, garlic, shallots, fish sauce, sugar, soy sauce, oyster sauce, oil, and black pepper.',
            tip: 'Crushed lemongrass releases essential oils that define the aroma.',
        },
        {
            title: 'Marinate',
            description: 'Coat meat thoroughly and let rest for at least 30 minutes (or longer for deeper flavor).',
        },
        {
            title: 'Skewer',
            description: 'Thread marinated meat onto bamboo skewers, pressing firmly but not too tight.',
        },
        {
            title: 'Grill',
            description: 'Grill over medium-hot charcoal, turning frequently until meat is cooked and slightly caramelized.',
            tip: 'Charcoal grilling creates the signature smoky street food flavor.',
        },
        {
            title: 'Serve',
            description: 'Serve hot with rice paper, fresh herbs, vegetables, and dipping sauce. Wrap and enjoy immediately.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
