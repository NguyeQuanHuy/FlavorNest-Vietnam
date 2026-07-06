'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-nuc-hap-cuon-banh-trang',
    title: 'Cá Nục Hấp Cuốn Bánh Tráng Phú Yên (Steamed Mackerel Scad Wrapped in Rice Paper)',
    subtitle: 'Whole mackerel scad steamed over lemongrass until the flesh is silky and slightly sweet, eaten by pulling pieces from the bone at the table and wrapping in sesame rice crackers with rau răm, green mango, and cucumber — dipped in mắm nhĩ ginger sauce. The most sociable fish preparation in Phú Yên.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-nuc-hap-cuon-banh-trang.jpg',
    intro: `Cá nục hấp cuốn bánh tráng is the communal fish preparation that appears at almost every Phú Yên family meal, weekend gathering, and seafood restaurant along the coast — a dish whose social character is as defining as its flavor. Cá nục (mackerel scad, Decapterus spp.) are the abundant, affordable, deeply flavored fish of the central Vietnamese coast, caught in large quantities year-round and eaten in more preparations than perhaps any other single species in the province. The hấp (steaming) preparation preserves the fish's natural sweetness and produces a flesh that separates from the bone cleanly — important because the eating method requires the flesh to be pulled from the bone at the table by each diner, not pre-portioned in the kitchen. The cuốn bánh tráng (rice paper wrapping) element transforms a simple steamed fish into an interactive meal: the central plate holds the whole steamed fish, the table surrounds it with herbs, green mango, cucumber, and the sesame crackers from Tuy An, and each diner constructs their own wrap from the components available, dipping the assembled roll in the mắm nhĩ ginger sauce that completes everything. The specific character of the Phú Yên version comes from three elements: the sesame crackers (bánh tráng mè Tuy An) rather than plain rice paper for wrapping — the sesame adds a toasty dimension that rice paper alone lacks; the green mango included alongside the standard herbs — the sourness provides the contrast that the sweet steamed fish needs; and the mắm nhĩ dipping sauce that by this point in the Phú Yên series needs no further introduction. Together these three elements produce a version of steamed fish wrapping that is specifically identifiable as Phú Yên even if encountered outside the province.`,
    ingredientSections: [
        {
            title: 'Fish',
            items: [
                { amount: 4, name: 'whole fresh cá nục (mackerel scad), 200-250g each', note: 'cleaned, scaled, gills removed. Slash the thickest part of each fish 2-3 times on each side — allows steam to penetrate to the bone and makes the flesh separate more cleanly.' },
            ],
        },
        {
            title: 'Lemongrass steaming bath',
            items: [
                { amount: 330, unit: 'ml', name: 'Vietnamese beer or water' },
                { amount: 200, unit: 'ml', name: 'water' },
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and cut' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: '2 slices, smashed' },
                { amount: 4, name: 'kaffir lime leaves', note: 'torn' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Mắm nhĩ ginger dipping sauce',
            items: [
                { amount: 4, unit: 'tbsp', name: 'mắm nhĩ (Phú Yên first-press fish sauce)' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'microplane-grated to paste' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'warm water' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
            ],
        },
        {
            title: 'Wrapping table — the communal spread',
            items: [
                { amount: 20, name: 'bánh tráng mè Tuy An (sesame rice crackers)', note: 'the Phú Yên-specific wrapping medium — toasty sesame character adds what plain rice paper cannot' },
                { amount: 150, unit: 'g', name: 'green unripe mango (xoài xanh)', note: 'finely julienned — the Phú Yên sourness element' },
                { amount: 1, name: 'cucumber', note: 'julienned into batons' },
                { amount: 1, name: 'large bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'optional — for the committed Phú Yên experience' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed — scattered over each assembled wrap' },
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 2, name: 'extra limes' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare and slash the fish',
            description: 'Scale and clean each cá nục. Make 2-3 diagonal slashes on each side of each fish — cutting through the skin and into the flesh to the bone. These slashes serve two purposes: they allow the lemongrass-ginger steam to penetrate to the bone during steaming, and they allow the flesh to separate more cleanly from the bone when pulled at the table. Rinse and pat dry.',
            tip: 'The diagonal slashing of cá nục is the specific preparation that distinguishes hấp cuốn bánh tráng from simply steaming the fish. The slashes must reach the bone — not deep enough to separate the fillets, but deep enough that the steam enters and the flesh pulls cleanly. Test: insert a chopstick into a slash — it should reach the bone.',
        },
        {
            title: 'Steam for exactly 10-12 minutes',
            description: 'Build the lemongrass steaming bath to a vigorous boil. Arrange the whole fish on the steaming rack — they can overlap slightly if necessary, as long as the steam can circulate. Cover tightly. Steam over maximum heat for 10-12 minutes. Cá nục are done when: the flesh in the deepest slash has turned from translucent grey-white to opaque white; the eye has turned white and slightly protruding; the flesh pulls from the bone with light pressure from chopsticks.',
            tip: 'The eye is the most reliable doneness indicator for whole steamed fish — it turns white and slightly pushes out from the socket when the fish is cooked through. Check the eye at 10 minutes. If still clear or grey, steam 2 more minutes.',
        },
        {
            title: 'Make the mắm nhĩ ginger sauce',
            description: 'Grate the fresh ginger to near-liquid consistency. Combine with mắm nhĩ, lime juice, sugar, warm water, and minced chili. The sauce for cá nục cuốn should be slightly thinner than the version used for crustaceans — the fish is more delicate and the sauce should coat without overwhelming. Divide into individual small bowls, one per diner.',
            tip: 'Individual dipping bowls for cá nục cuốn bánh tráng are important because each diner wraps and dips at their own pace throughout the meal. A shared bowl becomes quickly diluted from the repeated dipping of wet fish and cracker combinations.',
        },
        {
            title: 'Set the wrapping table',
            description: 'Arrange all wrapping components around the central plate before the fish comes off the steamer. The layout: sesame crackers in a basket or flat plate within reach of every diner; green mango, cucumber, and herbs in separate small plates or arranged on a large platter; peanuts in a small bowl; limes and chilies alongside. The dipping sauce at each place. The physical arrangement of the components around the fish is as important as the components themselves — everyone should be able to reach everything without asking.',
            tip: 'The communal table arrangement for cá nục hấp cuốn bánh tráng is part of the dish\'s identity — it requires the physical proximity of multiple people reaching across each other, sharing components, commenting on each other\'s wraps. A Phú Yên family does not eat this dish in silence or separately.',
        },
        {
            title: 'Bring the fish to the table whole',
            description: 'Transfer the steamed fish to a large plate and bring directly to the table. Scatter the shallot oil and sliced spring onion over the surface. Place the shredded kaffir lime leaves alongside. The correct service is the whole fish at the center — not pre-portioned, not filleted. Each diner pulls their own piece from the fish with chopsticks, using the pre-made slashes as guides for separation.',
            tip: 'The whole fish served at the center is both practical and social. It is practical because warm fish pulled directly from the bone and immediately wrapped tastes better than pre-portioned fish that has cooled while being assembled. It is social because the shared central fish requires interaction — someone holds the fish while another pulls a piece, conversation happens around the act of eating.',
        },
        {
            title: 'Assemble and eat — the Phú Yên way',
            description: 'Pull a piece of fish from the bone — use the pre-cut slashes as separation guides. Place on a sesame cracker. Add green mango, cucumber, rau răm, mint, and perilla. Scatter a few crushed peanuts. Roll loosely — the cracker is firm enough to hold the assembly without collapsing. Dip the assembled roll edge-first into the mắm nhĩ ginger sauce. Eat in one or two bites. Add a raw lá é leaf between rolls if available. Repeat until the fish is gone. Use a cracker to mop the fish plate for any remaining fish juices.',
            tip: 'The green mango in the cá nục cuốn wrap is the component that most clearly marks this as Phú Yên rather than generic Vietnamese fish wrapping. The assertive sourness of unripe green mango against the sweet steamed fish is a contrast specific to this province\'s approach. Without it the wrap is pleasant; with it the wrap is complete.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
