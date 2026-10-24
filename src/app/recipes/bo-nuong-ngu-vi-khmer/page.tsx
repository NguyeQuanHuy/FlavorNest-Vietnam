'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bo-nuong-ngu-vi-khmer',
  title: `Bò Nướng Ngũ Vị Kiểu Khmer (Khmer Five-Spice Grilled Beef)`,
  subtitle: `Beef sliced thick, marinated in a Khmer spice paste of lemongrass, galangal, turmeric, garlic and makrut lime — grilled over coconut-shell charcoal until charred at the edges and still blushing at the centre. Dipped in a lime-salt-pepper powder with roasted rice, and eaten with a platter of raw vegetables and herbs that the Mekong always sets beside anything that came off a fire.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/bo-nuong-ngu-vi-khmer.jpg',
  intro: `The Khmer communities of Trà Vinh grill beef with a spice vocabulary that the Vietnamese mainstream does not use and that marks the dish as Khmer from the first smell off the fire. Where a Saigon marinade reaches for lemongrass, garlic, fish sauce and sugar — and stops — the Trà Vinh Khmer version builds a kroeung-adjacent paste: lemongrass still, but now joined by galangal, fresh turmeric, makrut lime zest, fingerroot if the garden has it, and sometimes a shake of Cambodian khmang — roasted rice powder blended with dried spices into a fragrant, sandy, tan powder that is the Khmer kitchen's all-purpose seasoning and that appears in no Vietnamese recipe outside the Khmer-majority provinces. The paste coats the beef, the beef meets the coals, and the result smells like a Cambodian market at dusk rather than a Saigon barbecue — piney from galangal, citrus-resinous from lime leaf, golden from turmeric, and layered in a way that fish-sauce-and-sugar alone never achieves.

The beef is cut thick — 1.5 to 2 centimetres, against the grain — because the Khmer grill wants a char on the outside and a blush on the inside, and a thin slice cannot hold a blush over embers for any useful length of time. The charcoal, in Trà Vinh, is coconut-shell charcoal: denser, hotter and longer-burning than wood charcoal, with a faintly sweet, clean smoke that the Delta's coconut economy provides in inexhaustible supply. Over those embers the marinated slices grill 3-4 minutes a side, turned once, basted once with the residual marinade mixed with a spoonful of oil, and pulled when the surface is deeply charred in streaks and the centre, pressed with a finger, gives with a springy resistance that means medium-rare. Rested 5 minutes on a board, sliced across the grain into strips, and served.

The dipping salt is where the Khmer identity lands hardest. Vietnamese grilled beef typically gets nước chấm — the thin, sweet-sour fish sauce that accompanies most things — or at most a lime-salt-pepper saucer. The Khmer version of Trà Vinh serves muối ớt kiểu Khmer: a pounded, coarse, dry dipping powder of sea salt, roasted chili, cracked black pepper, toasted rice powder and a generous quantity of lime zest, mixed fresh so the citrus oils are still volatile. It is drier, grainier, more aromatic and more complex than plain muối tiêu chanh, and it clings to the cut surface of the beef rather than running off it — a powder rather than a sauce, an entirely different delivery mechanism. Each strip is pressed into the salt face-down, lifted, and eaten with a leaf of herbs and a slice of unripe mango or cucumber, and the bite carries the char, the spice paste, the citrus-salt and the green crunch in one.

