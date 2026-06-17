'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-ro-phi-chien-gion',
    title: 'Cá Rô Phi Chiên Giòn (Crispy Fried Tilapia)',
    subtitle: 'Whole tilapia scored to the bone, turmeric-marinated, and deep-fried at 180°C until the skin shatters and the bones from the tail to the fin rays become edible — served whole with garlic-chili fish sauce and a full plate of herbs. The everyday Vietnamese fried fish where correct technique produces a result that is anything but everyday.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-ro-phi-chien-gion.jpg',
    intro: `Cá rô phi chiên giòn is the crispy fried tilapia that appears on Vietnamese family dinner tables so frequently that it risks being taken for granted — an everyday fish preparation that, when executed with the correct technique, produces a result that is considerably more than its apparent simplicity suggests. Cá rô phi (Oreochromis niloticus, Nile tilapia) was introduced to Vietnam in the 1950s and has become one of the most widely farmed and most widely eaten freshwater fish in the country, prized for its mild, slightly sweet white flesh, its relative affordability, and its specific suitability to frying — the tilapia's firm flesh holds together during deep-frying without breaking apart, and its lean composition means the skin can crisp completely without the extended rendering time that fatty fish like catfish require. The technique for cá rô phi chiên giòn is the same as for cá trê chiên sả ớt in its essential structure — deep scoring to the bone, turmeric marinade, high-temperature frying — but the tilapia's different fat content and flesh density produce a different result from the same technique: a crisper, more delicate skin and a lighter-tasting flesh that is more versatile in its herb and sauce pairings. The garlic-chili fish sauce (nước mắm tỏi ớt) served alongside is the dipping sauce that is most specifically associated with fried white fish throughout Vietnam — its sweet-sour-salty-spicy balance providing the sharp aromatic contrast that the mild, clean-tasting tilapia needs to be complete. Eaten whole at the table, with each diner pulling flesh from the bone with chopsticks and dipping each piece in the sauce before eating it with rice and herbs, cá rô phi chiên giòn is the Vietnamese family dinner at its most archetypal.`,
    ingredientSections: [
        {
            title: 'Fish',
            items: [
                { amount: 2, name: 'whole tilapia (cá rô phi), 400-500g each', note: 'cleaned, scaled, scored 4-5 times deeply on each side to the central bone. Pat completely dry after scoring.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for pre-marinating' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 700, unit: 'ml', name: 'neutral oil', note: 'for deep frying' },
            ],
        },
        {
            title: 'Nước mắm tỏi ớt (garlic-chili fish sauce)',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 5, unit: 'tbsp', name: 'water' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 1, name: 'fresh red chili', note: 'thinly sliced — for color' },
            ],
        },
        {
            title: 'Fried garlic and shallot topping',
            items: [
                { amount: 4, name: 'garlic cloves', note: 'thinly sliced — fried until golden' },
                { amount: 3, name: 'shallots', note: 'thinly sliced — fried until golden' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'for frying the topping' },
                { amount: 3, name: 'spring onions', note: 'sliced — scattered over the fish after frying' },
            ],
        },
        {
            title: 'Fresh herb plate',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 1, name: 'cucumber, sliced' },
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
            title: 'Score, marinate and dry',
            description: 'Score each tilapia 4-5 times on each side, cutting deeply to the central bone — the score lines should be clearly visible through the skin and flesh to the bone. Combine fish sauce, turmeric, pepper, and sugar. Rub firmly into every score, over every surface, and inside the body cavity. Marinate 20 minutes. Pat completely dry with paper towels — press firmly into each score line to remove moisture. The dry surface is essential for crackling skin.',
            tip: 'Tilapia scores more cleanly than catfish because its flesh is firmer and less fatty. The clean score lines in tilapia allow the oil to penetrate directly to the bone during frying in a way that is more precise than in fattier fish. Each score should be made with a single decisive cut rather than a sawing motion.',
        },
        {
            title: 'Deep-fry at 180°C — 10-12 minutes',
            description: 'Heat oil to 180°C in a wok or deep pot. Carefully lower the tilapia into the oil tail-first — hold by the head end and lower slowly to avoid splash. Fry without moving for 5-6 minutes until the bottom side is deeply golden and the skin has crisped. Carefully flip using two spatulas or a fish-turning tool. Fry the second side 5-6 minutes. Total: 10-12 minutes. The tilapia is done when the thickest flesh near the head is white throughout and the fin rays snap when pressed.',
            tip: 'Tilapia fries faster than catfish at the same temperature because of its lower fat content — 10-12 minutes versus 12-15 minutes for catfish. The leaner flesh also crisps more quickly and more completely. Watch from the 8-minute mark — tilapia at 180°C can go from perfectly golden to over-brown in about 90 seconds.',
        },
        {
            title: 'Make the nước mắm tỏi ớt',
            description: 'Combine fish sauce, lime juice, sugar, and water. Stir until the sugar dissolves completely. Add minced garlic, minced bird\'s eye chili, and sliced red chili. The sauce should arrive in sequence: sweet first, then the fish sauce depth, then the lime brightness, then the chili heat building. This is the dipping sauce that the whole of Vietnam uses for plain fried white fish and that most clearly demonstrates what nước chấm is at its most functional — a sauce that makes a simple ingredient taste complete.',
            tip: 'The sugar-to-lime balance in nước mắm tỏi ớt for fried white fish is slightly sweeter than the standard nước chấm — the mildness of tilapia benefits from the additional sweetness that rounds the sauce\'s edges. The same sauce applied to fatty pork would taste cloying; applied to mild fried tilapia it tastes exactly right.',
        },
        {
            title: 'Make the fried garlic-shallot topping',
            description: 'While the fish drains, heat 3 tablespoons of oil in a small pan. Add sliced garlic and shallots. Fry over medium heat until golden and beginning to crisp — 3-4 minutes. Remove with a slotted spoon and drain. The oil used for frying the garlic and shallots is now flavored — this is the oil drizzled over the fish before serving.',
            tip: 'The fried garlic and shallot topping is the element that elevates cá rô phi chiên giòn from plain fried fish to the specific Vietnamese preparation. The golden, slightly crispy garlic and shallot pieces provide both texture and flavor against the crispy fish skin, and the garlic-shallot oil drizzled underneath carries the fragrance of the frying directly to the fish surface.',
        },
        {
            title: 'Plate and serve whole',
            description: 'Place the fried tilapia on a serving plate. Drizzle the warm garlic-shallot oil over the surface. Scatter the fried garlic and shallot pieces and sliced spring onion over the fish. Serve the nước mắm tỏi ớt in individual dipping bowls. The full herb plate alongside with cucumber, mint, rau răm, perilla, and lime. Steamed rice in individual bowls. To eat: use chopsticks to pull pieces of flesh from the bone — starting from the scored sections where the flesh separates most cleanly — dip in the nước mắm tỏi ớt, eat with a leaf of herb and a mouthful of rice.',
            tip: 'The scored sections of the fried tilapia are the entry points for chopstick work at the table — the scores that allow oil penetration during frying become the natural separation lines for eating. Working along each score with chopsticks, the flesh lifts cleanly from the bone in pieces that are already the right size for dipping and eating. This is why the scoring technique is as important for eating as it is for frying.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
