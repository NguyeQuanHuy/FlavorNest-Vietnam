'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'ga-doi-tam-dao',
  title: `Gà Đồi Tam Đảo (Free-Range Hill Chicken of Tam Đảo, Steamed with Kaffir Lime Leaf)`,
  subtitle: `A small, lean, free-range chicken from the forested hills of Tam Đảo — steamed whole over a broth of ginger and scallion, with kaffir lime leaves tucked under the skin so their citrus oil perfumes the flesh from inside out. The skin is golden and taut, the meat dense and faintly gamey, and the dipping is muối tiêu chanh — because a bird this good asks only for a sharpener.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr 30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/ga-doi-tam-dao.jpg',
  intro: `Tam Đảo is a mountain station — a cluster of French-colonial villas and Vietnamese guesthouses on a fog-wrapped ridge at 950 metres, an hour north of Hanoi, where the temperature runs 10°C cooler than the capital and where the weekend traffic from the city is a pilgrimage of people escaping the heat to eat chicken. Not any chicken. Gà đồi — hill chicken, free-range, raised on the forested slopes below the ridge, scratching for insects and worms in the leaf litter, drinking from the mountain streams, and developing over six to eight months of unhurried outdoor life a body that is smaller, leaner, tougher, darker-fleshed and more intensely flavoured than any factory broiler in any city below.

The gà đồi is the northern counterpart to the gà Hồ of Bắc Ninh — both are heritage-style, slow-grown, flavour-dense birds that the Vietnamese palate values above every industrial chicken — but where the gà Hồ is a specific breed with a pedigree, the gà đồi is a category: any chicken raised on the hill, of any local breed, qualifies, and the quality is a function of the raising (outdoor, slow, foraging) rather than of the genetics. A gà đồi has dark, firm, faintly gamey meat because it walked every day; tight, golden skin because it was lean; and bones that make a deeper, more gelatinous stock because it lived long enough for its collagen to mature. It is the chicken the chicken was before the factory, and eating it is tasting what chicken tasted like when chicken was a luxury rather than a commodity.

The cooking is the northern whole-bird treatment: steamed — not boiled, not roasted, not fried — because steaming preserves the bird's own flavour without adding anything the cook's ego contributed. The bird is rubbed inside and out with salt, ginger and a splash of rice wine, kaffir lime leaves (lá chanh) are tucked under the breast skin so their volatile oils (citronellal, limonene, linalool) perfume the flesh during the 40-minute steam, and the whole bird goes onto a rack over simmering water that has been enriched with the bird's own neck, feet and wing tips. The steam cooks. The bird seasons itself. And the cook's only creative decision is the dipping sauce, which — for a bird this good — is muối tiêu chanh: salt, pepper, lime. The fourth appearance of the transparent condiment in this collection, reserved once again for a protein that does not need help.

