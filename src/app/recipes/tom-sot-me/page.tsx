'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tom-sot-me',
    title: 'Tôm Sốt Me (Shrimp in Tamarind Sauce)',
    subtitle: 'Fresh shrimp stir-fried in a hot wok then glazed in a tamarind sauce of palm sugar, fish sauce, garlic, and chili — sweet, sour, sticky, and deeply savory. The southern Vietnamese shrimp dish where tamarind does everything butter does in French cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/tom-sot-me.jpg',
    intro: `Tôm sốt me is the tamarind shrimp of southern Vietnam — a dish that demonstrates exactly what tamarind does in Vietnamese cooking that no other souring agent can replicate. Lime juice is bright and immediate. Rice vinegar is clean and neutral. Tamarind is none of these things: it is deep, slightly smoky, with a rounded acidity that persists through cooking rather than burning off, and it carries a complexity — fruity, slightly funky, faintly earthy — that transforms a simple shrimp stir-fry into something more layered than the ingredient list suggests. The technique is fast: shrimp seared in a smoking wok until the shells caramelize, then a tamarind-palm sugar-fish sauce glaze built in the same pan, the shrimp returned and tossed until every piece is lacquered in the dark, glossy sauce. The whole dish takes 25 minutes. It tastes like an hour of work. Tôm sốt me is associated with the seafood cooking of the Mekong Delta and Saigon, where tamarind trees grow in abundance and their pods are used in everything from canh chua to candy to this glaze. It is eaten with steamed rice, the sauce dripping onto the grains, and it is one of those dishes where the rice beneath the shrimp — soaked in the tamarind glaze — competes with the shrimp itself for attention.`,
    ingredientSections: [
        {
            title: 'Shrimp',
            items: [
                { amount: 600, unit: 'g', name: 'fresh shrimp, large (tôm tươi)', note: 'shell-on, heads on or off — deveined through the shell with scissors. Shells caramelize in the hot wok and add flavor to the sauce.' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'light pre-seasoning' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'for searing' },
            ],
        },
        {
            title: 'Tamarind sauce',
            items: [
                { amount: 50, unit: 'g', name: 'seedless tamarind paste (me chua)', note: 'dissolved in 100ml hot water, strained — the result is a dark, thick tamarind liquid. About 4 tbsp of the strained liquid.' },
                { amount: 2.5, unit: 'tbsp', name: 'palm sugar (đường thốt nốt)', note: 'or brown sugar. Palm sugar has a deeper, more caramel note that suits tamarind specifically.' },
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced — adjust to heat preference' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for the sauce base' },
                { amount: 1, unit: 'tsp', name: 'cornstarch', note: 'mixed with 1 tbsp cold water — thickens the glaze' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'fresh red chili', note: 'thinly sliced' },
                { amount: 1, unit: 'tbsp', name: 'roasted peanuts', note: 'roughly crushed — optional, adds crunch' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'small bunch cilantro' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the tamarind liquid',
            description: 'Break the tamarind paste into pieces and work into 100ml of hot water with your fingers until fully dissolved. Strain through a fine sieve, pressing firmly to extract all the dark liquid — discard the fibrous solids. The strained tamarind liquid should be thick, very dark brown, and intensely sour. Measure out 4 tablespoons for the sauce. Taste the tamarind — if it is very sharp, reduce to 3 tablespoons and compensate with more palm sugar.',
            tip: 'Tamarind paste varies significantly by brand in both sourness and sweetness. Always taste before using and calibrate — the best tôm sốt me is balanced, not aggressively sour.',
        },
        {
            title: 'Sear the shrimp in a hot wok',
            description: 'Pat the shrimp completely dry. Season with fish sauce and black pepper. Heat a wok over maximum heat until smoking. Add oil and swirl to coat. Add the shrimp in a single layer — they should sizzle loudly on contact. Sear without moving for 60-90 seconds until the shells turn pink and caramelize at the edges. Flip and sear 30 seconds on the other side. The shrimp should be 80% cooked — pink throughout but still slightly translucent at the thickest point. Remove and set aside.',
            tip: 'Maximum heat and a single layer are both non-negotiable. Crowded shrimp steam and turn pale and limp. Hot wok, single layer, one minute undisturbed — this produces the light caramelization on the shells that enriches the final sauce.',
        },
        {
            title: 'Build the tamarind sauce',
            description: 'In the same wok, reduce heat to medium. Add oil, then fry minced shallots and garlic for 2 minutes until golden and fragrant. Add minced chili and fry 30 seconds. Add the tamarind liquid, palm sugar, and fish sauce. Stir to dissolve the sugar. Bring to a simmer and cook for 2 minutes until the sauce reduces slightly and the sugar is completely dissolved. Taste: it should be a clear sweet-sour-savory balance with the tamarind\'s deep complexity at the center.',
            tip: 'Building the sauce in the same wok used for the shrimp is deliberate — the caramelized shrimp residue on the wok surface dissolves into the sauce and adds depth. Deglaze a clean wok and you lose this.',
        },
        {
            title: 'Thicken and glaze',
            description: 'Stir the cornstarch slurry and pour into the simmering tamarind sauce. Stir for 1 minute until the sauce thickens to a glossy glaze that heavily coats a spoon. The texture should move like warm honey — thick enough to cling to the shrimp shells, not so thick it clumps. Return the seared shrimp to the wok. Toss continuously for 90 seconds over medium-high heat until every shrimp is completely coated in the dark, glossy glaze.',
            tip: 'The glaze should look lacquered on the shrimp — each shell coated and glossy, not wet and saucy. If the glaze pools in the wok rather than coating the shrimp, raise the heat and toss faster. If it has dried onto the shrimp, add a tablespoon of water and toss.',
        },
        {
            title: 'Plate and serve',
            description: 'Transfer immediately to a serving plate. Scatter spring onion, sliced chili, cilantro, and crushed peanuts if using over the top. Serve with lime wedges and steamed jasmine rice. The sauce that drips from the glazed shrimp onto the rice is the secondary pleasure of the dish — spoon it over the rice deliberately. Tôm sốt me must be eaten hot — the tamarind glaze sets as it cools and the shrimp continue cooking from residual heat if left on the plate.',
            tip: 'Serve within 5 minutes of finishing. The glaze is at its best — sticky, glossy, fragrant — in the first few minutes off the heat. Left to cool, it firms and loses the dynamic quality that makes tôm sốt me great.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}