The platter around the beef is the Delta's fixed escort for anything grilled: green mango, cucumber, star fruit, green banana, lettuce, and the herb basket — rau răm, húng quế, tía tô, ngò gai. It is the same palate-resetting, tannin-and-acid, crunch-against-richness architecture this collection has documented beside every piece of grilled meat from Huế to Tây Ninh, and it needs no further explanation. What does need naming is the way the whole plate functions as a cross-cultural sentence: Khmer spice paste, Vietnamese fish sauce in the marinade, Cambodian roasted-rice dipping powder, Delta herbs, coconut-shell fire. Trà Vinh does not blend its two cultures into one — it lets them stand side by side on the same plate, each fully articulated, each recognisable, and the plate is richer for the bilingualism than it would be for any fusion.`,
  ingredientSections: [
    {
      title: 'The beef',
      items: [
        {
          amount: 700,
          unit: 'g',
          name: 'beef sirloin, rump cap, or flank — in thick slices 1.5-2 cm',
          note: `A cut with some marbling — not lean fillet, which dries over coals. Sliced against the grain before marinating so the paste coats maximum surface. Each slice should be large enough to handle on the grill with tongs, roughly palm-sized.`,
        },
      ],
    },
    {
      title: 'The Khmer spice paste marinade',
      items: [
        {
          amount: 3,
          name: 'stalks lemongrass, tender parts only, sliced thin',
          note: `Pounded to a paste. In a kroeung the lemongrass is the foundation — more by volume than any other aromatic.`,
        },
        {
          amount: 30,
          unit: 'g',
          name: 'galangal (riềng), peeled and sliced',
          note: `Not ginger. Galangal's piney, medicinal, faintly camphorous edge is the Khmer note that Vietnamese cooking rarely uses, and it is the single ingredient that marks this plate as coming from the other side of the cultural border.`,
        },
        {
          amount: 20,
          unit: 'g',
          name: 'fresh turmeric, peeled and sliced (or 1 tsp ground)',
          note: `For the golden colour on the grilled surface and a faint earthy bitterness underneath the aromatics.`,
        },
        { amount: 6, name: 'cloves garlic' },
        { amount: 4, name: 'shallots' },
        { amount: 4, name: 'makrut lime leaves, shredded to threads, stems removed', note: `The citrus-resin note — uniquely kaffir lime, irreplaceable by lemon or regular lime zest, which are citrus but not this citrus.` },
        { amount: 1, unit: 'tsp', name: 'makrut lime zest or regular lime zest' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper' },
        { amount: 0.5, unit: 'tsp', name: 'ground coriander seeds', note: `Toasted and ground — a quiet background warmth that rounds the sharper aromatics.` },
        { amount: 2, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'Muối ớt kiểu Khmer (Khmer chili-lime dipping salt)',
      items: [
        { amount: 2, unit: 'tbsp', name: 'coarse sea salt' },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'dried red chili, toasted and ground coarse',
          note: `Toasted 2 minutes in a dry pan until fragrant and one shade darker, then ground — the same volatile-editing step as the muối tôm chili: toasting mellows the raw sharpness and develops a roasted, fruity depth.`,
        },
        { amount: 1, unit: 'tsp', name: 'coarsely cracked black pepper' },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'thính (roasted rice powder)',
          note: `The Khmer signature in the dipping salt — the same toasted rice that dresses every gỏi, here adding nuttiness and a sandy texture that holds against the meat.`,
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'lime zest, finely grated — from 2 limes, zested immediately before mixing',
          note: `The zest must be fresh, grated in the final five minutes, so the citrus oils are still volatile and sharp. Zest that sat an hour has already oxidised and flattened. This is the difference between a dipping salt that smells of the tropics and one that smells of nothing.`,
        },
        { amount: 1, unit: 'tsp', name: 'sugar' },
      ],
    },
    {
      title: 'The platter',
      items: [
        { amount: 1, name: 'green (unripe) mango, sliced into spears' },
        { amount: 1, name: 'cucumber, in thick batons' },
        { amount: 1, name: 'star fruit, sliced' },
        { amount: 1, name: 'green banana, sliced thin, in lime water' },
        { amount: 1, name: 'head of lettuce, leaves separated' },
        { amount: 100, unit: 'g', name: 'herbs: rau răm, húng quế, tía tô, ngò gai' },
        { amount: 1, name: 'lime, in wedges' },
      ],
    },
  ],
  steps: [
    {
      title: 'Pound the paste and marinate — 1 hour, building the kroeung layer by layer',
      description: `Pound the lemongrass, galangal, turmeric, garlic and shallots together in a mortar — in that order, hardest first — until you have a coarse, fibrous, vivid yellow-green paste. A food processor works but gives a wetter, less aromatic result: the mortar's compression ruptures more oil cells per stroke.

Stir in the lime-leaf threads, lime zest, fish sauce, oyster sauce, sugar, pepper, coriander and oil. The paste should smell overwhelmingly of lemongrass, with galangal's pine and turmeric's earth underneath, and the lime leaf should be bright and sharp on top.

Rub the paste over every surface of the beef slices, massaging it into the grain. Marinate 1 hour at room temperature, or up to 4 hours in the fridge, turning once.`,
      tip: `The paste is built in hardness order — lemongrass, galangal and turmeric first because they are woody and fibrous and need the most pounding; garlic and shallot last because they are soft and release their moisture too early if started first, turning the paste to wet mush before the fibrous ingredients have broken down. This layered-pounding sequence is identical to the Thai-Cambodian kroeung method and is not interchangeable with "dump everything in together," which produces a paste that is half-pulverised and half-chunky rather than uniformly fine. The mortar is a sequential tool, not a batch tool, and working it in order is the skill.`,
    },
    {
      title: 'Mix the dipping salt fresh — zest last, within five minutes of serving',
      description: `Toast the salt in a dry pan 1 minute — just until visibly dry and free-flowing, not until it colours. Toast the dried chili separately 2 minutes until fragrant and one shade darker. Grind the chili coarse.

Combine the toasted salt, ground chili, cracked pepper, thính and sugar in a mortar or small bowl. Mix well.

Grate the lime zest directly into the mix in the final five minutes before the beef comes off the fire, and toss to distribute. The salt should be visibly flecked with green zest and should smell of citrus before it smells of anything else.

Do not make this an hour ahead. The citrus oils in fresh zest are volatile monoterpenes — limonene above all — that oxidise and evaporate at room temperature within the half-hour. A salt mixed early smells of salt; a salt mixed now smells of lime groves.`,
      tip: `The thính in the dipping salt is doing the same three jobs it does in every gỏi — absorbing moisture so the powder stays dry, adding toasted nuttiness, and providing a sandy texture that clings to wet surfaces. On a just-sliced piece of grilled beef, the cut face is damp with juices; a smooth salt slides off, but a thính-textured powder grips and stays. This is why the Khmer dipping salt is a powder rather than a liquid: it is engineered to adhere to the specific surface it will meet, and the rice is the adhesion agent. Match the condiment's physics to the food's surface. It is the most practical insight in the Vietnamese condiment canon, and it appears in a different form in every province this collection has visited.`,
    },
    {
      title: 'Grill over coconut-shell charcoal — 3-4 minutes a side, one turn, one baste',
      description: `Burn the charcoal to glowing embers with no flame. Oil the grill rack. Lay the marinated slices across it with space between — no overlapping, no crowding — and grill 3-4 minutes without moving. The paste will char in spots, the fat will drip and flare briefly, and the edges will darken to a deep, spice-stained, golden-brown.

Turn once with tongs — confident, not tentative, so the crust does not tear on the rack. Baste the grilled face with a spoonful of the residual marinade mixed with a little oil. Grill the second side 3-4 minutes.

Doneness for a 1.5-2 cm slice at medium-rare: press the centre with a fingertip — it should give with a soft, springy resistance, like the fleshy base of your thumb when you touch your thumb to your index finger. Firm means well-done; squishy means rare. Pull at the spring.

Rest 5 minutes on a board, then slice across the grain into 1 cm strips. The cross-section should show a charred crust encasing a pink, juicy centre.`,
      tip: `Coconut-shell charcoal burns hotter and longer than wood charcoal because its carbon density is higher — coconut shell is one of the hardest, most compact lignocellulosic structures in the plant kingdom (it evolved to protect the seed through ocean crossings), and it carbonises into an equally dense, slow-burning coal. The flame temperature is higher, which means faster surface browning for the same core temperature — more Maillard before the interior overcooks — and the smoke is cleaner and faintly sweeter than wood smoke, because the shell's low tar content burns more completely. The Delta uses it because coconut shells are free and everywhere; the beef benefits because the physics happens to be ideal.`,
    },
    {
      title: 'Press into the salt, wrap with herbs, eat standing',
      description: `Fan the sliced strips on a board or plate. Set the dipping salt in a flat saucer beside it, the herb platter on the other side, and the green mango, cucumber, star fruit and banana around the edges.

The motion: take a strip of beef with chopsticks, press one cut face down into the dipping salt so a visible coat clings, lift, lay it on a lettuce leaf with a sprig of rau răm and a spear of green mango, fold loosely, and eat. The char, the spice paste, the citrus-salt, the herb and the tart crunch arrive together, and the hand is already reaching for the next strip.

This is a mồi nhậu dish — beer, rice wine, low stools, standing, evening — and the correct pace is one strip per sip. The platter empties in twenty minutes and the only thing left on the board is the turmeric stain, which does not come out, and which is the province's way of marking that a Khmer grill happened here.`,
      tip: `The turmeric stain on the cutting board is curcumin binding to the wood's cellulose — a permanent, yellow-orange dye bond that soap and scrubbing will not break. Only UV light degrades curcumin, so leaving the board in direct sunlight for an afternoon is the traditional (and chemically correct) stain-removal method. The stain is, in a sense, the last piece of evidence the recipe leaves behind: the Khmer spice paste was here, and the board remembers. In a kitchen that cooks this dish often, the board stops being stained and starts being seasoned, and nobody minds.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
