'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-tre-nuong',
  title: `Cá Trê Nướng (Charcoal-Grilled Catfish with Ginger Dipping Sauce)`,
  subtitle: `Yellow catfish — the small, whisker-faced, mud-dwelling catfish of the paddy canals — grilled whole over charcoal until the skin blisters and the belly fat renders and the flesh, bone-free and custard-soft, falls apart at the touch of a chopstick. Dipped in mắm gừng — a fish-sauce-and-ginger sauce so sharp it cuts through the catfish's richness like a blade through butter.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/ca-tre-nuong.jpg',
  intro: `Cá trê — the walking catfish, principally Clarias macrocephalus (the yellow catfish) or Clarias batrachus (the walking catfish) — is the paddy's second air-breathing fish, alongside the cá lóc. Like the snakehead, it breathes through an accessory organ that allows it to survive in oxygen-depleted water and to cross dry land between ponds. Unlike the snakehead, it has no scales — its skin is smooth, slimy and leathery — and its skeleton is simple: a single spine, a few large rib bones, and no fine bones at all. The cá trê is the easiest paddy fish to eat — no scales to remove, no fine bones to navigate, no spines to fear — and its flesh is soft, fatty, mildly sweet and custard-tender when grilled.

The yellow catfish (cá trê vàng) is the prized variety: smaller (200-400 g), fattier (roughly 8-10% body fat, concentrated in the belly), and sweeter-fleshed than the common walking catfish. Its belly fat renders during grilling and bastes the flesh from inside — the same self-basting mechanism the cá chình mun's intramuscular fat provided — producing a grilled fish that is moist, rich and forgiving of timing errors.

The grilling is whole — ungutted or gutted, the cook's choice — over charcoal, with nothing but salt on the skin. The catfish's lack of scales means the skin itself chars directly against the grill, forming a thin, crispy, leathery crust that peels away cleanly after cooking, taking any residual slime with it. The flesh underneath is: white, bone-free in large sections, soft to the point of custard, and carrying the belly fat's rendered richness throughout.

