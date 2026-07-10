'use client';

import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'nem-cuon-can-tho',
    title: `Cần Thơ Fresh Spring Rolls`,
    subtitle: `Nem Cuốn Cần Thơ — Mekong Delta fresh rice paper rolls with pork, bì, herbs, and a thick hoisin-peanut dipping sauce — Vietnam's most refreshing finger food.`,
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '1 hr',
    rating: 4.9,
    baseServings: 4,
    heroImage: `https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1600&q=85`,
    intro: `Nem cuốn Cần Thơ — called gỏi cuốn in the south — is the fresh rice paper roll that the Mekong Delta has perfected over generations: a tightly wrapped cylinder of cool rice paper enclosing boiled pork, bì (shredded pork skin), cooked shrimp, fresh herbs, rice vermicelli, and crisp lettuce, served with a thick dipping sauce of hoisin, peanut, and coconut milk that is the Mekong Delta's specific contribution to the dish's canon. The roll itself is a lesson in textural composition — the yielding rice paper, the firm noodle, the crispy bì, the soft pork, the yielding shrimp, and the fresh herb crunch all arrive in a single cross-sectional bite.\n\nBì — shredded pork skin mixed with roasted rice powder — is the ingredient that most specifically marks nem cuốn as a southern Mekong dish rather than the central or northern versions. The pork skin is boiled until tender, scraped completely clean of fat, cut into fine julienne, and tossed while still warm with coarsely ground toasted rice powder (thính) that coats each strip and absorbs residual moisture, producing a dry, slightly crunchy texture that contrasts with the soft pork and shrimp in the same roll. The thính-coated bì provides a faint nutty note that plain pork alone does not contribute.\n\nThe dipping sauce is the Cần Thơ distinction. The standard southern dipping sauce for nem cuốn is tương hoisin thinned with water and topped with crushed peanuts — functional but uncomplicated. The Cần Thơ version adds fresh coconut milk, a small amount of pineapple juice, and a touch of chili to produce a sauce with more body, more sweetness, and a tropical richness that makes the roll a complete flavour experience rather than a vehicle for peanut paste.`,
    ingredientSections: [
        {
            title: `Roll fillings`,
            items: [
                { amount: 200, unit: 'g', name: `pork shoulder (thit heo nac)`, note: `simmered whole 20 min in lightly salted water, cooled, sliced thin` },
                { amount: 200, unit: 'g', name: `fresh medium shrimp (tom)`, note: `boiled 2 min, peeled, halved lengthwise` },
                { amount: 150, unit: 'g', name: `rice vermicelli (bun tuoi)`, note: `blanched 10 sec, drained` },
                { amount: 1, name: `head butter lettuce`, note: `leaves separated` },
                { amount: 1, name: `bunch mint (hung lui)` },
                { amount: 1, name: `bunch Vietnamese coriander (rau ram)` },
                { amount: 1, name: `bunch garlic chives (he)`, note: `the Cần Thơ addition — 2 chive stalks per roll protruding from one end` },
                { amount: 1, name: `cucumber, cut into thin batons` },
            ],
        },
        {
            title: `Bì (shredded pork skin with thính — the southern distinction)`,
            items: [
                { amount: 150, unit: 'g', name: `pork skin (bi heo)`, note: `boiled 15 min, fat scraped completely, cut into 4cm fine julienne` },
                { amount: 3, unit: 'tbsp', name: `thinh (roasted rice powder)`, note: `white rice dry-toasted golden, ground coarse in mortar` },
                { amount: 0.5, unit: 'tsp', name: `salt` },
                { amount: 0.5, unit: 'tsp', name: `sugar` },
                { amount: 0.5, unit: 'tsp', name: `black pepper` },
            ],
        },
        {
            title: `Rice paper`,
            items: [
                { amount: 16, name: `round rice paper sheets (banh trang)`, note: `22cm diameter — briefly dipped in warm water to soften` },
            ],
        },
        {
            title: `Cần Thơ hoisin-coconut dipping sauce`,
            items: [
                { amount: 4, unit: 'tbsp', name: `hoisin sauce (tuong den)` },
                { amount: 2, unit: 'tbsp', name: `full-fat coconut milk (nuoc cot dua)`, note: `the Cần Thơ addition — richness and body` },
                { amount: 1, unit: 'tbsp', name: `fresh pineapple juice`, note: `tropical brightness` },
                { amount: 1, unit: 'tbsp', name: `warm water`, note: `to thin to dipping consistency` },
                { amount: 1, unit: 'tsp', name: `sugar` },
                { amount: 1, name: `garlic clove, minced` },
                { amount: 1, name: `bird\'s eye chili, minced` },
                { amount: 3, unit: 'tbsp', name: `roasted peanuts, crushed fine`, note: `scattered over sauce surface before serving` },
            ],
        },
    ],
    steps: [
        {
            title: `Make the bì — shredded pork skin with thính`,
            description: `Boil pork skin in unsalted water 15 minutes. Remove while hot and immediately scrape every trace of fat from the inner surface using a spoon — cold fat adheres firmly and is very difficult to remove. Cut into fine julienne strips 4cm long and 1-2mm wide. While still warm, toss thoroughly with thính (roasted rice powder), salt, sugar, and black pepper. The warm skin absorbs the thính evenly; cold skin repels it. The finished bì should be dry to the touch, each strip coated in the pale roasted powder, smelling of toasted grain and pork. Cool completely before using in rolls — warm bì makes the rice paper sticky and difficult to work with.`,
            tip: `The thính coating on bì serves three functions: it absorbs the residual moisture from the boiled skin, preventing the roll from becoming wet; it adds a nutty flavour note from the roasted rice; and it creates a slightly gritty texture on the skin's surface that contrasts with its inherent chewiness. The combination — chewy skin, gritty powder coating — is the specific bì texture that makes nem cuốn distinctly southern Vietnamese. Northern fresh rolls use no bì at all; central versions occasionally include it but without the thính coating.`,
        },
        {
            title: `Prepare all fillings before rolling`,
            description: `Arrange all fillings in separate bowls or plates before beginning to roll — nem cuốn requires both hands for rolling and there is no time to prepare ingredients once you start. Slice pork thin. Halve shrimp lengthwise — the cut surface faces outward in the roll and is visible through the translucent rice paper, contributing to the visual presentation. Blanch and drain bún. Separate lettuce leaves. Pluck mint and rau răm leaves. Cut cucumber into 8cm batons. The garlic chives (hẹ) are placed whole, protruding 3-4cm from one end of the finished roll — they serve as both visual garnish and aromatic element, their mild garlic fragrance released when the end of the roll is bitten.`,
        },
        {
            title: `Make the Cần Thơ dipping sauce`,
            description: `Combine hoisin sauce, coconut milk, pineapple juice, warm water, sugar, minced garlic, and minced chili. Stir until smooth and combined. The sauce should be thick enough to coat the back of a spoon — not runny. The coconut milk adds body and a tropical richness that plain-water-thinned hoisin lacks; the pineapple juice's enzymes (bromelain) prevent the sauce from thickening too much as it sits. Scatter crushed peanuts over the surface just before serving — they should float on the sauce's surface. Taste: sweet-savoury-slightly spicy with a coconut depth behind the hoisin.`,
        },
        {
            title: `Soften the rice paper`,
            description: `Fill a wide, shallow bowl or plate with warm water (not hot — hot water makes the rice paper too soft to handle). Dip one rice paper sheet in the warm water for exactly 3-4 seconds — it should still feel stiff when removed. Place on a clean, slightly damp surface. The rice paper continues softening as you assemble the roll — if fully soft when removed from water, it will be too fragile to roll tightly. The 3-4 second dip is the Cần Thơ timing: just enough to initiate softening, not enough to complete it.`,
            tip: `The 3-4 second dip-and-still-stiff technique is the most important skill in nem cuốn. Overly softened rice paper tears when rolled, sticks to the work surface, and produces rolls that fall apart. The paper that is just beginning to soften when it leaves the water is pliable enough to roll tightly but strong enough to hold the filling without tearing. This skill develops quickly with practice — the second and third rolls are always better than the first.`,
        },
        {
            title: `Roll technique — the Cần Thơ method`,
            description: `Place the just-softened rice paper on the work surface. Arrange 2 shrimp halves (cut side up, pink side showing) horizontally across the lower third of the paper — these will be visible through the finished roll. Add a leaf of lettuce, a small bundle of bún, a few slices of pork, a small amount of bì, a sprig of mint and rau răm, and a baton of cucumber. Place 2 garlic chive stalks so they extend 3-4cm beyond the right edge of the paper. Fold the bottom edge of the rice paper up over the filling. Fold the left and right sides toward the centre. Roll forward firmly — pulling the filling tight as you roll. The finished roll should be firm, tight, and 10-12cm long with the garlic chives protruding from one end and the pink shrimp visible through the translucent paper.`,
        },
        {
            title: `Serve and eat`,
            description: `Arrange finished rolls on a plate — they do not need immediate serving but are best within 30 minutes of rolling as the rice paper continues softening and the rolls lose their firm texture over time. Serve with the hoisin-coconut dipping sauce alongside. To eat: hold the roll by the garlic chive end, dip the opposite end into the sauce, bite. The chive releases its garlic fragrance as it is grasped; the dipped end delivers the coconut-hoisin sauce and the shrimp-herb-bì combination simultaneously. In Cần Thơ, nem cuốn is eaten as a starter before heavier dishes — its cool, fresh character clears the palate and builds appetite.`,
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}