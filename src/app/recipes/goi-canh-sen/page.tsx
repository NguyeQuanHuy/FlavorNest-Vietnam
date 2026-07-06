'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-canh-sen',
    title: 'Gỏi Cánh Sen (Lotus Petal Salad)',
    subtitle: 'Fresh lotus petals tossed with shrimp, pork, roasted peanuts, Vietnamese herbs, and a light lime-fish sauce dressing — the seasonal Huế salad eaten only in the weeks the lotus blooms, and one of the most beautiful dishes in Vietnamese cuisine.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/goi-canh-sen.jpg',
    intro: `Gỏi cánh sen is the lotus petal salad of Huế — a dish so seasonal and so specific to its place of origin that most Vietnamese people outside the imperial city have never eaten it. It exists only in the six to eight weeks each summer when the lotus flowers of Hồ Tịnh Tâm, Hồ Tịnh Tâm, and the lotus ponds of the Huế citadel are in full bloom, and only if you can reach the petals before they fall. The pink and white petals of the Vietnamese lotus (sen Huế) are picked in the early morning before the heat opens them fully — petals harvested after 8am have lost the firm, slightly waxy texture that makes them usable in a salad. The petals themselves taste of almost nothing at first — a very faint floral note, a clean vegetal freshness — and this neutrality is precisely their value: they absorb the dressing without contributing sourness, sweetness, or bitterness of their own, while their texture — thin, slightly firm, with a beautiful translucence when held to light — creates a visual and sensory experience that no other salad ingredient can approach. Combined with shrimp, boiled pork, the sharp peppery note of rau răm, roasted peanuts, and a restrained lime-fish sauce dressing, gỏi cánh sen is the salad that most clearly demonstrates Huế cuisine's defining principle: beauty and restraint in equal measure. Outside Vietnam, lotus petals can occasionally be found at Vietnamese specialty markets during summer. Where they are unavailable, the recipe can be made with the closest substitute — very thin-petaled white roses, edible nasturtium, or the inner leaves of endive — but the result is categorically different. Gỏi cánh sen is a dish worth traveling to Huế for.`,
    ingredientSections: [
        {
            title: 'Lotus petals',
            items: [
                { amount: 80, unit: 'g', name: 'fresh lotus petals (cánh sen tươi)', note: 'pink or white Vietnamese lotus — harvested in the morning. Use the inner petals which are more tender. Available at Vietnamese markets in summer. Petals should be firm, not wilted.' },
                { amount: 1, unit: 'tbsp', name: 'fresh lime juice', note: 'for soaking the petals briefly to keep color bright' },
            ],
        },
        {
            title: 'Proteins',
            items: [
                { amount: 200, unit: 'g', name: 'fresh shrimp, medium', note: 'peeled, deveined — boiled 3 minutes in lightly salted water with a squeeze of lime, cooled, halved lengthwise' },
                { amount: 150, unit: 'g', name: 'pork belly or shoulder', note: 'boiled until just cooked with lemongrass and ginger, cooled completely, sliced 3mm thin against the grain' },
            ],
        },
        {
            title: 'Salad components',
            items: [
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed — not too fine, the texture is important' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 2, unit: 'tbsp', name: 'shallot-infused oil', note: 'drizzled over at the end' },
                { amount: 1, name: 'small cucumber', note: 'seeds removed, julienned finely — for freshness and crunch' },
            ],
        },
        {
            title: 'Herbs — restrained selection',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)', note: 'leaves only — the essential herb, its peppery heat is the main seasoning note in the salad' },
                { amount: 0.5, name: 'bunch mint (húng lủi)', note: 'leaves only' },
                { amount: 3, name: 'spring onions', note: 'green parts only, thinly sliced' },
            ],
        },
        {
            title: 'Dressing — light and restrained',
            items: [
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'water' },
                { amount: 1, name: 'garlic clove, minced', note: 'only one — the dressing for lotus petal salad is deliberately gentle' },
                { amount: 1, name: 'bird\'s eye chili, minced', note: 'optional — Huế style is mildly spiced to not compete with the petal fragrance' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 8, name: 'prawn crackers (bánh phồng tôm)', note: 'for scooping' },
                { amount: 6, name: 'fresh lotus petals, extra', note: 'for presentation — arranged around the plate unfurled' },
                { amount: 2, name: 'limes, extra wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Handle the lotus petals with care',
            description: 'Gently separate the lotus petals from the flower — work from the outside inward. Discard the outermost two layers which are tougher. Use the middle and inner petals which are tender, slightly translucent, and fragrant. Rinse very gently under cold water — lotus petals bruise easily and the bruised areas turn brown within minutes. Place immediately in cold water with a tablespoon of lime juice — the acid keeps the color bright. Do not leave the petals in water for more than 20 minutes or they become waterlogged.',
            tip: 'Handle lotus petals the way you would handle butterfly wings — they are genuinely fragile. One heavy-handed press produces a brown bruise that cannot be reversed. Use the fingertips only, never the whole hand.',
        },
        {
            title: 'Cook the proteins — cool completely',
            description: 'Boil pork belly in salted water with 1 lemongrass stalk and 2 ginger slices for 15 minutes. Cool completely in the liquid before removing and slicing 3mm thin. Boil shrimp in salted water with a squeeze of lime for exactly 3 minutes. Transfer immediately to ice water, peel, halve lengthwise. Both proteins must be at room temperature before assembling — warm proteins wilt the delicate lotus petals on contact.',
            tip: 'The lime in the shrimp cooking water keeps them from going grey and adds a subtle brightness to the flesh. It is a small detail that makes a visible difference in a salad where every element is on display.',
        },
        {
            title: 'Make the dressing — gentle for lotus',
            description: 'Combine fish sauce, lime juice, sugar, and water. Stir until sugar dissolves. Add the minced garlic and chili if using. Taste: the dressing for gỏi cánh sen should be noticeably lighter and less acidic than the dressing for gỏi xoài or gỏi bưởi — the lotus petals are delicate and a sharp dressing overwhelms their fragrance completely. The dressing should taste balanced and soft, not bright and punchy.',
            tip: 'This is the dressing where the restraint of Huế cuisine is most clear. Where a Saigon gỏi dressing might have 3 tablespoons of lime juice, gỏi cánh sen needs 2. The lotus petal fragrance is real but faint — protect it.',
        },
        {
            title: 'Tear the petals rather than cut',
            description: 'Drain the lotus petals from the lime water and gently pat dry with paper towels — handle each petal individually. Tear each petal gently into 2-3 pieces by hand rather than cutting with a knife. Tearing follows the natural cell structure of the petal and produces edges that do not brown as quickly as cut edges. The torn pieces should be roughly 3-4cm.',
            tip: 'Cut lotus petals begin to brown at the cut edge within 10 minutes. Torn petals hold their color significantly longer. This is not aesthetic fussiness — the visual of white or pink petals against the pink shrimp and green herbs is the soul of the dish.',
        },
        {
            title: 'Assemble at the last possible moment',
            description: 'In a wide bowl, combine the sliced pork, shrimp, julienned cucumber, rau răm, mint, and spring onion. Pour the dressing over and toss gently. Add the torn lotus petals last — fold them in with two spoons using a lifting motion, not tossing. The petals should be barely coated with dressing, not saturated. Taste and adjust.',
            tip: 'Lotus petals added early to the bowl wilt and brown from the acid in the dressing within 5 minutes. Add them absolutely last and serve immediately. This is a make-and-serve dish — not a prepare-ahead dish.',
        },
        {
            title: 'Plate for visual impact',
            description: 'Transfer to a serving plate. Top with crushed peanuts and crispy fried shallots, added at the last moment. Drizzle shallot oil lightly over the top. Arrange 4-6 whole lotus petals around the edge of the plate, unfurled and face-up — they function as both garnish and additional scooping vehicle. Serve immediately with prawn crackers and lime wedges. The complete plated gỏi cánh sen — white and pink petals, orange-pink shrimp, golden peanuts and shallots, dark green rau răm — is one of the most beautiful plates in Vietnamese cooking.',
            tip: 'If serving for guests, plate individually rather than from a shared plate — the lotus petals hold their shape better when each bowl is assembled separately. The visual impact of individual portions where every element is visible is significantly greater than a shared plate that has been mixed.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}