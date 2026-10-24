'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'mam-thai-chau-doc',
  title: `Mắm Thái Châu Đốc (Sliced Fermented Fish Salad — Châu Đốc's Mắm Table)`,
  subtitle: `Mắm cá lóc — the whole fermented snakehead fish Châu Đốc is famous for — sliced thin, tossed with julienned green papaya, boiled pork belly, roasted peanuts, garlic, chili and sugar into a salad that is simultaneously raw (the mắm is never cooked), crunchy (the papaya's turgor), fatty (the pork's belly-fat), and carrying the full, unmasked, undiluted funk of fermented fish that no broth or stir-fry can match because the mắm is eaten AS IS — not dissolved, not simmered, not hidden, but sliced and served and tasted at full concentration.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.8,
  baseServings: 6,
  heroImage: '/images/recipes/mam-thai-chau-doc.jpg',
  intro: `Mắm thái — literally "sliced mắm" (thái = to slice) — is the dish that puts Châu Đốc's fermented fish on the table IN ITS MOST NAKED FORM. Where the bún cá Châu Đốc DISSOLVES the mắm into a broth (diluting it, softening it, taming its funk behind lemongrass and turmeric), and where the lẩu mắm SIMMERS the mắm into a hotpot base (heat-modifying its volatile profile, driving off the sharpest sulfur compounds), the mắm thái does NONE of those things: the fermented fish is taken from the jar, sliced with a knife, tossed with raw accompaniments, and served — no heat, no dilution, no apology.

