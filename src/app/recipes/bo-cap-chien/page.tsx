'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bo-cap-chien',
  title: `Bọ Cạp Chiên (Deep-Fried Scorpion)`,
  subtitle: `Whole black scorpions — the wood scorpion of the Bảy Núi borderland — impaled on bamboo skewers and deep-fried for two minutes until the exoskeleton crisps to a shattering, translucent, amber shell and the body inside dries to a concentrated, faintly bitter, intensely nutty crunch. The edible arachnid of Tây Ninh and An Giang, and the street snack that proves exoskeleton is just another word for crust.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '20 min',
  rating: 4.5,
  baseServings: 4,
  heroImage: '/images/recipes/bo-cap-chien.jpg',
  intro: `The scorpion stalls sit at the night markets of Tây Ninh, at the base of Núi Bà Đen, and along the border roads in An Giang's Bảy Núi — the same rocky, forested, semi-arid landscape where the scorpions live and where the vendors who sell them also catch them, at night, with a UV flashlight (scorpion exoskeletons fluoresce blue-green under ultraviolet, making them visible from metres away in the dark). The species is typically Heterometrus laoticus or a close relative — the Asian forest scorpion, a large (8-12 cm), black, heavy-bodied arachnid whose sting is painful but not medically dangerous to humans (comparable to a wasp sting — localised pain, swelling, no systemic toxicity in healthy adults).

The scorpion's venom is in the telson — the stinger at the tail tip — and the first step of any preparation is removing it: a quick snip with scissors separates the stinger from the tail, and the venom gland with it. The remainder of the scorpion is non-toxic and, once the stinger is gone, as safe to handle as any crustacean — which is, structurally, what a scorpion closely resembles. Scorpions are arachnids, not insects, and their body plan — a segmented exoskeleton, a pair of pincers, a muscular tail — is architecturally closer to a crab or a lobster than to a beetle, which is why the fried scorpion's texture is closer to a fried soft-shell crab than to a fried cricket: a shattering chitin shell over a small, dense, dry-protein interior.

