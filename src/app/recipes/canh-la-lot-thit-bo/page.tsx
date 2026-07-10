'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-la-lot-thit-bo',
    title: `Wild Betel Leaf and Beef Soup`,
    subtitle: `Canh Lá Lốt Thịt Bò — Central Vietnamese beef soup with wild betel leaves — intensely aromatic, warming, and unlike any other green soup in the Vietnamese canon.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `Canh lá lốt thịt bò is the soup that demonstrates lá lốt's (Piper sarmentosum — the wild betel leaf) range as a culinary ingredient — most famous in Vietnam for bò lá lốt (grilled beef wrapped in lá lốt leaves), but in this central Vietnamese soup preparation, the leaves are used directly in the broth, their distinctive aromatic compounds infusing the liquid and the thin-sliced beef with the warm, slightly medicinal, clove-pepper fragrance that is lá lốt's signature. The result is unlike any other Vietnamese soup: intensely aromatic in a warm, spiced direction that is simultaneously comforting and stimulating.\n\nLá lốt (Piper sarmentosum) belongs to the pepper family — a trailing vine related to Piper nigrum (black pepper) and Piper betle (betel leaf used in areca nut preparations). Its essential oil profile is dominated by benzyl benzoate, methyl benzoate, and smaller amounts of piperine (the compound that gives black pepper its heat) — producing a flavour that sits between clove, pepper, and camphor, with a distinctive warmth that is felt not just as heat but as a systemic warming sensation in the chest and extremities. In central Vietnamese traditional medicine, lá lốt is classified as a warming herb prescribed for cold-related ailments — joint pain, cold limbs, poor circulation — and the soup is considered therapeutic in the cooler central highland climate.\n\nThe beef used is sliced thin — either bắp bò (beef shank) or thăn bò (beef sirloin) — and added raw to the simmering broth in the final 2-3 minutes. This brief cooking preserves the beef's tenderness: fully simmered beef in a soup of this type becomes tough and dry; 2-3 minutes in simmering broth produces beef that is just cooked through, still slightly yielding, and has absorbed the lá lốt broth's aromatic compounds on its surface.`,
    ingredientSections: [
        {
            title: `Main ingredients`,
            items: [
                { amount: 250, unit: 'g', name: `beef sirloin or shank (thit bo)`, note: `sliced very thin against the grain — 2-3mm; partially freeze 20 min for easier slicing` },
                { amount: 150, unit: 'g', name: `fresh la lot leaves (Piper sarmentosum)`, note: `whole young leaves — stems removed; available at Vietnamese grocers in Germany; substitute: young spinach + 1 tbsp minced fresh betel leaf or 0.5 tsp ground clove for aromatic approximation` },
            ],
        },
        {
            title: `Broth`,
            items: [
                { amount: 1, unit: 'L', name: `light beef bone broth or water` },
                { amount: 3, name: `shallots, halved and charred` },
                { amount: 3, name: `slices fresh ginger, charred` },
                { amount: 2, name: `garlic cloves, smashed` },
                { amount: 1.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
            ],
        },
        {
            title: `Beef seasoning`,
            items: [
                { amount: 1, unit: 'tbsp', name: `fish sauce` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
                { amount: 2, name: `garlic cloves, minced` },
            ],
        },
        {
            title: `Garnish`,
            items: [
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 2, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 1, unit: 'tsp', name: `black pepper, coarsely ground` },
                { amount: 2, name: `limes, wedged` },
                { amount: 3, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
            ],
        },
    ],
    steps: [
        {
            title: `Understand lá lốt's aromatic chemistry`,
            description: `Lá lốt (Piper sarmentosum) contains a specific essential oil profile dominated by benzyl benzoate (40-50%), methyl benzoate (15-20%), and piperine (5-8%). Benzyl benzoate is simultaneously a fragrance compound found in expensive perfumes and an approved pharmaceutical ingredient used topically for skin conditions — its presence in lá lốt at cooking concentrations explains the leaf's distinctive warming-medicinal quality. When lá lốt is added to simmering broth, the benzyl benzoate volatilises partially into the steam (producing the characteristic fragrance) and dissolves partially into the broth (producing the flavour). The heat-stable piperine contributes a mild, lingering warmth distinct from chili capsaicin.`,
            tip: `In Germany, fresh lá lốt is occasionally available at Vietnamese grocers (Asiamarkt) in larger cities — Frankfurt, Berlin, Hamburg, Köln. Frozen lá lốt is more consistently available and works well in this soup preparation where the leaves are simmered in broth rather than used as a fresh herb. If unavailable: young spinach provides the structural role (leafy green in the broth) but not the aromatic role. The closest German aromatic approximation for the benzyl benzoate note is a small amount of fresh basil — basil contains methyl chavicol and eugenol with a similar warm-spicy character. Use 1 large bunch young spinach + 4-5 fresh basil leaves added at the last moment.`,
        },
        {
            title: `Season the beef`,
            description: `Slice beef very thin against the grain — 2-3mm slices. Partially freezing the beef for 20 minutes makes clean, even thin-slicing much easier. Combine with fish sauce, black pepper, sugar, sesame oil, and minced garlic. Toss to coat evenly. Rest 10 minutes at room temperature. The brief marination seasons the beef surface but does not cure or alter the texture — this is a flavour step, not a tenderising step. The thin slicing (not the marinade) is what produces the tender texture in the finished soup.`,
            tip: `Slicing beef against the grain — perpendicular to the direction of the muscle fibres — shortens the fibres and produces a more tender eating experience than slicing with the grain. In canh lá lốt thịt bò, where the beef cooks for only 2-3 minutes in simmering broth, the against-grain slicing is doubly important: the brief cooking time does not break down connective tissue as a long braise would, so the mechanical shortening of fibres through cutting is the primary tenderising mechanism.`,
        },
        {
            title: `Build and infuse the broth`,
            description: `Bring beef broth or water to a boil. Add charred shallots, charred ginger, and smashed garlic. Simmer 10 minutes to infuse. Season with fish sauce, salt, pepper, and sugar. Add half the lá lốt leaves (75g) to the simmering broth. Simmer 5 minutes — these first leaves fully release their benzyl benzoate into the broth, infusing the liquid thoroughly with the lá lốt character. Remove these spent leaves — they have given their flavour and their texture is no longer appealing. The broth should now smell intensely of lá lốt's warm, clove-pepper fragrance.`,
            tip: `The two-batch lá lốt addition — half simmered into the broth and discarded, half added fresh at the end — is the technique that produces both flavour depth and textural freshness in the finished soup. The first batch extracts maximum benzyl benzoate into the broth liquid; the second batch retains its visual freshness and provides texture contrast. A single late addition produces under-infused broth; a single long-simmered addition produces flavour-extracted but visually unappealing, over-softened leaves.`,
        },
        {
            title: `Add fresh lá lốt and beef simultaneously`,
            description: `Bring the infused broth back to a vigorous simmer. Add the remaining fresh lá lốt leaves (75g) and the seasoned beef slices simultaneously. Stir once gently to separate the beef slices. Cook 2-3 minutes — the beef will change from red to brown throughout and the fresh lá lốt will wilt to a soft, deep green. Remove from heat immediately. The beef must be removed from heat the moment it is just cooked through — an additional 2 minutes produces noticeably tougher beef. The just-cooked beef is slightly yielding when pressed; over-cooked beef feels firm and springs back.`,
        },
        {
            title: `Serve immediately`,
            description: `Ladle into deep bowls — each bowl should have generous beef slices, fresh wilted lá lốt leaves, and the deep amber-green broth. Scatter spring onion, fried shallots, and coarse black pepper generously — the black pepper amplifies the piperine already present from the lá lốt. Serve with rice, lime wedges, and sliced chili. The broth should be fragrant enough to smell clearly across the table when served — the benzyl benzoate-rich steam rising from the hot bowl is as much a part of the eating experience as the soup itself. In central Vietnamese households, canh lá lốt thịt bò is considered a warming dish for cool evenings and rainy days — its systemic warming effect makes it the central Vietnamese equivalent of the northern Vietnamese pork bone congee for cold weather comfort.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}