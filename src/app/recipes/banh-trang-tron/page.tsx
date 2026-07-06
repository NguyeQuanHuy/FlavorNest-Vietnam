'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-trang-tron',
    title: 'Rice Paper Salad',
    subtitle: `Shredded rice paper tossed with quail eggs, dried shrimp, green mango and a tangy-spicy dressing.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/banh-trang-tron.jpg',
    intro: `Banh trang tron is Saigon's most beloved after-school snack — a bag of shredded rice paper, green mango, quail eggs, dried beef or shrimp, fresh herbs, and a dressing so addictive it borders on dangerous. Sold from plastic bags by vendors outside every school gate in the city, it is the taste of Vietnamese childhood. The texture is unlike anything else: chewy rice paper strips, crunchy fried shallots, creamy egg yolk, sour mango, all bound together by a spicy-sour-sweet sauce.`,
    ingredientSections: [
        {
            title: 'Base',
            items: [
                { amount: 150, unit: 'g', name: 'dried rice paper sheets (banh trang)', note: 'cut or broken into thin strips' },
                { amount: 1, name: 'green mango', note: 'peeled and julienned' },
                { amount: 6, name: 'quail eggs', note: 'boiled and halved' },
                { amount: 50, unit: 'g', name: 'dried shrimp (tom kho)', note: 'or dried beef jerky (kho bo)' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, name: 'bunch Vietnamese mint' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 3, unit: 'tbsp', name: 'roasted peanuts', note: 'roughly crushed' },
            ],
        },
        {
            title: 'Dressing',
            items: [
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'lime juice' },
                { amount: 1, unit: 'tbsp', name: 'chilli sauce (tuong ot)' },
                { amount: 1, name: 'garlic clove', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'tamarind paste', note: 'optional, adds depth' },
                { amount: 2, unit: 'tbsp', name: 'cooking oil', note: 'for coating the rice paper' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare the rice paper',
            description: `Cut dry rice paper sheets into thin strips about 1cm wide using scissors. Toss with 2 tablespoons of cooking oil to coat each strip — this prevents them from sticking together and adds a faint richness.`,
            tip: `Do not soak the rice paper. It should remain dry and slightly chewy, not soft. The oil is the only moisture it needs.`,
        },
        {
            title: 'Make the dressing',
            description: `Combine fish sauce, sugar, lime juice, chilli sauce, garlic, and tamarind paste. Stir until sugar dissolves. Taste and adjust — the dressing should be assertively sour, sweet, salty, and spicy simultaneously.`,
        },
        {
            title: 'Toss everything together',
            description: `In a large bowl, combine rice paper strips, julienned green mango, spring onions, dried shrimp, and fresh mint. Pour dressing over and toss thoroughly with tongs or your hands until every strip is coated.`,
            tip: `Use your hands if you can — tongs break the rice paper strips. The goal is every piece coated but nothing crushed.`,
        },
        {
            title: 'Top and serve',
            description: `Transfer to serving bowls or bags. Top with quail egg halves, fried shallots, and crushed peanuts. Serve immediately — banh trang tron softens after 10 minutes as the dressing penetrates the rice paper. Eat it while it still has chew.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
