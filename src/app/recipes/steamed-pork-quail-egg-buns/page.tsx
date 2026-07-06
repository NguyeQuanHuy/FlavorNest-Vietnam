'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'steamed-pork-quail-egg-buns',
    title: 'Vietnamese Steamed Pork and Quail Egg Buns',
    subtitle: 'Pillowy milk-dough buns filled with seasoned pork, wood ear mushrooms, and a whole quail egg at the center — the Vietnamese breakfast standard, reimagined at home.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '2 hrs 30 min',
    rating: 4.8,
    baseServings: 6,
    heroImage: '/images/recipes/steamed-pork-quail-egg-buns.jpg',
    intro: 'Bánh bao is Vietnam\'s answer to the Chinese baozi — softened and sweetened to match the Vietnamese palate. You\'ll find it at every bus station, school gate, and morning market, steamed in tall bamboo towers. Each region has its preference: Hanoi versions are meatier, Saigon versions sweeter, homemade versions always better than either.',
    ingredientSections: [
        {
            title: 'For the dough',
            items: [
                { amount: 500, unit: 'g', name: 'all-purpose flour', note: 'bánh bao flour from Asian grocer is best' },
                { amount: 7, unit: 'g', name: 'instant yeast' },
                { amount: 60, unit: 'g', name: 'sugar' },
                { amount: 250, unit: 'ml', name: 'whole milk', note: 'warm, 40°C / 104°F' },
                { amount: 30, unit: 'ml', name: 'neutral oil' },
                { amount: 1, unit: 'tsp', name: 'baking powder' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'white vinegar', note: 'keeps dough snow-white' },
            ],
        },
        {
            title: 'For the filling',
            items: [
                { amount: 400, unit: 'g', name: 'ground pork', note: '80% lean / 20% fat' },
                { amount: 15, unit: 'g', name: 'dried wood ear mushrooms', note: 'soaked 20 min, minced' },
                { amount: 30, unit: 'g', name: 'dried glass noodles', note: 'soaked 10 min, cut 2 cm' },
                { amount: 0.5, name: 'yellow onion, finely diced' },
                { amount: 2, name: 'shallots, minced' },
                { amount: 3, name: 'garlic cloves, minced' },
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'Centerpieces',
            items: [
                { amount: 12, name: 'quail eggs, hard-boiled and peeled', note: 'boil 4 min, then ice bath' },
                { amount: 2, name: 'Chinese sausage links, diced small', note: 'optional' },
                { amount: 12, name: 'parchment paper squares (8x8 cm)' },
            ],
        },
    ],
    steps: [
        {
            title: 'Activate the yeast',
            description: 'Warm the milk to 40°C — it should feel like warm bath water, never hot. Stir in sugar and instant yeast. Let sit 10 minutes until foamy. If nothing happens, your yeast is dead — start over.',
            tip: 'Milk too hot kills yeast. Too cold won\'t activate it. No thermometer? Dip a clean finger in — it should feel barely warm.',
        },
        {
            title: 'Make the dough',
            description: 'Whisk flour, baking powder, and salt in a large bowl. Pour in the yeast mixture, oil, and vinegar. Stir until a shaggy dough forms. Knead on a clean surface for 10-12 minutes until smooth, elastic, and no longer sticky.',
        },
        {
            title: 'First proof',
            description: 'Place dough in a lightly oiled bowl, cover with a damp cloth. Let rise in a warm spot until doubled — about 1 hour. Test: poke with a floured finger. If the indent springs back slowly, it\'s ready.',
        },
        {
            title: 'Make the filling',
            description: 'Combine ground pork with fish sauce, oyster sauce, sugar, white pepper, and sesame oil. Mix in one direction only for 2 minutes until sticky. Fold in mushrooms, glass noodles, onion, shallots, garlic, and Chinese sausage if using.',
            tip: 'Always mix ground meat in ONE direction only. This aligns proteins and keeps the filling juicy and cohesive.',
        },
        {
            title: 'Shape the buns',
            description: 'Punch down dough and divide into 12 pieces (~65 g each). Flatten each into a 12 cm circle — thicker center, thinner edges. Add 2 tbsp filling and a quail egg. Gather edges up, pleat, and pinch to seal. Place on parchment squares pinched-side up.',
            tip: 'If dough tears, your filling is too wet or you\'re using too much. Use slightly less while learning.',
        },
        {
            title: 'Second proof',
            description: 'Arrange buns on a tray, cover loosely, and rest 20 minutes. They should look slightly puffy but not doubled.',
        },
        {
            title: 'Steam',
            description: 'Bring steamer to a rolling boil, then reduce to medium. Space buns at least 3 cm apart. Wrap lid in a kitchen towel to catch condensation. Steam exactly 15 minutes — do NOT lift the lid.',
            tip: 'The towel trick is critical. Condensation drops leave yellow spots on snow-white buns.',
        },
        {
            title: 'Rest and serve',
            description: 'Turn off heat. Let buns rest in covered steamer 3 more minutes — this prevents collapsing. Lift lid slowly. Serve warm with soy sauce and sliced chili on the side.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
