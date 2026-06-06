'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'banh-bong-lan-trung-muoi',
    title: 'Bánh Bông Lan Trứng Muối (Vietnamese Salted Egg Lava Cake)',
    subtitle: 'A soft Vietnamese sponge cake filled with a flowing salted egg yolk custard that runs when cut — the combination of sweet airy cake and rich, salty-savory molten center that became a Vietnamese dessert phenomenon.',
    category: 'DESSERT',
    difficulty: 'Medium',
    totalTime: '1 hr 30 min',
    rating: 4.9,
    baseServings: 8,
    heroImage: '/images/recipes/banh-bong-lan-trung-muoi.jpg',
    intro: `Bánh bông lan trứng muối is the Vietnamese salted egg cake that went from specialty bakery item to nationwide obsession in the space of about two years. The concept is borrowed from the Hong Kong salted egg phenomenon — the discovery that salted duck egg yolks, when combined with butter, sugar, and evaporated milk, produce a custard of extraordinary richness and complexity that sits at the intersection of sweet and savory in a way that is immediately addictive. The Vietnamese version takes this salted egg custard and turns it into a flowing lava filling inside a soft, pillowy sponge cake. When the cake is cut or torn open, the warm golden custard pours out in the way that a properly made chocolate lava cake releases its molten center. The salted egg yolk flavor — simultaneously rich, buttery, sweet, and carrying the distinct mineral-savory note of the preserved egg — is unlike any other dessert filling in Vietnamese baking. Bánh bông lan trứng muối is now sold at bakeries throughout Vietnam and in Vietnamese communities globally. The home version requires two components made separately: the sponge cake and the salted egg custard filling. The custard is the more technically demanding element — it requires precise temperature control to achieve the flowing consistency that defines the dish. Both can be made on the same day; the custard can also be made a day ahead and refrigerated.`,
    ingredientSections: [
        {
            title: 'Sponge cake (bánh bông lan)',
            items: [
                { amount: 4, name: 'eggs, room temperature', note: 'separated — yolks and whites used differently' },
                { amount: 80, unit: 'g', name: 'sugar', note: 'divided: 40g for yolks, 40g for whites' },
                { amount: 60, unit: 'ml', name: 'neutral oil', note: 'rice bran or vegetable — not olive oil' },
                { amount: 60, unit: 'ml', name: 'full-fat milk' },
                { amount: 80, unit: 'g', name: 'cake flour (bột bánh)', note: 'lower protein than all-purpose — produces softer crumb. Sift before using.' },
                { amount: 0.5, unit: 'tsp', name: 'baking powder' },
                { amount: 0.25, unit: 'tsp', name: 'salt' },
                { amount: 0.5, unit: 'tsp', name: 'vanilla extract' },
                { amount: 0.25, unit: 'tsp', name: 'cream of tartar', note: 'stabilizes the egg white foam' },
            ],
        },
        {
            title: 'Salted egg lava custard (nhân trứng muối chảy)',
            items: [
                { amount: 6, name: 'salted duck egg yolks (lòng đỏ trứng vịt muối)', note: 'from pre-salted duck eggs — available at Asian grocers, often sold cooked in vacuum packs. If raw: steam 15 minutes first.' },
                { amount: 80, unit: 'g', name: 'unsalted butter', note: 'room temperature — cut into cubes' },
                { amount: 60, unit: 'g', name: 'icing sugar (đường bột)', note: 'sifted — not granulated sugar which produces graininess' },
                { amount: 60, unit: 'ml', name: 'evaporated milk (sữa đặc không đường)', note: 'full-fat evaporated milk, not sweetened condensed milk' },
                { amount: 20, unit: 'g', name: 'milk powder (sữa bột)', note: 'adds body and richness to the custard' },
                { amount: 0.5, unit: 'tsp', name: 'sesame oil', note: 'a few drops — the traditional aromatic that amplifies the egg yolk flavor' },
            ],
        },
        {
            title: 'Finishing',
            items: [
                { amount: 2, name: 'salted egg yolks, extra', note: 'crumbled over the top as garnish — optional but visually distinctive' },
                { amount: 1, unit: 'tbsp', name: 'icing sugar', note: 'for dusting' },
            ],
        },
    ],
    steps: [
        {
            title: 'Make the salted egg custard filling — can be made 1 day ahead',
            description: 'If using raw salted egg yolks: steam over boiling water for 15 minutes until cooked through. Cool completely. Mash the cooked salted egg yolks with a fork until completely smooth — no lumps. In a bowl, beat room-temperature butter with icing sugar until light and pale — about 3 minutes with a hand mixer. Add the mashed salted egg yolk and beat until fully incorporated. Add evaporated milk gradually, beating until smooth. Add milk powder and sesame oil. The custard should be smooth, glossy, and taste intensely of salted egg — rich, slightly salty, buttery, with a mineral depth.',
            tip: 'The sesame oil is the secret ingredient that amplifies the salted egg flavor. Even a small amount dramatically enhances the characteristic "salted egg" character. Do not skip or increase — a few drops only.',
        },
        {
            title: 'Set the custard to the right consistency',
            description: 'The custard filling needs to be cold enough to pipe or spoon into the cake without running, but warm enough to flow when the cake is at serving temperature. If making ahead: refrigerate overnight and allow to come to room temperature for 20 minutes before using. If making same-day: refrigerate for 30-45 minutes until slightly firmer than peanut butter consistency. The target: holds its shape when scooped but flows slowly when warmed.',
            tip: 'The flowing quality of the custard depends on it being served slightly warm. If the custard has been refrigerated, the cake should be served within 20-30 minutes of assembling — while the custard is still at room temperature and slightly fluid.',
        },
        {
            title: 'Make the sponge cake — preheat oven to 160°C',
            description: 'Separate eggs carefully — no yolk in the whites. In one bowl, whisk egg yolks with 40g sugar, oil, milk, and vanilla until pale and slightly thickened. Sift in cake flour, baking powder, and salt. Fold until just combined — no overmixing. In a separate clean bowl, beat egg whites with cream of tartar until soft peaks form. Gradually add remaining 40g sugar and beat to stiff, glossy peaks. The whites should hold a peak that curves slightly at the tip.',
            tip: 'The egg whites must be beaten in a completely clean, dry bowl — any fat or yolk will prevent them from reaching the volume needed. Even a drop of yolk contamination means start again.',
        },
        {
            title: 'Fold and bake the sponge',
            description: 'Add one-third of the whipped whites to the yolk mixture and fold gently to lighten the batter. Add the remaining whites in two additions, folding with a large spatula using a gentle figure-eight motion — fold until just combined, no white streaks visible. Pour into a lined 20cm round cake tin or 8 individual cupcake cases. Bake at 160°C for 25-30 minutes for a whole cake, 15-18 minutes for individual cakes. The cake is done when a toothpick comes out clean and the surface springs back when pressed.',
            tip: 'Do not open the oven in the first 20 minutes — the sponge collapses if exposed to cold air before the structure sets. Vietnamese sponge cakes are particularly sensitive to temperature changes.',
        },
        {
            title: 'Cool and prepare for filling',
            description: 'Remove from oven and immediately invert the tin if using a tube pan, or cool on a rack for a regular tin. Cool completely — minimum 30 minutes. Do not attempt to cut or fill a warm sponge. For the individual cake version: use a small knife or apple corer to make a deep hole in the center of each cooled cupcake, removing a cone of cake. For the whole cake: slice into two horizontal layers.',
            tip: 'The hole for the filling should go almost to the bottom of the cupcake — deep enough to hold a generous amount of custard that flows when the cake is broken open.',
        },
        {
            title: 'Fill, assemble, and serve',
            description: 'Spoon or pipe the room-temperature salted egg custard generously into each hole — it should be slightly overfilled, visible at the surface. Replace the top of the cut cake or place the removed cone back on the cupcake as a lid. Dust lightly with icing sugar. Garnish with crumbled cooked salted egg yolk if using. Serve within 30 minutes — the custard flows when the cake is at room temperature. To eat: tear or cut the cake and watch the golden custard pour out.',
            tip: 'The visual moment of the custard flowing out is the point of the dish. Serve immediately after filling — do not refrigerate the assembled cake or the custard will set firm and the lava effect is lost. This is a make-and-serve dessert.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}