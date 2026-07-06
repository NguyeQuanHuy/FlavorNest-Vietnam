'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nem-ran-ha-noi',
    title: 'Nem Rán Hà N?i (Northern Vietnamese Fried Spring Rolls)',
    subtitle: 'Minced pork, crab meat, glass noodles, wood ear mushrooms, and taro wrapped in thin wheat spring roll wrappers and deep-fried until the exterior is shatteringly smooth and uniformly golden — the northern Vietnamese fried roll where the wheat wrapper fries differently from the rice paper of ch? giò, producing a smoother, more even crispiness and a different internal steam character.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 6,
    heroImage: '/images/recipes/nem-ran-ha-noi.jpg',
    intro: `Nem rán is the northern Vietnamese fried spring roll — the preparation that Vietnamese people from Hà N?i consider the original and definitive fried roll, and that differs from the southern ch? giò in the wrapper, the filling proportions, and the specific texture that results from the combination of both. The wheat-based spring roll wrapper (v? bánh cu?n chiên, or the commercial Frühlingsrollen-Blätter available throughout Europe and Asia) produces a fundamentally different fried exterior from the rice paper (bánh tráng) used in southern ch? giò: where rice paper creates a bubbled, shatteringly irregular surface from the air pockets between its layers, wheat wrapper creates a smooth, uniformly golden exterior that is more even, slightly thicker, and with a different crunch character — less shattering and more crispy-yielding, similar in character to a well-made Chinese egg roll. The filling of nem rán Hà N?i reflects northern Vietnamese taste preferences: crab meat (either real crab or the crab-flavored pork mixture called th?t cua that traditional recipes use) alongside minced pork, glass noodles, wood ear mushrooms, and a proportion of vegetables that is slightly more restrained than the generous-vegetable southern version. The crab element in nem rán — whether from actual crab or from the traditional pork preparation that approximates crab flavor — is the filling component that most specifically marks this as a northern preparation and that provides the specific sweetness and slight marine character that makes nem rán Hà N?i taste different from ch? giò even when the two are served alongside each other. In Hà N?i, nem rán is eaten with bún, lettuce, and the nu?c ch?m that is the standard dipping sauce for fried rolls throughout Vietnam — the same eating format as ch? giò, despite the very different wrapper and filling character.`,
    ingredientSections: [
        {
            title: 'Filling',
            items: [
                { amount: 200, unit: 'g', name: 'minced pork (th?t heo bam)', note: '20% fat' },
                { amount: 100, unit: 'g', name: 'crab meat (th?t cua)', note: 'fresh or canned crab meat, drained. Or substitute with 100g additional minced pork mixed with 1 tsp fish sauce and 0.5 tsp sugar to approximate the sweetness.' },
                { amount: 100, unit: 'g', name: 'raw shrimp', note: 'peeled, deveined, roughly chopped' },
                { amount: 20, unit: 'g', name: 'dried wood ear mushrooms (m?c nhi)', note: 'soaked 20 minutes, drained, finely diced' },
                { amount: 20, unit: 'g', name: 'dried glass noodles (mi?n)', note: 'soaked 10 minutes, drained, cut into 2cm pieces' },
                { amount: 100, unit: 'g', name: 'taro (khoai môn)', note: 'peeled and finely grated — or substitute with jicama' },
                { amount: 1, name: 'medium carrot', note: 'finely grated' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'Wrappers',
            items: [
                { amount: 20, name: 'wheat spring roll wrappers (Frühlingsrollen-Blätter)', note: '20x20cm square sheets — thawed if frozen, kept covered with a damp cloth to prevent drying.' },
                { amount: 1, name: 'egg', note: 'beaten — for sealing the rolls' },
                { amount: 1, unit: 'tbsp', name: 'cornstarch mixed with 2 tbsp water', note: 'alternative sealing paste if egg is unavailable' },
            ],
        },
        {
            title: 'For frying',
            items: [
                { amount: 700, unit: 'ml', name: 'neutral oil', note: 'for deep frying at 175°C' },
            ],
        },
        {
            title: 'Nu?c ch?m',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 5, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
                { amount: 1, name: 'fresh red chili', note: 'sliced' },
                { amount: 1, unit: 'tbsp', name: 'grated carrot', note: 'traditional garnish in Hà N?i nu?c ch?m' },
            ],
        },
        {
            title: 'To serve — the northern way',
            items: [
                { amount: 300, unit: 'g', name: 'dried bún (rice vermicelli)', note: 'cooked and drained — the base for nem rán Hà N?i' },
                { amount: 1, name: 'head butter lettuce', note: 'leaves separated' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 1, name: 'cucumber', note: 'sliced' },
                { amount: 100, unit: 'g', name: 'd? chua (pickled daikon and carrot)', note: 'drained' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'crushed — scattered over the bowl' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the filling and rest',
            description: 'Combine minced pork, crab meat, chopped shrimp, diced wood ear mushrooms, cut glass noodles, grated taro, grated carrot, minced shallots, spring onion, fish sauce, sugar, white pepper, and sesame oil. Mix thoroughly until cohesive. Refrigerate 30 minutes. The crab meat in nem rán filling provides the specific sweetness and slight marine depth that distinguishes the northern filling from the plain pork-and-vegetable filling of simpler versions. Test a small amount by frying — the flavour should be assertive, as the wheat wrapper moderates the perceived seasoning more than rice paper does.',
            tip: 'The taro and carrot in nem rán Hà N?i serve different purposes: the taro binds and provides starchy sweetness; the carrot provides colour and a slight earthiness. Together they give the filling the specific northern character that is slightly sweeter and more vegetable-forward than the simpler southern ch? giò filling. The grated taro specifically also helps prevent the filling from becoming too wet from the crab and shrimp moisture.',
        },
        {
            title: 'Roll with wheat wrappers — the different technique',
            description: 'Lay one wheat wrapper on a clean flat surface in a diamond orientation (corner pointing toward you). Place 2-3 tablespoons of filling in a compact horizontal log across the lower third of the wrapper. Fold the bottom corner up over the filling. Fold both side corners inward. Roll firmly upward toward the top corner. Brush the top corner with beaten egg and press to seal. The wheat wrapper rolls more easily than rice paper — it does not require moistening and is more forgiving during rolling. Keep completed rolls covered with a damp cloth to prevent drying.',
            tip: 'The wheat spring roll wrapper (Frühlingsrollen-Blätter) rolls very differently from rice paper: it needs no preparation before rolling, does not stick to itself the way wet rice paper does, and is significantly more forgiving of imperfect rolling technique. This is why the European and Chinese restaurant industry adopted wheat wrappers — they produce consistent results with less skill than rice paper requires. The tradeoff is a different (smoother, less bubbly) fried exterior.',
        },
        {
            title: 'Fry at 175°C — single stage',
            description: 'Heat oil to 175°C. Fry the nem rán in batches of 4-5 for 5-6 minutes, turning once at 3 minutes, until uniformly deep golden and the surface is smooth and crispy throughout. Wheat wrappers do not require the two-stage frying used for rice paper ch? giò — the denser wheat wrapper can handle the full frying temperature from the start without the exterior burning before the interior cooks. Drain on a rack.',
            tip: 'The 5-6 minute single-stage frying for nem rán with wheat wrappers versus the two-stage frying for rice paper ch? giò reflects the different thermal properties of the two wrapper materials. Wheat wrapper is denser and more heat-resistant than rice paper — it can absorb sustained 175°C heat without burning and requires this sustained heat to cook through completely. Rice paper is more delicate and burns if subjected to the same sustained temperature.',
        },
        {
            title: 'Make the Hà N?i nu?c ch?m',
            description: 'Combine fish sauce, lime juice, sugar, and water until sugar dissolves. Add minced garlic, minced chili, and sliced red chili. Add the grated carrot — the traditional Hà N?i garnish in nu?c ch?m that the south typically omits. The Hà N?i nu?c ch?m for nem rán is slightly more acidic than the standard version — the northern palate for fried rolls uses a brighter sauce to cut through the denser wheat wrapper.',
            tip: 'The grated carrot in Hà N?i nu?c ch?m is the detail that northern Vietnamese people notice immediately when served a sauce without it — its presence is so established in the northern tradition for fried rolls and bún dishes that its absence reads as an incomplete sauce. The carrot contributes minimal flavor but provides the visual of a properly Hà N?i dipping sauce.',
        },
        {
            title: 'Assemble the Hà N?i bún bowl',
            description: 'The northern way to eat nem rán: place a mound of bún in a bowl. Arrange 2-3 nem rán on top — not whole, but cut diagonally in half to show the cross-section of filling. Add cucumber slices, d? chua, lettuce torn into pieces, and herbs. Scatter crushed peanuts. Pour nu?c ch?m over the entire bowl or serve alongside for dipping. This bún-based bowl format — called bún nem rán — is the specifically northern eating format that differs from the direct hand-eating more common in the south. The nu?c ch?m poured over the bowl softens the bún slightly and distributes through all the components.',
            tip: 'Cutting the nem rán diagonally in half before placing in the bún bowl is the northern presentation technique that reveals the cross-section of filling and provides two flat surfaces that absorb the nu?c ch?m more effectively than a whole uncut roll. The diagonal cut also produces a more visually attractive presentation — the spiral of filling visible in the cross-section demonstrates that the roll was made correctly.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
