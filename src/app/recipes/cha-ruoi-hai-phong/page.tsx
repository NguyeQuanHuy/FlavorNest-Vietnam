'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'cha-ruoi-hai-phong',
  title: `Chả Rươi Hải Phòng (Polychaete Worm Fritter — The Harbour City's Once-a-Year Seasonal Delicacy)`,
  subtitle: `Rươi — the marine polychaete worm (Tylorrhynchus heterochaetus) that swarms in the brackish estuaries of Hải Phòng for exactly 3-5 days each autumn — mixed with egg, dill, tangerine peel, ground pork, and fish sauce, fried into golden fritters that are: CRISPY-EDGED, CUSTARD-CENTRED, and available for FEWER DAYS PER YEAR than any other ingredient in Vietnamese cuisine.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/cha-ruoi-hai-phong.jpg',
  intro: `Rươi (Tylorrhynchus heterochaetus) is a marine polychaete worm — a segmented, soft-bodied, 8-12 cm invertebrate that lives burrowed in the mudflats of brackish estuaries along the northern Vietnamese coast. For most of the year it is invisible — buried 30-50 cm deep in anaerobic mud, filter-feeding on detritus. Then, triggered by a precise convergence of LUNAR PHASE (the last quarter of the 9th and 10th lunar months), TIDAL AMPLITUDE (spring tides that flood and then drain the mudflats), and WATER TEMPERATURE (dropping below 25°C as autumn arrives), the rươi undergoes EPITOKY — the reproductive metamorphosis in which the worm's posterior segments swell with eggs or sperm, detach from the body, and swim to the surface in vast, wriggling swarms. The swarming lasts 3-5 days. The fishermen of Hải Phòng's Thủy Nguyên and An Lão districts wade into the estuary at night with lanterns and fine-mesh nets, scooping the rươi from the surface water. By the following week, the swarm is over and there will be no more rươi until next autumn.

THE RƯƠI'S FLAVOUR PROFILE is unlike any other ingredient in Vietnamese cuisine — or arguably any cuisine. The epitoke segments are 60-70% lipid by dry weight (the reproductive organs are packed with polyunsaturated fatty acids for egg/sperm development), giving the raw rươi a RICH, CREAMY, faintly BRINY taste that has been compared to: sea urchin (uni), foie gras, and crab tomalley. The amino-acid profile is dominated by GLUTAMIC ACID and ASPARTIC ACID (the umami pair), at concentrations 2-3× higher than shrimp or crab — making rươi one of the most naturally umami-dense animal ingredients available to any kitchen. The lipid fraction is rich in EPA and DHA (the same omega-3s found in mackerel), and in ARACHIDONIC ACID (an omega-6 that contributes a specific mouth-coating richness detectable at the 15-20 ppm concentration the rươi carries).

