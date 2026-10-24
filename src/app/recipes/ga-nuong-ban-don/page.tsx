'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ga-nuong-ban-don',
  title: `Gà Nướng Bản Đôn (Charcoal-Grilled Free-Range Chicken — Buôn Đôn Style)`,
  subtitle: `A whole free-range chicken — small, lean, dark-muscled, the kind that runs the red-dirt yard of a Tây Nguyên homestead — butterflied, marinated in lemongrass and turmeric, clamped in a bamboo grilling frame, and grilled slowly over low charcoal until the skin crisps to a turmeric-golden, lemongrass-scented, thin-as-paper shell and the flesh underneath stays moist and firm and tasting of the bird's own exercise. Dipped in muối ớt lá é — salt pounded with green chili and lá é, the wild Vietnamese basil the Ê Đê highlands grow and no lowland market sells.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min + marination',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/ga-nuong-ban-don.jpg',
  intro: `Bản Đôn — the Ê Đê village in Buôn Đôn district, 50 km northwest of Buôn Ma Thuột, famous in the tourist brochures for its elephant-taming history and famous to the Vietnamese food traveller for its grilled chicken — is the Tây Nguyên's answer to the question the collection has asked in every province: what happens when a cook has one good ingredient, one fire, and nothing else?

The ingredient is gà thả vườn — free-range chicken, specifically the small (1-1.2 kg dressed, vs the 1.8-2.2 kg industrial broiler), dark-feathered, hard-running, insect-eating, yard-roaming chicken the Ê Đê and Mnông households raise in the red-dirt compounds of the Central Highlands. This chicken is physically different from the lowland broiler: its muscles are darker (more myoglobin, from more exercise — the same high-myoglobin, high-iron, dark-muscle phenomenon the trâu's working-buffalo meat demonstrated), its fat is yellower (more carotenoids from the insect-and-forage diet, vs the broiler's pale fat from the grain-only feed), its skin is thinner (less subcutaneous fat — the running bird does not accumulate the fat layer the sedentary broiler stores), and its flavour is more INTENSE (the exercise concentrates the muscle's free amino acids — principally glutamate and inosinate — which are diluted in the broiler's water-inflated, rapid-growth muscle).

