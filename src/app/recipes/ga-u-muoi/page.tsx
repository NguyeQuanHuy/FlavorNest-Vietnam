'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-u-muoi',
    title: 'Gà Ủ Muối (48-Hour Salt-Cured Roast Chicken)',
    subtitle: 'A whole chicken packed in coarse salt mixed with lemongrass, ginger, and kaffir lime leaf for 48 hours — then air-dried and roasted until the skin shatters like glass. The central Vietnamese salt-curing technique that produces the crispiest chicken skin achievable without deep-frying.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '48 hr curing + 1 hr roasting',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ga-u-muoi.jpg',
    intro: `Gà ủ muối — salt-cured chicken — is the preparation from Quảng Bình and the central Vietnamese provinces where the 48-hour salt cure is not merely a seasoning technique but a transformation. Ủ means to pack in or bury; muối means salt. The chicken is packed completely in coarse sea salt mixed with aromatic herbs and left for two days. During this time the salt does three things simultaneously: it draws moisture from the skin surface through osmosis, seasons the flesh from the outside in as the dissolved salt penetrates the meat, and partially dries the skin so that when the chicken is eventually roasted the surface moisture is gone and what remains is pure protein and fat that caramelizes immediately on contact with heat. The result is the crispiest chicken skin achievable in a home kitchen — a surface that shatters when tapped with a fingernail, closer in texture to pork crackling than to ordinary roast chicken skin, while the flesh beneath stays astonishingly juicy because the salt cure has restructured the muscle proteins to retain moisture during cooking. Gà ủ muối requires patience — 48 hours of cure, 8 hours of air-drying after the salt is removed — and rewards that patience with a chicken that is unlike any other preparation. It is the dish that demonstrates why salt is not merely a seasoning but a cooking medium in its own right.`,
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 1, name: 'whole chicken, 1.4-1.6kg', note: 'free-range essential — the skin of a commercial chicken is too thin to withstand the 48-hour cure and tears. Air-chilled, not water-chilled.' },
            ],
        },
        {
            title: 'Salt cure mixture',
            items: [
                { amount: 500, unit: 'g', name: 'coarse sea salt', note: 'not iodized table salt — iodized salt produces a metallic off-flavor over 48 hours' },
                { amount: 4, name: 'lemongrass stalks', note: 'outer layers only, roughly bashed and chopped — the inner stalk is too precious; the outer leaves are ideal for this application' },
                { amount: 60, unit: 'g', name: 'fresh ginger', note: 'unpeeled, roughly sliced and smashed' },
                { amount: 10, name: 'kaffir lime leaves', note: 'torn — releases aromatic oils into the salt' },
                { amount: 4, name: 'garlic cloves', note: 'lightly smashed, skin on' },
                { amount: 1, unit: 'tsp', name: 'black peppercorns', note: 'lightly crushed' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder', note: 'stains the skin golden during the cure' },
            ],
        },
        {
            title: 'Post-cure air-dry rub',
            items: [
                { amount: 1, unit: 'tsp', name: 'neutral oil', note: 'rubbed over the skin after the salt is removed and before air-drying — a very thin coat' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'ground and rubbed over the skin' },
            ],
        },
        {
            title: 'Dipping salt (muối sả ớt)',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'sea salt' },
                { amount: 1, name: 'lemongrass stalk', note: 'inner stalk, very finely minced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'limes', note: 'juiced — squeezed over the salt at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 6, name: 'kaffir lime leaves', note: 'finely shredded — scattered over the finished chicken' },
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 2, name: 'limes, extra wedges' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the aromatic salt cure',
            description: 'Combine coarse sea salt with bashed lemongrass, smashed ginger, torn kaffir lime leaves, garlic, crushed peppercorns, and turmeric. Work the aromatics into the salt with your hands, squeezing firmly to bruise the lemongrass and kaffir lime leaves and release their oils into the salt. The salt should smell intensely aromatic and be slightly stained golden from the turmeric. Rest for 30 minutes before using — this allows the oils to fully transfer.',
            tip: 'The aromatic oils in the lemongrass and kaffir lime must be physically released into the salt before the cure begins. Gently mixing is insufficient — squeeze and crush the aromatics firmly against the salt.',
        },
        {
            title: 'Pack the chicken in salt — 48 hours',
            description: 'Pat the chicken completely dry inside and out. Place a layer of the aromatic salt in a deep container just large enough to hold the chicken. Place the chicken breast-side up on the salt. Pack the remaining salt over, under, and around every surface — the chicken must be completely buried with no exposed skin. Cover tightly with plastic wrap. Refrigerate for exactly 48 hours. Do not open during this time.',
            tip: 'The container size matters — too large and the salt spreads thin and insufficient. The chicken should sit in a tight-fitting vessel where the salt forms a dense pack around every surface. A large zip-lock bag pressed flat around the chicken also works well.',
        },
        {
            title: 'Remove, rinse, and air-dry — 8 hours',
            description: 'After 48 hours, remove the chicken from the salt. Brush off every grain of salt — use a pastry brush, not water, to avoid rinsing away the surface seasoning that has set into the skin. Taste the skin: it should be properly seasoned, not aggressively salty. If too salty, wipe very briefly with a damp cloth and pat dry immediately. Rub the skin with a thin film of neutral oil and white pepper. Place on a wire rack over a tray. Return to the refrigerator uncovered for minimum 8 hours — overnight is better. The skin surface must be completely dry and slightly tacky to the touch before roasting.',
            tip: 'The 8-hour air-dry after the salt cure is removed is what differentiates gà ủ muối from simply salted roast chicken. The dry refrigerator air draws the remaining surface moisture away, leaving a skin that caramelizes rather than steams in the oven.',
        },
        {
            title: 'Bring to room temperature and roast at high heat',
            description: 'Remove the chicken from the refrigerator 45 minutes before roasting. Preheat oven to 220°C fan (230°C conventional). Place the chicken breast-side up on a wire rack in a roasting tin. Roast for 20 minutes at 220°C without opening the oven. Reduce to 180°C and continue roasting for 25-30 minutes more for a 1.4kg bird, 35 minutes for 1.6kg. The skin should be a deep mahogany-amber with visible darker patches at the wing tips and drumstick ends.',
            tip: 'Do not baste during roasting — basting adds moisture to a skin that has been carefully dried for 8 hours specifically to remove moisture. The skin roasts dry from the interior fat rendering outward, which is the correct mechanism.',
        },
        {
            title: 'Test and rest',
            description: 'The chicken is done when a skewer at the thigh joint produces clear juices and the internal temperature of the thigh reads 75°C. The skin at this point should be deeply colored and completely firm to the touch — tap it with a fingernail and it should click rather than give. Rest for 10 minutes on the rack before cutting — not on a board where pooling steam will soften the skin from below.',
            tip: 'Resting on the rack is essential for this preparation specifically. The rendered fat under the skin needs to set slightly as it cools, which produces the characteristic firm texture. A board traps steam and softens the bottom skin within minutes.',
        },
        {
            title: 'Make the dipping salt and serve',
            description: 'Pound the salt, minced lemongrass, and chili together in a mortar until the lemongrass is broken down and the salt is fragrant. Add sugar. Transfer to small dipping plates. Squeeze fresh lime over at the table. Chop the chicken Vietnamese-style through the bone with a cleaver. Scatter finely shredded kaffir lime leaves and spring onion over the plate. The skin should shatter at the first contact of the cleaver. Serve immediately — gà ủ muối skin loses crispness within 15-20 minutes of carving.',
            tip: 'The sound of the skin shattering under the cleaver is the signal that the cure and dry and roast have all worked correctly. If the skin gives rather than shatters, something in the process was insufficient — most commonly the air-drying time was too short.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}