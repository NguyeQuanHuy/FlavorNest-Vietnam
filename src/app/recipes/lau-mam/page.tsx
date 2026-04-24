'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'lau-mam',
    title: 'Fermented Fish Hot Pot',
    subtitle: 'The boldest hot pot in Vietnam — fermented fish broth with eggplant, pork, and a mountain of fresh herbs.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1600&q=85',
    intro: `Lau mam is the Mekong Delta's most fearless dish. The broth is built on mam ca loc — fermented snakehead fish paste — a ingredient so pungent it clears the room before it clears the palate. But cooked low and slow with lemongrass, coconut milk, and pineapple, the fermented paste transforms into something extraordinary: deeply savoury, funky in the best possible way, with a richness no other broth can match. The Mekong Delta eats this for celebrations. Once you taste it, you will understand why.`,
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 150, unit: 'g', name: 'fermented fish paste (mam ca loc)', note: 'or mam ca sat; available at Vietnamese grocers' },
                { amount: 1, unit: 'l', name: 'water' },
                { amount: 200, unit: 'ml', name: 'coconut milk' },
                { amount: 2, name: 'lemongrass stalks', note: 'bruised' },
                { amount: 150, unit: 'g', name: 'fresh pineapple', note: 'cut into chunks' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'adjust to taste' },
                { amount: 2, name: 'red chillies', note: 'sliced' },
            ],
        },
        {
            title: 'Dipping ingredients',
            items: [
                { amount: 300, unit: 'g', name: 'pork belly', note: 'thinly sliced' },
                { amount: 300, unit: 'g', name: 'large prawns', note: 'shells on' },
                { amount: 200, unit: 'g', name: 'squid', note: 'cleaned and scored' },
                { amount: 2, name: 'eggplants', note: 'cut into wedges' },
                { amount: 200, unit: 'g', name: 'morning glory or water spinach' },
                { amount: 200, unit: 'g', name: 'bean sprouts' },
                { amount: 200, unit: 'g', name: 'rice noodles or udon', note: 'for the end' },
            ],
        },
        {
            title: 'Fresh herb plate',
            items: [
                { amount: 1, name: 'bunch Vietnamese mint (rau hung lui)' },
                { amount: 1, name: 'bunch fish mint (rau diep ca)', note: 'optional but traditional' },
                { amount: 1, name: 'bunch perilla (rau tia to)' },
                { amount: 1, name: 'bunch banana blossom', note: 'shredded' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the broth base',
            description: `Saute shallots and garlic in oil over medium heat until soft. Add fermented fish paste and stir constantly for 3 minutes — the paste will darken and become fragrant. This step is critical: cooking the paste removes the raw fermented edge and develops the deep flavour.`,
            tip: `Open the windows. Fermented fish paste smells aggressively when raw and when first hitting the pan. After 3 minutes of cooking it mellows dramatically. Do not judge the dish by the smell at this stage.`,
        },
        {
            title: 'Add liquid and aromatics',
            description: `Pour in water and coconut milk. Add lemongrass, pineapple, sugar, and chilli. Bring to a boil then reduce to a simmer for 20 minutes. Taste and adjust with fish sauce and sugar — the broth should be savoury, slightly sweet, funky, and complex.`,
        },
        {
            title: 'Set up the table',
            description: `Transfer broth to a portable burner at the centre of the table. Arrange all raw ingredients and the herb plate around it. Keep broth at a rolling simmer throughout the meal.`,
        },
        {
            title: 'Cook and eat',
            description: `Each person cooks their own ingredients directly in the broth. Eggplant takes 3 to 4 minutes and absorbs the broth beautifully. Pork belly takes 2 minutes. Prawns and squid take 1 to 2 minutes. Wrap cooked ingredients in fresh herbs and eat immediately.`,
            tip: `The herb plate is not a garnish — it is half the dish. Wrap every bite in a combination of mint, perilla, and banana blossom. The freshness cuts the richness of the fermented broth.`,
        },
        {
            title: 'Finish with noodles',
            description: `At the end of the meal, add rice noodles to the enriched broth and cook 2 minutes. By this point the broth will have absorbed pork, seafood, and eggplant flavour. It is the best bowl of noodles you will eat all year.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
