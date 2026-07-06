'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-luoc-la-chanh',
    title: 'Gà Luộc Lá Chanh (Vietnamese Poached Chicken with Kaffir Lime Leaf)',
    subtitle: 'Whole chicken poached in an aromatic broth of ginger and spring onion until the skin is smooth and golden, then rubbed with kaffir lime leaf oil while still hot — served with a dipping salt of pounded kaffir lime leaf, salt, pepper, and lime. The definitive northern Vietnamese chicken.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 15 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ga-luoc-la-chanh.jpg',
    intro: `Gà luộc lá chanh is the northern Vietnamese chicken preparation that every Vietnamese family cooks for Tết, for Rằm, for family gatherings, and for any occasion that requires a dish that is simultaneously ceremonial and effortless. The technique is deceptively simple: a whole chicken poached gently in water with ginger and spring onion, rested in the broth, shocked in ice water for smooth skin, then rubbed all over with an oil infused with finely shredded kaffir lime leaves while still warm. The kaffir lime leaf oil perfumes the skin from the outside as the residual warmth of the chicken helps the oil penetrate, producing a bird that smells of citrus and green without any lime juice touching it. The dipping salt — muối lá chanh — is the soul of the dish: coarse salt pounded with fresh kaffir lime leaves until the salt turns green and fragrant, mixed with black pepper and a squeeze of lime, served in small individual dishes for each diner to dip each piece of chicken into. This salt-and-herb dipping preparation is one of the oldest flavor combinations in Vietnamese cooking. Gà luộc is also deliberately simple as a canvas: the chicken itself is barely seasoned, the cooking liquid is restrained, and the entire flavor experience comes from the contrast between the clean, neutral chicken and the intensely aromatic dipping salt. It is the dish that teaches the Vietnamese principle that the best condiment is more interesting than the thing it accompanies.`,
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 1, name: 'whole chicken, 1.3-1.5kg', note: 'free-range preferred — firmer flesh and better flavor than commercial chicken. Yellow-skinned Vietnamese chicken (gà ta) if available.' },
                { amount: 1.5, unit: 'L', name: 'water', note: 'enough to just cover the chicken' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '4-5 thick slices, smashed' },
                { amount: 3, name: 'spring onions', note: 'tied in a bundle' },
                { amount: 1.5, unit: 'tbsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Kaffir lime leaf oil (dầu lá chanh)',
            items: [
                { amount: 8, name: 'fresh kaffir lime leaves (lá chanh)', note: 'finely shredded into the thinnest possible strips — remove the central rib first' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil or chicken fat', note: 'chicken fat skimmed from the poaching broth is the traditional choice — it carries the lime leaf fragrance most effectively' },
                { amount: 0.25, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Muối lá chanh (kaffir lime dipping salt)',
            items: [
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 6, name: 'fresh kaffir lime leaves', note: 'central rib removed, roughly torn' },
                { amount: 1, unit: 'tsp', name: 'freshly ground black pepper', note: 'coarse grind' },
                { amount: 2, name: 'limes', note: 'juiced fresh at the table — squeezed over the salt just before eating' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'rounds the sharpness' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 6, name: 'fresh kaffir lime leaves, extra', note: 'finely shredded — for scattering over the finished chicken' },
                { amount: 3, name: 'spring onions', note: 'sliced — for garnish' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 1, name: 'cucumber', note: 'sliced — served alongside' },
            ],
        },
    ],
    steps: [
        {
            title: 'Poach the chicken gently',
            description: 'Place the whole chicken breast-side down in a pot just large enough to hold it. Cover with cold water. Add ginger, spring onion bundle, salt, and sugar. Bring to a boil over medium-high heat. Reduce to the lowest possible simmer the moment it boils — barely moving water, 2-3 bubbles per second. Poach for 35 minutes for a 1.3kg chicken, 38-40 minutes for 1.5kg. The low simmer is what produces silky, tender meat rather than the stringy, tight texture of vigorously boiled chicken.',
            tip: 'Breast-side down is the northern Vietnamese poaching position — the breast stays in the cooler lower zone of the liquid and cooks more slowly than the thighs, producing more even doneness throughout the bird.',
        },
        {
            title: 'Test and rest in the broth',
            description: 'Pierce the thigh joint with a skewer — juices must run completely clear. If pink, poach 5 more minutes and test again. When done, turn off the heat and leave the chicken in the broth with the lid on for 15 minutes. This resting period allows the meat to reabsorb moisture and produces significantly more tender, juicy results than removing immediately from the liquid.',
            tip: 'The resting step produces visibly different results — chicken rested in the broth is noticeably more moist and tender than chicken removed immediately. The proteins relax and the juices redistribute. Do not skip.',
        },
        {
            title: 'Ice bath for silky skin',
            description: 'Remove the chicken from the broth and immediately plunge into a large bowl of ice water. Submerge completely for 8 minutes. The sudden temperature change contracts the skin, producing the smooth, slightly firm surface that is the hallmark of properly prepared Vietnamese poached chicken — it should have a slight resistance when touched, not the flabby softness of chicken that has not been ice-bathed. Remove and pat dry.',
            tip: 'Skim 3 tablespoons of golden chicken fat from the surface of the poaching broth while the chicken is in the ice bath — this fat is the ideal carrier for the kaffir lime oil in the next step. Season the remaining broth and serve as soup alongside the meal.',
        },
        {
            title: 'Make the kaffir lime leaf oil',
            description: 'While the chicken is still warm from the ice bath (cool enough to handle, not cold), heat the oil or chicken fat in a small pan over medium heat until just shimmering. Add the finely shredded kaffir lime leaves and salt. Cook for 30 seconds — just until the leaves begin to sizzle and the oil turns faintly green. Remove from heat immediately. The oil should smell intensely of kaffir lime — citrusy, floral, slightly medicinal in the best way.',
            tip: 'The kaffir lime leaves must be shredded into the finest possible strips — remove the central rib, stack the leaves, and cut across into strips 1mm wide. The fineness determines how evenly the oil distributes over the skin and how much leaf fragrance is released.',
        },
        {
            title: 'Rub the warm chicken with kaffir lime oil',
            description: 'Using your hands or a pastry brush, rub the warm kaffir lime oil all over the chicken — every surface, under the wings, around the neck. The warmth of the chicken helps the oil penetrate the skin surface. The shredded leaves should cling to the skin. Leave to rest for 5 minutes so the oil absorbs fully.',
            tip: 'The chicken must be warm when the oil is applied — cold chicken skin repels the oil rather than absorbing it. If the chicken has cooled too much during the ice bath, briefly warm it by spooning hot broth over it before applying the oil.',
        },
        {
            title: 'Make the muối lá chanh and serve',
            description: 'Pound the coarse salt and torn kaffir lime leaves together in a mortar for 1-2 minutes until the leaves are broken down and the salt has turned pale green and smells strongly of kaffir lime. Add black pepper and sugar. Transfer to small individual dipping dishes. Squeeze fresh lime juice over at the table — just before eating, not in advance. Chop the chicken Vietnamese-style through the bone. Arrange on a plate scattered with finely shredded kaffir lime leaves and sliced spring onion. Serve with muối lá chanh, steamed rice, and the reserved poaching broth as soup.',
            tip: 'The lime must be squeezed at the moment of eating — pre-squeezed muối lá chanh loses the fragrance from the lime zest oil that makes it so distinctive. Squeeze directly over the salt dish at the table and stir with the tip of a chopstick just before the first dip.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
