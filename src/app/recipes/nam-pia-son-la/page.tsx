'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'nam-pia-son-la',
  title: `Nậm Pịa Sơn La (Black Thai Offal Stew with Digestive Bitter)`,
  subtitle: `Buffalo tripe, intestine, liver and stomach — simmered in a broth made bitter by pịa: the partially digested grass extract from the buffalo's upper intestine, strained and added to the pot as a seasoning so bitter, so green and so profoundly unfamiliar that it divides every table into those who cannot swallow and those who cannot stop. The Black Thai's most challenging dish, and the one that most perfectly expresses a cuisine's right to taste like itself.`,
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '2 hr',
  rating: 4.5,
  baseServings: 6,
  heroImage: '/images/recipes/nam-pia-son-la.jpg',
  intro: `Nậm pịa is the dish that ends conversations about adventurous eating, because nậm pịa is not adventurous — it is native, and the people who eat it do not consider it an adventure any more than a Frenchman considers Roquefort an adventure. It is food. It is their food. And the ingredient that makes outsiders recoil — pịa, the partially digested grass-and-herb extract from the buffalo's upper small intestine — is, in the Thái đen understanding, not a waste product but a concentrate: a bitter, green, enzymatically active liquid that the buffalo's own digestive system has extracted from the mountain grasses and forest herbs the animal ate, and that carries, in its bitter complexity, the terroir of the highland meadow processed through the buffalo's own biochemistry.

The word pịa refers specifically to the semi-liquid contents of the upper small intestine — not the stomach (which contains rougher, less digested material) and not the lower intestine (which contains waste). The upper intestine's contents have passed through the stomach's acid bath and the bile duct's emulsification, and what remains is a dark-green, intensely bitter, partially hydrolysed extract of whatever the buffalo grazed on: mountain grasses, wild herbs, bamboo shoots, fern fronds, medicinal plants. The extract is strained through a cloth (to remove solid fibre), and the resulting liquid — dark, bitter, green-black, smelling of bile and forest floor — is added to the stew as a seasoning, typically 2-4 tablespoons per pot.

The bitterness is the point, and the bitterness is extreme — more bitter than any rau đắng, more bitter than any trám đen, more bitter than the most aggressive amaro in the Italian canon. It is bile-bitter (the buffalo's own bile acids are present in the extract) and plant-bitter (the alkaloids, tannins and saponins from the mountain grasses are present in concentrated form), and together they produce a bitterness that hits the back of the tongue and stays for a full minute after the spoonful is swallowed. The Thái đen do not apologise for this bitterness. They calibrate it. A well-made nậm pịa has enough pịa to register as bitter without enough to register as punishment, and the calibration — "vừa đắng" (just bitter enough) — is the cook's skill and the cook's pride.

The offal that swims in the pịa-bitter broth is the full spectrum: tripe (sách), small intestine (lòng non), liver (gan), stomach wall (dạ dày), and sometimes heart and lung. The offal is cleaned meticulously (the cleaning takes longer than the cooking), cut into pieces, and simmered with lemongrass, galangal, mắc khén and chili until tender. The pịa is added in the last 10-15 minutes — not at the start, because prolonged boiling drives off the volatile bitter compounds and dulls the bitterness the cook calibrated.

The dish is eaten at celebrations — buffalo slaughters, weddings, house-raisings, Tết — and only when a buffalo has been killed, because the pịa must be fresh (within hours of slaughter) and cannot be stored. It is the most transient ingredient in this collection: alive inside the buffalo at noon, extracted at the slaughter, strained, added to the pot, eaten by evening, and gone. No jar preserves it. No market sells it. The pịa exists for a few hours between the buffalo's death and the pot's completion, and the dish exists only because the slaughter and the cooking happen on the same day, in the same village, by the same hands.`,
  ingredientSections: [
    {
      title: 'The pịa',
      items: [
        {
          amount: 100,
          unit: 'ml',
          name: 'pịa (strained contents of the buffalo\'s upper small intestine)',
          note: `⚠️ The pịa must be from a healthy, grass-fed, freshly slaughtered buffalo — extracted within hours and strained through a fine cloth. It is NOT available commercially, NOT storable, and NOT replicable with any substitute. This recipe documents the tradition for readers who attend a Thái đen buffalo slaughter or who encounter the dish at a highland market. It is not a recipe that can be made in a city kitchen.\n\nFor those who want to approximate the flavour profile without the pịa: 2 tbsp of concentrated bitter-melon juice + 1 tsp of ox bile (available at Asian pharmacies as a traditional medicine ingredient) + a strong infusion of dandelion greens and chicory approaches the bitterness register without matching the complexity. Name the substitute honestly.`,
        },
      ],
    },
    {
      title: 'The offal',
      items: [
        { amount: 300, unit: 'g', name: 'tripe (sách), cleaned, blanched, sliced into strips' },
        { amount: 200, unit: 'g', name: 'small intestine (lòng non), cleaned, blanched, cut 5 cm', note: `Cleaned with salt and vinegar, turned inside out, scraped, blanched twice — the cleaning is the longest step and the most important.` },
        { amount: 200, unit: 'g', name: 'buffalo or beef liver, sliced thin' },
        { amount: 200, unit: 'g', name: 'stomach wall (dạ dày), cleaned, blanched, sliced' },
        { amount: 100, unit: 'g', name: 'buffalo or beef heart, sliced thin (optional)' },
      ],
    },
    {
      title: 'The broth and aromatics',
      items: [
        { amount: 1.5, unit: 'L', name: 'water or light bone stock' },
        { amount: 4, name: 'stalks lemongrass, bruised and knotted' },
        { amount: 30, unit: 'g', name: 'galangal, sliced and bruised' },
        { amount: 2, unit: 'tbsp', name: 'mắc khén, toasted and coarsely ground' },
        { amount: 5, name: 'cloves garlic, smashed' },
        { amount: 3, name: 'shallots, sliced' },
        { amount: 4, name: 'dried red chilies, toasted' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 30, unit: 'g', name: 'rau mùi tàu (sawtooth coriander), roughly chopped' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 6, name: 'bowls of hot steamed rice or cơm lam' },
        { amount: 100, unit: 'g', name: 'rau sống: lettuce, húng quế, rau mùi' },
        { amount: 4, name: 'green chilies, whole (bitten between spoonfuls)' },
        { amount: 1, name: 'bottle of rice wine' },
      ],
    },
  ],
  steps: [
    {
      title: 'Clean the offal — the step that takes longer than the cooking and matters more',
      description: `TRIPE: rub with coarse salt and vinegar, scrub under running water, blanch in boiling water 5 minutes, drain, rinse, repeat. The tripe should be white, odour-free and slightly chewy when done. Slice into 3 cm strips.

INTESTINE: turn inside out (use a chopstick to push), scrape the inner lining under running water, rub with salt and lime juice, rinse, blanch twice (5 minutes each, in fresh water each time). The cleaning must be thorough — any residual content produces an off-smell that the cooking cannot redeem.

LIVER: slice 5 mm thin. Soak in cold water with a splash of vinegar for 15 minutes to draw out residual blood. Drain, pat dry. The liver goes in last — it overcooks in minutes.

STOMACH: same cleaning as tripe. Slice 3 cm.

HEART: slice 5 mm thin. Brief soak in cold water. Goes in with the liver.

The total cleaning time: 30-45 minutes. The cooking time: 40 minutes. The ratio tells the story: nậm pịa's quality is 60% cleaning and 40% cooking, and a cook who shortcuts the cleaning produces a stew that smells of what it should not and tastes of the shortcut.`,
      tip: `The offal-cleaning protocol — salt-scrub, acid-soak, double-blanch — is the same protocol every offal cuisine in the world uses, from the French triperie to the Turkish kokoreç to the Cantonese lóu-séui. The principle is universal: offal tissues carry surface bacteria, residual bile and absorbed odour compounds that are NOT removed by cooking alone, because the compounds are bound to the tissue's surface proteins and require mechanical abrasion (scrubbing) and chemical stripping (acid, salt) to release. A blanched-but-unscrubbbed tripe is a clean-looking tripe that still smells of rumen. A scrubbed-and-blanched tripe is a clean tripe. The order matters: scrub first (mechanical removal), acid-soak second (chemical removal), blanch third (thermal kill). Reversing the order locks the odour compounds into the heat-denatured surface protein, where they become permanent.`,
    },
    {
      title: 'Build the stew — aromatics first, offal second, pịa last',
      description: `Heat oil in a heavy pot. Fry the garlic, shallots and dried chilies 1 minute. Add the lemongrass, galangal and mắc khén — stir 30 seconds, the aromatics blooming in the oil.

Add the cleaned tripe, intestine and stomach. Stir to coat in the aromatics. Pour in the water or stock. Bring to a simmer. Cover and cook 30-35 minutes — until the tripe and intestine are tender (a chopstick passes through with gentle resistance — fully tender, not rubbery, not dissolved).

Add the liver and heart slices. Simmer 3-4 minutes ONLY — the liver goes from silky to chalky in 2 extra minutes, and the heart goes from tender to tough.

Now the pịa: add 2-3 tablespoons of the strained liquid, stir gently, and taste. The bitterness should register immediately — a dark, green, bile-and-plant bitter that hits the back of the tongue and spreads. If it is too mild: add another tablespoon. If it is already at the edge of tolerance: stop. The calibration — vừa đắng — is the cook's judgment call, and it varies by table: a table of Thái đen elders wants more pịa than a table with guests from the lowland.

Season with fish sauce. Add the chopped rau mùi tàu. Simmer 5 more minutes with the pịa incorporated — long enough for the bitterness to integrate into the broth, not so long that the volatile bitter compounds cook off.`,
      tip: `The pịa's bitterness comes from two chemical families arriving simultaneously: BILE ACIDS (cholic acid, deoxycholic acid — the buffalo's own bile, secreted into the upper intestine during digestion, present in the pịa extract at detectable concentrations) and PLANT ALKALOIDS (from the mountain grasses and forest herbs the buffalo grazed on — including saponins from various Poaceae grasses, tannins from fern fronds, and potentially trace quantities of pharmacologically active alkaloids from any wild herbs in the animal's diet). The two bitterness sources taste different on the tongue — bile-bitter is metallic and sharp; plant-bitter is green and lingering — and together they produce a bitterness that is more complex and more multidimensional than any single bitter ingredient can achieve. The buffalo's digestive system is the extraction apparatus, and its diet is the ingredient list, and the pịa is the buffalo's own herbal infusion, made with its own bile as the solvent.`,
    },
    {
      title: 'Serve with rice, rice wine, and the understanding that bitterness is a flavour, not a mistake',
      description: `Ladle the nậm pịa into bowls — the offal pieces visible in the dark, aromatic, bitter broth, the lemongrass and galangal floating alongside. Scatter rau mùi tàu on top.

Serve with hot steamed rice (or cơm lam — the bamboo-tube rice from the same highland kitchen) and the green chilies for biting.

Eat: a spoonful of the broth first. The bitterness arrives — not immediately (the lemongrass and the mắc khén's numbing tingle delay it by a beat) but after 2-3 seconds, rising from the back of the tongue in a dark, green, bile-and-meadow wave that lasts a full minute. The rice chases it — the starch's neutral sweetness absorbs the bitterness and brings the palate back to centre. Then a piece of offal — tripe's chew, intestine's snap, liver's silky crumble — each carrying the broth's bitter-aromatic character in its cooked surface. Then the chili — bitten, the capsaicin's heat overriding the bitterness for 10 seconds before the bitterness returns. Then the rice wine — its clean ethanol burn cutting through everything.

The rhythm: bitter broth → rice reset → offal chew → chili override → wine cut → bitter broth again. The bitterness is the pulse, and everything else is the response to it, and the meal is a conversation between a flavour the lowland never uses and a cuisine that built a celebration around it.

Nậm pịa is the collection's most extreme-flavour dish — more extreme than the mắm cá u hotpot (which is heavy but not bitter), more extreme than the tiết canh (which is challenging but not bitter in THIS way). It is the dish that most aggressively asserts a minority cuisine's right to taste like itself rather than like what the majority considers acceptable, and the collection records it with the respect that assertion deserves.`,
      tip: `Bitterness is the least-used taste in modern global cuisine — most food cultures have spent centuries breeding, processing and cooking it OUT of their ingredients (detannifying wine, debitterising olives, blanching radicchio, peeling citrus pith). The Thái đen's nậm pịa does the opposite: it introduces bitterness deliberately, from a source that maximises it, and calibrates it to a level that the table's culture considers optimal rather than minimal. The dish is a philosophical statement as much as a culinary one: the highland's meadow grasses, processed through the highland's working animal, served at the highland's celebration table, tasting of the highland's own terroir in its most concentrated, most uncompromising, most unapologetically bitter form. The pịa is the meadow, digested. And the cook who adds it to the pot is saying: this is what our mountain tastes like. Take it or leave it. We will not dilute it.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
