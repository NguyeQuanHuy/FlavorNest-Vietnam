'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-cuon-cha-ram-binh-dinh',
  title: `Bánh Cuốn Chả Ram Bình Định (Steamed Rice Sheets with Crispy Shrimp Rolls)`,
  subtitle: `Bánh cuốn — the same paper-thin, translucent, steamed rice sheets the north fills with pork and mushroom — here served EMPTY: unfilled, unseasoned, draped over a plate like white silk, and eaten by wrapping them around chả ram: small, finger-sized, deep-fried spring rolls filled with ground shrimp and jicama. Soft wraps hard. Translucent wraps golden. And the mắm nêm — the central coast's fermented anchovy — ties them together with a funky, sweet, lime-bright dip. The Bình Định breakfast that inverts the northern formula: the north puts the filling INSIDE the sheet; Bình Định puts the sheet AROUND the filling.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/banh-cuon-cha-ram-binh-dinh.jpg',
  intro: `Bánh cuốn — the steamed rice sheet, one of the Vietnamese kitchen's oldest and most refined preparations — exists in three major regional versions, and the differences map the same north-centre-south pattern every other format in this collection has traced:

THE NORTHERN VERSION (Hà Nội, Thanh Trì): the sheet is steamed on a cloth stretched over boiling water, filled with seasoned pork mince and wood-ear mushroom WHILE STILL ON THE CLOTH, rolled closed, lifted off, and served with chả lụa, fried shallots, and nước chấm. The sheet is the VESSEL — it contains the filling.

THE CENTRAL VERSION (Bình Định, Quảng Ngãi): the sheet is steamed the same way but served EMPTY — no filling inside the sheet itself. Instead, a separate plate of CHẢI RAM (small fried spring rolls, filled with shrimp and jicama) is served alongside, and the eater tears a piece of the soft, empty sheet, wraps it around a chả ram, and dips in mắm nêm. The sheet is the WRAPPER — it wraps an external filling rather than containing an internal one.

THE SOUTHERN VERSION (Sài Gòn, Tây Ninh): the sheet is similar to the north's but often thicker, served with a wider variety of accompaniments (chả lụa, nem nướng, vegetables), and the nước chấm is sweeter.

The Bình Định inversion — empty sheet + external fried roll — is the version this recipe documents, because the inversion produces a TEXTURAL COMBINATION the northern version cannot: the empty bánh cuốn is PURE SOFTNESS (no filling disrupts its silk-smooth, translucent, melt-on-the-tongue drape), and the chả ram is PURE CRUNCH (a small, tight, crispy, deep-fried roll whose crackle is uninterrupted by any soft interior except the shrimp-jicama filling). When the soft sheet wraps the crispy roll, the mouthful is: soft OUTSIDE, crispy INSIDE — the inverse of every other wrapped-and-fried format in the collection (which puts the crisp outside and the soft inside). The Bình Định format inverts the architecture, and the inversion produces a sensation the mouth does not expect: the teeth pass through yielding silk, then SHATTER into crispy fried shell, and the surprise of the shatter — arriving AFTER the softness, not before it — is the mouthfeel the format was designed to deliver.

