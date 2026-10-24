'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-duc-lac',
  title: `Bánh Đúc Lạc (Savoury Rice Cake with Peanuts — Vinh Style)`,
  subtitle: `Rice flour and lime water — stirred constantly for 20 minutes until the slurry sets to a dense, trembling, alkaline-white slab studded with whole roasted peanuts — cooled, cut into rectangles, dipped in mắm tôm pha. The Vinh 3 PM snack: white, wobbly, nutty, 5,000 đồng, eaten standing with a toothpick.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '1 hr + cooling',
  rating: 4.7,
  baseServings: 8,
  heroImage: '/images/recipes/banh-duc-lac.jpg',
  intro: `Bánh đúc is one of the Vietnamese kitchen's oldest preparations — rice flour cooked in water until the starch gelatinises into a solid, sliceable gel. The Nghệ An version adds lime water (nước vôi trong — calcium hydroxide solution, pH 9-10) and whole roasted peanuts.\n\nThe lime water's alkalinity firms, whitens and elasticises the gel through STARCH-CALCIUM CROSS-LINKING: Ca²⁺ ions bridge adjacent starch chains, tightening the network beyond what neutral-pH starch achieves. The result: firmer (holds shape when cut), whiter (alkaline bleaches carotenoid pigments), more elastic (calcium cross-links = molecular springs = the characteristic WOBBLE).\n\nThe mắm tôm pairing is the purest BLAND-INTENSE oscillation in the collection: the gel contributes ZERO flavour (neutral starch + sub-threshold calcium), the mắm tôm contributes MAXIMUM (salt, umami, funk, acid, chili — every receptor simultaneously). The peanuts are crunch-islands in the smooth-white sea — whole, not crushed, so each one is a concentrated single-point crunch event the textureless gel does not predict.`,
  ingredientSections: [
    { title: 'The bánh đúc', items: [
      { amount: 300, unit: 'g', name: 'rice flour' },
      { amount: 1.2, unit: 'L', name: 'water' },
      { amount: 2, unit: 'tbsp', name: 'lime water (nước vôi trong)', note: `Clear liquid above settled Ca(OH)₂. Make: 1 tbsp food-grade calcium hydroxide in 500 ml water, settle overnight, use clear top only.` },
      { amount: 0.5, unit: 'tsp', name: 'salt' },
      { amount: 1, unit: 'tbsp', name: 'neutral oil' },
    ]},
    { title: 'The peanuts', items: [
      { amount: 100, unit: 'g', name: 'roasted peanuts, whole, skins removed', note: `WHOLE — the crunch-island must be concentrated, not dispersed. 3-5 peanuts per slice.` },
    ]},
    { title: 'Mắm tôm pha', items: [
      { amount: 3, unit: 'tbsp', name: 'mắm tôm' },
      { amount: 2, unit: 'tbsp', name: 'lime juice' },
      { amount: 1.5, unit: 'tbsp', name: 'sugar' },
      { amount: 2, name: 'chilies, sliced' },
      { amount: 1, name: 'clove garlic, pounded' },
    ]},
  ],
  steps: [
    {
      title: 'Stir 20-25 minutes without stopping — the spoon builds the structure',
      description: `Whisk rice flour, water, lime water and salt smooth. Set over medium-low heat. Stir CONSTANTLY with a wooden spoon — bottom-scraping, circular, 20-25 minutes.\n\nMIN 0-5: slurry warms, stirring prevents scorching (burned starch = dark flecks in the white gel). MIN 5-10: thickens — starch granules swell and burst at 60-65°C, amylose releases, the spoon's resistance increases. MIN 10-15: thick paste — opaque white, pulls from pot sides. MIN 15-20: dense, elastic, the spoon leaves a trail that fills in 5 seconds. Calcium cross-links forming. MIN 20-25: ready — dense, smooth, elastic, holds shape when dropped back into pot.`,
      tip: `The constant stirring distributes heat (preventing scorch), breaks starch granules (shearing releases amylose for a smoother gel), and aligns starch chains (circular shearing creates a faint directionality — the gel slices more cleanly along the stirring direction, the same anisotropy that makes wood split along the grain).`,
    },
    {
      title: 'Fold in peanuts, pour into mould, cool — the peanuts freeze in place',
      description: `Off heat: fold whole peanuts into the hot paste — the paste's viscosity (10,000-50,000 cP) suspends the peanuts permanently (settling velocity < 1 mm/hour at this viscosity). Pour into oiled tray. Smooth to 2-3 cm thick.\n\nCool 1-2 hours. The gel retrogrades (amylose re-crystallises) and calcium cross-links set to final rigidity. The slab: firm, wobbly (trembles as one mass when the tray is shaken), chalk-white, peanut-studded.\n\nCut into 4 x 8 cm rectangles with a wet knife. Each rectangle holds shape when lifted, wobbles on the plate, trembles on the toothpick.`,
      tip: `Peanut suspension = viscosity exceeding the nut's settling velocity. The cook who adds peanuts at the RIGHT moment (thick enough to suspend, soft enough to fold) understands viscosity without naming it. Add too early = peanuts sink to the bottom. Add too late = paste too stiff to fold. The moment is the technique.`,
    },
    {
      title: 'Dip in mắm tôm, eat standing — silence, shout, crunch, repeat',
      description: `Mix mắm tôm pha. Spear each rectangle with a toothpick. Dip. Bite.\n\nThe gel yields — smooth, cool, dissolving slowly as saliva's amylase hydrolyses the starch. Lime water's faint alkaline mineral note. Then the peanut — CRUNCH, sudden, concentrated, a drum hit in a lullaby. Then the mắm tôm — funk softened by the starch's neutral cushion, salt amplified by the gel's blandness.\n\nThree-beat rhythm: bland (gel) → intense (mắm tôm) → crunch (peanut) — repeating every bite, for 2 minutes, standing at a Vinh cart at 3 PM.\n\nBánh đúc lạc is the collection's most minimal savoury snack — rice flour, water, lime, peanuts, and mắm tôm on the side. The gel has NO flavour of its own. All seasoning is EXTERNAL. The wobbling rectangle on the toothpick is "not quite food and not quite nothing" — the 3 PM snack between lunch and dinner, between hunger and satisfaction, between the two meals that define the day.`,
      tip: `Bánh đúc + mắm tôm = the collection's purest bland-intense pairing — purer than mắm nhum + rau luộc (vegetable has faint flavour), purer than cơm nắm + muối vừng (sesame has nuttiness). The tongue alternates between silence (zero-flavour gel) and a shout (every-receptor mắm tôm), and the alternation is the rhythm, and the rhythm is the architecture, and the architecture is the reason a person stands at a Vinh cart eating a wobbling rectangle and feeling completely satisfied.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
