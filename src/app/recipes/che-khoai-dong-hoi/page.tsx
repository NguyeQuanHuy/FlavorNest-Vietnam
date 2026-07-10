'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-khoai-dong-hoi',
    title: `Đồng Hới Taro Ginger Sweet Soup`,
    subtitle: `Chè Khoai Đồng Hới — Quảng Bình's night market taro and ginger sweet soup in coconut milk — warming, spiced, the final bowl of the coastal evening.`,
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 6,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Chè khoai Đồng Hới is the taro sweet soup sold at the night market stalls along Đồng Hới's riverside promenade — the dessert that closes an evening of grilled seafood and bún dishes along the Nhật Lệ. The preparation is simple: khoai môn (taro, Colocasia esculenta) simmered until soft in a coconut milk broth sweetened with đường nâu (brown sugar) and perfumed with pandan, then finished with a generous amount of fresh ginger and a pour of cold salted coconut cream.\n\nWhat distinguishes the Đồng Hới version from the taro sweet soups of the south is the ginger quantity and the brown sugar. Quảng Bình sits at the northern edge of coconut dessert culture — south of here the coconut milk tradition strengthens; north of here it fades. This transitional geography means the Đồng Hới chè khoai uses more ginger than any southern equivalent, reflecting the central Vietnamese preference for warming spices in dessert, and uses brown sugar rather than palm sugar, giving the broth a slightly more astringent, less floral sweetness that suits the cooler Quảng Bình coastal evenings.\n\nThe ginger here is not background — it is the second primary flavour after the taro, present in a quantity that produces genuine warmth in the chest within minutes of eating, which is exactly the purpose in a town where sea winds make even summer evenings cool after 8pm.`,
    ingredientSections: [
        {
            title: `Main ingredients`,
            items: [
                { amount: 400, unit: 'g', name: `taro (khoai mon)`, note: `peeled and cut into 2cm cubes — wear gloves; raw taro causes skin irritation` },
                { amount: 60, unit: 'g', name: `small tapioca pearls (bot bang)`, note: `soaked 15 min` },
                { amount: 3, name: `pandan leaves (la dua)`, note: `tied in knot` },
            ],
        },
        {
            title: `Broth`,
            items: [
                { amount: 400, unit: 'ml', name: `full-fat coconut milk (nuoc cot dua)` },
                { amount: 500, unit: 'ml', name: `water` },
                { amount: 80, unit: 'g', name: `brown sugar (duong nau)`, note: `the Đồng Hới distinction — not palm sugar` },
                { amount: 50, unit: 'g', name: `fresh ginger, julienned fine`, note: `generous — the central Vietnamese warming quantity` },
                { amount: 0.25, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Cold coconut cream finish`,
            items: [
                { amount: 150, unit: 'ml', name: `coconut cream (kem dua)`, note: `thick, unsweetened, kept cold` },
                { amount: 0.25, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 1, unit: 'tbsp', name: `toasted sesame seeds` },
                { amount: 1, unit: 'tsp', name: `ground cinnamon`, note: `light dusting — the Đồng Hới winter addition` },
            ],
        },
    ],
    steps: [
        {
            title: `Cook taro separately`,
            description: `Boil taro cubes in lightly salted water 12-15 minutes until a chopstick inserts cleanly but the cube holds shape. Drain. Cooking separately prevents the taro's starch from over-thickening the coconut broth before the sugar and ginger have had time to infuse. Overcooked taro releases so much starch it turns the broth gluey — 12-15 minutes is the window, not more.`,
        },
        {
            title: `Soak tapioca and make the broth`,
            description: `Soak tapioca pearls in cold water 15 minutes — they will swell slightly. Combine coconut milk, water, and pandan leaves in a pot. Bring to a gentle simmer. Add julienned ginger — more than seems appropriate, but the coastal evening wind is the context. Add brown sugar and salt, stir until dissolved. Add soaked tapioca pearls. Simmer gently 10 minutes until pearls are translucent with a tiny white centre.`,
        },
        {
            title: `Combine and finish`,
            description: `Add pre-cooked taro to the broth. Simmer together 5-8 minutes — the taro absorbs coconut-ginger broth, the tapioca finishes cooking, the broth thickens slightly from the taro's residual starch. Remove pandan. Taste: the ginger should be clearly warming, the brown sugar's slight astringency distinguishable from palm sugar sweetness, the taro soft and silky.`,
            tip: `The brown sugar gives the Đồng Hới broth a slightly darker colour and a drier, less floral sweetness than palm sugar. This suits the ginger — brown sugar's molasses note amplifies ginger's sharpness in a way that the caramel-floral of palm sugar does not.`,
        },
        {
            title: `Prepare cold coconut cream and serve`,
            description: `Stir salt into cold coconut cream. Ladle warm chè into bowls. Pour cold coconut cream over the surface. Scatter toasted sesame and a light dusting of cinnamon — the cinnamon is a Đồng Hới night market addition, optional but traditional. Serve immediately. The ginger warmth spreads through the chest within 2-3 minutes of eating — this physiological warmth is the specific reason chè khoai gừng is the Đồng Hới night market's closing dish.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}