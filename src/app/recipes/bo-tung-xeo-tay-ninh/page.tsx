'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bo-tung-xeo-tay-ninh',
  title: `Bò Tùng Xẻo (Vinegar-Dipped Beef with Wild Herbs)`,
  subtitle: `Paper-thin slices of raw beef dropped for five seconds into a pot of simmering vinegar-coconut water, pulled out still pink at the centre, and rolled in rice paper with the same bottomless basket of rau rừng that runs through every dish in Tây Ninh. A fondue without the cheese, a shabu-shabu without the dashi — and the dish that proves Tây Ninh does more with beef than any province except perhaps Saigon itself.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 15 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/bo-tung-xeo-tay-ninh.jpg',
  intro: `The name is onomatopoeia — or, more precisely, it is a phonetic memory of a sound. Tùng is the thud of the cleaver as the cook slices the beef in front of you; xẻo is the sizzle as the slice hits the simmering vinegar pot. Tùng-xẻo, tùng-xẻo, repeated across a tabletop at the speed of appetite: cut, dip, eat, cut, dip, eat. The name is the rhythm, and the rhythm is the recipe.

Bò tùng xẻo belongs to a family of Vietnamese vinegar-dipped beef dishes — bò nhúng dấm is the Saigon name, bò nhúng giấm the northern one — but the Tây Ninh version carries two signatures that set it apart from the city variants. First, the dipping liquid: not plain vinegar-water, but a pot of coconut water simmered with white vinegar, lemongrass, ginger and a knob of rock sugar, so the acid bath the beef passes through is sweet, aromatic and faintly tropical rather than sharply sour. Second, and inevitably, the rau rừng: the same twenty-species wild-herb basket that shadows every Trảng Bàng dish now accompanies the beef, and the rolls that come off the table are more green than pink, with a complexity of bitterness, anise, pepper and astringency that the hotel version's three leaves of mint cannot approach.

The beef must be excellent, because the cooking is five seconds long and hides nothing. Topside, eye of round or rump cap — lean, fine-grained, with a good clean colour — sliced across the grain to 2 mm or less, ideally on a semi-frozen piece so the knife can take it that thin. Each slice is held in chopsticks, lowered into the gently simmering pot for a count of five, and pulled out: the exterior has turned grey-brown from the acid and the heat, the interior is still rare and rosy, and the whole slice carries a light vinegar tang and a whiff of coconut. It goes straight into a rice paper sheet with herbs, cucumber, green banana and a pinch of bún, is rolled tight, and is dunked in a peanut-hoisin sauce or — for the locals — in the straight mắm nêm that follows the beef around Tây Ninh like a loyal dog.

The pot at the table is the communal instrument, and it governs the pace exactly as a hotpot does: each person dips their own beef, one or two slices at a time, wraps at their own speed, and the meal runs for an hour at the speed of conversation. It is a drinking dish in the same register as the nem lụi and the dê tái chanh — mồi nhậu, eaten standing or squatting, with beer or rice wine, in company. The beef comes in waves ordered by the table as appetite dictates, the herb basket is refilled before it empties, and the pot's liquid darkens and deepens through the evening as every slice of beef seasons it.

