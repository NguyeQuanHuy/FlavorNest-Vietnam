'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'goi-la-cach-ca-duoi',
  title: `Gỏi Lá Cách Cá Đuối (Stingray Salad with Wild Pepper Leaf — Cà Mau Style)`,
  subtitle: `Stingray wing — poached until the cartilage softens and the flesh falls into silky, gelatinous ribbons — tossed with lá cách, the wild pepper leaf whose numbing, almost Sichuan-pepper bite is found in no other province's salad. The gỏi that tastes of the southernmost mangrove and the fish that swims in its shadow.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '45 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/goi-la-cach-ca-duoi.jpg',
  intro: `Cà Mau is the southernmost point of Vietnam — where the land becomes sea and the mangrove forests stand knee-deep in brackish water. Two ingredients define Cà Mau's table: cá đuối (stingray) and lá cách (Premna serratifolia, the wild pepper leaf), and this salad puts them together.

Stingray is cartilaginous — no bones, only flexible cartilage that softens to a gelatinous gel when poached. The flesh between the cartilage plates falls into long, silky, collagen-rich ribbons unlike any bony fish — denser, more gelatinous, with a lip-coating richness from the dissolved collagen.

Lá cách has a flavour unlike any herb in the Vietnamese canon: sharply peppery (closer to Sichuan pepper's numbing tingle than to black pepper's heat), faintly bitter, with aromatics running from citrus to camphor. The leaves are used raw — the province's aromatic signature. A gỏi with lá cách is from Cà Mau; without is from somewhere else.

The combination is logical: the ray's flesh coats the tongue (rich, gelatinous); the lá cách cuts through the coating (sharp, numbing). Coat, cut, coat, cut — the same fat-acid oscillation every gỏi is built on, here with a mangrove fish and a mangrove herb.`,
  ingredientSections: [
    {
      title: 'The stingray',
      items: [
        { amount: 500, unit: 'g', name: 'stingray or skate wing, skin removed', note: `Skate wing (widely available in Europe) is the direct substitute — identical anatomy and texture.` },
      ],
    },
    {
      title: 'The lá cách',
      items: [
        { amount: 50, unit: 'g', name: 'lá cách (Premna serratifolia), young leaves', note: `If unavailable: 0.5 tsp ground Sichuan pepper + young pepper leaves (lá lốt) + shiso approximates the register. Name the substitute honestly.` },
      ],
    },
    {
      title: 'The poaching liquid',
      items: [
        { amount: 1, unit: 'L', name: 'water' },
        { amount: 20, unit: 'g', name: 'ginger, bruised' },
        { amount: 1, unit: 'tbsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'rice vinegar', note: `Firms the cartilage, converts urea to less volatile compounds.` },
        { amount: 2, name: 'stalks lemongrass, bruised' },
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
        { amount: 1, unit: 'tbsp', name: 'water' },
      ],
    },
    {
      title: 'The crunch and herbs',
      items: [
        { amount: 50, unit: 'g', name: 'rau răm, torn' },
        { amount: 30, unit: 'g', name: 'húng quế, leaves picked' },
        { amount: 60, unit: 'g', name: 'roasted peanuts, crushed' },
        { amount: 3, unit: 'tbsp', name: 'fried shallots' },
        { amount: 1, name: 'small onion, sliced paper-thin, iced-water soaked' },
      ],
    },
  ],
  steps: [
    {
      title: 'Poach the stingray — 15 minutes, shred while warm',
      description: `Simmer the poaching liquid. Lower the ray pieces in — bare simmer, never boil (boiling shreds the flesh). Poach 12-15 minutes until a chopstick passes through with no resistance and the cartilage plates are soft and flexible.

Cool 5 minutes. Shred by hand while still warm: pull the flesh from the cartilage in long, thin ribbons. Include small pieces of softened cartilage for gelatinous chew. The shredded ray should be pale, translucent-edged, glossy with dissolved collagen.

AMMONIA NOTE: fresh ray/skate can carry a faint ammonia smell from urea. The ginger and lemongrass mask it; the vinegar converts it. If strong before poaching: soak 30 minutes in cold water with lime juice first.`,
      tip: `Stingray's collagen content is 3-4 times higher than bony fish. During poaching, the cartilage's collagen converts to gelatin at 60-70°C. The dissolved gelatin coats every ribbon in a glossy, lip-coating film that triggers the same mouthfeel receptors as fat — the brain reads lean ray flesh as rich because gelatin mimics fat's tactile signature. The collagen is not richness. It is the perception of richness.`,
    },
    {
      title: 'Toss while warm — the gelatin absorbs the dressing at sol temperature',
      description: `Tear the lá cách into rough pieces by hand — torn edges release more volatile oils. Mix the dressing: dissolve sugar in fish sauce, lime and water, add garlic and chili.

In a wide bowl: the warm shredded ray. Pour dressing over — the warm collagen (above 30°C, in sol state) absorbs the dressing into its open structure. Cool collagen (below 25°C, gel state) would resist. Dress warm = seasoned through. Dress cold = seasoned only at surface.

Add torn lá cách, onion rings, half the herbs. Toss twice. Transfer to plate. Scatter peanuts, fried shallots, remaining herbs.`,
      tip: `Dressing warm ray is a collagen-phase decision. Above 30°C the gelatin is in its sol state — fluid, permeable, absorbing dissolved flavour molecules into its matrix. Below 25°C it sets to gel — closed, impermeable, rejecting the dressing. The temperature at tossing determines how deeply the dressing penetrates: deep (warm) or surface-only (cold).`,
    },
    {
      title: 'Eat — coat and cut, the mangrove oscillation',
      description: `Each mouthful carries two events:

THE RAY: silky, gelatinous ribbons that coat the tongue — rich-feeling, marine-sweet, lip-coating, carrying the poaching liquid's ginger-lemongrass warmth.

THE LÁ CÁCH: sharp, peppery, faintly numbing — its hydroxyl-alpha-sanshool activates touch receptors, creating a tingling buzz that strips the ray's collagen coating and resets the palate.

The oscillation: coat (ray) → cut (leaf) → coat → cut. The fish builds richness; the leaf strips it; the cycle runs every bite. Peanuts crunch through both. Rau răm adds its pepper alongside the lá cách's — two peppers, two registers.

This is the southernmost gỏi in the collection — stingray from the mangrove channels, Premna from the mangrove shore, combined at the exact spot where water meets land. The two ingredients co-occur only in this ecosystem. Geography is the recipe, and the recipe is a map of Vietnam's southern tip.`,
      tip: `Gỏi lá cách cá đuối closes the raw/cold salad file with the most geographically specific gỏi in the project. The stingray swims in the brackish channels between mangrove roots. The Premna grows on dry land between the channels. The salad is the meeting point — the exact spot where water meets shore. No other province has both ingredients in the same ecosystem, and no other province can make this dish honestly. The collection's gỏi file now spans from the northernmost nộm hoa chuối (a courtyard banana tree in Hanoi) to the southernmost gỏi lá cách (a mangrove forest in Cà Mau) — the full length of the country, salad by salad, herb by herb, crunch by crunch.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
