'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'com-lam',
  title: `Cơm Lam (Bamboo-Tube Sticky Rice)`,
  subtitle: `Glutinous rice soaked overnight, packed into a fresh-cut green bamboo tube, sealed with banana leaf, and slow-roasted over embers until the tube chars black and the rice inside steams to a dense, fragrant, faintly sweet cylinder perfumed by the bamboo's inner membrane. The highland's oldest rice format, and the one that needs no pot, no lid and no kitchen.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '2 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/com-lam.jpg',
  intro: `Cơm lam is the highlands' rice — not a recipe so much as a technology, invented independently by every mountain culture in mainland Southeast Asia that had bamboo and fire and glutinous rice and needed to carry a cooked meal into the forest without a pot. The Tày, the Dao, the H'mông and the Thái of northern Vietnam all make it; so do the Lao, the upland Thai, the Shan of Myanmar and the hill tribes of Yunnan. The technology is identical everywhere because the engineering problem is identical: how do you cook rice with no vessel? The answer: the bamboo IS the vessel.

A fresh-cut green bamboo internode — the section between two nodes, typically 30-40 cm long and 5-7 cm in diameter — is a natural, single-use cooking pot. Its walls are hard, moisture-resistant and slow to char. Its interior is smooth, lined with a thin, white, slightly waxy membrane (the bamboo's inner epidermis) that prevents the rice from sticking and that, under heat, releases volatile compounds — principally vanillin, guaiacol and a family of plant-specific esters — that perfume the rice with a warm, woody, faintly sweet, green-bamboo fragrance no other cooking vessel can produce. The membrane is the seasoning, and the bamboo is the pot, and the fire is the oven, and the banana leaf stuffed into the open end is the lid.

The rice is nếp — glutinous rice, the same sticky rice that made the xôi mặn and the bánh tét and every Tết preparation in this collection — soaked overnight until the grains are fully hydrated and can be crushed between two fingers, then packed into the bamboo tube with a measured amount of water (or coconut milk, in the lowland versions), sealed with a banana-leaf plug, and roasted over embers. The roasting is slow — 40-60 minutes, turning the tube a quarter-turn every 10 minutes — and the cooking method is a combination of steaming (the water inside the tube converts to steam, which gelatinises the rice starch) and conduction (the bamboo wall transfers heat inward from the fire). The charring of the bamboo's outer wall is progressive and expected: by the time the rice is done, the exterior is black, the interior wall is golden-brown, and the membrane has released its volatiles into the rice's surface.

When the tube is done — the bamboo is charred uniformly, the tube sounds solid rather than sloshy when tapped, and a skewer pushed through the banana-leaf plug into the rice meets a firm, cohesive mass — the bamboo is split lengthwise with a heavy knife, and the rice is revealed: a perfect cylinder, dense, glossy, faintly golden at the surface where the membrane's compounds have migrated, and smelling of bamboo forest and fire. The cylinder is sliced into rounds 2-3 cm thick, and each round is eaten with the highland's standard accompaniments: muối vừng (sesame salt), thịt nướng (grilled pork or buffalo), or — in Tuyên Quang's Tày communities — with the gỏi cá bỗng sông Lô or the vịt bầu om măng chua from earlier in this provincial collection.

The cơm lam is food as engineering: a cooking vessel grown from the ground, a fuel source from the forest floor, and a grain from the paddy below the mountain. Every component is found within walking distance of the fire, and the fire is lit wherever the walk stops. It is the most portable, the most self-contained and the most environmentally zero-waste cooking method in this collection — the bamboo biodegrades, the ash returns to the soil, and the banana leaf composts — and it is still made daily, in exactly this way, in the highlands of Tuyên Quang and every mountain province in Vietnam's north.`,
  ingredientSections: [
    {
      title: 'The rice',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'glutinous rice (nếp cái or nếp cẩm for purple version), soaked overnight',
          note: `Soaked 8-12 hours minimum — the grains should be fully hydrated, opaque-white, and crushable between thumb and forefinger. Under-soaked rice will not cook through in the bamboo's steaming time. Nếp cẩm (black/purple glutinous rice) makes a dramatic purple cơm lam; nếp cái (white) is the traditional Tuyên Quang default.`,
        },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The bamboo tubes',
      items: [
        {
          amount: 4,
          name: 'fresh green bamboo internodes, 30-40 cm long, 5-7 cm diameter',
          note: `FRESH — cut that day or the day before, still green, still moist, still carrying its inner membrane. Dried bamboo has lost its membrane volatiles and its moisture (which prevents premature charring) and will burn through before the rice cooks. The bamboo species matters less than its freshness, but the Tày prefer nứa (Schizostachyum) or luồng (Dendrocalamus) — species with thick walls and a pronounced inner membrane. Cut each tube so that one end retains its natural node (the closed end) and the other is open (the filling end). Each tube is a natural cup, closed at the bottom, open at the top.`,
        },
      ],
    },
    {
      title: 'The seal and the liquid',
      items: [
        { amount: 4, name: 'pieces of banana leaf, 10 x 10 cm, for plugging the open end' },
        {
          amount: 200,
          unit: 'ml',
          name: 'water (plain) or coconut milk',
          note: `About 50 ml per tube — poured over the packed rice to about 1.5 cm above the rice surface. Plain water gives the purest bamboo-perfumed flavour. Coconut milk (the lowland/southern variation) gives a richer, sweeter, more tropical cylinder. Both work.`,
        },
      ],
    },
    {
      title: 'Accompaniments',
      items: [
        {
          amount: 4,
          unit: 'tbsp',
          name: 'muối vừng (sesame salt): toasted sesame seeds + coarse salt, 3:1, ground together',
          note: `The highland dipping salt — the same format as the muối tiêu chanh but with sesame's nuttiness replacing pepper's heat. Each round of cơm lam is dipped in the sesame salt before eating.`,
        },
        { amount: 200, unit: 'g', name: 'grilled pork or buffalo meat, sliced (optional)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Pack the rice into the tubes — firm but not crushed, water just above the surface',
      description: `Drain the soaked rice well. Toss with the salt.

Stand each bamboo tube upright (closed node at the bottom). Spoon the rice in, tapping the tube's base on the ground every few spoonfuls to settle the grains. Fill to about 5 cm below the open top — the rice will expand as it steams and needs headroom.

Pour water (or coconut milk) into each tube until the liquid stands about 1.5 cm above the rice surface. The liquid is the steam source — too little and the top layer of rice stays raw; too much and the excess boils out of the seal and the tube steams empty.

Plug the open end with a folded piece of banana leaf, pushed down firmly to form a tight seal. The seal does not need to be airtight — the steam pressure inside a bamboo tube is low — but it must keep the rice from falling out when the tube is laid on its side over the fire.`,
      tip: `The rice-to-water ratio inside the tube is different from a pot or a rice cooker because the cooking medium is steam rather than absorption. In a pot, the rice absorbs all the added water and the ratio is 1:1 by volume. In a bamboo tube, the water converts to steam that rises through the rice column, and a portion of the steam escapes through the banana-leaf plug, so slightly more water is needed — roughly 1:1.2 to 1:1.3 by volume. The excess accounts for the steam loss, and the rice at the bottom (submerged in the liquid that has not yet boiled off) cooks faster than the rice at the top (steamed by the vapour rising through the column). The turning of the tube during roasting equalises this gradient by redistributing the residual liquid.`,
    },
    {
      title: 'Roast over embers — 45-60 minutes, quarter-turn every 10 minutes',
      description: `Build a fire and let it burn to glowing embers — the same flameless, radiant heat as every charcoal dish in this collection. Lay the filled tubes horizontally over the embers, propped on stones or on a simple bamboo rack, 10-15 cm above the coals. If you have four tubes, lay them in a row.

Roast 45-60 minutes total. Turn each tube a quarter-turn every 10 minutes — so every face of the bamboo spends equal time facing the heat. The outer wall chars progressively: green → brown → black, and the charring is expected and necessary — the char layer insulates the inner wall and prevents the bamboo from burning through before the rice is done.

Listen: for the first 20 minutes the tubes hiss faintly — the water boiling, the steam building. By minute 30 the hissing stops — the free water has been absorbed or evaporated, and the rice is now cooking in residual steam. By minute 45-50: tap the tube with a stick — it should sound solid, not sloshy. Push a skewer through the banana-leaf plug into the rice — it should meet a firm, cohesive, sticky mass with no wet centre.

If the rice is still wet at the centre at 50 minutes: continue roasting, turning more frequently, for another 10 minutes. The total time depends on the bamboo's wall thickness (thicker = slower heat transfer = longer roasting) and the fire's intensity.`,
      tip: `The bamboo tube is a self-regulating oven: as its outer wall chars, the char layer's thermal conductivity drops (carbon is a worse conductor than green bamboo), which slows the heat transfer to the interior and prevents the rice from scorching even as the fire continues. This is why cơm lam can sit over embers for an hour without burning inside — the charring is not a failure of the vessel but a thermal-regulation feature that the vessel builds for itself during the cooking. No metal pot has this property. No ceramic pot has it. Only a green bamboo tube, charring progressively from outside in, automatically throttles its own heat transfer as the cooking progresses. The bamboo is a programmable oven that writes its own temperature curve.`,
    },
    {
      title: 'Split, slice, dip in sesame salt — the cylinder revealed',
      description: `Pull the tubes from the fire. Let them cool 5-10 minutes — the bamboo is extremely hot and the steam inside is pressurised enough to scald.

Split each tube lengthwise with a heavy knife or a machete — one clean strike along the tube's length. The bamboo cracks open and the rice cylinder is revealed: a perfect, dense, slightly glossy, faintly golden cylinder that holds its shape when the bamboo halves are pulled away. The inner membrane — now golden-brown and fragrant — may cling to the rice's surface in thin, edible strips; peel them off or eat them, both are traditional.

Slice the cylinder into rounds 2-3 cm thick. Each round should be: dense, sticky, holding together without crumbling, faintly golden at the surface (the membrane's migrated compounds), white at the centre, and smelling of bamboo, fire and rice.

Dip each round in the muối vừng — the sesame salt — and eat. The mouthful: dense, sticky, chewy rice (the glutinous-rice texture at its most concentrated), the bamboo's woody-vanilla-green perfume at the surface, and the sesame salt's nutty-salty crunch. Eat with grilled meat if available, or alone — cơm lam and sesame salt is a complete highland meal, carried in one tube, cooked in one fire, eaten in one hand.`,
      tip: `The golden surface — the thin, fragrant, slightly darker layer on the cylinder's outer face — is the membrane's farewell gift. During the 45-60 minutes of roasting, the bamboo's inner epidermis degrades under heat, releasing vanillin (the same compound in vanilla beans, produced here by the thermal decomposition of lignin), guaiacol (the smoky compound in wood smoke, produced by the same lignin pathway), and a series of plant-specific esters that smell of fresh-cut bamboo. These compounds migrate inward into the rice's moist surface, where they are absorbed by the gelatinised starch — the same starch-as-flavour-absorber principle the cháo bò's rice-cooked-in-broth exploited. The golden surface IS the bamboo's signature, and a cơm lam cooked in a metal tube (which some shortcuts attempt) is a cylinder of rice that tastes of rice. A cơm lam cooked in bamboo is a cylinder of rice that tastes of the forest. The tube is not a container. It is an ingredient.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
