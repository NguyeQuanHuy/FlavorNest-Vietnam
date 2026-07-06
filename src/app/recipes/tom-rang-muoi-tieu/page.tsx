'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tom-rang-muoi-tieu',
    title: 'Tôm Rang Mu?i Tiêu (Salt and Pepper Shrimp)',
    subtitle: 'Whole shrimp deep-fried until the shells become thin, crispy, and completely edible, then tossed in a wok with salt, black pepper, garlic, lemongrass, and kaffir lime leaf until every shell is coated in a fragrant, savory crust. Eaten whole — shells and all — with cold beer.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/tom-rang-muoi-tieu.jpg',
    intro: `Tôm rang mu?i tiêu is the Vietnamese salt and pepper shrimp — the preparation that most completely demonstrates what heat does to a shrimp shell. A raw shrimp shell is tough, chewy, and inedible. A shell that has been deep-fried at 180°C for three minutes is thin, crisp, and shatters between the teeth like a cracker — and carries the concentrated flavor of the seasoning crust that coats it. The Vietnamese rang mu?i technique — dry-roasting in a seasoned salt mixture — is applied after the initial deep-frying, so that the already-crispy shells receive a second layer of caramelization as the salt, pepper, garlic, and aromatics toast in the dry wok heat. The result is shrimp with a crust that is simultaneously the shell itself, made crispy, and the seasoning mixture fused onto its surface. Tôm rang mu?i tiêu is the beer food that Vietnamese coastal restaurants serve by the kilogram at long communal tables on warm evenings — the kind of dish where you eat with your fingers, the pile of empty shells grows steadily on the newspaper-covered table, and the conversation and cold lager and the fragrance of the lemongrass in the seasoning are equally important. It requires no tools, no utensils, and almost no preparation beyond the frying and the seasoning — the entire active cooking time is under 10 minutes. The patience required is for the oil to reach the correct temperature and for the wok to reach the correct heat for the rang mu?i step. Both matter more than any technique.`,
    ingredientSections: [
        {
            title: 'Shrimp',
            items: [
                { amount: 800, unit: 'g', name: 'fresh shrimp, whole (tôm tuoi)', note: 'medium size — 30-40 count per 500g. Shell-on, head-on. The shell must be thin enough to eat after frying — very large shrimp have shells too thick to become fully edible. Fresh is essential; frozen works but produces slightly softer shells.' },
                { amount: 500, unit: 'ml', name: 'neutral oil', note: 'for deep frying' },
            ],
        },
        {
            title: 'Rang mu?i seasoning',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1.5, unit: 'tsp', name: 'freshly ground black pepper', note: 'coarse grind — the pepper is structural seasoning, not a trace' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'helps the seasoning caramelize onto the shells' },
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk only, very finely minced — the aromatic backbone of the seasoning' },
                { amount: 6, name: 'garlic cloves', note: 'thinly sliced' },
                { amount: 6, name: 'kaffir lime leaves', note: 'finely shredded into the thinnest possible strips' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'thinly sliced — adjust to heat preference' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'for the rang mu?i wok step' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'extra fresh chili, sliced' },
                { amount: 1, name: 'bunch rau ram', note: 'to eat between shrimp' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the shrimp',
            description: 'Rinse the shrimp under cold water. Use scissors to trim the sharp rostrum (the pointed spike on the head) — this prevents it from puncturing other shrimp and makes eating easier. Devein through the back shell with a small cut if preferred, but do not remove the shell or head. Pat completely dry with paper towels — surface moisture causes dangerous oil splatter and prevents the shell from crisping.',
            tip: 'The only preparation is rinsing, trimming the rostrum, and thorough drying. Any additional preparation — peeling, deveining extensively, removing heads — works against the dish. The whole shrimp, shell and head intact, is what makes tôm rang mu?i tiêu what it is.',
        },
        {
            title: 'Deep-fry until shells are crispy',
            description: 'Heat oil to 180°C in a wok or deep pan. Fry the shrimp in batches — do not crowd. Fry for 2.5-3 minutes until the shells turn bright orange-red and feel light and slightly rigid when lifted with a slotted spoon. The shells should not feel soft or pliable — they should have a faint crispness. Do not fry longer or the flesh inside tightens and the flavor is lost. Drain on paper towels. The shells will firm further as they cool slightly.',
            tip: 'The 2.5-3 minute frying time produces shells that are crispy but not brittle. Longer frying makes the shells hard and the meat inside dry. Test one shrimp first: bite through the shell — it should crunch cleanly without requiring force. If it requires chewing rather than crunching, fry 30 more seconds on the next batch.',
        },
        {
            title: 'Prepare the rang mu?i mixture',
            description: 'Combine salt, black pepper, and sugar in a small bowl — mix well. Have the finely minced lemongrass, sliced garlic, shredded kaffir lime leaves, and sliced chili ready and separate. The rang mu?i step moves quickly and everything must be prepared before the wok goes on the heat.',
            tip: 'The lemongrass for tôm rang mu?i must be minced to an almost-paste consistency — large fibrous pieces do not caramelize properly in the dry wok and remain raw-tasting against the seasoned shrimp. Pound in a mortar first if needed.',
        },
        {
            title: 'Rang mu?i — the dry wok technique',
            description: 'Heat a clean wok over maximum heat until smoking. Add oil. Fry the minced lemongrass and garlic slices for 30-45 seconds until golden and very fragrant. Add the salt-pepper-sugar mixture — it will sizzle immediately. Toss for 15 seconds until the salt toasts slightly. Add all the fried shrimp at once. Toss vigorously and continuously for 90 seconds — every shrimp must be coated in the seasoning mixture on all surfaces. Add the shredded kaffir lime leaves and sliced chili in the last 20 seconds.',
            tip: 'The 90-second rang mu?i step is where the dish comes together — the salted, aromatic mixture caramelizes slightly from the wok heat onto the already-crispy shells. The wok must be genuinely smoking for this to happen. A merely hot wok produces shrimp coated in raw-tasting salt; a smoking wok produces shrimp coated in a caramelized, integrated seasoning crust.',
        },
        {
            title: 'Plate and serve immediately',
            description: 'Transfer the seasoned shrimp to a serving plate in a pile — not a single layer, a generous mound. The shredded kaffir lime leaves and chili should be visible throughout. Scatter spring onion and extra chili. Serve with lime wedges, rau ram, and cold beer. How to eat: pick up a shrimp, pop off the rostrum if present, bite through shell and all. Eat the entire shrimp — shell, meat, head. The head contains the most concentrated shrimp flavor. Suck it clean before discarding.',
            tip: 'The serving temperature is critical — tôm rang mu?i tiêu loses its shell crispness within 10 minutes as the moisture from the shrimp meat migrates into the shell. Serve the moment it comes off the wok and eat immediately. This is not a dish that waits.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
