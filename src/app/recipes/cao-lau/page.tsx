'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cao-lau',
    title: 'Hoi An Cao Lau Noodles',
    subtitle: 'A dish so tied to one place that legend says it cannot truly be replicated anywhere else.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/cao-lau.jpg',
    intro: 'Cao lau exists only in Hoi An. The legend holds that the noodles require water drawn from a specific ancient Cham well in the old town and ash from a particular wood to treat the dough. Whether or not you believe the legend, the dish is undeniably unique: thick, chewy noodles the colour of wheat, topped with slices of char siu-style roasted pork, crispy rice crackers, fresh herbs, and just enough broth to moisten everything. It is not a soup. It is barely sauced. It is its own category.',
    ingredientSections: [
        {
            title: 'Noodles (simplified)',
            items: [
                { amount: 400, unit: 'g', name: 'thick wheat noodles or udon', note: 'closest substitute for cao lau noodles outside Hoi An' },
                { amount: 1, unit: 'tsp', name: 'baking soda', note: 'added to boiling water, replicates ash-water treatment' },
            ],
        },
        {
            title: 'Char siu pork',
            items: [
                { amount: 500, unit: 'g', name: 'pork shoulder or neck', note: 'cut into thick slices' },
                { amount: 3, unit: 'tbsp', name: 'soy sauce' },
                { amount: 2, unit: 'tbsp', name: 'honey' },
                { amount: 1, unit: 'tbsp', name: 'hoisin sauce' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tsp', name: 'five spice powder' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
            ],
        },
        {
            title: 'Broth and toppings',
            items: [
                { amount: 300, unit: 'ml', name: 'pork or chicken broth' },
                { amount: 2, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 60, unit: 'g', name: 'crispy wonton skins or rice crackers', note: 'broken into shards' },
                { amount: 1, name: 'bunch bean sprouts' },
                { amount: 1, name: 'bunch Vietnamese mint and perilla' },
                { amount: 2, name: 'spring onions', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the pork',
            description: 'Combine soy sauce, honey, hoisin, fish sauce, five spice, and garlic. Add pork slices and marinate for at least 2 hours, ideally overnight in the fridge.',
        },
        {
            title: 'Roast the pork',
            description: 'Preheat oven to 200C. Place pork on a rack over a foil-lined tray. Roast for 20 minutes. Brush with remaining marinade, turn, and roast 10 more minutes until caramelised and slightly charred at the edges. Rest 5 minutes before slicing.',
            tip: 'For authentic char, finish under the grill for 2 minutes on each side.',
        },
        {
            title: 'Prepare the broth',
            description: 'Simmer broth with soy sauce and sugar for 5 minutes. Taste — it should be savoury and light, just enough to dress the noodles, not enough to make a soup.',
        },
        {
            title: 'Cook the noodles',
            description: 'Bring a large pot of water to boil with baking soda added. Cook noodles according to packet time. Drain and rinse with cold water. Toss with a little oil to prevent sticking.',
        },
        {
            title: 'Assemble',
            description: 'Place noodles in bowls. Ladle 3 to 4 tablespoons of warm broth over the noodles — just enough to coat. Top with sliced char siu pork, crispy crackers, bean sprouts, and fresh herbs. Serve immediately.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
