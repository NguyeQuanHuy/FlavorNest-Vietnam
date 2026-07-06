'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'muc-chien-xu',
    title: 'Crispy Breaded Squid',
    subtitle: 'M?c chiên xù — vàng giòn xù xì, ng?t th?t, ch?m tuong ?t là h?t.',
    category: 'APPETIZER',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 4,
    heroImage: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=1600&q=85',
    intro: `Muc chien xu is the Vietnamese coastal snack that needs no introduction and no occasion — a plate of golden, craggy-crusted squid rings and tentacles, fried until the breadcrumb coat shatters on contact and the squid inside stays sweet, tender, and just slightly chewy. It appears at seafood restaurants along the Phu Quoc shoreline, at street stalls in Vung Tau, and on home tables wherever someone decides that tonight calls for something crispy and cold beer.

The technique is the classic three-stage dredge — flour, egg, breadcrumb — but the Vietnamese version adds a layer of seasoning at each stage that builds flavour into the crust itself rather than relying entirely on the dipping sauce. White pepper in the flour. Fish sauce in the egg wash. Toasted breadcrumbs that are coarser than Japanese panko, giving a more irregular, craggy surface that traps more oil and produces more crunch per bite. The squid is cut thick enough to stay juicy but thin enough to cook through before the crust overcooks. Eaten immediately from the pan with tuong ?t — Vietnamese chilli sauce — or a squeeze of lime and salt, it is one of the most satisfying things the Vietnamese kitchen produces.`,
    ingredientSections: [
        {
            title: 'M?c',
            items: [
                { amount: 500, unit: 'g', name: 'fresh squid (m?c ?ng)', note: 'cleaned, tubes cut into 1.5cm rings; tentacles kept whole or halved if large' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'for marinating' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper' },
                { amount: 2, name: 'garlic cloves', note: 'minced, for marinating' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 600, unit: 'ml', name: 'neutral oil', note: 'for deep frying' },
            ],
        },
        {
            title: 'Ba l?p áo',
            items: [
                { amount: 80, unit: 'g', name: 'all-purpose flour' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'mixed into the flour' },
                { amount: 0.5, unit: 'tsp', name: 'garlic powder', note: 'mixed into the flour' },
                { amount: 0.5, unit: 'tsp', name: 'salt', note: 'mixed into the flour' },
                { amount: 2, name: 'eggs', note: 'beaten' },
                { amount: 1, unit: 'tbsp', name: 'fish sauce', note: 'mixed into the beaten egg' },
                { amount: 150, unit: 'g', name: 'breadcrumbs (v?n bánh mì)', note: 'coarse breadcrumbs preferred over fine; panko works well' },
                { amount: 0.5, unit: 'tsp', name: 'white pepper', note: 'mixed into the breadcrumbs' },
            ],
        },
        {
            title: 'Ch?m & garnish',
            items: [
                { amount: 4, unit: 'tbsp', name: 'Vietnamese chilli sauce (tuong ?t)', note: 'Cholimex or Chin-su brand' },
                { amount: 2, unit: 'tbsp', name: 'mayonnaise', note: 'optional — mixed with chilli sauce for a creamy dip' },
                { amount: 1, name: 'lime', note: 'cut into wedges' },
                { amount: 1, unit: 'tsp', name: 'salt', note: 'mixed with chilli powder and lime for mu?i ?t chanh dipping' },
                { amount: 3, name: 'stalks spring onion', note: 'sliced fine, for garnish' },
            ],
        },
    ],
    steps: [
        {
            title: 'Clean and cut the squid',
            description: 'Pull the tentacles from the tube — the head and innards will follow. Cut just below the eyes to separate the tentacles; discard the head and ink sac. Remove the transparent quill from inside the tube. Peel off the purple outer membrane if desired — not essential but produces a cleaner white appearance. Rinse the tubes and tentacles thoroughly under cold water. Cut tubes into rings 1.5cm thick — not thinner or they will overcook before the crust sets.',
            tip: 'Pat the squid completely dry after rinsing. Surface moisture is the enemy of crunch — it causes the flour coating to turn gummy and prevents the breadcrumbs from adhering properly.',
        },
        {
            title: 'Marinate',
            description: 'Toss the squid rings and tentacles with fish sauce, white pepper, minced garlic, and sugar. Mix well and leave at room temperature for 10–15 minutes. Do not marinate longer — the acid in the fish sauce will begin to denature the protein and the squid will turn mushy rather than tender.',
        },
        {
            title: 'Set up the dredging station',
            description: 'Prepare three shallow bowls in a line. Bowl one: flour seasoned with white pepper, garlic powder, and salt — mix well. Bowl two: beaten eggs mixed with fish sauce — whisk until combined. Bowl three: breadcrumbs mixed with white pepper. Pat the marinated squid dry once more with paper towels before beginning to dredge.',
        },
        {
            title: 'Dredge the squid',
            description: 'Working in batches, dredge each piece first in seasoned flour — shake off all excess. Dip in the egg wash, letting the excess drip off for 3 seconds. Press firmly into the breadcrumbs, turning and pressing to ensure the coating is even and fully adhered with no bare patches. Place on a wire rack. Do not stack — the coating will stick together. Repeat for all pieces. Let the coated squid rest on the rack for 5 minutes before frying — this helps the coating set.',
            tip: 'The press into the breadcrumbs is important — a gentle roll gives a thin coat that falls off in the oil. Press firmly and the crumbs bind into a solid crust.',
        },
        {
            title: 'Fry',
            description: 'Heat oil to 180°C in a deep pan or wok — test with a breadcrumb; it should sizzle immediately and float to the surface. Fry the squid in small batches of 6–8 pieces maximum, 2–3 minutes per batch, turning once at the halfway point. The crust should be deep golden and the surface visibly craggy and set. Remove with a slotted spoon and drain on a wire rack — not paper towels, which trap steam and soften the crust.',
            tip: 'Do not crowd the oil. Each batch should have room to move freely — crowding drops the oil temperature and produces pale, greasy squid instead of golden, crisp squid. Return the oil to 180°C between batches.',
        },
        {
            title: 'Serve immediately',
            description: 'Arrange the fried squid on a plate lined with paper, scattered with sliced spring onion. Serve within 3 minutes of frying — the crust begins to soften as steam from the hot squid works outward. Place tuong ?t, lime wedges, and mu?i ?t chanh alongside. For a richer dip, mix tuong ?t with mayonnaise in equal parts.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
