'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-hap-sa-mam-nhi',
    title: 'M?c H?p S? M?m Nhi Phú Yên (Phú Yên Steamed Squid with Lemongrass and Premium Fish Sauce)',
    subtitle: 'Whole squid steamed over beer and lemongrass for 6-8 minutes until the flesh is silky and barely set — served with the m?m nhi and microplane-grated ginger sauce that Phú Yên uses for every premium steamed protein, from lobster to pigeon to frog. The steaming technique that reveals squid at its most honest.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/muc-hap-sa-mam-nhi.jpg',
    intro: `M?c h?p s? m?m nhi Phú Yên is the steamed squid preparation that completes the province's application of its coastal steaming philosophy to every significant protein in its repertoire. The technique — steaming over beer and lemongrass, serving with m?m nhi ginger dipping sauce, eating with sesame crackers and raw lá é — has now appeared in the FlavorNest Phú Yên series with crab, lobster, mantis shrimp, pigeon, frog, oysters, and top snails. Applied to squid, it produces the most delicate result in the series: squid flesh at the correct steaming doneness is more silky and more transparently itself than any other protein that Phú Yên steams, because the flesh is so lean and so fine-textured that the steam treatment shows every quality of the raw material without the buffer of fat or bone that protects coarser proteins from technique errors. Good squid steamed correctly tastes intensely, cleanly of the sea; mediocre squid steamed correctly tastes of very little. The preparation is therefore the most demanding in its raw material requirements and the most rewarding when the raw material is right — which, along the Phú Yên coast where the squid is pulled from clean, cold-water fishing grounds and arrives at the market the same morning, it routinely is. The steaming time for squid is 6-8 minutes — longer than the 30-second blanch of g?i m?c tuoi because the whole squid tube retains its shape and the steam must penetrate through the entire thickness of the mantle wall to cook the flesh evenly throughout. This 6-8 minute window produces the specific silky-firm texture of correctly steamed whole squid that is specifically different from both the tender chewiness of stir-fried squid and the firmer bite of braised squid kho — a texture that exists only at this cooking method and this time.`,
    ingredientSections: [
        {
            title: 'Squid',
            items: [
                { amount: 600, unit: 'g', name: 'fresh whole squid (m?c tuoi)', note: 'medium size, 12-15cm body length — cleaned but left whole. Score the body tube lightly in crosshatch at 1cm intervals through the outer skin only.' },
                { amount: 1, unit: 'tsp', name: 'coarse salt', note: 'rubbed lightly over the exterior before steaming' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'inside the body cavity' },
                { amount: 1, name: 'lemongrass stalk', note: 'bruised and placed inside each body cavity — internal aromatic' },
                { amount: 1, unit: 'tbsp', name: 'Shaoxing wine', note: 'drizzled over before steaming' },
            ],
        },
        {
            title: 'Beer-lemongrass steaming bath',
            items: [
                { amount: 330, unit: 'ml', name: 'Vietnamese beer (Saigon or 333)' },
                { amount: 200, unit: 'ml', name: 'water' },
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and cut — four stalks, the Phú Yên proportion' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 4, name: 'kaffir lime leaves', note: 'torn' },
                { amount: 3, name: 'shallots', note: 'halved — adds sweetness specific to squid steaming' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'M?m nhi ginger dipping sauce',
            items: [
                { amount: 4, unit: 'tbsp', name: 'm?m nhi (Phú Yên first-press fish sauce)' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'microplane-grated to near-liquid paste' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'warm water' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 1, name: 'bunch fresh lá é leaves' },
                { amount: 1, name: 'bunch rau ram' },
                { amount: 4, name: 'kaffir lime leaves, extra', note: 'finely shredded — scattered over the finished squid' },
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 2, name: 'extra limes' },
                { amount: 2, unit: 'portions', name: 'steamed jasmine rice', note: 'optional alongside crackers' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the squid for steaming',
            description: 'Score the body tube of each squid lightly in crosshatch at 1cm intervals — through the outer skin only, not into the flesh deeply. Rub coarse salt over the exterior. Rub white pepper inside the cavity. Stuff a bruised lemongrass stalk inside each body cavity. Drizzle Shaoxing wine over the squid. The internal lemongrass perfumes the flesh from within as the steam perfumes it from outside — the squid surrounded by aromatic steam on all surfaces and from within simultaneously.',
            tip: 'The internal lemongrass in the squid cavity for steaming is the same technique as the ginger placed inside whole fish and pigeon for steaming — the internal aromatic perfumes the flesh from within while the external steaming bath perfumes it from outside. For squid, the lemongrass specifically complements the marine character of the flesh in a way that ginger alone does not.',
        },
        {
            title: 'Build the steaming bath and bring to full boil',
            description: 'Combine beer, water, four lemongrass stalks, ginger, kaffir lime leaves, shallots, and salt in the steamer base. Bring to a vigorous, full rolling boil before the squid is placed in the steamer. The steam must be strong and intensely aromatic — clearly smelling of lemongrass — before the squid enters. For squid specifically, the steam environment is the only aromatic source beyond the internal lemongrass, so it must be at maximum fragrance from the first moment.',
            tip: 'The shallots in the steaming bath for m?c h?p is the same adaptation as for b? câu h?p m?m nhi and ?ch h?p m?m nhi — added for squid and birds and frogs but not for crustaceans. The shallot sweetness in the steam provides a gentle background note that complements the specific sweetness of these lighter proteins.',
        },
        {
            title: 'Steam for 6-8 minutes exactly',
            description: 'Place the prepared squid on the steaming rack. Cover tightly. Steam at maximum heat for 6 minutes for smaller squid (12-13cm body), 8 minutes for larger (14-15cm). Do not open the lid during steaming. The squid is done when: the body tube has turned completely from translucent grey to opaque white throughout; the light scoring on the exterior has opened slightly; and the flesh yields slightly but firmly when pressed at the thickest point. The tentacles will have curled and also turned white.',
            tip: 'The 6-8 minute steaming window for whole squid is significantly longer than the 30-second blanch for cut squid — the whole mantle wall is 5-7mm thick at the thickest point and requires the full 6-8 minutes for steam to penetrate completely. Check at 6 minutes: if any translucency remains when the body tube is pressed against the light, steam 2 more minutes and check again.',
        },
        {
            title: 'Make the m?m nhi ginger sauce',
            description: 'Grate fresh ginger on the finest available grater until near-liquid. Combine with m?m nhi, fresh lime juice, sugar, warm water, and minced chili. The m?m nhi ginger sauce for steamed squid should have slightly more ginger than the versions used for crustaceans — the more delicate squid flesh benefits from a slightly more assertive ginger note. This is the same sauce used throughout the Phú Yên steamed protein series, calibrated here for squid.',
            tip: 'The m?m nhi ginger sauce applied to every premium Phú Yên steamed protein — crab, lobster, pigeon, frog, snail, oyster, and now squid — demonstrates its universality more completely with each new application. The sauce works because it provides aromatic complexity and umami depth without competing with the specific character of the protein it accompanies. It frames; it never dominates.',
        },
        {
            title: 'Serve and complete the Phú Yên steamed series',
            description: 'Transfer the steamed squid to a serving plate. Scatter shredded kaffir lime leaves and sliced spring onion. Serve with m?m nhi ginger sauce in individual small bowls, sesame crackers, and fresh lá é leaves alongside. Reserve the steaming liquid — strain and serve in small cups alongside as a between-bite broth. To eat: slice the steamed squid body into rings at the table. Place a ring on a sesame cracker with a raw lá é leaf underneath, dip in lime-squeezed m?m nhi sauce. The same Phú Yên assembly for the same Phú Yên condiment, applied here to the province\'s most abundant coastal protein.',
            tip: 'The steaming liquid reserved from m?c h?p s? m?m nhi is, like all the Phú Yên steaming liquids in the series, worth serving as a small alongside broth. Beer, lemongrass, shallot, and the natural drippings from the steamed squid produce a broth that is light, aromatic, and specifically of the coastal kitchen. Nothing from Phú Yên h?p preparations should be discarded.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
