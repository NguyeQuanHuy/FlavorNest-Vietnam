'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'mien-xao-cua',
    title: 'Miến Xào Cua (Glass Noodles Stir-Fried with Crab)',
    subtitle: 'Glass noodles stir-fried in a hot wok with fresh crab meat, wood ear mushrooms, eggs, and a light oyster-fish sauce seasoning until the noodles are glossy and slightly golden at the edges — the northern Vietnamese noodle dish that turns a small amount of crab into a complete and satisfying meal.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/mien-xao-cua.jpg',
    intro: `Miến xào cua is the glass noodle stir-fry of northern Vietnam — a dish that occupies an important place in the everyday cooking of Hanoi and the Red River Delta, where cua đồng (freshwater field crabs) have been a primary protein source for generations and glass noodles (miến, made from mung bean or canna starch) provide the vehicle that stretches a modest amount of crab meat into a full meal. The glass noodle is the ideal ingredient for this purpose: it absorbs the wok heat and the crab-seasoned oil during stir-frying to become slightly translucent and golden at the edges, with a texture that is simultaneously silky and slightly chewy, carrying the flavor of the seasoning throughout rather than merely as a coating. The crab in miến xào cua is typically freshwater crab from the delta fields — picked and mixed with egg in the northern tradition, so that the crab meat is never in distinct pieces but distributed throughout the noodle in small fragments that flavor every strand. The wood ear mushrooms provide the contrasting dark texture that makes the dish visually interesting and texturally complete. Miến xào cua is a practical dish — faster and simpler than most Vietnamese noodle preparations, achievable on any weeknight with ingredients that keep well — and a genuinely delicious one, with the specific quality that glass noodles stir-fried in a properly hot wok possess: slightly caramelized, glossy, clinging to the wok seasoning in a way that rice or wheat noodles do not.`,
    ingredientSections: [
        {
            title: 'Glass noodles',
            items: [
                { amount: 200, unit: 'g', name: 'dried glass noodles (miến)', note: 'mung bean glass noodles preferred — thicker than cellophane noodles, better for wok stir-frying. Soak in cold water for 20 minutes until pliable, drain, and cut into 10cm lengths with scissors.' },
            ],
        },
        {
            title: 'Crab and egg',
            items: [
                { amount: 250, unit: 'g', name: 'fresh crab meat (thịt cua)', note: 'picked from freshwater field crabs or any fresh crab. Canned crab meat works but produces a noticeably milder result. If using whole cua đồng: pound and strain as for cháo cua đồng — the crab extract method produces richer flavor than picked meat alone.' },
                { amount: 3, name: 'eggs', note: 'beaten and mixed with the crab meat — this combination is specific to northern Vietnamese miến xào cua' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for pre-seasoning the crab-egg mixture' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Mushrooms and vegetables',
            items: [
                { amount: 30, unit: 'g', name: 'dried wood ear mushrooms (mộc nhĩ)', note: 'soaked 20 minutes in warm water, drained, tough stems removed, julienned into thin strips — the essential texture contrast' },
                { amount: 30, unit: 'g', name: 'dried shiitake mushrooms (nấm đông cô)', note: 'soaked 20 minutes, drained, stems removed, thinly sliced — adds depth' },
                { amount: 100, unit: 'g', name: 'bean sprouts (giá)', note: 'added near the end — keeps crunch' },
                { amount: 4, name: 'spring onions', note: 'cut into 3cm pieces' },
            ],
        },
        {
            title: 'Seasoning and wok',
            items: [
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'thinly sliced' },
                { amount: 2.5, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'added at the end — fragrance finish' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil' },
                { amount: 3, unit: 'tbsp', name: 'water or light stock', note: 'added if noodles stick or dry out' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 1, name: 'fresh red chili, sliced' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 3, unit: 'tbsp', name: 'light soy sauce or Maggi seasoning', note: 'for drizzling at the table — northern Vietnamese table condiment for noodle dishes' },
            ],
        },
    ],
    steps: [
        {
            title: 'Soak and prepare the noodles',
            description: 'Place glass noodles in cold water for 20 minutes — not hot water, which makes them too soft before they reach the wok. The noodles should be pliable and slightly translucent when ready — not fully hydrated, because they will absorb more moisture in the wok. Drain and cut into 10cm lengths with scissors. Long noodles tangle in the wok and cannot be tossed effectively.',
            tip: 'Cold water soaking rather than hot water is the glass noodle technique for stir-frying. Hot water produces fully hydrated noodles that cannot absorb the wok seasoning during cooking — they are already full. Cold-soaked noodles have capacity to absorb and respond to the wok heat and the seasoning oil.',
        },
        {
            title: 'Combine crab and egg',
            description: 'Mix the picked crab meat with beaten eggs, fish sauce, and white pepper until fully combined. The crab-egg mixture should be homogenous — the egg distributes the crab flavor throughout rather than leaving it in distinct pieces. This northern Vietnamese technique ensures every strand of noodle is flavored with crab rather than only the strands that happen to land near a crab piece.',
            tip: 'The crab-egg combination is the specific northern Vietnamese approach to miến xào cua. Southern Vietnamese versions often use distinct crab pieces. The northern approach distributes the crab more completely through the dish and makes a smaller quantity of crab go further.',
        },
        {
            title: 'Stir-fry the crab-egg mixture first',
            description: 'Heat 2 tablespoons of oil in the wok over high heat until smoking. Add the crab-egg mixture. Leave undisturbed for 30 seconds until the bottom sets. Break up with a spatula into rough pieces — not scrambled fine, but in 2-3cm chunks that distribute through the noodles. Remove and set aside when just cooked through. The crab will be returned to the wok later.',
            tip: 'Cooking the crab-egg mixture separately and returning it later prevents it from overcooking during the noodle stir-fry. Crab-egg cooked for 5+ minutes in a hot wok becomes rubbery. Cooked briefly, then returned, it stays tender.',
        },
        {
            title: 'Stir-fry aromatics and mushrooms',
            description: 'Add remaining oil to the wok. Fry garlic and shallots over high heat for 30 seconds until golden. Add julienned wood ear mushrooms and sliced shiitake — stir-fry 2 minutes until the mushrooms wilt and absorb the garlic oil. The mushrooms should be cooked through but still have their characteristic slight crunch.',
            tip: 'Wood ear mushrooms stir-fried in garlic oil before the noodles go in develop a slightly caramelized exterior that improves their flavor considerably compared to adding them raw alongside the noodles.',
        },
        {
            title: 'Add noodles and season',
            description: 'Add the drained glass noodles to the wok. Add oyster sauce, fish sauce, and sugar. Toss everything together over maximum heat for 2-3 minutes — the noodles will absorb the sauce and begin to caramelize slightly at the points in direct contact with the wok surface. If the noodles stick or dry out, add water or stock around the edges of the wok. The finished noodles should be glossy, slightly golden in places, and fully seasoned throughout.',
            tip: 'Maximum heat during the noodle stir-fry is what produces the slightly caramelized, glossy texture that separates good miến xào from mediocre. At lower temperatures the noodles steam rather than stir-fry and the texture is soft and uniformly pale rather than slightly varied with golden patches.',
        },
        {
            title: 'Return crab, add sprouts, finish and serve',
            description: 'Return the crab-egg pieces to the wok. Add bean sprouts and spring onion pieces. Toss briefly — 30 seconds only, enough to warm the crab through and barely wilt the sprouts. Add sesame oil and toss once more. Transfer to a serving plate. Top with crispy fried shallots, cilantro, and sliced chili. Serve with lime wedges and soy sauce or Maggi for drizzling. The crispy fried shallots scattered over the finished dish are the northern Vietnamese finishing element that completes miến xào cua.',
            tip: 'The bean sprouts go in last and are barely cooked — 30 seconds of wok heat leaves them warm but still crunchy. This crunch is the final textural element that contrasts with the silky noodles and soft crab. Fully cooked sprouts produce a flat, uniform texture throughout.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
