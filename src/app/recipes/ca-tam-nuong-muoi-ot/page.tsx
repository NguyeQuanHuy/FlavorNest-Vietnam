'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-tam-nuong-muoi-ot',
    title: `Đà Lạt Sturgeon Grilled with Chili Salt`,
    subtitle: `Cá Tầm Nướng Muối Ớt — Lake Tuyền Lâm sturgeon grilled whole over charcoal with lemongrass-chili salt and highland herbs.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cá tầm (sturgeon, Acipenser sinensis and hybrid varieties) arrived in Đà Lạt in the early 2000s when Vietnamese aquaculture researchers discovered that the cool, clean water of Lake Tuyền Lâm and the highland rivers of Lâm Đồng province — consistently between 18 and 22°C year-round — provided conditions nearly identical to the sturgeon's native Yangtze River habitat. Within a decade, Đà Lạt had become Vietnam's primary sturgeon farming region, and cá tầm had become the city's most prestigious local ingredient.\n\nCá tầm nướng muối ớt is the preparation that local restaurants developed to showcase the fish's qualities: the sturgeon is grilled whole or in large sections over charcoal, rubbed only with lemongrass-chili salt and neutral oil, allowing the natural sweetness and richness of the highland-farmed flesh to be the dominant flavour. Sturgeon flesh is distinctly different from other freshwater fish — it is firm, white, and contains a layer of fat just beneath the skin that renders during grilling, basting the flesh from the inside and producing a moistness that does not require sauce or marinade to achieve.\n\nThe scutes (bony plates) that run along the sturgeon's body are removed before cooking but the skin is left on — the skin chars and crisps during grilling and is eaten, providing a textural contrast to the rich flesh beneath. In Đà Lạt restaurants around Tuyền Lâm lake, the fish is brought to the table still on the grill, alongside a small plate of highland herbs and a bowl of mắm tôm or simple salt-lime-pepper dipping sauce. The altitude, the lake view, and the charcoal smoke are part of the eating experience in a way that cannot be replicated indoors.`,
    ingredientSections: [
        {
            title: `The sturgeon`,
            items: [
                { amount: 1.2, unit: 'kg', name: `fresh sturgeon (ca tam Da Lat)`, note: `whole or portioned — scutes removed, skin on; substitute: large catfish or barramundi if sturgeon unavailable` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `brushed on skin before grilling` },
                { amount: 1, unit: 'tsp', name: `rice wine or dry sherry`, note: `rubbed on fish, rested 5 min, rinsed — removes any muddy note` },
            ],
        },
        {
            title: `Lemongrass chili salt rub (muoi ot sa)`,
            items: [
                { amount: 2, unit: 'tsp', name: `coarse sea salt` },
                { amount: 1, unit: 'tsp', name: `chili powder (bot ot do)` },
                { amount: 2, name: `lemongrass stalks, inner white part only, minced to fine paste` },
                { amount: 2, name: `garlic cloves, minced to paste` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `binds the rub and helps it adhere to the skin` },
            ],
        },
        {
            title: `Stuffing (inside the cavity)`,
            items: [
                { amount: 3, name: `lemongrass stalks, bruised` },
                { amount: 4, name: `kaffir lime leaves, torn` },
                { amount: 3, name: `slices fresh galangal` },
                { amount: 3, name: `garlic cloves, smashed` },
            ],
        },
        {
            title: `Salt-lime-pepper dipping sauce (muoi tieu chanh)`,
            items: [
                { amount: 2, unit: 'tsp', name: `coarse salt` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, unit: 'tbsp', name: `fresh lime juice` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `Highland herb plate`,
            items: [
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 1, name: `bunch perilla (tia to)` },
                { amount: 150, unit: 'g', name: `Đà Lạt lettuce (xa lach Da Lat)`, note: `butter lettuce grown at altitude — sweeter and more tender than lowland varieties` },
                { amount: 1, name: `cucumber, sliced into batons` },
                { amount: 2, name: `limes, wedged` },
                { amount: 10, name: `sheets rice paper (banh trang)`, note: `for wrapping` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the sturgeon`,
            description: `If the fishmonger has not removed the scutes: run a heavy knife blade under each bony plate from tail to head against the direction of growth and lever upward — they snap off cleanly when fresh. Do not attempt to cut them off; they are anchored to cartilage and require the levering motion. Leave the skin intact after scute removal. Rub the entire fish with rice wine, rest 5 minutes, then rinse thoroughly. Pat completely dry inside and out. Make 3-4 diagonal score cuts through the skin on each side of the fish, cutting 5mm deep into the flesh — this allows the rub to penetrate and prevents the skin from contracting and curling during grilling.`,
            tip: `Sturgeon has a cartilaginous skeleton rather than true bone — there is a central cartilage rod (notochord) running the length of the body instead of a spine with ribs. This means the flesh is easier to portion after grilling than bony fish, and there are no small pin bones to worry about. The cartilage itself can be eaten — it softens during cooking and has a gelatinous, slightly fatty texture that is prized in Đà Lạt as the most flavourful part of the fish.`,
        },
        {
            title: `Make the lemongrass chili salt rub`,
            description: `Combine minced lemongrass paste, minced garlic, coarse salt, chili powder, sugar, and neutral oil in a small bowl. Mix thoroughly — the oil binds everything into a paste that adheres to the skin. The rub should smell intensely of lemongrass with a background of chili. Rub generously over the entire exterior of the fish, working the paste into the score cuts and into any crevices. Stuff the cavity loosely with bruised lemongrass, kaffir lime leaves, galangal slices, and smashed garlic. Rest the rubbed fish at room temperature for 20 minutes before grilling.`,
            tip: `The lemongrass must be minced to a paste, not roughly chopped — fibrous chunks of lemongrass burn black on the grill before the fish is cooked through and produce a bitter charred note. Use the flat of a knife to crush the minced lemongrass into a smooth paste after chopping. The inner white portion only — the outer green layers are too fibrous and do not release flavour during the grill time.`,
        },
        {
            title: `Make the dipping sauce`,
            description: `Combine coarse salt and coarsely ground black pepper in a small bowl. Add fresh lime juice — the mixture will fizz slightly. Add sliced chili. Stir once. The muối tiêu chanh should be sharp, salty, and intensely aromatic with fresh pepper. It is calibrated against the rich fat of sturgeon flesh — the salt and acid cut through the richness while the pepper adds heat that complements the lemongrass in the rub. Make immediately before serving; the lime juice loses brightness within 30 minutes.`,
        },
        {
            title: `Grill over charcoal — two-zone method`,
            description: `Prepare a two-zone charcoal fire: hot coals on one side, no coals on the other. For a 1.2 kg whole fish: begin on the indirect side, covered or tented with foil, for 20 minutes. This indirect heat cooks the thick body through without burning the lemongrass rub. After 20 minutes, move to the hot side directly over coals. Grill 5-6 minutes per side, turning once, until the skin is deeply charred in the score lines and blistered elsewhere. The lemongrass rub will caramelise to a dark golden-brown — this is correct. The fat beneath the skin will be visibly rendered. Test doneness by pressing the thickest part of the body — it should feel firm and spring back.`,
            tip: `Sturgeon fat renders at a lower temperature than most fish because it contains a higher proportion of unsaturated fatty acids — the same fats that make sturgeon meat so moist. This means the indirect cooking phase is more important for sturgeon than for leaner fish: it renders the fat slowly and bastes the flesh from inside before the high-heat charring phase. Skipping the indirect phase and grilling directly over coals produces a fish with charred exterior and undercooked, fatty interior.`,
        },
        {
            title: `Rest and serve whole`,
            description: `Remove from grill and rest on a wooden board for 5 minutes. Do not cover — the skin crisps further as steam escapes. Bring to the table whole, on the board. In Đà Lạt restaurants, the sturgeon is served on a raised grill stand with a small flame underneath to keep it warm — at 1,500m altitude, food cools within minutes. At home, serve the board on a trivet over a candle warmer if available. Provide each person with a small bowl of muối tiêu chanh and access to the highland herb plate.`,
        },
        {
            title: `Portion and eat`,
            description: `Use two forks or a serving spoon to lift portions of flesh from the skin. The skin, now crispy and charred, can be eaten separately — it is considered the prize by Đà Lạt locals, with the caramelised lemongrass rub concentrated on its surface. The cartilage running through the centre of the fish is gelatinous and rich — scoop it with a spoon. Wrap pieces of fish in rice paper or lettuce with highland herbs and dip in muối tiêu chanh. The combination — smoky charred fish, clean lime-salt-pepper, sweet highland lettuce, aromatic rau răm — is the complete flavour arc. Eat with cold Đà Lạt strawberry beer if available, or cold lager.`,
            tip: `The correct Đà Lạt eating sequence for cá tầm nướng: first the crispy skin with a pinch of muối tiêu chanh (eaten alone — no wrapping), then the flesh wrapped in lettuce with rau răm and lime, then the cartilage eaten with a small spoon directly. The cartilage is eaten last because its gelatinous richness is the fullest flavour and functions as the meal's finish rather than its opening.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}