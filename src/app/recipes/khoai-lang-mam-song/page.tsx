'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'khoai-lang-mam-song',
  title: `Khoai Lang Mắm Sống (Steamed Sweet Potato with Raw Fermented Fish)`,
  subtitle: `Purple sweet potatoes from the Binh Tan fields, steamed until they crack open, eaten with uncooked fermented fish pounded with garlic, chili and lime — the field lunch of Vinh Long, and one of the very few Vietnamese dishes served with the mam still raw.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '45 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/khoai-lang-mam-song.jpg',
  intro: `Khoai lang mam song — steamed sweet potato with raw fermented fish — is the dish that Vinh Long farmers eat standing at the edge of their own fields, and the dish that Vinh Long families abroad describe when asked what they actually miss. Binh Tan district is the sweet potato capital of Vietnam: several thousand hectares of alluvial soil between the Tien and Hau rivers, planted almost entirely with khoai lang tim Nhat, the deep-purple Japanese variety. During harvest the fields fill with workers, and lunch is whatever the field produces — potatoes pulled from the row and steamed, eaten with a bowl of mam brought from home. Nothing is cooked twice. Nothing is disguised.

The sweet potato has to be the purple tim Nhat, or something structurally like it, and the reason is starch. Vinh Long's alluvial soil is light, sandy and well-drained, and it produces a tuber that is dense and dry rather than watery — high in amylose, low in moisture — which steams into a floury, chestnut-like crumb rather than a wet, stringy one. That dryness is not incidental: it is the structural counterweight to the mam. A wet, sugary orange sweet potato collapses against a salt-heavy fermented fish paste and the mouthful turns cloying. A dry, floury purple one absorbs it. In Europe, the purple-skinned white-fleshed Japanese sweet potato sold in Asian supermarkets (labeled satsumaimo or khoai lang Nhat) is the correct substitute; the common orange sweet potato is the wrong tuber for this dish.

Mam song means the mam is served uncooked, and this is the whole provocation of the dish. Mam ca linh or mam ca sac — Mekong river fish salted and fermented for six months or more — has already been transformed: the fish protein has been broken down by its own enzymes and by halophilic bacteria into free amino acids, principally glutamate, which is why a spoonful of raw mam tastes of savoriness so concentrated it is almost painful. Cooking it, as most of Vietnam does when making mam kho or mam chung, drives off the volatile amines that carry the ferment aroma and mellows the whole thing. Vinh Long refuses that mellowing. The mam is pounded raw with garlic, chili, sugar and lime — the acid does the softening instead of heat, and the aroma stays fully intact. It is not a cooking technique. It is a declaration of confidence in the ferment.

The plate is assembled, never mixed. Steamed potatoes still cracking open at one end, a bowl of pounded raw mam, thin slices of boiled pork belly, a mound of raw vegetables — cucumber, star fruit, green banana, perilla, and whatever herb the garden gave that morning. You break a piece of hot potato with your fingers, press it against a slice of pork belly and a herb leaf, and swipe the lot through the mam. The heat of the potato lifts the aroma of the raw ferment as it touches it. That single second — hot starch meeting cold, raw, six-month mam — is the dish, and there is no version of it that survives being made in advance.`,
  ingredientSections: [
    {
      title: 'The sweet potatoes',
      items: [
        {
          amount: 800,
          unit: 'g',
          name: 'purple Japanese sweet potatoes (khoai lang tim Nhat)',
          note: `Choose small, evenly-sized tubers 5-7 cm thick — they steam through without the outer layer turning to mush. In Europe: the purple-skinned Japanese variety from any Asian supermarket. Do NOT use the common orange sweet potato; it is too wet and too sweet and will turn the mouthful cloying against the mam. Scrub, but leave the skin on.`,
        },
      ],
    },
    {
      title: 'The raw mam',
      items: [
        {
          amount: 150,
          unit: 'g',
          name: 'mam ca linh or mam ca sac (fermented Mekong fish), boned',
          note: `Sold in jars in Vietnamese groceries across Europe — look for a deep russet-brown color and firm, intact fillets, not grey mush. Pull out the spine and larger bones with your fingers before pounding. Mam ca sac is milder and the safer starting point; mam ca linh is the Delta original and considerably more assertive. Anchovy-based mam nem is a distant fallback but changes the dish.`,
        },
        { amount: 5, name: 'cloves garlic', note: `Pounded, not chopped — crushing ruptures the cells and releases allicin, which is what tames the ferment aroma.` },
        { amount: 3, name: 'red bird\'s-eye chilies' },
        { amount: 1.5, unit: 'tbsp', name: 'sugar', note: `The Delta sweetness. It is not there to make the mam sweet — it is there to round off the salt spike so the ferment reads as savory rather than aggressive.` },
        { amount: 2, unit: 'tbsp', name: 'fresh lime juice', note: `The acid does the work that heat does in every other mam preparation. Add it last, off the pestle, and taste before adding more.` },
        { amount: 1, unit: 'tbsp', name: 'finely julienned young ginger', note: `Optional but traditional in Vinh Long — the gingerol cuts directly across the fermented-fish amines.` },
        { amount: 2, unit: 'tbsp', name: 'roasted peanuts, crushed (optional)' },
      ],
    },
    {
      title: 'The plate',
      items: [
        { amount: 300, unit: 'g', name: 'pork belly, in one piece', note: `Boiled and sliced paper-thin. The fat is not decoration: it coats the tongue and buffers the salt of the raw mam, which is why no Delta table serves mam song without it.` },
        { amount: 1, name: 'cucumber, cut into thin batons' },
        { amount: 2, name: 'star fruit (khe), thinly sliced', note: `Its sharp oxalic sourness is the classic partner to raw mam. If unavailable, use thin slices of very tart green apple.` },
        { amount: 1, name: 'green (unripe) banana, thinly sliced', note: `Soak in lime water so it does not brown. The tannins scrub the palate between bites.` },
        { amount: 100, unit: 'g', name: 'mixed raw herbs: tia to, rau ram, hung que, kinh gioi', note: `Perilla (tia to) is the one that matters most — its anise-cumin note is what the Delta pairs with raw ferment.` },
        { amount: 1, name: 'head of soft-leaf lettuce' },
      ],
    },
  ],
  steps: [
    {
      title: 'Boil and press the pork belly — 25 minutes, then chill',
      description: `Put the pork belly in cold water with a pinch of salt and a smashed shallot, bring to a bare simmer, and cook 22-25 minutes for a piece 4-5 cm thick. The surface should barely tremble — a hard boil forces the muscle fibers to contract and squeeze out fat, and the slices turn dry and chalky.

