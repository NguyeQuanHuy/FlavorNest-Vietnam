'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-pia',
    title: `Sóc Trăng Flaky Durian Pastry`,
    subtitle: `Bánh Pía — Teochew spiral-layered pastry from Sóc Trăng, filled with salted egg yolk, durian paste, and mung bean.`,
    category: 'DESSERT',
    difficulty: 'Hard',
    totalTime: '5 hrs',
    rating: 4.9,
    baseServings: 12,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh pía is Sóc Trăng's most famous export — a round, spiral-layered pastry with a paper-thin flaky crust that shatters on the first bite and a dense, aromatic filling of mung bean paste enriched with durian and sealed around a whole salted egg yolk. The name comes from the Teochew Chinese word for pastry (餅, bing/pia), and the technique is entirely Teochew: a water dough wrapped around a lard-based oil dough, rolled and folded repeatedly to create dozens of flaky layers in a spiral cross-section.\n\nThe Teochew community arrived in Sóc Trăng in the late nineteenth century, bringing this pastry tradition with them. What distinguished the Sóc Trăng version from the original was the addition of durian — the Mekong Delta's abundance of Ri6 and Monthong durian made it the obvious enrichment for the mung bean filling. The salted egg yolk in the centre is the Chinese contribution: the yolk's salt cuts through the sweetness of the bean paste and its fat enriches every bite from the inside out.\n\nThe spiral on the cross-section — concentric rings of pale water dough and yellow lard dough — is the mark of quality. A good bánh pía shows eight to twelve visible layers when cut. A poor one shows three or four. This recipe produces twelve layers. It requires patience and cold hands. Lard is not optional.`,
    ingredientSections: [
        {
            title: `Water dough (vỏ nước)`,
            items: [
                { amount: 250, unit: 'g', name: `all-purpose flour`, note: `plus extra for dusting` },
                { amount: 80, unit: 'ml', name: `warm water` },
                { amount: 40, unit: 'g', name: `lard (mỡ heo)`, note: `room temperature — butter produces an inferior flake` },
                { amount: 30, unit: 'g', name: `icing sugar` },
                { amount: 0.25, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Oil dough (vỏ dầu)`,
            items: [
                { amount: 180, unit: 'g', name: `all-purpose flour` },
                { amount: 100, unit: 'g', name: `lard (mỡ heo)`, note: `cold — must be solid, not soft` },
            ],
        },
        {
            title: `Mung bean and durian filling`,
            items: [
                { amount: 300, unit: 'g', name: `split mung beans (đậu xanh cà), soaked 4 hrs` },
                { amount: 150, unit: 'g', name: `durian flesh (sầu riêng)`, note: `Ri6 or Monthong — fresh or frozen and thawed; no substitutes` },
                { amount: 80, unit: 'g', name: `sugar` },
                { amount: 40, unit: 'g', name: `lard` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `vanilla extract` },
            ],
        },
        {
            title: `Assembly`,
            items: [
                { amount: 12, name: `salted duck egg yolks (lòng đỏ trứng vịt muối)`, note: `raw — available at Asian grocers; soak in rice wine 5 min to remove gamey note` },
                { amount: 1, name: `egg yolk, beaten`, note: `for egg wash` },
                { amount: 1, unit: 'tbsp', name: `sesame seeds (mè trắng)`, note: `for top — optional but traditional` },
            ],
        },
    ],
    steps: [
        {
            title: `Cook the mung bean filling`,
            description: `Drain soaked mung beans and steam for 25 minutes until completely soft. While still hot, pass through a fine sieve or blend smooth. Transfer to a non-stick pan with sugar, lard, and salt over low heat. Stir constantly for 15–20 minutes until the paste pulls away from the sides of the pan and holds its shape when pressed — it should not be sticky. Remove from heat, cool to room temperature, then fold in durian flesh and vanilla. Mix until fully combined. Divide into 12 equal portions (about 45 g each). Roll each portion into a ball, press flat in your palm, place a salted egg yolk in the centre, and wrap the paste completely around it. Roll back into a smooth ball. Refrigerate 30 minutes to firm up.`,
            tip: `The filling must be cooked until completely dry or the pastry will go soggy from the inside. Press a ball of filling between two plates — if moisture beads appear, return to the pan and cook longer. The durian is added off-heat to preserve its volatile aroma.`,
        },
        {
            title: `Make the water dough`,
            description: `Combine flour, icing sugar, and salt in a bowl. Add room-temperature lard and rub into the flour until it resembles coarse breadcrumbs. Add warm water gradually, mixing until a smooth, pliable dough forms. It should not be sticky. Knead 5 minutes until elastic. Wrap in cling film and rest 30 minutes at room temperature.`,
        },
        {
            title: `Make the oil dough`,
            description: `Combine flour and cold lard with fingertips until a cohesive, crumbly dough forms. It will be very short and slightly oily — this is correct. Do not add water. Divide into 12 equal portions and refrigerate 20 minutes to keep firm. Cold oil dough is essential for clean layering; warm oil dough smears into the water dough instead of separating.`,
        },
        {
            title: `First roll — create the log`,
            description: `Divide water dough into 12 equal portions. Working one at a time, flatten a water dough portion into a disc about 10 cm wide. Place a cold oil dough portion in the centre. Wrap the water dough around the oil dough completely, pinching the seam tightly shut. On a lightly floured surface, roll this package into a thin oval about 8 × 18 cm. Roll up tightly from the short end into a log. Place seam-side down and rest 10 minutes. Repeat with all 12 portions.`,
            tip: `Keep finished logs covered with a damp cloth while you work — the surface dries quickly and dry dough tears rather than rolling thin on the second pass.`,
        },
        {
            title: `Second roll — create the spiral`,
            description: `Take each rested log and roll again into a long thin rectangle, 6 × 20 cm. Roll up tightly again from the short end. You now have a tightly coiled spiral inside the dough. Stand the coil on its end and press gently down into a disc — the spiral cross-section should be visible when you look at it from the side. Flatten with a rolling pin into a circle about 10 cm wide. Keep covered while assembling.`,
        },
        {
            title: `Wrap the filling`,
            description: `Place a chilled filling ball in the centre of each pastry disc. Bring the edges up and pinch firmly together at the top, sealing completely. Roll gently between palms into a smooth ball, then flatten slightly into a thick disc shape — about 6 cm diameter, 3 cm tall. This is the final shape. Place seam-side down on a parchment-lined baking tray. Repeat with all 12. Refrigerate 15 minutes before baking.`,
        },
        {
            title: `Bake — 180°C, 25 minutes`,
            description: `Preheat oven to 180°C (fan 160°C). Brush each pastry lightly with beaten egg yolk — one thin coat only. Sprinkle a few sesame seeds on top if using. Bake 20 minutes, then brush a second layer of egg wash and return to oven for 5 more minutes until deep golden. The double egg wash gives the Sóc Trăng characteristic deep amber gloss. Remove from oven and cool on a wire rack for at least 20 minutes before cutting.`,
            tip: `Do not overbake — the lard layers continue cooking from residual heat after the oven. Pull the pastries when golden, not dark brown. Dark brown means the lard has started to render out and the layers will be less distinct.`,
        },
        {
            title: `Cut and serve`,
            description: `Slice each bánh pía in half with a sharp serrated knife using a single sawing motion — do not press down, which crushes the layers. The cross-section should show eight to twelve concentric spiral rings of pale and yellow dough, the dense amber mung bean filling, and the orange salted egg yolk at the centre. Serve at room temperature. In Sóc Trăng, bánh pía is eaten with hot Chinese tea — the slight bitterness of the tea cuts through the richness of the lard pastry and durian.`,
            tip: `Bánh pía keeps at room temperature for 5 days in an airtight container. Refrigeration firms the lard and dulls the flakiness — bring to room temperature for 30 minutes before eating if stored cold. The flavour is best on day 2 after the durian aroma has permeated the entire pastry.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
