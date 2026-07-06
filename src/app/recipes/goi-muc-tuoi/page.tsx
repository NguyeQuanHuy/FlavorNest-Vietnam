'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-muc-tuoi',
    title: 'Gỏi Mực Tươi (Fresh Squid Salad)',
    subtitle: 'Squid scored and blanched for exactly 30 seconds until it curls and firms — tossed while still warm with shredded green mango, rau răm, mint, roasted peanuts, crispy shallots, and a lime-fish sauce dressing that the squid absorbs as it cools. The Vietnamese squid salad where the 30-second blanch is the technique that defines everything.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/goi-muc-tuoi.jpg',
    intro: `Gỏi mực tươi is the fresh squid salad of Vietnamese coastal cooking — a preparation that applies the gỏi (salad) format to squid in the specific Vietnamese way: lightly cooked by blanching rather than raw, dressed while warm so the dressing penetrates the flesh rather than sitting on the surface, and built around the combination of shredded green mango sourness, fresh herb complexity, and roasted peanut richness that characterizes the Vietnamese coastal salad across multiple proteins. The preparation differs from Western squid salad in its blanching precision: 30 seconds in vigorously boiling water, not a moment more. In 30 seconds at a rolling boil, the scored squid rings and tentacles cook from raw to just-set — they curl from the heat contraction, turn from translucent to opaque white, and develop the specific slightly-firm-but-yielding texture that makes them ideal for a salad where they need to hold their shape through the tossing, the dressing absorption, and the eating without becoming rubbery. The scoring of the squid body tube before blanching — crosshatch cuts through the outer skin at 5mm intervals — is the technique that produces the dramatic curling during blanching (the scored surface contracts faster than the inner flesh, causing the tube to roll outward into a flower-like shape) and that also allows the dressing to enter the flesh through the score channels rather than only coating the exterior. The dressing for gỏi mực tươi is the standard Vietnamese gỏi formula — lime juice, fish sauce, sugar, garlic, and chili — calibrated for squid specifically: slightly more lime than for meat salads (the citrus brightens the marine character of the squid), slightly less fish sauce (the squid's own ocean flavor provides the savory baseline), and the same generous heat from bird's eye chili that makes the Vietnamese gỏi format specifically addictive.`,
    ingredientSections: [
        {
            title: 'Squid',
            items: [
                { amount: 500, unit: 'g', name: 'fresh squid (mực tươi)', note: 'body tubes scored in a crosshatch pattern at 5mm intervals, then cut into 4cm pieces. Tentacles left in small clusters.' },
                { amount: 2, unit: 'L', name: 'water', note: 'for blanching — must be at a rolling vigorous boil before squid is added' },
                { amount: 1, unit: 'tbsp', name: 'salt', note: 'added to the blanching water' },
            ],
        },
        {
            title: 'Salad components',
            items: [
                { amount: 150, unit: 'g', name: 'green unripe mango (xoài xanh)', note: 'finely julienned — the sourness that frames the entire salad' },
                { amount: 3, name: 'shallots', note: 'thinly sliced, soaked in ice water 10 minutes to remove sharpness, drained' },
                { amount: 2, name: 'fresh red chilies', note: 'thinly sliced' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
            ],
        },
        {
            title: 'Fresh herbs — generous Vietnamese quantities',
            items: [
                { amount: 1, name: 'large bunch Vietnamese coriander (rau răm)', note: 'leaves only — the defining herb for seafood salads' },
                { amount: 0.5, name: 'bunch mint', note: 'leaves only' },
                { amount: 0.5, name: 'bunch perilla (tía tô)', note: 'leaves torn — optional but traditional in central Vietnamese gỏi mực' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Dressing',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice', note: 'slightly more than standard gỏi — squid benefits from extra acidity' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'rice crackers or prawn crackers', note: 'for scooping the salad' },
                { amount: 2, name: 'extra limes' },
                { amount: 1, name: 'fresh red chili, extra sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Score and prepare the squid',
            description: 'Hold the squid body tube flat on the cutting board. Using a sharp knife, score in a crosshatch pattern — cuts 5mm apart at 45-degree angles to each other, through the outer skin and into the flesh but not through the tube. The scoring produces the dramatic flower-curling during blanching that is the visual signature of gỏi mực tươi. Cut the scored tube into 4cm pieces. Leave tentacle clusters whole.',
            tip: 'The crosshatch scoring at 45-degree angles produces a more dramatic curl than scoring at 90 degrees — the diagonal cuts allow the squid to roll outward into a fuller, more open flower shape. At 90 degrees, the squid curls into simple rings. The diagonal scoring produces the more visually interesting result that makes gỏi mực tươi look specifically beautiful on the plate.',
        },
        {
            title: 'Make the dressing — before blanching',
            description: 'Combine lime juice, fish sauce, sugar, minced garlic, minced chili, and sesame oil. Stir until sugar dissolves completely. Taste: it should be clearly sour, clearly savory, sweet enough to balance both, and have noticeable chili heat. Set aside. Making the dressing before the blanching step ensures everything is ready for the immediate warm-tossing that makes gỏi mực tươi absorb the dressing into the warm flesh rather than sitting on the cooled surface.',
            tip: 'The dressing for gỏi mực tươi should taste slightly more assertive than the finished salad will — the tossing with the other components, the absorption into the warm squid, and the moisture from the green mango will all dilute it slightly. Dress assertively.',
        },
        {
            title: 'Blanch the squid — exactly 30 seconds',
            description: 'Bring 2 litres of water to a vigorous, rolling boil. Add salt. Have a slotted spoon and a large bowl ready. Add all the squid at once. Set a timer for 30 seconds. Watch the squid — within 10 seconds it will begin to curl dramatically and turn white. At 30 seconds, remove all the squid immediately with the slotted spoon. Do not wait for the last few pieces. At 30 seconds in a rolling boil, the squid is cooked.',
            tip: 'The 30-second blanch in vigorously boiling water is the most precise timing in the entire squid collection — shorter than any other squid preparation because the squid is thin-cut and the water is at maximum temperature. At 20 seconds some pieces may still be slightly translucent; at 30 seconds they are done. At 45 seconds they are beginning to toughen. The timer is the technique.',
        },
        {
            title: 'Toss while warm — immediately',
            description: 'Transfer the blanched squid to a large bowl immediately. Pour half the dressing over the warm squid and toss. The warm squid will absorb the dressing into the scored channels and the flesh itself — this warm-dressing absorption is the technique that produces a salad where the squid tastes of the dressing from within rather than simply tasting of dressed squid surface. Allow to cool for 3 minutes while tossing occasionally.',
            tip: 'The warm-dressing technique for gỏi mực tươi — dressing the squid while still warm from the blanch — is the element that most distinguishes this preparation from simply dressing cooled cooked squid. Warm squid absorbs the lime-fish sauce-sugar through the scored channels by capillary action. Cooled squid does not absorb — it is coated.',
        },
        {
            title: 'Add salad components and toss gently',
            description: 'Add the green mango julienne, soaked shallots, sliced red chili, rau răm leaves, mint, perilla, and spring onion to the dressed squid. Add the remaining dressing. Toss gently — the squid pieces should be distributed throughout the salad without breaking apart. Taste and adjust: more lime for brightness, more fish sauce for savory, more sugar for balance. Transfer to a serving plate.',
            tip: 'The green mango in gỏi mực tươi serves the same function as in every Vietnamese coastal salad — its sharp sourness cuts through the richness of the squid and the dressing, and its crunch provides the textural contrast that the tender blanched squid needs. The mango is not optional even if it must be substituted — use green papaya, sour star fruit, or very tart apple rather than omitting the sour-crunch element entirely.',
        },
        {
            title: 'Finish and serve',
            description: 'Scatter crushed peanuts, crispy shallots, and toasted sesame over the salad at the last moment — added earlier, they absorb moisture and lose their crunch. The finished gỏi mực tươi: the curled, scored squid pieces visible throughout, the green mango julienne woven between, the herbs prominent, the golden peanuts and shallots scattered over. Serve with rice crackers or prawn crackers for scooping. Eat within 15 minutes — the green mango continues to release moisture and the salad loses its textural contrasts after this.',
            tip: 'Gỏi mực tươi at peak quality — the squid just warm, the dressing just absorbed, the peanuts and shallots just scattered, the herbs still fresh — is one of the most complete Vietnamese salad experiences in the collection. At 15 minutes, the mango has softened slightly and the peanuts have softened. At 30 minutes, it is still good but the specific textural complexity that makes it exceptional has begun to fade.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
