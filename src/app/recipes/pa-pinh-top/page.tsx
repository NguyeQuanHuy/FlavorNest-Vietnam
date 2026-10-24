'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'pa-pinh-top',
  title: `Pa Pỉnh Tộp (Folded Grilled Carp Stuffed with Herbs — Điện Biên)`,
  subtitle: `A whole freshwater carp — split along the back, butterflied flat, stuffed with a paste of lemongrass, galangal, mắc khén, ginger and dill, then folded shut and grilled over charcoal until the skin chars and the herb paste inside steams the flesh from within. The Thái people's most elegant fish preparation, and the grilled fish that cooks itself from inside out.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/pa-pinh-top.jpg',
  intro: `Pa pỉnh tộp is Thái language — pa means fish, pỉnh means grill, tộp means folded — and the name IS the recipe: a fish, grilled, folded. The dish belongs to the Thái people (both Thái đen and Thái trắng) of the northwestern highlands — Điện Biên, Sơn La, Lai Châu — and it is the most recognisable Thái fish dish in Vietnam, served at every highland market, every Thái restaurant in Hanoi, and every food-tourism itinerary that passes through the northwest.

The technique is simple and specific: a whole carp (or other firm freshwater fish) is scaled, gutted through the belly, then split along the BACK — a deep cut from head to tail along the spine, opening the fish like a book until it lies flat, butterflied, with the belly skin still intact as the hinge. The opened fish is stuffed with a thick herb paste — the Thái spice vocabulary in concentrated form: lemongrass, galangal, mắc khén, ginger, garlic, shallot, chili, dill (thì là — a specific highland herb choice), and fish sauce. The paste is spread over the flesh side, the fish is folded shut (the belly-hinge closing the book), and the folded fish is clamped in a bamboo grilling basket and grilled over charcoal.

The fold is the engineering. A flat-grilled butterflied fish cooks by charcoal heat from below, and the herbs on the exposed flesh side lose their volatiles to the open air. A FOLDED fish — herb paste sealed inside, the two flesh faces pressed together — cooks by charcoal from outside AND by herb-steam from inside: the paste's moisture converts to steam in the fish's enclosed interior, and the steam carries the herb volatiles (citral from lemongrass, gingerol from ginger, sanshool from mắc khén, anethole from dill) directly into the flesh's surface, perfuming it from within while the charcoal chars the skin from without. The fish is cooked from two directions by two different heat sources, and the herb paste — sealed inside, steaming rather than burning — delivers its full aromatic payload into the flesh rather than into the air.

