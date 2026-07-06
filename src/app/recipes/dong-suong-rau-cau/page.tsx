'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'dong-suong-rau-cau',
    title: 'Đông Sương / Thạch Rau Câu (Vietnamese Agar Jelly)',
    subtitle: `The wobbly, nostalgic Vietnamese jelly dessert that appears at every family gathering — layered with pandan, coconut milk, and enough childhood memory to make grown adults emotional. Three versions: plain, pandan-coconut layer, and coffee jelly.`,
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.8,
    baseServings: 8,
    heroImage: '/images/recipes/che-thai.jpg',
    intro: `Đông sương — also called thạch rau câu or sương sá — is the jelly dessert that every Vietnamese person over the age of ten has eaten at a family gathering, a birthday party, a Tết feast, or straight from a tray on a hot afternoon. It is made from agar agar, a plant-based gelling agent derived from red seaweed, which sets firmer than gelatin, has a clean satisfying snap when sliced, and holds its shape at room temperature without melting. Coconut milk, pandan juice, coffee, fruit juice — anything can flavor it. This recipe gives you the master technique and three of the best versions to start with.`,
    ingredientSections: [
        {
            title: 'Base — Plain or Flavored Jelly (1 tray)',
            items: [
                { amount: 5, unit: 'g', name: 'agar agar powder', note: '1 tsp — not gelatin, not kanten, specifically agar agar powder' },
                { amount: 500, unit: 'ml', name: 'water or liquid of choice', note: 'see variations below for specifics' },
                { amount: 80, unit: 'g', name: 'sugar', note: 'adjust to taste — 80g makes a mildly sweet jelly' },
                { amount: 1, unit: 'pinch', name: 'salt', note: 'balances sweetness' },
            ],
        },
        {
            title: 'Version 2 — Pandan Layer (makes 2 layers)',
            items: [
                { amount: 8, unit: 'g', name: 'agar agar powder', note: 'total for both layers' },
                { amount: 400, unit: 'ml', name: 'water' },
                { amount: 100, unit: 'ml', name: 'fresh pandan juice', note: 'blend 10 pandan leaves with 150ml water, strain — or use ½ tsp pandan extract + green food coloring' },
                { amount: 400, unit: 'ml', name: 'full-fat coconut milk', note: 'shake the can well before opening' },
                { amount: 120, unit: 'g', name: 'sugar', note: 'divided: 60g per layer' },
                { amount: 1, unit: 'pinch', name: 'salt' },
            ],
        },
        {
            title: 'Version 3 — Vietnamese Coffee Jelly',
            items: [
                { amount: 5, unit: 'g', name: 'agar agar powder' },
                { amount: 300, unit: 'ml', name: 'strong brewed Vietnamese black coffee', note: 'phin filter, dark roast robusta — or 2 tbsp instant coffee dissolved in 300ml hot water' },
                { amount: 200, unit: 'ml', name: 'water' },
                { amount: 60, unit: 'g', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'sweetened condensed milk', note: 'stir in after removing from heat' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 200, unit: 'ml', name: 'coconut milk, lightly sweetened', note: 'optional — poured over sliced jelly' },
                { amount: 200, unit: 'g', name: 'crushed ice', note: 'for summer serving' },
                { amount: 1, name: 'pandan leaf, knotted', note: 'to infuse the coconut milk' },
            ],
        },
    ],
    steps: [
        {
            title: 'Bloom the agar agar',
            description: 'Whisk the agar agar powder into the cold liquid in a saucepan. Do not heat yet. Let it sit for 5 minutes — this allows the agar to hydrate evenly, producing a smoother jelly. Stir once after 5 minutes. You will see the powder has absorbed the liquid and the mixture looks slightly thicker.',
            tip: 'Always start with cold liquid. Adding agar agar to hot liquid causes it to clump. Cold liquid → bloom → then heat. This sequence is the entire technique.',
        },
        {
            title: 'Cook until fully dissolved',
            description: 'Place the saucepan over medium heat. Stir constantly as it heats up — agar agar settles to the bottom and will scorch if unattended. Bring to a gentle boil, stirring, and cook for 2-3 minutes until the agar is completely dissolved. The liquid should be clear (for plain or flavored versions) or evenly colored. Add sugar and salt, stir until dissolved.',
            tip: 'To test if agar is fully dissolved: dip a cold spoon into the mixture and let a drop fall onto a cold plate. If it sets within 30 seconds, it is ready. If it stays liquid, cook 1-2 more minutes.',
        },
        {
            title: 'Pour and set',
            description: 'Remove from heat. If using flavored versions, add any extract or coconut milk now — off the heat, to preserve delicate flavors. Pour immediately into a lightly oiled mold, tray, or individual silicone molds. The agar sets quickly — you have about 5 minutes before it begins to gel. Work fast. Let cool at room temperature for 15 minutes, then refrigerate for at least 1 hour until fully firm.',
            tip: 'Do not move the mold while it is setting — any vibration creates ripples or cracks in the surface. Set it on a flat surface and leave it.',
        },
        {
            title: 'For layered jelly (Version 2 — Pandan & Coconut)',
            description: 'Make two separate batches: one pandan jelly (water + pandan juice + half the agar + half the sugar) and one coconut jelly (coconut milk + remaining agar + remaining sugar + salt). Pour the first layer — pandan — into the mold. Let it set partially at room temperature, about 10-12 minutes, until the surface is just firm to the touch but still warm. Carefully pour the coconut layer on top. The first layer must be partially set but not cold — if fully cold, the layers will separate. Refrigerate until fully set.',
            tip: 'The secret to clean layers that stick together: the first layer must be semi-set (firm surface, still warm underneath) when the second layer is poured. Test with a gentle fingertip — it should leave a faint indent but not break through.',
        },
        {
            title: 'For coffee jelly (Version 3)',
            description: 'Brew the coffee strong — much stronger than you would drink it. Combine coffee and water, bloom the agar, cook until dissolved, add sugar. Remove from heat and stir in condensed milk. Pour into a flat tray or individual cups. The condensed milk gives the jelly a slightly creamy, caramel note that plain sugar does not. Refrigerate until firm, at least 1 hour.',
            tip: 'Coffee jelly sets slightly softer than plain water jelly because the coffee oils interfere slightly with the gelling. If you want firmer jelly, increase agar to 6g per 500ml.',
        },
        {
            title: 'Unmold and serve',
            description: 'Run a thin knife or spatula around the edges of the mold to loosen. Invert onto a cutting board. The jelly should release cleanly. Slice into cubes, rectangles, or decorative shapes. Serve in bowls with lightly sweetened coconut milk poured over, and crushed ice on the side for warm days. The jelly keeps refrigerated for up to 5 days — cover with plastic wrap to prevent surface drying.',
            tip: 'For the cleanest cuts, use a knife dipped in warm water and wiped dry between each slice. The agar is firm but not resistant — it cuts cleanly when the knife is sharp and slightly warm.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}