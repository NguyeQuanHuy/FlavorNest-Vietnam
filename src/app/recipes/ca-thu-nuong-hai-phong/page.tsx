'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-thu-nuong-hai-phong',
  title: `Cá Thu Nướng Hải Phòng (Hải Phòng Charcoal-Grilled Mackerel — The Harbour City's Oily-Fish-Over-Fire Masterclass)`,
  subtitle: `Whole mackerel steaks — cut cross-grain through the bone at 3 cm thickness — marinated in turmeric, galangal, and shrimp paste, then grilled over charcoal until the skin blisters black and the omega-3-rich flesh underneath stays translucent-pink at the bone. Served with bún, herbs, and a mắm tôm dipping sauce that meets the fish's own funk with MORE funk.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '45 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/ca-thu-nuong-hai-phong.jpg',
  intro: `Cá thu — mackerel — is Hải Phòng's FISH. The harbour city sits at the mouth of the Cấm River where it meets the Gulf of Tonkin, and the mackerel that runs through these waters (Scomberomorus commerson — king mackerel, cá thu chấm — and Rastrelliger kanagurta — short mackerel, cá thu bạc) is the fish that built the city's grilling culture. The HP fish market at 6 AM is a wall of mackerel: silver-blue, rigid with rigor, eyes clear, gills red — the freshness indicators that every HP buyer reads before the fishmonger names a price.

THE MACKEREL'S CHEMISTRY explains why it is grilled rather than steamed, poached, or fried. Mackerel is an OILY FISH — 8-15% intramuscular fat by weight, compared to 1-3% for white fish like snapper or sea bass. That fat is rich in OMEGA-3 polyunsaturated fatty acids (EPA and DHA), which are liquid at body temperature and semi-liquid even at room temperature. This fat distribution means two things for cooking: FIRST, the flesh self-bastes over direct heat — the intramuscular fat melts and migrates through the muscle fibres, keeping the flesh moist even at the high temperatures (300-400°C surface) that charcoal grilling produces. A lean white fish at the same temperature dries to cardboard. SECOND, the omega-3s OXIDISE at high heat, producing a suite of volatile aldehydes (2,4-heptadienal, 2,4-decadienal) that smell of CHARRED SEA — the specific aroma that distinguishes grilled oily fish from grilled white fish. This oxidation-aroma is the SIGNATURE of cá thu nướng and it cannot be replicated in an oven or a pan.

THE TURMERIC-GALANGAL MARINADE is not arbitrary — it is LIPID-MANAGEMENT. Turmeric's curcumin is a powerful ANTIOXIDANT that slows the omega-3 oxidation during the marination period (preventing the fish from developing off-flavours before it hits the grill), and galangal's 1'-acetoxychavicol acetate (ACA) has demonstrated ANTIMICROBIAL activity against the histamine-producing bacteria that colonise oily fish within hours of death. The traditional marinade is: food science before the term existed, preserving the fish's freshness during the 2-3 hour window between market and grill.

THE SHRIMP PASTE IN THE MARINADE is the HP MARKER. Most Vietnamese grilled-mackerel recipes use fish sauce in the marinade; the HP version uses MẮM TÔM — fermented shrimp paste. The logic: mắm tôm's DMTS (dimethyl trisulfide) and TMA (trimethylamine) are COMPLEMENTARY to the mackerel's own trimethylamine oxide (TMAO), which converts to TMA during cooking. Rather than fighting the fish's natural funk (as lemongrass or ginger do — MASKING aromatics), the mắm tôm AMPLIFIES it — funk meeting funk, creating a HARMONIC rather than a contrast. The HP grilled mackerel smells MORE of the sea than the sea itself, and this is by design.

THE GRILLING is DIRECT and VIOLENT. The mackerel steaks go onto a charcoal grate at 300-400°C surface temperature. The skin side hits the grate first — the skin's collagen shrinks, the fat underneath bubbles through in spots, and the dripping fat ignites on the coals below, creating FLARE-UPS that lick the fish with 600°C+ flame for 1-2 seconds at a time. These flare-ups are not accidents — they are the mechanism that produces the BLISTERED-BLACK-SPOTTED skin pattern that is cá thu nướng's visual signature. The char-spots are: localised PYROLYSIS zones where the skin's proteins carbonised completely, surrounded by golden-brown Maillard zones where the proteins stopped short of carbon. The pattern is random, unreproducible, and different on every steak — the charcoal grill's fingerprint on every piece.

