'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-mam-can-tho',
    title: `Cần Thơ Fermented Fish Noodle Soup`,
    subtitle: `Bún Mắm Cần Thơ — The Mekong Delta's most complex noodle soup: mắm cá lóc broth with snakehead fish, shrimp, squid, roasted pork, and the full delta vegetable table.`,
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bún mắm is the noodle soup that the Mekong Delta considers its most sophisticated — a preparation that uses mắm cá lóc (fermented snakehead paste) as its broth foundation, building from this pungent base through a 45-minute simmer into something that transcends its origin: a golden, lemongrass-fragrant broth with a deep umami complexity that plain fish or pork stock cannot produce, topped with multiple proteins and served with the most abundant vegetable plate of any Vietnamese noodle soup.\n\nThe Cần Thơ version is the benchmark bún mắm — the city sits at the heart of the Mekong Delta where the four great rivers converge, giving it access to the finest fermented fish paste from Châu Đốc to the west, the freshest snakehead and shrimp from the surrounding channels, and the widest variety of Mekong Delta vegetables from the floating markets that supply the city daily. A properly assembled bowl of bún mắm Cần Thơ contains: the mắm broth, fresh rice vermicelli, poached snakehead fish, whole shrimp, squid, sliced roasted pork belly, and at least 6-8 different fresh vegetables and herbs alongside.\n\nThe dish's complexity has made it the subject of debate among Mekong Delta food writers: is bún mắm a sophisticated refinement of the region's fermented fish culture, or is it the region's fermented fish culture at maximum expression? The answer is both. The mắm's transformation from raw paste to clear, golden broth over 45 minutes of simmering is one of Vietnamese cooking's most dramatic flavour transformations — the pungency mellows, the umami deepens, and what arrives in the bowl is something that smells of lemongrass and tastes of the river without tasting of fermented fish at all.`,
    ingredientSections: [
        {
            title: `Mắm broth base`,
            items: [
                { amount: 150, unit: 'g', name: `mam ca loc (fermented snakehead paste)`, note: `Châu Đốc brand preferred — dissolved in 500ml warm water, strained through cheesecloth` },
                { amount: 1.2, unit: 'L', name: `light pork bone broth`, note: `or water — the mắm provides the primary flavour` },
                { amount: 4, name: `lemongrass stalks, bruised and knotted` },
                { amount: 30, unit: 'g', name: `fresh galangal, sliced` },
                { amount: 4, name: `shallots, halved and charred` },
                { amount: 25, unit: 'g', name: `rock sugar (duong phen)` },
                { amount: 2, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 2, unit: 'tbsp', name: `annatto oil (dau mau dieu)`, note: `deep orange colour` },
            ],
        },
        {
            title: `Proteins — the Cần Thơ full set`,
            items: [
                { amount: 300, unit: 'g', name: `fresh snakehead fish fillet (ca loc)`, note: `sliced 3cm, rubbed with turmeric — poached in broth 5 min` },
                { amount: 200, unit: 'g', name: `fresh medium shrimp (tom)`, note: `peeled, deveined — poached in broth 2 min` },
                { amount: 150, unit: 'g', name: `squid (muc)`, note: `cleaned, scored and cut — poached 60 sec` },
                { amount: 200, unit: 'g', name: `thit heo quay (roasted pork belly)`, note: `or char siu — sliced thin, skin-on` },
            ],
        },
        {
            title: `Noodles`,
            items: [
                { amount: 400, unit: 'g', name: `fresh bun tuoi (rice vermicelli)`, note: `thick-gauge for bún mắm — not the fine bún bò Huế gauge` },
            ],
        },
        {
            title: `The Mekong Delta vegetable table`,
            items: [
                { amount: 150, unit: 'g', name: `rau muong (water spinach)`, note: `cut 5cm` },
                { amount: 100, unit: 'g', name: `bong sung (water lily stems)`, note: `cut 4cm` },
                { amount: 100, unit: 'g', name: `bap chuoi (banana blossom)`, note: `shredded, soaked in lime water` },
                { amount: 100, unit: 'g', name: `chuoi chat (green banana)`, note: `sliced thin` },
                { amount: 150, unit: 'g', name: `gia do (bean sprouts)`, note: `raw` },
                { amount: 1, name: `bunch rau om (rice paddy herb)` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch ngo gai` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
                { amount: 2, unit: 'tbsp', name: `sa te chili oil` },
            ],
        },
    ],
    steps: [
        {
            title: `Dissolve and strain the mắm`,
            description: `Place mắm cá lóc in a bowl with 500ml warm water. Press and massage the paste into the water for 4-5 minutes until completely dissolved — the liquid will be opaque amber-orange and intensely pungent. Strain through cheesecloth-lined sieve, pressing the solids firmly. Discard solids — fish bones, skin fragments. The strained liquid is deep orange-brown and smells aggressively of fermented fish at this stage. This is correct. The transformation happens during the simmer.`,
            tip: `The quality of the mắm cá lóc determines everything in bún mắm. Châu Đốc-produced mắm has a specific flavour profile — amber colour, integrated fermented depth, no harsh off-notes — that cheaper imitations do not match. In Germany, look for mắm cá lóc at Vietnamese grocers, order from Vietnamese food importers, or use the highest quality mắm ruốc as a partial substitute (use 100g mắm ruốc + 50g dried shrimp dissolved together). The colour will differ but the umami depth is comparable.`,
        },
        {
            title: `Build the broth — 45 minutes`,
            description: `Combine strained mắm liquid, pork broth, charred shallots, lemongrass, galangal, and annatto oil in a large pot. Bring to a boil — significant foam will rise, skim thoroughly for the first 10 minutes. Reduce to a steady simmer uncovered. Cook 35 more minutes. The transformation: at 10 minutes the broth still smells aggressively of mắm; at 25 minutes the pungency has half-mellowed; at 45 minutes it smells of lemongrass and river complexity. Season with rock sugar, fish sauce, and salt. Taste — the broth should be golden-orange, savoury-sweet, lemongrass-forward with the mắm's umami as a deep background note rather than the dominant smell.`,
            tip: `The 45-minute simmer is the minimum for the mắm transformation — the volatile compounds responsible for the raw paste's pungency are pyrazines and short-chain fatty acids that evaporate from the simmering surface when exposed to heat and airflow. An uncovered pot accelerates this evaporation; a covered pot traps the volatiles and the broth remains more pungent. This is why all professional bún mắm broth is simmered uncovered — the open surface is functional, not careless.`,
        },
        {
            title: `Poach the proteins in sequence`,
            description: `Keep the broth at a moderate simmer. Add turmeric-rubbed snakehead fish slices — poach 5 minutes until just opaque, remove. Add shrimp — poach 2 minutes until pink, remove. Add scored squid — poach exactly 60 seconds, remove immediately. Each protein is poached separately and removed before the next is added — this prevents cross-flavour contamination and ensures each protein cooks to its individual correct texture. The squid 60-second window is absolute — beyond 90 seconds squid becomes rubbery.`,
        },
        {
            title: `Prepare the vegetable table`,
            description: `Arrange all vegetables on a large communal plate in the centre of the table before the bowls are assembled — bông súng, banana blossom, green banana, water spinach, and bean sprouts in the centre; rau ôm, rau răm, ngò gai around the outside. The visual abundance of the vegetable plate is part of the bún mắm aesthetic — a sparse plate is considered inhospitable in Mekong Delta service culture. Each diner adds vegetables to their bowl throughout the meal rather than pre-loading.`,
        },
        {
            title: `Assemble the bowl`,
            description: `Blanch bún vermicelli 10 seconds in boiling water, drain, divide into bowls. Arrange snakehead fish slices, shrimp, squid, and sliced roasted pork over the noodles — each protein visible and distinct, not buried. Ladle 250-300ml of hot mắm broth over everything — more generous than pho, less than lẩu. Add a drizzle of annatto oil for colour. Scatter spring onion and fried shallots. Serve immediately with the full vegetable plate, lime, chili, and sa tế alongside.`,
        },
        {
            title: `Eat the Mekong Delta way`,
            description: `Add raw bean sprouts to the bowl immediately — they wilt in the hot broth within 30 seconds to the correct just-tender texture. Add rau ôm last and raw — it wilts in 20-30 seconds releasing its lemony-cumin oils into the broth. Squeeze lime. The sequence of flavour across the bowl: first the lemongrass-mắm broth's umami depth, then the sweet snakehead fish, then the shrimp's brininess, then the squid's firmness, then the roasted pork's smoke, then the herb freshness. Five distinct protein experiences in a single bowl — bún mắm is the Mekong Delta's answer to the question of what a river tastes like when cooked with patience and knowledge.`,
            tip: `Bún mắm is considered the most sophisticated of the Mekong Delta's noodle soups — more complex than bún cá Châu Đốc, more elaborate than hủ tiếu, more demanding than cháo cá lóc. In Cần Thơ, ordering bún mắm at a restaurant signals that you understand the delta's food culture. The dish requires knowledge to eat correctly: adding the vegetables in the right sequence, balancing the broth's richness with herb freshness, pacing the protein consumption. A tourist who eats it correctly is treated with immediate respect.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}