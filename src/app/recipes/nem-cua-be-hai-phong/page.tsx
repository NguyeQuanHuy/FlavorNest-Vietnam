'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nem-cua-be-hai-phong',
    title: `Hải Phòng Sea Crab Spring Roll`,
    subtitle: `Nem Cua Bể Hải Phòng — Crispy fried spring rolls filled with fresh sea crab, glass noodles, and wood ear mushroom — the port city's most celebrated deep-fried snack.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Nem cua bể is the fried spring roll that Hải Phòng has made its signature — not the generic chả giò of the south or the nem rán of the northern standard, but a specific preparation built around cua bể (sea crab, Portunus pelagicus — the blue swimming crab) caught in the coastal waters of the Gulf of Tonkin just outside the city. The blue swimming crab of the Tonkin Gulf has sweet, firm flesh with a subtle brininess that deepens during frying, producing a spring roll whose filling has a genuine oceanic character that pork-only versions cannot replicate.\n\nHải Phòng sits at the mouth of the Cấm River where it meets the Gulf of Tonkin, and the city's food identity is inseparable from its maritime position. The fresh sea crab arrives at Hải Phòng's Chợ Sắt (Iron Market) and the Cát Bà island markets daily — the fishermen unloading directly from their boats at the pier, the crabs still alive and fighting in their baskets. Nem cua bể at its best is made within hours of the catch, the crab meat still glistening and cold, mixed with glass noodles, wood ear mushroom, egg, and seasoning before being rolled in rice paper and fried.\n\nThe frying technique is the northern Vietnamese approach: double-fried at two temperatures, producing a spring roll whose rice paper wrapper achieves a uniform, deep golden colour and a crunch that is maintained for longer than single-fried versions. The first fry at lower temperature sets the structure and begins cooking the filling; the second fry at higher temperature crisps the exterior to the shattering quality that Hải Phòng locals consider the standard. A nem cua bể that bends rather than cracks when pressed is considered inadequately fried.`,
    ingredientSections: [
        {
            title: `Sea crab filling`,
            items: [
                { amount: 300, unit: 'g', name: `fresh sea crab meat (thit cua be)`, note: `blue swimming crab — picked from shells; substitute: fresh canned crab meat, drained completely` },
                { amount: 50, unit: 'g', name: `dried glass noodles (mien)`, note: `soaked 15 min in cold water, drained, cut into 3cm lengths` },
                { amount: 30, unit: 'g', name: `dried wood ear mushroom (nam meo kho)`, note: `soaked 20 min, minced fine` },
                { amount: 50, unit: 'g', name: `pork mince (thit heo xay)`, note: `20% fat — binds the crab filling` },
                { amount: 2, name: `shallots, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `eggs`, note: `1 for filling, 1 beaten for sealing the rolls` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
            ],
        },
        {
            title: `Wrappers`,
            items: [
                { amount: 16, name: `rice paper sheets (banh trang)`, note: `round, 22cm — briefly dipped in warm water` },
            ],
        },
        {
            title: `For double frying`,
            items: [
                { amount: 800, unit: 'ml', name: `neutral oil`, note: `for deep frying` },
            ],
        },
        {
            title: `Northern dipping sauce (nuoc cham Bac)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1.5, unit: 'tbsp', name: `sugar` },
                { amount: 3, unit: 'tbsp', name: `warm water` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `Accompaniments`,
            items: [
                { amount: 1, name: `head butter lettuce` },
                { amount: 1, name: `bunch rau kinh gioi (Vietnamese lemon balm)`, note: `the northern herb — substitute: lemon balm + mint` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 100, unit: 'g', name: `do chua (pickled daikon and carrot)` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the crab filling`,
            description: `If using live crab: steam 8-10 minutes until fully cooked, cool, pick all meat from the shell and claws. Check for shell fragments by running fingers through the meat — any shell left in nem cua bể is considered a serious quality failure in Hải Phòng. Combine crab meat, drained glass noodles, minced wood ear mushroom, pork mince, shallots, garlic, 1 egg, fish sauce, pepper, sugar, and sesame oil. Mix firmly with clean hands for 3 minutes until cohesive. The mixture should hold together when pressed but not be wet — squeeze out any excess moisture from the mushrooms before adding. Refrigerate 20 minutes before rolling.`,
            tip: `The pork mince in nem cua bể is not the primary protein but the binder — its fat content holds the glass noodles and crab meat together during frying, preventing the filling from falling apart when the roll is bitten. Pure crab filling without pork is too loose and crumbles. The 80:20 crab-to-pork ratio produces the correct balance: the crab flavour is dominant and unmistakable, the pork is structural and invisible. Higher pork ratios produce a generic pork spring roll with crab notes; lower ratios produce a roll that falls apart.`,
        },
        {
            title: `Soften the rice paper`,
            description: `Fill a wide shallow bowl with warm water. Dip one rice paper sheet for 3-4 seconds — still slightly stiff when removed, it will continue softening as you work. Place on a clean, slightly damp surface. For nem cua bể, the rice paper must be slightly stiffer than for fresh rolls — it needs to withstand the double frying without developing air bubbles that cause the wrapper to separate. Overly softened rice paper produces bubbles and an uneven surface during frying.`,
        },
        {
            title: `Roll tightly — the nem cua bể shape`,
            description: `Place 2 tablespoons of crab filling in a compact rectangle across the lower third of the softened rice paper. The filling rectangle should be narrow and dense — wide, loose filling produces a roll that is too large to fry evenly and tends to burst at the ends. Fold the bottom edge up and over the filling firmly. Fold both sides in toward the centre. Roll forward tightly — pulling the filling toward you as you roll to maintain tension. Seal the final edge with beaten egg. The finished roll should be 8-10cm long and 2.5-3cm in diameter — smaller and denser than southern chả giò.`,
            tip: `The northern nem rán (and by extension nem cua bể) is smaller and more tightly rolled than the southern chả giò — a deliberate size difference that produces a higher filling-to-wrapper ratio and a more uniform fry. A large, loosely rolled spring roll has uneven thickness throughout its length and produces inconsistent crisping. The tight, narrow Hải Phòng roll fries completely evenly from end to end because its diameter is uniform.`,
        },
        {
            title: `Double fry — the Hải Phòng method`,
            description: `First fry: heat oil to 160°C. Fry rolls in batches of 4-5, turning occasionally, for 4-5 minutes until pale golden and the filling is cooked through. Remove and drain on a wire rack. Rest 5 minutes — the rolls firm up as the internal steam equalises. Second fry: increase oil to 185°C. Return the rested rolls to the oil and fry 90 seconds to 2 minutes until deep golden and audibly crispy — you should hear a distinct crackling sound when two rolls knock against each other in the oil. Remove and drain immediately.`,
            tip: `The double-fry technique produces a fundamentally different exterior than single frying. The first fry at 160°C cooks the filling and sets the rice paper structure — at this stage the exterior is pale and relatively soft. The resting period allows the internal moisture to redistribute away from the surface. The second fry at 185°C encounters a drier surface and crisps it almost instantaneously — the high temperature converts the surface moisture to steam in 10-15 seconds, leaving behind a dehydrated, shatteringly crispy layer. Single-fried rolls have a harder but less crispy exterior; double-fried rolls have the specific shatter quality Hải Phòng locals demand.`,
        },
        {
            title: `Make the northern dipping sauce`,
            description: `Combine fish sauce, lime juice, sugar, warm water, minced garlic, and sliced chili. Stir until sugar dissolves. The northern nuoc cham is less sweet and less diluted than the Mekong Delta version — the sharper, more concentrated sauce is calibrated for the richer, crispier northern spring roll. Taste: the lime acidity should be the dominant note, followed by fish sauce salinity, then a moderate sweetness. No pineapple juice, no coconut milk — pure and direct.`,
        },
        {
            title: `Serve and eat the Hải Phòng way`,
            description: `Arrange hot nem cua bể on a plate with the herb plate alongside — butter lettuce, rau kinh giới, rau răm, mint, cucumber, and pickled daikon-carrot. To eat: wrap a whole nem in butter lettuce with rau kinh giới and rau răm. Dip in nuoc cham and eat in two bites. The crab flavour should be immediately apparent — the sweet, slightly briny sea crab, the chewy glass noodle, the earthy wood ear mushroom, all within a shell that shatters when bitten. In Hải Phòng, nem cua bể is served at room temperature celebrations and drunk with bia hơi (draft beer) — the combination of the crispy roll, the sharp dipping sauce, and the cold beer is the city's most beloved eating ritual.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}