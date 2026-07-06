'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-trang-nuong',
    title: 'Grilled Rice Paper Pizza',
    subtitle: `Born in the misty highlands of Da Lat — Vietnam's answer to pizza, and arguably better.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '20 min',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/banh-trang-nuong.jpg',
    intro: `Banh trang nuong was invented by Da Lat street food vendors who discovered that a dry rice paper sheet placed over hot charcoal becomes a crispy, blistered base that holds toppings beautifully. An egg cracked on top, spring onions, dried shrimp, and a drizzle of chilli sauce — the whole thing cooked in under 3 minutes. Da Lat's night market has sold this since the 1990s. It is now found on street carts throughout Vietnam and beloved especially by students and anyone who needs dinner for 15,000 dong.`,
    ingredientSections: [
        {
            title: 'Per rice paper pizza',
            items: [
                { amount: 1, name: 'large dried rice paper sheet (banh trang)', note: '22cm diameter' },
                { amount: 1, name: 'egg' },
                { amount: 2, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, unit: 'tbsp', name: 'dried shrimp (tom kho)', note: 'or dried squid, finely chopped' },
                { amount: 1, unit: 'tsp', name: 'mayonnaise', note: 'Kewpie preferred' },
                { amount: 1, unit: 'tsp', name: 'chilli sauce (tuong ot)' },
                { amount: 1, unit: 'tsp', name: 'soy sauce or Maggi seasoning' },
                { amount: 30, unit: 'g', name: 'mozzarella or processed cheese', note: 'optional but popular' },
            ],
        },
    ],
    steps: [
        {
            title: 'Set up the grill',
            description: `Heat a wire grill rack over a gas burner on medium-low, or use a dry non-stick pan over low heat. The heat should be gentle — rice paper burns quickly over high flame.`,
        },
        {
            title: 'Toast the rice paper',
            description: `Place rice paper directly on the wire rack or pan. It will begin to blister and curl within 30 seconds. Using tongs, flatten it gently. Toast for 1 minute until the paper is rigid and lightly crisp but not browned.`,
            tip: `The rice paper should stay pale and crispy, not golden. Any browning at this stage means the heat is too high.`,
        },
        {
            title: 'Add toppings',
            description: `Crack the egg directly onto the centre of the rice paper. Spread it across the surface with the back of a spoon. Scatter spring onions and dried shrimp evenly. Add cheese if using. Drizzle soy sauce over the egg.`,
        },
        {
            title: 'Cook until set',
            description: `Cover with a lid or bowl for 2 to 3 minutes until the egg white is fully set but the yolk is still slightly runny. The bottom of the rice paper should be golden and shatteringly crisp.`,
        },
        {
            title: 'Finish and eat',
            description: `Remove from heat. Drizzle mayonnaise and chilli sauce over the top in zigzag lines. Eat immediately by breaking into pieces with your hands. Banh trang nuong is a standing-up, one-handed, street food experience.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
} 
