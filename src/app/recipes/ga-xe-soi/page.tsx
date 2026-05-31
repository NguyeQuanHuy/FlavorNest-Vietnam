'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-xe-soi',
    title: 'Gà Xé Sợi (Vietnamese Shredded Chicken)',
    subtitle: 'Whole chicken poached in aromatic broth until the meat pulls apart in long, silky strands — then tossed with lemongrass, ginger, fried shallots, Vietnamese coriander, and a lime-fish sauce dressing. The most versatile shredded chicken in Southeast Asian cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ga-xe-soi.jpg',
    intro: `Gà xé sợi — shredded chicken — appears across Vietnamese cooking in more contexts than any other protein preparation. It is the topping on cơm gà Hội An, the filling in bánh mì gà, the protein in bún gà, the salad base in gỏi gà, the garnish on cháo gà. The technique is simple: poach a whole chicken gently until just cooked, rest it completely, then tear the meat along the muscle fibers into long strands rather than cutting. The tearing produces a texture — slightly frayed, with more surface area — that absorbs dressings and sauces more completely than cut chicken. A Vietnamese grandmother would say the torn chicken tastes better than sliced chicken, and she would be correct. This recipe covers the base preparation — poached and dressed gà xé sợi as eaten in central Vietnam, with lemongrass, fresh ginger, and rau răm — plus the broth produced as a byproduct, which is one of the best light chicken soups you will make.`,
    ingredientSections: [
        {
            title: 'Poaching',
            items: [
                { amount: 1, name: 'whole chicken (1.2-1.5kg)', note: 'free-range preferred — more flavor and firmer texture when shredded' },
                { amount: 2, unit: 'L', name: 'water', note: 'enough to just cover the chicken' },
                { amount: 3, name: 'spring onions', note: 'tied in a bundle' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '4-5 thick slices, lightly smashed' },
                { amount: 1, unit: 'tbsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Dressing',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 2, name: 'garlic cloves, minced' },
                { amount: 1, name: 'bird\'s eye chili, minced' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'Aromatics and garnish',
            items: [
                { amount: 2, name: 'lemongrass stalks', note: 'inner stalk only, very finely sliced into rings — almost paper thin' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'peeled and finely julienned' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)', note: 'leaves only — the essential herb. Substitute: perilla or mint if unavailable.' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, name: 'spring onions', note: 'white and light green parts, thinly sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Poach the chicken gently',
            description: 'Place the whole chicken breast-side down in a pot just large enough to hold it. Cover with cold water. Add spring onions, ginger, salt, and sugar. Bring to a boil over medium-high heat. Reduce to a very gentle simmer the moment it reaches a boil — the water should barely move. Poach for 35-40 minutes for a 1.2kg chicken, 40-45 minutes for 1.5kg. Do not boil aggressively at any point.',
            tip: 'Breast-side down allows the breast — which dries out fastest — to stay submerged in the coolest part of the water, producing more even cooking.',
        },
        {
            title: 'Test for doneness and rest',
            description: 'Pierce the thigh joint with a skewer or chopstick — the juices should run completely clear with no pink. If pink, return to the broth for 5 more minutes. When done, turn off the heat and leave the chicken in the broth for 15 minutes with the lid on. This resting period allows the meat to reabsorb moisture and produces a significantly more tender result than removing immediately.',
            tip: 'The resting step is what separates silky, moist shredded chicken from dry, stringy chicken. Never skip it. 15 minutes minimum.',
        },
        {
            title: 'Ice bath and skin',
            description: 'Remove the chicken from the broth and plunge into a large bowl of ice water for 5 minutes. This stops the cooking immediately and tightens the skin to produce the smooth, silky exterior characteristic of Vietnamese poached chicken. Remove from the ice bath and pat dry. The broth remaining in the pot is an excellent light chicken soup — season and serve alongside.',
            tip: 'The ice bath is not optional for gà xé sợi. Without it the skin is soft and the meat is slightly overcooked from residual heat. The contrast of cold-rested chicken against the room temperature dressing is also part of the dish.',
        },
        {
            title: 'Tear into strands — not cut',
            description: 'When the chicken has cooled enough to handle (10-15 minutes), begin shredding. Remove the skin if desired (set aside — it can be crisped separately). Pull the meat off the bones along the natural muscle fibers using your fingers and two forks. The key is tearing along the grain, not across it — the strands should be long (5-8cm) and have slightly frayed edges. Thigh and leg meat tears into thicker, more flavorful strands; breast tears thinner.',
            tip: 'Tear while the chicken is still warm — cold chicken tears less cleanly and the fibers compact. The slight warmth helps the strands separate naturally.',
        },
        {
            title: 'Make the dressing',
            description: 'Whisk together fish sauce, fresh lime juice, sugar, minced garlic, and chili until sugar dissolves. Add sesame oil. Taste: balanced sweet-sour-salty with a clean heat at the finish. The dressing should taste slightly more aggressive than you want the final dish — it mellows when it coats the chicken.',
            tip: 'Always make dressing just before using. Fish sauce-lime dressings change character over time as the acid continues working on the other ingredients.',
        },
        {
            title: 'Toss and serve',
            description: 'In a large bowl, combine the shredded chicken, finely sliced lemongrass, julienned ginger, and half the rau răm. Pour the dressing over and toss gently but thoroughly — every strand should be coated. Transfer to a serving plate. Top with remaining rau răm, crispy fried shallots, crushed peanuts, and sliced spring onion. Serve immediately — gà xé sợi is best within 30 minutes of dressing.',
            tip: 'The lemongrass must be sliced extremely thin — almost transparent. Thick lemongrass pieces are fibrous and unpleasant. If a mandoline is available, use it for the lemongrass.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}