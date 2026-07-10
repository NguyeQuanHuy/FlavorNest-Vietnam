'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-rim-quang-binh',
    title: `Nhật Lệ Squid Braised with Green Pepper`,
    subtitle: `Mực Rim Quảng Bình — Fresh squid from the Nhật Lệ estuary braised with fresh green peppercorns and lemongrass until lacquered — sharper and less sweet than the southern version.`,
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Mực rim Quảng Bình is the coastal braised squid of the Nhật Lệ River estuary — the fishing grounds that supply Đồng Hới city with fresh squid caught daily by small wooden boats working the shallow inshore waters between the river mouth and the offshore reefs. The preparation shares the rim (reduce-to-lacquer) technique with the Ninh Thuận version documented elsewhere in this collection, but the Quảng Bình version is measurably different in character: less sweet, sharper, and built around fresh green peppercorns rather than dried black pepper, producing a braise that is simultaneously more aromatic and more immediately pungent than the southern version.\n\nThe fresh green peppercorns used in Quảng Bình mực rim come from the pepper vines grown in the sandy soil of the Lệ Ninh and Bố Trạch districts — the same coastal Quảng Bình terroir that produces the province's famous tiêu rừng (forest pepper). Fresh green pepper straight from the vine, used within hours of picking, has a volatile, citrusy sharpness that dried pepper cannot replicate — the compound responsible is the same hydroxy-alpha-sanshool family found in mắc khén, though at lower concentration and without the numbing effect.\n\nThe coastal central Vietnamese seasoning philosophy differs from the south: less sugar, less palm sugar, more fish sauce, more pepper. Quảng Bình mực rim reflects this — the caramel is present but restrained, the pepper is prominent, and the lemongrass provides the aromatic bridge between the squid's brininess and the pepper's sharpness.`,
    ingredientSections: [
        {
            title: `Squid`,
            items: [
                { amount: 600, unit: 'g', name: `fresh squid (muc Nhat Le)`, note: `cleaned — tubes cut 2cm rings, tentacles whole; very fresh only` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `for cleaning rub` },
                { amount: 1, unit: 'tsp', name: `rice wine`, note: `removes fishiness` },
            ],
        },
        {
            title: `Braising sauce`,
            items: [
                { amount: 40, unit: 'g', name: `fresh green peppercorns (tieu xanh tuoi)`, note: `stripped from stem — the Quảng Bình distinction; substitute: brined green peppercorns, drained and rinsed` },
                { amount: 2.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tbsp', name: `sugar`, note: `less than southern version — Quảng Bình is drier` },
                { amount: 1, unit: 'tbsp', name: `dark caramel (nuoc mau)`, note: `2 tbsp sugar cooked to amber, 3 tbsp water added` },
                { amount: 1, unit: 'tbsp', name: `soy sauce`, note: `colour depth` },
                { amount: 0.5, unit: 'tsp', name: `black pepper, coarsely ground`, note: `stage 2 addition — added off heat` },
            ],
        },
        {
            title: `Aromatics`,
            items: [
                { amount: 3, name: `lemongrass stalks, inner white only, minced to paste` },
                { amount: 5, name: `garlic cloves, minced` },
                { amount: 3, name: `shallots, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
                { amount: 2, unit: 'tbsp', name: `neutral oil` },
                { amount: 10, unit: 'g', name: `unsalted butter`, note: `off-heat finish — gloss` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions steamed white rice` },
                { amount: 1, name: `lime, wedged` },
                { amount: 1, name: `bunch rau ram` },
            ],
        },
    ],
    steps: [
        {
            title: `Clean and dry the squid`,
            description: `Pull head and tentacles from tube — innards come with it. Remove transparent quill from tube. Peel purple skin under cold running water. Cut tentacles from head below the eyes. Cut tubes into 2cm rings. Rub with salt, rest 2 minutes, rinse. Toss with rice wine, rest 5 minutes, rinse again. Pat completely dry — surface moisture prevents the sear and makes the sauce watery. Rest on a cloth 5 minutes after patting.`,
        },
        {
            title: `Crush the green peppercorns`,
            description: `Strip fresh green peppercorns from their stems. Crush coarsely in a mortar — some corns cracked, some partially whole, some fine. The fresh crack releases the volatile citrusy-sharp oils that dried pepper lacks. The three sizes produce different release rates during cooking: fine seasons the sauce immediately, cracked releases during the braise, whole delivers bursts when bitten. Do not grind smooth.`,
            tip: `Fresh green peppercorns from Quảng Bình's sandy coastal soil have a sharper, more citrusy character than highland green pepper. In Germany, fresh green peppercorns are occasionally available at Asian and Indian grocery stores. Frozen green peppercorns (Tiefkühl-Pfeffer at German Asian supermarkets) are a good substitute — the volatile oils are largely preserved by freezing. Brined green peppercorns (in jars) work but are milder.`,
        },
        {
            title: `Sear the squid`,
            description: `Heat a wok over the highest heat until smoking. Add oil — shimmer immediately. Add squid in a single layer — do not crowd. Sear without moving 60 seconds until slight colour. Toss once, cook 30 more seconds. Remove immediately — just opaque, still underdone. The squid finishes in the sauce.`,
        },
        {
            title: `Build and reduce`,
            description: `In the same wok, sauté shallots, garlic, and lemongrass 90 seconds. Add crushed green peppercorns, stir 30 seconds to bloom in the oil. Add fish sauce, sugar, dark caramel, and soy sauce. Simmer 3-4 minutes until reduced by half. Return squid, toss to coat. High heat, stirring constantly, 2-3 minutes until sauce lacquers every piece. Remove from heat. Add butter and toss 20 seconds until glossy. Add stage-2 black pepper.`,
            tip: `The Quảng Bình rim finish is drier and sharper than the southern version — the sauce should almost fully evaporate to a coating rather than leaving a pool. The butter finish rounds the sharpness of the green pepper and the fish sauce without sweetening — this is the technique that makes the dish feel complete despite the reduced sugar.`,
        },
        {
            title: `Serve over rice`,
            description: `Transfer immediately. The squid should be mahogany-coloured, every piece lacquered, green peppercorns visible throughout. Serve with rice and lime. Squeeze lime over the squid before the first bite — the acid cuts through the lacquer and the green pepper sharpness rebalances. In Đồng Hới, mực rim is eaten as a rice topping throughout the day, not just at dinner.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}