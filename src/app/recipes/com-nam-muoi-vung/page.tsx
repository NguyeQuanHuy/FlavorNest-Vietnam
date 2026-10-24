'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'com-nam-muoi-vung',
  title: `Cơm Nắm Muối Vừng (Hand-Pressed Rice Balls with Sesame Salt)`,
  subtitle: `Hot steamed rice — pressed by hand into dense, smooth, palm-sized cylinders while still warm enough to fuse the grains together — wrapped in banana leaf and carried to the field, to the school, to the road. Eaten hours later, at room temperature, dipped in muối vừng: toasted sesame seeds ground with coarse salt. The Vietnamese rice ball, the field worker’s lunch, and the meal that needs nothing but rice, salt and sesame.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '20 min',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/com-nam-muoi-vung.jpg',
  intro: `Cơm nắm is not a recipe in any meaningful sense — it is the ACT of pressing cooked rice into a portable shape, and the act is so fundamental, so universal and so old that calling it a recipe is like calling "walking" an exercise routine. Every Vietnamese mother has pressed rice for a child. Every field worker has carried a banana-leaf cylinder of pressed rice to the paddy. Every soldier, every student, every traveller has eaten cơm nắm at some point, standing, walking or sitting on the ground, dipping each bite in a small packet of muối vừng that was wrapped alongside the rice in the same banana leaf.

The pressing is the technique: hot steamed rice (gạo tẻ — regular rice, not glutinous) is scooped onto a square of banana leaf or plastic wrap while still steaming. The hands — wetted to prevent sticking — press, squeeze and roll the rice into a cylinder about 15 cm long and 5 cm in diameter, compressing the grains together so tightly that the surface starch fuses into a smooth, dense, nearly translucent skin. The interior is denser than a bowl of rice but not as dense as a rice cake — each grain is still identifiable, but they are packed so closely that the cylinder holds its shape for hours, can be sliced with a knife, and does not crumble when dipped.

The pressing must happen while the rice is HOT — above 70°C — because the surface starch is still in its gelatinised, sticky, moldable state. As the rice cools, the starch retrogrades (the amylose chains re-crystallise into a tighter, less sticky, more rigid structure), and the pressed shape sets permanently. A cơm nắm pressed hot and cooled to room temperature is structurally stable for 8-10 hours — firm, sliceable, transportable, and resistant to crumbling. A cơm nắm pressed from cold rice never fuses (the starch is already retrograded) and falls apart at the first dip.

The muối vừng — sesame salt — is the cơm nắm’s fixed companion and its only seasoning. White sesame seeds are toasted in a dry pan until golden and fragrant, then ground with coarse salt at a 3:1 ratio (sesame to salt) in a mortar until the seeds crack and release their oil but do not become a paste. The result is a coarse, oily, nutty, salty powder that the rice is dipped into — each bite picking up a few grains of salt and a few fragments of cracked sesame, and the combination — bland rice + nutty salt — is one of the most satisfying minimalist flavour pairings in Vietnamese food.

