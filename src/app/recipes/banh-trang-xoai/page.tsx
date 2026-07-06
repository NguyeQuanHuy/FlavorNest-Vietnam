'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-trang-xoai',
    title: `Green Mango Rice Paper Snack`,
    subtitle: `Bánh Tráng Xoài — Tây Ninh-style rice paper loaded with shredded green mango, dried shrimp, chili salt, and roasted peanuts.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Bánh tráng xoài is the snack that schoolchildren in Tây Ninh, Bình Dương, and Ho Chi Minh City buy from street vendors outside the school gate at 3pm — a thin, crispy rice paper sheet loaded with shredded green mango, dried shrimp, chili salt, roasted peanuts, and a drizzle of sweet chili sauce, then folded or rolled and eaten in four bites standing up. It costs less than a cup of coffee and delivers every flavour register simultaneously: sour from the green mango, salty from the dried shrimp and chili salt, sweet from the sauce, nutty from the peanuts, and a slow building heat from the chili.\n\nTây Ninh is the origin and the benchmark. The province grows some of the finest xoài xanh (green mango) in the south — the variety used for bánh tráng is harvested unripe, when the flesh is firm, intensely sour, and almost white-green inside. The thinly shredded mango holds its texture for the duration of eating without softening. The rice paper (bánh tráng) used is the thin, crispy grilled type — not the fresh soft sheets used for gỏi cuốn — and in Tây Ninh it is produced locally from the province's own rice, thinner and crispier than the Saigon versions.\n\nThe dish requires no cooking. It is assembly food — the skill is in the ratios and the order of layering. Too much sauce and the rice paper softens before the first bite. Too little chili salt and the mango's sourness dominates without direction. The correct bánh tráng xoài is eaten within 90 seconds of assembly.`,
    ingredientSections: [
        {
            title: `Base`,
            items: [
                { amount: 8, name: `thin crispy grilled rice paper sheets (banh trang nuong)`, note: `Tay Ninh brand preferred — substitute any thin crispy Vietnamese rice cracker` },
            ],
        },
        {
            title: `Green mango topping`,
            items: [
                { amount: 300, unit: 'g', name: `green unripe mango (xoai xanh)`, note: `peeled and shredded on a mandoline or box grater into thin 5 cm strips — must be firm and sour, not sweet` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `tossed with shredded mango, rested 5 min, squeezed dry — removes excess moisture` },
            ],
        },
        {
            title: `Toppings`,
            items: [
                { amount: 3, unit: 'tbsp', name: `dried shrimp (tom kho nho)`, note: `small dried shrimp — soaked 5 min in warm water, drained and patted dry` },
                { amount: 3, unit: 'tbsp', name: `roasted peanuts (dau phong rang)`, note: `crushed coarsely — halves and quarters, not powder` },
                { amount: 2, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, name: `bunch rau ram (Vietnamese coriander)`, note: `leaves only` },
            ],
        },
        {
            title: `Chili salt (muoi ot — the essential seasoning)`,
            items: [
                { amount: 2, unit: 'tsp', name: `coarse salt` },
                { amount: 1, unit: 'tsp', name: `chili powder (bot ot)` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 0.25, unit: 'tsp', name: `MSG (bot ngot)`, note: `optional but traditional — used in every street vendor version in Tay Ninh` },
            ],
        },
        {
            title: `Sauces (drizzled at assembly)`,
            items: [
                { amount: 2, unit: 'tbsp', name: `sweet chili sauce (tuong ot ngot)`, note: `Sriracha-style or Vietnamese mae ploy equivalent` },
                { amount: 1, unit: 'tbsp', name: `soy sauce or Maggi seasoning`, note: `adds umami depth — Maggi is the Tay Ninh vendor standard` },
                { amount: 1, unit: 'tsp', name: `lime juice`, note: `a few drops only — amplifies the mango sourness` },
            ],
        },
    ],
    steps: [
        {
            title: `Prepare the green mango`,
            description: `Peel the green mango and shred on a mandoline or box grater into thin strips 5 cm long and 2-3 mm wide. The strips must be thin enough to drape over the rice paper without creating bulk that causes the paper to crack when folded. Toss the shredded mango with 1 tsp salt and let sit 5 minutes — the salt draws out excess moisture that would otherwise soften the rice paper immediately. After 5 minutes, grab the mango in a clean cloth or your hands and squeeze firmly to remove the liquid. The mango strips should be slightly wilted but still have crunch. Taste — they should be intensely sour and lightly salty.`,
            tip: `The sourness level of the mango is the foundation of the dish. In Tay Ninh, vendors select mango that has been on the tree for exactly 60-70 days after flowering — firm, green, and maximally sour before any sugar development begins. At German supermarkets or Asian grocers, choose the firmest, greenest mango available and avoid any with yellow patches. A mango that gives under pressure is too ripe for this preparation.`,
        },
        {
            title: `Make the chili salt`,
            description: `Combine coarse salt, chili powder, sugar, and MSG if using in a small bowl. Mix thoroughly. The mixture should be a pale orange-red, faintly sweet, and smell of chili without being overwhelming. This muoi ot is the seasoning that ties all the toppings together — it goes on last, pinched over the assembled sheet. Store any excess in an airtight jar; it keeps for weeks and is used for fruit dipping throughout Vietnamese cuisine.`,
            tip: `MSG in muoi ot is not a shortcut — it is the authentic seasoning agent used by every street vendor in Tay Ninh and across southern Vietnam for fruit and rice paper snacks. It amplifies the flavours of the mango, dried shrimp, and peanuts without adding its own flavour. Omit for a cleaner result; include for the exact street vendor taste.`,
        },
        {
            title: `Rehydrate the dried shrimp`,
            description: `Place small dried shrimp in warm water for 5 minutes — just long enough to soften slightly and lose the hardest crunch, but not long enough to become mushy. Drain and pat completely dry with paper towel. Dry shrimp on the rice paper adds textural contrast; wet shrimp makes the paper soggy within seconds. If the shrimp are very small (the preferred size), leave whole. Larger dried shrimp should be torn in half.`,
        },
        {
            title: `Assemble — order is critical`,
            description: `Work one sheet at a time, assembling and eating before building the next — bánh tráng xoài softens quickly once sauced. Place one crispy rice paper sheet on a flat surface. Working from centre outward: spread a thin layer of sweet chili sauce across the surface with the back of a spoon, leaving a 1 cm border. Add a few drops of Maggi and lime juice. Pile squeezed green mango strips evenly over the sauce. Scatter dried shrimp across the mango. Add crushed peanuts and fried shallots. Place 4-5 rau ram leaves. Pinch a generous amount of muoi ot evenly over everything.`,
            tip: `The sauce goes on first — directly on the rice paper before any solid toppings. This seals the paper surface and slows moisture absorption from the mango. If the mango goes on first without the sauce barrier, the paper softens from the mango's residual moisture within 30 seconds. Sauce first is the technique that keeps the paper crispy for the full 90-second eating window.`,
        },
        {
            title: `Fold and eat immediately`,
            description: `Fold the rice paper in half, then in half again to form a quarter-circle — the toppings are now enclosed. Eat immediately, within 90 seconds of assembly. The first bite should be fully crispy; by the last bite the paper will have softened slightly from the mango and sauce — this gradual texture change from crispy to chewy is part of the eating experience, not a failure. In Tay Ninh, vendors fold the sheet into quarters directly in front of the customer and hand it over in a small plastic bag. Eating begins before the bag is fully closed.`,
            tip: `Bánh tráng xoài is non-negotiably immediate food. There is no version that stores well or travels more than a few minutes. If making for a group, set up an assembly station and build each sheet individually as it is eaten — never pre-assemble.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
