'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'trung-muoi-tu-lam',
    title: 'Tr?ng Mu?i T? Làm (Home-Cured Salted Duck Eggs)',
    subtitle: 'Duck eggs submerged in a saturated salt brine for 30 days until the whites become firm and intensely salty and the yolks transform into dense, oily, deep-orange spheres that run slightly when cut — used as the golden filling in bánh nu?ng Trung Thu, stirred into congee, or eaten halved alongside plain rice.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '30 days',
    rating: 4.9,
    baseServings: 10,
    heroImage: '/images/recipes/trung-muoi-tu-lam.jpg',
    intro: `Tr?ng mu?i — salted duck eggs — are the preserved egg that appears throughout Vietnamese cooking as both a standalone ingredient and as the unmistakable golden filling of bánh nu?ng Trung Thu (mooncakes). The home-curing process is one of the simplest preservation techniques in the Vietnamese kitchen: duck eggs submerged in a saturated salt brine — water with enough salt dissolved that no more salt will dissolve — for 30 days, during which the salt gradually migrates through the porous eggshell into the egg white and yolk, drawing moisture out in the other direction. The result of this slow osmotic process is specific and dramatic: the egg white becomes firm, rubbery, and intensely salty — more salt than is pleasant to eat on its own, which is why the white is typically used sparingly as a seasoning element rather than eaten as a primary component. The yolk, by contrast, undergoes a more complex transformation: as the moisture is drawn out, the fat content remains and concentrates, and the yolk develops a dense, slightly grainy texture and turns from its raw yellow to a deep orange that is almost red at the center. Cut in half, a correctly cured salted duck egg yolk is a sphere of concentrated, intensely savory, oily richness with a color that is one of the most dramatic natural food colors in Vietnamese cooking. This same yolk, when used as the filling in bánh nu?ng Trung Thu, provides the contrast of salt and richness against the sweet lotus seed paste that makes the mooncake what it is. At home, without a specific recipe project, tr?ng mu?i is kept in the refrigerator after the 30-day cure and used over several weeks: one egg halved and placed alongside a bowl of rice congee; one yolk crumbled over fried rice for its salt and its specific fatty richness; one whole egg boiled and served with plain rice and soy sauce. The home-cured version produces a quality that commercial salted eggs in Asian grocery stores rarely approach — a yolk that is genuinely oily and slightly sandy at the center, a white that is firm and consistently salty throughout.`,
    ingredientSections: [
        {
            title: 'Brine method (preferred)',
            items: [
                { amount: 10, name: 'fresh duck eggs (tr?ng v?t)', note: 'fresh, uncracked, cleaned of any dirt. Duck eggs specifically — their larger, fattier yolks produce a richer, more orange result than chicken eggs.' },
                { amount: 500, unit: 'g', name: 'coarse sea salt or kosher salt', note: 'for the saturated brine — this is approximately the amount needed for 1.5L water to reach saturation' },
                { amount: 1.5, unit: 'L', name: 'water' },
                { amount: 2, unit: 'tbsp', name: 'Shaoxing wine or rice wine', note: 'optional — adds complexity to the cured yolk and helps the salt migrate more evenly' },
                { amount: 2, name: 'star anise', note: 'optional — adds a faint aromatic note to the white' },
            ],
        },
        {
            title: 'Salt paste method (alternative, faster penetration)',
            items: [
                { amount: 10, name: 'fresh duck eggs' },
                { amount: 400, unit: 'g', name: 'fine sea salt' },
                { amount: 50, unit: 'ml', name: 'Shaoxing wine' },
                { amount: 0, unit: 'g', name: 'cheesecloth or plastic wrap', note: 'for coating each egg in the salt paste before storing' },
            ],
        },
        {
            title: 'Storage equipment',
            items: [
                { amount: 1, name: 'large glass jar or ceramic crock with lid', note: 'large enough to hold all eggs submerged. Glass preferred — allows monitoring of the cure.' },
                { amount: 1, name: 'small plate or weight', note: 'to keep eggs submerged beneath the brine' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the saturated brine',
            description: 'Bring 1.5L water to a boil. Add 500g of salt and stir until completely dissolved. The water should be genuinely saturated — test by adding an additional tablespoon of salt and checking if it dissolves. If it does not dissolve, the brine is saturated. Add Shaoxing wine and star anise if using. Cool completely to room temperature before adding the eggs — hot brine cooks the egg white and ruins the cure.',
            tip: 'The saturation test is the most important step in tr?ng mu?i making: a brine that is under-salted produces under-cured eggs even after 30 days. The eggs should float slightly in a truly saturated brine — if they sink completely, the brine may need more salt. A fresh duck egg placed in the completed brine should be barely buoyant.',
        },
        {
            title: 'Submerge the eggs',
            description: 'Gently place the clean duck eggs into the glass jar or crock. Pour the cooled saturated brine over the eggs — they must be fully submerged throughout the 30-day cure. Place a small plate or weight on top of the eggs to keep them below the brine surface. Cover the jar with a lid. Label with the start date.',
            tip: 'Any egg that rises above the brine surface during curing will cure unevenly — the portion above the brine will remain under-cured while the submerged portion cures correctly. The weight on top is not optional. Check the first few days to ensure all eggs remain submerged and add the weight if any are floating.',
        },
        {
            title: 'Cure at room temperature — 30 days',
            description: 'Store the sealed jar at room temperature (18-26°C) for 30 days. Do not refrigerate during the curing period — the cold slows the salt migration significantly. Check every few days to ensure the eggs remain submerged. The brine may develop a slight cloudiness after 1-2 weeks — this is normal and indicates the salt and proteins are exchanging between brine and egg correctly.',
            tip: 'The 30-day room temperature cure is the standard for Vietnamese tr?ng mu?i. At cooler temperatures (below 18°C), extend to 35-40 days. At warmer temperatures (above 28°C), check at 25 days — the cure may be complete earlier. Test at the 25-day mark by cracking one egg: the yolk should be firm and deep orange throughout.',
        },
        {
            title: 'Test for doneness at day 25-30',
            description: 'At day 25, remove one egg from the brine. Hold it up to a light source — a correctly cured egg should show a distinct, deep orange yolk visible through the shell, slightly firmer and more separated from the white than a fresh egg. Crack it open: the white should be firm and salty, the yolk a deep orange-red and slightly oily at the surface. If the yolk is still yellow and soft, return all eggs for 5 more days and test again.',
            tip: 'The candling test — holding the egg to a light source — is the traditional Vietnamese method for checking cure progress without cracking an egg. A cured yolk shows as a dense, dark orange sphere clearly separated from the white. An under-cured yolk shows as a loose, lighter yellow mass that moves when the egg is rotated.',
        },
        {
            title: 'Cook and use the salted eggs',
            description: 'Remove the cured eggs from the brine. Rinse each shell. To use in bánh nu?ng Trung Thu or other baked preparations: separate the yolk from the white by cracking the egg, rinsing the yolk under water, and patting dry. Brush the yolk lightly with sesame oil and bake at 150°C for 5 minutes before using as a filling — this firms the yolk further and reduces any sulfur character. To eat alongside rice or congee: hard-boil the whole salted egg (12 minutes), cool, peel, halve. The yolk will be deep orange and slightly sandy at the center.',
            tip: 'The pre-baking of salted egg yolks before using in bánh nu?ng is the step that most home recipes omit and that makes the difference between a yolk that runs into the surrounding paste (not pre-baked) and a yolk that holds its shape and provides a distinct golden sphere in the cut mooncake (pre-baked). Five minutes at 150°C is sufficient.',
        },
        {
            title: 'Storage after curing',
            description: 'Once cured, remove the eggs from the brine and store in the refrigerator, unwashed, for up to 2 months. They continue to slowly cure in the refrigerator — eggs stored for an additional 2 weeks after the initial 30-day cure have an even more intensely flavored yolk. Use the intensely salty white sparingly: crumbled over congee, stirred into fried rice in small amounts, or eaten in small pieces alongside plain rice as a condiment rather than a main component.',
            tip: 'The white of home-cured tr?ng mu?i is significantly saltier than the yolk — it is the part of the egg where the salt has concentrated most heavily. Eating the white as a large portion produces an overwhelmingly salty experience. The correct proportion: a small amount of white alongside a large amount of rice, where the salt migrates from the white into the rice and seasons it gradually with each bite.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
