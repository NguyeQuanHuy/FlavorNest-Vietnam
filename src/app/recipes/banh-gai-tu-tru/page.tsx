'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-gai-tu-tru',
    title: `Tứ Trụ Ramie Leaf Cake`,
    subtitle: `Bánh Gai Tứ Trụ — Thọ Xuân's black sticky rice cake wrapped in dried ramie leaves, filled with mung bean, coconut, and sesame.`,
    category: 'DESSERT',
    difficulty: 'Hard',
    totalTime: '5 hrs',
    rating: 4.9,
    baseServings: 12,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh gai Tứ Trụ is the most famous confection of Thanh Hóa province — a jet-black sticky rice cake wrapped in multiple layers of dried ramie leaf (lá gai, Boehmeria nivea), filled with a dense paste of mung bean, grated coconut, sesame seeds, and lard, and steamed until the outer leaf layers have transferred their dark pigment entirely into the sticky rice dough. The result is a cake that is black on the outside, pale gold inside, with a texture that is simultaneously dense, chewy, slightly tacky, and faintly herbal from the ramie leaf compounds absorbed during steaming.\n\nTứ Trụ is a village in Thọ Xuân district — the district where the Lê dynasty originated in the fifteenth century and where the Lam Kinh royal palace complex still stands. Bánh gai has been made in Tứ Trụ for at least three hundred years, and the village's production is considered the benchmark against which all other bánh gai in Vietnam is measured. What distinguishes Tứ Trụ bánh gai from versions made elsewhere is the ramie leaf ratio: Tứ Trụ bakers use more dried lá gai per kilogram of sticky rice flour than any other producer, resulting in a blacker colour and a more pronounced earthy-herbal note in the finished cake.\n\nThe ramie leaf (lá gai) is the ingredient that makes bánh gai impossible to replicate with substitutes. The leaf is dried, then ground or pounded to a fine powder, then mixed directly into the sticky rice dough — the chlorophyll and flavonoid compounds in the leaf turn the dough from white to black over 30 minutes of mixing. No food colouring produces the same result because the leaf compounds also affect flavour and texture, not just appearance. Dried lá gai powder is available from Vietnamese grocery suppliers online in Germany.`,
    ingredientSections: [
        {
            title: `Black sticky rice dough (vo banh gai)`,
            items: [
                { amount: 400, unit: 'g', name: `glutinous rice flour (bot nep)`, note: `not regular rice flour — glutinous only` },
                { amount: 60, unit: 'g', name: `dried ramie leaf powder (bot la gai)`, note: `Tu Tru ratio: 15g per 100g flour — more than standard recipes; available online from Vietnamese suppliers` },
                { amount: 60, unit: 'g', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `lard (mo heo)`, note: `mixed into the dough for pliability — butter is not a substitute` },
                { amount: 200, unit: 'ml', name: `warm water`, note: `added gradually — dough moisture varies by flour brand` },
                { amount: 0.25, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Mung bean and coconut filling (nhan dau xanh dua)`,
            items: [
                { amount: 250, unit: 'g', name: `split mung beans (dau xanh ca), soaked 4 hrs` },
                { amount: 80, unit: 'g', name: `sugar` },
                { amount: 50, unit: 'g', name: `grated coconut (dua bao)`, note: `fresh or frozen — not desiccated` },
                { amount: 2, unit: 'tbsp', name: `toasted white sesame seeds (me rang)` },
                { amount: 30, unit: 'g', name: `lard (mo heo)`, note: `cooked into the filling — gives richness and prevents crumbling` },
                { amount: 0.5, unit: 'tsp', name: `vanilla extract` },
                { amount: 0.25, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Wrapping`,
            items: [
                { amount: 36, name: `dried ramie leaves (la gai kho)`, note: `3 per cake — soaked in warm water 10 min to rehydrate; substitute: banana leaf for outer layer only` },
                { amount: 1, name: `roll kitchen twine or banana leaf strips for tying` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `brushed on inner leaf surface to prevent sticking` },
            ],
        },
    ],
    steps: [
        {
            title: `Cook the mung bean filling`,
            description: `Drain soaked mung beans and steam for 25 minutes until completely soft and dry — no visible moisture. While still hot, press through a fine sieve or blend smooth. Transfer paste to a non-stick pan with sugar, lard, grated coconut, sesame seeds, salt, and vanilla. Cook over low heat stirring constantly for 15-20 minutes until the paste pulls away from the sides of the pan and holds its shape when pressed — it must be completely dry or the filling will make the dough soggy during steaming. Cool completely. Divide into 12 equal balls of approximately 40g each.`,
            tip: `The filling must be drier than you expect. Press a ball of filling between two plates — if any moisture appears on the plate surface, return to the pan and cook 5 more minutes. A wet filling is the most common reason bánh gai collapses or becomes gummy after steaming. The sesame seeds and grated coconut should be visible as distinct elements in the filling, not dissolved into the paste.`,
        },
        {
            title: `Make the black dough — the lá gai step`,
            description: `Combine glutinous rice flour, dried ramie leaf powder, sugar, and salt in a large bowl. Mix the dry ingredients thoroughly — the powder is very fine and must be fully distributed through the flour before any liquid is added. Add lard and rub into the dry mixture until it resembles coarse, slightly coloured crumbs. Add warm water gradually, mixing after each addition, until a smooth, pliable dough forms. The dough will begin green-grey and turn progressively darker as you mix — the lá gai pigments activate with the moisture and heat of your hands. Knead for 8-10 minutes until the dough is uniformly black, smooth, and slightly tacky. Cover and rest 30 minutes — the colour deepens further during resting.`,
            tip: `The colour transition from grey-green to black during kneading is the chemical reaction of the ramie leaf chlorophyll and flavonoids with the glutinous rice starch. The longer you knead, the darker the final cake. Tứ Trụ bakers knead for a minimum of 10 minutes by hand specifically to maximise colour depth. The dough should be the colour of wet tar when correctly mixed — not dark grey, but genuinely black.`,
        },
        {
            title: `Prepare the ramie leaves`,
            description: `Soak dried ramie leaves in warm water for 10 minutes until pliable and flexible — they should bend without cracking but still hold their shape. Pat each leaf gently dry with a cloth. Brush the smooth inner surface (the side that will contact the dough) lightly with neutral oil — this prevents the dough from adhering permanently to the leaf and allows clean removal after steaming. Lay leaves in groups of 3, overlapping slightly, to form the wrapping for each cake.`,
            tip: `Dried ramie leaves have two distinct surfaces: a slightly rough, darker outer surface and a smoother, paler inner surface. The inner surface always faces the dough. The outer surface transfers its dark pigment to the dough during steaming — this secondary pigment transfer from the outer leaf is why Tứ Trụ bánh gai uses 3 leaves per cake rather than 1 or 2. More leaf surface contact = deeper black colour in the finished cake.`,
        },
        {
            title: `Wrap the cakes`,
            description: `Divide the black dough into 12 equal portions of approximately 55g each. Flatten each portion in your palm into a disc about 10cm in diameter. Place a mung bean filling ball in the centre. Bring the dough up and around the filling, pinching the seam firmly closed at the top — the dough must completely enclose the filling with no gaps or thin spots, or the filling will burst out during steaming. Roll gently between palms to smooth the surface. Place seam-side down on the centre of a prepared 3-leaf group. Fold the leaves up and around the cake, tucking ends under. Tie firmly with twine or banana leaf strips at both ends and in the middle.`,
        },
        {
            title: `Steam — 45 minutes`,
            description: `Arrange wrapped cakes in a steamer basket in a single layer, not touching. Wrap the steamer lid with a clean dry cloth tied firmly — condensation drips will wet the leaf surface and cause uneven pigment transfer. Bring steamer water to a vigorous boil. Steam on high heat for 45 minutes without opening the lid. At 45 minutes, remove one cake and unwrap carefully — the leaf should peel away cleanly, revealing a uniformly black, slightly glossy surface. The cake should feel firm but yield slightly when pressed. If still soft in the centre, steam 5 more minutes.`,
            tip: `The 45-minute steam is non-negotiable for bánh gai — shorter steaming leaves the glutinous dough undercooked and sticky in a bad way (raw starch rather than properly gelatinised). The cloth-wrapped lid is critical: water dripping from a bare metal lid creates pale spots on the black surface where the pigment has been washed away. These spots are considered a quality defect in Tứ Trụ production.`,
        },
        {
            title: `Cool and rest before eating`,
            description: `Remove from steamer and cool completely on a wire rack — at least 1 hour, preferably 2. Do not unwrap while hot; the dough is fragile when hot and will tear. As it cools, the glutinous starch sets into the dense, chewy texture characteristic of bánh gai. The surface will develop a slight sheen as the lard redistributes through the dough. Bánh gai Tứ Trụ is never eaten hot — room temperature is correct, allowing the full flavour of the ramie leaf and mung bean to be present without the distraction of heat.`,
            tip: `Bánh gai keeps at room temperature wrapped in its leaf for 3-4 days in cool weather, or up to 7 days in the refrigerator. Refrigerated bánh gai should be brought to room temperature for 30 minutes before eating — cold firms the glutinous starch into an unpleasant rubber-like texture. Do not microwave to reheat; steam briefly for 3 minutes instead. The cake on day 2 after steaming, when the leaf pigment has fully redistributed through the dough, is at its flavour peak.`,
        },
        {
            title: `Unwrap and serve`,
            description: `Peel back the dried ramie leaves at the table — the leaf releases cleanly from the oiled surface, revealing the black cake beneath. Slice with a wet knife in one clean motion — do not saw, which tears the glutinous surface. Each slice reveals the pale gold mung bean filling against the black dough, with visible sesame seeds and coconut threads. In Thọ Xuân, bánh gai is eaten plain with hot green tea — the slight bitterness of the tea cuts through the sweetness of the filling and the richness of the lard. No additional condiment is served.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}