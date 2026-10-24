'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'cha-phuong',
  title: `Chả Phượng (Phoenix Spring Roll — Huế Imperial Court Style)`,
  subtitle: `A nem rán — the same fried spring roll the north wraps by the hundred at every wedding — but shaped, by hand, into a phoenix: the mythical bird of rebirth and prosperity, its body a roll of fried pork-and-shrimp paste, its wings two curved sheets of fried rice paper, its tail a fan of fried noodle strands, its head a carved vegetable, and its presentation a plate-as-stage that transforms a fried roll into a sculpture. The Huế imperial kitchen's most theatrical creation, and the dish where cuisine becomes art and art remains edible.`,
  category: 'APPETIZER',
  difficulty: 'Hard',
  totalTime: '3 hr',
  rating: 4.8,
  baseServings: 1,
  heroImage: '/images/recipes/cha-phuong.jpg',
  intro: `Chả phượng — the phoenix spring roll — belongs to a tradition that exists nowhere in Vietnamese cuisine outside Huế: ẩm thực cung đình, the imperial court cuisine, a formal cooking system developed inside the Nguyễn dynasty's citadel (1802-1945) to feed the emperor and the court with dishes that were as visually extraordinary as they were gastronomically precise. The court cuisine's principle was tứ quý — the "four preciouses" of colour, aroma, flavour and presentation — and the fourth of these, presentation, was elevated to an art form that treated the plate as a canvas, the food as a medium, and the cook as a sculptor-painter whose job was to transform ingredients into images: dragons from carrots, phoenixes from spring rolls, lotuses from taro, and entire mythological tableaux from vegetable carvings arranged on platters the size of coffee tables.

The chả phượng is the court cuisine's most famous surviving creation — the dish that every Huế imperial-cuisine restaurant puts on its menu and that every food-tourism website photographs — and it is, at its core, a simple fried spring roll (the same pork-shrimp-mushroom-noodle filling the nem rán contains) reshaped into the form of a phượng hoàng (the Vietnamese phoenix, analogous to the Chinese fenghuang): a mythical bird symbolising virtue, grace, prosperity and the union of male and female principles. The phoenix is the bride's symbol in Vietnamese wedding iconography (the dragon is the groom's), and the chả phượng at a wedding banquet is the bride's edible avatar — the mythical bird made from pork and rice paper and fried in oil, served on a platter that reconstructs the bird in flight.

The construction is entirely manual and requires a cook with the patience of a miniaturist and the skill of a sculptor:

THE BODY: a standard fried spring roll, 15-20 cm long, formed into a slight curve (the bird's torso), fried golden.

THE WINGS: two sheets of rice paper, cut into wing shapes (curved, pointed, with serrated feather-edge cuts), fried separately until golden and rigid, then attached to the body's sides with a dab of hot caramel (the edible glue).

THE TAIL: a fan of fried glass-noodle strands or fried rice-vermicelli strands, splayed behind the body — each strand fried to rigid, golden, individually visible filaments that represent the phoenix's tail feathers.

THE HEAD: a small piece of carrot or taro, carved into a bird's head (beak, eye, crest), attached to the body's front end with a toothpick.

THE PLATTER: the phoenix is set on a bed of shredded lettuce or carved vegetables, often surrounded by additional carved garnishes (tomato roses, cucumber fans, chili flowers) that form the mythical bird's landscape — clouds, flames, flowers.

The result is a sculpture 30-40 cm long that looks like a golden bird in flight, every component edible, every component made from standard Vietnamese spring-roll ingredients, and the total construction time — from filling-mixing to final platter arrangement — running 2-3 hours for a single phoenix. The Huế imperial-cuisine restaurants that serve chả phượng charge accordingly, and the dish is ordered not to eat (though it IS eaten, by dismantling the bird and dipping each component in nước chấm) but to photograph, to admire, and to demonstrate that the table can afford a cook who spent three hours making one spring roll look like a bird.`,
  ingredientSections: [
    {
      title: 'The filling (standard nem rán filling)',
      items: [
        { amount: 200, unit: 'g', name: 'minced pork (70% lean)' },
        { amount: 100, unit: 'g', name: 'shrimp, minced' },
        { amount: 30, unit: 'g', name: 'glass noodles, soaked, chopped' },
        { amount: 20, unit: 'g', name: 'wood-ear mushroom, soaked, minced' },
        { amount: 2, name: 'shallots, minced' },
        { amount: 1, name: 'egg, beaten' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'black pepper' },
      ],
    },
    {
      title: 'The phoenix structure',
      items: [
        {
          amount: 6,
          name: 'sheets of rice paper (bánh tráng), for the body roll + the wing shapes',
          note: `2 sheets for the body roll (standard nem rolling). 2 sheets cut into wing shapes (draw or trace the wing outline on the paper before dampening — once dampened, the paper is too soft to cut cleanly). 2 reserve sheets for repairs.`,
        },
        {
          amount: 50,
          unit: 'g',
          name: 'dried glass noodles or rice vermicelli (for the tail feathers)',
          note: `Fried DRY — straight from the packet into hot oil, where they puff and expand instantly into a cloud of golden, rigid, crispy filaments. The puffed noodles are shaped into a fan while still warm and flexible (5-second window), then set to rigidity as they cool.`,
        },
        {
          amount: 1,
          name: 'carrot, 5 cm piece (for the head carving)',
          note: `Carved into a bird's head: a pointed beak, a round eye (a black peppercorn or a clove pressed into the carrot), and a crest (thin carrot shavings curled with a peeler). The carving is the most skill-intensive step and the step that separates a professional chả phượng from an amateur one.`,
        },
        { amount: 2, unit: 'tbsp', name: 'sugar (melted to a caramel for edible glue)', note: `The caramel sets in 10 seconds and bonds the wings, head and tail to the body. Stronger than toothpicks, more elegant, and edible.` },
      ],
    },
    {
      title: 'For frying',
      items: [
        { amount: 800, unit: 'ml', name: 'neutral oil, for deep-frying' },
      ],
    },
    {
      title: 'The platter landscape',
      items: [
        { amount: 1, name: 'head of lettuce, shredded (the cloud bed)' },
        { amount: 2, name: 'tomatoes (carved into roses)' },
        { amount: 1, name: 'cucumber (carved into fans or leaves)' },
        { amount: 3, name: 'red chilies (carved into flowers — slit lengthwise, soaked in ice water to curl)' },
        { amount: 1, name: 'saucer of nước chấm (for the eventual eating)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Fry the components separately — body, wings, tail — each at its own temperature',
      description: `THE BODY: mix the filling (standard nem rán protocol). Roll a single, slightly curved spring roll 15-20 cm long — thicker than a standard nem (3 cm diameter rather than 2) because the phoenix's body must have MASS. Double-wrap in rice paper for structural rigidity. Fry at 165°C for 7-8 minutes until deep golden. Drain. Set aside.

THE WINGS: cut 2 sheets of dry rice paper into wing shapes — each wing is roughly 15 cm long, 8 cm wide, curved, with serrated cuts along the trailing edge to suggest feather separation. Dampen LIGHTLY (the wing must be pliable enough to hold its shape but dry enough to fry crisp). Fry each wing flat in oil at 170°C for 60-90 seconds — they puff, blister (the same rice-paper blistering the chả giò documented), and set to a rigid, golden, curved sheet. Lift out and drain. The wings must be rigid enough to stand unsupported when attached to the body — if they droop, the oil was not hot enough or the frying was too short.

THE TAIL: take a handful of DRY glass noodles (or rice vermicelli) and drop them directly into 190°C oil — they puff INSTANTLY (the starch expands in the oil's heat, the same mechanism that puffs a bánh phồng tôm), expanding to 3-4x their dry volume in 2-3 seconds. Lift out immediately — past 5 seconds they brown and burn. While still hot and flexible (a 5-second window), shape the puffed noodles into a fan by pressing them gently onto a flat surface and splaying the strands. The fan cools and sets to a rigid, golden, feathered shape in 10 seconds.

THE HEAD: carve the carrot piece into a bird's head. A sharp paring knife and steady hands: shape a pointed beak at one end (1 cm long, triangular), round the back into a smooth skull, press a black peppercorn into each side for eyes, and peel thin shavings from the top to curl into a crest. Blanch the carved head 30 seconds in boiling water to soften the surface slightly (the caramel-glue adheres better to a blanched surface than to a raw one).`,
      tip: `The three frying temperatures — 165°C for the body, 170°C for the wings, 190°C for the tail noodles — are calibrated to three different starch-puffing requirements. The body is a thick roll that needs TIME (7-8 min) at moderate heat to cook through. The wings are thin sheets that need RIGIDITY (the higher temperature drives faster dehydration and sets the rice paper to glass-hardness in 90 seconds). The tail noodles are INSTANTANEOUS (the very high temperature flash-puffs the dry starch in 2-3 seconds). Each component's thickness determines its temperature, and the temperature determines its texture: the body is crunchy, the wings are glass-rigid, and the tail is puffed-crispy. Three temperatures, three textures, one bird.`,
    },
    {
      title: 'Assemble the phoenix — caramel glue, toothpick skeleton, 15 minutes of sculpture',
      description: `THE CARAMEL GLUE: melt 2 tablespoons of sugar in a small pan until amber-liquid. This caramel is the adhesive — it sets in 10 seconds and bonds fried rice-paper components to each other more strongly than any toothpick. It is also edible, unlike glue.

ASSEMBLY (work quickly — the caramel sets fast):

1. BODY: set the curved fried spring roll on a work surface, curve upward (the phoenix arches its back in flight). Support with a small mound of shredded lettuce underneath if needed.

2. WINGS: dip the base-edge of each fried wing into the hot caramel (a thin line of amber sugar along the edge). Press each wing against the body's side — hold 10 seconds. The caramel bonds the wing to the body's rice-paper surface. The wings should angle upward at 30-45°, as if the bird is in mid-stroke.

3. TAIL: dip the narrow end of the puffed-noodle fan into the caramel. Press against the body's rear end. Hold 10 seconds. The tail should fan outward and slightly upward behind the body — the phoenix's trailing plumage.

4. HEAD: insert a toothpick into the carved carrot head, leaving 2 cm protruding. Dip the protruding toothpick in caramel and push it into the body's front end. The head should face forward, beak slightly upward — the phoenix in flight looks ahead and up.

5. DETAILS (optional): attach small fried rice-paper feather shapes along the body with dots of caramel. Curl thin strips of fried noodle around the head as additional crest plumage. The level of detail is the cook's pride and the restaurant's reputation.

Let the assembled phoenix rest 5 minutes — the caramel joints fully harden and the bird becomes structurally stable. It should now support its own weight: lift the platter and the phoenix stays assembled, wings rigid, tail fanned, head proud.`,
      tip: `The caramel-as-glue technique is a sugar-glass-adhesion system: when molten sugar (above 160°C) contacts a surface and cools, it vitrifies — passing through its glass transition — into a rigid, transparent, glassy solid that bonds to both surfaces it contacts. The bond strength of vitrified sugar is roughly 2-5 MPa (comparable to weak wood glue), which is more than sufficient to hold a fried rice-paper wing (weighing roughly 5 g) to a fried spring-roll body for the duration of a dinner service. The caramel joint is also EDIBLE — when the phoenix is dismantled for eating, the caramel breaks cleanly and adds a faint toffee sweetness to the dipped component. The adhesive IS a seasoning, and the engineering IS the cuisine.`,
    },
    {
      title: 'Set the phoenix on its platter landscape — the bird on the stage, then eat it',
      description: `THE PLATTER: arrange the shredded lettuce as a bed (clouds or a landscape). Set the carved tomato roses at the corners. Fan the cucumber slices as leaves. Curl the chili flowers (slit chili soaked in ice water, petals curled outward) beside the roses. The platter is the stage, and the phoenix stands on it.

Set the assembled phoenix on the centre of the platter — wings up, tail fanned, head forward, body arched. The lettuce's green, the tomato's red, the cucumber's dark green and the chili's red-orange surround the phoenix's golden body in a colour palette that is the Huế court cuisine's tứ quý (four preciouses) made visible: colour (red, green, gold), aroma (the fried roll's savoury, the vegetables' fresh), flavour (to come, when eaten), and presentation (the phoenix itself).

PHOTOGRAPH. This is the moment the dish exists for — the 3 seconds between the platter's arrival and the table's first Instagram capture. The phoenix is a photograph waiting to happen, and the Huế cook who built it for 3 hours built it for this moment as much as for the eating that follows.

THEN EAT. The phoenix is dismantled by hand and by chopstick:

- The WINGS are snapped off and dipped in nước chấm — they shatter like the chả giò's blistered crust, because they ARE rice-paper crust, shaped into wings.
- The TAIL is broken into puffed-noodle clusters and eaten like crunchy snacks — each strand dissolving on the tongue in a flash of fried-starch sweetness.
- The BODY is sliced into rounds — the cross-section reveals the standard nem filling (pork, shrimp, mushroom, noodle), and each round is dipped and eaten as a fried spring roll, which is what it always was.
- The HEAD is admired, photographed again, and — depending on the eater — eaten (it is blanched carrot, perfectly edible) or set aside as a souvenir of the meal.

The phoenix is gone in 10 minutes. Three hours of construction, 10 minutes of eating. The ratio is the court cuisine's statement: the value is not in the calorie but in the craft, not in the satiation but in the spectacle, and the spectacle — a golden bird on a green stage, made from pork and rice paper and three hours of a cook's attention — is the wedding's most memorable plate, long after the gà luộc is forgotten and the tôm hùm is digested.`,
      tip: `Chả phượng closes the wedding collection and the collection's entire presentation file with its most extreme argument: that a spring roll and a sculpture can be the same object, that a cook and an artist can be the same person, and that a meal's most valuable plate can be one that took 3 hours to make and 10 minutes to eat. The Huế court cuisine's legacy is this argument — that CARE is a flavour, that TIME invested in appearance is not time wasted, and that the eater who receives a golden phoenix on a platter of carved vegetables is receiving not just a fried roll but a message: you are worth three hours of someone's hands, and the three hours are on the plate, and the plate is yours.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
