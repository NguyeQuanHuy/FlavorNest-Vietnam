'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-ca-cay-hai-phong',
  title: `Bún Cá Cay Hải Phòng (Spicy Fish Noodle Soup — Hải Phòng's Chili-Tomato Fire Bowl)`,
  subtitle: `Bún in a TOMATO-CHILI broth — vivid orange-red, aggressively spicy, thick with dissolved tomato-pulp — topped with cá thu (mackerel) or cá rô phi (tilapia) fillets that are: FRIED FIRST to a golden crust, then SIMMERED in the broth until the crust softens and the fish absorbs the chili-tomato's fire. The bowl Hải Phòng eats when the weather is cold, the morning is grey, and the body demands: HEAT — capsaicin-heat, tomato-acid-heat, ginger-warm-heat, all three converging in a broth the colour of sunset and the temperature of revenge.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '45 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/bun-ca-cay-hai-phong.jpg',
  intro: `Bún cá cay — literally "spicy fish noodle" — is Hải Phòng's SECOND most-famous noodle soup (after the bánh đa cua), and it occupies a DIFFERENT SENSORY NICHE: where the bánh đa cua is: crab-sweet, tomalley-thick, warm-toned-but-gentle, the bún cá cay is: AGGRESSIVE — spicy, acidic, tomato-dominant, deliberately-hot, the bowl that ATTACKS the palate rather than courting it. The two soups are: Hải Phòng's YIN AND YANG — the gentle crab-soup and the aggressive chili-fish-soup, and the Hải Phòng local eats BOTH (bánh đa cua at 6 AM, bún cá cay at 11 AM) as the day's two noodle-bookends.

The SPICINESS is the bún cá cay's DEFINING CHARACTERISTIC and the characteristic that distinguishes it from every other Vietnamese fish-noodle-soup in the collection: the bún cá Nha Trang (dill+tomato, NO chili-heat), the bún cá Châu Đốc (turmeric+mắm, NO chili-heat), and the bún chả cá Quy Nhơn (steamed fish cake, NO chili-heat) are all: MILD soups. The Hải Phòng version is: HOT — 3-5 bird's-eye chilies per litre of broth (roughly 20,000-50,000 Scoville Heat Units in the broth, comparable to a medium-hot Thai curry), and the heat is: NON-NEGOTIABLE (the vendor does not ask "how spicy?" — the soup IS spicy, the spiciness IS the soup, and the customer who cannot tolerate spice orders the bánh đa cua instead).

The HEAT ARCHITECTURE is: TRIPLE-LAYER:

LAYER 1 — CAPSAICIN in the BROTH (the bird's-eye chilies, simmered in the broth for 20-30 minutes, release their capsaicin into the liquid phase — the dissolved capsaicin produces a SUSTAINED, WHOLE-MOUTH heat that builds over 3-4 spoonfuls and plateaus at spoonful 6-7, and the plateau HOLDS for the bowl's duration. The capsaicin-in-broth is: the BASE-HEAT, the constant thermal-background against which the other two layers play).

