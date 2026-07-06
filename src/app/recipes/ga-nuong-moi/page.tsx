'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-nuong-moi',
    title: 'Gà Nướng Mọi (Phú Yên Whole-Fire Chicken)',
    subtitle: 'A whole chicken grilled directly over hardwood charcoal with no marinade — only salt rubbed into the skin before the fire — until the exterior chars and the interior stays juicy from the fat rendered by the heat. Served with the pounded lá é salt that is the only condiment this preparation needs.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ga-nuong-moi.jpg',
    intro: `Gà nướng mọi is the oldest way to cook a chicken — the way the Ba Na, Ê Đê, and other highland minority communities of the central Vietnamese mountains have always cooked, the way coastal Phú Yên families have cooked at the beach for generations, the way the word mọi evokes: direct, unmediated, the fire and the animal and nothing between them. Mọi in this context means the most primitive, the most direct — whole fire cooking where no marinade, no sauce, no spice mixture stands between the chicken and the heat. The only preparation is salt: rubbed over the skin, into every cavity and joint, at least an hour before the fire begins. The salt seasons and slightly dries the skin surface so that when it meets the charcoal heat, it crisps immediately rather than steaming. The chicken is grilled over a real charcoal fire — hardwood charcoal, not briquettes — on a grill low enough to develop genuine char but high enough to cook the interior without burning the outside before the meat is done. The technique requires attention and turning: every 5-7 minutes, the chicken is rotated and repositioned to develop even char across every surface. What emerges after 50-60 minutes is a bird that smells entirely of fire and rendered chicken fat, with a crackling, blackened-in-places exterior and a juicy interior that tastes only of chicken at its most concentrated. The dipping preparation is muối lá é — the pounded salt of litsea leaves specific to this part of Vietnam — which provides the aromatic counterpoint the fire-only chicken needs and nothing else.`,
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 1, name: 'whole chicken, 1.3-1.6kg', note: 'free-range essential — commercial chicken has insufficient fat to self-baste through a long charcoal grill. Yellow-skinned Vietnamese chicken is ideal.' },
                { amount: 2, unit: 'tsp', name: 'coarse sea salt', note: 'the only seasoning — applied to every surface at least 1 hour before grilling' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'rubbed into the cavity' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: '2 slices — placed inside the cavity only. No external aromatics.' },
            ],
        },
        {
            title: 'Fire setup',
            items: [
                { amount: 1, unit: 'kg', name: 'hardwood charcoal', note: 'not briquettes — hardwood charcoal burns hotter, cleaner, and produces the specific aromatic smoke of gà nướng mọi. Lychee wood, longan wood, or any dense hardwood.' },
                { amount: 1, name: 'wire chicken roasting rack or flat grill basket', note: 'holds the whole chicken and allows turning without the bird falling apart' },
            ],
        },
        {
            title: 'Muối lá é dipping salt',
            items: [
                { amount: 30, unit: 'g', name: 'fresh lá é leaves (litsea cubeba leaves)', note: 'the defining Phú Yên condiment — available at Vietnamese specialty markets. If unavailable: substitute with 10 kaffir lime leaves + 5 Vietnamese coriander leaves, pounded together. The result is different but the closest approximation.' },
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'freshly ground black pepper' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'optional — some Phú Yên versions include chili, others are pure herb-salt' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'extra — eaten raw alongside each bite of chicken' },
                { amount: 2, name: 'extra limes, cut in wedges' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice or bánh tráng nướng (grilled rice crackers)' },
                { amount: 1, name: 'cucumber, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Salt the chicken and rest — minimum 1 hour',
            description: 'Pat the chicken completely dry inside and out. Rub every surface thoroughly with coarse salt — under the wings, around the neck cavity, between the thigh and body. Rub white pepper and the ginger slices inside the cavity. Place on a rack uncovered at room temperature for 1 hour, or in the refrigerator uncovered for up to 8 hours. The salt draws surface moisture out then reabsorbs, seasoning the skin from within and partially drying it for the charcoal heat.',
            tip: 'The longer the salt rest, the more completely seasoned the chicken — and the crispier the final skin. An 8-hour salted chicken from the refrigerator produces noticeably better skin than a 1-hour chicken. If time allows, salt the night before.',
        },
        {
            title: 'Build the charcoal fire — two-zone',
            description: 'Light the hardwood charcoal and wait until every piece is covered in white ash with no black remaining — 30-40 minutes. This is a fully engaged fire, not a partially lit one. Arrange the coals in a two-zone configuration: a thick layer on one side for direct high heat, a thin layer or empty zone on the other side for indirect heat. The grill grate should be approximately 15-20cm above the coals — close enough for the radiant heat to crisp the skin, far enough to manage flare-ups.',
            tip: 'Hardwood charcoal burns significantly hotter and cleaner than briquettes and is not optional for gà nướng mọi. Briquettes produce a lower, less clean heat and the chemical binders in cheaper briquettes contribute off-flavors to unmediated chicken — particularly noticeable in a preparation with no marinade to mask them.',
        },
        {
            title: 'Grill over direct heat — the first phase',
            description: 'Place the chicken breast-side up on the grill over the direct heat zone. Grill for 10 minutes without touching — let the bottom develop char. The skin facing the coals will blister and char at the edges. Flip breast-side down for 10 minutes. The chicken should be developing a mottled, dark-spotted char across all surfaces. Rotate 90 degrees and grill each side for 5 minutes to char the flanks.',
            tip: 'Control flare-ups by moving the chicken to the indirect zone temporarily — do not spray with water, which cools the fire and produces steam rather than dry heat. A spray of water on gà nướng mọi is the equivalent of steaming the skin after you have worked to dry it.',
        },
        {
            title: 'Move to indirect heat — the second phase',
            description: 'After the first phase, the chicken should have char across all surfaces. Move to the indirect zone, cover the grill if possible, and continue cooking for 25-30 minutes for a 1.3kg bird, 35 minutes for 1.6kg. The indirect heat finishes the interior without burning the exterior further. Every 10 minutes, rotate the chicken 90 degrees and baste with the rendered fat that has dripped into the catching tray if available.',
            tip: 'The covering of the grill during the indirect phase is what separates gà nướng mọi cooked on a covered kettle grill from one cooked on an open grill. The covered environment creates a convection effect that cooks the top of the chicken from the heated air — more similar to a real fire where the chicken is surrounded by flame on all sides.',
        },
        {
            title: 'Test — the fire test',
            description: 'Pierce the thigh joint — juices must run clear. The skin should be deeply charred in multiple places: not uniformly dark, but with specific black patches at the wing tips, drumstick ends, and breast peak where the fat has rendered and caramelized. When you pull a leg, it should separate from the body with minimal resistance. Rest the chicken 10 minutes off the fire before cutting.',
            tip: 'The uneven char of gà nướng mọi is not a flaw — it is the signature. Uniformly colored chicken was cooked on an oven or a gas grill, not a real charcoal fire. The black patches are the concentrated caramelized chicken fat and are the most intensely flavored parts of the bird.',
        },
        {
            title: 'Make the muối lá é and serve',
            description: 'Pound the lá é leaves with coarse salt and chili in a mortar until the leaves are fully broken down and the salt has turned green and smells intensely of the leaf — citrus-pepper-wild. Add black pepper and sugar. Transfer to small plates. Squeeze lime juice over at the table just before eating. Chop the chicken through the bone with a cleaver — the charred crackling skin should shatter at the first contact. Serve with the muối lá é, fresh lá é leaves for eating raw alongside, rice or grilled crackers, and cucumber.',
            tip: 'Gà nướng mọi and muối lá é is one of the most complete flavor pairings in Vietnamese cooking. The fire-only chicken tastes of nothing but itself — concentrated, slightly smoky, deeply savory. The lá é salt adds the aromatic dimension the chicken deliberately lacks. Together they need nothing else. The addition of extra sauces or seasoning is a misunderstanding of the dish.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
