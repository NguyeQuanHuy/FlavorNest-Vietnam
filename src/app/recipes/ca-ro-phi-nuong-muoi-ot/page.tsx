'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-ro-phi-nuong-muoi-ot',
    title: 'Cá Rô Phi Nướng Muối Ớt (Charcoal-Grilled Tilapia with Chili Salt)',
    subtitle: 'Whole tilapia coated in a lemongrass-chili-salt paste and grilled slowly over hardwood charcoal until the skin chars and crisps and the paste caramelizes into the flesh — served with mắm nêm or nước mắm gừng and the full Vietnamese herb plate. The charcoal preparation that reveals what tilapia tastes like when fire does the work.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-ro-phi-nuong-muoi-ot.jpg',
    intro: `Cá rô phi nướng muối ớt is the charcoal-grilled tilapia of Vietnamese outdoor cooking — a preparation that applies the muối ớt paste and the hardwood charcoal technique to tilapia, producing a result that is specifically different from the fried version of the same fish and that reveals qualities of the tilapia that frying at 180°C does not. Where deep-frying produces a crispy, golden-sealed exterior and a steamed-from-within interior, charcoal grilling produces a fish where the exterior is directly charred and smoked, the flesh beneath absorbs the hardwood smoke rather than being sealed from it, and the lemongrass-chili paste caramelizes gradually in three stages over the 20-25 minute grilling period — drying first, then caramelizing as the surface temperature increases, then charring slightly at the edges in a way that no frying oil can replicate. Tilapia is particularly well-suited to charcoal grilling because its lean, firm flesh holds together on the grill without breaking apart (the common failure mode for more delicate fish), its mild flavor allows the specific flavor character of the charcoal smoke to be clearly perceptible in the finished fish, and its relatively thin profile means the heat penetrates to the bone in the same time it takes the exterior to develop the char that makes the preparation visually impressive. The specific herb pairings for grilled tilapia — rau răm, Vietnamese balm, mint, and perilla alongside rather than only one herb — reflect the mildness of the fish and the complexity of the charcoal-lemongrass character, both of which are enhanced by the presence of multiple herb dimensions rather than a single dominant one. Mắm nêm with pineapple, or nước mắm gừng — both are appropriate dipping sauces for charcoal tilapia, the choice depending on whether the diner wants the pungent fermented character of the first or the bright, clean ginger character of the second.`,
    ingredientSections: [
        {
            title: 'Fish',
            items: [
                { amount: 2, name: 'whole tilapia (cá rô phi), 500-600g each', note: 'cleaned, scaled. Score each side 4 times diagonally to the bone — allows paste penetration and even heat distribution. The larger size for grilling vs frying: the charcoal heat is less intense than frying oil so a larger fish is appropriate.' },
            ],
        },
        {
            title: 'Muối ớt sả paste',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, minced to paste' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'minced' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Dipping sauce — choose one or serve both',
            items: [
                { amount: 3, unit: 'tbsp', name: 'mắm nêm (fermented anchovy paste)', note: 'thinned with 2 tbsp pineapple juice + 1 tsp sugar + 1 tbsp water + minced garlic and chili' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce', note: 'for nước mắm gừng alternative' },
                { amount: 2, unit: 'tbsp', name: 'lime juice', note: 'for nước mắm gừng' },
                { amount: 25, unit: 'g', name: 'fresh ginger', note: 'microplane-grated — for nước mắm gừng' },
                { amount: 1, unit: 'tsp', name: 'sugar', note: 'for nước mắm gừng' },
                { amount: 3, unit: 'tbsp', name: 'water', note: 'for nước mắm gừng' },
            ],
        },
        {
            title: 'Full herb plate',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch Vietnamese balm (rau kinh giới)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 1, name: 'cucumber', note: 'sliced into batons' },
                { amount: 16, name: 'rice paper sheets (bánh tráng)', note: 'for rolling' },
                { amount: 2, name: 'extra limes' },
                { amount: 2, name: 'fresh red chilies, sliced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Score, apply paste and marinate',
            description: 'Score each tilapia 4 times on each side to the bone. Combine all paste ingredients until uniform. Apply firmly into each score, over every surface, inside the body cavity, and around the head. Marinate minimum 1 hour at room temperature — the lemongrass paste needs this time to begin softening the flesh proteins at the score lines and driving the aromatic oils inward. For the best result: marinate overnight refrigerated.',
            tip: 'The 1-hour minimum marination for cá rô phi nướng is longer than the 20 minutes needed for frying the same fish because the lower heat of charcoal grilling means the paste does more of the flavoring work. In deep-frying, the oil seals the paste character into the surface instantly; in charcoal grilling, the paste caramelizes gradually over 20-25 minutes and the initial marination penetration is what produces flavor throughout the flesh.',
        },
        {
            title: 'Build a moderate charcoal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over. The fire for tilapia should be medium — not the high heat used for fatty catfish or the very moderate heat needed for pigeon. Tilapia is lean and cooks through more quickly than fatty fish, so the fire can be slightly more direct. Hold your hand 15cm above the grill — 4-5 seconds before the heat is too intense is the correct temperature. No need for a two-zone fire — tilapia does not produce the aggressive flare-ups of catfish.',
            tip: 'The single-zone moderate fire for tilapia is the difference from the two-zone fire required for catfish. Tilapia\'s lean composition means minimal fat drips onto the coals, producing only occasional small flare-ups that can be managed by briefly moving the fish rather than requiring a permanent indirect zone.',
        },
        {
            title: 'Grill on both sides — 10-12 minutes per side',
            description: 'Place the tilapia on the grill grate. Grill without moving for 10-12 minutes — the paste needs sustained contact with the heat to caramelize and adhere rather than transferring to the grill grate. At 10-12 minutes the skin and paste should be charred in patches with the lemongrass paste caramelized throughout. Carefully flip using two spatulas. Grill the second side 10-12 minutes. Total: 20-25 minutes. The fish is done when the flesh near the head is white throughout when checked with a chopstick.',
            tip: 'The "do not move for 10-12 minutes" instruction for grilled tilapia is the technique that produces both the caramelized paste crust and the separation from the grill grate that makes flipping possible without the skin tearing. Fish moved before the paste has properly caramelized and the skin has set will tear on the grill and fall apart during the flip.',
        },
        {
            title: 'Make the dipping sauces',
            description: 'For mắm nêm: combine with pineapple juice, sugar, water, and minced garlic and chili. For nước mắm gừng: combine fish sauce, lime juice, grated ginger, sugar, and water. Both sauces suit charcoal tilapia — serve one or both. The mắm nêm provides pungent contrast to the mild, smoky fish; the nước mắm gừng provides clean brightness. At a family dinner, serving both allows each diner to choose.',
            tip: 'Serving both dipping sauces is the practical approach for a family dinner with charcoal tilapia because preferences diverge sharply between mắm nêm (strongly flavored, acquired-taste) and nước mắm gừng (clean, universally accessible). Making both takes 5 minutes and produces a table where no one is excluded from the meal by condiment preference.',
        },
        {
            title: 'Serve at the table with full herb plate',
            description: 'Transfer the grilled tilapia to a serving plate. The skin should show a combination of char and caramelized paste — golden-brown with darker charred patches, the lemongrass paste visible as a caramelized crust. Place the full herb plate alongside with cucumber, rice paper, and dipping sauces. Two eating styles: RICE STYLE — pull flesh from the bone with chopsticks, dip in sauce, eat with herbs and rice. WRAP STYLE — pull flesh and place in rice paper with herbs and cucumber, roll, dip in sauce.',
            tip: 'The wrap style with rice paper for charcoal tilapia is the eating method that produces the most complete experience — the smoky, charcoal-paste-caramelized fish, the fresh herbs, the cucumber, and the slight chew of the rice paper together in one roll. The dipping sauce penetrates the roll from the end when bitten and distributes through all the components simultaneously.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
