'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-buoi',
    title: 'Pomelo Peel Sweet Soup',
    subtitle: 'Che buoi — crunchy candied pomelo pith with mung beans in a thick coconut soup. The masterpiece of patience.',
    category: 'DESSERT',
    difficulty: 'Hard',
    totalTime: '1 hr 30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/che-buoi-mien-nam.jpg',
    intro: 'Che buoi is one of those Vietnamese desserts that demonstrates how a culture transforms scarcity into beauty. The bitter white pith of a pomelo — the part everyone else discards — is washed, salted, and squeezed obsessively for an hour to remove every trace of bitterness. Then it is dredged in tapioca starch and boiled until the squares turn translucent and glassy, with a slight crunch that no other dessert in the world has. Combined with soft yellow mung beans in a thick coconut soup, this is a Southern Vietnamese masterpiece of patience.',
    ingredientSections: [
        {
            title: 'Pomelo pith',
            items: [
                { amount: 200, unit: 'g', name: 'pomelo peel pith', note: 'white inner part only, green skin removed' },
                { amount: 2, unit: 'tbsp', name: 'sea salt', note: 'for soaking' },
                { amount: 60, unit: 'g', name: 'tapioca starch', note: 'for dredging' },
                { amount: 50, unit: 'g', name: 'sugar' },
            ],
        },
        {
            title: 'Mung beans',
            items: [
                { amount: 100, unit: 'g', name: 'split peeled mung beans', note: 'soaked 2 hours' },
                { amount: 500, unit: 'ml', name: 'water' },
            ],
        },
        {
            title: 'Coconut soup',
            items: [
                { amount: 400, unit: 'ml', name: 'coconut milk' },
                { amount: 200, unit: 'ml', name: 'coconut cream' },
                { amount: 100, unit: 'g', name: 'palm sugar' },
                { amount: 2, name: 'fresh pandan leaves', note: 'tied in a knot' },
                { amount: 1, name: 'pinch of sea salt' },
                { amount: 2, unit: 'tbsp', name: 'tapioca starch', note: 'mixed with 60ml water' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'crushed' },
                { amount: 2, unit: 'tbsp', name: 'roasted sesame seeds' },
                { amount: 4, unit: 'cups', name: 'crushed ice', note: 'optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Strip the bitter pomelo skin',
            description: 'Peel the green outer skin from the pomelo, being careful to remove all of it — any green left will turn the dessert bitter. You should be left with only the soft white pith. Cut the pith into 1cm squares.',
            tip: 'A vegetable peeler works better than a knife for stripping the green oil glands cleanly.',
        },
        {
            title: 'Salt and squeeze the pith',
            description: 'Place pith squares in a bowl, sprinkle generously with salt, and massage with your hands for 5 minutes — the pith will release a yellow-green bitter liquid. Rinse thoroughly under cold running water, then squeeze the pith squares hard between your palms to release more liquid. Repeat the salt-massage-rinse-squeeze cycle 3 to 4 times until the squeezed liquid runs clear and the pith no longer tastes bitter.',
            tip: 'This step is the entire dessert. Skipping or shortcutting will give a bitter unpleasant result. Allow the full 30 minutes.',
        },
        {
            title: 'Sweeten and starch',
            description: 'Toss the squeezed pith with 50g sugar and let macerate 15 minutes. Drain off any liquid. Dredge the squares thoroughly in tapioca starch until each is fully coated.',
        },
        {
            title: 'Boil the pith squares',
            description: 'Bring a pot of water to a boil. Drop in the starched pith squares and cook for 3 minutes — they will turn translucent and float to the surface. Drain and immediately plunge into ice water to set the texture and stop cooking. The pith should now be glassy with a slight crunch.',
        },
        {
            title: 'Cook the mung beans',
            description: 'Drain soaked mung beans. Place in a pot with 500ml water and simmer 20 minutes until tender but still holding their shape. Drain and set aside.',
        },
        {
            title: 'Build the coconut soup',
            description: 'In a heavy pot, combine coconut milk, coconut cream, palm sugar, pandan leaves and salt. Warm gently, stirring until the sugar dissolves. Whisk in the tapioca slurry and simmer 3 minutes until the soup is thickened and silky. Remove pandan leaves.',
            tip: 'Never boil coconut milk hard. It separates and turns oily.',
        },
        {
            title: 'Combine and serve',
            description: 'Stir the cooked mung beans and the glassy pomelo pith into the warm coconut soup. Warm through 2 minutes. Ladle into bowls. Top with crushed peanuts and sesame seeds. Serve warm in winter or over crushed ice in summer.',
            tip: 'The texture of glassy crunchy pith against soft mung beans is what defines che buoi. Both elements are essential.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}