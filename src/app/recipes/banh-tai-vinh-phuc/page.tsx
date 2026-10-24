'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-tai-vinh-phuc',
  title: `Bánh Tai Vĩnh Phúc (Ear-Shaped Rice Dumplings — Northern Village Comfort)`,
  subtitle: `Rice-flour dough — kneaded with boiling water until smooth and elastic, rolled thin, filled with a spoonful of seasoned pork and wood-ear mushroom, folded into the shape of a pig's ear (tai = ear), and steamed until the translucent wrapper clings to the filling like a second skin. Dipped in nước chấm gừng. The Vĩnh Phúc village snack that the grandmother shapes by feel and the child eats by the dozen.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 6,
  heroImage: '/images/recipes/banh-tai-vinh-phuc.jpg',
  intro: `Bánh tai — literally "ear cake" — is a northern Vietnamese rice-flour dumpling shaped like a pig's ear: roughly triangular, with a curved fold that mimics the ear's cartilaginous curve, the dough pinched along one edge and open along the other, the filling visible through the translucent steamed wrapper. The dumpling belongs to the northern Vietnamese village's FESTIVE FOOD tradition — made for Tết (Lunar New Year), for giỗ (death anniversaries), for làng festivals (village communal celebrations), and for any occasion where the household gathers, the women knead dough in the kitchen, and the dumpling-count measures the occasion's importance (a small giỗ: 50 dumplings; a Tết: 200; a wedding: 500+).

The bánh tai is, in the collection's dumpling taxonomy, the SIMPLEST Vietnamese dumpling: simpler than the bánh cuốn (which requires the cloth-steamer apparatus and the 30-second-peel skill), simpler than the bánh ít lá gai (which requires the gai-leaf extract and the banana-leaf wrapping), and simpler than the bánh giò (which requires the pyramid-folding technique and the banana-leaf architecture). The bánh tai needs only: dough (rice flour + boiling water), filling (pork + mushroom + shallot), hands (to shape), and a steamer (to cook). The simplicity is the dumpling's ACCESSIBILITY — any kitchen, any skill level, any occasion, and the children learn the fold at age 8-10 by sitting beside the grandmother and copying.

The DOUGH is the collection's purest RICE-FLOUR HOT-WATER DOUGH: rice flour mixed with BOILING water (not cold water, not warm water — boiling). The boiling water INSTANTLY gelatinises the rice starch on contact, producing a dough that is: ELASTIC (the gelatinised amylopectin chains form a flexible, stretchy network that can be rolled thin without cracking — cold-water-mixed rice-flour dough is crumbly and un-rollable because the raw starch granules do not form a continuous network), TRANSLUCENT when thin (the gelatinised starch refracts light differently from the raw starch — the thin-rolled dough is nearly see-through, a quality the raw-starch dough does not achieve), and STICKY (the gelatinised starch's exposed amylopectin chains bond to each other when pressed, and the pinched-fold seal of the bánh tai holds without any egg-wash or water-seal — the starch IS the glue).

The hot-water dough technique is the SAME technique the bánh tằm bì documented (boiling water + rice flour → gelatinised dough), the bánh cuốn's batter exploits in liquid form (thin batter steamed on cloth), and the Chinese har gow (shrimp dumpling) wrapper uses (boiling water + wheat starch → translucent, elastic wrapper). The technique is pan-Asian and ancient — every rice-culture and every wheat-culture has a boiling-water dough in its dumpling repertoire, because the boiling-water gelatinisation is the universal solution to the problem of making a THIN, FLEXIBLE, SEALABLE wrapper from a starch-based flour.

The FILLING is the northern village STANDARD: ground pork (not too lean — 70/30 or 80/20, the fat keeping the filling moist inside the sealed dumpling during the 15-minute steaming), wood-ear mushroom (mộc nhĩ — the crunch, the same sclerenchyma-fibre crunch the bánh cuốn documented), shallot (minced, sautéed — the sweetness), fish sauce and pepper. No lemongrass, no turmeric, no curry, no exotic spice — the northern village filling is DELIBERATELY PLAIN, because the wrapper is the star and the filling is the support, the same philosophy the bánh cuốn Phú Đa documented.

