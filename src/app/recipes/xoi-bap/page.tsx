'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'xoi-bap',
    title: 'Xôi Bắp (Sticky Rice with Corn)',
    subtitle: 'Glutinous rice and fresh corn kernels steamed together in coconut milk until glossy and fragrant — topped with salted coconut cream, crispy fried shallots, and a drizzle of shallot oil. The sweetcorn sticky rice of southern Vietnam.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 20 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/xoi-bap.jpg',
    intro: `Xôi bắp is the sticky rice of the Mekong Delta and southern Vietnam — made with fresh corn kernels instead of the mung bean or black bean of northern versions. The corn adds sweetness and a slight crunch that is completely its own. The rice and corn are soaked together, then steamed in coconut milk that perfumes every grain, producing a sticky rice that is simultaneously savory and sweet, rich and light. The finishing elements are what make it: a drizzle of thick salted coconut cream that the diner stirs through before eating, crispy fried shallots that add crunch, and shallot oil that adds aromatic depth. Xôi bắp is eaten in the morning from street stalls in Saigon and the delta provinces, served on a square of banana leaf and eaten with a small plastic spoon before the heat of the day arrives. Made at home, it is a complete breakfast or a side dish that outperforms everything you expect from sticky rice and corn.`,
    ingredientSections: [
        {
            title: 'Sticky rice and corn',
            items: [
                { amount: 400, unit: 'g', name: 'glutinous rice (gạo nếp)', note: 'soaked in cold water minimum 4 hours — overnight preferred' },
                { amount: 2, name: 'fresh corn cobs', note: 'kernels stripped — about 250g kernels. Fresh corn only; canned produces wrong texture.' },
                { amount: 200, unit: 'ml', name: 'coconut milk (nước cốt dừa)', note: 'full-fat — added to steaming water to perfume the rice' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 3, name: 'pandan leaves', note: 'knotted — placed in the steamer for fragrance' },
            ],
        },
        {
            title: 'Salted coconut cream (nước cốt)',
            items: [
                { amount: 200, unit: 'ml', name: 'coconut cream (nước cốt dừa)', note: 'the thick first press — more concentrated than coconut milk' },
                { amount: 0.5, unit: 'tsp', name: 'salt', note: 'the salt in coconut cream is a southern Vietnamese technique — it creates contrast with the sweet rice' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'tapioca starch', note: 'mixed with 1 tbsp cold water — thickens the coconut cream slightly so it coats the rice' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 3, unit: 'tbsp', name: 'shallot-infused oil' },
                { amount: 0.5, unit: 'tsp', name: 'white sesame seeds', note: 'toasted — optional but adds visual contrast' },
            ],
        },
    ],
    steps: [
        {
            title: 'Soak the glutinous rice with corn',
            description: 'Rinse the glutinous rice until water runs almost clear. Combine with the stripped corn kernels in a bowl. Cover with cold water and soak together for minimum 4 hours — overnight is better. The corn will partially hydrate and the rice will fully hydrate, allowing them to cook at the same rate when steamed.',
            tip: 'Soaking rice and corn together — not separately — is the technique that produces even cooking. The corn kernels and rice grains reach the steamer at the same hydration level.',
        },
        {
            title: 'Prepare the steamer',
            description: 'Fill the bottom of a steamer pot with water. Add the knotted pandan leaves to the water. Combine coconut milk, salt, and sugar — pour half into the steaming water and reserve half. The coconut milk in the steaming water produces coconut-scented steam that perfumes the rice from below as it cooks.',
            tip: 'The pandan leaves in the steaming water (not on the rice) produce a subtler, more evenly distributed fragrance than placing them directly in the rice.',
        },
        {
            title: 'Steam in two stages',
            description: 'Drain the soaked rice and corn. Line the steamer basket with cheesecloth or a clean thin cloth. Spread the rice and corn in an even layer. Make several holes through the rice with a chopstick — these allow steam to penetrate evenly. Steam over full boil for 20 minutes. Open, stir the rice and corn from the bottom, drizzle the remaining coconut milk over the surface, poke holes again, and steam for another 15-20 minutes until completely cooked.',
            tip: 'The two-stage steaming with coconut milk added between stages is what produces the rich coconut flavor throughout — not just on the surface. Do not skip the mid-steam stirring.',
        },
        {
            title: 'Test for doneness',
            description: 'The xôi bắp is done when the rice grains are completely tender and glossy, the corn kernels are fully cooked but retain a slight bite, and the rice holds together when pressed but does not stick to clean hands. Taste a small amount — it should be subtly sweet from the corn and coconut, with a clean savory note from the salt.',
            tip: 'Under-cooked glutinous rice has a chalky center when bitten. If you encounter this, add 2 tablespoons of water around the edge of the steamer, poke holes, and steam 10 more minutes.',
        },
        {
            title: 'Make the salted coconut cream',
            description: 'Warm the coconut cream in a small saucepan over medium-low heat. Add salt and sugar — the coconut cream should taste noticeably salty with a sweetness underneath. Mix tapioca starch with 1 tablespoon cold water until smooth. Stir into the warm coconut cream and cook for 1-2 minutes until slightly thickened. Remove from heat. The cream should flow slowly off a spoon — not watery, not thick.',
            tip: 'The salted coconut cream must be made separately and poured over at the table — not mixed into the rice during steaming. The contrast between the sweet rice and the salty cream is the point.',
        },
        {
            title: 'Serve the southern way',
            description: 'Spoon the hot xôi bắp onto a plate or into a bowl. Drizzle shallot oil generously. Pour salted coconut cream over the top — it should pool slightly around the rice before being mixed in by the diner. Scatter crispy fried shallots and toasted sesame seeds. Eat immediately — glutinous rice hardens as it cools and loses its silky texture. The coconut cream should be stirred through the rice at the table just before the first bite.',
            tip: 'Serve on banana leaf if available — the leaf adds a faint grassy fragrance and is the traditional presentation. The visual of white rice, golden corn, and green banana leaf is the complete southern Vietnamese breakfast image.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}