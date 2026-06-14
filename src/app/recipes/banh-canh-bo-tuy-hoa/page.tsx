'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-canh-bo-tuy-hoa',
    title: 'Bánh Canh Bò Tuy Hòa (Tuy Hòa Beef Thick Noodle Soup)',
    subtitle: 'Thick round tapioca noodles in a clear beef bone broth perfumed with charred onion, star anise, and cinnamon — topped with tender braised beef brisket, thinly sliced rare beef, fried shallots, and the specific green onion oil that makes every bowl from Tuy Hòa identifiable.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '3 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/banh-canh-bo-tuy-hoa.jpg',
    intro: `Bánh canh bò Tuy Hòa is the beef noodle soup that Phú Yên's provincial capital has made its own — a preparation that exists nowhere else in quite this form, built from the intersection of thick tapioca noodles (bánh canh) and a beef bone broth that owes something to phở in its aromatic spicing but is lighter, cleaner, and more specifically central Vietnamese in character. The broth is the foundation: beef bones simmered for hours with charred onion and ginger in the phở tradition, but with a restrained hand on the spices — one cinnamon stick, two star anise, a piece of cardamom — so that the result is fragrant without being heavy. The toppings are what distinguish the Tuy Hòa version from similar soups elsewhere: braised beef brisket (bò bắp) that has been simmered separately in the broth until it slices cleanly and cleanly; thin slices of raw beef (bò tái) that cook in the hot broth in the bowl; and the mỡ hành — the spring onion oil that Tuy Hòa cooks apply in more generous quantities than anywhere else in Vietnam, so that the surface of each bowl is fragrant, golden, and slightly glossy. Bánh canh bò Tuy Hòa is a morning bowl, eaten at the small shops on Trần Hưng Đạo and Lê Duẩn streets before 9am, from tables that are already occupied at 6:30am by people who have been eating here their entire lives. It is not a bowl that exists in the food media canon yet. This recipe is its first documentation in English.`,
    ingredientSections: [
        {
            title: 'Beef bone broth',
            items: [
                { amount: 1, unit: 'kg', name: 'beef marrow and knuckle bones (xương bò)', note: 'blanched and rinsed before use' },
                { amount: 300, unit: 'g', name: 'beef brisket (thịt bò bắp)', note: 'added to the broth to braise — removed when tender and sliced for topping' },
                { amount: 2.5, unit: 'L', name: 'water' },
                { amount: 1, name: 'large onion', note: 'halved and charred over flame until deeply blackened on the cut side' },
                { amount: 40, unit: 'g', name: 'fresh ginger', note: '4 slices, smashed and charred briefly over flame' },
                { amount: 1, name: 'cinnamon stick (5cm)', note: 'toasted dry in a pan until fragrant' },
                { amount: 2, name: 'star anise', note: 'toasted dry' },
                { amount: 1, name: 'black cardamom pod (thảo quả)', note: 'lightly crushed — optional but adds depth specific to central Vietnamese beef broth' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Toppings',
            items: [
                { amount: 200, unit: 'g', name: 'beef sirloin or eye fillet (bò tái)', note: 'sliced paper-thin against the grain — placed raw in the bowl and cooked by the hot broth' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for briefly seasoning the raw beef slices' },
                { amount: 0.25, unit: 'tsp', name: 'black pepper' },
            ],
        },
        {
            title: 'Noodles',
            items: [
                { amount: 500, unit: 'g', name: 'fresh bánh canh noodles (thick round tapioca noodles)', note: 'if unavailable: dried bánh canh soaked 20 minutes, or thick udon noodles as a substitute' },
            ],
        },
        {
            title: 'Mỡ hành Tuy Hòa (essential — more generous than anywhere else)',
            items: [
                { amount: 6, name: 'spring onions', note: 'green parts only, thinly sliced — more than any other Vietnamese noodle soup uses' },
                { amount: 100, unit: 'ml', name: 'neutral oil', note: 'heated to smoking — poured over the spring onion' },
                { amount: 0.5, unit: 'tsp', name: 'salt' },
                { amount: 4, unit: 'tbsp', name: 'crispy fried shallots', note: 'scattered over each bowl in addition to the mỡ hành' },
            ],
        },
        {
            title: 'Table accompaniments',
            items: [
                { amount: 150, unit: 'g', name: 'bean sprouts' },
                { amount: 1, name: 'bunch Vietnamese basil (húng quế)' },
                { amount: 1, name: 'bunch cilantro' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 3, unit: 'tbsp', name: 'fermented shrimp paste (mắm ruốc)', note: 'served alongside in the Phú Yên style — optional but traditional' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch bones and char aromatics',
            description: 'Place bones in cold water, bring to a vigorous boil, blanch 10 minutes. Drain and rinse every bone thoroughly. Separately, char the onion halves and ginger slices directly over a gas flame or under a hot broiler until deeply blackened on the surfaces. Toast the cinnamon stick, star anise, and cardamom in a dry pan until fragrant — 1-2 minutes. These three steps — blanching bones, charring aromatics, toasting spices — are the foundation of a clear, deep broth rather than a cloudy, flat one.',
            tip: 'The onion and ginger must be genuinely blackened — not just browned. The char produces sweetness and a specific depth that is the background note of central Vietnamese beef broth. Insufficiently charred aromatics produce a flat, pale broth no matter how long it simmers.',
        },
        {
            title: 'Build the broth — minimum 2 hours',
            description: 'Place blanched bones in a large pot with 2.5L cold water. Add charred onion, charred ginger, toasted spices. Bring to a boil, reduce immediately to the lowest simmer — barely moving. Skim foam for the first 20 minutes. After 45 minutes, add the whole brisket to braise in the developing broth. Simmer uncovered for 2-2.5 hours total. The brisket is done when a chopstick passes through without resistance — remove and set aside to cool. The broth should be clear amber-gold.',
            tip: 'The brisket and bones cooking together is the technique that produces the specifically complex Tuy Hòa broth — the braised brisket gives gelatin and beef flavor back to the broth as the bones give their collagen. Separate cooking would produce two good things; together they produce one exceptional broth.',
        },
        {
            title: 'Strain and season the broth',
            description: 'Remove bones and discard. Strain the broth through a fine-mesh sieve into a clean pot. The broth should be clear, amber-golden, and smell of beef with a background warmth from the spices. Season with fish sauce, sugar, and salt. The spice level in bánh canh bò Tuy Hòa should be present but subtle — the cinnamon and star anise are a background note, not the foreground. Bring to a boil before serving.',
            tip: 'Taste the broth before seasoning and assess the spice level. Central Vietnamese beef broth has noticeably less spice than phở — more restrained, cleaner, letting the beef character be primary. If the spice is too prominent, dilute with a small amount of hot water.',
        },
        {
            title: 'Slice the brisket and prepare raw beef',
            description: 'When the braised brisket has cooled enough to handle, slice against the grain into 5mm rounds — it should slice cleanly without shredding. The interior should be tender throughout with no resistance. Separately, freeze the raw sirloin for 20 minutes until firm, then slice paper-thin against the grain. Season lightly with fish sauce and black pepper. Keep cold until serving — it goes into the bowl raw.',
            tip: 'Slicing the brisket when slightly cooled but still warm produces cleaner slices than cutting it cold from the refrigerator. At the right temperature, the brisket holds together in neat rounds rather than shredding.',
        },
        {
            title: 'Make the mỡ hành — Tuy Hòa style',
            description: 'Slice 6 spring onions thinly and place in a heatproof bowl with salt. Heat 100ml of neutral oil until genuinely smoking — 210°C. Pour the smoking oil over the spring onion all at once. It will sizzle loudly and the onion will turn from raw green to cooked green in seconds. Stir immediately. This is significantly more mỡ hành than any other Vietnamese noodle soup uses — this is the Tuy Hòa quantity, and it is not an accident. The generous spring onion oil is the taste signature of the city.',
            tip: 'The quantity of mỡ hành in bánh canh bò Tuy Hòa is triple what most recipes specify. Local shops apply it so generously that the surface of each bowl is visibly golden with oil and fragrant with spring onion. Do not reduce the amount.',
        },
        {
            title: 'Assemble the bowl',
            description: 'Blanch fresh bánh canh noodles in boiling water for 2-3 minutes. Drain and place in deep bowls. Arrange sliced braised brisket over the noodles. Place raw beef slices on top — they will cook from the boiling broth. Ladle the boiling broth generously over everything — the raw beef should turn pink within 30-60 seconds. Spoon mỡ hành very generously over the surface. Scatter crispy fried shallots. Serve with bean sprouts, herbs, lime, chili, and mắm ruốc alongside.',
            tip: 'The bowl must be served and eaten immediately — the raw beef continues cooking in the hot broth. After 2 minutes the tái beef is fully cooked. Eat the tái first, before it overcooks, then take your time with the braised brisket and noodles.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}