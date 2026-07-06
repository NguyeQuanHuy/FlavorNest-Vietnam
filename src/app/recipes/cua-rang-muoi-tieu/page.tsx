'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
    slug: 'cua-rang-muoi-tieu',
    title: 'Cua Rang Mu?i Tiêu (Salt and Pepper Crab)',
    subtitle: 'Mud crab or blue swimmer crab deep-fried until the shell crisps, then tossed in a smoking wok with salt, black pepper, garlic, lemongrass, and kaffir lime leaf until a fragrant caramelized crust coats every surface. The Vietnamese crab preparation where the shell becomes part of the seasoning.',
    category: 'MAIN COURSE',
    difficulty: 'Medium',
    totalTime: '50 min',
    rating: 4.9,
    baseServings: 2,
    heroImage: '/images/recipes/cua-rang-muoi-tieu.jpg',
    intro: `Cua rang mu?i tiêu is the Vietnamese salt and pepper crab — a preparation that applies the rang mu?i technique (dry-roasting in seasoned salt in a hot wok) to whole crab sections that have first been deep-fried to crisp the shell. It is the Vietnamese cousin of the Singaporean chilli crab and black pepper crab, but lighter, more aromatic from the lemongrass and kaffir lime leaf, and built on the rang mu?i technique rather than a sauce base. The result is a crab where the shell, partially crisped by deep-frying and then caramelized further in the dry wok with the salt and aromatics, becomes genuinely edible — the thin sections of the leg and claw shell in particular shatter between the teeth and contribute the concentrated caramelized seasoning to the flesh within. Cua rang mu?i tiêu is a dish of technique and timing: the oil must be hot enough to genuinely crisp the shell in 3-4 minutes without overcooking the flesh; the wok for the rang mu?i must be smoking to caramelize the aromatics onto the hot shell immediately; and the entire tossing stage must be completed in under 2 minutes before the shell loses its crispness from the moisture in the aromatics. These variables are manageable with attention and produce, when correctly executed, the most satisfying crab eating experience in Vietnamese seafood cooking — the combination of crispy shell, caramelized aromatic crust, and sweet crab flesh that Vietnamese coastal restaurants serve as their flagship preparation.`,
    ingredientSections: [
        {
            title: 'Crab',
            items: [
                { amount: 1, name: 'large mud crab or blue swimmer crab, 800g-1kg', note: 'live preferred — dispatched and cleaned before cooking. Or 2 smaller crabs at 400-500g each. Mud crab (cua bùn) has the most meat; blue swimmer (cua bi?n) has thinner shells that crisp more easily.' },
                { amount: 600, unit: 'ml', name: 'neutral oil', note: 'for deep frying' },
                { amount: 50, unit: 'g', name: 'cornstarch', note: 'for dusting the crab pieces before frying — produces crispier shell' },
            ],
        },
        {
            title: 'Rang mu?i seasoning',
            items: [
                { amount: 1.5, unit: 'tsp', name: 'coarse sea salt' },
                { amount: 1.5, unit: 'tsp', name: 'freshly ground black pepper', note: 'coarse grind — the pepper is structural, not a trace seasoning' },
                { amount: 0.5, unit: 'tsp', name: 'sugar' },
                { amount: 4, name: 'lemongrass stalks', note: 'inner stalk only, very finely minced — 4 stalks is the correct quantity for crab' },
                { amount: 6, name: 'garlic cloves', note: 'thinly sliced' },
                { amount: 6, name: 'kaffir lime leaves', note: 'finely shredded into the thinnest possible strips' },
                { amount: 3, name: 'bird\'s eye chilies', note: 'thinly sliced' },
                { amount: 3, unit: 'tbsp', name: 'neutral oil', note: 'for the rang mu?i wok step' },
            ],
        },
        {
            title: 'To serve',
            items: [
                { amount: 3, name: 'spring onions', note: 'sliced' },
                { amount: 1, name: 'bunch cilantro' },
                { amount: 2, name: 'limes, cut in wedges' },
                { amount: 2, name: 'fresh red chilies, extra sliced' },
                { amount: 1, name: 'bowl warm water with lime', note: 'finger bowl — cua rang mu?i is eaten with hands' },
            ],
        },
    ],
    steps: [
        {
            title: 'Dispatch, clean, and portion the crab',
            description: 'Place the live crab in the freezer for 20 minutes. Remove the top shell — it comes off with a firm pull from the back. Discard the gills. Remove the stomach sac. Rinse thoroughly. With a heavy cleaver, split the body in half through the center. Separate the claws and legs from the body at the joints. Crack the claws lightly with the back of the cleaver — just enough to create a small opening that allows the frying oil and seasoning to enter, without splitting them completely. The crab should now be in pieces: body halves, claws, and attached leg sections.',
            tip: 'Cracking the claws slightly before frying is the technique that allows the seasoning to penetrate the claw meat during the rang mu?i step. A completely sealed claw only receives seasoning on the exterior; a lightly cracked claw allows the caramelized salt and aromatics to enter and season the flesh directly.',
        },
        {
            title: 'Dust and deep-fry the crab pieces',
            description: 'Pat the crab pieces completely dry. Dust lightly with cornstarch — shake off the excess. Heat oil to 180°C in a wok or deep pan. Fry the crab pieces in batches — do not crowd. Fry for 3-4 minutes until the shell turns bright orange-red and the thin sections of the leg shells feel slightly rigid rather than pliable. The crab is not fully cooked at this stage — the rang mu?i step finishes it. Drain on paper towels.',
            tip: 'The cornstarch dusting is what produces a shell that caramelizes in the rang mu?i step rather than merely coating in salt. The thin layer of starch on the shell surface provides the texture for the salt and aromatics to adhere to and caramelize onto. Without it the seasoning slides off.',
        },
        {
            title: 'The rang mu?i — maximum heat, maximum speed',
            description: 'Heat a clean wok over maximum heat until smoking. Add oil. Fry minced lemongrass and sliced garlic for 45 seconds until golden — work fast, the wok is very hot. Add the salt-pepper-sugar mixture and toss for 15 seconds until the salt toasts. Add all the fried crab pieces at once. Toss vigorously and continuously for 90 seconds — every surface of every piece must be coated in the aromatic salt mixture. Add shredded kaffir lime leaves and sliced chili in the final 20 seconds.',
            tip: 'The 90-second rang mu?i is the moment everything comes together or falls apart. Maximum heat throughout — if the wok cools at any point, the salt and aromatics stop caramelizing and the dish loses its character. Prepare everything before the wok goes on the heat. There is no time during the rang mu?i step to reach for anything.',
        },
        {
            title: 'Plate immediately — single layer',
            description: 'Transfer to a serving plate in a single layer — never pile the crab pieces, which traps steam and softens the shell within minutes. The shredded kaffir lime leaves and caramelized garlic should be visibly distributed across all the pieces. The shell should still be too hot to touch comfortably.',
            tip: 'Single layer presentation is essential. Piled crab pieces — each releasing steam from the just-cooked flesh — will soften each other\'s shells within 3-4 minutes. A single layer allows the heat to escape evenly and the shell to maintain its texture longer.',
        },
        {
            title: 'Scatter, serve, and eat immediately',
            description: 'Scatter spring onion, cilantro, and extra sliced chili over the plate. Serve with lime wedges, finger bowls, and cold beer. The eating: pick up each piece with fingers, identify the thin sections of shell and bite through directly — the shell should crack cleanly. For the body sections: break apart along the natural chambers and extract the flesh. For the claws: use the pre-cracked opening to access the meat. Dip each piece in the residual seasoning on the plate before eating.',
            tip: 'The residual caramelized salt and aromatics on the plate after the crab is eaten is worth scraping up. In Saigon seafood restaurants, diners use pieces of baguette to mop the plate at the end. The concentrated caramelized seasoning from the rang mu?i on the plate surface is the most intensely flavored element of the entire dish.',
        },
    ],
};

export default function Page() {
    return <RecipeLayout recipe={recipe} />;
}
