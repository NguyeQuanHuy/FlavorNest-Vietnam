'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-com-rang-muoi-me',
    title: 'Cá Cơm Rang Muối Mè (Dry-Fried Anchovies with Salt and Sesame)',
    subtitle: 'Dried anchovies pan-fried without oil until golden and crackling, then tossed with toasted sesame, garlic, chili, and a small amount of sugar — the Vietnamese pantry staple that keeps for weeks, eats as a snack, accompanies congee, and provides the salty-crunchy element that makes a plain rice meal complete.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.8,
    baseServings: 6,
    heroImage: '/images/recipes/ca-com-rang-muoi-me.jpg',
    intro: `Cá cơm rang muối mè is the dry-fried sesame anchovy preparation that occupies a specific and important position in Vietnamese everyday cooking — a preparation made from dried rather than fresh anchovies (cá cơm khô), requiring no oil, no elaborate technique, and almost no time, that produces a shelf-stable, intensely flavored, endlessly versatile food that can be eaten as a snack with beer, spooned over congee as a topping, placed alongside plain rice as the sole accompaniment, or used as a seasoning element in salads and other dishes. The preparation belongs to the category of Vietnamese pantry items that experienced home cooks keep permanently available — alongside mắm ruốc, hành phi, and tôm khô — because they solve the problem of the quick meal, the accompaniment for plain food, and the snack between meals simultaneously. Cá cơm khô (dried anchovies) are the same species as the fresh anchovies used in cá cơm kho tiêu and cá cơm chiên giòn, preserved through salting and sun-drying into a product that is shelf-stable for months, intensely savory, and specifically suited to dry-frying — a technique where the fish is placed in a dry wok or pan over medium heat and fried in its own remaining fat content without additional oil, until the moisture has completely evaporated and the exterior is golden, crispy, and shelf-stable. The sesame seeds toasted alongside the anchovies in the final phase provide the specific nutty-aromatic dimension that distinguishes cá cơm rang muối mè from plain fried dried anchovies — the sesame and the dried anchovy together produce a combination that Vietnamese people associate with specific comfort food memories: the smell of sesame and dried fish together in a wok, which in Vietnam means a grandmother's kitchen, a simple childhood breakfast of congee and this topping, or the specific pleasure of a late-night snack eaten directly from the jar.`,
    ingredientSections: [
        {
            title: 'Dried anchovies',
            items: [
                { amount: 200, unit: 'g', name: 'dried anchovies (cá cơm khô)', note: 'the small variety — 3-5cm. Available at Asian supermarkets. Check for freshness: should smell of clean dried fish, not rancid oil.' },
            ],
        },
        {
            title: 'Dry-fry seasonings',
            items: [
                { amount: 4, unit: 'tbsp', name: 'toasted sesame seeds (mè rang)', note: 'white sesame — toasted until golden and fragrant' },
                { amount: 4, name: 'garlic cloves', note: 'very thinly sliced — added to the dry-frying pan' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'dried or fresh, sliced' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar', note: 'added in the last 2 minutes — caramelizes onto the anchovies' },
                { amount: 0.5, unit: 'tsp', name: 'coarse salt', note: 'for additional seasoning if needed after tasting' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'drizzled over at the very end' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'optional — a small amount adds umami depth' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice or congee (cháo)', note: 'the primary vehicle for cá cơm rang muối mè' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Sort and check the dried anchovies',
            description: 'Pick through the dried anchovies and remove any that have discolored or smell rancid — a few poor-quality fish in the batch will affect the flavor of the entire preparation. Taste one raw anchovy: it should taste of clean, concentrated sea salt and dried fish, not bitter or rancid. If the anchovies taste very salty, soak in cold water for 5 minutes and drain thoroughly before dry-frying — this reduces the salt level and prevents the finished preparation from being over-salty.',
            tip: 'The salt check for dried anchovies before dry-frying is the technique that prevents the most common failure of cá cơm rang muối mè — excessive saltiness. Different brands and production batches of dried anchovies vary significantly in salt level, and a batch that is already heavily salted will become inedibly salty once concentrated by dry-frying and sweetened by the sugar. The 5-minute water soak is the quick fix that allows almost any dried anchovy to produce a well-balanced result.',
        },
        {
            title: 'Dry-fry without oil — medium heat, 8-10 minutes',
            description: 'Place the dried anchovies in a cold, dry wok or wide pan. Turn the heat to medium. Do not add oil. Stir or toss continuously as the pan heats — the anchovies will begin to release a small amount of their own oil content as they heat. Fry for 8-10 minutes, stirring frequently, until the anchovies are golden, visibly dried further from the frying process, and produce a light crackling sound when stirred. Add the garlic slices and dried chili at 6 minutes — they will fry in the residual anchovy oil.',
            tip: 'The no-oil dry-frying technique for cá cơm rang is the specific method that produces a shelf-stable result — the goal is to remove all remaining moisture from the already-dried fish, concentrating the flavor further and producing a completely shelf-stable product. Added oil introduces moisture and produces a shorter shelf life. The anchovies fry in their own residual fat, which is enough for both cooking and flavour development.',
        },
        {
            title: 'Add sugar and toast sesame — final 2 minutes',
            description: 'When the anchovies are golden and crackling, scatter the sugar over the fish in the pan. Stir vigorously for 90 seconds — the sugar will melt and caramelize onto the anchovy surfaces, producing a thin, glossy coating that darkens and sweetens without burning if the heat remains at medium. Add the toasted sesame seeds in the final 30 seconds. Stir to distribute. Remove from heat immediately when the sugar coating is golden and the sesame is fragrant.',
            tip: 'The sugar addition for cá cơm rang muối mè in the final 2 minutes produces the thin caramel coating that balances the intense saltiness of the dried anchovies and gives the preparation its specific sweet-salty character. The same sweet-salty logic applies here as in the caramel-fish sauce combinations of kho cooking — in Vietnamese seasoning, sweetness and saltiness together produce something more complex than either alone.',
        },
        {
            title: 'Add fish sauce and sesame oil, cool completely',
            description: 'Off the heat, drizzle fish sauce (if using) and sesame oil over the finished anchovies. Toss to coat. Taste and adjust — the preparation should be salty, slightly sweet from the caramelized sugar, nutty from the sesame, garlicky, and mildly spicy. Spread on a plate or tray to cool completely before storing. Do not store in a sealed container while warm — residual steam will soften the crispy texture.',
            tip: 'Cooling cá cơm rang muối mè completely before storing is the technique that preserves the crispy texture for the full storage period. Stored warm in a jar, the steam condenses and softens the anchovies within 24 hours. Stored completely cool in an airtight jar, the preparation keeps its texture for 2-3 weeks at room temperature — the true pantry staple quality that makes it worth making in quantity.',
        },
        {
            title: 'Store and serve — the multiple uses of cá cơm rang',
            description: 'Transfer the cooled cá cơm rang muối mè to an airtight glass jar. Shelf life at room temperature: 2-3 weeks. Refrigerated: up to 2 months. Uses: eaten directly as a snack with cold beer; spooned over hot congee as a topping (the heat of the congee softens the sesame slightly and releases the aromatic oils); placed alongside plain steamed rice as the sole accompaniment — one teaspoon of cá cơm rang per mouthful of rice; used as a seasoning scattered over salads or stir-fried vegetables. The Vietnamese grandmother\'s kitchen always has a jar of this — the most useful single preparation in the collection.',
            tip: 'Cá cơm rang muối mè as a congee topping is the most transformative of its uses — the contrast between the silky, bland congee and the crunchy, intensely flavored anchovy-sesame topping is one of the most satisfying textural and flavor contrasts in Vietnamese breakfast eating. A bowl of plain rice congee with a spoonful of cá cơm rang on top is a complete breakfast with no other preparation needed.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
