'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'bit-tet-viet-nam',
    title: 'Bít Tết Việt Nam (Vietnamese Steak with Brown Sauce)',
    subtitle: 'A thin beef steak seared on a cast iron plate until charred at the edges, served with a fried egg, chicken liver pâté, and a Vietnamese brown sauce of oyster, soy, and butter — alongside a fresh baguette and a small salad of tomato and cucumber. The Saigon breakfast that arrived with the French and never left.',
    category: 'MAIN COURSE',
    difficulty: 'Easy',
    totalTime: '30 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/bit-tet-viet-nam.jpg',
    intro: `Bít tết Việt Nam is the Vietnamese steak — the living evidence of what happens when French cuisine arrives in a country with its own powerful culinary identity and stays long enough to become something neither French nor Vietnamese but specifically its own. The French brought beefsteak to Vietnam during the colonial period, along with the cast iron plate, the fried egg alongside the meat, and the concept of the brown sauce. The Vietnamese took all of this and transformed it: the beef was tenderized and seasoned with fish sauce and garlic, the brown sauce became a Vietnamese amalgam of oyster sauce, soy, butter, and beef drippings, the cast iron plate became the essential piece of equipment that the dish arrives sizzling on, and the baguette that comes alongside is the bánh mì — thin-crusted, airy Vietnamese baguette, perfect for mopping. The pâté, which arrived with the French, stayed on the plate through independence, through reunification, through every political change since — because it tastes extraordinary alongside caramelized beef and a runny fried egg. Bít tết Việt Nam is eaten at breakfast in Saigon, in the small restaurants near Ben Thanh market that open at 6am specifically for this purpose, and in Vietnamese homes where the memory of the French-era preparation has been maintained for three generations. It is eaten with a fork and knife — the only Vietnamese dish that typically is — because this is the French inheritance that stuck.`,
    ingredientSections: [
        {
            title: 'Beef',
            items: [
                { amount: 2, name: 'beef steaks, 150g each', note: 'sirloin or flank steak, sliced 1cm thin — Vietnamese bít tết is thinner than Western steak and cooks in 2-3 minutes total. Flatten with a meat mallet if necessary.' },
                { amount: 2, unit: 'tbsp', name: 'fish sauce', note: 'the Vietnamese marinade element — replaces the salt and Worcestershire of the French version' },
                { amount: 1, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 3, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 0.5, unit: 'tsp', name: 'black pepper', note: 'coarsely ground' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Vietnamese brown sauce (sốt nâu)',
            items: [
                { amount: 150, unit: 'ml', name: 'beef stock', note: 'good quality — this is the base of the sauce' },
                { amount: 2, unit: 'tbsp', name: 'oyster sauce' },
                { amount: 1, unit: 'tbsp', name: 'soy sauce' },
                { amount: 1, unit: 'tsp', name: 'sugar' },
                { amount: 1, unit: 'tsp', name: 'cornstarch', note: 'mixed with 1 tbsp cold water' },
                { amount: 30, unit: 'g', name: 'unsalted butter', note: 'stirred in at the end — gives the sauce gloss and richness' },
                { amount: 2, name: 'shallots', note: 'finely minced' },
                { amount: 2, name: 'garlic cloves', note: 'minced' },
                { amount: 1, unit: 'tbsp', name: 'neutral oil' },
            ],
        },
        {
            title: 'Cast iron plate essentials',
            items: [
                { amount: 2, name: 'eggs', note: 'fried — yolk runny, whites just set. The fried egg is non-negotiable.' },
                { amount: 4, unit: 'tbsp', name: 'chicken liver pâté (pâté gan)', note: 'Vissan brand canned pâté or homemade. Served cold alongside the hot steak.' },
                { amount: 30, unit: 'g', name: 'unsalted butter', note: 'for the plate — the sizzle when butter hits the hot cast iron is the theatrical moment of the dish' },
                { amount: 2, name: 'Vietnamese baguettes (bánh mì)', note: 'sliced in half — for mopping the sauce and pâté' },
            ],
        },
        {
            title: 'Side salad (rau sống)',
            items: [
                { amount: 2, name: 'medium tomatoes', note: 'sliced into wedges' },
                { amount: 0.5, name: 'cucumber', note: 'thinly sliced' },
                { amount: 1, name: 'small onion', note: 'thinly sliced, soaked in ice water 10 minutes to remove sharpness' },
                { amount: 2, unit: 'tbsp', name: 'light soy sauce or maggi seasoning', note: 'drizzled over the salad — the Vietnamese bít tết salad dressing' },
            ],
        },
    ],
    steps: [
        {
            title: 'Marinate the beef — 20 minutes minimum',
            description: 'Combine fish sauce, oyster sauce, minced garlic, sugar, black pepper, and oil. Coat the thin steaks completely on both sides. Marinate for minimum 20 minutes at room temperature — the fish sauce begins to lightly tenderize the surface proteins. Pat lightly dry before cooking — excess liquid prevents the aggressive sear that produces the charred edges characteristic of Vietnamese bít tết.',
            tip: 'Vietnamese bít tết beef is always thin — 1cm maximum. Thicker steaks take too long to cook for the cast iron plate service and cannot develop the specific char-to-raw-center ratio that defines the dish. If the steak is thick, flatten with a meat mallet before marinating.',
        },
        {
            title: 'Make the brown sauce',
            description: 'Heat oil in a small pan over medium heat. Fry minced shallots and garlic for 2 minutes until softened and golden. Add beef stock, oyster sauce, soy sauce, and sugar. Bring to a simmer. Stir in the cornstarch slurry and cook for 2 minutes until the sauce thickens to a glossy, spoon-coating consistency. Remove from heat and stir in the butter piece by piece until fully incorporated and the sauce is glossy. Keep warm.',
            tip: 'The butter added off the heat is the technique that produces a restaurant-quality sốt nâu. Butter added to simmering sauce breaks and separates — butter swirled into a sauce pulled from the heat emulsifies and produces the glossy, silky finish specific to Vietnamese brown sauce.',
        },
        {
            title: 'Heat the cast iron plate until smoking',
            description: 'Place a cast iron plate or heavy skillet over maximum heat for 4-5 minutes until genuinely smoking — not just hot, but smoking. Add a tablespoon of oil and tilt to coat. The oil should smoke immediately on contact. The cast iron must be at extreme temperature — this is what produces the charred, caramelized edges in 2-3 minutes without overcooking the thin steak.',
            tip: 'The smoking cast iron is the technical requirement that cannot be faked. A moderately hot pan produces a grey, steamed steak. A smoking pan produces the charred exterior and the specific restaurant smell that makes bít tết what it is.',
        },
        {
            title: 'Sear the steak — fast and confident',
            description: 'Place the marinated steak on the smoking cast iron. Do not touch for 60-90 seconds — the crust needs to form before it will release cleanly. Flip and sear the other side for 60 seconds. For a 1cm steak, this produces medium to medium-well — the correct doneness for Vietnamese bít tết. The edges should be charred and slightly blackened. Remove immediately.',
            tip: 'Vietnamese bít tết is served medium to medium-well — not rare. This is the traditional and correct preparation. The thin steak at this doneness still has juice but the fish sauce marinade has caramelized on the surface. Do not serve rare; it tastes under-seasoned because the caramelization has not developed.',
        },
        {
            title: 'Fry the egg and assemble the plate',
            description: 'In the same pan with residual heat, fry the egg in butter until the white is just set and the yolk is still runny — 90 seconds. Add butter to the hot cast iron serving plate — it sizzles dramatically. Place the steak on the plate. Slide the fried egg alongside. Add spoonfuls of cold pâté next to the egg. Pour the warm brown sauce generously over the steak. Serve the baguette, side salad, and extra sauce alongside.',
            tip: 'The cold pâté against the hot steak and sizzling plate is the temperature contrast specific to bít tết Việt Nam. Do not warm the pâté. The contrast between the cold, smooth pâté and the charred, hot beef is intentional and essential to the eating experience.',
        },
        {
            title: 'How to eat Vietnamese steak',
            description: 'Cut the steak into bite-sized pieces on the sizzling plate. Drag each piece through the brown sauce pooling on the plate. Eat a piece of steak with a piece of egg, a smear of pâté from the baguette, and a bite of the tomato-cucumber salad. The baguette is used to mop — drag it through the sauce, the egg yolk, and any pâté remaining on the plate. This is the correct sequence and the one Vietnamese bít tết diners follow instinctively.',
            tip: 'The final mopping of the plate with the baguette — scraping up the combined drippings of brown sauce, egg yolk, and butter — is the part that Vietnamese people describe as the best part of bít tết. Leave enough bread for this purpose.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}