'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tom-tich-hap-sa',
    title: 'Tôm Tích Hấp Sả (Steamed Mantis Shrimp with Lemongrass)',
    subtitle: 'Live mantis shrimp steamed over a fragrant bath of lemongrass, ginger, and beer until the shells turn from grey-green to brilliant orange and the sweet, dense flesh inside is just set — served with muối tiêu chanh and the instruction to eat with your hands and not worry about your clothes.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/tom-tich-hap-sa.jpg',
    intro: `Tôm tích — mantis shrimp, also called tôm thuyền (boat shrimp) in Phú Yên for the way their segmented bodies resemble a small boat — is the crustacean that regular diners from outside Vietnam encounter with confusion and local diners from the coast eat with the automatic competence of long practice. Mantis shrimp are not true shrimp: they are stomatopods, a separate order with a body plan unlike any common crustacean, famous in marine biology for their extraordinary eyes and for the striking appendages (the dactyl clubs) with which they can strike with the force of a bullet. In Phú Yên, they are famous for their flavor: the flesh is white, dense, and sweet in a way that is simultaneously like lobster and like crab but specifically neither — richer than shrimp, more delicate than crab, with a particular oceanic sweetness that the central Vietnamese coast produces and that the steaming preparation preserves completely. Tôm tích hấp sả is the simplest and most honest preparation: live mantis shrimp over a boiling bath of lemongrass, ginger, and Vietnamese beer, covered tightly for 6-8 minutes until the shells turn from the muted grey-green of live mantis shrimp to the brilliant coral-orange that indicates they are perfectly cooked. The dipping salt is muối tiêu chanh — coarse salt, freshly ground black pepper, lime squeezed at the table. The eating is manual and slightly messy: the sharp edges of the mantis shrimp shell require technique to open without cutting the fingers, which coastal Phú Yên diners have learned from childhood and visitors learn through trial and several small cuts.`,
    ingredientSections: [
        {
            title: 'Mantis shrimp',
            items: [
                { amount: 1, unit: 'kg', name: 'fresh mantis shrimp (tôm tích / tôm thuyền)', note: 'live or very recently killed — the freshness is detectable in mantis shrimp more than in almost any other seafood. Available at Vietnamese and Asian seafood markets. Choose active, moving mantis shrimp with intact shells.' },
            ],
        },
        {
            title: 'Steaming bath',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and roughly cut' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 330, unit: 'ml', name: 'Vietnamese beer (Saigon or Tiger)', note: 'one can or bottle — the CO₂ and alcohol carry the lemongrass aromatics into the steam' },
                { amount: 200, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 3, name: 'spring onions', note: 'tied in a bundle' },
            ],
        },
        {
            title: 'Muối tiêu chanh',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1.5, unit: 'tsp', name: 'freshly ground black pepper', note: 'coarse grind' },
                { amount: 3, name: 'limes', note: 'squeezed fresh at the table — one per 2 diners' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'optional' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced — optional addition for those who want heat in the salt' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch rau răm (Vietnamese coriander)', note: 'eaten between mantis shrimp' },
                { amount: 2, name: 'extra limes' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 1, name: 'bowl warm water with lime slice', note: 'finger bowl — eating mantis shrimp requires hands' },
            ],
        },
    ],
    steps: [
        {
            title: 'Rinse the mantis shrimp',
            description: 'Rinse the live mantis shrimp under cold running water. Handle carefully — the dactyl clubs at the front of the body can deliver a sharp strike even after the animal is subdued. Most mantis shrimp sold at market are already slightly sedated from the ice they have been transported on. Rinse until the water runs clean. Do not submerge in water for extended periods — mantis shrimp do not need purging like clams and the freshwater can stress them unnecessarily.',
            tip: 'The only preparation mantis shrimp need is rinsing. Unlike clams or mussels, they do not need soaking. Unlike shrimp, they do not need deveining. The preparation is rinse, steam, eat.',
        },
        {
            title: 'Build the aromatic steaming bath',
            description: 'Combine beer, water, bruised lemongrass, smashed ginger, spring onion bundle, and salt in the steamer base. Bring to a full, vigorous boil over high heat. The beer will foam briefly as it heats — this subsides. By the time the steam is rolling strongly, the liquid should smell clearly of lemongrass and ginger. The steam must be vigorous before the mantis shrimp go in — insufficient steam produces uneven cooking.',
            tip: 'The beer adds a specific aromatic character to the steam — the CO₂ and mild malt volatilize and carry the lemongrass compounds more effectively than water alone. This is the same technique used for tôm hấp bia and produces the same aromatic result with the specific flavor of mantis shrimp.',
        },
        {
            title: 'Steam for exactly 6-8 minutes',
            description: 'Arrange the mantis shrimp in a single layer on the steaming rack — do not pile. Cover tightly. Steam over high heat for 6 minutes for smaller mantis shrimp (under 15cm), 8 minutes for larger (15-20cm). Do not open the lid during steaming. The mantis shrimp are done when: the shells have turned from grey-green to uniformly coral-orange throughout, the tail fan has spread slightly, and the flesh visible at the tail is completely white and opaque.',
            tip: 'The color change from grey-green to coral-orange is the most reliable doneness indicator for mantis shrimp — more reliable than timing alone. Every part of the shell should be uniformly orange with no grey remaining when they are done.',
        },
        {
            title: 'Transfer and rest briefly',
            description: 'Remove the mantis shrimp from the steamer the moment they are done. Transfer to a serving plate. Rest for 2 minutes — the carry-over cooking finishes any remaining slightly underdone flesh and the shells are slightly easier to open when they have cooled marginally from the steaming temperature.',
            tip: 'The 2-minute rest also allows the shell temperature to drop from burning-hot to merely very hot — important since mantis shrimp are eaten with the fingers and the shell fresh from the steamer can cause burns.',
        },
        {
            title: 'Prepare the muối tiêu chanh',
            description: 'Place coarse salt and freshly ground black pepper on small individual plates — one per diner. Leave the limes uncut until the moment of eating. Squeeze directly over the salt-pepper at the table just before the first mantis shrimp is opened. The lime zest oil released in the squeezing is the aromatic element that makes muối tiêu chanh different from plain salt — it must be applied fresh.',
            tip: 'The ritual of squeezing lime at the table rather than pre-mixing the dipping salt is specifically important with mantis shrimp because the eating process is already manual and unhurried. Each person makes their own dipping salt, squeezes their own lime, adjusts their own quantities. This is part of the coastal eating experience.',
        },
        {
            title: 'How to open and eat mantis shrimp',
            description: 'The mantis shrimp shell is sharp — use scissors or a firm thumbnail rather than bare fingers to crack it open. Method: hold the mantis shrimp belly-up. Insert small kitchen scissors along the underside and cut the length of the belly from tail to head. Open the shell like a book — the white flesh lies in the center. Pull the flesh free in one piece. Dip in the lime-squeezed muối tiêu chanh. Eat with a leaf of rau răm. Discard the shell — though experienced coastal diners suck the head for its concentrated flavor before discarding.',
            tip: 'Scissors are the correct tool — not fingers. The lateral edges of mantis shrimp shells are genuinely sharp and the cut from an overconfident bare-handed attempt is a common coastal seafood experience that tourists remember. Every coastal seafood restaurant in Phú Yên has scissors on the table beside the mantis shrimp.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}