The marinade is minimal: lemongrass (bruised, sliced, rubbed into the scored flesh — the citral enters the muscle through the score-cuts, the same aromatics-through-scores approach every scored-and-marinated protein in the collection has used), turmeric (for colour and for the curcumin's fat-soluble yellow that dyes the skin golden during grilling), garlic, fish sauce and a trace of honey. The marinade is NOT the flavour — the CHICKEN is the flavour, and the marinade is the highlighter, the frame, the amplifier that says "notice this chicken" without saying "taste this marinade."

The grilling method is the Tây Nguyên's specific technology: the butterflied chicken is clamped in a kẹp tre — a split-bamboo frame, two lengths of bamboo tied together with the flattened chicken pressed between them, the frame propped at an angle beside (not over) the charcoal fire. The angled position means the chicken grills by RADIANT heat (infrared from the glowing coals, reflected off the chicken's surface) rather than by DIRECT heat (convection from flames rising directly under the chicken), and the difference is: slower (40-50 minutes vs 25-30 minutes for a direct-grill), more even (the radiant heat bathes the entire surface uniformly, vs direct heat's hot-spots-and-cold-spots), and less prone to flare-ups (the rendered fat drips onto the ground beside the fire, not onto the coals — no fat-flares, no charring, no bitter carbon-crusted spots).

The dipping condiment is the dish's HIGHLAND MARKER: muối ớt lá é — salt pounded with green chili and lá é (Ocimum gratissimum, the African/Asian wild basil, sometimes called "clove basil" in English, growing wild in the Đắk Lắk highlands at 500-800 m elevation). Lá é's flavour is: more pungent than Thai basil (húng quế), more clove-like (its principal volatile is eugenol — the same compound that gives clove its aroma, present in lá é at 40-60% of the essential oil vs Thai basil's 0-5%), and more camphoraceous (a secondary camphor note from the 1,8-cineole content). The lá é is the Ê Đê's herb — gathered wild, not cultivated, not sold in lowland markets, not available in Saigon's Vietnamese groceries — and its presence in the dipping salt is the geographic proof that the chicken was grilled HERE, in the highlands, where the lá é grows, and not in any lowland kitchen that cannot source it.`,
  ingredientSections: [
    {
      title: 'The chicken',
      items: [
        {
          amount: 1,
          name: 'whole free-range chicken, 1-1.2 kg, butterflied (backbone removed, pressed flat)',
          note: `Free-range / thả vườn / gà đồi — the dark-muscled, lean, intensely flavoured bird. Butterflied: cut along both sides of the backbone with kitchen shears, remove the backbone, open the bird flat, press the breastbone down until it cracks and the chicken lies flat. The flat shape = even grilling = the thickest part (the thigh) and the thinnest part (the breast tip) receive similar heat exposure.`,
        },
      ],
    },
    {
      title: 'The marinade — minimal, amplifying, not masking',
      items: [
        { amount: 3, name: 'stalks lemongrass, tender parts, minced fine' },
        { amount: 1, unit: 'tbsp', name: 'ground turmeric' },
        { amount: 4, name: 'cloves garlic, pounded' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'honey', note: `The trace sweetness — the honey's fructose caramelises on the skin during grilling, contributing to the golden-brown Maillard crust. A tablespoon only — enough to colour, not enough to candy.` },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
      ],
    },
    {
      title: 'Muối ớt lá é (highland chili-basil salt)',
      items: [
        { amount: 2, unit: 'tbsp', name: 'coarse sea salt' },
        { amount: 4, name: 'green bird\'s-eye chilies' },
        {
          amount: 10,
          name: 'lá é leaves (Ocimum gratissimum — wild basil / clove basil)',
          note: `The FOURTH highland ethnic-spice signature in the collection: mắc khén (Tày, Sơn La), hạt dổi (Thái đen, Sơn La), thảo quả (H'Mông, Sapa), and now LÁ É (Ê Đê, Đắk Lắk). Each highland ethnic group's food is marked by a specific aromatic that the lowlands do not use. Lá é's eugenol (40-60%) = clove-like warmth. If unavailable: Thai basil + 1 clove (crushed) approximates the flavour but not the identity.`,
        },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
      ],
    },
    {
      title: 'For grilling',
      items: [
        { amount: 1, name: 'charcoal fire (low, glowing embers — not flames)' },
        { amount: 1, name: 'bamboo grilling frame (kẹp tre) or a hinged wire grilling basket' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 1, name: 'plate of fresh herbs: lá é, húng quế, rau răm' },
        { amount: 1, name: 'plate of sliced cucumber, tomato, green banana' },
        { amount: 4, name: 'bowls of cơm lam (bamboo-tube rice, from the collection\'s cơm lam Ê Đê) or steamed rice' },
      ],
    },
  ],
  steps: [
    {
      title: 'Marinate the butterflied chicken 2-4 hours — the lemongrass enters through the scores',
      description: `Score the butterflied chicken on both sides — 3-4 diagonal cuts, 1 cm deep, into the thigh and breast meat. The scores: let the marinade penetrate (the lemongrass's citral and the turmeric's curcumin are both fat-soluble and enter the muscle through the cut-exposed surfaces), let the heat penetrate during grilling (the same score-as-heat-conduit every scored-meat in the collection documented), and let the rendered fat escape during grilling (the same score-as-basting-channel the cá thu used).

Mix the lemongrass, turmeric, garlic, fish sauce, honey, oil and pepper into a paste. Rub over every surface — into the scores, under the skin (lift the skin at the breast and rub the paste directly onto the muscle — the sub-skin cavity is where the marinade has maximum contact and minimum evaporation), and inside the cavity.

Marinate 2-4 hours in the refrigerator — or 30 minutes at room temperature if time is short. The longer marination allows the citral to penetrate 3-5 mm into the muscle (vs 1-2 mm at 30 minutes), and the turmeric to saturate the skin's outer keratin layer (producing a deeper, more stable golden colour that does not wash off during the grilling's initial steaming phase).`,
      tip: `The free-range chicken's LOWER FAT and HIGHER MYOGLOBIN compared to a broiler have specific grilling consequences: less subcutaneous fat means LESS self-basting (the bird does not have the cá thu's 8-12% fat reserve to keep itself moist — the cook must compensate by: using low-and-slow radiant heat rather than high direct heat, and by basting manually with the remaining marinade during grilling). Higher myoglobin means the cooked meat retains a PINKISH tinge near the bone even when fully cooked (the myoglobin's denaturation is incomplete at the lower temperatures the slow grill achieves — the pink is NOT rawness, it is residual myoglobin, the same phenomenon smoked chicken and slow-roasted turkey display). The free-range bird is HARDER to grill well than a broiler — less forgiving, less self-basting, more prone to drying — and the Bản Đôn cook's low-and-slow, radiant-heat, bamboo-frame method is the TECHNIQUE that compensates for the bird's leanness.`,
    },
    {
      title: 'Grill low and slow, radiant heat, 40-50 minutes — the bamboo-frame method',
      description: `Build a charcoal fire. Let it burn down to glowing embers — no flames, no smoke (flames = direct convective heat = hot spots + charring; embers = radiant infrared = even, gentle, controllable). Spread the embers in a pile 30 cm wide.

Clamp the marinated, butterflied chicken in the bamboo frame (or wire basket) — skin-side facing the fire first. Prop the frame at a 60-70° angle BESIDE the fire, 20-25 cm from the nearest ember. The chicken faces the fire's radiant heat but is NOT directly above it — the fat drips onto the ground, not onto the coals.

GRILL 20-25 minutes on the first side (skin-side toward fire). The progression:

MINUTES 0-10: the skin tightens, the turmeric-lemongrass marinade sizzles, the first golden-brown spots appear where the marinade's honey caramelises (the same Maillard-plus-caramelisation the bò lúc lắc's honey-glaze produced, here at the lower, slower temperature of radiant grilling). The fat under the skin begins to render — slowly, because the radiant heat is gentler than a direct flame.

MINUTES 10-20: the skin is golden across the entire surface — the turmeric's curcumin (yellow) + the honey's caramelisation (brown) + the Maillard (amber) producing a three-layer colour that is deeper and more complex than any single-mechanism browning. The flesh at the score-marks is opaque and firming. Baste with remaining marinade at minute 15.

MINUTES 20-25: the first side is done — the skin is crispy-thin-golden, the flesh is opaque to the bone, and the juices at the thickest point (the thigh-joint) run clear when pierced.

FLIP — turn the frame 180°, the second side now facing the fire. Grill 15-20 more minutes (the second side is thinner — the breast — and grills faster). Baste at minute 30.

TOTAL: 40-50 minutes for a 1 kg bird. The low-and-slow radiant method takes nearly twice as long as a direct grill (25-30 min), and the extra time is the MOISTURE INSURANCE: at the lower temperature of radiant heat (the chicken's surface reaches roughly 150-160°C vs a direct grill's 200-250°C), the muscle's collagen converts to gelatin at a rate that matches the moisture's evaporation rate — the gelatin REPLACES the departing moisture in the muscle's structure, producing flesh that is: firm (the collagen-to-gelatin conversion has completed), moist (the gelatin holds the remaining water in a gel-matrix that the muscle's contracted fibres cannot squeeze out), and tender (the converted gelatin is softer than the original collagen). At high direct heat, the evaporation outpaces the conversion, and the flesh is: firm but DRY (the water left before the gelatin formed). Low-and-slow = moist. High-and-fast = dry. The Bản Đôn method chooses low-and-slow because the lean bird cannot afford to lose the moisture that high heat would take.`,
      tip: `The radiant-heat method — chicken angled BESIDE the fire, not OVER it — is the same grilling geometry the Argentine asado, the Uruguayan parrilla, and the South African braai use for whole animals: the meat faces the fire's infrared radiation but is not in the fire's convective air stream. The geometry's advantage: RADIANT heat transfers energy at a rate proportional to the fourth power of the temperature (Stefan-Boltzmann law), which means the cook can fine-tune the heat input by adjusting the DISTANCE (a 5 cm change in distance changes the radiant flux significantly), while CONVECTIVE heat (direct flame) is turbulent, unpredictable and uncontrollable. The bamboo frame's adjustable angle is the Bản Đôn cook's thermostat: closer to the fire = more heat; further = less; and the cook adjusts continuously, reading the chicken's skin colour and sizzle rate the way a jazz musician reads the room.`,
    },
    {
      title: 'Pound the muối ớt lá é, chop, serve — the highland set',
      description: `MUỐI ỚT LÁ É: in a mortar, pound the green chilies with the salt — 15 seconds, the chilies split, the seeds scatter. Add the lá é leaves — pound 10 more seconds, the leaves bruise and release their eugenol-heavy essential oil (the kitchen fills with a clove-warm, camphoraceous, pungent green aroma that the lowland Thai basil does not produce). Squeeze the lime in. Stir. The condiment: green-flecked, salt-chunky, eugenol-warm, lime-sharp, chili-hot — the Ê Đê highlands in a saucer.

CHOP the grilled chicken: remove from the frame, set on a board. Chop through the bone with a heavy knife or cleaver — 3 x 5 cm pieces, each piece with skin, meat and bone. Arrange on a plate — the golden, turmeric-crusted pieces piled high, the lemongrass's citral still rising from the warm surface.

THE HIGHLAND SET: the chopped chicken on one plate. The muối ớt lá é in a saucer. The fresh herbs (lá é, húng quế, rau răm) on a plate. The cucumber, tomato and green banana on a plate. And — the pairing the Bản Đôn table insists on — the cơm lam: bamboo-tube rice, the sticky rice steamed inside a bamboo segment that the cơm lam Ê Đê recipe documented, split open at the table, the rice inside carrying the bamboo's sweet, green, woody flavour.

THE BITE: pick up a piece of chicken with the fingers (the Bản Đôn format is hand-eating, not chopstick-eating — the bone-in chopped pieces require the grip-and-tear the fingers provide). Dip in the muối ớt lá é. Bite — the skin shatters (thin, turmeric-golden, lemongrass-Maillard-crispy), the flesh yields (moist, firm, intensely chickeny — the free-range bird's concentrated glutamate and inosinate registering as a depth the broiler cannot reach), the lá é's eugenol arrives (warm-clove, throat-coating, persistent — lasting 15-20 seconds on the palate, longer than any other herb in the collection's condiment-file), and the lime's acid cuts through the fat.

Tear a piece of cơm lam — the bamboo-flavoured sticky rice, chewy, sweet, smoky from the bamboo's volatiles — and eat alongside the chicken. The rice's bamboo-sweet against the chicken's lemongrass-savoury is the highland pairing: two aromatics from two different plants (bamboo + lemongrass, both grasses, both tropical, both contributing terpene-rich volatile profiles), meeting in the mouth through the medium of rice and chicken.

Gà nướng bản Đôn is the Đắk Lắk collection's most REPRESENTATIVE dish — the dish every tourist eats, every local recommends, and every Đắk Lắk person names when asked "what is your province's food?" It is the highland's simplest argument: a good chicken, a low fire, a bamboo frame, a wild herb the lowlands cannot source, and the confidence that simplicity — when the ingredient is sufficient — is not laziness but precision.`,
      tip: `The four highland ethnic-spice signatures now documented: MẮC KHÉN (Tày, Sơn La — Zanthoxylum, numbing-citrus, TRPA1 activation), HẠT DỔI (Thái đen, Sơn La — Piper, warm-woody), THẢO QUẢ (H'Mông, Sapa — Amomum tsao-ko, smoky-camphor), and now LÁ É (Ê Đê, Đắk Lắk — Ocimum gratissimum, clove-eugenol). Each spice is: GEOGRAPHICALLY SPECIFIC (grows at specific elevations and latitudes), ETHNICALLY IDENTIFIED (associated with one ethnic group's cuisine), and AROMATICALLY UNIQUE (no overlap in principal volatile — Zanthoxylum's hydroxy-alpha-sanshool, Piper's piperine, Amomum's 1,8-cineole, Ocimum's eugenol). The four spices are four aromatic postcodes: smell any one and the nose knows which highland, which people, which kitchen.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
