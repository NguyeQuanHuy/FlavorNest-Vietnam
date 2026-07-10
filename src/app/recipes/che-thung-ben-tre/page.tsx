'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'che-thung-ben-tre',
    title: `Bến Tre Taro Coconut Sweet Soup`,
    subtitle: `Chè Thưng Bến Tre — A thick, warming sweet soup of taro, sweet potato, and tapioca pearls in rich coconut milk — Bến Tre's night market dessert.`,
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 6,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Chè thưng is the warming sweet soup that appears at the evening market stalls of Bến Tre city from around 6pm until the vendor sells out — a thick, fragrant mixture of khoai môn (taro), khoai lang (sweet potato), hạt sen (lotus seeds), củ năng (water chestnuts), and small tapioca pearls, all simmered in a coconut milk broth sweetened with palm sugar and perfumed with pandan leaf. The word thưng refers to a wooden measuring container of the same shape as the wide, shallow clay pot the chè is cooked and served from — the name describes the vessel as much as the dish itself.\n\nBến Tre's version of chè thưng is distinctive in three ways. First, the coconut milk ratio is higher than in other Mekong Delta provinces' versions — in the coconut land, chè thưng is explicitly a coconut milk dish with ingredients suspended in it, not a water-based soup with coconut milk added for flavour. Second, the palm sugar used is đường thốt nốt from the province's own thốt nốt palm trees in Tri Tôn — darker, more complex, and more intensely caramel than cane sugar alternatives. Third, the texture calibration is specific: each ingredient is cooked to exactly the correct texture before being combined — soft but not mushy taro, tender but not dissolving sweet potato, firm-centred tapioca pearls — producing a chè where each spoonful has different textures rather than a uniform soft mass.\n\nChè thưng is eaten warm in winter and at room temperature in summer. At Bến Tre's Chợ Đêm (night market) along the riverside, the chè vendor ladles it from the clay pot into small bowls, drizzles additional coconut cream over the top, and hands it over with a small spoon. The coconut cream drizzle — cold, salted, poured over the warm chè — is the final temperature and flavour contrast that makes the dish complete.`,
    ingredientSections: [
        {
            title: `Chè ingredients`,
            items: [
                { amount: 200, unit: 'g', name: `taro (khoai mon)`, note: `peeled and cut into 2cm cubes — wear gloves peeling; raw taro causes skin irritation` },
                { amount: 150, unit: 'g', name: `orange sweet potato (khoai lang)`, note: `peeled and cut into 2cm cubes` },
                { amount: 80, unit: 'g', name: `lotus seeds (hat sen)`, note: `dried — soaked overnight, green germ removed; or canned, drained` },
                { amount: 60, unit: 'g', name: `small tapioca pearls (bot bang nho)`, note: `soaked 15 min in cold water` },
                { amount: 80, unit: 'g', name: `water chestnuts (cu nang)`, note: `fresh or canned — sliced into rounds` },
            ],
        },
        {
            title: `Coconut broth`,
            items: [
                { amount: 500, unit: 'ml', name: `full-fat coconut milk (nuoc cot dua)`, note: `the Bến Tre high ratio` },
                { amount: 400, unit: 'ml', name: `water` },
                { amount: 3, name: `pandan leaves (la dua)`, note: `tied in a knot — steep in the broth` },
                { amount: 100, unit: 'g', name: `palm sugar (duong thot not)`, note: `grated — the Bến Tre essential` },
                { amount: 0.25, unit: 'tsp', name: `salt`, note: `amplifies the coconut sweetness` },
            ],
        },
        {
            title: `Cold coconut cream finish`,
            items: [
                { amount: 150, unit: 'ml', name: `coconut cream (kem dua)`, note: `thick, unsweetened — kept cold in refrigerator` },
                { amount: 0.25, unit: 'tsp', name: `salt`, note: `stirred into the cold coconut cream` },
            ],
        },
        {
            title: `Optional garnish`,
            items: [
                { amount: 1, unit: 'tbsp', name: `toasted sesame seeds (me rang)` },
                { amount: 6, name: `ice cubes`, note: `for the cold version — chè thưng lạnh` },
            ],
        },
    ],
    steps: [
        {
            title: `Cook each ingredient separately`,
            description: `The most important technique in chè thưng is cooking each ingredient to its individual correct texture before combining. Taro: boil in lightly salted water 12-15 minutes until a chopstick inserts easily but the cube holds its shape — not crumbling. Sweet potato: boil 8-10 minutes until tender but firm. Lotus seeds (if dried and soaked): simmer 20-25 minutes until completely soft with no hard centre. Tapioca pearls: soak 15 minutes, then simmer in water 8-10 minutes until translucent with a tiny white centre remaining — they finish cooking in the coconut broth. Water chestnuts: no cooking needed — add raw for maximum crunch contrast.`,
            tip: `The separate cooking is what prevents chè thưng from becoming a uniform mush. Taro releases starch rapidly when overcooked and dissolves into the coconut milk, making it thick and grey. Sweet potato disintegrates at 15 minutes and loses its colour. Tapioca pearls overcook to a sticky mass if boiled too long before adding to the broth. Each ingredient has a different starch content and cell structure — cooking separately and combining for the final simmer is the technique that preserves each one's individual texture.`,
        },
        {
            title: `Make the coconut pandan broth`,
            description: `Combine coconut milk and water in a wide pot. Add pandan leaves and bring to a gentle simmer over medium-low heat — do not boil vigorously, which causes the coconut milk to separate. Add grated palm sugar and salt, stirring until completely dissolved. Simmer 5 minutes until the pandan has infused the broth with its vanilla-adjacent fragrance. The broth should be pale cream-yellow, smell intensely of pandan and coconut, and taste sweet-rich with the palm sugar's caramel note clearly present.`,
        },
        {
            title: `Combine and finish`,
            description: `Add the pre-cooked taro, sweet potato, lotus seeds, and water chestnuts to the simmering coconut broth. Add the soaked tapioca pearls. Simmer gently for 8-10 minutes — the tapioca pearls will finish cooking and turn fully translucent, the ingredients will absorb coconut broth flavour, and the broth will thicken slightly from the starch released by the taro and sweet potato. Stir gently every 2-3 minutes. Remove pandan leaves. Taste: adjust palm sugar if needed.`,
            tip: `The final 8-10 minute simmer with all ingredients combined is where chè thưng develops its characteristic thickness and integration. The taro releases residual starch into the coconut milk, producing a natural thickening without any added starch. This is why overcooked taro ruins chè thưng — it releases too much starch too quickly and makes the broth gluey rather than silky. Correctly cooked taro releases just enough starch to give the broth body without dominating it.`,
        },
        {
            title: `Prepare the cold coconut cream`,
            description: `Stir salt into cold coconut cream until dissolved. Keep refrigerated until serving. The salted cold coconut cream is poured cold over the warm chè at serving — the temperature contrast and the salt's flavour amplification are the finishing touches that complete the dish. This is the same principle as gỏi bưởi da xanh's cold-coconut-over-warm technique and chè bắp Quảng Ngãi — the Mekong Delta tradition of temperature contrast in coconut milk desserts.`,
        },
        {
            title: `Serve the Bến Tre night market way`,
            description: `Ladle warm chè thưng into small bowls — fill generously so that taro, sweet potato, lotus seeds, tapioca pearls, and water chestnuts are all visible in each bowl. Pour 2-3 tablespoons of cold salted coconut cream over the surface — it will float on the warm chè without mixing immediately. Scatter a small pinch of toasted sesame seeds if using. Serve immediately. Each person stirs the coconut cream into their bowl as they eat — the gradual mixing means the first spoonfuls are richly coconut, the middle spoonfuls are evenly combined, and the last spoonfuls are the warm chè at its most concentrated. For the cold version: add 2-3 ice cubes to the bowl before ladling.`,
            tip: `Chè thưng Bến Tre is the dessert that closes a full Bến Tre meal — after the richness of tôm càng xanh, the sweetness of bưởi da xanh, and the satisfaction of cá lóc hấp bầu, the warm coconut-pandan broth with its varied soft textures provides the ideal closing note. It is filling without being heavy, sweet without being cloying, and the pandan fragrance lingers pleasantly long after the bowl is empty. In Bến Tre, the night market chè thưng vendor is the last stop of the evening — you eat standing at the cart, hands wrapped around the warm bowl, before heading home.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}