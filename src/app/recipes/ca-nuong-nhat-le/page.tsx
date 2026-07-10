'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-nuong-nhat-le',
    title: `Nhật Lệ Charcoal Grilled Fish`,
    subtitle: `Cá Nướng Nhật Lệ — Whole coastal fish grilled over charcoal with green chili salt and lemongrass — Đồng Hới's simplest and most honest seafood preparation.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `The Nhật Lệ River meets the sea at Đồng Hới — a wide, shallow estuary that produces the specific coastal fish culture of Quảng Bình. Cá nướng Nhật Lệ is the grilled fish that the beach restaurants along this estuary serve from noon until the last boats come in at dusk: a whole fish, whatever was caught that morning, cleaned and scored, rubbed with a muối ớt xanh (green chili salt) paste and stuffed with lemongrass, then grilled directly over charcoal until the skin is charred and the flesh inside is cooked in its own juice.\n\nThe defining feature of Quảng Bình cá nướng is the green chili — not the dried red chili used in most Vietnamese grilled fish preparations, but fresh green chili crushed with salt into a bright, sharp paste that is rubbed into the score cuts before grilling. The fresh green chili's volatile heat compounds (capsaicin in its freshest, most unstable form) react with the fish skin during grilling to produce a scent that is specific to this preparation — simultaneously of charred fish skin, fresh chili, and the sea — and cannot be replicated with dried or red chili.\n\nThe fish species vary by season and catch: cá thu (mackerel) in winter, cá đù (croaker) in spring, cá hồng (snapper) in summer, cá nục (scad) year-round. The preparation does not change — the quality of the catch changes the experience.`,
    ingredientSections: [
        {
            title: `Fish`,
            items: [
                { amount: 1, name: `whole fresh coastal fish (600-900g)`, note: `mackerel, croaker, snapper, or sea bream — scaled and gutted, head on; the Nhật Lệ catch of the day` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `initial cleaning rub` },
            ],
        },
        {
            title: `Muối ớt xanh rub (green chili salt — the Quảng Bình distinction)`,
            items: [
                { amount: 4, name: `fresh green chili (ot xanh tuoi)`, note: `not dried, not red — the fresh green sharpness is the point` },
                { amount: 1.5, unit: 'tsp', name: `coarse salt` },
                { amount: 2, name: `lemongrass stalks, inner white only, minced to paste` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Cavity stuffing`,
            items: [
                { amount: 2, name: `lemongrass stalks, bruised` },
                { amount: 3, name: `slices fresh ginger` },
                { amount: 2, name: `kaffir lime leaves, torn` },
            ],
        },
        {
            title: `Dipping sauce (nuoc cham gung la chanh)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 2, unit: 'tbsp', name: `warm water` },
                { amount: 20, unit: 'g', name: `fresh ginger, minced` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `fresh green chili, sliced`, note: `green — echoes the rub` },
                { amount: 2, name: `kaffir lime leaves, sliced paper-thin` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 1, name: `bunch mint` },
                { amount: 1, name: `cucumber, sliced` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Score and season the fish`,
            description: `Make 4-5 deep diagonal cuts through the skin to the bone on each side of the fish. Rub with salt, rest 5 minutes, rinse and pat dry. Score cuts should penetrate 8-10mm — Quảng Bình coastal fish (mackerel, croaker) have thick dorsal muscle that requires deep scoring for even cooking. Stuff the cavity with bruised lemongrass, ginger slices, and torn kaffir lime leaves.`,
        },
        {
            title: `Make the green chili salt rub`,
            description: `Pound fresh green chilies, coarse salt, lemongrass paste, and garlic in a mortar to a coarse, bright-green paste. Add sugar and oil. The paste should be vivid green, intensely aromatic, and smell of fresh chili and lemongrass. Apply generously over the entire fish exterior, pressing firmly into the score cuts. Marinate 15 minutes at room temperature — no longer, as fresh green chili begins to lose volatile oils after 20 minutes.`,
            tip: `Fresh green chili paste on fish skin during charcoal grilling produces a specific aromatic reaction — the capsaicin and chlorophyll compounds in the green chili react with the Maillard products from the charring skin, creating a scent that is sharper, greener, and more intensely of fresh chili than any dried or red chili preparation. This is the signature aroma of Nhật Lệ estuary grilling and cannot be replicated with any dried chili product.`,
        },
        {
            title: `Grill over charcoal`,
            description: `Prepare charcoal with medium-hot coals. Oil the grill grate. Place fish on grate and grill without moving for 5-6 minutes until the skin is charred and the fish releases cleanly from the grate. Flip using two wide spatulas. Grill 5-6 minutes on the second side. The fish is done when the flesh at the deepest score cut is completely white and flakes when pressed with a chopstick. Eyes will be white and slightly sunken.`,
        },
        {
            title: `Make the ginger-kaffir dipping sauce`,
            description: `Combine fish sauce, lime juice, sugar, warm water, minced ginger, garlic, sliced green chili, and paper-thin kaffir lime leaf. Stir until sugar dissolves. The kaffir lime leaf adds a citrus-floral note that echoes the lime leaves in the fish cavity. The green chili in the sauce echoes the green chili rub on the fish — a continuous green chili thread from exterior to sauce.`,
        },
        {
            title: `Serve and eat`,
            description: `Bring the whole fish to the table. Eat communally — peel skin from one side, flake flesh from the bone with chopsticks, dip in ginger-kaffir sauce. The fish head is offered to the eldest or most honoured guest. In Đồng Hới beach restaurants, cá nướng Nhật Lệ is eaten at a low table on the beach sand, with the sea visible from every seat and the smell of charcoal and green chili carried on the coastal wind. Reproduce the setting as closely as possible: the fish tastes better outdoors.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}