Tam Đảo's gà đồi restaurants — they line the main street, and they all serve the same dish with the same confidence — present the steamed bird whole on a wooden board: golden-skinned, glistening, fragrant with lime leaf, the legs tucked, the breast proud. It is chopped at the table with a heavy cleaver into pieces that include bone (the Vietnamese way — bone-in pieces give more flavour and more collagen than boneless portions), and each piece is dipped in the saucer and eaten with rice and a clear canh made from the bird's own steaming liquid. The meal is the bird, the bird is the mountain, and the mountain is an hour from Hanoi on a Saturday morning.`,
  ingredientSections: [
    {
      title: 'The chicken',
      items: [
        {
          amount: 1,
          name: 'whole free-range chicken, 1.2-1.5 kg, gutted, cleaned',
          note: `The best free-range bird you can find — look for: dark yellow skin (from foraging carotenoids), firm flesh (from muscle use), small body relative to breed (slow growth = dense meat), and a smell of clean poultry with no ammonia. In Europe: a poulet de Bresse, a Label Rouge, or any genuinely free-range, slow-grown bird. The mass-produced supermarket bird is a different animal — literally — and will produce a different, blander, waterier dish.`,
        },
      ],
    },
    {
      title: 'The rub and the aromatics',
      items: [
        { amount: 1, unit: 'tbsp', name: 'salt' },
        { amount: 30, unit: 'g', name: 'ginger, bruised and sliced' },
        { amount: 2, unit: 'tbsp', name: 'rice wine (rượu trắng)' },
        {
          amount: 10,
          name: 'kaffir lime leaves (lá chanh), washed, spines removed',
          note: `Tucked UNDER the breast skin — slipped between the skin and the flesh so their volatile oils migrate directly into the meat during steaming. On top of the skin they perfume the steam; under the skin they perfume the bird. Under is better.`,
        },
        { amount: 4, name: 'scallions, knotted (placed inside the cavity)' },
      ],
    },
    {
      title: 'The steaming liquid',
      items: [
        { amount: 1.5, unit: 'L', name: 'water' },
        { amount: 1, name: 'chicken neck, feet and wing tips (from this bird)', note: `Simmered in the steaming water below the rack — they enrich the water into a light stock that becomes the canh.` },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
        { amount: 2, name: 'scallions, whole' },
      ],
    },
    {
      title: 'Muối tiêu chanh',
      items: [
        { amount: 2, unit: 'tbsp', name: 'fine sea salt' },
        { amount: 1, unit: 'tsp', name: 'ground black pepper, freshly cracked' },
        { amount: 3, unit: 'tbsp', name: 'calamansi or lime juice, squeezed 1 minute before serving' },
      ],
    },
    {
      title: 'The canh (from the steaming liquid)',
      items: [
        { amount: 1, name: 'the steaming liquid, strained — now a light chicken stock' },
        { amount: 100, unit: 'g', name: 'chayote or winter melon, sliced thin' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, name: 'scallions, sliced' },
        { amount: 30, unit: 'g', name: 'coriander' },
      ],
    },
  ],
  steps: [
    {
      title: 'Rub, stuff the aromatics under the skin and inside the cavity',
      description: `Pat the chicken very dry — inside and out. Rub the rice wine over every surface, then the salt, pressing into the joints and the cavity. Let it sit 15 minutes — the salt draws a thin moisture film that the steaming will set into a tight, golden skin.

Loosen the breast skin: slip your fingers between the skin and the breast meat, gently separating the membrane without tearing the skin. Tuck 6-8 kaffir lime leaves under the loosened skin — flat against the breast, in a single layer. The remaining leaves go inside the cavity with the knotted scallions and a few slices of ginger.

