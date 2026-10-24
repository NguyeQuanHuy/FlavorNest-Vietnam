'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'de-tai-chanh-huong-son',
  title: `Dê Tái Chanh Hương Sơn (Lime-Cured Rare Mountain Goat)`,
  subtitle: `Goat from the limestone hills on the Laos border — seared for thirty seconds, chilled hard, shaved translucent, and turned rare in lime juice. Tossed with lemongrass, galangal and roasted rice powder, wrapped in fig leaf, and eaten with fermented bean sauce and rice wine.`,
  category: 'APPETIZER',
  difficulty: 'Hard',
  totalTime: '1 hr 15 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/de-tai-chanh-huong-son.jpg',
  intro: `Hương Sơn is the western district of Hà Tĩnh, up against the Trường Sơn range and the Laos border, and it is limestone country: steep, dry, thin-soiled karst hills covered in scrub, wild herbs and hard grasses. Goats have been kept there for generations because nothing else does well on that ground, and the animal that comes off those hills is not the animal that comes off a farm. Hương Sơn goat is small, lean and dense-muscled, with a fine grain, dark red flesh and almost no subcutaneous fat, and it carries a distinct herbaceous, faintly resinous note that Hà Tĩnh people will tell you, correctly, comes straight from what it has been eating. It is terroir, in the most literal sense available in meat.

Tái means rare — the same word used for the raw beef slices dropped into a bowl of phở — and dê tái chanh is goat brought to rare not by heat but by acid. The leg meat is seared very briefly on the outside, chilled hard, shaved as thin as a leaf, and then dressed in lime juice, where it firms and turns from deep red to a pale rose-brown over about fifteen minutes. What you eat is somewhere between a carpaccio and a ceviche: raw in the middle, cured at the edges, seared on the outside surface, dense and faintly chewy, with an unmistakably clean goat flavour that no amount of cooking would leave intact.

The lean, herbaceous character of hill goat drives every other choice in the dish. Lean flesh has nowhere to hide, so the meat must be genuinely good; it also means the dressing has to supply the fat that the animal does not, which is why roasted peanut and sesame are folded in and why the sauce is thick rather than thin. The herbaceous note is not masked but doubled down on: lemongrass, galangal, ginger and lime leaf go in raw and finely shredded, and their citral and pinene notes run parallel to what the goat already tastes of. Then thính — coarsely ground roasted rice — is tossed through to absorb residual moisture, keep the slices separate, and lay a toasted, nutty layer underneath everything.

The dish is eaten wrapped in lá sung, the fig leaf that Hà Tĩnh puts under almost everything it eats raw, and dipped in tương bần — the fermented soybean sauce of the north — or in chao, fermented bean curd, depending on the household. And it is eaten with rice wine, standing, in company, at the start of a long evening. Dê tái chanh is a mồi nhậu dish and it is engineered to be one: intensely savoury, sharply acidic, texturally busy, and served in small quantities that make you want another. Nobody in Hương Sơn has ever eaten this as a course before something else. It is the something else.`,
  ingredientSections: [
    {
      title: 'The goat',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'goat leg meat (đùi dê), boneless, in one piece',
          note: `Leg, not shoulder — the leg is leaner, finer-grained and slices more cleanly. Young goat, and as fresh as you can buy it.

SAFETY, AND IT MATTERS: this is eaten rare. Buy from a butcher you trust, buy a whole intact piece rather than anything pre-cut or minced, keep it below 4°C at all times, and eat it the same day. Searing the exterior (step 2) is not decoration — the surface is where bacterial contamination lives on a whole muscle, and searing it is what makes the rare interior safe. Never skip it, and never do this with meat that has been cut, tenderized or ground. Pregnant people and anyone immunocompromised should not eat this raw.

In Europe: goat from a Turkish, halal or Greek butcher. Lamb leg works and is a genuinely good substitute, though it is fattier and milder.`,
        },
        { amount: 1, unit: 'tbsp', name: 'coarse salt and 2 tbsp rice wine (for the rub)', note: `Rub, rest 10 minutes, rinse, dry. The alcohol strips surface odour compounds that water alone cannot reach — standard practice for all game and goat in Vietnam.` },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (for the sear)' },
      ],
    },
    {
      title: 'The cure and the toss',
      items: [
        {
          amount: 5,
          name: 'limes (about 100 ml juice)',
          note: `Fresh only. The acid here is doing the cooking, and bottled lime juice is pasteurized, inconsistent in strength, and tastes of the bottle.`,
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'thính (roasted rice powder), coarsely ground',
          note: `Dry-toast raw rice grains over medium heat, stirring constantly, 8-10 minutes until deep golden and intensely nutty, then grind coarse — not to flour. It absorbs the last of the moisture, stops the slices clumping, and lays a toasted foundation under the whole dish. Make it fresh; it goes dusty and flat within days.`,
        },
        {
          amount: 2,
          name: 'stalks lemongrass, outer layers removed, sliced paper-thin',
          note: `Sliced across into the thinnest possible rings. Lemongrass with goat is a rule, not a preference — its citral binds directly to the branched-chain fatty acids that give goat its characteristic note.`,
        },
        { amount: 30, unit: 'g', name: 'galangal (riềng), finely julienned', note: `Not ginger. Galangal is sharper, more piney and more medicinal, and it is the correct partner for goat across all of north-central Vietnam. Use both if you like, but do not substitute.` },
        { amount: 20, unit: 'g', name: 'young ginger, finely julienned' },
        { amount: 4, name: 'kaffir lime leaves, stems removed, shredded to threads' },
        { amount: 4, name: 'shallots, sliced paper-thin' },
        { amount: 3, name: 'red chilies, sliced' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        { amount: 40, unit: 'g', name: 'roasted peanuts, coarsely crushed', note: `The fat the goat does not have. On a lean meat this is structural, not a garnish.` },
        { amount: 2, unit: 'tbsp', name: 'roasted sesame seeds' },
        { amount: 30, unit: 'g', name: 'rau răm and húng quế, roughly chopped' },
      ],
    },
    {
      title: 'The dipping sauce',
      items: [
        {
          amount: 4,
          unit: 'tbsp',
          name: 'tương bần (fermented soybean sauce)',
          note: `The northern fermented soybean sauce — malty, salty, deeply savoury. Some Hương Sơn households use chao (fermented bean curd) instead, mashed with a little of its brine, which is richer and creamier. Both are correct; both are better than fish sauce here, because a fermented bean sauce carries the earthiness that goat wants.`,
        },
        { amount: 2, unit: 'tbsp', name: 'roasted peanuts, pounded' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tbsp', name: 'lime juice' },
        { amount: 3, name: 'cloves garlic and 2 chilies, pounded' },
        { amount: 20, unit: 'g', name: 'galangal, pounded' },
      ],
    },
    {
      title: 'The platter',
      items: [
        {
          amount: 30,
          name: 'lá sung (fig leaves), young and soft',
          note: `The Hà Tĩnh wrapper. Furry, faintly astringent, slightly bitter — its tannins bind to the fat of the peanut and sesame the way tea does. If unavailable, young grape leaves or double-layered perilla are the nearest thing.`,
        },
        { amount: 20, name: 'sheets of rice paper (bánh tráng)' },
        { amount: 1, name: 'green (unripe) banana, thinly sliced, held in lime water' },
        { amount: 1, name: 'star fruit (khế), thinly sliced' },
        { amount: 1, name: 'cucumber, in batons' },
        { amount: 100, unit: 'g', name: 'herbs: tía tô, kinh giới, mơ lông, ngò gai' },
        { amount: 1, name: 'bottle of rice wine', note: `Structural. This is a mồi nhậu dish and Hương Sơn does not serve it any other way.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Rub, rinse, dry — and get the meat properly cold',
      description: `Rub the goat leg hard with coarse salt and rice wine, working into every surface. Leave 10 minutes, rinse under cold water, and pat completely dry.

The meat should be deep red, firm, and should smell clean and faintly herbaceous — not sour, not ammoniac, and not strongly of the barnyard. A strong smell at this stage means the meat is not fresh enough to eat rare. Cook it instead; do not proceed.

Put it in the freezer for 30 minutes before searing. Cold, firm meat sears cleanly and slices thin; room-temperature meat does neither.`,
      tip: `The characteristic goat note comes from branched-chain fatty acids — 4-methyloctanoic and 4-ethyloctanoic acid — concentrated in the fat and on the surface of the carcass. Salt scrubs and draws them out osmotically; ethanol dissolves the ones that are non-polar and then evaporates, taking them with it. This is why the rice-wine rub appears in every Vietnamese goat and game preparation and why skipping it leaves a persistent barnyard edge that the lime, for all its power, cannot cover.`,
    },
    {
      title: 'Sear the outside hard — 30 seconds a side, and no more',
      description: `Heat a heavy pan until it is genuinely smoking. Add the oil, then the whole piece of goat, and sear 30 seconds on each surface — including the ends — until the exterior is dark brown and firm.

Then stop. The interior must stay completely raw: cut into it and it should be deep red, cool, and unchanged more than 3 mm below the surface.

This sear is a food-safety step and it is the whole reason a rare goat dish is safe. Bacterial contamination on a whole intact muscle lives on the exterior; the interior of an intact muscle from a healthy animal is effectively sterile. Thirty seconds a side at high heat kills what is on the surface without cooking what is inside. This is exactly why you must never do this with meat that has been cut, minced, or mechanically tenderized — those processes drive surface bacteria into the middle, where no sear can reach them.`,
      tip: `The sear also does something for flavour that acid alone cannot. Maillard browning on the exterior generates the roasted, meaty, savoury compounds — pyrazines, thiophenes, furanthiols — that raw meat has none of, and when you shave the seared piece thin, every single slice carries a browned edge. The result is a slice that is raw in the middle and roasted at the rim, in the same mouthful. It is the same trick as a seared tuna tataki, and it is the reason dê tái chanh is more interesting than a straight carpaccio.`,
    },
    {
      title: 'Chill hard, then shave translucent — against the grain',
      description: `Wrap the seared goat and put it back in the freezer for 20-30 minutes, until the surface is firm and crystals are just starting to form but the centre is not frozen solid.

Slice across the grain, as thinly as your sharpest knife will allow — 1-2 mm, thin enough that light passes through. Each slice should carry a dark seared edge and a raw red centre.

Slicing this thin is impossible on soft meat and trivial on firm meat, which is what the freezer is for. And it must be against the grain: at this thickness, cutting with the grain leaves long unbroken muscle fibres and the meat eats like rubber bands, no matter how good the goat was.`,
      tip: `Thickness is not a stylistic choice here, it is the mechanism. Lime cures from the outside inward at a fixed rate, so a 2 mm slice cures through in fifteen minutes while a 6 mm slice would still be raw in the core after an hour — and by then the outside would have gone chalky. Thin also means every fibre is severed short, so dense muscle eats as tender. Thin slices, quick cure, tender bite. Thick slices, slow cure, chewy disappointment. The knife is doing more work in this recipe than the lime is.`,
    },
    {
      title: 'Cure in lime — 15 minutes, and watch the colour change',
      description: `Pour the lime juice over the sliced goat, toss to coat every slice, and leave 15 minutes, tossing once halfway.

Watch it: the deep red flesh pales to a rose-brown, the slices firm up and separate, and the surface goes from wet-glossy to matte. This is acid denaturation and it is visually identical to what heat would do, because it is chemically the same event.

Then drain the meat — squeeze it gently in a cloth — and KEEP the lime juice. It goes into the dipping sauce. Over-cure past 25 minutes and the goat turns pale, dry and grainy right through, and the whole point of tái is lost.`,
      tip: `Acid and heat denature protein by different routes and reach the same destination. Heat gives the molecule enough kinetic energy to shake its folded structure apart; acid protonates the amino acid side chains until the folded structure electrostatically repels itself apart. Either way the protein unfolds and reassembles into an opaque, firm network. The critical practical difference is that acid never stops — there is no removing the meat from the heat. Timing is the only control, and fifteen minutes is the number.`,
    },
    {
      title: 'Toss with thính and aromatics — dry, and at the last minute',
      description: `Toss the drained goat with the thính, lemongrass, galangal, ginger, lime leaf, shallot, chilli, sugar and pepper until every slice is coated in a fine dry layer and the slices fall apart cleanly. Fold in the peanuts, sesame and chopped herbs last.

The finished dish should look dry and nubbly, not wet — matte with rice powder, bristling with shredded aromatics. If it looks wet, drain it harder before adding more thính.

Do this immediately before serving. Thính starts absorbing moisture on contact, and fifteen minutes later it has gone from dry and nutty to pasty, and the slices have welded into a lump.`,
      tip: `Notice that every aromatic here goes in raw and goes in shredded, and none of them are cooked at any point. This is a cold dish, so there is no heat to release volatile terpenes from a bruised stalk of lemongrass — the aromatics have to be cut fine enough to release their oils mechanically, by the sheer act of being sliced, and then to sit in direct contact with acidic meat that will extract more from them over the next fifteen minutes. Shred everything to threads. A coarsely chopped lemongrass in a cold dish is just a piece of wood.`,
    },
    {
      title: 'Wrap in fig leaf, dip in fermented bean, drink rice wine',
      description: `Pound the sauce: garlic, chilli and galangal to a paste, then work in the tương bần, the pounded peanuts, the sugar and the reserved lime juice from the goat. It should be thick — a paste you spoon on, not a liquid you dip in.

Lay a fig leaf on a sheet of rice paper, add a herb leaf or two, a slice of green banana and one of star fruit, then a pinch of the goat. Spoon on the sauce, roll tight, and eat in one bite.

Serve everything at once and eat it fast, with rice wine, standing, in company. The goat has a working life of about twenty minutes before the residual lime dries it out and the thính turns to paste. In Hương Sơn this is not a problem anyone has ever had to think about, because the plate is empty long before that.`,
      tip: `The green banana and the star fruit are not garnish, and their job is worth naming. Green banana is loaded with tannins, which bind to and precipitate the fat and protein coating your tongue — they physically scrub the palate. Star fruit brings oxalic acid, a sharp, clean sourness quite different from lime's citric. Between them they reset the mouth after every bite, which is exactly what a dish this rich, this acidic and this aromatic needs if you are going to eat it for an hour. Every raw or fatty dish in north-central Vietnam comes with a palate-scrubber on the plate, and once you start looking for it you will find it every time.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
