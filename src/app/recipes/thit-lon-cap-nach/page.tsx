'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'thit-lon-cap-nach',
  title: `Thịt Lợn Cắp Nách (Armpit Pig — The Black Pig of Bắc Hà Market)`,
  subtitle: `The highland's smallest pig — a black-skinned, bristle-coated, free-range miniature breed so small the farmer carries it to market under one arm (cắp nách = tucked under the armpit). Roasted whole over charcoal until the skin is shattering-crisp and the flesh, dense with the flavour of a pig that foraged on wild tubers and corn scraps for a year, tastes like pork used to taste before pork forgot what it was.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '3 hr',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/thit-lon-cap-nach.jpg',
  intro: `Lợn cắp nách — the "armpit pig," the "underarm pig" — is the name the highland markets give to the small, black, indigenous pig breeds of the far northern provinces: Lào Cai, Hà Giang, Lai Châu, Sơn La. The name is literal: these pigs are small enough — 10-15 kg at market weight, about the size of a large dog — that the farmer who raised them carries them to the weekly market tucked under one arm, the pig's legs tied, its snout pointed forward, its body wedged against the farmer's ribcage. The image is the icon of every highland market photograph, and the pig is the icon of every highland table.

The breed is various — Mường Khương black pig, Lũng Pù pig, Sapa black pig, and other unregistered local landraces — but the qualities are shared: small body, black skin, bristly coat, long snout, slow growth (12-18 months to market weight, compared to 5-6 months for a commercial white pig), foraging diet (the pig roams the village, eating corn scraps, sweet-potato peelings, wild tubers, fallen fruit and whatever it finds in the forest edge), and a flesh that is darker, firmer, more marbled and more intensely flavoured than any commercial pork available in the lowland.

The flavour difference is not subtle. A highland black pig raised for 14 months on foraged food and corn has an intramuscular fat (marbling) content roughly double that of a 5-month commercial white pig, and the fat's composition is different: more oleic acid (the monounsaturated fatty acid that makes olive oil taste rich), more omega-3 (from the wild greens in the pig's diet), and more of the volatile compounds (branched-chain fatty acids, skatole at low levels, and specific lipid-oxidation products) that the tongue reads as "porky" and that commercial pig breeds, raised on standardised feed in climate-controlled barns, have largely lost. The black pig tastes of pork the way an heirloom tomato tastes of tomato: the original flavour that industrial agriculture bred out in exchange for speed and scale.

Bắc Hà — a small town in Lào Cai province, 80 km northeast of Sapa, famous for its enormous Sunday market where the Flower H'Mông, Tày, Dao and Phù Lá communities gather to trade — is the market most associated with the lợn cắp nách, because the Sunday market's livestock section is where the pigs change hands: the farmer carries them in, the buyer inspects them (pressing the back fat, checking the teeth for age, feeling the belly for the firmness that indicates a foraging diet rather than a grain-fed one), and the transaction happens by negotiation, pig still under arm.

