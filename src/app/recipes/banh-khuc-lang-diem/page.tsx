'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-khuc-lang-diem',
  title: `Bánh Khúc Làng Diềm (Cudweed Sticky Rice Balls with Mung Bean and Pork Fat)`,
  subtitle: `A wild cudweed leaf — picked in winter from the edges of the rice fields — boiled, pounded into glutinous rice dough until it turns the colour of moss, wrapped around a heart of mung bean and a cube of pork fat, then rolled in raw sticky rice and steamed until the outer grains puff into a white, pearly crust around the green. The winter cake of Bắc Ninh's oldest village, and a recipe that begins with a walk through a cold field.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '3 hr',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/banh-khuc-lang-diem.jpg',
  intro: `Làng Diềm — Viêm Xá village in Hòa Long commune — is the village the quan họ tradition calls its birthplace, and it is also the village that the rest of Bắc Ninh concedes makes the best bánh khúc. The two claims are unrelated but they share a calendar: both belong to the cold months, from the eleventh lunar month through Tết, when the rice has been harvested and the paddy stubble is low, and along the bunds and the field edges grows a small, grey-green, downy-leafed weed that the north calls rau khúc — cudweed, Gnaphalium affine — which appears only in the cool, damp, post-harvest window and vanishes with the first warm rains. It is this weed, and its season, that makes the cake.

Rau khúc is a quiet ingredient with a specific talent. Its leaves are furry with fine trichomes — the downy hair that gives the Gnaphalium genus its English name — and when boiled and pounded into glutinous rice dough, those trichomes contribute a vegetable fibre that does for bánh khúc what ramie fibre does for bánh gai in Hà Tĩnh: it reinforces the sticky dough with a microscopic mesh that gives it elasticity, body and a distinctive, slightly rough chew that plain glutinous rice never has. The pounding also releases the leaf's chlorophyll into the dough, turning it a deep, matte, mossy green — not the vivid green of pandan, which is a different pigment from a different plant, but an earthy, subdued, grey-green that looks like the field it came from. And the leaf's own flavour — grassy, faintly herbal, gently bitter in the way that wild greens are bitter — threads through the rice as a background note that ties the cake to the season.

The filling is the same gold-and-fat core as the bánh phu thê: steamed mung bean, mashed smooth and sweetened with just a pinch of sugar, wrapped around a cube of pork back fat seasoned with black pepper. The fat cube is not optional, not debatable, and not a modern addition — it is the warmth at the heart of a winter cake, and biting through the green dough into the gold bean into the melting fat is the three-stage reveal the cake was built to deliver. A fat-free bánh khúc is a cold-weather cake without the warmth, which is a contradiction Làng Diềm does not tolerate.

The outer coat is the third texture and it is achieved by a trick that looks wrong until you understand it: the filled, sealed green ball is rolled in raw, uncooked, soaked glutinous rice — actual whole grains, not flour — and then steamed. In the steamer those raw grains gelatinize against the dough's surface, puffing slightly and setting into a pearly, nubbly, white crust that clings to the green sphere like a mossy stone rolled in snow. The visual is the thing: green under white, gold inside green, fat inside gold. Three concentric layers, three colours, three textures, three temperatures in the mouth (the crust cools first, the bean holds warmth, the fat is still liquid at the centre). The cake is a small architecture, and cutting one in half is the thing you do before eating it, because the cross-section is as much the experience as the taste.

