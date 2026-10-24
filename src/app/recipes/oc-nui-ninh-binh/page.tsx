'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'oc-nui-ninh-binh',
  title: `Ốc Núi Ninh Bình (Limestone-Mountain Snails — The Karst's Tiny Herbivores)`,
  subtitle: `Small, spiral-shelled land snails — gathered by hand from the limestone cliffs and crevices of the Tràng An karst, where they feed on the same mineral-rich, aromatic crevice-herbs the mountain goats eat — boiled or steamed with lemongrass and ginger, extracted with a pin, and dipped in muối ớt (chili salt). The collection's SMALLEST animal protein per unit, the simplest preparation, and the most DIRECT terroir-to-table chain: the snail ate the limestone's herbs, and now you eat the snail, and the limestone is on your tongue.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '30 min + 2-3 hr purging',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/oc-nui-ninh-binh.jpg',
  intro: `Ốc núi — literally "mountain snail" — is a collective term for several species of LAND SNAIL (principally Cyclophorus spp. and Camaena spp.) that inhabit the limestone karst formations of Ninh Bình, Hà Nam, and the broader northern Vietnamese karst belt. These are NOT the marine gastropods (the ốc hương the Khánh Hòa collection documented), not the freshwater pond-snails (the ốc bươu the Mekong collections referenced), but TERRESTRIAL SNAILS — snails that live entirely on land, on the karst's vertical limestone surfaces, in the rock's crevices and under the rock's overhangs, breathing air, drinking dew, and eating the CREVICE-FLORA: the mosses, lichens, wild herbs, and decaying leaf-litter that accumulate in the karst's micro-environments.

