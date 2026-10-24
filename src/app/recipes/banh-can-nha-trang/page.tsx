'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-can-nha-trang',
  title: `Bánh Căn Nha Trang (Clay-Mould Mini Rice Cakes — Nha Trang’s Street Griddle)`,
  subtitle: `Rice-flour batter — ladled into tiny, heated, clay moulds set into a charcoal brazier — cooked from below until the bottom crisps to a golden shell while the top remains soft and custardy, each mould topped with a cracked quail egg or a spoonful of shrimp before the lid goes on and the steam finishes the top. Popped from the mould with a bamboo stick, served in pairs, and dipped in nước mắm ớt ngọt — the sweet-spicy fish sauce the central coast pours on everything round and small.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '45 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/banh-can-nha-trang.jpg',
  intro: `Bánh căn — from the Cham word kan (cake/disc) — is the central-south coast’s GRIDDLE CAKE: a preparation that exists in the narrow coastal strip from Ninh Thuận through Khánh Hòa to Phú Yên and almost nowhere else in Vietnam. The cake belongs to the same family as the southern Indian appam (rice-batter cake cooked in a small, curved, clay cup), the Sri Lankan hopper (same technique, coconut-milk batter), and the Thai khanom krok (coconut-milk rice cake in hemispherical clay moulds) — all of them RICE-BATTER-IN-CLAY-MOULD preparations that the Indian Ocean’s coastal cuisines share, and that the Cham people (whose Champa kingdom traded with India and Sri Lanka for a millennium) almost certainly brought to the Vietnamese central coast.

The MOULD is the preparation’s defining tool: a khuôn bánh căn — a flat, terracotta or clay slab roughly 30 x 20 cm, with 6-8 HEMISPHERICAL DEPRESSIONS (each roughly 7-8 cm diameter, 2-3 cm deep) carved into its surface. The slab sits directly on a charcoal brazier, and the charcoal’s radiant heat heats the clay slab from below, and the clay slab’s thermal mass (the same high-specific-heat, low-conductivity terracotta the bò nướng ngói documented) conducts the heat evenly to each mould-depression. The mould is: pre-oiled (brushed with scallion oil before each pour — the oil prevents sticking and contributes a faint allium aroma to the cake’s crispy bottom), pre-heated (the slab must reach roughly 200-220°C before the batter goes in — tested by the water-drop-sizzle method), and PERMANENT (the terracotta slab is used for years, decades — each vendor’s slab carries the seasoning of a thousand pours, the accumulated polymerised-oil layer that makes each subsequent pour release more cleanly than the first).

The BATTER is the simplest in the collection: rice flour + water + salt, at a 1:1.5-2 ratio (THINNER than the bánh xèo’s batter, thinner than the bánh cống’s — the thin batter produces a THINNER cake, roughly 3-5 mm thick, that crisps on the bottom in 2-3 minutes while the top remains soft). Some vendors add a splash of coconut milk (the fat enriches the crispy bottom) or a tablespoon of cooked rice blended in (the pre-gelatinised starch produces a slightly chewier, more textured cake). The batter is mixed and rested 30 minutes (the hydration rest, the same rest every rice-flour batter in the collection requires for uniform gelatinisation).

THE COOKING is a TWO-PHASE process — the bottom is CONTACT-HEATED (crispy) and the top is STEAM-COOKED (soft):

PHASE 1 — BOTTOM: the batter is ladled into the hot, oiled mould (roughly 30-40 ml per depression — filling to 2/3 depth). The batter contacts the 200-220°C clay surface and begins gelatinising immediately from the bottom up. The bottom layer dehydrates and CRISPS in 2-3 minutes — the rice starch at the base vitrifies to the same STARCH-GLASS the bánh xèo, the bánh cống and the xôi phồng documented, here in a hemispherical cup-shape rather than a flat disc.

TOPPING: before covering, the vendor adds: a cracked QUAIL EGG (the egg slides into the soft, still-liquid batter’s surface, the white spreading to the mould’s edges, the yolk sitting in the centre like a tiny golden eye) or a spoonful of DICED SHRIMP or MINCED PORK or SQUID (the protein embeds in the soft top surface). The topping choice is the eater’s — each pair of cakes can be different, and the vendor takes orders per-pair.

