'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'canh-chua-ca-bong-lau',
  title: `Canh Chua Cá Bông Lau (Sour Tamarind Soup with Mekong Catfish)`,
  subtitle: `The sweetest fish in the Hau river, poached for six minutes in a tamarind broth loaded with pineapple, bac ha, tomato and okra, and finished with a fistful of rice paddy herb thrown in off the heat. The soup that defines the southern table.`,
  category: 'MAIN COURSE',
  difficulty: 'Easy',
  totalTime: '40 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/canh-chua-ca-bong-lau.jpg',
  intro: `Every region of Vietnam has a sour soup and every region insists theirs is the real one. The north makes canh chua thin and restrained, soured with tamarind or green rice paddy crab, and stops there. The centre sours with khe or with fermented rice water and pushes chili into it. The south — and Vinh Long in particular, sitting between the Tien and the Hau — builds canh chua like an orchestra: tamarind for the sour, pineapple and rock sugar for the sweet, fish sauce for the salt, chili for the heat, and then a whole architecture of textures dropped in at staggered intervals so that every spoonful contains something soft, something crisp, something slippery. It is the most complete expression of the southern palate in a single bowl.

Ca bong lau is the fish the Delta reaches for. It is a migratory river catfish of the lower Mekong — the same genus as the farmed basa and tra that Vietnam exports by the container-load, but a different animal in the mouth. Wild bong lau runs the Hau river channel, feeds on shrimp and small fish in fast water, and grows a firm, ivory-white flesh with a clean, faintly sweet finish and a marbling of soft fat along the belly that farmed tra simply does not have. That fat matters: it is what keeps the fish moist through a soup and what carries the tamarind. In Europe, use thick bone-in basa or tra steaks from a Vietnamese grocer — they are the closest relative — or a bone-in steak of a firm white river fish. Skinless fillets will shred and cloud the broth.

The construction rule is sequence. Everything goes into a canh chua at a different moment, and the order is not negotiable: tamarind and pineapple first, to build the sour-sweet base and give the pineapple time to release its sugars; then tomato, which softens and adds body; then the fish, which needs six minutes and not a second longer; then bac ha — taro stem, the sponge-textured backbone of the soup — which must go in with barely two minutes left or it collapses into slime; then bean sprouts and okra, which are there for crunch and must stay crunchy; and finally, off the heat entirely, the herbs. A canh chua where everything was added together is a canh chua where everything tastes the same and nothing has texture. Delta cooks work backwards from the fish.

Rau om — rice paddy herb — is the compound that makes a canh chua smell like a canh chua, and it goes in last for a reason that is purely chemical. Its aroma comes from volatile terpenes and aldehydes with a cumin-lemon-mint character, and they boil off almost instantly at 100°C. Thrown into the pot off the heat, with the residual temperature just high enough to release them, they lift straight out of the bowl and into your face as it arrives at the table. Boiled for even a minute, they are gone, and the soup smells of tamarind and nothing else. Along with the ngo gai and the fried garlic scattered on top, this final thirty seconds is where a competent canh chua becomes a great one.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 600,
          unit: 'g',
          name: 'ca bong lau (Mekong catfish), cut into 2.5 cm bone-in steaks',
          note: `Bone-in and skin-on. The bone keeps the flesh moist through the poach and gives the broth body; the belly fat is what carries the tamarind. In Europe: thick bone-in basa or tra steaks from a Vietnamese grocer. Avoid skinless fillets — they shred and cloud the broth.`,
        },
        { amount: 1, unit: 'tbsp', name: 'fish sauce' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 0.5, unit: 'tsp', name: 'ground black pepper' },
        { amount: 2, name: 'shallots, sliced' },
      ],
    },
    {
      title: 'The sour-sweet broth',
      items: [
        { amount: 1.5, unit: 'L', name: 'water or light fish stock' },
        {
          amount: 50,
          unit: 'g',
          name: 'seedless tamarind pulp (me chua)',
          note: `Soaked in 150 ml hot water, mashed, strained. Tamarind gives a round, fruity sourness with a long finish — lime and vinegar give a short, sharp one and are not substitutes here. Tamarind concentrate works but use half the quantity and taste as you go.`,
        },
        {
          amount: 200,
          unit: 'g',
          name: 'fresh pineapple, cut into thick wedges',
          note: `Sweetness AND acid AND aroma — pineapple is a three-way ingredient in canh chua, not a garnish. Fresh only; canned pineapple in syrup will make the soup cloying.`,
        },
        { amount: 2, name: 'tomatoes, cut into wedges' },
        { amount: 25, unit: 'g', name: 'rock sugar (duong phen)', note: `The Delta sweetness — dissolves slowly and rounder than granulated. Southern canh chua is unapologetically sweet-sour; northern versions use a fraction of this.` },
        { amount: 3, unit: 'tbsp', name: 'fish sauce' },
        { amount: 2, name: 'red chilies, sliced' },
      ],
    },
    {
      title: 'The textures (added in strict order)',
      items: [
        {
          amount: 150,
          unit: 'g',
          name: 'bac ha (taro stem), peeled and cut on a steep bias',
          note: `The structural signature of southern canh chua — spongy, absorbent, faintly slippery. It goes in with 2 minutes left or it disintegrates. If unavailable in Europe, thick celery cut on a bias is the usual stand-in, though it brings crunch where bac ha brings sponge.`,
        },
        { amount: 100, unit: 'g', name: 'okra (dau bap), cut on a bias' },
        { amount: 150, unit: 'g', name: 'bean sprouts', note: `In at the very last moment. They are here for the snap, and 60 seconds of boiling destroys it.` },
        { amount: 4, name: 'stalks of dau bap or long beans (optional)' },
      ],
    },
    {
      title: 'The finish (off the heat)',
      items: [
        {
          amount: 20,
          unit: 'g',
          name: 'rau om (rice paddy herb), chopped',
          note: `The single most important aromatic in the bowl, and the one that cannot survive boiling. Off-heat, always. Sold fresh at Vietnamese groceries across Europe; there is no true substitute.`,
        },
        { amount: 15, unit: 'g', name: 'ngo gai (sawtooth herb), chopped' },
        { amount: 2, unit: 'tbsp', name: 'fried garlic in its oil', note: `Poured over the surface at the table.` },
        { amount: 1, name: 'red chili, sliced, and a saucer of fish sauce for dipping the fish' },
      ],
    },
  ],
  steps: [
    {
      title: 'Season the fish — 15 minutes, and no longer',
      description: `Toss the fish steaks with the fish sauce, salt, pepper and sliced shallots. Leave 15 minutes at room temperature.

