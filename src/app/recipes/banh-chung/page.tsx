'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-chung',
    title: 'Lunar New Year Square Rice Cake',
    subtitle: 'Banh chung — a perfect square of glutinous rice, mung bean and pork wrapped in banana leaves and boiled for 12 hours. The most symbolic dish of Vietnamese Tet.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '12 hrs',
    rating: 4.9,
    baseServings: 8,
    heroImage: '/images/recipes/banh-chung.jpg',
    intro: 'Banh chung is more than food. The legend tells of Prince Lang Lieu, the eighteenth son of the Hung King, who in the 4th century BCE created this square cake to symbolise the earth and was crowned for it. Four thousand years later, every Vietnamese family north of Hue still makes banh chung at Tet — sometimes wrapping them on Lunar New Year Eve, then sitting around a wood fire all night to boil them. The square shape is the earth; the green colour, the trees; the rice, the harvest; the pork, prosperity. It is the dish that anchors a national identity to a single block of glutinous rice.',
    ingredientSections: [
        {
            title: 'Rice',
            items: [
                { amount: 1, unit: 'kg', name: 'glutinous rice', note: 'soaked overnight, drained' },
                { amount: 2, unit: 'tsp', name: 'sea salt' },
                { amount: 30, name: 'dong leaves (la dong)', note: 'or banana leaves, washed and softened over flame' },
            ],
        },
        {
            title: 'Mung bean filling',
            items: [
                { amount: 400, unit: 'g', name: 'split mung beans', note: 'soaked 4 hours, drained' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Pork',
            items: [
                { amount: 600, unit: 'g', name: 'pork belly', note: 'skin on, cut in long strips' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sea salt' },
                { amount: 1, unit: 'tbsp', name: 'freshly cracked black pepper' },
            ],
        },
        {
            title: 'Wrapping and boiling',
            items: [
                { amount: 1, name: 'roll of bamboo string (lat giang)', note: 'or cotton string' },
                { amount: 1, name: 'wooden frame mould (khuon)', note: '15cm x 15cm, optional but helpful' },
                { amount: 8, unit: 'L', name: 'water', note: 'for boiling' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate pork the night before',
            description: 'Toss pork belly strips with shallots, fish sauce, salt and a generous amount of black pepper. Refrigerate overnight for the seasoning to penetrate the meat.',
            tip: 'Black pepper is the signature aroma of banh chung filling. Be generous.',
        },
        {
            title: 'Steam the mung beans',
            description: 'Steam the soaked, drained mung beans over simmering water for 25 minutes until tender. Mash lightly with a fork while warm. Season with salt and white pepper. Let cool.',
        },
        {
            title: 'Season the rice',
            description: 'Drain soaked glutinous rice thoroughly. Toss with 2 tsp salt. The rice should look glossy and the grains should hold their shape.',
        },
        {
            title: 'Layer the leaves in a mould',
            description: 'Cross 4 dong leaves in the bottom of the wooden mould, shiny side down, with the leaves extending well beyond the edges. The leaves will both colour and flavour the rice.',
            tip: 'No mould? Stack the leaves in a cross on the table and build the cake by hand. It takes practice.',
        },
        {
            title: 'Build each cake',
            description: 'Spread a thin layer of rice across the bottom of the leaf-lined mould (about 1cm thick). Add a layer of mung bean. Lay 2 strips of pork belly down the centre. Cover with another layer of mung bean, then a final thick layer of rice. The pork should be fully buried in the mung bean and rice.',
        },
        {
            title: 'Wrap and tie tightly',
            description: 'Fold the leaves up and over the cake, pressing tightly to compact. Lift the wrapped cake out of the mould and bind with bamboo string crosswise — first the underside, then the top, then around the sides — pulling the strings taut so the parcel holds its perfect square shape.',
            tip: 'Loose tying = the rice expands and ruptures the cake. Tie like you mean it.',
        },
        {
            title: 'Boil for 10 to 12 hours',
            description: 'Place cakes in the largest pot you have. Cover with cold water by 5cm, place a heavy plate on top to keep them submerged. Bring to a boil, then reduce to a steady simmer. Boil for 10 to 12 hours, topping up with hot water every 2 hours so the cakes stay submerged. The rice slowly transforms into a translucent, deep-green block.',
            tip: 'Traditionally Vietnamese families stay up overnight tending the fire. This is part of Tet.',
        },
        {
            title: 'Press, cool and serve',
            description: 'Remove cakes and rinse briefly in cold water. Place under a heavy weight (a wooden board with bricks) for 4 hours to compress and firm. Untie before serving. Eat at room temperature, sliced into wedges with cross-section visible — the pork in the centre, the mung bean ring around it, the green rice outside. Traditionally served with dua hanh (pickled spring onions) and Vietnamese cured pork (gio lua). Keeps 7 to 10 days.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