The cooking — once the pig is home — follows the highland's default whole-animal protocol: roasted over charcoal (the whole pig on a spit or cut into large pieces on a grate), or boiled (the Tày preference for celebration meals, producing a broth and a platter of sliced meat), or — the most theatrical — roasted in a pit with hot stones (the oldest method, pre-dating the metal spit). This recipe documents the charcoal roast, which produces the most dramatic and most flavourful result: shattering-crisp skin (the black pig's thick skin crisps to a crackle that no commercial pig's thin skin can match) over dense, marbled, richly porky flesh.`,
  ingredientSections: [
    {
      title: 'The pig',
      items: [
        {
          amount: 1,
          name: 'whole black pig or a 3-4 kg section (leg, shoulder or belly), skin-on',
          note: `The highland black pig — small, dark-skinned, heritage breed, 12-18 months old, foraged diet. In Europe: Ibérico, Berkshire, Mangalica or any heritage breed with dark skin, high marbling and slow growth is the closest analogue. Commercial white pork from a 5-month pig on industrial feed is a fundamentally different ingredient — it will cook correctly but it will not taste like the highland's pig.`,
        },
      ],
    },
    {
      title: 'The rub',
      items: [
        { amount: 2, unit: 'tbsp', name: 'coarse salt' },
        { amount: 1, unit: 'tbsp', name: 'mắc khén, toasted and ground' },
        { amount: 20, unit: 'g', name: 'ginger, grated' },
        { amount: 4, name: 'cloves garlic, pounded' },
        { amount: 1, unit: 'tbsp', name: 'rice wine' },
        { amount: 1, unit: 'tsp', name: 'five-spice powder (optional)' },
      ],
    },
    {
      title: 'For roasting',
      items: [
        { amount: 3, unit: 'kg', name: 'charcoal' },
        { amount: 1, name: 'spit or large grill grate' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 1, name: 'saucer of muối mắc khén' },
        { amount: 200, unit: 'g', name: 'rau sống: lettuce, rau mùi, húng quế' },
        { amount: 4, name: 'bowls of xôi (sticky rice) or cơm' },
        { amount: 1, name: 'bottle of corn wine' },
      ],
    },
  ],
  steps: [
    {
      title: 'Score the skin, rub the spices, let the salt draw — 30 minutes',
      description: `If using a whole small pig: scald with boiling water and scrape the bristles (or singe over flame). If using a section: ensure the skin is clean and bristle-free.

Score the skin in a diamond pattern — cuts 1 cm apart, cutting through the skin and into the fat but NOT into the flesh. The scores serve the same purpose as the cá chiên's scores: they are the crunch-and-flavour-retention architecture, each diamond crisping independently during roasting and each crevice holding the rub's spice.

Rub the salt-mắc-khén-ginger-garlic paste over every surface — into the scores, inside the cavity (if whole), across the flesh side. Let sit 30 minutes — the salt draws moisture to the skin's surface, and the subsequent roasting drives that moisture off as steam, which is the mechanism that produces crackling: dry skin + high heat = crisp; wet skin + high heat = leathery.`,
      tip: `The black pig's skin is thicker than a commercial pig's (roughly 3-4 mm vs 1-2 mm) because the breed developed in cold highland conditions where thicker skin provides better insulation. The thicker skin takes longer to crisp but produces a LOUDER, MORE SHATTERING crackle when it does — the increased mass of collagen and keratin in the thicker skin produces a more rigid, more glass-like post-dehydration structure. Commercial thin-skinned pork crackle is crispy; black-pig thick-skinned crackle is ARCHITECTURAL — it shatters in sheets, like breaking a ceramic tile, and the shatter carries a bass-note crunch that thin crackle cannot produce.`,
    },
    {
      title: 'Roast over charcoal — low and slow, skin-side to the fire, 2-2.5 hours',
      description: `Build a charcoal fire and let it burn to glowing embers. Set the pig (whole or section) on a spit or on a grate, skin-side facing the heat, 20-25 cm above the embers. For a whole pig: rotate the spit slowly, a quarter-turn every 15 minutes.

Roast 2-2.5 hours for a whole 10-12 kg pig, 1.5-2 hours for a 3-4 kg section. The temperature should be moderate — the highland roast is SLOW, not hot, because the dense, marbled, thick-skinned black pig needs time for the intramuscular fat to render and baste the flesh from inside, and for the collagen in the thick skin to fully convert to the glass-like crackle that defines the dish.

The skin progression: matte → glossy (the fat rendering underneath) → bubbling (the moisture flashing to steam) → golden → deep amber → shattering-crisp. If the skin darkens too fast: raise the spit. If it is still soft after 1.5 hours: lower it slightly and continue.

The flesh progression: raw-pink → cooking-grey → tender-white → falling (the marbled fat has rendered, the connective tissue has dissolved, and the meat is soft enough to pull apart with chopsticks).

The pig is done when: the skin shatters when tapped with a knife handle (a sharp, ceramic-tile crack, not a dull thud), the juices from a deep poke run clear, and the flesh at the thickest point pulls apart with no resistance.`,
      tip: `The black pig's higher intramuscular fat (roughly 8-12% vs commercial pork's 3-5%) is the self-basting mechanism that makes the slow roast work. As the fat renders at 130-140°C (reached in the flesh interior after roughly 45 minutes of roasting), it flows from the marbling channels into the surrounding muscle fibres, lubricating them and preventing the dry-out that lean commercial pork suffers during long cooking. The black pig at 2 hours is juicier than commercial pork at 1 hour, because the fat supply lasts longer. The marbling IS the timer's insurance: more fat = longer cooking without dryness = more collagen conversion in the skin = better crackle. The pig's genetics wrote the roasting instructions.`,
    },
    {
      title: 'Chop, dip in mắc khén salt, eat with sticky rice and corn wine',
      description: `Rest the roasted pig 15 minutes — the juices redistribute from the overheated surface back into the interior. Chop into pieces with a heavy cleaver — bone-in, irregular, each piece carrying skin (crackle), fat (rendered, golden), and flesh (dense, dark, porky).

Arrange on a wooden board or a banana leaf. Serve with muối mắc khén, sticky rice, rau sống and corn wine.

The bite: the crackle shatters first — a bass-note ceramic crack that the jaw feels before the tongue tastes. Then the rendered fat — warm, oleic-rich, coating the tongue in a film that carries the pork's volatile flavour compounds to the aroma receptors. Then the flesh — dark, dense, intensely porky, tasting of the corn the pig ate and the wild tubers it dug and the mountain air it breathed. The mắc khén dipping salt's numbing tingle arrives through the fat, and the corn wine's burn chases it.

This is the pig the highland eats at its celebrations — the pig that walked the village for a year, that the farmer carried to market under one arm, that the buyer inspected tooth by tooth and belly by belly, and that the cook roasted over charcoal for 2 hours with nothing but salt and mắc khén because the pig's own flavour was the seasoning and the cook's job was not to add to it but to reveal it. The pig is the recipe. The fire is the tool. The cook is the translator between the pig's life and the table's plate.`,
      tip: `Lợn cắp nách closes a theme the collection has argued since the gà Hồ of Bắc Ninh and the gà đồi of Tam Đảo: the best Vietnamese protein preparations are the simplest, because simplicity forces the ingredient's quality to the surface and removes every hiding place for mediocrity. The gà Hồ was boiled. The gà đồi was steamed. The bánh tráng cuốn thịt heo was boiled and sliced. And the lợn cắp nách is roasted with salt. Four preparations, four minimal techniques, and four proteins whose quality is the recipe. The argument is not that complex cooking is bad — the collection contains dozens of complex recipes. The argument is that the BEST ingredients deserve the LEAST technique, because every technique added is a layer between the eater and the animal, and the highland's black pig, raised for 14 months on a mountain, does not need a layer. It needs fire, and salt, and a table.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
