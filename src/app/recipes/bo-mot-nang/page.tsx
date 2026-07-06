'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-mot-nang',
    title: 'Bò M?t N?ng (One-Sun Dried Beef — Phú Yên)',
    subtitle: 'Beef marinated in salt, lemongrass, and garlic then sun-dried for one full day under the Phú Yên sun until the exterior firms and deepens while the interior stays tender — grilled over charcoal until the outside chars and the fat renders, or pan-fried until crackling crispy. The most famous specialty of Phú Yên province.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 day sun-drying + 20 min cooking',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/bo-mot-nang.jpg',
    intro: `Bò m?t n?ng — one-sun beef — is the dish that most completely defines Phú Yên's culinary identity. M?t n?ng means one sun: the beef is dried under the direct sunlight of the central Vietnamese coast for one full day — from morning to afternoon, the same sun that beats down on the salt flats of Hòa Hi?p and turns the sea at Mui Ði?n gold. The drying is not smoking, not curing with nitrates, not dehydrating in an oven. It is the specific combination of the coastal Phú Yên sun — strong, salty-aired, with the natural heat that varies through the day — and a simple marinade of salt, lemongrass, garlic, and a touch of fish sauce. The beef used is specifically bò vàng — the yellow-hided local cattle of the central highlands that graze on the slopes between Son Hòa and Ð?ng Xuân, leaner and more strongly flavored than commercial beef, with a fat distribution that handles the one-day drying without becoming dry. After one sun, the exterior of each slice is firm, slightly darkened, and concentrated. The interior remains tender. Cooked — grilled over charcoal until the fat chars and the dried exterior caramelizes, or pan-fried in its own fat until crackling and golden — bò m?t n?ng produces a depth of beef flavor that fresh beef cannot approach, because the drying concentrates the protein and fat into a form that Maillard reaction transforms completely in the heat. It is eaten everywhere in Phú Yên: at street stalls, in restaurants, wrapped in rice paper with rau ram and mu?i lá é, or simply with rice and cold beer on a hot afternoon. Outside Phú Yên it is sold vacuum-packed at airports and sent by families to every city in Vietnam and to the diaspora abroad. No other province makes it quite the same way, and the Phú Yên sun is genuinely irreplaceable — but this recipe produces the closest result achievable outside the province.`,
    ingredientSections: [
        {
            title: 'Beef',
            items: [
                { amount: 800, unit: 'g', name: 'beef flank or brisket (th?t bò ba ch? bò ho?c n?m)', note: 'must have some fat marbling — lean beef produces a dry, tough result after sun-drying. Slice against the grain into pieces 1-1.5cm thick and about 8-10cm long.' },
            ],
        },
        {
            title: 'Marinade',
            items: [
                { amount: 2, unit: 'tsp', name: 'coarse sea salt', note: 'not iodized — the primary preserving and seasoning agent' },
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, finely minced to a paste — the defining aromatic of bò m?t n?ng' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives the characteristic golden tint to the dried beef' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil', note: 'carries the lemongrass into the beef' },
            ],
        },
        {
            title: 'For pan-frying version (bò m?t n?ng chiên)',
            items: [
                { amount: 3, unit: 'tbsp', name: 'neutral oil or beef fat', note: 'the dried beef fries in its own rendered fat — add oil only if the beef is very lean' },
            ],
        },
        {
            title: 'M? hành (spring onion oil — essential finish)',
            items: [
                { amount: 5, name: 'spring onions', note: 'green parts only, thinly sliced' },
                { amount: 80, unit: 'ml', name: 'neutral oil' },
                { amount: 0.25, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Mu?i lá é dipping salt',
            items: [
                { amount: 2, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 15, unit: 'g', name: 'fresh lá é leaves', note: 'pounded with the salt. Substitute: 4 kaffir lime leaves + 4 rau ram leaves pounded with the salt.' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'limes', note: 'squeezed at the table' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'sheets bánh tráng mè (sesame rice crackers)', note: 'Phú Yên style sesame rice crackers — or any plain rice crackers' },
                { amount: 1, name: 'bunch rau ram' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'cucumber', note: 'julienned' },
                { amount: 2, name: 'extra limes' },
            ],
        },
    ],
    steps: [
        {
            title: 'Slice and marinate the beef',
            description: 'Slice the beef against the grain into pieces 1-1.5cm thick and 8-10cm long. Combine with the minced lemongrass paste, garlic, salt, fish sauce, sugar, turmeric, pepper, and oil. Work the marinade into every surface firmly — the lemongrass must be thoroughly distributed. Marinate for minimum 2 hours at room temperature, or overnight refrigerated. The lemongrass needs time to penetrate the meat before drying begins.',
            tip: 'The lemongrass for bò m?t n?ng must be minced to an almost-liquid paste — any fibrous pieces that remain on the surface of the beef during sun-drying will burn when cooked. Pound in a mortar until no visible fibers remain before mincing further.',
        },
        {
            title: 'Sun-dry for one full day — or oven-dry',
            description: 'In Phú Yên: thread marinated beef onto bamboo skewers or lay on a bamboo rack. Place in full direct sunlight from 8am. Leave for 6-8 hours, turning once at midday. The beef is ready when the exterior is dry and firm to the touch, slightly darker in color, and the surface does not feel tacky. Bring inside before evening dew. OVEN METHOD (outside Phú Yên): Place beef on a wire rack over a baking tray. Set oven to its lowest setting, 50-60°C, with the door slightly ajar. Dry for 5-6 hours turning once, until the exterior is firm and dry but the interior still has give.',
            tip: 'The sun-drying creates a specific surface texture — the Phú Yên coastal air is salty and slightly humid, which produces a different result than purely hot dry air. The oven at 50-60°C with the door ajar mimics the airflow and temperature more closely than a dehydrator set to high. The lower the temperature, the closer the texture to the original.',
        },
        {
            title: 'METHOD 1: Grill over charcoal (nu?ng than)',
            description: 'Build a hot charcoal fire. Grill the dried beef pieces directly over the coals for 3-4 minutes per side. The dried exterior caramelizes rapidly — the Maillard reaction happens faster on dried meat than fresh because there is no surface moisture to evaporate first. The fat in the beef renders and creates flare-ups — these brief flames char the edges and add the specific smoky-char character of grilled bò m?t n?ng. Watch carefully and move to a cooler zone if flaring too aggressively.',
            tip: 'The flare-ups from the rendering fat are part of the technique, not a problem to avoid. Each brief flame adds a layer of char to the dried surface. A bò m?t n?ng grilled without any char is undercooked by Phú Yên standards.',
        },
        {
            title: 'METHOD 2: Pan-fry until crackling (chiên giòn)',
            description: 'Heat a heavy pan or wok over medium-high heat. Add oil if needed — lean beef needs a tablespoon; well-marbled beef will self-baste. Add the dried beef pieces in a single layer. Fry without moving for 3-4 minutes until the underside is deeply golden and crispy. Flip and fry 2-3 minutes on the other side. The dried exterior should become genuinely crackling — tapping with a finger should produce a hollow sound. The interior remains tender.',
            tip: 'The pan-fried version (chiên) is the preparation most commonly found in Phú Yên restaurants — the crackling exterior from the hot oil applied to dried meat is different from any other texture in Vietnamese cooking. Neither fresh beef pan-fried nor dried beef grilled produces the same result.',
        },
        {
            title: 'Make the m? hành and mu?i lá é',
            description: 'Heat oil until smoking and pour over sliced spring onion greens. Stir immediately. Season with salt. The m? hành is spooned over the hot beef the moment it comes off the heat or out of the pan — it sizzles on contact with the hot meat. Make the mu?i lá é: pound lá é leaves with coarse salt and pepper until the salt turns green and intensely fragrant. Add sugar. Squeeze lime over at the table.',
            tip: 'M? hành applied while the beef is still very hot absorbs into the caramelized surface and adds an aromatic richness. Applied to cooled beef it sits on the surface and the effect is diminished. The timing — hot beef, hot oil, instant application — is the technique.',
        },
        {
            title: 'Plate and serve the Phú Yên way',
            description: 'Transfer the hot bò m?t n?ng to a plate. Spoon m? hành generously over the top — it should sizzle on contact. Arrange sesame rice crackers, rau ram, mint, and julienned cucumber around the plate. Serve the mu?i lá é in individual small plates with lime wedges. To eat: place a piece of bò m?t n?ng on a sesame cracker with rau ram, dip the whole assembly in the lime-squeezed mu?i lá é, eat in one bite. This is the Phú Yên way — and it is exactly right.',
            tip: 'The combination of bò m?t n?ng + bánh tráng mè Tuy An + mu?i lá é is the complete Phú Yên beef experience. Each element is specific to the province. The crackling cracker against the chewy-crispy dried beef against the sharp lá é salt is the textural and flavor combination that Phú Yên people describe as home.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
