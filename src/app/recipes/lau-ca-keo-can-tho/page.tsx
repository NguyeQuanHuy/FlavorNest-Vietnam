'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'lau-ca-keo-can-tho',
    title: `Cần Thơ Mudskipper Hotpot`,
    subtitle: `Lẩu Cá Kèo — Live mudskipper fish dropped into a simmering tamarind-mắm broth — Cần Thơ's most theatrical and most Mekong Delta hotpot.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Lẩu cá kèo is the hotpot that most viscerally expresses the Mekong Delta's relationship with its waterways — a simmering pot of tamarind-mắm broth into which live cá kèo (mudskipper fish, Boleophthalmus boddarti) are dropped at the table, the fish still alive and moving when they enter the broth, cooking within 60-90 seconds in the simmering liquid. The theatrical element — live fish added to a hot pot — is not novelty but practicality: cá kèo deteriorates so rapidly after death that the only way to serve it at peak freshness is to cook it alive. A dead cá kèo has a muddy, unpleasant flavour; a live one has clean, sweet flesh that the Mekong Delta considers among the finest of all its river fish.\n\nCá kèo (Boleophthalmus boddarti — the blue-spotted mudskipper) is a remarkable animal — an amphibious fish that lives on the mudflats of the Mekong Delta's mangrove edges, capable of walking on land using its pectoral fins, breathing air through its damp skin, and spending hours out of water. It inhabits the interface between land and water — the tidal mudflats, the rice paddy margins, and the irrigation channel banks of the delta's lower reaches. This amphibious lifestyle produces an unusual flesh: denser and more actively muscled than a purely aquatic fish, with a firm, slightly gelatinous quality from the fish's constant physical activity.\n\nThe broth is built on the same mắm cá lóc foundation used in lẩu mắm miền Tây, but lighter and more tamarind-forward — the sourness is the dominant note, balanced by the sweetness of the tomato and pineapple. The live fish cook in this sour broth and absorb its flavour as they set, producing a fish that tastes simultaneously of its own clean sweetness and of the tamarind-mắm environment it cooked in.`,
    ingredientSections: [
        {
            title: `Live mudskipper fish`,
            items: [
                { amount: 600, unit: 'g', name: `live ca keo (Boleophthalmus boddarti — mudskipper)`, note: `kept alive in a container of fresh water until the moment of cooking; substitute: very fresh whole small catfish or live shrimp — the liveness matters for flavour` },
            ],
        },
        {
            title: `Tamarind-mắm broth`,
            items: [
                { amount: 80, unit: 'g', name: `mam ca loc (fermented snakehead paste)`, note: `dissolved in 300ml warm water, strained` },
                { amount: 40, unit: 'g', name: `tamarind block (me chua)`, note: `dissolved in 100ml warm water, strained` },
                { amount: 300, unit: 'ml', name: `fresh pineapple juice`, note: `strained from blended fresh pineapple` },
                { amount: 2, name: `medium tomatoes, quartered` },
                { amount: 3, name: `shallots, charred` },
                { amount: 3, name: `lemongrass stalks, bruised` },
                { amount: 20, unit: 'g', name: `rock sugar` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `annatto oil`, note: `for deep orange colour` },
                { amount: 1, unit: 'L', name: `water` },
            ],
        },
        {
            title: `Mekong vegetables`,
            items: [
                { amount: 150, unit: 'g', name: `bong dien dien (sesbania flower)`, note: `the Mekong Delta's signature lẩu flower — lightly bitter; substitute: chrysanthemum greens` },
                { amount: 150, unit: 'g', name: `bong sung (water lily stems)`, note: `cut 4cm` },
                { amount: 100, unit: 'g', name: `rau muong (water spinach)` },
                { amount: 150, unit: 'g', name: `gia do (bean sprouts)`, note: `raw` },
                { amount: 100, unit: 'g', name: `chuoi chát (unripe banana)`, note: `sliced thin` },
                { amount: 100, unit: 'g', name: `bap chuoi (banana blossom)`, note: `shredded` },
            ],
        },
        {
            title: `Noodles and garnish`,
            items: [
                { amount: 400, unit: 'g', name: `bun tuoi (fresh rice vermicelli)` },
                { amount: 1, name: `bunch rau om (rice paddy herb)` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch ngo gai` },
                { amount: 3, name: `spring onions, sliced` },
                { amount: 3, unit: 'tbsp', name: `fried shallots` },
                { amount: 3, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
                { amount: 2, unit: 'tbsp', name: `sa te chili oil` },
            ],
        },
    ],
    steps: [
        {
            title: `Build the tamarind-mắm broth`,
            description: `Dissolve mắm cá lóc in warm water, strain through cheesecloth. Dissolve tamarind block in warm water, strain. Blend fresh pineapple and strain for juice. Combine mắm liquid, tamarind liquid, pineapple juice, charred shallots, lemongrass, and 1L water in a pot. Bring to a boil, skim foam 10 minutes. Add quartered tomatoes, rock sugar, fish sauce, and annatto oil. Simmer 20 minutes — the tomatoes will break down and the mắm pungency will mellow into a complex, sour-sweet base. The broth should be deep orange, sour-leading, and have the mắm's umami depth underneath the tamarind brightness.`,
            tip: `The Cần Thơ lẩu cá kèo broth is more tamarind-forward than the An Giang lẩu mắm — the tamarind sourness is calibrated specifically for the delicate sweetness of cá kèo, which is overwhelmed by the more assertive mắm base used for pork and shrimp. The higher pineapple juice ratio also adds an enzyme (bromelain) that partially tenderises the fish skin during cooking — a byproduct of the flavour choice that produces a better texture outcome.`,
        },
        {
            title: `Set up the table`,
            description: `Transfer simmering broth to a hotpot vessel on a portable burner at the table centre. Arrange all Mekong vegetables on plates around the pot — the bông điên điển, bông súng, water spinach, bean sprouts, unripe banana, and banana blossom displayed in abundance. Place bún in a separate bowl. Arrange herb plate with rau ôm, rau răm, ngò gai alongside. Keep the live cá kèo in their water container beside the pot — do not add to the broth until the pot is at a full simmer and everyone is seated and ready.`,
        },
        {
            title: `The live fish moment`,
            description: `When the broth reaches a full simmer and the table is ready: transfer the live cá kèo directly from their water container into the simmering broth using a slotted spoon or small net. The fish will react to the heat immediately. Cover with a lid for 60-90 seconds — the fish cook extremely fast due to their small size (8-12cm) and firm, dense flesh. After 90 seconds, the fish will be still, their skin slightly curled, flesh opaque throughout. Do not overcook — cá kèo becomes dry and loses its characteristic sweetness beyond 2 minutes in simmering broth.`,
            tip: `The live-fish cooking is the most culturally significant moment of lẩu cá kèo — it is the act that makes this dish specifically of the Mekong Delta rather than generically Vietnamese. The practice reflects the delta's fundamental relationship with water and fish: the fish moves from river to pot to bowl within minutes, with no intervening preservation, processing, or delay. This immediacy — the shortest possible distance between the living fish and the eating — is the Mekong Delta food philosophy at its most direct. Cook in small batches of 6-8 fish to maintain broth temperature.`,
        },
        {
            title: `Add vegetables in sequence`,
            description: `After the fish are added and covered, place the first round of vegetables: unripe banana and banana blossom first (need 3-4 minutes), then bông súng and water spinach (2 minutes), then bông điên điển and bean sprouts last (60-90 seconds). The bông điên điển — the yellow sesbania flower specific to Mekong flood season — is added last because it wilts to a silky, slightly bitter tenderness in under 60 seconds; overcooking destroys both its colour and its delicate bitter note that is one of the defining flavours of the Mekong Delta lẩu tradition.`,
        },
        {
            title: `Build the personal bowl`,
            description: `Place bún vermicelli in each bowl. Add retrieved cá kèo (2-3 fish per person), vegetables, and a generous ladle of broth. The cá kèo is eaten whole — no filleting. The small bones are edible and soft enough to eat after the 90-second cook. The skin, which in a freshly live-cooked cá kèo has a clean, slightly gelatinous quality, is the part that absorbs the most broth flavour. Tear the fish from its bones at the table with chopsticks. Add rau ôm and rau răm to the bowl — rau ôm is essential, never omitted. Squeeze lime. Add chili or sa tế to preference.`,
            tip: `Cá kèo eaten whole requires confidence — the first-time eater who tries to fillet the tiny fish loses most of the flesh in the process. The correct approach: hold the fish by the tail with one chopstick, bite from head to tail in two bites. The spine and large bones remain; the flesh, skin, and small bones are eaten. In Cần Thơ, speed of eating cá kèo whole is considered a marker of genuine delta heritage — the visitor who hesitates is gently teased.`,
        },
        {
            title: `Drink the final broth`,
            description: `As with all Mekong Delta lẩu, the final broth — accumulated fish sweetness, tamarind sourness, mắm depth, and vegetable sugars after 90 minutes of communal eating — is the meal's most complex expression. Add remaining bún directly to the pot for the closing noodles (bún kết). Ladle into bowls and drink slowly. The fish that were alive at the meal's beginning have transformed the broth into something that did not exist at the start — this progressive enrichment across the meal is the design principle of all great lẩu, and lẩu cá kèo Cần Thơ is among its finest expressions.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}