It is done when a skewer through the thickest point meets no resistance and the juice runs clear. Lift it straight into iced water for 5 minutes: the shock firms the fat and makes paper-thin slicing possible.

Slice across the grain as thinly as your knife allows — each slice should show a clear stripe of fat. Thick slices are the most common mistake and they make the fat read as heavy rather than as a buffer.`,
      tip: `The iced water plunge is doing real work. Pork fat is soft and smeary at room temperature and shreds under a blade; chilled to around 5°C it becomes firm enough to shear cleanly. This is why the boiled-pork plate at every Mekong mam table arrives cold while the potatoes arrive hot — a temperature contrast that started as a knife problem and became the flavor structure of the dish.`,
    },
    {
      title: 'Steam the sweet potatoes — 30-35 minutes, skin on',
      description: `Set the scrubbed potatoes whole, skin on, in a steamer over rapidly boiling water. Steam 30-35 minutes for tubers 5-7 cm thick. Do not boil them in water — sweet potato flesh is porous and will waterlog, and a waterlogged potato cannot stand up to the mam.

They are ready when a skewer slides through the thickest point with no resistance and, more tellingly, when one or two of the potatoes have split along their length and the exposed flesh looks dry and floury rather than glossy and wet. That crack is the doneness signal every Binh Tan farmer reads.

Understeamed, the center stays hard and faintly chalky with a raw-starch taste. Oversteamed past 40 minutes, the cell walls break down completely and the potato turns to paste, losing the crumb that carries the mam.`,
      tip: `Steaming rather than boiling is about starch gelatinization with minimal water uptake. Sweet potato starch granules gelatinize around 70-75°C, absorbing whatever moisture is available — in a pot of water they take on far more than they need, and the result is heavy and wet. In steam, they gelatinize using the tuber's own moisture, and the flesh sets into a dry, chestnut-like crumb. It is also why the skin stays on: it is a moisture barrier for the same 35 minutes.`,
    },
    {
      title: 'Pound the raw mam — mortar, not blender',
      description: `Pound the garlic and chilies to a rough paste in a mortar. Add the boned mam and pound again — you want the fillets broken down into a coarse, textured paste with visible flecks of fish, not a smooth puree. Work in the sugar until it dissolves into the paste, then stir in the lime juice off the pestle. Fold in the ginger and peanuts last.

Taste it now, and taste it on a piece of hot potato rather than off a spoon — raw mam alone will read as violently salty and tell you nothing. On the potato it should land as savory, faintly sweet, sour at the finish, with the ferment aroma rising rather than the salt.

If it overwhelms the potato, add lime and sugar in small increments — never water, which flattens the ferment and does nothing for the salt.`,
      tip: `Use a mortar, not a food processor. A blender shears the fish protein into a homogeneous emulsion and simultaneously whips air into it — the exposed amines oxidize within minutes and the mam turns sharp and metallic. Pounding compresses and tears; it keeps the ferment intact and the surface area low. This is the single technique that separates good mam song from the version that convinces people they dislike mam.`,
    },
    {
      title: 'Assemble the plate and eat while the potatoes are still steaming',
      description: `Split the hot potatoes lengthwise with your fingers and pile them on one side of a large platter. Arrange the cold pork belly slices, the cucumber, star fruit, green banana, herbs and lettuce around them. The mam goes in a small bowl in the center — communal, never portioned out.

The correct bite: tear a piece of hot potato, lay it on a slice of cold pork belly with a perilla leaf and a slice of star fruit, and swipe the whole thing through the mam. Eat it immediately. Do not build the bite in advance and do not mix anything into the mam bowl.

Eat within 15 minutes of the potatoes coming out of the steamer. A cold potato against raw mam is a different and much lesser dish — the aroma never lifts, and the salt sits flat on the tongue with nothing to carry it.`,
      tip: `The reason this only works hot is volatility. The aroma compounds in six-month mam — trimethylamine, short-chain fatty acids, the whole fermented-fish profile — have low vapor pressure at room temperature and high vapor pressure above 50°C. Cold mam on a cold potato smells of almost nothing. Cold mam on a potato straight from the steamer releases the entire ferment upward into the nose at the exact moment it enters the mouth. The mam is not a dipping sauce. The heat of the potato is the cooking.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
