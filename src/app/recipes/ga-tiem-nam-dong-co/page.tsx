'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-tiem-nam-dong-co',
    title: 'Gà Tiềm Nấm Đông Cô (Slow-Braised Chicken with Shiitake)',
    subtitle: 'Whole chicken braised in a covered clay pot with dried shiitake mushrooms, lotus seeds, goji berries, and rice wine until the broth is dark, complex, and deeply umami — the Vietnamese-Chinese slow braise where the mushrooms give as much to the dish as the chicken does.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ga-tiem-nam-dong-co.jpg',
    intro: `Gà tiềm nấm đông cô belongs to the tiềm tradition — the Vietnamese-Chinese slow braising technique that produces dishes of exceptional depth from relatively few ingredients. Tiềm literally means to braise covered in a pot with minimal liquid, allowing the ingredients to cook in their own steam and concentrated juices rather than in a bath of stock. The nấm đông cô — dried shiitake mushrooms — are the ingredient that defines this preparation above all others. Dried shiitake contain more glutamate than almost any other food ingredient: their drying process concentrates the umami compounds that are present in the fresh mushroom, and when they rehydrate in the braising liquid alongside the chicken, they release this concentrated umami into the broth while simultaneously absorbing the chicken fat and gelatin back into their flesh. The mushroom becomes, by the end of the braise, both a flavor-giver and a flavor-receiver — more savory than the chicken itself, with a texture that is dense and yielding and carries the full depth of the braise in each piece. Lotus seeds add their gentle starchiness. Goji berries add sweetness and color. Shaoxing wine adds the specific depth that separates this from a plain chicken braise. The result is a dish that tastes like a collaboration between the chicken and the mushroom rather than a dish with a primary ingredient and a secondary one.`,
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 1, name: 'whole chicken, 1.3-1.5kg', note: 'or 1.2kg bone-in chicken pieces — thighs and drumsticks work well for easier serving' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for pre-seasoning' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'five-spice powder', note: 'very small amount — background note only' },
            ],
        },
        {
            title: 'Mushrooms and dried ingredients',
            items: [
                { amount: 25, unit: 'g', name: 'dried shiitake mushrooms (nấm đông cô)', note: 'soaked in 300ml warm water for 30 minutes — reserve the soaking liquid. Squeeze excess water from mushrooms before using.' },
                { amount: 80, unit: 'g', name: 'fresh lotus seeds (hạt sen)', note: 'embryo removed. Dried (soaked 2 hours) also works.' },
                { amount: 2, unit: 'tbsp', name: 'goji berries (kỷ tử)', note: 'soaked 10 minutes, drained' },
                { amount: 6, name: 'red dates (táo đỏ)', note: 'pitted — adds sweetness' },
                { amount: 20, unit: 'g', name: 'dried wood ear mushrooms (mộc nhĩ)', note: 'soaked 20 minutes, drained, large pieces quartered — adds contrasting texture' },
            ],
        },
        {
            title: 'Braising liquid and aromatics',
            items: [
                { amount: 300, unit: 'ml', name: 'mushroom soaking liquid', note: 'strained through fine cloth to remove grit — contains concentrated shiitake umami' },
                { amount: 100, unit: 'ml', name: 'Shaoxing wine (rượu Thiệu Hưng)', note: 'the Chinese rice wine essential to this preparation — not Shaoxing cooking wine with salt, but drinking-grade Shaoxing' },
                { amount: 3, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce (light)' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 4, name: 'garlic cloves', note: 'lightly smashed' },
                { amount: 3, name: 'shallots', note: 'halved' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'for searing' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'freshly ground over each bowl' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'drizzled at the end' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Soak the mushrooms — reserve the liquid',
            description: 'Place dried shiitake mushrooms in 300ml warm water. Soak for 30 minutes until fully rehydrated and pliable. Remove the mushrooms and squeeze gently — reserve every drop of soaking liquid. Strain the liquid through a fine cloth or coffee filter to remove any grit. This mushroom soaking liquid is concentrated shiitake essence and is the most important liquid in the dish — it goes into the braise and gives the broth its characteristic dark, deeply umami character. Trim the tough shiitake stems and leave caps whole or halve if very large.',
            tip: 'Never discard the shiitake soaking liquid. It contains more umami than anything else in the recipe. The broth\'s depth comes from this liquid combined with the chicken gelatin — neither alone produces the same result.',
        },
        {
            title: 'Sear the chicken',
            description: 'Season the chicken with fish sauce, white pepper, and five-spice. Heat oil in a clay pot or heavy Dutch oven over medium-high heat. Sear the chicken on all sides — or if using a whole chicken, sear breast-side down first for 4 minutes, then the back for 3 minutes. The sear develops a caramelized surface that adds depth to the braising liquid and ensures the chicken does not taste merely steamed. Remove and set aside.',
            tip: 'The clay pot can go directly on the stove for searing. Use medium-high rather than high heat for clay — sudden extreme heat can crack it. The sear in clay produces a slightly different character than stainless steel: more even, slightly more gentle.',
        },
        {
            title: 'Build the aromatic base',
            description: 'In the same pot, fry ginger, garlic, and shallots in the remaining oil for 2 minutes until golden and fragrant. Add the rehydrated shiitake mushrooms and wood ear mushrooms. Toss for 1 minute until the mushrooms absorb the aromatic oil. Add the Shaoxing wine — it will sizzle and steam immediately. Let cook for 30 seconds to let the alcohol begin evaporating.',
            tip: 'Frying the mushrooms briefly in the aromatic oil before the liquid goes in concentrates their flavor further and gives them a slightly caramelized surface that improves their texture in the final braise.',
        },
        {
            title: 'Build the braising liquid',
            description: 'Return the chicken to the pot. Pour the strained mushroom soaking liquid over and around the chicken. Add oyster sauce, fish sauce, soy sauce, and sugar. Add lotus seeds, goji berries, and red dates. The liquid should come about halfway up the chicken — this is tiềm style, not a submerged braise. Bring to a gentle boil.',
            tip: 'The liquid level is deliberate — tiềm cooking is a steam-and-braise where the lower half cooks in liquid and the upper half cooks in the steam trapped under the lid. This produces a more concentrated result than full submersion.',
        },
        {
            title: 'Braise covered — low and slow',
            description: 'Reduce heat to the lowest possible simmer. Cover tightly with the lid. Braise for 1 hour for chicken pieces, 1 hour 15 minutes for a whole chicken. Do not open the lid during this time. After the cooking time, open the lid: the chicken should be completely tender, the mushrooms plump and dark with absorbed broth, the lotus seeds yielding, and the broth a deep mahogany-amber color. Taste the broth — it should be intensely savory from the mushroom liquid and chicken gelatin.',
            tip: 'The sealed braising environment is what makes tiềm different from other braising methods. The trapped steam creates its own pressure, driving the flavors into the ingredients from all directions simultaneously. Opening the lid mid-braise releases this environment and extends cooking time unpredictably.',
        },
        {
            title: 'Finish and serve',
            description: 'Taste the broth and adjust: fish sauce for salt, a pinch of sugar if too savory. Drizzle sesame oil over the pot. Scatter sliced spring onion and cilantro. Grind white pepper generously over everything. Bring the clay pot directly to the table. Serve from the pot with steamed rice — the broth ladled over rice is one of the great Vietnamese-Chinese bowl experiences. Each serving should include chicken, shiitake caps, lotus seeds, and a generous amount of the dark broth.',
            tip: 'The shiitake mushrooms in this dish are as important as the chicken — they have given their umami to the broth and taken the chicken gelatin back into themselves. Do not treat them as a garnish. Each person should receive 2-3 caps alongside their chicken pieces.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}