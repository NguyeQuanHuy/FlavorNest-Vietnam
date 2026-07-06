'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-tro',
    title: 'Bánh Tro (Vietnamese Alkaline Sticky Rice Dumpling)',
    subtitle: 'Glutinous rice soaked in lye water until translucent and amber, wrapped in bamboo leaves and boiled until the rice becomes uniquely dense, chewy, and slightly alkaline — eaten with honey or palm sugar syrup. The T?t dumpling that tastes like no other rice preparation on earth.',
    category: 'DESSERT',
    difficulty: 'Hard',
    totalTime: '12 hr',
    rating: 4.9,
    baseServings: 12,
    heroImage: '/images/recipes/banh-tro.jpg',
    intro: `Bánh tro — also called bánh gio in the north, bánh tro in the central and south — is the Vietnamese alkaline rice dumpling eaten during the T?t Ðoan Ng? (Dragon Boat Festival) on the fifth day of the fifth lunar month, and increasingly at other times of year by those who simply love its singular texture. The name refers to tro — ash water or lye water — the alkaline solution that transforms glutinous rice from white and opaque to amber-gold and translucent, and changes its texture from the familiar sticky-chewy of normal xôi to something denser, slightly firm, with a clean mineral taste that is unlike any other form of cooked rice. The chemistry is ancient: wood ash dissolved in water produces a strongly alkaline liquid (pH 11-12) that alters the starch structure of the soaked rice, breaking down the amylopectin chains in a way that produces the characteristic translucent, amber appearance and the distinctive alkaline taste. Vietnamese cooks traditionally made lye water by filtering water through wood ash — today food-grade lye water (nu?c tro tàu) is sold in bottles at Asian grocery stores and produces the same result without the wood ash process. Bánh tro is wrapped in bamboo or dong leaves and boiled for several hours — the slow boiling in the leaf wrapper is essential to the final texture. It is served at room temperature, unwrapped at the table, eaten with a drizzle of honey or palm sugar syrup that provides the sweetness the dumpling itself deliberately lacks.`,
    ingredientSections: [
        {
            title: 'Rice and lye water soak',
            items: [
                { amount: 500, unit: 'g', name: 'glutinous rice (g?o n?p)', note: 'short-grain preferred — higher amylopectin content produces better texture after alkaline treatment' },
                { amount: 1.5, unit: 'L', name: 'cold water', note: 'for soaking' },
                { amount: 3, unit: 'tbsp', name: 'lye water (nu?c tro tàu)', note: 'food-grade alkaline solution — available at Vietnamese and Asian grocers, usually in small bottles. Do not substitute with baking soda — different chemical composition.' },
                { amount: 1, unit: 'tsp', name: 'salt', note: 'added to the soaking water' },
            ],
        },
        {
            title: 'Wrapping',
            items: [
                { amount: 24, name: 'dried bamboo leaves (lá tre / lá dong)', note: 'soaked in warm water 2 hours until pliable. Dried bamboo leaves from Asian grocery. Banana leaves can substitute but produce a different flavor.' },
                { amount: 1, name: 'roll kitchen twine or natural raffia', note: 'for tying the dumplings' },
            ],
        },
        {
            title: 'Filling (optional — plain version is traditional)',
            items: [
                { amount: 150, unit: 'g', name: 'split yellow mung beans (d?u xanh)', note: 'soaked 2 hours, steamed until soft, mixed with 1 tbsp sugar and pinch of salt. Optional — many versions are plain rice only.' },
            ],
        },
        {
            title: 'Serving syrups',
            items: [
                { amount: 4, unit: 'tbsp', name: 'honey (m?t ong)', note: 'the classic accompaniment — drizzled generously over the sliced dumpling' },
                { amount: 100, unit: 'g', name: 'palm sugar (du?ng th?t n?t)', note: 'melted with 3 tbsp water into a syrup — the alternative to honey, preferred in southern Vietnam' },
            ],
        },
    ],
    steps: [
        {
            title: 'Soak rice in lye water — minimum 8 hours',
            description: 'Rinse the glutinous rice until the water runs mostly clear. Combine cold water, lye water, and salt in a large bowl. Add the rinsed rice. Stir to distribute the lye water evenly. Soak for minimum 8 hours — overnight is standard, 10-12 hours is better. The rice will change color during soaking: starting white, gradually turning pale gold, then amber-gold as the alkaline solution works on the starch. By 8 hours the rice should be uniformly amber and translucent when held to light. Drain and rinse once lightly before wrapping.',
            tip: 'The color change is the visual indicator of the lye water working. At 4 hours the rice is pale gold. At 8 hours it should be a uniform amber. If still pale after 8 hours, add another tablespoon of lye water and soak 2 more hours.',
        },
        {
            title: 'Understand the lye water safety',
            description: 'Lye water (food-grade, pH 11-12) is safe to use in cooking but should not be ingested undiluted or contact the eyes. Handle the soaking liquid with care. The finished boiled dumpling is completely safe — the alkalinity is neutralized during the long boiling process and contributes only flavor and texture to the finished product. Do not substitute with baking soda or washing soda — the chemical profile is different and produces inferior results.',
            tip: 'Food-grade lye water (nu?c tro tàu) is sold specifically for bánh tro and mooncake production. The small bottles labeled "alkaline solution" or "lye water" at Vietnamese grocery stores are what you need. Never use industrial lye.',
        },
        {
            title: 'Prepare the bamboo leaves',
            description: 'Soak dried bamboo leaves in warm water for 2 hours until fully pliable — they should bend without cracking. Wipe each leaf clean with a damp cloth. For each dumpling you will need 2 leaves: one primary leaf for the cone, one secondary leaf to close the top. The leaves impart a subtle grassy, slightly smoky fragrance to the rice during the long boiling — this fragrance is part of the flavor of bánh tro and cannot be replicated with parchment paper.',
            tip: 'Bamboo leaves that are not sufficiently soaked crack when folded and leak during boiling — the rice falls out into the water. Minimum 2 hours of soaking, longer is better.',
        },
        {
            title: 'Shape and fill the dumplings',
            description: 'Take one bamboo leaf and fold it into a cone shape, overlapping the sides. Place 2-3 tablespoons of drained alkaline-soaked rice into the cone. If using mung bean filling: make a small indentation in the center of the rice, add a teaspoon of mung bean paste, cover with more rice. The rice should fill the cone but leave 1-2cm of space at the top for expansion during boiling. Fold the remaining leaf sections over the top to seal. Tie firmly with kitchen twine — 3-4 wraps around the dumpling, pulling tight.',
            tip: 'The tying must be genuinely firm — loose dumplings unwrap during boiling. Vietnamese grandmothers tie bánh tro so tightly the twine leaves indentations. Pull the twine tight before tying the knot.',
        },
        {
            title: 'Boil for 3-4 hours',
            description: 'Place the tied dumplings in a large pot. Cover completely with cold water — the dumplings must be fully submerged throughout. Bring to a boil, reduce to a steady simmer, and cook for 3-4 hours. Check water level every 30-40 minutes and top up with boiling water — never cold water, which stops the boil. The dumplings are done when the rice is completely cooked through: unwrap one to check — the rice should be uniformly amber-gold throughout with no white opaque center.',
            tip: 'The 3-4 hour boiling time is not negotiable. Under-boiled bánh tro has a white starchy center and the distinctive texture has not fully developed. Over-boiling is nearly impossible — the leaf wrapper protects the rice.',
        },
        {
            title: 'Cool, unwrap, and serve',
            description: 'Remove the dumplings from the pot. Cool to room temperature — minimum 30 minutes. Bánh tro is served at room temperature or slightly cool, never hot. To serve: cut the twine, peel back the bamboo leaves — the dumpling should come away cleanly as a compact golden-amber cone or cylinder. Slice into rounds with a wet knife. Arrange on a plate. Drizzle honey generously over the slices — the honey is essential. Or serve with palm sugar syrup alongside.',
            tip: 'Wet the knife before cutting — the dense alkaline rice sticks to a dry blade and tears rather than slicing cleanly. A wet knife produces smooth, glossy cross-sections that show the amber color at its best.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
