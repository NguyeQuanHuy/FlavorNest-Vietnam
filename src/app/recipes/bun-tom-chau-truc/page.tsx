'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-tom-chau-truc',
  title: `Bún Tôm Châu Trúc (Fresh Shrimp Noodle Soup — Phù Mỹ Style)`,
  subtitle: `Bún in a broth made from nothing but shrimp — whole shrimp simmered head-and-shell until the broth is a vivid, coral-orange, intensely crustacean liquid that tastes of the lagoon the shrimp came from — topped with the same shrimp, now peeled, poached just to the curl, and served with a scatter of scallion and a squeeze of lime. The Bình Định noodle soup that uses one ingredient as both broth AND topping, and that proves a bowl needs nothing but the best version of one thing.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/bun-tom-chau-truc.jpg',
  intro: `Châu Trúc is a village in the Phù Mỹ district of Bình Định — a small, quiet, lagoon-side settlement on the central coast where the brackish-water lagoons behind the sand dunes hold a population of wild and farmed shrimp (principally Penaeus monodon, the tiger prawn, and Litopenaeus vannamei, the white-leg shrimp) that the village has fished for generations. The bún tôm that Châu Trúc is famous for is the village's single-ingredient argument: a noodle soup in which the shrimp is the ONLY protein, the shrimp's shells and heads are the ONLY broth source, and the broth's colour — a vivid, coral-orange, almost-glowing amber — comes entirely from the shrimp's own astaxanthin, released from the shells during simmering.

No pork bone. No chicken stock. No fish sauce in the broth (it is added at the table by the eater, not by the cook). No tomato for colour. No annatto for tint. The broth is SHRIMP and WATER and SALT, and nothing else, and the broth's quality is therefore a direct, un-maskable, un-augmentable measurement of the shrimp's quality. A Châu Trúc bún tôm made from fresh, lagoon-caught, shell-on shrimp produces a broth so intensely crustacean that it tastes like the sea concentrated to a syrup. The same recipe made from frozen, de-shelled, imported shrimp produces a thin, pale, flavourless liquid that no amount of fish sauce can rescue. The broth IS the shrimp, and the shrimp IS the broth, and there is nowhere for mediocrity to hide.

The simplicity is the point and the discipline. The Châu Trúc cook adds nothing to the broth because adding anything would dilute the shrimp's voice — and the shrimp's voice, when the shrimp is good enough, is the only voice the bowl needs. This is the same argument the cá suối nướng Sapa made (fish + salt + fire, nothing more) and the same argument the cơm nắm muối vừng made (rice + sesame + salt, nothing more): when the ingredient is sufficient, technique is subtraction, not addition, and the cook's skill is measured by what was LEFT OUT rather than by what was put in.

