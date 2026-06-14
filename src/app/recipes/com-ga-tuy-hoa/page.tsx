'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-ga-tuy-hoa',
    title: 'Cơm Gà Tuy Hòa (Tuy Hòa Chicken Rice)',
    subtitle: 'Jasmine rice cooked in golden chicken broth with turmeric and ginger until each grain is separate and fragrant, topped with shredded chicken tossed in red onion, fresh herbs and sesame oil — served with a bowl of clear chicken broth and the specific dipping sauce of Phú Yên province.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/com-ga-tuy-hoa.jpg',
    intro: `Cơm gà Tuy Hòa is the chicken rice of Phú Yên's provincial capital — a preparation that shares its basic architecture with cơm gà Hội An but differs in specific and important ways that people from both cities will defend fiercely. In Tuy Hòa, the rice is cooked in chicken broth with a generous amount of turmeric that turns every grain golden, and with lemongrass that perfumes the broth absorbed by the rice during cooking. The chicken is shredded and tossed not merely with Vietnamese coriander and spring onion as in Hội An, but with thinly sliced red onion that has been briefly soaked in ice water to remove its sharpness — the onion contributes a clean bite that the Hội An version does not have. The dipping sauce in Tuy Hòa is lighter and contains a specific addition: a spoonful of the turmeric-golden chicken fat skimmed from the cooking liquid, which makes the sauce simultaneously brighter and richer. The clear chicken broth is served separately, in a small bowl, with sliced spring onion and white pepper — it is a palate cleanser between bites of the rich chicken rice rather than a soup. Cơm gà Tuy Hòa is the lunch that the town eats at the same small shops that have been serving it for forty years, in the hours between 10am and 1pm when the chicken is fresh from the morning market and the rice has been cooked at dawn. It is one of the dishes that Phú Yên people miss most when they leave, and one that most food travelers to the province encounter only if they know to look for it.`,
    ingredientSections: [
        {
            title: 'Chicken and broth',
            items: [
                { amount: 1, name: 'whole chicken, 1.3-1.5kg', note: 'free-range — yellow-skinned Vietnamese chicken (gà ta) if available. The fat under the skin is what colors the rice golden.' },
                { amount: 2, unit: 'L', name: 'water' },
                { amount: 3, name: 'lemongrass stalks', note: 'bruised — for the poaching broth' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 3, name: 'shallots', note: 'halved — one charred, two raw' },
                { amount: 1.5, unit: 'tbsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Turmeric chicken rice',
            items: [
                { amount: 400, unit: 'g', name: 'jasmine rice', note: 'rinsed and drained' },
                { amount: 600, unit: 'ml', name: 'reserved chicken broth', note: 'measured after the chicken has poached — this specific amount cooks the rice to the correct texture' },
                { amount: 1.5, unit: 'tsp', name: 'turmeric powder', note: 'the defining color of Tuy Hòa cơm gà — more turmeric than Hội An version' },
                { amount: 1, name: 'lemongrass stalk', note: 'bruised — placed on top of the rice while it cooks' },
                { amount: 2, unit: 'tbsp', name: 'chicken fat or neutral oil', note: 'skimmed from the surface of the poaching broth — carries the flavor into every grain' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Shredded chicken topping',
            items: [
                { amount: 1, name: 'whole cooked chicken', note: 'shredded — from the poached chicken above' },
                { amount: 1, name: 'medium red onion', note: 'thinly sliced into half-moons, soaked in ice water 15 minutes, drained — the Tuy Hòa difference' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)', note: 'leaves only' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 2, unit: 'tbsp', name: 'sesame oil' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
            ],
        },
        {
            title: 'Tuy Hòa dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'golden chicken fat', note: 'skimmed from poaching broth — the Tuy Hòa specific addition that enriches the dipping sauce' },
            ],
        },
        {
            title: 'Clear broth for serving',
            items: [
                { amount: 600, unit: 'ml', name: 'reserved chicken poaching broth', note: 'strained and seasoned — served in individual bowls alongside the rice' },
                { amount: 2, name: 'spring onions', note: 'sliced — for the broth bowl' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'ground fresh into each broth bowl' },
            ],
        },
    ],
    steps: [
        {
            title: 'Poach the chicken and make the broth',
            description: 'Place chicken breast-side down in a pot. Cover with 2L cold water. Add lemongrass, ginger, one charred shallot, two raw shallots, salt, and sugar. Bring to a boil, reduce immediately to the lowest simmer. Poach 35-40 minutes until juices at the thigh run clear. Rest in the broth 15 minutes with the lid on. Remove the chicken. Strain the broth — measure out 600ml for the rice, another 600ml for serving as soup. Skim the golden chicken fat from the surface and reserve 3-4 tablespoons.',
            tip: 'The golden chicken fat on the surface of the broth is the most valuable part of this recipe. In Tuy Hòa shops, this fat is added to the rice cooking liquid, to the dipping sauce, and drizzled over the finished dish. Skim generously and reserve every drop.',
        },
        {
            title: 'Cook the turmeric rice in chicken broth',
            description: 'In a medium pot or rice cooker, heat the chicken fat over medium heat. Add the drained rice and stir for 2 minutes until each grain is coated in fat. Add the turmeric and stir for 30 seconds until the rice turns golden. Add 600ml of the reserved chicken broth, the bruised lemongrass stalk, and salt. Bring to a boil, stir once, reduce to the lowest heat and cover tightly. Cook 15 minutes. Remove from heat and rest covered for 10 minutes — do not open.',
            tip: 'The ratio of 400g rice to 600ml broth produces the slightly drier, more separate grain texture of Tuy Hòa cơm gà. Hội An version is slightly wetter. The Tuy Hòa rice should have distinct grains that do not clump when plated.',
        },
        {
            title: 'Prepare the ice-water red onion',
            description: 'Slice the red onion into the thinnest possible half-moons. Place in a bowl of ice water with a pinch of salt. Soak for 15 minutes — the cold water removes most of the raw onion sharpness and makes the slices slightly crisp. Drain and pat dry. The onion should taste mild, slightly sweet, with a clean bite — not the harsh rawness of un-soaked red onion. This is the element that distinguishes Tuy Hòa chicken rice most clearly.',
            tip: 'The ice water soak of red onion is a technique used throughout Vietnamese cooking — the water draws out the sulfur compounds responsible for harshness while leaving the mild onion flavor intact. 15 minutes in cold water makes all the difference.',
        },
        {
            title: 'Shred and dress the chicken',
            description: 'While the chicken is still warm, remove all the skin (set aside — it can be crisped separately). Pull the meat from the bones in long strands, tearing along the muscle grain. In a large bowl, combine the shredded chicken with the soaked red onion, rau răm leaves, sliced spring onion, sesame oil, fish sauce, sugar, and white pepper. Toss gently but thoroughly. Taste and adjust. The chicken topping should taste bright, herby, and slightly nutty from the sesame oil.',
            tip: 'Dress the chicken while still warm — room temperature chicken absorbs the sesame oil and fish sauce dressing more completely than cold chicken. The dressing should be fully absorbed into the shredded strands, not pooling at the bottom of the bowl.',
        },
        {
            title: 'Make the Tuy Hòa dipping sauce',
            description: 'Combine fish sauce, lime juice, sugar, and water. Stir until sugar dissolves. Add garlic and chili. Add the reserved golden chicken fat — it will float on the surface and add a rich, golden sheen to the sauce. Stir before each use as the fat separates. The Tuy Hòa dipping sauce should taste slightly richer and more complex than standard nước chấm — the chicken fat is the element that creates this character.',
            tip: 'The chicken fat in the dipping sauce sounds unusual but is the defining characteristic of the Tuy Hòa version. It coats the mouth slightly when the sauce is used for dipping, bridging the rich rice and the simply dressed chicken in a way that plain fish sauce cannot.',
        },
        {
            title: 'Plate and serve the complete set',
            description: 'Mound the golden turmeric rice on each plate — press firmly into a bowl to shape, then invert for a neat dome. Pile the dressed chicken generously over and alongside the rice. Top with crushed peanuts and crispy fried shallots. Serve the clear broth in individual small bowls with spring onion and white pepper. Place the dipping sauce alongside. The complete Tuy Hòa set: rice, chicken, broth, and dipping sauce — each element essential, none optional.',
            tip: 'The correct way to eat cơm gà Tuy Hòa: a spoonful of rice, a piece of chicken, a dip in the sauce, then a sip of the clear broth as a palate cleanser. The broth between bites resets the palate for the next mouthful of seasoned rice and dressed chicken. This rhythm is specific to Tuy Hòa and makes the meal last longer and taste better than eating the components separately.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}