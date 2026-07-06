'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-hap-sa',
    title: 'Mực Hấp Sả (Steamed Squid with Lemongrass)',
    subtitle: 'Whole squid steamed over a bath of lemongrass, ginger, and beer until just cooked — tender, sweet, and perfumed throughout. Served with ginger-lime dipping salt and a plate of fresh herbs.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/muc-hap-sa.jpg',
    intro: `Mực hấp sả is the Vietnamese seafood preparation that demonstrates how little needs to be done to fresh squid to make it extraordinary. The technique is pure restraint: squid cleaned but left whole, steamed over a fragrant bath of lemongrass, ginger, and sometimes beer, for exactly the right amount of time. Eight minutes for medium squid. Ten for large. One minute over and the squid is rubbery. One minute under and the texture is wrong in a different way. The lemongrass steam does not simply flavor the outside — it perfumes the flesh from within, so that each piece of squid carries the aromatic character of the steaming bath without any direct addition of seasoning. The dipping sauce — muối tiêu chanh, salt-pepper-lime — is not a condiment but the second half of the dish: the acid and salt that complete what the pure steaming leaves deliberately unfinished. Mực hấp sả is the dish that Vietnamese coastal cooks make when the squid is fresh enough to deserve respect.`,
    ingredientSections: [
        {
            title: 'Squid',
            items: [
                { amount: 800, unit: 'g', name: 'fresh squid (mực)', note: 'medium size, whole — cleaned but kept whole or in large pieces. Freshness is everything; frozen squid produces acceptable but clearly inferior results.' },
            ],
        },
        {
            title: 'Steaming bath',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and cut into 5cm pieces' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '5-6 thick slices, lightly smashed' },
                { amount: 330, unit: 'ml', name: 'beer (bia)', note: 'Vietnamese Saigon or Hanoi beer preferred — or any light lager. The alcohol carries the lemongrass aromatics into the steam.' },
                { amount: 200, unit: 'ml', name: 'water' },
                { amount: 3, name: 'spring onions', note: 'tied in a bundle' },
            ],
        },
        {
            title: 'Muối tiêu chanh dipping salt',
            items: [
                { amount: 1, unit: 'tsp', name: 'sea salt or flaky salt' },
                { amount: 1, unit: 'tsp', name: 'freshly ground black pepper', note: 'coarse grind — this is structural seasoning, not a garnish' },
                { amount: 2, name: 'limes', note: 'juiced fresh at the table' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'optional — rounds the sharpness' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)', note: 'or mint and perilla' },
                { amount: 2, name: 'limes, extra wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 3, name: 'spring onions, sliced', note: 'scattered over the squid' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean the squid correctly',
            description: 'Pull the head and tentacles away from the body — the innards will come with them. Remove and discard the clear plastic-like quill from inside the body tube. Peel the thin purple skin from the body — it comes off easily under cold water. Rinse the body cavity under running water. Cut tentacles just above the eyes — discard the head and innards, keep the tentacles. The cleaned squid should be completely white and smell clean of the sea.',
            tip: 'Do not remove the fins — they are the most tender part of the squid. The skin must come off completely; residual skin creates a chewy, bitter surface after cooking.',
        },
        {
            title: 'Score the squid body',
            description: 'For medium and large squid, make shallow diagonal cuts across the body tube in a crosshatch pattern — cuts 5mm apart, about 2mm deep. Do not cut all the way through. The scoring allows the lemongrass steam to penetrate the flesh more deeply and also causes the squid to curl attractively when cooked. Small squid (under 12cm) do not need scoring.',
            tip: 'Score lightly — only through the outer surface. Deep cuts cause the squid to fall apart when cooked.',
        },
        {
            title: 'Build the steaming bath',
            description: 'In the base of a wide steamer or wok, combine beer, water, bruised lemongrass, ginger slices, and spring onion bundle. Bring to a full rolling boil. The beer will foam as it heats — this is normal and subsides. The steam rising should smell strongly of lemongrass and ginger before the squid goes in.',
            tip: 'The beer contributes to the steam but primarily acts as a flavor carrier — the CO2 and alcohol vaporize and help the lemongrass aromatics travel into the steam more effectively than water alone.',
        },
        {
            title: 'Steam for exactly the right time',
            description: 'Arrange the squid in a single layer on the steaming rack over the boiling lemongrass bath. Cover with a tight-fitting lid. Steam: small squid (under 15cm) — 6-7 minutes. Medium squid (15-20cm) — 8-9 minutes. Large squid (over 20cm) — 10-11 minutes. Do not open the lid during steaming — every opening releases heat and adds cooking time.',
            tip: 'This is the most critical step. Set a timer. Squid cooked 2 minutes over time is rubbery and loses its sweetness. There is no recovery from overcooked squid.',
        },
        {
            title: 'Check and rest briefly',
            description: 'At the correct time, open the lid — the squid should be opaque white throughout, with the scored cuts opened and slightly curled. The tentacles should be tender when pierced with a chopstick. Remove immediately from the steamer. Rest 2 minutes before slicing — this allows the carry-over cooking to finish without continuing on the heat.',
            tip: 'Pierce the thickest part of the body with a chopstick — it should pass through with mild resistance, not easily (undercooked) and not with no resistance at all (overcooked).',
        },
        {
            title: 'Slice and serve',
            description: 'Slice the squid body into rings 1.5cm wide. Arrange on a plate with the tentacles. Scatter sliced spring onion and fresh chili over the top. Make the dipping salt: combine salt and pepper on small individual plates, squeeze fresh lime juice over just before eating. Serve the herbs alongside for wrapping. To eat: dip a piece of squid in the salt-pepper-lime mixture, add a sprig of herb, eat together.',
            tip: 'The lime must be squeezed at the moment of eating — pre-squeezed lime loses the aromatic citrus oil in the zest that makes the dipping salt work. Squeeze directly over the salt on the plate.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
