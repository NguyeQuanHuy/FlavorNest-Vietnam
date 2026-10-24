'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-cuon-hai-phong',
  title: `Bánh Cuốn Hải Phòng (Hải Phòng Steamed Rice Rolls — The Harbour City's Thick-Sheet, Fried-Shallot Architecture)`,
  subtitle: `Steamed rice-flour sheets — THICKER than the Hà Nội gossamer, CHEWIER, rolled around a pork-and-wood-ear filling — served not with the northern chả lụa but with CHẢ LÁ LỐT (betel-leaf pork) and a mountain of HÀNH PHI (fried shallots) that is the HP version's declaration of independence from the capital.`,
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/banh-cuon-hai-phong.jpg',
  intro: `Bánh cuốn exists across northern Vietnam — Hà Nội, Thanh Trì, Phú Thọ, Lạng Sơn — and every province's version is a thesis on how THIN a rice sheet should be, what goes INSIDE it, and what goes BESIDE it. The Hà Nội-Thanh Trì version is the BENCHMARK: sheets so thin they are translucent (0.3-0.5 mm), filled with minced pork and wood ear, served with chả lụa (the smooth, bouncy pork sausage) and a light nước chấm. It is a dish of REFINEMENT — restraint as aesthetic.

The Hải Phòng version REJECTS that restraint. The HP bánh cuốn is THICKER (0.8-1.2 mm — roughly double the Hà Nội sheet), CHEWIER (the thicker batter produces a sheet with more structural integrity and a distinct QQ-bounce under the tooth), and it is served with an EXPANDED accompaniment set that includes: HÀNH PHI (fried shallots — not a garnish-sprinkle but a MOUND, 2-3 tablespoons per serving, golden-crispy, sweet-allium), CHẢ LÁ LỐT (ground pork wrapped in betel leaf and grilled — the Piper-lolot's piperine-eugenol aromatic replacing chả lụa's smooth blandness), and sometimes CHẠO (a fried pork-fat-and-shrimp-paste condiment unique to HP). The HP plate is: LOUDER, CRUNCHIER, MORE AROMATIC than its Hà Nội ancestor.

THE BATTER DIFFERENCE is not accidental — it is STRUCTURAL. The Hà Nội batter is almost pure rice flour with minimal tapioca starch (ratio ~95:5), producing a sheet that is: fragile, translucent, and tears if you look at it wrong. The HP batter uses a higher tapioca-starch ratio (~80:20), which does two things: the AMYLOPECTIN in the tapioca starch creates a more ELASTIC gel-network (the starch granules swell and interlock more densely), and the higher starch-gelatinisation produces a more OPAQUE sheet (the swollen granules scatter light rather than transmitting it). The result: a sheet that HOLDS together when rolled, BOUNCES under the tooth rather than dissolving, and SURVIVES the fried-shallot mountain without tearing.

THE HÀNH PHI is the HP version's SIGNATURE. Fried shallots appear across Vietnamese cuisine as a finishing garnish — a pinch, a sprinkle, a teaspoon. The HP bánh cuốn uses them as a PRIMARY COMPONENT: 2-3 tablespoons per serving, piled on top of the rolls, creating a CRUNCH LAYER that the tooth passes through BEFORE reaching the soft rice sheet. The textural sequence: CRUNCH (fried shallots — golden, sweet, shattering) → CHEWY (rice sheet — QQ-elastic, slightly resistant) → SOFT (pork-wood-ear filling — savoury, earthy) → CRUNCH again (more shallots trapped inside the fold). The fried shallots also contribute: ALLIUM SWEETNESS (the Maillard products of shallot-sugar + amino-acid at 160°C), OIL (the shallot-infused frying oil clings to the rice sheet and acts as the dish's FAT COMPONENT — bánh cuốn has no other fat source), and AROMA (the diallyl disulfide and methyl propenyl disulfide volatiles that smell of CARAMELISED ONION — the HP morning's signature scent).

THE STEAMING is the skill. The batter is ladled onto a cotton cloth stretched over a pot of boiling water, spread thin with a bamboo stick, and covered for 30-45 seconds. The steam's temperature (100°C at atmospheric pressure) gelatinises the starch without browning it, and the cotton cloth's weave imprints a SUBTLE TEXTURE on the sheet's underside — the micro-ridges that trap sauce and shallot-oil. The sheet is lifted off the cloth with a bamboo spatula in ONE motion (hesitation = tearing), the filling is spooned along the centre, and the roll is folded — not rolled tight like a spring roll, but FOLDED LOOSELY, leaving air inside so the sheet maintains its distinct QQ-texture rather than compressing into a dense mass.

The HP bánh cuốn is a BREAKFAST dish — served from 5:30 AM to 9:00 AM and almost never after. The morning specificity is not tradition for tradition's sake: the fried shallots lose their crunch within 2 hours of frying (the residual oil migrates into the crispy-dehydrated-cell-walls and re-softens them), and the rice sheets stiffen as the gelatinised starch retrogrades on cooling. The dish exists in a WINDOW — the 90-minute span between "just steamed, just fried" and "gone stale" — and the HP morning is built around catching that window.`,
  ingredientSections: [
    {
      title: 'The batter',
      items: [
        { amount: 300, unit: 'g', name: 'rice flour (bột gạo)', note: `The BASE — regular rice flour, not glutinous. The HP ratio is 80% rice flour to 20% tapioca starch, producing the thicker, chewier, more opaque sheet that distinguishes it from the Hà Nội gossamer.` },
        { amount: 75, unit: 'g', name: 'tapioca starch (bột năng)', note: `The ELASTICITY agent — its amylopectin creates the QQ-bounce. Without it, the sheet tears under the weight of the fried-shallot mountain.` },
        { amount: 600, unit: 'ml', name: 'water' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (in the batter)', note: `Prevents the sheet from sticking to the cloth and to itself when folded.` },
      ],
    },
    {
      title: 'The filling',
      items: [
        { amount: 300, unit: 'g', name: 'ground pork (thịt xay)', note: `NOT lean — the 70:30 lean-to-fat ratio gives the filling moisture and richness inside the lean rice sheet.` },
        { amount: 30, unit: 'g', name: 'dried wood ear mushroom (mộc nhĩ), soaked and minced', note: `The TEXTURAL COUNTERPOINT inside the filling — a crunchy-snap within the soft pork, creating a micro-texture inside the macro-texture of the sheet.` },
        { amount: 3, name: 'shallots, minced' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
      ],
    },
    {
      title: 'Hành phi (fried shallots) — THE HP SIGNATURE',
      items: [
        { amount: 300, unit: 'g', name: 'shallots, thinly sliced into even rings', note: `This is NOT a garnish amount — this is a COMPONENT amount. 300g raw yields roughly 100g fried, enough for 2-3 tablespoons per serving. The rings must be EVEN THICKNESS (1.5-2 mm) — thicker rings stay soft in the centre; thinner ones burn before the thicker ones finish.` },
        { amount: 200, unit: 'ml', name: 'neutral oil for frying', note: `The OIL IS A PRODUCT — after frying, the shallot-infused oil is drizzled over the finished rolls. Do not discard it.` },
      ],
    },
    {
      title: 'Chả lá lốt (betel-leaf pork)',
      items: [
        { amount: 200, unit: 'g', name: 'ground pork' },
        { amount: 20, name: 'lá lốt (betel/piper lolot leaves)', note: `The Piper-lolot leaf — its piperine (0.5-1.5%, gentler than black pepper's 5-9%) and eugenol contribute the warm-spice-aromatic that replaces chả lụa's blandness. In Europe: available frozen at Vietnamese groceries. Fresh grape leaves are a textural substitute but carry none of the Piper aromatic — acknowledge the substitution honestly.` },
        { amount: 2, name: 'cloves garlic, minced' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'five-spice powder' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
      ],
    },
    {
      title: 'Nước chấm',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 3, unit: 'tbsp', name: 'warm water' },
        { amount: 1, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, name: 'cloves garlic, minced' },
        { amount: 1, name: 'bird\'s-eye chili, sliced' },
      ],
    },
    {
      title: 'Accompaniments',
      items: [
        { amount: 200, unit: 'g', name: 'giá đỗ (bean sprouts), blanched' },
        { amount: 100, unit: 'g', name: 'rau mùi (cilantro) and rau thơm (mixed herbs)' },
        { amount: 1, name: 'cucumber, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Fry the shallots FIRST — they need time to cool and crisp',
      description: `Slice 300g shallots into even rings, 1.5-2 mm thick. Separate the rings and spread them on a towel for 10 minutes — surface-drying accelerates the frying and prevents the oil from foaming violently.

COLD-START the frying: place the sliced shallots into the oil BEFORE heating. Turn the heat to MEDIUM and bring the oil and shallots up together slowly. This is not the usual hot-oil-then-ingredient sequence — the cold start ensures EVEN DEHYDRATION across every ring, because thin and thick slices reach frying temperature at different rates from a cold start rather than all hitting a wall of heat simultaneously.

Stir gently every 2-3 minutes. The shallots will bubble vigorously as their moisture escapes (the bubbling IS the water leaving — when it stops, the shallots are nearly done). After 12-15 minutes the rings turn from pale to GOLDEN. Remove them at GOLDEN, not brown — residual heat continues the Maillard reaction for another 30 seconds after removal, and golden-at-extraction becomes DEEP-GOLDEN-at-rest. Brown-at-extraction becomes BURNT-at-rest.

Drain on paper towels. RESERVE THE OIL — this shallot-infused oil is the dressing for the finished rolls.

The shallots will crisp fully as they cool. Taste one after 5 minutes — it should SHATTER between the teeth with a sweet, caramelised allium flavour and no residual softness. If any are still leathery, they were too thick or removed too early.`,
      tip: `The COLD-START technique is the professional's method for fried shallots across Southeast Asia, and the reason is thermodynamics. Hot oil instantly dehydrates the outer surface of each ring while the interior is still wet — the result is a ring that is dark on the outside and soft in the centre. Cold-starting brings the entire ring to dehydration temperature gradually, so moisture leaves from the inside out rather than being sealed in by a surface crust. The cold start takes longer (15 minutes versus 5) but produces shallots that are UNIFORMLY CRISPY through their entire thickness — the kind that shatter rather than bend.`,
    },
    {
      title: 'Make the filling and the chả lá lốt',
      description: `THE FILLING: sauté the minced shallots in 1 tbsp oil until fragrant (1 minute). Add the ground pork, break it into fine crumbles, and cook until just done — no pink, no browning. Browning creates Maillard-compounds that compete with the rice sheet's delicate flavour; the filling should taste of PORK, not of SEAR. Add the minced wood ear, fish sauce, and black pepper. Stir 30 seconds, then set aside. The filling should be: MOIST (not dry), FINE (small crumbles, not chunks), and SAVOURY-EARTHY (pork + wood ear + fish sauce, no other flavour competing).

CHẢ LÁ LỐT: mix the ground pork with garlic, fish sauce, sugar, five-spice, and black pepper. Take a heaped teaspoon of the mixture, place it at the base of a lá lốt leaf (glossy side DOWN — the rough side grips the meat), and roll tightly, tucking the sides in. Thread 4-5 rolls onto a bamboo skewer.

Grill the skewers over high heat (or in a very hot pan with a film of oil) for 2-3 minutes per side — the leaf should CHAR in patches (the char releases the lá lốt's eugenol and piperine volatiles in a burst) while the pork inside just cooks through. The finished chả lá lốt should be: CHARRED-GREEN on the outside, JUICY-PINK-TO-WHITE inside, and carrying the warm-spice Piper aromatic that makes lá lốt one of the Vietnamese kitchen's irreplaceable leaves.`,
      tip: `Lá lốt (Piper lolot) is the THIRD point on the Piper spectrum documented in this collection: P. nigrum (black pepper) at 5-9% piperine → P. lolot (betel leaf) at 0.5-1.5% → P. betle (trầu) at 0.1-0.5%. The lá lốt's lower piperine gives WARMTH without HEAT — the tongue registers spice-aromatic (the eugenol, which is also in cloves and cinnamon) rather than spice-pain (the TRPV1 activation that piperine and capsaicin trigger). This is why lá lốt is WRAPPED around meat rather than sprinkled on it — you want the aromatic envelope, not the burn. The charring is critical: uncharred lá lốt tastes green and vaguely peppery; charred lá lốt releases the eugenol-piperine-pyrazine suite that smells of GRILLED-SPICE-LEAF — a scent with no substitute and no equivalent.`,
    },
    {
      title: 'Mix the batter and REST — the starch needs time to hydrate',
      description: `Whisk together the rice flour, tapioca starch, salt, oil, and 600 ml water until COMPLETELY SMOOTH — no lumps. The batter should be the consistency of THIN CREAM (thinner than pancake batter, thicker than milk). If you can see your ladle through the batter when you lift it, the consistency is right.

REST the batter for 30 minutes minimum. During this rest, the rice-flour particles ABSORB water and begin to swell — pre-hydration that ensures the starch gelatinises evenly and quickly on the steam cloth. Un-rested batter produces sheets with raw-starch patches (white, opaque, gritty) surrounded by properly cooked areas (translucent, smooth) — an uneven sheet that tears at the boundary between the two zones.

STIR the batter before each ladle — the tapioca starch settles and the bottom of the bowl becomes thick while the top becomes thin. Each sheet should receive the SAME RATIO of rice flour to tapioca starch, and stirring is the only way to guarantee it.

Meanwhile, prepare the steaming rig: stretch a THIN COTTON CLOTH (muslin or cheesecloth, not terry) tightly over a wide pot of boiling water, securing it with string or the pot's rim-ring. The cloth must be TAUT — sagging cloth produces thick-centred, thin-edged sheets. Brush the cloth lightly with oil.`,
      tip: `The 80:20 rice-to-tapioca ratio is the HP FINGERPRINT. Each province's bánh cuốn is identified by its ratio: Thanh Trì uses 95:5 (the thinnest, most fragile), Hà Nội standard uses 90:10 (thin but handleable), Hải Phòng uses 80:20 (thick, chewy, QQ), and Lạng Sơn uses 75:25 with added egg (the thickest, densest, almost noodle-like). The tapioca starch's amylopectin molecules are highly branched — they create a MORE INTERCONNECTED gel-network than the rice flour's amylose, which is linear. More connections = more elasticity = more QQ. The HP sheet is engineered to carry the fried-shallot load without tearing — the 20% tapioca is the engineering.`,
    },
    {
      title: 'Steam the sheets — ONE motion to spread, ONE motion to lift',
      description: `Bring the water under the cloth to a VIGOROUS BOIL — the steam must hit the batter intensely for the 30-45 second cook to work.

LADLE: pour roughly 60 ml of well-stirred batter onto the centre of the oiled cloth. IMMEDIATELY spread it outward in a single circular motion using the back of the ladle or a bamboo stick — the batter should form a CIRCLE roughly 20 cm across and 0.8-1.2 mm thick. COVER with a lid.

STEAM for 30-45 seconds. The sheet is done when it turns from MATTE-WHITE (raw starch) to GLOSSY-TRANSLUCENT (gelatinised starch) across its entire surface. If any matte patches remain, give it 10 more seconds.

LIFT: slide a thin bamboo spatula or a wide, flat, oiled knife under the edge of the sheet and peel it off the cloth in ONE CONTINUOUS MOTION — head to tail, no stopping. Hesitation lets the sheet cool and bond to the cloth; a second attempt tears it. Lay the sheet on an oiled plate.

FILL AND FOLD: spoon a line of filling (2 tablespoons) along the centre of the sheet. Fold one side over the filling, then fold the other side over that — a LOOSE fold, not a tight roll. The air trapped inside the fold maintains the sheet's QQ-texture; a tight roll compresses the starch-gel and the sheet turns dense and gummy.

Repeat. Each sheet takes 60-90 seconds including steaming and folding. A serving of 4-5 rolls takes 6-8 minutes. Work in rhythm: ladle, spread, cover, wait, lift, fill, fold, ladle. The Hải Phòng bánh cuốn stall operates at this cadence from 5:30 AM — the cook does not pause between sheets.`,
      tip: `The cotton cloth is not just a surface — it is a THERMAL INTERFACE. The cloth's weave creates thousands of tiny pockets that trap steam and press it against the batter from below, while the lid traps steam above. The sheet cooks from BOTH SIDES simultaneously — bottom-up through the cloth's steam-pockets, top-down from the lid's trapped steam. This dual-sided steaming is why a 0.8 mm sheet cooks in 30 seconds rather than the 2-3 minutes an oven or a pan would need. The cloth's weave also imprints a MICRO-TEXTURE on the sheet's underside — tiny ridges that trap shallot oil and nước chấm, giving each bite more sauce-contact than a smooth sheet would.`,
    },
    {
      title: 'Assemble the HP plate — rolls, shallot mountain, chả lá lốt, nước chấm',
      description: `MIX THE NƯỚC CHẤM: dissolve sugar in warm water, add fish sauce, lime juice, garlic, and chili. Taste: it should be SALTY-SWEET-SOUR in that order, with the garlic floating and the chili heat arriving 3 seconds after the swallow.

PLATE the rolls (4-5 per serving) on a plate — the folds facing UP so the layers are visible. DRIZZLE with 1 tablespoon of the reserved shallot-frying oil (the oil glistens on the translucent sheet and carries shallot-aroma into every fold).

PILE the fried shallots on TOP — 2-3 heaped tablespoons per serving. This is the moment the dish becomes HẢI PHÒNG rather than generic bánh cuốn. The golden mountain of shallots on the pale rice rolls is the visual signature, and the CRUNCH when you cut through them with chopsticks is the auditory signature.

ARRANGE the chả lá lốt alongside — 3-4 pieces per serving, charred-green, cut in half to show the cross-section. Add blanched bean sprouts, cucumber slices, and fresh herbs.

POUR the nước chấm into individual dipping bowls.

THE EATING: pick up a roll with chopsticks (the HP sheet is thick enough to hold — a Thanh Trì sheet would disintegrate). Dip the end into the nước chấm. Bite. The sequence: FRIED SHALLOT (crunch-sweet-allium, the first texture) → RICE SHEET (QQ-chewy, the second texture) → FILLING (pork-mushroom-savoury, the core) → NƯỚC CHẤM (salty-sweet-sour, arriving with the sauce that wicked into the sheet's cloth-imprinted micro-ridges). Between bites of bánh cuốn, eat a piece of chả lá lốt — the Piper-warmth resets the palate from the sweet shallots and prepares the mouth for the next roll.

Eat within 20 minutes of steaming. The sheets stiffen as the amylose retrogrades (the starch molecules re-crystallise on cooling, turning QQ-chewy into HARD-CHEWY), and the fried shallots absorb humidity and lose their crunch. The HP morning window is real.`,
      tip: `The Hải Phòng bánh cuốn plate demonstrates a principle that runs through this entire collection: REGIONAL IDENTITY IS IN THE ACCOMPANIMENTS, NOT THE CORE. The rice sheet is the same ingredient everywhere — rice flour + water + steam. What makes it Hà Nội is chả lụa and restraint. What makes it Hải Phòng is fried shallots and chả lá lốt. What makes it Lạng Sơn is egg in the batter and a thịt quay (roast pork) side. The core technique (steam a rice batter on cloth) is SHARED across the northern provinces; the accompaniment architecture is what draws the borders. This is Vietnamese cuisine's general principle: the dish is the platform, the province is the configuration.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
