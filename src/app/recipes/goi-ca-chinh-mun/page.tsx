'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'goi-ca-chinh-mun',
  title: `Gỏi Cá Chình Mun (Grilled Marbled Eel Salad — Quảng Bình Style)`,
  subtitle: `Cá chình mun — the marbled eel of Quảng Bình's mountain streams, a dark, muscular, snake-like freshwater eel prized above every other fish in the province — grilled over charcoal until the skin blisters and the fat renders, then shredded by hand and tossed with green banana, rau răm, crushed peanuts, fried shallots and a lime-chili-fish-sauce dressing. The gỏi that smells of charcoal, river stone and mountain rain.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/goi-ca-chinh-mun.jpg',
  intro: `Cá chình mun — Anguilla marmorata, the giant marbled eel — is one of the rarest and most prized freshwater fish in Vietnamese cooking. It is not the common paddy eel (Monopterus albus) that the cháo lươn Nghệ An used — that is a swamp eel, abundant, cheap and caught by the kilogram. The cá chình mun is a true eel — a catadromous species that is born in the deep ocean, migrates as a glass-transparent larva thousands of kilometres up the rivers, grows for ten to twenty years in the mountain streams of central Vietnam's Trường Sơn range, and then — when it reaches sexual maturity — migrates back to the ocean to spawn and die. It is a creature of epic biology, and it tastes like it.

The eel's flesh is dark, dense, richly marbled with intramuscular fat, and intensely flavoured — closer to a wild salmon or a mature tuna than to any freshwater fish. The fat content is roughly 15-18% (compared to the swamp eel's 2-3%), and the fat carries the eel's signature: a clean, mineral, faintly sweet, distinctly riverine flavour that the Quảng Bình fishermen describe as tasting of "the mountain stream's stone" — a terroir claim that is not metaphorical. The eel lives for decades in cold, oxygen-rich, mineral-laden mountain water, and its flesh accumulates the trace minerals (iron, zinc, selenium) and the lipid-soluble volatiles of that specific aquatic environment. Two eels from two different streams taste different, and the fishermen know which stream each eel came from by its flavour. The eel IS its river, chemically.

Quảng Bình — the narrow province that straddles the Trường Sơn mountains between Nghệ An and Quảng Trị, home to the Phong Nha caves and the Kẻ Bàng forest — is the cá chình mun's heartland, because the province's mountain streams provide the cold, clean, fast-flowing habitat the eel requires for its decade-long freshwater phase. The fish is caught by the fishermen who know the specific pools, the specific rock formations, and the specific seasons when the eels are fattest (autumn, when they are preparing for the spawning migration and have accumulated maximum fat reserves).