Fifteen minutes is enough for the seasoning to penetrate the outer few millimeters and for the surface protein to firm up slightly, which helps the steaks hold their shape in the broth.

Longer than 30 minutes and the salt draws out too much water — the fish tightens and turns dry when it hits the hot soup, and it will taste seasoned on the outside and hollow at the bone.`,
      tip: `Seasoning the fish separately, rather than relying on the broth, is what distinguishes a canh chua from a fish soup. The broth is a sour-sweet environment, not a seasoning medium — its salt is calibrated for drinking, not for penetrating flesh. The fish arrives already seasoned and merely poaches in the broth. This is why the fish is lifted out and dipped in a saucer of neat fish sauce with chili at the table: the seasoning of the fish and the seasoning of the soup are two separate systems.`,
    },
    {
      title: 'Build the base — tamarind and pineapple first, 10 minutes',
      description: `Bring the water to a boil, add the strained tamarind liquid and the pineapple wedges, and simmer 8-10 minutes. Add the rock sugar and fish sauce and stir until the sugar has fully dissolved.

Taste it now, and taste it hard. Sour should arrive first and hit clearly. Sweet should catch it half a second later and round it off. Salt should sit underneath both. If any one of the three is missing, the finished soup will not recover — this is the moment to correct, and it is easier now than with fish in the pot.

