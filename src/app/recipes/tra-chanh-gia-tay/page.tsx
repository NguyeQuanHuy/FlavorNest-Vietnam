'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'tra-chanh-gia-tay',
    title: 'Trà Chanh Giã Tay (Vietnamese Hand-Pounded Lime Tea)',
    subtitle: `The viral drink taking Vietnam by storm — fragrant Guangdong lime pounded by mortar and pestle, brewed black tea, honey, and crushed ice. Queues around the block for a reason. Here is how to make it at home in 10 minutes.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '15 min',
    rating: 4.8,
    baseServings: 2,
    heroImage: '/images/recipes/tra-chanh-sa.jpg',
    intro: `Trà chanh giã tay — hand-pounded lime tea — started as a single cart in Hanoi in late 2023, went viral on TikTok and Douyin, and within weeks had queues of fifty people waiting an hour to get a glass. The secret is not complicated: it is the Guangdong lime (chanh Quảng Đông), a fragrant variety with thick skin and an aromatic oil that smells faintly of lemongrass and pomelo. When you pound the slices in a mortar, the essential oils release into the ice, perfuming the whole drink. Combined with strong black tea and honey instead of sugar syrup, the result is bright, floral, slightly bitter, and deeply refreshing. This recipe makes it at home in 15 minutes — no queue required.`,
    ingredientSections: [
        {
            title: 'The tea base',
            items: [
                { amount: 2, unit: 'tsp', name: 'black tea leaves', note: 'Lipton Yellow Label or any strong black tea — or 2 tea bags' },
                { amount: 300, unit: 'ml', name: 'boiling water' },
                { amount: 2, unit: 'tbsp', name: 'honey', note: 'do not substitute sugar — honey gives a rounder, more fragrant sweetness' },
            ],
        },
        {
            title: 'The lime (the whole point)',
            items: [
                { amount: 2, name: 'Guangdong limes (chanh Quảng Đông)', note: 'also sold as "perfume lime" or "nước hoa lime" at Asian grocers — the thick, oval, fragrant variety' },
                { amount: 0.5, unit: 'tsp', name: 'salt', note: 'a pinch — reduces bitterness, enhances aroma' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 2, name: 'glasses of crushed ice or ice cubes' },
                { amount: 2, unit: 'tbsp', name: 'simple syrup or honey', note: 'extra, to sweeten to taste' },
                { amount: 200, unit: 'ml', name: 'cold water or soda water', note: 'soda water for a sparkling version' },
            ],
        },
    ],
    steps: [
        {
            title: 'Brew strong black tea',
            description: 'Steep 2 teaspoons of black tea leaves (or 2 tea bags) in 300ml of just-boiled water for 4-5 minutes. You want it strong — stronger than you would drink it plain. Remove the leaves or bags. While the tea is still hot, stir in 2 tablespoons of honey until completely dissolved. Let the sweetened tea cool to room temperature, then refrigerate until cold. This can be done hours ahead.',
            tip: 'Strong tea is essential. A weak tea base gets washed out by the ice and lime. Brew it dark — it should look like iced coffee, not pale amber.',
        },
        {
            title: 'Prepare the Guangdong lime',
            description: 'Wash the limes thoroughly. Using a vegetable peeler or sharp knife, remove the outer green/yellow peel in thin strips — the white pith underneath is extremely bitter and must be avoided. Once peeled, slice the limes thinly into rounds, about 3-4mm thick. Remove any visible seeds. You should have 6-8 slices per lime.',
            tip: 'The peel contains most of the fragrant essential oils — save a few strips to garnish the glass. But the white pith underneath must come off. It is what makes badly-made trà chanh giã tay bitter.',
        },
        {
            title: 'Pound the lime (the technique)',
            description: 'Place the lime slices in a mortar. Add a pinch of salt. Using the pestle, pound firmly 8-10 times — not to pulverize, but to bruise and crush the slices enough that the juice and essential oils release. You want the slices broken open, fragrant, and slightly juicy, not turned into pulp. The smell when the oils release is the signature of this drink — floral, bright, slightly resinous.',
            tip: 'If you do not have a mortar and pestle, use the back of a heavy spoon in a deep bowl, or muddle the lime slices firmly in the bottom of the serving glass. The goal is cell rupture, not complete destruction.',
        },
        {
            title: 'Assemble the drink',
            description: 'Fill two tall glasses with crushed ice or ice cubes. Divide the pounded lime slices between the glasses, placing them directly on the ice. Pour the cold sweetened black tea over the ice — about 100ml per glass. Top up with 100ml cold water or soda water per glass. Stir once. Taste and add more honey or simple syrup if you want more sweetness. Garnish with a strip of lime peel on the rim.',
            tip: 'Pour the tea over the ice and pounded lime — not the other way around. The cold ice hitting the pounded lime releases one last burst of fragrance. The order matters.',
        },
        {
            title: 'Serve immediately',
            description: 'Trà chanh giã tay is best drunk within 5 minutes of assembly — the ice dilutes and the lime aroma fades quickly. Stir once more before drinking to mix the settled honey and lime juice from the bottom. Drink through a wide straw or directly from the glass. The pounded lime slices at the bottom are edible — squeeze them gently against the glass with your straw to release any remaining juice.',
            tip: 'This is a drink, not a mocktail to be sipped slowly. Drink it cold and fast, the way they do in Hanoi at 10pm with 50 people in the queue behind you.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
