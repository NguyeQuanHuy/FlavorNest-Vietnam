'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-ca-nha-trang',
  title: `Bún Cá Nha Trang (Fish Noodle Soup with Jellyfish — Nha Trang Style)`,
  subtitle: `Bún in a fish broth built from cá ngừ (tuna) or cá thu (mackerel) simmered with tomato and dill — the central coast's aromatic pairing that no other Vietnamese region deploys — topped with chả cá chiên (fried fish cake), sliced fish fillet, and sứa (jellyfish): translucent, crunchy, collagen-cold ribbons that the coastal city drops into the hot broth to create the collection's most extreme TEMPERATURE CONTRAST in a single bowl. The Nha Trang breakfast that tastes of the South China Sea and feels like biting into a cold ocean wave inside a warm soup.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/bun-ca-nha-trang.jpg',
  intro: `Nha Trang — the coastal capital of Khánh Hòa province, the city built on a bay so beautiful the Vietnamese call it "the pearl of the South China Sea" — produces a bún cá that is fundamentally DIFFERENT from the two bún cá's the collection has already documented: the Châu Đốc bún cá (a Mekong Delta freshwater-fish soup with turmeric, mắm cá and sả ớt) and the Quy Nhơn bún chả cá (a Bình Định steamed-and-fried fish-cake soup). The Nha Trang bún cá is the OCEAN's version: made from SALTWATER fish (tuna, mackerel, or mixed reef fish — never the freshwater cá lóc the Delta versions use), flavoured with the central coast's DÙI + CÀ CHUA pairing (dill + tomato — a combination unique to the central and central-south coast, absent from both the northern and the southern kitchens), and carrying the ingredient that makes the Nha Trang bún cá UNIQUE in the Vietnamese noodle-soup canon: SỨA — jellyfish.

THE FISH: the Nha Trang bún cá uses cá ngừ (yellowfin tuna, Thunnus albacares — caught by Khánh Hòa's tuna-longline fleet, the same fleet that supplies Vietnam's tuna-export industry) or cá thu (mackerel, Scomberomorus commerson — the South China Sea's most abundant pelagic predator). Both are: DARK-FLESHED (higher myoglobin content than the freshwater cá lóc — the tuna's dark-red flesh carries 3-5x the myoglobin of the catfish, and the myoglobin contributes a deeper, more mineral, more "meaty" flavour that the pale freshwater fish does not carry), OIL-RICH (tuna at 5-8% fat, mackerel at 8-12% — the omega-3-rich oil enriches the broth with a lipid body the lean cá lóc cannot provide), and OCEAN-FLAVOURED (the saltwater fish carries iodine, bromophenols, and dimethyl sulfide at trace levels — the compounds the sea contributes to everything that lives in it, and that the tongue reads as "oceanic" and the nose reads as "the beach").

