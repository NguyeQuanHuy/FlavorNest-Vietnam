'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-atiso-ga-da-lat',
    title: `Đà Lạt Artichoke and Chicken Soup`,
    subtitle: `Canh Atiso Gà Đà Lạt — Fresh artichoke simmered with free-range chicken in a clear broth — the highland city's most celebrated tonic soup, sweet from the artichoke's cynarin.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Canh atiso gà is the soup that Đà Lạt has made its own — a preparation built around the fresh globe artichoke (Cynara scolymus) grown in the city's cool highland climate, which produces a vegetable of a specific quality and sweetness found nowhere else in Vietnam. Đà Lạt, at 1,500 metres elevation in the Central Highlands, was developed by the French colonial administration as a highland retreat and research station beginning in 1897, and the French brought with them the vegetables of their home gardens — including the artichoke, which found in Đà Lạt's cool, misty climate conditions almost identical to the Brittany and Provence hillsides where it grows best in France. The artichoke has been cultivated in Đà Lạt for over a century and is now so deeply associated with the city that it appears on Đà Lạt's tourism materials and local products as a symbol of the city.\n\nThe fresh Đà Lạt artichoke, cooked in clear chicken broth, produces a soup of remarkable and specific flavour: the broth turns a pale golden-green and tastes simultaneously of the chicken's savoury depth and a sweet, slightly mineral quality that is entirely the artichoke's contribution. This sweetness is produced by cynarin (1,3-dicaffeoylquinic acid) — a phenolic compound unique to artichokes that temporarily blocks the sweet taste receptors on the tongue and then, when the artichoke is swallowed and the cynarin is removed, causes a rebound sweetness perception as the receptors recover. Water drunk after eating artichoke tastes sweet for the same reason — the cynarin effect is responsible for the artichoke's famous ability to make everything consumed after it taste sweeter.\n\nThe chicken used is gà ta — Vietnamese free-range chicken — whose firm flesh and collagen-rich bones produce a broth with natural body during the 60-90 minute simmer. The artichoke is added in stages: the trimmed whole artichoke or halved artichoke for the long simmer (which extracts the cynarin and the vegetable's water-soluble flavour compounds into the broth), and the artichoke hearts for the final 20 minutes (which retain their texture and are eaten as the vegetable component of the finished soup).`,
    ingredientSections: [
        {
            title: `Chicken`,
            items: [
                { amount: 1.2, unit: 'kg', name: `whole free-range chicken (ga ta)`, note: `cut into large pieces — thighs, drumsticks, breast; or use a whole chicken and carve at serving` },
                { amount: 1, unit: 'tbsp', name: `rice wine (ruou gao)` },
                { amount: 1, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Fresh artichokes`,
            items: [
                { amount: 3, name: `large fresh globe artichokes (atiso tuoi)`, note: `Đà Lạt variety preferred; substitute: standard globe artichokes from German supermarkets (Artischocken) — same botanical species, similar flavour` },
                { amount: 1, name: `lemon, halved`, note: `acidulated water prevents artichoke oxidation` },
                { amount: 2, unit: 'L', name: `cold water`, note: `acidulated with lemon juice — for holding trimmed artichokes` },
            ],
        },
        {
            title: `Broth aromatics`,
            items: [
                { amount: 3, name: `shallots, halved and charred` },
                { amount: 3, name: `slices fresh ginger` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 20, unit: 'g', name: `rock sugar (duong phen)`, note: `very small amount — the artichoke provides its own sweetness` },
                { amount: 1.5, unit: 'L', name: `cold water` },
            ],
        },
        {
            title: `Optional tonic additions`,
            items: [
                { amount: 5, name: `dried red dates (tao do)`, note: `complements the artichoke sweetness` },
                { amount: 1, unit: 'tbsp', name: `goji berries (ky tu)`, note: `added in last 20 minutes` },
                { amount: 3, name: `slices dried astragalus root (hoang ky)`, note: `the Đà Lạt tonic soup tradition` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 1, name: `bunch cilantro (rau mui)` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
            ],
        },
    ],
    steps: [
        {
            title: `Trim the artichokes — handling prevents oxidation`,
            description: `Fill a large bowl with cold water and squeeze in the lemon juice. Trim artichokes one at a time: snap off the tough outer leaves until you reach the pale yellow-green inner leaves. Cut off the top third of the artichoke with a sharp knife. Trim the stem to 3-4cm and peel it — the stem is the same botanical tissue as the heart and equally edible. Cut the trimmed artichoke in half lengthwise. Using a spoon, scoop out the fibrous choke (the fuzzy centre) from each half. Drop immediately into the lemon water — artichokes oxidise within seconds when their flesh contacts air, turning an unappetising brown-grey. The lemon's ascorbic acid prevents the enzymatic oxidation by competing with the polyphenol oxidase enzymes responsible for browning.`,
            tip: `The artichoke oxidation reaction is identical to the browning of cut apples and avocados — all three are driven by polyphenol oxidase enzymes acting on chlorogenic acid and other phenolic compounds in the flesh when exposed to oxygen. The cynarin compound that gives artichokes their specific sweet-bitter flavour is itself a chlorogenic acid derivative — the same compound family responsible for the browning. This is why artichokes brown faster than most vegetables: the cynarin and related compounds are the browning substrate. Lemon juice (ascorbic acid) inhibits the enzyme; acidulated water maintains this inhibition during the trimming process.`,
        },
        {
            title: `Prepare the chicken broth`,
            description: `Rub chicken pieces with salt and rice wine. Rest 10 minutes, rinse, and blanch in boiling water 5 minutes. Rinse each piece. Combine blanched chicken with charred shallots, ginger slices, red dates (if using), astragalus (if using), and 1.5L cold water. Bring to a boil, skim foam 10 minutes. Reduce to a low simmer. Cook 30 minutes until the chicken is beginning to become tender and the broth has developed colour and body. Season lightly with fish sauce, salt, and a very small amount of rock sugar — the artichoke will add significant sweetness and the seasoning must be calibrated to accommodate this.`,
        },
        {
            title: `Add artichokes for the long extraction`,
            description: `After 30 minutes of simmering the chicken, add 2 of the trimmed artichoke halves (4 halves total from 2 artichokes) directly to the simmering broth. These artichokes will cook for 60-70 minutes — their purpose is flavour extraction rather than serving as the eaten vegetable. During this long simmer, the cynarin and other water-soluble compounds from these artichokes dissolve into the broth, turning it a pale golden-green and producing the characteristic sweetness. The artichoke flesh will become very soft and slightly falling apart — this is correct. They will be removed before serving.`,
            tip: `The two-artichoke strategy — one set for long extraction, one set for textural serving — is the Đà Lạt restaurant technique that produces both maximum broth depth and pleasant vegetable texture in the finished bowl. A single long-cooked artichoke produces well-flavoured broth but mushy, visually poor artichoke pieces for eating. A single short-cooked artichoke produces pleasant texture but less deeply flavoured broth. The two-set approach solves both problems simultaneously.`,
        },
        {
            title: `Add the serving artichokes in the final 20 minutes`,
            description: `After 60-70 minutes of total simmering (chicken 90 minutes total, artichoke extraction halves for 60 minutes), remove the long-cooked artichoke halves — squeeze them gently against the side of the pot before discarding to extract maximum flavour. Add the remaining trimmed artichoke halves (from the third artichoke, cut into quarters) and goji berries (if using). These fresh artichoke pieces need only 20 minutes to become tender — they will retain their shape and provide the vegetable component eaten in the bowl. Continue simmering 20 more minutes.`,
        },
        {
            title: `Final taste and the cynarin sweetness check`,
            description: `After the full simmer, taste the broth. The cynarin effect should be clearly present — the broth should taste sweet in a way that exceeds what the small amount of rock sugar could produce, and a sip of plain water immediately after tasting the broth should taste noticeably sweeter than normal. This is the cynarin receptor-blocking and rebound effect confirming the artichoke has fully flavoured the broth. The broth colour should be pale golden-green, slightly more cloudy than a pure chicken broth. Adjust fish sauce for salinity — the artichoke's sweetness means the soup needs slightly more fish sauce than a non-artichoke chicken soup to achieve the correct balance.`,
            tip: `The cynarin taste test is the quality check specific to canh atiso gà that has no equivalent in any other Vietnamese soup. If the water-after-broth test does not produce sweetness, the artichoke has not fully extracted into the broth — continue simmering 15 more minutes and test again. If the water tastes very sweet, the cynarin extraction is complete and further cooking will not improve the broth. The degree of sweetness perceived in the post-broth water test correlates directly with the cynarin concentration in the broth — experienced Đà Lạt cooks use this test instinctively without knowing its biochemical basis.`,
        },
        {
            title: `Serve the highland tonic soup`,
            description: `Ladle the pale golden-green broth into deep bowls. Add chicken pieces and the short-cooked artichoke quarters to each bowl. The artichoke quarters can be eaten by pulling the leaves off one by one, scraping the flesh from the base of each leaf with the teeth in the French manner — or the entire tender piece can be eaten with chopsticks. Scatter spring onion, cilantro, and coarse black pepper. Serve with rice and lime. In Đà Lạt, canh atiso gà is served at the city's market restaurants and at family tables throughout the year — it is the soup that most expresses the city's unique identity as a highland city shaped simultaneously by French colonial botany, Vietnamese culinary tradition, and a cool mountain climate that makes warming, nutritious soups the natural food of the place.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}