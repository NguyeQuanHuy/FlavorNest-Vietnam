'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-ngao-nau-dua',
    title: `Clam and Pickled Mustard Green Soup`,
    subtitle: `Canh Ngao Nấu Dưa — Fresh clams simmered with fermented mustard greens and tomato — the most perfectly balanced sour-briny soup in the Vietnamese coastal kitchen.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Canh ngao nấu dưa is the soup that coastal Vietnamese households make when two ingredients are simultaneously at their best: ngao (hard-shell clams, Meretrix meretrix or Cyclina sinensis — the Asian hard clam) freshly dug from the tidal flats, and dưa cải (fermented mustard greens) that have been pickling for 3-5 days and reached their peak sourness. The combination of the clam's briny oceanic sweetness and the fermented green's sharp, funky acidity produces a broth that achieves a two-element flavour balance as satisfying as the four-element balance of canh chua — but with a different, more direct character that the Vietnamese describe as chua mặn (sour-salty) rather than the chua ngọt béo mặn (sour-sweet-rich-salty) of the southern tamarind soup.\n\nMeretrix meretrix (the hard-shell clam or asiatic hard clam) is among the most flavourful bivalves in the Vietnamese coastal food system — its dense, firm flesh contains a high concentration of free amino acids (particularly succinic acid, the shellfish umami compound responsible for the characteristic sweetness of clams and oysters) and the shells, when opened in a small amount of simmering liquid, release these compounds into the surrounding broth within minutes. The clam broth produced by 5-8 minutes of gentle simmering is sufficiently flavoured to serve as a soup base without any additional stock — the clams are their own broth.\n\nDưa cải (fermented mustard greens) is made by salting fresh cải bẹ leaves (a large-stemmed mustard green) and fermenting them for 3-7 days in their own liquid until they turn yellow, develop a clean sourness from lactic acid fermentation, and produce a slightly funky, deeply savoury fermented character that fresh mustard greens do not have. The fermentation transforms the glucosinolates (the compounds responsible for raw mustard's bitterness) into new flavour compounds, producing a vegetable that is sour and complex rather than bitter and simple.`,
    ingredientSections: [
        {
            title: `Clams`,
            items: [
                { amount: 800, unit: 'g', name: `fresh hard-shell clams (ngao / Meretrix meretrix)`, note: `alive — shells tightly closed; purged in salted water 30 min before cooking; substitute: fresh littleneck clams or Manila clams` },
                { amount: 2, unit: 'tbsp', name: `coarse salt`, note: `for purging in water` },
                { amount: 800, unit: 'ml', name: `cold water`, note: `for purging` },
            ],
        },
        {
            title: `Dưa cải (fermented mustard greens)`,
            items: [
                { amount: 200, unit: 'g', name: `dua cai (fermented mustard greens)`, note: `3-5 day fermented, yellow and sour — rinse once to reduce salt; available at Vietnamese grocers Germany; or make at home: salt cai be leaves 2% by weight, press under weight 3-5 days at room temperature` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `for sautéing the dưa cải before adding to broth` },
            ],
        },
        {
            title: `Broth additions`,
            items: [
                { amount: 3, name: `medium ripe tomatoes`, note: `2 quartered, 1 halved and charred` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 1, unit: 'tbsp', name: `fish sauce (nuoc mam)`, note: `adjust — dưa cải is already salty` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 300, unit: 'ml', name: `water`, note: `the clams produce most of the broth themselves` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 1, name: `bunch rau om (rice paddy herb)`, note: `central Vietnamese version sometimes uses rau om; northern version uses dill (thi la)` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
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
            title: `Purge and check the clams`,
            description: `Dissolve 2 tbsp coarse salt in 800ml cold water. Add clams and soak 30 minutes — they will expel sand and debris through their siphons. Lift clams out carefully — do not pour, as sand resettles at the bottom. Scrub each shell under cold running water. Discard any clams with cracked shells or that remain open when tapped. Live clams close tightly when disturbed — this closing reflex is the freshness indicator. Dead clams are open and do not respond to tapping, or feel very light (empty shell) when shaken.`,
            tip: `The salted water purging technique works because it creates a saline environment that prompts the clams to filter actively, expelling sand in the process. Plain fresh water does not trigger this filtering behaviour as effectively. The 30-minute window is sufficient for most clams — longer soaking does not produce cleaner clams and can cause stress that reduces their post-cooking flavour. The key quality check is the closing reflex: a healthy, fresh clam closes completely and firmly when touched. A clam that closes slowly, incompletely, or not at all should be discarded.`,
        },
        {
            title: `Prepare the dưa cải`,
            description: `Rinse the fermented mustard greens briefly under cold water — once, not repeatedly. A single rinse removes excess surface salt without stripping the fermented flavour compounds that took 3-5 days to develop. Squeeze gently to remove excess moisture. Cut into 3-4cm sections. Heat oil in the soup pot over medium-high heat. Add minced shallots and garlic — sauté until golden, 2 minutes. Add the dưa cải sections and stir-fry for 2-3 minutes until slightly caramelised at the edges. This brief sautéing develops new flavour compounds from the Maillard reaction between the fermented greens' amino acids and their residual sugars — producing a deeper, more complex flavour than adding the dưa cải directly to the broth without pre-cooking.`,
            tip: `The sautéing of dưa cải before adding it to the broth is the technique that most clearly distinguishes a considered canh ngao nấu dưa from a casual one. Raw dưa cải added directly to simmering broth contributes its sourness and saltiness but not the Maillard-produced depth of the sautéed version. The caramelisation of the fermented greens in the hot oil produces furaneol and other compounds that add a slight sweetness and roasted quality to the broth that is entirely absent without this step.`,
        },
        {
            title: `Build the broth base`,
            description: `Add charred tomato half and quartered fresh tomatoes to the sautéed dưa cải in the pot. Cook 3 minutes until tomatoes begin to break down. Add 300ml water. Bring to a simmer. Season with fish sauce and sugar — taste carefully before adding fish sauce, as the dưa cải contributes significant salt and sourness. The broth at this point should taste slightly over-sour and under-sweet — the clams' natural sweetness will balance it when they are added.`,
        },
        {
            title: `Steam and add the clams`,
            description: `Increase heat to high. Add the purged clams directly to the simmering broth. Cover the pot tightly. Cook over high heat for 5-8 minutes, shaking the pot gently once at the halfway point. The clams will open as they cook — the steam environment inside the covered pot opens the shells more evenly than boiling liquid. Remove the lid and discard any clams that remain closed after 8 minutes — they were not alive when cooking began. The clam liquid released as the shells open is the most flavourful element of the entire soup: pure, concentrated succinic-acid-rich shellfish essence that transforms the dưa cải broth from sour-vegetable to sour-briny-oceanic.`,
            tip: `The succinic acid in clams (and other bivalves) is the compound responsible for the characteristic umami-sweetness of shellfish that is distinct from the glutamic acid umami of meat and soy. Succinic acid activates specific taste receptors for what Japanese researchers have described as "kokumi" — a flavour dimension of richness, mouthfulness, and continuity that extends and deepens the perception of other flavours rather than adding a specific taste note of its own. The clam liquid released into the canh ngao nấu dưa broth during cooking is the kokumi element that makes the finished soup taste more complex and satisfying than the sum of its individual components.`,
        },
        {
            title: `Final balance and serve`,
            description: `Taste the finished broth — the clam liquid will have added oceanic sweetness that should now balance the dưa cải sourness. If still too sour: add a pinch of sugar. If too salty (from the dưa cải and clam liquid combined): add a small amount of water. The correct balance is chua mặn — sour and briny simultaneously, with neither dominant. Remove from heat. Scatter spring onion and black pepper. Add rau ôm or dill at the very last moment — raw. Ladle into bowls, distributing clams (shells on — opened in the bowl), dưa cải, and tomato pieces evenly. Serve with rice and lime. The correct eating of canh ngao nấu dưa: suck each clam from its shell directly at the table, dip in the broth once more, eat. The shell is the serving vessel for each clam.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}