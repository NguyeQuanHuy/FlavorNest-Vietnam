'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'oc-giac-hap-sa',
    title: 'Ốc Giác Hấp Sả (Turban Snails Steamed with Lemongrass)',
    subtitle: 'Large turban snails from the rocky coastal waters of central Vietnam steamed over lemongrass, ginger, and beer until the shells turn iridescent and the flesh inside is firm, sweet, and slightly briny — eaten with the curved Vietnamese snail pick and muối tiêu chanh, the most honest preparation for the finest marine snail in the country.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/oc-giac-hap-sa.jpg',
    intro: `Ốc giác is the turban snail — Turbo marmoratus and related species — the large, heavy-shelled marine snail that lives on rocky subtidal reefs along the central Vietnamese coastline, from Quảng Nam through Phú Yên to Khánh Hòa. It is the largest and most prized of all the ốc (snail) species eaten in Vietnam: the shell can reach 15cm in diameter, the meat inside is substantial, and the flavor is more complex and more distinctly marine than the freshwater snails that dominate the northern and Mekong Delta menus. Ốc giác is a coastal snail — it is available only where the sea is clean, the reefs are intact, and the fishing boats go out to the rocky areas rather than the sandy shallows. In markets along the Phú Yên coast, at the seafood restaurants of Đà Nẵng, and at the rocky-shore food stalls of Nha Trang, ốc giác is sold live, by weight, and priced at a premium that reflects both its size and its scarcity. The hấp sả preparation — steaming over lemongrass and beer — is the dominant cooking method because it is the one that preserves the snail's natural briny sweetness without adding flavors that compete with it. The beer steam carries the lemongrass aromatic into the shells while the snail cooks in its own moisture, and the result is a turban snail that tastes clearly of the reef it came from with the specific citrus-grass note of lemongrass as a background accent. The muối tiêu chanh served alongside is calibrated to the specifically marine character of ốc giác — more lime, less pepper than the version served with freshwater snails — because ốc giác needs brightness more than heat to complete it.`,
    ingredientSections: [
        {
            title: 'Turban snails',
            items: [
                { amount: 1.5, unit: 'kg', name: 'live turban snails (ốc giác)', note: 'alive and active — available at coastal Vietnamese seafood markets and some Asian specialty markets. Weight includes heavy shells. If unavailable: large abalone, large periwinkles, or any large live marine snail.' },
                { amount: 1, unit: 'tbsp', name: 'salt', note: 'added to the final rinse water' },
            ],
        },
        {
            title: 'Beer-lemongrass steaming bath',
            items: [
                { amount: 660, unit: 'ml', name: 'Vietnamese beer (Saigon or 333)', note: 'two cans — generous for the large, heavy shells that require more steam volume' },
                { amount: 200, unit: 'ml', name: 'water' },
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and roughly cut' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '4 slices, smashed' },
                { amount: 6, name: 'kaffir lime leaves', note: 'torn' },
                { amount: 4, name: 'spring onions', note: 'tied in a bundle' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Muối tiêu chanh (calibrated for marine snails)',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'flaky sea salt', note: 'flaky rather than coarse — better texture against the large snail pieces' },
                { amount: 1, unit: 'tsp', name: 'freshly ground black pepper', note: 'slightly less than usual — ốc giác needs lime more than pepper' },
                { amount: 4, name: 'limes', note: 'more generous than usual — the lime is the primary condiment for marine snails' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced — optional' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 4, name: 'kaffir lime leaves, extra', note: 'finely shredded — scattered over the finished snails' },
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 2, name: 'extra limes' },
                { amount: 4, name: 'curved snail picks or small cocktail forks', note: 'essential for extracting turban snail meat' },
                { amount: 1, name: 'bowl warm water with lime slice', note: 'finger bowl' },
            ],
        },
    ],
    steps: [
        {
            title: 'Rinse the turban snails',
            description: 'Place the live turban snails in a large basin of cold water with salt. Swirl and leave for 5 minutes — the snails do not require extended purging like freshwater snails because they live in clean reef water rather than mud. Scrub the exterior of each shell briefly with a brush. Turban snails are active and will attempt to move in the water — this is the confirmation that they are alive. Discard any that are completely sealed with their operculum and smell of decay.',
            tip: 'Turban snails from clean coastal reef water require only a brief rinse rather than the extended purging needed for freshwater or mud-dwelling snails. The 5-minute salt water rinse removes surface debris from the shell while the snails are still active and their muscles are relaxed — which makes the subsequent steaming produce more tender meat than starting with tightly contracted snails.',
        },
        {
            title: 'Build the beer steaming bath — double portion',
            description: 'Combine two cans of beer, water, bruised lemongrass, smashed ginger, torn kaffir lime leaves, spring onion bundle, and salt in the steamer base. Turban snails are significantly heavier than shrimp or flower crab and require more steam volume to cook through — two cans of beer rather than one provides the longer sustained steam needed for the thick shells. Bring to a vigorous, full rolling boil before adding the snails.',
            tip: 'The two-can beer bath for turban snails reflects the difference in shell thickness between ốc giác and the lighter shells of ghẹ or tôm. The heavy turban shell absorbs and conducts heat more slowly — more steam volume compensates by maintaining the steaming environment for longer without the liquid running low.',
        },
        {
            title: 'Steam shell-opening-down — 12-15 minutes',
            description: 'Place the turban snails on the steaming rack with their shell openings facing down — this orientation allows the steam to enter the shells directly and the condensed liquid inside the shell to drain rather than pool. Steam over maximum heat: medium turban snails (8-10cm) — 12 minutes. Large turban snails (11-15cm) — 15 minutes. The snails are done when the operculum (the flat circular lid) can be gently lifted and the flesh beneath is firm and opaque white.',
            tip: 'Shell-opening-down is the specific orientation for steaming turban snails — opposite to the belly-up positioning used for crab. The downward-facing opening allows the steam to travel directly up into the shell and cook the meat from the most efficient angle. The condensed steam that would pool inside the shell if positioned opening-up runs out cleanly instead.',
        },
        {
            title: 'Test and rest briefly',
            description: 'At the correct cooking time, remove one snail and attempt to lift the operculum with a snail pick — it should come away cleanly with light pressure. The flesh visible beneath should be white and firm throughout, not translucent or yielding. Rest the cooked snails for 3 minutes — the heavy shells retain heat efficiently and the carry-over cooking finishes any remaining slight underdone sections.',
            tip: 'The operculum of the turban snail is itself edible and has a specific firm, slightly calcified texture that some diners enjoy and others do not. In Vietnam it is typically discarded — set aside on the table as the shells are worked through.',
        },
        {
            title: 'Make the marine muối tiêu chanh',
            description: 'Combine flaky sea salt with freshly ground black pepper on individual small plates — slightly less pepper than for freshwater snails. Squeeze generous amounts of lime at the table — more lime than for any other muối tiêu chanh preparation. The lime is the primary condiment for ốc giác: its brightness amplifies the marine sweetness of the snail in a way that pepper heat does not. Add minced chili if desired.',
            tip: 'The ratio adjustment — more lime, less pepper — for ốc giác muối tiêu chanh reflects the difference between marine and freshwater snail flavors. Freshwater snails benefit from more pepper to counter their earthier character. Marine snails need more lime to amplify their briny sweetness. The condiment calibration is the acknowledgment of this difference.',
        },
        {
            title: 'Extract with the curved pick and eat',
            description: 'Scatter shredded kaffir lime leaves and sliced spring onion over the plate of steamed snails. Serve with the muối tiêu chanh, rau răm, finger bowls, and curved snail picks. To extract: remove the operculum first with the pick. Insert the pick into the shell at the angle of the spiral and rotate slightly — following the helix of the shell interior. The snail meat comes out in a spiral piece. The innermost part of the spiral, the darkest section, is the viscera — eaten by some, discarded by others. Dip the extracted meat in the lime-squeezed muối tiêu chanh. Eat with rau răm.',
            tip: 'The rotation technique for extracting turban snail meat — following the shell\'s own spiral rather than pulling directly outward — is the difference between extracting the meat cleanly and tearing it. The turban snail coils in the same direction as its shell and comes out cleanly only when the pick follows that coil. One smooth rotation, not a pull.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
