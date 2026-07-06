'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'suon-nuong',
    title: 'Sườn Nướng (Vietnamese Grilled Pork Ribs)',
    subtitle: 'Pork ribs marinated overnight in lemongrass, fish sauce, and five-spice, then grilled over charcoal until caramelized and charred at the bone ends — the Vietnamese rib that has nothing in common with American BBQ and needs nothing from it.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/suon-nuong.jpg',
    intro: `Sườn nướng — Vietnamese grilled ribs — is the preparation that demonstrates most clearly how the Vietnamese approach to pork differs from every Western barbecue tradition. There is no rub, no smoke, no slow cook, no sauce applied during grilling. The entire flavor comes from the overnight marinade: lemongrass, fish sauce, garlic, shallots, sugar, and five-spice — a combination that penetrates the meat during the long marination and caramelizes on the surface during the fast, hot grill. The ribs are grilled at high heat, not low-and-slow — Vietnamese grilling is about caramelization and char, not smoke and collagen breakdown. The result is ribs that are tender from the marinade rather than from hours of slow cooking, with a surface that is sticky, deeply caramelized, and slightly charred at the bone ends. Sườn nướng is eaten with broken rice (cơm tấm), vermicelli (bún), or simply with steamed jasmine rice, a cucumber salad, and a bowl of nước chấm. It is one of the defining dishes of Vietnamese street food and Vietnamese home cooking simultaneously.`,
    ingredientSections: [
        {
            title: 'Ribs and marinade',
            items: [
                { amount: 1.2, unit: 'kg', name: 'pork spare ribs or baby back ribs', note: 'cut into individual ribs by the butcher, or leave as a rack. Baby back ribs are leaner and cook faster; spare ribs are fattier and more flavorful.' },
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk only, finely minced to a paste' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'honey', note: 'adds gloss and helps caramelization' },
                { amount: 1, unit: 'tsp', name: 'five-spice powder (ngũ vị hương)' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives the characteristic golden color' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 1, name: 'cucumber, sliced into batons' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'fresh red chili, sliced' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice or broken rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate overnight — not optional',
            description: 'Combine all marinade ingredients into a smooth paste: minced lemongrass, garlic, shallots, fish sauce, oyster sauce, sugar, honey, five-spice, sesame oil, turmeric, black pepper, and oil. Mix until the sugar dissolves. Score each rib 2-3 times on the meaty side — shallow cuts that allow the marinade to penetrate deeper. Coat every rib completely, pressing the paste into the scored cuts. Cover and refrigerate for minimum 8 hours — overnight is better, 24 hours is ideal. The lemongrass and five-spice need time to penetrate the thick pork muscle.',
            tip: 'The overnight marination is not an optional step. Ribs marinated for less than 4 hours taste of marinade on the surface only. 12-24 hours produces flavor throughout the meat. Plan accordingly.',
        },
        {
            title: 'Bring to room temperature',
            description: 'Remove the ribs from the refrigerator 30 minutes before grilling. Cold ribs on a hot grill produce a charred outside with a cold center — the exterior burns before the interior cooks. Room temperature ribs cook more evenly.',
            tip: 'Pat the ribs lightly with paper towels to remove excess marinade before grilling — too much marinade on the surface drips into the coals and causes flare-ups that produce acrid smoke rather than clean char.',
        },
        {
            title: 'Grill over high heat — charcoal preferred',
            description: 'Heat charcoal grill to high heat. Place ribs bone-side down first — the bone protects the meat from direct heat. Grill 6-8 minutes until the bone side has good color. Flip to meaty side. Grill another 8-10 minutes, basting with any remaining marinade twice during this side. The ribs are done when the meaty surface is deeply caramelized with slight char at the bone ends, the edges are starting to pull back from the bone, and the internal temperature is 70-75°C.',
            tip: 'Move the ribs to a cooler part of the grill if they are charring too fast before the center is cooked — Vietnamese ribs should be caramelized, not burnt. If using a griddle pan: maximum heat, same timing, no basting (the pan captures drips and causes steaming rather than grilling).',
        },
        {
            title: 'Oven method (no grill)',
            description: 'Preheat oven to 200°C (fan). Place ribs on a wire rack set over a foil-lined baking tray. Roast for 30 minutes. Flip, brush with remaining marinade. Roast another 20-25 minutes until caramelized and beginning to char at the edges. For the last 5 minutes, switch to broil/grill function on highest setting to develop the final char.',
            tip: 'The wire rack above the baking tray is essential for oven cooking — it allows heat circulation around the entire rib and prevents steaming in pooled marinade.',
        },
        {
            title: 'Rest and serve',
            description: 'Rest the grilled ribs for 5 minutes before serving — the juices redistribute and the caramelized glaze sets slightly. Arrange on a plate. Scatter spring onion and sliced chili. Serve immediately with cucumber batons, lime wedges, and steamed rice. The correct accompaniments for sườn nướng: broken rice absorbs the juices perfectly; nước chấm to dip the cucumber; cold beer if available.',
            tip: 'The char on the bone ends is not burnt — it is the concentrated caramelized marinade and is the best part. Vietnamese diners specifically gnaw the bone ends for this reason.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
