'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bun-cha-ca',
    title: 'Bún Ch? Cá (Vietnamese Fish Cake Noodle Soup)',
    subtitle: 'A clear, golden pork and fish bone broth with handmade fish cakes that are springy, savory, and golden from turmeric — the noodle soup of Quy Nhon and the central coast that deserves to be as famous as ph?.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '2 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: '/images/recipes/bun-cha-ca.jpg',
    intro: `Bún ch? cá is the noodle soup that people from central Vietnam — particularly from Quy Nhon, Ðà N?ng, and Nha Trang — miss most intensely when they live abroad. It is the fish cake noodle soup that the central coast has been eating for generations, built on a broth of pork bones and fish bones that produces a depth neither alone could achieve, served with ch? cá — fish cakes — that are made fresh, springy from the fish protein, golden from turmeric, and carry a flavor that dried or processed fish cakes cannot approach. The fish cakes in bún ch? cá are not the dense, commercial cylinders sold vacuum-packed at supermarkets. They are made from fresh fish — mackerel, lizardfish (cá thác lác), or snakehead — pounded or processed until the protein strands align and produce the bouncy, springy texture that is the defining quality of good ch? cá. When sliced and added to the hot broth they are simultaneously firm and yielding, with a clean oceanic sweetness that carries through every bowl. Bún ch? cá is eaten for breakfast and lunch in its home provinces and represents one of the most complete expressions of Vietnamese noodle soup craft — a dish where the broth, the fish cake, the noodle, and the garnish each play a distinct and irreplaceable role.`,
    ingredientSections: [
        {
            title: 'Broth',
            items: [
                { amount: 600, unit: 'g', name: 'pork neck bones (xuong c? heo)', note: 'blanched and rinsed — the savory backbone of the broth' },
                { amount: 400, unit: 'g', name: 'fish bones and head', note: 'from any firm white fish — mackerel, snapper, or the fish used for cakes. Roasted briefly before adding (see step 2).' },
                { amount: 2, unit: 'L', name: 'water' },
                { amount: 3, name: 'shallots', note: 'halved and charred over flame' },
                { amount: 30, unit: 'g', name: 'fresh ginger', note: '3 slices, smashed' },
                { amount: 1, name: 'lemongrass stalk', note: 'bruised' },
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'salt' },
            ],
        },
        {
            title: 'Fish cakes (ch? cá — the heart of the dish)',
            items: [
                { amount: 500, unit: 'g', name: 'fresh fish fillet (cá thác lác, cá thu, or cá basa)', note: 'lizardfish (cá thác lác) is traditional and produces the bounciest result. Mackerel (cá thu) is the most flavorful. Basa or tilapia are accessible substitutes.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'turmeric powder', note: 'gives the golden color and the characteristic central Vietnamese flavor' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'sesame oil', note: 'adds fragrance' },
                { amount: 1, unit: 'tbsp', name: 'cornstarch', note: 'binder — helps the cakes hold together during cooking' },
                { amount: 1, name: 'spring onion', note: 'finely sliced — stirred into the paste' },
            ],
        },
        {
            title: 'Noodles and toppings',
            items: [
                { amount: 400, unit: 'g', name: 'fresh bún (rice vermicelli)', note: 'medium thickness. Dried vermicelli cooked according to package is acceptable.' },
                { amount: 3, unit: 'tbsp', name: 'crispy fried shallots (hành phi)' },
                { amount: 3, unit: 'tbsp', name: 'shallot-infused oil' },
                { amount: 4, name: 'spring onions', note: 'thinly sliced' },
                { amount: 1, name: 'small bunch dill (thì là)', note: 'the central Vietnamese herb for fish noodle soups — torn roughly' },
                { amount: 1, name: 'small bunch cilantro' },
            ],
        },
        {
            title: 'Table accompaniments',
            items: [
                { amount: 150, unit: 'g', name: 'bean sprouts', note: 'for adding raw to the bowl' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, sliced' },
                { amount: 3, unit: 'tbsp', name: 'fermented shrimp paste (m?m ru?c)', note: 'served alongside — the Quy Nhon style adds m?m ru?c to each bowl. Optional but traditional.' },
            ],
        },
    ],
    steps: [
        {
            title: 'Blanch pork bones and prepare fish bones',
            description: 'Place pork bones in a pot of cold water, bring to a vigorous boil and blanch 10 minutes. Drain and rinse every bone thoroughly under cold water. For the fish bones and head: place on a baking tray and roast at 200°C for 15 minutes until golden and slightly caramelized — this step adds significant depth to the broth. Roasted fish bones produce a much richer, less "fishy" broth than raw fish bones added directly.',
            tip: 'Roasting the fish bones before adding to the broth is the single most important technique difference between a flat fish-bone broth and a deeply flavored one. The Maillard reaction on the fish protein surfaces produces compounds that create body and complexity.',
        },
        {
            title: 'Build the dual-bone broth',
            description: 'Combine blanched pork bones and roasted fish bones in a large pot. Add 2L cold water, charred shallots, ginger, and lemongrass. Bring to a boil, immediately reduce to the slowest possible simmer. Skim foam during the first 20 minutes. Simmer uncovered for 1-1.5 hours. The fish bones will completely give their flavor in 30-40 minutes; the pork bones need the full time. The broth should be clear, golden-amber, and smell simultaneously of the sea and of roasted pork.',
            tip: 'The dual-bone broth is what makes bún ch? cá different from a plain fish soup or a plain pork soup. Neither bone alone produces this flavor. The fish bones give oceanic sweetness; the pork bones give savory body and collagen. Together they produce the specific character of authentic bún ch? cá.',
        },
        {
            title: 'Make the fish cake paste',
            description: 'Chill the fish fillet for 20 minutes in the freezer — cold fish processes better and produces a bouncier result. Cut into rough chunks. Place in a food processor with fish sauce, sugar, turmeric, pepper, garlic, sesame oil, and cornstarch. Process for 2-3 minutes, stopping every 30 seconds to scrape down the sides, until the fish is completely smooth and the paste has become slightly sticky — it should pull away from the sides of the bowl cleanly. This stickiness indicates the fish proteins have aligned — this is what produces the springy texture. Fold in the sliced spring onion.',
            tip: 'Processing time is the variable that determines fish cake texture. Under-processed paste produces crumbly cakes that fall apart. Properly processed paste is slightly sticky, holds its shape completely, and produces the bouncy "Q texture" (??) that defines great ch? cá.',
        },
        {
            title: 'Shape and cook the fish cakes',
            description: 'Wet your hands with cold water. Take about 2 tablespoons of fish paste and shape into a patty 1.5cm thick and 5-6cm across, or roll into cylinders. For steamed fish cakes: steam over boiling water for 8-10 minutes until cooked through and slightly firm. For fried fish cakes: pan-fry in neutral oil over medium heat for 3-4 minutes per side until golden. The bún ch? cá version typically uses both: some steamed for softness, some fried for color and caramelized crust. Test one — it should be springy when pressed and return to shape immediately.',
            tip: 'A mix of steamed and lightly fried fish cakes in the same bowl produces textural variety that makes the dish more interesting. Restaurants in Quy Nhon typically provide both in each serving.',
        },
        {
            title: 'Strain and season the broth',
            description: 'Strain the broth through a fine-mesh sieve, discarding all bones and aromatics. Return to a clean pot. Season with fish sauce, sugar, and salt. The broth should taste clean, deep, and balanced — oceanic from the fish bones, savory from the pork, with the sweet smokiness of the charred shallots. Bring to a boil before serving.',
            tip: 'Taste the broth before seasoning and note: if it tastes predominantly of pork, the fish bones were added too late or not roasted. If it tastes sharply of fish, the pork bones were insufficient. The ideal broth is unified — not identifiably one or the other.',
        },
        {
            title: 'Assemble each bowl',
            description: 'Blanch the bún noodles in boiling water for 30 seconds, drain, and place in deep bowls. Slice the fish cakes into 5mm rounds and arrange over the noodles. Ladle boiling broth generously over everything. Top with shallot oil, sliced spring onion, torn dill, cilantro, and crispy fried shallots. Serve with bean sprouts, lime, chili, and m?m ru?c on the side. The dill is not optional — it is the herb that specifically accompanies fish in central Vietnamese cooking and ties the bowl together.',
            tip: 'The shallot oil drizzled over the bowl just before serving is the finishing element that separates a complete bowl from an incomplete one. Its aromatic depth bridges the broth, the fish cake, and the herbs into a unified dish.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
