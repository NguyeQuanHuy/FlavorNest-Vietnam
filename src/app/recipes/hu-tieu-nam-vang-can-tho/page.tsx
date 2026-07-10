'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'hu-tieu-nam-vang-can-tho',
    title: `Cần Thơ Nam Vang Noodle Soup`,
    subtitle: `Hủ Tiếu Nam Vang Cần Thơ — The Mekong Delta's dry-style Phnom Penh noodles with xíu mại, shrimp, and pork — a Teochew-Cambodian-Vietnamese fusion eaten for breakfast.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Hủ tiếu Nam Vang (Phnom Penh noodles — Nam Vang is the Vietnamese name for Phnom Penh) is one of the most fascinating dishes in the Mekong Delta food canon — a noodle preparation that traces its origin to the Teochew Chinese immigrant communities of Cambodia who brought their noodle traditions to Phnom Penh and then, as those communities moved between Cambodia and the Vietnamese delta throughout the twentieth century, the dish crossed the border and became naturalised in the Mekong Delta cities of Cần Thơ, Mỹ Tho, and Sóc Trăng.\n\nThe Cần Thơ version is served khô (dry) — the noodles are drained and placed in the bowl without broth, then dressed with a mixture of lard, fish sauce, and dark soy sauce, and topped with the classic combination of xíu mại (steamed pork meatballs in tomato sauce), fresh shrimp, sliced pork, pork liver, and crispy fried garlic. A separate bowl of clear, sweet pork bone broth is served alongside for sipping between bites — the two vessels constitute a single meal. The dry noodle absorbs the lard-fish sauce dressing and the toppings' juices; the broth cleanses and refreshes between mouthfuls.\n\nXíu mại (烧卖 in Cantonese, but the Vietnamese version is closer to the Teochew preparation) are the pork meatballs in slightly sweet tomato sauce that are the signature protein of hủ tiếu Nam Vang — found nowhere else in Vietnamese noodle cooking, their presence immediately identifies the dish's Teochew-Cambodian heritage. They are made from seasoned pork mince, rolled into balls, steamed, and then simmered briefly in a tomato-based sauce sweetened with rock sugar.`,
    ingredientSections: [
        {
            title: `Xíu mại (Teochew pork meatballs)`,
            items: [
                { amount: 300, unit: 'g', name: `pork mince (thit heo xay)`, note: `70% lean, 30% fat` },
                { amount: 30, unit: 'g', name: `water chestnuts (cu nang)`, note: `minced fine — adds crunch` },
                { amount: 2, name: `shallots, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tbsp', name: `oyster sauce` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `sesame oil` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tbsp', name: `tapioca starch (bot nang)`, note: `binder` },
            ],
        },
        {
            title: `Xíu mại tomato sauce`,
            items: [
                { amount: 200, unit: 'g', name: `fresh tomatoes, blended smooth` },
                { amount: 1, unit: 'tbsp', name: `tomato paste` },
                { amount: 15, unit: 'g', name: `rock sugar` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
                { amount: 2, name: `garlic cloves, minced` },
            ],
        },
        {
            title: `Clear pork bone broth`,
            items: [
                { amount: 500, unit: 'g', name: `pork bones (xuong heo)`, note: `blanched and rinsed` },
                { amount: 50, unit: 'g', name: `dried squid (muc kho)`, note: `the Nam Vang broth secret — adds marine sweetness` },
                { amount: 2, name: `shallots, charred` },
                { amount: 20, unit: 'g', name: `rock sugar` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 1.5, unit: 'L', name: `water` },
            ],
        },
        {
            title: `Dry noodle dressing`,
            items: [
                { amount: 2, unit: 'tbsp', name: `pork lard (mo lon)`, note: `or neutral oil — the lard is the authentic flavour` },
                { amount: 1, unit: 'tbsp', name: `dark soy sauce (xi dau den)` },
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
            ],
        },
        {
            title: `Additional toppings`,
            items: [
                { amount: 200, unit: 'g', name: `fresh medium shrimp (tom)`, note: `boiled 2 min, peeled` },
                { amount: 100, unit: 'g', name: `pork liver (gan heo)`, note: `sliced 4mm, blanched 90 sec` },
                { amount: 150, unit: 'g', name: `sliced boiled pork (thit heo luoc)` },
                { amount: 4, unit: 'tbsp', name: `crispy fried garlic (toi phi)`, note: `the Nam Vang signature garnish` },
                { amount: 3, name: `spring onions, sliced` },
                { amount: 3, unit: 'tbsp', name: `fried shallots` },
            ],
        },
        {
            title: `Noodles`,
            items: [
                { amount: 400, unit: 'g', name: `hu tieu kho (dried flat rice noodles)`, note: `soaked 20 min, blanched 30 sec — the specific hủ tiếu noodle, wider and flatter than bún` },
            ],
        },
        {
            title: `Table condiments`,
            items: [
                { amount: 1, name: `bunch bean sprouts, raw` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
                { amount: 1, unit: 'bottle', name: `tuong den (hoisin sauce)`, note: `for dipping pork and liver` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the xíu mại meatballs`,
            description: `Combine pork mince, minced water chestnuts, shallots, garlic, fish sauce, oyster sauce, sugar, sesame oil, pepper, and tapioca starch. Mix by hand for 3-4 minutes — throwing the mixture against the bowl to develop binding. Refrigerate 20 minutes. Roll into balls of approximately 25g each — slightly smaller than a golf ball. The tapioca starch is the binding agent that keeps the meatballs intact during steaming; without it, the meatballs crack and crumble. Steam over vigorously boiling water for 12-15 minutes until cooked through. Cool slightly.`,
            tip: `Water chestnuts in xíu mại are the Teochew technique that distinguishes authentic hủ tiếu Nam Vang meatballs from generic Vietnamese meatballs. The water chestnut's high water content and firm cell structure maintains crunch even after steaming — each bite into a xíu mại should yield the pork's soft exterior and then a sudden crunch from the embedded water chestnut piece. This textural surprise is the hallmark of correct xíu mại and is absent in imitations that omit the water chestnut.`,
        },
        {
            title: `Make the xíu mại tomato sauce`,
            description: `Heat oil in a pan over medium heat. Sauté minced garlic until golden. Add blended fresh tomato and tomato paste. Simmer 5 minutes until slightly reduced. Add rock sugar and fish sauce. Stir until sugar dissolves. Add steamed xíu mại meatballs to the sauce. Simmer together 5-8 minutes until the sauce has reduced to a glossy coating around each ball. The sauce should be slightly sweet, mildly sour from the tomato, and deeply savoury from the fish sauce — the sweetness is the key Teochew characteristic that marks this as Nam Vang xíu mại versus other Vietnamese meatball preparations.`,
        },
        {
            title: `Build the clear pork-dried squid broth`,
            description: `Blanch pork bones 5 minutes, rinse. Toast dried squid briefly over a flame or in a dry pan until fragrant — 30 seconds. Combine bones, toasted dried squid, charred shallots, and 1.5L water. Bring to a boil, skim foam thoroughly 10 minutes. Reduce to a low simmer 60 minutes. The dried squid is the Nam Vang broth secret — it adds a marine sweetness and depth that plain pork broth lacks, reflecting the Cambodian coastal ingredient influence on the dish's Teochew origins. Season with rock sugar, fish sauce, and salt. The broth should be crystal clear, golden, and taste simultaneously of pork richness and sweet marine depth.`,
            tip: `The dried squid in the broth is the single ingredient that most clearly marks hủ tiếu Nam Vang as distinct from all other Vietnamese noodle broths. No other Vietnamese noodle soup uses dried squid as a primary broth ingredient — it is a specifically Teochew-Cambodian technique that crossed the border with the dish. When the broth is correct, the marine sweetness is clearly present but not identifiable as "squid" — it reads as an unusual, pleasant depth to the pork broth. First-time eaters almost never guess the ingredient.`,
        },
        {
            title: `Make the dry noodle dressing`,
            description: `Combine pork lard, dark soy sauce, fish sauce, sugar, and sesame oil in a small bowl. Stir until sugar dissolves. This dressing is what makes hủ tiếu Nam Vang khô different from simply undressed noodles — the lard coats every noodle strand and carries the dark soy's colour and the sesame's fragrance throughout the bowl. The dressing should be applied to hot, freshly blanched noodles immediately — cold noodles do not absorb the lard effectively and the dressing pools at the bottom of the bowl rather than coating the noodles.`,
        },
        {
            title: `Assemble the dry bowl`,
            description: `Blanch hủ tiếu noodles 30 seconds in boiling water. Drain completely — shake the strainer to remove excess water. Transfer immediately to a bowl. Pour the noodle dressing over the hot noodles and toss with chopsticks until every strand is coated — the noodles should be glossy and slightly dark from the soy sauce. Arrange toppings: xíu mại meatballs in tomato sauce on one side, shrimp, sliced pork, and liver on the other. Scatter fried garlic generously — more than seems appropriate. Add spring onion and fried shallots. Serve the clear broth in a separate bowl alongside.`,
            tip: `Fried garlic (tỏi phi) is the garnish that most identifies hủ tiếu Nam Vang at a glance — no other Vietnamese noodle dish uses it in this quantity. The golden, crispy garlic slivers scattered across the bowl surface are simultaneously aromatic, textural, and visual. The garlic flavour infuses the lard dressing as the meal progresses, deepening with each bite. In Cần Thơ, the quality of a hủ tiếu Nam Vang stall is judged partly by the quality of its tỏi phi — it must be evenly golden, not pale or burnt, with a clean garlic sweetness rather than bitterness.`,
        },
        {
            title: `Eat the two-vessel way`,
            description: `Hủ tiếu Nam Vang khô is eaten from two vessels simultaneously: a few chopstick-loads of dressed noodles and toppings from the bowl, then a sip of clear broth from the cup to cleanse the palate. The rhythm alternates continuously — dry noodle bite, clear broth sip, dry noodle bite, clear broth sip — throughout the meal. Raw bean sprouts and rau răm are added to the noodle bowl progressively as it is eaten. Dip pork and liver in hoisin sauce. Squeeze lime into both vessels. The two-vessel eating ritual is the most distinctive aspect of this dish and the element that first-time eaters must be told about — without it, the broth is an afterthought rather than an essential component.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}