'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'nem-bui-bac-ninh',
  title: `Nem Bùi (Ninh Xá Village Pork Roll in Fig Leaf)`,
  subtitle: `Boiled pork, toasted rice powder, shredded pork skin and galangal — rolled not in rice paper but in the young fig leaf of the village hedge, so the wrapper is astringent and edible and the roll tastes of the leaf before it tastes of the pig. The nem of one village in Bắc Ninh, made for quan họ singing festivals, and eaten standing between songs.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '1 hr 15 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/nem-bui-bac-ninh.jpg',
  intro: `Bắc Ninh is the province of quan họ — the antiphonal love duets sung between paired villages across the Cầu river, UNESCO-inscribed, centuries old, and still performed at every spring festival in the province. And wherever quan họ is sung, nem Bùi is eaten. The nem belongs to a cluster of villages in Tiên Du district — Ninh Xá, Bùi Xá, the old craft hamlets along the river — and it is made specifically for the festival circuit: a hand-held, leaf-wrapped, room-temperature roll designed to be eaten standing, between songs, with rice wine, by singers whose hands must be free to gesture and whose mouths must be free to sing, and which therefore cannot require a table, a plate, a bowl, a spoon, or any more attention than a single bite followed by a sip.

The roll is the simplest construction in the northern nem family, and its simplicity is its intelligence. Boiled pork — belly or leg, with its fat — is sliced thin and tossed with thính, the roasted rice powder that appears in every gỏi and every nem chua across the country. Bì — shredded boiled pork skin — is tossed with more thính and a little seasoning. Galangal is julienned fine. A few slices of boiled pork, a pinch of bì, a thread of galangal, and a leaf of rau thơm or tía tô are laid on a young fig leaf — lá sung, the same astringent, faintly furry leaf that Hà Tĩnh wraps around its gỏi cá and Huế wraps around its vả trộn — and rolled into a tight cylinder about the size of a thumb. No rice paper. No bánh tráng. The fig leaf IS the wrapper, and it is eaten with the roll, its mild tannin and green bitterness cutting the pork fat and the thính's nuttiness in the same way green banana cuts fried fish on every Delta table. The leaf is not packaging. It is the condiment that carries the food.

The thính is doing its usual three jobs — drying the surface, preventing clumping, adding toasted depth — but in nem Bùi it also does a fourth: it is the seasoning. There is no dipping sauce. No nước chấm, no mắm tôm, no tương. The roll is eaten as-is, straight from the hand, and the thính's toasted-rice nuttiness plus the salt already in the pork and the bì is all the seasoning it gets. This is not an oversight. It is the festival format: a roll dipped in sauce requires a saucer, and a saucer requires a table, and a table requires sitting down, and sitting down is what you do after the singing is over. Nem Bùi is the food of the standing interval — between sets, between songs, between cups of rượu — and it is complete in the hand.

