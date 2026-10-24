'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'goi-tom-song',
  title: `Gỏi Tôm Sống (Raw Shrimp Salad with Lime and Herbs)`,
  subtitle: `Live river shrimp — still twitching, still translucent — tossed in lime juice, fish sauce, garlic, chili, rau răm and crushed peanuts, and eaten within minutes while the acid is still curing the flesh from glass-clear to blush-white. The Mekong Delta's most direct encounter with the river, and the dish that separates the curious from the committed.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '15 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/goi-tom-song.jpg',
  intro: `Gỏi tôm sống — raw shrimp salad — is one of the Delta's most thrilling and most divisive dishes: thrilling because the shrimp are alive when they enter the bowl and still translucent when they enter the mouth, and divisive because the idea of eating a raw crustacean tossed in lime juice challenges the same boundary the gỏi cá trích and the gỏi sầu đâu challenged, but at a higher voltage. A raw herring fillet is at least dead and still. A live shrimp in a bowl of lime juice is moving, curling, turning opaque at the edges while the centre is still glass-clear, and the eater who picks one up with chopsticks is picking up something that was in the river five minutes ago and has not yet finished dying.

The Delta does not romanticise this. It eats it, quickly, because the freshness IS the dish and the window is fifteen minutes from toss to table. The shrimp are tôm đất or tôm càng — river shrimp, caught in traps from the canals and paddies, sold live and wriggling at every Delta market. They are small — 5 to 8 centimetres — and they are used whole: shell peeled, head removed, the tail meat intact, translucent and faintly grey-blue. Into a bowl they go, and over them goes a dressing so aggressive it is less a dressing than an assault: fresh lime juice in volume, fish sauce, smashed garlic, sliced bird's-eye chili, sugar, and rau răm, torn roughly.

The lime does what it always does to raw protein: its citric acid denatures the surface myosin, turning the flesh from translucent to opaque-white at the edges while leaving the centre still raw, still cool, still carrying the shrimp's own marine-sweet freshness that cooking would destroy. But unlike the gỏi cá trích, which cured for a controlled ten minutes, the gỏi tôm sống is eaten DURING the curing — the shrimp are tossed and eaten immediately, so the eater controls the doneness by the pace of eating: the first shrimp is nearly raw; the last is nearly cured. The progression is the format.

A note on safety: gỏi tôm sống is a raw-shellfish dish. The lime does not sterilise. Freshwater shrimp carry parasitic risks — Paragonimus (lung fluke) and Angiostrongylus (rat lungworm) — NOT killed by lime. In the Delta the risk is accepted as low. In Europe: use marine shrimp (prawns, langoustines) of sushi-grade freshness, which eliminates the freshwater-specific parasite risk. Freezing at -20°C for 24 hours (EU regulation for raw consumption) kills parasites in marine species.`,
  ingredientSections: [
    {
      title: 'The shrimp',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'live or ultra-fresh shrimp, peeled, deveined, tail-on',
          note: `In the Delta: live river shrimp, peeled alive. In Europe: the freshest raw-grade marine shrimp or langoustines — sushi-grade, from a trusted fishmonger, or previously frozen at -20°C/24h per EU protocol. Translucent, firm, clean brine smell. Any ammonia = discard. Pat very dry.`,
        },
      ],
    },
    {
      title: 'The lime cure and dressing',
      items: [
        { amount: 80, unit: 'ml', name: 'fresh lime juice (5-6 limes)', note: `A curing bath, not a light dressing. Every shrimp must contact the acid.` },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 4, name: 'cloves garlic, smashed and sliced thin' },
        { amount: 4, name: 'bird\'s-eye chilies, sliced thin' },
        { amount: 1, unit: 'tbsp', name: 'ginger, finely julienned' },
        { amount: 0.5, name: 'small onion, sliced paper-thin, rinsed' },
      ],
    },
    {
      title: 'The herbs and crunch',
      items: [
        { amount: 50, unit: 'g', name: 'rau răm (Vietnamese coriander), roughly torn' },
        { amount: 30, unit: 'g', name: 'ngò gai (sawtooth coriander), sliced thin' },
        { amount: 60, unit: 'g', name: 'roasted peanuts, coarsely crushed' },
        { amount: 3, unit: 'tbsp', name: 'fried shallots' },
        { amount: 2, unit: 'tbsp', name: 'thính (roasted rice powder)' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 20, name: 'sheets of rice paper (bánh tráng)' },
        { amount: 1, name: 'head of lettuce' },
        { amount: 100, unit: 'g', name: 'herbs: húng quế, tía tô' },
        { amount: 1, name: 'green banana, sliced, in lime water' },
        { amount: 1, name: 'star fruit, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Prep everything before the shrimp are peeled — the clock starts at the peel',
      description: `Mix the dressing: dissolve sugar in fish sauce and lime juice, add garlic, chili, ginger and onion. Set beside the bowl.

