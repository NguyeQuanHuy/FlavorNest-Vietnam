'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'tom-chien-bot',
  title: `Tôm Chiên Bột (Vietnamese Battered Fried Shrimp)`,
  subtitle: `Whole shrimp in a light, shatteringly crisp batter of rice flour, tapioca starch and cold sparkling water — fried once at 170°C to cook the shrimp through, rested, then fried again at 190°C to set the crust to glass. The double fry that turns a shrimp into a cracker, eaten with muối tiêu chanh and nothing else.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/tom-chien-bot.jpg',
  intro: `Tôm chiên bột — shrimp fried in batter — is one of those Vietnamese dishes so simple it is rarely written down, because every cook already knows how to make it and every variation is someone's mother's version that she considers non-negotiable. The batter might be rice flour alone, or rice flour and tapioca, or rice flour and cornstarch, or rice flour and egg, or rice flour and beer, and every combination produces a slightly different crust — lighter or denser, crunchier or puffier, more golden or more pale — and every mother's version is the correct one inside her kitchen.

This recipe documents the version that professional Vietnamese cooks — the stall cooks, the restaurant cooks, the ones who fry five hundred shrimp a day — generally converge on: a batter of rice flour and tapioca starch in a 2:1 ratio, thinned with ice-cold sparkling water, barely mixed, with no egg. The rice flour gives the crust its crunch and its grain-flavour. The tapioca gives it its glass-like shatter and its sauce-resistance. The sparkling water gives it its lightness — the CO₂ bubbles in the water create air pockets in the batter that expand in the oil and produce a lacy, open-textured, extraordinarily light crust that shatters at a breath. And the cold temperature keeps everything from developing gluten (rice flour has no gluten, but keeping the batter cold also slows starch gelatinisation at the mixing stage, which means the batter stays fluid and thin rather than thickening into a paste).

The shrimp is kept simple: shell-on for the tail, deveined, butterflied if large, and dipped-and-fried in a single fluid motion. The double fry — first at 170°C to cook the shrimp and set the batter, then a rest, then a second fry at 190°C to dehydrate the crust to a shattering crispness — is the technique that separates a home fry from a professional one. The first fry cooks. The second fry crisps. And the rest between them lets the interior moisture migrate to the surface, so the second fry has something to evaporate and the crust can dehydrate to its maximum crunch.

The dipping is muối tiêu chanh — the same salt-pepper-lime that has appeared with the gà Hồ and the ghẹ Hàm Ninh — because a fried shrimp in a batter this good needs only a sharpener, not a sauce. The lime's citric acid cuts the oil, the salt amplifies the shrimp's sweetness, and the pepper adds warmth. A nước chấm would work. A mayo would work. But muối tiêu chanh says: the shrimp is good enough, the batter is good enough, and the cook is confident enough, to offer nothing more.`,
  ingredientSections: [
    {
      title: 'The shrimp',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'large shrimp (16-20 count), shell-on tail, peeled and deveined',
          note: `Leave the tail shell on — it is the handle the eater holds and it fries into a crispy, carotenoid-red fan. Butterfly larger shrimp (cut along the back, open flat) so they fry evenly and present a wider surface for the batter to coat.`,
        },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 0.5, unit: 'tsp', name: 'ground white pepper' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
      ],
    },
    {
      title: 'The batter',
      items: [
        {
          amount: 100,
          unit: 'g',
          name: 'rice flour (bột gạo)',
          note: `The crunch. Rice flour produces a harder, drier, more granular crust than wheat — the same reason it is the foundation of every Vietnamese fried batter in this collection.`,
        },
        {
          amount: 50,
          unit: 'g',
          name: 'tapioca starch (bột năng)',
          note: `The shatter. Its amylopectin gelatinises into a glassy, transparent, bubble-textured shell that breaks clean rather than crumbling. The 2:1 rice-to-tapioca ratio is the balance between crunch (rice) and shatter (tapioca).`,
        },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 0.25, unit: 'tsp', name: 'baking powder', note: `A tiny amount — it generates additional CO₂ during the first seconds in the oil, producing extra loft in the crust without making the batter taste of baking powder.` },
        {
          amount: 200,
          unit: 'ml',
          name: 'ice-cold sparkling water',
          note: `The lightness. The CO₂ bubbles act as leavening agents — they expand in the hot oil and create the airy, lacy, hole-riddled texture that defines a light tempura-style crust. ICE-COLD — because cold water prevents premature starch gelatinisation in the bowl and keeps the batter fluid and thin. Warm water thickens the batter and produces a dense, bready coat. If no sparkling water: ice-cold still water + an extra 0.5 tsp baking powder, but the lace is less fine.`,
        },
      ],
    },
    {
      title: 'For frying',
      items: [
        { amount: 1, unit: 'L', name: 'neutral oil, for deep-frying' },
      ],
    },
    {
      title: 'Muối tiêu chanh',
      items: [
        { amount: 2, unit: 'tbsp', name: 'fine sea salt' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper, freshly cracked' },
        { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 1, name: 'head of lettuce, leaves separated' },
        { amount: 100, unit: 'g', name: 'herbs: rau răm, húng quế, tía tô' },
        { amount: 1, name: 'cucumber, in batons' },
      ],
    },
  ],
  steps: [
    {
      title: 'Season the shrimp, mix the batter at the last second — cold, lumpy, thin',
      description: `Toss the prepared shrimp with the salt, pepper and fish sauce. Let them sit 10 minutes while you prepare everything else.

