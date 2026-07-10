'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'keo-dua-ben-tre',
    title: `Bến Tre Coconut Candy`,
    subtitle: `Kẹo Dừa Bến Tre — Vietnam's most exported confection: fresh coconut milk cooked with malt sugar to soft candy, wrapped in rice paper — made in Mỏ Cày since 1935.`,
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '2 hrs',
    rating: 4.9,
    baseServings: 40,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Kẹo dừa Bến Tre is Vietnam's most internationally recognised confection — a soft, chewy coconut candy made by cooking fresh coconut milk with mạch nha (Vietnamese malt syrup) and sugar to the soft-ball stage, then pouring into moulds and cutting into small rectangles that are individually wrapped in edible rice paper and outer banana leaf or cellophane. The candy has been produced in Mỏ Cày district, Bến Tre since 1935, when Nguyễn Thị Ngọc Trâm — known as Bà Hai Tỏ — developed the recipe that all subsequent Bến Tre coconut candy production traces back to.\n\nBến Tre province produces more coconuts than any other province in Vietnam — over 160 million coconuts per year from approximately 70,000 hectares of coconut plantation along the Mekong Delta islands between the Tiền and Hậu rivers. The province's identity is so thoroughly defined by the coconut palm that it is called "xứ dừa" (coconut land), and kẹo dừa is the most direct expression of this identity: it contains nothing but coconut milk, malt syrup, sugar, and sometimes flavourings like pandan, durian, or ginger.\n\nThe candy's texture — soft, slightly sticky, yielding to the teeth without resistance — is the result of cooking to precisely the soft-ball stage (112-115°C) rather than the harder stages used for other Vietnamese sugar confections. The mạch nha provides the specific chewiness: its maltose content resists crystallisation and produces a candy that stays soft at room temperature rather than hardening like sucrose-only preparations.`,
    ingredientSections: [
        {
            title: `Core ingredients`,
            items: [
                { amount: 400, unit: 'ml', name: `fresh coconut milk (nuoc cot dua tuoi)`, note: `freshly pressed from mature coconut — not canned; the fresh milk produces a more complex flavour` },
                { amount: 200, unit: 'g', name: `mach nha (Vietnamese malt syrup)`, note: `the anti-crystallisation and chewiness agent — available at Vietnamese grocers` },
                { amount: 150, unit: 'g', name: `white sugar (duong cat)` },
                { amount: 0.25, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Flavour variations (choose one)`,
            items: [
                { amount: 3, name: `pandan leaves (la dua), tied in a knot`, note: `simmered in coconut milk before cooking — the most popular variety` },
                { amount: 100, unit: 'g', name: `durian flesh (sau rieng)`, note: `blended smooth and stirred in at 110°C — the premium variety` },
                { amount: 1, unit: 'tbsp', name: `fresh ginger juice`, note: `squeezed from grated ginger — adds warming depth` },
                { amount: 1, unit: 'tsp', name: `roasted sesame seeds`, note: `stirred in at the end for the original unflavoured version` },
            ],
        },
        {
            title: `Wrapping`,
            items: [
                { amount: 40, name: `small edible rice paper squares (banh trang an)`, note: `2x4cm — the inner wrapper that prevents sticking to fingers` },
                { amount: 40, name: `small banana leaf or wax paper squares`, note: `outer wrapper — traditional banana leaf for the authentic look` },
            ],
        },
        {
            title: `Equipment`,
            items: [
                { amount: 1, name: `candy thermometer`, note: `non-negotiable — soft ball stage is a 3°C window` },
                { amount: 1, name: `lightly oiled rectangular mould or baking tin`, note: `20x15cm — for pouring the candy` },
                { amount: 1, name: `heavy-bottomed saucepan (not non-stick)` },
            ],
        },
    ],
    steps: [
        {
            title: `Infuse the coconut milk with pandan (if using)`,
            description: `If making the pandan variety: combine fresh coconut milk and tied pandan leaves in a small saucepan. Heat over low flame for 5 minutes — do not boil. Remove from heat and steep 15 minutes. Remove and discard pandan leaves. The coconut milk will be pale green and intensely fragrant. This infused milk is used as the base for the candy. If making other varieties: use plain fresh coconut milk and add the flavouring at the appropriate step below.`,
        },
        {
            title: `Combine and begin cooking`,
            description: `Combine coconut milk (plain or pandan-infused), mạch nha, sugar, and salt in a heavy-bottomed saucepan. Stir over low heat until sugar and mạch nha are completely dissolved — 3-4 minutes. Do not allow to boil yet. Once dissolved, increase heat to medium and stop stirring. Clip the candy thermometer to the side of the pan. The mixture will begin to boil and produce significant foam — this is normal and will subside as water evaporates.`,
            tip: `The no-stirring rule after boiling begins is critical. Stirring a boiling sugar solution agitates sucrose crystals and causes premature crystallisation — the candy will turn grainy rather than smooth. The mạch nha's maltose provides some crystallisation resistance but is not sufficient to protect against active stirring. Swirl the pan gently if needed to prevent hot spots, but never use a spoon or spatula once the boil has begun.`,
        },
        {
            title: `Cook to soft-ball stage — 112-115°C`,
            description: `Cook without stirring over medium heat, watching the thermometer. The temperature rises slowly at first then accelerates as the water content decreases. At 112°C, the candy is at the lower soft-ball stage — softer, stickier candy. At 115°C, it is at the upper soft-ball stage — firmer, less sticky. Bến Tre kẹo dừa is traditionally made at 113-114°C for the characteristic soft, yielding texture. If the durian variant: stir in blended durian flesh at 110°C and continue cooking to 114°C. Remove from heat immediately at target temperature.`,
            tip: `The soft-ball test without a thermometer: drop a small amount of candy into ice-cold water. Remove and press between fingers — it should form a soft ball that flattens easily when removed from the water. If it dissolves: still too cool. If it forms a firm ball that does not flatten: too hot (firm-ball stage). The thermometer is more reliable than the water test for this 3°C window — invest in one if making candy regularly.`,
        },
        {
            title: `Pour and cool`,
            description: `Pour the hot candy immediately into a lightly oiled rectangular mould. Spread evenly with an oiled offset spatula — work quickly before the candy begins to set. If making the sesame version: scatter sesame seeds over the surface immediately and press lightly. Leave to cool at room temperature for 45-60 minutes. Do not refrigerate — cold air causes the candy to harden unevenly and develop a grainy texture. The candy is ready to cut when it holds its shape when pressed with a finger but still yields slightly.`,
        },
        {
            title: `Cut and wrap`,
            description: `Once set, turn the candy slab out onto a lightly oiled surface. Cut into rectangles approximately 2x4cm using an oiled knife — wipe and re-oil between cuts to prevent sticking. Work quickly; the candy softens from the warmth of handling. Wrap each piece first in a small square of edible rice paper — press the edges to seal. Then wrap in banana leaf or wax paper, folding the ends under. The edible rice paper inner wrap is the invention that made kẹo dừa commercially viable: it prevents the soft candy from sticking to the outer wrapper and to the fingers of the eater, while dissolving immediately on the tongue.`,
            tip: `The edible rice paper (bánh tráng ăn) used for wrapping kẹo dừa is thinner and more soluble than standard rice paper — it dissolves in saliva within 2-3 seconds of contact. This is the technical detail that most home recipes miss, substituting regular rice paper that does not dissolve properly and creates an unpleasant texture in the mouth. Edible wafer paper (Oblaten in German) available at German baking supply stores is a direct substitute — used for wrapping traditional German Lebkuchen and dissolves identically to Vietnamese bánh tráng ăn.`,
        },
        {
            title: `Store and serve`,
            description: `Kẹo dừa keeps at room temperature for 2-3 weeks if wrapped individually and stored in an airtight tin. Avoid refrigeration — cold hardens the candy and changes the texture. Avoid humidity — moisture softens the outer wrapper and makes the pieces stick together. In Bến Tre, the candy is made in large batches before Tết and distributed to family and guests throughout the holiday period. It is eaten as a between-meal snack, offered to guests with tea, and given as gifts. A tin of homemade kẹo dừa is one of the most appreciated gifts a Bến Tre household can offer — it implies the time and skill of homemade production over the convenience of commercial purchase.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}