'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'lau-ga-noi-la-cach',
  title: `Lẩu Gà Nòi Lá Cách (Fighting-Cock Hotpot with Premna Leaf)`,
  subtitle: `A tough, lean old fighting cock simmered ninety minutes into a broth of terrifying clarity, then set on the table over a flame with baskets of la cach — the aromatic premna leaf of the Mekong hedgerows — wilted in leaf by leaf as you eat.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '2 hr 15 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/lau-ga-noi-la-cach.jpg',
  intro: `Ga noi is the Vietnamese fighting cock, and in the Mekong Delta it is also — after its fighting career ends — a very serious ingredient. It is a bird bred for muscle: long-legged, lean to the point of gauntness, almost no subcutaneous fat, dense dark meat threaded with connective tissue, and a carcass that weighs half what a supermarket chicken weighs and tastes four times as much. It is also, cooked the way most of the world cooks chicken, close to inedible — tough, sinewy, chewy. The Delta answer is the only correct one: give it time in water. Ninety minutes at a bare simmer, and the very toughness that makes it a bad roast chicken makes it the best hotpot broth in Vietnam.

The chemistry is straightforward and the payoff is enormous. A working bird has high concentrations of collagen in its connective tissue and high myoglobin in its muscle. Collagen is tough at every temperature until, held between 75 and 85°C for a long stretch, it hydrolyzes into gelatin — which dissolves into the broth and gives it a body, a lip-coating richness, that no young chicken can produce because a young chicken has almost none. Meanwhile the myoglobin-dense dark muscle carries a far higher load of flavor compounds: nucleotides, free amino acids, and the sulfur and carbonyl compounds that make old birds taste of chicken rather than of nothing. A supermarket broiler is slaughtered at six weeks; it has no collagen worth converting and no time to have built flavor. Simmer one for ninety minutes and you get pale water with dry meat in it.

La cach — Premna serratifolia — is a shrub that grows in hedgerows and along canal banks throughout the Delta, and its leaves are the province's own aromatic. The flavor is genuinely hard to place: green and slightly bitter, with a warm medicinal edge somewhere between sage and young tea leaf, and a distinct herbal-astringent finish that scrubs fat off the tongue. It is used almost nowhere north of the Delta and it is the reason this hotpot tastes of Vinh Long specifically. The leaves go in raw, by the handful, dunked into the simmering pot at the table and eaten within twenty seconds — because their aromatic compounds are volatile and their bitterness deepens with cooking. A basket of la cach boiled into the broth at the start would make the whole pot medicinal. Dropped in leaf by leaf, they perfume each mouthful and vanish.

