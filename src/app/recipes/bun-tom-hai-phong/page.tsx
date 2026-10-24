'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-tom-hai-phong',
  title: `Bún Tôm Hải Phòng (Shrimp Noodle Soup — Hải Phòng's Crispy-Battered Gulf Shrimp Bowl)`,
  subtitle: `Bún in a SHRIMP-SHELL broth — clear-gold, crustacean-sweet, built from the shells of the same Tonkin Gulf shrimp whose bodies are: BATTERED in a turmeric-rice-flour crust, deep-fried to shattering-golden, and placed ON TOP of the broth at the moment of serving — the crispy shrimp floating on the hot broth like golden islands, their crust softening in a 2-3 minute race the eater knows well. The bowl that uses EVERY PART of the shrimp: the shell makes the broth, the body makes the topping, and nothing is wasted between the two.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/bun-tom-hai-phong.jpg',
  intro: `Bún tôm is Hải Phòng's THIRD signature noodle (after the bánh đa cua and the bún cá cay) and it occupies the THIRD sensory-niche of the Hải Phòng noodle-triad: the bánh đa cua = UMAMI-RICH (crab-tomalley-thick, dense, generous), the bún cá cay = HOT (capsaicin-dominant, tomato-aggressive, fiery), and the bún tôm = SWEET-AND-CRUNCHY (shrimp-glycine-sweet, fried-batter-crunchy, the lightest and most ELEGANT of the three). The three soups together cover: the umami-spectrum (crab-deep → shrimp-sweet), the heat-spectrum (aggressive-hot → gentle-warm), and the texture-spectrum (thick-and-pulpy → crispy-on-clear), and the Hải Phòng local rotates through all three across the week.

The WHOLE-SHRIMP PHILOSOPHY: the bún tôm's specific innovation is: using the shrimp's SHELL for the broth and the shrimp's BODY for the topping — a ZERO-WASTE approach that the typical shrimp-noodle-soup does NOT follow (the typical approach: buy peeled shrimp, poach in the broth, discard the shells at the fishmonger's. The Hải Phòng approach: buy WHOLE shrimp, PEEL at home, simmer the SHELLS into broth, batter-fry the BODIES for the topping). The whole-shrimp approach produces: a BETTER BROTH (the shell's chitin, astaxanthin and residual-glycine dissolve into the broth during simmering, producing a shrimp-flavoured stock that the shell-less water-based-broth cannot match) and a BETTER TOPPING (the bodies, freshly peeled, are: more intact, more controlled in size, and batter-fried at the cook's chosen moment rather than poached to pre-determined tenderness).

The SHRIMP SHELL BROTH is the collection's most EFFICIENT use of a typically-discarded byproduct: the shell's composition is: 20-30% CHITIN (the N-acetylglucosamine polymer — the same exoskeletal-material the ốc hương's shell documented, here from a crustacean rather than a gastropod), 30-40% PROTEIN (principally the structural-protein that held the shell together in the living shrimp, plus residual-muscle-protein from the imperfect peeling), 10-20% CALCIUM CARBONATE (the mineral-fraction), and — crucially — ASTAXANTHIN (the carotenoid-pigment that was bound to the shell's crustacyanin protein in the living shrimp, and that the simmering's heat releases into the broth as the crustacyanin denatures). The shell-broth is therefore: PINK-GOLD (the astaxanthin tints the broth), SWEET (the shell's residual-glycine and the chitin's partial hydrolysis produce N-acetylglucosamine monomers that are: faintly sweet, the same sweetness the glucosamine-supplement industry markets as a joint-health-product), and AROMATIC (the shell's volatile compounds — dimethyl sulfide, trimethylamine at sub-threshold levels — produce the "ocean" aroma the water-based-broth does not carry).

The BATTERED SHRIMP is the bowl's TEXTURAL STAR: the peeled shrimp are: dusted in a TURMERIC-RICE-FLOUR batter (thin, not tempura-thick — a 1 mm coating that crisps to a shattering-golden shell without overwhelming the shrimp's body), and deep-fried at 180°C for 2-3 minutes. The fried shrimp is: GOLDEN-ORANGE (the turmeric's curcumin + the Maillard's melanoidins), SHATTERING (the rice-flour-batter's starch-glass, at 1 mm thickness, cracks at 2-3 N — a delicate crunch, thinner and lighter than the nem cua bể's double-wrapper but equally satisfying per-gram), and the shrimp inside: SNAPPING (the myosin-gel, set at 60-65°C during the frying, producing the same shrimp-snap the tôm Đầm Vạc and the lẩu hải sản documented — the C-curve, the firm-white-flesh, the glycine-sweet).

