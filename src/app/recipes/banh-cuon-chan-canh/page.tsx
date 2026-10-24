'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-cuon-chan-canh',
  title: `Bánh Cuốn Chan Canh Tuyên Quang (Steamed Rice Rolls in Bone Broth)`,
  subtitle: `The same paper-thin steamed rice sheets that Thanh Trì rolls around minced pork — but in Tuyên Quang they are torn into rough pieces, piled in a bowl, and chan: drenched in a clear, hot, pork-bone broth with wood-ear mushroom and fried shallots. Not dipped. Not sauced. Submerged. A bánh cuốn that became a noodle soup by abandoning the dipping saucer and jumping into the bowl.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '2 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-cuon-chan-canh.jpg',
  intro: `Every Vietnamese who has eaten bánh cuốn — and every Vietnamese has — knows the format: thin, translucent, steamed rice sheets, filled or unfilled, served on a plate with a saucer of nước chấm, a few slices of chả lụa and a sprig of herb. The sheets are picked up with chopsticks, dipped in the sauce, and eaten as a delicate, ambient-temperature breakfast. That is the Hanoi format — the Thanh Trì format — and it is the format the world recognises as bánh cuốn.

Tuyên Quang looked at this format and said: why dip when you can pour?

Bánh cuốn chan canh — "bánh cuốn drenched in broth" — is Tuyên Quang's provincial rewrite of the Hanoi classic: the same rice sheets (steamed on cloth, peeled, still translucent and trembling), but instead of being rolled neatly and set on a dry plate, they are torn into rough, irregular pieces, piled into a deep bowl, and drenched in a ladleful of clear, hot, pork-bone-and-chicken broth that transforms the dry breakfast into a soup. The sheets absorb the broth on contact — their gelatinised starch is porous and thirsty — and they soften from their original firm-tender to a silky, almost dissolving, broth-saturated sheet that carries the soup's flavour in every fold.

The broth is the addition that changes everything, and it is a proper broth — pork bones simmered 2-3 hours, skimmed, seasoned with fish sauce and a pinch of sugar — not a token splash of hot water. It must be clear, because the translucent sheets show every cloud and every impurity, and it must be flavourful enough to season the rice sheets without any dipping sauce on the side, because there is no dipping sauce. The broth IS the sauce.

The toppings are Tuyên Quang's additions: minced pork and wood-ear mushroom (the standard bánh cuốn filling, here scattered over the sheets rather than rolled inside), fried shallots (generous, golden, sweet-crunchy), and — the provincial touch — a few leaves of rau mùi tàu (sawtooth coriander) and a crack of black pepper. Some stalls add a slice or two of chả lụa for tradition's sake; others add a poached quail egg. The bowl is assembled in 30 seconds and eaten in 5 minutes, and it is the morning bowl that Tuyên Quang's market workers, schoolteachers and government clerks eat six mornings out of seven.

