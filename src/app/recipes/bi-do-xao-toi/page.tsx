'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bi-do-xao-toi',
    title: 'Bí Đỏ Xào Tỏi (Stir-Fried Pumpkin with Garlic)',
    subtitle: 'Pumpkin sliced thin and stir-fried over high heat with sliced garlic and fish sauce until just tender with caramelized edges — a Vietnamese vegetable side dish that turns a humble ingredient into something worth eating on its own.',
    category: 'VEGETARIAN',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/bi-do-xao-toi.jpg',
    intro: `Bí đỏ xào tỏi is one of the most common vegetable dishes on the Vietnamese family table — pumpkin, garlic, and fish sauce in a hot wok, done in 10 minutes. Its ubiquity can make it seem trivial, but the technique makes a genuine difference: pumpkin sliced uniformly thin (5mm) cooks quickly enough to caramelize at the edges before the center overcooks; garlic sliced rather than minced avoids burning at high heat; fish sauce added to the edge of the hot wok rather than directly onto the pumpkin caramelizes briefly before mixing with the vegetable. The result has golden edges, a slightly sweet interior from the natural pumpkin sugar, and an aromatic garlic-fish sauce depth that elevates every bowl of rice it accompanies. This dish also works as a template: the same technique applies to chayote (su su), sweet potato (khoai lang), or carrot. Vietnamese wok vegetable cooking is not complicated, but the variables of heat, cut, and seasoning timing are specific.`,
    ingredientSections: [
        {
            title: 'Main',
            items: [
                { amount: 600, unit: 'g', name: 'pumpkin or butternut squash (bí đỏ)', note: 'peeled, seeds removed, sliced 5mm thin. Kabocha or butternut work best — firm enough to hold shape in the wok.' },
                { amount: 5, name: 'garlic cloves', note: 'thinly sliced — not minced. Slices withstand high heat without burning.' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'high smoke point — rice bran or vegetable' },
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce', note: 'added to the edge of the hot wok — caramelizes before mixing' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'enhances the natural pumpkin sweetness' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground — finishing seasoning' },
                { amount: 2, unit: 'tbsp', name: 'water', note: 'only if needed to create steam for the center to cook through' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 2, name: 'spring onions', note: 'sliced — scattered over at the end' },
                { amount: 1, name: 'fresh red chili', note: 'sliced — optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Slice uniformly',
            description: 'Peel the pumpkin and cut into slices exactly 5mm thick — uniform thickness is the single most important prep step. Too thick (over 8mm) and the pumpkin does not cook through before the garlic burns. Too thin (under 3mm) and it disintegrates. A mandoline produces the most consistent result; careful knife work is fine. Keep the slices in a single pile — they go into the wok at the same time.',
            tip: 'Kabocha pumpkin (the green-skinned Japanese variety) is ideal — dense, sweet, and holds its shape. Butternut is a good substitute. Avoid very watery pumpkin varieties — they release too much moisture in the wok.',
        },
        {
            title: 'Heat the wok to smoking',
            description: 'Place a wok over maximum heat for 2-3 minutes until smoking. Add oil and swirl to coat. The oil should begin smoking within 10 seconds. Vietnamese vegetable stir-fries require maximum heat — medium heat produces steamed, waterlogged vegetables. The initial high heat is what produces the caramelized edges on the pumpkin.',
            tip: 'If you hear the oil sizzle and then quiet down when you add the pumpkin, the wok is not hot enough. The oil should continue sizzling aggressively throughout the cooking.',
        },
        {
            title: 'Add garlic, then pumpkin',
            description: 'Add the sliced garlic to the hot oil. Toss for 20 seconds until fragrant and very lightly golden — not brown. Immediately add all the pumpkin slices. Spread across the wok surface in a single layer as much as possible. Leave undisturbed for 60-90 seconds — this is the time needed for the bottom surface to caramelize.',
            tip: 'The 60-second undisturbed contact is what creates the golden edges. Moving the pumpkin constantly prevents caramelization and produces pale, steamed-looking results.',
        },
        {
            title: 'Toss and season',
            description: 'After the first 60 seconds, toss the pumpkin. Pour fish sauce around the edge of the wok (not directly on the pumpkin) — it hits the hot metal, sizzles and caramelizes for 3-4 seconds before mixing with the pumpkin. Add sugar. Toss everything together. If the pumpkin is not yet tender in the center, add 2 tablespoons of water around the edge of the wok — the steam cooks the interior without softening the caramelized edges.',
            tip: 'Pouring fish sauce on the edge of the wok rather than directly on the food is a technique used throughout Vietnamese wok cooking. The brief caramelization before mixing produces a depth of flavor that direct addition does not.',
        },
        {
            title: 'Cook to the right texture and plate',
            description: 'Total cooking time: 4-6 minutes from adding the pumpkin. The correct texture: tender when pressed with a spatula, with slightly caramelized golden edges and no raw center. Not mushy — the slices should hold their shape when lifted. Taste and adjust: a small additional pinch of sugar if the pumpkin tastes flat, a few drops of extra fish sauce if underseasoned. Transfer immediately to a plate. Scatter spring onion, fresh chili, and black pepper. Serve with steamed rice.',
            tip: 'Never leave stir-fried pumpkin in the wok after cooking — residual heat continues cooking it and the caramelized edges soften. Plate immediately and serve.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}