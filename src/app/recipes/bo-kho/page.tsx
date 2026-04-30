'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bo-kho',
    title: 'Vietnamese Beef Stew',
    subtitle: 'Bo kho — tender chunks of beef shank slow-braised in a fragrant lemongrass-and-star-anise broth, eaten with banh mi or rice noodles.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hrs 30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1604908554027-1a23a96d6b28?auto=format&fit=crop&w=1600&q=85',
    intro: 'Bo kho is what every Saigon family makes on a Sunday morning when they have time. The beef goes into the pot at 8am with lemongrass, star anise, ginger and a splash of coconut water; by 10am the kitchen smells of a small festival, and by 11am everyone is at the table tearing crusty banh mi to dip in the rust-red broth. Eaten with bread, with rice noodles, or simply over rice — bo kho is the rare Vietnamese dish that can be all three meals of the day, and most often is.',
    ingredientSections: [
        {
            title: 'Beef and marinade',
            items: [
                { amount: 1, unit: 'kg', name: 'beef shank or chuck', note: 'cut in 4cm chunks' },
                { amount: 4, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'palm sugar' },
                { amount: 1, unit: 'tbsp', name: 'five-spice powder' },
                { amount: 1, unit: 'tsp', name: 'black pepper' },
                { amount: 6, name: 'garlic cloves', note: 'minced' },
                { amount: 4, name: 'shallots', note: 'minced' },
            ],
        },
        {
            title: 'Braising broth',
            items: [
                { amount: 4, name: 'lemongrass stalks', note: 'bruised, tied in a bundle' },
                { amount: 4, name: 'star anise pods' },
                { amount: 1, name: 'cinnamon stick' },
                { amount: 30, unit: 'g', name: 'ginger', note: 'sliced' },
                { amount: 2, unit: 'tbsp', name: 'tomato paste' },
                { amount: 500, unit: 'ml', name: 'coconut water', note: 'fresh, not coconut milk' },
                { amount: 1, unit: 'L', name: 'beef stock or water' },
                { amount: 2, unit: 'tbsp', name: 'annatto oil', note: 'for the rust-red colour' },
                { amount: 3, name: 'large carrots', note: 'cut in chunks' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 4, name: 'crusty banh mi rolls', note: 'or 400g rice noodles' },
                { amount: 1, name: 'small handful Thai basil' },
                { amount: 4, name: 'spring onions', note: 'sliced' },
                { amount: 2, name: 'limes', note: 'cut in wedges' },
                { amount: 2, name: 'birds eye chillies', note: 'sliced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the beef',
            description: 'Combine beef chunks with fish sauce, palm sugar, five-spice, pepper, garlic and shallots. Massage thoroughly. Rest at least 1 hour at room temperature, or overnight refrigerated for deeper flavour.',
            tip: 'Overnight marinade transforms the dish. Plan ahead if you can.',
        },
        {
            title: 'Sear the beef',
            description: 'Heat 2 tbsp oil in a heavy pot over high heat. Sear beef in batches until each piece has a deep brown crust on at least two sides — 3 minutes per batch. Do not crowd the pot or the beef will steam instead of sear. Remove and set aside.',
        },
        {
            title: 'Bloom the spices',
            description: 'Reduce heat to medium. In the same pot, add annatto oil, then star anise, cinnamon, ginger and the bundle of lemongrass. Toast 60 seconds until intensely fragrant. Add tomato paste and cook 2 minutes until it darkens.',
        },
        {
            title: 'Braise low and slow',
            description: 'Return seared beef and any resting juices to the pot. Pour in coconut water and beef stock to just cover. Bring to a gentle simmer, then reduce heat to low. Cover and braise for 90 minutes, stirring occasionally.',
            tip: 'Never let it boil hard. Low and slow is what makes the beef tender, not tough.',
        },
        {
            title: 'Add the carrots',
            description: 'After 90 minutes, the beef should be fork-tender. Add carrot chunks and continue simmering uncovered for 25 minutes until the carrots are tender and the broth has reduced to a glossy, rust-red sauce.',
        },
        {
            title: 'Rest and serve',
            description: 'Pull the lemongrass bundle and discard. Taste and adjust seasoning — the broth should be deeply savoury, faintly sweet, with star anise lifting it all. Rest 15 minutes off the heat. Ladle into wide bowls. Top with Thai basil and spring onion. Serve with crusty banh mi for dipping, or over rice noodles for bo kho noodle soup.',
            tip: 'Bo kho tastes even better on day two. Make it ahead, refrigerate overnight, reheat gently — the flavours marry deeper.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
