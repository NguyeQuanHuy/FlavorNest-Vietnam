'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-dau',
    title: 'Vietnamese Sweet Bean Soup',
    subtitle: 'A bowl of quiet comfort — slow-cooked mung beans in lightly sweetened broth, finished with coconut cream.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.6,
    baseServings: 4,
    heroImage:
        'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1600&q=85',
    intro:
        'Chè đậu xanh is the dessert Vietnamese grandmothers make when someone is unwell, tired, or simply needs feeding. It is not showy. A pot of split mung beans simmered until soft, sweetened with rock sugar, perfumed with pandan, and finished with a pour of salted coconut cream. The whole thing comes together in under an hour and costs almost nothing. Its power is entirely in its simplicity — clean, warm, and deeply satisfying in the way only honest food can be.',
    ingredientSections: [
        {
            title: 'Bean soup',
            items: [
                { amount: 200, unit: 'g', name: 'split mung beans (đậu xanh cà)', note: 'soaked 1 hr' },
                { amount: 800, unit: 'ml', name: 'water' },
                { amount: 3, name: 'pandan leaves', note: 'tied in a knot' },
                { amount: 80, unit: 'g', name: 'rock sugar (đường phèn)', note: 'or caster sugar' },
                { amount: 1, name: 'pinch of salt' },
            ],
        },
        {
            title: 'Coconut cream topping',
            items: [
                { amount: 150, unit: 'ml', name: 'coconut cream', note: 'full-fat' },
                { amount: 1, unit: 'tbsp', name: 'caster sugar' },
                { amount: 1, name: 'pinch of salt' },
                { amount: 1, unit: 'tsp', name: 'tapioca starch', note: 'mixed with 1 tbsp cold water' },
            ],
        },
    ],
    steps: [
        {
            title: 'Cook the beans',
            description:
                'Drain soaked mung beans and combine with water and pandan leaves in a saucepan. Bring to a boil, skim off any foam, then reduce to a gentle simmer. Cook uncovered for 30–35 minutes until beans are completely soft and beginning to break down at the edges. The broth should be pale yellow and lightly thickened.',
            tip: 'Do not add sugar while the beans cook — sugar added too early toughens the skins and prevents the beans from softening.',
        },
        {
            title: 'Sweeten the broth',
            description:
                'Remove pandan leaves. Add rock sugar and salt, stirring until fully dissolved. Taste and adjust — chè đậu should be gently sweet, not cloying. Simmer for a further 5 minutes. The consistency should be soupy but with body — thicker than water, thinner than porridge.',
        },
        {
            title: 'Make the coconut topping',
            description:
                'Warm coconut cream, sugar, and salt in a small saucepan over low heat. Stir in the tapioca starch slurry and cook for 2–3 minutes, stirring constantly, until slightly thickened and glossy. Remove from heat.',
            tip: 'The tapioca starch gives the coconut topping a silky body that floats beautifully on the bean soup rather than sinking in.',
        },
        {
    title: 'Serve',
    description: `Ladle warm che into bowls. Spoon coconut cream topping over the surface. Do not stir. Serve warm in cool weather, or over crushed ice in summer. The coconut cream stays on top until the last spoonful.`,
        },
