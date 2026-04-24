'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'thit-kho-tau',
    title: 'Caramelised Pork & Eggs',
    subtitle:
        'Thịt Kho Tàu — pork belly and whole eggs slow-braised in coconut water and palm-sugar caramel until the sauce turns amber and glossy.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 6,
    heroImage:
        'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=1600&q=80',
    intro:
        'Every Vietnamese family has their version of thịt kho tàu, and every version is the correct one. In the South it arrives on the Tết table in a clay pot the size of a small child; in Huế it is smaller, sharper, more peppery. What unites them is the slow marriage of pork belly, coconut water, fish sauce and burnt palm sugar — a braise that cannot be rushed and pays back every minute you give it.',
    ingredientSections: [
        {
            title: 'Pork and eggs',
            items: [
                { amount: 1, unit: 'kg', name: 'pork belly', note: 'skin on, cut in 4cm cubes' },
                { amount: 8, name: 'eggs', note: 'hard-boiled and peeled' },
                { amount: 4, name: 'shallots', note: 'finely minced' },
                { amount: 6, name: 'garlic cloves', note: 'minced' },
            ],
        },
        {
            title: 'Caramel and braise',
            items: [
                { amount: 80, unit: 'g', name: 'palm sugar', note: 'or yellow rock sugar' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce', note: 'Phú Quốc or Red Boat' },
                { amount: 500, unit: 'ml', name: 'fresh coconut water', note: 'not coconut milk' },
                { amount: 1, unit: 'tsp', name: 'freshly ground black pepper' },
                { amount: 2, name: 'bird\'s eye chillies', note: 'optional, whole' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 600, unit: 'g', name: 'steamed jasmine rice' },
                { amount: 1, name: 'small head of pickled mustard greens (dưa cải)', note: 'traditional pairing' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the pork',
            description:
                'Bring a pot of water to a rolling boil and blanch the pork belly cubes for 3 minutes. Drain, rinse under cold water, and pat dry. This step removes the scum and any off-smell — skip it and your braise will turn cloudy.',
            tip: 'Leave the skin on. It melts into silk after an hour of braising and is the best part of the dish.',
        },
        {
            title: 'Marinate while the caramel rests',
            description:
                'In a bowl, combine the blanched pork with shallots, garlic, fish sauce and black pepper. Toss to coat and let it sit for 20 minutes at room temperature. The marinade will start drawing out the pork\'s savour even before the heat begins.',
        },
        {
            title: 'Build the caramel (nước màu)',
            description:
                'In a heavy clay pot or Dutch oven, melt the palm sugar with 2 tablespoons of water over medium heat. Do not stir — swirl the pan. Cook until the sugar turns the colour of dark amber, about 4–5 minutes. The moment it smells like toasted caramel, pull it off the heat.',
            tip: 'Too pale and the dish tastes flat; too dark and it turns bitter. Aim for the colour of strong tea.',
        },
        {
            title: 'Sear and deglaze',
            description:
                'Return the pot to medium-high heat and add the marinated pork. Sear for 4–5 minutes, turning once, until the edges catch colour in the caramel. Pour in the coconut water — it should come just halfway up the pork — and bring to a gentle simmer.',
        },
        {
            title: 'Slow-braise for one hour',
            description:
                'Add the peeled boiled eggs and the whole chillies if using. Reduce the heat to low, cover loosely, and simmer for 60 minutes. The pork is ready when a chopstick slides through the skin with no resistance and the sauce has reduced to a glossy, amber lacquer.',
            tip: 'Resist the urge to stir. Let the pork settle; stirring breaks the fat down and muddies the sauce.',
        },
        {
            title: 'Rest, then serve',
            description:
                'Pull the pot off the heat and let it stand for 15 minutes — this dish tastes even better on day two, after the eggs have fully soaked up the caramel. Serve over hot jasmine rice with a small pile of pickled mustard greens on the side to cut through the richness.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
