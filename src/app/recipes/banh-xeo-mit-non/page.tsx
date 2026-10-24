'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Bánh Xèo Mít Non — Young Jackfruit Sizzling Pancake
//  An Giang #8
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. YOUNG JACKFRUIT HETEROPOLYSACCHARIDE MATRIX —
//     unripe Artocarpus heterophyllus cell wall:
//     pectin-hemicellulose-cellulose IPN creates
//     meat-analog fibrous pull texture at 0% protein
//  2. TURMERIC BATTER LEIDENFROST SIZZLE —
//     thin batter film on >200°C pan, instantaneous
//     Leidenfrost vapor cushion collapse → direct
//     contact → "xèo" acoustic signature 2-5 kHz
//  3. COCONUT MILK FAT LAMINATION —
//     lauric acid crystallization at batter-pan interface,
//     solid fat index gradient creates crisp outer +
//     custardy inner bilayer architecture
//  4. MUNG BEAN COTYLEDON STARCH GRANULE
//     GELATINIZATION — split mung in batter, starch
//     Tgel 65-72°C, incomplete gelatinization preserves
//     granular identity = visible yellow studs
//  5. RICE FLOUR AMYLOSE FILM FORMATION —
//     high-amylose (25-30%) indica rice, linear chains
//     align at air-batter interface during evaporation,
//     form continuous glassy film → lacework crisp edge
//  6. BUDDHIST VEGETARIAN (CHAY) TERROIR —
//     An Giang Bửu Sơn Kỳ Hương + Hòa Hảo Buddhist
//     vegetarian tradition, jackfruit as ritual
//     meat substitute, Bà Chúa Xứ temple cuisine
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'banh-xeo-mit-non',
  title: 'Bánh Xèo Mít Non (Young Jackfruit Sizzling Pancake)',
  subtitle: 'Young jackfruit pectin-hemicellulose-cellulose interpenetrating network creates meat-analog fibrous pull at 0% protein, turmeric batter undergoes Leidenfrost collapse on >200°C steel generating the diagnostic 2-5 kHz "xèo" sizzle, coconut lauric acid crystallization builds a solid fat index gradient for crisp-outer/custardy-inner bilayer, and high-amylose indica rice flour chains align at the evaporating interface into a continuous glassy lacework edge.',
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/banh-xeo-mit-non.jpg',

  intro: `Bánh xèo mít non is An Giang's VEGETARIAN MASTERPIECE — a sizzling pancake filled with young jackfruit that so convincingly mimics shredded pork that even omnivores do a double-take. The dish exists at the intersection of two powerful forces: the PHYSICAL CHEMISTRY of bánh xèo's batter-on-hot-metal dynamics, and the BOTANICAL ARCHITECTURE of young jackfruit's cell wall that creates a meat-analog texture through pure polysaccharide engineering — no protein, no processing, no extrusion, just a fruit that evolution designed to feel like pulled pork.

YOUNG JACKFRUIT (mít non) — harvested 2-3 months before ripening, when the fruit is still dense, starchy, and neutral-flavored — possesses one of the most remarkable TEXTURAL ARCHITECTURES in the plant kingdom. The flesh of unripe Artocarpus heterophyllus is composed of an INTERPENETRATING POLYMER NETWORK (IPN) of three polysaccharide systems: PECTIN chains (homogalacturonan and rhamnogalacturonan backbones with arabinose and galactose side chains), HEMICELLULOSE (primarily xyloglucan that hydrogen-bonds to cellulose surfaces), and CELLULOSE microfibrils (crystalline β-1,4-glucan chains bundled into 3-5 nm elementary fibrils, then into 20-30 nm macrofibrils). These three networks are physically entangled but not covalently bonded — they can SLIDE past each other under shear stress, producing the characteristic "PULL" texture that mimics muscle fiber separation. When you fork-shred cooked young jackfruit, the cellulose fibrils pull apart along their longitudinal axis exactly like pulling apart slow-cooked pork shoulder — the same visual appearance, the same tactile resistance, the same strand diameter (0.5-2 mm). This is not coincidence but CONVERGENT DESIGN: both muscle fibers and cellulose fibrils are longitudinally aligned structural elements that resist axial separation, and the human mouth interprets both as "meaty." The key difference is that jackfruit achieves this at ZERO PERCENT PROTEIN — the entire texture is built from carbohydrate polymers.

The BATTER is where the physics gets spectacular. Bánh xèo batter is a thin suspension of RICE FLOUR, TURMERIC, and COCONUT MILK in water — approximately 15-20% solids, much thinner than Western pancake batter. When this batter is poured onto a carbon steel or cast iron pan preheated above 200°C, it undergoes a series of rapid phase transitions that produce the dish's signature ACOUSTIC EVENT — the "XÈO" sizzle that gives the dish its name (xèo is an onomatopoeia for the sizzling sound).

The physics of the sizzle involves the LEIDENFROST EFFECT and its collapse. When a liquid contacts a surface above its Leidenfrost point (approximately 190-220°C for water-based batters), a thin vapor cushion forms between the liquid and the metal, preventing direct contact. But bánh xèo batter is poured as a THIN FILM (< 2 mm), and the rapid evaporation of the water component causes the vapor cushion to COLLAPSE within milliseconds. The batter then makes DIRECT CONTACT with the superheated metal, producing explosive nucleate boiling — thousands of tiny steam bubbles form simultaneously at the metal-batter interface, each bubble bursting with a characteristic pop in the 2-5 kHz frequency range. The superposition of thousands of these micro-pops produces the continuous, broadband "xèo" sizzle — a sound so distinctive that Vietnamese diners judge a bánh xèo stall by its acoustic output before even seeing the food. A quiet sizzle means the pan wasn't hot enough; a violent, sustained xèo means optimal Leidenfrost collapse and therefore optimal crispness.

COCONUT MILK in the batter serves a dual structural function through its LAURIC ACID crystallization behavior. Coconut fat is approximately 47-50% lauric acid (C12:0), a medium-chain saturated fatty acid with a melting point of 44°C. When the batter hits the hot pan, the coconut fat immediately melts and migrates to the PAN-BATTER INTERFACE (the lowest point, driven by gravity and the fat's lower density). As the pancake cooks and the bottom surface temperature drops below 44°C after removal from heat, the lauric acid RECRYSTALLIZES at the bottom surface, forming a dense layer of solid fat crystals. This creates a SOLID FAT INDEX (SFI) GRADIENT across the pancake's thickness: high SFI at the bottom (crispy, fat-sealed, water-free) transitioning to low SFI at the top (moist, custardy, steam-softened). The result is the bánh xèo's defining BILAYER ARCHITECTURE — a paper-thin, shattering-crisp bottom and a soft, yielding top surface. This gradient is why bánh xèo must be folded and eaten immediately: within 3-5 minutes at room temperature, the SFI gradient equilibrates as fat migrates upward, and the crisp bottom softens.

The RICE FLOUR component undergoes its own transformation at the pancake's EDGE — the thin, lacy border that extends beyond the filling. Rice flour from indica rice varieties (the standard in Southern Vietnam) contains 25-30% AMYLOSE — the linear starch polymer. When the thin batter film at the edge dehydrates rapidly on the hot pan, these linear amylose chains ALIGN at the air-batter interface (driven by the receding water front) and form a continuous, oriented GLASSY FILM. This film has the same mechanical properties as a thin glass sheet — it transmits light (the edge is semi-transparent), fractures cleanly with an audible snap, and has essentially zero plasticity. The lacework pattern of the edge arises because steam bubbles punch holes through the film as it solidifies, creating the characteristic web-like, honeycomb appearance. This AMYLOSE GLASS FILM is what distinguishes great bánh xèo from mediocre: a properly made edge should be transparent, lacey, and shatter between the teeth with a clean snap — the sound of amylose glass fracturing.

MUNG BEANS (đậu xanh) in the filling and batter provide visible YELLOW STUDS — split mung bean cotyledon halves that are par-cooked to partial starch gelatinization. Mung bean starch gelatinizes at 65-72°C, and when the beans are steamed to just this temperature range, the starch granules SWELL but do not fully burst — they retain their individual GRANULAR IDENTITY within the softened cotyledon. This produces a texture that is soft but distinctly GRAINY — each granule is a tiny sphere of partially hydrated starch that pops between the teeth, providing textural punctuation against the smooth batter and fibrous jackfruit. The yellow color comes from the mung bean's natural FLAVONOID pigments (vitexin and isovitexin), which are heat-stable and intensified by the turmeric in the batter — the two yellows are chemically different but visually complementary.

This dish's existence is inseparable from An Giang's BUDDHIST VEGETARIAN (CHAY) TRADITION. An Giang province is the spiritual heartland of several Vietnamese Buddhist reform movements — BỬU SƠN KỲ HƯƠNG (founded 1849) and HÒA HẢO BUDDHISM (founded 1939) — both of which practice periodic or permanent vegetarianism. The province also hosts the BÀ CHÚA XỨ temple at Sam Mountain, one of Vietnam's most important pilgrimage sites, where vegetarian cooking has been refined for centuries to serve millions of annual pilgrims. In this CHAY tradition, young jackfruit is the SUPREME MEAT SUBSTITUTE — its fibrous texture, neutral flavor, and ability to absorb sauces make it the default replacement for pork in virtually every Mekong Delta dish. Bánh xèo mít non is the most celebrated expression of this substitution: a dish where the jackfruit's polysaccharide IPN architecture so perfectly replicates the experience of eating shredded pork that the word "substitute" feels inadequate — it is a PARALLEL CONSTRUCTION that achieves the same sensory endpoints through entirely different molecular machinery.`,

  ingredientSections: [
    {
      title: 'Batter — Leidenfrost-Active Turmeric Suspension',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'rice flour (bột gạo), indica variety',
          note: 'High-amylose (25-30%) indica rice flour is essential. The LINEAR amylose chains align during edge dehydration to form the glassy, lacework-crisp border. Low-amylose (japonica) flour would produce a soft, flexible edge — wrong texture entirely.',
        },
        {
          amount: 50,
          unit: 'g',
          name: 'tapioca starch (bột năng)',
          note: 'Adds elasticity and translucency to counterbalance the brittle amylose glass.',
        },
        {
          amount: 200,
          unit: 'ml',
          name: 'coconut milk',
          note: 'Source of LAURIC ACID (C12:0, mp 44°C) that creates the SFI gradient: crisp bottom (recrystallized fat) vs custardy top (liquid fat).',
        },
        {
          amount: 350,
          unit: 'ml',
          name: 'water',
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'ground turmeric (bột nghệ)',
          note: 'Color AND flavor. Curcumin provides the golden-yellow hue that marks bánh xèo as a Southern Vietnamese dish.',
        },
        {
          amount: 2,
          unit: 'unit',
          name: 'scallions, thinly sliced and added to batter',
        },
        {
          amount: 0.5,
          unit: 'tsp',
          name: 'salt',
        },
      ],
    },
    {
      title: 'Filling — Jackfruit Meat-Analog Core',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'young jackfruit (mít non), boiled and shredded',
          note: 'The STAR ingredient. Unripe Artocarpus heterophyllus, 2-3 months pre-ripening. The pectin-hemicellulose-cellulose IPN creates meat-analog fibrous pull texture. Use canned young jackfruit in brine (NOT in syrup) if fresh is unavailable — drain, rinse, and shred.',
        },
        {
          amount: 100,
          unit: 'g',
          name: 'mung bean sprouts (giá đỗ)',
        },
        {
          amount: 100,
          unit: 'g',
          name: 'split mung beans (đậu xanh), soaked 2 hours and steamed 15 minutes',
          note: 'Par-cook to partial gelatinization (65-72°C). Starch granules swell but retain individual identity — each bean half is a soft, grainy yellow stud.',
        },
        {
          amount: 1,
          unit: 'unit',
          name: 'onion, thinly sliced',
        },
        {
          amount: 50,
          unit: 'g',
          name: 'mushrooms (nấm rơm or nấm mèo), sliced',
          note: 'Additional umami and meaty texture for the vegetarian filling.',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'vegetable oil',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'soy sauce or mushroom seasoning',
        },
      ],
    },
    {
      title: 'Wrapping & Dipping',
      items: [
        {
          amount: 1,
          unit: 'head',
          name: 'lettuce (xà lách), leaves separated',
        },
        {
          amount: 200,
          unit: 'g',
          name: 'mixed fresh herbs: perilla, Vietnamese mint, cilantro, Thai basil',
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'soy sauce or vegetarian nước chấm',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'lime juice',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'sugar',
        },
        {
          amount: 1,
          unit: 'unit',
          name: 'fresh chili, sliced',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Prepare batter & filling — molecular mise en place, 20 minutes',
      description: `BATTER: Whisk rice flour, tapioca starch, turmeric, and salt in a large bowl. Add coconut milk and water gradually, whisking to a THIN, LUMP-FREE suspension — target consistency of light cream (approximately 15-18% solids). The batter should coat a spoon thinly and drip off in a steady stream, not a thick ribbon. Stir in sliced scallions. REST the batter 15-20 minutes — this hydration period allows the rice flour starch granules to absorb water fully, ensuring even gelatinization during cooking.

JACKFRUIT: If using fresh young jackfruit, boil whole pieces in salted water for 20-25 minutes until fork-tender. Remove the core and seeds. SHRED the flesh using two forks, pulling along the grain — the cellulose fibrils separate into long, thin strands that closely resemble pulled pork. If using canned jackfruit in brine, drain, rinse thoroughly, and shred the same way.

MUNG BEANS: Soak split mung beans for 2 hours, then steam for 15 minutes. The beans should be SOFT but still holding their shape — individual cotyledon halves visible as distinct yellow studs, not collapsed into a paste.

FILLING: Heat oil in a wok. Sauté sliced onion until translucent. Add shredded jackfruit and sliced mushrooms. Season with soy sauce or mushroom seasoning. Stir-fry 3-4 minutes until the jackfruit absorbs the seasoning and develops light browning. Set aside.`,
      tip: `YOUNG JACKFRUIT'S MEAT-ANALOG ARCHITECTURE: The reason young jackfruit so convincingly mimics shredded meat lies in its INTERPENETRATING POLYMER NETWORK (IPN) — three polysaccharide systems physically entangled but not covalently bonded. CELLULOSE microfibrils (crystalline β-1,4-glucan, elastic modulus 130-150 GPa along the chain axis) provide the TENSILE STRENGTH — the resistance you feel when pulling fibers apart. HEMICELLULOSE (xyloglucan) acts as a CROSS-LINKING TETHER between cellulose fibrils, transmitting stress laterally — this prevents the fibers from separating too easily and creates the characteristic "resistance-then-give" sensation of tearing muscle. PECTIN (homogalacturonan gel) fills the spaces between fibers as a HYDRATED MATRIX that provides lubrication during shearing — mimicking the role of collagen and fat in meat. When you fork-shred young jackfruit, the pectin matrix yields first (low shear strength, approximately 1-5 kPa), the hemicellulose tethers stretch and break (medium shear, 10-50 kPa), and the cellulose fibrils finally separate along their longitudinal axis (high axial strength but low lateral cohesion). This THREE-STAGE FAILURE SEQUENCE is biomechanically identical to the sequence of tearing slow-cooked pork: fat/gelatin yields → connective tissue tears → muscle fibers separate. Same physics, different polymers.`,
    },
    {
      title: 'Cook the pancakes — Leidenfrost dynamics and SFI gradient, 25 minutes',
      description: `PREHEAT a well-seasoned carbon steel or cast iron pan (26-28 cm diameter) over HIGH HEAT until a drop of water DANCES and evaporates within 1 second — this indicates the pan surface has reached approximately 200-230°C, above the Leidenfrost point for the batter.

ADD 1 tablespoon of vegetable oil. Swirl to coat the pan surface.

STIR the batter immediately before each pour — the rice flour settles rapidly due to its high density (1.5 g/cm³ vs. water's 1.0 g/cm³).

POUR approximately 80-100 ml of batter into the center of the pan. IMMEDIATELY TILT AND SWIRL the pan to spread the batter into a thin, even circle that covers the entire pan surface and extends to the edges. The batter should be PAPER-THIN — if you can see the pan surface through the batter in spots, that's correct.

LISTEN for the "XÈO" — the characteristic sizzle that gives the dish its name. This sound is produced by LEIDENFROST COLLAPSE: the thin batter film's vapor cushion collapses within milliseconds, producing explosive nucleate boiling at the pan-batter interface. The sound should be a sustained, continuous sizzle in the 2-5 kHz range — if it's a dull hiss, the pan wasn't hot enough; if it's a violent spatter, the pan is too hot.

IMMEDIATELY ADD the filling: a strip of sautéed jackfruit and mushroom down one half of the pancake, a scatter of steamed mung beans, and a handful of raw bean sprouts on top.

COVER the pan for 1-2 minutes. The trapped steam gelatinizes the top surface of the batter (creating the soft, custardy upper layer) while the bottom surface continues to fry in coconut fat (building the crispy SFI-gradient bottom).

UNCOVER and cook uncovered for another 2-3 minutes until the EDGES become visibly LACEY and TRANSLUCENT — this is the amylose glass film forming as the thin edge dehydrates. The edge should be semi-transparent, golden-brown, and when you tap it with a spatula, it should sound like tapping a thin glass sheet.

FOLD the pancake in half using a spatula. The crispy bottom cracks slightly at the fold — this is expected. The folded pancake should have an AUDIBLE CRUNCH when pressed lightly.

SLIDE onto a plate. The bottom should be uniformly GOLDEN-BROWN and SHATTERING-CRISP. The top should be SOFT and slightly moist from steam.

REPEAT with remaining batter and filling — stir batter before each pour.`,
      tip: `THE ACOUSTIC SIGNATURE OF PERFECTION — READING THE "XÈO": Experienced bánh xèo cooks in An Giang markets don't look at the pancake to judge doneness — they LISTEN. The sound encodes the thermal physics: (1) INITIAL POUR — a sharp, explosive "XÈO!" (2-5 kHz broadband noise from simultaneous nucleate boiling of thousands of micro-droplets) lasting 1-2 seconds. This confirms the pan is above Leidenfrost temperature. (2) COOKING PHASE — a sustained, lower-pitched sizzle (500-2000 Hz, from continued boiling at the pan-batter interface as water evaporates). The pitch gradually rises as the water content decreases and the remaining water boils more violently. (3) CRISPING PHASE — the sizzle transitions to a crackle (irregular, sharp pops at 1-3 kHz as the last moisture pockets burst through the solidifying amylose film). When the crackle becomes intermittent (one pop every 1-2 seconds), the bottom is done — all free water has been driven off and the fat has fully crystallized. (4) SILENCE — the moment all sizzling stops, the fat at the pan-batter interface has exhausted its ability to boil residual moisture. This is the moment to fold and serve — any longer and the bottom begins to burn.`,
    },
    {
      title: 'Serve — the lettuce-wrap eating ritual, 5 minutes',
      description: `ARRANGE each folded bánh xèo on individual plates or a shared platter with the CRISPY SIDE UP — presentation matters, and the golden-brown, lacey surface is the visual payoff.

PREPARE the dipping sauce: combine soy sauce (or vegetarian nước chấm), lime juice, sugar, and sliced chili. Stir until sugar dissolves. The sauce should be LIGHT and TANGY — it needs to cut through the coconut fat richness without overwhelming the delicate jackfruit flavor.

PRESENT lettuce leaves and fresh herbs alongside the pancake.

TO EAT: Tear or cut a piece of bánh xèo (the crispy bottom should SHATTER audibly — the amylose glass fracturing). Place the piece on a lettuce leaf. Add fresh herbs — perilla (tía tô), Vietnamese mint (rau răm), cilantro, Thai basil. WRAP the lettuce around the bánh xèo piece and herbs. DIP in the sauce. Eat in one or two bites.

The EATING SEQUENCE delivers: (1) CRUNCH from the amylose glass bottom shattering between teeth, (2) CUSTARD softness from the steam-set top layer, (3) FIBROUS PULL from the jackfruit's cellulose IPN mimicking shredded pork, (4) GRAININESS from the mung bean starch granule studs, (5) RAW CRUNCH from bean sprouts, (6) HERBAL BRIGHTNESS from the fresh herb wrap, (7) COOL CRISPNESS from the lettuce, (8) SOUR-SWEET-SALTY tang from the dipping sauce. Eight textural and flavor dimensions in a single bite — the full SIX-TEXTURE SPECTRUM of Vietnamese wrapping cuisine (crunchy, crispy, chewy, soft, fibrous, raw) plus the two dressing dimensions (sour, sweet).

TIMING IS CRITICAL: serve and eat within 3-5 minutes of cooking. The lauric acid SFI gradient that creates the crisp-custardy bilayer equilibrates rapidly at room temperature — the coconut fat migrates from the crystallized bottom to the soft top, softening the bottom and moistening the top until both layers converge to a uniformly mediocre texture. A 10-minute-old bánh xèo is a fundamentally different dish from a 1-minute-old one.`,
      tip: `AN GIANG'S BUDDHIST VEGETARIAN (CHAY) TRADITION: Bánh xèo mít non exists because of An Giang's unique SPIRITUAL GEOGRAPHY. The province sits at the intersection of Vietnamese Mahayana Buddhism, Khmer Theravada Buddhism, and two indigenous Vietnamese Buddhist movements — Bửu Sơn Kỳ Hương (founded 1849 by Đoàn Minh Huyên) and Hòa Hảo Buddhism (founded 1939 by Huỳnh Phú Sổ). All four traditions practice periodic or permanent vegetarianism, creating an enormous DEMAND for sophisticated vegetarian cooking that goes far beyond simple vegetable dishes. The Bà Chúa Xứ temple at Sam Mountain (Núi Sam, Châu Đốc) — one of Vietnam's most-visited religious sites with 3-4 million pilgrims annually — has been a laboratory for vegetarian cuisine for over a century, with temple kitchens developing elaborate techniques for transforming plant materials into meat-analog dishes. Young jackfruit emerged as the SUPREME MEAT SUBSTITUTE because its cellulose IPN architecture provides the fibrous "pull" that no other plant material achieves with such minimal processing. In An Giang temple cuisine, mít non replaces pork in virtually every traditional dish — thịt kho (braised), chả (sausage), xíu mại (meatballs), and of course bánh xèo. The vegetarian version is not a lesser version — it is a PARALLEL CULINARY TRADITION with its own centuries of refinement, its own flavor logic, and its own aesthetic. When An Giang locals say "ăn chay" (eat vegetarian), they are describing a cuisine as complex and satisfying as any omnivorous tradition.`,
    },
  ],
};

export default function BanhXeoMitNonPage() {
  return <RecipeLayout recipe={recipe} />;
}
