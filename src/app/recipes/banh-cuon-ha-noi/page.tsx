'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-cuon-ha-noi',
    title: 'Bánh Cuốn Hà Nội (Hanoi Steamed Rice Rolls)',
    subtitle: 'Paper-thin sheets of rice batter steamed on a cloth drum and filled with seasoned minced pork and wood ear mushrooms — rolled, sliced, and served with crispy fried shallots, cucumber, fresh herbs, and a fragrant fish sauce dipping broth. The Hanoi breakfast that requires no spoon.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-cuon-ha-noi.jpg',
    intro: `Bánh cuốn Hà Nội is the northern Vietnamese breakfast that street vendors have been making before dawn since before anyone can remember — a cloth stretched over a pot of boiling water, a thin slick of rice batter spread over the cloth with a single practiced circular motion, a lid held for thirty seconds until the sheet sets, a bamboo stick run under the edge to release it, and a spoonful of filling placed before the whole thing is rolled into a cylinder and sliced. The batter is pure fermented rice — soaked overnight and ground to a liquid thinner than whole milk, with a portion of the water replaced by the soaking liquid which gives the sheets a faint sourness that the Hanoi version is specific about. The filling is pork and wood ear mushroom, seasoned simply with fish sauce, shallots, and black pepper — the mushroom not for its flavor but for its crunch, which persists through the steaming and provides the textural contrast that plain pork filling cannot. The finished rolls are placed on a plate with sliced cucumber, a handful of bean sprouts, a sprig of Vietnamese balm (rau kinh giới) that appears in Hanoi bánh cuốn specifically and nowhere else, and a generous drizzle of shallot oil. The dipping broth — diluted fish sauce with a splash of vinegar and a few slices of chili — arrives in a small bowl alongside. The complete experience: tear a piece of the silky, slightly translucent roll with chopsticks, dip entirely into the broth, eat with a strand of the herbs. The rice sheet should be so thin you can see through it.`,
    ingredientSections: [
        {
            title: 'Rice batter (start the night before)',
            items: [
                { amount: 300, unit: 'g', name: 'long-grain rice (gạo tẻ)', note: 'soaked in cold water overnight — the traditional method. The soaking water is partially used in the batter for a faint natural sourness.' },
                { amount: 30, unit: 'g', name: 'tapioca starch (bột năng)', note: 'makes the sheets more elastic and less likely to tear' },
                { amount: 500, unit: 'ml', name: 'water total', note: '300ml fresh cold water + 200ml of the rice soaking water' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'neutral oil', note: 'prevents sticking to the cloth' },
            ],
        },
        {
            title: 'Pork and mushroom filling',
            items: [
                { amount: 300, unit: 'g', name: 'minced pork (thịt heo bằm)', note: '20% fat content — lean pork makes a dry filling' },
                { amount: 30, unit: 'g', name: 'dried wood ear mushrooms (mộc nhĩ)', note: 'soaked 20 minutes until fully rehydrated, squeezed dry, finely chopped — their crunch is the point' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'for stir-frying the filling' },
            ],
        },
        {
            title: 'Shallot oil and crispy shallots',
            items: [
                { amount: 5, name: 'shallots', note: 'thinly sliced' },
                { amount: 100, unit: 'ml', name: 'neutral oil' },
            ],
        },
        {
            title: 'Dipping broth (nước chấm bánh cuốn)',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'rice vinegar', note: 'the Hanoi bánh cuốn addition — gives the dipping broth a cleaner edge than lime alone' },
                { amount: 2, unit: 'tbsp', name: 'sugar' },
                { amount: 200, unit: 'ml', name: 'warm water' },
                { amount: 2, name: 'garlic cloves', note: 'thinly sliced — left whole rather than minced in the northern style' },
                { amount: 1, name: 'fresh red chili', note: 'thinly sliced' },
                { amount: 1, name: 'lime', note: 'half a lime — squeezed in' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'cucumber', note: 'thinly sliced' },
                { amount: 100, unit: 'g', name: 'bean sprouts', note: 'briefly blanched' },
                { amount: 1, name: 'bunch rau kinh giới (Vietnamese balm / lemon balm)', note: 'the Hanoi-specific herb for bánh cuốn — slightly citrusy, minty. Substitute: perilla and mint combined.' },
                { amount: 200, unit: 'g', name: 'chả lụa (Vietnamese steamed pork roll)', note: 'thinly sliced — served alongside in the traditional Hanoi version' },
            ],
        },
    ],
    steps: [
        {
            title: 'Soak rice overnight and blend the batter',
            description: 'Rinse the rice and soak in plenty of cold water overnight — minimum 8 hours. Reserve 200ml of the soaking water before draining. Drain the rice. Blend the soaked rice with 300ml fresh cold water, the 200ml soaking water, tapioca starch, salt, and oil in a high-speed blender for 2-3 minutes until completely smooth — rub between fingers, no grit. The batter should be very thin — thinner than whole milk, almost like water with a slight opacity. Rest 30 minutes.',
            tip: 'Using the soaking water in the batter is the traditional northern technique that adds a faint natural sourness to the sheets — the slight fermentation of the overnight soak carries through. A bánh cuốn made with fresh water only tastes different, flatter. Do not discard the soaking water.',
        },
        {
            title: 'Cook the filling',
            description: 'Heat oil in a pan over medium-high heat. Fry minced shallots and garlic until golden — 2 minutes. Add minced pork and break up with a spatula. Cook for 4-5 minutes until completely cooked and beginning to caramelize. Add the finely chopped wood ear mushrooms. Season with fish sauce, sugar, black pepper, and sesame oil. Cook another 2 minutes until the filling is fragrant and slightly sticky, not wet. Cool to room temperature before filling the rolls — hot filling tears the delicate rice sheets.',
            tip: 'The filling must be cool and relatively dry before use. Wet filling produces wet rolls that fall apart. Slightly overcooked, caramelized filling is better than undercooked wet filling.',
        },
        {
            title: 'Make the crispy shallots and shallot oil',
            description: 'Place sliced shallots and oil in a cold pan. Heat together over medium heat — the shallots fry gradually as the oil warms. Cook, stirring occasionally, until golden and just crispy — about 8-10 minutes. Remove shallots immediately to paper towels. The oil remaining in the pan is the shallot oil. Both the crispy shallots and the oil are essential finishing elements for bánh cuốn.',
            tip: 'Cold-start frying produces evenly golden shallots. Hot oil produces shallots that are dark on the outside and raw in the center. Remove from the oil when light golden — they darken further as they cool.',
        },
        {
            title: 'Set up the steamer — the cloth method',
            description: 'Stretch a piece of thin cotton cloth or cheesecloth tightly over the top of a wide pot of boiling water — secure with a rubber band or string. The cloth must be taut and smooth. Alternatively, use a non-stick pan with a glass lid and brush lightly with oil. Bring the water to a full rolling boil — the steam must be vigorous and continuous for the sheets to cook in 30 seconds.',
            tip: 'The cloth drum method is traditional and produces the best results. Cheesecloth doubled works; a single layer of thin cotton works. Whatever cloth is used, it must be stretched taut — loose cloth produces uneven, wrinkled sheets.',
        },
        {
            title: 'Steam the sheets — the technique',
            description: 'Stir the batter. Pour a small ladle (about 60ml) onto the cloth in one motion and immediately use the bottom of the ladle to spread it in a thin, even circle — working from the center outward in one or two passes. The batter should set almost immediately into a thin, opaque sheet. Cover with a lid for 25-30 seconds. The sheet is ready when the edges begin to pull away slightly and the surface looks uniformly matte. Slide a thin spatula or bamboo stick under one edge and peel the sheet off the cloth.',
            tip: 'Speed and confidence are the technique. A hesitant, slow spreading produces thick patches. One practiced circular motion, thin and even. The first two sheets will be imperfect as you learn the heat and timing — accept this and adjust.',
        },
        {
            title: 'Fill, roll, and serve',
            description: 'Place the sheet on an oiled wooden board or plate. Spoon a line of filling along the center of the lower third. Fold the bottom edge up over the filling, then roll forward into a cylinder. Slice into 3-4 pieces. Arrange on a plate. Drizzle warm shallot oil generously over the rolls. Top with crispy fried shallots. Serve with dipping broth in individual bowls, cucumber slices, bean sprouts, rau kinh giới, and sliced chả lụa alongside.',
            tip: 'Rolls should be served immediately as they are made — bánh cuốn left to sit dries out and the sheets become tough. The traditional street vendor serves each roll the moment it comes off the cloth. At home, serve in rounds of 4-6 rolls, eat them, then make the next round.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}