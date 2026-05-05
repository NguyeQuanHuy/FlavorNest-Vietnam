'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'vit-quay',
    title: 'Roasted Duck (Vịt Quay)',
    subtitle:
        'Vịt Quay — succulent, tender duck meat encased in a mahogany, honey-glazed skin, infused with the deep aromatics of star anise and fermented bean curd.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '24 hours',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/vit-quay.jpg',
    intro:
        'Vietnamese Roasted Duck is a celebration of patience and technique. Influenced by Cantonese traditions but refined with local flavors, the perfect "Vịt Quay" requires a dry, lacquered skin that yields to remarkably juicy meat. The secret lies in the internal marinade—a potent paste of spices sewn inside the cavity—ensuring that every fiber of the bird is seasoned from the inside out while the exterior is basted to a glass-like finish.',
    ingredientSections: [
        {
            title: 'The Duck',
            items: [
                { amount: 1, unit: 'whole', name: 'duck', note: 'about 2-2.5kg, cleaned and patted dry' },
                { amount: 2, unit: 'tbsp', name: 'shaoxing wine', note: 'for cleaning' },
                { amount: 1, unit: 'piece', name: 'ginger', note: 'smashed' },
            ],
        },
        {
            title: 'Internal Marinade',
            items: [
                { amount: 1, unit: 'tbsp', name: 'five-spice powder' },
                { amount: 2, unit: 'cubes', name: 'red fermented bean curd (chao đỏ)' },
                { amount: 1, unit: 'tbsp', name: 'minced garlic' },
                { amount: 1, unit: 'tbsp', name: 'minced shallots' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'External Skin Glaze',
            items: [
                { amount: 3, unit: 'tbsp', name: 'maltose or honey' },
                { amount: 1, unit: 'tbsp', name: 'white vinegar' },
                { amount: 1, unit: 'tbsp', name: 'warm water' },
                { amount: 0.5, unit: 'tsp', name: 'dark soy sauce', note: 'for rich color' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prep and scald the skin',
            description: 'Clean the duck with ginger and wine. Pour a kettle of boiling water over the entire skin until it tightens and turns slightly opaque.',
            tip: 'Scalding the skin is the first step to rendering fat and ensuring the final result is crispy rather than rubbery.',
        },
        {
            title: 'Season the cavity',
            description: 'Mix all internal marinade ingredients into a paste. Rub it thoroughly inside the cavity. Use a poultry needle or bamboo skewer to sew the cavity shut completely.',
            tip: 'Make sure the seal is airtight so the juices and aromatics steam the meat from within during roasting.',
        },
        {
            title: 'Apply the glaze and air-dry',
            description: 'Mix the maltose, vinegar, and water. Brush it evenly over the skin. Hang the duck or place it on a rack in the fridge, uncovered, for at least 12–24 hours.',
            tip: 'The skin must be bone-dry to the touch before it hits the oven. This is the only way to get a professional, lacquered finish.',
        },
        {
            title: 'The roasting process',
            description: 'Roast at 170°C (340°F) for 60–75 minutes. Flip the bird halfway through to ensure even browning.',
        },
        {
            title: 'The final crisp',
            description: 'Increase the heat to 200°C (400°F) for the last 10 minutes. Keep a close eye on it as the honey-based glaze can burn quickly.',
        },
        {
            title: 'Rest and carve',
            description: 'Let the duck rest for at least 20 minutes before carving. Carefully remove the skewers to release the flavorful internal juices (jus).',
            tip: 'Save the juices from the cavity! They make the perfect dipping sauce when mixed with a little soy sauce and chili.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
