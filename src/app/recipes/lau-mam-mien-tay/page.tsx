'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'lau-mam-mien-tay',
    title: `Mekong Delta Fermented Fish Hotpot`,
    subtitle: `Lẩu Mắm Miền Tây — An Giang's communal hotpot built on mắm cá lóc broth with bông súng, rau dừa, chuối chát, and a table full of Mekong vegetables.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Lẩu mắm is the most communal and most distinctively Mekong Delta dish in the entire Vietnamese hotpot tradition — a simmering pot of fermented fish broth surrounded by the full abundance of the delta's waterways: bông súng (water lily stems), rau dừa (coconut shoots), bắp chuối (banana blossom), chuối chát (unripe banana), kèo nèo (water mimosa), rau muống (water spinach), and whatever freshwater fish and shrimp were caught that morning. The meal takes an hour to eat properly and the broth becomes progressively richer as each vegetable and protein releases into the simmering liquid.\n\nThe broth is built on the same mắm cá lóc foundation as bún cá Châu Đốc, but cooked more aggressively and seasoned more heavily — lẩu requires a stronger base because the broth is diluted progressively by the water content of the many vegetables added throughout the meal. The lemongrass, galangal, and fresh turmeric quantities are higher than in the noodle soup version, and a significant amount of pork belly is added to the broth as a secondary protein and fat source that enriches the liquid as the meal advances.\n\nLẩu mắm is An Giang at its most generous — a dish designed for 6-10 people eating together for two hours, adding vegetables in waves, arguing about which green to add next, pouring more broth when the pot runs low. It cannot be rushed and should not be attempted alone.`,
    ingredientSections: [
        {
            title: `Mắm broth base`,
            items: [
                { amount: 200, unit: 'g', name: `mam ca loc (fermented snakehead paste)`, note: `dissolved in 2L water, strained — discard solids` },
                { amount: 500, unit: 'ml', name: `additional water or light pork stock` },
                { amount: 4, name: `lemongrass stalks, bruised` },
                { amount: 40, unit: 'g', name: `fresh turmeric, sliced` },
                { amount: 30, unit: 'g', name: `fresh galangal, sliced` },
                { amount: 4, name: `shallots, charred` },
                { amount: 30, unit: 'g', name: `rock sugar` },
                { amount: 2, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 2, unit: 'tbsp', name: `annatto oil (dau mau dieu)`, note: `for deep orange colour` },
            ],
        },
        {
            title: `Proteins`,
            items: [
                { amount: 300, unit: 'g', name: `pork belly (ba chi heo)`, note: `sliced thin — added to broth from the start, enriches the base` },
                { amount: 300, unit: 'g', name: `fresh snakehead or catfish fillet (ca loc or ca tre)`, note: `sliced 3cm — added at table` },
                { amount: 200, unit: 'g', name: `fresh medium shrimp (tom)`, note: `peeled and deveined — added at table` },
                { amount: 150, unit: 'g', name: `pork liver (gan heo)`, note: `sliced thin — cooked 90 seconds only` },
                { amount: 200, unit: 'g', name: `squid (muc)`, note: `cleaned and scored — optional` },
            ],
        },
        {
            title: `The Mekong vegetable table (rau song lau mam)`,
            items: [
                { amount: 150, unit: 'g', name: `bong sung (water lily stems)`, note: `cut 5cm — the most prized lẩu mắm vegetable` },
                { amount: 100, unit: 'g', name: `rau dua (coconut shoot tips)`, note: `tender inner shoots; substitute: bean sprouts` },
                { amount: 100, unit: 'g', name: `bap chuoi (banana blossom)`, note: `shredded thin, soaked in lime water` },
                { amount: 100, unit: 'g', name: `chuoi chat (unripe banana)`, note: `sliced thin — astringency balances mắm richness` },
                { amount: 150, unit: 'g', name: `rau muong (water spinach)`, note: `cut 5cm` },
                { amount: 100, unit: 'g', name: `keo neo (water mimosa / Neptunia oleracea)`, note: `tender shoots; substitute: watercress` },
                { amount: 150, unit: 'g', name: `bean sprouts (gia do)`, note: `raw` },
                { amount: 100, unit: 'g', name: `eggplant (ca tim)`, note: `cut into wedges — soaks up the mắm broth beautifully` },
            ],
        },
        {
            title: `Noodles`,
            items: [
                { amount: 400, unit: 'g', name: `fresh rice vermicelli (bun tuoi)`, note: `served in a separate bowl alongside — added to personal bowl not the pot` },
            ],
        },
        {
            title: `Herb plate and condiments`,
            items: [
                { amount: 1, name: `bunch rau om (rice paddy herb)` },
                { amount: 1, name: `bunch rau ram (Vietnamese coriander)` },
                { amount: 1, name: `bunch ngo gai (sawtooth coriander)` },
                { amount: 1, name: `bunch hung lui (mint)` },
                { amount: 3, name: `limes, wedged` },
                { amount: 4, name: `bird's eye chili, sliced` },
                { amount: 2, unit: 'tbsp', name: `sa te chili oil` },
                { amount: 2, unit: 'tbsp', name: `mam nem or extra mam ca loc`, note: `for extra pungency on the side` },
            ],
        },
    ],
    steps: [
        {
            title: `Dissolve and strain the mắm — build the base`,
            description: `Dissolve 200g mắm cá lóc in 2L warm water — press and massage for 4-5 minutes until fully dissolved. Strain through cheesecloth-lined sieve, pressing firmly. Discard solids. Pour strained mắm liquid into a large pot with additional water or pork stock. Bring to a boil, skim foam thoroughly for 10 minutes. Add charred shallots, lemongrass, turmeric, galangal, rock sugar, fish sauce, and salt. Add pork belly slices directly to the simmering broth — they will cook through in 15 minutes and begin releasing fat into the liquid. Simmer uncovered 30 minutes until broth is golden-orange, fragrant, and the initial pungency has mellowed. Add annatto oil and stir.`,
            tip: `Lẩu mắm broth must be stronger and more aggressively seasoned than bún cá Châu Đốc broth — it will be diluted significantly by the water content of 8+ vegetables added throughout the meal. Season the starting broth so it tastes slightly too salty and too pungent at the beginning; by mid-meal it will be perfectly balanced as vegetable water has thinned it. This forward-seasoning is the technique that keeps the broth flavourful through the entire meal rather than becoming watery by the second round of vegetables.`,
        },
        {
            title: `Prepare all vegetables before the meal begins`,
            description: `Prepare all vegetables before sitting down — lẩu mắm is eaten continuously and there is no time during the meal for preparation. Soak banana blossom in water with lime juice. Slice unripe banana paper-thin and drop into lime water to prevent browning. Cut water lily stems into 5cm pieces. Tear water spinach into manageable lengths. Arrange all vegetables on a large communal plate or several plates in the centre of the table. The abundance of the vegetable spread is part of the visual generosity of lẩu mắm — a sparse vegetable plate is considered inhospitable.`,
        },
        {
            title: `Set up the table`,
            description: `Transfer the simmering mắm broth (with pork belly already in it) to a hotpot vessel on a portable burner at the centre of the table. Arrange all prepared vegetables, raw fish, shrimp, liver, and squid on plates around the pot. Place bún vermicelli in a separate bowl with a ladle alongside — each person adds noodles to their personal bowl, not directly to the pot. Set out individual bowls, chopsticks, and slotted spoons. Place herb plate, lime wedges, chili, and sa tế within reach of every seat. The mắm nem or extra mắm goes in a small dish on the side for those who want more pungency.`,
        },
        {
            title: `The lẩu mắm vegetable sequence`,
            description: `Lẩu mắm vegetables are added to the pot in a specific sequence based on cooking time and flavour contribution. First round: eggplant (needs 5 minutes) and unripe banana (needs 3 minutes to soften slightly and lose raw starchiness). Second round: water spinach, water lily stems, kèo nèo (all need 2 minutes). Third round: bean sprouts, coconut shoot tips, banana blossom (need only 60-90 seconds). The astringent vegetables (banana, banana blossom) go early because their tannins need time to soften; the delicate greens go last. Never add all vegetables simultaneously — the pot temperature drops and everything becomes uniformly mushy.`,
            tip: `The correct lẩu mắm sequence is the knowledge that separates experienced Mekong Delta eaters from first-timers. In An Giang households, the most senior woman at the table manages the pot — deciding what goes in when, controlling the heat, adding water when the broth reduces too much. This pot-management role is considered a skill and a form of hospitality. At home, designate one person as the pot manager; a hotpot with no one managing it produces an overcooked, diluted result by the second round.`,
        },
        {
            title: `Cook the proteins`,
            description: `Add fish fillet slices to the simmering broth 3-4 minutes after adding the first round of vegetables — the broth needs the vegetable sweetness already dissolved before the fish goes in. Cook fish 3-4 minutes until just opaque. Add shrimp 2 minutes — until pink. Add liver last, for exactly 90 seconds — overcooked liver becomes grainy. Remove each protein with a slotted spoon as soon as done. Place in personal bowls over a small amount of bún. The squid, if using, goes directly into the hot broth for 60-90 seconds — it curls and sets almost immediately.`,
        },
        {
            title: `Build the personal bowl and eat`,
            description: `Place a small amount of bún vermicelli in your bowl. Add whatever protein and vegetables you retrieved from the pot. Ladle 2-3 spoonfuls of mắm broth over everything — the broth is the seasoning. Add a large pinch of rau ôm and rau răm directly to the bowl. Squeeze lime. Add chili or sa tế to personal preference. Eat the bowl, then return to the pot for the next round. The meal rhythm is: add vegetables and proteins to pot → wait → retrieve into personal bowl → eat → repeat. The conversation, the waiting, and the refilling are as important as the food.`,
        },
        {
            title: `The final broth`,
            description: `When all proteins and most vegetables have been eaten, the remaining broth in the pot will be rich, complex, and deeply coloured — enriched by the pork belly fat, the fish proteins, the vegetable sugars, and the accumulated mắm depth. Add any remaining bún directly to the pot and cook 1 minute. Ladle into bowls and drink as the meal's close. In An Giang, this final bowl of broth-soaked noodles is called the "bún kết" — the closing noodles — and signals the end of the meal. Nobody leaves the table before the bún kết is finished.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}