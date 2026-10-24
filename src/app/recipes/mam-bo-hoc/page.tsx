'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'mam-bo-hoc',
  title: `Mắm Bò Hóc (Khmer Fermented Mudfish Paste — Prahok)`,
  subtitle: `The ingredient that seasons everything in Trà Vinh and appears in nothing outside it: whole Mekong mudfish, salted, sun-dried, pounded and fermented in stoneware jars for three months until they collapse into a thick, purple-grey, violently fragrant paste. The Khmer fish sauce — but denser, earthier and more confrontational than anything the Vietnamese fish-sauce tradition produces.`,
  category: 'MAIN COURSE',
  difficulty: 'Hard',
  totalTime: '3 months',
  rating: 4.7,
  baseServings: 12,
  heroImage: '/images/recipes/mam-bo-hoc.jpg',
  intro: `This is the ingredient that built the Trà Vinh collection. Every dish in it — the golden bún nước lèo, the thin green cháo ám, the grilled beef's dipping salt — traces its flavour back to this jar, and no record of the province's cooking is complete without documenting the jar itself. Mắm bò hóc is the Vietnamese name for prahok, the Khmer fermented fish paste that has anchored Cambodian and Khmer-diaspora cooking for as long as either has been recorded, and Trà Vinh is where it crosses the cultural border into a Vietnamese province's daily kitchen.

The fish is cá lóc đồng — the wild snakehead mudfish of the flooded fields and canal systems of the Mekong, the same fish this collection has grilled in straw in Vĩnh Long and poached in cháo ám in Trà Vinh. During the flood-recession months, when the fields drain and the canals narrow, the mudfish are caught in enormous quantities — too many to eat fresh, too many to dry in the sun before they spoil — and the Khmer solution, arrived at millennia ago, is to convert the glut into a shelf-stable paste by the one mechanism that has always worked: salt and time.

The process is a three-stage fermentation more aggressive than anything in the Vietnamese mắm tradition. First, the fish are gutted, scaled and salted heavily — typically 25-30% salt by weight, far more than the 6% of the Tuyên Quang rice-field mắm — and left to cure for 24 hours. Then they are spread in the sun for a day or two until partially dried, which concentrates the flesh and drives the surface moisture down to a level that inhibits aerobic spoilage. Then the dried, salted fish are pounded — genuinely pounded, in a mortar, until the flesh breaks down into a coarse, fibrous paste — packed tightly into stoneware jars, and sealed. The jar sits for a minimum of three months, during which the fish's own endogenous enzymes and halophilic bacteria slowly hydrolyse the protein into free amino acids, principally glutamate, and generate the vast, complex, earthy, cheesy, funky aroma profile that defines prahok and that no other fermented fish product in the region quite matches.

The result is a thick, purple-grey paste with a texture somewhere between chunite and a coarse tapenade, and a smell that clears a room with the authority of a genuine Roquefort. It is not, and has never pretended to be, subtle. Vietnamese fish sauce (nước mắm) is the polished diplomat of fish fermentation — clear, liquid, amber, pungent but civilised. Mắm bò hóc is the farmer who made it: coarser, denser, louder, and carrying its own bones. The two products start from the same chemistry — enzymatic hydrolysis of fish protein under salt — but diverge at every decision point: nước mắm extracts the liquid and discards the solids; mắm bò hóc keeps everything and pounds it into one mass. Nước mắm is aged for a year or more and mellowed; mắm bò hóc is ready at three months and still raw-edged. Nước mắm is a seasoning measured in tablespoons; mắm bò hóc is an ingredient measured in dishes.

In the Trà Vinh kitchen it is used three ways. Dissolved, strained and simmered into broth (the bún nước lèo method), it gives a deep umami-earthy base note that fish sauce alone cannot. Fried briefly in fat with aromatics (the chưng method), it mellows into a savoury paste eaten with rice and vegetables. And raw — mashed with chilies, garlic, lime, sugar and herbs — it is the dipping sauce that accompanies grilled meats and raw vegetables across the Khmer table, the equivalent of the Thai nam prik pla ra, unapologetic, unmistakable and unreplaceable.

This recipe documents the traditional from-scratch fermentation with modern food-safety guardrails, because the collection's purpose is to document the food as it is made, including the foods that take three months. Mắm bò hóc is also widely available in jars at Vietnamese and Cambodian groceries, and buying it is the honest path for anyone who wants to cook the nine preceding recipes without waiting a season. The jar from the grocer will serve you faithfully. The jar from your own kitchen will serve you differently — and the difference, as in every ferment this collection has documented, is the difference between buying a flavour and knowing where it came from.`,
  ingredientSections: [
    {
      title: 'The fish',
      items: [
        {
          amount: 3,
          unit: 'kg',
          name: 'whole cá lóc (snakehead mudfish), the freshest possible — or whole cá rô, cá sặc',
          note: `Gutted, scaled, gills removed, heads on or off by preference. The fish must be alive or same-day-killed — a stale fish ferments into something foul rather than something savoury, and no amount of salt corrects a bad start. In Europe: whole frozen Vietnamese snakehead (cá lóc) from Asian groceries, fully thawed and drained; or substitute whole fresh carp, tilapia or mackerel of a similar size (15-25 cm), understanding that each fish produces a slightly different paste.`,
        },
      ],
    },
    {
      title: 'The salt cure',
      items: [
        {
          amount: 750,
          unit: 'g',
          name: 'coarse sea salt (25% of the fish weight — weigh it)',
          note: `This is a heavy salt cure, far above the 6% of a rice-driven fermentation. The high salt suppresses all but the most salt-tolerant (halophilic) bacteria and enzymes, and it is the reason prahok keeps for years at room temperature without refrigeration. Measure by weight, not by volume — the safety margin depends on the ratio. Below 20% the risk of Clostridium botulinum and other dangerous anaerobes rises to unacceptable levels in a dense, low-oxygen paste. 25% is the traditional Khmer floor and this recipe does not go below it.`,
        },
      ],
    },
    {
      title: 'The jar and the seal',
      items: [
        {
          amount: 1,
          name: 'stoneware or glass jar, 4-5 L, wide-mouthed, with a lid — sanitized',
          note: `Sanitize with boiling water and dry completely. Stoneware is traditional — it breathes very slightly through its unglazed interior, which some makers believe contributes to flavour complexity. Glass lets you watch. Either works. Metal does not — the salt corrodes it and taints the paste.`,
        },
        { amount: 1, name: 'piece of clean muslin or banana leaf, to cover the surface under the lid' },
        { amount: 1, name: 'heavy flat stone or ceramic plate, sanitized, to weight the surface' },
      ],
    },
  ],
  steps: [
    {
      title: 'Gut, scale, salt — the first 24 hours',
      description: `Gut each fish through a belly cut, scale thoroughly, remove the gills, and rinse until the water runs completely clear. Drain and pat every fish dry.

Rub the weighed salt into every fish — inside the cavity, across every surface, into the gill pocket if the head is kept — and pack them tightly in a large basin or crock, bellies up so the salt penetrates the open cavity. Cover and leave in a cool, shaded place for 24 hours.

By morning the fish will have wept a startling volume of brine. Drain it off. The fish should be visibly firmer, paler, and smelling sharply of salt and clean fish — not of rot. Any off-smell at this stage means the fish were not fresh enough; discard and start with fresh fish.`,
      tip: `The 25% salt loading is doing two jobs simultaneously: preservation and flavour direction. At this concentration, water activity drops below 0.85 — the threshold below which Clostridium botulinum cannot produce toxin and most spoilage bacteria cannot grow. What CAN grow are the halophilic bacteria (Halobacterium, Halococcus, certain Bacillus species) and the fish's own salt-stable digestive enzymes, which are the agents that will drive the actual fermentation over the coming months. The heavy salt is not killing everything — it is selecting for the organisms and the chemistry you want and excluding everything you do not. Every traditional fish ferment on earth uses this same selective pressure; the salt percentage is the tuning knob.`,
    },
    {
      title: 'Sun-dry 1-2 days — partially, not completely',
      description: `Spread the salted, drained fish on bamboo racks or wire racks in direct sun with good airflow. Dry for 1-2 days, turning twice a day, until the surfaces are firm and leathery and the fish have lost roughly 30-40% of their post-salting weight — still pliable, not rigid.

The goal is partial drying: enough to concentrate the flesh and remove the free water that would otherwise dilute the ferment and support unwanted bacteria, but not so much that the fish becomes jerky, which would resist the pounding and the enzymatic breakdown.

No sun? A fan oven at 50-60°C with the door cracked, 8-12 hours, turning once, is the practical alternative. Do not exceed 60°C — higher temperatures start denaturing the very enzymes you need for the fermentation.`,
      tip: `The partial drying is the step that separates prahok from the lighter, wetter, faster ferments in the Vietnamese mắm tradition. It drives the tissue's water activity even lower than the salt alone achieved, further narrowing the microbial field to only the most salt-tolerant and desiccation-tolerant species — which happen to be the slow, steady, flavour-producing ones. And it concentrates the fish's own enzymes and substrates, so the fermentation that follows runs from a denser starting point and produces a more intensely flavoured result. Drying is the front-loaded investment; the jar is where it pays out.`,
    },
    {
      title: 'Pound the dried fish — coarse paste, not powder',
      description: `Break each dried, salted fish into rough pieces and pound in a heavy mortar — or process in very short pulses — until the flesh has broken down into a coarse, fibrous, damp paste with visible flecks of muscle fibre. Bones in small fish will soften and become part of the paste; in larger fish, pull out the spine and major bones before pounding and discard them.

The paste should be thick, heavy, slightly sticky, and hold its shape when packed — like a coarse terrine forcemeat. It should not be smooth or emulsified; the fibre structure is what gives the finished prahok its characteristic coarse, spreadable texture.

Do not use a blender at high speed — it homogenises the protein into a smooth emulsion and whips in air, and the resulting paste oxidises faster and ferments unevenly.`,
      tip: `Pounding rather than blending is the same distinction this collection made for the Vĩnh Long mắm sống, and the reason is the same: a mortar compresses and tears, keeping surface area low and oxidation slow; a blender shears and aerates, exposing maximum surface to oxygen. In a fermentation that will run for three months, the starting oxidation state of the paste determines whether it ages gracefully (the mortar — slow, steady, complex) or goes sharp and metallic within weeks (the blender — fast, rancid, flat). The pestle is not a slower blender. It is a different tool that produces a different chemistry.`,
    },
    {
      title: 'Pack the jar, weight the surface, seal — and wait three months',
      description: `Pack the pounded paste tightly into the sanitized jar, pressing each layer hard with your fist or a pestle to eliminate air pockets. Fill to within 5 cm of the rim. Smooth the surface flat, lay the muslin or banana leaf over it, and set the weight on top — heavy enough to keep the paste compressed as it releases gas and liquid.

Set the lid on loosely — the ferment produces CO₂ and the jar needs to vent. Store in a cool, dark, well-ventilated place. The kitchen corner is fine; a closed cupboard is not, because you want to smell problems early.

Weeks 1-2: the paste will darken, release a brine that rises above the weight, and begin to smell actively — fermented, pungent, and increasingly like a strong aged cheese. This is correct.

Week 4: the smell shifts from sharp and raw to deeper, rounder, more savoury — less like fresh fish, more like Parmesan crossed with miso. The colour deepens to a uniform purple-grey. Open and inspect the surface monthly; skim any surface film beyond a thin white bloom (which is harmless kahm yeast).

HARD STOP: green, black or pink mould; a rotten or sulfurous smell (as distinct from a strong fermented one — the difference is experience, but rot is unmistakable); any slimy or discoloured patches that look wrong. Discard the entire jar. No scraping, no second-guessing.

At 3 months: the paste is a thick, coarse, uniformly purple-grey mass. A finger pressed into it leaves a slow impression. The smell is powerful, complex, earthy-cheesy-funky with no sharpness. The taste — go on, a fingertip — is intensely savoury, very salty, with a long fermented finish and a depth that no other ingredient in the Vietnamese pantry reaches. It is ready.`,
      tip: `Three months is the minimum and many Khmer makers age prahok for a year or more, during which the enzymatic hydrolysis continues to break protein down further, the volatile profile mellows as the harshest amines degrade, and the paste darkens and thickens. A three-month prahok is young — assertive, sharp-edged, and best suited to cooking (dissolving into broth, frying as chưng). A year-old prahok is mellow enough to eat raw, mashed with herbs and lime, and tastes profoundly of umami with only a ghost of its former rawness. The jar does not expire; it matures. And a household that keeps its jar and tops it up, year after year, develops a culture — literally, a bacterial and enzymatic culture — that is unique to that kitchen, which is why the Khmer say prahok tastes of the house that made it. This is not mysticism. It is microbiology.`,
    },
    {
      title: 'Use it three ways — and understand that the nine recipes before this one were always about this jar',
      description: `DISSOLVED AND STRAINED (the bún nước lèo method): 2-3 tablespoons dissolved in warm water, strained through a fine sieve, simmered into a broth with lemongrass, galangal and coconut milk. The broth turns gold and the mắm disappears into it, leaving only depth.

FRIED (the chưng method): 2 tablespoons fried gently with shallot, garlic and minced pork in a pan until the raw edge evaporates and the paste mellows into a warm, savoury, spreadable condiment. Eaten with rice, cucumber, herbs.

RAW (the dipping paste): mashed with mortar-pounded garlic, chili, lime juice, sugar and herbs — a coarse, pungent, deeply savoury dip for grilled meats and raw vegetables. The Khmer mồi nhậu format: strong flavour, small quantity, slow evening.

Keeps indefinitely at room temperature in a sealed jar — the salt content ensures it. Refrigerated, it firms and mellows further. A jar lasts a Trà Vinh household months or years, spooned from as needed, and a well-maintained one outlives the cook who started it.`,
      tip: `Step back from the jar and see the whole Trà Vinh collection reflected in it. The bún nước lèo's golden broth: mắm bò hóc, strained and simmered. The cháo ám's earthy depth: mắm bò hóc, stirred into rice soup. The grilled beef's dipping salt: roasted rice powder that echoes the thính in the paste. Even the coconut cream of the bánh tằm bì exists, in part, as a foil against the paste's intensity on the same table. Every dish in this province is a sentence; mắm bò hóc is the grammar. To document the province without documenting the jar would be to transcribe a language without recording its alphabet — the words would be there, but the reason they made sense would be missing. The jar is the reason. And the jar, once made, makes everything else possible.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
