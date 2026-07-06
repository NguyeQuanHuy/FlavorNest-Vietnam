'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'chim-cut-nuong-mat-ong',
    title: 'Chim Cút Nướng Mật Ong (Honey-Glazed Grilled Quail)',
    subtitle: 'Whole quail marinated in lemongrass, fish sauce, and five-spice then grilled over charcoal with repeated honey basting until the skin turns deep mahogany and shatters when bitten — the southern Vietnamese nhậu dish where a single bird disappears in four bites and the honey glaze makes cold beer taste better.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/chim-cut-nuong-mat-ong.jpg',
    intro: `Chim cút nướng mật ong is the grilled quail that appears on every serious nhậu menu in southern Vietnam — at the roadside restaurants along Highway 1, at the beer halls of Bình Dương and Đồng Nai where factory workers eat after the shift, at the garden restaurants of Saigon's outer districts where tables fill after 6pm and stay full until midnight. Quail is the ideal nhậu bird: small enough to eat in minutes without interrupting the conversation, rich enough from its fat to satisfy, inexpensive enough to order by the pair or the half-dozen, and designed by its anatomy to be eaten with hands — the small carcass held by the leg and worked with the teeth rather than dissected with cutlery. The honey glaze is the preparation element that distinguishes this from plain grilled quail: applied in multiple layers during the grilling process, the honey caramelizes with each application against the charcoal heat to build a deep mahogany lacquer that shatters when bitten and releases the combined sweetness of the honey and the rendered quail fat simultaneously. The specific character of chim cút nướng mật ong — the combination of the five-spice in the marinade, the fish sauce seasoning in the flesh, and the honey lacquer on the exterior — is simultaneously Chinese-influenced and entirely Vietnamese, a preparation that arrived with the Hoa communities of Chợ Lớn and became so thoroughly adopted that its origins are no longer relevant to how or where it is eaten.`,
    ingredientSections: [
        {
            title: 'Quail',
            items: [
                { amount: 8, name: 'whole quail (chim cút)', note: 'cleaned, backbone removed and flattened (spatchcocked) — or left whole. Spatchcocked quail cooks more evenly and presents better on the grill.' },
            ],
        },
        {
            title: 'Marinade',
            items: [
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, finely minced' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tbsp', name: 'honey', note: 'in the marinade — additional honey is used for basting' },
                { amount: 1, unit: 'tsp', name: 'five-spice powder (ngũ vị hương)' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives the base golden color' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Honey glaze (for basting during grilling)',
            items: [
                { amount: 4, unit: 'tbsp', name: 'honey', note: 'pure, runny honey — heated slightly for easier basting' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce', note: 'adds color and savory depth to the glaze' },
                { amount: 1, unit: 'tbsp', name: 'rice wine or Shaoxing wine', note: 'adds complexity to the glaze' },
                { amount: 0.5, unit: 'tsp', name: 'sesame oil', note: 'added to the glaze at the very end' },
            ],
        },
        {
            title: 'Dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 1, name: 'cucumber, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Spatchcock and marinate — minimum 2 hours',
            description: 'Place each quail breast-side down. Using kitchen scissors, cut along both sides of the backbone and remove it. Flip and press firmly on the breastbone to flatten. The quail should now lie flat. Combine all marinade ingredients and coat every surface of each flattened quail, getting the marinade under the skin of the breast if possible. Marinate for minimum 2 hours at room temperature, or overnight refrigerated. The five-spice and lemongrass need time to penetrate the small, dense quail flesh.',
            tip: 'Spatchcocking the quail is the preparation that makes chim cút nướng mật ong cook evenly and present beautifully. A whole unflattened quail grills unevenly — the breast overcooks before the thigh is done. Flattened, every surface is at equal distance from the heat.',
        },
        {
            title: 'Build the honey glaze',
            description: 'Combine honey, soy sauce, and rice wine in a small bowl. Warm gently until the honey becomes fully liquid and the mixture is well combined. Add sesame oil last. The glaze should be thick enough to coat a brush heavily — if too thin, the honey has been heated too much and will run off the quail rather than adhering. Prepare before the grilling starts.',
            tip: 'The glaze must be applied in layers — not all at once. Each layer is brushed on and allowed to caramelize before the next layer goes on. Three to four basting applications during grilling produce the deep mahogany lacquer that defines chim cút nướng mật ong; one heavy application produces stickiness without depth of color.',
        },
        {
            title: 'Grill over medium-hot charcoal — first phase',
            description: 'Build a medium-hot charcoal fire. Place the spatchcocked quail skin-side down on the grill. Grill for 5-6 minutes without moving — the skin needs to begin crisping before it will release from the grill cleanly. The quail fat will render and create small flare-ups — move to a cooler zone briefly if they become aggressive. Flip and grill the bone side for 4 minutes.',
            tip: 'Quail fat renders quickly and produces frequent flare-ups during charcoal grilling — more than chicken or duck. Keep a section of the grill at lower heat to move the quail when flare-ups occur. Brief flare-up contact adds char; sustained flare-up contact burns the skin before the honey glaze has been applied.',
        },
        {
            title: 'Apply honey glaze — three times',
            description: 'After the initial grilling on both sides, begin the honey basting cycle: brush the skin side generously with the honey glaze. Grill skin-side down for 2 minutes until the honey caramelizes and darkens. Flip, brush the bone side, grill 1 minute. Flip again, brush the skin side again, grill 2 minutes. Repeat once more — three basting applications total. Each layer darkens the quail progressively from golden to amber to deep mahogany. The total grilling time including basting is 18-22 minutes.',
            tip: 'The progression of color tells you when each basting layer has caramelized correctly: after the first baste, golden. After the second, amber. After the third, deep mahogany with slightly darker edges. If the quail is reaching mahogany too quickly, move to a cooler area of the grill — the honey burns easily at very high heat.',
        },
        {
            title: 'Rest and make the dipping sauce',
            description: 'Rest the finished quail for 3 minutes on a rack — not a plate, which traps steam and softens the glaze. While resting, make the dipping sauce: combine fish sauce, lime juice, sugar, water, garlic, and chili. Stir until dissolved. The dipping sauce for chim cút should be brighter and more acidic than a standard nước chấm — the honey glaze on the bird is sweet and rich, and the sauce needs to cut through it.',
            tip: 'The 3-minute rack rest allows the honey glaze to set from liquid to a firm lacquer that shatters when bitten. Resting on a plate — where steam from the hot bird cannot escape — keeps the glaze soft and sticky. The shatter is the goal.',
        },
        {
            title: 'Plate and serve — eat with hands',
            description: 'Arrange the glazed quail on a plate with rau răm, mint, cucumber, and lime wedges. Serve the dipping sauce in individual small bowls. To eat: pick up a quail by the leg, bite through the lacquered skin at the breast — it should crack audibly. Work the breast meat free with the teeth. Then the thigh. Suck the bones clean. Dip each piece in the nước chấm between bites. Eat with a leaf of rau răm. Drink beer. Repeat with the next quail.',
            tip: 'Chim cút nướng is specifically a hand-food — not because utensils do not exist but because the eating experience with hands is fundamentally different. The lacquered skin cracks more satisfyingly against the teeth than against a knife. The Vietnamese understand this, which is why the dish appears on tables where hands are used without self-consciousness.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
