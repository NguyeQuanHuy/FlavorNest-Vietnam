'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'goi-buoi-vinh-phuc',
  title: `Gỏi Bưởi Vĩnh Phúc (Pomelo Salad — Northern Citrus Style)`,
  subtitle: `Bưởi — the pomelo, the largest citrus fruit, the north's autumn gift — segmented, each segment's VESICLE CELLS separated by hand into individual juice-sacs that burst on the tongue, tossed with boiled shrimp, sliced pork belly, fried shallots, roasted peanuts, rau răm and a sweet-sour nước mắm dressing. The salad that makes a FRUIT the centrepiece of a savoury plate, and that deploys the pomelo's juice-vesicles as the crunch mechanism no other ingredient in the collection replicates.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/goi-buoi-vinh-phuc.jpg',
  intro: `The pomelo (bưởi, Citrus maxima) is the northern Vietnamese autumn's signal fruit — the trees that grow in every Vĩnh Phúc garden, every Red River Delta village yard, every temple compound, produce their large, thick-skinned, pale-yellow or pink-fleshed fruit in September-November, and the pomelo's appearance on the market stall announces the Tết-preparation season (the pomelo is one of the five fruits on the Tết altar's mâm ngũ quả). Vĩnh Phúc's pomelo varieties — principally bưởi Phúc Yên and the local thanh trà — are: large (1-2 kg), thick-rinded (the rind's albedo layer, 1-3 cm, is used for candying or discarded), and the flesh is: pale yellow to pink, SWEET-TART (the sugar:acid ratio is roughly 8-10:1 in the ripe fruit — sweeter than grapefruit's 5:1, less sweet than orange's 15:1), and carrying a BITTER NOTE from the naringin in the segment membranes (the white pith between the juice vesicles — naringin, a flavanone glycoside, activates the TAS2R14 bitter receptor and produces the pomelo's distinctive bitter-sweet taste).

The gỏi bưởi's innovation is TEXTURAL: the pomelo's juice vesicles (the individual, elongated, sac-shaped cells that make up the fruit's flesh — each vesicle is 8-15 mm long, 1-2 mm wide, filled with juice, and enclosed in a thin cellulose membrane) are separated by hand from the segment's membrane, producing a pile of INDIVIDUAL VESICLES that are: firm (the turgor pressure inside each vesicle maintains its cylindrical shape), juice-filled (each vesicle is a sealed CAPSULE of citric-acid-and-sugar juice), and when bitten: BURSTING. The vesicle-burst is the pomelo's unique crunch mechanism — the tooth compresses the vesicle, the cellulose membrane resists briefly (at roughly 0.5-1 Newton), then RUPTURES, and the juice inside the vesicle SPRAYS onto the tongue in a micro-burst of citrus-sweet-tart liquid. The burst is: wet (unlike every other crunch in the collection — the starch-glass, the sugar-glass, the chitin, the collagen-glass are all DRY crunches; the vesicle-burst is a WET crunch, the only one), ACIDIC (the juice's citric acid, at pH 3.5-4.0, hits the tongue's sour receptors immediately on burst), and AROMATIC (the juice contains limonene, linalool and nootkatone — the pomelo's specific citrus-volatile suite, released from the burst vesicle's juice into the mouth's air and carried to the retronasal olfactory).

The vesicle-burst mechanism was documented early in the collection (the crunch taxonomy's THIRD mechanism: vesicle burst, alongside turgor and sclerenchyma), but the gỏi bưởi is the first recipe where the vesicle-burst is the DOMINANT crunch — the pomelo's vesicles are the salad's primary textural element, and the burst is the experience the eater anticipates in every bite.

The salad's flavour architecture is a FIVE-REGISTER system: SWEET (the pomelo's fructose + the dressing's sugar), SOUR (the pomelo's citric acid + the dressing's lime), SALTY (the dressing's fish sauce), UMAMI (the dried shrimp's glutamate + the fresh shrimp's inosinate), and BITTER (the naringin from the segment-membrane fragments that inevitably accompany the separated vesicles — the bitter is mild, 2-3/10 on the collection's scale, and the dressing's sugar suppresses it to 1-2/10, making it a BACKGROUND note that adds complexity without challenge). The five registers PLUS the two textures (wet-burst from the vesicles + dry-crunch from the peanuts) produce a salad that is, per-bite, more sensorially DENSE than any other salad in the collection — more registers, more textures, more contrast than the gỏi lá rừng (which has more aromatics but fewer taste-registers) or the mắm thái (which has more funk but fewer textures).`,
  ingredientSections: [
    {
      title: 'The pomelo',
      items: [
        {
          amount: 1,
          name: 'large pomelo (bưởi), roughly 1-1.5 kg',
          note: `Ripe — the skin yields slightly under pressure, the fruit feels heavy for its size (heavier = more juice per vesicle), and the aroma at the stem-end is: faintly floral, faintly citrus (the rind's oil glands contain limonene at 85-95% of the rind-oil's composition, and the ripe fruit releases more limonene from its rind than the unripe). Pink-fleshed varieties are sweeter; pale-yellow are more tart. Either works — the dressing compensates.`,
        },
      ],
    },
    {
      title: 'The accompaniments',
      items: [
        { amount: 200, unit: 'g', name: 'shrimp, boiled 2-3 min, peeled, halved lengthwise' },
        { amount: 150, unit: 'g', name: 'pork belly, boiled 30 min, chilled, sliced thin', note: `The FAT — same bland-fatty pork belly deployed across 10+ salads in the collection. The pork's fat coats the tongue and BUFFERS the pomelo's citric-acid sting (the fat's lipid layer between the acid and the sour receptors reduces the perceived sourness by 15-20%).` },
        { amount: 60, unit: 'g', name: 'roasted peanuts, coarsely crushed' },
        { amount: 2, unit: 'tbsp', name: 'hành phi (fried shallots)' },
        { amount: 30, unit: 'g', name: 'rau răm (Vietnamese coriander), torn' },
        { amount: 20, unit: 'g', name: 'húng quế (Thai basil)' },
        { amount: 15, unit: 'g', name: 'toasted sesame seeds' },
        { amount: 10, unit: 'g', name: 'toasted desiccated coconut (optional — the texture accent)' },
      ],
    },
    {
      title: 'The dressing',
      items: [
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 2, name: 'cloves garlic, minced' },
        { amount: 1, name: 'red chili, sliced thin' },
      ],
    },
  ],
  steps: [
    {
      title: 'Segment the pomelo, separate the vesicles by hand — the WET CRUNCH prepares',
      description: `PEEL the pomelo: score the thick rind in quarters (the rind is 1-3 cm thick — the outer zest is thin and fragrant, the inner albedo is thick and bitter-naringin-rich). Peel the rind away in large sections. The naked pomelo: pale-yellow or pink, enclosed in the white pith-membrane (the segment walls).

SEGMENT: separate the pomelo into its natural segments (10-14 per fruit). Peel the MEMBRANE from each segment — the thin, white, slightly bitter skin that encloses each segment's vesicle-cluster. Discard the membrane (or keep a small amount — 10-15% of the membrane area — to contribute the mild naringin-bitter that gives the salad its complexity. The bitter is a DESIGN CHOICE, not an accident: no membrane = sweet-only salad, some membrane = sweet-bitter-complex salad).

SEPARATE THE VESICLES: with your fingers, gently pull each segment apart into individual vesicles or small clusters of 3-5 vesicles. The separation is done BY HAND (not chopped, not mashed — a knife ruptures the vesicles and the juice runs out, producing a wet, deflated, crunch-less pile. The hand-separation preserves each vesicle's INTACT MEMBRANE, and the intact membrane is the crunch: the sealed, juice-filled, turgid capsule that will burst on the tooth). The separated vesicles should be: individually visible (each one a tiny, elongated, 10-15 mm sac), intact (no juice leaking — a leaking vesicle has already burst and will provide no crunch when bitten), and dry-surfaced (pat gently with paper towel if the separation released some juice — surface juice dilutes the dressing and makes the salad watery).

Yield: roughly 400-500 g of separated vesicles from a 1-1.5 kg pomelo (the rind and membrane account for 50-60% of the fruit's weight — the pomelo is the LEAST EFFICIENT citrus by flesh-to-weight ratio, and the inefficiency is the thick rind's thermal insulation protecting the vesicles through the autumn's temperature swings).`,
      tip: `The pomelo's juice VESICLE is a single, elongated, specialized plant cell (a "juice sac") — one of the largest individual plant cells visible to the naked eye (8-15 mm long, 1-2 mm wide, visible without magnification). Each vesicle is: enclosed in a CELLULOSE MEMBRANE (roughly 10-20 μm thick), filled with JUICE (a solution of citric acid, fructose, glucose, ascorbic acid, limonene, and water), and maintained at TURGOR PRESSURE (the internal osmotic pressure of the juice pushes outward against the membrane, keeping the vesicle firm and cylindrical — the same turgor that keeps the green papaya and the cucumber crisp). The vesicle's burst-on-bite mechanism is: tooth compresses vesicle → internal pressure exceeds membrane tensile strength → membrane RUPTURES → juice sprays outward → the tongue receives a 0.05-0.1 ml micro-burst of citric-acid-sweet juice. The burst is the pomelo's specific contribution to the collection's crunch taxonomy — the WET CRUNCH, the only crunch in the collection that delivers LIQUID rather than fragments.`,
    },
    {
      title: 'Toss with dressing, shrimp, pork, peanuts — the five-register salad',
      description: `MIX THE DRESSING: dissolve sugar in fish sauce + lime juice. Add minced garlic and sliced chili. The dressing should taste: SWEET-SOUR-SALTY in roughly equal measure — the three tastes must BALANCE because the pomelo will add its own sweet and sour (the fruit's fructose + citric acid), and the dressing must not DOUBLE either one into dominance. The dressing is the CALIBRATOR: it adjusts the plate's final sweet-sour balance to the zone where neither taste dominates and the five registers coexist.

TOSS: in a large bowl, combine the separated pomelo vesicles, the halved boiled shrimp, the sliced pork belly, and 2/3 of the dressing. Toss GENTLY — the vesicles are fragile (aggressive tossing ruptures them, releasing their juice into the bowl prematurely and deflating the crunch that should happen in the MOUTH, not in the bowl). The tossing distributes the dressing — every vesicle's surface receives a thin film of fish-sauce-sweet-sour-garlic-chili that will be the FIRST FLAVOUR the tongue detects on each vesicle (the dressing's surface flavour, followed 0.5 seconds later by the vesicle's BURST, which delivers the fruit's own juice-flavour FROM INSIDE the vesicle — a two-wave flavour delivery from a single piece: surface-dressing then interior-juice).

PLATE: mound the tossed salad on a serving plate or in individual bowls. Scatter crushed peanuts (the DRY CRUNCH — the counterpoint to the vesicle's wet crunch; the mouth receives two crunch types in the same mouthful: the peanut's dry oil-rich fracture at 5-8 N + the vesicle's wet juice-burst at 0.5-1 N, and the two are as different as two crunches can be). Scatter hành phi, sesame seeds, and toasted coconut (if using). Tear rau răm and húng quế over the top. Drizzle the remaining dressing.

THE MOUTHFUL: a forkful that includes pomelo vesicles + a shrimp half + a pork slice + a peanut + a rau răm leaf delivers ALL FIVE REGISTERS simultaneously:

SWEET: the pomelo's fructose (from inside the burst vesicle) + the dressing's sugar (from the surface) + the shrimp's glycine (from the protein).

SOUR: the pomelo's citric acid (from the burst vesicle — the acid arrives WET, carried by the juice-spray, hitting the sour receptors in a concentrated micro-dose that is MORE intense per-contact-area than the dressing's diluted acid) + the dressing's lime juice (from the surface).

SALTY: the dressing's fish sauce (from the surface) — the only salt source, and its glutamate doubles as umami.

UMAMI: the fish sauce's glutamate + the shrimp's inosinate (the nucleotide-amino-acid synergy, the collection's most reliable flavour amplifier, here in its 25th+ documented appearance).

BITTER: the naringin from the membrane fragments (background, 1-2/10, detectable as a faint, pleasant, grapefruit-adjacent bitterness that arrives 2-3 seconds after the sweet-sour and that adds the COMPLEXITY the four other registers do not — the bitter is the depth-note, the shadow in the painting, the minor chord in the progression).

TEXTURES: wet-burst (vesicle, 0.5-1 N) + dry-crunch (peanut, 5-8 N) + soft-fat (pork belly) + snap-tender (shrimp) + fragile-leaf (rau răm) = five textures per mouthful, the widest textural range of any single fork-load in the collection.

Gỏi bưởi Vĩnh Phúc is the collection's most SENSORIALLY COMPLETE salad — the salad with the most simultaneous taste-registers (five: sweet, sour, salty, umami, bitter), the most simultaneous textures (five: wet-burst, dry-crunch, soft-fat, snap-tender, fragile-leaf), and the only recipe where the crunch is WET — the pomelo's juice-vesicle burst delivering liquid onto the tongue at the moment of fracture, the collection's singular wet crunch, the crunch the mouth remembers because it arrives with a splash.`,
      tip: `The pomelo's NARINGIN — the bitter flavanone glycoside concentrated in the segment membranes and the albedo (white pith) — is the same compound that gives grapefruit its bitterness, but at LOWER concentration in the pomelo (roughly 200-500 mg/L in pomelo juice vs 400-800 mg/L in grapefruit juice). The lower concentration places the pomelo's bitterness in the PLEASANT zone (1-3/10 on the collection's bitterness hierarchy, below the rau đắng's 3-4 and far below the sầu đâu's 9-10) — bitter enough to add complexity, too low to trigger the endorphin-stress-response the stronger bitters deploy. The naringin is also a documented GRAPEFRUIT-DRUG INTERACTION compound (it inhibits the CYP3A4 liver enzyme, slowing the metabolism of many medications — the same warning the grapefruit carries), but at the pomelo's lower concentration and at the gỏi bưởi's typical serving size (200-300 g of flesh), the interaction risk is LOW (the naringin dose from a salad serving is roughly 50-100 mg, vs the 300-600 mg from a full glass of grapefruit juice that triggers the clinical interaction). The note is: eat the salad freely, but mention to the pharmacist if eating pomelo daily while on medication.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
