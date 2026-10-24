'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ghe-ham-ninh',
  title: `Ghẹ Hàm Ninh (Hàm Ninh Steamed Crab with Salt-Pepper-Lime)`,
  subtitle: `Mud crabs from the mangrove flats of Hàm Ninh village, steamed in nothing but seawater and beer until the shells turn vermillion and the roe inside sets to a dense, golden, custard-like paste. Cracked open at the table and dipped in muối tiêu chanh — the same salt-pepper-lime that dressed the Bắc Ninh chicken — because an ingredient this good asks for nothing more than a sharpener.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/ghe-ham-ninh.jpg',
  intro: `Hàm Ninh is a fishing village on Phú Quốc's eastern coast, facing the mainland across a shallow, warm, mangrove-fringed strait where the tidal flats produce one of the island's most prized catches: ghẹ, the swimming crab — Portunus pelagicus, the blue swimmer or flower crab — pulled from baited traps set in the sandy shallows and sold live, claws bound with rubber bands, at the village's waterfront market an hour after the boats come in. The crabs are large, heavy, and — in season, from roughly October to March — packed with roe: a dense, golden-orange, semi-solid mass of lipid and protein that fills the upper shell and that, when steamed, sets to a custard-like consistency with a richness so concentrated it borders on the indecent.

The cooking is the simplest in this collection's seafood file and possibly the simplest in the entire project: the live crabs go into a pot, seawater or salted water goes in, a splash of beer goes in, the lid goes on, and eight minutes later the shells are vermillion and the crabs are done. No aromatics in the pot. No lemongrass, no ginger, no chili — nothing that would interpose itself between the crab's own flavour and the eater's tongue. The steam does the cooking and the crab provides the seasoning, and the restraint is, once again, the Phú Quốc philosophy: when the ingredient is this good, the cook's job is to apply heat and then get out of the way.

