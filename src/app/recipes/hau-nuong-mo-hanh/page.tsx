'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'hau-nuong-mo-hanh',
    title: 'Hàu Nu?ng M? Hành (Grilled Oysters with Spring Onion Oil)',
    subtitle: 'Fresh oysters grilled directly on charcoal until the shells open and the liquor inside bubbles — finished with a spoonful of spring onion oil, crispy fried shallots, and roasted peanuts that pool inside the open shell. The Vietnamese charcoal oyster where the shell is the vessel and the accumulated liquid is the sauce.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/hau-nuong-mo-hanh.jpg',
    intro: `Hàu nu?ng m? hành is the grilled oyster preparation that appears at seafood restaurants and street food stalls along the Vietnamese coast from Qu?ng Ninh to Kiên Giang — the preparation that applies the simplest possible cooking technique (direct charcoal heat) and the most characteristically Vietnamese finishing element (m? hành, spring onion oil) to the oyster, producing a dish that is simultaneously the most elemental and the most immediately satisfying way to eat a Vietnamese oyster. The technique is the same as for sò huy?t nu?ng m? hành — the oysters placed directly on glowing charcoal, shell-side down, where the curved lower shell acts as both heat conductor and cooking vessel, allowing the oyster inside to cook in its own retained liquid as the shell heats through. When the upper shell pops open slightly from the steam generated inside, the oyster has reached the specific barely-cooked state that the preparation requires: warm throughout, slightly firmed at the edges from the heat, but retaining the specific briny sweetness of the barely-cooked oyster rather than the toughened, shrunken character of the overcooked one. The m? hành — sizzling-hot oil poured over sliced spring onion — is the finishing element that transforms grilled oyster from a raw preparation with charcoal into a specifically Vietnamese dish: the oil blooms the spring onion in seconds and produces the specific aromatic combination of hot oil, cooked onion, and oyster brine that is as characteristic of Vietnamese coastal eating as any dish in the repertoire. The roasted peanuts and crispy shallots scattered over each oyster before eating provide the textural contrast that transforms the single creamy oyster into a complete mouthful — crunch, savor, brine, and the spring onion fragrance together in one shell.`,
    ingredientSections: [
        {
            title: 'Oysters',
            items: [
                { amount: 24, name: 'fresh whole oysters (hàu tuoi)', note: 'live — shells tightly closed. Do not pre-shuck. The closed shell retains the oyster liquor that becomes the natural sauce during charcoal grilling.' },
            ],
        },
        {
            title: 'M? hành (spring onion oil)',
            items: [
                { amount: 6, name: 'spring onions', note: 'green parts only, thinly sliced' },
                { amount: 80, unit: 'ml', name: 'neutral oil', note: 'heated to genuinely smoking — 210°C' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed — essential textural element' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 2, name: 'fresh red chilies', note: 'thinly sliced' },
                { amount: 2, unit: 'tbsp', name: 'soy sauce', note: 'light drizzle over the finished oysters — optional' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'a few drops per oyster — optional' },
            ],
        },
        {
            title: 'Dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'baguette', note: 'for mopping the shell liquid' },
            ],
        },
    ],
    steps: [
        {
            title: 'Scrub and prepare the oysters',
            description: 'Scrub each oyster shell under cold running water with a stiff brush — remove any mud, algae, or debris from the exterior. A clean shell produces a cleaner-tasting grilled oyster. Do not shuck — the closed shell retains the natural oyster liquor that will steam the oyster from within during charcoal grilling. The natural liquor inside each shell is the primary sauce of hàu nu?ng m? hành and must not be lost before cooking.',
            tip: 'The natural oyster liquor inside the shell — approximately 1-2 tablespoons per oyster — is the most concentrated briny flavor element of the entire preparation. It heats during grilling, absorbs the light smoke from the charcoal, and pools with the m? hành that is spooned in after opening. This combined liquid, sipped directly from the shell after the oyster is eaten, is the most intensely flavored element of the meal.',
        },
        {
            title: 'Build the charcoal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over — medium-hot for oysters. Hold your hand 15cm above the coals — 3-4 seconds before the heat is too intense is the correct temperature. Oysters need sufficient heat to conduct through the thick shell and cook the oyster within in 4-6 minutes. Too cool and the shell never opens properly; too hot and the oyster overcooks before the shell has opened.',
            tip: 'The thick shells of oysters conduct heat more slowly than the thinner shells of cockles or jumping snails — a medium-hot fire rather than very hot is the correct temperature that allows the shell to heat through and the oyster to cook at the right rate simultaneously.',
        },
        {
            title: 'Grill flat-side up — 4-6 minutes',
            description: 'Place the oysters flat-side up (the flatter shell facing up, the deeper curved shell sitting in the coals) directly on the charcoal grate. The curved bottom shell retains the natural liquor as it heats. Grill for 4-6 minutes. The oyster is ready when: the flat top shell pops open slightly — 3-5mm gap appearing at the front — and the liquor inside can be seen bubbling around the edges of the shell. Remove immediately at this stage.',
            tip: 'The flat-side-up positioning for oysters is specific to hàu nu?ng m? hành and is the opposite of the shell-opening-down technique used for turban snails. The flat top shell facing up allows it to pop open freely as the steam inside builds pressure. If the shell is positioned flat-side down, the natural hinge prevents the shell from opening and the oyster steams inside a sealed vessel rather than signaling its doneness visually.',
        },
        {
            title: 'Make the m? hành — at the grill',
            description: 'Place the sliced spring onion with salt in a heatproof bowl beside the grill. Heat neutral oil in a small pan over the charcoal until smoking — using the same charcoal fire is the traditional method. Pour the smoking oil directly over the spring onion in one motion — the sizzle is immediate. Stir. The m? hành should be bright green and fragrant. Have it ready before the first oyster comes off the grill.',
            tip: 'Making the m? hành over the same charcoal fire as the oysters is the Vietnamese seafood street food method — the charcoal heats both the oysters and the oil simultaneously, the entire preparation happening over one fire. At home, a small pan on the stove works equally well, but the charcoal-heated oil has a specific character from the radiant heat that produces a slightly different, slightly smokier m? hành.',
        },
        {
            title: 'Finish each oyster and eat immediately',
            description: 'Remove each oyster from the grill as its shell opens. Use a small knife or oyster pick to fully open the shell and loosen the oyster from the top shell if needed. The oyster should be warm, slightly firmed at the edges, still trembling slightly at the center. Spoon a generous amount of m? hành directly into each open shell — it will sizzle slightly against the hot shell and the hot oyster liquor. Scatter crushed peanuts, crispy shallots, and sliced chili over each. Drizzle a few drops of soy sauce and sesame oil if using. Eat immediately by sipping the oyster and all accumulated liquid from the shell in one motion. The dipping sauce is for between oysters — not applied to the shell itself.',
            tip: 'The single-motion eating of hàu nu?ng m? hành — tilting the shell to the lips and sipping the oyster along with the m? hành, peanuts, shallots, and accumulated broth simultaneously — is the technique that produces the complete eating experience. Each element has been placed to arrive in the mouth together: the barely-cooked oyster, the spring onion oil, the crunch of peanuts and shallots, the brine of the accumulated liquor. Eating with a fork extracts the oyster separately from these elements and produces a diminished experience.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
