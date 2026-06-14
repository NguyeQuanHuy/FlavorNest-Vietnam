'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'de-thui-ninh-binh',
    title: 'Dê Thui Ninh Bình (Ninh Bình Whole-Roasted Goat)',
    subtitle: 'A whole young goat spit-roasted over wood fire until the skin turns crispy and golden and the flesh beneath stays pink and juicy — the Ninh Bình preparation where fire is the only seasoning applied to the exterior and the dipping sauce does all the work that spice rubs do elsewhere.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '3 hr',
    rating: 4.9,
    baseServings: 8,
    heroImage: '/images/recipes/de-thui-ninh-binh.jpg',
    intro: `Dê thui is the whole-roasted goat of Ninh Bình — a preparation that sits at the center of the province's food identity and is served at every significant gathering: family celebrations, village festivals, the meals that accompany the limestone karst boat trips on Tràng An and Tam Cốc. Thui means to roast or sear over direct fire, and dê thui Ninh Bình is specifically whole-fire cooking: a young goat (dê sữa — milk-fed kid, or dê non — young goat under 6 months) mounted on a bamboo or metal spit and rotated slowly over a wood fire for two to three hours until the skin has rendered completely and crisped to a golden, crackling surface while the meat beneath remains pink and juicy from the internal fat that bastes it continuously during the rotation. The preparation that makes Ninh Bình dê thui specific is its restraint: the exterior of the goat receives only salt — no marinade, no spice rub, no seasoning beyond coarse salt rubbed into the skin before the fire. The fire is the preparation. The dipping sauce — specifically the mắm tôm chanh of northern Vietnam, fermented shrimp paste thinned with lime juice, seasoned with fresh chili and sugar until it is pungent, bright, and slightly sweet — does all the aromatic work that other preparations do with rubs and marinades. The contrast of the neutral, fatty, fire-crisped skin against the intensely funky, lime-bright dipping sauce is the fundamental eating experience of Ninh Bình. It is also one of the most difficult preparations in Vietnamese cooking to reproduce at home because it requires a true fire, patience, and a whole young goat — but the technique adapted to a leg or shoulder section in a very hot oven produces a result that is recognizably related to the original.`,
    ingredientSections: [
        {
            title: 'Goat',
            items: [
                { amount: 1, name: 'whole young goat (dê non) 6-8kg, cleaned and dressed', note: 'for the authentic version — a milk-fed kid under 6 months is ideal. HOME VERSION: 1.5kg bone-in goat leg or shoulder, skin-on. The technique adapts to individual cuts.' },
                { amount: 2, unit: 'tbsp', name: 'coarse sea salt', note: 'the only exterior seasoning — rubbed over the entire skin surface' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil', note: 'rubbed over the salt to help it adhere and produce even crisping' },
            ],
        },
        {
            title: 'Interior seasoning (for home oven version)',
            items: [
                { amount: 3, name: 'lemongrass stalks', note: 'bruised — stuffed into the leg cavity' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'sliced and stuffed inside' },
                { amount: 4, name: 'garlic cloves', note: 'smashed and stuffed inside' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'rubbed inside the cavity only — not on the exterior skin' },
            ],
        },
        {
            title: 'Mắm tôm chanh (the essential dipping sauce)',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fermented shrimp paste (mắm tôm)', note: 'northern Vietnamese style — lighter purple, slightly milder than southern versions' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice', note: 'about 2 limes — added gradually, the lime transforms the paste' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar', note: 'balances the pungency' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 1, name: 'garlic clove', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'warm water', note: 'to thin to dipping consistency' },
            ],
        },
        {
            title: 'Table accompaniments',
            items: [
                { amount: 1, name: 'head butter lettuce', note: 'leaves for wrapping' },
                { amount: 1, name: 'bunch Vietnamese balm (rau kinh giới)', note: 'the essential herb for dê thui' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'cucumber', note: 'sliced' },
                { amount: 2, name: 'limes, extra wedges' },
                { amount: 20, name: 'sheets rice paper (bánh tráng)', note: 'for wrapping' },
                { amount: 200, unit: 'g', name: 'rice vermicelli', note: 'cooked and cooled' },
            ],
        },
    ],
    steps: [
        {
            title: 'WHOLE FIRE METHOD (authentic): Prepare the spit',
            description: 'Thread the dressed whole goat onto a heavy metal or bamboo spit running from mouth to tail cavity, ensuring the animal is balanced — uneven weight causes irregular rotation. Tie the legs firmly to the spit with wire to prevent them from hanging and cooking unevenly. Rub the entire exterior with coarse salt and oil — every surface, inside the leg joints, around the ears, everywhere the skin is exposed. Build a hardwood fire (lychee wood or longan wood preferred) and allow to develop a deep bed of glowing coals — 45 minutes minimum.',
            tip: 'The fire must be a bed of coals, not active flame. Open flame chars the skin before the interior cooks through. Glowing coals at 200-220°C produce the slow, even roasting that results in crisped skin and pink flesh simultaneously.',
        },
        {
            title: 'HOME OVEN METHOD: Salt-dry and high-heat roast',
            description: 'Pat the goat leg or shoulder completely dry. Rub salt and oil all over the skin. Stuff the cavity with lemongrass, ginger, garlic, and fish sauce. Place skin-side up on a wire rack over a roasting tray. Refrigerate uncovered for 4-8 hours or overnight — the skin dries further and crisps dramatically better. Remove from refrigerator 30 minutes before roasting. Roast at 160°C for 1.5 hours until cooked through. Increase to 230°C for the final 20-25 minutes until the skin is golden and crispy.',
            tip: 'The overnight uncovered refrigeration for the home oven version is the step that most closely replicates the air-drying effect of the fire preparation. The skin surface becomes papery and dry, then shatters when the high heat hits it at the end. This technique is identical to the ba chỉ quay skin preparation.',
        },
        {
            title: 'WHOLE FIRE: Rotate continuously — 2 to 3 hours',
            description: 'Rotate the spit continuously, or every 5-7 minutes if not using a motorized rotisserie. The rotation must be constant enough that no single surface faces the coals for more than a few minutes at a time. After 1 hour the skin will have turned from cream-white to pale gold. After 2 hours the skin will be deep golden and beginning to crisp. After 2.5-3 hours (depending on the goat\'s size) the skin should be crackling, uniformly golden, and the thigh joint should run clear when pierced. Rest 20 minutes before carving.',
            tip: 'The visual progression of dê thui over the fire is the education: cream-white at 30 minutes, pale gold at 1 hour, deep gold at 1.5 hours, crackling and blistered gold at 2.5 hours. Each stage has a distinct smell — the raw goat fat smell at the beginning becomes the rich, caramelized roasted fat smell at the end. When the smell changes from cooking fat to caramelized fat, the goat is close to done.',
        },
        {
            title: 'Make the mắm tôm chanh',
            description: 'Place the mắm tôm in a bowl. Add lime juice gradually — the paste will lighten in color and foam slightly as the acid reacts with the fermented paste. Add sugar and stir until dissolved. Add minced chili, garlic, and warm water to reach dipping consistency. Taste: the mắm tôm chanh for dê thui should be assertively pungent, clearly lime-bright, and slightly sweet. It should smell dramatic — this is correct. The pungency mellows against the neutral, fatty goat skin.',
            tip: 'The mắm tôm chanh for dê thui is more intensely flavored than the version served with bún riêu or bánh đa cua — the sauce needs to provide all the seasoning complexity that the unseasoned goat skin lacks. Make it assertive rather than restrained.',
        },
        {
            title: 'Carve and serve',
            description: 'For the whole goat: carve at the table — the crispy skin sections first, then the leg meat, then the rib sections. The skin should shatter when cut. For the oven version: rest 10 minutes, then slice through the skin and flesh. Arrange on a large plate. Serve the mắm tôm chanh in individual bowls. Set out all wrapping herbs, lettuce, cucumber, rice paper, and vermicelli. To eat: tear a piece of crispy skin and lean meat, place on a lettuce leaf or rice paper with herbs, wrap loosely, dip in mắm tôm chanh. Eat immediately — the skin softens within minutes of being cut.',
            tip: 'The eating ritual of dê thui Ninh Bình is communal and unhurried — the whole goat arrives at the center of the table, diners pull pieces from the carcass or receive carved portions, wrap in herbs and lettuce, dip in the mắm tôm chanh, and eat slowly over several hours. This is weekend eating, celebration eating, eating that is inseparable from the occasion.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}