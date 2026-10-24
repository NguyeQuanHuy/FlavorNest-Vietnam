'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ca-coc-kho-nuoc-dua',
  title: `Cá Cóc Kho Nước Dừa (Mekong River Carp Braised in Coconut Water)`,
  subtitle: `Thick steaks of ca coc, the prized river carp of the Co Chien, caramelized in a clay pot and braised down in fresh coconut water until the sauce turns mahogany and clings to the bone. The dish Vinh Long cooks when the river gives them something worth cooking slowly.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 10 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/ca-coc-kho-nuoc-dua.jpg',
  intro: `Ca coc is one of the few fish in the Mekong that Delta cooks will name a price for without embarrassment. It is a large river carp — silver-scaled, deep-bodied, muscular from swimming against current — and it runs the Co Chien and Hau river channels that bracket Vinh Long province. The fish comes into its own in the months after the flood recedes, when it is fat and its flesh is dense, and the province cooks it the way the Delta cooks everything it respects: kho, slowly, in a clay pot, in caramel and coconut water, until the liquid has almost gone and what is left is a lacquer.

The fish matters because of what current does to muscle. A river carp fighting flow year-round develops long, tightly bundled muscle fibers with a fine grain and a firm bite — nothing like the slack, watery flesh of a pond-raised carp, and crucially nothing like the muddy geosmin note that pond fish carry. Ca coc holds together through 40 minutes of braising, and its bones are thick enough that the flesh next to them stays juicy while the exterior takes on the caramel. Outside Vietnam, the honest substitutes in order of preference are: whole mirror carp or common carp steaks from a Polish or Turkish fishmonger, thick-cut basa or catfish steaks (bone-in if possible), or firm cod cheeks. Fillets are the wrong shape entirely — kho requires bone and skin, both of which give up gelatin into the sauce over the long braise and are the reason the finished liquid coats a spoon.

Kho is not a stew and it is not a braise in the French sense. It is a controlled reduction that ends almost dry. Two chemistries run at once. Nuoc mau — sugar caramelized to a dark, bitter-edged amber before any liquid enters the pot — is pure caramelization, and it supplies the color, the roasted bitterness that keeps the dish from turning cloying, and the aromatic backbone. Meanwhile the coconut water, fish sauce, shallot and pepper drive the Maillard reaction across the surface of the fish over 40 minutes of low heat, while the fish sauce and salt slowly draw water out of the flesh by osmosis and pull the seasoning in to replace it. Braised too fast, the fish gives up water faster than it takes seasoning in, and you get dry meat sitting in a good sauce. Braised low and slow, the exchange balances, and the seasoning reaches the bone.

