'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-nuong-banh-phong-tom',
    title: 'M?c Nu?ng Kèm Bánh Ph?ng Tôm (Charcoal Squid with Tableside Fried Shrimp Crackers)',
    subtitle: 'Whole squid marinated in lemongrass and fish sauce then grilled over charcoal until the skin chars and the body firms — served with a small tabletop fryer of oil and dried shrimp crackers that each diner fries individually at the table, the crackers arriving puffed and sizzling directly onto the plate of grilled squid.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/muc-nuong-banh-phong-tom.jpg',
    intro: `M?c nu?ng kèm bánh ph?ng tôm is the charcoal squid preparation served with tableside fried shrimp crackers — a restaurant and street food presentation that has become one of the most entertaining dining experiences at Vietnamese seafood restaurants along the coast from Ðà N?ng to Vung Tàu. The preparation separates into two elements that are cooked in different ways and served together: the grilled squid, prepared in the kitchen over hardwood charcoal with the standard lemongrass-chili-fish sauce marinade that characterizes central Vietnamese grilled seafood; and the shrimp crackers, brought to the table raw and dried alongside a small tabletop gas burner and a pot of hot oil, which each diner uses to fry their own crackers individually throughout the meal — each cracker dropped into the hot oil, expanding dramatically in 3-5 seconds, and eaten immediately while the grilled squid provides the primary protein alongside. The tableside frying element is what makes this preparation specifically memorable: the visual of the cracker expanding in the hot oil at the table, the sound of the sizzle, and the instant gratification of eating a cracker within 10 seconds of frying it are the theatrical elements that Vietnamese street food and restaurant culture understands as part of the eating experience rather than mere efficiency. M?c (squid) is the specific protein that pairs most naturally with bánh ph?ng tôm in this format because the squid's specific sweet, marine character complements the shrimp character of the crackers — they are different expressions of the same coastal seafood flavor palette, and eating them together produces the specific synergy of related flavors amplifying each other rather than competing.`,
    ingredientSections: [
        {
            title: 'Squid',
            items: [
                { amount: 800, unit: 'g', name: 'fresh whole squid (m?c tuoi)', note: 'medium size — 15-20cm body length. Cleaned but left whole: body tube intact, tentacles attached. Score the body tube in a crosshatch pattern before marinating.' },
            ],
        },
        {
            title: 'Lemongrass marinade',
            items: [
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, minced' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Tableside shrimp cracker setup',
            items: [
                { amount: 40, name: 'dried shrimp crackers (bánh ph?ng tôm khô)', note: 'medium to large size — approximately 10 per diner. Kept in a small basket at the table.' },
                { amount: 400, unit: 'ml', name: 'neutral oil', note: 'for the tableside frying pot — enough to fry 2-3 crackers at a time at 190°C' },
                { amount: 1, name: 'small tabletop gas burner or electric fryer', note: 'the tableside cooking equipment — a small pot on a portable burner works well' },
            ],
        },
        {
            title: 'Dipping sauces',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'water' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'mayonnaise', note: 'optional — sriracha mayo is popular alongside grilled squid and crackers' },
                { amount: 1, unit: 'tbsp', name: 'sriracha', note: 'for the mayo option' },
            ],
        },
        {
            title: 'Serving accompaniments',
            items: [
                { amount: 1, name: 'bunch rau ram' },
                { amount: 1, name: 'bunch mint' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 1, name: 'cucumber, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Score and marinate the squid — 30 minutes',
            description: 'Score the body tube of each squid in a crosshatch pattern — cuts 1cm apart through the outer skin and into the flesh but not through the body tube. The scoring allows the marinade to penetrate and produces the specific curling and charring pattern when grilled that makes scored squid visually distinctive. Combine all marinade ingredients and coat the scored body tubes and tentacles thoroughly. Marinate 30 minutes.',
            tip: 'The crosshatch scoring of squid before grilling is the technique that produces both the visual appeal of curled, charred squid on the grill and the practical benefit of marinade penetration into the dense squid flesh. Unscored squid grills with a smooth exterior that does not absorb the marinade beyond the surface; scored squid carries the lemongrass-fish sauce character through the flesh.',
        },
        {
            title: 'Set up the tableside cracker station',
            description: 'Set up the tabletop burner with a small deep pot containing 400ml of neutral oil. Heat the oil to 190°C before the meal begins — a candy thermometer or the cracker test (one cracker should expand fully in 3-5 seconds) confirms the correct temperature. Place the basket of dried shrimp crackers, the dipping sauces, and the herbs and condiments around the tableside station. The cracker station should be accessible to every diner without reaching awkwardly.',
            tip: 'The tableside oil temperature must be maintained at 190°C throughout the meal for consistent cracker expansion. A portable gas burner on low maintains this temperature well between uses. If the oil cools between cracker batches, allow 1-2 minutes for it to return to temperature before frying the next round.',
        },
        {
            title: 'Grill the squid over charcoal',
            description: 'Build a medium-hot charcoal fire. Grill the marinated squid body tubes and tentacles over direct heat for 2-3 minutes per side — squid cooks quickly and the window between correctly charred and rubbery is narrow. The body tube should be slightly charred at the score lines, the tentacles slightly crisped at the tips, and the flesh just set throughout — opaque white with the specific slight firmness of correctly cooked squid. Rest 2 minutes.',
            tip: 'The 2-3 minute per side grilling time for whole squid is the most critical timing in this preparation — squid at 2 minutes per side is perfectly cooked; at 4-5 minutes per side it becomes rubbery and loses the sweet, tender character that makes it the ideal companion for the crackers. Watch the squid constantly during grilling.',
        },
        {
            title: 'Slice and plate the squid',
            description: 'Rest the grilled squid for 2 minutes. Slice the body tube into rings 1-2cm wide. Separate the tentacle clusters. Arrange on a serving plate with the herb plate, lime wedges, and dipping sauces. The grilled squid should be the center of the table around which the tableside cracker station operates.',
            tip: 'Slicing the grilled squid body into rings immediately before serving rather than before grilling preserves the juices inside the body tube. Grilled whole squid that is sliced after a brief rest releases minimal juice; squid sliced before grilling loses its internal moisture to the grill.',
        },
        {
            title: 'The tableside cracker ritual — each diner fries their own',
            description: 'Each diner takes a dried cracker from the basket and drops it into the hot oil at the tabletop station. The cracker expands in 3-5 seconds — they remove it with the small slotted spoon or tongs provided, drain briefly, and place it directly on their plate alongside the grilled squid. Immediately top the hot cracker with a piece of squid, a squeeze of lime, and a dip in the nu?c ch?m. Eat before the cracker cools — the entire cycle from frying to eating should take under 30 seconds.',
            tip: 'The tableside cracker frying ritual produces the freshest possible cracker at every point in the meal — not a batch fried at the beginning that softens over time, but individual crackers fried and eaten in 30-second cycles throughout the meal. This is the specific pleasure of the tableside format: the cracker is always at its peak expansion and crispiness when eaten.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
