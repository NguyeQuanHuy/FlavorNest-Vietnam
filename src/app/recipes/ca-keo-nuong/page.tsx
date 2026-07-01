'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-keo-nuong',
    title: `Grilled Mudskipper Fish`,
    subtitle: `Cá Kèo Nướng — Mekong mangrove mudskipper grilled over charcoal, eaten whole with mắm nêm and raw vegetables.`,
    category: 'SEAFOOD',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cá kèo (Pseudapocryptes elongatus) is a mudskipper — a small, elongated fish that lives in the tidal mudflats and mangrove channels of Cà Mau, Bạc Liêu, and the southern Mekong Delta coast. It breathes air through its skin, moves across mud on its pectoral fins, and is one of the most ecologically specific ingredients in Vietnamese cooking: it can only be caught from the mangrove zone, only at low tide, and only by fishermen who know the exact channels where it congregates.\n\nThe preparation is deliberately minimal. Cá kèo nướng is grilled whole over charcoal — no marinade, no sauce on the fish itself — until the skin blisters and chars and the flesh inside steams in its own moisture. The fish is eaten whole: skin, bones, head. The bones are soft enough to chew. The skin, slightly bitter from the mangrove diet, is considered the best part by locals.\n\nThe critical accompaniment is mắm nêm — a pungent fermented anchovy dipping sauce thinned with pineapple juice and seasoned with lemongrass and chili. Without mắm nêm, cá kèo nướng is incomplete. The sauce is not a condiment; it is the second half of the dish. Eaten with raw vegetables, rice paper, and herbs, this is the meal that southern fishermen eat at the edge of the water before the tide comes back in.`,
    ingredientSections: [
        {
            title: `The fish`,
            items: [
                { amount: 800, unit: 'g', name: `fresh cá kèo (mudskipper)`, note: `12–15 cm length ideal — bought live at market if possible; substitute: small whole tilapia or climbing perch if unavailable` },
                { amount: 1, unit: 'tsp', name: `coarse salt`, note: `rubbed on skin only — no other seasoning` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `brushed on grill grate to prevent sticking` },
            ],
        },
        {
            title: `Mắm nêm dipping sauce (non-negotiable)`,
            items: [
                { amount: 4, unit: 'tbsp', name: `mắm nêm (fermented anchovy paste)`, note: `Bà Liệt or Thuận Phát brand from Vietnamese grocer` },
                { amount: 3, unit: 'tbsp', name: `fresh pineapple juice`, note: `blended from ¼ ripe pineapple — the enzyme tenderises and sweetens` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 2, name: `lemongrass stalks, inner white part only, minced fine` },
                { amount: 4, name: `bird's eye chili (ớt hiểm), minced` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 3, unit: 'tbsp', name: `warm water`, note: `to thin to dipping consistency` },
            ],
        },
        {
            title: `Raw vegetable plate (rau sống)`,
            items: [
                { amount: 1, name: `head butter lettuce, leaves separated` },
                { amount: 150, unit: 'g', name: `bean sprouts (giá đỗ)`, note: `raw` },
                { amount: 1, name: `bunch Vietnamese coriander (rau răm)` },
                { amount: 1, name: `bunch perilla (tía tô)` },
                { amount: 1, name: `bunch mint (húng lủi)` },
                { amount: 1, name: `cucumber, cut into batons` },
                { amount: 1, name: `green banana, sliced thin on a mandoline`, note: `optional but traditional — the astringency balances the fermented sauce` },
                { amount: 10, name: `rice paper sheets (bánh tráng)`, note: `briefly dipped in water to soften before wrapping` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 400, unit: 'g', name: `steamed white rice` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the fish`,
            description: `If using live cá kèo, the vendor will typically clean them. At home: make a small incision at the belly, remove innards, rinse under cold water. Pat completely dry with paper towels — surface moisture causes steaming instead of charring on the grill. Rub ½ tsp coarse salt over the skin of each fish. Do not marinate. The flavour of cá kèo is delicate and mangrove-specific; any marinade will obscure it.`,
            tip: `Cá kèo has a thin layer of bitter-tasting mucus on the skin when raw — this is normal and disappears completely during grilling. Do not scrape it off; it protects the skin from drying out too fast on the grill.`,
        },
        {
            title: `Make the mắm nêm sauce`,
            description: `Blend ¼ ripe pineapple to a smooth juice — strain through a fine sieve, discard pulp. In a bowl, combine mắm nêm paste with warm water and stir until smooth. Add pineapple juice, lime juice, and sugar. Stir until sugar dissolves. Add minced lemongrass, garlic, and chili. Taste — it should be pungent, sweet-sour, fragrant with lemongrass. The smell will be assertive. This is correct. Set aside at room temperature; the flavours continue to develop as it sits.`,
            tip: `Mắm nêm is the most polarising Vietnamese condiment — intensely fermented, with an aroma that fills the room. In Cà Mau it is eaten daily without hesitation. For those new to it: start with a smaller ratio of paste to pineapple juice, then increase once you understand the flavour. There is no substitute that produces the same result.`,
        },
        {
            title: `Prepare the vegetable plate`,
            description: `Wash and dry all herbs. Separate lettuce leaves. Slice cucumber into long batons. If using green banana, peel and slice paper-thin on a mandoline — drop immediately into a bowl of water with a squeeze of lime to prevent browning. Arrange everything on a large plate or basket. The vegetable plate is assembled before grilling begins so the fish can be eaten immediately off the grill.`,
        },
        {
            title: `Grill over charcoal`,
            description: `Light charcoal and wait until coals are covered in grey ash — no orange flame. Brush grill grate with oil. Place fish on grate in a single layer, not touching. Grill 4–5 minutes on the first side without moving — the fish must develop a crust before it will release cleanly. Flip once using two spatulas or long tongs. Grill 3–4 minutes on the second side. The skin should be blistered, charred in places, and the eyes will have turned white. Internal flesh should flake when pressed.`,
            tip: `If using a cast iron grill pan instead of charcoal: heat until smoking, grill 4 min per side on high heat with the exhaust fan running. The smoke from the fish skin is significant. The result is very close to charcoal — the missing element is the mangrove wood smoke of Cà Mau, which cannot be replicated.`,
        },
        {
            title: `Eat the southern way`,
            description: `Serve fish whole on a plate — do not fillet. Each person tears pieces directly from the fish with chopsticks, wraps in a lettuce leaf or softened rice paper with herbs and cucumber, and dips the entire wrap briefly into mắm nêm sauce. The skin is eaten with the flesh. The head is cracked for the small amount of cheek meat inside. Nothing is wasted. The rice is eaten between wraps to balance the salt of the sauce.`,
            tip: `The correct wrapping order in Cà Mau: lettuce leaf first as the base, then rau răm and mint, then fish piece with skin, then a sliver of green banana if using, then fold and dip. The banana's astringency cuts through the fermented sauce and resets the palate for the next bite.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
