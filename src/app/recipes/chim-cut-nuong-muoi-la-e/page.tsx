'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chim-cut-nuong-muoi-la-e',
    title: 'Chim Cút Nướng Muối Lá É (Phú Yên Charcoal Quail with Litsea Leaf Salt)',
    subtitle: 'Spatchcocked quail marinated in lemongrass and fish sauce then grilled over charcoal until the skin chars and crisps — served not with the standard muối tiêu chanh but with pounded lá é salt, the Phú Yên condiment that turns a good grilled quail into something specific to one province.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/chim-cut-nuong-muoi-la-e.jpg',
    intro: `Chim cút nướng muối lá é is the Phú Yên version of grilled quail — a preparation that differs from the standard southern Vietnamese chim cút nướng in one specific and defining way: the dipping condiment. Where the rest of Vietnam eats grilled quail with muối tiêu chanh (coarse salt, black pepper, fresh lime) or with a sweet-sour nước chấm, Phú Yên eats it with muối lá é — the pounded litsea cubeba leaf salt that appears alongside every significant grilled and steamed protein in the province. The difference this single condiment substitution makes is not subtle. Muối tiêu chanh brings saltiness, pepper heat, and lime brightness to the quail — a clean, familiar combination. Muối lá é brings all of that plus the specific wild, citrus-camphor-pepper character of litsea cubeba that has no equivalent anywhere else in Vietnamese cuisine — an aromatic dimension that the standard salt cannot provide and that, once tasted alongside grilled quail, makes the standard condiment seem incomplete. The quail itself in the Phú Yên version is marinated with a slightly stronger lemongrass presence than the southern standard — four stalks for eight quail, where the southern version uses three — reflecting the four-stalk lemongrass proportion that appears throughout Phú Yên seafood and meat cooking as the province's signature aromatic quantity. The grilling is the same: charcoal, medium-hot, the quail placed flat to cook evenly, the skin allowed to char in the specific way that charcoal produces and gas cannot replicate. The result is a quail that is familiar in technique and specific in finishing — the Phú Yên identity established entirely through the condiment and the lemongrass proportion rather than through an unusual preparation method.`,
    ingredientSections: [
        {
            title: 'Quail',
            items: [
                { amount: 8, name: 'whole quail (chim cút)', note: 'spatchcocked — backbone removed, flattened. Or leave whole for a rustier presentation.' },
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, finely minced — four stalks is the Phú Yên quantity' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Muối lá é Phú Yên — the defining condiment',
            items: [
                { amount: 30, unit: 'g', name: 'fresh lá é leaves (litsea cubeba)', note: 'more generous than usual — the primary condiment for this dish, not a secondary option. Substitute: 10 kaffir lime leaves + 10 rau răm leaves pounded together — different but closest approximation.' },
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper', note: 'coarsely ground' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'pounded with the leaves — more chili than usual for quail' },
                { amount: 3, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'for eating raw alongside each quail piece — the raw leaf amplifies the muối lá é character' },
                { amount: 1, name: 'bunch rau răm' },
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)', note: 'the Phú Yên accompaniment — for making mini wraps with the quail' },
                { amount: 2, name: 'extra limes' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 1, name: 'cucumber', note: 'sliced into batons' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate with four-stalk lemongrass — 2 hours',
            description: 'Spatchcock the quail: cut along both sides of the backbone with scissors and remove it. Press flat with the heel of your hand. Combine the four-stalk lemongrass paste with garlic, shallots, fish sauce, oyster sauce, sugar, turmeric, black pepper, and oil. The lemongrass quantity should be noticeably more fragrant and greenish than a standard quail marinade. Coat every surface of each quail thoroughly. Marinate for 2 hours at room temperature or overnight refrigerated.',
            tip: 'The four-stalk lemongrass in the Phú Yên version versus three stalks elsewhere produces a marinade that is visibly greener and more aromatic. This difference carries through to the finished quail — the lemongrass character is more present in the flesh and more compatible with the lá é dipping salt, which also has strong lemongrass-adjacent citrus notes.',
        },
        {
            title: 'Build the charcoal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over — 25-30 minutes. Medium-hot fire for quail: hold your hand 15cm above the grill for 4 seconds before the heat is too intense. This temperature produces the char-without-burning timing that quail requires — small enough to cook through fast, fat-rich enough to produce flare-ups that require management.',
            tip: 'For chim cút nướng muối lá é specifically, the fire should be very slightly cooler than for the honey-glazed version — the muối lá é condiment is more delicate than the sweet glaze and the quail should carry clean charcoal char rather than caramelized sweetness. The condiment provides all the complexity; the quail provides the charcoal foundation.',
        },
        {
            title: 'Grill until charred — both sides',
            description: 'Place the spatchcocked quail skin-side down on the grill. Grill without moving for 5-6 minutes until the skin is deeply charred with black spots and the quail fat renders and drips. Flip and grill the bone side for 4 minutes. For the Phú Yên version, the char level should be slightly more aggressive than for the honey-glazed quail — the muối lá é salt works best against a clearly charred, slightly smoky surface rather than a glossy glazed one.',
            tip: 'The level of char that pairs best with muối lá é is deeper than the char that pairs best with sweet sauces. The wild, aromatic character of lá é needs a robust charcoal note to work against — a pale, barely-charred quail skin makes the muối lá é taste sharp and disconnected rather than integrated.',
        },
        {
            title: 'Pound the muối lá é — generous quantity',
            description: 'Pound 30g of lá é leaves with coarse salt, black pepper, sugar, and two bird\'s eye chilies in a mortar. Pound for 3 full minutes until the leaves are completely broken down and the salt is intensely green and fragrant — more vigorously pounded than for seafood because quail has a richer fat character that needs a more fully extracted lá é oil to penetrate. Transfer to individual plates — more generous quantities per diner than usual. Squeeze lime at the table.',
            tip: 'The 30g of lá é for eight quail is a more generous quantity than for any single protein in the Phú Yên lá é series. Quail fat is rich and abundant and requires more of the aromatic condiment to balance it. A small muối lá é plate for chim cút nướng makes the condiment taste insufficient against the fatty grilled quail.',
        },
        {
            title: 'Serve and eat the Phú Yên way',
            description: 'Arrange the charred quail on a plate. Scatter raw lá é leaves and rau răm generously over the surface. Serve with the muối lá é, sesame crackers, cucumber, and lime wedges. The Phú Yên eating ritual: pick up a quail piece, place it on a sesame cracker with a raw lá é leaf, dip the assembled cracker edge into the lime-squeezed muối lá é salt, eat in one motion. The cracker crunch, the charred quail skin and meat, and the wild litsea character from both the salt and the raw leaf simultaneously — this is chim cút nướng muối lá é as Phú Yên people eat it.',
            tip: 'The raw lá é leaf placed on the cracker under the quail — not on top — is the detail that most clearly marks this as a practiced Phú Yên preparation. The leaf under the meat means it wilts slightly from the heat of the just-grilled quail and releases its aromatic oils directly up into the meat above. On top, it remains raw and separate. Under the meat, it becomes part of the bite.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
