'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'pho-cuon-bac-ninh',
  title: `Phở Cuốn (Fresh Phở Sheets Rolled Around Stir-Fried Beef and Herbs)`,
  subtitle: `The same rice-flour sheet that becomes phở noodles when cut into strips, here left whole and used as a wrapper — rolled around flash-seared beef, lettuce, herbs and a tangle of coriander, then dipped in nước chấm. The roll that turns the north's most famous noodle soup inside out.`,
  category: 'APPETIZER',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/pho-cuon-bac-ninh.jpg',
  intro: `Before a phở noodle becomes a noodle it is a sheet — a wide, thin, steamed circle of rice batter, lifted off the cloth still whole, glistening and supple. In every phở factory and every traditional village workshop in the Red River Delta, including the rice-processing villages of Bắc Ninh that have supplied Hanoi's noodle kitchens for generations, that sheet is the intermediate product: it is made, stacked, and then cut into the flat strips the world knows as phở. But the sheet before the cut is its own food, and using it as a wrapper rather than slicing it into ribbons is the idea that produced phở cuốn.\n\nThe connection to Bắc Ninh is the sheet itself. The province's rice-flour craft villages — the same cluster of hamlets that produce bánh tẻ, bánh phu thê, and half the dried rice paper in the north — have always made the phở sheets that Hanoi's noodle shops buy at four in the morning. A freshly steamed phở sheet from one of these villages is a different object from anything available in a shop: supple, faintly warm, translucent, with a slippery-elastic chew that dried-and-rehydrated phở cannot approach.\n\nThe filling is a flash-stir-fry that takes ninety seconds: thin-sliced beef tossed in a screaming-hot wok with garlic and a splash of soy and fish sauce until it is just seared, still pink at the centre, and coated in a glossy, caramelised glaze. The beef goes onto the sheet with a lettuce leaf, a sprig of coriander, a few leaves of Thai basil, and a length of chive — and the roll is made: fold, tuck, roll, and the result is a tight cylinder about the size of a cigar, cool and white on the outside, dark and warm at the centre.\n\nThe roll is dipped in nước chấm and eaten in two bites. The sheet is the phở noodle you never knew you were eating without context — and the roll is the proof that the noodle was always, all along, a wrapper that someone decided to cut.`,
  ingredientSections: [
    {
      title: 'The phở sheets',
      items: [
        { amount: 300, unit: 'g', name: 'rice flour (bột gạo tẻ)' },
        { amount: 60, unit: 'g', name: 'tapioca starch (bột năng)', note: `The 20% that gives the sheet its elasticity and translucence.` },
        { amount: 700, unit: 'ml', name: 'water' },
        { amount: 0.75, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil (in the batter)' },
        { amount: 1, name: 'OR: 20 sheets of fresh bánh phở tươi from a Vietnamese grocer', note: `The pragmatic shortcut. Steam them briefly (10 seconds) to revive suppleness before rolling.` },
      ],
    },
    {
      title: 'The stir-fried beef',
      items: [
        { amount: 400, unit: 'g', name: 'beef sirloin or flank, sliced against the grain to 3 mm', note: `Freeze 30 minutes for clean slicing.` },
        { amount: 4, name: 'cloves garlic, minced' },
        { amount: 1, unit: 'tbsp', name: 'soy sauce' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 1, unit: 'tbsp', name: 'sesame oil' },
        { amount: 2, unit: 'tbsp', name: 'neutral oil (for the wok)' },
      ],
    },
    {
      title: 'Inside the roll',
      items: [
        { amount: 1, name: 'head of soft lettuce' },
        { amount: 80, unit: 'g', name: 'coriander, whole sprigs' },
        { amount: 50, unit: 'g', name: 'Thai basil (húng quế), whole leaves' },
        { amount: 50, unit: 'g', name: 'perilla (tía tô), whole leaves (optional)' },
        { amount: 1, name: 'bunch of Chinese chives (hẹ), in full lengths', note: `Structural reinforcement and flavour distribution — rolled the full length, never cut short.` },
        { amount: 100, unit: 'g', name: 'bean sprouts (optional)' },
      ],
    },
    {
      title: 'Nước chấm',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'sugar', note: `Less than a southern nước chấm — the northern dip is sharper, saltier, less sweet.` },
        { amount: 5, unit: 'tbsp', name: 'warm water' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, name: 'cloves garlic, minced' },
        { amount: 2, name: 'red chilies, sliced' },
        { amount: 1, unit: 'tbsp', name: 'rice vinegar (optional)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Steam the sheets on cloth — 30 seconds each',
      description: `Mix the batter, rest 2 hours minimum. Stretch cloth drum-tight over a pot of hard-boiling water. Oil the cloth lightly. Ladle a thin layer, swirl into a 22-24 cm circle. Cover 30 seconds — until translucent and matte-glossy. Lift off in one motion onto an oiled tray.\n\nBrush each sheet with oil so they do not weld. Stack loosely. Hold at room temperature — never refrigerate. You need 16-20 sheets.\n\nThis is the same steaming rig, the same batter ratio, the same 30-second count as every steamed rice sheet in this collection. The technique is the north's common infrastructure; only the shape you cut — or do not cut — changes.`,
      tip: `The sheet is the phở noodle before the knife reaches it. Every phở noodle in the world was, moments before it became a noodle, a circle of exactly this batter on exactly this cloth. The roll simply catches it one step earlier. Same ingredient, different geometry, different dish — the cut is the fork in the road, and both roads lead somewhere good.`,
    },
    {
      title: 'Sear the beef in 90 seconds — hot wok, one batch, no crowding',
      description: `Toss the sliced beef with the soy sauce, fish sauce, sugar, pepper and sesame oil. Marinate 15-30 minutes.\n\nHeat the neutral oil in a wok over the highest flame until it smokes. Add the garlic — 10 seconds. Add ALL the beef in one layer, spread it, and do not touch it for 45 seconds. Then toss hard, twice, and take the wok off the heat. Total time: 90 seconds.\n\nThe beef should be seared dark at the edges, still pink at the centres, and glazed in a thin, caramelised coat. Tip onto a plate immediately — residual heat cooks it through in thirty seconds.`,
      tip: `At 3 mm thick, beef reaches medium-rare at its centre in about 90 seconds over a properly hot wok — the time it takes for conductive heat to travel 1.5 mm inward from each face. At 120 seconds the centre is medium. At 150 it is grey. The slice thickness was chosen for the wok temperature, and the wok temperature was chosen for the clock. Changing any one of the three breaks the system.`,
    },
    {
      title: 'Roll — sheet, lettuce, herbs, beef, chive, tight',
      description: `Lay a phở sheet flat. In the lower third: a lettuce leaf, herbs, 3-4 slices of seared beef still faintly warm, and a full-length chive.\n\nFold the near edge over, tuck the sides, roll forward snugly. The finished roll should be a tight cylinder about 10 cm long, with the chive's green and the herbs' shadow visible through the translucent wrapper.\n\nRoll two at a time, eat as you go. The sheet dries and stiffens within minutes; the beef cools and loses its smoky edge. A platter of six pre-rolled and waiting is a platter of six compromises.`,
      tip: `The chive running the full length is structural reinforcement and flavour distribution at once. Its fibrous length resists the shearing force of the first bite (which would otherwise squish the filling out the far end) and its allium compounds distribute a mild onion note across the entire roll. Rolling it short (cut into pieces) loses both functions.`,
    },
    {
      title: 'Dip, two bites, and reach for the next',
      description: `Mix the nước chấm: dissolve the sugar in the fish sauce and warm water, then add lime, vinegar if using, garlic and chili.\n\nDip one end deep. First bite: through the cool sheet and lettuce into the warm, smoky, soy-glazed beef. Second bite: the herb end, sharper and greener, chased by the chive.\n\nRoll in relays — one person rolling, the rest eating, exactly as every Vietnamese roll in this collection is eaten: the sheet's window of suppleness and the beef's window of warmth are both short, and a roll made now is always better than one made five minutes ago.`,
      tip: `Phở cuốn reveals what phở noodles actually taste like, because it removes the broth. In a bowl of phở the sheet is cut into strips, submerged in hot liquid, and tasted through the broth — the noodle is a texture carrier, and its own flavour is masked. In the roll the sheet is the outermost layer, the first thing the tongue meets, and its own character — the faint, clean, slightly sweet rice note, the slippery-elastic chew — is fully exposed. Eating phở cuốn after a lifetime of phở soup is like hearing an instrument solo after only knowing it in an orchestra.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