LAYER 2 — SÀ TẾ OIL on the SURFACE (the vendor ladles a spoonful of sa tế — the chili-lemongrass-garlic-shrimp oil — onto the broth's surface at the moment of serving. The sa tế floats on the broth as a RED OIL SLICK, and the first spoonful that skims the surface delivers: a CONCENTRATED CAPSAICIN HIT from the oil-phase (the capsaicin is FAT-SOLUBLE, and the sa tế oil dissolves 3-5x more capsaicin per ml than the aqueous broth does — the oil-layer is: the SPICE-CONCENTRATE, the broth's peak-heat, arriving in spoonful 1-2 before the eater has adjusted to the base-heat. The sa tế-blast is: the bowl's OPENING ATTACK).

LAYER 3 — FRESH CHILI at the TABLE (the sliced bird's-eye chilies the eater adds themselves — the CONTROLLABLE LAYER, the self-service heat-boost for the eaters who want the broth's already-high heat pushed even higher. The fresh-chili's capsaicin is: UNCOOKED (the raw capsaicin's bioavailability is slightly higher than the cooked's, and the raw-chili's SHARP, STINGING heat is: texturally different from the simmered-capsaicin's rounded-diffuse heat — the raw-chili stings at the tongue's surface while the cooked-capsaicin warms the whole-mouth, and the combination of surface-sting + whole-mouth-warm is: the full TRPV1-activation-spectrum, every type of capsaicin-heat the tongue can perceive, all in one bowl).

The TOMATO is the heat's PARTNER — the same tomato-in-fish-broth the bún cá Nha Trang documented, but here at HIGHER CONCENTRATION (4-5 tomatoes per litre vs the Nha Trang's 1-2) and with a DIFFERENT ROLE: in the Nha Trang version, the tomato provides: acid + colour + gentle background-sweetness. In the Hải Phòng version, the tomato provides: BODY (the high-tomato-concentration dissolves the tomato's cell-wall-pectin into the broth, producing a THICK, PULPY, ALMOST-SAUCE-LIKE liquid rather than a clear-broth), ACID (the tomato's citric + malic acids, at the higher concentration, produce a TANGIER broth — the tanginess AMPLIFIES the capsaicin-heat by lowering the broth's pH to 4.5-5.0, and capsaicin's TRPV1-activation is pH-DEPENDENT: the lower pH enhances the receptor's sensitivity to capsaicin by 30-50%, making the same capsaicin-concentration feel HOTTER in an acidic broth than in a neutral one), and COLOUR (the tomato's lycopene + the sa tế's chili-carotenoid together produce the broth's VIVID ORANGE-RED — a colour more intense than any other broth in the collection, closer to a curry-sauce than to a noodle-soup).

