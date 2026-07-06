'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'goi-cuon-banh-phong-tom',
    title: 'Gỏi Cuốn Bánh Phồng Tôm (Fresh Rolls Wrapped in Shrimp Crackers)',
    subtitle: 'The Vietnamese fresh roll reimagined with a fried shrimp cracker as the wrapper instead of rice paper — the filling of shrimp, pork, herbs, and vermicelli placed on a freshly fried cracker that shatters on the first bite, releasing everything simultaneously rather than yielding gradually like rice paper. The same flavors, a completely different eating experience.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '40 min',
    rating: 4.8,
    baseServings: 4,
    heroImage: '/images/recipes/goi-cuon-banh-phong-tom.jpg',
    intro: `Gỏi cuốn bánh phồng tôm is the fresh roll variation that uses a fried shrimp cracker as the wrapping medium rather than the standard rice paper, producing an eating experience that is simultaneously familiar and surprising. The familiar element: the filling is the classic gỏi cuốn filling — cooked shrimp, boiled pork belly, rice vermicelli, lettuce, rau răm, mint, and cucumber — the combination that Vietnamese people recognize from childhood and that food tourists seek out at their first Vietnamese restaurant meal. The surprising element: the wrapper, instead of the soft, slightly chewy rice paper that yields gradually when bitten, is a fried shrimp cracker that shatters immediately and completely on first contact with the teeth, releasing the filling in a sudden flood rather than progressively as the rice paper stretches. This difference in wrapper texture changes the eating experience entirely: where the rice paper gỏi cuốn is gentle, cooling, and requires two or three bites to experience fully, the bánh phồng tôm gỏi cuốn is dramatic, immediate, and produces its complete flavor in one bite. The shrimp cracker wrapper also adds its own specific shrimp-salt flavor to each bite, layering the cracker's concentrated shrimp character on top of the whole cooked shrimp that is the primary protein filling. The assembly — placing the filling on the flat cracker and eating open-face rather than rolling, or constructing a loose cone from the filling on the cracker — is the practical difference from the wrapped rice paper version, because the rigid cracker cannot be rolled in the same way. This open-face or cone format, common at Vietnamese eateries that serve this variation, makes the construction visible and the individual components more clearly distinguishable at the moment of eating.`,
    ingredientSections: [
        {
            title: 'Shrimp cracker wrappers',
            items: [
                { amount: 24, name: 'large dried shrimp crackers (bánh phồng tôm khô)', note: 'the largest size available — 10-12cm diameter when expanded. Fry immediately before assembling.' },
                { amount: 500, unit: 'ml', name: 'neutral oil', note: 'for frying the crackers at 190°C' },
            ],
        },
        {
            title: 'Classic gỏi cuốn filling',
            items: [
                { amount: 300, unit: 'g', name: 'fresh shrimp', note: 'boiled 3-4 minutes, peeled, halved lengthwise — placed cut-side visible on the cracker' },
                { amount: 200, unit: 'g', name: 'pork belly (ba chỉ)', note: 'boiled 30 minutes, cooled, sliced 5mm thin' },
                { amount: 100, unit: 'g', name: 'dried rice vermicelli (bún)', note: 'soaked and boiled 3-4 minutes, drained, cut into 10cm lengths' },
                { amount: 1, name: 'head butter lettuce', note: 'leaves separated and torn into pieces' },
                { amount: 1, name: 'bunch Vietnamese coriander (rau răm)' },
                { amount: 1, name: 'bunch mint' },
                { amount: 1, name: 'cucumber', note: 'julienned into batons' },
                { amount: 100, unit: 'g', name: 'bean sprouts', note: 'blanched briefly' },
            ],
        },
        {
            title: 'Peanut dipping sauce (tương hoisin đậu phộng)',
            items: [
                { amount: 3, unit: 'tbsp', name: 'hoisin sauce' },
                { amount: 2, unit: 'tbsp', name: 'peanut butter', note: 'smooth — combined with hoisin for the classic gỏi cuốn dipping sauce' },
                { amount: 3, unit: 'tbsp', name: 'warm water', note: 'to thin to dipping consistency' },
                { amount: 1, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 2, unit: 'tbsp', name: 'roasted peanuts', note: 'roughly crushed — scattered over the sauce' },
                { amount: 1, name: 'bird\'s eye chili', note: 'sliced — optional' },
            ],
        },
        {
            title: 'Alternative: nước chấm',
            items: [
                { amount: 3, unit: 'tbsp', name: 'fish sauce' },
                { amount: 2, unit: 'tbsp', name: 'fresh lime juice' },
                { amount: 1.5, unit: 'tbsp', name: 'sugar' },
                { amount: 4, unit: 'tbsp', name: 'water' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, name: 'bird\'s eye chili', note: 'minced' },
            ],
        },
    ],
    steps: [
        {
            title: 'Prepare all the filling components',
            description: 'Boil the shrimp: bring water to a boil, add shrimp, cook 3-4 minutes until pink and just cooked through. Drain, cool, peel, and halve lengthwise. Boil the pork belly: simmer in salted water for 30 minutes until tender when pierced. Cool completely before slicing 5mm thin — warm pork does not slice cleanly. Cook the vermicelli according to package instructions. Prepare the herbs, lettuce, cucumber, and bean sprouts. Arrange all components on a platter — the assembly should happen quickly once the crackers are fried, so everything must be ready first.',
            tip: 'The pork belly for gỏi cuốn bánh phồng tôm should be cooled to room temperature or refrigerated before slicing — cold pork slices more cleanly and holds its shape better on the cracker. Warm pork compresses and tears when placed on the cracker surface.',
        },
        {
            title: 'Make the peanut dipping sauce',
            description: 'Combine hoisin sauce, peanut butter, warm water, lime juice, sugar, and minced garlic. Whisk until smooth — the sauce should be thick enough to coat a spoon but thin enough to drizzle. Add more water if needed. Transfer to individual dipping bowls. Scatter crushed peanuts and sliced chili over each bowl.',
            tip: 'The peanut-hoisin sauce for gỏi cuốn is the dipping sauce that most specifically complements the shrimp cracker wrapper — the peanut richness and the hoisin sweetness amplify the shrimp character of the cracker in a way that the lighter nước chấm does not. Serve both sauces if possible and let each diner choose.',
        },
        {
            title: 'Fry the crackers to order — just before assembly',
            description: 'Heat oil to 190°C. Fry the large shrimp crackers one or two at a time — the large size needs more space than smaller crackers. Each large cracker expands to 10-12cm in 3-5 seconds. Remove immediately when fully expanded. Drain briefly. The crackers must go from the fryer to the assembly surface in under 60 seconds — the assembly happens while the cracker is still warm and slightly pliable, before it becomes fully rigid. A fully cooled cracker is more brittle and harder to load without cracking.',
            tip: 'Frying the crackers immediately before assembly rather than pre-frying a batch is the technique that produces crackers at the optimal assembly temperature — warm enough to be slightly flexible when loading the filling but crispy enough to shatter on first bite. A cracker fried 10 minutes before assembly will be fully rigid and will crack when the filling weight is placed on it.',
        },
        {
            title: 'Assemble open-face or cone style',
            description: 'OPEN-FACE METHOD: Place the flat fried cracker on a small plate. Layer lettuce, vermicelli, cucumber, and bean sprouts across the center. Place 2-3 shrimp halves cut-side up. Add pork belly slices, rau răm, and mint. Eat immediately by picking up the cracker with both hands and biting from one end — the cracker shatters with the first bite. CONE METHOD: Gently curve the warm cracker into a cone shape, hold with one hand, fill the cone with the filling components, and eat from the open end.',
            tip: 'The open-face method produces a more dramatic visual and a more explosive eating experience — the flat cracker loaded with colorful filling is one of the most visually appealing presentations in the collection. The cone method is more practical for standing eating at a party or market — the cone contains the filling as the cracker is eaten.',
        },
        {
            title: 'The eating experience and timing',
            description: 'Gỏi cuốn bánh phồng tôm must be eaten immediately after assembly — within 60 seconds of the filling being placed on the cracker. The moisture from the vegetables and the weight of the filling will begin softening the cracker after 60-90 seconds, and the specific shattering quality that makes this preparation different from rice paper gỏi cuốn will be lost. Assemble one at a time, eat immediately, assemble the next. This is the fastest-eating gỏi cuốn in the collection — and one of the most satisfying.',
            tip: 'The comparison between eating gỏi cuốn bánh phồng tôm and eating the same filling in rice paper demonstrates what wrapper texture does to an eating experience. The rice paper version is meditative and gradual — each bite yields gently and the flavors arrive in sequence. The shrimp cracker version is immediate and complete — the cracker shatters, all the filling arrives at once, and the shrimp-cracker flavor combines with the herbs and shrimp and pork in one sudden complete mouthful. Both are correct. They are different meals from the same ingredients.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
