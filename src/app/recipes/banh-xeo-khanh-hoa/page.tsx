'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-xeo-khanh-hoa',
  title: `Bánh Xèo Khánh Hòa (Central-Style Mini Crispy Pancakes — Nha Trang's Sizzle)`,
  subtitle: `Bánh xèo — but SMALL: 12-15 cm diameter, crispy as a chip, golden-yellow from turmeric, filled with a single shrimp and a handful of bean sprouts, folded in half and served 3-4 per plate. The central coast's miniaturised version of the south's dinner-plate-sized bánh xèo, engineered for MAXIMUM CRUNCH per bite by reducing the size, thinning the batter and increasing the heat until the entire pancake is CRUST — no soft centre, no steamed interior, just shattering starch-glass from edge to edge.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '45 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/banh-xeo-khanh-hoa.jpg',
  intro: `The collection documented the bánh xèo concept in the Bình Định set (bánh xèo Bình Định — the central version with mắm nêm dipping), but the Khánh Hòa version is DISTINCT enough to warrant its own page, because the Khánh Hòa bánh xèo solves a DIFFERENT ENGINEERING PROBLEM than the southern version, and the solution is SIZE.

THE PROBLEM: the southern bánh xèo (Saigon, Mekong Delta) is LARGE — 25-30 cm diameter, 2-3 mm thick, folded over a mountain of bean sprouts, pork and shrimp, and the eating requires: tearing (the pancake is too big to eat whole), wrapping (each torn piece goes into a lettuce-herb wrap), and accepting that the CENTRE of the large pancake is SOFT (the batter at the centre, insulated from the pan's edge by the outer ring of crust, steams rather than fries — the centre's moisture does not evaporate fast enough, and the result is: crispy edge, soft centre, a dual-texture the south considers correct but the central coast considers a DEFICIENCY).

THE SOLUTION: make the pancake SMALL. The Khánh Hòa (and broader central coast) bánh xèo is: 12-15 cm diameter (half the south's), 1-1.5 mm thick (thinner than the south's 2-3 mm), and cooked at HIGHER HEAT (the small pan — a flat-bottomed, thin-steel, 15 cm wok or a cast-iron mini-pan — heats faster and more evenly than the south's large pan). The small diameter means: EVERY POINT on the pancake is within 6-7 cm of the pan's edge, and the pan's heat reaches every point within 30-60 seconds, and EVERY POINT dehydrates to starch-glass before any point reaches the steaming-threshold. The result: a pancake that is CRISPY THROUGHOUT — no soft centre, no steamed interior, 100% crust from edge to edge.

The CRUNCH PHYSICS: the starch-glass transition (the same transition the xôi phồng, the bánh cống, the kẹo cu đơ all documented) requires: dehydration of the starch's surface moisture to below roughly 10% (at which point the gelatinised starch's glass-transition temperature drops below room temperature, and the starch vitrifies to a rigid, brittle, shattering glass). In the LARGE southern bánh xèo: the edge dehydrates to <10% moisture (crispy) but the centre stays at 30-40% moisture (soft) because the heat does not reach the centre fast enough. In the SMALL central bánh xèo: the ENTIRE pancake dehydrates to <10% moisture, because the small diameter ensures the pan's heat reaches every point within the 2-3 minute cooking time. The size reduction converts the pancake from a DUAL-TEXTURE food (crispy edge + soft centre) to a MONO-TEXTURE food (crispy everywhere), and the mono-texture is the central coast's preference: ALL CRUNCH, NO SOFT.

The BATTER is deliberately THINNER than the south's: rice flour + water + coconut milk + turmeric at a ratio that produces a VERY thin pour (the thinnest the pan can hold without breaking into droplets — roughly 0.8-1.2 mm when poured). The thin pour dehydrates FASTER (less water to evaporate per square centimetre), and the faster dehydration means the starch-glass forms SOONER, and the pancake can be removed from the pan EARLIER (2-2.5 minutes vs the south's 3-4 minutes), producing a pancake that is: crispier (more completely dehydrated), LESS OILY (shorter frying time = less oil absorption — the starch-glass that forms early SEALS the surface and blocks oil penetration after the first 60 seconds), and LIGHTER (thinner = less mass = the pancake feels like a large potato chip rather than a folded crêpe).

