'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-chua-ca-tre',
    title: 'Canh Chua Cá Trê (Sour Soup with Catfish)',
    subtitle: 'The Mekong Delta sour soup built on tamarind broth with catfish, bạc hà taro stems, bean sprouts, tomato, pineapple, and the specific rau đồng herbs of the delta — ngò om, rau răm, and bông súng water lily stems — that exist in this soup and nowhere else in Vietnamese cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/canh-chua-ca-tre.jpg',
    intro: `Canh chua cá trê is the sour catfish soup of the Mekong Delta — one of the most representative dishes in the culinary canon of the Vietnamese south, and the preparation that most completely expresses the specific abundance of the delta ecosystem in a single bowl. Canh chua (sour soup) appears throughout Vietnam in regional variations, but the Mekong Delta version is the one that Vietnamese food culture considers the definitive expression of the form: the broth is tamarind-soured rather than vinegar-soured as in the north; the fish is cá trê (walking catfish), whose specific fatty flesh contributes to the broth differently from the leaner fish used in coastal versions; and the vegetables are specifically the rau đồng (field and waterway plants) of the delta — bạc hà (taro stems, also called dọc mùng), bông súng (water lily stems and flowers), and ngò om (rice paddy herb, Limnophila aromatica) that grow in the same flooded paddies and canals where the catfish lives. This geographic coherence — catfish, taro stem, water lily, and rice paddy herb all from the same waterway ecosystem — produces a flavor coherence in the bowl: the ingredients do not merely coexist but complement each other in the specific way that ingredients from the same habitat have been evolved to do. Ngò om in particular is the herb that most specifically marks this as Mekong Delta canh chua — its intense, cumin-adjacent aroma (sometimes described as smelling of the rice paddy water itself) is the element that is unmissable in a bowl eaten in the delta and always slightly absent in versions made elsewhere with substitute herbs. The pineapple in the broth is not a sweetener but an acid: fresh pineapple cooked in the tamarind broth contributes both its own tartness and the bromelain enzyme that tenderizes the catfish during cooking. Together with the tamarind, it produces the specific complex sourness of Mekong canh chua that single-acid soups cannot approach.`,
    ingredientSections: [
        {
            title: 'Catfish and broth base',
            items: [
                { amount: 600, unit: 'g', name: 'catfish sections (cá trê chặt khúc)', note: '5-6cm bone-in sections. Marinate briefly with fish sauce and turmeric before adding to the soup.' },
                { amount: 1.2, unit: 'L', name: 'water' },
                { amount: 3, name: 'shallots', note: 'halved — for the broth' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Souring agents',
            items: [
                { amount: 40, unit: 'g', name: 'tamarind paste (me chua)', note: 'dissolved in 150ml warm water and strained — the primary souring agent' },
                { amount: 100, unit: 'g', name: 'fresh pineapple', note: 'cut into wedges — adds secondary tartness and tenderizes the fish' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'seasoning' },
                { amount: 1, unit: 'tsp', name: 'sugar', note: 'balance' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Mekong rau đồng vegetables',
            items: [
                { amount: 150, unit: 'g', name: 'bạc hà taro stems (dọc mùng)', note: 'peeled, cut diagonally into 4cm pieces. The spongy stem absorbs the sour broth and becomes the most satisfying textural element of the soup.' },
                { amount: 100, unit: 'g', name: 'bông súng (water lily stems)', note: 'peeled, cut into 4cm pieces. Available at Vietnamese markets. Substitute: additional bean sprouts or morning glory.' },
                { amount: 2, name: 'medium tomatoes', note: 'cut into wedges — added for color and light acidity' },
                { amount: 100, unit: 'g', name: 'bean sprouts (giá)', note: 'added just before serving' },
                { amount: 2, name: 'spring onions', note: 'cut into 3cm pieces' },
            ],
        },
        {
            title: 'Essential rau đồng herbs — non-negotiable',
            items: [
                { amount: 1, name: 'large bunch ngò om (rice paddy herb / Limnophila aromatica)', note: 'the defining herb of Mekong canh chua — its cumin-rice paddy aroma is irreplaceable. Available at Vietnamese specialty markets.' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 3, name: 'spring onions', note: 'sliced — for serving' },
                { amount: 2, name: 'fresh red chilies, sliced' },
            ],
        },
        {
            title: 'Fried garlic oil',
            items: [
                { amount: 4, name: 'garlic cloves', note: 'thinly sliced' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the sour tamarind broth',
            description: 'Bring water to a boil with halved shallots and salt. Add the strained tamarind liquid and pineapple wedges. Simmer 5 minutes — the pineapple releases its acidity and the tamarind and pineapple sours combine into the complex base of Mekong canh chua. Add fish sauce, sugar, and additional salt to taste. The broth before the fish goes in should taste clearly sour, savory, and slightly sweet — assertively sour in fact, because the catfish and the vegetables will absorb some of the acidity during cooking.',
            tip: 'The two-acid broth of Mekong canh chua — tamarind plus fresh pineapple — produces a sourness that is warmer, more complex, and more fruity than single-acid versions. The tamarind provides a deep, jammy sourness; the pineapple provides a brighter, more immediate tartness. Together they produce the specific sour character that is the first sensation of correctly made Mekong canh chua.',
        },
        {
            title: 'Add catfish and bạc hà',
            description: 'Add the catfish sections to the simmering sour broth. The catfish should be added to already-simmering broth, not to cold water — the immediate contact with hot acidic broth firms the exterior quickly and keeps the flesh in sections rather than breaking apart. Add the bạc hà taro stem pieces at the same time — they need the same cooking time as the catfish. Simmer for 8-10 minutes.',
            tip: 'The bạc hà taro stem absorbs the sour broth through its spongy interior structure during the 8-10 minute simmer, becoming saturated with the tamarind-pineapple-fish-sauce flavor from the inside out. A bạc hà piece bitten through in correctly made canh chua releases sour broth from its interior — this is the specific texture that makes it the most satisfying vegetable element of the soup.',
        },
        {
            title: 'Add bông súng and tomato',
            description: 'In the last 5 minutes, add the water lily stems (bông súng) and tomato wedges. Water lily stems need less cooking than bạc hà — they should retain a slight crunch when the soup is served. The tomatoes break down slightly into the broth during the final 5 minutes and add their color and secondary acidity. Taste the broth — adjust with fish sauce for salt, sugar for balance, or additional tamarind liquid for more sourness.',
            tip: 'The sequential addition of vegetables — bạc hà at the beginning, bông súng and tomato in the last 5 minutes, bean sprouts and herbs added raw at service — produces a soup where each vegetable is at its optimal texture simultaneously. A soup where all vegetables go in together produces some that are overcooked and some that are undercooked.',
        },
        {
            title: 'Make the fried garlic oil',
            description: 'Heat oil in a small pan. Fry sliced garlic until golden and just beginning to crisp — 2-3 minutes. Pour the entire garlic oil over the surface of the finished soup at the table. The sizzle of the hot garlic oil hitting the soup surface, and the aromatic cloud it releases, is the serving moment of canh chua cá trê and is as important as any cooking step.',
            tip: 'The fried garlic oil poured over canh chua at the table is not optional — it is the aromatic element that lifts the entire bowl at service. The garlic oil hitting the hot sour broth produces a specific combination of the garlic fragrance and the tamarind-fish sauce steam that is the smell of the Mekong Delta at mealtimes.',
        },
        {
            title: 'Serve with raw rau đồng — the correct way',
            description: 'Ladle the soup into a large communal pot or individual bowls. Add bean sprouts raw — they wilt from the soup heat in seconds and provide the crunch that the cooked vegetables do not. Place the ngò om, rau răm, and sliced spring onion on a herb plate alongside — each diner adds their own herbs directly to the bowl. Drizzle the fried garlic oil over the surface. Serve with steamed rice and sliced chili.',
            tip: 'The ngò om (rice paddy herb) is added raw to the bowl rather than cooked in the soup — its specific cumin-adjacent aroma is entirely volatile and disappears within seconds of contact with the hot soup if added during cooking. Placed raw in the bowl and covered with the hot soup, the ngò om releases its aroma directly under the nose of the diner eating it. This is both the correct technique and the correct experience.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