The chả ram's filling is shrimp-dominant — ground shrimp mixed with jicama (củ đậu, the same crunchy root the nem rán's filling used as the northern kohlrabi's substitute), seasoned with fish sauce and pepper, wrapped in SMALL rice-paper rolls (8-10 cm, finger-length — smaller than the chả giò's 12-15 cm) and fried to a deep golden crispness. The small size is deliberate: each chả ram is a single-bite roll, designed to be wrapped in ONE piece of bánh cuốn and eaten in ONE mouthful — the format is a one-bite system, not a multi-bite sandwich, and the one-bite constraint means every component must be present in every bite.`,
  ingredientSections: [
    {
      title: 'Bánh cuốn (steamed rice sheets)',
      items: [
        { amount: 300, unit: 'g', name: 'rice flour (bột gạo)' },
        { amount: 50, unit: 'g', name: 'tapioca starch', note: `The tapioca adds translucency and a slight chewiness — without it, the pure-rice sheet is matte and brittle.` },
        { amount: 500, unit: 'ml', name: 'water' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (mixed into the batter — prevents sticking)' },
      ],
    },
    {
      title: 'Chả ram (fried shrimp rolls)',
      items: [
        { amount: 300, unit: 'g', name: 'shrimp, peeled, deveined, minced coarsely', note: `Coarsely minced — not paste-fine. The shrimp pieces should be visible in the finished roll, each one snapping under the tooth with its own chitin-edged crunch.` },
        { amount: 100, unit: 'g', name: 'jicama (củ đậu), grated, squeezed very dry', note: `The internal desiccant + the crunch contributor — same role as in the nem rán, here at a higher proportion (the chả ram is smaller, and the jicama's crunch must be perceptible in every one-bite roll).` },
        { amount: 2, name: 'shallots, minced' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
        { amount: 15, name: 'small rice-paper sheets (bánh tráng, 16 cm rounds), dampened' },
        { amount: 500, unit: 'ml', name: 'neutral oil for deep-frying' },
      ],
    },
    {
      title: 'Mắm nêm dipping sauce',
      items: [
        { amount: 3, unit: 'tbsp', name: 'mắm nêm (fermented anchovy paste)' },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, name: 'cloves garlic, pounded' },
        { amount: 2, name: 'bird\'s-eye chilies, sliced' },
        { amount: 50, unit: 'g', name: 'green papaya or pineapple, julienned fine', note: `The crunchy-sweet-enzymatic element in the dip — papain (papaya) or bromelain (pineapple) tenderises any residual fish protein and softens the mắm nêm's aggressive funk.` },
      ],
    },
    {
      title: 'Accompaniments',
      items: [
        { amount: 200, unit: 'g', name: 'rau sống: lettuce, húng quế, rau răm, kinh giới, tía tô' },
        { amount: 100, unit: 'g', name: 'bean sprouts, blanched' },
        { amount: 100, unit: 'g', name: 'cucumber, in batons' },
      ],
    },
  ],
  steps: [
    {
      title: 'Steam the bánh cuốn sheets — 30 seconds each, paper-thin, silk-smooth',
      description: `Mix rice flour, tapioca starch, salt, oil and water until smooth — a thin, pourable batter (thinner than crêpe batter, thinner even than the bánh xèo's thin central-version batter). Strain through a fine sieve to remove any lumps.

THE STEAMING RIG: stretch a piece of clean, tightly woven cotton cloth over the mouth of a wide pot of boiling water (the cloth is the cooking surface — the steam rises through the fabric and cooks the batter from below). Secure the cloth with a string or a rubber band.

Brush the cloth lightly with oil. Ladle a thin layer of batter onto the cloth — spread quickly with the back of the ladle in a circular motion, producing a round sheet 20-22 cm across and nearly transparent (the cloth should be faintly visible through the batter — if the cloth is not visible, the layer is too thick).

COVER with a lid. Steam 30-40 seconds — the batter sets from liquid to solid, turning from opaque-white to TRANSLUCENT (the starch gelatinises in the steam's 100°C, becoming transparent — the same opacity-to-transparency transformation the xôi gấc's rice and the xôi ngũ sắc's dyed grains demonstrated).

Lift the lid. Peel the sheet gently from the cloth with an oiled spatula or a thin bamboo stick — start at one edge, lift slowly, the sheet pulling away from the cloth in one piece. Lay the sheet flat on an oiled plate.

Repeat — the rhythm is: ladle, spread, cover, wait 30 seconds, lift, peel, plate. A practiced Bình Định cook produces one sheet every 45 seconds, and 20 sheets (enough for 4 people) take 15 minutes.

The finished sheets should be: translucent (hold one to the light — you can read print through it), smooth (no bubbles, no thick spots, no tears), and EMPTY — no filling, no seasoning, nothing between the eater and the rice flour's pure, neutral, silk-soft, almost-flavourless starch. The emptiness IS the design: the sheet is a blank canvas, and the chả ram is the painting.`,
      tip: `The bánh cuốn's 30-second steaming time is the shortest cooking time of any recipe in the collection — shorter than the sâu tre's 90-second grill, shorter than the tép rang's 4-minute wok — and the brevity is dictated by the sheet's thinness: at roughly 0.5-0.8 mm thick, the batter layer has almost no thermal mass, and the steam's 100°C penetrates to the centre in under 10 seconds. The remaining 20 seconds are for the starch's COMPLETE gelatinisation — the amylose and amylopectin must fully hydrate, swell and become transparent for the sheet to achieve its signature translucency. An under-steamed sheet (20 seconds) is opaque at the centre (un-gelatinised starch scatters light); a perfectly steamed sheet (30-40 seconds) is uniformly translucent; and an over-steamed sheet (60+ seconds) is gummy and tears during peeling. The 30-second window is the gelatinisation window, and it is precise.`,
    },
    {
      title: 'Fry the chả ram — small, tight, golden, one-bite crispy rolls',
      description: `FILLING: mix the minced shrimp, squeezed-dry jicama, shallot, fish sauce, pepper and sugar. The mixture should be: cohesive but not paste-smooth (the shrimp pieces visible, the jicama providing white, crunchy specks throughout).

ROLL: dampen each small rice-paper round. Place 1 tablespoon of filling in a line along the lower third. Fold the bottom edge over, tuck the sides, roll TIGHT — tighter than the nem rán, because the chả ram is SMALLER and the tightness is the crispness: a loosely rolled chả ram has air pockets that steam during frying and produce soft, puffed, un-crispy sections. A tight roll is uniformly crispy.

FRY: 170°C, 5-6 minutes, turning occasionally. The rice paper blisters and crisps (the same gluten-free aggregate crunch the chả giò documented — hundreds of individual starch-glass bubbles), the shrimp inside sets (pink, firm, snapping), and the jicama's moisture has evaporated through the porous rice-paper shell (the same desiccant function the nem rán's kohlrabi performed, here from jicama's water leaving through the wrapper's micro-pores during frying).

Drain. The chả ram should be: deep golden, uniformly crispy (no soft spots), small (8-10 cm long, finger-thick — each one a single-bite unit), and — when tapped against another — clicking like chopsticks.`,
      tip: `The chả ram's SMALL SIZE (8-10 cm vs the chả giò's 12-15 cm) is not a miniaturisation but a FORMAT DECISION: each chả ram must fit inside a single torn piece of bánh cuốn, and the wrapped unit must be a single-bite mouthful. A chả giò-sized roll wrapped in bánh cuốn would be a two-or-three-bite affair, and the second bite would encounter a softened, porridge-absorbed, de-crisped wrapper (the bánh cuốn's moisture attacks the rice-paper crust from the moment of wrapping — the same moisture-vs-crunch clock the cháo lươn's bánh tráng nướng raced). The one-bite format eliminates the clock problem: wrap it, dip it, eat it IMMEDIATELY — the entire unit consumed in one motion, the crunch intact, the softness uncompromised, the contrast at full strength. Size is time, and small is fast.`,
    },
    {
      title: 'Wrap, dip, eat — soft outside, crispy inside, the Bình Định inversion',
      description: `THE ASSEMBLY (at the table, by each eater, one at a time):

Tear a piece of bánh cuốn — roughly 8 x 10 cm, torn by hand (the torn edges are softer and more pliable than cut edges, and they drape over the chả ram more smoothly). The piece should be: translucent, cool (the sheets are served at room temperature, not hot — the cool soft sheet against the warm crispy roll is a thermal contrast as well as a textural one), and limp (the sheet hangs from the fingers like wet silk, offering no resistance).

Set a chả ram on the sheet. Add a leaf of lettuce, a sprig of húng quế, a few bean sprouts. Roll loosely — the soft sheet wraps the crispy roll, the translucent white enclosing the golden crunch.

Dip the wrapped roll's end into the mắm nêm sauce. Bite.

THE INVERSION BITE: the teeth pass through the bánh cuốn first — soft, yielding, dissolving (the sheet is so thin it collapses on tooth-contact and begins hydrating in the mouth's saliva within 1 second, becoming a smooth, starchy, neutral coating on the tongue), then the chả ram's rice-paper shell SHATTERS — the crispy, blistered, golden wrapper breaking apart inside the soft sheet's cocoon, the shards scattering across the tongue in a cascade of crunch that the soft exterior did nothing to prepare the mouth for. The surprise is the format's design: soft PROMISES soft, and crispy DELIVERS despite the promise, and the broken expectation is the pleasure.

The shrimp (sweet, snapping, marine), the jicama (turgor-crunchy, neutral, watery — a micro-crunch within the macro-crunch of the rice-paper shell), the herbs (húng quế's anise, rau răm's pepper), the mắm nêm (funky, sweet, lime-bright, the central coast's unmistakable fermented-anchovy voice) — all arrive in the same one-bite mouthful, and all are framed by the bánh cuốn's soft, dissolving, neutral starch envelope that holds everything together for exactly the 3 seconds it takes to chew and that then disappears, leaving only the filling's flavour on the tongue.

Bánh cuốn chả ram Bình Định closes the Bình Định collection with the province's most elegant breakfast — a breakfast of inversions (soft wrapping crispy, the sheet AROUND the roll rather than the filling INSIDE the sheet), of contrasts (translucent-cool-soft vs golden-warm-crispy), and of restraint (the empty sheet contains nothing — its beauty is its blankness, and its blankness is the canvas the chả ram paints on).

Ten Bình Định dishes, ten arguments for the central coast's specific culinary intelligence: the thread-thin noodle that dissolves (bánh hỏi), the small-and-crispy crepe wrapped in rice paper (bánh xèo), the dual-texture fish cake in a sprint-timed broth (bún chả cá), the raw-pork acid-cure (nem chợ Huyện), the black ancestral cake (bánh ít lá gai), the crunchiest congee (cháo lươn), the cooked-then-fermented galangal charcuterie (tré), the single-ingredient shrimp broth (bún tôm), the sea-urchin umami-concentrate (mắm nhum), and now the soft-wrapping-crispy inversion (bánh cuốn chả ram). Each dish makes one argument, and the arguments together make a province: Bình Định, the coast that dissolves, shatters, ferments and inverts — and that eats its breakfast with mắm nêm, always, every morning, without apology.`,
      tip: `The Bình Định bánh cuốn chả ram's soft-outside-crispy-inside architecture is the INVERSE of the collection's dominant format: the chả giò (crispy outside, soft inside), the nem rán (crispy outside, soft inside), the bánh xèo (crispy outside, soft inside), and the tôm chiên bột (crispy outside, soft inside) all place the CRUNCH on the exterior, where the tooth meets it FIRST. The Bình Định format places the crunch on the INTERIOR, where the tooth meets it SECOND — after the soft sheet has already yielded. The inversion reverses the bite's narrative: instead of "crunch → soft" (the normal arc, descending from impact to cushion), the Bình Định format delivers "soft → crunch" (an ascending arc, building from cushion to impact). The ascending arc is more surprising (the soft beginning creates no expectation of crunch) and more satisfying (the crunch arrives as a REWARD for chewing through the softness, not as a GIVEN at the surface). The inversion is the Bình Định format's genius, and the genius is structural, not culinary — it is an ARCHITECTURE of textures, not a recipe of flavours.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
