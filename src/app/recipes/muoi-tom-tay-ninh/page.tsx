'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'muoi-tom-tay-ninh',
  title: `Muối Tôm Tây Ninh (Tây Ninh Chili-Shrimp Salt)`,
  subtitle: `Dried shrimp pounded fine and toasted with chili, garlic and sugar until the kitchen goes red and the jar smells like the intersection of the sea and a chili field. Eaten with green mango, guava, jicama, star fruit — any fruit hard and tart enough to survive the dip. Tây Ninh's most portable product, and the condiment that turned a province into a brand.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '45 min',
  rating: 4.9,
  baseServings: 8,
  heroImage: '/images/recipes/muoi-tom-tay-ninh.jpg',
  intro: `If you have ever received a package from a Vietnamese friend returning from the south, there is a decent chance it contained a small, heavy, sealed bag of vivid coral-red powder with a shrimp printed on the front and the words "Muối Tôm Tây Ninh" in a font that has not changed since the bag was first designed. It is the province's most successful export — more travelled than the bánh tráng phơi sương, more recognisable than the bánh canh — and its economy is not trivial: Tây Ninh produces muối tôm by the ton, in family workshops and small factories, and it is sold at every bus stop, every market and every airport souvenir shop in southern Vietnam. The product is a seasoned salt, and the seasoning is the recipe.

The name is plain — muối is salt, tôm is shrimp — but the ingredient list is broader and the balance more precise than the name lets on. Dried shrimp provides the savoury backbone: toasted until fragrant, then ground to a coarse powder that crunches faintly against the tooth. Chili is the heat, and Tây Ninh uses a lot of it — the province grows chili extensively, both the fat horn varieties that give colour and body and the small bird's-eye that gives real fire — dried, seeded to taste, and ground. Garlic is the aromatic bridge. Sugar — a significant amount, and not apologised for — rounds every edge and is the reason muối tôm reads as moreish rather than merely salty-hot. And salt itself, the mineral that names the product, is present in a supporting dose that many outsiders expect to be higher, because the word muối sets up expectations that the spoon subverts: a pinch tastes of shrimp and chili and sweet garlic long before it tastes of salt. The proportion is the whole craft, and every workshop's proportion is its trade secret, written nowhere and carried in the fingers of whoever pans the toasting.

The traditional eating is the most casual in Vietnamese food and among the most addictive: a plate of unripe fruit — green mango cut into spears, guava in wedges, jicama in sticks, star fruit in slices, even underripe pineapple — and a small dish of muối tôm for dipping. The fruit's crunch and tartness is the vehicle; the salt's heat, sweetness and umami is the payload. It is a snack, a between-meal, a pavement thing, and it is spectacularly difficult to stop eating once started, because the combination of sour fruit, salt, sugar, chili and glutamate triggers every reward pathway the tongue has. Office workers in Saigon keep a jar in their desk drawer the way others keep chocolate. Pregnant women are culturally expected to crave it. And the bag from the returning friend is consumed, jar-spoon-fruit, within the week, at which point the friend is asked to go back.

