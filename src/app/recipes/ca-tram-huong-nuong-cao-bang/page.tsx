'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-tram-huong-nuong-cao-bang',
    title: `Cao Bằng Agarwood-Smoked River Fish`,
    subtitle: `Cá Trầm Hương Nướng — Highland river fish grilled wrapped in lá cơm nếp leaves over forest wood — Cao Bằng's most aromatic grilled fish preparation.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cá trầm hương nướng is a name that requires explanation before a recipe — "trầm hương" means agarwood, the resinous heartwood of Aquilaria trees that is among the most expensive aromatic materials on earth, used in incense, perfume, and traditional medicine throughout Asia. The fish in this dish is not literally grilled over burning agarwood (which would be an extraordinary extravagance) but is wrapped in lá cơm nếp (the leaves of Alpinia zerumbet, the shell ginger plant) before grilling — a leaf whose volatile aromatic compounds include the same sesquiterpene family as agarwood, producing a faint, resinous, incense-like fragrance that earned the preparation its evocative name.\n\nLá cơm nếp (Alpinia zerumbet leaves) is the aromatic leaf used by Tày and Nùng communities throughout northeastern Vietnam for wrapping sticky rice and grilled meats. The leaf contains camphor, borneol, and camphene in its essential oils — compounds that volatilise when the leaf contacts heat and infuse whatever is wrapped inside with a warm, resinous, faintly medicinal fragrance that is simultaneously of the forest and of temple incense. It is this fragrance that earns the preparation its name: cá trầm hương, the agarwood-fragrant fish.\n\nThe fish used are the small to medium river fish of the Bằng Giang and Kỳ Cùng rivers — the cold, clear highland rivers that run through Cao Bằng's limestone karst landscape. Cá lăng (the giant catfish), cá trắm (grass carp), and cá chép (common carp) are the most commonly used, but any fresh river fish with firm flesh works. The flesh absorbs the lá cơm nếp fragrance during the 30-40 minute wrapped grilling, emerging with a layer of aromatic complexity that plain-grilled river fish lacks entirely.`,
    ingredientSections: [
        {
            title: `Fish`,
            items: [
                { amount: 800, unit: 'g', name: `whole fresh river fish (ca lang, ca tram, or ca chep)`, note: `scaled, gutted, scored 4 times each side; substitute: whole trout, carp, or sea bream from German fishmongers` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `initial cleaning rub` },
                { amount: 1, unit: 'tsp', name: `rice wine`, note: `removes muddy note from river fish` },
            ],
        },
        {
            title: `Lá cơm nếp marinade and wrap`,
            items: [
                { amount: 8, name: `la com nep leaves (Alpinia zerumbet — shell ginger)`, note: `large, fresh leaves — 4 for wrapping, 4 minced into marinade; substitute: young galangal leaves or fresh turmeric leaves, which share related aromatic compounds` },
                { amount: 3, name: `lemongrass stalks, inner white only, minced` },
                { amount: 4, name: `garlic cloves, minced to paste` },
                { amount: 3, name: `shallots, minced` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `ground turmeric` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Cavity stuffing`,
            items: [
                { amount: 2, name: `la com nep leaves, bruised` },
                { amount: 2, name: `lemongrass stalks, bruised` },
                { amount: 3, name: `slices fresh galangal` },
                { amount: 2, name: `kaffir lime leaves, torn` },
            ],
        },
        {
            title: `Hạt dổi dipping sauce`,
            items: [
                { amount: 1, unit: 'tsp', name: `hat doi seeds, toasted and crushed` },
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 3, unit: 'tbsp', name: `warm water` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions sticky rice (xoi) or steamed white rice` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Source lá cơm nếp and understand its chemistry`,
            description: `Alpinia zerumbet (shell ginger, lá cơm nếp) is a large tropical ginger-family plant whose leaves contain a specific essential oil profile: camphor (30-40%), borneol (15-20%), camphene (10-15%), and smaller amounts of bornyl acetate and linalool. This profile overlaps partially with agarwood's sesquiterpene-rich oil — not identical but sharing the warm, resinous, camphor-dominant character. In Germany, Alpinia zerumbet is grown as an ornamental garden plant and is available at garden centres (Gartencenter) that stock tropical gingers — search "Muschelingwer" or "Alpinia zerumbet." The ornamental German variety is botanically identical to the Vietnamese culinary variety and produces the same aromatic compounds in its leaves.`,
            tip: `The camphor-borneol aromatic combination in lá cơm nếp is the same compound family responsible for the medicinal, slightly resinous quality of rosemary, eucalyptus, and juniper — all Zingiberaceae and conifer species share this terpenoid pathway. If lá cơm nếp is unavailable in Germany, a combination of 4 young galangal leaves (galangal is closely related — Alpinia galanga) + 2 fresh rosemary sprigs (for the camphor note) + 2 fresh lemon leaves (for the citrus dimension) produces approximately 65% of the aromatic effect. The galangal leaf is the most important element of this substitute — it contributes the closest sesquiterpene profile.`,
        },
        {
            title: `Clean and score the fish`,
            description: `Scale and gut the fish. Rub with salt, rest 5 minutes, rinse. Toss with rice wine, rest 5 more minutes, rinse again and pat dry. Score each side with 4 deep diagonal cuts to the bone — Cao Bằng river fish (grass carp, common carp) have thick muscle and require deeper scoring than coastal fish. The score cuts allow the lá cơm nếp marinade to penetrate the thick flesh and the aromatic steam released during grilling to reach the meat close to the bone.`,
        },
        {
            title: `Prepare the lá cơm nếp marinade`,
            description: `Bruise 4 lá cơm nếp leaves by pressing firmly with the side of a knife — this breaks the oil cells and releases the camphor-borneol compounds. Mince the bruised leaves finely. Combine with lemongrass paste, garlic paste, shallots, fish sauce, sugar, turmeric, black pepper, and oil. Mix into a fragrant paste — the minced lá cơm nếp gives the marinade a pale green colour and an intense resinous-citrus aroma. Rub over the entire fish exterior and into the score cuts. Stuff the cavity with whole bruised lá cơm nếp, lemongrass, galangal, and kaffir lime leaves. Marinate 20 minutes at room temperature.`,
        },
        {
            title: `Wrap in whole lá cơm nếp leaves`,
            description: `Take the 4 remaining whole lá cơm nếp leaves and wrap them around the marinated fish — 2 leaves on each side, overlapping to cover the entire fish. The leaves should be large enough to enclose the fish with some overlap at the ends. Secure with kitchen twine at 3-4 points. The leaf wrapping serves two functions: it prevents direct flame contact with the fish skin (preventing the exterior from charring before the interior cooks), and it creates a sealed aromatic envelope in which the lá cơm nếp oils volatilise under the grilling heat and infuse the fish on all surfaces simultaneously.`,
            tip: `The wrapped grilling technique — enclosing the fish entirely in aromatic leaves before placing on the grill — is found throughout Southeast Asian highland cooking and produces a fundamentally different result from open grilling. In open grilling, the smoke from the charcoal is the aromatic source. In leaf-wrapped grilling, the volatile oils released from the heated leaves are the primary aromatic source, and the charcoal smoke is secondary. Lá cơm nếp oils have lower flash points than most other wrapping leaves — they begin volatilising at around 70°C, meaning the aromatic infusion begins before the fish is fully cooked.`,
        },
        {
            title: `Grill — 35 to 40 minutes`,
            description: `Prepare charcoal with medium coals — not too hot, as the leaf wrapping must char slowly rather than catching fire immediately. Place the wrapped fish on the grill. Cook 15-18 minutes without moving — the outer leaves will darken and char in places. Flip carefully using two spatulas. Cook 15-18 more minutes. The fish is done when the wrapping leaves are deeply charred and the fish inside gives resistance when pressed through the leaves. Unwrap carefully at the table — use kitchen scissors to cut the twine and peel back the charred outer leaves.`,
        },
        {
            title: `Open at the table and serve`,
            description: `Cut the kitchen twine and unfold the charred lá cơm nếp wrapping at the table. The moment the leaves are opened, the accumulated aromatic steam bursts outward — this is the "trầm hương" moment, when the camphor-borneol-infused steam hits the air and the entire table smells of the Cao Bằng forest. The fish skin beneath the leaves will be golden, slightly charred, and deeply fragrant. The score-cut flesh will be visibly perfumed — slightly yellowed from the turmeric in the marinade, with lemongrass and lá cơm nếp oil distributed into the muscle. Serve with hạt dổi dipping sauce, sticky rice, and fresh herbs. The Tày tradition: the head goes to the most senior person at the table, the cheek meat extracted first.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
