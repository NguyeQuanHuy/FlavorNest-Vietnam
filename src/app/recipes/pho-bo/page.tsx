'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'pho-bo',
    title: 'Vietnamese Beef Pho',
    subtitle: 'Pho bo — the universal Vietnamese beef noodle soup. Bone broth, charred aromatics, paper-thin beef, silky rice noodles.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '4 hrs',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/pho-bo.jpg',
    intro: 'There is no single pho. The Hanoi version is restrained and clear; the Saigon version is sweeter, fuller, served with a small mountain of bean sprouts and Thai basil; the Nam Dinh original — where many believe pho was born in the early 1900s — is somewhere between the two. This recipe is the universal one. The bones simmer slowly, the spice bag is bundled tight, and the beef is added raw to the bowl, cooked only by the heat of the broth poured over at the table. Adjust to your region and your taste. Pho rewards patience and punishes shortcuts.',
    ingredientSections: [
        {
            title: 'The broth',
            items: [
                { amount: 1.5, unit: 'kg', name: 'beef marrow bones', note: 'split, blanched and rinsed' },
                { amount: 800, unit: 'g', name: 'beef brisket or shank', note: 'whole piece, fat trimmed' },
                { amount: 500, unit: 'g', name: 'oxtail', note: 'optional, adds richness' },
                { amount: 4, unit: 'L', name: 'water' },
                { amount: 1, name: 'large yellow onion', note: 'charred whole' },
                { amount: 60, unit: 'g', name: 'ginger', note: 'charred whole' },
                { amount: 50, unit: 'g', name: 'rock sugar' },
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tsp', name: 'sea salt' },
            ],
        },
        {
            title: 'Spice bundle',
            items: [
                { amount: 4, name: 'star anise pods' },
                { amount: 1, name: 'cinnamon stick' },
                { amount: 4, name: 'whole cloves' },
                { amount: 1, name: 'black cardamom pod (thao qua)', note: 'cracked open, optional but traditional' },
                { amount: 2, unit: 'tsp', name: 'coriander seeds' },
                { amount: 2, unit: 'tsp', name: 'fennel seeds' },
            ],
        },
        {
            title: 'Noodles and beef',
            items: [
                { amount: 600, unit: 'g', name: 'fresh flat rice noodles (banh pho)', note: 'or 400g dried' },
                { amount: 300, unit: 'g', name: 'beef eye of round or sirloin', note: 'sliced paper-thin against the grain, frozen briefly to firm' },
                { amount: 200, unit: 'g', name: 'beef meatballs (bo vien)', note: 'optional' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 1, name: 'large yellow onion', note: 'sliced paper-thin, soaked in vinegar' },
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'small bunch cilantro', note: 'chopped' },
                { amount: 200, unit: 'g', name: 'bean sprouts', note: 'for Saigon style' },
                { amount: 1, name: 'bunch Thai basil', note: 'for Saigon style' },
                { amount: 1, name: 'bunch sawtooth herb (ngo gai)', note: 'optional' },
                { amount: 2, name: 'limes', note: 'cut in wedges' },
                { amount: 3, name: 'birds eye chillies', note: 'sliced' },
                { amount: 1, name: 'small bowl hoisin sauce', note: 'optional, Saigon style' },
                { amount: 1, name: 'small bowl sriracha or chilli sauce', note: 'optional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the bones aggressively',
            description: 'Cover bones, brisket and oxtail with cold water in a large pot. Add 1 tbsp salt. Bring to a hard rolling boil for 8 minutes — the surface will turn grey with foam. Drain everything and rinse the meats and bones thoroughly under cold running water. Scrub the pot clean. This step is the entire reason a proper pho broth is crystal clear.',
            tip: 'Skip the blanching and your broth will be muddy and grey, no matter how long you simmer. Non-negotiable.',
        },
        {
            title: 'Char the aromatics over open flame',
            description: 'Hold the whole onion and ginger directly over a gas flame using tongs (or place in a dry cast-iron pan over high heat) until the skins are blackened and blistered, about 5 minutes. Do not rinse. The char is what gives pho its characteristic sweet smokiness.',
            tip: 'A kitchen blowtorch also works. The deeper the char, the better the broth.',
        },
        {
            title: 'Toast and bundle the spices',
            description: 'In a dry pan over medium heat, toast star anise, cinnamon, cloves, cardamom, coriander and fennel seeds for 2 minutes until fragrant. Tie loosely in muslin or a tea bag. Toasting is what unlocks the essential oils — untoasted spices give a flat, dusty broth.',
        },
        {
            title: 'Build and simmer for 3 hours',
            description: 'Return blanched bones, brisket and oxtail to the cleaned pot with 4L fresh water, charred aromatics and the spice bundle. Bring to a gentle simmer. Skim foam aggressively for the first 15 minutes. Reduce heat to low and simmer uncovered for 3 hours. Pull the brisket after 90 minutes when tender, plunge into ice water, slice thin and reserve.',
            tip: 'Never let it boil hard. A lazy simmer keeps the broth clear; a hard boil emulsifies the fat and turns it cloudy.',
        },
        {
            title: 'Strain and season the broth',
            description: 'Strain the broth through a fine sieve into a clean pot. Discard solids. Add rock sugar, fish sauce and salt. Taste — the broth should be deeply savoury, slightly sweet, with the spice and char layered underneath but never dominating. Keep at a steady simmer.',
        },
        {
            title: 'Slice the raw beef',
            description: 'Place the beef in the freezer for 20 minutes until firm but not frozen. Slice paper-thin against the grain — almost translucent. The beef will cook in the bowl from the heat of the broth, so thinness is critical.',
            tip: 'A sharp knife and partly-frozen beef is the only way to get true pho-thin slices at home.',
        },
        {
            title: 'Cook the noodles separately',
            description: 'Bring a separate pot of water to a boil. Cook fresh banh pho for 30 seconds, dried for 4-5 minutes. Drain and divide among 4 deep bowls.',
            tip: 'Never cook the noodles in the broth itself — they release starch and cloud everything.',
        },
        {
            title: 'Build the bowls',
            description: 'On top of the noodles in each bowl, lay a few slices of cooked brisket, raw beef, and meatballs if using. Scatter sliced spring onion, cilantro and pickled onion over the top.',
        },
        {
            title: 'Pour boiling broth and serve',
            description: 'The broth must be at a true rolling boil when you pour — this is what cooks the raw beef in the bowl. Ladle generously over each bowl. The raw beef will turn pale grey-pink within seconds. Serve immediately with the herb plate, lime, chillies, hoisin and sriracha on the side. Each guest customises their own bowl.',
            tip: 'Hoisin and sriracha are Saigon style and frowned upon by purists in Hanoi. Either way, the choice belongs to the eater.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}