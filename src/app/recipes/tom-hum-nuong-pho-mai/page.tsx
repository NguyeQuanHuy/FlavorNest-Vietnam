'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'tom-hum-nuong-pho-mai',
  title: `Tôm Hùm Nướng Phô Mai (Lobster Grilled with Cheese and Garlic Butter)`,
  subtitle: `A whole spiny lobster — split lengthwise, the exposed flesh topped with garlic butter, a blanket of grated mozzarella and a crack of black pepper — grilled until the cheese bubbles to a golden, stretchy, blistered gratin and the lobster underneath is just-set, sweet and carrying the garlic butter's richness in every crevice. The Vietnamese wedding's prestige main course, and the dish that proves a cuisine does not need to be traditional to be authentic.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '30 min',
  rating: 4.9,
  baseServings: 4,
  heroImage: '/images/recipes/tom-hum-nuong-pho-mai.jpg',
  intro: `Tôm hùm nướng phô mai is a dish that did not exist in Vietnamese cuisine before roughly the year 2000 — it has no precedent in any traditional cookbook, no roots in any regional tradition, no ancestor in any grandmother's kitchen. It was invented by the urban Vietnamese restaurant industry in the late 1990s and early 2000s, when imported cheese (principally mozzarella and processed cheese, arriving via South Korean and Japanese supply chains) became affordable, when the wedding-banquet industry scaled to serve an emerging middle class that wanted PRESTIGE on the table, and when the prestige that the middle class wanted was, specifically, the prestige of COMBINATION: the most expensive Vietnamese protein (tôm hùm — spiny lobster) plus the most visibly Western ingredient (phô mai — cheese). The dish is a status symbol made edible, and its presence on a wedding menu is a statement: this family can afford lobster AND cheese, and the combination is the proof.

The culinary logic, however, is not merely economic — it is genuinely good. Lobster and butter is one of the world's oldest luxury pairings (French, American, any Atlantic coastline), and replacing the butter with cheese (which IS butter plus protein plus acid plus salt) adds a browned, stretchy, savoury crust that plain butter cannot provide. The garlic — pounded into the butter, spread over the lobster's exposed flesh — delivers the allium's Maillard compounds directly into the protein's surface during grilling. And the cheese — mozzarella for stretch, sometimes blended with Parmesan for depth — melts, bubbles, blisters and browns over the lobster in a gratin crust that is visually spectacular (golden, bubbled, stretchy when pulled) and texturally complex (crispy-charred at the peaks, gooey-stretchy in the valleys, and butter-rich throughout).

The dish is now served at every upscale Vietnamese wedding banquet — in Saigon, in Hanoi, in Đà Nẵng, and at every overseas-Vietnamese wedding in California, Sydney and Berlin. It is the dish the photographer photographs, the dish the guests Instagram, and the dish the bride's mother judges the banquet hall by. A wedding hall that serves a good tôm hùm nướng phô mai — lobster fresh, cheese properly browned, garlic butter not burnt — is a hall the family will recommend. A hall that serves a bad one — frozen lobster, rubbery cheese, bitter garlic — is a hall the family will name.

