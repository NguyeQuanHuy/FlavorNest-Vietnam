'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-bo-vien',
  title: `Bún Bò Viên (Springy Beef Ball Noodle Soup)`,
  subtitle: `Beef pounded while still warm from the butcher, worked until it turns from meat into paste, and dropped into barely-simmering broth — the balls come out so springy they bounce off the bowl. The market breakfast of Vinh Long, and a lesson in protein chemistry disguised as a noodle soup.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '2 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/bun-bo-vien.jpg',
  intro: `Bun bo vien is the noodle soup you eat standing up at the edge of Vinh Long market at six in the morning, from a stall that sells nothing else. There is no elaborate broth genealogy here, no twenty-spice bag, no eight-hour bone stock — the broth is clean and quiet on purpose, because the entire dish is a delivery system for the beef balls. A properly made bo vien is not a meatball in any Western sense. It is dense, glassy, faintly translucent at the cut, and so elastic it audibly bounces when dropped on a plate. The Delta stallholders test them exactly that way, in front of you, and if the ball does not bounce they do not sell it.

The beef must be lean and it must be fresh — ideally thit bo nong, meat still warm from slaughter, which is why bo vien is a market-morning food and not a home-kitchen-at-night food. The reason is chemical rather than sentimental. In the first few hours after slaughter, before rigor mortis sets in and the pH drops, muscle protein is at its most soluble and its water-holding capacity is at its highest. Beat that meat with salt and you extract myosin — the long, thread-like contractile protein — out of the muscle fibers and into a sticky sol. Once meat has passed through rigor and chilled for a day, that extraction is far harder, which is why every commercial factory reaches for phosphates to fake it. Vinh Long stalls do not use phosphates. They use fresh beef, salt, ice, and a great deal of violence.

The pounding is the technique and there is no shortcut around it. Salt at around 2 percent by weight dissolves the myofibrils; the mechanical shearing of the pestle or the blade drags the myosin filaments out and unwinds them; and as the paste is worked, those unwound protein strands start to cross-link with each other into a three-dimensional gel network that traps water and fat inside it. When that gel is set by heat, it does not merely firm up — it becomes elastic, springing back when compressed. This is the same protein gelation that makes cha lua, cha ca and Chinese fish balls work, and it is governed by one non-negotiable rule: the paste must stay below 10°C throughout. Above that, the myosin denatures before it can network, the emulsion breaks, and you are left with a grainy meatball that crumbles instead of bounces. Ice in the paste is not for flavor. It is the thermostat.

