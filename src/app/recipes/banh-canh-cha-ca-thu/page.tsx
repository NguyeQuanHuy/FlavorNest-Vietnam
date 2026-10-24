'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-canh-cha-ca-thu',
  title: `Bánh Canh Chả Cá Thu (Thick Noodle Soup with Hand-Pounded Mackerel Cake)`,
  subtitle: `The same hand-pounded mackerel paste that made the bún quậy balls and the cơm tấm cake, now shaped into rough dollops and dropped directly into a simmering fish broth alongside fat, chewy, hand-cut bánh canh noodles. The island's third mackerel dish, the one where the paste and the broth and the noodle meet in the simplest possible bowl.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-canh-cha-ca-thu.jpg',
  intro: `Three recipes into the Phú Quốc mackerel file and the paste has appeared in three different formats: balls poached in the bún quậy, a pan-fried cake on the cơm tấm, and now — the most casual, the most home-cooking, the most Phú Quốc — rough dollops of paste dropped straight from a wet spoon into a simmering pot of bánh canh. No shaping. No frying. No pretence. A spoon scoops the cold paste, a flick of the wrist drops it into the broth, and the broth poaches it in three minutes into an irregular, cloud-shaped, springy-soft dumpling that looks like nothing from a factory and tastes like the sea ran through a kitchen.

Bánh canh chả cá thu is the island's home bowl — the thing a Phú Quốc mother makes on a Tuesday, from the mackerel her husband brought back that morning, with the noodles she rolled while the broth simmered. It is not a restaurant dish and it is not a stall dish (though some stalls make it); it is the bowl that sits on the family table at noon, steaming, full of fat white noodles and pale fish dumplings in a clear broth that smells of the ocean and of ginger, and it is eaten with a spoon in one hand and a pair of chopsticks in the other, in silence or in conversation, without ceremony.

The noodle here is the standard southern bánh canh — rice flour and tapioca starch, scalded with boiling water, kneaded and rolled, cut thick and irregular — the same formula this collection has deployed in Trảng Bàng, Bến Có and Nam Phổ. What changes is the broth: not pork-bone, not chicken, but fish — mackerel bones and heads simmered quickly, the way the bún quậy broth was, with ginger and a knob of turmeric for the golden tinge that marks every Phú Quốc fish soup. The turmeric is the island tell: mainland bánh canh is white-brothed; Phú Quốc's is gold, because the island puts turmeric in its fish broth the way the north puts ginger in its chicken broth — reflexively, without discussion, as a matter of local grammar.

