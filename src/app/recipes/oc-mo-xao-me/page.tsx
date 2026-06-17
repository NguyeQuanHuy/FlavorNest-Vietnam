'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'oc-mo-xao-me',
    title: 'Ốc Mỡ Xào Me (Periwinkle Snails Stir-Fried with Tamarind)',
    subtitle: 'Small periwinkle snails stir-fried at high heat with a tamarind sauce of palm sugar and fish sauce until the sweet-sour glaze coats every shell and pools inside each aperture — the southern Vietnamese snail dish where the sauce is the point and the snail is the vehicle that delivers it.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/oc-mo-xao-me.jpg',
    intro: `Ốc mỡ xào me is the tamarind periwinkle of southern Vietnamese street food — a dish that takes ốc mỡ (the small, dark-shelled periwinkle snail found in estuaries and coastal mudflats from Vũng Tàu to Kiên Giang) and cooks it in a tamarind-palm sugar sauce that is simultaneously the most southern and the most addictive preparation in the ốc repertoire. Ốc mỡ — literally "fat snail," named for the glistening sheen of their dark shell rather than their fat content — are the smallest of the commonly eaten Vietnamese snail species, rarely exceeding 2-3cm, but produce a flavor that is more intensely marine than their size suggests. Their small size also means they are the perfect vehicle for sauce cooking: the tamarind-palm sugar glaze can enter each tiny shell completely in the wok, coating not just the exterior but filling the small space inside, so that each snail when sucked from the shell delivers a full mouthful of sauce along with the small, firm piece of snail meat. Xào me — stir-fried in tamarind sauce — is the preparation that most completely expresses the southern Vietnamese preference for sweet-sour combinations in shellfish. The tamarind provides the deep, fruity sourness that is warmer and more complex than lime juice; the palm sugar provides the Mekong Delta sweetness that white sugar cannot replicate; and the fish sauce provides the umami depth that ties them together into a sauce that, when reduced around the snails to a glossy, sticky glaze, is one of the most intensely flavored things in Vietnamese street food.`,
    ingredientSections: [
        {
            title: 'Snails',
            items: [
                { amount: 1, unit: 'kg', name: 'ốc mỡ (periwinkle snails / Nerita spp.)', note: 'alive — small, dark-shelled estuarine snails. Purge in salted water 1 hour. Available at Vietnamese and Asian seafood markets. Substitute: any small marine snails — whelks, winkles, or the smallest available periwinkles.' },
                { amount: 1, unit: 'tbsp', name: 'salt', note: 'for the purging water' },
            ],
        },
        {
            title: 'Tamarind sauce',
            items: [
                { amount: 50, unit: 'g', name: 'tamarind paste (me chua)', note: 'dissolved in 150ml warm water, strained — the primary souring and flavoring agent' },
                { amount: 3, unit: 'tbsp', name: 'palm sugar (đường thốt nốt)', note: 'the Mekong Delta sweetener — darker and more complex than white sugar' },
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar', note: 'additional balance' },
                { amount: 2, unit: 'tbsp', name: 'water', note: 'to adjust consistency if the sauce reduces too quickly' },
            ],
        },
        {
            title: 'Aromatics',
            items: [
                { amount: 6, name: 'garlic cloves', note: 'thinly sliced — not minced, slices caramelize better at wok temperature' },
                { amount: 4, name: 'shallots', note: 'thinly sliced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced diagonally — for color' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 4, name: 'kaffir lime leaves', note: 'finely shredded — added at the end' },
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, extra sliced' },
                { amount: 8, name: 'toothpicks' },
                { amount: 1, name: 'bowl warm water with lime', note: 'finger bowl' },
            ],
        },
    ],
    steps: [
        {
            title: 'Purge and prepare the snails',
            description: 'Place ốc mỡ in salted water for 1 hour. The small size of periwinkles means they purge faster than larger snails — 1 hour is sufficient. Drain and rinse under cold running water, scrubbing the shells briefly. The dark, shiny shells should look clean and the snails should be active. Because ốc mỡ are so small, there is no need to break the shell tip as with ốc bươu — the small aperture naturally allows the sauce to enter during wok cooking.',
            tip: 'Ốc mỡ shells are naturally very smooth and shiny — this smoothness is what allows the tamarind glaze to coat them evenly rather than pooling in rough patches. The smooth shell surface is part of what makes the finished dish visually appealing — each snail glazed in the dark tamarind sauce like a small lacquered bead.',
        },
        {
            title: 'Make and balance the tamarind sauce',
            description: 'Dissolve tamarind paste in 150ml warm water, pressing until fully incorporated. Strain through a fine sieve — the strained liquid should be thick, dark, and intensely sour. Combine with palm sugar, fish sauce, and additional sugar. Stir until the palm sugar dissolves. Taste: the sauce before cooking should be very sour, quite sweet, and savory — deliberately more assertive than the finished dish will be, because the reduction in the wok will concentrate and balance all three elements. Adjust sourness or sweetness if needed.',
            tip: 'Palm sugar for ốc mỡ xào me produces a darker, more caramel-forward tamarind sauce than white sugar. The palm sugar's specific flavor compounds caramelize differently in the wok heat and produce a sauce color — deep mahogany — that white sugar does not achieve. If palm sugar is unavailable, dark brown sugar is the closest substitute.',
        },
        {
            title: 'Stir-fry aromatics until golden',
            description: 'Heat wok over maximum heat until smoking. Add oil. Add sliced garlic and shallots — fry for 45-60 seconds until golden at the edges. The garlic slices should be golden-to-slightly-charred at the edges — for ốc mỡ xào me specifically this slight char is intentional and adds a bitter note that balances the sweet tamarind. Add minced bird\'s eye chili and fry 20 seconds.',
            tip: 'Sliced garlic rather than minced is the technique for this dish — sliced garlic caramelizes evenly and some pieces become slightly crispy in the hot oil, providing textural contrast to the saucy snails. Minced garlic burns too quickly at these temperatures before the snails go in.',
        },
        {
            title: 'Add snails and toss',
            description: 'Add all the drained periwinkles to the wok at once. The temperature will drop significantly from the weight of the snails — increase to maximum heat immediately. Toss vigorously for 2 minutes until every snail is coated in the aromatic oil and heated through. The small size of ốc mỡ means they heat through quickly — do not leave on heat too long before the sauce goes in.',
            tip: 'The rapid heating of small periwinkles in the hot wok is the step that opens the aperture of each snail slightly — the thermal shock causes the snail to retract and the opening to widen briefly, which is the moment the sauce needs to enter. The tossing motion ensures every snail has this brief aperture-opening experience before the sauce goes in.',
        },
        {
            title: 'Add tamarind sauce and reduce to a glaze',
            description: 'Pour the tamarind sauce over the snails. It will bubble aggressively at wok temperature. Toss to coat every snail. Cook over high heat, tossing continuously, for 3-4 minutes until the sauce reduces from a liquid to a thick, sticky glaze that clings to each shell and pools in the apertures. The wok should be nearly dry — only the glaze remaining, coating everything. If the sauce reduces too quickly before the snails are evenly coated, add the 2 tablespoons of water and continue.',
            tip: 'The visual endpoint of ốc mỡ xào me: each small snail should be individually glazed in the dark tamarind-palm sugar sauce, visibly glistening, with no excess sauce pooling at the bottom of the wok. The snails should look like small dark lacquered spheres — uniform and glossy. This is the correct result.',
        },
        {
            title: 'Finish and serve immediately',
            description: 'Add shredded kaffir lime leaves, spring onion pieces, sesame oil, and black pepper in the final 30 seconds. Toss once more. Transfer immediately to a serving plate — ốc mỡ in tamarind sauce continues cooking from residual wok heat and the glaze will over-reduce if left. Scatter rau răm, sliced fresh chili, and lime wedges. Serve with toothpicks and finger bowls. To eat: pick up each snail with fingers, place the opening to the lips, and suck — the snail meat and the tamarind glaze pooled inside come out together. This is the eating experience the entire preparation was designed to produce.',
            tip: 'The moment when the snail meat and the pooled tamarind glaze arrive in the mouth simultaneously — the small firm snail piece and the concentrated sweet-sour-savory sauce together — is the specific pleasure of ốc mỡ xào me. The snail is the vehicle; the sauce is the destination. But the vehicle is necessary — without the small snail shell concentrating the sauce inside, the tamarind glaze alone would be merely a sauce. Together they produce something specific to this dish.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
