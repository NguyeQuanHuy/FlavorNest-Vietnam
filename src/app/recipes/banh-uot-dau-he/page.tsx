'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-uot-dau-he',
    title: 'Bánh U?t D?u H? (Vietnamese Steamed Rice Sheets with Scallion Oil)',
    subtitle: `Silky steamed rice sheets, paper-thin and slightly translucent, draped with fragrant scallion oil and topped with crispy fried shallots, ch? l?a, and a bright fish sauce dipping sauce. The Saigon breakfast that takes 20 minutes and tastes like nothing else.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/banh-cuon.jpg',
    intro: `Bánh u?t literally means "wet cake" — a name that undersells it considerably. These are thin, almost translucent sheets of steamed rice batter, softer and more delicate than bánh cu?n because they contain no filling and are served flat rather than rolled. The defining element is the d?u h? — scallion oil made by pouring hot rendered fat over freshly sliced green onions until they sizzle and turn fragrant. Poured over the warm rice sheets, the oil soaks in slowly, making each sheet glisten. Topped with crispy fried shallots, sliced ch? l?a (Vietnamese pork roll), and eaten with a sweet-savory nu?c ch?m, it is one of the simplest and most satisfying breakfasts in Vietnamese cooking. This recipe works at home with a non-stick pan — no specialized steaming equipment required.`,
    ingredientSections: [
        {
            title: 'Rice sheet batter',
            items: [
                { amount: 200, unit: 'g', name: 'rice flour', note: 'fine-ground, not glutinous rice flour' },
                { amount: 30, unit: 'g', name: 'tapioca starch', note: 'makes sheets elastic and chewy' },
                { amount: 600, unit: 'ml', name: 'cold water' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil', note: 'for the batter and brushing the pan' },
            ],
        },
        {
            title: 'Scallion oil (d?u h?)',
            items: [
                { amount: 6, name: 'spring onions / scallions', note: 'green parts only, thinly sliced — about 1 cup' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'vegetable or rice bran' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Crispy fried shallots',
            items: [
                { amount: 4, name: 'shallots', note: 'thinly sliced into rings' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'for frying' },
            ],
        },
        {
            title: 'Nu?c ch?m (dipping sauce)',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'warm water' },
                { amount: 1.5, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1, name: 'garlic clove, minced' },
                { amount: 1, name: 'bird\'s eye chili, sliced', note: 'optional' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 200, unit: 'g', name: 'ch? l?a (Vietnamese pork roll)', note: 'sliced thin — find at Asian grocery' },
                { amount: 100, unit: 'g', name: 'bean sprouts', note: 'optional' },
                { amount: 1, name: 'small bunch mint or perilla', note: 'fresh herbs for the side plate' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the batter (rest 30 min)',
            description: 'Whisk rice flour, tapioca starch, and salt together in a bowl. Gradually add the cold water while whisking constantly to prevent lumps. Add 1 tablespoon of oil and whisk until the batter is completely smooth — it should have the consistency of thin cream and coat a spoon lightly. Cover and let rest for 30 minutes at room temperature. This rest allows the starches to fully hydrate, giving the sheets a smooth, elastic texture when steamed.',
            tip: 'Do not skip the resting time. Unrested batter produces sheets that tear easily and have an uneven, grainy texture. 30 minutes is the minimum — up to 2 hours is fine.',
        },
        {
            title: 'Make the crispy shallots',
            description: 'Place sliced shallots in a cold pan with 4 tablespoons of oil. Turn heat to medium-low. Cook slowly, stirring occasionally, for 12-15 minutes until shallots turn deep golden brown and crispy. They will continue to darken after you remove them from the oil, so pull them out when they are light golden — not yet fully dark. Drain on paper towel. Reserve the shallot oil — it is excellent drizzled over the finished dish.',
            tip: 'Starting in cold oil is the key. Hot oil cooks the outside before the inside dries out, producing soft shallots that burn. Cold oil gives even, crispy results every time.',
        },
        {
            title: 'Make the nu?c ch?m',
            description: 'Dissolve the sugar in warm water, then add fish sauce and lime juice. Stir until the sugar is completely dissolved. Add minced garlic and sliced chili. Taste — the sauce should be balanced: salty from fish sauce, sweet, sour, with the garlic and chili as background notes. Adjust with more lime (for acidity), more sugar (for sweetness), or more fish sauce (for depth). Set aside at room temperature.',
            tip: 'The ratio of 3:2:4 (fish sauce : sugar : water) is a reliable starting point, but every fish sauce brand has different salinity. Taste and adjust — your palate is the recipe.',
        },
        {
            title: 'Make the scallion oil (d?u h?)',
            description: 'Place sliced scallion greens in a heatproof bowl with salt and sugar. Heat 4 tablespoons of oil in a small pan over high heat until shimmering hot — nearly smoking. Pour the hot oil directly over the scallions. They will sizzle violently for a few seconds. Stir once. The scallions should wilt slightly but remain bright green. This is d?u h? — the defining flavor of this dish.',
            tip: 'The oil must be genuinely hot — if it does not sizzle aggressively when it hits the scallions, it is not hot enough and the scallions will be oily instead of fragrant. Heat it until you see the first wisps of smoke.',
        },
        {
            title: 'Steam the rice sheets',
            description: 'Heat a non-stick pan (24-26 cm / 10 inch) over medium heat. Brush the surface lightly with oil. Give the batter a good stir — the starch settles. Pour about 80ml (? cup) of batter into the center of the pan and immediately tilt and swirl to spread it into a thin, even circle covering the entire surface. The sheet should be almost translucent. Cover with a lid and steam for 90 seconds until the surface is set and no longer looks wet. The sheet will have small air bubbles — this is correct.',
            tip: 'The sheet should be so thin you can almost see the pan through it. If it is thick and opaque, use less batter. Thin sheets steam faster, have better texture, and absorb the scallion oil more beautifully.',
        },
        {
            title: 'Remove and layer the sheets',
            description: 'Run a thin spatula or butter knife around the edge of the sheet to loosen it. Slide the spatula underneath and gently lift the sheet onto a serving plate or large flat board. The sheet will be very delicate — work gently. Immediately spoon a generous amount of scallion oil over the hot sheet and let it absorb for 30 seconds. Repeat with remaining batter, stacking the sheets with scallion oil between each layer or serving them individually.',
            tip: 'The scallion oil must go on while the sheet is still hot — the heat draws the oil in and makes the sheet glisten. Cold sheets simply sit on top of the oil rather than absorbing it.',
        },
        {
            title: 'Assemble and serve',
            description: 'Arrange the oiled rice sheets on serving plates — either flat and folded loosely, or left in a stack. Top generously with crispy fried shallots and sliced ch? l?a. Serve with the nu?c ch?m alongside, bean sprouts, and a plate of fresh herbs. Each person drizzles the dipping sauce over their portion. Eat immediately — bánh u?t is best within minutes of being made, while the sheets are still warm and the shallots still crispy.',
            tip: 'Do not assemble too far ahead. Rice sheets firm up and become less silky as they cool. If making for guests, set up an assembly line and serve each portion as you finish it.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