The frying is the simplest possible technique: whole scorpions, stinger removed, threaded on a skewer, submerged in oil at 175°C for 2 minutes. The exoskeleton — made of chitin, the same polysaccharide that forms shrimp shells and insect wings — dehydrates and crisps in the oil exactly as a shrimp shell does, turning from opaque-black to translucent-amber and becoming brittle enough to shatter under the tooth. The body inside dehydrates simultaneously, and the small mass of muscle, fat and organ tissue concentrates into a dry, crunchy, intensely flavoured nugget that tastes — and this is the universal first-time report — nutty. Not gamey, not fishy, not meaty: nutty, with a faint, pleasant bitterness at the finish that comes from the hepatopancreas (the scorpion's combined liver-pancreas, which contains bile salts and digestive enzymes).

The eating is a dare format — every night market has the tourist who takes a photo, the friend who says "you first," and the vendor who has seen this a thousand times and waits patiently — but the dare dissolves at the first bite, because the fried scorpion is, once it is in the mouth, a small, crunchy, nutty, slightly bitter, surprisingly pleasant snack that is closer to a fried anchovy than to anything the appearance promises. The exoskeleton shatters. The interior crunches. The nuttiness lingers. And the second scorpion is in the hand before the first is finished, because the mouth's verdict overruled the eye's objection.`,
  ingredientSections: [
    {
      title: 'The scorpions',
      items: [
        {
          amount: 20,
          name: 'whole black scorpions (Heterometrus spp.), live or freshly frozen',
          note: `⚠️ STINGER REMOVAL IS MANDATORY. The telson (the bulb-and-stinger at the tail tip) contains the venom gland. Snip it off with scissors before any handling. The rest of the scorpion is non-toxic. The sting of Heterometrus is painful but NOT medically dangerous to healthy adults (comparable to a wasp sting). People with known venom allergies should not handle live scorpions.\n\nIn Vietnam: sold live at night markets in Tây Ninh, An Giang, and at speciality wildlife-food stalls. OUTSIDE VIETNAM: farmed edible scorpions are available from edible-insect suppliers in Europe and North America (freeze-dried or frozen). Fresh-frozen is preferable to freeze-dried for the frying method — the exoskeleton crisps better with residual moisture to flash off.`,
        },
      ],
    },
    {
      title: 'For frying',
      items: [
        { amount: 500, unit: 'ml', name: 'neutral oil, for deep-frying at 175°C' },
        { amount: 5, name: 'bamboo skewers (4 scorpions per skewer)' },
      ],
    },
    {
      title: 'The seasoning (applied after frying)',
      items: [
        { amount: 1, unit: 'tsp', name: 'fine salt' },
        { amount: 0.5, unit: 'tsp', name: 'ground white pepper' },
        { amount: 0.5, unit: 'tsp', name: 'chili powder (optional)' },
        { amount: 1, name: 'lime, in wedges' },
      ],
    },
  ],
  steps: [
    {
      title: 'Remove the stingers, rinse, skewer — the safety step that makes everything else possible',
      description: `Hold each scorpion (with tongs or gloved hands if live) and snip the telson — the final segment of the tail, the bulb-shaped stinger — with kitchen scissors. Discard it. What remains is a scorpion without a weapon: the pincers can still pinch (mildly, like a small crab) but the venom delivery system is gone.

If using live scorpions: after stinger removal, freeze them for 30 minutes — the cold renders them immobile and unconscious (the same ice-stun principle as the shrimp in the gỏi tôm sống). This is both practical (a still scorpion is easier to skewer) and humane.

Rinse under cold water — the exoskeleton may carry dirt from the forest floor. Pat dry.

Thread 4 scorpions per skewer — impale through the body from tail to head, so each scorpion sits flat along the stick with its pincers spread. The skewer is the handle and the frying tool.`,
      tip: `The scorpion's exoskeleton is chitin — the same β-1,4-linked N-acetylglucosamine polymer that forms shrimp shells, crab shells, insect exoskeletons and fungal cell walls. Chitin is the second most abundant biopolymer on earth (after cellulose), and it is edible, non-toxic, and — when fried — produces the same shattering, translucent-amber crispness that a fried shrimp tail produces, because the dehydration-and-glass-transition chemistry is identical: water leaves the chitin matrix, the matrix drops below its glass-transition moisture threshold, and the structure sets to a rigid, brittle, glassy solid. A fried scorpion crunches for the same chemical reason a fried shrimp shell crunches. The animal is different. The crunch is the same polymer.`,
    },
    {
      title: 'Fry at 175°C — 2 minutes, no more, until translucent-amber',
      description: `Heat the oil to 175°C. Lower the skewered scorpions in — they will sizzle violently for the first 30 seconds as the residual moisture in the exoskeleton and the body flashes to steam.

Fry 2 minutes. The transformation: the exoskeleton shifts from opaque-black to translucent-amber (the chitin dehydrating and vitrifying, the melanin pigment thinning as the structure thins). The pincers splay and crisp. The tail segments separate slightly. The body shrinks as the interior moisture evaporates.

Pull at 2 minutes. At this point: the exoskeleton is glass-crisp, the interior is dry-crunchy, and the whole scorpion weighs roughly 40% of its pre-frying weight (the rest is water that left as steam). Past 3 minutes the interior over-dries to a bitter, acrid dust and the exoskeleton darkens to a burnt brown — the same narrow window the đuông dừa raced.

Drain on a rack. Season immediately while hot: scatter fine salt, white pepper and chili powder over the skewers. The salt adheres to the oil-glazed exoskeleton and stays.`,
      tip: `The 2-minute window is a moisture-and-mass problem: a scorpion is roughly 60% water by weight, and all of that water must leave through the exoskeleton's limited surface area in the time the oil takes to dehydrate it. At 175°C the evaporation rate is roughly 30% of body weight per minute — fast enough to dehydrate the small body (8-12 g) in 2 minutes, but not so fast that the exterior burns before the interior dries. A larger arthropod (a crab, a lobster) at the same temperature would take longer because its mass-to-surface ratio is higher; a smaller one (a cricket) would take less. The frying time scales with body mass, and the scorpion's 8-12 g body is calibrated to 2 minutes at 175°C by the same physics that calibrated the tôm chiên bột's shrimp and the chuối chiên's banana.`,
    },
    {
      title: 'Eat whole — pincers, tail, body, in two bites, with beer',
      description: `Slide a scorpion off the skewer. Squeeze lime over it. Eat in two bites:

FIRST BITE — the tail and body: the exoskeleton shatters (thin, crisp, amber, tasting of nothing specific — chitin has no flavour, and the crunch is a texture, not a taste). The body inside crunches (dry, concentrated, and HERE is the flavour: nutty, faintly bitter, with a savoury depth that is closer to roasted sunflower seed than to anything the word "scorpion" promises). The hepatopancreas, if the scorpion was large enough to contain a detectable one, adds a faint bitter-savoury note at the finish.

SECOND BITE — the pincers: they are small, flat, and fry to a chip-like crispness that is almost entirely exoskeleton with a thin film of dried muscle inside. They crunch like a shrimp head — the same chitin, the same fry, the same shattering.

Eat 4-5 per person. Drink cold beer between scorpions — the same beer-and-dare rhythm the night market runs on, except by the third scorpion the dare is gone and the eating is genuine, because the mouth has overruled the brain and the nutty crunch is, objectively, good.

The vendor at the Tây Ninh night market sells 200 scorpions on a busy evening. Half to tourists performing courage. Half to locals who stopped performing years ago and are eating a snack. The snack is the same either way, and the exoskeleton does not know who is holding it.`,
      tip: `Edible scorpions join the collection's edible-arthropod file alongside the đuông dừa (beetle larva), the bánh trứng kiến (ant eggs), and the cricket-based insect dishes in the earlier thematic collections. The file now demonstrates a principle: the edible-insect/arachnid world is a chitin world, and chitin is the universal texture — the crunch that every fried arthropod shares regardless of species, because the exoskeleton polymer is the same in all of them. A fried scorpion, a fried cricket, a fried silkworm pupa and a fried shrimp shell all deliver the same glass-transition crunch from the same chitin matrix. The animal inside varies. The crust does not. And the crust — the crunch — is what the eater registers first, which is why the first bite of any fried arthropod is always less alarming than the approach: the mouth recognises the chitin before the brain recognises the animal.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
