'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'com-tam-cha-ca-phu-quoc',
  title: `Cơm Tấm Chả Cá Phú Quốc (Broken Rice with Fish Cake — Island Style)`,
  subtitle: `The island's answer to Saigon's cơm tấm sườn: broken rice topped not with grilled pork but with a thick, golden, hand-pounded mackerel cake fried until the crust shatters and the inside bounces, served with pickled vegetables, a fried egg, and nước mắm Phú Quốc so good the rice is almost an afterthought. The plate that swapped the pig for the fish and made the island's economy visible on a lunch tray.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/com-tam-cha-ca-phu-quoc.jpg',
  intro: `Cơm tấm — broken rice — is Saigon's plate, the city's breakfast-lunch-dinner workhorse, and in its mainland form it is inseparable from pork: sườn nướng (grilled pork chop), bì (pork skin in rice powder), chả trứng (steamed pork-egg loaf), all three on the same plate, with a fried egg on top and a saucer of nước chấm beside it. The format is southern, universal, and pork-centric. Phú Quốc took the format and replaced the pig with the fish.

Cơm tấm chả cá is the island's lunch: the same broken rice, the same fried egg, the same pickled carrot-and-daikon, but where Saigon puts a pork chop the island puts a chả cá — a thick, golden, pan-fried mackerel cake that is the same myosin-gel paste this collection pounded in the bún quậy recipe, pressed thicker, fried longer, and served as a standalone protein rather than as a noodle-soup topping. The cake is the size of a palm, 2 cm thick, golden on both faces, with a Maillard crust that shatters at the knife and an interior that is springy, dense, faintly sweet and unmistakably of the sea. It is the island's cơm tấm identity, and a plate without it is a plate from somewhere else.

The substitution is not whimsy — it is economics and geography. Phú Quốc is an island. Its pork is imported from the mainland; its fish is caught from its own water. A mackerel cake costs less than a pork chop on the island, tastes fresher because the fish arrived this morning rather than this week, and carries the flavour profile the islanders grew up eating. The island did not adapt the mainland's plate; it built its own version from what the sea gave it, and called it cơm tấm because the rice is still broken and the format is still the same.

