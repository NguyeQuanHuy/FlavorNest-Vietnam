'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-khoai-hue',
  title: `Bánh Khoái (Huế Crispy "Delight" Crepe with Peanut-Liver Sauce)`,
  subtitle: `The imperial city's answer to bánh xèo — smaller, thicker, enriched with egg, fried in a dedicated iron pan until the edge shatters and the centre stays custardy. Served open-faced with nước lèo, the thick fermented-soybean, pork-liver and peanut sauce that no other crepe in Vietnam gets to wear.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 15 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/banh-khoai-hue.jpg',
  intro: `Stand at the Thượng Tứ gate of the Huế citadel in the late afternoon and you can watch bánh khoái being made the way it has been for a century: a row of small, blackened, long-handled iron pans over charcoal, each one the size of a rice bowl, each one holding exactly one crepe. The name means "delight" — khoái is the word for pleasure — though an older story says it began as bánh khói, "smoke cake," after the haze that fills any shophouse where a dozen of these pans are working at once, and the Huế accent blurred the two words until the happier one won. Either way, the most famous versions are still fried inside the citadel walls, and one of them — Lạc Thiện, run for generations by a family of deaf-mute siblings communicating across the smoke in their own signs — is as much a Huế institution as the Perfume River.

Bánh khoái is what happens when a royal city gets hold of a peasant crepe. The southern bánh xèo is enormous, paper-thin, and lean — a batter of rice flour, water and turmeric flashed across a wok. Bánh khoái takes the same idea and enriches every variable. The pan shrinks to 15 centimetres, so each crepe is an individual portion with a high ratio of crisp rim to surface. The batter thickens to a pouring-cream consistency and takes on whole eggs, whose proteins brown, whose fats tenderize, and whose lecithin keeps the thick batter from turning greasy. The fat in the pan doubles — a bánh khoái is shallow-fried, not merely greased. And the filling gains a slice of chả lụa or a ball of seasoned pork alongside the shrimp and bean sprouts. The result eats completely differently from its southern cousin: a hard, golden, audibly crunchy rim giving way to a centre that is thick, tender, and almost custardy from the egg. It is folded once, barely, and served open — because Huế wants you to see it.

But the crepe, good as it is, is really a delivery system for the sauce, and the sauce is the actual argument for the dish. Nước lèo — not to be confused with the broth of the same name in Sóc Trăng — is a thick, tan, glossy emulsion of fermented soybean paste (tương), pounded pork liver, minced pork, ground roasted peanuts and sesame, simmered together until it coats a spoon like a satay sauce with a doctorate. The liver is the secret and the point: cooked and pounded into the sauce, it contributes an enormous load of glutamates and nucleotides, a faint iron-rich bitterness, and — because liver is full of natural emulsifying phospholipids — the silky, unbroken texture that lets the sauce cling to a shard of fried crepe. First-timers are rarely told what is in it. They are simply watched, closely, while they discover that they cannot stop eating it.

