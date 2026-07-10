'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-cai-xanh-nau-tom',
    title: `Mustard Green and Shrimp Soup`,
    subtitle: `Canh Cải Xanh Nấu Tôm — Đà Lạt highland mustard greens with fresh shrimp in a clean, quick broth — the most refreshing canh in the Vietnamese daily meal rotation.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Canh cải xanh nấu tôm is among the simplest soups in the Vietnamese daily meal rotation — and its simplicity is its greatest strength. Cải xanh (mustard greens, Brassica juncea — the same plant used in Chinese pickled mustard, dưa cải, but here used fresh) with fresh shrimp in a light, clear broth seasoned only with fish sauce and a small amount of ginger. Under twenty minutes. Three primary ingredients. A soup so clean and refreshing that it functions as a palate reset between the richer, more complex dishes that typically accompany it on the Vietnamese family table.\n\nThe cải xanh grown in the highland climate of Đà Lạt and surrounding areas — at 1,500 metres elevation, in cool temperatures year-round — is measurably different from the same plant grown at lower elevations. The cold nights and cooler days of the highland slow the plant's growth, producing thicker, more densely flavoured leaves with a pleasant mild bitterness that lowland-grown cải xanh, which grows faster and more loosely, does not have. The highland cải xanh is firmer, more deeply green, and holds its texture for slightly longer in hot broth — important for a soup that should have distinct vegetable texture rather than collapsed softness.\n\nThe shrimp in canh cải xanh nấu tôm contributes two elements: sweetness to the broth (the amino acids in shrimp shells and flesh release rapidly into hot liquid, producing a natural stock within the 2-3 minutes of cooking time) and textural contrast to the softer vegetable. The shrimp are added shell-on in traditional preparations — the shell's contribution to the broth flavour is significant, and the shell is removed at the table by each diner before eating.`,
    ingredientSections: [
        {
            title: `Main ingredients`,
            items: [
                { amount: 300, unit: 'g', name: `fresh mustard greens (cai xanh)`, note: `washed, cut into 5cm sections — stems separated from leaves; stems added first, leaves last` },
                { amount: 200, unit: 'g', name: `fresh medium shrimp (tom)`, note: `shell-on preferred — shells contribute to broth; or peeled for easier eating` },
            ],
        },
        {
            title: `Broth`,
            items: [
                { amount: 900, unit: 'ml', name: `water or light pork bone broth` },
                { amount: 2, name: `slices fresh ginger` },
                { amount: 1, name: `shallot, halved` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 2, name: `spring onions, sliced thin` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `drizzled over at serving — surface sheen and richness` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the mustard greens`,
            description: `Separate the thick stems from the leafy parts of the cải xanh. Cut stems into 3cm sections — they need more cooking time than the leaves. Tear or cut leaves into 5cm pieces. This stem-leaf separation is the key technique for even cooking: stems require 3-4 minutes in hot broth to become tender; leaves need only 60-90 seconds. Adding both simultaneously produces overcooked leaves and undercooked stems, or the reverse. Keep stems and leaves in separate piles until cooking begins.`,
            tip: `Cải xanh has a pleasant mild bitterness that distinguishes it from blander greens like rau ngót or water spinach. This bitterness comes from glucosinolates — the same sulphur compounds responsible for the characteristic flavour of all Brassica vegetables (cabbage, broccoli, mustard). In small amounts, glucosinolate bitterness is pleasantly refreshing and stimulates appetite; in large amounts (from very mature or stressed plants) it becomes unpleasant. Highland Đà Lạt cải xanh has a balanced glucosinolate level — young, tender, and mildly bitter. If using lowland cải xanh that seems very bitter, blanch the stems briefly in unsalted boiling water for 30 seconds before adding to the soup.`,
        },
        {
            title: `Build and season the broth`,
            description: `Bring water or pork broth to a boil in a medium pot. Add ginger slices and halved shallot. Simmer 5 minutes to infuse the aromatics. Season with fish sauce, salt, and sugar. Remove ginger and shallot before adding vegetables — they have provided their flavour and are not eaten. The broth at this stage should be lightly seasoned: the shrimp will release additional amino acids and salt during cooking, and the cải xanh will release some of its moisture and bitter compounds into the broth.`,
        },
        {
            title: `Cook the stems first`,
            description: `Add cải xanh stem sections to the simmering broth. Cook 3 minutes until the stems are just tender but still slightly firm when pressed with a chopstick — they should bend without snapping. The stems' cell walls are reinforced with more cellulose than the leaves, requiring longer cooking to soften. During these 3 minutes, the stems release some of their glucosinolate compounds into the surrounding broth, contributing a mild pleasant bitterness to the overall flavour.`,
        },
        {
            title: `Add shrimp and leaves simultaneously`,
            description: `Add the fresh shrimp and cải xanh leaves to the pot at the same moment. The shrimp need 2-3 minutes; the leaves need 60-90 seconds — the shrimp will be done just as the leaves reach their optimal texture. Stir once gently. Cook until shrimp are fully pink and curled, and the leaves have wilted to a deep, slightly muted green — not the vivid green of the raw leaf, but not the olive-green of overcooking. Total time from adding shrimp and leaves to removing from heat: 2-3 minutes.`,
            tip: `The simultaneous addition of shrimp and leaves is the timing calibration that produces the correct result without monitoring two separate ingredients. The leaves wilt to the correct texture in the same time the shrimp reach full doneness — this synchronisation is not accidental but the result of generations of cooks refining the timing. If using very large shrimp (over 30g each): add the shrimp 1 minute before the leaves. If using very small shrimp (under 15g): add leaves 30 seconds before the shrimp.`,
        },
        {
            title: `Serve immediately`,
            description: `Remove from heat the moment the shrimp are fully pink. Ladle into bowls immediately — like canh rau ngót, this soup does not benefit from waiting and should not be reheated. Drizzle a small amount of neutral oil over the surface of each bowl — it provides a gentle richness that rounds the broth's clean flavour and produces a slight sheen. Scatter spring onion and coarse black pepper. Serve with steamed rice. Pour the broth over the rice before eating — the gentle shrimp-and-mustard-green flavoured liquid is one of the most refreshing rice accompaniments in the Vietnamese soup canon.`,
            tip: `The neutral oil drizzle at serving is the final technique that elevates canh cải xanh nấu tôm from a simple quick soup to a considered preparation. The oil creates an emulsion with the broth's water-soluble flavour compounds on the surface — fat-soluble aroma molecules from the shrimp, the ginger, and the cải xanh that would otherwise be lost with the steam are captured by the oil droplets and delivered to the nose as the bowl is lifted. This is the same mechanism that makes finishing a risotto or pasta with a drizzle of olive oil so effective — the fat captures and concentrates volatile aromatics.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}