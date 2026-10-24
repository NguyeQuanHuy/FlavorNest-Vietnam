'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-gai-duc-tho',
  title: `Bánh Gai Đức Thọ (Black Ramie-Leaf Sticky Rice Cakes)`,
  subtitle: `Glutinous rice flour pounded with boiled ramie leaves until it turns jet black and elastic, wrapped around a mung bean and coconut heart, folded into dried banana leaf and steamed for an hour. The funeral cake, the wedding cake, the anniversary cake — Đức Thọ's black parcel for every occasion that matters.`,
  category: 'DESSERT',
  difficulty: 'Hard',
  totalTime: '3 hr',
  rating: 4.8,
  baseServings: 8,
  heroImage: '/images/recipes/banh-gai-duc-tho.jpg',
  intro: `A bánh gai looks, before you unwrap it, like a small parcel of dead leaves — a squat pyramid of dry, brown, papery banana leaf tied with a strip of bamboo. Unfold it and the contrast is theatrical: inside sits a cake of profound, glossy, absolute black, faintly sticky, smelling of banana leaf and something green and herbal underneath. Bite through the black and it gives like soft toffee, chewy and elastic, and then the centre arrives — pale gold mung bean, sweet with molasses, rich with coconut. Đức Thọ, the district on the River La that also makes the province's noodles and rakes its clams, has made this cake for generations, and in Hà Tĩnh it is the cake of occasions: no death anniversary, wedding or Tết goes without a stacked tower of black parcels on the altar.

The black is a leaf. Lá gai is ramie — Boehmeria nivea, a nettle-family plant grown across northern and central Vietnam, better known globally as a fibre crop; its bast fibres have been spun into cloth for four thousand years. The food use is the same plant working the same way at a smaller scale. The leaves are stripped of their stems and veins, boiled for a long time until completely soft, squeezed dry, and then pounded — traditionally in a stone mortar, for a long time — together with glutinous rice flour and mật mía, the raw cane molasses that sweetens everything in this province. The boiling breaks down the leaf; the pounding disperses it through the dough as microscopic fibres and blackened pigment. The colour comes from the leaf's polyphenols oxidizing during the long boil, the same chemistry that turns green tea leaves black, and it is total: a properly made bánh gai is not dark green, it is black.

But the leaf is doing far more than colouring. Those dispersed ramie fibres form a fine cellulose mesh through the dough, and that mesh changes the cake's physics. Plain glutinous rice dough is sticky, slack and shapeless, and it stales fast — the amylopectin retrogrades, water migrates, and within two days it is hard. The ramie fibre mesh gives the dough body and elasticity while it is fresh, and then, together with the heavy sugar load from the molasses, it holds water in place and slows retrogradation dramatically. A bánh gai keeps for a week at room temperature, soft and chewy, wrapped in its leaf. This is why it became the occasion cake and the travelling cake of a poor province: it is celebration food that does not spoil, in a climate that spoils everything.

The wrapper completes the system, and it must be dry banana leaf, not fresh. Fresh green banana leaf is for cakes eaten within the day; it stays damp and it grips. Dried leaf — brown, papery, brittle until steamed — breathes. It lets the cake vent steam as it cools rather than sweating against plastic-tight green leaf, it releases cleanly from the sticky black surface, and an hour of steaming extracts its deep, hay-like, faintly vanilla aroma straight into the dough. Molasses, glutinous rice, mung bean, coconut, a fibre crop and a dead leaf: nothing in a bánh gai costs anything, and the result is one of the most sophisticated pieces of preservation engineering in Vietnamese cooking, dressed as a sweet.`,
  ingredientSections: [
    {
      title: 'The black dough',
      items: [
        {
          amount: 150,
          unit: 'g',
          name: 'dried lá gai (ramie leaves)',
          note: `The defining ingredient. Sold dried in bags at Vietnamese groceries in Europe (lá gai khô) — 150 g dried is the equivalent of about 500 g fresh. Strip out any remaining stems and thick veins before boiling; they never soften and leave woody threads in the dough. There is no substitute: pandan gives green, not black, and no other leaf brings the fibre. If you truly cannot find it, some makers use black sesame paste for colour — but be honest that it is a different cake.`,
        },
        {
          amount: 400,
          unit: 'g',
          name: 'glutinous rice flour (bột nếp)',
          note: `Glutinous, absolutely — this cake is entirely amylopectin chew. Plain rice flour sets hard and crumbly and cannot make bánh gai.`,
        },
        {
          amount: 250,
          unit: 'g',
          name: 'mật mía (raw cane molasses)',
          note: `The same whole cane syrup that makes cu đơ — dark, smoky, unrefined. It sweetens, it colours, and its sugar load is half of what keeps the cake soft for a week. Jaggery syrup or melted panela substitute; refined white sugar makes a paler, blander, faster-staling cake.`,
        },
        { amount: 2, unit: 'tbsp', name: 'neutral oil', note: `Worked into the dough at the end — it coats the starch, adds gloss, and helps the finished cake release from the leaf.` },
        { amount: 0.25, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The filling',
      items: [
        {
          amount: 250,
          unit: 'g',
          name: 'split peeled mung beans (đậu xanh cà vỏ)',
          note: `Soaked 4 hours, steamed until completely soft, and mashed smooth while hot. The heart of almost every Vietnamese celebration cake — pale gold, mild, and a clean canvas for the coconut and molasses.`,
        },
        { amount: 100, unit: 'g', name: 'fresh or frozen grated coconut', note: `Grated coconut flesh, not desiccated flakes — the moisture and the fat are the point. If using dried, rehydrate it in warm coconut milk first.` },
        { amount: 80, unit: 'g', name: 'sugar' },
        { amount: 30, unit: 'g', name: 'candied winter melon or candied coconut, finely diced (optional)', note: `The traditional Đức Thọ addition — little chewy-sweet nuggets hidden in the smooth bean paste.` },
        { amount: 1, unit: 'tbsp', name: 'roasted sesame seeds' },
        { amount: 0.5, unit: 'tsp', name: 'vanilla or a drop of pomelo flower water (optional)' },
        { amount: 2, unit: 'tbsp', name: 'coconut oil or neutral oil' },
        { amount: 0.25, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'Wrapping and finishing',
      items: [
        {
          amount: 24,
          name: 'pieces of dried banana leaf (lá chuối khô), about 25 x 20 cm',
          note: `Dry, brown, papery — NOT fresh green leaf. Dried leaf breathes, releases cleanly from the sticky cake, and gives the hay-vanilla aroma that defines bánh gai. Sold in bundles at Vietnamese groceries; fresh leaf can be substituted only if you dry it yourself over low heat until brown and brittle. Wipe each piece with a damp cloth and pass briefly over a flame or steam to make it pliable. Use 2-3 overlapping layers per cake.`,
        },
        { amount: 50, unit: 'g', name: 'roasted white sesame seeds', note: `The black dough is rolled in sesame before wrapping — the pale seeds against the black surface are the visual signature of the cake, and they stop the dough gripping the leaf.` },
        { amount: 8, name: 'strips of bamboo string or kitchen twine' },
      ],
    },
  ],
  steps: [
    {
      title: 'Boil the ramie leaves to blackness — 60-90 minutes, then squeeze dry',
      description: `Rinse the dried lá gai well, cover generously with water in a pot, and boil — genuinely boil, lid on — for 60 to 90 minutes, topping up the water as needed, until the leaves are completely soft, dark, and collapse into a mush when pressed between two fingers with no fibrous resistance.

Drain, rinse once in cold water, and then squeeze — hard, in fistfuls or in a cloth — until the leaf mass is as dry as you can make it. You should have a dense, near-black paste of about 250-300 g.

Under-boiled leaves are the classic failure: the dough ends up flecked dark green instead of uniformly black, and worse, woody leaf fragments stay palpable in the finished cake. The leaf must surrender completely before it meets the flour. If in doubt, boil another twenty minutes; the leaf cannot be overcooked.`,
      tip: `The colour change from green to black is oxidation chemistry, and it is the same event that separates green tea from black tea. Ramie leaves are dense in polyphenols; the long boil ruptures the cells, releases polyphenol oxidase and its substrates together, and the polyphenols polymerize into dark melanin-like pigments — theabrownins, in the tea literature. Heat then fixes the colour permanently. This is why a quick blanch gives you green mush and only a long, committed boil gives you black: you are not extracting a pigment that exists, you are manufacturing one.`,
    },
    {
      title: 'Pound the leaf into the flour — the dough must turn uniformly black',
      description: `Traditional method: pound the squeezed leaf paste in a large mortar until it is a completely smooth, fibrous black paste with no visible leaf fragments — 10-15 minutes of real work — then add the glutinous rice flour, molasses and salt in stages, pounding between additions, until you have one uniform, glossy, jet-black dough.

Modern method, and it is honest: blitz the squeezed leaf in a food processor with the molasses until absolutely smooth, then knead into the flour and salt by hand for 10 minutes.

Either way, finish by kneading in the oil. The dough should be soft, very elastic, slightly tacky but not sticking to clean hands, and black through and through — cut it open and check. Grey-green marbling means keep kneading. Cover and rest 30 minutes.`,
      tip: `The pounding is not mixing — it is fibre engineering. Ramie's bast fibres are among the strongest natural cellulose fibres known (which is why the plant clothed half of Asia for millennia), and pounding shears them down into microscopic fragments dispersed evenly through the starch. That dispersed mesh is what gives bánh gai dough an elasticity that plain nếp dough completely lacks: it can be stretched thin around a filling without tearing, and it holds a moulded shape. A blender does the shearing faster; the mortar does it with more control. Both work. What does not work is stirring — undispersed fibre clumps into strings and the cake eats like it has hair in it.`,
    },
    {
      title: 'Make the filling — steamed mung bean, mashed hot, cooked dry',
      description: `Steam the soaked mung beans 25 minutes until a bean crushes to powder between two fingers. Mash or blend them smooth while still hot — cold mung bean will never go smooth.

In a pan over low heat, combine the mashed bean, sugar, coconut, oil and salt, and stir constantly for 8-10 minutes until the paste thickens, dries, and pulls away from the pan in one mass. Off the heat, fold in the candied melon, sesame and vanilla.

Cool completely, then roll into 8 equal balls of about 55-60 g each. The paste must be dry enough to hold a ball that keeps its shape on the counter — a wet filling releases steam inside the cake during the hour of cooking and blows channels through the black dough.`,
      tip: `Cooking the sweetened bean paste dry in a pan — the Vietnamese technique called sên nhân, common to every filled cake from bánh trung thu to bánh ít — is water management, not flavour development. Steamed mung bean holds far too much free water to sit inside a starch dough for an hour of steaming; the slow pan-drying evaporates that water while the sugar binds what remains. The visual endpoint, the paste pulling cleanly off the pan as one mass, is a direct readout of water activity. It is the exact same test, in miniature, as the kho reduction and the cu đơ syrup: Vietnamese cooking reads water content by eye, constantly.`,
    },
    {
      title: 'Fill, seal, and roll in sesame — 8 black spheres',
      description: `Oil your palms lightly. Divide the rested black dough into 8 pieces of about 100 g. Flatten each into a disc a little larger than your palm, thicker at the centre than the edges.

Set a ball of filling in the centre and bring the dough up around it, pinching and smoothing until the filling is completely sealed with no thin patches — hold the ball up to the light; anywhere the gold shows through will split in the steamer. Roll gently between your palms into a smooth sphere.

Roll each sphere in the roasted sesame seeds until evenly coated. The sesame is traditional, beautiful against the black, and practical: it is the release layer between the sticky dough and the leaf.`,
      tip: `Thicker at the centre, thinner at the edges is the universal geometry of wrapping a filling, and it is worth understanding once: when you gather a flat disc up around a sphere, the edge material bunches and overlaps at the top seam while the centre stretches to become the base. A uniform disc therefore produces a cake with a thin, fragile bottom and a thick, doughy crown. Pre-compensating — thick middle, thin rim — yields an even wall all the way around. Every dumpling maker in Asia does this without thinking, and it is the single technique that most separates a neat bánh gai from a lopsided one.`,
    },
    {
      title: 'Wrap in dried banana leaf — loose enough to breathe',
      description: `Take 2-3 pieces of softened dried leaf, overlap them in a cross, and set a sesame-coated sphere in the centre. Fold the leaves up and over into a squat, four-cornered parcel — the traditional shape is a low pyramid — and tie firmly but not tightly with bamboo string.

Firm but not tight is the instruction that matters. The cake swells slightly as it steams; a strangled parcel forces the dough out through the leaf seams, while a loose one lets the wrapper collapse and print creases into the surface. The leaf should hold its shape with a little give when pressed.

Wrap all 8. They should look, at this point, like something dug out of an archive — dry, brown, humble. This is correct.`,
      tip: `The dried leaf is the preservation system, and its breathability is the whole reason it beats every modern alternative. As the finished cake cools, its interior moisture migrates outward; a fresh green leaf or plastic wrap traps that moisture as condensation against the surface, and a wet sugar-rich surface moulds within two days in a Vietnamese climate. Dried leaf wicks and vents the moisture while still shielding the cake from air and insects — a semi-permeable membrane, made by hanging a leaf in the sun. A bánh gai in dried leaf keeps a week on an altar in summer. That performance, at zero cost, is why the format has not changed in living memory.`,
    },
    {
      title: 'Steam one hour, cool completely — and eat on the second day',
      description: `Arrange the parcels in a steamer over hard-boiling water, seam-side up, with space between them. Steam a full 60 minutes, topping up the boiling water as needed and never letting it go off the boil.

Lift them out and cool completely at room temperature — several hours, ideally overnight. Do not unwrap a hot bánh gai except to test one: the dough straight from the steamer is slack, gluey and shapeless, and the flavour is muted.

The cake sets as it cools, and it is genuinely better on the second day, when the texture has firmed to its proper dense chew and the banana leaf aroma has penetrated fully. Unwrap, peel the leaf back like a banana, and eat with green tea. Keeps a week at room temperature in its leaf; do not refrigerate, which stales the starch in hours.`,
      tip: `The overnight rest is starch behaviour, not superstition. Straight from the steamer, the amylopectin is fully gelatinized and holds maximum water — soft to the point of structureless. As it cools and rests, limited, controlled retrogradation begins: the outer starch chains re-associate just enough to build the dense, elastic, toffee-like chew that defines the cake, while the sugar and ramie fibre hold the rest of the water in place and stop the process running on to staleness. A bánh gai is engineered to be caught mid-retrogradation and held there for a week. Eating it hot is eating it unfinished; refrigerating it is fast-forwarding it to stale. Day two, room temperature, is the cake the recipe is aiming at.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
