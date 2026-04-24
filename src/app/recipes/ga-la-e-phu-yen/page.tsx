'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-la-e-phu-yen',
    title: 'Phu Yen Litsea Leaf Chicken',
    subtitle: 'The wild herb from the central highlands that makes this dish impossible to replicate anywhere else.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c7?auto=format&fit=crop&w=1600&q=85',
    intro: 'Ga la e is the dish that tells you where you are. La e — Vietnamese litsea leaves, harvested from wild trees in the mountains of Phu Yen and Binh Dinh — have a fragrance unlike anything else in the Vietnamese herb repertoire: citrusy, resinous, faintly floral, with a warmth that sits at the back of the throat. Stir-fried with free-range chicken and fish sauce until the leaves wilt and release their oils into the pan, the result is intensely aromatic and deeply regional. If you cannot find fresh la e, dried litsea berries (hat mac khen, used in Northern Vietnamese and Nung cuisine) are the closest available substitute.',
    ingredientSections: [
        {
            title: 'Main',
            items: [
                { amount: 1, name: 'whole free-range chicken', note: 'about 1.2kg, chopped into small bone-in pieces' },
                { amount: 100, unit: 'g', name: 'fresh litsea leaves (la e)', note: 'or 1 tbsp dried litsea berries, crushed' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'thinly sliced' },
                { amount: 2, name: 'lemongrass stalks', note: 'white part only, finely minced' },
                { amount: 2, name: 'fresh red chillies', note: 'sliced, adjust to taste' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder' },
                { amount: 1, name: 'pinch of pepper' },
                { amount: 2, unit: 'tbsp', name: 'vegetable oil' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the chicken',
            description: 'Toss chicken pieces with fish sauce, sugar, turmeric, and pepper. Marinate for at least 20 minutes. The turmeric stains the chicken golden and adds a subtle earthiness that complements the litsea.',
        },
        {
            title: 'Fry the aromatics',
            description: 'Heat oil in a wok over high heat until smoking. Add shallots, garlic, and lemongrass. Stir-fry vigorously for 2 minutes until fragrant and beginning to colour.',
        },
        {
            title: 'Sear the chicken',
            description: 'Add marinated chicken pieces in a single layer. Cook without stirring for 3 minutes to develop a golden crust. Turn and cook 3 more minutes. The wok must stay very hot throughout — add chicken in batches if needed to avoid steaming.',
            tip: 'Free-range chicken takes longer than commercial chicken and the meat is firmer. Do not rush the searing — the Maillard crust is essential to the flavour of the dish.',
        },
        {
            title: 'Add the litsea leaves',
            description: 'Add fresh litsea leaves and chilli. Toss everything together over high heat for 2 to 3 minutes until the leaves wilt and darken, releasing their oils into the pan. The fragrance at this point will be extraordinary.',
            tip: 'If using dried litsea berries instead of fresh leaves, add them with the aromatics at step 2, not at the end. Dried berries need heat time to bloom; fresh leaves need only seconds.',
        },
        {
            title: 'Finish and serve',
            description: 'Taste and adjust fish sauce. The dish should be savoury, aromatic, and slightly oily from the herb oils. Serve immediately over steamed jasmine rice with extra sliced chilli on the side.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
