'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'oc-huong-khanh-hoa',
  title: `Ốc Hương Khánh Hòa (Fragrant Sea Snails — Lemongrass-Steamed Whelks)`,
  subtitle: `Ốc hương — "fragrant snails," the Vietnamese coast's most prized gastropod — steamed alive on a bed of lemongrass and ginger until the spiralled shells turn pale-pink and the coiled flesh inside cooks to a firm, sweet, ocean-scented morsel that the eater extracts with a pin, dips in muối tiêu chanh, and eats in a single, concentrated, shell-flavoured bite. The most EXPENSIVE ingredient per gram in the Khánh Hòa collection, and the simplest preparation — because what costs this much needs no sauce.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '20 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/oc-huong-khanh-hoa.jpg',
  intro: `Ốc hương (Babylonia areolata, the areolated babylon snail) is a marine gastropod found in the sandy-bottom coastal waters of central and southern Vietnam, principally off the Khánh Hòa, Phú Yên and Bình Thuận coasts. The snail is: SMALL (3-5 cm shell length, 8-15 g total weight, of which roughly 40-50% is edible flesh after shell removal), SPIRAL-SHELLED (the classic gastropod logarithmic-spiral shell, cream-coloured with brown-spotted bands — the "fragrant" in the name refers not to a literal scent but to the snail's DESIRABILITY: ốc hương literally means "fragrant snail" in the sense of "prized, sought-after, the snail everyone wants"), and EXPENSIVE (market price roughly 400,000-800,000 VND per kg, 3-5x the price of regular sea snails — the ốc hương is the Vietnamese coast's LUXURY GASTROPOD, served at seafood restaurants as a premium-priced appetiser and at street-side ốc stalls as the top-shelf option).

The flesh is the ốc hương's value: a SINGLE, COILED, DENSE MUSCLE (the gastropod's foot, which the snail uses for locomotion across the sandy sea floor) that is: FIRM (the foot muscle is collagen-rich and dense — denser than shrimp, denser than squid, closer to the abalone's chewy-firm texture), SWEET (the glycine concentration is roughly 1.5-2% of the flesh's weight — HIGHER than shrimp's 0.5-1% and HIGHER than fish's 0.2-0.5%, making the ốc hương one of the SWEETEST-TASTING marine proteins per gram), and carrying a CONCENTRATED OCEAN FLAVOUR (the snail feeds on decomposing organic matter on the sea floor, and its hepatopancreas processes and concentrates the ocean's dissolved minerals, iodine and trace elements — the flesh tastes of the sea at a concentration the open-water fish's diluted flesh does not carry).

The preparation is the Vietnamese shellfish kitchen's most MINIMAL: steaming, shell-on, with lemongrass and ginger, no sauce, no seasoning on the flesh itself. The minimalism is ECONOMIC: at 400,000-800,000 VND per kg, the ingredient's own flavour must be the experience, and any sauce that MASKS the ốc hương's glycine-sweetness and ocean-concentration is an insult to the price-tag. The muối tiêu chanh — the collection's most recurring condiment, here in its 11th appearance — is the only dip, because the trio's three-ingredient simplicity (salt, pepper, lime) COMPLEMENTS without COMPETING: the salt amplifies the glycine, the pepper warms the tongue, the lime brightens the ocean-funk, and none of the three introduces a flavour strong enough to override the ốc hương's own.

THE EXTRACTION RITUAL: the steamed ốc hương is eaten by: holding the shell between thumb and forefinger, inserting a PIN (or a toothpick, or a dedicated ốc-pin — a thin, sharp, curved metal tool that every Vietnamese shellfish-eater owns) into the shell's aperture, HOOKING the flesh's end, and PULLING — the coiled flesh unwinds from the spiral shell in a single, unbroken, corkscrew-shaped piece that emerges from the shell like a spring unwinding. The extraction requires: TECHNIQUE (the pin must hook the FOOT's tip, not the hepatopancreas — pulling from the hepatopancreas tears the flesh and leaves the foot stuck inside), PATIENCE (the coiled flesh must be pulled SLOWLY — a fast yank tears the flesh at its attachment to the columella, the shell's central pillar), and PRACTICE (the first-timer fails 40-50% of extractions; the experienced eater fails <5%). The complete extraction — the intact, corkscrew-shaped flesh emerging from the shell's aperture in one unbroken coil — is the ốc hương experience's MOMENT OF SATISFACTION, the reward for the pin's patience.