Cơm nắm muối vừng is the meal the paddy provides when the paddy provides nothing else: rice from the paddy, sesame from the garden, salt from the kitchen, banana leaf from the tree. It is the meal that costs nothing, requires nothing, assumes nothing except hunger and a handful of rice, and it has fed every generation of Vietnamese fieldworkers since rice agriculture began.`,
  ingredientSections: [
    {
      title: 'The rice',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'cooked steamed rice (gạo tẻ — regular rice, NOT glutinous), freshly cooked and HOT',
          note: `Must be HOT — above 70°C — when pressed. The surface starch must be in its gelatinised, sticky state for the grains to fuse. Cold rice will not fuse and the cơm nắm will crumble. Slightly overcooked (softer, stickier) rice presses better than perfectly cooked (separate, fluffy) rice.`,
        },
      ],
    },
    {
      title: 'Muối vừng (sesame salt)',
      items: [
        {
          amount: 80,
          unit: 'g',
          name: 'white sesame seeds',
          note: `Toasted in a dry pan over medium heat 3-4 minutes, stirring constantly, until golden and fragrant. Do not burn — burnt sesame is bitter and acrid.`,
        },
        { amount: 25, unit: 'g', name: 'coarse sea salt', note: `3:1 sesame to salt by weight. Coarse rather than fine — the coarse grains provide a salt-crunch that fine salt’s even distribution cannot.` },
      ],
    },
    {
      title: 'For wrapping',
      items: [
        { amount: 4, name: 'banana-leaf rectangles, 20 x 30 cm, softened over flame', note: `The traditional wrapping — the leaf’s wax prevents the rice from sticking and the leaf’s aroma perfumes the rice during storage. Plastic wrap works functionally but adds no aroma.` },
      ],
    },
    {
      title: 'Optional accompaniments',
      items: [
        { amount: 200, unit: 'g', name: 'chả lụa (steamed pork loaf), sliced — the classic pairing' },
        { amount: 100, unit: 'g', name: 'ruốc (pork floss) — the lightweight protein for long trips' },
        { amount: 1, name: 'piece of cá kho or thịt kho — wrapped separately' },
      ],
    },
  ],
  steps: [
    {
      title: 'Press while hot, wet hands, firm but not crushing — the starch fuses at 70°C+',
      description: `Wet your hands thoroughly — the water prevents the hot rice from sticking. Scoop about 150 g of HOT rice (one large rice-paddle scoop) onto a square of banana leaf or plastic wrap.

Press with both hands: shape the rice into a cylinder, squeezing firmly — the grains should compress together and the surface should become smooth, dense and faintly glossy as the surface starch smears into a continuous film. Roll between your palms to smooth the surface further.

The cylinder should be: 12-15 cm long, 4-5 cm diameter, smooth-surfaced, dense enough to hold when lifted by one end (it should not sag or break), and each grain visible but fused to its neighbours.

Do not CRUSH — the goal is compression (grains touching) not destruction (grains mashed). A well-pressed cơm nắm has the density of a firm sushi roll and the surface texture of polished clay.

Wrap immediately in banana leaf — fold the leaf around the cylinder, tuck the ends. The wrapping holds the shape during cooling and the cooling sets the shape permanently via starch retrogradation.

Make 4 cylinders. Cool to room temperature — 30-45 minutes. Once cool, the cơm nắm is stable for 8-10 hours at room temperature (the retrograded starch is resistant to microbial degradation at the same rate as fresh rice — food-safety standard holding time at 20-25°C is 4-6 hours for cooked rice; the pressed format’s lower surface-area-to-volume ratio extends this slightly).`,
      tip: `The starch retrogradation that sets the cơm nắm’s shape is the same process that makes day-old rice firmer than fresh rice, and the same process that makes stale bread hard. When gelatinised amylose (the linear starch) cools below 60°C, its chains re-align, hydrogen-bond to each other, and form a semi-crystalline network that is more rigid and less sticky than the freshly gelatinised state. This network is the structural scaffold that holds the cơm nắm together: the surface layer retrogrades first (it cools first), forming a skin, and the interior retrogrades over the next 30 minutes, setting the entire cylinder into a firm, sliceable, transportable block. Pressing while hot ensures the grains are in intimate contact BEFORE the retrogradation locks them in place; pressing cold fails because the grains have already retrograded individually and cannot form inter-grain bonds.`,
    },
    {
      title: 'Make the muối vừng — toast, pound, 3:1, the simplest condiment in the collection',
      description: `Toast the sesame seeds in a dry pan over medium heat, stirring constantly — 3-4 minutes. They pop, they darken from white to golden, and the kitchen fills with the same toasted-sesame fragrance the nộm hoa chuối and the cơm lam used. Pull at golden — pale golden, not brown.

