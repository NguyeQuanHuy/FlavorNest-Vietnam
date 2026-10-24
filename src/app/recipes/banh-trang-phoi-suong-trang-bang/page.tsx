'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-trang-phoi-suong-trang-bang',
  title: `Bánh Tráng Phơi Sương Trảng Bàng (Dew-Softened Rice Paper Wraps with Boiled Pork)`,
  subtitle: `Sun-dried rice paper set out at midnight and left to drink the night dew until it turns from brittle cracker to supple, faintly chewy sheet — then wrapped around sliced boiled pork, herbs and rau rừng, and dunked in a fermented sauce. The simplest dish in Tây Ninh and the one that proves a province can build an identity from humidity.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '1 hr',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/banh-trang-phoi-suong-trang-bang.jpg',
  intro: `Every night during the dry season in Trảng Bàng, the rice-paper makers do something that sounds like a mistake: they take their finished product — sun-dried, brittle, shelf-stable rice paper — and lay it back outside, on bamboo racks, overnight. Not under cover. Not sealed. Deliberately exposed to the open air, from roughly midnight until dawn, so that the night dew settles on every disc and is absorbed slowly through its porous starch matrix over five or six hours. By sunrise the sheets have transformed from something that shatters when you bend it into something that flexes — supple, faintly tacky, slightly elastic, with a chew that is neither the snap of a dry cracker nor the wet cling of a dipped rice paper, but a third texture that exists only because Trảng Bàng's relative humidity, its dew point and its nighttime temperature happen to land in a narrow window that delivers exactly the right amount of moisture, exactly slowly enough, into exactly this thickness of rice starch. Phơi sương — "exposed to the dew" — is the name, and it is the entire recipe.

The physics is starch retrogradation run in reverse, gently. Sun-drying drives the gelatinized rice starch well below its glass-transition moisture content — the disc is an amorphous glass, rigid and clear. Overnight, the dew raises the moisture back above the glass transition but below full re-gelatinization — the starch chains relax and regain mobility without dissolving, and the disc becomes a flexible, rubbery solid rather than either a brittle glass or a wet gel. The window is narrow: too little moisture and the paper stays brittle and cracks when rolled; too much and it goes limp, sticky and tears under its own weight. Trảng Bàng's climate hits the target by accident of geography, which is why a thousand towns dry rice paper and only one town's dew-softened sheets are famous. It is terroir by humidity.

The eating is among the most minimal in Vietnamese cooking and among the most satisfying, because there is no cooking at the table and nothing to assemble except the obvious. A sheet of phơi sương is laid flat. On it goes a slice of boiled pork belly — fat and lean together, the fat white and firm from chilling, the meat pink and clean — a tangle of rau rừng pulled from the same hedgerow basket that accompanies the bánh canh down the road, a few sprigs of whatever the herb platter gives, and optionally a piece of the bì tossed in thính. Roll it snugly, dip it in mắm nêm (the fermented anchovy sauce softened with pineapple) or in a tương-based sauce, and eat in two bites. The phơi sương sheet contributes what no other wrapper in Vietnamese cooking quite does: a yielding but present chew that slows the bite, a faint toasted-rice sweetness from the original drying, and a cool neutrality that lets the pork, the herbs and the dipping sauce do all the talking while the wrapper provides the architecture. Rice paper is usually invisible. This one asks to be noticed.

