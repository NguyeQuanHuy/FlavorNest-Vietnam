'use client';
import RecipeLayout, { type RecipeData } from '../_components/RecipeLayout';

// ─────────────────────────────────────────────────────────────
//  Cá Lóc Nướng Trui — Mud-Roasted Snakehead Fish
//  An Giang #7
//
//  FOOD SCIENCE FRAMEWORKS (unique to this recipe):
//  1. STRAW COMBUSTION PYROLYSIS — rice straw flame
//     T 600-800°C, cellulose→levoglucosan→furans,
//     hemicellulose→furfural, lignin→phenolics,
//     smoke-phase flavor compound deposition
//  2. SCALE-SKIN KERATIN ABLATION SHIELD —
//     fish scale α-keratin + hydroxyapatite composite
//     Td > 200°C creates sacrificial char barrier,
//     protecting flesh from direct flame contact
//  3. MUD CLAY MINERAL THERMAL MASS —
//     montmorillonite/kaolinite cp 0.9-1.0 kJ/kg·K,
//     even heat distribution via conductive wrapping,
//     steam trapping within sealed cavity
//  4. SNAKEHEAD MYOWATER RETENTION —
//     Channa striata sarcoplasmic protein 25-30% of
//     total muscle protein creates viscous sol preventing
//     drip loss at 60-80°C core temperature
//  5. RICE PAPER CAPILLARY WICKING SYSTEM —
//     hydrated bánh tráng as edible napkin, cellulose
//     microfiber network absorbs fish oil + juices
//     via Jurin's law capillary rise
//  6. MEKONG FLOODPLAIN TROPHIC ECOLOGY —
//     Channa striata apex predator bioaccumulation,
//     flood-pulse breeding cycle, wild vs aquaculture
//     flavor compound differences
// ─────────────────────────────────────────────────────────────

