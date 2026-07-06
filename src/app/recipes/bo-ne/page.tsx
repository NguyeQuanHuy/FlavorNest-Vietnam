'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-ne',
    title: 'Bò Né (Vietnamese Sizzling Beef on Cast Iron)',
    subtitle: 'The Saigon breakfast that arrives still screaming — a cast iron skillet of seared beef, fried egg, pâté, and sliced baguette, all cooked tableside in butter and served with a pool of rich brown sauce. The sound alone is half the dish.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/bo-ne.jpg',
    intro: `Bò né — literally "dodging beef" — gets its name from the sizzling butter and beef fat that spits aggressively from the cast iron skillet when it arrives at the table. The name is a warning and an invitation. A pre-heated cast iron plate loaded with sliced beef, a fried egg, a spoonful of pâté, and half a baguette, all cooked in butter until the beef is caramelized at the edges and the egg whites are set but the yolk still runs. The brown sauce — a Vietnamese adaptation of French demi-glace, made with beef stock, oyster sauce, and a touch of butter — pools around everything. You tear the baguette, drag it through the sauce and the broken yolk, pile beef on top, add a smear of pâté. This is the breakfast that Saigon runs on between 6am and 9am, served by restaurants that have been doing nothing else since the French left.`,
    ingredientSections: [
        {
            title: 'Beef',
            items: [
                { amount: 300, unit: 'g', name: 'beef sirloin or ribeye', note: 'sliced 5mm thin against the grain — or ask butcher to slice for bò né specifically' },
                { amount: 2, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 3, name: 'garlic cloves, minced' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'Brown sauce (nu?c s?t bò)',
            items: [
                { amount: 150, unit: 'ml', name: 'beef stock', note: 'good quality — this is the soul of the dish' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'soy sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'cornstarch', note: 'mixed with 1 tbsp cold water' },
                { amount: 20, unit: 'g', name: 'unsalted butter' },
            ],
        },
        {
            title: 'For the skillet',
            items: [
                { amount: 2, name: 'eggs' },
                { amount: 40, unit: 'g', name: 'unsalted butter', note: 'generous — this is not a health dish' },
                { amount: 4, unit: 'tbsp', name: 'Vietnamese pork pâté (pâté gan)', note: 'canned Vissan brand or homemade. French pork pâté is an acceptable substitute.' },
                { amount: 2, name: 'fresh baguettes', note: 'Vietnamese-style thin baguette — cut in half lengthwise. French baguette works.' },
                { amount: 2, name: 'spring onions, sliced', note: 'for garnish' },
                { amount: 1, name: 'fresh red chili, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the beef',
            description: 'Combine sliced beef with oyster sauce, fish sauce, sugar, minced garlic, black pepper, and sesame oil. Mix well and marinate for minimum 15 minutes at room temperature. The beef should be completely coated. Pat slightly dry before cooking — excess marinade burns in the hot pan.',
            tip: 'Slice the beef thin and uniform — 5mm. Thick slices do not cook quickly enough at the temperatures needed for the caramelized exterior. If the beef is difficult to slice thin, freeze for 20 minutes first.',
        },
        {
            title: 'Make the brown sauce',
            description: 'Combine beef stock, oyster sauce, soy sauce, and sugar in a small saucepan. Bring to a simmer. Stir in the cornstarch slurry and cook for 1-2 minutes until the sauce coats a spoon lightly. Remove from heat and stir in butter until melted. The sauce should be glossy, slightly thick, and deeply savory. Keep warm.',
            tip: 'The brown sauce can be made ahead and reheated. It improves slightly as it sits.',
        },
        {
            title: 'Heat the cast iron skillet until smoking',
            description: 'Place a cast iron skillet or heavy pan over maximum heat for 3-4 minutes until beginning to smoke. Add half the butter — it should foam immediately and begin browning within 10 seconds. If it does not, the pan is not hot enough. The sizzle when the beef hits the pan should be aggressive — this is the sound that gives the dish its name.',
            tip: 'No cast iron? A heavy stainless steel or carbon steel pan works. Non-stick pans cannot reach the required temperature and will not produce the caramelization.',
        },
        {
            title: 'Sear the beef fast',
            description: 'Add the marinated beef slices in a single layer — do not overcrowd. Sear for 60-90 seconds on the first side without moving until a crust forms. Flip and sear 30-45 seconds on the second side. The beef should be caramelized at the edges with a slight char. Remove to one side of the pan.',
            tip: 'Work in batches if needed. Overcrowded beef steams instead of searing — the temperature drops and the caramelization does not form.',
        },
        {
            title: 'Add eggs and pâté',
            description: 'Push the beef to one edge of the hot skillet. Add the remaining butter to the empty space. Crack the eggs directly into the butter. Fry until the whites are just set and the edges are crispy but the yolks remain runny — about 90 seconds. Add spoonfuls of pâté alongside the eggs. Pour the warm brown sauce over the beef.',
            tip: 'The yolk must be runny — this is non-negotiable in bò né. The broken yolk mixed with brown sauce and pâté is the dipping sauce for the baguette.',
        },
        {
            title: 'Serve on the sizzling skillet',
            description: 'The skillet should still be sizzling when it reaches the table — this is the experience. Scatter spring onion and sliced chili over everything. Serve with the baguette halves alongside. How to eat: break the baguette, drag through the egg yolk and brown sauce, add a slice of beef and a smear of pâté. Eat immediately.',
            tip: 'Pre-heat the serving plates if possible. A hot plate extends the sizzle. Bò né that has stopped sizzling has lost half its character.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
