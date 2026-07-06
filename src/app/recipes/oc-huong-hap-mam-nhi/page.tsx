'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'oc-huong-hap-mam-nhi',
    title: '?c Huong H?p M?m Nhi Phú Yên (Phú Yên Fragrant Snails Steamed with Premium Fish Sauce)',
    subtitle: 'The sweet fragrant snails of the Phú Yên coast steamed over beer and lemongrass until the shells turn coral-orange and the flesh inside is silky and intensely sweet — served with the m?m nhi and microplane-grated ginger sauce that is the signature dipping preparation of the central coast.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/oc-huong-hap-mam-nhi.jpg',
    intro: `?c huong h?p m?m nhi is the steamed version of Phú Yên's most prized snail — the preparation that stands in deliberate contrast to the rang mu?i ?t version (?c huong rang mu?i ?t, already in the FlavorNest recipe collection) and demonstrates what the same ingredient tastes like when the preparation is restrained rather than assertive. ?c huong — Babylonia areolata, the areola babylon or fragrant snail, named for the subtle fragrance released when the shell is cracked — is the snail that Vietnamese seafood lovers rank as among the finest available on the coast: its flesh is white, dense, and sweet in a way that is more delicate than abalone but more substantial than most other snails. The rang mu?i preparation — deep-frying and tossing in chili-salt — produces ?c huong at its most dramatic and most immediately satisfying. The h?p (steaming) preparation produces ?c huong at its most precise: the flavor of the snail itself, unmediated by deep-frying oil or by the aggressive character of rang mu?i seasoning, with only the beer-lemongrass steam adding a background aromatic layer. The m?m nhi ginger dipping sauce — the Phú Yên premium fish sauce preparation that appears alongside every steamed protein the province considers premium — completes the preparation by providing the aromatic and umami dimension that the deliberately simple steaming omits. ?c huong h?p m?m nhi eaten alongside ?c huong rang mu?i ?t from the same catch demonstrates what the snail is and what preparation can do to it: same ingredient, same starting quality, two completely different eating experiences from two completely different philosophies of cooking.`,
    ingredientSections: [
        {
            title: 'Fragrant snails',
            items: [
                { amount: 1, unit: 'kg', name: 'live ?c huong (fragrant snails / Babylonia areolata)', note: 'alive — the white and brown patterned shell should be clearly visible and the snail active. Available at Vietnamese and Asian specialty seafood markets. These are expensive — handle carefully and cook immediately after purchase.' },
            ],
        },
        {
            title: 'Beer-lemongrass steaming bath',
            items: [
                { amount: 330, unit: 'ml', name: 'Vietnamese beer (Saigon or 333)', note: 'one can' },
                { amount: 250, unit: 'ml', name: 'water' },
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and cut' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 4, name: 'kaffir lime leaves', note: 'torn' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'M?m nhi ginger dipping sauce — Phú Yên signature',
            items: [
                { amount: 4, unit: 'tbsp', name: 'm?m nhi (Phú Yên first-press fish sauce)', note: 'the quality of this sauce is the quality of this dish' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'microplane-grated to near-liquid paste' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'warm water' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced — optional' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 4, name: 'kaffir lime leaves, extra', note: 'finely shredded' },
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'optional — for eating raw alongside' },
                { amount: 2, name: 'extra limes' },
                { amount: 4, name: 'curved snail picks' },
                { amount: 1, name: 'bowl warm water with lime', note: 'finger bowl' },
            ],
        },
    ],
    steps: [
        {
            title: 'Rinse and prepare',
            description: 'Rinse the live ?c huong under cold water. They need only a brief rinse — like turban snails and jumping snails, they live in clean reef water and do not require extended purging. The shell pattern (white with brown checkered markings) should be clearly visible and attractive. Any snail with a cracked shell or that smells strongly should be discarded. ?c huong are expensive — inspect each one before cooking.',
            tip: 'The aroma test for ?c huong freshness: hold a live snail close to the nose — it should smell cleanly of the sea, with a faint sweetness specific to this species. The name huong (fragrant) refers to this specific subtle sweetness detectable in the fresh snail. If the smell is of decay rather than clean sea, discard.',
        },
        {
            title: 'Build the steaming bath and bring to full boil',
            description: 'Combine beer, water, lemongrass, ginger, kaffir lime leaves, and salt in the steamer base. Bring to a vigorous, rolling boil — the steam must be strong and fragrant before the snails go in. For ?c huong specifically, the steam environment is critical: the delicate sweet flavor of the flesh is what this preparation is designed to showcase, and the lemongrass-beer steam is the only aromatic layer applied. It must be present from the first moment of cooking.',
            tip: 'The kaffir lime leaves in the steaming bath for ?c huong are more important than for most other Phú Yên steamed preparations — the citrus note from the kaffir lime leaf specifically complements the sweet flesh character of the fragrant snail in a way that is not necessary for the more robustly flavored crab or lobster preparations.',
        },
        {
            title: 'Steam for exactly 6-8 minutes',
            description: 'Place the ?c huong on the steaming rack. Cover tightly. Steam over maximum heat for 6 minutes for smaller snails (under 4cm shell length), 8 minutes for larger. The snails are done when the operculum can be gently lifted with a pick with light resistance and the flesh visible beneath is completely opaque white. The shell may have brightened slightly from the steam. Do not overcook — ?c huong flesh at the correct doneness is silky and slightly yielding; overcooked ?c huong is rubbery and loses its sweetness.',
            tip: 'The 6-8 minute window for ?c huong is shorter than for turban snails or jumping snails because Babylonia shells are thinner and the flesh is more delicate. The doneness window is also narrower — the difference between perfectly cooked and overcooked ?c huong is about 2 minutes. Check at 6 minutes and pull at the first sign of complete opacity throughout the flesh.',
        },
        {
            title: 'Make the m?m nhi ginger sauce',
            description: 'Grate the fresh ginger on the finest available grater until it reaches a near-liquid consistency. Combine with m?m nhi, fresh lime juice, sugar, and warm water. Stir. Add chili if using. The sauce should arrive in a specific sequence on the palate when tasted: the m?m nhi depth first, then the lime brightness, then the ginger warmth. This sequence is calibrated to arrive after the sweet ?c huong flesh has been experienced — each element of the sauce arriving as the snail flavor recedes.',
            tip: 'M?m nhi with ?c huong is the pairing that most clearly demonstrates why Phú Yên uses this specific fish sauce for its premium steamed seafood. The natural sweetness of the m?m nhi first press echoes and amplifies the sweetness of the ?c huong flesh — the sauce and the snail share a flavor character rather than contrasting with each other.',
        },
        {
            title: 'Extract and assemble the Phú Yên way',
            description: 'Remove the operculum with a pick — set aside. Insert the curved pick following the spiral of the shell. One smooth rotation extracts the snail in a complete piece. The flesh should be white, firm but yielding, with no translucency. Place on a sesame cracker. Add a raw lá é leaf or rau ram leaf. Dip the edge of the assembled cracker into the lime-squeezed m?m nhi sauce. Eat in one bite.',
            tip: 'The comparison between ?c huong h?p and ?c huong rang mu?i eaten from the same batch of snails is the most complete education in what steaming versus frying does to a premium ingredient. The rang mu?i version is louder, more immediately satisfying, and carries the chili-lemongrass character throughout. The h?p version is quieter, more precise, and allows the specific sweetness of the snail itself — the quality that justifies its premium price — to be the primary experience. Both are correct. Neither replaces the other.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
