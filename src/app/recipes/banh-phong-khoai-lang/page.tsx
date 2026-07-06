'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-phong-khoai-lang',
    title: 'Bánh Phồng Khoai Lang Tím (Purple Sweet Potato Crackers)',
    subtitle: 'Dried purple sweet potato crackers that expand in hot oil to a vivid violet-lavender color that is entirely natural — made from purple sweet potato purée, tapioca starch, and a small amount of coconut milk, sliced thin and sun-dried then fried to produce the most visually dramatic cracker in Vietnamese cooking.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '3 days',
    rating: 4.9,
    baseServings: 8,
    heroImage: '/images/recipes/banh-phong-khoai-lang.jpg',
    intro: `Bánh phồng khoai lang tím is the purple sweet potato cracker — a variation on the bánh phồng technique that replaces the shrimp paste base with purple sweet potato purée, producing a cracker that is simultaneously the most visually striking and the most naturally beautiful in the Vietnamese cracker repertoire. The purple-violet color that the anthocyanins in purple sweet potato produce is entirely natural — no artificial coloring, no added dye — and it deepens and intensifies during the frying process in a way that is one of the most dramatic visual transformations in Vietnamese home cooking: the pale lavender-grey dried cracker disc, placed into hot oil, expands to four times its size and simultaneously deepens to a vivid purple-violet that is the truest, most saturated version of the sweet potato's natural pigment. Purple sweet potato crackers are a more recent addition to the Vietnamese cracker tradition than the shrimp version — they appear at market stalls selling artisanal and naturally colored snacks, at the food gift shops that have proliferated in Vietnamese tourist areas, and at the breakfast tables of homes where someone has decided to make something beautiful as well as delicious. The flavor is different from shrimp crackers in a specific way: where bánh phồng tôm is savory, briny, and specifically marine, bánh phồng khoai lang tím is mildly sweet, slightly starchy, and carries the specific earthy-sweet flavor of purple sweet potato that is entirely its own. The coconut milk in the dough adds a gentle richness and a very slight coconut fragrance that complements the sweet potato character without competing with it. These crackers are served as a snack with a simple dipping sauce, as an accompaniment to salads and grilled dishes where their color provides visual contrast, or as the basis for the same open-face fresh roll assembly as the shrimp cracker version — where the purple color against the green herbs and pink shrimp produces one of the most beautiful Vietnamese food presentations possible.`,
    ingredientSections: [
        {
            title: 'Purple sweet potato dough',
            items: [
                { amount: 300, unit: 'g', name: 'purple sweet potato (khoai lang tím)', note: 'peeled, steamed until completely soft, mashed smooth. The deeper purple the variety, the more vivid the final cracker color.' },
                { amount: 250, unit: 'g', name: 'tapioca starch (bột năng)', note: 'the primary starch for expansion' },
                { amount: 30, unit: 'g', name: 'glutinous rice flour (bột nếp)', note: 'for cohesion' },
                { amount: 80, unit: 'ml', name: 'coconut milk (nước cốt dừa)', note: 'adds gentle richness and coconut fragrance' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1.5, unit: 'tsp', name: 'sugar', note: 'slightly more than the shrimp version — complements the sweet potato' },
                { amount: 1, unit: 'tsp', name: 'baking powder' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Optional flavor additions',
            items: [
                { amount: 1, unit: 'tsp', name: 'pandan extract', note: 'optional — adds a subtle fragrance that pairs well with the sweet potato and coconut' },
                { amount: 0.5, unit: 'tsp', name: 'vanilla extract', note: 'optional — enhances the sweet potato sweetness' },
            ],
        },
        {
            title: 'For frying',
            items: [
                { amount: 500, unit: 'ml', name: 'neutral oil', note: 'for deep frying at 190°C' },
            ],
        },
        {
            title: 'Dipping sauce — sweet chili',
            items: [
                { amount: 4, unit: 'tbsp', name: 'sweet chili sauce (tương ớt ngọt)', note: 'the sweetness of the sweet chili sauce complements the sweet potato character' },
                { amount: 1, unit: 'tbsp', name: 'fresh lime juice', note: 'brightens the sweet chili sauce' },
                { amount: 1, unit: 'tsp', name: 'fish sauce', note: 'adds savory depth' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced — for additional heat' },
            ],
        },
    ],
    steps: [
        {
            title: 'Day 1: Make the purple sweet potato dough',
            description: 'Steam the peeled purple sweet potato pieces until completely soft — 20-25 minutes. Mash immediately while hot until completely smooth — no lumps. The hot mash should be deep purple. Combine tapioca starch, glutinous rice flour, baking powder, salt, sugar, and pepper in a large bowl. Add the warm purple sweet potato mash. Pour coconut milk gradually while mixing. Knead into a smooth, pliable dough that holds its shape. The dough will be a deep purple-grey color — it lightens significantly during steaming and deepens dramatically during frying.',
            tip: 'Using the sweet potato while still hot from steaming is the technique that produces the most integrated dough — the warm starch in the sweet potato begins absorbing the tapioca starch immediately and produces a more cohesive, smoother dough than cold mashed sweet potato would. Work quickly after mashing.',
        },
        {
            title: 'Day 1: Shape into logs and steam',
            description: 'Divide the dough into 3-4 portions. Roll each into a smooth log 4-5cm in diameter. Wrap tightly in plastic wrap. Steam over boiling water for 30-35 minutes until completely set throughout. The dough will lighten slightly in color during steaming — the vivid purple-grey darkening slightly but losing some of the rawness of the uncooked dough. Cool completely — minimum 2 hours or overnight refrigerated before slicing.',
            tip: 'The color change during steaming is significant — the vivid purple of the raw dough becomes a lighter, slightly duller purple-lavender when cooked. This color change is normal and desirable: the cooked dough color represents what the dried cracker will look like, and the fried cracker will be dramatically more vivid than the steamed dough color suggests.',
        },
        {
            title: 'Day 1-2: Slice 2-3mm thin',
            description: 'Using a very sharp knife or mandoline at 2-3mm, slice the cooled logs into rounds. The purple sweet potato dough is slightly more delicate than the shrimp dough and requires a sharper blade. Each slice should be semi-transparent when held to light — the purple color visible through the thin disc. Arrange in single layers on drying racks or bamboo mats without overlapping.',
            tip: 'Purple sweet potato dough slices more cleanly than shrimp dough because the sweet potato starch is smoother and less fibrous than shrimp paste dough. A very sharp knife produces cleaner edges; a slightly dull knife compresses and tears the edge of the disc rather than cutting cleanly.',
        },
        {
            title: 'Day 2-3: Dry completely until rigid',
            description: 'SUN METHOD: Place in direct sunlight for 2 full days. The color during drying will fade slightly from the vivid steamed-dough purple to a paler lavender-grey. This fading is normal — the color deepens dramatically when fried. OVEN METHOD: 60-70°C with door slightly ajar for 6-8 hours. Test with the snap test: the dried disc should snap cleanly and completely with no bending. The dried discs can be stored in an airtight container for up to 3 months.',
            tip: 'The color of the dried cracker disc — pale lavender-grey, much lighter than expected — should not cause concern about the final fried color. The anthocyanin pigments in purple sweet potato are remarkably heat-stable and intensify dramatically when the cracker hits 190°C oil. The transformation from pale dried disc to vivid fried cracker is one of the most dramatic color changes in Vietnamese cooking.',
        },
        {
            title: 'Fry at 190°C — watch the purple bloom',
            description: 'Heat oil to 190°C. Drop one dried cracker as a test — it should expand fully in 3-5 seconds and simultaneously deepen to a vivid violet-purple that is the most saturated version of the color seen at any point in the process. The color deepening during frying is the anthocyanin concentration as the water evaporates from the expanding cracker. Fry 3-4 at a time. Drain on paper towels. The finished crackers: vivid purple-violet, airy and expanded, with the specific mild sweet potato-coconut flavor that is entirely their own.',
            tip: 'The color deepening of purple sweet potato crackers in 190°C oil is the visual moment that makes bánh phồng khoai lang tím the most dramatic cracker preparation to demonstrate at a table. The pale lavender disc entering the oil and emerging as a vivid purple-violet cracker in 5 seconds is a demonstration of natural food chemistry that never fails to produce delight in anyone watching.',
        },
        {
            title: 'Serve and use',
            description: 'Serve the vivid purple crackers with the sweet chili-lime dipping sauce, plain as a snack, or as the base for an open-face fresh roll assembly where the purple cracker against green herbs, pink shrimp, and white vermicelli produces a naturally colorful plate that no artificial coloring could improve. The crackers are at their crispiest and most vivid within 10-15 minutes of frying — serve promptly. Store unfired dried crackers in an airtight container for up to 3 months and fry to order.',
            tip: 'Bánh phồng khoai lang tím presented alongside bánh phồng tôm (shrimp crackers) on the same plate — the vivid purple alongside the pale gold — is the most visually striking cracker presentation in Vietnamese cooking and one that requires no other decoration to be beautiful. The contrast of the two natural colors is all the visual design the plate needs.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
