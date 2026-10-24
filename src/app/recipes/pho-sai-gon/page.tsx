'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'pho-sai-gon',
  title: `Phở Sài Gòn (Southern-Style Phở)`,
  subtitle: `The same rice noodle, the same beef-bone broth, the same ginger-and-onion charring — but sweeter, broader, more generous and more negotiable than the northern original. Hoisin and chili sauce on the table. Bean sprouts and herbs piled high. The broth a shade darker and a shade sweeter. The bowl the south rebuilt from the north's blueprint and then claimed as its own.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '6 hr',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/pho-sai-gon.jpg',
  intro: `Phở is the north's invention and the south's interpretation, and the interpretation is different enough to be its own dish. Northern phở — Hanoi phở — is a spare, austere, broth-forward bowl: clear stock, flat noodles, a few slices of beef, a scattering of scallion and coriander, and a strict instruction not to touch the two condiment bottles on the table because the cook has already seasoned the broth to perfection and any addition is an insult. Southern phở — Sài Gòn phở — is the same architecture, fundamentally, but rebuilt with a different philosophy: the broth is rounder and sweeter (more rock sugar, sometimes a touch of MSG); the toppings are broader (not just beef but also tendon, tripe, brisket, meatballs, and the raw-beef tái); and the table is loaded with things the north would never countenance: hoisin sauce, Sriracha, bean sprouts, Thai basil, sawtooth herb, lime wedges, sliced chilies, and a plate of greens so large it constitutes a second meal. The south does not trust the cook to season the bowl for everyone. It trusts the eater.

The migration that carried phở from Hanoi to Saigon — primarily after 1954, with the partition — carried the recipe but not the rules. The northerners who opened phở stalls in Saigon discovered that the southern palate wanted sweetness where the north wanted salt, wanted herbs where the north wanted restraint, and wanted choice where the north wanted authority. The broth adapted: more rock sugar, more charred onion (which caramelises and sweetens), sometimes a piece of daikon simmered in the pot (the same background sweetener the hủ tiếu Sa Đéc used). The toppings expanded: the south's love of variety and its Chinese-influenced multi-protein ethic demanded more than thin-sliced beef. And the table expanded: hoisin and Sriracha appeared as table sauces — sweet-salty-fermented and hot-garlicky respectively — and the herb platter grew from a few sprigs to a jungle.

