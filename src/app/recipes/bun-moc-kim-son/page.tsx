'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-moc-kim-son',
  title: `Bún Mọc Kim Sơn (Pork Meatball Noodle Soup — Kim Sơn's Clear-Broth Comfort)`,
  subtitle: `Bún in a CLEAR, LIGHT, meticulously-skimmed pork-bone broth, with mọc — hand-formed pork meatballs bound with wood-ear mushroom and a whisper of fish sauce — and sliced giò nạc (lean pork roll) floating alongside. No star anise, no cinnamon, no five-spice — the broth is NAKED, carrying nothing but the pig's own dissolved amino acids and the bone's gelatin, and the nakedness is the recipe's point: this is the soup that lets the pork SPEAK without any spice-interpreter, the most TRANSPARENT broth in the Ninh Bình collection.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '2 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/bun-moc-kim-son.jpg',
  intro: `Bún mọc is the northern Vietnamese COMFORT SOUP — the soup the household makes when the body needs warmth without complexity, the stomach needs protein without challenge, and the palate needs clean-savoury without the aromatic-assault of the phở's star-anise or the bún bò's lemongrass-chili. The bún mọc is: QUIET. Where the phở is a SYMPHONY (bone-broth + char-spice + star-anise + cinnamon + ginger + onion = 6+ aromatic layers), the bún mọc is a SOLO: pork-bone + ginger, two ingredients, one broth, one voice.

The SOLO-VOICE principle means: the broth's quality is EXPOSED. In the phở, a mediocre bone-broth is masked by the spice-package (the star-anise and the cinnamon cover the broth's deficiencies the way makeup covers a blemish). In the bún mọc, there is NO MASK — the broth's every strength and every weakness is audible, and the cook who makes a great bún mọc has made a great BROTH, period, without any spice-crutch.

The Kim Sơn version is the Ninh Bình countryside's take on this Hà Nội-origin soup, and the Kim Sơn distinction is: the MỌC (the meatball) is made with a HIGHER PROPORTION of wood-ear mushroom than the Hà Nội standard (the Kim Sơn mọc is roughly 60% pork / 40% wood-ear-mushroom by volume, vs the Hà Nội's 80/20 — the countryside has more mushroom and less pork, and the economy IS the recipe, and the recipe is better for it: the high-mushroom mọc is LIGHTER, more TEXTURED, more INTERESTING to chew than the all-pork mọc, because the wood-ear's sclerenchyma-crunch punctuates every bite with 3-4 crunch-events per meatball).

THE MỌC (pork meatball) is the soup's co-star alongside the broth. The mọc is: NOT a bouncy, myosin-extracted, elastic meatball (that is the bò viên — the beef ball, which is pounded for 20 minutes to extract myosin into an elastic-bouncy gel). The mọc is: SOFT, LOOSE, CRUMBLY-TENDER, the ground pork MIXED but NOT POUNDED (the mixing distributes the seasoning but does NOT extract the myosin — the same un-pounded, crumbly texture the bò nướng lá lốt's filling deliberately preserved). The mọc's softness is: INTENTIONAL — the mọc is supposed to be: gentle, yielding, the meatball equivalent of a whisper rather than a shout, the protein that dissolves into the broth's serenity rather than asserting itself against it.

The wood-ear mushroom (mộc nhĩ — the same sclerenchyma-crunch-source the bánh cuốn, the bánh tai and the nem Yên Mạc all documented) is the mọc's TEXTURAL SAVIOUR: without the wood-ear, the soft, un-pounded pork meatball is: monotonously soft (soft pork in soft bún in soft broth = textural monotony). With the wood-ear at 40% of the meatball's volume: every bite of the mọc contains 3-4 wood-ear fragments, and each fragment CRUNCHES (the sclerenchyma-fibre's 2-3 N crunch, the collection's most-recurring textural punctuation), and the crunch BREAKS the softness, and the broken-softness is: interesting, varied, alive.

