'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cha-gio',
    title: 'Chả Giò (Southern Vietnamese Crispy Spring Rolls)',
    subtitle: 'Minced pork and shrimp with wood ear mushrooms, glass noodles, and taro wrapped in rice paper and deep-fried until the wrapper shatters into hundreds of delicate bubbled layers — the southern Vietnamese spring roll where the rice paper wrapper and the taro in the filling are the two elements that make it specifically different from every other fried roll in the Vietnamese repertoire.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 6,
    heroImage: '/images/recipes/cha-gio.jpg',
    intro: `Chả giò is the southern Vietnamese fried spring roll — one of the most widely recognized Vietnamese dishes internationally and one of the most frequently misunderstood in the details that make it specifically southern and specifically Vietnamese rather than generically Asian fried roll. The preparation is known by different names in different parts of Vietnam: chả giò in the south, nem rán in the north, and spring roll in the international Vietnamese restaurant vocabulary — and these name differences reflect genuine preparation differences that go beyond regional naming conventions. The southern chả giò uses rice paper (bánh tráng) as its wrapper rather than the wheat-based wrappers used in northern nem rán and in most other Asian fried roll preparations. Rice paper produces a dramatically different fried exterior: where wheat wrappers fry to a smooth, uniformly golden surface, rice paper creates the characteristic bubbled, shatteringly crispy exterior of chả giò — hundreds of small air pockets between the translucent rice paper layers, each pocket creating a separate crispy surface area, producing a roll that shatters into delicate fragments on the first bite rather than yielding gradually. The filling also differs from northern nem rán in the addition of taro (khoai môn): grated or minced taro provides a specific starchy texture in the cooked filling that is lighter and more specifically savory than the carrot or jicama used in other versions, and it absorbs the pork and shrimp flavors during the brief cooking period inside the frying roll in a way that binds the filling without making it dense. Chả giò is eaten wrapped in a lettuce leaf with fresh herbs and dipped in nước chấm — the eating method that moderates the richness of the fried roll with the freshness of the herbs and the brightness of the dipping sauce.`,
    ingredientSections: [
        {
            title: 'Filling',
            items: [
                { amount: 250, unit: 'g', name: 'minced pork (thịt heo băm)', note: '20% fat — the fat keeps the filling moist inside the fried roll' },
                { amount: 150, unit: 'g', name: 'fresh shrimp', note: 'peeled, deveined, roughly chopped — not minced. Chunks of shrimp in the filling provide texture.' },
                { amount: 150, unit: 'g', name: 'taro (khoai môn)', note: 'peeled and finely grated — the specifically southern filling element. Substitute: jicama or yam.' },
                { amount: 20, unit: 'g', name: 'dried wood ear mushrooms (mộc nhĩ)', note: 'soaked 20 minutes, drained, finely diced' },
                { amount: 20, unit: 'g', name: 'dried glass noodles (miến)', note: 'soaked 10 minutes, drained, cut into 2cm pieces' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'Wrappers',
            items: [
                { amount: 20, name: 'small rice paper sheets (bánh tráng)', note: '16-18cm diameter — the specifically southern Vietnamese wrapper. Must be slightly moistened before rolling.' },
                { amount: 1, name: 'egg yolk', note: 'beaten — for sealing the roll' },
            ],
        },
        {
            title: 'For frying',
            items: [
                { amount: 700, unit: 'ml', name: 'neutral oil', note: 'for deep frying at 170°C — lower than most fried foods to allow the rice paper to develop its characteristic bubbled texture without burning' },
            ],
        },
        {
            title: 'Nước chấm dipping sauce',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 5, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
                { amount: 1, name: 'fresh red chili', note: 'sliced — for color' },
                { amount: 1, unit: 'tbsp', name: 'grated carrot', note: 'optional — the traditional garnish in the dipping sauce bowl' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'head butter lettuce', note: 'leaves separated — for wrapping' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 1, name: 'bunch bean sprouts', note: 'blanched briefly' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the filling and rest',
            description: 'Combine minced pork, chopped shrimp, grated taro, diced wood ear mushrooms, cut glass noodles, minced shallots, spring onion, fish sauce, sugar, black pepper, and sesame oil. Mix thoroughly until the mixture is cohesive. Refrigerate for 30 minutes — the cold resting period firms the taro and pork mixture and makes the filling easier to roll tightly without it shifting inside the wrapper. Test the filling seasoning by frying a small patty.',
            tip: 'The grated taro in chả giò filling absorbs moisture from the pork and shrimp during the resting period and becomes slightly sticky — this is the property that helps bind the filling together inside the roll during frying. Under-rested filling with ungelled taro is looser and more prone to shifting during rolling and frying.',
        },
        {
            title: 'Moisten the rice paper — the critical technique',
            description: 'Work with one rice paper sheet at a time. Dip each sheet very briefly in a shallow bowl of warm water — 1-2 seconds only. The rice paper should be slightly softened and pliable but not fully wet or it will tear during rolling and stick to the surface. Lay on a clean flat surface. The rice paper continues to hydrate for 30 seconds after dipping — begin rolling while it still feels slightly firm.',
            tip: 'The 1-2 second water dip for rice paper before rolling chả giò is the most critical and most frequently over-done step. Over-wetted rice paper becomes sticky, tears easily, and produces rolls that seal improperly and open during frying. Under-wetted rice paper cracks during rolling. The correct hydration: the paper is pliable but still has slight resistance when bent — it will continue softening for 30 seconds after dipping, reaching perfect pliability just as rolling is complete.',
        },
        {
            title: 'Roll tightly — the technique that produces the shatter',
            description: 'Place 2 tablespoons of filling in a log shape across the lower third of the moistened rice paper. Fold the bottom edge over the filling. Fold both sides inward. Roll forward firmly and tightly — the roll should be as tight as possible without tearing the rice paper. Brush the final edge with beaten egg yolk and press to seal. The tight rolling is what produces the characteristic bubbled exterior: the tightly rolled rice paper layers trap air between them during frying, and these air pockets become the bubbles that make chả giò visually distinctive.',
            tip: 'The tighter the roll, the more dramatic the bubble texture during frying. A loosely rolled chả giò fries to a smooth, pale surface with few bubbles. A tightly rolled chả giò fries to a deeply bubbled, irregular surface with hundreds of tiny air pockets. The shatter on first bite — the defining quality of great chả giò — comes from these air pockets: each one is a separately crispy surface that breaks independently.',
        },
        {
            title: 'Fry at 170°C — two stages',
            description: 'STAGE ONE: Heat oil to 170°C. Fry the rolls in batches of 4-5 for 4-5 minutes until pale golden. Remove and drain. This lower-temperature first fry cooks the filling through without over-browning the exterior. STAGE TWO: Increase oil to 185°C. Return the rolls and fry for 2-3 more minutes until deeply golden and the rice paper surface is fully bubbled and shatteringly crispy. The two-stage frying ensures the filling is cooked through and the exterior achieves maximum crispiness simultaneously.',
            tip: 'The two-stage frying for chả giò — 170°C for filling, 185°C for crust — is the technique used by experienced Vietnamese home cooks and restaurant kitchens to achieve both a cooked interior and a maximally crispy exterior. Single-stage high-temperature frying browns the exterior before the filling is cooked; single-stage low-temperature frying cooks the filling but produces a pale, soft exterior.',
        },
        {
            title: 'Serve with the full herb plate',
            description: 'Place the hot chả giò on a serving plate. The surface should be: deeply golden, heavily bubbled with the characteristic rice paper texture, and shattering audibly when tapped with a finger. Serve with the full herb plate, lettuce wrapping leaves, bean sprouts, cucumber, and nước chấm. The eating: place one chả giò on a lettuce leaf, add mint, rau răm, perilla, and cucumber, roll loosely, dip the end in nước chấm and bite. The crunch of the rice paper, the fresh herbs, and the bright dipping sauce in the same bite is the complete chả giò experience.',
            tip: 'The specific lettuce-herb wrap for chả giò is not optional garnish but the eating method the preparation is designed for. A chả giò eaten alone without herbs is simply a fried roll. A chả giò wrapped in lettuce with rau răm and mint and dipped in nước chấm is specifically chả giò — the herb freshness and the bright acidity of the sauce are the elements that make the rich, fried roll a balanced and endlessly eatable preparation rather than a heavy one.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
