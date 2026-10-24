'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-trang-cuon-thit-heo',
  title: `Bánh Tráng Cuốn Thịt Heo — Rice Paper Rolls with Boiled Pork & Herbs`,
  subtitle: 'The roll where NOTHING is cooked to impress — boiled pork belly (the least glamorous cooking method applied to the richest cut), raw herbs, and dry rice paper — yet the assembly creates a FLAVOR COMPRESSION system: 8-12 distinct ingredients rolled into a 3cm-diameter cylinder that delivers ALL flavors simultaneously to the tongue in a single cross-sectional bite, a feat no plated arrangement can achieve.',
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '45 mins',
  rating: 4.7,
  baseServings: 4,
  heroImage: '/images/recipes/banh-trang-cuon-thit-heo.jpg',
  intro: `Bánh tráng cuốn thịt heo is Quảng Nam\\\'s answer to a fundamental question in cuisine: how do you deliver MAXIMUM FLAVOR COMPLEXITY with MINIMUM COOKING TECHNIQUE? The answer is to stop relying on the stove and start relying on ARCHITECTURE — the physical arrangement of ingredients in space, using the rice paper roll as a structural container that forces disparate flavors into simultaneous contact with the palate.

The concept is radical in its simplicity. The pork belly is BOILED — not braised, not roasted, not grilled, not fried. Boiling is the lowest-information cooking method: the meat is submerged in water at 100°C until done. There is no Maillard reaction (which requires surface temperatures above 140°C, impossible in water), no caramelization (which requires temperatures above 160°C), no smoke flavor (which requires combustion products from wood or charcoal). The boiled pork emerges PALE, MILD, and TEXTURALLY NEUTRAL — its flavor is pure PORK: the clean, sweet taste of myosin and actin proteins, the richness of the belly\\\'s intramuscular fat (which constitutes 25-35% of pork belly\\\'s mass), and the silky mouthfeel of the partially dissolved collagen in the belly\\\'s connective tissue layers.

This neutrality is not a flaw — it is a DESIGN REQUIREMENT. The boiled pork functions as a BLANK CANVAS onto which the fresh herbs, the dipping sauce, and the rice paper\\\'s starch contribute their own distinct notes. If the pork were roasted (with its aggressive Maillard crust), it would DOMINATE the herb flavors — the hundreds of Maillard reaction products would overwhelm the delicate essential oils of the rau răm, húng quế, and kinh giới. If the pork were braised (in soy sauce and spices), its sauce-saturated surface would mask the dipping sauce\\\'s bright lime-chili-fish-sauce profile. Boiling is the method that produces the most SUBMISSIVE protein — a protein that accepts whatever flavor companions are placed beside it without fighting for dominance.

The HERB BUNDLE is where the dish\\\'s real complexity lives. A proper Quảng Nam bánh tráng cuốn includes a minimum of 5-7 fresh herbs and greens, each contributing a distinct volatile compound profile:

1. RẦU RĂM (Vietnamese coriander, Persicaria odorata) — dodecanal (soapy-citrus) + decanal (waxy-orange) + sesquiterpene lactones (bitter, salivation-inducing). The signature herb of Central Vietnamese cuisine.

2. HÚNG QUẾ (Thai basil, Ocimum basilicum var. thyrsiflora) — methyl chavicol/estragole (sweet anise-licorice, 70-80% of essential oil) + linalool (floral-lavender, 10-15%). The dominant aroma carrier.

3. KINH GIỚI (Vietnamese balm, Elsholtzia ciliata) — elsholtzia ketone (minty-camphoraceous, unique to this genus) + naginata ketone (warm, spicy). This herb has no direct equivalent in Western cooking and contributes a flavor that many non-Vietnamese diners describe as "strange" or "medicinal" on first encounter, but that Central Vietnamese consider ESSENTIAL — without it, the roll tastes incomplete.

4. TÍA TÔ (perilla/shiso, Perilla frutescens) — perillaldehyde (warm, citrusy, unique — this compound is structurally related to cinnamaldehyde but with a completely different aroma profile) + limonene (citrus). The Japanese shiso leaf\\\'s Vietnamese cousin.

5. RAU DIẾP CÁ (fish mint, Houttuynia cordata) — decanal + 2-undecanone (herbal-spicy) + lauric aldehyde. The name "fish herb" comes from its strong, divisive aroma — it has a fishy, metallic note that is genuinely off-putting to many non-Vietnamese palates but is considered indispensable by Quảng Nam natives.

6. XÀ LÁCH (lettuce) — mild, watery, providing a TEXTURAL function (crisp crunch) more than a flavor function.

7. GIÁ (bean sprouts) — fresh, vegetal, with a HYDRAULIC CRUNCH (the sprout\\\'s cells are turgid — inflated with water at 0.5-1.0 MPa turgor pressure — and when bitten, the cells rupture in sequence, releasing their water in a controlled burst that the tongue perceives as "juicy crunch").

When these 7 components are ROLLED together in the rice paper cylinder, their essential oils occupy the same confined airspace inside the roll. As the diner bites through the roll, all 7 herbs release their volatile compounds simultaneously — the bite ruptures the herb leaves\\\'s cells, liberating the essential oils from the GLANDULAR TRICHOMES (specialized oil-storage cells on the leaf surface) and from the leaf\\\'s mesophyll cells (the photosynthetic cells in the leaf\\\'s interior that contain secondary metabolites in their vacuoles). These liberated volatiles mix in the oral cavity and reach the olfactory epithelium via RETRONASAL OLFACTION (the air pathway from the back of the mouth up into the nasal cavity), where they\\\'re perceived as a UNIFIED AROMA COMPLEX — not 7 individual herbs, but a single, integrated herbal identity that is greater than the sum of its parts.

This EMERGENT AROMA is the defining sensory experience of bánh tráng cuốn thịt heo — it cannot be achieved by eating the herbs separately or by mixing them in a salad (where they\\\'re not compressed into a small cross-section and their volatile release is diffuse rather than concentrated). The rice paper roll\\\'s cylindrical geometry FOCUSES the volatile release into a narrow timeframe (the 2-3 seconds of a single bite), creating an aroma PEAK that a salad\\\'s scattered, low-intensity release cannot match.

The RICE PAPER itself is the unsung structural hero. When the dried bánh tráng is briefly dipped in warm water, its surface starch gelatinizes into a thin, tacky gel that functions as a PRESSURE-SENSITIVE ADHESIVE — the wet paper sticks to itself and to the filling ingredients through van der Waals forces between the gelatinized starch\\\'s hydroxyl groups and the surfaces it contacts. This adhesion is what holds the roll together without tying, pinning, or any mechanical fastener. The roll\\\'s structural integrity depends entirely on the CIRCUMFERENTIAL TENSION of the wrapped paper — the paper is wrapped tightly enough that the filling is under slight compression, and the paper\\\'s elasticity (gelatinized starch can stretch approximately 50-100% before tearing) maintains this compression as the roll is handled and bitten.

In Quảng Nam, this dish is typically served at family gatherings and celebrations — it\\\'s a COMMUNAL dish where the pork, herbs, and rice paper are placed in the center of the table, and each person rolls their own. The rolling is both practical (each person controls their herb selection and quantity) and social (the shared act of rolling creates a relaxed, conversational atmosphere that a pre-plated dish cannot).`,
  ingredientSections: [
    {
      title: 'Boiled Pork Belly',
      items: [
        { amount: 800, unit: 'g', name: 'skin-on pork belly, in one piece', note: 'The skin is essential — it provides a layer of COLLAGEN that, once boiled and cooled, sets into a GELATIN FILM between the skin and the fat layer. This gelatin film has a slippery, yielding texture that contrasts with the firm meat and the soft fat, creating a three-layer textural experience (firm meat → soft fat → slippery gelatin-skin) within a single slice. In Germany, pork belly (Schweinebauch) with skin is available at most butchers — specify "mit Schwarte" (with rind).' },
        { amount: 2, name: 'scallions, whole' },
        { amount: 1, name: 'thumb of ginger, smashed' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tsp', name: 'whole black peppercorns' },
      ]
    },
    {
      title: 'Herb Platter',
      items: [
        { amount: 1, name: 'bunch of rau răm (Vietnamese coriander)' },
        { amount: 1, name: 'bunch of húng quế (Thai basil)' },
        { amount: 1, name: 'bunch of kinh giới (Vietnamese balm) — if available', note: 'Often found at well-stocked Asian supermarkets in Germany. If unavailable, substitute with a mix of mint + a few leaves of shiso. The substitution won\\\'t replicate kinh giới\\\'s unique elsholtzia ketone aroma, but it provides a similar minty-herbaceous note.' },
        { amount: 1, name: 'bunch of tía tô (perilla/shiso)' },
        { amount: 1, name: 'head of lettuce, leaves separated' },
        { amount: 200, unit: 'g', name: 'bean sprouts' },
        { amount: 1, name: 'cucumber, sliced into thin batons' },
        { amount: 1, name: 'green banana (chuối xanh), thinly sliced (optional)', note: 'Green banana provides a starchy, mildly astringent crunch. The astringency comes from TANNINS (condensed proanthocyanidins) that bind to salivary proteins, reducing saliva\\\'s lubricity and creating a "dry" mouthfeel. This tannin-induced dryness CONTRASTS with the pork belly\\\'s unctuous fat, making each component more perceptible by juxtaposition.' },
        { amount: 1, name: 'star fruit (khế), thinly sliced (optional)', note: 'Star fruit adds a tart, slightly sweet crunch. Its oxalic acid (0.5-1.0% by weight) provides a SHARPER acidity than lime\\\'s citric acid — oxalic acid\\\'s first pKa is 1.25 (vs citric\\\'s 3.13), meaning it\\\'s a stronger acid that the tongue perceives as more "cutting" and less "fruity."' },
      ]
    },
    {
      title: 'Rice Paper & Dipping Sauce',
      items: [
        { amount: 20, name: 'round dried rice papers (bánh tráng), 22cm diameter' },
        { amount: 1, name: 'bowl of warm water for dipping rice papers' },
        { amount: 100, unit: 'g', name: 'fermented soybean paste dipping sauce (tương)', note: 'This is the DEFINITIVE dipping sauce for Quảng Nam\\\'s bánh tráng cuốn — NOT nước mắm pha (diluted fish sauce). Tương is a fermented paste made from soybeans, rice, and salt (similar to Japanese miso but thinner in consistency). In Quảng Nam, the most prized variety is tương Cự Đà or tương Hội An — a deeply savory, slightly sweet, smooth paste that is thinned with a bit of water and mixed with minced garlic, chili, and a squeeze of lime. The tương\\\'s fermentation-derived glutamate (200-500 mg/100g) provides a ROUNDED UMAMI that fish sauce\\\'s sharper, more pungent umami cannot match.' },
        { amount: 2, name: 'garlic cloves, minced (for tương sauce)' },
        { amount: 1, name: 'chili, sliced (for tương sauce)' },
        { amount: 1, unit: 'tsp', name: 'sugar (for tương sauce)' },
        { amount: 2, unit: 'tbsp', name: 'water (to thin tương)' },
        { amount: 1, unit: 'tbsp', name: 'lime juice (for tương sauce)' },
      ]
    }
  ],
  steps: [
    {
      title: 'Boil the pork belly — the deliberate simplicity',
      description: `Place the pork belly skin-side down in a pot large enough to hold it flat. Add the scallions, smashed ginger, salt, and peppercorns. Cover with cold water — approximately 2 liters, enough to submerge the belly by 3-4cm.

Bring to a boil over medium-high heat. As with the chicken in cơm gà Hội An, starting with cold water ensures UNIFORM heating — the temperature gradient between surface and center stays small throughout the process. As the water heats, proteins leach from the pork\\\'s surface and form a gray SCUM. Skim this scum — it\\\'s coagulated sarcoplasmic proteins (myoglobin, hemoglobin, albumin) that would cloud the cooking water and deposit a grayish film on the pork\\\'s surface.

Once boiling, reduce to a GENTLE SIMMER (85-90°C). The distinction between boiling (100°C, vigorous) and simmering (85-90°C, gentle) is critical for pork belly. At 100°C, the belly\\\'s intramuscular collagen converts to gelatin rapidly (complete conversion in 30-40 minutes), but the sustained high temperature also causes the MUSCLE FIBERS to contract aggressively — myosin denatures at 50°C and contracts, and above 70°C the remaining contractile proteins (actin, tropomyosin) also denature and shorten, squeezing water out of the meat. The result is meat that is gelatin-tender but DRY — the collagen has converted to gelatin, but the muscle fibers have expelled most of their moisture. At 85-90°C, the collagen conversion is slower (50-60 minutes for similar conversion), but the muscle fiber contraction is LESS SEVERE — the lower temperature reduces the rate and extent of protein denaturation, preserving more intracellular water. The result: meat that is both gelatin-tender AND juicy.

Simmer for 50-60 minutes. Check doneness: a chopstick should pierce the meat easily but encounter a slight resistance in the center (if it slides through with zero resistance, the meat is overdone and will crumble when sliced rather than holding together in clean slices).

Remove the pork and transfer to an ICE BATH for 10 minutes. The ice bath serves the same gel-trapping function as in cơm gà — the gelatin within the meat transitions from sol to gel state, locking the juices inside the tissue. Additionally, the rapid cooling causes the fat layers in the belly to SOLIDIFY partially (pork fat solidifies below approximately 36°C), which makes the belly easier to slice thinly — soft, warm fat deforms under the knife, producing ragged, uneven slices, while cooled, semi-solid fat cuts cleanly.

After the ice bath, slice the belly into thin pieces (approximately 3-4mm thick), cutting ACROSS the layers (so each slice shows the striped cross-section of skin → fat → meat → fat → meat). This cross-sectional slicing ensures that every roll contains ALL THREE TEXTURAL LAYERS in each bite.`,
      tip: `The pork belly\\\'s LAYERED STRUCTURE is a consequence of the animal\\\'s anatomy. The belly (abdominal wall) is composed of alternating layers of MUSCLE and FAT, arranged like geological strata: (from outside in) skin (dermis, 2-3mm) → subcutaneous fat (5-10mm) → external oblique muscle (5-8mm) → interfascial fat (3-5mm) → internal oblique muscle (5-8mm) → interfascial fat (2-3mm) → transversus abdominis muscle (3-5mm) → peritoneal fat (variable). This stratification exists because the abdominal wall must perform two opposing mechanical functions: it must be FLEXIBLE (to accommodate the expansion and contraction of the abdominal cavity during breathing and digestion) and STRONG (to support the weight of the internal organs). The alternating muscle-fat layers achieve both: the muscles provide tensile strength, while the fat layers act as LUBRICATING INTERFACES that allow the muscle layers to slide past each other during flexion. In the cooked pork belly, these fat-lubricated interfaces create the sensation of LAYERS SEPARATING in the mouth — a controlled delamination that is uniquely satisfying and that no other cut of pork can replicate.`
    },
    {
      title: 'Prepare the tương dipping sauce',
      description: `In a small bowl, combine the fermented soybean paste (tương) with 2 tablespoons of water — stir until smooth and pourable (the consistency should be like a thin gravy, not a thick paste). Add the minced garlic, sliced chili, sugar, and lime juice. Stir to combine.

The tương\\\'s fermentation-derived compounds provide a DIFFERENT UMAMI PROFILE than fish sauce. Fish sauce\\\'s umami comes primarily from FREE GLUTAMATE (produced by the enzymatic hydrolysis of fish protein during fermentation — concentrations of 800-1,200 mg/100g) and from HISTIDINE-DERIVED compounds (histamine and its derivatives, which contribute a fishy, pungent character that some palates find overwhelming). Tương\\\'s umami comes from SOY PROTEIN HYDROLYSIS by Aspergillus oryzae (the same mold used in miso, soy sauce, and sake production). The soy protein is broken down into free amino acids (glutamate 200-500 mg/100g, plus significant amounts of ASPARTATE, which provides a SYNERGISTIC UMAMI effect — glutamate + aspartate together produce a perceived umami intensity 8-10× greater than either amino acid alone, through cooperative binding to the T1R1/T1R3 umami receptor).

The tương also contains MELANOIDINS — high-molecular-weight brown pigments produced by the Maillard reaction between the soy\\\'s amino acids and the rice\\\'s reducing sugars during fermentation. These melanoidins contribute the paste\\\'s dark brown color and its characteristic ROASTED, MALTY flavor — a flavor dimension that fish sauce lacks entirely (fish sauce\\\'s Maillard products are minimal because the fermentation occurs at low temperatures where Maillard kinetics are slow).

Taste the finished sauce: it should be SAVORY (from the tương\\\'s glutamate and aspartate), SWEET (from the sugar and the tương\\\'s residual sugars), SOUR (from the lime juice), GARLICKY (from the raw garlic\\\'s allicin), and HOT (from the chili\\\'s capsaicin). If any dimension is missing or unbalanced, adjust. The sauce should taste COMPLETE by itself — unlike nước mắm pha, which often tastes too sharp or too salty without food, tương sauce is mellow enough to sip on its own.`,
      tip: `Tương is Quảng Nam\\\'s MOST CULTURALLY SPECIFIC condiment — more so than fish sauce (which is used nationwide) or chili sauce (which varies regionally but is not exclusive to any province). The preparation of tương was traditionally a household craft, with each family maintaining its own Aspergillus oryzae KOJI STARTER — a wooden tray of rice inoculated with the mold, kept alive by periodic feeding with fresh cooked rice and maintained in a warm, humid corner of the kitchen. The quality of a family\\\'s tương was a point of pride, and the koji starter was sometimes passed down through generations (the same biological culture, maintained continuously for decades). This practice has largely disappeared in modern Vietnam (commercial tương is now widely available), but in some rural Quảng Nam households, the family koji is still maintained — a living link to the pre-industrial fermentation tradition.`
    },
    {
      title: 'Set up the rolling station and ROLL',
      description: `Arrange the communal table:
- A plate of the sliced pork belly (fanned out so the layered cross-section is visible)
- The herb platter (all herbs washed, dried, and arranged by type)
- Bean sprouts, cucumber batons, and optional green banana and star fruit slices
- A stack of dried rice papers
- A shallow dish of WARM water (30-40°C — not hot, which would over-soften the paper and make it tear; not cold, which would leave the paper too stiff to roll)
- The bowl of tương dipping sauce

ROLLING TECHNIQUE:

1. DIP the rice paper: Hold a dried rice paper by the edge and submerge it in the warm water for 2-3 seconds — no more. The paper should still feel SLIGHTLY STIFF when you pull it out (it will continue to soften over the next 15-20 seconds as the absorbed water migrates through the starch matrix by capillary diffusion). If you wait until the paper is fully soft in the water, it will be too fragile to roll — it\\\'ll tear as soon as you place filling on it.

2. LAY on a flat plate or cutting board. Within 10-15 seconds, the paper will become fully pliable and slightly tacky.

3. BUILD the filling: Place a lettuce leaf on the lower third of the paper (the lettuce acts as a MOISTURE BARRIER between the wet herbs and the rice paper, preventing the paper from becoming too soggy at the filling\\\'s contact point). On the lettuce, place 2-3 slices of pork belly, a few bean sprouts, cucumber batons, and a generous pinch of MIXED HERBS (this is the critical step — use at least 3-4 different herbs per roll, not just one type).

4. ROLL: Fold the bottom edge of the paper up and over the filling. Tuck the edge under the filling tightly (the tighter the initial tuck, the firmer the finished roll — a loose tuck produces a floppy roll that falls apart when dipped). Fold in the left and right sides. Roll upward, keeping tension on the paper, until the roll is sealed. The paper\\\'s tacky surface adhesion holds the seam closed without any fastener.

5. DIP AND EAT: Dip one end of the roll into the tương sauce — let the sauce coat approximately 2cm of the roll\\\'s end. Bite through the dipped end. The cross-section of the roll should reveal concentric layers: rice paper (outer) → lettuce → herbs → pork → herbs → bean sprouts → rice paper (inner). Each bite cuts through ALL layers simultaneously, delivering every component to the tongue in a single compressed moment.

The roll should be eaten IMMEDIATELY after rolling — within 60-90 seconds, the rice paper begins to dry at the exposed (undipped) end, becoming stiff and papery rather than soft and pliant. The dipped end stays soft (the tương sauce\\\'s moisture keeps the paper hydrated), creating a textural gradient from soft-dipped to stiff-dry along the roll\\\'s length.`,
      tip: `The rice paper roll\\\'s cylindrical geometry creates a phenomenon that food scientists call FLAVOR COMPRESSION — the simultaneous delivery of all ingredients to the tongue in a single cross-sectional bite. In a plated dish, the diner controls which ingredients enter the mouth in each bite (they might eat pork alone, then herbs alone, then rice alone), and the flavor experience is SEQUENTIAL — each component is perceived individually, one after another. In a rolled dish, the diner has NO CONTROL over the ingredient distribution per bite — the roll forces ALL components into every cross-section, and the teeth\\\'s bite cuts through all of them simultaneously. The result is a SIMULTANEOUS flavor perception: the tongue\\\'s 5 taste modalities (sweet, sour, salty, bitter, umami) are all activated at the same instant, and the retronasal olfactory system receives ALL 7+ herb volatile profiles in a single inhalation. This simultaneity is what makes the roll\\\'s flavor experience feel MORE COMPLEX than the sum of its ingredients — the brain\\\'s flavor integration system combines simultaneous inputs into a unified percept that is qualitatively different from sequential inputs of the same components.`
    }
  ],
  tags: ['Rice Paper Rolls', 'Pork Belly', 'Herbs', 'Quảng Nam', 'Communal'],
  description: `Boiled pork belly = deliberately neutral canvas for 7-herb volatile compression in cylindrical roll geometry. Pork belly layered anatomy: alternating muscle-fat strata with lubricating interfascial delamination. Tương fermented soybean paste: glutamate + aspartate synergistic umami (8-10× cooperative binding at T1R1/T1R3). Rice paper pressure-sensitive adhesion via amylopectin hydroxyl van der Waals forces. Flavor compression: all ingredients in every cross-sectional bite = simultaneous rather than sequential perception.`
};

export default function BanhTrangCuonThitHeoPage() {
  return <RecipeLayout recipe={recipe} />;
}
