'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'hau-hap-gung-hanh',
    title: 'Hàu H?p G?ng Hành (Steamed Oysters with Ginger and Spring Onion)',
    subtitle: 'Fresh oysters steamed on the half shell over ginger and Shaoxing wine for exactly 3 minutes — finished with julienned ginger, spring onion, and smoking-hot oil poured over at the table, dressed with light soy and sesame. The Cantonese steaming technique applied to the Vietnamese oyster at its most precise and most revealing.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/hau-hap-gung-hanh.jpg',
    intro: `Hàu h?p g?ng hành is the steamed oyster preparation that brings together the Cantonese h?p g?ng hành technique — the same method used for steamed tilapia, steamed pigeon, and steamed frog in this collection — and applies it to Vietnamese fresh oysters, producing the most delicate and the most revealing preparation in the hàu repertoire. Where charcoal grilling adds smoke and the m? hành adds richness, and the butter-cheese baking adds French influence, steaming with ginger and spring onion adds nothing except what the technique itself contributes: the clean aromatic of Shaoxing wine and ginger in steam, the tableside sizzle of hot oil blooming the fresh ginger and spring onion, and the light soy-sesame dressing that provides the minimal seasoning the barely-cooked oyster needs. The result is the purest expression of a good Vietnamese oyster — the specific briny sweetness, the specific texture of a correctly steamed bivalve (firmed but not tightened, set but not rubbery), and the fragrance of the ginger-spring onion oil bloom that arrives with the sizzle at the table. The steaming time for oysters is the most precise in the entire h?p series: 3 minutes for a medium oyster at maximum steam. Less than 3 minutes produces an oyster that is cold at the center and still partially raw; more than 4 minutes produces an oyster that has tightened and lost its specific giving texture. This precision is not intimidating once the visual cues are understood: at correct steaming, the edges of the oyster have just begun to curl and turn opaque while the center is still slightly translucent but warm throughout — the same "barely set" endpoint as a correctly steamed custard or a perfectly poached egg.`,
    ingredientSections: [
        {
            title: 'Oysters',
            items: [
                { amount: 24, name: 'fresh oysters, shucked on the half shell', note: 'bottom curved shell retained, top shell discarded. Retain all oyster liquor in the shell. Arrange on a steaming plate or tray.' },
            ],
        },
        {
            title: 'Steaming aromatics',
            items: [
                { amount: 300, unit: 'ml', name: 'water' },
                { amount: 2, unit: 'tbsp', name: 'Shaoxing wine', note: 'added to the steaming water' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: '2 slices, smashed — in the steaming water' },
                { amount: 2, name: 'spring onions', note: 'bruised — in the steaming water' },
            ],
        },
        {
            title: 'Finishing oil — the defining moment',
            items: [
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'heated to smoking — 210°C' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'finely julienned — placed on the oysters before the oil' },
                { amount: 4, name: 'spring onions', note: 'green parts, finely julienned — placed with the ginger' },
                { amount: 1, name: 'fresh red chili', note: 'finely julienned — for color' },
            ],
        },
        {
            title: 'Dressing sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'light soy sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'warm water' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 2, unit: 'tbsp', name: 'crispy fried shallots', note: 'scattered over after the oil pour' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'baguette or crusty bread' },
            ],
        },
    ],
    steps: [
        {
            title: 'Shuck and arrange the oysters',
            description: 'Shuck each oyster: hold the oyster cupped-side down in a folded towel, insert an oyster knife at the hinge, twist to pop the top shell, slide the knife along the top shell to sever the adductor muscle, remove the top shell, slide the knife under the oyster to sever the bottom adductor muscle — the oyster should now sit freely in the bottom shell with all liquor retained. Arrange the shucked oysters on a heatproof plate or steaming tray. The oysters must sit level — any tipping spills the precious liquor.',
            tip: 'The bottom adductor muscle cut — the second knife slide that frees the oyster from the curved bottom shell — is the step most home cooks skip. Without this cut, the oyster is attached to the shell and cannot be sipped out after cooking. With the cut, the oyster sits freely in the shell and comes off in one smooth motion when the shell is tilted to the lips.',
        },
        {
            title: 'Steam exactly 3 minutes',
            description: 'Bring the steaming water with Shaoxing wine, ginger, and spring onion to a vigorous boil. Place the oyster plate in the steamer. Cover tightly. Set a timer for exactly 3 minutes for medium oysters (4-5cm), 3.5 minutes for larger oysters (over 6cm). Remove at the timer. The oysters at correct doneness: edges just curling and opaque, center still slightly translucent but warm, liquor in the shell visibly steaming.',
            tip: 'The 3-minute steaming time for oysters is the most precise timing in the entire h?p series — more precise than fish (10-15 minutes) or pigeon (20-22 minutes) because the window between correctly steamed and overcooked is narrower for oysters. Set an actual timer rather than estimating.',
        },
        {
            title: 'Apply dressing sauce and place aromatics',
            description: 'Remove the oysters from the steamer immediately. Drizzle the dressing sauce sparingly over each oyster — just enough to season the surface, not to drown the natural liquor in the shell. Arrange the ginger julienne, spring onion julienne, and chili strips on top of each oyster. Work quickly — the entire process from steamer to oil pour should take under 60 seconds.',
            tip: 'The dressing sauce applied before the oil pour rather than after is the technique that allows the sauce to penetrate slightly into the warm oyster surface before the oil seals it. Applied after the oil, the soy sits on top of the oil layer without reaching the oyster. Applied before, it seasons the oyster directly.',
        },
        {
            title: 'Pour the smoking oil — 24 oysters at once',
            description: 'Heat neutral oil in a small pan until genuinely smoking. Pour the smoking oil across all 24 oysters in one continuous motion — moving the pan from one end of the plate to the other so every oyster receives oil simultaneously. The sizzle across the entire plate is longer and more dramatic than for a single large fish — 24 individual sizzles happening at once. Scatter crispy fried shallots immediately after. Serve within 30 seconds.',
            tip: 'Pouring the oil across all 24 oysters in one continuous motion rather than spooning oil onto each individual oyster produces an even temperature distribution — every oyster receives the same temperature oil at the same moment. Individual spooning produces a temperature gradient where the first oysters receive hotter oil than the last.',
        },
        {
            title: 'Eat immediately — the 30-second window',
            description: 'Hàu h?p g?ng hành must be eaten within 30 seconds of the oil pour — the ginger and spring onion aromatics are at peak release in the first 30 seconds, the oyster is at the correct temperature, and the soy-sesame dressing is still warm on the oyster surface. Tilt each shell to the lips and sip the oyster with all accumulated liquid in one motion. Serve with lime wedges and baguette for mopping the plates.',
            tip: 'The comparison between hàu h?p g?ng hành and hàu nu?ng m? hành eaten at the same meal shows what technique does to the same oyster: the grilled oyster carries smoke and the m? hành richness and the crunch of peanuts; the steamed oyster carries the clean ginger-sesame character and the pure briny sweetness of the barely-set oyster. Neither is superior — they are two different interpretations of the same excellent ingredient.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
