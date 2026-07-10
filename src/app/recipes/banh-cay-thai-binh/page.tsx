'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-cay-thai-binh',
    title: `Thái Bình Malt Rice Cake`,
    subtitle: `Bánh Cáy Thái Bình — Puffed glutinous rice bound with molasses and malt syrup, studded with sesame and ginger — the province's most celebrated Tết confection since the 18th century.`,
    category: 'DESSERT',
    difficulty: 'Hard',
    totalTime: '4 hrs',
    rating: 4.9,
    baseServings: 20,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh cáy is the confection that Thái Bình province has gifted to Vietnamese culinary history — a dense, chewy cake made by binding puffed glutinous rice (nếp rang) with a syrup of mật mía (sugarcane molasses) and mạch nha (Vietnamese malt syrup), flavoured with fresh ginger, toasted sesame, and dried tangerine peel, then pressed into rectangular moulds and sliced into pieces that are simultaneously sticky, crispy from the puffed rice, deeply caramelised, and intensely aromatic. The name cáy refers to the appearance of the cake's cross-section — the puffed rice pieces embedded in the dark syrup resemble the body of a small river crustacean (con cáy) with its texture of rough, irregular surfaces.\n\nThe cake's origin is traced to Làng Nguyễn (Nguyễn village) in Đông Hưng district, Thái Bình — specifically to the eighteenth-century royal kitchens where bánh cáy was prepared as a tribute food for the Nguyễn lords. The Làng Nguyễn production method has been protected and maintained by local artisan families for over three centuries, and the village's bánh cáy is still considered the gold standard against which all commercial productions are measured.\n\nWhat makes bánh cáy technically extraordinary is the mật mía — raw sugarcane molasses that provides both the binding agent and the deep, complex sweetness that refined sugar cannot replicate. Mật mía has a lower sucrose content than refined sugar but significantly higher levels of organic acids, minerals, and flavour compounds (particularly furaneol and maltol) that produce the caramel-rum depth that is bánh cáy's defining flavour note. Combined with mạch nha's maltose (which resists crystallisation and maintains the cake's chewy flexibility), the syrup produces a confection that stays soft at room temperature for weeks.`,
    ingredientSections: [
        {
            title: `Puffed glutinous rice (nep rang)`,
            items: [
                { amount: 400, unit: 'g', name: `glutinous rice (gao nep)`, note: `soaked 4 hours, drained, dried completely before puffing` },
                { amount: 500, unit: 'ml', name: `neutral oil`, note: `for deep frying to puff the rice` },
            ],
        },
        {
            title: `Malt-molasses binding syrup`,
            items: [
                { amount: 150, unit: 'g', name: `mat mia (sugarcane molasses)`, note: `raw, dark — the Thái Bình essential; substitute: blackstrap molasses + 1 tbsp dark brown sugar` },
                { amount: 100, unit: 'g', name: `mach nha (Vietnamese malt syrup)`, note: `anti-crystallisation agent — keeps cake flexible; available at Vietnamese grocers Germany` },
                { amount: 80, unit: 'g', name: `sugar` },
                { amount: 2, unit: 'tbsp', name: `water` },
            ],
        },
        {
            title: `Aromatics (the Làng Nguyễn flavour profile)`,
            items: [
                { amount: 50, unit: 'g', name: `fresh ginger, minced fine`, note: `the dominant aromatic — more than seems appropriate` },
                { amount: 3, unit: 'tbsp', name: `white sesame seeds (me trang)`, note: `toasted golden` },
                { amount: 1, unit: 'tbsp', name: `black sesame seeds (me den)`, note: `for visual contrast` },
                { amount: 1, unit: 'tbsp', name: `dried tangerine or mandarin peel (vo quit kho)`, note: `ground fine — citrus depth note` },
                { amount: 0.5, unit: 'tsp', name: `salt`, note: `amplifies the molasses sweetness` },
            ],
        },
        {
            title: `Equipment`,
            items: [
                { amount: 1, name: `candy thermometer` },
                { amount: 1, name: `rectangular mould or loaf tin (20x10cm)`, note: `lightly oiled` },
                { amount: 1, name: `parchment paper` },
            ],
        },
    ],
    steps: [
        {
            title: `Dry and puff the glutinous rice`,
            description: `After soaking 4 hours, drain the glutinous rice completely and spread on clean cloths. Air-dry for minimum 2 hours until the surface of each grain is completely dry to the touch — surface moisture causes dangerous oil splatter when the rice is fried. Heat neutral oil to 200°C in a deep pot. Add a small handful of dried rice — it will puff dramatically within 3-5 seconds, expanding to 3-4 times its original size. Remove immediately with a spider strainer — the rice burns within 10 seconds at this temperature. The puffed rice should be white, crispy, and hollow-sounding when pressed. Work in small batches. Cool completely on a wire rack.`,
            tip: `The 200°C oil temperature is critical — below 185°C the rice does not puff fully and remains dense; above 210°C it burns before puffing. Test the oil temperature with a single grain before each batch — it should puff within 3 seconds. The dried rice must be completely surface-dry: even a slight surface moisture causes the oil to spit violently and the rice to puff unevenly. The 2-hour air-drying is the most important preparation step and cannot be rushed.`,
        },
        {
            title: `Toast sesame and prepare aromatics`,
            description: `Toast white sesame seeds in a dry pan over medium heat, stirring constantly 3-4 minutes until golden. Cool. Grind dried tangerine peel to a fine powder in a mortar. Mince fresh ginger as finely as possible — it should be almost a paste. Combine all aromatics (ginger, white and black sesame, tangerine peel, salt) in a bowl. The ginger quantity is larger than any standard confectionery recipe because bánh cáy Thái Bình is defined by its ginger heat — the warmth should arrive clearly in every bite and linger for 10-15 seconds after swallowing.`,
        },
        {
            title: `Cook the binding syrup to soft-ball stage`,
            description: `Combine mật mía, mạch nha, sugar, and water in a heavy-bottomed saucepan. Stir over low heat until sugar dissolves. Once dissolved, stop stirring and clip on the candy thermometer. Cook over medium heat to 115°C (soft-ball stage) — the mật mía's dark colour makes it difficult to judge visually, so the thermometer is essential. At 115°C, remove from heat immediately. The mạch nha's maltose prevents premature crystallisation during cooking, allowing the syrup to reach 115°C without graining.`,
            tip: `Mật mía (raw sugarcane molasses) from Thái Bình's sugarcane fields has a specific mineral content and flavour profile — higher in potassium, calcium, and iron than refined sugar, producing the caramel-mineral depth that is bánh cáy's signature. Blackstrap molasses (available at German health food stores as Zuckerrübensirup or Melasse) is the closest German substitute — it has a similar mineral complexity, though slightly more bitter than Vietnamese mật mía. Reduce the substitute quantity by 10% and add 1 tbsp dark brown sugar to compensate.`,
        },
        {
            title: `Combine puffed rice, aromatics, and syrup`,
            description: `Working quickly — the syrup must be used immediately while hot: pour the hot syrup over the puffed rice in a large oiled bowl. Add all aromatics simultaneously. Mix rapidly and thoroughly with two oiled spatulas — folding rather than stirring to avoid crushing the puffed rice pieces. Every grain of puffed rice must be coated in syrup. The mixture will be very hot — handle with silicone gloves. Work within 2-3 minutes before the syrup begins to set.`,
        },
        {
            title: `Press into mould and cool`,
            description: `Transfer the hot mixture immediately to the lightly oiled rectangular mould lined with parchment paper. Press down firmly and evenly using an oiled spatula or your palms (protected by silicone gloves) — apply significant pressure to compact the mixture. The finished slab should be 2-3cm thick with a dense, even surface. Smooth the top surface flat. Leave to cool at room temperature for minimum 2 hours — do not refrigerate, which makes the mạch nha brittle. The cake is ready to cut when it is firm enough to hold its shape but still slightly yielding when pressed.`,
        },
        {
            title: `Slice and serve`,
            description: `Remove from mould by lifting the parchment paper. Place on a cutting board. Using a sharp knife dipped in hot water between each cut, slice into rectangles approximately 3x6cm. The hot water prevents the knife from dragging and tearing the sticky cake. Each piece should show the characteristic bánh cáy cross-section: dark syrup binding irregular pieces of white puffed rice with sesame scattered throughout. Wrap individual pieces in parchment or wax paper — they stick to each other if stored unwrapped. Keeps at room temperature for 3-4 weeks. In Thái Bình, bánh cáy is given as Tết gifts wrapped in red paper packages of 8 or 12 pieces.`,
            tip: `The correct eating experience of bánh cáy: bite through the slightly crispy puffed rice surface into the chewy, dense interior, releasing the ginger heat and molasses depth simultaneously. The mạch nha's maltose produces a slow, lingering sweetness rather than the immediate spike of refined sugar — the sweetness arrives fully only after the piece is swallowed, which is why experienced bánh cáy eaters eat slowly, one piece at a time, with green tea between pieces. The tea's tannins clear the molasses richness and reset the palate for the next piece.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}