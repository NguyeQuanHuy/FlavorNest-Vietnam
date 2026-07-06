'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-chua-ca-ro-phi',
    title: 'Canh Chua Cá Rô Phi (Sour Soup with Tilapia)',
    subtitle: 'Tilapia sections in a tamarind and pineapple broth with taro stems, tomato, bean sprouts, and the essential rice paddy herbs of the Mekong Delta — the lighter, more delicate version of Vietnamese sour soup where the clean white flesh of tilapia lets the broth\'s complex sourness come through more clearly than fatty fish allows.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/canh-chua-ca-ro-phi.jpg',
    intro: `Canh chua cá rô phi is the tilapia sour soup — the lighter version of the Mekong Delta canh chua that uses tilapia's clean, mild white flesh rather than the richer catfish, producing a broth that is more transparently itself because the fish does not compete with it. Where canh chua cá trê carries the specific fatty richness and the slight mineral character of catfish that enriches and thickens the tamarind-pineapple broth, canh chua cá rô phi produces a cleaner, brighter bowl where the sourness of the tamarind and the sweetness of the pineapple are more clearly the primary flavor notes — the tilapia providing protein and a mild sweetness without the depth that would shift the balance toward the fish character. This makes canh chua cá rô phi the version of sour soup that is most accessible to those who are new to the preparation and most satisfying to those who want the broth to be the primary experience. Tilapia sections hold together in the sour broth better than catfish, which can fall apart during the cooking time — the firmer flesh of tilapia remains in clean sections throughout the braise, making the soup visually neater and the eating experience more structured. The vegetables and herbs in canh chua cá rô phi are the same as in the catfish version — b?c hà, tomato, pineapple, bean sprouts, and the essential ngò om — because the vegetable formula of Mekong canh chua is fixed by tradition and because each element serves a specific function that is not replaceable: the b?c hà absorbs the broth and provides the spongy-textural contrast; the tomato breaks down into the broth and adds color and secondary acid; the pineapple provides the fruity brightness and the bromelain that tenderizes the fish; and the ngò om provides the specific cumin-adjacent rice paddy aroma that makes this a bowl of Mekong Delta rather than of anywhere else in Vietnam.`,
    ingredientSections: [
        {
            title: 'Tilapia',
            items: [
                { amount: 600, unit: 'g', name: 'tilapia sections (cá rô phi ch?t khúc)', note: 'bone-in, 5-6cm sections. Or 2 whole small tilapia, cleaned and sectioned.' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for pre-marinating' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Sour broth',
            items: [
                { amount: 1.2, unit: 'L', name: 'water' },
                { amount: 35, unit: 'g', name: 'tamarind paste', note: 'dissolved in 150ml warm water, strained' },
                { amount: 150, unit: 'g', name: 'fresh pineapple', note: 'cut into wedges — secondary souring and tenderizing agent' },
                { amount: 3, name: 'shallots', note: 'halved — for the broth base' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Vegetables',
            items: [
                { amount: 150, unit: 'g', name: 'b?c hà taro stems (d?c mùng)', note: 'peeled and cut diagonally into 4cm pieces' },
                { amount: 2, name: 'medium tomatoes', note: 'cut into wedges' },
                { amount: 100, unit: 'g', name: 'bean sprouts (giá)', note: 'added raw at service' },
                { amount: 3, name: 'spring onions', note: 'cut into 3cm pieces' },
                { amount: 2, name: 'stalks celery', note: 'cut into 3cm pieces — optional but traditional in some versions' },
            ],
        },
        {
            title: 'Essential herbs — added raw at service',
            items: [
                { amount: 1, name: 'large bunch ngò om (rice paddy herb)', note: 'the irreplaceable Mekong herb — added raw to the bowl at service' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 3, name: 'spring onions', note: 'sliced — scattered over the finished soup' },
                { amount: 2, name: 'fresh red chilies, sliced' },
            ],
        },
        {
            title: 'Fried garlic oil',
            items: [
                { amount: 4, name: 'garlic cloves', note: 'thinly sliced' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 2, name: 'extra limes' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the tilapia briefly',
            description: 'Season the tilapia sections with fish sauce, turmeric, and black pepper. Leave 10 minutes. The brief turmeric marination for tilapia in canh chua is shorter than for other preparations — 10 minutes rather than 20 — because the acidic broth will further season and set the fish surface during cooking. The turmeric is primarily for color and to neutralize any slight fishiness from the freshwater fish.',
            tip: 'Tilapia sections in canh chua need less pre-marination than catfish sections because tilapia\'s milder, cleaner flavor requires less preparation. Over-marinating tilapia in fish sauce before adding to an already fish-sauce-seasoned broth can produce sections that are too salty by the time the soup is ready.',
        },
        {
            title: 'Build the two-acid sour broth',
            description: 'Bring water to a boil with halved shallots. Add the strained tamarind liquid and the pineapple wedges. Simmer 5 minutes until the pineapple begins to release its juice and the two acids combine. Add fish sauce, sugar, and salt. Taste — the broth should be assertively sour, clearly savory, and with the pineapple sweetness detectable beneath the sourness. This two-acid combination — tamarind depth plus pineapple brightness — is the specific sourness of Mekong canh chua.',
            tip: 'The broth for canh chua cá rô phi should be slightly more assertively sour than for canh chua cá trê — tilapia\'s milder flesh benefits from a stronger sour note to balance, while catfish\'s richness provides its own balance. Adjust the tamarind quantity based on the broth taste before adding the fish.',
        },
        {
            title: 'Add tilapia and b?c hà',
            description: 'Add the tilapia sections and b?c hà taro stems simultaneously to the simmering sour broth. The tilapia will cook through in 6-8 minutes — less than catfish because the leaner flesh conducts heat more efficiently. Add the tomato wedges and spring onion at 5 minutes. Taste and adjust seasoning. The broth around the tilapia should be turning slightly cloudy from the fish protein — this natural cloudiness enriches the broth character without making it heavy.',
            tip: 'Tilapia cooks through in canh chua broth in 6-8 minutes compared to catfish\'s 8-10 minutes — the leaner fish heats through faster. Overcooked tilapia in sour soup falls apart and the flesh becomes stringy. Pull from the heat at the first sign of the flesh being white throughout and flaking easily from the bone when tested with a chopstick.',
        },
        {
            title: 'Fry the garlic oil',
            description: 'Heat oil in a small pan over medium heat. Fry garlic slices until golden and beginning to crisp. The garlic oil for canh chua cá rô phi is slightly more generous than for the catfish version — the milder fish benefits from a stronger garlic aromatic at the table. Pour the entire golden garlic oil over the surface of the finished soup immediately before serving.',
            tip: 'The fried garlic oil poured over canh chua at the table is the aromatic signal that the soup is ready to be eaten — the sizzle of hot garlic oil meeting the hot sour broth and the cloud of garlic steam that rises is as important to the experience of canh chua as any flavor in the bowl itself.',
        },
        {
            title: 'Serve with ngò om added raw',
            description: 'Ladle the soup into bowls or serve from a communal pot. Add bean sprouts raw — they wilt from the broth heat but retain a slight crunch. Place the ngò om and rau ram on individual plates beside each bowl. Each diner adds ngò om directly to their bowl and stirs it in immediately before eating — the contact with the hot sour broth releases the herb\'s specific cumin-rice paddy aroma into the steam that rises from the bowl. This aroma, rising from the bowl into the face of the person eating, is the smell of Mekong Delta canh chua.',
            tip: 'The ngò om added directly to the individual bowl rather than to the communal pot is the serving technique that preserves its aroma for each diner individually. Ngò om added to the communal pot perfumes the entire soup but the aroma dissipates into the room; added to the individual bowl it concentrates directly under the nose of the diner who is about to eat it. This is the correct technique.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
