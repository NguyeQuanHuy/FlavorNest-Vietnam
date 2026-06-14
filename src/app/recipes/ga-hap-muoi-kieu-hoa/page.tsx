'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ga-hap-muoi-kieu-hoa',
    title: 'Gà Hấp Muối Kiểu Hoa (Chinese-Style Salt-Steamed Chicken)',
    subtitle: 'Whole chicken rubbed inside and out with salt and five-spice, then steamed over aromatics until the skin is pale gold and silky and the meat is the most tender and juicy it can possibly be — served with ginger-spring onion sauce that is one of the great condiments in Chinese-Vietnamese cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ga-hap-muoi-kieu-hoa.jpg',
    intro: `Gà hấp muối kiểu Hoa is the salt-steamed chicken of Vietnam's Chinese community — the Cantonese, Teochew, and Hakka families of Chợ Lớn and the Chinese-Vietnamese diaspora who brought this technique from Guangdong and kept it intact across generations and oceans. The method is one of the purest in Chinese culinary tradition: a whole chicken, salted and rested to draw moisture to the surface, then steamed over fragrant aromatics until the skin tightens to a pale, slightly burnished gold and the interior stays completely juicy — the steam environment preventing the moisture loss that any dry-heat method would cause. The result is chicken that is simultaneously simple and technically demanding: the simplicity is in the ingredients (a chicken, salt, ginger, and aromatics), the demand is in the timing (even one minute of over-steaming produces a dry bird), and the skill is in the ice bath (which stops the cooking instantly, tightens the skin to a silky smoothness, and produces the gelatinous quality at the joint that marks a properly prepared Chinese steamed chicken). The dipping sauce — ginger-spring onion oil, made by pouring smoking-hot oil over minced ginger and spring onion — is arguably the equal of the chicken itself. In Cantonese cooking it is called 姜葱油 (ginger scallion oil) and it appears wherever a simply prepared protein needs an aromatic counterpoint. With steamed chicken it is definitive.`,
    ingredientSections: [
        {
            title: 'Chicken',
            items: [
                { amount: 1, name: 'whole chicken (1.3-1.5kg)', note: 'free-range strongly preferred — the lean, firm flesh of a free-range bird holds up to steaming far better than commercial chicken. Air-chilled rather than water-chilled if possible.' },
                { amount: 2, unit: 'tsp', name: 'fine sea salt', note: 'for the dry rub inside and out' },
                { amount: 0.5, unit: 'tsp', name: 'five-spice powder (ngũ vị hương)', note: 'rubbed inside the cavity only — a very small amount perfumes the interior without dominating' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'inside the cavity' },
            ],
        },
        {
            title: 'Steaming aromatics',
            items: [
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '5-6 thick slices, smashed — for the steaming liquid' },
                { amount: 3, name: 'spring onions', note: 'tied in a bundle — for the steaming liquid' },
                { amount: 2, name: 'lemongrass stalks', note: 'bruised — the Vietnamese addition to what is otherwise a Cantonese preparation' },
                { amount: 500, unit: 'ml', name: 'water', note: 'for the steaming liquid below the chicken' },
                { amount: 2, unit: 'tbsp', name: 'Shaoxing wine or dry rice wine', note: 'added to the steaming water — the alcohol vapor perfumes the chicken' },
            ],
        },
        {
            title: 'Ginger-spring onion dipping sauce (essential)',
            items: [
                { amount: 60, unit: 'g', name: 'fresh ginger', note: 'finely minced — not grated, not julienned. Minced to almost a paste.' },
                { amount: 4, name: 'spring onions', note: 'green and white parts, thinly sliced' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 100, unit: 'ml', name: 'neutral oil', note: 'heated until smoking — poured over the ginger and spring onion' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'stirred in after the hot oil' },
            ],
        },
        {
            title: 'Optional second dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tbsp', name: 'sesame oil' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 2, unit: 'tbsp', name: 'warm water' },
                { amount: 1, name: 'garlic clove, minced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, name: 'spring onions, extra', note: 'sliced — for scattering over the finished chicken' },
                { amount: 1, name: 'fresh red chili, sliced', note: 'for color' },
                { amount: 4, unit: 'portions', name: 'steamed jasmine rice' },
            ],
        },
    ],
    steps: [
        {
            title: 'Salt and rest the chicken',
            description: 'Pat the chicken completely dry inside and out with paper towels. Rub the exterior with salt thoroughly — every surface including under the wing joints and around the neck. Rub the inside of the cavity with five-spice, white pepper, and a pinch of salt. Stuff the cavity loosely with a few slices of ginger and a spring onion stalk. Place the chicken breast-side up on a rack over a plate. Refrigerate uncovered for 2-4 hours minimum, overnight ideally. The salt draws surface moisture out, which then reabsorbs — this process seasons the skin and dries it slightly for the pale gold finish.',
            tip: 'The uncovered refrigeration is as important as the salt rub. It air-dries the skin surface so that during steaming the skin firms and tightens to the characteristic smooth, slightly burnished appearance rather than remaining flabby and pale white.',
        },
        {
            title: 'Build the steaming setup',
            description: 'Use a steamer or wok with a tight-fitting domed lid large enough to hold the whole chicken with at least 3cm clearance on all sides. Add water, ginger slices, spring onion bundle, bruised lemongrass, and Shaoxing wine to the steamer base. Bring to a vigorous boil. The steam should be rolling before the chicken goes in — insufficient steam in the first minutes produces uneven cooking.',
            tip: 'A wok with a domed lid produces the best result — the dome allows steam to circulate around the whole chicken more evenly than a flat-lidded pot. The steam from all directions is what produces even cooking without turning.',
        },
        {
            title: 'Steam breast-side down — timing is everything',
            description: 'Place the chicken breast-side down on the steaming rack. Cover tightly. Steam over high heat, maintaining a vigorous boil, for the following times: 1.2kg chicken — 28 minutes. 1.3kg — 30 minutes. 1.5kg — 34 minutes. Do not open the lid during steaming — each opening drops the temperature and extends the cooking time unpredictably.',
            tip: 'Breast-side down is the positioning that produces the most evenly cooked bird. The breast, which dries fastest, faces the coolest zone of the steam and is protected by the back and wings facing the heat. This is the Cantonese technique and it works.',
        },
        {
            title: 'Test doneness and ice bath',
            description: 'At the correct time, pierce the thigh joint with a skewer — juices must run completely clear with no pink. If pink, cover and steam 4 more minutes. When done, immediately transfer the chicken to a large bowl of ice water. Submerge completely for 8-10 minutes. The ice bath stops the cooking instantly, contracts the skin to a smooth, silky finish, and produces the slightly gelatinous quality at the joint that indicates a properly prepared Chinese steamed chicken.',
            tip: 'The ice bath is non-negotiable. Without it the chicken continues cooking from residual heat for 5-8 minutes — by the time it reaches the table the breast is overcooked. With the ice bath the cooking stops the moment it enters the water and the result is exactly as intended.',
        },
        {
            title: 'Make the ginger-spring onion sauce — hot oil technique',
            description: 'Combine the finely minced ginger, sliced spring onion, salt, and sugar in a heatproof bowl. Heat neutral oil in a small pan over high heat until smoking — the oil must be genuinely smoking, about 210°C. Pour the smoking oil directly over the ginger and spring onion. It will spit and sizzle intensely — the heat blooms the aromatics and partially cooks them while preserving their freshness. Stir immediately. Add sesame oil. The sauce should be fragrant, bright green and gold, and smell extraordinary.',
            tip: 'The oil must be smoking — not merely hot. Under-temperature oil produces a raw, harsh ginger flavor. Smoking-hot oil cooks the aromatics in the instant of contact, producing the mellowed, fragrant quality that makes this sauce addictive.',
        },
        {
            title: 'Chop and serve',
            description: 'Remove the chicken from the ice bath and pat dry. Let rest 5 minutes at room temperature. Using a sharp cleaver, chop through the bone into serving pieces — Vietnamese style: wings separated, breast sliced through the bone into pieces, thighs and drumsticks chopped. Arrange on a plate. Scatter sliced spring onion and chili over the top. Serve the ginger-spring onion sauce in a small bowl alongside, with steamed rice. The sauce is applied to each piece of chicken at the table — a generous spoonful over each bite.',
            tip: 'Reserve the steaming liquid from the pot — it is a light, fragrant chicken broth from the steaming juices and aromatics. Season with a little fish sauce and serve as a clear soup alongside the meal. Nothing from this preparation should be wasted.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}