'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'chao-trang',
  title: `Cháo Trắng (Plain White Rice Congee)`,
  subtitle: `Rice and water. Nothing else. The grains simmered until they dissolve into a smooth, thick, starch-white porridge that coats the spoon and slides down the throat without asking the stomach for anything in return. The food the Vietnamese kitchen makes when the body can accept nothing else, and the food that — because it asks nothing — gives everything: warmth, hydration, glucose, comfort, and the message that someone is taking care.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '50 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/chao-trang.jpg',
  intro: `Cháo trắng — white congee, plain congee, empty congee — is the foundation beneath every other cháo in this collection. The cháo gà built on it with chicken stock. The cháo lươn built on it with eel stock. The cháo bò built on it with beef stock. The snake congee built on it with snake stock. Every one of them started here: rice, dissolved in water, simmered until the starch granules burst and release their amylose and amylopectin into the liquid, thickening it from water to porridge, from clear to opaque, from a drink to a meal. The cháo trắng is the platform, and every flavoured cháo is a variation built on the platform. This recipe documents the platform itself — the version with nothing added, the version the sick eat.

The Vietnamese relationship with cháo trắng is medical before it is culinary. When a child has a fever, the mother makes cháo trắng. When a grandparent cannot chew, the family makes cháo trắng. When someone returns from surgery, the hospital serves cháo trắng. When the stomach rejects everything — the flu, food poisoning, morning sickness, grief — the cháo trắng is the food the stomach does not reject, because it IS the stomach's own language: pre-digested starch (the cooking has already gelatinised what the stomach's amylase would have gelatinised), in a warm liquid (body temperature, no thermal shock), with no fat (fat slows gastric emptying), no fibre (fibre requires motility), no acid (acid irritates inflamed mucosa), and no complex protein (protein requires protease activity that a sick stomach may not have).

Cháo trắng is, in biochemical terms, an ORAL REHYDRATION SOLUTION augmented with glucose: the water replaces lost fluid, the dissolved starch provides a slow-release glucose source (the amylase in saliva and in the duodenum cleaves the gelatinised starch to maltose to glucose over 30-60 minutes, providing energy without the insulin spike that simple sugar causes), and the warm temperature promotes gastric blood flow and motility. The WHO's oral rehydration formula — water + glucose + sodium — is the clinical version of what every Vietnamese grandmother has been administering for centuries with a pot of cháo trắng and a pinch of salt.