GIÒ NẠC (lean pork roll) is the bún mọc's SECOND protein: a steamed pork-loaf (the same giò lụa concept — pounded pork + fish sauce, steamed into a bouncy-elastic cylinder — but giò nạc is: LEANER than giò lụa, made from 95-100% lean pork without the fat-back the giò lụa sometimes includes, producing a paler, firmer, drier roll). The giò nạc is sliced into 3-4 mm rounds and floated in the broth — the rounds provide: BOUNCY-ELASTIC texture (the myosin-gel's snap, the same bounce every giò in the collection documented — the pounded-and-steamed-pork's hallmark), and a VISUAL contrast (the pale-pink, perfectly-round, uniformly-smooth giò-rounds floating beside the rustic, irregular, wood-ear-studded mọc-balls — the industrial-smooth beside the handmade-rough, the two pork-preparations side by side demonstrating: the same pig, two techniques, two textures).`,
  ingredientSections: [
    {
      title: 'The broth — naked pork-bone',
      items: [
        { amount: 800, unit: 'g', name: 'pork bones (neck bones, spine or knuckle), blanched', note: `The SOLO instrument — no spice-backing. Choose bones with MARROW (the knuckle and the neck-bone have the most marrow per gram, and the marrow's fat and amino acids are the broth's ENTIRE flavour-source alongside the gelatin). The blanching must be THOROUGH: 5-minute boil, drain, rinse each bone individually under running water — any residual scum left on the bones will cloud the broth, and clarity is the bún mọc's VISUAL IDENTITY.` },
        { amount: 2, unit: 'L', name: 'water (cold start — the bones go into cold water and heat together, extracting MORE gelatin than the hot-start method)' },
        { amount: 15, unit: 'g', name: 'ginger, bruised (the broth\'s ONLY aromatic — one voice)' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
      ],
    },
    {
      title: 'The mọc (pork meatballs — soft, wood-ear-rich)',
      items: [
        { amount: 250, unit: 'g', name: 'ground pork (80/20 — some fat for moisture)', note: `Ground ONCE through a medium plate — not pounded, not processed to paste. The single-grind produces: visible meat-fibre fragments (the mọc should look: rustic, hand-formed, NOT smooth-and-elastic like the bò viên or the giò lụa).` },
        { amount: 100, unit: 'g', name: 'wood-ear mushroom (mộc nhĩ), soaked, drained, diced 3-4 mm', note: `40% of the mọc's volume — MORE than the Hà Nội standard's 20%. The high wood-ear ratio is the Kim Sơn's countryside signature: more texture, more crunch, less pork-cost. Each 3-4 mm dice = one crunch-event per chew.` },
        { amount: 2, name: 'shallots, minced' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
      ],
    },
    {
      title: 'The giò nạc (lean pork roll)',
      items: [
        { amount: 200, unit: 'g', name: 'giò nạc (store-bought lean pork roll), sliced 3-4 mm rounds', note: `Buy pre-made at Vietnamese delis/groceries. If making from scratch: pound 300 g lean pork + 1 tbsp fish sauce + 0.5 tsp pepper for 15 min → shape into cylinder → wrap in banana leaf → steam 45 min. The giò provides the BOUNCY contrast the soft mọc needs.` },
      ],
    },
    {
      title: 'The bowl',
      items: [
        { amount: 400, unit: 'g', name: 'bún (rice vermicelli), blanched' },
        { amount: 30, unit: 'g', name: 'hành lá (scallion), sliced' },
        { amount: 30, unit: 'g', name: 'rau mùi (cilantro)' },
        { amount: 2, unit: 'tbsp', name: 'hành phi (fried shallots)' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
        { amount: 4, name: 'limes, wedges' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 100, unit: 'g', name: 'rau sống: lettuce, giá đỗ (bean sprouts), rau muống (water spinach)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Simmer the naked broth 1.5 hours — skim obsessively, the clarity is the soul',
      description: `COLD-START: place the blanched, rinsed pork-bones in the pot with 2 L COLD water and the bruised ginger. The COLD START is the bún mọc cook's specific choice (the phở cook debates hot-vs-cold-start; the bún mọc cook does not — it is always COLD): the cold water draws the bones' collagen into solution MORE EFFICIENTLY than hot water (the gradual temperature-rise from 20°C to 100°C over 15-20 minutes gives the collagen-fibrils MORE TIME to swell, unwind and dissolve than the immediate-immersion-in-boiling that the hot-start provides — the cold-start broth at 1.5 hours contains roughly 20-30% MORE dissolved gelatin than the hot-start broth at the same time).

Bring to a boil slowly. The moment the boil begins: REDUCE TO THE GENTLEST SIMMER (the same murmur-not-boil the gà đen H'Mông's broth demanded — vigorous boiling emulsifies the fat into the broth, producing CLOUDINESS, and cloudiness in a bún mọc is: a FAILURE. The bún mọc broth must be: CLEAR — translucent, pale-gold, the spoon visible through 5 cm of broth — because the broth has no spice-colour to hide behind, and every particle of cloudiness is: visible, and visible-cloudiness says: the cook did not skim enough).

SKIM: for the first 20 minutes, skim CONSTANTLY (every 2-3 minutes, a ladle sweeps the surface, collecting the fat-foam and the protein-scum that rise). The bún mọc's skim is: the most OBSESSIVE skim in the collection (more obsessive than the phở's, because the phở's spice-colour masks residual cloudiness; the bún mọc's naked-broth does not). After minute 20: the scum-production slows, and the skimming can relax to every 10 minutes.

SIMMER 1.5 HOURS total. The broth's evolution:

MINUTE 0-30: pale, thin, mineral — the bones are releasing their surface-mineral and their initial collagen-burst.

MINUTE 30-60: GOLDEN — the Maillard between the broth's dissolved amino acids and the trace sugars (from the ginger and the bones' glycoprotein) produces a pale-gold colour and the first SAVOURY-DEPTH (the broth tastes: salty-savoury, simple, one-note, but the note is PURE PORK).

MINUTE 60-90: the broth thickens (the gelatin-accumulation reaches the LIP-COATING threshold — a spoonful held horizontal drains slowly, leaving a thin, glossy film on the spoon's bowl, and the film is: the gelatin's signature, the broth's BODY). The flavour deepens: the amino-acid-concentration increases as water evaporates slightly (the broth volume drops from 2 L to roughly 1.7 L over 90 minutes of gentle evaporation), and the concentrated amino-acids produce: a richer, more SAVOURY, more COMPLETE pork-flavour that the 30-minute broth only hinted at.

SEASON: fish sauce, salt, sugar. The seasoning should be: LIGHT (the broth's own dissolved-pork-amino-acids provide significant umami, and the fish sauce is a SUPPLEMENT, not a foundation — 1 tbsp, not 3 tbsp, because the broth is SOLO and the fish sauce is the background-singer, not the lead).

STRAIN through a fine sieve lined with cheesecloth (the final clarity-step — any bone-fragment, any ginger-fibre, any residual scum-particle is caught by the cheesecloth, and the strained broth is: CRYSTAL-CLEAR, pale-gold, glistening, the most transparent broth in the Ninh Bình collection).`,
      tip: `The bún mọc broth's TRANSPARENCY is achieved through THREE mechanisms working together: BLANCHING (removes 80% of the coagulable-protein scum BEFORE the broth-simmer begins), GENTLE SIMMERING (prevents fat-emulsification — the fat stays on the surface as discrete pools that can be skimmed, rather than dispersing into the broth as micro-droplets that cause cloudiness), and SKIMMING (removes the remaining 20% of protein-scum and the surface-fat). All three are NECESSARY — omitting any one produces a cloudy broth: un-blanched = cloudy from protein; hard-boiled = cloudy from emulsified-fat; un-skimmed = cloudy from accumulated surface-scum. The three-mechanism-transparency-system is the bún mọc cook's discipline, and the discipline is the broth's beauty.`,
    },
    {
      title: 'Form the mọc, poach in the broth, assemble — the quiet bowl',
      description: `THE MỌC: mix the ground pork, the diced wood-ear, the minced shallot, the fish sauce, pepper and sugar in a bowl. MIX gently — 1-2 minutes of folding (NOT the aggressive slapping the nem nướng demanded — the mọc wants: cohesion without elasticity, binding without bounce). The mixture should be: STICKY enough to hold a ball-shape, LOOSE enough to break apart in the mouth with 2-3 chews, and STUDDED with visible wood-ear dice (the dark, glistening, 3-4 mm mushroom-fragments visible throughout the pale-pink pork matrix).

FORM: wet your hands (the mixture is sticky). Scoop 1 tablespoon (roughly 20-25 g) and shape into a rough ball — the ball should be: IRREGULAR (not perfectly spherical — the hand-formed irregularity is the mọc's artisanal-marker that distinguishes it from the machine-formed bò viên's perfect sphere), roughly 3 cm diameter, and carrying the wood-ear's dark fragments visible on the ball's surface.

POACH: bring the strained broth to a gentle simmer (NOT a hard boil — the mọc are FRAGILE, and turbulent boiling would break them apart). Slide the formed mọc-balls into the simmering broth — 8-10 balls at a time. The mọc SINK initially (the raw pork's density is slightly above the broth's — the meatball descends to the pot's bottom). Over 3-4 minutes: the mọc's surface-protein denatures (the heat-set surface becomes: opaque, slightly firmer than the still-raw interior), and the mọc begins to FLOAT (the heat causes the pork's fat to render and the proteins to contract, reducing the meatball's density to BELOW the broth's — the floating is the DONENESS SIGNAL: a floating mọc = cooked through; a sinking mọc = still raw at the centre).

POACH 5-7 minutes total — the mọc should be: cooked through (no pink centre — the pork's myoglobin has denatured to grey-beige throughout), SOFT (pressing the mọc with a spoon produces a gentle yielding, not the bò viên's elastic rebound — the un-pounded-pork's crumbly texture), and the wood-ear inside: STILL CRUNCHY (the wood-ear's sclerenchyma survives 100°C boiling indefinitely — the mushroom's cell-wall fibres do not soften or dissolve at any cooking temperature the kitchen reaches, and the crunch is: permanent, indestructible, the texture that persists when all other textures have yielded).

The BROTH after poaching the mọc: slightly enriched (the mọc released a small amount of pork-protein and pork-fat into the broth during poaching — the broth is: fractionally richer, fractionally cloudier (the mọc's released-protein produces a faint, acceptable haziness that the purist may skim and the realist accepts), and carrying a new AROMA: the poached-pork-meatball's dissolved amino-acids add a round, meaty, warm note to the ginger-only broth).

ASSEMBLE: divide the blanched bún into 4 bowls. Place 2-3 mọc per bowl (the soft, irregular, wood-ear-studded balls). Place 3-4 giò nạc rounds per bowl (the pale-pink, perfectly-smooth, bouncy discs — the TEXTURAL CONTRAST: rustic-soft mọc beside industrial-smooth giò, each one demonstrating a different answer to the question "what can you do with ground pork?").

LADLE the clear broth — the PALE-GOLD, TRANSPARENT, gently-lip-coating liquid fills the bowl, submerging the bún and floating the mọc and the giò. The bowl's visual: QUIET (no vivid colours — pale-gold broth, white bún, pale-pink giò, grey-beige mọc with dark wood-ear specks, green scallion, green cilantro — the palette is: MUTED, GENTLE, the visual equivalent of the broth's one-note flavour).

Scatter scallion, cilantro, hành phi, black pepper. Lime and chili on the side.

THE SPOONFUL: sip the broth — CLEAR, WARM, PORK-PURE (the solo-voice, the naked-broth, the pork-bone's dissolved amino-acids at full concentration with NO aromatic distraction — the mouth tastes: the pig, only the pig, the pig's own glycine-sweetness + proline-savoury + the ginger's single warm-note, and the simplicity is: SHOCKING after the collection's 100+ recipes of multi-spice, multi-layer, multi-aromatic complexity. The bún mọc broth is the SILENCE after the noise, the blank page after the written ones, and the silence has its own eloquence).

Bite a mọc — the soft, crumbly pork yields in 2 chews, then: CRUNCH (a wood-ear fragment, 3 mm, sclerenchyma-fibre, 2-3 N — the crunch inside the soft, the PUNCTUATION in the mọc's softness that the 40% wood-ear ratio guarantees at 3-4 crunch-events per meatball). The mọc's pork flavour is: identical to the broth's (the mọc was poached IN the broth, and the exchange is: bilateral — the broth flavoured the mọc, the mọc flavoured the broth, and the two taste of each other, and the tasting-each-other is: the bún mọc's specific harmony, the soup where the liquid and the solid are tuned to the same note).

Bite a giò nạc round — the myosin-gel SNAPS (the bounce, the elastic-rebound, the pounded-pork's hallmark — 3-4 N, firm, springy, the OPPOSITE of the mọc's soft-crumble). The giò's flavour: leaner, firmer, more CONCENTRATED pork (the pounding extracted the myosin and the steaming gelled it into a dense, protein-rich, low-water matrix — the giò is: pork-essence, the same pig reduced to its structural-minimum).

The MỌC and the GIÒ, side by side in the same bowl, are: the collection's most DIRECT technique-comparison for a single ingredient: SAME PIG (ground pork), TWO TECHNIQUES (mixed-not-pounded vs pounded-and-steamed), TWO TEXTURES (soft-crumbly vs bouncy-elastic), and the comparison teaches: the TECHNIQUE is the texture, and the texture is the experience, and the experience of the mọc (gentle, yielding, quiet) and the experience of the giò (firm, bouncy, assertive) are: as different as two foods can be, and they came from the same pig.

Bún mọc Kim Sơn is the Ninh Bình collection's QUIETEST recipe — the recipe with the fewest ingredients, the fewest aromatics, the most TRANSPARENT broth, and the most GENTLE eating-experience. The bowl asks nothing of the eater except: sit, sip, chew slowly, and hear the pork's own voice, unaccompanied.`,
      tip: `The wood-ear mushroom's INDESTRUCTIBLE CRUNCH is the collection's most DOCUMENTED recurring texture (appearing in: bánh cuốn Phú Đa, nem Yên Mạc, bún mọc Kim Sơn, and 10+ other preparations). The crunch's indestructibility comes from the mushroom's SCLERENCHYMA: dead, lignified cell-walls (the same structural material that makes walnut shells hard and coconut husks fibrous) that contain 30-40% lignin — a polymer that is: INSOLUBLE in water at any temperature, UNAFFECTED by pH changes (it resists both acids and alkalis), and NON-DEGRADABLE by any enzyme the human digestive tract produces. The lignin-reinforced cell-wall is therefore: permanently crunchy — it cannot be softened by soaking, boiling, frying, fermenting, or any other kitchen-process. The wood-ear's crunch is: the GEOLOGICAL CONSTANT of the Vietnamese kitchen — the texture that never changes, the punctuation that never silences, present in every soft preparation that needs a crunch-accent, and reliably delivering 2-3 N of sclerenchyma-snap in every bite, every time, in every dish, forever.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
