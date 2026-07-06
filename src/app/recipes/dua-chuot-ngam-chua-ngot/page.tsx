'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'dua-chuot-ngam-chua-ngot',
    title: 'Dưa Chuột Ngâm Chua Ngọt (Vietnamese Sweet and Sour Pickled Cucumber)',
    subtitle: 'Cucumber slices quick-pickled in rice vinegar, sugar, garlic, and chili — ready in 30 minutes, eaten as a side dish, palate cleanser, or condiment alongside grilled meats. The Vietnamese pickle that every table needs.',
    category: 'VEGETARIAN',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 6,
    heroImage: '/images/recipes/dua-chuot-ngam-chua-ngot.jpg',
    intro: `Dưa chuột ngâm chua ngọt — sweet and sour pickled cucumber — is one of the most useful preparations in Vietnamese home cooking. It serves as the refreshing side dish alongside rich grilled meats like sườn nướng and bò nướng, as a palate cleanser between courses, as a component in bánh mì, and as the vegetable that makes any rice and protein combination feel complete. The quick-pickling method (unlike the fermented đồ chua that takes days) requires only 30 minutes in the pickling liquid to produce a cucumber that is bright, crunchy, and carrying the sweet-sour-sharp flavor that is its purpose. The addition of garlic and chili to the pickling liquid is the Vietnamese element — plain vinegar-sugar pickles exist everywhere; the garlic and bird's eye chili make this specifically Vietnamese. Fresh ginger can be added to the pickling liquid for a warmer note. Sesame seeds scattered before serving add texture. The pickle keeps refrigerated for up to 5 days, improving slightly each day as the flavors develop.`,
    ingredientSections: [
        {
            title: 'Cucumber',
            items: [
                { amount: 4, name: 'medium cucumbers (dưa chuột)', note: 'Lebanese or Persian cucumbers preferred — thinner skin, fewer seeds, crisper flesh. Regular cucumbers work but remove the seeds.' },
                { amount: 1, unit: 'tsp', name: 'salt', note: 'for drawing out moisture before pickling' },
            ],
        },
        {
            title: 'Pickling liquid',
            items: [
                { amount: 120, unit: 'ml', name: 'rice vinegar', note: 'mild and clean — the correct vinegar for Vietnamese quick pickles. White wine vinegar is an acceptable substitute.' },
                { amount: 60, unit: 'g', name: 'sugar', note: '4 tbsp — adjust to taste. Vietnamese pickles are noticeably sweet.' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 60, unit: 'ml', name: 'water' },
                { amount: 3, name: 'garlic cloves', note: 'thinly sliced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'thinly sliced — adjust heat to preference' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: 'finely julienned — optional but adds warmth' },
            ],
        },
        {
            title: 'Optional finishing',
            items: [
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'a few drops only — adds fragrance without dominating' },
                { amount: 1, unit: 'tbsp', name: 'toasted sesame seeds', note: 'scattered before serving' },
                { amount: 3, name: 'spring onions', note: 'sliced — for the fresh garnish version' },
            ],
        },
    ],
    steps: [
        {
            title: 'Slice and salt the cucumber',
            description: 'Wash the cucumbers. If using regular cucumbers, halve lengthwise and scoop out the seeds with a spoon — seeds make the pickle watery. Lebanese or Persian cucumbers do not need deseeding. Slice into rounds 5mm thick, or cut into batons 1cm wide and 5cm long (batons give more surface area for the pickling liquid). Toss with 1 teaspoon of salt in a bowl. Leave for 20 minutes. The salt draws excess moisture from the cucumber. Rinse under cold water. Squeeze gently and drain.',
            tip: 'The salting and rinsing step is what keeps the pickled cucumber crunchy rather than watery. Skipping it produces a diluted pickling liquid and soft cucumber within hours.',
        },
        {
            title: 'Make the pickling liquid',
            description: 'Combine rice vinegar, sugar, salt, and water in a small saucepan. Heat over medium heat, stirring until the sugar and salt dissolve completely — about 2 minutes. Do not boil. Remove from heat and add sliced garlic, chili, and ginger. Allow the liquid to cool to room temperature before adding the cucumber — hot liquid softens the cucumber immediately and prevents the crunch from developing.',
            tip: 'The liquid does not need to be hot to dissolve the sugar — gentle warming is enough. Using cold liquid with very fine-ground sugar also works if you want to skip heating entirely.',
        },
        {
            title: 'Pickle for minimum 30 minutes',
            description: 'Combine the drained cucumber with the cooled pickling liquid. Toss to coat. The cucumber should be mostly submerged. Pickle at room temperature for minimum 30 minutes for a light pickle, or refrigerate for 2-3 hours for a more developed flavor. After 30 minutes, taste — the cucumber should be bright, sweet-sour, with a clean garlic-chili heat and full crunch.',
            tip: 'The pickle improves significantly between 30 minutes and 4 hours. Same-day pickles have bright flavor; overnight pickles have deeper, more developed flavor but slightly less crunch. Both are correct for different purposes.',
        },
        {
            title: 'Serve and store',
            description: 'Before serving, taste and adjust: more sugar if too sharp, a splash more vinegar if too sweet, a pinch of salt if flat. Add a few drops of sesame oil and scatter sesame seeds if using. Serve cold or at room temperature. Store covered in the refrigerator — the pickle keeps for 5 days. The garlic and chili flavor intensifies over time.',
            tip: 'Serve alongside: sườn nướng (the classic pairing), bò nướng, cơm tấm, bánh mì, or any Vietnamese grilled dish. The acidity and crunch of the pickle cuts through the richness of grilled meats in the same way that pickled daikon functions in bánh mì.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
