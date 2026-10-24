'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ragu-viet-nam',
  title: `Ragu Việt Nam (Vietnamese Ragout — Coconut Curry Stew with Baguette)`,
  subtitle: `Chicken or beef — browned, then simmered in coconut milk with curry powder, potatoes, carrots and lemongrass until the sauce turns golden-orange, thick with starch and coconut fat, and every piece of meat falls from its bone into a sauce that is simultaneously French (ragoût), Indian (curry), Thai (coconut) and Vietnamese (fish sauce, lemongrass, baguette). The four-culture stew that Saigon assembled from everyone who passed through, and that belongs to none of them and to all of them.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 6,
  heroImage: '/images/recipes/ragu-viet-nam.jpg',
  intro: `Ragu — from the French ragoût, itself from ragoûter ("to revive the taste") — entered Vietnamese as the name for a specific type of stew that exists nowhere else in the world, because it was assembled in Saigon from the ingredients and the techniques of every culture that passed through the city in the 19th and 20th centuries.

The FRENCH contributed the format: a browned-meat, slow-simmered, sauce-thickened stew, served with bread. This is the ragoût — the same base as the bò sốt vang, but here without the wine.

The INDIAN contributed the spice: curry powder — the generic, pre-mixed, yellow-turmeric-heavy spice blend that entered Southeast Asia through Indian traders and that the Vietnamese adopted not as a specific regional Indian masala but as a generic "warm-spice-yellow-colour" ingredient. The Vietnamese curry powder (bột cà ri) is lighter and sweeter than most Indian blends — less cumin, more turmeric, and often containing star anise and cinnamon that no Indian blend would include.

The THAI and MALAY contributed the liquid: coconut milk — the rich, white, fat-laden extract that replaced the French stew's broth-and-wine base with a tropical, creamy, gently sweet medium that carries the curry's spice and deposits the coconut's fat on the tongue in a soft, rounded, enveloping coat.

The VIETNAMESE contributed the seasoning and the aromatics: fish sauce (the universal umami), lemongrass (the citral backbone that no French, Indian or Thai version of this stew contains in this proportion), and the sweet potato or taro (which some versions include alongside or instead of the regular potato, adding a starchy sweetness the regular potato does not provide).

And the BAGUETTE — the French bread, baked in Saigon, torn by hand — is the ragu's partner, the same way it is the bò sốt vang's partner, because the Vietnamese kitchen uses bread for one thing above all others: dipping into sauces that are too good to leave in the bowl.

