'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'lau-thang-co-de',
  title: `Lẩu Thắng Cố Dê (Goat Thắng Cố — Đồng Văn's Stone-Plateau Hotpot)`,
  subtitle: `The thắng cố format — the H'Mông communal organ-stew the collection documented with horse/beef — here built from DÊ NÚI ĐÁ: the mountain goat that climbs the Đồng Văn karst's vertical limestone faces, eating the sparse, aromatic, mineral-rich herbs that grow in the rock's crevices and producing a meat that is: lean, intensely gamey, iron-dark, and carrying a TERROIR so specific that the goat-meat from the karst tastes different from goat-meat from the lowland because the ROCK'S HERBS are in the goat's MUSCLES.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '3 hr',
  rating: 4.8,
  baseServings: 6,
  heroImage: '/images/recipes/lau-thang-co-de.jpg',
  intro: `The collection's thắng cố #1 documented the FORMAT — the whole-animal communal stew with thảo quả, the market-day cauldron, the nothing-wasted principle. This recipe documents the GOAT VARIANT — the thắng cố dê that the Đồng Văn and Mèo Vạc districts serve as their SPECIFIC version, distinct from the horse/beef thắng cố of the broader Hà Giang highland.

The GOAT: dê núi đá — literally "stone-mountain goat" — is a small (25-40 kg adult weight), agile, semi-wild goat breed that the H'Mông and Lô Lô communities of the Đồng Văn karst plateau raise by FREE-GRAZING on the limestone cliffs. The goats are not penned or paddock-raised — they climb the vertical karst towers (the same 200-400 m limestone pinnacles that make the Đồng Văn plateau a UNESCO Geopark), foraging on the CREVICE FLORA: the herbs, grasses, shrubs and mosses that grow in the limestone's cracks and on the cliff-faces' thin soil. The crevice flora is: MINERAL-RICH (the limestone's dissolved calcium and magnesium enter the plant through root-uptake, and the plants' mineral content is 2-3x higher than lowland-pasture plants'), AROMATIC (many of the crevice-herbs are wild thyme, wild oregano, wild mint-family species whose essential oils — thymol, carvacrol, menthol — are the plants' defence against the plateau's UV-intense, wind-exposed, insect-scarce environment), and SPARSE (the thin soil supports fewer plants per m² than the lowland's paddock, and the goat walks 5-10 km per day to find enough to eat — the daily climbing + walking + sparse-feeding produces a goat that is: LEAN, MUSCULAR, and carrying MORE MYOGLOBIN than a sedentary, pen-raised lowland goat).

The goat-meat's FLAVOUR is therefore a PRODUCT OF THE ROCK: the limestone's minerals enter the crevice-herbs, the herbs enter the goat, the goat's muscles carry the herbs' essential oils (the thymol and carvacrol from the wild thyme are partially absorbed through the goat's digestive tract and deposited in the muscle's intramuscular fat at trace levels — 0.01-0.1 ppm — below the conscious-detection threshold but above the SUBLIMINAL-detection threshold, contributing to the goat-meat's distinctive "mountain" flavour that lowland-raised goat does not carry). The goat's GAMEY FLAVOUR (the strong, musky, slightly pungent aroma that many people associate with goat meat) is produced by: BRANCHED-CHAIN FATTY ACIDS (4-methyloctanoic acid and 4-ethyloctanoic acid) in the goat's subcutaneous and intramuscular fat — these compounds are 10-100x more concentrated in goat-fat than in beef-fat or pork-fat, and they are responsible for the "goaty" aroma that is: polarising (some palates love it, some reject it), STRONGER in male goats (the compounds are androgen-linked — testosterone promotes their synthesis, and the intact male goat produces 3-5x more than the female or the castrated male), and CONTROLLABLE by cooking method (the branched-chain fatty acids are VOLATILE — they evaporate at 80-100°C, and a long simmer drives off 40-60% of them into the kitchen's air, REDUCING the gamey intensity in the finished stew. The thắng cố's 3-4 hour simmer is therefore a DE-GAMING technique: the pot that simmers longest is the pot that smells most gamey during cooking but tastes LEAST gamey in the bowl).

The thắng cố dê's SPECIFIC ADDITIONS (beyond the base thắng cố format) are: the goat's own ORGANS (heart, liver, kidney, tripe — the same organ-quartet, from a smaller animal, each organ proportionally smaller and more CONCENTRATED in flavour), the goat's BONES (smaller, with proportionally more marrow per gram than beef-bones), and — the Đồng Văn addition — a handful of SẢ (lemongrass) and LÁ CHANH (kaffir lime leaf) added alongside the thảo quả. The lemongrass's citral and the lime-leaf's citronellal are the GAMEY-MASKING aromatics: the bright, citrus-family terpenes COMPETE with the branched-chain fatty acids for the olfactory receptors' attention (the same attentional-competition the dill masked the fish's TMA in the bún cá Nha Trang, here applied to goat's gamey-branched-chain-FAs), and the competition REDUCES the perceived gaminess by 30-40% (the nose registers "citrus + gamey" rather than "gamey alone," and the citrus-context reframes the gamey as "aromatic" rather than "off-putting").`,
  ingredientSections: [
    {
      title: 'The goat',
      items: [
        { amount: 500, unit: 'g', name: 'goat stewing meat (leg or shoulder), bone-in, cut 4-5 cm', note: `Mountain goat if available; standard goat works with a slightly milder flavour. Bone-in for the marrow's contribution.` },
        { amount: 300, unit: 'g', name: 'goat organs: heart (halved), liver (sliced 1 cm), tripe (cleaned, blanched, sliced 2 cm strips), kidney (halved, soaked in salted water 30 min to remove uric-acid residue)', note: `The organ-set: heart (iron-dense, lean, firm), liver (vitamin-A-dense, soft, metallic-bitter), tripe (collagen-chewy, bland), kidney (iron-gamey, the MOST gamey organ — the kidney processes the goat's metabolic waste, and the residual uric acid and urea contribute the strongest organ-aroma).` },
        { amount: 300, unit: 'g', name: 'goat bones (leg or rib), blanched' },
      ],
    },
    {
      title: 'The aromatics — thảo quả + citrus gamey-masking',
      items: [
        { amount: 3, name: 'thảo quả (black cardamom) pods, cracked', note: `The H'Mông spice, the thắng cố's identity — camphor-warm, smoky.` },
        { amount: 30, unit: 'g', name: 'ginger, bruised (large piece)' },
        { amount: 3, name: 'stalks lemongrass, bruised and knotted', note: `The GAMEY-MASK: citral competes with 4-methyloctanoic acid for olfactory attention → perceived gaminess -30-40%.` },
        { amount: 4, name: 'kaffir lime leaves (lá chanh), torn', note: `The SECOND gamey-mask: citronellal (the lime-leaf's principal volatile) reinforces the lemongrass's citral in the citrus-vs-gamey competition.` },
        { amount: 1, name: 'cinnamon stick, 5 cm (optional — some Đồng Văn versions add cinnamon for warmth)' },
      ],
    },
    {
      title: 'The broth',
      items: [
        { amount: 2.5, unit: 'L', name: 'water' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce or 1.5 tsp salt' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 4, name: 'dried red chilies' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 1, name: 'mèn mén (steamed corn flour) or steamed rice' },
        { amount: 30, unit: 'g', name: 'cilantro + scallion' },
        { amount: 4, name: 'red chilies, sliced' },
        { amount: 1, name: 'muối mắc khén (mắc khén salt — toasted Sichuan pepper + salt, pounded)', note: `The highland dipping-salt: the mắc khén's TRPA1 numbing-tingle added to the thắng cố's TRPV1 warm = the highland's dual-receptor condiment.` },
        { amount: 1, name: 'rượu ngô (corn wine) — the pairing' },
      ],
    },
  ],
  steps: [
    {
      title: 'Blanch, build with thảo quả and citrus-masking, simmer 2.5-3 hours — the goat enters the cauldron',
      description: `BLANCH everything: bones (5 min), meat (3 min), organs (heart and tripe 2 min, liver 1 min, kidney 1 min — the kidney gets an EXTRA step: after blanching, rinse the kidney halves under cold running water for 2 minutes, pressing gently to expel the uric-acid-rich blood from the kidney's cortex and medulla. The uric acid contributes a SHARP, AMMONIA-ADJACENT off-note if not removed, and the rinsing reduces it by 60-70%).

BUILD: in a large pot, combine the blanched bones, the blanched meat, 2.5 L water, the cracked thảo quả, the bruised ginger, the knotted lemongrass, the torn lime leaves, the cinnamon (if using), the dried chilies, and the salt/fish sauce. Bring to a boil. Skim.

SIMMER 2-2.5 HOURS — the goat-bone's collagen dissolves to gelatin (the goat-bone's collagen content is proportionally HIGHER than beef-bone's — the smaller, younger animal's bones are more collagen-rich, and the gelatin-production per kg of bone is roughly 20-30% higher than beef, producing a THICKER broth from less bone-mass). The meat tenderises (the goat's lean, tough, climbing-muscle requires 2+ hours of collagen→gelatin conversion before it becomes tender — the same conversion-requirement every tough-cut stew in the collection documented, here from a LEANER, TOUGHER starting-protein).

THE GAMEY AROMA'S EVOLUTION: during the first hour, the kitchen fills with the goat's GAMEY aroma — the 4-methyloctanoic acid and 4-ethyloctanoic acid volatilise from the simmering fat, and the aroma is STRONG (the uninitiated visitor may find the kitchen uncomfortable). By hour 2: the gamey aroma has DIMINISHED by 40-60% (the volatile branched-chain FAs have evaporated into the air, leaving behind a broth that retains the goat's SAVOURY depth but has lost the sharp, musky, pungent TOP-NOTE). By hour 2.5: the broth smells of: THẢO QUẢ (camphor-warm, the dominant note — the black cardamom outlasts the gamey because the 1,8-cineole has a higher boiling point than the branched-chain FAs and remains in the broth while the FAs evaporate), LEMONGRASS (citral, the mask that competed with the gamey and WON — by hour 2.5 the citral is the broth's second-loudest aroma, after the thảo quả, and the gamey is third or fourth), and GOAT-SAVOURY (the residual, de-gamed, warm, mineral, iron-rich goat-flavour that is: rich, deep, DARKER than beef's savouriness, and carrying the faint, subliminal trace of the crevice-herbs' thymol that the mountain goat's diet deposited in the meat).

ADD THE ORGANS at hour 2: heart and tripe first (45-60 min of simmering to tenderise). Kidney at hour 2.5 (20-30 min — the kidney overcooks to chalky-dry if simmered longer). Liver LAST (15 min before serving — the same last-minute-liver the thắng cố #1 documented).

THE BROTH at hour 3: DARKER than the beef-thắng-cố (the goat's higher myoglobin = more haemoglobin-iron in the broth = a deeper brown-red), THICKER (the goat-bone's higher gelatin-yield), LESS GAMEY (the 3-hour de-gaming), and carrying the HIGHLAND AROMATIC QUARTET: thảo quả (camphor) + lemongrass (citral) + lime leaf (citronellal) + ginger (gingerol) — four aromatics from four plants, each one contributing to the gamey-management and each one providing its own flavour-layer.

Season: fish sauce or salt.`,
      tip: `The goat's GAMEY COMPOUNDS (4-methyloctanoic acid and 4-ethyloctanoic acid) are the collection's most POLARISING flavour molecules: roughly 50% of the global population finds them pleasant ("rich, meaty, rustic"), and 50% finds them unpleasant ("musky, rank, animal"). The split is partly GENETIC (variations in the OR7D4 olfactory receptor — the same receptor the durian's volatiles activated — correlate with goat-flavour perception) and partly CULTURAL (populations that eat goat regularly from childhood LEARN to associate the branched-chain-FA aroma with food-reward, the same learned-association the mắm's fermented-fish aroma documents). The thắng cố dê's 3-hour simmer is the CULINARY SOLUTION to the polarisation: the long simmer drives off enough of the branched-chain FAs to make the broth acceptable to the 50% who would otherwise reject it, while retaining enough to satisfy the 50% who love it. The simmer is a COMPROMISE — the goat's fans get depth, the goat's sceptics get tolerance.`,
    },
    {
      title: 'Serve at the market or the table — mèn mén, mắc khén salt, corn wine, the stone-plateau feast',
      description: `LADLE into bowls — each serving: the dark, thick, camphor-warm, de-gamed-but-still-goaty broth, with: bone-in goat-meat pieces (2-3 per bowl, tender, falling-from-bone, the lean muscle's iron-dark fibres visible), organ-pieces (heart: dense, lean, the most-muscle-like organ; liver: soft, granular, metallic; tripe: chewy, honeycomb; kidney: firm, iron-gamey, the most CHALLENGING organ-bite for the uninitiated), and the broth's surface carrying small pools of rendered goat-fat (the fat is: YELLOW — goat-fat contains more carotenoids than beef-fat, because the goat's herb-heavy diet provides more plant-carotenoid precursors, and the yellow-fat IS the diet's proof visible in the bowl).

Scatter cilantro and scallion. Sliced chili on the side.

THE TABLE FORMAT: mèn mén (the corn-starch, golden, crumbly — the goat-broth's companion the same way it companioned the beef-thắng-cố), muối mắc khén (the numbing-salt — dip the goat-meat in the salt before eating, the mắc khén's TRPA1-tingle added to the meat's own TRPV1-warm from the ginger and chili in the broth), and rượu ngô (the corn-wine, sipped between spoonfuls — the same triple-warm the beef-thắng-cố documented, here with an additional GOAT-WARM: the goat-fat's branched-chain FAs, at their reduced-but-present concentration, produce a faint, lingering, musky warmth at the back of the throat that the beef-thắng-cố does not carry. The goat's warmth is its OWN contribution to the highland's warmth-system — a FOURTH WARM alongside the thảo quả's camphor, the ginger's gingerol and the rượu's ethanol).

THE BITE: the chopsticks lift a piece of bone-in goat — the meat slides from the bone (3 hours of simmering dissolved the connective tissue), and the mouthful is: DARK-SAVOURY (the goat's iron-rich, myoglobin-dense, mineral-flavoured lean muscle, carrying more IRON per gram than the beef-thắng-cố's because the goat's climbing-muscle demands more oxygen-carrying myoglobin), FAINTLY GAMEY (the residual branched-chain FAs, reduced to 40% of their raw concentration by the simmer, now perceived as "DEPTH" rather than as "musk" — the de-gaming has REFRAMED the gamey from a foreground-fault to a background-complexity), and HERB-TRACED (the subliminal 0.01-0.1 ppm thymol from the karst-crevice-herbs, detectable not as "thyme" but as a faint, warm, aromatic, mountain-air quality that the lowland-goat's feedlot-diet does not produce).

DIP the meat in muối mắc khén — the salt amplifies the iron-savoury, the mắc khén's NUMBING-TINGLE arrives 2 seconds later (the sanshool's TRPA1 activation building slowly, peaking at second 5, and lingering for 30-40 seconds — the longest-lasting somatosensory compound in the highland's spice vocabulary, outlasting the chili's capsaicin at 15-20 seconds and the ginger's gingerol at 10-15 seconds).

PINCH the mèn mén — dip in the goat-broth — the corn absorbs the dark, thick, camphor-goat-citrus liquid, and the bite is: corn-sweet + goat-iron + thảo-quả-camphor + lemongrass-citral + lime-leaf-citronellal + ginger-warm, six flavour-layers in one broth-soaked corn-pinch.

SIP the rượu ngô — the corn-spirit's ethanol-warm + the mouth's residual mắc-khén-numb + the broth's camphor-ginger-warm = the QUADRUPLE WARM: camphor (thảo quả) + gingerol (ginger) + ethanol (rượu) + sanshool (mắc khén) = FOUR warming compounds activating TWO receptor types (TRPV1 + TRPA1) from FOUR sources, and the combined warmth is: the Đồng Văn plateau's answer to the 5°C January night, the answer that is: a pot of goat, a plate of corn, a cup of wine, and a pinch of numbing salt, and the night is warm because the kitchen is the pharmacy and the food is the fire.

Lẩu thắng cố dê completes the THẮNG CỐ PAIR: beef/horse thắng cố (#1) ↔ goat thắng cố (#7) — same format (communal cauldron, whole-animal organs, thảo quả, mèn mén companion), different animal (bovine vs caprine), different challenge (the beef's blood-iron challenge vs the goat's gamey-branched-chain-FA challenge), different management (the beef relies on thảo quả alone to mask the blood-iron; the goat adds lemongrass + lime leaf as citrus-gamey-masks). Same highlands, same kitchen, same fire, different animal on the rack above.`,
      tip: `The dê núi đá's DIET→FLAVOUR pathway (karst-crevice-herbs → goat-muscle → eater's tongue) is the collection's most complete TERROIR CHAIN for an animal protein: the ROCK (limestone, dissolved minerals) → the SOIL (terra rossa, mineral-rich) → the PLANT (crevice-herbs, thymol-carvacrol-rich) → the ANIMAL (goat, herb-compounds deposited in muscle-fat) → the POT (the stew, the compounds dissolving into the broth) → the TONGUE (the eater, detecting the subliminal herb-trace as "mountain flavour"). The chain has SIX LINKS — more than any other terroir-chain in the collection (the bánh bò thốt nốt's soil→palm→sap→sugar→cake→tongue had five, and the cơm lam's forest→bamboo→rice→tongue had three). The goat IS the rock's autobiography, written in branched-chain fatty acids and subliminal thymol, and the eater who tastes "mountain" in the goat-meat is tasting the limestone's 400-million-year geology through six transformations.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
