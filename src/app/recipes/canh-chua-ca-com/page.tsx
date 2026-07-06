'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-chua-ca-com',
    title: 'Canh Chua Cá Cơm (Sour Soup with Fresh Anchovies)',
    subtitle: 'The lightest canh chua in the Vietnamese repertoire — fresh anchovies in a tomato-soured broth with pineapple, spring onion, and fresh dill, where the anchovies cook in under 3 minutes and the entire soup takes 20 minutes from start to table. The central Vietnamese sour soup where the fish is the most delicate and the broth the most clearly itself.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/canh-chua-ca-com.jpg',
    intro: `Canh chua cá cơm is the fresh anchovy sour soup — the lightest, fastest, and most delicate preparation in the canh chua series that has appeared throughout the FlavorNest collection in its Mekong catfish version (canh chua cá trê), its tilapia version (canh chua cá rô phi), and now in this central Vietnamese interpretation with fresh anchovies. The preparation differs from both previous versions in two fundamental ways: the fish itself is the most delicate protein that canh chua can accommodate, cooking through in 2-3 minutes in the simmering broth rather than the 6-10 minutes required for larger fish sections; and the souring agent is primarily tomato rather than tamarind, reflecting the central Vietnamese preference for tomato-sourced acidity in clear soups that also appeared in canh cá chua rau dền. Fresh anchovies (cá cơm tươi) in a sour broth produce a specific result that no other fish achieves in the same preparation: the high oil content of the anchovy enriches the tomato broth with a specific golden-orange color and a marine depth that lighter white fish cannot provide, while the small size of the fish means each mouthful contains a whole anchovy — head, bone, and flesh — that is soft enough to eat completely from the brief cooking in the acid-soured broth. The fresh dill (thì là) used in canh chua cá cơm is the herb that most clearly marks this as central Vietnamese rather than southern — dill appears in central Vietnamese fish cooking in a way it does not appear in the south, where ngò om, rau răm, and bạc hà define the sour soup herb palette. Fresh dill with sour tomato broth and fresh anchovy is the flavor combination that Vietnamese people from Đà Nẵng, Quảng Nam, and Huế associate with home cooking — the specific aromatic signature of the central coastal kitchen at its most honest.`,
    ingredientSections: [
        {
            title: 'Fresh anchovies',
            items: [
                { amount: 400, unit: 'g', name: 'fresh whole anchovies (cá cơm tươi)', note: 'cleaned — guts removed, heads left on. Rinsed and drained. The whole fish is eaten in the soup — head and fine bones softened by the acidic broth.' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for brief marinating' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Central Vietnamese tomato-sour broth',
            items: [
                { amount: 1.2, unit: 'L', name: 'water' },
                { amount: 4, name: 'ripe tomatoes', note: 'two cooked into the broth base, two added fresh near the end' },
                { amount: 3, name: 'shallots', note: 'thinly sliced — fried before the tomato' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for frying shallots and tomato' },
                { amount: 100, unit: 'g', name: 'fresh pineapple', note: 'cut into small wedges — secondary souring, optional but recommended' },
                { amount: 1, unit: 'tbsp', name: 'rice vinegar', note: 'optional — adds the clean central Vietnamese brightness' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Central Vietnamese herbs — the dill difference',
            items: [
                { amount: 1, name: 'large bunch fresh dill (thì là)', note: 'the central Vietnamese herb that marks this version — added raw to each bowl' },
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces — some cooked in the broth, some raw at service' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced' },
            ],
        },
        {
            title: 'Fried shallot oil',
            items: [
                { amount: 4, name: 'shallots', note: 'thinly sliced' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 2, name: 'extra limes' },
                { amount: 2, name: 'fresh red chilies, extra sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the tomato sour broth — 10 minutes',
            description: 'Heat oil in a pot over medium-high heat. Fry sliced shallots until golden — 3 minutes. Add two tomatoes cut into wedges. Cook for 8-10 minutes, pressing down with a spoon until they completely break down into the oil and the liquid turns deep orange-red. Add water and pineapple wedges. Bring to a boil. Add fish sauce, sugar, salt, and optional rice vinegar. The broth should be clearly sour from the tomato, savory, and bright — taste and adjust before the anchovies go in.',
            tip: 'The central Vietnamese tomato-sour broth for canh chua cá cơm is built on the same two-stage tomato technique as canh cá chua rau dền — half the tomatoes cooked into the broth base for depth, half added fresh for texture and brightness. The specific difference from the Mekong version is the absence of tamarind: this is a purely tomato-soured broth, producing a cleaner, brighter acidity that is specifically appropriate for the delicate fresh anchovy.',
        },
        {
            title: 'Add anchovies — 2-3 minutes only',
            description: 'Add the marinated anchovies to the simmering sour broth. Add the remaining fresh tomato wedges and spring onion pieces. Simmer for exactly 2-3 minutes — the anchovies cook through extremely quickly in the hot acidic broth. At 2 minutes, test one anchovy: press gently — it should be firm throughout with no soft center. The flesh should have turned from translucent to opaque white. Remove from heat immediately. Overcooked anchovies in sour soup become mushy and fall apart.',
            tip: 'The 2-3 minute cooking time for fresh anchovies in canh chua is the shortest fish cooking time in the entire canh chua series — shorter than tilapia (6-8 minutes) and catfish (8-10 minutes) because the anchovy is so small that the acidic broth penetrates and cooks it almost immediately on contact. The acid itself begins denaturing the proteins before the heat has fully cooked through, effectively pre-cooking the outermost layer of flesh on contact with the broth.',
        },
        {
            title: 'Make fried shallot oil',
            description: 'Heat oil in a small pan. Fry sliced shallots until golden and beginning to crisp. Keep warm. The fried shallot oil for canh chua cá cơm is poured over the finished soup at the table — the same technique as in all canh chua preparations in the collection. For the anchovy version, the shallot oil quantity is slightly more generous than for other versions, providing the aromatic richness that compensates for the lighter body of the anchovy compared to catfish or tilapia.',
            tip: 'The fried shallot oil as the universal finishing element of all Vietnamese canh chua — from Mekong catfish to northern rau dền to central cá cơm — is the thread that connects all regional canh chua preparations into a single dish family. Everything else differs by region; the shallot oil stays constant.',
        },
        {
            title: 'Add fresh dill and serve',
            description: 'Ladle the soup into individual bowls. Place a generous amount of fresh dill directly in each bowl — the dill is never cooked in the broth, only wilted by the heat of the soup as it is poured over. Pour the fried shallot oil over each bowl. Scatter sliced red chili. The finished canh chua cá cơm: the orange-red tomato broth, the small whole anchovies visible throughout, the bright green dill wilting in the heat, the golden shallot oil on the surface. Serve with lime, steamed rice, and extra chili.',
            tip: 'Fresh dill placed raw in the bowl rather than cooked in the broth is the central Vietnamese technique that preserves its specific feathery texture and volatile anise-adjacent aroma. Cooked dill loses both its texture and most of its aroma within 30 seconds of broth contact; placed raw in the bowl and covered with hot broth, it wilts gently and releases its aroma directly under the nose of the diner. This is the same serve-raw technique used for ngò om in Mekong canh chua — each regional version has its specific fresh herb added at the bowl rather than the pot.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
