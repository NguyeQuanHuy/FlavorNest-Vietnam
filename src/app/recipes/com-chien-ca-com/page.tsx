'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'com-chien-ca-com',
    title: 'Cơm Chiên Cá Cơm (Anchovy Fried Rice)',
    subtitle: 'Day-old rice stir-fried at maximum wok heat with dried anchovies, egg, garlic, and spring onion — the Vietnamese fried rice where the dried anchovies provide both the protein and all the seasoning needed, producing a bowl that is simultaneously the simplest and one of the most satisfying quick meals in the everyday Vietnamese kitchen.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.8,
    baseServings: 2,
    heroImage: '/images/recipes/com-chien-ca-com.jpg',
    intro: `Cơm chiên cá cơm is the anchovy fried rice — the Vietnamese fried rice preparation that uses dried anchovies (cá cơm khô) as both the primary protein and the primary seasoning element, producing a dish where the addition of fish sauce, soy sauce, or salt becomes unnecessary because the intensely savory dried anchovies provide all the salinity and umami that the fried rice requires. The dish belongs to the category of Vietnamese quick meals that skilled home cooks assemble in under 15 minutes from pantry ingredients: day-old rice, a jar of dried anchovies, eggs, garlic, and spring onion — the five ingredients that are almost always present in a Vietnamese kitchen — combined at maximum wok heat into a fried rice that is more specifically flavored and more satisfying than most restaurant versions made with more elaborate ingredients. The technique follows the standard Vietnamese cơm chiên structure: maximum heat, day-old rice that has dried slightly and separates grain by grain in the wok, egg scrambled in the hot oil before the rice goes in, and the aromatics and protein elements added in a specific sequence that ensures each element is at its best when the rice arrives. The specific adaptation for cá cơm is the frying of the dried anchovies at the beginning of the process — before the egg, before the rice — until they are golden and crispy in the wok oil, becoming the flavored oil that the subsequent ingredients cook in. This anchovy-infused wok oil is the preparation's foundation: it carries the marine-savory character of the anchovies into every grain of rice without additional seasoning, producing the specific depth of flavor that makes cơm chiên cá cơm different from other fried rice preparations that add protein on top of a separately seasoned rice.`,
    ingredientSections: [
        {
            title: 'Rice and anchovies',
            items: [
                { amount: 400, unit: 'g', name: 'day-old cooked jasmine rice', note: 'cold from the refrigerator — the dry surface of cold day-old rice separates grain by grain in the wok. Freshly cooked rice produces clumping.' },
                { amount: 60, unit: 'g', name: 'dried anchovies (cá cơm khô)', note: 'the small variety — 3-5cm. Checked for freshness. These provide all the seasoning for the fried rice.' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'the anchovies will fry in this oil and flavor it' },
            ],
        },
        {
            title: 'Aromatics and egg',
            items: [
                { amount: 2, name: 'large eggs', note: 'beaten with a pinch of salt and white pepper' },
                { amount: 4, name: 'garlic cloves', note: 'thinly sliced' },
                { amount: 3, name: 'shallots', note: 'thinly sliced' },
                { amount: 1, name: 'fresh red chili', note: 'sliced — optional heat' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 4, name: 'spring onions', note: 'cut into 2cm pieces — added in the final 30 seconds' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'freshly ground' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'added off-heat' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'taste first — the dried anchovies may provide enough salt already' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 2, name: 'fried eggs, sunny side up', note: 'optional — placed on top of the fried rice for richness' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 2, unit: 'tbsp', name: 'crispy fried shallots', note: 'scattered over — extra crunch' },
            ],
        },
    ],
    steps: [
        {
            title: 'Fry the anchovies first — build the flavored oil',
            description: 'Heat oil in a wok over maximum heat until smoking. Add the dried anchovies. Fry for 60-90 seconds, stirring continuously, until the anchovies are golden and crispy and the oil has turned slightly amber from the anchovy flavor compounds. Remove half the anchovies and set aside — these will be scattered over the finished rice as a crispy topping. Leave the remaining half in the wok with the flavored oil. This is the foundation: anchovy-infused oil that will cook every subsequent ingredient.',
            tip: 'Removing half the anchovies before adding the other ingredients is the technique that provides two anchovy experiences in the finished dish — the anchovies that remain in the wok during cooking absorb into the rice and provide background savory depth; the anchovies set aside and returned at the end remain crispy and provide the specific crunchy, concentrated anchovy bite that makes the dish texturally interesting. Half soft-absorbed, half crispy-topping.',
        },
        {
            title: 'Fry garlic and shallots in the anchovy oil',
            description: 'Add sliced garlic and shallots to the anchovy-flavored oil. Fry for 45 seconds until golden. The garlic and shallots cook in the already-flavored oil and absorb the anchovy character. Add sliced chili if using. The wok at this point should smell of caramelized garlic and dried anchovy together — the specific aroma of cơm chiên cá cơm that is recognizable from across the room.',
            tip: 'The sequence — anchovies first, then garlic and shallots, then egg, then rice — is the specific order that builds flavors progressively in the wok oil. Each ingredient cooks in oil already flavored by the previous ones, producing a layered depth that cooking each element separately cannot achieve.',
        },
        {
            title: 'Scramble the egg in the hot wok',
            description: 'Push the garlic and shallots to the edge of the wok. Pour the beaten egg into the center of the hot wok. Leave for 10 seconds until the egg begins to set at the edges. Break and scramble with a spatula — large, soft curds rather than small crumbles. When the egg is 80% set but still slightly wet, immediately add all the cold rice.',
            tip: 'The 80%-set egg technique for Vietnamese fried rice — adding the rice while the egg is still slightly wet — is the method that coats every grain of rice with egg rather than producing distinct egg pieces in the rice. The wet egg and the cold rice meet in the hot wok and the egg dries onto the rice surface as the wok heat returns. Every grain coated; no distinct egg clumps.',
        },
        {
            title: 'Stir-fry the rice at maximum heat — 3 minutes',
            description: 'Add the cold rice to the wok with the partially-set egg. Stir-fry continuously at maximum heat, pressing the rice against the wok surface and then folding it over repeatedly. The cold rice will lower the wok temperature significantly — maintain maximum heat. At 2 minutes, the rice grains should be separated and some grains beginning to develop light golden spots from direct wok contact. Taste — the dried anchovies should have seasoned the rice sufficiently. Add fish sauce only if more salt is needed.',
            tip: 'The golden spots on individual rice grains — called wok hei in Chinese cooking terminology — are the indicator of correctly executed Vietnamese fried rice at maximum heat. Each golden spot is a point where the rice grain had direct contact with the wok surface and caramelized slightly. At 3 minutes of continuous maximum-heat stir-frying, approximately 20-30% of the grains should show these spots.',
        },
        {
            title: 'Add spring onion, finish, and plate',
            description: 'Add spring onion pieces and white pepper. Toss 30 seconds. Add sesame oil off-heat. Transfer to plates. Scatter the reserved crispy anchovies over the finished rice. Add crispy fried shallots. Place a sunny-side-up egg on top if using. Serve with cucumber, rau răm, and lime. The finished cơm chiên cá cơm: separated golden-spotted rice grains, the crispy anchovy pieces visible throughout and on top, the spring onion green scattered through, the egg yolk if using.',
            tip: 'The sunny-side-up egg placed on top of cơm chiên cá cơm — broken at the table so the yolk runs through the fried rice — is the optional addition that makes the dish more substantial and provides a richness that the intensely savory anchovies benefit from. The yolk running through anchovy fried rice and coating each grain is one of the most satisfying additions to an already-complete dish.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
