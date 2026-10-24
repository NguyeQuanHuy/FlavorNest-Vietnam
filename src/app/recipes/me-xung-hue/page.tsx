'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'me-xung-hue',
  title: `Mè Xửng (Huế Chewy Sesame Candy)`,
  subtitle: `A translucent amber candy — sugar, maltose and a tapioca slurry cooked into a gel that bends before it yields — studded with peanuts and armoured on both faces in toasted sesame. Cut into small squares, wrapped, and paired with bitter tea: Huế's answer to Hà Tĩnh's cu đơ, and the soft-spoken counterargument to it.`,
  category: 'DESSERT',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 8,
  heroImage: '/images/recipes/me-xung-hue.jpg',
  intro: `Every Vietnamese province with self-respect has a candy that travels — the sweet you buy at the bus station to prove where you went — and the centre of the country has two, sixty kilometres apart, that between them stake out the entire territory of what sugar can be. Hà Tĩnh's kẹo cu đơ is the brittle: molasses taken to soft-crack, snapping between crackers. Huế's mè xửng is the chew: a pale amber, faintly translucent candy that folds under the thumb, stretches slightly at the tooth, and releases its sweetness slowly through a landscape of toasted sesame and peanut. Same peanuts, same sesame, same tea on the table — and two completely different candies, separated by nothing but chemistry and temperament. Nobody who knows both cities is surprised about which one made which.

Mè xửng is a product of Huế's shop-house confectionery trade — the small family firms clustered around the old commercial streets, of which Thiên Hương, founded in the imperial twilight, remains the famous name — and it was built from the start as a gift and a tea companion rather than a street snack. Mè is sesame; xửng is usually glossed as the soft, pliable, slightly springy quality the candy is judged on. The classic form is a thin slab pressed between full coats of sesame, cut into small squares and wrapped individually in paper or cellophane: portable, shelf-stable for weeks, and sized for the specific act it was designed around, which is being eaten in twos and threes beside a pot of aggressively bitter tea while conversation happens. There is also a fried-crisp variant (mè xửng giòn, puffed and brittle) and a soft one wrapped with a rice-paper skin — but the chewy square is the canon, and the one every Huế suitcase carries.

The chew itself is a deliberate act of sugar sabotage, and it is worth understanding because it is the exact inverse of the cu đơ. A brittle is what sugar does when you let it: boil syrup to soft-crack, exclude interference, and it sets glassy and snaps. Mè xửng refuses this twice. First, a heavy dose of maltose syrup crowds the sucrose so it can never crystallize — the same anti-graininess insurance as the cu đơ. But second, and decisively, a slurry of tapioca starch is cooked into the syrup, and the gelatinized starch threads itself through the sugar as a permanent elastic network. The finished candy is not a sugar glass at all; it is a starch-sugar composite gel — a cousin of Turkish delight, of Japanese gyūhi, of every chewy candy on earth — cooked only to the soft-ball range because the starch, not the water loss, is doing the structural work. Where the cu đơ maker fights for brittleness against moisture, the mè xửng maker builds suppleness in on purpose and then armours it in sesame so it can be handled.

That sesame armour is the last piece of design: both faces of the slab are pressed thick with toasted seeds — white classically, black in some houses, both in the showier ones — which perfume every bite, add the crackle a chewy candy otherwise lacks, and, entirely practically, make a sticky gel handleable and wrappable. A square of mè xửng, a sip of trà nóng bitter enough to make the point, another square: the candy was engineered for that alternation, sweetness and tannin scrubbing each other in turns, exactly as the cu đơ was engineered for its own tea sixty kilometres north. Two provinces, one theory of dessert, two opposite proofs — and the correct position, obviously, is a tin of each.`,
  ingredientSections: [
    {
      title: 'The candy base',
      items: [
        { amount: 250, unit: 'g', name: 'granulated sugar' },
        {
          amount: 150,
          unit: 'g',
          name: 'mạch nha (maltose syrup)',
          note: `A heavy dose — more, proportionally, than the cu đơ uses — because in a chewy candy the maltose is not just anti-crystallization insurance but part of the soft texture itself. From tubs at Vietnamese/Chinese grocers; glucose syrup substitutes. Honey does not — it breaks down and browns at candy temperatures.`,
        },
        {
          amount: 50,
          unit: 'g',
          name: 'tapioca starch (bột năng), slaked in 150 ml cold water',
          note: `The soul of the chew. Cooked into the syrup, the gelatinized starch forms the permanent elastic network that makes this a supple gel instead of a brittle glass. Measure it; the starch-to-sugar ratio IS the texture.`,
        },
        { amount: 100, unit: 'ml', name: 'water (for the initial syrup)' },
        { amount: 1, unit: 'tbsp', name: 'lime juice' },
        { amount: 0.25, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'coconut oil or neutral oil', note: `Kneaded in at the end — gloss, suppleness, and release from the pan.` },
        { amount: 0.5, unit: 'tsp', name: 'vanilla or a drop of pomelo-flower water (optional)', note: `The pomelo note is the old Huế perfume, if you can find it.` },
      ],
    },
    {
      title: 'The nuts and the armour',
      items: [
        {
          amount: 120,
          unit: 'g',
          name: 'roasted peanuts, skinned, halved or coarsely broken',
          note: `Roasted fresh (see the cu đơ recipe — same nut, same standard) and kept warm so they do not crash the syrup temperature.`,
        },
        {
          amount: 150,
          unit: 'g',
          name: 'white sesame seeds, toasted, for the two-sided coat',
          note: `Toasted in a dry pan until golden and popping, in generous excess — the slab is pressed into a full bed of them on both faces. Substitute a third black sesame for the two-tone Huế look.`,
        },
        { amount: 1, name: 'sheet of parchment + a rolling pin, plus a tray about 20 x 30 cm' },
      ],
    },
    {
      title: 'To serve and store',
      items: [
        { amount: 1, name: 'pot of strong hot tea (trà nóng), bitter', note: `The other half of the candy. Mè xửng without tea is a monologue; with it, an alternation — sweet, tannin, sweet — that the confectioners of Huế designed around. Same doctrine as the cu đơ, softer voice.` },
        { amount: 30, name: 'squares of cellophane or waxed paper, for wrapping (optional)', note: `Individually wrapped is the traditional gift format, and it keeps the squares from rediscovering each other in the tin.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Toast the armour, warm the nuts, line the tray — sugar waits for no one',
      description: `Toast the sesame in a dry pan over medium heat, stirring constantly, until golden, fragrant and popping — 4-5 minutes. Spread half of it in an even, complete bed across a parchment-lined tray. Keep the rest beside the stove.

Have the peanuts roasted, skinned, broken, and sitting somewhere warm. Slake the tapioca in its cold water and leave the spoon in it — it settles into concrete in minutes and must be re-stirred at the moment of use.

Everything within arm's reach before the pot goes on: this recipe's active window, from starch-in to slab-pressed, is about six minutes, and molten starch-sugar gel is even less patient than plain caramel because it thickens as it cools.`,
      tip: `Pressing the hot candy directly onto a pre-laid bed of sesame — rather than sprinkling seeds on afterwards — is the trick that produces the full, tiled, professional coat. The gel's surface is at maximum tack in its first seconds on the tray; it grabs a complete layer of seeds on contact, and the second face gets the same treatment under the rolling pin. Seeds scattered onto a cooling slab sit on it; seeds the slab lands on are in it. The order of operations is the difference between armour and garnish.`,
    },
    {
      title: 'Boil the syrup clean, then stream in the starch — and switch to stirring for your life',
      description: `In a deep, heavy pot, dissolve the sugar in the 100 ml water with the maltose, lime juice and salt over medium heat, washing down the pot walls once with a wet brush. Boil the clean syrup 4-5 minutes, to around 115°C — thick, glossy, large slow bubbles.

Re-stir the tapioca slurry and stream it in while stirring hard and constantly. The pot will seize, turn cloudy, then — over 3-4 minutes of continuous stirring on medium-low — clear again into a thick, translucent, stretchy amber mass that pulls away from the pot walls and climbs the spoon.

Cook and stir 2-3 minutes past the clearing, until a small blob dropped into cold water sets into a soft, chewy, holdable ball — soft-ball stage, not a whisper more. Stir in the oil and vanilla.`,
      tip: `Here is the fork in the road between the two candies of central Vietnam, in one sentence of chemistry: the cu đơ boils to soft-crack (≈135°C, ~5% water) and lets sucrose approach glass, while mè xửng stops at soft-ball (≈115°C, ~15% water) because the gelatinized tapioca — not water loss — is its structure. The starch network traps that generous remaining water permanently, plasticizing the sugar into a chew that never hardens and never crystallizes (the maltose sees to that). Same pantry, same fire, one variable — starch in or starch out — and two opposite candies. Texture is a decision; this pot is where it gets made.`,
    },
    {
      title: 'Fold in the peanuts and press the slab — six hot-handed minutes',
      description: `Off the heat, fold the warm peanuts through the mass in a dozen strokes — it will resist; persist — until evenly distributed.

Scrape the whole mass onto the sesame bed on the tray. Scatter the reserved sesame thickly over the top, lay parchment over that, and roll firmly with the rolling pin into an even slab 1-1.5 cm thick, pressing the seeds into both faces and chasing the mass into the corners.

Work fast and press hard: the gel is rollable for perhaps five minutes, leathery for five more, and set after that. An uneven slab cannot be re-rolled — it can only be admired as rustic.`,
      tip: `The rolling is doing more than shaping: pressure while the gel is hot beds the sesame physically into the surface and compacts the starch-sugar network around the peanuts, so the finished square is one integrated composite rather than nuts in a matrix wearing loose seeds. It is the mè xửng version of the cu đơ's palm-press — the lamination step every layered candy has — and it is why a good square bends as a unit and a careless one sheds sesame like dandruff into the tea.`,
    },
    {
      title: 'Cool fully, cut with an oiled knife, wrap if gifting',
      description: `Cool the slab completely at room temperature, 45-60 minutes, until it is firm, supple, and peels cleanly off the parchment — it should bend a good few degrees before any thought of tearing.

Cut with a large oiled knife into small squares or rectangles, 3-4 cm — pressing straight down, not sawing, wiping and re-oiling the blade as it gums. Wrap individually in cellophane twists if the tin is travelling, which is the traditional format and the practical one.

Airtight at room temperature the squares keep 3-4 weeks, softening very slightly with time (the starch holding its water) rather than staling. Never refrigerate: the cold drives the starch toward retrogradation and the chew toward crumble — the same rule as the bánh gai, for the same molecular reason.`,
      tip: `The shelf life is the starch network's second job. In a brittle, ambient humidity is the enemy — absorbed water dissolves the glass surface into stickiness, which is why a cu đơ lives sealed between its crackers. In mè xửng the water is already inside, bound and managed by the gel, so the candy is nearly indifferent to humidity and travels serenely through a Vietnamese summer. Huế, a city of gift protocols and long visits, engineered its signature sweet for the suitcase and the ancestral altar shelf. The chew is charming; the stability is the business model.`,
    },
    {
      title: 'Serve two squares and a bitter pot — and taste the argument',
      description: `Serve the squares in a small dish beside strong, hot, genuinely bitter tea. The rhythm is fixed: a square, chewed slowly while the sesame perfume opens; a sip of tea that scrubs the sweetness clean; the next square landing on a reset palate. Two or three squares per person per pot is the calibrated dose.

If you have made both central candies, serve them side by side once, with one pot of tea, and let the table run the comparison the two provinces have been running for a century: snap against chew, molasses against pale sugar, field register against shop-house register.

Then note where every element repeats — the peanuts, the sesame, the maltose, the tea doctrine, the gift format, the wet-climate engineering — and where exactly one variable differs. That is the pleasure of eating a region rather than a dish: the pantry stays constant, and the temperament does the cooking.`,
      tip: `Set beside each other, cu đơ and mè xửng make the tidiest possible closing argument for this whole central-Vietnam survey: two poor, weather-battered provinces, one shared pantry of cane sugar, rice starch, peanuts, sesame and tea — and from it, Hà Tĩnh built something that shatters and Huế built something that yields. Every collection in this series has found the region's character in its techniques; here it is in a candy tin. The brittle is a field worker's food: loud, immediate, eaten standing. The chew is a mandarin's: patient, wrapped, eaten while talking. Chemistry gave them the options. Temperament chose.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
