'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-can-da-lat',
    title: `Đà Lạt Cast Iron Mini Pancakes`,
    subtitle: `Bánh Căn Đà Lạt — Highland rice pancakes cooked in cast iron molds over charcoal, served with a rich pork-and-tomato sauce and highland vegetables.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh căn Đà Lạt is the highland adaptation of the coastal Cham-origin rice pancake — and it is a categorically different dish from its Phan Thiết or Phan Rang cousins despite sharing the same name and basic format. Where the coastal versions use terracotta molds and fish broth dipping sauce, Đà Lạt's bánh căn is cooked in cast iron molds (chảo gang), which retain heat differently from clay, producing a cake that is crispier on the base and more evenly cooked through the sides. The dipping sauce is not fish broth but a thick, slow-cooked pork and tomato sauce (nước chấm thịt) — a richer, more European-influenced preparation that reflects Đà Lạt's French colonial history, when the highland city was the summer retreat of the colonial administration and French cooking techniques entered the local kitchen.\n\nThe cast iron mold tray is the piece of equipment that defines Đà Lạt bánh căn. It holds eight to twelve small cups, each about 5 cm in diameter, and is heated over a charcoal brazier at the vendor's cart. The batter — a fermented rice and coconut milk mixture similar to the coastal version — is poured into the oiled cups, covered, and cooked until the base is golden and the surface is just set. A quail egg is cracked into each cup in the final 90 seconds. The finished cakes are lifted out with a thin wooden spatula and eaten immediately, dipped in the pork-tomato sauce with a side of highland pickled vegetables.\n\nThe highland setting changes the eating experience fundamentally. At 1,500 metres above sea level, Đà Lạt's year-round cool temperature (14-23°C) makes bánh căn a warming food rather than a refreshing one. The stalls operate from late afternoon into the cold highland evening, when the charcoal glow of the mold tray is as much about warmth as cooking.`,
    ingredientSections: [
        {
            title: `Fermented rice batter`,
            items: [
                { amount: 300, unit: 'g', name: `white rice (gao te)`, note: `soaked overnight minimum 8 hours` },
                { amount: 150, unit: 'ml', name: `full-fat coconut milk (nuoc cot dua)`, note: `room temperature` },
                { amount: 80, unit: 'ml', name: `soaking water from rice`, note: `slightly fermented — use in the grind` },
                { amount: 80, unit: 'ml', name: `fresh water` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
            ],
        },
        {
            title: `Toppings (per cake)`,
            items: [
                { amount: 16, name: `quail eggs (trung cut)`, note: `2 per person` },
                { amount: 100, unit: 'g', name: `dried shrimp (tom kho)`, note: `soaked 10 min, drained — 2-3 per cake` },
                { amount: 4, unit: 'tbsp', name: `spring onion oil (mo hanh)`, note: `made fresh: hot oil poured over sliced spring onion` },
            ],
        },
        {
            title: `Đà Lạt pork-tomato dipping sauce (nuoc cham thit — the highland distinction)`,
            items: [
                { amount: 200, unit: 'g', name: `pork shoulder (thit heo nac vai)`, note: `minced fine` },
                { amount: 3, name: `medium tomatoes, diced small` },
                { amount: 3, name: `shallots, minced` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
                { amount: 100, unit: 'ml', name: `water or light pork stock` },
            ],
        },
        {
            title: `Highland pickled vegetables (do chua Da Lat)`,
            items: [
                { amount: 100, unit: 'g', name: `kohlrabi (su hao), shredded` },
                { amount: 1, name: `carrot, shredded` },
                { amount: 100, unit: 'g', name: `Đà Lạt cabbage (bap cai Da Lat), shredded thin`, note: `sweeter and more tender than lowland cabbage` },
                { amount: 2, unit: 'tbsp', name: `rice vinegar` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `salt` },
            ],
        },
    ],
    steps: [
        {
            title: `Ferment the rice batter overnight`,
            description: `Rinse rice twice, then soak in cold water for 8-12 hours at room temperature. The soaking water will become faintly cloudy and smell mildly sour by morning — this fermentation is essential for the batter's slight tang and improved texture. Drain, reserving 80ml of the soaking water. Blend rice, reserved soaking water, fresh water, and coconut milk on high for 3-4 minutes until completely smooth. Add salt and sugar. Strain through a fine sieve into a bowl. Rest 30 minutes before cooking. The batter should be thin and pourable — similar in consistency to single cream.`,
            tip: `Đà Lạt bánh căn vendors ferment their batter for a full 12 hours because the cool highland temperature slows fermentation compared to the coast. In Germany in winter, the same principle applies — extend the soak to 12 hours and place the bowl near a warm location. A slightly warmer fermentation environment produces a more developed sour note, which is considered desirable in the highland version.`,
        },
        {
            title: `Make the highland pickled vegetables`,
            description: `Combine shredded kohlrabi, carrot, and cabbage in a bowl. Toss with salt, rest 10 minutes, then squeeze firmly to remove moisture. Combine rice vinegar, sugar, and 1 tbsp warm water, stir until dissolved. Pour over squeezed vegetables and toss to coat. Rest 20 minutes before serving — the vegetables should be lightly sour, slightly sweet, and retain crunch. This pickle is the palate-reset component eaten between rounds of bánh căn, and it is specific to the Đà Lạt version. The coastal versions serve raw mango or papaya salad; Đà Lạt serves highland vegetables because mangoes do not grow at altitude.`,
        },
        {
            title: `Make the pork-tomato dipping sauce`,
            description: `Heat neutral oil in a pan over medium heat. Sauté minced shallots and garlic until golden, about 2 minutes. Add minced pork and cook, breaking up constantly, until no pink remains — about 4 minutes. Add diced tomatoes and stir — the tomatoes will break down and release their liquid over 5-6 minutes of cooking. Add fish sauce, sugar, black pepper, and water or stock. Simmer 8-10 minutes until the sauce has thickened to a consistency that coats the back of a spoon. The finished sauce should be rich, slightly sweet from the tomato, savoury from the pork and fish sauce, and deep orange-red in colour. Keep warm on the lowest heat throughout serving.`,
            tip: `The pork-tomato sauce is what makes bánh căn Đà Lạt fundamentally different from every coastal version. It is thicker, richer, and more substantial — a sauce that works as a condiment and as a small meat dish simultaneously. Some Đà Lạt stalls add a small amount of pork liver to the sauce for additional depth; this is optional but traditional in the older stalls around Đà Lạt market.`,
        },
        {
            title: `Heat the cast iron molds`,
            description: `A cast iron takoyaki pan is the most practical home substitute for the Đà Lạt bánh căn mold tray. Heat the pan over medium heat for 5 minutes until evenly hot throughout — cast iron requires longer preheating than other materials but retains heat better between batches. Brush each cup with a thin layer of neutral oil. The oil should shimmer immediately in the cup — if it does not, the pan is not hot enough. This even heating is why cast iron produces a crispier, more evenly coloured base than terracotta, which heats inconsistently.`,
        },
        {
            title: `Cook the bánh căn`,
            description: `Pour batter into each cup to about two-thirds full — it should sizzle immediately on contact. Cover with a lid or sheet of foil and cook 2 minutes until the sides are set and pulling away from the cup edges. Crack one quail egg into each cup. Add 2-3 soaked dried shrimp. Cover again and cook 90 seconds until the egg white is just set but the yolk remains runny. The base should be deep golden and release cleanly from the cast iron — use a thin wooden skewer run around the edge to assist. Remove with a thin spatula.`,
            tip: `Cast iron holds heat so well that it continues cooking the cake after the heat source is reduced. Remove cakes from the iron the moment the egg white sets — they will continue cooking on the plate from their own residual heat. The base colour should be amber-golden, not pale (underdone) or dark brown (overdone). The egg yolk should run when the cake is cut open at the table.`,
        },
        {
            title: `Make the mỡ hành`,
            description: `Slice 4 spring onions thin. Place in a heatproof bowl with a pinch of salt. Heat 4 tbsp neutral oil until shimmering at approximately 180°C. Pour over spring onions in one motion — it will sizzle vigorously. Stir once. Use within 30 minutes. In Đà Lạt, mỡ hành is made in larger quantities at the start of the evening and kept warm near the charcoal — it is applied more generously than in the coastal versions because the cool highland air cools the oil faster, and more oil provides more insulation to keep the cakes warm between cooking and eating.`,
        },
        {
            title: `Serve and eat the Đà Lạt way`,
            description: `Place 4-6 freshly cooked bánh căn in a small bowl or on a plate. Spoon mỡ hành generously over each cake. Serve with the warm pork-tomato sauce in a separate bowl and the highland pickled vegetables alongside. In Đà Lạt, the cake is lifted whole and dipped base-first into the thick sauce — the sauce coats the crispy bottom and is held there by the egg on top acting as a cup. Eat in two bites. Take a pinch of pickled vegetable between cakes. The meal is eaten in continuous rounds until satisfied, each batch cooked fresh. The cold highland air means the cakes cool quickly — eat each batch within 3 minutes of cooking.`,
            tip: `The cold is part of the Đà Lạt bánh căn experience. Eating hot cakes in cold air, with steam rising from each bite, with the charcoal glow of the mold tray providing warmth — this sensory context is as important to the dish as any ingredient. Đà Lạt vendors who have relocated to Ho Chi Minh City report that customers say the bánh căn "tastes different" even when the recipe is identical. The altitude is not just context; it is an ingredient.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}