The dipping sauce — mắm gừng — is the specific condiment for cá trê in both northern and southern traditions: fish sauce mixed with fresh ginger (julienned or grated), lime, sugar and chili. The ginger's gingerol cuts through the catfish's fattiness with a sharp, bright, spicy heat that is specifically different from chili's capsaicin heat: gingerol is felt in the throat and the sinus, capsaicin on the tongue and the lips. The two heats together — ginger's upper register and chili's lower register — create a stereo heat effect that no single-heat condiment can match, and the fat catfish needs both registers to stay balanced.`,
  ingredientSections: [
    {
      title: 'The catfish',
      items: [
        { amount: 4, name: 'whole cá trê vàng (yellow catfish), 200-400 g each, or 2 larger catfish 500-600 g', note: `Skin on, no scales to remove. Gut or leave whole. If using farmed catfish (basa, pangasius): the flesh is milder and leaner — it works but lacks the wild yellow catfish's fat and sweetness.` },
        { amount: 1, unit: 'tbsp', name: 'coarse salt' },
        { amount: 1, unit: 'tbsp', name: 'oil, for brushing' },
      ],
    },
    {
      title: 'Mắm gừng (ginger fish sauce)',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 30, unit: 'g', name: 'fresh ginger, finely julienned', note: `RAW ginger — its gingerol (the pungent, un-decarboxylated form) is the sharp, sinus-clearing heat the cooked ginger in the cháo has lost. The mắm gừng is raw-ginger sauce, and the rawness IS the point.` },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 1.5, unit: 'tbsp', name: 'sugar' },
        { amount: 2, name: 'bird\'s-eye chilies, sliced' },
        { amount: 1, unit: 'tbsp', name: 'water' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'bowls of hot rice or bún' },
        { amount: 200, unit: 'g', name: 'rau sống: lettuce, rau răm, húng quế' },
        { amount: 1, name: 'cucumber, in batons' },
      ],
    },
  ],
  steps: [
    {
      title: 'Clean, salt, grill whole — the scaleless skin IS the grill surface',
      description: `Clean the catfish: if the fish is alive or very fresh, kill humanely (a blow to the head). Rub the skin with coarse salt — the salt strips the mucus slime and roughens the surface for better grill contact. Rinse once. Pat dry. If gutting: a belly slit, viscera pulled. If not gutting: the viscera steam inside (the same principle as the cá lóc nướng trui, though the catfish's viscera are larger and some eaters prefer them removed).

Brush lightly with oil. Lay the whole catfish on a charcoal grate over glowing embers, 8-10 cm above the coals. Grill 6-8 minutes per side for a 300 g fish, turning once.

The skin — scaleless, leathery — chars directly against the grate, forming a thin, dark, crispy crust. The belly fat renders under the skin, pooling inside the body cavity and basting the flesh from inside. The flesh cooks gently in this internal fat bath — reaching 70°C throughout in roughly 12-15 minutes of total grilling.

The fish is done when: the skin is uniformly dark and crispy (peel a corner — the skin should release cleanly from the flesh, taking the charred surface with it), the flesh is opaque-white and flakes when a chopstick is inserted, and the belly fat is rendered (the belly is soft and yielding when pressed, and a clear golden liquid runs from the belly when the fish is lifted).`,
      tip: `The catfish's scaleless skin grills differently from a scaled fish's: without scales as an insulating barrier, the skin's collagen contacts the grill's heat directly and denatures faster — producing a thinner, crispier, more leather-like crust than a scaled fish's thicker, blister-prone skin. The scaleless crust also peels more cleanly (the collagen-to-collagen bond between skin and flesh is weaker than the scale-to-skin bond in a scaled fish), making the cá trê the easiest grilled fish to eat: peel the skin in one piece, and the bone-free flesh is exposed, ready for the chopstick.`,
    },
    {
      title: 'Make the mắm gừng, peel the skin, eat the custard-soft flesh',
      description: `MẮM GỪNG: dissolve sugar in fish sauce and lime juice. Add the julienned raw ginger, chili and water. The sauce should be: sharp (the raw ginger's gingerol hits the sinus immediately), salty (fish sauce), sour (lime), sweet (sugar) and hot (chili) — five tastes in one saucer, each one calibrated to cut through the catfish's fat.

Peel the charred skin from the grilled catfish — it comes away in one piece or in large sheets, cleanly, revealing the white, bone-free, custard-soft flesh underneath. The skin can be eaten (it is crispy and flavourful) or discarded — preference varies.

Pull the flesh from the spine with chopsticks — it falls away in large, soft, moist flakes. The belly section is the richest: the rendered fat has basted it to a silky, almost custard-like tenderness that the leaner back section does not match.

Dip each flake in the mắm gừng. The ginger's sharp, sinus-clearing heat hits first — a different heat from the chili's, felt higher in the head, clearing the nasal passages and preparing the palate for the fat. Then the fish's own fat arrives — soft, rich, coating the tongue. Then the lime cuts the coat. Then the fish sauce's salt amplifies the fish's sweetness. And the chili's capsaicin arrives last — on the tongue and the lips, a slower, lower, longer burn that the ginger's quick hit has already framed.

The stereo heat — ginger above, chili below — is the mắm gừng's specific contribution to the grilled-catfish experience, and it is the reason the condiment is ginger-based rather than chili-based: the catfish's fat needs a SHARP heat (ginger) to cut through it, not just a WARM heat (chili) to accompany it.`,
      tip: `Gingerol (the pungent compound in raw ginger) and capsaicin (the pungent compound in chili) activate different receptors: gingerol activates TRPV1 (the same receptor capsaicin uses) but ALSO activates TRPA1 (the cold/menthol receptor), producing the sinus-clearing, throat-warming, faintly cooling sensation that raw ginger provides and that chili alone does not. The "stereo heat" is not a metaphor but a receptor map: capsaicin activates one channel (TRPV1 → tongue/lip heat), gingerol activates two channels (TRPV1 → tongue/lip heat + TRPA1 → sinus/throat clearing). Two compounds, three receptor activations, and the fat catfish needs all three to feel balanced.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
