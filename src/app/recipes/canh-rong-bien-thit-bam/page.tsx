'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-rong-bien-thit-bam',
    title: 'Canh Rong Bi?n Th?t Bam (Seaweed Soup with Minced Pork)',
    subtitle: 'Dried wakame seaweed rehydrated and simmered in a clear pork broth with minced pork meatballs, tofu, spring onion, and ginger — the northern Vietnamese seaweed soup that is simultaneously one of the simplest and one of the most nourishing bowls in the weekday dinner repertoire.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/canh-rong-bien-thit-bam.jpg',
    intro: `Canh rong bi?n th?t bam is the seaweed and minced pork soup of northern Vietnamese home cooking — a preparation that has been part of the Hà N?i weekday dinner table for generations and that achieves something rare in Vietnamese cooking: a dish that is simultaneously extremely simple, extremely nutritious, and extremely specific in its flavor character. The dish belongs to the category of Vietnamese canh (clear soups) that appear alongside the main kho or stir-fry dishes at a Vietnamese family meal — lighter in texture and lower in seasoning than the main dishes, providing the liquid element and the contrast of clarity against the richness of the other preparations. What makes canh rong bi?n th?t bam specifically northern is its restraint: where Mekong canh chua achieves complexity through multiple souring agents, herbs, and vegetables, canh rong bi?n th?t bam achieves its character through simplicity — the specific mineral-oceanic flavor of rehydrated wakame seaweed against the clean savory depth of a simple pork broth, seasoned with nothing more than fish sauce, white pepper, and a small amount of ginger. Rong bi?n (seaweed, specifically dried wakame, Undaria pinnatifida) arrived in Vietnamese cooking through the Chinese-Vietnamese culinary exchange and has been used in northern Vietnamese soups and tonics for over a century. Its specific character — simultaneously mineral, slightly oceanic, and mildly sweet in its own specific way — makes it the ideal ingredient for a clear soup that needs depth without heaviness. The minced pork in canh rong bi?n is formed into small, loose meatballs rather than crumbled — the specific technique that keeps the pork in distinct pieces in the clear broth rather than clouding it. The tofu provides the protein complement that makes the soup substantial enough for a full meal component, and its neutral, silky character provides the textural contrast to the slightly chewy, marine-flavored seaweed.`,
    ingredientSections: [
        {
            title: 'Seaweed',
            items: [
                { amount: 30, unit: 'g', name: 'dried wakame seaweed (rong bi?n khô)', note: 'soaked in cold water for 10 minutes until fully rehydrated — expands to approximately 200g. Drain and squeeze gently. Cut any very large pieces into smaller sections.' },
            ],
        },
        {
            title: 'Minced pork meatballs',
            items: [
                { amount: 200, unit: 'g', name: 'minced pork (th?t heo bam)', note: '20% fat — the fat keeps the meatballs tender in the clear broth' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'Soup base',
            items: [
                { amount: 1.2, unit: 'L', name: 'water or light chicken stock', note: 'chicken stock produces a richer base; water produces a cleaner, more seaweed-forward result' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: '2 slices, smashed — adds warmth that complements the seaweed character' },
                { amount: 200, unit: 'g', name: 'soft or silken tofu (d?u ph?)', note: 'cut into 2cm cubes — added near the end' },
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 4, name: 'spring onions', note: 'thinly sliced — essential finishing element' },
                { amount: 1, name: 'small bunch cilantro' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'freshly ground per bowl' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'drizzled over each bowl' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Rehydrate the seaweed',
            description: 'Place the dried wakame in a large bowl of cold water. Leave for 10 minutes — the seaweed expands significantly, roughly 6-7 times its dry volume. Drain and squeeze gently to remove excess water. Taste a small piece of the rehydrated seaweed — it should taste cleanly of the ocean, slightly mineral, with a mild sweetness and a pleasant marine aroma. Any strong or unpleasant smell indicates old or poorly stored seaweed. Cut any very large leaf sections into pieces roughly 5cm across.',
            tip: 'Cold water rather than warm water for rehydrating wakame preserves its texture better — warm water over-softens the seaweed and produces a mushy result in the finished soup. Cold water rehydration for 10 minutes produces wakame that retains its specific slightly chewy, pleasant texture through the brief soup cooking time.',
        },
        {
            title: 'Make the minced pork meatballs',
            description: 'Combine minced pork with fish sauce, white pepper, sugar, minced shallots, and sesame oil. Mix thoroughly until the mixture becomes slightly sticky and cohesive. Using wet hands, form into small balls approximately 2cm diameter — about 20 meatballs from 200g of pork. The small size ensures they cook through in 3-4 minutes in the simmering broth without overcoooking. Place on a plate and refrigerate briefly while the broth is built.',
            tip: 'Wet hands for forming the pork meatballs prevents the mixture from sticking and allows smooth, uniform balls. The 2cm diameter is specifically calibrated for the 3-4 minute cooking time in the broth — larger meatballs require longer cooking and can become dense; smaller meatballs overcook quickly and become dry.',
        },
        {
            title: 'Build the clear broth',
            description: 'Bring water or light stock and smashed ginger to a gentle boil. Add fish sauce, salt, sugar, and white pepper. Taste the broth — it should be clean, clear, savory, and mildly seasoned. The seaweed will add its own mineral character during cooking, so the broth should be slightly under-seasoned at this stage. Add the minced pork meatballs one by one — they will sink to the bottom. Simmer gently for 3-4 minutes until the meatballs float to the surface and are cooked through.',
            tip: 'Adding the meatballs to gently simmering rather than vigorously boiling broth prevents them from breaking apart. A vigorous boil agitates the meatballs during their first minutes of cooking before the exterior has set, causing them to disintegrate into the broth and produce a cloudy soup. Gentle simmering produces intact meatballs in a clear broth.',
        },
        {
            title: 'Add seaweed and tofu — 3 minutes',
            description: 'Add the rehydrated seaweed to the simmering broth with the cooked meatballs. Add the tofu cubes. Simmer for 3 minutes — the seaweed needs only brief cooking to warm through and release its specific marine character into the broth. Longer cooking softens the seaweed beyond the pleasant chewy texture that makes it satisfying. Taste the broth — at this point the seaweed has contributed its mineral-oceanic character and the broth should taste complete.',
            tip: 'The 3-minute cooking time for the seaweed in the finished broth is the maximum for retaining the pleasant slightly chewy texture. Beyond 5 minutes, the wakame becomes overly soft and loses the textural character that makes it the defining element of the soup. The seaweed is not being cooked — it is being warmed and its flavor allowed to marry with the broth.',
        },
        {
            title: 'Finish and serve',
            description: 'Remove the ginger slices. Taste and adjust seasoning — the seaweed may have provided enough mineral saltiness that the soup needs no additional fish sauce. Ladle into bowls. Drizzle sesame oil over each bowl. Scatter sliced spring onion and cilantro generously — these are the aromatic finishing elements that lift the slightly marine character of the seaweed with their fresh green notes. Grind white pepper per bowl. Serve alongside the main dishes of the meal with steamed rice.',
            tip: 'Canh rong bi?n th?t bam is a supporting soup in a Vietnamese family meal rather than a standalone dish — it appears alongside a kho, a stir-fry, and perhaps a salad, providing the clear liquid element that balances the richer preparations. Eating it as a standalone soup is entirely valid, but understanding its role as part of a meal reveals why its seasoning is relatively restrained — it is designed to cleanse and refresh between bites of the stronger-flavored main dishes.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
