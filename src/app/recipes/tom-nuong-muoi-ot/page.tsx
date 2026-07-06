'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tom-nuong-muoi-ot',
    title: 'Tôm Nướng Muối Ớt (Charcoal-Grilled Shrimp with Chili Salt)',
    subtitle: 'Large whole shrimp coated in a paste of salt, chili, lemongrass, and garlic then grilled over charcoal until the shells char and the seasoning caramelizes into the shrimp — served with muối tiêu chanh and cold beer at the end of the day.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/tom-nuong-muoi-ot.jpg',
    intro: `Tôm nướng muối ớt is the grilled shrimp of Vietnamese coastal cooking — the preparation that beach restaurants from Sầm Sơn to Phú Quốc serve on every terrace with a view of the water, and that beachside food vendors grill over portable charcoal fires at the edge of the sand. The technique is simple in principle and demanding in detail: the shrimp are coated in a dry-wet paste of salt, fresh chili, minced lemongrass, garlic, and a small amount of oil — just enough to carry the aromatics and help the paste adhere to the shells — then placed over hot charcoal and grilled without moving until the shells char on the bottom, the paste caramelizes, and the shrimp are turned once for the final 2-3 minutes. The char on the shell is not burning — it is the concentrated caramelization of the salt and chili paste that has been pushed into the shell surface by the direct heat of the charcoal. The shrimp flesh inside steams slightly in its own moisture, protected by the charring shell, and remains remarkably juicy despite the high heat. Tôm nướng muối ớt is eaten with the shells on, peeled at the table by each diner, with the charred seasoning on the shell providing the seasoning for the flesh underneath. The muối tiêu chanh — salt, pepper, lime — served alongside is dipped into after peeling. The combination of the char, the fresh lime, and the coarse salt is the definitive coastal Vietnamese shrimp experience. The charcoal is not optional — this is a dish that gas and oven cooking approximate but cannot replicate.`,
    ingredientSections: [
        {
            title: 'Shrimp',
            items: [
                { amount: 800, unit: 'g', name: 'large fresh shrimp, whole (tôm tươi cỡ lớn)', note: 'heads on, shells on. Large is better than medium for grilling — they withstand the charcoal heat better and have more flesh to justify the preparation. 15-20 count per 500g.' },
            ],
        },
        {
            title: 'Muối ớt coating paste',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced — adjust for heat preference' },
                { amount: 2, name: 'fresh red chilies', note: 'minced — larger, milder, for volume' },
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, finely minced to a paste' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'sugar', note: 'helps caramelization' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives color and the characteristic golden-orange tint' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'carries the paste onto the shell and prevents burning' },
            ],
        },
        {
            title: 'Muối tiêu chanh dipping salt',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'flaky sea salt' },
                { amount: 1.5, unit: 'tsp', name: 'freshly ground black pepper', note: 'coarse grind' },
                { amount: 3, name: 'limes', note: 'squeezed fresh at the table — one per 2-3 diners' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'optional' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch rau răm (Vietnamese coriander)', note: 'eaten between shrimp' },
                { amount: 2, name: 'extra limes' },
                { amount: 2, name: 'fresh red chilies, extra sliced' },
                { amount: 3, name: 'spring onions, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the muối ớt paste and coat the shrimp',
            description: 'Combine salt, minced bird\'s eye chili, minced red chili, lemongrass paste, garlic, sugar, turmeric, and oil. Work into a thick, fragrant paste. Rinse the shrimp and pat completely dry. Coat each shrimp generously with the muối ớt paste — press it onto every surface including the underside and the head. The paste should be thick enough to cling to the shell without running. Leave for 15 minutes while the charcoal heats.',
            tip: 'Pat the shrimp very dry before coating — wet shells prevent the paste from adhering. The paste must stick to the shell, not slide off. If the paste is too liquid, add a pinch more salt to thicken it.',
        },
        {
            title: 'Build the charcoal fire correctly',
            description: 'Light hardwood charcoal and wait until every piece is covered in white ash — 25-30 minutes. A proper charcoal fire for tôm nướng should be medium-hot: hot enough to char the shells in 3-4 minutes per side, not so hot that the paste burns before the shrimp cook through. Hold your hand 15cm above the grill — you should be able to hold it there for 3-4 seconds before the heat is too intense. This is the correct temperature.',
            tip: 'Charcoal that is still partially black (not fully ashed over) burns with uneven hot spots that char some shrimp while leaving others pale. Wait for the full ash-over before starting. The 25-30 minute wait is the cooking prep for tôm nướng muối ớt.',
        },
        {
            title: 'Grill without moving — the first side',
            description: 'Place the coated shrimp on the grill in a single layer — do not crowd or the temperature drops and steaming occurs rather than grilling. Place belly-side down first. Do not move for 3-4 minutes. The paste will sizzle and the edges of the shells will begin to char. You will smell the lemongrass caramelizing in the first minute — this is the signal that the heat is correct. The shrimp are ready to flip when the shells on the bottom are deeply charred and the shrimp have turned pink throughout.',
            tip: 'Resist moving the shrimp for the full 3-4 minutes. The paste needs sustained contact with the heat to caramelize onto the shell surface. Moving too early produces pale, un-caramelized shrimp on the first side.',
        },
        {
            title: 'Flip and finish',
            description: 'Flip each shrimp carefully — use tongs to avoid disturbing the charred paste crust that has formed on the first side. Grill the second side for 2-3 minutes until the top side chars and the head turns bright orange-red. The shrimp are done when the shells are charred in patches with golden caramelized paste between the char marks, the heads are bright orange, and the flesh visible at the tail end is completely white.',
            tip: 'The second side needs less time than the first because the shrimp is already mostly cooked through from the first side. Watch carefully — the second side can go from perfect to over-charred in about 30 seconds at this temperature.',
        },
        {
            title: 'Make the muối tiêu chanh at the table',
            description: 'Prepare small individual plates with flaky sea salt and coarsely ground black pepper. Do not squeeze the lime until the moment of eating — the lime zest oil that gives the dipping salt its fragrance volatilizes within seconds of squeezing. Squeeze directly over the salt-pepper mixture at the table and stir once with a chopstick tip. The dipping salt is for the peeled shrimp flesh — not the shell.',
            tip: 'The ritual of squeezing lime over the salt at the table rather than pre-mixing is the sensory detail that makes Vietnamese salt and pepper eating specific. The citrus oil from the skin of the lime, released in the act of squeezing, adds a dimension that pre-squeezed lime juice does not provide.',
        },
        {
            title: 'Serve straight from the grill',
            description: 'Transfer the grilled shrimp directly from the grill to a plate and serve immediately. The charred shells begin to soften from the shrimp\'s own steam within minutes. To eat: pick up a shrimp, snap off the head and suck out the tomalley — the intensely flavored green-grey paste inside is the best part. Peel the body shell — the charred paste on the outside of the shell has flavored the flesh beneath. Dip the peeled flesh in the muối tiêu chanh. Eat with a leaf of rau răm. Repeat.',
            tip: 'The tomalley in the shrimp head — the green-grey substance that appears when the head is snapped off — is the most concentrated shrimp flavor in the animal. Vietnamese coastal diners eat it automatically and consider it a bonus. For first-timers: it tastes intensely of shrimp, slightly rich, and is completely safe to eat.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