The FILLING is MINIMAL — one shrimp (whole, shell-on tail segment), a small handful of bean sprouts, and sometimes a slice of pork or squid. The filling-to-crust ratio is roughly 1:2 (more crust than filling — the opposite of the south's 2:1 ratio), and the CRUST is the star, the filling is the punctuation.`,
  ingredientSections: [
    {
      title: 'The batter',
      items: [
        { amount: 200, unit: 'g', name: 'rice flour' },
        { amount: 30, unit: 'g', name: 'cornstarch or tapioca starch', note: `For extra crispiness — the cornstarch's amylose produces a CRISPIER starch-glass than the rice flour's amylopectin alone (amylose forms a tighter, more rigid network upon dehydration, producing a harder, more shatter-prone glass).` },
        { amount: 350, unit: 'ml', name: 'water' },
        { amount: 100, unit: 'ml', name: 'coconut milk' },
        { amount: 1, unit: 'tsp', name: 'ground turmeric' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 2, name: 'scallions, sliced very thin' },
      ],
    },
    {
      title: 'The filling (per pancake)',
      items: [
        { amount: 16, name: 'shrimp, shell-on tail segment (1 per pancake)' },
        { amount: 200, unit: 'g', name: 'bean sprouts (a small handful per pancake)' },
        { amount: 100, unit: 'g', name: 'pork belly, sliced thin (optional — 1 slice per pancake)' },
      ],
    },
    {
      title: 'For frying',
      items: [
        { amount: 100, unit: 'ml', name: 'neutral oil (2-3 tsp per pancake — MORE oil than the south uses, because the central version fries rather than steams the batter)' },
        { amount: 1, name: 'small flat-bottomed pan, 15 cm diameter (or a mini-wok)', note: `SMALL — the pan's size IS the recipe. A 25 cm pan makes a southern-style pancake. A 15 cm pan makes a central-style pancake. The pan determines the texture.` },
      ],
    },
    {
      title: 'For wrapping and dipping',
      items: [
        { amount: 200, unit: 'g', name: 'lettuce leaves' },
        { amount: 100, unit: 'g', name: 'herbs: húng quế, tía tô, rau răm, kinh giới' },
        { amount: 100, unit: 'g', name: 'green banana, sliced' },
        { amount: 100, unit: 'g', name: 'star fruit, sliced' },
        { amount: 4, unit: 'tbsp', name: 'nước mắm ớt (central coast fish sauce with chili — thinner and less sweet than the south\'s nước mắm ngọt)', note: `The central coast's dipping preference: MORE FISH SAUCE, LESS SUGAR than the south's sweet-heavy nước mắm ngọt. The central palate wants the mắm's savouriness to dominate, not the sugar's sweetness.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Heat the small pan screaming hot, pour thin, fill fast, fold at 2 minutes — the crunch cycle',
      description: `REST the batter 30 minutes (hydration).

HEAT the 15 cm pan over HIGH heat — the pan must be SCREAMING HOT (230-250°C surface temperature — hotter than the south's 180-200°C, because the central version's goal is IMMEDIATE dehydration from the first millisecond of contact). The high heat is the key: at 230°C+, the batter's bottom layer dehydrates to starch-glass in 15-20 seconds (vs 45-60 seconds at the south's 180°C), and the early glass-formation SEALS the bottom surface, preventing oil absorption and creating the base-crunch that the rest of the cooking will extend upward through the pancake's full 1 mm thickness.

ADD OIL: 2-3 tsp per pancake — MORE than the south's 1-2 tsp, because the central version FRIES rather than PAN-COOKS (the oil's depth should be roughly 2 mm — enough for the batter to float slightly on the oil's surface, producing a contact-fried bottom AND an oil-splash-fried top). The oil sizzles immediately — the temperature is above the oil's smoke point briefly, and the tiny smoke-wisps are normal and expected.

THE SIZZLE: pour 40-50 ml of batter into the screaming-hot oiled pan — THE SIZZLE is the dish's name (xèo = the onomatopoeia of the batter hitting the hot oil, the sound that announces the dish to the street). The batter spreads to the pan's edges in 2 seconds (the thin batter, the small pan, the gravity — the 15 cm circle is filled before the batter can set). The scallion slices in the batter are visible as green dots in the yellow-turmeric liquid.

ADD THE FILLING — IMMEDIATELY, within 3 seconds of the pour (the batter is still liquid on top for 10-15 seconds, and the filling must be placed BEFORE the top surface sets): lay one shrimp on one half of the batter circle, add a small handful of bean sprouts on the same half, add one pork slice if using. The filling occupies ONE HALF — the other half is bare batter (the bare half will become the fold-over lid).

COOK 2-2.5 MINUTES (no lid — the central version does NOT use a lid, because a lid would trap steam and MOISTEN the top surface, preventing the all-over-crunch the central version demands. The south's large version uses a lid because the thick centre needs steam to cook through; the central's thin version needs no steam because the thin batter cooks through by conducted heat alone in 2 minutes):

MINUTE 0-0.5: the bottom CRISPS — the starch-glass forms on the oil-contact surface. The batter is still liquid on top.

MINUTE 0.5-1: the MIDDLE sets — the batter's full 1 mm thickness gelatinises from bottom to top (the heat conducts upward through the thin layer in 30-45 seconds). The top surface begins to dry.

MINUTE 1-2: the TOP DEHYDRATES — with no lid trapping moisture, the top surface loses its residual water to evaporation, and the starch-glass extends from the bottom (already vitrified) through the middle (now dehydrating) to the top (approaching the <10% moisture threshold). By minute 2: the ENTIRE pancake is at or near starch-glass consistency.

FOLD: with a spatula, fold the bare half OVER the filling half — the fold produces a half-moon shape (the same geometry the bánh tai documented, here from a folded pancake rather than a folded dumpling). The fold's edges: the two crispy layers press together and bond slightly (the residual surface starch acts as a heat-activated glue — the same starch-adhesion the bánh tai's hot-water dough exploited).

LIFT: slide the folded pancake onto a plate. The pancake is: GOLDEN-YELLOW (the turmeric), CRISPY (tap it — it sounds hollow and brittle, like tapping a cracker), THIN (the folded pancake is roughly 3 mm total — two 1 mm layers of crust sandwiching the filling), and LIGHT (the thin, dehydrated, mostly-air pancake weighs roughly 40-50 g — lighter than a comparable volume of any other food in the collection except the xôi phồng).

Repeat — 3-4 pancakes per serving (the small size means each person eats MULTIPLE pancakes, and the multiple-eating is the format's SOCIAL DYNAMIC: the cook makes them ONE AT A TIME, each one taking 2.5 minutes, and the eaters eat them as they arrive — hot, fresh, 30 seconds old, the crispiness at its peak. The eating is SEQUENTIAL-AND-CONTINUOUS rather than BATCH-AND-WAIT — the eater finishes one pancake, and the next one arrives from the pan, and the arrival IS the meal's rhythm).`,
      tip: `The SIZE→TEXTURE relationship (smaller pancake = crispier pancake) is a consequence of HEAT-TRANSFER GEOMETRY: in a circular pan, the heat enters from the BOTTOM (the oil-contact surface) and must travel RADIALLY to reach the centre from the edge. The maximum distance the heat must travel = the pancake's RADIUS (half the diameter). In the central version: radius = 6-7 cm, and the heat reaches the centre in roughly 45-60 seconds at 230°C. In the southern version: radius = 12-15 cm, and the heat reaches the centre in roughly 2-3 minutes at 180°C. The FOUR-FOLD increase in heat-travel-time (45 sec vs 180 sec) means the southern pancake's centre spends 2+ minutes at intermediate moisture (30-40%) — too wet for starch-glass, too dry for liquid — and the result is the SOFT CENTRE. The central pancake's centre spends only 15-30 seconds at intermediate moisture before reaching the starch-glass zone. The size IS the crunch. Smaller = crunchier. The central coast discovered this by making the pan smaller, and the physics confirmed it 500 years later.`,
    },
    {
      title: 'Wrap in lettuce and herbs, dip in mắm ớt — the central coast crunch format',
      description: `THE PLATE: 3-4 folded half-moon pancakes, golden-yellow, crispy, stacked loosely (stacking too tightly traps steam between the pancakes and softens their surfaces — the 2-3 mm gap between each pancake allows air circulation that preserves the crunch for 3-4 minutes).

Alongside: the lettuce leaves, the herb jungle (4+ species), the green banana slices (turgor-astringent), the star fruit (sour-crisp), and the nước mắm ớt in a saucer (thinner, fishier, less sweet than the south's).

WRAP: lay a lettuce leaf on the palm. Place one folded bánh xèo on the leaf (the pancake fits ENTIRELY within the lettuce leaf — the small size is the wrapping's enabler; the south's large pancake must be torn to fit). Add herbs, a green banana slice, a star fruit slice. Wrap loosely — the lettuce cradles the pancake, the herbs fill the gaps, and the wrap is: green outside, golden-crispy inside, the pancake's crunch PROTECTED by the lettuce's cushion (the lettuce, being 95% water, absorbs the ambient moisture that would otherwise soften the pancake's surface — the lettuce is a HUMIDITY SHIELD as well as a wrapper).

DIP in nước mắm ớt — the thin, fish-sauce-forward, chili-hot, barely-sweet central coast dip. The sauce enters the wrap's open end and contacts the pancake's crispy surface — the sauce and the crunch are ADVERSARIES (the sauce's water will soften the starch-glass in 60-90 seconds, and the crunch's survival depends on EATING FAST — another timed window, here measured in the seconds between dip and bite).

BITE: the lettuce tears (cool, watery, the neutral cradle), then the pancake SHATTERS — the starch-glass crust, now at full <10% moisture, CRACKING under the tooth at 3-5 Newtons, the shatter audible (the central version's crunch is LOUDER than the south's, because the central's all-over-crust has no soft centre to dampen the sound — the sound wave from the crunch propagates through the rigid, continuous, glass-phase pancake without absorption, while the south's soft centre DAMPENS the crunch-sound from the crispy edge). The shrimp SNAPS (the myosin-gel fracture, 3-4 N, the shrimp's body breaking with a crisp, clean, sea-flavoured snap). The bean sprouts CRUNCH (turgor, 1-2 N, the raw mung-bean sprouts' water-filled cells fracturing between the teeth). Three CRUNCH EVENTS in one bite: starch-glass (3-5 N, shattering) + myosin-gel (3-4 N, snapping) + turgor (1-2 N, popping) — THREE DIFFERENT CRUNCH MECHANISMS at THREE DIFFERENT FORCE-THRESHOLDS, experienced SEQUENTIALLY as the tooth descends through the layered wrap.

The star fruit's OXALIC ACID arrives at second 2 — sour, sharp, astringent, cutting through the oil-fried crust's richness. The green banana's TANNIN arrives at second 3 — puckering, drying, the astringency that RESETS the mouth's fat-coating from the fried pancake. The herbs' AROMATICS arrive at second 4 — húng quế's linalool, rau răm's dodecanal, kinh giới's menthol-adjacent compound — the aromatic cleanse after the crunch-sour-astringent sequence.

Bánh xèo Khánh Hòa is the collection's crunchiest PANCAKE — crunchier than the south's (which has a soft centre), crunchier than the Bình Định's (which uses a slightly thicker batter), and demonstrating the SIZE→CRUNCH principle the central coast discovered empirically: make it smaller, make it thinner, cook it hotter, skip the lid, and the entire pancake becomes what the south's large version achieves only at its edge: pure, uninterrupted, 100% starch-glass crunch, from fold to fold, edge to edge, the sizzle made solid.`,
      tip: `The THREE SIMULTANEOUS CRUNCH MECHANISMS in one bite (starch-glass + myosin-gel + turgor) at three different force-thresholds (5 N + 4 N + 2 N) produce a COMPOUND CRUNCH that the mouth processes as a RICH, COMPLEX, MULTI-LAYERED TEXTURE EVENT — the same principle the cháo lươn Bình Định's triple-crunch and the bánh cống's dual-crunch documented, here at the widest force-range (2-5 N, a 2.5x spread). The brain's somatosensory cortex processes each crunch-event at a DIFFERENT neural latency (the higher-force events register first, the lower-force events register 10-20 milliseconds later), and the sequential registration creates the perception of TEXTURAL DEPTH — the same way a musical chord's notes, arriving at slightly different times, create the perception of harmonic richness. The central bánh xèo's triple-crunch is a TEXTURE CHORD, and the chord is richer than any single crunch-note.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
