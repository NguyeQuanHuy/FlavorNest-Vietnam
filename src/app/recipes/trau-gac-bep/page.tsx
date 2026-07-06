'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'trau-gac-bep',
    title: 'Trâu Gác Bếp (Vietnamese Smoked Buffalo Jerky)',
    subtitle: 'Buffalo meat marinated in lemongrass, galangal, and mac khen pepper, then dried over a wood fire until the outside is deeply smoky and the inside remains tender. The preserved meat of the northern mountain minorities — made for months, eaten for years.',
    category: 'APPETIZER',
    difficulty: 'Hard',
    totalTime: '48 hr',
    rating: 4.9,
    baseServings: 6,
    heroImage: '/images/recipes/trau-gac-bep.jpg',
    intro: `Trâu gác bếp — buffalo hung above the stove — is the preserved meat of the Thái, H'Mông, and other mountain minority communities of northwestern Vietnam. The name describes the method exactly: strips of buffalo meat, marinated in a spice paste of lemongrass, galangal, mac khen pepper (Sichuan pepper's wilder mountain cousin), and local herbs, are hung on bamboo racks above the wood-burning kitchen stove. The slow, continuous smoke from below — not a smokehouse, not a dedicated fire, but the daily cooking fire of an active household — dries and smokes the meat over weeks and months. The result is a jerky unlike any other: intensely smoky, deeply savory, with a complexity from the mountain spices that is entirely its own. In Hanoi restaurants it is served as a premium appetizer, shredded and eaten with chili salt. In the mountain villages, it is cut from the rack as needed, year-round, to supplement a meal or feed guests who arrive without notice. This recipe adapts the technique for a home oven and stovetop smoker — the result is not identical to the months-long village version but captures its essential character.`,
    ingredientSections: [
        {
            title: 'Meat',
            items: [
                { amount: 800, unit: 'g', name: 'buffalo flank or beef flank', note: 'buffalo preferred — richer, leaner, more flavor. Beef flank is an accessible substitute.' },
            ],
        },
        {
            title: 'Spice marinade',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk only, finely minced — almost a paste' },
                { amount: 30, unit: 'g', name: 'fresh galangal (riềng)', note: 'peeled and minced. Substitute: fresh ginger if unavailable, though flavor differs.' },
                { amount: 1, unit: 'tbsp', name: 'mac khen pepper (hạt mắc khén)', note: 'Sichuan-like mountain pepper from NW Vietnam — available at Vietnamese specialty stores. Substitute: Sichuan pepper at half the quantity.' },
                { amount: 5, name: 'garlic cloves, minced' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'turmeric powder', note: 'for the characteristic golden color' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'For smoking (home method)',
            items: [
                { amount: 3, unit: 'tbsp', name: 'wood chips', note: 'hickory, applewood, or lychee wood — soaked 30 minutes in water' },
                { amount: 1, unit: 'tbsp', name: 'raw rice', note: 'added to smoking mixture for a Vietnamese-specific smoke note' },
                { amount: 1, unit: 'tsp', name: 'sugar', note: 'added to smoking mixture — caramelizes and adds color' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, unit: 'tsp', name: 'mac khen pepper, lightly toasted', note: 'ground with salt as dipping mixture' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 1, name: 'bunch fresh herbs', note: 'Vietnamese coriander, perilla, mint — for wrapping' },
            ],
        },
    ],
    steps: [
        {
            title: 'Slice the meat with the grain',
            description: 'Unlike most meat preparations where you slice against the grain for tenderness, trâu gác bếp is sliced WITH the grain — along the muscle fibers. Cut the flank into strips 3-4cm wide and about 15-20cm long. Slicing with the grain produces long muscle fiber strips that dry evenly without crumbling and have the characteristic chewy-tender texture of the original. The strips should be uniform in thickness — about 2cm.',
            tip: 'Freeze the meat for 30 minutes before slicing — it firms up and allows cleaner, more uniform cuts. Uniform thickness is critical for even drying.',
        },
        {
            title: 'Make the spice paste and marinate',
            description: 'Toast mac khen pepper briefly in a dry pan until fragrant — 1 minute. Pound or grind to a coarse powder. Combine with minced lemongrass, galangal, garlic, fish sauce, sugar, salt, turmeric, and oil into a thick paste. Coat every strip of meat completely, pressing the paste into the surface. Marinate in the refrigerator for minimum 12 hours — 24 hours is better. The lemongrass and galangal need time to penetrate the dense muscle fibers.',
            tip: 'The marinade paste should smell aggressively fragrant — this is correct. The smoking process will mellow some of the raw aromatics, but the initial intensity is needed to season the meat throughout.',
        },
        {
            title: 'Dry the marinated meat',
            description: 'Remove the meat from the refrigerator and pat lightly with paper towels to remove excess marinade. Lay the strips on a wire rack set over a baking sheet. Air-dry at room temperature for 2 hours — this forms a slightly tacky surface (called a pellicle) that the smoke will adhere to. A fan placed nearby speeds this process.',
            tip: 'The pellicle step is what makes smoke stick to the meat rather than beading off. Wet meat repels smoke. This step is often skipped in home recipes and always results in pale, weakly-smoked jerky.',
        },
        {
            title: 'Home smoking method',
            description: 'Line a wok or deep pan with two layers of heavy foil. Place the wood chips, raw rice, and sugar in the center of the foil. Place a wire rack over the smoking mixture. Arrange the meat strips on the rack — not overlapping. Cover the wok tightly with a lid or wrap with foil. Heat on high until you see the first wisps of smoke, then reduce to medium-low. Smoke for 25-30 minutes. The smoke environment temperatures should stay around 80-100°C.',
            tip: 'The rice and sugar in the smoking mixture is a Vietnamese technique borrowed from tea-smoking — it adds a particular sweetness and color to the smoke that wood chips alone do not produce.',
        },
        {
            title: 'Finish in a low oven',
            description: 'After smoking, transfer the meat strips on the rack to an oven preheated to 80°C. Dry for 3-4 hours until the exterior is firm and dry to the touch, the meat has reduced significantly in size, and the strips feel leathery but still have slight give when bent. Fully dried strips should not crack when bent — they should flex. If they snap, they are over-dried.',
            tip: 'The texture target: firm and chewy like jerky, but not brittle. The interior should be darker than raw meat but retain a slight pink. Over-drying produces a hard, flavorless result.',
        },
        {
            title: 'Serve and store',
            description: 'Shred the smoked buffalo by hand into irregular pieces or serve as whole strips. Serve with mac khen-salt dipping mixture (toast mac khen briefly, pound with salt), fresh lime wedges, sliced chili, and a plate of fresh herbs for wrapping. The traditional eating method: tear a piece of meat, wrap in perilla or mint, dip in the mac khen salt, eat. Store remaining jerky wrapped in cloth or paper at room temperature — it keeps for 2 weeks. Refrigerated it keeps for 2 months.',
            tip: 'Room temperature storage is correct for fully dried jerky — refrigeration introduces moisture and softens the exterior. The traditional version hanging above a stove keeps for months without refrigeration.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
