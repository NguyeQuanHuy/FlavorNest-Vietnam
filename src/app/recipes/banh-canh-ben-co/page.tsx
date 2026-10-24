'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'banh-canh-ben-co',
  title: `Bánh Canh Bến Có (Bến Có Market Pork-Knuckle Thick-Noodle Soup)`,
  subtitle: `The bánh canh of one specific market in Trà Vinh city — a clear, collagen-heavy pork broth thickened naturally by a split trotter's own gelatin, poured over hand-cut rice-tapioca noodles with sliced pork, quail eggs, and giò heo so soft the skin trembles at the spoon. Not the coconut-gold of the bún nước lèo — the other Trà Vinh noodle soup, the clear one, the one that locals eat on the days they are not eating the famous one.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '3 hr',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/banh-canh-ben-co.jpg',
  intro: `Trà Vinh city has two noodle soups and the world knows only one of them. Bún nước lèo — the mắm-bò-hóc-and-coconut bowl — is the ambassador, the one the food blogs film and the tourists seek. Bánh canh Bến Có is the other one: the bowl the city eats on the six mornings a week when it is not in the mood for fermented fish and coconut, which is most mornings. It is sold at and around the Bến Có market, in stalls that have occupied the same corners long enough that the corner is named for the stall rather than the other way round, and what it offers is the opposite of everything the bún nước lèo proposes: a broth that is clear rather than golden, seasoned with fish sauce rather than prahok, enriched by gelatin rather than coconut, and built around the pig rather than the fish.

The trotter is the dish's engine, exactly as it is in Trảng Bàng's bánh canh — split lengthwise, braised in the stock for three hours until the collagen has fully converted to gelatin and the broth coats the lip. But where Trảng Bàng surrounds the trotter with a forest of wild herbs and makes the herb basket the co-star, Bến Có keeps the bowl plain and lets the trotter do the talking alone: a half-trotter per bowl, skin trembling, meat still on the bone, swimming in a clear broth whose body comes entirely from the animal and whose seasoning is fish sauce, a rock-sugar nudge, and black pepper. The noodle is the same rice-tapioca hand-cut baton the southern Delta uses everywhere — fat, chewy, slippery — and it is made on-site, rolled and cut the same morning.

The toppings beyond the trotter are modest and consistent: sliced boiled pork, halved quail eggs, a scatter of fried shallot and scallion, and — at some stalls — a spoon of huyết, congealed pork blood cut into cubes and poached, the iron-rich, silky-textured protein that the Delta adds to a surprising number of its noodle soups and that visitors from Hanoi and the West encounter with varying degrees of equanimity. The herb platter is present but moderate — bean sprouts, a little lettuce, rau răm, lime — nothing like the twenty-species rau rừng of Tây Ninh. Bến Có's bowl is about the broth and the trotter, and it presents them without distraction.

