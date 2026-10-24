'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'canh-chua-bong-so-dua',
  title: `Canh Chua Bông So Đũa (Sour Soup with White Sesbania Blossoms)`,
  subtitle: `The Delta's sour soup — tamarind-sharp, pineapple-sweet, loaded with fish — made with bông so đũa, the white blossoms of the Sesbania grandiflora tree that wilt into the broth in seconds, giving it a silky, faintly mucilaginous, faintly sweet texture no other vegetable provides. The other Sesbania, the white one, in the other soup.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '40 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/canh-chua-bong-so-dua.jpg',
  intro: `This collection has met the yellow bông điên điển four times across the Đồng Tháp file. But the province grows a second Sesbania, and it flowers a different colour, from a different tree, into a different dish. Bông so đũa is the white blossom of Sesbania grandiflora — a fast-growing tree that lines every canal bank in the Mekong Delta, producing enormous white blossoms the size of a child's hand, year-round.

Where the yellow điên điển is a seasonal luxury — three weeks of flood-recession flowers — the white so đũa is everyday abundance. The tree flowers continuously, the blossoms are free, and the Delta puts them into whatever is cooking. The most common destination is canh chua: the sour soup that partners every kho on every southern table.

Canh chua is built from a quick, vivid, layered assembly of tamarind (the sour), pineapple (the sweet-sour), tomato (the body), fish sauce (the salt), and sugar (the round), brought together in water and heated just long enough for the flavours to marry. Into this go the protein — most commonly cá lóc — the vegetables — okra, bean sprouts, bạc hà (the taro stem whose spongy cross-section absorbs the sour broth like a sponge) — and the herbs, rau om above all, whose cumin-lemon volatile goes in off the heat because it boils away in ten seconds.

