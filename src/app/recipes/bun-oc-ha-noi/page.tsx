'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-oc-ha-noi',
    title: 'Bún Ốc Hà Nội (Hanoi Snail Noodle Soup)',
    subtitle: 'A clear, bright-sour tomato and pork bone broth with freshwater field snails, tofu, and pork ribs — the Hanoi noodle soup eaten at small pavement restaurants in the Old Quarter that opens at 6am and closes when the snails run out. The bowl that is simultaneously the simplest and most specific in northern Vietnamese cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/bun-oc-ha-noi.jpg',
    intro: `Bún ốc Hà Nội is the snail noodle soup of Hanoi — a preparation that has been eaten in the Old Quarter and around Hồ Tây for generations and that is as specifically Hanoian as phở but far less internationally known. The bowl consists of rice vermicelli in a broth that is both cleaner and more complex than it appears: a pork bone base for body and sweetness, tomatoes cooked into the broth for acidity and color, and the specific sour note that comes from giấm bỗng (northern Vietnamese vinegary lees, made from distilling glutinous rice wine) or from fresh tomatoes allowed to acidify slowly in the hot broth. The snails — ốc bươu (golden apple snails) or ốc đồng (smaller field snails) depending on the vendor and the season — are cooked separately and added to the bowl at the moment of service, so that the broth stays clear and the snails do not overcook in the broth while sitting. The fried tofu cubes (đậu phụ rán) absorb the sour tomato broth and become something between firm tofu and a sponge — the most satisfying element of the bowl for people who love tofu. The pork ribs braised in the broth provide the protein depth. The specific eating ritual of bún ốc Hà Nội includes using mắm tôm — northern fermented shrimp paste — stirred into the bowl to taste, which transforms the clear, mild-sour broth into something dark, pungent, and complex. This stirring-in of mắm tôm at the table is the diner's own contribution to the bowl and produces a result that is specific to their preference.`,
    ingredientSections: [
        {
            title: 'Pork bone broth',
            items: [
                { amount: 500, unit: 'g', name: 'pork neck bones', note: 'blanched and rinsed' },
                { amount: 300, unit: 'g', name: 'pork spare ribs (sườn heo)', note: 'cut into 5cm sections — braised in the broth and served in the bowl' },
                { amount: 1.5, unit: 'L', name: 'water' },
                { amount: 3, name: 'shallots', note: 'halved, charred over flame' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Tomato-sour broth',
            items: [
                { amount: 5, name: 'medium tomatoes', note: 'cut into wedges — half cooked into the broth early, half added fresh near the end' },
                { amount: 3, unit: 'tbsp', name: 'tomato paste', note: 'deepens the tomato character and color' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for frying the shallots and tomatoes' },
                { amount: 3, name: 'shallots', note: 'thinly sliced — fried before the tomato' },
                { amount: 2, unit: 'tbsp', name: 'rice vinegar or giấm bỗng', note: 'giấm bỗng (rice wine vinegar with lees) is the traditional northern souring agent — adds a specific fermented depth regular vinegar lacks' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Snails',
            items: [
                { amount: 800, unit: 'g', name: 'fresh snails (ốc bươu or ốc đồng)', note: 'purged 2 hours in salted water, scrubbed. If using ốc bươu: break the shell tip before cooking. If using ốc đồng (smaller field snails): leave whole.' },
                { amount: 2, name: 'lemongrass stalks', note: 'bruised — for boiling the snails separately' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: '2 slices — for boiling the snails' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for the snail cooking water' },
            ],
        },
        {
            title: 'Fried tofu',
            items: [
                { amount: 300, unit: 'g', name: 'firm tofu (đậu phụ)', note: 'cut into 3cm cubes, deep-fried until golden on all sides — the tofu must be fried until the exterior is firm and golden so it can absorb broth without falling apart' },
                { amount: 300, unit: 'ml', name: 'neutral oil', note: 'for frying the tofu' },
            ],
        },
        {
            title: 'Noodles',
            items: [
                { amount: 400, unit: 'g', name: 'fresh bún (rice vermicelli)', note: 'medium thickness' },
            ],
        },
        {
            title: 'Table accompaniments — all essential',
            items: [
                { amount: 4, unit: 'tbsp', name: 'mắm tôm (fermented shrimp paste)', note: 'the most important table element of bún ốc Hà Nội — thinned with lime juice and sugar, stirred into the bowl to taste' },
                { amount: 3, name: 'limes', note: 'for thinning the mắm tôm and for the bowl' },
                { amount: 1, unit: 'tsp', name: 'sugar', note: 'for thinning the mắm tôm' },
                { amount: 150, unit: 'g', name: 'bean sprouts' },
                { amount: 1, name: 'bunch perilla (tía tô)', note: 'the northern herb specific to bún ốc' },
                { amount: 1, name: 'bunch Vietnamese balm (rau kinh giới)' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 8, name: 'toothpicks', note: 'for the snails' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the pork bone broth — 1 hour',
            description: 'Blanch bones and ribs separately in boiling water 10 minutes, drain and rinse. Return bones to a clean pot with cold water, charred shallots, salt, and sugar. Bring to a boil, reduce to lowest simmer. Skim 20 minutes. Add the ribs at 20 minutes — they need 40-45 minutes to become tender. Total bone-simmering time: 1 hour. Remove the ribs when tender and set aside. Strain the broth.',
            tip: 'Adding the ribs at 20 minutes rather than from the start gives the bones time to begin producing their gelatin before the rib meat competes for the liquid. The ribs are removed and served as a topping — they should be tender but not falling apart.',
        },
        {
            title: 'Build the tomato-sour base',
            description: 'In a separate pan, heat oil over medium heat. Fry sliced shallots until golden — 3 minutes. Add tomato paste and stir for 1 minute. Add half the tomato wedges and cook for 8-10 minutes until the tomatoes completely break down and the oil turns deep orange-red. Add this tomato base to the strained pork broth. Add giấm bỗng or rice vinegar, fish sauce, and sugar. Bring to a boil. Taste: the broth should be clearly sour from the tomato and vinegar, savory, and slightly sweet from the pork bones.',
            tip: 'The two-stage tomato addition — half cooked into the base early, half added fresh at the end — produces a bún ốc broth with both body from the dissolved tomato and fresh tomato texture in the bowl. This two-stage technique is specific to Hanoi bún ốc and distinguishes it from canh chua where the tomato is primarily for acidity.',
        },
        {
            title: 'Cook the snails separately',
            description: 'In a separate pot, bring water to a boil with lemongrass, ginger, and fish sauce. Add the purged snails and cook: ốc bươu (large) — 8-10 minutes; ốc đồng (small field snails) — 5-6 minutes. The snails are done when the flesh can be extracted with a toothpick with light resistance. Remove from the cooking water — do not add the snail cooking water to the broth, which would make it murky.',
            tip: 'Cooking the snails separately from the broth is the technique that keeps the bún ốc Hà Nội broth clear and clean-tasting. Snails cooked directly in the broth release their purging residue and shell sediment into the liquid, producing a murky, slightly bitter result. The clear broth is one of the visual signatures of good bún ốc Hà Nội.',
        },
        {
            title: 'Fry the tofu until golden and firm',
            description: 'Heat oil to 180°C. Fry tofu cubes until deeply golden on all sides — 4-5 minutes total, turning. The exterior should be genuinely firm and golden rather than pale and soft. Properly fried tofu for bún ốc absorbs the sour broth during serving and becomes something between tofu and a flavored sponge — the inside soft and broth-infused while the exterior holds its shape.',
            tip: 'The tofu must be fried until genuinely golden and firm — not just lightly colored. Under-fried tofu dissolves in the sour broth within minutes of serving. Properly fried tofu holds its shape for the duration of the meal while absorbing the broth character completely.',
        },
        {
            title: 'Prepare the mắm tôm and finish the broth',
            description: 'Thin the mắm tôm: combine 1 tablespoon of shrimp paste per diner with fresh lime juice and a pinch of sugar in individual small bowls. Stir until slightly frothy — the lime transforms the paste character. Set aside at the table. Add the remaining fresh tomato wedges to the hot broth in the final 5 minutes — they stay slightly firm. Taste the broth one final time.',
            tip: 'The mắm tôm must be prepared individually per diner rather than mixed into the communal broth — each person controls how much they add. Some Hanoians add a full tablespoon; some add only a small amount. The broth without mắm tôm is a good northern tomato-pork soup. The broth with mắm tôm is specifically bún ốc Hà Nội.',
        },
        {
            title: 'Assemble the bowl',
            description: 'Blanch bún noodles 30 seconds, drain, and place in deep bowls. Add braised pork ribs, fried tofu cubes, and the cooked snails. Ladle the hot tomato broth generously — it should be bright orange-red and clearly sour in aroma. Add the fresh tomato wedges. Scatter spring onion and cilantro. Serve the mắm tôm in individual bowls alongside the herb plate of perilla, Vietnamese balm, rau răm, and bean sprouts. Each diner stirs their mắm tôm into the bowl to their preference before eating.',
            tip: 'The visual of correctly assembled bún ốc Hà Nội: bright orange-red broth, white bún noodles, golden fried tofu, dark snail shells, fresh tomato wedges, and the green herbs on the side. The bowl should look fresh and bright — not murky or heavy. This brightness is both visual and flavor: a correctly made bún ốc is lighter and more refreshing than its complexity suggests.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
