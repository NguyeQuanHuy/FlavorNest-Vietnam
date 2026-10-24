'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'com-hen-vinh',
  title: `Cơm Hến Vinh (Cold Rice with Stir-Fried River Clams — Sông Lam Style)`,
  subtitle: `Cold leftover rice — yesterday's rice, deliberately cold, deliberately stale — topped with tiny river clams stir-fried in lemongrass, chili and mắm ruốc, then showered with a storm of toppings: roasted peanuts, toasted sesame, fried pork rinds, shredded banana blossom, rau răm, mint, and a ladleful of the clam's own broth, poured hot over the cold rice so the two temperatures collide in the bowl and the steam rises through the toppings like a signal that the food is ready. The Vinh version of Huế's famous cơm hến, adapted to the Sông Lam river's smaller, sweeter clams and to the Nghệ An palate's deeper love of mắm tôm.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '45 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/com-hen-vinh.jpg',
  intro: `Cơm hến — cold rice with river clams — is a dish most famously associated with Huế, where it is eaten for breakfast along the banks of the Perfume River from carts that have sat in the same spots for generations. But cơm hến is not exclusively Huế's: every central Vietnamese province with a river — and Nghệ An has the Sông Lam (the Lam River), one of the largest in the region — has its own version, and the Vinh version differs from the Huế original in ways that map the Huế-to-Nghệ-An gradient the collection has traced in every dish that crosses the boundary.

THE HUẾ VERSION: uses hến from the Perfume River (tiny, 1-1.5 cm, pale-shelled, mild-flavoured), served with a delicate, almost-sweet chili sauce, and topped with a refined, measured assortment of garnishes. The Huế cơm hến is ELEGANT — the toppings are precise, the flavours balanced, the spice moderate.

THE VINH VERSION: uses hến from the Sông Lam (similarly tiny but slightly more mineral-flavoured — the Lam River flows through laterite soil rich in iron, and the clams accumulate the river's mineral load in their flesh), served with MẮM RUỐC (fermented krill paste — thicker, darker, more aggressively funky than the mắm tôm the nhệch nướng used, because mắm ruốc is made from KRILL, not from shrimp, and the krill's smaller size produces a finer, more paste-like, more intensely concentrated product), and topped with a HEAVIER hand — more peanuts, more sesame, more fried pork rind, more chili. The Vinh cơm hến is ROBUST — the toppings are generous, the mắm ruốc is assertive, and the spice is turned up.

The COLD RICE is the dish's most counterintuitive element: in a cuisine where hot rice is the default and cold rice is associated with poverty ("ăn cơm nguội" — eating cold rice — is a Vietnamese idiom for hardship), the cơm hến deliberately, proudly, specifically uses COLD, LEFTOVER rice. The reason is textural: cold rice has undergone RETROGRADATION — the same starch-firming process the cơm nắm documented — and the retrograded grains are firmer, drier, more separate and more resistant to absorbing liquid than hot rice's soft, sticky, freshly gelatinised grains. When the hot clam broth is poured over the cold rice, the retrograded grains RESIST: they warm but they do not dissolve, they absorb a thin film of broth but they do not become porridge, and each grain retains its individual identity in the bowl for the 10 minutes the eating takes. Hot rice under hot broth would collapse to cháo in 3 minutes. Cold rice under hot broth stays rice for 10.

