'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-tre-nuong-muoi-ot',
    title: 'Cá Trê Nướng Muối Ớt (Charcoal-Grilled Catfish with Chili Salt)',
    subtitle: 'Whole catfish scored and coated in a lemongrass-chili-salt paste then grilled slowly over charcoal until the skin renders and crisps — the fat dripping onto the coals and producing the flare-up smoke that perfumes the flesh, served with mắm nêm or nước mắm gừng and an abundance of fresh herbs.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/ca-tre-nuong-muoi-ot.jpg',
    intro: `Cá trê nướng muối ớt is the charcoal-grilled catfish preparation that appears at outdoor restaurants along the Mekong Delta canals, at riverside eating spots in the central provinces, and at the evening markets of Cần Thơ, Vĩnh Long, and Tiền Giang — wherever a charcoal grill, a fresh catfish, and cold beer coincide. The preparation takes the same walking catfish of the kho tộ and canh chua preparations and applies the direct heat of charcoal rather than the slow concentration of braising or the quick acidity of souring, producing a result that is as different from both as it could be: crispy, smoky, intensely flavored at the surface from the caramelized chili-salt paste, and retaining the specific juicy sweetness of catfish fat within the rendered skin. Catfish is specifically well-suited to charcoal grilling because of its high fat content relative to other freshwater fish — the fat renders slowly over the moderate charcoal heat, self-basting the flesh from within and simultaneously dripping onto the coals to produce the brief flare-ups of smoke that perfume the skin without burning it. The lemongrass-chili paste applied before grilling caramelizes in three stages as the fish grills: first it dries from the charcoal heat, then it caramelizes as the surface temperature rises, then the fat from the fish skin renders through it and carries the caramelized paste flavor into the flesh itself. The result is a catfish where the skin is a concentration of all these elements simultaneously — crispy, slightly charred, carrying the lemongrass-chili character, enriched by the rendered fat — and the flesh beneath is sweet, moist, and carries the smoke from the coals. Mắm nêm — the fermented anchovy paste of central and southern Vietnam — is the traditional dipping sauce for grilled catfish, providing the pungent, complex fermented character that plays against the sweet, smoky fish in a way that nước chấm does not.',
    ingredientSections: [
        {
            title: 'Catfish',
            items: [
                { amount: 2, name: 'whole catfish (cá trê), 400-500g each', note: 'cleaned, heads left on. Score each side 4-5 times diagonally to the bone — more deeply than for frying, as the scoring allows the paste to enter the flesh and the fat to render through the cuts.' },
            ],
        },
        {
            title: 'Muối ớt sả paste',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk, minced to paste' },
                { amount: 5, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 4, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'minced' },
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'neutral oil', note: 'helps the paste adhere and caramelize' },
            ],
        },
        {
            title: 'Mắm nêm dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'mắm nêm (fermented anchovy paste)', note: 'the traditional dipping sauce for grilled catfish in southern Vietnam' },
                { amount: 2, unit: 'tbsp', name: 'fresh pineapple juice or pineapple pieces', note: 'pounded — thinned with pineapple rather than lime for mắm nêm' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'warm water', note: 'to thin to dipping consistency' },
            ],
        },
        {
            title: 'Fresh herb plate',
            items: [
                { amount: 1, name: 'large bunch lettuce leaves', note: 'for wrapping' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 1, name: 'bunch Vietnamese balm (rau kinh giới)' },
                { amount: 1, name: 'cucumber', note: 'sliced' },
                { amount: 1, name: 'green banana or star fruit, sliced', note: 'optional — the sourness contrasts with the fatty fish' },
                { amount: 2, name: 'extra limes' },
                { amount: 16, name: 'rice paper sheets (bánh tráng)', note: 'for rolling — served alongside the herb plate' },
            ],
        },
    ],
    steps: [
        {
            title: 'Score deeply and apply the paste — overnight if possible',
            description: 'Score each catfish 4-5 times on each side, cutting all the way to the central bone. Combine all paste ingredients until uniform. Apply the paste firmly into every score, over every surface, inside the body cavity, and around the head. The paste must enter the score lines to flavor the flesh and allow the fat to render through the cuts during grilling. Marinate minimum 1 hour at room temperature, or overnight refrigerated for the best result.',
            tip: 'The overnight marination for cá trê nướng muối ớt produces a noticeably deeper-flavored result than the minimum 1-hour marination. The lemongrass paste has 8-12 hours to soften the fish surface proteins and penetrate through the score lines to the flesh beneath. This depth of marinade penetration is visible when the fish is sliced — the flesh near the score lines is golden-tinted from the turmeric and seasoned throughout.',
        },
        {
            title: 'Prepare mắm nêm sauce',
            description: 'Combine mắm nêm with pineapple juice or pounded pineapple pieces, sugar, garlic, and chili. Add warm water to reach a thick but pourable dipping consistency. Mắm nêm is traditionally thinned with pineapple rather than lime — the pineapple\'s sweetness balances the intense fermented paste character in a way that lime\'s sharp acidity does not. The finished sauce should be fragrant, pungent, slightly sweet, and complex — not merely salty.',
            tip: 'Mắm nêm for grilled catfish is served at a less diluted concentration than for other preparations — the fatty, smoky catfish can carry the intensity of the fermented paste that would overwhelm a lighter protein. If new to mắm nêm, start with the dipping sauce at half the given quantity and dilute with additional pineapple juice to tolerance.',
        },
        {
            title: 'Build a two-zone charcoal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over. For catfish specifically, create a two-zone fire: one side with a thick coal bed for direct heat, one side with fewer coals for indirect heat. Catfish fat renders aggressively and produces sustained flare-ups — the indirect zone allows you to move the fish when flare-ups become too intense. The total grilling time for a 400-500g catfish is 25-30 minutes, requiring sustained moderate heat throughout.',
            tip: 'Catfish produces more flare-ups during grilling than almost any other freshwater fish because of its high fat content. A two-zone fire is essential — not optional. A catfish grilled entirely over direct high heat will char on the exterior before the fat has fully rendered and the flesh has cooked through.',
        },
        {
            title: 'Grill with patience — 25-30 minutes total',
            description: 'Place the catfish directly on the grill grate. Grill over the moderate zone for 10-12 minutes without moving — the paste needs time to adhere and begin caramelizing before the fish can be turned. Flip carefully using two spatulas or a fish-grilling basket. Grill the second side for 10-12 minutes. Move to the direct heat zone for the final 5-6 minutes on each side to char the paste and crisp the skin. The fish is done when a chopstick passes through the thickest score without resistance.',
            tip: 'The patience required for cá trê nướng muối ớt — 25-30 minutes of careful monitoring rather than the quick grill of a lean fish — reflects the catfish fat content. Lean fish cooks fast over high heat; fatty fish needs moderate heat over a longer time to render the fat and produce crispy skin rather than flabby, unrendered skin.',
        },
        {
            title: 'Serve whole with the herb plate',
            description: 'Bring the grilled catfish to the table whole. The skin should be deeply caramelized, slightly charred in patches from the direct heat phase, and the lemongrass-chili paste visible as a darker crust over the golden turmeric base. Serve alongside the full herb plate, rice paper, mắm nêm sauce, and sliced cucumber. To eat: pull flesh from the bone with chopsticks, wrap in rice paper with herbs and cucumber, dip in mắm nêm. The combination of the smoky charcoal catfish, the fresh herbs, the slightly astringent rice paper, and the pungent mắm nêm is the complete Mekong Delta catfish experience.',
            tip: 'The full herb plate alongside cá trê nướng muối ớt — five or six different herbs, cucumber, and optionally green banana or star fruit — is not excessive. The fatty, smoky catfish needs the full range of herb freshness and astringency to eat comfortably through a whole fish. Vietnamese cooks understand that the amount of fresh herb served alongside a fatty grilled protein is in direct proportion to the fat content of that protein.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
