'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'mam-nem-da-nang',
    title: `Nam Ô Fermented Anchovy Sauce`,
    subtitle: `Mắm Nêm Đà Nẵng — The fermented anchovy condiment of Nam Ô village that flavours every central Vietnamese roll, wrap, and dip — how to make it and what makes it irreplaceable.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '720 hrs',
    rating: 4.9,
    baseServings: 20,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Mắm nêm is the fermented anchovy condiment that defines the flavour identity of central Vietnamese cooking — the pungent, deeply savoury, complex fermented fish sauce whose presence in the dipping sauce bowl is the signal that the food being served is from Đà Nẵng, Quảng Nam, Huế, or the central coast between them. It is not fish sauce (nước mắm), which is the clear, refined liquid extracted from fermented fish — mắm nêm is a thicker, chunkier, less refined preparation in which pieces of the fermented fish remain in the sauce, producing a texture and a depth of flavour that the clarified nước mắm cannot replicate.\n\nNam Ô village — historically a fishing community at the mouth of the Cu Đê River, now incorporated into Đà Nẵng city — has been producing mắm nêm from the Japanese anchovy (Engraulis japonicus, cá cơm) for centuries. The Nam Ô production method is the regional benchmark: fresh anchovy caught in the South China Sea between Đà Nẵng and Lăng Cô are layered with coarse salt in clay jars at a ratio of approximately 3:1 fish to salt by weight, covered with banana leaves and weighted, and left to ferment at ambient temperature for 12-18 months. During this extended fermentation, the fish proteins are completely hydrolysed by the fish\'s own enzymes (primarily cathepsin and calpain) and by the bacteria in the salt-tolerant microbiome, producing a thick, deeply coloured, intensely flavoured mass of partially dissolved fish in their own amino acid-rich liquid.\n\nThe resulting mắm nêm is used primarily as a dipping sauce — diluted with pineapple juice, lime, sugar, garlic, and chili to produce the specific condiment that accompanies bánh tráng cuốn thịt heo, nem lụi, bánh xèo, gỏi cá, and cơm gà throughout the central Vietnamese table. The pineapple juice is not merely sweet flavouring but a functional ingredient: its bromelain enzyme continues working on the mắm nêm\'s remaining protein fragments, smoothing the sauce\'s texture and integrating its complex amino acid flavours into a more homogeneous whole.`,
    ingredientSections: [
        {
            title: `Homemade mắm nêm (30-day minimum version)`,
            items: [
                { amount: 300, unit: 'g', name: `fresh anchovies (ca com / Engraulis japonicus)`, note: `very fresh, cleaned — or sardines as substitute; frozen anchovies from Asian grocers work well` },
                { amount: 100, unit: 'g', name: `coarse non-iodised salt (muoi hat)`, note: `3:1 fish to salt ratio — non-iodised essential; iodised salt inhibits bacterial fermentation` },
                { amount: 1, name: `clean glass jar (500ml)`, note: `sterilised` },
            ],
        },
        {
            title: `Finished mắm nêm dipping sauce`,
            items: [
                { amount: 4, unit: 'tbsp', name: `mam nem (homemade or store-bought)`, note: `store-bought from Vietnamese grocers in Germany: look for "mắm nêm" or "mắm cá cơm"` },
                { amount: 3, unit: 'tbsp', name: `fresh pineapple juice (strained)`, note: `bromelain smooths the sauce and integrates flavours` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
                { amount: 2, unit: 'tbsp', name: `roasted peanuts, crushed`, note: `scattered over surface before serving` },
                { amount: 1, unit: 'tbsp', name: `toasted sesame seeds` },
            ],
        },
        {
            title: `Quick mắm nêm substitute (no fermentation)`,
            items: [
                { amount: 3, unit: 'tbsp', name: `fish sauce (nuoc mam)`, note: `base` },
                { amount: 1, unit: 'tbsp', name: `shrimp paste (mam tom)`, note: `adds the fermented funk dimension` },
                { amount: 1, unit: 'tsp', name: `anchovy paste (ca com nghien)`, note: `or 2 oil-packed anchovy fillets, mashed` },
                { amount: 3, unit: 'tbsp', name: `fresh pineapple juice` },
                { amount: 1, unit: 'tbsp', name: `lime juice` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 3, name: `garlic cloves, minced` },
                { amount: 2, name: `bird's eye chili, sliced` },
            ],
        },
    ],
    steps: [
        {
            title: `The fermentation science — why 12-18 months`,
            description: `The 12-18 month fermentation of Nam Ô mắm nêm is not arbitrary tradition but the time required for two sequential biochemical processes to complete. Phase 1 (months 1-6): the fish's own intracellular enzymes (cathepsin B, calpain, and various proteases) begin hydrolyzing the muscle proteins into shorter peptides and free amino acids. This autolysis produces the primary umami compounds — glutamic acid, inosinic acid — that give mắm nêm its initial depth. Phase 2 (months 6-18): the salt-tolerant microbiome (primarily Tetragenococcus halophilus) produces lactic acid fermentation products and secondary flavour compounds including volatile fatty acids, esters, and pyrazines that contribute the complex, funky, slightly sweet depth that fresh fish sauce cannot have.`,
            tip: `The non-iodised salt requirement is the food science detail that most homemade mắm nêm recipes explain poorly. Iodine is added to table salt as a public health measure (preventing iodine deficiency), but iodine is a broad-spectrum antimicrobial — it inhibits not just pathogenic bacteria but also the Tetragenococcus halophilus and other beneficial bacteria responsible for Phase 2 fermentation. Mắm nêm made with iodised salt undergoes Phase 1 (enzyme autolysis) correctly but stalls at Phase 2, producing a product that is umami-rich but lacks the complex secondary fermentation flavours. Always use non-iodised coarse sea salt — available at German Reformhaus stores as "nicht jodiertes Meersalz."`,
        },
        {
            title: `Make the 30-day home version`,
            description: `Clean fresh anchovies thoroughly. Layer in a sterilised glass jar: a layer of coarse non-iodised salt on the bottom, then a layer of fish, then salt, alternating until all fish and salt are used. The top layer must be salt. Press down firmly to compact. Cover the jar opening with cheesecloth secured with a rubber band — do not seal airtight, as CO₂ from fermentation needs to escape. Place the jar in a warm location (24-28°C) out of direct sunlight. After 7 days, the fish will have released significant liquid — the brine should cover the fish. If not, add a small amount of salted water (20g salt per 100ml water). After 30 days: the fish will be partially broken down, the liquid deep amber-brown, and the smell intensely fermented. This 30-day version is the minimum — it captures Phase 1 flavours but not the full Phase 2 complexity of the authentic 12-18 month product.`,
        },
        {
            title: `Strain and prepare the mắm nêm for use`,
            description: `After fermentation, the mắm nêm can be used in two ways: unstrained (with fish pieces, for dipping sauces where texture is welcome) or strained through cheesecloth (for a clearer sauce). For the standard Nam Ô dipping sauce preparation: do not strain completely — leave some fish pieces and the thick liquid together. Mash lightly with a fork to break up larger fish pieces. The resulting product should be thick, dark amber-brown, intensely aromatic, and slightly chunky. Store in a sealed jar in the refrigerator — it keeps for 3-6 months and continues developing flavour during refrigerated storage.`,
        },
        {
            title: `Make the Nam Ô dipping sauce`,
            description: `Place 4 tablespoons of mắm nêm in a bowl. Add strained fresh pineapple juice — stir and allow 5 minutes for the bromelain to begin working on the mắm nêm's protein fragments. Add lime juice, sugar, minced garlic, and sliced chili. Stir until sugar dissolves. Taste — the sauce should be: pungent and funky from the mắm nêm (front note), sweet from the pineapple (softening the funk), sour from the lime (brightening), and have a deep savoury umami baseline throughout. Scatter crushed peanuts and toasted sesame over the surface just before serving. The peanuts and sesame add textural contrast and a nutty note that bridges the mắm nêm's intensity and the fresh herbs it will be eaten alongside.`,
            tip: `The 5-minute bromelain working time before adding the other ingredients is the technique that produces a smoother, more integrated mắm nêm dipping sauce. Bromelain (the protease enzyme in fresh pineapple) continues breaking down the remaining protein fragments in the mắm nêm during this brief window — the sauce becomes slightly thinner and more homogeneous, with the pineapple's amino acids from the broken-down mắm nêm proteins integrating with its own sugars to produce new flavour compounds. This is why fresh pineapple juice (not canned, which is pasteurised and bromelain-deactivated) is specified in every authentic mắm nêm dipping sauce recipe.`,
        },
        {
            title: `The quick substitute for Germany`,
            description: `When authentic mắm nêm is unavailable: combine fish sauce, mắm tôm (fermented shrimp paste), and anchovy paste (or oil-packed anchovies mashed to paste). The combination approximates the three flavour dimensions of mắm nêm — fish sauce provides the clear umami baseline (Phase 1 fermentation products), mắm tôm provides the funky fermented depth (Phase 2 dimension), and anchovy paste provides the specific seafood character of the anchovy species. This substitute produces approximately 70% of the authentic mắm nêm's complexity and is the best available option in the German diaspora kitchen. Dilute and season identically to authentic mắm nêm.`,
        },
        {
            title: `The cultural role of mắm nêm in central Vietnamese cooking`,
            description: `Mắm nêm is not merely a condiment in central Vietnamese cooking — it is the flavour thread that connects every dish on the central Vietnamese table. Bánh tráng cuốn thịt heo needs mắm nêm. Nem lụi needs mắm nêm. Bánh xèo Đà Nẵng needs mắm nêm. Gỏi cá Nam Ô needs mắm nêm. Cơm gà Hội An needs mắm nêm. The same sauce — diluted slightly differently for each application — is present at every central Vietnamese meal in a way that no single condiment is present at southern (nuoc cham) or northern (nuoc cham with mắm tôm on the side) Vietnamese tables. Mắm nêm is the central Vietnamese flavour identity in a jar, the single ingredient whose presence or absence immediately identifies the food as being of this specific region. Understanding it is understanding the cuisine.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}