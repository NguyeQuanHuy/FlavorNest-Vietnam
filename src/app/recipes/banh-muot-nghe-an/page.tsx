'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-muot-nghe-an',
  title: `Bánh Mướt Nghệ An (Thin Steamed Rice Rolls — Nghệ An Style)`,
  subtitle: `Bánh cuốn's leaner, thinner, more austere central-coast cousin — steamed on cloth over boiling water into sheets so thin they are nearly invisible, then rolled (not filled) into tight, empty, finger-width cylinders that sit on the plate like rows of translucent white pencils. Eaten by dipping into a bowl of cháo lươn, or into a bowl of riêu cua, or simply into a saucer of mắm tôm pha. The Nghệ An breakfast that takes the north's bánh cuốn and strips it to nothing but rice, water and steam.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-muot-nghe-an.jpg',
  intro: `Bánh mướt is the word Nghệ An uses for what Hà Nội calls bánh cuốn — but the two are not the same dish, and the difference is the same difference that separates the Bình Định bánh cuốn chả ram from the Hà Nội original: the northern version FILLS the sheet (pork, mushroom, inside), and the Nghệ An version EMPTIES it (nothing inside, the sheet rolled into a plain, unfilled cylinder). The emptiness is not poverty — it is philosophy: the Nghệ An eater does not want the sheet to contain its own flavour, because the sheet's JOB is to be a vehicle — a neutral, smooth, starchy, translucent tube that the eater DIPS into something else (cháo lươn, riêu cua, mắm tôm), and the something-else is the flavour, and the sheet is the delivery system.

The distinction maps the same pattern the Bình Định collection documented: the north fills (the sheet is a vessel), the central coast empties (the sheet is a wrapper or a dipper). The pattern is consistent across multiple formats — bánh cuốn (north fills, centre empties), bánh xèo (south fills with mung bean, centre does not), nem rán (north fills heavily, centre fills lightly) — and the pattern points to a central-coast culinary aesthetic that VALUES EMPTINESS: the empty sheet, the thin broth, the lean filling, the single-spice seasoning. The Nghệ An kitchen does not add. It subtracts. And the subtraction is the discipline.

