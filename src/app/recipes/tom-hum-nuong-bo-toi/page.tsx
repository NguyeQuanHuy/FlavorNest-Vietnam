'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tom-hum-nuong-bo-toi',
    title: 'Tôm Hùm Nướng Bơ Tỏi (Phú Yên Grilled Lobster with Garlic Butter)',
    subtitle: 'Live spiny lobster from the waters off Hòn Yến island, halved and grilled over charcoal with a compound butter of garlic, lemongrass, and kaffir lime leaf until the shell chars and the butter bastes the flesh from above. The premium seafood of Phú Yên — the dish that the island boats bring in at dawn and the restaurants serve by noon.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/tom-hum-nuong-bo-toi.jpg',
    intro: `Tôm hùm nướng bơ tỏi is the premium seafood preparation of Phú Yên — the dish that defines the province's identity as one of the great lobster-producing regions of Vietnam. The spiny lobsters of the waters around Hòn Yến island and the Phú Yên coast are a specific variety: Panulirus ornatus, the ornate spiny lobster, which grows large (1-3kg adults), has firm, sweet white flesh, and carries a flavor that reef-caught wild lobster in warm tropical waters produces and that no farmed or cold-water lobster can replicate. The Phú Yên coast produces the majority of Vietnam's spiny lobster harvest, and the lobster restaurants along the beachfront in Tuy Hòa and the seafood villages of Sông Cầu serve it in preparations that range from simple to elaborate — but the nướng bơ tỏi version, grilled over charcoal with a compound butter that is simultaneously Vietnamese and French in its ingredients, is the one that represents both the quality of the lobster and the cooking tradition of the central coast most clearly. The butter compound used in Phú Yên tôm hùm nướng is not the plain garlic butter of a Western preparation: it contains garlic and butter as the base, but also finely minced lemongrass, shredded kaffir lime leaf, and a small amount of fish sauce that adds umami depth without adding fishiness. Applied to the cut surface of the halved lobster before and during grilling, the butter melts over the flesh, carries the aromatic compounds of the lemongrass and kaffir lime into the meat, and caramelizes at the edges in the charcoal heat. The result is a lobster that tastes simultaneously of the sea it came from and the specific aromatic character of the central Vietnamese coast.`,
    ingredientSections: [
        {
            title: 'Lobster',
            items: [
                { amount: 2, name: 'live spiny lobsters (tôm hùm), 600-800g each', note: 'Phú Yên ornate spiny lobster preferred — Panulirus ornatus. If unavailable: any live spiny lobster or large rock lobster. The dish can also be made with very large prawns (300g+) using the same technique.' },
            ],
        },
        {
            title: 'Vietnamese garlic butter (bơ tỏi kiểu Việt)',
            items: [
                { amount: 150, unit: 'g', name: 'unsalted butter', note: 'softened to room temperature' },
                { amount: 8, name: 'garlic cloves', note: 'very finely minced — almost a paste' },
                { amount: 2, name: 'lemongrass stalks', note: 'inner stalk only, minced to a paste' },
                { amount: 4, name: 'kaffir lime leaves', note: 'central rib removed, shredded into the finest possible strips' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'the Vietnamese element that adds umami without fishiness' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 2, name: 'spring onions', note: 'green parts only, very finely sliced' },
            ],
        },
        {
            title: 'Charcoal fire',
            items: [
                { amount: 1, unit: 'kg', name: 'hardwood charcoal', note: 'built to medium-hot — lobster grills better at slightly lower temperature than fish or shrimp' },
            ],
        },
        {
            title: 'Dipping sauces',
            items: [
                { amount: 3, unit: 'tbsp', name: 'muối tiêu chanh', note: 'salt, coarse pepper, lime squeezed at the table — the primary dipping sauce for Phú Yên lobster' },
                { amount: 3, unit: 'tbsp', name: 'soy sauce with ginger', note: '3 tbsp soy sauce + 1 tbsp fresh ginger julienned + 1 tsp sesame oil — the secondary sauce' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, name: 'kaffir lime leaves, extra', note: 'finely shredded — scattered over the finished lobster' },
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice or fresh baguette', note: 'for mopping the butter' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the Vietnamese garlic butter',
            description: 'Combine softened butter with very finely minced garlic, lemongrass paste, shredded kaffir lime leaves, fish sauce, sugar, white pepper, and spring onion. Beat together until completely incorporated. The butter should smell intensely of lemongrass and kaffir lime with the garlic as a background note. Taste — it should be fragrant, slightly salty, and aromatic. Roll into a cylinder in plastic wrap and refrigerate for 30 minutes to firm slightly — this makes it easier to apply to the lobster. Or use immediately at room temperature.',
            tip: 'The fish sauce in the compound butter is the single ingredient that makes this preparation Vietnamese rather than French. It adds an invisible layer of umami depth that makes the butter taste more complex than its components suggest. Use only 1 tablespoon — enough to add depth, not enough to taste of fish sauce.',
        },
        {
            title: 'Dispatch and halve the lobster',
            description: 'Place the live lobster in the freezer for 15 minutes to sedate. Place on a cutting board. Insert a sharp, heavy knife at the center of the head and cut forward through the head in one decisive motion — this dispatches the lobster instantly. Then cut backward through the tail to halve the lobster completely. Remove the stomach sac (the small gravel-filled organ behind the eyes) and the intestinal tract running through the tail. Keep the green tomalley — it is delicious and will absorb the butter during grilling.',
            tip: 'The freezer sedation followed by a decisive single cut is the most humane home dispatch method. Work quickly and confidently — hesitation produces a messier cut. A sharp, heavy chef\'s knife or cleaver is essential; a thin or dull knife requires multiple strokes.',
        },
        {
            title: 'Apply the compound butter generously',
            description: 'Place the halved lobsters cut-side up. Apply a generous amount of the compound butter to the exposed flesh of each half — spread it into the crevices between the flesh and shell, over the tomalley, and into the leg cavities. Reserve half the butter for basting during grilling. The butter at this stage should be thick enough to stay on the flesh surface rather than running off — if too liquid, refrigerate the butter-applied lobster for 10 minutes before grilling.',
            tip: 'Generous butter application is the technique that produces the caramelized, deeply aromatic result. Insufficient butter produces a grilled lobster that is good but not extraordinary. The butter should be visibly piled onto the flesh, not thinly spread.',
        },
        {
            title: 'Grill shell-side down first over charcoal',
            description: 'Build the charcoal fire to medium-hot — slightly less intense than for shrimp or fish. Place the lobster halves shell-side down over the coals. The shell protects the flesh and conducts heat gently. Grill shell-side down for 8-10 minutes for 600g lobster, 10-12 minutes for 800g. The shells will turn bright orange-red. The flesh should become opaque white at the edges while remaining slightly translucent in the center.',
            tip: 'Shell-side down first is the technique — the shell conducts heat to the flesh gradually and prevents the delicate lobster meat from tightening and drying before the shell heats through. Flesh-side down first produces a grey, rubbery result from the rapid heat application.',
        },
        {
            title: 'Flip and baste — the final caramelization',
            description: 'When the shell is completely orange and the flesh is mostly cooked, flip to flesh-side down for 2-3 minutes. Apply the remaining compound butter generously to the shell side as it faces up — it will melt and run down over the flesh below. The flesh in direct contact with the grill caramelizes in these final minutes. The lobster is done when the flesh is completely opaque, pulls away from the shell with gentle pressure, and the compound butter on the surface has caramelized to a golden glaze.',
            tip: 'The final 2-3 minutes flesh-side down is the caramelization stage that produces the golden, slightly charred surface on the flesh that makes grilled lobster visually and texturally different from steamed. The specific char marks from the grill are the visual signature of tôm hùm nướng.',
        },
        {
            title: 'Plate and serve with both dipping sauces',
            description: 'Transfer the grilled lobster halves to a plate, shell-side down, flesh facing up. Scatter finely shredded kaffir lime leaves, sliced spring onion, and fresh chili over the flesh. Serve immediately with both dipping sauces — the muối tiêu chanh and the ginger soy — in individual small bowls, rice or baguette alongside, and lime wedges. The butter that has pooled in the shell cavity is the best element: spoon it over rice or soak up with bread.',
            tip: 'The pooled compound butter in the shell cavity after grilling — caramelized, fragrant with lemongrass and kaffir lime, mixed with the lobster juices — is the most intensely flavored element of the entire dish. Phú Yên diners spoon it over rice before eating the lobster. Do not discard it.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
