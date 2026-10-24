'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ga-ho-bac-ninh',
  title: `Gà Hồ Luộc Chấm Muối Tiêu Chanh (Boiled Hồ Village Heritage Chicken with Salt-Pepper-Lime Dip)`,
  subtitle: `A rooster of the Hồ breed — thin-boned, tight-skinned, yellow-fleshed, and raised for a year in the village gardens of Thuận Thành — boiled whole in plain water with a knob of ginger and nothing else. Sliced into rectangles, arranged like tiles, dipped in lime-salt-pepper, and judged by the chicken alone.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/ga-ho-bac-ninh.jpg',
  intro: `Gà Hồ is one of a handful of Vietnamese chicken breeds that carries a geographic indication and a reputation that extends beyond the province. The breed originates from Hồ village, Lạc Vệ commune, Thuận Thành district, Bắc Ninh — a village that has raised this single line of poultry for so many generations that the breed registry and the village registry are the same document — and it has a phenotype unlike any other chicken in the country: exceptionally thin, delicate bones; a compact, upright body; a tight, close-fitting skin that adheres to the flesh; a fine-grained, yellow-gold meat with subtle marbling; and a flavour described as thơm thịt — fragrant flesh.

The breed's distinction is genetic, but its expression is husbandry. Hồ chickens forage in village gardens — insects, worms, scraps, rice paddy gleanings — and grow slowly: a rooster reaches slaughter weight at ten to twelve months, where a commercial broiler reaches 2.5 kg at six weeks. That year of slow growth on a natural diet is the whole difference. The muscle fibres are denser and finer. The intramuscular fat is higher and more evenly distributed. The collagen content is higher. And the flavour compounds — inosinate, free amino acids, volatile sulfur and carbonyl molecules — are present in concentrations a six-week broiler never builds.

And then the cooking is: nothing. The bird is poached whole in plain water with bruised ginger and a pinch of salt, held at a bare simmer for exactly the time its weight requires, pulled, plunged into iced water, and sliced into neat rectangles with the skin still attached and arranged on a plate with nothing on it. The dipping sauce is muối tiêu chanh: salt, cracked black pepper and lime juice pounded together. That is the whole dish.

The austerity is the point, and the point is confidence. A boiled chicken with no seasoning, no sauce beyond salt and lime, no garnish beyond the arrangement on the plate, has nowhere to hide. If the bird is ordinary the dish is nothing. If the bird is a Hồ chicken from a Thuận Thành garden, the dish is proof that a great ingredient needs nothing but temperature.`,
  ingredientSections: [
    {
      title: 'The chicken',
      items: [
        {
          amount: 1,
          name: 'gà Hồ rooster, whole, 1.5-2 kg — or the best free-range heritage chicken available',
          note: `The breed is the recipe. In Europe: the oldest, most free-range heritage chicken your best butcher or farmer can supply — a poulet de Bresse, a Label Rouge, an organic free-range from a farm shop. Age matters more than breed: a 10-month bird will always outperform a 6-week one. Ask for the oldest thing in the case.`,
        },
        { amount: 2, unit: 'tbsp', name: 'coarse salt + 1 lime, halved (for scrubbing)' },
        { amount: 30, unit: 'g', name: 'ginger, bruised', note: `The only aromatic in the pot. It neutralises surface amines; it does not season the chicken.` },
        { amount: 1, unit: 'tsp', name: 'salt (for the pot)' },
        { amount: 3, unit: 'L', name: 'water' },
      ],
    },
    {
      title: 'Muối tiêu chanh (salt-pepper-lime dip)',
      items: [
        { amount: 2, unit: 'tbsp', name: 'fine sea salt' },
        { amount: 1, unit: 'tsp', name: 'coarsely cracked black pepper' },
        { amount: 3, unit: 'tbsp', name: 'fresh lime juice (from 2 limes)', note: `Squeezed into the salt immediately before serving.` },
      ],
    },
    {
      title: 'The table',
      items: [
        { amount: 1, name: 'small bunch of rau răm', note: `One sprig per slice. The herb is an accent, not a hedge.` },
        { amount: 1, name: 'small bunch of lá chanh (kaffir lime leaves), shredded thin (optional)' },
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 1, name: 'pot of clear canh' },
        { amount: 1, name: 'plate of dưa kiệu or dưa muối (pickled vegetables)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Scrub the bird and bring the water to exactly a simmer — not a boil',
      description: `Rub the whole chicken hard with coarse salt and cut lime — inside the cavity, under the wings, around the neck flap. Rinse and dry. Tuck the wings behind the back and tie the legs loosely.