The eating is ASSEMBLED: a piece of grilled mackerel broken apart with chopsticks, laid on a bed of bún, wrapped with herbs, dipped in mắm tôm pha. The fish's omega-3 richness meets the bún's bland starch (DILUTION), the herbs' volatile terpenes (CONTRAST), and the mắm tôm's fermented funk (AMPLIFICATION). The four forces — richness, dilution, contrast, amplification — are the HP grilled-mackerel's complete flavour architecture.`,
  ingredientSections: [
    {
      title: 'The mackerel',
      items: [
        { amount: 800, unit: 'g', name: 'mackerel steaks, cut cross-grain through the bone, 3 cm thick', note: `King mackerel (cá thu chấm) is the HP original — large, firm, high-fat. In Europe: Atlantic mackerel (Scomber scombrus) from any fishmonger — smaller fish, so use 4-6 whole small mackerel butterflied, or thick steaks from a large one. The fish MUST be oily — do not substitute cod, hake, or any lean white fish. The fat is the technique.` },
      ],
    },
    {
      title: 'The turmeric-galangal-mắm tôm marinade',
      items: [
        { amount: 2, unit: 'tbsp', name: 'mắm tôm (fermented shrimp paste)', note: `The HP MARKER — not fish sauce. The shrimp paste's funk AMPLIFIES the mackerel's own TMAO-derived aromatics rather than masking them. Use a good Vietnamese mắm tôm — thick, dark purple-brown, intensely pungent.` },
        { amount: 2, unit: 'tbsp', name: 'fresh turmeric, grated (or 1 tsp ground)', note: `The ANTIOXIDANT — curcumin slows omega-3 oxidation during marination, and the golden colour on the grilled surface is the turmeric's visible signature.` },
        { amount: 1, unit: 'tbsp', name: 'galangal, grated', note: `The ANTIMICROBIAL — ACA in galangal slows histamine-producing bacteria. Also contributes a sharp, pine-camphor aromatic that cuts through the fish's richness.` },
        { amount: 3, name: 'cloves garlic, minced' },
        { amount: 2, name: 'shallots, minced' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
        { amount: 1, name: 'red chili, minced' },
      ],
    },
    {
      title: 'Mắm tôm pha (whipped shrimp paste dip)',
      items: [
        { amount: 3, unit: 'tbsp', name: 'mắm tôm' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, name: 'bird\'s-eye chili, minced' },
        { amount: 1, name: 'clove garlic, minced' },
      ],
    },
    {
      title: 'The serving platter',
      items: [
        { amount: 400, unit: 'g', name: 'bún (rice vermicelli), cooked and drained' },
        { amount: 200, unit: 'g', name: 'rau sống: tía tô, kinh giới, húng quế, rau mùi', note: `Kinh giới (Vietnamese balm) is ESSENTIAL — its mentholated-cool is the specific counterpoint to mắm tôm's funk, documented as the FIXED HERB PAIRING.` },
        { amount: 1, name: 'cucumber, sliced' },
        { amount: 100, unit: 'g', name: 'dưa chua (pickled vegetables)', note: `Quick-pickled carrot and daikon — the acid cuts through the mackerel's fat.` },
        { amount: 4, name: 'lime wedges' },
      ],
    },
  ],
  steps: [
    {
      title: 'Marinate — turmeric-galangal-mắm tôm, minimum 30 minutes',
      description: `Mix the marinade: grate the turmeric and galangal directly into a bowl. Add the mắm tôm, garlic, shallots, sugar, oil, black pepper, and chili. Stir into a rough, golden-orange paste.

Rub the marinade over every surface of the mackerel steaks — both flat faces, the skin edge, and into the cavity around the backbone. The mắm tôm's enzymes begin working immediately, breaking down the fish's surface proteins into free amino acids that will ACCELERATE the Maillard reaction on the grill (more free amino acids = faster browning = deeper flavour at the same grill time).

Marinate 30 minutes minimum, 2 hours maximum. Beyond 2 hours, the mắm tôm's proteolytic enzymes begin softening the flesh excessively — the surface turns mushy rather than firm, and the steak falls apart on the grill.

Cover and refrigerate if marinating longer than 30 minutes. Remove from the fridge 15 minutes before grilling — cold fish on a hot grill drops the surface temperature below the Maillard threshold and the steak stews in its own moisture rather than searing.`,
      tip: `The turmeric-galangal combination is one of the oldest spice pairings in mainland Southeast Asian fish cookery, predating written recipes by centuries. The pairing works because the two compounds address DIFFERENT SPOILAGE PATHWAYS: curcumin inhibits LIPID OXIDATION (the rancidity pathway — the one that makes old fish smell "fishy"), while galangal's ACA inhibits MICROBIAL HISTAMINE PRODUCTION (the pathway that causes the tingling-numb sensation in stale mackerel and, at high levels, scombroid food poisoning). Together they extend the usable freshness window by 2-4 hours in tropical heat — enough time to get from the morning market to the afternoon grill. The marinade is a preservation technology that became a flavour.`,
    },
    {
      title: 'Build the charcoal fire — white-hot, no flame, grate oiled',
      description: `Light hardwood charcoal (not briquettes — their binder compounds produce acrid volatiles that cling to oily fish) and let it burn until the coals are COMPLETELY WHITE with ash — no visible flame, no black patches. This takes 25-35 minutes depending on the charcoal.

The grill temperature should be HIGH: you should be able to hold your hand 10 cm above the grate for 2 seconds maximum before pulling away. This corresponds to roughly 300-350°C at grate level — the temperature where the Maillard reaction on the mackerel's turmeric-coated surface happens in 3-4 minutes rather than 8-10.

OIL THE GRATE with a paper towel soaked in oil, held with tongs, dragged across the bars 3-4 times. The oil polymerises on the hot metal and creates a NON-STICK LAYER — mackerel skin sticks to un-oiled grates catastrophically, tearing the skin off and leaving the flesh exposed to direct flame. The skin is the ARMOUR; losing it means losing the dish.

INDOOR ALTERNATIVE: a cast-iron grill pan over maximum heat, preheated 5 minutes, with the kitchen vent on high. You will lose the flare-up char-spots but retain the Maillard and the turmeric crust. A broiler at maximum, 8 cm from the element, is the second fallback.`,
      tip: `White-hot charcoal produces RADIANT HEAT with minimal CONVECTIVE smoke — the heat reaches the fish as infrared radiation rather than as hot smoky gas. This matters for mackerel specifically because oily fish ABSORBS smoke compounds (polycyclic aromatic hydrocarbons — PAHs) far more readily than lean fish, due to the fat acting as a solvent for the lipophilic PAH molecules. Over properly white-hot coals, the fish grills by radiation with minimal smoke; over still-flaming coals, it absorbs a heavy, acrid smoke flavour that masks the fish and the marinade. White coals = clean heat = the fish tastes of itself and the turmeric. The patience to wait for white coals is the entire skill.`,
    },
    {
      title: 'Grill — skin side first, 4 minutes, one turn, 3 minutes',
      description: `Place the steaks on the oiled grate SKIN SIDE DOWN. Do not touch them for 4 minutes. The sequence on the skin side: 0-60 seconds — the skin contracts, the fat begins rendering, the turmeric paste sizzles and turns from orange to DEEP GOLDEN-BROWN. 60-180 seconds — fat drips onto the coals, FLARE-UPS lick the flesh above (1-2 seconds each, 600°C+ — these create the black char-spots on the skin surface). 180-240 seconds — the flesh has cooked halfway through from the bottom, the surface is charred-spotted and rigid.

TURN ONCE. Use a wide spatula slid under the entire steak in one motion. If the steak resists, it is not ready to turn — the skin has not fully released from the grate. Wait 30 more seconds and try again. A properly seared steak releases cleanly.

Grill the second side for 3 minutes (shorter — the residual heat from the first side is already cooking the centre). The steak is done when: a skewer into the thickest point meets no resistance, the flesh at the bone is JUST OPAQUE (the faintest translucent-pink at the very centre is perfect — carryover heat finishes it during the 2-minute rest), and the turmeric crust is uniformly deep golden-brown with random black char-spots.

REST the steaks on a rack for 2 minutes. The internal temperature rises 3-5°C during rest, finishing the centre without overcooking the exterior. Do not rest on a plate — the trapped steam softens the charred skin.`,
      tip: `The FLARE-UP is the mechanism that makes charcoal-grilled mackerel different from every other cooking method. When omega-3-rich fat drips onto white-hot coals, it doesn't just burn — it PYROLYSES into a complex mixture of volatile flavour compounds (furanones, pyrazines, and a subset of PAHs at very low, flavour-active concentrations) that rise with the flame and deposit on the fish's surface. These compounds exist ONLY in direct-coal-grilled fish — an oven, a pan, even a gas grill cannot produce them because the fat either doesn't drip or drips onto a surface too cool to pyrolyse it. The flare-up is not a hazard to manage; it is a flavouring event to welcome, for 1-2 seconds at a time. The HP grill master lets the flare happen, counts one-two, and only intervenes (by shifting the steak) if the flame persists beyond 3 seconds.`,
    },
    {
      title: 'Whip the mắm tôm, assemble the plate, eat with hands and herbs',
      description: `WHIP THE MẮM TÔM PHA: combine 3 tbsp mắm tôm + 2 tbsp lime juice + 1 tbsp sugar + chili + garlic. Whip vigorously with chopsticks for 30 seconds until the paste transforms from dark purple to LIGHT PINK and frothy. The aeration dilutes the volatile concentration at the surface by 30-40%; the lime protonates the amines; the sugar reframes funk as complexity. The same technique documented in bún đậu mắm tôm (#6) — because it is the SAME SAUCE serving the SAME FUNCTION: making fermented shrimp paste approachable.

PLATE: lay the grilled mackerel steaks on a platter — skin-side UP so the char pattern is visible. The visual: GOLDEN-BROWN turmeric crust spotted with BLACK char marks, the flesh beneath visible at the edges as OPAQUE WHITE with the faintest pink at the bone. Surround with bún, rau sống (kinh giới prominently), cucumber, pickled vegetables, and lime wedges. Mắm tôm pha in individual bowls.

THE EATING: break the mackerel apart along its natural flake-lines with chopsticks — the flesh separates in large, moist sheets. Take a piece of fish with a tuft of bún, wrap in kinh giới and tía tô, dip in mắm tôm pha. The architecture: OILY FISH (omega-3 richness, charred-sea aroma) + BLAND BÚN (starch dilution) + KINH GIỚI (mentholated-cool contrast — elsholtzia ketone vs DMTS) + MẮM TÔM (fermented-funk amplification). Four forces in one bite: richness, dilution, contrast, amplification.

The mackerel's omega-3 fat carries flavour LONGER than lean fish — the aftertaste lingers for 8-10 seconds, during which the mắm tôm's fermented notes continue evolving on the palate. This LONG FINISH is why oily fish + mắm tôm works where lean fish + mắm tôm would be overwhelmed: the fish has enough flavour-mass to STAND UP to the sauce rather than disappearing under it.`,
      tip: `Cá thu nướng Hải Phòng demonstrates the HP flavour philosophy that runs through every dish in this province's section: AMPLIFICATION rather than CONTRAST. Where Hà Nội cooking tends toward BALANCE (every strong flavour counteracted by a mild one — the capital's aesthetic of restraint), HP cooking tends toward STACKING (strong flavours reinforced by MORE strong flavours — the harbour city's aesthetic of abundance). Mackerel + mắm tôm is: FISH-FUNK + SHRIMP-FUNK = A HARMONIC OF FUNK. Bánh đa cua is: CRAB-UMAMI + SHRIMP-PASTE-UMAMI = A HARMONIC OF UMAMI. The HP kitchen builds CHORDS, not MELODIES — and the resulting flavour intensity is what makes Hải Phòng food the loudest in northern Vietnam.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
