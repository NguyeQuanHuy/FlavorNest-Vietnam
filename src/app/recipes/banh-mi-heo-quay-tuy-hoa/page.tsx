'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-mi-heo-quay-tuy-hoa',
    title: 'Bánh Mì Heo Quay Tuy Hòa (Tuy Hòa Crispy Pork Belly Bánh Mì)',
    subtitle: 'A Vietnamese baguette filled with slices of crispy pork belly, pork liver pâté, butter, pickled daikon and carrot, fresh cucumber, cilantro, spring onion, and the specific chili sauce of Tuy Hòa — the bánh mì that Phú Yên people consider the definitive version of the sandwich.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-mi-heo-quay-tuy-hoa.jpg',
    intro: `Bánh mì heo quay Tuy Hòa is the version of bánh mì that Phú Yên people consider definitive — not the Saigon bánh mì with its abundance of cold cuts, not the Hội An chicken bánh mì, but this specific assembly built around heo quay: crispy roast pork belly with crackling skin that shatters when the sandwich is pressed together, producing a textural contrast that no other bánh mì filling can provide. The bánh mì of Tuy Hòa is notable for several specific elements that distinguish it from versions in other cities. The bread is thin-crusted and particularly airy — the local bakers in Tuy Hòa have been making bánh mì for generations with a crumb structure that is softer than Saigon versions, allowing the bread to compress slightly when bitten without the filling shooting out. The pâté is applied generously and directly onto the buttered bread before any other filling — in Tuy Hòa it is always pork liver pâté from a specific brand sold at the morning market, but any good pâté gan performs the same function. The chili sauce is made fresh at the shop each morning — not from a bottle, not from hoisin, but from a specific preparation of bird's eye chili, garlic, and sugar that is simultaneously fiery and slightly sweet. The heo quay itself is sliced at the moment of assembly so the crackling skin is still warm and the fat beneath it is still slightly soft. Bánh mì heo quay Tuy Hòa is the morning food of the city — sold from 6am to 9am at the stalls near Chợ Tuy Hòa and consumed immediately, standing or walking, still warm from the assembly.`,
    ingredientSections: [
        {
            title: 'Bánh mì bread',
            items: [
                { amount: 4, name: 'Vietnamese baguettes (bánh mì)', note: '25-30cm long, thin-crusted, airy crumb. Fresh from a Vietnamese bakery if possible — day-old bread should be warmed in the oven for 3 minutes at 180°C before assembling.' },
            ],
        },
        {
            title: 'Crispy pork belly (heo quay)',
            items: [
                { amount: 600, unit: 'g', name: 'crispy pork belly with crackling skin', note: 'from the ba chỉ quay recipe on this site, or purchased from a Vietnamese roast pork shop (tiệm heo quay). The skin must be genuinely crispy — not soft or chewy.' },
            ],
        },
        {
            title: 'Essential fillings',
            items: [
                { amount: 4, unit: 'tbsp', name: 'unsalted butter', note: 'room temperature — spread generously on both inner surfaces of the bread first' },
                { amount: 8, unit: 'tbsp', name: 'pork liver pâté (pâté gan)', note: 'Vissan brand or good-quality French-style pork pâté. Applied directly on top of the butter, before any other filling.' },
                { amount: 1, name: 'cucumber', note: 'sliced lengthwise into thin batons — 2-3 per sandwich' },
                { amount: 6, name: 'spring onions', note: 'green parts, cut into 5cm pieces' },
                { amount: 1, name: 'bunch cilantro', note: 'whole sprigs — the essential Vietnamese bánh mì herb' },
            ],
        },
        {
            title: 'Đồ chua (pickled daikon and carrot)',
            items: [
                { amount: 1, name: 'medium carrot', note: 'julienned' },
                { amount: 150, unit: 'g', name: 'daikon radish (củ cải trắng)', note: 'julienned' },
                { amount: 100, unit: 'ml', name: 'rice vinegar' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 50, unit: 'ml', name: 'warm water' },
            ],
        },
        {
            title: 'Tuy Hòa fresh chili sauce',
            items: [
                { amount: 10, name: 'bird\'s eye chilies', note: 'the sauce should be genuinely spicy — this is not decorative' },
                { amount: 3, name: 'garlic cloves' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tbsp', name: 'rice vinegar' },
                { amount: 2, unit: 'tbsp', name: 'water' },
            ],
        },
        {
            title: 'Optional additions',
            items: [
                { amount: 4, unit: 'tbsp', name: 'maggi seasoning sauce', note: 'a few drops drizzled inside — the umami layer that many Tuy Hòa bánh mì shops add' },
                { amount: 2, name: 'eggs, fried', note: 'some Tuy Hòa versions include a fried egg — bánh mì trứng heo quay' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the đồ chua first — minimum 30 minutes ahead',
            description: 'Dissolve sugar and salt in warm water. Add rice vinegar. Combine with julienned carrot and daikon. Toss to coat and leave for minimum 30 minutes at room temperature — the vegetables should taste bright and sweet-sour with retained crunch. Refrigerate if making further ahead. Good đồ chua keeps for 2 weeks refrigerated and improves for the first 2 days.',
            tip: 'The đồ chua must be made ahead — this is the component that requires time and is the one most bánh mì at home get wrong by using fresh vegetables. The pickled vegetables provide the acidity that balances the fat of the pork belly and pâté. Without them the sandwich is rich and heavy; with them it is complete.',
        },
        {
            title: 'Make the Tuy Hòa fresh chili sauce',
            description: 'Blend bird\'s eye chilies, garlic, sugar, salt, rice vinegar, and water until smooth. Do not strain — the small seeds and skin of the chili stay in the sauce and add texture. Taste: it should be fiery, slightly sweet, and sharp from the vinegar. This sauce is made fresh for each day\'s service at Tuy Hòa bánh mì shops — it is not a stored sauce. Make it the morning of serving.',
            tip: 'The freshness of the chili sauce is what distinguishes Tuy Hòa bánh mì from versions using bottled sriracha or commercial chili sauce. Fresh bird\'s eye chili has a specific brightness and heat character that aged commercial sauce does not. Make it fresh and use it the same day.',
        },
        {
            title: 'Prepare and slice the heo quay',
            description: 'If using freshly made ba chỉ quay, slice immediately before assembly — the crackling is at its most dramatic when still warm. Slice into pieces 5-6mm thick with the crackling skin intact on each piece. If using purchased heo quay that has cooled: place skin-side up on a wire rack and blast in a 230°C oven for 5-7 minutes to re-crisp the skin before slicing. Never microwave heo quay — it destroys the crackling permanently.',
            tip: 'The crackling must be crispy when it goes into the sandwich — soft crackling defeats the purpose of the heo quay bánh mì. The contrast of shatteringly crisp skin, soft fat, and tender meat against the soft bread is the entire textural point of this sandwich.',
        },
        {
            title: 'Warm the bread',
            description: 'If the bánh mì is not fresh from the bakery, warm in a 180°C oven for 3 minutes — just enough to restore the crust crispness. The outer crust should be firm when squeezed; the inner crumb should be soft and airy. Cut lengthwise along one side, opening like a book but leaving one side intact — do not cut all the way through or the filling falls out.',
            tip: 'The bread temperature matters. Warm bread against the cold pickled vegetables and the warm pork creates the specific contrast that makes a bánh mì satisfying. Cold bread from the refrigerator does not provide this contrast.',
        },
        {
            title: 'Assemble in the correct Tuy Hòa order',
            description: 'The assembly order is specific and matters for flavor integration: 1) Spread butter generously on both inner surfaces. 2) Spread pâté directly onto the butter on the bottom half. 3) Layer pork belly slices on the pâté — the fat side down, crackling up. 4) Add đồ chua generously. 5) Lay cucumber batons and spring onion pieces over the đồ chua. 6) Tuck cilantro sprigs in. 7) Drizzle Tuy Hòa chili sauce over everything. 8) Add a few drops of maggi if using. Close and press gently.',
            tip: 'The pâté directly on butter (not on top of the meat) is the structural element — it adheres to the bread surface and provides the foundation of savory depth that the rest of the filling builds on. Pâté placed on top of the meat slides out with the first bite.',
        },
        {
            title: 'Eat immediately — bánh mì waits for nobody',
            description: 'Wrap the assembled bánh mì in paper or a napkin and eat immediately. The crackling begins softening from the moisture of the vegetables and the steam of the warm bread within 5 minutes of assembly. A bánh mì heo quay Tuy Hòa eaten within 2 minutes of assembly is a different eating experience from one that has sat for 10 minutes. The crackling shatters. The bread crust cracks. The cold pickled vegetables contrast with the warm pork fat. This is the Tuy Hòa morning.',
            tip: 'The Tuy Hòa practice of eating bánh mì immediately — standing at the stall, walking away with it, eating in the first 2 minutes — is not impatience. It is the correct way to eat this sandwich. Plan to eat it the moment it is assembled, not to photograph it and then eat it.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