PHASE 2 — TOP: the vendor places a TERRACOTTA LID over the entire slab — the lid traps the steam rising from the batter’s moisture and from the charcoal’s radiant heat, and the steam cooks the TOP of the cake from above. The lid stays on for 90-120 seconds — the quail egg’s white sets (opaque, firm), the yolk warms but stays RUNNY (the lid’s steam at 100°C cooks the white at the surface but does not fully penetrate to the yolk’s centre in 90 seconds — the yolk remains liquid gold), and the cake’s top surface sets from liquid to a soft, custardy, slightly translucent gel.

The finished bánh căn is: CRISPY on the bottom (golden-brown, starch-glass, 1-2 mm of dehydrated rice crust that SHATTERS when bitten), SOFT on the top (custardy, translucent, moist, yielding), and carrying the TOPPING (the quail egg with its runny yolk, or the shrimp/pork/squid, embedded in the soft top like a jewel in a setting). The cake is: SMALL (7-8 cm diameter, fitting in the palm), ROUND (the mould’s hemisphere producing a shallow cup-shape), and served in PAIRS (two cakes per serving, presented bottom-to-bottom — the two crispy bottoms facing outward, the two soft tops facing inward, creating a sandwich-like structure that the eater can hold in one hand).

The DUAL-TEXTURE architecture (crispy-bottom / soft-top) is produced by the same MOISTURE GRADIENT the bánh cống documented: the bottom (in contact with the 200°C+ clay) dehydrates to <5% moisture (starch-glass territory), while the top (insulated from the direct heat by the batter’s 3-5 mm thickness and cooked only by 100°C steam from the lid) remains at 40-60% moisture (soft-gel territory). The gradient is BUILT INTO THE COOKING METHOD — no other technique in the collection produces this specific top-soft / bottom-crispy architecture from a single pour.`,
  ingredientSections: [
    {
      title: 'The batter',
      items: [
        { amount: 200, unit: 'g', name: 'rice flour (bột gạo tẻ)' },
        { amount: 350, unit: 'ml', name: 'water' },
        { amount: 50, unit: 'ml', name: 'coconut milk (optional — enriches the crispy bottom)' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'Toppings (choose per pair)',
      items: [
        { amount: 12, name: 'quail eggs', note: `The CLASSIC — one egg per mould. The quail egg’s small size (10-12 g) is PERFECTLY SCALED to the 7-8 cm mould: the white spreads to the edges, the yolk sits in the centre, and the 90-second lid-steam cooks the white without setting the yolk. A chicken egg would overflow the mould and overwhelm the delicate cake.` },
        { amount: 100, unit: 'g', name: 'shrimp, diced small (alternative topping)' },
        { amount: 100, unit: 'g', name: 'ground pork (alternative topping)' },
        { amount: 100, unit: 'g', name: 'squid, diced (alternative topping)' },
      ],
    },
    {
      title: 'Scallion oil (for the moulds)',
      items: [
        { amount: 3, unit: 'tbsp', name: 'neutral oil' },
        { amount: 3, name: 'scallions, sliced fine', note: `The scallion oil: heat the oil, add the sliced scallion, fry 30 seconds until fragrant. The oil is brushed into the hot moulds before each pour — the scallion’s allicin derivatives contribute a faint, sweet, onion-like aroma to the cake’s crispy bottom.` },
      ],
    },
    {
      title: 'Nước mắm ớt ngọt (sweet-spicy fish sauce — the central coast dip)',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 3, unit: 'tbsp', name: 'sugar' },
        { amount: 100, unit: 'ml', name: 'water' },
        { amount: 3, name: 'cloves garlic, minced' },
        { amount: 3, name: 'red chilies, minced' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 1, unit: 'tbsp', name: 'sautéed onion, minced (the Nha Trang addition — the cooked onion’s sweetness)' },
      ],
    },
    {
      title: 'Accompaniments',
      items: [
        { amount: 200, unit: 'g', name: 'rau sống: lettuce, húng quế, xà lách xoong (watercress)' },
        { amount: 100, unit: 'g', name: 'green mango, julienned' },
        { amount: 100, unit: 'g', name: 'đồ chua (pickled carrot + daikon)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Heat the clay moulds, oil, pour, top, lid — the 4-minute cycle',
      description: `REST THE BATTER 30 minutes after mixing (rice flour + water + coconut milk + salt → smooth, thin, pourable). The rest hydrates the starch fully.