THE DILL is the rươi's FIXED HERB PAIRING — the same principle documented throughout this collection (rau răm + raw beef, kinh giới + mắm tôm, lá mơ + goat). Dill's primary volatile is CARVONE (a monoterpenoid ketone responsible for dill's fresh, slightly sweet, anise-adjacent aroma), and carvone at the concentration present in fresh dill (2-5% of essential oil) performs a specific perceptual function: it MASKS the TMAO-derived trimethylamine (TMA) that the rươi generates within hours of harvest. TMA smells "fishy" at >50 ppb; carvone competes for the same olfactory receptors (OR5A1 and OR2W1) and wins at the concentrations present in a generous handful of dill. Without dill, chả rươi smells of worm. With dill, it smells of THE SEA THROUGH A HERB GARDEN.

THE TANGERINE PEEL (vỏ quýt) is the ingredient that surprises outsiders and that no Hải Phòng cook would omit. Dried or fresh tangerine peel contributes LIMONENE (the citrus-terpene) and NOBILETIN (a polymethoxyflavone unique to citrus peel), which together create a BRIGHT, BITTER-CITRUS note that cuts through the rươi's extreme richness the way lemon cuts through foie gras. The peel also contributes PECTIN, which absorbs moisture during frying and contributes to the fritter's structural integrity — the peel is both flavour and architecture.

THE FRITTER FORM — chả, meaning a fried or grilled pâté — is the only way rươi is cooked in Hải Phòng. The rươi are mixed whole (not puréed, not chopped) with beaten egg, minced pork, dill, tangerine peel, fish sauce, and pepper, then ladled into a hot oiled pan and fried as a thick disc — 2-3 cm high, crispy-golden on both faces, custard-soft and WORM-VISIBLE in the centre. The whole rươi segments are visible in cross-section — pale, curved, glistening with their own fat — and the first-time eater must look past this visual to reach the flavour. Those who do are rewarded with one of the richest, most umami-dense bites in the entire Vietnamese repertoire.

Chả rươi is a dish of SCARCITY and CALENDAR. The rươi swarm is tied to the lunar cycle — the 9th and 10th months of the lunar calendar, roughly October-November in the Gregorian calendar. The fishermen cannot predict the exact day; they watch the moon, the tide tables, and the water temperature, and when the convergence happens, the word spreads through Hải Phòng's markets in hours. Prices spike (rươi can reach 500,000-800,000 VND per kilogram during a short swarm), the night markets fill with chả rươi stalls, and for 3-5 days the city eats almost nothing else. Then it is over, and the waiting begins again. Chả rươi is the dish that teaches patience — the understanding that some ingredients cannot be farmed, frozen, or flown in, and that the kitchen's deepest pleasures are the ones that arrive on their own schedule.`,
  ingredientSections: [
    {
      title: 'The rươi',
      items: [
        { amount: 500, unit: 'g', name: 'fresh rươi (polychaete worms), cleaned', note: `Alive or very freshly dead — the worms should be intact segments, pale pink-to-orange, glistening. Rinse gently in salted water to remove mud, then drain. Do NOT chop or purée — they go into the batter WHOLE. In Europe: frozen rươi is occasionally available at large Vietnamese groceries during autumn, typically imported from Vietnam and sold in 500g blocks. Thaw slowly in the refrigerator overnight. There is NO substitute — this dish either has rươi or it is a different dish.` },
      ],
    },
    {
      title: 'The batter',
      items: [
        { amount: 3, name: 'eggs, beaten', note: `The BINDER and the CUSTARD-FORMER. The egg proteins set during frying, creating the custard-soft matrix that holds the rươi segments in place. Without enough egg, the fritter crumbles; too much and the rươi flavour is diluted.` },
        { amount: 150, unit: 'g', name: 'ground pork', note: `70:30 lean-to-fat. The pork provides STRUCTURE (its myosin cross-links during cooking) and MEATINESS (glutamate + inosinate = umami synergy with the rươi's own glutamate). Do not use lean pork — the fat keeps the fritter moist.` },
        { amount: 30, unit: 'g', name: 'fresh dill (thì là), roughly chopped', note: `The FIXED HERB — dill's carvone masks the rươi's TMA and contributes fresh-anise aroma. This is the largest quantity of dill in any recipe in this collection — the rươi demands it. Use the fronds and the tender stems; discard only the thick woody base.` },
        { amount: 2, unit: 'tbsp', name: 'tangerine peel (vỏ quýt), finely minced', note: `Fresh peel from 1-2 tangerines, or dried tangerine peel soaked and minced. The LIMONENE-NOBILETIN contribution — citrus-bright, faintly bitter, cutting through the rươi's extreme richness. Mandarin or clementine peel substitutes well. Orange peel is too thick and bitter.` },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper, freshly cracked' },
      ],
    },
    {
      title: 'For frying',
      items: [
        { amount: 100, unit: 'ml', name: 'neutral oil', note: `Enough to shallow-fry — the fritter sits in 1 cm of oil, not deep-fried. The bottom crisps in direct contact with the oil while the top cooks by conducted heat through the egg-custard matrix.` },
      ],
    },
    {
      title: 'The dipping sauce and accompaniments',
      items: [
        { amount: 3, unit: 'tbsp', name: 'nước mắm chua ngọt (sweet-sour fish sauce dip)', note: `Fish sauce + lime juice + sugar + garlic + chili — the standard northern dip. The rươi's richness needs ACID (lime) and SWEETNESS (sugar) to balance, not more funk.` },
        { amount: 200, unit: 'g', name: 'bún (rice vermicelli), cooked' },
        { amount: 100, unit: 'g', name: 'rau sống: kinh giới, tía tô, rau mùi' },
        { amount: 100, unit: 'g', name: 'dưa chua (pickled carrot and daikon)', note: `The acid-crunch counterpoint to the fritter's rich softness.` },
        { amount: 1, name: 'cucumber, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Clean the rươi — gentle salt-water rinse, no crushing',
      description: `Place the rươi in a large bowl of lightly salted water (15g salt per litre — half seawater concentration). Swirl gently with your hand — the mud and sand settle to the bottom. Lift the rươi out with a slotted spoon (do not pour through a colander — the force crushes the segments and releases their fat prematurely). Repeat 2-3 times until the water runs clear.

Drain on a towel-lined tray for 5 minutes. The rươi should be: INTACT (whole segments, not broken), CLEAN (no mud, no grit), and GLISTENING (their own lipid gives them a wet sheen even after draining).

Do not over-handle. Each rươi segment is essentially a thin-walled SAC OF FAT AND REPRODUCTIVE MATERIAL — squeeze too hard and the contents burst, and you lose the discrete rươi-texture in the finished fritter. The goal is visible whole segments suspended in the egg-pork matrix, not a homogeneous paste.`,
      tip: `The rươi's fragility is a consequence of its biology. During epitoky the worm's body-wall muscles ATROPHY — the energy that maintained the muscle is redirected to egg and sperm production. By the time the epitoke segments detach and swarm, they are essentially thin-skinned bags of lipid with vestigial musculature. This is why rươi cannot be farmed at scale (the worms need wild estuary conditions for the hormonal trigger), cannot be transported far (they rupture within hours), and must be cooked the day they are caught. The fragility IS the ingredient — the extreme richness and the extreme perishability are the same biological fact.`,
    },
    {
      title: 'Mix the batter — fold, do not beat',
      description: `Beat the 3 eggs in a large bowl. Add the ground pork and break it into the egg with chopsticks until evenly distributed — small crumbles, not a paste.

Add the chopped dill, minced tangerine peel, fish sauce, and black pepper. Stir gently to combine.

FOLD IN the drained rươi — use a spatula, not a whisk, and fold 5-6 times maximum. The rươi should be EVENLY DISTRIBUTED but INTACT — visible whole segments throughout the batter, not broken down into the egg. Over-mixing ruptures the segments and turns the batter into a grey-orange slurry that fries flat and greasy rather than puffing into a custard.

The batter should be: THICK (it holds a mound on the spatula, not pourable like pancake batter), FLECKED (green dill, orange tangerine peel, pink-orange rươi segments visible throughout), and AROMATIC (the dill-citrus-brine scent should be immediate and strong — if you can't smell the dill, there isn't enough).`,
      tip: `The 5-6 fold maximum is not a suggestion — it is the boundary between chả rươi and rươi-flavoured omelette. Each fold ruptures some percentage of the worm segments, releasing their lipid content into the egg matrix. At 5-6 folds, enough segments remain intact that the fritter has TEXTURAL CONTRAST — the soft custard matrix punctuated by the richer, creamier bursts of intact rươi. Beyond 10 folds, essentially all segments have ruptured and the batter becomes homogeneous — rich but monotonous, with no textural surprise. The Hải Phòng cook who has been making chả rươi for thirty autumns knows the fold-count by feel: when the resistance changes (intact segments resist the spatula; ruptured ones don't), stop.`,
    },
    {
      title: 'Fry — medium heat, 2 cm thick, golden both sides',
      description: `Heat 100 ml oil in a non-stick or well-seasoned pan over MEDIUM HEAT (not high — the egg-custard needs time to set through the centre before the bottom burns). The oil should shimmer but not smoke — roughly 160-170°C.

LADLE the batter into the pan in portions — each fritter roughly 10 cm across and 2-3 cm thick. A thick fritter is essential: too thin and the rươi dries out; at 2-3 cm the exterior crisps while the centre sets into a SOFT CUSTARD with intact rươi segments suspended in it.

FRY the first side 3-4 minutes — the bottom should be DEEP GOLDEN-BROWN and rigid enough to flip without breaking. The edges will show the custard setting inward from the rim, the dill darkening slightly, and the tangerine peel specks turning golden.

FLIP carefully with a wide spatula. Fry the second side 3 minutes. The fritter is done when: both faces are GOLDEN-BROWN and CRISPY (the Maillard crust should shatter faintly when pressed with a chopstick), and the centre is SET but SOFT (a skewer into the centre should come out with a faint film of custard, NOT liquid egg — that means raw, give it 1 more minute).

DRAIN on a rack. Cut each fritter into wedges — the cross-section should show: CRISPY GOLDEN EDGE (2-3 mm of Maillard crust), SOFT CUSTARD CENTRE (pale yellow, studded with green dill and orange peel flecks), and INTACT RƯƠI SEGMENTS (pale, curved, glistening with fat — the visual proof that the fold-count was right).`,
      tip: `Medium heat (160-170°C) rather than high heat is CRITICAL for chả rươi because of the egg-custard physics. At high heat (>180°C), the egg proteins on the surface set and form a rigid crust within 60 seconds — but this crust then INSULATES the centre, trapping steam, and the centre puffs and then collapses into a hollow cavity when it cools. At medium heat, the crust forms slowly enough that heat conducts evenly to the centre, and the entire thickness sets into a continuous, dense custard — crispy outside, custardy inside, no hollow. The HP chả rươi stall owner's pan is NEVER smoking when the batter goes in.`,
    },
    {
      title: 'Serve hot — the fritter waits for no one',
      description: `PLATE the fritter wedges immediately — they should be eaten within 10 minutes of frying. The crispy crust softens as steam from the custard centre migrates outward, and the rươi segments release their fat into the cooling egg matrix, turning the texture from "custard with discrete rich bursts" to "uniformly greasy." The window is real and short.

ARRANGE alongside: bún, rau sống (herbs), dưa chua (pickled vegetables), cucumber, and individual bowls of nước mắm chua ngọt.

THE EATING: pick up a wedge with chopsticks. Dip the edge into the nước mắm chua ngọt — the acid-sweet sauce meets the custard's richness at the entry point. Bite. The sequence: CRISPY EDGE (Maillard crust — golden, shattering, savoury) → SOFT CUSTARD (egg-pork matrix — custardy, warm, carrying dill-aroma and tangerine-citrus) → RƯƠI BURST (an intact segment encountered mid-bite — creamy, briny, intensely umami, richer than any other element in the mouthful — the moment the bite transitions from "delicious egg fritter" to "THIS is what rươi tastes like"). Follow with a bite of pickled vegetables (acid-crunch palate reset) and a pinch of herbs wrapped around bún.

Chả rươi is the Hải Phòng collection's FINAL RECIPE — the dish that exists for fewer days per year than any other, that cannot be substituted, that arrives when the moon and the tide and the temperature converge, and that must be eaten standing at the market stall within minutes of frying because it will not wait. It is the Vietnamese kitchen's most honest negotiation with nature: you do not choose when to eat this. The estuary chooses for you.`,
      tip: `The rươi season is tracked on social media across Vietnam with the urgency of a weather event — "Rươi đã về!" ("The rươi have arrived!") trends on Facebook and Zalo when the first sightings are reported in the Hải Phòng estuaries. Within hours, the price per kilogram appears in market group chats, and families in Hà Nội, Hải Phòng, and across the north begin planning their chả rươi. The season is 3-5 days. Some years, bad weather or water-temperature anomalies suppress the swarm entirely, and there is no rươi season at all. The scarcity is not manufactured — it is ecological, lunar, tidal, and thermal, and it makes chả rươi the single most CALENDAR-DEPENDENT dish in the Vietnamese repertoire. The Hải Phòng cook does not plan for rươi season. The rươi season plans itself.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
