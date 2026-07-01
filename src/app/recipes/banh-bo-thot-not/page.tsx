'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-bo-thot-not',
    title: `Palm Sugar Honeycomb Cake`,
    subtitle: `Bánh Bò Thốt Nốt — An Giang's Khmer steamed rice cake, risen with toddy palm sugar and coconut milk into a golden honeycomb crumb.`,
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '4 hrs',
    rating: 4.9,
    baseServings: 8,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh bò thốt nốt is the dessert that defines An Giang province — specifically the Khmer communities around Tri Tôn and Tịnh Biên at the base of the Seven Mountains (Thất Sơn). Thốt nốt is the toddy palm (Borassus flabellifer), a tall, fan-palmed tree that grows in the dry limestone hills of the Cambodian border region. Its sap is collected before dawn by climbers who scale the trunk barefoot to reach the flower clusters at the crown. The fresh sap ferments within hours in the heat — this natural fermentation is what leavens the cake.\n\nThe cake itself is a steamed rice batter enriched with coconut milk and coloured a deep amber by the palm sugar. When steamed correctly, the batter rises into a fine, regular honeycomb structure — hundreds of tiny air pockets through the crumb — that gives the cake its signature bounce and its Vietnamese name: bánh bò means literally "cow cake," a reference to the pockmarked surface resembling a cow's hide. The honeycomb is the test of a skilled baker. A flat, dense crumb means the fermentation was incomplete or the batter was overworked.\n\nOutside An Giang, thốt nốt palm sugar (đường thốt nốt) is sold in round cakes at Vietnamese and Cambodian grocers in Europe and Germany. It has a caramel-floral flavour entirely unlike cane sugar or coconut sugar — faintly smoky, complex, and irreplaceable in this recipe. Do not substitute.`,
    ingredientSections: [
        {
            title: `Dry ingredients`,
            items: [
                { amount: 300, unit: 'g', name: `rice flour (bột gạo)`, note: `fine-milled, not glutinous rice flour` },
                { amount: 50, unit: 'g', name: `tapioca starch (bột năng)`, note: `gives the honeycomb its slightly chewy bite` },
                { amount: 200, unit: 'g', name: `toddy palm sugar (đường thốt nốt)`, note: `grated or broken — sold in round cakes at Asian grocers; do not substitute` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Wet ingredients`,
            items: [
                { amount: 400, unit: 'ml', name: `fresh coconut milk (nước cốt dừa)`, note: `full-fat, room temperature — cold coconut milk inhibits fermentation` },
                { amount: 150, unit: 'ml', name: `warm water`, note: `40°C — warm enough to dissolve sugar, not hot enough to kill yeast` },
                { amount: 7, unit: 'g', name: `instant dry yeast (men nở)`, note: `1 standard sachet — activates the honeycomb rise` },
                { amount: 1, unit: 'tsp', name: `sugar`, note: `to feed the yeast during proofing` },
                { amount: 2, unit: 'tbsp', name: `fresh toddy palm sap (nước thốt nốt tươi)`, note: `optional — if available near Khmer community in Germany; adds authentic fermented depth` },
            ],
        },
        {
            title: `For steaming`,
            items: [
                { amount: 8, name: `small round molds or ramekins (8–10 cm diameter)`, note: `lined with banana leaf or lightly oiled` },
                { amount: 1, name: `large steamer or wok with lid` },
                { amount: 1, name: `clean cloth`, note: `wrapped under the lid to catch condensation drips` },
            ],
        },
    ],
    steps: [
        {
            title: `Proof the yeast`,
            description: `Combine warm water (40°C), 1 tsp sugar, and instant yeast in a small bowl. Stir once and leave undisturbed for 10 minutes. The surface should become foamy and fragrant — this confirms the yeast is active. If nothing happens after 10 minutes, the yeast is dead or the water was too hot. Discard and start again with fresh yeast.`,
        },
        {
            title: `Dissolve the palm sugar`,
            description: `Grate or break the toddy palm sugar into a small saucepan. Add 100 ml of the coconut milk and heat over low flame, stirring until sugar fully dissolves — do not boil. Remove from heat and cool to room temperature before using. The mixture should be a deep amber syrup. If the sugar is not fully dissolved, the batter will be uneven and the honeycomb inconsistent.`,
            tip: `Đường thốt nốt varies in hardness between brands. Some cakes need grating on a box grater; others break apart easily. The dissolved syrup should smell of caramel and faintly of smoke — this is the characteristic toddy palm note that makes the cake identifiable from across a room.`,
        },
        {
            title: `Make the batter`,
            description: `Sift rice flour and tapioca starch together with salt into a large bowl. Make a well in the centre. Pour in the cooled palm sugar syrup, remaining coconut milk, and proofed yeast mixture. Stir gently from the centre outward until a smooth, pourable batter forms — similar in consistency to thick cream. If using fresh toddy palm sap, add now. Do not whisk vigorously; gentle folding preserves the gas bubbles beginning to form from the yeast.`,
        },
        {
            title: `Ferment the batter — 2 to 3 hours`,
            description: `Cover the bowl with a clean cloth and leave at room temperature (ideally 28–32°C) for 2 to 3 hours. The batter will increase in volume by about 30–40%, develop small bubbles on the surface, and smell faintly sour and yeasty. In a cool European kitchen, place the bowl near a warm oven or in a cold oven with just the light on. The fermentation is complete when the surface is visibly aerated and the batter smells active. Do not stir after fermentation.`,
            tip: `This fermentation step is what creates the honeycomb. An underfermented batter produces a flat, dense cake with no air pockets. An overfermented batter (more than 4 hours in heat) turns too sour. The 2–3 hour window in a warm kitchen is correct. In Germany in winter, extend to 3–4 hours.`,
        },
        {
            title: `Prepare the molds and steamer`,
            description: `Line each mold with a piece of banana leaf cut to fit, lightly oiled on the top surface — or simply oil the inside of each ramekin thoroughly. Fill a wok or large steamer with 5 cm of water and bring to a rolling boil. Wrap the inside of the lid with a clean dry cloth tied securely — this absorbs condensation and prevents water drips from falling onto the batter surface, which would cause uneven rising and pitting.`,
        },
        {
            title: `Fill and steam — 20 minutes`,
            description: `Gently ladle fermented batter into prepared molds, filling each to about ¾ full. Do not tap or shake the molds — the trapped bubbles in the batter are what will become the honeycomb. Place molds in the steamer over vigorously boiling water. Cover immediately with the cloth-wrapped lid. Steam on high heat for exactly 20 minutes without opening the lid. Opening the lid drops the temperature and collapses the rising structure.`,
            tip: `The moment of truth is at 20 minutes: lift one cake carefully and use a toothpick inserted in the centre. If it comes out clean and the surface is dry and slightly springy, the cakes are done. If the toothpick shows wet batter, add 3 more minutes and check again.`,
        },
        {
            title: `Cool and unmold`,
            description: `Remove molds from the steamer and place on a wire rack. Leave to cool for 10 minutes before unmolding — the cake is fragile when hot and will tear if turned out immediately. After 10 minutes, run a thin knife around the edge and invert onto a plate. The cake should release cleanly, showing the amber colour on top and the honeycomb cross-section when cut. Slice with a wet knife to see the interior structure clearly.`,
        },
        {
            title: `Serve at room temperature`,
            description: `Bánh bò thốt nốt is served at room temperature, never hot. The texture firms slightly as it cools — the bounce and chew that define the cake only develop fully once cooled. Serve whole or sliced into wedges. In An Giang, it is eaten plain as an afternoon snack with hot tea, or alongside chè (sweet soup) as a dessert combination. The palm sugar flavour deepens over the first 2 hours after steaming — the cake eaten the next morning is better than the cake eaten immediately.`,
            tip: `Store covered at room temperature up to 2 days — do not refrigerate, as cold temperatures harden the rice flour and destroy the honeycomb texture. If the cake hardens, steam briefly for 3 minutes to restore softness.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