Skim any foam. A clear broth is a well-made one; a murky broth means you boiled it too hard.`,
      tip: `Pineapple simmered for ten minutes rather than added at the end is doing chemistry: heat breaks down its cell walls and releases both its sugars and its own citric and malic acids into the broth, and the fruit itself softens into something that eats like part of the soup rather than a chunk of raw fruit in it. It also brings bromelain, which briefly tenderizes the fish surface as it poaches. Add pineapple late and you get a sour broth with pineapple floating in it — which is not the same thing at all.`,
    },
    {
      title: 'Poach the fish — 6 minutes, no stirring',
      description: `Lower the fish steaks into the barely-simmering broth in a single layer. Add the tomato wedges. Do not stir — a wooden spoon dragged through the pot will break the steaks apart. Poach 6 minutes at a bare simmer.

The fish is done when the flesh has turned from translucent grey-pink to opaque white and has just begun to pull away from the bone. A skewer at the thickest point meets no resistance.

Six minutes is the number for a 2.5 cm steak. Eight and the fish begins to shred; ten and it has given its texture up entirely and clouded your broth. Every other ingredient in this soup is timed backwards from the fish.`,
      tip: `Poaching, not boiling. Fish muscle protein begins to set at around 50°C and is fully cooked by 62-65°C; a rolling boil at 100°C blasts the exterior far past that while the center catches up, and the overcooked outer layer expels its water and collagen into the broth — which is exactly the mechanism that turns a clear canh chua cloudy. A bare simmer keeps the whole steak inside a narrow temperature band and the broth stays clean.`,
    },
    {
      title: 'The texture sequence — bac ha, then okra, then sprouts',
      description: `With 2 minutes left, slide in the bac ha. With 1 minute left, add the okra. With 20 seconds left, add the bean sprouts. Then turn the heat off completely.

Bac ha should be tender and absorbent but still holding its shape, with the spongy interior having drunk up broth. Okra should be bright green and still snap. Bean sprouts should be barely warmed through and audibly crunchy.

This staggering is the whole dish. Add them all together at the start and by the time the bac ha is right the sprouts are dead, the okra has gone slimy, and every spoonful has the same soft texture. A canh chua is judged on how many different textures survive to the table.`,
      tip: `Bac ha is spongy because its stem is full of aerenchyma — air-filled channels that let the taro plant breathe in flooded ground. In the pot, those channels flood with broth, which is why a properly cooked piece of bac ha explodes with sour-sweet liquid when you bite it. Overcook it and the cell walls holding those channels open collapse; the sponge deflates into mush and the effect is lost. Two minutes. It is the tightest window in the recipe.`,
    },
    {
      title: 'Off the heat: the herbs — and serve immediately',
      description: `With the pot off the heat, throw in the chopped rau om and ngo gai and stir once. Ladle straight into a serving bowl, pour the fried garlic and its oil over the surface, and take it to the table while it is still visibly steaming.

The soup should hit the table within a minute of the herbs going in. That first lift of steam carrying rau om is the moment the dish is at its peak, and it is genuinely brief.

Serve with hot rice, a saucer of neat fish sauce with sliced chili for dipping the fish, and — the Delta rule — a plate of ca kho on the same table. Canh chua is never served alone. It exists in a pair with a salty, dark, concentrated kho, and the meal is the movement back and forth between them.`,
      tip: `The pairing of canh chua with ca kho is the oldest structural principle of the southern Vietnamese table, and it is a flavor-balance system, not a tradition for its own sake. Kho is dark, intensely salty-sweet, dry, and dense. Canh chua is bright, sour, wet, and light. Rice sits between them, neutral. Every mouthful of kho creates the appetite for a spoon of canh chua, which resets the palate for the next mouthful of kho. Neither dish is designed to be eaten alone, and neither is complete without the other.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
