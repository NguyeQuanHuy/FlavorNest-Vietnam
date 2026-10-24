'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'bun-nuoc-leo-tra-vinh',
  title: `Bún Nước Lèo Trà Vinh (Khmer Fermented-Fish Noodle Soup)`,
  subtitle: `A broth built on mắm bò hóc — the Khmer fermented mudfish paste that is the bedrock of Trà Vinh cooking — simmered with lemongrass, galangal and coconut milk until it turns tawny-gold and thick, then poured over rice vermicelli with pork, shrimp, fish cakes and a jungle of raw herbs. The bowl that proves a Mekong province can be Khmer and Vietnamese and entirely itself.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '2 hr',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/bun-nuoc-leo-tra-vinh.jpg',
  intro: `Trà Vinh is one of the three Mekong Delta provinces where Khmer culture is not a minority presence but a structural one — temples, language, farming calendar, and above all, cuisine. More than thirty percent of the population is ethnic Khmer, and the cooking that crosses every table in the province, Vietnamese and Khmer alike, carries an ingredient that neither Saigon nor Hanoi uses and that most of Vietnam cannot name: mắm bò hóc, the Vietnamese transliteration of the Khmer prahok, a paste of fermented mudfish that is to Trà Vinh's kitchen what fish sauce is to the rest of the country — the invisible foundation that everything else is built on.

Bún nước lèo is the dish that introduces the province. Nước lèo is simply broth — the same word the Huế cooks use for their peanut-liver sauce, borrowed and redeployed — and the broth here is a three-layer construction unlike any other noodle soup in Vietnam. The base is pork bone stock, plain and clean. Into it goes the mắm bò hóc, dissolved, strained, and simmered until its raw ferocity mellows into a deep, earthy, almost cheese-like savouriness that phở's fish sauce cannot reach because it was never trying to. And then — the signature that no other Vietnamese noodle soup carries — coconut milk, stirred in at the end, not enough to turn the broth white but enough to turn it tawny-gold, rich, and faintly sweet, rounding every harsh edge and giving the bowl a body that clear broths do not possess. It is a Mekong bowl with a Cambodian engine dressed in Vietnamese manners, and it tastes like exactly that.

The aromatics are Khmer-southern — the lemongrass-galangal-turmeric trinity that runs through Cambodian cooking as confidently as it does through Thai — and they are deployed generously, because mắm bò hóc is a powerful flavour and powerful flavours need powerful aromatics to frame them. The turmeric gives the broth its golden tinge; the lemongrass gives it its citrus spine; the galangal gives it its medicinal-piney warmth. Together with the coconut they produce a broth that sits, in taste-space, somewhere between a Vietnamese noodle soup and a Cambodian samlor — and that somewhere is precisely where Trà Vinh sits on the map, between the Mekong's Vietnamese mainstream and the Khmer heartland to the west.

The toppings are multi-protein, because this is the Delta and protein comes in many forms: sliced boiled pork, peeled shrimp, fried fish cakes, and — in the proper Trà Vinh version — cubes of roasted pork belly and sometimes a piece of cá lóc steamed and flaked. Over the top go bean sprouts, banana blossom, and a herb platter that runs to rau muống bào (shredded water spinach stems), rau răm, húng quế and ngò gai. The bowl is not delicate. It is generous, vivid, deeply savoury and faintly tropical, and it was designed for people who work rice paddies from dawn and sit down hungry.

