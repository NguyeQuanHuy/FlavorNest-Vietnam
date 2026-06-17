'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-nhoi-thit-hap-gung',
    title: 'Mực Nhồi Thịt Hấp Gừng (Stuffed Squid Steamed with Ginger)',
    subtitle: 'Whole squid tubes stuffed with a seasoned mixture of minced pork, wood ear mushrooms, glass noodles, and spring onion then steamed over ginger and Shaoxing wine — sliced at the table to reveal the cross-section of squid and filling, served with a light soy-ginger dipping sauce.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/muc-nhoi-thit-hap-gung.jpg',
    intro: `Mực nhồi thịt hấp gừng is the stuffed steamed squid of Vietnamese-Chinese coastal cooking — a preparation that takes the squid tube's natural hollow cylinder shape and uses it as a vessel for a seasoned pork and mushroom filling, producing a dish that is simultaneously a seafood preparation and a small terrine, where each slice reveals the cross-section of white squid surrounding the darker filling in a visual that is one of the most elegant in the Vietnamese seafood repertoire. The preparation is specific to central and southern Vietnamese cooking where fresh squid of the medium body-tube size (12-18cm) is consistently available and where the stuffed-and-steamed technique appears across multiple proteins — stuffed tofu, stuffed bitter melon, stuffed eggplant — as a characteristic approach to containing a filling within a vegetable or seafood vessel. The filling is the classic Vietnamese pork stuffing that appears in steamed dishes throughout the cuisine: minced pork (medium fat, not lean), soaked wood ear mushrooms that provide the specific crunchy texture against the soft pork, soaked glass noodles cut short and providing body and slight chew, spring onion for aromatic freshness, and the seasoning of fish sauce, white pepper, and a small amount of sugar. This filling, placed inside the squid tube and the tube sealed at the open end with a toothpick, steams inside the squid for 15-18 minutes — the squid cooking simultaneously from the steam outside and from the heat conducted through the filling inside, so that the squid wall and the filling reach correct doneness at the same moment. The ginger-Shaoxing wine steaming bath that carries the aromatic steam is the same technique as for steamed tilapia and steamed oysters in the collection — the consistent Cantonese-Vietnamese approach to steaming delicate proteins that requires aromatic complexity from the steam without adding complex sauces.`,
    ingredientSections: [
        {
            title: 'Squid',
            items: [
                { amount: 4, name: 'whole medium squid (mực ống), 12-18cm body length', note: 'cleaned — body tube kept whole and intact for stuffing, tentacles reserved for a separate use or garnish. The tube must be completely intact with no holes for the stuffing to stay in during steaming.' },
            ],
        },
        {
            title: 'Pork and mushroom filling',
            items: [
                { amount: 250, unit: 'g', name: 'minced pork (thịt heo băm)', note: '20% fat content — not lean. The fat keeps the filling moist during steaming.' },
                { amount: 20, unit: 'g', name: 'dried wood ear mushrooms (mộc nhĩ)', note: 'soaked 20 minutes, drained, finely diced' },
                { amount: 15, unit: 'g', name: 'dried glass noodles (miến)', note: 'soaked 10 minutes, drained, cut into 2cm pieces' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'Steaming bath',
            items: [
                { amount: 400, unit: 'ml', name: 'water' },
                { amount: 2, unit: 'tbsp', name: 'Shaoxing wine' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 3, name: 'spring onions', note: 'bruised' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Finishing oil',
            items: [
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'heated to smoking' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'finely julienned' },
                { amount: 3, name: 'spring onions', note: 'green parts, julienned' },
            ],
        },
        {
            title: 'Dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'light soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: 'microplane-grated' },
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
            ],
        },
    ],
    steps: [
        {
            title: 'Make the filling',
            description: 'Combine minced pork with diced wood ear mushrooms, cut glass noodles, sliced spring onion, minced shallots, fish sauce, sugar, white pepper, and sesame oil. Mix thoroughly — knead the mixture until it becomes slightly sticky and cohesive. The filling should hold its shape when pressed into a ball. Taste a small amount fried in a pan — the seasoning should be slightly assertive, as the squid wall and the steam will dilute it slightly during cooking.',
            tip: 'Testing the filling seasoning by frying a small amount in a pan before stuffing is the technique that allows seasoning adjustment before the preparation is committed. The steamed filling will taste slightly less seasoned than the fried test piece because the steam dilutes the fish sauce character slightly. Season the filling slightly more assertively than you want the final result to taste.',
        },
        {
            title: 'Stuff the squid tubes',
            description: 'Hold each squid tube open at the wide end. Using a small spoon or piping bag, fill each tube three-quarters full with the pork filling — do not overfill, as the filling will expand slightly during steaming and an overfilled tube may burst. Seal the open end with a toothpick threaded through the edge of the tube. The stuffed tubes should feel firm and evenly filled throughout their length — gently press from the sealed end toward the opening to distribute any air pockets.',
            tip: 'Three-quarter filling rather than completely full is the specific proportion that allows for the slight expansion of the pork filling during steaming without bursting the squid tube. A completely filled tube will burst its seal or tear the tube wall as the pork contracts and expands during cooking. The toothpick seal should be firm but not so tight that it tears the edge of the tube.',
        },
        {
            title: 'Steam for 15-18 minutes',
            description: 'Bring the steaming bath — water, Shaoxing wine, ginger, spring onion, and salt — to a vigorous boil. Place the stuffed squid tubes on the steaming rack. Cover tightly. Steam for 15 minutes for smaller tubes (12-14cm), 18 minutes for larger (15-18cm). The stuffed squid is done when a skewer inserted into the center of the filling through the side of the tube meets no resistance and comes out clean and hot.',
            tip: 'The skewer test for mực nhồi thịt hấp is the most reliable doneness check — it tests both the squid tube and the filling simultaneously. A hot, clean skewer means both are done. If the skewer meets resistance from the filling center, steam for 3 more minutes and test again. The squid tube itself is thinner and cooks faster than the filling — the filling is always the controlling element.',
        },
        {
            title: 'Pour the finishing oil',
            description: 'Remove the stuffed squid from the steamer. Pour away any accumulated liquid from the steaming plate. Place the stuffed tubes on a clean serving plate. Arrange the ginger julienne and spring onion julienne over the surface. Heat oil until smoking. Pour in one motion over the aromatics — the sizzle runs the length of the stuffed squid and produces the specific ginger-spring onion bloom that finishes the preparation.',
            tip: 'The finishing oil pour for mực nhồi thịt hấp runs along the length of 4 stuffed squid tubes simultaneously — a longer pour than for individual fish or oysters and one that produces a more sustained sizzle. Position the oil pan at one end of the serving plate and pour in a single continuous motion to the other end.',
        },
        {
            title: 'Slice at the table and serve',
            description: 'Remove the toothpick from each stuffed squid. Using a sharp knife, slice each tube into rounds 2cm thick — the cross-section should show the white squid ring surrounding the darker pork-mushroom filling. Arrange cut-side up on the plate. Drizzle the dipping sauce lightly over the slices. Scatter cilantro. Serve with the ginger soy dipping sauce alongside, steamed rice, and lime. To eat: a slice of the stuffed squid, a small amount of dipping sauce, eaten with rice. The squid wall and the filling in each slice are eaten together — the specific combination of squid sweetness and pork-mushroom savory is the preparation\'s complete character.',
            tip: 'The cross-section of mực nhồi thịt hấp when cut into rounds is the visual that makes this preparation one of the most elegant in the Vietnamese seafood collection — the clean white circle of squid surrounding the darker, textured filling is naturally beautiful and requires no garnishing beyond the cilantro and ginger julienne already on the plate.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