For the overseas kitchen, the honest truth: authentic phơi sương sheets can be bought frozen or vacuum-packed from larger Vietnamese groceries in Europe, labelled "bánh tráng phơi sương Trảng Bàng," and they are genuine — the sheets are dew-softened in Trảng Bàng and then sealed for export. If you cannot find them, the workable homemade method is below: a standard thick dried rice paper, briefly steamed or held over a pot's steam for a few seconds each side until it goes from rigid to supple but not wet, then used immediately. It is not phơi sương — nothing about a kitchen steamer is a Trảng Bàng midnight — but it lands in a recognisable neighbourhood of the texture, and the roll, the pork and the herbs around it are the same dish, honestly made, honestly named as an approximation. The real thing, wrapped around roadside pork at six in the morning on Highway 22, is a trip.`,
  ingredientSections: [
    {
      title: 'The rice paper',
      items: [
        {
          amount: 20,
          name: 'sheets of bánh tráng phơi sương (dew-softened rice paper), 22-25 cm',
          note: `The real thing: thick, round, faintly tacky, supple enough to fold without cracking and sturdy enough to hold a loaded roll without tearing. Available frozen or vacuum-sealed at Vietnamese groceries in Europe — thaw at room temperature and peel apart gently.

HOMEMADE APPROXIMATION: buy thick (not thin) dried rice paper — the thicker craft sheets meant for grilling, not the translucent spring-roll wrappers — and hold each disc briefly in the steam of a boiling pot, 3-4 seconds per side, until it just flexes. Use immediately; it will not hold the texture for more than a few minutes. Honest, not identical.`,
        },
      ],
    },
    {
      title: 'The pork',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'pork belly, in one piece, skin on',
          note: `Boiled and sliced thin, with the fat layer intact and visible — the fat is structural, not decorative. It carries the wrap's seasoning (the dipping sauce clings to it) and its richness is what the herb platter is built to counter.`,
        },
        { amount: 1, name: 'shallot, halved' },
        { amount: 20, unit: 'g', name: 'ginger, bruised' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'rice wine' },
      ],
    },
    {
      title: 'Bì (optional but traditional)',
      items: [
        { amount: 150, unit: 'g', name: 'pork skin, boiled, chilled, shaved into fine ribbons' },
        { amount: 1.5, unit: 'tbsp', name: 'thính (roasted rice powder)' },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
        { amount: 0.25, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The dipping sauce — choose your side',
      items: [
        {
          amount: 1,
          name: 'batch mắm nêm: 4 tbsp fermented anchovy sauce (strained) + 4 tbsp crushed pineapple + 1.5 tbsp sugar + garlic, chili, lime',
          note: `The majority Trảng Bàng position: funk meeting fat, pineapple softening the ferment. The full method is in the cá lóc nướng recipe of this collection — the same mắm nêm, the same pineapple-thinning rule.`,
        },
        {
          amount: 1,
          name: 'OR tương xay: 3 tbsp tương (fermented soybean paste) + 2 tbsp hoisin + 1 tbsp peanut butter + garlic, chili, water — blended smooth',
          note: `The minority position and the one Saigon visitors often prefer on first encounter — nutty, malty, easier to love at first bite. Both saucers typically appear on the same table.`,
        },
      ],
    },
    {
      title: 'The rau rừng platter',
      items: [
        {
          amount: 1,
          name: 'the same vast basket of wild herbs as the bánh canh bowl',
          note: `Diếp cá (fish mint), húng cây, lá lốt, rau răm, kinh giới, ngò gai, húng quế, đọt non cashew, lá cách, đinh lăng — the full Highway 22 roster. In Europe: perilla, Thai basil, Vietnamese coriander, culantro, mint, betel leaf, rocket, watercress — volume and variety over any single species. The herbs ARE the dish; the roll is the vehicle.`,
        },
        { amount: 200, unit: 'g', name: 'bean sprouts' },
        { amount: 1, name: 'cucumber, in thin batons' },
        { amount: 1, name: 'green (unripe) banana, thinly sliced, held in lime water' },
        { amount: 1, name: 'star fruit (khế), thinly sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Boil the pork belly — a gentle poach, then an ice bath',
      description: `Put the pork belly skin-down in cold water with the shallot, ginger, salt and rice wine. Bring to a bare simmer — the surface should tremble, never roll — and poach 35-40 minutes for a piece 5-6 cm thick.

It is done when a skewer through the thickest point meets no resistance and the juice runs clear. Lift straight into iced water for 10 minutes: the shock firms the fat from soft-smeary to clean-sliceable.

Slice across the grain as thinly as your sharpest knife allows. Every slice should show the full cross-section: skin on top, the fat layer, and the lean — because the mắm nêm and the herbs are calibrated against the whole stack, not against lean alone.`,
      tip: `Cold pork, not warm, is the tradition here, and it is not just knife convenience — it is thermal design. A dew-softened rice paper sheet is at room temperature; the herbs are cool; the dipping sauce is cool. The whole roll is a cool construction, and cold pork belongs to it. Hot pork sweats steam inside the roll, which condenses against the rice paper and turns it to mush within the minute. Trảng Bàng figured this out empirically and has served its pork cold without exception for as long as anyone can remember. The roll's integrity depends on everything inside it being dry and cool.`,
    },
    {
      title: 'Prepare the bì — shave, toss, keep separate',
      description: `Boil the pork skin 25-30 minutes, ice-bath 10 minutes, and shave into the finest possible ribbons — translucent, hair-thin. Toss with the thính, sugar and salt until matte and separate.

The bì can be made hours ahead and held at room temperature, covered. Refrigerating it stiffens the gelatin ribbons into something that crunches rather than chews; room-temperature bì has a cool, slick suppleness that is the correct texture.

A roll with bì and a roll without are meaningfully different: the bì adds a chew-within-the-chew and a toasted nuttiness that rounds out the lean-and-fat of the pork. Include it once, then decide.`,
      tip: `Bì appears in both of Trảng Bàng's signature dishes — on the bánh canh and inside the phơi sương roll — because it is the town's answer to a specific textural gap: both the noodle and the rice paper are starch-based and slippery, and the pork is soft. Bì introduces a firm, collagen-based chew that is genuinely different from any of them: not crisp, not soft, not spongy, but an elastic, faintly sticky resistance at the tooth. It is what makes the Trảng Bàng roll texturally three-dimensional where an ordinary rice-paper roll is one-dimensional. A cheap cut of pig, a knife and a spoonful of toasted rice: the cost-to-effect ratio is the best in the whole wrapping tradition.`,
    },
    {
      title: 'Make the mắm nêm — pounded, not stirred',
      description: `Pound the garlic and chili to a rough paste. Stir in the strained mắm nêm, the crushed pineapple with its juice, the sugar, and the lime. The sauce should be thick with pineapple shreds and pungent — taste it on a lettuce rib, not off the spoon.

If serving the tương xay as well: blend the tương, hoisin, peanut butter, garlic, chili and enough water to reach a spoonable thickness. Both saucers go on the table; the eater picks.

Make both within the hour. Mắm nêm oxidizes and sharpens; tương xay tightens and dulls. Neither benefits from a night in the fridge, and Trảng Bàng makes them to order.`,
      tip: `The two sauces represent two different schools of balancing cold boiled fat with a dip, and the choice is worth understanding. Mắm nêm — fermented anchovy, pineapple, chili — is funk-and-acid: it meets the pork's richness with something equally bold and clears it with fruit acid. Tương xay — fermented soybean, peanut, hoisin — is umami-and-nut: it doubles down on savoury depth and rounds the pork rather than cutting it. The herbs do the cutting either way, which is why both sauces work — the plate's acid comes from the hedge, not the saucer, and the saucer is thereby freed to play whichever game it prefers.`,
    },
    {
      title: 'Roll — lay flat, stack low, roll snug, dip deep',
      description: `Lay a phơi sương sheet flat on the table or a plate. In the lower third: a few herb leaves — fish mint first if you have it — a baton of cucumber, a slice of green banana, then 2-3 slices of cold pork belly laid overlapping, and a pinch of bì if using.

Fold the near edge over, tuck the sides, and roll snugly — firm enough to hold in one hand, not so tight the sheet stretches translucent and tears. The finished roll should feel like a cool, smooth, gently yielding cylinder about the size of two fingers.

Dip one end generously into the mắm nêm or tương xay. Two bites. Reach for the next sheet.

Do not pre-roll more than one or two ahead. The pork is cold and dry; the herbs are dry; but the moment the sheet touches the sauce or sits long enough for the pork's residual moisture to reach it, the clock starts. A roll eaten within a minute of being made is the dish. A roll that sat five minutes on a platter is a lesser thing — edible, but lesser.`,
      tip: `The phơi sương sheet's unique contribution becomes clearest in the roll, where you can feel it against your palm and against your teeth. A dipped rice paper (the gỏi cuốn wrapper) is wet, clinging, and all but invisible in the mouth — structural transparency. A dry grilled cracker (the hến scoop, the cu đơ shell) is brittle, dominant, and shatters. The dew-softened sheet is neither: it has body, a clean resistance, a faint chew of its own — the wrapper announces itself without shouting. It is the most polite textural assertion in the Vietnamese wrapping canon, and it exists because the dew of one town delivers exactly the moisture that rice starch needs to be noticed but not obtrusive. Climate as seasoning. Humidity as technique.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
