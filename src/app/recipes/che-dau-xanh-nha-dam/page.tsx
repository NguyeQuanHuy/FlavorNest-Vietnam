'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'che-dau-xanh-nha-dam',
  title: `Chè Đậu Xanh Nha Đam (Mung Bean and Aloe Vera Sweet Soup)`,
  subtitle: `Mung beans — simmered to a soft, golden, starchy purée — served with translucent cubes of aloe vera gel in a light rock-sugar syrup. The Vietnamese kitchen's most explicitly "thanh nhiệt giải độc" — heat-clearing, toxin-flushing — dessert, eaten cold on a hot day or warm at the bedside, and carrying in its two ingredients the cooling power of a bean the body digests gently and a succulent the body uses to soothe.`,
  category: 'DESSERT',
  difficulty: 'Easy',
  totalTime: '1 hr 30 min',
  rating: 4.7,
  baseServings: 6,
  heroImage: '/images/recipes/che-dau-xanh-nha-dam.jpg',
  intro: `Đậu xanh — the mung bean, Vigna radiata — and nha đam — aloe vera, Aloe barbadensis — are, in the Vietnamese hot-cold food classification, the two most "mát" (cooling) non-bitter ingredients in the pantry: the mung bean is classified as cooling because it is low-fat, high-starch, easy to digest (low thermic effect), and produces no metabolic heat; the aloe vera is classified as cold ("hàn") because its gel is 99% water, its texture is cold-feeling (the gel's viscosity creates a cooling sensation on the tongue and in the throat), and its folk-medicine reputation as a detoxifier, anti-inflammatory and digestive soother places it in the most extreme cooling category alongside the winter melon.

The combination — mung bean + aloe vera in a sweet soup — is the Vietnamese kitchen's dual-cooling dessert: the bean cools from inside (gentle digestion, no heat generation), and the aloe cools from outside (the gel's physical coolness on the throat, the aloe's mucilage coating the oesophagus and the stomach lining like a protective film). The chè is prescribed for: summer heat, post-fever recovery, acne and skin inflammation (which the folk medicine classifies as "nóng trong" — internal heat expressing outward), and the morning after a night of fried food and alcohol (which is "nóng" — heat — by every measure).

The mung bean is one of the Vietnamese kitchen's most fundamental ingredients — it appears in bánh (cakes), in chè (sweet soups), in xôi (sticky rice fillings), in bánh cuốn (steamed-roll fillings), and in savoury dishes as a starch thickener. Its starch gelatinises easily (lower gelatinisation temperature than rice starch — roughly 60-65°C vs rice's 68-78°C), its protein is moderate (24% of dry weight — higher than any cereal grain), and its flavour is mild, sweet, starchy and neutral — the perfect background for a dessert that should taste of sweetness and coolness rather than of complexity.

The aloe vera gel — the clear, viscous, slightly bitter, 99%-water mucilage from the inner leaf of the Aloe barbadensis plant — is one of the most studied medicinal plants in the world: its acemannan (a polysaccharide) has documented wound-healing, immunomodulatory and gastroprotective activity in clinical studies; its aloin (an anthraquinone in the latex, NOT in the gel — the distinction matters) is a potent laxative that must be removed by proper gel preparation; and its overall gel composition (99% water, 0.5% polysaccharide, 0.1% vitamins and minerals) makes it one of the lowest-calorie, highest-water-content food-grade gels available.

The chè brings the two together in the simplest possible format: beans simmered to softness, aloe cubed and blanched, both served in a rock-sugar syrup that is the same light, clear, single-perfume syrup the chè hạt sen long nhãn used. The dessert is mild, soft, cool (especially when served chilled), and — in the Vietnamese framework — therapeutically restorative, the sweet course that does not add heat but subtracts it.`,
  ingredientSections: [
    {
      title: 'The mung beans',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'dried mung beans (đậu xanh), hulled (peeled) or unhulled',
          note: `HULLED (yellow, peeled): produces a smoother, faster-cooking, golden purée — the preferred version for chè. UNHULLED (green, skin-on): produces a more textured, greener result with slightly more fibre. Both work. Soak 2-4 hours or overnight — the soaking halves the cooking time and produces a more evenly cooked bean.`,
        },
      ],
    },
    {
      title: 'The aloe vera',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'aloe vera gel, cubed (from 2-3 large aloe leaves)',
          note: `PREPARATION IS CRITICAL: fillet the leaf — cut the spiny edges, slice the flat sides off to reveal the clear gel, and carefully cut the gel away from the green rind (the rind contains aloin, the yellow latex that is a potent laxative and is NOT the edible gel). Cut the clear gel into 1.5 cm cubes. Soak the cubes in clean water with 1 tsp salt for 30 minutes — the salt soak removes the residual latex, reduces the raw-bitter taste, and firms the gel. Blanch the cubes in boiling water for 30 seconds — drain — the blanch further removes bitterness and improves the gel's translucency. The prepared cubes should be: clear, translucent, firm-jelly, with no yellow-green residue and no bitter taste. PRE-PREPARED: jarred/canned aloe vera cubes (in syrup) are available at Asian groceries — drain, rinse, and use directly.`,
        },
      ],
    },
    {
      title: 'The syrup',
      items: [
        { amount: 120, unit: 'g', name: 'rock sugar (đường phèn)' },
        { amount: 1.2, unit: 'L', name: 'water' },
        { amount: 2, name: 'pandan leaves, knotted', note: `The aromatic — same pandan the chè hạt sen used, same vanilla-green sweet note.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Simmer the beans to golden softness — 35-45 minutes for a starchy purée',
      description: `Drain the soaked mung beans. Place in a pot with 800 ml fresh water (separate from the syrup — the beans cook in plain water, and the syrup is made separately). Bring to a boil. Reduce to a gentle simmer.

Cook 35-45 minutes for hulled beans (50-60 for unhulled). The beans progress: firm → softening → splitting → dissolving. The target depends on preference:

FOR A SMOOTH PURÉE (the classic chè version): cook until the beans have fully dissolved into a thick, golden, homogeneous starch-porridge. Stir frequently in the last 10 minutes to break any remaining whole beans against the pot wall. The purée should be: thick enough to coat a spoon, golden (from the hulled bean's natural pigment), and smooth.

FOR A TEXTURED VERSION (some whole beans visible): cook until most beans have split and softened but a few remain whole. This version has more visual interest and a more varied mouthfeel.

The beans' starch gelatinises at 60-65°C — lower than rice starch — which is why mung beans cook to softness faster than rice and produce a smoother purée: the lower gelatinisation temperature means the starch granules swell and burst earlier, releasing their amylose into the cooking water and thickening it from the inside out.`,
      tip: `Mung-bean starch's lower gelatinisation temperature (60-65°C vs rice's 68-78°C) is the reason mung-bean desserts are smoother than rice-based ones: the starch dissolves EARLIER and MORE COMPLETELY, producing a more homogeneous, more pourable, less grainy matrix. The same property makes mung-bean starch the preferred starch for glass noodles (miến) — its complete dissolution produces the transparent, smooth, pore-free gel that glass noodles require, while rice starch's incomplete dissolution produces the opaque, grainy, slightly rough texture of rice noodles (bún, phở). The mung bean's starch architecture — higher amylose content (30-35% vs rice's 20%), more uniform granule size — produces both the smoothest dessert and the clearest noodle.`,
    },
    {
      title: 'Make the pandan syrup, combine with beans and prepared aloe',
      description: `SYRUP: dissolve the rock sugar in 1.2 L water over medium heat. Add the knotted pandan leaves. Simmer 10 minutes — the pandan releases its sweet, vanilla-green fragrance (2-acetyl-1-pyrroline, the same compound the banana leaf and the bamboo worm carry). Remove the pandan. The syrup should be: clear, pale gold, sweet but not cloying, and carrying the pandan's single-note perfume.

COMBINE: pour the pandan syrup into the cooked mung-bean purée (or vice versa). Stir to combine — the purée thins slightly as the syrup dilutes it, and the final consistency should be: pourable (like a thick soup), sweet (the rock sugar's clean sweetness + the bean's own starchy sweetness), and smooth.

Add the prepared aloe vera cubes. Stir gently — the translucent cubes distribute through the golden bean-and-syrup liquid, each cube visible as a clear, jelly-like jewel in the golden background.

SERVE WARM: ladle into bowls as is — the warm version is the sick-bed version, where the warmth aids gastric motility and the gentle sweetness does not challenge the recovering stomach.

SERVE CHILLED: cool to room temperature, then refrigerate 2-4 hours. The chilled version is the summer version, the detox version, the morning-after version — the cold intensifies the cooling effect (the cold temperature + the aloe's physical coolness + the mung bean's metabolic coolness = triple cooling), and the chilled chè is the most refreshing dessert in the Vietnamese canon: golden, cool, sweet, with translucent aloe cubes that the tongue registers as cold-and-soft, a textural contrast against the bean's warm-and-smooth that no other chè ingredient provides.`,
      tip: `The aloe vera gel's cooling sensation on the tongue is partly PHYSICAL (the gel is cold, having been refrigerated) and partly PERCEPTUAL — the acemannan polysaccharide in the gel has a high specific heat capacity and a high water content (99%), which means it absorbs more heat from the tongue per gram than any solid food, producing a prolonged cooling sensation even at room temperature. The same mechanism makes watermelon feel cool on a hot day: the high water content acts as a thermal buffer, absorbing the tongue's body heat and taking longer to warm up than a low-water food would. The aloe is a thermal sink, and the tongue reads the heat-absorption as "coolness."`,
    },
    {
      title: 'Eat by the spoonful — the cooling dessert, the clearing sweet, the gentle end',
      description: `Each spoonful: the mung-bean purée (golden, smooth, starchy-sweet, carrying the pandan's green-vanilla whisper), the aloe cube (translucent, cool, jellylike, tasting of almost nothing — its flavour is neutral, its role is textural and thermal), and the rock-sugar syrup (clear, sweet, the medium that carries both).

The mouthfeel: the purée coats the tongue (smooth, warm or cool depending on the serving temperature, dissolving in 3-4 seconds as the saliva's amylase begins breaking the mung-bean starch down — the same in-mouth pre-digestion the cháo trắng documented). The aloe cube resists the tongue's pressure for a moment (the gel is firm-jelly, not liquid), then yields — collapsing into a cool, slippery, almost-water mass that slides down the throat and coats the oesophagus with a thin film of acemannan mucilage. The mucilage coating is the aloe's physical contribution to the "thanh nhiệt" effect: the film protects the throat and the stomach lining from irritation (the same gastroprotective mechanism that makes aloe vera gel a documented treatment for mild gastritis and oesophageal reflux in clinical studies), and the protection FEELS like cooling because irritation feels like heat.

Chè đậu xanh nha đam is the collection's final dessert and its final explicitly cooling dish — the sweet course that closes the dưỡng bệnh collection with a bowl that subtracts heat rather than adding it, that soothes rather than stimulating, and that asks the body for nothing in return for everything it gives: hydration (the syrup's water + the aloe's 99% water), gentle energy (the mung bean's slow-release starch + the rock sugar's sucrose), physical cooling (the aloe's thermal-sink effect), and mucosal protection (the acemannan's gastroprotective film).

The dưỡng bệnh collection is now complete: ten dishes, ten positions on the recovery spectrum, from the liquid drink (nước mía gừng) through the softest solid (trứng chưng) through the porridges (cháo trắng, cháo cá lóc) through the soups (súp gà, canh sườn, canh khổ qua, canh rau ngót) to the cooling dessert (chè đậu xanh). Each dish asks a little more of the stomach than the last, each dish gives a little more to the body than the last, and the collection — taken as a sequence — is the Vietnamese kitchen's complete recovery protocol: from bed to table, one bowl at a time.`,
      tip: `Chè đậu xanh nha đam closes the collection's food-as-medicine file with its gentlest, sweetest, most cooling entry — the dessert that is also a treatment, the sweet that is also a soother, and the food that exists at the boundary between nutrition and therapy where the Vietnamese kitchen has always operated. The collection has documented food as fuel (the cơm nắm), food as engineering (the giò lụa), food as art (the chả phượng), food as identity (the nậm pịa), food as cosmology (the xôi ngũ sắc), and now food as care (the entire dưỡng bệnh collection). The last spoonful of the last chè is a spoonful of mung bean, aloe vera and rock sugar, and it is also a spoonful of the Vietnamese kitchen's deepest conviction: that food is not only what the body eats but what the body needs, and that the cook who understands the difference is the cook who feeds the family not just well but wisely.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
