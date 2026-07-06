'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'sam-bo-luong',
    title: 'Mixed Sweet Soup',
    subtitle: 'Sam bo luong — a Cantonese-Vietnamese cooling tonic of lotus seeds, longan, white fungus and sea coconut.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/sam-bo-luong.jpg',
    intro: 'Sam bo luong is the drink Vietnamese families turn to when the body "runs hot" — too much sun, too much spicy food, too many fried things at a wedding. A medicinal Cantonese-Vietnamese tonic, it combines lotus seeds, dried longan, white wood ear fungus, dried jujube, pearl barley, sea coconut and seaweed in a faintly sweet rock-sugar broth, served chilled with shaved ice. Each ingredient has a traditional cooling property; together they make a drink that is genuinely refreshing, surprisingly herbal, and unlike anything in Western beverage culture.',
    ingredientSections: [
        {
            title: 'Soak overnight',
            items: [
                { amount: 50, unit: 'g', name: 'dried lotus seeds', note: 'core removed' },
                { amount: 30, unit: 'g', name: 'pearl barley', note: 'y di in Vietnamese' },
                { amount: 20, unit: 'g', name: 'dried white fungus (white wood ear)' },
                { amount: 15, unit: 'g', name: 'dried seaweed (pho tai)' },
            ],
        },
        {
            title: 'Sweet broth',
            items: [
                { amount: 2, unit: 'L', name: 'water' },
                { amount: 100, unit: 'g', name: 'rock sugar', note: 'adjust to taste' },
                { amount: 4, name: 'fresh pandan leaves', note: 'tied in a knot' },
                { amount: 30, unit: 'g', name: 'dried longan flesh', note: 'no soaking needed' },
                { amount: 8, name: 'dried jujubes (red dates)', note: 'pitted' },
            ],
        },
        {
            title: 'Finishing additions',
            items: [
                { amount: 200, unit: 'g', name: 'sea coconut', note: 'jarred, drained, sliced' },
                { amount: 100, unit: 'g', name: 'fresh longan or canned longan', note: 'optional' },
                { amount: 1, unit: 'cup', name: 'shaved ice or crushed ice', note: 'per serving' },
            ],
        },
    ],
    steps: [
        {
            title: 'Soak the dried ingredients overnight',
            description: 'Place lotus seeds, pearl barley, white fungus and seaweed in separate bowls of cold water. Soak overnight. The lotus seeds and barley should soften; the white fungus should expand to 3 times its size. Drain and rinse all.',
            tip: 'White fungus that does not expand has gone stale. Buy from an Asian grocer with high turnover.',
        },
        {
            title: 'Tear the white fungus',
            description: 'Trim off any hard yellow stems from the white fungus. Tear the rehydrated cluster into bite-sized pieces. The texture should be crunchy-jelly, slightly chewy.',
        },
        {
            title: 'Simmer the lotus seeds and barley',
            description: 'In a large pot, combine 2L of water with the soaked lotus seeds and pearl barley. Bring to a simmer and cook for 30 minutes until the seeds are tender and the barley has plumped fully.',
        },
        {
            title: 'Add the rest',
            description: 'Add the white fungus, seaweed, jujubes, longan, pandan leaves and rock sugar. Simmer another 25 minutes until everything is tender and the broth has turned faintly amber from the sugar and dates.',
            tip: 'Taste the broth at this stage. It should be sweetly herbal, not cloying. Add water if too sweet, more sugar if too thin.',
        },
        {
            title: 'Cool and chill',
            description: 'Remove pandan leaves. Stir in the sliced sea coconut and any fresh or canned longan. Cool to room temperature, then refrigerate at least 2 hours — sam bo luong must be served properly cold.',
        },
        {
            title: 'Serve over shaved ice',
            description: 'Ladle into tall glasses. Top each with a generous mound of shaved ice or crushed ice. Serve with a long spoon for chasing the lotus seeds and longan around the glass. The drink should taste cold, faintly sweet, gently herbal — and leave you genuinely cooler than when you started.',
            tip: 'Best on day two, when the flavours have deepened in the fridge. Keeps 4 days refrigerated.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