For the overseas kitchen the good news is total: every ingredient is available, the technique is a single pan and a mortar, and a batch keeps for months in a sealed jar. Adjust the chili to your own courage, the sugar to your own sweet tooth, and the shrimp to your budget — the recipe below is the classic Tây Ninh balance, but the province itself contains a hundred variations, every workshop swearing theirs is the original. The only non-negotiable is the toasting: every component is toasted separately, slowly, to its own point, and combined after. A dump-and-grind produces a raw, harsh, flat powder; the pan produces a condiment.`,
  ingredientSections: [
    {
      title: 'The muối tôm',
      items: [
        {
          amount: 100,
          unit: 'g',
          name: 'dried shrimp (tôm khô), small to medium',
          note: `Good-quality dried shrimp — vivid coral, firm, smelling of the sea. Buy them whole and grind yourself; pre-ground shrimp powder is dusty and stale. The Vietnamese groceries across Europe carry excellent dried shrimp from both Vietnam and Thailand; look for plump, evenly coloured pieces with no dark patches.`,
        },
        {
          amount: 40,
          unit: 'g',
          name: 'dried red chili, seeded, in pieces',
          note: `A mix of large mild dried chilies (for colour, body and fruity depth) and small dried bird\'s-eye (for actual heat) is the Tây Ninh approach: roughly 30 g large, 10 g small. Seed the large ones for less heat; leave the small ones seeded for more. Adjust the ratio to your own line — there is no shame in either direction, but a Tây Ninh-standard muối tôm is genuinely hot.`,
        },
        {
          amount: 30,
          unit: 'g',
          name: 'garlic (6-8 cloves), sliced thin',
          note: `Sliced, not minced — slices toast evenly in a dry pan; mince scorches in patches and turns bitter.`,
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'fine salt',
          note: `Sea salt or fine table salt — either works. It is present at roughly 15% of the finished weight, which is lower than the name suggests and lower than most people expect. The shrimp and the fish sauce carry their own sodium; salt here is a catalyst for the other flavours, not the headline.`,
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'sugar',
          note: `Yes, this much — roughly equal to the salt by volume. Southern Vietnamese condiments are unapologetically sweet, and the sugar is what turns muối tôm from a chili-salt into the addictive, every-receptor thing it is. White granulated; palm sugar is a deeper variation found in some premium batches.`,
        },
        { amount: 1, unit: 'tbsp', name: 'fish sauce (optional)', note: `A spoonful tossed through the shrimp before toasting — some workshops do, some do not. It deepens the savoury register and browns the shrimp faster.` },
        { amount: 1, unit: 'tsp', name: 'annatto powder or paprika (optional)', note: `For extra vivid red — the colour arms race between Tây Ninh brands is real. The flavour contribution is minimal; the shelf presence is not.` },
      ],
    },
    {
      title: 'The fruit platter',
      items: [
        {
          amount: 1,
          name: 'large platter of unripe and tart fruit, the more variety the better',
          note: `The vehicle, and the reason the salt is addictive rather than merely good. Green mango (the classic, first among equals), guava, jicama (củ đậu), star fruit, underripe pineapple, green apple, cóc (hog plum) if you can find it, young coconut flesh, even crisp underripe pear. The rule: hard, crunchy, tart. Ripe sweet fruit is the wrong counterpoint — the salt wants resistance and acid, not softness and sugar.`,
        },
      ],
    },
  ],
  steps: [
    {
      title: 'Toast the shrimp — low and slow, until they snap',
      description: `Spread the dried shrimp in a dry pan over low-medium heat and toast, stirring constantly, 8-10 minutes. They will darken slightly from coral to a deeper orange-red, shrink, turn brittle, and — this is the signal — begin to snap audibly when you press one between your fingers. The kitchen will smell powerfully of toasted seafood.

Tip onto a plate and cool completely. Do not grind them hot; hot shrimp release oil that clumps the powder into paste.

Under-toasted shrimp give a flat, raw, slightly fishy powder. Properly toasted, the Maillard compounds generated on the surface are what make the finished salt smell like something you want to eat by the spoonful — toasted, sweet-savoury, with a complexity that raw dried shrimp simply does not have.`,
      tip: `Toasting dried shrimp is a Maillard reaction on a pre-dried, protein-rich substrate, and it produces the same classes of compounds — pyrazines, thiophenes, Strecker aldehydes — that make roasted coffee, grilled meat and toasted bread smell appetising. The shrimp are already fully cooked and dried; this second heating is exclusively about flavour generation, and the eight minutes are worth more to the finished product than any other step in the recipe. Every workshop in Tây Ninh toasts its shrimp as the first and most carefully watched operation of the day.`,
    },
    {
      title: 'Toast the chili — colour and heat, not char',
      description: `In the same dry pan over low heat, toast the dried chili pieces 3-4 minutes, stirring, until they darken one shade, become fragrant and just start releasing faint wisps of capsaicin vapour that tickle the nose. Open a window.

Cool completely. The chili should be brittle enough to snap, deeply aromatic, and a shade darker than it started — not blackened. Blackened chili is acrid and bitter, and a tablespoon of it destroys a whole batch.

If using the two-chili blend: toast them separately, because the small bird's-eye scorch in half the time the large ones need. Combine after cooling.`,
      tip: `Toasting dried chili drives two changes in parallel: it degrades the capsaicin slightly (which is why a toasted chili is more aromatic and slightly less searingly hot than a raw one at the same weight) and it generates carotenoid oxidation products that contribute a deep, roasted, fruity register that raw chili powder does not have. This is the same principle behind Mexican toasted chiles and Indian dry-roasted spices — brief dry heat modifies the raw aroma into something deeper without destroying it. The balance point is colour: one shade darker. Two shades is a warning. Three is the bin.`,
    },
    {
      title: 'Toast the garlic and the salt — separate pans, separate endpoints',
      description: `Toast the sliced garlic in a dry pan over the lowest possible heat, stirring, 5-6 minutes until pale gold, paper-dry and intensely fragrant. It will turn from floppy to rigid to crisp. Remove the moment the colour is right — garlic goes from golden to burnt in seconds and burnt garlic is the worst flavour in cooking. Cool on paper.

In the same pan, toast the salt 2-3 minutes over medium heat, stirring, until it is visibly dry, slightly grey, and has lost all clumping. This drives off residual moisture and makes the final powder free-flowing rather than caking in the jar.`,
      tip: `Every component is toasted separately because every component has a different optimal end-temperature and a different burn point. Shrimp wants 8 minutes; chili wants 4; garlic wants 6 at lower heat; salt wants 2 at higher. Dumping them all in the pan together means the fastest-burning ingredient (garlic) dictates the timing and the slowest (shrimp) stays raw. Separate pans, separate attention, combined after: it adds fifteen minutes to the recipe and it is the entire difference between a workshop muối tôm and a home-kitchen attempt. The Tây Ninh workshops run five pans in relay for exactly this reason.`,
    },
    {
      title: 'Grind and combine — coarse, never flour',
      description: `Grind the cooled shrimp in a mortar or spice grinder to a COARSE powder — visible granules, not dust. Some pieces should be large enough to crunch faintly against the tooth. Grind the cooled chili to a similar coarseness. Grind the garlic crisps to a coarse rubble.

Combine in a bowl: the shrimp, the chili, the garlic, the toasted salt, the sugar, and the annatto if using. Toss thoroughly with a fork or your fingers until the colour is even and every pinch contains all components.

Taste it on a piece of green mango, not off the spoon — the fruit is the delivery system and the balance only reads correctly on it. Salty-sweet-hot-savoury should arrive in that order, with the shrimp arriving last as a lingering savouriness.

Adjust: more sugar rounds the heat, more salt sharpens, more chili pushes, more shrimp deepens. Every workshop does this final tuning by taste, and no two jars are the same.`,
      tip: `Coarse, never flour, is a texture decision with flavour consequences. A fine powder dissolves instantly on the tongue and delivers its entire impact in one flat second; a coarse grind releases in waves — salt and sugar first (the finest, most soluble particles), then chili heat (slower to dissolve), then shrimp savouriness (the last, largest granules, crunching and releasing). That staged release across several seconds of chewing is what makes muối tôm moreish rather than merely strong: each successive wave re-triggers the palate before the previous one has faded, and the net effect is a complexity no single-grain-size powder can replicate. The mortar is more important than the recipe.`,
    },
    {
      title: 'Jar it, pair it, and do not apologise for the quantity',
      description: `Store in a clean, bone-dry, airtight glass jar. It keeps 3-4 months at room temperature, longer in the fridge — though humidity is the enemy, not time, so keep a silica sachet in the jar or a few grains of raw rice at the bottom to absorb any moisture that sneaks in.

Serve in a small dish beside the fruit platter. The motion: spear or hold a piece of fruit, press it into the salt so a visible coat clings, and eat. The crunch, the tart, and the hot-sweet-salty-savoury hit arrive together, and the hand is already reaching for the next piece before the first is finished.

Make double. A single batch in a household that has discovered it lasts about ten days. In a household with green mangoes in the fruit bowl, less.`,
      tip: `The addictiveness of muối tôm on sour fruit is a textbook case of sensory synergy across all five basic tastes plus texture. The fruit delivers sour and crunch; the salt delivers salt; the sugar delivers sweet; the shrimp delivers umami (free glutamate, concentrated by drying and toasting); the chili delivers capsaicin heat, which is not a taste but a pain signal that triggers endorphin release. All five tastes plus a pain-reward loop, in one bite, every time. No single component is remarkable; the combination hits every receptor the tongue possesses, simultaneously, and the brain — correctly — interprets this as something important happening. Tây Ninh did not design this on purpose. It toasted what it had, combined what it grew, and stumbled into a neurological masterpiece. The jar in the desk drawer is not a habit. It is a pharmacological event.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
