'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Bánh Răng Bừa — Thanh Hóa Plow-Tooth Rice Cake
//  Thanh Hóa #7
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. INDICA RICE AMYLOSE PARTIAL GELATINIZATION
//     GRADIENT — 25-30% amylose indica, kneading
//     hot water into raw flour creates a PARTIAL
//     gelatinization spectrum: some granules fully
//     swollen (gelatinized paste = binder), others
//     intact (raw starch = structural filler),
//     composite material like concrete (cement + aggregate)
//  2. BANANA LEAF CUTICLE WAX RELEASE AGENT —
//     epicuticular wax C₂₉-C₃₃ n-alkanes mp 60-85°C,
//     during steaming wax partially melts creating
//     0.1-0.5 µm hydrophobic film between dough and
//     leaf, preventing adhesion WITHOUT added oil,
//     natural non-stick surface
//  3. PORK FAT RENDERED LARD CRYSTAL POLYMORPHISM —
//     mỡ hành (scallion lard): triglyceride crystallization
//     α→β'→β polymorphic transitions during cooling,
//     β' form (mp 28-36°C) = mouth-temperature melt
//     delivering flavor burst, allium sulfides
//     partition into lipid phase during rendering
//  4. DRIED SHRIMP CHITIN-PROTEIN MAILLARD
//     AMPLIFICATION — whole dried shrimp with shell:
//     chitin N-acetylglucosamine provides ADDITIONAL
//     amino group donor for Maillard beyond protein
//     alone, 1.5-3× browning kinetics, unique
//     pyrazine-thiazole spectrum
//  5. GEOMETRIC MORPHOLOGY — PLOW-TOOTH SHAPE —
//     the triangular cross-section (resembling a
//     plow tooth/răng bừa) maximizes edge-to-center
//     ratio for even steam penetration while creating
//     sharp edges that crisp when pan-fried (optional),
//     dual-preparation versatility
//  6. THANH HÓA AGRARIAN FOOD DESIGN —
//     shaped for field workers: one-handed eating,
//     banana leaf = plate + wrapper + utensil,
//     complete nutrition (starch + protein + fat)
//     in portable package, Đông Sơn bronze-age
//     rice culture continuity
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'banh-rang-bua',
  title: 'Bánh Răng Bừa (Thanh Hóa Plow-Tooth Rice Cake)',
  subtitle: 'Indica rice 25-30% amylose partially gelatinized creates a cement-aggregate composite of swollen paste binder and intact granule filler, banana leaf epicuticular wax C₂₉-C₃₃ melts at steaming temperature forming a 0.1-0.5 µm natural non-stick release film, and rendered lard β\' crystals melt at mouth temperature 28-36°C delivering allium sulfide flavor bursts.',
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.6,
  baseServings: 20,
  heroImage: '/images/recipes/banh-rang-bua.jpg',

  intro: `Bánh răng bừa is Thanh Hóa's most GEOMETRICALLY DISTINCTIVE rice cake — a filled rice dough steamed in banana leaves, shaped into elongated triangular prisms that resemble the TEETH OF A HARROW (răng bừa), the traditional agricultural implement used to break up paddy soil before rice planting. This shape is not merely decorative — it is an engineering decision that governs heat transfer, textural development, and eating ergonomics.

The CENTRAL MECHANISM is INDICA RICE AMYLOSE PARTIAL GELATINIZATION GRADIENT. Thanh Hóa's indica rice varieties contain 25-30% AMYLOSE — significantly higher than glutinous rice (0-2%) and higher than most japonica varieties (15-20%). When hot water (85-95°C) is kneaded into raw indica rice flour, a GRADIENT OF GELATINIZATION occurs within the dough mass: starch granules that directly contact the hot water SWELL and GELATINIZE, their amylose molecules leaching out and forming a viscous PASTE that acts as a BINDER; meanwhile, granules in regions that received less heat remain INTACT, their crystalline structure preserved, acting as STRUCTURAL FILLER particles. The result is a COMPOSITE MATERIAL analogous to CONCRETE — the gelatinized paste is the "cement" (continuous phase, binding everything together) and the intact granules are the "aggregate" (dispersed phase, providing structural resistance and preventing excessive softening). This composite structure gives bánh răng bừa its characteristic texture: firm and slightly chewy (from the intact starch granules providing resistance) yet cohesive and not crumbly (from the gelatinized paste binding the particles together). The ratio of hot to cold water during kneading controls the DEGREE OF PARTIAL GELATINIZATION — too much hot water (>70% gelatinized) produces a soft, sticky, glutinous-like dough that collapses under its own weight; too little (<30% gelatinized) produces a dry, crumbly dough that fractures during shaping. The optimal ratio for Thanh Hóa bánh răng bừa is approximately 50-60% gelatinization, achieved by using water at 90°C for the first portion of kneading, then adding room-temperature water to cool the dough and halt further gelatinization.

The BANANA LEAF CUTICLE WAX RELEASE AGENT is a natural non-stick technology that has been used in Vietnamese cooking for millennia. The adaxial (upper) surface of the banana leaf is covered with EPICUTICULAR WAX — a layer of long-chain n-alkanes (primarily C₂₉ nonacosane and C₃₁ hentriacontane) with melting points of 60-85°C. During STEAMING at 100°C, this wax layer PARTIALLY MELTS, flowing into a thin, uniform film (0.1-0.5 µm thick) at the interface between the rice dough and the leaf surface. This film is HYDROPHOBIC — it repels the water-based dough, preventing adhesion. When the steaming is complete and the temperature drops below the wax melting point, the film RE-SOLIDIFIES, and the leaf peels away cleanly from the cooked cake, leaving a SMOOTH, GLOSSY surface on the bánh with a subtle, pleasant waxy sheen. This is nature's non-stick coating — functioning identically to the polytetrafluoroethylene (PTFE, Teflon) coating on modern cookware, but biodegradable and edible. The wax transfer also contributes a subtle AROMATIC component: the n-alkane wax carries trace amounts of the leaf's volatile terpenoids (linalool, eugenol, hexanal) that deposit onto the cake surface during steaming, creating the distinctive "banana leaf fragrance" that is integral to the flavor identity of leaf-wrapped cakes.

PORK FAT RENDERED LARD CRYSTAL POLYMORPHISM governs the mỡ hành (scallion lard) topping that accompanies bánh răng bừa. When pork back fat is slowly rendered at 120-140°C, the triglycerides melt completely and the ALLIUM SULFIDES from the scallions (diallyl disulfide, methyl allyl sulfide) PARTITION into the lipid phase — their log P values of 1.5-2.5 make them strongly lipophilic, so they concentrate in the fat rather than evaporating. As the rendered lard cools, the triglycerides undergo POLYMORPHIC CRYSTALLIZATION — first forming unstable α crystals (hexagonal packing, mp 20-25°C), which spontaneously transform to metastable β' crystals (orthorhombic packing, mp 28-36°C), which are kinetically trapped in this form if the cooling rate is moderate (not too fast, not too slow). The β' polymorph is critical because its melting point (28-36°C) falls precisely within the MOUTH TEMPERATURE range — when the lard touches the tongue, it melts, releasing the trapped allium sulfides in a FLAVOR BURST that is perceived as a sudden intensification of scallion aroma. If the lard were allowed to slowly equilibrate to the stable β form (mp 40-45°C), it would feel waxy and would not melt on the tongue, trapping the flavors and reducing the sensory impact.

DRIED SHRIMP in the filling contribute more than protein and umami — their intact CHITIN SHELLS participate in an amplified form of the MAILLARD REACTION. Chitin is a polymer of N-ACETYLGLUCOSAMINE — a sugar with an amino group. When dried shrimp (with shells) are sautéed, the chitin provides ADDITIONAL AMINO GROUP DONORS for the Maillard reaction, beyond what the shrimp protein alone supplies. This chitin-enhanced Maillard reaction proceeds 1.5-3× FASTER than a protein-only system and produces a DISTINCT VOLATILE SPECTRUM — more PYRAZINES (nutty, roasty) and THIAZOLES (savory, meaty) than the protein-only reaction, which favors Strecker aldehydes (malty, chocolate-like). The result is the intensely savory, deeply roasted flavor of stir-fried dried shrimp that cannot be replicated by using fresh shrimp (no chitin contribution) or by using peeled dried shrimp (chitin removed).

The PLOW-TOOTH GEOMETRY of bánh răng bừa is an ENGINEERING OPTIMIZATION for dual-preparation versatility. The triangular cross-section (typical dimensions: 3 cm base × 2.5 cm height × 12-15 cm length) creates SHARP EDGES and a THIN RIDGE along the top. When steamed, the small cross-section ensures EVEN STEAM PENETRATION — the maximum distance from any internal point to the surface is only 1.0-1.2 cm, compared to 2-3 cm for a cylindrical bánh of similar volume, reducing cooking time by 30-40%. When OPTIONALLY PAN-FRIED after steaming (bánh răng bừa rán), the sharp edges and flat faces provide maximum CONTACT AREA with the pan surface, creating a crispy crust on the outside while the interior remains soft — the triangular shape is inherently better for pan-frying than a cylindrical one because it sits flat on one face rather than rolling. The plow-tooth shape is an accidental manifestation of OPTIMAL HEAT TRANSFER GEOMETRY — the triangular prism is one of the most efficient 3D shapes for minimizing the maximum interior distance to the surface while maintaining structural integrity.

Bánh răng bừa embodies Thanh Hóa's AGRARIAN FOOD DESIGN philosophy — food engineered for farming communities. The banana-leaf-wrapped triangular cake is a COMPLETE PORTABLE MEAL: the rice dough provides carbohydrate energy, the pork-shrimp filling provides protein and fat, and the banana leaf serves simultaneously as wrapper (keeping the cake moist), plate (the leaf unfolds to create an eating surface), and utensil handle (the ends of the leaf provide grip for one-handed eating while the other hand holds a tool). This one-handed eating optimization reflects the cake's origin as FIELD FOOD — sustenance eaten during brief rest breaks in the paddy fields, where both hands might be muddy from planting and only one could be wiped clean enough to eat. The plow-tooth shape itself is a CULTURAL REFERENCE to the harrow — a constant visual reminder of the agricultural identity that defines Thanh Hóa's traditional communities.`,

  ingredientSections: [
    {
      title: 'Rice Dough — Partial Gelatinization Composite',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'rice flour (bột gạo), indica variety preferred',
          note: 'High-amylose indica (25-30%) gives the firm, chewy texture. Glutinous rice flour will NOT work — it produces a soft, sticky dough without the composite structure.',
        },
        {
          amount: 350,
          unit: 'ml',
          name: 'water (200 ml boiling + 150 ml room temperature)',
          note: 'The two-temperature water system controls partial gelatinization. Boiling water gelatinizes ~50-60% of granules (cement), room-temp water halts it, leaving 40-50% intact (aggregate).',
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'salt',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'cooking oil',
          note: 'Prevents dough from sticking during shaping.',
        },
      ],
    },
    {
      title: 'Filling — Chitin-Enhanced Maillard System',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'pork belly, finely diced (5 mm cubes)',
        },
        {
          amount: 50,
          unit: 'g',
          name: 'dried shrimp (tôm khô), WITH shells, roughly chopped',
          note: 'CHITIN SHELLS are essential — they provide N-acetylglucosamine for enhanced Maillard reaction. Do NOT use peeled dried shrimp.',
        },
        {
          amount: 3,
          unit: 'unit',
          name: 'shallots, finely minced',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'fish sauce',
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'black pepper',
        },
      ],
    },
    {
      title: 'Wrapping & Topping',
      items: [
        {
          amount: 20,
          unit: 'unit',
          name: 'banana leaf pieces, each ~15 × 20 cm, briefly wilted over flame',
          note: 'CUTICLE WAX RELEASE — wilting softens the leaf for folding but the epicuticular wax layer remains intact. Use the GLOSSY (adaxial) side facing the dough.',
        },
        {
          amount: 100,
          unit: 'g',
          name: 'pork back fat, diced for rendering',
          note: 'For mỡ hành — β\' crystal polymorph melts at mouth temperature.',
        },
        {
          amount: 4,
          unit: 'unit',
          name: 'scallions, finely sliced',
          note: 'Allium sulfides partition into the lipid phase during rendering.',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Make the filling — chitin-enhanced Maillard, 10 minutes',
      description: `HEAT 1 tablespoon oil in a wok over HIGH heat. SAUTÉ the minced shallots until fragrant (1-2 minutes).

ADD the dried shrimp WITH SHELLS and stir-fry for 2-3 minutes until deeply golden-brown and intensely aromatic. The chitin shells are undergoing accelerated Maillard reaction — the N-acetylglucosamine in the chitin provides ADDITIONAL amino groups that react with reducing sugars 1.5-3× faster than protein alone, generating the characteristic pyrazine and thiazole volatiles that define the flavor of stir-fried dried shrimp.

ADD the diced pork belly and stir-fry until cooked through and lightly browned (4-5 minutes). Season with fish sauce and black pepper. REMOVE from heat and set aside to cool.`,
      tip: `CHITIN-PROTEIN MAILLARD AMPLIFICATION — WHY THE SHELLS MATTER: The chitin in shrimp shells is a polymer of N-ACETYLGLUCOSAMINE — each monomer unit contains both a sugar ring AND an amino group (the N-acetyl group). In the Maillard reaction, amino groups react with reducing sugars to produce flavor compounds. Protein typically provides amino groups through its lysine and arginine residues — but these are SPACED ALONG the protein chain, limiting the reaction rate. Chitin, by contrast, provides an amino group on EVERY MONOMER UNIT — a much higher density of reactive sites per unit mass. The result is that shrimp-with-shell systems produce 1.5-3× more Maillard products per unit time than shrimp-without-shell systems, and the product SPECTRUM differs: chitin-enhanced Maillard favors PYRAZINES (methylpyrazine, 2,5-dimethylpyrazine — nutty, roasty) and THIAZOLES (2-acetylthiazole — savory, popcorn-like) because the glucosamine sugar ring provides a different carbon skeleton than glucose or fructose for the Strecker degradation and Amadori rearrangement intermediates.`,
    },
    {
      title: 'Make the dough — two-temperature partial gelatinization, 15 minutes',
      description: `PLACE the rice flour and salt in a large mixing bowl.

POUR 200 ml of BOILING water into the flour while stirring vigorously with chopsticks. The boiling water immediately gelatinizes the starch granules it contacts — amylose molecules leach out and form a viscous PASTE that begins to bind the flour particles together. Continue stirring for 2-3 minutes — the mixture will be lumpy and partially cohesive.

ADD 150 ml of ROOM-TEMPERATURE water gradually, kneading the dough as you go. The cool water serves two purposes: (1) it HALTS further gelatinization by dropping the dough temperature below 60°C, preserving the remaining intact starch granules as structural "aggregate"; (2) it hydrates the ungelatinized granules, allowing them to swell slightly without bursting, which improves the dough's workability.

KNEAD for 8-10 minutes until the dough is SMOOTH, PLIABLE, and NON-STICKY. Add the cooking oil during kneading to improve extensibility. The dough should feel FIRM but not hard — like modeling clay. If too dry, add water 1 tablespoon at a time; if too sticky, add rice flour 1 tablespoon at a time.

The finished dough is the COMPOSITE MATERIAL: ~50-60% gelatinized paste (cement) surrounding ~40-50% intact granules (aggregate). You can feel the composite nature — the dough has a slight GRAININESS from the intact granules despite being smooth overall.`,
      tip: `CONCRETE ANALOGY — CEMENT + AGGREGATE = OPTIMAL MECHANICAL PROPERTIES: The partial gelatinization of indica rice flour creates a material with properties that NEITHER fully gelatinized NOR fully raw flour can achieve alone. Fully gelatinized dough (100% paste, no aggregate) is SOFT, EXTENSIBLE, and COHESIVE — like cement without aggregate, it flows and deforms easily but has no structural resistance. Fully raw dough (100% aggregate, no paste) is DRY, BRITTLE, and NON-COHESIVE — like aggregate without cement, it crumbles and cannot hold a shape. The 50-60% gelatinized composite achieves BOTH properties: cohesion from the paste phase AND structural resistance from the granule phase. This is identical to the engineering principle behind concrete: Portland cement alone is strong in compression but weak and brittle; aggregate alone has no cohesion; combined at the optimal ratio (typically 60-75% aggregate : 25-40% cement), concrete achieves a compressive strength greater than either component alone.`,
    },
    {
      title: 'Shape the plow-tooth geometry and wrap, 20 minutes',
      description: `DIVIDE the dough into 20 equal portions (~40 g each). DIVIDE the filling into 20 equal portions (~15 g each).

FOR EACH PORTION: Flatten a dough ball into an oval disc (~8 × 6 cm, 3-4 mm thick). Place a portion of filling in the CENTER. Fold the dough around the filling, sealing the edges by pinching firmly. Shape into an ELONGATED TRIANGULAR PRISM — approximately 12-15 cm long with a triangular cross-section (3 cm base × 2.5 cm height). The shape should resemble a PLOW TOOTH (răng bừa): elongated, with a flat base and a ridged top.

WRAP each shaped cake in a banana leaf piece: place the cake on the GLOSSY (adaxial) side of the leaf — this is the side with the epicuticular wax that will serve as the natural non-stick release agent. Fold the leaf snugly around the cake, tucking the ends underneath. Tie with banana leaf strips or kitchen twine if needed.

ARRANGE the wrapped cakes seam-side down in a steamer.`,
      tip: `PLOW-TOOTH GEOMETRY — ENGINEERING HEAT TRANSFER + DUAL-PREPARATION: The triangular cross-section of bánh răng bừa is not just visual — it is thermodynamically SUPERIOR for steaming. For a given cross-sectional area, the MAXIMUM INTERIOR DISTANCE to the surface (which determines cooking time) is smallest for geometries with high perimeter-to-area ratios. A triangle has a higher P/A ratio than a circle of the same area (P/A_triangle ≈ 4.56/√A vs P/A_circle ≈ 3.54/√A for an equilateral triangle), meaning the maximum interior distance is ~22% shorter. This translates to 30-40% faster cooking because heat transfer through starch gel is diffusion-limited (Fourier's law: cooking time ∝ L², where L is the maximum distance), so a 22% reduction in L gives a (0.78)² ≈ 39% reduction in cooking time. The flat faces of the triangular prism also make it SUPERIOR for optional pan-frying — it sits stable on one face, maximizing the contact area with the hot pan surface, whereas cylindrical cakes roll and have only a tangent line of contact.`,
    },
    {
      title: 'Steam and prepare mỡ hành — polymorphic lard, 25 minutes',
      description: `STEAM the wrapped cakes over vigorously boiling water for 20-25 minutes. During steaming, the partially gelatinized dough undergoes COMPLETE GELATINIZATION of the remaining intact granules — the composite structure is "set" as the gelatinized paste solidifies into a continuous gel matrix with the now-swollen (but still somewhat granular) former-aggregate particles embedded within it, like concrete curing.

WHILE STEAMING, prepare the MỠ HÀNH: Render the diced pork back fat in a small pan over MEDIUM-LOW heat (120-140°C) for 8-10 minutes until the fat is fully liquid and the cracklings (tóp mỡ) are golden and crisp. REMOVE cracklings and reserve.

ADD the sliced scallions to the hot rendered fat. They will SIZZLE and wilt — the allium sulfides (diallyl disulfide, methyl allyl sulfide) rapidly PARTITION from the aqueous cell contents into the surrounding lipid phase (log P 1.5-2.5 = strongly lipophilic). REMOVE from heat immediately when the scallions turn bright green (15-20 seconds) — overcooking destroys the sulfides.

ALLOW the mỡ hành to cool at room temperature. The triglycerides crystallize through the α→β' transition, TRAPPING the allium sulfides within the crystal matrix. The β' crystals (mp 28-36°C) will melt on the tongue, releasing the trapped scallion aroma in a BURST.

UNWRAP the steamed cakes — the banana leaf should peel away cleanly, leaving a smooth, glossy surface with a subtle waxy sheen from the transferred epicuticular wax.

SERVE with a generous drizzle of mỡ hành and scattered tóp mỡ cracklings. Optionally, PAN-FRY the steamed cakes in a hot skillet with a little oil until the flat faces are golden and crispy — the sharp edges of the triangular shape will crisp particularly well.`,
      tip: `LARD β' CRYSTAL — THE MOUTH-TEMPERATURE FLAVOR BOMB: The mỡ hành (scallion lard) topping illustrates a profound principle of fat-delivered flavor. The scallion's allium sulfides are VOLATILE — they would rapidly evaporate if left in an aqueous medium. But dissolved in the lipid phase and then CRYSTALLIZED within the β' polymorph, they are physically TRAPPED in a solid matrix — unable to evaporate, unable to be perceived by the nose. When the lard touches the 37°C tongue surface, the β' crystals (mp 28-36°C) MELT, instantaneously releasing the trapped volatiles into the warm, moist oral cavity where they rise retronasally to the olfactory epithelium. The perception is a SUDDEN, INTENSE burst of scallion aroma — much more impactful than if the same amount of scallion had been simply chopped and sprinkled on top, because the crystallization-melting cycle CONCENTRATES the release into a fraction of a second rather than allowing gradual evaporation over minutes.`,
    },
  ],
};

export default function BanhRangBuaPage() {
  return <RecipeLayout recipe={recipe} />;
}
