'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-ga-hoi-an',
    title: 'Cháo Gà Hội An (Hội An Chicken Rice Porridge)',
    subtitle: 'A whole chicken poached in clear broth, the meat shredded and returned to the pot with jasmine rice cooked until each grain blooms and dissolves into a silky, golden porridge — finished at the table with freshly ground black pepper, crispy shallots, ginger, and lime. The morning bowl of the ancient town.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/chao-ga-hoi-an.jpg',
    intro: `Cháo gà Hội An is the chicken rice porridge that the ancient town of Hội An wakes up to — sold from street carts before 7am and gone by 9, a bowl of extraordinary simplicity that asks very little of the cook and gives back more than the ingredients suggest. The Hội An version is distinct from the rice congee of the north and the cháo of Saigon: it is thicker and less watered-down than Cantonese congee, more richly flavored than plain northern cháo, and finished with a specific combination of toppings — fresh ginger julienned, spring onion oil, crispy shallots, and freshly ground black pepper applied at the table — that elevates it from plain porridge to something you would travel for. The technique is the whole-chicken method: the chicken is poached first in a clear broth with ginger and lemongrass, the meat picked off the bones while still warm, and the shredded chicken returned to the pot along with the raw rice that is then cooked in the rich poaching broth until the grains break down and the starch creates the silky, slightly viscous body of a proper cháo. This approach — cooking the rice in the chicken broth rather than adding stock to separately cooked rice — is what produces the depth of flavor that a shorter method cannot approximate. Cháo gà Hội An is the bowl to eat when someone is unwell, when the morning is cold, when the body wants something warm and gentle, or simply when there is a whole chicken in the kitchen and an hour to spare.`,
    ingredientSections: [
        {
            title: 'Chicken and broth',
            items: [
                { amount: 1, name: 'whole chicken, 1.2-1.4kg', note: 'free-range produces the richest broth' },
                { amount: 2, unit: 'L', name: 'water' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '4 slices, smashed — for the poaching broth' },
                { amount: 3, name: 'spring onions', note: 'tied in a bundle — for the poaching broth' },
                { amount: 1, name: 'lemongrass stalk', note: 'bruised — the Hội An addition' },
                { amount: 1.5, unit: 'tbsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Rice',
            items: [
                { amount: 200, unit: 'g', name: 'jasmine rice', note: 'rinsed once only — the remaining starch helps thicken the porridge. Do not over-rinse.' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil or chicken fat', note: 'for toasting the rice briefly before adding to the broth' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce', note: 'added gradually — taste as you go' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Table toppings — the essential finishing',
            items: [
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'peeled and finely julienned — the defining topping of Hội An cháo gà' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 3, unit: 'tbsp', name: 'shallot-infused oil' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, name: 'small bunch cilantro', note: 'roughly torn' },
                { amount: 1, unit: 'tsp', name: 'freshly ground black pepper', note: 'coarse grind — essential, generous, non-negotiable' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Poach the whole chicken',
            description: 'Place the chicken breast-side down in a large pot. Cover with 2L cold water. Add ginger, spring onion bundle, lemongrass, salt, and sugar. Bring to a boil over medium-high heat. Reduce immediately to the lowest possible simmer. Poach for 35-40 minutes until the juices at the thigh joint run completely clear. Turn off the heat, cover, and rest the chicken in the broth for 15 minutes. Remove the chicken — reserve all the broth.',
            tip: 'The poaching broth is the base of the entire porridge. This is why a whole chicken produces so much better cháo than chicken pieces — the carcass, cartilage, and bones give body and gelatin to the liquid that breast or thigh alone cannot.',
        },
        {
            title: 'Pick the chicken while warm',
            description: 'While the chicken is still warm enough to handle comfortably, remove all the meat from the bones. Tear or shred into medium pieces — not too fine, not too chunky. Set aside. Return the carcass, bones, and skin to the broth. Simmer for another 20 minutes to extract maximum flavor. Strain through a fine sieve — discard the solids. You should have approximately 1.5-1.8L of rich, golden chicken broth.',
            tip: 'Shredding while warm is important — the meat separates along the natural grain much more cleanly when warm. Cold chicken compresses and tears less cleanly. A mix of larger pulled pieces and smaller shreds produces the best texture in the finished bowl.',
        },
        {
            title: 'Toast the rice — the Hội An technique',
            description: 'Heat a large pot over medium heat. Add oil or chicken fat. Add the rinsed rice and stir for 2-3 minutes until each grain is coated in fat and very faintly golden at the edges. This brief toasting adds a subtle nuttiness to the porridge and, crucially, slightly firms the outer starch layer so the grains break down more gradually — producing a porridge with distinct grain remnants rather than a completely uniform paste.',
            tip: 'The rice toasting step is optional but produces noticeably better cháo. Un-toasted rice added directly to broth breaks down faster and less evenly, producing a starchier, more glue-like result. Toasted rice gives more control over the final texture.',
        },
        {
            title: 'Cook rice in the chicken broth',
            description: 'Pour the hot strained chicken broth over the toasted rice. Bring to a boil, stirring. Reduce to a medium-low simmer. Cook uncovered, stirring every 5 minutes to prevent the rice from sticking to the bottom, for 30-40 minutes. The rice grains should bloom and partially dissolve — the porridge becomes thicker and more viscous as the starch is released. The correct consistency: falls slowly from a spoon in ribbons, not pours like soup and not stands like paste.',
            tip: 'The correct texture of Hội An cháo gà is thicker than Cantonese congee but thinner than northern Vietnamese cháo. It should coat the spoon and flow slowly. If too thick, add hot water or broth. If too thin, simmer uncovered for longer.',
        },
        {
            title: 'Return chicken and season',
            description: 'Add the shredded chicken to the porridge. Stir to distribute. Season gradually with fish sauce, sugar, and white pepper — taste after each addition. The porridge should taste deeply savory from the chicken broth, clean and slightly sweet, with the white pepper providing the only background heat. Adjust. Bring back to a simmer for 3-4 minutes so the chicken is warmed through completely.',
            tip: 'Season the porridge with the chicken already in it — the chicken absorbs some of the salt and changes the seasoning balance. Always season with the protein present.',
        },
        {
            title: 'Serve immediately — toppings at the table',
            description: 'Ladle the hot porridge into deep bowls. Drizzle shallot oil generously. Pile julienned ginger in the center — more than looks reasonable. Add spring onion and cilantro. Scatter crispy shallots. Grind black pepper directly over each bowl — a generous amount, more than you think. Serve with lime wedges and sliced chili alongside. The toppings are not garnish — they are half the dish. The ginger in particular must be present in every spoonful.',
            tip: 'The freshly ground black pepper is the flavor that defines cháo gà Hội An above any other version of chicken porridge. It should be visible on the surface. Use a peppermill at the table, not pre-ground pepper. This single ingredient is the difference between a good bowl and the bowl people remember.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
