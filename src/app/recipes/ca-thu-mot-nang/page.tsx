'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-thu-mot-nang',
    title: 'Cá Thu M?t N?ng Phú Yên (One-Sun Dried Mackerel)',
    subtitle: 'Spanish mackerel fillets salted and sun-dried for one full day under the Phú Yên coast sun until the surface firms and concentrates — grilled over charcoal until the exterior caramelizes and the interior stays oily and intensely flavored. The fish cousin of bò m?t n?ng, applying the same drying philosophy to the sea.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 day drying + 20 min cooking',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-thu-mot-nang.jpg',
    intro: `Cá thu m?t n?ng is the one-sun dried Spanish mackerel of Phú Yên — the fish preparation that applies the same drying philosophy as bò m?t n?ng (one-sun beef) to the coastal waters' most prized mackerel. Cá thu — Spanish mackerel, Scomberomorus commerson — is one of the most intensely flavored fish in Vietnamese coastal cooking: oily, rich, with a deep savory character that the sun-drying process concentrates further by removing surface moisture while leaving the internal fat content intact. The one-sun drying changes the mackerel in specific ways: the exterior becomes firm and slightly papery, concentrating the surface proteins; the skin tightens and develops the ability to caramelize dramatically on charcoal in a way that fresh mackerel skin cannot; and the internal fat, undisturbed by the gentle sun heat, redistributes slightly through the flesh and produces a richer, more evenly flavored cross-section when the fish is eaten. The salt rubbed into the flesh before drying seasons from within rather than merely coating the surface, and after one sun it has been partially absorbed and reabsorbed into the fish in a way that produces a deeper, more integrated saltiness than surface seasoning. Cá thu m?t n?ng is grilled over hardwood charcoal after drying — the same fire philosophy as bò m?t n?ng — with nothing added to the exterior. The dried, slightly papery exterior chars immediately on contact with the heat and caramelizes the surface proteins into a dark, intensely flavored crust while the fat beneath self-bastes the flesh from within. The eating experience — the shatteringly charred exterior, the oily, concentrated interior, the mu?i lá é alongside — is the fish answer to the question that bò m?t n?ng answers for beef: what does the Phú Yên sun do to the finest local protein when given one full day?`,
    ingredientSections: [
        {
            title: 'Mackerel',
            items: [
                { amount: 800, unit: 'g', name: 'fresh Spanish mackerel fillets (cá thu phi lê)', note: 'skin-on, pin-boned. Or 2 whole mackerel cleaned and filleted. The fish must be very fresh before drying begins — any fish not fresh enough to eat raw is not fresh enough to dry.' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt', note: 'rubbed into both flesh and skin surfaces before drying' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'small amount — assists the drying process and caramelization' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil', note: 'brushed lightly over the salted fish before drying — helps the salt penetrate and prevents the surface from drying too fast' },
            ],
        },
        {
            title: 'Sun-drying or oven-drying',
            items: [
                { amount: 1, name: 'bamboo rack or wire cooling rack', note: 'for suspending the fish during drying — allows air circulation on all sides' },
            ],
        },
        {
            title: 'Charcoal fire',
            items: [
                { amount: 0.5, unit: 'kg', name: 'hardwood charcoal', note: 'built to medium-hot — dried mackerel chars faster than fresh and needs slightly less intense heat' },
            ],
        },
        {
            title: 'Mu?i lá é dipping salt',
            items: [
                { amount: 20, unit: 'g', name: 'fresh lá é leaves' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, name: 'bird\'s eye chili' },
                { amount: 2, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 1, name: 'bunch fresh lá é leaves' },
                { amount: 1, name: 'bunch rau ram' },
                { amount: 1, name: 'green mango', note: 'julienned — the sourness cuts through the rich dried mackerel fat' },
                { amount: 2, name: 'extra limes' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice', note: 'or bánh tráng nu?ng (toasted crackers)' },
            ],
        },
    ],
    steps: [
        {
            title: 'Salt and prepare the mackerel for drying',
            description: 'Pat the mackerel fillets completely dry with paper towels. Combine salt and sugar and rub firmly into both the flesh side and the skin side of each fillet — press the salt into the flesh rather than simply scattering it over the surface. Brush lightly with oil. The salt should be evenly distributed across every surface. Place on a rack, skin-side up.',
            tip: 'Skin-side up during drying is the correct orientation — the skin is more resistant to moisture loss than the flesh and acts as a slow barrier, preventing the flesh from drying too fast while allowing the salt to penetrate from the flesh side. If dried flesh-side up, the flesh surface becomes too dry before the interior salt has fully penetrated.',
        },
        {
            title: 'Sun-dry for one full day — or oven method',
            description: 'SUN METHOD (Phú Yên): Place the salted mackerel on a rack in full direct sunlight from 8am. Leave for 6-8 hours, turning once at midday. Bring inside before evening. The surface should be firm, slightly tacky when pressed, and the color should have darkened slightly from the salt and sun exposure. OVEN METHOD (home): Place on a wire rack over a baking tray. Set oven to 50-60°C with the door slightly ajar. Dry for 4-5 hours, turning once. The result should be firm on the surface with the flesh side no longer feeling raw and wet.',
            tip: 'The salt and sugar mixture on the mackerel surface interacts with the sun heat differently from plain salt — the sugar contributes to a slight caramelization of the surface proteins during drying that produces a more golden, more intensely flavored exterior when grilled. This small addition distinguishes cá thu m?t n?ng from simply salted and dried mackerel.',
        },
        {
            title: 'Grill skin-side down over medium-hot charcoal',
            description: 'Build the charcoal fire to medium-hot — slightly less intense than for bò m?t n?ng because the dried mackerel charred exterior can go from caramelized to burned in under a minute at very high heat. Place the dried mackerel fillets skin-side down on the grill. The dried skin will immediately begin to char and caramelize. Grill without moving for 4-5 minutes until the skin is deeply charred and the fish is about 60% cooked through from the skin side.',
            tip: 'The skin of cá thu m?t n?ng chars significantly faster than fresh mackerel skin because the drying has removed surface moisture. At medium-hot charcoal, the skin goes from raw to perfectly charred in 4-5 minutes. Monitor carefully from the 3-minute mark — the difference between perfect char and burnt skin for dried mackerel is about 60 seconds.',
        },
        {
            title: 'Flip and finish — flesh side down',
            description: 'Flip the fillets flesh-side down for 3-4 minutes. The flesh side will caramelize from the charcoal heat and the fish oil will begin to render — brief flare-ups may occur. The mackerel is done when pressed firmly with a finger: it should feel firm and slightly springy throughout, with no soft or yielding center. The total grilling time for dried mackerel is significantly shorter than for fresh — 7-9 minutes total versus 12-15 for the same weight fresh.',
            tip: 'The shorter total grilling time for cá thu m?t n?ng compared to fresh mackerel reflects the partial "cooking" effect of the one-day drying process. The proteins have already been partially denatured by the salt and the heat of the sun — less time on the charcoal is required to complete the cooking.',
        },
        {
            title: 'Pound the mu?i lá é',
            description: 'Pound lá é leaves with salt, pepper, sugar, and chili until intensely fragrant and green. For cá thu m?t n?ng specifically, the mu?i lá é should be slightly more assertive in its lá é character than for the delicate preparations earlier in the series — the intensely flavored dried mackerel needs a condiment with sufficient presence to complement rather than disappear against it.',
            tip: 'The pairing of mu?i lá é with cá thu m?t n?ng is the fish version of the same pairing with bò m?t n?ng — the sun-dried, concentrated protein needing the wild citrus-pepper-herbal character of lá é salt to complete it. The parallel between the beef and fish preparations is intentional: Phú Yên applies the same drying philosophy and the same condiment across species.',
        },
        {
            title: 'Serve and eat',
            description: 'Transfer the grilled mackerel to a plate. The skin should be shatteringly charred, the flesh deeply golden-brown. Scatter rau ram and serve with mu?i lá é, sesame crackers, julienned green mango, fresh lá é leaves, lime wedges, and steamed rice. To eat: break pieces of fish from the fillet with chopsticks or fingers — the dried, grilled flesh separates in flakes — place on a sesame cracker with green mango and rau ram, dip in lime-squeezed mu?i lá é.',
            tip: 'The green mango alongside cá thu m?t n?ng serves the same role as the mango alongside bò m?t n?ng — its sharp sourness cuts through the rich, concentrated fish fat and provides the acid brightness that the preparation\'s salt and char character needs to feel complete. The parallel is exact: same sun philosophy, same condiment, same fruit accompaniment. Different species, same Phú Yên logic.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
