'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-bo-duc-tho',
  title: `Bún Bò Đức Thọ (Đức Thọ Beef Noodle Soup)`,
  subtitle: `Thick, chewy, faintly sour rice noodles from the village of Đức Thọ, in a clear beef broth with no lemongrass, no shrimp paste and no chilli oil — nothing between you and the noodle. The bowl that Hà Tĩnh quietly insists is better than the famous one from Huế.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '3 hr',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/bun-bo-duc-tho.jpg',
  intro: `Say bún bò to anyone outside Vietnam and they will think of Huế: the scarlet broth, the lemongrass, the fermented shrimp paste, the slick of annatto chilli oil, the pork knuckle. Bún bò Đức Thọ is not a variation on that bowl. It is a different dish that happens to share a name, and if anything it is the older and plainer idea — beef, bones, water, fish sauce, pepper, and a noodle so good that the province built the dish around it rather than around the broth.

Đức Thọ is a district on the River La, upstream of where the hến are raked out of the sand, and it has made bún — round rice noodles — for as long as anyone can document. What makes the Đức Thọ noodle distinctive is that the rice is soaked and allowed to ferment for two or three days before it is ground. That fermentation does two things: lactic acid bacteria acidify the slurry, which weakens the rice protein matrix and lets the starch granules separate cleanly, and the acid itself leaves a faint, clean sourness in the finished noodle. The result is thicker than a Hanoi bún, noticeably chewier, slightly translucent, and with a mild tang that you notice most clearly in a broth this plain. It is a noodle that can carry a bowl on its own, and in Đức Thọ it does.

Because the noodle is the point, the broth is deliberately stripped back. Beef bones, charred onion and ginger, fish sauce, a little salt, and a genuinely aggressive amount of black pepper — which is the north-central signature and the only strong flavour in the pot. There is no lemongrass, no mắm ruốc, no sate. The broth is simmered long and skimmed obsessively until it is clear enough to read the bottom of the bowl through, and the beef — shank, brisket, sometimes a piece of tendon — is poached in it and sliced thin. What arrives at the table looks almost austere next to a bowl from Huế. It tastes clean, deeply beefy, and peppery, and it makes no attempt to be anything else.

