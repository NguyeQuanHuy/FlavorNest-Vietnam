'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'xoi-ngu-sac',
  title: `Xôi Ngũ Sắc (Five-Colour Sticky Rice of the Northwestern Highlands)`,
  subtitle: `Glutinous rice dyed five colours — red, yellow, green, purple and white — using forest-plant extracts, steamed in separate batches and moulded into a vivid, five-layered disc. The Tày and the Thái's festival rice, coloured by the forest and eaten at every celebration the highland calendar holds.`,
  category: 'DESSERT',
  difficulty: 'Medium',
  totalTime: '12 hr + 1 hr',
  rating: 4.8,
  baseServings: 8,
  heroImage: '/images/recipes/xoi-ngu-sac.jpg',
  intro: `Xôi ngũ sắc is the highlands' most visually dramatic food: a disc of steamed glutinous rice containing five distinct colours from five plant extracts, each carrying symbolic meaning in the Tày-Thái cosmology: RED (fire, south), YELLOW (earth, centre), GREEN (wood, east), PURPLE (water, north), WHITE (metal, west). The disc is a complete cosmos on a plate.

The dyes are natural: gấc aril or lá cẩm đỏ (red/lycopene), turmeric (yellow/curcumin), pandan or ginger leaves (green/chlorophyll), lá cẩm tím (purple/anthocyanin), and undyed (white). The rice soaks overnight in each extract, the amylopectin absorbing the pigment molecules to the grain's centre. Each colour is steamed separately (to prevent bleeding), then moulded together while hot and sticky into a layered or petalled disc.

Served at Tết, weddings, ancestor offerings and house-raisings — every major festival the highland calendar holds. Eaten with muối vừng (sesame salt), torn by hand, the eating as much symbolic as gustatory: to eat the five colours is to eat the five elements, and to eat the five elements is to eat completeness.`,
  ingredientSections: [
    {
      title: 'The rice',
      items: [
        { amount: 1, unit: 'kg', name: 'glutinous rice, divided into 5 x 200 g portions' },
      ],
    },
    {
      title: 'The five dye extracts',
      items: [
        { amount: 1, name: 'RED: 200 g gấc seed arils mashed in 300 ml water, or 50 g lá cẩm đỏ simmered in 400 ml water', note: `Substitute: beetroot juice (200 ml).` },
        { amount: 1, name: 'YELLOW: 2 tbsp turmeric in 400 ml warm water' },
        { amount: 1, name: 'GREEN: 100 g pandan leaves blended with 400 ml water, strained', note: `Pandan adds fragrance as well as colour — the only dye plant that contributes significant flavour.` },
        { amount: 1, name: 'PURPLE: 80 g lá cẩm simmered in 500 ml water 20 min', note: `Substitute: purple cabbage juice (300 ml).` },
        { amount: 1, name: 'WHITE: plain water' },
      ],
    },
    {
      title: 'For steaming and serving',
      items: [
        { amount: 1, name: 'large steamer with cheesecloth' },
        { amount: 1, name: 'round bowl (15-20 cm) lined with plastic wrap, for moulding' },
        { amount: 4, unit: 'tbsp', name: 'muối vừng: toasted sesame + salt, 3:1' },
      ],
    },
  ],
  steps: [
    {
      title: 'Soak each portion in its dye overnight — 12-16 hours',
      description: `Place each 200 g portion in a separate bowl. Pour the corresponding extract over, submerging by 2 cm. White portion soaks in plain water.

Soak 12-16 hours. The amylopectin absorbs the pigment molecules — lycopene, curcumin, chlorophyll, anthocyanin — from surface to centre. Break a grain in the morning: the colour should reach the centre. If still white inside, soak 4-6 hours more.

Drain each portion before steaming.`,
      tip: `Glutinous rice absorbs dye faster than regular rice because its amylopectin-dominant starch matrix is more porous — the same open, branched network that makes it stickier when cooked makes it a better dye-absorber when raw. The dye absorption and the stickiness have the same structural cause.`,
    },
    {
      title: 'Steam each colour separately — 25-30 minutes, then mould while hot',
      description: `Steam each drained colour separately on cheesecloth, 25-30 minutes. Steaming intensifies the colour — gelatinised starch is transparent, so the pigment shows through clearly.

Keep all batches hot and covered. Working quickly: line the mould with plastic wrap. Press the first colour (the most vivid — red or purple) as a 1.5 cm layer. Add each subsequent colour, pressing firmly so the layers bond at the interface. White goes in the middle.

Press with a weight for 10 minutes. Unmould: invert, lift, peel. The disc should show 5 distinct layers, vivid and sharp-edged.

ALTERNATIVE: arrange as 5 petal-wedges radiating from a white centre — more dynamic, the market presentation.

Separate steaming prevents bleeding: each colour's pigment is fixed in its own gelatinised starch before contacting its neighbour. The contact produces a BOND (starch fuses) but not a BLEED (pigment stays).`,
      tip: `The five dye plants represent five zones of the highland landscape: gấc from the garden fence, turmeric from the field edge, pandan from the shaded grove, lá cẩm from the forest floor, and the white rice from the paddy below the mountain. Five ingredients, five plant chemistries, five cosmological directions. The xôi ngũ sắc is not a recipe — it is a map of the landscape, the chemistry, and the cosmos, eaten at celebrations because celebrations are when the map is needed.`,
    },
    {
      title: 'Serve with sesame salt — tear, dip, eat the cosmos',
      description: `Set the unmoulded disc on a banana leaf or a plate. Serve with muối vừng (sesame salt).

Tear pieces by hand — each tear should pull a cross-section of multiple colours. Dip in the sesame salt. The five colours taste almost the same (the dyes contribute colour, not flavour, except the pandan green, which carries its sweet fragrance), and the eating is visual and symbolic as much as gustatory.

The xôi ngũ sắc is the collection's most symbolic dish — food that is cosmology. The five elements are present on the plate. The five directions are mapped in colour. And the family that eats them together at the celebration table is eating completeness itself, shaped from glutinous rice and coloured by the forest that grows behind the house.`,
      tip: `Xôi ngũ sắc closes the collection's highland file with a dish that is pure symbol: no protein, no sauce, no technique beyond soaking and steaming, and a meaning that exceeds every other dish in the project. The collection has documented food as nutrition (the cháo), as preservation (the mắm), as engineering (the bánh rán), as medicine (the cháo lươn), as ethics (the thắng cố), as identity (the nậm pịa), and now as cosmology (the xôi ngũ sắc). The rice holds all five meanings, because rice — the grain that feeds Vietnam — has always held them all.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
