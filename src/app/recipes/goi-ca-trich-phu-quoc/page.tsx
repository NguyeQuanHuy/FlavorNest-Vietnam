'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'goi-ca-trich-phu-quoc',
  title: `Gỏi Cá Trích Phú Quốc (Herring Sashimi Salad with Coconut and Peanuts)`,
  subtitle: `Fresh herring filleted by hand on the dock, sliced paper-thin, cured for ten minutes in lime juice, tossed with shredded young coconut, crushed roasted peanuts, fried shallots, rau răm and a dressing of lime-fish-sauce-chili — then rolled in rice paper with herbs and dunked in a ginger-garlic-chili nước chấm. The island's rawest dish, and the one that proves a fisherman's lunch is already a chef's plate.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/goi-ca-trich-phu-quoc.jpg',
  intro: `Cá trích is the round herring — Sardinella gibbosa — a small, silvery, oil-rich schooling fish that is caught in enormous quantities around Phú Quốc's reefs and that the island eats two ways: dried (as cá khô, the pantry staple), and raw. The raw version is gỏi cá trích, and it is one of the most iconic dishes on the island — sold at every beachside stall, every market, every beer-and-sunset joint along the Dương Đông waterfront — and it is built from a fish that was swimming two hours ago, which is the only starting condition the dish accepts.

The preparation is a lime-cure ceviche by another name: the filleted, skinned herring is sliced into paper-thin slivers and tossed with lime juice for ten minutes, during which the citric acid denatures the surface proteins exactly as heat would — the flesh turns from translucent-raw to opaque-white at its edges while the centre stays faintly pink and cool. It is not cooked. It is cured, and the distinction matters: the texture of lime-cured fish is firmer and more resilient than poached fish, and its flavour is cleaner — the acid preserves the fish's own marine sweetness while adding a citrus brightness that heat destroys.

The salad around the cured fish is the island's assembly: shredded young coconut (the fresh, moist, firm flesh — not dried, not desiccated — providing fat and a sweet crunch that balances the acid), crushed roasted peanuts (the protein and the nuttiness), fried shallots (the caramelised sweetness and the crunch), rau răm (the peppery herb that partners every raw-fish dish in the country), sliced onion (the sharp allium bite), and a simple dressing of fish sauce, lime, sugar, chili and garlic. The toss is quick, the serving is immediate, and the plate is vivid: white fish, pale coconut, tan peanuts, green herbs, red chili.

The eating is a roll: a piece of thin rice paper, dampened, loaded with a spoonful of the gỏi, a few herb leaves, a slice of green banana or cucumber, rolled snugly and dunked in a dipping sauce made from the island's own nước mắm with ginger, garlic and chili. The roll puts everything in one bite — the cured fish, the coconut, the nut, the herb, the wrapper's neutral chew, and the dipping sauce's umami — and it is eaten standing, at the waterfront, watching the fishing boats come in with tomorrow's gỏi still in their nets.

