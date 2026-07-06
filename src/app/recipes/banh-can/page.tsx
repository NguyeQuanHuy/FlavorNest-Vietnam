'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-can',
    title: 'Bánh Căn (Vietnamese Mini Rice Cakes in Clay Molds)',
    subtitle: 'Small rice flour cakes cooked in round clay molds over charcoal until the bottoms crisp and the centers stay custardy-soft, topped with quail egg, shrimp, or squid — the Phan Rang street food that is eaten by the dozen, drowned in green onion oil and fish sauce.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr (+ overnight rice soak)',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-can.jpg',
    intro: `Bánh căn is the mini rice cake of Phan Rang — the capital of Ninh Thuận province on the south-central coast, where the dish originated with the Cham people before spreading to Đà Lạt, Nha Trang, and Phan Thiết, each city developing its own variation. The cakes are cooked in a specific piece of equipment: a heavy clay tray with round indentations, sitting over charcoal, each hole filled with rice batter and covered with a clay lid until the bottom crisps against the hot clay while the top steams to a soft, almost custardy finish. That dual texture — crisp base, tender center — is the entire identity of bánh căn, and it is why the dish is often confused with but is fundamentally different from bánh khọt: bánh khọt is fried in oil and fully crispy; bánh căn is cooked dry on clay and half-steamed. The batter is pure rice — soaked overnight and traditionally ground fresh, with a portion of cooked rice blended in, which is the secret to the airy interior. The toppings go on while the batter is still wet: a quail egg cracked into the center, a shrimp, a piece of squid, or nothing at all for the original plain version. The cakes are pried out in pairs, sandwiched together, and served swimming in spring onion oil with a bowl of diluted fish sauce, green mango, and — in the Phan Rang style — a side of xíu mại meatballs or braised fish in the dipping bowl. Without the clay mold, a Dutch aebleskiver pan or Japanese takoyaki pan over low heat is the accepted home substitute.`,
    ingredientSections: [
        {
            title: 'Batter (start the night before)',
            items: [
                { amount: 300, unit: 'g', name: 'raw jasmine rice', note: 'soaked overnight in cold water — traditionally ground fresh. This produces a better texture than rice flour.' },
                { amount: 150, unit: 'g', name: 'cooked rice (cơm nguội)', note: 'day-old cooked rice — the secret ingredient. Blended into the batter, it creates the airy, soft interior that rice flour alone cannot.' },
                { amount: 450, unit: 'ml', name: 'water', note: 'for blending — adjust for consistency' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 0.25, unit: 'tsp', name: 'turmeric powder', note: 'optional — some Phan Rang vendors add a trace for color, others keep the batter white' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 20, name: 'quail eggs (trứng cút)', note: 'the most popular topping — one cracked into each cake' },
                { amount: 200, unit: 'g', name: 'small shrimp', note: 'peeled — one per cake' },
                { amount: 150, unit: 'g', name: 'squid', note: 'cut into small pieces — optional third topping' },
                { amount: 4, name: 'spring onions', note: 'green parts, thinly sliced — for the scallion oil' },
                { amount: 5, unit: 'tbsp', name: 'neutral oil', note: 'for the scallion oil' },
            ],
        },
        {
            title: 'Dipping sauce (nước mắm pha)',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 4, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 3, unit: 'tbsp', name: 'sugar' },
                { amount: 8, unit: 'tbsp', name: 'water', note: 'bánh căn sauce is more diluted than standard nước chấm — the cakes are dunked entirely, almost like a soup' },
                { amount: 2, name: 'garlic cloves, minced' },
                { amount: 1, name: 'bird\'s eye chili, minced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'green mango', note: 'finely julienned — stirred into the dipping bowl, Phan Rang style' },
                { amount: 1, name: 'bunch fresh herbs', note: 'rau răm, mint, lettuce' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'crushed — optional, Đà Lạt style' },
            ],
        },
    ],
    steps: [
        {
            title: 'Soak the rice overnight',
            description: 'Rinse the raw rice and soak in plenty of cold water for minimum 8 hours, ideally overnight. The rice must be fully saturated — a grain pressed between two fingers should crush completely. Drain before blending. This soak is non-negotiable: under-soaked rice produces a gritty batter that never develops the soft interior.',
            tip: 'In hot weather, soak the rice in the refrigerator — rice soaked at warm room temperature for 12+ hours begins to ferment and sour. A faint sourness is traditional in some versions, but uncontrolled fermentation ruins the batter.',
        },
        {
            title: 'Blend the batter with cooked rice',
            description: 'Combine the drained soaked rice, the day-old cooked rice, salt, turmeric if using, and about 400ml of water in a high-speed blender. Blend for 2-3 minutes until completely smooth — no grit when rubbed between fingers. The batter should be thin — similar to whole milk, thinner than pancake batter. Adjust with remaining water. Rest 30 minutes before cooking.',
            tip: 'The cooked rice in the batter is the technique that separates real bánh căn from rice-flour imitations. The pre-gelatinized starch creates steam pockets during cooking, producing the airy, soft center. Without it the cakes are dense and gummy.',
        },
        {
            title: 'Make the scallion oil',
            description: 'Place the sliced spring onion greens in a heatproof bowl with a pinch of salt. Heat the oil in a small pan until just smoking, then pour directly over the onions — they will sizzle and turn brilliant green. Stir and set aside. This scallion oil is poured generously over the finished cakes — in Phan Rang it is applied with abandon, not restraint.',
            tip: 'Make the scallion oil before cooking the cakes — the cakes come off the mold continuously once you start, and there is no time to prepare anything else.',
        },
        {
            title: 'Heat the mold properly',
            description: 'Place the clay bánh căn mold — or a takoyaki/aebleskiver pan — over medium-low heat and let it heat thoroughly for 5-10 minutes. The clay (or cast iron) must be evenly and deeply heated before the first batter goes in. Brush each indentation very lightly with oil — bánh căn is traditionally cooked nearly dry; the crispness comes from the hot clay, not from frying. Test with a drop of batter: it should set within seconds with a gentle sizzle.',
            tip: 'Medium-low and patient is the correct heat. Too hot and the bottom burns before the top sets; too cool and the cakes stick and never release. The first batch calibrates the heat — expect to sacrifice it.',
        },
        {
            title: 'Cook the cakes with toppings',
            description: 'Stir the batter (it settles fast) and ladle into each indentation, filling about 80% full. Immediately crack a quail egg into the center of each cake, or press in a shrimp or piece of squid. Cover with the lid and cook 3-4 minutes. The cake is done when the edges pull away from the mold, the bottom is golden-crisp, and the top is set but still soft and moist — the quail egg should be just set with a barely-soft yolk.',
            tip: 'The lid is essential — it traps steam that cooks the top of the cake and the topping. Without a lid the top stays raw while the bottom burns. Any pot lid that covers the pan works.',
        },
        {
            title: 'Pry, pair, and serve immediately',
            description: 'Loosen each cake with a thin spatula or the traditional metal pry tool and lift out. The Phan Rang serving style: press two cakes together face-to-face into a sandwich, place in a bowl, and spoon scallion oil generously over them. Stir the julienned green mango into the dipping sauce. Each diner takes a pair of cakes, dunks it entirely into their bowl of diluted fish sauce, and eats it dripping. Bánh căn is eaten continuously as the cakes come off the mold — the cook eats last.',
            tip: 'Bánh căn must be eaten within minutes — the crisp base softens fast under the scallion oil. This is why the dish is always cooked at the table or eaten standing at the vendor cart. Cook in rounds and serve each round immediately rather than accumulating a pile.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
