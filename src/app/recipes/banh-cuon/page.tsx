'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-cuon',
    title: 'Steamed Rice Rolls',
    subtitle: 'Silky steamed rice sheets rolled with seasoned pork and wood ear mushrooms — the morning ritual of Hanoi.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=1600&q=85',
    intro: 'Banh cuon Ha Noi is one of the most technically demanding Vietnamese breakfast dishes and one of the most rewarding. A thin batter of rice flour and tapioca starch is poured onto a stretched muslin cloth over simmering water, covered for 30 seconds until just set, then lifted with a wooden dowel and rolled around a filling of seasoned ground pork and wood ear mushrooms. The result is translucent, silky, impossibly delicate. Served with crispy fried shallots, sliced cha lua, and a bowl of sweetened fish sauce.',
    ingredientSections: [
        {
            title: 'Rice batter',
            items: [
                { amount: 200, unit: 'g', name: 'rice flour' },
                { amount: 30, unit: 'g', name: 'tapioca starch' },
                { amount: 500, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tsp', name: 'vegetable oil' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
        {
            title: 'Pork filling',
            items: [
                { amount: 300, unit: 'g', name: 'ground pork' },
                { amount: 30, unit: 'g', name: 'dried wood ear mushrooms', note: 'soaked, finely chopped' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, name: 'pinch of pepper' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 100, unit: 'g', name: 'cha lua (Vietnamese pork sausage)', note: 'sliced' },
                { amount: 1, name: 'bunch Vietnamese mint or perilla' },
                { amount: 120, unit: 'ml', name: 'nuoc cham dipping sauce' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the batter',
            description: 'Whisk rice flour, tapioca starch, water, oil, and salt until completely smooth with no lumps. Rest for 30 minutes. The batter should be very thin — thinner than crepe batter.',
        },
        {
            title: 'Cook the filling',
            description: 'Saute shallots in oil until soft. Add ground pork and stir-fry until cooked through. Add wood ear mushrooms, fish sauce, sugar, and pepper. Cook 2 more minutes until fragrant and dry. Set aside.',
        },
        {
            title: 'Set up the steaming station',
            description: 'Stretch a piece of muslin cloth tightly over a wide pot of simmering water, securing it with rubber bands or string. The cloth should be drum-tight and level. Brush lightly with oil.',
            tip: 'A non-stick pan on very low heat works as a substitute if you do not have a muslin steamer. Grease well and cover with a lid.',
        },
        {
            title: 'Steam each sheet',
            description: 'Ladle 3 to 4 tablespoons of batter onto the cloth in a thin circle. Cover with a lid for 30 to 40 seconds until the sheet turns from opaque to translucent and no longer looks wet. Spoon a line of pork filling along one edge.',
        },
        {
            title: 'Roll and serve',
            description: 'Using a flat wooden dowel or spatula, roll the sheet over the filling and slide off the cloth onto a plate. Work quickly — the sheets cool and tear if left too long. Top with crispy shallots, cha lua, and fresh herbs. Serve with nuoc cham.',
            tip: 'The first 2 or 3 sheets are almost always imperfect. Do not be discouraged — the technique clicks suddenly and each sheet improves dramatically.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
