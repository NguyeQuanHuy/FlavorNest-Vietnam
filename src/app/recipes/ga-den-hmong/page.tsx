'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ga-den-hmong',
  title: `Gà Đen H'Mông (Black Chicken Herbal Stew — The H'Mông's Melanistic Breed)`,
  subtitle: `Gà đen — the H'Mông's BLACK CHICKEN, a breed whose skin is black, whose bones are black, whose meat is dark-grey, whose organs are black, and whose comb and wattles are purplish-black — slow-braised with a bouquet of medicinal herbs (đương quy, kỷ tử, táo tàu, hoàng kỳ) into a jet-black, collagen-rich, deeply savoury herbal broth that the highland serves as MEDICINE-FOOD for new mothers, the recovering ill, the winter-worn, and anyone the family considers in need of the most CONCENTRATED nourishment the kitchen can provide.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '2 hr 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/ga-den-hmong.jpg',
  intro: `The gà đen H'Mông (H'Mông black chicken) is a MELANISTIC chicken breed — a bird whose entire body carries FIBROMELANOSIS, a genetic condition (caused by a complex rearrangement on chromosome 20 that upregulates the EDN3 gene, overproducing the pigment MELANIN in every tissue) that produces: BLACK SKIN (the dermis and epidermis are saturated with eumelanin — the same melanin that pigments human dark skin, here at MAXIMUM concentration), BLACK BONES (the periosteum and the bone-marrow cavity are melanised — the bones are jet-black when cut, a feature no other food-animal in the Vietnamese or global kitchen displays), DARK-GREY MEAT (the muscle tissue carries elevated melanin in the intramuscular connective tissue, producing a meat that is: darker than standard chicken, darker than duck, approaching the darkness of some game birds), and BLACK INTERNAL ORGANS (the liver, heart, gizzard and intestines are all darkened by the melanin's overproduction).

The breed is ANCIENT — genetically traced to a single mutation event that occurred roughly 800-1,000 years ago in Southeast/East Asia, and the breed spread through the highland ethnic communities (H'Mông, Tày, Dao in Vietnam; Hmong in Laos; hill-tribe communities in southern China) as a DUAL-PURPOSE animal: egg-producer (the hen lays 80-120 eggs per year, smaller than the commercial breed's 250-300 but produced WITHOUT supplemental feed — the black chicken free-ranges on the highland, eating insects, worms, seeds and wild herbs) and MEDICINE-FOOD (the melanistic tissues have been valued in traditional Chinese and Vietnamese medicine for centuries as a "warming," "blood-tonifying," "qi-strengthening" food — the TCM classification is: warm-nature, sweet-flavour, entering the liver-and-kidney meridians).

THE MELANIN'S role in the FLAVOUR is: debated but measurable. The melanin itself is: TASTELESS (melanin is a large, insoluble polymer that does not dissolve in the broth or interact with taste receptors). But the melanin's PRECURSORS (tyrosine and DOPA, the amino acids that the melanin-synthesis pathway consumes) are present at LOWER concentrations in the black chicken's muscle than in the standard chicken's (the melanin-synthesis consumes 10-20% of the tissue's available tyrosine, diverting it from the free-amino-acid pool that contributes to the meat's savoury-umami taste). The result: the black chicken's meat has a SLIGHTLY DIFFERENT amino-acid profile than standard chicken — less free tyrosine, slightly more free glutamate (the melanin-pathway's consumption of tyrosine shifts the tissue's amino-acid equilibrium, and the glutamate pool expands to compensate). The net flavour-effect is: the black chicken tastes SLIGHTLY MORE SAVOURY and SLIGHTLY LESS SWEET than standard chicken — a difference that is subtle (blind-tasting panels report it at 60-70% identification accuracy, vs 50% chance-level), but that the experienced H'Mông cook insists is: real, important, and the reason the black chicken is used for medicine-food and the white chicken is used for everyday eating.

THE HERBAL STEW format is Chinese-Vietnamese MEDICINE-FOOD (yào shàn, 药膳 — literally "medicine meal"): a preparation where the cooking IS the medicine, and the food IS the prescription. The herbs are: ĐƯƠNG QUY (Angelica sinensis — "female ginseng," used in TCM for blood-tonification, containing ligustilide as its principal bioactive compound), KỶ TỬ (Lycium barbarum — goji berries, containing zeaxanthin and polysaccharides, used for liver and eye health), TÁO TÀU (Ziziphus jujuba — jujubes, containing saponins and flavonoids, used for calming and blood-tonification), HOÀNG KỲ (Astragalus membranaceus — astragalus root, containing astragaloside IV, used for immune-strengthening and qi-tonification). The four herbs together form a CLASSIC TCM "four-herb tonic" that the Vietnamese highland's medicine-food tradition inherits intact from the Chinese pharmacopoeia.

The STEW'S COLOUR is the gà đen's most dramatic visual: the broth is JET-BLACK to VERY DARK BROWN (the melanin from the skin, bones and connective tissue dissolves PARTIALLY into the broth during the 2-hour simmer — the melanin polymer's smaller fragments leach into the liquid, tinting it progressively darker as the simmering continues). The black broth is: visually STRIKING (a bowl of jet-black soup with dark-grey meat floating in it — the darkest preparation in the collection, darker even than the thắng cố's brown-red), and culturally SIGNIFICANT (the darkness is read as POTENCY — the TCM and Vietnamese folk-medicine traditions associate dark colour with strong medicine, the same colour-as-potency association that makes the gấc's vivid red a symbol of vitality and the bánh ít's black a symbol of ancestral power).`,
  ingredientSections: [
    {
      title: 'The chicken',
      items: [
        {
          amount: 1,
          name: 'gà đen H\'Mông (black chicken), whole, roughly 1-1.5 kg, cleaned',
          note: `The H'Mông black chicken (also called gà ác, Silkie-type, or gà đen bản địa — indigenous black chicken). The ENTIRE bird is used — skin-on (the melanised skin contributes the broth's dark colour), bone-in (the melanised bones contribute melanin-fragments + collagen + marrow), organs included (the black liver, heart and gizzard, cleaned, are cooked inside or alongside the bird). If unavailable: Chinese Silkie chicken (ô cốt kê / 烏骨鷄, sold at Chinese groceries — the same fibromelanosis breed, just called by a different name) is the exact equivalent. Standard (white) chicken produces a NUTRITIONALLY similar but VISUALLY and CULTURALLY different result — the broth will be golden, not black, and the medicine-food association is weakened.`,
        },
      ],
    },
    {
      title: 'The medicinal herbs (thuốc bắc — TCM herb bouquet)',
      items: [
        { amount: 15, unit: 'g', name: 'đương quy (Angelica sinensis root), sliced', note: `The "blood herb" — ligustilide contributes a warm, celery-like, slightly bitter-aromatic to the broth. Sold at Chinese/Vietnamese herbal pharmacies.` },
        { amount: 20, unit: 'g', name: 'kỷ tử (goji berries / Lycium barbarum)', note: `The sweet-fruity-red garnish: the goji softens during simmering, contributing a faint, date-like sweetness and a bright-red colour-accent against the jet-black broth.` },
        { amount: 6, name: 'táo tàu (jujubes), dried, pitted', note: `The calming-sweet: jujubes contribute a warm, date-like, honey-adjacent sweetness that rounds the đương quy's bitterness.` },
        { amount: 10, unit: 'g', name: 'hoàng kỳ (Astragalus root), sliced', note: `The "qi herb" — a faintly sweet, woody, root-flavour that adds body to the broth without competing with the chicken's savoury.` },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
      ],
    },
    {
      title: 'The broth',
      items: [
        { amount: 2, unit: 'L', name: 'water' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce or 1 tsp salt' },
        { amount: 3, name: 'scallions, tied in a knot (added in the last 10 min)' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'Optional additions',
      items: [
        { amount: 100, unit: 'g', name: 'hạt sen (lotus seeds), pre-boiled — the soft-starchy companion' },
        { amount: 50, unit: 'g', name: 'long nhãn (dried longan flesh) — the sweet-chewy fruit' },
        { amount: 2, name: 'lá chanh (kaffir lime leaves) — the citrus-aromatic, added last 5 min' },
      ],
    },
  ],
  steps: [
    {
      title: 'Blanch, build the herbal broth, slow-braise 2 hours — the black chicken yields its colour and its collagen',
      description: `BLANCH: bring a large pot of water to a boil. Submerge the whole cleaned black chicken for 3 minutes — lift out, rinse under cold water. The blanching removes: blood-scum (the melanised blood-protein, which is darker and more voluminous than standard chicken's — the scum is VERY DARK, almost black, and removing it prevents the finished broth from being murky-cloudy rather than clean-dark).

BUILD: in a clean pot (clay pot or heavy-bottomed stainless — the clay pot is traditional and retains heat more evenly for the 2-hour braise), place: the blanched whole chicken, 2 L water, the đương quy slices, the goji berries, the pitted jujubes, the hoàng kỳ slices, and the bruised ginger. The herbs should be: either LOOSE in the broth (the traditional method — the herbs float freely, and the eater encounters them in the bowl) or TIED in a cheesecloth bouquet (the neat method — easier to remove before serving, no herb-fragments in the bowl).

Bring to a boil. SKIM — the second-round scum rises (lighter than the blanching-scum, but still present — skim for 10 minutes). Reduce to a GENTLE SIMMER (the lowest bubble — the broth should MURMUR, not boil. Vigorous boiling emulsifies the chicken's rendered fat into the broth, producing a cloudy, greasy broth; the gentle simmer keeps the fat floating on the surface in clear pools, and the broth below is: CLEAR-DARK, not cloudy-dark).

SIMMER 2 HOURS:

HOUR 0-1: the chicken's SKIN releases melanin — the melanin polymer's smaller fragments (melanin is not a single molecule but a FAMILY of polymerised tyrosine-derivatives, ranging from small oligomers of 3-5 units to large polymers of 100+ units; the smaller oligomers are PARTIALLY SOLUBLE in the hot broth, and they leach from the skin into the liquid during the first hour). The broth darkens: from clear-gold (at minute 0) to AMBER-BROWN (at minute 30) to DARK-BROWN (at hour 1). The BONES contribute: marrow (the melanised marrow is black but releases the same collagen and fat that standard marrow does — the colour is melanin, the nutrition is collagen+fat, and the two are independent) and calcium (the bones' calcium-phosphate dissolves slowly into the mildly-acidic broth — the lactic acid from the blanching + the đương quy's organic acids lower the broth's pH to ~5.5-6.0, enough to promote calcium-dissolution at 0.5-1 mg/min over 2 hours = roughly 60-120 mg of dissolved calcium per L of broth, a nutritionally SIGNIFICANT contribution).

HOUR 1-2: the chicken's COLLAGEN converts to GELATIN — the connective tissue (tendons, cartilage, skin's dermal collagen) dissolves into the broth, producing a THICK, LIP-COATING, RICH body that the 1-hour broth lacks. The meat: TENDER (the collagen-conversion has softened the previously-tough drumstick and thigh-meat to fall-off-bone), and the dark-grey flesh is now: easily shreddable, carrying the slightly-more-savoury-slightly-less-sweet flavour profile the melanin-pathway's amino-acid-shift produced.

THE HERBS' CONTRIBUTION DURING THE SIMMER:

ĐƯƠNG QUY: the ligustilide dissolves into the broth's lipid-phase (the compound is fat-soluble, dissolving in the chicken's rendered fat floating on the surface). The broth acquires a faint, warm, CELERY-LIKE, slightly bitter-herbal aroma that is: the đương quy's SIGNATURE, the aroma the TCM practitioner and the H'Mông grandmother both associate with "blood medicine."

GOJI BERRIES: the berries soften and PLUMP (absorbing broth, swelling to 2x their dried size). They release: zeaxanthin (the orange-red carotenoid — it dissolves into the broth's fat-phase, contributing a faint orange tint that is INVISIBLE in the jet-black broth but that the palate detects as a micro-sweetness) and polysaccharides (the goji's specific beta-glucans, which dissolve into the aqueous broth and contribute a faint, starchy, body-thickening effect).

JUJUBES: they soften to a date-like, mushy, sweet mass. Their saponins dissolve into the broth, contributing a faint, herbal-sweet, slightly soapy-smooth mouthfeel (saponins are surfactants — they lower the broth's surface tension slightly, producing a broth that FEELS smoother on the tongue than a saponin-free broth would).

HOÀNG KỲ: the root-slices soften but do not dissolve (astragalus is fibrous and dense — it releases its astragaloside IV and polysaccharides slowly, contributing a faint woody-sweet background to the broth over the 2-hour simmer).

THE BROTH at hour 2: JET-BLACK to VERY DARK BROWN (the melanin's oligomers, fully leached from the skin and bones), THICK (the collagen-gelatin, coating the spoon in a dark, viscous, slow-dripping film), HERBAL-SAVOURY (the đương quy's ligustilide + the chicken's dissolved amino acids + the goji's sweet + the jujube's date-warm = a FOUR-NOTE herbal-savoury chord), and carrying a MINERAL DEPTH (the dissolved calcium from the bones + the iron from the melanised marrow + the chicken's own iron = a broth that tastes of: dark, mineral, ancient, nourishing — the taste the H'Mông associate with "strong medicine" and that the Western palate would describe as "intensely savoury with an herbal, slightly bitter, mineral finish").

Season: fish sauce or salt — lightly (the herbal broth's own complexity provides most of the flavour; heavy seasoning masks the herbs' nuances).`,
      tip: `The fibromelanosis gene (the EDN3 overexpression) produces melanin in the chicken's EVERY tissue — but the melanin's CONCENTRATION varies by tissue: skin (the highest — the dermis is saturated), periosteum/bone surface (very high), connective tissue (high), muscle (moderate — the melanin is in the intramuscular connective tissue, not in the muscle fibres themselves), and organs (moderate to high, depending on the organ's connective-tissue content). The melanin concentration determines the BROTH'S DARKNESS: a stew made from skin-on, bone-in black chicken produces a JET-BLACK broth; a stew from skinless, boneless black-chicken breast produces a DARK-GREY broth (the breast-meat's moderate melanin contributes less to the broth than the skin and bones' concentrated melanin). The whole bird — skin, bones, organs — is therefore culinarily and visually NECESSARY: the darkness IS the dish, and the darkness comes from the skin and the bones, not from the meat.`,
    },
    {
      title: 'Serve the black bowl — the medicine-food, the colour-as-potency, the highland\'s deepest nourishment',
      description: `LIFT the whole chicken from the broth (use tongs and a slotted spoon — the fall-apart-tender chicken breaks easily; handle gently). Place on a cutting board. The chicken is: jet-black skin (slightly softened but still melanised), dark-grey meat (visible at the joints where the skin has pulled back during cooking), and releasing the herbal-smoky-savoury aroma of the broth it was simmered in.

PORTION: chop through the bone (the traditional Vietnamese chicken-portioning — a heavy cleaver through the joints and the mid-bones, producing irregular, bone-in pieces that the eater gnaws and sucks) or pull the meat from the bones in large pieces (the modern, boneless approach). The cut-face of every bone: JET-BLACK periosteum, dark marrow, the melanin visible in the bone's cross-section as a band of pigment that standard chicken-bones do not carry.

STRAIN the broth (optional — the herb-pieces can stay in or be removed). The strained broth: jet-black, thick, steaming, the surface carrying small pools of golden-dark fat (the chicken's rendered fat, tinted by the melanin and the đương quy's ligustilide into a dark-gold rather than the standard chicken-fat's pale-yellow).

SERVE: ladle the jet-black broth into bowls. Add chicken-pieces (3-4 bone-in pieces per bowl). Add the softened goji berries (their bright-red colour is the ONLY colour-contrast in the black bowl — the red dots in the black liquid, vivid and striking), the softened jujubes (dark-brown, date-like, sweet), and the lotus seeds if using (white, soft-starchy — the SECOND colour-contrast: white dots alongside the red dots in the black broth).

Add the knotted scallion (added in the last 10 minutes of simmering — the green of the scallion is the THIRD colour: red, white, green in a field of black. The colour-triad in the black broth is: accidental but BEAUTIFUL — the goji's red, the lotus-seed's white, the scallion's green, each one a point of light in the darkness).

Scatter lá chanh (torn kaffir lime leaves, if using — the citronellal's bright-citrus aroma cutting through the broth's dark, herbal, mineral heaviness, the same citrus-as-lightener the lẩu thắng cố dê deployed against the goat's gamey. The lime-leaf here lightens the broth's MEDICINAL heaviness rather than an animal's gaminess — different target, same mechanism: citrus-terpene competes for olfactory attention against a darker, heavier aroma-complex, and the competition produces BALANCE).

THE BOWL: jet-black broth (the darkest liquid in the collection — darker than coffee, darker than soy sauce at this dilution, darker than any other food-liquid the eater has seen), with: dark-grey chicken-pieces (the melanistic meat, barely distinguishable from the broth's darkness — the meat DISAPPEARS into the broth, emerging from the black only when the spoon lifts it), red goji-dots, white lotus-seeds, green scallion-threads, and the STEAM rising (carrying the đương quy's celery-warm, the goji's sweet, the chicken's savoury, and the melanin's faint, mineral, iron-adjacent note — the melanin-oligomers in the broth are detectable by the nose as a faint, dark, iron-like background that standard chicken-broth does not carry).

THE SPOONFUL: sip — the broth is: THICK (the gelatin-lip-coat, heavier than any chicken-soup the collection has documented — the black chicken's high collagen-yield, concentrated by 2 hours of gentle simmering, produces a broth that coats the lips in a dark, glossy, viscous film that lasts 15-20 seconds), HERBAL-SAVOURY (the đương quy's celery-bitter + the chicken's glutamate-savoury + the jujube's date-sweet = a THREE-NOTE harmony that the TCM tradition calls "warming and tonifying" and that the Western palate would call "deeply savoury with an herbal-bitter finish"), and MINERAL (the dissolved calcium + the iron + the melanin-oligomers, producing a mineral-depth that standard chicken-soup approaches only after 6-8 hours of extraction, here achieved in 2 hours because the black chicken's melanised tissues release their minerals FASTER than standard chicken's — the melanin's acidic functional groups promote the dissolution of the bone's calcium, acting as a CHELATING AGENT that accelerates mineral-extraction by 30-50% compared to non-melanised bones).

THE CHICKEN MEAT: dark-grey, tender-to-falling-apart, carrying the herbal-broth's flavour infused through 2 hours of simmering. The meat tastes: SAVOURY (more glutamate than standard chicken — the melanin-pathway's amino-acid-rebalancing), HERBAL (the đương quy's and the astragalus's bioactives have penetrated the meat's surface during the simmering), and RICH (the collagen-converted-to-gelatin meat is: silky, smooth, dissolving-tender, the same bone-in-braised-chicken-tenderness every hầm recipe has documented, here with the added DEPTH the melanised tissue provides).

THE GNAW: bite a bone-in piece — the teeth meet: the dark-grey meat (tender, herbal-infused, savoury), then the BLACK BONE (the periosteum's melanised surface, jet-black, visible as a stark colour-contrast against the pale-inside-the-bone marrow-cavity). The bone-gnaw in the gà đen is: VISUAL as much as GUSTATORY — the eater SEES the black bone, and the seeing is the medicine-food's proof: the darkness is the potency, and the potency is in the bone, and the bone is black because the GENE made it black, and the gene is the breed, and the breed is the H'Mông's, and the H'Mông's chicken is: 800-1,000 years of genetic heritage, visible in one bone's cross-section.

TEN HÀ GIANG DISHES, ONE PLATEAU: thắng cố (the communal organ-cauldron), cháo ấu tẩu (the poison-to-medicine congee), phở chua (the heretical cold phở), mèn mén (the geology-determined corn-starch), thịt trâu gác bếp (the kitchen-fire jerky), xôi ngũ sắc (the cosmos-mandala in rice), lẩu thắng cố dê (the karst-goat's terroir), bánh cuốn trứng (the minimalist egg-roll), rượu ngô (the distilled plateau), and now gà đen H'Mông (the melanistic medicine-food). Ten dishes, one karst plateau, one people, and the plateau's gift to the kitchen is: CONSTRAINT — the constraint of no rice (so corn), no lowland market (so whole-animal), no refrigeration (so smoke-drying), no pharmacy (so kitchen-as-pharmacy), and no ordinary chicken (so a chicken whose bones are black and whose broth is dark and whose medicine is in every spoonful). The constraint IS the cuisine, and the cuisine IS the highland's answer, and the answer — in every bowl and on every plate — is: we made what we could from what we had, and what we had was: limestone, corn, goats, a fire that never goes out, a forest that provides the yeast, and a chicken whose genes turned everything black. And it was enough.`,
      tip: `The gà đen H'Mông's FIBROMELANOSIS is shared by exactly ONE other globally-known chicken breed: the Chinese SILKIE (ô cốt kê, 烏骨鷄 — literally "black-bone chicken"). The two breeds carry the SAME genetic mutation (the EDN3 complex rearrangement on chromosome 20), and they are almost certainly DESCENDED from the same ancestral mutation-event roughly 800-1,000 years ago in Southeast/East Asia. The breeds diverged geographically: the Silkie went EAST (to the Chinese coast, where it was bred for fluffy, silk-like plumage, blue earlobes and five toes — the ornamental traits), and the H'Mông black chicken went WEST and SOUTH (to the Vietnamese highland, where it was bred for: nothing — it was kept as a free-ranging, unimproved, semi-wild utility bird, and the melanistic colour was preserved by GEOGRAPHIC ISOLATION rather than by intentional breeding). The Silkie is the ORNAMENTAL descendant. The H'Mông black chicken is the UTILITARIAN descendant. Same gene, two fates — the same-material-two-outcomes principle the bánh ướt Diên Khánh documented for rice-batter (steamed vs fried), here applied to GENETICS (ornamental-bred vs utility-bred from the same mutation).`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