Bánh mướt is thinner than the Hà Nội bánh cuốn — the Nghệ An batter is more dilute (more water, same flour), and the steaming is briefer (20-25 seconds vs the Bình Định's 30-40 seconds and the Hà Nội's 40-50 seconds), producing a sheet that is: more translucent (the thinner starch layer transmits more light), more fragile (it tears more easily during peeling — the Nghệ An cook's skill is measured by the tear rate, and a professional bánh mướt maker tears fewer than 1 in 20), and more DISSOLVING on the tongue (the thinner the sheet, the faster the saliva's amylase hydrolyses the starch — the bánh mướt dissolves faster than the Hà Nội bánh cuốn, approaching the bánh hỏi's 3-4 second dissolution rate).

The rolling is also different: the Hà Nội bánh cuốn is rolled loosely (a wide, flat, filled roll), while the bánh mướt is rolled TIGHTLY (a narrow, empty cylinder, roughly 1.5 cm in diameter and 10-12 cm long, looking like a translucent white pencil). The tight roll is the dipping format: the narrow cylinder can be picked up with chopsticks without tearing (the roll's tightness gives it structural rigidity the flat sheet lacks), dipped into a liquid (the end of the cylinder enters the broth or the sauce), and bitten — the bite releasing a mouthful of starch-tube-plus-absorbed-liquid that is the Nghệ An breakfast's fundamental unit.

The traditional Nghệ An breakfast is: a plate of bánh mướt (10-15 rolls) beside a bowl of cháo lươn (the eel congee this collection documented) or a bowl of riêu cua (crab-tomato soup). The eater alternates: a roll dipped in the cháo (the roll absorbs the porridge's eel-stock-and-turmeric liquid through its open end), a spoonful of cháo, a roll dipped in the riêu (the roll absorbs the crab-tomato-shrimp-paste broth), a spoonful of riêu. The two bowls and the plate of rolls are the complete Nghệ An breakfast, and the rolls are the bridge between them — the neutral starch that carries first the eel's iron and then the crab's brine, flavoured by nothing but what they dip into.`,
  ingredientSections: [
    {
      title: 'The batter — thinner than the north, thinner than the centre',
      items: [
        { amount: 250, unit: 'g', name: 'rice flour (bột gạo)' },
        { amount: 30, unit: 'g', name: 'tapioca starch', note: `For translucency and slight chew — same addition the Bình Định bánh cuốn and the bánh hỏi used.` },
        { amount: 600, unit: 'ml', name: 'water', note: `MORE water than the Bình Định version (500 ml) and the Hà Nội version (450 ml). The higher dilution = thinner batter = thinner sheet = faster dissolution. The water ratio IS the thinness prescription.` },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (in the batter, for non-stick)' },
      ],
    },
    {
      title: 'The steaming rig',
      items: [
        { amount: 1, name: 'wide pot with tightly stretched cotton cloth over the mouth', note: `Same rig as the Bình Định bánh cuốn — the cloth is the cooking surface. The cloth must be TIGHT (no sag — a sagging cloth produces an uneven sheet, thick at the sag's centre, thin at the edges).` },
        { amount: 1, unit: 'tbsp', name: 'oil, for brushing the cloth between sheets' },
      ],
    },
    {
      title: 'To serve — the dipping partners',
      items: [
        { amount: 4, name: 'bowls of cháo lươn (see cháo lươn Nghệ An recipe) or riêu cua', note: `The traditional pairing — the bánh mướt DIPS into the cháo or the riêu. The rolls are the vehicle; the broth is the payload.` },
        { amount: 3, unit: 'tbsp', name: 'mắm tôm pha (diluted shrimp paste): 2 tbsp mắm tôm + 1 tbsp lime + 1 tbsp sugar + sliced chili', note: `The standalone dip — for eaters who take their bánh mướt without cháo or riêu. The mắm tôm's funk is Nghệ An's condiment identity, the same identity the nhệch nướng's marinade documented.` },
        { amount: 4, unit: 'tbsp', name: 'hành phi (fried shallots)' },
        { amount: 30, unit: 'g', name: 'rau kinh giới (balm mint), torn', note: `The Nghệ An herb — kinh giới's warm, slightly medicinal, mint-basil aroma is the herb the Nghệ An breakfast always includes, the same herb the nem rán's northern wrap platter specified.` },
        { amount: 2, unit: 'tbsp', name: 'mỡ hành (scallion oil)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Steam 20-25 seconds per sheet — thinner than Hà Nội, faster than Bình Định',
      description: `Mix the batter: rice flour + tapioca starch + water + salt + oil, whisked smooth, strained through a fine sieve. The batter should be: VERY thin (thinner than the Bình Định version — pour from a ladle and it runs like water, barely distinguishable from water). Rest 20 minutes.

Bring the pot to a hard boil. Stretch the cloth tight. Brush with oil.

POUR: one small ladle of batter (30-40 ml — less than the Bình Định's 50-60 ml) onto the cloth. Spread QUICKLY with the ladle's back in a circular motion — the thinner batter spreads more easily, and the sheet should be: nearly transparent before steaming (the cloth's weave visible through the wet batter).

COVER. Steam 20-25 seconds. NOT 30 (which is the Bình Định timing) — the Nghệ An sheet is thinner and sets faster. At 20 seconds the starch is gelatinised, the sheet is translucent, and the edges have begun to curl slightly away from the cloth (the curl is the readiness signal — the sheet is contracting as its starch network tightens, and the contraction pulls the edges free).

PEEL: lift the sheet with an oiled bamboo stick or spatula — start at one curled edge, slide the stick under, and lift smoothly. The sheet peels away in one piece (if it tears: the batter was too thin, or the steaming was too short, or the cloth was not oiled). Lay the sheet on an oiled surface.

ROLL IMMEDIATELY: while the sheet is still warm and pliable, roll it into a tight cylinder — start at one edge and roll toward the other, producing a pencil-shaped tube 1.5 cm in diameter, 10-12 cm long. The warm sheet's starch is still in its sticky, pliable, gelatinised state, and the roll's inner surfaces fuse at contact, producing a solid, multi-layered tube that holds its shape when cool. A cooled-then-rolled sheet does not fuse (the retrograded starch is no longer sticky), and the roll unravels.

Set on a plate, seam-side down. Repeat — 30-40 rolls for 4 people. The rhythm: pour, spread, cover, 20 seconds, peel, roll — one roll every 35 seconds for a practiced cook, and the Nghệ An market's bánh mướt maker produces 200+ rolls per morning.`,
      tip: `The 20-second steaming time (vs Bình Định's 30-40 seconds and Hà Nội's 40-50 seconds) is calibrated to the thinner batter: the Nghệ An sheet is roughly 0.3-0.5 mm thick (vs Bình Định's 0.5-0.8 mm and Hà Nội's 0.8-1.2 mm), and the thinner sheet gelatinises in less time because the steam's heat penetrates the thinner starch layer faster. The three timing calibrations — 20s (Nghệ An), 30-40s (Bình Định), 40-50s (Hà Nội) — are directly proportional to the three sheet thicknesses, and each timing is correct for ITS sheet. The 20-second sheet steamed for 40 seconds is gummy and over-set; the 40-second sheet steamed for 20 seconds is raw at the centre. The timing is the thickness's echo.`,
    },
    {
      title: 'Drizzle mỡ hành, scatter hành phi and kinh giới — the plate is ready',
      description: `Arrange the rolled bánh mướt on a plate — 8-10 rolls per person, laid parallel like pencils in a case. Drizzle mỡ hành over the rolls — the scallion oil settles into the gaps between the rolls and coats their surfaces in a thin, green-gold, aromatic film that prevents sticking and lubricates the dip.

Scatter fried shallots over the rolls — the golden, sweet, caramelised shallot fragments land on the mỡ hành's oil film and adhere. Tear kinh giới leaves over the top — the herb's warm, mint-basil, slightly medicinal fragrance rises from the plate.

The plate is: white (the translucent rolls), green-gold (the mỡ hành), golden (the hành phi), and green (the kinh giới). The aroma: scallion oil, fried shallot, kinh giới. The plate contains NO protein, NO seasoning beyond the mỡ hành's salt, and NO complexity — it is PURE STARCH, dressed in oil and herb, waiting for the dip to give it meaning.`,
      tip: `The mỡ hành on the bánh mướt is not just flavour — it is STRUCTURAL. The oil film between the rolls prevents them from fusing to each other as the starch retrogrades and becomes sticky during cooling. Without the oil, a plate of 10 bánh mướt rolls left for 5 minutes becomes a plate of one fused, inseparable, starch-welded mass. The mỡ hành is the anti-stick layer — the same functional role the oil-in-the-batter played (preventing the sheet from sticking to the cloth), now applied post-cooking (preventing the rolls from sticking to each other). Oil is the starch-cook's universal separator, and the Vietnamese kitchen applies it at every stage: in the batter, on the cloth, and on the plate.`,
    },
    {
      title: 'Dip into cháo lươn, into riêu cua, into mắm tôm — the roll is the bridge',
      description: `THE NGHỆ AN BREAKFAST FORMAT:

Two bowls and one plate: a bowl of cháo lươn (the eel congee, hot, golden, turmeric-scented), a bowl of riêu cua (crab-and-tomato soup, hot, red-orange, shrimp-paste-funky), and the plate of bánh mướt (room temperature, translucent, neutral).

EATING: pick up one bánh mướt roll with chopsticks. Dip one end into the cháo lươn — the roll's open end absorbs the porridge's eel-stock liquid by capillary action (the same mechanism the lotus stem's air channels and the fried chả cá's sponge-pores used, here applied to the narrow tube the rolled sheet creates). Hold 2-3 seconds — the roll absorbs 3-4 ml of cháo.

Bite. The roll's starch dissolves on the tongue (3-4 seconds — the thinnest sheet, the fastest dissolution), releasing the absorbed cháo in a warm, eel-and-turmeric-flavoured burst that the starch's neutral sweetness frames without competing. The kinh giới resets. The hành phi crunches.

Next roll: dip into the riêu cua. The roll absorbs 3-4 ml of the crab-tomato-shrimp-paste broth. Bite — a different flavour arrives through the same starch tube: crab-sweet, tomato-sour, mắm-tôm-funky, and the roll's neutrality makes the SWITCH perceptible. The same vehicle, a different payload, and the tongue registers the change.

Next roll: dip into the mắm tôm pha. The roll absorbs the purple-brown, funky, lime-sharp, sugar-rounded shrimp paste. Bite — the most pungent of the three dips, arriving through the mildest of the three vehicles, and the contrast between the mắm tôm's aggression and the bánh mướt's emptiness is the Nghệ An breakfast's most extreme moment.

The alternation — cháo, riêu, mắm tôm, cháo, riêu, mắm tôm — is the breakfast's rhythm, and the bánh mướt is the metronome: a neutral beat between three different flavour instruments, carrying each instrument's note to the tongue and then resetting to neutral before carrying the next. The roll does not have a flavour. The roll HAS flavour — borrowed, absorbed, released and replaced, 10-15 times per breakfast, from 3 different sources. The roll is the emptiest food in the collection, and its emptiness is its genius: it can be ANYTHING the dip makes it, and it is NOTHING when the dip is absent, and the nothing is the canvas every dip paints on.

Bánh mướt opens the Nghệ An collection with the province's foundational format: the empty sheet, the neutral roll, the vehicle that carries but does not speak. Every other Nghệ An dish in this collection — the cháo lươn, the nhệch nướng, the riêu cua, the mắm tôm — is a voice. The bánh mướt is the silence between the voices. And the silence is what makes the voices audible.`,
      tip: `The three-dip alternation — cháo lươn (eel, warm, savoury), riêu cua (crab, sour, funky), mắm tôm pha (shrimp paste, pungent, sharp) — is a PALATE-SWITCHING exercise that the neutral bánh mướt enables: each dip delivers a radically different flavour profile, and the roll's dissolution-and-reset (the starch dissolves, the tongue returns to neutral in 5 seconds, the next dip arrives) allows the eater to COMPARE the three flavours within the same breakfast without any flavour-carryover from the previous dip contaminating the current one. The bánh mướt is a PALATE CLEANSER in solid form — it resets the tongue between dips the way a champagne sorbet resets the palate between courses in a French tasting menu. The reset is the emptiness, and the emptiness is the format's contribution to the meal's architecture.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
