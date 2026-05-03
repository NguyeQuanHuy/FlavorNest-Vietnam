'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-thit-nuong',
    title: 'Grilled Pork Vermicelli Bowl',
    subtitle: 'Room temperature, no soup, pure Saigon energy.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/bun-thit-nuong.jpg',
    intro: `Bun thit nuong is Saigon's definitive weekday lunch. Unlike pho or bun bo Hue, there is no broth to babysit, no bones to simmer for hours. Cold rice vermicelli, chargrilled lemongrass pork, a crispy spring roll cut in half, crushed peanuts, pickled vegetables, fresh mint, bean sprouts, and a flood of nuoc cham poured over everything at the table. You mix it yourself. It is bright, textural, and satisfying in a way that feels effortless.`,
    ingredientSections: [
        {
            title: 'Grilled pork (thit nuong)',
            items: [
                { amount: 500, unit: 'g', name: 'pork shoulder', note: 'thinly sliced, about 3mm' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'honey' },
                { amount: 2, name: 'lemongrass stalks', note: 'white part only, minced' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tbsp', name: 'vegetable oil' },
            ],
        },
        {
            title: 'Bowl components',
            items: [
                { amount: 400, unit: 'g', name: 'dried rice vermicelli (bun)', note: 'cooked, cooled to room temperature' },
                { amount: 4, name: 'fried spring rolls (cha gio)', note: 'store-bought or homemade, halved' },
                { amount: 100, unit: 'g', name: 'bean sprouts' },
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 1, name: 'bunch Vietnamese mint and perilla' },
                { amount: 1, name: 'cucumber', note: 'julienned' },
                { amount: 60, unit: 'g', name: 'pickled carrot and daikon (do chua)' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots' },
            ],
        },
        {
            title: 'Nuoc cham',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'warm water' },
                { amount: 2, unit: 'tbsp', name: 'lime juice' },
                { amount: 1, name: 'garlic clove', note: 'minced' },
                { amount: 1, name: 'red chilli', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the pork',
            description: 'Combine fish sauce, sugar, honey, lemongrass, garlic, oyster sauce, and oil. Add thinly sliced pork and marinate for at least 30 minutes. The sugar will help caramelise the pork on the grill.',
        },
        {
            title: 'Make nuoc cham',
            description: 'Dissolve sugar in warm water. Add fish sauce, lime juice, garlic, and chilli. Taste and adjust balance. It should be assertively flavoured — this sauce will season the entire bowl.',
        },
        {
            title: 'Grill the pork',
            description: 'Grill pork slices over high heat or in a very hot cast iron pan for 2 minutes per side until caramelised and slightly charred. The thin slices cook fast — do not overcrowd the pan.',
            tip: 'Thread pork slices onto bamboo skewers before grilling for easier handling and better char.',
        },
        {
            title: 'Assemble the bowl',
            description: 'Place room-temperature vermicelli in bowls. Arrange grilled pork, halved spring rolls, bean sprouts, cucumber, and herbs on top. Add pickled vegetables and fried shallots. Scatter crushed peanuts generously over everything.',
        },
        {
            title: 'Dress and serve',
            description: 'Pour a generous amount of nuoc cham over the bowl — more than feels comfortable. Mix everything together at the table before eating. Every forkful should have noodle, pork, herb, and sauce.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
