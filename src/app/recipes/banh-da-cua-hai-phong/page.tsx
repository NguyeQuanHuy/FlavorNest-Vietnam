'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-da-cua-hai-phong',
    title: 'Bánh Ða Cua H?i Phòng (H?i Phòng Red Rice Noodle Soup with Crab)',
    subtitle: 'The noodle soup of H?i Phòng — thick, dark red rice noodles in a clear crab and pork bone broth, topped with pounded crab curd, Vietnamese fish cake, pork belly, and a finishing spoonful of shrimp paste oil that turns the entire bowl into something specific to one port city.',
    category: 'MAIN COURSE',
    difficulty: 'Hard',
    totalTime: '2 hr 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-da-cua-hai-phong.jpg',
    intro: `Bánh da cua is the bowl that H?i Phòng people consider their greatest contribution to Vietnamese noodle soup culture — a preparation that uses bánh da d?, the thick, flat, dark red rice noodles specific to the coastal city, in a crab and pork bone broth that owes something to bún riêu cua in its crab curd technique but is denser, more complex, and more assertively seasoned. The bánh da noodles are the most distinctive element: made from a combination of rice flour and red rice that gives them their color, they are wider and thicker than bún (round rice vermicelli) and flat like pappardelle, with a slightly chewy, substantial texture that holds up in the rich broth without dissolving. The crab broth follows the pounded-and-strained technique of bún riêu — field crabs pounded to release their essence, strained, poured into the hot broth where the crab proteins set into floating curd — but the H?i Phòng version uses both crab curd and separately prepared ch? cua (crab cake), which is steamed separately and sliced into the bowl. The finishing element that defines bánh da cua above all others is the m? hành g?c — the shrimp paste oil, applied in a generous spoonful over the surface of each completed bowl, which transforms the broth immediately with its assertive, savory depth. Bánh da cua H?i Phòng cannot be made in smaller steps or simplified — each element contributes something irreplaceable to the whole.`,
    ingredientSections: [
        {
            title: 'Broth base',
            items: [
                { amount: 500, unit: 'g', name: 'pork neck bones', note: 'blanched and rinsed' },
                { amount: 2, unit: 'L', name: 'water' },
                { amount: 3, name: 'shallots', note: 'halved and charred' },
                { amount: 20, unit: 'g', name: 'ginger', note: '2 slices, charred' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Crab riêu (curd)',
            items: [
                { amount: 400, unit: 'g', name: 'fresh field crabs (cua d?ng)', note: 'alive — pounded with 250ml water and strained' },
                { amount: 2, name: 'eggs', note: 'beaten — mixed into the crab extract to firm the curd' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Ch? cua (steamed crab cake)',
            items: [
                { amount: 200, unit: 'g', name: 'fresh crab meat', note: 'picked clean from freshwater crabs or blue swimmer crab' },
                { amount: 100, unit: 'g', name: 'minced pork', note: '20% fat — combined with the crab' },
                { amount: 2, name: 'eggs', note: 'beaten — binder' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots', note: 'mixed into the cake' },
            ],
        },
        {
            title: 'Other toppings',
            items: [
                { amount: 150, unit: 'g', name: 'pork belly', note: 'boiled 15 minutes and sliced thin' },
                { amount: 150, unit: 'g', name: 'Vietnamese pork sausage (ch? l?a)', note: 'sliced' },
                { amount: 4, name: 'medium tomatoes', note: 'half cooked into the broth, half added raw at end' },
                { amount: 3, unit: 'tbsp', name: 'annatto oil', note: 'for color — gives the broth its characteristic orange tint' },
            ],
        },
        {
            title: 'M?m tôm oil (shrimp paste oil — the defining finish)',
            items: [
                { amount: 4, unit: 'tbsp', name: 'fermented shrimp paste (m?m tôm)', note: 'H?i Phòng-style — lighter purple, slightly milder than southern m?m ru?c' },
                { amount: 4, unit: 'tbsp', name: 'neutral oil' },
                { amount: 3, name: 'shallots', note: 'minced — fried in the oil before the paste' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tbsp', name: 'fresh lime juice' },
            ],
        },
        {
            title: 'Noodles',
            items: [
                { amount: 400, unit: 'g', name: 'dried bánh da d? (H?i Phòng red rice noodles)', note: 'wide, flat, dark red — soaked in cold water 30 minutes. Substitute: fresh wide rice noodles (bánh ph?) soaked briefly — similar texture though color differs.' },
            ],
        },
        {
            title: 'Table accompaniments',
            items: [
                { amount: 150, unit: 'g', name: 'bean sprouts' },
                { amount: 1, name: 'bunch Vietnamese balm (rau kinh gi?i)' },
                { amount: 1, name: 'bunch perilla (tía tô)' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Build the pork bone broth — 1.5 hours',
            description: 'Blanch bones in boiling water 10 minutes, drain and rinse. Return to clean pot with cold water, charred shallots, and charred ginger. Bring to boil, reduce to lowest simmer. Skim for 20 minutes. Simmer 1.5 hours. Meanwhile cook half the tomato wedges in annatto oil until they break down into a sauce — add this to the broth for color and depth.',
            tip: 'The pork bone broth for bánh da cua should simmer long enough to extract collagen from the bones — this gives the broth a slightly silky body that bún riêu cua\'s shorter simmer does not achieve. 1.5 hours minimum, 2 hours preferred.',
        },
        {
            title: 'Make the ch? cua — steamed crab cake',
            description: 'Combine crab meat, minced pork, beaten eggs, fish sauce, sugar, black pepper, and crispy fried shallots. Mix thoroughly. Transfer to a heatproof bowl or small loaf tin. Steam over boiling water for 20-25 minutes until set throughout — a skewer inserted in the center comes out clean. Cool 10 minutes before slicing into 1cm thick pieces. The ch? cua should be firm, slightly springy, and visibly flecked with the fried shallots.',
            tip: 'The ch? cua is steamed separately from the broth — this produces a cleaner, more defined texture than adding the raw mixture directly to the soup. The separately steamed cake slices cleanly and holds its shape in the bowl without breaking apart in the broth.',
        },
        {
            title: 'Pound the crab and make the riêu extract',
            description: 'Clean the field crabs. Pound with 250ml cold water until completely crushed. Strain through fine cloth, pressing all liquid out. Beat the eggs and mix thoroughly into the strained crab extract with fish sauce and salt. This egg-fortified crab extract will set into larger, more substantial curds than pure crab extract alone.',
            tip: 'For bánh da cua specifically, the crab curds should be substantial — larger and firmer than in bún riêu cua. The egg ratio is slightly higher here (2 eggs to 400g crab vs 2 eggs to 500g in bún riêu) to produce this firmer curd.',
        },
        {
            title: 'Make the m?m tôm oil',
            description: 'Heat oil in a small pan. Fry minced shallots until golden. Add the shrimp paste — it will spit in the hot oil. Stir for 1 minute until the raw fermented character mellows. Add sugar. Remove from heat. Add lime juice. The finished m?m tôm oil should be fragrant, savory, and slightly sweet — it is spooned directly over each bowl immediately before serving.',
            tip: 'The m?m tôm oil is the element that takes bánh da cua from a good noodle soup to the specific H?i Phòng experience. It is not stirred into the broth but applied per-bowl, per-serving, so each diner smells and tastes it fresh. Prepare it last so it is still warm when applied.',
        },
        {
            title: 'Add crab extract to broth and season',
            description: 'Bring the strained pork bone broth to a gentle simmer. Season with fish sauce and salt. Pour the egg-crab extract in a steady stream while stirring gently — the crab curds form immediately. Add remaining raw tomato wedges. Simmer 3 minutes only. Taste the broth: it should be clear, savory, with the sweet crab curd character distributed throughout and a slight tomato acidity.',
            tip: 'The crab extract for bánh da cua is added to a more assertively seasoned broth than for bún riêu — the H?i Phòng version is bolder throughout. The broth should taste complete and satisfying before the toppings go in.',
        },
        {
            title: 'Cook the noodles and assemble',
            description: 'Cook soaked bánh da noodles in boiling water 2-3 minutes until just tender — they should have a slight chew. Divide among deep bowls. Layer: sliced pork belly, sliced ch? cua, sliced ch? l?a. Ladle boiling broth generously, ensuring each bowl gets visible crab curds and tomato pieces. Apply 1 tablespoon of m?m tôm oil directly over the surface of each bowl — it will pool and then spread across the surface. Scatter spring onion and cilantro. Serve with bean sprouts, herbs, lime, and chili alongside.',
            tip: 'The m?m tôm oil applied last and not stirred in immediately is the serving technique that allows each diner to see and smell it before mixing it through the bowl themselves. The moment of stirring the m?m tôm oil into the soup — watching it swirl and darken the surface — is part of the bánh da cua experience.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
