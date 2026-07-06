'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'thit-chien-nuoc-mam',
    title: 'Fish Sauce Caramel Fried Pork',
    subtitle: 'Th?t chiên nu?c m?m — vàng giòn, bóng mu?t, m?n ng?t d?m dà.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/thit-chien-nuoc-mam.jpg',
    intro: `Thit chien nuoc mam is the dish that taught a generation of Vietnamese children what umami was before they had a word for it. A few slices of pork, a pan of hot oil, and a glaze so simple it seems impossible that it produces something so good — fish sauce, sugar, garlic, reduced together until the pan smells like every Vietnamese kitchen at noon on a weekday.

The genius of this dish is the Maillard reaction working twice: once when the pork hits the oil and its surface browns and crisps, and again when the fish sauce glaze caramelises around each piece, building a lacquered coat that is simultaneously sweet, salty, sticky, and faintly funky in the best possible way. Eaten over white rice with raw cucumber and a spoon of the pan sauce poured over everything, it is the purest expression of Vietnamese home cooking — fast, unfussy, and completely irresistible.`,
    ingredientSections: [
        {
            title: 'Th?t heo',
            items: [
                { amount: 500, unit: 'g', name: 'pork belly or shoulder', note: 'belly for richness and crunch; shoulder for leaner result — cut into 1cm slices against the grain' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for marinating' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'for marinating' },
                { amount: 3, name: 'garlic cloves', note: 'minced, for marinating' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'for frying' },
            ],
        },
        {
            title: 'Nu?c m?m glaze',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce', note: 'Phu Quoc or Chin-su — quality matters here' },
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'white or palm sugar' },
                { amount: 2, unit: 'tbsp', name: 'water' },
                { amount: 4, name: 'garlic cloves', note: '2 minced, 2 sliced thin' },
                { amount: 1, name: 'red bird\'s eye chilli', note: 'sliced, optional' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, name: 'stalks spring onion', note: 'green parts sliced fine' },
                { amount: 0.5, name: 'cucumber', note: 'sliced thin, served raw alongside' },
                { amount: 4, name: 'portions steamed white rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the pork',
            description: 'Slice pork into pieces roughly 1cm thick — thin enough to cook through quickly, thick enough to stay juicy. Combine with fish sauce, white pepper, sugar, and minced garlic. Toss well and leave at room temperature for 15 minutes. Pat the surface lightly dry with paper towels before frying — surface moisture causes spitting and prevents browning.',
            tip: 'Do not marinate longer than 30 minutes. The fish sauce will begin to cure the surface and the texture changes — you want fried pork, not cured pork.',
        },
        {
            title: 'Fry the pork',
            description: 'Heat oil in a heavy pan or cast iron skillet over medium-high heat until shimmering. Add pork slices in a single layer without crowding — work in two batches if needed. Fry undisturbed for 3–4 minutes until the underside is deep golden and releases naturally from the pan. Flip and fry the second side for 2–3 minutes. Remove and set aside on a plate.',
            tip: 'Resist moving the pork. The crust only forms when the meat is left in full contact with the hot pan. If it sticks, it is not ready — wait another 30 seconds.',
        },
        {
            title: 'Build the glaze',
            description: 'Reduce heat to medium. In the same pan with the pork fat still in it, fry the sliced garlic until golden and fragrant, about 1 minute. Add minced garlic and stir for 30 seconds. Pour in fish sauce, sugar, and water. Stir to dissolve the sugar and scrape up any browned bits from the pan — those bits are flavour. Let the sauce bubble and reduce for 90 seconds until slightly syrupy.',
        },
        {
            title: 'Glaze and finish',
            description: 'Return the fried pork to the pan. Toss to coat every piece in the glaze, turning frequently over medium heat for 1–2 minutes until the sauce reduces further and clings to the surface in a shiny, amber coat. Add sliced chilli if using. The glaze is ready when it coats the back of a spoon and the pan looks almost dry around the edges.',
            tip: 'This final step is fast. Keep tossing and watch the heat — the sugar in the glaze goes from caramelised to burnt in under a minute if the pan is too hot.',
        },
        {
            title: 'Plate and serve',
            description: 'Transfer to a plate and scatter spring onion over the top. Spoon any remaining pan glaze over the pork. Serve immediately over steamed white rice with raw cucumber slices alongside. The contrast of hot glazed pork, cool cucumber, and plain rice is the point — do not skip the cucumber.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
