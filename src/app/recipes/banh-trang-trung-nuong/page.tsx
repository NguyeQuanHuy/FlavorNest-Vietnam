'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-trang-trung-nuong',
    title: 'Bánh Tráng Tr?ng Nu?ng (Grilled Rice Paper with Egg)',
    subtitle: 'The Ðà L?t street food that became a national obsession — a crispy rice paper base grilled over charcoal, cracked egg spread across the surface, topped with spring onion oil, dried shrimp, and chili sauce, folded in half and eaten in two bites.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-trang-nuong.jpg',
    intro: `Bánh tráng tr?ng nu?ng is the dish that demonstrates the Vietnamese genius for transforming simple ingredients into something irresistible. A single sheet of dried rice paper. One egg. Spring onion oil. Dried shrimp. Chili sauce. Grilled over charcoal until the rice paper crackles and the egg sets in a thin, lacy layer across the surface. Folded in half, handed over, eaten immediately in the mountain cool of Ðà L?t where the dish originated. It has since spread to every city in Vietnam — sold from carts, from market stalls, from the back of motorcycles at night markets. The ingredients cost almost nothing. The technique requires three minutes. The result is one of the most addictive things in Vietnamese street food. This recipe gives two methods: the correct charcoal method, and a home griddle method that produces a very good approximation.`,
    ingredientSections: [
        {
            title: 'Per serving (multiply as needed)',
            items: [
                { amount: 1, name: 'round dried rice paper (bánh tráng)', note: '22-25cm diameter — thin variety, not the thick spring roll type' },
                { amount: 1, name: 'egg', note: 'cracked directly onto the hot rice paper' },
                { amount: 1, unit: 'tbsp', name: 'scallion oil (d?u hành)', note: 'made from hot oil poured over sliced spring onion — see step 2' },
                { amount: 1, unit: 'tsp', name: 'dried shrimp (tôm khô)', note: 'small, orange-pink, pre-soaked 10 min in water then drained' },
                { amount: 1, unit: 'tsp', name: 'Vietnamese chili sauce (tuong ?t)', note: 'or sriracha — the finishing heat' },
                { amount: 1, unit: 'tsp', name: 'mayonnaise', note: 'optional but widely used in the modern Saigon version — adds richness' },
                { amount: 0.5, unit: 'tsp', name: 'Maggi seasoning sauce', note: 'the umami finishing drizzle — small amount, big difference' },
            ],
        },
        {
            title: 'Scallion oil (makes enough for 8 servings)',
            items: [
                { amount: 4, name: 'spring onions', note: 'thinly sliced — green parts only' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil' },
                { amount: 0.25, unit: 'tsp', name: 'salt' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the scallion oil',
            description: 'Place thinly sliced spring onion greens in a small bowl with a pinch of salt. Heat neutral oil in a small pan until just smoking — about 180°C. Pour the hot oil over the spring onions in one motion. The sizzle will cook the onion slightly and release the aromatic oils. Stir to combine. The scallion oil can be made ahead and kept at room temperature for several hours.',
            tip: 'The oil must be hot enough to sizzle aggressively on contact — if it does not sizzle, it will not bloom the spring onion flavor properly.',
        },
        {
            title: 'Soak the dried shrimp',
            description: 'Soak dried shrimp in warm water for 10 minutes until slightly softened. Drain and pat dry. The soaking removes excess salt and softens the texture so they do not scratch the rice paper when spreading.',
            tip: 'Very small dried shrimp work best — they integrate into the egg layer rather than sitting on top. If only large dried shrimp are available, roughly chop before using.',
        },
        {
            title: 'Grill the rice paper — charcoal method',
            description: 'Hold a sheet of rice paper about 10cm above hot charcoal embers (not flame) using tongs or a wire rack. The rice paper will begin to soften and become pliable in 20-30 seconds. Crack an egg directly onto the center of the softened rice paper. Use the back of a spoon to spread the egg quickly across the entire surface in a thin layer — you have about 15 seconds before the egg begins to set.',
            tip: 'Move fast with the egg spreading. The rice paper is hot and the egg sets quickly. The goal is a thin, lacy egg layer across the entire surface — not a thick egg in the center.',
        },
        {
            title: 'Grill the rice paper — griddle method',
            description: 'Heat a flat griddle or wide non-stick pan over medium heat. Lightly oil the surface. Place the rice paper flat on the griddle for 20-30 seconds until it begins to soften and develop small bubbles. Crack an egg onto the center and spread quickly with the back of a spoon or a small brush to cover the surface thinly. Reduce heat to medium-low.',
            tip: 'The griddle must be hot enough to crisp the rice paper from below while the egg sets from above. Too cool: the rice paper stays soft. Too hot: the egg burns before the rice paper crisps.',
        },
        {
            title: 'Add toppings while egg is still wet',
            description: 'While the egg is still setting (surface looks wet but edges are beginning to firm), quickly scatter the soaked dried shrimp across the surface. Drizzle scallion oil generously over the egg. Add drops of chili sauce, mayonnaise if using, and a small amount of Maggi seasoning sauce. The toppings should be added while the egg is still wet enough to hold them in place as it finishes cooking.',
            tip: 'Work fast — once the egg is fully set, the toppings sit on top rather than being integrated. The ideal is toppings half-set into the egg surface.',
        },
        {
            title: 'Fold and serve',
            description: 'When the egg is fully set and the bottom of the rice paper is crisp and beginning to show golden brown patches, fold the rice paper in half using a spatula or tongs — toppings facing inward, crispy rice paper on the outside. The heat will finish pressing the toppings into the egg. Serve immediately on a small plate or wrapped in paper. Eat in two bites while still hot — bánh tráng tr?ng nu?ng exists only in the present tense.',
            tip: 'The fold should be firm — press the two halves together briefly so the egg interior bonds slightly. A loose fold means it falls apart on the first bite.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
