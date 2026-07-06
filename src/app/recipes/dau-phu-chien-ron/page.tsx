'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'dau-phu-chien-ron',
    title: 'Đậu Phụ Chiên Ròn (Vietnamese Crispy Fried Tofu)',
    subtitle: 'Firm tofu deep-fried until the outside is shatteringly crisp and golden and the inside stays soft and custardy — the fundamental Vietnamese tofu preparation that appears as a side dish, protein base, and street food snack.',
    category: 'VEGETARIAN',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/dau-phu-chien-ron.jpg',
    intro: `Đậu phụ chiên ròn is the Vietnamese fried tofu that is served at nearly every Vietnamese meal as either a side dish, a protein option for non-meat eaters, or a component in other dishes. The technique is not complicated but it has a single variable that determines everything: moisture. Tofu that is not sufficiently dried before frying will never become crispy — the surface moisture turns to steam in the hot oil and prevents crust formation. Vietnamese cooks press and dry their tofu for at least 30 minutes before frying. The oil must be deep enough to submerge the tofu and hot enough (180°C) that the exterior sets and crisps in the first few seconds of contact. The result, when done correctly, is a golden exterior that shatters between the teeth and a soft, almost custardy interior that provides the textural contrast that makes Vietnamese fried tofu different from every other fried tofu preparation. Served plain with dipping sauce, tossed in tomato sauce (đậu hũ sốt cà), or topped with scallion oil — đậu phụ chiên ròn is one of the most eaten foods in Vietnam.`,
    ingredientSections: [
        {
            title: 'Tofu',
            items: [
                { amount: 600, unit: 'g', name: 'firm tofu (đậu phụ cứng)', note: 'Vietnamese-style firm tofu preferred — denser than Japanese silken. Available at Asian grocers. Cut into 3x4cm rectangles, 2cm thick.' },
                { amount: 500, unit: 'ml', name: 'neutral oil', note: 'for deep frying — rice bran or vegetable. Must be deep enough to submerge the tofu pieces.' },
                { amount: 1, unit: 'tsp', name: 'salt', note: 'for seasoning the dried tofu before frying' },
            ],
        },
        {
            title: 'Scallion oil (dầu hành) — optional but recommended',
            items: [
                { amount: 4, name: 'spring onions', note: 'green parts only, thinly sliced' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil' },
                { amount: 0.25, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'rice vinegar' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, name: 'garlic clove, minced' },
                { amount: 1, name: 'bird\'s eye chili, sliced' },
                { amount: 1, unit: 'tbsp', name: 'water' },
            ],
        },
    ],
    steps: [
        {
            title: 'Press and dry the tofu — 30 minutes minimum',
            description: 'Remove tofu from packaging. Wrap in 3-4 layers of paper towels or a clean kitchen cloth. Place on a plate and put something heavy on top — a cast iron pan, a pot filled with water, several books. Press for 30 minutes. The paper towels will be completely saturated with water. Unwrap, cut into 3x4cm rectangles about 2cm thick. Pat each piece completely dry with fresh paper towels. Season lightly with salt on all surfaces.',
            tip: 'This is the step that separates crispy fried tofu from soggy fried tofu. There are no shortcuts. 30 minutes pressing, then thorough patting dry. The surface of each piece should feel dry to the touch — not tacky, not damp.',
        },
        {
            title: 'Heat the oil to 180°C',
            description: 'Pour oil into a wok or deep saucepan to a depth of at least 4cm — the tofu should be able to float. Heat to 180°C (a wooden chopstick inserted produces a steady stream of small bubbles; a drop of water vaporizes immediately on contact). At 180°C the tofu will begin to form a crust in the first 10 seconds. Lower than 160°C and the tofu absorbs oil before the crust can form.',
            tip: 'Test the oil temperature with a small piece of tofu before adding the full batch — if it sinks to the bottom and stays there, the oil is too cold. If it bobs to the surface immediately and sizzles aggressively, the temperature is correct.',
        },
        {
            title: 'Fry in small batches',
            description: 'Carefully lower tofu pieces into the hot oil using a slotted spoon or spider — never drop, always lower to avoid splashing. Fry no more than 6-8 pieces at a time — overcrowding drops the oil temperature and produces soggy tofu. Fry for 4-5 minutes, turning once at the halfway point, until golden-brown on all sides. The correct color: deep golden, not pale yellow (under-fried) and not dark brown (over-fried).',
            tip: 'Do not move the tofu for the first 2 minutes — let the crust form on the bottom before turning. Moving too early tears the forming crust.',
        },
        {
            title: 'Drain and rest',
            description: 'Remove with a slotted spoon and transfer to paper towels in a single layer. Never stack hot fried tofu — trapped steam from stacking destroys the crust within minutes. Rest for 2 minutes before serving. The crust continues to firm slightly as the surface moisture evaporates.',
            tip: 'If frying in multiple batches, allow the oil to return to 180°C between batches. Oil temperature drops significantly after adding cold tofu. A thermometer is the most reliable method; the chopstick test works as a backup.',
        },
        {
            title: 'Make scallion oil',
            description: 'Heat 4 tablespoons of neutral oil in a small pan until just beginning to smoke. Remove from heat immediately. Pour over the sliced spring onion greens in a bowl — the sizzle will cook them slightly and release the aromatic oils. Season with a pinch of salt. The scallion oil is drizzled over the fried tofu for the classic Vietnamese presentation.',
            tip: 'The oil must be hot enough to sizzle on contact with the spring onion. If it does not sizzle, it will not bloom the spring onion flavor and the oil will taste raw.',
        },
        {
            title: 'Serve with dipping sauce',
            description: 'Arrange the crispy tofu on a plate. Drizzle the warm scallion oil generously over the top — it will pool around the tofu and soak into the surface slightly. Scatter the cooked spring onion from the oil. Make the dipping sauce: combine soy sauce, rice vinegar, sugar, water, garlic, and chili. Serve immediately — fried tofu loses its crispness within 15 minutes of cooking. Eat it hot.',
            tip: 'Đậu phụ chiên ròn is the foundation for two other Vietnamese dishes: đậu hũ sốt cà (simmered in tomato sauce) and đậu hũ chiên sả (tossed with lemongrass). The frying technique in this recipe applies to both.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