There is a quiet regional argument buried in this dish and it is worth stating plainly. Huế cooks for effect: layered, spiced, theatrical, the food of a former imperial capital. Hà Tĩnh cooks for substance: plain, direct, heavy on pepper, and reliant on the quality of one or two ingredients rather than on the interaction of ten. It is one of the poorest provinces in Vietnam and it has never had the luxury of ornament. A bowl of bún bò Đức Thọ is what that philosophy tastes like — and the province's willingness to give the dish the same name as its famous neighbour, and then serve it with almost nothing in it, is about as confident a statement as a cuisine can make.`,
  ingredientSections: [
    {
      title: 'The broth',
      items: [
        {
          amount: 1.5,
          unit: 'kg',
          name: 'beef bones (marrow, knuckle, and a piece of oxtail)',
          note: `Blanch 5 minutes in boiling water and rinse every bone clean under running water. This step is not skippable — the grey scum is denatured haemoglobin from the marrow, and once it disperses into a broth you cannot get it back out. In a broth this bare, cloudiness has nowhere to hide.`,
        },
        { amount: 3, unit: 'L', name: 'water' },
        { amount: 2, name: 'yellow onions, halved and charred black in patches' },
        { amount: 40, unit: 'g', name: 'ginger, charred and bruised' },
        { amount: 4, unit: 'tbsp', name: 'fish sauce (35-40°N)' },
        { amount: 2, unit: 'tsp', name: 'salt' },
        {
          amount: 1,
          unit: 'tsp',
          name: 'sugar',
          note: `One teaspoon. Not a spoonful of rock sugar. North-central broth is savoury and pepper-driven — the Mekong habit of building sweetness into the base would be wrong here and Hà Tĩnh would notice immediately.`,
        },
        {
          amount: 2,
          unit: 'tsp',
          name: 'coarsely cracked black pepper (in the pot)',
          note: `Plus more at the table. Pepper IS the spicing of this broth — there is nothing else. Cracked coarse so the piperine releases gradually over the long simmer rather than all at once.`,
        },
      ],
    },
    {
      title: 'The beef',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'beef shank (bắp bò) in one piece',
          note: `Shank, with its central seam of connective tissue, is the correct cut. Over two hours that collagen hydrolyzes into gelatin and the muscle turns tender while the tendon seam sets into a translucent, slightly springy layer that is the best bite in the bowl. Lean fillet would be a waste and would turn dry.`,
        },
        { amount: 300, unit: 'g', name: 'beef brisket or flank' },
        { amount: 150, unit: 'g', name: 'beef tendon (gân bò), optional', note: `Needs 3 hours, not 2. Add it at the very start. When done it should be translucent and gelatinous with a faint spring — this is the piece regulars ask for by name.` },
      ],
    },
    {
      title: 'The noodles',
      items: [
        {
          amount: 800,
          unit: 'g',
          name: 'fresh thick round rice noodles (bún sợi to)',
          note: `The thick kind — 2-3 mm, chewy, not the thin Hanoi bún. In Europe: look for fresh or vacuum-packed thick round rice noodles at a Vietnamese grocer, often sold for bún bò Huế. If you can only find dried, soak in cold water for an hour before a very brief blanch, which gets you closer to the chew of a fresh noodle than boiling a dry one ever will.`,
        },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 5, name: 'scallions, sliced (greens and whites separated)' },
        { amount: 30, unit: 'g', name: 'coriander, chopped' },
        { amount: 30, unit: 'g', name: 'rau răm, chopped', note: `The north-central herb of choice — peppery and slightly soapy, and it sits against a plain beef broth better than the basil the south would reach for.` },
        { amount: 1, name: 'yellow onion, sliced paper-thin and soaked in cold water', note: `Soaking removes the harsh sulfur compounds and leaves the sweetness and the crunch. Ten minutes in cold water changes it completely.` },
        { amount: 200, unit: 'g', name: 'bean sprouts (served raw on the side)' },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 3, name: 'red chilies, sliced' },
        { amount: 2, unit: 'tsp', name: 'coarsely cracked black pepper, for the table' },
        { amount: 1, name: 'saucer of fish sauce with chili, for dipping the beef' },
      ],
    },
  ],
  steps: [
    {
      title: 'Blanch the bones, char the aromatics — 15 minutes of preparation that decides everything',
      description: `Cover the bones with cold water, bring to a hard boil, and boil 5 minutes. A thick grey scum will rise. Drain everything, discard the water, and rinse every bone individually under running water until no scum clings to it. Scrub the pot too.

Meanwhile, char the halved onions and the ginger directly over a gas flame or under a grill until blackened in patches and smelling sweet and roasted.

Do not try to skip this by skimming as you go. The scum released in the first minutes is a colloid — once it has dispersed and emulsified into the broth, no amount of skimming will recover clarity. Blanch, dump, rinse, restart. Fifteen minutes now, or a permanently grey broth for the next three hours.`,
      tip: `Charring is a Maillard step and it does what raw aromatics cannot. Dry heat above 150°C on the cut face of an onion converts its sugars and amino acids into pyrazines and furans — roasted, sweet, deep — while a raw onion simmered in broth releases sharp sulfur compounds instead. In a broth with three ingredients, the difference between charred and raw onion is not a nuance. It is most of the flavour.`,
    },
    {
      title: 'Simmer the broth and poach the beef — 2 hours at 90°C, never boiling',
      description: `Put the rinsed bones in 3 L of fresh cold water with the charred onion, ginger and the cracked pepper. Bring slowly to the barest simmer — a bubble breaking every second or two, around 90°C — and hold it there. Add the tendon now if you are using it.

After 30 minutes, lower in the whole piece of shank and the brisket. Simmer 2 hours total, skimming every 20 minutes. Season with fish sauce, salt and sugar in the last 20 minutes.

Test the shank at 90 minutes: a skewer should meet firm resistance but slide through with steady pressure. When it does, lift it out — the beef is done long before the bones are.

If the pot ever boils hard, fat and denatured protein emulsify into the liquid and the broth turns milky. It will not clarify again, and in a bowl this plain there is nothing to hide it behind.`,
      tip: `The beef comes out and the bones stay in, and the two timings are genuinely different. Muscle is done when its collagen has softened enough to yield — for a shank, about two hours — and every minute past that squeezes water out and dries it. Bones, by contrast, keep giving up gelatin, minerals and flavour for far longer. Pull the meat, keep the bones going. Every Vietnamese noodle-soup cook does this and it is the single most common thing home cooks get wrong, usually by leaving the beef in for the full three hours and wondering why it tastes like string.`,
    },
    {
      title: 'Chill and slice the beef — against the grain, paper-thin',
      description: `Plunge the cooked shank and brisket into iced water for 10 minutes, then drain and refrigerate at least 30 minutes if you have time.

Slice across the grain as thinly as you can manage. The shank should show its central tendon seam as a translucent core surrounded by fibre — this is what people are looking for in the bowl.

Slicing warm beef is the reason home versions look ragged. Hot muscle is soft and smeary, and the blade tears it rather than cutting it. Chilled, the fat and the gelatin firm up and the fibres hold together, and a sharp knife will take slices thin enough to see light through.`,
      tip: `Slicing against the grain is not aesthetics, it is mechanics. Muscle fibres run in long parallel bundles and they are strong along their length. Cut with the grain and the tooth has to shear through fibres that are metres long in miniature — the meat eats tough regardless of how well you cooked it. Cut across, and every fibre is already severed into a 2 mm segment; the tooth only has to break the weak connective tissue between them. The same cut of beef, cooked identically, can be tender or leathery based purely on the angle of the knife.`,
    },
    {
      title: 'Blanch the noodles for seconds, not minutes',
      description: `Bring a separate pot of water to a boil — NOT the broth. Drop the fresh bún in for 10-20 seconds, just until heated through and loosened, then lift straight into the bowls.

Fresh thick bún is already cooked. It needs warming and separating, nothing more. Boiled for two minutes it swells, goes soft, loses its chew, and starts shedding starch.

And it must be a separate pot. Blanching noodles in the broth would cloud it with starch — which is exactly what cháo canh does on purpose one district away, and exactly what this bowl is built to avoid. Two Hà Tĩnh dishes, opposite rules, and both correct.`,
      tip: `The chew is the whole reason for the Đức Thọ noodle and it comes from the fermentation. Two to three days of lactic fermentation in the rice slurry acidifies it to around pH 4, which partially hydrolyzes the rice protein holding the starch granules together. The starch then gelatinizes into a denser, more cohesive, more elastic gel — chewier and slightly translucent — and the lactic acid leaves a faint clean sourness behind. It is the same process that makes bánh canh, bánh đúc and countless other fermented rice products across Southeast Asia, and it is why an industrial noodle made from dry flour in an afternoon never has the same bite.`,
    },
    {
      title: 'Build the bowl — broth boiling, pepper at the table',
      description: `Divide the noodles between four deep bowls. Lay the sliced shank, brisket and tendon over the top. Scatter with scallion whites, then ladle the broth over — it must be at a rolling boil in the pot when it goes into the bowl, hot enough to visibly steam and to cook the raw onion slices on contact.

Finish with scallion greens, coriander, rau răm, the soaked onion, and a heavy crack of black pepper. Serve the bean sprouts, lime and chilli on the side, and a saucer of neat fish sauce and chilli for dipping the beef.

Taste the broth before you add anything. In Đức Thọ, a first-timer reaching for the chilli before tasting is a small social event, and it is not entirely a joke: the whole bowl is built on the assumption that you want to taste beef, pepper and noodle, and each thing you add to it takes something away.`,
      tip: `Serve the beef with a saucer of neat fish sauce and chilli, and understand why: the broth is seasoned for drinking, not for seasoning meat. Sliced poached beef is mild and needs a direct hit of salt and heat, which the broth cannot supply without becoming undrinkable. The same principle governs the fish in canh chua and the chicken in a Delta hotpot — the protein gets its own condiment, the broth gets its own balance, and the two seasoning systems stay separate. Once you have seen it, you cannot unsee it: it is everywhere in Vietnamese cooking.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
