'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chao-hau-gung',
    title: 'Cháo Hàu Gừng (Oyster and Ginger Congee)',
    subtitle: 'A silky rice porridge cooked in oyster liquor stock with abundant fresh ginger — topped with fresh oysters poached for 90 seconds in the finished porridge, crispy fried shallots, raw ginger julienne, and spring onion. The coastal morning bowl eaten at oyster farms along the Phú Yên and Khánh Hòa coast where the oysters arrive at the table having left the water an hour earlier.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/chao-hau-gung.jpg',
    intro: `Cháo hàu gừng is the oyster and ginger congee of the central Vietnamese coast — a preparation that belongs to the same category of restorative morning food as cháo cá trê gừng and cháo ếch Singapore, but that achieves something specific and irreplaceable through the use of oyster rather than freshwater protein: a broth base that is simultaneously briny and sweet in a way that only oysters produce, a porridge that carries the specific character of the sea through every spoonful, and a finishing element — the fresh oysters poached for exactly 90 seconds in the completed porridge — that provides the most delicate and the most directly marine eating experience of any congee in the collection. The oyster liquor stock that forms the base of cháo hàu gừng is the preparation's most important and most often skipped element: the liquid retained when shucking fresh oysters, combined with a small amount of water and ginger, produces a stock that is more intensely flavored than any oyster powder or bottled oyster sauce at a fraction of the cost, because the fresh oyster liquor carries the live, vibrant marine character that preserved oyster products cannot replicate. Cooked into rice porridge, this stock produces a bowl that smells of the sea before the oysters themselves are added — the rice absorbing the brine and sweetness of the fresh liquor in a way that makes each grain specifically, unmistakably coastal. The ginger in cháo hàu gừng appears in the same three-form approach as in cháo cá trê gừng: cooked into the stock, minced into the porridge, and raw-julienned over each bowl. The ginger's specific role with oysters is slightly different from its role with catfish — where it reduces the freshwater gamey character, with oysters it provides the warm, clean aromatic counterpoint that prevents the marine brininess from feeling heavy or one-dimensional.`,
    ingredientSections: [
        {
            title: 'Oysters and stock',
            items: [
                { amount: 500, unit: 'g', name: 'fresh oysters, shucked (hàu tươi)', note: 'retain all oyster liquor separately. Divide: 200g for the stock base, 300g for the fresh topping poached at service.' },
                { amount: 200, unit: 'ml', name: 'retained oyster liquor', note: 'from shucking — the most important ingredient in the stock. Do not discard a drop.' },
                { amount: 600, unit: 'ml', name: 'water' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed — for the stock' },
                { amount: 3, name: 'shallots', note: 'charred — for the stock' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Rice porridge',
            items: [
                { amount: 150, unit: 'g', name: 'jasmine rice', note: 'rinsed once' },
                { amount: 700, unit: 'ml', name: 'strained oyster stock', note: 'from above' },
                { amount: 200, unit: 'ml', name: 'water', note: 'additional if needed' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'finely minced — stirred into the porridge during cooking' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 3, name: 'shallots', note: 'sliced — fried before the rice' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'seasoning' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Fresh oyster topping — poached at service',
            items: [
                { amount: 300, unit: 'g', name: 'fresh oysters', note: 'reserved from above — added to the finished hot porridge for exactly 90 seconds at service' },
                { amount: 1, unit: 'tsp', name: 'Shaoxing wine', note: 'drizzled over the oysters before placing in the porridge' },
            ],
        },
        {
            title: 'Essential toppings',
            items: [
                { amount: 40, unit: 'g', name: 'fresh ginger', note: 'finely julienned — the third ginger form, raw' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 3, unit: 'tbsp', name: 'shallot-infused oil' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, unit: 'tsp', name: 'white pepper', note: 'freshly ground per bowl' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'drizzled over each bowl' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the oyster liquor stock',
            description: 'Simmer the 200g of oysters designated for the stock with the retained oyster liquor, water, smashed ginger, and charred shallots for 20 minutes over low heat — do not boil vigorously, which toughens the oysters and makes the stock slightly bitter. The stock oysters will be fully cooked and will have given all their flavor to the liquid. Discard the stock oysters — they have done their work. Strain the stock through a fine sieve. The resulting liquid should be pale, slightly cloudy, and smell intensely of fresh oyster.',
            tip: 'The oyster liquor — the natural liquid retained when shucking fresh oysters — is the element that cannot be replaced or approximated. It is the concentrated marine character of the live oyster in liquid form, and it produces a stock that no amount of dried oyster products can match. Handle each shucked oyster over a bowl specifically to catch every drop of this liquor.',
        },
        {
            title: 'Cook the ginger porridge in oyster stock',
            description: 'Heat oil in a medium pot. Fry sliced shallots until golden. Add minced ginger and stir 30 seconds. Add the rinsed rice and stir 2 minutes until coated. Pour in 700ml of the oyster stock. Bring to a boil, reduce to a medium simmer. Cook 25-30 minutes, stirring every 5 minutes. The porridge will gradually take on the pale, slightly grey-white color of the oyster stock rather than the pure white of water-cooked porridge — this color is correct and beautiful. Season with fish sauce and white pepper.',
            tip: 'The slightly grey-white color of oyster stock porridge — rather than the pure white of plain water porridge — is one of the visual markers of cháo hàu gừng and a sign of a correctly made stock. A porridge that looks pure white has been made with insufficient oyster liquor. The grey-white is the marine character of the stock made visible in the rice grains.',
        },
        {
            title: 'Poach the fresh oysters — 90 seconds exactly',
            description: 'When the bowls are ready and the toppings prepared, place the fresh oysters in the hot porridge pot. Drizzle the Shaoxing wine over them. Cover and leave for exactly 90 seconds — the porridge heat gently poaches the oysters until they are just set at the edges, still trembling at the center, and their specific fresh briny sweetness is at its peak before any overcooking begins to tighten them. Remove immediately by ladling into bowls.',
            tip: 'The 90-second poaching of fresh oysters in finished hot porridge is the most precise timing in the entire congee series — shorter even than the 3 minutes for oysters in the steamed preparation because the surrounding hot porridge provides heat from all directions simultaneously rather than from steam above. At 90 seconds the oysters are just set; at 3 minutes they would be overcooked and beginning to tighten.',
        },
        {
            title: 'Build the bowl',
            description: 'Ladle the porridge and the poached oysters into deep bowls — ensuring each bowl receives 3-4 oysters. Drizzle shallot-infused oil and sesame oil over the surface. Scatter the raw ginger julienne generously — it provides the sharp fresh ginger contrast to the warm ginger cooked through the porridge. Add crispy fried shallots, sliced spring onion, and cilantro. Grind white pepper. The finished bowl: pale grey-white porridge, the translucent barely-cooked oysters visible at the surface, the golden shallots and raw ginger over everything.',
            tip: 'The visual of cháo hàu gừng correctly made — the pale marine-grey porridge, the glistening barely-set oysters, the golden crispy shallots and white ginger julienne — is one of the most beautiful bowls in the collection. A bowl that looks right here has been made with sufficient oyster liquor and correctly timed oyster poaching.',
        },
        {
            title: 'Eat in sequence — at the oyster coast',
            description: 'The first spoonful should contain porridge, oyster, and raw ginger julienne together — this establishes the bowl\'s complete character. Eat steadily, adding lime and white pepper to each spoonful. The raw ginger should be eaten throughout rather than pushed to the side — it is the element that prevents the marine brininess from becoming heavy over the course of the bowl. At the oyster farms along the Phú Yên and Khánh Hòa coast where this bowl is eaten at breakfast, the oysters arrive from the water to the bowl in under an hour. At home, seek the freshest possible oysters and eat the bowl the same morning they are purchased.',
            tip: 'Cháo hàu gừng eaten at the coastal oyster restaurants of Cam Ranh or Sông Cầu — where the oyster raft is visible from the table and the oysters arrive from the water to the kitchen in minutes — is a fundamentally different experience from the same bowl made with day-old oysters from an inland market. The freshness window for oyster congee is narrower than for any other preparation in the collection. This is the bowl that most rewards sourcing effort.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
