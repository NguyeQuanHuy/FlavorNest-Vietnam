'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-trang-me-tay-ninh',
  title: `Bánh Tráng Mè (Giant Sesame-Peanut Rice Paper Crackers)`,
  subtitle: `A full-arm's-span disc of rice paper, slathered thick with a batter of egg, scallion, sesame, peanuts and chili, then grilled over charcoal until it puffs and blisters into a golden-brown savoury wafer. Broken by hand, eaten as a snack, and carried home by the sheet — Tây Ninh's bus-station souvenir and the most satisfying sound a rice cracker can make.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-trang-me-tay-ninh.jpg',
  intro: `Tây Ninh makes rice paper the way Champagne makes sparkling wine: the whole province is a production zone, the workshops cluster along the roads out of town, and the product travels under the province's name as far as the bus lines run. Bánh tráng is the infrastructure — enormous thin discs dried on bamboo racks in the roadside sun — and bánh tráng mè is the thing the infrastructure dreamed up for itself: a dressed, topped, grilled version that turns a plain wrapper into a destination snack.

The base is a sheet of dried rice paper considerably larger than anything most kitchens outside Vietnam have encountered — forty centimetres across is standard, and the showpiece sheets at the Tây Ninh market run past fifty, which is roughly an arm's span. Onto this canvas the maker spreads a thin batter of beaten egg, scallion oil, toasted sesame seeds, crushed roasted peanuts, a scatter of dried shrimp floss or minced shrimp, chili flakes and a pinch of sugar — a wet coat, maybe two millimetres thick, that covers every inch. The dressed disc is then grilled over a low charcoal fire, or in some workshops baked in a wide oven, turned once, until the egg-and-starch coat sets, the sesame and peanuts toast into the surface, and the whole sheet stiffens into a rigid, golden-brown, intoxicatingly fragrant wafer that cracks like a gunshot when you snap it in half.

What makes the snack addictive is the same layered-crunch principle that makes a good pizza crust or a loaded cracker work: the rice-paper base puffs and sets into a brittle, airy starch foam (the charcoal puff, identical to the bánh đa vừng of Hà Tĩnh), while the egg-peanut-sesame topping browns into a dense, toasted, protein-rich crust bonded to its surface. Bite through both together and you get two textures — airy shatter, then dense nutty crunch — followed by a flavour cascade: toasted sesame first, then peanut fat, then dried shrimp savouriness, then a chili warmth arriving last, and under it all the clean, faintly sweet backdrop of the rice paper itself. It is the most technically complete cracker in the Vietnamese canon, and it was designed to be eaten broken into shards, standing at a bus stop or sitting on a plastic stool, with no plate and no accompaniment except possibly a cold drink and certainly a second sheet.