HEAT the terracotta mould-slab on the charcoal brazier — 10-15 minutes until the clay reaches 200-220°C (water-drop sizzle test: a drop dances and evaporates in 1-2 seconds = ready).

THE CYCLE (repeated for each batch of 6-8 cakes):

BRUSH each mould-depression with scallion oil — the oil sizzles on the hot clay, the scallion fragments crisp immediately, and the oil fills the depression’s pores (the same terracotta-pore-seasoning the bò nướng ngói documented — the clay’s 5-50 μm pores trap the oil as micro-reservoirs, creating the non-stick surface).

POUR: ladle 30-40 ml of batter into each oiled depression. The batter spreads to the depression’s edges and fills to roughly 2/3 depth. The batter’s bottom layer contacts the 200°C+ clay and begins gelatinising IMMEDIATELY — within 5 seconds, the bottom 0.5 mm has set from liquid to solid.

TOP: crack a quail egg into each mould (or spoon the diced shrimp/pork/squid onto the batter’s still-liquid surface). The egg white spreads outward, the yolk stays in the centre.

COVER with the terracotta lid — the lid descends over the entire slab, sealing all 6-8 moulds simultaneously. The trapped steam fills the space between the lid and the batter’s surface.

COOK 3-4 MINUTES total:

MINUTE 0-2: the BOTTOM crisps — the clay’s conducted heat dehydrates the base layer to starch-glass. The bottom transitions: soft-white → firm-beige → crispy-golden as the dehydration progresses. At minute 2: the bottom is golden-brown and SOUNDS CRISPY when tapped with the bamboo stick (the stick’s tap produces a hollow, crisp, tapping sound from the starch-glass shell, vs a dull, muffled sound from an under-cooked, still-moist bottom).

MINUTE 2-3.5: the TOP cooks — the lid’s trapped steam sets the top surface from liquid to soft-gel. The quail egg’s white sets (opaque), the yolk warms to 55-60°C (still runny — the thermal gradient through the 3-5 mm cake means the heat from below and the steam from above converge at the yolk’s position at roughly 60°C after 90 seconds of lid-on time, which is BELOW the yolk’s full-set temperature of 65-70°C).

MINUTE 3.5-4: REMOVE THE LID. The cakes are done — bottoms golden-crispy, tops soft-custardy, quail eggs set-white-runny-yolk.

POP: slide the bamboo stick under each cake’s edge and LEVER upward — the cake pops out of the mould cleanly (the scallion oil + the seasoned clay’s non-stick surface releasing the starch-glass bottom without resistance). Place each cake on the serving plate BOTTOM-UP (the golden-crispy bottom facing the sky, the soft-custardy top facing down — the visual is: golden, round, crispy, with the quail egg’s white-and-gold visible through the translucent rice-cake surface).

Serve in PAIRS — two cakes placed together, bottoms facing outward.`,
      tip: `The CLAY MOULD’s thermal properties are the bánh căn’s hidden technology: the terracotta’s low thermal conductivity (0.6-1.0 W/m·K) means the heat transfers to the batter SLOWLY and EVENLY — no hot spots, no cold spots, just a uniform 200-220°C across the entire depression’s surface. A metal mould (aluminium at 205 W/m·K, steel at 50 W/m·K) would produce: HOT SPOTS at the centre (where the charcoal’s flame is strongest) and COLD EDGES (where the charcoal’s heat is weakest), resulting in a cake that burns in the centre and stays raw at the edges. The clay’s low conductivity AVERAGES the heat across the mould’s surface, producing the uniform golden-brown bottom that is the bánh căn’s hallmark. The clay mould is NOT a primitive tool that the metal mould improved — it is the OPTIMAL tool, and the metal mould is a regression. The vendors who switch to metal for speed discover the hot-spot problem and switch back.`,
    },
    {
      title: 'Dip in nước mắm ớt ngọt, wrap with herbs — the Nha Trang street format',
      description: `NƯỚC MẮM ỚT NGỌT: dissolve sugar in water over low heat. Add fish sauce, minced garlic, minced chili, sautéed onion and lime juice. The sauce should be: SWEET-FIRST (the sugar:fish-sauce ratio is roughly 1:1, the same sweet-salt chord the cơm tấm’s nước mắm ngọt documented — the central-south coast shares the south’s sweet-sauce preference), SPICY (more chili than the south’s version — the central coast likes MORE HEAT), and carrying the sautéed onion’s COOKED SWEETNESS (the onion’s sugars, caramelised during sautéing, add a depth-of-sweetness the raw-garlic-only version does not carry).

