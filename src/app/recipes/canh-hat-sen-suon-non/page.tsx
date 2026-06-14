'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'canh-hat-sen-suon-non',
    title: 'Canh Hạt Sen Sườn Non (Lotus Seed and Pork Rib Soup)',
    subtitle: 'Baby pork ribs simmered until the collagen melts into a clear, golden broth with lotus seeds that have been cooked until just tender — the restorative soup of Huế that Vietnamese grandmothers make when someone needs nourishment rather than excitement.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '1 hr 30 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/canh-hat-sen-suon-non.jpg',
    intro: `Canh hạt sen sườn non sits in the category of Vietnamese soups that are eaten as medicine before they are eaten as food. Lotus seeds (hạt sen) appear throughout Vietnamese traditional medicine as a tonic for the nerves, the heart, and the sleep — their mild, slightly sweet flavor and the faint bitterness of the embryo (which must be removed before cooking) are associated with calm, with clarity, with the cooling of internal heat. The pork ribs provide the collagen and the savory depth that transforms what would otherwise be a sparse medicinal preparation into a genuinely satisfying soup. Together, lotus seeds and pork ribs have been simmered in Vietnamese kitchens — particularly Huế kitchens, where lotus is not merely an ingredient but a cultural identity — for generations, producing a clear broth that is simultaneously light and deeply nourishing. Canh hạt sen sườn non requires no technique beyond patience: blanching the ribs, simmering long enough for the broth to develop body, adding the lotus seeds at the right stage so they cook through without disintegrating. The result is a soup of extraordinary gentleness — clean, slightly sweet, with the soft pork collagen making the broth silky and the lotus seeds providing a starchy, yielding texture that no other ingredient replicates. It is the soup served to someone recovering from illness, to a mother after childbirth, to an elder who needs something warm and unchallenging. It is also simply a very good soup to eat on a quiet evening with rice.`,
    ingredientSections: [
        {
            title: 'Main',
            items: [
                { amount: 600, unit: 'g', name: 'baby pork ribs (sườn non)', note: 'cut into 4cm pieces through the bone by the butcher. Baby ribs have more gelatin than adult ribs and produce a silkier broth.' },
                { amount: 200, unit: 'g', name: 'fresh lotus seeds (hạt sen tươi)', note: 'embryo removed from each seed — press each seed and the green bitter embryo pops out. Dried lotus seeds (soaked 4 hours) or vacuum-packed work with adjusted timing.' },
                { amount: 1.8, unit: 'L', name: 'water' },
            ],
        },
        {
            title: 'Aromatics',
            items: [
                { amount: 3, name: 'shallots', note: 'halved — one lightly charred over flame for sweetness, two left raw' },
                { amount: 20, unit: 'g', name: 'fresh ginger', note: '2 slices, lightly smashed' },
                { amount: 1, name: 'small onion', note: 'halved — optional, adds sweetness to the broth' },
            ],
        },
        {
            title: 'Seasoning',
            items: [
                { amount: 2.5, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'freshly ground — the finishing seasoning' },
            ],
        },
        {
            title: 'Garnish',
            items: [
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, name: 'small bunch cilantro', note: 'roughly torn' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'extra — ground fresh over each bowl at the table' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the ribs',
            description: 'Place pork ribs in a pot of cold water. Bring to a vigorous boil and blanch for 10 minutes. The water will turn cloudy with foam and blood. Drain completely and rinse every piece under cold running water until completely clean. Wash the pot. This step is what produces a clear, golden broth rather than a cloudy, grey one — it cannot be skipped.',
            tip: 'The rinse after blanching must be thorough — scrub any dark residue from the bone surfaces. Residue left on the blanched bones clouds the final broth permanently.',
        },
        {
            title: 'Prepare the lotus seeds',
            description: 'Press each lotus seed firmly between two fingers — the green embryo pops out from one end. It must be removed completely; even partial embryo left in produces bitterness that spreads through the entire soup. Rinse the seeds after removing the embryos. Taste one — it should be mildly starchy and sweet with no trace of bitterness.',
            tip: 'Make the embryo removal a meditative task rather than a rushed one — it takes about 5 minutes for 200g of seeds. Put on something to listen to. Each seed with the embryo removed is a small victory.',
        },
        {
            title: 'Build the broth',
            description: 'Return the cleaned ribs to the pot. Add 1.8L cold water, the charred shallot half, raw shallots, ginger, and onion if using. Bring to a boil, reduce immediately to the lowest possible simmer — 2-3 bubbles per second, barely moving. Skim foam during the first 15 minutes. Simmer uncovered for 45 minutes. The broth will turn golden and develop a faint sweetness from the rib collagen.',
            tip: 'The lowest possible simmer is the key to a clear broth. Even 5 minutes of vigorous boiling clouds the soup permanently by emulsifying the fat into the liquid. Patient, lazy simmering produces the clear, golden result.',
        },
        {
            title: 'Add lotus seeds — timing matters',
            description: 'After 45 minutes of simmering the ribs, add the prepared lotus seeds to the pot. Continue simmering for 30-35 minutes until the lotus seeds are completely tender — a chopstick should pass through each seed with no resistance, and the seeds should have a slightly swollen, yielding appearance. They should not disintegrate into the broth.',
            tip: 'Lotus seeds added too early disintegrate from the long cooking. Added too late, they remain slightly starchy in the center. The 30-35 minute window after the ribs have had 45 minutes is the correct timing.',
        },
        {
            title: 'Season and taste',
            description: 'Season with fish sauce, sugar, and salt. Taste the broth: it should be clean and golden, subtly sweet from the lotus seeds and pork collagen, with a gentle savory depth. Adjust seasoning conservatively — this is a gentle soup and over-seasoning changes its character completely. The correct broth is restrained, not bold.',
            tip: 'Canh hạt sen sườn non should not taste assertively of anything — no single element should dominate. If the fish sauce is too forward, add a small splash of water. If the broth tastes flat, a few more drops of fish sauce. The balance is subtle by design.',
        },
        {
            title: 'Finish and serve',
            description: 'Turn off the heat. Add the spring onion and cilantro directly to the pot. Ladle into deep bowls, ensuring each bowl gets several lotus seeds and 2-3 pieces of rib. Grind fresh white pepper over each bowl at the table — this is the one assertive note the soup allows. Serve with steamed jasmine rice alongside. The correct way to eat this soup: a spoonful of clear broth first, then a lotus seed, then a piece of tender rib meat pulled from the bone.',
            tip: 'White pepper ground at the table rather than during cooking is the correct approach for this soup. Pepper cooked into the broth disappears; pepper ground over the bowl at the moment of serving stays fragrant and provides the only sharp note in an otherwise entirely gentle dish.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}