THE FOLD: the rolled dough (a circle roughly 10-12 cm diameter, 1-1.5 mm thick) receives a tablespoon of filling in its centre. The cook folds the circle in HALF (producing a half-moon), then PINCHES one curved edge while leaving the other edge OPEN or loosely sealed — the pinched-and-open fold produces the EAR SHAPE: the pinched edge is the ear's outer curve (firm, sealed, the ridged pinch-marks visible like an ear's cartilage ridges), and the open edge is the ear's inner curve (slightly open, the filling visible through the gap, the steam venting from the opening during cooking). The fold takes 5-10 seconds per dumpling, and the grandmother who has made 50,000 dumplings in her lifetime folds without looking — the hands know the shape, the fingers know the pinch-pressure, and the ear emerges from the fold the way a potter's cup emerges from the wheel: by FEEL, not by instruction.`,
  ingredientSections: [
    {
      title: 'The dough',
      items: [
        { amount: 300, unit: 'g', name: 'rice flour (bột gạo tẻ)' },
        { amount: 50, unit: 'g', name: 'tapioca starch', note: `The elasticity agent — same role in the bánh tằm and the bánh cuốn. Without tapioca: the dough cracks when rolled thin. With tapioca: the dough stretches to 1 mm without cracking.` },
        { amount: 250, unit: 'ml', name: 'boiling water', note: `BOILING — not warm, not hot, but 100°C rolling-boil water poured directly into the flour. The instant gelatinisation of the rice starch at 100°C is the technique's entire principle.` },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The filling',
      items: [
        { amount: 300, unit: 'g', name: 'ground pork (70/30 or 80/20)' },
        { amount: 30, unit: 'g', name: 'wood-ear mushroom (mộc nhĩ), soaked, diced fine' },
        { amount: 3, name: 'shallots, minced' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (for sautéing)' },
      ],
    },
    {
      title: 'For dipping',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 100, unit: 'ml', name: 'warm water' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 15, unit: 'g', name: 'ginger, julienned fine', note: `The ginger nước chấm — the same Vĩnh Phúc ginger-forward dipping sauce the bò tái chanh documented. The ginger's gingerol pairs with the pork filling's fat the way it paired with the raw beef's iron: the warm-bite cuts through the richness.` },
        { amount: 2, name: 'cloves garlic, minced' },
        { amount: 1, name: 'red chili, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the hot-water dough, cook the filling, roll and fold — the ear takes shape',
      description: `THE DOUGH: place the rice flour, tapioca starch and salt in a large bowl. Pour the BOILING water in, all at once. Stir immediately with chopsticks (the water is too hot for hands) — the flour gelatinises on contact, the mixture transforms from dry powder to a SHAGGY, STICKY, HALF-COOKED MASS in 10 seconds. The gelatinisation is visible: the flour goes from opaque-white (raw starch) to TRANSLUCENT-GREY (gelatinised starch) as the boiling water touches it.

When cool enough to handle (2-3 minutes): add the oil (the lubricant and anti-stick agent) and KNEAD 8-10 minutes. The kneading develops the gelatinised starch's network — the amylopectin chains, now in their disordered, gelatinised state, align and cross-link under the mechanical shearing of the kneading, producing a dough that is: SMOOTH (no lumps — every starch granule fully hydrated and dispersed), ELASTIC (the aligned amylopectin network stretches and springs back — pull a piece: it should stretch 5-6 cm before breaking), and NON-STICKY (the oil coats the starch's surface, preventing the dough from bonding to hands or to the rolling surface). Rest the dough 15 minutes under a damp cloth (prevents surface drying).

THE FILLING: heat oil in a pan. Sauté the minced shallot 1 minute until golden-sweet. Add the ground pork — break apart, cook 3-4 minutes until no pink. Add the diced wood-ear mushroom — 1 minute. Season with fish sauce and pepper. The filling should be: DRY (same principle as the bánh cuốn's filling — wet filling makes soggy dumplings), FINE (no large lumps — the filling must fit in a 1 cm layer inside a 10 cm circle of dough), and SIMPLE (pork + mushroom + shallot + fish sauce + pepper — the five-ingredient village standard). Cool completely before filling.

ROLL: pinch a walnut-sized piece of dough (roughly 25-30 g). Roll on an oiled surface into a circle — 10-12 cm diameter, 1-1.5 mm thick. The rolled dough should be: THIN (thin enough to see the shadow of your hand through it — the translucency test), EVEN (no thick spots that will under-cook or thin spots that will tear during folding), and ROUND (the circle is the starting geometry that the fold converts to the ear-shape).

FILL: place 1 tablespoon of cooled filling in the circle's centre. Spread slightly (the filling should cover a 5-6 cm circle in the dough's centre, leaving a 2-3 cm border all around for sealing).

FOLD THE EAR: fold the circle in half — the half-moon shape. Pinch the CURVED EDGE firmly — starting at one corner and working to the other, pressing the dough layers together every 5 mm, creating a series of small RIDGES along the pinched edge (the ridges are decorative AND structural — they seal the edge and they look like the cartilage ridges of a pig's ear). Leave the STRAIGHT EDGE (the fold-line) slightly open or loosely pressed (the open edge lets the steam vent during cooking and gives the ear its characteristic slightly-open, slightly-gaping look).

The finished bánh tai: roughly 8 x 5 cm, half-moon with ridged curved edge and open straight edge, the filling visible through the translucent dough as a dark-brown shadow inside the pale-grey wrapper. The ear shape is: rustic (the hand-pinch is never perfectly uniform — each ear is slightly different, and the imperfection IS the character), RECOGNISABLE (every northern Vietnamese person knows the shape — it IS a pig's ear, unmistakably, the same way the bánh chưng IS a square and the bánh tét IS a cylinder), and STACKABLE (the flat half-moon stacks neatly in the steamer basket, 20-30 per layer, without sticking if oiled).`,
      tip: `The BOILING-WATER GELATINISATION produces a fundamentally different dough from cold-water mixing: COLD-WATER DOUGH = the starch granules remain intact (ungelatinised), and the dough is held together by the SURFACE STARCH (the amylose and amylopectin that washed off the granules' surfaces during mixing) + the physical compression of the granules against each other. The cold dough is: crumbly (the granule-to-granule bonds are weak), opaque (the intact granules scatter light), and UNABLE TO STRETCH (the intact granules are rigid and do not deform). BOILING-WATER DOUGH = the starch granules BURST on contact with the 100°C water (the amylopectin swells and ruptures the granule's membrane), and the released amylopectin chains form a CONTINUOUS, FLEXIBLE NETWORK that behaves like a polymer gel rather than like a compressed powder. The hot dough is: smooth (no intact granules), translucent (the disordered amylopectin scatters less light), and ELASTIC (the continuous polymer network stretches without cracking). The boiling water converts a POWDER into a PLASTIC — the same phase-transition that distinguishes raw clay from fired clay, and the same reason every translucent Asian dumpling wrapper in every cuisine uses boiling water.`,
    },
    {
      title: 'Steam 12-15 minutes, dip in ginger nước chấm — the village plate',
      description: `Arrange the folded bánh tai in a steamer basket — oiled lightly to prevent sticking, single layer (or stacked with parchment between layers). Leave 1 cm between each dumpling (they swell slightly during steaming as the filling's moisture generates steam inside the sealed pocket — the dumpling is a MINIATURE PRESSURE VESSEL, the steam trapped inside the dough inflating the pocket slightly, and the swelling is the signal that the filling is hot).

Steam over vigorously boiling water for 12-15 minutes (longer than the bánh cuốn's 30 seconds because the filling is RAW PORK that must reach 74°C internal — the dough cooks in 3 minutes, but the filling's centre needs 12-15 minutes for the heat to penetrate through the dough and through the filling's 1 cm thickness).

The dumplings are done when: the dough is FULLY TRANSLUCENT (no opaque-white patches — opaque = un-gelatinised, which means the steam did not reach that area), the filling's juices are CLEAR (poke one with a toothpick — the liquid that escapes should be clear, not pink), and the dumplings are SLIGHTLY PUFFED (the steam inside has inflated the pocket by 10-15%, and the dough is taut and glossy).

SERVE immediately — on a plate, the steamed ears still glistening with condensed steam, the filling's dark-brown shadow visible through the translucent wrapper, the pinched-ridged edge tracing the ear's curve. The plate of bánh tai should look: RUSTIC (the hand-shaped imperfection, no two ears identical), TRANSLUCENT (the dough's glass-like clarity, the filling visible inside like a shadow in fog), and WARM (the steam still rising from the open edge of each ear).

THE GINGER NƯỚC CHẤM: fish sauce + water + sugar + lime + julienned ginger + garlic + chili. The same Vĩnh Phúc ginger-forward dressing the bò tái chanh and the tôm Đầm Vạc used — the ginger nước chấm is now the Vĩnh Phúc collection's RECURRING DIPPING SAUCE, the provincial equivalent of the muối tiêu chanh's universality: where the muối tiêu chanh is the CONDIMENT that recurs across the entire collection, the nước mắm gừng is the DIPPING SAUCE that recurs across the Vĩnh Phúc province's dishes specifically — the ginger is Vĩnh Phúc's aromatic identity, the way cumin is the Chăm's and the lemongrass is the Delta's.

DIP a bánh tai in the ginger nước chấm — the thin dipping sauce soaks through the translucent wrapper's surface in 2-3 seconds (the same rapid sauce-penetration the bánh cuốn documented — the thin, gelatinised rice-flour wrapper has almost no barrier function against liquid, and the sauce goes THROUGH the wrapper to the filling).

BITE: the wrapper yields — SOFT, SMOOTH, translucent-gel, the same dissolving-rice-starch texture the bánh cuốn and the bánh mướt documented (the zero-resistance wrapper that the tooth passes through without feeling any structure). The filling arrives: savoury-pork (the fish sauce's glutamate, the shallot's sweetness, the pepper's warmth), and the wood-ear mushroom CRUNCHES (the sclerenchyma-fibre dice, 2-3 mm, providing the same punctuation-in-softness the bánh cuốn's wood-ear provided — the single crunch-event in a mouthful of zero resistance, the textural SIGNAL the mouth needs to register "something solid is here" before the soft wrapper and the soft filling dissolve into formlessness).

The ginger nước chấm's gingerol arrives at second 2-3 — the TRPV1 warm-bite cutting through the pork's fat and the wrapper's bland starch, providing the AROMATIC FINISH the dumpling's plain interior does not carry. The ginger IS the finish — without it, the bánh tai is pleasant but forgettable; with it, the bánh tai is VĨNH PHÚC.

TEN VĨNH PHÚC DISHES COMPLETE: the province's collection spans: fermented fish (cá thính, #1), hill chicken (#2), steamed rice rolls (#3), composed noodle soup (#4), bamboo rice (#5), pomelo salad (#6), rice wine (#7), acid-cured beef (#8), lagoon shrimp (#9), and now the ear dumpling (#10) — ten preparations that together document a northern Vietnamese COUNTRYSIDE KITCHEN: restrained (less sweet than the south, less spicy than the centre), technique-intensive (the bánh cuốn's 30-second peel, the bò tái chanh's 60-second window, the rượu's 10-day fermentation), ingredient-proud (the nếp cái hoa vàng, the Đầm Vạc shrimp, the gà đồi chicken — each ingredient named for its origin, each origin within walking distance), and quietly sophisticated (the bún thang's four-quadrant mosaic, the gỏi bưởi's five-register density, the rượu's 500-year men lá — sophistication measured in precision rather than in volume). The Vĩnh Phúc kitchen does not shout. It whispers. And the whisper is the ginger nước chấm, and the translucent wrapper, and the ear that the grandmother shaped by feel.`,
      tip: `The bánh tai's EAR SHAPE is one of approximately 15 traditional Vietnamese dumpling shapes, each one carrying a specific symbolic or practical meaning: the SQUARE (bánh chưng = the earth), the CYLINDER (bánh tét = the earth, southern variant), the TRIANGLE (bánh giò = stability), the HALF-MOON (bánh tai = the ear, listening/receptiveness), the ROUND (bánh trôi = the moon/unity), the CONE (bánh ú = the mountain). The shapes are not arbitrary — they encode the village's COSMOLOGICAL VOCABULARY in food-geometry, the same way the xôi colours (red = living, black = ancestors, five-colour = cosmos) encoded theology in pigment. The bánh tai's ear-shape specifically: the pig's ear represents PROSPERITY (the pig is the Vietnamese household's wealth-animal, and the ear — the part that hears the market's price-calls and the family's dinner-bell — represents the alertness that leads to prosperity). Making bánh tai for Tết is therefore an act of SYMPATHETIC MAGIC: shape the food like prosperity's symbol, eat the symbol, and the prosperity follows. The grandmother who shapes 200 ears on Tết morning is performing the year's first optimistic act.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
