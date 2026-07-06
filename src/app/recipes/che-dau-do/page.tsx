'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-dau-do',
    title: 'Chè Đậu Đỏ (Vietnamese Red Bean Sweet Soup)',
    subtitle: 'The gentle, barely-sweet dessert soup that Vietnamese families have eaten after dinner for generations — soft red beans in a clear syrup fragrant with pandan, served warm or chilled with coconut milk.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '1 hr 30 min',
    rating: 4.7,
    baseServings: 6,
    heroImage: '/images/recipes/che-dau-do.jpg',
    intro: `Chè is the Vietnamese category of sweet soups and puddings — a range of desserts that Western food culture has no direct equivalent for. They are not soups in the savory sense, not puddings in the thick Western sense, but something specifically Vietnamese: a liquid dessert, lightly sweet, often warm, eaten from a glass or bowl with a spoon. Chè đậu đỏ — red bean sweet soup — is one of the most fundamental. Small red beans (adzuki or Vietnamese đậu đỏ) cooked until completely tender in water, sweetened with rock sugar, fragrant with pandan, finished with coconut cream. It is eaten warm in winter, cold in summer, and in between throughout the year. The flavor is clean and mild — Vietnamese desserts are never aggressively sweet, and chè đậu đỏ exemplifies this restraint. The pleasure is in the texture of the perfectly cooked beans, the fragrance of pandan, and the richness that the coconut cream adds without overwhelming.`,
    ingredientSections: [
        {
            title: 'Red bean soup',
            items: [
                { amount: 300, unit: 'g', name: 'small red beans (đậu đỏ / adzuki beans)', note: 'soaked overnight in cold water' },
                { amount: 1.5, unit: 'L', name: 'water' },
                { amount: 120, unit: 'g', name: 'rock sugar (đường phèn)', note: 'adjust to taste — Vietnamese chè is subtly sweet, not aggressively so' },
                { amount: 3, name: 'pandan leaves', note: 'knotted — fresh or frozen. The defining aromatic.' },
                { amount: 0.25, unit: 'tsp', name: 'salt', note: 'a pinch enhances sweetness' },
            ],
        },
        {
            title: 'Coconut cream finish',
            items: [
                { amount: 200, unit: 'ml', name: 'coconut cream (nước cốt dừa)', note: 'full-fat, not coconut milk — the thick first press' },
                { amount: 0.25, unit: 'tsp', name: 'salt', note: 'salted coconut cream is a Vietnamese technique — the contrast elevates both elements' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'tapioca starch', note: 'mixed with 1 tbsp cold water — thickens the coconut cream slightly' },
            ],
        },
    ],
    steps: [
        {
            title: 'Soak the beans overnight',
            description: 'Rinse the red beans and soak in cold water overnight — minimum 8 hours. The beans will expand to roughly double their size. Soaking is essential: un-soaked beans take 2-3 hours to cook through; soaked beans cook evenly in 45-60 minutes.',
            tip: 'If you forgot to soak overnight: cover beans with boiling water and soak for 2 hours. Not as good as overnight soaking but acceptable.',
        },
        {
            title: 'Cook the beans until completely tender',
            description: 'Drain the soaked beans. Place in a pot with 1.5L fresh cold water and the knotted pandan leaves. Bring to a boil, then reduce to a steady simmer. Cook for 45-60 minutes until the beans are completely tender — they should crush easily between two fingers with no resistance at all. Any firmness means they need more time.',
            tip: 'Do not add sugar until the beans are fully cooked — sugar added to cooking beans toughens the skin and prevents them from becoming fully tender.',
        },
        {
            title: 'Sweeten with rock sugar',
            description: 'Once the beans are completely tender, add the rock sugar and salt. Stir until fully dissolved. Taste and adjust — add more rock sugar if you want it sweeter, but remember that Vietnamese chè is subtly sweet. Remove the pandan leaves. The soup at this stage should be a light amber-gold color with whole, tender beans sitting in a fragrant clear syrup.',
            tip: 'Rock sugar produces a cleaner, rounder sweetness than granulated sugar. If substituting with white sugar, use about 75% of the rock sugar amount.',
        },
        {
            title: 'Prepare the salted coconut cream',
            description: 'In a small saucepan, combine coconut cream, salt, and sugar. Warm over medium-low heat — do not boil. Mix tapioca starch with 1 tablespoon cold water until smooth, add to the warming coconut cream, and stir until slightly thickened — about 2 minutes. Remove from heat. The salted coconut cream should be warm, slightly viscous, and taste sweet-salty-rich.',
            tip: 'The salt in the coconut cream is the key technique. It creates a contrast with the sweet soup that makes both elements more interesting than either would be alone.',
        },
        {
            title: 'Serve warm or chilled',
            description: 'Ladle warm chè đậu đỏ into glasses or bowls. Spoon salted coconut cream over the top — it will float on the surface and slowly sink as you eat, mixing naturally. Serve warm for winter; refrigerate the soup and cream separately for 2 hours and serve cold for summer. Do not mix the coconut cream into the soup — it is spooned over the top at the table and mixed by the diner.',
            tip: 'Cold chè đậu đỏ over crushed ice is the version eaten from street vendors in southern Vietnam — add a few tablespoons of crushed ice for the authentic summer experience.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}