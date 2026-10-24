'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'tom-dam-vac',
  title: `Tôm Đầm Vạc Hấp Sả (Lemongrass-Steamed Lagoon Shrimp — Vĩnh Yên)`,
  subtitle: `Freshwater shrimp from Đầm Vạc — the 250-hectare lagoon in the centre of Vĩnh Yên city — steamed on a bed of bruised lemongrass until the shells turn vivid orange-red, the flesh snaps white and sweet, and the lemongrass's citral infuses the steam that cooks the shrimp from below. Served with muối tiêu chanh — the 10th appearance of the collection's most recurring condiment — and eaten by hand: peel, dip, bite, and the lagoon is on the tongue.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '25 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/tom-dam-vac.jpg',
  intro: `Đầm Vạc — a natural freshwater lagoon of roughly 250 hectares, sitting in the geographical centre of Vĩnh Yên city (Vĩnh Phúc's capital) — is one of the few URBAN LAGOONS in Vietnam that still supports commercial aquaculture within a city's limits. The lagoon's shrimp (principally tôm sú — the giant tiger prawn, Penaeus monodon, farmed in the lagoon's netted enclosures — and the smaller tôm rảo, the freshwater shrimp Macrobrachium nipponense, caught wild from the lagoon's weedy shallows) are Vĩnh Yên's most localised food product: caught in the morning, sold at the lakeside market by noon, and on the dinner table by evening, the supply chain measured in METRES rather than in kilometres.

The preparation is the Vietnamese kitchen's most MINIMAL shrimp technique: steaming. No marinade, no sauce, no frying, no curry — the shrimp are placed on a bed of bruised lemongrass in a steamer basket, the lid is closed, and the shrimp cook in lemongrass-infused steam for 5-7 minutes. The minimalism is INTENTIONAL: the Đầm Vạc shrimp's freshness (hours from lagoon to table, not days from coast to interior) means the flavour needs no augmentation — the shrimp's own glycine-sweetness (the amino acid that gives all crustaceans their characteristic "sweet" taste), the shell's astaxanthin-release (the carotenoid pigment that shifts from grey-green in the raw shell to vivid orange-red upon heat-denaturation of the crustacyanin protein that normally binds and suppresses the astaxanthin's colour), and the flesh's SNAP (the myosin gel that sets at 60-65°C, producing the firm, snapping, just-cooked texture the overcooked shrimp loses) are sufficient.

THE LEMONGRASS BED: 5-6 stalks of lemongrass, bruised (smashed with the knife's flat side to rupture the cell walls and release the essential oil — principally citral, at 60-80% of the oil's composition), arranged as a flat bed in the steamer basket, with the shrimp resting ON TOP. The boiling water below the basket produces STEAM that rises through the lemongrass bed BEFORE reaching the shrimp — the steam EXTRACTS the citral from the bruised lemongrass's ruptured cells, and the citral-laden steam then contacts the shrimp's shell surface, depositing the citral onto the shell. The shrimp is therefore cooked in LEMONGRASS-INFUSED STEAM — the citral arrives with the heat, and the shrimp absorbs the lemongrass's aroma DURING the cooking rather than having it applied before or after. The simultaneous heat-and-aroma delivery is more efficient than a marinade (which sits on the surface and partially evaporates) or a post-cooking garnish (which contacts only the exterior): the steam penetrates the shell's micro-pores and carries the citral to the flesh's surface, producing a lemongrass aroma that is INSIDE the shell, detectable when the eater peels the shell and sniffs the exposed flesh.

The steaming also preserves the shrimp's NUTRITIONAL profile more completely than any other cooking method: steaming at 100°C for 5-7 minutes produces minimal vitamin-C loss (<10%, vs frying's 30-40% and boiling's 50-60%), no fat addition (vs frying's 10-20% oil absorption), and no flavour-leaching (vs boiling, where the shrimp's glycine and other water-soluble amino acids dissolve into the boiling water and are discarded with it — the steam contacts the shrimp without submerging it, and the flavour stays IN the shrimp rather than diffusing OUT into the cooking liquid).

THE SHELL-ON EATING: the Đầm Vạc shrimp is served SHELL-ON (not peeled before cooking — peeling before steaming allows the flesh to dry and the surface to overcook, because the shell's protection is removed). The shell serves THREE functions during steaming: INSULATION (the shell's chitin layer slows the heat's penetration to the flesh, producing a gentler, more even cooking that reaches the flesh's centre WITHOUT overcooking the surface — the same insulation the bamboo tube provides in cơm lam), MOISTURE RETENTION (the shell traps the flesh's moisture inside, preventing evaporation — the steamed-in-shell shrimp retains roughly 85-90% of its raw moisture, vs the peeled-and-steamed shrimp's 75-80%), and FLAVOUR CONTAINMENT (the shell keeps the glycine and the other water-soluble flavour compounds inside the flesh rather than letting them evaporate into the steam — the shell is a FLAVOUR SEAL).

The eater peels the shell AT THE TABLE — the peel is part of the eating ritual: crack the shell between thumb and forefinger, pull the shell segments apart, the flesh inside steams faintly (the residual heat still rising from the just-cooked flesh), and the lemongrass aroma that was TRAPPED between the shell and the flesh during steaming releases in a small, concentrated, citral-rich puff. The peel-and-sniff moment is the Đầm Vạc tôm hấp sả's specific pleasure — the pleasure the pre-peeled shrimp cannot deliver, because the pre-peeled shrimp has no shell to trap the aroma and no peel to release it.`,
  ingredientSections: [
    {
      title: 'The shrimp',
      items: [
        {
          amount: 800,
          unit: 'g',
          name: 'fresh shrimp (tôm sú or tôm rảo), shell-on, head-on, deveined through the shell if desired',
          note: `FRESH — the minimalist preparation exposes the shrimp's quality without any sauce to hide behind. Frozen shrimp's ice-crystal-damaged cells release more moisture during steaming (the ruptured cell walls cannot hold the water), producing a drier, less snappy, less sweet result. Head-on: the head contains the hepatopancreas (the "tomalley"), which during steaming releases a rich, concentrated, slightly briny, intensely savoury liquid that pools inside the head-shell — the eater who sucks the head receives this liquid, and the liquid is the shrimp's most flavour-dense component.`,
        },
      ],
    },
    {
      title: 'The lemongrass bed',
      items: [
        { amount: 6, name: 'stalks lemongrass, bruised and halved lengthwise', note: `Bruise HARD — the more cell walls ruptured, the more citral released into the steam. The halved stalks lie flat in the steamer, creating a stable bed the shrimp rest on.` },
      ],
    },
    {
      title: 'The steaming',
      items: [
        { amount: 1, name: 'steamer pot with basket (bamboo or metal), lid tight-fitting' },
        { amount: 500, unit: 'ml', name: 'water for steaming (the water does not touch the shrimp — only the steam reaches them)' },
      ],
    },
    {
      title: 'Muối tiêu chanh — the 10th appearance',
      items: [
        { amount: 2, unit: 'tbsp', name: 'coarse salt' },
        { amount: 1, unit: 'tsp', name: 'black pepper, freshly cracked' },
        { amount: 3, name: 'limes, in wedges' },
      ],
    },
    {
      title: 'Optional accompaniments',
      items: [
        { amount: 100, unit: 'g', name: 'rau sống: rau răm, húng quế, lettuce' },
        { amount: 4, name: 'bowls of steamed rice' },
        { amount: 1, name: 'saucer of nước mắm gừng (the Vĩnh Tường ginger dressing from the bò tái chanh — works beautifully with steamed shrimp as well)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the lemongrass bed, steam 5-7 minutes — the shell insulates, the citral infuses',
      description: `Bring the water to a vigorous boil in the steamer pot. Arrange the bruised, halved lemongrass stalks in the steamer basket — a flat, overlapping bed covering the basket's base.

Place the shrimp ON TOP of the lemongrass bed — a single layer (overlapping shrimp steam unevenly: the bottom shrimp overcooks while the top shrimp is still raw). If the quantity exceeds one layer: steam in two batches.

COVER with the tight-fitting lid. The steam from the boiling water rises through the basket's openings, passes THROUGH the lemongrass bed (extracting the citral from the bruised stalks' ruptured cells en route), and contacts the shrimp's shells from below.

STEAM 5-7 minutes:

MINUTE 0-2: the shrimp's shells begin to change colour — the grey-green raw colour shifts toward ORANGE as the heat denatures the crustacyanin protein that binds the astaxanthin pigment. The crustacyanin-astaxanthin complex is: grey-green when intact (the protein's binding shifts the astaxanthin's absorption spectrum, suppressing its natural orange-red colour). When the protein denatures (at 56-60°C), it RELEASES the astaxanthin, and the astaxanthin's unmasked orange-red colour appears. The colour change is a TEMPERATURE INDICATOR: grey-green = below 56°C (raw), orange-pink = 56-65°C (cooking), vivid orange-red = 65°C+ (cooked). The cook watches the colour and knows the temperature without a thermometer.

MINUTE 2-4: the flesh's myosin GELS — the same myosin gelation every shrimp preparation in the collection has documented (the myosin denatures at 55-60°C and cross-links into a gel network that is firm, white, opaque, and SNAPPING). The flesh transitions from translucent-grey to opaque-white as the myosin unfolds and aggregates. The shrimp's body curls (the dorsal muscle contracts faster than the ventral muscle during denaturation, pulling the shrimp into its characteristic C-curve — the tighter the curl, the more denatured the dorsal muscle, and a fully-curled-into-an-O shrimp is OVERCOOKED).

MINUTE 4-5: the lemongrass's citral, carried by the steam, has deposited onto the shell's surface and penetrated through the shell's micro-pores to the flesh. The shrimp flesh now carries a detectable lemongrass aroma ON and SLIGHTLY INSIDE its surface.

MINUTE 5-7: DONE — the shell is uniformly vivid orange-red, the flesh is opaque-white throughout (a cross-section shows no translucent-grey raw core), the body is C-curved (not O-curled), and a gentle squeeze of the shell produces a SNAP from the firm, gelled flesh inside (the snap is the myosin-gel's elastic resistance — it compresses and springs back, the same bounce the bò viên and the giò lụa documented, here at a lower extraction level and a more delicate scale).

Remove lid. The steam billows out — carrying a concentrated dose of the lemongrass's citral + the shrimp's own volatile amines (trimethylamine at very low concentration — fresh shrimp produces minimal TMA, and the TMA that does form is perceived at this level as "oceanic" rather than "fishy") + the astaxanthin's faint, carotenoid-derived aroma. The steam-cloud is the dish's ANNOUNCEMENT — the nose reads "lemongrass + sweet shrimp + ocean" in 2 seconds.

Transfer the shrimp to a serving plate — the vivid orange-red shells on a white plate, the bruised lemongrass underneath (the lemongrass bed comes to the table as a VISUAL BED — the pale-green stalks beneath the vivid-orange shrimp, the colour contrast that says "this was steamed on grass").`,
      tip: `The astaxanthin COLOUR CHANGE (grey-green → orange-red) is one of food science's most visually dramatic molecular events: the crustacyanin protein, when native (intact), SHIFTS astaxanthin's absorption maximum from 480 nm (orange-red, astaxanthin's natural colour) to 630 nm (blue-green, the protein-bound colour), by twisting the astaxanthin molecule into a strained conformation that changes its electronic conjugation. When the protein denatures at 56-60°C, the strain is released, the astaxanthin relaxes to its natural conformation, and the absorption shifts BACK to 480 nm — the orange-red appears. The colour is therefore a THERMOMETER: the orange-red appears at the SAME temperature the myosin gels (55-60°C), making the colour change a reliable, instantaneous, visual indicator of doneness. The cook who steams shrimp does not need a probe thermometer — the shrimp carries its own built-in temperature indicator in its shell pigment.`,
    },
    {
      title: 'Peel at the table, dip in muối tiêu chanh — the 10th appearance, the simplest format',
      description: `Serve the steamed shrimp IMMEDIATELY — shell-on, head-on, the orange-red shells glistening with condensed steam, the lemongrass aroma rising from the plate.

Set the muối tiêu chanh beside the plate: coarse salt + cracked pepper in a saucer, lime wedges alongside. The TENTH APPEARANCE of the collection's most recurring condiment — salt (ENaC), pepper (TRPV1), lime (PKD2L1), three receptor systems, three ingredients, the minimal complete condiment now documented across: poultry (3x), beef (2x), pork (1x), seafood (2x), dried fish (1x), and STEAMED SHRIMP (1x) — ten appearances spanning every protein category and every cooking method in the Vietnamese kitchen.

THE PEEL: pick up a shrimp. Crack the shell between thumb and forefinger — the denatured chitin (softened by the steam's moisture) fractures into segments. Pull the shell away from the flesh — the shell peels cleanly (the steam's heat contracted the flesh away from the shell during cooking, creating a thin GAP between the two that the fingers exploit).

THE PEEL-AND-SNIFF: as the shell separates, the space between the shell and the flesh — which during steaming was a sealed, lemongrass-citral-infused, shrimp-aroma-concentrated micro-chamber — OPENS, and the trapped aromas release in a small, concentrated PUFF: citral (bright, green, the lemongrass's gift), glycine-derived sweetness (the shrimp's own amino-acid volatile, warm and marine), and a trace of the shell's chitin-aroma (faintly minerally, faintly oceanic, the exoskeleton's contribution). The puff lasts 2-3 seconds. The pre-peeled shrimp cannot deliver this moment — the pre-peeled shrimp lost its trapped aromas during cooking (the aromas, without the shell-seal, evaporated into the steamer's air), and the pre-peeled shrimp at the table smells of: shrimp, weakly. The shell-peeled-at-table shrimp smells of: lemongrass + sweet shrimp + ocean, intensely. The shell is the AROMA CAPSULE, and the peel is the capsule's opening.

DIP: squeeze a lime wedge over the peeled shrimp — the citric acid droplets hit the warm, exposed flesh and react immediately (the acid denatures a thin, final layer of surface myosin that the steam's gentler heat left slightly under-denatured — the lime "finishes" the cooking at the molecular level, producing a surface that is fractionally FIRMER and MORE OPAQUE than the steam-alone surface). Press the lime-wet shrimp into the muối tiêu chanh — the salt crystals and the cracked pepper fragments adhere to the moist flesh.

BITE: the flesh SNAPS (the myosin-gel fractures cleanly — the shrimp-snap is the SAME gel-fracture the giò lụa documented, here at a lower myosin-extraction level and therefore a MORE DELICATE snap: the steamed-whole-shrimp gel is softer than the pounded-and-pressed giò lụa gel, because the shrimp's myosin was NOT extracted and realigned by mechanical force — it gelled in situ, in its natural fibre orientation, producing a gel that is firm but not BOUNCY). The flesh is: WHITE (the denatured myosin's opacity), SWEET (the glycine — the crustacean's signature amino acid, present at roughly 0.5-1% of the flesh's weight, detectable as a clean, mineral-free, slightly marine sweetness that no other protein in the collection matches), and MOIST (the shell retained 85-90% of the raw moisture — the steamed shrimp is JUICIER than the fried, boiled or grilled shrimp, because the shell prevented the moisture-loss that exposed-flesh cooking methods allow).

The lime's SOUR hits alongside the glycine's SWEET — sour + sweet in the same millisecond, from different sources (lime from the dip, glycine from the flesh), and the two tastes do not cancel but AMPLIFY (the sour enhances the sweet's perceived intensity by contrast — the same contrast-enhancement every sour-beside-sweet pairing in the collection has documented). The pepper's WARM follows at second 2 (the piperine's TRPV1 activation, the trio's third receptor). The salt's SALTY anchors everything.

The head: SUCK the head — the hepatopancreas liquid inside (rich, briny, intensely savoury — the shrimp's concentrated umami reservoir, carrying glutamate at roughly 200-400 mg/100g, HIGHER than the flesh's 50-100 mg/100g) floods the mouth in a 1 ml burst that is: SALTY, OCEANIC, DEEPLY SAVOURY, and lasting (the hepatopancreas's fat coats the tongue and extends the umami's duration by 5-10 seconds beyond the water-soluble glutamate's normal 3-4 second residence).

Tôm Đầm Vạc hấp sả is the Vĩnh Phúc collection's most MINIMAL recipe — the recipe with the fewest ingredients (shrimp + lemongrass + salt + pepper + lime = 5), the fewest steps (bruise, steam, serve = 3), the shortest cooking time (5-7 minutes), and the most RELIANCE ON FRESHNESS (the minimalism has nowhere to hide: a stale shrimp in this preparation is immediately, unforgivably detectable, because no sauce, no spice, no frying-crust masks the off-flavour). The minimalism is the CONFIDENCE — the confidence that the ingredient is good enough to carry the dish alone, and the ingredient is the lagoon 200 metres from the kitchen, and the lagoon is the recipe's only secret.`,
      tip: `Muối tiêu chanh's TENTH APPEARANCE — poultry (gà Hồ, gà đồi, gà luộc), beef (bò lúc lắc, bò nướng ngói), pork (lợn cắp nách), seafood (ghẹ, tôm chiên), dried fish (khô cá tra phồng), and now steamed shrimp (tôm Đầm Vạc) — completes the condiment's documentation across every major Vietnamese protein category and confirms its status as the collection's MOST UNIVERSAL condiment. The trio activates THREE RECEPTOR SYSTEMS (ENaC sodium channels, TRPV1 capsaicin/heat receptor, PKD2L1 sour receptor) with THREE INGREDIENTS — the maximum receptor-coverage per ingredient of any condiment documented. The universality validates the MINIMAL COMPLETE CONDIMENT thesis: salt + pepper + lime is the fewest ingredients that cover the most receptor systems, and the coverage is the reason the trio appears beside every protein the Vietnamese kitchen serves: the trio is always SUFFICIENT, and the sufficiency is the reason no Vietnamese table is ever without a lime, a pepper grinder, and a salt dish.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
