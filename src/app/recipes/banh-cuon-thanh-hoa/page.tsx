'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Bánh Cuốn Thanh Hóa — Thanh Hóa Steamed Rice Rolls
//  Thanh Hóa #3
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. RICE BATTER EXTENSIONAL RHEOLOGY ON FABRIC
//     SUBSTRATE — Trouton ratio η_E/η_S = 3-10 for
//     rice starch slurry, spreading on muslin via
//     surface tension gradient (Marangoni flow),
//     fabric weave geometry controls film thickness
//     50-200 µm
//  2. STEAM DOME CONDUCTIVE-CONVECTIVE DUAL HEAT
//     TRANSFER — saturated steam h = 5,000-25,000
//     W/m²·K on exposed surface + fabric conduction
//     k = 0.04-0.1 W/m·K from below, bilateral
//     gelatinization produces symmetric amylose
//     retrogradation → translucent elastic film
//  3. WOOD EAR FUNGAL CELL WALL β-GLUCAN CRUNCH —
//     Auricularia auricula-judae chitin-β-glucan
//     composite cell wall, hydrated matrix 90-95%
//     water yet maintains fracture resistance 5-15 kPa,
//     unique "cartilaginous" QQ texture
//  4. FRIED SHALLOT ALLIUM CEPA AGGREGATUM
//     MAILLARD MATRIX — thin-sliced shallot rings
//     deep-fried: cellular dehydration aw 0.9→0.3,
//     reducing sugars 3-8% + cysteine sulfoxide →
//     thiophene-pyrazine aroma network, crisp micro-
//     architecture collapses on contact with moist bánh
//  5. THANH HÓA NƯỚC MẮM CHA DIPPING SYSTEM —
//     cốt fish sauce 30-40°N diluted with bone broth
//     (gelatin 0.3-0.8%), sugar, vinegar → colloidal
//     suspension coating viscosity > pure nước chấm,
//     lip-clinging delivery mechanism
//  6. THANH HÓA RICE TERROIR & STEAMING TRADITION —
//     Hàm Rồng wet-rice indica varieties, stone-ground
//     vs steel-mill batter granulometry 20-80 µm,
//     fabric-stretched steamer (nồi tráng) vs
//     Hanoi metal-plate steamer → thinner, more
//     delicate sheet
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'banh-cuon-thanh-hoa',
  title: 'Bánh Cuốn Thanh Hóa (Thanh Hóa Steamed Rice Rolls)',
  subtitle: 'Rice batter undergoes extensional flow (Trouton ratio 3-10) across muslin fabric via Marangoni surface tension gradients forming 50-200 µm films, bilateral steam gelatinization at h = 5,000-25,000 W/m²·K produces symmetric amylose retrogradation into translucent elastic sheets, wood ear chitin-β-glucan composite maintains fracture resistance at 90-95% hydration, and fried shallot cellular dehydration (aw 0.9→0.3) generates thiophene-pyrazine Maillard networks.',
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-cuon-thanh-hoa.jpg',

  intro: `Bánh cuốn Thanh Hóa is Vietnam's most TECHNICALLY DEMANDING sheet food — a translucent rice flour film steamed to a thickness of 50-200 MICROMETERS on a fabric-stretched steamer, filled with a savory mixture, and rolled into delicate cylinders that are served with fried shallots and a bone-broth-enriched dipping sauce. While Hanoi's bánh cuốn is better known internationally, Thanh Hóa's version is distinguished by its THINNER, MORE TRANSLUCENT sheets and its unique dipping sauce that incorporates bone broth — transforming the nước chấm from a simple condiment into a viscous, lip-coating delivery system.

The CENTRAL MECHANISM is RICE BATTER EXTENSIONAL RHEOLOGY ON FABRIC SUBSTRATE — a fluid dynamics phenomenon that is fundamentally different from the shear flow that governs most food processing. When a ladle of rice batter is poured onto the muslin fabric stretched over the steamer pot, the batter must SPREAD into an ultra-thin, uniform film in approximately 2-3 seconds before the steam begins gelatinizing the starch. This spreading is governed by EXTENSIONAL FLOW — the batter stretches and thins rather than sliding — characterized by the TROUTON RATIO (η_E/η_S), the ratio of extensional viscosity to shear viscosity. For rice starch slurries at the concentrations used in bánh cuốn (15-25% solids), the Trouton ratio is 3-10, meaning the batter resists stretching 3-10× more than it resists sliding. This is why the spreading technique is critical: the cook uses a curved bamboo spreader (cọ tráng) in a single, rapid, SWEEPING ARC that creates a SURFACE TENSION GRADIENT across the fabric surface. The batter at the leading edge of the spreader is thinner (higher surface tension per unit area), while the batter at the trailing edge is thicker (lower surface tension per unit area). This gradient drives MARANGONI FLOW — spontaneous fluid motion from low surface tension to high surface tension — that helps equalize the film thickness across the entire fabric surface. A skilled cook achieves a film thickness of 50-100 µm (thinner than a human hair at 70 µm) with ±20% uniformity across a 30 cm diameter — a feat of manual precision that takes years to master.

The STEAM DOME creates a unique BILATERAL HEAT TRANSFER environment. The muslin fabric sits stretched across the mouth of a pot of vigorously boiling water. The rice batter film, once spread on the fabric, is heated from TWO DIRECTIONS simultaneously: from BELOW, steam condenses on the underside of the fabric and conducts heat through the fabric weave (thermal conductivity k = 0.04-0.1 W/m·K for wet cotton) into the bottom of the batter film; from ABOVE, the steam dome (a convex lid placed over the fabric) traps saturated steam at 100°C that condenses directly on the TOP surface of the batter, delivering heat at a convective coefficient h = 5,000-25,000 W/m²·K — among the highest achievable in atmospheric cooking (compare: boiling water h = 1,000-10,000 W/m²·K; forced air convection h = 10-100 W/m²·K). This BILATERAL HEATING produces SYMMETRIC GELATINIZATION — the starch granules gelatinize simultaneously from both surfaces toward the center, unlike single-sided heating (as on a crêpe pan) which gelatinizes unevenly. Symmetric gelatinization matters because the subsequent AMYLOSE RETROGRADATION — the process where linear amylose chains re-associate into ordered structures as the film cools — proceeds symmetrically as well. Symmetric retrogradation produces a film with EQUAL mechanical properties on both sides: equal gloss, equal elasticity, equal tendency to stick. Asymmetric films (hot side vs cold side) develop a "skin" on the heated side that cracks when rolled, while the under-gelatinized cold side remains sticky — this is why crêpe-pan bánh cuốn is always inferior to properly steamed bánh cuốn.

WOOD EAR MUSHROOM (Auricularia auricula-judae, mộc nhĩ) in the filling exemplifies one of nature's most paradoxical TEXTURAL SOLUTIONS: a material that is 90-95% WATER by weight yet maintains a distinct CRUNCH when bitten. This paradox is explained by the mushroom's CELL WALL ARCHITECTURE — a composite of CHITIN (a long-chain polymer of N-acetylglucosamine, providing tensile strength) and β-GLUCAN (a branched glucose polymer with β-1,3 and β-1,6 linkages, providing compressive resistance), arranged in a three-dimensional matrix that is structurally analogous to FIBER-REINFORCED CONCRETE (chitin fibers = rebar, β-glucan matrix = cement). The hydrated β-glucan matrix acts as a VISCOELASTIC CUSHION — when compressed during chewing, it deforms elastically and then RECOVERS, producing the distinctive "QQ" (springy-crunchy) texture that the Vietnamese describe as "giòn sần sật." The fracture resistance of this hydrated composite (5-15 kPa) is remarkable for a material that is mostly water — it is 10-50× higher than the fracture resistance of equally hydrated gelatin gels. The wood ear provides TEXTURAL CONTRAST within the filling: its cartilaginous crunch against the soft, yielding pork creates a textural BINARY that makes each bite feel more complex than either component alone.

FRIED SHALLOTS (hành phi) are Thanh Hóa bánh cuốn's signature topping — and they represent one of the most dramatic PHASE TRANSFORMATIONS in the Vietnamese kitchen. Raw shallot (Allium cepa var. aggregatum) is 80-85% water, soft, and pungent with the LACHRYMATORY FACTOR (syn-propanethial-S-oxide, the molecule that makes you cry). Deep-frying at 140-160°C drives a cascade of transformations: (1) CELLULAR DEHYDRATION — water activity drops from 0.9 to 0.3 as free and bound water evaporates, concentrating the solids and creating POROUS MICRO-ARCHITECTURE in the collapsed cell walls; (2) MAILLARD BROWNING — the shallot's naturally high reducing sugar content (3-8%, primarily glucose and fructose — significantly higher than onion at 1-3%) reacts with amino acids, particularly CYSTEINE (which contains sulfur), producing THIOPHENES (savory, meaty aroma unique to allium Maillard), 2-ACETYLTHIAZOLE (roasted, nutty), and PYRAZINES (toasted, coffee-like); (3) the lachrymatory factor thermally degrades into di- and tri-sulfides that have pleasant SWEET-SAVORY aromas rather than eye-stinging pungency. The fried shallot is served on TOP of the moist bánh cuốn, creating a TEMPORAL TEXTURAL SEQUENCE: the first bite delivers maximum CRUNCH as the dehydrated cellular architecture resists compression; within 30-60 seconds, moisture from the bánh cuốn wicks into the porous shallot structure via CAPILLARY ACTION, softening it and releasing a second wave of aroma compounds that were trapped in the dry matrix — this temporal evolution means the dish literally CHANGES FLAVOR as you eat it.

The THANH HÓA DIPPING SAUCE distinguishes the regional variant from all others. While standard nước chấm is a simple solution of fish sauce, sugar, lime, and water, Thanh Hóa's version incorporates BONE BROTH — a colloidal suspension of GELATIN (0.3-0.8% by weight, from pork or chicken bones simmered 2-4 hours), dissolved minerals (calcium, phosphorus from hydroxyapatite dissolution), and emulsified fat droplets. The gelatin dramatically changes the sauce's RHEOLOGICAL PROPERTIES: at the concentrations used, it increases the viscosity from approximately 1 mPa·s (water-like) to 3-8 mPa·s, and introduces SHEAR-THINNING behavior (the sauce flows easily when stirred but thickens when still). This higher viscosity means the sauce CLINGS to the bánh cuốn surface rather than running off — coating the thin rice sheet with a uniform film of flavor. The gelatin also contributes a barely perceptible BODY and LIP-COATING sensation (the same mechanism that makes consommé feel "rich" despite being clear and fat-free), activating mechanoreceptors on the lips and tongue that perceive viscosity as "richness." The bone broth also provides free GLUTAMATE (50-100 mg/100mL from collagen hydrolysis) that synergizes with the fish sauce glutamate, amplifying the umami perception by 30-50% through the IMP-glutamate synergy pathway.

Thanh Hóa's bánh cuốn tradition is linked to the province's WET-RICE AGRICULTURE along the Mã River delta. The INDICA rice varieties grown in the Hàm Rồng area (annual mean temperature 23-24°C, precipitation 1,600-2,200 mm) have amylose content of 25-30% — significantly higher than japonica varieties (15-20%). This high amylose content is CRITICAL for bánh cuốn: amylose's LINEAR CHAIN STRUCTURE (unbranched α-1,4-glucan, degree of polymerization 500-6,000) allows it to form ordered, crystalline associations upon cooling (RETROGRADATION), producing films with higher TENSILE STRENGTH and TRANSLUCENCY than films made from low-amylose rice. Traditional Thanh Hóa producers use STONE-GROUND batter, where the granite millstones produce a BIMODAL particle size distribution — larger fragments (40-80 µm) that provide structural integrity to the film, and fine starch granules (5-20 µm) that gelatinize rapidly and fill the interstices. Steel-mill grinding, now common in commercial production, produces a UNIMODAL distribution at 20-40 µm that makes a more uniform but less texturally interesting film. The nồi tráng (fabric-stretched steamer) is also distinctive: Thanh Hóa's version uses a TIGHTER WEAVE muslin than Hanoi's, which supports thinner batter films and produces the characteristically THINNER, MORE DELICATE sheets — 50-100 µm versus Hanoi's 100-200 µm — that are Thanh Hóa bánh cuốn's hallmark.`,

  ingredientSections: [
    {
      title: 'Rice Batter — Extensional Flow Film',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'rice flour (bột gạo), from long-grain indica rice',
          note: 'High-amylose indica rice (25-30% amylose) is essential for film strength and translucency. Japonica or glutinous rice flour produces opaque, weak films that tear during rolling.',
        },
        {
          amount: 50,
          unit: 'g',
          name: 'tapioca starch (bột năng)',
          note: 'At 15-20% of total flour, tapioca adds ELASTICITY — its high amylopectin content (83-85%) creates a flexible gel that prevents the high-amylose rice film from being brittle.',
        },
        {
          amount: 500,
          unit: 'ml',
          name: 'water',
          note: 'Adjust to achieve a thin, pourable consistency — approximately 15-20% total solids. Too thick = uneven spreading; too thin = film tears during peeling.',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'cooking oil',
          note: 'Mixed into batter to reduce surface adhesion to the fabric. The oil forms a thin INTERFACIAL FILM between the gelatinized starch and the muslin weave, facilitating clean peeling.',
        },
        {
          amount: 0.5,
          unit: 'tsp',
          name: 'salt',
        },
      ],
    },
    {
      title: 'Filling — Textural Binary System',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'ground pork (thịt heo xay)',
          note: 'SOFT YIELDING PHASE of the textural binary. Use medium-fat pork (20-30% fat) — too lean produces a dry, crumbly filling.',
        },
        {
          amount: 30,
          unit: 'g',
          name: 'dried wood ear mushroom (mộc nhĩ), soaked and finely chopped',
          note: 'CRUNCHY PHASE — chitin-β-glucan composite cell wall maintains fracture resistance at 90-95% hydration. Soak 20 min until fully hydrated but still firm.',
        },
        {
          amount: 3,
          unit: 'unit',
          name: 'shallots, finely minced',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'fish sauce',
        },
        {
          amount: 0.5,
          unit: 'tsp',
          name: 'ground black pepper',
        },
      ],
    },
    {
      title: 'Fried Shallots — Maillard Crunch Topping',
      items: [
        {
          amount: 150,
          unit: 'g',
          name: 'shallots (hành tím), thinly sliced into 1-2 mm rings',
          note: 'UNIFORM THICKNESS is critical — thick slices retain moisture in their center and never achieve the cellular dehydration (aw 0.3) needed for crunch. Use a mandoline.',
        },
        {
          amount: 200,
          unit: 'ml',
          name: 'cooking oil for deep-frying',
        },
      ],
    },
    {
      title: 'Thanh Hóa Dipping Sauce — Bone Broth Colloidal System',
      items: [
        {
          amount: 300,
          unit: 'ml',
          name: 'pork or chicken bone broth, simmered 3-4 hours',
          note: 'Must contain dissolved GELATIN (0.3-0.8%) — test by refrigerating a spoonful: it should set to a soft jelly. This gelatin provides the shear-thinning viscosity and lip-coating sensation.',
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'fish sauce (nước mắm cốt), high-nitrogen grade',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'sugar',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'rice vinegar or lime juice',
        },
      ],
    },
    {
      title: 'Accompaniments',
      items: [
        {
          amount: 1,
          unit: 'bunch',
          name: 'fresh herbs: Vietnamese coriander (rau răm), perilla, mint',
        },
        {
          amount: 100,
          unit: 'g',
          name: 'chả lụa (Vietnamese pork sausage), sliced',
          note: 'Traditional accompaniment — provides a third textural element (dense, springy heat-set myosin gel) alongside the soft bánh cuốn and crunchy shallots.',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Prepare the batter — starch hydration, 1 hour rest',
      description: `COMBINE rice flour, tapioca starch, salt, cooking oil, and water in a large bowl. WHISK until completely smooth — no lumps should remain. The batter should have the consistency of HEAVY CREAM — thin enough to pour and spread easily, but thick enough to form a coherent film on the fabric.

REST the batter for at least 1 hour (overnight in the refrigerator is ideal). During this rest, the starch granules HYDRATE — water molecules penetrate the amorphous regions of the granule structure, swelling the granules to 1.5-2× their dry diameter. This pre-hydration is critical because it means the starch will gelatinize MORE RAPIDLY and MORE UNIFORMLY when the steam hits — a non-rested batter contains partially hydrated granules that gelatinize at different rates, producing a film with OPAQUE SPOTS (under-gelatinized) and THIN SPOTS (over-gelatinized).

STIR the batter thoroughly before each use — the heavier starch granules settle during resting, and an unstirred batter will produce films that are thick in the center (where the first ladle comes from the bottom of the bowl) and thin at the edges.

PREPARE the filling while the batter rests: Heat a tablespoon of oil in a wok over high heat. Sauté the minced shallots until fragrant (30 seconds), then add the ground pork. STIR-FRY, breaking into fine crumbles, until cooked through (3-4 minutes). Add the chopped wood ear mushroom, fish sauce, and pepper. Toss for 1 minute. The filling should be relatively DRY — excess moisture will make the bánh cuốn soggy and cause the sheet to tear during rolling.`,
      tip: `EXTENSIONAL RHEOLOGY — WHY BÁNH CUỐN BATTER BEHAVES DIFFERENTLY FROM CRÊPE BATTER: Crêpe batter (wheat flour + eggs + milk) is spread on a hot pan by TILTING — the batter flows under gravity in a SHEAR FLOW regime. Bánh cuốn batter is spread on a flat fabric surface using a SPREADING TOOL — the batter is stretched in an EXTENSIONAL FLOW regime. These two flow regimes demand fundamentally different fluid properties. In shear flow, the relevant parameter is SHEAR VISCOSITY (η_S), and wheat gluten's shear-thinning behavior helps the batter flow smoothly. In extensional flow, the relevant parameter is EXTENSIONAL VISCOSITY (η_E), and what matters is the TROUTON RATIO (η_E/η_S). Rice starch slurries have a Trouton ratio of 3-10 — meaning they resist stretching 3-10× more than sliding. This STRAIN-HARDENING in extension is actually beneficial: it prevents the batter from thinning catastrophically at any one point (which would create a hole), instead distributing the thinning evenly across the film. This self-leveling behavior is why rice flour batter produces more UNIFORM thin films than wheat flour batter, despite wheat flour's superior shear-flow properties.`,
    },
    {
      title: 'Fry the shallots — controlled Maillard dehydration, 10 minutes',
      description: `HEAT oil in a small saucepan to 130°C (lower than typical deep-frying — shallots brown at a lower temperature due to their high sugar content, and too-high heat produces BITTER, over-browned shallots before the center is dehydrated).

ADD the thinly sliced shallot rings to the oil. They will immediately begin BUBBLING VIGOROUSLY — this is water rapidly evaporating from the shallot cells as the cell membranes rupture. Stir gently and continuously.

WATCH the color progression carefully: the shallots transition through PALE GOLD (2-3 min, initial Maillard) → DEEP GOLD (4-5 min, extensive Maillard + caramelization of the 3-8% reducing sugars) → AMBER (6-7 min, melanoidin polymerization). REMOVE from oil at DEEP GOLD — residual heat will carry the color to the perfect amber while draining. Over-fried shallots (dark brown) are irreversibly bitter due to excessive melanoidin polymerization and acrylamide formation.

DRAIN on paper towels. The shallots will CRISP as they cool — this is the final dehydration as residual heat drives off the last bound water, dropping the water activity from approximately 0.5 (just removed from oil) to 0.3 (fully crisp). At aw 0.3, the collapsed cell wall structure enters its GLASSY STATE (below the glass transition temperature Tg), producing the characteristic brittle CRUNCH.

RESERVE the shallot frying oil — it is now infused with Maillard aromatics and allium sulfides, making it an excellent finishing oil for the bánh cuốn or other dishes.`,
      tip: `THE 30-60 SECOND TEXTURAL COUNTDOWN: Fried shallots on moist bánh cuốn begin a RACE AGAINST TIME. The crispy shallot (aw 0.3, glassy state) sits on the moist rice sheet (aw 0.95+). Water MIGRATES from the high-aw sheet to the low-aw shallot by vapor-phase transport and capillary wicking into the porous cellular structure. As water re-enters the shallot, two things happen: (1) the cell wall polymers PLASTICIZE — water molecules insert between the cellulose/hemicellulose chains, raising the local moisture above the glass transition threshold (Tg depression by water is approximately 10°C per 1% moisture increase), and the glassy, brittle structure transforms back to a rubbery, chewy structure; (2) the water DISSOLVES aroma compounds that were trapped in the dry matrix — particularly the Maillard thiophenes and pyrazines that are poorly volatile in the anhydrous state but become volatile when dissolved. This second wave of aroma release means that bánh cuốn eaten at 30 seconds (when the shallots are losing their crunch) actually has MORE INTENSE AROMA than at 0 seconds (when the shallots are at maximum crunch). The ideal eating window is 10-20 seconds — enough time for the first aroma burst from the shallot oil coating, but before the crunch is lost.`,
    },
    {
      title: 'Steam the rice sheets — bilateral gelatinization, 2 minutes each',
      description: `SET UP the steamer: Bring a large pot of water to a VIGOROUS, ROLLING BOIL. Stretch a piece of fine muslin (or purpose-made bánh cuốn fabric) tightly across the pot mouth, securing with string or the pot rim. The fabric must be TAUT — any sagging creates low spots where the batter pools and produces thick, uneven sheets. Place the dome lid over the fabric.

PREHEAT the fabric by covering with the lid for 1 minute. The fabric should be HOT and lightly moist from steam condensation.

BRUSH a thin layer of oil on the fabric surface. LADLE approximately 60 mL of batter onto the center of the fabric and IMMEDIATELY use the curved bamboo spreader (cọ tráng) to spread the batter in a single, rapid, CLOCKWISE ARC across the entire fabric surface. The motion should take no more than 2-3 seconds — the steam begins gelatinizing the batter almost immediately upon contact with the hot fabric, and hesitation produces thick spots where the spreader paused.

COVER with the dome lid. Steam for 60-90 seconds. The sheet is done when it transforms from opaque white to TRANSLUCENT — you should be able to see the weave pattern of the fabric through the sheet. This translucency indicates complete gelatinization: the native starch granules (opaque due to their semi-crystalline structure scattering light) have been disrupted into a continuous amorphous gel (transparent because the homogeneous polymer matrix does not scatter light).

PEEL the sheet: Use a thin bamboo spatula or plastic scraper to lift one edge of the sheet from the fabric. Peel slowly and steadily — the oil layer should allow clean release. Transfer to an oiled plate or cutting board.

FILL immediately while the sheet is still warm and pliable: place 1-2 tablespoons of filling in a line across the lower third of the sheet. Roll into a tight cylinder. Repeat with remaining batter and filling.`,
      tip: `SYMMETRIC vs ASYMMETRIC GELATINIZATION — WHY THE DOME LID MATTERS: Without the dome lid, the rice sheet would gelatinize from the BOTTOM ONLY (heat conducted through the fabric from the steam below). This single-sided heating creates an ASYMMETRIC film: the bottom surface is fully gelatinized (strong, smooth, glossy), while the top surface is only partially gelatinized (weak, rough, slightly opaque). When this asymmetric film cools and undergoes amylose retrogradation, the bottom (fully gelatinized) surface develops a tight, crystalline structure that is strong but BRITTLE, while the top (partially gelatinized) surface remains STICKY and weak. Rolling this asymmetric film always produces cracks on the outer surface. The dome lid traps SATURATED STEAM at 100°C above the sheet, delivering heat to the top surface at a convective coefficient of 5,000-25,000 W/m²·K. This means the top surface gelatinizes at nearly the same rate as the bottom — producing a SYMMETRIC film with equal properties on both sides. Symmetric films roll without cracking, have uniform gloss on both surfaces, and have the optimal translucency that is Thanh Hóa bánh cuốn's hallmark. The dome lid is not optional — it is the engineering difference between good and mediocre bánh cuốn.`,
    },
    {
      title: 'Assemble and serve — the complete textural orchestra',
      description: `PREPARE the Thanh Hóa dipping sauce: Warm the bone broth gently (do not boil — boiling above 100°C breaks down the gelatin's triple helix structure, reducing viscosity). Add fish sauce, sugar, and rice vinegar. Stir until sugar dissolves. The sauce should have a slightly VISCOUS, SYRUPY consistency — noticeably thicker than standard nước chấm. Taste and adjust: the bone broth should provide a savory BACKBONE that the fish sauce builds upon, not compete with.

ARRANGE the rolled bánh cuốn on a serving plate (traditionally a flat enamel plate, not a bowl — the flat surface prevents the delicate rolls from collapsing under their own weight).

TOP generously with fried shallots — they should form a VISIBLE LAYER across the rolls, not a sparse garnish. The shallot-to-bánh cuốn ratio is higher in Thanh Hóa than in Hanoi — the crispy topping is considered an essential textural component, not a decoration.

SERVE alongside sliced chả lụa and fresh herbs. Pour the bone broth dipping sauce into individual small bowls.

TO EAT: Dip a rolled bánh cuốn into the warm sauce. The GELATIN in the sauce coats the rice sheet surface with a thin, viscous film that clings rather than dripping — this coating delivers a concentrated burst of umami-sweet-sour flavor that a watery dipping sauce cannot match. Alternate bites with chả lụa (for its dense, springy contrast) and fresh herbs (for their aromatic brightness). The TEXTURAL SEQUENCE in each bite should be: crispy shallot → silky rice sheet → soft pork filling → crunchy wood ear → followed by the lip-coating warmth of the bone broth sauce.`,
      tip: `BONE BROTH GELATIN RHEOLOGY — THE PHYSICS OF LIP COATING: Why does Thanh Hóa's bone broth dipping sauce feel "richer" than standard nước chấm, despite having similar calorie content? The answer is GELATIN RHEOLOGY. At 0.3-0.8% concentration in the warm sauce (40-60°C, above gelatin's gel point), the dissolved gelatin molecules exist as RANDOM COIL polymers in solution — they don't form a gel, but they dramatically increase the solution's VISCOSITY through HYDRODYNAMIC INTERACTIONS (each coil occupies a large effective volume in solution, and coils entangle with each other at concentrations above the overlap concentration c* ≈ 0.2%). More importantly, gelatin solutions exhibit SHEAR-THINNING behavior: the viscosity decreases under the shear stress of dipping and lifting (making the sauce easy to work with), but increases when the shear stops (making the sauce cling to the food surface instead of dripping off). This is the THIXOTROPIC coating mechanism — the same physics that makes latex paint easy to brush on but resistant to dripping. The gelatin also provides a LIP-COATING effect: as the warm sauce contacts the cooler lip surface (32-35°C, near gelatin's sol-gel transition), the gelatin molecules begin to ASSOCIATE into partial triple helices, transiently increasing viscosity on the lip surface and creating the "rich," "velvety" mouthfeel that is the hallmark of a collagen-rich broth.`,
    },
  ],
};

export default function BanhCuonThanhHoaPage() {
  return <RecipeLayout recipe={recipe} />;
}
