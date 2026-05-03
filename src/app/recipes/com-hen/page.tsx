'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-hen',
    title: 'Baby Clam Rice',
    subtitle: 'Hue\'s most beloved hidden dish — tiny river clams over cold rice with a complex cascade of toppings.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/com-hen.jpg',
    intro: 'Com hen is eaten for breakfast in Hue, which tells you everything about the city. This is not simple morning food — it is a carefully composed dish of cold rice topped with stir-fried baby clams, shredded banana blossom, roasted peanuts, sesame seeds, crispy pork cracklings, fresh herbs, and a ladle of hot clam broth poured over at the table to warm everything through. The fermented shrimp paste (mam tom) stirred in at the end is optional but transformative. Nothing else in Vietnamese cuisine tastes quite like it.',
    ingredientSections: [
        {
            title: 'Clams',
            items: [
                { amount: 500, unit: 'g', name: 'baby clams (hen)', note: 'cleaned; or small cockles as substitute' },
                { amount: 2, name: 'lemongrass stalks', note: 'bruised' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'chilli flakes' },
                { amount: 1, unit: 'tbsp', name: 'vegetable oil' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 100, unit: 'g', name: 'banana blossom', note: 'shredded finely' },
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'crushed' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
                { amount: 40, unit: 'g', name: 'pork cracklings', note: 'broken into pieces' },
                { amount: 1, name: 'bunch Vietnamese mint and perilla' },
                { amount: 2, name: 'spring onions', note: 'sliced' },
                { amount: 1, unit: 'tbsp', name: 'mam tom (fermented shrimp paste)', note: 'optional, served on side' },
            ],
        },
        {
            title: 'Base',
            items: [
                { amount: 400, unit: 'g', name: 'cooked jasmine rice', note: 'cooled to room temperature' },
            ],
        },
    ],
    steps: [
        {
            title: 'Cook and open the clams',
            description: 'Place clams in a pot with 300ml water and lemongrass. Bring to a boil over high heat, cover, and cook for 3 to 4 minutes until all clams open. Discard any that remain closed. Remove clam meat from shells and reserve the broth separately.',
            tip: 'Baby clams cook fast. The moment they open is the moment to stop — overcooked clams become rubbery and lose their briny sweetness.',
        },
        {
            title: 'Stir-fry the clam meat',
            description: 'Heat oil in a wok over high heat. Add shallots and stir-fry 1 minute. Add clam meat, fish sauce, and chilli flakes. Toss over high heat for 90 seconds until fragrant and lightly caramelised. Remove from heat.',
        },
        {
            title: 'Strain and season the broth',
            description: 'Strain reserved clam broth through a fine sieve. Season with a little fish sauce. Keep hot.',
        },
        {
            title: 'Assemble the bowl',
            description: 'Place a mound of room-temperature rice in each bowl. Top with stir-fried clams, shredded banana blossom, spring onions, and fresh herbs. Add crushed peanuts, sesame seeds, and cracklings.',
        },
        {
            title: 'Finish at the table',
            description: 'Ladle hot clam broth over the bowl at the table — just enough to steam the herbs and warm the rice without making it soupy. Serve mam tom on the side for those who want it. Stir everything together before eating.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
