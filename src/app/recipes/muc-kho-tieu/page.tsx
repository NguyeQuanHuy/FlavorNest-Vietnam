'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-kho-tieu',
    title: 'Mực Kho Tiêu (Squid Braised with Black Pepper)',
    subtitle: 'Squid pieces caramelized in dark sugar then braised in a clay pot with generous old ginger, lemongrass, and a deliberately excessive amount of coarsely ground black pepper until the sauce reduces to a thick, dark, peppery glaze — the kho preparation that uses more black pepper than any other in the Vietnamese collection and that is eaten over plain white rice on rainy days.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/muc-kho-tieu.jpg',
    intro: `Mực kho tiêu is the black pepper squid braise of Vietnamese home cooking — a kho preparation that applies the concentrating, caramelizing technique of the kho method to squid, producing a result that is completely different from any of the high-heat preparations in the mực collection. Where mực xào sả ớt is made in 90 seconds at maximum heat to preserve the squid's tender character, mực kho tiêu is made over 20 minutes at the lowest possible heat — the squid braising slowly in dark caramel, fish sauce, ginger, and lemongrass until the sauce has reduced to a thick, dark glaze and the squid, while inevitably firmer than at the 90-second mark, has absorbed the concentrated kho sauce throughout its flesh in a way that no quick-cook preparation achieves. The black pepper in mực kho tiêu is the defining element — used in a quantity that would seem excessive in any other preparation. Two full teaspoons of coarsely ground black pepper for 500g of squid, plus an additional half-teaspoon freshly ground over the finished dish, produces a kho that is genuinely peppery — not as background seasoning but as a primary flavor that sits alongside the caramel and fish sauce as an equal rather than a supporting element. This is deliberately the most pepper-forward dish in the kho series, reflecting the specific Vietnamese understanding that squid — with its mild, sweet, slightly marine flavor — can carry assertive black pepper in a way that stronger-flavored proteins like pork or catfish might find competing. The ginger and lemongrass in the braise provide the aromatic counterpoint that prevents the pepper from tasting flat; the dark caramel provides the sweetness that prevents it from tasting harsh. The result is a kho sauce that is complex, deeply savory, and specifically warming in the way that generous black pepper always is — the bowl that Vietnamese people reach for when they want something deeply comforting on a cold or rainy day.`,
    ingredientSections: [
        {
            title: 'Squid',
            items: [
                { amount: 500, unit: 'g', name: 'fresh squid (mực tươi)', note: 'body tubes cut into 3-4cm rings, tentacles in clusters. Slightly thicker-cut than for stir-fry — the longer braising time requires pieces that hold together.' },
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce', note: 'for brief marinating' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 1, unit: 'tsp', name: 'black pepper', note: 'coarsely ground — part of the marinade' },
            ],
        },
        {
            title: 'Kho base',
            items: [
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'for the dark caramel' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 40, unit: 'g', name: 'old ginger (gừng già)', note: 'cut into matchsticks' },
                { amount: 2, name: 'lemongrass stalks', note: 'bruised and cut into 3cm pieces — braised whole, removed before serving' },
                { amount: 4, name: 'garlic cloves', note: 'smashed' },
                { amount: 3, name: 'shallots', note: 'halved' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'whole' },
            ],
        },
        {
            title: 'Braising liquid',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'dark soy sauce', note: 'for color depth' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'additional balance' },
                { amount: 2, unit: 'tsp', name: 'black pepper', note: 'coarsely ground — the defining quantity. This is double the amount most kho preparations use.' },
                { amount: 150, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tbsp', name: 'Shaoxing wine', note: 'optional — adds depth to the braising liquid' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced — added at the very end' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground over the finished dish — third application of pepper in this recipe' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice', note: 'plain and hot — the only accompaniment mực kho tiêu needs' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the squid briefly',
            description: 'Combine squid rings and tentacles with fish sauce, turmeric, and 1 teaspoon of coarsely ground black pepper. Toss and leave 10 minutes. This is the first of three pepper applications in mực kho tiêu — the marinade pepper seasons the squid from the surface before braising begins. Unlike the meticulous drying required for stir-fried squid, the squid for kho does not need to be completely dry — the braising liquid will provide the cooking environment.',
            tip: 'The three-stage black pepper application in mực kho tiêu — marinade, braising liquid, finishing — produces a layered pepper character where each application provides a different dimension: the marinade pepper is absorbed and slightly mellowed; the braising pepper concentrates in the reduced sauce; the finishing pepper is sharp and immediate. Together they produce more complex pepper character than a single large addition would.',
        },
        {
            title: 'Build the dark caramel',
            description: 'In a clay pot or heavy pot, heat oil and sugar over medium heat. Cook to a very dark amber — the darkest possible without burning. Add 2 tablespoons of water carefully. Swirl until dissolved. For mực kho tiêu specifically, the very dark caramel is essential — the mild, slightly sweet squid needs a robust caramel base to provide the bittersweet counterpoint that makes the dish complex rather than simply sweet-peppery.',
            tip: 'Squid kho requires a darker caramel than pork kho because the squid contributes less intrinsic flavor richness than pork and the caramel must compensate. A pale caramel in mực kho tiêu produces a flat, slightly sweet result; a dark caramel produces the depth that makes the squid taste fully of itself and of the kho technique simultaneously.',
        },
        {
            title: 'Fry aromatics and sear squid',
            description: 'Add ginger matchsticks, bruised lemongrass pieces, smashed garlic, halved shallots, and whole chilies to the dark caramel. Fry 2 minutes. Add the marinated squid — it will sizzle in the hot caramel. Sear for 60-90 seconds, turning once — the squid surface should caramelize slightly against the caramel. The squid at this stage will already be partially cooked from the caramel heat — this is intentional and different from the raw-to-wok approach of xào preparations.',
            tip: 'The searing of squid in the caramel base before adding the braising liquid is the step that produces the caramelized exterior layer that holds the squid together through the 20-minute braise. Unseared squid placed directly in braising liquid loses its structural integrity and can fall apart during the reduction phase.',
        },
        {
            title: 'Add braising liquid and reduce — 18-22 minutes',
            description: 'Add fish sauce, dark soy, sugar, 2 teaspoons of coarsely ground black pepper, water, and optional Shaoxing wine. The liquid should sizzle immediately. Bring to a boil, reduce to the lowest possible simmer. Braise uncovered for 18-22 minutes — shorter than meat kho because squid firms more quickly. Stir gently every 5 minutes. Remove the lemongrass pieces at 15 minutes. The sauce at 20 minutes should be thick, dark, and glossy — coating the squid heavily when a piece is lifted.',
            tip: 'The 18-22 minute braising window for mực kho tiêu is the critical difference from meat kho — squid braised beyond 25 minutes becomes too firm and the texture shifts from pleasantly chewy to tough. The sauce should be at glaze consistency by 20 minutes; if it is still liquid at this point, increase to medium heat for 3-5 more minutes while watching carefully.',
        },
        {
            title: 'Finish and serve from the clay pot',
            description: 'Add sliced spring onion and sesame oil. Stir once. Grind the final half-teaspoon of black pepper directly over the surface — the fresh-ground pepper blooms in the residual heat of the pot and produces a sharp, immediate pepper fragrance that is the finishing signature of mực kho tiêu. The finished dish: dark, glossy, peppery, with the ginger matchsticks visible throughout. Serve directly from the clay pot with plain hot rice, cucumber, and lime. One piece of kho squid per two spoons of rice — the concentrated sauce seasons the rice with each spoonful.',
            tip: 'The final fresh-ground pepper over the finished mực kho tiêu is the moment where the third pepper dimension arrives — the immediate, sharp heat of freshly ground pepper against the mellowed, absorbed pepper of the braise and the concentrated pepper of the reduced sauce. All three arrive simultaneously in the first spoonful over rice. This is why the dish is specifically warming — the three-stage pepper is not aggressive but cumulative.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
