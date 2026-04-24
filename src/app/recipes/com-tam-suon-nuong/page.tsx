'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-tam-suon-nuong',
    title: 'Broken Rice with Grilled Pork Ribs',
    subtitle: `Saigon's most beloved breakfast — smoky chargrilled pork ribs over fragrant broken rice.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '55 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1600&q=85',
    intro: `Com tam suon nuong is the rib version of Saigon's iconic broken rice plate — pork ribs marinated in lemongrass and fish sauce, grilled until lacquered and charred, served over broken jasmine rice with scallion oil, pickled vegetables, and a generous pour of nuoc cham. The ribs are the star.`,
    ingredientSections: [
        {
            title: 'Grilled pork ribs',
            items: [
                { amount: 600, unit: 'g', name: 'pork spare ribs', note: 'cut into individual ribs' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'honey' },
                { amount: 2, name: 'lemongrass stalks', note: 'white part, minced' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 300, unit: 'g', name: 'broken rice', note: 'cooked' },
                { amount: 3, name: 'spring onions', note: 'for scallion oil' },
                { amount: 60, unit: 'ml', name: 'vegetable oil' },
                { amount: 80, unit: 'g', name: 'pickled daikon and carrot' },
                { amount: 120, unit: 'ml', name: 'nuoc cham' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate ribs',
            description: 'Combine fish sauce, sugar, honey, lemongrass, garlic, and oyster sauce. Coat ribs thoroughly. Marinate at least 2 hours, ideally overnight.',
            tip: 'The longer the marinade, the deeper the caramelisation when grilling.',
        },
        {
            title: 'Grill the ribs',
            description: 'Grill over high heat for 4 to 5 minutes per side until deeply caramelised and slightly charred. Baste with remaining marinade during cooking.',
        },
        {
            title: 'Make scallion oil',
            description: 'Heat oil until shimmering. Remove from heat and add sliced spring onions and a pinch of salt.',
        },
        {
            title: 'Assemble',
            description: 'Serve ribs over broken rice with scallion oil drizzled on the rice. Add pickled vegetables on the side. Pour nuoc cham generously over everything.',
        },
    ],
};
export default function Page() { return <RecipeLayout recipe={recipe} />; } 
