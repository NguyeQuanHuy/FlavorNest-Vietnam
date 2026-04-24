'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-kho-to',
    title: 'Clay Pot Caramelised Fish',
    subtitle: 'Catfish braised in dark caramel with chilli and ginger — the clay pot keeps it sizzling at the table.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1600&q=85',
    intro: `Ca kho to is the everyday fish dish of the Mekong Delta, where catfish swim in every canal and every household keeps a clay pot for braising. The technique is the same as thit kho — caramel, fish sauce, coconut water — but applied to fish, which cooks faster and absorbs the dark, intense sauce differently. The clay pot retains heat and arrives at the table still bubbling. You eat it with plain steamed rice and let the sauce do all the work.`,
    ingredientSections: [
        {
            title: 'Main',
            items: [
                { amount: 600, unit: 'g', name: 'catfish steaks (ca tre)', note: 'or any firm white fish, cut into thick pieces' },
                { amount: 200, unit: 'ml', name: 'young coconut water' },
                { amount: 100, unit: 'ml', name: 'water' },
            ],
        },
        {
            title: 'Caramel and seasoning',
            items: [
                { amount: 3, unit: 'tbsp', name: 'sugar', note: 'for caramel' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar', note: 'for seasoning' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: 'julienned' },
                { amount: 2, name: 'red chillies', note: 'sliced' },
                { amount: 1, name: 'pinch of pepper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the fish',
            description: 'Combine fish sauce, sugar, garlic, shallots, ginger, chilli, and pepper. Toss fish pieces to coat. Marinate 20 minutes.',
        },
        {
            title: 'Make the caramel',
            description: 'Heat a clay pot or heavy saucepan over medium heat. Add 3 tablespoons sugar and cook without stirring until it turns deep amber. Remove from heat immediately when the caramel reaches a rich brown colour.',
            tip: 'The caramel continues cooking from residual heat after removal from the flame. Pull it off the heat slightly before it reaches target colour.',
        },
        {
            title: 'Sear and braise',
            description: 'Return pot to medium heat. Add marinated fish pieces in a single layer and sear 2 minutes per side. Pour in coconut water and water. Bring to a gentle simmer.',
        },
        {
            title: 'Braise until lacquered',
            description: 'Simmer uncovered for 20 to 25 minutes, basting the fish occasionally, until the sauce reduces to a thick, glossy coating. The fish should be deeply coloured and the sauce almost syrupy.',
            tip: 'Do not stir the fish once it is in the pot — catfish breaks apart easily. Baste with a spoon instead.',
        },
        {
            title: 'Serve',
            description: 'Bring the clay pot directly to the table while still sizzling. Serve with steamed jasmine rice. The sauce is the star — spoon it generously over the rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
