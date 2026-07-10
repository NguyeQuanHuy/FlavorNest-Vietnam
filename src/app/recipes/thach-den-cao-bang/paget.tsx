'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'thach-den-cao-bang',
    title: `Cao Bằng Grass Jelly`,
    subtitle: `Thạch Đen Cao Bằng — Jelly made from dried Platostoma palustre herb — Cao Bằng's most exported product, eaten cold with honey and ginger syrup.`,
    category: 'DESSERT',
    difficulty: 'Easy',
    totalTime: '3 hrs',
    rating: 4.9,
    baseServings: 8,
    heroImage: `https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=1600&q=85`,
    intro: `Thạch đen (grass jelly, 仙草 xiāncǎo in Chinese — literally "immortality herb") is the product that has made Cao Bằng province famous far beyond its borders — a deep black, slightly bitter, cooling jelly made by boiling the dried stems and leaves of Platostoma palustre (formerly Mesona chinensis), a member of the mint family that grows wild and cultivated across the limestone hills of Cao Bằng's Thạch An and Trùng Khánh districts. Vietnam is the world's second-largest producer of the dried herb after China, and Cao Bằng produces more than any other Vietnamese province.\n\nThe herb is harvested, dried until completely black, and exported throughout Asia and globally — the dried thạch đen of Cao Bằng is sold in Chinese supermarkets worldwide under the name xiāncǎo and forms the base of the grass jelly drinks ubiquitous across Southeast and East Asian food culture. The irony of global reach is that most people who consume grass jelly products have never encountered the fresh-made version: the Cao Bằng bowl of thạch đen eaten at a roadside stall — dense, deeply black, slightly bitter, served cold with a drizzle of honey, a small amount of fresh ginger syrup, and sometimes coconut milk — has a complexity and intensity that the commercially processed grass jelly available in cans and packets cannot replicate.\n\nThe setting agent that gives thạch đen its structure is the starch extracted from the herb itself, combined with a small amount of tapioca starch — no gelatin, no agar, no commercial gelling agent. The Platostoma herb contains a specific polysaccharide in its cell walls that forms a heat-reversible gel when concentrated through boiling, producing a jelly that is firmer than agar at the same concentration but melts in the mouth more smoothly than gelatin. The slight bitterness comes from the herb's polyphenol compounds — chlorogenic acid and rosmarinic acid — which are also responsible for the deep black colour and the cooling sensation (both physiological and traditional-medicine attributed) that gives the herb its "immortality" name.`,
    ingredientSections: [
        {
            title: `Thạch đen jelly`,
            items: [
                { amount: 80, unit: 'g', name: `dried thach den herb (Platostoma palustre / Mesona chinensis)`, note: `completely black dried stems and leaves — available at Chinese and Vietnamese grocery stores in Germany as "xiancao" or "仙草"; look for Cao Bằng-origin if possible` },
                { amount: 1.5, unit: 'L', name: `water`, note: `for first extraction` },
                { amount: 500, unit: 'ml', name: `water`, note: `for second extraction` },
                { amount: 60, unit: 'g', name: `tapioca starch (bot nang)`, note: `mixed with 100ml cold water before adding — the setting reinforcement` },
                { amount: 30, unit: 'g', name: `sugar`, note: `very small amount — thạch đen is meant to be lightly bitter, not sweet` },
                { amount: 0.25, unit: 'tsp', name: `salt` },
            ],
        },
        {
            title: `Ginger syrup (nuoc duong gung)`,
            items: [
                { amount: 100, unit: 'g', name: `sugar` },
                { amount: 150, unit: 'ml', name: `water` },
                { amount: 40, unit: 'g', name: `fresh ginger, sliced thin` },
                { amount: 1, name: `pandan leaf (la dua)`, note: `optional — adds fragrance` },
            ],
        },
        {
            title: `Serving options`,
            items: [
                { amount: 4, unit: 'tbsp', name: `honey (mat ong rung)`, note: `Cao Bằng forest honey if available — drizzled over each bowl` },
                { amount: 150, unit: 'ml', name: `coconut milk (nuoc cot dua)`, note: `for the coconut version — poured cold over the jelly` },
                { amount: 1, unit: 'tbsp', name: `toasted sesame seeds` },
                { amount: 8, name: `ice cubes`, note: `thạch đen is always served cold` },
            ],
        },
    ],
    steps: [
        {
            title: `Double-extract the herb`,
            description: `Break or roughly crush the dried thạch đen herb into smaller pieces. Place in a large pot with 1.5L cold water. Bring to a boil, then reduce to a steady simmer uncovered for 45 minutes — the water will turn deep brown-black and smell of the herb's distinctive earthy-mint aroma. Strain through a fine sieve lined with cheesecloth, pressing the herb firmly to extract every drop of liquid. Return the spent herb to the pot with 500ml fresh water. Simmer 30 more minutes — the second extraction is lighter in colour but contributes additional polysaccharides that improve the finished jelly's texture. Strain again and combine both extractions. You should have approximately 1.5-1.8L of deep black liquid.`,
            tip: `The double extraction is the technique that most home thạch đen recipes omit — they use a single extraction that produces a lighter, less complex jelly. The first extraction captures the majority of the colour compounds and bitter polyphenols; the second extraction captures additional setting polysaccharides from the herb's cell walls that were not fully released in the first boil. The combination produces a jelly with the correct density and the correct depth of bitterness. Cao Bằng commercial producers typically do triple extractions — the third is very light but contributes to overall yield.`,
        },
        {
            title: `Set the jelly`,
            description: `Mix tapioca starch with 100ml cold water until completely smooth — no lumps. Bring the combined herb extraction back to a boil. Add sugar and salt, stir until dissolved. Reduce heat to medium. Pour the tapioca starch mixture into the boiling herb liquid in a thin, steady stream while stirring constantly — the mixture will thicken immediately on contact with the hot liquid. Stir continuously for 3-4 minutes until the mixture is uniformly thick, glossy, and deep black. Pour immediately into a wide, flat container or individual moulds. Leave to cool at room temperature for 30 minutes, then refrigerate until fully set — minimum 2 hours.`,
            tip: `The tapioca starch is the setting reinforcement, not the primary gelling agent — the Platostoma polysaccharides in the herb extract do the majority of the gelling work. The tapioca ensures the jelly sets firmly enough to cut cleanly and hold its shape in the bowl rather than collapsing into a thick liquid. Without the tapioca: the jelly is softer and more fragile. Too much tapioca (above 80g per 1.5L): the jelly becomes rubbery and loses the smooth, melting mouthfeel that is the quality marker of well-made thạch đen.`,
        },
        {
            title: `Make the ginger syrup`,
            description: `Combine sugar, water, sliced ginger, and pandan leaf in a small saucepan. Heat over medium heat, stirring until sugar dissolves. Simmer 10 minutes until the syrup is fragrant and slightly thickened with the ginger's heat compounds. Strain out ginger and pandan. Cool completely. The ginger syrup should be clear, faintly golden, and smell of fresh ginger. This syrup is the Cao Bằng pairing for thạch đen — ginger's warming quality against the herb's cooling nature is a deliberate thermal-medicine balance in Tày highland food philosophy.`,
        },
        {
            title: `Cut and serve`,
            description: `Run a knife around the edge of the set jelly and invert onto a cutting board, or cut directly in the container. The jelly should be deep black, slightly glossy, and hold a clean edge when cut. Slice into cubes approximately 2-3cm — or use a spoon to scoop irregular pieces for a more rustic presentation. Place in a bowl with 2-3 ice cubes. Drizzle honey over the top. Add 2-3 tablespoons of ginger syrup. Scatter toasted sesame seeds. For the coconut version: pour cold salted coconut milk over the jelly in place of honey.`,
        },
        {
            title: `The Cao Bằng roadside stall experience`,
            description: `At Cao Bằng roadside stalls, thạch đen is sold from large rectangular slabs kept in metal trays of cold water — the vendor cuts portions to order with a thin wire cutter, scoops into small bowls, and drizzles forest honey (mật ong rừng from the limestone forest apiaries of Trùng Khánh district) over each bowl. The honey is the specific Cao Bằng addition — not white sugar syrup as in Chinese xiāncǎo preparations, but dark, intensely flavoured forest honey whose floral-resinous character complements the herb's bitterness in a way that refined sugar cannot. Forest honey from German Imker (beekeepers) who maintain hives in deciduous or mixed forest — Waldhonig rather than Blütenhonig — is the correct substitute in character.`,
            tip: `The physiological "cooling" sensation from thạch đen is real and not merely traditional — the rosmarinic acid and chlorogenic acid in Platostoma palustre are mild prostaglandin inhibitors that produce a genuine anti-inflammatory effect when consumed. The traditional Tày-Nùng use of thạch đen as a summer cooling food and fever remedy has biochemical support. Cao Bằng families keep dried thạch đen herb year-round specifically for making the jelly when fever or summer heat requires it — it is simultaneously a dessert and a medicine, the same dual role that many highland ingredients occupy in communities where the pharmacy and the kitchen are the same room.`,
        },
        {
            title: `Store and export logic`,
            description: `Fresh-made thạch đen keeps refrigerated for 5-7 days — the polysaccharide gel is stable at cold temperatures but begins to weep liquid (syneresis) after the first week. The dried herb keeps for 1-2 years at room temperature, sealed from moisture. This is the product logic that made Cao Bằng thạch đen globally successful: the herb is infinitely more shelf-stable than the finished jelly, travels anywhere, and allows the jelly to be made fresh at the destination. A 100g packet of dried thạch đen from a Cao Bằng producer — available at virtually every Chinese supermarket in Germany — produces 8-10 portions of jelly, costs approximately €3-5, and delivers a quality of product significantly better than any canned commercial preparation. The Cao Bằng thạch đen supply chain is one of the most elegant examples of Vietnamese highland-to-global food export in existence.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}