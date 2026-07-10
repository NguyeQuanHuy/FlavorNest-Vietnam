'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muoi-kien-vang-e-de',
    title: `Ê Đê Weaver Ant Salt`,
    subtitle: `Muối Kiến Vàng Ê Đê — Roasted weaver ants ground with salt, mắc khén, and dried chili — the most distinctive condiment of the Central Highlands.`,
    category: 'APPETIZER',
    difficulty: 'Medium',
    totalTime: '45 min',
    rating: 4.9,
    baseServings: 8,
    heroImage: `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=85`,
    intro: `Muối kiến vàng is the condiment that most definitively marks the food culture of the Ê Đê people — a seasoning salt made by roasting weaver ants (kiến vàng, Oecophylla smaragdina) with their eggs and larvae over a dry pan until fragrant, then grinding them with coarse salt, crushed mắc khén, dried chili, and toasted sesame into a coarse, rust-coloured powder that delivers simultaneously sour, salty, numbing, and intensely umami flavour in a single pinch.\n\nOecophylla smaragdina — the Asian weaver ant — is one of the most successful insects in Southeast Asian ecosystems, building elaborate leaf nests in the coffee, cashew, and forest trees of Đắk Lắk and the surrounding highland provinces. The Ê Đê have harvested weaver ant nests for food for generations — the adult ants, their eggs (trứng kiến), and the larvae (nhộng kiến) are all edible and have distinct flavour profiles. The adult ants contribute a sharp, citric sourness from the formic acid they carry; the eggs and larvae are creamier, richer, and more subtly flavoured. In muối kiến vàng, the combination of adults and eggs produces the characteristic sour-umami complexity.\n\nThe formic acid in weaver ants is not merely a flavour note — it is a natural food preservative that gives muối kiến vàng a shelf life of several months at room temperature, far longer than any other condiment in the Ê Đê pantry. The ant salt keeps in a sealed jar and is used throughout the year, applied to grilled meats, eaten with cơm lam, or dissolved in warm water as a dipping sauce for fresh vegetables. Outside the Central Highlands, this condiment is almost entirely unknown. Outside Vietnam, it has never been documented in English food writing.`,
    ingredientSections: [
        {
            title: `Weaver ants`,
            items: [
                { amount: 100, unit: 'g', name: `fresh weaver ants with eggs (kien vang va trung kien)`, note: `whole nests collected from coffee or forest trees — adult ants + eggs + larvae; available at Buon Ma Thuot market May-August; substitute outside Vietnam: dried edible ants from specialty insect food suppliers` },
            ],
        },
        {
            title: `Salt base`,
            items: [
                { amount: 3, unit: 'tbsp', name: `coarse sea salt (muoi hat)`, note: `non-iodised` },
                { amount: 1.5, unit: 'tbsp', name: `mac khen berries, lightly toasted`, note: `the numbing citrus element` },
                { amount: 2, name: `dried bird's eye chili (ot kho)`, note: `toasted in dry pan 1 min` },
                { amount: 1, unit: 'tbsp', name: `toasted white sesame seeds (vung rang)` },
                { amount: 0.5, unit: 'tsp', name: `sugar`, note: `balances the formic acid sourness` },
            ],
        },
        {
            title: `To serve`,
            items: [
                { amount: 4, name: `portions cơm lam (bamboo tube rice) or steamed sticky rice` },
                { amount: 1, name: `grilled chicken or pork (any highland grilled meat)` },
                { amount: 1, name: `bunch fresh vegetables for dipping` },
            ],
        },
    ],
    steps: [
        {
            title: `Understand the ingredient — Oecophylla smaragdina`,
            description: `Weaver ants (kiến vàng) are the bright orange-red ants that build elaborate leaf nests in the upper canopy of trees throughout Southeast Asia. In Đắk Lắk, they are abundant in coffee plantations, where they are considered beneficial — they prey on crop pests and are encouraged by some farmers. The nests are collected by cutting the branch bearing the nest and shaking the ants, eggs, and larvae into a container. Adult ants release formic acid when disturbed — this acid is responsible for the characteristic sharp sourness of the finished salt and gives the hands a tingling sensation during handling (wash hands immediately after collection). In Germany, edible weaver ant products are available from specialty insect food suppliers (Bugfoundation in Köln, Essento products) and from Vietnamese online suppliers who export dried ant products.`,
            tip: `If sourcing live weaver ants from a Vietnamese community source in Germany: place the collected nest contents in a sealed container in the freezer for 20 minutes before processing — this immobilises the ants without killing them with heat and prevents formic acid spray during handling. The formic acid is harmless in small quantities but causes skin irritation with prolonged contact and eye irritation if touched after handling.`,
        },
        {
            title: `Clean and sort the ants`,
            description: `Spread the ant collection on a clean white tray — the white background makes it easier to see and remove any leaves, bark fragments, or other nest material. Sort out any visible debris with tweezers or a small brush. The ants, eggs, and larvae are all used together — do not attempt to separate them. If using dried ant products from a supplier, skip this step. The live or freshly frozen ant collection should smell of formic acid — sharp, slightly acidic, faintly citrusy. This smell will moderate significantly during roasting.`,
        },
        {
            title: `Dry roast the ants`,
            description: `Heat a dry pan (no oil) over medium heat. Add the ant collection — they will sizzle briefly from residual moisture. Stir continuously with a wooden spoon for 5-7 minutes until the ants are completely dry, slightly shrunken, and beginning to turn a deeper orange-brown. The formic acid will be partially driven off by heat — the sharp smell will reduce and be replaced by a roasted, nutty aroma with a remaining sour note. Do not over-roast: beyond 8 minutes the ants begin to taste bitter rather than sour-nutty. Remove from heat and spread on a plate to cool completely.`,
            tip: `The 5-7 minute roast time is the most critical variable. Under-roasted ants (below 5 minutes) retain too much formic acid and produce a salt that is aggressively sour and one-dimensional. Over-roasted ants (beyond 8 minutes) lose the formic acid contribution entirely and become simply a nutty powder without the characteristic sourness that defines muối kiến vàng. The visual cue: the ants should be a uniform deep orange-brown with no pale or translucent pieces remaining.`,
        },
        {
            title: `Toast the remaining ingredients`,
            description: `In the same dry pan, lightly toast mắc khén berries for 90 seconds, stirring constantly. Add dried chilies and toast 60 more seconds. Remove and cool. Toast sesame seeds separately for 3-4 minutes until golden. Allow all components to cool completely before grinding — warm ingredients in a mortar produce a paste rather than a powder.`,
        },
        {
            title: `Grind to muối kiến vàng`,
            description: `Combine cooled roasted ants, toasted mắc khén, toasted dried chili, toasted sesame, coarse salt, and sugar in a mortar. Pound with firm, rhythmic strokes — not grinding but pounding, which preserves some texture variation in the finished salt. Work for 3-4 minutes until a coarse powder forms: some fine ant dust, some mắc khén fragments, some sesame seeds cracked but not fully ground. The finished salt should be rust-orange in colour, smell of roasted insect and mắc khén citrus simultaneously, and taste — taken on the fingertip — of sharp sourness, salt, numbing tingle, and a deep savoury note with no single element dominant.`,
            tip: `The mortar-and-pestle method is the only correct grinding method for muối kiến vàng. A food processor or blender produces a fine uniform powder that loses the textural variation — the occasional larger mắc khén piece that delivers a burst of numbing, the sesame half that provides a nutty crunch. The Ê Đê preparation uses a stone mortar specifically because the stone surface's friction produces the coarse, living texture that the salt requires.`,
        },
        {
            title: `Store and use`,
            description: `Transfer muối kiến vàng to a clean, dry glass jar with a tight-fitting lid. The formic acid from the ants acts as a natural preservative — the salt keeps at room temperature for 2-3 months without any quality loss. The flavour actually improves over the first 2 weeks as the mắc khén compounds distribute evenly through the salt and the ant flavour mellows slightly from its initial sharpness. Use as a dipping salt for grilled meats — press the meat into the salt so granules adhere to the surface. Dissolve 1 tsp in 3 tbsp warm water for a dipping sauce for fresh vegetables. Sprinkle over cơm lam immediately after splitting the bamboo tube.`,
            tip: `Muối kiến vàng is the condiment that Ê Đê people take with them when they travel or relocate — a jar of this salt in a German kitchen is a direct connection to the highland forest and to the specific flavour that no commercially produced condiment replicates. Vietnamese community members from Đắk Lắk in Germany sometimes bring dried weaver ant products from family in Vietnam specifically for this preparation. The shelf stability of the finished salt (2-3 months) makes it practical for long-distance gifting.`,
        },
        {
            title: `The complete Ê Đê flavour experience`,
            description: `Muối kiến vàng is eaten at its best with cơm lam fresh from the bamboo tube — the moment the tube is split at the table, pinch a portion of the warm coconut-scented rice and press it lightly into the ant salt before eating. The sourness of the formic acid cuts through the coconut richness of the rice; the mắc khén tingle amplifies the rice's natural sweetness; the sesame and roasted ant body add a nutty depth. This combination — bamboo rice and ant salt — is the most complete expression of Ê Đê food philosophy: forest ingredients, minimal processing, maximum flavour from what the land provides freely.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}