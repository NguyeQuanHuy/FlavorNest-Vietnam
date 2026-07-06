'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cua-hoang-de',
    title: 'Steamed King Crab',
    subtitle: 'Cua Hoang De — whole king crab steamed over lemongrass and ginger, served with salted egg butter dipping sauce.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85',
    intro: 'King crab — cua hoang de — is the most prized crab in Vietnamese coastal cooking. The legs are thick, the meat is sweet and dense, and the shell turns a deep orange-red when cooked. The Vietnamese approach is to steam it simply over aromatics so nothing interferes with the natural flavour of the crab. The dipping sauce is the only place where complexity is permitted.',
    ingredientSections: [
        {
            title: 'Crab',
            items: [
                { amount: 1.5, unit: 'kg', name: 'king crab', note: 'live or freshly killed, cleaned' },
                { amount: 3, name: 'lemongrass stalks', note: 'bruised' },
                { amount: 5, name: 'ginger slices', note: 'thick' },
                { amount: 2, unit: 'tbsp', name: 'Shaoxing rice wine', note: 'or dry sherry' },
            ],
        },
        {
            title: 'Salted egg butter sauce',
            items: [
                { amount: 3, name: 'salted duck egg yolks', note: 'steamed and mashed' },
                { amount: 60, unit: 'g', name: 'unsalted butter' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'bird eye chillies', note: 'sliced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 4, name: 'curry leaves', note: 'optional but recommended' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the crab',
            description: 'Clean the crab under cold running water. Remove the top shell, gills, and apron. Chop into sections through the joints. Crack the claws lightly with the back of a knife so the sauce can penetrate.',
            tip: 'Ask your fishmonger to clean and crack the crab if you prefer. Live crab gives the sweetest flavour.',
        },
        {
            title: 'Set up the steamer',
            description: 'Fill a wok or large pot with 5cm of water. Add lemongrass, ginger slices, and rice wine. Bring to a rolling boil.',
        },
        {
            title: 'Steam the crab',
            description: 'Arrange crab pieces in a single layer on the steaming rack, shell side down. Cover tightly and steam for 12 to 15 minutes until the shell is bright orange and the meat is opaque throughout.',
            tip: 'Do not lift the lid during steaming. Every opening drops the temperature and adds 2 minutes to the cook time.',
        },
        {
            title: 'Make the salted egg butter sauce',
            description: 'While the crab steams, melt butter in a small pan over medium heat. Add garlic and fry 1 minute until fragrant. Add curry leaves and chilli, toss 30 seconds. Add mashed salted egg yolks, fish sauce, and sugar. Stir until the sauce foams and turns golden, about 2 minutes.',
            tip: 'The salted egg yolks should foam in the butter — this is the texture you want. Keep the heat medium, not high.',
        },
        {
            title: 'Serve',
            description: 'Arrange the crab on a large plate or serve directly from the steamer. Pour the salted egg butter sauce over the top or serve in a small bowl alongside. Eat immediately with steamed jasmine rice and wet towels.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
