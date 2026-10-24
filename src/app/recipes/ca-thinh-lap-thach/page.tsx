'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-thinh-lap-thach',
  title: `Cá Thính Lập Thạch (Fermented Fish with Roasted Rice Powder — Lập Thạch Style)`,
  subtitle: `Whole freshwater fish — carp, snakehead, or whatever the pond gave — salted, pressed, coated in thính (roasted rice powder) and packed in an earthenware jar for two to four weeks until lactic fermentation transforms the raw fish into a sour, funky, intensely savoury preserved product that is pan-fried and eaten with hot rice. The Red River Delta's oldest fermented fish, and the one that smells like it means it.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '3 weeks',
  rating: 4.8,
  baseServings: 6,
  heroImage: '/images/recipes/ca-thinh-lap-thach.jpg',
  intro: `Cá thính is one of the oldest preserved foods in northern Vietnam — older than nước mắm, older than mắm Châu Đốc, older than the tương of Bần, and arguably older than any fermented product in the Vietnamese pantry except rice wine itself. It is the north's answer to a problem the Mekong solved with liquid mắm and the coast solved with liquid nước mắm: how do you keep fish edible past the day it was caught? The north's answer — the Red River Delta's answer, and specifically Lập Thạch district in Vĩnh Phúc's answer — is thính fermentation: a solid, whole-fish ferment where the fish retains its shape, its bones and its identity throughout the process, and the product is a recognisable fish rather than a dissolved paste or a clear liquid.

The method is the same lactic-acid-fermentation technology the nem Lai Vung and the mắm Châu Đốc used — salt for selective pressure, a carbohydrate source for the bacteria, anaerobic conditions for the environment — but the carbohydrate source is not cooked rice (as in nem) or palm sugar (as in mắm Châu Đốc). It is thính: roasted rice powder, the same ingredient this collection has scattered across a dozen gỏi and that here, packed around the fish in a thick, matte, toasted coat, serves simultaneously as the fermentation fuel (its dextrinised starch feeds the lactic bacteria), as the moisture regulator (its dry powder absorbs the fish's surface moisture and maintains the correct water activity), and as the flavour agent (its toasted, nutty, Maillard-rich compounds infuse the fish's flesh over the weeks of contact).

Lập Thạch is a rural district in the hills west of Vĩnh Yên, the capital of Vĩnh Phúc, and its cá thính is the province's most famous food product — carried to Hanoi as a gift, sold at every market in the Red River Delta, and eaten by every northern Vietnamese family that keeps a jar in the pantry for the weeks when the pond is empty and the market is far. The district's reputation rests on its method, which is meticulous: the fish is salted for 2-3 days (longer than the Châu Đốc mắm), pressed under a heavy weight to expel moisture (a step the southern mắm does not include), then coated in a thick layer of freshly toasted thính and packed tightly in jars that are sealed with banana leaf and stored in a cool, dark place for two to four weeks.

The finished product is a whole fish — recognisably a fish, with head, tail, bones and fins intact — whose flesh has transformed from raw-pink-and-wet to sour-golden-and-firm. It smells powerfully: a sharp, sour, funky, lactic-cheese-meets-fermented-fish aroma that clears the nostrils and that divides every room it enters into enthusiasts and refugees. The smell is the fermentation working correctly — the same volatile short-chain fatty acids (butyric, propionic, acetic) that give aged cheese its pungency are produced by the same lactic bacteria in the same anaerobic environment. Cá thính IS fish cheese, in every chemical sense, and the people who love it love it with the same intensity the French bring to Époisses.

