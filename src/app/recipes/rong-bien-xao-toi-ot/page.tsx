'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'rong-bien-xao-toi-ot',
    title: 'Rong Bi?n Xào T?i ?t (Seaweed Stir-Fried with Garlic and Chili)',
    subtitle: 'Fresh or rehydrated seaweed stir-fried at high heat with garlic, chili, and fish sauce until the seaweed glistens and the garlic caramelizes onto its surface — the Vietnamese coastal side dish that takes two minutes to cook and delivers the entire character of the sea in each mouthful.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/rong-bien-xao-toi-ot.jpg',
    intro: `Rong bi?n xào t?i ?t is the garlic-chili stir-fried seaweed of Vietnamese coastal cooking — a preparation that appears at seafood restaurants along the central and southern Vietnamese coast as a side dish ordered alongside the main seafood preparations, and that is one of the simplest and most immediately satisfying vegetable-adjacent dishes in the repertoire. The dish is made with either fresh seaweed collected from the coastal rocks and reefs — the specific fresh seaweed of Vietnamese coastal markets is typically a combination of ogo (Gracilaria) and sea lettuce (Ulva) varieties that have a brighter, more immediately marine flavor than dried and rehydrated wakame — or with rehydrated dried wakame when fresh seaweed is not available, which produces a slightly different but equally satisfying result. The stir-fry technique applied to seaweed is counter-intuitive to cooks who know seaweed primarily from soups or salads: high heat, fast, with the garlic caramelizing onto the seaweed surface in the 2-3 minutes of wok contact. The heat produces a specific transformation in the seaweed — the surface slightly chars at the edges while the center retains its moisture, and the marine character concentrates slightly from the heat exposure in a way that produces something more complex than simply dressed raw or rehydrated seaweed. The garlic, fish sauce, and chili are the three seasonings that Vietnamese coastal cooking applies to almost every simple stir-fried vegetable preparation, and they work with seaweed in the specific way they work with water spinach (rau mu?ng xào t?i) or morning glory — the garlic provides savory depth, the fish sauce provides umami, and the chili provides the heat that prevents the preparation from tasting flat. Sesame oil added at the very end provides the aromatic finishing note that connects this preparation to the Chinese-Vietnamese culinary tradition from which the seaweed stir-fry technique derives.`,
    ingredientSections: [
        {
            title: 'Seaweed',
            items: [
                { amount: 300, unit: 'g', name: 'fresh seaweed (rong bi?n tuoi)', note: 'Gracilaria (rong câu) or sea lettuce (rong xà lách) — rinsed thoroughly in cold water to remove salt and sand. Available at Vietnamese coastal markets. Alternatively: 40g dried wakame rehydrated in cold water 10 minutes, drained.' },
            ],
        },
        {
            title: 'Stir-fry',
            items: [
                { amount: 6, name: 'garlic cloves', note: 'thinly sliced — not minced, slices caramelize more evenly' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'sliced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced diagonally — for color' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'added at the very end' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 3, name: 'spring onions', note: 'cut into 3cm pieces — added off-heat' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'fresh red chili, extra sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the seaweed',
            description: 'If using fresh seaweed: rinse thoroughly in several changes of cold water to remove all salt, sand, and marine debris. Shake dry in a colander — the seaweed should be damp but not waterlogged. Fresh seaweed does not need cutting — the natural pieces are the correct size. If using dried wakame: soak in cold water 10 minutes, drain, squeeze gently, and cut any very large pieces into 5cm sections. Both fresh and dried seaweed should be well-drained before the wok — excess water causes the stir-fry to steam rather than sear.',
            tip: 'Fresh coastal seaweed for rong bi?n xào t?i ?t produces a noticeably brighter, more immediately marine result than rehydrated dried wakame — the specific flavour compounds in fresh seaweed that degrade during drying are fully present, producing a stir-fry that smells and tastes more specifically of the sea. When fresh seaweed is available, use it. When it is not, dried wakame is an excellent substitute that produces a different but equally valid result.',
        },
        {
            title: 'Stir-fry the garlic until golden',
            description: 'Heat a wok over maximum heat until smoking. Add oil. Add the sliced garlic and fry for 45-60 seconds until the edges are golden — not dark, not pale. The garlic slices should be translucent at the center and golden at the edges when the seaweed goes in. Add all the sliced chilies and fry 15 more seconds.',
            tip: 'Sliced rather than minced garlic for rong bi?n xào t?i ?t is the technique that produces visible golden garlic pieces throughout the finished dish — a visual element as well as a flavour element. Minced garlic distributes more evenly but is less visually dramatic; sliced garlic produces golden pieces that are encountered individually in each mouthful.',
        },
        {
            title: 'Add seaweed — 2 minutes maximum',
            description: 'Add all the seaweed to the hot wok with the golden garlic. It will spit and steam aggressively from its surface moisture. Toss continuously at maximum heat. Add fish sauce, sugar, and black pepper at 30 seconds. Continue tossing for a total of 2 minutes — the seaweed should be glistening, slightly wilted, and the edges of some pieces slightly charred from direct wok contact. Remove from heat at 2 minutes.',
            tip: 'Two minutes maximum for seaweed in the wok is the specific time that produces the correct result: the seaweed is heated through, the garlic and fish sauce character has coated every surface, the edges are slightly charred, and the center is still moist and textured. Beyond 2 minutes, the seaweed releases too much moisture, becomes limp, and the specific textural character that makes wok-stir-fried seaweed different from dressed seaweed is lost.',
        },
        {
            title: 'Finish and serve immediately',
            description: 'Add spring onion pieces and sesame oil off the heat. Toss once. Transfer to a serving plate immediately. Scatter toasted sesame seeds over the surface. The finished rong bi?n xào t?i ?t: glistening green-brown seaweed with visible golden garlic slices and red chili pieces throughout, the sesame seeds scattered over, steam rising. Serve with steamed rice and lime wedges. Eat immediately — stir-fried seaweed at its best within 5 minutes of the wok.',
            tip: 'Rong bi?n xào t?i ?t eaten immediately from the wok — when the garlic is still sizzling slightly in the sesame oil and the seaweed is at its peak temperature — is significantly better than the same dish 10 minutes later when the seaweed has released additional moisture and softened. This is consistently a serve-immediately-eat-immediately preparation. The Vietnamese coastal restaurants that do this best have the wok visible from the dining area and serve the dish within 60 seconds of leaving the fire.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
