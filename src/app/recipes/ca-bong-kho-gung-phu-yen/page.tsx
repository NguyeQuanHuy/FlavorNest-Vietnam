'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-bong-kho-gung-phu-yen',
    title: 'Cá B?ng Kho G?ng Phú Yên (Phú Yên River Goby Braised with Ginger)',
    subtitle: 'Small river gobies from the mountain streams of Phú Yên\'s interior braised in a clay pot with old ginger, fish sauce, and caramel until the sauce reduces to a dark, intensely savory glaze — the kho dish where the smallest fish produces the most concentrated result.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-bong-kho-gung-phu-yen.jpg',
    intro: `Cá b?ng kho g?ng is the river goby braise of Phú Yên's inland communities — a preparation that uses cá b?ng (goby fish, primarily Rhinogobius and Glossogobius species) from the mountain streams and rivers of the province's interior: the Sông Ba, the Sông K? L?, and the smaller tributary streams that flow from the Central Highlands down through Son Hòa and Ð?ng Xuân toward the coast. Cá b?ng are small — rarely exceeding 10-12cm — with a dense, firm flesh and a specific flavor that differs from both marine fish and larger freshwater species: slightly sweet, slightly earthy in the way of clear mountain water fish, with none of the muddy character of fish from lowland or stagnant water. The kho g?ng preparation is the dominant cooking method for cá b?ng throughout Phú Yên because the small size of the fish makes it ideally suited to the concentrating, caramelizing kho technique — the small fish absorb the fish sauce and ginger caramel completely during the 30-40 minute braise, becoming intensely flavored throughout rather than merely on the surface. Old ginger (g?ng già) is used in generous quantity — more per fish weight than in any other kho preparation — because the slightly gamey undertone of freshwater fish needs more ginger to harmonize it than pork or marine fish requires. After 40 minutes of braising and reduction, the cá b?ng are dark, sticky, intensely savory from the reduced fish sauce, warm from the old ginger heat, and caramelized from the dark caramel base. They are eaten with plain white rice in the way that the most intensely seasoned Vietnamese kho dishes always are: one small piece of fish at a time, placed over a mound of plain rice, the concentrated sauce soaking downward into the grains.`,
    ingredientSections: [
        {
            title: 'River gobies',
            items: [
                { amount: 500, unit: 'g', name: 'fresh cá b?ng (river gobies)', note: 'cleaned, scaled, heads left on — the heads contribute gelatin and flavor to the kho. If using larger gobies (over 8cm): slash each side once to allow the kho sauce to penetrate. Available at Vietnamese markets specializing in freshwater fish. Substitute: any small freshwater fish 8-12cm — small catfish, small tilapia, or whitebait.' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for brief pre-marinating' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'reduces the fresh fish smell and adds color' },
            ],
        },
        {
            title: 'Kho base',
            items: [
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'for the caramel (nu?c màu)' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 80, unit: 'g', name: 'old ginger (g?ng già)', note: 'peeled and cut into thick matchsticks — this is the defining quantity, more generous per fish weight than any other kho' },
                { amount: 5, name: 'garlic cloves', note: 'smashed and left whole' },
                { amount: 3, name: 'shallots', note: 'halved' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'whole — placed in the pot without cutting' },
            ],
        },
        {
            title: 'Braising liquid',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'dark soy sauce', note: 'for color depth' },
                { amount: 1, unit: 'tsp', name: 'sugar', note: 'additional — separate from the caramel' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 120, unit: 'ml', name: 'water', note: 'just enough to start the braise' },
            ],
        },
        {
            title: 'Garnish and to serve',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced — added at the very end' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground — finishing seasoning' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice', note: 'plain, hot — the only accompaniment cá b?ng kho needs' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'fresh red chili, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Pre-marinate the gobies briefly',
            description: 'Combine the cleaned gobies with fish sauce and turmeric. Toss gently to coat. Leave 15 minutes. The turmeric reduces the fresh-fish smell that river gobies can carry and gives the fish a golden color that deepens further during braising. The fish sauce pre-seasoning begins driving salt into the flesh before the kho caramel is built.',
            tip: 'The turmeric pre-marination for cá b?ng is more important than for marine fish — freshwater fish, especially from mountain streams, can have a faint earthy-grassy smell that turmeric and ginger together transform into something pleasant rather than something to notice. This is the preparation step that makes cá b?ng kho g?ng smell of ginger and caramel rather than of river.',
        },
        {
            title: 'Build the dark caramel',
            description: 'In a clay pot over medium heat, add oil and sugar. Leave until the edges begin to melt. Swirl gently to an even deep amber — darker than for seafood kho, approaching the near-black caramel used for v?t kho g?ng. Add 2 tablespoons of water carefully — it will spit aggressively. Swirl until dissolved. The caramel for cá b?ng kho should be as dark as possible without burning — the fish is small and will take the caramel color completely.',
            tip: 'The darkest possible caramel without burning is the target for cá b?ng kho g?ng. Small river gobies absorb the caramel completely during the braise — a pale caramel produces a pale, flat kho; a dark caramel produces the deeply colored, deeply flavored result that makes this dish remarkable for such small fish.',
        },
        {
            title: 'Fry the ginger in the caramel',
            description: 'Add the ginger matchsticks, smashed garlic, and halved shallots directly to the hot dark caramel. They will sizzle immediately in the caramel residue. Fry for 2 minutes until the ginger begins to caramelize at the edges. The combination of dark caramel and caramelized old ginger produces the specific aromatic foundation that defines cá b?ng kho Phú Yên — deep, warm, slightly burnt at the edges in a way that is specifically right for this dish.',
            tip: 'All 80g of ginger goes in here — this is the full quantity for a 500g fish preparation, significantly more than for the same weight of pork or duck. River goby needs this much ginger to produce the balanced result. Less ginger produces a kho that tastes flat and slightly muddy; the correct quantity produces a kho where ginger warmth is present in every bite.',
        },
        {
            title: 'Add the gobies and braise — 35-40 minutes',
            description: 'Add the pre-marinated gobies to the pot, arranging in a single layer where possible. Pour fish sauce, dark soy, sugar, pepper, and water around the fish. Bring to a boil, reduce to the lowest simmer. Braise uncovered for 35-40 minutes, turning the fish gently once at 20 minutes. Do not stir aggressively — small gobies break apart easily. The sauce will reduce progressively: liquid at 10 minutes, thick at 25 minutes, glossy glaze at 35-40 minutes.',
            tip: 'The single gentle turn at 20 minutes is all the fish needs — and all it can take without breaking. After 35-40 minutes the gobies will be fragile from the long braising. Handle with care when checking or turning. The fish breaking slightly into the sauce at the end is not a failure — it enriches the kho liquid and is the sign of a properly long braise.',
        },
        {
            title: 'Final reduction — the kho endpoint',
            description: 'At 35-40 minutes, the sauce should be thick and barely moving when the pot is tilted — a slow, glossy mass that coats the fish and clings to the ginger matchsticks. The fish should be dark, almost black in the darkest spots where the caramel has caramelized further on the fish surface. Taste the sauce: it should be intensely savory, warm with ginger heat, slightly sweet from the caramel, and complex from the combined fish sauce and dark soy reduction.',
            tip: 'The "almost black in the darkest spots" appearance of correctly made cá b?ng kho is not burning — it is concentrated caramelization of the fish surface proteins combined with the dark caramel base. New cooks often pull the pot too early when the fish starts looking dark. The correct endpoint is darker than most kho preparations, reflecting both the dark caramel and the concentrated fish sauce reduction.',
        },
        {
            title: 'Finish and serve from the clay pot',
            description: 'Add sliced spring onion and grind black pepper over the surface. Scatter cilantro. Bring the clay pot directly to the table. Serve with plain steamed rice, lime wedges, and sliced chili. The correct eating: spoon one small goby over a mound of plain hot rice. Allow the thick kho sauce to soak into the rice. Eat the fish slowly — the small bones are edible after the long braise, soft enough to eat with the flesh. The sauce absorbed into the rice beneath is the finest element of the entire preparation.',
            tip: 'The bones of cá b?ng after 40 minutes of kho braising are soft enough to eat — the small vertebrae and rib bones have been partially broken down by the long acid-salt-heat exposure. Phú Yên river communities eat cá b?ng kho g?ng whole — fish, bones, and all — with nothing wasted. This is both economical and, after 40 minutes of braising in dark caramel, genuinely pleasant.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