THE EATING: pick up a bánh căn pair. DIP the crispy bottom into the nước mắm ớt ngọt — the sauce coats the starch-glass surface in a thin, glossy, sweet-spicy film (the starch-glass’s non-porous surface does not absorb the sauce — it SITS ON TOP, and the sauce’s flavour hits the tongue FIRST, before the crispy bottom shatters and before the soft top yields).

BITE: the bottom SHATTERS (the starch-glass crust, 1-2 mm, golden, dehydrated — the same shattering crunch the bánh xèo documented, here in a hemispherical cup-shape that concentrates the crunch-force at the bite-point, producing a louder, more decisive crack than a flat disc would). The soft top YIELDS (the custardy, 40-60% moisture, soft-gel upper layer — no crunch, no resistance, just warm, smooth, rice-custard softness that the mouth receives as CONTRAST to the bottom’s shatter).

THE QUAIL EGG: the bite reaches the embedded egg — the set white (firm, neutral, 2 mm thick) breaks first, then the RUNNY YOLK flows — a 3-5 ml burst of warm, golden, rich, emulsified liquid (the yolk’s lipoproteins, still in their native, un-denatured, liquid state — the 90-second steam did not fully coagulate them) that floods the mouth and mixes with the nước mắm ngọt’s sweet-spicy and the rice-crust’s starch-fragments. The yolk-burst is the bánh căn’s CLIMAX — the hidden liquid inside the solid cake, the surprise the first-timer does not expect and the regular customer anticipates with every bite.

WRAP (optional — the full format): wrap a bánh căn in a lettuce leaf, add a strand of green mango julienne (the acid-crunch), a sprig of húng quế (the anise-fresh), and a piece of đồ chua (the pickled acid-crunch). The wrap is the COMPLETE VERSION — the cake’s crispy-soft-yolk-burst inside a fresh-raw-acid-herbal wrapper, a complete flavour-and-texture system in one hand-held bite.

Bánh căn Nha Trang is the Khánh Hòa collection’s most STREET-PERFORMANCE dish — the dish whose making is the entertainment: the vendor’s hands moving across the 6-8 moulds simultaneously (oiling, pouring, cracking eggs, covering, timing, popping — a choreography of 20 hand-motions per 4-minute cycle, repeated 50-80 cycles per morning session), the charcoal’s glow beneath the clay slab, the sizzle of the batter hitting the hot oil, the crack of the quail egg, the pop of the finished cake from the mould — the stall is a KITCHEN-AS-THEATRE, and the audience sits on plastic stools 50 cm from the performance and eats the props.`,
      tip: `The QUAIL EGG’s size (10-12 g, vs a chicken egg’s 55-65 g) is not an aesthetic choice — it is a THERMAL-ENGINEERING choice: the quail egg’s small mass means it reaches thermal equilibrium FASTER than a chicken egg in the same cooking environment. In the 90-second lid-steam, a quail egg’s white (2-3 mm thick layer around the yolk) reaches 70°C+ and SETS, while the yolk (5-6 mm diameter) reaches only 55-60°C and stays RUNNY. A chicken egg in the same 90 seconds: the white sets but the yolk (15-18 mm diameter) reaches only 45-50°C (the larger mass takes longer to heat) — still raw-cold rather than warm-runny. The quail egg’s small thermal mass = the yolk reaches the WARM-BUT-RUNNY zone (55-60°C) in 90 seconds, while the chicken egg’s larger mass undershoots it. The quail egg is the RIGHT egg for the bánh căn because its size matches the cooking time: the egg and the cake are done at the SAME MOMENT, and the synchrony is thermal, not decorative.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
