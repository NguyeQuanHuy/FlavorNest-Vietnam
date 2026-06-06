'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-rang-muoi',
    title: 'Gà Rang Muối (Vietnamese Salt-Roasted Chicken)',
    subtitle: 'Chicken pieces dry-roasted in a wok with coarse salt, lemongrass, lime leaves, and chili until the skin is crispy and the salt has formed a fragrant crust that seasons the meat from the outside in. The Vietnamese technique that uses salt as a cooking medium.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ga-rang-muoi.jpg',
    intro: `Gà rang muối — salt-roasted chicken — is the Vietnamese technique where salt is not just a seasoning but the cooking medium itself. Coarse salt is heated in a wok until extremely hot, then chicken pieces are buried in and roasted in the hot salt, covered, until the skin is crispy and the meat is cooked through from the radiant heat of the salt surrounding it on all sides. The aromatics — lemongrass, kaffir lime leaves, fresh chili — are mixed into the hot salt before the chicken goes in, so that they perfume the steam created inside the salt crust during cooking. The result is chicken with a deeply savory, fragrant exterior — the salt has drawn moisture from the skin and replaced it with the concentrated aromatic character of the herbs — and a juicy, tender interior cooked gently from all sides rather than from one hot surface. Gà rang muối is associated with the central and southern Vietnamese restaurant tradition but made easily at home with a large wok, coarse salt, and patience. The salt is reusable — after cooking, it is poured out, cooled, and stored for the next batch. Vietnamese households that cook gà rang muối regularly keep a dedicated container of aromatic salt that improves with each use as the herb oils accumulate.`,
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 1, unit: 'kg', name: 'chicken pieces', note: 'bone-in thighs and drumsticks preferred — bone conducts heat into the center; skin-on essential for the crispy result' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for light pre-seasoning' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives the golden color and prevents sticking to the salt' },
            ],
        },
        {
            title: 'Salt and aromatics',
            items: [
                { amount: 1, unit: 'kg', name: 'coarse sea salt or rock salt', note: 'coarse grain essential — fine salt packs too tightly and does not allow heat circulation. The salt is reusable.' },
                { amount: 3, name: 'lemongrass stalks', note: 'tough outer layers only — bruised and roughly cut. The inner stalk is too precious to bury in salt; use the outer layers.' },
                { amount: 8, name: 'kaffir lime leaves (lá chanh)', note: 'torn in half — releases the aromatic oils into the salt. Fresh or frozen.' },
                { amount: 3, name: 'fresh red chilies', note: 'halved lengthwise — seeds in or out depending on heat preference' },
                { amount: 4, name: 'garlic cloves', note: 'lightly smashed, skin on' },
                { amount: 3, name: 'shallots', note: 'halved, skin on' },
                { amount: 1, unit: 'tsp', name: 'black pepper', note: 'whole peppercorns or coarsely ground' },
            ],
        },
        {
            title: 'Dipping sauce (muối tiêu chanh)',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'sea salt' },
                { amount: 1.5, unit: 'tsp', name: 'freshly ground black pepper' },
                { amount: 2, name: 'limes', note: 'juiced fresh at the table' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'optional' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, name: 'kaffir lime leaves, extra', note: 'finely shredded — for scattering over the finished chicken' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 2, name: 'limes, extra wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the chicken briefly',
            description: 'Pat the chicken pieces completely dry — surface moisture is the enemy of crispy skin in this preparation. Rub each piece with fish sauce, white pepper, and turmeric. Leave for 15 minutes at room temperature. The turmeric does two things: provides the golden color and creates a thin barrier that prevents the chicken skin from sticking to the salt during cooking.',
            tip: 'Completely dry chicken skin is essential. After marinating, pat dry again with paper towels before burying in the salt. Any surface moisture will dissolve the salt and create a soggy crust rather than a crispy one.',
        },
        {
            title: 'Heat the salt with aromatics',
            description: 'Place a large wok over medium-high heat. Add the coarse salt and spread in an even layer. Add the lemongrass pieces, torn kaffir lime leaves, halved chilies, smashed garlic, halved shallots, and black pepper directly into the salt. Stir to combine. Heat the salt mixture, stirring occasionally, for 5-7 minutes until the salt is very hot — a drop of water flicked in should vaporize immediately. The aromatics will begin to release their oils into the salt during this heating.',
            tip: 'The salt must be genuinely hot before the chicken goes in — not just warm. If the salt is insufficiently heated the chicken skin steams rather than crisps. Test by holding your hand 10cm above the surface — the heat should be clearly felt immediately.',
        },
        {
            title: 'Bury the chicken in the salt',
            description: 'Push the hot salt to the sides of the wok to create a space in the center. Place the chicken pieces skin-side down in the space. Push salt up and over the chicken from the sides until every piece is completely buried — salt on all sides and over the top. Pack the salt down gently. Cover the wok with a tight-fitting lid.',
            tip: 'Complete burial in salt is essential — any exposed chicken will dry out rather than cooking through the radiant heat. The salt must cover the top of each piece completely.',
        },
        {
            title: 'Cook without lifting the lid',
            description: 'Cook over medium heat for 20-25 minutes for bone-in thighs and drumsticks. Do not lift the lid during this time — each opening releases the accumulated heat and steam. The chicken is cooked through the combination of direct contact heat from the hot salt on the bottom and radiant heat from the salt on the top and sides. After 20 minutes, carefully remove the lid — use a cloth as the steam is intense.',
            tip: 'Resist the urge to check. The salt insulates and maintains a very consistent temperature around the chicken. The closed environment also creates steam from the chicken\'s own moisture, which bastes it from the inside.',
        },
        {
            title: 'Test and finish',
            description: 'Brush the salt off the top of the chicken pieces. Pierce the thickest part of a thigh with a skewer — the juices should run completely clear. The skin in direct contact with the bottom of the wok should be golden and crispy. If the chicken needs more time, re-cover with salt and cook 5 more minutes. When done, brush off all the salt and transfer to a serving plate. The aromatic salt can be cooled and stored for next time.',
            tip: 'The bottom skin will be crispiest — this is the side that should face up on the serving plate for presentation. The salt that clings to the chicken surface is the seasoning; brush off excess but leave a thin coating.',
        },
        {
            title: 'Finish and serve',
            description: 'Scatter finely shredded kaffir lime leaves, sliced spring onion, and fresh chili over the chicken. Make the dipping salt: combine salt and coarsely ground pepper on small plates, squeeze fresh lime juice over just before eating. Serve immediately — gà rang muối is at its best in the first 10 minutes, when the skin is still crispy from the residual heat. Serve with steamed rice and the dipping salt.',
            tip: 'The finely shredded kaffir lime leaf scattered over the finished chicken is both garnish and final seasoning — it adds a fresh citrus note that contrasts beautifully with the savory salt crust. Cut the lime leaves into the thinnest possible shreds with a sharp knife.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}