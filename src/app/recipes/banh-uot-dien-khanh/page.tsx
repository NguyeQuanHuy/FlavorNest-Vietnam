'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-uot-dien-khanh',
  title: `Bánh Ướt Diên Khánh (Wet Rice Sheets with Grilled Meat — Diên Khánh Style)`,
  subtitle: `Bánh ướt — "wet cake," the steamed rice sheet served FLAT, UNFILLED and UNROLLED, stacked in soft, translucent, slippery layers on a plate — eaten by tearing a sheet, wrapping it around a piece of thịt nướng (grilled pork), dipping in mắm nêm, and biting through the soft-silk wrapper to the charred-sweet meat inside. The central coast's answer to the north's bánh cuốn: same sheet, different philosophy — the north FILLS and ROLLS; the central coast serves FLAT and lets the eater build.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-uot-dien-khanh.jpg',
  intro: `Diên Khánh — the old citadel district of Khánh Hòa, 10 km west of Nha Trang, built around a Vauban-style fortress the Nguyễn lords constructed in 1793 — is known for a single breakfast preparation: bánh ướt, the wet rice sheet served as a PLATFORM rather than as a wrapper. The Diên Khánh bánh ướt is: the SAME steamed rice-flour sheet the bánh cuốn Phú Đa documented (same batter, same cloth-over-steam method, same 30-second steaming, same peel-with-bamboo-stick technique), but served in a COMPLETELY DIFFERENT FORMAT:

THE BÁNH CUỐN (northern, Phú Đa): the sheet is steamed → FILLED (with pork + mushroom) → ROLLED (into a cylinder) → CUT → served as a finished, sealed, self-contained unit. The cook does ALL the assembly. The eater receives a COMPLETED product.

THE BÁNH ƯỚT (central, Diên Khánh): the sheet is steamed → STACKED flat on a plate (5-8 sheets per serving, layered, oiled between layers to prevent sticking) → served ALONGSIDE the separately prepared toppings (grilled pork, chả, herbs). The eater does ALL the assembly — tearing, wrapping, dipping. The cook provides COMPONENTS. The eater builds the BITE.

