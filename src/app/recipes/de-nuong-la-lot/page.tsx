'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'de-nuong-la-lot',
    title: 'Dê Nu?ng Lá L?t (Grilled Goat Wrapped in Wild Pepper Leaf)',
    subtitle: 'Minced goat meat seasoned with lemongrass, galangal, and fish sauce, wrapped in lá l?t leaves and grilled over charcoal until the leaf chars and the goat inside caramelizes — the Ninh Bình preparation that transforms the strongest-flavored domestic meat into one of the most aromatic dishes in Vietnamese cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/de-nuong-la-lot.jpg',
    intro: `Dê nu?ng lá l?t is the goat preparation most associated with Ninh Bình province — the limestone karst region south of Hanoi where goat herds graze on the rocky hillsides between the river and the mountains, and where the combination of the lean, mineral-flavored local goat with the aromatic wild pepper leaf produces a dish that is simultaneously the most rustic and the most sophisticated in the province's cooking. Goat meat has a specific flavor that divides opinion among Vietnamese diners in the same way that gamey meats divide opinion everywhere: those who grew up eating it consider it the richest and most satisfying of all meats; those who did not encounter it in childhood find it strong and unfamiliar. The technique of wrapping minced goat in lá l?t and grilling over charcoal is specifically designed to manage and harmonize the strong character of the meat: the lá l?t's aromatic oils penetrate the minced goat during cooking and provide a herbal, slightly camphor-like counterpoint to the gaminess; the charcoal heat caramelizes the outside of each roll while the inside steams; and the specific marinade — heavy on lemongrass, galangal, and fresh chili, with less sugar than the pork version — is calibrated to the goat rather than adapted from the pork lá l?t recipe. The result is a roll where the goat's strength becomes its virtue: the flavor is complex, deep, and unmistakable, with the lá l?t char providing exactly the aromatic frame it needs.`,
    ingredientSections: [
        {
            title: 'Goat mixture',
            items: [
                { amount: 500, unit: 'g', name: 'minced goat meat (th?t dê b?m)', note: 'ideally from the shoulder or leg — some fat necessary. Ask the butcher to mince with 20% fat ratio. Very lean goat produces dry rolls.' },
                { amount: 50, unit: 'g', name: 'goat fat or pork fat', note: 'finely minced and added to the mixture if the goat meat is very lean' },
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, minced to paste — essential for managing the goat flavor' },
                { amount: 20, unit: 'g', name: 'fresh galangal (ri?ng)', note: 'peeled and minced to paste — the specific aromatic pairing for goat in Vietnamese cooking' },
                { amount: 4, name: 'garlic cloves', note: 'minced' },
                { amount: 3, name: 'shallots', note: 'minced' },
                { amount: 2, name: 'fresh red chilies', note: 'minced' },
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar', note: 'less than the pork version — goat has more natural sweetness' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
                { amount: 1, unit: 'tbsp', name: 'cornstarch', note: 'binder — helps the mixture adhere to the lá l?t' },
            ],
        },
        {
            title: 'Lá l?t leaves',
            items: [
                { amount: 40, name: 'large fresh lá l?t leaves (wild pepper leaf)', note: 'for wrapping. Available at Vietnamese grocery stores. The leaf is essential — no substitute produces the same result.' },
            ],
        },
        {
            title: 'Ninh Bình peanut dipping sauce',
            items: [
                { amount: 100, unit: 'g', name: 'roasted peanuts', note: 'roughly ground — not smooth paste' },
                { amount: 3, unit: 'tbsp', name: 'hoisin sauce' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 100, unit: 'ml', name: 'water' },
                { amount: 3, name: 'garlic cloves', note: 'minced and fried briefly in oil' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
                { amount: 1, unit: 'tsp', name: 'lime juice', note: 'to brighten' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
            ],
        },
        {
            title: 'Table accompaniments',
            items: [
                { amount: 20, name: 'sheets rice paper (bánh tráng)', note: 'for wrapping' },
                { amount: 200, unit: 'g', name: 'dried rice vermicelli', note: 'cooked and cooled' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau ram)' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 1, name: 'cucumber', note: 'julienned' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed — for scattering' },
                { amount: 2, name: 'limes, cut in wedges' },
            ],
        },
    ],
    steps: [
        {
            title: 'Season the goat — rest 30 minutes',
            description: 'Combine minced goat meat with lemongrass paste, galangal paste, garlic, shallots, chili, fish sauce, sugar, black pepper, turmeric, sesame oil, and cornstarch. Mix vigorously with your hands for 3-4 minutes until the mixture becomes sticky and cohesive — the proteins in the meat bind together. The mixture should hold its shape when pressed into a ball. Rest covered for 30 minutes — the galangal and lemongrass need time to penetrate the goat.',
            tip: 'Galangal is the critical aromatic for dê nu?ng specifically. It has a different, sharper, more piney character than ginger and is specifically compatible with goat in a way that ginger is not. Do not substitute ginger for galangal in this preparation — the result will be noticeably different.',
        },
        {
            title: 'Wrap in lá l?t — Ninh Bình technique',
            description: 'Take a large lá l?t leaf, shiny side down. Place a heaped tablespoon of goat mixture at the base of the leaf. Roll tightly from the bottom, encasing the meat completely. The roll should be firm and compact — about 5cm long. The lá l?t roll for dê nu?ng is typically slightly larger and fatter than for bò lá l?t, because the goat needs more time on the grill and a thicker roll maintains moisture through the longer cooking time.',
            tip: 'Make all rolls before lighting the charcoal — once the fire is ready, the grilling moves fast. Rolls left waiting after the fire is lit dry on the exterior and stick together. Prepare all rolls in 15 minutes, then build the fire.',
        },
        {
            title: 'Build the charcoal fire',
            description: 'Light hardwood charcoal and wait until fully ashed over — 25-30 minutes. The fire for dê nu?ng lá l?t should be slightly less intense than for seafood — goat needs a medium-hot fire that cooks the thicker roll through without burning the lá l?t exterior before the interior is done. The correct fire: hold your hand 15cm above the grill for 4-5 seconds before the heat is too intense.',
            tip: 'Goat rolls need slightly longer on the grill than pork or beef lá l?t rolls because the meat is denser and the rolls are slightly thicker. A slightly cooler fire compensates by giving the interior time to cook through before the lá l?t exterior goes from charred to burnt.',
        },
        {
            title: 'Grill until the leaf chars and the goat caramelizes',
            description: 'Place the rolls on the grill. Grill for 4-5 minutes per side — longer than pork or beef lá l?t. The lá l?t should develop deep char spots, not uniform blackening — specific black marks where the leaf has directly contacted the grill, with green remaining between. The smell as the leaf chars and the goat fat renders is the defining aromatic of Ninh Bình street food. The rolls are done when pressed firmly and feel solid throughout — no soft, yielding center.',
            tip: 'The firmness test is more important for dê nu?ng than for any other lá l?t preparation because undercooked goat has an unpleasant texture that the charred exterior can mask visually. Press each roll firmly at the 4-minute mark — if the center is still soft, grill 1-2 more minutes.',
        },
        {
            title: 'Make the Ninh Bình peanut sauce',
            description: 'Heat oil in a small pan. Fry minced garlic until golden. Add hoisin sauce, fish sauce, and sugar — stir until combined. Add water gradually, stirring, to a thick, pourable consistency. Add ground peanuts and stir in. Simmer 2 minutes. Remove from heat and add lime juice and minced chili. The sauce should be thicker than a dipping sauce — almost spreadable — so it coats each roll when dipped.',
            tip: 'The Ninh Bình peanut sauce for dê nu?ng is slightly thicker and slightly less sweet than the version served with nem l?i — the stronger flavor of goat requires a more assertive sauce that can stand alongside it without being overwhelmed.',
        },
        {
            title: 'Serve and assemble at the table',
            description: 'Plate the grilled rolls and scatter crushed peanuts over. Serve with the peanut sauce, rice paper, vermicelli, and all herbs. To eat: dampen a rice paper sheet, place vermicelli, herbs, and cucumber on the lower third. Place a dê nu?ng roll on top and roll loosely. Dip the entire roll in the peanut sauce. Eat in one or two bites. The raw lá l?t leaves served alongside the grilled rolls — eaten raw between bites — amplify the wild pepper character of the whole dish.',
            tip: 'Serving fresh raw lá l?t leaves alongside the cooked rolls is the technique that demonstrates the full range of the leaf\'s flavor. Cooked lá l?t is warm and slightly smoky; raw lá l?t is sharply aromatic. Together in the same meal — one cooked roll, one raw leaf eaten alongside — the lá l?t character is fully understood.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
