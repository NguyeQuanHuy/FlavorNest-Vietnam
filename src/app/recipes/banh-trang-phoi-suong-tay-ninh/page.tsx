'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-trang-phoi-suong-tay-ninh',
    title: 'Bánh Tráng Phoi Suong Tây Ninh (Tây Ninh Dew-Dried Rice Paper with Grilled Pork)',
    subtitle: 'The uniquely soft, slightly chewy rice paper of Tây Ninh — dried in the morning dew rather than the midday sun, producing a wrapper that is flexible without soaking and that carries a specific mild sourness — wrapped around grilled pork, fresh herbs, green mango, and the Tây Ninh mu?i tôm shrimp salt that is the province\'s defining condiment.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-trang-phoi-suong-tay-ninh.jpg',
    intro: `Bánh tráng phoi suong Tây Ninh is the dew-dried rice paper of Tây Ninh province — a preparation that exists because of a specific rice paper production technique developed in this border province west of Ho Chi Minh City, where the rice paper sheets are dried overnight in the ambient dew rather than in the direct midday sun used for standard dried rice paper. This dew-drying technique produces a rice paper with a fundamentally different texture and character from both standard dried rice paper and fresh rice paper: it is softer and more pliable than sun-dried rice paper (which requires soaking in water before it can be wrapped), flexible enough to fold and roll without soaking or soaking, and carrying a slight, clean sourness from the overnight dew exposure that no other rice paper production method produces. Bánh tráng phoi suong is eaten without soaking — the paper is ready to wrap directly from the package, which is the detail that makes it the most convenient rice paper wrapper in the Vietnamese repertoire and the reason it has become the preferred rice paper for outdoor eating, picnics, and the specific style of wrapping food at the table that characterizes Tây Ninh eating culture. The preparation is most typically served alongside th?t nu?ng (grilled pork) and accompanied by mu?i tôm Tây Ninh — the province's specific shrimp salt condiment that is the most distinctive regional flavoring element in Tây Ninh cooking and that appears on virtually every table in the province as the all-purpose seasoning for fresh fruit, grilled meats, and rice paper preparations alike. Mu?i tôm Tây Ninh is a dry mixture of dried shrimp, salt, sugar, chili, and five-spice that is simultaneously a dipping condiment, a fruit seasoning, and a spice mix — the specific flavor of shrimp and chili together in a dry format that produces an addictive combination when used with the slightly sour bánh tráng phoi suong and the smoky grilled pork.`,
    ingredientSections: [
        {
            title: 'Bánh tráng phoi suong',
            items: [
                { amount: 20, name: 'bánh tráng phoi suong Tây Ninh sheets', note: 'the dew-dried rice paper that requires no soaking — pliable straight from the package. Available at Vietnamese specialty markets. If unavailable, use fresh rice paper (bánh tráng tuoi) as the closest substitute.' },
            ],
        },
        {
            title: 'Grilled pork (th?t nu?ng)',
            items: [
                { amount: 500, unit: 'g', name: 'pork shoulder or neck (th?t c? heo)', note: 'thinly sliced 5mm — the thin slicing ensures quick cooking and tenderness on the charcoal grill' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'five-spice powder' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
                { amount: 1, unit: 'tbsp', name: 'honey', note: 'added in the final minute of grilling for glaze' },
            ],
        },
        {
            title: 'Mu?i tôm Tây Ninh — the defining condiment',
            items: [
                { amount: 30, unit: 'g', name: 'dried shrimp (tôm khô)', note: 'finely ground in a blender or mortar' },
                { amount: 1.5, unit: 'tsp', name: 'coarse salt' },
                { amount: 2, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'chili powder', note: 'or 2 dried chilies, ground' },
                { amount: 0.5, unit: 'tsp', name: 'five-spice powder' },
                { amount: 0.5, unit: 'tsp', name: 'MSG', note: 'traditional in Tây Ninh mu?i tôm — optional but authentic' },
            ],
        },
        {
            title: 'Fresh accompaniments — generous Tây Ninh style',
            items: [
                { amount: 1, name: 'green unripe mango (xoài xanh)', note: 'julienned — the primary fruit for dipping in mu?i tôm' },
                { amount: 1, name: 'cucumber', note: 'julienned into batons' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 100, unit: 'g', name: 'd? chua (pickled daikon and carrot)', note: 'drained' },
                { amount: 100, unit: 'g', name: 'bean sprouts', note: 'blanched briefly' },
                { amount: 1, name: 'head butter lettuce' },
            ],
        },
        {
            title: 'Nu?c ch?m for the pork',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make mu?i tôm Tây Ninh',
            description: 'Grind the dried shrimp in a blender or mortar until fine — the texture should be between powder and fine crumbs, not completely smooth. Combine with salt, sugar, chili powder, five-spice, and optional MSG. Mix thoroughly. Transfer to a small plate or shallow bowl for dipping. Taste: mu?i tôm Tây Ninh should be simultaneously salty, sweet, spicy, and carrying the specific umami depth of the dried shrimp. This is the condiment that makes the Tây Ninh eating experience specifically itself — once tasted with fresh green mango and bánh tráng phoi suong, it becomes immediately understandable why Tây Ninh people consider it irreplaceable.',
            tip: 'Mu?i tôm Tây Ninh made with freshly ground dried shrimp is significantly more fragrant and more complex than commercial versions. The specific combination of dried shrimp umami, five-spice warmth, and chili heat in dry form produces a condiment that behaves differently from liquid dipping sauces — it adheres to the surface of what it touches, providing a concentrated hit of flavor at the point of contact rather than a distributed flavor that liquid sauces produce.',
        },
        {
            title: 'Marinate and grill the pork',
            description: 'Combine pork slices with fish sauce, soy sauce, sugar, garlic, shallots, five-spice, black pepper, and oil. Marinate 30 minutes minimum. Grill over medium-hot charcoal for 2-3 minutes per side — the thin slicing ensures quick cooking. Brush honey over the pork in the final minute for glaze. The pork should be caramelized and slightly charred at the edges. Rest 2 minutes before serving alongside the bánh tráng.',
            tip: 'The thin slicing of the pork for th?t nu?ng accompanying bánh tráng phoi suong — 5mm — is deliberately thinner than for other grilled pork preparations. The thin slice caramelizes more aggressively in the available grilling time, produces more surface area for the honey glaze, and is more easily wrapped without compressing the delicate dew-dried rice paper wrapper.',
        },
        {
            title: 'Prepare the green mango for mu?i tôm dipping',
            description: 'Julienne the green mango into thin batons. The green mango for mu?i tôm dipping is one of the most important elements of the Tây Ninh experience — it is eaten as much as a condiment delivery vehicle as a component of the roll. Each mango baton dipped in mu?i tôm and eaten before or alongside the roll provides the specific combination of tart-sour mango and sweet-salty-spicy shrimp salt that defines Tây Ninh eating culture. Prepare extra — it will disappear quickly.',
            tip: 'Green mango with mu?i tôm Tây Ninh is the snack combination that Vietnamese people from Tây Ninh province specifically seek out when they travel, because no other province has the same mu?i tôm. The specific combination of this condiment with unripe mango is the flavor memory of Tây Ninh for anyone who grew up in or near the province.',
        },
        {
            title: 'The no-soak wrap — the Tây Ninh method',
            description: 'Take one sheet of bánh tráng phoi suong directly from the package — do not soak, do not wet. The paper is already at the correct moisture level from the overnight dew-drying process. Lay flat. Place a lettuce leaf, herbs, bean sprouts, cucumber, and d? chua across the lower third. Add 2-3 pieces of grilled pork. Add a few pieces of green mango. Fold up the bottom, fold in the sides, roll forward. The paper should fold without cracking — its dew-dried pliability is what makes this possible without soaking.',
            tip: 'The no-soak technique for bánh tráng phoi suong is the detail that most surprises those accustomed to standard dried rice paper. Standard dried rice paper soaked in water for standard fresh rolls becomes soft and slightly sticky — it is at a different hydration level. Bánh tráng phoi suong, dried in overnight dew rather than the midday sun, is already at the optimal hydration level straight from the package and requires nothing added to be ready to roll.',
        },
        {
            title: 'Two dipping sauces — one roll, two experiences',
            description: 'Serve both the nu?c ch?m (for the pork) and the mu?i tôm (for the mango and the roll) simultaneously. The nu?c ch?m provides the liquid brightness that the roll needs as a whole; the mu?i tôm provides the specific Tây Ninh shrimp-spice dimension that makes the bite specifically of this province. To eat: dip the roll end in nu?c ch?m, take a bite, then dip a green mango baton in mu?i tôm and eat it alongside. The alternation between the two condiments — liquid and dry, clear and complex — is the complete Tây Ninh eating rhythm.',
            tip: 'Eating bánh tráng phoi suong th?t nu?ng Tây Ninh with only nu?c ch?m is eating half the dish. The mu?i tôm is not a garnish or an option — it is the condiment that makes the preparation specifically Tây Ninh. The province is famous for its mu?i tôm throughout Vietnam in the same way that Phú Yên is famous for its m?m nhi and Hu? is famous for its m?m tôm. The condiment is the regional identity.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
