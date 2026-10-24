'use client';
import RecipeLayout, { RecipeData } from '../_components/RecipeLayout';

const recipe: RecipeData = {
  slug: 'canh-cua-rau-day',
  title: `Canh Cua Rau Đay (Crab Soup with Jute Leaves — Nghệ An Summer Soup)`,
  subtitle: `Paddy crabs — the tiny, wild, field crabs caught in the rice paddies after rain — pounded whole in a mortar, strained into water, and simmered until the dissolved crab protein rises to the surface in a golden, spongy, meringue-like raft that floats on a clear, amber, crab-scented broth. Served with rau đay — jute leaves, the mucilaginous, slippery, iron-rich green that gives the soup a silky, viscous, almost-okra-like body. The Nghệ An summer soup that uses the paddy's crabs and the garden's leaves and nothing from the market.`,
  category: 'MAIN COURSE',
  difficulty: 'Medium',
  totalTime: '45 min',
  rating: 4.8,
  baseServings: 4,
  heroImage: '/images/recipes/canh-cua-rau-day.jpg',
  intro: `Canh cua — crab soup — is universal across Vietnamese cuisine, but the CRAB varies by region: the southern Delta uses cua đồng (the larger, meatier, brackish-water field crab); the centre uses cua biển (the ocean-caught swimming crab) for special occasions and cua đồng for daily; and the Nghệ An version uses the SMALLEST crab in the Vietnamese food chain — the rạm or cua rạm, the tiny (2-3 cm carapace, barely larger than a thumbnail), dark-brown, mud-dwelling, freshwater paddy crab that lives in the rice fields' irrigation channels and that is caught by the hundred after a summer rain by children who wade the flooded paddies and scoop the crabs into buckets with their bare hands.

The crabs are too small to pick — there is no "crab meat" to extract from a 2-3 cm crab in any meaningful quantity. Instead, the crabs are POUNDED WHOLE in a mortar — shell, legs, body, roe, everything — with water, and the resulting slurry is strained through a cloth, producing a turbid, brown-amber liquid that contains: dissolved crab PROTEIN (the muscle's myosin and the roe's vitellin, released from the crushed cells by the pounding), dissolved crab FAT (the roe's orange lipid, rich in astaxanthin — the same carotenoid the Châu Trúc shrimp's shell released), and dissolved crab MINERALS (the shell's calcium carbonate, partially dissolved by the pounding's mechanical disruption and by the water's slightly acidic pH).

When this strained liquid is heated, the dissolved proteins COAGULATE — they denature at 60-70°C and aggregate into a solid mass that rises to the surface of the pot, floating as a golden, spongy, meringue-like RAFT: the "gạch cua" (crab custard/crab raft), which is: golden-orange (the astaxanthin from the roe), spongy-light (the coagulated protein traps air and steam during its rise, producing a porous, aerated structure), and intensely crab-flavoured (the protein that formed the raft carried the crab's free amino acids — glycine, alanine, glutamate — with it to the surface, concentrating them in the raft's dense protein matrix).

The raft floats; the broth below it is CLEAR — the coagulation has stripped the dissolved proteins from the liquid (the same clarification mechanism a French consommé's egg-white raft uses), producing a crab-scented, amber, transparent broth that is: clean (no cloudiness), light (no fat — the raft also trapped the crab's lipid in its protein matrix), and carrying the crab's dissolved minerals and amino acids in a gentle, tea-like, sippable liquid.

The rau đay — Corchorus olitorius, the jute plant, the same species whose fibres make burlap sacking — is the soup's green, and it is a MUCILAGINOUS green: its leaves contain a water-soluble polysaccharide that, when heated, dissolves into the broth and thickens it to a slightly viscous, slightly slippery, almost-okra-like consistency. The mucilage is the rau đay's signature — no other Vietnamese cooking green provides it (rau ngót is sweet, rau muống is turgor-crisp, rau đắng is bitter — rau đay is SLIPPERY), and the slippery-broth is the soup's specific mouthfeel, the texture that the Nghệ An summer anticipates and the Nghệ An child remembers.`,
  ingredientSections: [
    {
      title: 'The crabs',
      items: [
        {
          amount: 500,
          unit: 'g',
          name: 'small freshwater paddy crabs (cua đồng or cua rạm), live, cleaned',
          note: `Cleaned: remove the top shell (carapace) flap, rinse away the gills and any mud. The crabs are POUNDED WHOLE — shell and all. If tiny paddy crabs are unavailable: 200 g crab paste (sold as "gạch cua" or "riêu cua" paste at Vietnamese groceries — pre-pounded, pre-strained, ready to simmer) replaces the pounding step. Alternatively: 200 g fresh crab meat + 2 tbsp crab roe, blended with 500 ml water and strained, approximates the strained liquid.`,
        },
      ],
    },
    {
      title: 'The jute leaves',
      items: [
        {
          amount: 200,
          unit: 'g',
          name: 'rau đay (jute leaves, Corchorus olitorius), stems removed, leaves only',
          note: `The MUCILAGINOUS green — its polysaccharide dissolves in hot broth and thickens it to a silky, slightly slippery viscosity. Available at Vietnamese and Middle Eastern/African groceries (called "molokhia" or "mulukhiyah" in Arabic — the same species, the same mucilage, used in Egyptian soup for the same slippery-broth effect). If unavailable: okra (sliced thin, 100 g) provides a similar mucilaginous thickening from a different polysaccharide (okra's galactomannan vs jute's pectin-like polysaccharide).`,
        },
      ],
    },
    {
      title: 'Additional greens and seasoning',
      items: [
        { amount: 100, unit: 'g', name: 'mồng tơi (Malabar spinach), leaves picked', note: `The second mucilaginous green — mồng tơi's mucilage reinforces the rau đay's, doubling the soup's slippery body. Often used alongside rau đay, not instead of it.` },
        { amount: 1, unit: 'L', name: 'water' },
        { amount: 2, unit: 'tbsp', name: 'fish sauce' },
        { amount: 1, unit: 'tsp', name: 'salt' },
        { amount: 2, name: 'tomatoes, quartered (optional — adds a sour-sweet note and an orange-red visual)' },
      ],
    },
    {
      title: 'To serve',
      items: [
        { amount: 4, name: 'bowls of hot steamed rice' },
        { amount: 1, name: 'saucer of mắm tôm pha (optional — the Nghệ An table always offers it)' },
      ],
    },
  ],
  steps: [
    {
      title: 'Pound the crabs whole, strain — the crab becomes a liquid',
      description: `Rinse the live crabs. Remove the apron (the triangular flap on the underside) and the gills (feathery, grey, attached under the carapace — bitter if included). Place the cleaned crabs in a mortar — 5-6 at a time.

POUND: hard, rhythmic, crushing — the shells crack, the bodies rupture, the orange roe mixes with the white muscle and the brown shell fragments. Add 200 ml water to the mortar. Continue pounding — the water becomes a turbid, brown-orange slurry as the crab's dissolved proteins, fats and minerals enter the liquid.

STRAIN: pour the slurry through a fine-mesh sieve or a cloth set over a bowl. Press the solids hard — extract every drop of the crab-infused liquid. Discard the shell fragments. The strained liquid should be: brown-amber (the crab's proteins and the roe's astaxanthin in suspension), opaque (the protein is still dissolved, not yet coagulated), and smelling of fresh, raw, marine-sweet crab.

Repeat with the remaining crabs. Total strained liquid: roughly 800 ml from 500 g of crabs + 500 ml water. Add the remaining 500 ml water to bring the total to 1 L.`,
      tip: `The whole-crab pounding extracts THREE things simultaneously: PROTEIN (from the muscle and the roe — this protein will coagulate into the floating raft), LIPID (from the roe — the orange astaxanthin-rich fat that gives the raft its golden colour), and CALCIUM (from the shell — calcium carbonate, partially dissolved by the mechanical disruption and by the water's CO₂-derived carbonic acid). The strained liquid is therefore a mineral-enriched, protein-loaded, fat-carrying broth BEFORE any cooking begins — a raw extract that the heat will transform into a clarified soup + a floating protein raft, the same way a French consommé's raw egg-white-in-stock is transformed by heat into a clarified broth + a floating clarification raft. The pounding is the extraction. The heat is the separation. And the raft is the proof that both worked.`,
    },
    {
      title: 'Heat gently — the protein rises as a golden raft, the broth clarifies below',
      description: `Pour the strained crab liquid into a pot. Set over MEDIUM-LOW heat — the liquid must warm SLOWLY (the protein coagulation that forms the raft occurs between 60-70°C, and a GRADUAL temperature rise produces a COHESIVE, LARGE, INTACT raft, while a rapid boil produces a FRAGMENTED, SCATTERED, BROKEN raft — the same gentle-vs-violent distinction the trứng chưng's steam-vs-boil and the pâté's bain-marie-vs-oven documented).

WATCH: at 55-60°C the first wisps of coagulated protein appear — pale threads rising from the liquid's surface, aggregating as they float upward. DO NOT STIR — stirring breaks the forming raft into fragments and distributes them through the liquid, producing a cloudy, raft-less, unappetising soup.

At 65-70°C: the raft has FORMED — a golden-orange, spongy, meringue-like mass floating on the liquid's surface, roughly 2-3 cm thick, covering most of the pot's opening. The raft is: the coagulated crab protein (denatured myosin and vitellin, aggregated into a porous solid), coloured by the trapped astaxanthin (golden-orange), and textured by the trapped air and steam (spongy, porous — the steam bubbles rose through the coagulating protein and were captured in its solidifying network, producing a structure identical to a bread's crumb: gas pockets in a protein matrix).

BELOW the raft: the broth is now CLEAR — the protein that made it cloudy has risen to the raft, taking the cloudiness with it (the same clarification a consommé's egg-white raft achieves). The clear broth is: amber (residual astaxanthin and dissolved amino acids), transparent (hold it to the light — clear), and crab-scented (the dissolved glycine, alanine and glutamate remain in the liquid, providing the broth's savoury flavour without the cloudiness).

Season: fish sauce, salt. Add the tomatoes if using — they sink below the raft and simmer in the clear broth.

Increase heat to a gentle simmer (NOT a hard boil — a hard boil breaks the raft). Simmer 10 minutes — the tomatoes soften, the broth's flavour deepens, and the raft firms.`,
      tip: `The raft-formation is a PROTEIN-COAGULATION-AND-FLOTATION phenomenon: the dissolved crab proteins denature at 60-70°C (their tertiary structure unfolds, exposing hydrophobic amino-acid residues that were previously buried inside the folded protein), the exposed hydrophobic residues AGGREGATE (like-attracts-like in water — the hydrophobic patches stick to each other, forming large, multi-protein complexes), and the aggregates FLOAT (their density is less than the broth's because they have trapped air and steam bubbles during the aggregation process — the bubbles make the aggregate BUOYANT). The flotation is what makes the raft self-separating: the protein rises on its own, no skimming needed, no straining needed — the physics does the clarification automatically. The cook's only job is to heat SLOWLY (so the aggregates form LARGE and COHESIVE) and to NOT STIR (so the aggregates stay together instead of fragmenting).`,
    },
    {
      title: 'Add the jute leaves, simmer 5 minutes — the broth becomes silky',
      description: `Add the rau đay leaves (and the mồng tơi if using) to the pot — push them gently into the broth BELOW the raft (the leaves should simmer in the liquid, not sit on top of the raft). The raft remains floating, undisturbed.

Simmer 5 minutes — the jute leaves wilt and soften, and their mucilaginous polysaccharide dissolves into the broth. The broth's consistency shifts: from thin-and-watery (before the leaves) to slightly VISCOUS, slightly SLIPPERY, the spoon meeting faint resistance as it stirs (the dissolved mucilage increases the broth's viscosity by roughly 2-3x — perceptible but not thick, slippery but not gloopy).

The soup is done when: the raft is golden, spongy and intact on the surface; the broth below is clear, amber, and viscous-silky from the dissolved mucilage; the jute leaves are wilted, dark green, tender; and the tomato quarters are soft.

LADLE carefully — break a piece of the raft with the ladle's edge, scoop it into the bowl alongside a ladleful of the silky broth and the wilted leaves. Each bowl should show: the golden raft-piece floating, the clear-amber broth pooling below, and the dark-green jute leaves draped at the bottom.

Serve with rice. Spoon the crab broth over the rice — the mucilaginous, silky broth coats the grains in a thin, slippery, crab-scented film that is unlike any other broth-on-rice experience in the collection: not watery (the mucilage provides body), not thick (the viscosity is gentle), but SILKY — the same adjective the giò lụa's texture and the trứng chưng's custard earned, here applied to a liquid rather than a solid. The broth is liquid silk, and the rice wears it.

Eat the raft separately — the golden, spongy, aerated protein is: concentrated-crab-flavoured (the glycine's sweetness, the glutamate's savouriness, the astaxanthin's faint marine-bitter, all compressed into the raft's dense protein), and texturally unique — spongy, yielding, melting on the tongue in 3-4 seconds as the saliva dissolves the coagulated protein back into solution. The raft is a SOLID that DISSOLVES — the opposite of the bánh hỏi (a solid that dissolves into starch) and the opposite of the ươi gel (a solid that dissolves into polysaccharide). The crab raft dissolves into PROTEIN — amino acids entering the saliva, the tongue tasting the crab's full chemistry as the raft deconstructs.

Canh cua rau đay closes the Nghệ An collection with the province's most SUMMER dish — the soup the kitchen makes in June, July and August when the paddies flood, the crabs multiply, the jute grows tall in the garden, and the heat demands a soup that is light, mineral-rich, slippery-cool and tasting of the paddy after rain. Ten Nghệ An dishes, ten arguments: the empty dipping sheet (bánh mướt), the cold-rice-hot-broth collision (cơm hến), the one-district fermented jackfruit (nhút), the wobbling bland-intense snack (bánh đúc), the forest-seed jellyfish drink (nước ươi), the ancestral soybean paste (tương Nam Đàn), the self-basting beach mackerel (cá thu nướng), the cotton-floss protein insurance (ruốc tôm), the highway malt-and-ginger candy (kẹo cu đơ), and now the paddy-crab silky-jute summer soup (canh cua rau đay). Each dish from the province's own terrain — the paddy, the estuary, the garden, the forest, the highway — and together they map a province that eats what it grows, ferments what it cannot eat fresh, and seasons everything with tương or mắm tôm and the confidence that Nghệ An's food needs no other province's approval.`,
      tip: `Rau đay (Corchorus olitorius) is the same plant the Egyptians call MULUKHIYAH and cook into the national soup of Egypt — a mucilaginous, green, simmered-leaf soup that is, structurally, the canh cua rau đay's sibling: both use jute-leaf mucilage to thicken a broth, both simmer the leaves briefly (5-10 min, to dissolve the mucilage without destroying the leaf's colour), and both serve the slippery result over or alongside a starch (the Egyptian version over rice; the Vietnamese version with rice). The Vietnamese and the Egyptian arrived at the same soup from opposite sides of the world, using the same plant, the same technique (brief simmer of mucilaginous leaves in broth), and the same eating format (starchy base + slippery-green-soup). The convergence is: jute grows in the tropics; the tropics are hot; hot climates produce the same mucilaginous-green-soup solution because the slippery broth is COOLING (the mucilage's viscosity slows the broth's transit through the mouth, increasing contact time with the tongue's cooler surface, producing a prolonged cooling sensation). The same plant, the same soup, the same climate, the same solution — from Nghệ An to Cairo.`,
    },
  ],
};

export default function Page() {
  return <RecipeLayout recipe={recipe} />;
}
