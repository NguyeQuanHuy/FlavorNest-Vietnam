'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'goi-ca-bong-song-lo',
  title: `Gỏi Cá Bỗng Sông Lô (Raw Bỗng Carp Salad with Toasted-Bone Sauce)`,
  subtitle: `A fish raised for five to ten years in the spring-fed ponds of Hàm Yên, sliced raw, firmed in lime, tossed in roasted rice powder — and dipped in chẻo, a sauce made from the fish's own bones, minced, toasted golden and pounded with peanuts. The mountain north's answer to the raw fish of the coast, and once a tribute dish carried downriver to kings.`,
  category: 'APPETIZER',
  difficulty: 'Hard',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/goi-ca-bong-song-lo.jpg',
  intro: `The cá bỗng is not a fish you buy so much as a fish you inherit. A bony-lipped barb of the clean, fast, limestone-filtered tributaries of the Lô river, it is raised by the Tày families of Hàm Yên district in small spring-fed ponds beside the house — fed on grasses, banana stem, cassava leaves and whatever the garden spares — and it grows with geological patience: a kilogram takes three or four years, a proper gỏi fish takes five to ten, and ponds in Hàm Yên hold decorated elders of twenty and thirty years that are shown to guests like family portraits. The fish was a documented tribute item, carried down the Lô to the courts, and the logic of the tribute is the logic of the dish: an animal that has spent a decade swimming against spring current in cold clean water develops a flesh unlike anything a farm can rush — dense, fine-grained, faintly sweet, with none of the mud that condemns most pond fish, because these ponds are fed by running springs and the fish eats leaves, not sludge.

Gỏi cá bỗng is the mountain north's entry in the raw-fish tradition this collection has already visited on the Hà Tĩnh coast, and setting the two side by side is instructive, because the grammar is identical and every word is different. Both slice the fish thin and press it dry; both firm it briefly in acid; both toss it in thính, the roasted rice powder that dries, separates and perfumes; both wrap it in astringent leaves and eat it with rice wine, standing, in company. But the sea version leans on lime and fig leaf and a thick peanut sauce, while the Lô river version answers with the forest: a platter of wild and garden leaves that can run past a dozen kinds — đinh lăng, young fig, lá lốt, apple-tart vón vén, guava shoots — each chosen for a different register of bitterness and tannin, so that building a parcel is an act of composition rather than assembly.

And then there is the chẻo, which is the dish's masterstroke and the thing no other gỏi in Vietnam does quite this way: the dipping sauce is made from the fish itself. The skeleton, head and trimmings left from filleting are chopped fine, then dry-toasted or fried patiently until golden, brittle and fragrant, then pounded — bones and all — with roasted peanuts, thính, galangal, and seasoning into a thick, tan, gritty-rich paste, loosened with a little warm water or lime. Nothing of the animal leaves the kitchen. The flesh is eaten raw and cool; the frame is eaten toasted and warm, as the sauce for the flesh. It is nose-to-tail cooking executed on a single fish, invented by mountain households that could not afford to discard half a ten-year investment, and the result is a sauce with a depth — Maillard-browned fish, bone minerality, peanut fat — that no bought condiment approaches.

A note on safety, made plainly because this collection makes it plainly: this is raw freshwater fish, and raw freshwater fish carries real parasite risk that raw sea fish does not — liver flukes among them. In Hàm Yên the risk is managed by tradition, source-knowledge and the acid cure; outside it, the only responsible version uses fish frozen to -20°C for a minimum of 7 days (freshwater parasites are hardier than marine ones), or substitutes a sashimi-grade marine fish and accepts the change. The technique — the press, the cure, the thính, the chẻo — survives the substitution intact, and the chẻo alone is worth learning on any fish you ever fillet again.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 1,
          unit: 'kg',
          name: 'whole cá bỗng (bony-lipped barb), the oldest you can honestly source',
          note: `SAFETY, NON-NEGOTIABLE OUTSIDE THE TRADITION: raw freshwater fish carries parasite risk (including liver flukes) that acid does NOT reliably kill. Outside Vietnam, use fish frozen at -20°C for at least 7 days, or substitute sashimi-grade sea bream or sea bass (frozen per the standard 24h protocol) and accept a different, honest dish. Pregnant and immunocompromised readers should not eat this raw in any version. In Hàm Yên, the fish is killed, filleted and served within the hour — that speed is part of the safety system and part of the recipe.`,
        },
        { amount: 1, unit: 'tbsp', name: 'coarse salt + 2 tbsp rice wine (for the rub and rinse)' },
        { amount: 5, name: 'limes (about 100 ml juice)', note: `Plus a few slices of young galangal pounded into the juice — the northern cure is lime sharpened with galangal, where the coast uses lime alone.` },
      ],
    },
    {
      title: 'The chẻo (toasted-bone sauce)',
      items: [
        {
          amount: 1,
          name: 'the complete skeleton, head and trimmings of the fish above',
          note: `The point of the sauce. Every bone, chopped small. If your fillets came boneless from a fishmonger, ask for the frame of the same fish — no frame, no chẻo, and the dish loses its signature.`,
        },
        { amount: 60, unit: 'g', name: 'roasted peanuts' },
        { amount: 2, unit: 'tbsp', name: 'thính (roasted rice powder)' },
        { amount: 20, unit: 'g', name: 'galangal, pounded' },
        { amount: 2, name: 'shallots, sliced and fried golden' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 1, name: 'red chili, pounded' },
        { amount: 3, unit: 'tbsp', name: 'warm water + 1 tbsp lime juice, to loosen' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (if pan-toasting)' },
      ],
    },
    {
      title: 'The toss',
      items: [
        {
          amount: 4,
          unit: 'tbsp',
          name: 'thính (roasted rice powder), made fresh',
          note: `Raw rice dry-toasted 8-10 minutes to deep gold and ground coarse — the same fresh-thính standard as every gỏi in this collection. Stale thính is dust.`,
        },
        { amount: 3, name: 'shallots, paper-thin' },
        { amount: 25, unit: 'g', name: 'galangal, finely julienned', note: `Galangal, not ginger — the piney, medicinal cut is the mountain-north signature, here as in every northern raw and game dish.` },
        { amount: 2, name: 'stalks lemongrass, tender parts, shaved into rings' },
        { amount: 3, name: 'kaffir lime leaves, shredded to threads' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 30, unit: 'g', name: 'rau răm and húng, chopped' },
      ],
    },
    {
      title: 'The forest platter',
      items: [
        {
          amount: 1,
          name: 'large platter of mixed astringent leaves — a dozen kinds if you can',
          note: `The Hàm Yên table runs to: lá sung (young fig), đinh lăng (polyscias), lá lốt (wild betel), vón vén (a tart forest leaf), ổi non (guava shoots), mơ lông, tía tô, kinh giới. In Europe, build the spirit of it: young fig or grape leaves, perilla, betel leaf from the Asian grocer, watercress, young oak-leaf lettuce, a few raw guava or apple slices for the tannin. The rule: at least three registers — one bitter, one tannic, one aromatic.`,
        },
        { amount: 20, name: 'sheets of rice paper (optional — many Hàm Yên tables use leaves alone)' },
        { amount: 1, name: 'bottle of rice wine', note: `A mồi nhậu dish, eaten standing, over an hour, beside the pond the fish came out of if at all possible.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Fillet fast, skin off — and set the whole frame aside',
      description: `Scale, gut and fillet the fish; skin the fillets and pull every pin bone. Rinse the fillets in rice wine, then cold water; pat dry, and slice on a shallow diagonal into 3-4 mm leaves. Keep cold.

Everything else — skeleton, head, fins, trimmings — is the chẻo. Chop it all, bones and head included, into rough 1 cm pieces with a heavy cleaver. Nothing is discarded except the guts and gills.

The flesh should smell of clean spring water and nothing else. A cá bỗng that smells of pond was not a cá bỗng worth ten years, and it is certainly not worth eating raw — cook it instead, and have the conversation with your supplier.`,
      tip: `The decade matters in the mouth, and the mechanism is muscle biology. A slow-growing fish working against current for years builds densely packed, fine-diameter muscle fibres with substantial connective collagen between them — the same reason wild fish outeat farmed and old hens outbroth young broilers. Sliced raw, that architecture reads as a firm, almost crisp resistance that a two-year fish simply has not built. Hàm Yên's ponds are not slow because the farmers are; they are slow because texture is the crop.`,
    },
    {
      title: 'Press, then cure in galangal-lime — the northern double-firm',
      description: `Toss the sliced fish with a teaspoon of fine salt, wait 10 minutes, then wrap in a clean cloth and squeeze hard over a bowl until no more cloudy liquid comes. The slices should emerge matte, dense and dry — the same ruthless press as the coastal gỏi, for the same reason.

Pour over the lime juice pounded with galangal, toss, and cure 15-20 minutes, turning once, until the flesh is opaque through with at most a ghost of translucence at the centre of the thickest slice.

Press a second time — gently now — and reserve two tablespoons of the pressed cure liquid for the chẻo. Do not exceed 25 minutes in the acid; past it, the decade of texture you paid for turns to chalk.`,
      tip: `Galangal in the cure is not perfume — it is chemistry aimed at freshwater fish specifically. River and pond fish carry an earthy register (geosmin and related compounds) that sea fish lack, and galangal's sharp terpenes and gingerol-family compounds bind and mask precisely that band, which is why every raw or rare freshwater preparation in the northern mountains — fish, buffalo, goat — reaches for riềng where the coast reaches for plain lime. Same cure, one added rhizome, and the dish is tuned to its water.`,
    },
    {
      title: 'Build the chẻo — toast the bones to gold, then pound everything',
      description: `Dry the chopped frame well. Toast it in a dry heavy pan (or with the spoon of oil) over medium heat, stirring patiently, 12-15 minutes, until every piece is deep golden, brittle and smells like the best fish cracker ever made. The small bones should snap cleanly; the head pieces should be crisp at the edges.

Pound the toasted frame in a sturdy mortar in batches — genuinely pound, until no piece is larger than a grain of rice and most of it is coarse powder. Add the fried shallots, peanuts, thính, galangal, chili, sugar and fish sauce and pound to a thick, gritty, tan paste. Loosen with the warm water and the reserved cure liquid to a heavy, spoonable consistency.

Taste on a leaf: it should be intensely savoury, toasty, faintly sweet, with a fine mineral grit that reads as texture, not sand. If any piece crunches sharply, pound on.`,
      tip: `The chẻo is running two flavour systems at once. Toasting drives Maillard reactions across the bone surfaces and the clinging flesh — the roasted, cracker-like depth — while the pounding liberates the marrow fat and grinds the calcium-phosphate mineral of the bone itself into the paste, which lands on the palate as a faint, pleasing chalk-savour and, incidentally, as one of the richest calcium hits in Vietnamese cooking. The coast's canned-salmon-soft bones and Huế's hour-braised goby skeletons solved edible bone with moist heat and time; the mountain solved it with dry heat and a pestle. Three provinces, one refusal to waste a skeleton.`,
    },
    {
      title: 'Toss the gỏi dry — thính, aromatics, herbs, in that order',
      description: `Toss the twice-pressed fish with the thính first, until every slice wears a fine dry coat and they fall apart separately. Then the shallots, galangal, lemongrass rings, lime-leaf threads, chili and sugar; toss again. Herbs last, with three strokes.

The finished gỏi should look like the coastal one's mountain cousin: matte, nubbly, bristling with pale aromatics — but sharper-smelling, all galangal and lime leaf where the coast was ginger-quiet.

Assemble in the final ten minutes before eating. The thính clock and the acid clock are both running, and neither pauses for photographs.`,
      tip: `Notice how the aromatic set has shifted with the altitude while the method stands still: the coast tossed its gỏi with ginger; the mountains toss with galangal, lemongrass and kaffir lime — the trio that thrives in upland gardens and cuts hardest against freshwater flesh. The gỏi grammar (press, cure, thính, leaves, wine) is a national constant; the aromatics are a local variable, set by what grows within shouting distance of the pond. Reading a Vietnamese gỏi is reading a map.`,
    },
    {
      title: 'Compose the parcel — leaf-stack, gỏi, chẻo, wine',
      description: `Set out the forest platter, the gỏi, and the chẻo in a communal bowl with a spoon.

The Hàm Yên build: take a fig leaf as the base, stack two or three contrasting leaves on it — one bitter, one tart, one aromatic — add a generous pinch of gỏi, and spoon chẻo over the top. Fold into a parcel and eat in one bite, then chase it with rice wine and begin the next parcel with a different leaf combination. The variation is the game; no two parcels should match.

Eat the whole fish — flesh in the parcels, frame in the sauce — within half an hour. The pond took ten years; the table takes thirty minutes; the proportion is understood by everyone present, and it is why the fish is thanked, half-seriously, before the first parcel and the last.`,
      tip: `The dozen-leaf platter is doing pharmacology as much as gastronomy, and the Tày table is explicit about it: đinh lăng for digestion, lá lốt to warm, guava shoot to bind, fig to cool — the leaves are the meal's built-in apothecary for eating rich raw fish and drinking rice wine in the same hour. Whether every attribution survives a clinical trial is beside the point; the structural insight — that a raw-protein feast should arrive wrapped in tannin, bitterness and aromatics, in variety — is the same one every raw-fish culture from Peru to Japan converged on. The mountain just sends you into the hedge to assemble it yourself.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
