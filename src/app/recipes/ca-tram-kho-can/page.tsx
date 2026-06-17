'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-tram-kho-can',
    title: 'Cá Trắm Kho Cần (Black Carp Braised with Celery)',
    subtitle: 'Black carp sections braised in dark caramel with galangal, ginger, and Vietnamese celery until the sauce reduces to a thick, peppery glaze — the northern Vietnamese kho that uses galangal more prominently than ginger and Vietnamese celery (cần tây bản địa) as the finishing aromatic that makes this preparation specifically northern and specifically unforgettable.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-tram-kho-can.jpg',
    intro: `Cá trắm kho cần is the black carp and celery braise of northern Vietnam — a kho dish that is specifically Hà Nội and the Red River Delta in the same way that cá trê kho tộ is specifically the Mekong Delta. Cá trắm đen (black carp, Mylopharyngodon piceus) is the large freshwater fish of the northern Vietnamese fish farming tradition — heavier and darker-fleshed than the grass carp (cá trắm cỏ) that is more common in the south, with a denser muscle structure and a more pronounced freshwater mineral character that holds up to the long kho braising and concentrating process better than lighter fish. The two defining elements that make cá trắm kho cần specifically northern are the galangal — used more prominently than ginger in the northern kho tradition, reflecting the availability and long culinary history of galangal in the Red River Delta region — and the Vietnamese celery (cần ta or cần tây bản địa), which is different from the large-stalked Western celery: it is smaller, more intensely flavored, slightly bitter at the stems, and with a leaf character that is closer to the Chinese celery (芹菜) that appears in Cantonese cooking. The Vietnamese celery added to the finished cá trắm kho cần in the final minutes provides an aromatic finishing note that is simultaneously herbal, slightly bitter, and specifically northern Vietnamese — the herb that most clearly marks this preparation as belonging to the cuisine above the Hải Vân Pass rather than below it.`,
    ingredientSections: [
        {
            title: 'Black carp',
            items: [
                { amount: 800, unit: 'g', name: 'black carp sections (cá trắm đen chặt khúc)', note: 'bone-in, 5-6cm sections. Substitute: grass carp, large common carp, or any firm-fleshed freshwater fish.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for pre-marinating' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Northern kho base — galangal-forward',
            items: [
                { amount: 2, unit: 'tbsp', name: 'sugar', note: 'for the dark caramel' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 50, unit: 'g', name: 'fresh galangal (riềng)', note: 'cut into thick matchsticks — more prominent than ginger, the defining northern proportion' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'cut into matchsticks — secondary aromatic' },
                { amount: 5, name: 'garlic cloves', note: 'smashed' },
                { amount: 4, name: 'shallots', note: 'halved' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'whole' },
            ],
        },
        {
            title: 'Braising liquid',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'dark soy sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'black pepper', note: 'generous — northern kho is pepper-forward' },
                { amount: 200, unit: 'ml', name: 'water' },
                { amount: 2, unit: 'tbsp', name: 'rice wine', note: 'adds northern aromatic depth' },
            ],
        },
        {
            title: 'Vietnamese celery — the northern finishing element',
            items: [
                { amount: 100, unit: 'g', name: 'Vietnamese celery (cần ta / cần tây bản địa)', note: 'cut into 4cm pieces — both stems and leaves. Added in the final 5 minutes. Substitute: Chinese celery or the inner stalks of Western celery with leaves.' },
                { amount: 3, name: 'spring onions', note: 'cut into 3cm pieces — added with the celery' },
            ],
        },
        {
            title: 'Garnish and to serve',
            items: [
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'freshly ground — finishing' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the black carp',
            description: 'Combine black carp sections with fish sauce, turmeric, and black pepper. Toss to coat. Marinate 20 minutes. Black carp flesh is denser and more strongly flavored than tilapia or common carp and benefits from a slightly longer marination to allow the turmeric and fish sauce to address the pronounced freshwater character. The turmeric also provides the golden base that the dark caramel will deepen further.',
            tip: 'Black carp has a denser, more pronounced flavor than grass carp or tilapia — it is the fish that the northern kho technique was specifically developed for. The strong flavoring of the braising liquid, the prominent galangal, and the generous pepper are all calibrated for the specific character of black carp flesh. With a milder fish the same preparation can be slightly reduced in seasoning intensity.',
        },
        {
            title: 'Build the dark caramel',
            description: 'Heat oil and sugar in a heavy pot or clay pot over medium heat until the caramel reaches a very dark amber. Add 2 tablespoons of water carefully. Swirl until dissolved. The caramel for cá trắm kho must be darker than for mild white fish — the density and flavor of black carp requires a more robust caramel base to balance it.',
            tip: 'The darker caramel for black carp kho than for tilapia or catfish kho reflects the fish\'s own flavor intensity. The caramel must provide enough bittersweet depth to balance the mineral character of black carp — a lighter caramel produces a kho that tastes predominantly of the fish without the caramel complexity.',
        },
        {
            title: 'Fry galangal and ginger in the caramel',
            description: 'Add the galangal matchsticks to the caramel first — fry for 2 minutes until golden. Add the ginger matchsticks and fry 1 more minute. The galangal needs longer than the ginger because it is denser and requires more time to release its oils into the caramel. Add smashed garlic, halved shallots, and whole chilies. The galangal proportion — more galangal than ginger — is the specific northern Vietnamese aromatic balance that defines this preparation.',
            tip: 'Frying the galangal before the ginger in the caramel is the technique that produces the correct northern kho aromatic balance — the galangal has more time to caramelize and its oils to integrate into the caramel base. Added simultaneously with the ginger, the galangal remains slightly undercooked relative to the ginger by the time the fish goes in.',
        },
        {
            title: 'Add fish, braise — 30-35 minutes',
            description: 'Add the marinated fish sections skin-side down to the pot with the caramel aromatics. Sear for 2 minutes. Add fish sauce, dark soy, sugar, black pepper, water, and rice wine. Bring to a boil, reduce to the lowest simmer. Braise uncovered for 30-35 minutes, turning the fish once at 18 minutes. The black carp is done when the sauce has reduced to a thick, dark glaze and the flesh at the thickest section yields to chopstick pressure without resistance.',
            tip: 'Black carp requires 30-35 minutes of kho braising — the same as catfish — because of its density. The rice wine in the braising liquid is the element that distinguishes northern fish kho from southern fish kho: it adds a specific depth and a slight fermented character that is specifically Hà Nội kitchen in character.',
        },
        {
            title: 'Add Vietnamese celery and serve',
            description: 'In the final 5 minutes, add the Vietnamese celery pieces and spring onion to the pot. Stir them gently into the thick sauce — they should wilt and absorb some of the reduced glaze but retain their green color and slight crunch. Grind black pepper over the surface. The Vietnamese celery at this stage perfumes the finished kho with its specific bitter-herbal character that is the northern marker of this dish. Serve from the pot with plain rice, cucumber, and lime.',
            tip: 'The Vietnamese celery in cá trắm kho cần is not optional and not substitutable with plain spring onion — it is the herb that makes this preparation northern. Its slightly bitter, intensely herbal character against the sweet caramel-fish sauce-galangal combination is the specific flavor tension that defines the dish. Without it, the kho is good; with it, it is specifically cá trắm kho cần.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