const recipe: RecipeData = {
  slug: 'ca-loc-nuong-trui',
  title: 'Cá Lóc Nướng Trui (Mud-Roasted Snakehead Fish)',
  subtitle: 'Rice straw pyrolysis at 600-800°C deposits furan and phenolic smoke compounds onto a sacrificial α-keratin/hydroxyapatite scale shield that ablates at >200°C protecting flesh beneath, Mekong clay montmorillonite thermal mass (cp 0.9-1.0 kJ/kg·K) distributes heat evenly while trapping steam, and Channa striata sarcoplasmic proteins (25-30% of total) create a viscous sol that retains myowater against drip loss at 60-80°C core.',
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '45 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/ca-loc-nuong-trui.jpg',

  intro: `Cá lóc nướng trui is the MOST ELEMENTAL cooking method in Vietnamese cuisine — a whole snakehead fish thrust into a mound of burning rice straw, with no pot, no pan, no grill, no oil, no seasoning. It is fire applied directly to animal, mediated only by the fish's own scales and sometimes a coat of wet clay. The result — smoky, juicy, intensely clean-flavored flesh eaten with rice paper, herbs, and dipping sauce — represents the purest expression of the THERMAL PHYSICS and PROTECTIVE BIOCHEMISTRY that underpin all grilling, stripped to their absolute minimum.

The RICE STRAW provides the fuel, and its combustion chemistry is fundamentally different from charcoal or gas. Rice straw is a LIGNOCELLULOSIC material composed of approximately 35-40% cellulose, 25-30% hemicellulose, and 10-15% lignin, with the remainder being silica (SiO₂, unusually high at 10-15% — rice is a silicon accumulator) and extractives. When ignited, the straw burns in a FLASH COMBUSTION at 600-800°C — significantly hotter than charcoal's steady 300-500°C — but for a much shorter duration (3-8 minutes for a handful of straw vs. 30-60 minutes for charcoal). During this rapid pyrolysis, each component generates distinct flavor compounds: cellulose decomposes via LEVOGLUCOSAN intermediates into furans (2-furfural, 5-methylfurfural) that contribute caramel-sweet, bread-like notes; hemicellulose, which pyrolyzes at a lower temperature (220-315°C), produces FURFURAL and acetic acid, adding sharpness and tang; and lignin, with its aromatic ring structure, generates PHENOLIC COMPOUNDS (guaiacol, syringol, cresol) that are the characteristic "smoky" flavor recognizable across all wood-smoke cooking traditions. The high silica content of rice straw adds a unique dimension: at flame temperatures, some silica volatilizes and deposits as a fine, glassy patina on the fish's surface — contributing a subtle mineral quality that is absent from wood-smoke grilling.

The fish's SCALES AND SKIN constitute a naturally evolved ABLATIVE THERMAL PROTECTION SYSTEM — functionally analogous to the heat shields on spacecraft. Snakehead (Channa striata) scales are composed of a COMPOSITE MATERIAL: a mineral layer of HYDROXYAPATITE (Ca₁₀(PO₄)₆(OH)₂) — the same mineral found in bone and tooth enamel — bonded to an organic matrix of α-KERATIN and TYPE I COLLAGEN. This composite has a thermal decomposition temperature above 200°C — far higher than the 55-65°C range at which the underlying muscle proteins denature. When the straw fire engulfs the fish, the scales undergo ABLATION: their outer surface chars and carbonizes, consuming thermal energy in the endothermic decomposition process. This carbonized layer then acts as an INSULATING BARRIER — char has a thermal conductivity of approximately 0.1-0.2 W/m·K, compared to 0.5-0.6 W/m·K for raw fish flesh. The result is that the flesh beneath the scales cooks by GENTLE CONDUCTION through the char barrier, reaching a core temperature of only 60-80°C even while the surface is exposed to 600-800°C flames. The scales sacrifice themselves to protect the flesh — a natural engineering solution to the problem of high-temperature cooking without desiccation.

In the traditional MUD-WRAPPED variant (nướng trui đất sét), the fish is coated in a layer of wet MEKONG DELTA CLAY before being placed in the straw fire. This clay — primarily MONTMORILLONITE and KAOLINITE minerals — serves as an additional thermal management layer. The clay has a specific heat capacity of 0.9-1.0 kJ/kg·K (approximately twice that of the fish flesh at 0.5 kJ/kg·K), meaning it absorbs substantial thermal energy before transmitting heat to the fish. More importantly, the wet clay's initial EVAPORATIVE COOLING (water's latent heat of vaporization = 2,260 kJ/kg) keeps the fish surface at approximately 100°C until all the water has evaporated — only then does the clay temperature begin to rise. This creates a TWO-STAGE THERMAL PROFILE: a gentle steaming phase (surface at 100°C, core reaching 50-60°C) followed by a roasting phase (surface climbing to 200-400°C, core reaching 70-80°C). The clay also SEALS the fish cavity, trapping internal moisture as pressurized steam — the fish essentially steams inside its own juices within a self-sealing ceramic vessel formed in situ from the Mekong's own sediment.

The SNAKEHEAD FISH (Channa striata) is not an arbitrary choice for this method — it is the OPTIMAL species for high-heat, unprotected cooking because of its unusual MYOWATER RETENTION capacity. Snakehead muscle contains an exceptionally high proportion of SARCOPLASMIC PROTEINS — 25-30% of total muscle protein, compared to 15-20% in most teleost fish. Sarcoplasmic proteins (myoglobin, glycolytic enzymes, parvalbumin) are water-soluble and form a VISCOUS SOL in the intracellular space. When heated to 60-80°C, these proteins partially denature and aggregate into a loose gel network that PHYSICALLY TRAPS water molecules within its mesh — preventing the drip loss that would normally cause fish flesh to dry out during high-heat cooking. This is why cá lóc nướng trui produces MOIST, SUCCULENT flesh despite being cooked in an open fire: the sarcoplasmic protein gel acts as a molecular sponge, retaining 80-90% of the original myowater even at temperatures that would desiccate a lean white fish. Snakehead also has a higher FAT CONTENT than most freshwater fish (3-5% intramuscular fat), distributed in fine marbling between the thick, steak-like muscle blocks — providing additional lubrication and flavor.

The EATING SYSTEM is as important as the cooking. The fish is unwrapped, the charred scales peeled back to reveal the steaming flesh beneath, and pieces are pulled off with chopsticks onto a sheet of HYDRATED RICE PAPER (bánh tráng). The rice paper functions as an EDIBLE CAPILLARY WICKING SYSTEM: its cellulose microfiber network (fibers of 10-50 μm diameter with 5-20 μm interfiber spaces) draws fish oil and juices by CAPILLARY ACTION — described by Jurin's law, where the capillary rise height h = 2γcosθ/(ρgr), with γ the surface tension of the fish oil-water mixture, θ the contact angle against the hydrophilic cellulose, ρ the fluid density, g gravity, and r the average capillary radius. The rice paper absorbs fish juices upward from the bottom surface while presenting a smooth, clean eating surface on top — functioning simultaneously as plate, wrapper, and flavor-trapping medium. Each bite is assembled with the fish, herbs (rau thơm), banana flower, green mango, and a dip in mắm nêm (fermented anchovy sauce) — a SEVEN-COMPONENT eating unit where each element occupies a distinct textural and flavor position.

Cá lóc nướng trui is the SIGNATURE DISH of the Mekong Delta's agricultural landscape. It was born in the rice paddies — literally. After harvest, farmers would burn the remaining rice straw in the fields, and snakehead fish caught from the irrigation canals would be cooked on the spot using the only available fuel: the straw itself. There was no kitchen, no market, no preparation — just fire, fish, and the herbs growing wild along the canal banks. The dish carries the complete TROPHIC ECOLOGY of the Mekong floodplain: the rice straw (primary production), the fish that fed in the flooded paddies (secondary/tertiary consumption), and the alluvial clay that lines the canals (geological substrate). Everything in the dish comes from the same square kilometer of floodplain, making it perhaps the most TERROIR-SPECIFIC dish in all of Vietnamese cuisine.`,

  ingredientSections: [
    {
      title: 'Fish & Fire',
      items: [
        {
          amount: 1,
          unit: 'unit',
          name: 'whole snakehead fish (cá lóc), 800g-1.2kg, ungutted',
          note: 'Channa striata, the OPTIMAL species for this method. Its high sarcoplasmic protein content (25-30%) creates a viscous sol that retains myowater during high-heat cooking, preventing desiccation. DO NOT scale the fish — the scales ARE the thermal protection system. If unavailable, substitute whole catfish or tilapia, but expect drier flesh.',
        },
        {
          amount: 3,
          unit: 'kg',
          name: 'dry rice straw (rơm khô)',
          note: 'The fuel AND flavor source. Rice straw pyrolysis at 600-800°C generates furans (sweet-caramel), furfural (tangy), and phenolics (smoky). If unavailable, substitute hay or dried grass — avoid charcoal, which gives a different flavor profile and burn duration.',
        },
        {
          amount: 500,
          unit: 'g',
          name: 'wet clay (optional, for nướng trui đất sét variant)',
          note: 'Alluvial clay from riverbanks. Montmorillonite/kaolinite minerals provide thermal mass (cp 0.9-1.0 kJ/kg·K) and seal the fish cavity for internal steam pressure cooking. If using, coat fish 5-8 mm thick.',
        },
      ],
    },
    {
      title: 'Eating Assembly',
      items: [
        {
          amount: 20,
          unit: 'sheet',
          name: 'rice paper (bánh tráng), briefly dampened',
          note: 'The edible capillary wicking system. Cellulose microfiber network absorbs fish juices via capillary action while providing a clean, smooth eating surface.',
        },
        {
          amount: 200,
          unit: 'g',
          name: 'mixed Vietnamese herbs (rau thơm): perilla, rice paddy herb, Vietnamese mint, cilantro, Thai basil',
        },
        {
          amount: 1,
          unit: 'unit',
          name: 'banana flower (bắp chuối), thinly sliced and soaked in acidulated water',
        },
        {
          amount: 1,
          unit: 'unit',
          name: 'green mango, julienned',
        },
        {
          amount: 100,
          unit: 'g',
          name: 'rice vermicelli (bún), cooked',
        },
        {
          amount: 1,
          unit: 'unit',
          name: 'cucumber, sliced',
        },
      ],
    },
    {
      title: 'Mắm Nêm Dipping Sauce',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'mắm nêm (fermented anchovy sauce)',
          note: 'The flavor ANCHOR. Provides the intense umami-funk baseline against which the clean, smoky fish is perceived.',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'sugar',
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'lime juice',
        },
        {
          amount: 2,
          unit: 'clove',
          name: 'garlic, minced',
        },
        {
          amount: 1,
          unit: 'unit',
          name: 'fresh chili, minced',
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'pineapple, finely diced (optional)',
          note: 'Bromelain protease tenderizes any residual tough fibers in the sauce, and the pineapple sugars add fruity depth.',
        },
      ],
    },
  ],

  steps: [
    {
      title: 'Prepare the fish — preserving the ablative shield, 5 minutes',
      description: `DO NOT SCALE the fish. The scales are the THERMAL PROTECTION SYSTEM — removing them would expose the flesh directly to 600-800°C flame, resulting in carbonized, desiccated exterior and raw interior. The scales must remain intact to function as the ablative char barrier.

If the fish is alive, dispatch it humanely with a sharp blow to the head. DO NOT GUT the fish for the traditional method — the intact body cavity traps steam during cooking, creating internal pressure that forces heat inward evenly. The intestinal contents will be removed after cooking (they peel away cleanly from the cooked flesh).

OPTIONAL MUD VARIANT: If using clay, take wet alluvial clay and coat the ENTIRE fish in a layer 5-8 mm thick. Ensure complete coverage with no gaps — any exposed area will char directly. The clay should be the consistency of thick paste — too wet and it will crack as it dries, too dry and it won't adhere. The clay creates the TWO-STAGE thermal profile: evaporative cooling at 100°C followed by ceramic roasting.

SKEWER the fish (if not using clay) by threading a long bamboo stick or green branch from mouth to tail. This serves as a handle for positioning in the fire and maintains the fish's shape during cooking. A GREEN (fresh, undried) branch is preferred because it contains moisture that prevents the branch from burning through.`,
      tip: `THE SCALE SHIELD — ABLATIVE THERMAL PROTECTION: The snakehead's scales function identically to a spacecraft re-entry heat shield. During atmospheric re-entry, spacecraft experience surface temperatures of 1,500-3,000°C, but the interior remains at room temperature because the heat shield material undergoes ABLATION — it decomposes endothermically, consuming heat energy in the process, and the char layer left behind has extremely low thermal conductivity. The fish scale composite (hydroxyapatite mineral + α-keratin + Type I collagen) undergoes the same process: the organic components (keratin and collagen) pyrolyze at 200-350°C, consuming energy; the hydroxyapatite framework remains as a porous ceramic; and the char fills the pores, creating a composite insulator with thermal conductivity of 0.1-0.2 W/m·K. A 1-2 mm scale layer can maintain a temperature DIFFERENTIAL of 500°C or more between the flame-exposed surface and the underlying flesh — the same thermal gradient management principle used in NASA's Phenolic Impregnated Carbon Ablator (PICA) heat shield material.`,
    },
    {
      title: 'Build and ignite the straw fire — flash pyrolysis, 10-15 minutes',
      description: `CHOOSE an outdoor location with clearance from flammable materials. This is an OUTDOOR cooking method — the flash combustion produces significant flame height (1-2 meters) and smoke volume.

CREATE a mound of dry rice straw approximately 40 cm tall and 60 cm in diameter. Place the skewered fish (or clay-wrapped fish) HORIZONTALLY into the center of the mound, at roughly the middle height. The fish should be SURROUNDED by straw on all sides — the goal is omnidirectional heat exposure, not top-down or bottom-up grilling.

IGNITE the straw from the BOTTOM on all sides simultaneously. The straw will catch almost instantly — dry rice straw has a flash point of approximately 220°C and an auto-ignition temperature of 350°C, but with the typical match/lighter ignition providing 600-800°C at the point of contact, ignition is immediate.

The straw burns in a FLASH COMBUSTION lasting 3-5 minutes for the initial mound. During this period, the flame temperature reaches 600-800°C — you will feel intense radiant heat from 2 meters away. The cellulose, hemicellulose, and lignin components pyrolyze simultaneously, generating the full spectrum of smoke flavor compounds (furans + furfural + phenolics).

ADD more straw in 2-3 additional rounds as the initial mound collapses. Each addition reignites immediately from the residual embers. Total cooking time is 10-15 minutes for a 1 kg fish. The fish is done when the scales have completely CARBONIZED (black, brittle, flaking) and the flesh at the thickest point behind the head reaches 70-75°C internal temperature.

FOR THE MUD VARIANT: The clay-wrapped fish is placed IN the straw pile and buried completely. After the straw burns down, the clay will have hardened into a CERAMIC SHELL — crack it open with a mallet or the back of a knife. The clay peels away, taking the scales and skin with it, revealing perfectly steamed-roasted flesh beneath.`,
      tip: `RICE STRAW PYROLYSIS CHEMISTRY — WHY STRAW TASTES DIFFERENT FROM CHARCOAL: The fundamental difference between straw-fire and charcoal cooking is COMBUSTION PHASE. Charcoal is pre-pyrolyzed wood — all the volatile flavor compounds (furans, phenolics, furfural) were driven off during charcoal production. When charcoal burns, it undergoes SOLID-PHASE OXIDATION of nearly pure carbon, producing CO₂ and CO with minimal flavor compounds. The "grilled" flavor of charcoal cooking comes primarily from DRIP PYROLYSIS — juices falling onto the hot coals, vaporizing, and condensing on the food surface. Straw, by contrast, undergoes FULL PRIMARY PYROLYSIS during cooking — the volatiles are released DURING the cooking process and deposit directly onto the food. This produces a FAR MORE COMPLEX smoke flavor profile: 200+ identified volatile compounds in rice straw smoke vs. 30-50 in charcoal smoke. The high silica content (10-15% SiO₂) of rice straw adds another dimension: at flame temperatures, silica sublimes into SiO vapor that condenses as a microscopic glassy film on the food surface — contributing a faint mineral quality unique to straw cooking that has no equivalent in any other fuel source.`,
    },
    {
      title: 'Unwrap and serve — the seven-component eating system, 10 minutes',
      description: `REMOVE the fish from the fire. If using the skewer method, the fish will be uniformly black — the entire scale surface carbonized into an ablative char shell. If using the mud method, crack the clay shell to reveal the fish inside.

PEEL back the charred scales. They should lift off in large sheets, separating cleanly from the cooked flesh beneath. The contrast is dramatic — jet-black carbonized exterior revealing pristine, steaming white-pink flesh underneath. This moment IS the dish's spectacle and ritual.

REMOVE the intestines now — they will pull away easily from the cooked flesh in one piece. Discard them. The flesh that was in contact with the intestines is perfectly clean (the intestinal membrane remained intact during cooking).

ARRANGE the eating assembly on a large communal platter or tray:
- The opened fish in the center, flesh exposed
- Rice paper sheets stacked to one side
- Herbs (rau thơm) in a generous pile
- Sliced banana flower, green mango, cucumber
- Cooked rice vermicelli
- Mắm nêm dipping sauce in individual bowls

EACH PERSON assembles their own bites: dampen a rice paper sheet, place a piece of fish on it, add herbs, banana flower, green mango, and vermicelli, roll loosely, and dip in mắm nêm. The rice paper's cellulose microfiber network WICKS the fish juices upward via capillary action, trapping them within the roll rather than letting them drip. Each rolled bite delivers the FULL SEVEN-COMPONENT experience: smoky fish protein + crisp-fresh herbs + astringent-sweet banana flower + sour-crunchy green mango + soft vermicelli starch + chewy-tender rice paper + pungent-sweet-sour mắm nêm.

The fish flesh should be PULLED, not cut — the thick muscle blocks of Channa striata separate along natural fascicle planes into clean, flaky pieces. The texture is moist and slightly springy (the sarcoplasmic protein gel network retaining myowater) with a clean, sweet, smoky flavor and no detectable muddy or "off" notes (unlike some catfish or tilapia).`,
      tip: `MEKONG FLOODPLAIN TROPHIC ECOLOGY — WHY WILD CÁ LÓC TASTES DIFFERENT: Channa striata is an APEX PREDATOR of the Mekong floodplain ecosystem. During the annual flood pulse (June-November), the rising waters inundate rice paddies, creating vast shallow wetlands where snakehead fish feed on a diet of frogs, smaller fish, crustaceans, and aquatic insects. This diverse diet produces a complex flavor profile in the flesh — the lipid composition reflects the varied fatty acid signatures of the prey species, resulting in a more nuanced, "wild" flavor compared to farmed snakehead (which are typically fed pelleted diets of soy and fishmeal, producing a more uniform, less complex lipid profile). Wild Mekong snakehead also accumulate higher levels of ASTAXANTHIN (from crustacean prey) in their flesh, contributing a subtle pink coloration and antioxidant protection against off-flavors during cooking. The traditional timing of cá lóc nướng trui — after the rice harvest in November-December, when the floodwaters recede and concentrate the fish in the remaining canals — coincides with the period when the snakehead have accumulated maximum fat reserves from months of floodplain feeding. This is the Mekong's natural rhythm: the river floods, the fish feast, the water recedes, the rice is harvested, the straw and the fish are ready at the same moment. The dish is the CULMINATION of an annual ecological cycle.`,
    },
  ],
};

export default function CaLocNuongTruiPage() {
  return <RecipeLayout recipe={recipe} />;
}
