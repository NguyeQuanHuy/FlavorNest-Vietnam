'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'goi-cuon-trang-bang',
  title: `Gỏi Cuốn Trảng Bàng (Trảng Bàng Fresh Rolls with Boiled Pork and Wild Herbs)`,
  subtitle: `The same boiled pork belly, the same rau rừng, the same two sauces — but rolled in ordinary dipped rice paper instead of the dew-softened sheet, and built with a specific layering order that puts herbs on the outside and pork at the core. Trảng Bàng's second great roll, and the proof that gỏi cuốn was always a hedge-side dish before Saigon made it a hotel one.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '1 hr',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/goi-cuon-trang-bang.jpg',
  intro: `Every tourist in Vietnam has eaten a gỏi cuốn — the fresh spring roll, the summer roll, the see-through rice-paper cylinder of shrimp, pork, vermicelli and mint that appears on every hotel menu from Hanoi to Phú Quốc. And almost every tourist has eaten a version that bears roughly the same relationship to the Trảng Bàng original as airport sushi bears to Tsukiji: structurally recognisable, spiritually elsewhere. The Trảng Bàng gỏi cuốn is not the hotel roll with better ingredients. It is a different dish with the same name, and the differences — in filling, in wrapper discipline, in herb volume, and above all in what the roll is for — are the whole argument.

The first difference is the shrimp: there is none. Trảng Bàng gỏi cuốn is a pork roll, period — boiled belly, the full cross-section of lean-fat-skin, sliced cold and thin, exactly as it appears inside the phơi sương wrap down the same stretch of highway. The second difference is the herbs: where a hotel roll tucks two or three mint leaves and a coriander sprig inside a tidy cylinder, the Trảng Bàng roll is built around a core of rau rừng so voluminous that the roll bulges. The herbs are not a garnish inside the pork; the pork is a garnish inside the herbs. A cross-section of a properly made Trảng Bàng gỏi cuốn is mostly green, with pink showing through at the centre, and the whole thing smells of the hedge before it smells of the pig.

The third difference is the wrapper. Where the phơi sương roll uses the famous dew-softened sheet and is eaten for the wrapper's own chew, the gỏi cuốn uses ordinary thin dried rice paper, briefly dipped in water until it is pliable and clingy, and its job is to be invisible — a transparent skin that compresses the filling, shows the herbs through its surface, and contributes no texture of its own. The roll is therefore judged purely on its interior: herb variety, pork-to-herb ratio, and rolling tightness, which is how Trảng Bàng grandmothers assess a prospective daughter-in-law's kitchen competence, not entirely in jest.

The fourth difference is the context. The hotel gỏi cuốn is a starter, plated in pairs, eaten before something better arrives. The Trảng Bàng gỏi cuốn is the meal — ten, twelve, fifteen rolls per person, eaten with mắm nêm or tương xay, accompanied by nothing else except tea or beer, for an hour, at a roadside stall, in company. The quantity is the format, and the format requires the herb basket to be bottomless, the pork tray to be refilled, and the rice paper to be counted by the stack. It is not a course before something. It is the something.

