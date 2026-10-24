'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'oc-buou-xao-bo-toi-tay-ninh',
  title: `Ốc Bươu Xào Bơ Tỏi (Butter-Garlic Apple Snails, Tây Ninh Style)`,
  subtitle: `Giant apple snails from the Tây Ninh paddies, purged three days in chili water, trimmed of their gut sac, and stir-fried ferociously fast in foaming butter with a reckless amount of garlic, black pepper and a splash of beer. The snail dish Saigon drives an hour to eat at its source, and the reason is the snail, not the butter.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '3 days',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/oc-buou-xao-bo-toi-tay-ninh.jpg',
  intro: `The ốc bươu — the golden apple snail, Pomacea canaliculata — is an invasive species in every country where it has arrived uninvited, including Vietnam, where it showed up in the 1980s as an aquaculture import and promptly escaped into the rice paddies of every province in the south. It eats young rice seedlings with an efficiency that qualifies as an agricultural emergency, and every farmer in the Mekong Delta and the southern lowlands knows it as a pest. Tây Ninh's response to the emergency was to eat it, thoroughly, and the dish that resulted — ốc bươu xào bơ tỏi, apple snails fried in butter and garlic — is now famous enough that the pest has become a cash crop and the province that cursed it now farms it.

The snail itself is large — a mature shell the size of a fist, the animal inside yielding a substantial, dense, coiled muscle — and its flavour, when properly purged, is clean, sweet, faintly mineral and closer to abalone or conch than to the garden snail of French cuisine. The "when properly purged" is the entire gate between a good ốc bươu and a bad one, and the purging is the dish's real recipe, hiding behind the glamour of the butter. Apple snails are filter-feeders in warm, shallow, often muddy water, and their gut and mantle carry the signature of whatever field they lived in: silt, algae, geosmin, the full portfolio of paddy-bottom compounds. Three days in clean water spiked with chili — the same capsaicin-irritation trick this collection met with the Mekong ốc lác — starves the snail, empties its digestive tract, and firms the flesh by glycogen depletion. Then, after the shell is cracked open, the gut sac is trimmed away entirely, leaving only the muscular foot and the mantle: pure protein, clean as anything from the sea.

The butter is the Franco-Vietnamese collision that makes the dish sing, and it is worth being direct about its history: butter-and-garlic cookery entered Vietnamese snail culture from the French, who grilled their escargots in exactly this combination, and southern Vietnam adopted it without embarrassment or apology sometime in the mid-twentieth century, because it works, and because a cuisine that can absorb phở from China and bánh mì from France was never going to flinch at butter. What Tây Ninh added was the beer — a splash of cheap lager deglazing the butter-garlic fond in the wok — and the chili, because the south adds chili to everything the French left plain. The result is neither French nor traditionally Vietnamese but specifically southern-Vietnamese-post-colonial: a snail dish that smells like a Parisian bistro and tastes like a Tây Ninh roadside.