The retrogradation is the engineering, and the engineering is the reason cơm hến uses yesterday's rice: the overnight refrigeration completed the retrogradation that a 30-minute cooling only began, and the fully retrograded grain is the grain that survives the broth.`,
  ingredientSections: [
    {
      title: 'The cold rice',
      items: [
        {
          amount: 4,
          name: 'bowls of cooked rice, COLD (refrigerated overnight or cooled completely)',
          note: `Yesterday's rice — deliberately. The retrogradation (amylose re-crystallisation during cooling) firms the grains and makes them broth-resistant. Fresh hot rice turns to cháo under the hot broth. Cold rice stays rice. The poverty ingredient is the engineering ingredient.`,
        },
      ],
    },
    {
      title: 'The clams',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'hến (tiny river clams), cleaned, soaked overnight in salted water to purge sand',
          note: `Hến — Corbicula fluminea, the Asian freshwater clam, 1-2 cm across, found in every Vietnamese river and canal. The overnight soak in salted water (1 tbsp salt per litre) makes the clams expel the sand and grit trapped in their shells. Rinse 3-4 times after soaking. If unavailable: cockles, small Manila clams or canned baby clams (drained, rinsed).`,
        },
      ],
    },
    {
      title: 'The stir-fry aromatics',
      items: [
        { amount: 2, name: 'stalks lemongrass, tender parts, minced very fine' },
        { amount: 4, name: 'cloves garlic, minced' },
        { amount: 3, name: 'shallots, sliced thin' },
        { amount: 3, name: 'bird\'s-eye chilies, sliced', note: `More chili than the Huế version — the Vinh palate is hotter.` },
        { amount: 2, unit: 'tbsp', name: 'mắm ruốc (fermented krill paste)', note: `The Nghệ An condiment — darker, thicker, more pungent than mắm tôm. Huế uses mắm tôm; Vinh uses mắm ruốc. The krill paste's finer grind and more concentrated fermentation produce a paste that is both more aggressive and more savoury than the shrimp paste.` },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The clam broth',
      items: [
        { amount: 500, unit: 'ml', name: 'clam cooking liquid (from boiling the clams — see step 1)', note: `The clams' own juice — the liquid they release when boiled, rich in glycine (the clam's sweet amino acid, same as the Châu Trúc shrimp's), minerals (the Sông Lam's iron and calcium, accumulated in the clam's tissue), and salinity. This liquid is the HOT element poured over the COLD rice.` },
      ],
    },
    {
      title: 'The topping storm — generous, varied, the Vinh hand',
      items: [
        { amount: 60, unit: 'g', name: 'roasted peanuts, coarsely crushed' },
        { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
        { amount: 50, unit: 'g', name: 'tóp mỡ (fried pork rinds / cracklings), crushed', note: `Deep-fried pork skin — crispy, salty, rich. The FAT topping in a bowl that otherwise has almost no fat (the clams are lean, the rice is plain). The tóp mỡ's rendered lard is the lipid vehicle that carries the bowl's flavour compounds to the aroma receptors.` },
        { amount: 100, unit: 'g', name: 'banana blossom (bắp chuối), shredded very fine, soaked in lime water', note: `The sclerenchyma crunch — same banana blossom the nộm hoa chuối used, here shredded finer for a more delicate crunch that distributes through the bowl.` },
        { amount: 50, unit: 'g', name: 'rau răm, roughly torn' },
        { amount: 30, unit: 'g', name: 'spearmint (húng lủi), torn', note: `Spearmint — not Thai basil, not kinh giới. The cơm hến's specific herb. Its cool, mentholated, sweet-green note is the palate-cooler between the mắm ruốc's heat and the chili's burn.` },
        { amount: 30, unit: 'g', name: 'rau mùi (coriander), chopped' },
        { amount: 4, name: 'scallions, sliced' },
        { amount: 2, unit: 'tbsp', name: 'hành phi (fried shallots)' },
        { amount: 1, name: 'lime, in wedges' },
      ],
    },
  ],
  steps: [
    {
      title: 'Boil the clams, save the broth, stir-fry the meat — one clam, two products',
      description: `BOIL: bring 700 ml water to a boil. Add the cleaned hến. Boil 3-4 minutes — the shells open (discard any that do not open). Strain — SAVE THE LIQUID (this is the clam broth, 500 ml of glycine-sweet, mineral-rich, clam-essence liquid). Pick the clam meat from the shells — each clam yields a tiny (5-8 mm) morsel of ivory, sweet, mineral-flavoured meat. The picking takes longer than the cooking: 500 g of whole hến yields roughly 80-100 g of meat, and the picking — done by hand, one clam at a time — takes 15-20 minutes. This is the cơm hến's labour, and the labour is the same patient, repetitive, hand-scale work the chè hạt sen long nhãn's longan-stuffing demanded.

STIR-FRY: heat oil in a wok over high heat. Add garlic, shallot and lemongrass — 30 seconds, fragrant. Add the picked clam meat. Stir-fry 2 minutes — the tiny morsels sear lightly, each one picking up a trace of Maillard from the wok's surface. Add the mắm ruốc — stir through (the purple-brown paste coats the clams in a funky, savoury, intensely concentrated krill-ferment glaze). Add chili, fish sauce, sugar. Stir-fry 1 more minute. Off the heat.

The stir-fried clams should be: glossy (the mắm ruốc's glaze), aromatic (lemongrass + garlic + mắm ruốc = the Nghệ An trinity), and tiny — each clam morsel is a 5-8 mm flavour bomb, and the bowl will contain dozens of them, scattered through the rice like treasure in sand.

REHEAT THE BROTH: bring the reserved 500 ml clam broth back to a simmer. Season with a pinch of salt if needed — the broth should taste of clam and river, not of salt. Keep hot.`,
      tip: `The hến's mineral profile — iron (3.8 mg/100g meat), calcium (120 mg/100g), zinc (1.2 mg/100g) — reflects the Sông Lam's own mineral load: the river flows through laterite soil (iron-rich) and limestone bedrock (calcium-rich), and the clams, as filter-feeders, concentrate the dissolved minerals from the water in their tissues over their 2-3 year lifespan. Eating hến from the Sông Lam is eating the river's dissolved minerals in animal form — the same terroir-through-bioaccumulation principle the cá suối nướng Sapa's stream-fish and the rêu đá's river-algae documented. The clam IS the river, concentrated.`,
    },
    {
      title: 'Assemble — cold rice, hot clams, hot broth, the topping storm',
      description: `THE ASSEMBLY (per bowl):

BASE: a bowl of cold rice — spread evenly, not mounded. The rice is: room temperature or cold, the grains separate and firm (the retrogradation has done its work), and carrying no flavour of their own.

CLAMS: spoon a generous portion of the stir-fried hến over the rice — the mắm-ruốc-glazed, lemongrass-scented tiny morsels settling into the rice's gaps and crevices.

TOPPINGS — all at once, the storm: crushed peanuts (nutty crunch), toasted sesame (warm oil-crunch), crushed tóp mỡ (salty fat-crunch), shredded banana blossom (sclerenchyma crunch), rau răm (peppery), spearmint (cool), coriander (citral), scallion (sharp), hành phi (sweet caramelised).

The bowl before the broth: cold rice under a chaotic, multi-coloured, multi-textured, multi-aromatic mountain of toppings — the Vinh hand is GENEROUS, and the generosity is the aesthetic. The bowl should look: abundant, excessive, more topping than rice, more colour than white.

THE BROTH POUR: ladle 100-120 ml of the HOT clam broth over the cold rice and the toppings. The hot broth hits the cold rice — steam rises through the toppings, carrying their volatile aromatics (the rau răm's sesquiterpenes, the spearmint's menthol, the lemongrass's citral, the mắm ruốc's dimethyl sulfide) into the air above the bowl in a fragrant cloud that is the cơm hến's announcement.

The hot-cold collision is the bowl's defining moment: the broth warms the rice's surface (the outer 1 mm of each grain softens from retrograded-firm to gelatinised-soft, creating a dual-texture grain: soft outside, firm inside — the same dual texture a seared steak achieves, here on a grain of rice) and dissolves the tóp mỡ's surface fat (the pork rind's rendered lard enters the broth as tiny fat droplets that coat the rice grains in a thin, savoury, pork-flavoured lipid film). The rice RESISTS the broth for 10 minutes — each grain holding its shape, softening gradually, never dissolving to cháo. The resistance is the retrogradation's gift, and the gift is the reason the rice must be COLD.`,
      tip: `The hot-broth-on-cold-rice thermal collision produces a TEMPERATURE GRADIENT through the bowl: the top (where the broth was poured) is hot (70-80°C), the middle is warm (40-50°C), and the bottom (where the cold rice sat) is cool (20-25°C). The gradient means the eating experience CHANGES as the spoon descends: the first spoonful (from the top) is hot, brothy, topping-heavy; the middle spoonful is warm, balanced, the flavours integrated; and the last spoonful (from the bottom) is cool, firm-grained, the retrograded rice's firmness at its maximum and the broth's warmth at its minimum. The bowl is not a static dish — it is a GRADIENT, and eating it is eating through the gradient from hot-top to cool-bottom, with the flavour and the texture changing at every depth.`,
    },
    {
      title: 'Eat from the top down — through the storm, through the gradient, through the river',
      description: `Eat with a spoon — the bowl is too wet for chopsticks and too chunky for sipping. Each spoonful gathers: rice (some grains firm-cold from the bottom, some grains soft-warm from the broth's reach), clam morsels (tiny, sweet, mắm-ruốc-glazed, each one a 5-8 mm burst of river-mineral-and-fermented-krill), peanuts (crunch), sesame (crunch), tóp mỡ (crunch dissolving to fat), banana blossom (crunch holding), and herbs (rau răm's pepper, spearmint's cool, coriander's citral — three reset-herbs in one spoonful).

Squeeze lime at the halfway point — the citric acid brightens the mắm ruốc's funk and the clam broth's mineral depth into a sharper, more citrus-forward register.

Add more mắm ruốc if desired — the Vinh eater's calibration, the same self-regulation the cháo cá lóc's rau đắng offered: each eater controls the funk dose by adding more or less of the purple paste from the communal saucer.

The bowl empties in 5-7 minutes — a fast breakfast, a standing-at-the-cart breakfast, a 15,000-đồng breakfast that contains: starch (the rice), protein (the clams), fat (the tóp mỡ), fibre (the banana blossom), vitamins (the herbs), iron (the clams + the river), calcium (the clams + the sesame), and — above all — the Sông Lam's own mineral signature, concentrated by the clams, extracted by the broth, and delivered to the tongue through a bowl of cold rice and a storm of toppings that the Nghệ An morning assembled, as it does every morning, from the river's gifts and the kitchen's patience.`,
      tip: `Cơm hến is the collection's most MULTI-COMPONENT bowl — more toppings than any other single dish (peanuts, sesame, tóp mỡ, banana blossom, rau răm, spearmint, coriander, scallion, hành phi = 9 toppings, plus the clam and the broth), and the number is the Vinh aesthetic: abundance-as-generosity, more-as-better, the opposite of the bánh mướt's emptiness-as-discipline. The two Nghệ An dishes — bánh mướt (empty, neutral, minimal) and cơm hến (stormed, maximal, excessive) — sit at opposite ends of the province's aesthetic spectrum, and both are correct, and both are Nghệ An, and the province's character includes BOTH the empty and the full, the silent and the loud, the pencil and the storm.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
