'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ruoc-tom-nghe-an',
  title: `Ruốc Tôm Nghệ An (Dried Shrimp Floss — Nghệ An Style)`,
  subtitle: `Fresh shrimp — peeled, pounded to a paste, then dry-fried in a wok for 45 minutes of constant stirring until every trace of moisture has evaporated and the paste has separated into fine, dry, golden-pink, cotton-soft filaments that taste of concentrated shrimp and last for weeks in a jar without refrigeration. The Nghệ An pantry staple that turns a bowl of plain rice or a spoonful of cháo into a meal, one pinch at a time.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 20,
  heroImage: '/images/recipes/ruoc-tom-nghe-an.jpg',
  intro: `Ruốc — the Vietnamese word for "floss," applied to any protein pounded or shredded then dry-fried to a fine, fluffy, shelf-stable, fibre-like product — exists in two main forms: ruốc thịt (pork floss, made from boiled-and-shredded pork simmered dry in a wok) and ruốc tôm (shrimp floss, made from fresh shrimp pounded to a paste and dry-fried to fibrous filaments). The pork version is universal — every Vietnamese pantry has a jar. The shrimp version is COASTAL — specifically Nghệ An, Thanh Hóa, Hà Tĩnh and the north-central provinces where the estuarine tép (tiny shrimp, the same species the tép rang lá chanh documented) and the larger tôm (prawns from the Cửa Lò fishing fleet) are abundant enough that the catch exceeds the household's immediate fresh-eating capacity, and the surplus must be PRESERVED.

The preservation is dehydration — the oldest food-preservation technology after salting, and the one the ruốc tôm uses to convert a perishable protein (fresh shrimp, which spoils within hours at tropical temperature) into a shelf-stable product (dried shrimp floss, which lasts 3-4 weeks at room temperature in a sealed jar, and 3-6 months refrigerated). The dehydration method is DRY-FRYING: the shrimp paste is stirred continuously in a dry wok (no oil, or minimal oil) over low heat for 40-50 minutes, during which the paste's 75% moisture evaporates progressively, and the paste transforms from a wet, sticky, pale-pink mass to a dry, fluffy, golden-pink, cotton-like fibre that is roughly 10% moisture — below the threshold at which most spoilage bacteria can grow (bacteria require water activity > 0.85 to multiply; dried floss at 10% moisture has a water activity of roughly 0.6-0.7).

The transformation is visual and dramatic: at minute 0 the paste is a wet, cohesive lump in the wok. At minute 15 it is a drier, crumbly, steaming mass. At minute 30 it is a loose, granular, barely-moist aggregate of separating fibres. At minute 45 it is a fluffy, golden-pink, cotton-soft cloud of individual filaments that the spatula lifts and drops and that float in the wok like dry snow. The moisture has left as steam, the protein has concentrated (from roughly 20% in fresh shrimp to roughly 55-60% in the finished floss), the amino acids have undergone Maillard browning (producing the golden colour and the toasted, nutty, concentrated-shrimp aroma), and the product is: shelf-stable, intensely flavoured, and as light and dry as cotton wool.

