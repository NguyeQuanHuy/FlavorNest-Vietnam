'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-duc',
    title: 'Steamed Rice Pudding Cake',
    subtitle: 'Banh duc — a humble Northern classic served two ways: warm in a bowl with pork topping, or cold in chunks with fermented soybean dip.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.7,
    baseServings: 4,
    heroImage: '/images/recipes/banh-duc.jpg',
    intro: 'Banh duc lives two lives in Hanoi. Banh duc nong arrives in a small bowl, warm and almost custardy, draped with a savoury topping of minced pork, wood ear mushrooms and fried shallots, eaten with a spoon while it is still trembling. Banh duc lac is its older, country cousin — a firm chilled rice cake studded with peanuts, cut into chunks and dipped in tuong, the ancient Northern fermented soybean sauce. Both are humble, both are beloved, and both taste unmistakably of 1950s Hanoi.',
    ingredientSections: [
        {
            title: 'Banh duc base',
            items: [
                { amount: 200, unit: 'g', name: 'rice flour' },
                { amount: 30, unit: 'g', name: 'tapioca starch' },
                { amount: 800, unit: 'ml', name: 'water' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 80, unit: 'g', name: 'roasted peanuts', note: 'for banh duc lac version' },
            ],
        },
        {
            title: 'Pork topping (for warm version)',
            items: [
                { amount: 250, unit: 'g', name: 'minced pork' },
                { amount: 25, unit: 'g', name: 'dried wood ear mushrooms', note: 'soaked, finely chopped' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Finish and dips',
            items: [
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 1, name: 'small bunch cilantro', note: 'chopped' },
                { amount: 120, unit: 'ml', name: 'nuoc cham', note: 'for warm version' },
                { amount: 100, unit: 'ml', name: 'tuong (fermented soybean sauce)', note: 'for cold version, Bac Ninh brand' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the rice batter',
            description: 'In a large bowl, whisk rice flour, tapioca starch, water and salt until completely smooth with no lumps. Rest for 30 minutes — this lets the starches hydrate fully and gives the cake its silky texture.',
            tip: 'Lumpy batter equals lumpy cake. Whisk until the spoon glides through with no resistance.',
        },
        {
            title: 'Cook the batter into a pudding',
            description: 'Pour batter into a heavy non-stick pot. Add the oil. Cook over medium-low heat, stirring constantly with a wooden spoon for 15 minutes. The batter goes through three stages: opaque white, translucent gel, and finally a glossy, thick paste that pulls away from the sides of the pot. This is when it is done.',
            tip: 'Stop stirring at any point and the bottom burns. This is a 15-minute commitment of constant motion.',
        },
        {
            title: 'For banh duc lac (cold version)',
            description: 'Stir roasted peanuts into the cooked batter. Pour into a flat oiled tray (about 2cm thick). Cool to room temperature, then refrigerate at least 2 hours until firm. Cut into 4cm chunks. Serve cold with a small dish of tuong for dipping.',
        },
        {
            title: 'Cook the pork topping (for warm version)',
            description: 'Saute shallots and garlic in 1 tbsp oil until golden. Add minced pork and break up with a spoon, cooking for 5 minutes. Add wood ear mushrooms, fish sauce, sugar and pepper. Cook another 3 minutes until slightly dry and fragrant. Off heat.',
        },
        {
            title: 'Assemble the warm version',
            description: 'Spoon the still-warm rice pudding into individual bowls. Top each with a generous spoonful of the pork mixture, a shower of crispy fried shallots and chopped cilantro. Drizzle with nuoc cham. Serve immediately while the pudding is still trembling.',
            tip: 'Banh duc nong is meant to be eaten hot. Reheating cooled pudding gives a different, gummier texture.',
        },
        {
            title: 'Eat the Hanoi way',
            description: 'For banh duc nong: scoop with a spoon, mixing each bite of pudding with pork and crispy shallots. For banh duc lac: pick up a chunk with chopsticks and dip the corner into tuong before each bite. Both versions are best with a glass of bia hoi or unsweetened green tea.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
