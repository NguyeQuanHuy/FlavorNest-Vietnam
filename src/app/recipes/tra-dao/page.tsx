'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tra-dao',
    title: 'Peach Ice Tea (Trà Đào)',
    subtitle:
        'Peach Ice Tea — a refreshing blend of robust black tea, sweet aromatic peach syrup, and crunchy fruit slices, made famous by Saigon’s cafe culture.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/tra-dao.jpg',
    intro:
        'Trà Đào became an overnight sensation in Vietnam and has since turned into a modern classic. It’s not just about the tea; it’s about the experience of biting into a crisp, syrupy peach slice between sips of cold, fragrant black tea. While many cafes use pre-made syrups, the best versions balance the tannins of the tea with a hint of lemongrass or mint, making it the ultimate thirst-quencher for a tropical climate.',
    ingredientSections: [
        {
            title: 'The Tea Base',
            items: [
                { amount: 2, unit: 'bags', name: 'black tea', note: 'Earl Grey or Oolong also work well' },
                { amount: 300, unit: 'ml', name: 'hot water', note: 'around 90°C' },
                { amount: 2, unit: 'stalks', name: 'lemongrass', note: 'bruised, to infuse with tea' },
            ],
        },
        {
            title: 'Peach and Syrup',
            items: [
                { amount: 4, unit: 'slices', name: 'canned peaches', note: 'cut into bite-sized wedges' },
                { amount: 4, unit: 'tbsp', name: 'peach syrup', note: 'from the peach tin' },
                { amount: 1, unit: 'tbsp', name: 'sugar or honey', note: 'optional, adjust to taste' },
                { amount: 1, unit: 'tsp', name: 'lime juice', note: 'to balance the sweetness' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 1, unit: 'cup', name: 'ice cubes' },
                { amount: 2, unit: 'sprigs', name: 'fresh mint', note: 'for aroma' },
            ],
        },
    ],
    steps: [
        {
            title: 'Brew the tea',
            description: 'Steep the black tea bags and bruised lemongrass in hot water for 5 minutes. Remove the bags and lemongrass, then let the tea cool slightly.',
            tip: 'Do not over-steep the tea, or it will become too bitter and overpower the delicate peach aroma.',
        },
        {
            title: 'Prepare the peach mix',
            description: 'In a shaker or a large glass, combine the brewed tea, peach syrup, lime juice, and sugar. Stir or shake well until the sugar is dissolved.',
        },
        {
            title: 'Layer the drink',
            description: 'Add a generous amount of ice to two tall glasses. Pour the tea mixture over the ice.',
            tip: 'If you want a "fancier" look, shake the tea with ice first to create a thin layer of foam on top.',
        },
        {
            title: 'Garnish and serve',
            description: 'Top each glass with peach slices and a sprig of fresh mint. Serve immediately with a straw and a long spoon to reach the peaches.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
