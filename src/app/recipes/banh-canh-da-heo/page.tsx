'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-canh-da-heo',
    title: 'Bánh Canh Da Heo (Thick Noodle Soup with Pork Skin)',
    subtitle: 'Thick tapioca noodles in a rich pork broth with pork skin that has been simmered until it becomes translucent, silky, and collagen-rich — the most textural bowl in Vietnamese noodle cooking.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/banh-canh-da-heo.jpg',
    intro: `Bánh canh da heo is a bowl built around texture. Da heo — pork skin — when properly prepared goes through a transformation: blanched to remove impurities, simmered in broth until the collagen renders fully, then chilled and sliced into strips that are silky, yielding, and almost translucent. In the hot broth they soften further, becoming something between gelatinous and tender that no other ingredient replicates. The broth is pure pork — bones simmered with charred shallots and lemongrass until it has the body of a light consommé. The noodles are bánh canh — thick, round tapioca noodles that are chewy and substantial in a way that thin noodles cannot be. The whole dish is finished with fried shallots, sliced spring onion, and a drizzle of shallot oil. It is the noodle soup that Vietnamese people who love texture eat when they want something different from phở.`,
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 1, unit: 'kg', name: 'pork neck bones or knuckle bones', note: 'blanched and rinsed — see step 1' },
                { amount: 2, unit: 'L', name: 'water' },
                { amount: 3, name: 'shallots', note: 'halved and charred over flame' },
                { amount: 2, name: 'lemongrass stalks', note: 'bruised and tied' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Pork skin (da heo)',
            items: [
                { amount: 400, unit: 'g', name: 'fresh pork skin (da heo)', note: 'with a thin layer of fat underneath — available at Vietnamese or Asian butcher' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'for seasoning' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
            ],
        },
        {
            title: 'Noodles and garnish',
            items: [
                { amount: 500, unit: 'g', name: 'fresh bánh canh noodles', note: 'thick round tapioca noodles — Asian grocery. Substitute: thick udon noodles.' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots' },
                { amount: 3, unit: 'tbsp', name: 'shallot oil' },
                { amount: 4, name: 'spring onions, sliced' },
                { amount: 1, name: 'bunch cilantro' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch the bones and skin',
            description: 'Place pork bones and pork skin in separate pots (they cook at different rates). Cover with cold water, bring to a vigorous boil, blanch for 10 minutes. Drain and rinse every piece under cold running water until completely clean. The blanching water will be grey and foamy — this is the impurities leaving the meat. Do not skip this step.',
            tip: 'Blanching bones and skin separately is important — the skin releases more fat than bones and will cloud the broth if blanched together with the bones.',
        },
        {
            title: 'Build the broth',
            description: 'Return cleaned bones to a large pot. Add 2L cold water, charred shallots, and lemongrass. Bring to a gentle boil, reduce immediately to the lowest possible simmer. Skim foam for the first 20 minutes. Simmer uncovered for 1-1.5 hours until the broth is clear and has good body. Never let it boil aggressively — this clouds the broth.',
            tip: 'The lazy simmer — barely moving, 2-3 bubbles per second — is what produces a clear, golden broth. Rapid boiling emulsifies fat and produces a cloudy, heavy result.',
        },
        {
            title: 'Cook the pork skin',
            description: 'Add the blanched pork skin to the broth after 30 minutes of simmering — it needs about 45-60 minutes in the broth to become fully tender and translucent. The skin is ready when it feels completely yielding when pressed — no resistance at all. Remove and cool. Slice into strips 1cm wide and 5cm long. Season with fish sauce, sugar, and white pepper.',
            tip: 'Under-cooked pork skin is tough and rubbery. Over-cooked falls apart. The target texture is silky-tender — it should cut easily but hold its strip shape.',
        },
        {
            title: 'Season the broth',
            description: 'Remove bones and lemongrass. Strain broth through a fine-mesh sieve. Return to clean pot. Season with fish sauce, sugar, and salt. The broth should taste clean, slightly sweet, and deeply savory. Taste and adjust. Bring back to a simmer before serving.',
            tip: 'The broth will have reduced during simmering and become more concentrated. Season conservatively at first — it is easier to add more than to dilute an over-seasoned broth.',
        },
        {
            title: 'Cook the noodles',
            description: 'Blanch fresh bánh canh noodles in a separate pot of boiling water for 2-3 minutes until tender but still slightly chewy. Drain and divide among warmed deep bowls.',
            tip: 'Never cook the noodles directly in the broth — starch from the noodles clouds the broth and makes it gummy. Always blanch separately.',
        },
        {
            title: 'Assemble and serve',
            description: 'Ladle boiling broth over the noodles. Add pork skin strips — they should warm through in the hot broth. Drizzle shallot oil generously over each bowl. Top with spring onion, cilantro, crispy fried shallots, and sliced chili. Serve immediately with lime wedges. The lime squeezed into the bowl at the table brightens everything.',
            tip: 'Warm the bowls with hot water before assembling — cold bowls drop the broth temperature and the pork skin goes from silky-warm to firm within minutes.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}