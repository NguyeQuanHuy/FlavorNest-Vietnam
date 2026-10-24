'use client';

import RecipeLayout from '../_components/RecipeLayout';

const recipeData = {
  title: "Phá Lấu",
  subtitle: "Saigon Five-Spice Offal Stew — Where Chinese Herbal Pharmacology Meets Coconut Fat Emulsion and the Economics of Eating Everything",
  heroImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
  prepTime: "45 min",
  cookTime: "2 hrs 30 min",
  servings: "6",
  difficulty: "Intermediate" as const,
  region: "Southern" as const,
  province: "Sài Gòn",

  introduction: `Phá lấu is Saigon's answer to a question that every meat-eating culture eventually asks: what do you do with the parts that aren't muscle? The intestines, the stomach, the liver, the ears, the tongue, the uterus — the organs that performed the animal's actual biological functions while the loin and breast simply moved it around. Phá lấu answers: you braise them in coconut milk with five-spice powder until they surrender their toughness, absorb the aromatic broth, and become something so deeply flavoured and texturally complex that the "noble" cuts seem bland by comparison.

The name "phá lấu" (破滷, phò lóu in Cantonese) is Chinese in origin — "phá" (破) means "broken/mixed" and "lấu" (滷) means "braising liquid" or "master stock." The dish arrived in Saigon through the Cantonese and Teochew communities that settled in Cholon (Saigon's Chinatown) from the 18th century onward. In its Chinese form, lóu (滷) is a dark soy-based master stock recycled and enriched over months or years — the famous "perpetual stew" tradition where the braising liquid is never discarded, only replenished. Vietnamese phá lấu diverged from this Chinese ancestor in one decisive way: it replaced the dark soy base with COCONUT MILK.

This substitution changed everything. Dark soy produces a salty, deeply brown, intensely savoury broth — excellent for southern Chinese climate and cuisine. Coconut milk produces a CREAMY, slightly sweet, golden-brown broth — suited to Vietnam's tropical ingredients and the Saigon palate's preference for rounder, less aggressively salty flavours. The coconut milk also performs a critical chemical function: its lauric acid (a C12 saturated fatty acid) is an excellent solvent for the fat-soluble flavour compounds in five-spice powder. Star anise's anethole, cinnamon's cinnamaldehyde, clove's eugenol — all have log P values above 1.5, meaning they are significantly more soluble in fat than in water. The coconut fat dissolves these compounds and holds them in the broth as a stable emulsion, rather than letting them evaporate into the air from a water-based broth. Phá lấu's coconut milk is not a flavour — it's a DELIVERY SYSTEM.

The offal itself is where the dish's biochemistry gets interesting. Each organ has a unique composition that responds differently to braising:

INTESTINE (ruột, the star component): Intestinal wall is 70% collagen — the highest collagen concentration of any edible tissue. During braising at 85-95°C, this collagen undergoes hydrolysis — the triple helix structure unwinds, and the chains break into shorter fragments (gelatin). This process takes 1.5-2 hours, during which the intestine transforms from tough and rubbery (raw collagen) to silky and yielding (gelatin-infiltrated). The converted gelatin also leaches into the broth, thickening it and giving it a rich, lip-coating body. The intestine is the engine that turns phá lấu's broth from thin coconut soup into viscous, unctuous, lip-sticking liquid.

STOMACH (dạ dày/bao tử): The stomach wall is primarily smooth muscle and elastic connective tissue (elastin). Unlike collagen, elastin does NOT convert to gelatin — it remains elastic regardless of cooking time. This gives braised stomach its characteristic CHEWINESS — a springy, bouncy texture that resists the teeth and then yields suddenly, like biting through a dense rubber band. The stomach is the textural counterpoint to the silky intestine.

LIVER (gan): Liver is the exception — it's not connective tissue but a mass of hepatocytes (metabolic cells) bound by a minimal collagen scaffold. Liver cooks in 5-10 minutes; beyond that, the proteins over-denature and become grainy, chalky, and dry. In phá lấu, liver is added in the LAST 10 minutes of cooking, cut into thick slices that stay pink-tinged in the centre. Its role is to provide MINERAL RICHNESS (iron, copper, zinc — liver is nature's multivitamin) and a creamy, paté-like texture that contrasts with the chewy-silky organs.

EAR (tai): Pig ear is primarily CARTILAGE — a matrix of collagen II and proteoglycans (sugar-protein complexes) that provides structure without rigidity. Braising partially softens the cartilage but never eliminates it — the ear retains a distinctive crunch-in-softness that is unlike any other texture in the dish. It's the acoustic element — you can hear yourself eating pig ear in phá lấu.

The five-spice powder (ngũ vị hương) is not a random collection of spices — it's a PHARMACOLOGICAL SYSTEM. Traditional Chinese five-spice represents the five elements (五行, wǔ xíng) of Chinese philosophy, each mapped to a taste and a medicinal function: star anise (sweet, warm — aids digestion), clove (pungent, warm — circulates qi), cinnamon (sweet, hot — warms the body), Sichuan pepper (numbing, warm — disperses cold) and fennel seed (sweet, warm — relieves bloating). The combination was designed to make organ meats DIGESTIBLE — the aromatic compounds stimulate gastric secretion, promote bile flow (essential for fat digestion), and reduce the intestinal gas that organ meats can cause. Five-spice doesn't just flavour phá lấu — it was formulated to help your body PROCESS it.

Phá lấu is also an economic statement. In Saigon, organ meats cost 30-50% less than muscle cuts. A kilo of pork belly costs 120,000-150,000 VND; a kilo of mixed offal costs 50,000-80,000 VND. Phá lấu vendors can offer a substantial, protein-rich meal for 25,000-35,000 VND ($1.00-1.40) — accessible to students, labourers, and anyone stretching a budget. The long braising time and heavy spicing are not just technique — they're also a TRANSFORMATION that converts cheap, unfamiliar-looking organs into something that tastes expensive and complex. Phá lấu is nose-to-tail eating not as a chef's philosophical statement, but as working-class common sense: you eat everything because wasting edible protein is a luxury that working people cannot afford.`,

  ingredients: [
    {
      group: "Offal Mix",
      items: [
        "300g pork intestine (ruột non — small intestine preferred for tenderness)",
        "300g pork or beef stomach (bao tử/dạ dày)",
        "200g pork liver (gan heo) — optional, added last",
        "200g pig ear (tai heo) — optional, for textural variety",
        "2 tablespoons salt — for cleaning",
        "2 tablespoons rice vinegar or white vinegar — for cleaning",
        "2 tablespoons tapioca starch or rice flour — for cleaning"
      ]
    },
    {
      group: "Braising Liquid",
      items: [
        "400ml coconut milk (nước cốt dừa — full-fat, NOT lite)",
        "500ml water or pork/chicken broth",
        "3 tablespoons five-spice powder (ngũ vị hương)",
        "3 tablespoons soy sauce",
        "2 tablespoons oyster sauce",
        "2 tablespoons fish sauce",
        "2 tablespoons sugar (or 1 tablespoon rock sugar)",
        "3 stalks lemongrass — bruised and tied in knots",
        "5 cloves garlic — smashed",
        "3 shallots — halved",
        "3cm piece ginger — sliced",
        "2 star anise (additional, for reinforcement)",
        "1 cinnamon stick",
        "3 dried bay leaves",
        "2 tablespoons cooking oil",
        "1 tablespoon chili flakes or 2 dried red chilies — optional",
        "1 teaspoon ground black pepper"
      ]
    },
    {
      group: "Serving",
      items: [
        "Bánh mì (Vietnamese baguette) — THE canonical pairing, torn into pieces for dipping",
        "Fresh herbs: Thai basil, Vietnamese coriander (rau răm), cilantro",
        "Fresh chilies — sliced",
        "Lime wedges",
        "Pickled chilies (ớt ngâm giấm)",
        "Hoisin sauce — optional dipping",
        "Steamed rice or rice noodles — alternative to bread"
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: "Clean the Offal — The Triple-Agent Deodorising Protocol",
      detail: `This is the MOST IMPORTANT step. Poorly cleaned offal smells of ammonia and bile — no amount of spice will fix it. Properly cleaned offal smells neutral, slightly meaty, and ready to absorb flavour.

INTESTINE CLEANING:
1. Turn the intestine inside out (if not already done by the butcher). The inner surface — the mucosal lining — has the strongest odour because it was in contact with digestive contents.

2. Coat the intestine (inside and out) with a mixture of salt + rice flour + vinegar. RUB vigorously for 3-4 minutes.

THE THREE CLEANING AGENTS — HOW THEY WORK:

SALT (NaCl):
→ Osmotic action draws moisture and water-soluble odour compounds OUT of the tissue
→ The abrasive crystals physically scrub the mucosal surface, removing the mucus layer (a glycoprotein film that harbours bacteria and trapped digestive residue)
→ Salt also denatures surface proteins, releasing trapped volatile amines (the "gamey" smell)

RICE FLOUR/TAPIOCA STARCH:
→ The starch granules act as micro-abrasive particles — more gentle than salt, reaching into the folds and villi of the intestinal wall
→ Starch also ABSORBS fat-soluble odour compounds (skatole, indole, short-chain fatty acids) that salt cannot dissolve — starch is amphiphilic enough to bind both polar and non-polar odorants
→ The combined salt-starch mixture creates a paste that has the scrubbing power of salt PLUS the absorption capacity of starch

VINEGAR (Acetic acid, pH ~2.5):
→ The acid environment denatures and dissolves proteins in the mucosal layer
→ Acetic acid reacts with ammonia (a primary odour compound in intestinal tissue) to form ammonium acetate — a salt that dissolves in the rinse water rather than staying in the tissue
→ The low pH also inhibits bacterial growth during the cleaning process

3. Rinse thoroughly under running water. Repeat the salt-flour-vinegar scrub a SECOND time.

4. Blanch in boiling water with ginger and vinegar for 5 minutes. This final heat treatment kills surface bacteria, coagulates any remaining mucosal protein (making it easy to scrape off), and sets the tissue so it doesn't collapse during braising.

5. Drain. Cut into bite-sized pieces (3-4cm lengths for intestine, 3×3cm squares for stomach).

STOMACH CLEANING:
Same protocol as intestine. The stomach's inner surface (rugae — the folded lining) requires extra attention — scrub inside the folds where residue accumulates. The outer surface (serosa) is relatively clean and just needs rinsing.

PIG EAR:
Singe any remaining hair over a gas flame or with a torch. Scrub with salt. Blanch for 3 minutes. The ear has minimal odour issues — it's mostly cartilage and skin, with no digestive function.

LIVER:
Do NOT clean with the aggressive salt-flour-vinegar method — liver is too delicate. Simply rinse under cold water, removing any visible bile ducts (green-stained channels). Soak in milk or salted water for 15 minutes to draw out blood. Pat dry. Cut into 1.5cm thick slices. Set aside — liver is added only in the LAST 10 minutes.`,
      tip: "The Vietnamese grandmother test: after cleaning, hold the intestine to your nose and sniff. If you smell NOTHING or just a faint meaty scent — it's clean. If you detect any ammonia, sweetness (from undigested contents), or 'barnyard' smell — scrub again. There is no such thing as over-cleaning offal. The cleaning phase determines 80% of the final dish's quality."
    },
    {
      step: 2,
      title: "Build the Aromatic Base — Fat-Soluble Extraction",
      detail: `Heat 2 tablespoons oil in a large heavy-bottomed pot (Dutch oven ideal) over MEDIUM heat.

Add smashed garlic, halved shallots, and sliced ginger. Sauté for 2-3 minutes until fragrant and golden.

Add five-spice powder. Stir constantly for 60 seconds — the spice must bloom in the oil.

THE BLOOMING IMPERATIVE — OIL AS EXTRACTION SOLVENT:

Five-spice powder contains dozens of flavour compounds, but the dominant ones are fat-soluble:

→ ANETHOLE (star anise): log P = 2.4 — strongly fat-soluble. Sweet, licorice-like aroma. Dissolves readily in oil; barely soluble in water. Without oil blooming, most anethole sits ON the surface of spice particles rather than dispersing into the broth.

→ CINNAMALDEHYDE (cinnamon): log P = 1.9 — moderately fat-soluble. Warm, spicy aroma. Blooming in oil releases cinnamaldehyde from the bark's cell walls into the surrounding oil, making it available for dissolution in the coconut milk fat.

→ EUGENOL (clove): log P = 2.5 — strongly fat-soluble. Numbing, dentist-office aroma (eugenol is literally used in dental preparations). Oil extraction is the only efficient way to get eugenol into solution.

→ HYDROXY-ALPHA-SANSHOOL (Sichuan pepper): fat-soluble. The numbing compound. Without oil blooming, the numbing effect is minimal — most sanshool remains bound in the peppercorn hull.

Blooming = heating spice in oil for 30-90 seconds. The oil penetrates the spice particles, dissolves the fat-soluble compounds, and carries them into solution. The oil then disperses into the coconut milk (which is itself 17-24% fat), creating a CONTINUOUS FAT PHASE throughout the broth that carries flavour molecules to every part of the liquid.

Without blooming: five-spice powder sits in the water phase, releasing only its water-soluble compounds (which are the MINORITY of its flavour profile). The broth tastes flat and one-dimensional despite having the correct amount of spice.

Add the bruised lemongrass, star anise, cinnamon stick, bay leaves, and dried chilies (if using). Stir for another 30 seconds — these whole spices need heat to open their essential oil glands but don't need oil extraction (they'll release their oils over the long braise).`,
      tip: "Three tablespoons of five-spice powder seems like a lot — and it is. Phá lấu is not a dish of subtlety. The spice must be strong enough to TRANSFORM organ meats — to override their natural flavour profile and replace it with the warm, sweet, complex five-spice signature. Under-spiced phá lấu tastes like boiled offal in coconut soup. Properly spiced phá lấu tastes like five-spice happens to be served in organ form."
    },
    {
      step: 3,
      title: "Braise — The 2-Hour Collagen Conversion",
      detail: `Add the cleaned intestine, stomach, and pig ear (NOT liver) to the aromatic base. Toss to coat with the spiced oil.

Add coconut milk, water/broth, soy sauce, oyster sauce, fish sauce, and sugar. Stir to combine.

Bring to a boil. As soon as it boils, REDUCE heat to LOW — a gentle simmer with occasional lazy bubbles, not a rolling boil.

Cover with lid slightly ajar (leaving a 2cm gap for steam to escape).

Simmer for 2 to 2.5 hours.

THE BRAISING PHYSICS — WHY LOW AND SLOW:

COLLAGEN HYDROLYSIS KINETICS:
Collagen (the primary structural protein in intestine and stomach) converts to gelatin through hydrolysis — water molecules insert into the peptide bonds of the collagen triple helix, breaking it into shorter chains. This reaction has an activation energy that requires sustained heat above 70°C, but the RATE increases dramatically between 80°C and 95°C.

At 85-92°C (gentle simmer):
→ Collagen hydrolysis proceeds at a moderate, controllable rate
→ The tissue softens GRADUALLY — allowing you to test and monitor progress
→ The broth remains relatively clear (particles settle between gentle convection currents)
→ The coconut milk emulsion remains STABLE — fat stays dispersed as microdroplets
→ Total conversion time: 1.5-2.5 hours depending on tissue thickness

At 100°C (rolling boil):
→ Collagen hydrolysis accelerates — but UNEVENLY (outer layers over-convert while inner layers are still tough)
→ Violent convection currents break apart tender outer tissue while tough inner tissue remains intact = mushy exterior + chewy interior
→ The coconut milk emulsion BREAKS — the vigorous agitation overwhelms the emulsifying capacity of the milk proteins, causing fat to separate into an oily layer
→ A broken coconut emulsion produces: (1) a greasy surface layer, (2) a thin, watery broth below, and (3) a spice sludge at the bottom — three-phase separation that looks and tastes terrible

THE COCONUT EMULSION — FRAGILE ENGINEERING:

Coconut milk is an oil-in-water emulsion: fat droplets (17-24% of the volume) suspended in water by coconut proteins (primarily coconut globulin and albumin). These proteins coat each fat droplet, creating a charged surface that repels other droplets — preventing coalescence.

This emulsion is THERMALLY STABLE up to approximately 95°C — gentle simmering keeps it intact. Above 95°C, the proteins denature and lose their emulsifying capacity. The fat droplets merge, rise to the surface, and the emulsion separates. Once separated, it CANNOT be re-emulsified by stirring — the proteins are permanently denatured.

THE STIR SCHEDULE:
Every 20-30 minutes, gently stir the pot — lifting from the bottom to prevent scorching (the sugars in the sauce caramelise on the pot bottom) and redistributing the ingredients for even cooking. Don't stir aggressively — gentle folding, not whisking.

DONENESS TEST (at 1.5 hours, then every 15 minutes):
Pierce a piece of intestine with a chopstick. It should slide through with moderate resistance — like pushing through firm butter, not like poking raw rubber. If the chopstick meets significant resistance: continue braising. If it slides through with zero resistance: the intestine is approaching over-conversion (it will start falling apart). The window between "tough" and "falling apart" is approximately 30 minutes at proper simmer temperature.

In the LAST 10 minutes: add the sliced liver. Stir gently to submerge. The liver needs only enough time to cook through — any longer and it becomes chalky.

TASTE AND ADJUST: The braising liquid should be: savoury-sweet (not salty-dominant), noticeably five-spiced (warm, aromatic), slightly thick (from converted gelatin), rich (from coconut fat). Adjust with: more fish sauce (salt/umami), more sugar (sweetness), more five-spice (aroma), more coconut milk (richness).`,
      tip: "The Saigon street vendor's secret: add 1 tablespoon of peanut butter or 2 tablespoons of ground roasted peanuts to the braising liquid. The peanut proteins act as ADDITIONAL EMULSIFIERS — stabilising the coconut milk emulsion so it survives extended simmering without breaking. The peanut flavour at this concentration is subliminal — you can't taste 'peanut' but the broth is noticeably richer, thicker, and more stable. This trick is common among vendors who braise for 4-6 hours for the lunch and dinner rushes."
    },
    {
      step: 4,
      title: "Rest and Concentrate — The Overnight Option",
      detail: `After 2-2.5 hours of braising, turn off the heat. Leave the pot covered at room temperature for 30 minutes.

During this rest, the gelatin molecules released from the intestine begin to organise into a loose network as the temperature drops through the 40-50°C range. This network TRAPS flavour compounds within the tissue — the organs are literally absorbing the broth as they cool.

THE RESTING ABSORPTION PHENOMENON:

During active braising (85-95°C), the organ tissues are EXPELLING moisture — the heat-driven collagen conversion pushes water out of the tissue as the protein matrix restructures. The broth gets richer because it's receiving water, gelatin, and flavour from the organs.

During resting (cooling from 95°C to room temperature), the process REVERSES — the cooling tissue reabsorbs liquid from the surrounding broth, pulling the five-spice coconut broth INTO the tissue. This is why rested phá lấu tastes more intensely flavoured than freshly braised phá lấu — the organs have sucked the broth into their structure.

THE OVERNIGHT OPTION:
For maximum flavour, refrigerate the entire pot overnight. During cold storage:
→ The gelatin in the broth sets into a soft gel — trapping all flavour compounds in a semi-solid matrix
→ Fat-soluble flavour compounds migrate further into the tissue via slow diffusion
→ The five-spice flavour compounds continue to complex with proteins in the organ tissue — forming stable flavour-protein bonds that resist dilution

Reheat gently the next day. The overnight phá lấu is a fundamentally different dish — deeper, more complex, more unified. Every vendor who serves phá lấu at their highest level makes it a day ahead.

CONCENTRATION:
If the broth is thinner than desired after braising, remove the organs (to prevent overcooking) and simmer the broth uncovered over medium heat for 10-15 minutes. This evaporates water while concentrating the dissolved gelatin, coconut fat, and flavour compounds. The target consistency: coats a spoon and drips in slow, syrupy rivulets.`,
      tip: "Phá lấu improves with every reheat cycle — up to 3-4 cycles. Each cycle drives more broth into the tissue and converts more residual collagen. Professional vendors operate a quasi-continuous system: yesterday's leftover becomes today's base, topped up with fresh offal and coconut milk. After a week of this, the broth has a depth that fresh batches cannot match — it's the Vietnamese equivalent of the French 'fonds brun' that restaurants nurture for years."
    },
    {
      step: 5,
      title: "Serve — The Bánh Mì Dipping Ritual",
      detail: `Reheat the phá lấu to a gentle simmer if it was rested or refrigerated.

Slice the organs into bite-sized pieces if not already done. Arrange in a deep bowl.

Ladle the braising liquid generously over the organs — the broth is as important as the solids.

Garnish with: sliced fresh chilies, torn herbs (Thai basil, Vietnamese coriander, cilantro), a crack of black pepper, and a squeeze of lime.

Serve with torn pieces of bánh mì (Vietnamese baguette) on the side.

THE BÁNH MÌ PAIRING — STRUCTURAL AND CHEMICAL LOGIC:

Phá lấu + bánh mì is one of Saigon's most iconic food pairings, and the logic is both structural and chemical:

STRUCTURAL:
→ Phá lấu is a WET dish — organs swimming in broth. It needs a SPONGE.
→ Bánh mì's interior crumb (ruột bánh) is an open network of gluten strands with large air pockets — the ideal sponge for absorbing thick, flavourful liquids.
→ A torn piece of bánh mì, dipped into the broth, absorbs 2-3× its weight in liquid. When you eat it, the bread compresses in your mouth, releasing the broth in a concentrated burst — a flavour delivery mechanism that spoons can't match.
→ The crust (vỏ bánh) stays relatively dry and crunchy even after brief dipping — providing textural contrast against the soft, soaked interior and the silky organs.

CHEMICAL:
→ Bánh mì is made from wheat flour — rich in glutamic acid (the amino acid that produces umami taste when free). When the bread absorbs the braising liquid, the glutamic acid in the bread's gluten combines with the glutamate from the fish sauce and soy sauce in the broth — ADDITIVE UMAMI. The bread makes the broth taste MORE savoury than the broth alone.
→ The bread's starch absorbs and holds fat-soluble flavour compounds that would otherwise coat your mouth unevenly. The bread distributes them uniformly, creating a more balanced flavour experience per bite.

THE EATING PROTOCOL:
1. Tear (not cut) a piece of bánh mì — approximately 5cm long
2. Dip the torn end into the broth — 3 seconds, not longer (you want absorption, not saturation)
3. Use the bread to scoop up a piece of organ (intestine + stomach, for textural contrast)
4. Eat: bread compresses, releases broth, organ chews, herbs brighten, chili hits
5. Chase with more bread dipped in broth — the "clean-up" bite that captures residual sauce

ALTERNATIVE BASES:
→ Steamed rice (cơm trắng): more filling, absorbs broth well, turns the dish into a main course
→ Rice noodles (bún or phở): lighter, more common at restaurants than street carts
→ Egg noodles (mì): specifically with phá lấu bò (beef version) — the egg noodle's richness complements beef offal
→ On its own (không): just the organs in broth, eaten with chopsticks as a nhậu snack — common at beer corners where the bread is skipped in favour of more beer`,
      tip: "For the ULTIMATE street experience: ask for 'phá lấu bánh mì' — the vendor tears a bánh mì open, stuffs it with organ pieces, ladles broth inside, adds herbs and chili, and hands you a sandwich that drips five-spice coconut broth down your wrists. It's messy, it's aggressive, and it's the single best $1.50 sandwich in Saigon. The bread-to-filling ratio is about 40:60 — far more filling than a standard bánh mì, and the broth-soaked bread is the star, not the organs."
    }
  ],

  tips: [
    {
      title: "The Five-Spice Pharmacopoeia — Why These Five",
      content: "Traditional Chinese five-spice (ngũ vị hương) is not arbitrary — it maps to the Five Elements (Wǔ Xíng): STAR ANISE (sweet/Wood/liver) → anethole stimulates bile production, critical for digesting the fats in organ meats. CLOVE (pungent/Metal/lung) → eugenol has analgesic and anti-inflammatory properties; it also has potent antibacterial action against intestinal pathogens — relevant when eating intestine. CINNAMON (sweet-hot/Fire/heart) → cinnamaldehyde stimulates gastric acid secretion, accelerating protein digestion. SICHUAN PEPPER (numbing/Earth/spleen) → sanshool stimulates peristalsis (intestinal muscle contractions), moving food through the digestive tract efficiently. FENNEL SEED (sweet/Water/kidney) → anethole (same as star anise) is a carminative — it prevents gas formation from the complex sugars in organ meats. Together, these five spices create a digestive support system specifically designed for the biological challenge of eating offal."
    },
    {
      title: "Organ Textures — A Field Guide",
      content: "Understanding the texture spectrum is essential for building a balanced phá lấu bowl: SMALL INTESTINE (ruột non): silky, tender, thin-walled — the most delicate. Can over-convert to mush if braised too long. Texture = silk ribbon. LARGE INTESTINE (ruột già): thicker wall, chewier, more 'meaty' feel. Tolerates longer braising. Texture = soft rubber band (in the best way). STOMACH (bao tử): honeycomb-patterned inner surface (in tripe), chewy-springy, never fully softens. Texture = bouncy sponge. LIVER (gan): smooth, creamy, crumbles slightly. Must be added last. Texture = warm pâté. EAR (tai): crunchy cartilage layered with soft skin and thin fat. Texture = corn chip inside velvet. TONGUE (lưỡi): dense muscle with a unique grain — braised tongue shreds into thick, meaty strands. Texture = tender brisket. A properly composed phá lấu bowl has AT LEAST 3 different organs for textural variety."
    },
    {
      title: "The Coconut Milk Hierarchy",
      content: "Not all coconut milk is equal for phá lấu: FRESH COCONUT CREAM (nước cốt dừa tươi, first press): 30-35% fat. The premium choice — produces the richest, most stable emulsion. Requires higher heat tolerance and is more expensive. CANNED COCONUT MILK (nước cốt dừa đóng hộp): 17-24% fat. The practical choice for home cooks. Brands matter: Aroy-D and Chaokoh are consistently thick; store brands are often watered down. Shake the can VIGOROUSLY before opening to redistribute the cream that separates during storage. COCONUT CREAM (kem dừa): 30-35% fat but stabilised with guar gum. Works well but the stabiliser can create a slightly gummy mouthfeel in the final broth. LITE COCONUT MILK: 5-7% fat. DO NOT USE — insufficient fat to dissolve fat-soluble spice compounds, and the broth will be thin, watery, and one-dimensional. For phá lấu, fat is not a luxury — it's the flavour delivery mechanism."
    },
    {
      title: "Phá Lấu Bò vs Phá Lấu Heo — The Two Schools",
      content: "Saigon's phá lấu exists in two primary forms: PHÁ LẤU HEO (pork): more common, cheaper, milder flavour. Pork intestine is thinner and converts to silky faster (1.5 hours). Pork stomach has a finer honeycomb pattern. Pork liver is milder and less iron-forward. Overall: approachable, gentle, good for first-timers. PHÁ LẤU BÒ (beef): more expensive, more intense. Beef tripe (stomach) is thicker and has a more dramatic honeycomb texture. Beef intestine is denser and requires longer braising (2.5-3 hours). Beef liver is stronger-flavoured and more mineral-rich. Beef tendon (gân bò) is often added — it becomes incredibly gelatinous after 3+ hours. Overall: bold, complex, for experienced offal eaters. Some vendors offer BOTH in the same bowl (phá lấu thập cẩm — mixed assortment), which is the maximalist approach."
    },
    {
      title: "The Saigon Phá Lấu Economy",
      content: "Phá lấu occupies a specific economic niche in Saigon's food ecosystem: it is the cheapest protein-dense street food available. A serving of phá lấu with bánh mì costs 25,000-35,000 VND ($1.00-1.40) and provides 25-30g of protein — comparable to a chicken rice plate that costs 40,000-50,000 VND. The margin for vendors is razor-thin: offal costs 50,000-80,000 VND/kg, coconut milk costs 35,000 VND/litre, spices and bread add 15,000 VND — total ingredient cost per serving is approximately 12,000-18,000 VND, leaving a gross margin of 40-50%. Vendors survive on VOLUME — a busy cart serves 100-150 portions per day. The economics work because the long braising means labour is not proportional to output: one person can tend a 20-litre pot that serves 80 portions with the same effort as a 5-litre pot that serves 20."
    },
    {
      title: "Safety and Sourcing",
      content: "Organ meats require MORE careful sourcing than muscle cuts because organs are the body's filtration and processing systems: LIVER filters blood — it accumulates heavy metals (cadmium, lead) and drug residues if the animal was raised with antibiotics or in contaminated environments. KIDNEY filters waste — same accumulation risks. INTESTINE processes food — higher bacterial load than any other tissue. For safe phá lấu: (1) buy from a trusted butcher or market vendor who can tell you the source farm. (2) Buy FRESH — offal deteriorates faster than muscle (higher enzyme activity means faster autolysis at room temperature). Fresh offal should smell clean and meaty, never sour or ammoniac. (3) Cook thoroughly — the 2+ hour braising in phá lấu exceeds all pathogen kill thresholds. (4) Store properly — refrigerate within 2 hours of cooking, consume within 3 days, reheat to 75°C+ before serving."
    }
  ],

  nutrition: {
    calories: "380 kcal per serving (mixed organs + broth, without bread)",
    protein: "28g — organ meats are protein-dense (15-20% protein by weight)",
    carbs: "12g — from coconut milk, sugar, and sauce components",
    fat: "24g — from coconut milk and organ fat",
    fiber: "1g — from herbs",
    sodium: "920mg — from soy sauce, fish sauce, and oyster sauce",
    vitamins: "Iron (8.5mg — 47% DV, primarily from liver), B12 (25μg — 1042% DV), Zinc, Copper, Vitamin A (from liver — 6,500 IU)"
  },

  relatedRecipes: [
    {
      title: "Lemongrass Pork Bánh Mì",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400",
      slug: "banh-mi",
      description: "The other half of the partnership — when bánh mì meets pork in a different way"
    },
    {
      title: "Saigon Broken Rice Plate",
      image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400",
      slug: "com-tam",
      description: "Another Saigon working-class staple — broken rice with grilled pork"
    },
    {
      title: "Hanoi Beef Pho",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400",
      slug: "hanoi-beef-pho",
      description: "Another long-braised broth masterwork — different tradition, same patience"
    }
  ],

  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Phá Lấu — Saigon Five-Spice Offal Stew in Coconut Milk",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "description": "Saigon's iconic offal stew — pork and beef organs braised for hours in coconut milk with five-spice powder, served with torn bánh mì for dipping. Where Chinese herbal pharmacology meets Vietnamese coconut cuisine and nose-to-tail economics.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
    "prepTime": "PT45M",
    "cookTime": "PT2H30M",
    "totalTime": "PT3H15M",
    "recipeYield": "6 servings",
    "recipeCategory": "Main Course",
    "recipeCuisine": "Vietnamese",
    "keywords": "phá lấu, Vietnamese offal stew, five-spice stew, coconut milk offal, Saigon street food, Vietnamese intestine, tripe stew, nose to tail, organ meat, bánh mì dipping, nhậu food, Cholon food, Vietnamese braised organs",
    "recipeIngredient": [
      "300g pork intestine",
      "300g pork or beef stomach",
      "200g pork liver",
      "200g pig ear",
      "400ml coconut milk",
      "3 tbsp five-spice powder",
      "3 stalks lemongrass",
      "Soy sauce, oyster sauce, fish sauce",
      "Star anise, cinnamon, bay leaves",
      "Bánh mì for serving"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Clean offal thoroughly with salt, rice flour, and vinegar — scrub twice, then blanch with ginger." },
      { "@type": "HowToStep", "text": "Bloom five-spice powder in oil with garlic, shallots, and ginger. Add whole spices and lemongrass." },
      { "@type": "HowToStep", "text": "Add cleaned offal (except liver), coconut milk, broth, and seasonings. Simmer gently for 2-2.5 hours." },
      { "@type": "HowToStep", "text": "Add sliced liver in the last 10 minutes. Rest 30 minutes or refrigerate overnight for deeper flavour." },
      { "@type": "HowToStep", "text": "Serve hot with torn bánh mì, fresh herbs, chilies, and lime." }
    ],
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "380 kcal",
      "proteinContent": "28g",
      "carbohydrateContent": "12g",
      "fatContent": "24g",
      "fiberContent": "1g"
    }
  }
};

export default function PhaLauPage() {
  return <RecipeLayout recipe={recipeData} />;
}
