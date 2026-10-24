'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'mien-luon-ninh-binh',
  title: `Miến Lươn Ninh Bình (Glass Noodle Eel Soup — Ninh Bình's Clear-Broth Comfort)`,
  subtitle: `Miến dong (canna-starch glass noodles) — translucent, slippery, absorbing broth with every second in the bowl — swimming in a CLEAR, GOLDEN, eel-bone broth with stir-fried eel fillets piled on top: some crispy-fried (lươn chiên giòn), some soft-sautéed (lươn xào), each piece carrying the paddy-field eel's specific sweetness — a clean, mineral, slightly muddy-earthy-then-sweet flavour that no ocean fish and no farmed protein replicates.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/mien-luon-ninh-binh.jpg',
  intro: `Miến lươn — glass noodles with eel — exists across the northern Vietnamese provinces (Nghệ An's miến lươn is arguably the most famous nationally), but Ninh Bình's version has its OWN CHARACTER: a CLEARER broth (the Ninh Bình cooks emphasise broth-clarity over broth-richness, skimming obsessively and using fewer bones per litre than the Nghệ An version), a DUAL-TEXTURE eel topping (both crispy-fried AND soft-sautéed eel on the same bowl — the Nghệ An version typically offers one or the other, not both), and the miến dong (canna-starch glass noodle) rather than the miến tàu (mung-bean glass noodle the southern versions use).

THE EEL: lươn đồng (Monopterus albus — the Asian swamp eel, also called the rice-paddy eel) is: a FRESHWATER EEL that lives in the paddy-fields, the irrigation ditches, and the muddy ponds of the Red River delta's rice-growing lowlands. Ninh Bình — a major rice-producing province — has extensive paddy systems, and the lươn đồng is: caught WILD from the paddies (the eel burrows into the paddy's soft mud during the dry season and emerges to feed during the wet season; the catching is: by hand, by bamboo trap, or by night-fishing with a headlamp and a hook — the same artisanal, small-scale, one-eel-at-a-time harvesting the collection's cá lóc and cá linh documented for their respective ecosystems).

The eel's FLAVOUR is one of Vietnamese freshwater cuisine's most SPECIFIC tastes: a clean, mineral, slightly MUDDY-EARTHY base-note (the geosmin — the same compound that gives beets, catfish and freshly-turned soil their "earthy" aroma, produced by Streptomyces bacteria in the paddy-mud and absorbed through the eel's skin during its months of mud-burrowing) overlaid with a SWEET, DELICATE, almost SHELLFISH-LIKE top-note (the eel's free amino acids — glycine and alanine at concentrations of 0.3-0.5% each, lower than shrimp's glycine but higher than most freshwater fish's — producing a sweetness the Vietnamese describe as "ngọt thịt," meat-sweet, the intrinsic sweetness of the protein itself rather than any added sugar). The geosmin + the glycine-sweetness together produce the lươn's IDENTITY FLAVOUR: earthy-then-sweet, muddy-then-clean, the flavour that says "paddy field" to any Vietnamese eater.

The GEOSMIN MANAGEMENT is the miến lươn cook's specific skill: geosmin (trans-1,10-dimethyl-trans-9-decalol) is: detectable by the human nose at 5-10 parts per TRILLION (one of the lowest detection thresholds of any food-volatile — the nose is extraordinarily sensitive to geosmin because the compound signals the presence of water in dry environments, an evolutionary advantage), and the eel's skin and blood carry geosmin at 50-200 ppb (roughly 5,000-20,000x the detection threshold). The cook manages the geosmin through:

CLEANING: the eel is rubbed with SALT and VINEGAR (or lime juice) — the acid denatures the skin's mucus-layer (where the geosmin concentrates), and the salt draws moisture from the skin's surface (the moisture carries dissolved geosmin with it). The cleaning removes 40-60% of the surface-geosmin.

BLANCHING: the cleaned eel is blanched briefly in boiling water with ginger and lemongrass — the boiling water's heat volatilises a further 20-30% of the geosmin (the compound's boiling point is 270°C, but at 100°C in water its vapour pressure is sufficient for partial evaporation — the ginger and lemongrass's strong aromatics mask the geosmin-release during blanching, preventing the kitchen from smelling "muddy").

STIR-FRYING at high heat: the eel-fillets are stir-fried in hot oil (200°C+), and the high heat volatilises an additional 10-20% of the residual geosmin. The total removal: 70-90% (the finished eel retains 10-30% of its original geosmin, which at 5-60 ppb is: ABOVE the detection threshold but BELOW the "muddy" threshold — the residual geosmin is perceived as "earthy" rather than "muddy," and the earthiness is: desirable, the lươn's terroir, the paddy in the protein).

THE NOODLE: miến dong (made from the starch of the dong riềng plant — Canna edulis, the edible canna, a highland-and-midland root crop whose starch is: finer-grained than mung-bean starch, more ELASTIC when cooked, and more TRANSLUCENT when hydrated — the miến dong noodle in the bowl is nearly INVISIBLE, a glass-thread that the eye loses in the broth and the mouth finds by its SLIPPERY, ELASTIC, SPRINGY texture). The miến dong is: DIFFERENT from the miến tàu (mung-bean glass noodle — the southern standard): miến dong is MORE ELASTIC (the canna-starch's amylose chains are longer than the mung-bean's, and the longer chains form a more EXTENSIBLE gel — the noodle stretches 2-3x before breaking, vs the mung-bean noodle's 1.5-2x), MORE TRANSLUCENT (the canna-starch's refractive index is closer to water's than the mung-bean's — the noodle is nearly invisible in broth), and MORE ABSORBENT (the canna-starch's gel-network has larger pores, and the noodle absorbs broth at roughly 2x the rate of mung-bean noodle — the miến dong in the bowl SWELLS visibly over 5-10 minutes, absorbing broth and thickening, and the last spoonful's noodle is FATTER and MORE FLAVOURED than the first spoonful's).`,
  ingredientSections: [
    {
      title: 'The eel',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'lươn đồng (Asian swamp eel), cleaned, gutted, cut into 5-6 cm sections',
          note: `Ask the fishmonger to CLEAN and DEBONE (the eel's skeleton is: a single, continuous, cartilaginous spine with fine rib-bones — the spine pulls out cleanly if the eel is slit along the belly and the spine is lifted from head to tail in one motion). If buying whole: rub with salt + vinegar, rest 10 min, rinse — the acid-salt cleaning removes the mucus and 40-60% of the geosmin. Substitute if unavailable: freshwater eel (unagi-grade), or — with significant flavour-difference — firm white fish (the earthiness will be absent).`,
        },
      ],
    },
    {
      title: 'The broth',
      items: [
        { amount: 1.5, unit: 'L', name: 'water' },
        { amount: 200, unit: 'g', name: 'eel bones and head (reserved from filleting — the broth\'s foundation)', note: `The eel-bone broth is: LIGHT (eel-bones are small, thin, cartilaginous — they produce a DELICATE, CLEAR, LIGHTLY-GELATINOUS broth that is thinner than pork-bone or beef-bone broth but richer than a vegetable stock). The cartilage contributes: CHONDROITIN SULFATE (a glycosaminoglycan that dissolves into the broth and produces a faint, silky, slightly-viscous mouthfeel — the same "body" collagen-gelatin provides but from a DIFFERENT molecule).` },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
        { amount: 2, name: 'stalks lemongrass, bruised' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
      ],
    },
    {
      title: 'The dual-texture eel topping',
      items: [
        { amount: 2, unit: 'tbsp', name: 'neutral oil (for stir-frying half the eel — lươn xào)' },
        { amount: 200, unit: 'ml', name: 'neutral oil (for deep-frying the other half — lươn chiên giòn)' },
        { amount: 2, unit: 'tbsp', name: 'rice flour or cornstarch (the crispy-fried eel\'s coating — a light dusting, not a thick batter)' },
        { amount: 2, name: 'cloves garlic, minced' },
        { amount: 1, unit: 'tsp', name: 'ground turmeric (the eel-stir-fry\'s traditional colour — the turmeric tints the eel GOLDEN, the Ninh Bình/Nghệ An visual signature)' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
      ],
    },
    {
      title: 'The bowl',
      items: [
        { amount: 200, unit: 'g', name: 'miến dong (canna-starch glass noodles), soaked in warm water 10 min until pliable, drained', note: `Miến dong = the Ninh Bình/northern noodle. More elastic, more translucent, more absorbent than miến tàu. Sold at Vietnamese groceries as "miến dong" or "miến Bắc." If unavailable: mung-bean glass noodles (miến tàu) — less elastic, less absorbent, but functional.` },
        { amount: 30, unit: 'g', name: 'hành lá (scallion), sliced' },
        { amount: 30, unit: 'g', name: 'rau mùi (cilantro)' },
        { amount: 2, unit: 'tbsp', name: 'hành phi (fried shallots)' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
        { amount: 4, name: 'limes, in wedges' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 1, unit: 'tbsp', name: 'ớt bột (chili flakes — optional, for the eater who wants heat)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the eel-bone broth, prepare dual-texture eel — clear + crispy + soft',
      description: `BROTH: place the eel bones and head in a pot with 1.5 L water, bruised ginger and bruised lemongrass. Bring to a boil. SKIM aggressively for 10 minutes — the eel-bone scum is: lighter and less voluminous than beef-bone scum (the eel's small, cartilaginous bones produce less coagulable protein), but the scum MUST be removed completely because eel-scum carries the highest concentration of GEOSMIN (the muddy-compound concentrates in the blood and the bone-marrow, and the blanching releases it into the scum — removing the scum removes the geosmin).

Simmer 30-40 minutes (shorter than beef-bone broth — the eel's thin, cartilaginous bones dissolve their collagen and chondroitin in 30-40 minutes vs the beef-bone's 3-6 hours). The broth is: CLEAR (if well-skimmed — a pale gold, translucent, delicate), LIGHTLY GELATINOUS (the chondroitin + the collagen-gelatin from the cartilage produce a broth that coats the lip very lightly — not the heavy lip-coat of a pork-bone broth but a WHISPER of body, just enough to distinguish it from water), and SWEET (the eel's dissolved glycine + alanine, the same amino-acid-derived sweetness the shrimp's glycine documented, here at a lower concentration but still detectable as a clean, meat-sweet background).

Season: fish sauce, salt, sugar. Strain. The finished broth: clear-gold, faintly sweet, faintly gelatinous, carrying a controlled-earthy note (the residual geosmin at 5-20 ppb — earthy, not muddy).

DUAL-TEXTURE EEL: divide the cleaned, filleted eel into two batches:

BATCH 1 — LƯƠN XÀO (soft stir-fried): toss with turmeric, garlic, fish sauce, pepper. Heat 2 tbsp oil in a wok to smoking. Stir-fry 2-3 minutes — the turmeric tints the eel GOLDEN (the curcumin binds to the eel's surface protein, the same protein-binding every turmeric-recipe documented), the garlic's allicin converts to ajoene (sweet-garlic), and the eel-fillets are: COOKED THROUGH (the flesh is opaque, flaky, tender), GOLDEN-YELLOW (the turmeric), and SOFT (no crust — the wok's heat was high enough for Maillard on the garlic but not on the eel's un-coated surface). The soft-fried eel is the bowl's TENDER component — the eel that dissolves into the noodles, that the miến's slippery strands wrap around, that the broth soaks into.

BATCH 2 — LƯƠN CHIÊN GIÒN (crispy deep-fried): dust the eel-fillets lightly with rice flour or cornstarch (the thinnest possible coating — 0.5 mm of starch-dusting, not a thick batter). Heat 200 ml oil to 180°C. Fry the dusted eel-pieces 3-4 minutes until: GOLDEN-BROWN (the Maillard on the starch-coating), CRISPY (the dehydrated starch-coating is: a starch-glass shell, 0.5-1 mm thick, that SHATTERS when bitten — the same starch-glass crunch the collection has documented 30+ times, here at the THINNEST application: a micro-crust rather than a structural shell), and the eel inside: COOKED, FLAKY, but still MOIST (the thin starch-shell sealed the eel's surface in the frying's first 15 seconds, and the sealed surface prevented moisture-loss during the remaining 3+ minutes of frying — the same moisture-retention the tempura-batter and the bánh cống's starch-seal documented).

The crispy eel is the bowl's CRUNCH component — the element that RESISTS the broth (for 2-3 minutes before the broth softens the starch-shell) and that provides the textural contrast the soft-fried eel and the slippery miến cannot.`,
      tip: `The GEOSMIN SENSITIVITY spectrum: the 5-10 ppt detection threshold makes geosmin one of the most detectable food-volatiles (for comparison: vanillin is detectable at ~20 ppb, roughly 2,000-4,000x higher than geosmin's threshold). The extreme sensitivity means: even after 70-90% removal through cleaning, blanching and frying, the residual 5-60 ppb is STILL DETECTABLE. The cook's goal is not to ELIMINATE the geosmin (which would require industrial-scale activated-charcoal filtration) but to REDUCE it to the range where the perception shifts from "muddy" (unpleasant, dominant) to "earthy" (pleasant, background) — the same threshold-management the mắm's fermented-fish-funk documented (the ghost-ingredient principle: sub-threshold-funk, supra-threshold-umami). The eel's geosmin at 5-20 ppb is: the EARTHY-PLEASANT zone, the zone where the geosmin says "paddy field" without saying "mud puddle."`,
    },
    {
      title: 'Assemble — glass noodles absorb, dual eel tops, the bowl evolves',
      description: `BLANCH the soaked miến dong in boiling water for 30-60 seconds — the noodles go from opaque-white (dry) to TRANSLUCENT-CLEAR (hydrated) in 15 seconds, the canna-starch's gel-network absorbing water and becoming nearly invisible. Drain immediately (over-blanching = the noodles OVER-ABSORB and become mushy-soft; the 30-60 second blanch produces noodles that are: pliable, translucent, slightly al-dente, with 60% of their absorption-capacity still AVAILABLE for the broth they are about to receive).

ASSEMBLE: divide the blanched miến dong into 4 bowls. Arrange the SOFT STIR-FRIED EEL (the golden, turmeric-tinted, tender pieces) on one side of the noodle-bed. Arrange the CRISPY DEEP-FRIED EEL (the golden-brown, starch-crusted, shattering pieces) on the other side — the two eel-preparations SEPARATED on the bowl's surface (the separation is visual + practical: the soft eel can be submerged in broth immediately, but the crispy eel should sit ABOVE the broth-line for as long as possible, preserving its crunch).

LADLE the hot broth — pour CAREFULLY: fill the bowl to the noodle-level but NOT over the crispy eel (the crispy eel sits on the noodle-bed's surface like an island above the broth-sea, and the broth's heat reaches the crispy eel's underside but the broth's LIQUID does not contact the crispy eel's starch-shell — the crunch is preserved for the eater who reaches for the crispy pieces first).

Scatter scallion, cilantro, hành phi, black pepper. Set lime and chili on the side.

THE BOWL'S FIRST MOMENT: the visual is — GLASS (the miến dong, nearly invisible, the broth's golden colour visible THROUGH the noodles as if looking through water at a golden stone), GOLDEN (the turmeric-fried eel, vivid yellow on one side), BROWN-CRISPY (the deep-fried eel, dark golden, texturally distinct from the soft eel — the two preparations are: visually distinguishable even from arm's length, the soft = bright-golden-smooth, the crispy = dark-golden-rough), and the broth beneath: clear, pale-gold, steaming, the eel-bone's sweet-earthy aroma rising with the steam.

THE EATING — three phases:

PHASE 1 — THE CRISPY EEL (eat first, while the crunch lasts): pick up a piece of crispy eel — the starch-shell SHATTERS (the thin crunch, 2-3 N, the micro-crust's starch-glass fracturing into fragments that spray lightly — the crunch is DELICATE, not structural, more like a thin wafer than a thick cracker). Inside: the eel-flesh, flaky, moist, carrying the geosmin's earthy-pleasant at 5-20 ppb (the frying's heat volatilised the muddiest geosmin, leaving the earthy residue), and the glycine-sweet (the amino-acid sweetness, concentrated by the frying's dehydration — the fried eel is sweeter per gram than the raw eel because the water-loss concentrated the glycine by 20-30%).

PHASE 2 — THE SOFT EEL + MIẾN (the main course): the soft-fried eel has absorbed broth from below (the tender, un-crusted fillets have been soaking since the broth was ladled). The turmeric-golden pieces are now: broth-infused, warm-through, the turmeric's curcumin dissolved into the broth (tinting the surrounding broth faintly yellow at the eel's vicinity). Pick up a tangle of miến dong with a piece of soft eel — the noodles are: SLIPPERY (the canna-starch's smooth gel-surface, nearly frictionless — the chopsticks must grip firmly, and the noodles slide against the tongue like wet silk), ELASTIC (stretch a strand — it extends 2-3x before breaking, the canna-starch's long-chain amylose producing a SPRINGY, almost-rubbery elasticity that the mung-bean noodle lacks), and BROTH-INFUSED (the miến dong has been absorbing broth continuously since the ladle — at minute 2-3, each strand has swelled by 30-40%, and the broth's eel-sweet + ginger-warm + fish-sauce-savoury has penetrated the noodle's interior, making the noodle itself FLAVOURED rather than bland).

The soft-eel + miến + broth spoonful is: slippery (the noodle), tender (the eel), sweet-earthy (the eel's glycine + the controlled geosmin), warm-gingery (the broth's ginger contribution), and light (the eel-bone broth's delicate body — no heavy fat, no thick gelatin, just a whisper of chondroitin-silkiness that the tongue registers as "this broth has a SOUL" without being able to name what the soul is made of).

PHASE 3 — THE BROTH ALONE (the finale): by the bowl's last third, the miến dong has absorbed most of the broth (the canna-starch's high absorption-rate means the noodle-to-broth ratio SHIFTS during the eating — the bowl that started as "noodles in broth" ends as "noodles that ATE the broth"). The remaining broth is: CONCENTRATED (the noodle's absorption removed water but left the dissolved amino acids, the gelatin and the geosmin behind — the last spoonfuls of broth are RICHER than the first), and the concentrated broth is: the bowl's summary, the eel-bone's essence, the paddy-field's gift — earthy, sweet, warm, clear, and carrying the faint, controlled, paddy-mud geosmin that is the lươn's terroir and the miến lươn's identity.

Miến lươn Ninh Bình is the collection's most NOODLE-ACTIVE bowl — the bowl where the noodle is not a passive vehicle but an ACTIVE PARTICIPANT that changes during the eating: absorbing broth, swelling, concentrating the remaining liquid, and transforming the bowl's broth-to-noodle ratio from 2:1 at the start to 1:2 at the end. The miến dong is a SPONGE masquerading as a noodle, and the sponge-action is the bowl's HIDDEN DRAMA — invisible to the eye (the noodle is translucent), felt by the mouth (the noodle is fatter at minute 5 than at minute 1), and tasted in the broth (which is richer at the end because the noodle stole its water and left its flavour behind).`,
      tip: `The miến dong's CANNA STARCH is one of Vietnamese cuisine's most UNDER-DOCUMENTED starches: the dong riềng plant (Canna edulis) is grown principally in the northern midland provinces (Bắc Kạn, Sơn La, Hòa Bình, and Ninh Bình's hilly western districts), and the starch-extraction is: MANUAL (the roots are harvested, peeled, grated, washed, and the starch-water is settled in basins — the starch sinks, the water is decanted, and the settled starch is dried in the sun). The canna-starch granules are: LARGE (30-100 μm — the largest food-starch granules of any commonly-used crop, 3-10x larger than corn's and 10-30x larger than rice's), and the large granules produce the miến dong's specific properties: MORE TRANSLUCENT (larger granules scatter less light when gelatinised), MORE ELASTIC (the longer amylose chains in the large granules form a more extensible gel-network), and MORE ABSORBENT (the larger pores between the swollen granules hold more liquid). The canna-starch noodle is therefore: a DIFFERENT MATERIAL from the mung-bean noodle, and the difference is in the granule-size — the same granule-size-determines-texture principle the mèn mén's corn-vs-rice comparison documented, here applied to NOODLE-STARCH rather than to STAPLE-GRAIN.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
