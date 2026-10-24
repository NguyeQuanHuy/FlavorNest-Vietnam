'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Sá Sùng Rang Muối — Salt-Roasted Peanut Worm
//  Quảng Ninh #4
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. SIPUNCULID BODY WALL COLLAGEN ARCHITECTURE —
//     Sipunculus nudus has a body wall organized as a
//     CROSSED-HELICAL FIBER COMPOSITE: two layers of
//     collagen fibers wound in LEFT-HANDED and RIGHT-
//     HANDED helices (fiber angle 54.7° — the "magic
//     angle" that maximizes volume at constant surface
//     area). This worm-specific collagen structure
//     (Type I + unique Type V variants) creates a
//     PRESSURIZED HYDROSTATIC SKELETON that, when
//     heated, undergoes a BIPHASIC TEXTURAL TRANSITION:
//     first STIFFENING (collagen shrinkage at 55-65°C
//     compresses the body) then SOFTENING (collagen →
//     gelatin conversion at 70-85°C). The narrow
//     window between stiffening and softening (65-70°C)
//     is where the ideal "giòn dai" (crispy-chewy)
//     texture exists
//  2. INTROVERT RETRACTION HYDRAULIC CLEANING —
//     Sipunculus has a retractable INTROVERT (front
//     section with mouth) that telescopes into the
//     trunk via HYDRAULIC PRESSURE — coelomic fluid
//     is displaced by circular muscle contraction.
//     During cleaning, salt stimulates an OSMOTIC
//     SHOCK that triggers repeated introvert retraction
//     cycles, expelling sand and sediment from the
//     internal cavity. This is essentially using the
//     worm's OWN HYDRAULIC SYSTEM to clean itself
//  3. SAND PURGING VIA COELOMIC FLUID
//     OSMOREGULATION — sá sùng burrows in intertidal
//     sand and ingests sediment while deposit-feeding.
//     The coelomic fluid is ISOSMOTIC with seawater
//     (≈1,000 mOsm/kg). When placed in HYPOTONIC
//     fresh water, osmotic influx swells the body,
//     rupturing sediment-containing cells and flushing
//     sand through the nephridiopores. When placed in
//     HYPERTONIC salt solution, the body contracts,
//     expelling the diluted coelomic fluid + sand.
//     Multiple fresh water → salt cycles achieves
//     complete sand removal
//  4. SALT-ROASTING DRY MAILLARD ON MARINE FREE
//     AMINO ACIDS — sá sùng coelomic fluid contains
//     extraordinarily high concentrations of FREE
//     AMINO ACIDS (glycine 50-100 mM, alanine 20-50
//     mM, taurine 30-80 mM, proline 10-30 mM) used
//     as OSMOLYTES for osmoregulation. When dry-roasted
//     with salt at 180-220°C, these free amino acids
//     participate DIRECTLY in Maillard reactions
//     without needing enzymatic or hydrolytic release
//     from proteins — the reaction proceeds 10-100×
//     FASTER than in protein-bound amino acids,
//     producing intense caramelization and nutty,
//     savory, complex flavor within 3-5 minutes
//  5. WOK HEI SUPERHEATED SALT CONDUCTION —
//     traditional salt-roasting uses a large quantity
//     of coarse salt (NaCl, cp = 0.85 kJ/kg·K)
//     preheated to 200-250°C as a GRANULAR HEAT
//     TRANSFER MEDIUM. The salt grains provide
//     POINT CONTACTS with the sá sùng surface,
//     creating a conduction-dominated heat transfer
//     pattern distinct from oil frying (convection)
//     or oven roasting (radiation). The LOW THERMAL
//     CONDUCTIVITY of the salt bed (k ≈ 0.3-0.5
//     W/m·K for packed granules vs 0.17 for oil)
//     creates a GENTLE, UNIFORM heating environment
//     that prevents scorching while achieving thorough
//     dehydration
//  6. QUẢNG NINH INTERTIDAL ECOLOGY —
//     Sipunculus nudus in Quảng Ninh inhabits the
//     INTERTIDAL ZONE of sandy beaches near limestone
//     karst formations, where CaCO₃-rich runoff
//     creates alkaline sediment (pH 7.8-8.2). The
//     alkaline environment promotes higher mucopolysaccharide
//     production in the body wall → thicker, firmer
//     texture. Peak harvest: March-May, when water
//     temperature 20-25°C promotes maximum body size
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'sa-sung-rang-muoi',
  title: 'Sá Sùng Rang Muối (Quảng Ninh Salt-Roasted Peanut Worm)',
  subtitle: 'Sipunculid crossed-helical collagen at magic angle 54.7° creates biphasic stiffening→softening transition with ideal crispy-chewy window at 65-70°C, marine free amino acids (glycine 50-100 mM + taurine 30-80 mM) drive 10-100× faster Maillard kinetics, and salt-bed conduction delivers gentle uniform dehydration.',
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '45 min',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/sa-sung-rang-muoi.jpg',

  intro: `Sá Sùng Rang Muối — Salt-Roasted Peanut Worm — is Quảng Ninh's most EXOTIC delicacy and arguably the most scientifically fascinating ingredient in all of Vietnamese cuisine. Sá sùng (Sipunculus nudus, family Sipunculidae) is a MARINE INVERTEBRATE — not a worm in the conventional sense (it's not an annelid), but a member of the phylum Sipuncula, a small group of unsegmented marine worms that diverged from the annelid lineage approximately 500 million years ago. When salt-roasted to perfection, sá sùng achieves a texture and flavor so complex and addictive that it commands prices of 2-5 million VND per kilogram dried — one of the most expensive ingredients in Vietnamese cuisine.

The FUNDAMENTAL MECHANISM underlying sá sùng's unique texture is its CROSSED-HELICAL COLLAGEN BODY WALL ARCHITECTURE. Unlike vertebrate muscles (which have parallel-arranged fibers) or shellfish (which have concentric laminae), Sipunculus has a body wall composed of two layers of COLLAGEN FIBERS wound in opposite helical directions — one layer spiraling LEFT-HANDED and the other RIGHT-HANDED — at a fiber angle of approximately 54.7° to the long axis. This is the so-called "MAGIC ANGLE" — the angle at which a helically wound cylinder achieves MAXIMUM VOLUME for a given surface area. This geometry is the same principle used in pressure vessels, braided hoses, and carbon fiber composites, and it serves the same function in the worm: creating a PRESSURIZED HYDROSTATIC SKELETON that resists both radial expansion and longitudinal compression.

When heated, this crossed-helical collagen undergoes a BIPHASIC TEXTURAL TRANSITION that is fundamentally different from the simple collagen→gelatin conversion in vertebrate meat. In PHASE 1 (55-65°C), the collagen fibers SHRINK — each fiber contracts to approximately 60-70% of its original length as the triple-helix unwinds, but because the fibers are wound helically around the body, the shrinkage causes the body wall to STIFFEN and the body to CONTRACT, squeezing out coelomic fluid and compressing the remaining tissue. The texture at this stage is FIRM and RESISTANT — too tough to eat comfortably. In PHASE 2 (70-85°C), the collagen begins converting to GELATIN — the triple helix denatures completely and the chains separate into random coils. But here's the critical difference: in a crossed-helical composite, the two layers denature at DIFFERENT RATES because they experience different local stresses (the outer layer is under tension, the inner layer under compression), creating a GRADIENT from partially denatured (rubbery) to fully denatured (soft) across the body wall thickness. The ideal eating texture — "giòn dai" (simultaneously CRISPY on the salt-roasted exterior and CHEWY in the partially denatured interior) — exists in a narrow window around 65-70°C where Phase 1 stiffening and Phase 2 softening are in DYNAMIC EQUILIBRIUM.

INTROVERT RETRACTION HYDRAULIC CLEANING is one of the most elegant food preparation techniques in nature. Sipunculus has a remarkable anatomical feature: the INTROVERT, a front section (approximately 30% of body length) that includes the mouth, tentacles, and anterior nervous system, which can be TELESCOPICALLY RETRACTED into the trunk. Retraction is powered by RETRACTOR MUSCLES that pull the introvert inward while CIRCULAR MUSCLES compress the trunk, displacing coelomic fluid (the body cavity fluid that serves as the hydraulic medium) forward to accommodate the invaginating introvert. In the living animal, this retraction is a defensive response — the worm withdraws its vulnerable introvert when threatened. During food preparation, salt applied to the worm's surface triggers an OSMOTIC SHOCK — the hypertonic salt solution draws water from the surface cells by osmosis, which the animal's chemoreceptors interpret as a threat. The worm responds with REPEATED RETRACTION CYCLES, each cycle expelling sand, sediment, and debris from the body cavity through the nephridiopores (excretory openings). The cook is essentially "tricking" the worm into CLEANING ITSELF using its own hydraulic machinery.

SAND PURGING follows the principles of OSMOREGULATION in marine invertebrates. Sá sùng is a DEPOSIT FEEDER — it burrows through intertidal sand, ingesting sediment and extracting organic particles and microorganisms. The coelomic fluid is approximately ISOSMOTIC with seawater (≈1,000 mOsm/kg), meaning the worm neither gains nor loses water under normal marine conditions. When placed in HYPOTONIC fresh water, osmotic water influx causes the body to SWELL — the increased internal pressure forces sand-laden coelomic fluid out through the nephridiopores while the swelling ruptures sediment-containing cells in the gut lining. When subsequently placed in HYPERTONIC salt solution, the body CONTRACTS as water moves out by osmosis, further expelling diluted fluid and freed sand particles. Multiple cycles of fresh water (swell→flush) and salt water (contract→expel) achieve thorough sand removal — critical because even a single remaining sand grain creates an unpleasant gritty texture in the final dish.

The SALT-ROASTING MAILLARD REACTION in sá sùng proceeds with extraordinary speed because the starting materials are already LIBERATED. Most meat products require ENZYMATIC PROTEOLYSIS during aging to release free amino acids from bound protein before Maillard reactions can proceed — this is why aged beef browns faster than fresh beef. Sá sùng bypasses this bottleneck entirely because its coelomic fluid naturally contains extraordinarily high concentrations of FREE AMINO ACIDS serving as OSMOLYTES: glycine (50-100 mM), alanine (20-50 mM), taurine (30-80 mM), and proline (10-30 mM). These amino acids are maintained at high concentrations to balance the osmotic pressure of seawater — they are the cell's answer to salt, providing intracellular osmotic pressure without the toxic effects of inorganic ions. During salt-roasting at 180-220°C, these free amino acids react DIRECTLY with reducing sugars (glucose, ribose from nucleotide degradation) in the Maillard cascade — no proteolysis delay. The reaction kinetics are 10-100× FASTER than in protein-bound amino acid systems, producing intense, complex browning within 3-5 minutes. The specific amino acid profile (dominated by glycine and alanine, both small, reactive amino acids) favors PYRAZINE production (nutty, roasted aromas) over PYRROLE production (bread-like aromas), explaining sá sùng's characteristic NUTTY, SAVORY, almost PEANUT-LIKE flavor — hence the English name "peanut worm."

SALT-BED CONDUCTION is the traditional cooking method that is perfectly suited to sá sùng's delicate collagen structure. A large volume of coarse salt (NaCl) is preheated to 200-250°C in a wok, and the cleaned sá sùng is buried in the hot salt. The salt grains serve as a GRANULAR HEAT TRANSFER MEDIUM — each grain makes POINT CONTACT with the sá sùng surface, and heat transfers by SOLID-SOLID CONDUCTION at these contact points. Unlike oil frying (where the fluid surrounds the food completely, providing uniform but intense heat transfer) or oven roasting (where radiation provides uniform but slow heat transfer), salt-bed conduction provides GENTLE, NON-UNIFORM heating: the contact points heat rapidly while the gaps between grains act as insulating air pockets. The net effect is a MODERATE average heat flux that dehydrates the surface slowly and uniformly without the risk of SCORCHING that oil frying at the same temperature would cause. The packed salt bed's thermal conductivity (k ≈ 0.3-0.5 W/m·K) is lower than both oil (k ≈ 0.17 W/m·K at room temperature but increases with temperature and convection) and metal (k > 50 W/m·K), creating a thermal environment that BUFFERS temperature spikes — if a piece of sá sùng touches a momentarily overheated zone, the salt absorbs the excess energy without transmitting it efficiently enough to burn the food. Additionally, the NaCl salt has a specific heat capacity of 0.85 kJ/kg·K (lower than water's 4.18 kJ/kg·K), meaning it loses temperature relatively quickly to the food, self-regulating the cooking process.

QUẢNG NINH's intertidal zones near limestone karst formations provide the ideal habitat for premium sá sùng. The CaCO₃-rich runoff from the karst creates alkaline sediment (pH 7.8-8.2) that promotes higher MUCOPOLYSACCHARIDE production in the sipunculid body wall — the acidic glycosaminoglycans (chondroitin sulfate, dermatan sulfate) that constitute the mucus layer and contribute to body wall thickness are synthesized more efficiently at mildly alkaline pH. The result is sá sùng with THICKER, FIRMER body walls that yield more edible product per animal and maintain better texture during salt-roasting. The peak harvest season is March-May, when water temperatures of 20-25°C promote maximum body size — the worms have overwintered, accumulated energy reserves, and are preparing for the spring reproductive season, reaching their maximum body weight before spawning depletes their reserves.`,

  ingredientSections: [
    {
      title: 'Sá Sùng — Crossed-Helical Collagen System',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'fresh sá sùng (Sipunculus nudus), live or freshly caught',
          note: 'Live sá sùng responds to touch by retracting its introvert — this retraction reflex is used during cleaning. Body wall should be FIRM and THICK (Quảng Ninh karst-zone specimens).',
        },
      ],
    },
    {
      title: 'Cleaning — Hydraulic Sand Purging',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'coarse salt (for osmotic shock cleaning)',
          note: 'Hypertonic salt triggers introvert retraction cycles → expels sand hydraulically. Multiple fresh water ↔ salt cycles for complete purging.',
        },
        {
          amount: 1,
          unit: 'unit',
          name: 'bowl of fresh water',
          note: 'Hypotonic water causes osmotic swelling → ruptures sediment cells → sand flushing through nephridiopores.',
        },
      ],
    },
    {
      title: 'Salt-Roasting — Conduction Heat Transfer Medium',
      items: [
        {
          amount: 1,
          unit: 'kg',
          name: 'coarse sea salt',
          note: 'NaCl granular heat transfer medium — cp 0.85 kJ/kg·K, k ≈ 0.3-0.5 W/m·K packed. Lower thermal conductivity than oil provides gentle, buffer heating that prevents scorching.',
        },
        {
          amount: 2,
          unit: 'unit',
          name: 'kaffir lime leaves, torn',
          note: 'Optional — citronellal aromatics infuse the salt bed.',
        },
      ],
    },
    {
      title: 'Finishing',
      items: [
        {
          amount: 1,
          unit: 'tsp',
          name: 'white pepper',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'cooking oil',
          note: 'Light coating after roasting adds surface sheen and carries volatile Maillard products.',
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
      title: 'Clean the sá sùng — hydraulic sand purging, 15-20 minutes',
      description: `PLACE live sá sùng in a bowl of FRESH WATER. Observe the osmotic swelling — the hypotonic water enters the body by osmosis, causing the animals to SWELL visibly. The internal pressure increase forces sand-laden coelomic fluid out through the nephridiopores.

After 3-5 minutes, TRANSFER to a bowl of SALT WATER (2 tablespoons salt per liter). The hypertonic environment reverses the osmosis — the bodies CONTRACT, expelling diluted fluid and freed sand particles. You may observe INTROVERT RETRACTION — the front section telescoping inward as the circular muscles compress the trunk.

REPEAT the fresh water → salt water cycle 3-4 times until the expelled fluid runs CLEAR with no visible sand particles.

USE SCISSORS to cut along the length of each animal, exposing the body cavity. REMOVE the gut and any remaining internal organs. RINSE thoroughly under running water.

TURN the body wall INSIDE OUT and scrub the inner surface to remove any residual sand grains trapped in the mucosal layer. Rinse again. The cleaned sá sùng should be TRANSLUCENT, FIRM tubes of pure body wall.`,
      tip: `USING THE WORM'S OWN HYDRAULIC SYSTEM — BIOMECHANICAL CLEANING: The introvert retraction cycle in Sipunculus is powered by a HYDRAULIC MECHANISM: when the retractor muscles contract, they pull the introvert inward, but there's a volume conservation problem — the body cavity is a CLOSED, FLUID-FILLED SPACE. The invaginating introvert DISPLACES coelomic fluid backward, and the resulting pressure increase is relieved by circular muscles compressing the trunk (making it shorter and fatter). Salt application triggers this cycle by simulating a predator threat — the chemoreceptors detect the sudden osmolality change and activate the withdrawal reflex. Each retraction cycle displaces approximately 5-15% of the coelomic fluid volume, carrying entrained sand particles with it. After 4-6 cycles, the cavity is substantially purged. It's the biological equivalent of repeatedly squeezing a sponge — except the "sponge" is squeezing itself.`,
    },
    {
      title: 'Salt-roast the sá sùng — granular conduction heating, 8-12 minutes',
      description: `HEAT the coarse salt in a large wok over high heat, stirring continuously, until the salt reaches 200-250°C (the salt should be too hot to touch — test by sprinkling a few drops of water, which should SIZZLE and evaporate instantly).

ADD the torn kaffir lime leaves to the hot salt — they will crackle and release citronellal volatiles that infuse the salt bed.

ADD the cleaned, dried sá sùng pieces to the hot salt. TOSS and STIR constantly to ensure even contact. The sá sùng will undergo the BIPHASIC TRANSITION:

PHASE 1 — STIFFENING (minutes 1-3): The collagen fibers shrink as the crossed-helical structure contracts. The pieces become RIGID, CURLING inward as the outer helical layer contracts faster than the inner layer. Color changes from translucent to OPAQUE WHITE.

PHASE 2 — BROWNING (minutes 3-8): Surface dehydration exposes the free amino acids (glycine, alanine, taurine, proline) to direct Maillard reaction with residual sugars. RAPID BROWNING occurs — the high free amino acid concentration drives the reaction 10-100× faster than in conventional meat. Color progresses from white to GOLDEN to DEEP AMBER.

ENDPOINT: The sá sùng should be GOLDEN-BROWN, CRISPY on the exterior (fully dehydrated surface), and slightly CHEWY in the interior (partially denatured crossed-helical collagen in the 65-70°C transition zone). The pieces should make a slight CRUNCH when bitten but still have some GIVE in the center.

REMOVE from salt using a slotted spoon or sieve — shake off excess salt.`,
      tip: `THE MAGIC ANGLE AND THE BIPHASIC TRANSITION: The 54.7° crossed-helical fiber angle is found in organisms from Sipunculus to arterial walls to shark skin because it represents a GEOMETRIC OPTIMUM — at this angle, a helically wound cylinder achieves maximum enclosed volume for a given fiber length and surface area (this can be proven by calculus: V = πr²h, subject to the constraint that fiber length = h/cos(θ) = 2πr/sin(θ), maximized when θ = arctan(√2) ≈ 54.7°). During heating, collagen fiber shrinkage at this angle produces MAXIMAL RADIAL CONTRACTION — the cylinder diameter decreases by 30-40% while length decreases by only 10-20%. In practical terms, the sá sùng TIGHTENS like a wrung sponge, squeezing out fluid and creating a dense, compact texture. The uneven stress distribution between the outer (tensile) and inner (compressive) layers means they denature at different rates, creating the GRADIENT TEXTURE — crispy outside (fully denatured, dehydrated) and chewy inside (partially denatured, still hydrated) — that defines premium salt-roasted sá sùng.`,
    },
    {
      title: 'Finish and serve — the Quảng Ninh luxury appetizer',
      description: `TOSS the roasted sá sùng with a light coating of cooking oil and white pepper. The oil serves two functions: (1) it adds SURFACE SHEEN that makes the golden-brown pieces visually appealing, and (2) it acts as a SOLVENT for lipid-soluble Maillard products (pyrazines, thiazoles) generated during salt-roasting, carrying these volatile flavor compounds more efficiently to the olfactory epithelium during eating.

ARRANGE on a serving plate with lime wedges. The lime is optional but recommended — the citric acid provides a SHARP CONTRAST to the deep, savory, nutty Maillard flavors, and the acidity stimulates salivation that refreshes the palate between bites.

THE TASTING EXPERIENCE: Pick up a piece and BITE through it: the CRISPY exterior shatters with a delicate crunch (fully dehydrated, Maillard-browned surface layer) → the CHEWY interior offers firm, elastic resistance (partially denatured crossed-helical collagen at the 65-70°C transition zone) → a wave of NUTTY, SAVORY, UMAMI flavor floods the palate (free amino acid Maillard products: pyrazines from glycine + alanine, thiazolines from the sulfur-containing cysteine traces, and taurine's sulfonyl derivatives). The flavor is often described as similar to DRIED SCALLOP meets ROASTED PEANUT — hence the English name "peanut worm."

PAIRING: Sá sùng rang muối is traditionally served as a NHẬU (drinking snack) with beer. The salt-roasted, umami-rich profile is perfectly complementary to the bitter hops and carbonation of cold beer — the salt enhances beer's maltose sweetness while the umami extends the savory finish.`,
      tip: `WHY SÁ SÙNG TASTES LIKE PEANUTS — THE GLYCINE-PYRAZINE CONNECTION: The "peanut" flavor of salt-roasted sá sùng is NOT coincidental — it shares a CHEMICAL BASIS with actual roasted peanuts. Both are dominated by PYRAZINES — a class of nitrogen-containing heterocyclic compounds formed during Maillard reactions between small amino acids and reducing sugars. Specifically, 2,5-DIMETHYLPYRAZINE and 2,3,5-TRIMETHYLPYRAZINE (nutty, roasted aromas) are the dominant volatiles in both roasted peanuts and salt-roasted sá sùng. The reason: both start with high concentrations of GLYCINE — in peanuts, glycine is released by Maillard-induced proteolysis during roasting; in sá sùng, glycine is already FREE at 50-100 mM as an osmolyte. Glycine, the simplest amino acid (molecular weight 75 Da, no side chain), reacts rapidly with reducing sugars and undergoes SELF-CONDENSATION via Strecker degradation to form methylglyoxal, which cyclizes with ammonia to produce the pyrazine ring. The convergence of flavor between a LEGUME and a MARINE WORM through the same chemical pathway — glycine → methylglyoxal → pyrazines — is a beautiful example of CHEMICAL CONVERGENT EVOLUTION in food.`,
    },
  ],
};

export default function SaSungRangMuoiPage() {
  return <RecipeLayout recipe={recipe} />;
}
