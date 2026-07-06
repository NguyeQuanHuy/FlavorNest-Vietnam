'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'lau-tha-phan-thiet',
    title: `Phan Thi?t Drop Hotpot`,
    subtitle: `L?u Th? Phan Thi?t — A two-vessel communal meal where rice paper rolls are dropped into fish broth and eaten with raw vegetables and muoi ot xanh.`,
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1569562211093-4ed0d0758f12?auto=format&fit=crop&w=1600&q=85`,
    intro: `L?u th? is Phan Thi?t's most distinctive communal meal — a dish that does not translate cleanly into any other Vietnamese culinary category. The name means literally "hotpot of dropping": a simmering pot of clear fish broth sits at the centre of the table, and each diner rolls their own small rice paper roll (nem) filled with fresh shrimp, pork belly, and herbs, then drops (th?) it directly into the hot broth to cook briefly before eating. The roll softens and swells in the broth over 60 to 90 seconds, the shrimp cooks through, the herbs inside perfume the liquid, and the roll is retrieved, dipped in muoi ot xanh (green chili salt), and eaten with a mouthful of raw vegetables.\n\nWhat makes l?u th? structurally unique is that it combines two formats — the individual roll of g?i cu?n and the communal broth of l?u — into a single dish where the act of rolling and dropping is itself part of the meal's rhythm. There is no fixed order of eating. Diners roll at different speeds. The broth accumulates flavour from successive rolls throughout the meal, becoming progressively richer as shrimp and herb flavours leach into it. By the end of the meal the broth is a different liquid than it was at the start — a soup that has been seasoned by the eating itself.\n\nL?u th? is specific to Bình Thu?n province. It appears in restaurants along Nguy?n Ðình Chi?u street in Mui Né and at beachside establishments in Phan Thi?t's fishing quarter. Outside Bình Thu?n it is almost unknown. In English it has never been documented.`,
    ingredientSections: [
        {
            title: `Clear fish broth (nu?c l?u)`,
            items: [
                { amount: 800, unit: 'g', name: `fish bones and heads`, note: `snapper or mackerel — blanched and rinsed` },
                { amount: 80, unit: 'g', name: `dried shrimp (tôm khô)`, note: `soaked 15 min` },
                { amount: 3, name: `lemongrass stalks, bruised` },
                { amount: 4, name: `kaffir lime leaves, torn` },
                { amount: 2, name: `medium onions, halved and charred` },
                { amount: 20, unit: 'g', name: `rock sugar (du?ng phèn)` },
                { amount: 2.5, unit: 'tbsp', name: `fish sauce (nu?c m?m Phan Thi?t)`, note: `40°N preferred` },
                { amount: 1, unit: 'tsp', name: `salt` },
                { amount: 2.5, unit: 'L', name: `water` },
            ],
        },
        {
            title: `Roll fillings (nhân cu?n) — per person`,
            items: [
                { amount: 200, unit: 'g', name: `fresh medium shrimp (tôm tuoi)`, note: `peeled, deveined, left whole — they cook inside the roll in the broth` },
                { amount: 150, unit: 'g', name: `pork belly (ba ch? heo)`, note: `boiled 20 min, cooled, sliced thin 3mm` },
                { amount: 100, unit: 'g', name: `pork skin (bì heo)`, note: `boiled, fat scraped, cut thin — optional but traditional` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `bunch mint (húng l?i)` },
                { amount: 1, name: `bunch garlic chives (h?)`, note: `tied around the outside of the roll as a seal` },
            ],
        },
        {
            title: `Rice paper (bánh tráng)`,
            items: [
                { amount: 20, name: `round rice paper sheets (bánh tráng m?ng)`, note: `22–24 cm diameter, thin — briefly dipped in warm water 3 seconds to soften just enough to roll without cracking` },
            ],
        },
        {
            title: `Mu?i ?t xanh (green chili salt — the essential dip)`,
            items: [
                { amount: 2, unit: 'tsp', name: `coarse salt` },
                { amount: 5, name: `fresh green bird's eye chili, minced to paste` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1.5, unit: 'tbsp', name: `lime juice` },
                { amount: 3, name: `kaffir lime leaves, central rib removed, sliced paper-thin` },
            ],
        },
        {
            title: `Raw vegetable plate (rau s?ng)`,
            items: [
                { amount: 150, unit: 'g', name: `bean sprouts (giá d?)`, note: `raw` },
                { amount: 1, name: `head butter lettuce, leaves separated` },
                { amount: 1, name: `cucumber, cut into batons` },
                { amount: 200, unit: 'g', name: `green mango or green papaya, shredded`, note: `tossed with pinch of salt and lime — serves as a palate reset between rolls` },
                { amount: 1, name: `bunch perilla (tía tô)` },
                { amount: 2, name: `limes, wedged` },
            ],
        },
    ],
    steps: [
        {
            title: `Build the fish broth`,
            description: `Blanch fish bones and heads in boiling water 5 minutes, drain, rinse clean. Char onion halves cut-side down over gas flame until blackened on the flat surface, about 4 minutes. Combine cleaned bones, soaked dried shrimp, charred onions, bruised lemongrass, and kaffir lime leaves with 2.5 L cold water in a stockpot. Bring to a boil, skim thoroughly for the first 10 minutes, then reduce to the barest simmer. Cook uncovered 45 minutes only — fish broth extracts fast and turns bitter beyond this point. Strain through a fine mesh sieve. Season with rock sugar, fish sauce, and salt. The broth should be pale gold, clear, faintly sweet, and deeply aromatic with lemongrass and kaffir lime. Keep warm on low heat until serving.`,
            tip: `The broth for l?u th? is lighter and more aromatic than standard l?u broth — it is not meant to be rich or heavily seasoned at the start, because it will accumulate flavour from the shrimp and herbs inside each roll as the meal progresses. A broth that starts too strong becomes overpowering by the tenth roll. Start restrained.`,
        },
        {
            title: `Prepare the pork belly and skin`,
            description: `Boil pork belly whole in lightly salted water for 20 minutes until cooked through but still firm — it should slice cleanly without falling apart. Cool completely before slicing into 3mm pieces across the grain. Boil pork skin separately for 15 minutes, scrape fat from the inner surface while still hot, cut into 3 cm strips. Both components are served at room temperature alongside the raw shrimp for rolling — they are not pre-cooked further.`,
        },
        {
            title: `Make the mu?i ?t xanh`,
            description: `Pound fresh green chili and salt together in a mortar until a rough paste forms — not completely smooth. Add sugar and pound briefly. Add lime juice and stir to combine. Fold in paper-thin kaffir lime leaf slices. The condiment should be vivid green, intensely aromatic, sharp with lime, and hot with fresh chili. Unlike dried chili condiments, mu?i ?t xanh is a fresh preparation — make it no more than 30 minutes before eating. The colour and volatile aroma of fresh green chili fades quickly.`,
            tip: `Mu?i ?t xanh is the condiment axis around which l?u th? rotates. The roll coming out of the hot broth is bland on its own — unseasoned rice paper, barely cooked shrimp, herbs. The mu?i ?t xanh is the entire seasoning event. Its intensity must be calibrated to the roll size: a tightly rolled compact nem needs more contact with the dipping salt than a loosely rolled one. This is why it is served in a small deep bowl rather than a flat plate — the roll is dipped vertically, coating the end and side.`,
        },
        {
            title: `Set up the table`,
            description: `Place the pot of simmering broth at the centre of the table on a portable burner set to low — the broth should maintain a gentle simmer throughout the meal, never a rolling boil. Arrange around it: a plate of raw shrimp, sliced pork belly, pork skin, rau ram, and mint for rolling; a bowl of warm water for softening rice paper sheets; the raw vegetable plate; shredded green mango; individual small bowls of mu?i ?t xanh; and lime wedges. Each person has their own rolling mat or flat plate to work on. The meal begins when the broth is simmering.`,
        },
        {
            title: `Roll technique — the l?u th? nem`,
            description: `Dip one rice paper sheet in warm water for 3 seconds — not longer. It should still feel firm but pliable, not fully soft. Place flat on your rolling surface. Working quickly before it softens fully: lay 2-3 mint and rau ram leaves horizontally across the lower third of the sheet. Add 2 slices of pork belly and a few strips of pork skin. Place 2 whole raw shrimp on top, tails pointing out. Do not overfill — the roll must close tightly or it will fall apart in the broth. Roll the bottom edge up over the filling, fold the sides in, then roll forward firmly to form a tight cylinder. Tie a garlic chive around the centre of the roll as a visual marker and additional seal.`,
            tip: `The garlic chive tie is the Phan Thi?t detail that distinguishes l?u th? rolls from standard g?i cu?n. It holds the roll closed during the broth submersion, prevents the rice paper from unrolling as it softens, and adds a faint allium note to the broth as the chive cooks. Tie firmly but not so tight the chive cuts through the paper.`,
        },
        {
            title: `Drop, time, retrieve`,
            description: `Lower the completed roll gently into the simmering broth — do not drop from height or the impact opens the roll. Submerge completely using a spoon. The roll will begin to swell and the rice paper will turn from white to translucent within 30 seconds. Leave in the broth for 60 to 90 seconds: at 60 seconds the shrimp inside is just cooked through and the rice paper is soft but still holds together. At 90 seconds the shrimp is fully cooked and the roll has softened to maximum pliability. Beyond 90 seconds the roll begins to disintegrate. Retrieve with a flat spoon or spider strainer — do not use tongs, which tear the softened paper.`,
            tip: `Multiple rolls can be in the broth simultaneously — in practice, each diner drops a new roll when they retrieve the previous one, so the pot may hold 3-4 rolls at once by mid-meal. Use the garlic chive colour as a timer: a bright green chive means the roll has been in under 60 seconds; a khaki-olive chive means 90 seconds or beyond. This visual timer requires no clock.`,
        },
        {
            title: `Eat and repeat`,
            description: `Retrieve the roll and place in your personal bowl. Dip one end into mu?i ?t xanh — rotate to coat the side and tip. Eat in two bites alongside raw bean sprouts and a leaf of lettuce or perilla. Take a pinch of shredded green mango between rolls to reset the palate. Roll the next nem while the previous one is in the broth. The rhythm of l?u th? — roll, drop, eat, roll — is the meal. By the halfway point the broth will have darkened slightly and become sweeter and more aromatic from accumulated shrimp and herb flavour. In Phan Thi?t, this mid-meal broth is ladled into small cups and drunk alongside the rolls as it develops.`,
        },
        {
            title: `Finish with the enriched broth`,
            description: `When all the rolls have been eaten, the remaining broth in the pot is now a light shrimp and herb consommé — seasoned by the meal itself. Add any remaining raw shrimp directly to the broth and cook 2 minutes. Taste and adjust with a small amount of fish sauce if needed. Ladle into bowls and drink as a closing soup course with the last of the raw vegetables. In Phan Thi?t restaurants, this final broth drinking is not optional — the waiter brings small bowls automatically when the last roll is retrieved.`,
            tip: `The progression of the broth from light fish stock to shrimp-herb consommé over the course of the meal is the most philosophically interesting element of l?u th? — it is a dish that seasons itself through the act of eating. The final broth bears no resemblance to the starting broth and is considered its own reward. Do not drain or discard it.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
