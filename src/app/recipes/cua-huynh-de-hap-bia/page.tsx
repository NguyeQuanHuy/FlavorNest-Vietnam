'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cua-huynh-de-hap-bia',
    title: 'Cua Huỳnh Đế Hấp Bia (Phú Yên Slipper Lobster Steamed with Beer)',
    subtitle: 'The rarest seafood of Phú Yên — cua huỳnh đế, the royal slipper lobster found only in the deep waters off the central Vietnamese coast — steamed over Vietnamese beer with lemongrass and ginger, served with the muối lá é that is its only worthy accompaniment.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/cua-huynh-de-hap-bia.jpg',
    intro: `Cua huỳnh đế is the Vietnamese name for Thenus orientalis — the slipper lobster, also called the Balmain bug in Australia and the moreton bay bug in Queensland — a crustacean that looks like a flattened lobster, has two broad antennae instead of the spiny projections of a true lobster, and is found in the deeper waters off the central Vietnamese coast from Phú Yên south to Bình Thuận. The name huỳnh đế means emperor — a name that reflects the historical prestige of this crustacean and its reputation as the finest eating seafood of the central Vietnamese deep sea. Cua huỳnh đế commands the highest price at the Phú Yên fish market precisely because the flesh — concentrated in the broad tail, with smaller amounts in the head section — is unlike any other crustacean: sweet and dense like lobster tail, with a specific mineral-ocean depth that deep-water crustaceans develop and shallow-water species do not. The correct preparation for cua huỳnh đế is the simplest one: steaming over beer and lemongrass for exactly 8-10 minutes, which cooks the flesh through without robbing it of the moisture that makes it extraordinary. Any sauce applied during or after cooking competes with the flavor of the flesh — the only accompaniment worth serving is muối lá é, the pounded litsea leaf salt of Phú Yên, which provides the aromatic counterpoint that completes the experience without obscuring it. Cua huỳnh đế hấp bia is a seasonal dish, available in Phú Yên markets from around April to August when the deep-sea fishing boats bring in their catches, and it is a dish to be made when you find a good source rather than planned weeks in advance.`,
    ingredientSections: [
        {
            title: 'Slipper lobster',
            items: [
                { amount: 800, unit: 'g', name: 'fresh slipper lobster (cua huỳnh đế / Thenus orientalis)', note: 'live or very recently caught — 2-4 pieces depending on size. Available at Vietnamese specialty seafood markets. Substitute: Balmain bugs or Moreton Bay bugs (same species) from Australian fish markets, or scampi tails as a last resort.' },
            ],
        },
        {
            title: 'Beer steaming bath',
            items: [
                { amount: 330, unit: 'ml', name: 'Vietnamese beer (Saigon or 333)', note: 'one can — the specific beer of the central coast' },
                { amount: 250, unit: 'ml', name: 'water' },
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and cut — essential aromatic for cua huỳnh đế specifically' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 4, name: 'kaffir lime leaves', note: 'torn' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Muối lá é (the only accompaniment worth serving)',
            items: [
                { amount: 25, unit: 'g', name: 'fresh lá é leaves (litsea cubeba)', note: 'the Phú Yên herb that appears alongside every premium seafood in the province. Substitute: 8 kaffir lime leaves + 8 rau răm leaves — different but the closest approximation.' },
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'freshly ground black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 3, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 6, name: 'kaffir lime leaves, extra', note: 'finely shredded — scattered over the finished slipper lobster' },
                { amount: 1, name: 'bunch fresh lá é leaves, extra', note: 'for eating raw alongside each piece' },
                { amount: 2, name: 'extra limes' },
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'bowl warm water with lime', note: 'finger bowl' },
            ],
        },
    ],
    steps: [
        {
            title: 'Handle and prepare the slipper lobster',
            description: 'Slipper lobsters are less aggressive than true lobsters but should still be handled with care — place in the freezer for 15 minutes if live. Rinse under cold water. The slipper lobster can be steamed whole — no cleaning required before cooking. The entire animal goes into the steamer shell-side down, flesh-side up if halved, or whole if small. For larger slipper lobsters (over 300g), halve lengthwise with a heavy knife before steaming — this allows the steam to access the flesh more directly and produces more even cooking.',
            tip: 'Slipper lobsters have a much flatter body than true lobsters and fit more easily into a standard steamer. Smaller ones (under 200g) steam whole; larger ones benefit from halving to ensure the center of the thick tail cooks through in the same time as the edges.',
        },
        {
            title: 'Build the aromatic steaming bath',
            description: 'Combine beer, water, bruised lemongrass, smashed ginger, torn kaffir lime leaves, and salt in the steamer base. Bring to a vigorous full boil. The steam must be intensely fragrant before the slipper lobsters go in — this is even more important for cua huỳnh đế than for other crustaceans because the delicate deep-sea flesh absorbs the steaming aromatics more readily than shallow-water species.',
            tip: 'The lemongrass for cua huỳnh đế steaming should be extra-bruised — pound the stalks firmly with the back of a knife before cutting them. The more aromatic oil released into the steaming liquid, the more the steam carries into the delicate flesh.',
        },
        {
            title: 'Steam for exactly 8-10 minutes',
            description: 'Place the slipper lobsters shell-side down (or cut-side up if halved) on the steaming rack. Cover tightly. Steam over maximum heat: small whole slipper lobster (under 200g) — 8 minutes. Halved larger slipper lobster (200-300g per half) — 10 minutes. The flesh is done when it has turned from translucent grey-white to completely opaque white and the shell has brightened from its raw muted color to a vivid orange-red.',
            tip: 'Cua huỳnh đế flesh is more delicate than mud crab and overcooks faster. The flesh should be just set — firm when pressed but not tight or rubbery. Pull at the first sign of complete opaqueness throughout. One minute past correct doneness is noticeable in the texture.',
        },
        {
            title: 'Make the muối lá é',
            description: 'Pound the lá é leaves with coarse salt and black pepper in a mortar for 2 minutes until the leaves are completely broken down and the salt has turned green and smells intensely of the leaf — its characteristic citrus-pepper-wild fragrance should be immediately detectable. Add sugar. Transfer to small individual dipping plates. Squeeze fresh lime directly over the salt at the table — the lime oil released from the skin in the act of squeezing is the final aromatic element.',
            tip: 'For cua huỳnh đế specifically, the muối lá é should be slightly more salt-forward than when used with chicken — the richness of the deep-sea crustacean flesh needs a more assertive salt note to balance it. Add a small extra pinch of salt to the pounded mixture.',
        },
        {
            title: 'Plate with restraint — this ingredient needs nothing',
            description: 'Transfer the steamed slipper lobsters to a plate. Scatter shredded kaffir lime leaves and spring onion over the top — minimally, not the generous piling used for other preparations. Arrange the fresh lá é leaves alongside. Serve the muối lá é in individual small plates with lime wedges. The presentation should be clean and uncluttered — cua huỳnh đế needs no garnish beyond the herbs and the dipping salt.',
            tip: 'The visual restraint of the presentation for cua huỳnh đế is intentional. A cluttered plate distracts from the central reality: you have a rare and extraordinary piece of seafood in front of you. Let it be seen.',
        },
        {
            title: 'How to eat cua huỳnh đế',
            description: 'The tail is the primary eating section: use scissors to cut along both sides of the underside shell, then lift the top shell away — the tail meat comes out in one piece, dense and white. The head section contains less meat but has the most concentrated flavor: break it open and eat what you find inside. Dip each piece in the lime-squeezed muối lá é. Eat a leaf of fresh lá é raw alongside each piece of flesh. The raw leaf against the cooked meat is the Phú Yên way with every premium seafood the province produces.',
            tip: 'The meat inside the head section of cua huỳnh đế — analogous to crab butter — is present in smaller quantity than in true crab but has an even more concentrated flavor. Eat it with the muối lá é without dipping, directly from the shell. This is the part that seafood-knowledgeable diners eat first.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
