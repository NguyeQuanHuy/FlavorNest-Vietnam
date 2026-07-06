'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cha-dau-phu',
    title: 'Chả Đậu Phụ (Vietnamese Tofu Patties)',
    subtitle: 'Firm tofu mashed with wood ear mushrooms, glass noodles, carrot, and seasoning, shaped into patties and pan-fried until golden outside and soft inside — the vegetarian chả that appears on every Vietnamese family table.',
    category: 'VEGETARIAN',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/cha-dau-phu.jpg',
    intro: `Chả đậu phụ is the tofu patty that Vietnamese cooks make when they want a vegetarian protein dish that is satisfying rather than merely adequate. Unlike plain fried tofu, chả đậu phụ has texture, structure, and the savory depth that comes from combining pressed tofu with wood ear mushrooms, glass noodles, and aromatics. The mixture is shaped into oval patties or rounds, then pan-fried in neutral oil until the outside develops a golden, slightly crispy crust while the inside stays soft and cohesive. It is eaten as a side dish with rice, used as a sandwich filling in bánh mì chay (vegetarian bánh mì), or served alongside a dipping sauce of soy sauce, ginger, and chili. Chả đậu phụ is the dish that demonstrates the Vietnamese capacity for making tofu genuinely delicious through technique and combination — not by hiding what it is, but by building on what it naturally offers.`,
    ingredientSections: [
        {
            title: 'Patty mixture',
            items: [
                { amount: 400, unit: 'g', name: 'firm tofu (đậu phụ cứng)', note: 'pressed dry — wrap in cloth and press under weight for 20 minutes minimum. Water content is the enemy of a cohesive patty.' },
                { amount: 20, unit: 'g', name: 'dried wood ear mushrooms (mộc nhĩ)', note: 'soaked in warm water 20 minutes, drained, excess water squeezed out, finely chopped' },
                { amount: 30, unit: 'g', name: 'dried glass noodles (miến)', note: 'soaked in cold water 10 minutes, drained, cut into 2cm pieces' },
                { amount: 1, name: 'small carrot', note: 'finely grated — about 50g. Squeeze out excess moisture after grating.' },
                { amount: 3, name: 'spring onions', note: 'finely sliced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sesame oil' },
                { amount: 1, unit: 'tbsp', name: 'cornstarch', note: 'binder — helps the patties hold together during frying' },
            ],
        },
        {
            title: 'For frying',
            items: [
                { amount: 4, unit: 'tbsp', name: 'neutral oil', note: 'enough to shallow-fry — 5mm depth in the pan' },
            ],
        },
        {
            title: 'Dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'rice vinegar' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: 'finely julienned' },
                { amount: 1, name: 'bird\'s eye chili, sliced' },
                { amount: 1, unit: 'tbsp', name: 'water' },
            ],
        },
    ],
    steps: [
        {
            title: 'Press and dry the tofu thoroughly',
            description: 'Wrap the tofu block in 3-4 layers of paper towels or a clean cloth. Place a heavy cutting board or pot on top. Press for minimum 20 minutes — the paper towels should be completely saturated. Change the towels and press for another 10 minutes if the tofu still feels very wet. The pressed tofu should feel significantly firmer and drier than when it came from the package. This step determines whether the patties hold together or fall apart during frying.',
            tip: 'Insufficiently pressed tofu produces patties that fall apart in the pan, cannot be flipped cleanly, and have a waterlogged interior. 30 minutes of pressing is ideal for most store-bought firm tofu.',
        },
        {
            title: 'Prepare and dry the add-ins',
            description: 'Grate the carrot finely and squeeze firmly between your hands over the sink — the moisture that comes out is significant and would make the mixture too wet. Chop the soaked wood ear mushrooms finely after squeezing out the soaking water. Drain the glass noodles and cut into 2cm pieces. All additions to the tofu mixture should be as dry as possible before combining.',
            tip: 'Squeezing moisture out of the grated carrot specifically is a step most recipes omit and then wonder why the patties do not hold together. Carrot contains a surprising amount of water.',
        },
        {
            title: 'Combine and mix the patty mixture',
            description: 'Crumble the pressed tofu into a large bowl — break it into rough chunks with your hands, not a fine paste. Add wood ear mushrooms, glass noodles, grated carrot, spring onion, shallots, and garlic. Add soy sauce, sugar, white pepper, sesame oil, and cornstarch. Mix with your hands until everything is evenly distributed and the mixture holds together when pressed. It should be slightly sticky and able to be shaped.',
            tip: 'Mix until combined but do not over-work the tofu into a smooth paste. Some texture from small tofu pieces and mushroom bits is correct. A uniform paste produces a dense, rubbery patty.',
        },
        {
            title: 'Shape the patties',
            description: 'Wet your hands slightly to prevent sticking. Take about 2 tablespoons of mixture and shape into an oval patty about 7cm long, 4cm wide, and 1.5cm thick. Press firmly to compact. Place on a plate. The patties should hold their shape when placed down — if they crumble, the mixture is too wet; add 1 more tablespoon of cornstarch and mix again.',
            tip: 'Uniform thickness (1.5cm) ensures even frying — thicker patties are raw inside when the outside is golden; thinner patties become too crispy and dry.',
        },
        {
            title: 'Shallow-fry until golden',
            description: 'Heat oil in a wide pan over medium heat until shimmering — about 170°C. Place the patties in the pan with space between them. Fry undisturbed for 3-4 minutes until the bottom is deeply golden. Flip carefully with a thin spatula — the patty should release cleanly when the crust has formed. Fry the other side for 3 minutes. Total time: 6-8 minutes per batch. The correct color: deep golden-brown on both flat sides.',
            tip: 'Medium heat rather than high heat is important here. High heat browns the exterior before the interior warms through. Medium heat gives time for the inside to heat fully before the outside over-colors.',
        },
        {
            title: 'Serve with dipping sauce',
            description: 'Drain on paper towels briefly. Serve hot with the ginger-soy dipping sauce alongside. Chả đậu phụ can also be served at room temperature — it holds its texture well as it cools. Uses: eaten as a side dish with rice, used as a protein in bánh mì chay, or added to a noodle bowl. The dipping sauce: combine soy sauce, rice vinegar, sugar, water, ginger, and chili — taste and adjust.',
            tip: 'Chả đậu phụ stores well in the refrigerator for 3 days. Reheat in a lightly oiled pan for 2 minutes per side — do not microwave, which makes them rubbery.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
