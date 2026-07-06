'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'my-tron',
    title: 'M? Tr?n (Vietnamese Dry Mixed Noodles)',
    subtitle: 'Egg noodles tossed without broth in a concentrated sauce of fish sauce, lard, and garlic oil, topped with minced pork, a soft-boiled egg, and a mountain of fresh herbs. The noodle dish that is somehow more flavorful without the soup.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/my-tron.jpg',
    intro: `M? tr?n — mixed noodles, dry noodles, noodles without soup — is the preparation that challenges the assumption that Vietnamese noodle dishes need broth. The technique is the opposite of soup: instead of a generous ladle of liquid, the noodles are tossed in a concentrated base of fish sauce, rendered lard or shallot oil, garlic, and a small amount of the cooking broth to prevent drying. Everything that would have gone into the soup is concentrated into the sauce that coats each strand. The result is more intensely flavored than the soup version — every bite carries the full seasoning without dilution. M? tr?n is particularly associated with Vietnamese Chinese cooking, popular in Saigon's Cholon district and throughout the south, where the technique of dry-tossed noodles came from the Cantonese tradition of wonton noodles. The toppings vary: minced pork, sliced char siu, wontons, or simply a soft-boiled egg with herbs. The base technique — the tossing sauce — is what this recipe teaches.`,
    ingredientSections: [
        {
            title: 'Noodles',
            items: [
                { amount: 400, unit: 'g', name: 'fresh egg noodles (m? tr?ng)', note: 'thin, round — Chinese-style egg noodles from Asian grocery. Dried wonton noodles are an acceptable substitute.' },
            ],
        },
        {
            title: 'Tossing sauce (per bowl)',
            items: [
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'sesame oil' },
                { amount: 1, unit: 'tbsp', name: 'garlic-shallot oil', note: 'see below — the essential base fat' },
                { amount: 2, unit: 'tbsp', name: 'pork cooking broth or chicken broth', note: 'prevents the noodles from sticking; adds moisture without making it soupy' },
                { amount: 0.25, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Garlic-shallot oil (makes enough for 8 servings)',
            items: [
                { amount: 5, name: 'garlic cloves, thinly sliced' },
                { amount: 3, name: 'shallots, thinly sliced' },
                { amount: 150, unit: 'ml', name: 'neutral oil or rendered lard', note: 'lard is traditional and produces a richer result' },
            ],
        },
        {
            title: 'Minced pork topping',
            items: [
                { amount: 300, unit: 'g', name: 'minced pork (th?t heo b?m)', note: '20% fat content — lean pork produces dry, crumbly topping' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 3, name: 'garlic cloves, minced' },
                { amount: 2, name: 'shallots, minced' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 4, name: 'soft-boiled eggs', note: '7-minute eggs — jammy yolk, fully set white' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 4, name: 'spring onions, sliced' },
                { amount: 1, name: 'bunch bean sprouts', note: 'blanched briefly' },
                { amount: 1, name: 'bunch cilantro or Vietnamese coriander' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'fresh chili, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the garlic-shallot oil',
            description: 'Place sliced garlic and shallots in cold oil or lard in a small saucepan. Heat over medium heat — the aromatics will gradually fry as the oil warms. Cook, stirring occasionally, until both garlic and shallots are golden and just beginning to crisp — about 8-10 minutes. Remove from heat. The residual heat will continue cooking them. Cool completely. Store in a jar at room temperature — this keeps for 2 weeks and makes every noodle dish better.',
            tip: 'Cold-start is essential. Hot oil added to the aromatics burns the outside before the inside is cooked. Starting cold allows even, thorough frying.',
        },
        {
            title: 'Cook the minced pork',
            description: 'Heat 1 tablespoon of garlic-shallot oil in a wok over medium-high heat. Add minced shallots and garlic, fry 30 seconds until fragrant. Add minced pork and break up with a spatula. Cook for 5-6 minutes until fully cooked through and beginning to caramelize at the edges. Season with fish sauce, oyster sauce, sugar, and pepper. The pork should be slightly sticky and caramelized, not wet.',
            tip: 'The minced pork should be cooked until it is slightly crispy at the edges — this texture contrast in the bowl is important. Wet, steamed-looking pork lacks the flavor and texture the dish needs.',
        },
        {
            title: 'Boil the eggs',
            description: 'Bring water to a full boil. Lower eggs carefully into the water. Cook for exactly 7 minutes. Transfer to ice water immediately for 5 minutes. Peel and halve. The yolk should be jammy — set at the edges, slightly soft in the center. This is the correct texture for m? tr?n.',
            tip: 'The 7-minute egg is the m? tr?n standard. Fully hard-boiled eggs are too dry against the rich noodle sauce. Soft-boiled (6 minutes) is too runny and makes the noodles wet.',
        },
        {
            title: 'Prepare the tossing sauce in each bowl',
            description: 'Before cooking the noodles, prepare the tossing sauce directly in each serving bowl: fish sauce, sugar, sesame oil, garlic-shallot oil, broth, and white pepper. Stir to dissolve the sugar. The sauce should taste aggressively seasoned — it will be diluted by the noodles. Each bowl gets its own sauce base.',
            tip: 'Assembling the sauce in the bowl first (not the noodles) allows you to taste and adjust each bowl individually before adding the noodles. This is the restaurant technique.',
        },
        {
            title: 'Cook and toss the noodles',
            description: 'Blanch the fresh egg noodles in rapidly boiling water for 1-2 minutes until just cooked through — they should be tender but still have slight bite. Drain well, shaking out excess water. Immediately divide among the prepared bowls. Toss the hot noodles vigorously in the sauce — every strand should be coated. The noodles must be added hot; cold noodles do not absorb the sauce properly.',
            tip: 'Toss fast and thoroughly. The first 30 seconds after the hot noodles hit the sauce is when the sauce absorbs into the noodles. Slow or incomplete tossing produces clumped noodles with sauce pooling at the bottom.',
        },
        {
            title: 'Add toppings and serve',
            description: 'Pile the seasoned minced pork over the center of each bowl. Arrange the halved soft-boiled egg alongside. Add a handful of blanched bean sprouts, sliced spring onion, cilantro, and crispy fried shallots. Serve with lime wedges and sliced chili. How to eat: squeeze lime over the bowl, mix everything together from the bottom up before the first bite.',
            tip: 'Instruct anyone eating this for the first time to mix from the bottom before eating — the sauce collects at the bottom and the noodles on top are comparatively under-seasoned until mixed.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
