'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-ca-chua-rau-den',
    title: 'Canh Cá Chua Rau Dền (Northern Sour Fish Soup with Amaranth)',
    subtitle: 'The northern Vietnamese sour fish soup — tomato-soured rather than tamarind-soured, with amaranth leaves (rau dền) that turn the broth a specific deep red-purple, freshwater fish, and the clean vinegar acidity of the north rather than the fruity complexity of the Mekong. The Hà Nội summer soup eaten when the amaranth grows abundantly in every garden.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '35 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/canh-ca-chua-rau-den.jpg',
    intro: `Canh cá chua rau dền is the sour fish soup of northern Vietnam — a preparation that is the direct northern counterpart to canh chua cá trê and canh chua cá rô phi of the Mekong Delta, and that demonstrates how differently the two culinary regions approach the same fundamental dish type. Where the Mekong sour fish soup uses tamarind as its primary souring agent, produces a deep orange broth colored by annatto oil and fresh turmeric, and includes the specific rau đồng herbs of the waterway ecosystem (ngò om, bông súng, bạc hà), the northern version uses the tartness of ripe tomatoes cooked down into the broth as the primary souring agent — sometimes supplemented with a small amount of rice vinegar — produces a clear, lighter broth, and uses rau dền (amaranth, Amaranthus tricolor) as its vegetable and visual defining element. Rau dền is an annual leafy vegetable grown in northern Vietnamese gardens through the summer months, with red-veined leaves that release a deep red-purple pigment into the broth during cooking — coloring it in a way that is one of the most visually distinctive of any Vietnamese soup and that is responsible for canh cá chua rau dền being the most recognizable northern sour soup by sight alone. The fish used in canh cá chua rau dền is typically whatever is freshest and available — cá rô phi, cá trắm, cá chép, or cá điêu hồng (red tilapia) — but the northern cook's approach to the fish in this soup is different from the Mekong approach: the fish sections are added to the broth later and cooked for a shorter time, the broth being built primarily from tomatoes and aromatics rather than from a fish stock base, and the result being lighter and more broth-forward than the richer Mekong canh chua.`,
    ingredientSections: [
        {
            title: 'Fish',
            items: [
                { amount: 500, unit: 'g', name: 'freshwater fish sections', note: 'cá rô phi, cá trắm cỏ, cá chép, or any firm-fleshed freshwater fish. Bone-in sections 5cm.' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for brief marinating' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Northern sour broth — tomato-based',
            items: [
                { amount: 1.2, unit: 'L', name: 'water' },
                { amount: 4, name: 'ripe tomatoes', note: 'cut into wedges — the primary souring agent in northern canh chua' },
                { amount: 3, name: 'shallots', note: 'thinly sliced — fried before the tomato' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for frying the shallots and tomato' },
                { amount: 1, unit: 'tbsp', name: 'rice vinegar', note: 'optional — adds the clean vinegar acidity specific to northern sour soups' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Rau dền — the defining vegetable',
            items: [
                { amount: 300, unit: 'g', name: 'red amaranth leaves (rau dền đỏ)', note: 'stems removed, leaves kept whole. The red variety produces the deepest color. Green amaranth can be used — less dramatic visually but same flavor.' },
            ],
        },
        {
            title: 'Additional vegetables',
            items: [
                { amount: 2, name: 'extra tomatoes', note: 'cut into wedges — added late for texture' },
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces' },
                { amount: 2, name: 'stalks Vietnamese celery (cần ta)', note: 'sliced — added at the end for the northern herb finish' },
            ],
        },
        {
            title: 'Fried shallot oil topping',
            items: [
                { amount: 4, name: 'shallots', note: 'thinly sliced' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the tomato-sour broth base',
            description: 'Heat oil in a pot over medium-high heat. Fry sliced shallots until golden — 3 minutes. Add half the tomato wedges (two tomatoes) and cook for 8-10 minutes, pressing them down with a spoon, until they completely break down and the oil turns deep orange-red. Add water. Bring to a boil. The tomato-shallot base produces the specific bright, clean sourness of northern canh chua — lighter and more immediate than tamarind. Add fish sauce, sugar, salt, and optional rice vinegar.',
            tip: 'Cooking half the tomatoes into the broth base and adding the other half fresh toward the end is the northern technique that produces both a sour broth with depth from the cooked tomatoes and fresh tomato texture from the late addition. The Mekong version uses tamarind for depth and pineapple for freshness; the northern version uses the same tomato in two stages to achieve the same depth-and-freshness balance.',
        },
        {
            title: 'Add fish and cook briefly',
            description: 'Add the marinated fish sections to the simmering tomato broth. The fish cooks through in 6-8 minutes in the acidic tomato broth — the acid slightly firms the exterior and keeps the sections intact. Add the remaining fresh tomato wedges at 5 minutes. Taste the broth — it should be clearly sour from the tomato, savory, and clean. Adjust with additional fish sauce or a few drops of rice vinegar.',
            tip: 'The rice vinegar optional addition for canh cá chua rau dền is the specifically northern element — the north\'s preference for the clean, sharp acidity of vinegar rather than the warmer, fruitier sourness of tamarind is a regional flavor preference that is detectable throughout northern Vietnamese cooking and most clearly in their sour soups.',
        },
        {
            title: 'Add rau dền — watch the color transform',
            description: 'Add the red amaranth leaves to the simmering broth. Within 30-60 seconds, the red-purple pigment from the leaves will begin bleeding into the broth — the clear tomato broth turning progressively deeper as the amaranth wilts. Cook for 2-3 minutes until the leaves are fully wilted and the broth has transformed to a deep reddish-purple. Add spring onion and Vietnamese celery pieces.',
            tip: 'The color transformation of the broth when rau dền is added is the visual moment that makes canh cá chua rau dền the most dramatically beautiful of all Vietnamese sour soups. Within 60 seconds of adding the red amaranth, the broth changes from clear orange-red to a deep burgundy-purple that is specific to this soup and to no other. Watch it happen — it is one of the most dramatic natural color changes in Vietnamese cooking.',
        },
        {
            title: 'Make the fried shallot oil',
            description: 'Heat oil in a small pan. Fry sliced shallots until golden and beginning to crisp. Pour the entire shallot oil over the surface of the finished soup at the table. The fried shallot oil for northern canh chua serves the same function as for Mekong canh chua — the aromatic signal that the soup is ready and the flavor element that lifts the entire bowl at service.',
            tip: 'Northern canh chua uses the fried shallot oil at the table as a finishing element in exactly the same way as Mekong canh chua — despite the profound differences between the two soups in every other respect. The shallot oil topping is the one element shared across the regional divide, suggesting it was the common original element and the souring agents, vegetables, and herbs diverged regionally while the shallot oil remained constant.',
        },
        {
            title: 'Serve and eat',
            description: 'Ladle the deep reddish-purple soup into bowls. The visual of the finished canh cá chua rau dền: deep burgundy-purple broth, orange-red tomato wedges, green spring onion and celery, white fish sections, and the golden shallot oil drizzled over the surface. Serve with rau răm, steamed rice, lime, and sliced chili. The flavors: clean, bright sourness from the tomato, the specific mild-bitter note of the amaranth, the savory fish, and the crispy shallot aromatic at the end of each spoonful.',
            tip: 'The mild, pleasant bitterness of the cooked amaranth leaves in canh cá chua rau dền is the specific flavor note that distinguishes this northern soup from any southern preparation. Cooked amaranth provides a bitter dimension that no Mekong rau đồng herb produces, and it is this bitterness — light, clean, not unpleasant — that makes the northern version a different eating experience from the southern despite the same basic structure.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
