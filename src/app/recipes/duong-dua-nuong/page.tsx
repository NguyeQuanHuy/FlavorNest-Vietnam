'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'duong-dua-nuong',
  title: `Đuông Dừa Nướng (Grilled Coconut Beetle Larvae)`,
  subtitle: `The fat, cream-white larvae of the red palm weevil — Rhynchophorus ferrugineus — harvested from the rotting trunks of felled coconut palms, threaded on bamboo skewers and grilled over charcoal for ninety seconds until the skin tightens, the fat renders to a golden glaze, and the bite delivers a burst of rich, creamy, faintly coconut-flavoured custard. Bến Tre's most visceral delicacy, and the edible insect that converts sceptics on the first bite.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '20 min',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/duong-dua-nuong.jpg',
  intro: `Đuông dừa is the larva of the red palm weevil — Rhynchophorus ferrugineus, a large beetle whose female bores into the trunk of a coconut palm and lays her eggs in the soft, starchy pith. The larvae hatch and spend two to three months eating the palm's interior — converting the trunk's cellulose and starch into their own body fat at a conversion efficiency that would impress a feed-lot nutritionist — growing to the size of a human thumb: 5-7 cm long, 2 cm wide, cream-white, segmented, with a small brown head and a body that is, by weight, roughly 60% fat. That fat is the reason the larva is a delicacy rather than a pest, and the reason a kilogram of đuông dừa at a Bến Tre market costs more than a kilogram of shrimp.

Bến Tre is the coconut province — more coconut palms per hectare than any other province in Vietnam — and the red palm weevil is the coconut's greatest enemy: an infestation kills the tree from the inside out, hollowing the trunk until the palm collapses. The farmers fight the weevil by felling infected trees early, splitting the trunk, and harvesting the larvae before they pupate — and the harvest is where the pest becomes the product. A single infected trunk can contain fifty to a hundred larvae, each one a fat, wriggling, coconut-fed grub that the farmer carries to the market rather than to the compost, because the market pays well for an ingredient the city considers exotic and the village considers normal.

The larvae taste of what they eat, which is coconut palm — and this is not a metaphor but a metabolic fact. The larva's fat, which constitutes more than half its body weight, is synthesised from the palm's starch and from the coconut oil that permeates the trunk's vascular tissue, and it carries a faint but unmistakable coconut note — a warm, tropical, slightly sweet lipid profile that the human tongue reads as buttery-coconutty and that makes the grilled larva taste, impossibly, like a coconut-flavoured cream puff from inside a tree. The fat melts at roughly 35°C — just below body temperature — which means the larva's bite releases its lipid on the tongue in a slow, melting, coating flood that is closer to the mouthfeel of foie gras than to the mouthfeel of any other insect protein.

