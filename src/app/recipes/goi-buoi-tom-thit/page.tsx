'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'goi-buoi-tom-thit',
  title: `Gỏi Bưởi Tôm Thịt (Pomelo Salad with Shrimp and Pork)`,
  subtitle: `Pomelo segments — pulled apart by hand into clusters of juice vesicles, each one a tiny transparent capsule of sweet-sour-bitter citrus — tossed with poached shrimp, sliced pork belly, rau răm, crushed peanuts and a fish-sauce-lime dressing. The salad where every bite bursts with a hundred tiny explosions of juice.`,
  category: 'APPETIZER',
  difficulty: 'Easy',
  totalTime: '30 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/goi-buoi-tom-thit.jpg',
  intro: `Bưởi — the pomelo, Citrus maxima — is the largest citrus fruit in the world and the one the Vietnamese kitchen takes most seriously. Its flesh is pulled apart into individual juice vesicles — tiny, elongated, transparent sacs that make up the edible portion — and those vesicles, each one a micro-capsule of sweet-tart-mildly-bitter juice enclosed in a thin cellulose membrane, are tossed into salads as the primary ingredient.

The texture is what makes the salad unlike any other gỏi: a pomelo vesicle is a small, firm, juice-filled capsule about 1 cm long, and when bitten the membranes rupture sequentially — not all at once but one by one, in a cascade of tiny pops that releases juice across the tongue over two to three seconds. The mouthfeel is effervescent — a bursting crunch no other fruit produces at this scale.

The pomelo's flavour is the mildest in the citrus family: sweet, gently tart, with a faint bitterness from the pith's naringin. The mildness is why it works as a salad ingredient where other citrus would overwhelm — its sweetness provides a platform for the fish sauce's salt and the shrimp's umami rather than dominating the plate.

The proteins are poached shrimp and sliced boiled pork belly — the fat layer is not optional. A pomelo gỏi without pork fat is sharp, thin and one-dimensional; with pork fat it is round, full and multi-dimensional because the fat resolves the acid-salt fight into harmony. The salad is served at Tết, weddings and family gatherings where the pomelo was a gift shared as a salad.`,
  ingredientSections: [
    {
      title: 'The pomelo',
      items: [
        { amount: 1, name: 'large pomelo (about 800 g - 1 kg)', note: `Bưởi Năm Roi or bưởi da xanh preferred. Peel, segment, remove ALL membrane and pith, then pull each segment apart into loose clusters of individual vesicles. Do NOT chop — vesicles must remain intact for the burst-texture.` },
      ],
    },
    {
      title: 'The proteins',
      items: [
        { amount: 200, unit: 'g', name: 'shrimp, poached 2 min, peeled, halved lengthwise' },
        { amount: 150, unit: 'g', name: 'pork belly, boiled 40 min, chilled, sliced 2 mm thin', note: `The fat layer must be intact — it carries the pomelo's limonene and nootkatone volatiles to the aroma receptors.` },
      ],
    },
    {
      title: 'The dressing',
      items: [
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, unit: 'tbsp', name: 'lime juice' },
        { amount: 2, unit: 'tbsp', name: 'sugar' },
        { amount: 2, name: 'cloves garlic, pounded fine' },
        { amount: 2, name: 'bird\'s-eye chilies, sliced' },
        { amount: 1, unit: 'tbsp', name: 'water' },
      ],
    },
    {
      title: 'The herbs and crunch',
      items: [
        { amount: 50, unit: 'g', name: 'rau răm, roughly torn' },
        { amount: 30, unit: 'g', name: 'húng quế, leaves picked' },
        { amount: 30, unit: 'g', name: 'coriander, roughly chopped' },
        { amount: 60, unit: 'g', name: 'roasted peanuts, coarsely crushed' },
        { amount: 3, unit: 'tbsp', name: 'fried shallots' },
        { amount: 2, unit: 'tbsp', name: 'toasted coconut flakes (optional)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Segment and pull apart — vesicles intact, no pith, no membrane',
      description: `Cut off the thick rind (2-3 cm) including all white pith — the pith's naringin overwhelms the salad if left on. Separate segments along natural divisions. Peel the translucent membrane off each segment — tough, papery, bitter.

Pull each naked segment apart gently with fingers into loose clumps of vesicles, 2-3 cm across. Do NOT chop, mash or squeeze. The vesicles must remain intact: each is a sealed capsule of juice, and the burst when the tooth punctures it is the dish's defining texture. A chopped pomelo is juicy mush; a hand-pulled pomelo is a cascade of tiny explosions.`,
      tip: `The pomelo's vesicles are structurally unique: each is an individual cell filled with citric-acid-rich juice, enclosed in a cellulose membrane strong enough to withstand the dressing's salt for 20-30 minutes without collapsing. This is why pomelo holds its burst-texture while orange would weep out in 5 minutes — the pomelo's vesicle membranes are thicker, more rigid and more resistant to osmotic rupture. Each juice capsule is a pressure vessel, and the salad is a plate of a thousand tiny pressure vessels waiting for the tooth.`,
    },
    {
      title: 'Toss GENTLY — the pomelo bruises, the shrimp scatters, the fat coats',
      description: `Pour the dressing over the pulled pomelo. Toss GENTLY with two large spoons, lifting from the bottom, 4-5 times. Rough tossing crushes vesicles and releases juice prematurely — turning the cascade-of-bursts into a wet puddle.

Add the shrimp and pork belly. Toss gently twice. Add herbs. One final gentle toss. Transfer to a serving plate, mound high. Scatter peanuts, fried shallots and coconut.

If the bottom of the bowl has a pool of juice, the tossing was too aggressive and the vesicles are burst. The cook's restraint in the bowl is the eater's reward at the plate.`,
      tip: `The gentle-toss rule is the pomelo gỏi's single most important instruction. Every other gỏi in this collection is tossed vigorously, but the pomelo's vesicles are intact pressure vessels — each one that bursts during tossing is a burst that does not happen in the mouth. The salad's pleasure is the in-mouth burst, not the in-bowl burst. Gentle hands in the bowl = explosive mouth at the table.`,
    },
    {
      title: 'Eat in spoonfuls — every bite a hundred tiny bursts, within 20 minutes',
      description: `Eat with a spoon — vesicles are too small for chopsticks. Each spoonful carries: a mass of intact vesicles, a piece of shrimp, a strip of fatty pork, herbs, peanuts.

The bite sequence: peanuts crunch (one crunch, dry). Shrimp and pork compress (yielding, fatty). Then the pomelo vesicles rupture — not one pop but a hundred, a cascade of micro-bursts releasing sweet-tart juice across the tongue in a wave lasting two to three seconds. Fish sauce's salt arrives through the juice. Rau răm's pepper warms the finish. Pork fat carries the pomelo's limonene to the aroma receptors at the back of the throat.

Eat within 20 minutes. The dressing's salt weakens vesicle membranes through osmotic hydrolysis — at 20 minutes the bursts are reliable; at 30 they soften to seeps; at 45 the salad is a wet fruit pile. The vesicle-burst is a twenty-minute phenomenon.`,
      tip: `Gỏi bưởi is the collection's only salad built on a burst-texture — a mechanical sensation (vesicle rupture) rather than a static texture (crunch). Every other gỏi delivers crunch as a constant — each bite the same as the last. The pomelo delivers texture as an EVENT: compression, burst cascade, juice wash — a three-act structure that repeats with every spoonful. The pomelo is not a texture. It is a performance, and the performance runs for twenty minutes before the curtain falls.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