Fresh coconut water, not coconut milk, is the southern signature and the two are not interchangeable. Coconut water is thin, faintly sweet, mineral, and full of free sugars that caramelize alongside the nuoc mau as the pot reduces — it deepens the sauce without thickening it, and it leaves the flesh clean. Coconut milk would add fat and turn the sauce into a curry-like coating, which is a different dish from a different province. The northern version of fish kho uses only water and a great deal more pepper; the central version leans on chili. The Delta reaches for the coconut, because there is a coconut tree every ten meters and because the Delta palate has always run sweeter than the rest of the country. That sweetness has to be earned, not dumped in: the sugar comes from the caramel and the coconut, and the finished sauce should taste savory-sweet-bitter, in that order, with the sweet as an undertone and never a headline.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 800,
          unit: 'g',
          name: 'ca coc (Mekong river carp), cut into 3 cm thick bone-in steaks',
          note: `Thick steaks, bone in, skin on. Both are structural: the bone conducts heat slowly and keeps the flesh beside it moist, and the skin and bone release gelatin that gives the reduced sauce its body. In Europe: bone-in carp steaks, or thick basa/catfish steaks. Never use skinless fillets — they fall apart by minute 20 and the sauce stays thin.`,
        },
        {
          amount: 1,
          unit: 'tbsp',
          name: 'coarse salt (for scrubbing)',
          note: `Rub over the steaks, rinse, and pat dry. Removes the slime layer that causes river fish to taste muddy and prevents the surface from browning.`,
        },
        { amount: 1, unit: 'tbsp', name: 'fish sauce (for the first marinade)' },
        { amount: 1, unit: 'tsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'freshly cracked black pepper', note: `Cracked coarse, not ground fine. Whole cracked pepper releases piperine gradually over the 40-minute braise instead of all at once.` },
        { amount: 3, name: 'shallots, thinly sliced' },
        { amount: 3, name: 'cloves garlic, minced' },
      ],
    },
    {
      title: 'The caramel and braising liquid',
      items: [
        {
          amount: 3,
          unit: 'tbsp',
          name: 'sugar (for nuoc mau)',
          note: `Taken to a dark amber that smells faintly of burnt toast — this bitterness is the point. A pale caramel gives sweetness with no backbone, and the dish tastes flat and sugary.`,
        },
        { amount: 1, unit: 'tbsp', name: 'water (to stop the caramel)' },
        {
          amount: 400,
          unit: 'ml',
          name: 'fresh young coconut water',
          note: `From a fresh coconut if at all possible — the sterile packaged kind is acceptable but must be unsweetened and free of added citric acid, which will taste sour after 40 minutes of reduction. This is coconut WATER, not coconut milk. Milk turns the dish into a different and much heavier preparation.`,
        },
        { amount: 3, unit: 'tbsp', name: 'fish sauce (35-40°N)' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
        { amount: 2, name: 'red chilies, whole', note: `Added whole, not sliced. They perfume the sauce without releasing full heat — the Delta wants warmth here, not fire.` },
        { amount: 2, name: 'scallions, cut into 4 cm lengths' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'bowls of hot steamed jasmine rice', note: `Non-negotiable. Kho is engineered to be eaten with rice — the sauce is far too concentrated to eat any other way.` },
        { amount: 200, unit: 'g', name: 'rau luoc: blanched water spinach or bitter greens', note: `The Delta counterweight. Something plain, green and slightly bitter to cut the caramel.` },
        { amount: 1, name: 'small bowl of canh (clear soup) or sliced cucumber' },
      ],
    },
  ],
  steps: [
    {
      title: 'Scrub, marinate — 30 minutes minimum',
      description: `Rub the fish steaks with coarse salt, rinse under cold water, and pat completely dry. Toss them with the fish sauce, sugar, cracked pepper, half the shallots and the garlic. Leave 30 minutes at room temperature, turning once.

The steaks should look glossy and the surface should feel slightly tacky rather than wet — that tackiness is dissolved surface protein, and it is what will brown in the caramel.

Marinate less than 20 minutes and the seasoning never gets past the surface, so the flesh beside the bone tastes bland at the end. Marinate longer than 2 hours and the salt draws out too much water; the flesh firms up and turns dry no matter how gently you braise it.`,
      tip: `This is osmosis working in your favor. Fish sauce at this concentration pulls water out of the surface cells and, as the gradient equalizes, carries dissolved salt and glutamate back in. Thirty minutes is roughly the point where inward diffusion overtakes outward water loss for a 3 cm steak — thicker cuts want longer, thin ones want less. It is the same calculation behind every kho in Vietnam, and every Delta cook does it by feel.`,
    },
    {
      title: 'Make the nuoc mau — dark amber, and one second past comfortable',
      description: `In a clay pot or heavy saucepan over medium heat, melt the 3 tablespoons of sugar dry, without stirring. Swirl the pot as it liquefies. It will go clear, then straw, then honey, then amber — and then, at the moment it starts to smell faintly of burnt toast and wisps of smoke rise from the edge, take it off the heat and add the tablespoon of water. It will spit violently. Stand back.

The correct color is a dark mahogany-amber, near the color of strong coffee held up to light. Pale caramel is the most common failure: it gives sweetness and no depth, and the finished kho tastes like sugar water.

Push it too far, past the smoke into acrid black, and it turns genuinely bitter and no amount of fish sauce will recover it. The window between right and ruined is about fifteen seconds. Watch the pot, not the clock.`,
      tip: `Caramelization at 170-180°C breaks sucrose into hundreds of compounds — diacetyl (buttery), furans (nutty), and the bitter caramelans that are the whole point. That controlled bitterness is what balances the fish sauce, the coconut sugar and the residual sweetness of the flesh. A kho without it is one-dimensional. This is why every Vietnamese kitchen keeps a jar of nuoc mau made in advance: getting it right requires attention, and nobody wants to gamble on it with a hot pan of fish waiting.`,
    },
    {
      title: 'Sear in the caramel, then add the coconut water',
      description: `Add the oil and the remaining shallots to the caramel and stir 30 seconds until fragrant. Lay the fish steaks in a single layer — they should sizzle audibly and immediately. Do not stir. Let them sit 2 minutes per side, turning once carefully with two spatulas, until each face is lacquered a glossy brown.

Pour in the coconut water and the fish sauce. It should come roughly two-thirds up the fish, not cover it — kho is a reduction, not a poach. Add the whole chilies. Bring to a bare simmer.

If the liquid covers the fish, you will have to reduce far longer, and by the time the sauce is thick the fish is overcooked. Too little liquid and the sauce reduces to caramel before the seasoning has reached the bone. Two-thirds is the number.`,
      tip: `A clay pot is not nostalgia. Clay has low thermal conductivity and high thermal mass: it heats slowly, distributes unevenly-but-gently, and once hot it holds temperature through the whole braise without the sharp swings of thin metal. In a kho, where the difference between a glossy lacquer and a burnt bottom is a few degrees over 40 minutes, that stability is the entire game. If you use metal, use the heaviest pot you own and drop the heat one notch below what you think you need.`,
    },
    {
      title: 'Braise low — 35-40 minutes, spoon the sauce over every 10',
      description: `Cover partially and hold at the barest simmer — a bubble breaking the surface every second or two, no more. Braise 35-40 minutes. Every 10 minutes, tilt the pot and spoon the reducing sauce back over the exposed tops of the steaks. Do not stir; do not flip more than once.

You are watching for the sauce to reduce from thin brown liquid to a syrup that coats the back of a spoon and clings to the fish in a visible glaze. The steaks should sit in perhaps 3 tablespoons of sauce at the end, not swimming. The flesh should have pulled slightly back from the bone.

The last 5 minutes are the dangerous ones — the sauce goes from thick to burnt very quickly once the water is gone. Stay at the pot. When the bubbles turn slow, large and lazy, and the sauce is glossy rather than fluid, you are done.`,
      tip: `Three things are happening simultaneously in these 40 minutes, and low heat is what lets them finish together. Collagen in the skin and around the bones dissolves into gelatin, which is what gives the reduced sauce its lip-sticking body — this needs sustained heat above 65°C but is destroyed by hard boiling, which shreds the fish. Maillard browning continues on the fish surface where sauce meets flesh. And osmotic exchange drives the seasoning inward toward the bone. Rush it with high heat and you get all three half-done.`,
    },
    {
      title: 'Finish with scallion — and let it sit 10 minutes before eating',
      description: `Scatter the scallion lengths over the top, put the lid back on, and take the pot off the heat entirely. Let it rest 10 minutes. The residual heat wilts the scallions and, more importantly, lets the sauce settle and the fish reabsorb some of what it gave up.

Serve directly from the clay pot, with hot rice, blanched greens and a bowl of clear soup. The correct portion of sauce is one spoonful per bowl of rice — it is a seasoning, not a gravy.

Eat it with rice, take a piece of fish, spoon a little sauce over the rice, and follow it with a mouthful of plain blanched greens. That three-beat rhythm — sauce-rich rice, fish, plain green — is how the Delta eats every kho, and it is why the dish can be as concentrated as it is.`,
      tip: `Kho tastes better on the second day, and Delta households count on it — the pot goes back on the heat at the next meal, reduces a little further, and gets darker and deeper each time. This is why the traditional pot is small and the traditional portion of fish is modest: kho is not built to be eaten in one sitting. It is built to season a week of rice. The last spoonful of sauce, scraped from a nearly empty pot on the second day, is the best thing in it.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
