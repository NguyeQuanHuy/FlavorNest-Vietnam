'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'hu-tieu-ben-tre',
    title: `Bến Tre Coconut Water Noodle Soup`,
    subtitle: `Hủ Tiếu Bến Tre — Rice noodle soup with a broth built on fresh coconut water instead of plain water — the Mekong Delta's sweetest hủ tiếu.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Hủ tiếu Bến Tre is the noodle soup that most directly expresses the province's identity as Vietnam's coconut land — a broth in which fresh coconut water replaces a significant portion of the plain water used in standard hủ tiếu preparations, producing a naturally sweet, faintly tropical base that gives the soup a character entirely its own. The coconut water is not a flavouring added in small amounts but a structural component: at least 40% of the total broth liquid, enough to measurably sweeten and round the pork bone and dried seafood base without making the soup taste of coconut.\n\nHủ tiếu is the noodle soup of the Mekong Delta — distinct from the pho of the north and the bún bò Huế of the centre, using wide, slightly translucent dried rice noodles (bánh hủ tiếu) that are softer and more yielding than pho noodles, combined with pork ribs, pork liver, shrimp, and quail eggs in a clear broth. The Bến Tre version adds tôm khô (dried shrimp) to the broth base alongside pork bones — the dried shrimp provide a concentrated seafood umami that, combined with the coconut water's natural sweetness, produces the characteristic clean, round flavour that Bến Tre locals describe simply as ngọt (sweet) — meaning not sugary but deeply satisfying in the way that good broth always is.\n\nThe dish is eaten throughout the day in Bến Tre but is most associated with the morning market — the stalls along Chợ Bến Tre where the coconut water is freshly pressed from the young coconuts that arrive from the island orchards at 5am, and the pork bones have been simmering since midnight.`,
    ingredientSections: [
        {
            title: `Coconut water broth`,
            items: [
                { amount: 600, unit: 'g', name: `pork bones (xuong heo)`, note: `blanched and rinsed` },
                { amount: 800, unit: 'ml', name: `fresh coconut water (nuoc dua tuoi)`, note: `from young coconuts — not canned; 40% of total broth volume` },
                { amount: 1.2, unit: 'L', name: `water` },
                { amount: 80, unit: 'g', name: `dried shrimp (tom kho)`, note: `soaked 15 min — the Bến Tre umami base` },
                { amount: 2, name: `medium onions, halved and charred` },
                { amount: 20, unit: 'g', name: `rock sugar (duong phen)` },
                { amount: 2, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Toppings`,
            items: [
                { amount: 200, unit: 'g', name: `pork spare ribs (suon heo)`, note: `simmered in broth 30 min, meat pulled from bone` },
                { amount: 150, unit: 'g', name: `pork liver (gan heo)`, note: `sliced 4mm, blanched 90 seconds only` },
                { amount: 200, unit: 'g', name: `fresh medium shrimp (tom)`, note: `peeled, deveined, poached in broth 2 min` },
                { amount: 8, name: `quail eggs (trung cut)`, note: `hard-boiled 4 min, peeled, halved` },
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, unit: 'tbsp', name: `pork lard or neutral oil` },
            ],
        },
        {
            title: `Noodles`,
            items: [
                { amount: 400, unit: 'g', name: `dried hu tieu noodles (banh hu tieu kho)`, note: `soaked in cold water 20 min, blanched 30 seconds; substitute: dried wide rice noodles` },
            ],
        },
        {
            title: `Garnish and condiments`,
            items: [
                { amount: 150, unit: 'g', name: `bean sprouts (gia do)`, note: `raw` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch ngo gai (sawtooth coriander)` },
                { amount: 1, name: `lime, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
                { amount: 2, unit: 'tbsp', name: `hoisin sauce (tuong den)`, note: `served on side for dipping pork` },
                { amount: 1, unit: 'tbsp', name: `sa te chili oil` },
            ],
        },
    ],
    steps: [
        {
            title: `Build the coconut water broth`,
            description: `Blanch pork bones in boiling water 5 minutes, drain and rinse each bone clean. Char onion halves cut-side down over gas flame until blackened on the flat surface. Combine blanched bones, soaked dried shrimp, charred onions, and 1.2 L cold water in a stockpot. Bring to a boil, skim foam thoroughly for 10 minutes. Reduce to a low simmer. After 30 minutes of simmering, add the fresh coconut water — do not add at the beginning as prolonged boiling drives off the delicate coconut aromatics. Simmer 30 more minutes. Season with rock sugar, fish sauce, and salt. Strain through fine sieve.`,
            tip: `The coconut water is added halfway through the broth-making — not at the beginning — because prolonged boiling at over 100°C destroys the volatile aromatic compounds (primarily lactones and esters) responsible for the coconut water's characteristic fragrance. Added at 30 minutes, it simmers for another 30 minutes at a gentle heat that extracts the sugars and minerals without destroying the aroma. The finished broth should smell faintly of coconut with the dried shrimp umami base underneath — not like coconut milk soup.`,
        },
        {
            title: `Cook the toppings`,
            description: `Simmer pork ribs in the broth for 30 minutes until tender. Remove and pull the rib meat from the bone in large pieces. Poach shrimp directly in the simmering broth 2 minutes until pink — remove. Blanch liver slices in a separate pot of boiling water for exactly 90 seconds — remove immediately. Boil quail eggs 4 minutes in salted water, cool in ice water, peel and halve. Keep all toppings warm and covered until assembly.`,
        },
        {
            title: `Soak and blanch the noodles`,
            description: `Soak dried hủ tiếu noodles in cold water for 20 minutes until pliable. Bring a separate pot of water to a full rolling boil. Blanch soaked noodles in a wire basket for exactly 30 seconds — they should be just softened but still have slight resistance. Drain immediately. Hủ tiếu noodles overcook faster than pho noodles due to their thinner structure — 30 seconds at a full boil is the maximum before they become mushy. Divide between 4 bowls immediately.`,
            tip: `The texture difference between hủ tiếu and pho noodles reflects their different starch compositions. Hủ tiếu is made from 100% rice starch; pho sometimes contains a small amount of tapioca or corn starch for strength. The pure rice starch of hủ tiếu produces a more delicate, yielding noodle that is the correct textural counterpart to the sweet coconut broth — a firmer noodle would fight the broth's gentleness rather than complementing it.`,
        },
        {
            title: `Assemble the bowl`,
            description: `Place a small amount of pork lard or neutral oil in the bottom of each bowl — it will melt into the broth when ladled and round the flavour. Arrange pork rib meat, shrimp, liver slices, and quail egg halves over the noodles. Ladle hot coconut water broth generously over everything — the bowl should be clearly soupy. Scatter spring onion and fried shallots. Serve immediately with raw bean sprouts, rau răm, ngò gai, lime, and chili on the side. Place hoisin sauce in a small dipping saucer alongside.`,
        },
        {
            title: `Eat the Bến Tre way`,
            description: `Add raw bean sprouts to the bowl first — they wilt in the hot broth within 30 seconds. Add rau răm and ngò gai. Squeeze lime directly into the broth. The coconut water base makes the broth naturally sweeter than other hủ tiếu versions — add less sugar than you normally would and taste before adding any condiment. Dip pork rib meat in hoisin sauce before eating. The quail egg halved yolk will break into the broth — this is the correct eating method, not a mistake. Drink the remaining broth from the bowl at the end — the coconut water's lingering sweetness is clearest in the final spoonfuls.`,
            tip: `The sweetness of hủ tiếu Bến Tre is what most distinguishes it at first taste from other Mekong Delta hủ tiếu. Visitors from other provinces sometimes add fish sauce or chili to compensate, which misses the point — the coconut water sweetness is the dish's defining character, not a deficiency to be corrected. Eat it as it comes before adjusting anything. The sweetness is not cloying; it is the ngọt (wholesome sweetness) of fresh coconut water that is fundamentally different from added sugar sweetness.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}