Crush peanuts. Prepare thính. Tear herbs. Arrange the wrapping platter. Everything must be within arm's reach before a single shrimp is peeled, because this gỏi is assembled in 60 seconds and eaten in 10 minutes.

Peel the shrimp, devein, leave tails on. Pat dry. If using live shrimp: stun briefly in iced water (30-60 seconds) — the cold drops their body temperature below the neural-activity threshold, rendering them insensible for easier, more humane peeling.`,
      tip: `The ice-stun is used across shellfish cuisines — lobster, crab, shrimp. Crustaceans are ectotherms: immersion in ice water drops their body temperature below the threshold for neural activity within 30-60 seconds. The stun anaesthetises without killing, and the shrimp can be peeled without the thrashing that makes live-peeling difficult and that represents a stress response the cook should prefer to avoid.`,
    },
    {
      title: 'Toss and serve IMMEDIATELY — the acid is the clock, the eating pace is the seasoning',
      description: `Put the peeled, dried shrimp in a wide bowl. Pour the dressing over. Toss once. Add torn rau răm and ngò gai. Toss again. Scatter peanuts, fried shallots and thính over the top — do not toss again, the thính must stay dry.

Serve IMMEDIATELY. The acid curing timeline runs on the plate:

MINUTE 0-2: the shrimp are nearly raw — translucent, cool, soft, tasting of the river's clean sweetness. The lime is a whisper at the surface.

MINUTE 3-5: edges turning opaque-white, texture firming. The shrimp taste of both raw sweetness and acid cure — the most complex transitional state.

MINUTE 6-10: mostly white, firm-springy, tasting more of lime than of river. The ceviche zone — fully cured at surface, faintly pink at core.

PAST 10: over-cured — chalky, rubbery, sweetness gone. The dish is over.

The acid denaturation front moves inward at approximately 1 mm per 2-3 minutes. An 8 mm shrimp reaches full denaturation at centre in 10-12 minutes. Fast eating = raw shrimp. Slow eating = cured shrimp. The eater's chopstick speed is the final seasoning.`,
      tip: `Gỏi tôm sống is the collection's most minimal raw-protein dish and the one that most clearly expresses the Delta's relationship with freshness. The eater is not receiving a finished dish — they are intercepting a chemical process at their preferred point on its timeline and calling that point dinner. Five minutes of delay is fifty percent more cure, and fifty percent more cure is a different dish. The gỏi is a live process, not a static plate, and eating it is participating in the chemistry rather than consuming its result.`,
    },
    {
      title: 'Wrap or eat from the bowl — and drink the dressing at the end',
      description: `FROM THE BOWL: chopsticks lift a shrimp trailing rau răm, garlic, thính. Eat in one bite — acid-sweet-salty-hot-peppery-nutty, with the shrimp's own clean marine note arriving last.

IN A ROLL: dampen rice paper, lay lettuce, shrimp, herbs, green banana, star fruit, peanuts. Roll. Dip in pooled dressing. The roll method is slower = more cured shrimp per roll.

When the shrimp are gone: tilt the bowl and drink the pooled dressing — enriched by the shrimp's rendered amino acids and the herbs' released volatiles, it is a concentrated shot of everything the bowl held. The gỏi's closing statement, best drunk standing.`,
      tip: `Every raw-protein gỏi in this collection — the herring (Phú Quốc), the bông điên điển (Đồng Tháp), the sầu đâu (An Giang), and now this — uses the same architectural template: a raw ingredient at peak freshness, a lime-and-fish-sauce dressing calibrated to the ingredient's specific richness, thính for surface-drying, rau răm as the fixed herb, and a hard time limit after which the dish expires. The template is a framework for freshness, and each dish fills it with the specific ingredient the landscape provides: ocean fish on the coast, river shrimp in the Delta, flowers in the floodplain, bitter leaves on the canal bank. The framework is one recipe. The ingredients are a hundred provinces. And the clock — always running, always urgent — is the same clock everywhere, because freshness has the same half-life in every latitude.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
