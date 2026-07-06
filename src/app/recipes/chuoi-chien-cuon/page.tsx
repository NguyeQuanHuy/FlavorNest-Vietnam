'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chuoi-chien-cuon',
    title: 'Chu?i Chiên Cu?n (Crispy Fried Banana Rolls)',
    subtitle: 'Ripe bananas wrapped in spring roll wrappers with a touch of butter, brown sugar, and cinnamon then deep-fried until the exterior is shatteringly crispy and the banana inside has caramelized into a warm, jammy sweetness — the Vietnamese-inspired fried banana that is simultaneously a street food dessert, an afternoon snack, and the easiest impressive thing to make with a packet of spring roll wrappers.',
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/chuoi-chien-cuon.jpg',
    intro: `Chu?i chiên cu?n is the crispy fried banana roll — a preparation that takes the Southeast Asian tradition of fried banana (goreng pisang in Malaysia and Indonesia, kluay tod in Thailand, chu?i chiên in Vietnam) and applies the spring roll wrapper technique to produce a dessert that is more structurally elegant and more textually complex than the simple battered fried banana that appears throughout the region. In Vietnam, chu?i chiên (fried banana) in its simplest form is a street food staple — ripe bananas dipped in a rice flour batter and deep-fried — but the cu?n (rolled) version uses the spring roll wrapper instead of batter, producing an exterior that is dramatically crisper, more delicate, and more visually refined than the battered version. The preparation is one of the most immediately successful uses of Frühlingsrollen-Blätter (spring roll wrappers) that the Vietnamese diaspora in Europe has developed — the wheat wrappers available in every Asian supermarket in Germany, France, and the Netherlands provide the same shatteringly crispy result when used for sweet preparations as for savory ones, and the fried banana filling is forgiving, universally appealing, and infinitely variable in its seasonings. The addition of a small amount of butter, brown sugar, and cinnamon inside the roll before frying is the Vietnamese-fusion element that transforms the preparation from plain fried banana to something more complex: the butter enriches the caramelizing banana; the brown sugar deepens the caramel; and the cinnamon provides the specific warmth that connects Southeast Asian fried banana to the pastry tradition that French colonial influence introduced to Vietnamese cooking. Served with vanilla ice cream, honey, or the specific Vietnamese condensed milk and toasted sesame combination that appears at street food stalls, chu?i chiên cu?n is the fried dessert that disappears fastest from any serving plate.`,
    ingredientSections: [
        {
            title: 'Banana rolls',
            items: [
                { amount: 4, name: 'ripe bananas (chu?i chín)', note: 'spotted but still firm — overripe bananas become too soft and wet inside the wrapper during frying. Each banana is halved lengthwise, producing 8 half-banana rolls.' },
                { amount: 8, name: 'wheat spring roll wrappers (Frühlingsrollen-Blätter)', note: '20x20cm sheets — one per banana half' },
                { amount: 30, unit: 'g', name: 'unsalted butter', note: 'softened — a small amount inside each roll' },
                { amount: 2, unit: 'tbsp', name: 'brown sugar (du?ng nâu)', note: 'sprinkled inside the roll — deepens the caramel during frying' },
                { amount: 0.5, unit: 'tsp', name: 'cinnamon powder', note: 'optional — adds warmth and connects to the French-Vietnamese pastry tradition' },
                { amount: 1, name: 'egg', note: 'beaten — for sealing' },
            ],
        },
        {
            title: 'For frying',
            items: [
                { amount: 600, unit: 'ml', name: 'neutral oil', note: 'for deep frying at 180°C' },
            ],
        },
        {
            title: 'Serving options — choose one or serve all',
            items: [
                { amount: 4, unit: 'scoops', name: 'vanilla ice cream', note: 'the most crowd-pleasing combination — hot crispy roll + cold ice cream' },
                { amount: 4, unit: 'tbsp', name: 'honey', note: 'drizzled over immediately after frying' },
                { amount: 4, unit: 'tbsp', name: 'sweetened condensed milk (s?a d?c)', note: 'the Vietnamese street food option — drizzled generously' },
                { amount: 3, unit: 'tbsp', name: 'toasted sesame seeds', note: 'scattered over — the Vietnamese dessert finishing element' },
                { amount: 1, unit: 'tsp', name: 'cinnamon sugar', note: 'dusted over freshly fried rolls' },
                { amount: 1, name: 'small bunch mint', note: 'for freshness alongside' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the bananas',
            description: 'Peel each banana and halve lengthwise. The banana should be ripe enough to be sweet and fragrant but still firm enough to hold its shape inside the wrapper during frying — spotted bananas at the peak of ripeness are ideal. Overripe bananas release too much moisture during frying, making the wrapper soggy from within. If the bananas are very large, halve them crosswise as well to produce shorter, more manageable rolls.',
            tip: 'The ripeness calibration for chu?i chiên cu?n — spotted but firm — is the single most important factor in producing rolls where the wrapper stays crispy. Underripe bananas do not have enough sugar to caramelize appealingly inside the wrapper. Overripe bananas release moisture that softens the wrapper from within during the frying period. The ideal banana: golden yellow with brown spots, fragrant, firm when gently pressed.',
        },
        {
            title: 'Assemble the rolls',
            description: 'Lay one spring roll wrapper in a diamond orientation on a clean flat surface. Spread a small amount of softened butter across the center of the wrapper. Sprinkle a little brown sugar and cinnamon over the butter. Place one banana half diagonally across the center. Fold the bottom corner up over the banana. Fold both sides inward firmly. Roll upward toward the top corner, keeping the roll as tight as possible. Seal the top corner with beaten egg. Press firmly and leave seam-side down for 2 minutes before frying.',
            tip: 'The tight rolling of chu?i chiên cu?n is more important than for savory rolls because the banana inside contracts slightly during frying as its moisture evaporates. A tightly rolled wrapper maintains contact with the banana surface throughout the frying period and produces an evenly caramelized result. A loosely rolled wrapper develops gaps between the wrapper and the banana, producing an uneven, partly hollow result.',
        },
        {
            title: 'Fry at 180°C — 3-4 minutes',
            description: 'Heat oil to 180°C. Fry the banana rolls seam-side down first — 4 rolls at a time maximum. Fry for 2 minutes seam-side down without moving — the initial contact with the hot oil seals the seam and prevents unrolling. Turn and fry for 1.5-2 more minutes until uniformly deep golden. The banana rolls fry faster than savory spring rolls because the sugar in both the banana and the brown sugar accelerates caramelization. Watch from the 3-minute mark.',
            tip: 'The 180°C frying temperature for chu?i chiên cu?n is slightly higher than the 175°C used for nem rán because the sugar content of the banana filling requires faster, hotter frying to caramelize the interior without over-cooking the wrapper exterior. At 175°C, the banana takes too long to heat through and the wrapper can over-brown before the interior has caramelized.',
        },
        {
            title: 'Drain and serve immediately',
            description: 'Remove the rolls when uniformly deep golden — they continue darkening for 30 seconds after leaving the oil. Drain on a rack briefly — not paper towels, which trap steam and soften the bottom of the wrapper. Serve within 2 minutes of frying. The crispy wrapper and the caramelized banana interior are at their best in the first 2 minutes; beyond 5 minutes the banana moisture begins migrating outward and softening the wrapper.',
            tip: 'Chu?i chiên cu?n eaten within 2 minutes of leaving the oil — when the wrapper shatters and the banana inside is at maximum caramelized sweetness — is dramatically better than the same roll 10 minutes later. This is consistently the most time-sensitive preparation in the dessert category. Organize the serving so each person eats their first roll within 60 seconds of it reaching the plate.',
        },
        {
            title: 'Serve with Vietnamese condensed milk — the street food way',
            description: 'For the Vietnamese street food version: drizzle sweetened condensed milk generously over the hot crispy rolls. Scatter toasted sesame seeds. Serve with additional condensed milk for dipping. The condensed milk against the hot, slightly bitter caramelized banana and the crispy wheat wrapper is the specifically Vietnamese dessert combination that appears at street food stalls from Hà N?i to Sài Gòn. For the European fusion version: serve alongside a scoop of vanilla ice cream and a drizzle of honey. For maximum impact: serve both options and let each person choose.',
            tip: 'Sweetened condensed milk (s?a d?c Ông Th? — Longevity Brand — is the specific brand that Vietnamese people associate with this use) is the Vietnamese dessert condiment that most clearly connects the fried banana to its cultural origin. Available at any Asian supermarket in Germany and throughout Europe, it is the condiment that transforms chu?i chiên cu?n from a generic fried banana dessert into a specifically Vietnamese one.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
