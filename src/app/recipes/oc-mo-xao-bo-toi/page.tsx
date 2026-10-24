'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'oc-mo-xao-bo-toi',
  title: `Ốc Mỡ Xào Bơ Tỏi — Garlic Butter Snails`,
  subtitle: 'Cipangopaludina lecithoides — freshwater apple snails whose operculum-sealed shell creates a PRESSURE COOKER effect during stir-frying: the trapped steam inside the sealed shell reaches 105-110°C at 1.2-1.5 atm, simultaneously cooking the snail meat to precise doneness while preventing the garlic butter sauce from penetrating until the diner breaks the seal with a toothpick, releasing a burst of pressurized shellfish broth that mixes with the external butter in the mouth.',
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '25 mins',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/oc-mo-xao-bo-toi.jpg',
  intro: `The freshwater snail known as ốc mỡ (Cipangopaludina lecithoides, or the closely related C. chinensis) is the most consumed gastropod in Vietnamese nhậu culture — more common than ốc hương (sea snails), cheaper, more widely available, and uniquely suited to the high-heat wok cooking that defines Vietnamese street food. The name "ốc mỡ" translates literally as "fat snail" — not because the animal is particularly fatty (it\\\'s actually quite lean, 1-2% fat by weight) but because the shell has a smooth, glossy surface that looks as if it\\\'s been polished with oil (mỡ).

The snail\\\'s anatomy creates a unique cooking situation. The animal retracts fully into its SHELL (a calcium carbonate structure, 97% aragonite CaCO₃, identical in composition to ốc hương\\\'s shell but with a different crystal habit — orthorhombic vs the nacre layering of marine shells). The opening is then sealed by an OPERCULUM — a horn-like plate (composed of CONCHIOLIN, a protein-polysaccharide complex) that functions as a door. In the living snail, the operculum provides protection from predators and desiccation. In cooking, the operculum creates something far more interesting: a CLOSED SYSTEM.

When an operculum-sealed snail is placed in a hot wok with garlic butter, the shell\\\'s interior becomes a miniature PRESSURE VESSEL. The snail\\\'s body is approximately 75-80% water. As the shell heats on the wok surface (the shell\\\'s aragonite has a thermal conductivity of 2.2 W/m·K — four times higher than the snail\\\'s soft tissue at 0.5 W/m·K — so the shell heats first and transmits heat inward), the water inside begins to evaporate. But the steam CANNOT ESCAPE — the operculum seal, combined with the shell\\\'s rigid walls, traps the vapor. The pressure inside the shell rises above atmospheric — reaching an estimated 1.2-1.5 atm (based on the operculum\\\'s failure pressure, which has been measured at approximately 1.5-2.0 atm in C. chinensis by materials science studies of gastropod opercula). At 1.2-1.5 atm, the boiling point of water inside the shell rises to 105-110°C — higher than the 100°C achievable in an open vessel.

This elevated temperature has two consequences: (1) the snail meat cooks FASTER than it would in boiling water (the rate of protein denaturation approximately doubles for every 10°C increase, so 105-110°C cooks the meat in roughly half the time of 100°C boiling); and (2) the snail\\\'s own BROTH — the water mixed with dissolved proteins, glycogen, and minerals from the snail\\\'s body — is CONCENTRATED by the elevated pressure (less water escapes as vapor, so the dissolved flavors remain at higher concentration). The sealed shell is functioning as a miniature autoclave that simultaneously cooks and concentrates flavor.

The GARLIC BUTTER (bơ tỏi) sauce exists OUTSIDE the shell during cooking. The wok\\\'s hot surface (200-250°C) drives the Maillard reaction and caramelization of the butter\\\'s milk solids and the garlic\\\'s sugars, producing the characteristic golden-brown, intensely aromatic garlic butter. This sauce coats the OUTSIDE of the shells — it cannot penetrate the operculum seal to reach the meat inside. The result is a TWO-PHASE FLAVOR SYSTEM: the exterior of each shell carries garlic butter (rich, nutty, garlicky, caramelized), while the interior holds the snail\\\'s own concentrated broth (clean, mineral, slightly sweet from glycogen, with a faintly metallic note from the dissolved calcium and iron). The diner experiences both flavors in a SPECIFIC SEQUENCE: first the garlic butter (encountered while extracting the snail with a toothpick or pin, as the fingers touch the butter-coated shell and transfer it to the food contact surfaces), then the broth (released as the operculum is pried open, dripping onto the plate or into the mouth), and finally the snail meat itself (firm, clean-tasting, with the concentrated broth\\\'s flavor still clinging to its surface).

The GARLIC in this dish deserves particular attention. Raw garlic contains ALLIIN (S-allyl-L-cysteine sulfoxide), an odorless amino acid derivative. When the garlic is crushed or sliced, the enzyme alliinase converts alliin to ALLICIN (diallyl thiosulfinate) — the pungent compound responsible for fresh garlic\\\'s sharp, burning sensation. Allicin is unstable: at room temperature, it slowly decomposes to diallyl disulfide (DADS) and diallyl trisulfide (DATS), which have the familiar "garlic" aroma but less pungency than allicin itself. At the wok\\\'s temperature (200-250°C), this decomposition is INSTANTANEOUS — the allicin converts to DADS and DATS within seconds, and further thermal decomposition produces AJOENE (a compound with documented antiplatelet activity — it inhibits thromboxane A2 synthesis, the same pathway targeted by aspirin) and VINYL DITHIINS (cyclic sulfur compounds with a sweet, roasted garlic character). The garlic\\\'s transformation in the hot butter is a FOUR-STAGE cascade: alliin → allicin (crushing) → DADS/DATS (initial heating) → ajoene + vinyl dithiins (sustained heating). The finished garlic butter contains ALL FOUR stages at different concentrations, producing a garlic flavor far more complex than any single compound.

Ốc mỡ xào bơ tỏi is the entry-level nhậu dish — it\\\'s the first thing ordered, the cheapest item on the menu, and the one that requires the least eating skill (compared to chicken feet\\\'s elaborate gnawing technique or squid\\\'s urgency). It\\\'s also the most SOCIAL dish: a pile of snails requires everyone at the table to reach in, extract, eat, discard shells, and repeat — the communal pile creates a shared activity that breaks the initial awkwardness of a drinking session. The growing pile of empty shells is also a VISUAL RECORD of consumption — like empty beer bottles or crab shells, the debris tells the story of the evening\\\'s progress.`,
  ingredientSections: [
    {
      title: 'Snails',
      items: [
        { amount: 1, unit: 'kg', name: 'fresh ốc mỡ (freshwater apple snails), purged and cleaned', note: 'In Germany: freshwater snails are less commonly available than in Vietnam. Substitute options: (1) Canned escargots (Weinbergschnecken, Helix pomatia) — available at most German supermarkets; already cooked, so they need only a brief stir-fry in the garlic butter (30 seconds to warm through). (2) Frozen cooked snails from Asian supermarkets. (3) Fresh periwinkles (Strandschnecken) from fish markets — smaller than ốc mỡ but similar cooking technique. If using fresh live snails: purge them for 2-3 days in clean water (change water twice daily) to clear their digestive tract of mud and algae. Scrub shells with a brush under running water. Discard any with cracked shells or that don\\\'t retract when touched (dead snails spoil rapidly and are toxic).' },
      ]
    },
    {
      title: 'Garlic Butter Sauce',
      items: [
        { amount: 80, unit: 'g', name: 'unsalted butter' },
        { amount: 8, name: 'garlic cloves, roughly chopped (not minced)', note: 'Roughly chopped rather than minced — the larger pieces brown more evenly in the butter (minced garlic has too much surface area and burns before the butter\\\'s milk solids have finished browning). The rough chop also provides TEXTURAL PRESENCE — diners encounter golden, crunchy garlic nuggets among the shells, creating a snack-within-a-snack.' },
        { amount: 2, unit: 'tbsp', name: 'cooking oil', note: 'Mixed with the butter to raise the smoke point. Butter alone smokes at 150°C; the oil-butter mixture tolerates 180-200°C, giving enough time for the garlic to brown without the butter burning.' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 2, name: 'bird\\\'s eye chilies, sliced', note: 'Optional but traditional — the capsaicin\\\'s heat pushes the beer consumption that ốc mỡ is designed to accompany.' },
        { amount: 2, name: 'scallion stalks, cut into 2cm segments' },
      ]
    },
    {
      title: 'For Serving',
      items: [
        { amount: 1, name: 'dish muối tiêu chanh' },
        { amount: 1, name: 'pack toothpicks or safety pins for extraction' },
        { amount: 1, name: 'bowl for discarded shells' },
      ]
    }
  ],
  steps: [
    {
      title: 'Prepare the snails — purging and the tip-cut technique',
      description: `If using fresh live snails: after the 2-3 day purging period, bring a large pot of water to a boil with 1 tbsp of salt. Blanch the snails for 2 minutes — this partially cooks them, kills any parasites (freshwater snails can carry Angiostrongylus cantonensis, the rat lungworm — thorough cooking above 74°C for 15+ seconds eliminates this risk entirely), and loosens the connection between the snail\\\'s foot muscle and the operculum.

Drain and rinse under cold water. Using kitchen shears or a small pair of wire cutters, CUT THE TIP of each shell — the pointed apex (the oldest, smallest whorl of the spiral). Remove just 2-3mm of the tip, creating a small hole. This hole serves a critical function during the stir-fry: it allows the PRESSURIZED STEAM to vent gradually rather than building to the operculum\\\'s failure pressure. Without the tip cut, the operculum can blow off explosively in the hot wok, launching shell fragments and boiling broth — dangerous and messy. The small vent hole releases steam at a controlled rate, maintaining elevated pressure (1.1-1.2 atm vs 1.5+ atm without the vent) while preventing explosive failure.

The tip cut also serves the EATING function: when the diner sucks on the shell\\\'s opening, the vent hole at the tip allows air to enter, breaking the vacuum that would otherwise prevent the snail from being extracted by suction. Without the tip cut, extracting the snail requires a toothpick to physically pull the meat out; with the tip cut, the diner can use their LIPS as a suction cup — creating a seal around the shell\\\'s opening and inhaling sharply, which draws air through the tip vent and pushes the snail toward the opening. This suction technique is the characteristic sound of an ốc nhậu session — a rhythmic "slurp-pop" as snails are extracted from their shells.`,
      tip: `The tip-cutting technique is a beautiful example of DUAL-PURPOSE ENGINEERING in folk cooking. The same modification — a small hole in the shell\\\'s apex — solves two completely different problems: a safety problem during cooking (preventing pressure buildup from causing explosive operculum failure) and an ergonomic problem during eating (enabling suction extraction). Neither purpose was likely the original "invention" — the technique probably evolved empirically over generations of cooking ốc mỡ, with cooks who cut the tips having fewer explosive incidents and diners finding extraction easier, until the practice became universal without anyone articulating the physics behind it.`
    },
    {
      title: 'Stir-fry — the wok as heat delivery system',
      description: `Heat a large wok or deep skillet over high heat until smoking — 250-300°C surface temperature. Add the cooking oil, swirl to coat, then add the butter. The butter will foam vigorously as its water content (16%) evaporates. Wait for the foaming to subside — this indicates the water is gone and the butterfat is now at 120-140°C, ready for the garlic.

Add the chopped garlic and stir-fry for 30-45 seconds — the garlic should turn golden but NOT brown. The allicin → DADS/DATS conversion happens during this window; further browning would push the garlic into bitter territory. Add the chilies and stir for 10 seconds.

Add the drained snails ALL AT ONCE. The thermal mass of 1kg of cold, wet snails will drop the wok\\\'s temperature by 80-100°C instantly — this is expected and desirable. TOSS vigorously for 3-4 minutes, using the wok\\\'s curved walls to flip the snails and ensure even heat distribution. Each snail must contact the hot wok surface multiple times during this period.

As the snails heat, you\\\'ll hear SIZZLING (the garlic butter on the shell\\\'s surface browning further), then HISSING (the steam beginning to escape from the tip-cut vents), and finally a gentle RATTLING (the snails\\\' shells vibrating slightly from the internal steam pressure). The rattling indicates the internal pressure has reached its operational level (1.1-1.2 atm) — the meat inside is cooking at 103-106°C.

Add fish sauce, oyster sauce, and sugar. Toss to coat every shell. Add scallion segments in the last 30 seconds — the scallions need only enough heat to wilt and release their allyl sulfides, not enough to brown.

Total stir-fry time from adding snails: 4-5 minutes. The snails are done when: (1) the operculum on any accidentally opened snail shows the meat is firm and opaque (fully cooked); (2) the shell\\\'s surface is coated in a glossy, golden-brown garlic butter glaze; (3) the aroma shifts from raw garlic to sweet, toasted garlic with a background of shellfish steam.`,
      tip: `The wok\\\'s SHAPE is essential for this dish in a way it isn\\\'t for flat-bottomed pan cooking. The wok\\\'s curved sides create a TEMPERATURE GRADIENT from the center (300°C, where the flame contacts) to the rim (150-200°C). During the tossing motion, snails travel from the hot center (where they receive intense heat, browning the garlic butter on their shells) to the cooler sides (where the browning stops and the shells cool slightly before returning to the center on the next toss). This oscillation between intense heat and relative cool prevents any single snail from overheating — the rotation ensures UNIFORM COOKING across all 1kg of snails. In a flat pan, the same quantity of snails would form a deep layer with the bottom ones burning and the top ones barely cooking. The wok\\\'s geometry converts the flat pan\\\'s problem (thermal stratification) into a feature (thermal oscillation).`
    },
    {
      title: 'Serve — the communal pile and the extraction ritual',
      description: `Pour the entire contents of the wok — snails, garlic butter sauce, golden garlic pieces, chilies, and scallions — onto a large, shallow platter or into a deep plate. The garlic butter sauce should pool around the base of the snail pile, and the golden garlic chunks should be scattered across the top like treasures in a pile of shells.

Set out the muối tiêu chanh, toothpicks, and the empty shell bowl (bát vỏ). The shell bowl is essential to nhậu table organization — it prevents the growing pile of empty shells from overwhelming the eating surface and mixing with the full snails still to be consumed.

THE EXTRACTION: Pick up a snail. Hold it with the opening facing you. If using the SUCTION METHOD: press your lips around the shell\\\'s opening, creating a seal. Suck sharply — the air enters through the tip-cut vent, breaks the vacuum, and the snail\\\'s body (now separated from the shell by the cooking heat\\\'s contraction of the foot muscle) slides toward the opening. Catch it with your teeth and pull it free. The suction method delivers the snail\\\'s concentrated broth directly into your mouth along with the meat — the liquid that was trapped inside the pressurized shell shoots out with the meat, providing a warm, intensely savory BURST of liquid flavor that\\\'s immediately followed by the firm, chewy meat. This broth burst is the signature of ốc mỡ eating — it\\\'s impossible to replicate with any other cooking method or any other food, because it depends on the unique combination of a sealed shell, internal pressure, and suction extraction.

If using the TOOTHPICK METHOD: insert the toothpick into the opening, angle it to hook the snail\\\'s foot (the muscular disc at the opening), and twist while pulling. The snail extracts in a single, spiraling motion — the body unwinds from the shell\\\'s coiled interior as you pull. Dip the extracted snail in the pooled garlic butter sauce, then in the muối tiêu chanh, and eat.

The garlic pieces scattered among the shells are a BONUS SNACK — they\\\'ve been twice-cooked (once in the initial garlic butter preparation, once during the stir-fry with the snails), producing a crunchy, deeply caramelized garlic chip that\\\'s salty from the fish sauce and sweet from the butter\\\'s lactose. These garlic chips are fought over at the nhậu table as fiercely as the snails themselves.

Consumption pace: ốc mỡ is naturally self-pacing — each snail requires 15-20 seconds to extract and eat (pick up → position → extract → dip → eat → discard shell), providing a steady, meditative rhythm that\\\'s faster than chicken feet but slower than squid. A table of four typically consumes 1kg of ốc mỡ (approximately 40-60 snails) in 20-30 minutes, with beer consumption averaging 1 can per person during this period.`,
      tip: `The suction extraction technique is acoustically distinctive — the "slurp-pop" of ốc mỡ eating is as iconic a sound of Vietnamese nhậu culture as the clink of beer glasses or the sizzle of grilling meat. The sound has two components: the "slurp" is the rush of air through the tip vent as the diner\\\'s suction creates a pressure differential across the snail\\\'s body; the "pop" is the snail\\\'s foot muscle separating from the operculum\\\'s inner surface, where it was adhered by a thin layer of conchiolin that softened during cooking but didn\\\'t fully dissolve. The pop\\\'s loudness is proportional to the QUALITY of the cook — a properly cooked snail produces a crisp, audible pop (the conchiolin adhesion was intact until the moment of suction, indicating the operculum sealed properly and the internal pressure reached its full value), while an overcooked snail slips out silently (the conchiolin has fully dissolved, the operculum was loose, and the internal broth has leaked out during cooking — a flavorless extraction). Vietnamese nhậu regulars unconsciously listen for the pop — a silent extraction is a disappointment.`
    }
  ],
  tags: ['Stir-Fried', 'Snails', 'Garlic Butter', 'Nhậu', 'Seafood'],
  description: `Cipangopaludina lecithoides shell = miniature pressure vessel. Operculum seal + tip-cut vent → 1.1-1.2 atm internal pressure → 103-106°C cooking (faster protein denaturation + concentrated broth). Two-phase flavor system: external garlic butter (Maillard) + internal pressurized broth (clean, mineral). Garlic allicin→DADS/DATS→ajoene+vinyl dithiins cascade. Suction extraction delivers broth burst directly into mouth. Tip-cut = dual-purpose engineering (safety + ergonomics). Wok temperature gradient enables thermal oscillation.`
};

export default function OcMoXaoBoToiPage() {
  return <RecipeLayout recipe={recipe} />;
}
