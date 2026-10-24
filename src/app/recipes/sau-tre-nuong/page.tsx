'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'sau-tre-nuong',
  title: `Sâu Tre Nướng (Grilled Bamboo Worms — Tây Bắc)`,
  subtitle: `The fat, cream-white larvae that live inside the internodes of dying bamboo — cousins of the coconut beetle larvae, but feeding on bamboo starch rather than palm, and carrying a nuttier, drier, more vegetal flavour that tastes of bamboo forest rather than of coconut garden. Threaded on skewers and grilled over charcoal for ninety seconds until they crisp to golden, crunchy, protein-rich tubes the size of a little finger.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '20 min',
  rating: 4.6,
  baseServings: 4,
  heroImage: '/images/recipes/sau-tre-nuong.jpg',
  intro: `Sâu tre — bamboo worms — are the northwestern highland's edible larvae, the Tây Bắc counterpart to the Mekong Delta's đuông dừa (coconut beetle larvae). Both are beetle larvae, both feed on the starchy pith of their host plant, and both are harvested by splitting the dying trunk and collecting the fat, cream-white grubs inside. But they are different species feeding on different plants, and the difference shows in the flavour: the đuông dừa tastes of coconut (because it ate coconut palm and its fat is coconut-derived lauric acid), while the sâu tre tastes of bamboo — drier, nuttier, more vegetal, with a faintly grassy, almost green-tea-like undertone that comes from the bamboo starch's own volatile profile.

The larvae are typically the immature stages of the bamboo borer beetle (Omphisa fuscidentalis or related Crambidae/Pyralidae species) — small moths whose caterpillars bore into living or dying bamboo culms and feed on the starchy pith for several months before pupating. The larvae are 3-5 cm long and 0.8-1 cm wide — smaller than the đuông dừa — and their fat content is lower (roughly 30-40% vs the đuông dừa's 60%), which means they grill to a DRIER, CRUNCHIER product rather than the đuông dừa's custardy melt. The sâu tre is a crunchy snack; the đuông dừa is a melting one. Two larvae, two host plants, two textures, two highlands.

The harvest is seasonal: the bamboo groves of Sơn La, Điện Biên, Lai Châu and Yên Bái produce larvae primarily from October through January, when the bamboo's life cycle pushes the dying culms into the stage the borer beetles colonised months earlier. The highland villagers know which culms are infested — the entry holes are visible, and the culm sounds hollow when tapped — and they split them with a machete to reveal the larvae inside, 10-30 per internode, fat and ready.

The grilling is identical to the đuông dừa's format — skewered, charcoal, brief — but the timing is slightly different because the sâu tre's lower fat content means it reaches crunchiness faster and has no custard phase: it goes from raw to crunchy without passing through the đuông dừa's melting-fat intermediate. The window is even shorter: 60-75 seconds per side, and overcooked sâu tre is a charred, bitter husk rather than merely a dry one.`,
  ingredientSections: [
    {
      title: 'The larvae',
      items: [
        { amount: 200, unit: 'g', name: 'sâu tre (bamboo worms), live or fresh-frozen, about 60-80 larvae', note: `Available at highland markets in season (Oct-Jan). OUTSIDE VIETNAM: edible bamboo worms are available freeze-dried or frozen from edible-insect suppliers in Thailand (where they are called "rot duan" and are widely eaten) and increasingly in Europe. Fresh-frozen > freeze-dried for grilling.` },
      ],
    },
    {
      title: 'Seasoning',
      items: [
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 0.5, unit: 'tsp', name: 'mắc khén, toasted and ground' },
        { amount: 0.5, unit: 'tsp', name: 'chili powder (optional)' },
      ],
    },
    {
      title: 'For grilling',
      items: [
        { amount: 10, name: 'bamboo skewers' },
        { amount: 1, name: 'charcoal grill with low embers' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 1, name: 'saucer of muối mắc khén' },
        { amount: 1, name: 'lime, in wedges' },
      ],
    },
  ],
  steps: [
    {
      title: 'Thread and grill 60-75 seconds per side — crunch, not custard',
      description: `Thread 6-8 larvae per skewer — push through lengthwise. They are smaller and firmer than the đuông dừa, so they sit on the skewer more stably.

Grill over low charcoal embers, 60-75 seconds per side. The larvae do NOT go through the đuông dừa's custard phase — their lower fat means the protein denatures before the fat fully melts, so the texture goes directly from raw-soft to crunchy-dry without the melting-fat intermediate. At 60 seconds: the skin tightens, turns golden, and the body crisps. At 90 seconds: optimally crunchy throughout. Past 2 minutes: charred and bitter.

Season immediately with salt and mắc khén while hot.`,
      tip: `The sâu tre's lower fat (30-40% vs đuông dừa's 60%) changes the grilling physics entirely. The đuông dừa has enough fat to create a LIQUID phase between the melt point (35°C) and the denaturation point (65°C) — the custard window. The sâu tre's lower fat means the protein matrix denatures and firms BEFORE enough fat has melted to create a liquid interior, so the texture transitions directly from raw to crunchy — a phase skip. Same grill, same charcoal, different fat content, different texture trajectory. The fat percentage IS the texture recipe.`,
    },
    {
      title: 'Eat whole — the crunch is bamboo-nutty, not coconut-creamy',
      description: `Slide 2-3 larvae off the skewer. Squeeze lime. Dip in muối mắc khén. Eat in one bite.

The crunch: the entire larva is crisp — skin and interior, unlike the đuông dừa's crisp-outside-custard-inside duality. The flavour: nutty (the bamboo starch, converted by the larva's metabolism into a drier, more cereal fat than the đuông dừa's coconut fat), faintly grassy (volatiles from the bamboo — 2-acetyl-1-pyrroline, the same jasmine-rice compound the banana-leaf nhệch released), and savoury-clean (protein-dense, low moisture, concentrated by the grill).

The sâu tre is the highland's bar snack — eaten with corn wine or rice wine at evening gatherings, by the handful, the way the lowland eats roasted peanuts. It is the edible insect at its most snackable: small, crunchy, salty, nutty, and gone in one bite.

Two larva recipes in the collection now: đuông dừa (Bến Tre, coconut palm, 60% fat, custard texture, melting) and sâu tre (Tây Bắc, bamboo, 35% fat, crunchy texture, snapping). Same order Coleoptera, different host plants, different fat contents, different textures, different highlands. The larvae taste of what they ate, and what they ate is the landscape they grew in.`,
      tip: `The 2-acetyl-1-pyrroline detected in bamboo worms' volatile profile — the same "popcorn/jasmine rice" aroma compound the banana-leaf grilling released — comes from the bamboo's own chemistry: living bamboo produces 2-AP as a stress metabolite, and the larva ingests it with the starch it feeds on. The compound survives the larva's metabolism and is present in the larva's fat body, where it is released during grilling. The sâu tre smells faintly of popcorn on the grill for the same chemical reason the banana leaf does: both carry 2-AP from bamboo-family plants (Poaceae), one directly (the leaf) and one through an animal intermediary (the larva). The bamboo's chemistry arrives at the nose by two routes, and both smell of the forest.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
