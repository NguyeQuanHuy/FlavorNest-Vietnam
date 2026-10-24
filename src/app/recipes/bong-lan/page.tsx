'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Bông Lan — Vietnamese Sponge Cake (French Génoise Heritage)
//  Món Việt ảnh hưởng Pháp #9
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  ─────────────────────────────────────────────────
//  1. FOAM MECHANICS — Whole-egg foaming: air cell nucleation,
//     Plateau border drainage, surface viscoelasticity vs French
//     génoise separated-egg meringue. Vietnamese WHOLE-EGG method
//     ribbon stage (ruban) protein-air interface physics.
//
//  2. GLUTEN NETWORK TOPOLOGY — Wheat flour protein glutenin
//     macropolymer (GMP) MW 10⁶-10⁷ Da + gliadin monomers
//     MW 30-80 kDa. Vietnamese folding technique = MINIMAL
//     gluten development: random-coil → partially-extended
//     network density ρ_cross ≈ 10⁻⁴ mol/cm³ (vs bread
//     ρ_cross ≈ 10⁻³). Mixing time τ < 60s critical.
//
//  3. STEAM LEAVENING AMPLIFICATION — No chemical leavener:
//     100% thermal expansion of entrapped air (Charles's Law
//     V₂/V₁ = T₂/T₁ ≈ 453/298 ≈ 1.52×) + steam generation
//     (1g H₂O → 1700 mL steam at 100°C, 1 atm). Dual-phase
//     pneumatic system unlike baking-powder cakes.
//
//  4. MAILLARD-CARAMELIZATION GRADIENT — Crust browning
//     profile: surface T > 150°C → Maillard (lysine ε-amino +
//     reducing sugars, Ea ≈ 100-130 kJ/mol) concurrent with
//     sucrose caramelization onset 160°C → caramelen polymers.
//     Interior locked at 98-100°C by latent heat = ZERO browning.
//     Thermal gradient ΔT/Δx ≈ 50°C/mm at crust-crumb boundary.
//
//  5. CONDENSED MILK HYGROSCOPIC MATRIX — Sữa đặc replacing
//     granulated sugar: pre-inverted lactose-sucrose syrup +
//     casein Maillard pre-products + 8% milkfat emulsification.
//     Water activity depression Δaw ≈ 0.03-0.05 vs equivalent
//     sucrose = extended shelf softness 3-5 days vs 1-2 days
//     for French génoise.
//
//  6. PANDAN AROMATIC VOLATILE CAPTURE — 2-acetyl-1-pyrroline
//     (2AP) bp 93°C at reduced pressure, partition coefficient
//     K_air/batter ≈ 10⁻³. Batter viscosity η ≈ 2000-5000 mPa·s
//     TRAPS volatiles during mixing; oven thermal release follows
//     first-order kinetics k_release ≈ 0.02-0.05 min⁻¹ at 170°C.
//     70-80% 2AP retained in crumb vs 20-30% in low-viscosity
//     batters. Synergy with vanillin OR1D2 receptor co-activation.
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'bong-lan',
  title: 'Bông Lan (Vietnamese Sponge Cake)',
  subtitle: 'A whole-egg foam cake descended from French génoise, transformed by condensed milk, pandan, and coconut — Saigon\'s beloved teatime staple where steam and trapped air alone produce the rise without a single gram of baking powder.',
  category: 'DESSERT',
  difficulty: 'Medium',
  totalTime: '55 min',
  rating: 4.7,
  baseServings: 8,
  heroImage: '/images/recipes/bong-lan.jpg',

  intro: `Born from the collision of French pâtisserie and Vietnamese pantry economics, bông lan — literally "cotton flower" for its cloud-soft crumb — traces its lineage to the génoise sponge that arrived in Saigon with colonial bakers in the late nineteenth century. But where the génoise relies on separated-egg meringue folded with clarified butter and granulated sugar, the Vietnamese adaptation performed a radical simplification: whole eggs beaten to ribbon stage with sweetened condensed milk, pandan extract replacing vanilla, and coconut oil standing in for European butter. The result is not a lesser copy but a parallel invention — a cake engineered for tropical humidity, limited refrigeration, and ingredients available at every corner shop from Chợ Lớn to Cần Thơ. The name itself reveals the aspiration: cotton-soft, flower-light, a texture that the French original, with its denser butter-laden crumb, never quite achieves.

The physics of bông lan begins with FOAM ARCHITECTURE. When whole eggs and condensed milk are whisked at high speed for 8-12 minutes, ovotransferrin and ovalbumin unfold at the air-liquid interface, exposing hydrophobic residues that anchor into the air phase while hydrophilic segments remain in the aqueous phase. This creates a VISCOELASTIC PROTEIN FILM around each air cell — surface dilatational modulus E\\'_d ≈ 30-50 mN/m — that resists drainage through Plateau borders (the liquid channels where three bubble walls meet). The critical difference from French génoise: Vietnamese bông lan uses the WHOLE EGG continuously, meaning lecithin from yolks (a surfactant that normally DESTABILIZES protein foams by competitive adsorption) is present from the start. The solution is EXTENDED WHIPPING TIME: 8-12 minutes vs the génoise\\'s 5-7 minutes for whites alone. This prolonged mechanical input creates SMALLER, MORE UNIFORM CELLS (diameter 50-150 μm vs génoise 100-300 μm) because lecithin, while weakening individual films, LOWERS SURFACE TENSION γ from ≈50 to ≈35 mN/m, facilitating more numerous nucleation events. The result: a finer, more cotton-like crumb — the very texture the name promises.

The FLOUR FOLDING STEP is where most home bakers fail, and the failure is quantifiable. Wheat flour contains glutenin (MW 10⁶-10⁷ Da, the elastic component) and gliadin (MW 30-80 kDa, the viscous component). When hydrated and mechanically worked, these proteins form a viscoelastic gluten network through disulfide bonds (-S-S-) and non-covalent interactions (hydrogen bonds, hydrophobic stacking). In bread, this network is MAXIMALLY DEVELOPED — crosslink density ρ ≈ 10⁻³ mol/cm³, requiring 8-15 minutes of kneading. In bông lan, the goal is MINIMAL DEVELOPMENT — ρ ≈ 10⁻⁴ mol/cm³ — achieved by folding flour in THREE ADDITIONS with no more than 15-20 strokes each, total mixing time under 60 seconds. Each additional fold after that threshold increases gluten network connectivity exponentially (percolation theory: above the critical gel fraction p_c ≈ 0.5, modulus G\\' rises as G\\' ~ (p - p_c)^1.7), transforming cotton-cloud into rubber-tough. The Vietnamese grandmother\\'s instruction — "fold until you see no more white, then STOP" — is percolation science expressed as kitchen wisdom.

Bông lan occupies a unique position in Vietnamese social life: it is simultaneously the most democratic and the most nostalgic of cakes. Street vendors in Saigon sell individual portions from glass-fronted cabinets for 5,000-10,000 VND, making it the cheapest cake in the country. Yet it is also the cake of childhood memory — the smell of pandan and condensed milk from a neighbor\\'s kitchen, the cake brought to hospital visits and housewarming celebrations, the cake that Vietnamese diaspora mothers bake when homesickness becomes physical. Unlike the French génoise, which demands European butter and vanilla extract, bông lan requires only what every Vietnamese kitchen already has: eggs, flour, condensed milk, cooking oil, and a pandan leaf. This accessibility IS the recipe\\'s genius — not despite its simplicity, but because of it.

The CONDENSED MILK SUBSTITUTION — replacing granulated sugar — is the single most consequential Vietnamese innovation. Sweetened condensed milk is a pre-inverted sugar system: sucrose partially hydrolyzed to glucose + fructose during manufacturing, plus lactose from the milk itself. This TRIPLE SUGAR SYSTEM (sucrose + glucose + fructose + lactose) depresses water activity more effectively than sucrose alone (Raoult\\'s Law: aw = x_water, and more solute species = lower x_water at the same total concentration). The casein proteins, already partially Maillard-reacted during condensed milk production (giving the characteristic pale caramel color), contribute additional browning precursors that produce the golden crust at LOWER temperatures than pure sucrose systems — 150-155°C vs 160-165°C. And the 8% milkfat in condensed milk provides EMULSIFICATION without added butter: fat globules coated with casein act as plasticizers in the crumb, interrupting the starch-gluten matrix at 5-15 μm intervals, creating the melt-in-mouth quality that distinguishes bông lan from drier Western sponges.`,

  ingredientSections: [
    {
      title: 'Egg foam base — the structural engine',
      items: [
        {
          amount: 5,
          name: 'large eggs, room temperature (25-28°C)',
          note: 'Room temperature is NON-NEGOTIABLE: cold eggs (4°C) have surface tension γ ≈ 52 mN/m vs warm eggs γ ≈ 45 mN/m — the 15% reduction at 25°C allows 30-40% more air incorporation during whipping. Take eggs out 60 minutes before baking. Each egg contributes approximately 6g protein (3.6g ovalbumin + 0.8g ovotransferrin + 1.6g other) for foam stabilization.',
        },
        {
          amount: 120,
          unit: 'ml',
          name: 'sweetened condensed milk (sữa đặc Ông Thọ or similar)',
          note: 'Vietnamese condensed milk brands (Ông Thọ, Ngôi Sao Phương Nam) contain 44-48% sucrose + 8% milkfat + 28% milk solids — this ratio is calibrated for tropical baking. Western brands like Carnation or Nestlé La Lechera may have slightly different sugar:fat ratios. The pre-inverted sugars and casein Maillard precursors are what give bông lan its characteristic golden color at moderate oven temperatures.',
        },
        {
          amount: 30,
          unit: 'g',
          name: 'caster sugar (đường xay)',
          note: 'A small supplement to condensed milk sweetness. Caster sugar (crystal size 100-200 μm) dissolves faster into the egg foam than regular granulated (300-600 μm), preventing undissolved crystals from puncturing air cells during whipping. If unavailable, pulse granulated sugar in a spice grinder for 10 seconds.',
        },
      ],
    },
    {
      title: 'Dry component — minimal gluten development',
      items: [
        {
          amount: 120,
          unit: 'g',
          name: 'cake flour (bột mì số 8)',
          note: 'Cake flour has 7-9% protein (vs all-purpose 10-12%, bread flour 12-14%). Lower protein = lower gluten potential = tenderer crumb. Vietnamese "bột mì số 8" is the equivalent — protein content 7.5-8.5%. If using all-purpose flour: substitute 100g AP flour + 20g cornstarch to dilute gluten-forming proteins. MUST be sifted twice — sifting incorporates air between particles and breaks up lumps that would require additional stirring to dissolve, which would overdevelop gluten.',
        },
        {
          amount: 0.25,
          unit: 'tsp',
          name: 'fine sea salt',
          note: 'Salt strengthens the egg foam by stabilizing protein-protein electrostatic interactions at the air-water interface. Na⁺ and Cl⁻ ions screen repulsive charges between adjacent ovalbumin molecules, allowing tighter packing at the bubble surface. Without salt, foam drainage rate increases 20-30%.',
        },
      ],
    },
    {
      title: 'Fat and aromatics — flavor architecture',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'coconut oil or neutral vegetable oil',
          note: 'Coconut oil (virgin, not refined) contributes medium-chain triglycerides (MCT: C8 caprylic + C10 capric + C12 lauric = 60-70% of total fat) that melt at 24°C — just below mouth temperature — creating the cooling melt sensation unique to bông lan. If using vegetable oil: canola or rice bran oil for neutral flavor. Oil is added LAST and folded minimally — fat globules that contact the air-bubble interface will displace protein film and cause FOAM COLLAPSE (Gibbs-Marangoni destabilization).',
        },
        {
          amount: 2,
          unit: 'tsp',
          name: 'pandan extract (tinh dầu lá dứa) or 4 fresh pandan leaves, juiced',
          note: 'Pandan contains 2-acetyl-1-pyrroline (2AP) — the SAME molecule responsible for jasmine rice aroma and popcorn smell. 2AP has an extraordinarily low odor detection threshold: 0.02-0.04 ppb in air, making it one of the most potent food aromatics known. Fresh pandan juice (4 leaves blended with 2 tbsp water, strained) contains 200-500 ppb 2AP vs commercial extract 50-150 ppb. Fresh always superior, but extract acceptable for convenience.',
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'vanilla extract',
          note: 'Vanillin (4-hydroxy-3-methoxybenzaldehyde) activates OR1D2 olfactory receptor. When combined with pandan 2AP (which activates OR1A1 and OR2W1), the two aromatics produce CROSS-MODAL ENHANCEMENT: the brain interprets the combined signal as 2-3× more intense than either alone, a phenomenon called super-additive olfactory integration. This is why bông lan smells more intensely "sweet" than its sugar content alone would predict.',
        },
      ],
    },
    {
      title: 'Optional finishing — Saigon street style',
      items: [
        {
          amount: 2,
          unit: 'tbsp',
          name: 'desiccated coconut (dừa bào khô), lightly toasted',
          note: 'Toast at 150°C for 5-7 minutes until pale gold. Toasting drives Maillard reactions between coconut proteins (2-3%) and residual sugars, generating 2-acetylpyrazine (nutty, roasted) and 4-hydroxy-2,5-dimethyl-3(2H)-furanone (HDMF, caramel-like). These compounds are absent in raw desiccated coconut. The textural contrast of toasted coconut shards (fracture stress 0.5-1.0 MPa) against the soft crumb (fracture stress 0.01-0.05 MPa) creates a 20-50× hardness differential that amplifies the perception of cake softness through contrast.',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'white sesame seeds (mè trắng), toasted',
          note: 'Sesame lipid bodies contain sesamin and sesamolin — lignans that are potent antioxidants preventing lipid oxidation in the cake during storage. Functional as well as decorative.',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Build the egg foam — 8-12 minutes to ribbon stage (ruban)',
      description: `Combine the 5 room-temperature eggs, condensed milk, caster sugar, salt, and vanilla extract in the bowl of a stand mixer fitted with the whisk attachment (or a large bowl with a hand mixer). Begin on low speed (speed 2) for 30 seconds to break the yolks and incorporate condensed milk without splashing, then increase to high speed (speed 8-10) and whip continuously for 8-12 minutes.

The foam will progress through four visible stages: (1) FROTHY — large bubbles, pale yellow, 0-2 minutes; (2) SOFT FOAM — smaller bubbles, lighter color, doubles in volume, 2-5 minutes; (3) STIFF FOAM — fine uniform bubbles, nearly white, triples in volume, 5-8 minutes; (4) RIBBON STAGE (ruban) — the batter falls from the lifted whisk in a thick, continuous ribbon that holds its shape on the surface for 8-10 seconds before slowly dissolving. This final stage indicates that the protein films around each air cell have reached maximum surface viscoelasticity (E\\'_d ≈ 40-50 mN/m) and the foam can structurally support the weight of flour and oil without collapse.

Add pandan extract during the last 30 seconds of whipping — late addition minimizes volatile loss from mechanical agitation.`,
      tip: `THE FOAM SCIENCE: Why exactly 8-12 minutes? Ovalbumin (the primary foam protein, 54% of egg white protein) has a denaturation temperature T_d ≈ 84°C but can also undergo MECHANICAL DENATURATION — the shear forces at the air-liquid interface (shear rate γ̇ ≈ 1000-5000 s⁻¹ at whisk tip speed) unfold the protein\\'s tertiary structure, exposing buried hydrophobic residues (Trp, Phe, Ile, Leu) that anchor into the air phase. This mechanical unfolding follows first-order kinetics: fraction_unfolded = 1 - exp(-k_mech × t), with k_mech ≈ 0.15-0.30 min⁻¹ at high speed. At 8 minutes: ~80% unfolded. At 12 minutes: ~95% unfolded. Beyond 15 minutes: OVER-DENATURATION — proteins aggregate into visible clumps, surface films become rigid and brittle rather than elastic, and the foam collapses under its own weight during baking. The Vietnamese term "đánh bông" (beat until fluffy) encodes the endpoint precisely: bông = cotton/flower = the exact texture of properly whipped whole-egg foam.`,
    },
    {
      title: 'Fold the sifted flour — maximum 45 strokes, 60 seconds',
      description: `Sift the cake flour through a fine-mesh sieve held 30 cm above the foam bowl — the height matters because it allows flour particles to separate and fall individually rather than in clumps, distributing more evenly across the foam surface. Add the flour in THREE ADDITIONS (40g each), folding after each with a large silicone spatula.

THE FOLDING TECHNIQUE: Cut straight down through the center of the batter with the spatula edge, sweep along the bottom of the bowl, then bring the spatula up along the far side, turning the batter OVER the flour. Rotate the bowl 90° after each stroke. Count your strokes: 12-15 per addition, no more than 45 total. The batter will lose approximately 15-20% of its volume during folding — this is normal and expected. If it loses more than 30%, the folding was too vigorous or too many strokes.

VISUAL CUE: When properly folded, no white flour streaks remain, but the batter retains its pale yellow color and flows in slow, thick ribbons. The surface should look glossy and smooth — matte patches indicate unincorporated flour pockets.`,
      tip: `GLUTEN PERCOLATION PHYSICS: Each folding stroke hydrates glutenin and gliadin molecules, allowing them to form disulfide crosslinks. The network grows as a PERCOLATION PROCESS — isolated protein clusters gradually connect into a spanning network. Below the gel point (p < p_c ≈ 0.5 for the flour concentration in bông lan), the batter flows freely and air cells remain mobile. Above p_c, the network becomes rigid — viscosity diverges as η ~ (p_c - p)^(-1.3) — trapping air cells in fixed positions but also making the crumb tough. At 45 strokes in 60 seconds, p ≈ 0.3-0.4 — safely below p_c. At 80 strokes or 2+ minutes of folding, p ≈ 0.6-0.7 — above p_c — and the cake becomes dense, chewy, and refuses to rise. There is NO RECOVERY from overdevelopment: once disulfide bonds form, they do not break at baking temperatures. The grandmother\\'s warning "nhẹ tay" (light hand) IS the percolation threshold expressed as a two-word instruction.`,
    },
    {
      title: 'Incorporate oil and pour — the final 15-second window',
      description: `Drizzle the coconut oil (warmed to liquid state, 28-30°C) down the side of the bowl — NEVER into the center of the foam. Using the same folding technique, incorporate in 8-10 strokes maximum. The batter should look uniformly glossy with no oil pools on the surface.

IMMEDIATELY pour the batter into the prepared mold: an ungreased 20cm round cake pan with removable bottom (for traditional round bông lan) or individual aluminum cups (for street-vendor style). Fill to 70% capacity — the batter will rise to 90-95% during baking. If using cups, fill with a ladle in one smooth pour per cup; multiple pours create visible layer lines in the finished cake.

Do not delay: from the moment oil is folded in, the foam begins to DESTABILIZE. Fat globules (2-10 μm diameter) migrate toward air-cell interfaces at a rate governed by Stokes\\' law: v = 2r²(ρ_liquid - ρ_fat)g / 9η. In the high-viscosity batter (η ≈ 3000-5000 mPa·s), this migration is slow — approximately 0.1-0.5 μm/min — giving you a 5-8 minute working window. But every minute of delay costs 2-3% of the final rise.`,
      tip: `WHY UNGREASED PAN: Unlike most Western cakes, bông lan must CLING TO THE PAN WALLS during baking. The foam expands upward by thermal expansion (Charles\\'s Law: V₂/V₁ = T₂/T₁ ≈ 453/298 ≈ 1.52× for entrapped air) plus steam generation (each gram of water produces 1,700 mL of steam at 100°C and atmospheric pressure). If the batter slides on greased walls, the expanding foam pushes DOWN (path of least resistance) rather than UP, resulting in a dense, flat cake. The raw batter grips the ungreased aluminum through a combination of protein adhesion (surface energy γ_aluminum ≈ 840 mJ/m² vs γ_batter ≈ 40 mJ/m² → strong wetting, contact angle θ < 30°) and starch-paste bonding once the adjacent layer gelatinizes at 60-70°C. After cooling, the set cake releases with a palette knife because the adhesion is now starch-aluminum (weaker) rather than protein-aluminum (stronger).`,
    },
    {
      title: 'Bake at 170°C — thermal gradient engineering for 30-35 minutes',
      description: `Preheat the oven to 170°C (338°F) with the rack in the lower third — positioning below center ensures bottom heat reaches the batter first, setting the base structure before the top crust forms (which would trap steam and cause an eruption). Place the filled pan on a baking sheet for even heat distribution.

Bake for 30-35 minutes WITHOUT OPENING THE OVEN DOOR for the first 25 minutes. The cake rises rapidly between minutes 8-18 as internal temperature crosses 60°C (starch gelatinization begins, creating a semi-rigid matrix that locks expanding air cells in place) and reaches maximum height around minute 22-25 when the crumb temperature stabilizes at 98-100°C (all free water is converting to steam at this temperature — the latent heat of vaporization ΔH_vap = 2,260 kJ/kg acts as a thermal buffer preventing the interior from exceeding 100°C while surface reaches 160-180°C).

DONENESS INDICATORS: (1) A bamboo skewer inserted into the center comes out clean or with a few moist crumbs — wet batter means underdone; (2) The surface springs back when gently pressed — if an indent remains, bake 3-5 more minutes; (3) The cake has pulled 1-2mm away from the pan sides; (4) The top is deep golden-amber, not pale yellow (pale = underdone = will collapse on cooling).`,
      tip: `MAILLARD-CARAMELIZATION DUAL BROWNING: The golden crust of bông lan is produced by TWO CONCURRENT REACTIONS, each with distinct chemistry. MAILLARD REACTION (>140°C): The ε-amino group of lysine residues in egg protein attacks the carbonyl group of reducing sugars (glucose, fructose from condensed milk hydrolysis), forming Amadori compounds → deoxyosones → melanoidins (brown polymers, MW 10,000-100,000 Da). Activation energy E_a ≈ 100-130 kJ/mol, meaning rate DOUBLES with every 10°C increase. CARAMELIZATION (>160°C): Sucrose from condensed milk undergoes thermal decomposition: sucrose → glucose + fructose → 1,2-enediols → 3-deoxyosones → 5-HMF → caramelen → caramelin. These two pathways produce DIFFERENT flavor compounds: Maillard generates pyrazines (nutty, roasted) and furanones (caramel); caramelization generates diacetyl (butterscotch) and maltol (cotton candy). The 170°C oven temperature is calibrated to activate BOTH pathways at the surface while the interior, buffered at 98-100°C by steam, experiences NEITHER — hence the zero browning of the crumb. The thermal gradient at the crust-crumb boundary is extraordinarily steep: ΔT/Δx ≈ 50-80°C/mm.`,
    },
    {
      title: 'Cool inverted — gravity vs structural shrinkage for 30 minutes',
      description: `Remove the pan from the oven and IMMEDIATELY INVERT IT onto a wire rack (or balance it upside-down on the necks of three bottles if using a tube pan). Cool completely inverted for at least 30 minutes — or until the pan is no longer warm to the touch.

This step is CRITICAL and non-negotiable. Here is what happens inside the cake during the first 10 minutes out of the oven: the internal temperature drops from 98°C toward 60°C, causing (1) steam to condense back into liquid water, reducing internal pressure; (2) air cells to contract as gas cools (Charles\\'s Law again, but in reverse: V drops as T drops); (3) the starch-protein matrix, now gelled but still warm and somewhat plastic, to yield under gravity. If the cake cools RIGHT-SIDE UP, gravity pulls the contracting crumb DOWNWARD, compressing air cells and producing a dense, sunken center. If inverted, gravity pulls the crumb AWAY from the bottom (now on top), keeping air cells stretched open and maintaining the cloud-like texture.

Once fully cool, run a thin palette knife or offset spatula around the edges to release the cake. The bottom releases by pushing up the removable base.`,
      tip: `THE STARCH RETROGRADATION WINDOW: Between 60-25°C, amylose chains (20-25% of wheat starch) that leached into the aqueous phase during baking BEGIN TO RETROGRADE — re-associating into double helices and then into B-type crystallites. This retrogradation is what gives the cooled cake its structural integrity (hot cake is fragile because the starch is still an amorphous gel). The rate follows Avrami kinetics: θ(t) = 1 - exp(-k·tⁿ), with k ≈ 0.05-0.10 hr⁻¹ at 25°C and n ≈ 1.0-1.5 for amylose in a high-sugar environment. After 30 minutes of cooling (θ ≈ 0.15-0.25), the network is rigid enough to handle but soft enough to slice cleanly. After 4-6 hours (θ ≈ 0.50-0.70), the cake is at peak texture — firm enough to hold its shape, tender enough to compress to 50% thickness and spring back. After 24-48 hours, retrogradation progresses further (θ > 0.80) and the cake becomes detectably firmer — the Vietnamese term "bánh bị lại" (cake has tightened) describes exactly this overcooled retrogradation. The condensed milk hygroscopic matrix slows this progression by 2-3× compared to granulated-sugar cakes, which is why bông lan stays softer longer.`,
    },
    {
      title: 'Slice, garnish, and serve — the Vietnamese teatime ritual',
      description: `Using a long serrated knife, cut the cake with a gentle sawing motion — pressing straight down crushes the foam cells, while sawing severs them cleanly. Cut into 8 wedges (for round cake) or serve individual cups whole.

For Saigon street-vendor style: top each slice with a sprinkle of toasted desiccated coconut and a pinch of toasted sesame seeds. The traditional accompaniment is Vietnamese drip coffee (cà phê phin) or hot jasmine tea — the bitter tannins in both beverages create a COMPLEMENTARY TASTE CONTRAST with the sweet, milky cake through peripheral gustatory inhibition (bitter TAS2R receptor activation partially suppresses sweet T1R2/T1R3 signaling in the same papilla, making each sip of coffee taste more bitter-clean and each bite of cake taste more purely sweet).

HOW TO EAT: Compress the cake slightly between thumb and forefinger before biting — this pre-compression expels some entrapped air, releasing pandan and vanilla volatiles directly toward the nose (orthonasal delivery) BEFORE the bite delivers retronasal aroma. The combination of ortho + retronasal creates a perceived aroma intensity 40-60% greater than either pathway alone. The first bite should be from the golden-brown crust edge — the Maillard compounds here provide a savory-sweet counterpoint to the pure sweetness of the interior crumb.`,
      tip: `FRENCH HERITAGE, VIETNAMESE SOUL: The génoise that arrived in Saigon circa 1860s with French patissiers was a butter-enriched, vanilla-scented cake served with crème chantilly and fruit. The Vietnamese transformation removed what was unavailable (European butter, vanilla pods, cream) and substituted what was abundant (coconut oil, pandan, condensed milk). But the adaptation went deeper than ingredient substitution: the TECHNIQUE changed. French génoise separates eggs for maximum foam volume; Vietnamese bông lan keeps them whole for simplicity and a different texture. French génoise adds melted butter (10-15% of batter weight); Vietnamese bông lan uses oil (5-8%) for a moister, less crumbly crumb. French génoise is served the day it\\'s made; Vietnamese bông lan, stabilized by condensed milk\\'s humectant properties, improves on day two. The cake that emerged is as Vietnamese as phở — foreign in origin, utterly local in execution, and impossible to imagine the culture without it.`,
    },
  ],
};

export default function BongLanPage() {
  return <RecipeLayout recipe={recipe} />;
}
