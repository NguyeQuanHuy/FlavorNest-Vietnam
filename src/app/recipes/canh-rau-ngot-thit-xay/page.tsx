'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-rau-ngot-thit-xay',
    title: `Vietnamese Spinach and Pork Soup`,
    subtitle: `Canh Rau Ngót Thịt Xay — Northern Vietnam's clearest, most nutritious daily soup: sauropus leaves with pork mince in a broth that turns emerald green in two minutes.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Canh rau ngót thịt xay is the everyday soup of the northern Vietnamese household — a preparation so simple and so fast (under 20 minutes from start to serving) that it is made fresh for every meal rather than reheated, because rau ngót (Sauropus androgynus — the sweet leaf bush, also called star gooseberry leaf or katuk) loses its vivid emerald colour and delicate texture within minutes of overcooking. The soup is northern Vietnam's answer to the question of what a nutritious, delicious, quickly prepared vegetable soup looks like — and the answer is strikingly beautiful: a clear broth that turns emerald green as the rau ngót leaves are added, studded with white pork mince balls floating just below the surface.\n\nSauropus androgynus is one of the most nutritionally remarkable plants in the Vietnamese garden — it contains protein levels of 7-10% dry weight (extraordinarily high for a leafy vegetable), significant iron, calcium, and beta-carotene, and the leaves have a mild, clean, slightly sweet flavour with none of the bitterness or earthiness of most nutritious greens. The leaves are small, oval, and bright green — they cook to silky softness in 60-90 seconds in hot broth, and their chlorophyll turns the surrounding liquid a vivid emerald that is the soup's visual signature.\n\nThe pork mince is not shaped into meatballs before adding to the broth but stirred in directly — the small pieces of seasoned pork distribute through the broth and cook in 2-3 minutes, providing protein without the effort of meatball shaping. This minimal technique is appropriate for a soup that is made multiple times a week in northern Vietnamese kitchens: the fewer steps, the better, as long as the flavour and nutrition are not compromised.`,
    ingredientSections: [
        {
            title: `Rau ngót leaves`,
            items: [
                { amount: 200, unit: 'g', name: `fresh rau ngot leaves (Sauropus androgynus)`, note: `leaves stripped from stems — stems discarded; substitute: baby spinach or watercress (different flavour but similar texture and cooking time)` },
            ],
        },
        {
            title: `Pork mince`,
            items: [
                { amount: 200, unit: 'g', name: `pork mince (thit heo xay)`, note: `70% lean, 30% fat — seasoned before adding` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
                { amount: 2, name: `shallots, minced fine` },
            ],
        },
        {
            title: `Broth`,
            items: [
                { amount: 1, unit: 'L', name: `light pork bone broth or water`, note: `water works — the rau ngót and pork provide the flavour` },
                { amount: 1, unit: 'tbsp', name: `fish sauce`, note: `additional seasoning` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
            ],
        },
        {
            title: `Optional additions`,
            items: [
                { amount: 50, unit: 'g', name: `dried shrimp (tom kho)`, note: `soaked 15 min — adds umami depth to the broth; the Hà Nội addition` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, unit: 'tbsp', name: `fried shallots (hanh phi)` },
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
            title: `Season the pork mince`,
            description: `Combine pork mince with fish sauce, black pepper, sugar, sesame oil, and minced shallots. Mix firmly with clean hands for 2 minutes until the mixture is slightly sticky and cohesive. The seasoning must be done before adding the pork to the broth — once the pork is in the hot liquid it cooks immediately and cannot be seasoned further. Taste a small amount by cooking a pinch in a dry pan — it should be savoury, slightly sweet, with a clear pepper note. The fish sauce seasons both the pork and, as it releases during cooking, the surrounding broth.`,
        },
        {
            title: `Build the broth`,
            description: `Bring pork bone broth or water to a boil in a medium pot. If using dried shrimp: add soaked shrimp now and simmer 10 minutes to extract their umami before the pork goes in. Season with fish sauce, salt, and sugar. The broth should taste slightly under-seasoned at this point — the pork will release additional fish sauce as it cooks, and the rau ngót will contribute its own mild sweetness. A correctly seasoned starting broth produces an over-seasoned finished soup.`,
        },
        {
            title: `Add pork mince — the stirring technique`,
            description: `Bring broth to a steady simmer. Add the seasoned pork mince by breaking it into small pieces — use two forks or your fingers to scatter small clumps of approximately 1-2 teaspoons each directly into the simmering broth. Stir gently once to separate any clumps that landed together. Simmer 2-3 minutes until all pork pieces are cooked through and the broth has absorbed the pork's seasoning. The pork pieces should float to the surface when cooked — they rise as the proteins denature and the air pockets between the meat fibres expand.`,
            tip: `The scattered-clump technique for adding pork mince to canh rau ngót produces a better texture than two alternatives: shaped meatballs (too dense, don't absorb broth flavour as quickly) and fully dissolved mince (makes the broth cloudy and produces a uniform texture throughout). The small irregular clumps of 1-2 teaspoons each cook quickly, absorb broth flavour on all surfaces simultaneously, and produce a varied texture — some pieces firmer, some more tender — that makes the soup more interesting to eat.`,
        },
        {
            title: `Add rau ngót — 60 to 90 seconds only`,
            description: `Add stripped rau ngót leaves to the simmering broth. The leaves will begin wilting immediately on contact with the hot liquid. Stir once gently to submerge all leaves. Cook for exactly 60-90 seconds — the leaves should be just wilted throughout but still vivid emerald green. The broth will have turned a beautiful clear emerald colour from the chlorophyll released by the leaves. Remove from heat immediately. Do not continue simmering after the leaves are added — every additional 30 seconds darkens the colour toward olive-green and toughens the leaf texture.`,
            tip: `The 60-90 second cooking window for rau ngót is the most critical timing in the dish and the reason the soup must be made fresh for each meal rather than reheated. At 60 seconds: vivid emerald, silky texture, maximum nutrition retained. At 2 minutes: beginning to darken, slightly tougher. At 5 minutes: olive-green, significantly tougher, substantial chlorophyll degradation. Reheating a finished canh rau ngót produces the 5-minute result from the original 60-second cooking — the reason experienced northern Vietnamese cooks make this soup fresh daily and never reheat it. If cooking for a large group: make in multiple small batches rather than one large batch, adding the rau ngót to each batch just before serving.`,
        },
        {
            title: `Serve immediately`,
            description: `Ladle the emerald-green soup into bowls immediately — the colour and texture are at their peak for only 5-10 minutes after the leaves are added. Each bowl should show the vivid emerald broth with white pork pieces floating throughout. Scatter spring onion, fried shallots, and coarse black pepper. Serve with steamed rice — in northern Vietnamese family meals, canh rau ngót is always present at the table with rice, providing the liquid element that the rice absorbs when eaten. Pour the emerald broth over the rice and eat the pork pieces with chopsticks.`,
            tip: `The emerald broth of canh rau ngót poured over white rice produces a colour combination — vivid green liquid turning the white rice pale green — that is one of the most visually striking moments in everyday Vietnamese cooking. The Sauropus androgynus chlorophyll is stable enough in the brief cooking time that it remains intensely coloured when poured hot over room-temperature rice, the heat not having sufficient time to convert it to the olive-toned pheophytin that prolonged cooking produces. This colour is the visual proof of freshness that northern Vietnamese diners use to assess the soup immediately.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}