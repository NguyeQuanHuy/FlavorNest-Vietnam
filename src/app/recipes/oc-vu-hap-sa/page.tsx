'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'oc-vu-hap-sa',
    title: '?c Vú H?p S? Phú Yên (Phú Yên Top Snails Steamed with Lemongrass)',
    subtitle: 'The conical top snails of Phú Yên\'s offshore islands — named for their shape — steamed over lemongrass and beer until the flesh inside is firm and intensely sweet, served with mu?i lá é and the eating technique that requires both lips and a sharp curved pick.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/oc-vu-hap-sa.jpg',
    intro: `?c vú — top snails of the genus Trochus — are the conical, pyramid-shaped marine snails found on rocky reefs and coral outcrops along the central Vietnamese coast and around the offshore islands of Phú Yên, particularly around Hòn Y?n (the island famous for its lobster and its nesting seabirds) and the rocky formations near Mui Ði?n. The name vú (breast) refers to the shape of the shell — a perfect cone with a slightly rounded base, resembling in silhouette the same shape that names many conical objects in Vietnamese. ?c vú are medium-sized snails, 5-8cm across the base, with a shell that is distinctively heavy and dense for its size — the thick conical shell is what allows these snails to survive in the surf zone of exposed rocky coastlines where wave action would dislodge thinner-shelled species. The flesh inside is white, dense, and sweet with the specific clean flavor of a reef snail that has fed on coralline algae rather than mud or detritus. The h?p s? preparation — steaming over lemongrass — is the dominant Phú Yên technique for ?c vú because the thick shell requires the sustained, even heat of steam rather than the direct heat of charcoal, which would char the heavy shell before conducting heat through to the flesh. The lemongrass steam penetrates through the shell opening and perfumes the flesh during the 10-12 minute steaming period. The mu?i lá é served alongside is the Phú Yên condiment that makes this preparation specifically provincial — the same wild citrus-pepper salt that appears throughout the province's cooking, here in its tenth application, providing the aromatic dimension that the simple steaming deliberately omits.`,
    ingredientSections: [
        {
            title: 'Top snails',
            items: [
                { amount: 1.2, unit: 'kg', name: 'live ?c vú (top snails / Trochus spp.)', note: 'alive — conical shape, 5-8cm base diameter. Available at Vietnamese coastal markets and specialty seafood suppliers. Substitute: any live conical marine snail of similar size.' },
            ],
        },
        {
            title: 'Lemongrass steaming bath',
            items: [
                { amount: 330, unit: 'ml', name: 'Vietnamese beer (Saigon or 333)' },
                { amount: 250, unit: 'ml', name: 'water' },
                { amount: 5, name: 'lemongrass stalks', note: 'five stalks for ?c vú — slightly more than usual because the thick shell absorbs lemongrass aroma more slowly' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 4, name: 'kaffir lime leaves', note: 'torn' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Mu?i lá é — tenth application in the Phú Yên series',
            items: [
                { amount: 25, unit: 'g', name: 'fresh lá é leaves (litsea cubeba)' },
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'bird\'s eye chilies' },
                { amount: 3, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 1, name: 'bunch fresh lá é leaves', note: 'for eating raw alongside' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 4, name: 'kaffir lime leaves, extra', note: 'finely shredded — scattered over the finished snails' },
                { amount: 2, name: 'extra limes' },
                { amount: 4, name: 'curved snail picks' },
                { amount: 1, name: 'bowl warm water with lime' },
            ],
        },
    ],
    steps: [
        {
            title: 'Rinse and inspect',
            description: 'Rinse the live ?c vú under cold water. The conical shell should feel heavy and solid. An active snail will retract when touched and seal the opening with its operculum — a flat, circular disc. Inspect the opening of each snail: the flesh should be visible and slightly retracted, not exposed and slack. The shell pattern of Trochus — iridescent green-brown with white markings — should be clean and intact. Discard any with cracked shells or strong odor.',
            tip: 'The weight test for ?c vú freshness: a live, healthy top snail feels noticeably heavy for its size — the dense flesh fills the shell completely. A snail that feels lighter than expected has lost condition or died. In the market, experienced buyers pick up several and compare weights before selecting.',
        },
        {
            title: 'Position for steaming — opening facing down',
            description: 'Place the ?c vú on the steaming rack with their conical point facing up and the shell opening facing down toward the steam source. The conical shape of ?c vú means the shell opening at the base faces downward when the point is up — this is the correct steaming orientation. Steam rises from below, enters the shell opening directly, and travels upward inside the cone to cook the flesh from the open end toward the pointed tip.',
            tip: 'The point-up positioning for ?c vú is specific to this conical shape — it is the only snail in Vietnamese cooking where the shape itself determines the steaming orientation so clearly. The cone is a natural steam funnel: point up means the opening faces the steam source and the flesh receives maximum steam exposure from the first moment of cooking.',
        },
        {
            title: 'Steam with five-stalk lemongrass — 10-12 minutes',
            description: 'Bring the five-stalk lemongrass steaming bath to a vigorous boil. The additional stalk compared to most other preparations is for ?c vú specifically — the thick conical shell absorbs lemongrass aroma more slowly than thinner-shelled species, and five stalks rather than four ensures the flesh inside receives sufficient aromatic exposure during the 10-12 minute steam. Steam over maximum heat: smaller ?c vú (5-6cm) — 10 minutes. Larger (7-8cm) — 12 minutes. Do not open the lid.',
            tip: 'The 10-12 minute steam for ?c vú is longer than for ?c huong (6-8 minutes) and approaching the time for ?c giác (12-15 minutes) — reflecting the thickness of the Trochus shell. The shell conducts heat well but slowly from its substantial mass. Check at 10 minutes: the operculum should lift with light pick pressure.',
        },
        {
            title: 'Test doneness with the operculum',
            description: 'At the correct steaming time, use a curved pick to gently lift the operculum of one snail — it should come free with light pressure, not requiring force. The flesh visible beneath should be completely white and opaque, no translucency. The characteristic iridescent interior of the Trochus shell — mother-of-pearl lining that is visible when the snail is extracted — is more clearly visible after steaming as the flesh has pulled slightly from the shell interior.',
            tip: 'The mother-of-pearl interior of ?c vú shell is the visual confirmation of the species — Trochus are specifically harvested for their shell material in the shell-button industry. This iridescent interior is most visible when the snail is partially extracted, before removal is complete, and it is the visual that makes ?c vú presentations particularly beautiful.',
        },
        {
            title: 'Pound the mu?i lá é',
            description: 'Pound lá é leaves with salt, pepper, sugar, and chilies until completely broken down and intensely green-fragrant. This is the tenth application of mu?i lá é in the Phú Yên series — across jumping snails, fragrant snails, giant baler snails, and now top snails. The condiment is unchanged across all these applications because it does not need to change: the lá é character is compatible with every reef snail the Phú Yên coast produces. Transfer to individual plates. Squeeze lime at the table.',
            tip: 'The consistency of mu?i lá é as the Phú Yên dipping condiment for all reef snails reflects a cooking philosophy: find the condiment that works universally with the local ingredient character and apply it universally. Phú Yên found it in lá é salt. The province does not vary the condiment by species — it varies the cooking method by species while the condiment remains constant.',
        },
        {
            title: 'Extract, assemble, and eat',
            description: 'Scatter shredded kaffir lime leaves and rau ram over the steamed snails. Serve with mu?i lá é, sesame crackers, fresh lá é leaves, and finger bowls. To extract ?c vú: the conical shape means the snail coils toward the tip — insert the curved pick at the opening angle and rotate toward the tip of the cone. One smooth movement extracts the snail in a single spiral piece with the mother-of-pearl shell interior visible behind. Place on a sesame cracker, add a raw lá é leaf, dip in lime-squeezed mu?i lá é, eat in one bite. The clean, sweet reef flavor of the ?c vú, the sesame cracker, and the lá é salt is the complete Phú Yên island eating experience.',
            tip: 'Eating ?c vú at the island restaurants near Hòn Y?n — where the same snails were on the reef that morning — is the experience this recipe attempts to recreate at home. The distance between the reef and the table is the distance between the best version of this dish and the home version. Seek the freshest possible ?c vú and the distance shortens.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
