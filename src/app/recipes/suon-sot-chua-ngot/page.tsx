'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'suon-sot-chua-ngot',
    title: 'Sườn Sốt Chua Ngọt (Vietnamese Sweet and Sour Pork Ribs)',
    subtitle: 'Pork spare ribs fried until golden then tossed in a Vietnamese sweet and sour sauce of pineapple, tomato, rice vinegar, and fish sauce — lighter and brighter than the Chinese-American version, with the balance of a dish that has been eaten for generations.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/suon-sot-chua-ngot.jpg',
    intro: `Sườn sốt chua ngọt is the Vietnamese sweet and sour rib dish that most Vietnamese families have eaten since childhood — at birthday dinners, Tết feasts, and weekday dinners alike. It is not the gloopy, fluorescent-orange sweet and sour of Chinese-American takeaway. It is a Vietnamese interpretation: brighter, fresher, with the specific sweet-sour-savory balance that Vietnamese cooking executes so reliably. The sourness comes from rice vinegar and fresh pineapple rather than the artificial citric acid of processed sauces. The sweetness is sugar and the natural pineapple sugar — not corn syrup. The savory depth comes from fish sauce rather than MSG. The ribs are fried first until genuinely golden — not battered, not coated, just the rendered crispy fat and caramelized pork surface — then tossed in the hot sauce at the end so the glaze coats each rib without softening the fried exterior completely. Sườn sốt chua ngọt is universally loved in Vietnam — children eat it enthusiastically, adults eat it nostalgically, and anyone making it for the first time is surprised that something this good comes together in under an hour.`,
    ingredientSections: [
        {
            title: 'Ribs and marinade',
            items: [
                { amount: 800, unit: 'g', name: 'pork spare ribs (sườn heo)', note: 'cut into individual ribs, or ask butcher to cut into 4-5cm pieces through the bone. Baby back ribs work but spare ribs have more fat and flavor.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 2, unit: 'tbsp', name: 'cornstarch', note: 'for coating before frying — produces crispier exterior' },
                { amount: 400, unit: 'ml', name: 'neutral oil', note: 'for deep or shallow frying' },
            ],
        },
        {
            title: 'Sweet and sour sauce',
            items: [
                { amount: 150, unit: 'g', name: 'fresh pineapple', note: 'cut into small chunks — the fresh pineapple acidity is essential. Canned in juice is acceptable.' },
                { amount: 3, name: 'medium tomatoes', note: 'cut into wedges — adds body and sweetness to the sauce' },
                { amount: 1, name: 'medium onion', note: 'cut into rough chunks' },
                { amount: 1, name: 'red capsicum / bell pepper', note: 'cut into 3cm pieces — adds color and mild sweetness' },
                { amount: 3, unit: 'tbsp', name: 'rice vinegar', note: 'the correct Vietnamese sourness — not white vinegar which is too harsh' },
                { amount: 3, unit: 'tbsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'tomato paste', note: 'for color depth and body' },
                { amount: 100, unit: 'ml', name: 'water' },
                { amount: 1.5, unit: 'tsp', name: 'cornstarch', note: 'mixed with 2 tbsp cold water — thickens the sauce to coat the ribs' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'fresh red chili', note: 'sliced' },
                { amount: 1, unit: 'tsp', name: 'sesame seeds', note: 'toasted — optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the ribs',
            description: 'Combine ribs with fish sauce, sugar, minced garlic, and black pepper. Mix to coat evenly. Marinate for minimum 20 minutes at room temperature — the fish sauce seasons the meat and the garlic begins to perfume it. Before frying, dust each rib lightly with cornstarch and shake off the excess. The cornstarch coating produces a crispier, more golden exterior than bare meat.',
            tip: 'Pat the ribs dry before dusting with cornstarch — wet ribs produce a gummy coating rather than a crispy one. The cornstarch layer should be thin and even.',
        },
        {
            title: 'Fry the ribs until golden',
            description: 'Heat oil in a wok or deep pan to 175°C. Fry the ribs in batches — do not crowd. Fry for 6-8 minutes until deeply golden on all sides, turning occasionally. The ribs should be cooked through at this stage and the exterior genuinely crispy with caramelized edges. Drain on paper towels. The frying produces the structural crunch that the sweet and sour sauce will partially soften — not eliminate — in the final tossing.',
            tip: 'The ribs must be cooked through during frying — they only spend 2-3 minutes in the sauce at the end, which is not enough time to cook raw meat. Test the largest rib: the meat should pull away from the bone with gentle pressure.',
        },
        {
            title: 'Build the sweet and sour sauce',
            description: 'Heat oil in a clean wok over medium-high heat. Fry minced garlic for 30 seconds until fragrant. Add onion chunks and stir-fry for 2 minutes until beginning to soften. Add tomato wedges and tomato paste — cook for 3 minutes, pressing the tomatoes down until they partially break down. Add pineapple chunks and capsicum pieces. Stir to combine. Add rice vinegar, sugar, fish sauce, and water. Bring to a simmer and cook for 3-4 minutes.',
            tip: 'Cooking the tomatoes down before adding the liquid ingredients produces a sauce with body and depth. Tomatoes added directly to liquid produce a thin, watery sauce that does not cling to the ribs.',
        },
        {
            title: 'Taste and balance the sauce',
            description: 'Taste the sauce before thickening — it should taste bright, sweet-sour, and savory with the fish sauce providing depth. Adjust: more rice vinegar if too sweet, more sugar if too sharp, more fish sauce if flat. Vietnamese sweet and sour sauce should taste noticeably of all three elements — the balance is what makes it distinctly Vietnamese rather than Chinese or Western.',
            tip: 'Tasting before thickening is essential because once the cornstarch is added the sauce thickens quickly and adjustments become harder. Get the flavor right in the thin stage.',
        },
        {
            title: 'Thicken the sauce and add ribs',
            description: 'Stir the cornstarch slurry and pour into the simmering sauce. Cook for 1-2 minutes, stirring, until the sauce thickens to a consistency that coats a spoon heavily and has a glossy sheen. Add the fried ribs to the wok. Toss to coat every rib completely in the sauce — 2-3 minutes over medium heat. The sauce should cling to the crispy exterior of each rib.',
            tip: 'Two to three minutes in the sauce is the maximum — enough to coat and heat through without completely softening the crispy rib exterior. The contrast between the slightly crispy rib surface and the glossy sauce coating is the correct final texture.',
        },
        {
            title: 'Plate and serve',
            description: 'Transfer to a serving plate, arranging the ribs with the pineapple and capsicum pieces visible. Scatter spring onion, chili, and sesame seeds over the top. Serve immediately with steamed jasmine rice — the sauce dripping from the ribs onto the rice is one of the great Vietnamese dinner pleasures. Sườn sốt chua ngọt reheats well the next day.',
            tip: 'Sườn sốt chua ngọt is best eaten the day it is made — the ribs retain some crispiness on the first day. Reheated the next day the ribs are fully softened by the sauce, which is a different but equally good texture. Both are correct.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
