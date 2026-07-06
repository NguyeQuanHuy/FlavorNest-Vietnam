'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-ngao-mong-toi',
    title: 'Canh Ngao Mồng Tơi (Clam and Malabar Spinach Soup)',
    subtitle: 'A Vietnamese summer soup of clams opened in white wine and ginger, their briny liquor forming the broth, with mồng tơi — Malabar spinach — added at the last moment for its silky, slightly mucilaginous texture. Ready in 20 minutes.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/canh-ngao-mong-toi.jpg',
    intro: `Canh ngao mồng tơi is a Vietnamese summer soup built on the principle that the best broths are the ones you do not have to make separately — the clams make their own. When live clams open over heat, they release a liquor that is simultaneously salty, sweet, and oceanic — a natural stock that no home cook can replicate by other means. The technique is fast and requires almost no cooking skill: the clams open in minutes, their liquid becomes the broth, and the mồng tơi (Malabar spinach, also called rau mồng tơi) is added only at the end because it wilts in under two minutes and its particular quality — the slightly mucilaginous, silky texture that thickens the broth slightly — is lost if cooked longer. The result is a soup that tastes far more complex than its 25-minute preparation suggests. Canh ngao mồng tơi is a hot-weather soup — light, briny, slightly cooling from the Malabar spinach — eaten at the midday meal throughout the summer months in northern and central Vietnam.`,
    ingredientSections: [
        {
            title: 'Main',
            items: [
                { amount: 800, unit: 'g', name: 'live clams (ngao / nghêu)', note: 'small to medium size. Must be live — tap each clam; any that do not close are dead and must be discarded. Rinse under cold water.' },
                { amount: 200, unit: 'g', name: 'mồng tơi (Malabar spinach / rau mồng tơi)', note: 'leaves and tender stems. Vietnamese or Asian grocery. Substitute: regular spinach (different texture, similar concept).' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 4, name: 'shallots', note: 'thinly sliced' },
                { amount: 3, name: 'garlic cloves', note: 'thinly sliced' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, lightly smashed' },
                { amount: 100, unit: 'ml', name: 'dry white wine or rice wine', note: 'optional — helps the clams open and adds depth. Plain water is the traditional version.' },
                { amount: 400, unit: 'ml', name: 'water' },
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce', note: 'the clam liquor is already salty — season carefully' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 1, name: 'fresh red chili, sliced', note: 'optional' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Purge the clams',
            description: 'Rinse the clams under cold water. Place in a large bowl of cold, lightly salted water (1 teaspoon salt per liter) for 30 minutes — this encourages the clams to expel any sand they are holding. Drain and rinse again. Tap each clam firmly on the counter — any that do not close within 30 seconds are dead and must be discarded without exception.',
            tip: 'The purging step is what separates gritty clam soup from clean clam soup. Skipping it produces a broth full of sand. 30 minutes in salted water is the minimum.',
        },
        {
            title: 'Sauté the aromatics',
            description: 'Heat oil in a wide pot over medium-high heat. Add sliced shallots and sauté for 2 minutes until softened and beginning to color. Add garlic and ginger, cook 30 seconds until fragrant. The aromatic base should smell sweet and sharp before the clams go in.',
            tip: 'Do not brown the shallots — golden is fine, dark brown means the soup will be bitter. Medium-high heat, constant attention.',
        },
        {
            title: 'Open the clams',
            description: 'Add the rinsed clams to the pot. Pour in the wine if using and water. Cover tightly and increase to high heat. After 3-4 minutes, open the lid — most clams should have opened. Those that have opened are done; those still closed need another minute. After 5 minutes total, discard any clams that have not opened — they were dead before cooking.',
            tip: 'Remove clams as they open rather than cooking all until done — the first ones to open will be overcooked by the time the last ones open. Work in batches with a slotted spoon if the clams are opening unevenly.',
        },
        {
            title: 'Build the broth',
            description: 'The liquid in the pot is the clam broth — taste it before adding anything else. It will be intensely savory and briny from the clam liquor. Season with fish sauce cautiously (it may need very little), sugar, and white pepper. If the broth tastes too salty, add more water. The natural clam liquid does most of the seasoning work.',
            tip: 'Taste before seasoning is the most important step. Clam liquor varies in saltiness — sometimes fish sauce is barely needed, sometimes more. Never season without tasting first.',
        },
        {
            title: 'Add mồng tơi at the last moment',
            description: 'Bring the seasoned broth to a full boil. Add the mồng tơi leaves and tender stems. Stir once. Cook for exactly 90 seconds — no more. The leaves wilt, release their slightly viscous character into the broth, and turn a deep green. Overcooked mồng tơi becomes slimy rather than silky and loses its color. Remove from heat immediately.',
            tip: 'Mồng tơi releases a natural mucilage that slightly thickens the broth — this is a quality, not a flaw. It is what makes this soup different from a plain clam broth and gives it body without any starch.',
        },
        {
            title: 'Serve immediately',
            description: 'Ladle the soup into bowls, distributing the clams evenly. Scatter sliced spring onion, cilantro, and fresh chili over the top. Serve with lime wedges and steamed rice alongside. Canh ngao mồng tơi must be served and eaten immediately — the mồng tơi continues to soften from residual heat and the clams toughen if kept warm for more than a few minutes.',
            tip: 'The correct way to eat this soup: a spoonful of broth first to appreciate its clean brininess, then a clam pulled from the shell with chopsticks, dipped briefly in the lime-fish sauce if desired.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