The galangal deserves its own sentence because it is doing in this roll what it does across every raw and room-temperature pork preparation in the north: its sharp, piney, faintly medicinal bite cuts directly through the richness of cold pork fat and resets the palate with each chew. The north uses galangal where the centre uses lemongrass and the south uses lime — different aromatics, same function, same reason: cold fat needs a volatile counter, and each region reaches for the one that grows in its garden. In Bắc Ninh, that is galangal, and it is as fixed a part of this roll as the fig leaf and the thính.`,
  ingredientSections: [
    {
      title: 'The pork',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'pork belly or leg, skin on, in one piece',
          note: `Boiled, chilled, sliced thin — the full cross-section, skin-fat-lean. The fat is the substance of the roll; lean pork alone makes a dry, austere, joyless nem that no one reaches for twice between songs.`,
        },
        { amount: 1, name: 'shallot, halved' },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
        { amount: 1, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The bì (pork skin in toasted rice powder)',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'pork skin (bì heo)',
          note: `Boiled 25 minutes, chilled in iced water, shaved into fine ribbons, tossed with thính. The same bì this collection has dressed five times across five provinces — same technique, same three functions (chew, crunch, dry carrier), here in its northern homeland.`,
        },
        { amount: 2, unit: 'tbsp', name: 'thính (roasted rice powder)' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 0.5, unit: 'tsp', name: 'sugar' },
      ],
    },
    {
      title: 'The thính and aromatics',
      items: [
        {
          amount: 4,
          unit: 'tbsp',
          name: 'thính (roasted rice powder), freshly made',
          note: `Raw rice dry-toasted 8-10 minutes to deep gold and ground coarse. The seasoning, the texture, and the anti-clump agent — all in one powder. Stale thính is dust; fresh is perfume. Make it the morning of.`,
        },
        {
          amount: 30,
          unit: 'g',
          name: 'young galangal (riềng non), finely julienned',
          note: `Young galangal — paler, more tender, less fibre than mature — is the aromatic the north puts in every cold-pork roll and every nem. Its piney-citrus bite is the palate-reset that makes the twentieth roll taste as vivid as the first. Ginger is not the same thing and does not do the same job here.`,
        },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
      ],
    },
    {
      title: 'The wrapper and herbs',
      items: [
        {
          amount: 40,
          name: 'young lá sung (fig leaves), soft and pale, stems trimmed',
          note: `The wrapper, the condiment and the palate-cleanser in one. Young, pale, faintly furry leaves that fold without cracking and eat without toughness. The same leaf this collection has used in Hà Tĩnh's gỏi cá and Huế's vả trộn — the northern-to-central astringent wrapper that appears wherever cold pork meets the hand. In Europe: young garden-fig leaves (Ficus carica), briefly blanched; young grape leaves are the fallback.`,
        },
        { amount: 20, name: 'leaves of tía tô (perilla) or rau thơm (mixed herbs)', note: `One herb leaf per roll, laid on the fig leaf before the filling. Perilla is the classic Bắc Ninh choice — its anise-cumin note against cold pork and thính is the province's flavour signature.` },
      ],
    },
    {
      title: 'The table',
      items: [
        { amount: 1, name: 'bottle of rượu nếp (sticky-rice wine)', note: `Structural, not optional. Nem Bùi is a mồi nhậu dish and a festival food, eaten with rice wine between songs. The wine is the meal's liquid; the nem is its solid. Neither is complete without the other.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Boil the pork and the skin — then chill hard',
      description: `Put the pork belly in cold water with the shallot, ginger and salt. Bring to a bare simmer and poach 35-40 minutes for a 5 cm thick piece. A skewer should pass through with no resistance and the juice should run clear.

Boil the pork skin separately, 25 minutes, until a fingernail leaves a deep dent.

Lift both straight into iced water for 10 minutes. The shock firms the fat and the collagen and makes paper-thin slicing possible.

Slice the pork across the grain as thinly as your knife allows — translucent at the edges, each slice showing its stripe of fat. Shave the skin into the finest possible ribbons.

Everything must be cold. Warm pork tears under the blade, warm skin shreds to mush, and a warm nem at a festival is a nem that sweats inside its leaf and turns the thính to paste.`,
      tip: `Cold pork for a cold roll is not a serving preference — it is the entire engineering basis of the dish. The roll is eaten at room temperature, hours after assembly, standing in a crowd; if the pork goes in warm, its residual heat creates condensation inside the fig-leaf wrap, the thính absorbs that moisture and turns from dry-nutty to wet-pasty, and the roll that was crisp-textured at noon is soggy by the third song. The ice bath is not a knife convenience. It is the shelf-life guarantee.`,
    },
    {
      title: 'Toss pork and bì with thính — the seasoning step, because there is no sauce',
      description: `Toss the sliced pork with 2 tablespoons of the thính and the black pepper until every slice wears a fine matte coat. Separately, toss the shredded skin ribbons with the remaining thính, salt and sugar until separate and dry.

Taste a slice of pork on a fig leaf with a thread of galangal — the test bite, in the format the roll will be eaten. It should be savoury, nutty, faintly sweet from the fat, with the galangal arriving sharp and piney at the finish. If the salt is light, toss with a pinch more. If the thính is dusty rather than fragrant, it was not toasted enough — make a fresh batch.

There is no dipping sauce to correct anything at the table. The roll must be right when it leaves the tray, because the next thing it touches is a mouth.`,
      tip: `The absence of a dipping sauce is the design constraint that makes the thính do quadruple duty. In every other pork-roll format in this collection — the Trảng Bàng gỏi cuốn, the Kim Long bánh ướt — the sauce supplies the salt, the acid and the aromatic finish. Here the thính supplies the salt (it was toasted with none, so the pork's own seasoning and the bì's salt are the entire sodium budget), the toasted depth (in place of a sauce's fermented depth), and the textural coat (in place of the sauce's wet cling). Removing the sauce did not simplify the roll. It transferred the sauce's jobs to the powder, and the powder had to be good enough to do them all.`,
    },
    {
      title: 'Roll in fig leaf — tight, thumb-sized, one bite',
      description: `Lay a young fig leaf flat, glossy-side down. Place one perilla leaf (or herb leaf) in the centre. On it, lay 2-3 thin slices of thính-coated pork, a small pinch of bì, and 3-4 threads of galangal.

Roll tightly from one edge, tucking as you go, into a cylinder about the size of a thumb — 6-7 cm long, 2 cm thick. The leaf should wrap once and a half around the filling with no gap and no flap.

The roll should feel firm in the hand, the filling should not slide inside the leaf, and the leaf's rough side should face out for grip. A loose roll falls apart at first bite; a tight roll holds to the last.

Roll all 30-40 pieces. Arrange on a tray in neat rows. They hold 3-4 hours at cool room temperature without deteriorating — which is the festival window, and which is why the dish exists in this format.`,
      tip: `The fig leaf rolled around the filling is doing the same four jobs it did in every previous appearance in this collection — non-stick surface, flavour agent, palate-cleanser, plate — plus a fifth unique to this dish: it is the structural shell that holds a sauceless, plateless, standing-format roll together through an afternoon of festival handling. Rice paper would soften and tear. Banana leaf would not be eaten. Lettuce would wilt. The fig leaf grips its own roll, resists humidity for hours, and contributes a tannin bite that replaces the acid a sauce would have supplied. It is the most complete wrapper in the Vietnamese canon: it does everything, and it costs a trip to the hedge.`,
    },
    {
      title: 'Eat standing, between songs, with rice wine — the format is the recipe',
      description: `Serve the tray at room temperature, rows neat, with a cup of rice wine per person. No plate, no bowl, no cutlery, no sauce.

Pick up a roll. Eat it in one bite — the leaf, the pork, the bì, the galangal, the thính, the perilla, together, in one compression of the jaw. Chase it with a sip of rice wine. Reach for the next.

The correct setting is a quan họ festival, standing in a courtyard or on a riverbank, between sets, with the singers on one side and the wine on the other. The second-correct setting is any gathering where people are standing, talking, and need food that fits in one hand and finishes in one bite. The incorrect setting is a formal dinner table with plates, which is like reading a love song as a legal document — technically possible and entirely beside the point.

The tray empties, the wine empties, the singing starts again, and the nem Bùi has done what it was built to do: feed a festival without interrupting it.`,
      tip: `Nem Bùi is the purest expression of a design principle this collection has found in every festival and mồi-nhậu dish from the Mekong to the mountains: the format IS the flavour. A roll eaten standing, in one bite, between songs, with wine, tastes different from the same ingredients arranged on a plate with a fork — not because the chemistry changes but because the context changes the attention. A one-bite food demands that every component register in the same second; a plated food can unfold across a minute. The nem's compression — all flavours simultaneous, no sequence, no lingering — is what makes its simplicity read as completeness rather than as poverty. Five ingredients, one leaf, one bite, one breath of galangal and toasted rice, and the hand is already reaching for the wine. Bắc Ninh built a food for the pause between songs, and the pause is exactly as long as the bite.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