The collection includes this dish not despite its modernity but because of it: a cuisine that cannot invent new dishes is a dead cuisine, and the tôm hùm nướng phô mai — invented within living memory, adopted nationally within a decade, now as fixed on the wedding table as the gà luộc and the giò lụa — is proof that Vietnamese food culture is alive, adaptive, and unafraid to absorb the foreign when the foreign makes the table better.`,
  ingredientSections: [
    {
      title: 'The lobster',
      items: [
        {
          amount: 2,
          name: 'whole spiny lobsters (tôm hùm), 500-700 g each, live or very fresh',
          note: `Spiny lobster (Panulirus spp.) — the Vietnamese coast's native lobster, farmed in Khánh Hòa and Phú Yên. In Europe: any whole lobster (spiny, Maine, European) works — the format is universal. The lobster must be split ALIVE or killed immediately before splitting (a sharp knife through the head's centre, then split lengthwise through the tail). Frozen lobster tails are the practical substitute — thaw, split, proceed.`,
        },
      ],
    },
    {
      title: 'The garlic butter',
      items: [
        { amount: 80, unit: 'g', name: 'butter, softened' },
        { amount: 6, name: 'cloves garlic, pounded to a fine paste' },
        { amount: 1, unit: 'tbsp', name: 'fish sauce', note: `The Vietnamese addition to the French garlic-butter template — the fish sauce's glutamate amplifies the lobster's own umami in a way salt alone cannot.` },
        { amount: 0.5, unit: 'tsp', name: 'ground white pepper' },
        { amount: 1, unit: 'tbsp', name: 'finely chopped scallion (green part)' },
      ],
    },
    {
      title: 'The cheese topping',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'mozzarella, grated (or a mix of 150 g mozzarella + 50 g Parmesan)',
          note: `Mozzarella for STRETCH (its casein network melts to the elastic, stretchy, pull-apart texture the visual demands). Parmesan for DEPTH (its concentrated umami — from 18-36 months of proteolysis — adds a savoury intensity mozzarella alone cannot reach). The 3:1 blend is the professional Vietnamese banquet ratio.`,
        },
      ],
    },
    {
      title: 'For grilling / broiling',
      items: [
        { amount: 1, name: 'oven broiler set to maximum, or a charcoal grill with a lid' },
        { amount: 1, name: 'baking tray lined with foil (for oven) or a grill basket (for charcoal)' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'lemon wedges' },
        { amount: 30, unit: 'g', name: 'coriander or parsley, chopped' },
        { amount: 1, name: 'baguette (bánh mì), sliced — for scooping the melted cheese and garlic butter from the shell', note: `The French bread, at the Vietnamese wedding, beside the French-influenced lobster — the colonial loop closing at the table.` },
      ],
    },
  ],
  steps: [
    {
      title: 'Split the lobster, spread the garlic butter, blanket with cheese',
      description: `Kill the lobster humanely: place on a cutting board, stabilise the head with one hand, and drive a sharp, heavy knife through the centre of the head in one decisive motion — the cross-mark between the eyes. The lobster dies instantly. Split lengthwise from head to tail, cutting through the shell and the flesh. Open the two halves flat, meat-side up.

Remove the stomach sac (a small, gritty pouch behind the eyes) and the intestinal vein (a thin dark line running through the tail). Leave the tomalley (the green-grey hepatopancreas in the head section) — it is edible, rich and prized by many eaters, though some discard it.

Mix the garlic butter: combine softened butter, garlic paste, fish sauce, pepper and scallion. Spread generously over the exposed flesh of each lobster half — into every crevice, across the tail meat, over the knuckles. The butter melts during grilling and bastes the flesh from above.

Top with the grated cheese — a thick, even blanket covering the entire flesh surface. The cheese should be 5-8 mm thick — thinner and it browns too fast without melting through; thicker and the centre stays un-melted while the surface burns.