The broken rice itself deserves its sentence, because it is not a grain chosen for flavour — it is a grain chosen by accident and kept by preference. Tấm is the fraction of rice grains that break during milling — fragments, chips, irregular pieces that the mill separates and sells cheaply because they cannot be sold as whole-grain premium. Southern Vietnam — Saigon above all — adopted the broken fraction as its own, discovered that it cooks faster, absorbs more sauce, and has a slightly drier, more separate texture than whole grain, and elevated it from mill waste to a plated identity. Every cơm tấm stall in the south uses tấm by choice, not by poverty, and the grain's irregular, fractured, slightly translucent appearance on the plate is a visual signature as recognisable as phở's flat noodle or bánh xèo's yellow curve.`,
  ingredientSections: [
    {
      title: 'The broken rice',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'gạo tấm (broken rice)',
          note: `Sold at every Vietnamese grocer — labelled "tấm" or "broken rice." The grains are irregular fragments, smaller than whole rice, and they cook in roughly 12-14 minutes rather than 18-20. Rinse until the water runs mostly clear (it will never run perfectly clear — the broken surfaces release more starch). Cook with slightly less water than whole rice — roughly 1:1 by volume — for a drier, more separate result that absorbs the nước chấm on the plate without turning to mush.`,
        },
      ],
    },
    {
      title: 'The chả cá (mackerel fish cake)',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'fresh mackerel fillet, skinned, pin-boned, patted dry',
          note: `The same fish, the same paste as the bún quậy — but pressed thicker and fried harder. The cơm tấm chả cá needs a cake substantial enough to be the plate's centrepiece, not a noodle-soup ball.`,
        },
        { amount: 8, unit: 'g', name: 'fine salt (1.5%)' },
        { amount: 1.5, unit: 'tbsp', name: 'tapioca starch' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'ground white pepper' },
        { amount: 1, unit: 'tsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'crushed ice' },
        { amount: 1, unit: 'tbsp', name: 'minced dill (thì là) — optional but very Phú Quốc', note: `Some island stalls fold dill into the paste — a faint, anise-herbaceous note that the mainland rarely uses in fish cakes and that marks the plate as island-made.` },
        { amount: 4, unit: 'tbsp', name: 'neutral oil, for pan-frying' },
      ],
    },
    {
      title: 'The plate companions',
      items: [
        { amount: 4, name: 'eggs, fried sunny-side-up in oil until the white is set and the edges are lacy-crisp', note: `The fried egg on cơm tấm is not gentle — it is fried in generous oil until the edges are golden and crisp and the yolk is still runny. It is a fried egg that announces itself.` },
        {
          amount: 200,
          unit: 'g',
          name: 'đồ chua (quick-pickled carrot and daikon)',
          note: `Julienned carrot and daikon, salted 10 minutes, rinsed, tossed with rice vinegar, sugar and a pinch of salt. Made 30 minutes before serving so the pickle is crunchy-sour, not soft-fermented.`,
        },
        { amount: 4, name: 'slices of cucumber' },
        { amount: 4, name: 'slices of tomato' },
        { amount: 2, name: 'scallions, sliced, fried in oil until wilted (mỡ hành)' },
      ],
    },
    {
      title: 'The nước chấm',
      items: [
        {
          amount: 4,
          unit: 'tbsp',
          name: 'Phú Quốc fish sauce (nhì grade for the dressing, 25-30°N)',
          note: `The island's own, on the island's own plate. The dressing is the third appearance of Phú Quốc nước mắm in three recipes — first as the product itself, then as a condiment in the bún quậy, and now as the sauce on the plate. Same ingredient, three distances from the barrel.`,
        },
        { amount: 3, unit: 'tbsp', name: 'sugar' },
        { amount: 4, unit: 'tbsp', name: 'warm water' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, name: 'cloves garlic, pounded' },
        { amount: 2, name: 'red chilies, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Pound the paste and press thick cakes — 2 cm, palm-sized',
      description: `Pound or process the mackerel with salt exactly as in the bún quậy recipe: salt first, alone, until sticky and cohesive; then ice, starch, sugar, pepper, fish sauce and dill if using. Slap the paste a dozen times. Chill 15 minutes.

Divide into four portions of about 130 g each. Oil your hands, and press each portion into a flat, round cake about 10 cm across and 2 cm thick — thicker than the bún quậy's fried slices, because this cake IS the plate and it must have mass. Smooth the surfaces — lumps and cracks fry unevenly.

The cakes should sit on an oiled tray without spreading. If they slump, the paste was too warm or too wet — chill further and add a pinch more starch.`,
      tip: `The 2 cm thickness is calibrated to the frying: at medium heat in a pan, a 2 cm cake reaches the golden-crust stage on both faces in roughly 4 minutes per side, by which time conductive heat has reached the centre and set the myosin gel to its springy-firm endpoint. A 1 cm cake overcooks to rubbery; a 3 cm cake is still raw at the centre when the crust is dark. The thickness is a heat-transfer problem with one correct answer for the pan temperature, and the answer is 2 cm.`,
    },
    {
      title: 'Pan-fry golden — 4 minutes per face, undisturbed',
      description: `Heat the oil in a wide pan over medium heat — enough to coat the base generously. Lay the cakes in without crowding. Fry 4 minutes without touching — the crust forms by dehydration and Maillard browning of the surface protein, and moving the cake tears the forming crust from the pan.

At 4 minutes, slide a spatula under confidently and flip. The underside should be a deep, even, golden-brown. Fry the second side 4 minutes.

The cake is done when: both faces are uniformly golden, the cake feels firm-springy when pressed (not hard, not soft), and tapping it with a knuckle gives a dense, solid knock.

Drain on a rack. The cakes can hold warm in a low oven (80°C) for 15 minutes while you fry the eggs and plate the rice — but they are best eaten within the half-hour, before the crust softens from the interior's residual steam.`,
      tip: `The Maillard crust on a fish cake is a different flavour from the Maillard crust on a pork chop — the amino acid profile of fish (glycine, alanine, glutamate dominant) produces a sweeter, more marine, less meaty set of browning products than pork's (leucine, isoleucine dominant). This is why cơm tấm chả cá tastes different from cơm tấm sườn even when the rice, the egg and the pickle are identical: the crust writes the plate's flavour signature, and the crust is a function of the protein underneath. The island swapped pork for fish and the entire plate changed register — from meaty-smoky to sweet-marine — with a single substitution. Same format, different crust, different island.`,
    },
    {
      title: 'Fry the eggs, plate the rice — the southern cơm tấm architecture',
      description: `Fry the eggs one at a time in generous oil over medium-high heat: crack in, let the white set, spoon hot oil over the yolk until the white around it is set but the yolk is still liquid, and pull when the edges are golden and lacy. A cơm tấm egg is not a gentle egg — it is a fried egg with attitude.

Cook the broken rice: rinse, drain, cook with water at 1:1 by volume, 14 minutes. Fluff and mound on the plate.

PLATE: mound the rice on one half. Set the chả cá against it, leaning slightly. Lay the fried egg on top of the rice, yolk facing up. Arrange the đồ chua, cucumber and tomato alongside. Drizzle mỡ hành (the scallion oil) over the rice and the cake.

Pour the nước chấm into a small saucer on the plate — or, as many stalls do, pour it directly over the rice in a generous stream, so the broken grains absorb it immediately and the plate arrives already dressed.

The plate should look: generous, colourful, and slightly messy — golden cake, orange-yolked egg, white rice, pink pickle, green cucumber, red tomato. It is a working lunch, not a composed restaurant plate, and its beauty is the beauty of abundance rather than precision.`,
      tip: `The broken rice absorbs nước chấm faster and more completely than whole rice — its fractured surfaces expose more starch to the liquid, and the smaller grain size means more surface area per gram. This is the broken grain's functional advantage and the reason cơm tấm works as a sauced plate rather than as a bowl: the rice drinks the dressing rather than sitting in a pool of it, and every grain carries its own dose of fish-sauce-lime-sugar-garlic. The mill's waste product turned out to be the optimal format for a dressed plate, and southern Vietnam — which values sauce absorption above all other rice virtues — adopted it without looking back.`,
    },
    {
      title: 'Break the yolk, mix the sauce through, and eat the island on a tray',
      description: `Break the egg yolk with a spoon so it runs into the rice. Pour more nước chấm over if the plate needs it. Cut through the chả cá with the edge of the spoon — the crust should shatter audibly and the interior should compress and spring back.

Eat by scooping: a spoonful of sauce-dressed rice, a piece of fish cake with crust attached, a strand of pickle, and — if the yolk cooperated — a streak of liquid gold over everything. The bite carries: the dry, separate, sauce-soaked broken rice; the crisp-then-springy fish cake; the sharp-sour pickle; and the yolk's richness tying them together.

This is the plate that feeds Phú Quốc's morning — the dock workers, the market sellers, the dive-shop operators, the nước mắm factory hands — and it costs less than a coffee in Saigon. It is the most democratic meal on the island: everyone eats it, everyone's plate looks the same, and the only variable is how much nước chấm you pour, which tells the stall owner nothing about your income and everything about your palate.`,
      tip: `Three recipes into the Phú Quốc collection and the nước mắm has now appeared in every one — as the product itself (recipe 1), as the seasoning in the bún quậy broth and the table bottle (recipe 2), as the dressing for the gỏi cá trích (recipe 3), and now as the nước chấm on the cơm tấm plate. It will appear in every remaining recipe as well, because it appears in every dish the island makes. This is what a Protected Designation of Origin means when it is not a marketing exercise but a description of a place: the island catches the fish, ferments the fish, and then uses the ferment to season everything else the island catches. The economy is circular, the flavour is self-referencing, and the cơm tấm plate — fish cake seasoned with fish sauce made from fish caught in the same water — is the circle made visible on a lunch tray.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
