'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-tom-song-cau',
    title: 'G?i Tôm Sông C?u (Sông C?u Fresh Shrimp Salad)',
    subtitle: 'Raw fresh shrimp from Sông C?u bay cured for minutes in lime juice and m?m nhi until translucent, tossed with green mango, shallots, rau ram, and roasted peanuts — the Phú Yên raw shrimp salad that uses the finest fish sauce in Vietnam as the curing agent.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '25 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/goi-tom-song-cau.jpg',
    intro: `G?i tôm Sông C?u is the raw shrimp salad of the bay town of Sông C?u — the fishing port at the northern tip of Phú Yên province where the combination of the Cù Mông lagoon waters and the South China Sea produces shrimp of exceptional sweetness that are eaten raw, cured only by the lime juice and m?m nhi they are tossed with minutes before serving. The dish exists because of two ingredients that are specific to this place: the tôm tuoi Sông C?u — the fresh shrimp harvested daily from the protected bay waters around Cù Mông and Xuân Ðài, smaller and sweeter than open-sea shrimp — and the m?m nhi produced in the fishing villages along the coast, which brings its concentrated, complex umami to the curing process in a way that ordinary fish sauce cannot approach. G?i tôm Sông C?u is in the tradition of Vietnamese raw seafood salads — g?i tôm s?ng — where the lime juice and fish sauce denature the surface proteins of the raw shrimp, creating a texture that is between raw and cooked in the way that ceviche is between raw and cooked, but faster and without heat. The shrimp are peeled, tossed in the curing liquid for 5-10 minutes only — long enough to turn the surface translucent and lightly firm the texture, not long enough to cook the flesh through — then combined with the salad elements and served immediately. The eating experience is specific: the shrimp has the sweetness of raw seafood and the slight firmness of just-cooked shrimp simultaneously, with the m?m nhi depth present in every bite. Outside Sông C?u, this salad is most faithfully reproduced with the freshest possible raw shrimp and the best m?m nhi available.`,
    ingredientSections: [
        {
            title: 'Shrimp',
            items: [
                { amount: 400, unit: 'g', name: 'very fresh raw shrimp (tôm tuoi s?ng)', note: 'must be sashimi-grade fresh — alive or just killed within hours. Small to medium size. Peeled, deveined, tails removed. If freshness is in any doubt, do not make this dish.' },
                { amount: 3, unit: 'tbsp', name: 'fresh lime juice', note: 'for curing — squeezed from 2 limes' },
                { amount: 2, unit: 'tbsp', name: 'm?m nhi (premium first-press fish sauce)', note: 'the curing and primary seasoning agent — use the best quality available' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Salad components',
            items: [
                { amount: 150, unit: 'g', name: 'green unripe mango (xoài xanh)', note: 'finely julienned — the sourness complements the raw shrimp character' },
                { amount: 3, name: 'shallots', note: 'thinly sliced, soaked in ice water 10 minutes, drained' },
                { amount: 2, name: 'fresh red chilies', note: 'thinly sliced' },
                { amount: 60, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
            ],
        },
        {
            title: 'Herbs — generous',
            items: [
                { amount: 1, name: 'large bunch Vietnamese coriander (rau ram)', note: 'leaves only — the essential herb' },
                { amount: 0.5, name: 'bunch mint (húng l?i)', note: 'leaves only' },
                { amount: 3, name: 'spring onions', note: 'thinly sliced' },
            ],
        },
        {
            title: 'Final dressing',
            items: [
                { amount: 1, unit: 'tbsp', name: 'm?m nhi', note: 'additional — added after curing to season the full salad' },
                { amount: 0.5, unit: 'tbsp', name: 'fresh lime juice', note: 'additional — to brighten at assembly' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'sesame oil' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 16, name: 'sesame rice crackers (bánh tráng mè)', note: 'Phú Yên style — for scooping' },
                { amount: 2, name: 'extra limes, cut in wedges' },
                { amount: 1, name: 'extra fresh chili, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Freshness assessment — the most important step',
            description: 'Before doing anything else: assess the freshness of the shrimp. They must smell of the sea — clean, briny, with no ammonia, no sulphur, no fishiness. The flesh should be firm and slightly translucent, not soft or opaque white (which indicates deterioration). If using live shrimp: the assessment is passed. If using previously live shrimp purchased at market: they should have been alive or killed that morning. If in any doubt about freshness for a raw preparation: do not proceed. Cook them by another method instead.',
            tip: 'G?i tôm s?ng is one of the Vietnamese preparations where freshness is not a preference but a requirement. The lime juice and fish sauce cure does not make questionable shrimp safe to eat raw — it only changes the texture of fresh shrimp. Freshness is the non-negotiable foundation.',
        },
        {
            title: 'Peel, devein, and prepare the shrimp',
            description: 'Peel the shrimp completely including the tail. Devein by making a shallow cut along the back and removing the dark intestinal tract. Rinse briefly under cold water. Pat dry with paper towels. Place in a glass or ceramic bowl — not metal, which reacts with the lime juice and imparts a metallic taste to the raw shrimp.',
            tip: 'A glass or ceramic bowl is specifically required for the curing step. Metal bowls react with the citric acid from the lime and the salt from the m?m nhi and produce a faint metallic flavor in the shrimp that is detectable in a preparation this delicate.',
        },
        {
            title: 'Cure for exactly 5-10 minutes',
            description: 'Combine lime juice, m?m nhi, and sugar. Pour over the shrimp. Toss to coat every piece. Set a timer. After 5 minutes, check one shrimp: the exterior should be turning slightly firm and the very surface turning from translucent raw-pink to a lighter, more opaque color. At 8-10 minutes, the surface should be clearly changed but the center still raw. This is the correct moment to combine with the salad. Do not leave longer — the lime continues to "cook" the shrimp and the texture becomes too firm.',
            tip: 'The 5-10 minute window is strict. At 5 minutes: the shrimp has a raw center with a slightly cured surface — the texture most closely associated with the original Sông C?u style. At 15 minutes: the shrimp is entirely firm, closer to poached — still good but different. At 30 minutes: rubbery. Set the timer and respect it.',
        },
        {
            title: 'Assemble immediately',
            description: 'When the curing time is reached, drain the shrimp from the excess curing liquid — reserve 1 tablespoon of this liquid, now infused with raw shrimp flavor and m?m nhi, to add to the final dressing. In a large bowl, combine the cured shrimp, julienned green mango, soaked shallots, rau ram, mint, spring onion, and sliced chili. Add the additional m?m nhi, lime juice, sugar, and sesame oil. Toss gently. Taste and adjust.',
            tip: 'The reserved curing liquid added to the dressing is the technique that ensures the raw shrimp flavor is distributed throughout the salad rather than concentrated in the shrimp alone. It tastes intensely of both the shrimp and the m?m nhi together.',
        },
        {
            title: 'Plate and serve within 5 minutes',
            description: 'Transfer to a serving plate. Top with crushed peanuts and crispy fried shallots at the last moment. Serve with sesame rice crackers and extra lime. G?i tôm Sông C?u must be eaten within 5 minutes of plating — the lime juice continues working on the shrimp even after assembly, and the salad becomes over-cured and the texture changes noticeably within 10 minutes. This is a make-and-eat-immediately dish without any flexibility on timing.',
            tip: 'Inform everyone at the table before assembling — g?i tôm Sông C?u waits for nobody. The crackers should be open and ready, the lime wedges pre-cut, the dipping sauces in their bowls. The moment the salad is plated is the moment the eating begins.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
