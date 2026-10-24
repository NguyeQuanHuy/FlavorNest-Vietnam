'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-phe-chon-dak-lak',
  title: `Cà Phê Chồn Đắk Lắk (Civet Coffee — The Weasel's Selection)`,
  subtitle: `Coffee cherries — eaten by the Asian palm civet (chồn hương, Paradoxurus hermaphroditus), digested for 12-24 hours in the animal's gut, and excreted as intact beans surrounded by the remnants of the cherry's pulp — collected, washed, dried, roasted, and brewed into a coffee that is: smoother, less bitter, more chocolatey and more expensive per gram than any other coffee in the Vietnamese canon. The coffee the civet chose, the civet's gut processed, and the Đắk Lắk farmer collected from the forest floor.`,
  category: 'DESSERT',
  difficulty: 'Easy',
  totalTime: '15 min (brewing)',
  rating: 4.9,
  baseServings: 2,
  heroImage: '/images/recipes/ca-phe-chon-dak-lak.jpg',
  intro: `Cà phê chồn — civet coffee, known internationally as "kopi luwak" (the Indonesian name, from the Malay musang luwak) — is the world's most expensive coffee, and Vietnam's Đắk Lắk province is one of its two principal production regions (alongside Indonesia's Sumatra and Java). The coffee's price ($100-600 per kg, vs $5-15 for standard robusta) rests on two claims: RARITY (the civet eats selectively and in small quantities, producing at most a few hundred grams of beans per animal per season) and FLAVOUR (the civet's digestive tract alters the bean's chemistry in ways that roasting alone cannot replicate).

The flavour claim is the one that interests this collection, and the science behind it is now well-documented:

THE CIVET'S SELECTION: the Asian palm civet (Paradoxurus hermaphroditus, a cat-sized, nocturnal, fruit-eating mammal that lives in the forests and coffee plantations of the Tây Nguyên) eats coffee cherries — not for the bean but for the sweet, fleshy, sugar-rich cherry pulp that surrounds the bean. The civet selects the RIPEST cherries (the sweetest, the highest-sugar, the most aromatic), ignoring unripe and damaged fruit. This selection is the first quality filter: the civet's palate pre-selects for ripeness more consistently than the human picker's hand, because the civet's survival depends on maximising sugar intake, and it has evolved sensory discrimination the human picker does not deploy.

THE GUT PROCESSING: the selected cherry enters the civet's digestive tract. The stomach's GASTRIC ACID (pH 1.5-2.0) + PEPSIN (protease enzyme) + the intestine's PANCREATIC LIPASE begin breaking down the bean's surface proteins and lipids over 12-24 hours of transit. The bean's cellulose-rich endosperm (the hard inner structure) is NOT digested (the civet cannot break cellulose — no mammal can without microbial help), so the bean passes through INTACT but with its surface chemistry ALTERED:

PROTEIN REDUCTION: the gastric pepsin cleaves roughly 15-25% of the bean's surface proteins into peptides and free amino acids. Fewer intact proteins = LESS MAILLARD during roasting (the Maillard reaction requires intact proteins + sugars; fewer proteins = fewer Maillard products). Less Maillard = LESS BITTERNESS (the melanoidins and the pyrazines that Maillard produces are the primary bitter compounds in roasted coffee). The civet's gut produces a bean that roasts to a MILDER, LESS BITTER cup.

LIPID MODIFICATION: the intestinal lipase partially hydrolyses the bean's surface lipids into free fatty acids, some of which are volatile (short-chain fatty acids: acetic, propionic, butyric). These volatiles contribute a FERMENTED, SLIGHTLY WINEY, SLIGHTLY CHEESY aroma note that standard roasted coffee does not carry — the same fermented-volatile spectrum the mắm nhum's lipase-hydrolysed omega-3 produced, here from the civet's own digestive lipase acting on the coffee bean's oil.

FERMENTATION: the civet's gut microbiome (principally Lactobacillus, Enterococcus and Leuconostoc — many of the same genera the nem chua and the sữa chua documented) ferments the cherry's residual pulp sugars AROUND the bean during the 12-24 hour transit, producing lactic acid, acetic acid and ethanol that PENETRATE the bean's porous surface and deposit fermentation products (esters, alcohols, organic acids) in the outer layers of the endosperm. These fermentation products survive roasting (they are heat-stable at the 200-220°C roasting temperatures used for civet coffee, which is typically roasted LIGHTER than standard robusta to preserve the gut-processing's nuances).

The result — after collection, washing, drying and light roasting — is a coffee that blind tasters consistently describe as: SMOOTHER (less bitter, due to the protein reduction), MORE CHOCOLATEY (the reduced Maillard shifts the flavour profile from the standard robusta's carbon-edged, harsh bitterness toward a rounder, cocoa-like, malty depth), SLIGHTLY WINEY (the gut-fermentation's lactic and acetic acids contribute an acidity that standard robusta's low-acid profile does not carry), and LESS HARSH (the overall intensity is lower — the civet's processing removed some of the compounds that make standard robusta aggressive, producing a gentler, more approachable cup).

The ethical caveat this collection must address: WILD-COLLECTED civet coffee (where the civet roams free, eats voluntarily, and the farmer collects the droppings from the forest floor) is ethical and sustainable. CAGED civet coffee (where civets are captured, confined in small cages, force-fed coffee cherries, and kept in conditions that cause documented stress, malnutrition and high mortality) is NOT ethical, is widely practiced in Indonesia and to a lesser extent in Vietnam, and is the reason multiple animal-welfare organisations (including the World Animal Protection and the Civet Coffee Sustainability Project) campaign against the industry. This recipe documents the WILD-COLLECTED version and recommends that any purchase of civet coffee verify the source as wild-collected, cage-free and certified by a credible third-party audit.`,
  ingredientSections: [
    {
      title: 'The civet coffee beans',
      items: [
        {
          amount: 30,
          unit: 'g',
          name: 'cà phê chồn (civet coffee), medium-coarse grind, LIGHT to MEDIUM roast',
          note: `WILD-COLLECTED only — verify the source. Đắk Lắk's reputable producers include farms in Buôn Ma Thuột, Lắk and Krông Ana districts that maintain documented wild-collection practices. The roast should be LIGHTER than standard Vietnamese robusta (which is French-roast/dark) — a medium roast (City+ to Full City) preserves the gut-processing's nuance that dark roasting destroys. The grind: medium-coarse for phin filter (same as the cà phê sữa đá), or medium for pour-over/French press.`,
        },
      ],
    },
    {
      title: 'The phin filter',
      items: [
        { amount: 2, name: 'Vietnamese phin filters (stainless steel, single-serving)', note: `The same apparatus the cà phê sữa đá documented — the slow drip that extracts robusta's desirable compounds while leaving the harshest behind. For civet coffee, the phin's slow extraction is ESPECIALLY suited: the lighter roast's more delicate flavour profile benefits from the phin's gentle extraction more than it would from an espresso machine's aggressive 9-bar pressure (which would over-extract the lighter roast, pulling harsh compounds the light roast was designed to avoid).` },
      ],
    },
    {
      title: 'For serving',
      items: [
        { amount: 2, unit: 'tbsp', name: 'sweetened condensed milk (optional — the traditional Vietnamese way)', note: `The cà phê sữa format. Purists drink civet coffee BLACK (cà phê đen) to taste the gut-processing's nuances unmasked by the condensed milk's sweetness. The choice is the drinker's — both are correct.` },
        { amount: 1, name: 'glass of ice (for cà phê đá — iced version)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Brew in the phin — slower, gentler, the bean deserves patience',
      description: `LOAD: 15 g of civet coffee per phin (same dose as the standard cà phê sữa đá). Place the press filter on top — press GENTLY (lighter than for standard robusta — the civet coffee's lighter roast is more porous and more easily over-extracted by heavy compression).

BLOOM: 15-20 ml of water at 88-92°C (slightly lower than the standard's 90-95°C — the lighter roast's more delicate volatiles evaporate faster at higher temperatures, and the 2-3°C reduction preserves them). Wait 30 seconds — the bloom degasses the grounds (CO₂ escaping from the roast-expanded cells).

POUR: fill the chamber — 70-80 ml per phin. Lid on. Wait.

The drip takes 5-7 minutes — the same slow, gravity-fed, atmospheric-pressure extraction the cà phê sữa đá documented. But the EXTRACT is different: the civet coffee's reduced surface protein means the Maillard-product concentration in the dripped liquid is roughly 20-30% lower than standard robusta's (fewer intact proteins reacted during roasting = fewer melanoidins in the cup). The result: the drip is LIGHTER in colour (amber rather than the standard's dark brown), LESS VISCOUS (fewer dissolved melanoidins = lower body), and MILDER in aroma (the harsh, carbon-edged, rubber-tyre top-notes of dark-roasted robusta are absent, replaced by a softer, rounder, cocoa-malty aromatic that the civet's protein-reduction enabled).

If drinking BLACK (cà phê đen): let the drip complete, remove the phin, and taste.

If drinking with CONDENSED MILK (cà phê sữa): the condensed milk goes in the glass first (same layering theatre), the drip falls on top, and the stirring unites them — but note: the condensed milk's intense sweetness MASKS roughly 40-50% of the civet coffee's nuance. The connoisseur's argument for drinking it black is legitimate: the gut-processing's subtlety is the premium, and the condensed milk obscures the premium. The Vietnamese-street-style argument for drinking it with milk is also legitimate: the condensed milk makes the civet coffee taste like a BETTER version of the daily cà phê sữa đá, and "better" is enough.`,
      tip: `The civet's gut-processing reduces the coffee's CHLOROGENIC ACID content by roughly 50% compared to undigested beans (the gut's mild acid hydrolysis cleaves a portion of the chlorogenic acid to caffeic acid and quinic acid, both of which are less bitter and less astringent than the parent compound). Chlorogenic acid is the PRIMARY BITTER compound in light-to-medium roast coffee (in dark roasts, the Maillard melanoidins dominate the bitterness; in lighter roasts, chlorogenic acid is the main bitter player because fewer melanoidins have been produced). The civet's gut therefore reduces the SPECIFIC bitter compound that the lighter roast would otherwise make prominent — a coincidence of biology and roasting that produces a cup where the bitterness is lowered at BOTH levels: the gut reduced the chlorogenic acid (the light-roast bitter), and the lighter roast reduced the melanoidins (the dark-roast bitter). Two reductions, two mechanisms, one smooth cup.`,
    },
    {
      title: 'Taste — the smoothness, the chocolate, the wine, the animal between the tree and the cup',
      description: `THE TASTING (black, warm, no ice, no milk — the purist's format):

AROMA (nose over the cup): the first sniff registers: CHOCOLATE (the cocoa-like maltol and furaneol that the lighter roast preserved — dark roasting converts these to the harsher furfural and guaiacol), MALT (the mạch nha's grain-warm note, here from the coffee's own maltol), and a faint, unusual WINE-LIKE note (the gut-fermentation's lactic and acetic acids, surviving the roast, contributing an acidity the standard robusta's aroma does not carry). The nose does NOT detect the standard robusta's tyre-rubber, carbon-char, or smoky-harsh top-notes. The absence is the civet's signature.

FIRST SIP: the liquid enters the mouth and the tongue registers: SMOOTH (the reduced chlorogenic acid and the reduced melanoidins produce a gentler, less astringent mouth-coating than standard robusta), SWEET (the lighter roast preserves more of the bean's natural sucrose — roughly 3-4% of the bean's dry weight survives a medium roast vs <1% in a dark roast), and CHOCOLATEY (the cocoa-malty-maltol profile, now on the tongue as well as in the nose).

AFTERTASTE: the swallow leaves: a CLEAN finish (no lingering harsh bitterness — the chlorogenic acid reduction means the bitter tail is shorter, fading in 10 seconds vs standard robusta's 20-30 seconds), a faint FRUIT acidity (the wine-like note, now perceived as a lingering tartness at the tongue's sides), and a WARMTH that is the caffeine's arrival (the caffeine content is unchanged by the gut processing — the civet's enzymes do not metabolise caffeine, and the civet coffee's caffeine per cup is identical to standard robusta's).

The experience: a coffee that is recognisably ROBUSTA (the body, the caffeine, the chocolate base) but that has been SMOOTHED — the rough edges filed, the harsh peaks lowered, the profile rounded from angular to curved. The civet did not make a different coffee. The civet made the SAME coffee with the AGGRESSIVE COMPOUNDS REMOVED, and the removal is the premium.

Cà phê chồn Đắk Lắk is the Đắk Lắk collection's most ECONOMICALLY SIGNIFICANT recipe — the recipe whose price-per-gram exceeds every other food item in the entire FlavorNest project by 10-100x, and whose existence supports a cottage industry of highland farmers who patrol the coffee plantations' edges at dawn, searching the leaf litter for the civet's droppings, and whose livelihood depends on the continued health of the forest that the civet lives in. The civet coffee economy is, when practised ethically (wild collection, no caging), an INCENTIVE FOR FOREST CONSERVATION: the farmer earns more from collecting wild-civet droppings (which requires intact forest for the civet to inhabit) than from clearing the forest for more coffee rows. The civet coffee is the rare agricultural product that is worth MORE when the forest remains standing, and its value is the argument for the forest's survival.`,
      tip: `The ETHICAL DISTINCTION between wild-collected and caged civet coffee is the industry's central tension: wild-collected (the animal roams free, eats what it chooses, defecates where it chooses, and the farmer collects from the forest floor) produces roughly 50-200 kg of green beans per year across all of Đắk Lắk province — a TINY supply that commands $300-600/kg. Caged production (the civet is confined, force-fed cherries, and the droppings are collected from the cage floor) produces much more per animal but causes documented suffering: abnormal behaviour (pacing, self-mutilation), malnutrition (the cherry-only diet lacks the protein the omnivorous civet needs), and high mortality. The caged product is also CHEMICALLY INFERIOR: stressed animals produce different gut-enzyme profiles (stress hormones alter protease and lipase activity), the forced-feeding means the civet does not SELECT the ripest cherries (removing the first quality filter), and the caged product's cup quality is, in blind tasting, indistinguishable from standard washed robusta. The cage removes the civet's TWO contributions (selection + gut chemistry) and replaces them with suffering and a label. The wild-collected version is the only version that is both ethical and genuine.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