The dipping sauce is muối tiêu chanh — salt, cracked black pepper (Phú Quốc's own, naturally), and fresh lime juice — the identical condiment that this collection served beside the gà Hồ in Bắc Ninh, and for the identical reason. A protein of exceptional quality, cooked in the most minimal way possible, needs only a sharpener — salt for clarity, lime for brightness, pepper for warmth — and any more complex sauce would be a commentary on something that has already said everything it intends to say. The muối tiêu chanh has now appeared twice in the collection, once beside a heritage chicken and once beside a reef crab, and in both cases it says the same thing: this ingredient does not need your help.

Hàm Ninh's crabs are eaten at the village's waterfront — at low plastic tables, on low stools, facing the strait, with the shells cracked by hand and the roe scooped with a small spoon and spread on fingers and eaten with the directness of people who have been doing this their whole lives and see no reason to use a crab fork. The beer is cold. The lime is fresh. The pepper was picked from the hill behind the village. And the crab was in the water this morning, which is the only fact that matters and the only fact the recipe requires.`,
  ingredientSections: [
    {
      title: 'The crabs',
      items: [
        {
          amount: 4,
          name: 'live ghẹ (swimming crabs / flower crabs / blue swimmers), 300-400 g each',
          note: `Live — claws bound, legs moving, eyes tracking. A dead crab in a steamer is a food-safety event, not a dish. In Hàm Ninh they come from the trap that morning. In Europe: live blue swimmer crabs are available at specialist fishmongers and Chinese/Vietnamese seafood markets in major cities. Live brown crabs (Cancer pagurus) or Dungeness crabs are excellent alternatives — heavier, meatier, with a different but equally intense roe. Any live crab from a clean, cold-chain-maintained source is the right crab. A dead crab from any source is the wrong one.`,
        },
      ],
    },
    {
      title: 'The steaming liquid',
      items: [
        {
          amount: 500,
          unit: 'ml',
          name: 'water with 2 tbsp sea salt (or, if available, clean seawater)',
          note: `Seawater is the Hàm Ninh method — it seasons the steam and the crab simultaneously. Salted tap water replicates it. The salt concentration should be roughly 3% — oceanic salinity — so the steam that penetrates the shell carries a faint brine that reinforces the crab's own.`,
        },
        {
          amount: 200,
          unit: 'ml',
          name: 'beer (any cheap lager)',
          note: `The same beer that deglazed the Tây Ninh ốc bươu, here steaming the crab. Its malt sugars caramelize faintly on the shell's surface, its alcohol evaporates as steam and carries volatile aromatics into the meat, and its carbonation — briefly — aerates the steaming liquid so the heat distribution is more even. The flavour contribution is subtle; the tradition is firm.`,
        },
      ],
    },
    {
      title: 'Muối tiêu chanh',
      items: [
        { amount: 2, unit: 'tbsp', name: 'fine sea salt' },
        { amount: 1.5, unit: 'tsp', name: 'Phú Quốc black peppercorns, freshly cracked coarse' },
        { amount: 3, unit: 'tbsp', name: 'fresh lime juice, squeezed 1 minute before serving' },
      ],
    },
    {
      title: 'The table',
      items: [
        { amount: 1, name: 'stack of newspapers or a plastic sheet (for the shell debris)' },
        { amount: 4, name: 'cold beers' },
        { amount: 4, name: 'wet towels (for the hands)' },
        { amount: 1, name: 'small bowl for discarded shell' },
      ],
    },
  ],
  steps: [
    {
      title: 'Check every crab — the vitality test is the safety test',
      description: `Hold each crab (carefully — bound claws can still pinch if the bands slip) and check: the legs should move actively, the eyes should retract when touched, and the crab should feel heavy for its size — a light crab is an empty crab, and an empty crab is a waste of a steamer slot.

Press the underside of the shell — it should feel firm and full, not hollow. In a roe-bearing female (the wide, triangular apron on the underside identifies the sex), a full shell promises the golden roe that is half the eating.

Any crab that is limp, unresponsive, light or smells of ammonia is dead and must be discarded. A crab that died before cooking produces toxins within hours that steaming does not destroy, and no recipe in any collection should pretend otherwise.

Rinse each live crab briefly under cold water to remove surface mud. Keep them cold until the pot is ready — a warm crab is a stressed crab, and stress depletes the glycogen that gives the meat its sweetness.`,
      tip: `The vitality check is not fussiness — it is the single food-safety gate for whole-shell crustacean cookery. Unlike a mussel or clam that opens when cooked (providing a doneness-and-safety signal), a crab's shell does not open: it stays closed dead or alive, and the only way to know the animal was alive at the moment of cooking is to verify it beforehand. A crab that died an hour ago looks identical to a live one once it is steamed — same colour, same shape, same shell — but its flesh has already begun bacterial decomposition, producing histamine and cadaverine that survive the heat and that cause symptoms ranging from unpleasant to dangerous. Check every crab. The check takes five seconds. The consequence of skipping it does not.`,
    },
    {
      title: 'Steam 8-10 minutes — seawater, beer, lid on, do not open early',
      description: `Pour the salted water and the beer into a pot large enough to hold the crabs in a single layer (or stacked at most two deep, belly-up). Set a steaming rack inside if you have one; if not, the crabs can sit in the liquid directly — the Hàm Ninh method is a hybrid steam-boil that submerges the bottom crab and steams the top one.

Bring to a hard boil. Set the crabs in, belly-up (so the roe in the top shell stays in place rather than draining out). Lid on. Steam 8 minutes for a 300 g crab, 10 for a 400 g.

Do not open the lid to check. Every opening dumps steam, drops the temperature, and adds a minute to the cooking time. Trust the clock and the crab's weight.

The crabs are done when: the shells have turned from grey-blue to uniform vermillion-orange (the astaxanthin pigment in the shell shifts from protein-bound blue to free red at about 80°C — the same colour change as a cooked lobster), the legs pull away from the body with slight resistance, and — the definitive test — a leg joint cracked open reveals white, opaque, firm meat with no translucent-raw centre.

Pull immediately. Oversteamed crab is dry, stringy and a waste of a morning's catch.`,
      tip: `The colour change from blue-grey to vermillion is astaxanthin's liberation. In the living crab, astaxanthin — a red carotenoid pigment — is bound to a protein called crustacyanin, which distorts the pigment's light absorption and makes it appear blue-grey. Above approximately 80°C, the protein denatures and releases the astaxanthin, which immediately displays its true red-orange colour. The colour change is therefore a protein-denaturation thermometer built into the shell: blue means under 80°C and raw; vermillion means over 80°C and cooked. The shell is telling you the temperature of its own interior, and the message is the colour. When every visible surface is uniformly red-orange with no blue-grey patches, the crab has reached doneness throughout. The most reliable thermometer in the kitchen is the one the animal brought with it.`,
    },
    {
      title: 'Pound the muối tiêu chanh — one minute before the crabs come out',
      description: `While the crabs steam: pound the salt and cracked pepper together in a mortar. One minute before pulling the crabs, squeeze the lime juice in and stir once.

The saucer should be wet, granular, glistening and sharp — the same muối tiêu chanh that dressed the gà Hồ in Bắc Ninh, now made with Phú Quốc's own pepper, and serving the same function: a sharpener for a protein that needs nothing but clarity.

Set a saucer at each place. The crab is the meal; the salt is the lens.`,
      tip: `The muối tiêu chanh has now appeared twice in this collection — beside a heritage chicken (Bắc Ninh) and beside a steamed crab (Phú Quốc) — and in both cases it accompanied the most minimally-cooked, highest-quality protein on the plate. This is not a coincidence. Muối tiêu chanh is the Vietnamese kitchen's signal that the ingredient is good enough to carry the dish alone, and that the condiment's job is to sharpen rather than to season. A complex dipping sauce (nước chấm, mắm nêm, tương xay) adds its own flavour; muối tiêu chanh adds only salt, acid and heat — the three elements that amplify what is already there without contributing anything of their own. It is the most transparent condiment in the Vietnamese canon, and it is reserved for the ingredients that deserve transparency.`,
    },
    {
      title: 'Crack, scoop, dip — hands, not tools, and the roe first',
      description: `Set the steamed crabs on the newspaper-covered table. Pull off the top shell (carapace) by gripping the body and lifting the shell from the back. Inside the detached shell: the golden-orange roe, set to a dense, custard-like paste by the steam. Scoop it with a small spoon, dip it in the muối tiêu chanh, and eat it first — warm, rich, briny, impossibly concentrated, with the lime-salt-pepper sharpening every edge.

Then the body: snap in half, crack the legs, pull the meat from the chambers with your fingers. Each piece is dipped in the salt. The meat is firm, sweet, clean, and tastes of the mangrove flat it grew in.

The claws: crack with the back of a heavy knife or a crab cracker. The claw meat is denser and sweeter than the body meat — the claw muscle worked harder in life and built more glycogen, which is why crab-claw meat is universally the sweetest part.

Eat slowly. Drink beer between pieces. Wipe hands on the wet towel, not on your shirt. Stack the empty shells in the bowl. The meal lasts as long as the crabs last, and a table of four with four large crabs runs about forty-five minutes, which on a Hàm Ninh waterfront at sunset is exactly the right amount of time.`,
      tip: `The roe — the golden paste in the top shell — is the reason Hàm Ninh crabs are famous and the reason the village charges what it charges. A roe-heavy female crab contains 20-30 g of hepatopancreas and gonad combined, and this mass is roughly 50% lipid, 15% protein and 30% water, making it one of the most energy-dense and flavour-dense natural foods in any ocean. Its glutamate content exceeds that of Parmesan. Its lipid profile is rich in omega-3 fatty acids that carry the volatile esters responsible for the "crabby" aroma the tongue and the nose register as luxury. Eating the roe first — while it is warm, before it cools and sets firmer — is not greed. It is the correct sequence, because the roe's flavour compounds are most volatile and most aromatic at steaming temperature, and they cool into a denser, quieter register within three minutes. The best roe is the first spoonful, warm from the shell, dipped in lime-salt-pepper, eaten before the next sentence is spoken.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
