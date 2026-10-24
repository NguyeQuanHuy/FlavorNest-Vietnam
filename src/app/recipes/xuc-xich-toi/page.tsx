'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'xuc-xich-toi',
  title: `Xúc Xích Tỏi (Vietnamese Garlic Sausage — Saucisson à l'Ail Meets the Wok)`,
  subtitle: `Pork — coarsely ground, mixed with a staggering amount of garlic, seasoned with fish sauce and white pepper instead of the French sel rose and quatre-épices — stuffed into casings and either steamed in banana leaf or poached in broth, then pan-fried or grilled until the casing crisps and the garlic inside caramelises to a sweet, golden, allium-perfumed paste. The French charcuterie the Vietnamese street-food economy adopted, miniaturised and fried.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '2 hr',
  rating: 4.8,
  baseServings: 6,
  heroImage: '/images/recipes/xuc-xich-toi.jpg',
  intro: `Xúc xích — from the French saucisse — entered the Vietnamese vocabulary alongside the colonial administration's imported charcuterie, and it stayed because the Vietnamese kitchen recognised in the sausage a format it already understood: seasoned meat, stuffed into a casing, cooked by gentle heat, sliced and served. The giò lụa was already there — pounded pork in banana leaf, steamed — and the French saucisse was, structurally, the same idea in a different casing with a different seasoning. The Vietnamese cook looked at the saucisse and saw a giò with garlic.

