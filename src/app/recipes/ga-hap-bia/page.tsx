'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-hap-bia',
    title: 'Gà H?p Bia S? (Beer-Steamed Chicken with Lemongrass)',
    subtitle: 'A whole chicken steamed over Vietnamese lager beer with lemongrass, ginger, and kaffir lime leaf until the skin is taut, slightly golden, and fragrant with the aromatics — the beer producing a steam that is gentler and more complex than water alone.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 15 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/ga-hap-bia.jpg',
    intro: `Gà h?p bia is the Vietnamese beer-steamed chicken — a variation on the classic gà h?p technique where the steaming liquid is replaced with Vietnamese lager beer, typically Saigon or Tiger, whose CO2 and mild malt character create a steam environment that is subtly different from plain water. The alcohol in the beer vaporizes at a lower temperature than water and carries the aromatic compounds from the lemongrass, ginger, and kaffir lime leaf into the steam more efficiently than water steam alone — the chicken absorbs these aromatics not just on the surface but throughout the flesh during the long steaming process. The difference between water-steamed and beer-steamed chicken is detectable but subtle: a faintly richer fragrance, a slightly more complex depth in the drippings, a steam that smells specifically Vietnamese rather than merely aromatic. The technique otherwise follows the same principles as any Vietnamese steamed chicken: breast-side down for even cooking, ice bath for silky skin, and a dipping sauce that provides the seasoning that the deliberately unseasoned chicken lacks. Gà h?p bia sits in the middle of the Vietnamese steamed chicken family — less austere than plain poached gà lu?c, less elaborate than the herb-heavy gà h?p lá é, a practical and consistently excellent everyday preparation that asks only that you keep Vietnamese beer in the refrigerator, which in a Vietnamese household is not an ask at all.`,
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 1, name: 'whole chicken, 1.3-1.5kg', note: 'free-range preferred. Air-chilled.' },
                { amount: 1, unit: 'tsp', name: 'salt', note: 'rubbed inside the cavity' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'inside the cavity' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: '2 slices — stuffed inside the cavity' },
                { amount: 2, name: 'spring onions', note: 'tied in bundle — stuffed inside the cavity' },
            ],
        },
        {
            title: 'Beer steaming bath',
            items: [
                { amount: 660, unit: 'ml', name: 'Vietnamese lager beer (Saigon, Tiger, or Hanoi)', note: '2 cans or bottles. Light lager only — dark beer is too heavy and produces a bitter steam.' },
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and roughly cut — in the steaming liquid' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '4 slices, smashed — in the steaming liquid' },
                { amount: 6, name: 'kaffir lime leaves', note: 'torn — in the steaming liquid' },
                { amount: 3, name: 'spring onions', note: 'tied — in the steaming liquid' },
                { amount: 1, unit: 'tsp', name: 'salt', note: 'added to the steaming liquid' },
            ],
        },
        {
            title: 'Ginger-spring onion dipping sauce',
            items: [
                { amount: 50, unit: 'g', name: 'fresh ginger', note: 'very finely minced' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 80, unit: 'ml', name: 'neutral oil', note: 'heated to smoking and poured over' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded — for finishing' },
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Season and stuff the cavity',
            description: 'Pat the chicken dry inside and out. Rub the cavity with salt and white pepper. Stuff the cavity with 2 ginger slices and the spring onion bundle — the aromatics inside perfume the meat from within during steaming. Truss the legs together. Leave at room temperature for 20 minutes while the steaming bath is prepared.',
            tip: 'The cavity aromatics are separate from the steaming bath aromatics — both contribute, but differently. The cavity herbs perfume the meat directly; the bath herbs perfume the steam. Together they produce a more layered fragrance than either alone.',
        },
        {
            title: 'Build the beer steaming bath',
            description: 'Pour both cans of beer into the steamer base. Add lemongrass, smashed ginger, torn kaffir lime leaves, spring onion bundle, and salt. Bring to a full boil over high heat. The beer will foam as it heats — this subsides quickly. By the time the steam is rolling vigorously the foam has settled and the aromatic steam should be clearly scented with lemongrass and ginger.',
            tip: 'The beer foaming when heated is normal and subsides completely before the chicken goes in. Do not let the foam concern you — it does not affect the steaming. Start timing the chicken only once the steam is vigorous, not from when the liquid first heats.',
        },
        {
            title: 'Steam breast-side down',
            description: 'Place the chicken breast-side down on the steaming rack over the boiling beer bath. Cover tightly — a domed lid allows the steam to circulate more evenly around the whole bird. Steam over high heat, maintaining a vigorous boil: 1.3kg — 32 minutes. 1.5kg — 36-38 minutes. Do not open the lid. Check the water level after 20 minutes and add boiling water (not beer) if needed — the liquid level should remain high enough to produce vigorous steam.',
            tip: 'The steam from beer produces a slightly denser, more aromatic cloud than water steam alone — you will notice the difference when you lift the lid. The lemongrass and ginger compounds travel more efficiently in the alcohol-containing steam.',
        },
        {
            title: 'Test and ice bath',
            description: 'Pierce the thigh joint — juices run completely clear. Remove immediately to a large bowl of ice water. Submerge for 8 minutes. The ice bath stops the cooking, tightens the skin to a taut, slightly golden surface, and produces the gelatinous quality at the joints. Remove, pat dry. Reserve the steaming liquid — it is a fragrant broth of beer, chicken drippings, and aromatics worth seasoning lightly and serving as soup.',
            tip: 'The steaming liquid after the chicken is done smells extraordinary — beer, lemongrass, ginger, and chicken fat combined. Strain it, season with fish sauce, and serve in small cups alongside the meal. Nothing from this preparation should be wasted.',
        },
        {
            title: 'Make the ginger-spring onion oil',
            description: 'Combine finely minced ginger, sliced spring onion, salt, and sugar in a heatproof bowl. Heat neutral oil in a small pan until smoking — 210°C. Pour directly over the ginger and spring onion. The sizzle is aggressive and brief. Stir immediately. Add sesame oil. The hot oil blooms the aromatics in seconds, producing the specific mellowed-but-fragrant character that makes this sauce the ideal accompaniment for simply cooked chicken.',
            tip: 'The smoking oil is the technique — not hot oil, smoking oil. Below 200°C the ginger tastes harsh and raw. At 210°C+ it caramelizes in the instant of contact. The temperature difference of 20°C produces a noticeably different sauce.',
        },
        {
            title: 'Chop and serve',
            description: 'Rest the chicken 5 minutes on a rack. Chop through the bone with a cleaver. Arrange on a plate. Scatter finely shredded kaffir lime leaves, sliced spring onion, and chili over the top. Serve with the ginger-spring onion oil, the reserved steaming broth in small cups, steamed rice, and lime wedges. The complete meal: a piece of chicken dipped in the ginger oil, a spoonful of the fragrant beer-lemongrass broth, a mouthful of rice.',
            tip: 'The kaffir lime leaves shredded over the finished chicken are both garnish and fresh seasoning — their raw citrus oil adds a brightness that contrasts with the steamed depth of the chicken. Use the finest possible shreds and be generous.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
