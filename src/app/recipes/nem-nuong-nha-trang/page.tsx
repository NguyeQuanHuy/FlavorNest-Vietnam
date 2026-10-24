'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'nem-nuong-nha-trang',
  title: `Nem Nướng Nha Trang (Grilled Pork Sausage Rolls — Nha Trang Style)`,
  subtitle: `Pork mince — pounded with garlic, sugar, fish sauce and baking powder until the paste is sticky, springy and cohesive enough to cling to a bamboo skewer through ten minutes of charcoal grilling — turned into small, caramelised, sweet-smoky sausages with a bounce so firm the teeth register it before the tongue registers the flavour. Wrapped in rice paper with herbs, green banana and nước chấm, the way Nha Trang wraps everything.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/nem-nuong-nha-trang.jpg',
  intro: `Nem nướng is grilled pork sausage — but calling it sausage undersells the paste's engineering and the city's pride. Nha Trang, the beach capital of Khánh Hòa province, claims nem nướng the way Huế claims bún bò and Hà Nội claims phở: as the city's signature, its edible identity, the dish that Nha Trang residents measure every other city's version against and find wanting. The claim is not tourism branding — it is a genuine technical distinction, because Nha Trang's nem nướng paste is made differently from any other grilled pork product in Vietnam, and the difference is in the bounce.

The paste is built from lean pork mince (70-80% lean) that is pounded — by hand in a mortar or by machine in a food processor — with salt, sugar, garlic, fish sauce and a small, critical addition: baking powder (or in some traditional recipes, cooked sticky rice or boiled pork skin, which serve the same textural function by different chemical means). The pounding extracts the pork's myosin into a sticky, elastic, protein gel network — the same salt-extraction-and-cross-linking mechanism this collection has documented in the chả cá Phú Quốc, the chạo tôm and every bouncy fish ball in the project — and the baking powder contributes CO₂ during grilling that inflates tiny air pockets in the paste, giving the cooked sausage a lighter, springier, more aerated bounce than a dense, un-leavened pork paste would produce.