The ốc núi is SMALL — shell diameter 15-25 mm, total weight (with shell) roughly 5-10 g, edible flesh roughly 2-4 g per snail. The smallness means: 20-30 snails per serving (vs the ốc hương's 8-12 per serving), and the eating is: REPETITIVE, MEDITATIVE, PIN-AND-EXTRACT at a rate of roughly one snail per 15-20 seconds, the pile diminishing slowly, the empty shells accumulating, and the eating's PACE is the format's pleasure — the ốc núi is not a quick protein-hit but a SLOW GRAZE, a 30-45 minute picking-and-dipping session that the Vietnamese call "nhậu ốc" (snail-snacking) and that occupies the same social niche as: sunflower-seed-cracking, pistachio-shelling, or edamame-popping — the repetitive, low-effort, hand-to-mouth activity that accompanies conversation and beer.

The LIMESTONE CONNECTION: the snail's shell is: 95-98% CALCIUM CARBONATE (CaCO₃) — the same mineral the limestone rock beneath it is made of. The snail builds its shell by: absorbing dissolved calcium from the rock's surface-moisture (the limestone dissolves slightly in rainwater, producing a calcium-rich solution the snail drinks), and precipitating the calcium as aragonite crystals (a crystalline form of CaCO₃) in its mantle-tissue, adding 0.1-0.5 mm of new shell per month. The snail IS the rock, mineralogically — the shell's CaCO₃ came from the karst's CaCO₃, and the snail is: a MOBILE FRAGMENT of the limestone, walking across the limestone on its own muscular foot, carrying the limestone on its back. The snail eating the rock's herbs and building its shell from the rock's calcium is the karst's most COMPACT FOOD-CHAIN: rock → herb → snail → human, four links, each one a transformation of the limestone's mineral wealth.

The FLESH's flavour reflects the DIET: the ốc núi feeds on the karst's crevice-herbs (the same thymol-and-carvacrol-rich wild herbs the mountain goats eat), and the herb-compounds that enter the goat's muscle at 0.01-0.1 ppm enter the snail's tiny body at HIGHER concentrations (the snail's body-mass is 1,000-2,000x smaller than the goat's, but the daily herb-intake per gram of body-weight is comparable — the snail eats roughly 5-10% of its body-weight in herbs per day vs the goat's 3-5% — and the herb-volatiles are therefore MORE CONCENTRATED in the snail's tissues per gram). The result: the ốc núi's flesh carries a DETECTABLE, not subliminal, herb-aromatic that the larger goat carries only at subliminal levels. The ốc núi eater who has also eaten the dê núi đá can TASTE the connection: the same herbs, one LOUD (in the snail), one QUIET (in the goat), because the snail's smaller body concentrates what the goat's larger body dilutes.

The PREPARATION is the Vietnamese snail-kitchen's MOST MINIMAL: boil or steam, extract, dip. No sauce beyond salt-and-chili. No cooking-method beyond heat-application. No flavour-addition beyond lemongrass-and-ginger in the boiling water. The minimalism is: the same FRESHNESS-DEPENDENT minimalism the ốc hương documented — when the ingredient is small, the preparation is simple, because small means: fresh (the snail was gathered today, from the mountain 2 km away), clean (the snail's herb-diet produces a clean-tasting flesh, unlike the pond-snail's mud-diet), and FLAVOURFUL per gram (the herb-concentration means the tiny flesh carries disproportionate flavour, and no sauce is needed to augment it).`,
  ingredientSections: [
    {
      title: 'The snails',
      items: [
        {
          amount: 1,
          unit: 'kg',
          name: 'ốc núi (land snails from limestone mountains), alive, purged',
          note: `PURGE before cooking: soak the live snails in clean water with 1 tbsp salt and 1 tbsp vinegar for 2-3 hours. The snails retract into their shells and expel their digestive contents (the gut-contents carry the HIGHEST geosmin/earthy-compound concentration and any residual soil/debris from the snail's foraging). Change the water 2-3 times during purging. After purging: scrub each shell under running water with a small brush (the shell's surface carries lichens, moss and dirt from the limestone that would cloud the cooking-water). The purged, scrubbed snails: clean shells (the spiral pattern visible — cream-brown with darker bands, species-specific), retracted bodies (the foot pulled inside the aperture, the operculum — the tiny "door" — closed).`,
        },
      ],
    },
    {
      title: 'The boiling aromatics',
      items: [
        { amount: 4, name: 'stalks lemongrass, bruised and knotted' },
        { amount: 20, unit: 'g', name: 'ginger, bruised' },
        { amount: 3, name: 'kaffir lime leaves, torn' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1.5, unit: 'L', name: 'water' },
      ],
    },
    {
      title: 'Dipping — muối ớt (chili salt)',
      items: [
        { amount: 2, unit: 'tbsp', name: 'coarse salt' },
        { amount: 1, unit: 'tsp', name: 'chili flakes or ground bird\'s-eye chili' },
        { amount: 4, name: 'limes, in wedges', note: `Squeeze onto each extracted snail before dipping in the chili-salt — the lime's citric acid brightens the snail's herb-mineral flavour. Muối ớt + lime = a variant of muối tiêu chanh where CHILI replaces PEPPER — the capsaicin's TRPV1-hot replacing the piperine's TRPV1-warm, a higher-intensity activation for the small-but-flavourful snail.` },
      ],
    },
    {
      title: 'The extraction tool',
      items: [
        { amount: 4, name: 'pins or toothpicks (kim lấy ốc)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Boil 8-10 minutes with lemongrass — the shells click, the flesh sets, the herbs infuse',
      description: `BOIL: bring 1.5 L water to a vigorous boil with the lemongrass, ginger, lime leaves and salt. The aromatics simmer for 3-5 minutes before the snails go in (the citral, gingerol and citronellal dissolve into the water, producing an aromatic bath that will infuse the snails during cooking).

ADD the purged, scrubbed snails — all at once. The moment the snails enter the boiling water: the thermal shock KILLS them within 10-15 seconds (the land snail's body-temperature is ambient, 20-25°C, and the 100°C water produces an instant, lethal thermal shock — faster and more humane than the slow-heating method some recipes use). The snails' feet, previously retracted, RELAX in death and extend slightly from the aperture (the muscles that held the foot retracted release, and the foot protrudes 2-3 mm from the shell's opening — the protrusion is the cooking's first VISUAL CUE that the snails are dead and beginning to cook).

BOIL 8-10 minutes:

MINUTE 0-3: the snail-flesh's myosin DENATURES (the same 55-60°C gelation every protein in the collection documented — the snail's foot-muscle, which is: a single, dense, collagen-rich muscle that the snail uses for locomotion, sets from soft-raw to firm-cooked). The flesh SHRINKS slightly inside the shell (the denatured protein contracts, pulling the foot's tip 1-2 mm deeper into the shell than its death-extended position — the shrinkage is normal and does not affect extraction).

MINUTE 3-6: the lemongrass's CITRAL enters the shell through the aperture — the boiling water, now carrying the dissolved citral, flows in and out of the shell with the water's convective currents, and the citral deposits on the flesh's surface inside the shell. The snail's flesh absorbs the citral at: roughly 1-2 ppm (detectable as a faint, clean, lemongrass-citrus note when the flesh is extracted and sniffed — the same steam-infusion-through-aperture the ốc hương's lemongrass-beer-steam documented, here through the boiling-water's liquid-phase rather than through steam's gas-phase).

MINUTE 6-8: the flesh is FULLY COOKED — the collagen in the foot-muscle has partially converted to gelatin (the snail's foot-collagen is: TYPE-I, fibrillar, the same collagen-class the mammalian meats carry, but at a HIGHER PROPORTION of the foot's total protein — roughly 30-40% collagen vs mammalian muscle's 1-5%, because the snail's entire locomotion depends on the foot-muscle's collagen-reinforced structure). The collagen-to-gelatin conversion at 8-10 minutes produces a flesh that is: TENDER-CHEWY (not soft-dissolving like the long-simmered thắng cố's meat, but a firm, springy, resistant chew that requires 4-6 chews per piece — the chewiness is the snail-meat's SPECIFIC mouthfeel, the same firm-collagen-rich-chew the ốc hương documented, here from a DIFFERENT species but from the same GASTROPOD MUSCULAR ARCHITECTURE).

MINUTE 8-10: DONE. Remove from heat. The snails can sit in the hot, aromatic water for 10-15 minutes without over-cooking (the land snail's dense, collagen-rich flesh is more FORGIVING of extended heat than the marine-shrimp's lean, low-collagen flesh — the same collagen-buffer the tripe and the tendon exploit in the thắng cố's multi-hour simmer).

DRAIN (or serve the snails in the aromatic water — some vendors serve the snails IN the lemongrass-ginger water, and the eater fishes the snails from the water one at a time, the water keeping them warm throughout the 30-45 minute grazing session).`,
      tip: `The ốc núi's CALCIUM contribution: each snail's shell is 95-98% CaCO₃, and while the eater does NOT eat the shell, the boiling water DISSOLVES a trace amount of the shell's calcium (the boiling water's mild acidity — from the dissolved CO₂ and the lemongrass's organic acids — leaches roughly 5-15 mg of calcium per snail from the shell's inner surface during the 8-10 minute boiling). A serving of 25 snails therefore contributes roughly 125-375 mg of dissolved calcium to the cooking-water, which the eater consumes IF the snails are served in the cooking-water (the Ninh Bình tradition — the water IS the broth, and the broth IS calcium-enriched). The snail is therefore a DUAL-MINERAL delivery: the flesh provides IRON (the gastropod's haemocyanin — the copper-containing oxygen-carrying protein, rather than the mammalian haemoglobin's iron), and the shell provides CALCIUM (dissolved into the cooking-water). The ốc núi is: a MINERAL SUPPLEMENT disguised as a beer-snack.`,
    },
    {
      title: 'Extract with pin, dip in muối ớt + lime — the slow graze, the mountain on the tongue',
      description: `SERVE: the boiled snails in a large bowl (either drained on a plate, or in the aromatic lemongrass-ginger cooking-water — the water-serve is traditional and keeps the snails hot). Set the muối ớt saucer and the lime wedges alongside. Distribute the pins.

THE EXTRACTION (the same pin-hook-pull technique the ốc hương documented, scaled DOWN):

HOLD: pick up one snail between thumb and forefinger. The shell is: SMALL (15-25 mm — it fits between two fingertips), WARM (from the boiling), and BEAUTIFUL (the spiral's logarithmic curve, the cream-brown bands, the natural geometry that the mathematician and the biologist both admire — the Fibonacci spiral visible in the shell's growth-pattern, each whorl 1.618x the radius of the previous, the golden ratio in calcium carbonate).

INSERT the pin into the aperture — the pin enters the shell's spiral. The snail's foot is: 5-10 mm inside (retracted during death and shrunk during cooking). Hook the foot's tip with the pin's sharp end.

PULL — a gentle, twisting pull (the twist follows the shell's spiral, unwinding the coiled flesh from the columella). The flesh emerges: a tiny (2-4 g), pale-grey-to-cream, coiled morsel — the foot and the visceral mass together, the foot being the edible part (the firm, collagen-rich muscle) and the visceral mass being: OPTIONAL (the hepatopancreas and the reproductive organs — some eaters eat the whole extraction, some pinch off the viscera and eat only the foot. The viscera of the LAND snail are: LESS INTENSELY FLAVOURED than the marine ốc hương's hepatopancreas, and LESS BITTER — the land snail's diet of herbs and leaves produces a visceral-mass that is: mildly herbal, slightly liver-like, inoffensive to most palates).

SQUEEZE lime over the extracted flesh — the citric acid's bright-clean acidity contacts the warm, cooked flesh, and the acid denatures a thin, final surface-protein layer (the same lime-finish the tôm Đầm Vạc's muối tiêu chanh documented — the lime "finishes" the cooking at the molecular level).

DIP in muối ớt — the coarse salt crystals and the chili flakes adhere to the lime-wet surface.

BITE: the flesh CHEWS — 4-6 chews, the collagen-rich foot-muscle resisting the tooth with a firm, springy, slightly rubbery resistance that is: more chewy than shrimp, less chewy than octopus, the GASTROPOD CHEW that the snail-eater recognises as correct and that the non-snail-eater needs 3-4 snails to calibrate to. The flavour during the chewing unfolds:

CHEW 1-2: the SALT hits (the muối ớt's coarse crystals dissolving on the tongue — NaCl, the amplifier), and the CHILI hits (the capsaicin's TRPV1 activation, arriving 1 second after the salt — the burn, hot, sharp, the central-northern highland's preferred heat-delivery over the pepper's milder piperine-warm).

CHEW 3-4: the SNAIL'S OWN FLAVOUR emerges (the chewing ruptures the muscle-fibres, releasing the intracellular amino acids — glycine-sweet, alanine-mild, and the HERB-TRACE: the thymol and carvacrol from the karst's crevice-herbs, concentrated in the snail's small body at DETECTABLE levels, arriving as a warm, herbal, oregano-adjacent aromatic that no sauce contributed and no spice provided — the herb-trace is the SNAIL'S OWN, carried from the limestone's crevice-flora through the snail's digestive tract to the snail's muscle to the eater's tongue). The herb-trace is the ốc núi's TERROIR — the taste the lowland-farmed snail does not carry, the taste that says: this snail climbed the karst, ate the wild thyme, and the wild thyme is on your tongue.

CHEW 5-6: the LIME arrives (the citric acid, absorbed into the flesh's surface during the dip, released during the final chews as the flesh's surface-layer breaks apart — the sour-bright, arriving LAST, cleansing the palate of the salt-chili-herb and preparing the mouth for the NEXT SNAIL).

THE PACE: one snail every 15-20 seconds (5 seconds to extract, 2 seconds to dip, 8-10 seconds to chew, 2-3 seconds to discard the shell). A 25-snail serving takes 6-8 minutes. The eating is: RHYTHMIC (the repetition creates a meditative, almost trance-like, pick-dip-chew-discard cycle that the Vietnamese nhậu-culture values as: RELAXATION, the opposite of the hurried meal, the slow-food in its most literal form), and SOCIAL (the 30-45 minute ốc-session is: a conversation-format, a beer-pairing-event, a gathering where the shells pile up on the table as the EVIDENCE of time spent together, and the pile's height measures the evening's length and the friendship's depth).

THE SHELL PILE: the empty shells — cream-brown, spiralled, hollow, each one a calcified autobiography of a snail that lived on a limestone mountain — accumulate on the table or in a discard-bowl, and the pile is: the meal's RESIDUE, the inedible record of the edible event, and the pile is BEAUTIFUL (the spirals nested, the colours banded, the mathematics visible — the pile of empty ốc-núi shells is one of the Vietnamese table's most aesthetically-pleasing WASTE-PRODUCTS, and some restaurants display the emptied shells as DECORATION, the food's geometry surviving the food's consumption).

Ốc núi Ninh Bình is the collection's SMALLEST-PER-UNIT protein, the most TERROIR-CONCENTRATED per gram (the herb-trace is louder in the 3 g snail than in the 30 kg goat), and the most MEDITATIVE eating format (the 15-20 second cycle repeated 25x = 6-8 minutes of rhythmic, social, slow extraction-and-consumption). The snail IS the mountain, the mountain IS the limestone, and the limestone IS the shell, and the shell is on the table, empty, spiralled, and still beautiful.`,
      tip: `The ốc núi's HAEMOCYANIN (the gastropod's oxygen-carrying protein) is fundamentally different from the mammalian HAEMOGLOBIN the collection has documented in every beef, goat and buffalo recipe: haemocyanin uses COPPER (Cu²⁺) at its oxygen-binding site, while haemoglobin uses IRON (Fe²⁺). The copper-based oxygen-carrying produces: BLUE BLOOD (the oxygenated haemocyanin is blue — the Cu²⁺-O₂ complex absorbs red light and reflects blue, the opposite of haemoglobin's red) and a DIFFERENT MINERAL TASTE (the snail's flesh carries copper-mineral rather than iron-mineral at the taste level — the copper-mineral is: less metallic than iron, more "mineral-clean," closer to the taste of well-water than to the taste of blood. The iron-metallic taste the bò tái chanh and the thắng cố documented is ABSENT in the ốc núi — the snail's mineral-taste is COPPER-CLEAN rather than IRON-BLOOD, and the difference is: the haemocyanin's copper vs the haemoglobin's iron, two metals, two tastes, two kingdoms of animal life).`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
