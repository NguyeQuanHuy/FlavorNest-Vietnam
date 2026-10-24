'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ran-ho-dat-nau-chao',
  title: `Rắn Hổ Đất Nấu Cháo Đậu Xanh (Cobra Congee with Mung Bean)`,
  subtitle: `Rice-field cobra — skinned, deboned, the flesh simmered until it falls into soft, white, surprisingly clean-tasting shreds — cooked into a thick mung-bean congee with ginger, black pepper and medicinal herbs. The Delta's most potent folk-medicine cháo, eaten to "chase the wind from the bones" and tasting, once the prejudice is set aside, of a mild, lean, faintly sweet white-meat protein that is closer to chicken than to anything the word "snake" conjures.`,
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '3 hr',
  rating: 4.6,
  baseServings: 4,
  heroImage: '/images/recipes/ran-ho-dat-nau-chao.jpg',
  intro: `Snake is eaten across mainland Southeast Asia, across southern China, and across the Mekong Delta with a matter-of-factness that surprises nobody who has spent time in the region and startles everybody who has not. The Delta's paddies, canals and dike-banks are habitat for dozens of snake species — rat snakes, water snakes, pythons, cobras — and the farmers who work the paddies have been catching and eating them for as long as the paddies have existed, because a snake in a rice paddy is a protein in a rice paddy, and a protein in a rice paddy is lunch.

The species most commonly cooked into cháo in Đồng Tháp, An Giang and the western Delta is the rắn hổ đất — the monocled cobra, Naja kaouthia, or the Indochinese spitting cobra, Naja siamensis — a large, common, venomous rice-paddy snake that the Delta's snake-catchers hunt professionally and sell live at speciality markets and at the nhậu restaurants that serve snake as their main attraction. The cobra is the prestige snake — larger, meatier, and carrying the folk-medicine reputation that elevates it from food to tonic: cobra flesh is believed, in the Sino-Vietnamese traditional medicine framework, to "drive wind from the bones" (trị phong thấp), to strengthen the joints, to warm the body's "qi" channels, and to treat rheumatism, back pain and general debility. The folk claims are not evidence-based, but the belief system is deeply rooted and the market prices reflect it: cobra flesh sells for three to five times the price of chicken.

The flesh itself — stripped of its cultural freight — is a mild, lean, white-meat protein. Snake meat has a protein content of roughly 18-20% (comparable to chicken breast), a fat content below 2% (leaner than any poultry), and a flavour profile that every first-time eater describes with the same surprised phrase: "it tastes like chicken." The comparison is not wrong — both are lean, white, mildly flavoured, low-fat vertebrate muscles — but it is incomplete: snake has a slightly firmer texture (the muscles are longitudinal rather than bundled, giving a more uniform, less fibrous chew), a faintly sweeter finish (higher free glutamate in reptilian muscle), and a cleaner, more neutral taste than any poultry, because the snake's diet (rodents, frogs, fish) is less grain-dependent and its fat stores carry fewer of the volatile fatty acids that give poultry its characteristic "chickeny" note.

The cháo format is the standard Vietnamese medicinal-congee template: rice simmered to a thick porridge with the protein and with a selection of traditional herbs, producing a bowl that is food and medicine in one spoonful. The mung bean is added for its "cooling" property in the traditional medicine framework (balancing the snake's "heating" nature), and the ginger and pepper are added for their genuine pharmacological properties (gingerol is an anti-inflammatory; piperine enhances bioavailability of other compounds) as well as for their flavour.

A SAFETY NOTE ON HANDLING: cobra is a venomous snake. Its venom is a neurotoxin that can cause respiratory paralysis and death. The snake must be killed and the head (containing the venom glands) must be removed by an experienced handler — NOT by a home cook, NOT by an amateur, and NOT by anyone who does not know how to immobilise a live cobra safely. In Vietnam, cobra is sold pre-killed and pre-cleaned at the speciality markets, or killed on-site at the nhậu restaurant by the restaurant's own snake handler. The venom is in the glands, not in the flesh — properly cleaned cobra meat is non-toxic and safe to eat. But the killing is a professional skill, and this recipe begins AFTER the snake has been professionally killed, cleaned and delivered to the kitchen as a skinned, headless, gutted carcass.`,
  ingredientSections: [
    {
      title: 'The snake',
      items: [
        {
          amount: 1,
          name: 'cobra or large non-venomous snake (python, rat snake), 800 g - 1.2 kg, pre-killed, skinned, head removed, gutted',
          note: `⚠️ VENOMOUS SNAKES: must be killed and head-removed by a professional handler. The venom is in the head's glands, not in the flesh — cleaned meat is non-toxic. Buy pre-cleaned from a speciality market or a licensed snake restaurant. Do NOT attempt to kill or handle a live venomous snake.\n\nIn Vietnam: bought pre-cleaned at nhậu restaurants and speciality wildlife markets. OUTSIDE VIETNAM: snake meat is available from exotic-meat suppliers in some European countries (farmed python, farmed water snake). Alternatively, the cháo format works identically with any lean white-meat protein — frog legs, rabbit, or chicken thigh produce a structurally similar result for anyone who wants the congee without the snake.`,
        },
      ],
    },
    {
      title: 'The congee base',
      items: [
        { amount: 200, unit: 'g', name: 'plain rice (gạo tẻ)' },
        { amount: 100, unit: 'g', name: 'split mung beans (đậu xanh), soaked 2 hours', note: `The "cooling" element in the traditional-medicine pairing — and the starch that thickens the cháo to a denser, more sustaining consistency than rice alone.` },
        { amount: 2, unit: 'L', name: 'water' },
      ],
    },
    {
      title: 'The aromatics and herbs',
      items: [
        { amount: 40, unit: 'g', name: 'ginger, bruised and sliced', note: `Generous — ginger's warmth is the aromatic spine that carries the snake's mild flavour and that the folk medicine considers essential for "activating" the meat's medicinal properties.` },
        { amount: 1, unit: 'tsp', name: 'ground black pepper', note: `Piperine — a genuine bioavailability enhancer, and the heat that warms the bowl.` },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 20, unit: 'g', name: 'kỷ tử (goji berries), optional', note: `The traditional-medicine addition — documented antioxidant polysaccharides, and a sweetness that rounds the ginger.` },
        { amount: 10, unit: 'g', name: 'táo đỏ (red dates / jujube), pitted, optional' },
        { amount: 2, name: 'stalks lemongrass, bruised (for the initial simmer)' },
      ],
    },
    {
      title: 'The bowl toppings',
      items: [
        { amount: 4, unit: 'tbsp', name: 'fried shallots' },
        { amount: 30, unit: 'g', name: 'ginger, finely julienned (raw)', note: `The two-ginger design: bruised ginger cooked into the cháo for mellow depth, raw julienne scattered on top for bright bite — the same dual-ginger architecture as the cháo gà and the cháo bò.` },
        { amount: 4, name: 'scallions, sliced' },
        { amount: 30, unit: 'g', name: 'coriander, chopped' },
        { amount: 30, unit: 'g', name: 'rau răm, torn' },
        { amount: 1, unit: 'tsp', name: 'sesame oil' },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 3, name: 'bird\'s-eye chilies, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Simmer the snake to extract every gram of flavour and gelatin',
      description: `Cut the cleaned, headless, skinned snake carcass into 10 cm sections. Place in a pot with the 2 L of water, half the bruised ginger, lemongrass and a teaspoon of salt. Bring to a simmer — skim the first foam at 5 minutes.

Simmer 45-60 minutes. Snake has dense, longitudinal muscle fibres and more connective tissue per gram than chicken — it needs the longer simmer to soften. At 45 minutes: pull a piece out and test — the flesh should separate from the spine easily when pulled with a fork. If it resists: 15 more minutes.

Lift all the pieces out. Cool 10 minutes. Strip the flesh from the bones by hand — the spine, the ribs and the small bones come away cleanly, and what remains is a pile of soft, white, shredded meat that looks remarkably like poached chicken. Check every piece for small bones — snake has many fine rib bones that can be missed.

Return the bones to the broth and simmer 30 more minutes — the bones' collagen dissolves into the liquid, enriching it with gelatin that will give the finished cháo its lip-coating body. Strain out the bones. The broth is now a ginger-lemongrass-enriched snake stock, and it is the liquid the rice will cook in.`,
      tip: `Snake muscle fibre is structurally different from mammalian or avian muscle: it is arranged in longitudinal bundles that run the full length of the body (adapted for the serpentine locomotion that IS the snake's only movement), rather than in the shorter, bundled fibres of a limbed animal's muscle. The longer fibres produce a softer, more uniform shred when cooked — each shred is a single, intact, longitudinal fibre rather than a torn bundle — and the texture of the finished cháo's meat is therefore silkier and more homogeneous than chicken or pork in the same format. The snake's anatomy dictates the texture, and the texture is the pleasant surprise: softer, cleaner, more yielding than the word "snake" prepares the eater for.`,
    },
    {
      title: 'Cook the rice and mung bean in the snake stock — thick, golden, nourishing',
      description: `Bring the strained snake stock back to a simmer — you should have roughly 1.5-1.8 L. Add the rinsed rice, the soaked mung beans, the remaining bruised ginger, goji berries and jujube if using.

Simmer uncovered, stirring every 7-8 minutes from the bottom, for 40-50 minutes. The rice dissolves into the stock. The mung beans soften, some holding their shape, others disintegrating into a golden-green starch that thickens the cháo and tints it faintly yellow. The goji berries plump and turn jewel-red.

At 40 minutes: the cháo should be thick — a spoon dragged across the bottom leaves a trail that closes in 3-4 seconds. Stir in the shredded snake meat. Season with fish sauce, salt, sugar and half the ground pepper.

The cháo should taste: gingery (the spine), faintly sweet (from the mung bean and the jujube), savoury-clean (from the snake stock's dissolved gelatin and amino acids), and warming — the ginger's gingerol and the pepper's piperine creating a heat that is felt in the throat and the chest, which is the sensation the folk medicine calls "driving the wind" and which the pharmacology calls "vasodilation and mild thermogenesis."`,
      tip: `Cooking the rice directly in the snake stock rather than in plain water is the same broth-in-starch technique the cháo bò Tri Tôn used: the gelatinising rice absorbs the stock's dissolved amino acids, gelatin and ginger volatiles into its starch matrix, producing a congee where every spoonful carries the snake's flavour structurally, not superficially. A cháo cooked in water and dressed with snake stock tastes of snake only at the surface. A cháo cooked IN the stock tastes of snake all the way through.`,
    },
    {
      title: 'Ladle, top, eat — the medicinal bowl that tastes better than it sounds',
      description: `Ladle the thick, golden-flecked cháo into deep bowls — the shredded snake meat visible as white ribbons through the porridge, the goji berries as red jewels, the mung bean fragments as golden flecks.

Top: fried shallots (generous), raw ginger julienne, scallion, coriander, rau răm, a drizzle of sesame oil, the remaining cracked pepper. Serve with lime wedges and sliced chili.

The two-ginger design lands for the fourth time in the collection: the bruised ginger simmered into the cháo gives mellow, warm gingerone (the decarboxylated, less pungent metabolite of gingerol, produced by prolonged heating). The raw julienne on top gives sharp, bright, tongue-tingling gingerol (the unheated, fully pungent original). Together: warmth from below, brightness from above, and the snake's own mild flavour framed between them.

Eat with a spoon. Each spoonful carries: thick, golden, ginger-spined congee; soft, silky, shredded snake meat; the occasional pop of a goji berry (sweet, slightly chewy); the mung bean's starchy body; and the fried shallot's caramelised crunch dissolving into the porridge.

The first spoonful is the one that matters — the one where the eater's preconception ("snake") meets the tongue's reality ("clean, mild, white meat in a ginger-mung-bean porridge") and the preconception dissolves faster than the congee. Every first-time snake eater reports the same experience: the fear was in the name, not in the bowl.`,
      tip: `The cháo trilogy is now a quartet — chicken (Bắc Ninh), fish (Trà Vinh), beef (An Giang) and now snake (Đồng Tháp) — and the four animals trace the Vietnamese cháo's full protein range: poultry, aquatic, mammalian, reptilian. The format is identical in all four — rice + protein + stock + ginger + time — and the format's stability across such different proteins proves the cháo's nature: it is not a recipe for any specific protein but a SYSTEM for any protein, a universal congee engine that accepts whatever the landscape provides and converts it, by the same rice-in-stock-with-ginger formula, into a thick, nourishing, warming bowl. The system is the recipe. The protein is the variable. And the variable, in the Delta, includes the snake in the paddy.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
