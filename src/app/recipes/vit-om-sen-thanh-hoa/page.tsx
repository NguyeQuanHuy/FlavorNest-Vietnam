'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'vit-om-sen-thanh-hoa',
    title: `Thanh Hóa Duck Braised with Lotus`,
    subtitle: `Vịt Om Sen Thanh Hóa — Cổ Lũng mountain duck slow-braised with lotus seeds, lotus root, and fermented soybean paste from the Thọ Xuân valley.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Vịt om sen is a dish of the northern Vietnamese interior — a slow braise that combines duck with the full lotus plant: seeds, root, and occasionally the young stem. The Thanh Hóa version is specific in two ways: the duck used is vịt Cổ Lũng, a semi-wild mountain duck raised in the limestone valleys of Bá Thước district in the Thanh Hóa highlands, where the birds forage freely on insects, aquatic plants, and small fish in the irrigation channels. The Cổ Lũng duck has a leaner, more muscular build than the commercial ducks of the lowlands, darker meat, and a gamey depth that lowland breeds lack.\n\nThe second distinction is tương (fermented soybean paste) — the Thanh Hóa and Nghệ An fermented soybean paste that functions as the primary seasoning agent in this braise, replacing fish sauce as the dominant salt-umami source. Tương Thanh Hóa is darker, earthier, and more complex than the Japanese miso it superficially resembles — it is made from roasted soybeans fermented with mốc tương (a specific mould culture) for 6-12 months in clay jars, and its flavour is simultaneously salty, sweet, faintly sour, and deeply savoury in a way that no single-ingredient substitute can replicate.\n\nThe lotus seeds require the most time — fresh lotus seeds need 45 minutes of simmering to become tender; dried lotus seeds need 2 hours. The lotus root adds a crunchy, starchy counterpoint to the yielding duck meat. Together, duck, lotus, and tương produce a braise that is both nourishing and complex — a dish eaten at the first cold weather of the year in Thanh Hóa households, when the highland duck fat has thickened and the lotus seeds are at their most plentiful.`,
    ingredientSections: [
        {
            title: `Duck`,
            items: [
                { amount: 1.2, unit: 'kg', name: `duck pieces, bone-in (vit Co Lung or any free-range duck)`, note: `legs and thighs preferred — breast dries out during long braise; cut into 5cm pieces` },
                { amount: 2, unit: 'tbsp', name: `rice wine or dry sherry`, note: `for cleaning — rubbed on duck, rested 10 min, rinsed` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `ground turmeric (bot nghe)`, note: `rubbed on duck pieces before browning` },
            ],
        },
        {
            title: `Lotus components`,
            items: [
                { amount: 150, unit: 'g', name: `dried lotus seeds (hat sen kho)`, note: `soaked overnight in cold water — green bitter germ removed; substitute: canned lotus seeds, drained` },
                { amount: 200, unit: 'g', name: `fresh lotus root (ngu sen tuoi)`, note: `peeled and sliced 5mm thick — drop into acidulated water immediately to prevent browning` },
                { amount: 1, unit: 'tbsp', name: `rice vinegar`, note: `added to soaking water for lotus root` },
            ],
        },
        {
            title: `Braising aromatics`,
            items: [
                { amount: 3, unit: 'tbsp', name: `tuong Thanh Hoa (fermented soybean paste)`, note: `substitute: 2 tbsp brown miso + 1 tsp fish sauce — not identical but closest available in Germany` },
                { amount: 5, name: `shallots, halved` },
                { amount: 4, name: `garlic cloves, smashed` },
                { amount: 3, name: `lemongrass stalks, bruised and knotted` },
                { amount: 30, unit: 'g', name: `fresh ginger, sliced thick` },
                { amount: 2, name: `star anise` },
                { amount: 1, name: `cinnamon stick, 5cm` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `fish sauce (nuoc mam)`, note: `secondary seasoning alongside tuong` },
                { amount: 500, unit: 'ml', name: `coconut water (nuoc dua)`, note: `not coconut milk — the clear liquid; adds natural sweetness to the braise` },
                { amount: 300, unit: 'ml', name: `water or light chicken stock` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 2, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Clean and marinate the duck`,
            description: `Rub duck pieces with rice wine, salt, and ground turmeric. The rice wine removes the gamey odour specific to free-range duck — leave 10 minutes then rinse thoroughly under cold water. Pat completely dry. The turmeric rubbed on the surface will colour the duck golden during browning and infuse the braising liquid. Unlike chicken, duck does not need to be blanched before browning — the dry rub and rinse method is sufficient for the leaner highland varieties.`,
            tip: `Vịt Cổ Lũng duck is leaner and tougher than commercial duck — it requires a longer braise (1.5-2 hours) than supermarket duck legs (45-60 minutes). If using supermarket duck from Germany, reduce the braise time to 60 minutes and check for tenderness at 45 minutes. The meat should pull slightly from the bone when pressed but not fall off entirely — it continues cooking in the residual heat after the pot is removed from the flame.`,
        },
        {
            title: `Prepare the lotus seeds`,
            description: `If using dried lotus seeds soaked overnight: drain, rinse, and remove the green bitter germ running through the centre of each seed by pushing a toothpick through the length of the seed. This germ is intensely bitter and must be removed — it does not cook away during braising. Pre-cook soaked lotus seeds in fresh water for 30 minutes until just tender but still holding shape. Drain. If using canned lotus seeds: drain, rinse, and add directly to the braise in the final 20 minutes only — they are already cooked and will break down if added earlier.`,
            tip: `The green germ removal from dried lotus seeds is the most tedious step in this recipe and the one most home cooks skip. Skipping it produces a faintly bitter undertone in the finished braise that accumulates across multiple bites. In Thanh Hóa households, removing the germ is done while watching television the night before — a background task that makes the next day's cooking fast.`,
        },
        {
            title: `Brown the duck`,
            description: `Heat neutral oil in a heavy-bottomed pot or Dutch oven over high heat. Working in batches to avoid crowding, brown duck pieces skin-side down for 4-5 minutes until deeply golden — do not move them during browning or the skin tears and loses colour. Flip and brown 2 minutes on the flesh side. Remove to a plate. Duck releases significant fat during browning — pour off all but 1 tbsp of the rendered fat before the next step, reserving the excess duck fat for other cooking.`,
            tip: `The browning step is not about cooking the duck — it is about Maillard reaction compounds that form on the surface and dissolve into the braising liquid, giving the finished braise its depth of colour and savouriness. Inadequately browned duck produces a pale, flat-tasting braise regardless of how long it simmers. Each piece should be close to dark golden-brown before removal.`,
        },
        {
            title: `Build the braise`,
            description: `In the same pot over medium heat, saute halved shallots cut-side down until golden, about 3 minutes. Add smashed garlic, lemongrass, ginger, star anise, and cinnamon. Stir 60 seconds until fragrant. Add tương (or miso-fish sauce substitute) and stir into the aromatics — it will sizzle and caramelise slightly on the pot bottom. Add sugar and stir 30 seconds. Pour in coconut water and water or stock, scraping up any caramelised bits from the bottom. Add fish sauce. Bring to a simmer and taste — the liquid should be savoury-sweet with the distinctive earthy depth of the fermented soybean paste prominent.`,
        },
        {
            title: `Braise the duck — 1.5 hours`,
            description: `Return browned duck pieces to the pot, ensuring they are at least half-submerged in the braising liquid. Add pre-cooked lotus seeds. Bring to a boil, then reduce to the lowest possible simmer. Cover and braise 1 hour. After 1 hour, add sliced lotus root — it needs only 30 minutes to become tender while retaining slight crunch. Continue braising covered for 30 more minutes. Check duck: the meat should pull slightly from the bone with gentle pressure. If still firm, continue 15 more minutes. Remove lid for the final 15 minutes to reduce the braising liquid to a glossy sauce consistency.`,
        },
        {
            title: `Finish and serve`,
            description: `Remove lemongrass, ginger slices, star anise, and cinnamon stick. Taste the braising liquid and adjust with fish sauce if more salt is needed or a small amount of sugar if the tương has made it too sharp. Transfer to a serving bowl — duck pieces surrounded by lotus seeds and lotus root slices, with the reduced braising sauce coating everything. Scatter spring onion, fried shallots, rau răm, and coarse black pepper over the top. Serve with steamed rice and lime wedges alongside. In Thanh Hóa, vịt om sen is served in the clay pot it was cooked in, placed at the centre of the table on a wooden trivet.`,
            tip: `Vịt om sen tastes better the next day — the lotus seeds absorb the braising liquid overnight and the duck fat redistributes through the sauce, rounding and deepening every flavour. If making for a special meal, braise the day before, refrigerate overnight, and reheat gently the next day. Skim the solidified duck fat from the surface before reheating — it can be reserved for cooking potatoes or vegetables.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}