The bowl arrives: gold broth, white noodles, pale dumplings, a scatter of scallion and fried shallot, a crack of black pepper. It is one of the plainest bowls in this collection and one of the most satisfying, because every ingredient is fresh, every flavour is clean, and the paste — the same paste, the same mackerel, the same salt-and-pound — has now demonstrated, across three dishes, that a single technique applied to a single fish can produce a ball, a cake and a dumpling, and each one eats differently in a different format. The paste is a module. The format is the variable. And the island, which has one fish and one technique, has built a cuisine from the permutations.`,
  ingredientSections: [
    {
      title: 'The chả cá dollops',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'fresh mackerel fillet, skinned, pin-boned, patted dry',
          note: `Same fish, same technique, third format. Pound or process with salt to a cohesive paste, add ice, starch, pepper, fish sauce. Chill. This time no shaping: wet spoons drop rough dollops directly into the simmering broth.`,
        },
        { amount: 6, unit: 'g', name: 'fine salt (1.5%)' },
        { amount: 1, unit: 'tbsp', name: 'tapioca starch' },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'ground white pepper' },
        { amount: 1, unit: 'tsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'crushed ice' },
      ],
    },
    {
      title: 'The noodles',
      items: [
        { amount: 250, unit: 'g', name: 'rice flour (bột gạo)' },
        { amount: 100, unit: 'g', name: 'tapioca starch (bột năng)', note: `A higher tapioca ratio than the Bến Có version — about 40%, giving a chewier, more translucent, more slippery noodle that the Phú Quốc palate prefers in a fish broth. The fish broth is thinner than a pork broth, and the noodle needs more body to hold against it.` },
        { amount: 250, unit: 'ml', name: 'boiling water, approximately' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The broth',
      items: [
        { amount: 500, unit: 'g', name: 'mackerel bones, heads and trimmings', note: `Rinsed clean of blood. Simmered 30-35 minutes — no longer.` },
        { amount: 1.5, unit: 'L', name: 'water' },
        { amount: 1, name: 'yellow onion, halved' },
        { amount: 20, unit: 'g', name: 'ginger, bruised' },
        {
          amount: 1,
          unit: 'tsp',
          name: 'ground turmeric (or 15 g fresh turmeric, pounded)',
          note: `The Phú Quốc colour — it turns the fish broth from pale to gold and adds a faint earthy bitterness under the ginger. Mainland bánh canh does not use turmeric in the broth; Phú Quốc does, and the gold is the tell.`,
        },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The bowl',
      items: [
        { amount: 4, name: 'scallions, sliced' },
        { amount: 3, unit: 'tbsp', name: 'fried shallots' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        { amount: 50, unit: 'g', name: 'rau răm, whole sprigs' },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 3, name: 'bird\'s-eye chilies, sliced, in fish sauce' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the golden fish broth — 30 minutes, turmeric in from the start',
      description: `Rinse the mackerel bones and heads until the water runs clear. Put them in a pot with the water, onion, ginger and turmeric. Bring to a simmer and skim — the first skim at 3 minutes removes the bulk of the scum, and two more skims at 10 and 20 minutes clean the rest.

Simmer 30-35 minutes. Strain through a fine sieve. The broth should be clear, golden from the turmeric, and taste clean-sweet-marine with ginger warmth and a faint turmeric earthiness. Season with fish sauce, sugar and salt.

