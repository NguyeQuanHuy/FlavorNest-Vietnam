'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'oc-dua-nuong-muoi-ot',
    title: 'Ốc Dừa Nướng Muối Ớt (Giant Baler Shell Snail Grilled with Chili Salt)',
    subtitle: 'The largest edible snail on the Vietnamese coast — ốc dừa, the giant baler shell, with a shell the size of a human head and flesh that feeds four people — halved, coated in four-stalk lemongrass chili-salt paste, and grilled over charcoal until the flesh inside caramelizes and the natural briny liquid reduces to an intensely concentrated sauce.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/oc-dua-nuong-muoi-ot.jpg',
    intro: `Ốc dừa — Melo melo, the Indian volute or giant baler shell — is the largest snail eaten on the Vietnamese central coast, a species that produces shells 20-30cm long and 15-20cm wide, with a distinctive orange-yellow skin and flesh that is substantial enough to constitute a main course for multiple people from a single animal. The name dừa (coconut) comes from the size and approximate shape of the shell — roughly coconut-sized, with the same smooth, rounded form. In Phú Yên and Khánh Hòa, where ốc dừa is most commonly eaten, the snail is treated with the same seriousness as the province's largest crustaceans: ordered by the piece rather than by the kilogram, served as a centerpiece rather than as an accompaniment, and prepared by the method that shows the large, dense flesh at its best — charcoal grilling with the four-stalk lemongrass-chili paste that defines Phú Yên's approach to all its significant seafood. The technique for ốc dừa nướng is specific to the large size of the animal: the snail is removed from its shell alive, halved lengthwise to expose the interior flesh, coated generously in the muối ớt paste, and returned to the half-shell where it is grilled opening-up over charcoal. The half-shell acts as a natural cooking vessel that distributes heat evenly around the flesh while the natural liquids inside concentrate during grilling into an intensely flavored sauce. The result — a half-shell of caramelized, chili-paste-coated giant snail with a concentrated natural sauce pooled around the meat — is one of the most dramatic presentations in Vietnamese coastal seafood and one of the most deeply satisfying eating experiences the central coast produces.`,
    ingredientSections: [
        {
            title: 'Giant baler shell snail',
            items: [
                { amount: 2, name: 'live ốc dừa (giant baler shell / Melo melo)', note: '800g-1.5kg each including shell. Available at central Vietnamese coastal markets and specialty seafood suppliers. One snail per 2 diners at the larger size. Must be live — the flesh deteriorates rapidly after death.' },
            ],
        },
        {
            title: 'Phú Yên muối ớt paste',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, minced to paste — four stalks, the Phú Yên proportion' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'minced' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 1, unit: 'tbsp', name: 'mắm nhĩ' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Muối lá é dipping salt',
            items: [
                { amount: 25, unit: 'g', name: 'fresh lá é leaves' },
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, name: 'bird\'s eye chili' },
                { amount: 3, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè Tuy An (sesame rice crackers)' },
                { amount: 1, name: 'bunch fresh lá é leaves' },
                { amount: 1, name: 'bunch rau răm' },
                { amount: 4, name: 'spring onions', note: 'sliced — scattered over the finished snail' },
                { amount: 2, name: 'extra limes' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 1, name: 'bowl warm water with lime' },
            ],
        },
    ],
    steps: [
        {
            title: 'Remove the snail from its shell — carefully',
            description: 'Place the live ốc dừa in the freezer for 15-20 minutes to sedate. The snail will retract slightly but remain alive. Using a firm grip and a twisting motion, pull the snail body from the shell — it should come free with moderate resistance. Alternatively, use a knife to sever the columellar muscle that attaches the animal to the shell interior. Rinse the flesh under cold water. Remove the operculum and discard the viscera (the darker internal organs) — keep only the white-orange foot muscle that is the primary eating portion. Rinse the shell interior as well — it will be used as a cooking vessel.',
            tip: 'The columellar muscle connecting ốc dừa to its shell is significantly stronger than in smaller snails — the animal is large and powerful. If pulling does not release the snail, insert a knife along the inner column of the shell and sever the attachment point cleanly. This releases the flesh without damage.',
        },
        {
            title: 'Halve the flesh and apply the paste',
            description: 'Using a sharp, heavy knife, halve the snail flesh lengthwise — producing two thick pieces that expose the interior texture. The flesh of ốc dừa is firm, white-orange, and slightly translucent when raw. Combine all muối ớt paste ingredients. Apply generously to both cut surfaces and the exterior of each piece. Also apply a thin layer inside each half-shell. Return each piece of flesh to a half-shell — the paste between flesh and shell means the lemongrass flavors the flesh from below as the charcoal heats from above.',
            tip: 'Applying paste inside the shell before returning the flesh is the specific technique that produces flavor from two directions simultaneously — the paste on the flesh surface takes the direct charcoal heat and caramelizes from above; the paste between flesh and shell heats from the conducted heat of the shell and perfumes the flesh from below.',
        },
        {
            title: 'Build the charcoal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over. For ốc dừa specifically, build a generous fire — the large shell and substantial flesh require sustained heat for the full grilling time. The half-shells sitting on the grill will act as heat sinks and require more coal heat than smaller shellfish preparations. Medium-hot fire: 3-4 seconds comfortable with hand 15cm above the coals.',
            tip: 'The large shell of ốc dừa absorbs significant heat before it begins conducting to the flesh inside. The first 5 minutes of grilling are primarily heating the shell — the flesh cooking begins accelerating after the shell has fully heated through. This is why the total grilling time for ốc dừa is longer than for smaller snails.',
        },
        {
            title: 'Grill flesh-side up in the half-shell — 15-20 minutes',
            description: 'Place the half-shells flesh-side up on the grill. The shell curves naturally and should sit stably on the grill grate. As the shell heats, the natural liquids in the flesh will begin to release and mix with the muối ớt paste in the shell base — this is the developing sauce. At 10 minutes, the liquid should be visibly bubbling and the paste beginning to caramelize at the flesh surface edges. At 15-20 minutes, the flesh should be completely opaque, the paste deeply caramelized, and the natural sauce in the shell base reduced to a concentrated, fragrant liquid.',
            tip: 'The bubbling sauce developing in the shell base during grilling is the indicator of correct progress. A shell that is not producing visible bubbling after 8-10 minutes is not getting enough heat — add more coals or move to a hotter area of the grill.',
        },
        {
            title: 'Pound muối lá é and rest briefly',
            description: 'Pound lá é leaves with salt, pepper, sugar, and chili until intensely fragrant and green. Transfer to plates. Remove the half-shells from the grill and rest 3 minutes — the flesh continues cooking from the retained shell heat. Scatter sliced spring onion over the surface. The finished ốc dừa nướng should show: caramelized paste on the flesh surface, golden-charred at the edges, with a dark, concentrated sauce pooled in the shell base.',
            tip: 'The concentrated sauce pooled in the shell base after grilling is the equivalent of the caramelized seawater in the ốc nhảy shell — the natural liquid of the animal concentrated by fire into something extraordinary. Spoon this sauce over the flesh before eating, and use a cracker to mop the shell clean after the flesh is gone.',
        },
        {
            title: 'Carve at the table and serve',
            description: 'Bring each half-shell directly to the table. The diner uses scissors or a knife to cut the large flesh piece into 3-4 serving portions. Drizzle the concentrated shell sauce over each cut piece. Serve with muối lá é, sesame crackers, fresh lá é leaves, rau răm, and limes. The eating: a piece of caramelized ốc dừa on a sesame cracker, raw lá é leaf placed under the meat, edge-dipped in lime-squeezed muối lá é. The final act: use a cracker to scrape the caramelized paste and concentrated sauce from the shell interior — this is the most intensely flavored part of the entire preparation.',
            tip: 'The shell-scraping with crackers at the end of ốc dừa nướng is the ritual that completes the meal and that experienced ốc dừa eaters never skip. The combination of caramelized lemongrass paste, concentrated natural snail sauce, and the sesame cracker produces a bite more complex than any single element of the preparation. Save crackers for this purpose.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
