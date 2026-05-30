'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-dau-xanh',
    title: 'Cháo Đậu Xanh (Mung Bean Congee)',
    subtitle: 'The congee Vietnamese mothers make when someone is sick, when the weather turns cold, or when the family needs something gentle and restorative. Soft rice and mung beans in a clear, lightly seasoned broth — simple enough to disappear into, nourishing enough to do real work.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/chao-dau-xanh.jpg',
    intro: `Cháo đậu xanh occupies a specific place in Vietnamese domestic life — it is recovery food, comfort food, the thing you make when someone is unwell or exhausted or simply needs something that requires no effort to eat. The combination of rice and mung beans cooked into a thick, silky porridge has been eaten across Southeast Asia for centuries, and Vietnam's version is characterized by its lightness and restraint: a broth that is savory without being heavy, beans that are completely tender without disintegrating, a texture that is thick and coating without being gluey. Eaten with fried shallots and a drizzle of shallot oil, with thin slices of fresh ginger and a squeeze of lime, it transforms from simple to genuinely delicious. This recipe covers both the plain version — the one made for sick children — and the fuller version with toppings, which is a meal in itself.`,
    ingredientSections: [
        {
            title: 'Congee base',
            items: [
                { amount: 150, unit: 'g', name: 'jasmine rice', note: 'rinsed once — the starch is needed for the silky texture' },
                { amount: 100, unit: 'g', name: 'split yellow mung beans (đậu xanh bỏ vỏ)', note: 'soaked 30 minutes in cold water, drained' },
                { amount: 1.5, unit: 'L', name: 'water or light chicken broth', note: 'broth produces more depth; water is the traditional plain version' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 3, name: 'pandan leaves', note: 'knotted — optional but adds a subtle floral note' },
            ],
        },
        {
            title: 'Toppings (essential for the full version)',
            items: [
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 3, unit: 'tbsp', name: 'shallot-infused oil' },
                { amount: 4, name: 'spring onions, thinly sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'peeled and finely julienned — eaten raw alongside' },
                { amount: 1, name: 'fresh red chili, sliced', note: 'optional' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, unit: 'tsp', name: 'white pepper', note: 'freshly ground — the finishing seasoning' },
            ],
        },
    ],
    steps: [
        {
            title: 'Soak the mung beans',
            description: 'Rinse the split yellow mung beans and soak in cold water for 30 minutes. This allows them to cook at the same rate as the rice — un-soaked beans take longer and produce uneven texture. Drain before using.',
            tip: 'Use split hulled mung beans (the yellow ones) — they break down more evenly into the congee than whole green mung beans, which remain too firm.',
        },
        {
            title: 'Start the congee',
            description: 'Combine rinsed rice, soaked mung beans, water or broth, and pandan leaves (if using) in a large pot. Bring to a boil over medium-high heat, stirring once to prevent the rice from sticking to the bottom. Reduce heat to a steady simmer — the surface should show regular movement but not be aggressively bubbling.',
            tip: 'Starting with cold liquid rather than boiling water produces a creamier texture — the rice starch releases gradually as the temperature rises.',
        },
        {
            title: 'Cook and stir regularly',
            description: 'Simmer for 40-50 minutes, stirring every 8-10 minutes to prevent sticking and to encourage the rice and beans to break down. The congee is ready when the rice grains have mostly dissolved into the liquid and the mung beans have softened completely but still hold their shape as small yellow discs. The texture should coat a spoon thickly and flow slowly — not watery, not gluey.',
            tip: 'Stir more frequently in the last 15 minutes when the congee thickens and is more prone to catching on the bottom.',
        },
        {
            title: 'Season',
            description: 'Remove the pandan leaves. Season with fish sauce, salt, and sugar. Taste and adjust. The congee should taste clean and savory — mild enough to be restorative, seasoned enough to be satisfying. For the sick version, season minimally. For the full version, season to full savory depth.',
            tip: 'If the congee thickens too much as it sits, add water or broth in small amounts and stir to incorporate. Congee always thickens as it cools.',
        },
        {
            title: 'Serve with toppings',
            description: 'Ladle hot congee into deep bowls. Drizzle shallot oil generously over the surface. Add sliced spring onion, cilantro, and fried shallots. Place a small pile of julienned raw ginger on the side of each bowl — to be eaten alongside each spoonful, not mixed in. Finish with white pepper, fresh chili, and a squeeze of lime. Serve immediately.',
            tip: 'The raw ginger alongside each spoonful is the technique that transforms cháo đậu xanh from plain porridge to something genuinely good. Do not mix it in — take a small amount with each bite of congee.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}