The stir-fry itself takes three minutes, and it is the fastest cooking in this collection's snail file. The purged, trimmed snails go into a smoking-hot wok with foaming butter, a mountain of sliced garlic and a snowfall of cracked pepper, and they are tossed, hard, for ninety seconds — then the beer hits the pan and everything sizzles into a glossy, emulsified sauce that clings to the snail like a beurre blanc that went to night school. Scallion greens go in off the heat. The snails are tipped onto a plate, the residual sauce is scraped over them, and the first one is eaten with a toothpick, standing, with a cold beer in the other hand, within thirty seconds of the wok going quiet.`,
  ingredientSections: [
    {
      title: 'The snails',
      items: [
        {
          amount: 2,
          unit: 'kg',
          name: 'live ốc bươu (golden apple snails), in shell',
          note: `Large, heavy, with the operculum sealed tight — a living snail retracts and seals when touched; a dead one does not, and a dead snail in a shared wok is a hazard (see the Mekong ốc lác entry). In Europe: live apple snails are not commonly sold, but frozen, pre-cooked, shelled Vietnamese ốc bươu are widely available in Asian grocers — already purged, already trimmed, needing only a thaw and a hard drain. Use 600 g shelled meat and skip to step 3. Fresh escargots (Helix pomatia or aspersa) from a specialist supplier, purged and shelled, are a genuine and excellent substitute — smaller, denser, and more conventionally French, but the butter-garlic treatment is their birthright anyway.`,
        },
        { amount: 3, name: 'red chilies, crushed (for the purging water)' },
        { amount: 1, unit: 'tbsp', name: 'salt (for the purging water)' },
      ],
    },
    {
      title: 'The stir-fry',
      items: [
        {
          amount: 80,
          unit: 'g',
          name: 'unsalted butter',
          note: `Real butter, unsalted, and more than feels reasonable for the quantity of snail. The butter is doing three jobs: cooking medium, emulsion base, and sauce. Margarine and oil are not substitutes for any of the three. Salted butter works but adjust the fish sauce downward.`,
        },
        {
          amount: 10,
          name: 'cloves garlic, sliced thin — not minced',
          note: `Sliced, so the pieces toast in the butter and stay as crisp, golden slivers in the finished dish rather than dissolving to paste. This is a garlic-forward dish and ten cloves is not excessive; it is the baseline.`,
        },
        {
          amount: 2,
          unit: 'tsp',
          name: 'coarsely cracked black pepper',
          note: `Cracked coarse so it lands on the tongue as individual points of heat rather than a flat background burn. The pepper is the heat here, not the chili — the chili supplies aroma and a little warmth, the pepper supplies the bite.`,
        },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        {
          amount: 80,
          unit: 'ml',
          name: 'beer (any cheap lager)',
          note: `The Tây Ninh signature. It deglazes the fond, its carbonation lifts the butter into a frothy emulsion, and its malt sweetness rounds the garlic. The alcohol burns off in seconds; the flavour stays. Do not substitute wine — too acidic, too dominant, and the wrong cultural register entirely.`,
        },
        { amount: 1, unit: 'tbsp', name: 'oyster sauce (optional)' },
        { amount: 3, name: 'scallions, cut in 3 cm lengths' },
      ],
    },
    {
      title: 'The table',
      items: [
        { amount: 20, name: 'toothpicks or small forks', note: `The utensil, as always with snails. In Tây Ninh: thorns from the nearest citrus tree.` },
        { amount: 30, unit: 'g', name: 'rau răm, whole sprigs', note: `The standing partner to every mollusc in Vietnam, here as always.` },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 1, name: 'cold beer per person, minimum', note: `This is a bia hơi dish — eaten standing, on low stools, at dusk, with draught beer. The butter-garlic-pepper profile was designed for cold lager and the pairing is not accidental.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Purge three days — same protocol as the Mekong snails, same patience',
      description: `Put the live snails in a wide basin of cool clean water with the crushed chilies and salt. Change the water completely every 12 hours, rinsing the snails each time. Three days minimum.

Look at the basin floor after each change: the first day's sediment will be thick and dark; by the third change it should run nearly clear. That clearing is the doneness signal.

On the third day, scrub the shells with a brush, rinse, and check every snail: touch the operculum — it must twitch and retract. Discard any that do not respond, any cracked shells, and any that smell of ammonia.

This is the recipe. Everything after it is three minutes of butter. Skip the purge and no amount of garlic will hide the paddy in the snail.`,
      tip: `The purge here is identical in principle to the Vĩnh Long ốc lác but longer, because the apple snail is a larger animal with a proportionally larger digestive tract and a longer gut passage time. The capsaicin in the chili water irritates the mantle into more vigorous contraction, accelerating voiding — it is not folklore, it is measurable in the sediment — and the starvation metabolises the snail's glycogen reserves, which firms the muscle and concentrates the free amino acids that make purged snail sweet. Three days sounds like a lot of waiting; it is, in practice, a basin in the corner of the kitchen that asks for five minutes of attention twice a day. Patience is the ingredient and it cannot be bought at any price the day you want to cook.`,
    },
    {
      title: 'Crack, extract, trim — keep only the muscle',
      description: `Crack each shell with the back of a heavy knife or a nutcracker — a controlled tap at the apex, not a smash. Pull the whole animal out in one coil. With a small knife, cut away and discard the visceral sac (the dark, soft mass at the top of the coil — liver, gut, reproductive organs) and retain only the muscular foot and the firm mantle.

Rinse the trimmed meat briefly, drain, and pat dry. It should be pale, firm, clean-smelling and faintly sweet — a piece of pure muscle with no trace of the field.

Dry it well. Wet snail in hot butter spatters violently and steams instead of searing, and a steamed snail is a rubbery one. Paper towels, pressed hard, both sides.`,
      tip: `Trimming the visceral sac is a non-negotiable food-safety step for any wild-caught freshwater snail, and the reason is parasites — specifically rat lungworm (Angiostrongylus cantonensis) and various liver flukes, whose intermediate stages can reside in the snail's digestive and reproductive tissues. The muscular foot, fully cooked, is safe; the visceral organs are the risk, and removing them reduces it to near zero. Every Vietnamese ốc preparation that starts from whole raw snails includes this trim, and the trim is why a three-minute stir-fry is sufficient: you are cooking pure muscle with no risk tissue left in it. Leave the sac in and you are gambling with a parasite that heat may not fully reach in three minutes. Don't gamble.`,
    },
    {
      title: 'Three minutes of butter — the fastest cooking in the snail file',
      description: `Heat a wok over the highest flame you have until it just begins to smoke. Drop in the butter — it will foam violently — and immediately add the sliced garlic. Fry 30-40 seconds, stirring, until the garlic is pale gold and fragrant but nowhere near brown.

Add the snail meat in one batch, the cracked pepper, sliced chili, fish sauce, sugar and oyster sauce. Toss hard and constantly for 90 seconds — the snails should sizzle aggressively, pick up brown edges, and smell of toasted garlic and butter.

Pour in the beer. It will erupt in foam and steam — stand back, then lean in and scrape the fond off the wok bottom as the beer reduces, 30-40 seconds, into a glossy, emulsified, golden sauce that clings to every snail.

Off the heat: throw in the scallions, toss twice, and tip the entire contents onto a plate immediately. Do not hold the wok. Do not wait for a garnish. The difference between a snail that is tender-crisp and one that is rubbery is about twenty seconds past the three-minute mark, and the wok is still cooking after the flame goes off.`,
      tip: `The beer deglaze is the moment the dish becomes a sauce rather than a stir-fry, and the mechanism is emulsification. The wok fond — browned butter solids, caramelised garlic, Maillard products from the snail surface — is dissolved by the beer's water and alcohol; its carbonation whips air into the butter fat; and the rapid reduction concentrates everything into a thick, frothy, golden emulsion that coats the snails the way a beurre blanc coats a piece of fish. The same physics governs every deglaze in French cooking; the beer simply brings malt sweetness and carbonation where wine would bring acidity and tannin. It is the single most Franco-Vietnamese moment in this entire collection, and it happens in forty seconds.`,
    },
    {
      title: 'Eat with toothpicks, rau răm, lime and beer — standing, immediately',
      description: `Squeeze lime over the plate. Scatter rau răm sprigs alongside. Set out the toothpicks. Open the beers.

Each snail is speared, dragged through the residual sauce on the plate, paired with a leaf of rau răm, and eaten in one bite. Then a sip of cold beer. Then the next snail. The rhythm takes about ninety seconds per snail and the plate empties in ten minutes, at which point someone either orders another plate or admits the evening is over.

Do not plate formally. Do not garnish beyond what is listed. Do not serve this on a tablecloth. Ốc bươu xào bơ tỏi is a roadside-stool, plastic-plate, cold-beer, elbow-on-the-table dish, and serving it with more ceremony than that is like putting a suit on a swimming pool — technically possible and entirely beside the point.`,
      tip: `The rau răm with snails completes the collection's catalogue of this one herb's standing pairings: with the Mekong ốc lác, with the Hà Tĩnh hến, with every clam and mollusc dish from coast to mountain, and now with a butter-fried apple snail at a Tây Ninh roadside. Rau răm's kesom aldehyde — the specific compound that gives it its soapy-peppery-citrus bite — binds to and masks the trimethylamine and sulfurous amines that all molluscs carry, and it does so more specifically than any other herb in the Vietnamese garden. The pairing is universal across the country because the chemistry is universal across the phylum: every snail, clam and mussel smells of the same compounds, and one herb answers them all. Vietnam found its mollusc herb and has not needed another. Rau răm is, in the end, not a preference. It is a solution.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
