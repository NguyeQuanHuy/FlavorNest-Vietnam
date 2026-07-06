'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-ca-mai',
    title: `Silver Whiting Ceviche Salad`,
    subtitle: `G?i Cá Mai — Phan Thi?t's raw silver whiting cured in lime juice, dressed with toasted sesame, roasted peanuts, and fresh herbs.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `G?i cá mai is the signature raw fish dish of the south-central coast — most closely associated with Phan Thi?t (Bình Thu?n province) and Mui Né, where cá mai (silver whiting, Sillago sihama) is caught in the early morning by drag nets in the shallow inshore waters. The fish is small — 15 to 20 cm — with white, delicate flesh and thin, easily removed skin. It is never cooked with heat. The acid in fresh lime juice denatures the proteins in a process identical to ceviche: the flesh turns opaque, firms slightly, and takes on a clean, bright flavour that distinguishes it from any heat-cooked preparation.\n\nWhat separates g?i cá mai from Latin American ceviche is the dressing that follows the acid cure: toasted sesame seeds, roasted and crushed peanuts, fried shallots, fresh herbs (rau ram mandatory, mint optional), and a small amount of fish sauce that rounds the lime's sharpness. The result is simultaneously acidic, nutty, herbaceous, and faintly sweet — four distinct flavour registers in a single dish that takes less than an hour to prepare.\n\nIn Phan Thi?t, g?i cá mai is eaten at beachside restaurants where the fish arrives from the boat within hours of being caught. Freshness is not a preference — it is a requirement. The lime cure masks age in appearance but not in taste. This recipe is written with the assumption of the freshest possible fish. If the fish does not smell of clean ocean, do not make this dish.`,
    ingredientSections: [
        {
            title: `The fish`,
            items: [
                { amount: 500, unit: 'g', name: `fresh silver whiting fillets (cá mai)`, note: `substitute: fresh sea bass, snapper, or bream fillets — must be sashimi-grade fresh` },
                { amount: 150, unit: 'ml', name: `fresh lime juice`, note: `from approximately 8–10 limes — bottled lime juice does not produce the same cure` },
                { amount: 0.5, unit: 'tsp', name: `salt`, note: `added to lime juice to accelerate the cure` },
            ],
        },
        {
            title: `Dressing`,
            items: [
                { amount: 2, unit: 'tbsp', name: `fish sauce (nu?c m?m)` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `lime juice`, note: `additional — for dressing, separate from cure` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 3, name: `bird's eye chili (?t hi?m), minced` },
                { amount: 1, unit: 'tbsp', name: `neutral oil`, note: `carries the dressing across the fish` },
            ],
        },
        {
            title: `Garnish and texture`,
            items: [
                { amount: 3, unit: 'tbsp', name: `roasted peanuts (d?u ph?ng rang)`, note: `crushed coarsely — not powder` },
                { amount: 2, unit: 'tbsp', name: `toasted sesame seeds (mè rang)`, note: `white sesame, dry-toasted until golden` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hành phi)` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)`, note: `leaves only — stems discarded` },
                { amount: 1, name: `bunch mint (húng l?i)`, note: `optional but traditional in Phan Thi?t` },
                { amount: 2, name: `spring onions, sliced thin` },
                { amount: 1, name: `fresh red chili, sliced thin`, note: `for colour — separate from minced chili in dressing` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 10, name: `sheets rice cracker (bánh tráng nu?ng)`, note: `grilled or toasted — for scooping` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, name: `head butter lettuce`, note: `optional — for wrapping` },
            ],
        },
    ],
    steps: [
        {
            title: `Fillet and slice the fish`,
            description: `If using whole cá mai: run a sharp flexible knife along the spine from head to tail on each side to produce two clean fillets. Remove the skin by pressing the fillet skin-side down and running the knife between flesh and skin in one smooth stroke. Check for pin bones by running a finger along the centre line — remove with tweezers. If using pre-filleted fish: inspect for skin and bones and remove. Slice the fillets at a 45-degree angle into thin pieces 3–4 mm thick and 4–5 cm long. Thin, uniform slices cure evenly — thick chunks remain raw in the centre while the outside overcures.`,
            tip: `Keep the fish refrigerated until the last moment before slicing. Cold fish holds its shape under the knife and produces cleaner cuts. Warm fish tears. If slicing feels difficult, return to the freezer for 10 minutes until slightly firm but not frozen.`,
        },
        {
            title: `Lime cure — 15 minutes exactly`,
            description: `Place sliced fish in a non-reactive bowl (glass or ceramic — not metal, which reacts with the acid). Combine fresh lime juice and salt, pour over fish and toss gently to coat every piece. The fish will immediately begin turning opaque at the edges. Leave at room temperature for exactly 15 minutes — no longer. At 15 minutes the flesh is cured through: opaque, slightly firm, bright and clean in flavour. Beyond 20 minutes the acid begins to tighten the proteins past the ideal point, producing a rubbery, chalky texture. Set a timer.`,
            tip: `The 15-minute window is the most critical technical detail in g?i cá mai and the one most home recipes get wrong. Phan Thi?t vendors who make this daily cure for precisely 12–15 minutes based on fillet thickness. Thin slices (3mm): 12 minutes. Thicker slices (5mm): 15–18 minutes. Check by pressing — perfectly cured fish yields slightly and springs back. Overcured fish is rigid.`,
        },
        {
            title: `Drain and press`,
            description: `After 15 minutes, drain the cured fish through a fine sieve — discard the lime juice, which is now acidic and diluted with fish liquid. Gently press the fish with the back of a spoon to remove excess moisture. Excess liquid in the bowl will dilute the dressing and make the finished salad watery. Transfer drained fish to a clean bowl.`,
        },
        {
            title: `Make the dressing`,
            description: `Combine fish sauce, sugar, additional lime juice, minced garlic, and minced chili in a small bowl. Stir until sugar fully dissolves. Add neutral oil and whisk briefly to emulsify. Taste — it should be savoury, sharp, faintly sweet, with chili heat. It should be more concentrated in flavour than a standard nu?c ch?m, as it will be diluted by the moisture remaining in the fish.`,
        },
        {
            title: `Toast sesame and prepare garnish`,
            description: `Place white sesame seeds in a dry pan over medium heat. Stir constantly 3–4 minutes until golden and fragrant — they will pop slightly when ready. Remove immediately to a plate to cool. Crush roasted peanuts coarsely in a mortar — aim for quarters and halves, not powder. Pick rau ram leaves from stems. Slice spring onions thin. Everything should be prepared and at room temperature before dressing the fish.`,
        },
        {
            title: `Dress and assemble`,
            description: `Pour dressing over drained cured fish and toss gently to coat. Add half the rau ram, half the mint if using, and spring onions. Toss once more. Transfer to a serving plate. Scatter crushed peanuts, toasted sesame, and fried shallots over the top. Lay remaining rau ram and mint leaves on top without tossing — they are for visual contrast and individual bites. Arrange sliced red chili for colour. Serve immediately — dressed g?i cá mai should be eaten within 15 minutes of dressing, before the herbs wilt and the peanuts soften.`,
            tip: `Do not toss peanuts and sesame into the fish before serving — they absorb moisture quickly and lose all texture. They go on at the last second, on top, and are mixed into individual bites at the table.`,
        },
        {
            title: `Eat the Phan Thi?t way`,
            description: `Break a piece of grilled rice cracker and use it as a scoop — pick up a portion of dressed fish with herbs and peanuts. Eat in one bite. In Phan Thi?t, the cracker is the utensil; chopsticks are secondary. Squeeze a wedge of lime over the plate halfway through eating when the first lime's brightness has faded into the dish. A cold beer or a glass of iced green tea is the standard accompaniment. Do not let the dish sit — g?i cá mai is a dish of the first ten minutes after plating.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
