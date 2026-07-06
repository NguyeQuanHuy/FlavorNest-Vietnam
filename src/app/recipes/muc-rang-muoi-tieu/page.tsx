'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-rang-muoi-tieu',
    title: 'M?c Rang Mu?i Tiêu (Salt and Pepper Squid)',
    subtitle: 'Squid rings and tentacles coated in seasoned rice flour and deep-fried until shatteringly crispy — tossed immediately in a wok with caramelized garlic slices, fresh chili, and a salt-pepper mixture that adheres to the crispy surface. The Vietnamese salt pepper squid where the coating shatters and the interior stays sweet and tender.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/muc-rang-muoi-tieu.jpg',
    intro: `M?c rang mu?i tiêu is the Vietnamese salt and pepper squid — a preparation that applies the fry-then-toss-in-aromatics technique (the same structure as cá trê chiên s? ?t and chim cút chiên giòn) to squid, producing a dish that is one of the most reliably crowd-pleasing preparations in the Vietnamese nh?u repertoire. The preparation has two phases that must each succeed independently. Phase one: the squid is coated in seasoned rice flour and deep-fried at 185°C for exactly 2-3 minutes — the time required to shatter the coating and cook the squid through while retaining its tenderness. Phase two: the fried squid is tossed in a hot wok with caramelized garlic slices, fresh green and red chili, and a specifically proportioned salt-pepper mixture for 45-60 seconds — long enough for the aromatics to adhere to the crispy coating surface, not long enough for the steam from the aromatics to soften it. The coating for m?c rang mu?i tiêu is rice flour rather than the wheat flour of most Western salt and pepper squid preparations: rice flour produces a crisper, more delicate coating that shatters more completely when bitten and that carries the salt-pepper mixture in a thinner layer that does not overwhelm the squid underneath. The black pepper in the salt-pepper mixture is coarsely ground rather than fine — the larger pepper fragments provide both more heat and more visible texture against the pale crispy coating. The Vietnamese-specific addition to what might otherwise be a Cantonese salt-pepper preparation is the fish sauce drizzled into the wok toss at the final moment, which provides the umami depth that transforms the preparation from simply salty and peppery to complex and specifically Vietnamese.`,
    ingredientSections: [
        {
            title: 'Squid',
            items: [
                { amount: 600, unit: 'g', name: 'fresh squid (m?c tuoi)', note: 'body tubes cut into rings 1.5cm wide, tentacles in clusters. Pat completely and firmly dry before coating.' },
                { amount: 600, unit: 'ml', name: 'neutral oil', note: 'for deep frying at 185°C' },
            ],
        },
        {
            title: 'Crispy rice flour coating',
            items: [
                { amount: 100, unit: 'g', name: 'rice flour (b?t g?o)', note: 'produces the shatteringly crispy result' },
                { amount: 30, unit: 'g', name: 'cornstarch (b?t b?p)', note: 'adds extra crispiness' },
                { amount: 0.5, unit: 'tsp', name: 'baking powder' },
                { amount: 1, unit: 'tsp', name: 'coarse salt' },
                { amount: 1, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives the golden color' },
                { amount: 0.5, unit: 'tsp', name: 'five-spice powder (ngu v? huong)', note: 'small amount — adds the background aromatic warmth' },
            ],
        },
        {
            title: 'Salt and pepper wok toss',
            items: [
                { amount: 6, name: 'garlic cloves', note: 'thinly sliced — caramelized in the wok before the squid returns' },
                { amount: 2, name: 'fresh green chilies', note: 'sliced — the green chili is specifically important in salt pepper preparations' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced diagonally' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'sliced — for heat' },
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for the wok toss' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'the Vietnamese addition to the salt-pepper formula — added at the final moment' },
            ],
        },
        {
            title: 'Salt-pepper finishing mixture',
            items: [
                { amount: 1, unit: 'tsp', name: 'coarse sea salt', note: 'flaky rather than fine — visible on the surface' },
                { amount: 1.5, unit: 'tsp', name: 'black pepper', note: 'coarsely ground — not fine powder. The texture is visible and the heat more pronounced.' },
                { amount: 0.5, unit: 'tsp', name: 'five-spice powder' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'small amount — rounds the salt-pepper sharpness' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'head butter lettuce', note: 'leaves for wrapping' },
            ],
        },
    ],
    steps: [
        {
            title: 'Dry the squid completely',
            description: 'Pat the squid rings and tentacles between paper towels until the surface is completely dry — press firmly. Any remaining moisture will prevent the rice flour coating from adhering properly and will cause dangerous splattering in the hot oil. The squid should feel slightly tacky to the touch after drying — this tackiness is what allows the rice flour to adhere without an egg wash.',
            tip: 'The dryness of the squid before coating is even more critical for rang mu?i tiêu than for m?c xào s? ?t because the squid will be in contact with 185°C oil rather than a hot wok. Moisture in 185°C oil produces violent splattering that can cause serious burns. Press the squid against the paper towels firmly enough to feel that the surface has transferred its moisture to the towel.',
        },
        {
            title: 'Coat in seasoned rice flour',
            description: 'Combine rice flour, cornstarch, baking powder, salt, white pepper, turmeric, and five-spice in a shallow bowl. Working in small batches, toss the dried squid in the flour mixture. Press the flour firmly onto each piece — it must adhere in a thin, even layer. Tap off any excess — a thick coating produces clumping during frying rather than the individual crispy pieces that make the preparation what it is. Place the coated squid on a rack for 5 minutes before frying.',
            tip: 'The 5-minute rack rest after coating allows the rice flour to partially hydrate from the slight moisture remaining in the squid surface — this produces a coating that adheres more firmly during frying than coating applied directly before the oil. The coated surface should feel slightly tacky rather than completely dry when the squid enters the oil.',
        },
        {
            title: 'Deep-fry at 185°C — exactly 2-3 minutes',
            description: 'Heat oil to 185°C. Fry the coated squid in batches of about 150g — do not crowd. Fry for exactly 2-3 minutes. At 2 minutes, the coating should be golden and just beginning to crisp fully. At 3 minutes, the coating is shatteringly crispy and the squid inside just cooked through. Remove and drain on paper towels. The coating should be pale golden to medium golden — not deep brown, which indicates the squid inside has begun to toughen.',
            tip: 'The 185°C temperature for m?c rang mu?i tiêu is slightly lower than the 190°C used for chim cút chiên giòn — squid is more delicate than quail and the slightly lower temperature gives the coating time to crisp before the squid interior overcooks. At 190°C, the squid can go from tender to tough between the time the coating is perfectly golden and the time it is removed from the oil.',
        },
        {
            title: 'Combine the salt-pepper mixture and set up the wok',
            description: 'Combine coarse salt, coarsely ground black pepper, five-spice, and sugar in a small bowl. Heat a wok over maximum heat. Add oil. Fry the sliced garlic for 30-45 seconds until golden at the edges. Add all the sliced chilies and spring onion pieces — fry 15 seconds. Have the fried squid, salt-pepper mixture, and fish sauce ready beside the wok. The entire toss sequence takes 60 seconds — everything must be within reach.',
            tip: 'The coarsely ground black pepper in the salt-pepper mixture is the element that most clearly distinguishes Vietnamese rang mu?i tiêu from Western salt and pepper preparations. Visible pepper fragments against the pale golden coating provide both visual texture and more pronounced pepper heat than fine-ground pepper would. Grind the pepper with a mortar and pestle for the coarsest result.',
        },
        {
            title: 'Toss in aromatics — 45-60 seconds maximum',
            description: 'Add all the fried squid to the hot wok with the garlic-chili base. Toss vigorously. After 20 seconds, scatter the salt-pepper mixture over the squid while tossing — it should adhere to the oily surface of the crispy coating. After 40 seconds, drizzle the fish sauce around the edge of the wok — it sizzles and immediately coats the squid with its umami depth. Toss 10 more seconds. Remove from heat at 60 seconds total.',
            tip: 'The fish sauce added around the wok edge rather than directly onto the squid is the technique that produces even distribution — the hot wok edge caramelizes the fish sauce as it hits and carries it as a flavor vapor over all the squid pieces simultaneously. Added directly onto the squid, the fish sauce pools unevenly.',
        },
        {
            title: 'Plate and serve immediately',
            description: 'Transfer to a serving plate in a single layer. The finished m?c rang mu?i tiêu: pale golden crispy coating with visible salt and black pepper fragments, caramelized garlic slices and chili pieces throughout, steam rising. Scatter rau ram. Serve with lime wedges and butter lettuce leaves. To eat: wrap a piece of squid in a lettuce leaf with rau ram, squeeze lime, eat in one bite. Or eat directly with chopsticks between mouthfuls of cold beer.',
            tip: 'M?c rang mu?i tiêu loses its defining crispiness within 8-10 minutes of the wok toss — serve and eat immediately. The preparation is specifically a serve-immediately-eat-immediately dish. At nh?u restaurants where this is a staple, orders are taken from the table and the dish arrives within 10 minutes — the frying and tossing happening continuously as orders come in, each batch eaten before the next is started.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
