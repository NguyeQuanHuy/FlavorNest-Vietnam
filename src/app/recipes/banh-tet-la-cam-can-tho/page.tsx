'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-tet-la-cam-can-tho',
    title: `Cần Thơ Purple Sticky Rice Cake`,
    subtitle: `Bánh Tét Lá Cẩm — Cần Thơ's Tết sticky rice log coloured deep purple with lá cẩm leaf, filled with mung bean and fatty pork — the most visually striking bánh tét in Vietnam.`,
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '10 hrs',
    rating: 4.9,
    baseServings: 8,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh tét lá cẩm is the Tết cake that Cần Thơ has made its own — a cylindrical sticky rice log whose glutinous rice is coloured a deep, vivid purple by soaking in the extract of lá cẩm (Peristrophe roxburghiana — the Roxburgh's peristrophe, a small flowering plant in the Acanthaceae family) before cooking. When the finished bánh tét is sliced, the cross-section reveals concentric rings of deep purple glutinous rice surrounding a pale yellow mung bean layer and a centre of seasoned fatty pork — a colour composition so striking that bánh tét lá cẩm has become one of the most photographed foods in Vietnamese culinary media.\n\nLá cẩm is used as a natural food dye throughout southern Vietnam — the same plant colours the purple sticky rice (xôi lá cẩm) eaten at celebrations and the purple glutinous rice layer in bánh da lợn. The colouring compound is a flavonoid called anthocyanin — the same class of pigments found in purple cabbage, blueberries, and black rice — which produces colours ranging from deep red-purple in neutral pH to blue-purple in slightly alkaline conditions. The alkalinity of the glutinous rice soaking water determines the exact hue of the finished bánh tét: slightly more alkaline water (a pinch of baking soda) produces a more vivid blue-purple; neutral water produces a deeper red-purple.\n\nThe construction of bánh tét requires three days of preparation: the lá cẩm dyeing and rice soaking, the filling preparation, the wrapping and tying in banana leaves, and the 8-10 hour boiling that converts the raw ingredients into the firm, sliceable log. This is not a casual dish — it is the centrepiece of the Cần Thơ Tết table, made in batches of 10-20 logs by families working together in the days before the new year, the boiling pot running through the night.`,
    ingredientSections: [
        {
            title: `Lá cẩm dye and glutinous rice`,
            items: [
                { amount: 600, unit: 'g', name: `glutinous rice (gao nep)`, note: `washed until water runs clear` },
                { amount: 80, unit: 'g', name: `la cam leaves (Peristrophe roxburghiana)`, note: `fresh or dried — boiled in water to extract purple dye; substitute: dried butterfly pea flowers (hoa dau biec) produce similar blue-purple colour` },
                { amount: 800, unit: 'ml', name: `water`, note: `for boiling the lá cẩm to extract dye` },
                { amount: 0.25, unit: 'tsp', name: `baking soda`, note: `optional — makes colour more vivid blue-purple; omit for deeper red-purple` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `added to soaking rice` },
            ],
        },
        {
            title: `Mung bean filling`,
            items: [
                { amount: 200, unit: 'g', name: `split mung beans (dau xanh co vo)`, note: `soaked 3 hours, steamed 20 min until completely soft` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `tossed with cooked mung beans — prevents sticking` },
            ],
        },
        {
            title: `Pork filling`,
            items: [
                { amount: 300, unit: 'g', name: `pork belly (ba chi heo)`, note: `skin-on — cut into 2 long strips the length of the bánh tét` },
                { amount: 2, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 3, name: `shallots, minced` },
                { amount: 1, unit: 'tbsp', name: `five-spice powder (ngu vi huong)`, note: `the southern Tết seasoning` },
            ],
        },
        {
            title: `Wrapping`,
            items: [
                { amount: 6, name: `large banana leaves`, note: `wiped clean, central rib removed, softened briefly over flame` },
                { amount: 1, name: `roll kitchen twine or banana leaf strips` },
            ],
        },
    ],
    steps: [
        {
            title: `Extract the lá cẩm dye — the colour foundation`,
            description: `Bring 800ml water to a boil. Add lá cẩm leaves (fresh or dried). Simmer uncovered 15-20 minutes until the water turns deep purple-red. Strain and discard leaves. The dye liquid should be the colour of dark grape juice — deeply purple, slightly translucent. If using baking soda for a bluer tone, add now and stir — the colour will shift from red-purple toward blue-purple immediately (the pH shift changes the anthocyanin's molecular structure and thus its light absorption). Cool to room temperature before adding rice.`,
            tip: `The pH-colour relationship of lá cẩm anthocyanins is the food chemistry that makes this ingredient endlessly variable. At pH 5-6 (slightly acidic): deep red-purple. At pH 7 (neutral): true purple. At pH 8-9 (slightly alkaline, baking soda): blue-purple. The final colour of bánh tét lá cẩm depends on the exact pH of the soaking water and the rice. For the most vivid and consistent result, test with a pH strip if available — commercial bánh tét producers in Cần Thơ calibrate their dye water pH precisely for batch consistency.`,
        },
        {
            title: `Dye and season the glutinous rice`,
            description: `Combine washed glutinous rice with cooled lá cẩm dye liquid and salt. Soak 4-6 hours or overnight — the longer the soak, the deeper the colour penetration into each grain. After soaking, the rice should be uniformly deep purple-blue throughout each grain — hold a grain up to light and it should be opaque and richly coloured. Drain thoroughly — the excess dye liquid is not cooked with the rice. The drained rice will be deep purple and fragrant with the faint floral note of the lá cẩm.`,
        },
        {
            title: `Prepare the mung bean layer`,
            description: `Steam soaked mung beans 20-25 minutes until completely soft — no resistance when pressed. While still hot, add sugar, salt, and oil. Mix thoroughly and mash into a semi-smooth paste — some texture should remain. Cool completely. Divide into 2 equal portions. Roll each portion into a cylinder approximately the same diameter as the pork strip — this shapes the mung bean layer consistently throughout the log's cross-section, producing the clean, even ring visible when sliced.`,
        },
        {
            title: `Season the pork`,
            description: `Combine fish sauce, sugar, black pepper, minced shallots, and five-spice. Coat pork belly strips thoroughly on all surfaces. Marinate minimum 2 hours — the five-spice penetrates the fat layer during this time, producing the distinctive aromatic depth of bánh tét pork versus plain salted pork. The fat layer of the pork belly will render during the long boiling and baste the surrounding mung bean and rice from within — choosing pork belly with a good fat-to-lean ratio is essential for the final flavour.`,
        },
        {
            title: `Wrap the bánh tét — the layering technique`,
            description: `Lay 2-3 overlapping banana leaves on a flat surface, green side down. Spread half the dyed glutinous rice in a rectangular layer approximately 25cm long and 15cm wide — 1.5cm deep. Place one mung bean cylinder along the centre of the rice. Place one pork strip on top of the mung bean cylinder. Place the second mung bean cylinder alongside the pork. Fold the remaining rice over the filling to enclose it completely. Using the banana leaves, roll the rice log tightly into a cylinder — the banana leaves wrap around the outside. Tie firmly with kitchen twine at 3cm intervals along the length and once at each end. The finished log should be 6-7cm in diameter, firm and tightly wrapped with no gaps.`,
            tip: `The tightness of the wrapping determines the firmness of the finished bánh tét. A loosely wrapped log produces a crumbly, soft result that does not slice cleanly. A tightly wrapped log, where the banana leaf is under tension from the kitchen twine, produces the firm, dense texture that slices into clean cross-sections with defined colour rings. Pull the banana leaf tight against the rice before tying each section of twine — tighter than seems necessary, as the rice expands slightly during cooking.`,
        },
        {
            title: `Boil 8 to 10 hours`,
            description: `Place wrapped logs in a large pot. Cover completely with cold water. Bring to a boil, then reduce to a steady simmer. Cook covered for 8-10 hours — checking the water level every 2 hours and replenishing with boiling water to keep the logs submerged. The long boiling fully cooks the glutinous rice, sets the colour, renders the pork fat, and melds all three layers into a cohesive, sliceable log. The colour of the lá cẩm will be more muted in the finished product than in the raw dyed rice — this is normal: heat reduces the anthocyanin intensity by approximately 30-40%.`,
            tip: `The 8-10 hour boiling time is the minimum for a correctly textured bánh tét — not a shortcut opportunity. Under-boiled bánh tét (below 6 hours) has a gummy, undercooked centre where the rice grains have not fully gelatinised. The full-time boiling converts all starch to a uniform gel that holds its shape when sliced cold the following day. In Cần Thơ, the Tết bánh tét pot runs through the night — the cook sleeps beside it and wakes to check the water level every 2 hours, a ritual as much as a culinary requirement.`,
        },
        {
            title: `Cool, slice, and serve`,
            description: `Remove from water and hang to cool completely — minimum 4 hours, ideally overnight. The cooling allows the interior to set firmly. Slice crosswise into 2cm rounds using a thin sharp knife or kitchen twine pulled taut around the log and crossed to cut without compressing. The cross-section should show three clear, distinct layers: deep purple glutinous rice exterior, pale yellow mung bean ring, and seasoned pork centre. Pan-fry slices briefly in a dry pan until lightly golden on both surfaces — this crisps the outer rice layer and reheats the interior. Serve with pickled daikon and nuoc cham. The purple colour is at its most vivid when freshly sliced.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}