The leaves under the skin are doing what the lotus leaf did for the cơm sen and what the banana leaf did for the cơm lam: releasing volatile compounds through direct contact with the food's moist surface, perfuming from inside rather than from outside. A lime leaf on TOP of a steaming bird perfumes the steam, which then condenses on the skin — a dilute, indirect delivery. A lime leaf UNDER the skin is in direct contact with the flesh's moisture, and its citronellal and limonene migrate directly into the breast meat's surface over 40 minutes of steam-heat. Direct contact = concentrated perfume.`,
      tip: `The kaffir lime leaf's volatile profile — citronellal (60-70%), limonene (10-15%), linalool (5%) — is the most citrus-intense of any leaf in the Vietnamese aromatic canon, and the under-skin placement exploits this intensity by the shortest possible diffusion path: leaf surface → meat surface, with no dilution by air or steam in between. The same leaf placed on the outside of the bird would lose 80% of its citronellal to the steam's convection before the remainder condensed on the skin. The under-skin placement delivers 80% of the citronellal to the meat. Same leaf, same volatile, two placements, a five-fold difference in flavour delivery. The placement IS the recipe.`,
    },
    {
      title: 'Steam 35-40 minutes — the bird cooks itself in its own perfume',
      description: `Set the steaming liquid — water, chicken trimmings, ginger, scallion — in the bottom of a large steamer or wok. Bring to a hard boil. Set the prepared chicken breast-side up on the steaming rack above the liquid. Cover tightly.

Steam 35-40 minutes for a 1.3 kg bird. Do not open the lid during the first 30 minutes — every opening dumps steam, drops the temperature, and adds minutes. At 35 minutes: check by piercing the thigh joint with a skewer — the juice that runs must be clear, not pink. If pink: 5 more minutes. The internal temperature at the thickest point of the thigh should reach 74°C.

Lift the bird out carefully — it is fragile when hot, and the joints may separate. Rest 10 minutes before chopping — the carryover cooking brings the centre to safe temperature, and the resting redistributes the moisture that the steam drove to the surface back into the flesh.

The skin should be: golden (from the carotenoids in a free-range bird's fat — a factory bird's skin is pale), taut, glistening with condensed steam, and — when the breast skin is peeled back — carrying the kaffir lime leaves as flat, dark-green, fragrant patches pressed against golden flesh that smells of citrus before it smells of chicken.

Strain the steaming liquid — it is now a light, clean, ginger-scented chicken stock. Bring it back to a simmer, add sliced chayote or winter melon, fish sauce, and scallion. This is the canh — made from the bird's own steaming vapour, condensed and enriched, served alongside as the soup course.`,
      tip: `Steaming rather than boiling preserves roughly 15-20% more of the bird's water-soluble flavour compounds (free amino acids, nucleotides, volatile esters) compared to full immersion in boiling water, because the bird's surface is never submerged — it sits above the liquid, and the steam condenses on the skin and runs off rather than dissolving the flavour outward. A boiled chicken donates its flavour to the water; a steamed chicken keeps its flavour in the flesh. This is why steamed gà đồi tastes more intensely of chicken than poached gà đồi from the same bird: the flavour stayed where the eater wants it — in the meat, not in the pot.`,
    },
    {
      title: 'Chop bone-in, dip in muối tiêu chanh — the mountain bird on a board',
      description: `Set the rested bird on a wooden chopping board. With a heavy cleaver, chop through the bones into pieces roughly 4 x 5 cm — the Vietnamese standard: bone-in, irregular, each piece carrying skin, meat and bone together.

Arrange the chopped pieces on a plate in the bird's original shape — legs at the sides, breast in the centre, wings tucked — the traditional northern presentation that reassembles the bird from its parts as a gesture of respect and of abundance.

Pound the salt and pepper for the muối tiêu chanh. Squeeze the lime juice in 1 minute before serving. Set a saucer at each place.

Eat: pick up a bone-in piece with chopsticks, dip the cut end in the muối tiêu chanh, and bite. The skin is taut and golden. The flesh is firm, dense, faintly gamey — the texture of a bird that walked, and the flavour of a bird that ate. The lime leaf's citrus arrives through the breast meat as a perfume rather than a taste — a ghost of citrus that is felt in the nose more than on the tongue, and that makes the chicken taste more like itself rather than like lime, because that is what a well-placed aromatic does: it amplifies the host ingredient's own register without announcing its own.

The muối tiêu chanh is doing what it always does: sharpening. Salt amplifies. Lime brightens. Pepper warms. The chicken does the rest, because the chicken — raised on a hill, for eight months, in the fog — is the reason people drive an hour from Hanoi on a Saturday.`,
      tip: `Muối tiêu chanh appears for the fifth time in this collection — gà Hồ (Bắc Ninh), ghẹ Hàm Ninh (Phú Quốc), tôm chiên bột, and now gà đồi Tam Đảo — and the pattern is now definitive: it is the condiment reserved for the collection's highest-quality, most minimally-cooked proteins. Two heritage chickens, a reef crab, a battered shrimp, and a hill chicken. Five proteins, five minimal preparations (boiled, steamed, steamed, fried, steamed), and one condiment that says the same thing every time: this ingredient is good enough. The muối tiêu chanh is not a sauce. It is a certificate of quality, and the cook who sets it beside a dish is making a statement about the ingredient's ability to carry a meal with nothing but salt, acid and heat.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
