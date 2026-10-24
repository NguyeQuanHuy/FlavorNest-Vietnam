'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Bò Bía — Vietnamese Fresh Spring Roll with Chinese Sausage
//  Sài Gòn #7
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  ─────────────────────────────────────────────────
//  1. RICE PAPER PLASTICIZATION BY POLYOL-WATER
//     COMPETITIVE SORPTION — Fresh bò bía uses
//     bánh tráng (rice paper) that is briefly dipped
//     in warm water (~40°C, 2-3 seconds). The rice
//     paper is a GLASSY AMORPHOUS STARCH FILM with
//     water activity aw ≈ 0.2-0.3, existing below
//     its glass transition temperature Tg. Upon
//     wetting, water molecules penetrate the starch
//     matrix and act as a PLASTICIZER — they insert
//     between starch chains, breaking inter-chain
//     hydrogen bonds (bond energy ≈ 10-40 kJ/mol)
//     and replacing them with starch-water H-bonds.
//     This lowers Tg below ambient temperature,
//     transitioning the film from GLASSY (brittle,
//     rigid, E ≈ 1-3 GPa) to RUBBERY (flexible,
//     cohesive, E ≈ 1-10 MPa). The TARGET moisture
//     content is 35-45% — below 30%, the paper
//     remains too brittle to fold without cracking;
//     above 50%, the paper becomes too sticky and
//     weak (excess water disrupts the starch network
//     to the point of dissolution). The 2-3 second
//     dip window is a KINETIC CONTROL: water
//     diffusion into the ~0.3 mm thick rice paper
//     follows Fick’s second law, with diffusivity
//     D ≈ 10⁻¹¹ m²/s at 40°C. The characteristic
//     diffusion time t = L²/D ≈ (3×10⁻⁴)²/(10⁻¹¹)
//     ≈ 9 seconds for FULL penetration — so a 2-3s
//     dip wets only the OUTER 60-70% of the
//     thickness, leaving a slightly drier core that
//     provides structural integrity. This moisture
//     GRADIENT across the paper’s thickness is the
//     key to bò bía’s unique wrapper texture:
//     slippery-soft on the outside, slightly tacky
//     and firm on the inside.
//
//  2. LAP XƯỞNG (CHINESE SAUSAGE) — OSMOTIC
//     DEHYDRATION + MAILLARD BROWNING IN A CURED
//     MATRIX — The defining protein in bò bía is
//     lạp xưởng (Chinese-style cured sausage),
//     a Cantonese charcuterie product that arrived
//     in Saigon with Teochew-Cantonese immigration.
//     Lạp xưởng is produced by OSMOTIC DEHYDRATION:
//     ground pork (70-80% lean, 20-30% fat) is
//     mixed with sugar (10-15% by weight — far
//     higher than European cured sausages at 0.5-2%),
//     salt (2.5-3.5%), rice wine (3-5%), and
//     sometimes soy sauce. The sugar serves a DUAL
//     FUNCTION: (a) it LOWERS water activity (aw)
//     by osmotic effect — at 10-15% sugar
//     concentration in the meat matrix, aw drops
//     from ~0.99 (fresh meat) to ~0.88-0.92, which
//     is below the growth threshold of most spoilage
//     bacteria (aw < 0.91 for Pseudomonas, < 0.94
//     for Salmonella) but above the threshold for
//     beneficial LAB fermentation (aw > 0.85 for
//     Lactobacillus); (b) during subsequent air-
//     drying and optional smoking, the sugar
//     participates in MAILLARD BROWNING with the
//     meat’s amino acids — the high sugar
//     concentration (vs European sausage) produces
//     INTENSE caramelization-Maillard products,
//     giving lạp xưởng its characteristic SWEET-
//     SAVORY-SMOKY flavor profile and its deep
//     RED-BROWN color (melanoidins). When sliced
//     and pan-fried for bò bía, the surface Maillard
//     reaction continues — the already-browned
//     exterior undergoes SECONDARY MAILLARD at
//     pan temperatures of 150-180°C, producing
//     additional pyrazines (nutty, roasted aroma)
//     and furanones (caramel, butterscotch) that
//     layer on top of the curing-stage products.
//
//  3. JICAMA (CỦ SẮN/CỦ ĐẬU) — INULIN-TYPE
//     FRUCTAN CRUNCH PERSISTENCE — The primary
//     vegetable filling in bò bía is jicama
//     (Pachyrhizus erosus), julienned into thin
//     strips. Jicama contains 3-6% INULIN-TYPE
//     FRUCTANS (degree of polymerization DP 3-60)
//     — oligosaccharides composed of β(2→1)-linked
//     fructose units that are NOT DIGESTIBLE by
//     human α-amylase or brush-border enzymes.
//     These fructans serve a STRUCTURAL FUNCTION
//     in the food: they form HYDROGEN-BONDED
//     NETWORKS between cellulose microfibrils in
//     the cell wall, acting as "molecular springs"
//     that RESIST THERMAL SOFTENING. While most
//     vegetables soften dramatically above 85°C
//     (pectin depolymerization, cell wall
//     disassembly), jicama retains 60-75% of its
//     raw crunch even after 10 minutes of stir-
//     frying at 150-180°C. This is because inulin-
//     type fructans are THERMALLY STABLE up to
//     ~200°C (vs pectin degradation at 80-100°C),
//     and their H-bond network reinforces the cell
//     wall architecture against thermal collapse.
//     The result: jicama strips in bò bía maintain
//     a CRISP, JUICY CRUNCH even when the roll has
//     been assembled for 15-20 minutes — a critical
//     feature for a street food that may sit in a
//     vendor’s display for extended periods. The
//     inulin is also a PREBIOTIC (fermented by
//     Bifidobacterium and Lactobacillus in the
//     colon, producing short-chain fatty acids —
//     butyrate, propionate, acetate), giving bò bía
//     an unrecognized GUT HEALTH benefit.
//
//  4. DRIED SHRIMP FLOSS — SPRAY-SURFACE MAILLARD
//     ON MICRO-FILAMENTS — Bò bía often includes
//     a layer of ruốc tôm (dried shrimp floss),
//     produced by cooking dried shrimp with sugar
//     and fish sauce, then shredding into fine
//     filaments (diameter 0.1-0.5 mm). These micro-
//     filaments have an EXTREMELY HIGH surface-to-
//     volume ratio (S/V ≈ 8000-40000 m⁻¹, compared
//     to ≈ 60 m⁻¹ for a whole shrimp), which means
//     that nearly ALL of the protein and sugar is
//     at the SURFACE, exposed to Maillard reaction
//     during the drying/toasting process. The result
//     is a product that is essentially PURE MAILLARD
//     SURFACE — every filament is coated with
//     melanoidins, pyrazines, and furanones. This
//     creates an UMAMI-SWEET FLAVOR DENSITY per gram
//     that exceeds almost any other dried seafood
//     product. In bò bía, the shrimp floss layer
//     serves as a FLAVOR AMPLIFICATION MEMBRANE —
//     sandwiched between the rice paper and the
//     vegetable filling, it distributes savory-sweet
//     flavor across the entire cross-section of
//     each bite, preventing the "bland center"
//     problem common in vegetable-heavy spring rolls.
//
//  5. HOISIN SAUCE THIXOTROPIC RHEOLOGY —
//     The dipping sauce for bò bía is tương đen
//     (hoisin sauce), a fermented soybean paste
//     with added sugar, vinegar, garlic, and
//     thickeners. Hoisin sauce exhibits THIXOTROPIC
//     behavior — its apparent viscosity DECREASES
//     with shear (stirring, dipping) and RECOVERS
//     at rest. At rest, the sauce has a high
//     viscosity (η₀ ≈ 50-200 Pa·s) due to the
//     entangled network of soy protein aggregates,
//     starch granule fragments, and added gums
//     (xanthan or modified starch). When sheared
//     (by dipping a roll and rotating it), the
//     network breaks apart and viscosity drops to
//     η_∞ ≈ 2-10 Pa·s — thin enough to coat the
//     roll’s surface. When the shearing stops (the
//     roll is lifted from the sauce), the network
//     REBUILDS over 5-15 seconds, and the sauce
//     layer on the roll surface GELS in place,
//     forming a ~0.5-1.0 mm thick coating that
//     does not drip. This thixotropic "dip-and-set"
//     behavior is IDEAL for street food — it allows
//     even coating without dripping, keeping the
//     vendor’s display and the eater’s clothes
//     clean. The recovery time (5-15 s) matches the
//     natural "dip, lift, bring to mouth" motion
//     of the eater — by the time the roll reaches
//     the mouth, the sauce has set.
//
//  6. TEOCHEW-CANTONESE-VIETNAMESE CULINARY
//     TRIANGULATION — Bò bía is a HYBRID DISH
//     that demonstrates the three-way cultural
//     exchange in colonial and post-colonial Saigon.
//     The name itself is Teochew (潤餅, jūn-piáⁿ
//     in Hokkien, bò bía in Teochew pronunciation),
//     referring to the Fujianese/Teochew popiah
//     (fresh spring roll). But Saigon’s bò bía
//     diverges from both Teochew popiah and
//     Fujianese rùn bǐng in critical ways:
//     (a) it uses RICE PAPER (bánh tráng) instead
//     of wheat flour popiah skins — reflecting
//     Vietnam’s rice-dominant agriculture;
//     (b) it uses JICAMA (a New World crop
//     introduced to Southeast Asia via the Manila
//     Galleon trade, 16th-17th century) as the
//     primary vegetable, replacing the turnip/bamboo
//     shoots of Chinese popiah;
//     (c) the lạp xưởng (Chinese sausage) is
//     retained from the Cantonese original but
//     sliced THINNER and pan-fried rather than
//     steamed — a Vietnamese adaptation that
//     increases Maillard surface area;
//     (d) the dipping sauce is HOISIN (tương đen)
//     rather than the sweet chili sauce of Chinese
//     popiah or the nước mắm of most Vietnamese
//     spring rolls — a unique choice that positions
//     bò bía between Chinese and Vietnamese flavor
//     systems. The dish is a street-food-scale
//     monument to Saigon’s Chợ Lớn (Chinatown)
//     food culture: affordable (5,000-10,000 VNĐ
//     per roll), portable, and encoding 300+ years
//     of Chinese-Vietnamese culinary negotiation
//     in every bite.
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'bo-bia',
  title: 'Bò Bía (Saigon Fresh Spring Roll with Chinese Sausage)',
  subtitle: 'Teochew-Vietnamese hybrid spring roll — rice paper plasticized to 35-45% moisture (Fick’s law 2-3s kinetic control), lạp xưởng with 10-15% sugar dual-function osmotic dehydration + secondary Maillard, jicama inulin-fructan crunch persistence, and hoisin thixotropic dip-and-set coating (η₀ 50-200 → η∞ 2-10 Pa·s, 5-15s recovery).',
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '35 min',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/bo-bia.jpg',

  intro: `Bò bía — the humble Saigon street roll of rice paper, Chinese sausage, jicama, egg, and shrimp floss dipped in hoisin — is among the cheapest and most ARCHITECTURALLY ELEGANT foods in Vietnamese street cuisine. At 5,000-10,000 VNĐ per roll (20-40 US cents), it is a masterclass in how to build a MULTI-TEXTURAL, MULTI-FLAVOR food object from inexpensive ingredients, using nothing more than a cutting board, a frying pan, and a practiced pair of hands.

The WRAPPER first. Bò bía uses bánh tráng — dried rice paper, a GLASSY AMORPHOUS STARCH FILM with water activity aw ≈ 0.2-0.3, existing in a thermodynamically metastable glassy state below its glass transition temperature Tg. The vendor dips each sheet in warm water (~40°C) for exactly 2-3 seconds — a KINETICALLY CONTROLLED window that exploits the physics of water diffusion into thin polymer films. Water molecules penetrate the starch matrix following Fick\’s second law, with diffusivity D ≈ 10⁻¹¹ m²/s at 40°C. In 2-3 seconds, water reaches approximately 60-70% of the paper\’s 0.3 mm thickness — the outer layers transition from GLASSY to RUBBERY (flexible, cohesive) while the inner core retains some glassy character (slightly firm, providing structural support). This creates a MOISTURE GRADIENT across the paper\’s cross-section: slippery-soft on the exterior surface, tacky-firm on the interior. The target overall moisture content is 35-45% — below 30%, the paper cracks during folding; above 50%, it dissolves into sticky mush. Every experienced bò bía vendor hits this window by feel, thousands of times per day, with sub-second precision.

The PROTEIN — lạp xưởng (Chinese cured sausage). This is the ingredient that makes bò bía unique among Vietnamese spring rolls. Lạp xưởng is a Cantonese charcuterie product brought to Saigon by Teochew-Cantonese immigrants who settled in Chợ Lớn (Saigon\’s Chinatown) from the 17th century onward. Its defining characteristic is an extraordinarily HIGH SUGAR CONTENT: 10-15% by weight, compared to 0.5-2% in European cured sausages (salami, chorizo, saucisson). This sugar serves a DUAL BIOCHEMICAL FUNCTION: first, it LOWERS water activity by osmotic effect — at 10-15% sugar in the meat matrix, aw drops from ~0.99 (fresh pork) to ~0.88-0.92, selectively inhibiting spoilage bacteria (Pseudomonas spp. require aw > 0.91, Salmonella > 0.94) while permitting beneficial lactic acid bacteria (Lactobacillus spp. grow at aw > 0.85) — a precision microbial engineering achieved empirically over centuries of Cantonese sausage-making. Second, the high sugar concentration drives INTENSE MAILLARD BROWNING during the drying process: reducing sugars (glucose from sucrose hydrolysis) react with free amino acids (lysine, glycine from meat proteins) to produce melanoidins (the brown color), pyrazines (nutty, roasted aroma), and furanones (caramel, butterscotch notes). When the sausage is sliced and PAN-FRIED for bò bía, a SECONDARY MAILLARD REACTION occurs on the freshly exposed cut surfaces at 150-180°C, producing additional layers of roasted, caramelized flavor that compound on top of the curing-stage products. The result is a protein element with a SWEET-SAVORY-SMOKY complexity that no fresh meat can achieve.

The CRUNCH — jicama (củ sắn or củ đậu). Jicama (Pachyrhizus erosus) is a New World root vegetable that arrived in Southeast Asia via the Manila Galleon trade routes of the 16th-17th centuries — one of the Columbian Exchange\’s most successful but least recognized transplants. Julienned into thin strips, jicama provides bò bía\’s essential TEXTURAL CONTRAST: a crisp, juicy crunch that persists even after assembly. This persistence is due to jicama\’s unusual cell wall composition: 3-6% INULIN-TYPE FRUCTANS (β(2→1)-linked fructose oligomers, DP 3-60) form hydrogen-bonded networks between cellulose microfibrils, creating "molecular springs" that resist thermal softening far beyond the temperature range where most vegetable crunch degrades. Pectin — the typical cell wall "glue" in most vegetables — depolymerizes above 80-100°C, causing softening. But inulin-type fructans are thermally stable to ~200°C, so jicama retains 60-75% of its raw crunch even after stir-frying. For a street food that may sit in a vendor\’s display for 15-20 minutes before being sold, this thermal crunch stability is the difference between a fresh-tasting roll and a soggy one.

The FLAVOR MEMBRANE — dried shrimp floss (ruốc tôm). A thin layer of shredded dried shrimp, toasted with sugar and fish sauce until each filament (diameter 0.1-0.5 mm) is coated in Maillard products. The SURFACE-TO-VOLUME RATIO of these micro-filaments (S/V ≈ 8,000-40,000 m⁻¹) means that virtually ALL of the protein and sugar is exposed surface — the product is essentially PURE MAILLARD INTERFACE, delivering umami-sweet flavor density per gram that exceeds whole dried shrimp by an order of magnitude. Spread as a thin layer across the rice paper before filling, the shrimp floss acts as a FLAVOR AMPLIFICATION MEMBRANE that distributes savory intensity across the entire cross-section of each bite.

The EGG component — a thin omelet (trứng tráng), sliced into ribbons. The omelet is cooked PAPER-THIN (0.5-1.0 mm) and provides a SOFT, YIELDING textural layer between the crisp jicama and the chewy sausage. Its mild egg flavor serves as a NEUTRAL BRIDGE between the intense sweetness of the sausage and the bright freshness of the herbs.

The DIPPING — hoisin sauce (tương đen). Bò bía is one of the few Vietnamese foods that uses hoisin (fermented soybean paste) rather than nước mắm as its dipping sauce — a direct inheritance from the Chinese popiah tradition. Hoisin sauce exhibits THIXOTROPIC RHEOLOGY: at rest, its apparent viscosity is high (η₀ ≈ 50-200 Pa·s) due to entangled networks of soy protein aggregates, starch fragments, and added gums. When SHEARED by dipping and rotating a roll, these networks break apart and viscosity drops to η∞ ≈ 2-10 Pa·s — fluid enough to coat the roll\’s surface evenly. When shearing stops (the roll is lifted from the sauce), the network REBUILDS over 5-15 seconds, and the sauce layer GELS in place as a ~0.5-1.0 mm thick coating that does not drip. This thixotropic "dip-and-set" cycle is OPTIMALLY MATCHED to the street food eating motion: dip (2-3 s of shearing → thin sauce), lift (5-15 s of recovery → sauce sets), eat (sauce stays put, no drip on clothes or motorcycle). It is an engineering solution to a practical problem — achieving even, drip-free sauce coating without any specialized equipment.

The CULTURAL ARCHITECTURE of bò bía is a three-way TEOCHEW-CANTONESE-VIETNAMESE triangulation. The name derives from Teochew 潤餅 (popiah/fresh spring roll), but the Saigon version has been thoroughly HYBRIDIZED: rice paper replaces wheat popiah skins (Vietnam\’s rice agriculture), jicama replaces turnip/bamboo (New World→Manila→Vietnam trade route), the sausage is sliced thinner and pan-fried rather than steamed (Vietnamese surface-Maillard preference), and the dipping sauce is hoisin rather than sweet chili (Chinese) or nước mắm (Vietnamese). Every ingredient choice positions bò bía at a precise point in the CULTURAL FLAVOR SPACE between Chinese and Vietnamese food systems — it belongs fully to neither tradition and is entirely Saigon\’s own.`,

  ingredientSections: [
    {
      title: 'Main',
      items: [
        {
          amount: 8,
          unit: 'sheet',
          name: 'rice paper (bánh tráng), 22 cm diameter',
          note: 'Use the THIN, translucent variety (not the thicker bánh tráng used for baked/grilled applications). Thin rice paper (~0.3 mm thickness) provides the optimal 2-3 second wetting window. Thicker papers require longer dipping (5-8 seconds), which risks over-hydration and structural failure during rolling.',
        },
        {
          amount: 2,
          unit: 'unit',
          name: 'Chinese sausage (lạp xưởng)',
          note: 'Select sausages that are FIRM (not soft — softness indicates insufficient drying, aw > 0.92) with a deep RED-BROWN color (indicating thorough Maillard browning during curing). The best lạp xưởng has visible FAT MARBLING — the intramuscular fat pockets render during pan-frying, creating pools of flavored lipid that lubricate the otherwise lean sausage. Brands from Chợ Lớn (Saigon\’s Chinatown) are traditional.',
        },
        {
          amount: 200,
          unit: 'g',
          name: 'jicama (củ sắn), julienned',
          note: 'Peel the rough brown skin and julienne into strips approximately 5 cm × 3 mm × 3 mm. Fresh jicama should be HEAVY for its size (indicating high water content ≈ 85-90%) and free of cracks or soft spots. The inulin-fructan content peaks 4-6 months after planting — younger roots have less crunch persistence.',
        },
        {
          amount: 3,
          unit: 'unit',
          name: 'eggs',
          note: 'For the thin omelet (trứng tráng). Beat with a pinch of salt and 1 tsp fish sauce.',
        },
        {
          amount: 30,
          unit: 'g',
          name: 'dried shrimp floss (ruốc tôm)',
          note: 'Also called chà bông tôm. The floss should be LIGHT, FLUFFY, and DRY — compressed or clumpy floss has absorbed moisture, which reduces its S/V ratio and dilutes the Maillard surface coating. If unavailable, finely shredded dried shrimp (tôm khô) can be substituted but with less flavor distribution.',
        },
      ],
    },
    {
      title: 'Herbs & Accompaniments',
      items: [
        {
          amount: 1,
          unit: 'bunch',
          name: 'lettuce leaves (xà lách)',
        },
        {
          amount: 1,
          unit: 'bunch',
          name: 'fresh herbs (húng quế, rau răm, rau mùi)',
          note: 'A mix of Thai basil, Vietnamese coriander, and cilantro. These provide the AROMATIC TOP NOTES — volatile terpenes (linalool from basil, dodecanal from coriander, perillaldehyde from rau răm) that contrast with the deep, Maillard-heavy base notes of the sausage and shrimp floss.',
        },
        {
          amount: 100,
          unit: 'ml',
          name: 'hoisin sauce (tương đen)',
          note: 'The thixotropic dipping sauce. For optimal viscosity, thin slightly with 1-2 tbsp warm water and stir vigorously (this sets up the entangled network for proper thixotropic behavior). Garnish with crushed roasted peanuts and a drizzle of chili sauce (Sriracha or tương ớt).',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'crushed roasted peanuts',
          note: 'Garnish for the hoisin dip. Peanuts add a CRUNCHY TEXTURAL COUNTERPOINT to the smooth, viscous sauce.',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Prepare lạp xưởng — secondary Maillard on cut surfaces',
      description: `Slice the Chinese sausage (lạp xưởng) DIAGONALLY into thin oval slices, approximately 2-3 mm thick. The diagonal cut maximizes the EXPOSED SURFACE AREA per slice (an elliptical cross-section has ~40% more area than a perpendicular circular one for the same sausage diameter), which increases the contact area for secondary Maillard browning in the pan.

Heat a dry pan (no oil needed — the sausage\’s intramuscular fat, at 20-30% of total mass, will render and provide its own cooking lipid) over medium heat (150-180°C surface temperature). Arrange the slices in a single layer and cook for 1-2 minutes per side until the surfaces develop a DARK BROWN, CARAMELIZED CRUST.

During this pan-frying, SECONDARY MAILLARD REACTION occurs: the already-browned cured surface undergoes additional sugar-amino acid reactions at 150-180°C, producing new pyrazines (nutty, roasted — 2-ethyl-3,5-dimethylpyrazine is the signature compound) and furanones (caramel, butterscotch — HDMF, 4-hydroxy-2,5-dimethyl-3(2H)-furanone). These layer ON TOP of the primary Maillard products from the curing stage, creating a COMPOUND BROWNING FLAVOR with unusual depth — a sweet, smoky, roasted complexity that single-stage browning cannot achieve.

Remove to a plate and let the rendered fat cool slightly — save it for cooking the eggs (it adds sausage flavor to the omelet).`,
      tip: `LẠP XƯỞNG vs EUROPEAN CURED SAUSAGE — THE SUGAR DIFFERENCE: European charcuterie (salami, saucisson sec, chorizo) uses 0.5-2% sugar — just enough to feed the starter culture bacteria during fermentation. Cantonese lạp xưởng uses 10-15% — a fundamentally different approach. This isn\’t a matter of "Asian vs European taste" — it\’s a different PRESERVATION STRATEGY. In the European model, preservation comes primarily from LOW pH (lactic acid from bacterial fermentation drops pH to 4.6-5.0, inhibiting pathogens) and SALT (2.5-3.5%, lowering aw). In the Cantonese model, preservation comes from SUGAR-DRIVEN OSMOTIC DEHYDRATION (10-15% sugar + 2.5-3.5% salt drops aw more aggressively than salt alone) and RAPID AIR-DRYING in the cool, dry winters of Guangdong (humidity 40-60% in December-February). The high sugar also means Maillard browning is far MORE INTENSE in lạp xưởng than in European sausages — the available reducing sugar concentration is 5-30× higher, so the rate of Maillard reaction (which is first-order in reducing sugar concentration at the meat\’s surface temperature) is proportionally faster. This is why lạp xưởng has that characteristic SWEET-SMOKY-CARAMEL flavor profile that has no European analogue.`,
    },
    {
      title: 'Make thin egg omelet — maximize surface area for wrapping',
      description: `Beat 3 eggs with a pinch of salt and 1 tsp fish sauce. Heat a non-stick pan (or use the pan with residual sausage fat) over medium-low heat.

Pour a thin layer of egg mixture — approximately 2-3 tbsp per omelet — and swirl to cover the pan base in a UNIFORM THIN LAYER (target thickness: 0.5-1.0 mm). Cook until the top surface is just set (no longer liquid but still slightly moist — approximately 45-60 seconds at 130-140°C pan temperature). Do NOT flip — the residual heat from the pan side will set the top surface.

Slide the omelet onto a cutting board and let cool. Repeat to make 3-4 thin omelets.

Once cooled, roll each omelet into a tight cylinder and slice into THIN RIBBONS approximately 5 mm wide. These ribbons will be distributed among the spring rolls as a soft, yielding textural layer.

The egg\’s NEUTRAL FLAVOR PROFILE (mild, slightly sulfurous from cysteine in ovalbumin, gently salty from the fish sauce addition) serves as a BRIDGE between the intense Maillard sweetness of the sausage and the bright freshness of the herbs — preventing the "sweet-herb clash" that occurs when strong sweet and strong green flavors compete without mediation.`,
      tip: `THE EGG OMELET\’S STRUCTURAL ROLE: In bò bía, the egg ribbon layer serves a non-obvious MECHANICAL function beyond flavor. When you bite through a spring roll, you\’re shearing through multiple concentric layers of different materials. The rice paper (E ≈ 1-10 MPa when hydrated) and the jicama (E ≈ 5-15 MPa, crisp) have very different elastic moduli, creating a "hard-soft-hard" layering that can cause the roll to SPLIT at the interface when bitten (the rigid layers slip against each other, and the bite force concentrates at the interface). The egg ribbon layer (E ≈ 0.1-0.5 MPa, very soft and compliant) sits BETWEEN these rigid layers and acts as a COMPLIANT INTERLAYER — absorbing the shear stress at the interface and preventing delamination. This is the same principle used in laminated safety glass (where a soft PVB interlayer between rigid glass layers prevents shattering). The egg ribbon is bò bía\’s PVB layer.`,
    },
    {
      title: 'Stir-fry jicama — thermal crunch preservation',
      description: `Heat 1 tbsp cooking oil in a wok or large pan over HIGH HEAT (200-220°C).

Add the julienned jicama strips and stir-fry for 2-3 minutes. The goal is NOT to cook the jicama through — it is to BRIEFLY EXPOSE the surface to high heat, achieving two things:
1. SURFACE MOISTURE EVAPORATION: The brief high heat drives off 10-15% of surface moisture, concentrating the sugars at the surface and producing a very light Maillard browning that adds subtle sweetness.
2. INULIN NETWORK ACTIVATION: The thermal shock (rapid surface heating to 150-200°C while the core remains at 40-60°C) causes the surface inulin-fructan chains to undergo conformational rearrangement, tightening their hydrogen-bonded network with cellulose microfibrils and INCREASING subsequent crunch persistence. Think of it as "heat-setting" the crunch — similar to how tempering chocolate stabilizes its crystal structure.

Season with a pinch of salt and ½ tsp sugar. Remove immediately — the jicama should still be CRISP-CRUNCHY, not soft. If it bends rather than snaps when you test a piece, it has been overcooked (the inulin network has been disrupted by excessive heating, and crunch cannot be recovered).

Set aside to cool slightly before assembly. Warm jicama placed directly into rice paper can cause the wrapper to become too soft from steam.`,
      tip: `JICAMA\’s COLUMBIAN EXCHANGE JOURNEY: Jicama (Pachyrhizus erosus) is native to Mexico and Central America, where it was cultivated by Aztec and Maya civilizations as a root vegetable (the Nahuatl name is xīcamatl). It arrived in the Philippines via the Manila Galleon trade route (1565-1815 — the longest-running trans-Pacific trade route in history) and from the Philippines spread to Vietnam, Thailand, and Indonesia. In Vietnam, it is called củ sắn (Northern) or củ đậu (Southern) and is used both raw (in salads, with chili salt) and cooked (in stir-fries, spring rolls, and fillings for bánh). The fact that a Mexican root vegetable became a defining ingredient of a Teochew-Vietnamese street food in Saigon is a testament to the LONG-RANGE INTERCONNECTEDNESS of food culture — bò bía encodes trade routes spanning three continents and four centuries.`,
    },
    {
      title: 'Assemble — the moisture-gradient roll',
      description: `Set up an assembly station:
— A shallow dish of WARM water (~40°C — not hot, not cold)
— A clean, slightly damp cutting board or plate for rolling
— All fillings within easy reach

DIP one rice paper sheet in warm water for 2-3 SECONDS ONLY. The paper should still feel slightly FIRM and not fully pliable when you remove it — it will continue to soften on the cutting board as residual water diffuses inward (Fickian diffusion continues for 30-60 seconds after removal from the water). If you wait for the paper to feel completely soft while still in the water, it is OVER-HYDRATED and will tear during rolling.

Place the damp paper on the cutting board. Working quickly:

1. SHRIMP FLOSS LAYER: Sprinkle a thin, even layer of dried shrimp floss (ruốc tôm) across the lower third of the rice paper. This FLAVOR MEMBRANE distributes umami-sweet intensity across the entire bite cross-section.

2. LETTUCE + HERBS: Lay a lettuce leaf and a few herb sprigs over the shrimp floss.

3. JICAMA: Arrange a line of stir-fried jicama strips across the center.

4. EGG RIBBONS: Lay 3-4 egg ribbons alongside the jicama.

5. LẠP XƯỞNG: Arrange 4-5 slices of pan-fried sausage in an even line.

ROLLING TECHNIQUE:
— Fold the bottom edge of the rice paper up and over the filling, tucking it snugly under the filling line.
— Fold the left and right sides inward (creating the sealed ends).
— Roll forward firmly but gently — the roll should be TIGHT (no air pockets) but not so tight that the filling squeezes out or the paper tears. The moisture gradient in the paper helps: the softer outer surface conforms to irregularities in the filling, while the slightly firmer inner layer provides structural tension that keeps the roll compact.

The finished roll should be approximately 12-15 cm long and 3-4 cm in diameter — compact enough to eat in 4-5 bites without sauce dripping.`,
      tip: `THE VENDOR\’S SPEED: Professional bò bía vendors in Saigon assemble 8-12 rolls per minute — approximately 5-7 seconds per roll. This speed is not just showmanship; it is STRUCTURALLY NECESSARY. Once the rice paper is dipped, the hydration clock is running: within 60-90 seconds, Fickian diffusion will bring the entire paper above 50% moisture content, at which point it becomes too sticky and fragile to handle. The vendor must complete the entire dip-place-fill-roll sequence within this window. Years of practice encode the KINETIC parameters of rice paper hydration into the vendor\’s muscle memory — they never time the dip or check the paper\’s flexibility; they feel the moment the paper is "right" through their fingertips, and they roll before the window closes. Watching an experienced bò bía vendor work is watching someone who has internalized the Fick\’s second law solution for thin-film diffusion as a MOTOR SKILL.`,
    },
    {
      title: 'Prepare hoisin dipping sauce — thixotropic optimization',
      description: `Pour hoisin sauce into a small bowl. Add 1-2 tbsp warm water and stir vigorously for 15-20 seconds.

This stirring step is CRITICAL for thixotropic optimization: the vigorous shearing BREAKS UP the pre-existing entangled network of soy protein aggregates and starch fragments, then the resting period after stirring allows the network to REASSEMBLE into a more uniform, finely-meshed structure. The result is a sauce that:
— Flows more EASILY when sheared (lower η∞, better coating)
— RECOVERS more quickly when shearing stops (shorter thixotropic recovery time, faster "set" on the roll surface)
— Has a more UNIFORM VISCOSITY (fewer thick clumps, more even coating)

Garnish the sauce with:
— 1 tbsp crushed roasted peanuts (textural crunch + nutty Maillard flavor)
— A drizzle of Sriracha or tương ớt (chili sauce) — optional, for capsaicin TRPV1 heat

To eat: dip the cut end of the bò bía roll into the sauce, rotating slightly (2-3 seconds of shear), then lift and bring to mouth. By the time the roll reaches your lips (~5-10 seconds of recovery time), the hoisin coating will have GELLED in place — thick enough to stay put, thin enough to not mask the filling flavors.`,
      tip: `HOISIN vs NƯỚC MẮM — WHY BÒ BÍA CHOSE DIFFERENTLY: Most Vietnamese spring rolls (gỏi cuốn, nem cuốn) are dipped in nước mắm pha (diluted fish sauce with lime, sugar, garlic, chili). Bò bía uses hoisin sauce (tương đen) instead — and this is not arbitrary. The choice reflects bò bía\’s CHINESE HERITAGE: hoisin (海鮮醬, literally "seafood sauce" though it contains no seafood in modern formulations) is the traditional condiment for Cantonese/Teochew popiah. But there\’s also a FLAVOR ENGINEERING reason: lạp xưởng already has a strong SWEET-SAVORY Maillard profile. Nước mắm would add SALTY-UMAMI on top of the sausage\’s existing savory depth, creating UMAMI OVERLOAD. Hoisin instead adds SWEET-FERMENTED-AROMATIC notes (from fermented soybean paste, five-spice powder, garlic) that COMPLEMENT the sausage\’s sweetness rather than competing with its savory. It\’s the same principle as wine pairing: you don\’t pair a rich, savory dish with a savory wine — you pair it with something that offers a contrasting or complementary sweetness. Hoisin is bò bía\’s "wine pairing."`,
    },
  ],
};

export default function BoBiaPage() {
  return <RecipeLayout recipe={recipe} />;
}
