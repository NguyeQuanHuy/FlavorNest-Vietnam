'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-ca-chau-doc',
    title: `Châu Đốc Fermented Fish Noodle Soup`,
    subtitle: `Bún Cá Châu Đốc — An Giang's most distinctive noodle soup: snakehead fish in a broth built on mắm cá lóc, turmeric, and lemongrass.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bún cá Châu Đốc is the noodle soup that defines An Giang province — and the dish that most directly expresses the mắm (fermented fish) culture that makes Châu Đốc the fermented fish capital of Vietnam. Where most Vietnamese noodle soups build their broth from bones, dried seafood, or aromatics, bún cá Châu Đốc builds its broth foundation from mắm cá lóc — fermented snakehead fish paste — dissolved and simmered until the pungency mellows and transforms into a deep, complex umami base that nothing else in Vietnamese cooking replicates.\n\nCá lóc (Channa striata — the striped snakehead) is the defining fish of the Mekong Delta — abundant in the rice paddies, irrigation channels, and floodplains of An Giang, Đồng Tháp, and the surrounding provinces. During the annual flood season (mùa nước nổi, August to November), the fish is caught in enormous quantities and a significant portion is preserved as mắm cá lóc — packed in salt and fermented for 6-12 months in ceramic jars until the flesh breaks down into a pungent, amber-coloured paste that is the pantry backbone of Châu Đốc cooking.\n\nThe broth is built by dissolving mắm cá lóc in water, straining out the solids, and simmering the strained liquid with lemongrass, turmeric, galangal, and a small amount of rock sugar. Fresh cá lóc is then poached directly in the broth. The result is a soup with two layers of snakehead fish: the fermented depth in the broth and the clean, sweet flesh of the freshly cooked fish on top — a dual-expression of the same ingredient that makes bún cá Châu Đốc unlike any other noodle soup in Vietnam.`,
    ingredientSections: [
        {
            title: `The mắm broth base`,
            items: [
                { amount: 150, unit: 'g', name: `mam ca loc (fermented snakehead fish paste)`, note: `Châu Đốc brand preferred; available at Vietnamese grocers in Germany; substitute: 100g mam ca sac or any Vietnamese fermented fish paste` },
                { amount: 1.5, unit: 'L', name: `water`, note: `for dissolving and straining the mắm` },
            ],
        },
        {
            title: `Broth aromatics`,
            items: [
                { amount: 3, name: `lemongrass stalks, bruised and knotted` },
                { amount: 30, unit: 'g', name: `fresh turmeric, sliced (or 2 tsp dried)`, note: `colours the broth golden-orange` },
                { amount: 20, unit: 'g', name: `fresh galangal, sliced` },
                { amount: 3, name: `shallots, halved and charred` },
                { amount: 20, unit: 'g', name: `rock sugar (duong phen)` },
                { amount: 1, unit: 'tbsp', name: `fish sauce (nuoc mam)`, note: `secondary seasoning — the mắm provides primary salt` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Fresh fish topping`,
            items: [
                { amount: 500, unit: 'g', name: `fresh snakehead fish fillet (ca loc)`, note: `or substitute: catfish fillet, barramundi — skin-on preferred` },
                { amount: 1, unit: 'tsp', name: `ground turmeric`, note: `rubbed on fish before poaching` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Noodles`,
            items: [
                { amount: 500, unit: 'g', name: `fresh rice vermicelli (bun tuoi)`, note: `or 250g dried, soaked and blanched` },
            ],
        },
        {
            title: `Herb plate (rau song — mandatory)`,
            items: [
                { amount: 150, unit: 'g', name: `bean sprouts (gia do)`, note: `raw` },
                { amount: 1, name: `bunch rau om (rice paddy herb)`, note: `the essential Mekong herb for fish soups` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 100, unit: 'g', name: `bong sung (water lily stem)`, note: `sliced thin — the An Giang addition; substitute: celery` },
                { amount: 100, unit: 'g', name: `chuoi chát (unripe banana)`, note: `sliced thin — astringency balances the mắm richness` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `Condiments`,
            items: [
                { amount: 2, unit: 'tbsp', name: `mắm nêm or plain mắm cá loc`, note: `served on side for extra pungency` },
                { amount: 1, unit: 'tbsp', name: `sa te chili oil` },
            ],
        },
    ],
    steps: [
        {
            title: `Dissolve and strain the mắm`,
            description: `Place mắm cá lóc in a bowl with 1.5 L water. Using clean hands or a wooden spoon, press and massage the paste into the water for 3-4 minutes until it dissolves — the liquid will turn opaque amber-orange. Strain through a fine mesh sieve lined with cheesecloth, pressing the solids firmly. Discard the solids — fish bones and skin fragments from the fermented paste. The strained liquid is the mắm base: it should be deep orange-brown, intensely pungent, and smell of fermented fish with a savoury depth. Do not be alarmed by the aroma at this stage — it mellows significantly during cooking.`,
            tip: `The quality of the mắm cá lóc determines the quality of bún cá Châu Đốc more than any other ingredient. Châu Đốc-produced mắm has a specific flavour profile from the Mekong Delta snakehead and the local fermentation conditions that mắm produced in other provinces does not replicate. In Germany, look for Châu Đốc brand mắm at Vietnamese grocery stores or order from Vietnamese food importers. The paste should be amber-coloured with visible fish fragments — dark brown or black mắm is over-fermented and will produce a bitter broth.`,
        },
        {
            title: `Build the turmeric-lemongrass broth`,
            description: `Pour the strained mắm liquid into a large pot. Add an additional 500ml fresh water. Bring to a boil over medium heat — significant foam will rise in the first 5 minutes of boiling. Skim thoroughly. Add charred shallots, bruised lemongrass, sliced fresh turmeric (or dried turmeric powder), galangal slices, and rock sugar. Reduce to a gentle simmer and cook uncovered for 30 minutes. The pungency of the mắm will mellow considerably during this time as the volatile compounds cook off and the remaining flavour deepens and integrates. Season with fish sauce and salt. The finished broth should be golden-orange, fragrant with lemongrass and turmeric, and taste of deep savoury fish with a mellow fermented undertone.`,
            tip: `The transformation of the mắm broth during the 30-minute simmer is one of the most dramatic flavour changes in Vietnamese cooking. The raw mắm liquid smells aggressively of fermented fish; the finished broth smells of lemongrass, turmeric, and a rich umami that has no trace of the initial pungency. This transformation is why bún cá Châu Đốc — despite being built on fermented fish paste — is accessible to anyone who enjoys a flavourful, aromatic broth.`,
        },
        {
            title: `Poach the fresh fish`,
            description: `Rub fresh fish fillet with ground turmeric and salt. Cut into 5-6cm sections if using a whole fillet. Increase the broth to a moderate simmer. Lower fish pieces gently into the simmering broth. Poach 5-7 minutes until the flesh is just opaque through the thickest part and flakes slightly when pressed. Remove carefully with a slotted spoon — the flesh is delicate at this stage. Set aside on a plate. The broth will have absorbed additional fresh fish flavour during poaching.`,
        },
        {
            title: `Prepare the herb plate`,
            description: `Wash and arrange all herbs and vegetables. Slice water lily stem (bông súng) into 3cm pieces — it oxidises quickly so slice immediately before serving. Slice unripe banana paper-thin — drop immediately into a bowl of water with a squeeze of lime to prevent browning. Arrange all herbs, sprouts, banana, and water lily stem on a large communal plate. The herb plate for bún cá Châu Đốc is more abundant and varied than for most Vietnamese noodle soups — the mắm broth's richness requires the astringency of banana and water lily to balance.`,
        },
        {
            title: `Blanch the noodles`,
            description: `Bring a separate pot of water to a rolling boil. Blanch fresh rice vermicelli for 10-15 seconds. Drain immediately and divide between 4 bowls. The noodles should be hot when the broth is ladled over — cold noodles drop the bowl temperature and the fish cools too quickly. If using dried noodles, soak 30 minutes and blanch 30 seconds before dividing.`,
        },
        {
            title: `Assemble and serve`,
            description: `Place poached fish pieces over the noodles in each bowl — 2-3 pieces per person. Ladle hot mắm broth generously over everything. The broth should be golden-orange and fragrant. Scatter a small amount of fresh turmeric threads or turmeric oil over each bowl for colour. Serve immediately with the full herb plate alongside. In Châu Đốc, bún cá is eaten at breakfast — market stalls open at 5am, and the broth has been simmering since midnight.`,
            tip: `The correct eating sequence in Châu Đốc: add a large handful of raw bean sprouts to the bowl first — they wilt in the hot broth in 30 seconds. Then add rau ôm, rau răm, and mint. Add banana and water lily stem last — they need the least time in the broth. Squeeze lime. The astringency of the banana and the sourness of the lime balance the mắm broth's richness in the same bite. This balancing act — pungent broth, sweet fish, sour-astringent herbs — is the flavour philosophy of Châu Đốc cooking.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}