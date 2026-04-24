'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-nam',
    title: 'Flat Steamed Rice Dumplings',
    subtitle: 'Paper-thin Hue parcels steamed in banana leaf — one of the most delicate dumplings in Vietnamese cuisine.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '1 hr 30 min',
    rating: 4.6,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&w=1600&q=85',
    intro: 'Banh nam is a Hue heritage dish that rewards patience and precision. The dough is made from two types of rice flour cooked into a smooth, translucent paste. Each portion is spread paper-thin on a banana leaf, topped with a small amount of seasoned pork and shrimp, folded and steamed. The banana leaf infuses a subtle green fragrance that no other wrapping can replicate. These are eaten by the dozen at Hue snack restaurants as part of a spread of small dishes.',
    ingredientSections: [
        {
            title: 'Dough',
            items: [
                { amount: 150, unit: 'g', name: 'rice flour' },
                { amount: 50, unit: 'g', name: 'tapioca starch' },
                { amount: 400, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tbsp', name: 'vegetable oil' },
            ],
        },
        {
            title: 'Filling',
            items: [
                { amount: 200, unit: 'g', name: 'ground pork' },
                { amount: 100, unit: 'g', name: 'dried shrimp', note: 'soaked and roughly chopped' },
                { amount: 20, unit: 'g', name: 'dried wood ear mushrooms', note: 'soaked and finely chopped' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, name: 'pinch of pepper' },
            ],
        },
        {
            title: 'For wrapping',
            items: [
                { amount: 8, name: 'banana leaf squares', note: '20x20cm, wiped clean, softened over flame' },
            ],
        },
    ],
    steps: [
        {
            title: 'Cook the dough',
            description: 'Whisk rice flour, tapioca starch, water, and salt until smooth. Pour into a saucepan and cook over medium heat, stirring constantly, until the mixture thickens into a smooth, translucent paste that pulls away from the sides — about 8 to 10 minutes. Stir in oil. Remove from heat.',
            tip: 'The dough must be completely smooth and lump-free before it thickens. Whisk the raw batter thoroughly before applying heat.',
        },
        {
            title: 'Cook the filling',
            description: 'Stir-fry shallots in oil until soft. Add pork and cook until no longer pink. Add shrimp, mushrooms, fish sauce, sugar, and pepper. Cook 3 minutes until fragrant and dry. Cool completely before using.',
        },
        {
            title: 'Soften banana leaves',
            description: 'Pass each banana leaf square briefly over a gas flame or dip in boiling water for 5 seconds until pliable and deep green. Wipe dry and brush lightly with oil.',
        },
        {
            title: 'Assemble the parcels',
            description: 'Spread 2 tablespoons of warm dough thinly over one half of each banana leaf square, leaving a 2cm border. The layer should be almost translucent — no thicker than 3mm. Place a small teaspoon of filling in the centre of the dough layer. Fold the bare half of the leaf over to cover, pressing gently to flatten.',
            tip: 'The dough must be warm and pliable to spread. If it cools and stiffens, briefly reheat over low heat with a splash of water.',
        },
        {
            title: 'Steam and serve',
            description: 'Arrange parcels in a steamer in a single layer. Steam over high heat for 12 to 15 minutes until the dough is set and translucent. Serve hot in the banana leaf with nuoc cham on the side. Unwrap at the table.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