A note on the ingredient that makes the dish possible: mắm bò hóc is sold in jars at Vietnamese and Cambodian groceries across Europe, labelled variously as "mắm bò hóc," "prahok" or "prohok." It smells strong and does not apologise. If you have followed this collection through mắm sống, mắm nêm, mắm tép and mắm cá ruộng, you have already accepted the principle: Vietnamese fermented pastes are the country's deepest flavour infrastructure, and the discomfort of the raw jar is the distance between the jar and the dish, not between you and the cuisine. The broth you will make from it smells of lemongrass and coconut and gold. Trust the process.`,
  ingredientSections: [
    {
      title: 'The broth',
      items: [
        {
          amount: 800,
          unit: 'g',
          name: 'pork bones (neck, spine)',
          note: `Blanched 5 minutes, rinsed, restarted in fresh water — the mandatory clarity step.`,
        },
        {
          amount: 3,
          unit: 'tbsp',
          name: 'mắm bò hóc (fermented mudfish paste / prahok)',
          note: `The foundation. Sold in jars at Vietnamese and Cambodian groceries (look for "mắm bò hóc," "prahok" or "prohok"). Dissolve in 200 ml warm water, stir hard, and strain through a fine sieve — the strained liquid goes into the pot; the gritty residue is discarded. This straining is what separates a clear, rich broth from a murky, gritty home one.`,
        },
        { amount: 2.5, unit: 'L', name: 'water' },
        {
          amount: 400,
          unit: 'ml',
          name: 'coconut milk',
          note: `Added in the final 15 minutes. Full-fat canned coconut milk — its fat rounds the ferment, its sugar softens the salt, and its colour turns the broth from grey-brown to the signature tawny gold.`,
        },
        { amount: 3, name: 'stalks lemongrass, bruised and knotted' },
        { amount: 40, unit: 'g', name: 'galangal, sliced and bruised' },
        { amount: 20, unit: 'g', name: 'fresh turmeric, pounded (or 1 tsp ground)' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1.5, unit: 'tbsp', name: 'sugar' },
        { amount: 1, unit: 'tsp', name: 'salt' },
      ],
    },
    {
      title: 'The toppings',
      items: [
        { amount: 300, unit: 'g', name: 'pork leg or shoulder, in one piece', note: `Poached whole in the broth for 60 minutes, chilled, sliced thin.` },
        { amount: 200, unit: 'g', name: 'shrimp, peeled, deveined' },
        { amount: 200, unit: 'g', name: 'chả cá (Vietnamese fried fish cakes), sliced', note: `Golden, springy fried fish cakes from the Vietnamese grocer, sliced into batons.` },
        { amount: 150, unit: 'g', name: 'roasted pork belly (heo quay), sliced (optional)', note: `The luxury topping — crackling and fat against the fermented broth.` },
        { amount: 200, unit: 'g', name: 'cá lóc (snakehead), steamed and flaked (optional)' },
      ],
    },
    {
      title: 'The noodles and the platter',
      items: [
        { amount: 600, unit: 'g', name: 'fresh bún (rice vermicelli), blanched 10 seconds' },
        { amount: 200, unit: 'g', name: 'bean sprouts' },
        { amount: 150, unit: 'g', name: 'banana blossom, shredded fine, in lime water' },
        {
          amount: 100,
          unit: 'g',
          name: 'rau muống bào (shredded water spinach stems)',
          note: `The Trà Vinh signature — stems only, shredded into fine curls and soaked in iced water until they spring open. Its crisp, grassy, faintly mineral bite against the fatty broth is why the province insists on it. No other noodle soup in Vietnam uses this.`,
        },
        { amount: 100, unit: 'g', name: 'herbs: húng quế, rau răm, ngò gai, ngò om' },
        { amount: 1, name: 'lime, in wedges' },
        { amount: 3, name: 'bird\'s-eye chilies, sliced' },
        { amount: 2, unit: 'tbsp', name: 'fried shallots' },
        { amount: 1, name: 'saucer of fish sauce with chili' },
      ],
    },
  ],
  steps: [
    {
      title: 'Build the bone stock and dissolve the mắm — 90 minutes, one pot',
      description: `Blanch the pork bones 5 minutes, drain, rinse, scrub the pot, restart in 2.5 L fresh cold water with the lemongrass, galangal and turmeric. Bring to a bare simmer.

At 15 minutes, dissolve the mắm bò hóc in 200 ml warm water, stir hard to break it up, and strain through a fine sieve. Pour the strained liquid into the simmering pot. Discard the gritty residue.

At 30 minutes, lower in the whole pork piece. Simmer 90 minutes total, skimming every 20 minutes. Season with fish sauce, sugar and salt in the final 30 minutes.

At 90 minutes: pull the pork, fish out the lemongrass and galangal, and strain the broth. It should be tawny-brown, deeply aromatic, and taste like nothing else in Vietnam — earthy, savoury, faintly funky, with lemongrass running through it.`,
      tip: `The straining of the dissolved mắm bò hóc is the single most important technical step. Raw prahok is a coarse paste full of bone fragments, scales and undissolved fibre; poured directly into the pot, these settle as grey sludge that clouds the broth permanently and gives it a gritty texture. Dissolved, stirred and strained, the same paste yields a clear, copper-gold, intensely flavoured liquid and a spent residue that is discarded — all flavour extracted, all texture left behind. Every Trà Vinh stall does this as the first operation of the morning.`,
    },
    {
      title: 'Stir in the coconut milk — the broth turns gold',
      description: `With the broth at a gentle simmer and the pork removed, pour in the coconut milk and stir. Watch the colour change: tawny-brown lifts to a warm, opaque, golden-amber. Simmer gently 10-15 minutes.

Taste seriously. The broth should be: deeply savoury first (the mắm bò hóc), gently sweet second (the coconut and the sugar), aromatic third (the lemongrass-galangal-turmeric chord), and salty last. If the ferment is too forward, add more coconut. If the coconut has flattened it, a splash more of the strained mắm liquid brings it back.

Do not let it boil hard after the coconut goes in — hard boiling splits the emulsion and the fat separates into an oily film.`,
      tip: `Coconut milk is an emulsion — fat droplets suspended in water by phospholipids — and gentle heat holds it while hard boiling breaks it. In a broken broth the fat floats as a greasy slick and the liquid below goes thin; in an intact one the fat is dispersed uniformly as microscopic droplets that scatter light (the golden opacity), coat the tongue (the richness) and carry the volatile aromatics into the nose (the perfume). The simmer is the emulsifier.`,
    },
    {
      title: 'Cook each topping to its own clock',
      description: `Poach the shrimp directly in the simmering broth, 2-3 minutes until pink and curled, and lift out. If using cá lóc, steam the fillet separately 8 minutes and flake into chunks. Warm the sliced chả cá in the broth for 1 minute.

Slice the chilled pork across the grain, thin. Slice the heo quay if using.

Every protein is cooked separately because each has its own doneness point. The shrimp also season the broth as they poach — their shells' carotenoids tint the liquid a shade more orange, and their released amino acids deepen the umami. The topping seasons the broth; the broth cooks the topping.`,
      tip: `This is the same circular transaction the Nam Phổ bánh canh used with its dollops and the bò tùng xẻo used with its hundred beef slices: when the cooking medium is also the serving liquid, everything that passes through it leaves something behind. The hundredth bowl of the morning at a Trà Vinh stall is perceptibly richer than the first, because every portion of shrimp and pork that the broth cooked deposited its own contribution back into the pot. The stall's broth is a running tally of everything it served, and the regulars who arrive late know it.`,
    },
    {
      title: 'Assemble the bowl — bún, proteins, gold, and the rau muống bào',
      description: `Blanch the bún 10 seconds, drain into four deep bowls. Arrange the sliced pork, shrimp, chả cá batons, heo quay and flaked cá lóc across the top.

Ladle the golden broth at a rolling simmer — it must steam violently on contact. Scatter fried shallots and pepper.

Serve the bean sprouts, banana blossom, rau muống bào, herbs, chili and lime on a side platter. The eater builds: sprouts and banana blossom first for bulk and crunch; the water-spinach curls on top for their unique bite; herbs torn and scattered; lime squeezed; chili negotiated.

The bowl should be vivid — golden broth, pink shrimp, white noodle, green herbs, the rust of fried shallot — and it should smell of lemongrass and coconut before it smells of anything else.`,
      tip: `The rau muống bào appears in no other noodle soup in this collection and possibly in no other noodle soup in Vietnam. Water spinach stems, stripped of their leaves, are shredded lengthwise into fine ribbons and shocked in iced water, which makes them curl into tight coils with a snap that survives ten minutes in hot broth. Their flavour is clean, grassy, faintly mineral — a green brightness against the heavy, golden, fermented broth that no bean sprout or lettuce can supply. It is Trà Vinh's signature garnish the way rau rừng is Trảng Bàng's: the thing on the plate that tells you, before the first spoonful, exactly where in the Delta you are sitting.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