The cooking is the simplest in the entire collection: one ingredient (rice), one liquid (water), one instruction (simmer until dissolved). The ratio is the only variable, and the ratio determines the consistency: 1:7 (rice to water) for a thin, drinkable cháo suitable for the sickest patients; 1:10 for a watery, almost-broth-like cháo for infants and for acute illness; 1:5 for a thick, porridge-like cháo for convalescence when the stomach is recovering. The mother adjusts the ratio by eye, by the sick person's tolerance, and by the spoon's behaviour: a cháo that drips from the spoon is too thin; a cháo that clings is too thick; a cháo that flows in a slow, smooth stream is right.`,
  ingredientSections: [
    {
      title: 'The cháo — nothing but this',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'plain rice (gạo tẻ), rinsed',
          note: `Regular rice, not glutinous. Rinsing removes surface starch dust that would cloud the cháo's smooth texture with gritty particles. Some cooks soak the rice 30 minutes before cooking — the pre-soaking shortens the cooking time and produces a smoother porridge because the grains begin to absorb water before the heat arrives.`,
        },
        {
          amount: 1.4,
          unit: 'L',
          name: 'water',
          note: `1:7 ratio for standard sick-bed cháo — thick enough to coat the spoon, thin enough to sip from a bowl without a spoon. Adjust: more water for thinner (acute illness), less for thicker (recovery). The water IS the medicine — hydration is the first treatment for fever, vomiting and diarrhea, and the cháo delivers it in a form the stomach accepts when plain water is refused.`,
        },
        {
          amount: 0.5,
          unit: 'tsp',
          name: 'salt',
          note: `The only seasoning. The salt replaces sodium lost through fever-sweat, vomiting or diarrhea — the same electrolyte-replacement logic the WHO oral rehydration solution uses. A pinch, not a pour: the cháo should taste faintly savoury, not salty.`,
        },
      ],
    },
    {
      title: 'The bedside accompaniments (chosen by the sick person\'s tolerance)',
      items: [
        {
          amount: 2,
          name: 'salted duck eggs (trứng muối), halved',
          note: `The classic first accompaniment — its salt replaces electrolytes, its fat is a gentle reintroduction of lipid, and its rich, creamy, oil-bleeding yolk against the bland cháo is the convalescent's first encounter with FLAVOUR after days of nothing. One half-egg per bowl.`,
        },
        { amount: 50, unit: 'g', name: 'ruốc (pork floss) — dried, shredded, sweet-salty, the lightest solid protein', note: `Sprinkled on the cháo's surface — each spoonful picks up a few filaments of the floss and the bland porridge gains a savoury, sweet, meaty whisper.` },
        { amount: 2, unit: 'tbsp', name: 'fish sauce + sliced ginger (for the recovering stomach that can handle acid and heat)' },
        { amount: 50, unit: 'g', name: 'pickled mustard greens (dưa cải) — the sour-crunch for the nearly-well' },
        { amount: 2, name: 'scallions, sliced' },
        { amount: 1, unit: 'tsp', name: 'sesame oil (a few drops — the first fat, the gentlest fat)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Rinse the rice, bring to a boil, then reduce to the lowest simmer — 40-45 minutes',
      description: `Rinse the rice in 2-3 changes of water until the water runs mostly clear. Combine the rinsed rice and the 1.4 L water in a heavy pot. Bring to a rolling boil over high heat — stirring once to prevent the grains from sticking to the bottom.

Immediately reduce to the LOWEST heat — a bubble every 4-5 seconds, the surface barely trembling. Cover with the lid slightly ajar (fully closed traps steam and the cháo boils over; fully open loses too much water to evaporation).

Simmer 40-45 minutes. Stir every 8-10 minutes — the spoon's job is to scrape the bottom (where the rice settles and sticks) and to break the softening grains against the pot's wall, accelerating the dissolution.

THE STAGES:

MINUTES 0-15: the grains swell and soften, absorbing water. The liquid is still watery with visible whole grains floating. This is rice-in-water, not yet cháo.

MINUTES 15-30: the grains begin to burst — the swollen starch granules rupture, releasing amylose and amylopectin into the surrounding water. The liquid thickens visibly, turning from watery-clear to opaque-white. The grains lose their individual identity — they are dissolving into the porridge.

MINUTES 30-40: the cháo reaches its final texture — the grains are mostly dissolved (a few intact grain fragments remain, providing the faintest texture), the liquid is thick, smooth, opaque-white, and flows from a lifted spoon in a slow, continuous stream.

MINUTE 40-45: taste. Add the salt — stir through. The cháo should taste: warm, faintly sweet (the starch's own maltose, generated by the cooking's partial hydrolysis), faintly savoury (the salt), and — above all — NEUTRAL. The cháo should not taste of anything strongly enough to challenge a sick stomach. Neutrality is the flavour. Blandness is the medicine.`,
      tip: `The cháo's thickening is the same starch gelatinisation this collection has documented in every rice preparation — from the cơm lam's bamboo-tube steaming to the xôi gấc's pigment-absorption soak — but here pushed to its endpoint: TOTAL gelatinisation and PARTIAL hydrolysis. At 95-100°C, the rice's starch granules absorb water, swell to 5-10x their dry volume, and burst — releasing their amylose (the linear chains that thicken the liquid) and amylopectin (the branched chains that give the porridge its viscosity and its smooth, clingy mouthfeel). The 40-minute simmer continues past the burst: the released starch chains undergo partial acid-and-thermal hydrolysis, breaking into shorter chains (dextrins, maltose) that the sick person's weakened digestive amylase can cleave more easily than intact starch. The cooking is doing some of the digestion in advance — pre-chewing, chemically — and the cháo arrives at the stomach already partway to glucose.`,
    },
    {
      title: 'Serve warm — in a bowl, with whatever the sick person can tolerate, and with care',
      description: `Ladle into a bowl — a rice bowl, a soup bowl, a mug. The cháo should be warm, not hot — 50-55°C, the temperature a sick person's mouth can accept without flinching. If the cháo has thickened too much during cooking (the grains absorbed more water than expected): stir in hot water, 50 ml at a time, until the desired consistency returns.

THE ACCOMPANIMENTS are staged by the illness's progression:

DAY 1-2 (ACUTE — fever, vomiting, no appetite): plain cháo trắng with salt only. No accompaniment. The cháo is fluid, not food — its job is hydration and glucose, and it asks the stomach for nothing.

DAY 3-4 (SUBSIDING — appetite returning, stomach cautious): cháo trắng + a few drops of sesame oil + sliced scallion. The oil is the first fat the recovering stomach encounters, and the sesame's gentle, nutty, unassertive lipid is the fat the Vietnamese kitchen considers gentlest. The scallion's allium provides the first aromatic.

DAY 5-6 (RECOVERING — eating cautiously, wanting flavour): cháo trắng + half a salted duck egg + a pinch of ruốc. The egg's creamy, salty, oil-rich yolk is the convalescent's reward — the first real FLAVOUR after days of neutral porridge, and its arrival is the event that says the worst is over.

DAY 7+ (NEARLY WELL): cháo trắng + fish sauce + ginger + pickled mustard greens. The full condiment set is back, the stomach is accepting everything, and the cháo trắng's job is done. Tomorrow the patient eats rice.

The accompaniment staging is not a formal protocol — no doctor prescribes it, no chart dictates it. It is the mother's judgment, reading the sick person's face across the bed, deciding: today a pinch of floss, or is it still too soon? The mother is the clinician, the cháo is the prescription, and the accompaniment schedule is the dosing — calibrated by love, not by milligrams.`,
      tip: `Cháo trắng is the collection's most medically significant recipe — not because it treats any disease (it does not — it is not medicine), but because it is the food that SUPPORTS treatment by maintaining hydration and glucose intake when the body rejects everything else. Its clinical value is documented: the starch-based oral rehydration principle (glucose-facilitated sodium absorption across the intestinal epithelium) is the basis of the WHO-UNICEF oral rehydration therapy that has saved millions of lives from diarrheal dehydration worldwide. The grandmother's cháo trắng with a pinch of salt is the same principle, older by centuries, and effective by the same biochemistry: the glucose (from the starch) and the sodium (from the salt) cross the intestinal wall together via the SGLT1 cotransporter, and the water follows by osmosis. The grandmother did not know the transporter's name. She knew the cháo worked.`,
    },
    {
      title: 'The recipe beneath every recipe — the cháo that is always there',
      description: `Cháo trắng is not a destination. It is a starting point — the blank page every flavoured cháo writes on, the platform every protein-cháo builds on, and the food every Vietnamese person returns to when the body says: start over.

The collection's cháo file now holds six entries: cháo gà (chicken, Bắc Ninh), cháo cá (fish, Trà Vinh), cháo bò (beef, An Giang), cháo rắn (snake, Đồng Tháp), cháo lươn (eel, Nghệ An), and now cháo trắng (nothing, everywhere). The flavoured five were built on this one. This one was built on rice and water. And rice and water were built on the paddy and the rain. The cháo trắng is the end of the reduction — the cuisine stripped to its two fundamental inputs, with nothing between the eater and the grain except heat and time.

It is also, and this matters, an act of care. Nobody makes cháo trắng for themselves when they are well. It is made BY someone FOR someone — by a mother for a child, by a wife for a husband, by a daughter for a parent — and the making is the message: I see that you are sick, I am here, I am cooking for you, and this bowl — warm, bland, asking nothing — is the evidence. The cháo trắng's most important ingredient is not the rice. It is the person who carried it to the bed.`,
      tip: `Cháo trắng is the collection's final argument for minimalism: a dish with one ingredient (rice), one technique (simmer), one seasoning (salt), and one purpose (care). It is the opposite of the chả phượng (which used 3 hours, 15 components and a sculptor's skill to make one spring roll look like a bird), and it is the opposite of the thắng cố (which used a whole animal, a 100-litre cauldron and a market morning to feed a village). The cháo trắng feeds one person, from one pot, with one grain, in one hour, and the feeding is the most important cooking in the Vietnamese kitchen — not because the dish is complex, not because the technique is skilled, not because the ingredient is rare, but because the person in the bed needs to eat, and the person beside the bed needs to help, and the cháo is the help.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