Set the prepared halves on the foil-lined tray, shell-side down, cheese-side up.`,
      tip: `The fish sauce in the garlic butter is the ingredient that separates the Vietnamese version from the French lobster thermidor's béchamel-and-mustard approach. Fish sauce's free glutamate (roughly 1,200 mg per 100 ml) synergises with the lobster's own inosinate and guanylate (nucleotide umami compounds present in crustacean muscle at 100-200 mg per 100 g) to produce a SYNERGISTIC umami — a perceived umami intensity 5-8x greater than either compound alone, because glutamate + nucleotides activate the T1R1/T1R3 umami receptor more effectively than either compound in isolation. The fish sauce turns the garlic butter from "rich" to "deeply savoury" by a receptor-level mechanism the French butter-salt approach cannot match.`,
    },
    {
      title: 'Broil or grill 8-10 minutes — the cheese gratin forms, the lobster just sets',
      description: `BROILER METHOD (preferred for even cheese browning): position the oven rack 15 cm below the broiler element. Broil 8-10 minutes. The cheese melts in the first 2 minutes (the mozzarella's casein matrix softens above 60°C and becomes elastic), then bubbles (moisture in the cheese converts to steam and inflates the melted surface), then browns at the peaks (the Maillard reaction between the cheese's protein and its lactose produces the golden-brown, blistered gratin crust).

CHARCOAL GRILL METHOD: set the lobster halves shell-side down on the grate, 10-12 cm above embers. Cover with a lid or a foil tent to trap heat above the cheese (without overhead heat, the cheese melts but does not brown). Grill 10-12 minutes.

The dish is done when: the cheese is golden-brown and blistered at the peaks (the gratin crust), stretchy and gooey in the valleys (the melt layer), the garlic butter is sizzling and pooling in the shell's crevices, and the lobster flesh underneath — check at the thickest point of the tail — is opaque-white, just-set, and pulling away slightly from the shell (the muscle contracts as it denatures at 62-65°C).

Do NOT overcook. Lobster flesh goes from just-set-and-sweet (62°C) to rubbery-and-dry (75°C+) in about 2 minutes under a broiler, and the cheese's browning timeline must align with the lobster's doneness timeline. If the cheese is browning too fast: lower the rack. If the lobster is done before the cheese is browned: raise the rack for 90 seconds of concentrated browning on the cheese alone.`,
      tip: `The mozzarella's stretch — the elastic, pull-apart, Instagram-worthy cheese-pull — is a casein-network property: mozzarella is made by stretching and folding curd in hot water (the pasta filata process), which aligns the casein proteins into parallel fibres. When the cheese melts, these aligned fibres slide past each other longitudinally but resist separation laterally — producing the characteristic stretch. Parmesan, which is NOT a stretched curd (it is a pressed, aged curd with randomly oriented casein), does not stretch — it melts into a granular, brittle, savoury crust without elasticity. The 3:1 mozzarella-to-Parmesan blend gives BOTH: stretch from the mozzarella (the visual) and umami depth from the Parmesan (the flavour). Neither cheese alone achieves what the blend achieves.`,
    },
    {
      title: 'Serve in the shell — the lobster is the plate, the cheese is the crust, the baguette is the spoon',
      description: `Bring the lobster halves to the table on the tray — sizzling, the cheese still bubbling, the garlic butter pooling in the shell. Squeeze lemon over. Scatter coriander.

Eat: pull a piece of the tail meat from the shell with a fork — the cheese stretches (the Instagram moment), the garlic butter drips, and the lobster flesh comes away trailing a thread of golden, blistered cheese that the eater twirls, pulls and bites. The mouthful: the cheese crust (browned, savoury, stretchy, Maillard-complex), the garlic butter (rich, allium-warm, fish-sauce-umami-boosted), and the lobster flesh (sweet, just-set, marine-clean, its inosinate synergising with the cheese's and the fish-sauce's glutamate into a perceived umami so intense it registers as RICHNESS rather than as saltiness).

The baguette — sliced, toasted or plain — scoops the pooled garlic-butter-and-melted-cheese from the shell's crevices. The bread-as-spoon is the French instinct, surviving intact in the Vietnamese banquet hall, and it is the correct instinct: no Vietnamese noodle, no rice, no rice paper can soak up hot garlic butter and melted cheese the way bread can, because bread's gluten network absorbs fat the way a sponge absorbs water — evenly, completely, and without falling apart.

This is the wedding's prestige plate — the one the guests photograph, the one the bill reflects, and the one that says: this family celebrated with the coast's lobster and the world's cheese, and the combination was not a compromise but a creation. A cuisine that borrows without shame and improves without apology is a cuisine that will outlast every purist's objection, and the tôm hùm nướng phô mai — twenty years old, universally adopted, and delicious — is the evidence.`,
      tip: `Tôm hùm nướng phô mai is the collection's youngest recipe — invented circa 2000, adopted nationally by 2010, and now as fixture-like at a Vietnamese wedding as the centuries-old gà luộc. Its speed of adoption proves a principle the collection has argued implicitly: Vietnamese cuisine is not a museum, and its canon is not closed. A dish earns its place on the table by being good enough to be demanded by the eater, and the eater's demand does not check the dish's passport. The lobster is Vietnamese (spiny lobster from Khánh Hòa). The cheese is Italian (mozzarella). The butter is French. The fish sauce is Phú Quốc. The garlic is universal. And the dish is all of them, and none of them, and Vietnamese — because the table it sits on is Vietnamese, and the table is what makes the dish.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