The difference is not technical (the sheet is identical) but PHILOSOPHICAL: the bánh cuốn is CHEF-ASSEMBLED (the cook controls the filling-to-wrapper ratio, the roll's tightness, the presentation); the bánh ướt is EATER-ASSEMBLED (the eater controls how much meat per sheet, how many herbs, how tight the wrap, how deep the dip). The bánh ướt gives the eater MORE AGENCY — each bite is built to the eater's specification, and no two bites are the same, and the variation IS the format.

The Diên Khánh version pairs the flat sheets with THỊT NƯỚNG — charcoal-grilled pork (not the bánh cuốn's stir-fried ground pork, which is a filling designed to stay INSIDE a sealed roll). The grilled pork is: sliced, charred, caramelised, carrying the lemongrass-garlic-sugar-fish-sauce crust that every southern-and-central grilled-pork in the collection has deployed. The grilled pork is BIGGER, BOLDER, MORE ASSERTIVE than the bánh cuốn's mild filling — the grilled pork is a STAR, not a support, and the flat sheet is the STAGE the star performs on.

The dip is MẮM NÊM — the central coast's fermented anchovy paste (the same mắm nêm the bò nướng lá lốt documented), diluted with sugar, lime, garlic, chili and pineapple. The mắm nêm's funk + the grilled pork's char + the sheet's neutral-silk = the Diên Khánh's specific three-register bite: FUNKY + CHARRED + SOFT.

The accompaniment that distinguishes the Diên Khánh version from other central-coast bánh ướt: RÁM — a thin, CRISPY, deep-fried rice cracker made from the same rice-flour batter as the bánh ướt, poured into hot oil instead of onto the steaming cloth. The rám is: golden, crispy, shattering — the same batter's FRIED version, served alongside the same batter's STEAMED version. The eater receives BOTH: the soft sheet (steamed) AND the crispy cracker (fried), from the SAME BATTER, and the contrast between the two is the Diên Khánh format's signature: same dough, two fates — one was steamed and became silk, one was fried and became glass. The eater wraps the grilled meat in the soft sheet AND crumbles a piece of the crispy rám into the wrap for crunch, and the wrap contains: soft (sheet) + crispy (rám) + charred (pork) + funky (mắm nêm) = FOUR TEXTURES AND TWO FLAVOURS from THREE PREPARATIONS of ONE BATTER plus one grilled protein.`,
  ingredientSections: [
    {
      title: 'The bánh ướt sheets (same batter as bánh cuốn)',
      items: [
        { amount: 200, unit: 'g', name: 'rice flour (bột gạo tẻ)' },
        { amount: 30, unit: 'g', name: 'tapioca starch' },
        { amount: 400, unit: 'ml', name: 'water' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'Rám (fried rice cracker — same batter, different fate)',
      items: [
        { amount: 100, unit: 'ml', name: 'reserved batter from above' },
        { amount: 200, unit: 'ml', name: 'neutral oil for shallow-frying' },
      ],
    },
    {
      title: 'Thịt nướng (grilled pork)',
      items: [
        { amount: 400, unit: 'g', name: 'pork shoulder or leg, sliced 5 mm thick' },
        { amount: 2, name: 'stalks lemongrass, minced' },
        { amount: 3, name: 'cloves garlic, minced' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tbsp', name: 'honey' },
        { amount: 0.5, unit: 'tsp', name: 'five-spice powder' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'Mắm nêm pha (fermented anchovy dip)',
      items: [
        { amount: 3, unit: 'tbsp', name: 'mắm nêm' },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, name: 'garlic cloves, minced' },
        { amount: 2, name: 'chilies, minced' },
        { amount: 50, unit: 'g', name: 'pineapple, diced fine' },
        { amount: 50, unit: 'ml', name: 'water' },
      ],
    },
    {
      title: 'The table spread',
      items: [
        { amount: 200, unit: 'g', name: 'rau sống: lettuce, húng quế, tía tô, rau răm, kinh giới' },
        { amount: 100, unit: 'g', name: 'cucumber, sliced' },
        { amount: 100, unit: 'g', name: 'green banana, sliced' },
        { amount: 100, unit: 'g', name: 'bean sprouts, raw' },
        { amount: 2, unit: 'tbsp', name: 'hành phi (fried shallots)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Steam the sheets, fry the rám — same batter, two fates',
      description: `MIX the batter: rice flour + tapioca starch + water + oil + salt → smooth, thin, pourable (the same bánh cuốn consistency). Rest 30 minutes.

RESERVE 100 ml of the batter for the rám.

STEAM THE SHEETS: the same cloth-over-steam technique the bánh cuốn Phú Đa documented — pour 50-60 ml onto the oiled, taut cloth, lid on, 30 seconds, peel with bamboo stick. But HERE: the peeled sheet goes onto an OILED PLATE — flat, not rolled. Brush the sheet's surface with a thin layer of scallion oil or neutral oil (the oil prevents the NEXT sheet from sticking to it). Stack the next sheet on top. Continue — 5-8 sheets per serving, stacked flat, each one separated by a gossamer-thin oil film.

The stack: a pile of translucent, soft, slippery, barely-opaque, glistening sheets — each one 0.3-0.5 mm thick, each one oil-separated from its neighbours, the pile trembling slightly when the plate is moved (the sheets are so thin and so soft that the stack JIGGLES like a soft jelly — the jiggle is the visual that announces "bánh ướt" to the Diên Khánh breakfast table).

FRY THE RÁM: heat 200 ml oil in a small pan to 180°C. Pour a THIN layer of the reserved batter (30-40 ml) into the hot oil — the batter SIZZLES (the same "xèo" sizzle the bánh xèo documented, here in a DIFFERENT PAN for a different purpose). The batter spreads into a thin, irregular, lacy disc (the oil's heat dehydrates the batter IMMEDIATELY, the starch-glass forming in 15-20 seconds, the disc crisping to a golden, shatter-thin, cracker-like wafer). Fry 30-40 seconds until golden and rigid. Lift out. Drain on a rack.

The rám: golden, irregular, lacy (the oil's turbulence during frying produces an UNEVEN surface with thin spots and thick spots — the thin spots are translucent and ultra-crispy, the thick spots are golden and slightly more substantial, and the unevenness IS the rám's character). The rám SHATTERS when broken — the starch-glass fractures at 2-3 Newtons, producing thin, golden, oil-crisp shards that the eater crumbles into the bánh ướt wrap.

SAME BATTER. TWO FATES:
— Steamed (bánh ướt): soft, translucent, silk-textured, 0.3-0.5 mm, dissolving mouthfeel.
— Fried (rám): crispy, golden, glass-textured, shattering, 1-2 mm, crunching mouthfeel.

The two demonstrate the collection's MOST DIRECT COOKING-METHOD COMPARISON: the ONLY variable is the cooking method (steam vs fry). The batter is IDENTICAL. The thickness is similar. The only difference: steam (100°C, water-based, no dehydration above 60-70% moisture → soft gel) vs oil (180°C, fat-based, complete dehydration to <5% moisture → starch glass). The 80°C temperature difference and the water-vs-fat medium produce TWO COMPLETELY DIFFERENT MATERIALS from the same starting point. Cooking IS the material.`,
      tip: `The rám's LACY STRUCTURE (irregular holes, thin-thick variation) is produced by the same physics that creates the bánh xèo's crispy edge: when the thin batter hits the 180°C oil, the water in the batter flash-evaporates to steam, and the STEAM BUBBLES push through the still-liquid batter, creating HOLES. The holes' edges: the batter around each hole, pushed outward by the steam, thins to near-zero and dehydrates to starch-glass almost instantly (producing the ultra-crispy thin spots). The areas between holes: the batter is slightly thicker (the bubble-displacement pushed batter from the hole-sites to the inter-hole spaces), and these areas dehydrate more slowly, producing the golden, slightly-thicker, moderately-crispy zones. The lacy pattern is therefore a MAP of the steam-bubble distribution during the first 5 seconds of frying — each hole is a fossil of a steam-bubble, and the lace is the bubbles' record.`,
    },
    {
      title: 'Grill the pork, set the table, eat by assembly — the eater is the chef',
      description: `MARINATE the pork: toss with lemongrass, garlic, fish sauce, sugar, honey, five-spice, pepper and oil. Marinate 30 minutes minimum (or overnight).

GRILL over charcoal 4-5 minutes per side for 5 mm slices — the same lemongrass-honey-five-spice Maillard crust the cơm tấm's sườn and the nem nướng's surface documented. The pork should be: dark-crusted (the sugar-honey caramelisation), slightly charred at the edges (the charcoal's direct-radiant-heat spots), juicy inside (the 5 mm thickness cooks through to 68-72°C in 8-10 minutes without drying), and carrying the lemongrass-five-spice aromatic the central and southern grilling traditions share.

Slice the grilled pork into bite-sized pieces (2 x 3 cm — each piece sized to fit inside one torn sheet of bánh ướt with room for herbs).

SET THE TABLE — the Diên Khánh format:

CENTRE: the stack of bánh ướt sheets (the platform, soft, trembling, oiled)
BESIDE: the plate of grilled pork slices (the star, charred, aromatic)
BESIDE: the rám crackers (the crunch, golden, lacy, shattering)
BESIDE: the herb-and-vegetable spread (lettuce, 5 herb species, cucumber, green banana, bean sprouts)
CENTRE: the saucer of mắm nêm pha (the funk, the dip, the fermented-anchovy's sweet-sour-garlic-chili-pineapple sauce)

THE ASSEMBLY (the eater's job — each bite built fresh):

TEAR: peel one bánh ướt sheet from the stack (the oiled layers separate cleanly — the oil film is the non-stick that allows each sheet to be peeled from the pile without tearing the sheet below). The sheet drapes over the fingers — soft, translucent, warm (if recently steamed) or room-temperature (if the stack has cooled — the Diên Khánh format tolerates both; the sheet does not need to be hot to be good, because its texture is soft-at-any-temperature, unlike the bánh cuốn which must be served within 10 minutes).

FILL: lay the sheet on your palm or on a plate. Add: a piece of grilled pork (the charred star), a lettuce leaf (the cool base), herbs (húng quế, rau răm — the aromatic layer), cucumber (the cool-crunch), and — the Diên Khánh distinction — a SHARD OF RÁM (broken from the crispy cracker, 2-3 cm, golden, shattering — the crunch-insert that the flat bánh ướt format provides and the bánh cuốn format does not).

ROLL loosely — the sheet wraps around the fillings, the translucent wrapper showing the green herbs and the dark pork inside.

DIP in mắm nêm pha — the fermented anchovy's funk floods the wrap's open end, the sauce soaking through the thin sheet in 2-3 seconds (the same instant-sauce-penetration the bánh cuốn and the bánh tai documented — the thin rice-gel wrapper has zero barrier function against liquid).

BITE: the sheet tears (silk-soft, dissolving, the 0.3 mm gel offering zero resistance), the rám SHATTERS inside (the starch-glass crunch, 2-3 N, the golden shard fracturing between the teeth — the CRUNCH INSIDE THE SOFT, the collection's recurring theme: wood-ear in bánh cuốn, peanuts in gỏi, and now rám in bánh ướt — the crunch-punctuation in the soft-sentence), the grilled pork arrives (charred-sweet, lemongrass-five-spice, chewy-firm, the protein-star at the wrap's centre), and the mắm nêm's funk floods (the fermented anchovy's dimethyl trisulfide arriving at the retronasal olfactory as the bite's AROMATIC FINALE — the funk is the last flavour event, after the soft and the crunch and the char, and the funk is the central coast's sign-off: the flavour that says "this was not Hà Nội, this was not Saigon, this was the coast").

The rám-in-the-bánh-ướt trick is the Diên Khánh's SPECIFIC INVENTION — the idea of taking the same batter, cooking half of it to SILK and half of it to GLASS, and putting the glass INSIDE the silk to create a DUAL-TEXTURE WRAP from a SINGLE-INGREDIENT batter. The invention is: elegant (one ingredient, two preparations, two textures, one bite), efficient (no extra ingredient required — the crunch comes from the same flour the wrapper came from), and memorable (the eater who bites through the soft sheet and encounters the crispy rám inside experiences a SURPRISE-CRUNCH that the eye did not predict from the wrap's soft exterior — the element of textural surprise is the Diên Khánh's gift).`,
      tip: `The bánh ướt sheet's ROOM-TEMPERATURE STABILITY is its advantage over the bánh cuốn: the bánh cuốn must be served within 10 minutes (the sheet's surface retrogradation stiffens it if it cools), but the bánh ướt can be stacked and served over 30-60 minutes without significant texture loss. The difference: the bánh ướt's sheets are OILED between layers, and the oil serves two functions — it prevents sticking (the mechanical function) AND it prevents surface retrogradation (the chemical function: the oil film coats the sheet's exposed starch surface, blocking the atmospheric moisture loss that triggers retrogradation — the same oil-as-retrogradation-inhibitor principle the tấm's oil-in-cooking exploited). The oiled bánh ướt therefore stays SOFT and PLIABLE at room temperature for 30-60 minutes — the oil is the shelf-life extender, and the extended shelf-life is what makes the stacked-flat format POSSIBLE (the bánh cuốn format's rolled-and-serve-immediately requirement exists precisely because the un-oiled sheet retrogrades so fast).`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