The CRUNCH-IN-BROTH dynamic is the bún tôm's eating-drama: the fried shrimp goes INTO the hot broth at the moment of serving, and the broth's heat + moisture begin ATTACKING the batter's starch-glass immediately — the same crunch-race the cơm cháy documented (the sauce-absorption softening the crisp), here from BROTH rather than from stir-fry-sauce. The bún tôm's crunch-race is: FASTER than the cơm cháy's (the broth is thinner and hotter than the cơm cháy's thickened stir-fry sauce — the broth penetrates the batter at roughly 2 mm/minute vs the sauce's 1 mm/minute), and the window is: 90-120 SECONDS (shorter than the cơm cháy's 2-3 minutes). The eater who picks up the fried shrimp FIRST (before the noodles, before the broth-sip, before the herbs) is: CORRECT — the shrimp is eaten AT PEAK CRUNCH, in the first 90 seconds, and the eater who waits until minute 3 receives: a soft, batter-soggy, crunch-less shrimp that is still delicious but texturally DIMINISHED.`,
  ingredientSections: [
    {
      title: 'The shrimp (whole — shells for broth, bodies for frying)',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'whole shrimp (tôm biển — sea shrimp, preferably medium-large, 20-30 per kg), shell-on, head-on',
          note: `WHOLE — the recipe uses EVERY PART: the heads + shells → broth; the bodies → battered and fried. Peel carefully: keep the heads and shells in one bowl (the broth-material), the peeled bodies in another (the frying-material). Leave the tail-segment's shell ON (the tail-shell becomes a HANDLE for the fried shrimp — the eater holds the crispy-battered body by the tail-shell, dips in broth, and bites everything except the tail-shell).`,
        },
      ],
    },
    {
      title: 'The shrimp-shell broth',
      items: [
        { amount: 1, unit: 'tbsp', name: 'neutral oil (for sautéing the shells)' },
        { amount: 1.5, unit: 'L', name: 'water' },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
        { amount: 1, name: 'shallot, halved and charred' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
      ],
    },
    {
      title: 'The turmeric batter',
      items: [
        { amount: 80, unit: 'g', name: 'rice flour' },
        { amount: 20, unit: 'g', name: 'cornstarch (the crunch-amplifier — the cornstarch's amylose produces a crispier glass than rice-flour alone)' },
        { amount: 120, unit: 'ml', name: 'ice-cold water (COLD — the cold batter + the hot oil = maximum temperature-differential = faster dehydration = crispier crust)' },
        { amount: 1, unit: 'tsp', name: 'ground turmeric' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 0.5, unit: 'tsp', name: 'baking powder (the micro-puff — produces tiny air-bubbles in the batter during frying, making the crust LIGHTER and more SHATTER-PRONE)' },
      ],
    },
    {
      title: 'For frying',
      items: [
        { amount: 500, unit: 'ml', name: 'neutral oil for deep-frying' },
      ],
    },
    {
      title: 'The bowl',
      items: [
        { amount: 400, unit: 'g', name: 'bún (rice vermicelli), blanched' },
        { amount: 200, unit: 'g', name: 'rau sống: lettuce, giá đỗ (bean sprouts), rau muống (blanched water spinach)' },
        { amount: 30, unit: 'g', name: 'hành lá (scallion), sliced' },
        { amount: 30, unit: 'g', name: 'thì là (dill), torn — the Hải Phòng fish/shrimp-soup herb' },
        { amount: 30, unit: 'g', name: 'rau mùi (cilantro)' },
        { amount: 2, unit: 'tbsp', name: 'hành phi' },
        { amount: 4, name: 'limes, wedges' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 2, unit: 'tbsp', name: 'ớt bằm (minced chili in oil — the Hải Phòng table-condiment)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Sauté the shells, simmer 30 min — the discarded becomes the broth',
      description: `PEEL the shrimp: remove the head (twist and pull — the head separates from the body at the cephalothorax-junction), then peel the body's shell segments (leave the TAIL-SHELL on each body — the tail is the handle). Collect ALL heads + shells in a bowl. The peeled bodies: set aside for battering.

SAUTÉ THE SHELLS: heat 1 tbsp oil in a large pot over MEDIUM-HIGH heat. Add the shrimp heads and shells — PRESS them against the pot's surface with a spatula and FRY 3-4 minutes, pressing and stirring. The sautéing produces:

THE HEAD'S TOMALLEY RELEASES: the shrimp-head's hepatopancreas (the same tomalley-organ the tôm Đầm Vạc and the lẩu hải sản documented) ruptures under the pressing, and the concentrated orange-green tomalley dissolves into the oil — the oil turns VIVID ORANGE (the astaxanthin from the tomalley's carotenoid-reserve, released by the heat into the oil-phase), and the oil carries: the tomalley's CONCENTRATED GLUTAMATE (300-500 mg/100g) and the tomalley's CONCENTRATED LIPID (the fat that coats the tongue in the head-sucking technique, here extracted into cooking-oil instead). The sautéed-head-oil is: the broth's FLAVOUR-CONCENTRATE — richer, more complex, more shrimp-intense than a simple shell-boil.

THE SHELLS' MAILLARD: the shell-fragments, pressed against the hot pot, undergo MAILLARD at their contact-points (the shell's residual-protein + the shell's residual-sugars → melanoidins + Maillard-volatiles at the 150-180°C contact-temperature). The Maillard'd shells contribute: a ROASTED, TOASTED, SHELL-SPECIFIC aroma that the un-sautéed, simply-boiled shell does not produce (the same sauté-before-deglaze-with-water technique the French bisque uses — the bisque's technique and the bún tôm's technique are: IDENTICAL, arrived at independently, the French chef and the Hải Phòng vendor using the same physics for the same reason: the sautéed shell makes a better broth than the boiled shell).

ADD WATER: pour 1.5 L water into the pot of sautéed shells. The water DEGLAZES the pot's bottom (the Maillard-fond, the dark-brown crust of caramelised shell-protein on the pot's surface, dissolves into the water — the deglazed-fond is: the broth's DARKEST, MOST CONCENTRATED flavour-component, the same deglazing the French chef performs with wine and the Vietnamese chef performs with water).

Add ginger and charred shallot. Bring to a boil. Simmer 25-30 minutes (the simmering extracts: the chitin's N-acetylglucosamine-sweetness, the shell's remaining protein, the head's remaining tomalley, and the astaxanthin — the broth darkens from pale-gold to PINK-GOLD as the astaxanthin dissolves).

STRAIN through a fine sieve — press the shells firmly (the last squeeze extracts the tomalley's final glutamate-dose). DISCARD the spent shells. The strained broth: PINK-GOLD (the astaxanthin), CLEAR (if well-skimmed — the shell-broth produces less scum than the bone-broth because the shell's protein-content is lower), SWEET (the glycine + the N-acetylglucosamine — a DUAL-SWEETNESS that the bone-broth's single-source-sweetness does not match), and carrying the SAUTÉED-SHELL AROMA (the Maillard'd-shell's toasted, roasted, bisque-like fragrance that elevates the broth from "shrimp-water" to "shrimp-STOCK" — the sautéing IS the elevation).

Season: fish sauce, salt, sugar.`,
      tip: `The SAUTÉ-BEFORE-SIMMER technique (frying the shells in oil before adding water) is the EXACT TECHNIQUE the French BISQUE uses — the French shellfish-soup's three steps (1. sauté shells in butter/oil, 2. deglaze with wine/water, 3. simmer 30+ minutes) are: identical to the bún tôm's three steps (1. sauté shells in oil, 2. deglaze with water, 3. simmer 25-30 minutes). The convergence is: CHEMICAL (both techniques exploit the same Maillard-on-shell + deglaze-to-extract principle), not cultural (the Hải Phòng vendor has never heard of bisque, and the French chef has never heard of bún tôm). The convergence demonstrates: when the RAW MATERIAL is the same (crustacean shells) and the GOAL is the same (maximum flavour extraction), the TECHNIQUE converges across cultures. The shell dictates the method.`,
    },
    {
      title: 'Batter and fry the shrimp, assemble — the 90-second crunch-race begins',
      description: `THE BATTER: whisk rice flour + cornstarch + turmeric + salt + baking powder in a bowl. Add ICE-COLD water — whisk just until combined (do NOT over-mix — over-mixing develops the rice-flour's trace-gluten and produces a TOUGH, CHEWY batter; the target is: LUMPY, under-mixed, with visible flour-streaks. The lumps are: NOT a defect — the lumps create THIN SPOTS and THICK SPOTS in the batter-coating, and the thin spots crisp FASTER and the thick spots crisp SLOWER, producing a VARIED CRUNCH-TEXTURE across the shrimp's surface: some areas ultra-crispy-thin, some areas moderately-crispy-thick, the variation IS the texture's interest). The ice-cold water is: the CRUNCH-INSURANCE (the cold batter creates a MAXIMUM temperature-differential when it enters the 180°C oil — the 160-170°C difference produces: faster water-evaporation, faster starch-dehydration, faster starch-glass-formation, and a CRISPIER final crust than a room-temperature batter would produce).

FRY: heat 500 ml oil to 180°C. HOLD each peeled shrimp by its tail-shell. DIP in the batter (the batter coats the body in a 1-1.5 mm layer; the tail-shell remains un-battered — the shell is the HANDLE, and the batter ends where the handle begins). LOWER into the oil — one shrimp at a time for the first 3-4 (to prevent the shrimp from sticking together before the batter sets), then 4-5 at a time once the technique is established.

FRY 2-3 minutes: the batter's water flash-evaporates (the sizzle), the starch gelatinises-then-dehydrates-to-glass (the same starch-glass-transition the collection has documented 30+ times), the turmeric's curcumin tints the crust GOLDEN-ORANGE, the baking-powder's CO₂ creates MICRO-BUBBLES in the crust (each bubble is: a 0.2-0.5 mm air-pocket that, when the batter dehydrates, becomes a HOLLOW in the starch-glass, and the hollow reduces the crust's density and increases its BRITTLENESS — the micro-puffed crust shatters at LOWER FORCE than a solid crust, producing a crunch that is: lighter, more delicate, more AIRY than the non-baking-powder version). The shrimp inside: the myosin gels at 60-65°C in the oil's first 60 seconds (the same C-curve-and-snap), and the batter-shell SEALS the shrimp's surface (the starch-glass blocks moisture-loss → the shrimp inside the crust is: JUICIER than the un-battered fried shrimp, retaining 85-90% of its raw-moisture vs the naked-fried shrimp's 70-75%).

LIFT OUT. Drain. The fried shrimp: GOLDEN-ORANGE (the turmeric-Maillard), LIGHT (the micro-bubble crust weighs roughly 3-5 g per shrimp — barely perceptible), SHATTERING (tap a fried shrimp — it sounds hollow and crispy; the batter-shell is: rigid enough to hold the shrimp's C-curve shape without flexing), and BEAUTIFUL (the golden-battered body with the pink-orange tail-shell protruding — the colour-contrast of gold-batter against pink-shell is the bún tôm's plating-visual).

ASSEMBLE: blanched bún in bowls. Add blanched rau muống, raw bean sprouts. LADLE the hot shrimp-shell-broth (the pink-gold, sweet, bisque-like liquid). Scatter scallion, dill (the Hải Phòng herb — the same dill the bún cá Nha Trang and the bún cá cay documented), cilantro, hành phi.

PLACE THE FRIED SHRIMP — LAST: lay 3-4 golden-battered shrimp ON TOP of the broth. The shrimp float (the batter's micro-bubble-air-pockets make the fried shrimp BUOYANT — the shrimp floats like a golden boat on the pink-gold broth-sea, the tail-shell pointing upward like a mast). The moment the shrimp touches the broth: THE CLOCK STARTS.

THE 90-SECOND CRUNCH-RACE:

SECOND 0-30: the batter's underside (the surface contacting the broth) absorbs broth — the starch-glass rehydrates from <5% moisture to 20-30%, transitioning from glass→rubber (the same glass-transition-in-reverse every crunch-race has documented). The TOP of the batter: still dry, still crunchy, still golden (the broth hasn't reached the top yet). THE EATER: should pick up a shrimp NOW — hold by the tail, bite the battered body. The bite: TOP = CRUNCH (the dry-batter starch-glass, shattering at 2-3 N, the golden fragments spraying), BOTTOM = SOFT-CHEWY (the broth-soaked batter, dense, flavour-infused, the shrimp-broth's glycine-sweetness having penetrated the batter's rehydrated-zone), and the SHRIMP INSIDE = SNAP (the myosin-gel, firm, white, glycine-sweet, the Tonkin-Gulf shrimp's clean oceanic-sweetness). The bite is: a THREE-LAYER EXPERIENCE — crunch (top-batter) → soft (bottom-batter) → snap (shrimp) — a textural GRADIENT from hard to soft to firm, experienced in 0.5 seconds as the tooth descends through the three layers.

SECOND 30-90: the broth climbs — the rehydration-front advances upward through the batter (capillary action, the same capillary-absorption the cơm cháy documented). By second 60: the batter is 70% softened (only the very top-surface retains crunch). By second 90: the batter is fully rehydrated — no crunch remains, the entire batter is: soft, chewy, broth-soaked, flavour-rich (the shrimp-shell-broth's glycine + astaxanthin + Maillard-fond absorbed into every starch-molecule of the former-crust).

SECOND 90+: the shrimp is still DELICIOUS (the broth-infused batter is: a flavour-sponge carrying concentrated shrimp-stock, and the shrimp itself is: still snappy, still sweet, unaffected by the broth's softening of the batter), but the CRUNCH IS GONE — the crispy-on-broth experience, the bún tôm's specific pleasure, has PASSED.

THE BROTH (sipped between shrimp-bites): PINK-GOLD, CLEAR, SWEET — the shrimp-shell-stock, the bisque's Vietnamese cousin, carrying: the glycine-sweetness (the crustacean-clean-sweet), the N-acetylglucosamine's faint secondary-sweetness (the chitin's gift), the sautéed-shell-Maillard's roasted-depth (the fond's contribution), and the dill's carvone (the Hải Phòng herb, arriving at the retronasal as the warm-sweet-herbal that the shrimp-sweet INVITES and the crab-umami did not — the dill + shrimp pairing is: DIFFERENT from the dill + crab pairing, because the shrimp's glycine-sweetness and the dill's carvone-sweetness are ALIGNED (both are "sweet"-type compounds, and the alignment produces: HARMONIC SWEETNESS, two sweet-notes singing the same chord), while the crab's glutamate-umami and the dill's carvone-sweetness are CONTRASTING (the umami is "savoury"-type, the carvone is "sweet"-type, and the contrast produces: COMPLEMENTARY flavour, two different notes creating a chord. The dill is: versatile, pairing HARMONICALLY with shrimp and COMPLEMENTARILY with crab — a different relationship with each crustacean).

Bún tôm Hải Phòng is the collection's most ZERO-WASTE noodle soup — the soup where the broth-source (the shell) and the topping-source (the body) come from the SAME ANIMAL, and nothing from that animal is wasted (the head → tomalley-sauté for the broth, the shell → simmered for the broth, the body → battered and fried for the topping, the tail-shell → the eating-handle). The whole shrimp is: INPUT, and the bowl is: OUTPUT, and between them: nothing is lost, everything is transformed. The shell that the typical kitchen discards is: the Hải Phòng broth's BEST INGREDIENT, and the discarding is: the waste the bún tôm refuses.`,
      tip: `The ICE-COLD BATTER technique exploits the LEIDENFROST EFFECT at micro-scale: when the cold batter (5-10°C) contacts the hot oil (180°C), the temperature-differential (170-175°C) is large enough that the batter's surface-water flash-evaporates INSTANTLY, creating a VAPOUR BARRIER between the batter and the oil. The vapour-barrier INSULATES the batter's interior from the oil for the first 5-10 seconds (the same Leidenfrost-insulation that makes water-droplets skate across a very-hot pan without immediately evaporating), and the insulated-interior STAYS COLD while the exterior CRISPS. The cold-interior→hot-exterior produces: a MAXIMUM CRUNCH-GRADIENT (the exterior is: fully dehydrated starch-glass; the interior is: still slightly moist, slightly soft), and the gradient is: the tempura's SPECIFIC TEXTURE — the Japanese tempura-masters use ice-cold batter for the SAME REASON, and the bún tôm's Hải Phòng vendor uses ice-cold water for the same reason, and neither learned from the other. The physics is: universal, and the crispiness is: the physics' gift to whoever discovers the cold-batter-in-hot-oil principle.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
