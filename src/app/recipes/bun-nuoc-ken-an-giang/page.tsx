'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-nuoc-ken-an-giang',
  title: `Bún Nước Kèn An Giang (Khmer Curry-Fish Noodle Soup — An Giang Style)`,
  subtitle: `Bún in a thick, golden, coconut-milk-and-turmeric curry broth — built on cá lóc flesh pounded to a paste and dissolved into the liquid until the fish vanishes and the broth becomes a creamy, opaque, fish-protein-enriched curry that coats every strand of noodle in a velvety, curcumin-yellow, lemongrass-fragrant, coconut-fat-rich film. The Khmer noodle soup that is NOT the bún nước lèo and NOT the bún cá Châu Đốc but the THIRD member of the Delta's noodle-soup triptych, completing the triangle: funk (bún nước lèo) → clarity (bún cá) → richness (bún nước kèn).`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/bun-nuoc-ken-an-giang.jpg',
  intro: `Bún nước kèn — the name's etymology traces to the Khmer kari (curry) filtered through the Vietnamese phonetic system into "kèn" (the nasal final matches the Khmer vowel) — is the CURRY NOODLE SOUP of the Khmer-Vietnamese community in An Giang, Kiên Giang and the western Mekong Delta. Where the bún nước lèo (Sóc Trăng) is defined by its FERMENTED-FISH FUNK (mắm bò hóc, the Khmer prahok dissolved into a pork-bone stock), and the bún cá Châu Đốc is defined by its TURMERIC-GOLDEN CLARITY (mắm cá in a clear, skimmed fish-and-lemongrass broth), the bún nước kèn is defined by its COCONUT-CURRY RICHNESS — a thick, opaque, creamy, turmeric-yellow, curry-spiced, coconut-milk-based broth that is closer to a Thai gaeng or a Malay laksa than to any other Vietnamese noodle soup.

The bún nước kèn's broth is built by a technique no other Vietnamese noodle soup in the collection uses: the fish (cá lóc or cá rô — snakehead or climbing perch) is POUNDED TO A PASTE, mixed with the curry spices and the coconut milk, and simmered until the fish-paste DISSOLVES completely into the liquid. The fish's protein denatures, disperses into the coconut milk's emulsion as microscopic particles, and the broth becomes: OPAQUE (the fish-protein particles scatter light, the same opacity the mắm bò hóc's dissolved fish fragments produced in the bún nước lèo — but here the opacity is GOLDEN rather than brown, because the turmeric's curcumin colours the coconut-fat globules that carry the scattered light), THICK (the dissolved fish-protein + the coconut cream's fat + the rice-flour thickener together produce a broth viscosity closer to a SAUCE than to a soup — the bún nước kèn is the thickest noodle-soup broth in the collection), and carrying a FISH FLAVOUR that is EVERYWHERE but INVISIBLE (no fish pieces in the bowl — the fish has vanished into the broth, and the eater tastes fish in every spoonful without ever seeing a flake or a fillet).

The curry spice is the Khmer-Delta version — not the Chăm masala the cơm nị cà ri documented (which is cumin-dominant, Indian Ocean-derived), but a KHMER KROEUNG-influenced paste: lemongrass-dominant, with turmeric, galangal, garlic, shallot and a moderate chili heat. The kroeung (the Khmer aromatic paste, the Cambodian equivalent of the Thai curry paste) is the mother-paste of Khmer cooking, and its LEMONGRASS-FORWARD character (the paste is roughly 40% lemongrass by weight, vs the Thai paste's 20-25%) gives the bún nước kèn its specific aromatic identity: citral-dominant, turmeric-warm, coconut-rich, and carrying the lemongrass's brightness into a broth that would otherwise be heavy with coconut fat and fish protein.

The bowl is the An Giang collection's FINALE — the 10th dish, completing a province-collection that has documented: the bún cá Châu Đốc (the flag dish, the three-lemongrass architecture), the mắm thái (the naked ferment, the five-mechanism bitter-management's cousin for funk), the lẩu cá linh (the ephemeral, the monsoon's recipe), the tung lò mò (the Chăm sausage, the fourth charcuterie, the seventh crunch), the gỏi sầu đâu (the extreme bitter, the complete management set), the cơm tấm Long Xuyên (the broken grain, the poverty-to-icon), the bánh bò thốt nốt (the palm-sugar honeycomb, the terroir-chain), the cháo bò Tri Tôn (the ghost ingredient, the ninth cháo), the khô cá tra phồng (the protein puff, the ninth muối tiêu chanh), and now the bún nước kèn — the curry-coconut-fish noodle that places An Giang's Khmer kitchen alongside the Sóc Trăng Khmer kitchen (bún nước lèo) and the Chăm kitchen (cơm nị cà ri) as the three South/Southeast Asian-influenced culinary traditions operating within the Vietnamese food map.`,
  ingredientSections: [
    {
      title: 'The curry-fish broth',
      items: [
        { amount: 500, unit: 'g', name: 'cá lóc (snakehead) or cá rô (climbing perch), filleted, flesh only', note: `The fish will be POUNDED TO A PASTE and dissolved into the broth — the fillet disappears entirely. The fish provides: protein (thickening), glutamate + inosinate (umami), and the Mekong's river-fish identity.` },
        { amount: 400, unit: 'ml', name: 'coconut milk (full-fat, first pressing — nước cốt dừa)', note: `THICK coconut cream — the broth's fat base, the curcumin's vehicle, the richness that makes bún nước kèn the HEAVIEST noodle soup in the collection.` },
        { amount: 200, unit: 'ml', name: 'coconut milk (thin, second pressing — nước dừa) or water' },
        { amount: 500, unit: 'ml', name: 'water' },
        { amount: 2, unit: 'tbsp', name: 'rice flour, dissolved in 3 tbsp water', note: `The THICKENER — the rice-flour slurry gelatinises in the simmering broth, adding viscosity that the dissolved fish-protein and the coconut cream alone do not fully provide. The three thickeners (fish protein + coconut fat + rice starch) produce the broth's characteristic TRIPLE-THICK consistency.` },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The kroeung-style curry paste',
      items: [
        { amount: 4, name: 'stalks lemongrass, sliced thin (the DOMINANT aromatic — 40% of paste by weight)' },
        { amount: 2, unit: 'tbsp', name: 'ground turmeric (or 30 g fresh turmeric, sliced)' },
        { amount: 15, unit: 'g', name: 'galangal, sliced', note: `The Khmer paste's galangal — the same ACA-containing, cold-sharp-piney rhizome the tré Bình Định and the bún bò Huế documented. Here at a lower dose, contributing a background sharpness beneath the lemongrass's brighter citral.` },
        { amount: 6, name: 'cloves garlic' },
        { amount: 4, name: 'shallots' },
        { amount: 3, name: 'dried red chilies, soaked and drained (or 1 tbsp chili powder)' },
        { amount: 1, unit: 'tsp', name: 'shrimp paste (mắm ruốc — optional, the Khmer umami-boost)' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The bowl',
      items: [
        { amount: 500, unit: 'g', name: 'bún (round rice vermicelli), blanched' },
        { amount: 200, unit: 'g', name: 'bean sprouts, raw' },
        { amount: 100, unit: 'g', name: 'banana blossom, shredded' },
        { amount: 100, unit: 'g', name: 'rau muống, cut 5 cm' },
        { amount: 30, unit: 'g', name: 'húng quế' },
        { amount: 30, unit: 'g', name: 'rau răm' },
        { amount: 4, name: 'limes, in wedges' },
        { amount: 3, name: 'red chilies, sliced' },
        { amount: 2, unit: 'tbsp', name: 'hành phi (fried shallots)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Pound the fish, make the paste, bloom in coconut cream — the curry-base builds',
      description: `POUND THE FISH: place the cá lóc fillets in a mortar (or a food processor). Pound (or pulse) to a PASTE — the fish breaks down from flaky fillets to a smooth, sticky, pale-pink paste in 3-5 minutes of pounding. The paste should be: smooth (no visible flakes — every fibre broken), sticky (the myosin, extracted by the pounding's mechanical shearing, acts as a binding matrix — the same myosin-extraction the giò lụa's pounding documented, here producing a paste rather than a gel), and carrying a faint, clean, river-fish sweetness.

MAKE THE PASTE: pound (or blend) the lemongrass, turmeric, galangal, garlic, shallots, soaked chilies and shrimp paste (if using) into a fine, fragrant, golden-orange paste. The lemongrass dominates — the paste's aroma should be: CITRAL-FORWARD (the lemongrass's 40% share ensuring that citral is the first and loudest note), TURMERIC-WARM (the ar-turmerone beneath the citral), and GALANGAL-SHARP (the ACA's cold-piney bite at the finish).

BLOOM: heat the oil in a heavy pot over medium heat. Add the curry paste — fry 3-4 minutes, stirring constantly (the blooming step every curry in the collection has documented — the fat-soluble volatiles dissolve into the oil, the raw-paste's harshness converts to cooked-paste's warmth, and the kitchen fills with the KROEUNG'S aroma: lemongrass-turmeric-galangal-garlic-chili, the Khmer kitchen's aromatic signature).

ADD THE FISH PASTE: stir the pounded fish into the bloomed curry paste. Fry together 2-3 minutes — the fish paste and the curry paste MERGE (the fish's protein coats in the curry's fat-soluble spice compounds, and the two pastes become one: a golden, spice-infused, fish-protein mass that will dissolve into the liquid in the next step).

ADD THE COCONUT MILK: pour the thick coconut cream first — stir vigorously. The fish-curry paste dissolves into the coconut cream progressively (the fat emulsion breaks up the paste's protein clumps, dispersing the fish's myosin into microscopic particles that distribute through the liquid). Add the thin coconut milk and the water. Stir.

SIMMER 30-40 minutes — the fish-protein paste DISSOLVES completely. The broth transforms:

MINUTE 0-10: chunky (visible fish-paste fragments, the broth is heterogeneous).
MINUTE 10-20: dispersing (the fragments break down, the broth thickens as the dissolved protein contributes viscosity).
MINUTE 20-30: smooth (no visible fragments — the fish has vanished, its protein distributed uniformly through the coconut-curry liquid).
MINUTE 30-40: FULLY INTEGRATED (the broth is: opaque, golden-yellow, thick, coconut-rich, fish-savoury, lemongrass-fragrant, and carrying a body that no clear broth matches — the dissolved fish-protein + coconut fat + the rice-flour slurry together produce a liquid that coats the spoon, clings to the finger, and feels VELVETY on the tongue).

ADD the rice-flour slurry at minute 25 — stir in, simmer 10 more minutes (the starch gelatinises, contributing the final thickening). Season: fish sauce, sugar, salt.

The finished broth should be: GOLDEN (turmeric's curcumin dissolved in the coconut fat — the colour is VIVID, deeper than the bún cá Châu Đốc's pale-gold, approaching the saffron-yellow of a Thai yellow curry), THICK (the thickest noodle-soup broth in the collection — pourable, but slowly, and coating the lip after every sip in a visible, golden, creamy film), and tasting: COCONUT (the dominant flavour — the lauric acid's tropical richness, the cream's fat-coating, the southern-and-Southeast-Asian identity), FISH (the dissolved protein's umami, tasted everywhere but visible nowhere — the INVISIBLE FISH, the complement to the cháo bò's invisible mắm), LEMONGRASS (the citral, cutting the coconut's richness from the TOP the way the lime cuts from the SIDE), and CURRY-WARM (the turmeric + galangal + chili, providing the spice-heat that keeps the broth from tasting like a fish-flavoured coconut pudding).`,
      tip: `The fish-paste dissolution technique — pounding the fish to a paste, then dissolving it into the broth until no visible fish remains — is the bún nước kèn's unique contribution to the collection's broth-building methods. The technique produces a broth that is PROTEIN-ENRICHED at the molecular level: the dissolved fish myosin (present in the broth as denatured, dispersed, microscopic protein particles roughly 1-10 μm in diameter) contributes: VISCOSITY (the protein particles increase the liquid's internal friction, the same way egg-yolk protein thickens a custard), UMAMI (the denatured protein releases free glutamate and inosinate as the simmering's heat cleaves peptide bonds — the broth's umami INCREASES over the 40 minutes of simmering as more protein hydrolyses), and MOUTHFEEL (the protein particles, dispersed in the coconut cream's fat emulsion, create a COLLOIDAL system — protein-in-fat-in-water — that the tongue perceives as "velvety," "creamy," "rich" beyond what the coconut cream alone provides). The dissolved fish is the broth's INVISIBLE ARCHITECTURE — the structural component the eater feels but does not see.`,
    },
    {
      title: 'Assemble — bún, golden curry-pour, no fish in sight, all fish in taste',
      description: `Blanch the bún. Divide into 6 bowls. Add bean sprouts, shredded banana blossom, rau muống.

LADLE THE GOLDEN CURRY BROTH — the thick, opaque, curcumin-yellow, coconut-creamy liquid floods the bowl, submerging the bún in a golden lake that is thicker than any other noodle-soup broth in the collection (the phở's clear broth pours like water; the bún nước kèn's curry broth pours like cream). The bún disappears beneath the opaque surface — invisible, like the fish that vanished into the broth that covers them.

Top: hành phi, húng quế, rau răm. Set lime, chili on the side.

THE BOWL: golden — entirely golden. The broth is golden (turmeric + coconut). The fried shallots are golden. The banana blossom is pale-gold. The bean sprouts are pale. The herbs are the only green, and their green is muted by the golden broth they sit in. The bún nước kèn is the most MONOCHROMATIC bowl in the collection — where the bún nước lèo was brown, the bún cá was amber-orange, the bún đỏ was crimson, the bún nước kèn is GOLD, a single, saturated, warm colour that says: coconut, turmeric, richness, Khmer.

THE FIRST SPOONFUL: the spoon lifts a pool of the golden broth — thick, clinging to the spoon (the triple-thickener's viscosity visible in the way the broth does not drip but SLIDES from the spoon in a slow, creamy, golden sheet). The spoonful enters the mouth and the palate receives:

COCONUT (the first and loudest note — the lauric acid's tropical fat coating the tongue in a warm, rich, creamy film that IS the broth's identity. The coconut cream is to the bún nước kèn what the mắm bò hóc is to the bún nước lèo: the non-negotiable, the signature, the thing without which the bowl is not the bowl).

FISH (arriving 1-2 seconds after the coconut — the dissolved protein's glutamate and inosinate, perceived as SAVOURY DEPTH beneath the coconut's sweetness. The fish is invisible but the fish is EVERYWHERE — every spoonful carries the same fish-umami, because the fish was dissolved UNIFORMLY into the broth, and there is no fish-free zone in the bowl).

LEMONGRASS (arriving at the retronasal olfactory at second 2-3 — the citral, volatilised by the broth's heat, rising through the nasal passage, arriving BRIGHT and CLEAN and cutting the coconut's heavy tropical richness with a sharp, green, citrus-like counterpoint that LIFTS the spoonful from "heavy" to "balanced").

CURRY-WARMTH (the chili's capsaicin arriving at second 3-4 — mild, not aggressive, a warm glow at the tongue's back that says "this is a curry" without saying "this is painful").

The bún: pulled from the golden broth, each strand coated in the thick, clinging, golden-curry film — the strand is not WHITE (as bún normally appears) but GOLDEN (the broth's pigment has deposited on the noodle's starch surface in the same way the turmeric deposited on the cơm nị's rice grains). The coated bún strand carries the broth's FULL FLAVOUR on its surface — every bite of noodle is a bite of curry, because the curry clings.

Squeeze lime — the citric acid BRIGHTENS the entire bowl: the coconut's heaviness lightens, the fish-umami sharpens, and the lemongrass's citral receives a reinforcing dose of citrus-acid that pushes the aromatic register from "warm" to "vivid." The lime is the bowl's EDITOR — it does not change the content but it changes the EMPHASIS, shifting the bowl's balance from "rich and heavy" toward "rich and bright."

Bún nước kèn An Giang closes the An Giang collection with the province's KHMER CURRY IDENTITY — the South/Southeast Asian curry tradition that the Vietnamese kitchen's own noodle soups (phở, bún bò Huế, bún riêu) do not contain, and that exists in the Vietnamese food map ONLY in the Khmer-populated provinces of the western Delta. The bún nước kèn is the evidence that the Vietnamese food map has a CURRY CHAPTER — written by the Khmer, in coconut milk, in turmeric, in dissolved fish and in lemongrass, and read by anyone who follows the golden broth to its source.

TEN AN GIANG DISHES, ONE PROVINCE, THREE CULTURES: Vietnamese (bún cá Châu Đốc, mắm thái, cơm tấm Long Xuyên), Khmer (lẩu cá linh, cháo bò Tri Tôn, bánh bò thốt nốt, bún nước kèn), and Chăm (tung lò mò). Plus the cross-cultural: gỏi sầu đâu (Indian-origin tree, Khmer-Vietnamese salad), khô cá tra phồng (Mekong industrial fish, Delta-wide snack). Three traditions, one river, one market, and the market's morning — from the cháo bò at 5 AM to the khô cá tra phồng with beer at 9 PM — is the An Giang day, eaten.`,
      tip: `The bún nước kèn completes the Mekong Delta's NOODLE-SOUP TRIPTYCH at a higher resolution than the earlier summary: the three bowls — bún nước lèo (Sóc Trăng, Khmer, mắm bò hóc), bún cá Châu Đốc (An Giang, Vietnamese, mắm cá + turmeric), and bún nước kèn (An Giang, Khmer, coconut curry) — represent three BROTH PHILOSOPHIES: FERMENTED (the bún nước lèo's broth is defined by dissolved fermented fish — funk is the identity), CLEAR (the bún cá's broth is defined by skimmed, strained, transparent fish-bone stock — clarity is the identity), and RICH (the bún nước kèn's broth is defined by dissolved fish-paste in coconut curry — thickness is the identity). Three bowls, three philosophies, three ways to put fish in a noodle soup: ferment it (funk), simmer its bones (clarity), or dissolve its flesh (richness). The fish is the constant. The technique is the variable. And the variable determines the bowl's colour, texture, aroma, mouthfeel and cultural origin — everything except the protein, which is always the Mekong's fish.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
