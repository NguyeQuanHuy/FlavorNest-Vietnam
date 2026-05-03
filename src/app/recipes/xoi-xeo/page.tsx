'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'xoi-xeo',
    title: 'Golden Sticky Rice with Mung Bean',
    subtitle: 'Xoi xeo — the breakfast of Hanoi streets, golden with turmeric and fragrant with fried shallots.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/xoi-xeo.jpg',
    intro: 'Xoi xeo is sold from early morning by vendors carrying wooden crates through Hanoi alleys, each portion wrapped in a banana leaf square. The sticky rice is dyed golden with turmeric, steamed until glossy, and topped with a thick layer of steamed split mung bean paste and a generous shower of crispy fried shallots. A drizzle of shallot-infused oil brings everything together. It is simultaneously a breakfast, a snack, a comfort food, and a cultural artefact.',
    ingredientSections: [
        {
            title: 'Sticky rice',
            items: [
                { amount: 400, unit: 'g', name: 'glutinous rice', note: 'soaked overnight' },
                { amount: 1, unit: 'tsp', name: 'ground turmeric' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 2, unit: 'tbsp', name: 'vegetable oil' },
            ],
        },
        {
            title: 'Mung bean topping',
            items: [
                { amount: 150, unit: 'g', name: 'split mung beans', note: 'soaked 1 hr, steamed until soft' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Shallot oil and garnish',
            items: [
                { amount: 5, name: 'shallots', note: 'thinly sliced' },
                { amount: 80, unit: 'ml', name: 'vegetable oil' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the sticky rice',
            description: 'Drain soaked glutinous rice. Toss with turmeric, salt, and oil until evenly coated — the rice should turn a uniform golden yellow. Steam in a bamboo steamer or steamer basket over boiling water for 25 to 30 minutes, stirring once halfway, until grains are fully translucent and sticky.',
        },
        {
            title: 'Prepare the mung bean',
            description: 'Steam soaked mung beans for 20 minutes until completely soft. While hot, mash with salt and sugar into a smooth, cohesive paste. It should hold its shape when pressed.',
        },
        {
            title: 'Make the shallot oil',
            description: 'Heat oil in a small saucepan over medium heat. Add sliced shallots and cook slowly, stirring occasionally, for 8 to 12 minutes until deep golden and crispy. Watch carefully — they go from golden to burnt in seconds. Remove shallots with a slotted spoon and drain on paper towels. Reserve the fragrant oil.',
            tip: 'The shallot oil is as important as the shallots themselves. Save every drop — it gets drizzled over the finished rice.',
        },
        {
            title: 'Assemble',
            description: 'Mound hot sticky rice onto plates or banana leaves. Press a generous layer of mung bean paste over the surface. Top with crispy fried shallots and drizzle shallot oil over everything. Serve immediately — xoi xeo is best eaten warm.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
