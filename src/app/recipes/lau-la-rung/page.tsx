'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'lau-la-rung',
  title: `Lẩu Lá Rừng (Forest Leaf Hotpot — Tây Nguyên's Wild Herb Broth)`,
  subtitle: `A bubbling pot of broth — but the broth is not made from bones or meat. It is made from LEAVES: 10-15 species of wild highland leaves simmered together until the water has extracted their tannins, their bitters, their aromatics and their medicinal compounds into a dark, amber-green, intensely herbal, faintly bitter, deeply complex liquid that the table dips meat, tofu and vegetables into. The Tây Nguyên hotpot where the forest IS the broth.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '1 hr',
  rating: 4.8,
  baseServings: 6,
  heroImage: '/images/recipes/lau-la-rung.jpg',
  intro: `If the gỏi lá rừng (documented in this collection as Đắk Lắk #7) is the forest's diversity eaten RAW in a roll, the lẩu lá rừng is the forest's diversity COOKED in a broth — the same 10-15 wild leaf species, but instead of wrapping them around pork and biting, the cook SIMMERS them in water for 30-40 minutes, extracting their water-soluble compounds (tannins, alkaloids, organic acids, polyphenols, volatile terpenes) into the liquid, discarding the spent leaves, and using the resulting herbal infusion as a HOTPOT BROTH into which the diners dip sliced meat, tofu, mushrooms and vegetables.

The lẩu lá rừng is, in structural terms, a GIANT TEA: the leaves are steeped in hot water, the water-soluble compounds dissolve, the leaves are removed, and the liquid — dark, amber-green, aromatic, slightly bitter — is consumed. The difference from tea: the liquid is not drunk from a cup but used as a COOKING MEDIUM, and the foods dipped into it absorb the leaf-broth's compounds and carry them to the tongue along with the food's own flavour. The hotpot format turns the forest-tea into a forest-sauce — every piece of beef, every mushroom, every piece of tofu that enters the bubbling broth exits carrying a thin coat of herbal infusion on its surface.

The leaf mix is similar to the gỏi lá rừng's but not identical — the lẩu uses leaves that are MORE SUITED TO SIMMERING (leaves whose compounds are heat-stable and water-extractable, rather than leaves whose volatiles are destroyed by cooking). The key leaves:

LÁ GIANG (Aganonerion polymorphum): the SOUR leaf — produces a clean, citric-like sourness when simmered (the leaf's malic and citric acid dissolve into the broth, lowering the pH to roughly 4.5-5.0 and providing the ACID that gives the broth its brightness and its fat-cutting capacity). Lá giang is the Tây Nguyên's sour-source the way tamarind is the south's and tomato is the north's — a leaf-acid, harvested from a forest vine, requiring no fruit, no fermentation, and no market purchase.

LÁ BÉP (Gnetum gnemon leaf): mild, faintly sweet, slightly mucilaginous (the leaf releases a gentle viscosity into the broth, giving it a slightly thicker, more lip-coating body than plain water — the same mucilaginous thickening the rau đay and the mồng tơi contributed to the canh cua).

LÁ NHÍP (Gnetum gnemon young shoots): tender, sweet, the VEGETABLE in the leaf-broth — the young shoots dissolve partially during simmering, contributing plant-protein and a green-sweet, spinach-like depth to the broth.

LÁ É: the clove-eugenol herb, added in the last 5 minutes (added early, the eugenol evaporates; added late, it infuses).

LÁ LỐT: the piperine-peppery leaf, added throughout (piperine is heat-stable and dissolves slowly over the full simmer).

PLUS: lá đinh lăng (bitter-ginseng), lá chanh (citral), young mango leaf (tannic-sour), and several other species the gatherer knows by local Ê Đê names that have no Kinh translation and no Latin binomial in the botanical record — the UNNAMED leaves that the forest provides and the Ê Đê grandmother identifies by sight, smell and the 30-year memory of which leaves her grandmother used.

The broth's colour is DARK: amber-to-brown-green, the colour of strong tea or of a forest stream passing over leaf litter. The colour comes from the dissolved TANNINS (polyphenols that oxidise in the hot water to brown-coloured compounds — the same browning chemistry that darkens black tea, red wine and the lá gai's pounded pigments). The bitterness is MILD — less bitter than the canh cà đắng (which uses Solanum's aggressive glycoalkaloids), because the forest-leaf mix balances the bitter leaves (lá đinh lăng, young mango) with the sour leaves (lá giang) and the sweet leaves (lá bép, lá nhíp), and the BALANCE is the gatherer's art: too many bitter leaves → undrinkable; too few → bland; the right ratio → the complex, multi-layered, bitter-sour-sweet-aromatic broth the lẩu lá rừng demands.`,
  ingredientSections: [
    {
      title: 'The forest leaves (for the broth)',
      items: [
        { amount: 100, unit: 'g', name: 'lá giang (Aganonerion polymorphum) — the sour vine-leaf', note: `The PRIMARY acid source. Available at Vietnamese highland-goods stalls. If unavailable: 50 g tamarind pulp dissolved in 200 ml water approximates the sourness (but not the leaf-specific malic-acid profile).` },
        { amount: 80, unit: 'g', name: 'lá bép (Gnetum gnemon mature leaves) — the mild, mucilaginous body-builder' },
        { amount: 60, unit: 'g', name: 'lá nhíp (Gnetum gnemon young shoots) — the sweet, dissolving green' },
        { amount: 30, unit: 'g', name: 'lá lốt (Piper lolot) — the peppery depth' },
        { amount: 20, unit: 'g', name: 'lá đinh lăng — the bitter-ginseng accent' },
        { amount: 10, name: 'lá chanh (kaffir lime leaf) — the citrus high-note' },
        { amount: 10, name: 'young mango leaves — the tannic-sour accent' },
        { amount: 15, name: 'lá é — added in last 5 min (the eugenol finish)' },
      ],
    },
    {
      title: 'The broth liquid',
      items: [
        { amount: 3, unit: 'L', name: 'water' },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tbsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'sugar' },
        { amount: 4, name: 'cloves garlic, smashed' },
        { amount: 2, name: 'stalks lemongrass, bruised' },
        { amount: 15, unit: 'g', name: 'ginger, bruised' },
      ],
    },
    {
      title: 'The dipping ingredients (arranged on platters)',
      items: [
        { amount: 400, unit: 'g', name: 'beef sirloin or flank, sliced paper-thin (2 mm)', note: `The classic lẩu protein — thin enough to cook in the bubbling broth in 5-8 seconds, the same quick-dip every Vietnamese hotpot uses.` },
        { amount: 200, unit: 'g', name: 'pork belly, sliced thin' },
        { amount: 200, unit: 'g', name: 'chicken thigh, sliced thin' },
        { amount: 200, unit: 'g', name: 'firm tofu, cubed 3 cm' },
        { amount: 200, unit: 'g', name: 'mixed mushrooms (oyster, enoki, shiitake)' },
        { amount: 200, unit: 'g', name: 'morning glory (rau muống), in 15 cm lengths' },
        { amount: 100, unit: 'g', name: 'corn on the cob, cut 3 cm rounds' },
        { amount: 200, unit: 'g', name: 'bún (rice vermicelli) or mì (egg noodles), blanched' },
      ],
    },
    {
      title: 'The dipping sauce',
      items: [
        { amount: 3, unit: 'tbsp', name: 'muối ớt lá é (the highland green-chili-basil salt from the gà nướng bản Đôn)' },
        { amount: 3, unit: 'tbsp', name: 'mắm nêm pha (fermented anchovy paste with lime, chili, sugar)' },
        { amount: 2, unit: 'tbsp', name: 'soy sauce + minced garlic + chili (alternative dip)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Simmer the leaves 30-40 minutes — the forest becomes broth',
      description: `Bring 3 L water to a boil in a large pot. Add the garlic, lemongrass and ginger — 5 minutes at a boil (the aromatics infuse the base-water with a familiar, recognisable background before the wild leaves arrive).

ADD THE LEAVES IN STAGES (not all at once — the different leaves need different extraction times):

FIRST (minute 0): lá giang, lá bép, lá nhíp, lá đinh lăng, young mango leaves, lá lốt. These are the STRUCTURAL leaves — the sour, the bitter, the mucilaginous, the peppery — and they need the full 30-40 minutes of simmering to release their water-soluble compounds. The pot fills with leaves — the broth disappears beneath a raft of green.

Simmer 30-35 minutes — the leaves wilt, darken, and begin to dissolve (the lá nhíp's tender shoots disintegrate into the broth, contributing their plant-protein; the lá bép's mature leaves soften but hold their shape, releasing mucilage; the lá giang's acid dissolves continuously, lowering the pH). The broth darkens from clear to amber-green-brown as the tannins dissolve and oxidise.

AT MINUTE 30: STRAIN — pour the broth through a large sieve, pressing the spent leaves hard with a ladle (the pressing extracts the last 15-20% of the dissolved compounds that the leaves' cell walls retained). Discard the spent leaves. Return the strained broth to the pot.

LAST 5 MINUTES: add lá é and lá chanh to the strained broth — these volatile-rich leaves need only brief contact (the eugenol and the citral are volatile and evaporate within 10 minutes of boiling — the late addition preserves them in the broth for the table's first 15-20 minutes of dipping, after which they will have faded).

Season: fish sauce, salt, sugar. Taste — the broth should be: SOUR (the lá giang's malic/citric acid, the dominant note), BITTER (the lá đinh lăng and the young mango, the secondary note), AROMATIC (the lá é's eugenol, the lá chanh's citral, the lemongrass's citral — three aromatic layers), slightly VISCOUS (the lá bép's mucilage, coating the lips), and DARK (amber-green-brown, the colour of forest-floor leaf-tea).

The broth IS the forest — 10-15 species, 30-40 minutes of extraction, every water-soluble compound the leaves carried now dissolved in 2.5 L of dark, complex, herbal, medicinal, slightly bitter, distinctly sour, lip-coating liquid.`,
      tip: `The lá giang's SOURNESS (malic + citric acid, pH 4.5-5.0 in the finished broth) serves the same fat-cutting function the đồ chua's vinegar served in the bánh mì, the lime served beside every grilled meat, and the beer's carbonic acid served at the Cửa Lò beach dinner: the acid emulsifies the lipid from the dipped meat's surface, preventing the fat-coat from accumulating on the tongue over the 45-60 minutes a hotpot session lasts. Without the lá giang's acid, the leaf-broth coats the meat but the meat's fat coats the tongue, and by minute 20 the tongue is so fat-coated that every subsequent piece of meat tastes muted. With the acid: the fat is emulsified, the tongue is cleared, and the 50th piece of meat tastes as vivid as the 1st. The lá giang is the hotpot's ENDURANCE SYSTEM — the compound that keeps the eating fresh across an hour of continuous dipping.`,
    },
    {
      title: 'Set the pot bubbling at the table — dip, cook, eat, the communal forest meal',
      description: `Transfer the strained, seasoned, leaf-broth to a hotpot burner at the table — portable gas stove, induction plate, or charcoal brazier. Bring to a gentle, continuous bubble (not a hard boil — a hard boil evaporates the volatile eugenol and citral faster, and the broth's aromatic complexity fades by minute 15 instead of minute 25).

ARRANGE the dipping platters around the pot: sliced beef (red, marbled, glistening), sliced pork belly (pink, fat-white-layered), sliced chicken (pale, lean), tofu cubes (white, firm), mushrooms (brown, earthy), morning glory (green, long-stemmed), corn (yellow, sweet), and bún or mì (white, blanched, in bowls). The platters are the table's PALETTE — the forest-broth is the paint, and each diner paints by dipping.

THE DIPPING:

BEEF (5-8 seconds): pick a thin slice with chopsticks, submerge in the bubbling broth. The broth's 95°C heat denatures the beef's myosin in 5 seconds (the same quick-cook the bò nhúng dấm/vinegar-beef uses). Lift — the beef is: just-cooked (grey-pink, not grey-brown), coated in a thin film of the dark, herbal, tannin-and-acid-rich broth, and carrying the forest's flavour on its surface. Dip in the muối ớt lá é. Eat — the beef's iron-rich, exercise-dense flavour (if highland bò vàng) meets the broth's sour-bitter-aromatic coat meets the lá é salt's eugenol-sharp crunch.

MUSHROOMS (2-3 minutes): the mushrooms absorb the broth — the same porous-absorption the fried chả cá and the tofu puffs demonstrated, here from a fungal-cell-wall sponge rather than a protein sponge. Each mushroom bite releases a warm mouthful of the forest-broth, the mushroom's own umami (glutamate from the shiitake, at 1,060 mg/100g dry — higher than Parmesan) amplifying the broth's herbal umami.

TOFU (3-4 minutes): the tofu's soy-protein matrix absorbs the broth's tannins, and the tannins BIND to the soy protein (the same tannin-protein binding the green banana's astringency produces), producing a tofu that is: firmer (the tannin cross-links tighten the protein network) and more flavourful (the bound tannins release slowly on the tongue during chewing, providing a sustained, gentle, bitter-astringent background that the plain tofu never carries).

MORNING GLORY (30-60 seconds): the rau muống's hollow stems fill with broth by capillary action — the same air-channel-absorption the lotus stem demonstrated. Each stem, bitten, releases a tiny jet of the forest-broth from its hollow interior.

At the session's END (45-60 minutes): the broth has been ENRICHED by every ingredient that passed through it — the beef's rendered fat, the pork's collagen-gelatin, the mushroom's glutamate, the tofu's released protein, the morning glory's chlorophyll — and the final broth is: darker, richer, more complex, and more body-full than the starting broth. Ladle the enriched broth over the blanched bún or mì — the noodles absorb the now-concentrated-by-evaporation, now-enriched-by-every-ingredient forest-leaf-and-meat broth, and the last course of the lẩu is the RICHEST: the summary of everything the pot received.

Lẩu lá rừng is the Đắk Lắk collection's most COMMUNAL dish — the dish that requires a GROUP (one person cannot eat a hotpot alone without absurdity), a TABLE (the pot must sit centrally), a CONVERSATION (the 45-60 minutes of dipping demand something to do between dips), and a FOREST (the leaves must be gathered, the gathering is a morning's work, and the gathering is often done communally — the village women walking the forest edge together, each one knowing different leaves, the combined knowledge exceeding any individual's). The lẩu lá rừng is the forest eaten communally, and the communality is the dish's deepest ingredient.`,
      tip: `The lẩu's broth EVOLUTION over 45-60 minutes of dipping is a documented flavour-development phenomenon: the starting broth (pure leaf-infusion) has roughly 200-400 mg/L free glutamate (from the lá nhíp's dissolved plant-protein and the fish sauce). After 45 minutes of meat-and-mushroom dipping, the broth's free glutamate rises to roughly 800-1,200 mg/L (the meat's inosinate and the mushroom's guanylate have synergised with the base glutamate, amplifying the umami by 8-15x through nucleotide-glutamate synergy). The final noodle course therefore receives a broth that is 3-4x more umami than the first dip received — and the escalation is the hotpot format's built-in reward: the longer you eat, the better the broth becomes, and the best course (the noodles) is the last. The hotpot is a SELF-IMPROVING MEAL — it gets better as it goes, and the going is the reason to stay.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
