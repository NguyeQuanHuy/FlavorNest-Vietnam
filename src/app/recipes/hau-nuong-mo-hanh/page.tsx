'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Hàu Nướng Mỡ Hành — Quảng Ninh Grilled Oysters with
//  Scallion Oil
//  Quảng Ninh #5
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. OYSTER SHELL CaCO₃ RADIANT HEAT REFLECTOR —
//     the oyster half-shell (>95% aragonite CaCO₃) has
//     thermal conductivity k = 2.0-2.7 W/m·K and
//     emissivity ε = 0.85-0.92 in the infrared range.
//     On direct charcoal grilling, the shell absorbs
//     radiant heat on its convex underside (facing
//     the coals), conducts heat through its 2-4 mm
//     wall, and radiates IR from its concave inner
//     surface directly onto the oyster meat. The shell
//     functions as a CERAMIC COOKING VESSEL — a
//     miniature cazuela that simultaneously PROTECTS
//     the meat from direct flame contact, ACCUMULATES
//     thermal energy (thermal mass ρ·cp·V), and
//     REDISTRIBUTES heat uniformly across the meat
//     surface via shell-wall conduction
//  2. OYSTER LIQUOR GLYCOGEN CARAMELIZATION —
//     oysters are one of the few animal tissues that
//     store significant GLYCOGEN (4-8% wet weight,
//     vs <1% in most meat/fish). When heated above
//     160°C, the glycogen hydrolyzes to glucose
//     oligomers and monomers, which undergo THERMAL
//     CARAMELIZATION (not Maillard — no amino acid
//     required) producing caramel flavors (diacetyl,
//     maltol, hydroxymethylfurfural). This is why
//     grilled oysters have a SWEET, CARAMELIZED note
//     that raw oysters completely lack
//  3. ADDUCTOR MUSCLE CATCH MECHANISM —
//     the oyster adductor muscle (the white disc that
//     holds the shell closed) contains PARAMYOSIN-LIKE
//     catch proteins similar to but distinct from squid
//     paramyosin. The catch mechanism allows the oyster
//     to hold its shell shut for HOURS with minimal
//     energy expenditure. During cooking, the catch
//     proteins denature and release the shell — this
//     is why live oysters POP OPEN on the grill at
//     approximately 55-60°C, providing a NATURAL
//     DONENESS INDICATOR
//  4. SCALLION OIL THIOSULFINATE PHASE
//     PARTITIONING — fresh-cut scallion releases
//     allicin and related thiosulfinates into the
//     oil phase. At grilling temperatures (180-250°C),
//     these thiosulfinates undergo β-ELIMINATION to
//     produce AJOENE (E/Z isomers), which has a much
//     HIGHER lipid solubility (log P ≈ 2.5) than
//     allicin (log P ≈ 0.6) → ajoene accumulates
//     preferentially in the scallion oil droplets
//     sitting atop the oyster liquor, creating a
//     BIPHASIC flavor delivery system: aqueous
//     briny-sweet base + lipid savory-aromatic top
//  5. ZINC BIOAVAILABILITY — oysters contain 50-80
//     mg Zn per 100g (5-8× the RDA), the highest
//     zinc concentration of any common food. The zinc
//     is bound primarily to metallothionein (MT), a
//     cysteine-rich protein (MW 6-7 kDa, 30% Cys)
//     that coordinates 7 Zn²⁺ ions in two clusters
//     (Zn₄Cys₁₁ + Zn₃Cys₉). Heat denatures MT at
//     50-60°C, releasing Zn²⁺ into the liquor →
//     high bioavailability. The metallic-mineral
//     taste of oyster liquor is partly zinc
//  6. VÂN ĐỒN ISLAND OYSTER TERROIR —
//     Quảng Ninh's Vân Đồn island cluster provides
//     optimal oyster habitat: protected bays with
//     moderate tidal exchange (1-3m range), limestone
//     karst-derived Ca²⁺ for rapid shell formation,
//     phytoplankton blooms fed by nutrient-rich
//     runoff, and seawater salinity 25-32 ppt
//     (optimal for Crassostrea gigas glycogen
//     accumulation occurs at 25-30 ppt — slightly
//     below full oceanic salinity)
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'hau-nuong-mo-hanh',
  title: 'Hàu Nướng Mỡ Hành (Quảng Ninh Grilled Oysters with Scallion Oil)',
  subtitle: 'Aragonite shell functions as ceramic radiant heat reflector with k 2.0-2.7 W/m·K redistributing charcoal IR uniformly, glycogen 4-8% hydrolyzes to glucose for thermal caramelization distinct from Maillard, and scallion oil ajoene log P 2.5 creates biphasic briny-sweet aqueous + savory-aromatic lipid flavor delivery.',
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '25 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/hau-nuong-mo-hanh.jpg',

  intro: `Hàu Nướng Mỡ Hành — Grilled Oysters with Scallion Oil — is Quảng Ninh's most ICONIC street food and night-market spectacle: rows of oysters on half-shells sizzling over charcoal, each one a miniature pool of bubbling liquor topped with emerald-green scallion oil. It is deceptively simple (just oysters, scallion oil, peanuts, and heat), but the underlying science reveals an extraordinarily sophisticated cooking system where the OYSTER'S OWN SHELL serves as the cooking vessel.

The CENTRAL MECHANISM is the OYSTER SHELL AS CERAMIC RADIANT HEAT REFLECTOR. The oyster half-shell is composed of >95% ARAGONITE — a crystalline polymorph of calcium carbonate (CaCO₃) with a thermal conductivity of k = 2.0-2.7 W/m·K and an infrared emissivity of ε = 0.85-0.92. When placed on a charcoal grill, the shell system works as follows: the CONVEX UNDERSIDE faces the glowing charcoal (surface temperature 600-900°C, peak emission wavelength λ_max = 3.2-4.8 µm from Wien's displacement law), absorbing radiant energy across its outer surface. The absorbed heat conducts through the 2-4 mm aragonite wall — a process governed by Fourier's law q = -k·A·(dT/dx) — with the shell reaching steady-state in approximately 30-60 seconds (thermal diffusion time t = L²/4α, where α = k/ρ·cp ≈ 1.0 × 10⁻⁶ m²/s for aragonite). The heated CONCAVE INNER SURFACE then radiates infrared energy directly down onto the oyster meat sitting in the shell's cup.

This shell-mediated heating is fundamentally superior to direct grilling for three reasons: (1) TEMPERATURE BUFFERING — the shell's thermal mass (ρ ≈ 2,930 kg/m³, cp ≈ 0.82 kJ/kg·K) absorbs thermal spikes from flame flare-ups, preventing the sudden overheating that would toughen the delicate oyster protein; (2) UNIFORM HEATING — the shell conducts heat laterally across its wall, redistributing hotspots from the grill grate into uniform shell-wall temperature, so the entire oyster heats evenly rather than having grill-mark stripes of overcooked protein; (3) LIQUOR RETENTION — the concave shell cup holds the oyster liquor (3-8 mL per oyster) in place, allowing the meat to POACH in its own juices while simultaneously receiving radiant heat from the shell walls above the liquor level.

OYSTER LIQUOR GLYCOGEN CARAMELIZATION is what makes grilled oysters taste sweet in a way that raw oysters only hint at. Oysters are metabolically unusual among animal tissues in storing significant amounts of GLYCOGEN — 4-8% of wet weight, compared to <1% in typical fish and shellfish muscle. This glycogen reserve fluctuates seasonally: it peaks in autumn-winter (when oysters accumulate energy reserves) and drops in spring-summer (when energy is diverted to gonadal development for spawning). During grilling, the liquor temperature rises above 100°C at the shell surface and the edges begin to reduce through evaporation. At temperatures above 160°C (achievable at the evaporating edges and the thin liquor film on exposed meat surfaces), glycogen undergoes ACID-CATALYZED HYDROLYSIS to glucose oligomers and glucose monomers, which then undergo THERMAL CARAMELIZATION. Caramelization (the pyrolysis of sugars in the ABSENCE of amino acids) produces a flavor profile distinct from Maillard browning: DIACETYL (buttery), MALTOL (caramel, cotton candy), HYDROXYMETHYLFURFURAL or HMF (caramel, honey), and FURANEOL (strawberry-caramel). This is why grilled oysters have a sweet, caramelized top note that is completely absent in raw oysters — the heat unlocks the oyster's hidden sugar reserves.

The ADDUCTOR MUSCLE CATCH MECHANISM provides a built-in DONENESS INDICATOR. The oyster's single large adductor muscle connects the two shell valves and holds them shut with remarkable force (10-30 N, depending on species and size). This sustained closure is achieved through a CATCH STATE — functionally similar to (but molecularly distinct from) the paramyosin catch state in squid muscle. The catch proteins in the oyster adductor are a complex of paramyosin, myosin, and a catch-specific protein called twitchin (a giant kinase, MW > 500 kDa) that phosphorylates/dephosphorylates to lock/unlock the cross-bridges. When heated to 55-60°C, the catch proteins DENATURE, the cross-bridges unlock, and the shell POPS OPEN — a reliable, visually obvious signal that the internal temperature has reached the range where the proteins have begun to set. This natural pop-open mechanism saves the cook from having to shuck raw oysters (a skilled and dangerous task) and provides a built-in thermometer.

SCALLION OIL undergoes a series of transformations when applied to the hot oyster surface. Fresh-cut scallion (Allium fistulosum) releases ALLICIN and related thiosulfinates when the cell-wall-sequestered enzyme alliinase encounters its substrate alliin upon tissue damage (cutting/chopping). In the oil phase, at grilling temperatures (180-250°C), allicin undergoes β-ELIMINATION — a reaction where a proton and a leaving group are removed from adjacent carbons, forming a new double bond — to produce AJOENE (4,5,9-trithiadodeca-1,6,11-triene-9-oxide). Ajoene has two critical properties: (1) its lipophilicity (log P ≈ 2.5) is dramatically higher than allicin's (log P ≈ 0.6), meaning it PARTITIONS almost exclusively into the oil phase rather than the aqueous oyster liquor; (2) its flavor is MILDER and more COMPLEX than allicin's sharp, pungent bite — ajoene has a sweet, mellow garlic-onion character. The result is a BIPHASIC FLAVOR SYSTEM: when you eat the oyster, you first encounter the OIL LAYER (ajoene-rich → sweet, savory, aromatic) floating on top, then the AQUEOUS LIQUOR (mineral salts, glycogen-derived sugars, zinc → briny, sweet, metallic). The two phases deliver their flavors SEQUENTIALLY — oil first (coating the palate), then aqueous (washing through) — creating a temporal flavor arc within a single sip.

ZINC BIOAVAILABILITY from oysters is exceptionally high because of the metallothionein (MT) storage system. Oysters concentrate zinc to 50-80 mg per 100g — the highest of any common food, representing 500-800% of the adult RDA in a single serving. The zinc is stored bound to METALLOTHIONEIN, a small cysteine-rich protein (MW 6-7 kDa, approximately 30% cysteine residues) that coordinates 7 zinc ions in two metal-thiolate clusters: an α-domain (Zn₄Cys₁₁) and a β-domain (Zn₃Cys₉). During cooking, MT denatures at 50-60°C (the cysteine thiolate bonds oxidize and the protein unfolds), releasing free Zn²⁺ ions into the liquor. These free zinc ions are highly bioavailable — they can be absorbed directly by intestinal zinc transporters (ZIP4) without requiring enzymatic liberation from protein-bound forms. The metallic-mineral taste component of oyster liquor (distinct from the sodium chloride saltiness) is partly attributable to these zinc ions interacting with taste receptor cells, possibly through the zinc-sensing receptor GPR39.

VÂN ĐỒN ISLAND provides ideal oyster terroir. The sheltered bays between Quảng Ninh's karst islands offer moderate tidal exchange (1-3 m range — enough to bring fresh nutrients but not so violent as to dislodge oyster spat from attachment surfaces), limestone-derived calcium for rapid shell growth, and — critically — a seawater salinity of 25-32 ppt due to freshwater input from rivers draining the karst hinterland. This slightly reduced salinity (vs 34-36 ppt open ocean) is optimal for GLYCOGEN ACCUMULATION in Crassostrea gigas: at 25-30 ppt, the osmotic stress is low enough that the oyster can divert energy from osmoregulation to glycogen storage, producing plumper, sweeter oysters than their full-salinity counterparts.`,

  ingredientSections: [
    {
      title: 'Oysters — Aragonite Shell Cooking Vessels',
      items: [
        {
          amount: 12,
          unit: 'unit',
          name: 'fresh oysters, live in shell',
          note: 'Vân Đồn (Quảng Ninh) Pacific oysters (Crassostrea gigas) preferred — salinity 25-30 ppt produces highest glycogen 4-8%. Shells must be tightly CLOSED (adductor catch state intact = alive). Discard any that are open and don\'t close when tapped.',
        },
      ],
    },
    {
      title: 'Scallion Oil — Ajoene Phase-Partitioned System',
      items: [
        {
          amount: 4,
          unit: 'tbsp',
          name: 'cooking oil',
        },
        {
          amount: 6,
          unit: 'unit',
          name: 'scallions, finely chopped',
          note: 'Cutting releases alliinase → allicin. In hot oil, allicin undergoes β-elimination → ajoene (log P 2.5), which partitions into lipid phase for sustained aromatic delivery.',
        },
      ],
    },
    {
      title: 'Toppings & Sauce',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'roasted peanuts, crushed',
          note: 'Textural contrast — crunchy peanut vs silky oyster. Also adds pyrazine aromatics that complement glycogen caramelization flavors.',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'fried shallots',
        },
        {
          amount: 1,
          unit: 'unit',
          name: 'red chili, thinly sliced',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'soy sauce or fish sauce',
        },
        {
          amount: 1,
          unit: 'unit',
          name: 'lime, quartered',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Prepare the oysters — shell inspection and opening, 10 minutes',
      description: `SCRUB the oysters under running water with a stiff brush to remove mud, algae, and loose shell fragments. The outer shell surface is often covered with barnacles and biofilm — these should be removed because they can harbor bacteria and will produce off-flavors if charred.

CHECK each oyster — a live oyster has its shell TIGHTLY CLOSED (the adductor catch proteins are engaged, holding the valves shut with 10-30 N of force). Discard any oyster that is OPEN and does not close when tapped firmly — this indicates the adductor has failed, meaning the oyster is dead and potentially unsafe.

SHUCK the oysters by inserting a shucking knife at the hinge (the pointed end), twisting to break the ligament, then sliding the blade along the inner surface of the TOP shell to sever the adductor muscle. REMOVE the top shell. Leave the oyster and its liquor in the BOTTOM (deeper, cupped) half-shell — this is the "cooking vessel."

ALTERNATIVELY, place whole oysters directly on the grill and let heat do the shucking: at 55-60°C, the catch proteins denature and the shells POP OPEN on their own. Remove the top shell with tongs. This method preserves more liquor but gives less control over timing.`,
      tip: `THE ADDUCTOR CATCH STATE — A NATURAL THERMOMETER: The oyster's shell-opening on the grill is not random — it's a PHASE TRANSITION with a defined temperature threshold. The catch mechanism in the adductor muscle involves a regulatory protein called TWITCHIN, a giant kinase (MW > 500 kDa) that belongs to the immunoglobulin superfamily. When twitchin is dephosphorylated (by a catch-specific phosphatase), it locks the myosin-paramyosin cross-bridges in a sustained contraction state — the "catch" — that holds the shell closed without ATP expenditure. Heat denatures twitchin at 55-60°C, irreversibly unlocking the catch → the elastic LIGAMENT (a protein-rubber pad at the hinge) springs the shell open, since the ligament is naturally in the "open" state and was being held closed by the adductor. This is why the shell pops open SUDDENLY rather than gradually — it's a binary switch from "locked" to "unlocked" when twitchin's denaturation temperature is crossed.`,
    },
    {
      title: 'Prepare scallion oil — thiosulfinate cascade, 5 minutes',
      description: `HEAT oil in a small pan over medium heat (140-160°C — NOT smoking hot; overheating destroys the delicate thiosulfinates before they can convert to ajoene).

ADD the chopped scallions. They will SIZZLE as the water in the scallion cells boils, creating steam that carries the allicin and alliin into the oil phase. FRY for 1-2 minutes until the scallions are SOFTENED and AROMATIC but not yet browned.

The thiosulfinate cascade proceeds: cell damage from chopping → alliinase contacts alliin → ALLICIN formed → in hot oil, allicin undergoes β-elimination → AJOENE (a more lipophilic, milder, sweeter sulfur compound). The ajoene partitions into the oil phase (log P ≈ 2.5) while residual water-soluble compounds remain in the aqueous phase of the scallion cells.

REMOVE from heat. The oil will continue extracting sulfur volatiles from the softened scallion cells as it cools.`,
      tip: `AJOENE — THE FAT-SOLUBLE FLAVOR MOLECULE: Allicin (the pungent compound formed when you cut raw garlic/scallions) is relatively WATER-SOLUBLE (log P ≈ 0.6, meaning it distributes roughly equally between oil and water). Ajoene, formed by heat-induced β-elimination of allicin, is dramatically MORE LIPOPHILIC (log P ≈ 2.5 — it partitions approximately 300:1 in favor of oil over water). This shift has massive implications for flavor delivery: allicin, being water-soluble, is immediately washed away by saliva and delivered in a single, sharp burst. Ajoene, being oil-soluble, remains in the lipid droplets that coat the oral mucosa, delivering its sweeter, more mellow flavor CONTINUOUSLY over many seconds as the oil is slowly emulsified by salivary enzymes. The scallion oil on grilled oysters is essentially an EXTENDED-RELEASE FLAVOR CAPSULE.`,
    },
    {
      title: 'Grill the oysters — aragonite shell radiant cooking, 5-8 minutes',
      description: `PREPARE a charcoal grill with a bed of glowing coals (surface temperature 600-900°C). Alternatively, use a gas grill on high heat or a broiler.

PLACE the shucked half-shell oysters DIRECTLY on the grill grate, cupped side DOWN (the deep shell holds the oyster and liquor). The aragonite shell is your cooking vessel.

GRILL for 2-3 minutes until the liquor begins to BUBBLE. The shell conducts heat from the coal-facing underside through its 2-4 mm wall, heating the liquor to a simmer. The shell's thermal mass (ρ·cp·V) absorbs and buffers heat, preventing sudden temperature spikes.

SPOON scallion oil generously over each oyster (approximately 1 teaspoon per oyster). The oil floats on the aqueous liquor, creating the BIPHASIC system — ajoene-rich oil layer on top, mineral-rich liquor below.

ADD a few drops of soy sauce or fish sauce to each oyster.

CONTINUE GRILLING for another 3-5 minutes. Watch for:
— LIQUOR REDUCTION: the edges of the liquor pool begin to CARAMELIZE as the glycogen hydrolyzes to glucose and undergoes thermal caramelization above 160°C at the shell rim where the liquid film is thinnest
— MEAT EDGES CURLING: the oyster protein begins to set, with edges turning from translucent to OPAQUE
— OIL SIZZLING: the scallion oil crackles and pops as residual water in the scallion cells vaporizes

REMOVE when the oyster meat is just SET but still PLUMP and JUICY — approximately 65-70°C internal temperature. Overcooked oyster (>80°C) becomes RUBBERY as the protein over-denatures and contracts, squeezing out moisture.`,
      tip: `GLYCOGEN CARAMELIZATION — THE HIDDEN SWEETNESS: The sweet, caramel note in grilled oysters is NOT from the Maillard reaction (which requires amino acids + reducing sugars together) — it's from pure THERMAL CARAMELIZATION of the oyster's unusually high glycogen reserves. Glycogen (a branched polymer of glucose, MW > 10⁷ Da) first hydrolyzes at 100-140°C through acid-catalyzed cleavage of its α-1,4 and α-1,6 glycosidic bonds, releasing glucose oligomers and glucose monomers. At temperatures above 160°C, these free sugars undergo PYROLYSIS — losing water molecules to form anhydrosugars (levoglucosan), then ring-opening and fragmentation to produce DIACETYL (2,3-butanedione, buttery-toffee aroma, detection threshold 2.3 ppb), MALTOL (3-hydroxy-2-methyl-4-pyranone, cotton-candy aroma, threshold 9 ppb), and HMF (5-hydroxymethylfurfural, honey-caramel aroma). This caramelization pathway is unique to glycogen-rich foods like oysters and scallops — it's absent in lean fish and shellfish with <1% glycogen.`,
    },
    {
      title: 'Top and serve — the Quảng Ninh night market experience',
      description: `TOP each grilled oyster with crushed roasted peanuts, fried shallots, and sliced red chili.

SQUEEZE a few drops of lime juice over each oyster — the citric acid provides a SHARP CONTRAST to the sweet-savory-briny flavor profile, and the acidity helps cut through the oil coating on the palate.

SERVE IMMEDIATELY on the half-shell — the shell retains heat for 3-5 minutes (aragonite's thermal mass working in reverse as a HEAT RESERVOIR), keeping the oyster warm.

THE EATING PROTOCOL: Lift the shell, tip the contents into your mouth in one go. The SEQUENTIAL FLAVOR DELIVERY unfolds:
— FIRST: the scallion oil layer hits the palate → ajoene's sweet, mellow aromatic + peanut pyrazine crunch
— SECOND: the hot liquor washes through → briny NaCl + glycogen-derived sweetness + zinc metallic mineral note (released from denatured metallothionein)
— THIRD: the oyster meat → silky, barely-set protein that yields under gentle chewing, releasing a final burst of umami from intracellular free amino acids
— FOURTH: lime afterburn → citric acid cleanses, capsaicin from chili provides lingering TRPV1 warmth

PAIR with cold beer — the classic Quảng Ninh nhậu combination. The beer's carbonation scrubs the residual oil from the palate, and its bitterness (from iso-α-acids) contrasts with the oyster's sweetness, while the salt enhances the perception of malt sweetness in the beer.`,
      tip: `ZINC AND THE METALLIC TASTE OF THE SEA: The distinctive "mineral" or "metallic" taste of oyster liquor — different from simple saltiness — is partly attributable to FREE ZINC IONS (Zn²⁺) released from denatured metallothionein during cooking. Metallothionein (MT) is a specialized metal-storage protein found at exceptionally high concentrations in oyster tissues — oysters accumulate zinc as part of their metal-detoxification pathway, binding it to MT's cysteine-rich clusters (30% cysteine by amino acid composition). When MT denatures at 50-60°C during grilling, the Zn₄Cys₁₁ (α-domain) and Zn₃Cys₉ (β-domain) clusters unfold, releasing 7 Zn²⁺ ions per MT molecule into the liquor. These free zinc ions interact with taste receptor cells — possibly through the zinc-sensing receptor GPR39, a G-protein-coupled receptor expressed in taste buds that responds to extracellular Zn²⁺ — producing the distinctive metallic-mineral note. This taste is often described as "the taste of the sea" — and in oysters, it literally is: it's the taste of concentrated seawater minerals stored in a protein that evolved specifically to handle them.`,
    },
  ],
};

export default function HauNuongMoHanhPage() {
  return <RecipeLayout recipe={recipe} />;
}
