'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cua-ca-mau',
    title: 'Ca Mau Mud Crab Stir-Fry',
    subtitle: 'Cua Ca Mau Rang Me — the famous Ca Mau mud crab stir-fried in tamarind, fish sauce caramel and fragrant aromatics.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: 'https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85',
    intro: 'Ca Mau province at the southernmost tip of Vietnam produces what many Vietnamese consider the finest mud crab in the country. The Ca Mau mangrove ecosystem — a maze of brackish channels and tidal flats — produces crabs with extraordinarily sweet, dense flesh. The classic preparation is rang me — stir-fried in tamarind — where the sourness of tamarind, the sweetness of palm sugar, and the saltiness of fish sauce create a glaze that is more complex than any single ingredient suggests.',
    ingredientSections: [
        {
            title: 'Crab',
            items: [
                { amount: 1.2, unit: 'kg', name: 'Ca Mau mud crab', note: 'or any live mud crab, cleaned and chopped' },
                { amount: 3, unit: 'tbsp', name: 'cornstarch', note: 'for coating' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'for frying' },
            ],
        },
        {
            title: 'Tamarind sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'tamarind paste', note: 'from block, soaked and strained' },
                { amount: 2, unit: 'tbsp', name: 'palm sugar', note: 'or light brown sugar' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 60, unit: 'ml', name: 'water' },
            ],
        },
        {
            title: 'Aromatics',
            items: [
                { amount: 6, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'sliced' },
                { amount: 2, name: 'bird eye chillies', note: 'sliced' },
                { amount: 2, name: 'spring onions', note: 'cut into 3cm lengths' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the crab',
            description: 'Clean the crab, remove gills and apron, chop into pieces through the joints. Pat dry thoroughly with paper towels. Dust lightly with cornstarch — this helps the sauce cling to the shell.',
        },
        {
            title: 'Mix the sauce',
            description: 'Combine tamarind paste, palm sugar, fish sauce, oyster sauce, and water in a bowl. Stir until the sugar dissolves. Taste — it should be a balance of sour, sweet, and salty, slightly on the sour side at this stage.',
            tip: 'The sauce will concentrate during cooking, so slightly sour now is correct.',
        },
        {
            title: 'Fry the crab',
            description: 'Heat 3 tbsp oil in a wok over very high heat until smoking. Add crab pieces in batches, shell side down. Fry 3 to 4 minutes until the shell chars slightly and turns red. Do not crowd the wok.',
            tip: 'High heat is essential here. The slight char on the shell adds a smoky depth that defines the dish.',
        },
        {
            title: 'Build the stir-fry',
            description: 'Push crab to the side. Add remaining oil, then garlic, shallots, and chilli. Fry 1 minute until golden. Return crab to the center of the wok.',
        },
        {
            title: 'Add the sauce and glaze',
            description: 'Pour tamarind sauce over the crab. Toss everything together over high heat. Cook 3 to 4 minutes, tossing constantly, until the sauce reduces to a sticky glaze that coats every piece of shell.',
            tip: 'The glaze is ready when the sauce no longer runs freely in the wok and each piece of crab looks lacquered.',
        },
        {
            title: 'Finish and serve',
            description: 'Add spring onions, toss once more, and transfer immediately to a serving plate. Eat with Vietnamese baguette or steamed rice to mop up the sauce.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
