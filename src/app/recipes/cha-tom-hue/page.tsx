'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cha-tom-hue',
    title: 'Chả Tôm Huế (Huế Shrimp Paste on Sugar Cane)',
    subtitle: 'Fresh shrimp ground to a smooth, sweetened paste with pork fat, garlic, and annatto oil then pressed onto sugar cane sticks and grilled over charcoal — the Huế preparation where the sugar cane provides both the cooking vessel and the specific sweetness that transfers into the shrimp paste during grilling, producing a combination that exists nowhere else in Vietnamese cooking.',
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/cha-tom-hue.jpg',
    intro: `Chả tôm Huế is the Huế shrimp paste on sugar cane — a preparation that is one of the most distinctive and most specifically regional dishes in the central Vietnamese city's elaborate culinary repertoire. Huế cooking is understood throughout Vietnam as the most refined and most specifically composed of the regional cuisines — a consequence of the city's role as the imperial capital of the Nguyễn dynasty from 1802 to 1945, during which the imperial court developed a cuisine of extraordinary specificity, elegance, and attention to the interaction between ingredients. Chả tôm is the dish that most clearly demonstrates this interaction philosophy: fresh shrimp paste (the purest possible expression of the coastal seafood that Huế's position on the Thuận An estuary provides) pressed onto lengths of fresh sugar cane (the specific agricultural product of the central Vietnamese plains) and grilled over charcoal so that the juice of the sugar cane penetrates the shrimp paste during cooking, and simultaneously the shrimp paste carries the sweet, slightly caramelized character of the sugar cane into each bite. Neither ingredient alone produces the dish; the interaction between them is the dish. The shrimp paste itself is more delicately seasoned than most Vietnamese shrimp preparations — Huế cooking tends toward restraint in the balance between seasoning and the natural character of the primary ingredient — with annatto oil (dầu điều) providing the specific orange-red color that marks the preparation visually and a subtle earthiness that is the specifically Huế colorant used across the city's cooking. The pork fat in the paste is the element that keeps the shrimp from becoming dry during the grilling period and that provides the richness that makes chả tôm Huế satisfying as well as delicate.`,
    ingredientSections: [
        {
            title: 'Shrimp paste',
            items: [
                { amount: 400, unit: 'g', name: 'fresh shrimp, peeled and deveined', note: 'very fresh — the shrimp flavor is the point of the dish. Pat completely dry before processing.' },
                { amount: 60, unit: 'g', name: 'pork fatback (mỡ heo)', note: 'finely minced — keeps the shrimp moist during grilling' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'shallots', note: 'minced' },
                { amount: 1.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 1, unit: 'tbsp', name: 'annatto oil (dầu điều)', note: 'the Huế coloring — gives the orange-red characteristic of chả tôm. Made by frying annatto seeds in oil.' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 1, unit: 'tsp', name: 'tapioca starch', note: 'helps the paste adhere to the sugar cane' },
            ],
        },
        {
            title: 'Sugar cane',
            items: [
                { amount: 8, name: 'fresh sugar cane sticks', note: '15-20cm long, 2-3cm diameter, peeled. Available at Asian supermarkets. The sugar cane is both the cooking vessel and an ingredient — its juice transfers into the shrimp paste during grilling.' },
            ],
        },
        {
            title: 'Annatto oil',
            items: [
                { amount: 2, unit: 'tbsp', name: 'neutral oil' },
                { amount: 1, unit: 'tbsp', name: 'annatto seeds (hạt điều)', note: 'fried in the oil for 2-3 minutes until oil turns deep orange. Seeds discarded.' },
            ],
        },
        {
            title: 'Dipping sauce — Huế style',
            items: [
                { amount: 3, unit: 'tbsp', name: 'hoisin sauce' },
                { amount: 2, unit: 'tbsp', name: 'peanut butter', note: 'smooth' },
                { amount: 1, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 3, unit: 'tbsp', name: 'warm water' },
                { amount: 2, name: 'garlic cloves', note: 'minced and fried briefly in oil' },
                { amount: 2, unit: 'tbsp', name: 'roasted peanuts', note: 'crushed, scattered over the sauce' },
                { amount: 1, name: 'bird\'s eye chili', note: 'sliced' },
            ],
        },
        {
            title: 'To serve — Huế style',
            items: [
                { amount: 16, name: 'bánh tráng (rice paper sheets)', note: 'for wrapping' },
                { amount: 1, name: 'head butter lettuce' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'cucumber, julienned' },
                { amount: 100, unit: 'g', name: 'rice vermicelli (bún)', note: 'cooked and drained — placed in the rice paper wrap' },
                { amount: 50, unit: 'g', name: 'roasted peanuts, crushed' },
                { amount: 2, name: 'extra limes' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the annatto oil',
            description: 'Heat neutral oil in a small pan over medium heat. Add annatto seeds. Fry for 2-3 minutes, stirring, until the oil turns a deep, vivid orange-red. Do not let the seeds burn — burnt annatto turns bitter. Remove from heat, strain out the seeds immediately. Cool the colored oil before adding to the shrimp paste — hot annatto oil will cook the shrimp paste prematurely.',
            tip: 'Annatto oil is the specifically Huế coloring that appears throughout the city\'s cooking — in bún bò Huế broth, in grilled meats, and here in chả tôm. Its color is more vivid and more stable than turmeric at high heat, and its flavor contribution is subtle earthiness rather than the warm medicinal note of turmeric. The orange-red color of chả tôm Huế is the immediate visual identifier of this preparation\'s regional origin.',
        },
        {
            title: 'Process the shrimp paste',
            description: 'Place the dried shrimp in a food processor. Process for 1 minute until roughly broken down. Add minced pork fat, garlic, shallots, fish sauce, sugar, white pepper, cooled annatto oil, sesame oil, and tapioca starch. Process for 3-4 minutes until the paste is completely smooth and slightly elastic — it should pull away from the bowl sides cleanly and feel sticky when touched. Refrigerate for 20 minutes to firm slightly.',
            tip: 'The shrimp paste for chả tôm Huế should be smoother and more delicately seasoned than the beef mixture for chả bò nướng lá lốt — Huế\'s culinary philosophy emphasizes the natural sweetness of the shrimp as the primary flavor, with seasoning providing support rather than dominance. The paste should taste of shrimp first, then the fish sauce depth, then the subtle annatto earthiness.',
        },
        {
            title: 'Press paste onto sugar cane sticks',
            description: 'Wet your hands with cold water. Take approximately 3 tablespoons of the shrimp paste and press it firmly around the upper two-thirds of a sugar cane stick, leaving the lower third bare as a handle. The paste layer should be approximately 1.5cm thick and evenly distributed around the cane. Press firmly — the paste must adhere completely to the cane without gaps where air can collect. Smooth the surface with wet fingers. Refrigerate the prepared sticks for 10 minutes before grilling.',
            tip: 'The paste thickness of 1.5cm on the sugar cane is calibrated for the 6-8 minute grilling time — thick enough to develop a caramelized exterior while remaining moist inside, thin enough to cook through completely in the available time. Thicker paste layers require longer grilling and risk the exterior over-charring before the interior is cooked.',
        },
        {
            title: 'Grill over charcoal — 6-8 minutes, turning frequently',
            description: 'Build a medium charcoal fire. Place the chả tôm sticks over direct heat. Unlike beef or chicken, shrimp paste must be turned every 90 seconds — the annatto oil in the paste accelerates caramelization and can char quickly if left on one side too long. Grill for 6-8 minutes total, turning 4-5 times, until the exterior is deeply orange-red with golden caramelized patches and the paste is cooked through — firm when pressed.',
            tip: 'The frequent turning of chả tôm during grilling — every 90 seconds rather than the 3-4 minutes used for most grilled proteins — reflects the annatto oil content and the delicate nature of the shrimp paste. The annatto caramelizes faster than standard marinades and requires more attentive management. The multiple turns also ensure the sugar cane juice penetrates from all sides of the cane into the surrounding paste during cooking.',
        },
        {
            title: 'Scrape, wrap, and serve the Huế way',
            description: 'Bring the grilled chả tôm to the table. Each diner holds the bare sugar cane handle and uses their teeth or a spoon to scrape the cooked shrimp paste from the cane onto their plate. Chew a small amount of the sugar cane itself — its juice is now slightly infused with shrimp flavor from the cooking. THE HUẾ WRAP: Dip a rice paper sheet briefly in water, lay flat. Place a small amount of bún, lettuce, herbs, and cucumber on the paper. Add a scraping of chả tôm. Fold and roll. Dip in the peanut-hoisin sauce. Eat immediately.',
            tip: 'The scraping of the shrimp paste from the sugar cane with the teeth — the method by which the diner removes the cooked paste while simultaneously extracting the last of the sugar cane juice — is the most intimate and most specifically correct eating method for chả tôm. Using a knife to cut the paste from the cane loses the final sugar cane juice infusion that makes the last bite the best.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