The bông so đũa enters in the final minute and contributes something no other ingredient can: a large, soft, slightly mucilaginous petal that wilts to a silky texture, carrying the broth's sour-sweet into its own mild, faintly sweet flesh. It is the textural equivalent of a dumpling in the soup — a soft mass that absorbs the surrounding liquid — except it is a flower that grew on the tree outside the kitchen window and was picked five minutes ago.`,
  ingredientSections: [
    {
      title: 'The sour broth',
      items: [
        { amount: 40, unit: 'g', name: 'tamarind paste (me), seeded', note: `Dissolved in 200 ml hot water, strained. Tamarind's tartaric acid is sharper and more persistent than lime's citric.` },
        { amount: 200, unit: 'g', name: 'fresh pineapple, thin wedges' },
        { amount: 2, name: 'tomatoes, cut into wedges' },
        { amount: 1.2, unit: 'L', name: 'water' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 2, name: 'cloves garlic, smashed' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The protein',
      items: [
        { amount: 400, unit: 'g', name: 'cá lóc (snakehead) fillet, in 3 cm chunks — or shrimp, shell-on' },
      ],
    },
    {
      title: 'The vegetables and blossoms',
      items: [
        { amount: 200, unit: 'g', name: 'bông so đũa (Sesbania grandiflora blossoms), white, calyx and pistil removed', note: `Keep only the large white petals. They wilt in seconds in hot broth. Rarely available abroad — increase bạc hà and okra if unavailable, and name the soup honestly.` },
        { amount: 150, unit: 'g', name: 'bạc hà (taro stem), cut into 5 cm lengths on the bias', note: `The spongy, air-channelled stem that absorbs the sour broth and releases it in a burst with every bite. Irreplaceable.` },
        { amount: 100, unit: 'g', name: 'okra (đậu bắp), halved lengthwise' },
        { amount: 100, unit: 'g', name: 'bean sprouts' },
        { amount: 2, name: 'red chilies, sliced lengthwise' },
      ],
    },
    {
      title: 'The herbs — off the heat, always',
      items: [
        { amount: 50, unit: 'g', name: 'ngò om (rice paddy herb), roughly torn', note: `Its cumin-lemon volatile decomposes above 70°C within seconds. Off the heat, lid on 30 seconds — the perfume saturates the headspace and hits the nose when the lid lifts at the table.` },
        { amount: 30, unit: 'g', name: 'ngò gai (sawtooth coriander), roughly torn' },
        { amount: 2, name: 'scallions, sliced' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the sour base — tamarind, pineapple, tomato',
      description: `Dissolve tamarind in 200 ml hot water, mash and strain. Heat oil, fry garlic 20 seconds, add tomato wedges and fry 1 minute. Pour in the water and strained tamarind. Add pineapple. Bring to a simmer.

Season with fish sauce, sugar and salt. The balance is a triangle: sour first, sweet second, salty third — a bright, coral-coloured broth that makes the mouth water. If the sour is flat, more tamarind. If the sweet overwhelms, more fish sauce.`,
      tip: `Tamarind's tartaric acid gives canh chua a sour register lime cannot — deeper, fruitier, more persistent, with a tannic undertone that adds structure. Lime is a treble sour; tamarind is a bass sour. Canh chua uses the bass because the broth must hold its sourness through cooking, serving and reheating, and citric acid would fade where tartaric holds steady.`,
    },
    {
      title: 'Poach the fish and the hard vegetables — 6 minutes',
      description: `Add the bạc hà and okra to the simmering broth. 3 minutes — the bạc hà softens and its spongy pith begins to absorb the tart broth.

Lower the fish chunks in. Poach 3-4 minutes until opaque and gently flaking. If using shrimp: 2-3 minutes until pink.

Do not boil hard — a hard boil shreds the fish, clouds the broth, and loses the clear-coral character that defines a well-made canh chua.`,
      tip: `The bạc hà's honeycomb of air channels fills with tamarind-pineapple broth during the simmer, and when you bite a piece the channels compress and release the sour liquid directly onto the tongue — a burst of concentrated broth from within the vegetable. No other ingredient in the Vietnamese vegetable canon has this sponge architecture, which is why bạc hà is irreplaceable and the soup loses a dimension without it.`,
    },
    {
      title: 'Blossoms and sprouts in — 60 seconds, then off the heat',
      description: `Add the cleaned bông so đũa petals and bean sprouts. Press the petals below the surface. Sixty seconds — the petals wilt from crisp-white to soft-translucent, the sprouts just lose their raw crunch.

Take the pot off the heat entirely. Throw in the torn ngò om, ngò gai, scallions and chili. Lid on 30 seconds.

Lift the lid at the table. The ngò om's cumin-lemon scent arrives first — the signature of every canh chua in the Delta, the one aroma that tells a Vietnamese nose the distance between here and home.`,
      tip: `The bông so đũa's mucilaginous quality — a faint silky slipperiness — comes from its cell-wall polysaccharides that hydrate and swell in hot liquid. In the broth, this micro-thickening is too subtle to make the liquid visibly viscous, but it is detectable on the tongue as a rounding, a smoothness, a body that hard vegetables alone lack. The blossom does not thicken the soup. It softens it — the way a few drops of cream soften a vinaigrette. Texture at the margin, not the centre.`,
    },
    {
      title: 'Ladle, and serve beside the kho — the pairing is the format',
      description: `Ladle into bowls. The bowl should show: coral broth, white fish, green bạc hà, pale wilted petals, red chili, dark-green herb confetti. Every colour is an ingredient added in the final three minutes and has not yet had time to fade.

Serve beside the kho — any kho in this collection. Canh chua is never the star of a southern meal; it is the partner, the acid foil, the palate-resetter that exists so the kho can be dark and salty without exhausting the tongue. A meal with kho and no canh is bass with no treble.

The two Sesbanias now sit on the same Đồng Tháp table: the yellow điên điển in the bánh xèo, the gỏi and the lẩu mắm — seasonal, vivid, rare. The white so đũa in the canh chua — everyday, abundant, free. One is the festival flower; the other is the Tuesday flower. Đồng Tháp eats both, names both, and does not rank them, because a province that has two Sesbania trees and two soups knows that abundance and rarity are both gifts, and both are worth a recipe.`,
      tip: `Canh chua is the structural partner to kho in every southern Vietnamese meal — the acid to the salt, the liquid to the dry, the treble to the bass — and the pairing is as fundamental to the southern table as the rice it sits beside. A northern meal pairs a braised dish with a clear canh (cabbage, tofu, chayote); a southern meal pairs a braised dish with a sour canh. The sourness is not a flavour preference — it is a digestive and palate architecture: the acid in the tamarind cuts the fat in the kho, resets the tongue's salt receptors, and prepares the mouth for the next bite of the dark, rich, caramelised thing on the other plate. The two dishes eat each other's shadows, and neither is complete alone.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
