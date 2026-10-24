'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-pia-soc-trang',
  title: `Bánh Pía Sóc Trăng (Durian and Salted Egg Flaky Pastry — Teochew Heritage)`,
  subtitle: `A flaky, laminated, multi-layered pastry — the Teochew Chinese mooncake's Vietnamese descendant — filled with a paste of mung bean, durian and a whole salted egg yolk that sits in the centre like a golden moon. The crust shatters into a hundred paper-thin flakes at the first bite, the mung bean yields smooth-and-sweet, the durian blooms with its polarising tropical funk, and the egg yolk — dense, sandy, salt-fat-rich — anchors everything with its mineral gravity. Sóc Trăng's most famous export, the pastry every Vietnamese person recognises by the round tin it ships in.`,
  category: 'DESSERT',
  difficulty: 'Hard',
  totalTime: '4 hr',
  rating: 4.9,
  baseServings: 12,
  heroImage: '/images/recipes/banh-pia-soc-trang.jpg',
  intro: `Bánh pía — from the Teochew Chinese 朋饼 (phia-piáⁿ, "companion cake") — is the Vietnamese adaptation of the Teochew-style flaky mooncake, brought to Sóc Trăng by the Teochew (Triều Châu) Chinese community who migrated to the Mekong Delta in the 18th-19th centuries and who established the bakeries, the rice-milling houses and the trade networks that still define Sóc Trăng's Chinese-Vietnamese commercial district.

The Teochew mooncake that became the bánh pía differs from the Cantonese mooncake (bánh trung thu, which uses a tender, non-flaky, syrup-dough crust) in one fundamental way: the crust is LAMINATED — built from alternating layers of oil-dough (bột nước, the water-based outer dough) and fat-dough (bột dầu, the lard-or-oil-based inner dough), rolled and folded multiple times to create a MULTI-LAYERED structure that, when baked, separates into dozens of paper-thin, flaky, shatter-on-contact layers. The lamination is the same technique the French croissant and the Danish pastry use (dough + fat, folded repeatedly), but the Teochew version uses LARD (or vegetable shortening) rather than butter, and the dough is UNLEAVENED (no yeast, no baking powder — the layers separate by steam alone, not by gas production).

The Vietnamese adaptation added TWO ingredients the Teochew original did not contain: DURIAN and SALTED EGG YOLK.

THE DURIAN: Sóc Trăng is in the Mekong Delta's durian belt — the provinces (Sóc Trăng, Bến Tre, Vĩnh Long, Cần Thơ) where durian trees flourish in the alluvial soil and the tropical humidity, and where the fruit is abundant, cheap and CULTURALLY CENTRAL (the Mekong Delta's relationship with durian is as intense as Đắk Lắk's relationship with coffee — the fruit IS the region). The Sóc Trăng bakers incorporated durian flesh into the mung-bean filling, producing a paste that is: yellow-gold (the durian's carotenoid pigment), intensely aromatic (the durian's volatile sulfur compounds — ethanethiol, diethyl disulfide, ethyl 2-methylbutanoate — the same class of volatiles the lá mơ's dimethyl disulfide belongs to, but at MUCH higher concentration), and POLARISING (the global divide: people who adore durian's creamy-custardy-funky-tropical flavour, and people who describe it as "rotting onions in gym socks" — both descriptions are chemically accurate, because the same molecules can be read as "rich tropical fruit" or as "sulfurous decay" depending on the olfactory context the brain provides).

THE SALTED EGG YOLK: a whole duck-egg yolk, cured in salt for 30+ days (the salt penetrates the yolk by osmosis, denaturing the proteins, driving out moisture, and concentrating the fat — the cured yolk is denser, sandier, more intensely savoury-salty than a fresh yolk), placed in the CENTRE of the mung-bean-and-durian filling before wrapping. When the bánh pía is sliced in half, the cross-section reveals: the flaky crust (multiple thin layers), the yellow filling (mung bean + durian), and the GOLDEN YOLK in the exact centre — a circle within a circle, a moon within a cake, the same symbolic architecture the Cantonese mooncake deploys (the yolk = the moon, the cake = the sky, the Mid-Autumn Festival = the celebration of fullness and reunion).`,
  ingredientSections: [
    {
      title: 'The oil dough (bột nước — outer, structural)',
      items: [
        { amount: 300, unit: 'g', name: 'all-purpose flour' },
        { amount: 80, unit: 'g', name: 'sugar' },
        { amount: 80, unit: 'ml', name: 'neutral oil or melted lard' },
        { amount: 100, unit: 'ml', name: 'water' },
        { amount: 0.25, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The fat dough (bột dầu — inner, flaking)',
      items: [
        { amount: 200, unit: 'g', name: 'cake flour or low-protein flour', note: `Low gluten — the fat dough must NOT develop elasticity (elastic fat-dough resists the lamination's separation into layers). Cake flour's 7-8% protein (vs all-purpose's 10-12%) produces a tender, crumbly, easily-separable layer.` },
        { amount: 100, unit: 'g', name: 'lard or vegetable shortening', note: `The FLAKING AGENT — the solid fat separates the dough layers during rolling and prevents them from fusing. Lard is traditional (the Teochew bakers use rendered pork fat); vegetable shortening works for a vegetarian version. Butter is NOT a substitute — its 15-20% water content produces steam during baking that makes the layers puff rather than flake (puff pastry vs flaky pastry — structurally different, texturally different).` },
      ],
    },
    {
      title: 'The filling — mung bean + durian + salted egg yolk',
      items: [
        { amount: 200, unit: 'g', name: 'dried mung beans (hulled, yellow), soaked 4 hr, steamed until very soft, mashed smooth' },
        {
          amount: 200,
          unit: 'g',
          name: 'fresh durian flesh (from 1 pod), mashed',
          note: `The riper the better — overripe durian (soft, strongly aromatic, slightly alcoholic) produces the most flavourful filling. The durian's volatile sulfur compounds are at their highest concentration in overripe fruit (the fruit's own enzymatic decomposition produces more ethanethiol as the flesh softens). If fresh durian is unavailable: 200 g frozen durian flesh (thawed, drained, mashed) works. Durian paste in jars: functional but less aromatic.`,
        },
        { amount: 80, unit: 'g', name: 'sugar' },
        { amount: 2, unit: 'tbsp', name: 'coconut oil or neutral oil' },
        { amount: 0.25, unit: 'tsp', name: 'salt' },
        {
          amount: 12,
          name: 'salted duck egg yolks',
          note: `From salted duck eggs — crack the egg, separate the yolk (discard or reserve the white). The cured yolk is: dense, golden-orange, slightly translucent, sandy-textured when cooked. Steam or bake the yolks for 5 min before wrapping (the pre-cook firms them slightly, preventing them from crumbling during the filling-wrapping process). Each yolk = one bánh pía's centre.`,
        },
      ],
    },
  ],
  steps: [
    {
      title: 'Make two doughs, laminate — the Teochew technique that makes the flake',
      description: `OIL DOUGH: mix flour, sugar, salt, oil and water. Knead 5 minutes until smooth, slightly elastic. Rest 30 minutes covered.

FAT DOUGH: mix cake flour and lard/shortening. Press together — do NOT knead (kneading develops gluten, which is the enemy in the fat dough). The mixture should be: crumbly, cohesive when pressed, falling apart when released. Shape into a flat disc. Rest 15 minutes.

LAMINATE: divide both doughs into 12 equal pieces. Take one oil-dough piece — flatten into a disc. Place one fat-dough piece in the centre. Wrap the oil dough around the fat dough — pinch closed, forming a ball with oil-dough OUTSIDE and fat-dough INSIDE.

ROLL AND FOLD (the layer-building):

FIRST ROLL: flatten the ball into an oval, 15 cm long. Roll from one end to the other — a tight Swiss-roll. The roll now has: oil-dough on the outside, fat-dough spiralling through the interior, and the beginnings of LAYERS (each turn of the spiral is one oil-dough/fat-dough pair).

REST 10 minutes (the gluten in the oil dough needs to relax — without resting, the dough springs back during the second roll and the layers compress rather than separate).

SECOND ROLL: turn the spiral 90°. Flatten again into an oval. Roll again — the second roll doubles the layer count. The cross-section of the roll now shows: roughly 8-16 alternating layers of oil-dough and fat-dough, each one thinner than the first roll's.

The laminated roll is ready for filling.`,
      tip: `The lamination produces layers by the same mechanism the French pâte feuilletée (puff pastry) uses — but with a critical difference: the French technique uses BUTTER (which contains 15-20% water, producing steam during baking that inflates the layers into a tall, airy, puffed structure), while the Teochew technique uses LARD or SHORTENING (which is nearly 100% fat, producing NO steam, and the layers separate by MECHANICAL delamination — the fat melts and lubricates the separation, but no gas inflates it). The Teochew result is FLAKY (the layers separate into thin, flat, individual sheets that shatter on contact) rather than PUFFY (the French result, where the layers inflate into tall, airy, soft pillows). Flaky = shattering, thin, crisp. Puffy = airy, tall, soft. Same technique, different fat, different physics, different texture.`,
    },
    {
      title: 'Cook the filling, wrap the yolk, assemble — the moon enters the cake',
      description: `FILLING: combine the mashed mung bean, mashed durian, sugar, oil and salt in a pan over low heat. Stir constantly 10-15 minutes — the mixture dries and thickens as the residual moisture evaporates (the same dry-frying principle the ruốc tôm used, here applied to a sweet paste rather than a protein). The filling is done when: it pulls away from the pan's sides in a mass, holds its shape when scooped, and tastes: sweet (sugar + mung bean's natural starch-sweetness), FUNKY-TROPICAL (the durian's sulfur volatiles, now concentrated by the moisture reduction — the kitchen smells intensely of durian during this step, and the smell will linger for hours), and faintly salty (the salt, rounding the sweetness).

Cool the filling completely. Divide into 12 portions (roughly 35 g each). Take one portion — flatten into a disc in your palm. Place one steamed salted egg yolk in the centre. Wrap the filling around the yolk — pinch closed, forming a ball with the YOLK at the exact centre, invisible, surrounded on all sides by the mung-bean-durian paste.

ASSEMBLE: take one laminated dough roll. Flatten the end into a disc (the spiral's cross-section is visible — the alternating layers fanning out from the centre). Place the filled ball (yolk inside, paste outside) on the disc. Wrap the dough around the filling — pinch closed at the top, smooth the surface, and flatten gently into a disc roughly 7-8 cm diameter, 3 cm thick. The assembled bánh pía is: dough (outside, laminated, multi-layered) → filling (middle, mung-bean-and-durian paste) → yolk (centre, golden, dense, salty).

Place seam-side DOWN on a parchment-lined baking sheet. Brush the top with egg wash (1 beaten egg + 1 tbsp water) — the wash produces a golden, glossy, lacquered surface during baking. Stamp or mark the top if desired (the Sóc Trăng bakeries stamp each bánh pía with a red or gold character identifying the filling — "đậu sầu riêng" for mung-bean-durian, "thập cẩm" for mixed filling).`,
      tip: `The salted egg yolk's SANDY TEXTURE (the signature mouthfeel — crumbly, granular, fat-rich, dissolving on the tongue in 5-6 seconds rather than the smooth, creamy dissolution of a fresh yolk) is produced by the 30-day salt cure's effect on the yolk's LIPID-PROTEIN STRUCTURE: the salt (NaCl) penetrates the yolk by osmosis, draws out water (the yolk's moisture drops from ~50% to ~30%), and the dehydration causes the yolk's lipoproteins (the spherical particles that hold the yolk's fat in emulsion) to aggregate and partially crystallise. The crystallised lipoproteins are GRANULAR — each grain is a tiny, fat-rich, protein-coated particle roughly 10-50 μm in diameter — and the tongue perceives the granularity as "sandy" or "grainy." The sandiness is not a defect — it is the GOAL, the textural contrast the smooth mung-bean paste needs, and the reason the yolk is salt-cured for 30 days rather than used fresh.`,
    },
    {
      title: 'Bake 25-30 minutes — the layers separate, the yolk sets, the durian perfumes the kitchen',
      description: `Preheat oven to 180°C. Bake the assembled bánh pía 25-30 minutes.

THE BAKING'S EVENTS:

MINUTES 0-10: the lard/shortening in the fat-dough layers MELTS (at 30-40°C for lard, 35-45°C for shortening). The melted fat lubricates the gap between adjacent oil-dough layers, and the layers begin to DELAMINATE — separating from each other as the fat-barrier between them liquefies. The bánh pía's surface begins to colour (the egg wash's proteins Maillard-brown, the sugar in the oil dough caramelises).

MINUTES 10-20: the layers are fully separated — each one a thin, individual, crisp, golden sheet of oil-dough, with the fat between them now fully rendered and either absorbed by the dough or evaporated. The filling inside the crust is STEAMING — the mung bean and the durian's residual moisture converts to steam, cooking the filling from inside, and the steam pressure gently inflates the innermost dough layers (the ones closest to the filling) into a slightly puffed, slightly airy, transitional zone between the crisp outer crust and the soft inner filling.

MINUTES 20-25: the egg wash's Maillard browning reaches its target — deep golden, glossy, lacquered. The salted egg yolk in the centre has reached 75-80°C and has SET to its final texture: sandy, dense, crumbly, the cured lipoproteins fully solidified.

MINUTE 25-30: DONE. The bánh pía is: golden-brown on top (the egg wash's lacquer), pale-golden on the sides (the raw dough's colour, barely browned), and — when tapped — producing a hollow, crisp sound (the separated layers vibrating independently like the pages of a closed book fluttering in wind).

Cool 20 minutes — the cooling firms the layers (the rendered fat re-solidifies as the temperature drops below the fat's melting point, and the re-solidified fat holds the separated layers in their delaminated positions permanently). A hot bánh pía's layers are flexible (the fat is liquid); a cooled bánh pía's layers are RIGID (the fat is solid) — and the rigid layers SHATTER when bitten, producing the cascade of flakes that is the bánh pía's defining textural event.

CUT IN HALF to reveal the cross-section: the LAYERED CRUST (dozens of thin, concentric, golden sheets, each one individually visible — the lamination's proof), the YELLOW FILLING (mung bean + durian, smooth, dense, aromatic), and the GOLDEN YOLK at the centre (round, dense, sandy, the moon in the cake). The cross-section is the bánh pía's most photographed angle, and the Instagram-era has made the cut-in-half bánh pía one of the most shared food images from the Mekong Delta.

BITE: the crust SHATTERS — dozens of flakes shearing simultaneously, the re-solidified fat-barrier between layers fracturing under the tooth's pressure, each flake separating and falling (onto the plate, onto the table, onto the lap — the bánh pía is a MESSY pastry, and the mess is the flake-cascade's unavoidable consequence). The filling arrives next: smooth, sweet, mung-bean-starchy, and then the DURIAN — the sulfur-tropical-custardy wave that blooms in the nasal cavity 2 seconds after the bite and that polarises the table (the durian-lovers close their eyes; the durian-wary open theirs wider). The yolk arrives last: sandy, salty, fat-dense, a mineral anchor that GROUNDS the durian's volatile extravagance and the mung bean's sweet smoothness in something HEAVY, something EARTHY, something that tastes of preserved egg and salt-cured tradition and the 30 days it sat in the brine.

Bánh pía Sóc Trăng is the collection's most CULTURALLY LAYERED pastry — literally layered (the laminated dough) and figuratively layered (Teochew Chinese technique + Mekong Delta durian + Vietnamese-adapted filling + Mid-Autumn symbolic architecture). The pastry ships nationwide in its iconic round tin — the Sóc Trăng souvenir, the airport-shop impulse buy, the Tết gift between families — and the tin's label says "Sóc Trăng" in a font that every Vietnamese person recognises, because the font IS the province, and the province IS the pastry, and the pastry IS the layered, flaky, durian-scented, yolk-centred proof that three cultures made one cake.`,
      tip: `The durian's POLARISING AROMA is a documented olfactory phenomenon: the same volatile compounds (ethanethiol, diethyl disulfide, ethyl 2-methylbutanoate) are perceived as "delicious, rich, tropical fruit" by roughly 60% of the global population and as "repulsive, rotten, sulfurous" by roughly 30% (the remaining 10% are ambivalent). The split is partly GENETIC (variations in the OR7D4 olfactory receptor gene, which detects androstenone and related sulfur compounds, correlate with durian preference) and partly CULTURAL (populations exposed to durian from childhood learn to associate the sulfur volatiles with sweetness and pleasure rather than with decay — the same learned-association that makes the mắm bò hóc's fermented-fish funk "essential" to the Sóc Trăng native and "overwhelming" to the Hà Nội visitor). The bánh pía's durian is the collection's most divisive ingredient, and the division is the durian's nature: it is BOTH delicious and repulsive, depending on the nose, and neither reading is wrong.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
