'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-trang-nuong-da-lat',
    title: `Đà Lạt Grilled Rice Paper Pizza`,
    subtitle: `Bánh Tráng Nướng Đà Lạt — Thin rice paper grilled over charcoal with quail egg, spring onion oil, dried shrimp, and chili sauce — Đà Lạt's most iconic street snack.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh tráng nướng is Đà Lạt's most photographed street food and the snack most closely identified with the city by Vietnamese from other provinces. Called "pizza Đà Lạt" on social media — a name that amuses locals and has stuck regardless — it is a thin dried rice paper sheet toasted directly over charcoal or a gas flame until crispy and slightly charred at the edges, then loaded with toppings while still on the heat: a quail egg cracked and spread across the surface, dried shrimp, spring onion oil, sliced chili, and a combination of sweet chili sauce and Maggi seasoning that caramelises slightly from the residual heat of the paper.\n\nThe dish is specific to Đà Lạt in the sense that no other Vietnamese city has made it the street food institution it is here. Cart vendors operate from late afternoon along Nguyễn Chí Thanh and around Đà Lạt market, each with a small charcoal brazier, a stack of rice papers, a row of toppings in small containers, and a flat metal spatula for managing the papers on the heat. The vendor's speed is part of the spectacle: an experienced bánh tráng nướng vendor produces a finished sheet every 90 seconds, working two or three papers simultaneously at different stages of completion.\n\nThe highland cold is inseparable from the eating experience. Bánh tráng nướng held in both hands in the cool Đà Lạt evening, the charcoal warmth still radiating from the paper, the quail egg just set and slightly runny at the yolk, the spring onion oil fragrant — this is one of those street foods where the context is so integral to the flavour that recreating it at sea level produces a technically identical but experientially diminished result. This recipe documents both the technique and the context.`,
    ingredientSections: [
        {
            title: `Base`,
            items: [
                { amount: 8, name: `thin dried rice paper sheets (banh trang mong)`, note: `22-24cm diameter — the thin type, not the thick spring roll wrapper` },
            ],
        },
        {
            title: `Toppings (per sheet)`,
            items: [
                { amount: 8, name: `quail eggs (trung cut)`, note: `1 per sheet — cracked directly onto the paper` },
                { amount: 4, unit: 'tbsp', name: `dried shrimp (tom kho nho)`, note: `small — soaked 5 min, drained, patted dry` },
                { amount: 100, unit: 'g', name: `pork floss (ruoc heo / cha bong)`, note: `scattered lightly — the Đà Lạt vendor standard` },
            ],
        },
        {
            title: `Mỡ hành (spring onion oil — made fresh)`,
            items: [
                { amount: 5, name: `spring onions, sliced very thin` },
                { amount: 4, unit: 'tbsp', name: `neutral oil` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Sauce combination (drizzled over)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `sweet chili sauce (tuong ot ngot)` },
                { amount: 1.5, unit: 'tbsp', name: `Maggi seasoning sauce`, note: `the Đà Lạt vendor standard — not soy sauce, specifically Maggi` },
                { amount: 1, unit: 'tbsp', name: `sriracha or chili sauce`, note: `for heat — adjust to preference` },
                { amount: 1, unit: 'tsp', name: `mayonnaise`, note: `optional — some vendors add a thin drizzle` },
            ],
        },
        {
            title: `Optional additional toppings`,
            items: [
                { amount: 2, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 2, name: `fresh bird's eye chili, sliced thin` },
                { amount: 1, unit: 'tbsp', name: `toasted sesame seeds (me rang)` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the mỡ hành`,
            description: `Slice spring onions very thin — thinner than for most preparations because they cook directly on the hot paper surface rather than in a separate pan. Place in a small heatproof bowl with salt. Heat neutral oil in a small saucepan over medium-high heat until shimmering — test with a single spring onion piece, it should sizzle immediately on contact. Pour the hot oil over the spring onions all at once. Stir once. The onions will flash-cook in the residual heat of the oil, turning bright green and fragrant. Set aside. Use within 30 minutes for maximum fragrance.`,
        },
        {
            title: `Prepare toppings in order`,
            description: `Soak dried shrimp in warm water 5 minutes, drain and pat completely dry — wet shrimp on the paper creates steam rather than toasting, softening the paper beneath them. Combine sweet chili sauce, Maggi seasoning, and sriracha in a small bowl — stir to combine. This sauce combination is drizzled rather than spread, so it should be pourable. Have all toppings ready in small bowls before heating the paper — once the paper is on the heat, assembly must happen within 60 seconds.`,
            tip: `The Maggi seasoning is not a substitute for soy sauce in this preparation — it is the authentic ingredient. Vietnamese Maggi (Maggi Seasoning Sauce) has a specific umami profile and colour that is part of the dish's visual and flavour identity. At German supermarkets, Maggi Würze is nearly identical to the Vietnamese product and is the correct substitute. The dark colour of Maggi against the orange sweet chili creates the visual contrast that defines bánh tráng nướng's appearance.`,
        },
        {
            title: `Toast the rice paper over charcoal`,
            description: `Place a dry rice paper sheet directly on a charcoal grill grate over medium coals, or directly on a gas burner set to medium-low using a wire rack or grill mesh placed over the flame. The paper will begin to blister and contract within 10-15 seconds. Move it constantly over the heat using tongs or a spatula — the thin spots toast faster than the thick spots and will burn if left stationary. After 30-40 seconds the entire sheet should be uniformly blistered, slightly golden, and rigid but not yet brown. It should lift cleanly from the grate.`,
            tip: `The correct toast level for bánh tráng nướng is blistered-but-pliable, not fully crispy. The toppings are added while the paper is still on the heat for another 60-90 seconds — during this time the paper continues cooking to the final crispy stage while the egg sets. If the paper is already fully crispy before the egg is added, it will burn during the topping stage. The sequence is: toast to 70% done, add toppings, finish to 100% done with toppings on.`,
        },
        {
            title: `Add toppings in order — 60 seconds on the heat`,
            description: `With the 70%-toasted paper still on the heat: crack one quail egg directly onto the centre of the paper and spread it with the back of a spoon over two-thirds of the surface — leave the outer edge bare as it will crisp faster without egg. Working quickly: drizzle the sauce combination over the egg, scatter dried shrimp across the surface, add a pinch of pork floss, spoon mỡ hành over the entire sheet. The heat from below and the residual heat of the mỡ hành oil will set the egg white while leaving the yolk slightly runny. Total time on heat after egg: 60-90 seconds.`,
            tip: `The quail egg spreading technique is the skill that separates experienced vendors from beginners. The egg must be spread quickly — within 5 seconds of cracking — because it begins setting immediately on the hot paper surface. Use the convex back of a teaspoon and work from the centre outward in a thin, even layer. An unevenly spread egg has thick white sections that take longer to cook, creating timing inconsistency across the sheet.`,
        },
        {
            title: `Remove and finish`,
            description: `When the egg white is set and the paper is audibly crispy when tapped with a fingernail, remove from heat with a wide spatula. The paper should be rigid and snap rather than bend. Place on a flat surface and immediately add fried shallots, sliced fresh chili, toasted sesame, and any additional toppings. Fold the sheet in half or quarters — or serve flat for sharing. In Đà Lạt, the vendor folds it once (in half) and hands it over in a small plastic bag that retains warmth for the walk away from the stall. The bag also catches any sauce drips.`,
            tip: `Bánh tráng nướng must be eaten within 5 minutes of coming off the heat. The paper absorbs moisture from the egg and sauce and loses its crispness rapidly — at 5 minutes it is still excellent; at 10 minutes it has softened to a texture that is less satisfying. At Đà Lạt stalls, the eating happens standing at the cart, beginning before the vendor has finished folding. This is not impatience — it is the correct way to eat the dish at its best.`,
        },
        {
            title: `The Đà Lạt eating experience`,
            description: `Hold the folded paper in both hands — the warmth from the charcoal still radiating through the paper is part of the experience. Eat from one end, biting through the crispy paper, the set egg, the sauce caramelised at the edges, the soft pork floss, the fragrant mỡ hành. The combination of textures in a single bite — crispy paper, slightly runny egg yolk, chewy dried shrimp, soft pork floss, fragrant spring onion oil — is the dish's achievement. No single element is remarkable alone; together they are specific and irreplaceable. Eat in the cold if possible.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}