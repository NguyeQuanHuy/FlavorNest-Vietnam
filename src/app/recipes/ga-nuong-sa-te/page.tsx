'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-nuong-sa-te',
    title: 'Gà Nu?ng Sa T? (Vietnamese Satay Grilled Chicken)',
    subtitle: 'Chicken marinated overnight in a sa t? paste of lemongrass, chili, garlic, and roasted peanuts, then grilled over charcoal until the skin chars and the marinade caramelizes into a sticky, fragrant crust. The southern Vietnamese grilled chicken that smells like a Saigon street at dusk.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr (+ overnight marinade)',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ga-nuong-sa-te.jpg',
    intro: `Gà nu?ng sa t? is the grilled chicken of southern Vietnam — the version that vendors cook over charcoal at street stalls from late afternoon, the smoke and smell of caramelizing sa t? paste drifting down the street in the way that makes every passing person slow their motorbike and reconsider their plans. Sa t? is the Vietnamese-Teochew spice paste built from lemongrass, dried chili, garlic, shallots, and roasted peanuts — the same paste that forms the base of h? ti?u sa t? — and when applied as a chicken marinade and caramelized over charcoal, it produces a char that is simultaneously nutty from the peanuts, fragrant from the lemongrass, hot from the chili, and deeply savory in the way that only high-heat caramelization can produce. The marinade penetrates overnight, so the flavor is not merely on the surface but driven into the meat. The grilling is fast and hot — chicken pieces over maximum charcoal heat, turned frequently to develop an even char without burning. The result is chicken with a mottled, mahogany-to-black crust that looks dangerous and tastes extraordinary. Gà nu?ng sa t? is eaten with broken rice (com t?m) and a fried egg in the southern tradition, or with fresh rice paper, herbs, cucumber, and green mango for wrapping — the wrapping version being the street food experience that most people who have been to Saigon remember with unusual clarity.`,
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 1.2, unit: 'kg', name: 'chicken pieces, bone-in skin-on', note: 'thighs and drumsticks preferred — the fat content keeps them moist through the high-heat grilling. Breast works but dries faster.' },
            ],
        },
        {
            title: 'Sa t? marinade',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk only, very finely minced — almost a paste' },
                { amount: 6, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 3, unit: 'tbsp', name: 'dried chili flakes', note: 'or 6 dried red chilies, soaked and blended. Adjust for heat.' },
                { amount: 2, name: 'fresh bird\'s eye chilies', note: 'minced — for fresh heat alongside the dried' },
                { amount: 3, unit: 'tbsp', name: 'roasted peanuts', note: 'ground to a coarse paste — the body of the sa t?' },
                { amount: 1, unit: 'tbsp', name: 'toasted sesame seeds', note: 'ground' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1.5, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder', note: 'gives the characteristic golden-orange color under the char' },
                { amount: 0.5, unit: 'tsp', name: 'five-spice powder (ngu v? huong)', note: 'a small amount — the southern Vietnamese grilled chicken note' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'carries the paste into the meat' },
            ],
        },
        {
            title: 'Basting sauce (applied during grilling)',
            items: [
                { amount: 2, unit: 'tbsp', name: 'honey', note: 'for the final gloss and caramelization' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'remaining sa t? marinade', note: 'reserved from the batch' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, name: 'spring onions, sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'fresh red chili, sliced' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 1, name: 'bunch fresh herbs', note: 'rau ram, mint, perilla' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice or broken rice (com t?m)' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the sa t? paste and marinate overnight',
            description: 'Combine all marinade ingredients: finely minced lemongrass, garlic, shallots, dried chili flakes, fresh chili, ground peanuts, ground sesame, fish sauce, oyster sauce, sugar, turmeric, five-spice, and oil. Mix into a thick, fragrant paste. Score the chicken pieces deeply — 3 cuts to the bone on each side. Coat every surface of every piece thoroughly, pressing the paste into the scored cuts. Reserve 2 tablespoons of the marinade for the basting sauce. Cover and refrigerate overnight — minimum 8 hours, 24 hours is better.',
            tip: 'Scoring to the bone is the technique that drives the sa t? flavor deep into the thickest part of the meat. Surface-only marinade on chicken produces great skin and bland interior. Scored chicken carries the lemongrass and peanut flavor all the way through.',
        },
        {
            title: 'Bring to room temperature',
            description: 'Remove the chicken from the refrigerator 30-45 minutes before grilling. Cold chicken on a hot grill produces a charred outside and raw-near-bone interior. Room temperature chicken cooks more evenly. Shake off any excess marinade that would drip and cause flare-ups — leave a thin, even coating on the skin surface.',
            tip: 'The peanut paste in the sa t? marinade burns faster than a plain marinade because of the natural sugars in the peanuts. Removing excess before grilling is not optional — too thick a coating produces a bitter, burnt crust rather than a caramelized one.',
        },
        {
            title: 'Grill over high charcoal heat',
            description: 'Build a two-zone charcoal fire: one side with maximum coals for direct high heat, one side with fewer coals or no coals for indirect heat. Start the chicken skin-side up on the direct heat side. Grill 6-8 minutes until the underside develops deep color. Flip to skin-side down over direct heat for 4-5 minutes — the skin will char. Move to indirect heat, cover, and cook 10-12 more minutes until the thickest part registers 75°C and juices run clear.',
            tip: 'Two-zone grilling is essential for bone-in chicken with a sweet marinade. Direct high heat develops the char; indirect heat finishes cooking the interior without burning the outside. Single-zone grilling produces either a raw center or an incinerated crust.',
        },
        {
            title: 'Baste in the final minutes',
            description: 'Combine the reserved sa t? paste, honey, and fish sauce into the basting sauce. In the final 5 minutes of cooking, brush this glaze over every surface of the chicken. Return to direct heat briefly — 60-90 seconds per side — to caramelize the honey glaze into the existing char. The chicken should be mahogany to dark brown at this stage with specific charred spots at the edges and bone ends.',
            tip: 'The honey baste in the final minutes produces the lacquered finish that distinguishes street-vendor gà nu?ng sa t? from home versions. Without the final baste the chicken is grilled; with it the chicken is glazed. The difference is visible and significant.',
        },
        {
            title: 'Oven method — no grill',
            description: 'Preheat oven to 220°C fan. Place chicken on a wire rack over a foil-lined baking tray. Roast 30 minutes. Flip, brush with basting sauce. Roast 15 more minutes. Switch to broil/grill on maximum setting for the final 5-7 minutes until the skin chars in spots and the glaze caramelizes. The oven method produces excellent results — less smoke character than charcoal but comparable caramelization.',
            tip: 'The broil/grill step at the end is what the oven method cannot skip — without it the skin is cooked and golden but not charred in the way that defines gà nu?ng sa t?. Those specific black-edged spots are where the peanut sugars have fully caramelized.',
        },
        {
            title: 'Rest and serve',
            description: 'Rest the grilled chicken for 5-8 minutes before cutting — the juices redistribute and the crust sets into the skin. Chop through the bone with a cleaver for the Vietnamese presentation, or serve as whole pieces. Arrange on a plate with sliced spring onion, cucumber, and fresh chili. Serve with broken rice, fresh herbs, lime wedges, and extra sa t? paste on the side for those who want more heat.',
            tip: 'The char on the bone ends and the edges of the skin is the best part of gà nu?ng sa t? — the concentrated caramelized peanut and lemongrass in those darkened spots. Vietnamese diners eat the charred bits first.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
