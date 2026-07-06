'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ba-chi-quay',
    title: 'Ba Ch? Quay (Vietnamese Crispy Pork Belly)',
    subtitle: 'Pork belly scored, salted, and air-dried for 24 hours then roasted at extreme heat until the skin blisters into hundreds of crackling bubbles that shatter on the teeth — the Vietnamese-Cantonese preparation that requires patience, rewards it completely, and produces the crispiest pork skin achievable in a home oven.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '24 hr + 1 hr roasting',
    rating: 4.9,
    baseServings: 6,
    heroImage: '/images/recipes/ba-chi-quay.jpg',
    intro: `Ba ch? quay is the Vietnamese version of Cantonese siu yuk — crispy roast pork belly — the preparation that Chinese-Vietnamese communities in Ch? L?n and coastal cities have maintained since the migration of Cantonese and Teochew communities to Vietnam generations ago. The technique has Vietnamese inflections: the seasoning of the meat side typically includes five-spice and fish sauce alongside the Chinese soy and Shaoxing wine, and the serving accompaniments — nu?c ch?m, fresh herbs, cucumber — are more Vietnamese than Chinese. But the core technique is pure Cantonese: the pork skin scored, salted, dried overnight in the refrigerator until the skin surface is completely dry and slightly papery, then roasted at very high heat until the salt and the dry skin surface create hundreds of small puffed bubbles — the crackling — that collapse into a shatteringly crisp layer when bitten. The key variables are three: the scoring of the skin (shallow and regular, allowing each section to expand independently during roasting), the dryness of the skin surface (achieved through overnight air-drying in the refrigerator), and the temperature of the final blast of heat (as high as the oven can go, 230°C minimum, for the last 20-25 minutes). Get these three right and the result is crackling that shatters. Get any one wrong and the skin is tough, flat, or uneven. This is the most technically demanding Vietnamese pork preparation and the most visually dramatic. When it works — and when it works well — it is one of the great achievements of home cooking.`,
    ingredientSections: [
        {
            title: 'Pork belly',
            items: [
                { amount: 1.2, unit: 'kg', name: 'pork belly, skin-on (ba ch? heo)', note: 'flat piece, even thickness, skin intact and without hair. Ask the butcher for a flat, evenly thick section — uneven thickness produces uneven crackling.' },
            ],
        },
        {
            title: 'Meat-side marinade',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'five-spice powder (ngu v? huong)' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 2, name: 'garlic cloves', note: 'minced and rubbed into the meat side' },
                { amount: 1, unit: 'tbsp', name: 'Shaoxing wine or dry rice wine' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
            ],
        },
        {
            title: 'Skin preparation',
            items: [
                { amount: 2, unit: 'tsp', name: 'coarse sea salt', note: 'rubbed thoroughly over the skin after scoring — the only thing that goes on the skin side' },
                { amount: 1, unit: 'tsp', name: 'rice vinegar', note: 'brushed over the scored skin — helps the skin dry and produces more even blistering' },
            ],
        },
        {
            title: 'Dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'hoisin sauce', note: 'the classic ba ch? quay dipping sauce base' },
                { amount: 1, unit: 'tbsp', name: 'peanut butter or crushed peanuts', note: 'adds body' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 1, unit: 'tbsp', name: 'warm water', note: 'to thin to dipping consistency' },
                { amount: 1, name: 'garlic clove', note: 'minced' },
            ],
        },
        {
            title: 'Vietnamese accompaniments',
            items: [
                { amount: 3, unit: 'tbsp', name: 'nu?c ch?m', note: 'standard fish sauce dipping sauce — served alongside the hoisin for contrast' },
                { amount: 1, name: 'cucumber', note: 'sliced' },
                { amount: 1, name: 'bunch fresh herbs', note: 'mint, Vietnamese coriander, perilla' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice or broken rice (com t?m)' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Score the skin — the most critical step',
            description: 'Using a sharp knife, score the pork skin in parallel lines 1cm apart — cut through the skin and into the fat below by about 3-4mm, but do not cut into the meat. Then score in the perpendicular direction to create a crosshatch of 1cm squares. The scoring must be deep enough to allow each square to expand independently during roasting, but not so deep that the skin tears away from the fat during the blistering. Use a sharp knife or a specialized Cantonese skin-scoring tool if available.',
            tip: 'The evenness of the scoring determines the evenness of the crackling. Irregular scoring produces some sections that over-blister and some that barely puff. Take 5 minutes on this step — it determines the entire result. A sharp blade makes clean cuts; a dull blade tears and produces ragged scores that close up during drying.',
        },
        {
            title: 'Season the meat side and skin',
            description: 'Flip the pork belly meat-side up. Rub thoroughly with five-spice, salt, sugar, white pepper, minced garlic, Shaoxing wine, and soy sauce. Work the seasoning deep into any natural crevices in the meat. Flip back to skin-side up. Rub coarse salt firmly into every score line and over the entire skin surface. Brush rice vinegar over the salted skin. The vinegar helps the salt adhere into the score lines and assists with the drying process.',
            tip: 'The meat side takes seasoning and the skin side takes only salt and vinegar — no oil, no sauce, nothing that would prevent the skin from drying. Any fat or oil on the skin surface prevents the air-drying from working completely and produces soft rather than crackling skin.',
        },
        {
            title: 'Air-dry uncovered in the refrigerator — 24 hours',
            description: 'Place the pork belly skin-side up on a wire rack over a tray. Refrigerate uncovered for 24 hours — minimum 12 hours, 24 is significantly better. The refrigerator removes moisture from the skin surface continuously. After 24 hours the skin should feel completely dry — not tacky, not damp — and slightly papery to the touch. The salt will have drawn some moisture then reabsorbed. The skin surface should look slightly translucent at the score lines.',
            tip: 'The 24-hour uncovered refrigeration is the step that most home recipes rush and that most consistently causes failure. 12 hours produces reasonable crackling. 24 hours produces extraordinary crackling. 36 hours is the ceiling — beyond that the skin begins to dry unevenly. Place the rack away from other foods in the refrigerator that release moisture.',
        },
        {
            title: 'Roast at moderate heat first — meat cooks through',
            description: 'Remove the pork belly from the refrigerator 30 minutes before roasting. Preheat oven to 180°C. Place the pork belly skin-side up on a wire rack in a roasting tray. Roast at 180°C for 30-35 minutes — this cooks the meat through without burning the skin. The skin at this stage should be turning golden but not yet blistered.',
            tip: 'The two-temperature method — moderate first, extreme second — is the technique that produces cooked meat and crackling skin simultaneously. High heat from the start produces crackling before the meat is done; moderate heat from the start produces cooked meat but flat skin.',
        },
        {
            title: 'Blast at maximum heat — the crackling forms',
            description: 'Increase the oven to its maximum temperature — 230°C minimum, 250°C if your oven reaches it. Continue roasting for 20-25 minutes, watching constantly from the 15-minute mark. The skin will begin to blister — small bubbles appearing across the scored surface. As the temperature rises, more bubbles form and expand. The crackling is done when the entire skin surface is covered in golden, puffed bubbles with darker patches at the edges of each square. The sound when tapped with a finger should be hollow.',
            tip: 'Watch the pork constantly during the blast phase — the difference between perfect crackling and burnt skin is 3-4 minutes at these temperatures. If some areas are darkening faster than others, move the tray to a lower rack or rotate it. Never leave the kitchen during the blast phase.',
        },
        {
            title: 'Rest, slice, and serve',
            description: 'Remove from the oven. Rest on the rack for 10 minutes — do not cover, which would soften the crackling with trapped steam. Slice with a sharp, heavy knife or cleaver — the crackling will shatter at the first cut, which is the sound you have been working toward. Serve with hoisin dipping sauce, nu?c ch?m, cucumber, fresh herbs, and steamed rice. Eat immediately — ba ch? quay crackling softens within 20 minutes of cutting.',
            tip: 'Slice at the table if possible — the sound of the crackling shattering under the knife is part of the experience and lets diners know before they taste what the texture will be. A crackling that shatters is a crackling that was made correctly.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
