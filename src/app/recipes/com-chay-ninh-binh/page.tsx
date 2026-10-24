'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'com-chay-ninh-binh',
  title: `Cơm Cháy Ninh Bình (Scorched Rice Crisps — Ninh Bình's Golden Crackers)`,
  subtitle: `Cooked rice — pressed flat into thin discs, sun-dried until rigid, then deep-fried in hot oil until the discs PUFF and SHATTER into golden, airy, shattering-crisp rice crackers that are served beneath a ladle of thịt dê xào (stir-fried goat meat) or topped with a savoury meat-and-vegetable stir-fry whose sauce soaks into the cracker's porous surface in the 30 seconds between ladling and eating. The dish that turns the Vietnamese kitchen's most HUMBLE leftover (the burnt rice stuck to the pot's bottom) into Ninh Bình's most CELEBRATED specialty.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr cooking + 4-6 hr sun-drying (or oven-drying)',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/com-chay-ninh-binh.jpg',
  intro: `Cơm cháy — literally "burnt rice" (cháy = scorched, burnt, charred) — originates from the ACCIDENT every Vietnamese household knows: the thin layer of rice that sticks to the bottom of the clay pot or the metal rice-cooker after cooking, overcooked to a golden-brown crust by the residual heat. In every other Vietnamese kitchen, this crust (cơm cháy, the scorched bottom-layer) is: scraped off and eaten as a SNACK by the cook (the golden, crispy, slightly caramelised rice-crust is one of Vietnamese cuisine's most-loved incidental pleasures — a guilty pleasure, never served to guests, always eaten standing in the kitchen), or discarded.

Ninh Bình's innovation — attributed to the restaurant culture around the Tam Cốc / Tràng An limestone-karst tourist district — was to take this incidental kitchen-bottom and turn it into a DELIBERATE, REPRODUCIBLE, SCALABLE product: pressed, dried, fried, and served as the BASE of a composed dish. The transformation from accident to intention is the cơm cháy Ninh Bình's story: what was once the pot's WASTE became the plate's STAR.

THE PROCESS converts cooked rice through FOUR STATES:

STATE 1 — COOKED RICE (the starting material): ordinary steamed jasmine or glutinous rice, fresh from the pot, at 60-65% moisture, soft, cohesive, the amylopectin's gelatinised starch-chains fully hydrated and flexible. This is the rice everyone eats — the baseline.

STATE 2 — PRESSED AND DRIED (the intermediate): the cooked rice is pressed into flat discs (10-12 cm diameter, 5-8 mm thick — pressed by hand, by a flat-bottomed glass, or by a tortilla press), and the discs are SUN-DRIED for 4-6 hours (or oven-dried at 80-100°C for 2-3 hours) until the moisture drops from 60-65% to roughly 10-15%. At 10-15% moisture: the rice-disc is: RIGID (the dehydrated starch has retrogradated — the amylose chains have re-crystallised into a dense, ordered, hydrogen-bonded network that is stiff and brittle), TRANSLUCENT at the edges (the thin edges, where the dehydration was most complete, have entered the GLASSY STATE — the starch's glass-transition temperature, at 10-15% moisture, is below room temperature, and the starch is a glass: rigid, brittle, transparent), and SHELF-STABLE (at 10-15% moisture, the water activity is ~0.5-0.6, below the threshold for microbial growth — the dried discs keep for weeks at room temperature, making them a MAKE-AHEAD component the restaurant pre-produces in bulk).

STATE 3 — FRIED (the transformation): the dried disc enters HOT OIL (180-190°C), and in 15-30 seconds the disc PUFFS — the residual 10-15% moisture, trapped inside the retrogradated starch's dense crystalline matrix, flash-vaporises to steam, and the steam EXPANDS within the starch matrix, inflating the disc from 5-8 mm thick to 15-20 mm thick (a 2-3x puff). The puffing is the SAME PHYSICS the xôi phồng documented (trapped moisture → steam → inflation within a starch-glass matrix), here from DRIED COOKED RICE rather than from dried glutinous rice.

The puffed disc is: GOLDEN (the Maillard reaction at the oil's 180-190°C — the rice's residual amino acids react with the reducing sugars to produce melanoidins and volatile Maillard compounds), AIRY (the steam-puffing has created a porous, honeycomb-like interior structure — 60-70% of the disc's puffed volume is AIR, trapped in the starch-glass's rigid bubbles), and SHATTERING (the dehydrated, oil-crisped, starch-glass exterior shatters at 3-5 Newtons — the same starch-glass crunch the bánh xèo and the bánh cống documented, here in a THICKER, MORE STRUCTURAL form that can support the WEIGHT of a stir-fry ladled on top without collapsing for 30-60 seconds).

STATE 4 — SAUCED (the eating moment): the hot stir-fry (thịt dê xào, or a pork-and-vegetable stir-fry, or a seafood stir-fry) is ladled ON TOP of the fried rice-crisp. The sauce from the stir-fry contacts the crisp's porous surface and begins to SOAK IN — the starch-glass absorbs the sauce by capillary action (the porous interior's air-pockets fill with sauce as the air escapes), and the crisp transitions from: DRY-AND-SHATTERING (at second 0) to SAUCE-SOAKED-AND-SOFTENING (at second 60-90). The eating is a RACE: the eater breaks pieces of the crisp (the shattering crunch), scoops them with the stir-fry (the sauce-soaked, flavour-infused pieces), and eats before the sauce has fully softened the crisp (the window is 2-3 minutes — after that, the crisp is a soft, sauce-saturated, non-crunchy mass, still delicious but texturally transformed).

The RACE is the cơm cháy's specific eating-dynamic — the same timed-crunch-window the xôi phồng (5 minutes), the bánh xèo (3-4 minutes), and the bò tái chanh (5-8 minutes) documented, here driven by SAUCE-ABSORPTION rather than by moisture-absorption or acid-penetration. The sauce is the crunch's ENEMY, and the eating is the eater's attempt to experience the crunch BEFORE the sauce kills it.

THE PAIRING: cơm cháy Ninh Bình is traditionally paired with THỊT DÊ (goat meat) — specifically the dê núi đá (stone-mountain goat) raised on the limestone karst that makes Ninh Bình's landscape famous (the same UNESCO-listed karst-tower landscape of Tràng An and Tam Cốc). The goat-and-crispy-rice pairing is: Ninh Bình's IDENTITY DISH (the way phở is Hà Nội's and bún bò is Huế's — cơm cháy + dê is Ninh Bình's one-phrase food-identity), and the pairing works because: the crispy rice's neutral, starchy, crunchy BASE absorbs the goat stir-fry's BOLD, SAVOURY, SLIGHTLY GAMEY sauce, and the starchy neutrality tames the gamey the same way the mèn mén tamed the thắng cố's organ-intensity — the starch is the MANAGER of the protein's assertiveness.`,
  ingredientSections: [
    {
      title: 'The rice crisps',
      items: [
        { amount: 400, unit: 'g', name: 'cooked rice (jasmine or glutinous — glutinous produces a CHEWIER, more COHESIVE crisp; jasmine produces a LIGHTER, more SHATTER-PRONE crisp)', note: `Freshly cooked, still warm — the warm rice is more pliable and presses into discs without cracking. Day-old rice works but requires 30 seconds of microwave-reheating to re-soften before pressing.` },
        { amount: 0.5, unit: 'tsp', name: 'salt (mixed into the rice before pressing — the salt seasons the crisp from within)' },
        { amount: 500, unit: 'ml', name: 'neutral oil for deep-frying' },
      ],
    },
    {
      title: 'Thịt dê xào (stir-fried goat — the Ninh Bình topping)',
      items: [
        { amount: 300, unit: 'g', name: 'goat meat (leg or shoulder), sliced thin 3 mm', note: `Mountain goat if available; standard goat or lamb works. Sliced THIN — the stir-fry must cook in 2-3 minutes at very high heat, and thick slices undercook or toughen.` },
        { amount: 2, name: 'stalks lemongrass, minced fine' },
        { amount: 3, name: 'cloves garlic, minced' },
        { amount: 1, name: 'onion, sliced wedges' },
        { amount: 1, name: 'bell pepper (red or green), sliced' },
        { amount: 100, unit: 'g', name: 'mushrooms (king oyster or straw), sliced' },
        { amount: 2, unit: 'tbsp', name: 'oyster sauce' },
        { amount: 1, unit: 'tbsp', name: 'soy sauce' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'cornstarch dissolved in 2 tbsp water (the sauce THICKENER — the thickened sauce clings to the stir-fry\'s pieces AND drips slowly onto the rice-crisp, controlling the sauce-absorption rate)' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil (for the wok)' },
        { amount: 2, name: 'scallions, cut 3 cm lengths' },
        { amount: 1, unit: 'tsp', name: 'sesame oil (finish)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Press, dry, fry — the rice becomes glass, then puffs into gold',
      description: `PRESS: mix the warm cooked rice with salt. Divide into 6-8 portions (roughly 50-60 g each). Press each portion into a flat disc — 10-12 cm diameter, 5-8 mm thick, as UNIFORM as possible (thick spots under-puff; thin spots burn). Use: your palm on a sheet of oiled plastic wrap (press flat, peel the wrap off), or a flat-bottomed glass (press the glass onto the rice-ball on a oiled tray), or a tortilla press lined with plastic (the most uniform method). The disc should be: COMPACT (no air pockets — air pockets cause uneven puffing during frying), EVEN (uniform thickness → uniform puffing → uniform crunch), and FLAT (the disc lies flat in the oil during frying — a curved disc fries unevenly).

DRY: place the pressed discs on a wire rack or a bamboo tray. SUN-DRY 4-6 hours (flip once at the halfway point — both surfaces must dehydrate evenly), or OVEN-DRY at 80-100°C for 2-3 hours (the oven is faster but produces a slightly LESS FLAVOURFUL crisp — the sun-drying's UV exposure catalyses a mild PHOTO-MAILLARD at the disc's surface, producing a faint, toasted, golden-straw aroma the oven-dried version lacks).

The dried disc at 10-15% moisture: RIGID (snaps cleanly when bent — the snap is the dryness-test; a disc that bends without snapping = too moist, needs more drying time), TRANSLUCENT at the edges (the starch-glass, the same vitrified-starch the collection has documented 20+ times), and LIGHTWEIGHT (the dehydration removed 75-85% of the disc's original water, and the dried disc weighs roughly 20-25 g vs the pressed disc's 50-60 g).

FRY: heat 500 ml oil to 180-190°C in a deep pan or wok (the oil depth should be 3-4 cm — enough to submerge the disc completely). Slide one dried disc into the hot oil. THE PUFF: within 5-10 seconds, the disc begins to BUBBLE — the surface erupts in small, rapid bubbles as the residual moisture flash-vaporises (the same violent-evaporation the keropok, the prawn cracker and the chicharrón all exploit — trapped moisture + hot oil = steam-puff). The disc SWELLS — rising from 5-8 mm to 15-20 mm in thickness, the interior filling with steam-inflated starch-glass bubbles, the disc becoming AIRY, POROUS, and GOLDEN (the Maillard browning at the oil's 180-190°C, the rice's amino acids + reducing sugars → melanoidins in 15-20 seconds).

FRY 20-30 seconds TOTAL — flip once (the top side, which initially faced the air, submerges when flipped and puffs in its final 10 seconds). Lift out. Drain on a rack. The fried crisp: GOLDEN (uniform Maillard-brown, slightly darker at the edges where the starch was thinnest and the dehydration was most complete), PUFFED (2-3x the dried disc's thickness, the interior a honeycomb of air-cells trapped in starch-glass walls), RIGID (the starch-glass walls are rigid enough to support the disc's own weight without flexing — the crisp can be held horizontally by its edge without bending, unlike a potato chip which flexes under its own weight), and SHATTERING (tap it — it produces a hollow, crisp, ceramic-like sound; bite it — it shatters at 3-5 N, the starch-glass walls fracturing into sharp, crispy fragments that spray crumbs like a cracker).

HOLD: the fried crisps can wait 30-60 minutes at room temperature without losing their crunch (the starch-glass is stable in dry air — the same stability the xôi phồng documented, here more robust because the fried crisp's oil-coating SEALS the starch-glass surface against ambient moisture-absorption, extending the crunch-window from the xôi phồng's 5 minutes to the cơm cháy's 30-60 minutes).`,
      tip: `The PUFFING MECHANISM is identical to the xôi phồng's: both are STEAM-INFLATION of a starch-glass matrix. But the cơm cháy's puff is MORE UNIFORM than the xôi phồng's because the cơm cháy's starting material (pressed cooked rice) is MORE HOMOGENEOUS than the xôi phồng's (whole glutinous-rice grains): the pressed rice-disc's grains have been COMPRESSED into a continuous starch-sheet (the grain boundaries are partially fused by the pressing), and the continuous sheet puffs uniformly, while the xôi phồng's individual-grain-structure puffs grain-by-grain (each grain inflates independently, producing a more irregular, more textured surface). The pressing is the HOMOGENISATION step that makes the puffing uniform — the same principle that makes a pressed-and-dried corn-tortilla puff more uniformly than un-pressed corn kernels.`,
    },
    {
      title: 'Stir-fry the goat, ladle onto the crisp — the 2-3 minute crunch race begins',
      description: `MARINATE the goat: toss the thin-sliced goat with lemongrass, half the garlic, 1 tbsp of oyster sauce, and pepper. Rest 15 minutes.

WOK: heat the wok to SMOKING (the wok's surface must exceed 230°C for the Maillard-sear that stir-frying demands — the same wok-hei the collection's stir-fry recipes all require). Add oil. When the oil shimmers:

SEAR the goat — 60 seconds, HIGH HEAT, DO NOT STIR for the first 30 seconds (the Maillard crust needs uninterrupted contact with the wok's hot surface — stirring breaks the contact and prevents the sear). The goat-slices should develop a dark-brown, caramelised crust on the contact-surface in 30 seconds. FLIP — 30 more seconds on the other side. Remove the goat (still slightly pink inside — the residual heat will finish it during the resting-and-saucing phase).

AROMATICS: add the remaining garlic, the onion wedges, the bell pepper, the mushrooms — stir-fry 90 seconds (the vegetables should be: crisp-tender, NOT soft — the crunch of the vegetables contributes to the dish's texture alongside the rice-crisp's crunch).

SAUCE: return the goat to the wok. Add oyster sauce, soy sauce, fish sauce, sugar. Toss 30 seconds. Add the cornstarch-slurry — toss until the sauce THICKENS (the cornstarch gelatinises in the wok's residual liquid, producing a GLOSSY, CLINGING sauce that coats every piece of goat and every vegetable in a dark, savoury, slightly viscous glaze). The sauce's viscosity is CRITICAL: too thin = the sauce floods the rice-crisp and destroys the crunch in 15 seconds; too thick = the sauce sits on top of the crisp without penetrating, and the bite is: dry-crisp-on-bottom, wet-stir-fry-on-top, with no INTEGRATION between the two layers. The TARGET VISCOSITY: the sauce drips slowly from a tilted spoon (not pouring, not staying — dripping), and the drip-rate determines the sauce-crisp integration-speed: the sauce penetrates the crisp's porous surface at 1-2 mm per 15 seconds, and the 2-3 minute eating-window begins when the first drip contacts the crisp.

Add scallion lengths. Finish with sesame oil.

THE MOMENT: place 1-2 fried rice-crisps on each plate (the golden, puffed, shattering discs, taking up the plate's full width). LADLE the hot goat stir-fry ON TOP of the crisps — the sizzle is: LOUD (the hot sauce contacts the hot-from-frying crisp's surface, and the residual oil in the crisp's pores sizzles on contact with the sauce's aqueous phase — the sizzle is the dish's ANNOUNCEMENT, the sound that says "eat NOW, the clock is running").

THE RACE — 2-3 minutes:

SECOND 0-30: the crisp is FULLY INTACT beneath the stir-fry. The sauce pools on the crisp's surface, held by the starch-glass's hydrophobic oil-coating. The eater BREAKS a piece of crisp from the disc's edge (the edge, still dry and un-sauced, shatters cleanly — the PUREST CRUNCH, at its maximum intensity, before any sauce has arrived). The bite: dry, golden, airy, rice-flavoured, shattering — the cơm cháy at its most elemental: cooked rice, dried, fried, crunched, nothing else.

SECOND 30-90: the sauce breaches the oil-barrier and begins SOAKING INTO the crisp's interior. The crisp's top surface softens (the sauce's water rehydrates the starch-glass, converting it from glass→rubber — the same glass-transition-in-reverse the xôi phồng's moisture-absorption documented). The BOTTOM of the crisp is still dry and crunchy (the sauce hasn't reached it yet). The bite: TOP-SOFT (sauce-infused, goat-flavoured, savoury-sweet) + BOTTOM-CRUNCHY (dry, golden, shattering) = the DUAL-TEXTURE moment, the 30-second window where the crisp has a sauced-top and a dry-bottom and the two coexist in one piece.

SECOND 90-180: the sauce reaches the bottom. The entire crisp is now sauce-infused — the crunch is GONE (the starch-glass is fully rehydrated, returned to its gel-state, soft, chewy, saturated with the goat-stir-fry's sauce). The dish is: a soft, sauce-soaked, goat-flavoured rice-cake that is DELICIOUS (the sauce has penetrated every pore, every air-cell, every starch-wall, producing a rice-cake that is: MORE FLAVOURFUL than regular rice, because the porous structure absorbed 3-4x more sauce per gram than a solid rice-serving would) but NO LONGER CRUNCHY.

The 2-3 minute window is the cơm cháy's CRUNCH-LIFE — shorter than the bánh xèo's (3-4 minutes in a lettuce wrap) but longer than the bò tái chanh's (60-90 seconds of acid-cure). The window divides the eating into: ACT 1 (pure crunch, edges, dry), ACT 2 (dual-texture, top-soft bottom-crunchy, the climax), and ACT 3 (full saturation, soft, sauce-rich, the denouement). The three acts are the cơm cháy's eating-drama, and the eater who eats only Act 3 (waiting too long) has missed the performance.

Cơm cháy Ninh Bình is the collection's most TRANSFORMATIVE recipe — the recipe that takes the Vietnamese kitchen's most overlooked byproduct (the pot's scorched bottom-layer) and elevates it through four state-transitions (cooked → pressed/dried → fried/puffed → sauced) into a dish that is: Ninh Bình's SIGNATURE, the tourist's MUST-ORDER, and the food-science student's TEXTBOOK CASE of starch-glass physics applied to a $3 street-food plate. The transformation from waste to star is the recipe's moral: nothing is too humble to be the best thing on the table.`,
      tip: `The cơm cháy's SAUCE-ABSORPTION is a form of CAPILLARY ACTION — the same physics that makes a sponge absorb water and a paper towel wick up spills. The fried rice-crisp's interior is: a network of AIR-FILLED PORES (the steam-inflated starch-glass bubbles, now emptied of steam and filled with air — each pore is roughly 0.5-2 mm diameter, connected to neighbouring pores by thin channels). When the sauce contacts the crisp's surface, the sauce enters the pores by CAPILLARY FORCE (the sauce's surface-tension pulls the liquid into the narrow channels, and the air in the pores escapes through the channels the sauce hasn't yet reached — the air escapes as tiny bubbles visible on the crisp's surface in the first 30 seconds after saucing). The capillary-absorption rate depends on: the sauce's VISCOSITY (thinner sauce = faster absorption = shorter crunch-life; thicker sauce = slower absorption = longer crunch-life — this is WHY the cornstarch-thickened sauce is critical: the thickening SLOWS the capillary absorption from 15 seconds to 60-90 seconds, EXTENDING the crunch-window from 1 minute to 2-3 minutes). The cornstarch is the crunch's BODYGUARD — it buys time.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
