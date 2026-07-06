'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cha-bo-nuong-la-lot',
    title: 'Ch? Bò Nu?ng Lá L?t (Beef Wrapped in Wild Betel Leaves)',
    subtitle: 'Seasoned minced beef mixed with lemongrass, garlic, and fish sauce wrapped in fresh lá l?t leaves and grilled over charcoal until the leaf chars and smokes and the beef inside caramelizes — the southern Vietnamese nh?u preparation where the wild betel leaf does to beef what no other herb in the collection achieves.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/cha-bo-nuong-la-lot.jpg',
    intro: `Ch? bò nu?ng lá l?t is the beef and wild betel leaf preparation — one of the most specific and most immediately identifiable Vietnamese dishes by aroma alone, because the fragrance of lá l?t leaves (Piper sarmentosum, wild betel leaf) charring over hardwood charcoal is unmistakable and unreproducible by any other ingredient combination. Lá l?t is the leaf that most clearly belongs to specifically Vietnamese cooking rather than to the broader Southeast Asian culinary tradition — it appears in Thai and Cambodian cooking but nowhere with the same centrality and in the same variety of preparations as in Vietnamese cuisine, where it serves as both a wrapper (for beef and pork patties) and as a herb eaten raw alongside grilled and braised preparations. The leaf has a complex aromatic character: simultaneously warm and slightly medicinal from its connection to the pepper family, with a specific clove-adjacent spice note that intensifies dramatically when the leaf makes contact with direct heat, and a slightly bitter, clean green note that moderates the richness of the beef it wraps. When a lá l?t-wrapped beef roll is placed on hot charcoal and the leaf begins to char, the specific volatile compounds in the leaf are released simultaneously — the medicinal warmth, the clove note, the green bitterness — and they penetrate the beef patty through the charring leaf surface, flavoring the meat from outside in during the 3-4 minutes of grilling. The result is a beef preparation that carries the lá l?t character not as a condiment but as an intrinsic flavor element — the leaf and the beef have become one thing rather than two things presented together. Ch? bò nu?ng lá l?t is most commonly eaten as a component of bò 7 món (seven beef dishes), the Vietnamese beef-tasting menu that is one of the most elaborate celebrations of a single protein in the repertoire, but it appears equally often as a standalone nh?u dish eaten with cold beer and the standard Vietnamese herb plate.`,
    ingredientSections: [
        {
            title: 'Beef mixture',
            items: [
                { amount: 400, unit: 'g', name: 'minced beef (th?t bò bam)', note: '20% fat — not lean mince. The fat keeps the patty moist during the charcoal grilling period. Ask for a coarser grind if possible.' },
                { amount: 2, name: 'lemongrass stalks', note: 'inner stalk, minced very finely' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'five-spice powder (ngu v? huong)', note: 'small amount — the aromatic that connects this dish to Vietnamese-Chinese cooking' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 1, unit: 'tbsp', name: 'toasted sesame seeds' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil', note: 'helps the mixture hold together' },
            ],
        },
        {
            title: 'Lá l?t leaves',
            items: [
                { amount: 30, name: 'fresh lá l?t leaves (wild betel leaves)', note: 'large, intact leaves — the darker green the better. Available at Vietnamese specialty markets. The leaf is the preparation; there is no substitute.' },
            ],
        },
        {
            title: 'Charcoal fire',
            items: [
                { amount: 0.5, unit: 'kg', name: 'hardwood charcoal', note: 'built to medium-hot — the leaf chars in 3-4 minutes at this temperature' },
            ],
        },
        {
            title: 'Dipping sauce',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'head butter lettuce', note: 'leaves for wrapping' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 1, name: 'cucumber, sliced' },
                { amount: 16, name: 'bánh tráng mè (sesame rice crackers)', note: 'for serving alongside' },
                { amount: 50, unit: 'g', name: 'roasted peanuts, roughly crushed' },
                { amount: 2, name: 'extra limes' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make and rest the beef mixture',
            description: 'Combine all beef mixture ingredients: minced beef, minced lemongrass, garlic, shallots, fish sauce, sugar, black pepper, five-spice, sesame oil, sesame seeds, and neutral oil. Mix thoroughly — knead for 2-3 minutes until the mixture becomes sticky and cohesive. Refrigerate for 20 minutes. The resting period allows the fish sauce to begin seasoning the beef throughout and the lemongrass oils to integrate into the fat of the mince. Test one small patty by frying — the seasoning should be assertive as the charcoal grilling will slightly moderate the intensity.',
            tip: 'The beef mixture for ch? bò nu?ng lá l?t should be slightly more aggressively seasoned than seems correct at the testing stage — the charcoal grilling and the charring lá l?t both moderately dilute the perceived seasoning of the finished roll. A mixture that tastes slightly over-seasoned as a fried test patty will be correctly seasoned when grilled inside the leaf.',
        },
        {
            title: 'Wrap in lá l?t — the rolling technique',
            description: 'Select the largest, most intact lá l?t leaves. Place a leaf shiny-side down. Place 1.5 tablespoons of the beef mixture in the center, forming a small log parallel to the leaf stem. Roll the leaf around the beef from stem to tip, tucking as you roll to keep the roll compact. Secure with a toothpick through the tip of the leaf or simply place seam-side down. The roll should be compact and firm — loose rolls open during grilling and the beef can fall into the coals.',
            tip: 'The shiny side of the lá l?t leaf facing down during rolling means the rough, matte surface of the leaf faces outward on the finished roll — this is the side that chars more aggressively on the grill and produces the most aromatic result. The shiny side, now on the inside, provides a slightly more protected surface for the beef.',
        },
        {
            title: 'Build charcoal fire and grill — 3-4 minutes per side',
            description: 'Build a medium-hot charcoal fire. Place the lá l?t rolls seam-side down on the grill. The leaf will immediately begin to smoke and char at the edges — this is correct. Grill for 3-4 minutes without moving until the bottom of the leaf is charred and the beef inside is partially cooked. Flip carefully and grill the other side 2-3 minutes. The rolls are done when the leaf is charred on both sides and the beef inside is cooked through — test by pressing the roll firmly; it should feel firm throughout.',
            tip: 'The charring of the lá l?t leaf during grilling is not a mistake to be avoided but the specific cooking process that produces the dish\'s defining character. A lá l?t roll grilled until the leaf is merely wilted and lightly colored produces a fraction of the aromatic intensity of a roll with properly charred leaf. The char is where the flavor is.',
        },
        {
            title: 'Remove toothpicks and arrange',
            description: 'Remove the toothpicks from each roll. Arrange on a serving plate. The finished ch? bò nu?ng lá l?t: charred, slightly shrunken lá l?t leaf exterior with the aroma of charred wild betel filling the immediate vicinity, the beef inside visible at the ends of each roll as a golden-brown, cooked cylinder. Scatter crushed peanuts over the plate.',
            tip: 'The aroma of correctly grilled ch? bò nu?ng lá l?t — the specific combination of charred lá l?t and caramelized seasoned beef — is one of the most immediately identifiable cooking smells in Vietnamese cuisine. It is the smell that draws people to the grill and that signals the dish is ready before any timer or visual confirmation is needed.',
        },
        {
            title: 'Eat the Bò 7 Món way — or the nh?u way',
            description: 'BÒ 7 MÓN STYLE: Place one roll on a sheet of bánh tráng mè, add herbs, cucumber, and peanuts, roll into a tight cylinder, dip in nu?c ch?m. BÒ NH?U STYLE: pick up the whole roll by hand, dip directly in nu?c ch?m, eat in two bites with a fresh lá l?t leaf alongside. Both are correct — the difference is the setting. The bánh tráng mè wrapper makes the experience more complete and more structured; eating directly makes the lá l?t char the primary experience. The nu?c ch?m is not optional in either version — the lime-fish sauce-chili brightness is the specific counterpoint to the warm, slightly medicinal sweetness of the charred leaf and the rich beef.',
            tip: 'A raw lá l?t leaf eaten alongside the grilled roll — not instead of but in addition to — is the eating technique that allows comparison between the raw and cooked characters of the same leaf. The raw leaf is green, slightly medicinal, gently bitter. The charred leaf on the roll is smoky, intensely aromatic, sweet from the caramelization. Eating both in the same mouthful produces the complete lá l?t experience — the most specific and most Vietnamese herb experience in the collection.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
