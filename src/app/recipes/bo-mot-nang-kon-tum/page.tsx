'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-mot-nang-kon-tum',
    title: `Central Highland Sun-Dried Beef`,
    subtitle: `Bò Một Nắng — Beef dried under one highland sun then grilled over charcoal — Phú Yên and Gia Lai's ancient preservation technique that concentrates flavour beyond any fresh cut.`,
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '14 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bò một nắng — literally "beef of one sun" — is the Central Highland and coastal Phú Yên preparation in which fresh beef is sliced thin, lightly seasoned, and dried under the direct highland sun for one full day before being grilled over charcoal. The single-day sun drying is the technique's defining constraint: long enough to remove 30-40% of the beef's moisture, concentrate its flavour compounds, and develop a slightly firmed exterior that holds up to the intense charcoal heat without falling apart; short enough that the beef retains sufficient moisture inside to remain chewy and yielding rather than becoming the hard, fully preserved jerky of multi-day drying.\n\nThe Central Highlands of Vietnam — Phú Yên, Gia Lai, Kon Tum — have a specific solar and wind environment that makes the one-day drying technique work as it does nowhere else: the highland sun is intense (at 400-600m elevation, UV radiation is 20-30% higher than at sea level), the air is dry and consistently breezy, and the temperature fluctuates between the hot direct-sun period (35-40°C in exposed positions) and the cooler shade temperature. This combination dries the beef surface rapidly without cooking it — the surface temperature of the meat in direct highland sun reaches 40-45°C, which is sufficient for rapid moisture evaporation but below the temperature at which proteins denature (above 50°C). The beef dries, not cooks, in the one-sun period.\n\nAfter the single sun-drying, the bò một nắng is grilled over charcoal — the heat caramelises the concentrated surface sugars and proteins that the drying has exposed, producing a Maillard crust of extraordinary intensity. The flavour of correctly prepared bò một nắng grilled over charcoal is unlike any other beef preparation: concentrated, deeply savoury, with a slight chewiness from the partial drying and a smoky charcoal note that the concentrated surface amplifies beyond what fresh beef can achieve.`,
    ingredientSections: [
        {
            title: `Beef`,
            items: [
                { amount: 600, unit: 'g', name: `beef (thit bo)`, note: `bắp bò (beef shank) or thăn bò (sirloin) — sliced 5-6mm thick against the grain; lean cuts work best as fat prevents even drying` },
            ],
        },
        {
            title: `Light seasoning before drying`,
            items: [
                { amount: 1.5, unit: 'tsp', name: `coarse salt (muoi hat)`, note: `the primary preserving agent` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 3, name: `lemongrass stalks, inner white only, minced fine`, note: `the Phú Yên-Gia Lai aromatic` },
                { amount: 4, name: `garlic cloves, minced` },
                { amount: 2, name: `shallots, minced` },
            ],
        },
        {
            title: `Home drying method (German climate substitute)`,
            items: [
                { amount: 1, name: `oven or food dehydrator`, note: `set to 45-50°C — approximates highland sun surface temperature; fan-forced oven preferred` },
                { amount: 1, name: `wire rack`, note: `for air circulation on all sides` },
                { amount: 8, unit: 'hrs', name: `drying time at 45-50°C`, note: `equivalent to 1 highland sun day` },
            ],
        },
        {
            title: `Muối mắc khén dipping salt`,
            items: [
                { amount: 1, unit: 'tsp', name: `mac khen berries, toasted and ground`, note: `optional — the highland spice pairing; substitute: Sichuan pepper` },
                { amount: 2, unit: 'tsp', name: `coarse salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1.5, unit: 'tbsp', name: `lime juice` },
                { amount: 2, name: `bird's eye chili, minced` },
                { amount: 1, name: `garlic clove, minced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 20, name: `sheets rice paper (banh trang)`, note: `for wrapping` },
                { amount: 1, name: `cucumber, julienned` },
                { amount: 100, unit: 'g', name: `green banana, sliced thin` },
                { amount: 2, name: `limes, wedged` },
                { amount: 100, unit: 'g', name: `do chua (pickled daikon and carrot)` },
            ],
        },
    ],
    steps: [
        {
            title: `Slice and season the beef`,
            description: `Slice beef 5-6mm thick against the grain — the against-grain direction shortens the muscle fibres and produces a more tender chew in the finished dried-and-grilled product. At 5-6mm thickness, the drying removes sufficient moisture from the exterior while leaving the interior still slightly moist — thinner slices dry completely and become brittle; thicker slices take too long to dry and may develop surface spoilage in humid conditions. Combine salt, sugar, pepper, fish sauce, minced lemongrass, garlic, and shallots. Toss beef slices thoroughly and massage the seasoning into each slice. Rest 20 minutes.`,
            tip: `The seasoning for bò một nắng before drying is deliberately minimal — less than for a fresh beef marinade. The purpose of the pre-dry seasoning is to provide the salt necessary for safe surface preservation during the drying period and to add the lemongrass aromatic that will concentrate along with the beef's own flavour compounds during drying. Heavily seasoned beef dried in the sun produces an over-seasoned finished product because all flavour compounds concentrate proportionally as moisture is removed. The rule: season to 60% of the final desired intensity before drying.`,
        },
        {
            title: `Sun-dry — traditional method (or oven approximate)`,
            description: `Traditional: Arrange seasoned beef slices in a single layer on bamboo racks or wire racks placed in direct sun from 8am. The highland sun of Phú Yên and Gia Lai provides 8-9 hours of drying time before the afternoon clouds typical of the Central Highlands arrive. Turn the beef at noon. After 8 hours: the surface should feel dry and firm, slightly darker than raw beef, with the interior still yielding when pressed. German oven substitute: arrange on wire racks over baking trays. Set oven to 45-50°C with fan-forced function. Prop the oven door open 2-3cm to allow moisture to escape. Dry 8 hours, turning once at 4 hours.`,
            tip: `The 45-50°C oven setting is the critical calibration for the German home version. Below 40°C: drying is too slow and the beef surface may develop spoilage in the moist initial hours. Above 55°C: the surface proteins begin denaturing, producing a cooked rather than dried exterior — the bò một nắng's distinctive dry-firm but raw-interior quality is lost. The fan-forced function and the propped-open door are both essential: fan-forced moves air across the beef surface continuously (mimicking the highland breeze that is as important as the sun in the original technique), and the propped door allows the evaporated moisture to escape rather than condensing back onto the beef.`,
        },
        {
            title: `Check the dried beef`,
            description: `After 8 hours, the correctly dried bò một nắng should: feel firm and slightly leathery on the surface; be visibly darker in colour (deep mahogany-red rather than the bright red of raw beef); have lost 30-40% of its original weight; and retain a slight give when pressed firmly — the centre should not be hard. Cut one slice in half crosswise — the cross-section should show a lighter, still-moist interior beneath the darker dried exterior. This two-tone cross-section is the quality indicator of correctly prepared bò một nắng.`,
        },
        {
            title: `Grill over high charcoal — 3 to 4 minutes total`,
            description: `Prepare charcoal at high heat. The dried beef slices need intense, short grilling — their reduced moisture means they cook faster than fresh beef. Grill 90 seconds per side over high direct heat. The concentrated surface sugars and proteins caramelise almost immediately on contact with the hot grill, producing a deep crust in 90 seconds that would take 4-5 minutes to develop on fresh beef of the same thickness. Watch constantly — the reduced moisture means bò một nắng moves from correctly grilled to overdone in 30-45 additional seconds. The correct endpoint: deeply caramelised crust, interior hot but not dry.`,
            tip: `The accelerated Maillard reaction on dried beef compared to fresh beef is the food chemistry reason bò một nắng needs only 90 seconds per side rather than 4-5 minutes. The drying process concentrates free amino acids and reducing sugars on the beef surface — the precursors for Maillard browning — at 2-3 times the concentration found on fresh beef. When this concentrated surface contacts the hot grill, the Maillard reaction proceeds 2-3 times faster, producing in 90 seconds a crust that would take 4-5 minutes to develop on fresh beef. This accelerated browning is the defining characteristic of grilling any dried or aged meat.`,
        },
        {
            title: `Make the dipping salt`,
            description: `Combine toasted ground mắc khén (or Sichuan pepper), coarse salt, sugar, lime juice, minced chili, and minced garlic. Stir until salt and sugar dissolve. The mắc khén dipping salt is the highland pairing most authentic to the Gia Lai and Kon Tum versions of bò một nắng — the numbing-citrus of the mắc khén against the concentrated, slightly chewy beef produces the specific highland flavour pairing that coastal versions served with plain muối tiêu chanh do not achieve.`,
        },
        {
            title: `Serve and wrap`,
            description: `Arrange the grilled bò một nắng slices on a plate with the full accompaniment spread: rice paper, rau răm, mint, cucumber julienne, green banana slices, pickled daikon-carrot, and lime. The correct eating of bò một nắng: soften a rice paper briefly in warm water, lay flat. Place a slice of grilled beef, a sliver of green banana, cucumber, rau răm, and mint on the lower third. Roll into a compact cylinder and dip in the mắc khén salt. The crunch of the charcoal crust, the slight chewiness of the dried interior, the astringency of the green banana, and the numbing-citrus of the mắc khén salt arriving simultaneously is the Central Highland eating experience that bò một nắng provides and no other preparation replicates.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}