The gỏi format — grilled, shredded, tossed with herbs and dressed — is the preparation that best preserves the eel's flavour while adding the acid-crunch-herb architecture that every gỏi in this collection deploys. The eel is grilled whole over charcoal (the skin blisters and crisps, the intramuscular fat renders and bastes the flesh from inside, and the charcoal's smoke adds a layer that harmonises with the eel's own smoky-mineral terroir). It is then shredded by hand — the flesh pulls along its natural grain into long, dark, glistening fibres — and tossed while still warm with the dressing, the banana, the herbs and the peanuts.`,
  ingredientSections: [
    {
      title: 'The eel',
      items: [
        {
          amount: 1,
          name: 'whole cá chình mun (marbled eel), 800 g - 1.2 kg, gutted',
          note: `The prestige eel of Quảng Bình's mountain streams. In Europe: freshwater eel (Anguilla anguilla, the European eel — same genus, similar fat content and flavour profile) is the direct substitute. Japanese unagi (Anguilla japonica) also works. The eel must be fresh, whole, and skin-on — the skin crisps during grilling and is eaten.`,
        },
      ],
    },
    {
      title: 'For grilling',
      items: [
        { amount: 1, unit: 'tbsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil, for brushing' },
        { amount: 1, name: 'charcoal grill, embers glowing' },
      ],
    },
    {
      title: 'The dressing',
      items: [
        { amount: 3, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1.5, unit: 'tbsp', name: 'sugar' },
        { amount: 3, name: 'cloves garlic, pounded' },
        { amount: 3, name: 'bird\'s-eye chilies, sliced' },
        { amount: 1, unit: 'tbsp', name: 'ginger, finely julienned' },
        { amount: 1, unit: 'tbsp', name: 'water' },
      ],
    },
    {
      title: 'The salad components',
      items: [
        { amount: 1, name: 'green banana, sliced thin, in lime water' },
        { amount: 50, unit: 'g', name: 'rau răm, roughly torn' },
        { amount: 30, unit: 'g', name: 'húng quế (Thai basil), leaves picked' },
        { amount: 30, unit: 'g', name: 'ngò gai (sawtooth coriander), sliced' },
        { amount: 60, unit: 'g', name: 'roasted peanuts, coarsely crushed' },
        { amount: 3, unit: 'tbsp', name: 'fried shallots' },
        { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
        {
          amount: 30,
          unit: 'g',
          name: 'lá cách (Premna serratifolia), torn — if available',
          note: `The same numbing pepper leaf the Cà Mau gỏi lá cách cá đuối used — if available in Quảng Bình's coastal forests. Its tingle cuts the eel's richness the same way it cut the stingray's collagen. If unavailable: a pinch of Sichuan pepper, ground.`,
        },
      ],
    },
  ],
  steps: [
    {
      title: 'Clean and grill the whole eel — skin blisters, fat renders, charcoal sings',
      description: `Rub the gutted eel with coarse salt — inside the cavity and across the skin. The salt draws a thin moisture film that promotes blistering during grilling. Let sit 10 minutes. Brush lightly with oil.

Lay the whole eel on the charcoal grate — directly over glowing embers, 8-10 cm above the coals. The eel is long and flexible — it can curve across the grate, and some cooks thread a bamboo skewer lengthwise to keep it straight.

Grill 6-8 minutes per side for a 1 kg eel, turning once. The transformation: the skin tightens, blisters and crisps (the same blister-per-heat-point mechanism the chả giò's rice paper used, here with the eel's collagen-rich skin acting as the matrix); the intramuscular fat renders and bastes the flesh from inside (you will see fat droplets sizzling on the skin's surface — they are the basting, self-applied); and the charcoal's smoke deposits on the blistered surface.

The eel is done when: the skin is uniformly blistered and crisp (tap it — it clicks), the flesh is firm when pressed (a finger pressed into the thickest part meets resistance, not squish), and the fat has stopped actively rendering (the sizzling subsides). Cut into the thickest section — the flesh should be opaque-white to golden throughout, with no translucent-raw centre.

Rest 5 minutes — the eel's considerable fat keeps the flesh moist during the rest, and the cooling firms the flesh for easier shredding.`,
      tip: `The cá chình mun's 15-18% intramuscular fat is the reason it is grilled rather than fried, poached or steamed: the fat renders internally during grilling and bastes the flesh from inside out — the same self-basting mechanism a marbled steak uses — producing a moist, rich, evenly cooked result that no external basting can match. A lean fish (like the cá kèo at 2% fat) dries out during grilling and needs careful timing; a fat eel forgives timing errors because the internal fat keeps the flesh lubricated even if the surface over-chars by a minute. Fat is the eel's insurance policy, and the grill is the format that deploys it.`,
    },
    {
      title: 'Shred by hand while warm, toss immediately — the warmth opens the dressing',
      description: `Peel the blistered skin off in strips — it comes away easily from the cooked flesh. Reserve the skin: cut it into 1 cm strips and crisp briefly in a dry pan if it is not already fully crisp — the skin strips go on the salad as a crackle topping.

Shred the flesh by hand along its natural grain — the eel's longitudinal muscle fibres pull apart into long, dark, glistening strands. Remove and discard the spine and the rib bones as you go — they separate cleanly from the cooked flesh. The shredded eel should be: warm, dark-golden, oily-glistening, and fragrant with charcoal and rendered eel fat.

Toss the warm shredded eel immediately with the dressing — the warmth opens the flesh's pores (the same sol-state gelatin logic the stingray gỏi exploited) and absorbs the lime-fish-sauce-chili into the surface rather than sitting on it. Add the sliced green banana, half the herbs. Toss gently.

Transfer to a plate. Scatter the remaining herbs, crushed peanuts, fried shallots, sesame seeds, lá cách if using, and the crisped skin strips over the top.`,
      tip: `The warm-toss is the third appearance of the temperature-at-dressing principle in this collection's gỏi file: the stingray was dressed warm (gelatin sol-state, permeable), the bò tái chanh was dressed at room temperature (myoglobin denaturation rate), and this eel is dressed warm (fat-lubricated fibres, open surface). The principle is consistent: warm protein absorbs dressing more deeply than cold protein, because heat keeps the protein's surface matrix in a porous, permeable, oil-lubricated state that dissolved flavour molecules penetrate more easily. Cold protein's surface sets to a tighter, less permeable state that the dressing coats but does not enter. The temperature at tossing determines the dressing's depth, and depth is the difference between a dressed surface and a seasoned fibre.`,
    },
    {
      title: 'Eat — the mountain stream on a plate, with the charcoal's blessing',
      description: `Each chopstick-lift should carry: dark eel strands (rich, smoky, fat-lubricated, mineral-sweet), green banana slices (astringent, starchy, palate-scrubbing), rau răm (peppery, the fixed gỏi herb), a peanut crumb (nutty crunch), a shard of crisped eel skin (shattering, fatty, charcoal-kissed), and the dressing's acid-salt-chili running through everything.

The eel's flavour dominates — it is richer, darker and more intensely mineral than any fish in this collection's gỏi file. The Phú Quốc cá trích was light and marine. The Cà Mau stingray was gelatinous and mild. This eel is dark, oily, almost meaty — the fat carrying the mountain stream's mineral signature to the tongue with a persistence that lean fish cannot achieve, because the minerals are dissolved in the fat and the fat clings.

If the lá cách is present: its numbing tingle arrives after the eel's richness, stripping the fat-coating from the tongue with the same coat-cut oscillation the stingray gỏi established. The two gỏi — stingray with lá cách (Cà Mau, mangrove) and eel with lá cách (Quảng Bình, mountain) — are the same numbing-leaf-on-rich-fish format deployed in two ecosystems, 1,000 km apart, proving the format's portability.

Cá chình mun is the collection's rarest ingredient — a wild-caught, decade-old, catadromous eel from a specific mountain stream that cannot be farmed, cannot be accelerated and cannot be replicated. Every other protein in this collection can be scaled. This one cannot, and its scarcity is inseparable from its quality: the ten years in cold mountain water ARE the flavour, and no shortcut reaches the same place.`,
      tip: `The cá chình mun's catadromous life cycle — ocean-born, river-raised, ocean-returning — makes it one of the most ecologically vulnerable proteins in this collection. The European eel (A. anguilla) is critically endangered; the Japanese eel (A. japonica) is endangered; and A. marmorata's conservation status varies by region but faces the same pressures (dam construction blocking migration, overfishing, habitat loss). This gỏi is documented as a living tradition, but it is also a tradition under pressure, and the collection notes — as it noted for the tiết canh and the cháo dơi, though for different reasons — that some traditions may not survive the century. The difference: tiết canh should end (public health demands it); cá chình mun should survive (biodiversity demands it), and the survival requires protecting the mountain streams that the eel calls home for a decade of its life. The recipe is a conservation argument, and the argument is: protect the river so the eel can grow, so the fisherman can catch one (not fifty), so the gỏi can exist for another generation.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