The ragu occupies a specific slot in the Vietnamese food economy: it is the RAINY-DAY stew, the COLD-NIGHT dinner (Saigon's "cold" is 20°C, but the appetite for warm stew is real), and the SUNDAY-MORNING breakfast (ragu served in a bowl with a baguette at the side, eaten at a sidewalk stall before the city wakes). It is not a celebration dish (the bò sốt vang holds that position) and not a daily dish (too rich, too slow). It is the in-between: the stew the family makes when the week has been long and the kitchen has potatoes and curry powder and a can of coconut milk and a baguette from the corner bakery.`,
  ingredientSections: [
    {
      title: 'The protein',
      items: [
        {
          amount: 800,
          unit: 'g',
          name: 'chicken leg-and-thigh pieces (bone-in, skin-on), or beef chuck cut 4 cm cubes',
          note: `Chicken is the more common version (faster, cheaper). Beef is the luxury version (richer, slower — add 30 minutes to the braise). Bone-in is essential: the bones contribute collagen → gelatin for sauce body, the same mechanism the bò sốt vang and the canh sườn documented.`,
        },
      ],
    },
    {
      title: 'The vegetables',
      items: [
        { amount: 3, name: 'potatoes (medium), peeled, quartered' },
        { amount: 2, name: 'carrots, peeled, roll-cut 3 cm' },
        { amount: 1, name: 'onion, quartered' },
        { amount: 1, name: 'sweet potato, peeled, cubed 3 cm (optional — the southern addition for extra sweetness)' },
      ],
    },
    {
      title: 'The four-culture sauce',
      items: [
        { amount: 400, unit: 'ml', name: 'coconut milk (full-fat, 1 can)', note: `The Thai-Malay contribution — the rich, white, 17-20% fat liquid that replaces the French broth as the braising medium. Shake the can well before opening (the cream separates during storage).` },
        { amount: 200, unit: 'ml', name: 'water or chicken stock' },
        {
          amount: 2,
          unit: 'tbsp',
          name: 'Vietnamese curry powder (bột cà ri)',
          note: `The Indian contribution, Vietnamese-adapted: turmeric-heavy (for colour), with coriander, cumin, fenugreek, star anise, cinnamon, chili. Lighter and sweeter than Indian garam masala. Available at every Vietnamese grocer. If substituting Indian curry powder: reduce by 30% (it is more pungent) and add 1 tsp extra turmeric.`,
        },
        { amount: 2, name: 'stalks lemongrass, bruised and knotted', note: `THE Vietnamese marker — its citral separates the ragu from every Indian curry and every Thai coconut stew.` },
        { amount: 20, unit: 'g', name: 'ginger, bruised' },
        { amount: 4, name: 'cloves garlic, smashed' },
        { amount: 2, name: 'shallots, sliced' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce', note: `The Vietnamese contribution — the glutamate backbone.` },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 2, unit: 'tbsp', name: 'annatto oil (dầu điều) or neutral oil', note: `Annatto oil — oil infused with annatto seeds (hạt điều) — adds a vivid orange-red tint to the stew. Not essential but traditional: the ragu should be GOLDEN-ORANGE, not pale-yellow, and the annatto provides the "orange" half.` },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 2, name: 'baguettes, warmed, torn' },
        { amount: 30, unit: 'g', name: 'coriander, chopped' },
        { amount: 2, name: 'scallions, sliced' },
        { amount: 1, name: 'red chili, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Bloom the curry, brown the meat — the colour and the fond in one step',
      description: `Heat the annatto oil (or neutral oil) in a heavy pot over medium-high heat. Add the garlic, shallots and ginger — sauté 1 minute until fragrant. Add the curry powder — stir into the oil for 30 seconds, the spices blooming: the turmeric turns the oil vivid yellow-orange, the coriander and cumin release their warm volatiles, and the star anise's anethole adds the Vietnamese note.

Add the chicken pieces (or beef cubes). Brown 3-4 minutes, turning occasionally — the curry-coated oil sears the meat's surface, producing a CURRY-MAILLARD crust: the amino acids from the meat's surface and the sugars from the curry's spices react together on the hot metal, building a fond that carries both the meat's browned flavour and the curry's toasted-spice complexity. This double-fond is richer than either a plain-sear fond (the bò sốt vang's) or a plain curry-bloom — it is both, in one layer.

Add the lemongrass knots. Stir through — the lemongrass's bruised stalks release citral into the curry-scented oil.`,
      tip: `The curry powder bloom — 30 seconds in hot oil before the meat is added — is the step that activates the fat-soluble spice compounds: turmeric's curcumin dissolves in the oil (it is nearly insoluble in water), coriander's linalool volatilises into the kitchen's air (the fragrance IS the bloom), and cumin's cuminaldehyde transitions from a raw, harsh, slightly acrid note to a warm, rounded, toasted note (the aldehyde undergoes a partial Strecker degradation in the hot oil, producing pyrazines — the same class of toasted-nut compounds Maillard browning produces). A curry powder added DRY to a liquid braise never blooms — its curcumin stays insoluble, its coriander stays muted, and the stew tastes of raw spice rather than of cooked spice. The 30-second bloom is the difference between a ragu that tastes of curry and a ragu that tastes of curry POWDER.`,
    },
    {
      title: 'Pour the coconut milk, add the vegetables, simmer 40-50 minutes — the four cultures merge',
      description: `Pour the coconut milk and the water or stock over the browned meat. Stir to deglaze the fond from the pot's bottom — the curry-Maillard fond dissolves into the coconut milk, turning it from white to golden-orange.

Add the onion and carrots. Bring to a simmer. Season with fish sauce, sugar and salt.

Cover. Simmer gently 25-30 minutes (chicken) or 50-60 minutes (beef). The coconut milk's fat insulates the meat during the braise — the fat layer on the surface of the simmering liquid reduces evaporation, keeping the liquid level stable and the braising temperature even.

At minute 20 (chicken) or minute 40 (beef): add the potatoes (and sweet potato if using). They need 20-25 minutes — the same late-addition timing the bò sốt vang's potatoes followed.

UNCOVER for the last 10 minutes — the sauce reduces slightly, concentrating the coconut fat and the curry spice into a thicker, clingier, more intensely flavoured liquid. The potatoes' dissolved starch assists the thickening — the same natural-starch-thickener mechanism the lươn um's green banana used, here contributed by the potato's amylose leaching into the braising liquid.

The stew is done when: the meat pulls from the bone (chicken) or yields to a fork (beef), the potatoes are soft throughout, the carrots are tender, and the sauce is: golden-orange (turmeric + annatto), thick (coconut fat + potato starch + bone gelatin, three natural thickeners), aromatic (lemongrass-citral + curry-curcumin + fish-sauce-umami in a single, complex wave), and RICH — richer than the bò sốt vang (which used wine as the base, not coconut milk) because the coconut milk's 17-20% fat coats every surface and carries every spice compound to the tongue in a lipid vehicle that the wine's water-based liquid could not.`,
      tip: `The ragu's three natural thickeners — coconut fat (suspended in the liquid as a cream emulsion), potato starch (leached from the dissolving potatoes as gelatinised amylose), and bone gelatin (hydrolysed from the chicken or beef bones' collagen) — produce a sauce that is thicker, clingier and more body-rich than any single thickener could achieve. The fat thickens by EMULSION (the coconut cream's fat droplets, stabilised by the coconut milk's own lecithin, increase the liquid's viscosity). The starch thickens by GELATINISATION (the potato's dissolved amylose chains absorb water and form a loose gel). The gelatin thickens by GELATION (the dissolved collagen molecules, now gelatin, form a thermoreversible gel as the sauce cools). Three mechanisms, three molecular architectures, and the sauce that results is a triple-thickened liquid that clings to the meat, soaks into the bread and does not run off the spoon. No added flour. No roux. No cornstarch. The ingredients thicken themselves.`,
    },
    {
      title: 'Serve with torn baguette — the rainy-day bowl, the Sunday-morning breakfast',
      description: `Ladle the ragu into deep bowls — each serving gets 2 pieces of bone-in chicken (or 3-4 beef cubes), potato quarters, carrot chunks, and a generous lake of the golden-orange, coconut-rich, curry-perfumed sauce. Scatter coriander, scallion and chili.

Warm the baguette. Tear by hand. Dip.

The bread enters the sauce — the torn edge absorbs the golden liquid in 2 seconds (the same capillary-absorption the bò sốt vang's bread demonstrated, here amplified by the coconut fat's surface tension, which pulls the sauce deeper into the bread's crumb pores than a water-based sauce would penetrate). The mouthful: bread (crust-crunch, crumb-soft, wheat-sweet) saturated with the ragu's sauce (coconut-rich, curry-warm, lemongrass-citral, fish-sauce-umami), and the combination — French bread + Indian curry + Thai coconut + Vietnamese fish sauce and lemongrass — is the taste of Saigon, which is the taste of a city built by everyone who arrived and stayed.

The ragu is not a Vietnamese dish. It is not a French dish. It is not an Indian dish. It is not a Thai dish. It is a SAIGON dish — a dish that could only have been assembled in a city where all four food cultures overlapped, where the French baker and the Indian spice trader and the Thai coconut vendor and the Vietnamese fish-sauce maker all operated within walking distance, and where a cook with access to all four traditions did what cooks do: combined what was available, adjusted to taste, and served the result with the bread the bakery on the corner produced that morning.

Ragu is the collection's most COSMOPOLITAN recipe — the dish with the most cultural inputs (four), the most geographic origins (Europe, South Asia, Southeast Asia, Vietnam), and the most honest relationship with its own hybridity: it does not pretend to be French or Indian or Thai. It is ragu. It is Saigon. And Saigon — the city that collects, combines and serves — is the only kitchen that could have made it.`,
      tip: `The Vietnamese curry powder (bột cà ri) is itself a cultural hybrid: the original concept (a pre-mixed spice blend for convenience) is BRITISH (the British invented "curry powder" in the 18th century for colonials returning from India who wanted "Indian food" without sourcing individual spices). The British formula was adapted by Indian traders in Southeast Asia, who adjusted it for local palates (more turmeric, less cumin, milder chili). The Vietnamese adapted the Indian-via-British formula further (adding star anise and cinnamon — the phở spices, now in the curry powder). The curry powder in the Vietnamese ragu is therefore a British → Indian → Vietnamese triple-adaptation of a concept that originated in no specific Indian kitchen but in a British commercial product designed to simplify Indian cooking for non-Indian cooks. The ragu's spice blend is, like the ragu itself, a product of every culture it passed through, belonging fully to none and tasting fully of Saigon.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
