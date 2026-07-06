'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-hap-la-e',
    title: 'Gà Hấp Lá É (Steamed Chicken with Litsea Leaves)',
    subtitle: 'Whole chicken steamed over a bath of litsea leaves, lemongrass, and ginger — a central Vietnamese technique that produces the most fragrant steamed chicken in the country. The lá é leaf cannot be substituted; it is the dish.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ga-hap-la-e.jpg',
    intro: `Gà hấp lá é is the steamed chicken of Phú Yên, Bình Định, and the central coast provinces — a dish that exists only where the lá é tree (Litsea cubeba, wild pepper litsea) grows wild in the surrounding hills. The lá é leaf has a flavor profile that sits between lemongrass, kaffir lime leaf, and a green peppercorn — aromatic, citrusy, slightly spicy at the finish, completely its own. When used as a steaming aromatic, it perfumes the chicken from the outside in, producing a bird that smells of the mountain forests of central Vietnam in a way that no substitution can approach. The chicken is not marinated. There is no sauce applied before cooking. The entire flavor comes from the steam — and from the dipping sauce made from the lá é leaves pounded with salt, ginger, and fresh chili that accompanies each bowl. Gà hấp lá é is the dish that people from Phú Yên miss most when they leave, and the one that demonstrates most clearly why Vietnamese regional cooking cannot always be recreated outside its place of origin.`,
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 1, name: 'whole chicken (1.2-1.5kg)', note: 'free-range strongly preferred — the lean, flavorful flesh of a free-range bird works far better than commercial chicken for steaming' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Steaming bath',
            items: [
                { amount: 80, unit: 'g', name: 'fresh lá é leaves (litsea cubeba leaves)', note: 'available at Vietnamese specialty markets or online. Cannot be substituted — the dish is defined by this leaf.' },
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and cut into pieces' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: 'sliced and smashed' },
                { amount: 500, unit: 'ml', name: 'water' },
                { amount: 3, name: 'spring onions', note: 'tied in bundle' },
            ],
        },
        {
            title: 'Lá é dipping sauce (muối lá é)',
            items: [
                { amount: 20, unit: 'g', name: 'fresh lá é leaves', note: 'separate from the steaming leaves' },
                { amount: 1.5, unit: 'tsp', name: 'sea salt' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: 'peeled and roughly chopped' },
                { amount: 2, name: 'bird\'s eye chilies' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, name: 'lime', note: 'juiced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'a few sprigs — for garnish and eating raw alongside' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Season the chicken lightly',
            description: 'Rub the chicken inside and out with salt and white pepper only. No other seasoning. Stuff the cavity with a small handful of lá é leaves, 2 lemongrass stalks, and a few slices of ginger. The cavity aromatics perfume the interior while the steaming bath perfumes the exterior. Tie the legs together with kitchen twine.',
            tip: 'The light seasoning is deliberate — the dish flavor comes from the steam, not from marinades. Heavy pre-seasoning competes with and obscures the delicate lá é fragrance.',
        },
        {
            title: 'Build the steaming bath',
            description: 'In the base of a large steamer pot or wok, combine water, the remaining lá é leaves, lemongrass, ginger, and spring onion bundle. Bring to a full boil. The steam should smell strongly and distinctly of lá é before the chicken goes in — a combination of citrus, pepper, and something wild and green that is entirely the leaf\'s own character.',
            tip: 'Use a wok with a domed lid if possible — the dome allows the aromatic steam to circulate around a whole chicken more evenly than a flat-lidded pot.',
        },
        {
            title: 'Steam the whole chicken',
            description: 'Place the chicken breast-side down on the steaming rack. Cover tightly. Steam over maximum heat for 35-40 minutes for a 1.2kg chicken, 40-45 minutes for a 1.5kg bird. Maintain a vigorous boil throughout — check the water level once at the 20-minute mark and top up with boiling water if needed.',
            tip: 'Breast-side down keeps the most delicate meat submerged in the coolest zone of the steam and prevents drying. Turn to breast-side up only for the last 5 minutes if you want the skin to firm slightly.',
        },
        {
            title: 'Ice bath and rest',
            description: 'Test doneness: pierce the thigh joint — juices should run completely clear. Remove and immediately plunge into a large bowl of ice water for 5 minutes. The ice bath stops the cooking instantly and tightens the skin to produce the smooth, silky finish of properly prepared Vietnamese steamed chicken. Remove from ice bath and rest 10 minutes before chopping.',
            tip: 'Reserve the steaming liquid — it has absorbed all the lá é fragrance and makes an extraordinary light broth for serving alongside or for cooking rice.',
        },
        {
            title: 'Make the lá é dipping sauce',
            description: 'Pound the lá é leaves, salt, ginger, and chilies together in a mortar until the leaves are broken down and the mixture is a rough paste. Add sugar and lime juice. The sauce should be intensely aromatic, sharp with ginger, hot from the chili, and carry the full concentrated character of the lá é leaf. This is the essential accompaniment — the steamed chicken and the pounded sauce are one dish, not two.',
            tip: 'Pound, do not blend. The mortar releases the aromatic oils from the lá é leaves in a way that a blender does not. The slightly rough texture is also correct — it should not be a smooth paste.',
        },
        {
            title: 'Chop and serve',
            description: 'Chop the chicken Vietnamese-style through the bone with a cleaver, or carve into portions. Arrange on a plate. Scatter sliced spring onion and a few fresh lá é leaves over the top. Serve the dipping sauce in small individual dishes alongside. To eat: take a piece of chicken, dip into the muối lá é, eat with steamed rice. The aromatic dipping sauce is the bridge between the subtly perfumed chicken and the clean steamed rice.',
            tip: 'The reserved steaming broth can be seasoned lightly with fish sauce and served as a soup alongside — Phú Yên style serves the chicken, the dipping sauce, and a small bowl of the steaming broth as a complete set.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
