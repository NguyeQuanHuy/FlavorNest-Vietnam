'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'me-lao-soc-trang',
  title: `Mè Láo Sóc Trăng (Black Sesame Candy — Vĩnh Châu's Teochew Confection)`,
  subtitle: `Black sesame seeds — toasted to a smoky, nutty intensity — bound in mạch nha (malt syrup) cooked to hard-ball stage, pulled and stretched like taffy until the dark mass lightens and aerates, then pressed flat, cooled and cut into small, jet-black, crunchy-chewy pieces that taste of toasted sesame and malt and nothing else. The Teochew candy from Vĩnh Châu district that is Sóc Trăng's second famous confection, the kẹo cu đơ's darker, chewier, more ancient cousin.`,
  category: 'DESSERT',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 20,
  heroImage: '/images/recipes/me-lao-soc-trang.jpg',
  intro: `Mè láo — from mè (sesame) and láo (a Teochew-derived word meaning "pulled" or "stretched," cognate with the Teochew 擂 léi, "to grind/pull") — is the Teochew Chinese community's sesame candy, made in Vĩnh Châu district (Sóc Trăng's most Chinese-populated district, where the Teochew families who migrated in the 18th-19th century settled alongside the Khmer fishing villages and the Vietnamese rice-farming households).

The candy is structurally a PULLED CANDY — the same confectionery technique that produces the American saltwater taffy, the British Edinburgh rock, the Chinese dragon's beard candy and the Turkish macun: a cooked sugar syrup, cooled to workable temperature, then PULLED — stretched, folded and re-stretched repeatedly — until the mass incorporates AIR (the pulling creates thin, sheet-like layers of sugar with air trapped between them) and the texture transforms from DENSE-AND-GLASSY (the un-pulled syrup's amorphous-sugar state) to LIGHT-AND-LAYERED (the pulled candy's aerated, multi-layered, taffy-like state).

The pulling changes the candy at the molecular level: the un-pulled syrup is a CONTINUOUS, AMORPHOUS SUGAR GLASS (the same glass the kẹo cu đơ documented — transparent, brittle, shattering). The pulling DISRUPTS the glass: the mechanical shearing breaks the amorphous matrix into thin SHEETS, and the air incorporated between the sheets prevents the sheets from re-fusing. The pulled candy is therefore a COMPOSITE MATERIAL: sugar-glass sheets (thin, rigid) separated by air layers (thin, compressible), and the composite's mechanical properties are DIFFERENT from either component alone: the sugar sheets are brittle (they shatter), but the air layers are elastic (they compress and spring back), and the composite is CHEWY — it yields under the tooth's pressure (the air layers compress), then resists (the sugar sheets bear the load), then yields again (the next air layer compresses), producing a CYCLIC YIELD-RESIST-YIELD that the jaw perceives as "chewiness." The kẹo cu đơ is a SINGLE-PHASE candy (one continuous sugar glass = shattering). The mè láo is a TWO-PHASE candy (sugar-glass sheets + air layers = chewy). Same sugar, different structure, different mouthfeel.

The BLACK SESAME (mè đen, Sesamum indicum var. nigrum) is the candy's flavour and its colour: the seeds are toasted until smoking-fragrant, then folded into the pulled candy during the final stretches. The black sesame's flavour profile is: NUTTIER than white sesame (the black variety's seed coat contains higher concentrations of sesamol, sesamin and sesamolin — the lignan compounds responsible for sesame's characteristic warm, nutty, slightly bitter flavour), MORE AROMATIC (the toasting's Maillard products are more abundant in the black seed's protein-and-sugar-richer coat), and VISUALLY DRAMATIC (the jet-black seeds in the pulled, aerated, now-pale-amber malt-sugar matrix produce a candy that is: dark, speckled, dramatic, and immediately identifiable as mè láo from across the market).

The mạch nha (malt syrup) — the same maltose-based syrup the kẹo cu đơ used — is the candy's sugar. The maltose's lower sweetness (40% of sucrose's) means the mè láo is, like the kẹo cu đơ, a MILD candy: the sesame's nuttiness and the malt's grain-warmth are the PRIMARY flavours, and the sweetness is the SUPPORT, not the star. A mè láo made with refined sugar would be sweeter but LESS COMPLEX — the maltose's malty, grain-warm, toffee-adjacent background is the flavour that makes the candy feel TRADITIONAL rather than MODERN, and the tradition is the Teochew grandmother's kitchen, where the mạch nha jar sat on the shelf beside the lard crock and the sesame oil bottle, and the three — malt, fat, sesame — were the Teochew confectioner's palette.`,
  ingredientSections: [
    {
      title: 'The sesame',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'black sesame seeds',
          note: `BLACK — not white. The black variety's seed coat is intact (it has not been hulled, unlike the white sesame sold for baking), and the coat's lignan compounds (sesamol, sesamin) and its melanin pigment are the flavour and the colour the candy depends on. Toast before use.`,
        },
      ],
    },
    {
      title: 'The malt syrup',
      items: [
        { amount: 400, unit: 'g', name: 'mạch nha (malt syrup / maltose syrup)', note: `The same amber, viscous, grain-derived, 40%-sweetness syrup the kẹo cu đơ documented. If unavailable: corn syrup or golden syrup.` },
        { amount: 50, unit: 'g', name: 'sugar (supplementary)' },
        { amount: 1, unit: 'tbsp', name: 'water' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil or sesame oil', note: `Sesame oil adds a SECOND sesame-flavour layer — the oil's sesamol echoes the seeds' sesamol, and the double-sesame (oil + seeds) is more aromatic than either alone.` },
      ],
    },
    {
      title: 'For pulling',
      items: [
        { amount: 1, name: 'pair of oiled hands (or oiled gloves — the hot candy burns bare skin at 90°C)' },
        { amount: 1, name: 'oiled hook or oiled wooden dowel (optional — the hook makes pulling easier)' },
        { amount: 1, name: 'oiled flat surface (marble, steel or oiled parchment) for pressing and cutting' },
      ],
    },
  ],
  steps: [
    {
      title: 'Toast the sesame, cook the malt to hard-ball — the colour and the structure',
      description: `TOAST: spread the black sesame seeds in a dry pan over medium heat. Stir constantly 3-4 minutes — the seeds begin to POP (the moisture inside the seed coat flash-evaporates, the expanding steam cracks the seed open with an audible pop, and the released steam carries the seed's volatile sesamol and sesamin into the air — the kitchen fills with the warm, nutty, slightly smoky, unmistakably sesame aroma). Continue until: the popping slows, the seeds are fragrant (the Maillard between the seed coat's protein and sugars has produced pyrazines and furanones — the same toasted-nut compound class the thính's dry-roasted rice produced), and a seed crushed between the fingers breaks easily (the toasting has dehydrated the seed's interior and made the coat brittle). Set aside.

COOK THE MALT: combine mạch nha, sugar, water and oil in a heavy pot. Heat over medium, stirring until the sugar dissolves. Increase heat. Cook WITHOUT stirring to HARD-BALL STAGE (121-130°C) — NOT hard-crack (149-154°C, which is the kẹo cu đơ's target). The hard-ball stage is LOWER than hard-crack, and the difference is the pulling's requirement: at hard-ball, the cooled syrup is PLIABLE (it can be stretched, pulled and folded without shattering — the sugar molecules are close to their glass transition but have not crossed it, and the mass is in a RUBBERY, plastic, deformable state). At hard-crack, the cooled syrup is RIGID (it cannot be pulled — it shatters, the sugar-glass the kẹo cu đơ exploited).

Hard-ball test (no thermometer): drop a small amount of syrup into cold water — at hard-ball the syrup forms a FIRM BALL that holds its shape but can be FLATTENED between the fingers with pressure. At soft-ball (113-116°C) the ball flattens on its own. At hard-crack (149°C+) the syrup forms rigid threads that snap. The mè láo needs the FIRM-BUT-DEFORMABLE ball — the zone between soft and rigid.

Off heat. Cool 2-3 minutes until the syrup is handleable (roughly 85-95°C — still very hot, hot enough to burn, but cool enough that oiled hands can touch it for 2-3 seconds at a time).`,
      tip: `The HARD-BALL vs HARD-CRACK distinction is the structural divergence between the mè láo and the kẹo cu đơ — two candies from the same province, using the same mạch nha, cooked to DIFFERENT temperatures, producing DIFFERENT sugar states: hard-ball (121-130°C) = the sugar is ABOVE its glass transition but still contains enough residual water (3-5%) to remain PLASTIC — the molecules can slide past each other when stretched (the residual water acts as a PLASTICISER, the same role the coconut milk's fat played in the xôi phồng's crust). Hard-crack (149-154°C) = the sugar has lost nearly ALL its water (<1%) and is BELOW its glass transition upon cooling — the molecules are locked in an amorphous solid that cannot deform without fracturing. Same mạch nha, different water content, different temperature endpoint, different candy: chewy (mè láo) vs shattering (kẹo cu đơ).`,
    },
    {
      title: 'Pull-stretch-fold, 10-15 minutes — the air enters, the colour lightens',
      description: `PULL: with oiled hands (or wearing oiled heatproof gloves), gather the warm syrup mass from the pot. Stretch it — pull the mass to arm's length (roughly 60-70 cm), fold it in half, pull again. Repeat. The pulling is RHYTHMIC: stretch-fold-stretch-fold, 2-3 seconds per cycle, continuously, for 10-15 minutes.

THE TRANSFORMATION:

PULLS 1-10 (minute 0-2): the mass is DARK AMBER, dense, heavy, and sticky. Each pull stretches it to a thin, translucent sheet, and each fold traps a thin layer of AIR between the folded surfaces. The mass is getting lighter (less dense) with each fold — the trapped air layers reduce the overall density.

PULLS 10-30 (minute 2-5): the mass LIGHTENS in colour — from dark amber to pale amber-gold. The lightening is OPTICAL: the air layers between the sugar sheets scatter light (the same Rayleigh scattering that makes the sky blue and makes whipped cream white — thin layers of a transparent material separated by air appear lighter because the interfaces reflect and scatter incoming light rather than transmitting it). The mass is not changing chemically — it is changing STRUCTURALLY, and the structural change is visible as a colour change.

PULLS 30-60 (minute 5-10): the mass is now PALE GOLD, noticeably lighter than the starting amber, and its texture has shifted from DENSE-AND-STICKY to LIGHT-AND-SPRINGY — the air layers provide ELASTICITY (they compress under the pull's tension and spring back when released, like a sponge). The mass is now: a LAMINATED structure of hundreds of thin sugar-glass sheets separated by hundreds of thin air layers, the entire composite behaving as a single, elastic, pullable, foldable rope.

AT MINUTE 10: ADD THE TOASTED SESAME. Pour the seeds into the mass and fold them in — 5-10 more pulls to distribute the seeds evenly. The jet-black seeds embed in the pale-gold malt matrix, each seed visible as a dark speck in the light candy, and the mass becomes: DARK (the seeds' melanin pigment overwhelms the pulled sugar's pale gold), SPECKLED (seeds + sugar + air, three phases visible in cross-section), and FRAGRANT (the seeds' volatile sesamol, released by the pulling's mechanical disruption of the toasted seed coat, floods the air with a second wave of sesame aroma — the first wave was during the toasting, and this second wave is the pulling's contribution).

FINAL PULLS (minute 12-15): 5-10 more stretch-and-folds to ensure the seeds are uniformly distributed. The mass is: dark, seeded, elastic, warm, and shaped like a thick rope roughly 30-40 cm long and 3-4 cm in diameter.`,
      tip: `The pulled candy's MULTI-LAYER structure is visible in cross-section: cut a piece of the pulled mè láo in half and examine the cut face under good light — you can SEE the individual sugar-glass SHEETS (thin, pale, translucent, roughly 0.05-0.1 mm thick) separated by the AIR LAYERS (thin, dark, opaque, roughly 0.02-0.05 mm thick, visible as dark lines between the pale sheets). A well-pulled mè láo has 100-300 layers (each pull-and-fold doubles the layer count: 1 fold = 2 layers, 2 folds = 4, 3 folds = 8… 8 folds = 256 layers — the same exponential layer-multiplication the French croissant's 27 folds produce, here in sugar rather than in dough). The layer count determines the chewiness: MORE layers = MORE air interfaces = MORE yield-resist cycles per bite = CHEWIER. A 50-layer candy (under-pulled) is dense and hard. A 300-layer candy (well-pulled) is light and chewy. The pulling IS the texture.`,
    },
    {
      title: 'Press, cool, cut — the dark squares, the market stall, the Teochew tradition',
      description: `PRESS: lay the pulled, seeded rope on the oiled flat surface. Press with the oiled rolling pin (or the flat pot-bottom) into a slab — roughly 1.5-2 cm thick, 20 x 15 cm. The pressing compresses the pulled structure slightly (the air layers thin but do not collapse — the sugar sheets are rigid enough to hold the air even under pressure), and the slab's surface is: smooth, dark (the sesame's melanin), speckled (the seeds' round cross-sections visible like tiny black moons), and slightly glossy (the malt syrup's surface moisture reflecting light).

COOL 10-15 minutes — the candy firms as the sugar passes through its glass transition (the residual 3-5% water in the hard-ball syrup continues to evaporate during cooling, and the sugar's glass-transition temperature rises as the water content drops — by the time the candy is room temperature, the sugar sheets are in a semi-glassy state: rigid enough to SNAP when the candy is broken into pieces, but soft enough to YIELD when the candy is CHEWED with jaw-pressure. This intermediate state — harder than taffy, softer than brittle — is the mè láo's specific texture: CRUNCHY when bitten (the outer surface, which has dried furthest and is most glassy, shatters on first contact), then CHEWY as the jaw works deeper (the interior layers, which retain slightly more moisture, are still in their plastic state and deform rather than fracture).

CUT: with an oiled knife, cut the slab into small rectangles (2 x 3 cm) or squares (2 x 2 cm). The cutting should be DECISIVE — one clean downward press (no sawing, which drags the sticky interior and produces ragged, unclean edges). Each piece shows the cross-section: the layered, aerated, sesame-studded interior — pale-gold sugar sheets, dark-black sesame specks, and the faint dark lines of the air layers between them.

WRAP each piece in cellophane or parchment (the wrapping prevents the pieces from sticking to each other and slows the atmospheric-moisture absorption that softens the crunchy surface — the same humidity-vs-crispness battle the kẹo cu đơ and the xôi phồng fought).

THE EATING: unwrap a piece. The mè láo is: DARK (almost black — the toasted black sesame dominates the visual), SMALL (a 2 x 3 cm rectangle, a two-bite candy), and DENSE-LOOKING (the compressed pulled structure appears solid, not aerated — the air layers are invisible until the first bite reveals them).

BITE: the teeth close on the candy — the outer surface CRACKS (the dried, glassy surface shatters in 2-3 fragments, the crunch audible), then the interior YIELDS (the air layers compress, the sugar sheets deform, and the jaw enters the CHEWY PHASE — the cyclic yield-resist-yield that continues for 4-6 chews as the jaw works through the layered interior). The sesame seeds CRUNCH independently (each seed is a separate, tiny, oil-rich, Maillard-toasted hard point in the soft-chewy matrix — the same crunch-island-in-soft-sea the bánh đúc lạc's peanuts provided, here at a much smaller scale: 1-2 mm seeds instead of 10 mm peanuts, producing a TEXTURAL NOISE — a continuous, quiet, multi-point crunch that the jaw registers as "sesame" even before the tongue tastes the sesamol).

The flavour: SESAME (the dominant note — warm, nutty, smoky, slightly bitter, the toasted lignan compounds at their fullest expression), MALT (the background — grain-warm, toffee-adjacent, the mạch nha's specific mild-sweet character), and a faint CARAMEL (the hard-ball cooking's partial Maillard, less dark and less bitter than the kẹo cu đơ's hard-crack caramel because the lower temperature produced fewer decomposition products).

Mè láo closes the Sóc Trăng collection with the province's TEOCHEW signature candy — the confection that sits beside the bánh pía in every Vĩnh Châu market stall, that ships nationwide in the same gift boxes, and that carries the Teochew grandmother's pulling technique in every aerated layer. Ten Sóc Trăng dishes, four cultures: Khmer (bún nước lèo, bánh cống, xôi phồng), Chinese-Teochew (bánh pía, hủ tiếu, mè láo), Chăm (cơm nị cà ri), and Vietnamese (lẩu mắm, bò nướng ngói, bánh tằm bì) — four traditions sharing one province, one market, one table, and the table is the most culturally diverse in Vietnam, and the diversity is Sóc Trăng's deepest flavour.`,
      tip: `The mè láo and the kẹo cu đơ — Sóc Trăng's two confections — form a CONFECTION PAIR that demonstrates the same-ingredient-different-structure principle the chả cá Quy Nhơn's steamed-vs-fried pair demonstrated for myosin gel: SAME sugar (mạch nha), DIFFERENT temperature (hard-ball 121-130°C vs hard-crack 149-154°C), DIFFERENT processing (pulled vs poured), DIFFERENT structure (multi-layer aerated composite vs single-phase amorphous glass), DIFFERENT texture (chewy vs shattering). The pair is the collection's clearest SUGAR-PHYSICS demonstration: two candies sitting side by side on the same market stall, made from the same jar of mạch nha, and tasting the same (malty-sweet) but FEELING completely different (one shatters, one chews), because the 20°C temperature difference and the pulling-vs-pouring processing difference produced two fundamentally different solid-state structures from the same liquid precursor. Temperature and technique are the only variables. Structure and texture are the only outcomes. And the outcomes are as different as glass and foam.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