Bánh khúc is a street-food and a market-food in Hanoi, sold from mobile vendors who carry insulated boxes on their bicycles and call "bánh khúc nóng đây" through the winter streets — but its origin is rural, its best version is the village's, and the difference is the leaf. Hanoi vendors use dried rau khúc rehydrated, which has lost most of its volatile grassy perfume and much of its fibre. Làng Diềm's cakes use the leaf picked that morning from the field edge, still damp, still smelling of winter dew — and the cake tastes of the field in a way the Hanoi bicycle cannot carry.`,
  ingredientSections: [
    {
      title: 'The rau khúc (cudweed leaf)',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'fresh rau khúc (cudweed / Gnaphalium affine), young leaves',
          note: `The defining ingredient. Picked in the cool months from field edges and rice-paddy bunds — a small, grey-green, downy weed. In Europe: sold dried in bags at Vietnamese groceries (labelled rau khúc khô) — rehydrate in warm water 30 minutes, squeeze dry, and use, understanding that the dried version loses the fresh leaf's volatile grassiness. If entirely unavailable: young mugwort (ngải cứu) is the nearest botanical cousin that is findable in Europe (Asian groceries, foraging) and gives a plausibly herbal, slightly bitter green dough — a different plant, honestly named, with a similar structural role.`,
        },
      ],
    },
    {
      title: 'The dough',
      items: [
        {
          amount: 400,
          unit: 'g',
          name: 'glutinous rice flour (bột nếp)',
          note: `The matrix. Glutinous — near-pure amylopectin — for the soft, chewy, non-crumbling dough that makes every northern mochi-cousin work.`,
        },
        { amount: 280, unit: 'ml', name: 'warm water, approximately' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The filling',
      items: [
        {
          amount: 250,
          unit: 'g',
          name: 'split mung beans (đậu xanh cà vỏ), soaked 4 hours',
          note: `Steamed 20 minutes, mashed smooth while hot. Seasoned with a pinch of sugar, salt and pepper — lightly, because the filling is a foil for the fat, not a sweet in its own right.`,
        },
        {
          amount: 80,
          unit: 'g',
          name: 'pork back fat, cut into 1.5 cm cubes',
          note: `The warmth at the centre. Each cube is seasoned with a grind of black pepper and a pinch of salt before it is wrapped in bean. The fat melts inside the steamer and stays liquid at the centre when the cake arrives at the mouth, so the bite sequence is: chewy crust → soft green dough → dense bean → liquid fat. That sequence is the whole engineering.`,
        },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The outer rice crust',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'glutinous rice (gạo nếp), soaked 4 hours, drained well',
          note: `Whole raw grains, soaked so they are pliable enough to cling to the ball but not so waterlogged that they turn to mush in the steamer. The grains puff and gelatinize on the surface during the steam, forming the pearly white crust around the green. It is the same starch-gelatinization-on-contact principle as the rice-paper-on-hot-oil puff of the Hà Tĩnh bánh đa, applied to single grains on a dough ball.`,
        },
      ],
    },
  ],
  steps: [
    {
      title: 'Boil and pound the rau khúc into the dough — green through and through',
      description: `Wash the fresh leaves thoroughly — cudweed grows low and carries field mud. Boil in plenty of water 10-15 minutes until completely soft and dark green. Drain, squeeze dry in a cloth, and chop fine.

Mix the glutinous rice flour and salt, add the warm water gradually, and knead 3-4 minutes to a smooth dough. Add the chopped, squeezed leaves and knead — or pound in a mortar — for a good 8-10 minutes, until the leaf is completely dispersed and the dough is a uniform, deep, mossy green with no streaks of white.

The dough should be soft, elastic and faintly sticky — the earlobe test, coloured by the field. If the green is pale, the leaf quantity was insufficient; add more if you have it. The green is the identity.`,
      tip: `The pounding does two things the kneading alone cannot. First, it shears the cudweed's trichomes — the downy fibres — into microscopic fragments that distribute through the starch as a reinforcing mesh, giving the cooked dough a gentle chew and a structural resilience that plain glutinous rice lacks. This is the identical fibre-engineering that ramie does in Hà Tĩnh's bánh gai, arrived at independently by a different province with a different plant. Second, the mechanical compression ruptures the leaf's cells more completely than chopping does, releasing more chlorophyll into the dough — which is why pounded bánh khúc is darker green than merely kneaded. The mortar is not a mixer. It is a dispersal tool, and the cell-rupture it delivers is the colour's delivery mechanism.`,
    },
    {
      title: 'Make the filling — gold around fat, pepper on everything',
      description: `Steam the soaked mung beans 20 minutes until they crush to powder between two fingers. Mash smooth while hot, season with the sugar, salt and half the pepper, and cool until handleable.

Season the fat cubes with the remaining pepper and a pinch of salt.

Take about 20 g of mashed bean, flatten in your palm, set a cube of fat in the centre, and close the bean around it into a smooth ball. The fat must be completely sealed inside — any exposed edge leaks during the steam and greases the dough instead of melting at the centre.

Make 14-16 filling balls. They should be firm enough to hold on a tray without slumping. Keep cold — warm fat is soft fat, and soft fat squishes out of the bean when you wrap the dough around it.`,
      tip: `The pepper on the fat is the northern-winter flavour signature, and it is doing more than seasoning. Piperine — black pepper's heat compound — is fat-soluble and activates most strongly in the presence of lipid. A cube of peppered fat, melting on the tongue, releases piperine directly into the fat film that coats the palate, and the warmth arrives not as a sting but as a deep, slow, radiating heat — exactly the kind of warmth a winter cake should deliver. The pepper is not on the bean. It is not on the dough. It is on the fat, because fat is where pepper works best. Ingredient placement is flavour placement.`,
    },
    {
      title: 'Wrap, seal, roll in raw rice — green ball in a white coat',
      description: `Divide the green dough into 14-16 pieces of about 35-40 g. Flatten each in your oiled palm into a disc about 8 cm across, thicker at the centre. Set a filling ball in the middle, gather the dough up and around, pinch sealed, and roll gently into a smooth sphere. The green should enclose the gold completely, with no gold showing through — check against the light.

Spread the drained, soaked raw glutinous rice in a wide shallow tray. Roll each green ball in the rice, pressing gently so the grains stick to the damp dough surface in a single, even layer — a white coat of raw pearls on a green sphere.

The grains should cling firmly. If they fall off, the dough surface was too dry — mist it with water from a spray bottle before rolling. Every bare patch means a patch of green visible through the finished crust, which is not a defect but is noticed by anyone from Làng Diềm.`,
      tip: `The raw grains adhering to the dough surface are about to become the crust, and the adhesion mechanism is starch tack: the dough's own gelatinized surface is slightly sticky, and the soaked raw grains — themselves now surface-wet with starch-water — press into that tack and bond. During the steam, both surfaces gelatinize fully and fuse, so the crust becomes structurally continuous with the dough rather than merely stuck to it. A grain that was dry when it went on will not bond and will fall off when the cake is handled. A grain that was soaked 4 hours and drained — wet-surfaced but not waterlogged — bonds perfectly. The soak time IS the adhesive.`,
    },
    {
      title: 'Steam 25 minutes — the grains puff, the green sets, the fat melts',
      description: `Set the rice-coated balls on oiled parchment squares in a steamer, spaced so no two touch — the raw rice crusts will fuse if they meet. Steam over hard-boiling water 25 minutes.

Watch the transformation through the steamer lid: the raw white grains on the surface swell, puff slightly, and turn from opaque chalk-white to a translucent, pearly, glossy white — the same opacity-to-translucence gelatinization signal every rice and tapioca product in this collection has given. The green dough underneath darkens slightly. Steam rises carrying the grassy, faintly herbal perfume of the cudweed, which is the first thing a Hanoi winter street smells when the vendor opens his box.

At 25 minutes: the crust should be uniformly pearly and glossy, each grain distinct and puffed, the ball firm but yielding when pressed gently. Understeamed and the centre is still raw flour; oversteamed past 35 minutes and the crust grains over-expand and merge into a smooth, featureless skin, losing the pebbly texture that is the cake's visual signature.`,
      tip: `The rice-grain crust is a granular gelatinization — each grain gelatinizes independently, on the surface of the ball, in steam rather than in water, which means each one puffs and sets as an individual bead rather than dissolving into a continuous mass. This is why the crust looks pebbly and why it cannot be replicated by coating the ball in rice flour instead of whole grains. Flour would gelatinize into a smooth, uniform, featureless skin; whole grains gelatinize into a textured, pearl-like, light-scattering surface that reads as craft. The pebbly crust is the cake's visual signature, and it exists because the coating was individual grains, not powder.`,
    },
    {
      title: 'Eat hot, cut in half — and read the three layers',
      description: `Lift the cakes out and eat them hot, within the hour. Cut each in half before biting — the cross-section is the experience: a ring of white pearly crust, a thick layer of mossy-green dough, a golden-green bean paste, and at the very centre a glistening, melted, pepper-flecked pool of pork fat. Four concentric layers, four colours, four textures, one bite.

The bite, taken through all four layers at once: the crust is pearly and faintly crisp-chewy; the green dough is soft, elastic and tastes of winter field; the bean is dense, warm and gently sweet; the fat is liquid, rich and peppery, and it is still warm when it reaches the tongue because it sat at the centre of a mass of insulating starch for 25 minutes and has only just begun to cool.

Eat with nothing — no sauce, no condiment. Sip tea between cakes. The cake is complete. In Làng Diềm the vendor opens the insulated box and the steam carries the cudweed's grassy note into the cold air, and that moment — the opening of the box in winter — is the experience the Hanoians on their bicycles are trying to deliver sixty kilometres south, and the experience this recipe, honestly made with fresh leaves or with the dried ones from a bag, is trying to bring to a kitchen that has never seen a Bắc Ninh field edge in January.`,
      tip: `Bánh khúc is the dish in this collection that most directly records a landscape: the cudweed that only grows in cold months in harvested paddies, the glutinous rice from those same paddies, the pig fattened through the same winter, the mung bean dried from the previous summer's crop. Every ingredient is the field it came from, and the cake's seasonality — winter only, because the leaf is winter only — is not a limitation but a statement about what the field looks like in that month. A cuisine that includes a food available only in January is a cuisine that pays attention to January, and a province that makes its most beloved cake from a weed is a province that knows exactly what grows where, and when, and why. The recipe begins with a walk through a cold field. That walk is the first step, and every step after follows from it.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
