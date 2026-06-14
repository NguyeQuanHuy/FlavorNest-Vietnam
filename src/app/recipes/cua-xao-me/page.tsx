'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cua-xao-me',
    title: 'Cua Xào Me (Crab Stir-Fried with Tamarind Sauce)',
    subtitle: 'Whole crab sections deep-fried until the shell crisps, then tossed in a wok with a tamarind sauce of palm sugar, fish sauce, garlic, and chili until the sauce reduces to a dark, glossy, sweet-sour glaze that clings to every surface — the Vietnamese crab preparation where the sauce is as important as the crab.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/cua-xao-me.jpg',
    intro: `Cua xào me is the tamarind crab of Vietnamese coastal cooking — a preparation that sits in the same family as Singapore chilli crab and Hong Kong black pepper crab but is distinctly Vietnamese in its use of tamarind (me) as the souring and flavoring agent and in the specific technique of frying the crab sections first before tossing in the sauce. The tamarind sauce in cua xào me is not the smooth, thinned tamarind broth of canh chua — it is a concentrated reduction of tamarind paste, palm sugar, fish sauce, garlic, and fresh chili that is cooked down in the wok until it thickens to the point where it coats the back of a spoon heavily and has developed the deep, almost caramel-like complexity that tamarind produces when reduced with sugar and heat. When the fried crab sections are tossed in this sauce over maximum heat, the sauce reduces further against the hot crab surfaces and forms a dark, glossy, sour-sweet glaze that penetrates through the cracked shell sections and coats the flesh directly. The result is a crab that is simultaneously crispy in texture from the initial frying and richly sauced — the exterior of the shell carrying the caramelized tamarind-palm sugar glaze while the interior flesh is protected by the shell and remains juicy and sweet. Cua xào me is the dish that non-Vietnamese diners encounter most easily because the tamarind-sweet-sour flavor profile is familiar from other Asian cuisines, but the Vietnamese execution — the palm sugar adding a different sweetness from white sugar, the fish sauce adding umami rather than salt, the crispy shell providing textural contrast to the sauce — produces a result that is specifically its own.`,
    ingredientSections: [
        {
            title: 'Crab',
            items: [
                { amount: 1, name: 'large mud crab or blue swimmer crab, 800g-1kg', note: 'live — dispatched, cleaned, and portioned into pieces: body halved, claws separated and lightly cracked, leg sections.' },
                { amount: 50, unit: 'g', name: 'cornstarch', note: 'for dusting before frying' },
                { amount: 500, unit: 'ml', name: 'neutral oil', note: 'for deep frying' },
            ],
        },
        {
            title: 'Tamarind sauce',
            items: [
                { amount: 60, unit: 'g', name: 'tamarind paste (me chua)', note: 'dissolved in 100ml hot water, strained — the primary souring and flavoring agent' },
                { amount: 3, unit: 'tbsp', name: 'palm sugar (đường thốt nốt)', note: 'or brown sugar — palm sugar produces a deeper, more complex sweetness than white sugar' },
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce', note: 'adds additional umami depth' },
                { amount: 1, unit: 'tsp', name: 'sugar', note: 'additional for balance' },
                { amount: 3, unit: 'tbsp', name: 'water', note: 'added to the sauce if it reduces too quickly' },
            ],
        },
        {
            title: 'Aromatics',
            items: [
                { amount: 6, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'minced — tamarind crab should have clear heat' },
                { amount: 2, name: 'fresh red chilies', note: 'sliced diagonally — for color and texture in the final dish' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'for the wok step' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces — added in the last 30 seconds' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground — finishing seasoning' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, unit: 'portions', name: 'steamed jasmine rice or fresh baguette', note: 'the baguette is specifically good for mopping the tamarind sauce' },
                { amount: 1, name: 'bowl warm water with lime', note: 'finger bowl' },
            ],
        },
    ],
    steps: [
        {
            title: 'Dispatch, clean, and portion the crab',
            description: 'Freeze the live crab for 20 minutes. Remove the top shell, discard the gills, rinse the body cavity. Reserve any roe. Halve the body with a cleaver, separate the claws, and crack them lightly — one firm tap at the joint to create a small opening for the sauce to penetrate. Dust all pieces lightly in cornstarch and shake off excess. Pat dry — any moisture causes dangerous splattering in the frying oil.',
            tip: 'The claw cracking for cua xào me should be slightly more generous than for rang muối — the tamarind sauce needs to penetrate the claw and coat the flesh inside, not just the exterior. One firm crack along the length of each claw creates the access point the sauce needs.',
        },
        {
            title: 'Deep-fry the crab pieces',
            description: 'Heat oil to 180°C. Fry the crab pieces in batches for 3-4 minutes until the shell turns bright orange and the thin sections begin to crisp. The crab should be about 80% cooked at this stage — the wok step finishes it. Drain on paper towels. The crispy exterior from frying is what allows the tamarind sauce to cling and caramelize rather than sliding off.',
            tip: 'The frying step for cua xào me serves a different purpose than for rang muối. For rang muối the shell must become genuinely crispy; for cua xào me the shell needs only to firm and color — the subsequent sauce toss will add more flavor than crunch.',
        },
        {
            title: 'Make the tamarind sauce',
            description: 'Dissolve the tamarind paste in 100ml hot water, pressing and stirring until completely incorporated. Strain through a fine sieve — the strained liquid should be thick, dark, and intensely sour. Combine with palm sugar, fish sauce, oyster sauce, and additional sugar in a small bowl. Taste: the raw sauce should taste intensely sour, quite sweet, and savory — more assertive in all directions than the finished dish will be, because it reduces and mellows during cooking.',
            tip: 'Making the tamarind sauce ahead and having it ready is essential for cua xào me. The wok step moves fast once it starts and there is no time to measure and combine ingredients during cooking. Prepare and taste the sauce before the crab goes anywhere near the wok.',
        },
        {
            title: 'Build the aromatic base in the wok',
            description: 'Heat the wok over maximum heat until smoking. Add oil. Add minced garlic, shallots, and bird\'s eye chili. Fry for 30-45 seconds until golden and the wok smells aggressively of garlic — this is a fast, high-heat fry, not a gentle sweat. The aromatics should be slightly charred at the edges before the tamarind sauce goes in.',
            tip: 'The slightly charred garlic and shallot base is intentional in cua xào me — the char adds a bitter note that balances the tamarind sweetness. For this specific dish, golden-to-charred edges are correct; for most other wok preparations they would be an error.',
        },
        {
            title: 'Add sauce and crab — the final reduction',
            description: 'Pour the tamarind sauce into the hot wok over the aromatics — it will bubble aggressively and reduce quickly. Stir the sauce for 30 seconds until it thickens slightly and the palm sugar has fully dissolved. Add all the fried crab pieces. Toss continuously for 2-3 minutes, coating every surface in the reducing tamarind glaze. Add the sliced red chilies and spring onion pieces in the final 30 seconds. The sauce should be thick, glossy, and clinging to every surface when done — not pooling at the bottom of the wok.',
            tip: 'The 2-3 minute tossing stage is when the tamarind sauce reduces from a liquid glaze to the dark, sticky coating that defines cua xào me. If the sauce reduces too quickly, add 2-3 tablespoons of water and continue tossing. If it remains liquid after 3 minutes, increase heat and toss more vigorously.',
        },
        {
            title: 'Plate and serve immediately',
            description: 'Transfer to a serving plate. The sauce should be visibly clinging to every surface in a dark, glossy coat. Scatter cilantro and grind black pepper over the top. Serve immediately with steamed rice or baguette, lime wedges, and finger bowls. The baguette is the ideal mopping tool for cua xào me — drag it through the tamarind sauce that has pooled on the plate and the residual glaze from the crab. This is as good as the crab itself.',
            tip: 'Cua xào me held even 5 minutes begins to lose its glossy coating as the tamarind sauce is reabsorbed into the crab and the plate surface. Serve and eat immediately. The glossy, dark-coated visual is the dish at its best — this is the moment to serve.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}