The result: a small, cylindrical, grilled pork sausage (about the size and shape of a breakfast sausage link) that is sweet (the sugar caramelises on the charcoal), smoky (the dripping fat flares), pink at the core (the curing salt or the sugar's nitrosyl reactions), and — most distinctively — BOUNCY. Bite a Nha Trang nem nướng and the teeth sink in and the paste pushes back, springing against the jaw with a resilience that is closer to a hot dog's snap than to a meatball's crumble. The bounce is the signature. Every Nha Trang native's test for a nem nướng is the bounce, and a nem that crumbles rather than bounces is a nem that failed.

The eating format is the central Vietnamese wrap: the grilled nem is set on a sheet of dampened rice paper with lettuce, herbs, green banana, star fruit, pickled vegetables, bún and sometimes a smear of the sweet-sour dipping sauce directly on the paper. The roll is dipped in one of two nước chấm: a clear, classic fish-sauce-lime-chili, or — the Nha Trang specific — a thick, opaque, fermented-bean-paste-based dipping sauce (nước chấm đậu phộng / tương) that is sweeter, thicker and nuttier than any nước chấm in the south, and that is the second thing Nha Trang claims as its own.`,
  ingredientSections: [
    {
      title: 'The nem paste',
      items: [
        {
          amount: 800,
          unit: 'g',
          name: 'pork mince, 70-80% lean',
          note: `Lean enough for bounce, fatty enough for juiciness. The myosin extraction that produces the bounce works best with lean meat; the fat provides the flavour and the drip that flares on the charcoal. Pre-ground supermarket mince works but hand-minced is better (finer control over the lean-fat ratio, and the meat is not pre-salted or frozen, both of which damage myosin's cross-linking capacity).`,
        },
        { amount: 10, unit: 'g', name: 'salt (1.25% of meat weight)' },
        { amount: 3, unit: 'tbsp', name: 'sugar', note: `More sugar than a typical sausage — the sugar caramelises on the grill, giving the nem its dark, lacquered, sweet-smoky surface.` },
        { amount: 5, name: 'cloves garlic, pounded to paste' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'ground white pepper' },
        {
          amount: 1,
          unit: 'tsp',
          name: 'baking powder',
          note: `The bounce booster — its CO₂ creates micro-air-pockets in the paste during grilling, giving the cooked nem a lighter, springier texture. Some recipes substitute 30 g boiled-and-mashed pork skin (collagen-based bounce) or 2 tbsp cooked sticky rice (starch-based bounce). All three work by different mechanisms; baking powder is the simplest.`,
        },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'For grilling',
      items: [
        { amount: 20, name: 'bamboo skewers, soaked 30 minutes' },
        { amount: 1, unit: 'tbsp', name: 'oil, for brushing' },
      ],
    },
    {
      title: 'The Nha Trang dipping sauce (nước chấm nem nướng)',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'tương (fermented soybean paste) or hoisin sauce',
          note: `The base — sweet, thick, fermented-bean. Nha Trang's traditional version uses a local tương; hoisin is the accessible substitute.`,
        },
        { amount: 2, unit: 'tbsp', name: 'pork liver pâté (optional — the traditional Nha Trang addition)', note: `Blended into the sauce for a richer, more savoury body. If omitting: add 1 extra tbsp hoisin.` },
        { amount: 2, unit: 'tbsp', name: 'roasted peanuts, ground fine' },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tbsp', name: 'chili-garlic paste (sa tế)' },
        { amount: 2, unit: 'tbsp', name: 'water' },
        { amount: 1, unit: 'tbsp', name: 'rice vinegar' },
      ],
    },
    {
      title: 'The wrap platter',
      items: [
        { amount: 30, name: 'sheets of bánh tráng (rice paper)' },
        { amount: 1, name: 'head of lettuce, leaves separated' },
        { amount: 200, unit: 'g', name: 'herbs: húng quế, tía tô, rau răm, kinh giới' },
        { amount: 2, name: 'green bananas, sliced thin, in lime water' },
        { amount: 2, name: 'star fruit, sliced' },
        { amount: 1, name: 'cucumber, in batons' },
        { amount: 200, unit: 'g', name: 'bún (rice vermicelli), blanched' },
        { amount: 100, unit: 'g', name: 'đồ chua (pickled carrot and daikon)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Pound the paste until it bounces — the myosin is the muscle, the slap is the test',
      description: `Combine the pork mince with salt. Process in a food processor (or pound in a mortar) for 3-4 minutes until the paste is sticky, pale pink, and clings to the blade or the pestle in a single cohesive mass. The paste should feel tacky — pull your hand away and the paste stretches 2-3 cm before breaking.

Add the sugar, garlic, fish sauce, pepper, baking powder and oil. Process 30 seconds more — just until combined. Do not over-process past this point (the fat melts from friction heat and the paste becomes greasy rather than bouncy).

SLAP TEST: take a handful of paste and slap it into the bowl ten times — the same alignment slap the chạo tôm and every myosin paste in this collection has performed. The slapping aligns the dissolved myosin molecules into a tighter, more elastic, more cross-linked network. After 10 slaps the paste should be: sticky enough to cling to a vertical finger, elastic enough to bounce back when poked, and cohesive enough to hold together when squeezed in a fist and extruded between the thumb and forefinger into a smooth cylinder.

Refrigerate 30 minutes — the cold firms the fat and tightens the myosin network to maximum bounce.`,
      tip: `The baking powder's role is aeration, not leavening in the bread sense. During grilling, the baking powder (sodium bicarbonate + acid) releases CO₂ gas, which inflates micro-bubbles throughout the paste. These bubbles do not escape (the myosin gel network traps them) and they remain as permanent air pockets in the cooked sausage, reducing the paste's density and increasing its spring — the same way aeration makes a mousse lighter than a custard. A nem without baking powder is denser, firmer and chewier; a nem with it is lighter, springier and bouncier. The bounce is the air, and the air is the baking powder.`,
    },
    {
      title: 'Shape on skewers and grill — 8-10 minutes, turning, the sugar caramelises',
      description: `Oil your hands. Take 40-50 g of paste (a golf ball), press it around the upper half of a bamboo skewer, and shape into a cylinder 8-10 cm long and 2-2.5 cm thick. Smooth with wet fingers — no cracks, no thin spots. The paste should grip the skewer firmly (the myosin's adhesion holds it).

Make 16-20 skewers. Brush lightly with oil.

Grill over glowing charcoal embers — medium heat, 8-10 cm above the coals. Turn every 2 minutes. The sugar in the paste caramelises progressively: pale → golden → dark amber → lacquered. The fat renders at the contact points and drips onto the coals, producing brief flare-ups of smoky, fat-fire flame that char tiny spots on the nem's surface — the leopard-spotting that is the charcoal grill's signature and that no oven can replicate.

Total grilling time: 8-10 minutes. The nem is done when: the surface is uniformly dark-amber-to-brown with leopard spots of char, the paste feels firm-springy when squeezed (not hard — hard is overcooked; springy is correct), and the interior, when one is sacrificed and cut, is pink-tinged (the sugar-nitrosyl reaction) and uniformly cooked with no raw centre.`,
      tip: `The sugar's surface caramelisation is not just colour — it is a flavour layer that no other grilled meat in this collection carries at this intensity. The paste contains 3 tablespoons of sugar per 800 g of meat — roughly 5% sugar by weight, which is 3-4 times the sugar in a typical marinade. At grilling temperature the sugar undergoes caramelisation (above 160°C) and Maillard reactions with the pork's amino acids simultaneously, producing both the golden-brown colour AND a complex mix of caramel-specific volatiles (diacetyl, furanone, maltol) that are distinct from the Maillard's own volatiles (pyrazines, thiophenes). The nem's flavour is a DUAL browning — caramel chemistry plus Maillard chemistry happening on the same surface — and the sweet, smoky, almost candy-like character of the crust is the sum of both.`,
    },
    {
      title: 'Wrap with everything — the nem in a roll is bigger than the nem alone',
      description: `Mix the Nha Trang dipping sauce: warm the tương/hoisin with water, stir in the ground peanuts, sugar, chili-garlic paste, liver pâté if using, and rice vinegar. The sauce should be: thick (spooning consistency, not pouring), sweet-savoury-nutty, and warm.

Dampen a rice paper sheet. Lay lettuce, bún, a few slices of green banana, star fruit, cucumber, pickled vegetables, herbs. Slide 1-2 grilled nem off their skewers and place on the pile. Optionally smear a thin line of the dipping sauce directly onto the rice paper. Roll tight.

Dip the roll's cut end into the Nha Trang sauce. Bite. The roll's architecture delivers its components in sequence: rice paper (neutral stretch), lettuce (crunch), bún (neutral chew), herbs (aromatic riot), green banana (starchy astringent), and then the nem — the bounce arriving through the bite as a resistance, a pushback, a physical assertion that says this is not a meatball, this is not a patty, this is a sausage that was engineered to push back, and the push is the pleasure.

The Nha Trang sauce — thick, sweet, peanut-rich, fermented-bean-deep — coats the bite in a glaze that no southern nước chấm matches for body and sweetness. It is the sauce that makes Nha Trang's wrap format taste different from every other central Vietnamese wrap format, because the sauce is sweeter, thicker, more opaque and more complex than the clear fish-sauce-lime the rest of the coast uses.

Eat 3-4 rolls per person. The nem is the vehicle, and the roll is the journey, and the journey is Nha Trang's — a beach city that wraps its grilled pork in paper and herbs and eats it with a sauce nobody else makes, and calls it theirs, and is correct.`,
      tip: `Nem nướng Nha Trang is the collection's most engineered ground-meat product — a paste where the salt extracts the myosin, the pounding cross-links it, the baking powder aerates it, the sugar double-browns it, and the charcoal smoke finishes it — and setting it beside the collection's other myosin pastes reveals the technology's range: chạo tôm (shrimp paste on sugarcane — adhesion problem, grilled), chả cá Phú Quốc (mackerel paste — bounce-in-ball problem, poached and fried), nem Lai Vung (pork paste — fermentation problem, raw), and now nem nướng (pork paste — aerated-bounce-on-skewer problem, grilled). Same myosin chemistry, four different engineering objectives, four different products. The myosin gel is the universal platform, and the cook's objective — what problem the paste must solve — determines which additives, which shaping and which cooking method the paste receives. The platform is one recipe. The products are a dozen.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
