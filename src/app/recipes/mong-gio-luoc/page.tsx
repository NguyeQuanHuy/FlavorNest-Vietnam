'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'mong-gio-luoc',
    title: 'Móng Giò Luộc (Boiled Pork Trotters)',
    subtitle: 'Pork trotters simmered with lemongrass, ginger, and salt until the skin turns translucent and the collagen-rich flesh falls from the bone — served cold with a dipping sauce of ginger, vinegar, and chili. The Vietnamese dish that proves collagen is delicious.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/mong-gio-luoc.jpg',
    intro: `Móng giò luộc — boiled pork trotters — is the Vietnamese dish that non-Vietnamese eaters approach with the most hesitation and return to with the most enthusiasm. The trotter contains what is simultaneously the most avoided and most prized part of the pig: the skin, the tendons, the cartilage, and the small bones — all the connective tissue that, when properly cooked, becomes silky, yielding, and rich with collagen. The skin turns translucent and almost gelatinous. The tendons soften to a texture that is chewy and satisfying in a way that lean meat cannot be. The cartilage, at the right temperature, practically dissolves. Móng giò luộc is served at room temperature or cold — the collagen partially sets as it cools, giving each piece a slightly firm, clean-slicing quality that is the correct eating temperature for this preparation. The dipping sauce — rice vinegar, fish sauce, ginger, sugar, and chili — is the acid counterpoint to the richness of the trotter. Without the dipping sauce, the dish is too rich. With it, the balance is complete.`,
    ingredientSections: [
        {
            title: 'Trotters',
            items: [
                { amount: 1.2, unit: 'kg', name: 'pork trotters (móng giò heo)', note: 'front trotters preferred — more collagen than rear. Ask butcher to split lengthwise and cut into 6-8cm sections.' },
                { amount: 2, unit: 'L', name: 'water' },
                { amount: 3, name: 'lemongrass stalks', note: 'bruised and tied' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '5 slices, smashed' },
                { amount: 3, name: 'shallots', note: 'halved' },
                { amount: 1.5, unit: 'tbsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'white pepper' },
                { amount: 2, unit: 'tbsp', name: 'rice vinegar', note: 'keeps the skin white and slightly firms the collagen' },
            ],
        },
        {
            title: 'Ginger-vinegar dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'rice vinegar' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'finely julienned — the texture of the julienned ginger in the sauce is important' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'thinly sliced' },
                { amount: 1, name: 'garlic clove', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'water' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'cucumber', note: 'sliced — for freshness alongside' },
                { amount: 1, name: 'bunch rau răm (Vietnamese coriander)', note: 'or fresh herb plate' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'fresh red chili, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean and blanch the trotters',
            description: 'Singe any remaining hairs from the trotters over a gas flame or with a kitchen torch. Rinse thoroughly under cold water. Place in a pot, cover with cold water, bring to a vigorous boil and blanch for 10 minutes. The water will turn cloudy with foam and blood. Drain completely, rinse every piece under cold water until clean. Wash the pot. This step removes impurities and is what keeps the finished trotters white and clean-tasting.',
            tip: 'Singeing the hair is important — remaining hair creates an unpleasant texture and flavor. If no flame is available, use a disposable lighter methodically over the surface.',
        },
        {
            title: 'Simmer in aromatic water',
            description: 'Return cleaned trotters to the pot. Add 2L cold water, lemongrass, ginger, shallots, salt, sugar, white pepper, and rice vinegar. Bring to a boil, immediately reduce to a very gentle simmer. Skim foam during the first 15 minutes. Simmer uncovered for 60-75 minutes. The trotters are done when the skin is translucent and slightly gelatinous, and a chopstick passes through the thickest part of the skin without resistance.',
            tip: 'The rice vinegar added to the cooking water does two things: keeps the skin brilliantly white (prevents oxidation) and slightly firms the collagen so it slices cleanly when cold. Do not skip.',
        },
        {
            title: 'Test for correct doneness',
            description: 'Correct: the skin is translucent, yielding when pressed with a finger, and comes away from the underlying bone with gentle persuasion. The tendons are completely soft. Incorrect (undercooked): the skin is still opaque, has resistance when pressed, and the tendons are rubbery and tough. If undercooked, continue simmering in 15-minute increments and test again.',
            tip: 'Over-cooked trotters fall apart completely and cannot be served as pieces. The target is tender but holding shape — yielding under pressure but not disintegrating.',
        },
        {
            title: 'Cool and rest',
            description: 'Remove the trotters from the cooking liquid. Place on a plate or rack and allow to cool to room temperature — about 30 minutes. Do not refrigerate while still hot. As they cool, the collagen on the surface sets slightly to a barely-tacky finish. This is the correct serving temperature: room temperature or slightly cool, not hot and not cold from the refrigerator.',
            tip: 'Reserve the cooking liquid — it has significant body from the collagen and makes an excellent base for other soups or for cooking rice.',
        },
        {
            title: 'Make the dipping sauce',
            description: 'Combine rice vinegar, fish sauce, sugar, and water. Stir until sugar dissolves. Add finely julienned ginger, sliced chili, and minced garlic. The sauce should taste sharp and bright — the vinegar should be clearly present, balanced by the fish sauce umami and the sugar sweetness. The julienned ginger should be fine enough to eat in each mouthful.',
            tip: 'The dipping sauce must be sharp enough to cut through the richness of the trotter collagen. If it tastes too mild, add more vinegar. The acid balance is the critical element.',
        },
        {
            title: 'Slice and plate',
            description: 'Using a sharp heavy knife or cleaver, chop the trotters into serving pieces — through the bone if necessary. Arrange on a plate. Surround with sliced cucumber and fresh herbs. Serve the dipping sauce in small individual bowls alongside. To eat: dip each piece of trotter completely in the ginger-vinegar sauce, add a sprig of rau răm, eat together. The rau răm is not garnish — its sharp, peppery flavor is the herb counterpoint to the rich collagen.',
            tip: 'Cold trotters from the refrigerator can be briefly microwaved for 30 seconds to bring back to the ideal room-temperature eating condition. Never serve directly from cold storage — the collagen becomes too firm.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}