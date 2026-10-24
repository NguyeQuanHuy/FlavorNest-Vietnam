'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'vit-quay-lang-son',
  title: `Vịt Quay Lạng Sơn — Roasted Duck with Mắc Mật Leaves`,
  subtitle: 'Whole duck inflated through the neck to separate skin from flesh, glazed with honey-vinegar, and roasted over charcoal with mắc mật leaves stuffed inside — where Cantonese air-drying meets Tày aromatic engineering in the same bird.',
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '8 hrs',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/vit-quay-lang-son.jpg',
  intro: `Vịt quay Lạng Sơn is the product of two civilizations colliding in one kitchen. The Cantonese technique of inflating a duck — pumping air between the skin and the flesh through a small incision at the neck to create a uniform air gap — arrived in Lạng Sơn via the Hakka and Cantonese Chinese communities who settled the border region over centuries. The Tày contribution was the mắc mật leaf — the same Clausena indica that defines lợn quay, now repurposed for a bird with fundamentally different fat architecture. The merger produced a duck that is neither Cantonese roast duck (which relies on maltose glaze and five-spice) nor traditional Vietnamese vịt quay (which varies by region with no single canonical method), but something unique to the 154-kilometer corridor between Lạng Sơn city and the Friendship Pass at the Chinese border. The inflation technique creates the lacquered, shatter-crispy skin; the mắc mật creates the perfumed interior. Neither technique alone produces what the combination achieves.

The inflation step is the most counterintuitive technique in Vietnamese poultry cooking. A bicycle pump, straw, or the cook\\\'s own breath is used to force air under the skin through a small opening at the neck. The air separates the skin from the subcutaneous fat layer, creating a 3-8mm gap that transforms the entire roasting physics. In a non-inflated duck, the skin sits directly on the fat layer, which sits on the meat. During roasting, the fat renders and has nowhere to go but DOWN through the meat — the skin remains fatty, pliable, and chewy because the rendered fat continuously bathes it from below. In an inflated duck, the air gap acts as an INSULATION LAYER: the skin heats rapidly by direct radiation (it is now a thin, isolated membrane), the fat layer below the gap renders and drips down into the cavity (gravity pulls it away from the skin), and the skin dehydrates in isolation — reaching the glass-transition temperature (150-160°C) where collagen transforms from flexible protein to rigid, glass-like crackling. The air gap is the engineering that makes crackling possible on a duck. Without it, duck skin is leather. With it, duck skin is glass.

Duck fat composition explains why the inflation is specifically critical for duck and not for chicken or pig. Duck subcutaneous fat is 49-51% monounsaturated oleic acid (the same dominant fatty acid as olive oil), with a melting point of 14°C — meaning it is LIQUID at room temperature and begins rendering almost immediately at any roasting temperature. This early, abundant fat release would waterlog the skin in a non-inflated bird. Pig subcutaneous fat, by contrast, is 38-42% saturated palmitic and stearic acids with a melting point of 35-40°C — it renders slowly and the skin has time to dehydrate before the fat arrives. Chicken has so little subcutaneous fat that the issue barely exists. The inflation technique was invented specifically because duck fat is too liquid, too abundant, and too eager to render. The air gap gives the skin a head start on dehydration before the fat flood begins.

The mắc mật leaf inside the duck cavity performs the same volatile-oil distillation as in lợn quay, but the dynamics differ due to the duck\\\'s anatomy. A duck cavity is smaller (800-1200 ml vs 3000-5000 ml for a pig), which creates a HIGHER concentration of volatile compounds per unit volume — the aromatic pressure inside a duck is 3-5× higher than inside a pig. Additionally, duck meat has 2-3× higher intramuscular fat content than pork loin, and since mắc mật\\\'s monoterpenoids are fat-soluble (log P 2.0-3.5), they penetrate deeper and faster into duck meat. The result: vịt quay lá mắc mật has a more intense interior perfume than lợn quay, despite using fewer leaves. The bird\\\'s own fat acts as the solvent that carries the fragrance into every fiber.

The drying phase — 4-6 hours of air-drying after inflation and glazing — is where most home cooks fail. The glaze (honey, rice vinegar, maltose or sugar, boiling water) is poured over the inflated duck, which is then hung in a cool, breezy location. During this period, the glaze contracts as it dries, pulling the skin taut over the air gap like a drum skin. The dried glaze forms a thin (0.1-0.3mm), hygroscopic film that continues absorbing moisture from the skin beneath it — essentially wicking water from the skin surface to the glaze surface where it evaporates into the air. This is passive dehydration: no heat required, only time and air movement. By the time the duck enters the roasting chamber, the skin moisture content has dropped from 65-70% (raw) to 30-40% (dried) — a 30-40 percentage point reduction that means the roasting time needed to achieve crackling is cut by 40-50%. Skipping the drying phase produces a duck with crispy patches and chewy patches — the classic failure of impatience.`,
  ingredientSections: [
    {
      title: 'The Duck — Whole, Intact Skin',
      items: [
        { amount: 1, name: 'whole duck, 2-2.5 kg, cleaned and gutted', note: 'Muscovy (ngan) or Pekin duck. The skin must be COMPLETELY intact — no tears, no punctures — because the inflation requires an airtight skin envelope. Remove any remaining feather stubs with tweezers. In Germany, order "Flugente" (Muscovy) or "Pekingente" from the butcher, specifying whole with head and neck if possible.' },
        { amount: 1, unit: 'tbsp', name: 'salt, for cavity', note: 'Rubbed inside to draw moisture and firm the interior surfaces before stuffing.' },
      ]
    },
    {
      title: 'Mắc Mật Stuffing',
      items: [
        { amount: 80, unit: 'g', name: 'fresh mắc mật leaves', note: 'Smaller quantity than for pig — the duck\\\'s smaller cavity creates 3-5× higher aromatic concentration. European substitute: 40g kaffir lime leaves + 20g lemongrass + 10g fresh bay leaves.' },
        { amount: 3, name: 'lemongrass stalks, bruised', note: 'Citral bridges the external glaze aromatics with the internal mắc mật perfume.' },
        { amount: 5, name: 'garlic cloves, smashed', note: 'Allicin vaporizes at 80°C — garlic vapor condenses on meat alongside monoterpenoids.' },
        { amount: 3, name: 'slices fresh ginger, 3mm thick', note: 'Gingerol converts to zingerone at 100°C — the warm, sweet spice note that complements citrus-floral mắc mật. Ginger also neutralizes the "ducky" trimethylamine compounds in the cavity.' },
        { amount: 2, name: 'star anise, whole', note: 'Anethole provides the licorice anchor note. The Cantonese inheritance — star anise is to Cantonese roast duck what mắc mật is to Tày roast duck.' },
        { amount: 1, unit: 'tsp', name: 'five-spice powder', note: 'Rubbed into the cavity walls before adding leaves. The five-spice creates a base flavor layer that the mắc mật volatiles build upon.' },
      ]
    },
    {
      title: 'Glaze (Nước Phết Vịt)',
      items: [
        { amount: 3, unit: 'tbsp', name: 'honey', note: 'Fructose + glucose = Maillard reactants at 150-170°C. Local Lạng Sơn longan honey is traditional — darker, more complex than acacia honey, with phenolic compounds that contribute to the amber color.' },
        { amount: 2, unit: 'tbsp', name: 'rice vinegar', note: 'Lowers skin pH to 4.0-4.5 for accelerated Maillard reaction. Also denatures surface collagen for micro-pore creation. The Northeast Vietnamese acid-treatment standard.' },
        { amount: 1, unit: 'tbsp', name: 'maltose or brown sugar', note: 'Higher molecular weight sugars caramelize at higher temperatures (170-186°C), building a second browning phase after the honey sugars have already reacted. Layered browning = complexity.' },
        { amount: 200, unit: 'ml', name: 'boiling water', note: 'Used to dissolve the glaze ingredients and to pour over the duck during the blanching step. The boiling water tightens the skin on contact, sealing the pores and creating a smoother surface for the glaze to adhere.' },
        { amount: 1, unit: 'tbsp', name: 'dark soy sauce', note: 'For deep mahogany color. The caramel in dark soy adds bitter-sweet depth that balances the honey sweetness.' },
      ]
    },
    {
      title: 'Dipping Sauce — Mắc Mật Chili',
      items: [
        { amount: 3, unit: 'tbsp', name: 'mắc mật fruit sauce (tương mắc mật)', note: 'Made from the ripe fruit of the same Clausena indica tree whose leaves are inside the duck. The fruit contains limonene and linalyl acetate — structurally related to but distinct from the leaf compounds, creating a harmonic resonance: leaf inside, fruit outside. If unavailable: substitute with kumquat sauce + a few drops of lime leaf oil.' },
        { amount: 2, name: 'fresh red chilies, minced', note: 'Capsaicin heat to activate TRPV1 alongside the citrus brightness of the mắc mật sauce.' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'Glutamate floor beneath the citrus-chili top notes.' },
        { amount: 1, unit: 'tsp', name: 'sugar', note: 'Balances the acid from the fruit sauce.' },
        { amount: 1, unit: 'tbsp', name: 'lime juice', note: 'Citric acid sharpens the edges of the sauce — a brighter, faster-hitting acid than the vinegar in the glaze.' },
      ]
    }
  ],
  steps: [
    {
      title: 'Inflate the duck — the air gap that makes everything possible',
      description: `Locate the opening where the neck meets the body cavity. Using a bicycle pump with a thin nozzle (or a sturdy drinking straw), insert 3-4cm under the skin at the base of the neck, angling between the skin and the breast meat. Hold the neck skin tightly around the nozzle with one hand to create an airtight seal. Pump air steadily — the skin will begin to lift away from the flesh, first across the breast, then down the thighs, and finally across the back. Continue until the duck resembles an inflated balloon — the skin should be taut and uniformly separated from the meat by a 3-8mm air gap across the entire bird.

The duck will try to deflate through the neck opening and the cavity opening. Tie the neck opening tightly with butcher\\\'s twine immediately after removing the pump. Close the cavity opening with a bamboo skewer or metal pin. The air seal must hold for 6-10 hours (through drying and roasting). Test by pressing the breast skin gently — it should feel like pressing on a drum, with spring-back and a hollow sound underneath.

If the skin tears during inflation: stop. Patch the tear with a small piece of toothpick pushed through both edges of the torn skin to pin it shut. Re-inflate. Small tears (under 1cm) will seal during the glazing and drying process as the glaze contracts. Larger tears mean the skin was damaged during cleaning — the duck will still roast well but the crackling will be incomplete in that area.`,
      tip: `The air gap transforms the duck from a conductive-heating system to a radiative-heating system. In a non-inflated duck, heat must travel from the skin THROUGH the fat layer to reach the meat — conductive heat transfer through fat at 0.17 W/m·K (fat is an excellent insulator). The meat stays cool while the skin overheats, or the skin burns while the meat finally reaches safe temperature. With the air gap, the system separates into two independent zones: the SKIN zone (heated by direct radiation from the charcoal/oven, dehydrating and crackling independently) and the MEAT zone (heated by convection from the hot air circulating in the cavity and by conduction from the inside, cooking evenly). The air gap (thermal conductivity 0.025 W/m·K — even lower than fat) ensures these two zones operate at completely different temperatures: skin at 160-200°C, meat at 80-95°C. This 65-100°C differential is the engineering of simultaneous crackling skin and juicy meat — impossible without the gap.`
    },
    {
      title: 'Blanch, glaze, and air-dry — the 4-6 hour patience test',
      description: `Dissolve honey, maltose, rice vinegar, and dark soy sauce in 200ml of boiling water. Stir until homogeneous. Hold the inflated duck by the neck over a large basin or the sink. Pour the boiling glaze slowly over the entire duck surface, rotating to coat every area — breast, back, thighs, wings. The boiling liquid serves dual purpose: it tightens and shrinks the skin (thermal protein contraction at 65-75°C), and it deposits the first glaze layer. The skin will visibly tighten and become smoother as the collagen contracts. Repeat the pour 2-3 times, collecting and reheating the glaze between pours.

Hang the glazed duck in a cool, well-ventilated location — a fan directed at the duck accelerates the process significantly. Traditional Lạng Sơn method: hang from a hook under the eaves where the mountain breeze provides natural air flow. In a European kitchen: hang in front of a fan in a cool room, or place uncovered on a wire rack in the refrigerator with the fan setting on (the low-humidity, circulating-air environment of a refrigerator is excellent for drying).

Dry for 4-6 hours minimum. The duck is ready for roasting when the skin feels like parchment paper — dry, tight, slightly tacky from the dried glaze, and completely matte (no wet or shiny patches). Touch-test: drag a finger across the breast skin. If it slides, the skin is too wet. If it catches with a slight drag, it is ready. The dried glaze should be visible as a thin, amber-tinted film.

During the last 30 minutes of drying, stuff the cavity with mắc mật leaves, lemongrass, garlic, ginger, and star anise (rub five-spice powder into the cavity walls first). Reseal the cavity opening tightly.`,
      tip: `The drying phase is a lesson in water activity (aw). Raw duck skin has aw = 0.99 (essentially free water everywhere). The glaze, when dried, forms a hygroscopic sugar-acid film that pulls water from the skin surface by osmotic pressure — the high sugar concentration of the dried glaze creates a concentration gradient that favors water migration from the skin (low sugar, high water) to the glaze surface (high sugar, low water) where it evaporates. Over 4-6 hours, the skin\\\'s surface aw drops to 0.85-0.90 — still hydrated enough to remain pliable, but dry enough that when the duck enters the roasting chamber at 200°C+, the surface reaches the glass-transition temperature within 15-20 minutes instead of 40-50 minutes for an undried bird. This 25-30 minute head start means the skin achieves crackling BEFORE the fat layer beneath fully renders and floods the surface — the critical race condition that determines success or failure of the entire dish.`
    },
    {
      title: 'Roast the duck — charcoal or oven at 200-220°C for 60-75 minutes',
      description: `For charcoal roasting (traditional): set up identical to lợn quay — glowing coals, no flames, duck hung vertically or on a horizontal spit 35-40cm above the coals. Rotate continuously, one revolution every 45-60 seconds. The vertical hanging method is preferred for duck because gravity pulls rendered fat straight down through the cavity and out the sealed bottom, rather than across the skin surface.

For oven roasting (home adaptation): preheat oven to 220°C (430°F). Place the duck breast-side up on a wire rack over a deep roasting pan to catch fat. Roast at 220°C for 20 minutes — this is the skin-crisping phase. Then reduce to 180°C (350°F) for 40-50 minutes for the internal cooking phase. Do NOT open the oven during the first 20 minutes — the temperature drop collapses the crackling process.

During roasting, the air gap performs its engineering: the skin heats rapidly to 160-200°C, dehydrating and crackling. The fat layer below the gap renders and drips into the cavity (collected by the roasting pan below). The meat heats slowly by convection from the cavity air and conduction from within. At 30 minutes, the duck\\\'s internal temperature should reach 72°C (food safety minimum). At 60 minutes: 85-90°C at the thickest part of the thigh — the collagen in the thigh joint has converted to gelatin, and the leg pulls away from the body easily.

The duck is done when: the skin is uniformly deep amber-mahogany (from the Maillard glaze), rigid and hollow-sounding when tapped, and the juices from the thigh joint run clear (not pink) when pierced. Rest for 10-15 minutes before chopping.`,
      tip: `The vertical hanging method used in Lạng Sơn and in Cantonese char siu/roast duck restaurants exploits gravity to solve the fat-drainage problem. In a horizontal roast (oven), rendered fat pools on the breast skin surface — the lowest point when breast-side up — creating a fat lake that prevents the breast skin from crisping uniformly. The cook must flip the duck, drain the fat, or use other interventions. In a vertical hang, gravity pulls ALL rendered fat straight down through the cavity to the bottom of the bird, where it drips off. No fat pools on any skin surface. Every surface dehydrates equally. This is why restaurant-quality Cantonese roast duck has uniformly crackling skin while home-oven duck always has soft spots on the breast — it is a geometry problem, not a technique problem. If using an oven: start with the duck breast-side DOWN for the first 20 minutes (the crackling phase) so gravity pulls fat away from the breast skin, then flip for presentation browning.`
    },
    {
      title: 'Chop and serve — the Lạng Sơn presentation',
      description: `Rest the duck for 10-15 minutes on a cutting board. Using a sharp, heavy cleaver: remove the head and neck (served separately as a delicacy — the neck skin is the crispiest part of the entire bird due to its thinness). Split the duck in half lengthwise through the breastbone and spine. Chop each half crosswise into 3-4cm pieces — each piece must include skin, fat (now rendered and thin), and meat in a single bite.

The chopping technique for glazed duck differs from regular poultry: place the cleaver blade on the duck surface, then strike the back of the cleaver with your palm in ONE decisive blow. The blade should cut through the crackling cleanly without crushing it. If you use a sawing motion, the crackling shatters into fragments that separate from the meat. One chop = one piece. Confidence is a cooking technique.

Arrange the chopped pieces on a serving platter, skin-side up, reassembling the duck\\\'s shape. Open the cavity and remove the wilted mắc mật leaves — they have surrendered their essential oils over 60-75 minutes of roasting. Some Lạng Sơn cooks place these spent leaves on the platter beneath the duck pieces as a visual reminder of the aromatic source.

Serve with the mắc mật fruit dipping sauce, steamed rice, and fresh herbs. The traditional pairing in Lạng Sơn is phở chua — cold sour noodles alongside hot roast duck, the temperature and flavor contrast creating the complete border feast.`,
      tip: `The mắc mật fruit sauce as a dipping condiment creates what flavor scientists call "harmonic reinforcement" — the same plant family\\\'s compounds appearing in both the cooking medium and the finishing sauce, at different concentrations and in different molecular forms. The LEAVES inside the duck delivered citronellal (aldehyde form) and linalool (alcohol form) as a diffuse perfume absorbed into the meat. The FRUIT sauce on the plate delivers limonene (hydrocarbon form) and linalyl acetate (ester form) as a concentrated, bright, direct hit on the tongue. The brain processes these related-but-different compounds as belonging to the same aromatic category — like hearing the same melody played on different instruments. This coherence is what makes the dish taste "complete" rather than "decorated." The inside and outside tell the same story in different voices.`
    },
    {
      title: 'The perfect bite — skin, meat, sauce, rice',
      description: `Pick up one chopped piece with chopsticks. The skin should crack audibly as the chopsticks press — if it bends silently, the skin dried insufficiently or the roasting temperature was too low. Dip the meat side (not the crackling side) into the mắc mật chili sauce — submerging the crackling in liquid destroys it within 10 seconds as the sugar-glass structure absorbs water and collapses.

Eat in one bite. The sensory sequence: the crackling shatters between your teeth (glass-fracture mechanics — the sugar-protein matrix is a non-crystalline solid that fractures along stress planes rather than deforming), then the thin rendered fat layer melts on your tongue (duck fat melts at 14°C — it is liquid the instant it touches body-temperature tissue), then the meat releases the mắc mật perfume as your teeth crush the muscle fibers and rupture the fat cells containing dissolved monoterpenoids, and finally the mắc mật fruit sauce on the meat side delivers the bright, citrusy top note that completes the harmonic.

Follow each bite of duck with a mouthful of steamed rice — the neutral starch absorbs the residual fat and extends the mắc mật flavor across a larger surface area of your palate. Then a bite of fresh herb — rau răm or mint — whose sharp, green volatiles cut through the residual fat film and reset the palate to neutral. This cycle — duck-rice-herb-duck-rice-herb — is the rhythm of the meal. The duck provides the intensity, the rice extends it, and the herb erases it, clearing the stage for the next piece. Each cycle is complete. Each piece is a new beginning.`,
      tip: `Duck fat\\\'s melting point of 14°C creates a unique sensory phenomenon: it is the ONLY common cooking fat that is fully liquid at mouth temperature (37°C) but solid at cool room temperature (18-20°C in a Lạng Sơn winter). This means the rendered fat layer on each chopped piece arrives at the table as a thin, waxy solid — contributing to the visual gloss and the structural integrity of each piece — then melts INSTANTANEOUSLY on tongue contact. The transition from solid to liquid releases the dissolved mắc mật volatiles in a single burst rather than a gradual release — a flavor explosion rather than a flavor leak. Compare this to beef tallow (melting point 42-48°C), which remains partially solid on the tongue and releases its dissolved aromatics slowly as body heat gradually melts it. Duck fat is the fast-release delivery vehicle. Beef fat is the slow-release capsule. The Lạng Sơn cook chose the right bird for the right leaf: a fat that melts fast enough to deliver a perfume that\\\'s too volatile to wait.`
    }
  ],
  tags: ['Duck', 'Lạng Sơn', 'Charcoal Roast', 'Mắc Mật'],
  description: `Air-inflation creates a 3-8mm gap between skin and flesh — transforming conductive heating into radiative isolation where skin reaches 200°C while meat stays at 85°C. Duck fat (49-51% oleic acid, melting point 14°C) renders immediately into the cavity instead of waterlogging the skin. The 4-6 hour glaze-drying drops surface water activity from 0.99 to 0.85, winning the critical race: crackling forms BEFORE the fat flood arrives. Mắc mật volatiles reach 3-5× higher concentration in the smaller duck cavity than in a pig, with 2-3× faster penetration via the duck\\\'s abundant intramuscular fat solvent. Harmonic reinforcement: leaf compounds inside (citronellal, linalool) harmonize with fruit compounds outside (limonene, linalyl acetate) — same melody, different instruments.`
};

export default function VitQuayLangSonPage() {
  return <RecipeLayout recipe={recipe} />;
}