The rest of the plate follows Huế's fixed grammar for fried food: a raft of fresh herbs, lettuce for wrapping if you want it, thin slices of green banana and star fruit whose tannins and oxalic sharpness scrub the palate between bites, and chilli for the local tolerance, which is high. You tear off a piece of crepe — rim and centre together — drag it through the nước lèo, stack it on a leaf with herbs and a slice of fruit, and eat. Then you do it again, faster. The name, whichever origin story you prefer, turns out to be accurate.`,
  ingredientSections: [
    {
      title: 'The batter',
      items: [
        { amount: 200, unit: 'g', name: 'rice flour (bột gạo)' },
        {
          amount: 30,
          unit: 'g',
          name: 'cornstarch or tapioca starch',
          note: `For the shattering rim. Rice flour alone browns but stays leathery; the added starch dehydrates into glass.`,
        },
        {
          amount: 2,
          name: 'eggs',
          note: `The defining enrichment and the biggest single difference from bánh xèo. The yolks colour and tenderize the thick batter, the proteins brown the surface, and the lecithin emulsifies the generous frying fat so the crepe eats rich instead of greasy. Some Huế cooks beat an extra yolk over the surface of each crepe mid-fry for a deeper gold.`,
        },
        { amount: 1, unit: 'tsp', name: 'ground turmeric' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 350, unit: 'ml', name: 'water, plus more to adjust', note: `The batter should be the consistency of pouring cream — noticeably thicker than a bánh xèo batter. It coats a spoon and drops off in a slow ribbon.` },
        { amount: 3, name: 'scallions, green parts, thinly sliced' },
      ],
    },
    {
      title: 'The filling',
      items: [
        { amount: 200, unit: 'g', name: 'small shrimp, shell-on if small, or peeled', note: `Huế uses small river shrimp fried shell-on until the shell crisps — the crunch is deliberate. Sea shrimp, peeled, are the practical substitute.` },
        { amount: 150, unit: 'g', name: 'pork belly or shoulder, thinly sliced', note: `Or 150 g of seasoned minced pork rolled into small flat patties — both are traditional.` },
        { amount: 100, unit: 'g', name: 'chả lụa (Vietnamese pork sausage), sliced into batons (optional)' },
        { amount: 200, unit: 'g', name: 'bean sprouts' },
        { amount: 1, name: 'small onion, thinly sliced' },
        { amount: 150, unit: 'ml', name: 'neutral oil or, traditionally, rendered pork fat, for shallow-frying', note: `More than feels right. A bánh khoái is shallow-fried in a visible pool of fat — 1-2 tablespoons per crepe — and this is not negotiable if you want the rim.` },
      ],
    },
    {
      title: 'Nước lèo (the peanut-liver sauce)',
      items: [
        {
          amount: 100,
          unit: 'g',
          name: 'pork liver, finely minced or pounded',
          note: `The soul of the sauce. Do not announce it to nervous eaters; do not omit it either. Its glutamates and nucleotides supply the depth, and its phospholipids hold the emulsion silky. Chicken liver substitutes acceptably.`,
        },
        { amount: 100, unit: 'g', name: 'minced pork' },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'tương (Vietnamese fermented soybean paste)',
          note: `The Huế backbone — malty, salty, deeply savoury. Hoisin thinned with a little water is the pragmatic overseas substitute, though it is sweeter; if using hoisin, halve the sugar below.`,
        },
        { amount: 60, unit: 'g', name: 'roasted peanuts, finely ground, plus more crushed for the top' },
        { amount: 1, unit: 'tbsp', name: 'roasted sesame seeds, ground' },
        { amount: 2, name: 'cloves garlic and 2 shallots, minced' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 200, unit: 'ml', name: 'water or light pork stock' },
        { amount: 1, unit: 'tbsp', name: 'glutinous rice flour or cornstarch, slaked in water (optional)', note: `Insurance for a spoon-coating body if the liver alone does not get you there.` },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The platter',
      items: [
        { amount: 1, name: 'head of soft lettuce' },
        { amount: 100, unit: 'g', name: 'herbs: tía tô, húng quế, rau thơm, ngò' },
        { amount: 1, name: 'green (unripe) banana, thinly sliced, held in lime water' },
        { amount: 1, name: 'star fruit (khế), thinly sliced' },
        { amount: 3, name: 'red chilies, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Make the nước lèo first — it wants 20 minutes and improves as it sits',
      description: `Fry the garlic and shallot in the oil until fragrant. Add the minced pork and the liver and fry 3-4 minutes, mashing and breaking them down completely, until no pink remains and the liver has crumbled to a fine rubble.

Stir in the tương, sugar and fish sauce, then the water. Simmer gently 10 minutes, stirring, then add the ground peanuts and sesame and simmer 5 more. If it needs body, stream in the slaked starch. Blend smooth with a stick blender for the classic silky texture, or leave it rustic — both exist in Huế.

The finished sauce should coat the back of a spoon thickly, taste savoury-sweet-earthy with a faint mineral depth, and pour like a warm satay sauce. Thin with water if it tightens; it will, as it sits. Keep it warm — cold nước lèo turns to paste.`,
      tip: `The liver is doing three jobs and nothing else can do all three. Flavour: liver is one of the densest natural sources of free glutamate and inosinate, the synergistic umami pair, which is why a spoonful of this sauce tastes deeper than its ingredient list explains. Texture: liver cells are packed with phospholipids — natural emulsifiers, the same family as the lecithin in egg yolk — which hold the peanut oil, pork fat and water in one silky phase instead of splitting. Colour: its pigments give the sauce its distinctive tan-brown. Every satay-style sauce in Southeast Asia solves the emulsion problem somehow; Huế solved it with the ingredient it already had in the pig.`,
    },
    {
      title: 'Rest the batter 30 minutes — and check its thickness against a spoon',
      description: `Whisk the rice flour, starch, turmeric and salt with the water until smooth, then whisk in the eggs and the scallions. Rest 30 minutes.

Check the consistency after resting: it should coat a spoon and fall off in a slow, heavy ribbon — pouring cream, not milk. This is deliberately twice the thickness of a bánh xèo batter, because the goal is different: not a uniform glass sheet, but a crepe with two textures, crisp at the rim and tender in the middle.

Whisk again just before frying, and again every few crepes; the flour and starch settle constantly.`,
      tip: `Bánh xèo and bánh khoái are the same ingredients tuned to opposite goals, and the batter viscosity is the tuning knob. A thin batter loses its water almost instantly across its whole area and vitrifies edge to edge — total crispness, no tenderness. A thick batter can only dehydrate fully where the fat pools against it, at the rim and base, while the interior retains enough moisture for the egg proteins to set into a soft, custard-adjacent crumb. One batter, one pan, two textures — the thickness is doing all of it.`,
    },
    {
      title: 'Fry in a small pan with real fat — 4-5 minutes, mostly untouched',
      description: `Heat a 15-16 cm heavy or cast-iron pan over medium-high heat until a drop of batter sizzles on contact. Add a generous 1.5 tablespoons of oil or pork fat — it should pool visibly.

Lay in 2-3 shrimp, a few slices of pork and a baton of chả lụa; let them sear 30 seconds. Pour in a small ladle of batter to cover the base about 5 mm deep — it should hiss loudly. Pile a small handful of bean sprouts and onion onto one half. Cover 90 seconds to set the top, then uncover and fry 2-3 minutes more, spooning a little of the pan fat over the rim as it works.

The crepe is done when the rim is deep gold, visibly lacy and pulling away from the pan, the base releases and slides freely, and the centre is set but still tender. Fold it once, barely — just over the sprouts, leaving it half-open — and slide it out. Wipe or refresh the fat and repeat.`,
      tip: `The small pan is the technology, not a quaintness. A 15 cm pan puts every point of the crepe within a few centimetres of a rim, and the rim is where the pooled fat climbs the pan wall and shallow-fries the batter edge into glass — so a small crepe is proportionally mostly rim. It also matches the burner: charcoal braziers and small pans heat evenly to the edge, where a large pan on a small flame fries the centre and steams the perimeter. The Thượng Tứ gate cooks work six small pans in rotation rather than one big one, and it is a considered engineering decision that happens to look picturesque.`,
    },
    {
      title: 'Serve open-faced, sauce in a bowl, and build each bite by hand',
      description: `Slide each crepe onto a plate half-folded and open — Huế shows the filling. Serve immediately, with the warm nước lèo in individual bowls, crushed peanuts scattered over the sauce, and the platter of lettuce, herbs, green banana, star fruit and chilli.

To eat: tear off a piece of crepe with chopsticks — take rim and centre together — and either dunk it straight into the nước lèo, or lay it on a lettuce leaf with herbs and a slice of each fruit, roll loosely, and dip the parcel. Both are correct; the second is more Huế.

Eat each crepe within minutes of the pan. The custardy centre keeps releasing steam into the crisp rim, and a bánh khoái that waited a quarter of an hour is a soft, sad object. The cook fries throughout the meal, and the last crepe is traditionally the cook's own — eaten standing at the pan, with the last of the sauce, which everyone agrees is the best one.`,
      tip: `Notice the sauce logic, because it is the inverse of the southern crepe and it is deliberate. Bánh xèo is lean and huge, so it gets nước chấm — thin, sharp, acidic — to add what the crepe lacks. Bánh khoái is small, rich, fatty and egg-laden, so by the fried-food rules of everywhere else it should get something sour to cut it. Huế gives it a thick, rich, nutty liver sauce instead — richness answering richness — and it works because the green banana and star fruit on the platter have been assigned the acid-and-tannin palate-scrubbing job that the sauce declined. The plate is balanced; Huế just distributed the balance across more components than anyone else bothers to. That, in one dish, is the whole difference between a royal cuisine and a street one.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