THE DILL + TOMATO PAIRING: the central coast's SIGNATURE — a combination that appears in NO northern noodle soup and NO southern noodle soup, only in the central and central-south coast's fish preparations (the Hà Nội chả cá Lã Vọng uses dill with fish, but in a turmeric-pan-fry context, not a soup context; the Nha Trang uses it as a SOUP AROMATIC). The dill (thì là, Anethum graveolens) contributes: carvone (the sweet, caraway-like, warm compound that distinguishes dill from every other herb in the Vietnamese kitchen), and the tomato contributes: lycopene (the red carotenoid that tints the broth orange), glutamate (tomato is one of the highest natural sources of free glutamate among vegetables — roughly 140-250 mg/100g of ripe tomato, higher than most vegetables), and CITRIC + MALIC ACID (the tomato's sourness, milder than tamarind's but broader and fruitier). The dill + tomato together produce a broth that is: WARM-SWEET-SOUR (the carvone's warmth + the tomato's fruit-acid + the tomato's glutamate-sweetness), a flavour profile that is UNIQUE to the central coast and that the northern eater finds "unusual" and the southern eater finds "unexpected."

THE JELLYFISH: sứa (principally Rhopilema hispidum or Lobonema smithii, the edible jellyfish species harvested from the Nha Trang bay and the central coast's offshore waters) is the bún cá Nha Trang's SIGNATURE INGREDIENT — the ingredient no other Vietnamese noodle soup contains, and the ingredient that makes the Nha Trang bowl INSTANTLY identifiable.

The jellyfish is prepared by: catching the live jellyfish (the bell, which is the edible portion — the tentacles are discarded), SALTING AND ALUM-CURING it (the fresh jellyfish is 95% water and collapses into a puddle within hours of harvest; the salt + alum cure draws out 70-80% of the water, sets the collagen matrix into a firm, translucent, crunchy gel, and preserves the jellyfish for weeks), then RINSING AND SLICING before serving (the cured jellyfish is rinsed of excess salt, sliced into 5 mm ribbons, and served COLD — not cooked, not heated, not simmered in the broth).

The jellyfish's texture is: CRUNCHY (a collagen-gel crunch that is DIFFERENT from every other crunch in the collection — the jellyfish's collagen is type-0, mesogleal collagen, a primitive, non-fibrillar, gel-like collagen that is SOFTER than the mammalian type-I collagen in the tung lò mò's casing but FIRMER than the gelatin in a set jelly, producing a crunch that is halfway between "jelly-wobble" and "cartilage-snap" — a UNIQUE MOUTHFEEL that no other food in any cuisine replicates exactly), COLD (the jellyfish is served at refrigerator temperature, 4-8°C, and it is placed in the bowl AT THE MOMENT OF SERVING, on top of the hot broth — the thermal contrast between the 85°C broth and the 4°C jellyfish is roughly 80°C, the WIDEST TEMPERATURE CONTRAST in any single bowl in the collection), and TRANSLUCENT (the jellyfish ribbons are nearly transparent — they shimmer in the broth like glass noodles, but thicker, and they carry no colour of their own, taking on the broth's orange-tomato tint where they contact it and remaining colourless where they do not).

The jellyfish contributes almost NO FLAVOUR — its taste is: neutral (the salt-and-alum cure removed most of the original marine compounds, and the rinsing removed most of the salt, leaving a bland, neutral, texture-delivery-vehicle). The jellyfish's role is: 100% TEXTURE and 100% TEMPERATURE — the cold crunch in the hot soup, the glass-clear ribbon in the orange broth, the ocean's body in the ocean's flavour. The jellyfish is not eaten for its taste. It is eaten for what it DOES to the mouth: the cold-crunch surprise in a mouthful of hot-soft soup.`,
  ingredientSections: [
    {
      title: 'The broth — ocean fish + tomato + dill',
      items: [
        { amount: 500, unit: 'g', name: 'cá ngừ (tuna) or cá thu (mackerel) — head, bones, tail for the broth; fillets reserved for topping', note: `Saltwater fish ONLY — the ocean's iodine, bromophenols and omega-3 are the broth's identity. Freshwater cá lóc produces a different, lighter, un-oceanic broth. If whole fish unavailable: fish frames (bones + head) from a fishmonger + 200 g fillet for the topping.` },
        { amount: 4, name: 'ripe tomatoes, quartered', note: `Ripe = more lycopene + more free glutamate (ripe tomatoes contain 2-3x the glutamate of unripe). The tomato is the broth's ACID + COLOUR + UMAMI triple-contributor.` },
        { amount: 2, unit: 'L', name: 'water' },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The dill (added last — volatile preservation)',
      items: [
        { amount: 30, unit: 'g', name: 'fresh dill (thì là), roughly chopped', note: `Added in the LAST 5 MINUTES of simmering — the dill's carvone is VOLATILE (boiling point 231°C, but at the broth's 95°C the vapour pressure is sufficient to lose 30-50% of the carvone in 15+ minutes of simmering). The late addition preserves the carvone for the bowl. The dill is also scattered RAW on top of the assembled bowl — double-dill: cooked in broth + raw on surface.` },
      ],
    },
    {
      title: 'The jellyfish',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'prepared jellyfish (sứa), pre-salted and alum-cured, rinsed thoroughly, sliced into 5 mm ribbons',
          note: `Sold at Vietnamese/Asian groceries as "salted jellyfish" — flat, translucent, packed in salt. Must be RINSED 3-4 times in cold water (the cure leaves residual salt and alum that are unpleasant if not removed). After rinsing: soak in ice water 15 min (the ice water firms the collagen-gel crunch and ensures the jellyfish is COLD at serving). Drain just before plating. If unavailable: the bowl loses its signature texture but the fish broth + dill + tomato remain functional.`,
        },
      ],
    },
    {
      title: 'The toppings',
      items: [
        { amount: 200, unit: 'g', name: 'fish fillet (from the same fish), poached in the broth 5 min, flaked' },
        {
          amount: 200,
          unit: 'g',
          name: 'chả cá chiên (fried fish cake), sliced',
          note: `Made from fish paste (pounded fish + salt + pepper) shaped into flat cakes and fried golden. The same myosin-gel-then-fry technique the bún chả cá Quy Nhơn documented. Store-bought chả cá works. The fried cake provides the MAILLARD CRUNCH the poached fillet and the jellyfish do not.`,
        },
      ],
    },
    {
      title: 'The bowl',
      items: [
        { amount: 500, unit: 'g', name: 'bún (rice vermicelli), blanched' },
        { amount: 200, unit: 'g', name: 'bean sprouts, raw' },
        { amount: 30, unit: 'g', name: 'fresh dill, torn (the raw-dill garnish — second dill dose)' },
        { amount: 30, unit: 'g', name: 'rau răm' },
        { amount: 30, unit: 'g', name: 'húng quế' },
        { amount: 4, name: 'limes, in wedges' },
        { amount: 3, name: 'red chilies, sliced' },
        { amount: 2, unit: 'tbsp', name: 'hành phi (fried shallots)' },
        { amount: 2, unit: 'tbsp', name: 'mắm ớt (chili fish sauce — the central coast\'s preferred table condiment)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Simmer the ocean-fish broth 30-40 min — tomato dissolves, dill enters last',
      description: `Place the fish head, bones and tail in a pot with 2 L cold water, ginger and tomato quarters. Bring to a boil. SKIM — the fish produces its scum faster than pork or chicken (the fish-protein denatures at lower temperature, and the scum rises in the first 3 minutes). The saltwater fish's scum is: slightly orange (the tuna's myoglobin is darker than the freshwater fish's), and carrying a faint iodine note (the sea's trace elements, released from the fish's cells in the first minutes of heating).

Simmer 30-40 minutes — the tomatoes dissolve (the cell walls soften and burst, releasing the lycopene into the broth's oil phase — the lycopene, being fat-soluble, dissolves in the fish-oil droplets floating on the broth's surface, tinting the oil ORANGE, and the orange oil distributes through the broth, colouring it a warm amber-orange), the fish bones release their collagen (producing a gelatin-based body that is lighter than the pork-bone broth's but richer than a vegetable broth's), and the fish's inosinate dissolves (the nucleotide-umami that synergises with the tomato's free glutamate — the same 8-15x synergy the collection has documented 25+ times, here between OCEAN FISH inosinate and TOMATO glutamate, a pairing the Italian cuisine also discovered independently: the Mediterranean's pesce al pomodoro is the same synergy in a different format).

POACH THE FILLET: at minute 25, add the reserved fish fillet. Poach 5-7 minutes — the fillet's flesh turns from dark-red (raw tuna) or pale-pink (raw mackerel) to opaque-white/beige (cooked). Lift out. Flake into large pieces. Set aside.

ADD THE DILL: at minute 30 (5 minutes before the end), add the chopped dill to the simmering broth. The dill's carvone dissolves into the broth immediately — the kitchen fills with the warm, sweet, caraway-like aroma that is the central coast's fish-soup signature. The 5-minute window preserves roughly 60-70% of the carvone (vs the 40-50% that would survive a full 40-minute simmer).

STRAIN: remove the fish bones and the tomato solids. The broth is: AMBER-ORANGE (the tomato's lycopene + the fish oil's natural colour), AROMATIC (the dill's carvone arriving in waves — warm, sweet, herbal, unlike any other Vietnamese noodle-soup aroma), carrying a MODERATE BODY (the fish-bone gelatin, lighter than pork-bone gelatin but present enough to coat the lip), and tasting: OCEANIC (the saltwater fish's iodine + bromophenol trace), SWEET-SOUR (the tomato's glutamate-sweetness + citric-acid sourness), and WARM-HERBAL (the dill's carvone, the broth's most distinctive note).

Season: fish sauce, salt, sugar.`,
      tip: `The DILL + TOMATO + FISH pairing is one of the food world's most GEOGRAPHICALLY CONVERGENT combinations: the Vietnamese central coast (bún cá Nha Trang), the Italian Mediterranean (pesce al pomodoro con finocchio), the Scandinavian coast (gravlax with dill and tomato), and the Turkish/Greek Aegean (balık çorbası with dill) all independently developed the same three-ingredient pairing for fish soups and fish preparations. The convergence is CHEMICAL: dill's carvone (sweet, warm) MASKS fish's trimethylamine (the "fishy" off-note that develops post-mortem), tomato's glutamate SYNERGISES with fish's inosinate (the umami-multiplication), and tomato's citric acid BRIGHTENS the fish-oil's heaviness (the acid cuts the fat). The three ingredients solve three problems (fishiness, flatness, heaviness) that every fish-cooking culture faces, and the solution is the same worldwide because the chemistry is universal. The Nha Trang cook and the Neapolitan cook arrived at the same answer from opposite sides of the planet.`,
    },
    {
      title: 'Assemble — hot broth, cold jellyfish, the 80°C contrast',
      description: `Blanch the bún. Divide into 6 bowls. Add bean sprouts.

ARRANGE THE TOPPINGS: flaked poached fish (the ocean's protein, pale, tender), sliced chả cá chiên (the fried fish cake, golden, Maillard-crusted, dense — providing the CRUNCH the soft fish and the soft bún do not carry).

LADLE THE HOT BROTH: the amber-orange, dill-fragrant, tomato-sour, oceanic liquid floods the bowl — submerging the bún and the toppings, the surface carrying small orange oil-droplets (the fish-oil + lycopene combo) and floating dill fronds (the cooked dill from the last 5 minutes of simmering).

THE JELLYFISH — LAST: take the ice-cold, drained, sliced jellyfish ribbons and LAY THEM ON TOP of the hot broth. The jellyfish ribbons: translucent, cold (4-8°C), crunchy, glistening, landing on the 85°C broth's surface and creating an IMMEDIATE THERMAL BOUNDARY — the top of the ribbon is cold (still at refrigerator temperature), the bottom of the ribbon contacts the hot broth (and begins warming at roughly 5-10°C per minute — the jellyfish's 95% water content means it has a HIGH THERMAL MASS per gram, and the warming is SLOW).

The jellyfish must be eaten within 3-4 minutes — by minute 5, the hot broth has warmed the jellyfish to 40-50°C (the thermal contrast drops from 80°C to 30°C, and the cold-crunch surprise is gone), and by minute 8 the jellyfish's collagen-gel begins to SOFTEN in the hot broth (the alum-set collagen network loosens at temperatures above 50°C, and the jellyfish transitions from crunchy-firm to wobbly-soft). The 3-4 minute window is the jellyfish's CRUNCH-AND-COLD WINDOW — shorter than the xôi phồng's 5-minute crispness window, and driven by a different mechanism (WARMING rather than moisture-absorption).

SCATTER raw dill on top (the second dose — the raw dill's carvone is UNCOOKED and therefore 100% intact, and the raw fronds' aroma is sharper and more vivid than the cooked dill in the broth. The double-dill — cooked in broth + raw on surface — provides the carvone at TWO CONCENTRATIONS: moderate-warm from the broth, strong-bright from the surface).

Scatter hành phi, rau răm, húng quế. Set lime, chili, mắm ớt on the side.

THE FIRST SPOONFUL: the spoon passes through the RAW DILL (the sharpest carvone, the first aroma), through the COLD JELLYFISH (the spoon feels the cold — the jellyfish ribbons are 80°C colder than the broth they float on), and into the HOT BROTH below. The spoonful contains: hot broth (amber-orange, oceanic, dill-warm, tomato-sour) + cold jellyfish (translucent, neutral-flavoured, CRUNCHY) + bún (soft, neutral) + a dill frond (raw, sharp).

IN THE MOUTH: the TEMPERATURE CONTRAST hits first — the hot broth (85°C) and the cold jellyfish (4-8°C) contact different parts of the tongue SIMULTANEOUSLY, and the thermal shock is the bún cá Nha Trang's DEFINING SENSATION: the mouth receives HOT and COLD at the same time, from the same spoonful, and the brain processes the contrast as: surprising, refreshing, oceanic (the cold jellyfish's temperature evokes the ocean's cold water, and the association is powerful — the mouth FEELS the sea).

The jellyfish CRUNCHES — the mesogleal collagen-gel fractures under the tooth at 2-4 Newtons, producing a crunch that is: WET (the jellyfish is 80% water even after curing — the crunch releases a small burst of cold, neutral, slightly saline water), SOFT-CRUNCHY (not the hard-snap of the chitin or the shatter of the starch-glass — a YIELDING crunch, like biting through a firm jelly that resists and then gives way, a texture the English language does not have a single word for and that the Vietnamese call "giòn sần sật" — the onomatopoeia of the jellyfish-crunch), and TEMPERATURE-CARRYING (the cold water released from the crunched jellyfish is still at 4-8°C, and the cold burst hits the tongue's thermoreceptors at the same moment the crunch hits the mechanoreceptors — cold + crunch, simultaneously, from one bite).

The dill's carvone arrives at the retronasal olfactory at second 2-3 — warm, sweet, herbal, the central coast's aromatic fingerprint, arriving AFTER the cold-crunch surprise and BEFORE the tomato's sour, and the sequence (cold-crunch → warm-dill → tomato-sour → oceanic-fish) IS the Nha Trang bún cá's specific eating architecture: a 4-event sequence in 4 seconds, each event from a different ingredient, each ingredient from the same ocean.

Bún cá Nha Trang is the Khánh Hòa collection's opening dish and the collection's most OCEANIC bowl — the bowl that tastes most directly of the sea, because every component comes from the sea or exists to complement the sea: the fish (from the sea), the jellyfish (from the sea), the dill (the herb the coast pairs with the sea), the tomato (the fruit the coast uses to brighten the sea), and the lime (the acid the coast squeezes over the sea). The bowl IS the bay, and the bay is Nha Trang, and Nha Trang is the pearl.`,
      tip: `The jellyfish's MESOGLEAL COLLAGEN is a UNIQUE biological material — different from every other collagen the collection has documented: the mammalian type-I collagen in the tung lò mò's casing (fibrillar, strong, snapping), the fish collagen in the cá lóc's skin (fibrillar, softer, gelatinising at lower temperature), and the pork-skin collagen in the bì (fibrillar, chewy, thính-coatable). The jellyfish's mesogleal collagen is: NON-FIBRILLAR (it does not form the long, rope-like fibrils that mammalian and fish collagen form — instead it exists as a dispersed, gel-like, hydrated MATRIX), LOW-PROLINE (the amino acid composition has less proline and hydroxyproline than mammalian collagen, producing weaker inter-chain bonds and a softer gel), and ALUM-CROSSLINKED (the alum cure — potassium aluminium sulfate — introduces artificial cross-links between the collagen chains that the native collagen does not have, and the cross-links are what give the cured jellyfish its CRUNCH: without the alum cure, the jellyfish collapses into a puddle; with it, the collagen network is rigid enough to fracture under the tooth). The alum is the jellyfish's crunch-enabler — the chemical that converts a 95%-water blob into a crunchy, sliceable, food-grade material. The crunch is MANUFACTURED, not natural.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
