'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Chả Mực Hạ Long — Hạ Long Bay Squid Cake
//  Quảng Ninh #1
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. SQUID MANTLE PARAMYOSIN CATCH-STATE GELATION —
//     squid muscle uniquely rich in PARAMYOSIN (30-40%
//     of total myofibrillar protein vs <5% in fish/mammals),
//     paramyosin forms CATCH-STATE cross-bridges that
//     lock into sustained contraction without ATP →
//     when extracted and heated, paramyosin creates
//     a uniquely RIGID, HIGH-MODULUS gel (G' 10-50 kPa)
//     vs fish myosin gel (G' 1-10 kPa), giving chả mực
//     its signature CRISPY-BOUNCY "giòn sần sật" texture
//  2. HAND-POUNDING vs MACHINE-GRINDING SHEAR RATE
//     REGIME — traditional stone mortar pounding at
//     shear rate γ̇ = 10-100 s⁻¹ (low-moderate) preserves
//     paramyosin's native quaternary structure while
//     extracting it, vs high-speed machine grinding
//     γ̇ = 1,000-10,000 s⁻¹ which denatures paramyosin
//     through SHEAR-INDUCED UNFOLDING, destroying the
//     catch-state gelation capacity → machine-ground
//     chả mực is softer and less bouncy
//  3. SQUID INK SAC MELANIN NANOPARTICLE DISPERSION —
//     ink sac melanin granules 100-500 nm diameter,
//     eumelanin polymer conjugated with protein matrix,
//     if ink sac ruptures during cleaning it disperses
//     nanoparticles that are IMPOSSIBLE to wash out
//     (Brownian motion keeps them permanently suspended)
//     → careful ink sac removal is critical
//  4. PORK BACK FAT SOLID-FAT INDEX (SFI) GRADIENT —
//     fat cubes 3-5 mm maintain SFI 40-60% at room temp
//     (mixture of solid tripalmitin/tristearin crystals +
//     liquid triolein), melt progressively at mouth temp
//     36-40°C → timed-release lubrication and flavor
//     delivery during chewing, prevents the "dry rubber"
//     texture of lean-only squid paste
//  5. DEEP-FRY OIL CONVECTIVE HEAT TRANSFER
//     COEFFICIENT MODULATION — squid paste water
//     content 70-75% generates intense steam at oil
//     interface, steam blanket creates FILM BOILING
//     regime (Leidenfrost) h = 200-500 W/m²·K for
//     first 30-60s, then transitions to NUCLEATE
//     BOILING h = 2,000-10,000 W/m²·K as surface
//     dehydrates → two-phase crust development
//  6. HẠ LONG BAY CEPHALOPOD ECOLOGY —
//     Loligo chinensis and Sepioteuthis lessoniana
//     in limestone karst-sheltered waters, Ca²⁺-rich
//     alkaline seawater (pH 8.1-8.3 from CaCO₃
//     dissolution) promotes firmer mantle collagen,
//     monsoon upwelling June-August peak season
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'cha-muc-ha-long',
  title: 'Chả Mực Hạ Long (Hạ Long Bay Hand-Pounded Squid Cake)',
  subtitle: 'Squid paramyosin 30-40% of myofibrillar protein forms catch-state cross-bridges yielding rigid gel G\' 10-50 kPa for signature crispy-bouncy texture, hand-pounding at γ̇ 10-100 s⁻¹ preserves native quaternary structure while machine grinding γ̇ 10,000 s⁻¹ denatures through shear-induced unfolding, and deep-fry film→nucleate boiling transition creates two-phase crust.',
  category: 'APPETIZER',
  difficulty: 'Hard',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/cha-muc-ha-long.jpg',

  intro: `Chả mực Hạ Long is the CROWN JEWEL of Quảng Ninh cuisine — a hand-pounded squid cake that achieves a texture so uniquely CRISPY-BOUNCY ("giòn sần sật") that it has become the defining culinary identity of Hạ Long Bay. This texture cannot be replicated by any other protein source because it depends on a muscle protein found in high concentrations ONLY in cephalopod (squid, octopus, cuttlefish) muscle: PARAMYOSIN.

The CENTRAL MECHANISM is SQUID MANTLE PARAMYOSIN CATCH-STATE GELATION. Squid mantle muscle has a profoundly different protein composition from fish or mammalian muscle. While fish and mammalian muscles contain <5% PARAMYOSIN (relative to total myofibrillar protein), squid mantle contains 30-40% PARAMYOSIN — making it the DOMINANT structural protein. Paramyosin is a coiled-coil α-helical protein (two polypeptide chains wound around each other in a left-handed superhelix) with a molecular weight of approximately 200 kDa and an extraordinary length-to-diameter ratio of ~70:1. In living squid muscle, paramyosin forms the CORE of the thick filaments (the structural backbone of the contractile apparatus), and it has a unique property not found in vertebrate myosins: the ability to form CATCH-STATE CROSS-BRIDGES.

The catch state is a sustained, low-energy contraction where paramyosin molecules lock into a rigid cross-bridge configuration WITHOUT REQUIRING ATP — the cross-bridges remain in a "latched" position indefinitely, maintaining tension with minimal energy expenditure. This is how squid and other mollusks can hold their shells closed or maintain tentacle rigidity for hours without fatigue. In the context of chả mực preparation, the catch-state cross-bridging translates to a gel with exceptionally HIGH ELASTIC MODULUS (G' = 10-50 kPa, compared to 1-10 kPa for fish myosin gels and 5-20 kPa for mammalian meat gels). The paramyosin gel is RIGID and RESILIENT — it springs back immediately and completely when compressed, producing the "bouncy" sensation; and when fractured (by biting), it breaks with a CLEAN, CRISP snap rather than the soft, yielding deformation of a fish cake. This is the "giòn sần sật" — simultaneously crispy (from the fried exterior) and springy-bouncy (from the paramyosin gel interior) — that defines authentic Hạ Long chả mực.

HAND-POUNDING vs MACHINE-GRINDING represents one of the most scientifically significant culinary debates in Vietnamese food culture. The traditional method uses a stone mortar and wooden pestle to pound the squid for 20-40 minutes — a physically demanding process that has become the HALLMARK of "authentic" chả mực. The scientific basis for the superiority of hand-pounding lies in the SHEAR RATE REGIME. Hand-pounding operates at a shear rate of γ̇ = 10-100 s⁻¹ (low-to-moderate shear) — the pestle strikes the squid, compresses it, and withdraws, with each stroke lasting approximately 0.5-1 second. At this shear rate, the paramyosin molecules are EXTRACTED from the thick filaments and dispersed into the surrounding matrix, but their native QUATERNARY STRUCTURE (the coiled-coil dimer) is preserved. The intact coiled-coil structure is essential for catch-state cross-bridging — the two chains must be properly wound around each other for the latch mechanism to function.

Machine grinding (food processor, bowl cutter) operates at γ̇ = 1,000-10,000 s⁻¹ (high shear) — the blades rotate at 1,000-3,000 RPM, generating intense turbulent shear fields. At these shear rates, the paramyosin coiled-coil experiences SHEAR-INDUCED UNFOLDING — the hydrodynamic forces acting on the elongated molecule (which, with its 70:1 aspect ratio, is highly susceptible to extensional flow alignment and unfolding) exceed the stabilizing forces of the coiled-coil interface (hydrophobic interactions + salt bridges, total stabilization energy approximately 100-200 kJ/mol). The chains separate, the coiled-coil unwinds, and the resulting denatured paramyosin can no longer form catch-state cross-bridges. The gel it produces is SOFTER (G' = 3-8 kPa, barely above fish myosin gels) and LESS BOUNCY — it deforms plastically rather than springing back elastically. This is why Hạ Long locals insist that machine-ground chả mực is "not the same" — it's not culinary snobbery, it's POLYMER PHYSICS.

The SQUID INK SAC requires careful removal during cleaning because squid ink contains MELANIN NANOPARTICLES (eumelanin granules, 100-500 nm diameter) that, once dispersed in water, become a PERMANENT COLLOIDAL SUSPENSION. The melanin granules are small enough to undergo BROWNIAN MOTION — random thermal motion driven by collisions with water molecules (kT energy at room temperature) — which keeps them permanently suspended against gravity (the Stokes settling velocity for a 200 nm particle in water is approximately 10⁻⁹ m/s, meaning it would take years to settle 1 cm). Additionally, the melanin granules carry a net NEGATIVE SURFACE CHARGE (zeta potential -30 to -50 mV) due to carboxylate groups on the eumelanin polymer, creating electrostatic repulsion that prevents aggregation and flocculation. Once released, these nanoparticles are essentially IMPOSSIBLE to remove by washing — they permanently stain the squid flesh gray-black. While the ink is not harmful (in fact, squid ink is edible and used as a food coloring), the gray color detracts from the PRISTINE WHITE appearance that defines premium chả mực.

PORK BACK FAT dispersed as 3-5 mm cubes throughout the paste serves as a TIMED-RELEASE LUBRICATION SYSTEM. At room temperature (25°C), pork back fat has a SOLID-FAT INDEX (SFI) of 40-60% — meaning 40-60% of the triglycerides are in crystalline solid form (primarily tripalmitin C₁₆:₀ mp 63°C and tristearin C₁₈:₀ mp 72°C) while the remainder is liquid (primarily triolein C₁₈:₁ mp 5°C). When the fat cubes reach MOUTH TEMPERATURE (36-40°C), the SFI drops to 15-25% — a significant portion of the solid fat melts, releasing liquid fat that LUBRICATES the chewing process and DELIVERS lipid-soluble flavor compounds (Maillard products from the fried exterior, volatile aldehydes and ketones). Without the fat, the lean squid paste would have a dry, rubbery, tiring chewing experience — the fat transforms it into something SUCCULENT and pleasurable. The fat cubes also create TEXTURAL CONTRAST — their softness against the rigid paramyosin gel is perceived as a "melt-in-mouth" moment within the otherwise bouncy matrix.

The DEEP-FRYING process involves a TWO-PHASE heat transfer transition. When the wet squid paste (70-75% moisture) enters hot oil (170-180°C), the surface water VAPORIZES explosively, generating a STEAM BLANKET that separates the food surface from the oil. This is the FILM BOILING (Leidenfrost) regime — the steam blanket acts as an insulating layer, reducing the heat transfer coefficient to h = 200-500 W/m²·K. The surface dehydrates relatively SLOWLY during this phase (30-60 seconds), producing a thin, pale, partially set skin. As the surface loses moisture and the steam generation rate decreases, the continuous steam blanket COLLAPSES and the oil makes direct contact with the food surface — this is the transition to NUCLEATE BOILING, where h jumps to 2,000-10,000 W/m²·K (a 5-20× increase). The surface temperature rises rapidly, driving intense Maillard browning and crust formation in the second phase. This two-phase process creates a DUAL-LAYER CRUST: a thin, dense, smooth inner layer (formed during film boiling) underneath a thicker, rough, deeply browned outer layer (formed during nucleate boiling) — the combination produces the uniquely satisfying "crunch" of properly fried chả mực.

HẠ LONG BAY's limestone karst geology creates a unique cephalopod habitat. The thousands of limestone islands and their submerged karst formations dissolve slowly in seawater, releasing Ca²⁺ and CO₃²⁻ ions that maintain the local water at a slightly elevated pH (8.1-8.3, compared to open ocean pH 8.0-8.1) and elevated calcium concentration. This mineral-rich environment promotes the development of FIRMER MANTLE COLLAGEN in the resident squid species (Loligo chinensis, Sepioteuthis lessoniana) — the higher calcium availability supports more extensive collagen cross-linking, producing a thicker, tougher mantle that yields more paramyosin per unit mass. The sheltered waters between the karst islands also provide calm, plankton-rich feeding grounds, and the monsoon-driven UPWELLING from June to August brings nutrient-rich deep water to the surface, supporting the intense phytoplankton blooms that feed the squid population — this is why the peak season for chả mực is summer, when the squid are fattest and most abundant.`,

  ingredientSections: [
    {
      title: 'Squid Paste — Paramyosin Catch-State System',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'fresh squid mantles (mực ống), cleaned',
          note: 'Hạ Long Bay squid (Loligo chinensis or Sepioteuthis lessoniana) has firmer mantle from Ca²⁺-rich karst waters. Remove ink sac CAREFULLY — once melanin nanoparticles disperse, they cannot be washed out (Brownian motion keeps them permanently suspended).',
        },
        {
          amount: 80,
          unit: 'g',
          name: 'pork back fat, diced into 3-5 mm cubes',
          note: 'SOLID-FAT INDEX 40-60% at room temp → melts progressively at mouth temperature 36-40°C for timed-release lubrication. Do NOT grind the fat — discrete cubes provide textural contrast.',
        },
        {
          amount: 2,
          unit: 'tsp',
          name: 'salt (≈2% of paste weight)',
          note: 'Extracts paramyosin from thick filaments into sol. Too little → poor extraction → crumbly. Too much → excessive water binding → soft texture.',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'fish sauce',
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'sugar',
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'white pepper',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'dill fronds (thì là), finely chopped',
          note: 'Classic Quảng Ninh pairing — dill\'s anethole complements squid\'s sweetness.',
        },
      ],
    },
    {
      title: 'Frying',
      items: [
        {
          amount: 500,
          unit: 'ml',
          name: 'cooking oil for deep-frying',
          note: 'Temperature 170-180°C. Observe the film boiling → nucleate boiling transition: vigorous bubbling (steam blanket) → calmer sizzling (direct oil contact) → crust formation.',
        },
      ],
    },
    {
      title: 'Serving',
      items: [
        {
          amount: 1,
          unit: 'unit',
          name: 'lime, quartered',
        },
        {
          amount: 1,
          unit: 'cup',
          name: 'nước chấm or chili sauce',
        },
        {
          amount: 1,
          unit: 'bunch',
          name: 'fresh herbs: dill, cilantro, perilla',
        },
        {
          amount: 1,
          unit: 'cup',
          name: 'pickled vegetables (đồ chua)',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Clean the squid — melanin nanoparticle containment, 15 minutes',
      description: `SEPARATE the squid mantles from the heads/tentacles. CAREFULLY locate and REMOVE the INK SAC — a small, silvery-black sac located near the head attachment point. Handle it gently: if it ruptures, the eumelanin nanoparticles (100-500 nm diameter) will disperse into a colloidal suspension that CANNOT be removed by washing — Brownian motion keeps them permanently in suspension, and their negative zeta potential (-30 to -50 mV) prevents aggregation.

PEEL the outer purple-pink skin from the mantles — this removes the chromatophore layer (pigment cells) that would discolor the paste. The cleaned mantles should be PURE WHITE and slightly translucent.

REMOVE the internal cartilage (gladius/pen) and any remaining viscera. RINSE thoroughly and PAT COMPLETELY DRY with paper towels — excess water dilutes the paramyosin concentration and weakens the gel.

CUT the cleaned mantles into 2-3 cm strips for easier pounding.`,
      tip: `SQUID INK — WHEN NANOTECHNOLOGY MAKES A MESS: Squid ink melanin granules are NATURAL NANOPARTICLES — eumelanin polymer (5,6-dihydroxyindole + 5,6-dihydroxyindole-2-carboxylic acid copolymer) conjugated with a protein matrix into spherical granules 100-500 nm in diameter. At this size, BROWNIAN MOTION — the random thermal jiggling caused by water molecule collisions (kinetic energy kT ≈ 4 × 10⁻²¹ J at room temperature) — overwhelms GRAVITY (Stokes settling velocity v = 2r²Δρg/9η ≈ 10⁻⁹ m/s for a 200 nm particle). The particles never settle. Additionally, the melanin surface carries CARBOXYLATE groups from the DHICA monomers, giving each particle a net negative charge (zeta potential -30 to -50 mV). This charge creates ELECTROSTATIC REPULSION between particles, preventing them from aggregating into larger clusters that might settle. The combination of Brownian motion (prevents settling) and electrostatic repulsion (prevents aggregation) makes dispersed squid ink a THERMODYNAMICALLY STABLE colloid — it will remain uniformly dispersed essentially forever, barring chemical intervention (adding salt to screen charges, or acid to protonate carboxylates).`,
    },
    {
      title: 'Hand-pound the squid — low-shear paramyosin extraction, 25-30 minutes',
      description: `PLACE the squid strips in a large STONE MORTAR with salt, fish sauce, sugar, and white pepper.

BEGIN POUNDING with a wooden pestle using a rhythmic, VERTICAL STRIKING motion — lift the pestle 15-20 cm and bring it down firmly onto the squid. The pounding should be FORCEFUL but not frantic — approximately 60-80 strikes per minute.

POUND for 25-30 minutes. The squid will progress through distinct stages:

MINUTES 1-5: The mantle strips break apart into irregular fragments. The texture is still fibrous and non-cohesive.

MINUTES 5-15: The fragments begin to MERGE into a cohesive mass. The salt is extracting PARAMYOSIN from the thick filaments — you can see the paste becoming STICKIER and more GLOSSY as the dissolved protein creates a continuous sol phase around the remaining fiber fragments.

MINUTES 15-25: The paste achieves a SMOOTH, ELASTIC consistency. When you lift the pestle, the paste STRETCHES and SNAPS BACK — this is the paramyosin's catch-state cross-bridges forming and releasing. The paste should make a distinctive SLAPPING sound when the pestle strikes it.

MINUTES 25-30: The paste reaches the endpoint — VERY STICKY (adheres strongly to the pestle and mortar), HIGHLY ELASTIC (springs back immediately when pressed), and GLOSSY (the paramyosin sol reflects light). A small piece pressed between two fingers and pulled apart should stretch 2-3 cm before snapping cleanly.

FOLD in the diced pork back fat and chopped dill by hand — do NOT pound further. The fat cubes should remain INTACT as discrete 3-5 mm particles throughout the paste.`,
      tip: `SHEAR RATE AND PROTEIN FATE — THE PHYSICS OF HAND vs MACHINE: The difference between hand-pounding (γ̇ = 10-100 s⁻¹) and machine-grinding (γ̇ = 1,000-10,000 s⁻¹) is not merely quantitative — it crosses a CRITICAL THRESHOLD in paramyosin's mechanical stability. Paramyosin's coiled-coil dimer is stabilized by a network of hydrophobic interactions and salt bridges along the 130 nm-long interface between the two chains, with a total stabilization energy of ~100-200 kJ/mol. The SHEAR-INDUCED UNFOLDING of elongated polymers follows the de Gennes theory: the critical shear rate for unfolding scales as γ̇_c ∝ kT/(η·R_g³), where R_g is the radius of gyration. For paramyosin (R_g ≈ 15-20 nm due to its extreme elongation), γ̇_c falls in the range of 500-2,000 s⁻¹. Hand-pounding at 10-100 s⁻¹ is SAFELY BELOW this threshold — the paramyosin is dislodged from the thick filaments and dispersed but its coiled-coil remains intact. Machine-grinding at 1,000-10,000 s⁻¹ EXCEEDS the threshold — the hydrodynamic forces unwind the coiled-coil, and the denatured chains cannot form catch-state cross-bridges. This is not a subtle effect: the gel modulus drops from G' = 10-50 kPa (hand-pounded) to G' = 3-8 kPa (machine-ground) — a 3-6× reduction that every Hạ Long local can detect by chewing.`,
    },
    {
      title: 'Shape and deep-fry — film→nucleate boiling transition, 15 minutes',
      description: `WET your hands with water to prevent sticking. SHAPE the paste into flat, oval patties approximately 8 cm long × 5 cm wide × 1.5 cm thick. The flat shape ensures EVEN COOKING — a thicker patty would have a raw center by the time the exterior is properly browned. Press each patty firmly to eliminate air pockets, which would expand during frying and create structural weaknesses.

HEAT oil to 170-180°C in a deep pan or wok (test with a small piece of paste — it should sink briefly, then float immediately with vigorous bubbling).

CAREFULLY SLIDE the patties into the hot oil, 3-4 at a time (do not overcrowd — this drops the oil temperature below 160°C, preventing proper crust formation).

OBSERVE the TWO-PHASE FRYING PROCESS:

PHASE 1 — FILM BOILING (0-60 seconds): Intense, VIGOROUS bubbling as the surface water vaporizes explosively, creating a steam blanket (Leidenfrost effect). Heat transfer coefficient h = 200-500 W/m²·K. The surface dehydrates slowly, forming a thin, pale, partially set skin. Do NOT flip during this phase.

PHASE 2 — NUCLEATE BOILING (60-180 seconds): The bubbling CALMS significantly as the steam blanket collapses and oil makes direct contact with the dehydrated surface. Heat transfer coefficient JUMPS to h = 2,000-10,000 W/m²·K. The surface temperature rises rapidly → intense Maillard browning → golden-brown crust formation. FLIP ONCE during this phase to brown both sides evenly.

REMOVE when DEEP GOLDEN-BROWN on both sides (total frying time 3-4 minutes). DRAIN on a wire rack — not paper towels, which trap steam and soften the crust.

The cross-section should show: GOLDEN CRUST (1-2 mm, dual-layer from two-phase frying) → WHITE, BOUNCY INTERIOR (paramyosin gel) → DISCRETE FAT CUBES (partially melted pork back fat).`,
      tip: `DUAL-LAYER CRUST — THE FILM-TO-NUCLEATE BOILING TRANSITION: The crust on properly fried chả mực has a structure invisible to the eye but perceptible to the tooth. The INNER CRUST LAYER forms during film boiling (Phase 1): relatively slow dehydration creates a THIN, DENSE, SMOOTH layer where the protein chains have time to pack tightly before setting — this layer is only 0.1-0.3 mm thick but contributes a clean "snap" when bitten. The OUTER CRUST LAYER forms during nucleate boiling (Phase 2): the sudden surge in heat transfer rate creates rapid, ROUGH, POROUS dehydration with extensive Maillard browning (the golden color) and gas cell formation (from residual moisture escaping through the already-set inner layer) — this layer is 0.5-1.5 mm thick and provides the audible "crunch." The combination — snap from the inner layer, crunch from the outer layer — is what makes fried chả mực texturally superior to baked or steamed squid cake, where only a single uniform surface texture develops.`,
    },
    {
      title: 'Serve — the Hạ Long experience',
      description: `CUT each chả mực patty into 3-4 pieces to showcase the cross-section — the contrast between the golden crust, white interior, and scattered pork fat cubes is part of the visual appeal.

ARRANGE on a plate with lime wedges, fresh herbs (dill, cilantro, perilla), and pickled vegetables.

SERVE with nước chấm or chili sauce for dipping.

THE EATING SEQUENCE: Bite through the DUAL-LAYER CRUST (snap of the inner layer + crunch of the outer layer) → encounter the BOUNCY PARAMYOSIN GEL interior (firm elastic resistance → clean fracture with satisfying rebound) → hit a PORK FAT CUBE that melts at mouth temperature (SFI drops from 40-60% to 15-25%, releasing liquid fat that lubricates the chewing and delivers lipid-soluble Maillard flavors) → the dill aroma rises retronasally with each chew.

THE BOUNCE TEST: Press the cut surface of the chả mực firmly with your finger, then release. Authentic hand-pounded chả mực will spring back to its ORIGINAL SHAPE immediately and completely — like pressing a rubber ball. Machine-ground versions will deform partially and recover slowly with visible residual compression. This is the paramyosin catch-state gel at work — the G' = 10-50 kPa elastic modulus providing near-perfect elastic recovery.`,
      tip: `WHY HẠ LONG CHẢ MỰC IS IRREPLACEABLE — THE TERROIR OF LIMESTONE KARST CEPHALOPODS: Hạ Long Bay's 1,969 limestone karst islands create a sheltered, mineral-rich marine environment unique in Vietnam. The karst limestone (CaCO₃) dissolves slowly in seawater, releasing Ca²⁺ ions that maintain elevated calcium concentrations in the bay's waters. This Ca²⁺ enrichment affects the squid in two ways: (1) COLLAGEN CROSSLINKING — higher calcium availability promotes more extensive lysyl oxidase-mediated crosslinking of the mantle collagen, producing a firmer, tougher raw material with higher paramyosin concentration per unit mass; (2) CALCIFIED GLADIUS — the internal cartilage (pen/gladius) is more heavily calcified, and the mineralization extends slightly into the surrounding mantle tissue, contributing trace amounts of calcium phosphate that may act as nucleation sites for the paramyosin gel network, further increasing the gel modulus. The combination of genetic factors (endemic squid populations adapted to the karst environment over thousands of generations) and environmental factors (mineral-rich water, sheltered feeding grounds, monsoon-driven upwelling nutrition) produces squid that is measurably FIRMER and makes BETTER chả mực than squid from other Vietnamese waters — a genuine example of marine TERROIR.`,
    },
  ],
};

export default function ChaMucHaLongPage() {
  return <RecipeLayout recipe={recipe} />;
}
