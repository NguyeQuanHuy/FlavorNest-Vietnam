'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cha-lua-tu-lam',
    title: 'Chả Lụa Tự Làm (Homemade Vietnamese Steamed Pork Roll)',
    subtitle: 'Lean pork blended to a smooth, elastic paste with fish sauce, baking powder, and ice-cold water then wrapped tightly in banana leaf and steamed until it sets into a firm, slightly springy cylinder — the Vietnamese pork sausage that appears in bánh mì, bún, cơm tấm, and alongside every Vietnamese noodle and rice dish.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr',
    rating: 4.9,
    baseServings: 8,
    heroImage: '/images/recipes/cha-lua-tu-lam.jpg',
    intro: `Chả lụa — also known as giò lụa in the north — is the Vietnamese steamed pork roll that is simultaneously the most ubiquitous and the most technically specific prepared food in the Vietnamese culinary repertoire. It appears sliced in bánh mì, beside bún bò Huế, over cơm tấm, inside bánh cuốn, atop bún thịt nướng, and on the charcuterie-adjacent snack plates that precede a Vietnamese family meal. It is both a daily staple and a specific craft: the difference between correctly and incorrectly made chả lụa is immediately perceptible in texture — correct chả lụa has a specific firm, slightly springy, almost bouncy character that results from the precise processing of the pork paste, while incorrectly made versions are dense and crumbly or soft and mushy. The technique that produces the correct texture is the cold-processing of very lean pork into a smooth, emulsified paste — a process identical in principle to the making of French farce or German Brühwurst, where the temperature of the meat and equipment during blending determines whether the fat emulsifies correctly into the protein matrix (producing the springy texture) or breaks out of emulsion (producing the greasy, crumbly texture). The pork must be lean (92% lean, 8% fat maximum), very cold (near-freezing during processing), and blended to a smooth paste rather than merely minced, in a process that takes 5-7 minutes in a high-powered blender or food processor and that produces a paste that is simultaneously smooth, elastic, and slightly sticky when correctly processed. Wrapped in banana leaf (which provides the specific subtle fragrance that commercial plastic-wrapped chả lụa entirely lacks) and steamed for 45 minutes, the paste sets into the cylinder of firm, fragrant pork that makes homemade chả lụa one of the most satisfying cooking achievements in the Vietnamese home kitchen.`,
    ingredientSections: [
        {
            title: 'Pork paste',
            items: [
                { amount: 600, unit: 'g', name: 'very lean pork leg or shoulder (thịt heo nạc)', note: 'cut into 2cm cubes and frozen for 30 minutes before processing — the near-freezing temperature is essential for emulsification' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 1, unit: 'tsp', name: 'baking powder', note: 'produces the specific slightly springy texture of chả lụa' },
                { amount: 3, unit: 'tbsp', name: 'ice-cold water', note: 'added gradually during blending — the cold temperature maintains emulsification' },
                { amount: 2, unit: 'tsp', name: 'tapioca starch (bột năng)', note: 'small amount — helps bind and produces the slight glossiness of the cut surface' },
            ],
        },
        {
            title: 'Wrapping',
            items: [
                { amount: 4, name: 'large banana leaves', note: 'cleaned, wilted briefly over a flame to make pliable. The banana leaf provides the specific fragrance that plastic cannot.' },
                { amount: 1, name: 'roll kitchen twine', note: 'for tying the wrapped rolls' },
            ],
        },
        {
            title: 'Optional additions',
            items: [
                { amount: 20, unit: 'g', name: 'wood ear mushrooms (mộc nhĩ)', note: 'soaked, drained, finely diced — for chả lụa mộc nhĩ variation' },
                { amount: 1, unit: 'tbsp', name: 'fried shallots', note: 'for additional flavor depth' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 3, unit: 'tbsp', name: 'soy sauce or fish sauce', note: 'for dipping sliced chả lụa' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice or bánh mì', note: 'the two most common vehicles' },
            ],
        },
    ],
    steps: [
        {
            title: 'Freeze the pork — 30 minutes minimum',
            description: 'Cut the lean pork into 2cm cubes. Spread on a tray and place in the freezer for 30-45 minutes until the surface is just beginning to freeze — the cubes should feel very firm and cold but not solid. Also chill the food processor bowl and blade in the freezer for 15 minutes. The near-freezing temperature of both the meat and equipment is the single most important factor in producing correctly emulsified chả lụa. Warm meat produces broken emulsion and a greasy, crumbly texture.',
            tip: 'The temperature of the pork during processing determines the texture of the finished chả lụa more than any other factor. At near-freezing (around 2°C), the pork fat stays solid within the protein matrix during blending and emulsifies correctly as the protein is broken down. At room temperature, the fat melts slightly during the heat of blending and separates from the protein, producing the greasy, crumbly texture of failed chả lụa.',
        },
        {
            title: 'Process to smooth paste — 5-7 minutes',
            description: 'Place the near-frozen pork cubes in the chilled food processor. Add fish sauce, sugar, white pepper, baking powder, and tapioca starch. Process continuously for 2 minutes until roughly ground. With the processor running, add ice-cold water tablespoon by tablespoon over the next 3-5 minutes. Continue processing until the paste is completely smooth, slightly glossy, and pulls away from the sides of the bowl in a clean mass. Test: a small amount of the paste placed in cold water should float and hold its shape.',
            tip: 'The float test for chả lụa paste — a small ball of paste placed in cold water should float rather than sink — is the indicator of correct emulsification. A sinking ball means the paste is too dense and under-processed. A floating ball means the protein-fat emulsion has formed correctly and will produce the springy texture of properly made chả lụa. Process for 2 more minutes if the paste sinks.',
        },
        {
            title: 'Wilt the banana leaves and wrap',
            description: 'Pass each banana leaf briefly over a gas flame or hot plate — 3-5 seconds per side — until the leaf darkens slightly and becomes pliable without cracking. Wipe clean. Lay two overlapping banana leaf sheets on a flat surface. Place one-third of the paste in a log shape across the center of the leaf. Fold the leaf sides over the paste. Roll into a tight cylinder approximately 5cm diameter. Tie firmly with kitchen twine at 3cm intervals. Repeat for two more rolls.',
            tip: 'The banana leaf wilting step before wrapping is essential — an unwilted banana leaf will crack when folded and produce an imperfect seal that allows steam to enter the roll during cooking, producing a watery, soft result. The brief flame treatment makes the leaf flexible enough to wrap tightly while remaining intact. The distinctive fragrance released when the banana leaf wilts over the flame is the first indicator of what homemade chả lụa wrapped in banana leaf will taste like.',
        },
        {
            title: 'Steam for 45-50 minutes',
            description: 'Place the wrapped rolls in a steamer. Steam over vigorously boiling water for 45 minutes for a 5cm diameter roll, 50 minutes for a thicker roll. The chả lụa is done when a skewer inserted through the banana leaf and into the center comes out hot and clean, and the roll feels firm throughout when pressed. Cool completely before unwrapping — the texture firms further during cooling and slicing a warm roll produces a soft, slightly mushy cut surface.',
            tip: 'The complete cooling before unwrapping chả lụa is the step most often skipped and most consequential. Freshly steamed chả lụa is still setting as it cools — the protein matrix continues firming for 20-30 minutes after leaving the steamer. Unwrapped and sliced immediately, the cut surface is soft and slightly wet. Cooled completely (minimum 1 hour at room temperature, or overnight refrigerated), the cut surface is clean, firm, and slightly glossy — the visual that marks correctly made chả lụa.',
        },
        {
            title: 'Unwrap, slice, and use across the Vietnamese kitchen',
            description: 'Unwrap the cooled chả lụa. The banana leaf should peel away cleanly, leaving a faint green fragrance on the surface of the roll. Slice into 5mm rounds for bánh mì and bún, into thicker 1cm slices for eating alongside rice, or into batons for adding to other preparations. Stored wrapped in its banana leaf in the refrigerator, chả lụa keeps for 5 days. Frozen for up to 2 months. The homemade version, compared to commercial chả lụa, is immediately different in fragrance — the banana leaf character present in every bite — and in texture — slightly more tender and less rubbery than commercial production allows.',
            tip: 'The banana leaf character in homemade chả lụa — a subtle green, slightly grassy fragrance in every slice — is the element most clearly lost in commercial versions wrapped in plastic. This fragrance is not decorative; it is a flavor contribution that the banana leaf makes to the pork during steaming, in the same way that banana leaf contributes to the fish wrapped in it for grilling or the sticky rice wrapped in it for steaming. The leaf is not packaging. It is an ingredient.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