That deepening pot is worth naming, because the last act of a bò tùng xẻo evening is always the same: the remaining pot liquid, now concentrated with beef juices and vinegar and coconut and lemongrass, is ladled over a bowl of bún as a hot, sharp, richly beefy soup. Nothing is discarded. The cooking medium becomes the closing course. The rhythm — tùng-xẻo, tùng-xẻo — finally stops, and the table drinks what the rhythm made.`,
  ingredientSections: [
    {
      title: 'The beef',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'beef topside, eye of round, or rump cap — in one piece',
          note: `Lean, fine-grained, deep red, and as fresh as your butcher can offer. Freeze the piece 45 minutes until the surface is firm and crystals are forming — then slice across the grain to 2 mm or thinner. Each slice should be translucent at the edges and drape over two chopsticks without tearing. Thick slices cook through entirely in the pot and lose the rare centre that is the whole point.`,
        },
        { amount: 1, unit: 'tbsp', name: 'neutral oil', note: `Tossed lightly through the sliced beef to keep them from welding on the plate.` },
      ],
    },
    {
      title: 'The vinegar-coconut dipping pot',
      items: [
        {
          amount: 500,
          unit: 'ml',
          name: 'fresh coconut water',
          note: `The Tây Ninh signature — fresh if at all possible; unsweetened packaged if not. The coconut's natural sugars caramelize slightly as the pot simmers and sweeten the acid bath into something the beef wants to wear.`,
        },
        {
          amount: 200,
          unit: 'ml',
          name: 'white rice vinegar or distilled white vinegar',
          note: `The acid that cooks the beef's exterior. White vinegar gives the cleanest, sharpest dip; cider or black vinegar add their own flavour and change the dish's register. Start with white and adjust in subsequent sessions.`,
        },
        { amount: 300, unit: 'ml', name: 'water' },
        { amount: 2, name: 'stalks lemongrass, bruised and knotted' },
        { amount: 30, unit: 'g', name: 'ginger, sliced and bruised' },
        { amount: 1, name: 'yellow onion, quartered' },
        { amount: 20, unit: 'g', name: 'rock sugar', note: `The southern sweetness, rounding every acid edge.` },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 2, name: 'red chilies, whole' },
        { amount: 2, name: 'bay leaves or lá é (optional)' },
      ],
    },
    {
      title: 'The wrap platter',
      items: [
        { amount: 30, name: 'sheets of thin rice paper (bánh tráng mỏng), 22 cm' },
        {
          amount: 1,
          name: 'the Trảng Bàng rau rừng basket — or the widest variety of herbs available',
          note: `Fish mint, perilla, Thai basil, Vietnamese coriander, culantro, betel leaf, mint, watercress, young lettuce — volume and variety. The herbs are more than half the roll by volume.`,
        },
        { amount: 200, unit: 'g', name: 'fresh bún (rice vermicelli), cooked and cooled in loose nests' },
        { amount: 1, name: 'cucumber, in thin batons' },
        { amount: 1, name: 'green (unripe) banana, sliced thin, in lime water' },
        { amount: 1, name: 'star fruit (khế), sliced thin' },
        { amount: 200, unit: 'g', name: 'bean sprouts' },
      ],
    },
    {
      title: 'The dipping sauce',
      items: [
        {
          amount: 4,
          unit: 'tbsp',
          name: 'tương xay or peanut-hoisin: hoisin + peanut butter + tương + garlic + chili + water, blended',
          note: `The majority dip for vinegar beef — its nuttiness rounds the acid-tang the beef carries out of the pot.`,
        },
        { amount: 1, name: 'OR mắm nêm: fermented anchovy + crushed pineapple + sugar + garlic + chili + lime', note: `The local-loyalty option. Both saucers on the table, always.` },
      ],
    },
    {
      title: 'The closing bowl',
      items: [
        { amount: 300, unit: 'g', name: 'extra fresh bún', note: `For the final course — the pot liquid ladled over noodles.` },
        { amount: 3, name: 'scallions, sliced' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the pot — coconut, vinegar, aromatics, 15 minutes at a simmer',
      description: `Combine the coconut water, vinegar, water, lemongrass, ginger, onion, rock sugar, fish sauce, salt, chilies and bay leaves in a wide, shallow pot — wide so every diner can reach it, shallow so slices dip without the chopsticks going to the elbow. Bring to a simmer and hold 15 minutes, uncovered, until the lemongrass and ginger are fully aromatic and the liquid tastes sweet-sour-savoury in that order.

Transfer to the table burner and hold at a gentle simmer — small bubbles at the edges, the surface shivering. If it boils hard, the acid concentration climbs as water evaporates and the pot turns aggressively sour; if it goes off the simmer, the dip does not cook the exterior fast enough and the beef comes out raw-looking and grey. The simmer is the instrument; maintain it.

The pot should smell like the intersection of lemongrass tea and a good vinaigrette. If the vinegar is harsh, add more coconut water; if it is flat, a splash more vinegar. Calibrate before the first slice goes in — the pot only gets more concentrated from here.`,
      tip: `The coconut water is doing structural flavour work that plain water cannot. Coconut water contains free sugars, amino acids and minerals that participate in Maillard reactions on the beef surface during the brief dip — which is why bò tùng xẻo with coconut water tastes deeper and more complex than the Saigon bò nhúng dấm made with water-and-vinegar alone. Those few seconds of contact between hot acidic sugar-solution and raw protein surface generate the same browned, caramelised micro-layer the sear builds on a steak, at a lower temperature, by chemical means. The coconut is not a sweetener. It is a reaction medium.`,
    },
    {
      title: 'Slice the beef at the table — or as close to it as your nerve allows',
      description: `Bring the semi-frozen piece to the table on a board with a sharp knife. Slice across the grain, 2 mm or thinner, as you go — each slice draped on the cold plate, not stacked. The slices should be translucent at the edge and wide enough to drape elegantly over two chopsticks.

In Tây Ninh the cook slices live at the table, three or four slices ahead of the eaters, and the tùng — the cleaver sound — is part of the meal's soundtrack. At home, slicing a batch of twenty, fanning them on a cold plate, and bringing the plate to the table works perfectly — just keep the plate cold, because warm beef welding to itself is the failure mode.

Against the grain is non-negotiable: a slice cut with the grain at this thinness is a sheet of parallel fibres that is chewy, stringy and unpleasant. Against the grain, every fibre is severed to 2 mm, and the slice eats as tender as the animal was.`,
      tip: `The semi-freeze is not optional and it is not a convenience — it is the only way a domestic knife takes beef to 2 mm. At room temperature, muscle is soft, compliant and deforms under the blade, which shreds it into ragged sheets. At -3 to -5°C (the surface-crystal stage), the ice within the muscle holds the fibres rigid enough to shear cleanly, and a sharp knife glides through in one stroke. The same principle governs every sashimi slicer and every charcuterie mandoline: cutting thin requires the material to resist the blade, and cold is what supplies the resistance. Forty-five minutes in the freezer, not overnight (frozen solid is too hard and the blade skids), and slice immediately.`,
    },
    {
      title: 'Dip five seconds — pink inside, tan outside, vinegar on the breath',
      description: `Each diner picks up a slice with chopsticks, lowers it into the simmering pot, and counts — one, two, three, four, five. The slice curls as the exterior proteins denature: it goes from red to grey-tan on the outside in about three seconds, but the centre, insulated by the fold, stays rare-pink. Pull it out and lay it directly on a waiting rice paper sheet.

Five seconds is the number for a 2 mm slice. A thicker slice needs seven or eight; a razor-thin one needs three. The calibration is visual: the moment the exterior is uniformly opaque and the slice has curled, it is done. If it stops curling and starts stiffening, you have held it two seconds too long and the centre is cooked through — edible, but not the dish.

The pot darkens steadily as the evening goes on — beef juices, rendered fat and Maillard compounds accumulate — and the hundredth slice comes out of a liquid noticeably richer than the first one entered. This is the pot maturing, and it is the reason bò tùng xẻo is not a single dish but a trajectory.`,
      tip: `The five-second dip is running two denaturations simultaneously and exploiting the fact that they have different temperature thresholds. The acid in the vinegar denatures the outermost surface proteins at any temperature — this is the same chemistry as ceviche, happening faster because the liquid is hot. Meanwhile, heat from the simmering liquid cooks the next few tenths of a millimetre by conventional thermal denaturation. Together they set the exterior in about three seconds; the interior, shielded by the curling slice's own fold, stays below denaturation temperature for the full five. The rare centre is not an accident of timing. It is an accident of geometry: the fold creates its own insulation, and the dip length is calibrated to the fold, not to a thermometer.`,
    },
    {
      title: 'Roll with herbs, dip in sauce — the four-dish rhythm of Trảng Bàng again',
      description: `Dip a rice paper sheet briefly in water, lay it flat. Herbs first (against the wrapper, visible through it), then cucumber, green banana, star fruit, a pinch of bún, and the just-dipped beef draped over the top. Roll tight, dip deep into the tương xay or the mắm nêm. Two bites.

Build each roll as each slice comes out of the pot. The beef should still be warm — its residual heat wilts the innermost herbs just enough to release their volatiles, and a cold slice in a cold wrap is a different and lesser object.

This is the fourth time the rau rừng basket has appeared across the Tây Ninh collection, and it will appear again: the herbs are the province, the dishes are the vehicles, and the roll is the format Tây Ninh chose, over and over, because it puts the eater in charge of every ratio, every combination, every bite. A roll is a decision made twenty times a meal. A plate is a decision made once. Tây Ninh decided on the roll.`,
      tip: `Notice what the vinegar on the beef's surface is doing inside the roll: it is seasoning the herbs. The acid-tang carried out of the pot coats the beef, and when the beef meets the fresh leaves inside the wrap, that acid brightens them the way a squeeze of lime brightens a salad — except the lime is applied by the protein, not by the cook, and it is distributed perfectly because the beef touches every herb it rolls against. The pot seasons the beef; the beef seasons the roll. Each layer carries something to the next. This is the same layered-seasoning architecture Huế uses in its nước lèo-dunked rolls — but where Huế's sauce is the carrier, here the beef itself is. Same principle, different delivery.`,
    },
    {
      title: 'Close with the pot — ladle it over bún, and drink what the evening made',
      description: `When the table has eaten its fill of rolls, set the remaining pot liquid back to a brief hard simmer to concentrate it for 3-4 minutes. Fish out the lemongrass and ginger. Taste: it should be rich, beefy, tart-sweet and deep — everything the evening put into it.

Divide the extra bún into small bowls. Ladle the hot pot liquid over, scatter scallion and pepper. Drink it as a soup, or eat it as a noodle bowl — the line between the two is wherever you set it.

Nothing is discarded. The cooking medium, enriched by a hundred slices of beef, becomes the dessert course — or more accurately, the savory-course-that-comes-after-the-rolls, for which Vietnamese has no single word but which every bò tùng xẻo table understands as the closing rite. The pot kept score all evening. Now you drink the score.`,
      tip: `The closing bowl is the pot's biography, compressed. It holds the extracted proteins and fat of every slice that passed through it, the progressive Maillard compounds the hot acid generated on their surfaces, the lemongrass and ginger aromatics that infused for two hours, and the coconut water's sugars now caramelised and concentrated. None of these existed at the start; all of them are the product of the meal's own unfolding. It is the richest broth in the evening, made by the eaters rather than by the kitchen, and it is the same closing-act logic as the Mekong hotpot's final bowl of reduced broth — the last thing in the pot is always the best, because it carries everything that came before. A table that discards the pot liquid has missed the ending, and a recipe that does not mention it has missed the dish.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
