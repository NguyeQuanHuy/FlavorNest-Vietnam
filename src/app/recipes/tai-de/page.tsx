'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tai-de',
    title: 'Tái Dê (Vietnamese Goat Cured in Lime with Herbs)',
    subtitle: 'Thinly sliced goat meat cured in fresh lime juice and fish sauce until the surface firms and turns from raw pink to pale — tossed with Vietnamese coriander, fresh ginger, lemongrass, shallots, and roasted peanuts into a salad that is simultaneously the most direct and most sophisticated preparation of goat in Vietnamese cooking.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/tai-de.jpg',
    intro: `Tái dê is the Vietnamese raw-cured goat salad — a preparation in the tradition of gỏi tôm sống and bò tái chanh where the protein is cured by citric acid rather than cooked by heat, and where the freshness of the ingredient is both the prerequisite and the proof of quality. Tái means slightly cooked or cured — the same word used for bò tái in phở, where thin slices of raw beef are placed in the bowl and cooked by the boiling broth. In tái dê the curing agent is fresh lime juice combined with fish sauce, which denatures the surface proteins of the thinly sliced goat and produces a texture that is between raw and cooked — firm on the outside, still pink in the center of each slice, with the raw goat's mineral, grassy character transformed by the acid into something cleaner and brighter. Tái dê is specifically the preparation that tests the quality of goat meat most completely: the lime curing removes none of the flavor and does nothing to mask inferior or old meat. The goat must be from a young animal (less than 8 months old produces the most tender, least gamey result), freshly slaughtered or purchased that day, and sliced at the last possible moment before curing. In the central Vietnamese provinces where tái dê is most commonly eaten — Khánh Hòa, Phú Yên, Bình Định — the dish is a nhậu classic: served cold at the beginning of a long drinking session, with rice crackers for scooping and cold beer for washing down, the lime brightness and the herb intensity providing the contrast that makes the first beer of the evening taste better.`,
    ingredientSections: [
        {
            title: 'Goat',
            items: [
                { amount: 400, unit: 'g', name: 'goat leg or loin meat (thịt dê đùi hoặc thăn)', note: 'from a young goat under 8 months — the meat should be pale pink, fine-grained, with minimal strong smell. Must be very fresh — purchased the same day or the previous evening at most.' },
                { amount: 4, unit: 'tbsp', name: 'fresh lime juice', note: 'about 3 limes — the primary curing agent' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for initial curing seasoning' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Salad components',
            items: [
                { amount: 40, unit: 'g', name: 'fresh ginger', note: 'finely julienned — larger quantity than most salads, as ginger specifically complements goat' },
                { amount: 2, name: 'lemongrass stalks', note: 'inner stalk only, sliced into paper-thin rings' },
                { amount: 4, name: 'shallots', note: 'thinly sliced, soaked in ice water 10 minutes, drained' },
                { amount: 2, name: 'fresh red chilies', note: 'thinly sliced' },
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds' },
            ],
        },
        {
            title: 'Herbs — central Vietnamese quantities',
            items: [
                { amount: 1, name: 'very large bunch Vietnamese coriander (rau răm)', note: 'leaves only — the essential herb for goat, present in larger quantity than for any other gỏi' },
                { amount: 0.5, name: 'bunch perilla (tía tô)', note: 'leaves torn' },
                { amount: 0.5, name: 'bunch mint (húng lủi)', note: 'leaves only' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Final dressing',
            items: [
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'fresh lime juice', note: 'additional — to season the assembled salad' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground — finishing seasoning for goat' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'sesame rice crackers (bánh tráng mè)', note: 'for scooping' },
                { amount: 2, name: 'extra limes' },
                { amount: 1, name: 'extra fresh chili, sliced' },
                { amount: 1, name: 'bunch extra rau răm', note: 'served fresh alongside' },
            ],
        },
    ],
    steps: [
        {
            title: 'Freeze briefly for clean slicing',
            description: 'Place the goat meat in the freezer for 20-25 minutes until firm but not frozen through. Slice against the grain as thinly as possible — 2-3mm maximum. The meat should be cold and firm enough to slice cleanly without compressing or tearing. Thicker slices do not cure through completely in the lime juice; the surface firms while the center remains fully raw, producing an uneven texture.',
            tip: 'The 20-minute freeze is specifically for slicing precision. Goat meat is denser and more tightly grained than beef and benefits from being slightly firmer than room temperature when sliced. At 2-3mm the lime curing penetrates the entire slice in 10-12 minutes.',
        },
        {
            title: 'Cure in lime and fish sauce — 10-12 minutes',
            description: 'Place the sliced goat in a glass or ceramic bowl. Combine lime juice, fish sauce, and sugar. Pour over the goat and toss to coat every slice. Set a timer for 10 minutes. At 10 minutes, check one slice: the exterior should have turned from raw pink to a slightly paler, firmer color throughout — not white as in fully cooked meat, but clearly changed. The center should still be slightly pink. At 12 minutes the cure is complete. Do not leave longer — over-cured goat becomes tough.',
            tip: 'The 10-12 minute cure window for goat is longer than for shrimp (5-10 minutes) because the goat slices are denser and the proteins take longer to denature. Goat also benefits from a slightly more complete cure than seafood — the lime acid works alongside the herbs to harmonize the flavor of the meat.',
        },
        {
            title: 'Drain and reserve the curing liquid',
            description: 'Drain the cured goat slices, reserving 2 tablespoons of the curing liquid. The liquid is now infused with goat flavor, lime, and fish sauce — it is too good to discard and will be used in the final dressing. The drained goat slices should look slightly firmer and paler than they went in, with a surface that has clearly changed from raw.',
            tip: 'The reserved curing liquid added to the final dressing is the technique that ensures the lime-goat character is distributed throughout the salad. Without it, the dressing sits on the surface; with it, every component carries the lime-cured goat note.',
        },
        {
            title: 'Assemble with herbs and aromatics',
            description: 'In a wide bowl combine the drained cured goat, julienned ginger, paper-thin lemongrass rings, soaked shallots, rau răm, perilla, mint, and spring onion. Add the final dressing: fish sauce, remaining lime juice, sugar, sesame oil, black pepper, and the reserved curing liquid. Toss gently but thoroughly — the goat slices should remain intact, not shredded.',
            tip: 'Rau răm is the most important herb in tái dê — more important than in any other Vietnamese gỏi. The peppery, slightly medicinal character of Vietnamese coriander is specifically what neutralizes any remaining gamey note in the goat and replaces it with a bright, herbal fragrance. Use it generously — this is not the dish to be restrained with rau răm.',
        },
        {
            title: 'Rest 3 minutes then plate',
            description: 'Leave the assembled salad to rest for 3 minutes — the dressing penetrates the herbs and aromatics and the flavors come together. Transfer to a serving plate. Top with crushed peanuts, crispy fried shallots, and toasted sesame seeds at the last moment. Scatter sliced chili and extra rau răm. Serve with sesame rice crackers and extra limes.',
            tip: 'The 3-minute rest after assembly is specific to tái dê — unlike seafood gỏi which should be eaten the moment it is assembled, the slightly denser goat benefits from a few minutes for the lime and herbs to fully integrate. Beyond 10 minutes the salad begins to lose its freshness.',
        },
        {
            title: 'How to eat tái dê — the nhậu way',
            description: 'Spoon a generous amount of tái dê onto a sesame cracker. The salad should overflow the cracker slightly. Eat in one motion — the cracker crunching, the lime-bright goat, the peppery rau răm, the ginger heat, all simultaneously. Follow immediately with cold beer. Repeat. This is the central Vietnamese nhậu rhythm: one cracker, one bite, one sip of beer, conversation, repeat. Tái dê eaten slowly and carefully is not tái dê — it is eaten quickly, communally, and joyfully.',
            tip: 'The sesame cracker is not a vehicle — it is a structural element of the eating experience. The crunch of the cracker, the cold temperature of the lime-cured goat, the beer between bites: these three elements together produce the specific pleasure of tái dê as a nhậu dish. Serve with crackers as large as available and pile the goat high.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
