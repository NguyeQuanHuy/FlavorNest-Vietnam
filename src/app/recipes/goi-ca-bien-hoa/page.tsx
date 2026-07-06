'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-ca-bien-hoa',
    title: `Biên Hòa Raw Fish Salad`,
    subtitle: `Gỏi Cá Biên Hòa — Đồng Nai's river fish cured in rice vinegar, dressed with roasted peanuts, sesame, fresh herbs, and a fish sauce built on the river itself.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Biên Hòa sits on the Đồng Nai River — the longest river entirely within Vietnam's borders, running from the Central Highlands through Lâm Đồng, Bình Phước, Đồng Nai, and into the sea east of Saigon. The river has fed Biên Hòa since the first Nguyễn lords settled the region in the seventeenth century, and gỏi cá Biên Hòa is the dish most directly of that river — a raw fish salad made from freshwater fish caught in the Đồng Nai, cured briefly in rice vinegar rather than lime juice, dressed with toasted sesame, crushed peanuts, fried shallots, and a specific set of herbs that includes the river-growing rau răm and the highland-origin lá lốt, and eaten with grilled rice crackers that are made locally from Đồng Nai rice.\n\nWhat distinguishes gỏi cá Biên Hòa from the coastal ceviche-style preparations further south (gỏi cá mai Phan Thiết, gỏi cá trích Phú Quốc) is the vinegar cure rather than the lime cure — rice vinegar works more slowly and more gently than citric acid, producing a texture that is less dramatically changed by the acid and a flavour that retains more of the fish's own character. The fish is partially rather than fully cured: the exterior turns opaque and firms, but the interior retains a slight translucency. This is deliberate. Gỏi cá Biên Hòa is not a fully acid-cooked preparation — it is a raw fish salad in which the acid is a seasoning agent rather than a cooking method.\n\nThe freshwater fish used in Biên Hòa is traditionally cá he (Barbonymus gonionotus — the silver barb), cá mè (silver carp), or cá chép (common carp). All three are firm-fleshed, relatively low in the parasitic risk associated with some other freshwater species, and abundant in the Đồng Nai. This recipe uses cá he as the primary reference but gives substitutions for the European kitchen.`,
    ingredientSections: [
        {
            title: `The fish`,
            items: [
                { amount: 500, unit: 'g', name: `fresh cá hè fillet (Barbonymus gonionotus — silver barb)`, note: `substitute: fresh sea bream, snapper, or yellowtail fillet — must be sashimi-grade; ask fishmonger explicitly` },
                { amount: 150, unit: 'ml', name: `rice vinegar (giam gao)`, note: `unseasoned, 4-5% acidity — not white vinegar, not apple cider vinegar` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar`, note: `added to vinegar cure — softens the sharpness` },
            ],
        },
        {
            title: `Dressing`,
            items: [
                { amount: 2.5, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 1, unit: 'tbsp', name: `rice vinegar`, note: `additional — for dressing` },
                { amount: 1, unit: 'tsp', name: `sesame oil` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, minced` },
                { amount: 1, unit: 'tbsp', name: `neutral oil` },
            ],
        },
        {
            title: `Garnish and texture`,
            items: [
                { amount: 3, unit: 'tbsp', name: `roasted peanuts (dau phong rang)`, note: `crushed coarsely — not powder` },
                { amount: 2, unit: 'tbsp', name: `toasted white sesame seeds (me trang rang)` },
                { amount: 3, unit: 'tbsp', name: `fried shallots (hanh phi)` },
                { amount: 50, unit: 'g', name: `green mango, shredded fine`, note: `the Bien Hoa addition — adds river-bank sourness distinct from the vinegar cure` },
                { amount: 1, unit: 'tsp', name: `toasted dried shrimp powder (tom kho xay)`, note: `optional — ground dried shrimp scattered over top` },
            ],
        },
        {
            title: `The Biên Hòa herb set`,
            items: [
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)`, note: `the mandatory herb — leaves only` },
                { amount: 10, name: `la lot leaves (Piper sarmentosum)`, note: `torn or shredded — the highland-origin herb that distinguishes Bien Hoa from coastal versions` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 1, name: `bunch sawtooth coriander (ngo gai)` },
                { amount: 3, name: `spring onions, sliced thin` },
                { amount: 1, name: `fresh red chili, sliced thin`, note: `for colour` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 12, name: `sheets grilled sesame rice cracker (banh trang me nuong)`, note: `Bien Hoa rice paper is thinner than Tay Ninh variety — crisp, not toasted` },
                { amount: 2, name: `limes, wedged` },
                { amount: 1, name: `head butter lettuce` },
            ],
        },
    ],
    steps: [
        {
            title: `Select and slice the fish`,
            description: `The fish must be the freshest available — for freshwater fish, same-day live purchase from a Vietnamese fishmonger is the standard in Biên Hòa. If using sea fish as a substitute in Germany, request sashimi-grade from a Japanese fishmonger or a trusted fish counter — this means the fish has been handled under cold chain conditions from catch to sale. Remove skin by pressing fillet skin-side down and running a sharp flexible knife between flesh and skin in one clean stroke. Check for pin bones along the lateral line with your fingertip and remove with tweezers. Slice on a 45-degree angle into pieces 3-4mm thick and 5 cm long — thin enough to cure evenly through, thick enough to retain texture. Keep refrigerated until the moment of curing.`,
            tip: `Freshwater fish carries a higher natural parasite load than ocean fish. In Vietnam, the specific species used in gỏi cá Biên Hòa (cá hè, cá mè, cá chép) are considered lower-risk freshwater fish, and the vinegar cure at the ratio used here has been the food safety method for this dish for generations. In Germany with European freshwater fish substitutes, use only farmed trout or sea fish to eliminate parasite risk entirely. The flavour of the salad is excellent with sea bream or snapper.`,
        },
        {
            title: `Rice vinegar cure — 20 minutes`,
            description: `Combine rice vinegar, salt, and sugar in a non-reactive bowl (glass or ceramic). Add sliced fish and toss gently to coat every piece. The vinegar will immediately begin working on the surface proteins. Leave at room temperature for 20 minutes — longer than lime-cured preparations because rice vinegar's acetic acid (4-5% acidity) works more slowly than citric acid (6-8% in lime juice). At 20 minutes, the exterior of each slice will be opaque and firm while the interior retains a faint translucency. This partial cure is the defining texture of gỏi cá Biên Hòa. Do not extend beyond 25 minutes or the fish will be fully firm throughout and lose its character.`,
            tip: `The rice vinegar cure produces a softer, more yielding texture than lime juice and a more complex flavour — acetic acid has a rounder, less sharp character than citric acid, and it leaves a faint sweetness in the fish rather than the bright aggressive sourness of lime. This is why the dressing uses both fish sauce and an additional tablespoon of vinegar rather than lime juice — the flavour profile of the dish is built around vinegar throughout, not a mix of acid sources.`,
        },
        {
            title: `Drain and press`,
            description: `After 20 minutes, pour the fish and vinegar through a fine sieve. Discard the vinegar — it has absorbed fish liquid and lost its structure. Gently press the fish slices with the back of a spoon to remove surface moisture without breaking the pieces. Transfer to a clean dry bowl. Excess liquid in the bowl will dilute the dressing and turn the salad watery within minutes of plating.`,
        },
        {
            title: `Make the dressing`,
            description: `Combine fish sauce, sugar, rice vinegar, sesame oil, minced garlic, minced chili, and neutral oil in a small bowl. Whisk until sugar dissolves and oil is partially emulsified. Taste — it should be savoury, faintly sweet, sharp with vinegar, and fragrant with sesame. The dressing should be more concentrated than a standard nuoc cham because it will be diluted by the residual moisture in the fish and the juices released by the herbs.`,
        },
        {
            title: `Prepare the lá lốt`,
            description: `Wash lá lốt leaves and pat dry. Stack 3-4 leaves together and roll into a cylinder, then slice across into thin ribbons 2-3mm wide — this chiffonade releases the leaf's aromatic oil without bruising it. Lá lốt has a complex aroma: peppery, faintly anise-like, with a slight bitterness that is entirely different from any other Vietnamese herb. It is the element that makes gỏi cá Biên Hòa identifiable from other Vietnamese raw fish salads. If lá lốt is unavailable in Germany — check Vietnamese grocers, particularly Dong Xuan Center which stocks it seasonally — substitute with a small amount of Thai basil and fresh green peppercorn leaves, which approximates the peppery-anise note.`,
            tip: `Lá lốt (Piper sarmentosum) is the same plant family as black pepper and betel leaf. Its flavour is more complex than both — it has the heat structure of pepper without the sharpness, and the herbaceous quality of betel without the astringency. In Biên Hòa, it grows along the river banks and in home gardens throughout Đồng Nai province. The combination of rau răm (Vietnamese coriander) and lá lốt is specifically the Biên Hòa herb signature — rau răm appears in raw fish salads everywhere, but lá lốt in this context is Đồng Nai.`,
        },
        {
            title: `Dress and assemble`,
            description: `Pour dressing over drained cured fish and toss gently to coat. Add half the rau răm leaves, lá lốt chiffonade, mint, spring onion, and shredded green mango. Toss once more. Transfer to a wide serving plate. Scatter crushed peanuts, toasted sesame, and fried shallots over the top in that order — peanuts first as the largest element, sesame second, fried shallots last as the finest. Lay remaining herb leaves on top without tossing. Scatter sliced red chili for colour. If using dried shrimp powder, dust lightly over the entire surface as the final step.`,
            tip: `The layering order of peanuts, sesame, and fried shallots is not decorative — it is textural engineering. Peanuts are heaviest and go deepest; sesame is intermediate; fried shallots are the lightest and most fragile and go on top so they remain crispy for the first bites. If all three are mixed in simultaneously they settle into a uniform texture mass. Layered, each bite has a different ratio depending on where the spoon lands.`,
        },
        {
            title: `Serve and eat the Biên Hòa way`,
            description: `Bring to the table immediately — dressed gỏi cá Biên Hòa should be eaten within 10 minutes of plating before the herbs wilt and the crackers soften from proximity to the salad's moisture. Break a rice cracker into a large piece and use it as a scoop — pick up fish, herbs, peanuts, and shredded mango together in one motion. Wrap in a lettuce leaf if desired. Eat in one or two bites. Squeeze lime over the plate after the first round. In Biên Hòa, gỏi cá is eaten at the start of a meal as the appetiser that opens the table, always with cold beer or rice wine. The salivation triggered by the vinegar, herbs, and sesame is considered the correct preparation of the palate for the meal that follows.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