THE BATTER — mix at the last possible moment, immediately before frying. Whisk the rice flour, tapioca starch, salt and baking powder in a bowl. Pour in the ice-cold sparkling water and stir 5-6 times with chopsticks — STOP. The batter should be thin (like single cream), cold, and visibly lumpy with unmixed flour pockets.

Do not smooth it. Do not whisk. Do not let it sit. Every second of mixing develops the starch network and thickens the batter; every degree of warming loses CO₂ and lightness. The lumps are not a failure — they fry into extra-crunchy nodules on the shrimp's surface. The undermixing IS the technique.`,
      tip: `The under-mixed, ice-cold, sparkling-water batter is structurally identical to a Japanese tempura batter, and the principle is the same: minimum gluten development (irrelevant for rice flour, but minimum starch gelatinisation is very relevant), maximum air incorporation (from the sparkling water's dissolved CO₂), and maximum thermal shock when the cold batter hits the hot oil (the temperature differential drives a violent initial steam burst that inflates the batter's air pockets before the starch can set around them). The coldest possible batter into the hottest possible oil = the lightest possible crust. This is not a metaphor. It is thermodynamics, and the thermodynamics runs on temperature differential.`,
    },
    {
      title: 'First fry at 170°C — cook the shrimp, set the batter, 2 minutes',
      description: `Heat the oil to 170°C. Hold a shrimp by its tail, dip it into the batter (the entire body, not the tail), and lower it into the oil in one motion. Do not drop — lower gently to prevent the batter from splashing off.

Fry 4-5 shrimp per batch — do not crowd. They should have space to float freely without touching.

Fry 2 minutes. The batter puffs, bubbles, and sets from transparent to pale gold. The shrimp inside curls and turns pink. At 2 minutes: lift out with a spider and set on a rack. The shrimp is cooked through and the batter is set but NOT yet fully crisp — it is firm, pale, and still slightly soft at its thickest points.

Fry all the shrimp in batches. Set them all on the rack. Rest 3-5 minutes.

The rest is the bridge between the two fries: the interior moisture in the shrimp migrates outward through the batter to the surface, and the batter's residual internal moisture equalises. By the end of the rest, the surface is slightly damp — and that surface moisture is exactly what the second fry will evaporate to achieve the final shatter.`,
      tip: `The first fry's job is cooking, not crisping. At 170°C the oil is hot enough to gelatinise the starch and denature the shrimp's protein (both complete below 80°C at the centre), but not hot enough to drive the aggressive dehydration that produces a glass-hard crust. The pale, firm, slightly soft result at this stage is intentional — the crust has structure but not crunch, and the crunch comes from the second fry. Separating the two jobs — cooking and crisping — into two fries at two temperatures is the double-fry technique that every professional fryer uses for French fries, for Korean fried chicken, and for this shrimp. The technique is universal because the physics is universal.`,
    },
    {
      title: 'Second fry at 190°C — 60 seconds to glass',
      description: `Raise the oil to 190°C — noticeably hotter, and a drop of batter should brown in 5 seconds.

Re-fry the rested shrimp in batches — 45-60 seconds only. The crust goes from pale gold to deep gold in seconds, the surface moisture flashes to steam in a violent burst of tiny bubbles, and the batter — now dehydrated below 5% moisture — sets to a glass-hard, shatteringly crisp, lacy shell that crackles when you tap it with a fingernail.

Pull at deep gold. Do not wait for brown — 190°C crosses the threshold from golden to burnt in about 10 seconds, and the margin for error is narrower than the first fry's.

Drain upright on a rack — not on paper, which traps steam against the crust and softens it. The shrimp should be: deep golden, lacy-textured, extraordinarily light (pick one up — it should feel like it weighs nothing for its size), and when bitten should shatter into flakes before the sweet, firm shrimp inside is reached.`,
      tip: `The second fry's 190°C is the dehydration temperature — at this heat, the surface moisture that migrated outward during the rest evaporates in under a minute, and the starch matrix, now below 5% moisture, undergoes a phase transition from a flexible gel to a rigid glass. The transition is literal: the amylopectin chains, no longer plasticised by water molecules, lock into a crystalline arrangement that is structurally identical to glass — brittle, transparent, and shattering. A single-fried shrimp at 170°C never reaches this glass transition because the interior moisture keeps the crust above the threshold. The rest + second fry protocol crosses the threshold, and the crust becomes what it could not become in one fry: glass.`,
    },
    {
      title: 'Dip in muối tiêu chanh — shatter, sweet, salt, acid, done',
      description: `Pound the salt and pepper in a saucer. Squeeze the lime juice in one minute before serving.

Set the fried shrimp on a plate — piled, not arranged, because arranged shrimp steam each other and the crust softens at the contact points. Pile them loosely so air circulates.

Eat by hand: hold by the tail, dip the battered body into the muối tiêu chanh, and bite. The crust shatters — lacy, golden, weightless. The shrimp inside is sweet, firm, pink, curled. The salt amplifies the sweetness. The lime cuts the oil. The pepper warms the finish. Eat the tail too if it is crisp enough — it should be.

Wrap in lettuce with herbs if you want the green contrast, or eat the shrimp alone — it does not need the leaf, but the leaf does not hurt.

Eat within 10 minutes. The crust absorbs atmospheric moisture at a rate that is measurable and relentless — the same hygroscopic clock every fried food in this collection has raced. At 10 minutes the shatter has softened to crunch. At 20 it has softened to chew. The double fry bought extra time — the lower-moisture glass-state crust absorbs water more slowly than a single-fry crust — but it did not buy infinity. The plate is a countdown. Eat.`,
      tip: `Muối tiêu chanh appears for the third time in this collection — beside a heritage chicken (Bắc Ninh gà Hồ), beside a steamed crab (Phú Quốc ghẹ Hàm Ninh), and now beside a fried shrimp. Three proteins, three cooking methods, one condiment. The pattern is clear: muối tiêu chanh is the Vietnamese kitchen's signal that the ingredient is carrying the dish and the condiment's job is to sharpen rather than to season. Salt amplifies. Lime brightens. Pepper warms. Nothing else contributes its own voice. The condiment is transparent, and the transparency is reserved for the best ingredients in the simplest preparations. A fried shrimp this crisp, in a batter this light, with a shrimp this sweet, does not need a sauce that speaks. It needs a condiment that listens.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
