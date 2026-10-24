'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'xoi-phong-soc-trang',
  title: `Xôi Phồng Sóc Trăng (Puffed Fried Sticky Rice — Khmer Festival Disc)`,
  subtitle: `Cooked sticky rice — pressed into flat discs, dried overnight, then deep-fried in hot oil until each disc INFLATES like a balloon, puffing from a flat, dense, 5 mm wafer to a golden, hollow, 3 cm-thick, impossibly light orb that shatters at a touch. The Khmer festival food that turns glutinous rice into a crisp that is half bread, half chip, and entirely spectacle.`,
  category: 'DESSERT',
  difficulty: 'Medium',
  totalTime: '1 hr + overnight drying',
  rating: 4.8,
  baseServings: 8,
  heroImage: '/images/recipes/xoi-phong-soc-trang.jpg',
  intro: `Xôi phồng — literally "puffed sticky rice" (phồng = puffed, swollen, inflated) — is the Khmer community's festival food: prepared for the Khmer New Year (Chol Chnam Thmey, mid-April), for the Ok Om Bok moon festival (November), for weddings, for temple offerings, and for every communal celebration the Khmer calendar marks. Its preparation is a two-day process (cook the rice on day 1, fry on day 2), and its consumption is a 30-second event (the puffed disc is eaten in 4-5 bites before it deflates and softens), and the gap between the effort and the eating is the festival food's logic: the effort IS the celebration, and the spectacle IS the offering.

The physics of the puffing is the same physics that makes a poori (the Indian fried bread) inflate, a prawn cracker (krupuk) expand, and a chicharrón (pork rind) puff: STEAM EXPANSION inside a sealed starch matrix. The sequence:

STEP 1 — COOK: the glutinous rice is steamed with coconut milk (the fat enriches the starch and contributes the lauric-acid aroma), then pressed flat into discs (the pressing eliminates air pockets and compacts the starch grains into a dense, continuous matrix with no gaps).

STEP 2 — DRY: the pressed discs are dried overnight (or in a low oven for 2-3 hours) until the surface is DRY and the interior retains roughly 15-20% moisture. The drying creates a MOISTURE GRADIENT: dry surface (5-8% moisture — hard, brittle, forming a rigid CRUST) over a moist centre (15-20% moisture — soft, pliable, containing the WATER that will become the STEAM that inflates the disc).

STEP 3 — FRY: the dried disc enters 180°C oil. The oil's heat penetrates the crust in 2-3 seconds and reaches the moist centre. The centre's water (at 15-20% moisture) flash-evaporates to STEAM at 100°C, and the steam EXPANDS — the gas volume increases roughly 1,700x compared to the liquid water's volume (1 ml of water at 100°C produces roughly 1,700 ml of steam at atmospheric pressure). The expanding steam pushes outward against the dried crust, and the crust — rigid, sealed, unable to vent the steam because its pores are sealed by the oil's heat — INFLATES. The flat disc balloons into a hollow, spherical, golden orb in 3-5 seconds.

The crust's rigidity is the inflation's structural requirement: if the crust is too thin or too moist (not dried enough), it ruptures under the steam pressure and the disc pops (a burst, not a puff — the steam escapes, the disc stays flat, and the xôi phồng fails). If the crust is too thick or too dry (over-dried), it is too rigid to inflate (the steam pressure is insufficient to stretch the thick crust, and the disc stays flat, dense and un-puffed). The overnight drying calibrates the crust-to-moisture ratio to the GOLDILOCKS ZONE: crust thick enough to contain the steam, thin enough to stretch under the steam's pressure, and moist-centre wet enough to generate the steam that inflates it.

The puffed disc is: HOLLOW (the interior is mostly air — the steam that inflated it has since vented through micro-cracks in the crust, and the orb's interior is an air-filled cavity lined with a thin, gelatinised-starch wall), LIGHT (the hollow disc weighs the same as the flat disc — the frying added no mass, only volume), CRISPY (the oil-fried, dehydrated, starch-glass crust is rigid and shatters under the tooth — the same starch-glass crunch the bánh xèo and the bánh cống documented), and GOLDEN (the Maillard between the rice's trace protein and the coconut milk's sugars, producing the golden colour in the oil's 180°C heat).

The xôi phồng is eaten IMMEDIATELY — within 5 minutes of frying. After 5 minutes, the puffed crust absorbs atmospheric moisture (the same hygroscopic softening the kẹo cu đơ's sugar glass suffers), the starch-glass reverts to a rubbery, un-crispy, deflated disc, and the spectacle is over. The xôi phồng is the collection's most TIME-SENSITIVE food — more time-sensitive than the cháo lươn's 3-minute bánh tráng window, more time-sensitive than the miến gà's 7-minute noodle window, because the xôi phồng's window is not about softening in broth but about DEFLATING IN AIR. The humidity is the enemy, and the clock is the humidity's ally.`,
  ingredientSections: [
    {
      title: 'The sticky rice base',
      items: [
        { amount: 500, unit: 'g', name: 'glutinous rice (nếp), soaked 4-6 hours, drained' },
        { amount: 200, unit: 'ml', name: 'coconut milk (full-fat)', note: `Mixed into the rice before steaming — the coconut's fat coats the starch granules, producing a richer, more golden, more fragrant disc. The fat also LUBRICATES the starch matrix, making it more elastic (the fat molecules insert between amylopectin chains and allow them to slide past each other during the inflation's stretching — without fat, the crust is more brittle and more likely to rupture during puffing).` },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'For pressing and drying',
      items: [
        { amount: 1, name: 'flat, smooth surface (a cutting board, a marble slab, a sheet of parchment on a tray)' },
        { amount: 1, name: 'rolling pin or the flat bottom of a pot (for pressing the discs flat)' },
        { amount: 1, name: 'wire rack (for overnight drying — air must circulate UNDER the discs)' },
      ],
    },
    {
      title: 'For frying',
      items: [
        { amount: 1, unit: 'L', name: 'neutral oil for deep-frying', note: `The oil must be at 175-185°C — the INFLATION ZONE. Below 170°C: the heat penetrates too slowly, the moisture evaporates gradually instead of flashing, and the disc does not generate enough steam-pressure to inflate (it fries flat and dense). Above 190°C: the crust browns and rigidifies before the interior's moisture has fully vaporised, trapping the steam in a crust that is already too rigid to stretch — the disc cracks rather than puffs.` },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 1, name: 'the puffed discs themselves — eaten plain as a snack or festival treat' },
        { amount: 100, unit: 'g', name: 'dipping options: condensed milk (sweet), or shredded coconut + sugar (traditional Khmer), or alongside savoury curries and stews as a starch-side (the xôi phồng replaces rice at the festival table)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Steam the rice with coconut milk, press into discs, dry overnight — Day 1',
      description: `Mix the soaked, drained glutinous rice with the coconut milk, sugar and salt. Steam in a steamer basket (lined with cheesecloth) for 25-30 minutes — the same sticky-rice steaming every xôi recipe in the collection used. The rice is done when: every grain is translucent, sticky, and cooked through (no white, chalky, uncooked centres).

PRESS: while the rice is still HOT (the amylopectin is fully gelatinised and maximally sticky — hot sticky rice fuses into a continuous mass when pressed; cooled sticky rice's retrograded surface does not fuse as smoothly), scoop portions of the cooked rice (roughly 40-50 g each) onto the oiled, flat surface. Press each portion with the oiled rolling pin or pot-bottom into a FLAT DISC — 8-10 cm diameter, 4-5 mm thick, as even as possible (thick spots do not dry uniformly, and the uneven moisture creates weak points that rupture during inflation rather than stretching).

The pressed disc should be: flat (no mounds, no thin edges), smooth (no cracks — cracks are steam-vents that prevent inflation), and dense (no air bubbles trapped inside — bubbles are pre-existing weak points).

DRY: set the pressed discs on the wire rack in a single layer (no overlapping — each disc must dry independently). Place in: a well-ventilated room (overnight, 8-12 hours, at 25-30°C ambient — the Mekong Delta's warm-dry-season night air is the ideal drying environment), OR a low oven (80-90°C, 2-3 hours, door ajar for moisture escape), OR a food dehydrator (60°C, 3-4 hours).

THE DRYING TARGET: the disc's surface should be DRY to the touch (no stickiness — the surface amylopectin has retrograded and released its surface moisture), while the centre — snapped in half to test — should be slightly PLIABLE (not bone-dry, not still-moist, but just flexible enough that it bends 10° before cracking). This is the MOISTURE GRADIENT the inflation requires: dry crust (5-8% moisture) over moist centre (15-20% moisture).

If over-dried (the disc snaps cleanly with no flexibility, the centre is white and chalky): the disc will not puff (insufficient moisture to generate steam). If under-dried (the surface is still slightly tacky, the centre is still soft): the disc will burst in the oil (the crust is too weak to contain the steam).

The overnight-dried discs can be stored in a sealed container at room temperature for 1-2 weeks (the moisture equilibrates slowly within the sealed environment, but the gradient is maintained for several days — fry within 3 days for best results).`,
      tip: `The coconut milk's FAT (17-20%) in the rice serves a dual function: FLAVOUR (the lauric acid's tropical aroma, concentrated by the frying) and ELASTICITY. The fat molecules — principally lauric acid (C12:0), myristic acid (C14:0) and palmitic acid (C16:0) — insert themselves between the amylopectin chains in the gelatinised starch matrix, acting as PLASTICISERS that increase the matrix's ductility (its ability to stretch without cracking). During the inflation, the steam pushes the crust outward, and the crust must STRETCH from a flat 8-10 cm disc to a puffed 10-12 cm sphere — a surface-area increase of roughly 50-80%. Without the fat's plasticisation, the starch-glass crust cracks at roughly 20% surface-area increase (the brittle starch-glass cannot stretch further). With the fat: the crust stretches to 50-80% before cracking, which is enough for full inflation. The coconut milk is the xôi phồng's INFLATION INSURANCE — the fat that lets the crust stretch far enough.`,
    },
    {
      title: 'Fry at 180°C — 3-5 seconds from flat to balloon, the most dramatic transformation in the collection',
      description: `Heat oil to 175-185°C in a deep wok or pot. The temperature MUST be accurate — this is one of the collection's two temperature-precision recipes (the other is the kẹo cu đơ's 149-154°C hard-crack). Use a thermometer.

DROP one dried disc into the hot oil. The disc sinks briefly (1 second — the dense, dried rice is heavier than the oil), then the transformation begins:

SECOND 1-2: the oil's heat penetrates the dry crust and reaches the moist centre. The centre's 15-20% moisture begins to vaporise. Tiny bubbles appear at the disc's edges — the first steam escaping through the crust's micro-pores.

SECOND 2-3: the steam generation ACCELERATES (the heat is now conducting inward from all surfaces simultaneously, and the entire moist centre reaches 100°C). The disc begins to SWELL — the flat wafer lifts at its centre, the edges curling upward, the surface blistering with tiny steam-pockets.

SECOND 3-5: INFLATION. The cumulative steam pressure inside the sealed crust exceeds the crust's tensile resistance, and the disc BALLOONS — the flat wafer transforms into a SPHERE (or a rough, irregular, pillow-like orb, depending on the disc's uniformity), 3-4x its original thickness, hollow inside, golden outside. The inflation is FAST — 2 seconds from flat to full-puff — and VISUAL: the disc appears to levitate in the oil, rising from the bottom (where it sank) to the surface (the inflated orb is less dense than the oil, and it bobs to the top like a golden balloon).

FRY 15-20 more seconds after the full puff — rotate the orb in the oil with a spider or slotted spoon to ensure even golden browning on all surfaces. The crust is now: golden (the Maillard between the rice's glutamic acid and the coconut milk's sugars), crispy (the starch-glass crust, fully dehydrated in the 180°C oil), and RIGID (the inflated shape is locked in place by the dehydrated crust's rigidity — the orb holds its shape even after removal from the oil).

LIFT OUT. Drain on a rack (not paper towel — the rack allows the trapped steam to vent through the micro-cracks in the crust, preventing condensation that would soften the interior). The puffed disc is: light (it feels hollow — because it IS hollow), golden, and making faint CRACKLING sounds as the crust cools and contracts (the thermal contraction of the starch-glass produces micro-fractures that the ear hears as quiet clicks and pops — the sound of the crust tightening around the empty interior).

Repeat with remaining discs — one at a time (two discs simultaneously compete for the oil's heat and both under-inflate).`,
      tip: `The 1,700x volume expansion (liquid water → steam at 100°C at atmospheric pressure) is the DRIVING FORCE of every puff-fry in every cuisine: the Indian poori, the Chinese you tiao, the Southeast Asian krupuk, the Mexican chicharrón, and this Khmer xôi phồng all exploit the same phase-transition physics. The difference between a successful puff and a flat failure is the CRUST-TO-MOISTURE RATIO: too much moisture (the disc hasn't dried enough) generates too much steam, the crust can't contain the pressure, and the disc BURSTS (spectacularly, with a pop, spraying oil — dangerous). Too little moisture (over-dried) generates insufficient steam, the crust seals before the pressure builds, and the disc stays FLAT (disappointingly, quietly, the worst kind of failure). The overnight drying is the calibration that places each disc in the GOLDILOCKS ZONE between burst and flat, and the zone is narrow — roughly 15-20% centre moisture with a 5-8% surface crust. The Khmer grandmother who has been making xôi phồng for 40 years knows the zone by TOUCH (she bends the dried disc and reads the flexibility the way a potter reads the clay's moisture by its feel), and the knowledge is the skill, and the skill is the festival's continuity.`,
    },
    {
      title: 'Eat within 5 minutes — the spectacle has a clock',
      description: `Serve the puffed xôi phồng IMMEDIATELY — on a plate, golden, round, hollow, still faintly crackling from the cooling crust. The discs are: light enough to balance on a fingertip (the hollow interior weighs nothing — the entire orb is 40-50 g, of which roughly 90% is air), crispy enough to shatter when a finger presses the surface (the starch-glass crust is 1-2 mm thick and fractures under 2-3 Newtons of pressure — lighter than the kẹo cu đơ's sugar-glass but heavier than the bánh tráng nướng's air-pocketed rice paper), and golden enough to glow in the festival's lamplight.

THE EATING: press the crust — it SHATTERS, the hollow interior collapsing, the starch-glass crust fragmenting into crispy, golden, coconut-fragrant shards. Pick up a shard. The shard is: CRISPY (the starch-glass fracture, 2 mm of dehydrated, oil-fried, golden, rigid rice-starch), LIGHT (the shard is thin-walled and mostly air-backed), COCONUT-SWEET (the lauric acid's concentrated tropical aroma, the sugar's caramelisation, the Maillard's golden-toasted note — three browning/flavour systems in the same 2 mm crust), and carrying a faint, pleasant OIL-RICHNESS from the deep-frying (the starch absorbed roughly 10-15% of its weight in oil during the frying, and the oil's neutral fat extends the coconut's tropical richness into a rounder, fuller, more satisfying mouthfeel).

DIPPING (optional): at the Khmer festival table, the xôi phồng shards are dipped in condensed milk (sweet — the children's version), or in shredded coconut + sugar (traditional — the coconut-on-coconut echo), or served alongside cà ri gà or other curry dishes (the xôi phồng replaces plain rice at the festival table, and a shard of puffed rice dipped in curry sauce is: crispy where the curry has not reached, soggy where it has, and the transition zone between crispy and soggy is the most interesting bite — the same crunch-to-soft transition the cháo lươn's bánh tráng documented, here from a rice puff rather than a rice paper).

THE 5-MINUTE WINDOW: after 5 minutes at room temperature (or 3 minutes on a humid day — the Mekong Delta's 80% humidity is the xôi phồng's mortal enemy), the starch-glass crust absorbs atmospheric moisture, the glass-transition REVERSES (the starch reverts from glassy-rigid to rubbery-soft as the absorbed water plasticises the amylopectin chains), and the puffed orb DEFLATES — the crust softens, the hollow interior collapses under the crust's now-flexible weight, and the golden sphere becomes a sad, flat, chewy, un-crispy disc. The festival food's transience is its lesson: beauty that demands immediacy, pleasure that punishes delay, and a 5-minute window that says EAT NOW, because the humidity is coming and the crispness will not wait.

Xôi phồng is the collection's most PHYSICS-DEPENDENT recipe — more dependent on precise temperature (175-185°C), precise moisture (15-20% centre), and precise timing (3-5 seconds of inflation, 5 minutes of edibility) than any other preparation. It is also the collection's most SPECTACULAR: the 3-second inflation from flat wafer to golden balloon is the most dramatic visual transformation any food in the project undergoes, and the Khmer grandmother who drops the disc into the oil and watches it balloon is performing the festival's most watched moment — the moment the flat rice becomes air, the dense becomes light, the ordinary becomes extraordinary, and the table applauds.`,
      tip: `Xôi phồng's 5-minute crispness window is the SHORTEST shelf-life of any finished product in the collection — shorter than the cháo lươn's 3-minute bánh tráng (which softens in broth, not in air, and stays crispy if not submerged), shorter than any grilled food's warm-to-cool window, and driven by a different mechanism: ATMOSPHERIC MOISTURE ABSORPTION. The starch-glass crust's water activity after frying is roughly 0.2-0.3 (very dry), and the Mekong Delta's ambient air water activity is roughly 0.75-0.85 (very humid). The aw gradient (0.2 → 0.8) drives moisture from the air INTO the crust at a rate of roughly 1-2% per minute, and at 10-12% moisture the starch-glass undergoes its REVERSE GLASS TRANSITION (from rigid glass back to rubbery gel), and the crispness collapses. The 5-minute window = the time for the crust to absorb 8-10% moisture (from 2% to 10-12%). In a drier climate (Đắk Lắk's 50-60% humidity, aw 0.5-0.6), the window would be 10-15 minutes. In an air-conditioned room (30-40% humidity), 20-30 minutes. The festival is outdoors, in the Delta, in April (the hottest, most humid month) — and the 5-minute window is the Delta's humidity declaring: you may have your golden balloon, but you may not keep it.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
