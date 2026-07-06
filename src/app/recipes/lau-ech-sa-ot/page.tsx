'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'lau-ech-sa-ot',
    title: 'Lẩu Ếch Sả Ớt (Frog Hot Pot with Lemongrass and Chili)',
    subtitle: 'A fragrant, spicy lemongrass-galangal broth kept bubbling at the center of the table while thin-sliced frog pieces cook in seconds — eaten with water spinach, banana blossom, rice vermicelli, and the complete herb plate of Mekong Delta cooking. The communal frog preparation where the broth is as important as what cooks in it.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/lau-ech-sa-ot.jpg',
    intro: `Lẩu ếch sả ớt is the frog hot pot of southern Vietnam — a preparation that takes the communal lẩu format and applies it to ếch, producing a dish where the conversation, the shared broth, and the pace of eating are as important as any individual component. The lẩu format is specifically well-suited to frog: each piece of frog cooks in the bubbling broth in 20-30 seconds, faster than almost any other protein in Vietnamese hot pot cooking, which means the eating pace is quick and the broth continuously receives the flavor contribution of the passing frog pieces. By the end of a lẩu ếch session, the broth has deepened significantly from its starting state — the lemongrass-galangal base enriched by the natural sweetness of the frog that has cooked through it. The specific character of lẩu ếch sả ớt comes from the aromatic broth base: more lemongrass and galangal than most hot pot preparations, with fresh chilies providing continuous heat rather than dried chili powder, and fresh turmeric if available adding both color and a specific earthy fragrance that dried turmeric cannot replicate. The broth should be golden-orange from the annatto oil and the turmeric, fragrant from the lemongrass, and clearly spicy — this is not a delicate broth but an assertive one that carries the frog through the meal with increasing complexity. The vegetables in lẩu ếch sả ớt are specifically the Mekong Delta rau đồng — water spinach, banana blossom, and morning glory — the field and waterway plants that grow in the same habitat as the paddy frogs that constitute the protein. This geographic coherence — the frog and the vegetables from the same rice field ecosystem — is not accidental. It produces a flavor combination where the individual elements complete each other because they were designed by their shared habitat to do exactly that.`,
    ingredientSections: [
        {
            title: 'Frog broth base',
            items: [
                { amount: 400, unit: 'g', name: 'frog carcasses and bones', note: 'or 200g chicken bones if using only frog legs — simmered for the broth base' },
                { amount: 1, unit: 'L', name: 'water' },
                { amount: 3, name: 'shallots', note: 'halved and charred' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Lemongrass-galangal aromatic broth',
            items: [
                { amount: 5, name: 'lemongrass stalks', note: 'bruised and cut — five stalks for the hot pot broth' },
                { amount: 50, unit: 'g', name: 'fresh galangal', note: '5 slices, smashed — more prominent than in other lẩu preparations' },
                { amount: 30, unit: 'g', name: 'fresh turmeric', note: 'sliced — or 1 tsp dried turmeric powder' },
                { amount: 4, name: 'fresh red chilies', note: 'halved — for the broth' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'whole — for heat level' },
                { amount: 3, unit: 'tbsp', name: 'annatto oil (dầu điều)', note: 'for the characteristic golden-orange color' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil' },
                { amount: 4, name: 'garlic cloves', note: 'smashed' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 200, unit: 'ml', name: 'young coconut water', note: 'added near the end for the Mekong sweetness' },
            ],
        },
        {
            title: 'Frog for the hot pot',
            items: [
                { amount: 600, unit: 'g', name: 'frog legs and body sections', note: 'thinly sliced across the bone — 5mm thick slices cook fastest in the hot pot. Or leave the legs whole for easier handling.' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for light seasoning before serving' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric' },
            ],
        },
        {
            title: 'Mekong Delta vegetables (rau đồng)',
            items: [
                { amount: 200, unit: 'g', name: 'water spinach (rau muống)', note: 'cut into 5cm pieces — the essential Mekong Delta hot pot vegetable' },
                { amount: 150, unit: 'g', name: 'banana blossom (bắp chuối)', note: 'finely shredded — adds the characteristic slightly bitter, astringent note' },
                { amount: 150, unit: 'g', name: 'morning glory (rau muống biển)', note: 'or additional water spinach' },
                { amount: 100, unit: 'g', name: 'bean sprouts (giá)' },
                { amount: 100, unit: 'g', name: 'fresh shiitake or straw mushrooms', note: 'halved' },
            ],
        },
        {
            title: 'Noodles',
            items: [
                { amount: 400, unit: 'g', name: 'fresh rice vermicelli (bún tươi)', note: 'served alongside to add to the hot pot or eat in the broth' },
            ],
        },
        {
            title: 'Dipping sauce and table herbs',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 2, name: 'bird\'s eye chilies', note: 'minced' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch Vietnamese balm (rau kinh giới)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 2, name: 'extra limes' },
                { amount: 2, name: 'fresh red chilies, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the frog bone broth base',
            description: 'Simmer frog carcasses (or chicken bones) with charred shallots and salt in 1L water for 30 minutes. Strain. This base broth provides the body and the specific sweetness of frog that makes lẩu ếch different from a plain lemongrass broth. Without it, the hot pot tastes of lemongrass but not of frog.',
            tip: 'The frog bone stock for lẩu ếch is the same philosophy as the frog stock for cháo ếch Singapore — using the entire animal rather than only the legs produces a broth with inherent frog character that flavors everything cooked in it. This background sweetness deepens as the hot pot session continues.',
        },
        {
            title: 'Build the aromatic lemongrass broth',
            description: 'Heat neutral oil and annatto oil together in a large pot. Fry garlic, bruised lemongrass, smashed galangal, fresh turmeric, and halved chilies for 4-5 minutes until deeply fragrant and the oil has turned deep orange-red from the annatto and turmeric. Add the strained frog bone broth. Add young coconut water. Season with fish sauce and sugar. Bring to a boil. The broth should be bright orange-red, visibly fragrant, and clearly spicy when tasted.',
            tip: 'The five-stalk lemongrass quantity for lẩu ếch is deliberately generous — the hot pot broth must sustain its lemongrass character through the entire meal as more ingredients are added and the broth dilutes. Starting with five stalks ensures the lemongrass remains the dominant aromatic note from the first piece of frog to the last bowl of broth over rice.',
        },
        {
            title: 'Season the frog pieces',
            description: 'Season the frog pieces lightly with fish sauce and turmeric. Arrange on plates for the table — thin-sliced sections on one plate, whole legs on another. The thin slices cook faster (20 seconds) and are the most efficient for the hot pot format; the whole legs take 45-60 seconds and produce more satisfying individual pieces. Serve both.',
            tip: 'The turmeric on the raw frog before the hot pot is the same technique as in ếch xào lăn — it eliminates any gamey character from the fresh frog before it enters the broth. Frog without turmeric in a spicy lemongrass broth can contribute an earthy note to the liquid that accumulates throughout the meal; turmeric-seasoned frog contributes only sweetness.',
        },
        {
            title: 'Set the lẩu table',
            description: 'Transfer the hot broth to a clay pot or fondue pot with a tabletop burner. Arrange all vegetables, frog plates, rice vermicelli, herb plate, and individual dipping sauce bowls around the central pot. Add a few pineapple rings to the broth if available — their bromelain enzyme tenderizes the frog further and their acidity brightens the broth throughout the meal.',
            tip: 'The arrangement of the lẩu ếch table should prioritize access — every diner should reach every component without asking. The vegetable plates nearest the pot, the herb plate at the opposite end, the frog plates within easy reach of the person managing the pot. The table arrangement is the service design for a meal that cannot be paused.',
        },
        {
            title: 'Cook and eat — the lẩu ếch rhythm',
            description: 'Begin with the vegetables — add water spinach, banana blossom, and mushrooms to the broth. They need 1-2 minutes. Then cook the frog pieces individually: thin slices for 20 seconds, whole legs for 45-60 seconds. Dip each piece in the nước chấm. Eat with herbs. Add rice vermicelli to the broth after the first round of frog. The broth deepens continuously — the last bowl of the session, poured over rice, is the most complex liquid of the meal.',
            tip: 'The 20-second cook time for thin frog slices in the lẩu ếch broth is the fastest cooking time for any protein in Vietnamese hot pot cooking. Keep count — frog overcooks quickly. The test: a thin slice that has been in the broth for 20 seconds should be completely white and opaque when removed. Any translucency means 5 more seconds.',
        },
        {
            title: 'The final broth bowl',
            description: 'As with lẩu dê and all serious Vietnamese hot pot preparations, the final act of lẩu ếch is the broth ladled over plain rice. By this point the broth has absorbed the natural sweetness of every frog piece, the umami of the mushrooms, the slight bitterness of the banana blossom, and the concentrated flavor of the lemongrass-galangal. It is more complex than when it started. Eat it slowly, with a squeeze of lime and a small amount of sliced chili. This is the meal\'s conclusion and its most honest moment.',
            tip: 'The tradition of ending a Vietnamese lẩu with the broth over rice is the acknowledgment that the best result of the hot pot is not any individual ingredient cooked in it, but the accumulated broth that has been enriched by all of them. Lẩu ếch sả ớt broth at the end of the meal is frog, lemongrass, galangal, coconut water, and the contributions of everything that passed through it. That is worth a bowl of rice.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