The grilling is the simplest and the most common preparation: live larvae, threaded whole on a bamboo skewer (three to five per skewer), grilled over low charcoal embers for 60-90 seconds per side. The heat tightens the skin, renders a thin film of surface fat to a golden glaze, and firms the interior from raw-liquid to a soft, custardy, warm paste that holds its shape in the mouth for the two seconds it takes to melt. Overcooked larvae are dry, tough and bitter — the fat has rendered out entirely and the protein left behind is a husk. The 90-second window is the entire skill, and missing it is missing the dish.`,
  ingredientSections: [
    {
      title: 'The larvae',
      items: [
        {
          amount: 40,
          name: 'live đuông dừa (coconut beetle larvae / sago worms), 5-7 cm each',
          note: `Live and wriggling — freshness is the quality signal, as with every live ingredient in this collection. The larvae should be plump, cream-white, and smell faintly of coconut. Any darkening, any off-smell, any limpness = dead and spoiling. In Bến Tre: bought live at the market, sold by weight. OUTSIDE VIETNAM: edible palm weevil larvae (also called sago worms, sago grubs) are eaten across Southeast Asia, Central Africa and South America, and are increasingly available from edible-insect suppliers in Europe (freeze-dried or frozen). Fresh-frozen is closer to the live experience than freeze-dried, which loses the fat's melt.`,
        },
      ],
    },
    {
      title: 'The marinade (optional — many purists grill plain)',
      items: [
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 1, name: 'clove garlic, pounded fine' },
        { amount: 1, unit: 'tsp', name: 'chili flakes (optional)' },
      ],
    },
    {
      title: 'For grilling',
      items: [
        { amount: 10, name: 'bamboo skewers, soaked in water 30 minutes' },
        { amount: 1, name: 'charcoal grill with glowing embers — low, even heat' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 1, name: 'saucer of muối tiêu chanh (salt-pepper-lime)' },
        { amount: 50, unit: 'g', name: 'rau răm, whole sprigs' },
        { amount: 1, name: 'cold beer per person' },
      ],
    },
  ],
  steps: [
    {
      title: 'Purge, rinse, skewer — the larvae go on the grill alive or freshly killed',
      description: `If the larvae have been stored with sawdust or wood chips (the standard transport medium): pick them out, shake off the debris, and rinse briefly under cool water. The larvae are hardy — a brief rinse does not harm them.

OPTIONAL PURGE: let the larvae sit in a clean container with a handful of fresh coconut flesh for 6-12 hours. They eat the coconut, purging their digestive tract of any woody debris and replacing it with clean coconut — the same purging principle as the snails in lime water. The purged larvae are slightly sweeter and have a cleaner flavour.

OPTIONAL MARINADE: toss the live (or freshly killed — a quick freeze or a sharp knife to the head) larvae with the fish sauce, sugar, pepper, garlic and chili. Let sit 5 minutes — not longer, the acid begins affecting the skin.

Thread 4-5 larvae per skewer — push the bamboo through the body lengthwise, so the larva sits straight on the stick. Do not pierce too many points — the skin is thin and the fat leaks from every hole.`,
      tip: `The larvae's fat composition is approximately 40% saturated (principally palmitic and lauric acid — the same lauric acid that dominates coconut oil, because the larvae synthesised their fat FROM coconut's lipids), 40% monounsaturated (oleic acid, the same as olive oil) and 20% polyunsaturated (linoleic). This profile is nutritionally comparable to a blend of coconut oil and olive oil, which is a more useful comparison than any conventional meat fat. The lauric acid is the source of the faint coconut flavour: it is converted during metabolism from the palm's own lauric acid, passed through the larva's body with minimal chemical modification, and deposited in the larva's fat body in its original form. The larva tastes of coconut because its fat IS coconut fat, once removed.`,
    },
    {
      title: 'Grill 60-90 seconds per side — the window between custard and husk',
      description: `Set the skewers over glowing charcoal embers — LOW heat, the same gentle radiance as every charcoal dish. The larvae are small, thin-skinned and fat-rich — high heat bursts them like tiny sausages, and the fat flares and burns.

Grill 60-90 seconds per side, turning once. Watch the transformation: the skin tightens from slack to taut. The colour shifts from cream-white to pale golden. A thin film of rendered fat glazes the surface. The larvae swell slightly as the interior fat warms and expands. Tiny droplets of golden fat appear at the skewer holes.

The larvae are done when: the skin is taut and faintly golden (not brown — brown is overcooked), the body is firm to a gentle squeeze (like pressing a ripe fig — yielding but not liquid), and the aroma rising from the grill is warm, fatty, faintly sweet and faintly coconutty.

Do not overcook. At 90 seconds the interior is a warm, soft, custardy paste — the fat has warmed past its melting point (35°C) but the protein has not yet denatured to firmness. At 3 minutes the fat has rendered out, the protein has seized, and the larva is a dry, tough, bitter shell — the foie-gras-to-jerky transition happens in 90 seconds, and there is no recovery.

Pull at golden. The skewer should drip a single drop of clear, golden fat when held horizontal. That drop is the proof the interior is still liquid.`,
      tip: `The 60-90 second window is a fat-phase-transition problem: the larva's fat melts at ~35°C (just below body temperature, which is why the raw larva feels "creamy" when bitten — the mouth's 37°C melts it on contact) and the larva's protein denatures at ~65-70°C. Between 35°C and 65°C the interior is melted-fat-in-undenatured-protein — a warm custard. Above 70°C the protein seizes and squeezes the liquid fat out, leaving a dry, firm, rendered husk. On a charcoal grill, the interior crosses from 35°C to 65°C in roughly 90 seconds, and from 65°C to 70°C in another 30 seconds. The window IS the dish: the custard phase between the melt point and the denaturation point, hit by the grill's heat in exactly the time one side takes to gild.`,
    },
    {
      title: 'Eat in one bite — the melt, the crunch, the coconut ghost',
      description: `Pull the skewer from the grill. Wait 15 seconds — the skin is hot enough to burn the lip, but the interior must be eaten before it cools past 35°C and the fat starts to re-solidify (which happens in about 2 minutes at room temperature).

Slide one larva off the skewer with the teeth. Bite. The skin — now a thin, crispy, golden shell — shatters. The interior — warm, liquid, custardy, golden — floods the mouth in a slow, fatty, coating melt that lasts 3-4 seconds and that the tongue reads as: buttery, faintly coconutty, faintly sweet, with a clean, lipid richness that is closer to pâté than to any other insect and that, if the eater closes their eyes, they would not identify as an insect at all.

Dip the next larva in muối tiêu chanh — the salt sharpens the fat, the lime cuts it, the pepper warms. Chew a sprig of rau răm between larvae — its peppery bite resets the fat-coating on the palate.

Eat 8-10 per person. Drink beer between skewers. The fat is rich — richer per gram than pork belly, richer than duck liver — and the body's satiety signals arrive fast. Eight larvae and a beer is a full mồi nhậu serving, and the evening runs on the rhythm: grill, pull, bite, melt, dip, sip, repeat.

And understand: the larva on the skewer is a coconut tree, metabolised. The tree's starch became the larva's body. The tree's oil became the larva's fat. The tree's cellulose became the larva's energy. The larva is the coconut in animal form — the most concentrated, most efficient, most calorie-dense expression of a coconut palm's stored energy. Bến Tre, the coconut province, eats it as the ultimate coconut product: not the fruit, not the milk, not the oil, but the animal that ate the tree.`,
      tip: `Edible insects are the food system's most efficient protein-and-fat converters: the red palm weevil larva converts plant matter to body mass at a feed-conversion ratio of roughly 2:1 (2 kg of palm pith produces 1 kg of larva), compared to cattle's 8:1, pork's 4:1 and chicken's 2.5:1. The larva also produces negligible methane, requires no fresh water input, and generates no waste — its frass (excrement) is a soil amendment. The FAO has identified edible insects as a critical component of future food security, and the đuông dừa — already eaten, already traded, already delicious — is not a future food but a present one, waiting for the rest of the world's prejudice to catch up with the Mekong's appetite.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
