'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-thang-vinh-phuc',
  title: `Bún Thang Vĩnh Phúc (Northern Noodle Soup with Shredded Toppings — Vĩnh Phúc Countryside Style)`,
  subtitle: `A clear, pale-gold, chicken-and-dried-shrimp broth — the most REFINED broth in the northern Vietnamese kitchen — served over bún with toppings shredded to hair-thin julienne: gà xé (shredded poached chicken), trứng tráng thái chỉ (egg crêpe cut to silk threads), giò lụa (pork roll sliced to matchsticks), and tôm khô (dried shrimp, pounded). Each topping occupies its own QUADRANT of the bowl, unmixed, a mosaic of white-yellow-pink-orange on the clear golden broth. The bowl that is eaten with the eyes first and the mouth second.`,
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '3 hr',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/bun-thang-vinh-phuc.jpg',
  intro: `Bún thang — the name's origin is debated: thang may derive from the Sino-Vietnamese 湯 (thang = soup/broth, the same character the Chinese tāng and the Korean tang use), or from the Vietnamese word for "ladder" (the toppings' parallel julienne strips arranged like a ladder's rungs across the bowl), or simply from the northern dialectal word for a soup assembled from MANY components. Whatever the etymology, the meaning is clear: bún thang is the northern kitchen's most COMPOSED noodle soup — the bowl where every component is prepared separately, shredded to a specific width, arranged in a specific position, and presented as a VISUAL COMPOSITION that the eater is expected to admire before eating.

The Vĩnh Phúc countryside version of bún thang differs from the Hà Nội version in two ways:

FIRST: the broth uses MORE DRIED SHRIMP (tôm khô) and LESS DRIED SQUID than the Hà Nội version — the Vĩnh Phúc cook's dried-shrimp source is the local freshwater shrimp (tôm đồng) sun-dried at home, smaller and sweeter than the coastal dried shrimp the Hà Nội cook buys at the market. The freshwater-dried-shrimp broth is: SWEETER (the freshwater shrimp's glycine concentration is higher per gram than the marine shrimp's — the smaller body means a higher surface-area-to-volume ratio during drying, and the drying concentrates the glycine more aggressively), LESS OCEANIC (no iodine-tinged, oceanic, TMA-adjacent background that marine dried shrimp carry), and MORE DELICATE (the broth's overall intensity is LOWER, and the Vĩnh Phúc palate prefers this gentleness — the countryside's aesthetic is restraint, not power).

SECOND: the Vĩnh Phúc version includes RÒ (Vietnamese coriander / cilantro root) — the cilantro plant's ROOT, washed, sliced and simmered in the broth for 20 minutes, contributing a DEEPER, MORE EARTHY, LESS CITRUSY cilantro flavour than the leaves provide (the root's volatile profile is richer in monoterpene alcohols — linalool, geraniol — and lower in the aliphatic aldehydes — decanal, dodecanal — that make the LEAF pungent and polarising). The root is the broth's SECRET DEPTH — removed before serving, invisible in the bowl, but leaving an aromatic fingerprint that the leaf alone cannot produce.

The bún thang's toppings are the bowl's ARCHITECTURE — each one prepared with a precision that borders on the obsessive:

GÀ XÉ (shredded chicken): a whole chicken poached in the broth (contributing its flavour to the liquid), then HAND-SHREDDED along the muscle fibre's grain into hair-thin, 5-6 cm threads. The shredding is done BY HAND (not chopped, not sliced — the fingers separate the fibres along their natural boundaries, producing threads that are smooth-surfaced, uniform and carrying the full length of the muscle fibre's tender, gelatin-lubricated texture).

TRỨNG TRÁNG THÁI CHỈ (egg crêpe silk-threads): eggs beaten, cooked as a paper-thin crêpe (the thinnest omelette in the collection — 0.5-1 mm, cooked in a lightly oiled pan, one side only, the top barely set), then rolled and CUT into julienne 2 mm wide. The threads are: golden-yellow, soft, egg-rich, and visually VIVID against the white bún and the white chicken.

GIÒ LỤA (pork roll matchsticks): the myosin-gel sausage the collection has documented 10+ times, here sliced into 2 mm matchsticks — pink-white, springy, dense, providing the BOUNCE the soft chicken and the fragile egg threads do not carry.

TÔM KHÔ (dried shrimp): pounded coarsely — orange, intensely sweet-savoury, crumbly, scattered over the bowl as the COLOUR ACCENT (the only non-white/non-yellow element in the bowl's palette, and its vivid orange draws the eye first).

The arrangement is NOT random: the four toppings are placed in the bowl in SEPARATE QUADRANTS — chicken (12 o'clock), egg (3 o'clock), giò lụa (6 o'clock), tôm khô (9 o'clock) — and the eater is expected to see the four-colour mosaic (white, yellow, pink, orange) on the clear-gold broth before mixing. The first stir of the chopsticks DESTROYS the mosaic — the toppings mix, the colours blur, and the bowl becomes an ordinary noodle soup. The pre-stir moment is the bún thang's ART, and the art is temporary, and the temporariness is the point.`,
  ingredientSections: [
    {
      title: 'The broth — chicken + dried shrimp + cilantro root',
      items: [
        { amount: 1, name: 'whole chicken (1.2-1.5 kg), cleaned' },
        { amount: 50, unit: 'g', name: 'dried shrimp (tôm khô), divided: 30 g for the broth, 20 g for the topping' },
        { amount: 3, unit: 'L', name: 'water' },
        { amount: 15, unit: 'g', name: 'cilantro root (rò), washed, lightly crushed', note: `The SECRET DEPTH — simmered 20 min, removed before serving. Deeper, earthier, less pungent than cilantro leaf. If unavailable: the broth loses one layer of complexity but remains functional.` },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
        { amount: 1, name: 'small piece of dried squid (15 g, optional — the Hà Nội addition the Vĩnh Phúc version uses sparingly)' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'salt' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
      ],
    },
    {
      title: 'The four toppings — the mosaic',
      items: [
        { amount: 1, name: 'the poached chicken (from the broth), hand-shredded to hair-thin threads' },
        { amount: 4, name: 'eggs, beaten with a pinch of salt', note: `For the crêpe-threads: cook as paper-thin omelette, roll, julienne 2 mm.` },
        { amount: 150, unit: 'g', name: 'giò lụa (Vietnamese pork roll), julienned 2 mm' },
        { amount: 20, unit: 'g', name: 'dried shrimp (from the broth allotment), pounded coarsely' },
      ],
    },
    {
      title: 'The bowl',
      items: [
        { amount: 500, unit: 'g', name: 'bún (round rice vermicelli), blanched' },
        { amount: 30, unit: 'g', name: 'rau mùi (cilantro), leaves only' },
        { amount: 30, unit: 'g', name: 'hành lá (scallion), sliced thin' },
        { amount: 2, unit: 'tbsp', name: 'hành phi (fried shallots)' },
        { amount: 1, unit: 'tsp', name: 'mắm tôm (shrimp paste — the optional NORTHERN CONDIMENT)', note: `Added at the table, by the eater, a pea-sized amount stirred into the broth. The mắm tôm transforms the clear, refined, gentle broth into something FUNKIER and DEEPER — and the choice to add or not is the bún thang's final personalisation: some eaters want the refinement intact, others want the funk. Both are correct.` },
        { amount: 1, name: 'drop of cà cuống essence (optional, as in the bánh cuốn)' },
        { amount: 4, name: 'limes, in wedges' },
        { amount: 2, name: 'red chilies, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Simmer the broth 1.5-2 hours — the gentlest, most refined chicken broth in the collection',
      description: `Place the whole chicken in 3 L cold water. Add ginger, dried shrimp (30 g), dried squid (if using) and cilantro root. Bring to a GENTLE boil — and immediately reduce to the GENTLEST simmer (the surface should show barely-perceptible bubbles, not a rolling boil — the bún thang's broth is the collection's most obsessively GENTLE extraction, because a rolling boil emulsifies the chicken's fat into the liquid, producing a cloudy, greasy, heavy broth that violates the bún thang's aesthetic of CLARITY and LIGHTNESS).

Skim — every 10 minutes for the first 30 minutes. The bún thang's skimming is STRICTER than the phở's (which tolerates some residual fat) and comparable to the hủ tiếu's (which pursues transparency as an identity). The broth must be: CLEAR (hold to the light — no cloudiness, no fat-sheen, just pale-gold transparency), LIGHT (the body should feel like water with FLAVOUR, not like a heavy, lip-coating, gelatin-rich stock — the bún thang's broth is deliberately THINNER than the phở's, because the toppings provide the substance and the broth provides only the medium), and FRAGRANT (the cilantro root's earthy-linalool + the ginger's gingerol + the dried shrimp's glycine-sweetness + the chicken's clean, mild, poultry aroma — four aromatic layers, none dominant, all balanced).

At minute 35-40: REMOVE THE CHICKEN (the whole bird — lift with two large forks). The chicken is done when: the thigh-joint moves freely (the collagen at the joint has dissolved to gelatin), the breast reaches 74°C, and the juices run clear. Set the chicken aside to cool — it will be shredded for the topping. CONTINUE simmering the broth (the bones and the skin, if they detach during lifting, stay in the broth for the remaining hour).

Remove the cilantro root at minute 50 — its job is done (the 20-minute simmer has extracted its monoterpene alcohols into the broth, and longer simmering would extract the root's more bitter, woody, cellulose-derived compounds that the broth does not want).

Simmer 1.5-2 hours total. Strain through a cloth-lined sieve (the cloth catches any residual fat droplets and bone fragments). Season: fish sauce, salt, a trace of sugar (the sugar is BARELY perceptible — its role is to round the salt's edge, not to sweeten the broth).

The finished broth is: PALE GOLD (not amber, not deep yellow — the palest broth in the collection, the colour of diluted honey), TRANSPARENT (the obsessive skimming's reward), LIGHT-BODIED (thinner than any other meat-based noodle-soup broth — by design, not by deficiency), and carrying the FOUR-LAYER AROMA: cilantro-root depth + ginger warmth + dried-shrimp sweetness + chicken mildness. The aroma is QUIET — it does not announce itself across the room the way the bún nước lèo's mắm bò hóc does or the bún đỏ's annatto does. The bún thang's aroma is detected at 30 cm, not at 3 metres, and the proximity is the refinement.`,
      tip: `The cilantro ROOT's aromatic profile differs from the cilantro LEAF's because the two organs accumulate different volatile compounds: the LEAF is rich in aliphatic aldehydes (decanal, dodecanal, 2-decenal — the "soapy" compounds that make cilantro polarising, with roughly 15% of the global population carrying the OR6A2 gene variant that perceives these aldehydes as "soapy" rather than "herbal"), while the ROOT is rich in monoterpene ALCOHOLS (linalool, geraniol, nerol — the same floral, sweet, non-soapy compounds that lavender and rose contain). The root is therefore LESS POLARISING than the leaf (the soapy aldehydes are largely absent), MORE COMPLEX (the monoterpene alcohols are more structurally diverse), and DEEPER (the root's volatile compounds have higher boiling points and dissolve more slowly into the broth, producing a SUSTAINED aromatic release over 20 minutes rather than the leaf's BURST release in 30 seconds). The root is the cilantro's BETTER HALF for broth-making, and the Vĩnh Phúc cook who uses it knows the plant better than the cook who uses only the leaf.`,
    },
    {
      title: 'Prepare the four toppings — shred, slice, julienne, pound — the mosaic\'s pieces',
      description: `GÀ XÉ (shredded chicken): when the poached chicken has cooled enough to handle (15-20 minutes — the cooling firms the muscle fibres, making them easier to shred cleanly), remove the skin (reserve for stock or discard). Pull the breast and thigh meat from the bones BY HAND — the fingers find the fibre-boundaries that a knife cannot see, and the fingers separate the fibres along those boundaries without cross-cutting them. Shred each piece into hair-thin threads, 5-6 cm long, pulling along the grain. The threads should be: WHITE (the breast), slightly darker (the thigh), uniform, and so fine that a single thread is barely visible — a pinch of 20-30 threads is the unit the chopstick lifts.

TRỨNG TRÁNG (egg crêpe): beat the eggs with a pinch of salt (no water, no milk — the crêpe must be PURE EGG, no dilution). Heat a non-stick pan over LOW heat — brush with the thinnest possible oil film. Pour a thin layer of beaten egg (roughly 40-50 ml for a 25 cm pan — the layer should be 0.5-1 mm, thinner than any Western omelette). Cook ONE SIDE ONLY — the bottom sets in 60-90 seconds, the top remains slightly glossy-wet (the residual moisture on the top surface keeps the crêpe pliable for rolling — a fully set crêpe cracks when rolled). Slide the crêpe onto a board. Cool 2 minutes. Roll the crêpe into a tight cylinder. CUT the cylinder into 2 mm julienne — the knife passes through the rolled crêpe, producing dozens of golden-yellow, silk-thin, egg threads that unravel from the cut cylinder like ribbons. Repeat with remaining egg (3-4 crêpes total from 4 eggs).

GIÒ LỤA: slice the pork roll into 2 mm planks, then cut each plank into 2 mm matchsticks. The matchsticks should be: pink-white, dense, springy (the myosin-gel's bounce is preserved in the matchstick format — each stick springs back when bent), and 5-6 cm long (matching the chicken threads' length — the LENGTH UNIFORMITY across all toppings is the bún thang's compositional discipline).

TÔM KHÔ: pound the dried shrimp (20 g) in a mortar — 10-15 strikes, coarsely (the shrimp should break into 2-3 mm fragments, not into powder — the fragments provide VISIBLE, TEXTURED orange specks, while powder would dissolve into the broth and become invisible).`,
      tip: `The bún thang's four toppings represent four PROTEIN SOURCES (chicken, egg, pork, shrimp) and four COLOURS (white, yellow, pink, orange) — the widest protein-and-colour diversity of any single bowl in the collection. The diversity is not accidental — the bún thang was historically a TẾT (Lunar New Year) dish, assembled from the Tết kitchen's LEFTOVERS: the poached chicken from the ancestral altar offering, the giò lụa from the Tết gift-exchange, the dried shrimp from the pantry, and the eggs from the henhouse. The bowl is a RECOMBINATION of the Tết kitchen's surplus into a NEW dish — the same creative-from-leftovers principle the cơm hến documented, here at a more refined scale. The refinement turned the leftover-bowl into an ART FORM, and the art form outlived the leftovers that created it.`,
    },
    {
      title: 'Assemble — the four quadrants, the clear pour, the mosaic before the stir',
      description: `Blanch the bún. Divide into 6 bowls.

ARRANGE THE MOSAIC: place each topping in its own QUADRANT of the bowl — the chicken threads at 12 o'clock (a neat pile of white, hair-thin fibres), the egg threads at 3 o'clock (a pile of golden-yellow silk), the giò lụa matchsticks at 6 o'clock (a pile of pink-white sticks), and the pounded dried shrimp at 9 o'clock (a scatter of orange fragments). The four quadrants should be VISUALLY DISTINCT — no mixing, no overlapping, each colour occupying its own territory on the bowl's surface. The arrangement takes 30 seconds per bowl, and the 30 seconds are the bún thang's CEREMONY — the moment the cook transforms a noodle soup into a visual composition.

LADLE THE BROTH — gently, along the bowl's SIDE (not poured directly onto the toppings, which would displace and mix them). The clear, pale-gold broth rises around the toppings, submerging the bún below, reaching the toppings' base but NOT flooding their surfaces. The toppings sit ABOVE the broth-line — four dry, coloured, distinct islands in a golden sea. The visual: WHITE (chicken) + YELLOW (egg) + PINK (giò lụa) + ORANGE (shrimp) on PALE GOLD (broth) over WHITE (bún) — the most COLOUR-PRECISE bowl in the collection.

Scatter hành phi and scallion. Place cilantro leaves on one side. Set lime, chili and mắm tôm on the table.

THE MOMENT BEFORE THE STIR: the bowl arrives at the table, and the eater LOOKS. The four quadrants, unmixed, the colours distinct, the broth clear beneath them — this is the bún thang's 10-SECOND ART INSTALLATION, the composition that exists only between the ladle's last pour and the chopstick's first stir. The eater who photographs the bowl preserves the installation. The eater who stirs immediately eats well but sees nothing.

THE STIR: the chopsticks enter the bowl and draw through the four quadrants — the white threads, the yellow threads, the pink sticks and the orange fragments COMBINE into a multi-coloured tangle, the broth's gold darkening slightly as the tôm khô's orange pigment dissolves, and the bowl is now: an ordinary noodle soup, its art destroyed, its flavour intact. The destruction IS the eating — the composition must be un-composed to be consumed, and the un-composing is the first act of the meal.

SIP THE BROTH: the lightest, most refined, most gentle noodle-soup broth in the collection — pale, transparent, thin-bodied, carrying the four-layer aroma (cilantro-root + ginger + dried-shrimp + chicken) at a VOLUME so low the nose must be inside the bowl to detect it. The sip is: sweet (the dried shrimp's glycine, the chicken's amino acids, the trace sugar — three sweetnesses, layered, as the hủ tiếu documented, here at a lower intensity), savoury (the fish sauce's glutamate, the chicken's inosinate — the synergy, reliable as gravity), and CLEAN (no funk, no fermentation, no spice-heat, no Maillard-dark — the bún thang's broth is the ANTI-FUNK, the broth that proves the Vietnamese kitchen can be as restrained as a Japanese dashi, as clear as a French consommé, and as quiet as a bowl of water with flavour).

The mắm tôm option: the eater who wants DEPTH stirs in a pea-sized amount of shrimp paste — the paste dissolves in 5 seconds, the broth clouds slightly (the paste's suspended protein particles scatter light), and the aroma shifts from "quiet and refined" to "quiet and DEEP" — the mắm tôm's fermented-krill funk enters the clear broth like a bass note entering a soprano's solo, and the bowl is suddenly a DUET. The eater who does not add mắm tôm eats the soprano alone. Both are correct, and the choice is personal, and the choice is the bún thang's last freedom.`,
      tip: `Bún thang's QUADRANT ARRANGEMENT is the collection's only noodle soup with a VISUAL COMPOSITION PROTOCOL — a prescribed arrangement that the cook follows and the eater is expected to appreciate before destroying. The protocol's origin is the Tết aesthetic: the Lunar New Year's food must be BEAUTIFUL (the altar offering, the bánh chưng's geometric perfection, the five-fruit tray's symbolic arrangement), and the bún thang — a Tết dish — inherits the New Year's visual discipline. The discipline migrated from the Tết table to the everyday breakfast table, and the everyday breakfast table preserved it even after the dish lost its Tết-exclusive status. The result: a breakfast soup with the visual ambition of a feast-day offering, served at 7 AM, eaten in 5 minutes, and photographed by every food blogger who visits Vĩnh Phúc.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