The mắm used for mắm thái is not the paste-form mắm cá linh the lẩu mắm used (a thick, broken-down, paste-like product where the fish's identity has been obliterated by months of autolysis). It is MẮM CÁ LÓC NGUYÊN CON — a WHOLE fermented snakehead fish, preserved intact in salt for 6-12 months, the fish's BODY still recognisable as a fish: the head, the tail, the spine, the fillets — all present, all salt-cured, all fermented, but still holding their anatomical shape. The cook slices the fermented fillet from the bone the way a charcutier slices prosciutto from the leg: thin, against the grain, each slice showing the muscle's fibre structure (now salt-denatured, amber-brown, translucent-edged, dense) and the fermentation's colour gradient (the surface is dark brown, the interior is amber, and the very centre — if the fermentation was short, 6 months — retains a faint pink from residual unoxidised myoglobin).

The sliced mắm is EATEN RAW — raw in the sense that it is never heated, though it is not "raw" in the biological sense (the 6-12 months of salt-fermentation at 20-25% NaCl has denatured every protein, killed every pathogen, and converted the raw-fish's labile, perishable flesh into a stable, shelf-safe, amino-acid-rich, intensely flavoured product that is as "cooked" by chemistry as the nem chua is "cooked" by acid and the bò một nắng is "cooked" by sun). The sliced mắm's taste at full concentration is: SALT (the 20-25% NaCl, the first and most aggressive note), UMAMI (the free glutamate, at 800-1,200 mg/100g — the same concentration the mắm cá linh carried, here tasted directly rather than diluted in litres of broth), FUNK (the volatile sulfur compounds — dimethyl trisulfide, methanethiol — at their MAXIMUM undiluted intensity, arriving at the nose as a wave the uninitiated describe as "overwhelming" and the Châu Đốc native describes as "perfect"), and a surprising SWEETNESS (the free amino acids — glycine, alanine — that the autolysis produced, contributing a faint, savoury-sweet background that the salt and the funk otherwise mask).

The accompaniments are the mắm thái's MANAGEMENT SYSTEM — the ingredients that make the raw-mắm's full-intensity palatable by providing CONTRAST:

GREEN PAPAYA (đu đủ xanh): julienned, raw, turgor-crunchy, bland-sweet — the DILUTER. Each bite of mắm is accompanied by 3-4 strands of papaya, and the papaya's neutral, watery, crunchy mass absorbs the mắm's salt and distributes it across a larger surface area on the tongue, reducing the salt's per-point concentration and making the intensity tolerable.

PORK BELLY (thịt ba chỉ luộc): boiled, sliced thin — the FAT. The pork's rendered intramuscular fat coats the tongue and SEQUESTERS the mắm's water-soluble salt and glutamate in a lipid barrier (the same partition-coefficient fat-masking the canh cà đắng's pork belly performed on the bitter glycoalkaloids — here applied to salt and umami rather than to bitterness).

ROASTED PEANUTS: crushed — the CRUNCH and the SWEETNESS. The peanut's oil-rich, Maillard-toasted, protein-dense crunch provides the textural contrast the soft mắm and the crunchy-but-watery papaya both lack, and the peanut's faint sweetness rounds the salt.

GARLIC + CHILI + SUGAR + LIME: the SEASONING that converts the raw mắm from an ingredient into a dish — the garlic's ajoene sweetness, the chili's capsaicin heat, the sugar's sweetness rounding the salt, and the lime's citric acid brightening the funk.`,
  ingredientSections: [
    {
      title: 'The mắm',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'mắm cá lóc (whole fermented snakehead), the fillet portion, sliced thin against the grain',
          note: `From a whole fermented cá lóc — sold at Châu Đốc markets and at Vietnamese groceries specialising in Delta products. The fillet is sliced 2-3 mm thin, each slice showing the amber-brown, dense, salt-denatured muscle fibre. If whole mắm cá lóc is unavailable: 150 g mắm cá (any Vietnamese fermented fish paste, chunky style), broken into bite-sized pieces — the texture differs (paste vs sliceable fillet) but the flavour profile is similar.`,
        },
      ],
    },
    {
      title: 'The accompaniments — the management system',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'green papaya, julienned, soaked in cold water 10 min',
          note: `The DILUTER — bland, crunchy, watery. The cold-water soak crisps the julienne (the cold firms the cell walls' turgor) and removes the papaya's surface latex (papain enzyme, which is mildly irritating to the tongue in concentration).`,
        },
        { amount: 200, unit: 'g', name: 'pork belly, boiled 35 min, chilled, sliced thin (3 mm)', note: `The FAT — bland, rich, lip-coating. The pork is boiled PLAIN (no seasoning — the mắm provides ALL the seasoning the dish needs, and a seasoned pork would over-salt the combination).` },
        { amount: 60, unit: 'g', name: 'roasted peanuts, coarsely crushed' },
        { amount: 30, unit: 'g', name: 'toasted sesame seeds' },
      ],
    },
    {
      title: 'The dressing',
      items: [
        { amount: 4, name: 'cloves garlic, sliced thin' },
        { amount: 4, name: 'bird\'s-eye chilies, sliced' },
        { amount: 3, unit: 'tbsp', name: 'sugar', note: `MORE sugar than most savoury dressings — the sugar's job is to counterbalance the mắm's 20-25% salt. Without this much sugar, the salt is unpalatable. The Delta's sweet-in-savoury instinct is here deployed as a SALT-MANAGEMENT tool, not as a flavour preference.` },
        { amount: 3, unit: 'tbsp', name: 'lime juice' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce (optional — taste first; the mắm may provide enough salt already)' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 200, unit: 'g', name: 'rau sống: húng quế, rau răm, kinh giới, tía tô, lá é (if available)' },
        { amount: 100, unit: 'g', name: 'cucumber, sliced' },
        { amount: 100, unit: 'g', name: 'green banana, sliced, in lime water' },
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 1, name: 'plate of bánh tráng nướng (toasted rice paper) or bánh phồng tôm (shrimp crackers)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Slice the mắm, toss with papaya and pork — the naked ferment meets its managers',
      description: `SLICE THE MẮM: if using a whole fermented cá lóc, lay the fish on a board. With a sharp knife, cut along the spine — separate the fillet from the bone (the salt-cured bones are brittle and crack under the knife's pressure, releasing a burst of fermented-fish aroma that fills the kitchen and announces the dish to the household). Slice the fillet thin — 2-3 mm against the grain. Each slice: amber-brown, dense, slightly translucent at the edges (the salt-denatured protein refracts light differently from fresh protein), and carrying the full aroma of 6-12 months of autolytic fermentation.

TOSS: in a large bowl, combine the sliced mắm, the drained julienned papaya, the sliced boiled pork belly, the sliced garlic, the sliced chili, the sugar, the lime juice and (if needed) the fish sauce. Toss gently — the mắm is FRAGILE (the fermented flesh breaks apart if handled roughly, and the goal is intact slices, not shredded mush). The tossing distributes the dressing — the sugar dissolves in the lime juice and the mắm's surface moisture, coating every component in a sweet-sour-salty-garlicky-hot glaze.

Rest 5 minutes after tossing — the resting allows the salt from the mắm's surface to migrate into the papaya's julienne (the papaya's bland interior absorbs the salt by osmosis through the cut surfaces, producing a lightly seasoned, salt-flavoured papaya strand that carries the mắm's seasoning without the mắm's intensity — the papaya is the DILUTION VEHICLE, and the 5-minute rest is the dilution's time).

PLATE: mound the tossed salad on a serving plate. Scatter crushed peanuts and toasted sesame over the top. Arrange the herbs, cucumber and green banana around the plate.

THE PLATE: amber-brown mắm slices interspersed with white-green papaya julienne, pink-white pork belly slices, golden peanut chips, white sesame specks, and the green-purple-red of the herbs and chili — the most COLOUR-VARIED plate in the collection, more colour-diverse than the cơm hến's 9-topping storm because the mắm's amber-brown is a colour no other protein in the collection carries (the fermentation's melanoidin-browning is deeper and more amber than any Maillard-browning or any caramelisation the collection has documented).`,
      tip: `The mắm thái's UNDILUTED mắm consumption is the collection's most EXTREME fermented-food-eating format — more extreme than the nem chua (which is fermented raw pork, but at a milder 3-5 day fermentation), more extreme than the mắm nhum (which is the sea urchin paste, used by the TEASPOON rather than by the SLICE), and more extreme than the lẩu mắm (which DISSOLVES the mắm into 3 L of broth). The mắm thái serves the fermented fish AT ITS FULL CONCENTRATION — every bite of mắm delivers the full 800-1,200 mg/100g glutamate, the full 20-25% salt, and the full volatile-sulfur aroma, and the accompaniments' job is not to HIDE the mắm but to MANAGE it — to provide the dilution (papaya), the fat-coating (pork), the crunch-distraction (peanuts) and the acid-brightness (lime) that allow the tongue to SURVIVE the mắm's intensity and come back for another bite. The management is the skill, and the skill is the ratio: one slice of mắm to four strands of papaya to one slice of pork to a peanut to a herb to a bite of rice. The ratio is learned by eating, not by measuring, and the Châu Đốc eater knows it by age 10.`,
    },
    {
      title: 'Eat with rice, with crackers, with herbs — the mắm table',
      description: `THE MẮM TABLE FORMAT: the Châu Đốc household serves mắm thái as the CENTREPIECE of a family meal — the mắm plate in the centre, surrounded by: the rice pot, the herb plate, the cucumber-and-banana plate, and the toasted rice paper or shrimp crackers. The family eats COMMUNALLY — each person takes a spoonful of rice, adds a piece of mắm, adds papaya, adds pork, adds herbs, and eats the combined mouthful. The mắm is NEVER eaten alone — even the most devoted mắm-lover takes it with rice and papaya, because the salt concentration at full strength would overwhelm the palate within 3 bites.

THE MOUTHFUL: a bite-sized assembly of: rice (bland, starchy, the neutral cushion), a slice of mắm (salt-umami-funk at full volume, amber-dense, chewy-firm from the salt-denatured protein), papaya (crunchy-bland-sweet, the DILUTION that halves the mắm's per-bite salt intensity), pork belly (fat-soft-neutral, the lip-coating that SEQUESTERS the salt's sharpness behind a lipid barrier), and a leaf of húng quế (anise-fresh, the aromatic reset after the funk). The five components are not MIXED — they are LAYERED on the spoon, each one contributing its specific management function to the mắm's intensity, and the mouthful is eaten in one bite so all five arrive simultaneously.

THE CRACKER FORMAT: tear a piece of toasted bánh tráng (or a shrimp cracker). Set a slice of mắm on the cracker. Add a few papaya strands and a peanut. Bite — the cracker's CRUNCH (pneumatic, the same air-pocketed rice-paper crunch the cháo lươn's bánh tráng documented) meets the mắm's DENSE CHEW (the salt-firmed protein, requiring 3-4 chews), and the two textures — crunchy-light-crisp + dense-firm-chewy — provide a textural contrast the rice-and-mắm format does not (the rice is soft, the mắm is firm, and the contrast is SOFT-vs-FIRM; the cracker-and-mắm contrast is CRISPY-vs-FIRM, a wider textural gap that the mouth finds more engaging).

THE FUNK'S TIMELINE: the first bite of mắm thái is — for the uninitiated — ALARMING. The volatile sulfur compounds (dimethyl trisulfide at roughly 20-50 ppb in the air above the plate, methanethiol at roughly 10-30 ppb) reach the olfactory epithelium before the mắm enters the mouth, and the nose's first response is the ancestral toxin-alert (the same alert the canh cà đắng's bitterness triggered — the nose evolved to detect sulfur compounds because many are produced by bacterial decomposition of food, and the detection is sensitive because the risk of eating decomposed food is high). The SECOND bite: the alarm fades (the olfactory receptors ADAPT — the same receptor-fatigue that makes a bad smell tolerable after 5 minutes of continuous exposure). The THIRD bite: the funk is now a FLAVOUR rather than an alarm — the nose has recalibrated, the tongue's umami-receptors are fully engaged, and the mắm's depth (the glutamate, the glycine-sweetness, the complex Maillard-and-autolysis products from 6-12 months of fermentation) is perceptible BEHIND the funk rather than BENEATH it.

By bite 5: the mắm thái is DELICIOUS — not despite the funk but BECAUSE OF it, because the funk is the CARRIER of the umami (the sulfur compounds and the amino acids are produced by the SAME autolytic enzymes from the SAME protein substrate, and they ARRIVE TOGETHER, and the brain learns to associate the funk with the reward of the umami that follows it). The association is the mắm's psychology: the funk is the door, the umami is the room, and the Châu Đốc eater walks through the door without hesitation because they have been walking through it since childhood.

Mắm thái Châu Đốc is the An Giang collection's most CONFRONTATIONAL dish — the dish that asks the most of the uninitiated eater's courage, that rewards the courage with the deepest umami in the collection, and that — more than any other recipe in the project — embodies the Vietnamese relationship with fermentation: the understanding that the line between "delicious" and "decomposed" is not a wall but a DOOR, and the door opens in both directions, and the Châu Đốc eater stands on the side where the funk is a flavour and the decomposition is a technique, and the technique is 6-12 months old, and the technique is perfect.`,
      tip: `Mắm thái is the collection's entry point to the broader CHÂU ĐỐC MẮM TABLE — a meal format unique to the Châu Đốc region where 3-5 different types of mắm are served simultaneously as the meal's centrepiece: mắm cá lóc (whole fermented snakehead, sliced — this recipe), mắm cá linh (fermented mud carp paste — the lẩu mắm's ingredient, here served as a dip), mắm cá sặc (fermented climbing perch, sliced), mắm ruốc (fermented krill paste — the cơm hến's condiment), and sometimes mắm ba khía (fermented mangrove crab — a Cà Mau/Bạc Liêu speciality). The mắm table is the Delta's CHARCUTERIE BOARD — a fermented-protein tasting platter where each mắm type offers a different fish, a different fermentation duration, a different texture and a different funk-profile, and the eater compares them the way a European cheese-board eater compares Comté to Roquefort to Brie: same technique (fermentation), different substrates, different results, and the comparison IS the pleasure.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