The astaxanthin that colours the broth deserves a note: it is a carotenoid pigment (the same chemical family as the lycopene in the gấc and the beta-carotene in the carrot) that is bound to protein (crustacyanin) in the living shrimp's shell, appearing grey-blue. When the shell is heated, the crustacyanin denatures and releases the astaxanthin, which — now free — displays its natural vivid red-orange colour. The broth's coral colour is therefore a DENATURATION SIGNAL: the colour proves the shells were fresh (old, degraded shells release less astaxanthin) and that the simmering was sufficient (under-simmered shells release less colour). The broth's colour is its quality certificate, and a pale shrimp broth is a broth that failed either the ingredient test or the cooking test.`,
  ingredientSections: [
    {
      title: 'The shrimp (one ingredient, two roles)',
      items: [
        {
          amount: 800,
          unit: 'g',
          name: 'whole fresh shrimp (shell-on, head-on), medium-large (20-30 per kg)',
          note: `FRESH — not frozen, not peeled, not headless. The heads contain the hepatopancreas (the "tomalley" — the organ that produces the richest, most intensely crustacean flavour and the deepest orange fat), and the shells contain the astaxanthin (the colour). A peeled, headless shrimp is a shrimp that has been stripped of its broth-making capacity — it can be a topping but it cannot be a broth. The Châu Trúc recipe requires the WHOLE shrimp because the WHOLE shrimp is the WHOLE broth.`,
        },
      ],
    },
    {
      title: 'The broth — shrimp, water, salt, nothing else',
      items: [
        { amount: 2, unit: 'L', name: 'water' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tsp', name: 'sugar', note: `A pinch — to round the broth's natural brininess without sweetening it. The broth's sweetness should come from the shrimp's own glycine (the amino acid that makes crustacean flesh taste sweet), not from added sugar.` },
      ],
    },
    {
      title: 'The bowl',
      items: [
        { amount: 400, unit: 'g', name: 'bún (round rice vermicelli), blanched' },
        { amount: 3, name: 'scallions, sliced thin' },
        { amount: 30, unit: 'g', name: 'coriander, chopped' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        { amount: 2, name: 'limes, in wedges' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce (at the TABLE — not in the broth)' },
        { amount: 100, unit: 'g', name: 'rau sống: lettuce, húng quế, rau răm (on the side)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Peel the shrimp — the shells and heads make the broth, the tails become the topping',
      description: `Peel and devein the shrimp — but KEEP EVERYTHING: the shells go in one bowl (the broth's raw material), the heads go in the same bowl (the broth's richest flavour source), and the peeled tails go in another bowl (the topping, to be poached later).

This is the zero-waste circuit the bún chả cá Quy Nhơn documented (fillets → paste, bones → broth), applied to shrimp: tails → topping, shells + heads → broth. One ingredient, two products, nothing discarded.

OPTIONAL INTENSIFICATION: take half the shrimp heads and press them through a fine-mesh sieve over a bowl — the orange, fatty, intensely flavoured hepatopancreas liquid (the "head butter," the "shrimp fat") passes through the sieve, leaving the hard carapace behind. Reserve this liquid — it is stirred into the finished broth at the very end for a final burst of concentrated shrimp flavour and colour. This step is the Châu Trúc cook's secret weapon: the head-butter is UNCOOKED shrimp fat, and adding it at the end (off-heat, or into just-simmering broth) preserves its volatile crustacean aromatics that the long simmering would have driven off.`,
      tip: `The shrimp head's hepatopancreas — the greenish-orange organ inside the head carapace — contains roughly 30-40% fat by weight, and the fat is rich in astaxanthin esters (fat-soluble astaxanthin bonded to fatty acids, which are MORE intensely coloured and MORE flavour-active than the free astaxanthin in the shells). The head-butter is therefore the CONCENTRATED ESSENCE of the broth's colour and flavour: a tablespoon of pressed head-butter contributes more colour and more crustacean aroma to the final broth than 100 g of simmered shells. The Châu Trúc cook who presses the heads is extracting the ingredient's most valuable fraction and deploying it at the moment of maximum impact (at the end, un-cooked, volatile-preserved).`,
    },
    {
      title: 'Simmer the shells and heads 30-40 minutes — the broth turns coral',
      description: `Heat 1 tablespoon of oil in the pot. Add the shells and heads — sauté 3-4 minutes over high heat, pressing the heads against the pot with a spoon to crack them and release their fat. The shells turn from grey to vivid red-orange in the first minute (the crustacyanin denaturing, releasing the astaxanthin), and the pot fills with the smell of toasting shrimp shell — a warm, marine, slightly sweet, intensely crustacean aroma.

Add the 2 L water. Bring to a boil. Reduce to a gentle simmer. Add salt and sugar. Simmer 30-40 minutes — the shells and heads continue releasing astaxanthin, flavour compounds (dimethyl sulfide, trimethylamine oxide's breakdown products, free amino acids — principally glycine, alanine and glutamate), and gelatin (from the shells' chitin-protein matrix, which partially hydrolyses in the hot water, contributing body to the broth).

Skim occasionally — the foam is minimal (no blood proteins, unlike a meat broth), but any surface oil can be skimmed or left (the orange oil is astaxanthin-rich and adds colour and richness).

At 30-40 minutes: the broth is CORAL-ORANGE (vivid, glowing, the colour of a tropical sunset — this is the visual that defines the Châu Trúc bún tôm and that no artificial colouring can match), aromatic (pure crustacean — no ginger, no star anise, no lemongrass masking the shrimp's own volatile profile), and lightly gelatinous (the shell-gelatin contributing enough body to coat the spoon's back in a thin, glossy film).

Strain through a fine sieve — press the shells hard with the back of a ladle to extract every drop of flavour. Discard the spent shells. The broth is ready.

If using the reserved head-butter: stir it in NOW, off-heat. The cold, raw, orange fat dissolves into the hot broth, enriching its colour to an even deeper coral and adding a final, uncooked, volatile-rich crustacean intensity that the 30-minute simmer could not preserve.`,
      tip: `The decision to SAUTÉ the shells before adding water is a flavour-development step the Châu Trúc cooks learned empirically: dry-heat contact (the shells against the hot pot at 160-180°C for 3-4 minutes) produces MAILLARD PRODUCTS from the shells' protein-and-chitin matrix — the same browning chemistry every seared-meat fond in this collection has documented, here applied to crustacean shells rather than to beef or pork. The shell-fond contributes a toasted, nutty, caramelised depth to the broth that water-only simmering (without the initial sauté) does not produce. The sauté is the difference between a "shrimp broth" (mild, clean, one-dimensional) and the Châu Trúc broth (deep, toasted, complex, multi-layered). The shells' Maillard is the broth's bass note.`,
    },
    {
      title: 'Poach the peeled tails, assemble — one ingredient in two forms, one bowl',
      description: `Bring the strained broth back to a gentle simmer. Add the peeled shrimp tails — poach 2-3 minutes, until they curl and turn pink-orange (the astaxanthin in the flesh, released by the heat — the same denaturation that coloured the broth, here colouring the topping). Do NOT overcook — shrimp goes from sweet-and-snappy (60-65°C internal) to rubbery-and-dry (75°C+) in less than 2 minutes. Pull at the first full curl.

Lift the poached shrimp out with a slotted spoon. Set aside.

ASSEMBLE: blanched bún in the bowl. 5-6 poached shrimp on top. Ladle the coral-orange broth over — enough to submerge the bún and half-submerge the shrimp. The broth's vivid colour against the white bún and the pink shrimp is the bowl's visual: orange-white-pink, a warm-colour palette that no other noodle soup in the collection shares (phở is brown-white, bún bò Huế is red-white, bún chả cá is gold-white — the bún tôm is ORANGE-white, and the orange is the shrimp's own colour, not a spice's).

Top: sliced scallion, chopped coriander, black pepper. Set lime, chili and fish sauce on the side — the fish sauce is OFFERED, not added by the cook, because the broth's seasoning is SALT-ONLY (the cook's deliberate restraint — adding fish sauce to the broth would add a fermented note that competes with the shrimp's clean, un-fermented, marine sweetness; the eater who wants fish sauce adds it at the table, and the eater who prefers the broth's purity does not).

The first spoonful: the broth — coral, warm, crustacean-sweet (the glycine and the alanine the shrimp's muscle donated during the shell-simmer), lightly saline, faintly toasted (the shell-sauté's Maillard), and carrying a MARINE SWEETNESS that is different from any other sweetness in the collection. Shrimp-sweet is not sugar-sweet, not fruit-sweet, not starch-sweet — it is amino-acid-sweet, the sweetness of glycine (the simplest amino acid, named for its sweet taste: glykys = sweet in Greek), and the sweetness lives at the intersection of savoury and sweet, in a place no non-crustacean food occupies.

The shrimp topping: pink, curled, snappy (the myosin set at 60-65°C, the texture firm but yielding, each shrimp requiring 2-3 chews before releasing its sweet, clean, just-cooked-through flesh). The bún: neutral, slippery, the carrier. The lime: squeezed at the halfway point, its citric acid brightening the broth's marine sweetness into a sharper, more citrus-forward register.

Bún tôm Châu Trúc is the collection's purest single-ingredient noodle soup — purer than the bún chả cá (which used two textures of fish cake), purer than the miến gà (which used chicken broth + chicken shreds, two forms), and approaching the cá suối nướng Sapa's radical simplicity. One ingredient. Two forms (broth from the shells + topping from the flesh). One bowl. The shrimp speaks alone, and the cook's restraint — no ginger, no spice, no fermented sauce in the broth — is the microphone's volume turned to maximum on a single voice.`,
      tip: `Glycine — the amino acid responsible for the shrimp's characteristic sweetness — is present in crustacean muscle at roughly 1,500-2,000 mg per 100 g (5-10x the concentration in chicken or beef muscle). Glycine's sweet taste is detected at a threshold of roughly 25 mM (1.9 mg/ml), and the Châu Trúc broth — with dissolved glycine from both the shell-simmer and the flesh-poach — comfortably exceeds this threshold, which is why the broth tastes SWEET without any added sugar. The sweetness is intrinsic, molecular, amino-acid-derived, and it is the sweetness that every shrimp-broth-based dish in the world relies on — from the French bisque to the Japanese ebi-dashi to this Bình Định bún tôm. The glycine is the shrimp's gift to every cuisine that simmers its shells, and the Châu Trúc cook who adds nothing to the broth is a cook who trusts the glycine to carry the bowl.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