Discard the bones — they have given everything in 30 minutes, and past 40 they give bitterness. A fish broth is a sprint.`,
      tip: `Turmeric goes in at the start rather than at the end because its curcumin is fat-soluble and needs the fish bones' rendered lipid to disperse into the broth. Added to a strained, fat-free liquid, turmeric sits as insoluble particles that settle to the bottom and contribute colour to the last bowl but not to the first. Added at the start, curcumin dissolves into the lipid that the simmering bones release, and the lipid disperses the colour uniformly — every ladleful is the same gold. Fat is the delivery vehicle, and the bones provide it.`,
    },
    {
      title: 'Make and cut the noodles — thick, chewy, within the hour',
      description: `Mix the rice flour, tapioca starch and salt. Pour in the boiling water gradually, stirring hard. Add the oil and knead 5-6 minutes into a smooth, firm, faintly translucent dough.

Roll on a starch-dusted surface to 5-6 mm thick — a fat noodle. Cut by hand into irregular batons about 1 cm wide and 8 cm long. Dust with starch, shake apart.

Drop them into a separate pot of boiling water 4-5 minutes before serving — done when they float, turn translucent, and feel slippery-chewy. Drain and divide into bowls.

Use within the hour. The 40% tapioca ratio gives this noodle a more dramatic translucence and a chewier, more elastic bite than the lower-tapioca versions in this collection — the noodle you want when the broth is a light fish stock rather than a heavy pork-bone, because the noodle provides the body the broth does not.`,
      tip: `The noodle's tapioca ratio is calibrated to the broth's weight, and this principle runs through every bánh canh in the collection. A heavy, gelatin-rich pork broth (Bến Có, Trảng Bàng) can support a softer, lower-tapioca noodle because the broth provides the body. A light, lean fish broth (this dish) needs a chewier, higher-tapioca noodle because the broth does not — the noodle must carry the textural weight the broth declines to. Same dough formula, different ratio, different bowl. The noodle is tuned to its broth, not to a universal standard.`,
    },
    {
      title: 'Pound the paste and drop the dollops — no shaping, straight into the broth',
      description: `Pound or process the mackerel to the same cohesive paste as the previous two recipes. Chill.

Bring the strained, seasoned fish broth back to a gentle simmer. Dip two spoons in water. Scoop a rough dollop of paste — about 20-25 g, the size of a large walnut — with one spoon, and use the other spoon to push it off into the simmering broth. The dollop sinks, pauses, then rises in 2-3 minutes as the protein sets and the trapped air inside expands.

Drop all the dollops in — 16-20 from the batch — spacing them so they do not fuse. They poach 3-4 minutes total: done when they float, feel springy-firm when pressed with a spoon, and have turned from translucent-pink to opaque-white.

The dollops will be irregular, cloud-shaped, with dimples and ridges — and this is correct. The roughness is the home-cooking signature that distinguishes the bánh canh version from the smooth, rounded bún quậy balls, and it is also functional: the uneven surface traps more broth per bite than a smooth ball would, so each dollop carries a spoonful of gold broth inside its crevices.`,
      tip: `The spoon-drop method — two wet spoons, scoop and flick — is the technique this collection first documented in the Nam Phổ bánh canh with its shrimp-crab dollops, and it is the simplest possible way to get a paste from a bowl into a broth: no rolling, no shaping, no oiling of hands, and the result has the irregular, hand-made quality that factory balls cannot replicate. The wet spoon is the only trick — paste sticks to a dry spoon and tears when released; a wet spoon releases cleanly, and the dollop lands in the broth as a single, cohesive, lopsided mass. Wet, scoop, flick. Fifteen seconds per dollop. The whole batch is in the broth in five minutes.`,
    },
    {
      title: 'Assemble — noodle, dollops, golden broth, and the island\'s simplest bowl',
      description: `Divide the cooked, drained noodles between four deep bowls. Lift the poached dollops from the broth with a spider and distribute them — 4-5 per bowl, set on top of the noodles where they are visible and reachable.

Ladle the golden broth at a rolling simmer over the noodles and dollops — enough to submerge the noodles, with the dollops sitting half-proud above the surface. Scatter scallion, fried shallots and black pepper. Set a sprig of rau răm at the edge.

Serve with the lime wedges and the chili-fish-sauce saucer.

The bowl should be: gold broth, white noodles, pale cloud-shaped dollops, green scallion, tan shallot. It is the plainest bowl in the Phú Quốc collection — no coconut, no mắm, no multi-protein architecture — and its plainness is its beauty. One fish, one broth, one noodle, one paste. The island's economy reduced to a soup.

Eat within five minutes. The noodles absorb broth fast — the high-tapioca formula is porous and thirsty — and a bowl at ten minutes has fat noodles in a diminished puddle. The bowl is a five-minute experience, and the island's stalls serve at a pace that assumes it.`,
      tip: `This is the third mackerel-paste dish in the Phú Quốc collection, and setting all three side by side completes the argument: one fish, one paste, one technique (salt-pound-chill), and three formats that eat completely differently. The bún quậy ball is smooth, springy, broth-soaked, eaten in a stirred-starch soup. The cơm tấm cake is thick, crust-wrapped, pan-fried, eaten dry on a rice plate. The bánh canh dollop is rough, irregular, cloud-soft, eaten in a golden fish broth. Same myosin gel, three geometries, three cooking methods, three textures, three bowls. The paste is the constant; everything else is the variable. And the island, which has one fish in abundance and one technique in its muscles, has generated an entire noodle-soup-and-rice-plate cuisine from the permutations of that single starting point. Constraint is not a limitation on the kitchen. It is the kitchen's organising principle, and Phú Quốc's mackerel paste is the most elegant demonstration of the principle this collection has found.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
