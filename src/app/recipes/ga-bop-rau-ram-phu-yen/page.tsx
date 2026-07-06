'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-bop-rau-ram-phu-yen',
    title: 'Gà Bóp Rau Răm Phú Yên (Phú Yên Chicken Salad with Vietnamese Coriander)',
    subtitle: 'Poached chicken torn into pieces and kneaded with rau răm, fresh ginger, shallots, and lime juice until the herbs perfume every strand — served with sesame rice crackers and the salt-pepper-lime that is the seasoning language of the central coast.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ga-bop-rau-ram-phu-yen.jpg',
    intro: `Gà bóp rau răm is the Phú Yên dish that appears on every nhậu table in the province — the shared plate that arrives first, is eaten throughout the meal with cold beer, and disappears before any other dish. Bóp means to squeeze or knead — the technique that distinguishes this from a dressed salad. The poached chicken, still warm when pulled from the bone, is not merely tossed with the herbs and seasoning but actively worked with the hands: squeezed and kneaded with rau răm, fresh ginger, shallots, and lime juice so that the herbs bruise and release their oils directly into the chicken, the lime juice penetrates the torn muscle fibers, and the ginger heat distributes through every strand rather than sitting only on the surface. The result is a chicken preparation that carries rau răm's sharp peppery character throughout the meat rather than as a garnish on top. In Phú Yên, gà bóp rau răm is eaten with bánh tráng mè — sesame rice crackers made in Tuy An district, the town between Tuy Hòa and Sông Cầu that produces the crispiest, most sesame-forward rice crackers in the country. The cracker is held flat, a piece of chicken placed on top, rolled loosely and eaten in one motion. The seasoning is muối tiêu chanh — coarse salt, freshly ground black pepper, lime — served in small dishes at the table. This combination of techniques (the bóp kneading, the warm chicken, the rau răm quantity), ingredients (Phú Yên sesame crackers, specific rau răm), and eating ritual makes gà bóp rau răm Phú Yên one of the dishes where place and preparation are inseparable.`,
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 1, name: 'whole chicken, 1.2-1.4kg', note: 'or 600g bone-in chicken thighs and drumsticks. Free-range — the firmer texture holds up to the bóp kneading better than commercial chicken.' },
                { amount: 1.5, unit: 'L', name: 'water' },
                { amount: 2, name: 'lemongrass stalks', note: 'bruised' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: '2 slices, smashed — for poaching' },
                { amount: 1, unit: 'tbsp', name: 'salt' },
            ],
        },
        {
            title: 'Bóp ingredients — the kneading mixture',
            items: [
                { amount: 1, name: 'large bunch Vietnamese coriander (rau răm)', note: 'leaves only, roughly torn — use more than you think necessary. Rau răm is the defining flavor and should be present in every bite.' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: 'peeled and finely julienned — present in quantity, not as a trace' },
                { amount: 4, name: 'shallots', note: 'thinly sliced' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice', note: 'about 2 limes — squeezed directly into the chicken during kneading' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 2, unit: 'tsp', name: 'sesame oil', note: 'adds fragrance and slight richness' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
                { amount: 2, name: 'fresh red chilies', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Muối tiêu chanh dipping salt',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1.5, unit: 'tsp', name: 'freshly ground black pepper', note: 'coarse grind' },
                { amount: 3, name: 'limes', note: 'squeezed fresh at the table' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'optional' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 12, name: 'sesame rice crackers (bánh tráng mè)', note: 'Phú Yên-style sesame crackers — available at Vietnamese grocers. Substitute: any plain or sesame rice crackers.' },
                { amount: 1, name: 'head butter lettuce', note: 'leaves separated — for wrapping if crackers unavailable' },
                { amount: 2, name: 'limes, extra wedges' },
                { amount: 1, name: 'bunch extra rau răm', note: 'served fresh alongside' },
            ],
        },
    ],
    steps: [
        {
            title: 'Poach the chicken gently',
            description: 'Place the chicken in a pot, cover with cold water. Add lemongrass, ginger slices, and salt. Bring to a boil, reduce immediately to the lowest simmer. Poach 30-35 minutes until the thigh juices run clear. Turn off the heat and rest in the broth covered for 10 minutes. Remove the chicken. Reserve the broth — season and serve as soup alongside, or save for rice or noodle cooking.',
            tip: 'Gà bóp requires the chicken to be pulled while still warm — not hot enough to burn the hands, but warm enough that the muscle fibers separate cleanly and the lime juice and herbs absorb into the flesh while it is still slightly relaxed. Cold chicken from the refrigerator does not bóp properly.',
        },
        {
            title: 'Pull the chicken while warm — the bóp method',
            description: 'When the chicken is cool enough to handle, remove all meat from the bones and skin. Tear the meat into medium-sized pieces — not fine shreds, not large chunks. About the size of a large bite. Place in a wide bowl. The pieces should still be faintly warm to the touch.',
            tip: 'Tearing along the grain produces the frayed, textured strands that absorb the herb mixture more completely than cut pieces. The torn surface area is what makes bóp work — smooth cut surfaces do not take in the lime juice and rau răm oils the same way.',
        },
        {
            title: 'The bóp technique — knead with the hands',
            description: 'Add the rau răm leaves, julienned ginger, sliced shallots, fish sauce, sugar, white pepper, and sesame oil to the warm chicken. Squeeze the lime juice directly over everything. Now use both hands to knead the mixture: squeeze the chicken pieces firmly between your fingers, turn, squeeze again. Work the rau răm into the chicken so the leaves begin to bruise and release their oils. The kneading should take 2-3 minutes — the mixture should smell intensely of rau răm and lime by the end, and the chicken should feel slightly moistened throughout.',
            tip: 'The bóp is not mixing — it is kneading. The difference is in the pressure and the intention: kneading bruises the herbs and drives the lime juice into the chicken fibers. After proper bóp, you cannot pick out individual herb pieces — they are integrated into the chicken. This is the correct result.',
        },
        {
            title: 'Rest for 5 minutes',
            description: 'Leave the bóp chicken to rest for 5 minutes after kneading — the lime juice continues to work into the meat, the rau răm oils further distribute, and the seasoning balances. Taste after resting and adjust: more lime if the lime note is not clear throughout every piece, more fish sauce if it tastes flat, more rau răm if the herb is not dominant.',
            tip: 'The rau răm should be the dominant flavor — not a note alongside the chicken but the character the chicken has absorbed. If the herb is not clearly present in every bite, add more and bóp again briefly.',
        },
        {
            title: 'Make the dipping salt',
            description: 'Combine coarse salt and freshly ground black pepper in small individual plates. Leave the lime uncut until the moment of eating — squeeze directly over the salt-pepper at the table. The muối tiêu chanh for gà bóp rau răm should be slightly more generous with pepper than the standard version — the black pepper complements the rau răm peppery character and amplifies it.',
            tip: 'Each diner makes their own dipping salt to preference — some want more pepper, some more lime, some more salt. Providing the components separately and having diners mix their own is the correct service for this dish.',
        },
        {
            title: 'Plate and serve the Phú Yên way',
            description: 'Transfer the gà bóp rau răm to a plate. Top with crushed peanuts, crispy fried shallots, toasted sesame seeds, and fresh chili. Arrange the sesame rice crackers and extra rau răm around the plate. Serve the muối tiêu chanh alongside. To eat: take a sesame cracker, place a piece of chicken with herbs on top, roll loosely, dip in the lime salt, eat immediately. Or: place chicken in a lettuce leaf with extra rau răm, roll and dip. The eating is fast and communal — the crackers stay crisp for only a few minutes once topped.',
            tip: 'Bánh tráng mè Phú Yên — Phú Yên sesame rice crackers — are specifically the variety made in Tuy An district, thinner and more sesame-covered than crackers from other provinces. If you can find them at a Vietnamese grocery, they make a noticeable difference. The sesame and the rau răm together is the flavor combination specific to this dish.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}