The dill — thì là — is the specific herb that makes pa pỉnh tộp identifiably Thái rather than generically highland. No other ethnic group in the Vietnamese highlands uses dill prominently (it is a Central Asian and European herb that entered the Thái culinary vocabulary through the Tai migration from southern China), and its anise-sweet, feathery, slightly medicinal note is the aroma that marks pa pỉnh tộp as Thái before the first bite. The dill is the signature the nose reads, and the nose reads it from across the market.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 1,
          name: 'whole carp, tilapia or barramundi, 800 g - 1.2 kg, scaled and gutted',
          note: `A firm, freshwater, white-fleshed fish. Carp is traditional; tilapia and barramundi work. The fish must be whole — head and tail on, skin intact — because the skin is the charring surface and the belly-hinge is the fold mechanism. In Europe: whole carp (common at Eastern European and Asian fishmongers), whole sea bream or whole sea bass.`,
        },
      ],
    },
    {
      title: 'The herb stuffing paste',
      items: [
        { amount: 4, name: 'stalks lemongrass, tender parts, minced very fine' },
        { amount: 30, unit: 'g', name: 'galangal, grated' },
        { amount: 2, unit: 'tbsp', name: 'mắc khén, toasted and ground' },
        { amount: 30, unit: 'g', name: 'ginger, grated' },
        { amount: 5, name: 'cloves garlic, pounded' },
        { amount: 4, name: 'shallots, pounded' },
        { amount: 3, name: 'red chilies, minced' },
        {
          amount: 30,
          unit: 'g',
          name: 'thì là (fresh dill), chopped',
          note: `The Thái signature herb — its anethole-dominated aromatic profile is the scent that identifies the dish. Use generously.`,
        },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'For grilling',
      items: [
        { amount: 1, name: 'bamboo grilling basket (kẹp nướng) or a grill grate' },
        { amount: 1, name: 'charcoal grill with glowing embers' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'bowls of xôi (sticky rice) or steamed rice' },
        { amount: 1, name: 'saucer of muối mắc khén (mắc khén + salt, ground)' },
        { amount: 100, unit: 'g', name: 'rau sống and fresh dill sprigs' },
      ],
    },
  ],
  steps: [
    {
      title: 'Split along the back, butterfly, stuff with the herb paste',
      description: `Lay the scaled, gutted fish on its belly. With a sharp, heavy knife, cut along the BACK — from head to tail, along one side of the spine, cutting deep enough to open the fish but NOT cutting through the belly skin. Open the fish like a book — the two flesh halves lie flat, connected at the belly.

Remove the spine: with the fish open, the spine is accessible. Cut under it from head to tail and lift it out (or leave it in — some cooks prefer the structural support during grilling).

Score the flesh: shallow diagonal cuts, 1 cm apart, on both halves — the scores let the herb paste penetrate deeper and the steam reach further.

Spread the herb paste generously over BOTH flesh halves — into the scores, across the entire surface, thick enough that the paste is visible as a green-gold layer. Use all of it. The paste is the internal seasoning AND the internal steam source, and more paste = more steam = more perfumed flesh.

Fold the fish shut — bring the two halves back together, the belly-hinge closing, the herb paste sealed inside. Press gently to compact. Clamp in a bamboo grilling basket (if available) or secure with kitchen twine at 3 points.`,
      tip: `The back-split-and-fold is the opposite of the conventional belly-split-and-open: most grilled whole-fish recipes split the belly and grill open (the flesh faces the fire). Pa pỉnh tộp splits the back and grills CLOSED (the skin faces the fire, the flesh faces itself with the herbs sealed between). The difference: an open-grilled fish cooks by direct radiant heat on the flesh, which dries the surface and burns the herbs. A folded fish cooks by INDIRECT heat (through the skin) on the outside and by STEAM (from the herbs' moisture) on the inside, producing a flesh that is simultaneously charred (outside) and steamed (inside) — two cooking methods in one format, the same dual-cooking the banana-leaf nhệch achieved by different means.`,
    },
    {
      title: 'Grill 20-25 minutes, turning every 5 — the skin chars, the herbs steam inside',
      description: `Lay the folded, clamped fish on the grate over glowing embers. Grill 20-25 minutes total, turning every 5 minutes. The charcoal should be medium-low — hot enough to char the skin progressively, not so hot that the skin burns through before the interior cooks.

The progression: at 5 minutes the skin begins to blister and brown. At 10 minutes the first side is charred and a faint steam escapes from the fold's edges — the herb paste inside has begun to boil. At 15 minutes, after the second turn, both sides are charred and the fish feels firm when pressed. At 20-25 minutes: the skin is uniformly dark, crispy and separated from the flesh underneath (the subcutaneous fat has rendered and the skin has lifted into a crispy shell), and the interior — tested by opening the fold slightly at one corner — is: white, opaque, flaking, and coated in a green-gold layer of the cooked herb paste, now fragrant, slightly caramelised, and fused to the flesh's surface.

The aroma during grilling is the pa pỉnh tộp's advertisement: dill (sweet, anise), lemongrass (citrus), mắc khén (numbing, piney), charcoal smoke (universal), and the rendering fish fat (rich, maritime). The combination is unique in the collection — no other dish pairs dill with mắc khén, and the pairing produces an aromatic that is simultaneously European (dill) and highland Vietnamese (mắc khén), reflecting the Thái people's own cultural position at the intersection of the Tai world and the Vietnamese one.`,
      tip: `The sealed fold traps the herb paste's volatile compounds inside the fish during the entire grilling — compounds that an open-grilled herb crust would lose to the air within the first 3 minutes. Citral (lemongrass) boils at 229°C but evaporates at much lower temperatures in the presence of steam; gingerol (ginger) decomposes above 200°C; sanshool (mắc khén) volatilises progressively above 150°C. In an open grill, these compounds are gone before the fish is cooked. In the sealed fold, they are trapped in the steam phase inside the fish's cavity, where they condense on the flesh's surface, are absorbed into the flesh's moisture, and remain there for the eater to taste. The fold is a volatile-retention device. It keeps the aromatics where they belong: in the fish, not in the air.`,
    },
    {
      title: 'Open the fold at the table — the reveal, the steam, the green-gold interior',
      description: `Bring the whole grilled fish to the table in its basket. Open the clamp (or cut the twine). Unfold the fish — gently, the two halves opening like a book again — and the herb-steamed interior is revealed: white, flaking flesh coated in the green-gold paste, steaming, fragrant, the dill's feathery fronds visible as dark-green threads in the herb layer.

The reveal is the dish's theatrical moment — the same unveiling the banana-leaf nhệch and the bamboo-tube cơm lam provided, and the same principle: a sealed vessel opened at the table releases its trapped aromatics in a concentrated burst that hits every nose at the table simultaneously. The burst is the advertisement, and the advertisement is honest: the fish inside tastes exactly as the steam smells.

Eat: break pieces of the flesh-and-herb from the opened fish with chopsticks or a spoon. Each piece carries: the charred skin (crispy, smoky, rendered-fat-crunchy), the steamed flesh (white, flaking, moist), and the herb paste (green-gold, aromatic, fused to the flesh, carrying the full lemongrass-galangal-mắc-khén-dill-ginger payload).

Eat with sticky rice — the highland's default starch, the same xôi nếp that accompanied every Tày and Thái dish in this collection. Dip in muối mắc khén for extra numbing tingle. Chew a sprig of raw dill between bites — the fresh dill's anethole is sharper and greener than the cooked paste's, and the contrast between the two dill registers (raw and cooked) is the aromatic equivalent of the two-ginger design the cháo lươn deployed.

Pa pỉnh tộp is the highland's most elegant fish — not the most challenging (that is the nậm pịa), not the most exotic (that is the cá chình mun), but the most elegant: a whole fish, a herb paste, a fold, a fire, and a result that no technique more complex could improve. The fold is the recipe. The fire is the tool. And the fish — carrying the herbs inside itself, cooking from within — is its own oven, its own steamer, and its own serving vessel, opened at the table like a gift.`,
      tip: `Pa pỉnh tộp is the highland's answer to the lowland's cá nướng (grilled fish) and the coast's cá nướng muối ớt (salt-chili grilled fish), and comparing the three reveals each region's relationship with the fish: the lowland grills open (the fish faces the fire, the flesh chars, the approach is direct). The coast grills in salt (the salt crust seals the fish, the flesh steams in its own juice, the approach is protective). The highland grills folded (the herb paste steams the flesh from inside, the skin chars from outside, the approach is creative — the cook invented a vessel from the fish's own body). Three techniques, three regions, and the highland's is the most ingenious, because it solved the problem of "how do I grill a fish AND steam it with herbs at the same time" by folding the fish around the herbs and letting the fire do both jobs through a single object.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