Bring 3 litres of water to a boil with the bruised ginger and salt. Lower the bird breast-side down — and immediately reduce to the barest simmer. The surface should shiver with an occasional bubble, never roll.

A boiled chicken is a misnomer. The bird is poached — held at 80-85°C — and the difference is silk-textured juicy flesh versus dry stringy disappointment.`,
      tip: `At 100°C muscle proteins contract hard and squeeze out their water. At 80-85°C they set gently and evenly, water is retained, and the whole bird crosses doneness together. This is the same physics as every sous-vide chicken and every Hainanese chicken, achieved with a knob on the stove turned to the same position for forty years.`,
    },
    {
      title: 'Poach to exact doneness — 40-50 minutes, then ice bath',
      description: `Poach 40 minutes for 1.5 kg, 50 for 2 kg, at the barest simmer. Do not lift, do not prod, do not pierce.

Test: press the thickest thigh — it should feel firm and spring back slowly. A skewer into the deep thigh: juice runs completely clear.

Pull the bird and plunge immediately into a basin of iced water. Leave 15 minutes. The shock stops the cooking, tightens the skin into its characteristic smooth lacquered appearance, and firms the subcutaneous fat from smeary to sliceable.`,
      tip: `The ice bath does three things: stops residual-heat overcooking (a 2 kg bird continues denaturing protein for ten minutes out of the pot), tightens the skin (collagen contracts sharply on cold contact), and sets the fat (soft at 40°C, firm at 5°C — the difference between clean rectangles and ragged shreds). Three pieces of food science in one basin of cold water.`,
    },
    {
      title: 'Slice the Bắc Ninh way — rectangles, skin on, arranged like tiles',
      description: `Dry the chilled bird. Remove legs, thighs and breasts, skin attached. Cut across the grain into neat rectangles about 1 cm thick and 5 cm long — each carrying its layer of tight yellow skin, a stripe of set fat, and golden flesh beneath.

Arrange on a plate in overlapping rows, like roof tiles — skin side up, each piece slightly offset. No garnish on the plate. A leaf of rau răm at one corner. The chicken occupies the plate alone.

The rectangle cut is a display format as much as a serving format — it shows the bird's quality (skin colour, fat distribution, flesh grain) the way a cross-section of marble shows a quarry's quality.`,
      tip: `Each rectangle is a cross-section of the bird: skin, fat, meat, often a sliver of bone, all visible, all tasted together. A bird with pale skin and coarse grain is exposed by this cut; a Hồ chicken with golden skin and fine marbling is celebrated by it. The knife is the examiner and the plate is the certificate.`,
    },
    {
      title: 'Pound the dip fresh — and drink the broth',
      description: `Pound the salt and cracked pepper together. Squeeze the lime juice directly in, one minute before serving. The saucer should hold a wet, granular, glistening paste.

Dip each piece skin-side down — the salt clings to the skin's surface — lift, add a rau răm leaf, eat. The chicken should taste of chicken. The salt sharpens. The lime lifts. The pepper warms.

And the pot: strain the poaching liquid — it is now a clean, pale-gold chicken broth of remarkable depth. Season with a splash of fish sauce. Serve in small bowls with sliced scallion and pepper. The broth is the bird's autobiography in liquid form, and it is served as a course, not discarded. Nothing of the bird is wasted.`,
      tip: `Muối tiêu chanh is the most minimal condiment in Vietnamese cooking. Its minimalism is a declaration of confidence in the protein it accompanies: a bird this good needs only a sharpener, not a seasoning. It is the condiment equivalent of the dish's philosophy — that an ingredient of sufficient quality requires the cook to do less, not more, and that the bravest thing a recipe can say is nothing.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
