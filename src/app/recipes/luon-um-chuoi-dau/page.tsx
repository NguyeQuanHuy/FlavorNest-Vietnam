'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'luon-um-chuoi-dau',
  title: `Lươn Um Chuối Đậu (Paddy Eel Braised with Green Banana, Turmeric and Peanuts)`,
  subtitle: `Paddy eels — the same small, slippery, iron-rich eels the cháo lươn Nghệ An simmered into congee — here braised whole in a clay pot with green banana chunks, turmeric, lemongrass, and crushed roasted peanuts until the banana dissolves into a thick, starchy, golden sauce and the eel softens to a spoon-tender, turmeric-perfumed, peanut-coated richness. The central Vietnamese eel braise that uses the banana as a thickener and the peanut as a sauce.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/luon-um-chuoi-dau.jpg',
  intro: `Um is a central Vietnamese cooking verb that sits between kho (braised in caramel-fish-sauce, reducing to a glaze) and hầm (stewed long in liquid, staying soupy): um is a SHORT braise in a THICK sauce that reduces to a clingy, coating consistency — more sauce than glaze, less liquid than stew. The um format is specific to Huế and Nghệ An, and lươn um — eel braised um-style — is its most famous application.

The sauce's thickness comes not from a roux or a starch slurry but from green banana — chuối xanh, the unripe cooking banana, cut into chunks and simmered until it disintegrates. The banana's starch (which constitutes 20-25% of the unripe fruit's weight) gelatinises in the braising liquid and thickens it naturally into a dense, slightly sweet, faintly astringent sauce that coats the eel like a golden blanket. The banana is not a side dish — it is a thickener, a structural ingredient that creates the um's signature viscosity from a fruit the garden provides for free.

The peanuts are the second sauce component: crushed roasted peanuts, stirred into the braise in the last 10 minutes, where they absorb the liquid's fat and starch and produce a gritty, nutty, protein-rich suspension that further thickens the sauce and adds a background richness that the lean eel lacks. The peanut is not a garnish — it is a fat substitute, providing the lipid richness the eel's 2% body fat cannot, and it is the reason the um tastes richer than the sum of its lean-eel-and-starchy-banana ingredients.

The turmeric is the colour and the warmth — the same golden pigment the mì Quảng and the pa pỉnh tộp deployed, here coating the eel slices before they enter the pot, so every piece carries a golden crust into the um and the sauce itself turns amber. The lemongrass is the aromatic spine. And the eel — cleaned, de-slimed, cut into 5 cm sections — is the iron-rich, mineral-flavoured protein the paddy provides from the same mud the banana tree grows beside.`,
  ingredientSections: [
    {
      title: 'The eel',
      items: [
        { amount: 500, unit: 'g', name: 'paddy eel (lươn), cleaned, de-slimed, cut 5 cm', note: `Same preparation as the cháo lươn: salt-and-vinegar scrub, debone if large. In Europe: freshwater eel or farmed eel sections.` },
        { amount: 1, unit: 'tsp', name: 'ground turmeric (for pre-coating)' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce (for pre-seasoning)' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil (for searing)' },
      ],
    },
    {
      title: 'The um sauce base',
      items: [
        { amount: 2, name: 'green bananas (chuối xanh), peeled, cut 3 cm chunks, soaked in lime water', note: `The THICKENER — the banana's starch gelatinises in the braise and creates the um's viscosity. The lime-water soak prevents browning and removes surface tannins.` },
        { amount: 60, unit: 'g', name: 'roasted peanuts, coarsely crushed', note: `The FAT SUBSTITUTE — their oil and protein enrich the lean eel's sauce.` },
        { amount: 2, name: 'stalks lemongrass, bruised and knotted' },
        { amount: 1, unit: 'tbsp', name: 'ground turmeric' },
        { amount: 3, name: 'shallots, sliced' },
        { amount: 3, name: 'cloves garlic, sliced' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 300, unit: 'ml', name: 'water or light stock' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 50, unit: 'g', name: 'rau răm, torn' },
        { amount: 30, unit: 'g', name: 'coriander, chopped' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
      ],
    },
  ],
  steps: [
    {
      title: 'Turmeric-sear the eel, then build the um — banana and peanut do the sauce work',
      description: `Toss the eel sections with turmeric and fish sauce. Heat oil in a clay pot or heavy pan. Sear the eel 90 seconds per side — golden-brown turmeric crust, same technique as the cháo lươn's fried topping. Lift out.

In the same pot: fry shallots, garlic and chili 1 minute. Add the lemongrass and turmeric — 30 seconds, blooming. Add the green banana chunks. Stir to coat in the turmeric oil. Pour in the water/stock and fish sauce and sugar. Bring to a simmer.

Cover. Braise 20 minutes — the banana chunks soften progressively: firm → yielding → disintegrating. By 20 minutes the banana has partially dissolved into the liquid, thickening it from watery to a glossy, golden, starchy suspension. Press any remaining banana chunks against the pot wall with a spoon to help them dissolve.

Return the seared eel sections to the pot. Add the crushed peanuts. Stir gently — the peanuts absorb liquid and swell, further thickening the sauce. Braise 10 more minutes, uncovered, stirring occasionally — the sauce reduces to its um consistency: thick enough to coat the eel and cling to a spoon, thin enough to pour slowly.

The um is done when: the eel is tender (a chopstick passes through), the sauce is golden and thick (the banana's starch and the peanut's protein have created a gritty, rich, clingy suspension), and the pot smells of turmeric-lemongrass-peanut in a warm, golden wave.`,
      tip: `The green banana's starch gelatinisation is the um's natural thickening mechanism — the same mechanism every cháo in this collection used (rice starch gelatinising in broth), applied here with banana starch instead. At 60-70°C the banana's starch granules absorb water, swell and burst, releasing amylose and amylopectin into the braising liquid and converting it from a thin broth to a thick, starch-stabilised sauce — the same transformation that thickens a roux-based sauce, achieved without flour and without any ingredient the garden does not grow. The banana is the roux, and the garden is the pantry.`,
    },
    {
      title: 'Serve in the clay pot — golden, thick, peanut-studded, iron-rich',
      description: `Scatter torn rau răm, coriander and cracked pepper over the um. Bring the clay pot to the table — the pot is the serving vessel, and its retained heat keeps the um at eating temperature for 15 minutes.

Spoon the um over hot rice: each serving gets 2-3 eel sections coated in the golden, peanut-studded, banana-thickened sauce. The sauce soaks into the rice — the starch meeting starch, the turmeric staining the rice golden, the peanut's oil creating small, rich, glistening pools.

Each bite: the eel (iron-rich, mineral, turmeric-crusted, tender), the sauce (thick, golden, sweet-from-banana, nutty-from-peanut, sour-from-tamarind-if-added, warm-from-lemongrass), and the rice (neutral, absorbent, carrying everything). The um is one of the most nutritionally dense preparations in the collection: the eel's heme iron (2.5 mg/100 g), the peanut's protein and fat, the banana's starch and potassium, and the turmeric's curcumin — a pharmacologically active anti-inflammatory that the turmeric's lipid-soluble curcumin delivers more efficiently in this fat-containing sauce than in a water-based preparation.

Lươn um chuối đậu is the paddy-and-garden collaboration: the eel from the paddy, the banana from the garden, the peanut from the plot, the lemongrass from the fence, the turmeric from the row. Five ingredients, five zones of the same small farm, one clay pot. The um is the farm on a plate — every ingredient within walking distance, every flavour within the farmer's own production, and the total cost of the meal below the price of a single piece of imported chicken.`,
      tip: `The eel trio in this collection is now a quartet: cháo lươn (Nghệ An, eel in congee, the breakfast), cá chình mun gỏi (Quảng Bình, mountain eel salad, the rarity), nhệch nướng (Nghệ An, estuary eel in banana leaf, the coast), and now lươn um (central, paddy eel braised with banana and peanut, the farm). Four preparations of four different "eels" (three different species, one repeated), four formats, four landscapes. The eel is the collection's most versatile protein, and its versatility mirrors the Vietnamese kitchen's own: whatever the water provides, the kitchen adapts.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
