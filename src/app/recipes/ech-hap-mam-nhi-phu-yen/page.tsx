'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ech-hap-mam-nhi-phu-yen',
    title: '?ch H?p M?m Nhi Phú Yên (Phú Yên Steamed Frog with Premium Fish Sauce)',
    subtitle: 'Whole frog or frog sections steamed over beer, lemongrass, and ginger using the exact technique the province applies to its finest crabs and lobsters — served with the m?m nhi and microplane-grated ginger dipping sauce that is Phú Yên\'s answer to every premium steamed protein.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ech-hap-mam-nhi-phu-yen.jpg',
    intro: `?ch h?p m?m nhi Phú Yên is the steamed frog preparation that completes the province's project of applying its coastal steaming philosophy to every significant protein in its repertoire. The beer-lemongrass steaming technique that Phú Yên uses for cua hu?nh d?, gh?, tôm hùm, b? câu, and ?c vú is here applied to ?ch — the paddy frog — in a direct statement that the province does not differentiate between its seafood and its land proteins when it comes to the treatment that most respects the quality of the ingredient. The logic is consistent: steaming over beer and lemongrass preserves the natural sweetness and delicacy of any high-quality protein better than frying or braising; the m?m nhi ginger dipping sauce provides the aromatic complexity that the simple steaming omits; and the sesame crackers and raw lá é leaves complete the eating experience in the way that every premium Phú Yên protein is finished. Steamed frog in this preparation is quieter than the other Phú Yên frog preparations in the series — quieter than the nu?ng m?i's charcoal intensity, quieter than the tái's lime brightness, quieter than the kho's concentrated caramel, quieter than the xào mang r?ng's bamboo earthiness. It is the preparation that most clearly answers the question of what good Phú Yên paddy frog tastes like when cooked with minimum intervention. The answer, for anyone who has not eaten frog this way: white, slightly sweet, delicate in the specific way that lean freshwater protein is delicate — more delicate than chicken, less assertive than seafood, carrying the specific character of the highland rice field water in the same way that Phú Yên's marine snails carry the character of the reef water where they lived.`,
    ingredientSections: [
        {
            title: 'Frog',
            items: [
                { amount: 700, unit: 'g', name: 'whole cleaned frogs or frog sections (?ch)', note: 'skin removed, cleaned. Whole frogs: leave body intact for presentation. Sections: chop into 5-6cm bone-in pieces.' },
                { amount: 1, unit: 'tsp', name: 'coarse salt', note: 'rubbed over the surface before steaming — the only pre-seasoning' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'inside the body cavity if using whole frogs' },
                { amount: 1, name: 'lemongrass stalk', note: 'bruised and placed inside the body cavity — internal aromatic' },
            ],
        },
        {
            title: 'Beer-lemongrass steaming bath',
            items: [
                { amount: 330, unit: 'ml', name: 'Vietnamese beer (Saigon or 333)', note: 'one can — the Phú Yên coastal steaming medium applied inland' },
                { amount: 200, unit: 'ml', name: 'water' },
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and cut — four stalks for the steam' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 4, name: 'kaffir lime leaves', note: 'torn' },
                { amount: 3, name: 'shallots', note: 'halved — adds a slight sweetness to the steam specific to frog' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'M?m nhi ginger dipping sauce',
            items: [
                { amount: 4, unit: 'tbsp', name: 'm?m nhi (Phú Yên first-press fish sauce)', note: 'the condiment that has appeared alongside every premium Phú Yên steamed protein in this series' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'microplane-grated to near-liquid paste — the technique from gh? h?p and b? câu h?p' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'warm water' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced — optional' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'for eating raw alongside — completing the Phú Yên steamed protein ritual' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 4, name: 'kaffir lime leaves, extra', note: 'finely shredded — scattered over the finished frog' },
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 2, name: 'extra limes' },
            ],
        },
    ],
    steps: [
        {
            title: 'Season and prepare the frog',
            description: 'Salt the cleaned frog lightly over every external surface. If using whole frogs: stuff a bruised lemongrass stalk and a pinch of white pepper inside each body cavity. If using sections: season each piece on all surfaces. The pre-seasoning is deliberately minimal — the m?m nhi ginger sauce provides all the assertive seasoning; the steaming preserves the frog\'s own delicate character.',
            tip: 'The internal lemongrass in whole frog — placed inside the body cavity — perfumes the interior flesh from within while the beer-lemongrass steam perfumes it from outside. Together they produce a frog that carries lemongrass fragrance throughout the flesh rather than only on the surface.',
        },
        {
            title: 'Build the beer-lemongrass steaming bath with shallots',
            description: 'Combine beer, water, bruised lemongrass, smashed ginger, torn kaffir lime leaves, halved shallots, and salt in the steamer base. The addition of shallots to the steaming bath for frog — not used for crustaceans in the Phú Yên series — provides a gentle sweetness that complements the sweetness already in frog flesh. Bring to a vigorous, full rolling boil before adding the frog.',
            tip: 'The shallots in the steaming bath for ?ch h?p is the one adaptation that distinguishes this from the standard Phú Yên seafood h?p preparation. Frog benefits from a slightly sweeter steam environment than crab or snail — the shallots provide this without adding any heaviness.',
        },
        {
            title: 'Steam for 10-12 minutes',
            description: 'Place the frog on the steaming rack belly-side up if using whole frogs, or in a single layer if using sections. Cover tightly. Steam over maximum heat: small frogs or sections — 10 minutes. Larger frogs — 12 minutes. The frog is done when all flesh is completely white and opaque, with no translucency at the thickest point, and the flesh yields with light pressure without feeling hard. Remove immediately.',
            tip: 'The 10-12 minute steam for frog falls between the shorter time for small snails (6-8 minutes) and the longer time for pigeon (20-22 minutes) — reflecting frog\'s intermediate density. Check at 10 minutes: if any translucency remains at the joint between leg and body, steam 2 more minutes exactly.',
        },
        {
            title: 'Make the m?m nhi ginger sauce',
            description: 'Grate fresh ginger on the finest available grater until near-liquid. Combine with m?m nhi, fresh lime juice, sugar, warm water, and optional chili. The m?m nhi ginger sauce for ?ch h?p should have slightly more ginger than the version used for crustaceans — frog\'s delicate sweetness responds to more assertive ginger than the bolder flavors of crab or lobster require.',
            tip: 'This is the m?m nhi ginger sauce in its most complete application in the Phú Yên series — the same sauce that appeared alongside gh? h?p, tôm hùm, cua hu?nh d?, b? câu, and every steamed protein the province considers worthy of its finest condiment. With ?ch, the sauce demonstrates its versatility most completely: it works equally against the intense sweetness of lobster and the delicate sweetness of paddy frog.',
        },
        {
            title: 'Plate and scatter the aromatics',
            description: 'Transfer the steamed frog to a serving plate. Scatter shredded kaffir lime leaves, sliced spring onion, and rau ram. Serve with the m?m nhi ginger sauce in individual small bowls, sesame crackers, and a generous pile of fresh lá é leaves alongside.',
            tip: 'Reserve the steaming liquid from the base — it is now a fragrant broth of beer, lemongrass, shallots, and frog drippings. Strain, season lightly with fish sauce, and serve in small cups alongside the meal as a between-bite palate cleanser. The same instruction applies here as for every steamed preparation in the Phú Yên series: nothing from h?p should be wasted.',
        },
        {
            title: 'Eat — and complete the Phú Yên steamed protein series',
            description: 'The eating ritual: pull a piece of frog from the steaming plate, place on a sesame cracker with a raw lá é leaf placed under the meat, dip the edge in lime-squeezed m?m nhi ginger sauce, eat in one bite. Drink the steaming broth between pieces. This is the same ritual as for gh? h?p, for b? câu h?p, for ?c vú h?p. The same cracker. The same leaf. The same sauce. The same broth between bites. Phú Yên applies its rituals consistently. The protein changes; the ritual does not.',
            tip: 'Eating ?ch h?p m?m nhi after having eaten the other Phú Yên steamed preparations in this series — the crabs, the lobster, the pigeon, the snails — is understanding something about the province that cannot be stated directly: a place that uses the same careful steaming technique and the same condiment for its most expensive crustacean and its most abundant paddy frog is a place that respects all its ingredients equally. That respect is the underlying philosophy of Phú Yên cooking.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
