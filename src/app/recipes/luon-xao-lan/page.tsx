'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'luon-xao-lan',
    title: 'Vietnamese Stir-Fried Eel with Lemongrass & Turmeric',
    subtitle: 'Luon xào lan — thom ngh? s?, d?m dà, dai ng?t.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/luon-xao-lan.jpg',
    intro: `Luon xao lan is one of those Central Vietnamese dishes that announces itself before it reaches the table — the smell of fresh turmeric and lemongrass hitting a hot wok with eel is one of the most distinctive aromas in the Vietnamese kitchen. It is assertive, earthy, and deeply savoury, with a warmth that sits in the chest long after the meal is finished.

The dish originates from Hue and the Central coastal provinces, where freshwater eel from rice paddies and rivers was a staple protein — cheap, abundant, and full of flavour when treated correctly. Xao lan refers to the dry-stir technique: the eel is cooked over high heat without added liquid, relying entirely on its own rendered fat and the aromatics to build a sauce that coats rather than drowns. The result is eel that is caramelised at the edges, tender at the centre, and carrying every note of the lemongrass, turmeric, galangal, and shrimp paste it was cooked with. Eaten over rice or with banh mi, it is the kind of dish that makes Central Vietnamese cooking impossible to forget.`,
    ingredientSections: [
        {
            title: 'Luon',
            items: [
                { amount: 600, unit: 'g', name: 'fresh eel (luon)', note: 'cleaned, gutted, cut into 5cm pieces — ask the fishmonger to do this; or use frozen eel, fully thawed and patted dry' },
                { amount: 2, unit: 'tbsp', name: 'salt', note: 'for cleaning' },
                { amount: 2, unit: 'tbsp', name: 'white vinegar', note: 'for cleaning — removes slime effectively' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for marinating' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 1, unit: 'tsp', name: 'fresh turmeric', note: 'grated — or 0.5 tsp turmeric powder' },
            ],
        },
        {
            title: 'Aromatics',
            items: [
                { amount: 3, name: 'stalks lemongrass', note: 'white parts only, minced fine' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'sliced thin' },
                { amount: 1, unit: 'tsp', name: 'fresh turmeric', note: 'grated — or 0.5 tsp powder' },
                { amount: 1, unit: 'tsp', name: 'fresh galangal', note: 'grated fine — substitute with extra ginger if unavailable' },
                { amount: 1, unit: 'tsp', name: 'mam ruoc (shrimp paste)', note: 'fermented shrimp paste — the backbone of Central Vietnamese flavour; substitute with 1 extra tbsp fish sauce if unavailable' },
                { amount: 2, name: 'red bird\'s eye chillies', note: 'sliced — adjust to heat preference' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'To finish',
            items: [
                { amount: 4, name: 'stalks spring onion', note: 'cut into 3cm pieces' },
                { amount: 20, unit: 'g', name: 'fresh dill', note: 'torn roughly — Central Vietnamese cooking uses dill more than any other region' },
                { amount: 1, unit: 'tbsp', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 1, name: 'fresh red chilli', note: 'sliced, for garnish' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean the eel',
            description: 'Rub the eel pieces thoroughly with salt and white vinegar to remove the slime coating — this is essential or the dish will have an unpleasant texture. Scrub each piece under cold running water until the surface feels dry and no longer slippery. Rinse well and pat completely dry with paper towels.',
            tip: 'Eel slime is water-soluble but stubborn. The salt-and-vinegar method works better than plain water. Do not skip this step or the eel will steam rather than sear in the wok.',
        },
        {
            title: 'Marinate',
            description: 'Combine cleaned eel with fish sauce, white pepper, and grated turmeric. Toss to coat evenly. Leave at room temperature for 15 minutes. The turmeric will begin to colour the eel and start breaking down the surface slightly, helping the aromatics adhere during cooking.',
        },
        {
            title: 'Fry the eel',
            description: 'Heat 2 tbsp oil in a wok over high heat until smoking. Add eel pieces in a single layer — do not crowd; work in two batches if needed. Sear undisturbed for 2–3 minutes until the underside is golden and caramelised. Turn and sear the other side for 2 minutes. Remove and set aside. The eel will not be fully cooked at this stage — that is correct.',
            tip: 'High heat and no crowding are essential. The goal is caramelisation, not steaming. If the wok is not hot enough or too full, the eel will release water and turn grey instead of golden.',
        },
        {
            title: 'Build the aromatic base',
            description: 'Reduce heat to medium. Add remaining oil to the same wok. Add shallots and fry for 2 minutes until softened. Add lemongrass, garlic, galangal, and turmeric — stir constantly for 2 minutes until deeply fragrant and beginning to colour. Add mam ruoc and stir for 1 minute, breaking it up into the aromatics. The paste will darken and its smell will transform from sharp to rounded.',
        },
        {
            title: 'Xào lan — the final stir',
            description: 'Return the seared eel to the wok. Add fish sauce, oyster sauce, sugar, white pepper, and chilli. Increase heat to high. Toss everything together continuously — xao lan means to stir and roll — coating every piece of eel in the aromatic paste. Cook for 3–4 minutes, tossing constantly, until the sauce has reduced to a dry, clinging coat and the eel is cooked through. Add spring onion pieces in the last 30 seconds.',
            tip: 'This final stage is fast and requires full attention. Keep everything moving — the sugars in the oyster sauce will catch and burn if left still for more than a few seconds on high heat.',
        },
        {
            title: 'Finish and serve',
            description: 'Remove from heat immediately. Transfer to a serving plate and scatter torn dill, crushed peanuts, and fresh chilli over the top. The dill is not optional — it is the herb that defines this dish in Central Vietnam. Serve immediately over steamed white rice or alongside bánh mì.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