A hotpot in the Delta is not a course, it is an evening. The pot sits on a burner in the middle of the table, the broth stays at a simmer for two hours, and people eat, drink, talk, and add things — leaves, mushrooms, noodles, more leaves — at whatever pace suits them. The broth deepens as it goes; the last bowl, drunk plain after everyone has stopped eating, is the best liquid in the meal. This is a dish for a table with people around it, and it does not translate to a plate.`,
  ingredientSections: [
    {
      title: 'The bird',
      items: [
        {
          amount: 1.4,
          unit: 'kg',
          name: 'ga noi (fighting cock) or ga ta (free-range mature chicken), whole',
          note: `The older and tougher, the better. In Europe: ask a Turkish, Polish or halal butcher for a boiling fowl, a stewing hen, or a coq — a mature laying hen at 18+ months is exactly the right animal and costs less than a broiler. Do NOT use a standard supermarket chicken: it has no collagen to convert and the broth will be pale and thin no matter how long you simmer it. Chop through the bone into large hotpot pieces.`,
        },
        { amount: 2, unit: 'tbsp', name: 'coarse salt and 1 lime (for scrubbing)', note: `Rub the whole bird, inside and out, then rinse. Removes surface blood and the faint metallic note that mature birds carry.` },
        { amount: 40, unit: 'g', name: 'ginger, bruised and charred' },
        { amount: 2, name: 'yellow onions, halved and charred' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 20, unit: 'g', name: 'rock sugar' },
        { amount: 2, unit: 'tsp', name: 'salt' },
        { amount: 2.5, unit: 'L', name: 'water' },
      ],
    },
    {
      title: 'The aromatics',
      items: [
        { amount: 4, name: 'shallots, sliced' },
        { amount: 4, name: 'cloves garlic, sliced' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil' },
        { amount: 3, name: 'stalks lemongrass, bruised and knotted', note: `Bruised and left whole so the citral perfumes the broth without the fibrous stalk shedding into it.` },
        { amount: 2, name: 'red chilies, whole' },
      ],
    },
    {
      title: 'The table baskets',
      items: [
        {
          amount: 250,
          unit: 'g',
          name: 'la cach (premna leaf), leaves picked, washed, left whole',
          note: `The dish. Green, bitter-warm, medicinal-herbal — nothing else in the Vietnamese pantry tastes like it. Sold fresh at large Vietnamese groceries in Europe, sometimes frozen. If you truly cannot find it, a mix of fresh sage leaves and young mustard greens gestures at the bitter-aromatic profile, but be honest that you are making a different hotpot.`,
        },
        { amount: 200, unit: 'g', name: 'mustard greens (cai xanh), cut into lengths' },
        { amount: 200, unit: 'g', name: 'oyster and straw mushrooms' },
        { amount: 400, unit: 'g', name: 'fresh bun (rice vermicelli)', note: `Added to individual bowls, never to the pot — noodles in the pot release starch and cloud the broth for everyone.` },
        { amount: 2, unit: 'tbsp', name: 'fried shallots' },
      ],
    },
    {
      title: 'The dipping salt',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'muoi tieu chanh: salt, cracked black pepper, lime juice',
          note: `The correct dip for boiled chicken across all of Vietnam, and the only one for ga noi. Fish sauce would mask the bird; salt-pepper-lime sharpens it. Mix so it stays a wet paste, not a liquid.`,
        },
        { amount: 2, name: 'red chilies, pounded into the salt' },
        { amount: 20, unit: 'g', name: 'rau ram (Vietnamese coriander), chopped', note: `Scattered over the chicken pieces when they come out of the pot — the classic partner to boiled chicken in the south.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Scrub the bird, blanch the bones, char the aromatics',
      description: `Rub the chopped chicken with coarse salt and the cut lime, then rinse thoroughly. Blanch the pieces in boiling water for 4 minutes — a hard grey scum will rise — then drain and rinse each piece under cold running water until the water runs clear.

Meanwhile, char the halved onions and the bruised ginger directly over a gas flame or in a dry pan until blackened in patches and smelling sweet.

Skip the blanching and the broth will be permanently cloudy and taste faintly of blood. The scum is denatured hemoglobin and myoglobin released from the bone marrow, and once it disperses into a broth you cannot get it back out.`,
      tip: `Charring the onion and ginger is a Maillard step, and it is doing something raw aromatics cannot. High dry heat drives sugars and amino acids on the surface into hundreds of new compounds — pyrazines, furans, thiols — that read as roasted, sweet and deep. Raw onion in a long broth gives sharp sulfur; charred onion gives caramelized depth. This is the same principle behind the charred aromatics in pho, and it costs three minutes.`,
    },
    {
      title: 'Bloom the aromatics, then simmer the bird — 90 minutes at 85°C',
      description: `Heat the oil in a heavy pot, fry the shallots and garlic until fragrant and just golden, then add the drained chicken pieces and turn them in the oil for 3 minutes. Pour in 2.5 L of water, add the charred onion and ginger, lemongrass, whole chilies, fish sauce, rock sugar and salt.

Bring it up to the barest simmer and hold it there — the surface should shiver with an occasional bubble, around 85°C, never a rolling boil. Simmer 90 minutes, uncovered, skimming every 20 minutes.

The bird is ready when a chopstick pushed into the thigh meets no resistance but the meat still clings to the bone rather than falling off it. Broth should be a clear golden amber. If the pot boils hard at any point, the fat emulsifies into the liquid, the broth turns milky and greasy, and it will not clarify again.`,
      tip: `The 90 minutes at 85°C is the entire reason for using an old bird. Collagen hydrolyzes into gelatin at a useful rate only above roughly 70°C, and it needs sustained time — an hour and a half converts enough of it that the broth gains real viscosity and the tough connective tissue between muscle bundles softens into something that gives under the tooth. A young broiler simmered for the same time simply falls apart, because it had no collagen holding it together in the first place. Toughness is not a flaw here. It is the raw material.`,
    },
    {
      title: 'Taste and correct the broth — this is the only chance',
      description: `Fish out the onion, ginger and lemongrass and discard them; they have given what they have. Taste the broth on its own, hot, from a spoon.

It should be clean, savory-sweet, faintly gingered, with a rich mouthfeel that coats the lip — that coating is your gelatin and it means the simmer worked. Correct with fish sauce for salt, rock sugar for roundness. It should be seasoned slightly stronger than you want to drink it, because the leaves and mushrooms going in at the table will dilute it as the evening goes on.

Once the pot is on the burner in front of the guests, you cannot meaningfully reseason it. Do it now.`,
      tip: `Season a hotpot broth deliberately over-strength. Over two hours at the table, every basket of greens, mushrooms and leaves that goes in releases water and absorbs salt, and the broth drifts steadily blander. The Delta cook sends the pot out sharper than they want it, knowing exactly where it will land by the second hour. The last bowl of broth, drunk plain at the end, is the calibration target — and it should be the best thing in the meal.`,
    },
    {
      title: 'Set the pot on the table — and dunk the la cach leaf by leaf',
      description: `Transfer the broth and chicken to a hotpot vessel over a burner and bring it back to a lively simmer at the table. Set out the la cach, mustard greens, mushrooms, bun, dipping salt and rau ram around it.

Each person dunks a small handful of la cach into the simmering broth and lifts it out after 15-20 seconds, as soon as it goes limp and glossy dark green. Eat it immediately with a piece of chicken, dipped in the salt-pepper-lime.

Do not dump the whole basket of la cach into the pot. Boiled beyond a minute the leaves turn genuinely bitter and, worse, they release that bitterness into the shared broth for everyone. La cach goes in by the handful and comes out within twenty seconds. This is the rule that separates a Delta hotpot from a pot of boiled greens.`,
      tip: `The 20-second window is about volatiles versus tannins. La cach carries its aromatic character in volatile terpenoids that need only a brief hit of heat to release — but its bitterness comes from tannins and iridoid glycosides that leach out steadily with sustained boiling. Brief contact gives you the aroma and only a pleasant bitter edge. Sustained boiling gives you the tannins and none of the aroma, because it has already left the pot. Every aromatic leaf in Vietnamese cooking follows this rule; la cach is simply the most unforgiving.`,
    },
    {
      title: 'Eat over two hours — noodles in the bowl, never in the pot',
      description: `Work through the meal slowly. Chicken pieces come out of the pot, get scattered with rau ram, and are dipped in the salt-pepper-lime. Mushrooms go in and stay in — they improve the broth. Greens and la cach go in by the handful, continuously, as the evening goes on.

Put the bun in individual bowls and ladle broth over it. Never put noodles into the hotpot itself: they leach starch, the broth turns cloudy and gluey, and everyone at the table pays for it.

The final act, once the eating has stopped, is a bowl of the broth alone. It has been reducing and concentrating for two hours and taking flavor from everything that passed through it — that last bowl is the point of the whole exercise, and the Delta host will make sure you drink it.`,
      tip: `A hotpot broth is a moving target and a Delta table treats it as one — it is thinner and cleaner at the start, deepest and most complex at the end, and the meal is structured around that arc. This is the opposite of a Western soup, which is at its best the moment it leaves the kitchen. It also explains the fighting cock: a bird that gives everything up in twenty minutes would be exhausted by the first hour. Ga noi has enough in it to keep giving for two.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
