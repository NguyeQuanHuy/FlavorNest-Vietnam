'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'oc-hut-da-nang',
  title: `Ốc Hút Đà Nẵng — Đà Nẵng Sucking Snails in Lemongrass Chili Sauce`,
  subtitle: 'River snails stir-fried in a lemongrass-chili-coconut sauce so viscous and aromatic that the only extraction method is negative-pressure oral suction — the signature street food where FLUID DYNAMICS meets gastropod anatomy, and the act of eating IS the cooking technique.',
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '45 min',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/oc-hut-da-nang.jpg',

  intro: `Ốc Hút — literally "sucking snails" — is the food that turns eating into a PNEUMATIC ENGINEERING PROBLEM. The snail sits inside its spiral shell, bathed in a thick, fiery lemongrass-chili-coconut sauce that has infiltrated every whorl of the gastropod\\'s calcium carbonate architecture. Your mission: extract the animal and maximum sauce from a shell whose opening is 8-15mm in diameter, using nothing but your lips as a seal and your lungs as a vacuum pump. There are no tools. There are no shortcuts. There is only negative pressure, applied with precision, against a biological structure that evolved over 500 million years specifically to resist extraction. This is Đà Nẵng\\'s most beloved street food, consumed in quantities of 50-100 snails per sitting at sidewalk stalls where the growing mountain of empty shells on your table is the only measure of satisfaction.

The gastropod in question is typically Cipangopaludina lecythoides (ốc bươu nhỏ) or Filopaludina martensi (ốc đá) — freshwater prosobranch snails harvested from rivers, irrigation canals, and flooded rice paddies across Central Vietnam\\'s Thu Bồn and Vu Gia river systems. These species share a critical anatomical feature that makes Ốc Hút possible: the OPERCULUM, a calcified disc attached to the snail\\'s foot that functions as a retractable door, sealing the shell aperture when the animal retracts. In cooking, the operculum remains attached but loosens as the columellar muscle (the snail\\'s primary shell-attachment muscle) denatures at 60-65°C. This creates a VALVE SYSTEM: when you suck, the operculum lifts inward like a one-way check valve, allowing air and sauce to flow past it. When you pause, it partially re-seats. The experienced Ốc Hút eater learns to maintain CONTINUOUS NEGATIVE PRESSURE to keep the operculum open throughout the extraction — any interruption allows the valve to re-close, trapping the snail inside and forcing you to restart the suction cycle.

The sauce is engineered for SHELL INFILTRATION. Unlike a thin broth that would pool at the bottom of the shell and drain out when tilted, the Đà Nẵng Ốc Hút sauce uses coconut cream as a THIXOTROPIC CARRIER — a fluid whose viscosity decreases under shear stress (stirring, pouring) but increases at rest. At rest, the coconut cream\\'s fat globule network creates a gel-like structure (viscosity 200-500 mPa·s) that clings to the shell\\'s inner surfaces, coating every whorl of the spire with flavor. During suction, the shear stress from air flowing past the sauce reduces its apparent viscosity by 60-80%, allowing it to flow toward the aperture. This means the sauce STICKS during rest but FLOWS during suction — the perfect rheological profile for a food designed to be pneumatically extracted.

The lemongrass-chili aromatic system operates on a principle of VOLATILE COMPRESSION within the shell. The shell\\'s interior is a logarithmic spiral — a space that narrows progressively from the aperture to the apex, creating a natural CONCENTRATION GRADIENT. Volatile aroma compounds (citral from lemongrass, capsaicin vapor from chili, eugenol from basil) trapped in the shell\\'s narrow upper whorls exist at higher partial pressures than in the wider lower whorls, simply because the same mass of volatile molecules occupies a smaller volume. When you suck, this compressed aromatic charge is released in a burst — a concentrated blast of lemongrass-chili aroma that hits the olfactory epithelium before the sauce even reaches the tongue. The first sensation of each snail is SMELL, not taste. This is retronasal olfaction weaponized by gastropod geometry.

Đà Nẵng\\'s street-stall culture has elevated Ốc Hút from snack to social ritual. The typical session involves 2-4 people sharing a đĩa ốc (snail plate) of 40-60 snails, a bucket of empty shells growing between them, and a stack of napkins accumulating at twice the rate of the shells. The eating speed is self-regulating: each snail requires 3-8 seconds of sustained suction, creating a natural PACING MECHANISM that slows consumption and extends conversation. The communal shell pile becomes a scoreboard — who ate more, who struggled with a stubborn snail, who sprayed sauce on their shirt. In a city where food is identity, the ability to extract an Ốc Hút cleanly on the first suck is a point of genuine civic pride.`,

  ingredientSections: [
    {
      title: 'Snails',
      items: [
        {
          amount: 1,
          unit: 'kg',
          name: 'live freshwater snails (ốc bươu or ốc đá)',
          note: 'Must be LIVE — dead snails harbor Clostridium botulinum spores that germinate rapidly in the anaerobic shell interior. Live snails retract when touched and their operculum seals tightly. Purge in clean water with 1 tbsp salt for 4-6 hours to expel mud and intestinal contents. Change water 3 times.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'salt (for purging)',
          note: 'Salt water at 1-2% concentration stimulates the snail\\'s mucus glands, causing it to expel intestinal sand and organic debris. Higher concentrations kill the snail prematurely — you need it alive during purging to actively self-clean.'
        }
      ]
    },
    {
      title: 'Lemongrass-Chili-Coconut Sauce',
      items: [
        {
          amount: 4,
          name: 'lemongrass stalks, finely minced',
          note: 'Bottom 10cm only — citral concentration 65-75% of essential oil. Mince to ≤1mm particles: the sauce must be fine enough to enter the shell aperture (8-15mm) and coat the spiral interior. Coarse lemongrass chunks block the shell opening and prevent suction.'
        },
        {
          amount: 200,
          unit: 'ml',
          name: 'coconut cream (nước cốt dừa)',
          note: 'The THIXOTROPIC CARRIER. Full-fat coconut cream (20-25% lipid) — NOT coconut milk (10-15% lipid). The higher fat content creates a denser globule network that provides the shear-thinning behavior essential for shell infiltration. Light coconut milk is too thin to cling to the shell whorls.'
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'chili flakes (ớt bột)',
          note: 'Coarse Korean-style chili flakes (gochugaru equivalent) for Central Vietnamese heat level. Capsaicin at 30,000-50,000 SHU. The flakes must be fine enough to pass into the shell but coarse enough to provide textural grit against the smooth snail flesh — the MICRO-ABRASIVE EFFECT that enhances perceived heat through trigeminal nerve stimulation.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'fish sauce (nước mắm)',
          note: 'Glutamate backbone for the sauce. 40°N cá cơm for depth. Fish sauce penetrates the shell during cooking, pre-seasoning the snail meat while it\\'s still inside — the shell acts as a miniature BRINE CHAMBER.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'sugar',
          note: 'Caramelization substrate at high-heat stir-fry. Also provides sweetness to counterbalance the aggressive chili and fish sauce. Palm sugar preferred for its deeper molasses-like profile.'
        },
        {
          amount: 3,
          name: 'shallots, thinly sliced',
          note: 'Allium base for the aromatic sofrito. Shallot\\'s pyruvate-generating factor is 2-3× stronger than onion — more tear-inducing during cutting but more aromatic during cooking.'
        },
        {
          amount: 4,
          name: 'garlic cloves, minced',
          note: 'Allicin pungency mellows during cooking into ajoene and vinyl dithiin — sweet, nutty sulfur compounds that bridge lemongrass citral and chili capsaicin.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'cooking oil',
          note: 'Neutral high-smoke-point oil for the initial stir-fry. The oil phase carries fat-soluble capsaicin and citral into the shell during the simmering phase.'
        },
        {
          amount: 1,
          name: 'handful Thai basil leaves (húng quế)',
          note: 'Added in the last 30 seconds. Methyl chavicol provides sweet anise top note that softens the sauce\\'s aggressive chili-lemongrass attack. The leaves wilt and cling to the shell surfaces, adding a green aromatic layer.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'tamarind paste',
          note: 'Tartaric acid (pKa 2.89) provides sour backbone that brightens the rich coconut-chili sauce. Tamarind\\'s brown color deepens the sauce\\'s visual intensity.'
        }
      ]
    },
    {
      title: 'Garnish & Accompaniments',
      items: [
        {
          amount: 50,
          unit: 'g',
          name: 'roasted peanuts, roughly crushed',
          note: 'Scattered over the finished dish. Peanuts provide the only solid CRUNCH in an otherwise soft-textured dish — the mechanical contrast between crunchy peanut and slippery snail is the textural thesis.'
        },
        {
          amount: 2,
          name: 'scallions, sliced',
          note: 'Green parts only, cut into 5mm rings. Visual garnish and allium freshness atop the deep brown-red sauce.'
        },
        {
          amount: 1,
          name: 'lime, quartered',
          note: 'Squeeze over the plate before eating. Citric acid brightens the sauce and creates a micro-foam when the acid contacts the coconut cream\\'s protein fraction — visual effervescence.'
        }
      ]
    }
  ],

  steps: [
    {
      title: 'Purge and prepare the live snails',
      instruction: 'Place live snails in a large basin of clean water with 1 tablespoon salt. Let them purge for 4-6 hours, changing the water every 90 minutes. After purging, scrub each shell under running water with a stiff brush to remove algae and mud. Using kitchen shears or pliers, snip off the pointed apex (tip) of each shell — remove approximately 3-5mm of the spire tip to create a small opening.',
      time: '4-6 hr (purging) + 20 min (cleaning)',
      tip: 'THE APEX CUT — CREATING THE SUCTION PORT: This is the single most important preparation step. The snail shell is a SEALED LOGARITHMIC SPIRAL — if the apex is intact, the aperture is the only opening, and suction creates a vacuum inside the shell that works AGAINST extraction (the snail is held in by negative pressure differential). Cutting the apex creates a SECOND OPENING that allows air to enter from the top while you suck from the bottom, breaking the vacuum seal. The physics is identical to puncturing the top of a juice box — without the air inlet, the straw suck collapses the box. The cut must be clean (no shell fragments) and small enough (3-5mm) that sauce enters but doesn\\'t drain out during cooking. Too large, and the sauce flows through like a funnel; too small, and insufficient airflow makes suction laborious.',
      doneness: 'After purging, the water should be completely clear after the final change. Each shell should be visibly clean with no algae or mud. The apex cut should show the internal spiral chambers — you may see a tiny air bubble emerge when submerged, confirming the air pathway is open. Discard any snails that don\\'t retract when poked — they are dead and potentially unsafe.'
    },
    {
      title: 'Pre-boil to loosen the operculum',
      instruction: 'Bring a large pot of water to a rolling boil. Add snails and boil for exactly 3 minutes. Drain immediately and rinse with cold water. This pre-boil partially denatures the columellar muscle, loosening the operculum from its locked position without fully cooking the meat.',
      time: '5 min',
      tip: 'COLUMELLAR MUSCLE DENATURATION CASCADE: The columellar muscle — the single muscle that attaches the snail\\'s body to the central column (columella) of its shell — is a smooth muscle composed primarily of paramyosin, a protein found only in invertebrates. Paramyosin denatures at 60-65°C, significantly lower than vertebrate myosin (68-78°C). The 3-minute boil raises the snail\\'s core temperature to approximately 70-75°C — past paramyosin\\'s denaturation point but before the foot muscle becomes rubbery. This partial denaturation LOOSENS the attachment without RELEASING it: the snail is still inside the shell but no longer gripping the columella with full force. This reduces the suction force needed for extraction from approximately 15-20 kPa (intact columellar attachment) to 3-5 kPa (denatured attachment) — the difference between a difficult, face-reddening suck and a smooth, effortless extraction.',
      doneness: 'After the pre-boil, gently shake a few snails — you should feel the body shift slightly inside the shell (indicating loosened attachment). If the body slides out freely, the boil was too long — the meat will be overcooked by the time the sauce is applied. If there\\'s no movement at all, the muscle attachment is still too strong — boil 1 minute more.'
    },
    {
      title: 'Build the lemongrass-chili aromatic base',
      instruction: 'Heat oil in a large wok or deep skillet over high heat until smoking. Add sliced shallots and minced garlic, stir-fry 30 seconds until fragrant. Add minced lemongrass and chili flakes, stir-fry 60 seconds until the lemongrass releases its oils and the chili flakes toast slightly. Add tamarind paste and stir to combine.',
      time: '3 min',
      tip: 'SEQUENTIAL VOLATILE RELEASE: The aromatics are added in order of thermal stability. Shallots and garlic go first because their sulfur compounds (diallyl disulfide, ajoene) form at 140-160°C and are relatively stable once formed. Lemongrass follows because citral begins volatilizing at 120°C and degrades above 200°C — it needs high heat for extraction but brief exposure to prevent loss. Chili flakes go simultaneously with lemongrass because capsaicin is heat-stable up to 210°C but the CAROTENOID PIGMENTS (capsanthin, capsorubin) that give the sauce its red color degrade above 180°C if heated for more than 90 seconds. This is an aromatic RELAY — each ingredient hands off to the next within a 120-second window.',
      doneness: 'The wok should smell intensely of lemongrass with a chili burn at the back of the throat. The lemongrass should be translucent and soft, not browned. The oil should be deep orange-red from dissolved capsanthin. If the lemongrass is browning, the heat is too high — reduce and add a splash of water to drop the temperature.'
    },
    {
      title: 'Add coconut cream and create the thixotropic sauce',
      instruction: 'Pour coconut cream into the wok. It will sizzle vigorously as it contacts the hot aromatics. Stir continuously for 2 minutes as the coconut cream reduces slightly and emulsifies with the aromatic oil. Add fish sauce and sugar. The sauce should be thick enough to coat the back of a spoon but fluid enough to pour.',
      time: '3 min',
      tip: 'COCONUT CREAM EMULSION ENGINEERING: When coconut cream (oil-in-water emulsion, 20-25% fat) hits the hot aromatic oil, the heat disrupts some of the native milk protein emulsifiers, causing partial COALESCENCE of fat globules. This creates a BIPHASIC SYSTEM: intact small globules (1-5μm, stable emulsion) suspended among larger coalesced droplets (20-50μm, unstable). The small globules maintain the sauce\\'s smooth texture. The large droplets provide the FAT GLOBULE NETWORK responsible for thixotropic behavior — they interact through van der Waals forces to form a weak gel at rest, which breaks under shear stress. This dual-size distribution is what makes the sauce cling at rest but flow under suction. Adding fish sauce at this stage (rather than earlier) prevents the high salt concentration from SALTING OUT the coconut proteins, which would break the emulsion entirely.',
      doneness: 'The sauce should be uniformly orange-red with no visible oil separation. Dip a spoon and let it drip — the sauce should fall in a thick ribbon that holds its shape for 1-2 seconds before merging back (this is the shear-thinning behavior in action). Taste: aggressively salty-sweet-sour-spicy with coconut richness. It should taste TOO STRONG on its own — it will be diluted by the snail\\'s internal moisture during eating.'
    },
    {
      title: 'Stir-fry snails in the sauce for shell infiltration',
      instruction: 'Add the pre-boiled snails to the wok. Toss vigorously over high heat for 3-4 minutes, ensuring every shell is coated in sauce. The tossing action forces sauce into the shell apertures and apex cuts through a combination of gravity, centrifugal force, and capillary action. Reduce heat to medium, cover the wok, and let the snails simmer in the sauce for 5 minutes. Uncover, add Thai basil leaves, and toss for 30 seconds.',
      time: '10 min',
      tip: 'SHELL INFILTRATION MECHANICS: The sauce enters the shell through THREE PATHWAYS simultaneously. (1) GRAVITY FEED: when the shell is aperture-up during tossing, sauce pools at the opening and gravity pulls it into the first whorl. (2) CAPILLARY ACTION: the shell\\'s inner surface is lined with a thin layer of periostracum (organic shell coating) that has a contact angle of 30-45° with the oily sauce — low enough for capillary forces to draw the sauce along the walls against gravity, reaching the upper whorls. (3) APEX ASPIRATION: when the shell is aperture-down, sauce draining out through the aperture creates slight negative pressure at the apex cut, drawing air in — when the shell flips aperture-up again, this air exits through the apex, replaced by sauce pulled in through the aperture by the same pressure differential. The 5-minute covered simmer allows thermal equilibration: the sauce reaches every chamber of the spiral, and the snail meat absorbs flavors through OSMOTIC DIFFUSION across its surface (driven by the fish sauce\\'s 20-25% NaCl concentration gradient).',
      doneness: 'Pick up a snail and look through the apex cut — you should see sauce inside the upper whorls. Shake a snail near your ear — you should hear sauce sloshing inside (the "ốc có nước" test). The basil leaves should be wilted and clinging to the shell surfaces. The sauce remaining in the wok should be reduced to a thick, glossy coating.'
    },
    {
      title: 'Plate and serve with suction instructions',
      instruction: 'Transfer snails and all remaining sauce to a large plate or shallow bowl. Scatter crushed peanuts and sliced scallions over the top. Serve with lime quarters on the side. Provide a large communal bowl for empty shells and a generous stack of napkins.',
      time: '2 min',
      tip: 'SUCTION TECHNIQUE — THE THREE-PHASE EXTRACTION: Phase 1 — SEAL: Press your lips firmly around the shell aperture, creating an airtight seal. Your lower lip should extend past the aperture edge by 2-3mm for full contact. Phase 2 — VACUUM: Generate negative pressure by expanding your oral cavity (lowering the jaw and tongue simultaneously) while maintaining the lip seal. Target pressure: -3 to -5 kPa (equivalent to drinking through a straw). The apex cut allows air to enter from behind, breaking the vacuum lock. Phase 3 — FLOW: The pressure differential drives sauce and snail toward your mouth. The thixotropic sauce\\'s viscosity drops from ~400 mPa·s at rest to ~80 mPa·s under the shear stress of flowing through the aperture — thin enough to flow but thick enough to carry flavor. The snail body, with its loosened columellar attachment, releases and travels with the sauce stream. Total extraction time: 3-5 seconds for a skilled eater, 8-12 seconds for beginners. The SOUND — a loud, wet slurp — is not rude. It is mechanically inevitable when fluid passes through a narrow orifice under negative pressure, and in Đà Nẵng, it is the soundtrack of satisfaction.',
      doneness: 'Each snail, once extracted, should arrive in the mouth trailing a bolus of sauce. The meat should be tender-firm (not rubbery) with a slight chewiness from the residual collagen. The sauce burst should be intensely spicy-aromatic with a coconut richness that lingers. If extraction requires face-reddening effort, the pre-boil was too short. If the snail falls out before suction, the pre-boil was too long. The sweet spot is: moderate suction, clean release, sauce trail, no remaining meat in the shell.'
    }
  ],

  proTips: [
    {
      title: 'The Apex Cut Diameter Matters',
      description: 'Too small (<2mm): insufficient airflow, requires excessive suction force (>10 kPa) that can cause cheek fatigue after 20 snails. Too large (>6mm): sauce drains out during cooking, leaving dry shells. The optimal 3-5mm aperture creates enough airflow for easy extraction while retaining 85-90% of the sauce inside the shell during the stir-fry and simmering phases. Professional Đà Nẵng vendors use modified pliers with a depth stop to ensure consistent cuts across hundreds of snails per batch.'
    },
    {
      title: 'Sauce Viscosity Calibration',
      description: 'The sauce must be thin enough to enter the shell (viscosity <500 mPa·s under shear) but thick enough to cling (>200 mPa·s at rest). If your sauce is too thick after the coconut cream reduction, add 1-2 tablespoons of water and re-stir — you need the thixotropic shear-thinning behavior, and an over-reduced sauce becomes a paste that won\\'t flow under suction. If too thin, simmer 2 minutes longer to drive off water and concentrate the fat globule network.'
    },
    {
      title: 'European Substitute: Escargot de Bourgogne',
      description: 'French Burgundy snails (Helix pomatia, available canned at German supermarkets as "Weinbergschnecken") can substitute, though they\\'re typically sold pre-extracted from shells. For the authentic suction experience, buy live garden snails from a reputable farm (Schneckenzucht — several exist in Germany). Purge for 7 days on a flour-only diet. The same pre-boil, apex cut, and sauce infiltration process applies — Helix pomatia shells have similar spiral geometry. The meat is firmer with higher collagen content, so extend the covered simmer from 5 to 8 minutes.'
    },
    {
      title: 'The Shell-Pile Psychology',
      description: 'In Đà Nẵng, the communal shell bowl serves a psychological function beyond hygiene. As the pile grows, it creates VISUAL MOMENTUM — a tangible record of consumption that motivates continued eating (similar to how poker chips encourage larger bets when the stack is visible). Street stalls deliberately use transparent bowls so the pile is maximally visible. The average Đà Nẵng Ốc Hút session ends not when hunger is satisfied but when the shell pile reaches a psychologically satisfying height — typically 40-60 shells per person.'
    },
    {
      title: 'Safety: Freshwater Snail Parasites',
      description: 'Freshwater snails can harbor Angiostrongylus cantonensis (rat lungworm) larvae. The 3-minute pre-boil plus 5-minute sauce simmer ensures a core temperature above 74°C for sufficient time to kill all parasites and their larvae. NEVER eat freshwater snails raw or undercooked. The purging step also helps — snails expel some intestinal parasites along with mud during the saltwater soak. When in doubt, use a probe thermometer: the snail meat must reach 74°C minimum for 2 minutes.'
    }
  ],

  nutrition: {
    calories: 320,
    protein: '22g',
    carbs: '18g',
    fat: '19g',
    fiber: '2g'
  },

  conclusion: `Ốc Hút is the rare dish where the PHYSICS OF EATING is more complex than the physics of cooking. The logarithmic spiral shell creates a natural concentration gradient for volatile aromatics. The operculum acts as a biological one-way valve. The thixotropic coconut sauce exploits shear-thinning rheology to cling at rest and flow under suction. The apex cut converts a sealed chamber into a pneumatic extraction system. And the negative-pressure oral suction — the defining act — generates the exact shear stress needed to trigger the sauce\\'s viscosity transition from gel to liquid. No other dish in Vietnamese cuisine requires you to solve a fluid dynamics equation with your mouth. The 3-8 seconds of sustained suction per snail create a natural eating pace that extends the meal into a 30-60 minute social event, the growing shell pile tracking progress like a scoreboard. When you bite through the extracted snail — tender protein yielding to teeth still coated in spicy coconut lemongrass sauce — the flavor arrives as a burst precisely because it was compressed in a 15mm aperture and released under pressure differential. Ốc Hút doesn\\'t taste better than other snail preparations because of superior ingredients. It tastes better because the shell itself is a FLAVOR DELIVERY DEVICE that concentrates, pressurizes, and times the release of every aromatic compound with a precision that no plate or bowl could replicate. The shell is not packaging. The shell is the instrument.`
};

export default function OcHutDaNangPage() {
  return <RecipeLayout recipe={recipe} />;
}
