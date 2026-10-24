'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'mam-nhum',
  title: `Mắm Nhum (Fermented Sea Urchin Paste — Quy Nhơn)`,
  subtitle: `Sea urchin gonads — the same bright-orange, creamy, briny-sweet uni the Japanese prize as sashimi — but here salt-fermented in clay jars for weeks until the fresh sweetness transforms into something darker, deeper, more complex: a thick, amber-brown, intensely savoury paste that smells of the deep sea and tastes of umami concentrated to its absolute limit. Eaten not as a main dish but as a CONDIMENT — a teaspoon stirred into rice, a dip for boiled vegetables, a sauce base — because the flavour is too concentrated for more.`,
  category: 'APPETIZER',
  difficulty: 'Hard',
  totalTime: '30 min + 3-4 weeks fermentation',
  rating: 4.7,
  baseServings: 20,
  heroImage: '/images/recipes/mam-nhum.jpg',
  intro: `Mắm nhum is the rarest mắm in the Vietnamese fermentation canon — rarer than mắm cá (fermented fish, produced in every coastal province), rarer than mắm tôm (fermented shrimp paste, produced in every estuarine province), rarer than mắm nêm (fermented anchovy, the central coast's universal condiment) — because its raw material is rare: nhum, the sea urchin (principally Tripneustes gratilla, the collector sea urchin, and Diadema setosum, the long-spined sea urchin), harvested by free-divers from the rocky reefs off the Quy Nhơn coast, the Phú Yên coast and the Khánh Hòa coast — a narrow strip of the central Vietnamese coastline where the underwater topography (rocky substrate, clean water, strong current) supports the urchin population the mắm requires.

The urchin's edible part — the gonad (the reproductive organ, five-lobed, bright orange to golden-yellow, creamy, custard-soft) — is the same tissue the Japanese eat as uni and the Mediterranean eat as oursin: one of the most umami-dense, most iodine-rich, most texturally unique seafood products on earth. Fresh uni tastes of: the sea (iodine, brine, mineral), sweetness (glycine and alanine, the same amino-acid sweetness the Châu Trúc shrimp broth carried), and a creamy, egg-yolk-like richness (the gonad is roughly 15% fat, principally omega-3 polyunsaturated fatty acids — EPA and DHA).

The Vietnamese central coast does not eat its sea urchin fresh — or rather, it eats SOME fresh (cracked open on the boat, scooped with a spoon, eaten raw with lime and chili as a fisherman's meal), but it PRESERVES most as mắm nhum, because the urchin is seasonal (the gonads are fullest from March to August, when the water is warmest and the urchin's reproductive cycle peaks), the catch is variable (weather, overharvesting, and the rocky reef's inaccessibility limit the supply), and the mắm — once fermented — lasts for months, extending a seasonal, perishable ingredient into a year-round condiment.

The fermentation is salt-based: the fresh gonads are mixed with coarse sea salt (roughly 20-25% salt by weight — a heavy salting, heavier than the nem chua's lactic fermentation, because the salt is the PRIMARY preservative here, not the lactic acid), packed into clay jars, sealed, and left to ferment for 3-4 weeks. During the fermentation, the gonads' own ENDOGENOUS ENZYMES (proteases and lipases that the gonad's cells contain for their normal reproductive function) break down the proteins to free amino acids (principally glutamate — the umami amino acid — which increases from roughly 50 mg/100g in fresh uni to 500-800 mg/100g in the fermented mắm, a 10-16x concentration) and the fats to free fatty acids (which contribute the mắm's distinctive, rancid-but-not-unpleasant, deeply marine, almost-cheesy aroma that the French would call "aged" and the Vietnamese call "đậm").

The finished mắm nhum is: a thick, amber-to-brown, slightly granular paste with a pungent, oceanic, deeply savoury aroma that fills a room when the jar is opened. The taste — a fingertip-dab on the tongue — is: SALT (the 20-25% salt content hits first), then UMAMI (the free glutamate, at concentrations approaching Parmesan cheese's 1,200 mg/100g, registers as an intense, long-lasting, mouth-coating savoury wave), then MARINE (the iodine, the omega-3 breakdown products, the sea-specific volatiles — dimethyl sulfide, trimethylamine — that no land-based ferment carries), then a LINGERING SAVOUR that stays on the tongue for 30-60 seconds after the swallow.

Mắm nhum is not eaten by the spoonful. It is eaten by the TEASPOON — a condiment, a flavour-bomb, a umami-concentrate that the cook stirs into rice, uses as a dip for boiled vegetables (rau luộc — the mắm nhum's traditional pairing: bland, steamed, neutral vegetables dipped in concentrated sea-urchin paste, the contrast between nothing and everything), or dissolves into a sauce for grilled meat. The mắm's concentration is its function: a 200 ml jar of mắm nhum seasons 50 meals, and the jar lasts a family a season.`,
  ingredientSections: [
    {
      title: 'The sea urchin',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'fresh sea urchin gonads (nhum / uni)',
          note: `From 2-3 kg of whole sea urchins (the gonads are roughly 15-20% of the whole urchin's weight). To extract: turn the urchin upside down (mouth facing up). Cut around the mouth with scissors to create an opening. Drain the fluid. Scoop the five gonad lobes out with a spoon — they are: bright orange to golden-yellow, custard-soft, attached to the inner shell wall. Rinse gently in cold salt water to remove any shell fragments or intestinal matter. HANDLE MINIMALLY — the gonads are delicate and break apart under pressure. FRESHNESS: the gonads must be from LIVE or just-killed urchins. Dead urchins' gonads degrade within hours (the endogenous proteases begin self-digesting — autolysis — and the texture goes from creamy to liquid). Use within 2-3 hours of harvesting.`,
        },
      ],
    },
    {
      title: 'The salt',
      items: [
        {
          amount: 125,
          unit: 'g',
          name: 'coarse sea salt (25% of the gonad weight)',
          note: `The preservative AND the fermentation controller: the high salt concentration (25%) inhibits pathogenic bacteria (Salmonella, Clostridium — both inhibited above 10% salt) while allowing halotolerant bacteria and the urchin's own endogenous enzymes to work. The enzymes — not the bacteria — do most of the flavour development: the proteases break protein to glutamate (umami), and the lipases break fat to free fatty acids (aroma). The salt's role is to PERMIT enzymatic action while PREVENTING bacterial spoilage.`,
        },
      ],
    },
    {
      title: 'The jar',
      items: [
        {
          amount: 1,
          name: 'clay jar or glass jar, 500 ml, with a tight lid',
          note: `Clay is traditional — the same mineral-terroir contribution the rượu cần's ché provided. Glass works functionally. The jar must be CLEAN (sterilised with boiling water) and the lid must be TIGHT (the fermentation is not strictly anaerobic — the urchin's enzymes work in both aerobic and anaerobic conditions — but a tight lid prevents insect contamination and reduces oxidation of the omega-3 fatty acids, which would produce an unpleasantly rancid "fishy" off-note).`,
        },
      ],
    },
    {
      title: 'Optional aromatics (some Quy Nhơn versions add these)',
      items: [
        { amount: 4, name: 'cloves garlic, pounded' },
        { amount: 2, name: 'bird\'s-eye chilies, pounded' },
        { amount: 1, unit: 'tbsp', name: 'rice wine' },
      ],
    },
    {
      title: 'To serve (as a condiment)',
      items: [
        { amount: 1, name: 'plate of boiled vegetables: rau muống (water spinach), rau lang (sweet potato leaves), bí xanh (winter melon), đậu bắp (okra)' },
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 2, name: 'red chilies, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Mix the gonads with salt, pack the jar — the enzymes begin their work',
      description: `Gently mix the fresh sea urchin gonads with the coarse sea salt in a clean bowl — fold with a spatula rather than stirring (stirring breaks the delicate lobes into mush; folding preserves some structural integrity, which produces a slightly chunky, more interesting final texture than a completely liquefied paste).

Add the garlic, chili and rice wine if using — fold through gently.

Pack the mixture into the clean jar — press down gently with the spatula to eliminate air pockets (large air pockets promote surface oxidation, which produces off-flavours). Leave 2 cm of headspace (the fermentation produces a small amount of gas as the endogenous bacteria — the halotolerant Staphylococcus and Tetragenococcus species that survive in 20-25% salt — metabolise residual sugars).

Seal the jar tightly. Set in a cool, shaded place — 25-30°C is ideal (cooler than the nem chua's 28-35°C, because the urchin's omega-3 fatty acids oxidise faster at higher temperatures, and oxidised omega-3 = rancid off-flavour). A kitchen shelf away from direct sunlight works.`,
      tip: `The 25% salt concentration places the mắm nhum in the HIGH-SALT FERMENTATION category — the same category as fish sauce (mắm, 20-25% salt), miso (12-18% salt) and soy sauce (17-19% salt). At 25% salt, MOST bacteria are inhibited (the osmotic stress of the salt draws water out of bacterial cells, dehydrating and killing them), but the urchin's OWN ENZYMES (proteases and lipases, which are proteins and therefore not alive — they cannot be "killed" by salt, only deactivated by extreme pH or temperature) continue functioning. The fermentation is therefore ENZYMATIC rather than BACTERIAL: the flavour development comes primarily from the urchin's own digestive enzymes breaking their own tissue down (autolysis), not from living bacteria transforming the substrate (as in the nem chua or the sữa chua). The distinction matters: bacterial fermentation is alive (it can be speeded up, slowed down, fed or starved); enzymatic autolysis is chemical (it runs at a rate determined by temperature and salt concentration, and it cannot be "fed" because the enzymes are not alive). The mắm nhum is a controlled self-digestion, not a bacterial culture.`,
    },
    {
      title: 'Ferment 3-4 weeks — the gonads dissolve into concentrated umami',
      description: `WEEK 1: the salt draws moisture from the gonad tissue by osmosis — a brine forms at the jar's bottom, the gonads shrink slightly, and the first enzymatic breakdown begins. The proteases (principally cathepsin D and trypsin-like enzymes native to the urchin's gonad tissue) cleave the gonad's structural proteins (collagen, actin, myosin) into peptides, and the peptides begin breaking into free amino acids. The colour shifts from bright orange to amber (the carotenoid astaxanthin, released from its protein binding as the proteins denature in the salt, oxidises slightly in the jar's small air pocket).

WEEK 2: the free amino acid concentration rises measurably — particularly GLUTAMATE (the urchin's proteins are roughly 15-18% glutamic acid by amino-acid composition, and as the protease cleaves more protein, the free glutamate in the brine increases from 50 mg/100g to 200-300 mg/100g). The aroma shifts: from "raw sea urchin" (fresh, iodine, sweet) to "aged sea urchin" (savoury, complex, with a faint cheese-like note from the lipase's breakdown of the gonad's omega-3 fatty acids into short-chain fatty acids — butyric, propionic — the same acids that give aged cheese its aroma).

WEEK 3-4: the paste reaches its full development. The free glutamate has reached 500-800 mg/100g (approaching Parmesan's 1,200 mg/100g — making mắm nhum one of the most glutamate-dense condiments in any cuisine). The texture has transformed from chunky-creamy (intact gonad lobes in brine) to a thick, granular, amber-brown paste (the gonad tissue has partially dissolved into the brine, the undissolved fragments providing the granularity). The aroma: intensely oceanic, deeply savoury, with the aged-cheese note fully developed and a faint, pleasant, iodine-mineral sharpness underneath.

TASTE TEST at week 3: open the jar. The aroma fills the room — a concentrated marine-umami-cheese wave that the uninitiated describe as "overwhelming" and the initiated describe as "perfect." Dab a fingertip. The taste: salt → umami (a massive, long-lasting, mouth-coating wave — the free glutamate at 500+ mg/100g, synergising with the naturally present nucleotides) → marine (iodine, brine, the deep-sea mineral signature) → a lingering savoury afterglow that stays on the tongue for 30-60 seconds.

If the taste is clean, intensely savoury and free of bitter or rancid off-notes: the mắm is ready. Transfer to clean jars. Refrigerate — the cold slows further enzymatic activity and stabilises the mắm at its current flavour. Mắm nhum keeps 6-12 months refrigerated, the flavour continuing to develop slowly (deeper, more complex, slightly more pungent) over the months.`,
      tip: `The glutamate concentration in finished mắm nhum (500-800 mg/100g) places it alongside the world's most umami-dense condiments: Parmesan cheese (1,200 mg/100g), soy sauce (400-800 mg/100g), fish sauce (500-1,400 mg/100g depending on grade), and miso (200-700 mg/100g). The mắm nhum's glutamate is produced by the SAME biochemical pathway as the fish sauce's (endogenous protease autolysis of protein in a high-salt environment), and the two products are biochemically siblings — both are high-salt autolysates of marine animal protein. The difference: fish sauce uses FISH muscle (low fat, high protein, producing a clean, transparent, low-viscosity liquid); mắm nhum uses URCHIN GONAD (high fat, moderate protein, producing a thick, opaque, high-viscosity paste with a lipid-derived aroma the fish sauce does not carry). Same chemistry, different substrate, different product.`,
    },
    {
      title: 'Serve as a condiment — a teaspoon at a time, with boiled vegetables and rice',
      description: `THE TRADITIONAL PAIRING — MẮM NHUM + RAU LUỘC (boiled vegetables): boil water spinach (rau muống), sweet potato leaves (rau lang), winter melon or okra until just tender. Drain. Set on a plate — plain, unseasoned, neutral.

Spoon 1 teaspoon of mắm nhum into a small dipping saucer. Squeeze lime over. Add sliced chili if desired. The mắm — thick, amber, granular, intensely aromatic — sits in the saucer like a tiny pool of concentrated ocean.

DIP a piece of the bland boiled vegetable into the mắm. Eat.

The contrast is the pairing's architecture: the vegetable contributes NOTHING (no salt, no umami, no aroma — it is pure texture, pure water, pure blandness) and the mắm contributes EVERYTHING (maximum salt, maximum umami, maximum aroma). The mouthful is an oscillation between zero and maximum — blandness and intensity alternating with each dip — and the oscillation is the eating experience, and the oscillation needs BOTH poles: without the bland vegetable, the mắm is overwhelming (too salt, too umami, too much); without the mắm, the vegetable is boring (too bland, too watery, too little). The pairing is a symbiosis: each component makes the other necessary.

OTHER USES:
- STIR into hot rice — 1 teaspoon per bowl, the mắm dissolving into the rice's starch, every grain carrying a trace of concentrated sea urchin.
- DISSOLVE into a dipping sauce — 1 tsp mắm nhum + 1 tbsp lime juice + 1 tsp sugar + chili + garlic = a dipping sauce of extraordinary umami depth for grilled seafood.
- SPREAD on toasted bánh mì — the Quy Nhơn fisherman's version of pâté, the sea urchin replacing the liver, the ocean replacing the farm.

Mắm nhum is the collection's most concentrated condiment — more concentrated than fish sauce (which is diluted by the 12-18 months of brine; the mắm nhum's shorter ferment retains more of the original tissue's density), more concentrated than mắm tôm (which is diluted by the water added during the shrimp-paste grinding). A single jar — 200 ml, roughly 250 g — produced from 3 kg of live sea urchins, by 3 weeks of patient enzymatic self-digestion, seasons 50+ meals, and each meal carries, in its teaspoon of amber paste, the concentrated marine umami of the rocky reef 20 metres below the Quy Nhơn waterline.`,
      tip: `Mắm nhum is the collection's final entry in the fermentation file — and the fermentation file now spans the full biochemical range: LACTIC-ACID fermentation (nem chua, nem chợ Huyện, tré — bacteria produce acid that cures meat), ALCOHOLIC fermentation (rượu cần — yeast produces ethanol from sugar), BACTERIAL CULTURE fermentation (sữa chua — bacteria produce acid that sets milk), and now ENZYMATIC AUTOLYSIS (mắm nhum — the tissue's own enzymes break its own proteins and fats down in a high-salt environment). Four fermentation mechanisms, four biochemically distinct processes, all documented across the collection, all used by the Vietnamese kitchen to transform perishable ingredients into shelf-stable products using nothing but time, salt, sugar, and the microorganisms or the enzymes the ingredients themselves carry. The Vietnamese kitchen is, by this measure, one of the world's most sophisticated fermentation kitchens — not because it uses complex equipment (it does not — banana leaves, clay jars, room temperature) but because it uses the FULL RANGE of fermentation biochemistry, from lactic to alcoholic to autolytic, and it has used them all for centuries.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
