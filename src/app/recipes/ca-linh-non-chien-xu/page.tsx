'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'ca-linh-non-chien-xu',
    title: `Mekong Flood Season Baby Fish`,
    subtitle: `Cá Linh Non Chiên Xù — Tiny flood-season fish fried whole until crispy, eaten bones and all — An Giang's most seasonal and most mourned dish.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Cá linh (Henicorhynchus siamensis — the Siamese mud carp) is the fish that defines the annual flood season (mùa nước nổi) of the upper Mekong Delta — the months from late August to early November when the Tonle Sap lake in Cambodia reverses its flow and pushes enormous volumes of water and fish downstream into the An Giang and Đồng Tháp floodplains. Cá linh migrate in dense schools during this period, and the young fish (cá linh non) — fingernail-sized, 3-5cm long, translucent — arrive in the billions in the first weeks of the flood, caught by the basketful in scoop nets along the riverbanks.\n\nCá linh non chiên xù is the simplest and most celebrated preparation: the tiny fish are tossed in seasoned rice flour and deep-fried whole until every part — skin, bones, fins, head — is completely crispy and edible. A properly fried cá linh non shatters between the teeth like a thin cracker, releasing a sweet, clean river flavour with no trace of the bone or scale resistance that makes larger fish difficult to eat whole. The entire fish disappears in one bite.\n\nThe seasonality is absolute. Cá linh non are only available for 6-8 weeks per year, only in the upper Mekong Delta floodplain, and only when the flood waters are at a specific height that brings the young fish into the shallow inundated rice fields. Outside this window — outside this geography — the dish does not exist. An Giang residents plan around the flood season specifically to eat cá linh non, and the first catch of the season is a community event in riverside villages. This recipe documents the correct frying technique for authentic cá linh non, and the closest substitutes available in Germany.`,
    ingredientSections: [
        {
            title: `The fish`,
            items: [
                { amount: 500, unit: 'g', name: `ca linh non (baby Siamese mud carp)`, note: `3-5cm whole fish — available frozen at Vietnamese grocers in An Giang diaspora communities; substitute: fresh whitebait (Stintfisch in German), fresh sprats, or tiny fresh sardines 3-5cm` },
                { amount: 1, unit: 'tsp', name: `salt`, note: `tossed with fish before coating` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
            ],
        },
        {
            title: `Crispy coating (bot chien xu)`,
            items: [
                { amount: 100, unit: 'g', name: `rice flour (bot gao)`, note: `80% of coating` },
                { amount: 30, unit: 'g', name: `tapioca starch (bot nang)`, note: `20% — creates extra crispness` },
                { amount: 1, unit: 'tsp', name: `ground turmeric`, note: `colours the coating golden` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `baking powder`, note: `creates lightness in the crust` },
            ],
        },
        {
            title: `For frying`,
            items: [
                { amount: 500, unit: 'ml', name: `neutral oil`, note: `for deep frying — enough for 5-6cm depth in a small pot` },
            ],
        },
        {
            title: `Dipping sauce (nuoc mam gung)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce (nuoc mam)` },
                { amount: 2, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tbsp', name: `sugar` },
                { amount: 2, unit: 'tbsp', name: `warm water` },
                { amount: 30, unit: 'g', name: `fresh ginger, minced fine`, note: `generous — the ginger quantity is high for cá linh non specifically` },
                { amount: 2, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
        {
            title: `Mandatory accompaniments`,
            items: [
                { amount: 1, name: `bunch rau om (rice paddy herb)` },
                { amount: 1, name: `bunch rau ram` },
                { amount: 150, unit: 'g', name: `bong dien dien (sesbania flower)`, note: `the An Giang flood season flower — eaten raw; substitute: chrysanthemum greens` },
                { amount: 100, unit: 'g', name: `bap chuoi (banana blossom)`, note: `shredded thin` },
                { amount: 2, name: `limes, wedged` },
                { amount: 10, name: `sheets rice paper (banh trang)`, note: `for wrapping` },
            ],
        },
    ],
    steps: [
        {
            title: `Clean and season the fish`,
            description: `If using fresh cá linh non: rinse in cold salted water, drain. No gutting needed — at 3-5cm the innards are so small they are negligible and will crisp completely during frying. If using frozen: thaw in cold water 20 minutes, drain and pat completely dry with paper towels. Surface moisture is the enemy of crispy frying — wet fish creates steam rather than crust. Toss the dry fish with salt, pepper, and sugar. Rest 5 minutes — the salt draws any remaining surface moisture out. Pat dry again with fresh paper towels.`,
            tip: `Cá linh non must be completely dry before coating or the rice flour paste forms a soggy layer rather than a thin, even crust. In An Giang, vendors sun-dry the fish on bamboo trays for 30 minutes before frying on hot days — the Mekong Delta sun does the work of paper towels faster and more completely. At home, spread the seasoned fish on a clean tray lined with paper towels and leave uncovered in front of a fan for 10 minutes after patting dry.`,
        },
        {
            title: `Make the coating`,
            description: `Combine rice flour, tapioca starch, ground turmeric, salt, and baking powder in a wide shallow bowl. Mix thoroughly — the turmeric should colour the flour mixture a pale yellow and distribute evenly with no streaks. The 80:20 rice to tapioca ratio produces a coating that is simultaneously thin enough to let the fish flavour come through and thick enough to protect the fish during the high-heat fry. The baking powder creates micro-bubbles during frying that lighten the crust structure and produce the characteristic xu (crispy-shattered) texture of the correct version.`,
        },
        {
            title: `Coat the fish`,
            description: `Working in batches of about 20 fish, add to the flour mixture and toss to coat every surface — shake off excess flour by lifting the fish in a small sieve and tapping gently. The coating should be thin and even — if you can see the fish skin through the coating, that is correct. A thick coating produces a doughy result; a thin coating produces the shatter-crisp result. Do not coat all fish at once — the moisture from earlier batches will cause the coating to clump.`,
        },
        {
            title: `Deep fry at 180°C — in small batches`,
            description: `Heat oil to 180°C in a small deep pot — test with a wooden chopstick: small bubbles should form immediately around the chopstick. Working in small batches of 15-20 fish, add to the hot oil — do not crowd or the oil temperature drops and the fish steam rather than fry. Fry 2-3 minutes until deep golden and audibly crispy — you should hear a distinct crunch when pressing the side of the pot with a spoon against a fish. Remove with a spider strainer and drain on a wire rack (not paper towels, which trap steam and soften the crust). Season immediately with a tiny pinch of salt while still hot.`,
            tip: `The second fry is the technique that produces the maximum crispness of cá linh non chiên xù. After the first fry at 180°C for 2-3 minutes: remove the fish and let rest on the rack for 60 seconds. Then return to the oil (now at 190°C, slightly higher) for 30-45 seconds more. This double-fry drives out the last moisture from the interior and produces a crust that stays crispy for 15-20 minutes rather than the 5-minute window of a single fry. The An Giang market vendors always double-fry.`,
        },
        {
            title: `Make the ginger fish sauce`,
            description: `Combine fish sauce, lime juice, sugar, and warm water. Stir until sugar dissolves. Add generous minced ginger — more than seems appropriate, but the high ginger quantity is specifically calibrated for cá linh non because the fish's natural sweetness requires a sharp, aromatic counterpoint that standard nuoc cham's garlic-chili alone cannot provide. Add minced garlic and sliced chili. The sauce should be bright, sharp, with ginger heat arriving before the chili.`,
        },
        {
            title: `Serve immediately and eat the An Giang way`,
            description: `Pile the hot fried cá linh non on a plate — they should be glistening golden, steam still rising. Bring to the table immediately. In An Giang, cá linh non chiên xù is eaten in two ways: directly from the plate with the dipping sauce, popping 3-4 fish at once into the mouth; or wrapped in rice paper with bông điên điển (sesbania flower), banana blossom, rau ôm, and rau răm before dipping. The flood season sesbania flower — yellow, slightly bitter, with a clean grassy note — is the accompaniment that most clearly marks this as a mùa nước nổi dish. Without bông điên điển, you are eating chiên xù; with it, you are eating the flood season.`,
            tip: `Cá linh non chiên xù must be eaten within 10-15 minutes of frying. The crust's crispness is temporary — moisture from the fish interior migrates outward over time and softens the coating. In An Giang, vendors fry in continuous small batches throughout service, never pre-frying large quantities. At home: fry one batch, eat it while frying the next. The waiting is part of the eating.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}