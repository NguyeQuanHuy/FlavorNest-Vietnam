'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-ghe-phu-yen',
    title: 'G?i Gh? Phú Yên (Phú Yên Flower Crab Salad)',
    subtitle: 'Fresh flower crab meat tossed with green mango, rau ram, shallots, roasted peanuts, and a dressing of m?m nhi and lime — the Phú Yên salad where the premium local fish sauce is used as the primary dressing and the crab is the centerpiece that every element exists to support.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/goi-ghe-phu-yen.jpg',
    intro: `G?i gh? Phú Yên is the flower crab salad of the province — a dish that exists in the overlap between two of Phú Yên's greatest food assets: the gh? caught in the coastal waters and the m?m nhi produced in the fishing villages. The salad technique is the standard Vietnamese g?i — toss the protein with herbs, vegetables, and a sweet-sour-savory dressing — but the specific combination of ingredients and the specific dressing makes this version Phú Yên rather than a generic Vietnamese seafood salad. The flower crab is poached rather than eaten raw, then the meat is carefully picked while still warm and tossed in the dressing immediately — the warm crab absorbs the m?m nhi and lime juice more completely than cold crab does, and the dressing penetrates every strand of crab meat rather than coating only the surface. The green mango provides the crunch and sourness that pairs specifically with flower crab — a more assertive fruit than cucumber or banana blossom would overwhelm the delicate crab. The rau ram is present in larger quantity than in most g?i — its sharp peppery character is the herb that defines the Phú Yên palate and it is never restrained in the province's cooking. The m?m nhi in the dressing makes this salad untranslatable to any other fish sauce — the depth and complexity of the first-press sauce is detectable in the dressing and produces a result that ordinary fish sauce cannot approach. G?i gh? Phú Yên is the salad that appears at celebratory meals, at seaside restaurants with a view of the bay, and at family tables when the gh? catch is good and the m?m nhi is fresh.`,
    ingredientSections: [
        {
            title: 'Flower crab',
            items: [
                { amount: 800, unit: 'g', name: 'fresh flower crabs (gh? / blue swimmer crabs)', note: '2-3 crabs. Poached and picked — or buy 400g fresh picked crab meat from a reliable fishmonger if available.' },
                { amount: 2, name: 'lemongrass stalks', note: 'bruised — for the poaching liquid' },
                { amount: 20, unit: 'g', name: 'ginger', note: '2 slices — for the poaching liquid' },
                { amount: 1, unit: 'tbsp', name: 'salt', note: 'for the poaching liquid' },
            ],
        },
        {
            title: 'Salad components',
            items: [
                { amount: 200, unit: 'g', name: 'green unripe mango (xoài xanh)', note: 'finely julienned — rock hard, assertively sour. The sourness is part of the dish.' },
                { amount: 3, name: 'shallots', note: 'thinly sliced, soaked in ice water 10 minutes, drained' },
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
                { amount: 2, name: 'fresh red chilies', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Herbs — Phú Yên quantities',
            items: [
                { amount: 1, name: 'very large bunch Vietnamese coriander (rau ram)', note: 'leaves only — used in greater quantity than any other Vietnamese g?i. In Phú Yên, rau ram is not a garnish but a primary ingredient.' },
                { amount: 0.5, name: 'bunch mint (húng l?i)', note: 'leaves only' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'M?m nhi dressing — Phú Yên specific',
            items: [
                { amount: 3, unit: 'tbsp', name: 'm?m nhi (Phú Yên first-press fish sauce)', note: 'the quality of the fish sauce is the quality of this salad. Use the best m?m nhi available.' },
                { amount: 2.5, unit: 'tbsp', name: 'fresh lime juice', note: 'about 2 limes — fresh-squeezed only' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'small amount — bridges the m?m nhi and the crab sweetness' },
                { amount: 1, unit: 'tbsp', name: 'crab roe (g?ch gh?)', note: 'stirred into the dressing if present — transforms it completely. Scoop from the top shell when opening the cooked crabs.' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'bánh tráng mè (sesame rice crackers)', note: 'Phú Yên-style — for scooping and wrapping' },
                { amount: 2, name: 'extra limes' },
                { amount: 1, name: 'bunch extra rau ram', note: 'extra leaves alongside' },
            ],
        },
    ],
    steps: [
        {
            title: 'Poach and pick the crabs — warm is the key',
            description: 'Bring a pot of water to a boil with lemongrass, ginger, and salt. Add the live crabs and poach for 8-10 minutes until the shells are fully orange and the flesh is set throughout. Remove and cool for 5 minutes — cool enough to handle, still warm to the touch. Remove the top shell and scoop out the roe if present — reserve this. Pick all the meat from the body, claws, and legs while the crab is still warm. The warm meat should be in distinct pieces, not shredded.',
            tip: 'Picking the crab while warm is the technique that produces the best g?i gh?. Warm crab meat separates cleanly along muscle fibers; cold crab compresses and tears. Work quickly. The crab should be warm but not hot when you pick — cool enough to handle for 5-7 minutes continuously.',
        },
        {
            title: 'Make the m?m nhi dressing with roe',
            description: 'Combine m?m nhi, fresh lime juice, sugar, water, garlic, chili, and sesame oil. Stir until sugar dissolves. If you have crab roe, stir it directly into the dressing — it emulsifies slightly and adds concentrated crab flavor throughout the dressing. Taste: the dressing should taste of m?m nhi depth first, lime brightness second, with the garlic and chili as supporting notes. Against the sweet crab, it should create a bright, complex contrast.',
            tip: 'The m?m nhi in this dressing produces a noticeably different result from standard fish sauce — the first press sweetness and complexity of m?m nhi creates a dressing that tastes almost as if butter has been added, though none has. This is the quality difference that makes Phú Yên g?i gh? specific to Phú Yên.',
        },
        {
            title: 'Dress the warm crab immediately',
            description: 'Place the warm picked crab meat in a large bowl. Pour half the dressing over immediately — the warm crab absorbs it within seconds. Toss gently to coat every piece. Let rest for 2 minutes. Add the remaining dressing and toss again. The crab should now be visibly glazed with the m?m nhi dressing and smell intensely of both the sea and the lime.',
            tip: 'Dressing warm crab is the technique that produces g?i gh? with the dressing integrated into the meat rather than coating only the surface. Cold crab dressed in the same sauce tastes like crab with sauce on top; warm crab dressed this way tastes like crab that is inherently flavorful.',
        },
        {
            title: 'Add salad components and herbs',
            description: 'Add the julienned green mango, soaked shallots, rau ram leaves, mint, spring onion, and sliced chili to the dressed crab. Toss gently — the crab pieces should remain intact, not shredded. Taste and adjust: more m?m nhi if the crab needs more savory depth, a squeeze more lime if flat, a pinch of sugar if too sharp from the green mango.',
            tip: 'The green mango in g?i gh? Phú Yên should be very sour — rock hard, pale green inside. If the mango has any sweetness, the salad loses the sharp contrast that makes it work against the rich crab. This is one of the salads where ingredient quality at each component matters as much as technique.',
        },
        {
            title: 'Plate and finish at the last moment',
            description: 'Transfer to a serving plate. Top with crushed peanuts, crispy fried shallots, and toasted sesame seeds — all added at the absolute last moment to preserve crunch. Scatter extra rau ram leaves. Serve immediately with sesame rice crackers and lime wedges. G?i gh? Phú Yên must be eaten within 10 minutes of plating — the crab releases moisture into the dressing and the salad softens. This is always a make-and-eat-immediately preparation.',
            tip: 'The Phú Yên eating ritual for g?i gh?: spoon onto a sesame cracker, add a leaf of rau ram, dip the assembled cracker into the remaining dressing that has pooled in the plate, eat in one bite. The cracker adds crunch; the rau ram amplifies the pepper note; the pooled dressing is the most intensely flavored element left on the plate.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
