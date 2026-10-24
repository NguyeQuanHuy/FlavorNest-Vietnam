'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'goi-la-rung',
  title: `Gỏi Lá Rừng (Forest Leaf Wraps — Tây Nguyên's Wild Herb Roll)`,
  subtitle: `Boiled pork belly set on a stack of 8-12 different wild forest leaves — each a different flavour — rolled into a single wrap and dipped in mắm nêm. One bite, twelve leaves, twelve flavours, and the entire pharmacopoeia of the Tây Nguyên forest compressed into a mouthful the size of a thumb.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/goi-la-rung.jpg',
  intro: `Gỏi lá rừng is the Tây Nguyên's way of eating the forest's diversity in a single bite. The principle: gather 8-12 edible wild leaves from the forest edge, wash, stack, roll around boiled pork belly, dip, eat.\n\nThe leaves form a FLAVOUR WHEEL of plant-defence compounds: lá mơ (Paederia foetida — dimethyl disulfide, funky-sulphurous-savoury), lá lốt (Piper lolot — piperine, peppery-numbing), lá é (Ocimum gratissimum — eugenol, clove-warm), lá đinh lăng (Polyscias fruticosa — oleanolic acid, bitter-ginseng), lá chanh (kaffir lime — citral, citrus-bright), young mango leaf (mangiferin + tannins, sour-astringent), avocado leaf (estragole, anise), lá sung (Ficus racemosa — mild, structural outer wrap), plus húng quế, rau răm, tía tô as familiar anchors. Each leaf's taste = a compound the plant evolved as herbivory defence; the gatherer eats the defences that are safe at dietary doses.\n\nThe pork is deliberately NEUTRAL: boiled plain, sliced thin, providing fat (carries fat-soluble volatiles to aroma receptors) and a blank canvas the leaves paint on. The dish has the most DISTINCT BOTANICAL INGREDIENTS per bite in the collection: 12 species × 3-5 principal volatiles = 36-60 aromatic compounds reaching the olfactory epithelium simultaneously, arriving in WAVES (lighter volatiles first, heavier second) over 7 seconds. The forest's biodiversity, compressed to thumb-size.`,
  ingredientSections: [
    { title: 'The protein', items: [
      { amount: 400, unit: 'g', name: 'pork belly, skin-on, boiled 35 min, sliced 3 mm', note: `Boiled plain — water, salt, nothing else. Bland + fat = the leaves speak, the fat carries volatiles.` },
    ]},
    { title: 'The leaves — the forest', items: [
      { amount: 8, name: 'lá sung (fig leaves) — outer structural wrap' },
      { amount: 20, name: 'lá mơ (skunk vine) — funky-sulphurous layer' },
      { amount: 15, name: 'lá lốt (wild betel) — peppery-numbing' },
      { amount: 15, name: 'lá é (clove basil) — eugenol-warm' },
      { amount: 10, name: 'lá đinh lăng (Ming aralia) — bitter-ginseng' },
      { amount: 10, name: 'lá chanh (kaffir lime) — citrus' },
      { amount: 10, name: 'young mango leaves — sour-astringent' },
      { amount: 10, name: 'avocado leaves — anise (optional)' },
      { amount: 20, name: 'húng quế + rau răm + tía tô — anchor herbs' },
    ]},
    { title: 'Additional components', items: [
      { amount: 1, name: 'green banana, sliced, in lime water' },
      { amount: 1, name: 'star fruit, sliced' },
      { amount: 50, unit: 'g', name: 'roasted peanuts, crushed' },
      { amount: 30, unit: 'g', name: 'toasted sesame' },
    ]},
    { title: 'Dipping sauce', items: [
      { amount: 3, unit: 'tbsp', name: 'mắm nêm or fermented fish sauce' },
      { amount: 2, unit: 'tbsp', name: 'lime juice' },
      { amount: 1, unit: 'tbsp', name: 'sugar' },
      { amount: 2, name: 'chilies, sliced' },
      { amount: 2, name: 'cloves garlic, pounded' },
    ]},
  ],
  steps: [
    {
      title: 'Wash, sort, stack — the leaf library on one platter',
      description: `Wash all leaves in salted water (10 min soak, 3 rinses). Sort by type into piles on a communal platter — each pile a different colour, shape and aroma. The platter IS the library: dark green (lá sung), light green (húng quế), grey-green furry (lá mơ), glossy heart-shaped (lá lốt), red-veined (lá huyết dụ if used). The eater selects from the library, building each roll differently — personalisation is the game.\n\nSet sliced pork belly on a separate plate — warm, glistening, skin-fat-meat layers visible. Set green banana, star fruit, peanuts, sesame in small bowls.`,
      tip: `Each leaf's defence compound is the eater's flavour: dimethyl disulfide (lá mơ — repels insects), piperine (lá lốt — irritant to insect mouthparts), eugenol (lá é — antimicrobial), mangiferin (young mango — UV-protectant, bitter to browsers), tannins (green banana — protein-precipitant). The gỏi lá rừng is CHEMICAL WEAPONS repurposed as flavour. The forest's defence is the eater's pleasure.`,
    },
    {
      title: 'Build, roll, dip, bite — 12 leaves, 7-second aromatic cascade',
      description: `THE ROLL: lá sung (outer wrap) on palm → stack one of each leaf → pork slice + green banana + star fruit + peanuts + sesame → fold sides, roll tight → dip in mắm nêm → bite.\n\nTHE CASCADE (7 seconds):\n\nWave 1 (0-2s): lá lốt's PIPERINE — peppery, warm, tongue-tip numbing.\nWave 2 (2-4s): lá é's EUGENOL — clove-warm, throat-coating, extending warmth.\nWave 3 (3-5s): lá mơ's DIMETHYL DISULFIDE — funky, sulphurous, savoury bloom in the nasal cavity ("what IS that?" → "the thing I'm here for").\nWave 4 (4-6s): lá chanh's CITRAL — citrus-bright, resets nose from funk to fresh.\nWave 5 (5-7s): young mango's TANNIN — astringent, drying, puckering.\nWave 6 (throughout): pork FAT dissolves fat-soluble volatiles and carries them across the tongue, bridging waves.\nMắm nêm's FUNK arrives last — layering on the leaf cascade.\n\n36-60 distinct aromatic compounds reaching the olfactory epithelium simultaneously, in sequence. The sequence IS the experience. The forest's biodiversity, delivered in 7 seconds, impossible to replicate in any kitchen that does not border the forest.`,
      tip: `The gỏi lá rừng belongs to a global tropical-forest eating tradition: Mesoamerican "quelites" (mixed wild greens + protein), Ethiopian "yeqollo," Lao "sup pak," Thai "miang kham" — all share: MANY wild leaves + ONE protein + ONE sauce = the forest's diversity in one format. The convergence is ecological: tropical forests are earth's most biodiverse terrestrial ecosystems, and the peoples at their edges developed the same strategy — gather the diversity, roll it, eat it. The knowledge of which leaves are safe IS the recipe, and the recipe IS the culture's botanical encyclopedia, transmitted in rolls not books.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
