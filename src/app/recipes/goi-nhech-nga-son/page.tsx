'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Gỏi Nhệch Nga Sơn — Nga Sơn Swamp Eel Salad
//  Thanh Hóa #8
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. SWAMP EEL (Monopterus albus) MUCIN GLYCOPROTEIN
//     RHEOLOGY — surface mucus layer 50-200 µm thick,
//     mucin MW 0.5-20 MDa, shear-thinning non-Newtonian
//     gel → must be removed by salt/ash/vinegar abrasion
//     before cooking, the "cleaning" step is a rheological
//     phase transition from gel → sol → rinse
//  2. VINEGAR-POACHED PROTEIN SURFACE DENATURATION —
//     pH 3-4 acetic acid lowers protein isoelectric
//     precipitation threshold, surface myosin denatures
//     BEFORE heat → firmer texture at lower temperature,
//     "cold-cooking" ceviche-adjacent effect, the
//     acid + brief poach combination
//  3. ROASTED RICE POWDER (THÍNH) STRECKER
//     DEGRADATION VOLATILE MATRIX — 2-acetyl-1-pyrroline
//     (2-AP, "popcorn molecule") 0.5-2.0 ppm + pyrazines
//     adsorbed onto porous starch granule surface,
//     powder acts as FLAVOR SPONGE delivering volatiles
//     upon mastication + moisture contact
//  4. BANANA BLOSSOM POLYPHENOL OXIDASE (PPO)
//     COMPETITIVE SUBSTRATE KINETICS — enzymatic
//     browning race: PPO + catechol → o-quinone → melanin,
//     competitive inhibitors: citric acid (pH drop below
//     PPO optimal 6-7), ascorbic acid (reduces quinones
//     back to catechols), vinegar water immersion
//  5. FISH SAUCE-LIME DRESSING BUFFER CAPACITY —
//     fish sauce amino acids (glutamate, histidine)
//     act as pH buffers maintaining dressing acidity
//     at pH 3.5-4.0 despite dilution by ingredient
//     moisture, Henderson-Hasselbalch buffering by
//     amino acid side chains
//  6. NGA SƠN BRACKISH WETLAND ECOLOGY —
//     nhệch (swamp eel) inhabits tidal mudflats
//     where Lèn River meets sea, brackish 5-15 ppt
//     salinity → elevated free amino acids (osmolytes)
//     glycine/alanine/taurine + unique muddy-sweet
//     terroir, protected Nga Sơn rush mat region
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'goi-nhech-nga-son',
  title: 'Gỏi Nhệch Nga Sơn (Nga Sơn Swamp Eel Salad)',
  subtitle: 'Swamp eel mucin glycoprotein 0.5-20 MDa shear-thinning gel removed by salt abrasion phase transition, vinegar pH 3-4 pre-denatures surface myosin before thermal poaching for ceviche-adjacent firm texture, roasted rice thính delivers 2-AP via porous starch granule adsorption-desorption, and fish sauce amino acid buffer maintains dressing pH 3.5-4.0 via Henderson-Hasselbalch.',
  category: 'APPETIZER',
  difficulty: 'Hard',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/goi-nhech-nga-son.jpg',

  intro: `Gỏi nhệch Nga Sơn is Thanh Hóa's most TEXTURALLY CHALLENGING salad — a cold preparation of SWAMP EEL (Monopterus albus, Vietnamese: nhệch or lươn đồng depending on species) that demands mastery of MUCIN REMOVAL, ACID-THERMAL PROTEIN DENATURATION, and a complex dressing system that maintains its chemical equilibrium despite the varying moisture content of a dozen components.

The CENTRAL MECHANISM is SWAMP EEL MUCIN GLYCOPROTEIN RHEOLOGY. The swamp eel's body is covered in a mucus layer 50-200 µm thick — one of the thickest mucus coatings in freshwater fish. This mucus is composed primarily of MUCIN GLYCOPROTEINS — enormous molecules (molecular weight 0.5-20 MEGADALTONS, among the largest biological macromolecules) consisting of a protein backbone heavily decorated with O-linked oligosaccharide side chains (sugars constitute 50-80% of mucin mass). These glycoproteins form a SHEAR-THINNING NON-NEWTONIAN GEL — at rest, the mucin molecules entangle into a thick, viscoelastic network (viscosity 10-100 Pa·s) that protects the eel from parasites, abrasion, and osmotic stress. Under shear (rubbing, scraping), the entangled network DISENTANGLES and the viscosity drops dramatically (to 0.01-0.1 Pa·s — approaching water), allowing the mucus to be wiped away. But it RE-ENTANGLES within seconds when shear stops, reforming the protective gel.

This rheological behavior makes cleaning nhệch a BATTLE AGAINST THIXOTROPY. Simply rinsing with water removes only the surface layer that is momentarily in the shear-thinning state — the bulk of the mucin gel remains intact and re-entangles. The traditional Thanh Hóa method uses ABRASIVE AGENTS to mechanically disrupt the mucin network throughout its entire thickness: COARSE SALT (NaCl crystals 0.5-2 mm) acts as a physical abrasive, and simultaneously the high ionic strength (>3 M at the surface) screens the electrostatic repulsions between mucin molecules, collapsing the gel network into a dense, non-adhesive precipitate (salting-out effect, following the Hofmeister series). Some cooks add WOOD ASH (alkaline, pH 10-12) which hydrolyzes the O-glycosidic bonds linking the sugar chains to the protein backbone — without its sugar decorations, the protein core is no longer capable of forming a gel. VINEGAR (acetic acid, pH 2-3) protonates the carboxylate groups on sialic acid residues at the termini of the oligosaccharide chains, eliminating the negative charges that help mucin molecules repel each other and extend into a gel-forming conformation — at low pH, the mucin molecules COLLAPSE into compact, non-entangling globules.

The VINEGAR-POACHED PROTEIN SURFACE DENATURATION of nhệch meat creates a texture that sits between raw (sashimi) and fully cooked — a CEVICHE-ADJACENT preparation. The nhệch pieces are first marinated in dilute vinegar (pH 3-4) for 10-15 minutes. At this pH, the SURFACE PROTEINS (primarily myosin and actin in the muscle fibers) approach their ISOELECTRIC POINT (pI of fish myosin ≈ 5.4, but in the acidic environment, the protein surface charge decreases, promoting aggregation). The acid penetrates only 1-2 mm into the flesh during this short marination, so the SURFACE LAYER denatures (turns opaque, firms up) while the INTERIOR remains translucent and tender. The marinated pieces are then BRIEFLY POACHED (30-60 seconds in simmering water) — the heat completes the denaturation of the acid-treated surface (which is already partially denatured and thus cooks FASTER than untreated protein, reaching firm texture at a lower temperature), while the interior receives just enough heat to become safe to eat without overcooking. The result is a TWO-ZONE TEXTURE: a firm, opaque, slightly chewy exterior and a tender, just-barely-set interior — texturally more complex than either raw or fully cooked eel.

ROASTED RICE POWDER (THÍNH) is the flavor-delivery system of the salad — a VOLATILE-LOADED POROUS MATRIX. When rice grains are dry-roasted at 180-200°C, the Maillard reaction and Strecker degradation generate a rich spectrum of volatiles, dominated by 2-ACETYL-1-PYRROLINE (2-AP, the "popcorn molecule," present at 0.5-2.0 ppm — well above its detection threshold of 0.006 ppb, making it one of the most potent flavor compounds in food) alongside PYRAZINES (methylpyrazine, 2,5-dimethylpyrazine — nutty, roasty) and FURANONES (4-hydroxy-2,5-dimethyl-3(2H)-furanone — caramel, burnt sugar). These volatiles are generated WITHIN the starch granules as they undergo thermal decomposition, and they ADSORB onto the vast internal PORE SURFACE created by the expansion and fragmentation of the granules during roasting. The porous starch matrix acts as a FLAVOR SPONGE — trapping and preserving the volatiles that would otherwise evaporate within minutes. When the thính powder contacts the moist salad ingredients, WATER DISPLACES the adsorbed volatiles through competitive adsorption (water has a stronger affinity for the polar starch surface than the relatively nonpolar volatiles), releasing them in a burst of popcorn-nutty aroma that is experienced retronasally during chewing. This moisture-triggered release mechanism means that thính delivers its flavor AT THE MOMENT OF EATING — not before, not after — making it one of the most temporally precise flavor-delivery systems in Vietnamese cuisine.

BANANA BLOSSOM (bắp chuối) in the salad undergoes rapid enzymatic browning via POLYPHENOL OXIDASE (PPO), an enzyme that catalyzes the oxidation of CATECHOL substrates to O-QUINONES, which then spontaneously polymerize into dark brown MELANIN pigments. The browning kinetics follow Michaelis-Menten enzyme kinetics: v = V_max[S]/(K_m + [S]), where [S] is the catechol substrate concentration. The race against browning uses COMPETITIVE INHIBITION: immersing the sliced banana blossom in VINEGAR WATER (pH 3-4) drops the pH below PPO's optimal range (pH 6-7), reducing the enzyme's catalytic rate by 80-95%; the CITRIC ACID in lime juice additionally chelates the Cu²⁺ cofactor essential for PPO activity; and ASCORBIC ACID (vitamin C in the lime juice) acts as a REDUCING AGENT that converts the brown o-quinones BACK to colorless catechols faster than they can polymerize, maintaining the blossom's pale ivory color.

The FISH SAUCE-LIME DRESSING maintains its acidity through AMINO ACID BUFFER CAPACITY. Fish sauce contains 10-30 g/L of FREE AMINO ACIDS (predominantly glutamate, alanine, leucine, and histidine — the products of 6-18 months of halophilic protease digestion). These amino acids are AMPHOTERIC — each has both an amino group (pKa ≈ 9-10) and a carboxyl group (pKa ≈ 2-3), and some have ionizable side chains (histidine pKa ≈ 6.0, glutamate pKa ≈ 4.1). In the dressing pH range of 3.5-4.0 (set by the lime juice), the amino acid carboxyl groups are near their pKa values, making them effective BUFFERS according to the Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA]). This buffering capacity means that when the dressing contacts the moist salad ingredients (which dilute the dressing and would normally raise the pH), the amino acid buffer system RESISTS the pH change, maintaining the bright, sharp acidity that defines the gỏi flavor profile. Without this buffering, the dressing would taste flat and muted within minutes of being mixed with the salad ingredients.

Nga Sơn's nhệch inhabit the BRACKISH WETLANDS where the Lèn River approaches the coast — a tidal mudflat ecosystem with salinity ranging from 5-15 ppt (parts per thousand, compared to 35 ppt for full seawater and 0 ppt for freshwater). This intermediate salinity environment forces the eel to maintain OSMOTIC BALANCE by accumulating FREE AMINO ACIDS as intracellular osmolytes — primarily GLYCINE (sweet), ALANINE (sweet), and TAURINE (slightly bitter-sweet) — at concentrations 2-4× higher than freshwater eels. These osmolytes contribute directly to the nhệch's naturally SWEET, SAVORY flavor that Nga Sơn locals prize as superior to freshwater-raised eels.`,

  ingredientSections: [
    {
      title: 'Swamp Eel — Mucin Removal + Acid-Thermal Denaturation',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'fresh swamp eel (nhệch), live or very fresh',
          note: 'Nga Sơn brackish-water nhệch has naturally sweeter flesh due to elevated osmolyte amino acids. Freshwater eel can substitute but will taste less sweet.',
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'coarse salt',
          note: 'ABRASIVE + SALTING-OUT for mucin removal. Crystal size 0.5-2 mm provides mechanical disruption while ionic strength collapses the gel network.',
        },
        {
          amount: 100,
          unit: 'ml',
          name: 'white vinegar',
          note: 'Dual purpose: (1) mucin removal via sialic acid protonation, (2) surface protein pre-denaturation for ceviche-adjacent texture.',
        },
      ],
    },
    {
      title: 'Salad Components — Anti-Browning + Texture',
      items: [
        {
          amount: 1,
          unit: 'unit',
          name: 'banana blossom (bắp chuối), thinly sliced',
          note: 'Slice and IMMEDIATELY immerse in acidulated water (vinegar + water). PPO browning begins within 30 seconds of exposure to air.',
        },
        {
          amount: 1,
          unit: 'unit',
          name: 'green mango, julienned',
        },
        {
          amount: 1,
          unit: 'cup',
          name: 'fresh herbs: Vietnamese coriander (rau răm), perilla (tía tô), mint',
        },
        {
          amount: 50,
          unit: 'g',
          name: 'roasted peanuts, crushed',
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'roasted rice powder (thính)',
          note: 'FLAVOR SPONGE — 2-AP and pyrazines adsorbed on porous starch surface, released by moisture contact during eating.',
        },
        {
          amount: 2,
          unit: 'unit',
          name: 'fresh chili, thinly sliced',
        },
        {
          amount: 3,
          unit: 'unit',
          name: 'fried shallots',
        },
      ],
    },
    {
      title: 'Dressing — Amino Acid Buffer System',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'fish sauce',
          note: 'Free amino acids 10-30 g/L provide BUFFER CAPACITY maintaining dressing pH 3.5-4.0 via Henderson-Hasselbalch.',
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'lime juice (2-3 limes)',
          note: 'Citric acid sets the initial pH + chelates Cu²⁺ to inhibit residual PPO + ascorbic acid reduces browning quinones.',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'sugar',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'water',
        },
        {
          amount: 1,
          unit: 'unit',
          name: 'garlic clove, minced',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Clean the swamp eel — mucin gel rheological breakdown, 15 minutes',
      description: `DISPATCH the live eel humanely. Place in a deep bowl and coat generously with COARSE SALT (3 tablespoons). RUB the salt vigorously over the entire body for 3-5 minutes. The salt crystals provide MECHANICAL ABRASION that disrupts the 50-200 µm mucin gel layer, while the high ionic strength (>3 M NaCl at the surface) COLLAPSES the mucin glycoprotein network through salting-out — the Na⁺ and Cl⁻ ions screen the electrostatic repulsions between the negatively charged sialic acid residues on the mucin oligosaccharides, causing the extended gel-forming molecules to collapse into compact, non-adhesive globules.

RINSE thoroughly with water. The mucin layer should feel significantly reduced but may not be completely gone.

REPEAT with VINEGAR: pour 50 ml vinegar over the eel and rub for 2 minutes. The acetic acid (pH 2-3) protonates the remaining sialic acid carboxylate groups, eliminating the last electrostatic charges and completing the mucin gel collapse.

RINSE again thoroughly. The eel surface should now feel CLEAN and slightly TACKY (the exposed collagen in the skin) rather than slimy.

FILLET the eel: make a lengthwise cut along the belly, remove the backbone, and cut the flesh into bite-sized pieces (2-3 cm).`,
      tip: `MUCIN RHEOLOGY — A BATTLE AGAINST THIXOTROPY: Cleaning a swamp eel is fighting a NON-NEWTONIAN FLUID that fights back. At rest, the mucin gel has a viscosity of 10-100 Pa·s (similar to honey or thick syrup). Under shear (rubbing), it thins dramatically to 0.01-0.1 Pa·s (like water). But the moment you STOP rubbing, the mucin molecules RE-ENTANGLE and the gel REFORMS — within 5-10 seconds, you're back to square one. This THIXOTROPY (shear-thinning + time-dependent recovery) means that simply rinsing or wiping is futile — you must CHEMICALLY DESTROY the gel's ability to reform. Salt works by COLLAPSING the molecular conformation (Hofmeister effect); vinegar works by NEUTRALIZING the charges that drive gel formation. Wood ash, used by some Thanh Hóa cooks, works by HYDROLYSIS — the alkaline KOH/K₂CO₃ cleaves the O-glycosidic bonds that link the sugar chains to the protein backbone, and without its sugar decorations, the mucin protein core can no longer form a gel at all. Together, these three approaches attack the mucin gel at three different structural levels: conformation (salt), charge (acid), and covalent bonds (base).`,
    },
    {
      title: 'Acid-poach the eel — two-zone denaturation, 15 minutes',
      description: `MARINATE the eel pieces in the remaining 50 ml vinegar diluted with 100 ml water (final pH approximately 3.5-4.0) for 10-15 minutes. The acid penetrates the SURFACE 1-2 mm, lowering the local pH and partially denaturing the surface myosin — the exterior turns slightly OPAQUE and firms up while the interior remains TRANSLUCENT and raw.

BRING a pot of water to a GENTLE SIMMER (85-90°C — not a rolling boil). Briefly POACH the marinated eel pieces for 30-60 seconds only. The acid-pretreated surface denatures FASTER than untreated protein (the acid has already disrupted the native protein conformation, so less thermal energy is needed to complete the denaturation). The interior receives just enough heat to reach food-safe temperature (~63°C at center) without overcooking.

IMMEDIATELY transfer to ice water to HALT thermal denaturation. The finished eel should have a FIRM, OPAQUE EXTERIOR (1-2 mm thick denatured layer) surrounding a TENDER, BARELY-SET INTERIOR — the two-zone texture that is the hallmark of properly prepared gỏi nhệch.

DRAIN well and pat dry.`,
      tip: `CEVICHE-ADJACENT CHEMISTRY — ACID + HEAT SYNERGY: Traditional Latin American ceviche relies ENTIRELY on acid denaturation (lime juice, pH 2-3, for 15-60 minutes) — no heat at all. The result is a "cold-cooked" texture where the surface is firm but the interior may remain essentially raw. Gỏi nhệch uses a HYBRID approach: acid PRE-TREATMENT (10-15 minutes in vinegar) begins the denaturation, then BRIEF THERMAL POACHING (30-60 seconds) completes it. The synergy between acid and heat is that acid-denatured protein has a LOWER THERMAL DENATURATION TEMPERATURE — the native protein structure has already been partially disrupted by the acid, so less thermal energy (lower temperature and/or shorter time) is needed to complete the denaturation. This means the gỏi nhệch cook can achieve a UNIFORMLY SAFE interior temperature in only 30-60 seconds rather than the 5-10 minutes that an unacidified poach would require — preventing the overcooking that would destroy the eel's delicate texture.`,
    },
    {
      title: 'Assemble the gỏi — thính as temporal flavor delivery',
      description: `PREPARE the dressing: Combine fish sauce, lime juice, sugar, water, and minced garlic. Stir until sugar dissolves. Taste — the dressing should be sharply sour-salty-sweet with a bright lime aroma. The amino acids in the fish sauce are now establishing their BUFFER CAPACITY at pH 3.5-4.0.

DRAIN the banana blossom slices from their acidulated water bath. They should be IVORY-WHITE — the vinegar water has successfully inhibited PPO browning.

In a large mixing bowl, combine the poached eel pieces, banana blossom, julienned green mango, and fresh herbs. POUR the dressing over and TOSS gently to coat evenly.

ADD the crushed roasted peanuts, fried shallots, and sliced chili. TOSS again.

JUST BEFORE SERVING, sprinkle the THÍNH (roasted rice powder) over the surface. Do NOT mix the thính into the salad ahead of time — it should be added AT THE LAST MOMENT because the moisture-triggered volatile release (water displacing adsorbed 2-AP and pyrazines from the porous starch surface) begins immediately upon contact with the wet salad. The thính needs to be DRY when it hits the salad so the full burst of popcorn-nutty aroma is released DURING EATING, not dissipated into the air before the bowl reaches the table.

SERVE immediately on a plate lined with banana leaf, with extra thính on the side for diners who want additional flavor-burst topping during the meal.`,
      tip: `THÍNH — THE MOST TEMPORALLY PRECISE FLAVOR DELIVERY IN VIETNAMESE CUISINE: Roasted rice powder functions as a MOLECULAR SPONGE with a MOISTURE-ACTIVATED TRIGGER. During roasting at 180-200°C, the starch granules undergo thermal expansion and fragmentation, creating an internal pore network with enormous SPECIFIC SURFACE AREA (estimated 10-50 m²/g — comparable to activated charcoal). The Maillard and Strecker degradation reactions generate volatiles (2-AP at 0.5-2.0 ppm, pyrazines, furanones) WITHIN these pores, where they ADSORB onto the polar starch surface through weak van der Waals and hydrogen-bonding interactions. In the dry state, these volatiles are STABLE — the dry starch surface holds them firmly, and they evaporate only very slowly. But the moment WATER contacts the porous surface, it DISPLACES the adsorbed volatiles through COMPETITIVE ADSORPTION — water molecules, being more polar than the volatile aromatics, bind more strongly to the starch surface, physically pushing the volatiles off. The displaced volatiles burst into the gas phase — and because this happens in the warm, moist oral cavity during chewing, they are delivered DIRECTLY to the olfactory epithelium via the retronasal pathway. The timing is perfect: flavor arrives precisely when you bite, not before, not after.`,
    },
  ],
};

export default function GoiNhechNgaSonPage() {
  return <RecipeLayout recipe={recipe} />;
}
