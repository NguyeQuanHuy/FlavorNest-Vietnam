'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-chep-hap-bia',
    title: 'Cá Chép Hấp Bia (Beer-Steamed Carp)',
    subtitle: 'Whole carp steamed over Vietnamese beer, lemongrass, and ginger until the flesh is silky and the broth in the steaming plate has concentrated into a deeply flavored liquid — the northern Vietnamese celebration fish served at Tết, at ancestor worship ceremonies, and at any occasion where the whole fish symbolizes completeness and prosperity.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-chep-hap-bia.jpg',
    intro: `Cá chép hấp bia is the beer-steamed carp of northern Vietnamese cooking — a preparation that combines the symbolic weight of the carp (the fish most associated with luck, prosperity, and Tết in Vietnamese and Chinese culture) with the practical effectiveness of the beer-steaming technique that carries aromatic compounds more efficiently than water and that produces a cooked fish with a specific subtle malt character in the steam-perfumed flesh. Cá chép (common carp, Cyprinus carpio) is the fish of the Red River Delta — the flat, productive agricultural plain around Hà Nội where the carp has been farmed in ponds and moats for centuries and where it carries a cultural significance that no other freshwater fish approaches. On the last day of the year before Tết, Vietnamese families traditionally release live carp into rivers or lakes as the vehicle for Táo Quân (the Kitchen God) to ride to heaven to report on the household — the carp that are not released are often eaten in the days around the holiday, making cá chép both the most ceremonially significant fish of the year and, paradoxically, the most eaten. The hấp bia preparation is the northern version of the steaming technique — using Vietnamese beer (Hà Nội beer specifically in the capital's kitchens, or Bia Hơi if available) alongside the classic ginger and lemongrass steaming bath to produce a fish that is simultaneously clean and complex, the beer contributing a background depth that elevates the simple technique into something the specific region and its brewing tradition has made its own.`,
    ingredientSections: [
        {
            title: 'Carp',
            items: [
                { amount: 1, name: 'whole carp (cá chép), 800g-1.2kg', note: 'cleaned, scaled, scored 3-4 times on each side. Head and tail left on — essential for the complete Tết presentation.' },
                { amount: 1, unit: 'tsp', name: 'salt', note: 'rubbed over every surface' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: '2 slices — inside the cavity' },
                { amount: 2, name: 'spring onions', note: 'whole — inside the cavity' },
                { amount: 1, unit: 'tbsp', name: 'Shaoxing wine or rice wine', note: 'drizzled over before steaming' },
            ],
        },
        {
            title: 'Beer steaming bath',
            items: [
                { amount: 330, unit: 'ml', name: 'Vietnamese beer (Hà Nội or Bia Hơi)', note: 'one can — the northern Vietnamese steaming medium' },
                { amount: 200, unit: 'ml', name: 'water' },
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and cut' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '4 slices, smashed' },
                { amount: 4, name: 'shallots', note: 'halved' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Finishing oil and aromatics',
            items: [
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'heated to smoking' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: 'finely julienned' },
                { amount: 5, name: 'spring onions', note: 'green parts, julienned' },
                { amount: 2, name: 'fresh red chilies', note: 'julienned' },
            ],
        },
        {
            title: 'Dressing sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'light soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'warm water' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the carp',
            description: 'Score the carp 3-4 times on each side cutting to the bone. Rub salt and white pepper firmly over every surface, into the scores, and inside the cavity. Stuff the cavity with ginger slices and whole spring onions. Drizzle rice wine over the fish. Place on a heatproof plate with sides — a lip of at least 1cm to contain the steaming juices that will accumulate. The carp is larger than tilapia and requires a larger plate and a wider steamer.',
            tip: 'The scored whole carp with head and tail presented on the plate is the visual of cá chép hấp bia at its most ceremonially correct — the complete fish symbolizing completeness in Vietnamese ritual eating. When serving at Tết or for a ceremonial meal, the fish should be presented whole and intact before being portioned at the table.',
        },
        {
            title: 'Steam with Hà Nội beer — 18-22 minutes',
            description: 'Bring the beer, water, lemongrass, ginger, shallots, and salt to a full boil. Reduce to medium heat. Place the carp plate in the steamer. Cover tightly. Steam for 18 minutes for an 800g carp, 22 minutes for a 1.2kg carp. The carp is done when a chopstick inserted at the thickest score — just behind the head — meets no resistance and the flesh is white throughout.',
            tip: 'Carp steams for longer than tilapia at equivalent weight because carp flesh is denser and the central bone of a large carp is significantly thicker. Test at 18 minutes without fail — at 22 minutes a 1.2kg carp should be perfectly cooked but another 5 minutes would begin to dry the flesh near the tail.',
        },
        {
            title: 'Pour the dressing sauce and finish with smoking oil',
            description: 'Remove the carp from the steamer. Pour away the accumulated steaming liquid from the plate — reserve a few tablespoons if using as a soup addition later. Drizzle the dressing sauce over the fish. Arrange ginger julienne, spring onion, and chili strips across the entire length of the fish. Heat oil to smoking and pour in one motion over the aromatics. The sizzle along the full length of a large carp is more dramatic than for smaller fish — the aromatic cloud fills the room.',
            tip: 'The smoking oil poured along the full length of a whole carp produces a longer, more sustained sizzle than for smaller fish — the oil contacts the aromatics across the entire 40-50cm length of the fish and produces steam and aroma from every point simultaneously. This is the specific visual and aromatic moment that makes cá chép hấp bia a celebration dish rather than an everyday preparation.',
        },
        {
            title: 'Serve and portion at the table',
            description: 'Bring the whole carp to the table intact — the complete presentation before portioning is the correct way to serve a ceremonial fish. Scatter cilantro over the finished fish. At the table, use chopsticks and a spoon to portion the fish: lift the top fillet from the bone in sections, then flip the carcass and portion the bottom fillet. Serve each portion with the ginger-spring onion aromatics, a drizzle of the pooled soy-sesame sauce, and steamed rice.',
            tip: 'The northern Vietnamese way of portioning a whole steamed fish at the table — lifting the top fillet in sections before flipping to the bottom fillet — is the method that produces the cleanest portions and the most dignified serving. The bones remain on the plate after both fillets are removed and are not served as a portion.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
