'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'trung-cut-sot-chua-ngot',
    title: 'Trứng Cút Sốt Chua Ngọt (Quail Eggs in Sweet and Sour Sauce)',
    subtitle: 'Hard-boiled quail eggs fried until golden then tossed in a Vietnamese sweet and sour sauce of tomato, pineapple, and fish sauce — a dish that manages to be simultaneously simple, colorful, and deeply satisfying.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/trung-cut-sot-chua-ngot.jpg',
    intro: `Trứng cút sốt chua ngọt is the quail egg dish that Vietnamese home cooks make when they want something quick, inexpensive, and colorful that children and adults eat equally enthusiastically. Quail eggs — smaller, richer, and more intensely flavored than chicken eggs — are hard-boiled, peeled, and briefly fried in hot oil until the outside develops a thin golden skin that creates texture contrast with the egg white. They are then tossed in a bright Vietnamese sweet and sour sauce: tomato for body and sweetness, pineapple for tropical acidity, fish sauce for umami depth, and a touch of chili for heat. The sauce clings to the golden egg surface and creates a glaze that coats each small egg completely. The dish is visually striking — golden eggs in a glossy red-orange sauce — and has the sweet-sour-savory balance that Vietnamese cooking executes so well. It is eaten with steamed rice, often as part of a multi-dish family meal. The quail egg format makes it naturally suited to sharing.`,
    ingredientSections: [
        {
            title: 'Quail eggs',
            items: [
                { amount: 24, name: 'quail eggs (trứng cút)', note: 'available at Asian grocers — fresh or pre-boiled. If fresh, boil for 4 minutes then cool in ice water before peeling.' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'for frying the boiled eggs' },
            ],
        },
        {
            title: 'Sweet and sour sauce',
            items: [
                { amount: 3, name: 'medium tomatoes', note: 'roughly chopped — or 200ml passata' },
                { amount: 120, unit: 'g', name: 'fresh pineapple', note: 'cut into small chunks — about 4-5 pieces. Canned in juice is acceptable.' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'rice vinegar', note: 'brightens the acidity' },
                { amount: 1, unit: 'tsp', name: 'cornstarch', note: 'mixed with 2 tbsp water — thickens the sauce to coat the eggs' },
                { amount: 100, unit: 'ml', name: 'water' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 1, name: 'fresh red chili', note: 'sliced — adjust to taste' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 1, name: 'fresh red chili, extra slices' },
                { amount: 1, name: 'small bunch cilantro' },
            ],
        },
    ],
    steps: [
        {
            title: 'Boil and peel the quail eggs',
            description: 'If using fresh quail eggs, bring a pot of water to a full boil. Lower the eggs carefully into the water using a spoon. Boil for exactly 4 minutes. Transfer immediately to a bowl of ice water for 5 minutes. Crack and peel — quail eggs peel more easily when fully cold. The white should be completely set and the yolk slightly jammy in the center. Pre-boiled quail eggs from a jar (available at Asian grocers) work perfectly and save 15 minutes.',
            tip: 'The 4-minute boil produces a slightly jammy yolk that is richer than a fully hard-boiled egg. For fully set yolks, boil 5 minutes. Both work in this dish, but the jammy version has better texture.',
        },
        {
            title: 'Fry the boiled eggs until golden',
            description: 'Pat the peeled quail eggs completely dry with paper towels — wet eggs cause violent oil splatter. Heat oil in a wok or pan over medium-high heat until shimmering. Add the quail eggs carefully. Roll them gently in the oil, turning every 30 seconds, until a thin golden skin forms on the surface — about 2-3 minutes total. They should be evenly golden, not brown. Remove and drain on paper towels.',
            tip: 'Frying the pre-boiled eggs creates a thin skin that provides texture contrast with the sauce — without this step the sauce simply coats smooth egg white, which is less interesting to eat.',
        },
        {
            title: 'Build the sweet and sour sauce',
            description: 'Heat oil in the same wok over medium heat. Fry minced shallots and garlic for 2 minutes until softened. Add chopped tomatoes and cook for 4-5 minutes, pressing down with a spatula, until they break down into a rough sauce. Add pineapple chunks, fish sauce, sugar, rice vinegar, and water. Simmer for 3 minutes until the pineapple softens slightly and the sauce comes together.',
            tip: 'Cooking the tomatoes down properly before adding the other sauce elements produces a richer, more cohesive sauce. Tomatoes added and immediately combined with everything else produce a thin, watery result.',
        },
        {
            title: 'Thicken the sauce',
            description: 'Taste the sauce — it should taste bright, sweet-sour, and savory with the fish sauce umami clear but not dominant. Adjust: more sugar if too sharp, more fish sauce if flat, more vinegar if not acidic enough. Stir the cornstarch slurry and add to the simmering sauce. Cook for 1-2 minutes until the sauce thickens enough to coat a spoon and has a slight gloss.',
            tip: 'The sauce should be thick enough to cling to the round eggs when tossed — too thin and it pools in the plate; too thick and it forms a gummy coating. The consistency of a light gravy is correct.',
        },
        {
            title: 'Add eggs and toss',
            description: 'Add the fried quail eggs to the sauce. Toss gently to coat every egg completely. Add the sliced chili. Cook for 1 minute more — just enough to warm the eggs through and let the sauce adhere to the golden surface. The eggs should be completely coated in the glossy orange-red sauce.',
            tip: 'Toss gently — quail eggs are small and the fried skin can break if handled too roughly. A wok spatula that scoops rather than stabs is ideal.',
        },
        {
            title: 'Plate and serve',
            description: 'Transfer to a serving plate. Scatter spring onion, extra chili, and cilantro over the top. Serve immediately with steamed jasmine rice. Trứng cút sốt chua ngọt is a shared dish — the small quail eggs make natural individual portions that each diner can take 5-6 of alongside rice. The sauce dripping from the eggs onto the rice is the point.',
            tip: 'This dish is best served fresh and hot. The fried skin on the eggs softens as it sits in the sauce — ideally eaten within 15 minutes of finishing. If making ahead, fry the eggs and make the sauce separately, then combine and heat together just before serving.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}