The eating is always cooked: the fermented fish is pan-fried or grilled until the surface crisps and the thính coat turns golden-brown, and the heat transforms the raw ferment's challenging top notes into a rounded, toasted, malty-savoury-sour profile that the nose and the tongue can agree on. It is eaten with hot rice, pickled vegetables and a clear canh — the standard northern kho-and-sides format — and one piece of cá thính, with its concentrated flavour, seasons an entire bowl of rice the way a piece of aged cheese seasons a plate of bread.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 2,
          unit: 'kg',
          name: 'whole freshwater fish — carp (cá chép), snakehead (cá lóc), or tilapia — very fresh',
          note: `Whole, gutted, scaled, gills removed. The head and tail stay on — the head's collagen contributes to the ferment's body, and the whole fish is the traditional presentation. Same-day freshness is the first safety gate, exactly as in the nem Lai Vung and the mắm Châu Đốc. In Europe: whole fresh carp (common at Eastern European and Asian fishmongers) is the authentic choice. Whole trout or whole sea bream are functional substitutes.`,
        },
      ],
    },
    {
      title: 'The salt cure',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'coarse sea salt (10% of fish weight)',
          note: `Lower than the mắm Châu Đốc's 20% — because the cá thính's fermentation is shorter (weeks, not months) and the product is always cooked before eating (the frying is the final safety step). At 10% the salt suppresses most pathogens while allowing the lactic bacteria to work at a faster rate than the mắm's higher-salt, slower fermentation.`,
        },
      ],
    },
    {
      title: 'The thính',
      items: [
        {
          amount: 300,
          unit: 'g',
          name: 'thính (roasted rice powder), freshly toasted',
          note: `Toast raw rice in a dry pan over medium heat 10-15 minutes, stirring constantly, until deep golden-brown and fragrant — the same toasting this collection has performed for every gỏi's thính, but MORE of it, because the thính here is not a seasoning but a fermentation medium. Grind coarsely — not to a fine powder (which packs too dense and suffocates the ferment) but to a rough, granular meal that lets air pockets persist between the grains. Freshly toasted thính has active residual amylase from the toasting's partial dextrinisation; stale thính does not, and the fermentation is slower and less flavourful.`,
        },
      ],
    },
    {
      title: 'The jar',
      items: [
        { amount: 1, name: 'earthenware or glass jar, 3-5 L, wide-mouthed, sanitized' },
        { amount: 1, name: 'banana leaf, for sealing the mouth' },
        { amount: 1, name: 'heavy plate or stone, for pressing' },
      ],
    },
    {
      title: 'For cooking and serving',
      items: [
        { amount: 3, unit: 'tbsp', name: 'neutral oil, for pan-frying' },
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 200, unit: 'g', name: 'dưa cải chua (pickled mustard greens)' },
        { amount: 1, name: 'bowl of canh (clear soup)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Salt and press — 2-3 days, until the fish weeps and firms',
      description: `Rub every fish — inside the cavity, across every surface, under the gill plate — with the weighed salt. Lay them in a non-reactive basin, belly-down. Cover with a plate and weight the plate with a heavy stone or a water-filled pot — the pressure squeezes moisture from the flesh and compresses the fibres, producing a firmer, denser product that ferments more evenly.

Leave at room temperature for 2-3 days. By day 1: a brine pool has formed at the basin's bottom — the salt's osmotic draw pulling water from the fish's cells. By day 3: the fish are visibly firmer, darker, and the brine is deep and cloudy with dissolved protein. Drain the brine. Pat the fish dry — every surface — with clean cloths.

The pressing step is what distinguishes Lập Thạch's cá thính from simpler salt-ferments: the pressure dehydrates the flesh partially (dropping the water activity from ~0.95 to ~0.90), which speeds the subsequent thính fermentation and produces a denser, more concentrated end product. An unpressed fish retains more water and produces a softer, wetter, less intensely flavoured ferment.`,
      tip: `The 10% salt is the Lập Thạch calibration for a 2-4 week ferment consumed after cooking. Compare to the mắm Châu Đốc's 20% for a 6-month ferment consumed raw or dissolved, and the nem Lai Vung's 2.5% for a 3-day ferment consumed raw. The salt percentage is inversely proportional to the fermentation speed and directly proportional to the storage time: less salt = faster ferment = shorter shelf life; more salt = slower ferment = longer shelf life. The 10% dose gives a fast, aggressive, highly sour ferment that peaks at 2-4 weeks and must be refrigerated or cooked promptly after opening — unlike the mắm's year-long shelf-stable patience. The salt is a speed dial, and Lập Thạch's dial is set to fast.`,
    },
    {
      title: 'Coat in thính, pack the jar — the roasted rice does everything',
      description: `Spread a 2 cm layer of thính on the jar's bottom. Take each pressed, dried fish and coat it thoroughly in thính — every surface, inside the cavity, under the fins, behind the head. The coat should be thick and matte — a visible, tan, granular crust on every face.

Lay the thính-coated fish in the jar, belly-down, packed snugly. Between each layer of fish, scatter an additional handful of thính — the interlayer thính fills the gaps and ensures continuous contact between the roasted rice and the fish's surface.

Finish with a thick cap of thính on top — 2-3 cm. Cover with a piece of banana leaf pressed against the surface. Set a plate or a clean stone on the leaf as a final weight — light pressure, just to maintain contact.

Seal the jar's mouth with banana leaf and twine (or a loose lid). The jar must breathe slightly — the lactic bacteria produce CO₂ in the first week and the gas must vent. Set in a cool, dark place: a cellar, a pantry, a shaded corner of the kitchen. NOT in the refrigerator — the cold kills the fermentation.`,
      tip: `The thính does three simultaneous jobs that no other single ingredient in this collection matches. FUEL: its dextrinised starch is the carbohydrate the lactic bacteria ferment into lactic acid — the acid that preserves the fish. MOISTURE CONTROL: its dry, granular texture absorbs the fish's residual surface moisture and maintains the water activity in the narrow 0.85-0.90 window where lactic bacteria thrive but most spoilage bacteria and moulds do not. FLAVOUR: its Maillard-derived melanoidins, pyrazines and furanones infuse the fish's flesh over the weeks of contact, giving the finished cá thính its characteristic toasted-nutty undertone that a plain salt-ferment does not carry. One ingredient, three roles, and none of the three can be replaced by anything else. The thính is the recipe.`,
    },
    {
      title: 'Ferment 2-4 weeks — check at day 14, trust your nose',
      description: `Week 1: the jar is quiet. Inside, the lactic bacteria are colonising the thính-coated surface and beginning to convert the dextrinised starch to lactic acid. The CO₂ they produce may cause the banana-leaf seal to puff slightly — this is normal and the sign that the fermentation has started.

Week 2: open the jar and check one fish. It should have changed colour from raw-pink to golden-tan. The flesh should be firmer. The smell should be: sour (dominant — the lactic acid is now the primary volatile), funky (a cheese-like note from the short-chain fatty acids), toasted-nutty (from the thính), and fishy (the original fish, now layered under the ferment's own character). This is the earliest usable point — the sourness is established, the texture is firm, and the fish can be pan-fried and eaten.

Week 3-4: the fermentation deepens. The sourness intensifies. The funkiness becomes more complex — moving from simple yoghurt-sour to aged-cheese-sour. The thính coat has darkened from tan to brown and is partially fused with the fish's surface. This is the Lập Thạch peak — the point the district's makers consider optimal.

HARD STOP: green or black mould on the surface (white kahm yeast is normal — scrape and continue; green or black mould means the water activity was too high or a contaminant entered — discard). A rotten, sulfurous or ammoniac smell distinct from the sour-funky-toasted correct profile means the wrong organisms dominated — discard. The difference between correct (sour-funky-toasted) and incorrect (rotten-sulfurous) is learned by experience and is unmistakable once learned.

Refrigerate after opening. Cá thính keeps 2-3 months refrigerated in its jar, with the thính coat intact.`,
      tip: `The fermentation's peak — the point where sourness, funkiness and thính-nuttiness are in optimal balance — is a moving target that the Lập Thạch makers judge by smell and by taste rather than by a fixed calendar. A warm kitchen (28-30°C) reaches peak at 2 weeks; a cool cellar (18-20°C) at 4 weeks. Temperature is the fermentation's throttle, the same way it was for every ferment in this collection — nem, mắm, tương, rượu. The maker who stores the jar in a warm place and checks at day 10 is making the same product as the maker who stores in a cool place and checks at day 28; the bacteria are the same, the chemistry is the same, and the only variable is the rate.`,
    },
    {
      title: 'Pan-fry and eat — the heat redeems the smell',
      description: `Remove a fish from the jar. Scrape off the excess thính coat — leave a thin layer clinging to the surface, because the thính fries into a golden, toasted, crispy crust that is part of the eating pleasure. If the fish is large, cut into steaks or pieces.

Heat oil in a pan over medium heat. Lay the fish in — the thính-coated surface sizzles immediately. Fry 3-4 minutes per side until the crust is deep golden-brown and the fish's flesh is heated through. The heat does two transformative things: it drives off the volatile short-chain fatty acids that carry the raw ferment's most challenging smell (butyric acid, the compound that smells of vomit in isolation but of aged cheese in context, boils at 164°C and is gone within a minute of frying), and it generates new Maillard compounds from the thính coat's residual sugars and amino acids, replacing the raw funk with a toasted, malty, deeply savoury aroma that the kitchen can agree with.

The fried fish should be: golden-crusted (the thính coat now a crispy shell), firm-fleshed (the salt and the fermentation have set the protein), and sour-savoury-toasted in flavour — the lactic acid's tang arriving first, the thính's nutty depth arriving second, and the fish's own umami (concentrated by the weeks of enzymatic breakdown) arriving third and lasting longest.

Serve with hot rice, pickled mustard greens and a clear canh. One piece of cá thính — a 5 cm section of fish, fried golden — seasons an entire bowl of rice. The sourness cuts the rice's starch. The salt seasons it. The thính's nuttiness flavours it. And the concentrated umami — weeks of proteolysis condensed into a single piece of fish — makes the rice taste like more than rice, which is the job every Vietnamese preserved protein has always done: not to be eaten alone, but to make the rice worth eating.`,
      tip: `Cá thính Lập Thạch closes the collection's fermented-fish file with the north's representative: where the south ferments its fish into liquid (nước mắm Phú Quốc) or into soft paste (mắm Châu Đốc), the north ferments its fish into a solid, whole, recognisable animal that is cooked before eating. The three products form a spectrum of dissolution: liquid (nước mắm — fish dissolved completely, product is a sauce), solid-soft (mắm — fish dissolved partially, product is a paste), and solid-whole (cá thính — fish dissolved minimally, product is still a fish). The spectrum runs from south to north and from complete to minimal, and it reflects the two regions' different relationships with fermentation intensity: the south pushes its fish further (more salt, more time, more dissolution) because the tropical climate demands it; the north holds its fish back (less salt, less time, less dissolution) because the cooler climate permits it. Geography wrote the fermentation spectrum, and the spectrum is the collection's map of Vietnamese preserved fish, drawn from Phú Quốc to Lập Thạch.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