This recipe therefore overlaps deliberately with the bánh tráng phơi sương entry that precedes it: the pork is the same, the bì is the same, the sauces are the same, the herb basket is the same. What changes is the wrapper and the build order, and those two changes produce a roll that eats completely differently — tighter, wetter, more herbal, more transparent, and consumed in larger numbers. The two rolls exist side by side on every Trảng Bàng table, and choosing between them is the town's low-stakes entertainment, repeated daily, settled never.`,
  ingredientSections: [
    {
      title: 'The wrapper',
      items: [
        {
          amount: 30,
          name: 'sheets of thin dried rice paper (bánh tráng mỏng), 22 cm',
          note: `The thin, translucent spring-roll sheets — NOT the thick ones used for grilling or for phơi sương. They must be thin enough that, once dipped and rolled, the herbs show through the surface as a green shadow. Dipped briefly in room-temperature water — two seconds, turning once — until just pliable and faintly tacky. Over-dipped sheets tear; under-dipped sheets crack at the fold. The timing is a skill learned in five rolls.`,
        },
      ],
    },
    {
      title: 'The pork (same preparation as the phơi sương)',
      items: [
        { amount: 600, unit: 'g', name: 'pork belly, skin on, boiled and chilled', note: `Poached 35-40 minutes in water with shallot, ginger, salt and rice wine; iced, then sliced thin across the grain. Full cross-section: skin, fat, lean. See the phơi sương recipe for the full method — identical pork, identical slicing.` },
      ],
    },
    {
      title: 'Bì (pork skin in toasted rice powder)',
      items: [
        { amount: 150, unit: 'g', name: 'pork skin, boiled, chilled, shaved into fine ribbons, tossed with 1.5 tbsp thính, sugar and salt', note: `Same bì, same method as the phơi sương entry. Optional but traditional and worth including for the chew-within-the-roll.` },
      ],
    },
    {
      title: 'The rau rừng — the roll IS the herbs',
      items: [
        {
          amount: 1,
          name: 'the same vast basket of wild and cultivated herbs as the other two Trảng Bàng dishes',
          note: `Diếp cá (fish mint), húng cây, lá lốt, rau răm, kinh giới, ngò gai, húng quế, đọt non cashew, lá cách, đinh lăng, and whatever else the morning's hedge gave. In Europe: perilla, Thai basil, Vietnamese coriander, culantro, mint, betel leaf, rocket, watercress, soft lettuce — the widest variety you can assemble, in serious quantity. A correct Trảng Bàng gỏi cuốn is 60-70% herb by volume. If the cross-section is mostly pink, you have built a hotel roll.`,
        },
        { amount: 200, unit: 'g', name: 'bean sprouts' },
        { amount: 100, unit: 'g', name: 'fresh bún (rice vermicelli), cooked and cooled', note: `A small amount — a loose pinch per roll, not a bed. In Trảng Bàng bún is a texture accent, not a filler. Many stalls omit it entirely and let the herbs do the volume.` },
        { amount: 1, name: 'cucumber, in thin batons' },
        { amount: 4, name: 'chives or garlic chives (hẹ), whole lengths', note: `Laid along the roll for the visual line and for a mild allium bite inside the herb mass.` },
      ],
    },
    {
      title: 'The dipping sauces',
      items: [
        { amount: 1, name: 'batch mắm nêm: fermented anchovy sauce + crushed pineapple + sugar + garlic + chili + lime', note: `The majority dip. Same recipe as the phơi sương entry.` },
        { amount: 1, name: 'OR tương xay: tương + hoisin + peanut butter + garlic + chili + water, blended smooth', note: `The minority dip. Both on the table; the eater picks.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Prepare the pork, the bì and the sauces — identical to the phơi sương',
      description: `Boil, ice and slice the pork belly; shave and toss the bì; pound the mắm nêm or blend the tương xay. The method is identical and is not repeated here — see the bánh tráng phơi sương recipe for the full detail.

What changes is the volume: for gỏi cuốn service, expect 10-15 rolls per person, which means more pork, more herbs and a bigger batch of sauce than you think. Cut the pork thinner than you did for the phơi sương, because it must roll tightly inside a wet wrapper without bulging through — paper-thin, translucent slices that drape rather than stand.

Have everything at room temperature, dry, and within arm's reach before you dip the first sheet. A gỏi cuốn assembly line that pauses to slice more pork is an assembly line where the already-dipped wrappers are drying out.`,
      tip: `The two Trảng Bàng rolls use the same filling inside different wrappers, and the wrapper dictates everything else. The phơi sương sheet is sturdy and forgiving — it tolerates thick pork, a loose roll, and a leisurely pace. The dipped thin rice paper is fragile and demanding — it tears on a sharp bone edge, splits on a thick pork slice, and dries to cracking within two minutes if you stop rolling. Same filling, opposite engineering tolerances. Adjust the pork slicing, the rolling tightness and the pace to the wrapper, not to your preference. The wrapper is the boss.`,
    },
    {
      title: 'Build the roll inside-out: herbs outside, pork at the core',
      description: `Dip a sheet in room-temperature water for 2 seconds, turning once, and lay it flat on a clean damp board. It should be pliable and faintly tacky, not wet and limp.

In the lower third, lay your components in this order, bottom to top:
— A bed of mixed herb leaves, laid flat and overlapping, enough to cover the width of the roll. These will end up on the outside, visible through the wrapper.
— A thin line of bean sprouts and a cucumber baton.
— A small pinch of bún if using.
— 2-3 paper-thin slices of pork, overlapping.
— A pinch of bì.
— A chive stalk, running the full length.

Fold the near edge over the filling tightly, compressing everything into a cylinder. Tuck the left and right sides in, and roll forward to the far edge in one smooth motion, pressing gently as you go.

The finished roll should be tight, smooth, and show a green shadow of herbs through the translucent wrapper. Loose rolls fall apart at first dip; tight rolls hold.`,
      tip: `The inside-out layering — herbs on the outside, protein at the core — is what separates the Trảng Bàng build from the Saigon hotel build, where shrimp and pork are placed against the wrapper so they show through. The Trảng Bàng cook wants the opposite: green first, visible and aromatic, because the roll is a herb delivery system with pork support, not a pork display with herb garnish. The build order is the philosophy, made physical. And the herbs against the wrapper have a practical benefit: their irregular surfaces grip the tacky rice paper and prevent the smooth, wet pork from sliding inside the roll, which is the failure mode of every roll built pork-side-out and eaten more than two minutes later.`,
    },
    {
      title: 'Roll in relays — two at a time, and eat as you go',
      description: `Roll two, eat one while the other waits, roll two more. A dipped rice paper begins drying and stiffening the moment the water evaporates, and a roll that sat five minutes on a plate has a patchy, cracked skin that tears at first dip and lets the filling scatter into the sauce.

In Trảng Bàng the rolls are made by one person — often the youngest pair of hands at the table — and eaten by everyone else as they arrive, one at a time, in a continuous relay that runs for thirty minutes or an hour. Nobody waits for a platter of six to be assembled. The roll is eaten the minute it is finished, and the next one is already being built.

The pace is the format. A gỏi cuốn meal is not a course; it is a process — rolling, eating, talking, rolling — and the table moves at the speed of the roller.`,
      tip: `This relay format explains why gỏi cuốn is a communal, low-table, slow-afternoon dish and not a plated starter: it requires someone at the table to be rolling continuously, which means the rolling is part of the socialising, not separate from it. It is the same table structure as a Mekong hotpot (someone tends the pot), a Hà Tĩnh bánh mướt meal (the cook fries through service), or a Korean barbecue — one person working, everyone eating, the work is the gathering. Dishes that require continuous attention become communal by necessity and then by tradition. The relay is not a constraint on how gỏi cuốn is eaten. It is the reason the dish is eaten the way it is.`,
    },
    {
      title: 'Dip deep, eat in two bites, and refill the herb basket before it empties',
      description: `Dip one end of the roll generously into the mắm nêm or the tương xay — deep enough that the sauce reaches a third of the way up. The first bite should carry sauce all the way through; the second bite is the drier, herb-dominant end, chased with a sip of tea.

Between rolls, eat a slice of green mango or star fruit if they are on the table — the tannin and acid reset the palate the same way they do beside the bánh khoái in Huế and the fried fish in the Mekong.

Refill the herb basket before it empties: the sight of a bare basket on a Trảng Bàng table is a small social emergency, because the herbs are the meal and an empty basket is a meal ended, and no one was ready.`,
      tip: `Set the three Trảng Bàng dishes side by side — bánh canh, phơi sương, gỏi cuốn — and one ingredient appears in all three, unchanged: the rau rừng basket. The noodle changes, the wrapper changes, the topping changes, and the herbs stay. They are the town's actual signature, more than the noodle or the dew or the pork — a wild, twenty-species, roadside, seasonal, hand-gathered, un-franchisable ingredient that is not one herb but a biome. What Trảng Bàng really sells, across all three dishes, is a hedge on Highway 22 that tastes of a specific forty-five minutes northwest of Saigon. No recipe in this collection, and possibly no recipe in Vietnam, is more bound to its address. The pork is pork everywhere. The herbs are here.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