The format — dry sheets + hot broth = instant soup — is unique to Tuyên Quang and a few neighbouring provinces (Phú Thọ, Yên Bái), and it is unknown in Hanoi, where the suggestion of pouring broth over bánh cuốn would be received as heresy. But the format makes physical and culinary sense: the rice sheet is, after all, a noodle — a flat, thin, gelatinised-starch sheet identical in composition to a phở noodle, differing only in that it was steamed rather than boiled. Pouring broth over it is no stranger than pouring broth over phở, and the result — a silky, broth-saturated, translucent sheet that slides down the throat with the ease of a noodle but the delicacy of a dumpling — is arguably a better vehicle for a clear broth than any noodle in the Vietnamese canon, because its thinness means it absorbs more broth per gram than any thicker noodle can.`,
  ingredientSections: [
    {
      title: 'The bánh cuốn sheets',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'fresh bánh cuốn sheets (or make from scratch)',
          note: `Bought: fresh steamed rice sheets from a Vietnamese grocer's chiller, labelled "bánh cuốn" or "bánh ướt." They should be translucent, supple and smell of rice. From scratch: 200 g rice flour + 50 g tapioca starch + 400 ml water + pinch of salt + 1 tsp oil, blended smooth, steamed on oiled cloth stretched over a pot of boiling water, peeled after 2 minutes. The from-scratch version is thinner, more fragrant and more satisfying, but the bought version works.`,
        },
      ],
    },
    {
      title: 'The broth',
      items: [
        { amount: 800, unit: 'g', name: 'pork bones (neck, spine) + 1 chicken carcass or 500 g chicken wings', note: `The dual stock gives body (pork) and clarity (chicken). Blanch 5 minutes, rinse, restart in fresh water.` },
        { amount: 2.5, unit: 'L', name: 'water' },
        { amount: 1, name: 'yellow onion, halved and charred' },
        { amount: 15, unit: 'g', name: 'ginger, charred and bruised' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The toppings',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'minced pork, cooked',
          note: `Stir-fried with minced shallot, fish sauce and pepper until dry and crumbly — the same filling that goes inside a Thanh Trì bánh cuốn, here scattered on top.`,
        },
        { amount: 30, unit: 'g', name: 'dried wood-ear mushroom (mộc nhĩ), soaked, sliced thin', note: `Stir-fried briefly with the pork — the crunch inside every bánh cuốn filling.` },
        { amount: 4, unit: 'tbsp', name: 'fried shallots (hành phi), fresh-fried if possible' },
        { amount: 100, unit: 'g', name: 'chả lụa (steamed pork loaf), sliced thin (optional)' },
        { amount: 4, name: 'scallions, sliced' },
        { amount: 30, unit: 'g', name: 'ngò gai (sawtooth coriander), sliced' },
        { amount: 30, unit: 'g', name: 'coriander (ngò rí), chopped' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 3, name: 'bird\'s-eye chilies, sliced, in fish sauce' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the broth — clear, clean, 2.5 hours',
      description: `Blanch the pork bones and chicken 5 minutes. Drain, rinse, scrub the pot. Restart: bones, chicken, 2.5 L fresh cold water, charred onion and ginger. Bare simmer, lid ajar, 2-2.5 hours. Skim at 15, 30, 60 minutes.

Season in the final 30 minutes: fish sauce, sugar, salt. The broth must be: clear (the sheets are translucent and show every impurity), light-bodied (not heavy — the sheets are delicate and a heavy broth overwhelms them), and cleanly savoury (the broth replaces the nước chấm, so it must carry enough salt and umami to season the rice sheets without any additional sauce).

Strain. Pull any chicken meat from the carcass, shred, and set aside for the bowl.

The broth should taste like a gentler version of a phở broth — the same charred-onion-ginger spine, the same pork-bone body — but without the star anise and the spice pouch. Tuyên Quang's broth is deliberately un-spiced: ginger and onion only, because the rice sheet's mild flavour needs a broth that supports rather than competes.`,
      tip: `The broth's clarity is not just aesthetic — it is functional. A translucent bánh cuốn sheet in a clear broth looks like a silk veil in water: the broth shows through the sheet, the sheet shows through the broth, and the bowl reads as luminous and clean. The same sheet in a cloudy broth looks grey, murky and unappetising, because the turbidity of the broth adds a visual dirtiness to the sheet's translucence. Clarity is a taste expectation in the northern Vietnamese eye: a clear broth promises a clean flavour, and a cloudy one promises a muddled one. The obsessive skimming that produces a clear phở broth serves the same purpose here — it makes the bowl look like it will taste good before the spoon arrives.`,
    },
    {
      title: 'Cook the toppings and tear the sheets — rough pieces, not neat rolls',
      description: `PORK AND MUSHROOM: heat a tablespoon of oil, fry minced shallot 30 seconds, add the minced pork, break it into fine crumbles, cook 3-4 minutes until dry and no longer pink. Add the sliced wood-ear, a tablespoon of fish sauce, pepper. Stir-fry 1 minute. Set aside.

THE SHEETS: if using fresh bought bánh cuốn, peel the layers apart gently (they tend to stick). Tear each sheet into rough, irregular pieces — roughly 8 x 8 cm, not precise, not uniform. The rough edges are deliberate: they increase the surface area that contacts the broth, and they give the bowl a hand-torn, home-cooked character that the neatly rolled Thanh Trì version does not carry. Tuyên Quang's bánh cuốn chan canh is not a restaurant dish. It is a market bowl, and the torn sheets are the market's signature.

If making from scratch: steam each sheet on the cloth, peel, and set on an oiled surface in a loose, folded pile. Do not stack tightly — the sheets fuse and tear when pulled apart.`,
      tip: `The tearing rather than rolling is Tuyên Quang's philosophical break from Hanoi, and it is worth naming. Hanoi's bánh cuốn is rolled — neatly, precisely, each sheet wrapped around its filling into a smooth cylinder that lies on the plate like a white cigar. The rolling is a display of control: the sheet is thin enough to tear at a breath, and rolling it without tearing proves the cook's hand. Tuyên Quang tears the sheet — deliberately, roughly, without pretence — because the sheet is going into a broth where the roll would unravel anyway, and because the ragged edges absorb more broth than a smooth roll can. The tear is not laziness. It is a format decision that prioritises broth-absorption over visual control, and it is the decision that makes the dish a soup rather than a plated breakfast.`,
    },
    {
      title: 'Assemble — sheets in the bowl, broth over, toppings on, eat immediately',
      description: `Pile the torn sheets into four deep bowls — loosely, not packed, with folds and gaps that the broth will fill. The sheets should fill the bowl about two-thirds full.

Ladle the boiling-hot broth over — generously, enough to submerge the sheets. They drink the broth on contact: the gelatinised rice starch absorbs the hot liquid, the sheets soften from firm-translucent to silky-saturated, and the broth level drops visibly as the sheets swell.

Add a second, smaller ladle of broth to top up — the sheets have absorbed the first ladleful and the bowl needs liquid to be a soup.

Scatter the cooked pork-and-mushroom mixture over the top. Add shredded chicken if using. Lay the chả lụa slices alongside. Scatter fried shallots, scallion, ngò gai, coriander and pepper.

Serve with lime and the chili-fish-sauce saucer — though the broth should be seasoned enough that the saucer is optional rather than necessary.

Eat with chopsticks and spoon — the chopsticks lift the silky, broth-logged sheets (they are slippery and require the same gentle pinch as phở noodles), and the spoon carries the broth. Each mouthful: the sheet, now saturated, carrying a thin film of clear broth inside every fold, with the pork-and-mushroom crumble on its surface and the fried shallot's sweet crunch dissolving into the broth.

Eat within 5 minutes. The sheets absorb broth continuously — at 5 minutes they are perfectly saturated; at 10 they are swollen and pasty; at 15 they have dissolved into the broth as a starchy sludge. The window is the same window every thin rice-starch product in this collection races: the starch is thirsty, the broth is available, and the absorption runs until equilibrium, which is mush.`,
      tip: `Bánh cuốn chan canh is the format that reveals what bánh cuốn actually is — a noodle. Not a dumpling, not a crêpe, not a wrapper: a noodle, made from the same rice starch as phở and bún and hủ tiếu, processed differently (steamed on cloth rather than extruded or cut) but chemically identical. Pouring broth over it and eating it as a soup is the format that makes this identity visible, because in the soup the sheet behaves exactly like a phở noodle: it absorbs the broth, it carries the broth to the mouth, it softens over time, and it races the same clock. Hanoi hid this identity by serving the sheet dry, on a plate, with a dipping sauce — a format that emphasised the sheet's delicacy and obscured its noodle-ness. Tuyên Quang exposed it by putting the sheet in a bowl and pouring broth over it — and in doing so created a noodle soup from a breakfast plate, using nothing but the insight that the sheet and the broth were always meant to meet.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