The difference between this bowl and Trảng Bàng's is, in the end, a difference of philosophy that maps onto the two provinces' characters. Tây Ninh — on the highway to Cambodia, loud, commercial, herb-rich — wraps its noodle soup in a basket of wildness and makes the eating an event. Trà Vinh — quieter, more Khmer, more inward — sets a clear bowl of pork broth on a plastic table and says: taste the pig. The pig is very good. And the broth — that gelatin-heavy, lip-coating, clean, faintly sweet clear broth — is one of the best things in the Mekong, and it does not need a hedge to prove it.`,
  ingredientSections: [
    {
      title: 'The broth and the trotter',
      items: [
        {
          amount: 1.5,
          unit: 'kg',
          name: 'pork bones (neck, spine, knuckle)',
          note: `Blanched 5 minutes, rinsed, restarted in fresh water. The bones build body alongside the trotter; the trotter alone would give richness but not enough volume for four bowls.`,
        },
        {
          amount: 2,
          name: 'pig\'s trotters (giò heo), split lengthwise by the butcher',
          note: `Split so the marrow faces the broth and the interior surfaces release gelatin. Ask any Asian or halal butcher; they have the cleaver. Each bowl gets a half-trotter — it is the centrepiece.`,
        },
        { amount: 3, unit: 'L', name: 'water' },
        { amount: 1, name: 'yellow onion, halved and charred' },
        { amount: 30, unit: 'g', name: 'ginger, charred and bruised' },
        { amount: 4, unit: 'tbsp', name: 'fish sauce' },
        { amount: 20, unit: 'g', name: 'rock sugar', note: `The southern-Delta sweetness — present but restrained. The broth should read savoury-clean-lip-coating, with the sweet only emerging at the very finish as a rounding note.` },
        { amount: 1.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tsp', name: 'ground white pepper', note: `White, not black — for the clean visual of a clear broth. Black pepper specks in a pale broth look like contamination; white pepper seasons invisibly. The same reasoning governs every clear phở and every court consommé.` },
      ],
    },
    {
      title: 'The noodles',
      items: [
        {
          amount: 250,
          unit: 'g',
          name: 'rice flour (bột gạo)',
          note: `Plain rice flour.`,
        },
        {
          amount: 120,
          unit: 'g',
          name: 'tapioca starch (bột năng)',
          note: `About a third of the flour weight — the Bến Có ratio sits between the Trảng Bàng high-tapioca chew and the Nam Phổ slipperiness, landing at a moderate, crowd-pleasing density.`,
        },
        { amount: 230, unit: 'ml', name: 'boiling water, approximately' },
        { amount: 0.5, unit: 'tsp', name: 'salt' },
        { amount: 1, unit: 'tbsp', name: 'neutral oil' },
      ],
    },
    {
      title: 'The toppings',
      items: [
        { amount: 300, unit: 'g', name: 'pork leg or shoulder, in one piece', note: `Poached whole in the broth for 60 minutes, pulled, chilled, sliced across the grain.` },
        { amount: 8, name: 'quail eggs, boiled 3 minutes, peeled, halved', note: `The Delta's miniature protein — visual, textural, perfectly scaled for a noodle soup where the trotter is the star.` },
        {
          amount: 150,
          unit: 'g',
          name: 'huyết heo (congealed pork blood), cut into 2 cm cubes (optional)',
          note: `Poached gently 5 minutes in the broth until just set — silky, iron-rich, deep burgundy. Traditional at many Bến Có stalls and an honest part of the dish. Omit without apology if it is not your thing.`,
        },
        { amount: 3, unit: 'tbsp', name: 'fried shallots' },
        { amount: 4, name: 'scallions, sliced' },
        { amount: 1, unit: 'tsp', name: 'ground white pepper, for the table' },
      ],
    },
    {
      title: 'The platter',
      items: [
        { amount: 200, unit: 'g', name: 'bean sprouts' },
        { amount: 1, name: 'small head of lettuce, torn' },
        { amount: 50, unit: 'g', name: 'rau răm, whole sprigs' },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 3, name: 'bird\'s-eye chilies, sliced, in fish sauce' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the broth and braise the trotters — 2.5-3 hours, one pot, bare simmer',
      description: `Blanch all bones and both split trotters 5 minutes in boiling water. Drain, rinse every piece under cold water, scrub the pot, restart: bones, trotters, 3 L fresh cold water, charred onion and ginger. Bring to a bare simmer and hold it there — a bubble every second, never a boil.

At 30 minutes, lower in the whole pork piece. Skim every 15-20 minutes.

At 90 minutes, pull the pork — skewer passes through with moderate pressure. Chill and slice later.

Leave the trotters in for the full 2.5-3 hours. Season with fish sauce, rock sugar, salt and white pepper in the final 30 minutes. The trotters are done when the skin is translucent, trembling-soft, and a chopstick pressed into the thickest part meets no resistance. If the skin is still tough, give it another 30 minutes — collagen conversion has a threshold and below it nothing yields.

Strain the broth. It should be pale gold, clean, and — the gelatin test — when a spoonful is left on a cold plate for a minute, it should start to gel at the edges. That gel is your body. That body is the dish.`,
      tip: `The broth's body comes entirely from the trotter's collagen-to-gelatin conversion, and this is the fundamental difference from any broth enriched with coconut or starch. Gelatin enrichment is invisible — the broth looks clear and pours like water, but it coats the tongue and lip with a silky film that reads as richness without reading as fat. Coconut enrichment is visible — it clouds, it adds its own flavour, it changes the bowl's identity. Bến Có chose invisible richness, which is why the bowl looks plain and tastes like it is hiding something. It is hiding the pig's own collagen, rendered transparent by three hours and presented as clarity.`,
    },
    {
      title: 'Make and cut the noodles fresh — within the hour',
      description: `Mix the rice flour, tapioca starch and salt. Pour in the boiling water gradually, stirring hard. Add the oil, and once cool enough, knead 5-6 minutes into a firm, smooth, faintly translucent dough.

Roll on a starch-dusted surface to about 5 mm thick. Cut by hand into irregular batons 1 cm wide, 8 cm long. Dust with starch, shake apart. Do not rinse.

Drop into the simmering broth (or a separate pot) 4-5 minutes before serving: done when they float, turn translucent, and feel slippery-chewy. Use within the hour — stale bánh canh is gummy rather than springy.`,
      tip: `The Bến Có tapioca ratio — about a third — gives a noodle that is chewy without being dense, slippery without being glassy, and absorbent enough to carry the gelatin-rich broth on its surface without being so porous that it swells and goes soft. It is the Goldilocks of the bánh canh spectrum, and the stall cooks arrive at it not by percentage but by feel: the dough should be elastic, slightly warm from the scald, and should stretch about 3 cm before tearing. If it tears at 1 cm it needs more water; if it stretches to 5 it needs more rice flour. The hand knows faster than the scale.`,
    },
    {
      title: 'Poach the optional huyết — gentle, 5 minutes',
      description: `If using the pork blood: bring a small pot of water or broth to a bare simmer — not a boil. Lower the blood cubes gently and poach 5 minutes, until they are just firm through and a deep, glossy burgundy. Lift out with a spider and hold warm.

Hard-boiling blood cubes turns them from silky-dense to grainy-crumbly — the same protein-denaturing violence that ruins a custard or a chawanmushi. The blood is 90% water and protein; it sets by the same gentle-heat rules as egg, and it wants the same respect.

The finished cube should cut with a spoon, revealing a uniform dark interior with no bubbles and no grey band at the edges.`,
      tip: `Congealed blood is one of the Delta's most nutritionally dense foods — roughly 18% protein and a significant source of heme iron, which is absorbed two to three times more efficiently than plant-derived non-heme iron. Its presence in noodle soups across the Mekong is not a dare or an oddity; it is a genuine nutritional strategy in a region where red meat was historically scarce and where a cube of blood in a broth-based bowl supplies a substantial fraction of a day's iron. The texture, at its best, is silky, dense, faintly mineral and entirely pleasant — not unlike a very firm tofu with more character. It deserves an honest try.`,
    },
    {
      title: 'Assemble — trotter at the crown, broth boiling, simplicity deliberate',
      description: `Divide the noodles between four deep bowls. Lay the sliced pork, halved quail eggs and the blood cubes (if using) on one side. Set a half-trotter at the crown of each bowl, skin-side up, propped against the rim — the visual centrepiece, as it is in Trảng Bàng, as it is everywhere the pig's foot is the argument.

Ladle the broth at a full rolling boil — it must steam violently on contact. Scatter scallion, fried shallots and white pepper.

Serve the bean sprouts, lettuce, rau răm, lime and chili on a small side plate — not a vast basket, not a hedge's worth. Bến Có's herb platter is modest by design: this bowl is about the broth and the trotter, and three sprigs of rau răm are all the commentary it accepts.

Pull the trotter apart with chopsticks and fingers. Eat the skin first — it has been working for three hours to earn its tremor. Drink the broth from the bowl. Accept the second bowl. In Bến Có the stall owner is already ladling it.`,
      tip: `Set the two Trà Vinh noodle soups side by side and the province explains itself: bún nước lèo is the Khmer bowl — mắm bò hóc, coconut, galangal, golden, aromatic, multi-protein, loud — and bánh canh Bến Có is the Vietnamese bowl — fish sauce, ginger, pork, clear, plain, one protein that counts, quiet. Both exist on the same tables, in the same city, eaten by the same families on alternating mornings, and neither is the lesser. A province that is 30% Khmer and 70% Vietnamese makes two soups that are each fully themselves, and it serves them without ranking. This is not fusion. It is bilingualism — two complete culinary sentences, spoken fluently, in the same kitchen, on different days.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
