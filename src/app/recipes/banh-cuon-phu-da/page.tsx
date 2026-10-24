'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-cuon-phu-da',
  title: `Bánh Cuốn Phú Đa (Steamed Rice Rolls — Vĩnh Phúc's Paper-Thin Sheets)`,
  subtitle: `A ladleful of rice-flour batter — poured onto a cloth stretched taut over a pot of boiling water — steams in 30 seconds to a translucent, paper-thin, silk-smooth sheet that the cook peels off with a bamboo stick and fills with a spoonful of seasoned pork and wood-ear mushroom. Rolled, cut, stacked on a plate and served hot with chả lụa, hành phi, rau thơm and a clear, light nước chấm. The northern breakfast that is measured not in grams but in SECONDS — 30 seconds from batter to sheet, 10 seconds from sheet to roll, and 5 minutes from plate to empty.`,
  category: 'APPETIZER',
  difficulty: 'Hard',
  totalTime: '1 hr',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/banh-cuon-phu-da.jpg',
  intro: `Bánh cuốn — literally "rolled cake" — is the northern Vietnamese kitchen's most TECHNICALLY DEMANDING breakfast: a preparation whose success depends on the cook's ability to pour a PRECISELY THIN layer of rice-flour batter onto a fabric-covered steaming pot and peel the resulting sheet off in ONE PIECE, without tearing, without wrinkling, without any hesitation that would allow the sheet to over-cook and stick. The cook who makes bánh cuốn has trained for YEARS — the hand-speed, the pour-angle, the peel-timing are muscle memory that no recipe can teach, only practice can build.

Phú Đa — a village in Vĩnh Tường district, Vĩnh Phúc province, roughly 50 km northwest of Hà Nội — is one of the northern Delta's most respected bánh cuốn villages, alongside the more famous Thanh Trì (Hà Nội's southern district, which produces the Hà Nội-standard bánh cuốn). The Phú Đa version is distinguished by: THINNER sheets (the Phú Đa cook pours a thinner batter layer, producing sheets roughly 0.3-0.5 mm thick — vs Thanh Trì's 0.5-0.8 mm), MORE TRANSLUCENT (the thinner sheet gelatinises more completely in the 30-second steaming, producing a sheet that is almost see-through — the filling is visible THROUGH the sheet, the pork's pink and the mushroom's black showing through the translucent white wrapper), and served with a LIGHTER nước chấm (less sugar, less garlic than the Hà Nội version — the Vĩnh Phúc palate prefers the fish sauce's own flavour to dominate, and the lighter dressing lets the sheet's delicate rice-flour flavour come through).

The PHYSICS of the sheet: the batter (rice flour + water, roughly 1:2 ratio, producing a THIN, freely flowing liquid with the viscosity of heavy cream) is poured onto a cloth (cotton or muslin, stretched taut over a pot of boiling water and secured with a string around the pot's rim). The boiling water below produces STEAM that passes through the cloth's weave and hits the batter's underside. The steam's heat (100°C) gelatinises the rice starch from the BOTTOM UP: the batter's underside (touching the cloth, closest to the steam) gelatinises first (in 5-10 seconds), and the gelatinisation front moves upward through the 0.3-0.5 mm layer, reaching the top surface in 25-30 seconds. The sheet is done when: the ENTIRE thickness has gelatinised (the top surface is no longer liquid but set to a smooth, translucent, slightly glossy gel), the edges pull away from the cloth slightly (the gelatinised starch contracts as it sets, lifting the sheet's edges from the cloth — the signal that the sheet is self-supporting and ready to peel).

The PEEL is the most critical moment: the cook slides a thin bamboo stick (or a chopstick, or a flat bamboo spatula — the tool varies by village) under the sheet's edge and LIFTS — the entire sheet must come off the cloth in ONE motion, ONE piece, without tearing (the gelatinised sheet is fragile — it is 0.3-0.5 mm of hydrated starch gel with almost no structural strength, and ANY hesitation or uneven lifting tears it). The peel takes 2-3 seconds. A torn sheet is a failed sheet — it goes to the discard pile (or into the cook's own breakfast), and the next ladleful goes on the cloth immediately. The Phú Đa cook produces 200-300 sheets per morning, and the failure rate for a trained cook is roughly 3-5% (6-15 torn sheets per morning — each one a 30-second loss).

The filling is SIMPLE — the northern philosophy of "the wrapper is the star, the filling is the support": ground pork (seasoned with fish sauce, pepper and a trace of shallot), wood-ear mushroom (mộc nhĩ, soaked and diced — the CRUNCH inside the soft wrapper), and nothing else. No shrimp, no crab, no elaborate multi-component stuffing — the filling is a SPOONFUL, not a feast, and its job is to provide the savoury-meaty-crunchy counterpoint the plain rice sheet needs without overwhelming the sheet's delicate flavour.

The dipping sauce — nước chấm — is the CLEAR, LIGHT, NORTHERN version: fish sauce + water + a little sugar + lime + sliced chili + (optionally) a few drops of cà cuống essence (the giant water bug's pheromone, the most famously northern condiment addition, now rare and expensive, used only in premium bánh cuốn — the cà cuống's single drop transforms the nước chấm's aroma from "fish sauce" to "fish sauce + something floral-fruity-exotic that you cannot identify but cannot forget").`,
  ingredientSections: [
    {
      title: 'The batter',
      items: [
        { amount: 200, unit: 'g', name: 'rice flour (bột gạo tẻ)', note: `Regular (non-glutinous) rice flour — the tẻ starch produces a FIRM, NON-STICKY gel when steamed (glutinous rice flour would produce a sticky, stretchy, mochi-like gel that tears when peeled). The flour must be FINELY ground — coarse flour produces a grainy sheet.` },
        { amount: 30, unit: 'g', name: 'tapioca starch', note: `For elasticity — the tapioca's amylopectin network adds a slight stretch that pure rice flour lacks, reducing the tear-rate during peeling. The tapioca is the INSURANCE — it gives the sheet enough flexibility to survive the peel's mechanical stress.` },
        { amount: 400, unit: 'ml', name: 'water' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil', note: `Mixed into the batter — the oil coats the starch granules and prevents the sheet from sticking to the cloth (the oil's hydrophobic film between the starch and the cloth's cellulose acts as a release agent, the same function the pre-heated mould's oil served in the bánh cống).` },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The filling',
      items: [
        { amount: 200, unit: 'g', name: 'ground pork' },
        { amount: 30, unit: 'g', name: 'wood-ear mushroom (mộc nhĩ), soaked 20 min, diced fine', note: `The CRUNCH — the wood-ear's sclerenchyma-based crunch (the same fibre-wall crunch the banana blossom documented) provides the textural contrast the soft, yielding bánh cuốn sheet demands. Without the wood-ear, the mouthful is: soft wrapper + soft filling = monotexture. With the wood-ear: soft wrapper + soft filling + CRUNCHY mushroom dice = the minimum textural complexity the northern palate requires.` },
        { amount: 2, name: 'shallots, minced' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (for cooking the filling)' },
      ],
    },
    {
      title: 'The steaming setup',
      items: [
        { amount: 1, name: 'wide pot of boiling water (30-35 cm diameter)' },
        { amount: 1, name: 'cotton or muslin cloth, stretched taut over the pot, secured with string', note: `The cloth must be: TAUT (no sagging — a sagging cloth pools the batter in the centre, producing a thick-centred, thin-edged sheet that cooks unevenly), WET (dip in water before the first pour — a dry cloth absorbs the batter and the sheet sticks), and CLEAN (any residue from a previous sheet will cause the next sheet to stick).` },
        { amount: 1, name: 'thin bamboo stick or flat bamboo spatula (for peeling)' },
        { amount: 1, name: 'lid that fits the pot (placed over the cloth during steaming — the lid traps the steam and accelerates the gelatinisation from 45 seconds to 30 seconds)' },
      ],
    },
    {
      title: 'Accompaniments',
      items: [
        { amount: 200, unit: 'g', name: 'chả lụa, sliced thin', note: `The northern bánh cuốn's FIXED companion — the myosin-gel sausage's springy-bounce beside the sheet's soft-yield = the textural pairing the north considers essential.` },
        { amount: 2, unit: 'tbsp', name: 'hành phi (fried shallots)' },
        { amount: 30, unit: 'g', name: 'rau mùi (cilantro)' },
        { amount: 30, unit: 'g', name: 'húng lủi (spearmint — the northern herb, absent from southern bánh cuốn)' },
      ],
    },
    {
      title: 'Nước chấm (northern-style, light)',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 100, unit: 'ml', name: 'warm water' },
        { amount: 1, unit: 'tbsp', name: 'sugar (LESS than the southern version — the northern nước chấm is less sweet)' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, name: 'cloves garlic, minced' },
        { amount: 1, name: 'red chili, sliced' },
        { amount: 1, name: 'drop of cà cuống essence (optional — the water-bug pheromone)', note: `The rarest condiment in the Vietnamese kitchen — extracted from the thoracic gland of the giant water bug (Lethocerus indicus), the insect produces a pheromone (trans-2-hexenyl butyrate and related esters) that the Vietnamese nose reads as floral-fruity-pear-like and that transforms the nước chấm's aroma profile from one-dimensional (fish sauce) to three-dimensional (fish sauce + something fruity + something floral that the brain cannot name but the nose cannot forget). One drop per 100 ml of nước chấm is sufficient. Synthetic cà cuống essence exists and is more commonly available; the natural extraction is expensive and rare.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Cook the filling, mix the batter, set up the steamer — the 3-station kitchen',
      description: `FILLING: heat oil in a pan. Sauté the minced shallot 1 minute until fragrant. Add the ground pork — break apart with a spatula, cook 3-4 minutes until no pink remains. Add the diced wood-ear mushroom — stir 1 minute. Season with fish sauce and pepper. The filling should be: DRY (no liquid pooling — a wet filling makes the sheet soggy and causes it to tear when rolled), FINE (no large pork lumps — the filling must distribute thinly across the sheet's surface in a 2-3 mm layer), and SAVOURY (the fish sauce's glutamate, the shallot's sweetness, the pepper's warmth — a simple, unambitious, sheet-supporting flavour). Set aside and keep warm.

BATTER: whisk the rice flour, tapioca starch, water, oil and salt until SMOOTH — no lumps (a lump in the batter produces a thick spot on the sheet that cooks at a different rate from the surrounding thin batter, and the thick spot tears during peeling). The batter should be: thin (the consistency of heavy cream — thinner than the bánh xèo's batter, thinner than the bánh cống's batter, the thinnest batter in the collection), smooth (no granularity — the flour must be fully hydrated), and flowing (it should pour from the ladle in a continuous, thin stream without breaking).

Rest the batter 15 minutes — the rest allows the flour to fully hydrate (the starch granules absorb water and swell, producing a more uniform gelatinisation during steaming) and any air bubbles to rise and pop (an air bubble in the batter produces a hole in the sheet, and a hole tears during peeling).

STEAMER: bring the pot of water to a vigorous boil. Stretch the cloth taut over the pot's mouth — pull from 4 directions, tie with string around the pot's rim. The cloth should be: DRUM-TIGHT (tap it — it should sound like a drum, not sag under the finger's weight). Brush the cloth with a thin film of oil (the first-sheet insurance — the same pre-oiling the bánh cống's mould required).`,
      tip: `The cloth's WEAVE determines the sheet's texture: a TIGHT weave (high thread-count cotton, muslin) produces a SMOOTH-bottomed sheet (the steam passes through the small gaps between threads, and the sheet's underside mirrors the cloth's smooth surface). A LOOSE weave (cheesecloth, loose cotton) produces a TEXTURED-bottomed sheet (the batter dips into the larger gaps between threads, and the sheet's underside carries a grid-pattern imprint from the cloth's weave). The Phú Đa tradition prefers the TIGHT weave — the smooth sheet is the signature, and the smooth surface reflects light (the glossy, mirror-like sheen of a well-made Phú Đa bánh cuốn is the cook's pride and the village's brand).`,
    },
    {
      title: 'Pour, steam 30 sec, peel, fill, roll — the 45-second cycle, 200 times',
      description: `THE CYCLE (repeated 200-300 times per morning by the Phú Đa cook, here scaled to 20-30 sheets for a home batch):

POUR: ladle roughly 50-60 ml of batter onto the taut, oiled cloth. IMMEDIATELY tilt the pot (or swirl the ladle) to spread the batter in a THIN, EVEN layer across the cloth's surface — the batter must cover a roughly 25 cm circle in 0.3-0.5 mm thickness. The pour takes 3-4 seconds. The window is TIGHT: pour too slowly and the batter's edge begins to set before the centre is spread (producing an uneven-thickness sheet); pour too fast and the batter pools in one spot (producing a thick lump).

COVER: place the lid over the cloth immediately — the lid traps the steam, creating a PRESSURE-ENHANCED steaming environment that accelerates the gelatinisation from 45 seconds (uncovered) to 30 seconds (covered). The steam's 100°C, now concentrated under the lid, hits the batter's entire top surface simultaneously, and the sheet gelatinises from BOTH SIDES (bottom: through the cloth's conducted steam; top: from the lid-trapped steam hitting the batter's upper surface).

STEAM 30 SECONDS: the batter transforms — LIQUID (translucent-white, flowing) → GEL (translucent-white, set, firm enough to peel, 0.3-0.5 mm thick). The sheet is done when: the surface is no longer glossy-wet but MATTE-DRY (the surface moisture has evaporated into the lid-trapped steam), the edges have pulled away from the cloth slightly (the contraction signal), and the sheet is UNIFORMLY TRANSLUCENT (no opaque-white spots, which indicate under-gelatinised areas that will tear).

PEEL: remove the lid. Slide the bamboo stick under the sheet's edge — the near edge, closest to the cook. LIFT in one smooth motion — the sheet peels off the cloth as a single piece, draping over the bamboo stick like a translucent curtain. Transfer to an oiled plate or board — the sheet lies flat, 0.3-0.5 mm of gelatinised, translucent, silk-smooth, steaming-hot rice gel.

FILL: spoon 1 tablespoon of the cooked filling along the sheet's lower third — a thin, even line of pork-and-mushroom, 2 cm from the edge.

ROLL: fold the lower edge over the filling. Roll forward — ONE turn produces a cylindrical roll roughly 3 cm in diameter, the filling visible through the translucent wrapper (the pork's pink-brown and the mushroom's black showing through the white-translucent gel). Cut the roll from the remaining sheet with a knife or scissors. The remaining sheet gets another spoonful and another roll — each large sheet produces 2-3 rolls.

Set the rolls on the serving plate — seam-side DOWN, parallel, the rolls touching (the touching prevents the delicate sheets from drying and cracking on the exposed surface). Continue the cycle: pour, cover, steam, peel, fill, roll. The rhythm is: 30 seconds steaming + 15 seconds peeling-and-rolling = 45 seconds per sheet, and the Phú Đa cook does not pause between sheets — the next ladleful goes on the cloth within 5 seconds of the previous sheet's removal, and the rhythm continues for 2-3 hours, and the rhythm IS the morning.

SERVE HOT: the bánh cuốn must be served within 10 minutes of rolling — the sheet begins to dry and stiffen as its surface moisture evaporates (the same hygroscopic-softening-in-reverse the xôi phồng suffered, here the LOSS of moisture stiffens the gel rather than softening it — the starch retrogrades as it cools and dries, and the retrograded sheet is: opaque-white, stiff, cracked at the edges, and lacking the fresh sheet's silk-smooth, translucent, yielding softness). The 10-minute window is the bánh cuốn's freshness-requirement, and the requirement is the reason the Phú Đa bánh cuốn cannot be made in advance, cannot be shipped, cannot be reheated (reheating partially re-gelatinises the retrograded starch but cannot restore the fresh sheet's texture) — it must be made AND eaten in the same 10-minute window, and the window is the reason you must GO TO THE COOK rather than have the cook come to you.

THE PLATE: 6-8 rolls, parallel, translucent-white, steaming. Sliced chả lụa alongside (the myosin-bounce beside the starch-softness). Hành phi scattered over (golden, oil-crisp, the aromatic garnish). Rau mùi and húng lủi on the side (the northern herbs — the spearmint IS the northern signal; southern bánh cuốn uses rau răm instead).

NƯỚC CHẤM in a saucer — the clear, light, fish-sauce-forward northern dipping sauce (if cà cuống is available: ONE DROP transforms the saucer's aroma into something the nose reads as "this is NOT ordinary fish sauce" without being able to name the addition — the cà cuống's pheromone esters are detected by the olfactory epithelium at concentrations as low as 0.1 ppb, making it one of the most potent food-aroma compounds in any cuisine, and the single drop in 100 ml of sauce is roughly 1-5 ppb — above threshold, below identification, and the mystery is the luxury).

DIP a roll in the nước chấm — the thin sauce penetrates the translucent wrapper instantly (the wrapper's 0.3 mm thickness has no resistance to liquid — the sauce soaks THROUGH the wrapper to the filling inside in 2-3 seconds, and the roll becomes a SAUCE-SATURATED package that delivers fish-sauce-flavour FROM INSIDE as well as from the dipping surface).

BITE: the wrapper YIELDS — no crunch, no crackle, no resistance, just: soft, smooth, silk-textured, dissolving-on-the-tongue starch-gel that the tooth passes through without effort. The filling arrives: savoury-pork, pepper-warm, and the wood-ear's CRUNCH (the single crunch-event in the mouthful — the sclerenchyma-fibre dice, 2-3 mm, providing 3-5 Newtons of resistance in a mouthful that otherwise offers zero resistance. The crunch is the PUNCTUATION in a sentence of softness).

Bánh cuốn Phú Đa is the Vĩnh Phúc collection's most SKILL-DEPENDENT recipe — the recipe whose quality is determined not by the ingredients (which are simple — rice flour, pork, mushroom, fish sauce) but by the COOK'S HANDS: the pour-speed, the peel-timing, the roll-dexterity, and the rhythm that sustains 200 sheets per morning without a break. The skill IS the dish, and the dish IS the village's identity, and the village's identity is a 0.3 mm sheet of rice gel that took 30 seconds to make and a lifetime to master.`,
      tip: `The cà cuống (Lethocerus indicus, giant water bug) pheromone — trans-2-hexenyl butyrate — is one of the food world's most POTENT aroma compounds: its olfactory detection threshold is roughly 0.1-0.5 ppb (parts per billion), meaning the human nose can detect ONE MOLECULE of cà cuống pheromone among roughly 2-10 BILLION molecules of air. For comparison: vanilla's vanillin has a threshold of roughly 20-200 ppb (40-2,000x higher), and the mắm bò hóc's dimethyl trisulfide has a threshold of roughly 0.01 ppb (10x lower — dimethyl trisulfide is even more potent, but it is perceived as "funky" while the cà cuống is perceived as "floral-fruity"). The cà cuống's potency means a SINGLE DROP (roughly 0.05 ml, containing roughly 0.5-5 μg of the pheromone) is sufficient to aromatise 100 ml of nước chấm — and the cook who adds more than one drop has over-dosed, producing a sauce that smells artificially fruity rather than mysteriously enhanced. The one-drop precision is the cà cuống's discipline: the luxury is in the restraint.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
