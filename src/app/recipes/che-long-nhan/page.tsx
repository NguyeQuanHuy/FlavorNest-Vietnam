'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-long-nhan',
    title: 'Longan and Lotus Seed Soup',
    subtitle: 'Che long nhan — delicate longan fruits stuffed with powdery lotus seeds in a clear rock-sugar syrup. Once a tribute to kings.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '50 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/che-long-nhan.jpg',
    intro: 'Che long nhan is the most aristocratic dessert in the Vietnamese repertoire. In the Hue royal court, peeled longans were stuffed individually with steamed lotus seeds and floated in a crystal-clear rock-sugar syrup — a dessert as much for the eye as for the palate. The lotus seed inside the longan is said to bring peaceful sleep, and the dessert was traditionally served before bed to imperial concubines. The recipe survives unchanged in Hue today, though now eaten in tea houses rather than palaces.',
    ingredientSections: [
        {
            title: 'Lotus seeds',
            items: [
                { amount: 100, unit: 'g', name: 'fresh or dried lotus seeds', note: 'core removed' },
                { amount: 600, unit: 'ml', name: 'water', note: 'for steaming' },
            ],
        },
        {
            title: 'Longans and syrup',
            items: [
                { amount: 500, unit: 'g', name: 'fresh longans', note: 'or canned longan in syrup, drained' },
                { amount: 1, unit: 'L', name: 'water' },
                { amount: 100, unit: 'g', name: 'rock sugar' },
                { amount: 3, name: 'fresh pandan leaves', note: 'tied in a knot' },
                { amount: 1, name: 'small piece of dried tangerine peel', note: 'optional, for fragrance' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, unit: 'cup', name: 'crushed ice', note: 'optional, for summer' },
                { amount: 4, name: 'mint sprigs', note: 'for garnish' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the lotus seeds',
            description: 'If using fresh lotus seeds, push out the green bitter core with a chopstick — this step is non-negotiable, the core is intensely bitter. If using dried, soak in warm water for 1 hour, then remove cores. Steam the seeds for 25 minutes until tender but still holding their shape. Cool.',
            tip: 'Lotus seeds with the core left in will ruin the entire dessert. Check every single one.',
        },
        {
            title: 'Peel and pit the longans',
            description: 'Peel each fresh longan, then carefully cut around the seed and remove it without breaking the flesh. The longan should remain whole with a small cavity where the seed was. If using canned longan, simply drain.',
            tip: 'Fresh longans give a brighter, cleaner flavour. Canned work but taste of syrup.',
        },
        {
            title: 'Stuff each longan',
            description: 'Tuck a steamed lotus seed into the cavity of each longan. The fit should be snug — the longan will hold the seed in place once the cavity closes around it slightly. Set the stuffed longans aside on a plate.',
        },
        {
            title: 'Make the rock sugar syrup',
            description: 'In a clean pot, combine 1L water, rock sugar, pandan leaves and dried tangerine peel if using. Bring to a gentle simmer and cook 10 minutes until the sugar fully dissolves and the syrup is faintly fragrant. Strain to remove the pandan and tangerine peel, leaving a perfectly clear pale syrup.',
            tip: 'The syrup must be crystal clear. Any cloudiness ruins the visual elegance of the dish.',
        },
        {
            title: 'Warm the longans in syrup',
            description: 'Lower the stuffed longans gently into the warm syrup. Heat through for just 3 minutes — long enough for the longans to take on the syrup, short enough that they do not collapse. Off heat. Cool to room temperature, then refrigerate at least 1 hour.',
        },
        {
            title: 'Serve elegantly',
            description: 'Ladle 5 to 6 stuffed longans into each small glass bowl with plenty of clear syrup. Add a few cubes of crushed ice if serving in summer. Garnish with a single mint sprig. Eat one stuffed longan at a time with a small spoon — the sweet flesh and powdery lotus seed are meant to be tasted as a single bite.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}