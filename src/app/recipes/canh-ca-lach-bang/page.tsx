'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-ca-lach-bang',
    title: `Lạch Bạng Sour Fish Soup`,
    subtitle: `Canh Cá Lạch Bạng — Tĩnh Gia's coastal sour fish soup with fermented rice brine, dill, and sea fish caught at the mouth of the Bạng River.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Lạch Bạng is the fishing port at the mouth of the Bạng River in Tĩnh Gia district, the southernmost coastal district of Thanh Hóa province. The port has operated continuously since the Lê dynasty, and the fish soup that bears its name has been made in the households along this stretch of coast for as long as the boats have been going out. Canh cá Lạch Bạng is a sour fish soup — not sour from tamarind or lime, which are southern souring agents, but from nước dưa cải (fermented mustard green brine) or nước cơm (fermented rice washing water), the souring methods of the north-central coast that predate the widespread availability of citrus in Vietnamese cooking.\n\nThe fish used is whatever was caught that morning: cá thu (mackerel), cá hồng (red snapper), cá vược (sea bass), or the smaller cá nục (scad) that school densely in the Gulf of Tonkin during spring. The fish is cut into large bone-in sections and simmered directly in the souring liquid with dill (thì là) — the aromatic herb that the north-central coast uses with a frequency that surprises southern Vietnamese visitors — tomato, and a small amount of fish sauce. The result is a clean, sharp, deeply savoury soup that tastes of open water and fermented grain simultaneously.\n\nWhat makes canh cá Lạch Bạng distinct from the more widely known canh chua of the south is the complete absence of sweetness. Southern canh chua (made with tamarind and pineapple) has a sweet-sour balance; Lạch Bạng canh cá is purely sour and savoury, with the fermented grain brine providing a complexity that tamarind cannot replicate. The dill is the aromatic anchor. Without dill, it is a different soup.`,
    ingredientSections: [
        {
            title: `Fish`,
            items: [
                { amount: 700, unit: 'g', name: `fresh sea fish, bone-in sections`, note: `mackerel, sea bass, or red snapper — cut into 5cm pieces by fishmonger; bone-in only, fillets produce inferior broth` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `rubbed on fish, rested 10 min, rinsed — removes surface slime` },
                { amount: 1, unit: 'tsp', name: `turmeric powder (bot nghe)`, note: `rubbed on fish after salt rinse — the north-central coast standard for fish soups` },
            ],
        },
        {
            title: `Souring liquid — the Lạch Bạng distinction`,
            items: [
                { amount: 200, unit: 'ml', name: `nuoc dua cai (fermented mustard green brine)`, note: `the liquid from a jar of Vietnamese fermented mustard greens (dua cai) — strained clear; substitute: 150ml rice vinegar diluted with 100ml water` },
                { amount: 1, unit: 'L', name: `water` },
                { amount: 1, unit: 'tbsp', name: `nuoc vo gao (fermented rice washing water)`, note: `optional — soak 100g raw rice in 300ml water 4 hours, use the strained milky water; adds fermented grain depth` },
            ],
        },
        {
            title: `Aromatics and vegetables`,
            items: [
                { amount: 3, name: `medium tomatoes, quartered` },
                { amount: 2, name: `shallots, halved` },
                { amount: 2, name: `spring onions, white parts bruised for broth, green parts sliced for garnish` },
                { amount: 30, unit: 'g', name: `fresh ginger, sliced thin` },
                { amount: 2, name: `dried chili (ot kho), whole`, note: `added to broth for mild background heat — not blended in` },
            ],
        },
        {
            title: `Dill and seasoning`,
            items: [
                { amount: 1, name: `large bunch fresh dill (thi la)`, note: `the mandatory herb — roughly chopped, added in the final 2 minutes only` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar`, note: `a small amount only — not for sweetness but to round the fermented brine sharpness` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `for sauteing aromatics before adding liquid` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `fresh green chili (ot xanh), sliced` },
                { amount: 1, name: `bunch additional dill`, note: `served raw alongside for each person to add more` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the fish`,
            description: `Rub fish sections with coarse salt on all surfaces. Leave 10 minutes — the salt draws out surface moisture and any remaining blood. Rinse thoroughly under cold running water. Pat completely dry. Rub turmeric powder over all surfaces of the fish — the yellow colour will deepen during cooking and is the visual signature of this soup. The turmeric also reduces the fish odour that can develop during the slow simmer. Set aside at room temperature while preparing the broth base.`,
            tip: `Bone-in fish sections are non-negotiable for canh cá Lạch Bạng. The collagen in the bones dissolves into the broth during simmering, giving it a body and richness that fillet-based soups lack. The bones also slow the cooking of the surrounding flesh, preventing the fish from overcooking and falling apart before the broth has developed. Ask the fishmonger to cut the fish through the bone into 5cm steaks.`,
        },
        {
            title: `Prepare the souring liquid`,
            description: `If using fermented mustard green brine: strain through a fine sieve to remove any vegetable solids. Taste — it should be sharply sour, faintly salty, and smell of fermented brassica. If it smells of anything beyond this (ammonia, rot), discard and use the vinegar substitute. If making fermented rice washing water: soak 100g raw rice in 300ml water at room temperature for 4 hours minimum. Strain through a fine sieve, pressing the rice to extract the milky liquid. This liquid (nước vo gạo lên men) adds a subtle fermented grain note that rounds the sharpness of the mustard brine.`,
            tip: `The fermented mustard green brine (nước dưa cải) is the correct souring agent and is available wherever Vietnamese fermented mustard greens are sold — any Vietnamese or Chinese grocer in Germany will carry dưa cải in vacuum packs or jars. The brine inside the pack is the ingredient; the greens themselves are not used in this soup. Do not discard the brine when buying dưa cải for other recipes.`,
        },
        {
            title: `Build the broth`,
            description: `Heat neutral oil in a large pot over medium heat. Add halved shallots cut-side down and cook without moving until golden on the flat surface, about 3 minutes. Add bruised spring onion whites, ginger slices, and whole dried chili. Stir 60 seconds. Add water, fermented mustard green brine, and fermented rice water if using. Bring to a boil. Add quartered tomatoes. Reduce to a steady simmer and cook 15 minutes — the tomatoes will break down and colour the broth orange-red against the yellow of the turmeric.`,
        },
        {
            title: `Add the fish and simmer`,
            description: `Lower turmeric-rubbed fish sections into the simmering broth one by one — do not drop, which breaks the delicate flesh. The broth should maintain a gentle simmer, not a rolling boil. Season with fish sauce, salt, and the small amount of sugar. Simmer uncovered 12-15 minutes depending on thickness of fish sections — the flesh should be just opaque through to the bone and should flake slightly when pressed with a chopstick. Do not overcook: fish that has gone past the flaking stage becomes dry and falls off the bone entirely, clouding the broth.`,
            tip: `Check doneness by pressing the thickest section of fish with a chopstick — it should give slightly and the flesh near the bone should be just opaque, not glassy. In Lạch Bạng households, the fish is considered done when the eye of the fish (if using a head-on section) has turned completely white and the eye socket has opened slightly. This is the traditional visual timer that requires no poking.`,
        },
        {
            title: `Add dill and finish`,
            description: `Add roughly chopped dill to the pot in the final 2 minutes of cooking only — never earlier. Dill loses its volatile aromatic compounds within 3-4 minutes of heat exposure; added too early it becomes grassy and flat. Stir gently once to distribute the dill through the broth. Taste the broth: it should be sharp from the fermented brine, savoury from the fish and fish sauce, aromatic with dill, and have a faint sweetness from the tomato and the small sugar addition. The sour note should be clean and bright, not harsh.`,
            tip: `The 2-minute dill rule applies strictly. Experienced canh cá Lạch Bạng cooks add the dill, count to 90, and serve — they do not let the dill sit in the hot liquid. The colour of correctly timed dill is vivid green. Dill that has been in hot liquid for 5 minutes turns army-olive and smells of cooked herb rather than fresh. The difference is not subtle.`,
        },
        {
            title: `Serve over rice`,
            description: `Ladle fish sections and broth into large bowls or a communal pot at the centre of the table. Serve alongside steamed white rice — in Tĩnh Gia households, the soup is eaten by ladling broth over rice in the bowl, not eating the soup and rice separately. Place additional raw dill, sliced green chili, and lime wedges on the table. Each person adjusts the sourness of their bowl with lime and the heat with fresh chili. The fish is eaten from the bone with chopsticks — the flesh near the spine is the most tender and flavourful and is the most prized piece at the table.`,
            tip: `Canh cá Lạch Bạng is a meal in itself when ladled over rice — the fermented brine-soaked rice at the bottom of the bowl, saturated with turmeric-golden broth and dill oil, is what Tĩnh Gia locals describe as the best part. Do not drain the bowl before refilling with rice; let each layer of rice absorb the remaining broth before eating the next piece of fish.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}