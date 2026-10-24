'use client';

import RecipeLayout from '../_components/RecipeLayout';

const recipeData = {
  title: "Chè Khúc Bạch",
  subtitle: "Vietnamese Almond Panna Cotta in Sweet Soup — Where Italian Gelatin Technology Meets Chinese Herbal Medicine Through French Colonial Dessert Culture",
  heroImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
  prepTime: "40 min (+ 3 hrs chilling)",
  cookTime: "15 min",
  servings: "6",
  difficulty: "Easy" as const,
  region: "Northern" as const,
  province: "Hà Nội",

  introduction: `Chè khúc bạch is a paradox wrapped in a dessert bowl. It is named using Sino-Vietnamese (khúc bạch = 曲白 = "bent white," referring to the curved white blocks of almond jelly), served in the format of a traditional Vietnamese chè (sweet soup), made with a technique borrowed from Italian panna cotta (cooked cream set with gelatin), flavoured with almond extract that traces back to Chinese apricot kernel medicine (hạnh nhân), and popularised in its current form through the French colonial dessert influence that introduced gelatin-based desserts to Vietnamese cuisine. It is a four-culture collision in a single bowl, and no single culture can claim it as entirely their own.

The base is a sweetened milk mixture — fresh milk, condensed milk, and cream — cooked gently, flavoured with almond extract, then set with gelatin into a firm but trembling block. This block is cut into diamond or rectangular pieces that sit in a bath of jasmine-scented sugar syrup, surrounded by lychees, longan, coconut jelly, and crushed ice. The visual effect is striking: translucent white blocks floating among translucent fruits in a crystal-clear syrup, the whole bowl glistening like an edible ice sculpture.

The gelatin chemistry is the engineering heart of the dish. Gelatin is a protein derived from collagen — the structural protein in animal skin and bones. When dissolved in hot liquid and then cooled, gelatin molecules form a three-dimensional network of triple helices (three protein chains wound around each other) connected by junction zones. This network traps the liquid within it, converting a flowing liquid into a self-supporting solid — a gel. The concentration of gelatin determines the gel's firmness: too little (below 1.5% w/v) and the gel is too soft to hold its shape when cut; too much (above 5% w/v) and the gel is rubbery, bouncy, and unpleasantly chewy. Chè khúc bạch targets the sweet spot: 2.5-3.5% gelatin by weight, producing blocks that are firm enough to be cut into clean shapes and picked up with a spoon, but soft enough to TREMBLE when the bowl is tapped — the characteristic "khúc bạch wobble" that signals correct texture.

The almond flavour is where the Chinese pharmaceutical tradition enters. True almond extract (tinh dầu hạnh nhân) used in Vietnamese chè khúc bạch is derived from bitter almonds (Prunus dulcis var. amara) or, more commonly, apricot kernels (Prunus armeniaca). Both contain amygdalin — a cyanogenic glycoside that releases benzaldehyde (the compound responsible for the characteristic "almond" aroma) and hydrogen cyanide (HCN, toxic) when crushed and mixed with water. Traditional Chinese medicine has used apricot kernels (杏仁, xìngrén) for millennia as a respiratory remedy — the benzaldehyde has mild bronchodilator properties. The culinary extraction process (heating in water, then distilling the volatile benzaldehyde while the non-volatile HCN remains behind) produces a safe flavouring with the distinctive marzipan-like aroma that defines khúc bạch.

Modern commercial almond extract is synthetic benzaldehyde — chemically identical to the natural compound but produced from toluene rather than almond kernels. It is safe, consistent, and inexpensive. Most Vietnamese home cooks and vendors use synthetic extract without issue — the flavour is indistinguishable from natural in the context of the sweetened milk mixture.

The syrup bath transforms khúc bạch from an Italian-style dessert into a Vietnamese chè. Without the syrup, it would be panna cotta. With the syrup, it becomes a member of the chè family — the vast category of Vietnamese sweet soups and desserts that share one structural principle: solid components swimming in a flavoured liquid. The liquid in chè khúc bạch is a light sugar syrup infused with jasmine or pandan, served ice-cold. The syrup performs three functions: (1) it prevents the gelatin blocks from drying out, (2) it provides a cold, sweet bath that contrasts with the creamy richness of the blocks, and (3) it carries the floating fruits and jellies that round out the bowl's texture spectrum.

Chè khúc bạch became a cultural phenomenon in Hanoi in the early 2000s, when it evolved from a niche dessert into a city-wide obsession. The Phố Tràng Tiền area — Hanoi's traditional dessert street — saw khúc bạch vendors multiply from a handful to dozens within a few years. The dish hit a nerve because it offered something Vietnamese dessert culture had been missing: a COLD, CREAMY, ELEGANT dessert that felt modern and sophisticated (the Italian panna cotta influence) while remaining firmly rooted in the chè format that Vietnamese diners understood.`,

  ingredients: [
    {
      group: "Almond Panna Cotta (Khúc Bạch)",
      items: [
        "400ml fresh whole milk",
        "200ml heavy cream (whipping cream, 35% fat minimum)",
        "100ml sweetened condensed milk",
        "50g sugar",
        "15g gelatin powder (approximately 2 tablespoons) — or 5 gelatin sheets",
        "60ml cold water — for blooming gelatin",
        "1.5 teaspoons pure almond extract (tinh dầu hạnh nhân)",
        "1 pinch salt — flavour amplifier"
      ]
    },
    {
      group: "Jasmine Sugar Syrup",
      items: [
        "150g sugar",
        "800ml water",
        "2-3 drops jasmine extract — or 3-4 dried jasmine flowers steeped and strained",
        "1 pandan leaf (lá dứa) — tied in a knot, optional alternative to jasmine"
      ]
    },
    {
      group: "Accompaniments",
      items: [
        "1 can (565g) lychees in syrup — drained, halved",
        "1 can (565g) longan in syrup — drained",
        "100g coconut jelly (thạch dừa) — cubed, available at Asian grocers",
        "50g dried lotus seeds (hạt sen) — boiled until soft, optional",
        "Crushed ice — for serving",
        "Fresh pomelo segments — optional, for citrus contrast",
        "Roasted almonds — sliced, for garnish"
      ]
    }
  ],

  instructions: [
    {
      step: 1,
      title: "Bloom the Gelatin — Hydration Before Dissolution",
      detail: `Sprinkle gelatin powder evenly over 60ml of COLD water in a small bowl. Let it sit undisturbed for 5-10 minutes until the gelatin absorbs the water and transforms into a soft, spongy mass.

If using gelatin sheets: submerge in a bowl of cold water for 5 minutes until floppy. Squeeze out excess water before using.

THE BLOOMING IMPERATIVE — MOLECULAR PRE-HYDRATION:

Gelatin powder consists of dried collagen fragments — protein chains that have been partially hydrolysed (broken into shorter pieces) from animal collagen. In their dry state, these chains are tangled, compacted, and surrounded by air. If you add dry gelatin directly to hot liquid, two problems occur:

PROBLEM 1 — LUMPING:
The outer surface of the gelatin mass instantly dissolves when it hits hot liquid, creating a sticky gel coating that traps the dry powder inside. This is the "fish eye" problem — hard, dry cores surrounded by gummy dissolved gelatin. These lumps never fully dissolve, and they create gritty spots in the finished khúc bạch.

PROBLEM 2 — INCOMPLETE DISSOLUTION:
The air trapped between dry gelatin particles prevents uniform wetting. Some particles dissolve; others remain partially hydrated. The result: inconsistent gel strength throughout the mixture, producing blocks that are firm in some areas and soft in others — a structural defect that causes uneven cutting and crumbling.

THE BLOOMING SOLUTION:
Cold water hydrates the gelatin slowly and evenly. The cold temperature prevents premature dissolution — the gelatin absorbs water into its protein matrix (swelling from 2-3× its dry volume) without dissolving. After 5-10 minutes, every particle is uniformly hydrated and ready to dissolve COMPLETELY when heat is applied. The bloomed gelatin is translucent, soft, and jiggling — a solid sponge of hydrated protein.

WATER TEMPERATURE IS CRITICAL:
Cold water (below 25°C): gelatin hydrates but does not dissolve → correct
Warm water (25-40°C): gelatin partially dissolves, partially hydrates → inconsistent
Hot water (above 50°C): gelatin dissolves immediately on surface contact → lumps

The blooming step takes 5 minutes of patience. Skipping it is the #1 cause of failed khúc bạch.`,
      tip: "For the smoothest texture, use SHEET gelatin (lá gelatin) rather than powder. Sheet gelatin produces a cleaner-tasting, more transparent gel with better mouthfeel. The sheets are pre-hydrated to a uniform thickness, so blooming is faster and more consistent. Professional pastry chefs universally prefer sheets. If using powder, Knox or Dr. Oetker are reliable brands with consistent gel strength."
    },
    {
      step: 2,
      title: "Cook the Cream Base — Emulsion Management",
      detail: `In a medium saucepan, combine fresh milk, heavy cream, condensed milk, and sugar.

Heat over MEDIUM-LOW heat, stirring constantly with a silicone spatula or wooden spoon.

Heat until the mixture reaches 70-75°C — steaming but NOT simmering. Small bubbles may appear at the edges. If you see a full simmer (bubbles across the surface), the heat is too high.

Remove from heat.

THE 70-75°C SWEET SPOT — WHY NOT BOIL:

The cream base is an oil-in-water EMULSION: fat droplets from the cream and milk are suspended in the water phase, held in place by milk proteins (casein) that act as emulsifiers — coating each fat droplet and preventing them from coalescing (merging into larger drops that would separate as an oily layer).

AT 70-75°C:
→ Sugar dissolves completely (sugar solubility = 200g/100ml at 70°C — far more than needed)
→ Condensed milk integrates smoothly (its high sugar content prevents protein coagulation)
→ Milk proteins remain functional as emulsifiers — the emulsion is stable
→ The mixture is hot enough to dissolve bloomed gelatin on contact
→ Flavour compounds (from the milk, cream, and soon the almond extract) distribute evenly

AT 100°C (BOILING):
→ Casein proteins begin to denature and aggregate — forming skin on the surface
→ Fat droplets lose their protein coating and begin to coalesce — the emulsion BREAKS
→ Lactose (milk sugar) undergoes Maillard reaction with the milk proteins — the mixture yellows and develops a "cooked milk" flavour that competes with the almond
→ Water evaporates, concentrating the mixture and changing the gel ratio
→ Violent bubbling incorporates AIR into the mixture — producing foam that sets as bubbles in the final gel

A boiled cream base produces khúc bạch that is: yellow instead of white, cooked-tasting instead of clean, bubbly instead of smooth, and potentially grainy from broken emulsion. The 70-75°C limit preserves the pristine white colour, clean dairy flavour, and smooth texture that defines premium khúc bạch.

ADD THE BLOOMED GELATIN to the hot cream base. Stir continuously for 2-3 minutes until completely dissolved — you should see NO granules, NO lumps, NO translucent spots. The mixture should be uniformly opaque and smooth.

ADD THE ALMOND EXTRACT. Stir gently to distribute.

THE ALMOND EXTRACT — LAST, NOT FIRST:
Benzaldehyde (the aroma compound in almond extract) has a boiling point of 178°C — well above cooking temperature — so it won't evaporate. However, it IS volatile at the liquid surface: in a hot, steaming mixture, benzaldehyde molecules at the surface escape into the steam and are lost. Adding the extract to the hot mixture and THEN continuing to heat would lose 20-30% of the aroma in 5 minutes. Adding it AFTER removing from heat — when the mixture is still hot enough to incorporate it but no longer producing significant steam — preserves maximum aroma in the final gel.`,
      tip: "For an extra dimension, replace 50ml of the fresh milk with coconut cream (nước cốt dừa). The lauric acid in coconut fat creates a subtly tropical base note beneath the almond, producing a Southeast Asian hybrid that reads as more 'Vietnamese' than the purely Italian-inflected original. The coconut fat also makes the set gel slightly more opaque — a whiter, more luminous block."
    },
    {
      step: 3,
      title: "Set the Gel — Nucleation and Network Formation",
      detail: `Pour the cream-gelatin mixture through a FINE MESH STRAINER into a shallow rectangular container (a glass baking dish, approximately 20×30cm, works perfectly). The strainer catches any undissolved gelatin particles, protein skin, or air bubbles.

TAP the container firmly on the countertop 3-4 times. This forces any trapped air bubbles to rise to the surface, where they pop. Air bubbles trapped in the gel become visible holes in the cut blocks — cosmetic defects that signal amateur technique.

Let the mixture cool to room temperature (approximately 30 minutes). Then cover with plastic wrap (TOUCHING the surface to prevent skin formation) and refrigerate for a minimum of 3 hours, or until firmly set.

THE GELATION PROCESS — WHAT HAPPENS DURING CHILLING:

When the hot mixture (70°C+) cools through the following temperature ranges, the gelatin molecules undergo a phase transition from dissolved protein chains (sol) to a structured network (gel):

70°C → 40°C (COOLING PHASE):
→ Gelatin molecules are in random coil configuration — loose, disordered chains moving freely
→ The mixture is liquid, pourable, and shows no sign of thickening
→ This phase takes 15-30 minutes at room temperature

40°C → 30°C (NUCLEATION PHASE):
→ Gelatin molecules begin to slow down (less kinetic energy)
→ Individual chains start to find each other and form TRIPLE HELICES — three chains winding around each other to form a rigid structure (the same triple helix that collagen uses in living tissue)
→ These triple helices are the JUNCTION ZONES of the gel network
→ The mixture begins to thicken noticeably — it coats a spoon, drips slowly rather than running

30°C → 15°C (NETWORK COMPLETION):
→ Junction zones multiply and connect to each other through the free ends of the gelatin chains
→ A continuous three-dimensional network forms throughout the entire volume
→ Liquid water (and dissolved milk solids, sugar, flavour compounds) is trapped within the network's pores
→ The mixture transitions from a viscous liquid to a self-supporting solid — the GEL
→ This is a thermoreversible gel: heat it above 30°C and it melts back to liquid

15°C → 4°C (MATURATION):
→ Additional junction zones form as the gel "ages" — strengthening the network
→ The gel becomes progressively firmer over 2-4 hours
→ After 3 hours at 4°C, the gel is at approximately 80% of its maximum strength
→ After 12 hours, it reaches 95%+ — this is why overnight setting produces the firmest, cleanest-cutting blocks

THE CONTAINER DEPTH MATTERS:
The mixture should be 2-3cm deep in the container. This thickness is optimised for:
→ CUTTING: 2-3cm blocks are the right size for one spoonful — too thin and they break, too thick and they're unwieldy
→ COOLING: a thin layer cools from top and bottom simultaneously, gelling uniformly; a deep container gels from the outside in, potentially trapping warmer liquid in the centre that sets softer
→ SERVING: 2-3cm blocks have an elegant aspect ratio — taller than they are wide when cut into diamonds, creating visual height in the bowl`,
      tip: "For the clearest, most pristine white blocks: after pouring into the container but BEFORE refrigerating, use a blowtorch or the tip of a lighter flame to quickly pass over the surface. The flame pops any surface bubbles instantly — producing a glass-smooth top surface that becomes the most visible face of your cut blocks. This is a pastry chef technique borrowed from crème brûlée preparation."
    },
    {
      step: 4,
      title: "Make the Jasmine Syrup — Aromatic Architecture",
      detail: `Combine 150g sugar and 800ml water in a saucepan. Bring to a boil, stirring to dissolve the sugar completely.

If using pandan leaf: add the knotted leaf during boiling. Boil for 3 minutes. Remove leaf.

Remove from heat. Let cool to room temperature.

If using jasmine extract: add 2-3 drops to the COOLED syrup. Stir gently.

If using dried jasmine flowers: add flowers to the hot syrup, cover, and steep for 15 minutes. Strain and discard flowers.

Refrigerate the syrup until ice-cold — minimum 2 hours.

THE SYRUP CONCENTRATION — LIGHT, NOT HEAVY:

The sugar-to-water ratio (150g : 800ml = approximately 16% w/v) produces a LIGHT syrup — significantly thinner than the heavy syrups used in canned fruits (60-70% w/v) or cocktail simple syrups (50% w/v).

This light concentration is deliberate:

VISCOSITY: A light syrup flows like slightly thickened water — it pours easily into the gaps between khúc bạch blocks and fruits, filling the bowl uniformly. A heavy syrup would sit on top of the blocks, pooling rather than surrounding them.

SWEETNESS BALANCE: The khúc bạch blocks are already sweet (condensed milk + sugar). The canned fruits are already sweet (packed in syrup). A heavy syrup on top of these would produce a cloyingly sweet dessert. The light syrup provides ENOUGH sweetness to register as "sweet soup" (chè) but not so much that it overwhelms the delicate almond flavour of the blocks.

TEMPERATURE PERFORMANCE: When crushed ice is added at serving time, the ice melts and dilutes the syrup further. A light syrup that was "perfect" before ice becomes "slightly sweet" after ice — which is the intended serving sweetness. A heavy syrup designed for post-dilution would be unpleasantly sweet if someone ate it without ice (which some diners prefer).

THE JASMINE QUESTION — JASMINE VS PANDAN:

Traditional Hanoi chè khúc bạch uses JASMINE — either jasmine-scented sugar (ướp hoa nhài), jasmine extract, or steeped dried jasmine flowers. The jasmine aroma (primarily linalool, benzyl acetate, and indole — yes, indole, a compound that in isolation smells fecal but in low concentration creates a narcotic floral sweetness) provides a perfumed elegance that elevates the dessert from "sweet soup" to "experience."

Southern Vietnamese versions often substitute PANDAN — its 2-acetyl-1-pyrroline aroma (vanilla-like, slightly nutty) is more familiar in Saigon's dessert vocabulary. Pandan produces a greener, warmer fragrance; jasmine produces a whiter, cooler one. Neither is wrong — they create different emotional moods for the same physical dessert.`,
      tip: "For the most elegant jasmine flavour, make jasmine sugar a day ahead: layer dried jasmine flowers with white sugar in a sealed jar (1 tablespoon flowers per 100g sugar). After 24 hours, the sugar absorbs the volatile jasmine oils, creating a fragrant sugar that dissolves into the syrup with an intensity no extract can match. This is the Hanoi old-school method — the same technique used to scent tea."
    },
    {
      step: 5,
      title: "Cut the Khúc Bạch — Geometry and Fracture Mechanics",
      detail: `Remove the set gel from the refrigerator. It should be FIRM — when you tap the surface, it should jiggle as a unified mass (not ripple like liquid).

DIP a sharp knife in hot water before each cut. This is critical.

Cut the gel into diamonds (preferred), rectangles, or squares — approximately 2×3cm.

THE HOT KNIFE — THERMAL CUTTING:

Gelatin gel is a thermoreversible solid. Its gel-to-sol (solid-to-liquid) transition temperature is approximately 30-35°C. A knife dipped in hot water (60-70°C) reaches the gel surface at approximately 50°C after the brief air exposure during the cutting motion.

At the cutting edge:
→ The hot knife melts a micro-thin layer of gel (approximately 0.1-0.2mm) directly at the blade surface
→ This melted layer acts as a LUBRICANT — the knife slides through the gel rather than pushing through it
→ The cut surfaces are smooth and glossy (melted and re-solidified) rather than ragged and torn

A room-temperature knife:
→ Drags through the gel, compressing it ahead of the blade
→ Creates friction that tears the gel structure rather than slicing it
→ Cut surfaces are rough, matte, and crumbly
→ Blocks look amateur — edges are irregular, corners are rounded from compression

The diamond cut is the traditional shape — rotated 45° from the rectangular grid, producing blocks with pointed ends that look like gems or crystals floating in the syrup. This shape is purely aesthetic (no functional advantage over rectangles) but it IS the shape that signals "this is proper chè khúc bạch" rather than "this is cut-up jelly."

RELEASING THE BLOCKS:
After cutting, use a thin spatula or butter knife to gently lift each block from the container. Dip the spatula in hot water between blocks. Place the blocks directly into the ice-cold jasmine syrup — they float or sink depending on their density relative to the syrup (at 16% sugar, most blocks float).

QUANTITY GUIDE:
A 20×30cm container of gel 2.5cm deep produces approximately 40-50 diamond-shaped blocks — enough for 6 generous servings (7-8 blocks per bowl).`,
      tip: "For a professional presentation, cut the first block and examine its cross-section. A perfectly set khúc bạch has: uniformly white colour throughout (no translucent or clear zones), smooth texture with no visible bubbles, and a slight wobble when you shake the piece on the spatula. If you see a clear layer at the bottom (gelatin settled before setting), your mixture wasn't stirred enough before pouring. If you see bubbles, you didn't tap the container enough. If the centre is softer than the edges, the refrigeration time was insufficient."
    },
    {
      step: 6,
      title: "Assemble the Bowl — Composition as Craft",
      detail: `For each serving bowl:

1. Place 7-8 khúc bạch blocks in the bowl — arrange them loosely, not stacked or compressed.

2. Add 4-5 lychee halves, scattered among the blocks.

3. Add 4-5 longan fruits, filling gaps between blocks.

4. Add 2 tablespoons cubed coconut jelly.

5. Add boiled lotus seeds if using — 3-4 per bowl.

6. Ladle ice-cold jasmine syrup over everything — enough to submerge the blocks by half (they should peek above the syrup surface, not be drowning).

7. Add crushed ice — a generous amount, enough to make the bowl frosty.

8. Optional: garnish with sliced almonds and pomelo segments.

THE TEXTURE SPECTRUM — ENGINEERED VARIETY:

Each component occupies a unique position on the texture map:

KHÚC BẠCH BLOCKS: Soft-firm, trembling, creamy → the STAR
LYCHEE: Juicy, fragrant, slightly fibrous → FRUIT BRIGHTNESS
LONGAN: Softer than lychee, honey-sweet, translucent → GENTLE SWEETNESS
COCONUT JELLY: Firm, chewy, slightly bouncy (QQ texture) → TEXTURAL CONTRAST
LOTUS SEEDS: Starchy, crumbly, earthy → GROUNDING ELEMENT
CRUSHED ICE: Cold, crunchy, melting → TEMPERATURE and ACOUSTIC ELEMENT
SYRUP: Liquid, cold, lightly sweet → THE MEDIUM

Seven textures in one bowl — from trembling (khúc bạch) to crunchy (ice) to chewy (coconut jelly) to juicy (lychee). This texture diversity is the signature of Vietnamese chè in general — no chè has fewer than three textures. Khúc bạch achieves seven, which is why it became the premium chè: every spoonful is texturally unique depending on which combination of components it captures.

THE TEMPERATURE IMPERATIVE:
Chè khúc bạch MUST be served ice-cold — 2-5°C. At this temperature:
→ The gelatin blocks are at maximum firmness (the network is fully matured)
→ The almond flavour is perceived as "clean" and "bright" (cold suppresses heavy/cloying notes)
→ The jasmine syrup is at its most refreshing
→ The contrast between cold syrup and creamy blocks creates a sensory dialogue

At room temperature (25°C+):
→ The gelatin blocks begin to soften (approaching the 30°C melting point)
→ The almond flavour becomes heavy and "perfumey"
→ The syrup tastes overly sweet (cold suppresses sweetness perception by 15-20%)
→ The ice has melted, diluting everything

Chè khúc bạch has a SERVICE WINDOW of approximately 15-20 minutes from assembly to consumption. After that, ice melt dilution and temperature rise degrade the experience significantly. This is why street vendors assemble each bowl TO ORDER rather than pre-making bowls.`,
      tip: "The Hanoi secret: a TINY drop (literally ONE drop) of rose water in the syrup, in addition to the jasmine. Rose water (nước hoa hồng) at imperceptible concentration doesn't register as 'rose' flavour — it registers as HEIGHTENED FLORAL INTENSITY in the jasmine. The brain interprets the additional floral esters as 'more jasmine' rather than 'jasmine + rose.' It's a flavour illusion — an aromatic amplifier that works below the perception threshold."
    }
  ],

  tips: [
    {
      title: "Gelatin Strength — Bloom Value Matters",
      content: "Gelatin is graded by 'bloom strength' — a measure of gel firmness (named after Oscar Bloom who invented the test in 1925). Knox gelatin (US) is approximately 225 bloom. Dr. Oetker (European) is approximately 200 bloom. Professional-grade sheet gelatin comes in four grades: Bronze (125-155 bloom), Silver (160-180), Gold (190-220), and Platinum (235-265). Higher bloom = firmer gel at the same concentration. For chè khúc bạch, use Gold or Silver sheets (or Knox powder). If using a lower bloom gelatin, increase the quantity by 15-20% to compensate. If your blocks are too soft to cut cleanly: more gelatin next time. If they're rubbery and bouncy: less gelatin. The target texture: a firm tremble, not a bounce."
    },
    {
      title: "The Agar Alternative — Vegan Khúc Bạch",
      content: "Agar (thạch, derived from red algae) can replace gelatin for a vegetarian/vegan version, but the texture is fundamentally different. Gelatin gel: elastic, creamy, melts in the mouth at body temperature (37°C), smooth mouthfeel — the experience of eating gelatin is defined by its melting-in-mouth quality. Agar gel: rigid, brittle, does NOT melt in the mouth (melting point 85°C), shatters when bitten rather than yielding. Agar khúc bạch has a cleaner cut and a firmer hold, but it lacks the trembling, melt-in-mouth quality that defines the gelatin version. Conversion ratio: use approximately 60% of the gelatin weight in agar (9g agar for 15g gelatin). Agar must be boiled (not just heated — it dissolves at 85°C and sets at 35°C, with no blooming step required)."
    },
    {
      title: "The Condensed Milk Variable — Sweetness Engineering",
      content: "Sweetened condensed milk (sữa đặc có đường) is 55% sugar by weight — it's essentially milk-flavoured sugar syrup with a thick, viscous texture from evaporated water. In khúc bạch, it performs a DUAL role: sweetener + emulsion stabiliser. The extremely high sugar concentration in condensed milk increases the mixture's viscosity even before gelatin sets, which helps keep the cream and milk emulsified during the critical cooling period when the mixture is transitioning from hot liquid to cool gel. Replacing condensed milk with sugar + regular milk changes the setting dynamics: the lower viscosity allows fat to separate before the gelatin network forms, producing blocks with a slightly oily surface. If you want LESS sweetness but the same texture, reduce the separate sugar rather than the condensed milk."
    },
    {
      title: "Hanoi's Phố Tràng Tiền — The Khúc Bạch Epicenter",
      content: "Phố Tràng Tiền (Tràng Tiền Street) in Hanoi's Hoàn Kiếm District has been the spiritual home of chè khúc bạch since the dish's rise to prominence in the early 2000s. The street's dessert culture dates to the French colonial period — Tràng Tiền Ice Cream (Kem Tràng Tiền), established in 1958 using French ice cream technology, anchored the street as Hanoi's dessert destination. When khúc bạch emerged as a trend, vendors naturally gravitated to Tràng Tiền's established dessert-seeking foot traffic. Today, a bowl of chè khúc bạch on Tràng Tiền costs 25,000-40,000 VND ($1.00-1.60) — a price point that makes it accessible to students (a significant portion of Hanoi's dessert market) while premium enough to signal quality. The best vendors are identified not by signage but by queue length."
    },
    {
      title: "Storage and Make-Ahead Strategy",
      content: "Khúc bạch is an ideal make-ahead dessert: the gel blocks keep refrigerated for 3-4 days in a covered container submerged in a little syrup (to prevent drying). The syrup keeps refrigerated for 1 week. Prepare both in advance; assemble bowls to order. DO NOT FREEZE the gel blocks — ice crystal formation ruptures the gelatin network, and the thawed blocks weep liquid and become spongy (syneresis). The fruits (lychee, longan) keep indefinitely canned; drain just before assembly. Coconut jelly keeps refrigerated for weeks. The ONLY component that must be prepared fresh is the crushed ice. This make-ahead quality is why khúc bạch is popular for Vietnamese parties and celebrations — the host can prepare everything the day before and assemble 20 bowls in 10 minutes."
    },
    {
      title: "The Colour Variations — Beyond White",
      content: "While classic khúc bạch is pure white (reflecting the Chinese etymology 'bạch' = white), creative variations exist: MATCHA KHÚC BẠCH: replace almond extract with 2 teaspoons matcha powder dissolved in warm milk — pale green blocks with earthy bitterness. COFFEE KHÚC BẠCH: add 2 tablespoons Vietnamese coffee (cà phê sữa) to the cream base — tan blocks with robust coffee aroma. PANDAN KHÚC BẠCH: add pandan juice (extracted from pandan leaves) — green blocks with vanilla-like fragrance. TARO KHÚC BẠCH: add cooked taro purée — purple blocks with starchy sweetness. These variations are modern inventions (post-2010), not traditional, and purists dismiss them. But they demonstrate the khúc bạch format's adaptability — the gelatin-cream base is a blank canvas that accepts nearly any flavouring."
    }
  ],

  nutrition: {
    calories: "320 kcal per serving (with fruits and syrup)",
    protein: "7g — from gelatin and milk proteins",
    carbs: "48g — from sugar, condensed milk, syrup, and fruits",
    fat: "12g — from cream and milk fat",
    fiber: "1g — from fruits",
    sodium: "85mg — minimal",
    vitamins: "Calcium (from milk), Vitamin C (from lychee), Vitamin A (from cream)"
  },

  relatedRecipes: [
    {
      title: "Vietnamese Chicken Pho",
      image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400",
      slug: "vietnamese-chicken-pho",
      description: "Another Hanoi icon — the savoury counterpart to khúc bạch's sweet elegance"
    },
    {
      title: "Hanoi Grilled Pork Vermicelli",
      image: "https://images.unsplash.com/photo-1583224994076-0e2e8e4fc0c1?w=400",
      slug: "bun-cha-hanoi",
      description: "Hanoi's other street food star — smoky grilled pork in sweet-sour broth"
    },
    {
      title: "Fresh Shrimp & Pork Spring Rolls",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400",
      slug: "fresh-spring-rolls",
      description: "Another Vietnamese classic balancing textures — from crunchy to silky"
    }
  ],

  schemaMarkup: {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": "Chè Khúc Bạch — Vietnamese Almond Panna Cotta Dessert",
    "author": { "@type": "Organization", "name": "FlavorNest Vietnam" },
    "description": "Hanoi's beloved cold dessert — creamy almond-flavoured milk jelly blocks in jasmine sugar syrup with lychee, longan, coconut jelly, and crushed ice. Where Italian panna cotta meets Vietnamese chè tradition.",
    "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200",
    "prepTime": "PT3H40M",
    "cookTime": "PT15M",
    "totalTime": "PT3H55M",
    "recipeYield": "6 servings",
    "recipeCategory": "Dessert",
    "recipeCuisine": "Vietnamese",
    "keywords": "chè khúc bạch, Vietnamese panna cotta, almond jelly dessert, Vietnamese dessert, Hanoi dessert, sweet soup, chè, gelatin jelly, jasmine syrup, lychee dessert, coconut jelly, cold Vietnamese dessert, Tràng Tiền",
    "recipeIngredient": [
      "400ml fresh milk",
      "200ml heavy cream",
      "100ml sweetened condensed milk",
      "15g gelatin powder",
      "1.5 tsp almond extract",
      "150g sugar for syrup",
      "Jasmine extract or dried jasmine flowers",
      "Lychee, longan, coconut jelly",
      "Crushed ice"
    ],
    "recipeInstructions": [
      { "@type": "HowToStep", "text": "Bloom gelatin in 60ml cold water for 5-10 minutes until spongy." },
      { "@type": "HowToStep", "text": "Heat milk, cream, condensed milk, and sugar to 70-75°C (steaming, not simmering). Add bloomed gelatin, stir until dissolved. Add almond extract off-heat." },
      { "@type": "HowToStep", "text": "Strain into a shallow container, tap out bubbles, cool to room temperature, then refrigerate 3+ hours until firmly set." },
      { "@type": "HowToStep", "text": "Make jasmine syrup: dissolve sugar in water, add jasmine extract or steep dried flowers. Chill." },
      { "@type": "HowToStep", "text": "Cut set gel into diamonds with a hot-water-dipped knife." },
      { "@type": "HowToStep", "text": "Assemble: khúc bạch blocks + lychee + longan + coconut jelly + cold jasmine syrup + crushed ice." }
    ],
    "nutrition": {
      "@type": "NutritionInformation",
      "calories": "320 kcal",
      "proteinContent": "7g",
      "carbohydrateContent": "48g",
      "fatContent": "12g",
      "fiberContent": "1g"
    }
  }
};

export default function CheKhucBachPage() {
  return <RecipeLayout recipe={recipeData} />;
}
