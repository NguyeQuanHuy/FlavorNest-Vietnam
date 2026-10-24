'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Cá Mè Sông Mã Kho Riềng — Mã River Silver Carp Braised with Galangal
//  Thanh Hóa #10
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. SILVER CARP (Hypophthalmichthys molitrix) INTRAMUSCULAR
//     BONE DISSOLUTION BY PROLONGED ACID-THERMAL BRAISING —
//     Y-shaped pin bones (epineurals/epicentrals) are
//     hydroxyapatite Ca₁₀(PO₄)₆(OH)₂ crystals embedded
//     in Type I collagen, braising pH 4.5-5.5 (fish sauce +
//     caramel) + 90-95°C for 2-4 hr dissolves HA crystal
//     lattice via H⁺ substitution at OH⁻ sites AND
//     denatures collagen scaffold → bones soften to
//     edible, calcium-bioavailable paste
//  2. GALANGAL 1'-ACETOXYCHAVICOL ACETATE (ACA)
//     LIPID OXIDATION INHIBITION — ACA IC₅₀ 2-10 µM
//     against lipoxygenase (LOX), blocks conversion of
//     PUFA ω-3 EPA/DHA → hydroperoxides → malondialdehyde
//     (fishy off-flavor), galangal is a FUNCTIONAL
//     antioxidant not just aromatic
//  3. FISH SAUCE CARAMEL (NƯỚC MÀU) MELANOIDIN
//     COLLOID — sucrose pyrolysis at 170-190°C produces
//     melanoidins MW 10-100 kDa, negatively charged
//     colloidal particles that complex with Fe²⁺/Fe³⁺
//     from fish hemoglobin preventing metallic off-flavor,
//     + color contribution OD 420 nm
//  4. CLAY POT THERMAL MASS + POROSITY —
//     unglazed clay cp 0.9-1.0 kJ/kg·K, wall thickness
//     5-10 mm stores thermal energy for 30-60 min gentle
//     cooling curve, microporous wall (pore size 1-50 µm)
//     allows SLOW EVAPORATIVE COOLING that self-regulates
//     temperature below 100°C, preventing violent boiling
//  5. COLLAGEN → GELATIN SOL-GEL CYCLING —
//     silver carp skin collagen Td 35-40°C, prolonged
//     braising converts to gelatin → cooling gels at
//     25-30°C forming aspic-like coating that GLAZES
//     each piece, reheating re-melts → cycleable
//     sol-gel = the "kho" texture that improves overnight
//  6. MÃ RIVER ALLUVIAL FLOODPLAIN ECOLOGY —
//     Hypophthalmichthys molitrix filter-feeder on
//     phytoplankton, Mã River nutrient-rich alluvium
//     supports dense Microcystis/Chlorella blooms,
//     fish accumulate astaxanthin + β-carotene from
//     algal diet → golden flesh color, flood-season
//     July-October peak fat content 8-12%
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'ca-me-song-ma',
  title: 'Cá Mè Sông Mã Kho Riềng (Mã River Silver Carp Braised with Galangal)',
  subtitle: 'Intramuscular hydroxyapatite pin bones dissolve via H⁺ substitution at pH 4.5-5.5 over 2-4 hours rendering bones edible and calcium-bioavailable, galangal ACA inhibits lipoxygenase IC₅₀ 2-10 µM blocking PUFA oxidation to fishy malondialdehyde, and fish sauce caramel melanoidins complex Fe²⁺/Fe³⁺ preventing metallic off-flavor while gelatin sol-gel cycling creates overnight-improved aspic glaze.',
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '3 hrs',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/ca-me-song-ma.jpg',

  intro: `Cá mè sông Mã kho riềng is Thanh Hóa's definitive SLOW-BRAISED FISH — a preparation that transforms the SILVER CARP (Hypophthalmichthys molitrix), one of the bonier freshwater fish in Vietnamese waters, into a dish where EVERY PART IS EDIBLE, including the notorious Y-shaped pin bones that make this species frustrating to eat when prepared by quick-cooking methods. The transformation depends on a 2-4 hour braising process that dissolves the bones through acid-thermal HYDROXYAPATITE DISSOLUTION while simultaneously converting the skin collagen into a GELATIN GLAZE that improves with each reheating cycle.

The CENTRAL MECHANISM is INTRAMUSCULAR BONE DISSOLUTION BY PROLONGED ACID-THERMAL BRAISING. Silver carp possess an extraordinary number of INTRAMUSCULAR PIN BONES — small, Y-shaped bones (epineural and epicentral bones) embedded within the muscle tissue itself, not attached to the skeleton. These bones are impossible to remove completely during filleting because they are branching, hair-thin at their tips, and anchored deep within the muscle fibers. Structurally, each pin bone is a COMPOSITE MATERIAL: a mineral phase of HYDROXYAPATITE (Ca₁₀(PO₄)₆(OH)₂) — the same crystalline calcium phosphate that forms human teeth and bones — deposited on a scaffold of TYPE I COLLAGEN fibers. The hydroxyapatite crystals (20-50 nm × 5-10 nm plate-shaped) are aligned along the collagen fibers, creating a material with remarkable compressive strength (100-200 MPa) and moderate tensile strength (50-100 MPa).

Dissolving these bones requires attacking BOTH phases simultaneously. The ACID PHASE: the braising liquid maintains a pH of 4.5-5.5 (from fish sauce, which contains organic acids including lactic and acetic acid, plus the caramel's weak acids). At this pH, H⁺ ions SUBSTITUTE at the OH⁻ sites in the hydroxyapatite crystal lattice: Ca₁₀(PO₄)₆(OH)₂ + 2H⁺ → Ca₁₀(PO₄)₆(H₂O)₂. This substitution destabilizes the crystal lattice, and the surface layer begins to dissolve, releasing Ca²⁺ and HPO₄²⁻ ions into the braising liquid. The dissolution rate follows the NOYES-WHITNEY equation: dm/dt = DA(C_s - C)/h, where the dissolution rate is proportional to the surface area A and the undersaturation (C_s - C) — meaning the process is fastest at the beginning (when the bone surface is intact and the braising liquid has low calcium concentration) and slows as the liquid saturates. The THERMAL PHASE: at 90-95°C (the gentle braising temperature), the Type I collagen scaffold undergoes THERMAL DENATURATION — the triple helix unwinds into random coils (gelatin), destroying the structural framework that holds the hydroxyapatite crystals in place. Without the collagen scaffold, the remaining mineral crystals lose their mechanical integrity and crumble into a soft, calcium-rich paste that is not only EDIBLE but NUTRITIONALLY VALUABLE — the dissolved and particulate calcium is far more BIOAVAILABLE than intact bone mineral.

The duration required depends on the bone diameter: the thinnest pin bone tips (0.1-0.3 mm) soften within 1 hour; the thickest bone bases (1-2 mm) require 3-4 hours. This is why the traditional instruction is to braise "until you can eat the bones" — the cook is empirically testing whether the hydroxyapatite dissolution has reached the thickest bone cross-sections.

GALANGAL (Alpinia galanga) in this dish serves a FUNCTIONAL ANTIOXIDANT role beyond its aromatic contribution. The key bioactive compound is 1'-ACETOXYCHAVICOL ACETATE (ACA), a phenylpropanoid found at 0.1-0.5% in the rhizome. ACA is a potent INHIBITOR of LIPOXYGENASE (LOX) — the enzyme that catalyzes the oxidation of POLYUNSATURATED FATTY ACIDS (PUFAs) in fish flesh. Silver carp, being a freshwater fish with significant PUFA content (EPA + DHA comprising 10-20% of total fatty acids), is highly susceptible to LOX-mediated lipid oxidation, which produces HYDROPEROXIDES that decompose into MALONDIALDEHYDE (MDA), HEXANAL, and other compounds responsible for the "fishy" off-flavor that develops during cooking and storage. ACA inhibits LOX with an IC₅₀ of 2-10 µM — far below the concentration achieved by even a modest amount of galangal in the braising liquid. By blocking LOX at the source, galangal PREVENTS the formation of fishy off-flavors rather than masking them with its own aroma. This is why galangal is specifically paired with "fishy" freshwater species (cá mè, cá chép, cá trắm) while marine fish, which have lower LOX activity, are typically braised with ginger instead.

FISH SAUCE CARAMEL (NƯỚC MÀU) is the dual-function coloring and flavor agent. When sugar (sucrose) is heated to 170-190°C without water, it undergoes PYROLYSIS — the sucrose molecule breaks apart into glucose and fructose, which then undergo a cascade of dehydration, fragmentation, and polymerization reactions producing MELANOIDINS — dark brown, high-molecular-weight (10-100 kDa) COLLOIDAL PARTICLES. These melanoidin colloids are NEGATIVELY CHARGED at the braising pH (their carboxylate groups are deprotonated), giving them strong METAL-CHELATING ability. In the braising liquid, the melanoidins complex with Fe²⁺ and Fe³⁺ ions released from the fish's HEMOGLOBIN and MYOGLOBIN during cooking — these free iron ions would otherwise catalyze further lipid oxidation AND impart a METALLIC off-flavor. By chelating the iron, the caramel melanoidins serve as both ANTIOXIDANTS (preventing iron-catalyzed oxidation) and FLAVOR PROTECTORS (preventing metallic taste). The deep brown color (optical density at 420 nm = 0.5-2.0 for typical nước màu dilutions) also provides the characteristic DARK AMBER appearance of kho dishes.

The CLAY POT (niêu đất) is not merely a vessel — it is a THERMAL MANAGEMENT SYSTEM. Unglazed clay has a specific heat capacity of 0.9-1.0 kJ/kg·K and typical wall thickness of 5-10 mm, meaning a 1 kg clay pot stores 4.5-5.0 kJ of thermal energy per degree of temperature — this THERMAL MASS provides a gentle, gradual cooling curve when the pot is removed from heat, maintaining the contents above 80°C for 30-60 minutes without additional heating. More importantly, the MICROPOROUS clay wall (pore size 1-50 µm, porosity 15-30%) allows SLOW WATER PERMEATION from the interior to the exterior surface, where it EVAPORATES. This evaporative cooling self-regulates the pot temperature BELOW 100°C even when placed on a heat source that would bring a metal pot to a violent boil — the evaporative heat loss (2260 kJ/kg of water evaporated) exactly counterbalances the excess heat input. The result is a NATURALLY GENTLE SIMMER without the need for precise heat control — the clay pot's physics prevents the destructive turbulence of boiling that would break apart the fish pieces.

COLLAGEN → GELATIN SOL-GEL CYCLING is what makes kho dishes "improve overnight." Silver carp skin contains TYPE I COLLAGEN with a denaturation temperature (Td) of 35-40°C — lower than mammalian collagen (Td 55-65°C) because fish collagen has fewer HYDROXYPROLINE residues (which stabilize the triple helix through hydrogen bonding). During braising, the collagen converts quantitatively to GELATIN — a disordered protein that dissolves in the hot braising liquid. When the dish COOLS to room temperature (25-30°C), this dissolved gelatin undergoes SOL→GEL TRANSITION — the gelatin molecules partially re-associate into triple helical structures (not as organized as native collagen, but sufficient to form a gel network). This gel COATS each piece of fish with a GLOSSY, ASPIC-LIKE GLAZE that concentrates the braising liquid's flavors (fish sauce, caramel, galangal) into a thin, intensely flavored layer on the fish surface. When REHEATED, the gel melts back to a sol (GEL→SOL), redistributing and re-equilibrating the flavors. Each heating-cooling cycle (reheating leftovers) refines the gelatin network through ANNEALING — the molecules have more opportunities to find optimal arrangements, producing a stronger, clearer gel with each cycle. This is why kho dishes are proverbially better the NEXT DAY — the gelatin has gone through at least one additional sol-gel cycle, producing a more refined, more intensely flavored glaze.

The MÃ RIVER (Sông Mã) is Thanh Hóa's lifeline — a 512 km waterway that drains 28,400 km² of watershed from the mountains of Laos through the fertile alluvial plain to the sea. The river's NUTRIENT-RICH ALLUVIUM supports dense PHYTOPLANKTON blooms (Microcystis, Chlorella, Scenedesmus) that are the primary food source for silver carp, which are FILTER FEEDERS — they swim with their mouths open, straining phytoplankton from the water through their specialized gill rakers. This algal diet gives the fish two distinctive characteristics: (1) GOLDEN FLESH COLOR from accumulated carotenoid pigments (astaxanthin, β-carotene) biosynthesized by the algae and deposited in the fish's adipose tissue; (2) PEAK FAT CONTENT of 8-12% during the flood season (July-October), when nutrient runoff drives massive algal blooms and the fish feed voraciously in preparation for the leaner dry season.`,

  ingredientSections: [
    {
      title: 'Silver Carp — Bone Dissolution Subject',
      items: [
        {
          amount: 800,
          unit: 'g',
          name: 'silver carp (cá mè), cut into 3-4 cm steaks through the bone',
          note: 'Mã River cá mè has golden flesh from carotenoid-rich phytoplankton diet. Leave bones IN — the braising will dissolve them. Cross-cut steaks ensure maximum surface area for acid penetration.',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'salt (for initial cleaning)',
          note: 'Rub salt over fish pieces and rinse to remove surface mucus and blood.',
        },
      ],
    },
    {
      title: 'Braising Liquid — Acid-Melanoidin-Gelatin System',
      items: [
        {
          amount: 4,
          unit: 'tbsp',
          name: 'fish sauce (nước mắm)',
          note: 'Primary acid source (pH 5.0-5.5) + amino acids for flavor + organic acids for hydroxyapatite dissolution.',
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'nước màu (caramel sauce)',
          note: 'MELANOIDIN COLLOID — sucrose pyrolysis product. Fe²⁺/Fe³⁺ chelation prevents metallic off-flavor. Make by heating 3 tbsp sugar in 1 tbsp water until dark amber, then adding 3 tbsp water carefully.',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'sugar',
        },
        {
          amount: 200,
          unit: 'ml',
          name: 'water or light pork broth',
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'black pepper',
        },
      ],
    },
    {
      title: 'Galangal — LOX Inhibitor + Aromatic',
      items: [
        {
          amount: 80,
          unit: 'g',
          name: 'fresh galangal (riềng), sliced into 2 mm rounds',
          note: 'ACA concentration 0.1-0.5% — LOX inhibitor IC₅₀ 2-10 µM. Use FRESH, not dried — ACA degrades during drying. Slice thin for maximum surface area extraction.',
        },
        {
          amount: 3,
          unit: 'unit',
          name: 'fresh chili, halved lengthwise',
        },
        {
          amount: 3,
          unit: 'unit',
          name: 'shallots, halved',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Prepare the caramel and marinate — melanoidin formation, 15 minutes',
      description: `MAKE the nước màu: Heat 3 tablespoons sugar with 1 tablespoon water in a small saucepan over MEDIUM heat. Do NOT stir — swirl the pan gently. The sugar melts at 186°C and then undergoes PYROLYSIS at 170-190°C — the sucrose breaks into glucose and fructose, which fragment, dehydrate, and polymerize into MELANOIDIN COLLOIDS (MW 10-100 kDa, negatively charged at the carboxylate groups). Watch the color transition: pale gold → amber → dark brown → approaching black. STOP at DARK AMBER (just before black) by carefully adding 3 tablespoons water (the mixture will splatter violently — the water flash-vaporizes on contact with the 190°C sugar). Stir to dissolve. The finished nước màu should be the color of strong coffee — OD 420 nm of approximately 1.0-2.0 when diluted 1:10.

CLEAN the fish steaks: rub with salt, rinse thoroughly, and pat dry.

MARINATE the fish: In a bowl, combine fish sauce, nước màu, sugar, and pepper. Add the fish steaks and turn to coat evenly. Allow to marinate for 15-30 minutes — the fish sauce (pH 5.0-5.5) begins the surface-level hydroxyapatite dissolution immediately, giving the prolonged braising a head start.`,
      tip: `MELANOIDIN Fe²⁺/Fe³⁺ CHELATION — THE HIDDEN FUNCTION OF CARAMEL IN FISH BRAISING: Most cooks think of nước màu as simply a coloring agent — and it does provide the characteristic dark amber color of kho dishes (absorbance at 420 nm). But its more important function is CHEMICAL: the melanoidin polymers produced during sucrose pyrolysis contain numerous CARBOXYLATE (-COO⁻) and HYDROXYL (-OH) groups that act as CHELATING LIGANDS for transition metal ions. When fish hemoglobin and myoglobin are thermally denatured during braising, they release their heme-bound IRON as free Fe²⁺ and Fe³⁺ ions. Free iron in an acidic, oxygen-containing environment is a powerful PRO-OXIDANT — it catalyzes the Fenton reaction (Fe²⁺ + H₂O₂ → Fe³⁺ + OH• + OH⁻), generating hydroxyl radicals that attack the PUFA chains in the fish lipids, producing the malondialdehyde and hexanal responsible for "warmed-over" fishy flavor. The melanoidin colloids SEQUESTER this free iron, forming stable Fe-melanoidin complexes that are catalytically INACTIVE — the iron is still there, but it's locked in a coordination complex that prevents it from participating in Fenton chemistry. This is why kho dishes made WITHOUT caramel develop an unpleasant metallic, fishy flavor during prolonged braising, while those WITH caramel remain clean-tasting.`,
    },
    {
      title: 'Layer in clay pot — thermal management architecture, 5 minutes',
      description: `LAYER the galangal slices across the bottom of a CLAY POT (niêu đất) or heavy-bottomed pot. The galangal serves double duty: (1) it creates a PHYSICAL BARRIER between the fish and the pot bottom, preventing direct contact that would cause sticking and burning; (2) it positions the galangal in the HOTTEST ZONE of the pot, maximizing the extraction of ACA (1'-acetoxychavicol acetate) into the braising liquid.

ARRANGE the marinated fish steaks in a SINGLE LAYER over the galangal bed. Nestle the halved shallots and chili between the fish pieces.

POUR the remaining marinade and the water/broth over the fish — the liquid should come approximately 2/3 up the sides of the fish, NOT fully submerging it. The exposed top surface will be basted by the CONDENSATION that drips from the pot lid, creating a gentle self-basting cycle.

COVER with a tight-fitting lid.`,
      tip: `CLAY POT SELF-REGULATION — EVAPORATIVE COOLING PHYSICS: An unglazed clay pot is a SELF-REGULATING thermal system. The microporous clay wall (pore diameter 1-50 µm, porosity 15-30%) allows water from the braising liquid to slowly PERMEATE through the wall by capillary action. When this water reaches the outer surface, it EVAPORATES — absorbing 2,260 kJ per kilogram of water vaporized (the latent heat of vaporization). This evaporative cooling AUTOMATICALLY prevents the pot contents from exceeding 100°C, even if the heat source is too strong. The self-regulation works by feedback: if the heat input increases, more water permeates and evaporates, increasing the cooling effect; if the heat decreases, less water evaporates, and the pot retains more heat. A metal pot lacks this mechanism — its non-porous walls trap all the heat, and the contents can reach a VIOLENT ROLLING BOIL that breaks apart the fish pieces and drives off volatile aromatics. The clay pot's gentle, self-regulated simmer keeps the fish intact while maintaining the optimal 90-95°C temperature for bone dissolution.`,
    },
    {
      title: 'Braise — bone dissolution + gelatin formation, 2-3 hours',
      description: `BRING the pot to a GENTLE SIMMER over medium heat. Once simmering, REDUCE heat to LOW — the contents should produce small, lazy bubbles, not a rolling boil. If using a clay pot, the porous walls will self-regulate the temperature below 100°C.

BRAISE for 2-3 HOURS with the lid on. During this time, three processes occur simultaneously:

(1) HYDROXYAPATITE DISSOLUTION: The H⁺ ions from the fish sauce and caramel attack the crystal lattice of the pin bones — Ca₁₀(PO₄)₆(OH)₂ + H⁺ → Ca²⁺ + HPO₄²⁻ released into the liquid. Meanwhile, the 90-95°C temperature denatures the Type I collagen scaffold holding the crystals, causing the bones to progressively SOFTEN from the thinnest tips inward to the thickest bases.

(2) ACA EXTRACTION: The galangal releases 1'-acetoxychavicol acetate into the braising liquid, where it INHIBITS lipoxygenase (LOX) with IC₅₀ 2-10 µM, preventing the oxidation of the fish's PUFA content (EPA, DHA) into malondialdehyde and hexanal (fishy off-flavors).

(3) COLLAGEN → GELATIN CONVERSION: The fish skin collagen (Td 35-40°C for freshwater fish) denatures and dissolves as GELATIN into the braising liquid. The gelatin concentration gradually increases, causing the braising liquid to become SYRUPY and glossy.

CHECK at 2 hours: press one of the thicker bone cross-sections with a spoon. If it CRUSHES easily into paste, the bones are dissolved. If it still feels hard, continue braising for another 30-60 minutes. The thinnest pin bones should have completely disappeared into the flesh.

In the final 30 minutes, REMOVE THE LID to allow the braising liquid to REDUCE — concentrating the flavors and increasing the gelatin concentration for a better glaze upon cooling.`,
      tip: `BONE DISSOLUTION KINETICS — THE NOYES-WHITNEY EQUATION IN YOUR KITCHEN: The rate at which the pin bones dissolve follows the Noyes-Whitney equation: dm/dt = DA(C_s - C)/h, where dm/dt is the dissolution rate, D is the diffusion coefficient of Ca²⁺ in the braising liquid (~10⁻⁹ m²/s), A is the bone surface area, C_s is the saturation concentration of calcium at the bone surface, C is the bulk calcium concentration, and h is the thickness of the diffusion boundary layer. This equation explains several practical observations: (1) CROSS-CUT STEAKS dissolve faster than fillets because cutting through the bones INCREASES A (exposed surface area). (2) The dissolution SLOWS DOWN over time because C increases (the liquid becomes saturated with calcium). Adding a splash of VINEGAR partway through the braise helps by increasing H⁺ concentration, which INCREASES C_s (more calcium can dissolve at lower pH). (3) GENTLE STIRRING occasionally helps because it DECREASES h (the stagnant boundary layer thickness), but violent stirring breaks the fish apart. (4) The total calcium released into the braising liquid is 100-300 mg per 100g of fish — making the braising liquid itself a significant DIETARY CALCIUM source.`,
    },
    {
      title: 'Cool, glaze, and serve — sol-gel cycling',
      description: `REMOVE from heat and allow to COOL IN THE POT. As the temperature drops below 30°C, the dissolved gelatin (from the fish skin collagen) undergoes SOL → GEL transition — the gelatin molecules partially re-associate into triple helical junction zones, forming a SEMI-SOLID GEL that coats each piece of fish with a glossy, aspic-like GLAZE. This glaze concentrates the braising liquid's flavors (fish sauce umami, caramel sweetness, galangal aromatics) into a thin, intensely flavored layer on each fish surface.

FOR SAME-DAY SERVING: Gently reheat the pot until the glaze melts back to a SYRUPY SOL, basting the fish pieces with the liquified glaze. Serve the fish steaks in the clay pot or on a plate, spooning the concentrated braising liquid over each piece. The galangal slices from the bottom of the pot can be served alongside as a pungent, fibrous condiment.

FOR NEXT-DAY SERVING (RECOMMENDED): Refrigerate overnight. The gelatin glaze sets into a firm, clear jelly that encases each fish piece — a beautiful, amber-toned aspic. Reheat gently the next day — the sol-gel ANNEALING process (one cooling + one reheating cycle) produces a STRONGER, CLEARER gel and more deeply integrated flavors. Kho dishes are proverbially better after at least one overnight rest.

SERVE with steamed rice. The concentrated braising liquid is intensely flavored — a small amount mixed into rice provides enormous flavor impact. The softened bones should be completely edible — they add a subtle, pleasant graininess and are an excellent source of bioavailable calcium and phosphorus.`,
      tip: `SOL-GEL CYCLING — WHY KHO IMPROVES OVERNIGHT: The gelatin in kho dishes undergoes REVERSIBLE SOL↔GEL TRANSITIONS that improve the dish with each cycle. During COOLING (gel formation), the gelatin molecules find partner molecules and form triple-helical JUNCTION ZONES — but they do this IMPERFECTLY the first time, because the rapid temperature drop doesn't give the molecules enough time to find their optimal arrangements. The first gel is WEAK and somewhat cloudy (many imperfect junction zones with trapped air and impurities). During REHEATING (gel melting), these imperfect junction zones dissolve — the molecules are freed and can re-organize. During the SECOND COOLING, the molecules — having been "reset" by the melting — have another chance to find optimal arrangements, producing STRONGER, MORE UNIFORM junction zones. This process is called ANNEALING in materials science, and it's the same principle used to strengthen metals and improve crystal quality. Each sol-gel cycle (each reheat-and-cool) produces a progressively better gel — clearer, firmer, more uniform, with a more intense concentration of flavor compounds trapped within the gel network. By the second or third day, the kho has undergone 2-3 annealing cycles and the gelatin glaze is at its peak quality — this is why Vietnamese grandmothers insist that kho cá is never at its best on the first day.`,
    },
  ],
};

export default function CaMeSongMaPage() {
  return <RecipeLayout recipe={recipe} />;
}
