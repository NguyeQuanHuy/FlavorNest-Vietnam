'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-trang-cuon-da-nang',
  title: `Bánh Tráng Cuốn Thịt Heo Đà Nẵng — Đà Nẵng Pork & Herb Rice Paper Rolls`,
  subtitle: 'Wet rice paper layered with boiled pork belly, steamed rice noodle sheets, raw vegetables, and a fifteen-herb arsenal, dipped into mắm nêm — Đà Nẵng\’s definitive street food that weaponizes TEXTURAL LAYERING through strategic stacking of six distinct mechanical surfaces within a single cylindrical bite.',
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '50 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-trang-cuon-da-nang.jpg',

  intro: `Quảng Nam has its version. Trảng Bàng has its version. But Đà Nẵng\’s Bánh Tráng Cuốn Thịt Heo is the MAXIMALIST INTERPRETATION — a roll that packs more components, more herbs, and more textural layers than any of its regional cousins. Where Quảng Nam\’s version (covered elsewhere in this collection) focuses on the seven-herb volatile compression, Đà Nẵng pushes the architecture further by inserting a SECOND STARCH LAYER — a sheet of steamed rice noodle (bánh ướt) placed directly on the wet rice paper before any fillings — creating a double-wrapper system that fundamentally changes the structural physics of the roll. This is not redundancy. It is engineering.

The double-wrapper system solves the MOISTURE MIGRATION PROBLEM that plagues every rice paper roll. A single layer of rehydrated rice paper has a water activity (aw) of approximately 0.92-0.95 — perilously close to the 0.98 threshold where the amylopectin gel network begins to over-hydrate, weaken, and tear. Pork belly at 40-50% fat renders moisture continuously from its adipose tissue; raw vegetables release cellular water through osmotic pressure when salt from the dipping sauce contacts their cut surfaces; herbs expel volatile-carrying moisture as they warm from hand heat during rolling. All this moisture attacks the single rice paper layer from within. Đà Nẵng\’s solution: the bánh ướt inner layer acts as a MOISTURE BUFFER — its pre-gelatinized rice starch (fully set at 90-95°C during steaming) has a denser gel structure with smaller pore sizes (0.1-0.5μm versus rice paper\’s 1-5μm) that retards water migration by 60-70%. The inner layer absorbs moisture from the fillings before it reaches the outer rice paper, extending the roll\’s structural integrity window from 3-5 minutes (single layer) to 8-12 minutes (double layer). This is why Đà Nẵng rolls are larger, more heavily stuffed, and eaten more leisurely than their single-wrapper counterparts.

The pork belly preparation in Đà Nẵng follows the NEUTRAL PROTEIN CANVAS philosophy: whole belly slab boiled in water with nothing but a pinch of salt and a few scallion greens. No marinade. No five-spice. No soy sauce. The deliberate blandness is not laziness — it is ACOUSTIC DESIGN in flavor terms. Pork belly boiled at 100°C never undergoes Maillard reactions (which require temperatures above 140°C and surface water activity below 0.6), so the meat develops zero roasted or caramelized flavor compounds. Instead, it becomes a PURE FAT-AND-PROTEIN SUBSTRATE whose primary taste contribution is umami from free glutamate (30-50 mg/100g) and sweetness from glycine (the most abundant free amino acid in pork at 200-400 mg/100g). This neutrality creates HEADROOM — acoustic silence that allows the fifteen herbs, the fermented mắm nêm, the raw vegetables, and the rice paper itself to each be heard distinctly rather than competing against a flavored protein.

The herb arsenal is where Đà Nẵng\’s version reaches its apex. While most Vietnamese roll preparations use 5-7 herbs, Đà Nẵng vendors routinely set out 12-15 varieties: the standard rau răm (Vietnamese coriander), húng quế (Thai basil), tía tô (perilla), kinh giới (lemon balm), ngò gai (culantro), diếp cá (fish mint), plus Central Vietnamese additions like lá cẩm (magenta plant — used here for its slight astringency, not its dye), mùi tàu (long coriander), rau muống chẻ (split water spinach stems), chuối chát (unripe banana, sliced thin), and khế (star fruit) for oxalic acid sharpness. Each herb contributes 30-80 different volatile organic compounds, and the combinatorial chemistry of 15 herbs creates a RETRONASAL OLFACTORY COMPLEXITY that a flavor chemist would need a gas chromatography-mass spectrometry readout to fully catalogue. The human palate perceives this as "freshness" — but it is freshness multiplied across hundreds of simultaneous volatile signals.

Mắm nêm — the fermented anchovy dipping sauce — is the UNIFYING AGENT that makes this anarchic assembly of textures and volatiles cohere into a single flavor experience. The sauce contains glutamic acid (800-1,200 mg/100ml), inosinic acid from nucleotide degradation (50-100 mg/100ml), and 15-25 different biogenic amines produced by Bacillus and Staphylococcus bacteria during the 6-18 month fermentation. When the roll contacts the mắm nêm, the sauce\’s high salt content (20-25% NaCl) triggers immediate osmotic water release from every component — pork, herbs, vegetables, rice paper — creating a momentary SALINITY EQUILIBRATION EVENT across the entire roll that binds all flavors into a unified salty-umami matrix. The mắm nêm doesn\’t accent the roll. It integrates it.`,

  ingredientSections: [
    {
      title: 'Boiled Pork Belly',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'whole pork belly slab, skin on',
          note: 'Select a piece with 5 distinct alternating layers visible in cross-section: skin → fat → meat → fat → meat. This PENTALAMELLAR STRUCTURE is critical — each layer has different thermal behavior and mechanical properties that create the textural complexity when sliced thin. Avoid belly with fewer than 4 visible layers.'
        },
        {
          amount: 2,
          name: 'scallion stalks',
          note: 'Added to the boiling water for aromatic infusion. Allyl sulfides from scallion suppress the "porky" oxidized fat smell (hexanal, nonanal) that develops when rendering pork fat in water.'
        },
        {
          amount: 1,
          unit: 'tsp',
          name: 'salt',
          note: 'Minimal seasoning for the neutral canvas. Just enough to season the boiling water to approximately 1% salinity — below the 2% threshold where significant salt penetration into the meat would occur during the 40-minute cook time.'
        }
      ]
    },
    {
      title: 'Rice Paper & Noodle Sheet',
      items: [
        {
          amount: 20,
          name: 'dried rice paper rounds (bánh tráng mỏng)',
          note: 'Thin Đà Nẵng-style rice paper, 22cm diameter. These are thinner than Southern-style rice paper (0.3-0.5mm vs 0.8-1.0mm), which allows faster rehydration (2-3 seconds vs 5-8 seconds) but requires the double-layer technique because they tear easily when overloaded.'
        },
        {
          amount: 300,
          unit: 'g',
          name: 'steamed rice noodle sheets (bánh ướt)',
          note: 'The MOISTURE BUFFER LAYER. Pre-made sheets available at Vietnamese/Asian stores. If unavailable, wide fresh rice noodles (bánh phở tươi) unrolled into sheets work. The key property is pre-gelatinized starch with dense gel structure — NOT dried rice paper re-wetted, which has the wrong pore structure.'
        }
      ]
    },
    {
      title: 'Vegetable Components',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'lettuce leaves (xà lách)',
          note: 'Butterhead or green leaf lettuce. Each leaf becomes a STRUCTURAL WRAP within the roll — its flexible midrib acts as a longitudinal reinforcement beam that resists the roll\’s tendency to buckle at the center under compression from biting.'
        },
        {
          amount: 150,
          unit: 'g',
          name: 'cucumber, julienned',
          note: 'Seeds removed, cut into 8cm × 5mm sticks. Cucumber\’s water content (96%) and crisp cell turgor (0.5-0.7 MPa) provide the highest-contrast texture element against the soft pork and pliable wrappers.'
        },
        {
          amount: 100,
          unit: 'g',
          name: 'green banana, thinly sliced',
          note: 'Unripe banana (chuối chát) sliced 1-2mm thin. TANNIN DELIVERY SYSTEM: proanthocyanidin tannins at 400-800 mg/100g create puckering astringency that contracts oral mucosa, re-sensitizing taste buds between bites. Soak in acidulated water after cutting to prevent polyphenol oxidase browning.'
        },
        {
          amount: 100,
          unit: 'g',
          name: 'star fruit, sliced thin',
          note: 'Green star fruit (khế chua) provides OXALIC ACID at pKa 1.25 — sharper and more immediate than citric acid (pKa 3.13). Each bite of star fruit creates a brief, intense acid spike that cuts through the pork fat\’s coating on the palate.'
        },
        {
          amount: 100,
          unit: 'g',
          name: 'bean sprouts',
          note: 'Raw for mechanical crunch. Hypocotyl cell walls provide the auditory crunch (2-4 kHz frequency range) that completes the textural palette.'
        }
      ]
    },
    {
      title: 'Fifteen-Herb Arsenal',
      items: [
        {
          amount: 1,
          name: 'large bunch Vietnamese coriander (rau răm)',
          note: 'Sesquiterpene aldehydes (kesom aldehyde) — peppery, warm, slightly numbing. The DOMINANT HERB: its flavor persists longest in the retronasal pathway (15-20 seconds vs most herbs\’ 5-10 seconds) due to low vapor pressure.'
        },
        {
          amount: 1,
          name: 'bunch Thai basil (húng quế)',
          note: 'Methyl chavicol (estragole) 70-80% — sweet anise with slight camphor. BRIDGES the gap between peppery rau răm and floral perilla.'
        },
        {
          amount: 1,
          name: 'bunch perilla/shiso (tía tô)',
          note: 'Perillaldehyde provides a unique cinnamon-mint-citrus volatile profile found in no other herb. The purple variety\’s anthocyanins add visual contrast in the translucent roll.'
        },
        {
          amount: 1,
          name: 'bunch fish mint (diếp cá)',
          note: 'Decanal + dodecanal = distinctive fishy-citrus aroma. POLARIZING herb — essential in Đà Nẵng but optional for non-Vietnamese palates. Its volatiles complement the mắm nêm\’s fermented fish character.'
        },
        {
          amount: 1,
          name: 'bunch lemon balm (kinh giới)',
          note: 'Citral + geraniol provide clean, lemony brightness. Lower volatile intensity than lemongrass — functions as an aromatic moderator that prevents herb overload.'
        },
        {
          amount: 1,
          name: 'bunch culantro/long coriander (ngò gai/mùi tàu)',
          note: 'E-2-dodecenal concentration is 5-10× higher than regular cilantro. For cilantro lovers, this is the amplified version; for OR6A2-gene haters, this is worse. Omit if sensitive.'
        },
        {
          amount: 1,
          name: 'bunch rice paddy herb (ngò ôm)',
          note: 'Cumin-like + citrus volatile profile unique to Southeast Asia. Its subtle cumin note prevents the herb mix from being monotonously "green."'
        },
        {
          amount: 100,
          unit: 'g',
          name: 'water spinach stems (rau muống chẻ), split lengthwise',
          note: 'Split stems provide HOLLOW-TUBE CRUNCH — biting through the air-filled vascular channels creates a different mechanical sensation than solid cucumber crunch. This is structural diversity through botanical architecture.'
        }
      ]
    },
    {
      title: 'Mắm Nêm Dipping Sauce',
      items: [
        {
          amount: 100,
          unit: 'ml',
          name: 'mắm nêm (fermented anchovy sauce)',
          note: 'The UNIFYING AGENT. Central Vietnamese style, thick and pungent. Glutamic acid 800-1,200 mg/100ml + biogenic amines from 6-18 month Bacillus/Staphylococcus fermentation. This is not interchangeable with nước mắm (fish sauce) — different fermentation biology produces fundamentally different flavor chemistry.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'sugar',
          note: 'Counterbalances mắm nêm\’s salinity and provides sweetness contrast. Sucrose also enhances umami perception through cross-modal taste interaction.'
        },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'lime juice',
          note: 'Acid cuts the fermented richness and adds citral volatiles. pH reduction from ~6.5 to ~4.5 also suppresses perception of the biogenic amine\’s "funky" character.'
        },
        {
          amount: 3,
          name: 'garlic cloves, minced',
          note: 'Raw garlic allicin provides pungent heat that clears the nasal passages, enhancing retronasal herb perception in the following bite.'
        },
        {
          amount: 2,
          name: 'Thai chilies, minced',
          note: 'Capsaicin at 50,000-100,000 SHU. The TRPV1 receptor activation from chili + the allicin from garlic creates DUAL PAIN-CHANNEL STIMULATION — heat + pungency — that triggers endorphin release, the neurochemical basis of mắm nêm addiction.'
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'pineapple, finely minced',
          note: 'Fresh pineapple\’s bromelain protease breaks down residual proteins in the mắm nêm, reducing viscosity and cloudiness. More importantly, pineapple\’s ethyl 2-methylbutanoate provides a tropical-fruity top note that softens the sauce\’s aggressive fermented character.'
        }
      ]
    }
  ],

  steps: [
    {
      title: 'Boil the pork belly as a neutral canvas',
      instruction: 'Place the whole pork belly slab in a pot of cold water with scallion stalks and salt. The water should cover the meat by 5cm. Bring to a boil over high heat, then immediately reduce to a gentle simmer (80-85°C — small bubbles rising from the bottom but not breaking the surface vigorously). Skim scum every 5 minutes for the first 15 minutes. Simmer for 35-40 minutes total for a 3-4cm thick slab.',
      time: '40 min',
      tip: 'COLD-START PROTEIN MANAGEMENT: Placing pork in cold water and heating gradually allows surface albumins (water-soluble proteins) to coagulate slowly and rise as skimmable scum, producing clear cooking liquid. A hot start denatures surface proteins too rapidly — they fragment into small particles that remain suspended, creating cloudy water and a grayish film on the meat\’s surface. The gentle simmer at 80-85°C keeps the meat\’s internal temperature below the collagen-to-gelatin conversion threshold (75-80°C for pork type I collagen) for the first 20 minutes, allowing the collagen fibrils to RELAX before converting — this relaxation produces a more tender, silky gelatin network than rapid conversion at full boil, which creates a tighter, chewier gel.',
      doneness: 'Insert a bamboo skewer into the thickest part: it should slide through with consistent resistance (no hard spots). Internal temperature should reach 78-82°C. The skin should feel yielding when pressed but not mushy. Remove from water and plunge into an ice bath for 5 minutes — thermal shock contracts the gelatin network, firming the texture for clean slicing.'
    },
    {
      title: 'Slice pork belly for layered cross-section',
      instruction: 'After the ice bath, pat the pork belly dry. Using the sharpest knife available, slice against the grain into pieces 2-3mm thin — thin enough to see light through but thick enough to maintain structural integrity. Each slice should display the pentalamellar structure: skin band → white fat layer → pink meat layer → thin fat layer → pink meat layer.',
      time: '10 min',
      tip: 'PENTALAMELLAR MECHANICAL ARCHITECTURE: Each of the five layers in pork belly has distinct mechanical properties. The SKIN (collagen type I + III, partially hydrolyzed during boiling) provides chewy resistance requiring 5-8 Newton bite force. The OUTER FAT LAYER (adipose tissue, melting point 36-45°C) melts on the tongue at mouth temperature, releasing oleic acid and the dissolved volatiles it trapped during cooking. The OUTER MEAT LAYER (skeletal muscle fibers 50-80μm) provides fibrous chew and free amino acid umami. The INNER FAT LAYER (thinner, more marbled) provides a second melting-point burst. The INNER MEAT LAYER is the most tender due to its protected position during cooking. Slicing at 2-3mm ensures ALL FIVE LAYERS are present in every slice — thicker cuts lose the layered effect because the jaw cannot apply enough shear force to compress all layers simultaneously.',
      doneness: 'Each slice should hold together as a single sheet when lifted with chopsticks. If slices break apart, the pork is slightly overcooked — the gelatin network over-converted. If they feel tough and rigid, under-cooked — the collagen didn\’t convert sufficiently. Look for translucent-to-white fat layers and pale pink meat layers with no raw redness.'
    },
    {
      title: 'Prepare the mắm nêm dipping sauce',
      instruction: 'Combine mắm nêm, sugar, and lime juice in a bowl. Stir until sugar dissolves completely. Add minced garlic, minced chilies, and finely minced pineapple. Let stand for 10 minutes before serving to allow the pineapple\’s bromelain to thin the sauce and the garlic\’s allicin to develop (allicin formation requires 5-10 minutes after cell rupture for the alliinase enzyme to complete conversion).',
      time: '15 min',
      tip: 'ENZYMATIC SAUCE ENGINEERING: The pineapple does dual work. Its BROMELAIN protease (EC 3.4.22.32) cleaves peptide bonds in the residual protein aggregates suspended in the mắm nêm, reducing the sauce from thick paste to pourable consistency in 10 minutes — a natural viscosity modifier. Simultaneously, pineapple\’s ETHYL 2-METHYLBUTANOATE (the compound responsible for "pineapple smell") provides a volatile fruity top note at concentrations of 0.1-0.5 ppm that masks some of the sauce\’s more aggressive biogenic amine aromas (particularly putrescine and cadaverine, which contribute the "rotting fish" character that non-Vietnamese palates find challenging). The lime juice serves a separate chemical role: citric acid at pH 4.0-4.5 protonates the biogenic amines, converting them from volatile free bases to non-volatile ammonium salts — literally trapping the funk in the liquid phase so it delivers flavor on the tongue but not in the nose.',
      doneness: 'The sauce should be pourable but not watery — approximately the consistency of heavy cream. Taste: aggressively salty-sweet-sour with a warm garlic-chili afterburn. The fermented character should be present but not overwhelming. If too pungent, add more lime juice and pineapple; if too thin, reduce the lime juice.'
    },
    {
      title: 'Set up the rolling station',
      instruction: 'Arrange all components within arm\’s reach: a plate of warm water for rice paper dipping, the rice paper stack, the bánh ướt sheets (cut into 20cm squares), the sliced pork belly, the herb arsenal spread across a large plate, the vegetable components in separate bowls, and a clean, slightly damp flat surface (wooden board or large plate) for rolling.',
      time: '5 min',
      tip: 'RICE PAPER REHYDRATION PHYSICS: The 2-3 second dip is NOT about soaking the paper — it is about initiating CAPILLARY DIFFUSION. When the dry paper (water activity aw ≈ 0.3) contacts water, capillary forces draw water into the starch matrix through channels between the amylopectin crystallites. But the paper continues to soften for 15-20 seconds AFTER removal from water as diffusion equalizes moisture throughout the thickness. If you wait until the paper feels soft in the water, you\’ve passed the optimal hydration point — the outer surface will be at aw > 0.95 while the center just reached 0.85, and you\’ll have a floppy, tearing wrapper. Dip and IMMEDIATELY place on the work surface; it will reach perfect pliability in 15-20 seconds while you arrange the fillings.',
      doneness: 'The work surface should be clean, flat, and slightly damp (not wet — water pooling under the rice paper causes it to stick). All components should be at room temperature except the pork, which can be slightly cool. Herbs should be washed and dried — excess water on herbs accelerates the rice paper\’s degradation from within.'
    },
    {
      title: 'Build and roll the double-layer architecture',
      instruction: 'Dip one rice paper in warm water for 2-3 seconds. Place on the work surface. Immediately lay one bánh ướt sheet on top, covering the center two-thirds of the rice paper. Place a lettuce leaf on the bánh ướt. Layer 3-4 pork belly slices across the lettuce. Add a small handful each of: cucumber sticks, bean sprouts, green banana slices, star fruit slices. Top with a generous pinch of 4-5 different herbs — vary the combination with each roll. Fold the bottom of the rice paper up over the fillings, tuck in the sides, and roll tightly away from you.',
      time: '3 min per roll',
      tip: 'SIX-LAYER TEXTURAL STACK — from outside to inside, each roll contains: (1) Rice paper outer shell — smooth, slightly tacky, adhesive via amylopectin hydroxyl van der Waals bonding. (2) Bánh ướt moisture buffer — silky, slippery, dense gel that slides against the rice paper. (3) Lettuce structural wrap — flexible midrib reinforcement, vegetal crunch. (4) Pork belly pentalamellar — five sub-layers of alternating fat/meat/skin mechanical properties. (5) Vegetable crunch matrix — cucumber turgor, banana tannin, star fruit acid, sprout snap. (6) Herb volatile core — 15 species of aromatic compounds trapped in the roll\’s center where body heat releases them during eating. This architecture means a single CROSS-SECTIONAL BITE through the roll engages SIX mechanically distinct layers, each requiring different jaw mechanics (compression for pork, shear for lettuce, fracture for cucumber, none for melting fat), creating a POLYPHONIC TEXTURE EVENT that lasts 8-12 seconds per chew cycle.',
      doneness: 'The finished roll should be 12-15cm long and 4-5cm in diameter — firm enough to hold without collapsing but not so tight that the rice paper tears. The ends should be tucked cleanly. You should be able to see the green herbs and pink pork through the translucent wrapper — this visual preview is part of the eating experience.'
    },
    {
      title: 'Dip and eat: the mắm nêm integration event',
      instruction: 'Hold the roll at a 30-degree angle over the mắm nêm dish. Dip the bottom third — NOT the whole roll. Bite through the roll at the sauce line so the first bite combines the sauced end with the unsauced core. Alternate between sauced bites and clean bites to experience the contrast. Between rolls, eat a slice of green banana or star fruit to reset the palate.',
      time: '2 min per roll',
      tip: 'OSMOTIC INTEGRATION EVENT: When the roll contacts mắm nêm (20-25% NaCl), the salt creates an OSMOTIC GRADIENT across the rice paper surface (internal aw ≈ 0.95 → sauce aw ≈ 0.75). Water migrates outward from every component — pork releases intramyofibrillar water, herbs release vacuolar sap, vegetables lose turgor pressure — creating a momentary SALINITY EQUILIBRATION where all flavors become isotonic with each other. This 5-10 second window is when the roll tastes most unified: the pork\’s glycine sweetness, the herbs\’ volatiles (carried outward by the water flux), the mắm nêm\’s glutamate, and the pineapple\’s fruity esters all reach the tongue simultaneously at matched concentrations. Dipping the whole roll destroys this gradient by over-salting; dipping only a third preserves the SAUCED-TO-UNSAUCED CONTRAST that makes each bite interesting. The green banana palate cleanser works through tannin-mediated ASTRINGENT CONTRACTION of the oral mucosa — proanthocyanidins bind to salivary proline-rich proteins, temporarily de-lubricating the palate and re-sensitizing mechanoreceptors for the next roll\’s textural symphony.',
      doneness: 'The eating experience is complete when you\’ve consumed enough rolls (typically 4-6 per person) that the cumulative mắm nêm exposure has progressively sensitized your gustatory system — the last roll tastes MORE intense than the first despite being identical. This is the biogenic amine effect: tyramine and histamine accumulating in the oral mucosa over 20-30 minutes, progressively lowering taste thresholds. If the rolls become too intense, eat a plain piece of star fruit — its oxalic acid chelates the biogenic amines, resetting the amplification.'
    }
  ],

  proTips: [
    {
      title: 'The Double-Wrapper Advantage',
      description: 'The bánh ướt inner layer extends roll structural life from 3-5 minutes to 8-12 minutes. This matters because Đà Nẵng\’s Bánh Tráng Cuốn is a SOCIAL FOOD — rolls are made leisurely during conversation, not assembled and eaten in a rush. The double-wrapper gives you time to talk, drink beer, argue about which herb combination is best, and still pick up your roll without it disintegrating in your hand. If the bánh ướt sheets are unavailable, use two layers of rice paper instead — not as effective (both layers have the same pore structure) but better than one.'
    },
    {
      title: 'Herb Rotation Strategy',
      description: 'Don\’t put the same herbs in every roll. Đà Nẵng vendors encourage COMBINATORIAL EXPLORATION: roll #1 might emphasize rau răm + Thai basil (peppery-anise). Roll #2 swaps to perilla + fish mint (cinnamon-fishy). Roll #3 goes all-citrus with lemon balm + culantro + rice paddy herb. Each combination activates different olfactory receptor clusters, preventing the ADAPTATION FATIGUE that occurs when the same volatile compounds saturate the olfactory epithelium. By the 4th roll, receptor populations have recovered from roll #1\’s volatiles, making them available for re-stimulation in roll #5.'
    },
    {
      title: 'European Adaptation: German Herb Substitutes',
      description: 'For the 8 herbs unavailable in standard German supermarkets: Thai basil → Mediterranean basil + a pinch of star anise; perilla → red shiso from Japanese grocery; fish mint → omit or substitute a few drops of fish sauce on fresh mint; lemon balm → Zitronenmelisse (identical plant, readily available in Germany); culantro → double the cilantro; rice paddy herb → combination of cumin seed + lime zest. Vietnamese coriander and water spinach require an Asian market (available in most German cities at Asia Shops). The mắm nêm is non-negotiable — find it at Vietnamese stores (Dong Xuan Center in Berlin, Vinh Loi in Stuttgart, or online).'
    },
    {
      title: 'Pork Belly Ice Bath: The Gelatin Lock',
      description: 'The 5-minute ice bath after boiling isn\’t for food safety — it\’s for GELATIN NETWORK ARCHITECTURE. Rapid cooling forces the dissolved gelatin to re-set in a finer crystalline network (smaller junction zones, more cross-links per unit volume) than slow cooling. This produces a firmer, more sliceable texture that holds its pentalamellar structure during thin cutting. Without the ice bath, the gelatin re-sets into larger, fewer junction zones during slow cooling — the result is a softer belly that smears rather than slices cleanly.'
    },
    {
      title: 'Mắm Nêm Fear Factor',
      description: 'For first-timers intimidated by fermented anchovy sauce: start with the diluted version (extra lime juice, extra sugar, extra pineapple) and use only a thin coating on the roll. The biogenic amines work below the taste threshold initially — you\’ll perceive enhanced umami without the overt fermented character. As your palate acclimates over 3-4 rolls, gradually increase the concentration. Most Western converts become mắm nêm advocates within one meal, because once you\’ve experienced the flavor-amplification effect, plain soy sauce or sweet chili dipping sauce feels flat by comparison.'
    }
  ],

  nutrition: {
    calories: 490,
    protein: '28g',
    carbs: '42g',
    fat: '24g',
    fiber: '5g'
  },

  conclusion: `Bánh Tráng Cuốn Thịt Heo Đà Nẵng is the most architecturally complex hand-held food in Vietnamese cuisine — a cylindrical construction that packs six mechanically distinct textural layers, a fifteen-herb volatile orchestra, and a double-starch moisture management system into something you assemble with your bare hands on a sidewalk plastic table. The double-wrapper innovation isn\’t sophistication for its own sake — it is an engineering response to the moisture migration problem that makes single-layer rolls self-destruct within minutes. The neutral pork canvas isn\’t laziness — it is deliberate acoustic design that gives every other component room to be heard. The mắm nêm isn\’t condiment — it is a biochemical integrator that uses osmotic equilibration to bind seventeen ingredients into one unified flavor moment. And the fifteen herbs aren\’t overkill — they are a COMBINATORIAL LIBRARY that ensures no two rolls taste identical, preventing the olfactory adaptation that makes repetitive eating boring. When a Đà Nẵng local sits down to a plate of Bánh Tráng Cuốn, they are not eating a wrap. They are conducting a sensory experiment with hundreds of variables — herb selection, rolling tightness, dip depth, bite angle — that produces a unique result every time. After six rolls and thirty minutes of mắm nêm-mediated flavor amplification, the last bite hits harder than the first. That escalating intensity, rather than the diminishing returns of most eating experiences, is what makes this dish addictive, communal, and fundamentally Đà Nẵng.`
};

export default function BanhTrangCuonDaNangPage() {
  return <RecipeLayout recipe={recipe} />;
}
