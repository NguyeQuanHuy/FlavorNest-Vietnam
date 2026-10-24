'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-tet-tra-cuon',
  title: `Bánh Tét Trà Cuôn (Trà Cuôn Village Banana-Leaf Sticky Rice Logs)`,
  subtitle: `A cylinder of glutinous rice wrapped around a core of mung bean, pork belly and banana, rolled tight in banana leaf and boiled for eight hours until the rice has fused into translucent jade, the fat has melted into the bean, and the banana has caramelized into a dark, sweet vein running through the centre. The Tết cake of the Mekong, and Trà Cuôn village's claim to the best one in the Delta.`,
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '12 hr',
  rating: 4.9,
  baseServings: 8,
  heroImage: '/images/recipes/banh-tet-tra-cuon.jpg',
  intro: `Every province in the Mekong Delta makes bánh tét for Tết, and every province believes its own is the best. The argument is conducted annually, across kitchen tables and market stalls from Cần Thơ to Cà Mau, and it has no winner because it has no referee. But if you ask the Delta itself — the vendors and the grandmothers and the bus-station sellers who carry reputation on their shoulders — a disproportionate number of them will name the same village: Trà Cuôn, a small commune in Cầu Ngang district, Trà Vinh, where bánh tét is not a seasonal project but a year-round industry and has been for longer than the village's written records go.

Bánh tét is the southern cousin of the northern bánh chưng — both are glutinous rice wrapped around a filling and boiled for hours — but where bánh chưng is square, wrapped in dong leaves, and filled with mung bean and pork alone, bánh tét is cylindrical, wrapped in banana leaf, and carries a filling that the south treats as a canvas. The Trà Cuôn version runs three classic variants: nhân thịt (pork belly and mung bean, the savoury), nhân chuối (banana, the sweet), and nhân đậu (mung bean and coconut, the vegetarian for pagoda trays and the first day of Tết). What they share is the rice — soaked, drained, tossed with a little coconut milk and a pinch of salt — and the wrap — fresh banana leaves, softened over flame, layered two or three deep, and rolled with a tightness that determines whether the log cooks evenly or collapses into a lopsided mush. And the boil: eight hours, minimum, in a pot large enough to hold a family's production, over a fire that runs through the night.

Eight hours is not a number that can be shortened and should not be attempted. Here is what happens inside the log across that time. In the first two hours, the steam from the boiling water penetrates the banana leaf and begins gelatinizing the raw glutinous rice from the outside inward — the outer grains swell, absorb their soak water and the coconut milk, and start to fuse. By hour four the gelatinization front has reached the centre; the pork fat has begun to render and migrate outward through the bean paste; the banana, if present, is softening and browning. By hour six the entire rice mass has fused into a single, continuous, translucent, jade-green gel — individual grains are no longer distinguishable — and the fat has lubricated every surface. By hour eight the log is a solid, sliceable, dense, glossy cylinder that holds its shape when cut, with a filling that has married completely into the rice. Cut it open and the cross-section is a mandala: a dark pork-belly centre, a golden-green bean ring, and a jade rice exterior, all fused, all distinct, all one object. Cut it at six hours and the centre is still chalky, the fat has not distributed, and the rice is gummy rather than glossy. The eight hours is not tradition for its own sake. It is starch chemistry at scale, running to completion.

The banana leaf is the last participant and it contributes more than packaging. Over eight hours of moist heat, the leaf releases chlorophyll and its own volatile compounds — coumarin, grassy terpenes, a faint vanilla-like note — directly into the rice's outer layer, which is why a properly boiled bánh tét has a green tinge and a perfume that no food colouring or flavouring can replicate. The leaf also regulates moisture exchange: its waxy cuticle is semi-permeable, letting steam in but preventing the rice from waterlogging, which is why the log sets dense rather than porridge-soft. And the leaf is the plate: a bánh tét is unwrapped, sliced on its own leaf, and eaten from it, the green surface still fragrant and slightly sticky with dissolved rice starch. Trà Cuôn's leaves come from the dense banana groves that line every canal in the commune, cut fresh the morning of the wrap, and the village's year-round production means those groves are as much a part of the industry as the rice fields.

A Trà Cuôn bánh tét, bought at the roadside, is a cylinder about thirty centimetres long and eight across, dense enough to serve as a weapon in an emergency and heavy enough to anchor a boat in a light breeze. It is sliced into rounds a centimetre thick, revealing its cross-section, and eaten at room temperature — or, the next morning, sliced and pan-fried until the outside is golden and crisp and the inside is warm and yielding, which is the leftover version and the better one, and everyone knows it. With pickled vegetables, with a cup of tea, with nothing at all: it is complete, portable, self-contained, and it keeps three days at room temperature in its leaf, which is exactly as long as the first three days of Tết, which is exactly why it exists.`,
  ingredientSections: [
    {
      title: 'The rice',
      items: [
        {
          amount: 1,
          unit: 'kg',
          name: 'glutinous rice (nếp), the best quality available',
          note: `Long-grain glutinous, not broken. Soaked 6-8 hours, drained well, then tossed with the coconut milk, salt and a drop of oil. The soak hydrates the grain so it gelatinizes evenly through the long boil; an insufficiently soaked grain stays chalky at its core even after eight hours. Thai glutinous rice is excellent and widely available.`,
        },
        { amount: 100, unit: 'ml', name: 'coconut milk', note: `Tossed through the drained rice — its fat lubricates the grains during the long boil, prevents them from welding into a solid block too early, and adds a faint tropical sweetness to the finished rice.` },
        { amount: 1.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'Filling option 1: nhân thịt (savoury pork)',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'pork belly, skin on, in thick strips about 3 cm wide',
          note: `Skin on — the skin dissolves to gelatin over eight hours and is the reason the filling holds together when sliced. Marinated overnight in fish sauce, sugar, pepper, garlic and a pinch of five-spice. Each log gets one or two strips running its full length.`,
        },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 3, name: 'cloves garlic, pounded' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        { amount: 0.5, unit: 'tsp', name: 'five-spice powder' },
        {
          amount: 400,
          unit: 'g',
          name: 'split mung beans (đậu xanh cà vỏ), soaked 4 hours',
          note: `Steamed 20 minutes until soft, mashed lightly while warm, seasoned with a pinch of salt and sugar, and formed into a cylinder the length of the log. The bean paste wraps around the pork as the golden layer between meat and rice.`,
        },
      ],
    },
    {
      title: 'Filling option 2: nhân chuối (sweet banana)',
      items: [
        {
          amount: 6,
          name: 'small ripe bananas (chuối xiêm / burro bananas), peeled',
          note: `The short, plump, slightly tart Delta banana — not the Cavendish, which is too bland and too watery. Burro or apple bananas from a Latin American grocer are the correct substitute. The banana runs the full length of the log as a single dark sweet vein, and it caramelizes over eight hours into something closer to banana jam than fruit.`,
        },
        { amount: 100, unit: 'g', name: 'sugar, mixed through the rice for this variant' },
        { amount: 50, unit: 'g', name: 'coconut cream (extra, for the sweet version)' },
      ],
    },
    {
      title: 'The wrapping',
      items: [
        {
          amount: 12,
          name: 'large fresh banana leaves, washed, de-ribbed, softened',
          note: `Soften each leaf by passing it briefly over a gas flame or dipping in boiling water for 5 seconds — the heat melts the waxy surface just enough to make the leaf pliable without tearing. De-rib by cutting out the thick central vein. Layer 2-3 leaves, overlapping, for each log. Fresh banana leaves from Asian or Latin American groceries in Europe; frozen are acceptable but more fragile.`,
        },
        { amount: 8, name: 'lengths of banana-leaf string or kitchen twine', note: `For tying the logs tight after rolling — at 4-5 points along the length, plus both ends.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Soak the rice, steam the beans, marinate the pork — the day before',
      description: `Soak the glutinous rice 6-8 hours in cool water. Soak the mung beans 4 hours. Marinate the pork belly strips in fish sauce, sugar, garlic, pepper and five-spice, covered, overnight in the fridge.

Steam the drained mung beans 20 minutes until a bean crushes to powder between two fingers. Mash lightly while hot — not smooth, some texture — season with salt and sugar, and roll into cylinders about 4 cm in diameter and the length of your banana leaf.

Drain the rice thoroughly and toss with the coconut milk, salt and oil. Everything is now ready for assembly the following morning — which is why Trà Cuôn wraps at dawn and boils through the day into the night.`,
      tip: `Overnight marinating of the pork is doing more than seasoning: the salt in the fish sauce draws water from the surface, firms the protein, and lets the five-spice and garlic penetrate to the centre of a 3 cm strip. After eight hours of boiling, the marinade's flavour reaches every millimetre and the meat's own juices have been replaced, by osmotic exchange, with seasoned liquid. A pork strip marinated for thirty minutes and boiled for eight hours has a seasoned crust and a bland centre. The overnight is the flavour's transport ticket.`,
    },
    {
      title: 'Wrap tight — the roll determines the slice',
      description: `Lay 2-3 softened banana leaves, overlapping, on a flat surface, shiny side down. Spread a layer of seasoned rice along the centre, about 2 cm thick and the length of the leaf. Lay the mung bean cylinder down the centre of the rice. Lay the marinated pork strip (or the peeled bananas for the sweet version) down the centre of the bean. Cover with more rice, pressing gently so the filling is fully enclosed in a rice shell 1.5-2 cm thick on all sides.

Now roll: fold the near edge of the leaf over the rice, press to form a cylinder, tuck the sides, and continue rolling away from you, tight and even. The log should be 7-8 cm in diameter and 25-30 cm long. Tie with string at both ends and at 3-4 points along the length, firm but not crushing.

The tightness is the skill. A loose roll lets water in during the boil and the rice bloats into porridge; a properly tight roll compresses the rice just enough that it gelatinizes under pressure into a dense, sliceable gel. Trà Cuôn grandmothers judge a wrapper's skill by squeezing the tied log between two fingers: it should feel solid, uniform, and give no more than 5 mm.`,
      tip: `Banana leaf, shiny side in (touching the rice), is a deliberate orientation. The shiny surface is the leaf's waxy cuticle — a natural lipid coating that acts as a release layer, so the cooked rice peels cleanly from the leaf when unwrapped instead of tearing and sticking. Rough side in, and eight hours of starch gelation welds the rice to the leaf with a bond no patience can break. One orientation produces a beautiful unwrapping; the other produces a crime scene. The shiny side is always in.`,
    },
    {
      title: 'Boil eight hours — the fire runs through the night',
      description: `Lay the logs in the largest pot you own, cover with water by at least 5 cm, weigh them down with a plate so they stay submerged, and bring to a steady boil. Maintain a genuine, continuous boil — not a simmer, not a rolling fury, but a solid, sustained boil with the surface actively breaking — for a minimum of eight hours. Top up with boiling water from a kettle every hour or so; the logs must never break the surface.

The fire management is the longest single piece of attention in this collection, and in Trà Cuôn it is a communal, through-the-night affair: families take shifts, feed the fire, drink coffee, tell stories, and check the water level at intervals that tradition has set at roughly one hour. An electric stove set to a reliable medium-high, checked before bed and checked at dawn, is the honest modern equivalent and it works.

At eight hours, pull one log, let it cool 30 minutes, unwrap one end, and cut a test slice. The rice should be uniformly translucent jade-green, with no opaque white core; the filling should be completely cooked and the fat distributed; the slice should hold its shape on the plate. If any white remains at the centre, re-wrap and boil on.`,
      tip: `The eight-hour boil is the recipe's most commonly shortened step and its least forgivable one. At hour four the rice looks cooked — it is soft, it is gelatinized at the edges — but the centre of a 7 cm cylinder at a sustained 100°C has only just begun to fuse. The gelatinization front moves inward at a rate set by heat transfer through a dense, wet starch, and that rate cannot be accelerated by turning up the flame (the water is already at 100°C — that is its ceiling). Shortening the boil does not give you an underdone version of the same cake; it gives you a different, worse thing: gummy at the centre, translucent at the rim, with a pork strip still rendering in a bean paste that has not yet absorbed the fat. Eight hours is the time the physics requires, and the physics has not changed since the first log went into the first pot.`,
    },
    {
      title: 'Cool, press, and rest — the cake finishes itself overnight',
      description: `Pull the logs from the pot with tongs and lay them on a rack or a clean surface. While still warm, press them gently between two boards with a light weight on top — a book, a pot of water — for an hour. The press is not flattening; it is compacting: squeezing the last air pockets out and evening the density so every slice is uniform.

Cool to room temperature, then rest overnight — still wrapped — before cutting. Like the bánh gai, the texture improves dramatically as the amylopectin retrogrades slightly overnight, firming from soft-gelatinous to dense-chewy.

A properly rested bánh tét, unwrapped and sliced into 1.5 cm rounds, should reveal a clean mandala: jade rice, golden bean, dark pork, with the banana leaf's green still perfuming the outer surface. It holds its shape on a plate. It can be picked up and eaten by hand. It is, in the most literal sense, a complete meal in a cylinder.`,
      tip: `The banana leaf contributes its signature in the last hours, not the first. Chlorophyll migrating from the leaf into the rice's outer layer is a slow diffusion process that needs the sustained moist heat and the close contact of the press to complete — a log unwrapped at hour six is pale; one unwrapped at hour eight, after an overnight rest, is distinctly green. The coumarin and terpenes that give bánh tét its specific perfume follow the same timetable. The leaf is an ingredient with an eight-hour minimum extraction time, and the rest lets the chemistry finish what the boil started.`,
    },
    {
      title: 'Slice and eat — or fry the leftovers, which is the real move',
      description: `Unwrap the log on its own leaf. Slice into rounds 1-1.5 cm thick with a wet knife — the starch clings to a dry blade and drags the filling sideways.

Eat at room temperature with pickled scallion heads (dưa kiệu), a sliver of chili, and a cup of tea. The nhân thịt version wants the pickled kiệu badly — its vinegar and crunch cut the dense richness of eight hours of pork fat through bean and rice. The nhân chuối version wants nothing at all; it is its own dessert, the banana now a dark, caramelized, jam-like core.

And on the second morning: slice the leftover log into rounds, fry in a little oil over medium heat until golden and crisp on both faces, and eat hot. The fried version develops a Maillard crust around the still-soft interior, the fat renders a second time to the surface, and the banana — already caramelized by eight hours of boiling — now has a fried-banana edge as well. Everyone in the Delta knows that the fried leftover is better than the fresh original, and nobody says it out loud at the Tết table, and everybody says it the morning after.`,
      tip: `Bánh tét keeps three days at room temperature in its leaf — exactly the three days of Tết that require no cooking and no market-going — and the engineering is not accidental. The dense, low-moisture, sugar-and-fat-saturated rice-and-bean matrix is hostile to most bacteria; the banana leaf breathes enough to prevent condensation but not enough to admit contamination; and the salt and fish sauce in the pork provide additional antimicrobial hurdles. A food that feeds a family for three days without refrigeration, without reheating, and without spoiling in a 30°C Delta January: that is the spec the cake was designed to, and the recipe is, in the end, an engineering solution to a calendar problem — made so well, for so long, that nobody remembers it as engineering. They remember it as Tết.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