The Nghệ An ruốc tôm is prized above other provinces' versions for a specific reason: the Cửa Lò shrimp — caught from the same estuarine and offshore waters that produced the nhệch — carry a higher glycine content (the sweet amino acid) than many southern shrimp varieties, and the ruốc made from Cửa Lò shrimp is therefore SWEETER, with a more pronounced natural shrimp-sweetness that does not require added sugar. The sweetness is the terroir — the water's mineral composition affects the shrimp's amino-acid profile, and the shrimp's amino-acid profile becomes the floss's flavour, and the floss's flavour says "Nghệ An" to any tongue that has tasted both the Nghệ An version and the generic version and noted the difference.`,
  ingredientSections: [
    {
      title: 'The shrimp',
      items: [
        {
          amount: 1,
          unit: 'kg',
          name: 'fresh shrimp, peeled and deveined',
          note: `Any fresh shrimp — prawns, white shrimp, tiger shrimp. The shrimp must be FRESH (the ruốc concentrates flavour, and off-flavour from old shrimp is concentrated alongside the good flavour — a ruốc made from borderline shrimp tastes of borderline shrimp, amplified 3x). 1 kg of fresh peeled shrimp yields roughly 200-250 g of finished ruốc (the 75% moisture leaves as steam, and additional weight is lost as rendered fat and protein that sticks to the wok).`,
        },
      ],
    },
    {
      title: 'The seasoning',
      items: [
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar', note: `Minimal — the Nghệ An version relies on the shrimp's own glycine-sweetness rather than added sugar. Some versions add 1-2 tbsp for a sweeter, more candy-like floss.` },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 0.5, unit: 'tsp', name: 'ground white pepper' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (optional — a thin film in the wok prevents the paste from sticking in the first 10 minutes, before the protein dries enough to release on its own)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Pound the shrimp to a coarse paste — not smooth, not chunky, textured',
      description: `POUND the peeled shrimp in a mortar (or pulse in a food processor — 10 pulses of 2 seconds each). The target: a COARSE PASTE with visible shrimp fragments — not the smooth, myosin-extracted paste the chạo tôm and the chả cá demanded (that paste is designed for BINDING; this paste is designed for SEPARATION — the fragments need to separate into individual filaments during the dry-frying, and a too-smooth paste produces a clumpy, non-fibrous result because the myosin cross-links hold the mass together too tightly).

The paste should be: pink (the shrimp's astaxanthin), wet (the shrimp's 75% moisture is still present), slightly granular (visible 2-3 mm fragments alongside the paste), and cohesive enough to hold together in a lump but loose enough that a pinch separates easily.

Season: mix in the fish sauce, sugar, salt and pepper. The seasoning is light — the dry-frying CONCENTRATES flavour (1 kg of paste becomes 200 g of floss = 5x concentration), and a paste that tastes correctly seasoned will produce a floss that tastes 5x over-seasoned. Season at 20% of what you think is right, and the concentration will bring it to 100%.`,
      tip: `The COARSE paste (not smooth) is the fibre-formation prescription: the shrimp's muscle fibres, left partially intact by the coarse pounding, act as the NUCLEATION SITES around which the floss's filaments form during the dry-frying. As the paste dries, the intact muscle fibres shrink (their water evaporates, the protein contracts), and the surrounding paste adheres to the shrinking fibres, forming elongated, fibre-shaped filaments that separate from each other as the remaining moisture evaporates. A smooth paste (where the fibres are fully disrupted by the pounding) dries into a granular POWDER rather than into fibrous FLOSS, because there are no intact fibres to serve as the filament-forming scaffold. Coarse paste → fibrous floss. Smooth paste → grainy powder. The pounding's coarseness IS the texture's blueprint.`,
    },
    {
      title: 'Dry-fry 40-50 minutes, constant stirring — the paste becomes cotton',
      description: `Set a wok (or a wide, heavy pan) over LOW heat. If using oil: add a thin film. Add the seasoned shrimp paste — spread across the wok's surface.

Begin stirring. DO NOT STOP for the next 40-50 minutes. The stirring serves two purposes: it PREVENTS STICKING (the drying paste's surface proteins caramelise and bond to the metal if left stationary for more than 15 seconds — the Maillard reaction is the enemy at the contact surface and the friend at the paste's internal structure), and it DISTRIBUTES HEAT (even drying requires even heat, and the stirring moves the wetter centre-mass to the hotter wok-wall and the drier wall-mass to the cooler centre, equalising the moisture gradient continuously).

THE TRANSFORMATION STAGES:

MINUTES 0-10: the paste steams vigorously — the wok is a dehydrator, and the water leaving the paste is visible as a column of steam. The paste is still wet, sticky, cohesive. Stir continuously, scraping the bottom (the first sticking attempts happen in these minutes, when the paste's moisture is highest and the dissolved sugars at the contact surface caramelise most aggressively).

MINUTES 10-20: the steaming slows. The paste is drier, crumblier, starting to break apart under the spatula's pressure. The colour shifts from pale pink to golden-pink (the Maillard reaction between the shrimp's amino acids and the fish sauce's sugars, proceeding at the surface of each drying fragment). The aroma shifts from "raw shrimp" to "toasted shrimp" — the same aroma-direction-shift every Maillard process in the collection has documented.

MINUTES 20-35: the paste is SEPARATING — the coarse fragments, now dry enough to shrink around their intact muscle fibres, pull apart into individual filaments. The spatula's stirring accelerates the separation (each stroke breaks the remaining inter-filament moisture bridges). The mass in the wok transitions from a cohesive lump to a loose aggregate of golden-pink threads.

MINUTES 35-45: the floss is forming. The filaments are: individual (each one separate, 5-15 mm long, 0.5-1 mm thick), dry (no visible moisture, no clumping, the spatula lifts and drops them without sticking), golden-pink (the Maillard browning at its optimal point — golden, not brown; pink, not grey), and LIGHT — the filaments float briefly when the spatula tosses them, landing softly like dry snow.

MINUTE 45-50: the floss is DONE. The wok contains a fluffy, golden-pink, cotton-soft cloud of individual shrimp-protein filaments. The steam has stopped (no more moisture to evaporate). The aroma: intensely concentrated shrimp — sweet (the glycine's concentrated sweetness), toasted (the Maillard's nutty-caramel), savoury (the fish sauce's glutamate, now 5x concentrated), and clean (no fishiness — the trimethylamine, which is volatile, evaporated with the steam during the first 10 minutes).

OFF HEAT. Spread the floss on a tray to cool — the cooling finishes the dehydration (residual moisture in the filaments' centres migrates to the surface and evaporates in the ambient air, dropping the water activity from 0.7 to 0.6 over the cooling hour). Do NOT cover while hot (the trapped steam re-moistens the floss and destroys the dryness the 45 minutes of stirring achieved).`,
      tip: `The 5x flavour concentration (1 kg paste → 200 g floss = 80% weight loss, virtually all water) means the ruốc tôm is one of the most CALORIE-DENSE and PROTEIN-DENSE foods in the collection per gram: roughly 55-60% protein by weight (vs fresh shrimp's 20%), roughly 5-8% fat (vs fresh shrimp's 1-2%, because the fat does not evaporate and concentrates alongside the protein), and roughly 300-350 kcal per 100 g (vs fresh shrimp's 85 kcal). The floss is a CONCENTRATED FOOD — a survival food, a travel food, a pantry-insurance food — and a single tablespoon (roughly 5 g, 17 kcal, 3 g protein) sprinkled on a bowl of rice turns a carbohydrate-only meal into a carbohydrate-plus-protein meal. The ruốc is the Vietnamese kitchen's protein insurance: always in the jar, always on the shelf, always ready to rescue a bowl of plain rice from nutritional incompleteness.`,
    },
    {
      title: 'Store in a jar, sprinkle on everything — the pinch that rescues every plain bowl',
      description: `Cool the floss completely — 30-60 minutes on an open tray in a dry, ventilated space. The cooled floss should be: bone-dry (rub a pinch between your fingers — it should feel like dry cotton, not damp cotton), fluffy (scoop with a spoon — it should hold its shape briefly and then collapse into a loose pile, not clump into a ball), and fragrant (the concentrated-shrimp, toasted, sweet-savoury aroma should fill the jar's airspace when you open it).

Transfer to a clean, dry, airtight jar — glass or plastic, lid tight. At room temperature: 3-4 weeks (the low water activity inhibits bacteria, but the exposed fat slowly oxidises, producing a stale, rancid note after a month). Refrigerated: 3-6 months (the cold slows the fat oxidation). Frozen: 1 year (the fat oxidation effectively stops).

USE: the ruốc tôm is a SPRINKLE, not a serving. A pinch (5-10 g) on a bowl of cháo trắng — the convalescing patient's first encounter with concentrated protein flavour, the same ruốc the cháo trắng's accompaniment-staging mentioned at "day 3-4." A tablespoon on xôi (sticky rice) — the breakfast combination every Nghệ An schoolchild knows: white rice, pink floss, sweet-savoury-toasted on the tongue at 7 AM. A spoonful packed into a bánh mì — the protein layer when the deli counter has nothing else. A dusting on cháo lươn — the double-shrimp layer the Nghệ An eater adds to the eel congee because more protein is more protein.

The ruốc tôm is the Nghệ An pantry's INSURANCE POLICY — the jar that is always full when the refrigerator is empty, the protein that is always shelf-stable when the fish is sold out, the flavour that is always intense enough that a pinch does the work of a portion. It is the most EFFICIENT protein-delivery format in the collection: 5 g of ruốc (one pinch, the weight of a sugar packet) delivers 3 g of complete protein and enough concentrated flavour to season an entire 200 g bowl of rice. No other food in the project achieves this ratio of flavour-to-mass and protein-to-mass simultaneously.

Ruốc tôm is the quiet hero of the Vietnamese pantry — not photogenic (it is cotton-fluff, not a sculpted plate), not Instagrammable (it disappears into the rice it is sprinkled on), not orderable at a restaurant (it is home food, jar food, shelf food) — but it is the food that SAVES meals, that stretches pantries, that turns the cháo trắng from a sick-bed penance into a sick-bed pleasure, and that sits in every Nghệ An kitchen, in every jar, on every shelf, waiting for the pinch that makes the bowl complete.`,
      tip: `The ruốc's shrimp-protein filaments are structurally analogous to COTTON FIBRES: both are long (5-15 mm), thin (0.5-1 mm), flexible, and entangled into a loose, air-rich, fluffy mass that compresses under pressure and springs back when released. The analogy is not coincidental — both are protein fibres (cotton is cellulose, technically a carbohydrate, but the ruốc's muscle-protein filaments behave like fibres because they are elongated, dehydrated, and cross-linked by the Maillard reaction into semi-rigid strands). The fluffy, cotton-like texture is the ruốc's defining physical property, and it is the property that makes the ruốc function as a TOPPING rather than as a condiment: the light, airy, entangled filaments sit on TOP of the rice rather than sinking into it (the way a liquid sauce would), and each spoonful of rice lifts a few filaments from the topping layer, carrying them to the mouth as a separate, identifiable, textural component rather than as a dissolved, invisible seasoning. The ruốc is tasted, not just sensed. It is seen, not just present. And its cotton-soft, golden-pink, fluffy visibility on the white rice is the visual signal that says: this bowl has been cared for.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