The bowl that carries the balls is deliberately restrained: a light beef broth, bun, a scatter of scallion and coriander, bean sprouts and banana blossom on the side, chili sate and a saucer of tuong ot with fish sauce. Northern noodle soups would put star anise and charred ginger in this broth; Hue would put lemongrass and sate oil in it; Vinh Long puts almost nothing in it. The broth exists to be hot, clean, and slightly sweet — the Delta rock-sugar sweetness — so that nothing competes with the texture of the ball. You bite one and it resists, then gives. That resistance is the dish. Everything else on the table is context.`,
  ingredientSections: [
    {
      title: 'The beef balls (bo vien)',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'very lean beef, freshest possible (topside, round or shank)',
          note: `Lean to the point of austerity — visible fat and connective tissue ruin the gel. If you can get meat the day it was butchered, use it. In Europe, buy a whole piece from the butcher rather than pre-ground beef: pre-ground meat has already been warmed, oxidized, and mechanically damaged, and it will not bounce.`,
        },
        {
          amount: 100,
          unit: 'g',
          name: 'beef fat or pork back fat, finely diced and frozen hard',
          note: `About 15 percent fat. Frozen solid so it stays in discrete particles through the pounding — melted fat coats the protein strands and blocks the network from forming.`,
        },
        {
          amount: 12,
          unit: 'g',
          name: 'fine salt',
          note: `Roughly 2 percent of the meat weight, and this figure is exact, not approximate. Below about 1.5 percent the myosin will not solubilize and the paste never becomes sticky. Salt here is a structural ingredient, not a seasoning.`,
        },
        { amount: 100, unit: 'g', name: 'crushed ice or ice-cold water', note: `Added in three stages during pounding. It keeps the paste under 10°C and supplies the water that the protein gel will trap.` },
        { amount: 25, unit: 'g', name: 'tapioca starch (bot nang)', note: `The traditional binder. It gelatinizes in the poaching water and locks moisture into the network — insurance against a dry ball. Cornstarch is a workable substitute; potato starch is not.` },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'ground white pepper', note: `White, not black. Black pepper leaves visible dark specks in a paste that should read as pale and uniform, and its aroma is too assertive here.` },
        { amount: 2, unit: 'tsp', name: 'fish sauce' },
        { amount: 3, name: 'cloves garlic, pounded to a smooth paste' },
        { amount: 0.5, unit: 'tsp', name: 'baking soda (optional)', note: `Raises the pH slightly, which increases water-holding capacity and springiness. The old stalls used none; most modern ones use a pinch. Do not exceed this quantity — more will leave a soapy taste.` },
      ],
    },
    {
      title: 'The broth',
      items: [
        { amount: 1, unit: 'kg', name: 'beef bones (marrow and knuckle)', note: `Blanched 5 minutes in boiling water, then rinsed — this removes the scum proteins that would otherwise cloud the broth. A clear broth is not vanity; a murky one tastes flat.` },
        { amount: 2.5, unit: 'L', name: 'water' },
        { amount: 1, name: 'yellow onion, halved and charred' },
        { amount: 30, unit: 'g', name: 'ginger, charred and bruised' },
        { amount: 20, unit: 'g', name: 'rock sugar (duong phen)', note: `The Delta sweetness. Rock sugar dissolves slowly and reads as rounder and cleaner than granulated — it lifts the broth without making it taste sweet.` },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 600, unit: 'g', name: 'fresh bun (rice vermicelli)' },
        { amount: 200, unit: 'g', name: 'bean sprouts' },
        { amount: 100, unit: 'g', name: 'shredded banana blossom (bap chuoi bao)', note: `The southern noodle-bowl signature. Shred thin and hold in lime water so it stays pale.` },
        { amount: 4, name: 'scallions, thinly sliced' },
        { amount: 30, unit: 'g', name: 'coriander and Vietnamese celery leaf (can tau), chopped' },
        { amount: 2, unit: 'tbsp', name: 'fried shallots' },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 4, unit: 'tbsp', name: 'tuong ot (chili sauce) and hoisin, in separate saucers', note: `Served alongside, never stirred into the bowl by the cook — the Delta lets the eater build their own dip.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Chill everything, then pound the beef — 15 minutes of real work',
      description: `Cut the beef into 2 cm cubes, spread it on a tray with the frozen fat, and put it in the freezer for 20 minutes until the surfaces are firm and crystals are just forming. Chill your mortar or food processor bowl at the same time.

Pound or process the beef with the salt and baking soda first, alone, until it goes from chopped meat to a visibly sticky, cohesive mass that clings to the pestle in one lump — 5 to 7 minutes by hand, 60-90 seconds in a processor in short pulses. Then work in the ice in three additions, waiting until each is absorbed, followed by the starch, sugar, pepper, fish sauce and garlic. Finally add the frozen fat and work only long enough to distribute it.

The paste is ready when it is glossy, pale pink, and so elastic that a spoonful slaps back at you when you press it. Touch it with the back of your hand — it must feel cold. If it feels merely cool, stop and return it to the freezer for 10 minutes.`,
      tip: `Salt goes in first and alone for a reason. At around 2 percent concentration, sodium and chloride ions penetrate the myofibril and disrupt the electrostatic bonds holding actin and myosin together, letting the myosin dissolve out into solution. Only once that myosin is free can shearing unwind it into the elastic network that makes the ball bounce. Add the starch or fat before the salt has done its work and you insulate the protein — the paste stays crumbly and no amount of further pounding will save it.`,
    },
    {
      title: 'Slam the paste — 20 throws, and this is not optional',
      description: `Gather the paste into a ball, lift it, and throw it down hard into the bowl. Scrape it up and throw again. Twenty to thirty throws.

You will hear the change: the first throws land with a wet slap, the last ones with a dense, dull thud. The paste stops sticking to your hand and starts pulling away from the bowl in one piece.

Skip this and the balls will be soft and mealy rather than springy. It is the single step that home cooks omit and stall cooks never do.`,
      tip: `Throwing the paste is high-shear mechanical work that does something the pestle cannot: it aligns the already-solubilized myosin filaments into parallel bundles and forces them to cross-link along their lengths. The protein network goes from tangled to organized, and organized networks are elastic. The same technique appears in Chaozhou beef balls, Hue cha lua and Portuguese salt cod cakes — every springy protein product on earth is made by hitting it.`,
    },
    {
      title: 'Build the broth and hold it at 90°C — never boiling',
      description: `Blanch the bones 5 minutes in boiling water, drain, rinse them clean, and start again with 2.5 L of fresh cold water. Add the charred onion and ginger, bring barely to a simmer, and hold it there for 90 minutes, skimming every 15 minutes. Season with rock sugar, fish sauce and salt in the last 10 minutes. Strain.

A correct broth is pale amber and clear enough to read the pattern on the bottom of the bowl. If it turns milky, you let it boil — the agitation emulsifies fat and denatured protein into the liquid and it will never clarify again.

Charring the onion and ginger is a Maillard step and it matters: the raw versions give a sharp, sulfurous edge, while the charred ones give the caramelized, faintly sweet depth that lets this broth stay so simple.`,
      tip: `Note what is not in this broth. No star anise, no cinnamon, no cardamom — those belong to pho, a northern dish with entirely different ambitions. Vinh Long broth for bo vien is deliberately near-empty, seasoned to a clean savory-sweet and nothing else, because a spiced broth would fight the one thing this bowl is actually about: the texture of the ball. Restraint is the regional signature here.`,
    },
    {
      title: 'Poach the balls at 80-85°C — the water must never boil',
      description: `Bring a wide pot of water to a bare shiver — small bubbles at the base, no surface break, around 80-85°C. Wet your hands in cold water, squeeze paste out between thumb and forefinger into balls of 25-30 g, scoop each with a wet spoon and lower it in.

Poach 10-12 minutes. The balls sink at first, then rise to the surface as their internal protein sets and traps expanding steam — floating is the primary doneness signal. Give them 2 more minutes after they float, then lift one out and drop it onto a plate from 20 cm. It should bounce. If it thuds, poach the batch 2 minutes longer.

Boiling water is the failure mode. A rolling boil drives the exterior of the ball past 70°C too fast, the surface protein contracts violently, and the ball turns rubbery outside and grainy inside — and the agitation tears the softer balls apart before they set.`,
      tip: `Protein gelation for myosin begins around 50°C and completes near 70°C. Held at 80-85°C, the heat travels inward slowly enough that the whole ball crosses that window more or less together, and the network sets uniformly — dense, glassy, elastic. Rushed at 100°C, the outer millimeter sets and shrinks before the center has begun, squeezing water out of the middle. The bounce test is not folklore. It is a direct measurement of how evenly you set the gel.`,
    },
    {
      title: 'Assemble, and eat within five minutes',
      description: `Blanch the bun 10 seconds in hot water and divide between four deep bowls. Add 5 or 6 beef balls per bowl — halved if you like, so the broth gets inside the cut — and ladle the near-boiling broth over. The broth must be hot enough to steam visibly on contact; anything less and the bowl reads as flat.

Top with scallion, coriander, can tau and fried shallots. Serve the bean sprouts and banana blossom on the side to be added by the handful, so they stay crisp, and the tuong ot and hoisin in saucers for dipping the balls directly.

Eat the balls first, while they are hottest and springiest. A bo vien left sitting in broth for 10 minutes absorbs liquid, loses tension, and gives up exactly the quality you spent 15 minutes of pounding to build.`,
      tip: `The Delta way to eat it: lift a ball out with chopsticks, dip it in the chili-hoisin saucer, and eat it on its own — not in the broth. The broth is a bath that keeps the balls hot and a soup you drink between them, but the ball meets the sauce directly. Bun bo vien is the rare Vietnamese noodle soup where the noodles and broth are the supporting cast. You know the stall is a good one before you taste anything, because you watched the ball bounce.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