Pour the hot sesame into a mortar. Add the salt. Pound 10-15 times — CRACK the seeds open but do NOT grind to a paste. The ideal muối vừng is: coarse, gritty, visibly containing cracked sesame fragments and whole salt crystals, with a thin film of sesame oil binding the dry ingredients into a damp, sandy, scoopable powder.

If pounded too fine: the sesame oil releases in excess and the muối vừng becomes a paste (still edible, but the texture is wrong — it should be dry-gritty, not oily-smooth). If pounded too little: the sesame seeds roll off the rice rather than sticking, and the salt dominates because the seeds' oil has not been released to carry their flavour.

The 3:1 ratio (sesame to salt) is the northern standard — enough salt to season, enough sesame to soften the salt into a rounded, nutty, warm flavour rather than a sharp, mineral, pure-salt attack.`,
      tip: `Muối vừng has appeared throughout this collection as the highland’s universal dip — beside the cơm lam, the xôi ngũ sắc, the pa pỉnh tộp. But beside the cơm nắm it occupies its most fundamental position: not as a condiment for a special dish but as the ONLY flavouring for the most basic possible meal (plain rice). The muối vừng-and-cơm-nắm pairing is the Vietnamese food system’s ground zero — the simplest combination of grain, fat and salt that can sustain a working body — and every more complex meal in this collection is, structurally, an elaboration of this original trio: starch (rice) + fat (sesame oil) + salt. The cơm nắm muối vừng is the seed from which the cuisine grew.`,
    },
    {
      title: 'Unwrap, slice, dip — the field worker’s lunch, the student’s snack, the traveller’s meal',
      description: `Unwrap the banana leaf. The cơm nắm inside is: firm, smooth, faintly green-perfumed from the leaf’s contact, and cool. Slice into rounds 2 cm thick with a sharp knife — each round is a dense, cohesive disc that holds its shape when picked up.

Dip the cut face of each round into the muối vừng — the sesame and salt adhere to the rice’s starchy surface, and a few grains of cracked sesame and a few crystals of coarse salt travel with each bite.

Eat. The mouthful: dense rice (chewier than a bowl of fresh rice, because the retrogradation has firmed the starch — the same firmness that makes sushi rice preferable at room temperature), the sesame’s toasted-nutty oil (released from the cracked seeds by the pounding, now coating the rice’s surface), and the salt’s mineral sharpness (amplifying the rice’s own faint sweetness, which the retrograded starch has made slightly more perceptible by converting a fraction of its amylose to maltose during the cooling).

That is the meal. Rice, sesame, salt, banana leaf. Four components from the farm, no cooking beyond the initial steaming, no cost beyond the rice that was already cooked for the family’s breakfast. The cơm nắm was pressed from the leftover rice, the muối vừng was pounded from the sesame that grows beside the rice, and the banana leaf was cut from the tree that grows beside the sesame. The meal is the farm’s perimeter, walked and gathered and pressed into a cylinder that feeds one person for one afternoon.

Cơm nắm muối vừng is the last recipe in the đồng ruộng collection, and it is the last because it is the first — the meal that existed before every other meal, the meal the paddy provides when the paddy provides nothing else, and the meal that, if every other recipe in this collection were lost, would remain. Rice. Sesame. Salt. The rest is commentary.`,
      tip: `Cơm nắm muối vừng is the collection’s philosophical endpoint: the simplest possible Vietnamese meal, reduced to starch + fat + salt, carried in a leaf, eaten by hand, requiring no kitchen, no technique, no ingredient beyond the farm’s own production. Every recipe in the collection — from the 7-day trâu gác bếp to the 3-hour thắng cố to the 15-minute tép rang — is an elaboration of this original format: grain + protein/fat + salt, varied infinitely by ingredient, technique and culture but structurally identical to the cơm nắm the field worker has carried since the first harvest. The collection began with complexity and returns to simplicity, and the simplicity is where it will always end: a handful of rice, a pinch of salt, and the sesame that grows beside the paddy.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
