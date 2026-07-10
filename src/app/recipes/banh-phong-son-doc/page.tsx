'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-phong-son-doc',
    title: `Sơn Đốc Puffed Glutinous Rice Cracker`,
    subtitle: `Bánh Phồng Sơn Đốc — Bến Tre's hand-pounded glutinous rice cracker that puffs dramatically over charcoal — the loudest snack in the Mekong Delta.`,
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '4 hrs',
    rating: 4.9,
    baseServings: 16,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Sơn Đốc is a commune in Giồng Trôm district, Bến Tre — the same district as Mỹ Lồng, and like its neighbour, a village whose identity is built entirely around a single food craft. Where Mỹ Lồng makes bánh tráng, Sơn Đốc makes bánh phồng — thick, round discs of hand-pounded glutinous rice that, when held over charcoal heat, expand dramatically in 15-20 seconds from a flat, hard disc to a puffed, airy sphere three to four times its original thickness. The puffing is sudden, visual, and slightly theatrical — a flat disc placed on the grill suddenly inflates like a balloon, blistering gold and fragrant with coconut and sesame.\n\nThe puffing mechanism is physical, not chemical: glutinous rice (nếp) contains a high proportion of amylopectin starch — a branched starch structure that, when dried to very low moisture content and then exposed to sudden high heat, undergoes rapid gelatinisation and steam expansion within the starch matrix. The air trapped between the glutinous rice layers during rolling expands simultaneously, and the result is the dramatic puff that gives bánh phồng its name (phồng = to puff, to inflate).\n\nSơn Đốc bánh phồng is made from glutinous rice pounded by hand in large stone mortars — a process that continues in the village during the weeks before Tết, when the sound of mortars echoes through the commune from before dawn. The pounding develops the glutinous starch's elasticity in a way that machine grinding does not, and the resulting disc holds the air trapped during rolling and puffs more dramatically than machine-processed versions.`,
    ingredientSections: [
        {
            title: `Glutinous rice base`,
            items: [
                { amount: 500, unit: 'g', name: `glutinous rice (gao nep)`, note: `soaked overnight — minimum 8 hours` },
                { amount: 200, unit: 'ml', name: `full-fat coconut milk (nuoc cot dua)`, note: `added during pounding — the Bến Tre essential` },
                { amount: 80, unit: 'g', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 1, unit: 'tsp', name: `vanilla extract`, note: `optional — some Sơn Đốc families include it` },
            ],
        },
        {
            title: `Surface toppings (pressed in before drying)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `white sesame seeds (me trang)` },
                { amount: 2, unit: 'tbsp', name: `black sesame seeds (me den)`, note: `for visual contrast` },
            ],
        },
        {
            title: `For rolling and drying`,
            items: [
                { amount: 1, name: `rolling pin` },
                { amount: 1, name: `banana leaf or parchment paper`, note: `for rolling surface — prevents sticking` },
                { amount: 1, name: `bamboo drying mat or wire rack` },
            ],
        },
    ],
    steps: [
        {
            title: `Steam the soaked glutinous rice`,
            description: `Drain soaked glutinous rice completely. Steam in a bamboo steamer lined with banana leaf or muslin for 25-30 minutes until fully cooked — all grains should be translucent and sticky. The rice should be very soft and cohesive, easily mashed between fingers. Transfer immediately to a large mortar or heavy mixing bowl while still hot — the pounding must begin while the rice is hot and pliable. Cold glutinous rice becomes too stiff to pound into the smooth, elastic mass required for bánh phồng.`,
        },
        {
            title: `Pound the rice — the critical step`,
            description: `Working quickly while the rice is hot, begin pounding in the mortar with firm, rhythmic strokes. After 5 minutes of pounding, the rice will have broken down into a cohesive mass. Add coconut milk in 3 additions — 2-3 tbsp at a time — pounding after each addition until fully incorporated. Add sugar and salt. Continue pounding for 15-20 minutes total, adding coconut milk gradually, until the paste is completely smooth, elastic, and slightly shiny. It should stretch when pulled rather than tear, and hold a shape when pressed. The paste will be significantly softer than the original cooked rice.`,
            tip: `The hand-pounding develops the amylopectin starch network in a fundamentally different way than machine processing. Each strike of the pestle ruptures starch granules and crosslinks the long branched chains into a continuous elastic network — similar in principle to gluten development in wheat dough but achieved physically rather than chemically. A food processor can be used as a substitute (process 8-10 minutes on high) but produces a less elastic paste that puffs less dramatically. If using a processor, add an extra tablespoon of coconut milk to compensate.`,
        },
        {
            title: `Roll into thin discs`,
            description: `Divide the paste into 16 equal portions of approximately 50g each. Place one portion between two sheets of lightly oiled banana leaf or parchment paper. Roll out with a rolling pin into a round disc about 15cm in diameter and 2-3mm thick — as even as possible throughout. Uneven thickness causes uneven puffing: thin areas puff before thick areas, leaving patches that don't inflate. Scatter a small pinch of white and black sesame seeds over the top surface and press lightly with the rolling pin to embed them into the disc surface. Lift carefully and transfer to a drying rack.`,
        },
        {
            title: `Sun-dry — 6 to 8 hours`,
            description: `Lay rolled discs on bamboo drying mats in full sun. In Sơn Đốc, the strong Mekong Delta sun dries the discs completely in 6-8 hours — they must be turned once halfway through to ensure both sides dry evenly. In Germany in summer: a south-facing balcony in direct sun, 8-10 hours. In a food dehydrator: 45°C for 5-6 hours. The disc is fully dry when it is completely rigid, has no flex when held at the edge, and is slightly translucent in the thinner areas. Any residual moisture prevents the full dramatic puff — a partially moist disc inflates unevenly and partially deflates after removal from heat.`,
            tip: `Fully dried bánh phồng discs can be stored in an airtight tin for up to 6 months without loss of puffing quality — the low moisture content prevents spoilage and the starch structure remains stable indefinitely at low humidity. In Vietnam, bánh phồng is made in bulk before Tết and stored for the entire holiday period. In Germany, make a large batch and store — the puffing quality does not diminish over months if kept dry.`,
        },
        {
            title: `Puff over charcoal — the theatrical moment`,
            description: `Prepare charcoal with medium-hot coals and a wire rack 10-15cm above. Place a dried bánh phồng disc on the rack. Do not leave unattended — the puffing happens within 15-20 seconds of contact with heat. Watch the disc: within 10 seconds, the edges will begin to lift and the centre will start to dome upward. At 15-20 seconds, the entire disc will puff rapidly — inflating to 3-4 times its original thickness in a single, dramatic expansion. Remove immediately when fully puffed — an additional 5-10 seconds over the heat will begin to brown and deflate the edges.`,
            tip: `The puffing temperature window is narrow: below 160°C the disc does not puff fully; above 200°C it browns before puffing completely. The grey-ash-covered charcoal at the correct stage radiates at approximately 180-190°C at 12cm height — the ideal range. If the disc is browning too fast before puffing, raise the rack higher. If it is not puffing within 30 seconds, lower the rack or add more coals. On a gas burner: use a medium flame with a wire rack or rotating basket to achieve the same effect.`,
        },
        {
            title: `Eat immediately`,
            description: `A freshly puffed bánh phồng should be eaten within 2-3 minutes — the inflated structure begins to deflate as it cools and the puffed cracker loses its airy crispness. In Sơn Đốc, the eating and the puffing happen simultaneously — someone puffs while others eat. Break by pressing gently from the centre — the disc shatters into irregular airy pieces that dissolve almost immediately on the tongue, leaving the sweetness of glutinous rice, the fragrance of coconut, and the nuttiness of toasted sesame. No dipping sauce is needed or served — bánh phồng Sơn Đốc is complete on its own.`,
            tip: `The Tết tradition of bánh phồng in Bến Tre: on the morning of Tết, the eldest member of the household puffs the first disc over the family hearth while the rest of the family watches. The quality of the puff — how fully it inflates, how evenly it browns — is considered an omen for the coming year. A perfect golden puff means prosperity; an uneven or deflated puff means caution. This is the only food in Vietnamese culture whose cooking result is read as a forecast.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}