The extracted flesh reveals TWO ZONES: the FOOT (the larger, muscular, firm-and-sweet lower portion — this is the premium, the part the eater came for) and the HEPATOPANCREAS (the smaller, darker, softer, intensely-flavoured upper portion — the "guts," which some eaters eat and some discard). The hepatopancreas is: INTENSELY SAVOURY (glutamate at 300-500 mg/100g — 3-5x the foot's 80-120 mg/100g), SLIGHTLY BITTER (the bile-derived compounds from the snail's digestive process), and RICH (the concentrated lipids from the snail's dietary processing). Eating the hepatopancreas is: a CONNOISSEUR'S CHOICE — the bitterness and the richness are an acquired taste, and the acquired taste is the mark of the experienced ốc-eater.`,
  ingredientSections: [
    {
      title: 'The snails',
      items: [
        {
          amount: 1,
          unit: 'kg',
          name: 'ốc hương (Babylonia areolata), alive, cleaned',
          note: `ALIVE — the shells should be tightly closed or closing when tapped (an open shell that does not close when tapped = dead snail = discard). Rinse in several changes of cold water. Soak in clean salted water (3% salinity — approximating seawater) for 1 hour before cooking — the soak allows the snails to purge any sand or grit from their digestive tracts.`,
        },
      ],
    },
    {
      title: 'The steaming bed',
      items: [
        { amount: 4, name: 'stalks lemongrass, bruised and halved' },
        { amount: 20, unit: 'g', name: 'ginger, sliced' },
        { amount: 2, name: 'pandan leaves, knotted (optional — adds a faint sweet-floral background)' },
        { amount: 500, unit: 'ml', name: 'water + 1 can of beer (optional — the beer\'s maltose and alcohol vapour add a faint, malty, slightly sweet aromatic to the steam)', note: `The BEER-STEAM is a Nha Trang street-stall technique: the beer's ethanol (boiling point 78.4°C) vaporises BEFORE the water reaches 100°C, and the ethanol-steam carries the beer's malt-derived volatile esters (ethyl acetate, isoamyl acetate — the same fruity esters the rượu làng Vân's fermentation produced) to the snails' shells before the water-steam arrives. The beer-ester-then-water-steam sequence produces a snail that carries a faint, fruity, malty background aroma that plain-water-steaming does not achieve.` },
      ],
    },
    {
      title: 'Muối tiêu chanh — the 11th appearance',
      items: [
        { amount: 2, unit: 'tbsp', name: 'coarse salt' },
        { amount: 1, unit: 'tsp', name: 'black pepper, freshly cracked' },
        { amount: 4, name: 'limes, in wedges' },
      ],
    },
    {
      title: 'The extraction tool',
      items: [
        { amount: 4, name: 'pins, toothpicks or dedicated ốc-extraction pins (kim lấy ốc)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the aromatic steam, steam 8-10 minutes — the shells turn, the flesh sets',
      description: `AROMATIC BED: arrange the bruised lemongrass, ginger slices and knotted pandan in the steamer's water-pot (below the basket, IN the water/beer — the aromatics simmer in the liquid, and their volatiles vaporise with the steam). Pour 500 ml water + 1 can of beer (if using) over the aromatics. Bring to a vigorous boil.

LOAD: arrange the purged, cleaned ốc hương in the steamer basket — SINGLE LAYER, aperture-side-UP (the aperture facing upward allows the steam to enter the shell's interior directly, cooking the flesh from the inside as well as from the outside — aperture-down traps the snail's own body-fluid inside the shell, which dilutes the flesh's concentrated flavour).

STEAM 8-10 minutes (lid on, vigorous steam):

MINUTE 0-3: the snails are still alive when the steam contacts them — the heat kills them within 30-60 seconds (the gastropod's nervous system ceases function at roughly 45-50°C, well below the steam's 100°C). The death is RAPID (faster than cold-water-starting, which produces a slow, stressful death as the water gradually heats — the steam's immediate 100°C contact is considered the more humane method by the Vietnamese shellfish trade). The flesh begins to retract from the shell's aperture (the muscle contracts in response to the heat, pulling the foot deeper into the spiral — this is normal and does not affect extraction).

MINUTE 3-6: the flesh COOKS — the foot-muscle's myosin denatures at 55-60°C (the same myosin gelation every protein in the collection has documented), the collagen begins to convert to gelatin at 65-70°C (softening the foot's firm, raw-chewy texture to a cooked-firm-but-tender texture), and the hepatopancreas sets (the organ's proteins coagulate, changing from soft-liquid to firm-paste). The shell's colour shifts: the natural cream-and-brown spotted pattern FADES slightly, and the shell acquires a faint PINK TINT (the heat-induced chemical change in the shell's conchiolin protein, the same protein that holds the shell's calcium-carbonate crystals together).

MINUTE 6-8: the lemongrass's citral, carried by the beer-and-water steam, has deposited on the shell's exterior surface and penetrated through the aperture to the flesh inside — the same steam-infusion-through-opening the tôm Đầm Vạc documented through the shrimp's shell micro-pores, here through the snail's large aperture (a much wider access point, allowing MORE citral to reach the flesh).

MINUTE 8-10: DONE — the flesh is: firm-but-tender (the collagen has converted sufficiently — over-steaming past 12 minutes makes the foot TOUGH, because the remaining collagen over-contracts and squeezes moisture from the muscle), carrying the lemongrass-and-beer-malt aroma, and ready for extraction.

Remove the basket. The steamed ốc hương: cream-and-pink shells, the apertures slightly OPEN (the flesh has retracted 2-3 mm from the opening, revealing the foot's pale-cream tip just inside the spiral — the tip is the extraction point, the place the pin will hook).`,
      tip: `The BEER-STEAM technique exploits the ethanol's LOWER BOILING POINT (78.4°C vs water's 100°C): the beer's ethanol vaporises FIRST, and the ethanol-steam reaches the snails BEFORE the water-steam does. The ethanol is a better SOLVENT for the lemongrass's citral than water is (citral is more soluble in ethanol than in water — log P of citral is roughly 3.5, meaning it partitions 3,000:1 in favour of lipophilic solvents over water). The ethanol-steam therefore carries MORE citral per unit volume than the water-steam does, producing a MORE INTENSE lemongrass infusion on the snails' surfaces. The beer's own malt-derived esters (ethyl acetate, isoamyl acetate) add a bonus aromatic layer: the fruity, slightly banana-like, malty note that distinguishes the beer-steamed ốc hương from the water-steamed version. The beer is the AROMATIC AMPLIFIER — it does not change the flavour of the flesh (the ethanol evaporates before the flesh absorbs it) but it changes the AROMA of the shell and the surface, and the aroma is what the nose detects in the 2-second window between extraction and eating.`,
    },
    {
      title: 'Extract with the pin, dip in muối tiêu chanh — the ritual, the 11th appearance, the luxury bite',
      description: `SERVE the steamed ốc hương on a plate — the shells still warm, the steam still rising from the apertures, the lemongrass-beer-malt aroma detectable at arm's length.

Set the muối tiêu chanh saucer alongside. Distribute the extraction pins.

THE EXTRACTION (one snail at a time — the ritual is INDIVIDUAL, each snail its own extraction, each extraction its own satisfaction):

HOLD: pick up one snail, the aperture facing you. The shell fits between thumb and forefinger — the spiral's smooth, warm, calcium-carbonate surface against the fingertips.

INSERT: slide the pin into the aperture — the pin enters the spiral's interior, following the coil's curve. The pin's tip contacts the FOOT (the firm, muscular, pale-cream tissue at the spiral's deepest accessible point — 1-2 cm inside the aperture).

HOOK: angle the pin slightly to HOOK the foot's tip — the pin's sharp end catches the muscle's edge. The hook is the critical moment: hook the foot and the extraction produces an intact, beautiful, corkscrew coil; miss the foot and hook the hepatopancreas and the pull produces a torn, fragmented, unsatisfying mess.

PULL: with a SLOW, STEADY, ROTATING pull (rotate the pin as you pull — the rotation follows the shell's spiral, and the rotating pull unwinds the coiled flesh from the columella the way a corkscrew unwinds from a wine cork), extract the flesh from the shell. The flesh emerges: a CORKSCREW-SHAPED, 3-4 cm long, pale-cream-and-dark-brown coil — the foot (the larger, paler, lower portion) trailing the hepatopancreas (the smaller, darker, upper portion). The intact extraction is: BEAUTIFUL (the corkscrew shape is the gastropod's anatomy made visible — the coiled muscle that lived inside the coiled shell, and the coil IS the mollusc, and the mollusc IS the shell's inhabitant, and the extraction displays the inhabitant for the first time).

ASSESS: the foot is: firm, pale, sweet-smelling (the glycine's faint, amino-acid sweetness detectable at the flesh's surface). The hepatopancreas is: dark (grey-green to brown), soft, intensely oceanic-smelling. The eater's choice: eat BOTH (the connoisseur's full-flavour experience — the foot's sweetness followed by the hepatopancreas's bitter-rich-savoury intensity), or DISCARD the hepatopancreas and eat only the foot (the conservative's cleaner, sweeter, less-challenging experience).

DIP: squeeze lime over the extracted flesh. Press into the muối tiêu chanh — the salt crystals and pepper fragments adhere to the moist surface. The 11th appearance of the trio: salt (ENaC), pepper (TRPV1), lime (PKD2L1) — the MINIMAL COMPLETE CONDIMENT, here serving the collection's most EXPENSIVE protein, and the trio's simplicity is the luxury's proof: a protein this good needs only three ingredients on the side, and the three are the same three that accompanied the cheapest protein (the gà luộc, the boiled everyday chicken) and every protein in between. The trio is DEMOCRATIC — it serves the luxury and the everyday with the same three ingredients, and the democracy is the condiment's universality.

BITE: the foot SNAPS — a firm, dense, chewy-but-yielding muscle that requires 3-4 chews before the collagen-rich fibres separate and the glycine-sweet juice releases. The sweetness is: INTENSE per gram (the 1.5-2% glycine is the highest concentration in any marine protein the collection has documented — higher than shrimp, higher than crab, higher than lobster), CLEAN (no fishiness, no funk, no muddy off-note — the ốc hương's sandy-bottom habitat produces a clean-tasting gastropod, the same habitat-determines-taste principle the cá lăng Sêrêpốk and the Đầm Vạc shrimp documented), and LINGERING (the glycine's sweetness remains on the tongue for 8-10 seconds after the swallow — longer than any other marine protein's sweetness-duration in the collection, because the dense, chewy foot releases its glycine SLOWLY as the chewing progresses, rather than in a single burst).

The hepatopancreas (if eaten): arrives 2 seconds after the foot — BITTER (the bile compounds, 2-3/10 on the bitterness scale), RICH (the concentrated lipids coating the tongue in a dense, oceanic-mineral film), and SAVOURY (the 300-500 mg/100g glutamate hitting the tongue in a concentrated burst that is 3-5x more intense per gram than the foot's milder contribution). The hepatopancreas is the ốc hương's ORGAN BONUS — the bonus the luxury affords and the conservative declines.

Ốc hương Khánh Hòa is the collection's most LUXURY-PER-GRAM recipe — the recipe with the highest ingredient-cost per serving, the most minimal preparation (steaming, no sauce, no marinade), the most skill-dependent eating method (the pin extraction, the rotation, the hook-vs-miss), and the most concentrated flavour-per-bite (the glycine-dense, collagen-firm, ocean-mineral, single-muscle foot delivering maximum sweetness in minimum volume). The luxury is: the snail's own flavour, unchanged by the cook, enhanced only by the lemongrass's steam and the lime's acid, and served in its own shell — the container the ocean built, the plate the chef did not need to provide.`,
      tip: `Muối tiêu chanh's ELEVENTH appearance (gà Hồ, ghẹ, tôm chiên, gà đồi, lợn cắp nách, gà luộc, bò lúc lắc, bò nướng ngói, khô cá tra phồng, tôm Đầm Vạc, and now ốc hương) cements its status: eleven proteins spanning poultry (3x), beef (2x), pork (1x), crustacean (2x), dried fish (1x), and now GASTROPOD (2x: steamed shrimp + steamed snail). The trio has now accompanied proteins priced from 30,000 VND/kg (boiled chicken) to 800,000 VND/kg (ốc hương) — a 27x price range — and the condiment is unchanged at every price point. The universality is the trio's most remarkable property: it is EQUALLY CORRECT beside the cheapest and the most expensive protein the Vietnamese kitchen serves. No other condiment in the collection — not the nước mắm, not the mắm nêm, not the hoisin — spans this range without modification. The trio is the Vietnamese kitchen's UNIVERSAL CONSTANT.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
