'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-ro-dong-kho-to',
  title: `Cá Rô Đồng Kho Tộ (Field Perch Braised in Clay Pot)`,
  subtitle: `Small, bony, fierce-jawed paddy perch — caramelised in a clay pot with fish sauce, pepper and dark-amber nước màu until the bones soften, the sauce reduces to a sticky glaze, and each tiny fish seasons a bowl of rice from edge to edge.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '50 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/ca-ro-dong-kho-to.jpg',
  intro: `Cá rô đồng — the climbing perch, Anabas testudineus — walks between ponds on its pectoral fins and bites the hand that catches it. Too bony to fillet, too spiny for soup, too fierce to grip gently — yet one of the most beloved fish in the Vietnamese home kitchen, because the kho tộ format softens the bones, concentrates the flesh and produces a glaze so dark that one tiny fish seasons an entire rice bowl.\n\nThe kho tộ is the southern home-cooking format: a small clay pot (tộ) over the lowest flame, fish in caramel-fish-sauce-pepper, reducing 35-40 minutes to a dark sticky glaze. The tộ's slow heat and porous, season-absorbing walls produce a gentler braise than any metal pot. A well-used tộ needs less caramel per batch because the pot itself is caramelised.\n\nThe cá rô's numerous thin bones dissolve in the caramel's mild acidity (gluconic acid, formic acid from sugar decomposition at 170°C+) and the fish sauce's acetic acid over 35-40 minutes, from needle-sharp to imperceptible. Eaten whole — bones, head, tail — the bones that were armour in life become invisible calcium at the table.`,
  ingredientSections: [
    { title: 'The fish', items: [
      { amount: 600, unit: 'g', name: 'cá rô đồng, 8-10 fish, cleaned', note: `Scaled, gutted, whole. In Europe: small whole perch, sardines.` },
    ]},
    { title: 'The kho tộ braise', items: [
      { amount: 2, unit: 'tbsp', name: 'sugar (for dark-amber caramel)' },
      { amount: 1, unit: 'tbsp', name: 'water (to stop caramel)' },
      { amount: 3, unit: 'tbsp', name: 'fish sauce' },
      { amount: 1, unit: 'tbsp', name: 'soy sauce' },
      { amount: 1, unit: 'tsp', name: 'sugar (additional)' },
      { amount: 1, unit: 'tsp', name: 'coarsely cracked black pepper' },
      { amount: 3, name: 'shallots, sliced' },
      { amount: 2, name: 'cloves garlic, sliced' },
      { amount: 1, name: 'red chili, sliced' },
      { amount: 80, unit: 'ml', name: 'coconut water or water' },
    ]},
    { title: 'To serve', items: [
      { amount: 4, name: 'bowls of hot steamed rice' },
      { amount: 200, unit: 'g', name: 'dưa cải chua' },
      { amount: 1, name: 'bowl of canh' },
    ]},
  ],
  steps: [
    {
      title: 'Caramel, layer the fish, lowest heat — the clay pot does the rest',
      description: `Dark-amber caramel in the tộ. Lay shallots, garlic, then fish in a single layer. Pour fish sauce, soy, sugar, coconut water, pepper — liquid halfway up the fish. Cover. LOWEST heat — the liquid barely trembles. 35-40 minutes, NO stirring (the fish is fragile). The clay pot's slow conductivity distributes gentle heat evenly.`,
      tip: `Dark-amber caramel decomposes sugar past 170°C into organic acids (gluconic, formic, acetic) that lower the braising pH to 4.5-5.0. At this pH, hydroxyapatite in the bones dissolves — hydrogen ions displace calcium from the crystal lattice. After 35-40 min, thin bones bend rather than prick. Darker caramel = more acid = faster bone-softening. The caramel darkness IS the bone-softening prescription.`,
    },
    {
      title: 'Braise 35-40 minutes lid-on, then check the glaze',
      description: `At minute 30: check. Sauce should have reduced to thick, dark, glossy glaze coating the fish. If thin: uncover 5-8 minutes. If thick and threatening to scorch: off heat. Fish are done when: a chopstick pressed into one yields completely (bones bending, not resisting), and the glaze leaves a trail that closes in 5 seconds.\n\nRest 5 minutes lid-on — the clay pot's stored heat gives 5 bonus minutes of bone-softening.`,
      tip: `Clay pot thermal mass: cools in 15 minutes vs metal's 2 minutes. The slow cooling means the kho continues braising during rest, and bone-softening — which runs on time-at-temperature — gains free work from stored heat. The clay pot's memory is the kho's bonus round.`,
    },
    {
      title: 'Eat whole from the pot — every bone is edible now',
      description: `Bring the tộ to the table. Lift fish onto rice — eat WHOLE. The bones are soft, bendable, imperceptible. The flesh fused with dark glaze delivers: caramel's toffee-bitter-sweet, fish sauce's salt-umami, pepper's warmth, and the cá rô's own clean paddy-fish sweetness underneath.\n\nSmall-fish kho file: cá linh (pale caramel, 20 min, light) → cá kèo (medium, 30 min, herb-blanketed) → cá rô (dark, 40 min, glaze). Darker caramel = more acid but more bitterness, needing longer time to round. Caramel depth and braising time are linked variables — adjusting one without the other produces either bitter-bony (dark+short) or sweet-soft (pale+long).`,
      tip: `Cá rô đồng kho tộ is the kho every Vietnamese child grew up eating — the fish was free, the clay pot was old, the caramel was a spoonful of sugar. The kho + cải chua + canh three-dish format is the Vietnamese home dinner, and the cá rô kho tộ has sat at its centre for as long as the paddies have held climbing perch and the kitchens have held clay pots.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
