'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-xao-la-giang',
    title: 'Bò Xào Lá Giang (Beef Stir-Fried with Sour Giang Leaves)',
    subtitle: 'Thinly sliced beef stir-fried at high heat with lá giang — the wild sour leaf of the central Vietnamese forest — until the natural acidity of the leaf cooks into the beef and produces a sourness that is simultaneously brighter and more complex than any vinegar or lime.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/bo-xao-la-giang.jpg',
    intro: `Bò xào lá giang is the central Vietnamese stir-fry built around lá giang — the leaves of Aganonerion polymorphum, a wild climbing plant that grows along forest edges and stream banks in Phú Yên, Bình Ð?nh, Qu?ng Nam, and the surrounding central provinces. The leaf has a flavor that is impossible to describe without tasting: sour in the way that wood sorrel is sour — clean, bright, slightly herbaceous — but without the sharpness of citric acid or the depth of tamarind. It is the sourness of the forest, the sourness that appears naturally rather than being added. When lá giang is thrown into a hot wok with beef and garlic, the leaves wilt within seconds and release their natural acids into the cooking liquid, which immediately coats the beef in a light, sour glaze that no manufactured souring agent can replicate. The beef in bò xào lá giang needs no marinade beyond basic seasoning — the lá giang provides all the brightness the dish requires. It is one of the fastest stir-fries in Vietnamese cooking: beef sliced thin, wok at maximum heat, lá giang added almost at the end and given only 60 seconds before the dish is done. Outside the central Vietnamese provinces where lá giang grows, it is available dried at some Vietnamese specialty stores and fresh from certain online suppliers during its season. Where it is truly unavailable, wood sorrel or young tamarind leaves are the closest approximation — but they are not the same, and the dish deserves the real ingredient whenever possible.`,
    ingredientSections: [
        {
            title: 'Beef',
            items: [
                { amount: 500, unit: 'g', name: 'beef sirloin or flank', note: 'sliced 3mm thin against the grain. Freeze 20 minutes before slicing for cleaner cuts.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 1, unit: 'tsp', name: 'cornstarch', note: 'helps the beef stay tender at high heat' },
            ],
        },
        {
            title: 'Lá giang',
            items: [
                { amount: 150, unit: 'g', name: 'fresh lá giang leaves', note: 'stems removed, leaves only — available at Vietnamese specialty markets in the central regions, some Asian grocers. Dried lá giang (soaked 10 minutes): use 30g.' },
            ],
        },
        {
            title: 'Aromatics and sauce',
            items: [
                { amount: 5, name: 'garlic cloves', note: 'thinly sliced — not minced, slices handle high heat without burning' },
                { amount: 3, name: 'shallots', note: 'thinly sliced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced — one for the wok, one for garnish' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'added to the wok — in addition to the marinade' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'high smoke point essential' },
                { amount: 2, unit: 'tbsp', name: 'water', note: 'added with the lá giang if the wok is too dry' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground — finishing seasoning' },
                { amount: 2, name: 'limes, cut in wedges', note: 'optional — lá giang provides its own sourness' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the beef briefly',
            description: 'Combine thinly sliced beef with fish sauce, sugar, black pepper, sesame oil, and cornstarch. Toss to coat evenly. Marinate for 10-15 minutes — no longer needed since the lá giang provides the primary flavor. Pat lightly before adding to the wok — excess marinade causes steaming rather than searing.',
            tip: 'The cornstarch in the marinade creates a thin coating that keeps the beef moist during the high-heat stir-fry and helps the lá giang acids adhere to the beef surface rather than pooling at the bottom of the wok.',
        },
        {
            title: 'Prepare the lá giang',
            description: 'Remove the stems from the lá giang leaves — only the leaves are used, the stems are too fibrous and take too long to cook. Rinse briefly under cold water. The leaves should be kept whole or torn into large pieces — finely chopped lá giang releases its sourness too quickly in the hot wok and the acid cooks off before it can coat the beef. Large leaf pieces wilt slowly and release the sourness more gradually.',
            tip: 'Taste a raw lá giang leaf — the sourness should be immediately apparent, clean and bright. If the leaves taste very mild or mainly grassy, they are older leaves that have lost potency. Use a larger quantity to compensate, or the dish will lack the characteristic sourness.',
        },
        {
            title: 'Heat the wok to maximum',
            description: 'Heat the wok over maximum heat for 3 minutes until smoking. Add oil and swirl to coat. The oil must smoke before anything goes in — this temperature level is what produces the caramelization on the beef in the few seconds it has in contact with the surface. A wok that is merely hot produces grey, steamed-looking beef. A smoking wok produces golden, caramelized beef.',
            tip: 'Bò xào lá giang is a very fast stir-fry — from the moment the beef hits the wok to the moment the dish is plated is about 4 minutes. Everything must be prepared and within reach before the wok goes on the heat.',
        },
        {
            title: 'Sear the beef fast',
            description: 'Add the marinated beef to the smoking wok in a single layer. Do not stir for 60 seconds — let a crust form on the bottom. Then toss vigorously for 30-45 seconds. The beef should be 80% cooked — caramelized on the outside with slight pink remaining inside. Remove and set aside. The residual cooking when returned to the wok with the lá giang will finish it without overcooking.',
            tip: 'Removing the beef before fully cooked is the technique that prevents rubbery beef in the final dish. The 80% rule: caramelized outside, pink center, then set aside. The lá giang step adds 60-90 more seconds of heat.',
        },
        {
            title: 'Stir-fry the aromatics',
            description: 'In the same wok with residual oil and beef drippings, fry sliced garlic and shallots for 30-45 seconds until golden and fragrant. Add sliced chili. The garlic should be golden at the edges — not pale, not brown — before the lá giang goes in.',
            tip: 'The beef drippings remaining in the wok after removing the beef are the most flavorful oil in the dish. Do not wipe the wok or add more oil. The garlic frying in this flavored oil is what builds the aromatic base that the lá giang acidity will integrate into.',
        },
        {
            title: 'Add lá giang — the critical 60 seconds',
            description: 'Add the lá giang leaves to the wok with the golden garlic. The leaves will spit and hiss on contact with the hot oil. Toss immediately and continuously — the leaves wilt within 20-30 seconds and release their natural acids into the wok. The sound changes from sharp spit to a more sustained sizzle as the moisture from the leaves hits the hot surface. If the wok looks too dry, add 2 tablespoons of water around the edge. Return the beef immediately. Add fish sauce and sugar. Toss everything together for 30-45 seconds.',
            tip: 'The 60-second window for lá giang in the wok is not negotiable. Under 30 seconds and the leaves are barely wilted and the sourness has not released. Over 90 seconds and the volatile acids cook off and the sourness diminishes significantly. This is the most time-critical step in Vietnamese wok cooking.',
        },
        {
            title: 'Plate immediately and serve',
            description: 'Transfer to a serving plate the moment the dish is done — never leave bò xào lá giang in the wok, where the residual heat continues cooking the leaves and the sourness degrades further. The wilted lá giang should be dark green and glistening, the beef should be caramelized and coated in the leaf\'s natural sourness, and the garlic should be golden throughout. Scatter spring onion, cilantro, and freshly ground black pepper. Serve immediately with steamed rice. Provide lime wedges but note to diners: the lá giang has done what the lime would do.',
            tip: 'The plate immediately, serve immediately rule is more important here than in almost any other Vietnamese stir-fry. The lá giang sourness is most vibrant in the first 5 minutes after cooking. By 10 minutes the sourness has mellowed significantly. By 20 minutes the dish is flat. This is food that waits for nobody.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
