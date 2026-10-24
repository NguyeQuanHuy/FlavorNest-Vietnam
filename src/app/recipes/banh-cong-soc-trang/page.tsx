'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-cong-soc-trang',
  title: `Bánh Cống Sóc Trăng (Crispy Shrimp and Mung Bean Cakes — Khmer Heritage)`,
  subtitle: `A small cylindrical mould filled with rice-flour-and-mung-bean batter, topped with a whole shrimp and pork slice, lowered into deep oil until the batter sets to a crispy golden cup-shaped cake. The Khmer street snack Sóc Trăng serves every morning.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/banh-cong-soc-trang.jpg',
  intro: `Bánh cống — named for the cống mould (7-8 cm, 3-4 cm deep, handled tin cup) — is Sóc Trăng's most iconic mould-fried food. The COMPOSITE batter (rice flour + coarsely mashed mung bean + coconut milk) produces THREE textural zones: OUTER SHELL (starch-glass crust, 1-2 mm, shatters), MIDDLE LAYER (dense, moist, cake-like, steamed-not-fried), and TOPPINGS (shrimp crispy on top / moist where embedded in batter). The mould creates a moisture gradient: outer 170°C+ (fried), middle 100°C (steamed), toppings split-condition. Pre-heated mould = instant starch-glass = non-stick release. Sequential dual-crunch: starch-glass (1N, shatters first) + chitin tail-shell (3-5N, crunches second).`,
  ingredientSections: [
    { title: 'The batter', items: [
      { amount: 150, unit: 'g', name: 'rice flour' },
      { amount: 100, unit: 'g', name: 'mung beans, soaked, steamed, coarsely mashed' },
      { amount: 100, unit: 'ml', name: 'coconut milk' },
      { amount: 100, unit: 'ml', name: 'water' },
      { amount: 1, unit: 'tsp', name: 'salt' },
      { amount: 0.5, unit: 'tsp', name: 'turmeric' },
      { amount: 2, name: 'scallions, sliced thin' },
    ]},
    { title: 'Toppings (per cake)', items: [
      { amount: 12, name: 'whole shrimp, tail-shell on' },
      { amount: 100, unit: 'g', name: 'pork belly, 12 thin slices' },
    ]},
    { title: 'For serving', items: [
      { amount: 12, name: 'lettuce leaves' },
      { amount: 100, unit: 'g', name: 'herbs: húng quế, rau răm, kinh giới' },
      { amount: 100, unit: 'g', name: 'đồ chua (pickled carrot + daikon)' },
      { amount: 4, unit: 'tbsp', name: 'nước chấm chua ngọt' },
    ]},
  ],
  steps: [
    {
      title: 'Mix batter, pre-heat mould, fill-top-submerge-release — 4-5 min per cake',
      description: `Mix batter thick (pancake consistency), rest 15 min. Oil to 170-175°C. Pre-heat empty mould in oil 30 sec (hot mould = instant crust = clean release). Fill mould 2/3 with batter. Top with 1 shrimp + 1 pork slice. Lower into oil. Fry in mould 90-120 sec (crust forms, cake self-supports). Invert, tap — cake releases into oil. Free-fry 2-3 min, flip once. Drain on rack (not paper towel).`,
      tip: `Pre-heated mould: batter touches 170°C+ metal → outermost layer INSTANTLY dehydrates to starch-glass (non-adhesive). Cold mould = sticking, tearing, crumbling. The pre-heat separates the practiced vendor from the first-timer.`,
    },
    {
      title: 'Wrap in lettuce, dip — the Mekong format',
      description: `Lettuce leaf + hot bánh cống + herbs + đồ chua → loose wrap → dip in nước chấm. Bite: lettuce yields (cool) → crust SHATTERS (starch-glass) → moist middle (mung-bean-granular, coconut-milky) → shrimp snaps (glycine-sweet) → tail crunches (chitin, 3-5N, second crunch event). Nước chấm floods: sugar amplifies shrimp glycine, lime cuts coconut fat, fish sauce synergises with shrimp inosinate. Collection's most MOULD-DEPENDENT recipe — the tool IS the dish.`,
      tip: `Dual-crunch in one bite: starch-glass crust (1N, shatters first/lighter) + chitin tail (3-5N, crunches second/heavier) = sequential light→heavy within single tooth-closure. Joins cháo lươn (3 crunches) and kẹo cu đơ (dual) as multi-crunch-per-bite recipes.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
