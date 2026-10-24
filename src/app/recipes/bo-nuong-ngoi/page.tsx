'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bo-nuong-ngoi',
  title: `Bò Nướng Ngói (Beef Grilled on Roof Tiles — Sóc Trăng Style)`,
  subtitle: `Thin-sliced beef — marinated in lemongrass, garlic and sesame oil — grilled not on a grate but on a ROOF TILE: a curved, terracotta, clay tile taken from the same kiln that fires the Delta's house roofs, heated over charcoal until the clay radiates an even, mineral-scented, stone-oven heat that sears the beef with no sticking, no flare-up, and no metallic taste. The Mekong Delta's most inventive grilling surface and the proof that the Vietnamese kitchen will cook on anything the landscape provides.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '45 min + marination',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/bo-nuong-ngoi.jpg',
  intro: `Bò nướng ngói — literally "beef grilled on tile" (ngói = the curved terracotta roof tile used throughout the Mekong Delta's and the south's traditional architecture) — is a preparation that turns a BUILDING MATERIAL into a COOKING SURFACE. The ngói tile is: terracotta (fired clay, the same material flower pots, water jars and the mắm nhum's fermentation crocks are made from), curved (the traditional half-cylinder shape of the Vietnamese-Chinese roof tile, roughly 25 x 15 cm), unglazed (the raw, porous, fired-clay surface — no coating, no enamel), and FOOD-SAFE (terracotta fired at 900-1,100°C is chemically inert, contains no toxic metals at leachable concentrations, and has been used as a cooking surface in every clay-pot tradition worldwide for millennia).

The tile's advantages as a grilling surface are SPECIFIC and cannot be replicated by a metal grate, a cast-iron pan or a flat stone:

THERMAL MASS: the terracotta tile (roughly 1.5-2 cm thick, 800-1,200 g) stores a large amount of thermal energy relative to its size — its specific heat capacity (roughly 0.84 J/g·°C, comparable to stone and concrete) means it takes 10-15 minutes to heat fully, but once hot (250-300°C surface temperature), it maintains its temperature even when cold food is placed on it. The cold beef slice drops the tile's surface temperature by only 10-15°C (vs a thin metal grate that drops 50-80°C), and the tile's stored energy re-heats the contact surface within seconds. The tile is a THERMAL BATTERY — slow to charge, slow to discharge, and the slow discharge is the even, steady, non-fluctuating heat that produces a uniform Maillard crust without hot spots.

LOW THERMAL CONDUCTIVITY: terracotta's thermal conductivity (0.6-1.0 W/m·K) is roughly 50-100x LOWER than cast iron's (50 W/m·K) and 200-400x lower than aluminium's (205 W/m·K). This means the heat transfers to the beef SLOWLY — the surface sears without the interior over-cooking, because the tile delivers heat at a rate the beef's myosin-denaturation can match. A cast-iron pan's high conductivity delivers heat FASTER than the thin beef slice can conduct it away from the contact surface, producing a surface that chars while the interior is still raw. The tile's slow delivery produces a surface that browns EVENLY while the interior warms GENTLY to the target medium-rare.

NON-STICK (natural): the unglazed terracotta surface is POROUS — microscopic pores (5-50 μm) across the tile's surface. When oil is applied and heated, the oil fills the pores and polymerises (forms a thin, heat-stable, non-stick polymer layer — the same seasoning process a cast-iron pan undergoes, here on a clay surface). The seasoned tile releases beef as cleanly as a well-seasoned cast-iron pan, with NO metallic taste transfer (the terracotta is chemically inert; the cast iron is not — cast iron leaches trace iron into acidic foods, which some palates detect as metallic).

MINERAL AROMA: the heated terracotta emits a faint, warm, earthy, MINERAL AROMA that no metal cooking surface produces — the smell of heated clay, of sun-baked earth, of the kiln. The aroma transfers to the beef's seared surface through direct contact, and the beef that comes off the tile carries a faint, background, terroir-like earthiness that beef from a metal grate does not. The tile's mineral aroma is the dish's SIGNATURE — it is the smell that tells the nose "this was grilled on clay" before the tongue confirms it.

The Sóc Trăng version of bò nướng ngói is distinguished from other Delta versions by its DIPPING SYSTEM: the grilled beef is wrapped in rice paper with herbs and dipped in muối tiêu chanh — the eighth appearance of salt-pepper-lime in this collection — AND a second dip of mắm nêm (the central coast's fermented anchovy, adopted by the southern Khmer-Vietnamese community as a grilled-meat condiment). The two dips are offered SIMULTANEOUSLY, and the eater alternates: one roll in the muối tiêu chanh (clean, citrus-sharp, pepper-warm), the next roll in the mắm nêm (funky, sweet-sour, pungent). The alternation is the meal's rhythm — clean, funky, clean, funky — and the rhythm prevents either dip from fatiguing the palate.`,
  ingredientSections: [
    {
      title: 'The beef',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'beef sirloin or flank, sliced 2-3 mm thin against the grain',
          note: `Thin — thinner than the bò một nắng's 5-7 mm, because the tile's lower conductivity needs thinner slices to achieve the same sear-to-interior ratio in the same time. 2-3 mm = 60-90 seconds per side on the tile = Maillard crust + medium-rare interior.`,
        },
      ],
    },
    {
      title: 'The marinade',
      items: [
        { amount: 2, name: 'stalks lemongrass, minced fine' },
        { amount: 4, name: 'cloves garlic, minced' },
        { amount: 2, name: 'shallots, minced' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'sesame oil', note: `The aromatic fat — sesame oil's sesamol and sesamin contribute a warm, nutty, toasted aroma that harmonises with the tile's earthy mineral note (both are "warm" aromatics — earth and nut — and their combination is rounder than either alone).` },
        { amount: 1, unit: 'tbsp', name: 'honey' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
        { amount: 1, unit: 'tsp', name: 'toasted sesame seeds' },
      ],
    },
    {
      title: 'The tile',
      items: [
        {
          amount: 1,
          name: 'terracotta roof tile (ngói), unglazed, 25 x 15 cm, washed and dried',
          note: `New tiles: wash thoroughly, soak in water 1 hour (to purge any kiln-dust from the pores), dry completely, then season with oil before first use (brush with oil, heat over charcoal 15 min, cool, repeat once — the oil polymerises in the pores, creating the non-stick surface). Used tiles (from a roof or a previous cooking session): wash, dry, re-oil. If no tile: a terracotta saucer (unglazed, food-safe), a pizza stone cut to size, or a flat piece of soapstone works with the same thermal principles.`,
        },
        { amount: 1, name: 'charcoal brazier or portable gas stove (the tile sits on top)' },
      ],
    },
    {
      title: 'The double dip',
      items: [
        { amount: 2, unit: 'tbsp', name: 'muối tiêu chanh: salt + black pepper + lime juice (the 8th appearance)' },
        { amount: 3, unit: 'tbsp', name: 'mắm nêm pha: mắm nêm + sugar + lime + chili + garlic + pineapple' },
      ],
    },
    {
      title: 'For wrapping',
      items: [
        { amount: 20, name: 'sheets of bánh tráng (rice paper), dampened' },
        { amount: 200, unit: 'g', name: 'rau sống: lettuce, húng quế, rau răm, tía tô, kinh giới' },
        { amount: 100, unit: 'g', name: 'cucumber, in batons' },
        { amount: 100, unit: 'g', name: 'green banana, sliced, in lime water' },
        { amount: 100, unit: 'g', name: 'star fruit, sliced' },
        { amount: 50, unit: 'g', name: 'pickled carrots and daikon' },
      ],
    },
  ],
  steps: [
    {
      title: 'Marinate the beef 30 min, heat the tile 15 min — the clay charges',
      description: `Toss the sliced beef with the lemongrass, garlic, shallot, fish sauce, sesame oil, honey, neutral oil, pepper and sesame seeds. Marinate 30 minutes — the thin slices absorb the marinade quickly (the 2-3 mm thickness means the lemongrass's citral and the garlic's allicin penetrate to the centre within 15 minutes).

SET THE TILE on the charcoal brazier (or over a gas burner's medium-high flame). The tile sits directly on the coals or on the burner's grate — the heat enters the tile from below and conducts upward through the 1.5-2 cm of terracotta.

HEAT 10-15 minutes — the tile absorbs heat slowly (the low thermal conductivity means the surface heats last, after the bottom has charged). Test: flick a drop of water onto the tile's surface — at the target temperature (250-300°C), the water drop dances and evaporates in 2-3 seconds (the Leidenfrost effect — the drop hovers on a cushion of its own steam, skittering across the surface). Below 200°C: the drop sits and sizzles without dancing. Above 350°C: the drop evaporates instantly without dancing (too hot — the Maillard will cross into charring territory).

Brush the hot tile with a thin film of oil — the oil smokes briefly, fills the pores, and the tile's surface is READY: hot, non-stick, mineral-scented, and glowing with stored thermal energy.`,
      tip: `The terracotta tile's POROUS surface (pore size 5-50 μm, porosity 15-25% by volume) is the non-stick mechanism's physical basis: the pores act as MICRO-RESERVOIRS that hold a thin layer of oil below the cooking surface. During grilling, the beef's surface contacts the tile's raised ridges (the clay between the pores), while the pore-trapped oil fills the valleys — the beef sits on a MIXED SURFACE of solid clay (heat transfer) and liquid oil (lubrication), and the lubrication prevents adhesion. A smooth, non-porous surface (glass, polished metal) cannot trap oil this way — the oil runs off or evaporates, and the food sticks. The tile's roughness is its non-stick advantage, and the roughness is inherent to terracotta's fired-clay microstructure. The building material's defect (porosity, which makes a roof tile slightly permeable to rain) is the cooking surface's feature.`,
    },
    {
      title: 'Grill on the tile — 60-90 seconds per side, the clay sears without sticking',
      description: `Lay the marinated beef slices on the hot, oiled tile — the slices sizzle on contact (the tile's 250-300°C surface dehydrates the beef's outermost layer immediately), and the kitchen fills with: the Maillard aroma (the beef's amino acids + the marinade's honey + the sesame oil's sesamol, all reacting at the hot surface), the lemongrass's citral (volatilised by the heat, entering the air), and — underneath everything — the tile's MINERAL AROMA (warm, earthy, clay-kiln, a background note that no metal pan produces).

GRILL 60-90 seconds per side — do NOT move the slices during the first 60 seconds (moving disrupts the Maillard crust's formation and tears the crust from the beef's surface, leaving the crust on the tile and the beef bare). At 60 seconds: the underside has formed a thin, dark-golden, lemongrass-sesame-honey Maillard crust. Flip with chopsticks — the beef releases cleanly from the seasoned tile (if it sticks: the tile was not hot enough, or the oil was insufficient — wait 15 more seconds and try again).

SECOND SIDE: 60 seconds. The beef is done — 2-3 mm slices at 250°C tile surface reach medium-rare (55-58°C internal) in 90-120 seconds total.

The grilled slice should be: DARK-GOLDEN on both surfaces (the Maillard + the honey's caramelisation + the sesame oil's browning), PINK in the centre (the 2-3 mm slice's interior stays below the myoglobin-denaturing threshold if the cooking time is correct), and carrying the tile's MINERAL NOTE — a faint, warm, earthy, stone-oven quality on the seared surface that the tongue registers as "this was not grilled on metal."

The tile maintains its temperature across 15-20 slices without needing re-heating — the thermal battery's slow discharge means the 10th slice sears as evenly as the 1st (on a metal grate, the 10th slice would sear faster, because the metal has lost less stored energy per slice — but the metal's temperature fluctuates more, producing less consistent results). The tile's consistency is its virtue, and the consistency is the thermal mass's gift.`,
      tip: `The tile's mineral aroma — the faint, warm, earthy note the heated clay emits and transfers to the beef — is produced by the thermal decomposition of trace organic matter trapped in the terracotta's pore structure during the kiln-firing process. At 250-300°C (the grilling temperature), these residual organics (principally humic and fulvic acids from the clay's original soil-source) undergo slow pyrolysis, producing volatile compounds (furfural, maltol, guaiacol) that are the same class of compounds smoke and charcoal produce — but at MUCH lower concentration, producing a SUBTLE, BACKGROUND earthiness rather than an aggressive smokiness. The tile imparts TERROIR — the literal soil-origin of the clay, expressed as a faint aroma on the beef's seared surface. The beef grilled on a Sóc Trăng tile tastes, faintly, of Sóc Trăng's soil. Change the clay, change the terroir.`,
    },
    {
      title: 'Wrap in rice paper, double-dip — the clean-funky alternation',
      description: `Set the grilled beef slices on a plate — hot, glistening, sesame-studded, the tile's mineral note still rising from their dark-golden surfaces.

WRAP: dampen a rice paper sheet. Lay lettuce, herbs, cucumber, green banana and star fruit on the lower third. Add 1-2 grilled beef slices. Roll — the same gỏi-cuốn format the collection has documented across 8+ wrapping recipes: fold bottom, tuck sides, roll forward. The roll is: translucent rice paper (chewy) → lettuce (cool-crisp) → herbs (aromatic) → beef (warm, seared, mineral-earthy, sesame-nutty).

THE DOUBLE DIP — the meal's rhythm engine:

ROLL 1: dip in muối tiêu chanh. Bite — the lime's citric acid brightens the beef's seared surface, the pepper's piperine warms the tongue, the salt amplifies the Maillard's glutamate. The mouthful is: CLEAN — no fermentation, no funk, just acid + salt + pepper + beef. The tongue resets to a high, bright, citrus-washed register.

ROLL 2: dip in mắm nêm. Bite — the fermented anchovy paste's funk floods the mouth (the dimethyl trisulfide, the trimethylamine, the short-chain fatty acids — the full fermented-fish volatile suite), the sugar rounds the funk, the pineapple's bromelain softens it, and the chili's capsaicin heats. The mouthful is: FUNKY — deep, fermented, umami-dense, the opposite of the previous roll's clean brightness.

ROLL 3: back to muối tiêu chanh. The clean-citrus register returns — the tongue, still carrying the mắm nêm's residual funk, perceives the lime's acid as BRIGHTER by contrast (the same contrast-enhancement the bánh mướt's three-dip alternation demonstrated — each dip tastes more vivid after the preceding dip's different flavour profile).

The alternation continues — clean, funky, clean, funky — and each cycle SHARPENS the contrast: the clean rolls taste cleaner, the funky rolls taste funkier, and the escalation is the double-dip's purpose: to prevent EITHER dip from fatiguing the palate (a single-dip meal's flavour fades by roll 5; the double-dip's alternation keeps both flavours vivid through roll 15).

Bò nướng ngói is the Sóc Trăng collection's most MATERIAL-INNOVATIVE recipe — the recipe whose distinction is not a spice, not a fermentation, not a wrapping, but a COOKING SURFACE: the terracotta roof tile, the building material repurposed as a thermal battery, a non-stick platform, and a terroir-transmitter. The tile is the Vietnamese kitchen's statement that the right cooking surface can be found on the roof, and the best sear can come from the same clay the house is built from.`,
      tip: `Muối tiêu chanh's EIGHTH appearance (gà Hồ, ghẹ, tôm chiên, gà đồi, lợn cắp nách, gà luộc, bò lúc lắc, and now bò nướng ngói) makes it the collection's most RECURRING condiment — more frequent than mắm nêm (7 appearances), more frequent than mỡ hành (6 appearances), and approaching the universality of nước mắm itself. The salt-pepper-lime trio's dominance is explained by its CHEMICAL COMPLETENESS: salt activates the ENaC sodium channels (salty taste), pepper's piperine activates TRPV1 (warmth), and lime's citric acid activates the PKD2L1 sour receptor — three receptor systems, three simple ingredients, three taste dimensions in one dip. No other three-ingredient condiment covers as many receptor types. The trio is a MINIMAL COMPLETE CONDIMENT — the fewest ingredients that activate the most taste receptors — and its minimality is the reason every Vietnamese kitchen has it: salt is always available, pepper is always available, lime is always available, and the combination is always sufficient.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