The FISH: the bún cá cay uses WHITE-FLESHED FISH (cá thu / mackerel steaks, cá rô phi / tilapia fillets, or cá quả / snakehead — the Hải Phòng vendor uses whichever is freshest at the morning-market) prepared in a TWO-STEP process: FRIED FIRST (the fish-fillet or steak is dusted in turmeric-salt and fried in oil until a golden, Maillard-crusted exterior forms — the same pre-fry-then-add-to-soup technique the bún cá Sài Gòn and the canh chua's cá chiên used), then SIMMERED in the chili-tomato-broth for 5-10 minutes (the simmering softens the fried-crust's crunch to a dense, chewy, sauce-infused-skin, and the chili-tomato-broth penetrates the fish-fillet's interior through the crust's micro-cracks — the fish absorbs the HEAT, and the bite that was: neutral-sweet-white-fish before the simmering is now: SPICY-INSIDE, the capsaicin having migrated 3-5 mm into the flesh during the 5-10 minute contact).`,
  ingredientSections: [
    {
      title: 'The chili-tomato broth',
      items: [
        { amount: 5, name: 'ripe tomatoes, roughly chopped', note: `HIGH tomato:water ratio — the tomato is not a garnish but a STRUCTURAL INGREDIENT. The tomatoes' pectin dissolves into the broth, producing BODY. The tomatoes' citric acid lowers the pH to 4.5-5.0, AMPLIFYING the capsaicin's perceived heat by 30-50%.` },
        { amount: 4, name: 'bird\'s-eye chilies, halved (the broth\'s BASE-HEAT)', note: `4 chilies/1.5 L = roughly 30,000-40,000 SHU in the broth — medium-hot. Adjust up (6-8 chilies for the heat-seekers) or down (2 for the cautious — but below 2, the soup is no longer "bún cá CAY").` },
        { amount: 1.5, unit: 'L', name: 'water or light fish/pork bone broth' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
        { amount: 3, name: 'cloves garlic, smashed' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil' },
        { amount: 1, unit: 'tbsp', name: 'tomato paste (optional — deepens the colour and the tomato-umami concentration)' },
      ],
    },
    {
      title: 'Sa tế oil (the surface heat-layer)',
      items: [
        { amount: 2, unit: 'tbsp', name: 'sa tế (satay chili paste) dissolved in 2 tbsp neutral oil', note: `The RED OIL SLICK — ladled onto the broth's surface at serving. The oil-phase dissolves 3-5x more capsaicin than the aqueous-phase → the first spoonful that skims the surface = the bowl's PEAK HEAT. If sa tế unavailable: 2 tbsp chili oil (ớt bột + garlic + oil, heated until fragrant).` },
      ],
    },
    {
      title: 'The fish',
      items: [
        { amount: 400, unit: 'g', name: 'cá thu (mackerel) steaks 2 cm thick, or cá rô phi (tilapia) fillets', note: `FIRM white-to-dark-fleshed fish that holds together during frying AND simmering (soft fish like sole would disintegrate). The mackerel's oil-richness produces a richer, more savoury result; the tilapia's leanness produces a cleaner, lighter result. Either works.` },
        { amount: 1, unit: 'tsp', name: 'ground turmeric (the frying-dusting — colour + flavour)' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 3, unit: 'tbsp', name: 'neutral oil (for pan-frying the fish)' },
      ],
    },
    {
      title: 'The bowl',
      items: [
        { amount: 400, unit: 'g', name: 'bún (rice vermicelli), blanched' },
        { amount: 200, unit: 'g', name: 'rau sống: rau muống (water spinach), xà lách (lettuce), giá đỗ (bean sprouts)' },
        { amount: 30, unit: 'g', name: 'hành lá (scallion), sliced' },
        { amount: 30, unit: 'g', name: 'rau mùi (cilantro)' },
        { amount: 30, unit: 'g', name: 'thì là (dill) — the Hải Phòng fish-soup herb (the same dill the bún cá Nha Trang documented, here a GARNISH rather than a broth-aromatic)' },
        { amount: 2, unit: 'tbsp', name: 'hành phi' },
        { amount: 4, name: 'limes, in wedges' },
        { amount: 4, name: 'bird\'s-eye chilies, sliced (the TABLE-HEAT — the controllable layer)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the chili-tomato broth, fry the fish, simmer together — the fire builds',
      description: `THE BROTH: heat 2 tbsp oil in a large pot. Add the smashed garlic — fry 30 seconds until golden. Add the halved bird's-eye chilies — fry 30 seconds (the frying BLOOMS the capsaicin: the fat-soluble capsaicin dissolves into the oil faster than into water, and the fried-chili releases its capsaicin into the oil in 30 seconds of contact — the oil is now: CHILI-OIL, and the chili-oil becomes the broth's heat-foundation).

Add the chopped tomatoes — cook 3-4 minutes, stirring, until the tomatoes COLLAPSE (the cell-walls rupture, the juice releases, the pectin begins to dissolve into the liquid — the collapsed tomatoes are: a rough PULP rather than intact-pieces, and the pulp is: the broth's BODY-BUILDER, the same pectin-dissolution the bún bung's banana-blossom documented for colour, here for THICKNESS).

Add tomato paste if using (the tomato paste's concentrated lycopene + glutamate intensify both the colour and the umami — the paste is: the broth's AMPLIFIER, the same role the mắm tôm played in the bánh đa cua as a bass-note — here the paste deepens the tomato's own voice rather than adding a different voice).

Add 1.5 L water (or light broth), ginger, fish sauce, sugar, salt. Bring to a boil. Simmer 20-25 minutes (the extended simmer: dissolves more pectin → thicker broth, extracts more capsaicin from the chili-halves → hotter broth, and melds the tomato+chili+garlic+ginger into a UNIFIED FLAVOUR-BASE that is: no longer identifiable as "tomato plus chili plus garlic" but as a single, merged, "bún cá cay broth" character — the same flavour-melding every long-simmered broth in the collection documented).

FRY THE FISH: while the broth simmers — dust the fish steaks/fillets with turmeric + salt. Heat 3 tbsp oil in a pan to medium-high. Pan-fry the fish 2-3 minutes per side — the turmeric-dusted surface CRISPS to a golden-brown, curcumin-tinted crust (the same turmeric-fry-colour the miến lươn's lươn xào documented). The interior: cooked 70-80% through (the centre may still be slightly translucent — the simmering will finish it).

ADD THE FRIED FISH TO THE BROTH: gently lower the fried fish-pieces into the simmering chili-tomato broth. Simmer 5-8 minutes (the broth's heat finishes cooking the fish's centre to 74°C+, the chili-tomato-broth penetrates the fried-crust's micro-cracks, the capsaicin migrates 3-5 mm into the flesh, and the fish transitions from: fried-crispy-outside / raw-inside to: SPICY-INFUSED-THROUGHOUT, the fried-crust softened to a dense, chewy, chili-sauce-soaked skin that is: no longer crispy but INTENSELY FLAVOURED — the crust absorbed the broth's capsaicin+tomato+garlic at 3-5x the concentration the plain-flesh absorbed, making the crust the HOTTEST bite of the fish).

THE BROTH at 25 minutes: VIVID ORANGE-RED (the tomato's lycopene + the chili's capsanthin-carotenoid + the turmeric's curcumin from the fried fish's surface-wash — three pigments from three sources, converging on the same orange-red wavelength), THICK (the pectin-body — the broth coats the spoon in a heavy, pulpy, almost-sauce-like film — thicker than any clear-broth noodle-soup, thinner than the lẩu's coconut-curry, the texture of: a diluted tomato-sauce rather than a traditional broth), HOT (the capsaicin at 30,000-40,000 SHU — the tongue tingles after the first spoonful, the warmth builds over 3-4, and the heat plateaus at 6-7 spoonfuls at a SUSTAINED-BURN that the Hải Phòng local considers: normal, and the Hà Nội visitor considers: concerning), and carrying the TOMATO-CHILI-GARLIC TRIAD that IS the bún cá cay's specific aromatic identity (the three ingredients' volatiles — the tomato's (Z)-3-hexenal, the chili's dihydrocapsaicin, the garlic's diallyl-disulfide — merge in the steam's plume into: ONE AROMA, the "bún cá cay smell" the Hải Phòng eater recognises from 20 metres away).`,
      tip: `The capsaicin's HEAT-AMPLIFICATION BY ACID (the broth's pH 4.5-5.0 from the tomato's citric acid increasing the perceived spiciness by 30-50%) is a documented TRPV1-RECEPTOR PHENOMENON: the TRPV1 channel (the same receptor capsaicin, piperine, gingerol and ethanol all activate) is: pH-SENSITIVE — at acidic pH (<6.0), the channel's activation-threshold DROPS (the channel opens at LOWER capsaicin-concentrations than it would at neutral pH), producing: MORE NERVE-FIRING per capsaicin-molecule, which the brain interprets as: MORE HEAT from the same amount of capsaicin. The tomato-acid therefore acts as a HEAT-MULTIPLIER — not by adding more capsaicin but by making the existing capsaicin MORE EFFECTIVE at activating the receptor. The Hải Phòng cook who adds 5 tomatoes to the broth is: unconsciously exploiting pH-dependent TRPV1-sensitisation to make the soup spicier without adding more chili. The tomato is not just a flavour-ingredient — it is a CAPSAICIN-AMPLIFIER.`,
    },
    {
      title: 'Assemble — sa tế surface, dill crown, the fire-bowl arrives',
      description: `BLANCH the bún. Divide into 4 bowls. Add blanched rau muống, raw bean sprouts.

PLACE THE FISH: lift the broth-simmered, chili-infused fish-pieces from the pot (gently — the softened-crust fish is fragile). Place 1-2 pieces per bowl — the golden-brown-turned-orange fish, the fried-crust now saturated with the orange-red broth, the flesh inside: white, flaky, SPICY (the capsaicin that migrated 3-5 mm inward during the simmering is: detectable in the flesh as a SLOW-BUILDING heat that arrives 2-3 seconds after the fish enters the mouth — the delay is: the capsaicin diffusing from the fish's interior to the tongue's surface, and the delayed-onset is: DIFFERENT from the broth's immediate-heat, producing a TWO-WAVE heat experience: wave 1 = the broth's instant capsaicin, wave 2 = the fish's delayed capsaicin, the two waves separated by 2-3 seconds, and the two-wave-heat is: more COMPLEX and more LASTING than the single-wave-heat the broth alone would produce).

LADLE THE BROTH — the vivid orange-red, thick, pulpy, capsaicin-loaded liquid fills the bowl. The broth contacts the bún (the noodles absorb the spicy broth immediately — the bún's porous starch-gel is: a CAPSAICIN-SPONGE, absorbing the dissolved capsaicin into its matrix, making the noodle itself SPICY after 30 seconds of contact), the rau muống (the water spinach's hollow stems fill with the spicy broth — each stem = a tiny CHILI-BROTH-TUBE, the same broth-tube the bánh đa cua documented, here delivering capsaicin-heat rather than crab-sweet), and the bean sprouts (the sprouts' turgor-crunch provides: the COOL-CRUNCH-RELIEF the hot-broth demands — the raw sprout's 95% water-content is: a temperature-reset, the cold-water-crunch between the hot-broth-sips).

LADLE THE SA TẾ OIL on the broth's surface — 1 tablespoon per bowl. The RED OIL SLICK spreads across the broth's surface, and the oil's concentrated-capsaicin forms: the PEAK-HEAT-LAYER that the first spoonful skims.

SCATTER: scallion, cilantro, hành phi. And — the Hải Phòng bún cá cay's specific herb — DILL (thì là): torn fronds of fresh dill scattered over the hot broth, the dill's carvone volatilising in the broth's steam and producing the same WARM-SWEET-CARAWAY aroma the bún cá Nha Trang's dill documented — but here the carvone is arriving in a SPICY CONTEXT (the dill's warm-sweet meets the capsaicin's hot-burn, and the meeting produces: a SWEET-IN-THE-FIRE sensation, the carvone's sweetness detectable THROUGH the capsaicin's heat like a melody heard through noise — the dill is the bún cá cay's SWEET NOTE inside the HOT CHORD).

Set limes and sliced fresh chilies at the table (the controllable-layer — the eater adds to taste).

THE FIRST SPOONFUL (from the surface — skimming the sa tế oil):

THE SA TẾ HIT: the concentrated capsaicin-oil contacts the tongue's surface at 50,000+ SHU (the oil-phase's higher-capsaicin-concentration), and the TRPV1 fires IMMEDIATELY — the heat is: SHARP, STINGING, SURFACE-FOCUSED (the oil sits on the tongue's surface without penetrating, producing a COAT of heat that the whole-mouth-broth-heat has not yet reached). The sa tế-heat is: the OPENING ATTACK, deliberate, aggressive, the bowl declaring: "I am the bún cá CAY, the word CAY means HOT, and I am DELIVERING."

THE BROTH: 1 second behind the sa tế — the aqueous-phase broth reaches the tongue's deeper receptors, and the broth-dissolved capsaicin produces: a BROADER, DEEPER, DIFFUSE heat that fills the whole-mouth (the aqueous capsaicin's lower-concentration-per-ml but larger-contact-area produces: a lower-intensity but wider-area activation than the sa tế's concentrated-surface-coat). The broth-heat is: the SUSTAINED BASE, the heat that lasts for the bowl's entire duration, building with each spoonful.

THE TOMATO: the tomato's citric acid arrives alongside the capsaicin, and the acid's pH 4.5-5.0 SENSITISES the TRPV1 (the pH-dependent amplification), and the sensitised-receptor registers the broth's capsaicin as: HOTTER THAN IT IS — the tomato is the INVISIBLE SPICE, the spice that adds no capsaicin but makes the existing capsaicin feel like MORE.

THE DILL: at second 3-4, the dill's carvone arrives at the retronasal — the warm-sweet-herbal note FLOATING ABOVE the capsaicin-heat like a bird above a fire. The carvone is: NOT DESTROYED by the capsaicin (the two compounds activate DIFFERENT receptors — carvone activates the olfactory receptors in the nasal cavity; capsaicin activates TRPV1 in the oral cavity — and the two receptor-systems operate INDEPENDENTLY, meaning the nose smells "sweet dill" at the same moment the mouth feels "hot chili," and the brain combines them as: "sweet-smelling fire").

THE FISH: the teeth bite through the broth-softened crust (the fried-skin, now: dense, chewy, orange-stained, carrying the HIGHEST capsaicin-concentration per gram — the crust is the HOTTEST BITE in the bowl), and enter the white-flaky interior (the flesh's delayed-capsaicin arriving 2-3 seconds after the crust's immediate-capsaicin — the TWO-WAVE HEAT: crust-wave + flesh-wave, the same double-onset the sa-tế-vs-broth double-onset documented but here from SOLID rather than LIQUID, and the solid-double is: MORE LASTING per bite because the chewing releases the capsaicin GRADUALLY over 4-5 chews rather than in a single sip).

SQUEEZE LIME — the citric acid's ADDITIONAL pH-drop amplifies the capsaicin further (the already-acidic broth drops from pH 4.5 to pH 3.5-4.0 at the lime-contact-point, and the TRPV1 sensitisation INCREASES — the lime-squeeze is: the FINAL HEAT-BOOST, the nuclear option, the moment the eater who adds lime commits to the full bún cá cay experience at maximum volume).

Bún cá cay Hải Phòng is the collection's HOTTEST noodle soup — hotter than the bún bò Huế (which carries chili-oil but at lower SHU), hotter than the lẩu cá linh (which carries chili as a side-condiment, not as a broth-ingredient), and carrying the most COMPLEX HEAT-ARCHITECTURE: three capsaicin-layers (sa tế oil / broth / fresh-chili) + two capsaicin-delivery-modes (liquid-immediate / solid-delayed) + one pH-amplifier (tomato-acid) + one pH-booster (lime) = a 7-ELEMENT HEAT-SYSTEM that the single-chili-sauce bowl cannot approach. The heat is the bowl's PURPOSE, the heat is Hải Phòng's answer to the cold-grey Tonkin-Gulf winter, and the heat is: the reason the Hải Phòng eater sits on a plastic stool at 7 AM in January, eating a bowl of orange-red fire, sweating, nose running, and smiling — because the heat is the medicine, and the medicine is the breakfast, and the breakfast is: the best thing that happened today so far.`,
      tip: `The TWO-WAVE HEAT (sa-tế-surface-hit at second 0-1, then broth-dissolved-capsaicin at second 2-3; and separately: fried-crust-immediate at bite-second 0, then flesh-delayed at bite-second 2-3) produces a heat-experience the neuroscience literature calls TEMPORAL SUMMATION: when two capsaicin-doses arrive at the TRPV1 receptor within 3-5 seconds of each other, the receptor's RESPONSE to the second dose is AMPLIFIED by the still-active signal from the first (the first dose opens the TRPV1 channel, and the channel remains open for 3-5 seconds after the first capsaicin-molecules dissociate — the second dose arrives while the channel is still primed, and the primed-channel responds with 20-40% MORE nerve-firing than it would have to the second dose alone). The temporal-summation means: the bún cá cay's PERCEIVED heat is 20-40% HIGHER than the sum of its individual capsaicin-doses would predict — the multi-wave-delivery is not just architecturally interesting but PHARMACOLOGICALLY SYNERGISTIC. The bowl is hotter than the arithmetic says it should be.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
