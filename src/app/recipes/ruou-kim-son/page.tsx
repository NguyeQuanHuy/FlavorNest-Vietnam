'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ruou-kim-son',
  title: `Rượu Kim Sơn (Kim Sơn Rice Wine — The Coastal District's Salt-Air Spirit)`,
  subtitle: `Glutinous rice — steamed, inoculated with men thuốc bắc (a medicinal-herb yeast starter unique to Kim Sơn), fermented for 7-10 days, and distilled over a wood fire — producing a clear, 38-42% ABV rice spirit that carries the nếp cái hoa vàng's floral 2-AP alongside a UNIQUE set of herbal-medicinal esters the men thuốc bắc's 12-herb recipe imparts. The third rượu in the collection's DISTILLED-GRAIN TRILOGY: rice-lowland (làng Vân) ↔ corn-highland (ngô Hà Giang) ↔ rice-coastal (Kim Sơn) — same process, three grains/locations, three spirits.`,
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '7-10 days fermentation + 4-6 hr distillation',
  rating: 4.8,
  baseServings: 10,
  heroImage: '/images/recipes/ruou-kim-son.jpg',
  intro: `Kim Sơn district — Ninh Bình's southeastern coast, the reclaimed-land zone where the cá rô Vuông swims in brackish paddies — produces a rice wine that has been GI-REGISTERED (geographical-indication-protected) by the Vietnamese government as "Rượu Kim Sơn," the first step toward the kind of appellation-control that Champagne and Scotch enjoy. The GI-registration recognises: the spirit's SPECIFIC CHARACTER, which the Kim Sơn distillers attribute to THREE factors that no other district replicates simultaneously:

1. THE RICE: nếp cái hoa vàng (golden-flower glutinous rice) — the SAME aromatic glutinous variety the cơm lam Tam Đảo documented. The rice's 2-acetyl-1-pyrroline (2-AP) at 200-500 ppb survives the steaming, the fermentation and — partially — the distillation, arriving in the finished spirit at roughly 20-80 ppb (below the rice's raw-concentration but above the 2-AP's detection-threshold of ~6 ppb in aqueous solution, and detectable in the spirit as: a faint, JASMINE-POPCORN-FLORAL note at the spirit's aromatic finish, the note that says "this is NẾPRICE-spirit" and that the corn-spirit's furfural-toasty and the barley-whisky's malt-sweet do not carry).

2. THE MEN THUỐC BẮC: Kim Sơn's yeast-starter is NOT the standard men lá (forest-leaf-based yeast the rượu làng Vân and the rượu ngô documented) but a MEN THUỐC BẮC — a yeast-starter made with CHINESE-MEDICINAL HERBS (thuốc bắc = "northern medicine," the Vietnamese term for TCM herbs). The Kim Sơn men thuốc bắc's recipe is: a 12-herb formula that each Kim Sơn distilling-family guards as a TRADE SECRET, typically including: quế (cinnamon), hồi (star anise), thảo quả (black cardamom), đinh hương (clove), trần bì (dried tangerine peel), cam thảo (licorice root), bạch truật (Atractylodes), đương quy (Angelica sinensis) and 4 others that vary by family. The 12 herbs are: ground, mixed with cooked rice and water, shaped into balls, and colonised by ambient moulds and yeasts (the same men-lá-colonisation process, but with MEDICINAL HERBS replacing FOREST LEAVES as the microbial-substrate). The herb-substrate produces a DIFFERENT MICROBIAL COMMUNITY than the forest-leaf-substrate: the herb's antimicrobial compounds (cinnamaldehyde from cinnamon, anethole from star anise, eugenol from clove) selectively INHIBIT certain bacterial and fungal species while PERMITTING others, and the permitted-community produces a SPECIFIC ESTER SUITE that the forest-leaf-community does not replicate. The Kim Sơn spirit's ester-fingerprint is therefore: a HERBAL ESTER (carrying traces of the TCM herbs' volatile compounds that passed from the men → the fermentation → the distillate), and the herbal-ester is: the Kim Sơn spirit's AROMATIC IDENTITY, the character the GI-registration protects.

3. THE SALT AIR: Kim Sơn's coastal location (the district borders the South China Sea, the salt-flats and the shrimp-farms extend to the waterline) means the fermentation occurs in AIR with 1-3% higher RELATIVE HUMIDITY and 0.1-0.5% higher SALINITY than the inland districts' air. The salt-aerosol's effect on the fermentation is: debated (the Kim Sơn distillers claim the salt-air "seasons" the spirit; the food-scientists note that 0.1-0.5% atmospheric-salinity is: below the threshold for measurable NaCl-deposition on the fermentation's open-vessel surface). The humidity-effect is: more plausible (higher humidity slows the fermentation-vessel's surface-evaporation, keeping the mash's moisture-content 2-5% higher than an inland-fermentation's, and the higher moisture produces: a slightly DIFFERENT fermentation-kinetics — slower, more uniform, producing 5-10% more esters per unit of alcohol than the drier inland-fermentation). Whether the salt-air's contribution is: REAL (a measurable chemical effect) or PERCEIVED (a terroir-narrative that the distiller and the drinker co-construct), the salt-air is: PART OF THE STORY, and the story is: what the GI protects, and the GI is: what makes Kim Sơn's rượu different from every other Vietnamese rice-spirit, including the rượu làng Vân 50 km to the north.

THE DISTILLED-GRAIN TRILOGY is now complete:

RƯỢU LÀNG VÂN (Vĩnh Phúc): rice (nếp), lowland (50 m elevation), warm fermentation (25-30°C), men lá (forest-leaf yeast). FLAVOUR: floral-2-AP-dominant, ethyl-acetate-fruity-sharp. The FLORAL spirit.

RƯỢU NGÔ HÀ GIANG: corn, highland (1,000 m+), cool fermentation (15-20°C), men lá (highland-forest yeast). FLAVOUR: furfural-toasty, isoamyl-acetate-banana-round. The GRAIN spirit.

RƯỢU KIM SƠN (Ninh Bình): rice (nếp cái hoa vàng), coastal (5-10 m elevation), moderate fermentation (22-28°C, humidity-moderated), men thuốc bắc (medicinal-herb yeast). FLAVOUR: 2-AP-floral + herbal-ester (cinnamon-star-anise-clove traces) + a faint, barely-perceptible, mineral-saline finish the distillers attribute to the salt-air. The HERBAL spirit.

Three spirits, three locations, three men (forest-leaf, highland-forest-leaf, medicinal-herb), three flavour-profiles — and the three together demonstrate: the rượu is not ONE spirit but a FAMILY, and the family's diversity is: the grain (rice vs corn), the altitude (lowland vs highland vs coast), the temperature (warm vs cool vs moderate), and the men (the microbial-starter whose herb-composition determines the ester-fingerprint that IS the spirit's identity). The men IS the terroir — the yeast-starter carries the PLACE in its microorganisms, and the microorganisms carry the place in the spirit, and the spirit carries the place to the tongue.`,
  ingredientSections: [
    {
      title: 'The rice',
      items: [
        { amount: 5, unit: 'kg', name: 'nếp cái hoa vàng (golden-flower glutinous rice)', note: `The AROMATIC nếp — the same 2-AP-rich variety the cơm lam Tam Đảo and the rượu làng Vân used. The 2-AP survives at 20-80 ppb in the finished spirit = the floral note at the spirit's aromatic finish. Standard glutinous rice works but produces a LESS AROMATIC spirit (the generic nếp's 2-AP is 50-100 ppb vs the hoa vàng's 200-500 ppb, and the lower starting-concentration means less 2-AP survives the fermentation+distillation).` },
      ],
    },
    {
      title: 'The men thuốc bắc (medicinal-herb yeast starter)',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'men thuốc bắc (Kim Sơn-style medicinal-herb yeast balls)',
          note: `The 12-HERB STARTER — Kim Sơn's signature. Buy from Ninh Bình/Kim Sơn suppliers (available online from Vietnamese specialty stores, or at Ninh Bình's markets). The men thuốc bắc balls are: dried, disc-shaped (similar to men lá), darker in colour (the herb-mixture's tannins darken the ball), and carrying a detectable SPICE AROMA when sniffed (the cinnamon's cinnamaldehyde + the star-anise's anethole + the clove's eugenol — the three most volatile of the 12 herbs' compounds, detectable at the ball's surface). If unavailable: standard men lá or Chinese jiǔqū works, but the resulting spirit will lack the HERBAL-ESTER character that is Kim Sơn's specific identity.`,
        },
      ],
    },
    {
      title: 'For distillation',
      items: [
        { amount: 1, name: 'pot-still (the same nồi nấu rượu the other two rượu documented)' },
        { amount: 1, name: 'wood fire or gas burner' },
        { amount: 1, name: 'cold-water condenser' },
      ],
    },
  ],
  steps: [
    {
      title: 'Steam, inoculate with men thuốc bắc, ferment 7-10 days — the herbs enter the spirit',
      description: `STEAM THE RICE: soak the nếp cái hoa vàng 8-12 hours (overnight). Drain. Steam 40-50 minutes (the glutinous rice steams rather than boils — the same steaming-not-boiling every xôi in the collection documented). The steamed nếp: soft, sticky, glistening, carrying the 2-AP's jasmine-popcorn aroma at the rice's surface (the steaming's 100°C volatilises some 2-AP, but the glutinous-rice's amylopectin-matrix TRAPS a significant fraction — the same amylopectin-trapping the cơm lam documented).

COOL to 30-35°C (the same cooling-threshold every rượu fermentation documented — above 45°C kills the yeast and the mould).

INOCULATE: crush the men thuốc bắc balls to coarse powder. Sprinkle uniformly over the cooled rice. Toss to distribute (the men's crushed particles — carrying the dormant Aspergillus spores, the Saccharomyces cells, and the 12 herbs' residual-volatile-compounds — contact every grain's surface).

The MEN THUỐC BẮC'S MICROBIAL DIFFERENCE from men lá: the 12 medicinal herbs' antimicrobial compounds (cinnamaldehyde, anethole, eugenol) create a SELECTIVE PRESSURE on the microbial community during the men's production: the herbs' antimicrobials KILL the most antibiotic-sensitive bacteria and fungi (the same species the broad-spectrum forest-leaf-men harbours), PERMITTING only the RESISTANT strains to colonise the ball. The resistant-community is: a CURATED MICROBIAL CULTURE (curated by the herbs' antimicrobial selection-pressure, not by the cook's intentional choice — the curation is: ECOLOGICAL, not deliberate). The curated community's specific species-mix produces: a DIFFERENT ENZYME SUITE (different amylases, different proteases, different esterases) than the forest-leaf-men's broader community, and the different enzymes produce: DIFFERENT FERMENTATION PRODUCTS (different esters, different higher-alcohols, different organic-acids) from the SAME rice-substrate. The men thuốc bắc IS the spirit's flavour-fingerprint — the same role the men lá played for the rượu làng Vân and the rượu ngô, but here from a MEDICALLY-CURATED rather than a NATURALLY-OCCURRING microbial-community.

PACK into the fermentation vessel (ceramic chum or plastic bucket). Cover loosely. Place in a sheltered, ventilated spot (the Kim Sơn distillers place the vessel in a semi-open structure near the coast — the sea-breeze provides ventilation, and the coastal-humidity moderates the fermentation's temperature-fluctuation).

FERMENT 7-10 DAYS at 22-28°C:

DAYS 1-2: MOULD PHASE — the Aspergillus from the men colonises the rice. The white-cottony mycelium appears. The mould produces amylase (starch→maltose→glucose). The herbs' volatile residues (the cinnamaldehyde, the anethole) are: present at the mash's surface, detectable by nose, and SLOWLY DEGRADING (the microbial enzymes metabolise the herb-volatiles over 7-10 days, converting some of them to ESTERS — the cinnamaldehyde is partially esterified to CINNAMYL ACETATE, a sweet, honey-balsamic, floral ester that the straight cinnamaldehyde's harsh, spicy bite does not carry. The esterification is the fermentation's AROMATIC ALCHEMY: the harsh-spice → sweet-ester conversion that softens the herbs' aggressive volatiles into the gentle, rounded, perfume-like herbal-esters the finished spirit carries).

DAYS 3-7: ACTIVE FERMENTATION — the yeast converts glucose→ethanol+CO₂. The mash bubbles vigorously. The alcohol accumulates to 12-15% ABV (higher than the corn-mash's 10-14% because the glutinous-rice's nearly-pure-amylopectin is MORE COMPLETELY saccharified than the corn's amylose-rich starch). The herbal-ester profile develops: the cinnamyl acetate, the anethole's metabolite methyl-chavicol, the eugenol's metabolite eugenyl acetate — the 12 herbs' volatile compounds, metabolised and esterified by the fermentation's microbial-enzymes, are now: a suite of 15-20 herbal-esters at 0.1-5 ppm each, collectively producing the Kim Sơn spirit's HERBAL CHARACTER.

DAYS 7-10: LATE FERMENTATION — the sugar exhausts, the bubbling slows, the mash is: sour (pH 3.5-4.0, the LAB's lactic-acid contribution), alcoholic (12-15%), and carrying the full herbal-ester-suite. Ready for distillation.`,
      tip: `The MEN THUỐC BẮC's 12-herb formula is the Kim Sơn distiller's TRADE SECRET — each family's formula differs slightly (one family uses more cinnamon, another more star-anise, a third adds ginseng), and the formula-difference produces: detectably-different spirits from the same rice, the same water, the same distillation. The formula IS the brand — the same way the Cognac house's yeast-strain and the Scotch distillery's water-source are: the unchosen-but-essential variables that make one spirit different from another. The Kim Sơn GI-registration protects: the district's geographic-boundary, the rice-variety (nếp), and the men-thuốc-bắc METHOD, but NOT any single family's formula — the formula remains: private, inherited, whispered from mother to daughter and from father to son, and the privacy IS the diversity, and the diversity IS the district's collective richness.`,
    },
    {
      title: 'Distil — the herbal esters rise with the ethanol, the salt-air\'s trace arrives last',
      description: `THE DISTILLATION: the same pot-still method the rượu làng Vân and the rượu ngô documented — load the mash, heat gradually, stir (the rice-mash is less viscous than the corn-mash and requires less stirring, but the first 10 minutes still need attention to prevent hot-spots), and collect the distillate in four cuts:

FORESHOTS (first 50-100 ml): DISCARD — the methanol-rich, head-ache-inducing, potentially-toxic first-drips.

HEADS (next 200-300 ml): high-ethanol (65-70% ABV) + high-acetaldehyde + high-ethyl-acetate. The heads in the Kim Sơn distillation carry: a SHARP, SPICY, herb-forward aroma (the men thuốc bắc's most-volatile herbal-compounds — the cinnamaldehyde residues that escaped esterification — are the FIRST to vaporise, and the heads concentrate them). Most distillers: discard or set aside for blending.

HEARTS (2-4 L from 5 kg rice): the GOOD SPIRIT at 38-42% ABV. The hearts carry:

THE 2-AP: the nếp cái hoa vàng's jasmine-popcorn signature, at 20-80 ppb in the distillate. The 2-AP arrives in the EARLY HEARTS (the compound's boiling point is 93°C, close to ethanol's 78.4°C, so the 2-AP co-distils with the ethanol in the hearts' early-and-middle fractions). The 2-AP is the FLORAL NOTE — the note the Kim Sơn spirit shares with the rượu làng Vân (both are nếp-rice-spirits, both carry 2-AP) and that the rượu ngô (corn-spirit) does not carry.

THE HERBAL ESTERS: the cinnamyl acetate (sweet, honey-balsamic), the eugenyl acetate (warm, clove-vanilla), the methyl-chavicol (anise-sweet), and the 12-15 other herbal-esters the men thuốc bắc's fermentation produced. These esters arrive in the MIDDLE-AND-LATE HEARTS (their boiling points are 200-250°C, much higher than ethanol's, but they are carried into the distillate by the STEAM-DISTILLATION effect: the ethanol-water steam "drags" the heavier esters from the mash's liquid-phase into the vapour-phase, and the esters co-condense with the ethanol in the condenser). The herbal-esters are: the Kim Sơn spirit's SIGNATURE — the aromatic layer that distinguishes it from the rượu làng Vân (which carries forest-leaf-esters, not herbal-esters) and from the rượu ngô (which carries corn-derived furfural+DMS, not rice-derived 2-AP or herb-derived cinnamyl-acetate).

THE SALT-AIR TRACE: the Kim Sơn distillers claim — and some analytical-chemistry studies tentatively support — that the distillate carries a faint, barely-perceptible, MINERAL-SALINE finish that the inland spirits do not carry. The proposed mechanism: the coastal-air's salt-aerosol deposits NaCl micro-crystals on the fermentation-vessel's surface during the 7-10 day open-vessel fermentation, and the NaCl dissolves into the mash's surface-layer, and the dissolved NaCl's sodium and chloride ions enter the distillate at TRACE LEVELS (0.5-2 ppm — below the taste-threshold for saltiness, which is roughly 200-500 ppm, but above the threshold for the MINERAL-PERCEPTION that dissolved-ions produce at very low concentrations: the tongue's somatosensory-system can detect dissolved-mineral at 1-5 ppm as a faint, TEXTURAL, "minerally" quality — not salty, not sweet, but MINERAL, the same quality mineral-water drinkers describe as "mouthfeel" and wine-drinkers describe as "minerality").

Whether the salt-air-trace is: chemical-reality or collective-imagination, the Kim Sơn distiller experiences it, the Kim Sơn drinker expects it, and the tasting-note "hơi mặn nhẹ" (slightly salty, gently) appears in every Kim Sơn consumer's description of their district's spirit.

TAILS (last 500 ml+): below 30% ABV, fusel-heavy. STOP when the flame-test shows: yellow, flickering, un-sustained.

THE FINISHED RƯỢU KIM SƠN: 2-4 L of clear, 38-42% ABV rice spirit. SIP:

FIRST SECOND — the ethanol's warmth (the universal TRPV1-activation of all spirits, the throat's familiar burn at 38-42%).

SECOND 2-3 — the 2-AP arrives: FLORAL, jasmine-popcorn, the nếp's signature (the note the rượu làng Vân also carries — the two rice-spirits share this note, and the sharing is: the RICE FAMILY'S hallmark, the way the corn-family's furfural is the corn-spirit's hallmark).

SECOND 3-5 — the HERBAL ESTERS arrive: WARM (the cinnamyl acetate's honey-balsamic), SWEET-SPICE (the eugenyl acetate's clove-vanilla), ANISE-TRACE (the methyl-chavicol's faint star-anise, subliminal), and a ROUNDED, COMPLEX, MULTI-LAYERED aromatic that is: NEITHER purely floral (like the làng Vân) NOR purely grain (like the ngô) but a THIRD THING: floral + herbal + spice, the 12-herb-men's gift to the spirit, the TCM-pharmacy-in-a-sip.

SECOND 5-8 — the FINISH: the spirit's aftertaste lingers. And in the linger: the faint, barely-there, MINERAL note — the "hơi mặn nhẹ" — the salt-air's contribution (or the salt-air's legend), detectable as: a clean, mineral, slightly-saline, slightly-marine quality at the tongue's far-back, lasting 5-10 seconds after the swallow, and saying: this spirit was made 500 metres from the sea, and the sea was in the air, and the air was in the mash, and the mash is in the glass.

PAIR with: cơm cháy + dê (the Ninh Bình identity-pairing — the crispy-rice's neutral crunch + the goat's gamey richness + the spirit's herbal warmth = the province's COMPLETE FLAVOUR TRIANGLE), or with the cá rô Vuông chiên giòn (the double-fried climbing-perch — the spirit cuts through the fried-fish's oil-richness the way the beer cut through the hải sản nướng's mỡ hành), or simply: alone, sipped from the tiny chén, the ceramic cup warm in the hand, the coastal-evening air carrying the same salt that may or may not be in the spirit, and the question of whether it is or isn't is: the last thing the drinker thinks about before the next sip.

Rượu Kim Sơn completes the DISTILLED-GRAIN TRILOGY: three spirits, three grains/locations, three men, three flavour-profiles, and the trilogy demonstrates: the Vietnamese rượu tradition is not ONE spirit but a LANDSCAPE of spirits — each one shaped by its geography (lowland/highland/coast), its grain (rice/corn), its men (forest-leaf/highland-leaf/medicinal-herb), and its air (warm-humid/cool-dry/salt-coastal). The men IS the terroir, the grain IS the geology, and the air IS the geography, and the spirit carries all three to the tongue. The rượu Kim Sơn is: Ninh Bình distilled — the coastal-rice-district's answer to the highland's corn-spirit and the midland's rice-spirit, and the answer is: herbal, floral, faintly mineral, and made 500 metres from the sea.`,
      tip: `The DISTILLED-GRAIN TRILOGY's three men (forest-leaf, highland-forest-leaf, medicinal-herb) represent three different MICROBIAL-SELECTION STRATEGIES: the MEN LÁ (rượu làng Vân + rượu ngô) uses NATURAL SELECTION — the forest-leaves' ambient microorganisms colonise the ball spontaneously, and the microbial-community is: diverse, variable, shaped by the forest's ecology. The MEN THUỐC BẮC (rượu Kim Sơn) uses ANTIMICROBIAL SELECTION — the 12 herbs' antimicrobial-compounds kill the sensitive species and spare the resistant, producing: a CURATED, LESS-DIVERSE, MORE-CONSISTENT community. The two strategies produce: different ESTER PROFILES from the same rice-substrate (the diverse-community produces: a BROAD, COMPLEX ester-suite with many compounds at low concentration; the curated-community produces: a NARROWER, MORE-FOCUSED ester-suite with fewer compounds at higher concentration — the herbal-esters are more PROMINENT in the Kim Sơn spirit because fewer competing esters dilute them). The two strategies are: the WINE-WORLD's wild-yeast-vs-cultured-yeast debate, replayed in the Vietnamese rượu tradition: the forest-men is the "wild fermentation" (complex, variable, terroir-expressive), and the thuốc-bắc-men is the "selected fermentation" (focused, consistent, herb-expressive).`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