The adaptation was immediate and thorough. The French saucisson à l'ail (garlic sausage) uses: pork, pork fat, garlic, sel rose (curing salt with nitrite), quatre-épices (the French four-spice: pepper, nutmeg, clove, ginger), and a natural or collagen casing. The Vietnamese xúc xích tỏi uses: pork, pork fat, garlic (MORE garlic — roughly double the French proportion, because the Vietnamese palate reads garlic as a primary flavour, not a background aromatic), fish sauce (replacing the sel rose — fish sauce provides salt, umami AND a fermented depth that curing salt cannot), white pepper (replacing the quatre-épices — the Vietnamese kitchen's universal warm spice), sugar (the Vietnamese addition to every savoury preparation — a pinch that rounds the fish sauce's salt), and — in the most common street-food version — no casing at all: the meat mixture is wrapped in banana leaf or in plastic wrap, steamed, chilled, sliced, and then PAN-FRIED or GRILLED per order.

The pan-frying is the Vietnamese innovation that most decisively separates the xúc xích from its French ancestor. A French saucisson à l'ail is served sliced, cold, on a charcuterie board — its texture is dense, smooth, emulsified, eaten at room temperature. A Vietnamese xúc xích tỏi is served sliced and then FRIED — each slice hitting a hot pan or a grill until the cut faces are golden-brown, crispy and caramelised, the garlic pieces inside browning through the Maillard reaction, and the sausage transforming from a cold charcuterie to a hot, crispy, sizzling street-food snack. The fry is the step that moved the sausage from the French salon to the Vietnamese sidewalk, and the sidewalk is where the xúc xích lives now: at the bánh mì carts, at the beer halls (quán nhậu), at the school-gate snack stalls, fried golden and served on a stick or tucked into a baguette.`,
  ingredientSections: [
    {
      title: 'The sausage mixture',
      items: [
        { amount: 700, unit: 'g', name: 'pork shoulder, coarsely ground (70% lean / 30% fat)', note: `Coarser grind than the giò lụa's paste — the xúc xích should have visible meat grain, a rustic texture that the French saucisson de campagne shares. The fat must be 25-30% — leaner and the sausage is dry; fattier and it is greasy when fried.` },
        { amount: 300, unit: 'g', name: 'pork back-fat, diced 5 mm cubes', note: `The fat cubes stay distinct in the cooked sausage — visible white squares in the pink meat — and they melt slightly during frying, creating tiny pockets of rendered lard that the crispy surface absorbs.` },
        {
          amount: 40,
          unit: 'g',
          name: 'garlic (about 12-15 cloves), minced fine',
          note: `DOUBLE the French proportion. The garlic is the sausage's identity — it should be tasted in every bite, not detected as a background note. Minced fine (not pasted — the pieces should be visible in the slice as tiny, golden, caramelised specks after frying).`,
        },
        { amount: 3, unit: 'tbsp', name: 'fish sauce', note: `Replacing the French sel rose — providing salt + umami + fermented depth. No curing salt, no nitrite: the Vietnamese xúc xích is a FRESH sausage (cooked immediately, stored refrigerated, consumed within a week), not a cured sausage (preserved by nitrite for weeks). The colour is therefore pale-grey-pink when cooked, not the nitrite-induced bright pink of a French saucisson cuit.` },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'ground white pepper' },
        { amount: 1, unit: 'tbsp', name: 'potato starch or tapioca starch', note: `The binder — absorbs moisture during steaming, prevents the sausage from crumbling when sliced. The giò lụa uses no starch (its myosin gel is the binder); the xúc xích's coarser grind has less myosin extraction and needs the starch's help.` },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
        { amount: 2, unit: 'tbsp', name: 'rice wine or vodka', note: `The alcohol dissolves garlic's fat-soluble volatile compounds more efficiently than water, distributing the garlic flavour more evenly through the meat matrix.` },
      ],
    },
    {
      title: 'The casing',
      items: [
        {
          amount: 1,
          name: 'natural hog casings (2 metres), soaked and rinsed, OR banana-leaf rectangles + kitchen twine',
          note: `CASING VERSION: the traditional sausage format — stuff, twist, poach. BANANA-LEAF VERSION (more common in Vietnamese home kitchens): wrap the mixture in banana leaf like a giò lụa log, tie, steam. Both produce the same interior; the difference is the exterior — casing gives a snap-when-bitten skin, banana leaf gives a smooth, peel-away surface.`,
        },
      ],
    },
    {
      title: 'For cooking and serving',
      items: [
        { amount: 2, unit: 'tbsp', name: 'oil for pan-frying' },
        { amount: 1, name: 'saucer of tương ớt (chili sauce) or muối tiêu chanh' },
        { amount: 1, name: 'baguette, sliced (optional — the bánh mì xúc xích format)' },
        { amount: 100, unit: 'g', name: 'đồ chua (pickled carrot and daikon)' },
        { amount: 50, unit: 'g', name: 'rau sống: cucumber, coriander, lettuce' },
      ],
    },
  ],
  steps: [
    {
      title: 'Mix, stuff or wrap, steam or poach — the sausage sets',
      description: `MIXING: combine the ground pork, diced back-fat, minced garlic, fish sauce, sugar, pepper, starch, oil and rice wine in a large bowl. Mix vigorously with your hands for 3-4 minutes — the mixing extracts enough myosin from the ground meat to create a tacky, cohesive paste that holds together (less extraction than the giò lụa's 30-minute pound, but enough for structural integrity). The mixture should STICK to your hand when you turn it upside down — if it falls, mix 2 more minutes.

CASING METHOD: thread the soaked casing onto a sausage stuffer or a piping-bag nozzle. Stuff the mixture into the casing, twisting every 12-15 cm to form individual links. Do not overstuff — the casing should be firm but not taut (overstuffing bursts during cooking). Poach the links in 75°C water for 25-30 minutes — the internal temperature must reach 72°C for food safety.

BANANA-LEAF METHOD: divide the mixture into 3 portions (~330 g each). Shape each into a log 15 cm long, 4-5 cm diameter. Wrap tightly in softened banana leaf (double layer), tie with twine at both ends and the middle. Steam over boiling water 35-40 minutes.

Cool completely — refrigerate 2 hours minimum (overnight is better). The chilling firms the fat cubes (they solidify from rendered liquid back to solid, providing the white-square visual in the slice) and sets the starch binder fully.`,
      tip: `The absence of nitrite (curing salt) means the Vietnamese xúc xích is a FRESH sausage — it does not have the bright-pink colour that nitrite produces in French and German cured sausages (nitrite reacts with myoglobin to form nitrosomyoglobin, which is heat-stable and stays pink after cooking). The xúc xích's colour after steaming is a natural pale grey-brown (denatured myoglobin without nitrite fixation). The colour is "less attractive" by European charcuterie standards but more honest: what you see is the meat's actual cooked colour, without chemical intervention. Some Vietnamese commercial xúc xích producers add food colouring (annatto or carmine) to mimic the pink — the homemade version does not, and the grey-brown is the mark of the real.`,
    },
    {
      title: 'Slice and pan-fry — the Vietnamese step the French never took',
      description: `Slice the chilled sausage into rounds 1-1.5 cm thick. Each round shows: the coarse pink-grey meat, the white fat-cube squares, and the tiny garlic specks — a mosaic cross-section that the frying will darken and caramelise.

Heat oil in a pan over medium-high heat. Lay the slices flat — the same single-layer, no-crowd, no-stir principle the tép rang and the bò lúc lắc documented. Fry 2-3 minutes per side without moving.

THE TRANSFORMATION: the cut face hits the hot oil and the Maillard reaction begins across the entire surface simultaneously — the meat's amino acids brown, the fat cubes render slightly and fry in their own fat, and the garlic specks (already minced, already distributed through the slice) undergo their own Maillard browning, turning from raw-white to golden-brown-caramelised in 2 minutes. Each garlic speck becomes a tiny, sweet, toasted-allium flavour bomb embedded in the sausage's surface.

Flip at 2-3 minutes — the first side is golden-brown, crispy-edged, with the fat cubes glistening and the garlic specks visibly darkened. Fry the second side 2 minutes.

The finished slices: crispy-golden on both cut faces, warm and soft in the centre (the fat has re-melted, the meat has re-warmed), and smelling intensely of fried garlic — the aroma that is the Vietnamese street-food stall's advertisement, drawing customers from 20 metres.`,
      tip: `The pan-frying step is what moved the sausage from the French charcuterie board (cold, sliced, civilised) to the Vietnamese street (hot, fried, immediate). The frying adds THREE things the cold sausage lacks: CRUNCH (the Maillard crust on the cut faces), AROMA (the garlic's volatile Maillard products — diallyl disulfide, methyl allyl trisulfide — are produced only above 140°C, and the cold sausage never reached that temperature during steaming), and TEMPERATURE (the warm, re-melted fat coats the tongue more efficiently than cold, solid fat, increasing the perceived richness per gram). The fry transforms the sausage from a storage product (the French intention: make it, store it, slice it cold) to an à-la-minute product (the Vietnamese intention: make it, store it, fry it NOW, eat it HOT).`,
    },
    {
      title: 'Eat from a stick, on a plate, or in a bánh mì — three formats, one sausage',
      description: `FORMAT 1 — THE STICK: thread 3-4 fried slices on a bamboo skewer. Dip in tương ớt (chili sauce). Eat standing, at the school gate, between classes. This is the xúc xích's most common format — the Vietnamese street-food-on-a-stick, sold for a few thousand đồng, eaten in 30 seconds.

FORMAT 2 — THE PLATE: arrange the fried slices on a plate with đồ chua, cucumber, coriander and a saucer of muối tiêu chanh. Eat with chopsticks, at a quán nhậu (beer hall), with a cold Bia Hà Nội or Bia Sài Gòn. The sausage is the nhậu snack — the salty, garlicky, crispy-fried thing the beer demands and the table shares.

FORMAT 3 — THE BÁNH MÌ: split a baguette, spread pâté (if available), lay 4-5 fried slices inside, add đồ chua, cucumber, coriander, chili sauce, and a drizzle of Maggi. Close. Bite. The bánh mì xúc xích is the French-Vietnamese synthesis at its most portable: French bread, French-derived sausage, Vietnamese garlic-fish-sauce seasoning, Vietnamese pickles and herbs, held in one hand, eaten while walking.

Each format delivers the same sausage and the same flavour: the coarse pork's savoury chew, the fat cubes' melted richness, the garlic's caramelised sweetness (the Maillard-browned garlic specks delivering allicin's descendants — the cooked-garlic compounds that are sweeter, rounder and less pungent than raw allicin), the fish sauce's umami background, and the crispy-fried surface's Maillard crunch. The sausage is one. The formats are many. And the street is where they all live.`,
      tip: `The xúc xích tỏi is the collection's second Franco-Vietnamese charcuterie (after the giò lụa, which is the Vietnamese mortadella) and the comparison is instructive: the giò lụa is POUNDED (emulsified, smooth, poreless — the Vietnamese equivalent of a weisswurst), while the xúc xích is GROUND (coarse, grainy, fat-cube-studded — the Vietnamese equivalent of a saucisson de campagne). The two represent opposite ends of the Vietnamese sausage spectrum: giò lụa is silk (fine, bouncy, celebration-formal), xúc xích is canvas (rough, chewy, street-casual). Both are pork, both are steamed, both are seasoned with fish sauce, and both descend from foreign traditions (Chinese for the giò, French for the xúc xích). The Vietnamese kitchen adopted both, adapted both, and assigned them to different tables: the giò to the wedding, the xúc xích to the sidewalk. Same protein, different grind, different occasion, different Vietnam.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