The snack-gift economy around it is real and worth naming. Bánh tráng mè is Tây Ninh's second-most-carried souvenir after the muối tôm, and the two are often bought together at the same roadside stall — one jar, one sheet, wrapped in newspaper, tucked into a bag for the person back home who asked. The sheets travel well (rigid, shelf-stable, already cooked) and last a week in a dry cupboard, though the stall-fresh version, still warm from the coals, represents a peak the cupboard never sees. The recipe below makes four standard-size sheets and takes thirty minutes from counter to cracker, which means a household that owns a charcoal grill and a bag of rice paper can produce its own Tây Ninh bus-stop snack on any afternoon it chooses — and, having done so, will not stop choosing.`,
  ingredientSections: [
    {
      title: 'The base',
      items: [
        {
          amount: 4,
          name: 'large sheets of thin dried rice paper (bánh tráng), 30-40 cm',
          note: `The thin, translucent kind — not the thick phơi sương sheets. Bigger is better and more dramatic; if you can only find 22 cm sheets, use them and adjust topping per sheet downward. The sheet must be dry and rigid — if it has absorbed humidity and gone floppy, it will not puff over the coals.`,
        },
      ],
    },
    {
      title: 'The topping batter',
      items: [
        {
          amount: 2,
          name: 'eggs, lightly beaten',
          note: `The binder that holds the topping to the base and browns into the crust. Without egg the toppings scatter off the disc the moment it puffs — the egg is the glue, the colour and the structure.`,
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'mỡ hành (scallion oil): scallion greens scalded in hot oil',
          note: `Or 2 scallions thinly sliced, stirred raw into the egg batter — less fragrant but workable. The scallion's green and its allium bite are part of the flavour fingerprint.`,
        },
        {
          amount: 60,
          unit: 'g',
          name: 'white sesame seeds, lightly toasted',
          note: `Toasted just enough to start browning — they will toast further on the coals. Over-toasted in advance means burnt on the cracker.`,
        },
        {
          amount: 60,
          unit: 'g',
          name: 'roasted peanuts, coarsely crushed',
          note: `Crushed, not ground — visible halves and quarters that crunch under the tooth. The peanut is the fat, the substance and the protein in the topping.`,
        },
        {
          amount: 30,
          unit: 'g',
          name: 'dried shrimp, pounded coarse (or tôm chấy shrimp floss)',
          note: `The savoury depth. Dried shrimp gives crunch; floss gives a finer, more integrated savouriness. Either is traditional; the dried-shrimp version is the stall standard.`,
        },
        { amount: 1, unit: 'tsp', name: 'chili flakes (ớt bột)', note: `A light scatter — warmth, not fire. The cracker is a snack, not a dare.` },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'Equipment',
      items: [
        {
          amount: 1,
          name: 'charcoal fire with glowing embers, no flame',
          note: `The real result. A gas stove with a wide rack works at reduced ambition. An oven at 200°C fan for 8-10 minutes is the distant-third substitute — it bakes rather than puffs, and the result is flatter and harder without the blistered charcoal character.`,
        },
      ],
    },
  ],
  steps: [
    {
      title: 'Mix the topping batter — thick enough to spread, thin enough to coat',
      description: `Beat the eggs with the oil, scallion oil, sugar and salt until uniform. Stir in the sesame, crushed peanuts, pounded shrimp and chili flakes. The batter should be thick, studded and just pourable — like a heavily loaded pancake batter.

Taste a small spoonful, fried on a spoon tip over the flame as a test chip: it should be savoury, nutty, faintly sweet, with the shrimp arriving late and the chili warming the finish. Adjust salt, sugar or chili now — once it is on the rice paper and over the fire, correction is impossible.

The batter thickens as it sits because the starch in the peanuts absorbs moisture; stir again before each sheet.`,
      tip: `Every component in the topping is already cooked or shelf-stable (toasted sesame, roasted peanuts, dried shrimp) — the egg is the only raw ingredient, and it sets in under a minute over embers. This means the grilling is short, purely cosmetic and structural: it sets the egg, bonds the topping to the base, puffs the rice paper and toasts everything one shade deeper. If any component were raw — raw peanuts, uncooked shrimp — the grilling time would have to double, and the rice paper would scorch before the topping cooked. Pre-cooking every component individually is the stall's founding decision, and it is what lets a sheet go from raw to finished in three minutes of fire.`,
    },
    {
      title: 'Spread thin and even — the coat must reach every edge',
      description: `Lay a dry rice paper sheet on a clean surface. Spoon a quarter of the batter onto it and spread with the back of the spoon in quick, light strokes — outward from the centre to every edge, as thin and even as you can manage, covering the full surface. Leave no bare patches; leave no thick pools.

The coat should be about 1-2 mm thick — visible, but the rice paper should still show through faintly in the thinnest spots.

Do not press hard or you will crack the dry rice paper before it ever reaches the fire. Light, fast, spoon-back strokes, like icing a cake rather than plastering a wall. Dress all four sheets before the fire calls.`,
      tip: `Evenness is the entire grilling insurance. A thick pool of egg-batter over the coals sets slowly, traps steam beneath it and blows a hole in the rice paper; a thin, even coat sets almost instantly and lets steam from the puffing base escape through it uniformly. Meanwhile, bare patches mean rice paper with no topping, which over charcoal simply scorches to black carbon in seconds. The spread is the skill — identical in logic to the ladle-swirl of a bánh xèo batter and the even layer of a bánh mướt sheet: the first ten seconds of work dictate the rest.`,
    },
    {
      title: 'Grill over embers — 3 minutes total, topping-side up first',
      description: `Burn your charcoal to glowing embers, no flame. Hold the dressed sheet horizontally over the coals — topping-side up — at 15-20 cm, supported on a wide rack or gripped at the edges with tongs and a confident friend.

Stage one (topping up, 90 seconds): the rice paper base heats from below, puffs in patches, and begins to stiffen. The topping's egg sets from the radiant heat and reflected warmth, turning from wet-glossy to matte and firm.

Stage two (flip, topping down, 60-90 seconds): carefully flip the sheet topping-side-down toward the coals. Now the peanuts, sesame and shrimp face the heat directly and toast to a deeper gold, while the rice-paper side gets its final puff from above. Turn constantly — quarter-rotations every few seconds — to prevent any spot from scorching.

Done: the whole sheet is rigid, golden-brown on the topping side, pale-blistered on the rice-paper side, and gives a resonant crack when tapped with a knuckle. It should feel light, hollow-sounding and smell of a Thai beach snack bar run by a genius.

Cool one minute on a rack. Do not cool on a flat surface — trapped steam softens the underside, exactly as it softens every cracker and every fried thing in this collection that was laid flat too soon.`,
      tip: `The two-stage grill is the same two-face logic as the Hà Tĩnh bánh đa vừng: rice-paper side to the heat first, to puff and set the base while the topping is still cool enough to stay in place; then flipped, so the topping faces the heat briefly for its own Maillard finish. Reverse the order — topping down first — and the egg sets onto the grill rack instead of onto the rice paper, the peanuts burn before the base puffs, and the sheet comes apart at the moment you try to flip it. Order matters, as it always does with a layered food over live fire.`,
    },
    {
      title: 'Break by hand, eat by the shard — and carry the rest home',
      description: `Set the cooled sheet on a board or hold it up and snap it: the crack should be loud, clean and deeply satisfying — the whole table should hear it. Break into irregular shards the size of a hand, pile them, and eat.

No plate is needed and no dip is expected. The cracker is complete — salt, sweet, savoury, nutty, toasted, with a chili whisper — and it is designed to be eaten as-is, standing, sitting, walking, or in the passenger seat. With beer it becomes a mồi nhậu. With tea it becomes a snack. With muối tôm for double-dipping it becomes a regional loyalty test.

Stored in an airtight bag with a desiccant sachet, the sheets keep a week. Stored uncovered in a Tây Ninh kitchen, they last until the next person walks past the counter — which, empirically, is about twenty minutes.`,
      tip: `End with the sound, because the sound is the product. A good bánh tráng mè cracks with a snap that carries across a room — a clean, high, percussive fracture that tells you the rice paper puffed fully (hollow interior, maximum brittleness) and the topping bonded completely (no delamination, no soft patches). A muffled thud means somewhere in the three minutes of fire, something went wrong: the base did not puff (too far from the coals, too little residual moisture), or the topping is still soft (too far, too briefly), or the sheet absorbed humidity on the way to the table. The Tây Ninh stalls test each sheet with a flick of the finger before handing it over, and the sound is the quality certificate. If it does not crack, it does not sell. A cuisine that can identify quality by ear is one that has been making the same thing for long enough that every sense has been recruited. Listen to the cracker. It is telling you whether you got it right.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
