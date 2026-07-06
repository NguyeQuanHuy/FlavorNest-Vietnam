'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'hu-tieu-sa-te',
    title: 'H? Ti?u Sa T? (Saigon Satay Noodle Soup)',
    subtitle: 'Flat rice noodles in a rich, nutty, chili-red broth of roasted peanuts, sesame, lemongrass, and sa t? paste with tender beef slices — the Teochew-Vietnamese noodle soup of Ch? L?n that exists almost nowhere outside Saigon.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/hu-tieu-sa-te.jpg',
    intro: `H? ti?u sa t? is the noodle soup of Ch? L?n — Saigon's Chinatown — created by the Teochew (Tri?u Châu) community who brought their satay broth tradition from southern China through Cambodia and adapted it to Vietnamese ingredients over generations. It is one of the rarest noodle soups in Vietnam: even within Saigon, only a handful of decades-old family shops in District 5 and District 6 make the authentic version, and outside Saigon it barely exists at all. The broth is the entire identity of the dish: a beef bone base enriched with a sa t? paste made from roasted peanuts, toasted sesame, dried chili, lemongrass, galangal, garlic, and shallots, all fried into a deep red oil-paste and then simmered into the broth until the result is thick enough to coat the noodles — nutty, gently spicy, faintly sweet, with a complexity closer to a Southeast Asian curry than to any other Vietnamese noodle broth. The beef is sliced thin and cooked rare in the bowl. The garnish is restrained — cucumber, fresh herbs, roasted peanuts — because the broth needs no help. H? ti?u sa t? is the dish that proves Vietnamese cuisine contains entire regional Chinese traditions inside it, transformed into something that now exists nowhere else in the world in quite this form.`,
    ingredientSections: [
        {
            title: 'Broth base',
            items: [
                { amount: 1, unit: 'kg', name: 'beef bones (xuong bò)', note: 'marrow and knuckle bones — blanched and rinsed' },
                { amount: 2.5, unit: 'L', name: 'water' },
                { amount: 3, name: 'shallots', note: 'halved and charred' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: 'sliced and smashed' },
                { amount: 1, name: 'cinnamon stick', note: 'small — a Teochew note in the broth' },
                { amount: 2, name: 'star anise' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
            ],
        },
        {
            title: 'Sa t? paste (the soul of the dish)',
            items: [
                { amount: 100, unit: 'g', name: 'roasted peanuts', note: 'ground to a coarse paste — the body of the sa t?' },
                { amount: 2, unit: 'tbsp', name: 'toasted sesame seeds', note: 'ground' },
                { amount: 4, unit: 'tbsp', name: 'dried chili flakes', note: 'or 8-10 dried red chilies, soaked and blended. Adjust for heat preference — the authentic version is moderately spicy.' },
                { amount: 3, name: 'lemongrass stalks', note: 'inner stalk, finely minced' },
                { amount: 20, unit: 'g', name: 'galangal (ri?ng)', note: 'minced — the Teochew aromatic. Substitute ginger if unavailable.' },
                { amount: 6, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'curry powder', note: 'Vietnamese cà ri powder — the Cambodian-route influence' },
                { amount: 1, unit: 'tbsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 120, unit: 'ml', name: 'neutral oil' },
                { amount: 1, unit: 'tbsp', name: 'shrimp paste (m?m tôm) or dried shrimp, ground', note: 'optional — adds the funky depth of old Ch? L?n shops' },
            ],
        },
        {
            title: 'Beef and noodles',
            items: [
                { amount: 400, unit: 'g', name: 'beef sirloin or eye round', note: 'sliced paper-thin against the grain — cooks rare in the hot broth' },
                { amount: 500, unit: 'g', name: 'fresh h? ti?u noodles (flat rice noodles)', note: 'or dried rice sticks (bánh ph? 5mm), soaked and blanched' },
                { amount: 100, unit: 'g', name: 'bean sprouts' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 1, name: 'cucumber', note: 'julienned — the signature h? ti?u sa t? garnish, unusual in hot noodle soups' },
                { amount: 50, unit: 'g', name: 'roasted peanuts', note: 'roughly crushed — extra, for each bowl' },
                { amount: 1, name: 'bunch Thai basil (húng qu?)' },
                { amount: 1, name: 'bunch cilantro' },
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the beef bone broth',
            description: 'Blanch beef bones in boiling water for 10 minutes, drain and rinse thoroughly. Return to a clean pot with 2.5L cold water, charred shallots, ginger, cinnamon, and star anise. Bring to a boil, reduce to the lowest simmer, skim foam for the first 20 minutes. Simmer uncovered for 1.5-2 hours minimum — longer is better. Season with fish sauce, salt, and sugar. The base broth should be clear, beefy, and faintly spiced — the sa t? paste provides the rest.',
            tip: 'Keep the spicing of the base broth restrained — one cinnamon stick, two star anise only. The sa t? paste carries the complexity. An over-spiced base broth competes with the paste and muddies the final result.',
        },
        {
            title: 'Make the sa t? paste — the defining step',
            description: 'Heat oil in a wok over medium heat. Add minced lemongrass, galangal, garlic, and shallots. Fry slowly for 5-6 minutes until golden and deeply fragrant — do not rush or brown aggressively. Add chili flakes and curry powder, fry 1 minute until the oil turns deep red. Add ground peanuts, ground sesame, sugar, fish sauce, and shrimp paste if using. Cook, stirring constantly, for 3-4 minutes until the mixture becomes a thick, glossy, brick-red paste with oil separating at the edges. Remove from heat.',
            tip: 'The oil separating at the edges is the visual sign the paste is done — the aromatics have fully fried and the flavors have melded. Undercooked sa t? tastes raw and gritty; properly cooked sa t? is smooth, deep, and integrated. This paste keeps refrigerated for 2 weeks and improves the first 2 days.',
        },
        {
            title: 'Marry the paste and broth',
            description: 'Strain the beef broth, discard bones and aromatics, return to a clean pot. Whisk in two-thirds of the sa t? paste. Simmer gently for 15-20 minutes — the paste emulsifies into the broth, thickening it slightly and turning it a deep orange-red. Taste and adjust: more paste for intensity, fish sauce for salt, sugar if too sharp. The finished broth should coat a spoon lightly — thicker than ph? broth, thinner than curry.',
            tip: 'Hold back one-third of the paste — it is served at the table so each diner can intensify their own bowl. This is how the old Ch? L?n shops do it: the broth arrives balanced, the paste pot sits on the table for the devoted.',
        },
        {
            title: 'Slice the beef paper-thin',
            description: 'Freeze the beef for 30 minutes until firm. Slice against the grain into sheets 2mm thin — nearly translucent. Arrange the raw slices in each serving bowl before the broth is added. The boiling broth poured directly over the beef cooks it to rare-medium in the bowl, exactly like ph? tái. Thicker slices will not cook through — 2mm is the requirement.',
            tip: 'If rare beef is not preferred, swish the slices in the simmering broth pot for 10 seconds before placing in the bowl. But the traditional h? ti?u sa t? serves it tái — cooked only by the broth in the bowl.',
        },
        {
            title: 'Prepare noodles and assemble',
            description: 'Blanch fresh h? ti?u noodles in boiling water for 20-30 seconds, drain well, divide among bowls. Blanch bean sprouts 10 seconds, add to bowls. Arrange the raw beef slices over the noodles. Ladle the boiling sa t? broth generously over everything — the beef turns pale pink immediately. Top with julienned cucumber, crushed peanuts, Thai basil, cilantro, and spring onion.',
            tip: 'The julienned cucumber is non-negotiable — it is the signature of h? ti?u sa t? and exists in no other Vietnamese hot noodle soup. Its cool crunch against the rich, nutty broth is the textural contrast the dish is built on.',
        },
        {
            title: 'Serve with the paste pot',
            description: 'Serve immediately with lime wedges, sliced chili, and the reserved sa t? paste in a small bowl at the center of the table. Each diner adjusts: a squeeze of lime brightens the rich broth, extra paste deepens it. Eat while very hot — the broth thickens slightly as it cools and the beef continues cooking. The correct first move: a spoonful of pure broth before touching the noodles, to understand what three generations of Ch? L?n cooks built.',
            tip: 'Like all paste-thickened broths, h? ti?u sa t? settles — stir the bowl gently between bites to redistribute the peanut-sesame body. The last spoonfuls at the bottom are the richest.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