The result is a bowl that a Hanoi purist would not recognise as phở and that a Saigon native would not exchange for any bowl in the world. It is louder, sweeter, more colourful, more customisable and more forgiving than the northern version, and it is the version the world outside Vietnam has mostly eaten, because the Vietnamese diaspora is disproportionately southern, and the phở restaurants they opened in Los Angeles and Paris and Sydney and Berlin serve the Saigon bowl, not the Hanoi one. When a non-Vietnamese person says "phở," they almost always mean this.`,
  ingredientSections: [
    {
      title: 'The broth',
      items: [
        { amount: 2, unit: 'kg', name: 'beef bones — knuckle, marrow, neck', note: `Blanched 10 minutes, rinsed, restarted in fresh water. The bones are the body.` },
        { amount: 500, unit: 'g', name: 'beef brisket or chuck, in one piece', note: `Simmered in the broth for 2-3 hours until tender, then chilled and sliced thin for the bowl. Dual-use: the meat feeds the bowl, the broth feeds the pot.` },
        { amount: 5, unit: 'L', name: 'water' },
        { amount: 2, name: 'large yellow onions, halved and charred black', note: `Charred deeply — more than the north does. The caramelised sugars from the blackened surface give the broth its southern sweetness.` },
        { amount: 80, unit: 'g', name: 'ginger, charred and bruised' },
        { amount: 5, name: 'whole star anise' },
        { amount: 4, name: 'whole cloves' },
        { amount: 1, name: 'cinnamon stick, 8 cm' },
        { amount: 1, unit: 'tbsp', name: 'coriander seeds, toasted' },
        { amount: 1, unit: 'tbsp', name: 'fennel seeds, toasted' },
        { amount: 1, name: 'cardamom pod (optional — some Saigon stalls include it)' },
        { amount: 5, unit: 'tbsp', name: 'fish sauce' },
        { amount: 40, unit: 'g', name: 'rock sugar (đường phèn)', note: `More than the north uses — the Saigon broth is noticeably sweeter, and the rock sugar is the reason.` },
        { amount: 1, unit: 'tbsp', name: 'salt' },
      ],
    },
    {
      title: 'The proteins — the full Sài Gòn selection',
      items: [
        { amount: 300, unit: 'g', name: 'beef sirloin or eye of round, sliced paper-thin raw (tái)', note: `Frozen 30 minutes, sliced 2 mm against the grain. Placed raw in the bowl and cooked by the boiling broth.` },
        { amount: 1, name: 'brisket or chuck from the broth, chilled and sliced thin (chín)' },
        { amount: 200, unit: 'g', name: 'beef tendon (gân), simmered 3-4 hours until gelatinous (optional)' },
        { amount: 200, unit: 'g', name: 'beef tripe (sách), cleaned and simmered 2 hours until tender (optional)' },
        { amount: 8, name: 'bò viên (beef meatballs), store-bought or homemade (optional)' },
      ],
    },
    {
      title: 'The noodles',
      items: [
        { amount: 800, unit: 'g', name: 'fresh phở noodles (bánh phở tươi)', note: `Wide, flat, fresh — from a Vietnamese grocer's chiller. Blanch 5-10 seconds before assembly. Dried phở, soaked and cooked, is the workable fallback.` },
      ],
    },
    {
      title: 'The Sài Gòn table — the part the north refuses',
      items: [
        { amount: 300, unit: 'g', name: 'bean sprouts, raw' },
        { amount: 1, name: 'large bunch of Thai basil (húng quế)' },
        { amount: 1, name: 'large bunch of ngò gai (sawtooth coriander)' },
        { amount: 50, unit: 'g', name: 'coriander (ngò rí), whole sprigs' },
        { amount: 2, name: 'limes, in wedges' },
        { amount: 4, name: 'bird\'s-eye chilies, sliced' },
        { amount: 1, name: 'bottle of hoisin sauce (tương đen)', note: `The southern table sauce — sweet, salty, fermented-soybean. Spooned into a small saucer, the beef is dipped in it. Never poured into the broth — or at least, never poured into the broth by anyone the cook can see.` },
        { amount: 1, name: 'bottle of Sriracha or tương ớt', note: `The hot sauce. Squeezed into the broth by the eater. The north considers this a crime; the south considers it a right.` },
      ],
    },
    {
      title: 'The bowl garnish',
      items: [
        { amount: 1, name: 'small onion, sliced paper-thin into rings' },
        { amount: 4, name: 'scallions, sliced thin' },
        { amount: 30, unit: 'g', name: 'coriander, chopped' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the broth — 5 hours minimum, one pot, obsessive skimming',
      description: `Blanch the bones and the brisket 10 minutes in hard-boiling water. Drain, rinse every piece under cold water until the water runs clear, scrub the pot, and restart: bones, brisket, 5 L fresh cold water, charred onion and ginger. Bring to a bare simmer — a bubble every second, never a boil.

Toast the spices — star anise, cloves, cinnamon, coriander, fennel, cardamom — in a dry pan 2 minutes until fragrant. Wrap in a muslin pouch or a tea ball and drop into the pot at 30 minutes.

Skim obsessively — at 15, 30, 60 minutes, and then every hour. A clear phở broth is a matter of kitchen honour, and every impurity skimmed is a cloud removed from the final bowl.

Pull the brisket at 2-3 hours — a skewer should pass through with moderate pressure. Chill in iced water, then refrigerate for clean slicing later. Leave the bones and the spice pouch for the full 5 hours.

Season in the final hour: fish sauce, rock sugar, salt. The Saigon broth should taste: sweet-savoury first (distinctly sweeter than Hanoi's), aromatic second (the star anise and cinnamon should be present but not dominant — a phở broth that smells like a candle shop has too much spice), and salty third. Remove the spice pouch at 4 hours — past that the spices turn bitter.

Strain. The broth should be pale gold, clear, and — held to the light — translucent. It should smell of charred ginger, star anise and beef, in that order.`,
      tip: `The rock sugar dose is the border between north and south, and it is worth naming the exact difference: a Hanoi phở uses roughly 10 g of rock sugar per litre of broth; a Saigon phở uses 15-20 g. The gap is small on the scale — a teaspoon per litre — but the tongue detects it immediately, because sweetness modifies every other flavour in the bowl: it rounds the salt, it softens the star anise, it mellows the charred ginger, and it shifts the broth's overall register from austere to generous. The northern cook tastes the broth and asks: is the beef clear? The southern cook tastes the broth and asks: is the broth kind? Both are making phở. They are making different arguments about what a bowl of soup should feel like.`,
    },
    {
      title: 'Assemble the Sài Gòn way — tái on top, everything on the table',
      description: `Blanch the phở noodles 5-10 seconds, drain into deep bowls. Lay the sliced brisket, tendon, tripe and meatballs (if using) on one side. Lay the raw tái slices on the other side — they will cook when the broth hits them.

Ladle the broth at a FULL ROLLING BOIL directly over the raw beef — the tái turns from red to pink in the five seconds the broth takes to fill the bowl. Scatter onion rings, scallion and coriander.

Set the herb platter, the bean sprouts, the limes, the chilies, the hoisin and the Sriracha on the table. The cook's work is done. The eater's work begins.`,
      tip: `The tái — raw beef wilted by boiling broth — is the same technique the cháo bò Tri Tôn used, but in a thinner medium. In a clear broth the 2 mm slice reaches medium-rare in about 15 seconds (the thin broth cools faster than the thick cháo, giving the beef more time in the rare zone). A diner who wants their tái more cooked can push it under the broth with chopsticks and hold it there; one who wants it rare eats it immediately. The doneness is the eater's decision, and that decision — made by every Vietnamese person at every phở table every morning — is the smallest and most universal act of culinary self-determination in the cuisine.`,
    },
    {
      title: 'The eater finishes the bowl — herbs, sprouts, hoisin, Sriracha, lime',
      description: `The bowl arrives. The eater adds:

BEAN SPROUTS — a large handful, raw, pushed under the broth where they half-wilt in the heat. They add crunch and volume and a clean, grassy note the broth does not carry.

HERBS — Thai basil first (its anise reinforces the star anise in the broth), sawtooth herb second (its sharper, more metallic bite cuts through the sweetness), coriander third (its citral lifts the ginger). Torn by the handful.

LIME — squeezed generously. The acid brightens the sweet broth and makes the herbs' volatiles more vivid.

CHILI — sliced, into the broth or on the side.

HOISIN — spooned into a small saucer, the brisket and the tendon are dipped in it. Some eaters squeeze it into the broth; the cook would prefer they did not, but the south does not police the table.

SRIRACHA — squeezed into the broth. The heat and the garlic change the bowl's register from mellow-sweet to hot-pungent, and the eater who does this is the eater the north does not understand and the south does not judge.

Eat with spoon in the left hand, chopsticks in the right. Noodles are lifted with chopsticks and lowered into the spoon with broth. The broth is drunk from the spoon, not from the bowl (in the south; the north drinks from the bowl). The meatball is bitten, the tendon is chewed, the tripe is enjoyed or avoided, and the raw beef is eaten in the first two minutes while it is still pink.

The bowl takes 10-15 minutes. A second bowl is not ordered — a Saigon phở is large enough that one is the meal. And the table, when the bowl is empty, looks like a small herbaceous explosion: lime rinds, basil stems, chili seeds, sprout tails, and the satisfaction of a person who ate exactly the bowl they wanted, because the south let them build it.`,
      tip: `The herb platter is the philosophical boundary between the north and the south, and this recipe — the collection's only phở — is the place to say it clearly. The north delivers a finished bowl: the cook has seasoned it, composed it, and the eater receives a statement. The south delivers an unfinished bowl: the cook has built the platform, and the eater completes it with herbs, lime, sauce and chili according to their own palate, their own mood and their own morning. Neither is wrong. The north is a monologue delivered by a cook who knows the answer. The south is a conversation between a cook who built the question and an eater who brings the answer. Phở Sài Gòn is the conversation version, and the herb platter is the vocabulary the eater speaks with.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
