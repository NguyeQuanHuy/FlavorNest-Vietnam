'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chim-cut-chien-gion',
    title: 'Chim Cút Chiên Giòn (Crispy Fried Quail with Fish Sauce Glaze)',
    subtitle: 'Whole quail deep-fried until every bone is edible and the skin shatters — then tossed in a wok with caramelized fish sauce, garlic, and chili that coats each bird in a sticky, sweet-savory glaze. The southern Vietnamese bird dish where you eat the entire quail, bones and all, and order another.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/chim-cut-chien-gion.jpg',
    intro: `Chim cút chiên giòn is the crispy fried quail of southern Vietnamese cooking — a dish that sits at the intersection of Chinese deep-frying technique and Vietnamese fish sauce flavoring and produces a result that is one of the most satisfying beer foods in the entire nh?u repertoire. The key that makes this preparation distinctive is the frying temperature and time: quail are small enough that at 180°C, a full 12-14 minutes of frying produces a bird where not just the skin but the smaller bones — the wing bones, the rib bones, the small vertebrae — become genuinely edible. At the correct frying temperature and time, these small bones crisp to the texture of a very thin cracker: they shatter when bitten and contribute their calcium-mineral flavor to each mouthful rather than requiring the diner to navigate around them. The result is a bird that can be eaten completely, leaving nothing behind — a quality that Vietnamese diners who understand quail deeply appreciate and that always surprises those encountering the dish for the first time. After frying, the quail are tossed in a wok with a specifically calibrated fish sauce-sugar-garlic-chili reduction that caramelizes onto the hot crispy skin in the 60 seconds it has contact with the wok surface — long enough to glaze, not long enough to soften the crispiness achieved in the fryer. The fish sauce glaze is applied hot to hot — wok-hot quail receiving wok-hot glaze — and sets immediately into a sticky, sweet-savory coating that adheres to the crispy skin without softening it. Chim cút chiên giòn is ordered by the pair at Saigon nh?u restaurants, eaten one after another until the pile of toothpicks and the empty beer bottles indicate that the evening has been a success.`,
    ingredientSections: [
        {
            title: 'Quail',
            items: [
                { amount: 8, name: 'whole quail (chim cút)', note: 'cleaned — left whole, not spatchcocked. The whole bird shape is necessary for the all-bone-edible frying technique.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for brief marinating' },
                { amount: 1, unit: 'tsp', name: 'five-spice powder' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 800, unit: 'ml', name: 'neutral oil', note: 'for deep frying — enough to submerge the quail' },
            ],
        },
        {
            title: 'Fish sauce glaze (nu?c m?m chiên)',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'sugar', note: 'the glaze is sweet — do not reduce the sugar' },
                { amount: 2, unit: 'tbsp', name: 'water' },
                { amount: 6, name: 'garlic cloves', note: 'thinly sliced — fried until golden before the glaze is added' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'thinly sliced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced diagonally — for color and visual' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for the glaze wok step' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, extra sliced' },
                { amount: 3, name: 'spring onions', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate briefly and dry thoroughly',
            description: 'Combine fish sauce, five-spice, white pepper, and sugar. Rub over every surface of each whole quail, inside the cavity, under the wings. Marinate for 20 minutes at room temperature. Then pat completely dry with paper towels — this step is critical. Any surface moisture produces dangerous oil splatter during deep-frying and prevents the skin from crisping. The quail surface should feel dry to the touch before it enters the oil.',
            tip: 'Drying the quail after marinating is counterintuitive but essential — the fish sauce marinade draws moisture to the surface during the 20-minute rest. Pressing paper towels firmly over every surface and inside the cavity removes this moisture. The drier the surface entering the oil, the crispier the result.',
        },
        {
            title: 'Deep-fry at 180°C — the full 12-14 minutes',
            description: 'Heat oil to 180°C in a wok or deep pot. Fry the whole quail in batches of 2-3 — do not crowd. Fry for 12-14 minutes, turning every 3-4 minutes for even browning. The quail will initially sink, then float as the moisture inside evaporates. By 12 minutes the skin should be deep golden, the wing tips and smaller bones already audibly crunching when the bird is pressed firmly. Remove and drain briefly on paper towels.',
            tip: 'The 12-14 minute frying time is the specific window that makes quail bones edible. At 8-10 minutes the skin is crispy but the rib and wing bones are still firm and should not be eaten. At 12-14 minutes at 180°C, the small bones have lost their moisture and crisped to the shattering consistency. Test by pressing a wing tip firmly between two fingers — it should yield and crack, not flex.',
        },
        {
            title: 'Make the fish sauce glaze',
            description: 'Combine fish sauce, sugar, and water in a small bowl. Stir until sugar dissolves. Heat a wok over high heat. Add oil and fry the sliced garlic until just golden — 30 seconds. Add the bird\'s eye chilies. Pour in the fish sauce-sugar mixture — it will bubble immediately and begin reducing. Cook for 60-90 seconds, stirring, until the glaze is thick enough to coat the back of a spoon and has darkened slightly from the caramelizing sugar.',
            tip: 'The fish sauce glaze reduces fast at wok temperature — have the fried quail ready beside the wok before starting the glaze. The window between the glaze being perfectly thick and being burnt is about 30 seconds. Prepare everything before the heat goes on.',
        },
        {
            title: 'Toss quail in the glaze — 60 seconds maximum',
            description: 'Add all the fried quail to the wok with the hot glaze. Toss vigorously for 60 seconds — every surface of every quail must be coated in the sticky glaze. The glaze will set onto the hot crispy skin almost immediately. Add the sliced red chilies in the final 10 seconds. Remove from heat immediately — the quail in the wok beyond 60 seconds begins to lose its crispness from the moisture in the glaze.',
            tip: 'The 60-second glaze toss is the moment that defines the dish. Too short: uneven glaze coverage. Too long: the crispy skin softens from the glaze moisture. The correct endpoint: every quail is visibly glazed and glossy, the glaze has set to a slightly sticky surface, and the skin still feels rigid when pressed.',
        },
        {
            title: 'Plate and serve immediately',
            description: 'Transfer to a serving plate immediately. Scatter sliced spring onion, rau ram, mint, and extra chili over the glazed quail. Serve with lime wedges. How to eat: pick up the whole quail by a leg. Bite through the breast — skin, meat, and the thin breastbone all together. The crispy skin shatters, the fish sauce glaze is sweet and savory, the meat is juicy. Work through the entire bird — every bone is edible. Eat in 4-6 bites total. Order the next one.',
            tip: 'Chim cút chiên giòn eaten cold is a different and inferior dish — the glaze sets hard and the skin loses its shatter. This is a serve-immediately-eat-immediately preparation. If cooking for a group, fry in batches and glaze in batches so each round arrives hot. The Vietnamese understanding: the best bite of chim cút chiên giòn is the first bite of a just-glazed bird.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
