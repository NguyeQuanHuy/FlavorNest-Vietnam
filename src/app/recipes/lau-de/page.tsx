'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'lau-de',
    title: 'Lẩu Dê (Vietnamese Goat Hot Pot)',
    subtitle: 'A fragrant, mildly spiced goat broth served in a bubbling clay pot at the center of the table — thin-sliced goat meat cooked at the moment of eating in the lemongrass-galangal broth, with rice vermicelli, water spinach, banana blossom, and the complete herb plate of central Vietnamese cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/lau-de.jpg',
    intro: `Lẩu dê is the Vietnamese goat hot pot — the communal, table-centered preparation that transforms goat from a challenging ingredient into a celebratory social experience. The lẩu format — a pot of aromatic broth kept bubbling at the center of the table while diners cook their own meat and vegetables at their own pace — is specifically suited to goat because it allows each piece of meat to be cooked exactly to the diner's preference (a few seconds for paper-thin slices that barely change from raw, a minute for thicker pieces that cook through completely) and because the broth, which has been developing complexity for hours before it reaches the table, transfers its aromatic depth to each piece as it passes through. The broth for lẩu dê is built on goat bones simmered with lemongrass, galangal, dried turmeric, and annatto — the same aromatic foundation as the Central Vietnamese goat dishes it is related to — but with the addition of fresh coconut water in the final stage that gives the Mekong Delta version its specific mild sweetness, and fresh pineapple rings that add gentle acidity and help tenderize the thin-sliced raw goat the moment it enters the hot liquid. Lẩu dê is eaten over an extended period — never rushed, always with beer or rice wine alongside, the broth replenished as it reduces, new vegetables added as previous ones are consumed, the conversation expanding alongside the meal. The goat bones simmered all morning produce a broth that deepens with each hour, and by the end of the meal the liquid has absorbed not just the bones and aromatics but also the flavors of everything that has passed through it. The last ladleful of broth, poured over plain rice at the end of a lẩu dê session, is the meal's most complex moment.`,
    ingredientSections: [
        {
            title: 'Goat bone broth',
            items: [
                { amount: 1, unit: 'kg', name: 'goat bones (xương dê)', note: 'neck bones, rib bones — blanched and rinsed' },
                { amount: 300, unit: 'g', name: 'goat shoulder or neck meat', note: 'bone-in — added to the broth for the first hour, then removed and thinly sliced for dipping' },
                { amount: 2, unit: 'L', name: 'water' },
                { amount: 3, name: 'shallots', note: 'halved and charred over flame' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, charred' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Aromatic broth seasoning',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'bruised and tied in bundle — simmered in broth' },
                { amount: 40, unit: 'g', name: 'fresh galangal (riềng)', note: '4 slices, lightly smashed' },
                { amount: 1, unit: 'tsp', name: 'dried turmeric powder', note: 'or 20g fresh turmeric, sliced' },
                { amount: 2, unit: 'tbsp', name: 'annatto oil', note: 'adds the characteristic orange color' },
                { amount: 200, unit: 'ml', name: 'young coconut water', note: 'added in the last 20 minutes before serving — Mekong Delta addition' },
                { amount: 4, name: 'rings fresh pineapple', note: '1cm thick — add to the pot when it comes to the table; helps tenderize the raw goat' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Goat for dipping',
            items: [
                { amount: 600, unit: 'g', name: 'goat leg or loin (thịt dê thái mỏng)', note: 'sliced paper-thin — freeze 20 minutes before slicing for cleaner cuts. Arrange on plates for the table.' },
                { amount: 200, unit: 'g', name: 'goat tripe (lòng dê)', note: 'cleaned and blanched, sliced thin — optional but traditional in Ninh Bình style lẩu dê' },
            ],
        },
        {
            title: 'Vegetables and noodles for the pot',
            items: [
                { amount: 200, unit: 'g', name: 'water spinach (rau muống)', note: 'cut into 5cm pieces' },
                { amount: 100, unit: 'g', name: 'banana blossom (bắp chuối)', note: 'finely shredded' },
                { amount: 200, unit: 'g', name: 'bean sprouts (giá)' },
                { amount: 150, unit: 'g', name: 'fresh shiitake mushrooms', note: 'halved' },
                { amount: 100, unit: 'g', name: 'tofu (đậu hũ)', note: 'cut into cubes — absorbs the goat broth magnificently' },
                { amount: 400, unit: 'g', name: 'fresh rice vermicelli (bún tươi)', note: 'served alongside to add to the pot' },
            ],
        },
        {
            title: 'Dipping sauce',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fermented shrimp paste (mắm tôm)', note: 'thinned with lime juice — as for dê thui' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 1, name: 'garlic clove', note: 'minced' },
            ],
        },
        {
            title: 'Complete herb plate',
            items: [
                { amount: 1, name: 'bunch Vietnamese balm (rau kinh giới)', note: 'essential for goat' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the goat bone broth — minimum 1.5 hours',
            description: 'Blanch the goat bones and shoulder meat in boiling water for 10 minutes. Drain and rinse thoroughly. Return to a clean pot with cold water, charred shallots, and charred ginger. Bring to a boil, reduce to the lowest simmer. Skim continuously for 20 minutes. Add the lemongrass bundle, galangal slices, and turmeric. Simmer uncovered for 1.5 hours. The broth should be clear amber with a visible orange tint from the turmeric. After 1 hour, remove the shoulder meat and set aside to cool for slicing.',
            tip: 'The goat bone broth for lẩu dê requires the full 1.5 hours to develop enough depth to carry the meal — thin broth produces a lẩu where each ingredient tastes of itself with a faint goat background. A properly simmered broth produces a lẩu where every ingredient is transformed by passing through it.',
        },
        {
            title: 'Slice the shoulder meat and the raw goat',
            description: 'When the braised shoulder meat has cooled enough to handle, slice thinly against the grain — this is the "already cooked" goat that goes into the pot directly. Freeze the raw goat leg or loin for 20 minutes, then slice paper-thin (2mm maximum) against the grain. Arrange raw slices on plates for the table — they cook in 10-30 seconds depending on thickness when added to the bubbling broth.',
            tip: 'Having two types of goat at a lẩu dê table — the pre-cooked braised slices and the raw thin slices — gives diners both the depth of slow-braised goat and the freshness of just-cooked raw slices. This is the full goat lẩu experience.',
        },
        {
            title: 'Finish the broth before serving',
            description: 'Strain the broth into a clean pot, discarding the bones. Add annatto oil for the deep orange color. Add young coconut water. Season with fish sauce and sugar. Bring to a boil and taste — the broth should taste of goat, lemongrass, and galangal with a clean sweetness from the coconut water. The pineapple rings will be added when the pot comes to the table and continue flavoring the broth throughout the meal.',
            tip: 'The coconut water added at this stage — not during the long simmering — preserves its delicate sweetness. Coconut water simmered for 1.5 hours loses its character and turns flat. Added in the last 20 minutes it brightens the broth without cooking away.',
        },
        {
            title: 'Make the mắm tôm dipping sauce',
            description: 'Combine mắm tôm with lime juice gradually — the paste lightens and froths slightly. Add sugar, minced chili, and garlic. Thin with a small amount of warm water if too thick. The sauce for lẩu dê should be slightly thinner than for dê thui — it needs to cling to the briefly cooked thin meat slices without overwhelming them. Divide into individual small bowls — one per diner.',
            tip: 'Each diner having their own dipping bowl rather than sharing a communal bowl is important for lẩu dê — the hot broth dripping from each piece of just-cooked goat dilutes the dipping sauce quickly, and individual bowls allow each person to refresh or adjust their sauce throughout the meal.',
        },
        {
            title: 'Bring to the table and cook communally',
            description: 'Transfer the hot broth to a clay pot or fondue pot with a tabletop burner. Add the pineapple rings directly to the bubbling broth. Arrange all plates of raw goat, vegetables, tofu, noodles, and the herb plate around the central pot. The eating begins: each diner takes a slice of raw goat, swishes it briefly through the bubbling broth (10 seconds for paper-thin, 30 seconds for slightly thicker), removes with chopsticks, and dips in the mắm tôm sauce. Vegetables and noodles go into the pot and cook for 1-2 minutes.',
            tip: 'The pineapple rings in the bubbling broth throughout the meal serve two functions: their bromelain enzyme continues to tenderize each piece of raw goat as it passes through, and their acidity balances the deepening richness of the broth as more goat fat renders into it over the course of the meal.',
        },
        {
            title: 'The last bowl — plain rice with broth',
            description: 'As the lẩu winds down and most of the meat and vegetables have been eaten, ladle the remaining broth — now deeply flavored from everything that has cooked in it — into bowls over plain steamed rice. This final bowl is the most complex thing at the table: the goat bone depth, the lemongrass and galangal fragrance, the coconut water sweetness, the pineapple acidity, and the flavor of every piece of goat and vegetable that passed through it. It should be eaten slowly, appreciatively, as the meal\'s conclusion.',
            tip: 'Never discard the broth at the end of a lẩu dê. The final broth over rice is the tradition that closes the meal properly. In Vietnamese households, the person who suggests ending without drinking the remaining broth over rice is gently corrected. The broth is the last course.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}