A note on food safety, stated as directly as every raw-fish note in this collection: gỏi cá trích is a raw-fish dish. The lime cure reduces the surface bacterial load and makes the exterior resemble cooked fish, but it does NOT sterilize. The only safety guarantee is freshness — same-day-caught, cold-chain-maintained, from a trusted source. In Phú Quốc the chain from net to plate is two hours; in a European kitchen it is longer, and the fish must be treated accordingly. Saltwater herring is generally lower-risk than freshwater fish for parasites (no liver fluke), but Anisakis larvae can be present in marine herring and are killed by freezing at -20°C for 24 hours (EU regulation for fish eaten raw). If your herring has not been frozen to that standard and you are not on a Phú Quốc dock watching it come off the boat, freeze it first. The dish is worth making correctly; it is not worth making unsafely.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'very fresh herring or sardine fillets, skin removed, pin-boned',
          note: `Same-day fresh from a trusted fishmonger, or frozen-at-sea and thawed. If buying whole: fillet, skin and pin-bone yourself — a fresh herring fillets in 30 seconds. The flesh should be firm, translucent, smell of clean sea, and spring back when pressed. Any ammonia smell, any softness, any dullness in the eye of a whole fish = do not use raw.\n\nFOOD SAFETY: for raw consumption, EU regulations require marine fish to be frozen at -20°C for minimum 24 hours to kill Anisakis parasites. If your fishmonger has not done this ("sushi-grade" or "previously frozen" labels indicate compliance), freeze at home for 24 hours, then thaw in the fridge before preparing. The texture is minimally affected; the safety is non-negotiable.`,
        },
      ],
    },
    {
      title: 'The lime cure',
      items: [
        { amount: 5, unit: 'tbsp', name: 'fresh lime juice (from 3-4 limes)', note: `Enough to coat every slice. The acid denatures the surface protein in 10 minutes — the fish turns from translucent to opaque-white at its edges while the centre stays faintly pink.` },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The salad',
      items: [
        {
          amount: 100,
          unit: 'g',
          name: 'young coconut flesh, shredded into thin strands',
          note: `Fresh young coconut — the firm, moist, slightly translucent flesh from a young drinking coconut, shredded on a box grater into fine strands. NOT desiccated coconut, which is dry and stale. The young coconut's moisture and fat are part of the dressing, and its faint sweetness is the counterweight to the lime's acid. Frozen shredded young coconut from an Asian grocer works well.`,
        },
        { amount: 60, unit: 'g', name: 'roasted peanuts, coarsely crushed' },
        { amount: 3, unit: 'tbsp', name: 'fried shallots' },
        { amount: 0.5, name: 'small onion, sliced into very thin rings and rinsed in cold water', note: `The rinse removes the sharpest sulfur compounds and leaves a milder allium bite.` },
        { amount: 30, unit: 'g', name: 'rau răm (Vietnamese coriander), roughly torn' },
        { amount: 20, unit: 'g', name: 'ngò gai (sawtooth coriander), thinly sliced' },
        { amount: 2, name: 'red bird\'s-eye chilies, sliced thin' },
      ],
    },
    {
      title: 'The dressing',
      items: [
        { amount: 2, unit: 'tbsp', name: 'fish sauce (Phú Quốc nhất if possible)' },
        { amount: 1.5, unit: 'tbsp', name: 'sugar' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, name: 'cloves garlic, pounded fine' },
        { amount: 1, name: 'red chili, pounded' },
      ],
    },
    {
      title: 'The wrap and the dipping sauce',
      items: [
        { amount: 20, name: 'sheets of thin dried rice paper (bánh tráng), 16-18 cm' },
        { amount: 1, name: 'lettuce head, leaves separated' },
        { amount: 50, unit: 'g', name: 'herbs: húng quế, tía tô, kinh giới' },
        { amount: 1, name: 'green (unripe) banana, sliced thin, in lime water' },
        { amount: 1, name: 'cucumber, in thin batons' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce (for dipping sauce)' },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 3, unit: 'tbsp', name: 'water' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 15, unit: 'g', name: 'ginger, finely julienned', note: `The Phú Quốc dipping sauce puts raw ginger front and centre — its gingerol cuts through the fish's oils and resets the palate between rolls.` },
        { amount: 2, name: 'cloves garlic, pounded' },
        { amount: 2, name: 'chilies, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Slice the herring paper-thin and lime-cure 10 minutes — no longer',
      description: `Lay the skinned, pin-boned fillets on a cold cutting board. With your sharpest knife, held at a low angle, slice across the grain into slivers 2-3 mm thick — each slice should be translucent and drape over your finger.

Toss the slices with the lime juice and salt in a glass or ceramic bowl (not metal — acid reacts with metal and taints the fish). Spread them in a single layer so every slice contacts the acid.

Cure exactly 10 minutes at room temperature. The edges of each slice should turn opaque-white; the centre should remain faintly pink-translucent. At 10 minutes the cure has firmed the surface without cooking the core — the ceviche sweet spot.

Drain off the lime juice. Do not rinse — the residual acid continues to work gently and is part of the flavour.

OVER-CURING: at 20 minutes the fish is fully opaque, rubbery, and has lost its raw sweetness. At 30 minutes it is chalky. The window is 8-12 minutes, and 10 is the centre. Set a timer.`,
      tip: `The lime cure is acid denaturation: citric acid protonates the fish protein's amino groups, disrupting the hydrogen bonds and hydrophobic interactions that hold the tertiary structure together, and the protein unfolds and re-aggregates into a dense, opaque, firm network — the same structural change heat causes, achieved at room temperature by chemistry rather than thermodynamics. The reaction front moves inward from the surface at a rate governed by the acid concentration and the slice thickness: at 2-3 mm thick in undiluted lime juice, the surface reaches full denaturation in about 4 minutes and the centre is still raw at 10. The thin slice is the timing device, exactly as the 3 mm beef in the phở cuốn was — thickness dictates the gradient, and the gradient is the dish.`,
    },
    {
      title: 'Toss the gỏi — coconut, peanuts, shallots, herbs, dressing, all at once',
      description: `In a wide bowl: combine the drained, cured fish slices with the shredded young coconut, crushed peanuts, fried shallots, onion rings, torn rau răm, sliced ngò gai and chili.

Pour the dressing over — fish sauce, sugar, lime, garlic and chili, fully dissolved — and toss gently but thoroughly with two spoons, lifting from the bottom so every slice is coated and every component is distributed.

Taste a spoonful on a lettuce leaf: it should be sour-sweet-salty-nutty-herbal, with the fish's clean marine sweetness arriving through the lime, the coconut's fat rounding the acid, and the peanut's crunch breaking the softness. If the acid is sharp, add a pinch more sugar. If the fish is quiet, add a splash more fish sauce.

Serve immediately. Like every gỏi in this collection, the clock starts at the toss — the acid continues curing, the herbs wilt, the peanuts soften — and a gỏi that sat ten minutes is a gỏi past its peak.`,
      tip: `The shredded young coconut is doing the job that pork fat does in the nem Bùi and that coconut cream does in the bún nước lèo — it is the lipid that carries the fat-soluble volatile compounds of the herbs and the fish to the tongue's fat-sensitive receptors, and it rounds the acid of the lime by coating the palate in a thin emulsion. A gỏi cá trích without coconut is sharper, thinner and less satisfying, the way a salad without oil is more vivid but less complete. The coconut is the oil of this salad, and its tropical sweetness is the bridge between the fish's marine register and the lime's citrus register — two registers that, without the bridge, would sit side by side rather than merging.`,
    },
    {
      title: 'Mix the ginger dipping sauce — the Phú Quốc nước chấm',
      description: `Dissolve the sugar in the fish sauce and water. Add the lime juice, pounded garlic, sliced chili and — the Phú Quốc signature — the finely julienned ginger. The ginger should float visibly in the sauce and its sharp, bright, gingerol-laden bite should be the first thing the tongue registers at the dip.

The ginger is what makes this dipping sauce specifically Phú Quốc's. The mainland nước chấm for gỏi cá uses garlic and chili and occasionally a drop of vinegar; Phú Quốc adds ginger, and the ginger does for the raw-fish roll what galangal does for the northern nem and what lemongrass does for the southern hotpot — it cuts through the lipid on the palate (the coconut, the fish's own oil) with a volatile heat that resets the mouth for the next bite.`,
      tip: `Ginger's gingerol is a paradoxical compound: it activates the same TRPV1 heat receptor that capsaicin does (the chili receptor), but it also activates cold receptors (TRPM8), which is why ginger feels simultaneously warming and cooling on the tongue. In a dipping sauce for oily, coconut-dressed fish, this dual action is uniquely effective: the warming clears the fat film, the cooling refreshes the palate, and the volatile gingerone (produced as gingerol degrades in the sauce's acid) adds an aromatic depth that chili's capsaicin alone cannot. Ginger is not a substitute for chili in this sauce. It is a partner, doing a different job on the same receptor, and the two together produce a palate-reset that neither achieves alone.`,
    },
    {
      title: 'Roll in rice paper — gỏi, herbs, green banana, dip, bite',
      description: `Dip a sheet of rice paper briefly in water — two seconds, turning once — and lay it flat. In the lower third: a lettuce leaf, a spoonful of the gỏi with its coconut and peanuts, a few herb leaves, a slice of green banana and a baton of cucumber.

Fold the near edge over, tuck the sides, roll snugly. The finished roll should be tight, translucent, showing the gỏi's colours through the wrapper — white fish, pale coconut, green herb, red chili.

Dip the cut end deep into the ginger nước chấm. Eat in two bites. The first bite cuts through the rice paper into the coconut-dressed fish; the second bite carries the herb end. The ginger sauce hits last and resets everything.

Roll in relays, as always — the rice paper dries, the gỏi cures further, and a roll made now is always better than a roll made five minutes ago. The whole plate should be eaten within twenty minutes of the toss, which on a Phú Quốc waterfront is not a deadline but a description of what happens naturally when the fish is this fresh and the sunset is this good.`,
      tip: `Gỏi cá trích is the dish that connects the nước mắm recipe (recipe 1) to the island's table. The nước mắm nhất in the dressing and in the dipping sauce was made from the same species of fish — cá cơm, the anchovy — caught in the same waters by the same fleet. The herring in the gỏi was caught by the same fleet, from the same waters, on the same morning. The fish sauce is the anchovy fermented for fifteen months; the gỏi is the herring cured for ten minutes. One is time compressed to an amber liquid; the other is time barely applied at all. And the two meet on the same plate, in the same roll, in the same bite — the island's oldest product seasoning the island's freshest one. This is Phú Quốc's table in a single mouthful: the sea, caught twice, processed at opposite ends of the time spectrum, and recombined at the moment of eating. The nước mắm waited a year for this. The herring waited two hours.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
