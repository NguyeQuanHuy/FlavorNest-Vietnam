'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'chao-hanh-trung',
  title: `Cháo Hành Trứng (Scallion and Egg Congee — The Cold-and-Flu Porridge)`,
  subtitle: `Plain rice congee with two additions: sliced scallion stirred in at the last minute and a raw egg cracked into the hot porridge, swirled into silky ribbons. The Vietnamese folk remedy for cảm cúm — eaten hot, under a blanket, followed by sleep. Not medicine. Not quite food. The bowl the mother makes when the child shivers.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '50 min',
  rating: 4.8,
  baseServings: 2,
  heroImage: '/images/recipes/chao-hanh-trung.jpg',
  intro: `Cháo hành trứng is the Vietnamese chicken soup — not literally but functionally: the food a culture prescribes for the common cold. Every food culture has one, and the Vietnamese version is: rice porridge, scallion, egg, and the instruction to eat it hot, pull the blanket over your head, and sweat.\n\nThe sweating is the point. The Vietnamese protocol — ăn cháo hành, đắp chăn, ra mồ hôi — is a diaphoretic therapy: hot porridge raises core temperature, scallion's allicin promotes peripheral vasodilation (more blood to skin = more sweating), the blanket traps heat, and the sweating is the treatment's declared outcome. The folk belief: the sweat carries the cảm out. The physiology: fever-amplification enhances immune function (neutrophil migration, T-cell activation increase at 38-39°C vs 37°C), and the subsequent cooling brings subjective relief.\n\nThe scallion's allicin is a documented mild antimicrobial, vasodilator (stimulates nitric-oxide production) and diaphoretic. It decomposes above 60°C within minutes — which is why the grandmother insists the scallion goes in RAW or barely cooked. The egg provides biological-value-100 protein in silky ribbons distributed through every spoonful.`,
  ingredientSections: [
    { title: 'The cháo', items: [
      { amount: 150, unit: 'g', name: 'plain rice, rinsed' },
      { amount: 1, unit: 'L', name: 'water (1:7 ratio)' },
      { amount: 0.5, unit: 'tsp', name: 'salt' },
    ]},
    { title: 'The scallion', items: [
      { amount: 6, name: 'scallions, sliced — whites and greens separated', note: `Whites go in 2 min before serving (allicin half-life at 90°C ≈ 3 min — 2 min retains ~60%). Greens go in RAW at serving (maximum volatile sulfide for nose-opening).` },
    ]},
    { title: 'The egg', items: [
      { amount: 2, name: 'eggs, beaten lightly', note: `Poured in a thin stream into 90°C+ cháo — sets into silky ribbons in seconds.` },
    ]},
    { title: 'Optional', items: [
      { amount: 10, unit: 'g', name: 'ginger, finely grated', note: `Second vasodilator alongside allicin = double diaphoretic.` },
      { amount: 1, unit: 'tbsp', name: 'fish sauce' },
      { amount: 1, unit: 'tsp', name: 'ground white pepper', note: `Piperine = mild thermogenic.` },
    ]},
  ],
  steps: [
    {
      title: 'Cook the cháo trắng — same platform, same 40 minutes',
      description: `Cook exactly as cháo trắng: rinse, boil, bare simmer lid-ajar, stir every 8-10 min, 40-45 min until grains dissolve. Add salt. The cháo must be VERY HOT when scallion and egg go in — actively bubbling, not lukewarm. The heat serves three functions: partially cooks scallion whites (softening without destroying allicin), sets egg ribbons instantly (ovalbumin denatures at 62°C), and delivers therapeutic heat to the patient's body.`,
      tip: `The platform-then-addition principle: cook rice to dissolution first (patient clock — 40 min), add volatile/thermolabile ingredients last (impatient clock — 3 min). The 40-minute simmer would destroy allicin (half-life 3 min at 90°C) and over-set the egg (tough, not silky). Respecting both clocks produces a porridge where the platform is fully developed and the additions are fully preserved.`,
    },
    {
      title: 'Scallion whites in, egg stream in, greens on top — 3 minutes, the allicin window',
      description: `MINUTE 1: scallion WHITES into the simmering cháo. Stir. The whites soften, releasing allicin — the kitchen fills with sharp, sulfurous, nose-opening scent. Add grated ginger if using.\n\nMINUTE 2: pour beaten egg in a THIN STREAM while stirring gently in ONE direction. The egg sets into pale-yellow ribbons on contact with 90°C+ porridge. Gentle stirring preserves the ribbons; vigorous stirring breaks them invisible.\n\nMINUTE 3: off heat. Fish sauce if using. Scatter RAW scallion GREENS over the surface — vivid green on ivory white, volatile sulfides at maximum, their scent reaching the blocked nose through the steam before the spoon arrives.\n\nWhite pepper. Sesame oil if desired. Total: 3 minutes. At 3 min ~50% allicin remains; at 6 min ~25%; at 10 min <10%. Speed is preservation.`,
      tip: `Scallion whites-then-greens staging: whites have higher allicin but tougher texture → 2 min heat (softens, retains 60% allicin). Greens have higher volatile sulfides but delicate texture → ZERO heat (raw, maximum volatile preservation). Each part's compound stability dictates its cooking time. The white is the medicine you cook briefly. The green is the medicine you don't cook at all.`,
    },
    {
      title: 'Eat hot, blanket, sweat — the food is one step in a five-step treatment',
      description: `Carry the bowl to the bed. Eat quickly (5-7 min) — each spoonful hot, smooth, egg-silky, scallion-sharp. The steam opens the nose before the spoon reaches the mouth.\n\nTHE BLANKET PROTOCOL: immediately after finishing, lie down, blanket over entire body. Core temperature rises 0.3-0.5°C from 300 ml of 60°C liquid + allicin/gingerol vasodilation pushes heat to skin. Sweating begins in 10-20 min — light, then heavy, 20-40 min of whole-body diaphoresis.\n\nThen: remove blanket, change damp clothes, rest. The elevated temperature during sweating enhanced immune-cell activity; the subsequent cooling brings relief.\n\nCháo hành trứng is a PROCEDURE, not just a recipe: eat (hot) → lie down → blanket → sweat → change → rest. The food is step one of five, and the treatment's efficacy depends on all five. The grandmother prescribes a procedure older than any cookbook and more trusted than any pharmacy.\n\nThe dưỡng bệnh collection is now complete: ten dishes from the liquid drink (nước mía gừng) through the softest solid (trứng chưng) through the porridges (cháo trắng, cháo hành trứng, cháo cá lóc) through the soups (súp gà, canh sườn, canh khổ qua, canh rau ngót) to the cooling dessert (chè đậu xanh). Each dish asks a little more of the stomach than the last. The collection is the Vietnamese kitchen's complete recovery protocol: from bed to table, one bowl at a time.`,
      tip: `The diaphoretic protocol — hot food + vasodilator + blanket + sweating — appears across folk-medicine traditions worldwide: Russian banya, Korean jjimjilbang, Mexican sudor treatment, Ayurvedic svedana. All share the same mechanism: deliberately raising core temperature to stimulate immune function. The Vietnamese cháo hành trứng is the mildest version — core temperature raised only 0.3-0.5°C vs sauna's 1-2°C — and its mildness is appropriate: the patient is already ill, and a gentle amplification is safer than an aggressive one. The grandmother's treatment is the gentlest fever-amplification in the global folk-medicine canon, and its gentleness is its wisdom.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
